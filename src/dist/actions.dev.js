"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestRobots = exports.setSearchField = void 0;

var _constants = require("./constants.js");

var setSearchField = function setSearchField(text) {
  return {
    type: _constants.CHANGE_SEARCH_FIELD,
    payload: text
  };
};

exports.setSearchField = setSearchField;

var requestRobots = function requestRobots() {
  return function (dispatch) {
    dispatch({
      type: _constants.REQUEST_ROBOTS_PENDING
    });
    fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
      return response.json();
    }).then(function (data) {
      return dispatch({
        type: _constants.REQUEST_ROBOTS_SUCCESS,
        payload: data
      });
    })["catch"](function (error) {
      return dispatch({
        type: _constants.REQUEST_ROBOTS_FAILED,
        payload: error
      });
    });
  };
};

exports.requestRobots = requestRobots;