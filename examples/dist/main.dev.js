"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _packages = _interopRequireDefault(require("../packages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import store from './store'
_vue["default"].config.productionTip = false;

_vue["default"].use(_packages["default"]);

new _vue["default"]({
  el: '#app',
  router: _router["default"],
  // store,
  render: function render(h) {
    return h(_App["default"]);
  }
});