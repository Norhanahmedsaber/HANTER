"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Errors = void 0;
exports["default"] = report;
exports.errorMessages = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Errors = exports.Errors = {
  error0: 0,
  error1: 1,
  error2: 2
};
var errorMessages = exports.errorMessages = _defineProperty(_defineProperty(_defineProperty({}, Errors.error0, 'there is error massege 0'), Errors.error1, 'there is error massege 1'), Errors.error2, 'there is error massege 2');
function report(error) {
  throw new Error(errorMessages[error]);
}