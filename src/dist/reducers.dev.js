"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestRobots = exports.searchRobots = void 0;

var _constants = require("./constants.js");

var initialStateSearch = {
  searchField: ''
};

var searchRobots = function searchRobots() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateSearch;
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
var initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
};

var requestRobots = function requestRobots() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateRobots;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _constants.REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {
        isPending: true
      });

    case _constants.REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false
      });

    case _constants.REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });

    default:
      return state;
  }
};

exports.requestRobots = requestRobots;