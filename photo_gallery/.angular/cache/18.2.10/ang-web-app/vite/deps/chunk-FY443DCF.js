// node_modules/@primeuix/utils/object/index.mjs
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
function isEmpty(value) {
  return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && typeof value === "object" && Object.keys(value).length === 0;
}
function isFunction(value) {
  return !!(value && value.constructor && value.call && value.apply);
}
function isNotEmpty(value) {
  return !isEmpty(value);
}
function isObject(value, empty = true) {
  return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
}
function resolve(obj, ...params) {
  return isFunction(obj) ? obj(...params) : obj;
}
function isString(value, empty = true) {
  return typeof value === "string" && (empty || value !== "");
}
function toFlatCase(str) {
  return isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
}
function getKeyValue(obj, key = "", params = {}) {
  const fKeys = toFlatCase(key).split(".");
  const fKey = fKeys.shift();
  return fKey ? isObject(obj) ? getKeyValue(resolve(obj[Object.keys(obj).find((k) => toFlatCase(k) === fKey) || ""], params), fKeys.join("."), params) : void 0 : resolve(obj, params);
}
function isArray(value, empty = true) {
  return Array.isArray(value) && (empty || value.length !== 0);
}
function isNumber(value) {
  return isNotEmpty(value) && !isNaN(value);
}
function matchRegex(str, regex) {
  if (regex) {
    const match = regex.test(str);
    regex.lastIndex = 0;
    return match;
  }
  return false;
}
function mergeKeys(...args) {
  const _mergeKeys = (target = {}, source = {}) => {
    const mergedObj = __spreadValues({}, target);
    Object.keys(source).forEach((key) => {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        mergedObj[key] = _mergeKeys(target[key], source[key]);
      } else {
        mergedObj[key] = source[key];
      }
    });
    return mergedObj;
  };
  return args.reduce((acc, obj, i) => i === 0 ? obj : _mergeKeys(acc, obj), {});
}
function minifyCSS(css2) {
  return css2 ? css2.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":") : css2;
}
function toKebabCase(str) {
  return isString(str) ? str.replace(/(_)/g, "-").replace(/[A-Z]/g, (c, i) => i === 0 ? c : "-" + c.toLowerCase()).toLowerCase() : str;
}
function toTokenKey(str) {
  return isString(str) ? str.replace(/[A-Z]/g, (c, i) => i === 0 ? c : "." + c.toLowerCase()).toLowerCase() : str;
}

// node_modules/@primeuix/utils/eventbus/index.mjs
function EventBus() {
  const allHandlers = /* @__PURE__ */ new Map();
  return {
    on(type, handler) {
      let handlers = allHandlers.get(type);
      if (!handlers) handlers = [handler];
      else handlers.push(handler);
      allHandlers.set(type, handlers);
      return this;
    },
    off(type, handler) {
      let handlers = allHandlers.get(type);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
      return this;
    },
    emit(type, evt) {
      let handlers = allHandlers.get(type);
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(evt);
        });
      }
    },
    clear() {
      allHandlers.clear();
    }
  };
}

// node_modules/@primeuix/styled/index.mjs
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp2.call(b, prop)) __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2) for (var prop of __getOwnPropSymbols2(b)) {
    if (__propIsEnum2.call(b, prop)) __defNormalProp2(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source) if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2) for (var prop of __getOwnPropSymbols2(source)) {
    if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop)) target[prop] = source[prop];
  }
  return target;
};
function definePreset(...presets) {
  return mergeKeys(...presets);
}
var ThemeService = EventBus();
var service_default = ThemeService;
function toTokenKey2(str) {
  return isString(str) ? str.replace(/[A-Z]/g, (c, i) => i === 0 ? c : "." + c.toLowerCase()).toLowerCase() : str;
}
function merge(value1, value2) {
  if (isArray(value1)) {
    value1.push(...value2 || []);
  } else if (isObject(value1)) {
    Object.assign(value1, value2);
  }
}
function toValue(value) {
  return isObject(value) && value.hasOwnProperty("value") && value.hasOwnProperty("type") ? value.value : value;
}
function toUnit(value, variable = "") {
  const excludedProperties = ["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"];
  if (!excludedProperties.some((property) => variable.endsWith(property))) {
    const val = `${value}`.trim();
    const valArr = val.split(" ");
    return valArr.map((v) => isNumber(v) ? `${v}px` : v).join(" ");
  }
  return value;
}
function toNormalizePrefix(prefix) {
  return prefix.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function toNormalizeVariable(prefix = "", variable = "") {
  return toNormalizePrefix(`${isString(prefix, false) && isString(variable, false) ? `${prefix}-` : prefix}${variable}`);
}
function getVariableName(prefix = "", variable = "") {
  return `--${toNormalizeVariable(prefix, variable)}`;
}
function getVariableValue(value, variable = "", prefix = "", excludedKeyRegexes = [], fallback) {
  if (isString(value)) {
    const regex = /{([^}]*)}/g;
    const val = value.trim();
    if (matchRegex(val, regex)) {
      const _val = val.replaceAll(regex, (v) => {
        const path = v.replace(/{|}/g, "");
        const keys = path.split(".").filter((_v) => !excludedKeyRegexes.some((_r) => matchRegex(_v, _r)));
        return `var(${getVariableName(prefix, toKebabCase(keys.join("-")))}${isNotEmpty(fallback) ? `, ${fallback}` : ""})`;
      });
      const calculationRegex = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
      const cleanedVarRegex = /var\([^)]+\)/g;
      return matchRegex(_val.replace(cleanedVarRegex, "0"), calculationRegex) ? `calc(${_val})` : _val;
    }
    return toUnit(val, variable);
  } else if (isNumber(value)) {
    return toUnit(value, variable);
  }
  return void 0;
}
function getComputedValue(obj = {}, value) {
  if (isString(value)) {
    const regex = /{([^}]*)}/g;
    const val = value.trim();
    return matchRegex(val, regex) ? val.replaceAll(regex, (v) => getKeyValue(obj, v.replace(/{|}/g, ""))) : val;
  } else if (isNumber(value)) {
    return value;
  }
  return void 0;
}
function setProperty(properties, key, value) {
  if (isString(key, false)) {
    properties.push(`${key}:${value};`);
  }
}
function getRule(selector, properties) {
  if (selector) {
    return `${selector}{${properties}}`;
  }
  return "";
}
function normalizeColor(color) {
  if (color.length === 4) {
    return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
  }
  return color;
}
function hexToRgb(hex) {
  var bigint = parseInt(hex.substring(1), 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return {
    r,
    g,
    b
  };
}
function rgbToHex(r, g, b) {
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
var mix_default = (color1, color2, weight) => {
  color1 = normalizeColor(color1);
  color2 = normalizeColor(color2);
  var p = weight / 100;
  var w = p * 2 - 1;
  var w1 = (w + 1) / 2;
  var w2 = 1 - w1;
  var rgb1 = hexToRgb(color1);
  var rgb2 = hexToRgb(color2);
  var r = Math.round(rgb1.r * w1 + rgb2.r * w2);
  var g = Math.round(rgb1.g * w1 + rgb2.g * w2);
  var b = Math.round(rgb1.b * w1 + rgb2.b * w2);
  return rgbToHex(r, g, b);
};
var shade_default = (color, percent) => mix_default("#000000", color, percent);
var tint_default = (color, percent) => mix_default("#ffffff", color, percent);
var scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
var palette_default = (color) => {
  if (/{([^}]*)}/g.test(color)) {
    const token = color.replace(/{|}/g, "");
    return scales.reduce((acc, scale) => (acc[scale] = `{${token}.${scale}}`, acc), {});
  }
  return typeof color === "string" ? scales.reduce((acc, scale, i) => (acc[scale] = i <= 5 ? tint_default(color, (5 - i) * 19) : shade_default(color, (i - 5) * 15), acc), {}) : color;
};
var $dt = (tokenPath) => {
  var _a;
  const theme = config_default.getTheme();
  const variable = dtwt(theme, tokenPath, void 0, "variable");
  const name = (_a = variable.match(/--[\w-]+/g)) == null ? void 0 : _a[0];
  const value = dtwt(theme, tokenPath, void 0, "value");
  return {
    name,
    variable,
    value
  };
};
var dt = (...args) => {
  return dtwt(config_default.getTheme(), ...args);
};
var dtwt = (theme = {}, tokenPath, fallback, type = "variable") => {
  if (tokenPath) {
    const {
      variable: VARIABLE,
      options: OPTIONS
    } = config_default.defaults || {};
    const {
      prefix,
      transform
    } = (theme == null ? void 0 : theme.options) || OPTIONS || {};
    const regex = /{([^}]*)}/g;
    const token = matchRegex(tokenPath, regex) ? tokenPath : `{${tokenPath}}`;
    const isStrictTransform = type === "value" || transform === "strict";
    return isStrictTransform ? config_default.getTokenValue(tokenPath) : getVariableValue(token, void 0, prefix, [VARIABLE.excludedKeyRegex], fallback);
  }
  return "";
};
function css(style) {
  return resolve(style, {
    dt
  });
}
var $t = (theme = {}) => {
  let {
    preset: _preset,
    options: _options
  } = theme;
  return {
    preset(value) {
      _preset = _preset ? mergeKeys(_preset, value) : value;
      return this;
    },
    options(value) {
      _options = _options ? __spreadValues2(__spreadValues2({}, _options), value) : value;
      return this;
    },
    // features
    primaryPalette(primary) {
      const {
        semantic
      } = _preset || {};
      _preset = __spreadProps(__spreadValues2({}, _preset), {
        semantic: __spreadProps(__spreadValues2({}, semantic), {
          primary
        })
      });
      return this;
    },
    surfacePalette(surface) {
      var _a, _b;
      const {
        semantic
      } = _preset || {};
      const lightSurface = (surface == null ? void 0 : surface.hasOwnProperty("light")) ? surface == null ? void 0 : surface.light : surface;
      const darkSurface = (surface == null ? void 0 : surface.hasOwnProperty("dark")) ? surface == null ? void 0 : surface.dark : surface;
      const newColorScheme = {
        colorScheme: {
          light: __spreadValues2(__spreadValues2({}, (_a = semantic == null ? void 0 : semantic.colorScheme) == null ? void 0 : _a.light), !!lightSurface && {
            surface: lightSurface
          }),
          dark: __spreadValues2(__spreadValues2({}, (_b = semantic == null ? void 0 : semantic.colorScheme) == null ? void 0 : _b.dark), !!darkSurface && {
            surface: darkSurface
          })
        }
      };
      _preset = __spreadProps(__spreadValues2({}, _preset), {
        semantic: __spreadValues2(__spreadValues2({}, semantic), newColorScheme)
      });
      return this;
    },
    // actions
    define({
      useDefaultPreset = false,
      useDefaultOptions = false
    } = {}) {
      return {
        preset: useDefaultPreset ? config_default.getPreset() : _preset,
        options: useDefaultOptions ? config_default.getOptions() : _options
      };
    },
    update({
      mergePresets = true,
      mergeOptions = true
    } = {}) {
      const newTheme = {
        preset: mergePresets ? mergeKeys(config_default.getPreset(), _preset) : _preset,
        options: mergeOptions ? __spreadValues2(__spreadValues2({}, config_default.getOptions()), _options) : _options
      };
      config_default.setTheme(newTheme);
      return newTheme;
    },
    use(options) {
      const newTheme = this.define(options);
      config_default.setTheme(newTheme);
      return newTheme;
    }
  };
};
function toVariables_default(theme, options = {}) {
  const VARIABLE = config_default.defaults.variable;
  const {
    prefix = VARIABLE.prefix,
    selector = VARIABLE.selector,
    excludedKeyRegex = VARIABLE.excludedKeyRegex
  } = options;
  const _toVariables = (_theme, _prefix = "") => {
    return Object.entries(_theme).reduce((acc, [key, value]) => {
      const px = matchRegex(key, excludedKeyRegex) ? toNormalizeVariable(_prefix) : toNormalizeVariable(_prefix, toKebabCase(key));
      const v = toValue(value);
      if (isObject(v)) {
        const {
          variables: variables2,
          tokens: tokens2
        } = _toVariables(v, px);
        merge(acc["tokens"], tokens2);
        merge(acc["variables"], variables2);
      } else {
        acc["tokens"].push((prefix ? px.replace(`${prefix}-`, "") : px).replaceAll("-", "."));
        setProperty(acc["variables"], getVariableName(px), getVariableValue(v, px, prefix, [excludedKeyRegex]));
      }
      return acc;
    }, {
      variables: [],
      tokens: []
    });
  };
  const {
    variables,
    tokens
  } = _toVariables(theme, prefix);
  return {
    value: variables,
    tokens,
    declarations: variables.join(""),
    css: getRule(selector, variables.join(""))
  };
}
var themeUtils_default = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(value) {
          return {
            type: "class",
            selector: value,
            matched: this.pattern.test(value.trim())
          };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(value) {
          return {
            type: "attr",
            selector: `:root${value}`,
            matched: this.pattern.test(value.trim())
          };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(value) {
          return {
            type: "media",
            selector: `${value}{:root{[CSS]}}`,
            matched: this.pattern.test(value.trim())
          };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(value) {
          return {
            type: "system",
            selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}",
            matched: this.pattern.test(value.trim())
          };
        }
      },
      custom: {
        resolve(value) {
          return {
            type: "custom",
            selector: value,
            matched: true
          };
        }
      }
    },
    resolve(value) {
      const rules = Object.keys(this.rules).filter((k) => k !== "custom").map((r) => this.rules[r]);
      return [value].flat().map((v) => {
        var _a;
        return (_a = rules.map((r) => r.resolve(v)).find((rr) => rr.matched)) != null ? _a : this.rules.custom.resolve(v);
      });
    }
  },
  _toVariables(theme, options) {
    return toVariables_default(theme, {
      prefix: options == null ? void 0 : options.prefix
    });
  },
  getCommon({
    name = "",
    theme = {},
    params,
    set,
    defaults
  }) {
    var _c, _d, _e, _f;
    const {
      preset,
      options
    } = theme;
    let primitive_css, primitive_tokens, semantic_css, semantic_tokens;
    if (isNotEmpty(preset)) {
      const {
        primitive,
        semantic
      } = preset;
      const _a = semantic || {}, {
        colorScheme
      } = _a, sRest = __objRest(_a, ["colorScheme"]);
      const _b = colorScheme || {}, {
        dark
      } = _b, csRest = __objRest(_b, ["dark"]);
      const prim_var = isNotEmpty(primitive) ? this._toVariables({
        primitive
      }, options) : {};
      const sRest_var = isNotEmpty(sRest) ? this._toVariables({
        semantic: sRest
      }, options) : {};
      const csRest_var = isNotEmpty(csRest) ? this._toVariables({
        light: csRest
      }, options) : {};
      const dark_var = isNotEmpty(dark) ? this._toVariables({
        dark
      }, options) : {};
      const [prim_css, prim_tokens] = [(_c = prim_var.declarations) != null ? _c : "", prim_var.tokens];
      const [sRest_css, sRest_tokens] = [(_d = sRest_var.declarations) != null ? _d : "", sRest_var.tokens || []];
      const [csRest_css, csRest_tokens] = [(_e = csRest_var.declarations) != null ? _e : "", csRest_var.tokens || []];
      const [dark_css, dark_tokens] = [(_f = dark_var.declarations) != null ? _f : "", dark_var.tokens || []];
      primitive_css = this.transformCSS(name, prim_css, "light", "variable", options, set, defaults);
      primitive_tokens = prim_tokens;
      const semantic_light_css = this.transformCSS(name, `${sRest_css}${csRest_css}color-scheme:light`, "light", "variable", options, set, defaults);
      const semantic_dark_css = this.transformCSS(name, `${dark_css}color-scheme:dark`, "dark", "variable", options, set, defaults);
      semantic_css = `${semantic_light_css}${semantic_dark_css}`;
      semantic_tokens = [.../* @__PURE__ */ new Set([...sRest_tokens, ...csRest_tokens, ...dark_tokens])];
    }
    return {
      primitive: {
        css: primitive_css,
        tokens: primitive_tokens
      },
      semantic: {
        css: semantic_css,
        tokens: semantic_tokens
      }
    };
  },
  getPreset({
    name = "",
    preset = {},
    options,
    params,
    set,
    defaults,
    selector
  }) {
    var _c, _d, _e;
    const _name = name.replace("-directive", "");
    const _a = preset, {
      colorScheme
    } = _a, vRest = __objRest(_a, ["colorScheme"]);
    const _b = colorScheme || {}, {
      dark
    } = _b, csRest = __objRest(_b, ["dark"]);
    const vRest_var = isNotEmpty(vRest) ? this._toVariables({
      [_name]: vRest
    }, options) : {};
    const csRest_var = isNotEmpty(csRest) ? this._toVariables({
      [_name]: csRest
    }, options) : {};
    const dark_var = isNotEmpty(dark) ? this._toVariables({
      [_name]: dark
    }, options) : {};
    const [vRest_css, vRest_tokens] = [(_c = vRest_var.declarations) != null ? _c : "", vRest_var.tokens || []];
    const [csRest_css, csRest_tokens] = [(_d = csRest_var.declarations) != null ? _d : "", csRest_var.tokens || []];
    const [dark_css, dark_tokens] = [(_e = dark_var.declarations) != null ? _e : "", dark_var.tokens || []];
    const tokens = [.../* @__PURE__ */ new Set([...vRest_tokens, ...csRest_tokens, ...dark_tokens])];
    const light_variable_css = this.transformCSS(_name, `${vRest_css}${csRest_css}`, "light", "variable", options, set, defaults, selector);
    const dark_variable_css = this.transformCSS(_name, dark_css, "dark", "variable", options, set, defaults, selector);
    return {
      css: `${light_variable_css}${dark_variable_css}`,
      tokens
    };
  },
  getPresetC({
    name = "",
    theme = {},
    params,
    set,
    defaults
  }) {
    var _a;
    const {
      preset,
      options
    } = theme;
    const cPreset = (_a = preset == null ? void 0 : preset.components) == null ? void 0 : _a[name];
    return this.getPreset({
      name,
      preset: cPreset,
      options,
      params,
      set,
      defaults
    });
  },
  getPresetD({
    name = "",
    theme = {},
    params,
    set,
    defaults
  }) {
    var _a;
    const dName = name.replace("-directive", "");
    const {
      preset,
      options
    } = theme;
    const dPreset = (_a = preset == null ? void 0 : preset.directives) == null ? void 0 : _a[dName];
    return this.getPreset({
      name: dName,
      preset: dPreset,
      options,
      params,
      set,
      defaults
    });
  },
  getColorSchemeOption(options, defaults) {
    var _a;
    return this.regex.resolve((_a = options.darkModeSelector) != null ? _a : defaults.options.darkModeSelector);
  },
  getLayerOrder(name, options = {}, params, defaults) {
    const {
      cssLayer
    } = options;
    if (cssLayer) {
      const order = resolve(cssLayer.order || "primeui", params);
      return `@layer ${order}`;
    }
    return "";
  },
  getCommonStyleSheet({
    name = "",
    theme = {},
    params,
    props = {},
    set,
    defaults
  }) {
    const common = this.getCommon({
      name,
      theme,
      params,
      set,
      defaults
    });
    const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
    return Object.entries(common || {}).reduce((acc, [key, value]) => {
      if (value == null ? void 0 : value.css) {
        const _css = minifyCSS(value == null ? void 0 : value.css);
        const id = `${key}-variables`;
        acc.push(`<style type="text/css" data-primevue-style-id="${id}" ${_props}>${_css}</style>`);
      }
      return acc;
    }, []).join("");
  },
  getStyleSheet({
    name = "",
    theme = {},
    params,
    props = {},
    set,
    defaults
  }) {
    var _a;
    const options = {
      name,
      theme,
      params,
      set,
      defaults
    };
    const preset_css = (_a = name.includes("-directive") ? this.getPresetD(options) : this.getPresetC(options)) == null ? void 0 : _a.css;
    const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
    return preset_css ? `<style type="text/css" data-primevue-style-id="${name}-variables" ${_props}>${minifyCSS(preset_css)}</style>` : "";
  },
  createTokens(obj = {}, defaults, parentKey = "", parentPath = "", tokens = {}) {
    Object.entries(obj).forEach(([key, value]) => {
      const currentKey = matchRegex(key, defaults.variable.excludedKeyRegex) ? parentKey : parentKey ? `${parentKey}.${toTokenKey(key)}` : toTokenKey(key);
      const currentPath = parentPath ? `${parentPath}.${key}` : key;
      if (isObject(value)) {
        this.createTokens(value, defaults, currentKey, currentPath, tokens);
      } else {
        tokens[currentKey] || (tokens[currentKey] = {
          paths: [],
          computed(colorScheme, tokenPathMap = {}) {
            if (colorScheme) {
              const path = this.paths.find((p) => p.scheme === colorScheme) || this.paths.find((p) => p.scheme === "none");
              return path == null ? void 0 : path.computed(colorScheme, tokenPathMap["binding"]);
            }
            return this.paths.map((p) => p.computed(p.scheme, tokenPathMap[p.scheme]));
          }
        });
        tokens[currentKey].paths.push({
          path: currentPath,
          value,
          scheme: currentPath.includes("colorScheme.light") ? "light" : currentPath.includes("colorScheme.dark") ? "dark" : "none",
          computed(colorScheme, tokenPathMap = {}) {
            const regex = /{([^}]*)}/g;
            let computedValue = value;
            tokenPathMap["name"] = this.path;
            tokenPathMap["binding"] || (tokenPathMap["binding"] = {});
            if (matchRegex(value, regex)) {
              const val = value.trim();
              const _val = val.replaceAll(regex, (v) => {
                var _a, _b;
                const path = v.replace(/{|}/g, "");
                return (_b = (_a = tokens[path]) == null ? void 0 : _a.computed(colorScheme, tokenPathMap)) == null ? void 0 : _b.value;
              });
              const calculationRegex = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g;
              const cleanedVarRegex = /var\([^)]+\)/g;
              computedValue = matchRegex(_val.replace(cleanedVarRegex, "0"), calculationRegex) ? `calc(${_val})` : _val;
            }
            isEmpty(tokenPathMap["binding"]) && delete tokenPathMap["binding"];
            return {
              colorScheme,
              path: this.path,
              paths: tokenPathMap,
              value: computedValue.includes("undefined") ? void 0 : computedValue
            };
          }
        });
      }
    });
    return tokens;
  },
  getTokenValue(tokens, path, defaults) {
    var _a;
    const normalizePath = (str) => {
      const strArr = str.split(".");
      return strArr.filter((s) => !matchRegex(s.toLowerCase(), defaults.variable.excludedKeyRegex)).join(".");
    };
    const token = normalizePath(path);
    const colorScheme = path.includes("colorScheme.light") ? "light" : path.includes("colorScheme.dark") ? "dark" : void 0;
    const computedValues = [(_a = tokens[token]) == null ? void 0 : _a.computed(colorScheme)].flat().filter((computed) => computed);
    return computedValues.length === 1 ? computedValues[0].value : computedValues.reduce((acc = {}, computed) => {
      const _a2 = computed, {
        colorScheme: cs
      } = _a2, rest = __objRest(_a2, ["colorScheme"]);
      acc[cs] = rest;
      return acc;
    }, void 0);
  },
  transformCSS(name, css2, mode, type, options = {}, set, defaults, selector) {
    if (isNotEmpty(css2)) {
      const {
        cssLayer
      } = options;
      if (type !== "style") {
        const colorSchemeOption = this.getColorSchemeOption(options, defaults);
        const _css = selector ? getRule(selector, css2) : css2;
        css2 = mode === "dark" ? colorSchemeOption.reduce((acc, {
          selector: _selector
        }) => {
          if (isNotEmpty(_selector)) {
            acc += _selector.includes("[CSS]") ? _selector.replace("[CSS]", _css) : getRule(_selector, _css);
          }
          return acc;
        }, "") : getRule(selector != null ? selector : ":root", css2);
      }
      if (cssLayer) {
        const layerOptions = {
          name: "primeui",
          order: "primeui"
        };
        isObject(cssLayer) && (layerOptions.name = resolve(cssLayer.name, {
          name,
          type
        }));
        if (isNotEmpty(layerOptions.name)) {
          css2 = getRule(`@layer ${layerOptions.name}`, css2);
          set == null ? void 0 : set.layerNames(layerOptions.name);
        }
      }
      return css2;
    }
    return "";
  }
};
var config_default = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(newValues = {}) {
    const {
      theme
    } = newValues;
    if (theme) {
      this._theme = __spreadProps(__spreadValues2({}, theme), {
        options: __spreadValues2(__spreadValues2({}, this.defaults.options), theme.options)
      });
      this._tokens = themeUtils_default.createTokens(this.preset, this.defaults);
      this.clearLoadedStyleNames();
    }
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var _a;
    return ((_a = this.theme) == null ? void 0 : _a.preset) || {};
  },
  get options() {
    var _a;
    return ((_a = this.theme) == null ? void 0 : _a.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(newValue) {
    this.update({
      theme: newValue
    });
    service_default.emit("theme:change", newValue);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(newValue) {
    this._theme = __spreadProps(__spreadValues2({}, this.theme), {
      preset: newValue
    });
    this._tokens = themeUtils_default.createTokens(newValue, this.defaults);
    this.clearLoadedStyleNames();
    service_default.emit("preset:change", newValue);
    service_default.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(newValue) {
    this._theme = __spreadProps(__spreadValues2({}, this.theme), {
      options: newValue
    });
    this.clearLoadedStyleNames();
    service_default.emit("options:change", newValue);
    service_default.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(layerName) {
    this._layerNames.add(layerName);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(tokenPath) {
    return themeUtils_default.getTokenValue(this.tokens, tokenPath, this.defaults);
  },
  getCommon(name = "", params) {
    return themeUtils_default.getCommon({
      name,
      theme: this.theme,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    });
  },
  getComponent(name = "", params) {
    const options = {
      name,
      theme: this.theme,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    };
    return themeUtils_default.getPresetC(options);
  },
  getDirective(name = "", params) {
    const options = {
      name,
      theme: this.theme,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    };
    return themeUtils_default.getPresetD(options);
  },
  getCustomPreset(name = "", preset, selector, params) {
    const options = {
      name,
      preset,
      options: this.options,
      selector,
      params,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    };
    return themeUtils_default.getPreset(options);
  },
  getLayerOrderCSS(name = "") {
    return themeUtils_default.getLayerOrder(name, this.options, {
      names: this.getLayerNames()
    }, this.defaults);
  },
  transformCSS(name = "", css2, type = "style", mode) {
    return themeUtils_default.transformCSS(name, css2, mode, type, this.options, {
      layerNames: this.setLayerNames.bind(this)
    }, this.defaults);
  },
  getCommonStyleSheet(name = "", params, props = {}) {
    return themeUtils_default.getCommonStyleSheet({
      name,
      theme: this.theme,
      params,
      props,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    });
  },
  getStyleSheet(name, params, props = {}) {
    return themeUtils_default.getStyleSheet({
      name,
      theme: this.theme,
      params,
      props,
      defaults: this.defaults,
      set: {
        layerNames: this.setLayerNames.bind(this)
      }
    });
  },
  onStyleMounted(name) {
    this._loadingStyles.add(name);
  },
  onStyleUpdated(name) {
    this._loadingStyles.add(name);
  },
  onStyleLoaded(event, {
    name
  }) {
    if (this._loadingStyles.size) {
      this._loadingStyles.delete(name);
      service_default.emit(`theme:${name}:load`, event);
      !this._loadingStyles.size && service_default.emit("theme:load");
    }
  }
};
function updatePreset(...presets) {
  const newPreset = mergeKeys(config_default.getPreset(), ...presets);
  config_default.setPreset(newPreset);
  return newPreset;
}
function updatePrimaryPalette(primary) {
  return $t().primaryPalette(primary).update().preset;
}
function updateSurfacePalette(palette) {
  return $t().surfacePalette(palette).update().preset;
}
function usePreset(...presets) {
  const newPreset = mergeKeys(...presets);
  config_default.setPreset(newPreset);
  return newPreset;
}
function useTheme(theme) {
  return $t(theme).update({
    mergePresets: false
  });
}

export {
  getKeyValue,
  definePreset,
  service_default,
  toTokenKey2 as toTokenKey,
  merge,
  toValue,
  toUnit,
  toNormalizePrefix,
  toNormalizeVariable,
  getVariableName,
  getVariableValue,
  getComputedValue,
  setProperty,
  getRule,
  mix_default,
  shade_default,
  tint_default,
  palette_default,
  $dt,
  dt,
  dtwt,
  css,
  $t,
  toVariables_default,
  themeUtils_default,
  config_default,
  updatePreset,
  updatePrimaryPalette,
  updateSurfacePalette,
  usePreset,
  useTheme
};
//# sourceMappingURL=chunk-FY443DCF.js.map
