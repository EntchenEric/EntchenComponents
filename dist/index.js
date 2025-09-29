"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "node_modules/shallowequal/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  Button: () => Button,
  Card: () => Card,
  DatePicker: () => DatePicker,
  Dialog: () => Dialog,
  EntchenProvider: () => EntchenProvider,
  HeroSection: () => HeroSection,
  Popover: () => Popover
});
module.exports = __toCommonJS(index_exports);

// src/Alert/Alert.tsx
var import_react = __toESM(require("react"));
var baseClasses = "rounded-lg p-4 flex space-x-3 items-start shadow-sm";
var textClasses = "font-semibold leading-tight";
var descClasses = "mt-1 text-sm opacity-90 leading-relaxed text-[var(--entchen-text-secondary)]";
var Alert = ({
  variant = "default",
  title,
  description,
  icon: Icon
}) => {
  let variantClassNames = "";
  let style;
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
        backgroundColor: "var(--entchen-primary)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--entchen-primary-600)",
        color: "var(--entchen-text)"
      };
      break;
  }
  return /* @__PURE__ */ import_react.default.createElement("div", { className: `${baseClasses} ${variantClassNames}`, style, role: "alert", "aria-live": "polite", "aria-atomic": "true" }, Icon && /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-shrink-0 mt-[2px]" }, /* @__PURE__ */ import_react.default.createElement(Icon, null)), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ import_react.default.createElement("p", { className: textClasses }, title), description && /* @__PURE__ */ import_react.default.createElement("p", { className: descClasses }, description)));
};

// src/Button/Button.tsx
var import_react2 = __toESM(require("react"));
var ButtonVariantClasses = (variant) => {
  switch (variant) {
    case "primary":
      return `
                bg-[var(--entchen-primary)] 
                text-[var(--entchen-text)] 
                focus:ring-[var(--entchen-secondary)]
                
                hover:bg-[var(--entchen-primary-100)] 
                cursor-pointer
            
                disabled:bg-gray-300 
                disabled:hover:bg-gray-300
                disabled:text-gray-500 
                disabled:cursor-not-allowed 
            `;
    case "secondary":
      return `
                bg-[var(--entchen-secondary)] 
                text-[var(--entchen-text-secondary)] 
                focus:ring-[var(--entchen-secondary)]
                
                hover:bg-[var(--entchen-secondary-100)] 
                cursor-pointer
                
                disabled:bg-gray-200
                disabled:hover:bg-gray-200
                disabled:text-gray-400
                disabled:cursor-not-allowed
            `;
    case "danger":
      return `
              bg-red-600 text-white focus:ring-red-500
              hover:bg-red-700 cursor-pointer
              disabled:bg-red-300
              disabled:text-white/70
              disabled:cursor-not-allowed
              disabled:hover:bg-red-300
            `;
    case "warning":
      return `
              bg-yellow-500 text-black focus:ring-yellow-400
              hover:bg-yellow-600 cursor-pointer
              disabled:bg-yellow-300
              disabled:text-black/50
              disabled:cursor-not-allowed
              disabled:hover:bg-yellow-300
            `;
    default:
      return "";
  }
};
var baseClasses2 = () => {
  return "rounded-md p-2 inline-flex gap-2 align-middle";
};
var Button = ({
  title,
  leftIcon,
  rightIcon,
  disabled,
  loading,
  variant = "primary",
  onClick,
  className = "",
  ...rest
}) => {
  return /* @__PURE__ */ import_react2.default.createElement(
    "button",
    {
      type: "button",
      className: `${ButtonVariantClasses(variant)} ${baseClasses2()} ${className}`,
      disabled: disabled || loading,
      "aria-disabled": disabled || loading,
      onClick,
      ...rest
    },
    loading && /* @__PURE__ */ import_react2.default.createElement(
      "svg",
      {
        role: "status",
        "aria-label": "loading",
        className: "w-5 h-5 animate-spin text-current",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ import_react2.default.createElement(
        "circle",
        {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentcolor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ import_react2.default.createElement(
        "path",
        {
          className: "opacity-75",
          fill: "currentcolor",
          d: "M4 12a8 8 0 018-8v4a4 4 000 -4vH4z"
        }
      )
    ),
    !loading && leftIcon && leftIcon,
    /* @__PURE__ */ import_react2.default.createElement("span", null, title),
    !loading && rightIcon && rightIcon
  );
};

// src/Card/Card.tsx
var import_react3 = __toESM(require("react"));
var Card = ({
  title,
  description,
  icon: Icon,
  elevateOnHover = true,
  leftImage,
  rightImage
}) => {
  var _a, _b;
  return /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      className: `bg-[var(--entchen-primary)] p-8 rounded-2xl shadow-lg border border-[var(--entchen-primary-200)]/50 backdrop-blur-sm transition-all duration-300 ${elevateOnHover ? "hover:shadow-xl hover:-translate-y-1" : ""}`,
      style: {
        opacity: 1,
        transform: "none"
      }
    },
    /* @__PURE__ */ import_react3.default.createElement(
      "div",
      {
        className: `flex items-center ${leftImage || rightImage ? "gap-6 md:gap-10" : ""}`
      },
      leftImage && /* @__PURE__ */ import_react3.default.createElement("div", { className: "hidden md:block flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden shadow-md" }, /* @__PURE__ */ import_react3.default.createElement(
        "img",
        {
          src: leftImage.url,
          alt: (_a = leftImage.alt) != null ? _a : "Left image",
          style: { width: "100%", height: "100%", objectFit: "cover" }
        }
      )),
      /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex-grow min-w-0" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "flex items-center gap-4 mb-3" }, Icon && /* @__PURE__ */ import_react3.default.createElement(
        "span",
        {
          className: "text-[var(--entchen-secondary)] flex-shrink-0",
          "aria-hidden": "true"
        },
        /* @__PURE__ */ import_react3.default.createElement(Icon, null)
      ), typeof title === "string" ? /* @__PURE__ */ import_react3.default.createElement(
        "h3",
        {
          className: "font-semibold text-xl truncate text-[var(--entchen-text)]",
          title
        },
        title
      ) : title), typeof description === "string" ? /* @__PURE__ */ import_react3.default.createElement("p", { className: "text-[var(--entchen-text)] break-normal" }, description) : description),
      rightImage && /* @__PURE__ */ import_react3.default.createElement("div", { className: "hidden md:block flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden shadow-md" }, /* @__PURE__ */ import_react3.default.createElement(
        "img",
        {
          src: rightImage.url,
          alt: (_b = rightImage.alt) != null ? _b : "Right image",
          style: { width: "100%", height: "100%", objectFit: "cover" }
        }
      ))
    )
  );
};

// src/Dialog/Dialog.tsx
var import_react4 = __toESM(require("react"));
var ANIMATION_DURATION = 200;
var Dialog = ({
  trigger,
  title,
  description,
  onConfirm,
  onCancel,
  onDialogClose,
  confirmButton = { title: "Confirm" },
  cancelButton = { title: "Cancel", variant: "danger" }
}) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h;
  const [rendered, setRendered] = (0, import_react4.useState)(false);
  const [visible, setVisible] = (0, import_react4.useState)(false);
  function openDialog() {
    setRendered(true);
    setVisible(false);
    requestAnimationFrame(() => {
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
    setTimeout(() => {
      setRendered(false);
    }, ANIMATION_DURATION);
  }
  function renderTrigger() {
    if (typeof trigger === "string") {
      return /* @__PURE__ */ import_react4.default.createElement(
        Button,
        {
          ...confirmButton.variant ? { variant: confirmButton.variant } : {},
          title: trigger,
          onClick: openDialog
        }
      );
    } else {
      return trigger;
    }
  }
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, renderTrigger(), rendered && /* @__PURE__ */ import_react4.default.createElement(
    "div",
    {
      "aria-modal": "true",
      role: "dialog",
      "aria-labelledby": "dialog-title",
      "aria-describedby": description ? "dialog-description" : void 0,
      className: "fixed inset-0 z-50 flex items-center justify-center",
      tabIndex: -1,
      style: {
        backgroundColor: visible ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)",
        backdropFilter: visible ? "blur(4px)" : "blur(0)",
        WebkitBackdropFilter: visible ? "blur(4px)" : "blur(0)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? void 0 : "none",
        transitionProperty: "opacity, background-color, backdrop-filter",
        transitionDuration: `${ANIMATION_DURATION}ms`,
        transitionTimingFunction: "ease-out"
      },
      onKeyDown: (e2) => {
        if (e2.key === "Escape") closeDialog();
      }
    },
    /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute inset-0", "aria-hidden": "true", onClick: closeDialog }),
    /* @__PURE__ */ import_react4.default.createElement(
      "div",
      {
        role: "document",
        className: "relative max-w-lg w-full rounded-lg shadow-lg p-6 mx-4 transform transition-transform duration-200 ease-out",
        style: {
          backgroundColor: "var(--entchen-primary)",
          color: "var(--entchen-text)",
          opacity: visible ? 1 : 0,
          transformOrigin: "center center",
          transform: visible ? "scale(1)" : "scale(0.95)",
          transitionProperty: "opacity, transform",
          transitionDuration: `${ANIMATION_DURATION}ms`,
          transitionTimingFunction: "ease-out"
        }
      },
      /* @__PURE__ */ import_react4.default.createElement("h2", { id: "dialog-title", className: "text-xl font-semibold mb-2" }, title),
      description && /* @__PURE__ */ import_react4.default.createElement("p", { id: "dialog-description", className: "mb-6" }, description),
      /* @__PURE__ */ import_react4.default.createElement("div", { className: "flex justify-end gap-3" }, /* @__PURE__ */ import_react4.default.createElement(
        Button,
        {
          ...cancelButton,
          title: cancelButton.title,
          variant: (_a = cancelButton.variant) != null ? _a : "secondary",
          loading: (_b = cancelButton.loading) != null ? _b : false,
          leftIcon: cancelButton.leftIcon,
          rightIcon: cancelButton.rightIcon,
          disabled: (_c = cancelButton.disabled) != null ? _c : false,
          type: (_d = cancelButton.type) != null ? _d : "button",
          onClick: () => {
            if (onCancel) {
              onCancel(closeDialog);
            } else {
              closeDialog();
            }
          }
        }
      ), /* @__PURE__ */ import_react4.default.createElement(
        Button,
        {
          ...confirmButton,
          title: confirmButton.title,
          variant: (_e2 = confirmButton.variant) != null ? _e2 : "primary",
          loading: (_f = confirmButton.loading) != null ? _f : false,
          leftIcon: confirmButton.leftIcon,
          rightIcon: confirmButton.rightIcon,
          disabled: (_g = confirmButton.disabled) != null ? _g : false,
          type: (_h = confirmButton.type) != null ? _h : "button",
          onClick: () => {
            if (onConfirm) {
              onConfirm(closeDialog);
            } else {
              closeDialog();
            }
          }
        }
      ))
    )
  ));
};

// utils/colorUtils.ts
function colourNameToHex(colour) {
  const colours = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred ": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgrey": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370d8",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#d87093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
  };
  if (typeof colours[colour.toLowerCase()] != "undefined")
    return colours[colour.toLowerCase()];
  return false;
}
function darkenRgb(rgb, amount) {
  const m2 = rgb.match(/\d+/g);
  if (!m2) return rgb;
  let [r2, g2, b] = m2.map(Number);
  r2 = Math.max(0, Math.min(255, Math.floor(r2 * (1 - amount))));
  g2 = Math.max(0, Math.min(255, Math.floor(g2 * (1 - amount))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - amount))));
  return `rgb(${r2},${g2},${b})`;
}
function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map((c2) => c2 + c2).join("");
  }
  const num = parseInt(hex, 16);
  const r2 = num >> 16 & 255;
  const g2 = num >> 8 & 255;
  const b = num & 255;
  return `rgb(${r2},${g2},${b})`;
}

// src/EntchenProvider/EntchenProvider.tsx
var import_react5 = __toESM(require("react"));
var ThemeContext = (0, import_react5.createContext)(void 0);
var EntchenProvider = ({ children, theme }) => {
  const parsedPrimary = hexToRgb(colourNameToHex(theme.primaryColor) || theme.primaryColor);
  const parsedSecondary = hexToRgb(colourNameToHex(theme.secondaryColor) || theme.secondaryColor);
  const parsedText = hexToRgb(colourNameToHex(theme.textColor) || theme.textColor);
  const parsedTextSecondary = hexToRgb(colourNameToHex(theme.textSecondaryColor) || theme.textSecondaryColor);
  return /* @__PURE__ */ import_react5.default.createElement(ThemeContext.Provider, { value: theme }, /* @__PURE__ */ import_react5.default.createElement("div", { style: {
    ...{
      "--entchen-primary": parsedPrimary,
      "--entchen-primary-100": darkenRgb(parsedPrimary, 0.1),
      "--entchen-primary-200": darkenRgb(parsedPrimary, 0.2),
      "--entchen-primary-300": darkenRgb(parsedPrimary, 0.3),
      "--entchen-primary-400": darkenRgb(parsedPrimary, 0.4),
      "--entchen-primary-500": darkenRgb(parsedPrimary, 0.5),
      "--entchen-primary-600": darkenRgb(parsedPrimary, 0.6),
      "--entchen-primary-700": darkenRgb(parsedPrimary, 0.7),
      "--entchen-primary-800": darkenRgb(parsedPrimary, 0.8),
      "--entchen-primary-900": darkenRgb(parsedPrimary, 0.9),
      "--entchen-secondary": parsedSecondary,
      "--entchen-secondary-100": darkenRgb(parsedSecondary, 0.1),
      "--entchen-secondary-200": darkenRgb(parsedSecondary, 0.2),
      "--entchen-secondary-300": darkenRgb(parsedSecondary, 0.3),
      "--entchen-secondary-400": darkenRgb(parsedSecondary, 0.4),
      "--entchen-secondary-500": darkenRgb(parsedSecondary, 0.5),
      "--entchen-secondary-600": darkenRgb(parsedSecondary, 0.6),
      "--entchen-secondary-700": darkenRgb(parsedSecondary, 0.7),
      "--entchen-secondary-800": darkenRgb(parsedSecondary, 0.8),
      "--entchen-secondary-900": darkenRgb(parsedSecondary, 0.9),
      "--entchen-text": parsedText,
      "--entchen-text-100": darkenRgb(parsedText, 0.1),
      "--entchen-text-200": darkenRgb(parsedText, 0.2),
      "--entchen-text-300": darkenRgb(parsedText, 0.3),
      "--entchen-text-400": darkenRgb(parsedText, 0.4),
      "--entchen-text-500": darkenRgb(parsedText, 0.5),
      "--entchen-text-600": darkenRgb(parsedText, 0.6),
      "--entchen-text-700": darkenRgb(parsedText, 0.7),
      "--entchen-text-800": darkenRgb(parsedText, 0.8),
      "--entchen-text-900": darkenRgb(parsedText, 0.9),
      "--entchen-text-secondary": parsedTextSecondary,
      "--entchen-text-secondary-100": darkenRgb(parsedTextSecondary, 0.1),
      "--entchen-text-secondary-200": darkenRgb(parsedTextSecondary, 0.2),
      "--entchen-text-secondary-300": darkenRgb(parsedTextSecondary, 0.3),
      "--entchen-text-secondary-400": darkenRgb(parsedTextSecondary, 0.4),
      "--entchen-text-secondary-500": darkenRgb(parsedTextSecondary, 0.5),
      "--entchen-text-secondary-600": darkenRgb(parsedTextSecondary, 0.6),
      "--entchen-text-secondary-700": darkenRgb(parsedTextSecondary, 0.7),
      "--entchen-text-secondary-800": darkenRgb(parsedTextSecondary, 0.8),
      "--entchen-text-secondary-900": darkenRgb(parsedTextSecondary, 0.9)
    }
  } }, children));
};

// src/HeroSection/HeroSection.tsx
var import_react6 = __toESM(require("react"));
var HeroSection = ({
  title,
  backgroundImage,
  menuItems,
  image,
  mainContent
}) => {
  var _a;
  const [menuOpen, setMenuOpen] = (0, import_react6.useState)(false);
  return /* @__PURE__ */ import_react6.default.createElement("header", { className: "relative w-full h-screen overflow-hidden" }, backgroundImage && /* @__PURE__ */ import_react6.default.createElement(
    "img",
    {
      src: backgroundImage.url,
      alt: (_a = backgroundImage.alt) != null ? _a : "Hero Section Background Image",
      className: "object-cover -z-10 absolute inset-0 w-full h-full",
      loading: "eager"
    }
  ), /* @__PURE__ */ import_react6.default.createElement("div", { className: "absolute inset-0 bg-[var(--entchen-primary)]/50 backdrop-blur-sm -z-10" }), /* @__PURE__ */ import_react6.default.createElement("div", { className: "relative z-10 flex flex-col items-center justify-center h-full px-4 text-center" }, /* @__PURE__ */ import_react6.default.createElement("nav", { className: "absolute top-0 left-0 right-0 p-6 max-w-7xl mx-auto flex justify-between items-center" }, /* @__PURE__ */ import_react6.default.createElement("a", { href: "/", className: "text-2xl font-bold tracking-widest uppercase cursor-pointer select-none text-[var(--entchen-text)]" }, title), /* @__PURE__ */ import_react6.default.createElement("div", { className: "hidden md:flex space-x-6" }, menuItems == null ? void 0 : menuItems.map((item) => /* @__PURE__ */ import_react6.default.createElement(
    "a",
    {
      href: item.link,
      key: JSON.stringify(item),
      className: "flex items-center space-x-2 transition-transform hover:scale-110 text-[var(--entchen-text)]"
    },
    item.title
  ))), /* @__PURE__ */ import_react6.default.createElement(
    "button",
    {
      onClick: () => setMenuOpen(true),
      "aria-label": "Open Menu",
      type: "button",
      className: "md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-[6px] cursor-pointer focus:outline-none z-[60]"
    },
    /* @__PURE__ */ import_react6.default.createElement("span", { className: "block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm" }),
    /* @__PURE__ */ import_react6.default.createElement("span", { className: "block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm" }),
    /* @__PURE__ */ import_react6.default.createElement("span", { className: "block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm" })
  )), /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      onClick: () => setMenuOpen(false),
      "aria-hidden": !menuOpen,
      tabIndex: menuOpen ? void 0 : -1,
      className: `fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`
    }
  ), /* @__PURE__ */ import_react6.default.createElement(
    "aside",
    {
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Mobile navigation menu",
      className: `fixed top-0 left-0 bottom-0 w-[250px] max-w-full bg-[var(--entchen-secondary)] text-[var(--entchen-text-secondary-color)] shadow-xl z-[60]
           transform transition-transform duration-[350ms] ease-in-out 
           ${menuOpen ? "translate-x-0" : "-translate-x-full"}`
    },
    /* @__PURE__ */ import_react6.default.createElement("div", { className: "flex justify-end p-4 border-b border-gray700" }, /* @__PURE__ */ import_react6.default.createElement(
      "button",
      {
        onClick: () => setMenuOpen(false),
        "aria-label": "Close Menu",
        type: "button",
        className: "hover:text-gray400 focus:outline-none focus:ring focus:ring-white rounded text-current"
      },
      "\u2715"
    )),
    /* @__PURE__ */ import_react6.default.createElement("nav", { className: "flex flex-col mt-4 space-y-4 px-6 text-lg font-semibold select-none" }, menuItems == null ? void 0 : menuItems.map((item) => /* @__PURE__ */ import_react6.default.createElement(
      "a",
      {
        href: item.link,
        key: JSON.stringify(item),
        onClick: () => setMenuOpen(false),
        className: "\n                  block py2 px1 \n                  border-b border-gray700 last:border-b-transparent \n                  hover:text-gray400 transition-colors duration150 ease-in-out cursor-pointer\n                "
      },
      title
    )))
  ), /* @__PURE__ */ import_react6.default.createElement("div", { className: "max-w-6xl w-full flex flex-col items-center md:flex-row md:items-center md:justify-center md:space-x12 mt20 md:mt0" }, image && /* @__PURE__ */ import_react6.default.createElement("div", { className: "flex-shrink--0 mb8 md:mb0 md:w1/2 flex justify-center items-center" }, /* @__PURE__ */ import_react6.default.createElement(
    "img",
    {
      src: image.url,
      alt: image.alt || "Hero Section Main Image",
      width: 500,
      height: 500,
      loading: "lazy",
      decoding: "async",
      className: "\n                 rounded-lg shadow2xl transition-transform transform hover-scale105"
    }
  )), /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      className: "\n             flex flex-col items-center md-items-start text-center md-text-left md:w1/2 px-auto \n             text-[var(--entchen-text)] drop-shadow-lg max-w-xl \n           "
    },
    /* @__PURE__ */ import_react6.default.createElement(
      "h1",
      {
        className: "\n               text5xl sm-text6xl md-text7xl font-extrabold tracking-tight leading-tight mb4 drop-shadow-lg \n             "
      },
      mainContent.title
    ),
    /* @__PURE__ */ import_react6.default.createElement(
      "p",
      {
        className: "\n               text-lg sm-text-xl font-light mb8 drop-shadow-md max-w-xl  \n             "
      },
      mainContent.description
    ),
    mainContent.links && /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        className: "\n                 flex gap-x4 gap-y2 flex-wrap justify-center md:justify-start  \n               "
      },
      mainContent.links.map((item) => /* @__PURE__ */ import_react6.default.createElement(
        "a",
        {
          href: item.link,
          key: JSON.stringify(item),
          onClick: () => setMenuOpen(false),
          style: { cursor: "pointer" },
          className: "\n                     bg-white text-black font-semibold py3 px8 rounded-full shadow-lg hover:bg-gray200 transition-colors transform hover-scale105 select-none  \n                   "
        },
        item.title
      ))
    )
  ))));
};

// src/DatePicker/DatePicker.tsx
var import_react7 = __toESM(require("react"));
var DatePicker = () => {
  return /* @__PURE__ */ import_react7.default.createElement("div", { className: "p-20" });
};

// src/Popover/Popover.tsx
var import_react9 = __toESM(require("react"));

// node_modules/styled-components/dist/styled-components.esm.js
var import_tslib = require("tslib");

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);

// node_modules/styled-components/dist/styled-components.esm.js
var import_react8 = __toESM(require("react"));
var import_shallowequal = __toESM(require_shallowequal());

// node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
function filter(array, pattern) {
  return array.filter(function(value) {
    return !match(value, pattern);
  });
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
function lift(root) {
  while (root.root)
    root = copy(root.root, { children: [root] });
  append(root, root.siblings);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      // (
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      // \
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          // @ ;
          case 59:
            characters2 += ";";
          // { rule/at-rule
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      // :
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}

// node_modules/stylis/src/Prefixer.js
function prefix(value, length2, children) {
  switch (hash(value, length2)) {
    // color-adjust
    case 5103:
      return WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // tab-size
    case 4789:
      return MOZ + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // writing-mode
    case 5936:
      switch (charat(value, length2 + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    // justify-self
    case 4200:
      if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length2) + value;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return MS + replace(value, "template-", "") + value;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      if (children && children.some(function(element, index) {
        return length2 = index, match(element.props, /grid-\w+-end/);
      })) {
        return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
      }
      return MS + replace(value, "-start", "") + value;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          // (s)tretch
          case 115:
            return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b, c2, d, e2, f2) {
        return MS + a2 + ":" + b + f2 + (c2 ? MS + a2 + "-span:" + (d ? e2 : +e2 - +b) + f2 : "") + value;
      });
    // position: sticky
    case 4949:
      if (charat(value, length2 + 6) === 121)
        return replace(value, ":", ":" + WEBKIT) + value;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        // (inline-)?gri(d)
        case 100:
          return replace(value, ":", ":" + MS) + value;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  for (var i2 = 0; i2 < children.length; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length, children);
          return;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(children = element.props, function(value) {
              switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                // :read-(only|write)
                case ":read-only":
                case ":read-write":
                  lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
                // :placeholder
                case "::placeholder":
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
              }
              return "";
            });
      }
  }
}

// node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// node_modules/styled-components/dist/styled-components.esm.js
var f = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var m = "active";
var y = "data-styled-version";
var v = "6.1.19";
var g = "/*!sc*/\n";
var S = "undefined" != typeof window && "undefined" != typeof document;
var w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== process.env.NODE_ENV);
var E = /invalid hook call/i;
var N = /* @__PURE__ */ new Set();
var P = function(t2, n) {
  if ("production" !== process.env.NODE_ENV) {
    var o2 = n ? ' with the id of "'.concat(n, '"') : "", s2 = "The component ".concat(t2).concat(o2, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.\nSee https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.\n", i2 = console.error;
    try {
      var a2 = true;
      console.error = function(t3) {
        for (var n2 = [], o3 = 1; o3 < arguments.length; o3++) n2[o3 - 1] = arguments[o3];
        E.test(t3) ? (a2 = false, N.delete(s2)) : i2.apply(void 0, (0, import_tslib.__spreadArray)([t3], n2, false));
      }, (0, import_react8.useRef)(), a2 && !N.has(s2) && (console.warn(s2), N.add(s2));
    } catch (e2) {
      E.test(e2.message) && N.delete(s2);
    } finally {
      console.error = i2;
    }
  }
};
var _ = Object.freeze([]);
var C = Object.freeze({});
function I(e2, t2, n) {
  return void 0 === n && (n = C), e2.theme !== n.theme && e2.theme || t2 || n.theme;
}
var A = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]);
var O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var D = /(^-|-$)/g;
function R(e2) {
  return e2.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi;
var k = 52;
var j = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function x(e2) {
  var t2, n = "";
  for (t2 = Math.abs(e2); t2 > k; t2 = t2 / k | 0) n = j(t2 % k) + n;
  return (j(t2 % k) + n).replace(T, "$1-$2");
}
var V;
var F = 5381;
var z = function(e2, t2) {
  for (var n = t2.length; n; ) e2 = 33 * e2 ^ t2.charCodeAt(--n);
  return e2;
};
var M = function(e2) {
  return z(F, e2);
};
function $(e2) {
  return x(M(e2) >>> 0);
}
function B(e2) {
  return "production" !== process.env.NODE_ENV && "string" == typeof e2 && e2 || e2.displayName || e2.name || "Component";
}
function G(e2) {
  return "string" == typeof e2 && ("production" === process.env.NODE_ENV || e2.charAt(0) === e2.charAt(0).toLowerCase());
}
var L = "function" == typeof Symbol && Symbol.for;
var Y = L ? Symbol.for("react.memo") : 60115;
var q = L ? Symbol.for("react.forward_ref") : 60112;
var W = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
var H = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
var U = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
var J = ((V = {})[q] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, V[Y] = U, V);
function X(e2) {
  return ("type" in (t2 = e2) && t2.type.$$typeof) === Y ? U : "$$typeof" in e2 ? J[e2.$$typeof] : W;
  var t2;
}
var Z = Object.defineProperty;
var K = Object.getOwnPropertyNames;
var Q = Object.getOwnPropertySymbols;
var ee = Object.getOwnPropertyDescriptor;
var te = Object.getPrototypeOf;
var ne = Object.prototype;
function oe(e2, t2, n) {
  if ("string" != typeof t2) {
    if (ne) {
      var o2 = te(t2);
      o2 && o2 !== ne && oe(e2, o2, n);
    }
    var r2 = K(t2);
    Q && (r2 = r2.concat(Q(t2)));
    for (var s2 = X(e2), i2 = X(t2), a2 = 0; a2 < r2.length; ++a2) {
      var c2 = r2[a2];
      if (!(c2 in H || n && n[c2] || i2 && c2 in i2 || s2 && c2 in s2)) {
        var l2 = ee(t2, c2);
        try {
          Z(e2, c2, l2);
        } catch (e3) {
        }
      }
    }
  }
  return e2;
}
function re(e2) {
  return "function" == typeof e2;
}
function se(e2) {
  return "object" == typeof e2 && "styledComponentId" in e2;
}
function ie(e2, t2) {
  return e2 && t2 ? "".concat(e2, " ").concat(t2) : e2 || t2 || "";
}
function ae(e2, t2) {
  if (0 === e2.length) return "";
  for (var n = e2[0], o2 = 1; o2 < e2.length; o2++) n += t2 ? t2 + e2[o2] : e2[o2];
  return n;
}
function ce(e2) {
  return null !== e2 && "object" == typeof e2 && e2.constructor.name === Object.name && !("props" in e2 && e2.$$typeof);
}
function le(e2, t2, n) {
  if (void 0 === n && (n = false), !n && !ce(e2) && !Array.isArray(e2)) return t2;
  if (Array.isArray(t2)) for (var o2 = 0; o2 < t2.length; o2++) e2[o2] = le(e2[o2], t2[o2]);
  else if (ce(t2)) for (var o2 in t2) e2[o2] = le(e2[o2], t2[o2]);
  return e2;
}
function ue(e2, t2) {
  Object.defineProperty(e2, "toString", { value: t2 });
}
var pe = "production" !== process.env.NODE_ENV ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n", 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function de() {
  for (var e2 = [], t2 = 0; t2 < arguments.length; t2++) e2[t2] = arguments[t2];
  for (var n = e2[0], o2 = [], r2 = 1, s2 = e2.length; r2 < s2; r2 += 1) o2.push(e2[r2]);
  return o2.forEach(function(e3) {
    n = n.replace(/%[a-z]/, e3);
  }), n;
}
function he(t2) {
  for (var n = [], o2 = 1; o2 < arguments.length; o2++) n[o2 - 1] = arguments[o2];
  return "production" === process.env.NODE_ENV ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t2, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(de.apply(void 0, (0, import_tslib.__spreadArray)([pe[t2]], n, false)).trim());
}
var fe = (function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  return e2.prototype.indexOfGroup = function(e3) {
    for (var t2 = 0, n = 0; n < e3; n++) t2 += this.groupSizes[n];
    return t2;
  }, e2.prototype.insertRules = function(e3, t2) {
    if (e3 >= this.groupSizes.length) {
      for (var n = this.groupSizes, o2 = n.length, r2 = o2; e3 >= r2; ) if ((r2 <<= 1) < 0) throw he(16, "".concat(e3));
      this.groupSizes = new Uint32Array(r2), this.groupSizes.set(n), this.length = r2;
      for (var s2 = o2; s2 < r2; s2++) this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e3 + 1), a2 = (s2 = 0, t2.length); s2 < a2; s2++) this.tag.insertRule(i2, t2[s2]) && (this.groupSizes[e3]++, i2++);
  }, e2.prototype.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t2 = this.groupSizes[e3], n = this.indexOfGroup(e3), o2 = n + t2;
      this.groupSizes[e3] = 0;
      for (var r2 = n; r2 < o2; r2++) this.tag.deleteRule(n);
    }
  }, e2.prototype.getGroup = function(e3) {
    var t2 = "";
    if (e3 >= this.length || 0 === this.groupSizes[e3]) return t2;
    for (var n = this.groupSizes[e3], o2 = this.indexOfGroup(e3), r2 = o2 + n, s2 = o2; s2 < r2; s2++) t2 += "".concat(this.tag.getRule(s2)).concat(g);
    return t2;
  }, e2;
})();
var me = 1 << 30;
var ye = /* @__PURE__ */ new Map();
var ve = /* @__PURE__ */ new Map();
var ge = 1;
var Se = function(e2) {
  if (ye.has(e2)) return ye.get(e2);
  for (; ve.has(ge); ) ge++;
  var t2 = ge++;
  if ("production" !== process.env.NODE_ENV && ((0 | t2) < 0 || t2 > me)) throw he(16, "".concat(t2));
  return ye.set(e2, t2), ve.set(t2, e2), t2;
};
var we = function(e2, t2) {
  ge = t2 + 1, ye.set(e2, t2), ve.set(t2, e2);
};
var be = "style[".concat(f, "][").concat(y, '="').concat(v, '"]');
var Ee = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));
var Ne = function(e2, t2, n) {
  for (var o2, r2 = n.split(","), s2 = 0, i2 = r2.length; s2 < i2; s2++) (o2 = r2[s2]) && e2.registerName(t2, o2);
};
var Pe = function(e2, t2) {
  for (var n, o2 = (null !== (n = t2.textContent) && void 0 !== n ? n : "").split(g), r2 = [], s2 = 0, i2 = o2.length; s2 < i2; s2++) {
    var a2 = o2[s2].trim();
    if (a2) {
      var c2 = a2.match(Ee);
      if (c2) {
        var l2 = 0 | parseInt(c2[1], 10), u2 = c2[2];
        0 !== l2 && (we(u2, l2), Ne(e2, u2, c2[3]), e2.getTag().insertRules(l2, r2)), r2.length = 0;
      } else r2.push(a2);
    }
  }
};
var _e = function(e2) {
  for (var t2 = document.querySelectorAll(be), n = 0, o2 = t2.length; n < o2; n++) {
    var r2 = t2[n];
    r2 && r2.getAttribute(f) !== m && (Pe(e2, r2), r2.parentNode && r2.parentNode.removeChild(r2));
  }
};
function Ce() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var Ie = function(e2) {
  var t2 = document.head, n = e2 || t2, o2 = document.createElement("style"), r2 = (function(e3) {
    var t3 = Array.from(e3.querySelectorAll("style[".concat(f, "]")));
    return t3[t3.length - 1];
  })(n), s2 = void 0 !== r2 ? r2.nextSibling : null;
  o2.setAttribute(f, m), o2.setAttribute(y, v);
  var i2 = Ce();
  return i2 && o2.setAttribute("nonce", i2), n.insertBefore(o2, s2), o2;
};
var Ae = (function() {
  function e2(e3) {
    this.element = Ie(e3), this.element.appendChild(document.createTextNode("")), this.sheet = (function(e4) {
      if (e4.sheet) return e4.sheet;
      for (var t2 = document.styleSheets, n = 0, o2 = t2.length; n < o2; n++) {
        var r2 = t2[n];
        if (r2.ownerNode === e4) return r2;
      }
      throw he(17);
    })(this.element), this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    try {
      return this.sheet.insertRule(t2, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, e2.prototype.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, e2.prototype.getRule = function(e3) {
    var t2 = this.sheet.cssRules[e3];
    return t2 && t2.cssText ? t2.cssText : "";
  }, e2;
})();
var Oe = (function() {
  function e2(e3) {
    this.element = Ie(e3), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    if (e3 <= this.length && e3 >= 0) {
      var n = document.createTextNode(t2);
      return this.element.insertBefore(n, this.nodes[e3] || null), this.length++, true;
    }
    return false;
  }, e2.prototype.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, e2.prototype.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
})();
var De = (function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t2), this.length++, true);
  }, e2.prototype.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, e2.prototype.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
})();
var Re = S;
var Te = { isServer: !S, useCSSOMInjection: !w };
var ke = (function() {
  function e2(e3, n, o2) {
    void 0 === e3 && (e3 = C), void 0 === n && (n = {});
    var r2 = this;
    this.options = (0, import_tslib.__assign)((0, import_tslib.__assign)({}, Te), e3), this.gs = n, this.names = new Map(o2), this.server = !!e3.isServer, !this.server && S && Re && (Re = false, _e(this)), ue(this, function() {
      return (function(e4) {
        for (var t2 = e4.getTag(), n2 = t2.length, o3 = "", r3 = function(n3) {
          var r4 = (function(e5) {
            return ve.get(e5);
          })(n3);
          if (void 0 === r4) return "continue";
          var s3 = e4.names.get(r4), i2 = t2.getGroup(n3);
          if (void 0 === s3 || !s3.size || 0 === i2.length) return "continue";
          var a2 = "".concat(f, ".g").concat(n3, '[id="').concat(r4, '"]'), c2 = "";
          void 0 !== s3 && s3.forEach(function(e5) {
            e5.length > 0 && (c2 += "".concat(e5, ","));
          }), o3 += "".concat(i2).concat(a2, '{content:"').concat(c2, '"}').concat(g);
        }, s2 = 0; s2 < n2; s2++) r3(s2);
        return o3;
      })(r2);
    });
  }
  return e2.registerId = function(e3) {
    return Se(e3);
  }, e2.prototype.rehydrate = function() {
    !this.server && S && _e(this);
  }, e2.prototype.reconstructWithOptions = function(n, o2) {
    return void 0 === o2 && (o2 = true), new e2((0, import_tslib.__assign)((0, import_tslib.__assign)({}, this.options), n), this.gs, o2 && this.names || void 0);
  }, e2.prototype.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, e2.prototype.getTag = function() {
    return this.tag || (this.tag = (e3 = (function(e4) {
      var t2 = e4.useCSSOMInjection, n = e4.target;
      return e4.isServer ? new De(n) : t2 ? new Ae(n) : new Oe(n);
    })(this.options), new fe(e3)));
    var e3;
  }, e2.prototype.hasNameForId = function(e3, t2) {
    return this.names.has(e3) && this.names.get(e3).has(t2);
  }, e2.prototype.registerName = function(e3, t2) {
    if (Se(e3), this.names.has(e3)) this.names.get(e3).add(t2);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t2), this.names.set(e3, n);
    }
  }, e2.prototype.insertRules = function(e3, t2, n) {
    this.registerName(e3, t2), this.getTag().insertRules(Se(e3), n);
  }, e2.prototype.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, e2.prototype.clearRules = function(e3) {
    this.getTag().clearGroup(Se(e3)), this.clearNames(e3);
  }, e2.prototype.clearTag = function() {
    this.tag = void 0;
  }, e2;
})();
var je = /&/g;
var xe = /^\s*\/\/.*$/gm;
function Ve(e2, t2) {
  return e2.map(function(e3) {
    return "rule" === e3.type && (e3.value = "".concat(t2, " ").concat(e3.value), e3.value = e3.value.replaceAll(",", ",".concat(t2, " ")), e3.props = e3.props.map(function(e4) {
      return "".concat(t2, " ").concat(e4);
    })), Array.isArray(e3.children) && "@keyframes" !== e3.type && (e3.children = Ve(e3.children, t2)), e3;
  });
}
function Fe(e2) {
  var t2, n, o2, r2 = void 0 === e2 ? C : e2, s2 = r2.options, i2 = void 0 === s2 ? C : s2, a2 = r2.plugins, c2 = void 0 === a2 ? _ : a2, l2 = function(e3, o3, r3) {
    return r3.startsWith(n) && r3.endsWith(n) && r3.replaceAll(n, "").length > 0 ? ".".concat(t2) : e3;
  }, u2 = c2.slice();
  u2.push(function(e3) {
    e3.type === RULESET && e3.value.includes("&") && (e3.props[0] = e3.props[0].replace(je, n).replace(o2, l2));
  }), i2.prefix && u2.push(prefixer), u2.push(stringify);
  var p2 = function(e3, r3, s3, a3) {
    void 0 === r3 && (r3 = ""), void 0 === s3 && (s3 = ""), void 0 === a3 && (a3 = "&"), t2 = a3, n = r3, o2 = new RegExp("\\".concat(n, "\\b"), "g");
    var c3 = e3.replace(xe, ""), l3 = compile(s3 || r3 ? "".concat(s3, " ").concat(r3, " { ").concat(c3, " }") : c3);
    i2.namespace && (l3 = Ve(l3, i2.namespace));
    var p3 = [];
    return serialize(l3, middleware(u2.concat(rulesheet(function(e4) {
      return p3.push(e4);
    })))), p3;
  };
  return p2.hash = c2.length ? c2.reduce(function(e3, t3) {
    return t3.name || he(15), z(e3, t3.name);
  }, F).toString() : "", p2;
}
var ze = new ke();
var Me = Fe();
var $e = import_react8.default.createContext({ shouldForwardProp: void 0, styleSheet: ze, stylis: Me });
var Be = $e.Consumer;
var Ge = import_react8.default.createContext(void 0);
function Le() {
  return (0, import_react8.useContext)($e);
}
function Ye(e2) {
  var t2 = (0, import_react8.useState)(e2.stylisPlugins), n = t2[0], r2 = t2[1], c2 = Le().styleSheet, l2 = (0, import_react8.useMemo)(function() {
    var t3 = c2;
    return e2.sheet ? t3 = e2.sheet : e2.target && (t3 = t3.reconstructWithOptions({ target: e2.target }, false)), e2.disableCSSOMInjection && (t3 = t3.reconstructWithOptions({ useCSSOMInjection: false })), t3;
  }, [e2.disableCSSOMInjection, e2.sheet, e2.target, c2]), u2 = (0, import_react8.useMemo)(function() {
    return Fe({ options: { namespace: e2.namespace, prefix: e2.enableVendorPrefixes }, plugins: n });
  }, [e2.enableVendorPrefixes, e2.namespace, n]);
  (0, import_react8.useEffect)(function() {
    (0, import_shallowequal.default)(n, e2.stylisPlugins) || r2(e2.stylisPlugins);
  }, [e2.stylisPlugins]);
  var d = (0, import_react8.useMemo)(function() {
    return { shouldForwardProp: e2.shouldForwardProp, styleSheet: l2, stylis: u2 };
  }, [e2.shouldForwardProp, l2, u2]);
  return import_react8.default.createElement($e.Provider, { value: d }, import_react8.default.createElement(Ge.Provider, { value: u2 }, e2.children));
}
var qe = (function() {
  function e2(e3, t2) {
    var n = this;
    this.inject = function(e4, t3) {
      void 0 === t3 && (t3 = Me);
      var o2 = n.name + t3.hash;
      e4.hasNameForId(n.id, o2) || e4.insertRules(n.id, o2, t3(n.rules, o2, "@keyframes"));
    }, this.name = e3, this.id = "sc-keyframes-".concat(e3), this.rules = t2, ue(this, function() {
      throw he(12, String(n.name));
    });
  }
  return e2.prototype.getName = function(e3) {
    return void 0 === e3 && (e3 = Me), this.name + e3.hash;
  }, e2;
})();
var We = function(e2) {
  return e2 >= "A" && e2 <= "Z";
};
function He(e2) {
  for (var t2 = "", n = 0; n < e2.length; n++) {
    var o2 = e2[n];
    if (1 === n && "-" === o2 && "-" === e2[0]) return e2;
    We(o2) ? t2 += "-" + o2.toLowerCase() : t2 += o2;
  }
  return t2.startsWith("ms-") ? "-" + t2 : t2;
}
var Ue = function(e2) {
  return null == e2 || false === e2 || "" === e2;
};
var Je = function(t2) {
  var n, o2, r2 = [];
  for (var s2 in t2) {
    var i2 = t2[s2];
    t2.hasOwnProperty(s2) && !Ue(i2) && (Array.isArray(i2) && i2.isCss || re(i2) ? r2.push("".concat(He(s2), ":"), i2, ";") : ce(i2) ? r2.push.apply(r2, (0, import_tslib.__spreadArray)((0, import_tslib.__spreadArray)(["".concat(s2, " {")], Je(i2), false), ["}"], false)) : r2.push("".concat(He(s2), ": ").concat((n = s2, null == (o2 = i2) || "boolean" == typeof o2 || "" === o2 ? "" : "number" != typeof o2 || 0 === o2 || n in unitlessKeys || n.startsWith("--") ? String(o2).trim() : "".concat(o2, "px")), ";")));
  }
  return r2;
};
function Xe(e2, t2, n, o2) {
  if (Ue(e2)) return [];
  if (se(e2)) return [".".concat(e2.styledComponentId)];
  if (re(e2)) {
    if (!re(s2 = e2) || s2.prototype && s2.prototype.isReactComponent || !t2) return [e2];
    var r2 = e2(t2);
    return "production" === process.env.NODE_ENV || "object" != typeof r2 || Array.isArray(r2) || r2 instanceof qe || ce(r2) || null === r2 || console.error("".concat(B(e2), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Xe(r2, t2, n, o2);
  }
  var s2;
  return e2 instanceof qe ? n ? (e2.inject(n, o2), [e2.getName(o2)]) : [e2] : ce(e2) ? Je(e2) : Array.isArray(e2) ? Array.prototype.concat.apply(_, e2.map(function(e3) {
    return Xe(e3, t2, n, o2);
  })) : [e2.toString()];
}
function Ze(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n = e2[t2];
    if (re(n) && !se(n)) return false;
  }
  return true;
}
var Ke = M(v);
var Qe = (function() {
  function e2(e3, t2, n) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = "production" === process.env.NODE_ENV && (void 0 === n || n.isStatic) && Ze(e3), this.componentId = t2, this.baseHash = z(Ke, t2), this.baseStyle = n, ke.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n) {
    var o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e3, t2, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && t2.hasNameForId(this.componentId, this.staticRulesId)) o2 = ie(o2, this.staticRulesId);
    else {
      var r2 = ae(Xe(this.rules, e3, t2, n)), s2 = x(z(this.baseHash, r2) >>> 0);
      if (!t2.hasNameForId(this.componentId, s2)) {
        var i2 = n(r2, ".".concat(s2), void 0, this.componentId);
        t2.insertRules(this.componentId, s2, i2);
      }
      o2 = ie(o2, s2), this.staticRulesId = s2;
    }
    else {
      for (var a2 = z(this.baseHash, n.hash), c2 = "", l2 = 0; l2 < this.rules.length; l2++) {
        var u2 = this.rules[l2];
        if ("string" == typeof u2) c2 += u2, "production" !== process.env.NODE_ENV && (a2 = z(a2, u2));
        else if (u2) {
          var p2 = ae(Xe(u2, e3, t2, n));
          a2 = z(a2, p2 + l2), c2 += p2;
        }
      }
      if (c2) {
        var d = x(a2 >>> 0);
        t2.hasNameForId(this.componentId, d) || t2.insertRules(this.componentId, d, n(c2, ".".concat(d), void 0, this.componentId)), o2 = ie(o2, d);
      }
    }
    return o2;
  }, e2;
})();
var et = import_react8.default.createContext(void 0);
var tt = et.Consumer;
var rt = {};
var st = /* @__PURE__ */ new Set();
function it(e2, r2, s2) {
  var i2 = se(e2), a2 = e2, c2 = !G(e2), p2 = r2.attrs, d = void 0 === p2 ? _ : p2, h = r2.componentId, f2 = void 0 === h ? (function(e3, t2) {
    var n = "string" != typeof e3 ? "sc" : R(e3);
    rt[n] = (rt[n] || 0) + 1;
    var o2 = "".concat(n, "-").concat($(v + n + rt[n]));
    return t2 ? "".concat(t2, "-").concat(o2) : o2;
  })(r2.displayName, r2.parentComponentId) : h, m2 = r2.displayName, y2 = void 0 === m2 ? (function(e3) {
    return G(e3) ? "styled.".concat(e3) : "Styled(".concat(B(e3), ")");
  })(e2) : m2, g2 = r2.displayName && r2.componentId ? "".concat(R(r2.displayName), "-").concat(r2.componentId) : r2.componentId || f2, S2 = i2 && a2.attrs ? a2.attrs.concat(d).filter(Boolean) : d, w2 = r2.shouldForwardProp;
  if (i2 && a2.shouldForwardProp) {
    var b = a2.shouldForwardProp;
    if (r2.shouldForwardProp) {
      var E2 = r2.shouldForwardProp;
      w2 = function(e3, t2) {
        return b(e3, t2) && E2(e3, t2);
      };
    } else w2 = b;
  }
  var N2 = new Qe(s2, g2, i2 ? a2.componentStyle : void 0);
  function O2(e3, r3) {
    return (function(e4, r4, s3) {
      var i3 = e4.attrs, a3 = e4.componentStyle, c3 = e4.defaultProps, p3 = e4.foldedComponentIds, d2 = e4.styledComponentId, h2 = e4.target, f3 = import_react8.default.useContext(et), m3 = Le(), y3 = e4.shouldForwardProp || m3.shouldForwardProp;
      "production" !== process.env.NODE_ENV && (0, import_react8.useDebugValue)(d2);
      var v2 = I(r4, f3, c3) || C, g3 = (function(e5, n, o2) {
        for (var r5, s4 = (0, import_tslib.__assign)((0, import_tslib.__assign)({}, n), { className: void 0, theme: o2 }), i4 = 0; i4 < e5.length; i4 += 1) {
          var a4 = re(r5 = e5[i4]) ? r5(s4) : r5;
          for (var c4 in a4) s4[c4] = "className" === c4 ? ie(s4[c4], a4[c4]) : "style" === c4 ? (0, import_tslib.__assign)((0, import_tslib.__assign)({}, s4[c4]), a4[c4]) : a4[c4];
        }
        return n.className && (s4.className = ie(s4.className, n.className)), s4;
      })(i3, r4, v2), S3 = g3.as || h2, w3 = {};
      for (var b2 in g3) void 0 === g3[b2] || "$" === b2[0] || "as" === b2 || "theme" === b2 && g3.theme === v2 || ("forwardedAs" === b2 ? w3.as = g3.forwardedAs : y3 && !y3(b2, S3) || (w3[b2] = g3[b2], y3 || "development" !== process.env.NODE_ENV || isPropValid(b2) || st.has(b2) || !A.has(S3) || (st.add(b2), console.warn('styled-components: it looks like an unknown prop "'.concat(b2, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var E3 = (function(e5, t2) {
        var n = Le(), o2 = e5.generateAndInjectStyles(t2, n.styleSheet, n.stylis);
        return "production" !== process.env.NODE_ENV && (0, import_react8.useDebugValue)(o2), o2;
      })(a3, g3);
      "production" !== process.env.NODE_ENV && e4.warnTooManyClasses && e4.warnTooManyClasses(E3);
      var N3 = ie(p3, d2);
      return E3 && (N3 += " " + E3), g3.className && (N3 += " " + g3.className), w3[G(S3) && !A.has(S3) ? "class" : "className"] = N3, s3 && (w3.ref = s3), (0, import_react8.createElement)(S3, w3);
    })(D2, e3, r3);
  }
  O2.displayName = y2;
  var D2 = import_react8.default.forwardRef(O2);
  return D2.attrs = S2, D2.componentStyle = N2, D2.displayName = y2, D2.shouldForwardProp = w2, D2.foldedComponentIds = i2 ? ie(a2.foldedComponentIds, a2.styledComponentId) : "", D2.styledComponentId = g2, D2.target = i2 ? a2.target : e2, Object.defineProperty(D2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(e3) {
    this._foldedDefaultProps = i2 ? (function(e4) {
      for (var t2 = [], n = 1; n < arguments.length; n++) t2[n - 1] = arguments[n];
      for (var o2 = 0, r3 = t2; o2 < r3.length; o2++) le(e4, r3[o2], true);
      return e4;
    })({}, a2.defaultProps, e3) : e3;
  } }), "production" !== process.env.NODE_ENV && (P(y2, g2), D2.warnTooManyClasses = /* @__PURE__ */ (function(e3, t2) {
    var n = {}, o2 = false;
    return function(r3) {
      if (!o2 && (n[r3] = true, Object.keys(n).length >= 200)) {
        var s3 = t2 ? ' with the id of "'.concat(t2, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(e3).concat(s3, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), o2 = true, n = {};
      }
    };
  })(y2, g2)), ue(D2, function() {
    return ".".concat(D2.styledComponentId);
  }), c2 && oe(D2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), D2;
}
function at(e2, t2) {
  for (var n = [e2[0]], o2 = 0, r2 = t2.length; o2 < r2; o2 += 1) n.push(t2[o2], e2[o2 + 1]);
  return n;
}
var ct = function(e2) {
  return Object.assign(e2, { isCss: true });
};
function lt(t2) {
  for (var n = [], o2 = 1; o2 < arguments.length; o2++) n[o2 - 1] = arguments[o2];
  if (re(t2) || ce(t2)) return ct(Xe(at(_, (0, import_tslib.__spreadArray)([t2], n, true))));
  var r2 = t2;
  return 0 === n.length && 1 === r2.length && "string" == typeof r2[0] ? Xe(r2) : ct(Xe(at(r2, n)));
}
function ut(n, o2, r2) {
  if (void 0 === r2 && (r2 = C), !o2) throw he(1, o2);
  var s2 = function(t2) {
    for (var s3 = [], i2 = 1; i2 < arguments.length; i2++) s3[i2 - 1] = arguments[i2];
    return n(o2, r2, lt.apply(void 0, (0, import_tslib.__spreadArray)([t2], s3, false)));
  };
  return s2.attrs = function(e2) {
    return ut(n, o2, (0, import_tslib.__assign)((0, import_tslib.__assign)({}, r2), { attrs: Array.prototype.concat(r2.attrs, e2).filter(Boolean) }));
  }, s2.withConfig = function(e2) {
    return ut(n, o2, (0, import_tslib.__assign)((0, import_tslib.__assign)({}, r2), e2));
  }, s2;
}
var pt = function(e2) {
  return ut(it, e2);
};
var dt = pt;
A.forEach(function(e2) {
  dt[e2] = pt(e2);
});
var ht = (function() {
  function e2(e3, t2) {
    this.rules = e3, this.componentId = t2, this.isStatic = Ze(e3), ke.registerId(this.componentId + 1);
  }
  return e2.prototype.createStyles = function(e3, t2, n, o2) {
    var r2 = o2(ae(Xe(this.rules, t2, n, o2)), ""), s2 = this.componentId + e3;
    n.insertRules(s2, s2, r2);
  }, e2.prototype.removeStyles = function(e3, t2) {
    t2.clearRules(this.componentId + e3);
  }, e2.prototype.renderStyles = function(e3, t2, n, o2) {
    e3 > 2 && ke.registerId(this.componentId + e3), this.removeStyles(e3, n), this.createStyles(e3, t2, n, o2);
  }, e2;
})();
var vt = /^\s*<\/[a-z]/i;
var gt = (function() {
  function e2() {
    var e3 = this;
    this._emitSheetCSS = function() {
      var t2 = e3.instance.toString();
      if (!t2) return "";
      var n = Ce(), o2 = ae([n && 'nonce="'.concat(n, '"'), "".concat(f, '="true"'), "".concat(y, '="').concat(v, '"')].filter(Boolean), " ");
      return "<style ".concat(o2, ">").concat(t2, "</style>");
    }, this.getStyleTags = function() {
      if (e3.sealed) throw he(2);
      return e3._emitSheetCSS();
    }, this.getStyleElement = function() {
      var n;
      if (e3.sealed) throw he(2);
      var r2 = e3.instance.toString();
      if (!r2) return [];
      var s2 = ((n = {})[f] = "", n[y] = v, n.dangerouslySetInnerHTML = { __html: r2 }, n), i2 = Ce();
      return i2 && (s2.nonce = i2), [import_react8.default.createElement("style", (0, import_tslib.__assign)({}, s2, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e3.sealed = true;
    }, this.instance = new ke({ isServer: true }), this.sealed = false;
  }
  return e2.prototype.collectStyles = function(e3) {
    if (this.sealed) throw he(2);
    return import_react8.default.createElement(Ye, { sheet: this.instance }, e3);
  }, e2.prototype.interleaveWithNodeStream = function(e3) {
    if (S) throw he(3);
    if (this.sealed) throw he(2);
    this.seal();
    var t2 = require("stream").Transform, n = e3, o2 = this.instance, r2 = this._emitSheetCSS, s2 = new t2({ transform: function(e4, t3, n2) {
      var s3 = e4.toString(), i2 = r2();
      if (o2.clearTag(), vt.test(s3)) {
        var a2 = s3.indexOf(">") + 1, c2 = s3.slice(0, a2), l2 = s3.slice(a2);
        this.push(c2 + i2 + l2);
      } else this.push(i2 + s3);
      n2();
    } });
    return n.on("error", function(e4) {
      s2.emit("error", e4);
    }), n.pipe(s2);
  }, e2;
})();
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var wt = "__sc-".concat(f, "__");
"production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window[wt] || (window[wt] = 0), 1 === window[wt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[wt] += 1);

// src/Popover/Popover.tsx
var Container = dt.div`
    position: relative;
    display: inline-block;
`;
var Trigger = dt.div`
    cursor: pointer;
`;
var Content = dt.div`
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 10;
    margin-top: 0.5rem;
    min-width: 250px;
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    border: 1px solid var(--entchen-primary-200);
    color: var(--entchen-text);
`;
var Popover = ({
  trigger,
  popoverContent,
  open: defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = (0, import_react9.useState)(defaultOpen);
  const popoverRef = (0, import_react9.useRef)(null);
  const handleToggle = () => {
    setIsOpen((prev2) => !prev2);
  };
  (0, import_react9.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return /* @__PURE__ */ import_react9.default.createElement(Container, { ref: popoverRef }, /* @__PURE__ */ import_react9.default.createElement(Trigger, { onClick: handleToggle }, trigger), isOpen && /* @__PURE__ */ import_react9.default.createElement(Content, null, popoverContent));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Button,
  Card,
  DatePicker,
  Dialog,
  EntchenProvider,
  HeroSection,
  Popover
});
