module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mapFinderPageComponent = __webpack_require__(1);
	
	var _mapFinderPageComponent2 = _interopRequireDefault(_mapFinderPageComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _mapFinderPageComponent2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by long on 4/12/17.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mapFinderPopupComponent = __webpack_require__(3);
	
	var _mapFinderPopupComponent2 = _interopRequireDefault(_mapFinderPopupComponent);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	var _mapFinderSearchFilterComponent = __webpack_require__(7);
	
	var _mapFinderSearchFilterComponent2 = _interopRequireDefault(_mapFinderSearchFilterComponent);
	
	var _mapFinderDropdownComponent = __webpack_require__(18);
	
	var _mapFinderDropdownComponent2 = _interopRequireDefault(_mapFinderDropdownComponent);
	
	var _mapFinderResultWrapperComponent = __webpack_require__(23);
	
	var _mapFinderResultWrapperComponent2 = _interopRequireDefault(_mapFinderResultWrapperComponent);
	
	var _mapFinderResultMapComponent = __webpack_require__(28);
	
	var _mapFinderResultMapComponent2 = _interopRequireDefault(_mapFinderResultMapComponent);
	
	var _urlUtils = __webpack_require__(58);
	
	var URLUtils = _interopRequireWildcard(_urlUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MapFinderPageComponent = function (_Component) {
	    _inherits(MapFinderPageComponent, _Component);
	
	    function MapFinderPageComponent(props) {
	        _classCallCheck(this, MapFinderPageComponent);
	
	        var _this = _possibleConstructorReturn(this, (MapFinderPageComponent.__proto__ || Object.getPrototypeOf(MapFinderPageComponent)).call(this, props));
	
	        _this.state = {
	            resultData: null,
	            searchStatus: '',
	            isSearching: false,
	            person: null
	        };
	        _this.searchStatus = '';
	        _this.onSearchStatus = _this.onSearchStatus.bind(_this);
	        _this.query = null;
	        return _this;
	    }
	
	    _createClass(MapFinderPageComponent, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	
	            var that = this;
	            var url = 'https://mapfinder-staging.herokuapp.com/mapfinder/postcode?postcode=30&sport=baseball&orderby=dis';
	
	            url = 'http://128.199.90.210:8083/team/a0Rp0000004AIsVEAW';
	
	            fetch(url).then(function (response) {
	                if (response.status >= 400) {
	                    throw new Error("Bad response from server");
	                }
	                return response.json();
	            }).then(function (data) {
	                console.log("=====data:", data);
	            });
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {}
	    }, {
	        key: "onClearFilter",
	        value: function onClearFilter() {
	            this.refs.searchFilter.clearSearch();
	            this.refs.searchFilter.focusSearch();
	        }
	    }, {
	        key: "onSearchAgain",
	        value: function onSearchAgain() {
	
	            this.refs.searchFilter.focusSearch();
	        }
	    }, {
	        key: "onSearchStatus",
	        value: function onSearchStatus(status) {
	            this.setState({ searchStatus: status });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var onClearFilter = function onClearFilter() {
	                return _this2.onClearFilter();
	            };
	            var onSearchAgain = function onSearchAgain() {
	                return _this2.onSearchAgain();
	            };
	
	            return _react2.default.createElement(
	                "div",
	                { className: "mapFinderContainer" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "header" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "headerTextWrapper" },
	                        _react2.default.createElement(
	                            "p",
	                            { className: "textHeader" },
	                            _react2.default.createElement(_textComponent2.default, {
	                                text: 'CLUB FINDER',
	                                style: { fontSize: 12, color: 'white', fontFamily: 'Roboto' }
	                            })
	                        ),
	                        _react2.default.createElement(
	                            "p",
	                            { className: "textHeader" },
	                            _react2.default.createElement(_textComponent2.default, {
	                                text: 'WHERE CAN I PLAY ?',
	                                style: { fontSize: 26, fontWeight: '600', color: 'white', fontFamily: 'Roboto' }
	                            })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    this.state.person
	                ),
	                _react2.default.createElement(_mapFinderSearchFilterComponent2.default, {
	                    onSearchClick: function onSearchClick(data) {
	                        return _this2.setState({ resultData: data });
	                    },
	                    onSearchStatus: function onSearchStatus(dataObject) {
	                        return _this2.onSearchStatus(dataObject);
	                    },
	                    query: this.query,
	                    ref: "searchFilter"
	                }),
	                _react2.default.createElement("div", { className: "clear" }),
	                _react2.default.createElement(_mapFinderResultWrapperComponent2.default, {
	                    resultData: this.state.resultData,
	                    searchStatus: this.state.searchStatus,
	                    onClearFilter: onClearFilter,
	                    onSearchAgain: onSearchAgain
	                }),
	                _react2.default.createElement(
	                    "style",
	                    null,
	                    css
	                )
	            );
	        }
	    }]);
	
	    return MapFinderPageComponent;
	}(_react.Component);
	
	exports.default = MapFinderPageComponent;
	
	
	var css = "\n\n  .map-wrapper {\n         width:1000px;\n         height:1000px;\n      \n    }\n    \n    .clear{\n        display:block;\n        clear:both;\n     }\n     \n    .mapFinderContainer {\n        width:100%;\n        background-color: rgba(241,245,248,1);\n\n    }\n    .header {\n        width:100%;\n        height:131px;\n        background-color: rgba(0,154,222,1);\n    }\n    .headerTextWrapper {\n        padding: 15px 0px 0px 0px;\n    }\n    .textHeader {\n        text-align:center;\n    }\n     @media all and (orientation:landscape) { \n  \n       .clear{\n        display:none;\n     }\n     }\n     \n     body{\n     margin:0;\n     }\n\n\n";

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _inputComponent = __webpack_require__(4);
	
	var _inputComponent2 = _interopRequireDefault(_inputComponent);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	var _buttonComponent = __webpack_require__(6);
	
	var _buttonComponent2 = _interopRequireDefault(_buttonComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by long on 3/24/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var MapFindPopupComponent = function (_React$Component) {
	    _inherits(MapFindPopupComponent, _React$Component);
	
	    function MapFindPopupComponent(props) {
	        _classCallCheck(this, MapFindPopupComponent);
	
	        var _this = _possibleConstructorReturn(this, (MapFindPopupComponent.__proto__ || Object.getPrototypeOf(MapFindPopupComponent)).call(this, props));
	
	        _this.state = {
	            isHide: _this.props.isHide,
	            inputValue: ''
	        };
	        _this.onClick = _this.onClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(MapFindPopupComponent, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.isHide != this.props.isHide) {
	                this.setState({
	                    isHide: nextProps.isHide
	                });
	            }
	        }
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(id) {
	
	            this.onClick();
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(id) {
	            var item = document.getElementById(id);
	            if (item) {
	                this.setState({
	                    inputValue: item.value
	                });
	            }
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick() {
	            var onClick = this.props.onClick;
	
	            if (onClick) {
	                onClick();
	            }
	            this.setState({
	                isHide: true
	            });
	        }
	    }, {
	        key: 'renderPopup',
	        value: function renderPopup() {
	            var title = this.props.title;
	
	            if (this.state.isHide == true) {
	                return null;
	            } else {
	                var titleStyle = {
	                    height: '16px',
	                    fontSize: '14px',
	                    color: 'rgba(81,81,81,1)',
	                    fontFamily: 'Roboto-Medium'
	
	                };
	                var inputStyle = {
	                    width: '100%',
	                    height: '38px',
	                    fontSize: '12px',
	                    fontFamily: 'Roboto',
	                    border: 'none',
	                    textAlign: 'left',
	                    marginTop: '10px',
	                    color: 'rgba(81,81,81,1)'
	
	                };
	                var buttonStyle = {
	                    textAlign: 'center',
	                    color: 'white',
	                    textTransform: 'uppercase',
	                    backgroundColor: 'rgba(0,154,222,1)',
	                    fontFamily: 'Roboto',
	                    fontSize: '10px',
	                    width: '40%',
	                    height: '32px',
	                    borderRadius: '40px',
	                    margin: '0 auto'
	
	                };
	
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'modal-wrapper' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'modal-container' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'top-modal' },
	                            _react2.default.createElement(_textComponent2.default, {
	                                style: titleStyle,
	                                text: title ? title : 'WHERE CAN I PLAY?'
	                            }),
	                            _react2.default.createElement(_inputComponent2.default, {
	                                id: 'IdInputPostCode',
	                                style: inputStyle,
	                                placeholder: 'Enter postcode or club name',
	                                onChange: this.onChange,
	                                onKeyUp: this.onKeyUp
	                            })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'bottom-modal' },
	                            _react2.default.createElement(_buttonComponent2.default, {
	                                style: buttonStyle,
	                                onClick: this.onClick,
	                                text: 'Search'
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'style',
	                        null,
	                        css
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.renderPopup();
	        }
	    }]);
	
	    return MapFindPopupComponent;
	}(_react2.default.Component);
	
	exports.default = MapFindPopupComponent;
	
	
	MapFindPopupComponent.propTypes = {
	    isHide: _react.PropTypes.bool,
	    onClick: _react.PropTypes.func,
	    title: _react.PropTypes.string
	};
	
	MapFindPopupComponent.defaultProps = {};
	
	var css = '\n    .modal-wrapper{\n         background-color: rgba(81,81,81,0.7);\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        z-index: 9999;\n     }\n     .modal-container{\n        width: 80%;\n        background-color: rgba(255,255,255,1);\n        border-radius: 5px;\n        margin: 40% auto\n     }\n     .top-modal{\n        text-align: center;\n        padding: 15px 20px 10px 20px;\n     }\n     ::-webkit-input-placeholder { /* WebKit, Blink, Edge */\n                    color:    #9B9B9B;\n                    opacity:  0.8;\n            }\n     :-moz-placeholder { /* Mozilla Firefox 4 to 18 */\n                    color:    #9B9B9B;\n                    opacity:  0.8;\n            }\n     ::-moz-placeholder { /* Mozilla Firefox 19+ */\n                    color:    #9B9B9B;\n                    opacity:  0.8;\n            }\n     :-ms-input-placeholder { /* Internet Explorer 10-11 */\n                    color:    #9B9B9B;\n                    opacity:  0.8;\n            }\n            \n     .bottom-modal{\n             text-align: center;\n             padding-bottom: 15px;\n     }\n      \n      @media all and (orientation:landscape) { \n       .modal-container{\n        width: 80%;\n        background-color: rgba(255,255,255,1);\n        border-radius: 5px;\n        margin: 15% auto\n     }\n     }\n     \n    \n';

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var InputComponent = function (_Component) {
	    _inherits(InputComponent, _Component);
	
	    function InputComponent(props) {
	        _classCallCheck(this, InputComponent);
	
	        var _this = _possibleConstructorReturn(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).call(this, props));
	
	        _this.onChange = _this.onChange.bind(_this);
	        _this.onKeyUp = _this.onKeyUp.bind(_this);
	        _this.onKeyPress = _this.onKeyPress.bind(_this);
	
	        return _this;
	    }
	
	    _createClass(InputComponent, [{
	        key: "onKeyUp",
	        value: function onKeyUp() {
	            var _props = this.props,
	                onKeyUp = _props.onKeyUp,
	                id = _props.id;
	
	            if (onKeyUp) {
	                onKeyUp(id);
	            }
	        }
	    }, {
	        key: "onChange",
	        value: function onChange() {
	            var _props2 = this.props,
	                onChange = _props2.onChange,
	                id = _props2.id;
	
	            if (onChange) {
	                onChange(id);
	            }
	        }
	    }, {
	        key: "onKeyPress",
	        value: function onKeyPress(event) {
	            var _props3 = this.props,
	                onKeyPress = _props3.onKeyPress,
	                id = _props3.id;
	
	            if (onKeyPress) {
	                onKeyPress(id, event);
	            }
	        }
	    }, {
	        key: "forceFocus",
	        value: function forceFocus() {
	            this.refs.input.focus();
	        }
	    }, {
	        key: "clearText",
	        value: function clearText() {
	            this.refs.input.value = "";
	        }
	    }, {
	        key: "getInputValue",
	        value: function getInputValue() {
	            return this.refs.input.value;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _props4 = this.props,
	                id = _props4.id,
	                value = _props4.value,
	                placeholder = _props4.placeholder,
	                style = _props4.style,
	                type = _props4.type,
	                maxLength = _props4.maxLength,
	                readOnly = _props4.readOnly;
	
	            var read = readOnly ? readOnly : '';
	            var onKeyPress = function onKeyPress(event) {
	                return _this2.onKeyPress(event);
	            };
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("input", { type: type, id: id, ref: "input", name: "input", value: value, readOnly: read, className: "inputWrapper", maxLength: maxLength, style: style, placeholder: placeholder,
	                    onChange: this.onChange, onKeyPress: onKeyPress, onKeyUp: this.onKeyUp }),
	                _react2.default.createElement(
	                    "style",
	                    null,
	                    css
	                )
	            );
	        }
	    }]);
	
	    return InputComponent;
	}(_react.Component);
	
	exports.default = InputComponent;
	
	
	InputComponent.propTypes = {
	    id: _react.PropTypes.string,
	    type: _react.PropTypes.string,
	    maxLength: _react.PropTypes.string,
	    onKeyUp: _react.PropTypes.func,
	    onKeyPress: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    value: _react.PropTypes.string,
	    placeholder: _react.PropTypes.string,
	    style: _react.PropTypes.object,
	    readOnly: _react.PropTypes.string
	};
	
	var css = "\n    .inputWrapper{\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n    }\n";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextComponent = function (_Component) {
	    _inherits(TextComponent, _Component);
	
	    function TextComponent(props) {
	        _classCallCheck(this, TextComponent);
	
	        return _possibleConstructorReturn(this, (TextComponent.__proto__ || Object.getPrototypeOf(TextComponent)).call(this, props));
	    }
	
	    _createClass(TextComponent, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                text = _props.text,
	                className = _props.className,
	                style = _props.style;
	
	            return _react2.default.createElement(
	                "span",
	                { className:  true ? className : "", style: style ? style : {} },
	                text,
	                _react2.default.createElement(
	                    "style",
	                    null,
	                    css
	                )
	            );
	        }
	    }]);
	
	    return TextComponent;
	}(_react.Component);
	
	exports.default = TextComponent;
	
	
	TextComponent.propTypes = {
	    text: _react.PropTypes.string,
	    className: _react.PropTypes.string,
	    style: _react.PropTypes.object
	};
	
	TextComponent.defaultProps = {
	    text: "",
	    className: "",
	    style: {}
	};
	
	var css = "\n    .textNormal{\n        font-size:12px;\n        margin-left:2px;\n        \n    }\n";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ButtonComponent = function (_Component) {
	    _inherits(ButtonComponent, _Component);
	
	    function ButtonComponent(props) {
	        _classCallCheck(this, ButtonComponent);
	
	        var _this = _possibleConstructorReturn(this, (ButtonComponent.__proto__ || Object.getPrototypeOf(ButtonComponent)).call(this, props));
	
	        _this.onClick = _this.onClick.bind(_this);
	
	        return _this;
	    }
	
	    _createClass(ButtonComponent, [{
	        key: "onClick",
	        value: function onClick() {
	
	            this.props.onClick();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                text = _props.text,
	                style = _props.style;
	
	            return _react2.default.createElement(
	                "button",
	                { onClick: this.onClick, className: "buttonWrapper", style: style },
	                text,
	                _react2.default.createElement(
	                    "style",
	                    null,
	                    css
	                )
	            );
	        }
	    }]);
	
	    return ButtonComponent;
	}(_react.Component);
	
	exports.default = ButtonComponent;
	
	
	ButtonComponent.propTypes = {
	    text: _react.PropTypes.string.isRequired,
	    style: _react.PropTypes.object,
	    onClick: _react.PropTypes.func
	};
	
	ButtonComponent.defaultTypes = {
	    text: "Submit"
	};
	
	var css = ".buttonWrapper{\n  font-family: \u2018Roboto\u2019, sans-serif;\n  letter-spacing: -0.1px;\n  font-size: 15px;\n  height:44px;\n  width:100%;\n  padding-left:20px;\n  padding-right:20px;\n  border-radius:4px;\n  background-color:#00B0FF;\n  border:none;\n  color:white;\n}";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	var _inputComponent = __webpack_require__(4);
	
	var _inputComponent2 = _interopRequireDefault(_inputComponent);
	
	var _buttonComponent = __webpack_require__(6);
	
	var _buttonComponent2 = _interopRequireDefault(_buttonComponent);
	
	var _iconComponent = __webpack_require__(17);
	
	var _iconComponent2 = _interopRequireDefault(_iconComponent);
	
	var _mapFinderDropdownComponent = __webpack_require__(18);
	
	var _mapFinderDropdownComponent2 = _interopRequireDefault(_mapFinderDropdownComponent);
	
	var _mapFinderSearchAdvanceComponent = __webpack_require__(20);
	
	var _mapFinderSearchAdvanceComponent2 = _interopRequireDefault(_mapFinderSearchAdvanceComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SearchFilterComponent = function (_Component) {
	    _inherits(SearchFilterComponent, _Component);
	
	    function SearchFilterComponent(props) {
	        _classCallCheck(this, SearchFilterComponent);
	
	        var _this = _possibleConstructorReturn(this, (SearchFilterComponent.__proto__ || Object.getPrototypeOf(SearchFilterComponent)).call(this, props));
	
	        _this.state = {
	            inputWidth: '85%',
	            searchNearbyData: null,
	            searchStatus: '',
	            isSearchVisible: true,
	            isShowAdvanceSearch: false
	
	        };
	
	        _this.lat = -33.787266;
	        _this.lng = 150.871959;
	
	        return _this;
	    }
	
	    _createClass(SearchFilterComponent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            window.addEventListener("orientationchange", this.handleOrientationChange.bind(this), false);
	            this.checkLocation();
	        }
	    }, {
	        key: 'checkLocation',
	        value: function checkLocation() {
	            var _this2 = this;
	
	            navigator.geolocation.getCurrentPosition(function (initialPosition) {
	                //console.log('*** latitude  ',initialPosition.coords.latitude)
	
	                // this.lat =  initialPosition.coords.latitude;
	                // this.lng = initialPosition.coords.longitude;
	
	                _this2.getAllData(_this2.lat, _this2.lng);
	                _this2.setState({
	                    isSearchVisible: true
	
	                });
	            }, function (error) {
	                _this2.getAllData(_this2.lat, _this2.lng);
	                //this.setState({isSearchVisible:false})
	            });
	        }
	    }, {
	        key: 'getAllData',
	        value: function getAllData(lat, lon) {
	            var _this3 = this;
	
	            this.props.onSearchStatus('searching');
	
	            var cat = 'club';
	            var sport = this.props.query.sport ? this.props.query.sport : 'baseball';
	
	            Service.getSearchNearByPlace(lat, lon, cat, sport).then(function (data) {
	
	                if (data) {
	                    var dataResult = data.results ? data.results : [];
	                    _this3.props.onSearchClick(dataResult);
	                } else {
	                    _this3.props.onSearchClick([]);
	                }
	                _this3.props.onSearchStatus('finished');
	            });
	        }
	    }, {
	        key: 'fetchDataRow',
	        value: function fetchDataRow(arrayObject, currentIndex) {
	
	            if (arrayObject.length <= 0 || currentIndex >= arrayObject.length) {
	                this.props.onSearchClick([]);
	                this.props.onSearchStatus('finished');
	                return;
	            }
	            var temp = arrayObject[currentIndex];
	            var lat = temp.lat;
	            var lon = temp.lon;
	            var cat = "club";
	            var sport = this.props.query.sport ? this.props.query.sport : 'baseball';
	            this.getData(arrayObject, currentIndex, lat, lon, cat, sport);
	        }
	    }, {
	        key: 'getData',
	        value: function getData(arrayObject, currentIndex, lat, lon, cat, sport) {
	            var _this4 = this;
	
	            Service.getSearchNearByPlace(lat, lon, cat, sport).then(function (data) {
	
	                if (data && data.results.length > 0) {
	                    var dataResult = data.results;
	                    _this4.props.onSearchClick(dataResult);
	                    _this4.props.onSearchStatus('finished');
	                } else {
	                    var index = currentIndex + 1;
	                    _this4.fetchDataRow(arrayObject, index);
	                }
	            });
	        }
	    }, {
	        key: 'handleOrientationChange',
	        value: function handleOrientationChange() {
	
	            if (screen.orientation.type == 'landscape-primary') {
	                this.setState({
	                    inputWidth: '65%'
	                });
	            } else {
	                this.setState({
	                    inputWidth: '85%'
	                });
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }, {
	        key: 'focusSearch',
	        value: function focusSearch() {
	
	            if (this.refs.inputSearch) {
	                this.refs.inputSearch.forceFocus();
	            }
	
	            if (this.state.isShowAdvanceSearch) {
	                this.refs.searchAdvance.forceFocusFirst();
	            }
	        }
	    }, {
	        key: 'clearSearch',
	        value: function clearSearch() {
	            if (this.refs.searchAdvance) {
	                this.refs.searchAdvance.clearFilter();
	            }
	
	            if (this.refs.inputSearch) {
	                this.refs.inputSearch.clearText();
	            }
	        }
	    }, {
	        key: 'checkInterger',
	        value: function checkInterger(value) {
	
	            var regex = /^[0-9]+$/;
	            if (value.match(regex)) {
	
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'onSearchClick',
	        value: function onSearchClick() {
	            var _this5 = this;
	
	            this.props.onSearchStatus('searching');
	
	            var postcode = '';
	            var suburb = '';
	            var name = '';
	            if (this.refs.inputSearch.getInputValue().length >= 2) {
	                if (this.checkInterger(this.refs.inputSearch.getInputValue())) {
	                    postcode = this.refs.inputSearch.getInputValue();
	                } else {
	                    if (this.refs.inputSearch.getInputValue().length >= 3) {
	                        name = this.refs.inputSearch.getInputValue();
	                    }
	                }
	            }
	
	            var sport = this.props.query.sport ? this.props.query.sport : 'baseball';
	
	            Service.getSearchPlace(postcode, suburb, name, sport).then(function (data) {
	
	                if (data) {
	                    var dataResult = data.results ? data.results : [];
	                    _this5.fetchDataRow(dataResult, 0);
	                } else {
	                    _this5.props.onSearchClick([]);
	                    _this5.props.onSearchStatus('finished');
	                }
	            });
	        }
	    }, {
	        key: 'onSearchAdvanceClick',
	        value: function onSearchAdvanceClick(data) {
	
	            this.props.onSearchClick(data);
	        }
	    }, {
	        key: 'onSearchAdvanceExpand',
	        value: function onSearchAdvanceExpand(expand) {
	            this.setState({
	                isShowAdvanceSearch: expand
	            });
	        }
	    }, {
	        key: 'onSearchAdvanceStatus',
	        value: function onSearchAdvanceStatus(status) {
	
	            this.props.onSearchStatus(status);
	        }
	    }, {
	        key: 'onKeyPress',
	        value: function onKeyPress(id, event) {
	
	            if (event.key === 'Enter') {
	
	                this.onSearchClick();
	            }
	        }
	    }, {
	        key: 'renderSearchButton',
	        value: function renderSearchButton() {
	            var _this6 = this;
	
	            var iconSearch = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAnCAYAAACbgcH8AAAAAXNSR0IArs4c6QAABJxJREFUWAnNmW1oHEUYx//P7qUtGo2vpT1Ne3dWpa1YKyKo4DcRK31RVKS0xbydWirFquCX6ge1Cr6AUIveXaMWabF+KVJR8SUUbUEs9ZMfNCG38SDBGrWpbY1J7sZndtOdWS65u9ldvQxs+M/uPP/nN7OztzMbQpjSO7QCQiyHwGI+FvJxCiRGYGMQranjeIjKYWwbjaFGG+LdYgpTYhsEbQDENTXiRmHRYT7y6Ewdq9Eu9KX60IXSZRBTOxl0K4/oPLNMdAi2eBZdmZ/M4mq3rg29d3AVyviYLZYEbIhOcf0IQL9AVE7CwqWoUJI7dntVW9A5WOIRdGc+CnhEqMwOXXDu5Xn7IR8XKn86wiO3C6vSfbiFJtV5TRWc1Ryzne/KZu6E5V4hEtzBnehJvaS1DC1nhs4Vb2LHo5z0As+Z/uTR7ER3+lDDmfKlG3laHWCPFSqGOpBNv6fq4VQ19P7hK3B2/ASPVLtrSRhAomUNOtr7jVN88PvF+Pv0QR75u6e9JmDTnehMf2fspQV4t087gTPjz/vA4BGmlntCAUvPTZefxqL59/PUOOGmkA/yFPZwJ6oHS2eoo4PQhdIybv+oirG2oLt9QNVDqLXJc0jM2wCis160uBkF5+EQTn5IELoyuZ2vtLhXCV8hu/Sw3zKK6LyqxHfvdc3iGU0byyA0Yb3vYNMLvo5D2K2v8WiPu1ZCrMa+4eDPqEEOBe3+VPkP32/oSH1j4FO/adeVf/EvyRd+w4mJdb42FApa0EoVS1/zqFRUPSYloKCF0PKZ+StoqvAb7XzhN91/UUjzFdDymSVT0EIs1EJ/1XScUvkSrw5DFgUNjGkebZqOTwrovno+oxwKmqwRFalPFXU2siJtShC0fGbOChpU9EMF3ebrOAUFfFU+wxwKOrnkW44948XzIsd7Oxra1WguX91CrFUtEp8pbaYU9Br6h0M/98PF1BO+jkPkiw8y9CLXimgYXVd/H9ZWQUsHiwrKSDyG3qGMqkdQxwUvDWiX70DUy+8BXmOHK0Ho7jTfMupzreSKrFw+wHvDBeGstagfnDf5bXh+XzmKBRe9ql01lkFoGZ6gp/mvtysRuJWXku/DHSljby8g7zzF0+JxFc07GLlkjVBmXtfmi1lO9I7y5W1W6/wHsDE5qs7VUX0igf4ijzC2qpbWj8imblD1cGpmaOmVK77Bt/RJ35boDxBeRDK1B95D61+qEjnnPv4O8jJ3/HrtmvwWYrPHW+jJbNPOG8vZoaVVztnB4Dz/pjeonv0YP0SfsPwStlVC2ToJmryEn4UkKuIOhlqvdj5eAD/g/Xzt2ukaN40GXhtaZskP3QWUdzPIdX7SRoW8O6Dn0Lb0bYw5+3jkN/qhEcDrQ8sscn4OOD084jsYXm7J6hX5lWkvT4ZX0JGW30iAg8KOC7wxaB0xN7QSVmUdf5xZDlQW863m1Zr78WaEOzQIsj/lfeXRGdfjMYGbQ+sdCKNjAP//oWVHI4I3BzoiePOgI4A3FzokePOhQ4DPDWhD8LkDbQA+t6BnAwd2I5vxd1LV62kZ2Mwi/zPWltrCb9T9GsbPmsa/DzqLGTAS1oUAAAAASUVORK5CYII=';
	
	            var onSearchClick = function onSearchClick() {
	                return _this6.onSearchClick();
	            };
	            if (!this.state.isSearchVisible) {
	                return null;
	            }
	            return _react2.default.createElement(
	                'div',
	                { onClick: onSearchClick },
	                _react2.default.createElement(_iconComponent2.default, {
	                    src: iconSearch,
	                    style: { width: 20, position: 'absolute', top: 6, right: 10 }
	                })
	            );
	        }
	    }, {
	        key: 'renderDisableSearchButton',
	        value: function renderDisableSearchButton() {
	
	            var iconSearchDisable = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAnCAYAAACbgcH8AAAAAXNSR0IArs4c6QAABGdJREFUWAnNmM1y2zYQx/8gSOorib9iO3Xr7zSe6Vv0AXr1JeNOm4tfw8/QQ2cynSQzTU9+gF77Aj310Jkklu0k/kqdNJFtKZIIEAUoEyAjURJJpfZeuCQXuz+CC2ABgiyy/boEzy+Cew4814bPOIjjwXVa2JhtgBCRxe2wbciwhvjpRQGTpWk0m+MQKCS2sywGi9RQqbzF+sxFol2OF4Oh/xA29qpfAGIanAy2j8I47gcIfogfl5vRx3n1/hAPj8pwP66CCTcWyKYcnF/Ij2ijTD14zAZ8B4RWumyJ7aNE9nF/8X3MR46bZOjt6hjO6AoEs7R/y7pAYewY9yfPE/M2+NDWDBif0u2U4ttH2Fw6jj3LeNMbWgWm7TUNLGTPOtiXv/nD0HEe/lkGGVuWH1fUbXz+Eptrb/V9RqUbWuXwzrNvANsJfBK0QOlOprzcFhT13RWZMrcCX1QI2Def4fs79Yy8QTPz60Mvz3fnNLDq4azAyt864fhhpSr9NQL3aiC3mgsQoruzwvhDXOPQT/aKcOht3a6TEvlGPiE+xharUAMyEFbGo4MJHSODEodu+zPgrNMLgpynyuF+wdflLEOsN9rEat7RegYlDm1549oH9UYy0rW/m/NvoHJaCSclbH8yjWrDwYqBVjNGOPjUqvZgbbSrmcpvn5xppGbVdJB+OJxioIu1km5CWPI8rI0yKC4MdNsy8VK6MtB+sTPFKQdqpfscwmnEr1xBM4qBdhy5FIcil+bPIY0G024pjcTTT4dSDLSQ5WUolk1DdaRXuxjx65t4KYMYaOqa3m3X4wVSSqfJ5iySEpaJl9yg5xsD7ddNvlG70tM670PqGL9+y8RL6ddA79y9ABGdVUsVOWp1HKWopZtE1gFnvJbVvYHeksstj0xJwp3O6rRnu0d/T8APB59MDbUtyygGOnBgRcrGxjR+l1usUUhQIBXmtCvmvUusx7VRshKH3lytwZU1hxJVkR2KFWyJuE2yr+Q3T3fn9b5SrbZT906SjQe/6QaaLB2A2pe7aauMhVdLuUrJX3Zn0ZL7y1AIPwpK1vA+w7Ub+rs5mWvea+2LexN4vHcPanOQRlRK/FpdkPusrzrNeFkeObh48PVpGje9bJOL8cc783JgzuhGQi4GxD7G4fIp1KDtJz//NQG3/KVOCUhgQqfAyAEI/sHm6qt+zQe9S4ZWLdWv1T116UrtxKk81/jYOkfFaqNeY7BvUIiKA96+gaC8vdyqhdGJUwRjctt2WZr65DQPeH9oFfS3F7fQJHKL1OeAJoT79Kr+TtE6wsbqKZ6+XEKLTWqTHOCDoVUUlZ9PTm7Dr88OBa9mCJ+/w+HBCba+7RRJyseIwIeD1t0jFXWO9/58HJZVhHAc2LYtT5FkvjMPtNQCq58FG4he53kjAk8PHf2ALPoIwP9/aPWhOcGvBjon+NVB5wC/WuiM4FcPnQH8ekCnBL8+0CnArxf0kODdpalqeJWiVtKNxX0U7H81RknETm7/A5f9xBZMR6S9AAAAAElFTkSuQmCC';
	
	            if (!this.state.isSearchVisible) {
	                return null;
	            }
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_iconComponent2.default, {
	                    src: iconSearchDisable,
	                    style: { width: 20, position: 'absolute', top: 6, right: 10 }
	                })
	            );
	        }
	    }, {
	        key: 'renderQuickSearch',
	        value: function renderQuickSearch() {
	            var _this7 = this;
	
	            var onKeyPress = function onKeyPress(id, event) {
	                return _this7.onKeyPress(id, event);
	            };
	
	            var inputStyle = {
	                width: this.state.inputWidth,
	                height: 20,
	                paddingLeft: 10,
	                backgroundColor: 'rgba(244,247,250,1)',
	                borderRadius: '40px',
	                fontSize: '14px',
	                fontFamily: 'Roboto',
	                border: 'none',
	                textAlign: 'left',
	                color: 'rgba(81,81,81,1)',
	                outline: 'none',
	                textOverflow: 'ellipsis',
	                paddingTop: 6
	
	            };
	
	            var inputDisableStyle = {
	                width: this.state.inputWidth,
	                height: 20,
	                paddingLeft: 10,
	                fontSize: '14px',
	                fontFamily: 'Roboto',
	                color: 'rgba(81,81,81,0.2)',
	                paddingTop: 6,
	                lineHeight: '32px'
	
	            };
	
	            if (this.state.isShowAdvanceSearch) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'searchViewWrapper' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'searchView' },
	                        _react2.default.createElement(_textComponent2.default, {
	                            style: inputDisableStyle,
	                            text: 'Enter postcode or club name'
	                        }),
	                        this.renderDisableSearchButton()
	                    )
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'searchViewWrapper' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'searchView' },
	                        _react2.default.createElement(_inputComponent2.default, {
	                            type: 'text',
	                            style: inputStyle,
	                            ref: 'inputSearch',
	                            placeholder: 'Enter postcode or club name',
	                            onChange: this.onChange,
	                            onKeyUp: this.onKeyUp,
	                            onKeyPress: onKeyPress
	                        }),
	                        this.renderSearchButton()
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this8 = this;
	
	            var onSearchAdvanceClick = function onSearchAdvanceClick(data) {
	                return _this8.onSearchAdvanceClick(data);
	            };
	            var onSearchAdvanceExpand = function onSearchAdvanceExpand(expand) {
	                return _this8.onSearchAdvanceExpand(expand);
	            };
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'searchFilterContainer' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'searchFilerChildElementWrapper' },
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'searchTextWrapper' },
	                        _react2.default.createElement(_textComponent2.default, {
	                            text: 'Search and filter',
	                            style: { fontSize: 14, paddingLeft: 8, color: 'rgba(81,81,81,1)', fontFamily: 'Roboto', fontWeight: '600' }
	                        })
	                    )
	                ),
	                this.renderQuickSearch(),
	                _react2.default.createElement(_mapFinderSearchAdvanceComponent2.default, {
	                    ref: 'searchAdvance',
	                    query: this.props.query,
	                    onSearchAdvanceClick: onSearchAdvanceClick,
	                    onSearchAdvanceExpand: onSearchAdvanceExpand,
	                    onSearchAdvanceStatus: function onSearchAdvanceStatus(status) {
	                        _this8.props.onSearchStatus(status);
	                    }
	                }),
	                _react2.default.createElement(
	                    'style',
	                    null,
	                    css
	                )
	            );
	        }
	    }]);
	
	    return SearchFilterComponent;
	}(_react.Component);
	
	exports.default = SearchFilterComponent;
	
	SearchFilterComponent.propTypes = {
	    onSearchClick: _propTypes2.default.func,
	    onSearchStatus: _propTypes2.default.func,
	    query: _propTypes2.default.object
	
	};
	
	SearchFilterComponent.defaultProps = {
	    query: {}
	
	};
	
	var css = '\n    .searchFilterContainer {\n        width:calc(100% - 8px);;      \n        background-color: rgba(255,255,255,1);        \n        border-radius: 4px;\n        margin: -35px 0 10px 4px;\n        \n        \n    }\n     .searchFilerChildElementWrapper{\n        width:calc(100% - 4px);\n        height:34px;\n        border-bottom-width : 1px;\n        border-bottom-style : solid;\n        border-bottom-color : rgba(234,234,234,1);\n     }\n     .searchFilerChildElementNoBorder{\n        height:34px;\n       \n     }\n     .searchTextWrapper {\n        line-height: 34px;\n     }\n     .searchViewWrapper {\n        width:calc(100% - 4px);\n        height:48px;\n        border-bottom-width : 1px;\n        border-bottom-style : solid;\n        border-bottom-color : rgba(234,234,234,1);\n     }\n     .searchView{\n        height:32px;\n        background-color: rgba(244,247,250,1);\n        border-radius: 40px;\n        border-bottom-width : 1px;\n        \n        position: relative;\n        margin: 14px 8px auto;\n        \n     }\n     @media all and (orientation:landscape) { \n         \n     \n     }\n     /* landscape styles here */\n     @media screen and (min-aspect-ratio: 13/9) { \n     \n     .searchFilterContainer {\n                width:30%;\n                float:left;\n           \n           }\n     }\n\n       \n       \n       \n        \n    \n     \n    \n    \n   \n';

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(10)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(16)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(11);
	var invariant = __webpack_require__(12);
	var warning = __webpack_require__(13);
	
	var ReactPropTypesSecret = __webpack_require__(14);
	var checkPropTypes = __webpack_require__(15);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(11);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(12);
	  var warning = __webpack_require__(13);
	  var ReactPropTypesSecret = __webpack_require__(14);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(11);
	var invariant = __webpack_require__(12);
	var ReactPropTypesSecret = __webpack_require__(14);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2017 @ NEXLE
	 * @author rocachien
	 * @create 2017/03/08 14:44
	 * @update 2017/03/15 13:20
	 * @file common/icon/icon-component.js
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @desc This is Icon component.
	 * @example
	 *
	 * <Icon src= {"http://chart.apis.google.com/chart?chst=d_map_pin_shadow"} className={"className"} style={{position: "absolute"}}/>
	 */
	
	var Icon = function (_Component) {
	    _inherits(Icon, _Component);
	
	    /**
	     * @param {object} props.
	     */
	    function Icon(props) {
	        _classCallCheck(this, Icon);
	
	        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));
	    }
	
	    _createClass(Icon, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                src = _props.src,
	                style = _props.style,
	                className = _props.className;
	
	
	            return _react2.default.createElement("img", { src: src, style: style, className: className });
	        }
	    }]);
	
	    return Icon;
	}(_react.Component);
	
	exports.default = Icon;
	
	
	Icon.propTypes = {
	    style: _react.PropTypes.object,
	    className: _react.PropTypes.string,
	    src: _react.PropTypes.string
	};
	
	Icon.defaultProps = {
	    style: {},
	    src: null,
	    className: ""
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by long on 4/13/17.
	 */
	/**
	 *
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	var _iconComponent = __webpack_require__(17);
	
	var _iconComponent2 = _interopRequireDefault(_iconComponent);
	
	var _cellMapFinderDropdownComponent = __webpack_require__(19);
	
	var _cellMapFinderDropdownComponent2 = _interopRequireDefault(_cellMapFinderDropdownComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MapFinderDropdownComponent = function (_React$Component) {
	    _inherits(MapFinderDropdownComponent, _React$Component);
	
	    function MapFinderDropdownComponent(props) {
	        _classCallCheck(this, MapFinderDropdownComponent);
	
	        var _this = _possibleConstructorReturn(this, (MapFinderDropdownComponent.__proto__ || Object.getPrototypeOf(MapFinderDropdownComponent)).call(this, props));
	
	        _this.state = {
	            expand: _this.props.expand,
	            groupName: _this.props.groupName,
	            arrObject: _this.props.arrObject
	        };
	        return _this;
	    }
	
	    /**
	     * @desc This is callback function when click on item
	     * @param {object} event - Event of element
	     */
	
	
	    _createClass(MapFinderDropdownComponent, [{
	        key: 'onClick',
	        value: function onClick(event) {
	            event.stopPropagation();
	            event.preventDefault();
	
	            this.setState({
	                expand: !this.state.expand
	
	            });
	        }
	    }, {
	        key: 'itemClick',
	        value: function itemClick(tempData, index) {
	            var tempArrObject = this.state.arrObject;
	            tempArrObject[index] = tempData;
	            this.setState({
	                arrObject: tempArrObject
	
	            });
	        }
	    }, {
	        key: 'renderList',
	        value: function renderList() {
	            var _this2 = this;
	
	            var itemClick = function itemClick(tempData, index) {
	                return _this2.itemClick(tempData, index);
	            };
	            if (this.state.arrObject) {
	                return this.state.arrObject.map(function (item, index) {
	                    return _react2.default.createElement(_cellMapFinderDropdownComponent2.default, {
	                        key: index,
	                        index: index,
	                        data: item,
	                        onClick: itemClick
	                    });
	                });
	            } else {
	                return null;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            var cellStyle = this.props.cellStyle;
	
	            var titleNormalStyle = {
	                height: '16px',
	                fontSize: '10',
	                color: 'rgba(81,81,81,1)',
	                fontFamily: 'Roboto-Regular',
	                marginLeft: '16px',
	                marginRight: '16px'
	            };
	            var titleSelectStyle = {
	                height: '16px',
	                fontSize: '10',
	                color: 'rgba(0,154,222,1)',
	                fontFamily: 'Roboto-Medium',
	                marginLeft: '16px',
	                marginRight: '16px'
	            };
	            var iconDownStyle = {
	                width: '12px',
	                height: '6px',
	                right: '6px',
	                top: '12px',
	                position: 'absolute'
	            };
	            var iconUpStyle = {
	                width: '11px',
	                height: '8px',
	                right: '6px',
	                top: '12px',
	                position: 'absolute'
	            };
	            var srcIconDown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAAAXNSR0IArs4c6QAAAVdJREFUOBGlUktOhEAQtWXhDo7gEdi58gyjGcLOySRGnRiDF9BJiHqHGX+xTdwR2Dvegr3n0I3ge0wX6QATMLLgVVfVe4+qRm2ZZzweTxDqsiy3gW++70/jOC6k3ofgz8G9YZ9Sap5l2R1jismzZ8R5PsrzXMPArktfC21xU9wPw9BhXAukaXoJ54WwYTYZYgLxa/lycqHx7rruYZIkPzzXBiiUMLlAbskCH2PysmmSIAiu0HO77q7eK4prrb8lpyQQBEGBuADOJAd8xZ0c23dC8aIoqj2bvpXneQe2OPP1BKaJI3KSc+C95IBTrOtZJhkqTn5rAhE1kyyBZ5KDqUb8iVy9FuQ+sJZR88trjgRdSBNcIic57ar3iZPTWpEtBIES//MM+GTnGQ8Rr/qaxK6zWdcD8KQi9azF1th4B3YTY2PyiHDXcZwR/vOvZs+/zzSJomjnL0K/AnKp+wvhCV0AAAAASUVORK5CYII=";
	            var srcIconUp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAPCAYAAAALWoRrAAAAAXNSR0IArs4c6QAAAZ9JREFUOBGtkr9Kw1AUxr97bcFF21WXJuITiG9RiiilUBy00FZRFCfRwT/gIKKgQlEhqYOKSKGIm4Po4CbiE4jJCzi4iCjmeKLJTasmdjAQ8p1zvvu7554boJWHSLRi8z1/m01rDA5lkNSHkBOv/sKor4wqwrCmGbjHnjSe7BNcUSzS7xXDoaY1C6JtBSEaxL19wLnwNZFQw1riDtcU0BdEeZi2yeDIsf3c1bBWedGyz4EQl/zuqpiowGOpqPgX0Qw1rE0GzimfEOeI8TyL2iQEqioPTMB42GiIm+TXMdzjmPYOA8dVVYgzJLScunF3lqbFM8Vw4JErKGmLKvaEZJBE1d7/BqyhV8sqoGsWwkFCH2FV99YC5CzwRvMq9oTg+RwzMB8U5CGSqQID34Ncg7qlOO6sU86kVVaKGRR19ae4nQZAHgJKqdFQoEvpF2+IiyyrCwV1aIubK/ux5GORF1R4t/LnMf1q2Legv6CrfYAv71pZKOicO+WbFHId5Z6phg2UN1Rkup8hO9IMvmFPHX18B//2HD12okZt/8YLA30A9fSGH4lwGL0AAAAASUVORK5CYII=";
	            var onClick = function onClick(event) {
	                return _this3.onClick(event);
	            };
	
	            if (this.state.expand) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'list-expanse-wrapper' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'cell-select-wrapper', onClick: onClick },
	                        _react2.default.createElement(_textComponent2.default, {
	                            style: titleSelectStyle,
	                            text: this.state.groupName ? this.state.groupName : ''
	                        }),
	                        _react2.default.createElement(_iconComponent2.default, {
	                            src: srcIconUp,
	                            style: iconUpStyle
	                        })
	                    ),
	                    this.renderList(),
	                    _react2.default.createElement(
	                        'style',
	                        null,
	                        css
	                    )
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'cell-wrapper', onClick: onClick, style: cellStyle ? cellStyle : {} },
	                    _react2.default.createElement(_textComponent2.default, {
	                        style: titleNormalStyle,
	                        text: this.state.groupName ? this.state.groupName : ''
	                    }),
	                    _react2.default.createElement(_iconComponent2.default, {
	                        src: srcIconDown,
	                        style: iconDownStyle
	                    }),
	                    _react2.default.createElement(
	                        'style',
	                        null,
	                        css
	                    )
	                );
	            }
	        }
	    }]);
	
	    return MapFinderDropdownComponent;
	}(_react2.default.Component);
	
	exports.default = MapFinderDropdownComponent;
	
	
	MapFinderDropdownComponent.propTypes = {
	    expand: _react.PropTypes.bool,
	    groupName: _react.PropTypes.string,
	    arrObject: _react.PropTypes.array,
	    cellStyle: _react.PropTypes.object
	
	};
	
	var css = '\n .list-expanse-wrapper {\n     background: rgba(0, 154, 222, 0.1);\n     padding-bottom: 10px;\n    } \n    \n    .cell-select-wrapper { \n      border: none; \n      color: white;\n      height: 32px; \n      line-height: 32px;\n      text-align: left;\n      position: relative;\n    }  \n    \n      .cell-wrapper {\n      background: white;\n      border: none;\n      border-bottom: 1px solid #EAEAEA;\n      color: white;\n      height: 32px; \n      line-height: 32px;\n      text-align: left;\n      position: relative;\n    }  \n';

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by long on 4/13/17.
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	var _iconComponent = __webpack_require__(17);
	
	var _iconComponent2 = _interopRequireDefault(_iconComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellMapFinderDropdownComponent = function (_React$Component) {
	    _inherits(CellMapFinderDropdownComponent, _React$Component);
	
	    function CellMapFinderDropdownComponent(props) {
	        _classCallCheck(this, CellMapFinderDropdownComponent);
	
	        var _this = _possibleConstructorReturn(this, (CellMapFinderDropdownComponent.__proto__ || Object.getPrototypeOf(CellMapFinderDropdownComponent)).call(this, props));
	
	        _this.state = {
	            data: _this.props.data
	
	        };
	        return _this;
	    }
	
	    /**
	     * @desc This is callback function when click on item
	     * @param {object} event - Event of element
	     */
	
	
	    _createClass(CellMapFinderDropdownComponent, [{
	        key: 'onClick',
	        value: function onClick(event) {
	            event.stopPropagation();
	            event.preventDefault();
	            var tempData = this.state.data;
	            tempData.check = !tempData.check;
	            this.setState({
	                data: tempData
	            });
	            this.props.onClick(tempData, this.props.index);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var srcIconCheck = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAApNJREFUSA1jYICC////MwJxOhCfBOLPQEwtADLrBBCnATEjzD4wDRSQAuJ9QExrALJDCmYpyKf0sBTmKZBdjCBL04AumIkSBLTnZIAsPgm0x4z2dqHYcApk8WegEA+KMO05X0AW/6e9PZg2MGEK0UeEZhY//faX4R8eP1DdYpBlqYffMMgue8xguv4ZA654pLrFGUfeMsy58ZkBlHQuvfvF8P4ndn9T1eKC4+8YZl//BA/gXG0+BiF27FZgF4VrJZ5Rdfo9w8QrH+EaEtR5GXothOB8dAZVLG698JGh/cIHuNlhyjwMc2xFGFBrBLg0mIHT4vm3vjAUn3zHAEqd+MCEK58Yak6/gyvxk+dmWOooysCMz1agaqwFyI2Pvxk0Vz0BG6bAy8pw2FeSQYabGW44jDELmIjSgSkYBlxlOBk2u0sw4IhWmDIwjdXHUlwsDDysEKkHn38zuGx7wfDqB2rqXHLnK0MmMAXDgK0kB8MGN3GiLAXpwWoxHysjw2oXMQY2aHjd/PCLwXXbc4b3vyCWr33wjSHh4GuGf9DS1kyMnWEr0KdchMIX5kogjTWoYfLrgRaE7n3F8PcfpBgAWVCiJ8AQve8Vw2+omL4wO8N+HwkGQTasfoAZhUHjtRikGhSk8QcQvmNkZAQXDiA5TUE2hoM+kgyiHKRZCtJLUEeMCjfDNBthkFowgFVmSnysDHu8JMiyFGQQQYtBitI1QIUB0HKgb0FAloeZYZ+3BIMUF2ZKBysggiAY1Mhm3P70h+EZMF/bSrAT52JkzWhskixG00sRFxTUXygygTzNX0AWXyNPL0W6roIsnkeREeRpngfKk6B4pnuDHuxeoMX078LAQgrqc1DHihadNpCZoA4hvLIEAGp+Q/n+INsHAAAAAElFTkSuQmCC";
	            var srcIconNoCheck = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAMZJREFUSA3tlzEOgzAMRZPOPQEH6ZFor9SFo3Qu3elFyB7+R6RSQNn4XmpLX8iO5Bd/McQhbJFzjtAdGqEZOivY6w31UCy89YtCB70gdZDRFSgntYCWociKhPa4wbOyQJ88CB7BuelZFeFD8IzStSrrk0Rw1nOOhMuxZFNxsI3PoLjVbrXMAf+5ZNbuG7vVe0dk+X9anWR+thsnWv1tn8tOJoIHWft24yHgrccHn/mDfr0TwPYrTHFjm5yLlWJpY08uhL+lbQF8xaOZsdul2gAAAABJRU5ErkJggg==";
	
	            var titleNormalStyle = {
	                backgroundColor: 'transparent',
	                fontSize: '8',
	                color: 'rgba(0,154,222,1)',
	                fontFamily: 'Roboto-Regular',
	                marginLeft: '36px',
	                marginRight: '6px'
	
	            };
	            var iconCheckStyle = {
	                width: '10px',
	                height: '10px',
	                left: '16px',
	                top: '10px',
	                position: 'absolute'
	
	            };
	            var onClick = function onClick(event) {
	                return _this2.onClick(event);
	            };
	            if (this.state.data) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'cell-detail-wrapper', onClick: onClick },
	                    _react2.default.createElement(_iconComponent2.default, {
	                        src: this.state.data.check == true ? srcIconCheck : srcIconNoCheck,
	                        style: iconCheckStyle
	                    }),
	                    _react2.default.createElement(_textComponent2.default, {
	                        style: titleNormalStyle,
	                        text: this.state.data.value ? this.state.data.value : ''
	                    }),
	                    _react2.default.createElement(
	                        'style',
	                        null,
	                        css
	                    )
	                );
	            } else {
	                return null;
	            }
	        }
	    }]);
	
	    return CellMapFinderDropdownComponent;
	}(_react2.default.Component);
	
	exports.default = CellMapFinderDropdownComponent;
	
	
	CellMapFinderDropdownComponent.propTypes = {
	
	    data: _react.PropTypes.object,
	    onClick: _react.PropTypes.func,
	    index: _react.PropTypes.number
	};
	
	var css = '\n  .cell-detail-wrapper {  \n      border: none; \n      height: 28px; \n      line-height: 28px;\n      text-align: left;\n      position: relative; \n    }  \n';

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactFontawesome = __webpack_require__(21);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	var _iconComponent = __webpack_require__(17);
	
	var _iconComponent2 = _interopRequireDefault(_iconComponent);
	
	var _inputComponent = __webpack_require__(4);
	
	var _inputComponent2 = _interopRequireDefault(_inputComponent);
	
	var _buttonComponent = __webpack_require__(6);
	
	var _buttonComponent2 = _interopRequireDefault(_buttonComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MapFinderSearchAdvanceComponent = function (_React$Component) {
	    _inherits(MapFinderSearchAdvanceComponent, _React$Component);
	
	    function MapFinderSearchAdvanceComponent(props) {
	        _classCallCheck(this, MapFinderSearchAdvanceComponent);
	
	        var _this = _possibleConstructorReturn(this, (MapFinderSearchAdvanceComponent.__proto__ || Object.getPrototypeOf(MapFinderSearchAdvanceComponent)).call(this, props));
	
	        _this.state = {
	            isExpand: false,
	            clubNameValue: '',
	            postCodeValue: '',
	            suburbValue: ''
	
	        };
	        return _this;
	    }
	
	    _createClass(MapFinderSearchAdvanceComponent, [{
	        key: 'onClick',
	        value: function onClick(event) {
	
	            event.stopPropagation();
	            event.preventDefault();
	            this.props.onSearchAdvanceExpand(!this.state.isExpand);
	            this.setState({
	                isExpand: !this.state.isExpand
	
	            });
	        }
	    }, {
	        key: 'clearFilter',
	        value: function clearFilter() {
	            if (this.refs.inputClubName) {
	                this.refs.inputClubName.clearText();
	            }
	            if (this.refs.inputPostcode) {
	                this.refs.inputPostcode.clearText();
	            }
	            if (this.refs.inputSuburb) {
	                this.refs.inputSuburb.clearText();
	            }
	            this.onTextChange();
	        }
	    }, {
	        key: 'onTextChange',
	        value: function onTextChange() {
	            var clubName = this.refs.inputClubName ? this.refs.inputClubName.getInputValue() : '';
	            var inputPostcode = this.refs.inputPostcode ? this.refs.inputPostcode.getInputValue() : '';
	            var inputSuburb = this.refs.inputSuburb ? this.refs.inputSuburb.getInputValue() : '';
	            this.setState({
	                clubNameValue: clubName,
	                postCodeValue: inputPostcode,
	                suburbValue: inputSuburb
	            });
	        }
	    }, {
	        key: 'forceFocusFirst',
	        value: function forceFocusFirst() {
	            if (this.refs.inputClubName) {
	                this.refs.inputClubName.forceFocus();
	            }
	        }
	    }, {
	        key: 'onSearchAdvanceClick',
	        value: function onSearchAdvanceClick() {
	            var _this2 = this;
	
	            if (this.refs.inputPostcode.getInputValue().length <= 0 && this.refs.inputClubName.getInputValue().length <= 0 && this.refs.inputSuburb.getInputValue().length <= 0) {
	                return;
	            }
	            this.props.onSearchAdvanceStatus('searching');
	            var postcode = '';
	            var suburb = '';
	            var name = '';
	            if (this.refs.inputPostcode.getInputValue().length >= 2) {
	                postcode = this.refs.inputPostcode.getInputValue();
	            }
	            if (this.refs.inputClubName.getInputValue().length >= 3) {
	                name = this.refs.inputClubName.getInputValue();
	            }
	            if (this.refs.inputSuburb.getInputValue().length >= 3) {
	                suburb = this.refs.inputSuburb.getInputValue();
	            }
	            var sport = this.props.query.sport ? this.props.query.sport : 'baseball';
	
	            Service.getSearchPlace(postcode, suburb, name, sport).then(function (data) {
	
	                if (data) {
	                    var dataResult = data.results ? data.results : [];
	                    _this2.fetchDataRow(dataResult, 0);
	                } else {
	                    _this2.props.onSearchAdvanceClick([]);
	                    _this2.props.onSearchAdvanceStatus('finished');
	                }
	            });
	        }
	    }, {
	        key: 'fetchDataRow',
	        value: function fetchDataRow(arrayObject, currentIndex) {
	            if (arrayObject.length <= 0 || currentIndex >= arrayObject.length) {
	                this.props.onSearchAdvanceClick([]);
	                this.props.onSearchAdvanceStatus('finished');
	                return;
	            }
	            var temp = arrayObject[currentIndex];
	            var lat = temp.lat;
	            var lon = temp.lon;
	            var cat = "club";
	            var sport = this.props.query.sport ? this.props.query.sport : 'baseball';
	            this.getData(arrayObject, currentIndex, lat, lon, cat, sport);
	        }
	    }, {
	        key: 'getData',
	        value: function getData(arrayObject, currentIndex, lat, lon, cat, sport) {
	            var _this3 = this;
	
	            Service.getSearchNearByPlace(lat, lon, cat, sport).then(function (data) {
	
	                if (data && data.results.length > 0) {
	                    var dataResult = data.results;
	                    _this3.props.onSearchAdvanceClick(dataResult);
	                    _this3.props.onSearchAdvanceStatus('finished');
	                } else {
	                    var index = currentIndex + 1;
	                    _this3.fetchDataRow(arrayObject, index);
	                }
	            });
	        }
	    }, {
	        key: 'renderExpandedContent',
	        value: function renderExpandedContent() {
	            var _this4 = this;
	
	            var inputStyle = {
	                width: '90%',
	                height: 20,
	                marginLeft: 8,
	                marginBottom: 2,
	                backgroundColor: 'rgba(244,247,250,1)',
	                borderRadius: '4px',
	                fontSize: 12,
	                fontFamily: 'Roboto',
	                border: 'none',
	                textAlign: 'left',
	                color: 'rgba(81,81,81,1)',
	                outline: 'none',
	                textOverflow: 'ellipsis'
	
	            };
	            var textStyle = {
	                height: '16px',
	                fontSize: 12,
	                color: 'rgba(81,81,81,1)',
	                fontFamily: 'Roboto',
	                marginLeft: 8
	
	            };
	
	            var onSearchAdvanceClick = function onSearchAdvanceClick() {
	                return _this4.onSearchAdvanceClick();
	            };
	
	            if (!this.state.isExpand) {
	                return _react2.default.createElement('div', null);
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'searchAdvanceContent' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'searchAdvanceElement' },
	                    _react2.default.createElement(_textComponent2.default, { text: 'Club name', style: textStyle }),
	                    _react2.default.createElement(_inputComponent2.default, {
	                        ref: 'inputClubName',
	                        style: inputStyle,
	                        placeholder: '',
	                        value: this.state.clubNameValue,
	                        onChange: function onChange() {
	                            return _this4.onTextChange();
	                        },
	                        onKeyUp: this.onKeyUp
	                    })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'searchAdvanceElement' },
	                    _react2.default.createElement(_textComponent2.default, { text: 'Postcode', style: textStyle }),
	                    _react2.default.createElement(_inputComponent2.default, {
	                        ref: 'inputPostcode',
	                        style: inputStyle,
	                        placeholder: '',
	                        value: this.state.postCodeValue,
	                        onChange: function onChange() {
	                            return _this4.onTextChange();
	                        },
	                        onKeyUp: this.onKeyUp
	                    })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'searchAdvanceElement' },
	                    _react2.default.createElement(_textComponent2.default, { text: 'Suburb', style: textStyle }),
	                    _react2.default.createElement(_inputComponent2.default, {
	                        ref: 'inputSuburb',
	                        style: inputStyle,
	                        placeholder: '',
	                        onChange: function onChange() {
	                            return _this4.onTextChange();
	                        },
	                        value: this.state.suburbValue,
	                        onKeyUp: this.onKeyUp
	                    })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'buttonSearchWrapper' },
	                    _react2.default.createElement(_buttonComponent2.default, {
	                        onClick: onSearchAdvanceClick,
	                        text: 'SEARCH',
	                        style: { height: 24, backgroundColor: 'rgba(0,151,222,1)', borderRadius: 40, fontSize: 12, fontFamily: 'Roboto-Medium', outlineStyle: 'none' }
	
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;
	
	            var iconNormal = {
	                width: '10px',
	                height: '10px',
	                right: 8,
	                top: 8,
	                position: 'absolute',
	                color: 'rgba(81,81,81,1)',
	                fontSize: 14
	            };
	            var iconExpand = {
	                width: '10px',
	                height: '10px',
	                right: 8,
	                top: 8,
	                position: 'absolute',
	                color: 'rgba(0,154,222,1',
	                fontSize: 14
	            };
	            var searchTextNormal = {
	                height: '16px',
	                fontSize: 14,
	                color: 'rgba(81,81,81,1)',
	                fontFamily: 'Roboto',
	                fontWeight: '500',
	                marginLeft: '8px'
	
	            };
	
	            var searchTextExpand = {
	                height: '16px',
	                fontSize: 14,
	                color: 'rgba(0,154,222,1)',
	                fontFamily: 'Roboto',
	                fontWeight: '500',
	                marginLeft: '8px'
	
	            };
	
	            var onClick = function onClick(event) {
	                return _this5.onClick(event);
	            };
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'advanceSearchExpandedWrapper' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mapFinderSearchAdvanceContainer', onClick: onClick },
	                    _react2.default.createElement(_textComponent2.default, {
	                        text: 'Advanced Search ',
	                        style: this.state.isExpand ? searchTextExpand : searchTextNormal
	                    }),
	                    _react2.default.createElement(_reactFontawesome2.default, {
	                        name: this.state.isExpand ? 'chevron-up' : 'chevron-down',
	                        style: this.state.isExpand ? iconExpand : iconNormal
	
	                    })
	                ),
	                this.renderExpandedContent(),
	                _react2.default.createElement(
	                    'style',
	                    null,
	                    css
	                )
	            );
	        }
	    }]);
	
	    return MapFinderSearchAdvanceComponent;
	}(_react2.default.Component);
	
	exports.default = MapFinderSearchAdvanceComponent;
	
	
	MapFinderSearchAdvanceComponent.propTypes = {
	    expand: _propTypes2.default.bool,
	    groupName: _propTypes2.default.string,
	    arrObject: _propTypes2.default.array,
	    cellStyle: _propTypes2.default.object,
	    onSearchAdvanceClick: _propTypes2.default.func,
	    onSearchAdvanceStatus: _propTypes2.default.func,
	    onSearchAdvanceExpand: _propTypes2.default.func,
	    query: _propTypes2.default.object
	
	};
	
	MapFinderSearchAdvanceComponent.defaultProps = {
	    query: {}
	
	};
	
	var css = '\n    .advanceSearchExpandedWrapper {\n        width:calc(100% - 4px);\n        margin:0 4px 0 0;\n       border-radius: 4px;\n        \n        -webkit-box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);\n        -moz-box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);\n        box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);\n         \n    }\n    .mapFinderSearchAdvanceContainer {\n      background-color:rgba(244,247,250,1);\n      height: 36px; \n      line-height: 32px;\n      text-align: left;\n      position: relative;\n     \n    }\n    .searchAdvanceContent { \n      border-bottom-left-radius: 4px;\n      border-bottom-right-radius: 4px;\n      background-color:rgba(244,247,250,1)\n    }\n    .searchAdvanceElement{\n        border-bottom:1px solid rgba(81,81,81,0.1);\n    }\n    .buttonSearchWrapper {\n        width:30%;\n        height:35px;\n        margin: auto;\n        padding-top:8px;\n        padding-top:8px;\n        \n    }\n    @media all and (orientation:landscape) { \n       .buttonSearchWrapper {\n        width:50%;\n        height:35px;\n        margin: auto;\n        padding-top:8px;\n        \n        \n            \n       }\n      \n     }\n\n    }\n';

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _screenReaderStyles = __webpack_require__(22);
	
	var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A React component for the font-awesome icon library.
	 *
	 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
	 * @param {Boolean} [border=false] Whether or not to show a border radius
	 * @param {String} [className] An extra set of CSS classes to add to the component
	 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
	 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
	 * @param {String} [flip=false] Flip the icon's orientation.
	 * @param {Boolean} [inverse=false]Inverse the icon's color
	 * @param {String} name Name of the icon to use
	 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
	 * @param {Number} [rotate] The degress to rotate the icon by
	 * @param {String} [size] The icon scaling size
	 * @param {Boolean} [spin=false] Spin the icon
	 * @param {String} [stack] Stack an icon on top of another
	 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
	 * @module FontAwesome
	 * @type {ReactClass}
	 */
	var FontAwesome = function (_React$Component) {
	  _inherits(FontAwesome, _React$Component);
	
	  function FontAwesome() {
	    _classCallCheck(this, FontAwesome);
	
	    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));
	
	    _this.displayName = 'FontAwesome';
	    return _this;
	  }
	
	  _createClass(FontAwesome, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          border = _props.border,
	          cssModule = _props.cssModule,
	          className = _props.className,
	          fixedWidth = _props.fixedWidth,
	          flip = _props.flip,
	          inverse = _props.inverse,
	          name = _props.name,
	          pulse = _props.pulse,
	          rotate = _props.rotate,
	          size = _props.size,
	          spin = _props.spin,
	          stack = _props.stack,
	          _props$tag = _props.tag,
	          tag = _props$tag === undefined ? 'span' : _props$tag,
	          ariaLabel = _props.ariaLabel,
	          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);
	
	      var classNames = [];
	
	      if (cssModule) {
	        classNames.push(cssModule['fa']);
	        classNames.push(cssModule['fa-' + name]);
	        size && classNames.push(cssModule['fa-' + size]);
	        spin && classNames.push(cssModule['fa-spin']);
	        pulse && classNames.push(cssModule['fa-pulse']);
	        border && classNames.push(cssModule['fa-border']);
	        fixedWidth && classNames.push(cssModule['fa-fw']);
	        inverse && classNames.push(cssModule['fa-inverse']);
	        flip && classNames.push(cssModule['fa-flip-' + flip]);
	        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
	        stack && classNames.push(cssModule['fa-stack-' + stack]);
	      } else {
	        classNames.push('fa');
	        classNames.push('fa-' + name);
	        size && classNames.push('fa-' + size);
	        spin && classNames.push('fa-spin');
	        pulse && classNames.push('fa-pulse');
	        border && classNames.push('fa-border');
	        fixedWidth && classNames.push('fa-fw');
	        inverse && classNames.push('fa-inverse');
	        flip && classNames.push('fa-flip-' + flip);
	        rotate && classNames.push('fa-rotate-' + rotate);
	        stack && classNames.push('fa-stack-' + stack);
	      }
	
	      // Add any custom class names at the end.
	      className && classNames.push(className);
	      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
	    }
	  }]);
	
	  return FontAwesome;
	}(_react2.default.Component);
	
	FontAwesome.propTypes = {
	  ariaLabel: _propTypes2.default.string,
	  border: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  cssModule: _propTypes2.default.object,
	  fixedWidth: _propTypes2.default.bool,
	  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
	  inverse: _propTypes2.default.bool,
	  name: _propTypes2.default.string.isRequired,
	  pulse: _propTypes2.default.bool,
	  rotate: _propTypes2.default.oneOf([90, 180, 270]),
	  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
	  spin: _propTypes2.default.bool,
	  stack: _propTypes2.default.oneOf(['1x', '2x']),
	  tag: _propTypes2.default.string
	};
	
	exports.default = FontAwesome;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  position: 'absolute',
	  width: '1px',
	  height: '1px',
	  padding: '0px',
	  margin: '-1px',
	  overflow: 'hidden',
	  clip: 'rect(0px, 0px, 0px, 0px)',
	  border: '0px'
	};
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	var _mapFinderResultListComponent = __webpack_require__(24);
	
	var _mapFinderResultListComponent2 = _interopRequireDefault(_mapFinderResultListComponent);
	
	var _mapFinderResultMapComponent = __webpack_require__(28);
	
	var _mapFinderResultMapComponent2 = _interopRequireDefault(_mapFinderResultMapComponent);
	
	var _pagingComponent = __webpack_require__(27);
	
	var _pagingComponent2 = _interopRequireDefault(_pagingComponent);
	
	var _iconComponent = __webpack_require__(17);
	
	var _iconComponent2 = _interopRequireDefault(_iconComponent);
	
	var _mapFinderFooterComponent = __webpack_require__(57);
	
	var _mapFinderFooterComponent2 = _interopRequireDefault(_mapFinderFooterComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SearchResultComponent = function (_Component) {
	    _inherits(SearchResultComponent, _Component);
	
	    function SearchResultComponent(props) {
	        _classCallCheck(this, SearchResultComponent);
	
	        var _this = _possibleConstructorReturn(this, (SearchResultComponent.__proto__ || Object.getPrototypeOf(SearchResultComponent)).call(this, props));
	
	        _this.state = {
	            isShowMap: false,
	            sliderStatus: 'both'
	
	        };
	        return _this;
	    }
	
	    _createClass(SearchResultComponent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }, {
	        key: 'pagingClick',
	        value: function pagingClick(page) {
	            console.log('***** page   ', page);
	        }
	    }, {
	        key: 'onClearFilter',
	        value: function onClearFilter() {
	            window.scrollTo(0, 0);
	            if (this.props.onClearFilter) {
	                this.props.onClearFilter();
	            }
	        }
	    }, {
	        key: 'onSearchAgain',
	        value: function onSearchAgain() {
	            window.scrollTo(0, 0);
	            if (this.props.onSearchAgain) {
	                this.props.onSearchAgain();
	            }
	        }
	    }, {
	        key: 'renderSliderButton',
	        value: function renderSliderButton() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'sliderButton' },
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: this.state.sliderStatus == 'both' ? "switch-button-blue" : "switch-button-gray",
	                        onClick: function onClick() {
	                            return _this2.setState({ sliderStatus: 'both' });
	                        }
	                    },
	                    'BOTH'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: this.state.sliderStatus == 'list' ? "switch-button-blue" : "switch-button-gray",
	                        onClick: function onClick() {
	                            return _this2.setState({ sliderStatus: 'list' });
	                        }
	                    },
	                    'LIST'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: this.state.sliderStatus == 'map' ? "switch-button-blue" : "switch-button-gray",
	                        onClick: function onClick() {
	                            return _this2.setState({ sliderStatus: 'map' });
	                        }
	                    },
	                    'MAP'
	                )
	            );
	        }
	    }, {
	        key: 'renderResultContent',
	        value: function renderResultContent() {
	            var _this3 = this;
	
	            var onPagingClick = function onPagingClick(page) {
	                return _this3.pagingClick(page);
	            };
	            if (this.state.sliderStatus == 'both') {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'searchResultContentWrapper' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'searchResultList' },
	                        _react2.default.createElement(_mapFinderResultListComponent2.default, {
	                            searchStatus: this.props.searchStatus,
	                            resultData: this.props.resultData
	
	                        })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'searchResultMap' },
	                        _react2.default.createElement(_mapFinderResultMapComponent2.default, {
	                            markers: this.props.resultData
	                        })
	                    )
	                );
	            } else if (this.state.sliderStatus == 'list') {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'searchResultList' },
	                    _react2.default.createElement(_mapFinderResultListComponent2.default, {
	                        searchStatus: this.props.searchStatus,
	                        resultData: this.props.resultData
	
	                    })
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    this.renderMapView()
	                );
	            }
	        }
	    }, {
	        key: 'renderMapView',
	        value: function renderMapView() {
	            var iconLoading = 'data:image/gif;base64,R0lGODlhuQEjAfQAAP///+fn587Ozr6+vrKyspqamo6OjoKCgnV1dWlpaVlZWVFRUUFBQT09PTk5OTU1Nf4BAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAQFAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAuQEjAQAF/iAgjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMo/lOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNE3AQIcbSXAQAIFUBEQWHoqgAGoWLEmEEB1VAAEWcNCHdA1FFixYrmW7UQALVoEaxEJKGCgLgGlLZ66FUs27qCmCAILRlCAxYC9aA34FTTgwODHBvCiKIBYbILFgAQ4fgxZBeXKYTH/McC5dN8Tn0FDvSyaj4DSpRWjOKwa6oHWfArALi25RAC9qgvj1kN692O1J66qTtD7xNy6BZAPN1PcuGDpvoEjFj5ZwYLv4BVMnV6munUE2EsM0J44xW/w8MEjaE7eC4HzgW+vEMA+q+wTAXgX34DM1RdGAJtZ/sedCgGkhtUB6ZGQwIAULqCfgV/cZ90B9LknAAEEDBAhCQRUWOFpGHZhXmkj5jChiQPCleIXupV2AIo9CABjhR3OiMUA5h1QQI86lLjjgC36eEUAAjRZRAFHDoijkoNAGSV8U1IZiI5XgpeklnwE0CV4YDpB5BMHjPlfmUc8B92XSnB55Zls9tBgXXhCR2cSBly5YJ1CWJXnoENS0eeOfwIaBF2DElqFlRWOp+gQTTXa6J5JNBifAoVOSgSjluYpaRVMCoCppzqE2miiqO4hqKp4stoqcbDGOisgoMKa5a14VFrrqbzGkaulowabm6rFGntso8kqG+YABUQ7ALDO/lZr7bXYZqvtttx26+234IYr7idJUTtuGR9GWwABcJ5LRgAEqCtvs+6eEa+889a7BrT44tuuvlz02y+9AH/RoMD4mlswFQcjrK7CC0vRsMOdRiwGxdESbPEW/Dr878akUqwxyFpMnDDJ796r7rQom1Hqxy1rUm65Mb87M801g3HzzDnrvDPOPXPxM9BBlzx00TAQfcTRSLMgwABQQw3xDTs3vUIAUWctohI8W62C1lrD7LURWIOd9dhVPG121FOj/cPaWVP7sqlu86A23MDO3aTYdadw99qn6r03332fAPfWLgyuON2F2/C31oEvPnjbjYvwuNQvCD555Tg0KaLCnpLvTTnnnYdOOOk7aM446kwIPjrrOZSaFOy012777bjnrvvuvPfu++/ABy/88MQXb/zxyCev/PLMN+/889BHL/301Fdv/fXYZ6/99tx37/334Icv/vjkl2/++einr/767Lfv/vvwxy///PTXb//9+Oev//789+///wAMoAAHSMACGvCACEygAhfIwAY68IEQjKAEJ0jBClrwghgMYAgAACH5BAQFAAAALLAAYgBdAFsAAAX+ICCOZGmeaKqubOu+MBkMxnEYRBDvfK8OiIRwmCj4jkhYgchMHHTJqHREaDYP0yxSYLUatVMBgTCAtgxdqxnsI9jeNwErkLYS2L5ADQ7/prh1TH54MXt8cHd/gUwGhDtuh4drJYCLQoOOc5GRmDKWQ4mZLQKbkSoHnwlyoi2QpXCTJAOfWCsBAgMDArFTrq82vCOoi8EipAvIyQbFRwO/sCoBQXUDKgXJ2MmhUwHPNo22aFYIqygG2egLnUmGr9UtzkQIBcwE6env3M/gLwH+zCIC3EuXAOAOZ68M+rg2EN02KQgPLXOUoCG6BGwCEDBUoBwegRbROfLHCoCAkOj+FJY8chIlNpUre4B0iSxmpoo0Edh0ZI9mvjkDCBQgsGsnC5whdboQWqCp059GTbQMqdKpVacPo8oK6VEF06tWu2odQefeExcBwKodmyIesgQGxP5QC1Yu2yRf6TaFejeK3qt8+yLJqzewYB8C/jqFeXiO4qaNW9waY1fEAMWM2QJpwJkzgwN2CYeNnIJO59Oda0lVm1mrQNSwGxREMSNX67ELYsdWTZqHAd26s/aWDFz3guE7ChTXXRn5iQTLY69zjoJBdNhKqbO4DhujdhbWuXfO/j0FdPGcp5cfoRx9g+brA7g/vn7Fb/HC65fIfZ032aCU3RbVa8vNRskYCFLLFt95uvlnTIIQwhfZZqcxQM4JGkEIoYCuiUHUDxpGqN8LIWo44lIlJnhiKykiuCILLY5h2IsjeJgih9oBGOKMNMqyY48u2KggkP2QROSRGP6DpGT/GLkkbU0q+WSSUeIYX5VWlodllt9hWdItuehiVJWs4BJmmFw6V9uZaE4pC5tnSvjimnDm4mZAdZ6ZWZRq5hkmDFsiRyeccpIV6HBm1gnTlk6SNmiYhQbEaJoZJZpLpJIySl2TPExKaW+T3inDoaJmymmpJUhZUggAIfkEBAUAAAAssQBjAFwAWgAABf4gII5kaZ5oKgYD4QpqLM90nQYFou/HYP/AYEywK+4KwqTSRjQ6kcuotOSsImDT7EogCNgGVudBOxUUDGg0wSszhJ1scpKQrqOxqrfTJxfS7XZxJwF6RgR9QQGAgFAohIU7fIg2Z4t2eCcHkDqYkzKKlnaNJwSbCJ5MoYAqj4WHMwGCcgKqdjGlemO3Bwq9Cj19oLUGoyg5YQeyJQIJvs4KCMpRw2ozuE4G0iMDz90KnVED1NomAXRH4Mve3uRClaGviAjr3QZkwovFZAL07PfvdeIhMtCvmz4p5gooHNBuSrOCznShmggA4rNTFCdadIYxo6d5G395RFUgpAKBI/7lBDDZkEQAAQO6pKRB0OLBQQQU6lwzMwYhiB1jDNBJVGG6niN+0ksGq6jTljNLekOpIqdTolSRlkh44EABSU2vFtU6yYxYolDJAhl6VmdatUzauoX7T+5NukqsngWLF1Y7HGez9iWVYAEDBgsQCDbrlOfgqoYPSz68IF1ConwfmzAwubNkwQBivcXL2bNp0JplDDDNmsHo1CMUtDZtD7aNALNNL3idukBu00dtn0Dw2zNq4SSIF598F3ny5ZOPOwfgG/rh4NNXWEfMO7Vs6LWzq1gNvTvs0r+zvuRiXuuB9OVauHDBUDwAApE9L8hsbr5/x+IRUBhliqHw33+ZZZkXCysH/teecAI06B929pUgn4QEUFjhNhi+sOEMEXb4oG39YfghDSE2OCJyKfq3onMvtRDTiyfWaOONOOao44489uijT+zRiNx6XBT5o0tFJsnFkSIoqaSQmjmp5JFESqlhOaIJV6WUP4jmpW1Wsnebl1nCtmWSb5FJJphSjqbmlyQ+2eWbCw5Z55x0MrlCnnryqWdoa/6pVggAIfkEBAUAAAAssQBjAFwAWQAABf4gII5kaZ5oOgZCq75wLM/vYCA4chAB7f/AV+CWKx4EwaTSRyw6kcuotERwWnW9qVYZOFythK12UDCYCVBY9es8iKOCsnluCMOa7Fz2DRTQ/wYFd3lOe3w+coBzdil4hIaHMjaKf5BUhDlukYiUfwMqApg4gps0nX+MKI5flqUqp3SpJ12EsrMERHWtUrCLMAJeX6QqBQnGx8bDW7i9aSoBBVYHn88HyNcJB7tJQ7DKvwQFBQTULwjY2AZvzJ3Ob8Xo2LZR7IDlfAHx6Ah8ZH8F26YM0Ifu3hYBAxIG1AKPILJ5rvgYcHjtW8RDEykes3jxncZjEDtqEfDR2EKRUf7OadQ0I4BLlDMGanSXIsAAAjhxGoSJoqG+kCUC5ByKkycMn/JkCCVK1OgLYOlOjrjJdChNp0GpDpBKoipTrIeWes0JFt/YoWXfiD2bdt1Zcm3FCHjLNW7MsTvtzopm7ADAFF7z6iURAMGCw4gPq0Mxd2jdtAMSSz6s4PHgE5EnT658OUgABZo18+v8o0Do0IJJpwB9evJo1TEEtA4NWwaB2Zqv1qaCe7Lu3SNu9078GzgA2cMRG3/Bevjr5SdMJ08N/bNz6DV6c571Enrm09tLIEyYsPjlwqENtCLPPiF2aCr97hrfvjx2pfXb349hMz95y8DR5x+Au/Xn31b7CeZxoEKXxZHAYQkUYJ4JC04IkwAKPKDhhhoiUJeB9Q1mAIckbghUVvURuMmIJbZ4YlAtCKDiJgO0aOMDFu62wI0tJpBgVzzamKNqCATZIkfQMWBkiT7+GMCSJS7wIwBPQsmhlFNayWGTPyagpYYsieHSjDQU8OUD1HkWYwtk8vcllluwsCabpbAI5Ys+yDknnZvsuORzU+y5ZpswBOAnj1weJCifm3TBI5JwLCrjD2N2F9sBhz6wgHqR6LmnZZWOmSejnS4KaqiWnicopaimOpinBLbq6pTctUqrELbeimuouhYqakchAAAh+QQEBQAAACyxAGMAXABZAAAF/iAgjmRpnmhKBoHqvnAsvwFhHHghzHzvwwOcUFho/Y7IGWHIPBiMyaiUJGg2C9OstGBtQrXRwIBAFnxVgW6TAJYSCvC4DqhmGtrJt1w+eC3rQ3hHentyOyp/gDiCPgGFhWwqVYoHWIw8A4+FZyY3in2XSpp7hylBgHehoqNxpSlcda4pAnoEnFmErLInjmqgkgcJwsMHu1ICrHEyA55EtyUFw9LDkWDJBb8xAgMDZjDR0+HVWcisz1MC4eoJ50flj+1SBuvhlmA1e9mCAfTqjCzeVAFI12+aMYFtCBQ0iFCVwoXDDjYkB3FYvIlRKiZAgDEUuIXjOrYJgGAhRxli/sgQGHBRJEF6CFqKGKNSpUSRIwSUVHdAJgCaNW3i9BOMWEgXNYIG9dmRBYseQJWWGXpJalB9VLVYDZpV0FaVWLtKiSr1ptgfSbcyPatNLVsZtOAQuElL6dquChfo3ZtAYoBtK82+FUFyr+G99gYnQXC48YJUio8YcOz4aGRtlB0ruHv5QObKl3so+Nz4ZOgYAUg3VnAarurGrVG/Nsw6NozRsxeYtq3Cc27LvEsIyL05+IvJr4EbL5FA9QE0ywkzzpx4hYDr1zlnzXs4QVgAf7Fj1551jFy/4tOTj52+fXTU7dO/hxE+fvb5SO1jx/9C//XQmRhgwBw81NfeevsUsbAAAww2uEB1/dmn2HANVtggOzMcOKGFHDK4gGAlOBVZah12uACCbCFQYomQ8RfAiiui2FUBMJaoXHAq1shhi/MpoCOHCfAngo8/VhikkAkUWeFzQhqgZIMQZiEjDAI8yeCUKzj1lCpEFnmkFlpqqcoAT4JYYJgielTkjWihmWYoTtYYZRhuvlnVgh0qYGYPddoZygCMMajAAd9N0SeWl/UpJH1oLoqamI5GKumklIYWAgAh+QQFBQAQACyyAGMAWgBVAAAF/iAkjmRpnmg6AoDqvnAsq0BAFAUhtHPv/6pAwUAsGgY8oHIJCxifBkKSSa1ChNDnwMplErLQaVdZEwwEAXEKAIYKxkwBoUQINNvPORy4RdldAnhGens9bylSLk6CRISFMQCOJ30pi4yUj00viSpfjH+ZMIeKioySoSqYlS8DeAVqJ2VosFSjQS8ArVkFoJUECMDBnFy9KKe+RgVILwIHwc8IB8VUxyTTLjUBaU3Q3QjXSjYpy48Azt7PB7RA4ibkj7/o0KpUAHIjdajm8tAFeywsUIkIwK/bOoFWCBZ8Bg5hwoUMHZaDGOygRCYFKPq7WEgAxYYcmQDIWLDaCoBm/gYM2BYSmwF+r5qoWtkSG8luw275qamIwLkD+WDkGmeRJ8CiJGydAMlTCb0SSptWeZpU6pioJZha7cFU61YZQ1G8+0olwFOqZGOl3OFnZto7CRTIVZCAF4mj2tB4JRtprt+5aN/GKPC3sILAgjsZNow1MY24i/8iQOpYBIHIjCvHQIC58EbNjzv/NQAam+i/B0qHPi2XtOoUnFkr+PzaxGXZjWsDgCx6cm1ErHP/hkC4M1XKaftGpoR3BMvaTv7W3TtchD2VbEsERIEc+qrqNMCTwSaee3l23wUHkKOje/jkAxAsmE9fmoxr1B2ao8+ffkxNzgm2W38ELuDbGkcBfSSgfAUSaIB7ghHQYIPClQaAAhMWeCB4AmTYYH5vSeghgYhpZsCIBNI23Iko8qfibwW0yJ9JpQ0gI30gQoIQADcuoACE70nEYos0+gBkWRii+ON5InSIYo5BhuTkhApACcSRXA3Zn136OWTDSwhEgSV5TFYx5nBnWrhCbSEAACH5BAUFABAALLIAZABaAF4AAAX+ICSOZGmeaAoBwjAIgSrPdG2fwFCURHz/wGBqhxIIj8gagCDzJZ9QkVHGjFpXgSzgVm1en4EBYTwWbGcAomz6FQbI8PFZ5Vy33fE8usa+38R5cHU4anR+QIF6djIFc4c0b4lwjoSLjzWRknIzAYU8NgBafpmalCidJwOmJiwFB68HPW1LmgR9MiwEOwUDg6eusMEEq0gCtUEAyTYGwc0HjVc5kr5tBM7OXVHSedRfAdfX3UgBxgQvxF/W4M0Dl+4iAMzrwZ7vdwDzzQbo9lD4+bD29XskD2C9gVfUAbyF8Mo3gAIb+hmw0EYWGBJtKLyWTQULFyDNZJwhoGBAhin+QKo8NxKXsQIFbPEr0WJlyJajbK6ciTNIGJ0gxfUUUhNor6EOjbpAGk2pKqZWitoUCvXHR5siq9IIFQBdqJVdteIaYCCB2QQGsrKCEIOn1gAIzspFS1Xsmrl4EdS1eyIA3r8H3PIlUfYv3o6D6Rg2LHgwgcV/USY2UQDy4ckzCls+ixhzicqbOXtW8Ti0Wcmj2Zo223iwZsudU4/wuzmwbBUCLOu93STuXwPdsuwVu+S1gaclQpUIy5srOmrDeUs/Ii566urTDZ3Kzp2Vc6vQ7b5JQALBMFCDmFcdQP5EAtSssrBdIfbgp+4iYpuAPzq6Aut2GcAFd61BkECBVfHQ11d27fyg4GAN3vAgXxOSAGBVFyLojjHM8CLDATcI+MUcCBKwgAMoptiAiCdUON8jjfmV4owpLtBZPDXYd8QqbgVwIo1AOnAjAplp6IcCQSaJEj4qRGSFkRAUkGSSCqCQA5ElIKDWk0f8OCWQEcYHyFEIzTTAl0mCOJSGBqAZ5AJMIYiAm0FeCKMyNCRAJ5B2IjXnnjP2OZSUgKII53QBFIoii9IhWaiLYp0JKKPTtUnnAoJWdYCbmOI3AgENTHlApuIZsECohh4A6W3kYGRPCAAh+QQEBQAAACyyAGQAWgBeAAAF/iAgjmRpnmgqBmygvnAsz2lAFDgu0Hzvv4OcsEBw/Y5ImWA4JCSf0FKAydxFr8glVejEQgMDgnhgjN22wrL3Fxa7CVbYGY1Tr3ntt9uOmtP5dzE2enoxQXQ4gT55hGJxNYgFA4o9jXqPKYdolJWWbpgpfkOgnC+enzOaOUUyAVoGcIECp6wzrmOAKAMHvL0HBqRJg5aTpQS+yAfFWMOEpQACycm5SM1jzwAG0sgFga4CAtRe0dvI4thRx+W+y+iB6uu8Xe7v8b3z9Gu79gfB+U8B+B049+9IAXv4CjKLZ4AgiRYKBZVraAucRYcFbSSrFcOiR3AROw4Y4A/Ft4/g/jCG7IHy48o1J1uWfOkjZkuazGRaxIlFJ0ieUWx6VAkUhtBwRXNeTCqIgLZfZJhCIYCgqtWqCaXyOHC1K4JuWntw9doVbFgZVMl6JapVLVmzZ1UIcEs2LowBdNfaVZE2r1W2SfH6/bs3xdzBVQurQPxVcSjEgKWOpQvX8YnJby3DKKA260PNK5zyMhD1RAuIoAWdRp1axerTrWu8Zh1bymzatVfcjmx3d27Tt6VOQZAgwQGOrV4zDWBAgfPnziur5v1MQALo2BUgoF40wPXs2BH8RgAevHTLAsqXnxn3gHrwBmK/B5+gdYD54O3jzy5///P6rZHnnwIHLBcGUnwNnahAOy8FtAADEEKIAIMlDCgeTwVEqGGECeRCgH/suXPAhiQyoEAuBeDnmUIGlFjiibqol0CI6ATgoovxmVTAd84lsGJEI95Y4jnfcEeJkC7+GJcASJZ4oWYENEmiAqllKKWGVIIW5ZURZqkZk1xCWGBqCoTJAIWKWXmll6AF8OCVSu4FZpNj1jYAnb+tkICLC8QJmgDNQaidn3miEwIAIfkEBQUAEAAssgBkAFoAXQAABf4gJI5kaZ5oKgJsq75wLM+oQIjEENB877+Bm0ng+hmPsGCKiGw6SQBhavesHqmqgbUqEAwEgeJLACOItz3vYM3GjmNn9EzNrsvIL7P8V+9/Y24oUns0dH5rgSdRQIRph3WJJ3iCjY6PiHeCcZUqhoeRKEokTHABXgSkaAGXa5soAKZgNAEFBra3BKBHAKyTjQK3wbYFukePvoQBwssFrkYAnsVWtcvCWnKwAWGcIsrVws3c3MDfwtLiTgPlwsjoaOrrt+3uVuTxBuf0z/cG4fp7BO7N+/cEALVvemY4I2jCIMKFULBsY/gC2kEDqCCOiJSPoraJClNopPhDV0eSPP6gTUGJRiVLcS5PnHwpwyRNKzFLjLwpI+cKnluyQZjJExaBozp2AoUBzASxpU0GlTgwEGqMayqIWh16AMYBpVulLtmqsGsMf2QZyfiaNgkNsEtPsm2rAoBZGGjpUopRVW+3GHP9psC6UnCeFFQN8zXgtBjcm0aRgtSp+Fnly/SEYn4rcvMrz6AraR7xGKaNAgUypqS8lBcCE4lTloZ590TezXbxhoYgFgXhywESyEAwm2bvwZ4Zz7gtGMDrGbUVO6cRXXF1FcwFF6BxHGU2iH1LJNAqegACBQvSJ3iKWMb2mwISpJ8/X0FCEwGeq0BAnpAA+gDOF1gJ8e3X3x7/BXOoYHZcoYAPZPIpqGBVFj2HQAHh/UOAhBImsFALxTWCAIcSHsgSACRK2F1bCaYIoHKVtejifDAqFsCMAL5XGYo4zrdiWwf0mJ6JLMno4nXNBTmjAkS+FNyMv2H2JIcKZNhcAegFeECTUPFSAAIIHJALNyEAACH5BAQFAAAALLMAZQBYAFwAAAX+ICCOZGmeaBoIBDEIaSzPdD0Pbd4Gdu//N52QBywabSyh8MhsnpRKonMaqEprAagQNm2uBmAwl5bV5gZdZiDMfmHN5/RR0GZfY/DWWO5b18N7MThwd3xYf3ZkcIGGh4hghShlSoyNZI9gPWtDfSuRTpiVM1U/AgWnpwSiR35/n3JZqLIFBHx0da9yBLOztbC3L7lppryzwpZ8xby+yM0iAcq8ztPQ0bLH02rW19nI1dsF3c2722jilt/R2OdGA9ar7FPEvPAlVqTxNmuoqusA91byOQN4TyA6ggUN8kGYUGEahgEdPoToTyIZiBZhMcyoESBHQxE/ahIgoKLIGQT+DqhUacDcSSMCDKyceaCAyZfPaOo0gPNHAZ06mfWcIQAo0Jsifxql6XJojKU6wzmVAZWm1Kkpqs68ivWEUq1Nu5YoqvUA0qRahYo1EaAqz7UxyAK1CRclzZZ19ZHMFTLvKI9+/wIOLGkj4RMYD7M1rNgewcaIHw8lWRJI35PQEmjeTBcyAAGbQ2+uJ3aA6NMJSE8NgBr1WY4HWp/mWpe17NOvC+fuQeD2adU0BhxY0KC4AgO7ZxTwLVotENDFo0dnQFvOcuabnfsYwEC6d+PJUfTGrjmsDwHdv39X0Ag0+QSvAxBXr/5Ao9jY7RspQL//MWj41VSPadgBh8J8/X3GV10JBSzg4IMOmhXDdbdph0SC9C2gQgIQdriAAuaRYMBtC/KGIX2fcOihh/CMd1qIPvB34neRNLiihwncUIABBhRQWRMyzihdIfLduGKJzQwgpHQammCjkR2yx04A6S2ZowkqQtlheD8ksGRx2imgpYcwJvllkyaMSWY+BywJo5hqPmggH16eiORwcTrIpWV10seAhSIQkOcCVxpEgALfMSChDHCqCeg5WbBEwDoDxKkfYU8aCV9jghq5aGNt4fhoYJvoMU0IACH5BAQFAAAALLMAZQBYAFwAAAX+ICCOZGmeaAoEghAEaizPdG0GRK4Ldu//KYFuSBgAj0gajjjkJZ/QkZA5jFpFL1iPStRekaxWyzvjDslfn3jtqpl16HQtzB7TBm9CXD6rr/cnS1xOfDZ0foQyU1SFPod+Nos6A4CNKohiPSw5A4mWNZhtn1gDBaZFco9royICpq+vnlCqsoWusLiVYGO6XwG4wASso6XAuLXDV8bByY3LuMLNfM+w0dJpBNSmRtdpt9S93UDZz9biV7/Leuep5NXhJFnsSlOiSlny86n4+Ppp/P38WQEYUOAsgvkMJkH4QmEUhg4fAow4sCDFi9caYnwixIBHA+s2/iDwsaQBbiL+axQwadJcShUkWZpE9nJEAJksC9S8hJMlvI0xe36kWTOoUANEXxoVmjSlgKMff2K8CVXnzhRLZTatubKny6snsnr8CvZEx48hy95Ty7at27dw48qdK04jXRKuEOhFUGDr1Zt7A/OVKjLAAcGCDRDGeBhxYrgEHDv2y1gyYgNuA1h2vDgFjgMKFCRA+knAZsSdTxRYwKC1awYKUMoxfTpw6ngJXutubXV2bdtgFOwejpnPb70HkhwYzly2suNkQTFnrkAJOQJNNf++LWL59OFJBYAOTV5B9BEDalNGwfr77uIoCpSfrwCBrvSW1wdyPzxBCvn0zWefCr8gVgB3UvCPt1t1ZgUYIHye1YMgXgrqxqAJ4zk434RHVPhaciYIoOGD3QjnIQO9kQDgiPN1Q8CJDOxhAIv0cQiEiQpCSEKGNIZm4w8DVKgAIDP2SN45L7o3JFZGhubfOQO0158uATSpQIrd/IJjawmcR0KRPf44Cx72yFBlj17WJCKLWLYVQAIapllWZPMdeJdNLIgZQwgAIfkEBQUAEAAsrgBlAF0AXAAABf4gJI5kaZ5oagJBC6hwLM90LAw4HtR878+BnHCw+xmPPcBwWEQ6n6fgMieAWk+AbO82zb2u4GbgO+sKwdfmj2tGu0ljoBlHfv/UP6UZb+fVTXwpUktVfUZ/JYGChIiGUIopLAKTkI5AljEANwQERI6SgJgQAZylpZVPoCOoaaauBI1oLRCxbgCvrgOiuxACuK6svFADv6aFwobFxsiOyqXHzG/EztDRss4E1obTv9XaYEq/A7Xfqb6uAuQwWerltAGU7ZEl8u5HjfX2+vsr/Ji1+fxlEkiwoMGDCBNa0qLQiSYCBQoQSNdwTQETBYJVJOGN48ZLKjJ+XJcNhq6Rgv5kFAiIsGMUlChchoJpQmYimjNhrEQRpJNGd7dinIRjYMGDo0cXXEyISiSJAkaRSn2wYKhBm9UMTN16tORBAUuf4inAtazVgg8jTvwToGzZBT/LMTSRwG3ZsDDb2uW6ACeEAXvLxhWoNfDWsx8PGN7qFWXhxUgbjyQAWepgf3or9+U3d0ZUyAb0BSlgwECBcWUqP7j8RskBEwcoxkAAGa81ALZLwIoRQIHhBPYkn0Achbbd3NECvIZxQOOAz1IT2BQmHEV1QQQMHDBAgHUfAMtjGGA5gwVE054MxSUvNMGC9/AXGPAOsvwVAEXj61cw/V545uyhgJ9+BL7XnxHInexw3Q8EFFigAvTBcOAoVgTgoIOhySDJAAKwglsMO0HR4IUFohJAAQmkqOJ8MASQIQrjXeEeiQQuOAoCKuaY4m6CvFiCU1AAQGOBCfai45EJhCjgAD4aIFuFQxLoIxw4IqkjcfS04IIbFkYZ35QjoGjlkQGCoYCX8FUHwJhIYsnLAWgaeIIAbB4JJjLPoZlAIwTUqeMBZcqIJpZ9+qkiAoFCGWWMwxmq4n/aCDAkoII4mmKRyAQwI5HkAFCloROK4tqZ7yUZzACOUuoPC2Pkg5+hEQqkXJ2hVoSblc35pcKJB6SIgAGo6boOO5iEAAAh+QQEBQAAACyuAGUAXQBbAAAF/iAgjmRpnmiqrmzrvvAZCLQQxHius3Uv7MAgbuarCY9IVLF3SzqPxCXtSQ1YrbGolOq8emHaJRfpLb/CvuYYWDa/pNN1sO12SdVyHf0LK+LzOXtYgYOAc3uGJFY0f2uIiSICBJOUP4BtkCIDlJwElpmZkp2cjaCOo6OmiQGonaWqT6Ktk6+wSbKztbZQs5S6u0K9BAPAcqy5xXK4pMl5x5QDv81kV9PW19jZ2tvc3d7f4OHi4+TlQjMDAzbmWQQF7/DE7C0B8PbvBPMs9/z5+kr8+EkrF7DfPxP1Ct47WCKhQngMFT20F5HERHwqqo0TcLGUgAMLGIhccODTt4n+/hQpEMmyZYKByRwGNCEgZMubDBaY5MaKnzwSNXEKXQAzpoB060zYFIpTQUQCTKP+1LcyqlAEBwNYjXpwwFamO8tB/YozLDmvZG+aHac1bUuGS9MmYFjArciUzQJsGlY0QNytC6zVO0C4cAGYY8lOBfaxsGPCa03U/YoXWIDHmA8g/ttSp7UCmR8XOFPgr4LD1hqHdlxUhF6+2Qisflz5iV51rYGAnm2YSz0FC4IHRxA5yW7eB0bHSiC8eXADeY7zrh1EAHDnzhHkhjEAOeQu17E7P+DIO3QnCMSrX7yiEIvuvIvjqKlePFYeBRAk2H+AuuTZ/u1QWn3i6VLPfggipkgcC7Jlxp4Q6RGIXWQBGJDghfvJB0BPhBVAwHYtMCehcw+KUACGGGrXjIgjCleiACiiqFwxILUo3FoWxoghiFQQYGNwTqGgI4olghJAeCPO2NCQGAYIio8tKvBKAExeqCQwNUpYJJVVIuikKVmKp8CX+nWZgIZPIimciiuc2OV917BywH4IFIDmhmZ+KVaV5FU0AgFD9unnCAKUeaGeB3EUD48whAAAIfkEBQUAEAAsrgBmAFwAWgAABf4gJI5kaZ5oWgKB2KpwLM+0+pJ3re88n/fAoHBILKIANqNyhBQ1i7/l8jmMSpVUWPYq3fq4YJU3ZQ2Dx2Qc2ixb8wBwtlyODJS7c9uAJLgb3WZlfnlcAXsnh4RzAIknAoqQKAOAkUKDEJSVQJeZmm8wk55gj2miXIySnaY7hiaNq1cAAocDAqqwPXBxuLy9vr/AwcLDxMXGx8jJyssxLHYBt8uyBCQEnMyY1I7YMa8lpNwn1+GuMeDkTtoq3uGU6ujZ3fAk7N8pusqX4gQHCQoJBkIdqyfiHKYCCxIqVEggWiUA7/iUCIBgocWEBxxGmlbtB4CKFy9mPObMzhYDIf5TFoAXIKVLfcQQugwZUVqCmSERkGuJM6RGXDx7WvwJK6hQhURXAVBwVGECdAeaJlxJToDUBTDzsBDQJ9PHpiNhMSpgoKyBArZkGJ2ZICubAGTNyi1AySpOBW7NAIgrdy4lii4P5DVDoK/hgDNkHWCaUIGBtEAPH1ZVMikXAZIND6bhbBebwpnlGiQiy4A/BQoQFNisA3TosqMtLUZNG3WCmkswv4athGLt36jpggmwuyzrEwBmA/9NcMje3biBEFi+vG0NzzGIvz5uAsBp6r+pahHA15oM3ZK5mxAAfjmCNYoRyJ+vGhBcw6uXFGi/HA1E+gAiYAAnARBg4ADQSIixH3+/3SFAgAEKZ8qCDNImyAEQBthcHtNVaNsYA2QYoAGWVeEhaiSiUICIAapHmnIMxoYJiwHKqIgA37UXVnc0AmijIh22Z90RGPYo349A5vgbAoOsaCSTvAgAo23iqfCgkVWKVWABXCKYmAFGuthLAEWKGF04ZJo5T3cEjIgkOrIMUEuCYYQAACH5BAQFAAAALK4AZgBcAFoAAAX+ICCOZGmeaGoGbKC+cCzPcCDct0vvfB/bOJzORyzugEGccclUJZPDppT5DEanzRaLVxVip9rWsSv4SsPiXfdqJqLTM6S3zXxvecA7fWln7/8odoCBfm1ogyU2A4sDZYhwiAABjJQDkZcklZSOmIgCmpSFnV+gm6ODpYycp3Spi6s/BAcHBgSirCKfqbBOCQ6/wA4Jt6eTqcQjB8HLvwW4KLqavCi+zMwHzyfRqjLK1tbO2YlWMgLf3wvI4jDV59frRQHu6PBEA/Pf6vUmBfjWBPt49PO3DGBAGgQILrN0cIY5hcD0NRSxAKIDBRNpGLAYLuOPigQxepxxj+C0kSn+Bs4ziHISgZcETgoAaW3ByYMBYOq0hYJAu18JWLbcufOWEpQliBJFqkZpUaYkneq8CbXEAKkwqVYdcRVrzK0wBHjlCfbF2EAEChgoQJZpTqlsAhxYQLfuggMSxb0lyoaAAruAFTBE6jIrmwKAE9MdXLbETMWK83pMAFkxgsZWK0OW3HCu5sQdMVP+DBgbZhGjSdc1fTq16runRXh+vSB0YwK06Wpl+vd1gomScb/ejWlSgeMFBkicrdl2tgHIoyefwVyx82dppUdnbLY34ATcswnQrj2vrAToD4QXR1670NiS2muHT2K8/OicZUCfdaAA8SX23Xdcfi8MgN6BB+LK9UcAAiJHYEoIRojef0Q0eBwWPkko4YMxQCcghTEIoKGGrLXRIBYGjKjhf4W19QKD8nF4gooaXpdIAfzxZ8B/Hm73hYg0RliiNjkWecB7TuTQhoFBIjhkIkYaud4oQDaZngo4RlmkjFlYeaABKcilZZFInoKAl+ClMMCYRq6ToZWiZMkmf1w2cYCVZY4g55wK6tWkjXryyV89cqkIKFeC0hIQAWc6+V+iU2ajiAB5rTknmPSRYMCcIEK1Z5GdVjVejgZEmukIkNARAgAh+QQEBQAAACyuAGYAXABaAAAF/iAgjmRpnmiqrmzrvrAZzHRs3/hK70Hu/zEeD0gsnoQ7o9KIrC2fvuYMSr1Je9XsS6rttpDesM4pLpvP6DQ6IGgLsOqwey6Ie+lzuB3Kxrv3VX1+b4BQg256hUWHbYlfAwQDjoqCfpMoAQUKDJycCQWKJYwvAgudp5wKdaEAlXkuBKiynKuhroQtA7O7tbZkLZu7sgmsObHCswPFNwnIswfLNs6zC9EwAtOzl9Ym2Nmo29wkAd/g4i3lnQrnLQjpDAbsLLrpvfIozd/Q9zrBzuv8WAQwhUxBuGJsBgzAJeOAMAMHWUEiQJGivXEFEpha8CmixIogIwW8FjLkxZFH/kqWRClQZUiPAQW4BAmTX4CZFWveu4mTAEsWMmeeFJGQIb+JJZWdIJBAgVOnCJQeLXlSQNOnWBUg0Ako4cJJArKKVZCAq7gAV8diRfDzhCa1Yn22HYEWrlhic0UMsDt2aMC3fLHKnQs4sNPBbQsbRvyTgGGsfm0+fmo2moHJoPISfVy2mICJC2E4Dhx5TYHTqAsQqDkabukzmVLLrhngsliIxWTrzryFAGpJywbslv165HDZjDUflx0IkuriRZan5lMAgfXrUb1IR/1EAPbvCOJpES4dOinw4MUH2l5ZxQH04KVSEbDcvIsB8NHD6KOTvG77LhiQH3jF0XfAgQcYj7CaCzeltuATA4KXnAkFIGhhgjpNQUUAEX7HGwoVXmghbl11iN2HJgwgoogoxmHidROOEOKKFrb3RHUvbhMAjSLGCNuLLZIgAI8XBpkGjhGGoyKRCBp5ZISlDcnkgU4+Cd9rO055gHyFZILdAT5SqKWNXWi4nwFMhvnTkjRWOZcAaPaomQoBCIemgmTOCUUIACH5BAUFABAALK4AZwBcAFgAAAX+ICSOZGmeaFoCJKu+cCzPqUvfeI7bq+7/OR5wSCwaj8ik8igcNZdQ3TNKlU2r2BVgm+16v+Cw+AQImAPXsTJgYqur7vc3LRfT67o4Pqsnls13ez1WAgcKC4gKBgKCMX0qAQiIk5QGgXMolwGHlJ0LCY9yQmhWCZ6nCJeYEKoQBqewBY0+AbC2obMwBbawBLk4kryeB780AMKnCa25x8idCsuzzc6TysUzwdQLltcyBNqIA90ytdrQ497a4ugxAAfO3Ozt77wF0WplAgKkZAOcnQkE3BsjYIDBgyoADDBwAMGBAgLliSh4sCIjiTQCVNw4ABdGEwo5WvzYTuTGgdf+NJo8iLJYyJUDWv56afIiyRcqTXr8w+UjRY42SwgokGAEggI7f/1ESEYWCgIyweTb98Tdi3g3QRqI4TSr0BlJ5VmVsdXrCI8nrJmFENTRWgjrZrS9ORfnW7Rk3gJAMONAVDy+ZNS9OfaF31kBKEYEW1QFArxS446ICZYvigOQ5wQ2AXUGAAKWjVJuJNlEaRj5BlDNBTkzxtMmBnvdnAJ2kamLsdBGYRuIwrIjkGLpPTkJgK6mq8g+iwQAcN5UPqvofGQ3Cte0rIsggJ2cDOSoy7QKYJ17Eu2ZHC00wJ5A7hcABAR2/9fE8xfLRaxnz98AdSv1kUGMYC/s1x9/9uBn4ZxcKghw4IMGEPcFeJBMB+GDAQKR3wiHpXDhgxtmUZgKEn54oIRebIjVCQ6ayB96YhBnAF4BuMgfil8UckKC8NnIXohzDMWQf9gRYCOPzAzkIpAY1fghjjcFUACETBKmEQFYvqdECAAh+QQEBQAAACyvAGYAWgBZAAAF/iAgjmRpigFhHAYRnHAsz3Q9E0qj783x2sCgEIjgGRsMQjDAbA6fwsRxWgA2r9Ds7DDtDmpXrHZcGnS7C3CYSW6LpOepcrZmu8eBeDdBq//uWWZ6R2l9YYBjBYNTf3R2iFmKi0aNkJYkBJNGl5wlApo7hZ2jC6ANVaMolW6SmquQa4gBpZMHqX6In4sKt36vWpl6Cr+AvsRZAnBUqQDGx8AHtA0KBs/FvqOPzCPGQSoJCQgGX9tD3TU4C+rrCwkC5UK4NQbs9eqo8DaxNQX2/nP5LAnwR9BawCcJCPqzdRDQQIX+DDa00Q+iPYATx0SzWA9fRi0bOa7z+BEKPZEj/ksmQrkOo0pzLNVJfAkjJEcDNLUEUCByWE5gIsn9zEIAogKhQ2VoKxHA5rpqSZUKGEB1wDsYKQpodRFVadWvA2Z2hQH269WxTwKU/SoW7Yipa6medQskbtW5dGvAjYs3Lx27Yf0GsdtXsNe1rwQUOMC4QGG3AfZaPSHgALjL4A48hvyLAObP4DYbFpEMNOi2XQMgMA2a4WgTnlmDdvkagGXZn3HWJoEbNILd3HqDBj5COObfxAGsNp7ANfACzBPQfh2AOQLUUWP3RppTDMXe00umIECe/Ezts5MKKM+egGimBJY35zp0fXv2qLHDu38/OXz++Pn3FoDsvYdHPvYRvugeLCowdoBj2yRIoH4xDODghSxQaIWC5CFCAIYgamjDAAoauASIIOo2ioKIrIAihuEhQmJ73JHR1IsYqtgHAVuZSEJkcol4woc4YmhNVlolCeFLRBbp4DMBKCnlkiU16aQPM0w5pZBtVHYlYzMopqWSMcJz45UkwTamlFySYSWOz6zJ5ksu4lhmM3Iq6eMtdYKY5gl5JtmmG2+y4COPgapX3p545lkjcYiuOShNkW4poAliknlpDJEJwCgUIQAAIfkEBAUAAAAsrwBmAFoAWQAABf4gII5kaY7BoAZn675wLMdBoTA4nhBz7/+/wSJH1LGAyCSwMCwWFQKldNoaOK8MxZHKld6wTkN3jCSAr4steQ37nosFtvz1vh7m+JKg7lTk/wB7fER+gHgBg0QJhnlNiWKMcweJOAORc4KDhX8BnZ5sk4OWnJ6lawFuZ5B5pa1sAQlvcYCtrmxMVwqjtLWfcgEEBwoKCQZRkb2+l4zJnT7ABdEDassyyT0BBsPbwwXU1S69PQMJ3OYJx+A0yjED5u/D6epjsPDvi/NkNvbvPPld/ODh+zdFQEB48giWOfhul8KFDLk5fPiDQERuCSn2MHhx2DeNM8pdvAMSYsSJJf57IIhIMiWQegERfHRpTZi9AzNpziCwkhsClDpRCBgqICeAFAOKBnVBtGnGpRudEjUKtUUAqU2r/riKdShVrSS6TgU7g2vXr2SPin2a9oRYtG0DYbU6gIBdtlDNKjUBDIHfvwj8xQ13ALBhnINPBChs+DBcqAYaS56VWIQAyZgf6+SJuTHQtJE7G6acmLHov6sShz7tl/TgAqz/Ck58OTYCvGRNi05dufZpzUt9Y8Y976pdAkl9CNCNGjiz49CnKS9w4ICBAsSLQ9/+uXLd7dCzpwUPvjJf8tud6wSG/rh6GgSiFZBuiH372V1qGNjP3wB+PN+h110S2fRnoGtz2JhH3nsuGOigf4YIgB6DVTzoIIXYcIfhCRY6+N8LAqiw1zNe/dKhgzMIIJ98A1YjwIkGyhDfiitu2MWLMPLXDo00fghOgTkiWEINPNIoniEF5GgMDCoWuaKP1QDZoZAlzOikfBQRAGN2Vl5JpTpaWihel1eCpKKBBMDVpJdQ5sOVc15GY6NGaxbZYlx1rnjnYCk8eWRl7MwRAgAh+QQFBQAQACyvAGEAWgBeAAAF/iAkjmRpnmhaCgQhBGosz3R9Csjy7I+jELagcJgyOHjIXQJGbDpliaT0sRA8r1hRdCp1MLNYQCAAKM8IXG4C/AQIDoqFPFH4pnTpqZU9DCTkgIEFZicDeVwHfEJWgY1yB4QlBodTC4o2AY6aCwaRIwqUU3aXKn+bjnsleKFIo6Q3p5oJnhCrrDuuryUHsZqpIwe3PJa6KnG9jYMlaMIPCMUpmciNnSUBR8JA0CfS04DVksLE2yYA3oLctocD5Cim59omAupc4O0lBedyuSLzeQ7K7pnoNs0eNyNTltAQM4LWFQLeFPCzRsBAggQHCEwsx5ENAAPTfpFiCO1jLAUi/keicHhFwLtABjYK5OOmooECA2TO3KmLZAmWKwMIGEqG5zYABBBcXHpAAFCjInwGCXBgqdWLBqGeKPN0oNKrVxF01WrjI9izAck+cXn2bEq1Qiy2BZsVbtm5bcfaReEHL1ide2/4/RtYSN/BS/UWJgEA8VKxi4PIRZw28ozDgwFbJkEAcbzNCye3rQx6BoACcwkoLm2twNcECDSy5jamaIoyZFYHdqV5tjXfYYCXFH6ZeE/jMdwgb9J7+cDnW4USdV7b9k8BBvA19306hWrn5Vyr+A5+BDsZb40DSCSjrvH03MpD+BzjPHj6Kuw7x59C/3L48shH1QyQyDffDP455/dRDO4tNyAKMS0mxlDT1RCAeCRkpFs7bgzg4YdOYUJAASTmFFmHH6YIoIMptmiigSMI4KKKMEY1Y4sbggbAjSnmaJqMHlpXzI48DrDiEDuaUAc5QN64nQxIpXBkGEX6OF4MU14RgJN8AGblIip+6d0MWYpQXY5iCAnGgjLwx00LcLqwl2ZurhBnnAOI6RENdY4QwJ13ljlkAQgmByigT5KSYHwq/HlonIIeF0Of/Tx6p10bkXaDpXHuld6S6HHawqJQuUGoCC4o5iinkZKDW44DiFqjmazOSuuhic5WE5wv2LqVnjSEAAAh+QQEBQAAACyvAGEAWgBdAAAF/iAgjmRpnmhqBoHqvnAsqwTC3IxStHPv/6jBAke8FYDIZKxQbDISPKV0SnA6E9NsUmC1HrXKAOGQSCAKAtiha42CfQTFYk5fINwrtpXw/h3qgAsKAylVek1YfTN/gYGEJ0yHTYoyBI2NCngia5JFlDABcpeBXyUGnZ6fLpajgQonhqg5qi6MrYBpJQGyRrQqCbeOJwq8ub4nwMF1jyWxkonHJwjKdcYlnIcLmtEiBdR02yIJkszcJQLfdi42XdrmKdPU5UHjRQs77ymhygcyAQMFChCwli+IqFFQCn4ScDCQgXAKswQo0NDOvIgLBwwQABGjx4/6OoKUWKNMggME/kSO/DEAgcmXCAiuTELgpc0yfGYqqXnzpkyd/lz2tNkP6A+eQ21eNPrCQNKbpZjGeHqzqNSpVF9avfpCaNaTXJd8LRM1bAoBYxP8NGuCTFYDbGGgzaoyLoC5Q2PajRHALdG6e0cIKHCgMJrAI1iwQNxDsWPG/hwrhvxCsmTKKiw/xoxC82TOJzwvBr1CNOnQmk+jvuwC8NXNQQgbXkpagIHCuA27jisgt+/Caxn3/e0b7ukxxH3TRpz8t3HOw5vn3i21t/TpoK1fL0ydafTtp2Vfzwn6e/PuV5E3J398/evPMwb7xuddgP373f9tRM8twP3/HKlGAoAACiiCfwTiqGdgggUKyOB/n7AQoDkP2sdfawQEpOFyfSDIoCKDaSgifb48eOFZI6Z4YnwJKpJiiuzR4uGEb4T4ooiqZXijiMGZIAABQA60Yh867hhQj4kFqWRKMxVpJJIiLLnkkFoAZGRAKv0opZIrTXRljChsOeVKTr4IpRhiBgmlOWWKCGZoaaqpU5uHgRInkGu+84+au93JpGpaiskhZAOkSaVRgSp5aH2FbkRLCAAh+QQEBQAAACywAGEAWABdAAAF/iAgjmRpnmiqrmzrvm9QHImCGAKs7zwaHIugMJjI9Y7IlUAxbAYLyagUEGA6nYSplpe4eo3bXoBQKA8CLYLXmwjzBAeFfJ6ArrrrK9r9Isz/cwh7JwF5XnZ8LH6AjAmDJQKGVweJLEuMmJQnA5JOCJUrcZiYYCScnUOfoD6jowaEqEOIqyWLrYBtJ1axpbQjBbeYjyMGsQsKvifAwYDDIoWxWckly8xzKWqdqtMkl9Y2KgWSjtwmNd+zJ35rBs7ltszuJsBN7eUpCNYDMAECAvL3RgTIdytdQC0BDIxKIO1gIgEGztkoANDhlgAVLWrcyDGggAIGQhLo1TFKQgQo/lPeyFjShQCVMBEcYNlSxY+YMGfW7GEAZ8yGO2P4xEkz6AgCQ2OSNJqiQFKYQJmq6Pk0ZVSpKJxWRXkVq4kBW1Eu9UpiYFiyirZ2RVuC6tBXbFec9GkvbtqfdmMIIMB3bN6//DAKBtxCsOGidg8bJmxT8WDGhBxjhBxZMmUTkhEndnzZx+HORwIMKFPgDGhqIVOLPE0FpGrVBhm7fq16bV6ItGlrZjo7d2rbcX3nppxQ+OvLxo9T7i089u3kIf3GLZ4cNG7hu7Fe1411Mr8Br/dJ9Uc+++Px5NOzFpG+vfS//dyTZx1f/r/T9eVnl5rf/X4lZJjxXw/2+RPGGKQlgyieL/2Vd1GACZK2IC0NDojCaBFGaOEOix2YYYbAxfXRhxrqJcAA95U0IomkFXXiADDGuKEWK7JIUQsvxqhjRzLYWEZhOgaJYkc+loajkEF2VOOHLiAZ5IxTYPhhUU7qCOUUe0VIAGJVylhTervl6CR+Xb6Xl2hImgmfkGoSFt+VKYQAACH5BAUFABAALLAAYgBYAFwAAAX+ICSOZGmeaCoCAlEYxRCodG3f+AgMyVkAuaBwWAIYVIkZcclMAQ41hbJJbRJuCWCVCggIBoKAlja1/bZLAAGRaLcPglohl0UPAwe3vn1GARRBcXY5AWx7e30mYzhXgzdPh5GNJmU3k440BJGblSKdNZeYfoabewMnizeCoikBpZFHJ1CENQGfTAKvhwepIqs2sScBBQkOxg4IoUs8unoIvRBPOLcFx9bGC6dNuc1us8KAoCgI1+UO30QA3W5zreEpBNDk5uXoQwbrCb/C9iP60NXomdsXaB0vGwIMIBCR4MAAaCIWCDS3wEozBLf8ANiYaSI9bemIlUJAcMs8j9f+gqUbQErPgYxUJKK81oPLgAIHEBwoIADilpnlKqLhyIoE0GtCi4qSeRSZUlYHmhprh6oFAQI9n+YQINXBpx0Hwop16FNrCaYz+0EYNrZtIrMpuB7tZKSt3bdwTxAACpLEALuAS+b16zEbKgOA7RooO7gQPZUl8CS2C3OwJwJ5GspQ8XdyW8GWl3n+HNpO59FhQZcWIhn1wdVV6qKmCpuKANeVa+fA6VmZ7jSYEz/8bScA4rEFchMX0kWAc8bLo4deBF16jl7VrdfIrp25xu5pvoMfApH7+CLnB2FPH14H+6JdBsgX816IgAL48/Os/8iFfv198YfCTf/9pxp/wxTeWKB54N2noIECouDfg/kFGGE0FP7nW4QZ6rehgAR2eOB7CXaoXHpqdGjhhSt0yOB5KRYYD4wMsjDhZuPZ4gl5ROVICYtkoHBifT4NCSQJLwKZJHhlLalCAPIRAIaTdwip3gBXZXmVkU1AQ99QWGqp5YhDlfElGlaJqeVgWlDph5pqrnhhAHCqyV1zYUhHZ51aZtdJVr/tyedV1d1CplmDXiUneq0QFyafZMJ06FOCwrloCQe6iUalWg6HEA2abvroVYB+qkKoxdly5g2SHqnIk65OE2tVJOQ5qx86KhUCACH5BAQFAAAALLAAYgBXAFwAAAX+ICCOZGmeaEoKwyAEaizPdF0WSq4fgu3/QJNAR9QVgshkbFBsKg7KqHTobBKkWEAAZkNUnb1sMFBAmBGHwYz6LRrEwPJ5jgincO0m3Cenz+0nXnlFXHsyfX5zhSYJg0WAhigBiYlHKIKOOZCRJoiUZ4skBpk6oZwln4lXJ0ykCKcpk6l0liekCmopAgWNCggFpkCys2e1JgSZrygCCQzOz84IwT7Ec6soo4PTBNDdz5s+BtVm4KJtCeUD3usM5TQD48pLvUXGJQHs6wrTNAfVuTMGFDhwoAABfgAO5Fv3BokAYg334Fu4TsnDTxH3cKPoDeAYT2Y87lHIsZu9MQP+CBh0lwVByW4ZYYlx+fJZTJlYDNR8dhJnFHU728USQNSnj6AKJA0kSPCg0RkFdl4jMYCpVYIsn4pQ8FIe1atgsz4NwJXiPhMBwIK9qfVeWXYJghFQC1Zk22NvnyWwO8IA3as975YQoLLAAIRp/14VnCWxYqYIGddw/BiKZClLHwe+7KNqZbGcZQTwq3hzaBsCHkc+TUMAacCrWdcQyLQAaNk/YuPezbu379/AgwsfTry48ePItQYgeht5gMIFoh9Oriu69eu6hZO5zh0Y9RLQu0efSn27eOzfRew6f725b4HsrbvvvT6+7fRa7EfP/ls/eer1nccfcPCJN19wAcqgh98yKbmg3RYDFgfhhAueMCGFFY5w4YUZirAhhhl+CGGHWogY4QzLEXViEiZKlBIBMBJwoBIiwvFcjDjydcqGNuLoIwE6IkfYjziuuBuRPh44omxI4ugec8wZqVGTMDYHJZRSivFik7ddeeVpQzZJQ4peqnjalj/qRmaZM0aCZozNrVmmbCzEON1kbDLXYZ4vdCgnlCQCwGagHmJJqFYhAAA7';
	            var searchStatus = this.props.searchStatus;
	
	
	            var iconCheckStyle = {
	                height: 150,
	                paddingTop: 100,
	                display: 'block',
	                marginLeft: 'auto',
	                marginRight: 'auto'
	
	            };
	
	            if (searchStatus == 'searching') {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'searchResultMapOnly' },
	                    _react2.default.createElement(_iconComponent2.default, {
	                        src: iconLoading,
	                        style: iconCheckStyle
	                    })
	                );
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'searchResultMapOnly' },
	                _react2.default.createElement(_mapFinderResultMapComponent2.default, {
	                    markers: this.props.resultData,
	                    searchStatus: this.props.searchStatus
	                })
	            );
	        }
	    }, {
	        key: 'renderFooter',
	        value: function renderFooter() {
	            var _this4 = this;
	
	            var onClearFilter = function onClearFilter() {
	                return _this4.onClearFilter();
	            };
	            var onSearchAgain = function onSearchAgain() {
	                return _this4.onSearchAgain();
	            };
	
	            if (this.props.resultData === null || this.props.resultData.length > 0) {
	                return null;
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'footerWrapper' },
	                    _react2.default.createElement(_mapFinderFooterComponent2.default, {
	                        onClearFilter: onClearFilter,
	                        onSearchAgain: onSearchAgain
	                    })
	                );
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var resultData = this.props.resultData;
	
	            var numberOfResult = 0;
	            var resultStatusText = '';
	
	            if (resultData) {
	                numberOfResult = resultData.length;
	                if (resultData.length >= 2) {
	                    resultStatusText = resultData.length + ' results found';
	                } else {
	                    resultStatusText = resultData.length + ' result found';
	                }
	            }
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'searchResultContainer' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'searchResultElementWrapper' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'searchTextWrapper' },
	                        _react2.default.createElement(_textComponent2.default, {
	                            text: resultStatusText,
	                            style: { fontSize: 12, paddingLeft: 8, color: 'rgba(81,81,81,1)', fontFamily: 'Roboto', fontWeight: '600' }
	                        })
	                    ),
	                    this.renderSliderButton()
	                ),
	                this.renderResultContent(),
	                this.renderFooter(),
	                _react2.default.createElement(
	                    'style',
	                    null,
	                    css
	                )
	            );
	        }
	    }]);
	
	    return SearchResultComponent;
	}(_react.Component);
	
	exports.default = SearchResultComponent;
	
	SearchResultComponent.propTypes = {
	    onSearchClick: _propTypes2.default.func,
	    onClearFilter: _propTypes2.default.func,
	    onSearchAgain: _propTypes2.default.func,
	    resultData: _propTypes2.default.array
	
	};
	
	var css = '\n     \n    .searchResultContainer {\n        width:calc(100% - 8px);\n        margin: 16px 4px 0 4px;\n        background-color: white;\n        border-radius: 4px;\n        -webkit-box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);\n        -moz-box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);\n        box-shadow: 0px 5px 12px 0px rgba(218,227,233,0.5);\n        \n        \n       \n \n    }\n    .searchResultElementWrapper{\n        height:34px;\n        \n        border-bottom-width : 1px;\n        border-bottom-style : solid;\n        border-bottom-color : rgba(234,234,234,1);\n     }\n     .searchTextWrapper {\n        line-height: 34px;\n        float:left;\n     }\n     .sliderButton {\n        border-radius: 40px;\n        background: rgb(244,247,250);\n        width:134px;\n        height:25px;\n        float:right;\n        margin:4px 5px 0 0;\n        \n     }\n     \n     \n    .switch-button-blue{\n        border-radius: 40px;\n        \n        font-family:Roboto;\n        font-weight:500;\n       \n        font-size: 12px;\n        text-align: center;\n        line-height: 25px;\n        float: left;\n        width: 46px;\n        height:25px;\n        background: rgb(0,154,222);\n        color: #ffffff ;\n  }\n\n    .switch-button-gray{\n        border-radius: 40px;\n        font-family:Roboto;\n        font-weight:500;\n        font-size: 12px;\n        text-align: center;\n        line-height: 25px;\n        float: left;\n        width: 44px;\n        height:25px;\n        background: rgb(244,247,250);\n        color: rgb(173,173,176);\n  }.\n  .pagingWrapper {\n        width:100%;\n        font-family:Roboto;\n        \n    }\n    \n  .searchResultContentWrapper{\n  \n  }\n    .searchResultList{\n       \n        \n    }\n    .searchResultMap{\n        width:100%;\n        height:300px;\n    }\n    .searchResultMapOnly{\n        width:100%;\n        height:400px;\n    }\n    .footerWrapper{\n        width:100%;\n        \n    }\n    @media all and (orientation:landscape) { \n       \n       \n       \n       \n      \n     }\n     \n     @media screen and (min-aspect-ratio: 13/9) { \n     .searchResultContainer {\n            width:66%;\n            float:right;\n            margin-top:-36px;\n            \n       }\n       .searchResultContentWrapper{\n           width:100%;\n      \n        }\n     \n     \n     }\n     \n    \n  \n  \n\n\n  \n    \n   \n';

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _mapFinderResultListItem = __webpack_require__(25);
	
	var _mapFinderResultListItem2 = _interopRequireDefault(_mapFinderResultListItem);
	
	var _tableComponent = __webpack_require__(26);
	
	var _tableComponent2 = _interopRequireDefault(_tableComponent);
	
	var _iconComponent = __webpack_require__(17);
	
	var _iconComponent2 = _interopRequireDefault(_iconComponent);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	var _pagingComponent = __webpack_require__(27);
	
	var _pagingComponent2 = _interopRequireDefault(_pagingComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MapFinderResultListComponent = function (_Component) {
	    _inherits(MapFinderResultListComponent, _Component);
	
	    function MapFinderResultListComponent(props) {
	        _classCallCheck(this, MapFinderResultListComponent);
	
	        var _this = _possibleConstructorReturn(this, (MapFinderResultListComponent.__proto__ || Object.getPrototypeOf(MapFinderResultListComponent)).call(this, props));
	
	        _this.state = {
	            isSearching: false,
	            totalItem: 0,
	            currentPage: 1,
	            pagingList: [10],
	            itemPerPage: 10,
	            defaultItemPerPage: 10
	
	        };
	        return _this;
	    }
	
	    /**
	     * @desc This is callback function when click on item
	     * @param {object} event - Event of element
	     */
	
	
	    _createClass(MapFinderResultListComponent, [{
	        key: 'onClick',
	        value: function onClick(event) {
	            event.stopPropagation();
	            event.preventDefault();
	
	            this.setState({
	                expand: !this.state.expand
	
	            });
	        }
	    }, {
	        key: 'itemClick',
	        value: function itemClick(tempData, index) {
	            var tempArrObject = this.state.arrObject;
	            tempArrObject[index] = tempData;
	            this.setState({
	                arrObject: tempArrObject
	
	            });
	        }
	    }, {
	        key: 'pagingClick',
	        value: function pagingClick(page, perPage) {
	
	            this.setState({
	                currentPage: page,
	                itemPerPage: perPage
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.resultData != nextProps.resultData) {
	                this.setState({
	                    currentPage: 1,
	                    itemPerPage: 10
	                });
	            }
	        }
	    }, {
	        key: 'renderList',
	        value: function renderList() {
	
	            var iconLoading = 'data:image/gif;base64,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';
	            var _props = this.props,
	                resultData = _props.resultData,
	                searchStatus = _props.searchStatus;
	
	
	            var iconCheckStyle = {
	
	                height: 100,
	                width: 152,
	                marginLeft: 'auto',
	                marginRight: 'auto',
	                display: 'block'
	
	            };
	
	            if (searchStatus == 'searching') {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'mapFinderResultListContainer', style: { overflowX: 'hidden', overflowY: 'auto' } },
	                    _react2.default.createElement(_iconComponent2.default, {
	                        src: iconLoading,
	                        style: iconCheckStyle
	                    })
	                );
	            }
	
	            var resultDataPerPage = [];
	            if (resultData) {
	                resultDataPerPage = resultData.slice((this.state.currentPage - 1) * this.state.itemPerPage, this.state.currentPage * this.state.itemPerPage);
	            }
	
	            if (resultDataPerPage) {
	                return resultDataPerPage.map(function (item, index) {
	                    return _react2.default.createElement(
	                        'div',
	                        { className: 'mapFinderResultListContainer', key: index, style: { overflowX: 'hidden', overflowY: 'auto' } },
	                        _react2.default.createElement(_mapFinderResultListItem2.default, { data: item
	                        })
	                    );
	                });
	            }
	        }
	    }, {
	        key: 'renderPaging',
	        value: function renderPaging() {
	            var _this2 = this;
	
	            var onPagingClick = function onPagingClick(page, perPage) {
	                return _this2.pagingClick(page, perPage);
	            };
	
	            var _props2 = this.props,
	                resultData = _props2.resultData,
	                searchStatus = _props2.searchStatus;
	
	            var totalItem = 0;
	            var pagingList = [];
	            if (resultData) {
	                var tempCount = resultData.length / this.state.defaultItemPerPage <= 0.8 ? 0.8 : resultData.length / this.state.defaultItemPerPage;
	                var tempTotalPage = Math.ceil(tempCount);
	                for (var i = 1; i <= tempTotalPage; i++) {
	                    pagingList.push(i * this.state.defaultItemPerPage);
	                }
	                totalItem = resultData.length;
	
	                if (tempTotalPage >= 3) {
	                    pagingList = [10, 20, 50];
	                }
	            }
	
	            if (searchStatus == 'searching') {
	                return null;
	            }
	            if (resultData && resultData.length > 0) {
	
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'pagingWrapper' },
	                    _react2.default.createElement(_pagingComponent2.default, {
	                        total: totalItem,
	                        onClick: onPagingClick,
	                        perPage: this.state.itemPerPage,
	                        current: this.state.currentPage,
	                        perPageList: pagingList
	                    })
	                );
	            } else {
	
	                return null;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'mapFinderResultListContainer', style: { overflow: 'scroll', overflowY: 'auto' } },
	                this.renderList(),
	                this.renderPaging(),
	                _react2.default.createElement(
	                    'style',
	                    null,
	                    css
	                )
	            );
	        }
	    }]);
	
	    return MapFinderResultListComponent;
	}(_react.Component);
	
	exports.default = MapFinderResultListComponent;
	
	MapFinderResultListComponent.propTypes = {
	    onSearchClick: _propTypes2.default.func,
	    arrObject: _propTypes2.default.any,
	    resultData: _propTypes2.default.array
	
	};
	
	var css = '\n    .mapFinderResultListContainer {\n       width:100%;\n       overflow:hidden !important;\n       \n    }\n    .mapFinderResultListContainer > div{\n      \n       overflow:hidden !important;\n      \n    }\n    .tableWrapper thead{\n      background-color: blue;\n      height:80px;\n    }\n    .headerWrapper {\n        width:100%;\n        height:50px;\n        background-color: rgba(244,247,250,1);\n    }\n    .nextText {\n        display:none;\n    }\n   \n    .paging{\n        width:calc(100% - 6px);\n        padding: 10px 6px 10px 0;\n    }\n  \n  \n  \n  \n  @media all and (orientation:landscape) {\n   .nextText {\n        display:inline;\n       \n    }\n    \n   \n    .mapFinderResultListContainer > div{\n      \n       overflow:hidden !important;\n      \n    }\n    \n    \n       \n  }\n    \n    \n';

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	var _iconComponent = __webpack_require__(17);
	
	var _iconComponent2 = _interopRequireDefault(_iconComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellMapFinderDropdownComponent = function (_React$Component) {
	    _inherits(CellMapFinderDropdownComponent, _React$Component);
	
	    function CellMapFinderDropdownComponent(props) {
	        _classCallCheck(this, CellMapFinderDropdownComponent);
	
	        var _this = _possibleConstructorReturn(this, (CellMapFinderDropdownComponent.__proto__ || Object.getPrototypeOf(CellMapFinderDropdownComponent)).call(this, props));
	
	        _this.state = {
	            data: _this.props.data
	
	        };
	        return _this;
	    }
	
	    /**
	     * @desc This is callback function when click on item
	     * @param {object} event - Event of element
	     */
	
	
	    _createClass(CellMapFinderDropdownComponent, [{
	        key: 'onClick',
	        value: function onClick(event) {
	            event.stopPropagation();
	            event.preventDefault();
	            var tempData = this.state.data;
	            tempData.check = !tempData.check;
	            this.setState({
	                data: tempData
	            });
	            this.props.onClick(tempData, this.props.index);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var placeStyle = {
	                fontSize: 14,
	                color: 'rgba(81,81,81,1)',
	                fontFamily: 'Roboto',
	                fontWeight: '600',
	                paddingLeft: 4
	
	            };
	            var descriptionStyle = {
	                fontSize: 12,
	                color: 'rgba(81,81,81,1)',
	                fontFamily: 'Roboto',
	                paddingLeft: 4,
	                paddingTop: 5
	            };
	
	            var iconCheckStyle = {
	
	                height: 10,
	                right: 10,
	                top: 22,
	                position: 'absolute'
	
	            };
	
	            var arrowIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAYCAYAAAAlBadpAAAAAXNSR0IArs4c6QAAAepJREFUOBHNkz1oFFEUhc/ZNWtcgr9NwNLSOiCC0Y0hwd0REnCxCMFKraJ2phLttNNKUghpAuoWokk27I9oZWNjY5OAgYBgIQqSRBSzJ3fe7ryJTnZdsHFgmPvuPd/cc9+8Af6LS/VgQtXCrW7NMBKqElwA9NjuNMh7HFmcjmrtnilfoCYdGCakm6oGD3ytTRDDR7NFgM+9To1rqhRmJHl3vtYKPMzjpZ/IDJh1PIlFuoJqYVYqpuNcHCXe6oS1zUdm/ZKXkU/RMzDB3O1fPmdBAg6LzmoteGjBVS8mX8BGcw5byV3hCFA1fx/C9WhtX6GCvuw4T5a+hzk/sxfsCDhSvmGSuz4ljWJ9s6xXxb4w17FzBLmDI92J1oa9wYGD5zp29mLyi49doA0cOfzjr51VCy5DjRmbvaklX9vc+XDujrBt2CTEWdv/lkOzm8mOMldaDw20he0nuYgtzfkjS7zF/kPDPDH3zTlvB6t+fgyNrZJZ3eOE5DvswxBPLX6NwPCZ6Gw/RN4OxzPrmGkK+R6Z1Bnm5j/vBBOw6oVhNDRvHXudkFhGD04zV/70J/gbrEp+0IwsWcdsE+QHpDnIswsfdwPDXPydU+gHW1bJNaQ11AlMvNDmHTcHq3o5dixR7Cahlam93ej+WbMNwF6eB3c76+oAAAAASUVORK5CYII=';
	
	            var lineIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAGCAYAAACrZDylAAAAAXNSR0IArs4c6QAAAJRJREFUKBVjZICC+fPnm/7582cCIyOjyf///9lg4rSkgXb9Atp1hoWFpSAxMfE0yC5GELF48WLJnz9/XgNKCoD49AZAh31gZ2fXio2Nfc4EsvzHjx++A+UYkP0gu0FuALHBDgIxBgsAO4iDg2MzKNgGylEgu0FuANkPdhAo7piZmd2A/GOghEYvh0HtOgayG+QGkL0AHEk0K2UcjZAAAAAASUVORK5CYII=';
	            var checkIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAbCAYAAAAULC3gAAAAAXNSR0IArs4c6QAAAy9JREFUSA3NlktIVFEYx//fPJjGIi0oNCwftAvauYnQSgsjXASlRSSZM1mQURgtklr0XFhGhT3mDgapm2lRYKiRULRq0QNa9MCauZOVoBhZOUQ0c/rO6Nxx9MyjmMYGhvud//875/vdM989dwiz+Wn3VyAYPM8IRQD1A1n7aNZ4NF8NhOjk+haDgdA9O0Cat5Z3pJ2BzAaMDAjfTDFCJgYurxOCbsyACdem55ndIbe+n0Eu8VdVdxhmlGZuhzS9CaHQZTUMDYFMa1Bf/CYzQJreDBE6p+wIwiBMllI4C19JP9rhyuw0iJp+gmGOKVci8jHBOtQt1SP+vwVy6S0MczhSbNp1ALAyTP6Hqfq/AZJN6/ZfZJjGqcWiMb2EnSqwM38oqk1E6QcKw+jXuHn3TC8WHhNewDyHYfJGVP4EkMu/AiZRBgEdjoJeEAlVclJNCBPcujxj+OBTfIiegiwbsDvvs8INSwTNt52jDl5k4tQk6oPNvgW1uePxJin1B8KCAb0DENuUPtFjZGdXonrhmNKfFOVjf9aAkaIQlfgR6EPn6PzJnOSXJ8KKt7onAcwjZM9dnwxGFmIgkaWouBqBsX50+RcovFipR9jwzHebb2RzrGGM+pFr24jqxd8NJUHAQNQWxy9BIPgQ7UOL4viAZ9COj75u9jcpc4h6YKUqVC0JKH2FSHxn/IjqV/i6V+GzRK9hNpejftmnGN8zPA9fxu/yDpfF6MaA7iCnsAbV9NOQUgiiLzmXr5UXP6SeQ+/4KSyHo9gf9mV/Bb72cv4qZT6RB8sLd2At/VL6CcQokEzSvKf40W+Ok/8eJms57KFRjAfvcU6JOs/UgZyCOt6ZoNpPrMYCyVxNP8on7Gn1NPlWFiMMvVLp848PR1EDn2MhpZ+COBNITtJ8B7mnLqQwP5pCaGOYxr8+VCdXUgNJ0+1r4J24Gm76aFl1ZEIr91eT2vwzNf7/IUfRdW7aXXzHiXuBcCZdMBI9/g5Fbszt3YoQunhojUjGlXAczuKTxjgNQXIgWcTtr0IoeIsjm1GTcIRhWoxxmoLUgGQx+Y+AQgf4Z+RXjfkmnAX308Twfy/zG61t85ie8IlUAAAAAElFTkSuQmCC';
	
	            var onClick = function onClick(event) {
	                return _this2.onClick(event);
	            };
	
	            if (this.props.data) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'list-item-container' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'listItem-textWrapper' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(_textComponent2.default, {
	                                style: placeStyle,
	                                text: this.props.data.name ? this.props.data.name : ' empty'
	                            })
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { style: { marginTop: -5 } },
	                            _react2.default.createElement(_textComponent2.default, {
	                                style: descriptionStyle,
	                                text: this.props.data.state ? this.props.data.state : ' empty'
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'nextText' },
	                        _react2.default.createElement(_textComponent2.default, {
	                            style: {
	                                color: 'rgba(255,185,74,1)',
	                                fontSize: 12,
	                                fontFamily: 'Roboto-Bold',
	                                height: 10,
	                                right: 20,
	                                top: 22,
	                                position: 'absolute'
	                            },
	                            text: 'NEXT'
	                        })
	                    ),
	                    _react2.default.createElement(_iconComponent2.default, {
	                        src: arrowIcon,
	                        style: iconCheckStyle
	                    }),
	                    _react2.default.createElement(
	                        'style',
	                        null,
	                        css
	                    )
	                );
	            } else {
	                return null;
	            }
	        }
	    }]);
	
	    return CellMapFinderDropdownComponent;
	}(_react2.default.Component);
	
	exports.default = CellMapFinderDropdownComponent;
	
	
	CellMapFinderDropdownComponent.propTypes = {
	
	    data: _propTypes2.default.object,
	    onClick: _propTypes2.default.func,
	    index: _propTypes2.default.number
	};
	
	var css = '\n  .list-item-container {  \n      height: 56px; \n      \n      position: relative;\n      background-color: white;\n      border-bottom: 1px solid #EAEAEA;\n      \n    }\n      .listItem-textWrapper{\n        margin: 12px 0 0 5px ;\n      }\n    .nextText {\n        display:none;\n    }\n';

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TableComponent = function (_Component) {
	    _inherits(TableComponent, _Component);
	
	    function TableComponent() {
	        _classCallCheck(this, TableComponent);
	
	        return _possibleConstructorReturn(this, (TableComponent.__proto__ || Object.getPrototypeOf(TableComponent)).apply(this, arguments));
	    }
	
	    _createClass(TableComponent, [{
	        key: "renderRow",
	        value: function renderRow(item, rowIndex) {
	            var _props = this.props,
	                style = _props.style,
	                rowStyle = _props.rowStyle,
	                onClick = _props.onClick;
	
	            if (item && item.length > 0) {
	                return _react2.default.createElement(
	                    "tr",
	                    { key: rowIndex, style: rowStyle },
	                    item.map(function (item, index) {
	                        var handleClick = function handleClick() {
	                            return onClick ? onClick(rowIndex) : {};
	                        };
	                        var _style = style && style[index] ? style[index] : {};
	
	                        return _react2.default.createElement(
	                            "td",
	                            { key: index, onClick: handleClick, style: _style },
	                            item
	                        );
	                    })
	                );
	            }
	            return false;
	        }
	    }, {
	        key: "renderHeader",
	        value: function renderHeader(data) {
	            var _props2 = this.props,
	                style = _props2.style,
	                headerStyle = _props2.headerStyle;
	
	            if (data && data.length > 0) {
	                return data.map(function (item, index) {
	                    var _style = {};
	                    if (headerStyle) {
	                        _style = headerStyle;
	                    } else if (style && style[index]) {
	                        _style = style[index];
	                    }
	                    return _react2.default.createElement(
	                        "th",
	                        { key: index, style: _style
	                        },
	                        item
	                    );
	                });
	            }
	            return null;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _props3 = this.props,
	                header = _props3.header,
	                body = _props3.body,
	                customHeaderBackgroundStyle = _props3.customHeaderBackgroundStyle;
	
	
	            if (body && body.length > 0 || header) {
	                return _react2.default.createElement(
	                    "div",
	                    { style: { overflow: 'scroll', overflowY: 'hidden' } },
	                    _react2.default.createElement(
	                        "table",
	                        { className: "tableWrapper" },
	                        _react2.default.createElement(
	                            "thead",
	                            { style: customHeaderBackgroundStyle },
	                            _react2.default.createElement(
	                                "tr",
	                                null,
	                                this.renderHeader(header)
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "tbody",
	                            null,
	                            body.map(function (row, index) {
	                                return _this2.renderRow(row, index);
	                            })
	                        ),
	                        _react2.default.createElement(
	                            "style",
	                            null,
	                            css
	                        )
	                    )
	                );
	            }
	            return null;
	        }
	    }]);
	
	    return TableComponent;
	}(_react.Component);
	
	exports.default = TableComponent;
	
	
	TableComponent.propTypes = {
	    header: _react.PropTypes.array,
	    body: _react.PropTypes.array,
	    onClick: _react.PropTypes.func,
	    style: _react.PropTypes.array,
	    rowStyle: _react.PropTypes.object,
	    headerStyle: _react.PropTypes.object,
	    customHeaderBackgroundStyle: _react.PropTypes.object
	};
	
	var css = "\n  .tableWrapper{\n    border-collapse: collapse;\n    font-size: 13px;\n    width: 100%; \n  }\n  .tableWrapper thead{\n      background-color: #fcd000;\n  }\n  .tableWrapper thead th{\n    padding:8px;\n    font-weight:normal;\n    color: #00105a; \n    font-size:11px;\n    text-align:center;\n  }\n  .tableWrapper tbody tr:nth-child(even) {background: #FFF}\n  .tableWrapper tbody tr:nth-child(odd) {background: #efefef}\n  .tableWrapper tbody td{\n    padding:8px;\n    text-align:center;\n    white-space: nowrap;\n    max-width: 126px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    \n  }\n  .tableWrapper tbody td.name{\n    text-align:left; \n    font-weight:bold;\n    text-decoration: underline;\n  }\n  .tableWrapper thead th.name{\n    text-align:left; \n  } \n    \n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2017 @ NEXLE
	 * @author rocachien
	 * @create 2017/04/13 16:22
	 * @update 2017/04/21 14:24
	 * @file common/paging/paging-component.js
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @desc This is Paging component.
	 * @example
	 *
	 * const onLickClick = (page) => {console.log("============= page:", page);};
	 * <Paging total={410} current={1} onClick={onLickClick} />
	 */
	
	var Paging = function (_Component) {
	    _inherits(Paging, _Component);
	
	    /**
	     * @param {object} props.
	     */
	    function Paging(props) {
	        _classCallCheck(this, Paging);
	
	        var _this = _possibleConstructorReturn(this, (Paging.__proto__ || Object.getPrototypeOf(Paging)).call(this, props));
	
	        _this.state = {
	            pages: [],
	            currentPage: 0
	        };
	
	        _this.totalPage = 0;
	        _this.perPage = 10;
	        _this.startPage = 0;
	        _this.endPage = 0;
	        return _this;
	    }
	
	    _createClass(Paging, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            var _props = this.props,
	                total = _props.total,
	                perPage = _props.perPage;
	
	
	            total = total && parseInt(total) >= 0 ? total : 0;
	            perPage = perPage && parseInt(perPage) > 0 ? perPage : 10;
	
	            this.perPage = perPage;
	            this.totalPage = Math.ceil(total / perPage);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var current = this.props.current;
	
	
	            this.updateLinkWithIndex(current, false);
	        }
	    }, {
	        key: "updateLinkWithIndex",
	        value: function updateLinkWithIndex(currentPage, isItemClick) {
	            var perLink = this.props.perLink;
	
	            var pages = [];
	
	            if (!isItemClick) {
	                this.startPage = currentPage < perLink ? 1 : currentPage - parseInt(perLink / 2);
	                this.endPage = this.startPage + perLink - 1;
	            }
	
	            if (this.endPage > this.totalPage) this.endPage = this.totalPage;
	
	            for (var i = this.startPage; i <= this.endPage; i++) {
	                pages.push(i);
	            }
	
	            this.setState({
	                pages: pages,
	                currentPage: currentPage
	            });
	        }
	    }, {
	        key: "onClickAtIndex",
	        value: function onClickAtIndex(event, page) {
	            event.stopPropagation();
	            event.preventDefault();
	
	            this.updateLinkWithIndex(page, true);
	            if (this.props.onClick) return this.props.onClick(page, this.perPage);
	        }
	    }, {
	        key: "onPreviousLink",
	        value: function onPreviousLink() {
	            event.stopPropagation();
	            event.preventDefault();
	
	            var page = this.state.currentPage - 1;
	
	            this.updateLinkWithIndex(page, false);
	            if (this.props.onClick) return this.props.onClick(page, this.perPage);
	        }
	    }, {
	        key: "onNextLink",
	        value: function onNextLink(event) {
	            event.stopPropagation();
	            event.preventDefault();
	
	            var page = this.state.currentPage + 1;
	
	            this.updateLinkWithIndex(page, false);
	            if (this.props.onClick) return this.props.onClick(page, this.perPage);
	        }
	    }, {
	        key: "onPerPageClick",
	        value: function onPerPageClick(event, perPage) {
	            event.stopPropagation();
	            event.preventDefault();
	
	            var total = this.props.total;
	
	
	            this.perPage = perPage;
	            this.totalPage = Math.ceil(total / perPage);
	            this.updateLinkWithIndex(1, false);
	            if (this.props.onClick) return this.props.onClick(1, this.perPage);
	        }
	    }, {
	        key: "renderPreviousLink",
	        value: function renderPreviousLink() {
	            var _this2 = this;
	
	            var onClick = function onClick(event) {
	                return _this2.onPreviousLink(event);
	            };
	
	            if (this.startPage <= 1) return null;
	
	            return _react2.default.createElement(
	                "div",
	                { onClick: onClick },
	                _react2.default.createElement(
	                    "span",
	                    { className: "arrow" },
	                    "\xAB"
	                ),
	                _react2.default.createElement(
	                    "span",
	                    { className: "first" },
	                    "Prev"
	                )
	            );
	        }
	    }, {
	        key: "renderNextLink",
	        value: function renderNextLink() {
	            var _this3 = this;
	
	            var perLink = this.props.perLink;
	
	            var onClick = function onClick(event) {
	                return _this3.onNextLink(event);
	            };
	
	            if (this.totalPage <= perLink || this.state.currentPage == this.totalPage) return null;
	
	            return _react2.default.createElement(
	                "div",
	                { onClick: onClick },
	                _react2.default.createElement(
	                    "span",
	                    { className: "last" },
	                    "Next"
	                ),
	                _react2.default.createElement(
	                    "span",
	                    { className: "arrow" },
	                    "\xBB"
	                )
	            );
	        }
	    }, {
	        key: "renderItemLink",
	        value: function renderItemLink(page) {
	            var _this4 = this;
	
	            var onClick = void 0,
	                isCurrent = "";
	
	            if (page == this.state.currentPage) {
	                isCurrent = "current";
	            } else {
	                onClick = function onClick(event) {
	                    return _this4.onClickAtIndex(event, page);
	                };
	            }
	
	            return _react2.default.createElement(
	                "div",
	                { key: page, onClick: onClick },
	                _react2.default.createElement(
	                    "span",
	                    { className: isCurrent },
	                    page
	                )
	            );
	        }
	    }, {
	        key: "renderPerPage",
	        value: function renderPerPage() {
	            var _this5 = this;
	
	            var perPageList = this.props.perPageList;
	
	
	            if (!perPageList || perPageList.length < 1) return null;
	
	            return _react2.default.createElement(
	                "div",
	                { style: { float: "right" } },
	                _react2.default.createElement(
	                    "span",
	                    { style: { color: "rgb(57, 57, 58)", margin: 0 } },
	                    "SHOW:"
	                ),
	                perPageList.map(function (p, i) {
	                    var endPer = i == perPageList.length - 1 ? { marginRight: 0 } : null;
	                    var cls = "";
	                    var onClick = void 0;
	
	                    if (p == _this5.perPage) {
	                        cls = "current";
	                    } else {
	                        onClick = function onClick(event) {
	                            return _this5.onPerPageClick(event, p);
	                        };
	                    }
	
	                    return _react2.default.createElement(
	                        "span",
	                        { key: p, onClick: onClick, className: cls, style: endPer },
	                        p
	                    );
	                })
	            );
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this6 = this;
	
	            var style = this.props.style;
	
	
	            if (!this.state.pages || this.state.pages.length <= 0) return null;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "paging", style: style },
	                this.renderPreviousLink(),
	                this.state.pages.map(function (p) {
	                    return _this6.renderItemLink(p);
	                }),
	                this.renderNextLink(),
	                this.renderPerPage(),
	                _react2.default.createElement(
	                    "style",
	                    null,
	                    css
	                )
	            );
	        }
	    }]);
	
	    return Paging;
	}(_react.Component);
	
	exports.default = Paging;
	
	
	Paging.propTypes = {
	    style: _react.PropTypes.object,
	    itemStyle: _react.PropTypes.object,
	
	    total: _react.PropTypes.number,
	    current: _react.PropTypes.number,
	    perPage: _react.PropTypes.number,
	    perLink: _react.PropTypes.number,
	    perPageList: _react.PropTypes.array,
	
	    onClick: _react.PropTypes.func
	};
	
	Paging.defaultProps = {
	    current: 0,
	    perPage: 10,
	    perLink: 3,
	    perPageList: [10, 20, 50]
	};
	
	var css = "\n    .paging {\n        border: none;\n        width: 100%;\n        display: table;\n        padding: 12px;\n        background-color: #ffffff;\n    }\n    .paging div {\n        float: left;\n    }\n    .paging span {\n        margin: 10px;\n        font-size: 10px;\n        color: rgba(0, 154, 222, 1);\n        text-align: center;\n        align-items: center;\n        -webkit-justify-content: center;\n        -webkit-align-items: center;\n        -webkit-justify-content: center;\n    }\n    .paging span.arrow {\n        margin: 0;\n        font-size: 14px;\n    }\n    .paging span.first {\n        margin: 0 10px 0 2px;\n    }\n    .paging span.last {\n        margin: 0 2px 0 10px;\n    }\n    .paging span.current {\n        color: rgba(57, 57, 58, 1);\n    }\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mapComponent = __webpack_require__(29);
	
	var _mapComponent2 = _interopRequireDefault(_mapComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MapFinderResultListComponent = function (_Component) {
	    _inherits(MapFinderResultListComponent, _Component);
	
	    function MapFinderResultListComponent(props) {
	        _classCallCheck(this, MapFinderResultListComponent);
	
	        var _this = _possibleConstructorReturn(this, (MapFinderResultListComponent.__proto__ || Object.getPrototypeOf(MapFinderResultListComponent)).call(this, props));
	
	        _this.state = {
	            markers: _this.convertMarker(_this.props.markers)
	        };
	
	        return _this;
	    }
	
	    _createClass(MapFinderResultListComponent, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	
	            if (this.props.markers !== nextProps.markers) {
	                this.setState({
	                    markers: this.convertMarker(nextProps.markers)
	                });
	            }
	        }
	    }, {
	        key: 'convertMarker',
	        value: function convertMarker(arrObject) {
	            var arrMarker = [];
	            if (arrObject) {
	                for (var i = 0; i < arrObject.length; i++) {
	                    var temp = arrObject[i];
	                    var info = "";
	                    var comma = ' ';
	                    if (temp.street) {
	                        info = info + temp.street;
	                        comma = ", ";
	                    }
	                    if (temp.suburb) {
	                        info = info + comma + temp.suburb;
	                        comma = ", ";
	                    }
	                    if (temp.state) {
	                        info = info + comma + temp.state;
	                    }
	
	                    var getTemp = { lat: temp.lat, lng: temp.lon, title: temp.name, info: info };
	                    arrMarker.push(getTemp);
	                }
	            }
	            return arrMarker;
	        }
	
	        /**
	         * @desc This is callback function when click on item
	         * @param {object} event - Event of element
	         */
	
	    }, {
	        key: 'onClick',
	        value: function onClick(event) {
	            event.stopPropagation();
	            event.preventDefault();
	
	            this.setState({});
	        }
	    }, {
	        key: 'onBoundsChange',
	        value: function onBoundsChange(numcount, center, zoom) {}
	    }, {
	        key: 'onNext',
	        value: function onNext() {
	
	            if (this.props.onNext) return this.props.onNext();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var srcPin = "data:image/png;base64,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";
	            var onBoundsChange = function onBoundsChange(numcount, center, zoom) {
	                return _this2.onBoundsChange(numcount, center, zoom);
	            };
	            var onNext = function onNext() {
	                return _this2.onNext();
	            };
	            var center = { lat: 0, lng: 0 };
	            if (this.state.markers) {
	                center = this.props.center ? this.props.center : this.state.markers.length > 0 ? { lat: this.state.markers[0].lat, lng: this.state.markers[0].lng } : { lat: 0, lng: 0 };
	            }
	
	            return _react2.default.createElement(_mapComponent2.default, {
	                ref: 'map',
	                center: center,
	                zoom: this.props.zoom,
	                markers: this.state.markers,
	                usingInfoBox: true,
	                srcPin: srcPin,
	                onNext: onNext
	            });
	        }
	    }]);
	
	    return MapFinderResultListComponent;
	}(_react.Component);
	
	exports.default = MapFinderResultListComponent;
	
	
	MapFinderResultListComponent.propTypes = {
	    onSearchClick: _react.PropTypes.func,
	    markers: _react.PropTypes.array,
	    center: _react.PropTypes.object,
	    zoom: _react.PropTypes.number,
	    onNext: _react.PropTypes.func
	};
	
	MapFinderResultListComponent.defaultProps = {
	
	    zoom: 11,
	    markers: []
	
	};
	
	//http://stackoverflow.com/questions/6671183/calculate-the-center-point-of-multiple-latitude-longitude-coordinate-pairs

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pinIconComponent = __webpack_require__(30);
	
	var _pinIconComponent2 = _interopRequireDefault(_pinIconComponent);
	
	var _popupBoxInfoMapComponent = __webpack_require__(31);
	
	var _popupBoxInfoMapComponent2 = _interopRequireDefault(_popupBoxInfoMapComponent);
	
	var _googleMapReact = __webpack_require__(32);
	
	var _googleMapReact2 = _interopRequireDefault(_googleMapReact);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MapComponent = function (_Component) {
	    _inherits(MapComponent, _Component);
	
	    function MapComponent(props) {
	        _classCallCheck(this, MapComponent);
	
	        var _this = _possibleConstructorReturn(this, (MapComponent.__proto__ || Object.getPrototypeOf(MapComponent)).call(this, props));
	
	        _this.state = {
	            makerClick: false,
	            change: false
	        };
	        _this.makerClick = false;
	
	        return _this;
	    }
	
	    _createClass(MapComponent, [{
	        key: "getNumMarketVisible",
	        value: function getNumMarketVisible() {
	
	            var countInBoundingBox = 0; //the counter for the markers in bounding box
	
	
	            var bounds = this.refs.mapGoogle.geoService_.getBounds();
	            var leftTop = { lat: bounds[0], lng: bounds[1] };
	            var rightTop = { lat: bounds[6], lng: bounds[7] };
	            var rightBot = { lat: bounds[2], lng: bounds[3] };
	            var leftBot = { lat: bounds[4], lng: bounds[5] };
	            var boundCoords = [leftTop, rightBot, leftBot, rightTop];
	
	            // Construct the polygon.
	            var boundRect = new window.google.maps.Polygon({
	                paths: boundCoords
	
	            });
	            for (var i = this.props.markers.length; i--;) {
	                var pos = this.props.markers[i];
	                var point = new window.google.maps.LatLng(pos.lat, pos.lng);
	                if (window.google.maps.geometry.poly.containsLocation(point, boundRect)) {
	                    countInBoundingBox++;
	                }
	            }
	
	            return countInBoundingBox;
	        }
	    }, {
	        key: "onBoundsChange",
	        value: function onBoundsChange(center, zoom) {
	
	            if (this.props.onBoundsChange) {
	                var numCount = this.getNumMarketVisible();
	                this.props.onBoundsChange(numCount, center, zoom);
	            }
	        }
	    }, {
	        key: "onClick",
	        value: function onClick(mouse) {
	
	            mouse.event.stopPropagation();
	            mouse.event.preventDefault();
	
	            if (this.makerClick == true) {
	                this.makerClick = false;
	            } else {
	                this.lat = 0;
	                this.lng = 0;
	                this.setState({
	                    change: !this.state.change
	                });
	            }
	        }
	    }, {
	        key: "onMakerClick",
	        value: function onMakerClick(lat, lng) {
	
	            this.makerClick = true;
	            this.lat = lat;
	            this.lng = lng;
	
	            this.setState({
	                change: !this.state.change
	            });
	        }
	    }, {
	        key: "onNext",
	        value: function onNext() {
	
	            if (this.props.onNext) return this.props.onNext();
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	
	            this.lat = 0;
	            this.lng = 0;
	            this.setState({
	                change: !this.state.change
	            });
	        }
	    }, {
	        key: "renderMarkers",
	        value: function renderMarkers() {
	            var _this2 = this;
	
	            var showOne = false;
	            return this.props.markers.map(function (marker, i) {
	                if (_this2.props.usingInfoBox == true) {
	                    var onMakerClick = function onMakerClick(lat, lng) {
	                        return _this2.onMakerClick(lat, lng);
	                    };
	                    var onNext = function onNext() {
	                        return _this2.onNext();
	                    };
	                    var show = false;
	                    if (_this2.lat === marker.lat && _this2.lng === marker.lng) {
	                        if (!showOne) {
	                            show = true;
	                            showOne = true;
	                        }
	                    }
	
	                    return _react2.default.createElement(_popupBoxInfoMapComponent2.default, _extends({ key: i }, marker, {
	                        onClick: onMakerClick,
	                        onNext: onNext,
	                        lat: marker.lat,
	                        lng: marker.lng,
	                        show: show,
	                        src: _this2.props.srcPin,
	                        title: marker.title,
	                        info: marker.info
	                    }));
	                } else {
	                    return _react2.default.createElement(
	                        "div",
	                        _extends({ key: i }, marker),
	                        _react2.default.createElement(_pinIconComponent2.default, null)
	                    );
	                }
	            });
	        }
	    }, {
	        key: "renderGoogleMap",
	        value: function renderGoogleMap() {
	            var _this3 = this;
	
	            var onBoundsChange = function onBoundsChange(center, zoom) {
	                return _this3.onBoundsChange(center, zoom);
	            };
	            var onClick = function onClick(mouse) {
	                return _this3.onClick(mouse);
	            };
	
	            return _react2.default.createElement(
	                _googleMapReact2.default,
	                {
	                    onBoundsChange: onBoundsChange,
	                    onClick: onClick,
	                    ref: "mapGoogle",
	                    defaultZoom: this.props.zoom,
	                    center: this.props.center,
	                    options: { streetViewControl: true, mapTypeControl: false, zoomControl: false } },
	                this.renderMarkers()
	            );
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return this.renderGoogleMap();
	        }
	    }]);
	
	    return MapComponent;
	}(_react.Component);
	
	/**
	 * @desc props
	 * @param {markers}  - array object [{lat,lng,title,info}]
	
	 */
	
	
	exports.default = MapComponent;
	MapComponent.propTypes = {
	    center: _react.PropTypes.object,
	    markers: _react.PropTypes.array,
	    zoom: _react.PropTypes.number,
	    srcPin: _react.PropTypes.string,
	    usingInfoBox: _react.PropTypes.bool,
	    onBoundsChange: _react.PropTypes.func,
	    onNext: _react.PropTypes.func
	};
	
	MapComponent.defaultProps = {
	    center: { lat: 59.937043, lng: 30.336157 },
	    zoom: 11,
	    markers: [],
	    usingInfoBox: false
	
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2017 @ NEXLE
	 * @author rocachien
	 * @create 2017/03/07 14:44
	 * @update 2017/03/22 17:18
	 * @file common/map/pin-icon-component.js
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _iconComponent = __webpack_require__(17);
	
	var _iconComponent2 = _interopRequireDefault(_iconComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @desc This is Pin Icon component on Map.
	 * @example
	 *
	 *
	 * <PinIcon {...this.props.greatPlaceCoords} />
	 * <PinIcon lat={this.props.lat} lng={this.props.lng} onClick={this.onClick}/>
	 */
	
	var PinIcon = function (_React$Component) {
	    _inherits(PinIcon, _React$Component);
	
	    /**
	     * @param {object} props.
	     */
	    function PinIcon(props) {
	        _classCallCheck(this, PinIcon);
	
	        return _possibleConstructorReturn(this, (PinIcon.__proto__ || Object.getPrototypeOf(PinIcon)).call(this, props));
	    }
	
	    /**
	     * @desc This is callback function when click on item
	     * @param {object} event - Event of element
	     * @param {object} lat - Latitude
	     * @param {number} lng - Longitude
	     */
	
	
	    _createClass(PinIcon, [{
	        key: 'onClick',
	        value: function onClick(event) {
	            var lat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var lng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	            event.stopPropagation();
	            event.preventDefault();
	
	            if (this.props.onClick) return this.props.onClick(lat, lng);
	        }
	
	        /**
	         *
	         * @return {XML}
	         */
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var onClick = function onClick(event) {
	                return _this2.onClick(event, _this2.props.lat, _this2.props.lng);
	            };
	
	            var srcPin = "data:image/png;base64,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";
	            var scr = this.props.srcPin ? this.props.srcPin : srcPin;
	            return _react2.default.createElement(
	                'div',
	                { style: { position: "relative", cursor: "pointer" }, onClick: onClick },
	                _react2.default.createElement(_iconComponent2.default, { src: scr, style: { position: "absolute", width: "24px" } })
	            );
	        }
	    }]);
	
	    return PinIcon;
	}(_react2.default.Component);
	
	exports.default = PinIcon;
	
	
	PinIcon.propTypes = {
	    onClick: _react2.default.PropTypes.func,
	    lat: _react2.default.PropTypes.number,
	    lng: _react2.default.PropTypes.number,
	    srcPin: _react2.default.PropTypes.string
	};
	
	PinIcon.defaultProps = {
	    lat: 59.938043,
	    lng: 30.337157
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _iconComponent = __webpack_require__(17);
	
	var _iconComponent2 = _interopRequireDefault(_iconComponent);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 @ NEXLE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author rocachien
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @create 2017/03/07 14:44
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @update 2017/03/22 17:18
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file common/map/pin-icon-component.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var PinInfo = function (_Component) {
	    _inherits(PinInfo, _Component);
	
	    /**
	     * @param {object} props.
	     */
	    function PinInfo(props) {
	        _classCallCheck(this, PinInfo);
	
	        var _this = _possibleConstructorReturn(this, (PinInfo.__proto__ || Object.getPrototypeOf(PinInfo)).call(this, props));
	
	        _this.state = {
	            show: _this.props.show
	
	        };
	        return _this;
	    }
	
	    _createClass(PinInfo, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	
	            this.setState({
	                show: nextProps.show
	
	            });
	        }
	
	        /**
	         * @desc This is callback function when click on item
	         * @param {object} event - Event of element
	         * @param {object} lat - Latitude
	         * @param {number} lng - Longitude
	         */
	
	    }, {
	        key: 'onClick',
	        value: function onClick(event) {
	            var lat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var lng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	            event.stopPropagation();
	            event.preventDefault();
	
	            if (this.props.onClick) return this.props.onClick(lat, lng);
	        }
	    }, {
	        key: 'onPopupClick',
	        value: function onPopupClick(event) {
	            var lat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var lng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	            event.stopPropagation();
	            event.preventDefault();
	
	            if (this.props.onClick) return this.props.onClick(lat, lng);
	        }
	    }, {
	        key: 'onClose',
	        value: function onClose(event) {
	            event.stopPropagation();
	            event.preventDefault();
	            this.setState({
	                show: false
	            });
	            if (this.props.onClose) return this.props.onClose();
	        }
	    }, {
	        key: 'onNext',
	        value: function onNext(event) {
	            event.stopPropagation();
	            event.preventDefault();
	
	            if (this.props.onNext) return this.props.onNext();
	        }
	    }, {
	        key: 'renderBoxInfo',
	        value: function renderBoxInfo() {
	            var _this2 = this;
	
	            var iconLeftButton = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAAAXNSR0IArs4c6QAAAhRJREFUOBHFVEtrU0EU/ubGRIqPFgJWIuRRt0WoYhEKVXAhWVREEMSFCytpuvHvtDeh1LopiAiFUvFV48YuBFcKipKbRC3GrkpfpHmcnrn3Tuyk97YJpTiLOXPO/b5vzpk5c4EjHUTG4fUnikOYtL7ALJ3vRExo4EzpMuq1Nxw7DYhlGLiOscRXDePjtJRA3RDimIOlCBr0HtmfF3y4WlgXSsU4G0pCYM1FneEM3yFbvKSxPBy9NAXIWldQxwsQ9dghgVXASCIdX1KQVustJFFm4SKX9oozDLukdT63EYwncq6vGb203Z/G4p8QDFzjMstu+CTbBWSsG7thau0vJBEPo58RxFW+gN8OgbpQpzlk8jeVgLL7C0nUaN83hIxhFiu4pONo4BnM/B3Xt83BQhL2IJZHKDTMqx82izhPErN8jvdsn6f2hGx0LchZdSki3+gGhPFd+e0JmctRVBqLTD7nEtcR4HZIRT+2LzRVioAqi9wGMYcktuw2SMU/KBFp988oW+5Ftf6WM1EPuAKDbnn1kn9DzvwKY3M7x5v1yx25n6owAreRis3bfsvkndG01YPN6mvGOiJAjZO/6yciNfcKTa2cQoVe8pkMOJuKBt/WfX5nzx3fe9aFnvw5geraAgiDNlwIYjuKdGLWm/4vqgttbZ/lRutrfiaM88E+bvodLeQvdsIqwLQedcTzBD/9K1/6/xk7C/CScHqsWIEAAAAASUVORK5CYII=";
	            var iconStyle = {
	                position: 'absolute',
	                marginLeft: '2px',
	                marginRight: '5px',
	                marginTop: '4px',
	                width: '6px',
	                height: '8px'
	            };
	
	            var onNext = function onNext(event) {
	                return _this2.onNext(event);
	            };
	            if (this.state.show === true) {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'popup-title-wrapper', style: this.props.styleTitle },
	                        _react2.default.createElement(_textComponent2.default, {
	                            text: this.props.title
	                        })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'popup-bot-wrapper', style: this.props.styleDescription },
	                        _react2.default.createElement(_textComponent2.default, {
	                            text: this.props.info
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'popup-bot-button-wrapper', style: this.props.styleButton, onClick: onNext },
	                            _react2.default.createElement(_textComponent2.default, {
	                                text: 'NEXT'
	                            }),
	                            _react2.default.createElement(_iconComponent2.default, {
	                                src: iconLeftButton,
	                                style: iconStyle
	                            })
	                        )
	                    )
	                );
	            } else {
	                return null;
	            }
	        }
	        /**
	         *
	         * @return {XML}
	         */
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            var srcPin = "data:image/png;base64,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";
	            var scr = this.props.srcPin ? this.props.srcPin : srcPin;
	            var onClick = function onClick(event) {
	                return _this3.onClick(event, _this3.props.lat, _this3.props.lng);
	            };
	            var onPopupClick = function onPopupClick(event) {
	                return _this3.onPopupClick(event, _this3.props.lat, _this3.props.lng);
	            };
	            return _react2.default.createElement(
	                'div',
	                {
	                    className: 'popup-wrapper',
	                    onClick: onPopupClick
	                },
	                _react2.default.createElement(
	                    'style',
	                    null,
	                    css
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'icon-wrapper', onClick: onClick },
	                    _react2.default.createElement(_iconComponent2.default, {
	                        src: scr
	                    })
	                ),
	                this.renderBoxInfo()
	            );
	        }
	    }]);
	
	    return PinInfo;
	}(_react.Component);
	
	exports.default = PinInfo;
	
	
	PinInfo.propTypes = {
	    onClick: _react.PropTypes.func,
	    onNext: _react.PropTypes.func,
	    onClose: _react.PropTypes.func,
	    lat: _react.PropTypes.number,
	    lng: _react.PropTypes.number,
	    srcPin: _react.PropTypes.string,
	    show: _react.PropTypes.bool,
	    styleTitle: _react.PropTypes.object,
	    styleDescription: _react.PropTypes.object,
	    styleButton: _react.PropTypes.object,
	    title: _react.PropTypes.string,
	    info: _react.PropTypes.string
	};
	
	PinInfo.defaultProps = {
	    lat: 59.938043,
	    lng: 30.337157,
	    show: false,
	
	    title: '',
	    info: ''
	};
	
	var css = '\n   .popup-wrapper { \n        position:relative; \n        width:30px;\n        top:-55px;\n        left:0px;   \n    }  \n    .popup-title-wrapper {  \n      position:relative; \n     background-color: rgb(0,154,222);\n     width: 140px;\n     left:-60px;\n     border: 0px solid green; \n     align: center;\n     color: white;\n     text-align: center;\n     padding:5px 5px 5px 5px;\n     font-name:Roboto-Medium;\n     font-size: 8px;\n     z-index: 1000;\n    } \n    \n   .popup-bot-wrapper {  \n     position:relative; \n     background-color:white;\n     width: 140px;\n     left:-60px;\n     border: 0px solid green; \n     align: center;\n     color: rgb(81,81,81);\n     text-align: center;\n     padding:5px 5px 8px 5px;\n     font-name:Roboto-Regular;\n     font-size: 8px;\n     z-index: 1000;\n    }  \n    \n    .popup-bot-button-wrapper { \n     position:relative;\n     top: 10px;\n     left: 30%; \n     text-align: center;\n     background-color: white;\n     width: 49px; \n     border: 1px solid rgb(0,154,222); \n     border-radius: 40px;\n     align: center;\n     color: rgb(0,154,222);\n     margin: 0px 5px 8px 5px;\n     height: 18px;\n     line-height: 18px;\n     z-index: 1000;\n     \n    } \n    \n   .icon-wrapper { \n      position:relative; \n      width: 30px;\n     \n    } \n';

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _google_map = __webpack_require__(33);
	
	var _google_map2 = _interopRequireDefault(_google_map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _google_map2.default;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(35);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _marker_dispatcher = __webpack_require__(36);
	
	var _marker_dispatcher2 = _interopRequireDefault(_marker_dispatcher);
	
	var _google_map_map = __webpack_require__(38);
	
	var _google_map_map2 = _interopRequireDefault(_google_map_map);
	
	var _google_map_markers = __webpack_require__(39);
	
	var _google_map_markers2 = _interopRequireDefault(_google_map_markers);
	
	var _google_map_markers_prerender = __webpack_require__(41);
	
	var _google_map_markers_prerender2 = _interopRequireDefault(_google_map_markers_prerender);
	
	var _google_map_loader = __webpack_require__(42);
	
	var _google_map_loader2 = _interopRequireDefault(_google_map_loader);
	
	var _detect = __webpack_require__(44);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _geo = __webpack_require__(45);
	
	var _geo2 = _interopRequireDefault(_geo);
	
	var _array_helper = __webpack_require__(50);
	
	var _array_helper2 = _interopRequireDefault(_array_helper);
	
	var _is_plain_object = __webpack_require__(51);
	
	var _is_plain_object2 = _interopRequireDefault(_is_plain_object);
	
	var _pick = __webpack_require__(52);
	
	var _pick2 = _interopRequireDefault(_pick);
	
	var _raf = __webpack_require__(53);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _log = __webpack_require__(54);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _isNumber = __webpack_require__(55);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _omit = __webpack_require__(40);
	
	var _omit2 = _interopRequireDefault(_omit);
	
	var _detectElementResize = __webpack_require__(56);
	
	var _detectElementResize2 = _interopRequireDefault(_detectElementResize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies, react/forbid-prop-types, react/no-find-dom-node, no-console */
	
	
	var kEPS = 0.00001;
	var K_GOOGLE_TILE_SIZE = 256;
	// real minZoom calculated here _getMinZoom
	var K_IDLE_TIMEOUT = 100;
	var K_IDLE_CLICK_TIMEOUT = 300;
	var DEFAULT_MIN_ZOOM = 3;
	
	function defaultOptions_() /* maps */{
	  return {
	    overviewMapControl: false,
	    streetViewControl: false,
	    rotateControl: true,
	    mapTypeControl: false,
	    // disable poi
	    styles: [{
	      featureType: 'poi',
	      elementType: 'labels',
	      stylers: [{ visibility: 'off' }]
	    }],
	    minZoom: DEFAULT_MIN_ZOOM };
	}
	
	var latLng2Obj = function latLng2Obj(latLng) {
	  return (0, _is_plain_object2.default)(latLng) ? latLng : { lat: latLng[0], lng: latLng[1] };
	};
	
	var _checkMinZoom = function _checkMinZoom(zoom, minZoom) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (zoom < minZoom) {
	      console.warn('GoogleMap: ' + // eslint-disable-line
	      'minZoom option is less than recommended ' + 'minZoom option for your map sizes.\n' + 'overrided to value ' + minZoom);
	    }
	  }
	
	  if (minZoom < zoom) {
	    return zoom;
	  }
	  return minZoom;
	};
	
	var GoogleMap = function (_Component) {
	  _inherits(GoogleMap, _Component);
	
	  // eslint-disable-line
	
	  function GoogleMap(props) {
	    _classCallCheck(this, GoogleMap);
	
	    var _this = _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).call(this, props));
	
	    _this._getMinZoom = function () {
	      if (_this.geoService_.getWidth() > 0 || _this.geoService_.getHeight() > 0) {
	        var tilesPerWidth = Math.ceil(_this.geoService_.getWidth() / K_GOOGLE_TILE_SIZE) + 2;
	        var tilesPerHeight = Math.ceil(_this.geoService_.getHeight() / K_GOOGLE_TILE_SIZE) + 2;
	        var maxTilesPerDim = Math.max(tilesPerWidth, tilesPerHeight);
	        return Math.ceil((0, _log2.default)(maxTilesPerDim));
	      }
	      return DEFAULT_MIN_ZOOM;
	    };
	
	    _this._computeMinZoom = function (minZoomOverride, minZoom) {
	      if (minZoomOverride) {
	        return minZoom || DEFAULT_MIN_ZOOM;
	      }
	      return _this._getMinZoom();
	    };
	
	    _this._mapDomResizeCallback = function () {
	      _this.resetSizeOnIdle_ = true;
	      if (_this.maps_) {
	        var originalCenter = _this.map_.getCenter();
	        _this.maps_.event.trigger(_this.map_, 'resize');
	        _this.map_.setCenter(originalCenter);
	      }
	    };
	
	    _this._setLayers = function (layerTypes) {
	      layerTypes.forEach(function (layerType) {
	        _this.layers_[layerType] = new _this.maps_[layerType]();
	        _this.layers_[layerType].setMap(_this.map_);
	      });
	    };
	
	    _this._initMap = function () {
	      // only initialize the map once
	      if (_this.initialized_) {
	        return;
	      }
	      _this.initialized_ = true;
	
	      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
	      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);
	
	      _this._onBoundsChanged(); // now we can calculate map bounds center etc...
	
	      var bootstrapURLKeys = _extends({}, _this.props.apiKey && { key: _this.props.apiKey }, _this.props.bootstrapURLKeys);
	
	      _this.props.googleMapLoader(bootstrapURLKeys).then(function (maps) {
	        if (!_this.mounted_) {
	          return;
	        }
	
	        var centerLatLng = _this.geoService_.getCenter();
	
	        var propsOptions = {
	          zoom: _this.props.zoom || _this.props.defaultZoom,
	          center: new maps.LatLng(centerLatLng.lat, centerLatLng.lng)
	        };
	
	        // prevent to exapose full api
	        // next props must be exposed (console.log(Object.keys(pick(maps, isPlainObject))))
	        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
	        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition",
	        // "SymbolPath", "ZoomControlStyle",
	        // "event", "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem",
	        // "DistanceMatrixStatus",
	        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType",
	        // "GeocoderStatus", "KmlLayerStatus",
	        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference",
	        // "TravelMode", "UnitSystem"
	        var mapPlainObjects = (0, _pick2.default)(maps, _is_plain_object2.default);
	        var options = typeof _this.props.options === 'function' ? _this.props.options(mapPlainObjects) : _this.props.options;
	        var defaultOptions = defaultOptions_(mapPlainObjects);
	
	        var draggableOptions = _this.props.draggable !== undefined && {
	          draggable: _this.props.draggable
	        };
	
	        var minZoom = _this._computeMinZoom(options.minZoomOverride, options.minZoom);
	        _this.minZoom_ = minZoom;
	
	        var preMapOptions = _extends({}, defaultOptions, {
	          minZoom: minZoom
	        }, options, propsOptions);
	
	        _this.defaultDraggableOption_ = preMapOptions.draggable !== undefined ? preMapOptions.draggable : _this.defaultDraggableOption_;
	
	        var mapOptions = _extends({}, preMapOptions, draggableOptions);
	
	        mapOptions.minZoom = _checkMinZoom(mapOptions.minZoom, minZoom);
	
	        var map = new maps.Map(_reactDom2.default.findDOMNode(_this.googleMapDom_), mapOptions);
	
	        _this.map_ = map;
	        _this.maps_ = maps;
	
	        _this._setLayers(_this.props.layerTypes);
	
	        // render in overlay
	        var this_ = _this;
	        var overlay = Object.assign(new maps.OverlayView(), {
	          onAdd: function onAdd() {
	            var K_MAX_WIDTH = typeof screen !== 'undefined' ? screen.width + 'px' : '2000px';
	            var K_MAX_HEIGHT = typeof screen !== 'undefined' ? screen.height + 'px' : '2000px';
	
	            var div = document.createElement('div');
	            this.div = div;
	            div.style.backgroundColor = 'transparent';
	            div.style.position = 'absolute';
	            div.style.left = '0px';
	            div.style.top = '0px';
	            div.style.width = K_MAX_WIDTH; // prevents some chrome draw defects
	            div.style.height = K_MAX_HEIGHT;
	
	            var panes = this.getPanes();
	            panes.overlayMouseTarget.appendChild(div);
	
	            _reactDom2.default.unstable_renderSubtreeIntoContainer(this_, _react2.default.createElement(_google_map_markers2.default, {
	              experimental: this_.props.experimental,
	              onChildClick: this_._onChildClick,
	              onChildMouseDown: this_._onChildMouseDown,
	              onChildMouseEnter: this_._onChildMouseEnter,
	              onChildMouseLeave: this_._onChildMouseLeave,
	              geoService: this_.geoService_,
	              projectFromLeftTop: true,
	              distanceToMouse: this_.props.distanceToMouse,
	              getHoverDistance: this_._getHoverDistance,
	              dispatcher: this_.markersDispatcher_
	            }), div,
	            // remove prerendered markers
	            function () {
	              return this_.setState({ overlayCreated: true });
	            });
	          },
	          onRemove: function onRemove() {
	            _reactDom2.default.unmountComponentAtNode(this.div);
	          },
	          draw: function draw() {
	            var div = overlay.div;
	            var overlayProjection = overlay.getProjection();
	            var bounds = map.getBounds();
	            var ne = bounds.getNorthEast();
	            var sw = bounds.getSouthWest();
	            var ptx = overlayProjection.fromLatLngToDivPixel(new maps.LatLng(ne.lat(), sw.lng()));
	
	            // need round for safari still can't find what need for firefox
	            var ptxRounded = (0, _detect2.default)().isSafari ? { x: Math.round(ptx.x), y: Math.round(ptx.y) } : { x: ptx.x, y: ptx.y };
	
	            this_.updateCounter_++;
	            this_._onBoundsChanged(map, maps, !this_.props.debounced);
	
	            if (!this_.googleApiLoadedCalled_) {
	              this_._onGoogleApiLoaded({ map: map, maps: maps });
	              this_.googleApiLoadedCalled_ = true;
	            }
	
	            div.style.left = ptxRounded.x + 'px';
	            div.style.top = ptxRounded.y + 'px';
	            if (this_.markersDispatcher_) {
	              this_.markersDispatcher_.emit('kON_CHANGE');
	            }
	          }
	        });
	
	        _this.overlay_ = overlay;
	
	        overlay.setMap(map);
	
	        maps.event.addListener(map, 'zoom_changed', function () {
	          // recalc position at zoom start
	          if (this_.geoService_.getZoom() !== map.getZoom()) {
	            if (!this_.zoomAnimationInProgress_) {
	              this_.zoomAnimationInProgress_ = true;
	              this_._onZoomAnimationStart();
	            }
	
	            var TIMEOUT_ZOOM = 300;
	
	            if (new Date().getTime() - _this.zoomControlClickTime_ < TIMEOUT_ZOOM) {
	              // there is strange Google Map Api behavior in chrome when zoom animation of map
	              // is started only on second raf call, if was click on zoom control
	              // or +- keys pressed, so i wait for two rafs before change state
	
	              // this does not fully prevent animation jump
	              // but reduce it's occurence probability
	              (0, _raf2.default)(function () {
	                return (0, _raf2.default)(function () {
	                  this_.updateCounter_++;
	                  this_._onBoundsChanged(map, maps);
	                });
	              });
	            } else {
	              this_.updateCounter_++;
	              this_._onBoundsChanged(map, maps);
	            }
	          }
	        });
	
	        maps.event.addListener(map, 'idle', function () {
	          if (_this.resetSizeOnIdle_) {
	            _this._setViewSize();
	            var currMinZoom = _this._computeMinZoom(_this.props.options.minZoomOverride, _this.props.options.minZoom);
	
	            if (currMinZoom !== _this.minZoom_) {
	              _this.minZoom_ = currMinZoom;
	              map.setOptions({ minZoom: currMinZoom });
	            }
	
	            _this.resetSizeOnIdle_ = false;
	          }
	
	          if (this_.zoomAnimationInProgress_) {
	            this_.zoomAnimationInProgress_ = false;
	            this_._onZoomAnimationEnd();
	          }
	
	          var div = overlay.div;
	          var overlayProjection = overlay.getProjection();
	          var bounds = map.getBounds();
	          var ne = bounds.getNorthEast();
	          var sw = bounds.getSouthWest();
	          var ptx = overlayProjection.fromLatLngToDivPixel(new maps.LatLng(ne.lat(), sw.lng()));
	          // need round for safari still can't find what need for firefox
	          var ptxRounded = (0, _detect2.default)().isSafari ? { x: Math.round(ptx.x), y: Math.round(ptx.y) } : { x: ptx.x, y: ptx.y };
	
	          this_.updateCounter_++;
	          this_._onBoundsChanged(map, maps);
	
	          if (_this.mouse_) {
	            var latLng = _this.geoService_.unproject(_this.mouse_, true);
	            _this.mouse_.lat = latLng.lat;
	            _this.mouse_.lng = latLng.lng;
	          }
	
	          _this._onChildMouseMove();
	
	          this_.dragTime_ = 0;
	          div.style.left = ptxRounded.x + 'px';
	          div.style.top = ptxRounded.y + 'px';
	          if (this_.markersDispatcher_) {
	            this_.markersDispatcher_.emit('kON_CHANGE');
	            if (this_.fireMouseEventOnIdle_) {
	              this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	            }
	          }
	        });
	
	        maps.event.addListener(map, 'mouseover', function () {
	          // has advantage over div MouseLeave
	          this_.mouseInMap_ = true;
	        });
	
	        // an alternative way to know the mouse is back within the map
	        // This would not fire when clicking/interacting with google maps
	        // own on-map countrols+markers. This handles an edge case for touch devices
	        // + 'draggable:false' custom option. See #332 for more details.
	        maps.event.addListener(map, 'click', function () {
	          this_.mouseInMap_ = true;
	        });
	
	        maps.event.addListener(map, 'mouseout', function () {
	          // has advantage over div MouseLeave
	          this_.mouseInMap_ = false;
	          this_.mouse_ = null;
	          this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	        });
	
	        maps.event.addListener(map, 'drag', function () {
	          this_.dragTime_ = new Date().getTime();
	          this_._onDrag();
	        });
	        // user choosing satellite vs roads, etc
	        maps.event.addListener(map, 'maptypeid_changed', function () {
	          this_._onMapTypeIdChange(map.getMapTypeId());
	        });
	      }).catch(function (e) {
	        console.error(e); // eslint-disable-line no-console
	        throw e;
	      });
	    };
	
	    _this._onGoogleApiLoaded = function () {
	      if (_this.props.onGoogleApiLoaded) {
	        var _this$props;
	
	        if (process.env.NODE_ENV !== 'production' && _this.props.yesIWantToUseGoogleMapApiInternals !== true) {
	          console.warn('GoogleMap: ' + // eslint-disable-line
	          'Usage of internal api objects is dangerous ' + 'and can cause a lot of issues.\n' + 'To hide this warning add yesIWantToUseGoogleMapApiInternals={true} ' + 'to <GoogleMap instance');
	        }
	
	        (_this$props = _this.props).onGoogleApiLoaded.apply(_this$props, arguments);
	      }
	    };
	
	    _this._getHoverDistance = function () {
	      return _this.props.hoverDistance;
	    };
	
	    _this._onDrag = function () {
	      var _this$props2;
	
	      return _this.props.onDrag && (_this$props2 = _this.props).onDrag.apply(_this$props2, arguments);
	    };
	
	    _this._onMapTypeIdChange = function () {
	      var _this$props3;
	
	      return _this.props.onMapTypeIdChange && (_this$props3 = _this.props).onMapTypeIdChange.apply(_this$props3, arguments);
	    };
	
	    _this._onZoomAnimationStart = function () {
	      var _this$props4;
	
	      return _this.props.onZoomAnimationStart && (_this$props4 = _this.props).onZoomAnimationStart.apply(_this$props4, arguments);
	    };
	
	    _this._onZoomAnimationEnd = function () {
	      var _this$props5;
	
	      return _this.props.onZoomAnimationEnd && (_this$props5 = _this.props).onZoomAnimationEnd.apply(_this$props5, arguments);
	    };
	
	    _this._onChildClick = function () {
	      if (_this.props.onChildClick) {
	        var _this$props6;
	
	        return (_this$props6 = _this.props).onChildClick.apply(_this$props6, arguments);
	      }
	      return undefined;
	    };
	
	    _this._onChildMouseDown = function (hoverKey, childProps) {
	      _this.childMouseDownArgs_ = [hoverKey, childProps];
	      if (_this.props.onChildMouseDown) {
	        _this.props.onChildMouseDown(hoverKey, childProps, _extends({}, _this.mouse_));
	      }
	    };
	
	    _this._onChildMouseUp = function () {
	      if (_this.childMouseDownArgs_) {
	        if (_this.props.onChildMouseUp) {
	          var _this$props7;
	
	          (_this$props7 = _this.props).onChildMouseUp.apply(_this$props7, _toConsumableArray(_this.childMouseDownArgs_).concat([_extends({}, _this.mouse_)]));
	        }
	        _this.childMouseDownArgs_ = null;
	        _this.childMouseUpTime_ = new Date().getTime();
	      }
	    };
	
	    _this._onChildMouseMove = function () {
	      if (_this.childMouseDownArgs_) {
	        if (_this.props.onChildMouseMove) {
	          var _this$props8;
	
	          (_this$props8 = _this.props).onChildMouseMove.apply(_this$props8, _toConsumableArray(_this.childMouseDownArgs_).concat([_extends({}, _this.mouse_)]));
	        }
	      }
	    };
	
	    _this._onChildMouseEnter = function () {
	      if (_this.props.onChildMouseEnter) {
	        var _this$props9;
	
	        return (_this$props9 = _this.props).onChildMouseEnter.apply(_this$props9, arguments);
	      }
	      return undefined;
	    };
	
	    _this._onChildMouseLeave = function () {
	      if (_this.props.onChildMouseLeave) {
	        var _this$props10;
	
	        return (_this$props10 = _this.props).onChildMouseLeave.apply(_this$props10, arguments);
	      }
	      return undefined;
	    };
	
	    _this._setViewSize = function () {
	      if (!_this.mounted_) return;
	
	      var mapDom = _reactDom2.default.findDOMNode(_this.googleMapDom_);
	      _this.geoService_.setViewSize(mapDom.clientWidth, mapDom.clientHeight);
	      _this._onBoundsChanged();
	    };
	
	    _this._onWindowResize = function () {
	      _this.resetSizeOnIdle_ = true;
	    };
	
	    _this._onMapMouseMove = function (e) {
	      if (!_this.mouseInMap_) return;
	
	      var currTime = new Date().getTime();
	      var K_RECALC_CLIENT_RECT_MS = 50;
	
	      if (currTime - _this.mouseMoveTime_ > K_RECALC_CLIENT_RECT_MS) {
	        _this.boundingRect_ = e.currentTarget.getBoundingClientRect();
	      }
	      _this.mouseMoveTime_ = currTime;
	
	      var mousePosX = e.clientX - _this.boundingRect_.left;
	      var mousePosY = e.clientY - _this.boundingRect_.top;
	
	      if (!_this.mouse_) {
	        _this.mouse_ = { x: 0, y: 0, lat: 0, lng: 0 };
	      }
	
	      _this.mouse_.x = mousePosX;
	      _this.mouse_.y = mousePosY;
	
	      var latLng = _this.geoService_.unproject(_this.mouse_, true);
	      _this.mouse_.lat = latLng.lat;
	      _this.mouse_.lng = latLng.lng;
	
	      _this._onChildMouseMove();
	
	      if (currTime - _this.dragTime_ < K_IDLE_TIMEOUT) {
	        _this.fireMouseEventOnIdle_ = true;
	      } else {
	        _this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	        _this.fireMouseEventOnIdle_ = false;
	      }
	    };
	
	    _this._onClick = function () {
	      var _this$props11;
	
	      return _this.props.onClick && !_this.childMouseDownArgs_ && new Date().getTime() - _this.childMouseUpTime_ > K_IDLE_CLICK_TIMEOUT && _this.dragTime_ === 0 && (_this$props11 = _this.props).onClick.apply(_this$props11, arguments);
	    };
	
	    _this._onMapClick = function (event) {
	      if (_this.markersDispatcher_) {
	        // support touch events and recalculate mouse position on click
	        _this._onMapMouseMove(event);
	        var currTime = new Date().getTime();
	        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
	          if (_this.mouse_) {
	            _this._onClick(_extends({}, _this.mouse_, {
	              event: event
	            }));
	          }
	
	          _this.markersDispatcher_.emit('kON_CLICK', event);
	        }
	      }
	    };
	
	    _this._onMapMouseDownNative = function (event) {
	      if (!_this.mouseInMap_) return;
	
	      _this._onMapMouseDown(event);
	    };
	
	    _this._onMapMouseDown = function (event) {
	      if (_this.markersDispatcher_) {
	        var currTime = new Date().getTime();
	        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
	          // Hovered marker detected at mouse move could be deleted at mouse down time
	          // so it will be good to force hovered marker recalculation
	          _this._onMapMouseMove(event);
	          _this.markersDispatcher_.emit('kON_MDOWN', event);
	        }
	      }
	    };
	
	    _this._onMapMouseDownCapture = function () {
	      if ((0, _detect2.default)().isChrome) {
	        // to fix strange zoom in chrome
	        if (!_this.mouse_) {
	          _this.zoomControlClickTime_ = new Date().getTime();
	        }
	      }
	    };
	
	    _this._onKeyDownCapture = function () {
	      if ((0, _detect2.default)().isChrome) {
	        _this.zoomControlClickTime_ = new Date().getTime();
	      }
	    };
	
	    _this._isCenterDefined = function (center) {
	      return center && ((0, _is_plain_object2.default)(center) && (0, _isNumber2.default)(center.lat) && (0, _isNumber2.default)(center.lng) || center.length === 2 && (0, _isNumber2.default)(center[0]) && (0, _isNumber2.default)(center[1]));
	    };
	
	    _this._onBoundsChanged = function (map, maps, callExtBoundsChange) {
	      if (map) {
	        var gmC = map.getCenter();
	        _this.geoService_.setView([gmC.lat(), gmC.lng()], map.getZoom(), 0);
	      }
	
	      if ((_this.props.onChange || _this.props.onBoundsChange) && _this.geoService_.canProject()) {
	        var zoom = _this.geoService_.getZoom();
	        var bounds = _this.geoService_.getBounds();
	        var centerLatLng = _this.geoService_.getCenter();
	
	        if (!(0, _array_helper2.default)(bounds, _this.prevBounds_, kEPS)) {
	          if (callExtBoundsChange !== false) {
	            var marginBounds = _this.geoService_.getBounds(_this.props.margin);
	            if (_this.props.onBoundsChange) {
	              _this.props.onBoundsChange(_this.centerIsObject_ ? _extends({}, centerLatLng) : [centerLatLng.lat, centerLatLng.lng], zoom, bounds, marginBounds);
	            }
	
	            if (_this.props.onChange) {
	              _this.props.onChange({
	                center: _extends({}, centerLatLng),
	                zoom: zoom,
	                bounds: {
	                  nw: {
	                    lat: bounds[0],
	                    lng: bounds[1]
	                  },
	                  se: {
	                    lat: bounds[2],
	                    lng: bounds[3]
	                  },
	                  sw: {
	                    lat: bounds[4],
	                    lng: bounds[5]
	                  },
	                  ne: {
	                    lat: bounds[6],
	                    lng: bounds[7]
	                  }
	                },
	                marginBounds: {
	                  nw: {
	                    lat: marginBounds[0],
	                    lng: marginBounds[1]
	                  },
	                  se: {
	                    lat: marginBounds[2],
	                    lng: marginBounds[3]
	                  },
	                  sw: {
	                    lat: marginBounds[4],
	                    lng: marginBounds[5]
	                  },
	                  ne: {
	                    lat: marginBounds[6],
	                    lng: marginBounds[7]
	                  }
	                },
	
	                size: _this.geoService_.hasSize() ? {
	                  width: _this.geoService_.getWidth(),
	                  height: _this.geoService_.getHeight()
	                } : {
	                  width: 0,
	                  height: 0
	                }
	              });
	            }
	
	            _this.prevBounds_ = bounds;
	          }
	        }
	      }
	    };
	
	    _this._registerChild = function (ref) {
	      _this.googleMapDom_ = ref;
	    };
	
	    _this.mounted_ = false;
	    _this.initialized_ = false;
	    _this.googleApiLoadedCalled_ = false;
	
	    _this.map_ = null;
	    _this.maps_ = null;
	    _this.prevBounds_ = null;
	
	    _this.layers_ = {};
	
	    _this.mouse_ = null;
	    _this.mouseMoveTime_ = 0;
	    _this.boundingRect_ = null;
	    _this.mouseInMap_ = true;
	
	    _this.dragTime_ = 0;
	    _this.fireMouseEventOnIdle_ = false;
	    _this.updateCounter_ = 0;
	
	    _this.markersDispatcher_ = new _marker_dispatcher2.default(_this);
	    _this.geoService_ = new _geo2.default(K_GOOGLE_TILE_SIZE);
	    _this.centerIsObject_ = (0, _is_plain_object2.default)(_this.props.center);
	
	    _this.minZoom_ = DEFAULT_MIN_ZOOM;
	    _this.defaultDraggableOption_ = true;
	
	    _this.zoomControlClickTime_ = 0;
	
	    _this.childMouseDownArgs_ = null;
	    _this.childMouseUpTime_ = 0;
	
	    _this.googleMapDom_ = null;
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (_this.props.apiKey) {
	        console.warn('GoogleMap: ' + // eslint-disable-line no-console
	        'apiKey is deprecated, use ' + 'bootstrapURLKeys={{key: YOUR_API_KEY}} instead.');
	      }
	
	      if (_this.props.onBoundsChange) {
	        console.warn('GoogleMap: ' + // eslint-disable-line no-console
	        'onBoundsChange is deprecated, use ' + 'onChange({center, zoom, bounds, ...other}) instead.');
	      }
	
	      if (_this.props.center === undefined && _this.props.defaultCenter === undefined) {
	        console.warn('GoogleMap: center or defaultCenter property must be defined' // eslint-disable-line no-console
	        );
	      }
	
	      if (_this.props.zoom === undefined && _this.props.defaultZoom === undefined) {
	        console.warn('GoogleMap: zoom or defaultZoom property must be defined' // eslint-disable-line no-console
	        );
	      }
	    }
	
	    if (_this._isCenterDefined(_this.props.center || _this.props.defaultCenter)) {
	      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
	      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);
	    }
	
	    _this.zoomAnimationInProgress_ = false;
	
	    _this.state = {
	      overlayCreated: false
	    };
	    return _this;
	  }
	
	  _createClass(GoogleMap, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.mounted_ = true;
	      window.addEventListener('resize', this._onWindowResize);
	      window.addEventListener('keydown', this._onKeyDownCapture, true);
	      var mapDom = _reactDom2.default.findDOMNode(this.googleMapDom_);
	      // gmap can't prevent map drag if mousedown event already occured
	      // the only workaround I find is prevent mousedown native browser event
	      _reactDom2.default.findDOMNode(this.googleMapDom_).addEventListener('mousedown', this._onMapMouseDownNative, true);
	
	      window.addEventListener('mouseup', this._onChildMouseUp, false);
	
	      var bootstrapURLKeys = _extends({}, this.props.apiKey && { key: this.props.apiKey }, this.props.bootstrapURLKeys);
	
	      this.props.googleMapLoader(bootstrapURLKeys); // we can start load immediatly
	
	      setTimeout(function () {
	        // to detect size
	        _this2._setViewSize();
	        if (_this2._isCenterDefined(_this2.props.center || _this2.props.defaultCenter)) {
	          _this2._initMap();
	        }
	      }, 0, this);
	      if (this.props.resetBoundsOnResize) {
	        var that = this;
	        _detectElementResize2.default.addResizeListener(mapDom, that._mapDomResizeCallback);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	
	      if (process.env.NODE_ENV !== 'production') {
	        if (this.props.defaultCenter !== nextProps.defaultCenter) {
	          console.warn('GoogleMap: defaultCenter prop changed. ' + // eslint-disable-line
	          "You can't change default props.");
	        }
	
	        if (this.props.defaultZoom !== nextProps.defaultZoom) {
	          console.warn('GoogleMap: defaultZoom prop changed. ' + // eslint-disable-line
	          "You can't change default props.");
	        }
	      }
	
	      if (!this._isCenterDefined(this.props.center) && this._isCenterDefined(nextProps.center)) {
	        setTimeout(function () {
	          return _this3._initMap();
	        }, 0);
	      }
	
	      if (this.map_) {
	        var centerLatLng = this.geoService_.getCenter();
	        if (this._isCenterDefined(nextProps.center)) {
	          var nextPropsCenter = latLng2Obj(nextProps.center);
	          var currCenter = this._isCenterDefined(this.props.center) ? latLng2Obj(this.props.center) : null;
	
	          if (!currCenter || Math.abs(nextPropsCenter.lat - currCenter.lat) + Math.abs(nextPropsCenter.lng - currCenter.lng) > kEPS) {
	            if (Math.abs(nextPropsCenter.lat - centerLatLng.lat) + Math.abs(nextPropsCenter.lng - centerLatLng.lng) > kEPS) {
	              this.map_.panTo({
	                lat: nextPropsCenter.lat,
	                lng: nextPropsCenter.lng
	              });
	            }
	          }
	        }
	
	        if (nextProps.zoom !== undefined) {
	          // if zoom chaged by user
	          if (Math.abs(nextProps.zoom - this.props.zoom) > 0) {
	            this.map_.setZoom(nextProps.zoom);
	          }
	        }
	
	        if (this.props.draggable !== undefined && nextProps.draggable === undefined) {
	          // reset to default
	          this.map_.setOptions({ draggable: this.defaultDraggableOption_ });
	        } else if (this.props.draggable !== nextProps.draggable) {
	          // also prevent this on window 'mousedown' event to prevent map move
	          this.map_.setOptions({ draggable: nextProps.draggable });
	        }
	
	        // use shallowEqual to try avoid calling map._setOptions if only the ref changes
	        if (nextProps.options !== undefined && !(0, _shallowEqual2.default)(this.props.options, nextProps.options)) {
	          var mapPlainObjects = (0, _pick2.default)(this.maps_, _is_plain_object2.default);
	          var options = typeof nextProps.options === 'function' ? nextProps.options(mapPlainObjects) : nextProps.options;
	          // remove zoom, center and draggable options as these are managed by google-maps-react
	          options = (0, _omit2.default)(options, ['zoom', 'center', 'draggable']);
	
	          if ('minZoom' in options) {
	            var minZoom = this._computeMinZoom(options.minZoomOverride, options.minZoom);
	            options.minZoom = _checkMinZoom(options.minZoom, minZoom);
	          }
	
	          this.map_.setOptions(options);
	        }
	
	        if (nextProps.layerTypes !== this.props.layerTypes) {
	          Object.keys(this.layers_).forEach(function (layerKey) {
	            _this3.layers_[layerKey].setMap(null);
	            delete _this3.layers_[layerKey];
	          });
	          this._setLayers(nextProps.layerTypes);
	        }
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      // draggable does not affect inner components
	      return !(0, _shallowEqual2.default)((0, _omit2.default)(this.props, ['draggable']), (0, _omit2.default)(nextProps, ['draggable'])) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      this.markersDispatcher_.emit('kON_CHANGE');
	
	      if (this.props.hoverDistance !== prevProps.hoverDistance) {
	        this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.mounted_ = false;
	      var mapDom = _reactDom2.default.findDOMNode(this.googleMapDom_);
	      window.removeEventListener('resize', this._onWindowResize);
	      window.removeEventListener('keydown', this._onKeyDownCapture);
	      mapDom.removeEventListener('mousedown', this._onMapMouseDownNative, true);
	      window.removeEventListener('mouseup', this._onChildMouseUp, false);
	      if (this.props.resetBoundsOnResize) {
	        _detectElementResize2.default.removeResizeListener(mapDom, this._mapDomResizeCallback);
	      }
	
	      if (this.overlay_) {
	        // this triggers overlay_.onRemove(), which will unmount the <GoogleMapMarkers/>
	        this.overlay_.setMap(null);
	      }
	
	      if (this.maps_ && this.map_) {
	        // fix google, as otherwise listeners works even without map
	        this.map_.setOptions({ scrollwheel: false });
	        this.maps_.event.clearInstanceListeners(this.map_);
	      }
	
	      this.map_ = null;
	      this.maps_ = null;
	      this.markersDispatcher_.dispose();
	
	      this.resetSizeOnIdle_ = false;
	
	      delete this.map_;
	      delete this.markersDispatcher_;
	    }
	    // calc minZoom if map size available
	    // it's better to not set minZoom less than this calculation gives
	    // otherwise there is no homeomorphism between screen coordinates and map
	    // (one map coordinate can have different screen coordinates)
	
	
	    // this method works only if this.props.onChildMouseDown was called
	
	
	    // this method works only if this.props.onChildMouseDown was called
	
	
	    // K_IDLE_CLICK_TIMEOUT - looks like 300 is enough
	
	
	    // gmap can't prevent map drag if mousedown event already occured
	    // the only workaround I find is prevent mousedown native browser event
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var mapMarkerPrerender = !this.state.overlayCreated ? _react2.default.createElement(_google_map_markers_prerender2.default, {
	        experimental: this.props.experimental,
	        onChildClick: this._onChildClick,
	        onChildMouseDown: this._onChildMouseDown,
	        onChildMouseEnter: this._onChildMouseEnter,
	        onChildMouseLeave: this._onChildMouseLeave,
	        geoService: this.geoService_,
	        projectFromLeftTop: false,
	        distanceToMouse: this.props.distanceToMouse,
	        getHoverDistance: this._getHoverDistance,
	        dispatcher: this.markersDispatcher_
	      }) : null;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          style: this.props.style,
	          onMouseMove: this._onMapMouseMove,
	          onMouseDownCapture: this._onMapMouseDownCapture,
	          onClick: this._onMapClick
	        },
	        _react2.default.createElement(_google_map_map2.default, { registerChild: this._registerChild }),
	        mapMarkerPrerender
	      );
	    }
	  }]);
	
	  return GoogleMap;
	}(_react.Component);
	
	GoogleMap.propTypes = {
	  apiKey: _propTypes2.default.string,
	  bootstrapURLKeys: _propTypes2.default.any,
	
	  defaultCenter: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
	    lat: _propTypes2.default.number,
	    lng: _propTypes2.default.number
	  })]),
	  center: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
	    lat: _propTypes2.default.number,
	    lng: _propTypes2.default.number
	  })]),
	  defaultZoom: _propTypes2.default.number,
	  zoom: _propTypes2.default.number,
	  onBoundsChange: _propTypes2.default.func,
	  onChange: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  onChildClick: _propTypes2.default.func,
	  onChildMouseDown: _propTypes2.default.func,
	  onChildMouseUp: _propTypes2.default.func,
	  onChildMouseMove: _propTypes2.default.func,
	  onChildMouseEnter: _propTypes2.default.func,
	  onChildMouseLeave: _propTypes2.default.func,
	  onZoomAnimationStart: _propTypes2.default.func,
	  onZoomAnimationEnd: _propTypes2.default.func,
	  onDrag: _propTypes2.default.func,
	  onMapTypeIdChange: _propTypes2.default.func,
	  options: _propTypes2.default.any,
	  distanceToMouse: _propTypes2.default.func,
	  hoverDistance: _propTypes2.default.number,
	  debounced: _propTypes2.default.bool,
	  margin: _propTypes2.default.array,
	  googleMapLoader: _propTypes2.default.any,
	  onGoogleApiLoaded: _propTypes2.default.func,
	  yesIWantToUseGoogleMapApiInternals: _propTypes2.default.bool,
	  draggable: _propTypes2.default.bool,
	  style: _propTypes2.default.any,
	  resetBoundsOnResize: _propTypes2.default.bool,
	  layerTypes: _propTypes2.default.arrayOf(_propTypes2.default.string) };
	GoogleMap.defaultProps = {
	  distanceToMouse: function distanceToMouse(pt, mousePos /* , markerProps */) {
	    return Math.sqrt((pt.x - mousePos.x) * (pt.x - mousePos.x) + (pt.y - mousePos.y) * (pt.y - mousePos.y));
	  },
	
	  hoverDistance: 30,
	  debounced: true,
	  options: defaultOptions_,
	  googleMapLoader: _google_map_loader2.default,
	  yesIWantToUseGoogleMapApiInternals: false,
	  style: {
	    width: '100%',
	    height: '100%',
	    margin: 0,
	    padding: 0,
	    position: 'relative'
	  },
	  layerTypes: []
	};
	GoogleMap.googleMapLoader = _google_map_loader2.default;
	exports.default = GoogleMap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _eventemitter = __webpack_require__(37);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MarkerDispatcher = function (_EventEmitter) {
	  _inherits(MarkerDispatcher, _EventEmitter);
	
	  function MarkerDispatcher(gmapInstance) {
	    _classCallCheck(this, MarkerDispatcher);
	
	    var _this = _possibleConstructorReturn(this, (MarkerDispatcher.__proto__ || Object.getPrototypeOf(MarkerDispatcher)).call(this));
	
	    _this.gmapInstance = gmapInstance;
	    return _this;
	  }
	
	  _createClass(MarkerDispatcher, [{
	    key: 'getChildren',
	    value: function getChildren() {
	      return this.gmapInstance.props.children;
	    }
	  }, {
	    key: 'getMousePosition',
	    value: function getMousePosition() {
	      return this.gmapInstance.mouse_;
	    }
	  }, {
	    key: 'getUpdateCounter',
	    value: function getUpdateCounter() {
	      return this.gmapInstance.updateCounter_;
	    }
	  }, {
	    key: 'dispose',
	    value: function dispose() {
	      this.gmapInstance = null;
	      this.removeAllListeners();
	    }
	  }]);
	
	  return MarkerDispatcher;
	}(_eventemitter2.default);
	
	exports.default = MarkerDispatcher;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;
	
	  if (!events) return names;
	
	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }
	
	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }
	
	  return names;
	};
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var style = {
	  width: '100%',
	  height: '100%',
	  left: 0,
	  top: 0,
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};
	
	var GoogleMapMap = function (_Component) {
	  _inherits(GoogleMapMap, _Component);
	
	  function GoogleMapMap() {
	    _classCallCheck(this, GoogleMapMap);
	
	    return _possibleConstructorReturn(this, (GoogleMapMap.__proto__ || Object.getPrototypeOf(GoogleMapMap)).apply(this, arguments));
	  }
	
	  _createClass(GoogleMapMap, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false; // disable react on this div
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var registerChild = this.props.registerChild;
	
	      return _react2.default.createElement('div', { ref: registerChild, style: style });
	    }
	  }]);
	
	  return GoogleMapMap;
	}(_react.Component);
	
	exports.default = GoogleMapMap;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _shallowEqual = __webpack_require__(35);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _omit = __webpack_require__(40);
	
	var _omit2 = _interopRequireDefault(_omit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types */
	
	var mainStyle = {
	  width: '100%',
	  height: '100%',
	  left: 0,
	  top: 0,
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};
	
	var style = {
	  width: 0,
	  height: 0,
	  left: 0,
	  top: 0,
	  backgroundColor: 'transparent',
	  position: 'absolute'
	};
	
	var GoogleMapMarkers = function (_Component) {
	  _inherits(GoogleMapMarkers, _Component);
	
	  function GoogleMapMarkers(props) {
	    _classCallCheck(this, GoogleMapMarkers);
	
	    var _this = _possibleConstructorReturn(this, (GoogleMapMarkers.__proto__ || Object.getPrototypeOf(GoogleMapMarkers)).call(this, props));
	
	    _this._getState = function () {
	      return {
	        children: _this.props.dispatcher.getChildren(),
	        updateCounter: _this.props.dispatcher.getUpdateCounter()
	      };
	    };
	
	    _this._onChangeHandler = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }
	
	      var prevChildCount = (_this.state.children || []).length;
	      var state = _this._getState();
	
	      _this.setState(state, function () {
	        return (state.children || []).length !== prevChildCount && _this._onMouseChangeHandler();
	      });
	    };
	
	    _this._onChildClick = function () {
	      if (_this.props.onChildClick) {
	        if (_this.hoverChildProps_) {
	          var hoverKey = _this.hoverKey_;
	          var childProps = _this.hoverChildProps_;
	          // click works only on hovered item
	          _this.props.onChildClick(hoverKey, childProps);
	        }
	      }
	    };
	
	    _this._onChildMouseDown = function () {
	      if (_this.props.onChildMouseDown) {
	        if (_this.hoverChildProps_) {
	          var hoverKey = _this.hoverKey_;
	          var childProps = _this.hoverChildProps_;
	          // works only on hovered item
	          _this.props.onChildMouseDown(hoverKey, childProps);
	        }
	      }
	    };
	
	    _this._onChildMouseEnter = function (hoverKey, childProps) {
	      if (!_this.dimesionsCache_) {
	        return;
	      }
	
	      if (_this.props.onChildMouseEnter) {
	        _this.props.onChildMouseEnter(hoverKey, childProps);
	      }
	
	      _this.hoverChildProps_ = childProps;
	      _this.hoverKey_ = hoverKey;
	      _this.setState({ hoverKey: hoverKey });
	    };
	
	    _this._onChildMouseLeave = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }
	
	      var hoverKey = _this.hoverKey_;
	      var childProps = _this.hoverChildProps_;
	
	      if (hoverKey !== undefined && hoverKey !== null) {
	        if (_this.props.onChildMouseLeave) {
	          _this.props.onChildMouseLeave(hoverKey, childProps);
	        }
	
	        _this.hoverKey_ = null;
	        _this.hoverChildProps_ = null;
	        _this.setState({ hoverKey: null });
	      }
	    };
	
	    _this._onMouseAllow = function (value) {
	      if (!value) {
	        _this._onChildMouseLeave();
	      }
	
	      _this.allowMouse_ = value;
	    };
	
	    _this._onMouseChangeHandler = function () {
	      if (_this.allowMouse_) {
	        _this._onMouseChangeHandlerRaf();
	      }
	    };
	
	    _this._onMouseChangeHandlerRaf = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }
	
	      var mp = _this.props.dispatcher.getMousePosition();
	
	      if (mp) {
	        var distances = [];
	        var hoverDistance = _this.props.getHoverDistance();
	
	        _react2.default.Children.forEach(_this.state.children, function (child, childIndex) {
	          if (!child) return;
	          // layers
	          if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
	            return;
	          }
	
	          var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;
	          var dist = _this.props.distanceToMouse(_this.dimesionsCache_[childKey], mp, child.props);
	          if (dist < hoverDistance) {
	            distances.push({
	              key: childKey,
	              dist: dist,
	              props: child.props
	            });
	          }
	        });
	
	        if (distances.length) {
	          distances.sort(function (a, b) {
	            return a.dist - b.dist;
	          });
	          var hoverKey = distances[0].key;
	          var childProps = distances[0].props;
	
	          if (_this.hoverKey_ !== hoverKey) {
	            _this._onChildMouseLeave();
	
	            _this._onChildMouseEnter(hoverKey, childProps);
	          }
	        } else {
	          _this._onChildMouseLeave();
	        }
	      } else {
	        _this._onChildMouseLeave();
	      }
	    };
	
	    _this._getDimensions = function (key) {
	      var childKey = key;
	      return _this.dimesionsCache_[childKey];
	    };
	
	    _this.props.dispatcher.on('kON_CHANGE', _this._onChangeHandler);
	    _this.props.dispatcher.on('kON_MOUSE_POSITION_CHANGE', _this._onMouseChangeHandler);
	    _this.props.dispatcher.on('kON_CLICK', _this._onChildClick);
	    _this.props.dispatcher.on('kON_MDOWN', _this._onChildMouseDown);
	
	    _this.dimesionsCache_ = {};
	    _this.hoverKey_ = null;
	    _this.hoverChildProps_ = null;
	    _this.allowMouse_ = true;
	
	    _this.state = _extends({}, _this._getState(), { hoverKey: null });
	    return _this;
	  }
	
	  _createClass(GoogleMapMarkers, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.props.experimental === true) {
	        return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)((0, _omit2.default)(this.state, ['hoverKey']), (0, _omit2.default)(nextState, ['hoverKey']));
	      }
	
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.dispatcher.removeListener('kON_CHANGE', this._onChangeHandler);
	      this.props.dispatcher.removeListener('kON_MOUSE_POSITION_CHANGE', this._onMouseChangeHandler);
	      this.props.dispatcher.removeListener('kON_CLICK', this._onChildClick);
	      this.props.dispatcher.removeListener('kON_MDOWN', this._onChildMouseDown);
	
	      this.dimesionsCache_ = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var mainElementStyle = this.props.style || mainStyle;
	      this.dimesionsCache_ = {};
	
	      var markers = _react2.default.Children.map(this.state.children, function (child, childIndex) {
	        if (!child) return undefined;
	        if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
	          return _react2.default.cloneElement(child, {
	            $geoService: _this2.props.geoService,
	            $onMouseAllow: _this2._onMouseAllow,
	            $prerender: _this2.props.prerender
	          });
	        }
	
	        var latLng = child.props.latLng !== undefined ? child.props.latLng : { lat: child.props.lat, lng: child.props.lng };
	
	        var pt = _this2.props.geoService.project(latLng, _this2.props.projectFromLeftTop);
	
	        var stylePtPos = {
	          left: pt.x,
	          top: pt.y
	        };
	
	        var dx = 0;
	        var dy = 0;
	
	        if (!_this2.props.projectFromLeftTop) {
	          // center projection
	          if (_this2.props.geoService.hasSize()) {
	            dx = _this2.props.geoService.getWidth() / 2;
	            dy = _this2.props.geoService.getHeight() / 2;
	          }
	        }
	
	        // to prevent rerender on child element i need to pass
	        // const params $getDimensions and $dimensionKey instead of dimension object
	        var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;
	
	        _this2.dimesionsCache_[childKey] = _extends({
	          x: pt.x + dx,
	          y: pt.y + dy
	        }, latLng);
	
	        return _react2.default.createElement(
	          'div',
	          {
	            key: childKey,
	            style: _extends({}, style, stylePtPos),
	            className: child.props.$markerHolderClassName
	          },
	          _react2.default.cloneElement(child, {
	            $hover: childKey === _this2.state.hoverKey,
	            $getDimensions: _this2._getDimensions,
	            $dimensionKey: childKey,
	            $geoService: _this2.props.geoService,
	            $onMouseAllow: _this2._onMouseAllow,
	            $prerender: _this2.props.prerender
	          })
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { style: mainElementStyle },
	        markers
	      );
	    }
	  }]);
	
	  return GoogleMapMarkers;
	}(_react.Component);
	
	GoogleMapMarkers.propTypes = {
	  geoService: _propTypes2.default.any,
	  style: _propTypes2.default.any,
	  distanceToMouse: _propTypes2.default.func,
	  dispatcher: _propTypes2.default.any,
	  onChildClick: _propTypes2.default.func,
	  onChildMouseDown: _propTypes2.default.func,
	  onChildMouseLeave: _propTypes2.default.func,
	  onChildMouseEnter: _propTypes2.default.func,
	  getHoverDistance: _propTypes2.default.func,
	  projectFromLeftTop: _propTypes2.default.bool,
	  prerender: _propTypes2.default.bool
	};
	GoogleMapMarkers.defaultProps = {
	  projectFromLeftTop: false,
	  prerender: false
	};
	exports.default = GoogleMapMarkers;

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/utils/omit.js
	var omit = function omit(obj, keys) {
	  var rest = _objectWithoutProperties(obj, []);
	
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (key in rest) {
	      delete rest[key];
	    }
	  }
	  return rest;
	};
	
	exports.default = omit;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    _react2.default.createElement(_google_map_markers2.default, _extends({}, props, { prerender: true }))
	  );
	};
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _google_map_markers = __webpack_require__(39);
	
	var _google_map_markers2 = _interopRequireDefault(_google_map_markers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var style = {
	  width: '50%',
	  height: '50%',
	  left: '50%',
	  top: '50%',
	  // backgroundColor: 'red',
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = googleMapLoader;
	/* eslint-disable no-console */
	var $script_ = null;
	
	var loadPromise_ = void 0;
	
	var resolveCustomPromise_ = void 0;
	var _customPromise = new Promise(function (resolve) {
	  resolveCustomPromise_ = resolve;
	});
	
	// TODO add libraries language and other map options
	function googleMapLoader(bootstrapURLKeys) {
	  if (!$script_) {
	    $script_ = __webpack_require__(43); // eslint-disable-line
	  }
	
	  // call from outside google-map-react
	  // will be as soon as loadPromise_ resolved
	  if (!bootstrapURLKeys) {
	    return _customPromise;
	  }
	
	  if (loadPromise_) {
	    return loadPromise_;
	  }
	
	  loadPromise_ = new Promise(function (resolve, reject) {
	    if (typeof window === 'undefined') {
	      reject(new Error('google map cannot be loaded outside browser env'));
	      return;
	    }
	
	    if (window.google && window.google.maps) {
	      resolve(window.google.maps);
	      return;
	    }
	
	    if (typeof window._$_google_map_initialize_$_ !== 'undefined') {
	      reject(new Error('google map initialization error'));
	    }
	
	    window._$_google_map_initialize_$_ = function () {
	      delete window._$_google_map_initialize_$_;
	      resolve(window.google.maps);
	    };
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.keys(bootstrapURLKeys).indexOf('callback') > -1) {
	        console.error('"callback" key in bootstrapURLKeys is not allowed, ' + // eslint-disable-line
	        'use onGoogleApiLoaded property instead');
	        throw new Error('"callback" key in bootstrapURLKeys is not allowed, ' + 'use onGoogleApiLoaded property instead');
	      }
	    }
	
	    var queryString = Object.keys(bootstrapURLKeys).reduce(function (r, key) {
	      return r + '&' + key + '=' + bootstrapURLKeys[key];
	    }, '');
	
	    $script_('https://maps.googleapis.com/maps/api/js?callback=_$_google_map_initialize_$_' + queryString, function () {
	      return typeof window.google === 'undefined' && reject(new Error('google map initialization error (not loaded)'));
	    });
	  });
	
	  resolveCustomPromise_(loadPromise_);
	
	  return loadPromise_;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * $script.js JS loader & dependency manager
	  * https://github.com/ded/script.js
	  * (c) Dustin Diaz 2014 | License MIT
	  */
	
	(function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	})('$script', function () {
	  var doc = document
	    , head = doc.getElementsByTagName('head')[0]
	    , s = 'string'
	    , f = false
	    , push = 'push'
	    , readyState = 'readyState'
	    , onreadystatechange = 'onreadystatechange'
	    , list = {}
	    , ids = {}
	    , delay = {}
	    , scripts = {}
	    , scriptpath
	    , urlArgs
	
	  function every(ar, fn) {
	    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
	    return 1
	  }
	  function each(ar, fn) {
	    every(ar, function (el) {
	      return !fn(el)
	    })
	  }
	
	  function $script(paths, idOrDone, optDone) {
	    paths = paths[push] ? paths : [paths]
	    var idOrDoneIsDone = idOrDone && idOrDone.call
	      , done = idOrDoneIsDone ? idOrDone : optDone
	      , id = idOrDoneIsDone ? paths.join('') : idOrDone
	      , queue = paths.length
	    function loopFn(item) {
	      return item.call ? item() : list[item]
	    }
	    function callback() {
	      if (!--queue) {
	        list[id] = 1
	        done && done()
	        for (var dset in delay) {
	          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
	        }
	      }
	    }
	    setTimeout(function () {
	      each(paths, function loading(path, force) {
	        if (path === null) return callback()
	        
	        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
	          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
	        }
	        
	        if (scripts[path]) {
	          if (id) ids[id] = 1
	          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
	        }
	
	        scripts[path] = 1
	        if (id) ids[id] = 1
	        create(path, callback)
	      })
	    }, 0)
	    return $script
	  }
	
	  function create(path, fn) {
	    var el = doc.createElement('script'), loaded
	    el.onload = el.onerror = el[onreadystatechange] = function () {
	      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
	      el.onload = el[onreadystatechange] = null
	      loaded = 1
	      scripts[path] = 2
	      fn()
	    }
	    el.async = 1
	    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
	    head.insertBefore(el, head.lastChild)
	  }
	
	  $script.get = create
	
	  $script.order = function (scripts, id, done) {
	    (function callback(s) {
	      s = scripts.shift()
	      !scripts.length ? $script(s, id, done) : $script(s, callback)
	    }())
	  }
	
	  $script.path = function (p) {
	    scriptpath = p
	  }
	  $script.urlArgs = function (str) {
	    urlArgs = str;
	  }
	  $script.ready = function (deps, ready, req) {
	    deps = deps[push] ? deps : [deps]
	    var missing = [];
	    !each(deps, function (dep) {
	      list[dep] || missing[push](dep);
	    }) && every(deps, function (dep) {return list[dep]}) ?
	      ready() : !function (key) {
	      delay[key] = delay[key] || []
	      delay[key][push](ready)
	      req && req(missing)
	    }(deps.join('|'))
	    return $script
	  }
	
	  $script.done = function (idOrDone) {
	    $script([null], idOrDone)
	  }
	
	  return $script
	});


/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = detectBrowser;
	// http://stackoverflow.com/questions/5899783/detect-safari-chrome-ie-firefox-opera-with-user-agent
	var detectBrowserResult_ = null;
	
	function detectBrowser() {
	  if (detectBrowserResult_) {
	    return detectBrowserResult_;
	  }
	
	  if (typeof navigator !== 'undefined') {
	    var isExplorer = navigator.userAgent.indexOf('MSIE') > -1;
	    var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
	    var isOpera = navigator.userAgent.toLowerCase().indexOf('op') > -1;
	
	    var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
	    var isSafari = navigator.userAgent.indexOf('Safari') > -1;
	
	    if (isChrome && isSafari) {
	      isSafari = false;
	    }
	
	    if (isChrome && isOpera) {
	      isChrome = false;
	    }
	
	    detectBrowserResult_ = {
	      isExplorer: isExplorer,
	      isFirefox: isFirefox,
	      isOpera: isOpera,
	      isChrome: isChrome,
	      isSafari: isSafari
	    };
	    return detectBrowserResult_;
	  }
	
	  detectBrowserResult_ = {
	    isChrome: true,
	    isExplorer: false,
	    isFirefox: false,
	    isOpera: false,
	    isSafari: false
	  };
	
	  return detectBrowserResult_;
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _pointGeometry = __webpack_require__(46);
	
	var _pointGeometry2 = _interopRequireDefault(_pointGeometry);
	
	var _lat_lng = __webpack_require__(47);
	
	var _lat_lng2 = _interopRequireDefault(_lat_lng);
	
	var _transform = __webpack_require__(49);
	
	var _transform2 = _interopRequireDefault(_transform);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Geo = function () {
	  function Geo(tileSize) {
	    _classCallCheck(this, Geo);
	
	    // left_top view пользует гугл
	    // super();
	    this.hasSize_ = false;
	    this.hasView_ = false;
	    this.transform_ = new _transform2.default(tileSize || 512);
	  }
	
	  _createClass(Geo, [{
	    key: 'setView',
	    value: function setView(center, zoom, bearing) {
	      this.transform_.center = _lat_lng2.default.convert(center);
	      this.transform_.zoom = +zoom;
	      this.transform_.bearing = +bearing;
	      this.hasView_ = true;
	    }
	  }, {
	    key: 'setViewSize',
	    value: function setViewSize(width, height) {
	      this.transform_.width = width;
	      this.transform_.height = height;
	      this.hasSize_ = true;
	    }
	  }, {
	    key: 'canProject',
	    value: function canProject() {
	      return this.hasSize_ && this.hasView_;
	    }
	  }, {
	    key: 'hasSize',
	    value: function hasSize() {
	      return this.hasSize_;
	    }
	  }, {
	    key: 'unproject',
	    value: function unproject(ptXY, viewFromLeftTop) {
	      var ptRes = void 0;
	      if (viewFromLeftTop) {
	        var ptxy = _extends({}, ptXY);
	        ptxy.x -= this.transform_.width / 2;
	        ptxy.y -= this.transform_.height / 2;
	        ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptxy));
	      } else {
	        ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptXY));
	      }
	
	      ptRes.lng -= 360 * Math.round(ptRes.lng / 360); // convert 2 google format
	      return ptRes;
	    }
	  }, {
	    key: 'project',
	    value: function project(ptLatLng, viewFromLeftTop) {
	      if (viewFromLeftTop) {
	        var pt = this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
	        pt.x -= this.transform_.worldSize * Math.round(pt.x / this.transform_.worldSize);
	
	        pt.x += this.transform_.width / 2;
	        pt.y += this.transform_.height / 2;
	
	        return pt;
	      }
	
	      return this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
	    }
	  }, {
	    key: 'getWidth',
	    value: function getWidth() {
	      return this.transform_.width;
	    }
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      return this.transform_.height;
	    }
	  }, {
	    key: 'getZoom',
	    value: function getZoom() {
	      return this.transform_.zoom;
	    }
	  }, {
	    key: 'getCenter',
	    value: function getCenter() {
	      var ptRes = this.transform_.pointLocation({ x: 0, y: 0 });
	
	      return ptRes;
	    }
	  }, {
	    key: 'getBounds',
	    value: function getBounds(margins, roundFactor) {
	      var bndT = margins && margins[0] || 0;
	      var bndR = margins && margins[1] || 0;
	      var bndB = margins && margins[2] || 0;
	      var bndL = margins && margins[3] || 0;
	
	      if (this.getWidth() - bndR - bndL > 0 && this.getHeight() - bndT - bndB > 0) {
	        var topLeftCorner = this.unproject({
	          x: bndL - this.getWidth() / 2,
	          y: bndT - this.getHeight() / 2
	        });
	        var bottomRightCorner = this.unproject({
	          x: this.getWidth() / 2 - bndR,
	          y: this.getHeight() / 2 - bndB
	        });
	
	        var res = [topLeftCorner.lat, topLeftCorner.lng, // NW
	        bottomRightCorner.lat, bottomRightCorner.lng, // SE
	        bottomRightCorner.lat, topLeftCorner.lng, // SW
	        topLeftCorner.lat, bottomRightCorner.lng];
	
	        if (roundFactor) {
	          res = res.map(function (r) {
	            return Math.round(r * roundFactor) / roundFactor;
	          });
	        }
	        return res;
	      }
	
	      return [0, 0, 0, 0];
	    }
	  }]);
	
	  return Geo;
	}();
	
	exports.default = Geo;

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = Point;
	
	function Point(x, y) {
	    this.x = x;
	    this.y = y;
	}
	
	Point.prototype = {
	    clone: function() { return new Point(this.x, this.y); },
	
	    add:     function(p) { return this.clone()._add(p);     },
	    sub:     function(p) { return this.clone()._sub(p);     },
	    mult:    function(k) { return this.clone()._mult(k);    },
	    div:     function(k) { return this.clone()._div(k);     },
	    rotate:  function(a) { return this.clone()._rotate(a);  },
	    matMult: function(m) { return this.clone()._matMult(m); },
	    unit:    function() { return this.clone()._unit(); },
	    perp:    function() { return this.clone()._perp(); },
	    round:   function() { return this.clone()._round(); },
	
	    mag: function() {
	        return Math.sqrt(this.x * this.x + this.y * this.y);
	    },
	
	    equals: function(p) {
	        return this.x === p.x &&
	               this.y === p.y;
	    },
	
	    dist: function(p) {
	        return Math.sqrt(this.distSqr(p));
	    },
	
	    distSqr: function(p) {
	        var dx = p.x - this.x,
	            dy = p.y - this.y;
	        return dx * dx + dy * dy;
	    },
	
	    angle: function() {
	        return Math.atan2(this.y, this.x);
	    },
	
	    angleTo: function(b) {
	        return Math.atan2(this.y - b.y, this.x - b.x);
	    },
	
	    angleWith: function(b) {
	        return this.angleWithSep(b.x, b.y);
	    },
	
	    // Find the angle of the two vectors, solving the formula for the cross product a x b = |a||b|sin(θ) for θ.
	    angleWithSep: function(x, y) {
	        return Math.atan2(
	            this.x * y - this.y * x,
	            this.x * x + this.y * y);
	    },
	
	    _matMult: function(m) {
	        var x = m[0] * this.x + m[1] * this.y,
	            y = m[2] * this.x + m[3] * this.y;
	        this.x = x;
	        this.y = y;
	        return this;
	    },
	
	    _add: function(p) {
	        this.x += p.x;
	        this.y += p.y;
	        return this;
	    },
	
	    _sub: function(p) {
	        this.x -= p.x;
	        this.y -= p.y;
	        return this;
	    },
	
	    _mult: function(k) {
	        this.x *= k;
	        this.y *= k;
	        return this;
	    },
	
	    _div: function(k) {
	        this.x /= k;
	        this.y /= k;
	        return this;
	    },
	
	    _unit: function() {
	        this._div(this.mag());
	        return this;
	    },
	
	    _perp: function() {
	        var y = this.y;
	        this.y = this.x;
	        this.x = -y;
	        return this;
	    },
	
	    _rotate: function(angle) {
	        var cos = Math.cos(angle),
	            sin = Math.sin(angle),
	            x = cos * this.x - sin * this.y,
	            y = sin * this.x + cos * this.y;
	        this.x = x;
	        this.y = y;
	        return this;
	    },
	
	    _round: function() {
	        this.x = Math.round(this.x);
	        this.y = Math.round(this.y);
	        return this;
	    }
	};
	
	// constructs Point from an array if necessary
	Point.convert = function (a) {
	    if (a instanceof Point) {
	        return a;
	    }
	    if (Array.isArray(a)) {
	        return new Point(a[0], a[1]);
	    }
	    return a;
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _wrap2 = __webpack_require__(48);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LatLng = function () {
	  function LatLng(lat, lng) {
	    _classCallCheck(this, LatLng);
	
	    if (isNaN(lat) || isNaN(lng)) {
	      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	    }
	    this.lat = +lat;
	    this.lng = +lng;
	  }
	
	  _createClass(LatLng, [{
	    key: 'wrap',
	    value: function wrap() {
	      return new LatLng(this.lat, (0, _wrap2.wrap)(this.lng, -180, 180));
	    }
	  }]);
	
	  return LatLng;
	}();
	
	LatLng.convert = function (a) {
	  if (a instanceof LatLng) {
	    return a;
	  }
	
	  if (Array.isArray(a)) {
	    return new LatLng(a[0], a[1]);
	  }
	
	  if ('lng' in a && 'lat' in a) {
	    return new LatLng(a.lat, a.lng);
	  }
	
	  return a;
	};
	
	exports.default = LatLng;

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wrap = wrap;
	/* eslint-disable import/prefer-default-export */
	
	function wrap(n, min, max) {
	  var d = max - min;
	  return n === max ? n : ((n - min) % d + d) % d + min;
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */
	
	
	var _pointGeometry = __webpack_require__(46);
	
	var _pointGeometry2 = _interopRequireDefault(_pointGeometry);
	
	var _lat_lng = __webpack_require__(47);
	
	var _lat_lng2 = _interopRequireDefault(_lat_lng);
	
	var _wrap = __webpack_require__(48);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// A single transform, generally used for a single tile to be scaled, rotated, and zoomed.
	var Transform = function () {
	  function Transform(tileSize, minZoom, maxZoom) {
	    _classCallCheck(this, Transform);
	
	    this.tileSize = tileSize || 512; // constant
	
	    this._minZoom = minZoom || 0;
	    this._maxZoom = maxZoom || 52;
	
	    this.latRange = [-85.05113, 85.05113];
	
	    this.width = 0;
	    this.height = 0;
	    this.zoom = 0;
	    this.center = new _lat_lng2.default(0, 0);
	    this.angle = 0;
	  }
	
	  _createClass(Transform, [{
	    key: 'zoomScale',
	    value: function zoomScale(zoom) {
	      return Math.pow(2, zoom);
	    }
	  }, {
	    key: 'scaleZoom',
	    value: function scaleZoom(scale) {
	      return Math.log(scale) / Math.LN2;
	    }
	  }, {
	    key: 'project',
	    value: function project(latlng, worldSize) {
	      return new _pointGeometry2.default(this.lngX(latlng.lng, worldSize), this.latY(latlng.lat, worldSize));
	    }
	  }, {
	    key: 'unproject',
	    value: function unproject(point, worldSize) {
	      return new _lat_lng2.default(this.yLat(point.y, worldSize), this.xLng(point.x, worldSize));
	    }
	  }, {
	    key: 'lngX',
	
	
	    // lat/lon <-> absolute pixel coords convertion
	    value: function lngX(lon, worldSize) {
	      return (180 + lon) * (worldSize || this.worldSize) / 360;
	    }
	
	    // latitude to absolute y coord
	
	  }, {
	    key: 'latY',
	    value: function latY(lat, worldSize) {
	      var y = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
	      return (180 - y) * (worldSize || this.worldSize) / 360;
	    }
	  }, {
	    key: 'xLng',
	    value: function xLng(x, worldSize) {
	      return x * 360 / (worldSize || this.worldSize) - 180;
	    }
	  }, {
	    key: 'yLat',
	    value: function yLat(y, worldSize) {
	      var y2 = 180 - y * 360 / (worldSize || this.worldSize);
	      return 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
	    }
	  }, {
	    key: 'locationPoint',
	    value: function locationPoint(latlng) {
	      var p = this.project(latlng);
	      return this.centerPoint._sub(this.point._sub(p)._rotate(this.angle));
	    }
	  }, {
	    key: 'pointLocation',
	    value: function pointLocation(p) {
	      var p2 = this.centerPoint._sub(p)._rotate(-this.angle);
	      return this.unproject(this.point.sub(p2));
	    }
	  }, {
	    key: 'minZoom',
	    get: function get() {
	      return this._minZoom;
	    },
	    set: function set(zoom) {
	      this._minZoom = zoom;
	      this.zoom = Math.max(this.zoom, zoom);
	    }
	  }, {
	    key: 'maxZoom',
	    get: function get() {
	      return this._maxZoom;
	    },
	    set: function set(zoom) {
	      this._maxZoom = zoom;
	      this.zoom = Math.min(this.zoom, zoom);
	    }
	  }, {
	    key: 'worldSize',
	    get: function get() {
	      return this.tileSize * this.scale;
	    }
	  }, {
	    key: 'centerPoint',
	    get: function get() {
	      return new _pointGeometry2.default(0, 0); // this.size._div(2);
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return new _pointGeometry2.default(this.width, this.height);
	    }
	  }, {
	    key: 'bearing',
	    get: function get() {
	      return -this.angle / Math.PI * 180;
	    },
	    set: function set(bearing) {
	      this.angle = -(0, _wrap.wrap)(bearing, -180, 180) * Math.PI / 180;
	    }
	  }, {
	    key: 'zoom',
	    get: function get() {
	      return this._zoom;
	    },
	    set: function set(zoom) {
	      var zoomV = Math.min(Math.max(zoom, this.minZoom), this.maxZoom);
	      this._zoom = zoomV;
	      this.scale = this.zoomScale(zoomV);
	      this.tileZoom = Math.floor(zoomV);
	      this.zoomFraction = zoomV - this.tileZoom;
	    }
	  }, {
	    key: 'x',
	    get: function get() {
	      return this.lngX(this.center.lng);
	    }
	  }, {
	    key: 'y',
	    get: function get() {
	      return this.latY(this.center.lat);
	    }
	  }, {
	    key: 'point',
	    get: function get() {
	      return new _pointGeometry2.default(this.x, this.y);
	    }
	  }]);
	
	  return Transform;
	}();
	
	exports.default = Transform;

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isArraysEqualEps;
	function isArraysEqualEps(arrayA, arrayB, eps) {
	  if (arrayA && arrayB) {
	    for (var i = 0; i !== arrayA.length; ++i) {
	      if (Math.abs(arrayA[i] - arrayB[i]) > eps) {
	        return false;
	      }
	    }
	    return true;
	  }
	  return false;
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = isPlainObject;
	// source taken from https://github.com/rackt/redux/blob/master/src/utils/isPlainObject.js
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	    return false;
	  }
	
	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;
	
	  if (proto === null) {
	    return true;
	  }
	
	  var constructor = proto.constructor;
	
	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = pick;
	// source taken from https://github.com/rackt/redux/blob/master/src/utils/pick.js
	
	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key]; // eslint-disable-line
	    }
	    return result;
	  }, {});
	}

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = raf;
	function raf(callback) {
	  if (window.requestAnimationFrame) {
	    return window.requestAnimationFrame(callback);
	  }
	
	  var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	
	  return nativeRaf ? nativeRaf(callback) : window.setTimeout(callback, 1e3 / 60);
	}

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var log2 = Math.log2 ? Math.log2 : function (x) {
	  return Math.log(x) / Math.LN2;
	};
	
	exports.default = log2;

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = isNumber;
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
	}
	
	var objectToString = Object.prototype.toString;
	
	function isNumber(value) {
	  var numberTag = '[object Number]';
	  return typeof value === 'number' || isObjectLike(value) && objectToString.call(value) === numberTag;
	}

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	/* eslint-disable */
	/**
	* Detect Element Resize.
	* Forked in order to guard against unsafe 'window' and 'document' references.
	*
	* https://github.com/sdecima/javascript-detect-element-resize
	* Sebastian Decima
	*
	* version: 0.5.3
	**/
	
	// Reliable `window` and `document` detection
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	// Check `document` and `window` in case of server-side rendering
	var _window;
	if (canUseDOM) {
	  _window = window;
	} else if (typeof self !== 'undefined') {
	  _window = self;
	} else {
	  _window = undefined;
	}
	
	var attachEvent = typeof document !== 'undefined' && document.attachEvent;
	var stylesCreated = false;
	
	if (canUseDOM && !attachEvent) {
	  var requestFrame = function () {
	    var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
	      return _window.setTimeout(fn, 20);
	    };
	    return function (fn) {
	      return raf(fn);
	    };
	  }();
	
	  var cancelFrame = function () {
	    var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
	    return function (id) {
	      return cancel(id);
	    };
	  }();
	
	  var resetTriggers = function resetTriggers(element) {
	    var triggers = element.__resizeTriggers__,
	        expand = triggers.firstElementChild,
	        contract = triggers.lastElementChild,
	        expandChild = expand.firstElementChild;
	    contract.scrollLeft = contract.scrollWidth;
	    contract.scrollTop = contract.scrollHeight;
	    expandChild.style.width = expand.offsetWidth + 1 + 'px';
	    expandChild.style.height = expand.offsetHeight + 1 + 'px';
	    expand.scrollLeft = expand.scrollWidth;
	    expand.scrollTop = expand.scrollHeight;
	  };
	
	  var checkTriggers = function checkTriggers(element) {
	    return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
	  };
	
	  var scrollListener = function scrollListener(e) {
	    var element = this;
	    resetTriggers(this);
	    if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
	    this.__resizeRAF__ = requestFrame(function () {
	      if (checkTriggers(element)) {
	        element.__resizeLast__.width = element.offsetWidth;
	        element.__resizeLast__.height = element.offsetHeight;
	        element.__resizeListeners__.forEach(function (fn) {
	          fn.call(element, e);
	        });
	      }
	    });
	  };
	
	  /* Detect CSS Animations support to detect element display/re-attach */
	  var animation = false,
	      animationstring = 'animation',
	      keyframeprefix = '',
	      animationstartevent = 'animationstart',
	      domPrefixes = 'Webkit Moz O ms'.split(' '),
	      startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
	      pfx = '';
	
	  if (canUseDOM) {
	    var elm = document.createElement('fakeelement');
	    if (elm.style.animationName !== undefined) {
	      animation = true;
	    }
	
	    if (animation === false) {
	      for (var i = 0; i < domPrefixes.length; i++) {
	        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
	          pfx = domPrefixes[i];
	          animationstring = pfx + 'Animation';
	          keyframeprefix = '-' + pfx.toLowerCase() + '-';
	          animationstartevent = startEvents[i];
	          animation = true;
	          break;
	        }
	      }
	    }
	  }
	
	  var animationName = 'resizeanim';
	  var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
	  var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
	}
	
	var createStyles = function createStyles() {
	  if (!stylesCreated) {
	    //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
	    var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
	        head = document.head || document.getElementsByTagName('head')[0],
	        style = document.createElement('style');
	
	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }
	
	    head.appendChild(style);
	    stylesCreated = true;
	  }
	};
	
	var addResizeListener = function addResizeListener(element, fn) {
	  if (element.parentNode === undefined) {
	    var tempParentDiv = document.createElement('div');
	    element.parentNode = tempParentDiv;
	  }
	  element = element.parentNode;
	  if (attachEvent) element.attachEvent('onresize', fn);else {
	    if (!element.__resizeTriggers__) {
	      if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
	      createStyles();
	      element.__resizeLast__ = {};
	      element.__resizeListeners__ = [];
	      (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
	      element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
	      element.appendChild(element.__resizeTriggers__);
	      resetTriggers(element);
	      element.addEventListener('scroll', scrollListener, true);
	
	      /* Listen for a css animation to detect element display/re-attach */
	      animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function (e) {
	        if (e.animationName == animationName) resetTriggers(element);
	      });
	    }
	    element.__resizeListeners__.push(fn);
	  }
	};
	
	var removeResizeListener = function removeResizeListener(element, fn) {
	  element = element.parentNode;
	  if (attachEvent) element.detachEvent('onresize', fn);else {
	    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	    if (!element.__resizeListeners__.length) {
	      element.removeEventListener('scroll', scrollListener);
	      element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
	    }
	  }
	};
	
	module.exports = {
	  addResizeListener: addResizeListener,
	  removeResizeListener: removeResizeListener
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _textComponent = __webpack_require__(5);
	
	var _textComponent2 = _interopRequireDefault(_textComponent);
	
	var _iconComponent = __webpack_require__(17);
	
	var _iconComponent2 = _interopRequireDefault(_iconComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MapFinderFooterComponent = function (_React$Component) {
	    _inherits(MapFinderFooterComponent, _React$Component);
	
	    function MapFinderFooterComponent(props) {
	        _classCallCheck(this, MapFinderFooterComponent);
	
	        var _this = _possibleConstructorReturn(this, (MapFinderFooterComponent.__proto__ || Object.getPrototypeOf(MapFinderFooterComponent)).call(this, props));
	
	        _this.state = {
	            data: _this.props.data
	
	        };
	        return _this;
	    }
	
	    _createClass(MapFinderFooterComponent, [{
	        key: 'onClearFilter',
	        value: function onClearFilter(event) {
	            event.stopPropagation();
	            event.preventDefault();
	
	            if (this.props.onClearFilter) {
	                this.props.onClearFilter();
	            }
	        }
	    }, {
	        key: 'onSearchAgain',
	        value: function onSearchAgain(event) {
	            event.stopPropagation();
	            event.preventDefault();
	
	            if (this.props.onSearchAgain) {
	                this.props.onSearchAgain();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var hrefStyle = { color: 'rgba(0,154,222,1)', fontSize: 12, fontFamily: 'Roboto', fontWeight: '500' };
	            var textStyle = { color: 'rgba(155,155,155,1)', fontSize: 12, fontFamily: 'Roboto', fontWeight: '500' };
	            var onClearFilter = function onClearFilter(event) {
	                return _this2.onClearFilter(event);
	            };
	            var onSearchAgain = function onSearchAgain(event) {
	                return _this2.onSearchAgain(event);
	            };
	            return _react2.default.createElement(
	                'div',
	                { className: 'footerContainer' },
	                _react2.default.createElement(_textComponent2.default, {
	                    text: 'Can’t find a club or indoor centre near you?  Try ',
	                    style: textStyle
	                }),
	                _react2.default.createElement(
	                    'a',
	                    { style: hrefStyle, onClick: onClearFilter },
	                    ' clearing filters'
	                ),
	                _react2.default.createElement(_textComponent2.default, {
	                    text: '  or ',
	                    style: textStyle
	                }),
	                _react2.default.createElement(
	                    'a',
	                    { style: hrefStyle, onClick: onSearchAgain },
	                    ' search again'
	                ),
	                _react2.default.createElement(
	                    'style',
	                    null,
	                    css
	                )
	            );
	        }
	    }]);
	
	    return MapFinderFooterComponent;
	}(_react2.default.Component);
	
	exports.default = MapFinderFooterComponent;
	
	
	MapFinderFooterComponent.propTypes = {
	
	    data: _propTypes2.default.any,
	    onClick: _propTypes2.default.func,
	    index: _propTypes2.default.number,
	    onClearFilter: _propTypes2.default.func,
	    onSearchAgain: _propTypes2.default.func
	};
	
	var css = '\n    .footerContainer{\n       \n        height:45px;\n        background-color:rgba(244,247,250,1);\n        border-bottom-left-radius: 4px;\n        border-bottom-right-radius: 4px;\n        padding-top:16px;\n        padding-left:8px;\n        \n    }\n';

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * The URL utils
	 *
	 * @author rocachien
	 * @company NEXLE
	 * @create 2017/02/28 15:36
	 * @update 2017/02/28 15:36
	 * @file utils/url-utils.js
	 *
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.location = location;
	exports.query = query;
	exports.getSearchWithQuery = getSearchWithQuery;
	exports.getClient = getClient;
	exports.openWindow = openWindow;
	
	var _reactRouter = __webpack_require__(59);
	
	/**
	 * Get and Set location
	 *
	 * @function location
	 * @param url
	 * Ex:
	 * - none Get current location
	 * - http://domain?param=value Go to new location
	 * - {a:'aaa', b: 'bbb'} Go to current location with new param(s)
	 *
	 * @returns current location
	 */
	function location(url) {
	    var search = "";
	    var curLocation = _reactRouter.browserHistory.getCurrentLocation();
	
	    switch (typeof url === "undefined" ? "undefined" : _typeof(url)) {
	        case "string":
	            return _reactRouter.browserHistory.push(url);
	
	        case "object":
	            for (var key in url) {
	                var val = url[key];
	
	                search += "&" + key + "=" + val;
	            }
	
	            url = curLocation.pathname + "?" + search.replace("&", "");
	
	            return _reactRouter.browserHistory.push(url);
	    }
	
	    return curLocation;
	}
	
	/**
	 * Get and Set query(ies)
	 *
	 * @function query
	 * @param params
	 * Ex:
	 * - none to get all params;
	 * - {a: "aaa"} to change one param;
	 * - {a:"MATCHED", b: "dddd", c: "0-1-2-3"} to change more
	 *
	 * @returns {*}
	 */
	
	function query(params) {
	    var curLocation = location();
	    var curQuery = curLocation.query;
	
	    if (!params || params === undefined) return curQuery;
	
	    switch (typeof params === "undefined" ? "undefined" : _typeof(params)) {
	        case "string":
	            return curQuery[params] || null;
	
	        case "object":
	
	            for (var key in params) {
	                var val = params[key];
	
	                curQuery[key] = val;
	            }
	
	            return curQuery;
	
	        default:
	            return false;
	    }
	}
	
	/**
	 * get search string with query object
	 * @param query
	 * @return {*}
	 */
	function getSearchWithQuery(query) {
	    var curLocation = location();
	
	    if (!query || query === undefined) return curLocation.search;
	
	    var search = "?";
	
	    for (var key in query) {
	        var val = query[key];
	
	        search += key + "=" + val + "&";
	    }
	
	    return search.substr(0, search.length - 1);
	}
	
	/**
	 * Get Client param
	 *
	 * @function getClient
	 * @returns {{cache: *, assoc_id: *, club_id: *, comp_id: *, team_id: *}}
	 */
	function getClient() {
	    var cl = query("c") || query("client");
	    var client = cl.split('-');
	
	    if (client.length < 5) return false;
	
	    return {
	        cache: client[0],
	        assoc_id: client[1],
	        club_id: client[2],
	        comp_id: client[3],
	        team_id: client[4]
	    };
	}
	
	/**
	 * Open window
	 *
	 * @function openWindow
	 * @param {string} url - This is url
	 * @param {string} target - This is target type: _blank, _parent, _self, _top, name
	 *
	 */
	function openWindow(url) {
	    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "_self";
	
	    if (url) window.open(url, target);
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.MemoryRouter = undefined;
	
	var _MemoryRouter2 = __webpack_require__(60);
	
	var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);
	
	var _Prompt2 = __webpack_require__(70);
	
	var _Prompt3 = _interopRequireDefault(_Prompt2);
	
	var _Redirect2 = __webpack_require__(71);
	
	var _Redirect3 = _interopRequireDefault(_Redirect2);
	
	var _Route2 = __webpack_require__(72);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	var _Router2 = __webpack_require__(68);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _StaticRouter2 = __webpack_require__(76);
	
	var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);
	
	var _Switch2 = __webpack_require__(77);
	
	var _Switch3 = _interopRequireDefault(_Switch2);
	
	var _matchPath2 = __webpack_require__(73);
	
	var _matchPath3 = _interopRequireDefault(_matchPath2);
	
	var _withRouter2 = __webpack_require__(78);
	
	var _withRouter3 = _interopRequireDefault(_withRouter2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.MemoryRouter = _MemoryRouter3.default;
	exports.Prompt = _Prompt3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	exports.Router = _Router3.default;
	exports.StaticRouter = _StaticRouter3.default;
	exports.Switch = _Switch3.default;
	exports.matchPath = _matchPath3.default;
	exports.withRouter = _withRouter3.default;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createMemoryHistory = __webpack_require__(61);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	var _Router = __webpack_require__(68);
	
	var _Router2 = _interopRequireDefault(_Router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for a <Router> that stores location in memory.
	 */
	var MemoryRouter = function (_React$Component) {
	  _inherits(MemoryRouter, _React$Component);
	
	  function MemoryRouter() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MemoryRouter);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createMemoryHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  MemoryRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };
	
	  return MemoryRouter;
	}(_react2.default.Component);
	
	MemoryRouter.propTypes = {
	  initialEntries: _propTypes2.default.array,
	  initialIndex: _propTypes2.default.number,
	  getUserConfirmation: _propTypes2.default.func,
	  keyLength: _propTypes2.default.number,
	  children: _propTypes2.default.node
	};
	exports.default = MemoryRouter;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _warning = __webpack_require__(62);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _PathUtils = __webpack_require__(63);
	
	var _LocationUtils = __webpack_require__(64);
	
	var _createTransitionManager = __webpack_require__(67);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var clamp = function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	};
	
	/**
	 * Creates a history object that stores locations in memory.
	 */
	var createMemoryHistory = function createMemoryHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var getUserConfirmation = props.getUserConfirmation,
	      _props$initialEntries = props.initialEntries,
	      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
	      _props$initialIndex = props.initialIndex,
	      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
	
	
	  var transitionManager = (0, _createTransitionManager2.default)();
	
	  var setState = function setState(nextState) {
	    _extends(history, nextState);
	
	    history.length = history.entries.length;
	
	    transitionManager.notifyListeners(history.location, history.action);
	  };
	
	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };
	
	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
	  });
	
	  // Public interface
	
	  var createHref = _PathUtils.createPath;
	
	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	
	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);
	
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	
	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;
	
	      var nextEntries = history.entries.slice(0);
	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }
	
	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  };
	
	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
	
	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);
	
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	
	      history.entries[history.index] = location;
	
	      setState({ action: action, location: location });
	    });
	  };
	
	  var go = function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
	
	    var action = 'POP';
	    var location = history.entries[nextIndex];
	
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  };
	
	  var goBack = function goBack() {
	    return go(-1);
	  };
	
	  var goForward = function goForward() {
	    return go(1);
	  };
	
	  var canGo = function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  };
	
	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return transitionManager.setPrompt(prompt);
	  };
	
	  var listen = function listen(listener) {
	    return transitionManager.appendListener(listener);
	  };
	
	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };
	
	  return history;
	};
	
	exports.default = createMemoryHistory;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};
	
	var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	};
	
	var stripPrefix = exports.stripPrefix = function stripPrefix(path, prefix) {
	  return path.indexOf(prefix) === 0 ? path.substr(prefix.length) : path;
	};
	
	var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	};
	
	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';
	
	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }
	
	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }
	
	  pathname = decodeURI(pathname);
	
	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};
	
	var createPath = exports.createPath = function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;
	
	
	  var path = encodeURI(pathname || '/');
	
	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;
	
	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;
	
	  return path;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.locationsAreEqual = exports.createLocation = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _resolvePathname = __webpack_require__(65);
	
	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);
	
	var _valueEqual = __webpack_require__(66);
	
	var _valueEqual2 = _interopRequireDefault(_valueEqual);
	
	var _PathUtils = __webpack_require__(63);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = (0, _PathUtils.parsePath)(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);
	
	    if (location.pathname === undefined) location.pathname = '';
	
	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }
	
	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }
	
	    if (state !== undefined && location.state === undefined) location.state = state;
	  }
	
	  location.key = key;
	
	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
	    }
	  }
	
	  return location;
	};
	
	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';
	
	var isAbsolute = function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	};
	
	// About 1.5x faster than the two-arg version of Array#splice()
	var spliceOne = function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }list.pop();
	};
	
	// This implementation is based heavily on node's url.parse
	var resolvePathname = function resolvePathname(to) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];
	
	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;
	
	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }
	
	  if (!fromParts.length) return '/';
	
	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }
	
	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];
	
	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }
	
	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
	
	  var result = fromParts.join('/');
	
	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
	
	  return result;
	};
	
	module.exports = resolvePathname;

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var valueEqual = function valueEqual(a, b) {
	  if (a === b) return true;
	
	  if (a == null || b == null) return false;
	
	  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	    return valueEqual(item, b[index]);
	  });
	
	  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);
	
	  if (aType !== bType) return false;
	
	  if (aType === 'object') {
	    var aValue = a.valueOf();
	    var bValue = b.valueOf();
	
	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
	
	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);
	
	    if (aKeys.length !== bKeys.length) return false;
	
	    return aKeys.every(function (key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }
	
	  return false;
	};
	
	exports.default = valueEqual;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _warning = __webpack_require__(62);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createTransitionManager = function createTransitionManager() {
	  var prompt = null;
	
	  var setPrompt = function setPrompt(nextPrompt) {
	    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');
	
	    prompt = nextPrompt;
	
	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  };
	
	  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;
	
	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
	
	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  };
	
	  var listeners = [];
	
	  var appendListener = function appendListener(fn) {
	    var isActive = true;
	
	    var listener = function listener() {
	      if (isActive) fn.apply(undefined, arguments);
	    };
	
	    listeners.push(listener);
	
	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };
	
	  var notifyListeners = function notifyListeners() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    listeners.forEach(function (listener) {
	      return listener.apply(undefined, args);
	    });
	  };
	
	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	};
	
	exports.default = createTransitionManager;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _warning = __webpack_require__(62);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(69);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for putting history on context.
	 */
	var Router = function (_React$Component) {
	  _inherits(Router, _React$Component);
	
	  function Router() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Router);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props.history.location.pathname)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Router.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        history: this.props.history,
	        route: {
	          location: this.props.history.location,
	          match: this.state.match
	        }
	      })
	    };
	  };
	
	  Router.prototype.computeMatch = function computeMatch(pathname) {
	    return {
	      path: '/',
	      url: '/',
	      params: {},
	      isExact: pathname === '/'
	    };
	  };
	
	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    var _props = this.props,
	        children = _props.children,
	        history = _props.history;
	
	
	    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <Router> may have only one child element');
	
	    // Do this here so we can setState when a <Redirect> changes the
	    // location in componentWillMount. This happens e.g. when doing
	    // server rendering using a <StaticRouter>.
	    this.unlisten = history.listen(function () {
	      _this2.setState({
	        match: _this2.computeMatch(history.location.pathname)
	      });
	    });
	  };
	
	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    (0, _warning2.default)(this.props.history === nextProps.history, 'You cannot change <Router history>');
	  };
	
	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unlisten();
	  };
	
	  Router.prototype.render = function render() {
	    var children = this.props.children;
	
	    return children ? _react2.default.Children.only(children) : null;
	  };
	
	  return Router;
	}(_react2.default.Component);
	
	Router.propTypes = {
	  history: _propTypes2.default.object.isRequired,
	  children: _propTypes2.default.node
	};
	Router.contextTypes = {
	  router: _propTypes2.default.object
	};
	Router.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = Router;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for prompting the user before navigating away
	 * from a screen with a component.
	 */
	var Prompt = function (_React$Component) {
	  _inherits(Prompt, _React$Component);
	
	  function Prompt() {
	    _classCallCheck(this, Prompt);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Prompt.prototype.enable = function enable(message) {
	    if (this.unblock) this.unblock();
	
	    this.unblock = this.context.router.history.block(message);
	  };
	
	  Prompt.prototype.disable = function disable() {
	    if (this.unblock) {
	      this.unblock();
	      this.unblock = null;
	    }
	  };
	
	  Prompt.prototype.componentWillMount = function componentWillMount() {
	    if (this.props.when) this.enable(this.props.message);
	  };
	
	  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.when) {
	      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
	    } else {
	      this.disable();
	    }
	  };
	
	  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.disable();
	  };
	
	  Prompt.prototype.render = function render() {
	    return null;
	  };
	
	  return Prompt;
	}(_react2.default.Component);
	
	Prompt.propTypes = {
	  when: _propTypes2.default.bool,
	  message: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired
	};
	Prompt.defaultProps = {
	  when: true
	};
	Prompt.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      block: _propTypes2.default.func.isRequired
	    }).isRequired
	  }).isRequired
	};
	exports.default = Prompt;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for updating the location programatically
	 * with a component.
	 */
	var Redirect = function (_React$Component) {
	  _inherits(Redirect, _React$Component);
	
	  function Redirect() {
	    _classCallCheck(this, Redirect);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Redirect.prototype.isStatic = function isStatic() {
	    return this.context.router && this.context.router.staticContext;
	  };
	
	  Redirect.prototype.componentWillMount = function componentWillMount() {
	    if (this.isStatic()) this.perform();
	  };
	
	  Redirect.prototype.componentDidMount = function componentDidMount() {
	    if (!this.isStatic()) this.perform();
	  };
	
	  Redirect.prototype.perform = function perform() {
	    var history = this.context.router.history;
	    var _props = this.props,
	        push = _props.push,
	        to = _props.to;
	
	
	    if (push) {
	      history.push(to);
	    } else {
	      history.replace(to);
	    }
	  };
	
	  Redirect.prototype.render = function render() {
	    return null;
	  };
	
	  return Redirect;
	}(_react2.default.Component);
	
	Redirect.propTypes = {
	  push: _propTypes2.default.bool,
	  from: _propTypes2.default.string,
	  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
	};
	Redirect.defaultProps = {
	  push: false
	};
	Redirect.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      push: _propTypes2.default.func.isRequired,
	      replace: _propTypes2.default.func.isRequired
	    }).isRequired,
	    staticContext: _propTypes2.default.object
	  }).isRequired
	};
	exports.default = Redirect;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _warning = __webpack_require__(62);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _matchPath = __webpack_require__(73);
	
	var _matchPath2 = _interopRequireDefault(_matchPath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for matching a single path and rendering.
	 */
	var Route = function (_React$Component) {
	  _inherits(Route, _React$Component);
	
	  function Route() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Route);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props, _this.context.router)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Route.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        route: {
	          location: this.props.location || this.context.router.route.location,
	          match: this.state.match
	        }
	      })
	    };
	  };
	
	  Route.prototype.computeMatch = function computeMatch(_ref, _ref2) {
	    var computedMatch = _ref.computedMatch,
	        location = _ref.location,
	        path = _ref.path,
	        strict = _ref.strict,
	        exact = _ref.exact;
	    var route = _ref2.route;
	
	    if (computedMatch) return computedMatch; // <Switch> already computed the match for us
	
	    var pathname = (location || route.location).pathname;
	
	    return path ? (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact }) : route.match;
	  };
	
	  Route.prototype.componentWillMount = function componentWillMount() {
	    var _props = this.props,
	        component = _props.component,
	        render = _props.render,
	        children = _props.children;
	
	
	    (0, _warning2.default)(!(component && render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');
	
	    (0, _warning2.default)(!(component && children), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');
	
	    (0, _warning2.default)(!(render && children), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
	  };
	
	  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
	    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
	
	    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	
	    this.setState({
	      match: this.computeMatch(nextProps, nextContext.router)
	    });
	  };
	
	  Route.prototype.render = function render() {
	    var match = this.state.match;
	    var _props2 = this.props,
	        children = _props2.children,
	        component = _props2.component,
	        render = _props2.render;
	    var _context$router = this.context.router,
	        history = _context$router.history,
	        route = _context$router.route,
	        staticContext = _context$router.staticContext;
	
	    var location = this.props.location || route.location;
	    var props = { match: match, location: location, history: history, staticContext: staticContext };
	
	    return component ? // component prop gets first priority, only called if there's a match
	    match ? _react2.default.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
	    match ? render(props) : null : children ? // children come last, always called
	    typeof children === 'function' ? children(props) : !Array.isArray(children) || children.length ? // Preact defaults to empty children array
	    _react2.default.Children.only(children) : null : null;
	  };
	
	  return Route;
	}(_react2.default.Component);
	
	Route.propTypes = {
	  computedMatch: _propTypes2.default.object, // private, from <Switch>
	  path: _propTypes2.default.string,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  component: _propTypes2.default.func,
	  render: _propTypes2.default.func,
	  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
	  location: _propTypes2.default.object
	};
	Route.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.object.isRequired,
	    route: _propTypes2.default.object.isRequired,
	    staticContext: _propTypes2.default.object
	  })
	};
	Route.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = Route;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _pathToRegexp = __webpack_require__(74);
	
	var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var patternCache = {};
	var cacheLimit = 10000;
	var cacheCount = 0;
	
	var compilePath = function compilePath(pattern, options) {
	  var cacheKey = '' + options.end + options.strict;
	  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
	
	  if (cache[pattern]) return cache[pattern];
	
	  var keys = [];
	  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
	  var compiledPattern = { re: re, keys: keys };
	
	  if (cacheCount < cacheLimit) {
	    cache[pattern] = compiledPattern;
	    cacheCount++;
	  }
	
	  return compiledPattern;
	};
	
	/**
	 * Public API for matching a URL pathname to a path pattern.
	 */
	var matchPath = function matchPath(pathname) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  if (typeof options === 'string') options = { path: options };
	
	  var _options = options,
	      _options$path = _options.path,
	      path = _options$path === undefined ? '/' : _options$path,
	      _options$exact = _options.exact,
	      exact = _options$exact === undefined ? false : _options$exact,
	      _options$strict = _options.strict,
	      strict = _options$strict === undefined ? false : _options$strict;
	
	  var _compilePath = compilePath(path, { end: exact, strict: strict }),
	      re = _compilePath.re,
	      keys = _compilePath.keys;
	
	  var match = re.exec(pathname);
	
	  if (!match) return null;
	
	  var url = match[0],
	      values = match.slice(1);
	
	  var isExact = pathname === url;
	
	  if (exact && !isExact) return null;
	
	  return {
	    path: path, // the path pattern used to match
	    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
	    isExact: isExact, // whether or not we matched exactly
	    params: keys.reduce(function (memo, key, index) {
	      memo[key.name] = values[index];
	      return memo;
	    }, {})
	  };
	};
	
	exports.default = matchPath;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(75)
	
	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }
	
	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }
	
	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }
	
	  return tokens
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}
	
	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }
	
	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]
	
	      if (typeof token === 'string') {
	        path += token
	
	        continue
	      }
	
	      var value = data[token.name]
	      var segment
	
	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }
	
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }
	
	        continue
	      }
	
	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment
	    }
	
	    return path
	  }
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }
	
	  return attachKeys(path, keys)
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
	  return attachKeys(regexp, keys)
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }
	
	  options = options || {}
	
	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]
	
	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'
	
	      keys.push(token)
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }
	
	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }
	
	      route += capture
	    }
	  }
	
	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }
	
	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
	  }
	
	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }
	
	  options = options || {}
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }
	
	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _invariant = __webpack_require__(69);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _PathUtils = __webpack_require__(63);
	
	var _Router = __webpack_require__(68);
	
	var _Router2 = _interopRequireDefault(_Router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var normalizeLocation = function normalizeLocation(object) {
	  var _object$pathname = object.pathname,
	      pathname = _object$pathname === undefined ? '/' : _object$pathname,
	      _object$search = object.search,
	      search = _object$search === undefined ? '' : _object$search,
	      _object$hash = object.hash,
	      hash = _object$hash === undefined ? '' : _object$hash;
	
	
	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};
	
	var addBasename = function addBasename(basename, location) {
	  if (!basename) return location;
	
	  return _extends({}, location, {
	    pathname: (0, _PathUtils.addLeadingSlash)(basename) + location.pathname
	  });
	};
	
	var stripBasename = function stripBasename(basename, location) {
	  if (!basename) return location;
	
	  var base = (0, _PathUtils.addLeadingSlash)(basename);
	
	  if (location.pathname.indexOf(base) !== 0) return location;
	
	  return _extends({}, location, {
	    pathname: location.pathname.substr(base.length)
	  });
	};
	
	var createLocation = function createLocation(location) {
	  return typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : normalizeLocation(location);
	};
	
	var createURL = function createURL(location) {
	  return typeof location === 'string' ? location : (0, _PathUtils.createPath)(location);
	};
	
	var staticHandler = function staticHandler(methodName) {
	  return function () {
	    (0, _invariant2.default)(false, 'You cannot %s with <StaticRouter>', methodName);
	  };
	};
	
	var noop = function noop() {};
	
	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */
	
	var StaticRouter = function (_React$Component) {
	  _inherits(StaticRouter, _React$Component);
	
	  function StaticRouter() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, StaticRouter);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
	      return (0, _PathUtils.addLeadingSlash)(_this.props.basename + createURL(path));
	    }, _this.handlePush = function (location) {
	      var _this$props = _this.props,
	          basename = _this$props.basename,
	          context = _this$props.context;
	
	      context.action = 'PUSH';
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleReplace = function (location) {
	      var _this$props2 = _this.props,
	          basename = _this$props2.basename,
	          context = _this$props2.context;
	
	      context.action = 'REPLACE';
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleListen = function () {
	      return noop;
	    }, _this.handleBlock = function () {
	      return noop;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  StaticRouter.prototype.getChildContext = function getChildContext() {
	    return {
	      router: {
	        staticContext: this.props.context
	      }
	    };
	  };
	
	  StaticRouter.prototype.render = function render() {
	    var _props = this.props,
	        basename = _props.basename,
	        context = _props.context,
	        location = _props.location,
	        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);
	
	    var history = {
	      createHref: this.createHref,
	      action: 'POP',
	      location: stripBasename(basename, createLocation(location)),
	      push: this.handlePush,
	      replace: this.handleReplace,
	      go: staticHandler('go'),
	      goBack: staticHandler('goBack'),
	      goForward: staticHandler('goForward'),
	      listen: this.handleListen,
	      block: this.handleBlock
	    };
	
	    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
	  };
	
	  return StaticRouter;
	}(_react2.default.Component);
	
	StaticRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  context: _propTypes2.default.object.isRequired,
	  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
	};
	StaticRouter.defaultProps = {
	  basename: '',
	  location: '/'
	};
	StaticRouter.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = StaticRouter;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _warning = __webpack_require__(62);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _matchPath = __webpack_require__(73);
	
	var _matchPath2 = _interopRequireDefault(_matchPath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * The public API for rendering the first <Route> that matches.
	 */
	var Switch = function (_React$Component) {
	  _inherits(Switch, _React$Component);
	
	  function Switch() {
	    _classCallCheck(this, Switch);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
	
	    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	  };
	
	  Switch.prototype.render = function render() {
	    var route = this.context.router.route;
	    var children = this.props.children;
	
	    var location = this.props.location || route.location;
	
	    var match = void 0,
	        child = void 0;
	    _react2.default.Children.forEach(children, function (element) {
	      if (!_react2.default.isValidElement(element)) return;
	
	      var _element$props = element.props,
	          pathProp = _element$props.path,
	          exact = _element$props.exact,
	          strict = _element$props.strict,
	          from = _element$props.from;
	
	      var path = pathProp || from;
	
	      if (match == null) {
	        child = element;
	        match = path ? (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict }) : route.match;
	      }
	    });
	
	    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
	  };
	
	  return Switch;
	}(_react2.default.Component);
	
	Switch.contextTypes = {
	  router: _propTypes2.default.shape({
	    route: _propTypes2.default.object.isRequired
	  }).isRequired
	};
	Switch.propTypes = {
	  children: _propTypes2.default.node,
	  location: _propTypes2.default.object
	};
	exports.default = Switch;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _hoistNonReactStatics = __webpack_require__(79);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _Route = __webpack_require__(72);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * A public higher-order component to access the imperative API
	 */
	var withRouter = function withRouter(Component) {
	  var C = function C(props) {
	    var wrappedComponentRef = props.wrappedComponentRef,
	        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);
	
	    return _react2.default.createElement(_Route2.default, { render: function render(routeComponentProps) {
	        return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
	      } });
	  };
	
	  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
	  C.WrappedComponent = Component;
	  C.propTypes = {
	    wrappedComponentRef: _propTypes2.default.func
	  };
	
	  return (0, _hoistNonReactStatics2.default)(C, Component);
	};
	
	exports.default = withRouter;

/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map