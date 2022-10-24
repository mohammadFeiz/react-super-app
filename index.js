"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Confirm = void 0;
exports.splitNumber = splitNumber;
var _react = _interopRequireWildcard(require("react"));
var _aioButton = _interopRequireDefault(require("aio-button"));
var _react2 = require("@mdi/react");
var _js = require("@mdi/js");
var _reactVirtualDom = _interopRequireDefault(require("react-virtual-dom"));
var _jquery = _interopRequireDefault(require("jquery"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
class SuperApp extends _react.Component {
  constructor(props) {
    super(props);
    let {
      touch = 'ontouchstart' in document.documentElement
    } = this.props;
    this.state = {
      navId: this.getNavId(),
      confirm: false,
      touch,
      popups: [],
      sideOpen: false,
      addPopup: o => this.setState({
        popups: this.state.popups.concat(o)
      }),
      removePopup: () => {
        let {
          popups
        } = this.state;
        popups.pop();
        this.setState({
          popups
        });
      },
      setConfirm: confirm => this.setState({
        confirm
      })
    };
    props.getActions({
      ...this.state
    });
  }
  getNavId() {
    let {
      navs,
      navId
    } = this.props;
    if (!navs) {
      return false;
    }
    if (navId !== undefined) {
      return navId;
    }
    ;
    return navs[0].id;
  }
  navigation_layout() {
    let {
      navs = [],
      logo,
      title,
      subtitle
    } = this.props;
    if (!navs.length) {
      return false;
    }
    let {
      touch,
      navId
    } = this.state;
    let props = {
      navs,
      navId,
      onChange: navId => this.setState({
        navId
      }),
      logo,
      title,
      subtitle,
      touch
    };
    return {
      html: /*#__PURE__*/_react.default.createElement(Navigation, props)
    };
  }
  page_layout(nav) {
    let {
      body
    } = this.props;
    return {
      flex: 1,
      column: [this.header_layout(nav), {
        flex: 1,
        html: /*#__PURE__*/_react.default.createElement("div", {
          className: "rsa-body"
        }, body(this.state))
      }]
    };
  }
  header_layout(nav) {
    let {
      touch
    } = this.state;
    let {
      header,
      sides = []
    } = this.props;
    return {
      style: {
        flex: 'none'
      },
      align: 'v',
      className: 'rsa-header' + (touch ? ' touch-mode' : ''),
      row: [{
        show: !!sides.length,
        html: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiMenu,
          size: 1
        }),
        align: 'vh',
        attrs: {
          onClick: () => this.setState({
            sideOpen: !this.state.sideOpen
          })
        }
      }, {
        show: !!sides.length,
        size: 12
      }, {
        flex: 1,
        html: nav.text,
        className: 'rsa-header-title'
      }, {
        show: !!header,
        html: () => header(this.state)
      }]
    };
  }
  render() {
    let {
      confirm,
      popups,
      removePopup,
      touch,
      sideOpen,
      navId
    } = this.state;
    let {
      navs,
      sides = [],
      sideId,
      rtl,
      sideHeader,
      style
    } = this.props;
    let nav = navs ? navs.find(o => o.id === navId) : false;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, touch && /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
      layout: {
        style,
        className: 'rsa' + (rtl ? ' rtl' : ' ltr') + (popups.length ? ' has-opened-popup' : ''),
        column: [this.page_layout(nav), this.navigation_layout()]
      }
    }), !touch && /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
      layout: {
        style,
        className: 'rsa' + (rtl ? ' rtl' : ' ltr') + (popups.length ? ' has-opened-popup' : ''),
        row: [this.navigation_layout(), this.page_layout(nav)]
      }
    }), popups.length && popups.map((o, i) => /*#__PURE__*/_react.default.createElement(Popup, _extends({
      key: i
    }, o, {
      index: i,
      removePopup: () => removePopup(),
      rtl: rtl
    }))), confirm && /*#__PURE__*/_react.default.createElement(Confirm, _extends({}, confirm, {
      onClose: () => this.setState({
        confirm: false
      })
    })), sides.length && sideOpen && /*#__PURE__*/_react.default.createElement(SideMenu, {
      sideHeader: sideHeader,
      sides: sides,
      sideId: sideId,
      sideOpen: sideOpen,
      rtl: rtl,
      onClose: () => this.setState({
        sideOpen: false
      })
    }), /*#__PURE__*/_react.default.createElement(Loading, null));
  }
}
exports.default = SuperApp;
class Navigation extends _react.Component {
  header_layout() {
    let {
      logo,
      title,
      subtitle
    } = this.props;
    return {
      align: 'vh',
      gap: 12,
      row: [{
        html: logo,
        show: !!logo
      }, {
        column: [{
          flex: 1
        }, {
          html: title,
          className: 'rsa-navigation-title'
        }, {
          html: subtitle,
          show: !!subtitle,
          className: 'rsa-navigation-subtitle'
        }, {
          flex: 1
        }]
      }]
    };
  }
  items_layout() {
    let {
      navs,
      onChange,
      navId
    } = this.props;
    return {
      gap: 12,
      column: navs.map(({
        icon,
        text,
        id
      }, i) => {
        let active = id === navId;
        return {
          size: 36,
          className: 'rsa-navigation-item' + (active ? ' active' : ''),
          attrs: {
            onClick: () => onChange(id)
          },
          row: [{
            show: !!icon,
            size: 48,
            html: icon(active),
            align: 'vh'
          }, {
            html: text,
            align: 'v'
          }]
        };
      })
    };
  }
  bottomMenu_layout({
    icon,
    text,
    id
  }) {
    let {
      navId,
      onChange
    } = this.props;
    let active = id === navId;
    return {
      flex: 1,
      className: 'rsa-bottom-menu-item' + (active ? ' active' : ''),
      attrs: {
        onClick: () => onChange(id)
      },
      html: icon(active),
      align: 'vh'
    };
  }
  render() {
    let {
      touch,
      navs
    } = this.props;
    if (touch) {
      return /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
        layout: {
          className: 'rsa-bottom-menu',
          row: navs.map(o => this.bottomMenu_layout(o))
        }
      });
    }
    return /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
      layout: {
        className: 'rsa-navigation',
        column: [{
          size: 24
        }, this.header_layout(), {
          size: 24
        }, this.items_layout()]
      }
    });
  }
}
class SideMenu extends _react.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      open: false
    });
  }
  header_layout() {
    let {
      sideHeader
    } = this.props;
    if (!sideHeader) {
      return false;
    }
    return {
      align: 'vh',
      gap: 12,
      html: sideHeader()
    };
  }
  items_layout() {
    let {
      sides,
      onChange,
      sideId
    } = this.props;
    return {
      gap: 12,
      column: sides.map(({
        icon,
        text,
        id
      }, i) => {
        let active = id === sideId;
        return {
          size: 36,
          className: 'rsa-sidemenu-item' + (active ? ' active' : ''),
          attrs: {
            onClick: () => onChange(id)
          },
          row: [{
            show: !!icon,
            size: 48,
            html: icon(active),
            align: 'vh'
          }, {
            html: text,
            align: 'v'
          }]
        };
      })
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({
      open: true
    }), 0);
  }
  render() {
    let {
      onClose,
      rtl
    } = this.props;
    let {
      open
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
      layout: {
        className: 'rsa-sidemenu-container' + (open ? ' open' : '') + (rtl ? ' rtl' : ' ltr'),
        row: [{
          className: 'rsa-sidemenu',
          column: [{
            size: 24
          }, this.header_layout(), {
            size: 24
          }, this.items_layout()]
        }, {
          flex: 1,
          attrs: {
            onClick: () => onClose()
          }
        }]
      }
    });
  }
}
class Loading extends _react.Component {
  cubes2(obj = {}) {
    var {
      count = 5,
      thickness = [5, 16],
      delay = 0.1,
      borderRadius = 0,
      colors = ['dodgerblue'],
      duration = 1,
      gap = 3
    } = obj;
    let Thickness = Array.isArray(thickness) ? thickness : [thickness, thickness];
    let getStyle1 = i => {
      return {
        width: Thickness[0],
        height: Thickness[1],
        background: colors[i % colors.length],
        margin: `0 ${gap / 2}px`,
        animation: `${duration}s loadingScaleY infinite ease-in-out ${i * delay + 1}s`,
        borderRadius: borderRadius + 'px'
      };
    };
    let chars = ['B', 'U', 'R', 'U', 'X'];
    let items = [];
    for (var i = 0; i < count; i++) {
      items.push( /*#__PURE__*/_react.default.createElement("div", {
        key: i,
        className: "cube",
        style: getStyle1(i)
      }, chars[i]));
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "rect",
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent'
      }
    }, items);
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "loading"
    }, this.cubes2({
      thickness: [12, 90],
      colors: ['transparent']
    }));
  }
}
function splitNumber(price, count = 3, splitter = ',') {
  if (!price) {
    return price;
  }
  let str = price.toString();
  let dotIndex = str.indexOf('.');
  if (dotIndex !== -1) {
    str = str.slice(0, dotIndex);
  }
  let res = '';
  let index = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    res = str[i] + res;
    if (index === count - 1) {
      index = 0;
      if (i > 0) {
        res = splitter + res;
      }
    } else {
      index++;
    }
  }
  return res;
}
//tabs,content,onClose,title
class Popup extends _react.Component {
  constructor(props) {
    super(props);
    this.dom = /*#__PURE__*/(0, _react.createRef)();
    this.state = {
      activeTabIndex: 0
    };
    this.dui = 'a' + Math.random();
  }
  async onClose() {
    let {
      removePopup,
      onClose
    } = this.props;
    if (onClose) {
      let res = await onClose();
      if (res === false) {
        return;
      }
      removePopup();
    } else {
      removePopup();
    }
  }
  header_layout() {
    let {
      onClose = () => this.onClose(),
      title,
      header,
      onBack,
      rtl
    } = this.props;
    if (header === false) {
      return false;
    }
    return {
      size: 48,
      className: 'rsa-popup-header',
      row: [{
        show: !!onBack,
        size: 36,
        html: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: rtl ? _js.mdiChevronRight : _js.mdiChevronLeft,
          size: 1
        }),
        align: 'vh',
        attrs: {
          onClick: () => onBack()
        }
      }, {
        flex: 1,
        html: title,
        align: 'v',
        className: 'rsa-popup-title'
      }, {
        show: !!header,
        html: () => /*#__PURE__*/_react.default.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center'
          }
        }, header())
      }, {
        show: onClose !== false,
        size: 36,
        html: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiClose,
          size: 0.8
        }),
        align: 'vh',
        attrs: {
          onClick: () => onClose()
        }
      }]
    };
  }
  body_layout() {
    return {
      flex: 1,
      column: [this.tabs_layout(), this.content_layout()]
    };
  }
  tabs_layout() {
    let {
      tabs
    } = this.props;
    if (!tabs) {
      return false;
    }
    let {
      activeTabIndex
    } = this.state;
    return {
      html: /*#__PURE__*/_react.default.createElement(_aioButton.default, {
        type: "tabs",
        options: tabs.map((o, i) => {
          return {
            text: o,
            value: i
          };
        }),
        value: activeTabIndex,
        onChange: activeTabIndex => this.setState({
          activeTabIndex
        })
      })
    };
  }
  content_layout() {
    let {
      tabs,
      content
    } = this.props;
    let Content;
    if (tabs) {
      let {
        activeTabIndex
      } = this.state;
      Content = content(activeTabIndex);
    } else {
      Content = content();
    }
    if (Content === 'loading') {
      return {
        flex: 1,
        html: 'در حال بارگزاری',
        align: 'vh'
      };
    }
    if (Content === 'empty') {
      return {
        flex: 1,
        html: 'موردی موجود نیست',
        align: 'vh'
      };
    }
    return {
      flex: 1,
      html: /*#__PURE__*/_react.default.createElement("div", {
        className: "rsa-popup-body"
      }, Content)
    };
  }
  getClassName() {
    let {
      type
    } = this.props;
    let className = 'rsa-popup-container';
    if (type === 'fullscreen') {
      className += ' fullscreen';
    }
    if (type === 'bottom') {
      className += ' bottom-popup';
    }
    return className;
  }
  backClick(e) {
    let target = (0, _jquery.default)(e.target);
    if (target.hasClass(this.dui)) {
      return;
    }
    let parents = target.parents('.rsa-popup');
    if (parents.hasClass(this.dui)) {
      return;
    }
    let {
      removePopup,
      onClose = () => removePopup(),
      backClose
    } = this.props;
    if (onClose === false) {
      return;
    }
    if (!backClose) {
      return;
    }
    onClose();
  }
  componentDidMount() {
    (0, _jquery.default)(this.dom.current).animate({
      height: '100%',
      width: '100%',
      left: '0%',
      top: '0%',
      opacity: 1
    }, 300);
  }
  render() {
    let {
      rtl
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: this.dom,
      className: this.getClassName(),
      onClick: e => this.backClick(e),
      style: {
        left: '50%',
        top: '100%',
        height: '0%',
        width: '0%',
        opacity: 0
      }
    }, /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
      layout: {
        className: 'rsa-popup' + (rtl ? ' rtl' : ' ltr') + (' ' + this.dui),
        style: {
          flex: 'none'
        },
        column: [this.header_layout(), this.body_layout()]
      }
    }));
  }
}
class Confirm extends _react.Component {
  constructor(props) {
    super(props);
  }
  header_layout() {
    let {
      onClose,
      title
    } = this.props;
    if (!title) {
      return false;
    }
    return {
      size: 48,
      className: 'rsa-popup-header',
      row: [{
        flex: 1,
        html: title,
        align: 'v',
        className: 'rsa-popup-title'
      }, {
        size: 48,
        html: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiClose,
          size: 0.8
        }),
        align: 'vh',
        attrs: {
          onClick: () => onClose()
        }
      }]
    };
  }
  body_layout() {
    let {
      text
    } = this.props;
    return {
      flex: 1,
      html: text,
      scroll: 'v',
      className: 'rsa-popup-body'
    };
  }
  onSubmit() {
    let {
      onClose,
      onSubmit
    } = this.props;
    onSubmit();
    onClose();
  }
  footer_layout() {
    let {
      buttons,
      onClose = () => {}
    } = this.props;
    return {
      gap: 12,
      size: 48,
      align: 'v',
      style: {
        padding: '0 12px'
      },
      row: buttons.map(({
        text,
        onClick = () => {}
      }) => {
        return {
          html: /*#__PURE__*/_react.default.createElement("button", {
            className: "rsa-popup-footer-button",
            onClick: () => {
              onClick();
              onClose();
            }
          }, text)
        };
      })
    };
  }
  render() {
    let {
      style = {
        width: 400,
        height: 300
      }
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "rsa-popup-container"
    }, /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
      layout: {
        className: 'rsa-popup rsa-confirm',
        style: {
          flex: 'none',
          ...style
        },
        column: [this.header_layout(), this.body_layout(), this.footer_layout()]
      }
    }));
  }
}
exports.Confirm = Confirm;