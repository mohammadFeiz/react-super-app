"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Popup = exports.Confirm = void 0;
exports.splitNumber = splitNumber;

var _react = _interopRequireWildcard(require("react"));

var _aioButton = _interopRequireDefault(require("aio-button"));

var _react2 = require("@mdi/react");

var _js = require("@mdi/js");

var _reactVirtualDom = _interopRequireDefault(require("react-virtual-dom"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class SuperApp extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSideIndex: 0,
      confirm: false,
      setConfirm: confirm => this.setState({
        confirm
      })
    };
  }

  side_layout() {
    let {
      sideMenuItems,
      logo,
      title,
      subtitle
    } = this.props;
    let {
      activeSideIndex
    } = this.state;
    return {
      size: 240,
      html: /*#__PURE__*/_react.default.createElement(Side, {
        items: sideMenuItems,
        logo: logo,
        title: title,
        subtitle: subtitle,
        activeIndex: activeSideIndex,
        onChange: activeSideIndex => this.setState({
          activeSideIndex
        })
      })
    };
  }

  page_layout() {
    let {
      getContent
    } = this.props;
    return {
      flex: 1,
      column: [this.header_layout(), {
        flex: 1,
        html: getContent(this.state)
      }]
    };
  }

  header_layout() {
    let {
      sideMenuItems,
      userName
    } = this.props;
    let {
      activeSideIndex
    } = this.state;
    return {
      style: {
        flex: 'none'
      },
      align: 'v',
      className: 'superapp-header',
      row: [{
        html: sideMenuItems[activeSideIndex].text,
        className: 'superapp-header-title'
      }, {
        flex: 1
      }, {
        html: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiAccount,
          size: 1
        })
      }, {
        size: 6
      }, {
        html: userName,
        className: 'superapp-header-username'
      }]
    };
  }

  render() {
    let {
      confirm
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
      layout: {
        className: 'superapp',
        row: [this.side_layout(), this.page_layout()]
      }
    }), confirm && /*#__PURE__*/_react.default.createElement(Confirm, _extends({}, confirm, {
      onClose: () => this.setState({
        confirm: false
      })
    })), /*#__PURE__*/_react.default.createElement(Loading, null));
  }

}

exports.default = SuperApp;

class Side extends _react.Component {
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
          className: 'superapp-sidemenu-title'
        }, {
          html: subtitle,
          show: !!subtitle,
          className: 'superapp-sidemenu-subtitle'
        }, {
          flex: 1
        }]
      }]
    };
  }

  items_layout() {
    let {
      items,
      onChange,
      activeIndex
    } = this.props;
    return {
      gap: 12,
      column: items.map(({
        icon,
        text
      }, i) => {
        let active = i === activeIndex;
        return {
          size: 36,
          className: 'superapp-sidemenu-item' + (active ? ' active' : ''),
          attrs: {
            onClick: () => onChange(i)
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

  render() {
    return /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
      layout: {
        className: 'superapp-sidemenu',
        column: [{
          size: 24
        }, this.header_layout(), {
          size: 24
        }, this.items_layout()]
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

class Popup extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };
  }

  header_layout() {
    let {
      onClose,
      title
    } = this.props;
    return {
      size: 48,
      className: 'superapp-popup-header',
      row: [{
        flex: 1,
        html: title,
        align: 'v',
        className: 'superapp-popup-title'
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
      getContent
    } = this.props;
    let content;

    if (tabs) {
      let {
        activeTabIndex
      } = this.state;
      content = getContent(activeTabIndex);
    } else {
      content = getContent();
    }

    if (content === 'loading') {
      return {
        flex: 1,
        html: 'در حال بارگزاری',
        align: 'vh'
      };
    }

    if (content === 'empty') {
      return {
        flex: 1,
        html: 'موردی موجود نیست',
        align: 'vh'
      };
    }

    return {
      flex: 1,
      html: content
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "superapp-popup-container"
    }, /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
      layout: {
        className: 'superapp-poppup',
        style: {
          flex: 'none'
        },
        column: [this.header_layout(), this.body_layout()]
      }
    }));
  }

}

exports.Popup = Popup;

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
      className: 'superapp-popup-header',
      row: [{
        flex: 1,
        html: title,
        align: 'v',
        className: 'superapp-popup-title'
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
      scroll: 'v'
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
      onClose,
      onSubmit,
      closeText = 'No',
      submitText = 'Yes'
    } = this.props;
    return {
      gap: 12,
      size: 48,
      align: 'v',
      style: {
        padding: '0 12px'
      },
      row: [{
        flex: 1
      }, {
        html: /*#__PURE__*/_react.default.createElement("button", {
          className: "superapp-popup-footer-button",
          onClick: () => onClose()
        }, closeText)
      }, {
        show: !!onSubmit,
        html: /*#__PURE__*/_react.default.createElement("button", {
          className: "superapp-popup-footer-button",
          onClick: () => this.onSubmit()
        }, submitText)
      }, {
        flex: 1
      }]
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
      className: "superapp-popup-container"
    }, /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
      layout: {
        className: 'superapp-poppup',
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