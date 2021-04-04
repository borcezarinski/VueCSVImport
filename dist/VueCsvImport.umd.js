(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("vue"), require("axios"));
	else if(typeof define === 'function' && define.amd)
		define([, , ], factory);
	else if(typeof exports === 'object')
		exports["VueCsvImport"] = factory(require("lodash"), require("vue"), require("axios"));
	else
		root["VueCsvImport"] = factory(root["_"], root["Vue"], root["axios"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__60bb__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_cebe__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "369b":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.0.0
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,k={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;q(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!q(t.transform)&&t.transform,t.worker&&k.WORKERS_SUPPORTED){var i=function(){if(!k.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),k.BLOB_URL||(k.BLOB_URL=r.createObjectURL(new Blob(["(",i,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=h++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=q(t.step),t.chunk=q(t.chunk),t.complete=q(t.complete),t.error=q(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;k.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&q(e.read)&&q(e.on)?n=new m(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var i=!1,_=!0,g=",",v="\r\n",n='"',s=n+n,r=!1,a=null;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||k.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(g=t.delimiter);("boolean"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(n=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");a=t.columns}void 0!==t.escapeChar&&(s=t.escapeChar+n)}();var o=new RegExp(U(n),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,r);if("object"==typeof e[0])return u(a||h(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:h(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],r);throw new Error("Unable to serialize unrecognized input");function h(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function u(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=g),i+=y(e[a],a);0<t.length&&(i+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=g);var m=n&&s?e[p]:p;i+=y(t[o][m],p)}o<t.length-1&&(!r||0<h&&!f)&&(i+=v)}}return i}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);e=e.toString().replace(o,s);var r="boolean"==typeof i&&i||Array.isArray(i)&&i[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(e,k.BAD_DELIMITERS)||-1<e.indexOf(g)||" "===e.charAt(0)||" "===e.charAt(e.length-1);return r?n+e+n:e}}};if(k.RECORD_SEP=String.fromCharCode(30),k.UNIT_SEP=String.fromCharCode(31),k.BYTE_ORDER_MARK="\ufeff",k.BAD_DELIMITERS=["\r","\n",'"',k.BYTE_ORDER_MARK],k.WORKERS_SUPPORTED=!n&&!!f.Worker,k.NODE_STREAM_INPUT=1,k.LocalChunkSize=10485760,k.RemoteChunkSize=5242880,k.DefaultDelimiter=",",k.Parser=y,k.ParserHandle=r,k.NetworkStreamer=l,k.FileStreamer=c,k.StringStreamer=p,k.ReadableStreamStreamer=m,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(q(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(q(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){q(a)&&a(e,n.file,n.inputElem),u()},k.parse(n.file,n.instanceConfig)}else q(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&q(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:k.WORKER_ID,finished:a});else if(q(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!q(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){q(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:k.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=k.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=E(this._chunkLoaded,this),i.onerror=E(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{i.send()}catch(e){this._chunkError(e.message)}n&&0===i.status?this._chunkError():this._start+=this._config.chunkSize}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=k.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=E(this._chunkLoaded,this),i.onerror=E(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;u.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function m(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=E(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=E(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=E(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=E(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(_){var a,o,h,i=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,n=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,u=0,f=!1,e=!1,d=[],l={data:[],errors:[],meta:{}};if(q(_.step)){var s=_.step;_.step=function(e){if(l=e,p())c();else{if(c(),0===l.data.length)return;r+=e.data.length,_.preview&&r>_.preview?o.abort():s(l,t)}}}function g(e){return"greedy"===_.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function c(){if(l&&h&&(v("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+k.DefaultDelimiter+"'"),h=!1),_.skipEmptyLines)for(var e=0;e<l.data.length;e++)g(l.data[e])&&l.data.splice(e--,1);return p()&&function(){if(!l)return;function e(e){q(_.transformHeader)&&(e=_.transformHeader(e)),d.push(e)}if(Array.isArray(l.data[0])){for(var t=0;p()&&t<l.data.length;t++)l.data[t].forEach(e);l.data.splice(0,1)}else l.data.forEach(e)}(),function(){if(!l||!_.header&&!_.dynamicTyping&&!_.transform)return l;function e(e,t){var r,i=_.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];_.header&&(n=r>=d.length?"__parsed_extra":d[r]),_.transform&&(s=_.transform(s,n)),s=m(n,s),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return _.header&&(r>d.length?v("FieldMismatch","TooManyFields","Too many fields: expected "+d.length+" fields but parsed "+r,u+t):r<d.length&&v("FieldMismatch","TooFewFields","Too few fields: expected "+d.length+" fields but parsed "+r,u+t)),i}var t=1;!l.data[0]||Array.isArray(l.data[0])?(l.data=l.data.map(e),t=l.data.length):l.data=e(l.data,0);_.header&&l.meta&&(l.meta.fields=d);return u+=t,l}()}function p(){return _.header&&0===d.length}function m(e,t){return r=e,_.dynamicTypingFunction&&void 0===_.dynamicTyping[r]&&(_.dynamicTyping[r]=_.dynamicTypingFunction(r)),!0===(_.dynamicTyping[r]||_.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(i.test(t)?parseFloat(t):n.test(t)?new Date(t):""===t?null:t):t;var r}function v(e,t,r,i){l.errors.push({type:e,code:t,message:r,row:i})}this.parse=function(e,t,r){var i=_.quoteChar||'"';if(_.newline||(_.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(U(t)+"([^]*?)"+U(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,_.delimiter)q(_.delimiter)&&(_.delimiter=_.delimiter(e),l.meta.delimiter=_.delimiter);else{var n=function(e,t,r,i,n){var s,a,o;n=n||[",","\t","|",";",k.RECORD_SEP,k.UNIT_SEP];for(var h=0;h<n.length;h++){var u=n[h],f=0,d=0,l=0;o=void 0;for(var c=new y({comments:i,delimiter:u,newline:t,preview:10}).parse(e),p=0;p<c.data.length;p++)if(r&&g(c.data[p]))l++;else{var m=c.data[p].length;d+=m,void 0!==o?1<m&&(f+=Math.abs(m-o),o=m):o=0}0<c.data.length&&(d/=c.data.length-l),(void 0===a||a<f)&&1.99<d&&(a=f,s=u)}return{successful:!!(_.delimiter=s),bestDelimiter:s}}(e,_.newline,_.skipEmptyLines,_.comments,_.delimitersToGuess);n.successful?_.delimiter=n.bestDelimiter:(h=!0,_.delimiter=k.DefaultDelimiter),l.meta.delimiter=_.delimiter}var s=b(_);return _.preview&&_.header&&s.preview++,a=e,o=new y(s),l=o.parse(a,t,r),c(),f?{meta:{paused:!0}}:l||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,o.abort(),a=a.substr(o.getCharIndex())},this.resume=function(){t.streamer._halted?(f=!1,t.streamer.parseChunk(a,!0)):setTimeout(this.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),l.meta.aborted=!0,q(_.complete)&&_.complete(l),a=""}}function U(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function y(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,z=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(z=e.escapeChar),("string"!=typeof D||-1<k.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<k.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var M=0,j=!1;this.parse=function(a,r,t){if("string"!=typeof a)throw new Error("Input must be a string");var i=a.length,e=D.length,n=I.length,s=T.length,o=q(A),h=[],u=[],f=[],d=M=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],M+=f.length,c!==l.length-1)M+=I.length;else if(t)return R();if(!T||f.substr(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,M),m=a.indexOf(I,M),_=new RegExp(U(z)+U(O),"g"),g=a.indexOf(O,M);;)if(a[M]!==O)if(T&&0===f.length&&a.substr(M,s)===T){if(-1===m)return R();M=m+n,m=a.indexOf(I,M),p=a.indexOf(D,M)}else{if(-1!==p&&(p<m||-1===m)){if(-1===g){f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}var v=x(p,g,m);if(v&&v.nextDelim){p=v.nextDelim,g=v.quoteSearch,f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}}if(-1===m)break;if(f.push(a.substring(M,m)),C(m+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(g=M,M++;;){if(-1===(g=a.indexOf(O,g+1)))return t||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:M}),w();if(g===i-1)return w(a.substring(M,g).replace(_,O));if(O!==z||a[g+1]!==z){if(O===z||0===g||a[g-1]!==z){var y=E(-1===m?p:Math.min(p,m));if(a[g+1+y]===D){f.push(a.substring(M,g).replace(_,O)),a[M=g+1+y+e]!==O&&(g=a.indexOf(O,M)),p=a.indexOf(D,M),m=a.indexOf(I,M);break}var k=E(m);if(a.substr(g+1+k,n)===I){if(f.push(a.substring(M,g).replace(_,O)),C(g+1+k+n),p=a.indexOf(D,M),g=a.indexOf(O,M),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:M}),g++}}else g++}return w();function b(e){h.push(e),d=M}function E(e){var t=0;if(-1!==e){var r=a.substring(g+1,e);r&&""===r.trim()&&(t=r.length)}return t}function w(e){return t||(void 0===e&&(e=a.substr(M)),f.push(e),M=i,b(f),o&&S()),R()}function C(e){M=e,b(f),f=[],m=a.indexOf(I,M)}function R(e,t){return{data:t||!1?h[0]:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(r||0)}}}function S(){A(R(void 0,!0)),h=[],u=[]}function x(e,t,r){var i={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<r||-1===r)){var s=a.indexOf(D,n);if(-1===s)return i;n<s&&(n=a.indexOf(O,n+1)),i=x(s,n,r)}else i={nextDelim:e,quoteSearch:t};return i}},this.abort=function(){j=!0},this.getCharIndex=function(){return M}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,g(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(q(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else q(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&g(t.workerId,t.results)}function g(e,t){var r=a[e];q(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=b(e[r]);return t}function E(e,t){return function(){e.apply(t,arguments)}}function q(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===k.WORKER_ID&&t&&(k.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:k.WORKER_ID,results:k.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=k.parse(t.input,t.config);r&&f.postMessage({workerId:k.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(m.prototype=Object.create(u.prototype)).constructor=m,k});

/***/ }),

/***/ "60bb":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__60bb__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cebe__;

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"66913ba2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueCsvImport.vue?vue&type=template&id=5e908763&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-csv-uploader"},[_c('div',{staticClass:"form"},[_c('div',{staticClass:"vue-csv-uploader-part-one"},[(_vm.headers === null)?_c('div',{staticClass:"form-check form-group csv-import-checkbox"},[_vm._t("hasHeaders",[_c('input',{class:_vm.checkboxClass,attrs:{"type":"checkbox","id":"hasHeaders"},domProps:{"value":_vm.hasHeaders},on:{"change":_vm.toggleHasHeaders}}),_c('label',{staticClass:"form-check-label",attrs:{"for":"hasHeaders"}},[_vm._v("\n                        File Has Headers\n                    ")])],{"headers":_vm.hasHeaders,"toggle":_vm.toggleHasHeaders})],2):_vm._e(),_c('div',{staticClass:"form-group csv-import-file"},[_c('input',{ref:"csv",class:_vm.inputClass,attrs:{"type":"file","name":"csv"}})]),_c('div',{staticClass:"form-group"},[_vm._t("next",[_c('input',{class:_vm.buttonClass,attrs:{"type":"submit"},domProps:{"value":_vm.loadBtnText},on:{"click":function($event){$event.preventDefault();return _vm.load($event)}}})],{"load":_vm.load})],2)]),_c('div',{staticClass:"vue-csv-uploader-part-two"},[(_vm.sample)?_c('div',{staticClass:"vue-csv-mapping"},[_c('table',{class:_vm.tableClass},[_vm._t("thead",[_vm._m(0)]),_c('tbody',_vm._l((_vm.fieldsToMap),function(field,key){return _c('tr',{key:key},[_c('td',[_vm._v(_vm._s(field.label))]),_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.map[field.key]),expression:"map[field.key]"}],staticClass:"form-control",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.map, field.key, $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.firstRow),function(column,key){return _c('option',{key:key,domProps:{"value":key}},[_vm._v(_vm._s(column))])}),0)])])}),0)],2),(_vm.url)?_c('div',{staticClass:"form-group"},[_vm._t("submit",[_c('input',{class:_vm.buttonClass,attrs:{"type":"submit"},domProps:{"value":_vm.submitBtnText},on:{"click":function($event){$event.preventDefault();return _vm.submit($event)}}})],{"submit":_vm.submit})],2):_vm._e()]):_vm._e()])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Field")]),_c('th',[_vm._v("CSV Column")])])])}]


// CONCATENATED MODULE: ./src/components/VueCsvImport.vue?vue&type=template&id=5e908763&

// EXTERNAL MODULE: external {"commonjs":"lodash","commonjs2":"lodash","root":"_"}
var external_commonjs_lodash_commonjs2_lodash_root_ = __webpack_require__("60bb");
var external_commonjs_lodash_commonjs2_lodash_root_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_lodash_commonjs2_lodash_root_);

// EXTERNAL MODULE: external {"commonjs":"axios","commonjs2":"axios","root":"axios"}
var external_commonjs_axios_commonjs2_axios_root_axios_ = __webpack_require__("cebe");
var external_commonjs_axios_commonjs2_axios_root_axios_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_axios_commonjs2_axios_root_axios_);

// EXTERNAL MODULE: ./node_modules/papaparse/papaparse.min.js
var papaparse_min = __webpack_require__("369b");
var papaparse_min_default = /*#__PURE__*/__webpack_require__.n(papaparse_min);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueCsvImport.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var VueCsvImportvue_type_script_lang_js_ = ({
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
      default: function _default() {}
    },
    catch: {
      type: Function,
      default: function _default() {}
    },
    finally: {
      type: Function,
      default: function _default() {}
    },
    parseConfig: {
      type: Object,
      default: function _default() {
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
  data: function data() {
    return {
      form: {
        csv: null
      },
      fieldsToMap: [],
      map: {},
      hasHeaders: true,
      csv: null,
      sample: null
    };
  },
  created: function created() {
    this.hasHeaders = this.headers;

    if (external_commonjs_lodash_commonjs2_lodash_root_default.a.isArray(this.mapFields)) {
      this.fieldsToMap = external_commonjs_lodash_commonjs2_lodash_root_default.a.map(this.mapFields, function (item) {
        return {
          key: item,
          label: item
        };
      });
    } else {
      this.fieldsToMap = external_commonjs_lodash_commonjs2_lodash_root_default.a.map(this.mapFields, function (label, key) {
        return {
          key: key,
          label: label
        };
      });
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.csv = this.buildMappedCsv();
      this.$emit('input', this.form.csv);

      if (this.url) {
        external_commonjs_axios_commonjs2_axios_root_axios_default.a.post(this.url, this.form).then(function (response) {
          _this.callback(response);
        }).catch(function (response) {
          _this.catch(response);
        }).finally(function (response) {
          _this.finally(response);
        });
      } else {
        _this.callback(this.form.csv);
      }
    },
    buildMappedCsv: function buildMappedCsv() {
      var _this = this;

      var csv = this.hasHeaders ? external_commonjs_lodash_commonjs2_lodash_root_default.a.drop(this.csv) : this.csv;
      return external_commonjs_lodash_commonjs2_lodash_root_default.a.map(csv, function (row) {
        var newRow = {};

        external_commonjs_lodash_commonjs2_lodash_root_default.a.forEach(_this.map, function (column, field) {
          external_commonjs_lodash_commonjs2_lodash_root_default.a.set(newRow, field, external_commonjs_lodash_commonjs2_lodash_root_default.a.get(row, column));
        });

        return newRow;
      });
    },
    load: function load() {
      var _this = this;

      this.readFile(function (output) {
        _this.sample = external_commonjs_lodash_commonjs2_lodash_root_default.a.get(papaparse_min_default.a.parse(output, {
          preview: 2,
          skipEmptyLines: true
        }), "data");
        _this.csv = external_commonjs_lodash_commonjs2_lodash_root_default.a.get(papaparse_min_default.a.parse(output, {
          skipEmptyLines: true
        }), "data");
      });
    },
    readFile: function readFile(callback) {
      var file = this.$refs.csv.files[0];

      if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");

        reader.onload = function (evt) {
          callback(evt.target.result);
        };

        reader.onerror = function () {};
      }
    },
    toggleHasHeaders: function toggleHasHeaders() {
      this.hasHeaders = !this.hasHeaders;
    }
  },
  watch: {
    map: {
      handler: function handler(newVal) {
        if (!this.url) {
          var hasAllKeys = this.mapFields.every(function (item) {
            return newVal.hasOwnProperty(item);
          });

          if (hasAllKeys) {
            this.submit();
          }
        }
      },
      deep: true
    }
  },
  computed: {
    firstRow: function firstRow() {
      return external_commonjs_lodash_commonjs2_lodash_root_default.a.get(this, "sample.0");
    }
  }
});
// CONCATENATED MODULE: ./src/components/VueCsvImport.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueCsvImportvue_type_script_lang_js_ = (VueCsvImportvue_type_script_lang_js_);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VueCsvImport.vue





/* normalize component */

var component = normalizeComponent(
  components_VueCsvImportvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null

)

/* harmony default export */ var VueCsvImport = (component.exports);
// CONCATENATED MODULE: ./src/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.component(options.componentName || 'VueCsvImport', VueCsvImport);
}

/*if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && window.Vue && window.Vue === external_commonjs_vue_commonjs2_vue_root_Vue_default.a) {
  install(window.Vue);
}*/


/* harmony default export */ var src = (VueCsvImport);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport VueCsvImport */__webpack_require__.d(__webpack_exports__, "VueCsvImport", function() { return VueCsvImport; });
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return install; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});
//# sourceMappingURL=VueCsvImport.umd.js.map
