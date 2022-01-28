<template>
    <div class="vue-csv-uploader">
        <div class="form">
            <div class="vue-csv-uploader-part-one" v-show="step == 1">
                <div style="width:50%;margin-left:auto;margin-right:auto;">
                    <div class="form-group csv-import-file">
                        <vue-dropzone  ref="csv" id="dropzone"  name="csv" :options="dropzoneOptions"  @vdropzone-success="load"></vue-dropzone>
                    </div>
                </div>

            </div>
            <div class="vue-csv-uploader-part-two" v-show="step == 2">
                <div class="vue-csv-mapping overflow-500" v-if="sample">
                    <table class="vue-csv-import-map-table" :class="tableClass">
                        <slot name="thead">
                            <thead class="sticky-top">
                            <tr>
                                <th>Field</th>
                                <th>Data Preview</th>
                                <th>Column</th>
                            </tr>
                            </thead>
                        </slot>
                        <tbody>
                        <tr v-for="(field, key) in fieldsToMap" :key="key" v-if="rerender">
                            <td>{{ field.label }} <span class="text-warning" v-show="field.required">*</span></td>
                            <td>
                                <p v-for="(row, index) in csv" v-if="index>0 && index<4">
                                    {{ row[map[field.label]] }}
                                </p>
                            </td>
                            <td>
                                <select class="custom-select" @change="mapChange" v-model="map[field.key]">
                                    <option v-for="(column, index) in firstRow" :key="index" :value="index">{{ column }}</option>
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
          <div class="form-group">
            <slot name="submit" :submit="submit">
              <input type="submit" :class="buttonClass" @click.prevent="finish" :value="submitBtnText">
            </slot>
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
                default: "Next"
            },
            submitBtnText: {
                type: String,
                default: "Next"
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
                default: "btn btn-falcon-primary float-right mt-3"
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
                        key: item.label,
                        label: item.label,
                      required: item.required
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
            finish(){
                this.$emit('finishCsv', this.form.csv);
            },
            mapChange(){
                this.rerender=null;
                let _this = this;
                if (!this.url) {
                    var hasAllKeys = this.mapFields.every(function (item) {
                        return _this.map.hasOwnProperty(item);
                    });
                  this.submit();

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
                    // eslint-disable-next-line no-unused-vars
                    for (const [index, [key, value]] of Object.entries(Object.entries(_this.csv[0]))) {
                        for (let i = 0; i < _this.fieldsToMap.length; i++) {
                            if (_this.fieldsToMap[i].label.toLowerCase() == value.toLowerCase()) {
                                _this.map[value] = Number(key);
                            }
                        }
                    }
                    this.form.csv = this.buildMappedCsv();
                    this.$emit('loadedData', this.form.csv);
                    // this.$emit('loadedData', _this.csv);

                });


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
