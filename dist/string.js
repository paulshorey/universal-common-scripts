parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OqZs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.str_syllables_count=exports.str_trim_non_alpha=exports.str_trim_char=exports.str_insert=exports.str_sanitize_strictly=exports.str_sanitize_loosely=exports.str_capitalize=exports.str_hash=void 0;var r=function(r){var t=0;if(0===r.length)return t;for(var e=0;e<r.length;e++){t=(t<<5)-t+r.charCodeAt(e),t&=t}return t+""};exports.str_hash=r;var t=function(r){return r.charAt(0).toUpperCase()+r.slice(1)};exports.str_capitalize=t;var e=function(r){return r.replace(/_-/g," ").replace(/[^\w ]+/g,"").toLowerCase().trim()};exports.str_sanitize_loosely=e;var s=function(r){return r.replace(/[^\w]+/g,"").toLowerCase().trim()};exports.str_sanitize_strictly=s;var n=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return r.substring(0,t)+e+r.substring(t,r.length)};exports.str_insert=n;var o=function(r,t){return"]"===t&&(t="\\]"),"\\"===t&&(t="\\\\"),r.replace(new RegExp("^["+t+"]+|["+t+"]+$","g"),"")};exports.str_trim_char=o;var a=function(r){return r.replace(new RegExp("^[^a-z]+|[^a-z]+$","gi"),"")};exports.str_trim_non_alpha=a;var i=function(r){if((r=r.toLowerCase()).length<=3)return 1;var t=(r=(r=r.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,"")).replace(/^y/,"")).match(/[aeiouy]{1,2}/g);return t?t.length:0};exports.str_syllables_count=i;
},{}]},{},["OqZs"], null)
//# sourceMappingURL=/string.js.map