<template>
    <div class="vue-csv-uploader">
        <div class="form">
            <div class="vue-csv-uploader-part-one" v-show="step == 1">
                <div class="form-check form-group csv-import-checkbox" v-if="headers === null">
                    <slot name="hasHeaders" :headers="hasHeaders" :toggle="toggleHasHeaders">
                        <input :class="checkboxClass" type="checkbox" id="hasHeaders" :value="hasHeaders" @change="toggleHasHeaders">
                        <label class="form-check-label" for="hasHeaders">
                            File Has Headers
                        </label>
                    </slot>

                </div>
                <div style="width:50%;margin-left:auto;margin-right:auto;">
                    <div class="form-group csv-import-file">
                        <vue-dropzone  ref="csv" id="dropzone"  name="csv" :options="dropzoneOptions"  @vdropzone-success="load"></vue-dropzone>
                    </div>
                </div>
                <div class="form-group">
                    <slot name="next" :load="load">
                        <input type="submit" :class="buttonClass" @click.prevent="load" :value="loadBtnText">
                    </slot>
                </div>
            </div>
            <div class="vue-csv-uploader-part-two" v-show="step == 2">
                <div class="vue-csv-mapping" v-if="sample">
                    <table class="vue-csv-import-map-table" :class="tableClass">
                        <slot name="thead">
                            <thead>
                            <tr>
                                <th>Field</th>
                                <th>Data Preview</th>
                                <th>Column</th>
                            </tr>
                            </thead>
                        </slot>
                        <tbody>
                        <tr v-for="(field, key) in fieldsToMap" :key="key" v-if="rerender">
                            <td>{{ field.label }}</td>
                            <td>
                                <p v-for="(row, index) in csv" v-if="index>0">
                                    {{ row[map[field.label]] }}
                                </p>
                            </td>
                            <td>
                                <select class="form-control" @change="mapChange" v-model="map[field.key]">
                                    <option v-for="(column, index) in firstRow" :key="index" :value="index">{{ column }}</option>
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="form-group" v-if="url">
                        <slot name="submit" :submit="submit">
                            <input type="submit" :class="buttonClass" @click.prevent="submit" :value="submitBtnText">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import axios from 'axios';
    import Papa from 'papaparse';
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        components: {
            vueDropzone: vue2Dropzone
        },

        props: {
            value: Array,
            url: {
                type: String
            },
            mapFields: {
                required: true
            },
            callback: {
                type: Function,
                default: () => {
                }
            },
            catch: {
                type: Function,
                default: () => {
                }
            },
            finally: {
                type: Function,
                default: () => {
                }
            },
            parseConfig: {
                type: Object,
                default() {
                    return {};
                }
            },
            headers: {
                default: null
            },
            loadBtnText: {
                type: String,
                default: "Submit"
            },
            submitBtnText: {
                type: String,
                default: "Submit"
            },
            tableClass: {
                type: String,
                default: "table"
            },
            checkboxClass: {
                type: String,
                default: "form-check-input"
            },
            buttonClass: {
                type: String,
                default: "btn btn-primary"
            },
            inputClass: {
                type: String,
                default: "form-control-file"
            }
        },

        data: () => ({
            rerender: true,
            form: {
                csv: null,
            },
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 1,
                autoProcessQueue: true,
                acceptedFiles:
                    "text/csv,.csv,.xls,.xlsx.,.doc,.docx, application/msword,application/msword",
                maxFiles: 1,
                dictDefaultMessage:'Drag and Drop or choose a file to upload your customers. <br /> Only .csv files are supported.'
            },
            fieldsToMap: [],
            map: {},
            hasHeaders: true,
            step:1,
            csv: null,
            sample: null,
        }),

        created() {
            this.hasHeaders = this.headers;

            if (_.isArray(this.mapFields)) {
                this.fieldsToMap = _.map(this.mapFields, (item) => {
                    return {
                        key: item,
                        label: item
                    };
                });
            } else {
                this.fieldsToMap = _.map(this.mapFields, (label, key) => {
                    return {
                        key: key,
                        label: label
                    };
                });
            }
        },

        methods: {
            mapChange(){
                this.rerender=null;
                let _this = this;
                if (!this.url) {
                    var hasAllKeys = this.mapFields.every(function (item) {
                        return _this.map.hasOwnProperty(item);
                    });

                    if (hasAllKeys) {
                        this.submit();
                    }
                }

                this.rerender=true;
            },
            submit() {
                const _this = this;
                this.form.csv = this.buildMappedCsv();
                this.$emit('input', this.form.csv);

                if (this.url) {
                    axios.post(this.url, this.form).then(response => {
                        _this.callback(response);
                    }).catch(response => {
                        _this.catch(response);
                    }).finally(response => {
                        _this.finally(response);
                    });
                } else {
                    _this.callback(this.form.csv);
                }
            },
            buildMappedCsv() {
                const _this = this;

                let csv = this.hasHeaders ? _.drop(this.csv) : this.csv;

                return _.map(csv, (row) => {
                    let newRow = {};

                    _.forEach(_this.map, (column, field) => {
                        _.set(newRow, field, _.get(row, column));
                    });

                    return newRow;
                });
            },
            load() {
                this.step=2;
                const _this = this;

                this.readFile((output) => {
                    _this.sample = _.get(Papa.parse(output, { preview: 2, skipEmptyLines: true }), "data");
                    _this.csv = _.get(Papa.parse(output, { skipEmptyLines: true }), "data");
                    console.log("CSV Loaded");
                    console.log(_this.csv);
                    // eslint-disable-next-line no-unused-vars
                    for (const [index, [key, value]] of Object.entries(Object.entries(_this.csv[0]))) {
                        for (let i = 0; i < _this.fieldsToMap.length; i++) {
                            if (_this.fieldsToMap[i].label.toLowerCase() == value.toLowerCase()) {
                                _this.map[value] = Number(key);
                            }
                        }
                    }
                    this.$emit('loadedData', _this.csv);

                });
                console.log("MAP AFTER LOAD");
                console.log(_this.map);


            },
            readFile(callback) {
                let file = this.$refs.csv.getAcceptedFiles()[0];
                if (file) {
                    let reader = new FileReader();
                    reader.readAsText(file, "UTF-8");
                    reader.onload = function (evt) {
                        callback(evt.target.result);
                    };
                    reader.onerror = function () {
                    };
                }
            },
            toggleHasHeaders() {
                this.hasHeaders = !this.hasHeaders;
            }
        },
        watch: {
            map: {
                handler: function (newVal) {
                    this.rerender=null;
                    if (!this.url) {
                        var hasAllKeys = this.mapFields.every(function (item) {
                            return newVal.hasOwnProperty(item);
                        });

                        if (hasAllKeys) {
                            this.submit();
                        }
                    }

                    this.rerender=true;
                },
                deep: true
            }
        },
        computed: {
            firstRow() {
                return _.get(this, "sample.0");
            }
        },
    };
</script>
