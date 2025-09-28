'use strict';

var React = require('react');

var baseClasses$1 = "rounded-lg p-4 flex space-x-3 items-start shadow-sm";
var textClasses = "font-semibold leading-tight";
var descClasses = "mt-1 text-sm opacity-90 leading-relaxed text-[var(--entchen-text-secondary)]";
var Alert = function Alert(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    title = _ref.title,
    description = _ref.description,
    Icon = _ref.icon;
  // Variant styles: Tailwind classes except default uses css vars inline style
  var variantClassNames = "";
  var style;
  switch (variant) {
    case "danger":
      variantClassNames = "bg-red-100 border border-red-400 text-red-700";
      break;
    case "warning":
      variantClassNames = "bg-yellow-100 border border-yellow-400 text-yellow-700";
      break;
    case "success":
      variantClassNames = "bg-green-100 border border-green-400 text-green-700";
      break;
    case "default":
    default:
      style = {
        backgroundColor: 'var(--entchen-primary)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--entchen-primary-600)',
        color: 'var(--entchen-text)'
      };
      break;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClasses$1, " ").concat(variantClassNames),
    style: style,
    role: "alert",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, Icon && /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink-0 mt-[2px]"
  }, /*#__PURE__*/React.createElement(Icon, null)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("p", {
    className: textClasses
  }, typeof title === "string" ? title : /*#__PURE__*/React.createElement(title)), description && /*#__PURE__*/React.createElement("p", {
    className: descClasses
  }, typeof description === "string" ? description : /*#__PURE__*/React.createElement(description))));
};

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var _excluded = ["title", "leftIcon", "rightIcon", "disabled", "loading", "variant", "onClick", "className"];
var ButtonVariantClasses = function ButtonVariantClasses(variant) {
  switch (variant) {
    case 'primary':
      return "\n                bg-[var(--entchen-primary)] \n                text-[var(--entchen-text)] \n                focus:ring-[var(--entchen-secondary)]\n                \n                hover:bg-[var(--entchen-primary-100)] \n                cursor-pointer\n            \n                disabled:bg-gray-300 \n                disabled:hover:bg-gray-300\n                disabled:text-gray-500 \n                disabled:cursor-not-allowed \n            ";
    case 'secondary':
      return "\n                bg-[var(--entchen-secondary)] \n                text-[var(--entchen-text-secondary)] \n                focus:ring-[var(--entchen-secondary)]\n                \n                hover:bg-[var(--entchen-secondary-100)] \n                cursor-pointer\n                \n                disabled:bg-gray-200\n                disabled:hover:bg-gray-200\n                disabled:text-gray-400\n                disabled:cursor-not-allowed\n            ";
    case 'danger':
      return "\n              bg-red-600 text-white focus:ring-red-500\n              hover:bg-red-700 cursor-pointer\n              disabled:bg-red-300\n              disabled:text-white/70\n              disabled:cursor-not-allowed\n              disabled:hover:bg-red-300\n            ";
    case 'warning':
      return "\n              bg-yellow-500 text-black focus:ring-yellow-400\n              hover:bg-yellow-600 cursor-pointer\n              disabled:bg-yellow-300\n              disabled:text-black/50\n              disabled:cursor-not-allowed\n              disabled:hover:bg-yellow-300\n            ";
    default:
      return "";
  }
};
var baseClasses = function baseClasses() {
  return "rounded-md p-2 inline-flex gap-2 align-middle";
};
var Button = function Button(_ref) {
  var title = _ref.title,
    leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon,
    disabled = _ref.disabled,
    loading = _ref.loading,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    onClick = _ref.onClick,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: "".concat(ButtonVariantClasses(variant), " ").concat(baseClasses(), " ").concat(className),
    disabled: disabled || loading,
    "aria-disabled": disabled || loading,
    onClick: onClick
  }, rest), loading && /*#__PURE__*/React.createElement("svg", {
    role: "status",
    "aria-label": "loading",
    className: "w-5 h-5 animate-spin text-current",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentcolor",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", {
    className: "opacity-75",
    fill: "currentcolor",
    d: "M4 12a8 8 0 018-8v4a4 4 000 -4vH4z"
  })), !loading && leftIcon && (/*#__PURE__*/React.createElement(leftIcon)), /*#__PURE__*/React.createElement("span", null, title), !loading && rightIcon && (/*#__PURE__*/React.createElement(rightIcon)));
};

var Card = function Card(_ref) {
  var _leftImage$alt, _rightImage$alt;
  var title = _ref.title,
    description = _ref.description,
    Icon = _ref.icon,
    _ref$elevateOnHover = _ref.elevateOnHover,
    elevateOnHover = _ref$elevateOnHover === void 0 ? true : _ref$elevateOnHover,
    leftImage = _ref.leftImage,
    rightImage = _ref.rightImage;
  var renderContent = function renderContent(content) {
    return typeof content === "string" ? /*#__PURE__*/React.createElement(React.Fragment, null, content) : /*#__PURE__*/React.createElement(content);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-[var(--entchen-primary)] p-8 rounded-2xl shadow-lg border border-[var(--entchen-primary-200)]/50 backdrop-blur-sm transition-all duration-300 ".concat(elevateOnHover ? "hover:shadow-xl hover:-translate-y-1" : ""),
    style: {
      opacity: 1,
      transform: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center ".concat(leftImage || rightImage ? "gap-6 md:gap-10" : "")
  }, leftImage && /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden shadow-md"
  }, /*#__PURE__*/React.createElement("img", {
    src: leftImage.url,
    alt: (_leftImage$alt = leftImage.alt) !== null && _leftImage$alt !== void 0 ? _leftImage$alt : "Left image",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 mb-3"
  }, Icon && /*#__PURE__*/React.createElement("span", {
    className: "text-[var(--entchen-secondary)] flex-shrink-0",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, null)), typeof title === "string" ? /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-xl truncate text-[var(--entchen-text)]",
    title: title
  }, title) : renderContent(title)), typeof description === "string" ? /*#__PURE__*/React.createElement("p", {
    className: "text-[var(--entchen-text)] break-normal"
  }, description) : renderContent(description)), rightImage && /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden shadow-md"
  }, /*#__PURE__*/React.createElement("img", {
    src: rightImage.url,
    alt: (_rightImage$alt = rightImage.alt) !== null && _rightImage$alt !== void 0 ? _rightImage$alt : "Right image",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))));
};

var ANIMATION_DURATION = 200; // ms

var Dialog = function Dialog(_ref) {
  var _cancelButton$variant, _cancelButton$loading, _cancelButton$disable, _cancelButton$type, _confirmButton$varian, _confirmButton$loadin, _confirmButton$disabl, _confirmButton$type;
  var trigger = _ref.trigger,
    title = _ref.title,
    description = _ref.description,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel,
    onDialogClose = _ref.onDialogClose,
    _ref$confirmButton = _ref.confirmButton,
    confirmButton = _ref$confirmButton === void 0 ? {
      title: "Confirm"
    } : _ref$confirmButton,
    _ref$cancelButton = _ref.cancelButton,
    cancelButton = _ref$cancelButton === void 0 ? {
      title: "Cancel",
      variant: "danger"
    } : _ref$cancelButton;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    rendered = _useState2[0],
    setRendered = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    visible = _useState4[0],
    setVisible = _useState4[1];
  function openDialog() {
    setRendered(true);
    setVisible(false);
    requestAnimationFrame(function () {
      setVisible(true);
    });
    document.body.style.overflow = "hidden";
  }
  function closeDialog() {
    setVisible(false);
    document.body.style.overflow = "";
    if (onDialogClose) {
      onDialogClose();
    }
    setTimeout(function () {
      setRendered(false);
    }, ANIMATION_DURATION);
  }
  function renderContent(content) {
    if (!content) return null;
    if (typeof content === "string") return content;
    var Component = content;
    return /*#__PURE__*/React.createElement(Component, null);
  }
  function renderTrigger() {
    if (typeof trigger === "string") {
      return /*#__PURE__*/React.createElement(Button, _extends({}, confirmButton.variant ? {
        variant: confirmButton.variant
      } : {}, {
        title: trigger,
        onClick: openDialog
      }));
    }
    var TriggerElement;
    if (typeof trigger === "string") {
      TriggerElement = /*#__PURE__*/React.createElement(Button, _extends({}, cancelButton, {
        title: trigger,
        onClick: openDialog
      }));
    } else {
      var TriggerComponent = trigger;
      TriggerElement = /*#__PURE__*/React.createElement("div", {
        onClick: openDialog,
        style: {
          display: "inline-block",
          cursor: "pointer"
        },
        role: "button",
        tabIndex: 0,
        onKeyDown: function onKeyDown(e) {
          if (e.key === 'Enter' || e.key === ' ') openDialog();
        }
      }, /*#__PURE__*/React.createElement(TriggerComponent, null));
    }
    try {
      return TriggerElement;
    } catch (_unused) {
      return /*#__PURE__*/React.createElement("div", {
        role: "button",
        tabIndex: 0,
        style: {
          display: "inline-block"
        },
        onClick: openDialog,
        onKeyDown: function onKeyDown(e) {
          if (e.key === 'Enter' || e.key === ' ') openDialog();
        }
      }, TriggerElement);
    }
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderTrigger(), rendered && /*#__PURE__*/React.createElement("div", {
    "aria-modal": "true",
    role: "dialog",
    "aria-labelledby": "dialog-title",
    "aria-describedby": description ? "dialog-description" : undefined,
    className: "fixed inset-0 z-50 flex items-center justify-center",
    tabIndex: -1,
    style: {
      backgroundColor: visible ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)',
      backdropFilter: visible ? 'blur(4px)' : 'blur(0)',
      WebkitBackdropFilter: visible ? 'blur(4px)' : 'blur(0)',
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? undefined : "none",
      transitionProperty: 'opacity, background-color, backdrop-filter',
      transitionDuration: "".concat(ANIMATION_DURATION, "ms"),
      transitionTimingFunction: 'ease-out'
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Escape') closeDialog();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    "aria-hidden": "true",
    onClick: closeDialog
  }), /*#__PURE__*/React.createElement("div", {
    role: "document",
    className: "relative max-w-lg w-full rounded-lg shadow-lg p-6 mx-4 transform transition-transform duration-200 ease-out",
    style: {
      backgroundColor: 'var(--entchen-primary)',
      color: 'var(--entchen-text)',
      opacity: visible ? 1 : 0,
      transformOrigin: "center center",
      transform: visible ? "scale(1)" : "scale(0.95)",
      transitionProperty: "opacity, transform",
      transitionDuration: "".concat(ANIMATION_DURATION, "ms"),
      transitionTimingFunction: "ease-out"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    id: "dialog-title",
    className: "text-xl font-semibold mb-2"
  }, renderContent(title)), description && /*#__PURE__*/React.createElement("p", {
    id: "dialog-description",
    className: "mb-6"
  }, renderContent(description)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-3"
  }, /*#__PURE__*/React.createElement(Button, _extends({}, cancelButton, {
    title: cancelButton.title,
    variant: (_cancelButton$variant = cancelButton.variant) !== null && _cancelButton$variant !== void 0 ? _cancelButton$variant : "secondary",
    loading: (_cancelButton$loading = cancelButton.loading) !== null && _cancelButton$loading !== void 0 ? _cancelButton$loading : false,
    leftIcon: cancelButton.leftIcon,
    rightIcon: cancelButton.rightIcon,
    disabled: (_cancelButton$disable = cancelButton.disabled) !== null && _cancelButton$disable !== void 0 ? _cancelButton$disable : false,
    type: (_cancelButton$type = cancelButton.type) !== null && _cancelButton$type !== void 0 ? _cancelButton$type : "button",
    onClick: function onClick() {
      if (onCancel) {
        onCancel(closeDialog);
      } else {
        closeDialog();
      }
    }
  })), /*#__PURE__*/React.createElement(Button, _extends({}, confirmButton, {
    title: confirmButton.title,
    variant: (_confirmButton$varian = confirmButton.variant) !== null && _confirmButton$varian !== void 0 ? _confirmButton$varian : "primary",
    loading: (_confirmButton$loadin = confirmButton.loading) !== null && _confirmButton$loadin !== void 0 ? _confirmButton$loadin : false,
    leftIcon: confirmButton.leftIcon,
    rightIcon: confirmButton.rightIcon,
    disabled: (_confirmButton$disabl = confirmButton.disabled) !== null && _confirmButton$disabl !== void 0 ? _confirmButton$disabl : false,
    type: (_confirmButton$type = confirmButton.type) !== null && _confirmButton$type !== void 0 ? _confirmButton$type : "button",
    onClick: function onClick() {
      if (onConfirm) {
        onConfirm(closeDialog);
      } else {
        closeDialog();
      }
    }
  }))))));
};

function colourNameToHex(colour) {
    const colours = {
        "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff",
        "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887",
        "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff",
        "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f",
        "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1",
        "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff",
        "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff",
        "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f",
        "honeydew": "#f0fff0", "hotpink": "#ff69b4",
        "indianred ": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c",
        "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2",
        "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de",
        "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6",
        "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee",
        "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5",
        "navajowhite": "#ffdead", "navy": "#000080",
        "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6",
        "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080",
        "rebeccapurple": "#663399", "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1",
        "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4",
        "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0",
        "violet": "#ee82ee",
        "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5",
        "yellow": "#ffff00", "yellowgreen": "#9acd32"
    };
    if (typeof colours[colour.toLowerCase()] != 'undefined')
        return colours[colour.toLowerCase()];
    return false;
}
function darkenRgb(rgb, amount) {
    // expects rgb(r,g,b)
    const m = rgb.match(/\d+/g);
    if (!m)
        return rgb;
    let [r, g, b] = m.map(Number);
    r = Math.max(0, Math.min(255, Math.floor(r * (1 - amount))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - amount))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - amount))));
    return `rgb(${r},${g},${b})`;
}
function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }
    const num = parseInt(hex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgb(${r},${g},${b})`;
}

var ThemeContext = /*#__PURE__*/React.createContext(undefined);
var EntchenProvider = function EntchenProvider(_ref) {
  var children = _ref.children,
    theme = _ref.theme;
  var parsedPrimary = hexToRgb(colourNameToHex(theme.primaryColor) || theme.primaryColor);
  var parsedSecondary = hexToRgb(colourNameToHex(theme.secondaryColor) || theme.secondaryColor);
  var parsedText = hexToRgb(colourNameToHex(theme.textColor) || theme.textColor);
  var parsedTextSecondary = hexToRgb(colourNameToHex(theme.textSecondaryColor) || theme.textSecondaryColor);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: theme
  }, /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({}, {
      '--entchen-primary': parsedPrimary,
      '--entchen-primary-100': darkenRgb(parsedPrimary, 0.1),
      '--entchen-primary-200': darkenRgb(parsedPrimary, 0.2),
      '--entchen-primary-300': darkenRgb(parsedPrimary, 0.3),
      '--entchen-primary-400': darkenRgb(parsedPrimary, 0.4),
      '--entchen-primary-500': darkenRgb(parsedPrimary, 0.5),
      '--entchen-primary-600': darkenRgb(parsedPrimary, 0.6),
      '--entchen-primary-700': darkenRgb(parsedPrimary, 0.7),
      '--entchen-primary-800': darkenRgb(parsedPrimary, 0.8),
      '--entchen-primary-900': darkenRgb(parsedPrimary, 0.9),
      '--entchen-secondary': parsedSecondary,
      '--entchen-secondary-100': darkenRgb(parsedSecondary, 0.1),
      '--entchen-secondary-200': darkenRgb(parsedSecondary, 0.2),
      '--entchen-secondary-300': darkenRgb(parsedSecondary, 0.3),
      '--entchen-secondary-400': darkenRgb(parsedSecondary, 0.4),
      '--entchen-secondary-500': darkenRgb(parsedSecondary, 0.5),
      '--entchen-secondary-600': darkenRgb(parsedSecondary, 0.6),
      '--entchen-secondary-700': darkenRgb(parsedSecondary, 0.7),
      '--entchen-secondary-800': darkenRgb(parsedSecondary, 0.8),
      '--entchen-secondary-900': darkenRgb(parsedSecondary, 0.9),
      '--entchen-text': parsedText,
      '--entchen-text-100': darkenRgb(parsedText, 0.1),
      '--entchen-text-200': darkenRgb(parsedText, 0.2),
      '--entchen-text-300': darkenRgb(parsedText, 0.3),
      '--entchen-text-400': darkenRgb(parsedText, 0.4),
      '--entchen-text-500': darkenRgb(parsedText, 0.5),
      '--entchen-text-600': darkenRgb(parsedText, 0.6),
      '--entchen-text-700': darkenRgb(parsedText, 0.7),
      '--entchen-text-800': darkenRgb(parsedText, 0.8),
      '--entchen-text-900': darkenRgb(parsedText, 0.9),
      '--entchen-text-secondary': parsedTextSecondary,
      '--entchen-text-secondary-100': darkenRgb(parsedTextSecondary, 0.1),
      '--entchen-text-secondary-200': darkenRgb(parsedTextSecondary, 0.2),
      '--entchen-text-secondary-300': darkenRgb(parsedTextSecondary, 0.3),
      '--entchen-text-secondary-400': darkenRgb(parsedTextSecondary, 0.4),
      '--entchen-text-secondary-500': darkenRgb(parsedTextSecondary, 0.5),
      '--entchen-text-secondary-600': darkenRgb(parsedTextSecondary, 0.6),
      '--entchen-text-secondary-700': darkenRgb(parsedTextSecondary, 0.7),
      '--entchen-text-secondary-800': darkenRgb(parsedTextSecondary, 0.8),
      '--entchen-text-secondary-900': darkenRgb(parsedTextSecondary, 0.9)
    })
  }, children));
};

var HeroSection = function HeroSection(_ref) {
  var _backgroundImage$alt;
  var title = _ref.title,
    backgroundImage = _ref.backgroundImage,
    menuItems = _ref.menuItems,
    image = _ref.image,
    mainContent = _ref.mainContent;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    menuOpen = _useState2[0],
    setMenuOpen = _useState2[1];
  return /*#__PURE__*/React.createElement("header", {
    className: "relative w-full h-screen overflow-hidden"
  }, backgroundImage && /*#__PURE__*/React.createElement("img", {
    src: backgroundImage.url,
    alt: (_backgroundImage$alt = backgroundImage.alt) !== null && _backgroundImage$alt !== void 0 ? _backgroundImage$alt : "Hero Section Background Image",
    className: "object-cover -z-10 absolute inset-0 w-full h-full",
    loading: "eager"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[var(--entchen-primary)]/50 backdrop-blur-sm -z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "absolute top-0 left-0 right-0 p-6 max-w-7xl mx-auto flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "text-2xl font-bold tracking-widest uppercase cursor-pointer select-none text-[var(--entchen-text)]"
  }, typeof title === "string" ? title : /*#__PURE__*/React.createElement(title)), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex space-x-6"
  }, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (item) {
    return /*#__PURE__*/React.createElement("a", {
      href: item.link,
      key: JSON.stringify(item),
      className: "flex items-center space-x-2 transition-transform hover:scale-110 text-[var(--entchen-text)]"
    }, typeof item.title === "string" ? item.title : /*#__PURE__*/React.createElement(item.title));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setMenuOpen(true);
    },
    "aria-label": "Open Menu",
    type: "button",
    className: "md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-[6px] cursor-pointer focus:outline-none z-[60]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm"
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setMenuOpen(false);
    },
    "aria-hidden": !menuOpen,
    tabIndex: menuOpen ? undefined : -1,
    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300 ".concat(menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
  }), /*#__PURE__*/React.createElement("aside", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Mobile navigation menu",
    className: "fixed top-0 left-0 bottom-0 w-[250px] max-w-full bg-[var(--entchen-secondary)] text-[var(--entchen-text-secondary-color)] shadow-xl z-[60]\n           transform transition-transform duration-[350ms] ease-in-out \n           ".concat(menuOpen ? "translate-x-0" : "-translate-x-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end p-4 border-b border-gray700"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setMenuOpen(false);
    },
    "aria-label": "Close Menu",
    type: "button",
    className: "hover:text-gray400 focus:outline-none focus:ring focus:ring-white rounded text-current"
  }, "\u2715")), /*#__PURE__*/React.createElement("nav", {
    className: "flex flex-col mt-4 space-y-4 px-6 text-lg font-semibold select-none"
  }, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(function (item) {
    return /*#__PURE__*/React.createElement("a", {
      href: item.link,
      key: JSON.stringify(item),
      onClick: function onClick() {
        return setMenuOpen(false);
      },
      className: " block py2 px1  border-b border-gray700 last:border-b-transparent  hover:text-gray400 transition-colors duration150 ease-in-out cursor-pointer "
    }, typeof item.title === "string" ? item.title : /*#__PURE__*/React.createElement(item.title));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl w-full flex flex-col items-center md:flex-row md:items-center md:justify-center md:space-x12 mt20 md:mt0"
  }, image && /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink--0 mb8 md:mb0 md:w1/2 flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: image.url,
    alt: image.alt || "Hero Section Main Image",
    width: 500,
    height: 500,
    loading: "lazy",
    decoding: "async"
    // replicate classes from original for styling:
    ,
    className: " rounded-lg shadow2xl transition-transform transform hover-scale105"
  })), /*#__PURE__*/React.createElement("div", {
    className: " flex flex-col items-center md-items-start text-center md-text-left md:w1/2 px-auto  text-[var(--entchen-text)] drop-shadow-lg max-w-xl  "
  }, /*#__PURE__*/React.createElement("h1", {
    className: " text5xl sm-text6xl md-text7xl font-extrabold tracking-tight leading-tight mb4 drop-shadow-lg  "
  }, mainContent.title), /*#__PURE__*/React.createElement("p", {
    className: " text-lg sm-text-xl font-light mb8 drop-shadow-md max-w-xl   "
  }, mainContent.description), mainContent.links && /*#__PURE__*/React.createElement("div", {
    className: " flex gap-x4 gap-y2 flex-wrap justify-center md:justify-start   "
  }, mainContent.links.map(function (item) {
    return /*#__PURE__*/React.createElement("a", {
      href: item.link,
      key: JSON.stringify(item),
      onClick: function onClick() {
        return setMenuOpen(false);
      }
      // added cursor:pointer so it behaves like button:
      ,
      style: {
        cursor: 'pointer'
      }
      // copied your tailwind classes:
      ,
      className: " bg-white text-black font-semibold py3 px8 rounded-full shadow-lg hover:bg-gray200 transition-colors transform hover-scale105 select-none   "
    }, typeof item.title === 'string' ? item.title : /*#__PURE__*/React.createElement(item.title));
  }))))));
};

exports.Alert = Alert;
exports.Button = Button;
exports.Card = Card;
exports.Dialog = Dialog;
exports.EntchenProvider = EntchenProvider;
exports.HeroSection = HeroSection;
