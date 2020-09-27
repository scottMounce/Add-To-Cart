/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./Dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Client/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Client/app.jsx":
/*!************************!*\
  !*** ./Client/app.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      store: 'Ticketybootique',\n      sales: '1,386',\n      title: 'Pumpkin pie cat and small pet hat felt costume',\n      price: '20.00'\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/React.createElement(\"p\", {\n        className: \"storeName\"\n      }, this.state.store), /*#__PURE__*/React.createElement(\"p\", {\n        className: \"sales\"\n      }, this.state.sales, \" sales   \", /*#__PURE__*/React.createElement(\"span\", {\n        className: \"salesDivider\"\n      }, \"|\"), \" *****\"), /*#__PURE__*/React.createElement(\"h6\", {\n        className: \"title\"\n      }, this.state.title), /*#__PURE__*/React.createElement(\"p\", {\n        className: \"price\"\n      }, \"$\", this.state.price, \" \", /*#__PURE__*/React.createElement(\"span\", {\n        className: \"stock\"\n      }, \"In stock\")), /*#__PURE__*/React.createElement(\"label\", {\n        className: \"selectTitle\"\n      }, \"Size\", /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"select\", {\n        className: \"select\"\n      }, /*#__PURE__*/React.createElement(\"option\", null, \"S\"), /*#__PURE__*/React.createElement(\"option\", null, \"M\"))), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"label\", {\n        className: \"selectTitle\"\n      }, \"Quantity\", /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"select\", {\n        className: \"select\"\n      }, /*#__PURE__*/React.createElement(\"option\", null, \"1\"), /*#__PURE__*/React.createElement(\"option\", null, \"2\"), /*#__PURE__*/React.createElement(\"option\", null, \"3\"), /*#__PURE__*/React.createElement(\"option\", null, \"4\"))), /*#__PURE__*/React.createElement(\"button\", {\n        className: \"button\"\n      }, \"Add to cart\"), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"iconContainer\"\n      }, /*#__PURE__*/React.createElement(\"img\", {\n        className: \"icon\",\n        src: \"https://www.flaticon.com/svg/static/icons/svg/711/711192.svg\"\n      }), /*#__PURE__*/React.createElement(\"p\", {\n        className: \"info\"\n      }, /*#__PURE__*/React.createElement(\"strong\", null, \"Other people want this.\"), \" Over 20 people have this in their carts right now.\")), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"iconContainer\"\n      }, /*#__PURE__*/React.createElement(\"img\", {\n        className: \"icon\",\n        src: \"https://www.flaticon.com/svg/static/icons/svg/565/565391.svg\"\n      }), /*#__PURE__*/React.createElement(\"p\", {\n        className: \"info\"\n      }, /*#__PURE__*/React.createElement(\"strong\", null, \"Nice choice!\"), \" Enjoy free shipping to the US when you spend $35+ at this shop.\")));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9hcHAuanN4P2I5Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIHN1cGVyKHByb3BzKTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgc3RvcmU6ICdUaWNrZXR5Ym9vdGlxdWUnLFxuICAgICAgICBzYWxlczogJzEsMzg2JyxcbiAgICAgICAgdGl0bGU6ICdQdW1wa2luIHBpZSBjYXQgYW5kIHNtYWxsIHBldCBoYXQgZmVsdCBjb3N0dW1lJyxcbiAgICAgICAgcHJpY2U6ICcyMC4wMCcsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN0b3JlTmFtZVwiPnt0aGlzLnN0YXRlLnN0b3JlfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic2FsZXNcIj57dGhpcy5zdGF0ZS5zYWxlc30gc2FsZXMgICA8c3BhbiBjbGFzc05hbWU9J3NhbGVzRGl2aWRlcic+fDwvc3Bhbj4gKioqKio8L3A+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnN0YXRlLnRpdGxlfTwvaDY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+JHt0aGlzLnN0YXRlLnByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJzdG9ja1wiPkluIHN0b2NrPC9zcGFuPjwvcD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNlbGVjdFRpdGxlXCI+U2l6ZVxuICAgICAgICA8YnIvPlxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdFwiPlxuICAgICAgICAgIDxvcHRpb24+Uzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24+TTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNlbGVjdFRpdGxlXCI+UXVhbnRpdHlcbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uPjI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uQ29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwic3JjPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL3N2Zy9zdGF0aWMvaWNvbnMvc3ZnLzcxMS83MTExOTIuc3ZnXCIvPjxwIGNsYXNzTmFtZT1cImluZm9cIj48c3Ryb25nPk90aGVyIHBlb3BsZSB3YW50IHRoaXMuPC9zdHJvbmc+IE92ZXIgMjAgcGVvcGxlIGhhdmUgdGhpcyBpbiB0aGVpciBjYXJ0cyByaWdodCBub3cuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uQ29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwic3JjPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL3N2Zy9zdGF0aWMvaWNvbnMvc3ZnLzU2NS81NjUzOTEuc3ZnXCIvPjxwIGNsYXNzTmFtZT1cImluZm9cIj48c3Ryb25nPk5pY2UgY2hvaWNlITwvc3Ryb25nPiBFbmpveSBmcmVlIHNoaXBwaW5nIHRvIHRoZSBVUyB3aGVuIHlvdSBzcGVuZCAkMzUrIGF0IHRoaXMgc2hvcC48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBQUE7QUFFQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7OztBQTVDQTtBQUNBO0FBOENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Client/app.jsx\n");

/***/ })

/******/ });