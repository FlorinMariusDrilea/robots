"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSearchField = void 0;

var _constants = require("./constants.js");

var setSearchField = function setSearchField(text) {
  console.log(text);
  return {
    type: _constants.CHANGE_SEARCH_FIELD,
    payload: text
  };
};

exports.setSearchField = setSearchField;