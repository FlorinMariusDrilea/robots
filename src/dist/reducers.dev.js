"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchRobots = void 0;

var _constants = require("./constants.js");

var initialState = {
  searchField: ''
};

var searchRobots = function searchRobots() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _constants.CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {
        searchField: action.payload
      });

    default:
      return state;
  }
};

exports.searchRobots = searchRobots;