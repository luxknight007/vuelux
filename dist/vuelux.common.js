module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "7e4b");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02b9":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("f41c");
var toIObject = __webpack_require__("4299");
var arrayIndexOf = __webpack_require__("0619")(false);
var IE_PROTO = __webpack_require__("3ff1")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "02db":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "04f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("21b2");
var descriptor = __webpack_require__("13a6");
var setToStringTag = __webpack_require__("6d69");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("a733")(IteratorPrototype, __webpack_require__("4d5e")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "0619":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("4299");
var toLength = __webpack_require__("7ac1");
var toAbsoluteIndex = __webpack_require__("e080");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "0787":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("666a");
var defined = __webpack_require__("11f8");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "0b9e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("bfb5");
var hide = __webpack_require__("a733");
var has = __webpack_require__("f41c");
var SRC = __webpack_require__("6542")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("95f3").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "100d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("bfb5");
var dP = __webpack_require__("7814");
var DESCRIPTORS = __webpack_require__("f4b2");
var SPECIES = __webpack_require__("4d5e")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "11f8":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "13a6":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "148e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("209e");
var $export = __webpack_require__("e248");
var redefine = __webpack_require__("0b9e");
var hide = __webpack_require__("a733");
var Iterators = __webpack_require__("1bc7");
var $iterCreate = __webpack_require__("04f1");
var setToStringTag = __webpack_require__("6d69");
var getPrototypeOf = __webpack_require__("caa9");
var ITERATOR = __webpack_require__("4d5e")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "14e7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1bc7":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "209e":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "213e":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("3517")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "21b2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("3403");
var dPs = __webpack_require__("ea4f");
var enumBugKeys = __webpack_require__("6286");
var IE_PROTO = __webpack_require__("3ff1")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("47a1")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("b7d1").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "233b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vlRow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("14e7");
/* harmony import */ var _nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vlRow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vlRow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vlRow_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2eab":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("f4b2") && !__webpack_require__("6dbe")(function () {
  return Object.defineProperty(__webpack_require__("47a1")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "3403":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b87a");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "3517":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("a733");
var redefine = __webpack_require__("0b9e");
var fails = __webpack_require__("6dbe");
var defined = __webpack_require__("11f8");
var wks = __webpack_require__("4d5e");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "3996":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("4d5e")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "39ea":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("93c8");
var step = __webpack_require__("8172");
var Iterators = __webpack_require__("1bc7");
var toIObject = __webpack_require__("4299");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("148e")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "3b4d":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("b87a");
var anObject = __webpack_require__("3403");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("730f")(Function.call, __webpack_require__("c58f").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "3ff1":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d448")('keys');
var uid = __webpack_require__("6542");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "4253":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("7814");
var createDesc = __webpack_require__("13a6");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "4299":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("8b24");
var defined = __webpack_require__("11f8");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "440e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("11f8");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "454c":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("02b9");
var hiddenKeys = __webpack_require__("6286").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "4715":
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "47a1":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b87a");
var document = __webpack_require__("bfb5").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "4d5e":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("d448")('wks');
var uid = __webpack_require__("6542");
var Symbol = __webpack_require__("bfb5").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "4fac":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "526e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("6dbe");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "56c0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("e248");
var $includes = __webpack_require__("0619")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("93c8")('includes');


/***/ }),

/***/ "574b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__("ee93")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "5ee6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("02b9");
var enumBugKeys = __webpack_require__("6286");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "6286":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "62f8":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("5ee6");
var toIObject = __webpack_require__("4299");
var isEnum = __webpack_require__("f2db").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "6542":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "65bd":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("3403");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "666a":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("b87a");
var cof = __webpack_require__("c685");
var MATCH = __webpack_require__("4d5e")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "6871":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("1bc7");
var ITERATOR = __webpack_require__("4d5e")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "6d69":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("7814").f;
var has = __webpack_require__("f41c");
var TAG = __webpack_require__("4d5e")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "6dbe":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "730f":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("4fac");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "74c9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("7814").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("f4b2") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "7576":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("4d5e")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "77cd":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("e248");
var $values = __webpack_require__("62f8")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "7814":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("3403");
var IE8_DOM_DEFINE = __webpack_require__("2eab");
var toPrimitive = __webpack_require__("b34d");
var dP = Object.defineProperty;

exports.f = __webpack_require__("f4b2") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "7ac1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("bfc3");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "7bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("bfb5");
var has = __webpack_require__("f41c");
var cof = __webpack_require__("c685");
var inheritIfRequired = __webpack_require__("f8db");
var toPrimitive = __webpack_require__("b34d");
var fails = __webpack_require__("6dbe");
var gOPN = __webpack_require__("454c").f;
var gOPD = __webpack_require__("c58f").f;
var dP = __webpack_require__("7814").f;
var $trim = __webpack_require__("998d").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("21b2")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("f4b2") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("0b9e")(global, NUMBER, $Number);
}


/***/ }),

/***/ "7e4b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "vlButton", function() { return components_vlButton; });
__webpack_require__.d(components_namespaceObject, "vlSelect", function() { return components_vlSelect; });
__webpack_require__.d(components_namespaceObject, "vlSwitch", function() { return components_vlSwitch; });
__webpack_require__.d(components_namespaceObject, "vlCheckbox", function() { return components_vlCheckBox; });
__webpack_require__.d(components_namespaceObject, "vlRadio", function() { return components_vlRadio; });
__webpack_require__.d(components_namespaceObject, "vlInput", function() { return components_vlInput; });
__webpack_require__.d(components_namespaceObject, "vlTabs", function() { return components_vlTabs; });
__webpack_require__.d(components_namespaceObject, "vlSlider", function() { return components_vlSlider; });
__webpack_require__.d(components_namespaceObject, "vlInputNumber", function() { return components_vlInputNumber; });
__webpack_require__.d(components_namespaceObject, "vlTooltip", function() { return components_vlTooltip; });
__webpack_require__.d(components_namespaceObject, "vlUpload", function() { return components_vlUpload; });
__webpack_require__.d(components_namespaceObject, "vlPopup", function() { return components_vlPopup; });
__webpack_require__.d(components_namespaceObject, "vlAlert", function() { return components_vlAlert; });
__webpack_require__.d(components_namespaceObject, "vlChip", function() { return components_vlChip; });
__webpack_require__.d(components_namespaceObject, "vlProgress", function() { return components_vlProgress; });
__webpack_require__.d(components_namespaceObject, "vlCard", function() { return components_vlCard; });
__webpack_require__.d(components_namespaceObject, "vlList", function() { return components_vlList; });
__webpack_require__.d(components_namespaceObject, "vlAvatar", function() { return components_vlAvatar; });
__webpack_require__.d(components_namespaceObject, "vlPagination", function() { return components_vlPagination; });
__webpack_require__.d(components_namespaceObject, "vlBreadcrumb", function() { return components_vlBreadcrumb; });
__webpack_require__.d(components_namespaceObject, "vlPrompt", function() { return vlPrompt; });
__webpack_require__.d(components_namespaceObject, "vlDivider", function() { return components_vlDivider; });
__webpack_require__.d(components_namespaceObject, "vlSpacer", function() { return components_vlSpacer; });
__webpack_require__.d(components_namespaceObject, "vlIcon", function() { return components_vlIcon; });
__webpack_require__.d(components_namespaceObject, "vlNavbar", function() { return components_vlNavbar; });
__webpack_require__.d(components_namespaceObject, "vlSideBar", function() { return vlSideBar; });
__webpack_require__.d(components_namespaceObject, "vlDropDown", function() { return components_vlDropDown; });
__webpack_require__.d(components_namespaceObject, "vlTable", function() { return components_vlTable; });
__webpack_require__.d(components_namespaceObject, "vlTextarea", function() { return components_vlTextarea; });
__webpack_require__.d(components_namespaceObject, "vlCollapse", function() { return components_vlCollapse; });
__webpack_require__.d(components_namespaceObject, "vlImages", function() { return components_vlImages; });
__webpack_require__.d(components_namespaceObject, "vlRow", function() { return layout_vlRow; });
__webpack_require__.d(components_namespaceObject, "vlCol", function() { return layout_vlCol; });

// CONCATENATED MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("39ea");

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("77cd");

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("9a6a");

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("74c9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlButton/vlButton.vue?vue&type=template&id=4f066769&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({ref:"btn",staticClass:"vl-component vl-button",class:[("vl-button-" + (_vm.isColor()?_vm.color:null)),("vl-button-" + _vm.type),{
    'isActive':_vm.isActive,
    'includeIcon':_vm.icon,
    'includeIconOnly':_vm.icon && !_vm.$slots.default,
    'vl-radius':_vm.radius
  }, _vm.size],style:([_vm.styles,{
    'width':/[px]/.test(_vm.size)?("" + _vm.size):null,
    'height':/[px]/.test(_vm.size)?("" + _vm.size):null
  }]),attrs:{"name":"button"}},'button',_vm.$attrs,false),_vm.listeners),[(!_vm.is('line')&&!_vm.is('gradient')&&!_vm.is('relief'))?_c('span',{ref:"backgroundx",staticClass:"vl-button-backgroundx vl-button--background",style:(_vm.stylesBackGround)}):_vm._e(),(_vm.icon)?_c('VlIcon',{staticClass:"vl-button--icon ",style:({
      'order':_vm.iconAfter?2:0,
      'margin-right':_vm.$slots.default&&!_vm.iconAfter?'5px':'0px',
      'margin-left':_vm.$slots.default&&_vm.iconAfter?'5px':'0px'
    }),attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}):_vm._e(),(_vm.$slots.default)?_c('span',{staticClass:"vl-button-text vl-button--text"},[_vm._t("default")],2):_vm._e(),_c('span',{ref:"linex",staticClass:"vl-button-linex",style:(_vm.styleLine)})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlButton/vlButton.vue?vue&type=template&id=4f066769&lang=html&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("56c0");

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("dc5e");

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("213e");

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("e8da");

// CONCATENATED MODULE: ./src/utils/color.js








/* harmony default export */ var utils_color = ({
  darken: function darken(color, percent) {
    var f = color.split(","),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = parseInt(f[0].slice(4)),
        G = parseInt(f[1]),
        B = parseInt(f[2]);
    return "rgb(" + (Math.round((t - R) * p) + R) + "," + (Math.round((t - G) * p) + G) + "," + (Math.round((t - B) * p) + B) + ")";
  },
  getColor: function getColor(colorx) {
    var alphax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var defaultx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    // change color hex to RGB
    if (/^[#]/.test(colorx)) {
      var c = this.hexToRgb(colorx);

      if (alphax == 1) {
        colorx = "rgb(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ")");
      } else {
        colorx = "rgba(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ",").concat(alphax, ")");
      }
    } else if (/^rgba/.test(colorx)) {
      if (colorx.search(/.([0-9]\))$/) == -1 && !defaultx) {
        colorx = colorx.replace(/.?([0-9]\))$/, "".concat(alphax, ")"));
      }
    } else if (/^(rgb)/.test(colorx)) {
      // change rgb and rgba
      if (alphax != 1) {
        colorx = colorx.replace(/^(rgb)/, "rgba");
        colorx = colorx.replace(/\)$/, ",".concat(alphax, ")"));
      }
    }

    return colorx;
  },
  isColor: function isColor(colorx) {
    var vlcolors = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light'];
    return vlcolors.includes(colorx);
  },
  RandomColor: function RandomColor() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return "rgb(".concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ")");
  },
  rColor: function rColor(colorx) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    if (/^[#]/.test(colorx)) {
      var c = this.hexToRgb(colorx);
      colorx = "rgba(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ",").concat(opacity, ")");
    } else if (/^[rgb]/.test(colorx)) {
      var colorSplit = colorx.split(')')[0];

      if (!/^[rgba]/.test(colorx)) {
        colorSplit.replace('rgb', 'rgba');
        colorSplit += ",".concat(opacity, ")");
      } else {
        // colorSplit.replace('rgb','rgba')
        colorSplit += ")";
      }

      colorx = colorSplit;
    }

    var vlcolors = ['primary', 'success', 'danger', 'warning', 'dark'];

    if (colorx) {
      if (/[#()]/.test(colorx)) {
        return colorx;
      } else {
        if (vlcolors.includes(colorx)) {
          return "rgba(var(--".concat(colorx, "),").concat(opacity, ")");
        } else {
          return "rgba(var(--primary),".concat(opacity, ")");
        }
      }
    } else {
      return "rgba(var(--primary),".concat(opacity, ")");
    }
  },
  contrastColor: function contrastColor(elementx) {
    var c = elementx;

    if (/[#]/g.test(elementx)) {
      var rgbx = this.hexToRgb(elementx);
      c = "rgb(".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b, ")");
    }

    var rgb = c.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
    var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

    if (yiq >= 128) {
      return true;
    } else {
      return false;
    }
  },
  setCssVariable: function setCssVariable(propertyName, value) {
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty(propertyName, value);
    }
  },
  hexToRgb: function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },
  getVariable: function getVariable(styles, propertyName) {
    return String(styles.getPropertyValue(propertyName)).trim();
  },
  changeColor: function changeColor(colorInicial) {
    var colores = ['primary', 'success', 'danger', 'warning', 'dark'];
    var colorx;

    if (colores.includes(colorInicial)) {
      var style = getComputedStyle(document.documentElement);
      colorx = this.getVariable(style, '--' + colorInicial);
    } else {
      if (/[rgb()]/g.test(colorInicial)) {
        colorx = colorInicial.replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(colorInicial)) {
        var rgbx = this.hexToRgb(colorInicial);
        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = '--' + colorInicial;
      }
    }

    return colorx; // this.setCssVariable('--'+clave,colorx)
  }
});
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlButton/vlButton.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlButtonvue_type_script_lang_js_ = ({
  name: 'VlButton',
  inheritAttrs: false,
  props: {
    type: {
      default: 'filled',
      type: String
    },
    color: {
      default: 'primary',
      type: String
    },
    textColor: {
      default: null,
      type: String
    },
    lineOrigin: {
      default: 'center',
      type: String
    },
    linePosition: {
      default: 'bottom',
      type: String
    },
    gradientDirection: {
      default: '30deg',
      type: String
    },
    gradientColorSecondary: {
      default: 'primary',
      type: String
    },
    size: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    iconAfter: {
      default: false,
      type: Boolean
    },
    radius: {
      default: false,
      type: Boolean
    },
    target: {
      default: false,
      type: [Boolean, String]
    }
  },
  data: function data() {
    return {
      isActive: false,
      hoverx: false,
      leftBackgorund: 20,
      topBackgorund: 20,
      radio: 0,
      time: 0.3,
      timeOpacity: 0.3,
      opacity: 1
    };
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        click: function click(event) {
          return _this.clickButton(event);
        },
        blur: function blur(event) {
          return _this.blurButton(event);
        },
        mouseover: function mouseover(event) {
          return _this.mouseoverx(event);
        },
        mouseout: function mouseout(event) {
          return _this.mouseoutx(event);
        }
      });
    },
    styles: function styles() {
      if (this.is('filled')) {
        return {
          color: utils_color.getColor(this.textColor, 1),
          background: utils_color.getColor(this.color, 1),
          boxShadow: this.hoverx ? "0px 8px 25px -8px ".concat(utils_color.getColor(this.color, 1)) : null
        };
      } else if (this.is('border') || this.is('flat')) {
        return {
          border: "".concat(this.is('flat') ? 0 : 1, "px solid ").concat(utils_color.getColor(this.color, 1)),
          background: this.hoverx ? utils_color.getColor(this.color, .1) : 'transparent',
          color: utils_color.getColor(this.textColor, 1) || utils_color.getColor(this.color, 1)
        };
      } else if (this.is('line')) {
        return {
          color: utils_color.getColor(this.textColor, 1) || utils_color.getColor(this.color, 1),
          borderBottomWidth: this.linePosition == 'bottom' ? "2px" : null,
          borderColor: "".concat(utils_color.getColor(this.color, .2)),
          borderTopWidth: this.linePosition == 'top' ? "2px" : null
        };
      } else if (this.is('gradient')) {
        var backgroundx = "linear-gradient(".concat(this.gradientDirection, ", ").concat(utils_color.getColor(this.color), " 0%, ").concat(utils_color.getColor(this.gradientColorSecondary, 1), " 100%)");
        return {
          background: backgroundx
        };
      } else if (this.is('relief')) {
        var color = utils_color.getColor(this.color, 1);

        return {
          background: utils_color.getColor(this.color, 1),
          boxShadow: "0 3px 0 0 ".concat(utils_color.darken(color, -0.4))
        };
      } else {
        return {
          color: utils_color.getColor(this.textColor, 1),
          background: utils_color.getColor(this.color, 1),
          boxShadow: this.hoverx ? "0px 8px 25px -8px ".concat(utils_color.getColor(this.color, 1)) : null
        };
      }
    },
    stylesBackGround: function stylesBackGround() {
      var styles = {
        background: this.is('flat') || this.is('border') ? utils_color.getColor(this.color, 1, false) : null,
        opacity: this.opacity,
        left: "".concat(this.leftBackgorund, "px"),
        top: "".concat(this.topBackgorund, "px"),
        width: "".concat(this.radio, "px"),
        height: "".concat(this.radio, "px"),
        transition: "width ".concat(this.time, "s ease, height ").concat(this.time, "s ease, opacity ").concat(this.timeOpacity, "s ease")
      };
      return styles;
    },
    styleLine: function styleLine() {
      var lineOrigin = '50%';

      if (this.lineOrigin == 'left') {
        lineOrigin = '0%';
      } else if (this.lineOrigin == 'right') {
        lineOrigin = 'auto';
      }

      var styles = {
        top: this.linePosition == 'top' ? '-2px' : 'auto',
        bottom: this.linePosition == 'bottom' ? '-2px' : 'auto',
        background: utils_color.getColor(this.color, 1),
        left: lineOrigin,
        right: lineOrigin == 'auto' ? '0px' : null,
        transform: lineOrigin == '50%' ? 'translate(-50%)' : null
      };
      return styles;
    }
  },
  methods: {
    routerPush: function routerPush() {
      this.$router.push(this.to);
    },
    is: function is(which) {
      var type = this.type;
      return type == which;
    },
    mouseoverx: function mouseoverx(event) {
      this.$emit('mouseover', event);
      this.hoverx = true;
    },
    mouseoutx: function mouseoutx(event) {
      this.$emit('mouseout', event);
      this.hoverx = false;
    },
    blurButton: function blurButton(event) {
      var _this2 = this;

      this.$emit('blur', event);

      if (this.type == 'border' || this.type == 'flat') {
        this.opacity = 0;
        setTimeout(function () {
          _this2.radio = 0;
        }, 150);
        this.isActive = false;
      }
    },
    clickButton: function clickButton(event) {
      var _this3 = this;

      this.$emit('click', event);

      if (this.isActive) {
        return;
      }

      if (this.to) {
        this.routerPush();
      }

      if (this.href) {
        this.target ? window.open(this.href) : window.location.href = this.href;
      }

      this.isActive = true;
      var btn = this.$refs.btn;
      var xEvent = event.offsetX;
      var yEvent = event.offsetY;
      var radio = btn.clientWidth * 3;
      this.time = btn.clientWidth / (btn.clientWidth + (this.is('border') || this.is('flat') ? 70 : 20));

      if (this.is('filled')) {
        this.timeOpacity = this.time;
      }

      if (event.srcElement ? event.srcElement != btn : false) {
        xEvent += event.target.offsetLeft;
        yEvent += event.target.offsetTop;
      }

      this.leftBackgorund = xEvent;
      this.topBackgorund = yEvent;
      this.radio = radio;

      if (this.is('filled')) {
        this.opacity = 0;
      } else {
        this.opacity = 1;
      }

      if (this.is('filled')) {
        setTimeout(function () {
          _this3.time = _this3.timeOpacity = _this3.radio = 0;
          _this3.opacity = 1;
          _this3.isActive = false;
        }, this.time * 1100);
      } else {
        setTimeout(function () {
          _this3.timeOpacity = .15;
        }, this.time * 1100);
      }
    },
    isColor: function isColor() {
      return utils_color.isColor(this.color);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlButton/vlButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlButton_vlButtonvue_type_script_lang_js_ = (vlButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/vlButton/vlButton.vue





/* normalize component */

var component = normalizeComponent(
  vlButton_vlButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "vlButton.vue"
/* harmony default export */ var vlButton = (component.exports);
// CONCATENATED MODULE: ./src/components/vlButton/index.js



/* harmony default export */ var components_vlButton = (function (Vue) {
  Vue.component(vlButton.name, vlButton);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSelect/vlSelect.vue?vue&type=template&id=42d9c9c9&lang=html&
var vlSelectvue_type_template_id_42d9c9c9_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-select",class:{
    'autocompletex':_vm.autocomplete,
    'activeOptions':_vm.active,
    'input-select-validate-success':_vm.success,
    'input-select-validate-danger':_vm.danger,
    'input-select-validate-warning':_vm.warning}},[(_vm.label)?_c('label',{ref:"inputSelectLabel",staticClass:"vl-select--label",attrs:{"for":""}},[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]):_vm._e(),_c('div',{staticClass:"input-select-con"},[_c('input',_vm._g(_vm._b({ref:"inputselect",staticClass:"input-select vl-select--input",attrs:{"readonly":!_vm.autocomplete,"type":"text"},on:{"click":function($event){$event.stopPropagation();},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }$event.stopPropagation();$event.preventDefault();return _vm.closeOptions($event)}}},'input',_vm.$attrs,false),_vm.listeners)),_c('VlIcon',{staticClass:"icon-select vl-select--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}),_c('Transition',{attrs:{"name":"fadeselect"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],ref:"vlSelectOptions",staticClass:"vl-select--options",class:[("vl-select-" + _vm.color),{'scrollx':_vm.scrollx}],style:(_vm.cords)},[_c('ul',{ref:"ulx"},[_vm._t("default")],2),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.clear),expression:"clear"}]},[_c('li',{on:{"click":function($event){_vm.filterItems(''),_vm.changeValue()}}},[_vm._v("\n            "+_vm._s(_vm.noData)+"\n          ")])])])])],1),_c('TransitionGroup',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.success)?_c('div',{key:"success",staticClass:"con-text-validation"},[_c('span',{staticClass:"span-text-validation span-text-validation-success"},[_vm._v("\n        "+_vm._s(_vm.successText)+"\n      ")])]):(_vm.danger)?_c('div',{key:"danger",staticClass:"con-text-validation span-text-validation-danger"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.dangerText)+"\n      ")])]):(_vm.warning)?_c('div',{key:"warning",staticClass:"con-text-validation span-text-validation-warning"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.warningText)+"\n      ")])]):_vm._e(),(_vm.descriptionText)?_c('div',{key:"description",staticClass:"con-text-validation span-text-validation"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.descriptionText)+"\n      ")])]):_vm._e()])],1)}
var vlSelectvue_type_template_id_42d9c9c9_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlSelect/vlSelect.vue?vue&type=template&id=42d9c9c9&lang=html&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("b24d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("7bfb");

// CONCATENATED MODULE: ./src/utils/index.js
/* harmony default export */ var utils = ({
  insertBody: function insertBody(elx) {
    document.body.insertBefore(elx, document.body.firstChild);
  },
  changePosition: function changePosition(elx, content, conditional) {
    var topx = 0;
    var leftx = 0;
    var widthx = 0;
    var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;

    if (elx.getBoundingClientRect().top + 300 >= window.innerHeight) {
      setTimeout(function () {
        if (conditional) {
          topx = elx.getBoundingClientRect().top - content.clientHeight + scrollTopx;
        } else {
          topx = elx.getBoundingClientRect().top - content.clientHeight + elx.clientHeight + scrollTopx;
        }
      }, 1);
    } else {
      topx = conditional ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5 : elx.getBoundingClientRect().top + scrollTopx;
    }

    leftx = elx.getBoundingClientRect().left;
    widthx = elx.offsetWidth;
    var cords = {
      left: "".concat(leftx, "px"),
      top: "".concat(topx, "px"),
      width: "".concat(widthx, "px")
    };
    return cords;
  }
});
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSelect/vlSelect.vue?vue&type=script&lang=js&















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlSelectvue_type_script_lang_js_ = ({
  name: 'VlSelect',
  props: {
    value: {},
    noData: {
      default: 'data no available',
      type: String
    },
    maxSelected: {
      default: null,
      type: [Number, String]
    },
    autocomplete: {
      default: false,
      type: Boolean
    },
    color: {
      default: 'primary',
      type: String
    },
    multiple: {
      default: false,
      type: Boolean
    },
    label: {
      default: null,
      type: [String]
    },
    success: {
      default: false,
      type: Boolean
    },
    danger: {
      default: false,
      type: Boolean
    },
    warning: {
      default: false,
      type: Boolean
    },
    successText: {
      default: null,
      type: String
    },
    dangerText: {
      default: null,
      type: String
    },
    warningText: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    icon: {
      default: 'keyboard_arrow_down',
      type: String
    }
  },
  data: function data() {
    return {
      valueFilter: '',
      active: false,
      valuex: '',
      clear: false,
      scrollx: false,
      cords: {},
      filterx: false
    };
  },
  computed: {
    parent: function parent() {
      return this;
    },
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        blur: function blur(event) {
          if (_this.autocomplete && event.relatedTarget ? !event.relatedTarget.closest('.vl-select--options') : false) {
            _this.closeOptions();
          }

          _this.$emit('blur', event);
        },
        focus: function focus(event) {
          _this.$emit('focus', event); // document.removeEventListener('click',this.clickBlur)


          _this.focus(event);
        },
        input: function input(event) {
          if (_this.autocomplete) {
            _this.$emit('input-change', event);
          }
        },
        keyup: function keyup(event) {
          if (event.key == 'ArrowDown' || event.key == 'ArrowUp') {
            event.preventDefault();

            var childrens = _this.$children.filter(function (item) {
              return item.visible;
            });

            childrens[0].$el.querySelector('.vl-select--item').focus();
          } else {
            if (_this.autocomplete) {
              _this.filterItems(event.target.value);
            }
          }

          _this.$children.map(function (item) {
            item.valueInputx = _this.$refs.inputselect.value;
          });
        }
      });
    }
  },
  watch: {
    value: function value(event) {
      this.$emit('change', event);
    },
    active: function active() {
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.active) {
          utils.insertBody(_this2.$refs.vlSelectOptions);
          setTimeout(function () {
            _this2.$children.forEach(function (item) {
              if (item.focusValue) {
                item.focusValue();
              }
            });

            if (_this2.$refs.ulx.scrollHeight >= 260) _this2.scrollx = true;
          }, 100);
        } else {
          var _document$getElements = document.getElementsByClassName('input-select-con'),
              _document$getElements2 = _slicedToArray(_document$getElements, 1),
              parent = _document$getElements2[0];

          if (parent.childNodes.length >= 3) {
            parent.removeChild(parent.childNodes[2]);
          }
        }
      });
    }
  },
  mounted: function mounted() {
    this.changeValue();

    if (this.active) {
      utils.insertBody(this.$refs.vlSelectOptions);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var _document$getElements3 = document.getElementsByClassName('input-select-con'),
        _document$getElements4 = _slicedToArray(_document$getElements3, 1),
        parent = _document$getElements4[0];

    if (parent.childNodes.length >= 3) {
      parent.removeChild(parent.childNodes[2]);
    }
  },
  updated: function updated() {
    if (!this.active) {
      this.changeValue();
    }
  },
  methods: {
    addMultiple: function addMultiple(value) {
      var currentValues = this.value ? this.value : [];

      if (currentValues.includes(value)) {
        currentValues.splice(currentValues.indexOf(value), 1);
        this.$emit('input', currentValues);
        this.changeValue();

        if (this.autocomplete) {
          this.$refs.inputselect.focus();
        }
      } else {
        if (this.autocomplete) {
          currentValues.push(value);
          this.$emit('input', currentValues);
          this.filterItems('');
          this.changeValue(); // this.$refs.inputselect.value += ','

          this.$refs.inputselect.focus();
        } else {
          currentValues.push(value);
          this.$emit('input', currentValues);
          this.changeValue();
        }
      }
    },
    filterItems: function filterItems(value) {
      var _this3 = this;

      if (value) {
        this.filterx = true;
      } else {
        this.filterx = false;
      }

      var items = this.$children;
      items.forEach(function (item) {
        if (item.$children.length > 0) {
          items = _toConsumableArray(items).concat(_toConsumableArray(item.$children));
        }
      });
      items.map(function (item) {
        if (!('text' in item)) return;
        var text = item.text;

        if (_this3.multiple) {
          var valuesx = value.split(',');
          valuesx.forEach(function (value_multi) {
            if (text.toUpperCase().indexOf(value_multi.toUpperCase()) == -1) {
              item.visible = false;
            } else {
              item.visible = true;
            }
          });
        } else {
          if (text.toUpperCase().indexOf(value.toUpperCase()) == -1) {
            item.visible = false;
          } else {
            item.visible = true;
          }
        }
      });
      var lengthx = items.filter(function (item) {
        return item.visible;
      });

      if (lengthx.length == 0) {
        this.clear = true;
      } else {
        this.clear = false;
      }

      this.$nextTick(function () {
        _this3.cords = _this3.changePosition();
      });
    },
    changeValue: function changeValue() {
      if (this.multiple) {
        var values = this.value ? this.value : [];
        var options = this.$children;
        options.forEach(function (item) {
          if (item.$children.length > 0) {
            options = _toConsumableArray(options).concat(_toConsumableArray(item.$children));
          }
        });
        var optionsValues = [];
        values.forEach(function (item) {
          options.forEach(function (item_option) {
            if (item_option.value == item) {
              var text = item_option.text;
              text = text.replace('check_circle', '');
              optionsValues.push(text.trim());
            }
          });
        });
        this.$refs.inputselect.value = optionsValues.toString();
      } else {
        if (this.$refs.inputselect) {
          this.$refs.inputselect.value = this.valuex;
        }
      }
    },
    focus: function focus() {
      var _this4 = this;

      this.active = true;
      this.setLabelClass(this.$refs.inputSelectLabel, true);
      var inputx = this.$refs.inputselect;
      setTimeout(function () {
        document.addEventListener('click', _this4.clickBlur);
      }, 100);

      if (this.autocomplete && this.multiple) {
        setTimeout(function () {
          if (inputx.value) {
            _this4.$refs.inputselect.value = inputx.value += ',';
          }

          inputx.selectionStart = inputx.selectionEnd = 10000;
        }, 10);
      } else if (this.autocomplete && !this.multiple) {
        this.$refs.inputselect.select();
      }

      if (!this.autocomplete) {
        if (this.multiple ? this.value.length == 0 : !this.value || this.multiple) {
          setTimeout(function () {
            _this4.$children[0].$el.querySelector('.vl-select--item').focus();
          }, 50);
        }
      }

      this.$nextTick(function () {
        _this4.cords = _this4.changePosition();
      });
    },
    clickBlur: function clickBlur(event) {
      var closestx = event.target.closest('.vl-select--options');

      if (!closestx) {
        this.closeOptions();

        if (this.autocomplete) {
          this.filterItems('');
        }

        this.changeValue();
      }
    },
    closeOptions: function closeOptions() {
      // this.$refs.inputselect.blur()
      this.active = false;
      this.setLabelClass(this.$refs.inputSelectLabel, false);
      document.removeEventListener('click', this.clickBlur);
    },
    changePosition: function changePosition() {
      var elx = this.$refs.inputselect;
      var content = this.$refs.vlSelectOptions;
      var conditional = this.autocomplete;
      var topx = 0;
      var leftx = 0;
      var widthx = 0;
      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;

      if (elx.getBoundingClientRect().top + content.scrollHeight + 20 >= window.innerHeight) {
        topx = elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx - content.scrollHeight;

        if (conditional) {
          topx = topx - elx.clientHeight - 5;
        }
      } else {
        topx = conditional ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5 : elx.getBoundingClientRect().top + scrollTopx;
      }

      leftx = elx.getBoundingClientRect().left;
      widthx = elx.offsetWidth;
      var cords = {
        left: "".concat(leftx, "px"),
        top: "".concat(topx, "px"),
        width: "".concat(widthx, "px")
      };
      return cords;
    },
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
    },
    enter: function enter(el, done) {
      var h = el.scrollHeight;
      el.style.height = h + 'px';
      done();
    },
    leave: function leave(el) {
      el.style.height = 0 + 'px';
    },
    setLabelClass: function setLabelClass(label, focusing) {
      if (!label) {
        return;
      }

      if (focusing) {
        label.classList.add('input-select-label-' + this.color + '--active');
        return;
      }

      label.classList.remove('input-select-label-' + this.color + '--active');
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlSelect/vlSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlSelect_vlSelectvue_type_script_lang_js_ = (vlSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlSelect/vlSelect.vue





/* normalize component */

var vlSelect_component = normalizeComponent(
  vlSelect_vlSelectvue_type_script_lang_js_,
  vlSelectvue_type_template_id_42d9c9c9_lang_html_render,
  vlSelectvue_type_template_id_42d9c9c9_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlSelect_component.options.__file = "vlSelect.vue"
/* harmony default export */ var vlSelect = (vlSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSelect/vlSelectItem.vue?vue&type=template&id=7285eed5&lang=html&
var vlSelectItemvue_type_template_id_7285eed5_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"vl-component",attrs:{"data-text":_vm.text}},[_c('button',_vm._g(_vm._b({ref:"item",staticClass:"vl-select--item",class:{
      'activex':_vm.$parent.parent.multiple?_vm.getValue.indexOf(_vm.value) != -1:_vm.getValue == _vm.value,
      'con-icon':_vm.$parent.parent.multiple,
      'disabledx':_vm.disabledx
    },style:(_vm.styles),attrs:{"disabled":_vm.disabled,"type":"button","name":"button"},on:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"backspace",undefined,$event.key,undefined)){ return null; }$event.preventDefault();return _vm.backspace($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();_vm.navigateOptions('next')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();_vm.navigateOptions('prev')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();_vm.clickOption()}]}},'button',_vm.$attrs,false),_vm.listeners),[(_vm.$parent.parent.multiple)?_c('i',{staticClass:"material-icons icon-item vl-select--item-icon"},[_vm._v("\n      check_circle\n    ")]):_vm._e(),_c('span',{domProps:{"innerHTML":_vm._s(_vm.getText)}})])])}
var vlSelectItemvue_type_template_id_7285eed5_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlSelect/vlSelectItem.vue?vue&type=template&id=7285eed5&lang=html&

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("82e0");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSelect/vlSelectItem.vue?vue&type=script&lang=js&










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlSelectItemvue_type_script_lang_js_ = ({
  name: 'VlSelectItem',
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      default: null
    },
    text: {
      default: null
    }
  },
  data: function data() {
    return {
      hoverx: false,
      visible: true,
      getText: null,
      valueInputx: ''
    };
  },
  computed: {
    disabledx: function disabledx() {
      if (this.$parent.parent.multiple) {
        if (this.isActive) {
          return false;
        } else {
          return this.$parent.parent.maxSelected == this.$parent.parent.value.length;
        }
      } else {
        return false;
      }
    },
    isActive: function isActive() {
      return this.$parent.parent.multiple ? this.getValue.indexOf(this.value) != -1 : this.getValue == this.value;
    },
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        blur: function blur(event) {
          if (event.relatedTarget ? !event.relatedTarget.closest('.vl-select--options') : true) {
            _this.$parent.parent.closeOptions();
          }
        },
        click: function click(event) {
          return _this.clickOption(event);
        },
        mouseover: function mouseover(event) {
          _this.$emit('mouseover', event);

          _this.changeHover(true);
        },
        mouseout: function mouseout(event) {
          _this.$emit('mouseover', event);

          _this.changeHover(false);
        }
      });
    },
    styles: function styles() {
      return {
        background: this.isActive ? utils_color.getColor(this.$parent.parent.color, .1) : null,
        color: this.isActive ? utils_color.getColor(this.$parent.parent.color, 1) : null,
        fontWeight: this.isActive ? 'bold' : null
      };
    },
    getValue: function getValue() {
      return this.$parent.parent.value;
    }
  },
  watch: {
    '$parent.parent.active': function $parentParentActive() {
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.$parent.parent.multiple ? _this2.getValue.indexOf(_this2.value) != -1 : _this2.getValue == _this2.value) {
          _this2.$emit('update:isSelected', true);

          _this2.getText = _this2.text;

          _this2.putValue();
        } else {
          _this2.$emit('update:isSelected', false);

          _this2.getText = _this2.text;

          _this2.putValue();
        }
      });
    },
    valueInputx: function valueInputx() {
      if (this.visible) {
        var valueInputx = this.valueInputx.split(',');

        if (valueInputx[valueInputx.length - 1] == '') {
          this.getText = this.text;
          return;
        }

        var valuex = valueInputx[valueInputx.length - 1];
        var re = new RegExp(valuex, "i");

        if (this.text.toUpperCase().indexOf(valuex.toUpperCase()) == 0) {
          valuex = this.MaysPrimera(valuex);
        }

        var text = this.text.replace(re, "<span class=\"searchx\">".concat(valuex, "</span>"));
        this.getText = text;
      } else {
        this.getText = this.text;
      }
    }
  },
  created: function created() {
    var _this3 = this;

    this.putValue();
    this.$nextTick(function () {
      if (_this3.$parent.parent.multiple ? _this3.getValue.indexOf(_this3.value) != -1 : _this3.getValue == _this3.value) {
        _this3.$emit('update:isSelected', true);

        _this3.getText = _this3.text;

        _this3.putValue();
      } else {
        _this3.$emit('update:isSelected', false);

        _this3.getText = _this3.text;

        _this3.putValue();
      }
    });
  },
  updated: function updated() {
    this.putValue();
  },
  methods: {
    changeHover: function changeHover(booleanx) {
      this.hoverx = booleanx;
    },
    MaysPrimera: function MaysPrimera(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    backspace: function backspace() {
      if (this.$parent.parent.autocomplete) {
        var valueInput = this.$parent.parent.$refs.inputselect.value;
        this.$parent.parent.$refs.inputselect.value = valueInput.substr(0, valueInput.length - 1);
        this.$parent.parent.$refs.inputselect.focus();
      }
    },
    navigateOptions: function navigateOptions(orientation) {
      var orientationObject = 'nextSibling',
          lengthx = 0;

      function getNextLi(li, orientationObject) {
        if (li && li.localName == 'li') {
          var lix = li[orientationObject];

          if (li.style) {
            if (li.style.display == 'none') {
              return getNextLi(lix, orientationObject);
            } else {
              return li;
            }
          } else {
            return li;
          }
        } else {
          return false;
        }
      }

      var children = this.$parent.parent.$children;
      children.forEach(function (item) {
        if (item.$children.length > 0) {
          children = _toConsumableArray(children).concat(_toConsumableArray(item.$children));
        }
      });
      children = children.filter(function (item) {
        return item.$children.length == 0 && item.$el.localName != 'span';
      });

      if (orientation == 'prev') {
        orientationObject = 'previousSibling';
        lengthx = children.length;
      }

      var nextElement = getNextLi(this.$el[orientationObject], orientationObject);

      if (nextElement) {
        nextElement.querySelector('.vl-select--item').focus();
      } else {
        if (lengthx === children.length) lengthx--;
        getNextLi(children[lengthx].$el, orientationObject).querySelector('.vl-select--item').focus();
      }
    },
    focusValue: function focusValue(index) {
      var _this4 = this;

      if (this.$parent.parent.multiple ? this.$parent.parent.value.indexOf(this.value) != -1 : this.value == this.$parent.parent.value) {
        if (!this.$parent.parent.autocomplete) {
          setTimeout(function () {
            _this4.$refs.item.focus();
          }, 50);
        }
      } else if (index === 0) {
        if (!this.$parent.parent.autocomplete) {
          setTimeout(function () {
            _this4.$refs.item.focus();
          }, 50);
        }
      }
    },
    putValue: function putValue() {
      if (this.value == this.$parent.parent.value) {
        this.$parent.parent.valuex = this.text;
      }
    },
    clickOption: function clickOption() {
      if (this.disabledx) {
        return;
      }

      var text = this.text;

      if (!this.$parent.parent.multiple) {
        this.$parent.parent.active = false;
        document.removeEventListener('click', this.$parent.parent.clickBlur);
        this.$parent.parent.valuex = text;
        this.$parent.parent.$emit('input', this.value);
        this.$parent.parent.changeValue();
      } else if (this.$parent.parent.multiple) {
        this.$parent.parent.valuex = text;
        this.$parent.parent.addMultiple(this.value);
      }

      this.$parent.parent.$children.map(function (item) {
        item.valueInputx = '';
      });
    },
    // methods colors
    isColor: function isColor() {
      return utils_color.isColor(this.color);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlSelect/vlSelectItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlSelect_vlSelectItemvue_type_script_lang_js_ = (vlSelectItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlSelect/vlSelectItem.vue





/* normalize component */

var vlSelectItem_component = normalizeComponent(
  vlSelect_vlSelectItemvue_type_script_lang_js_,
  vlSelectItemvue_type_template_id_7285eed5_lang_html_render,
  vlSelectItemvue_type_template_id_7285eed5_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlSelectItem_component.options.__file = "vlSelectItem.vue"
/* harmony default export */ var vlSelectItem = (vlSelectItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSelect/vlSelectGroup.vue?vue&type=template&id=d35ef4a8&
var vlSelectGroupvue_type_template_id_d35ef4a8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-select-group"},[(!_vm.filterx)?_c('h4',[_vm._v("\n    "+_vm._s(_vm.title)+"\n  ")]):_vm._e(),_vm._t("default")],2)}
var vlSelectGroupvue_type_template_id_d35ef4a8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlSelect/vlSelectGroup.vue?vue&type=template&id=d35ef4a8&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSelect/vlSelectGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var vlSelectGroupvue_type_script_lang_js_ = ({
  name: 'VlSelectGroup',
  props: {
    title: {
      default: 'Group',
      type: String
    }
  },
  data: function data() {
    return {
      activeTitle: true
    };
  },
  computed: {
    filterx: function filterx() {
      return this.$parent.filterx;
    },
    parent: function parent() {
      return this.$parent;
    }
  },
  methods: {
    focusValue: function focusValue(index) {
      this.$children[0].focusValue(index);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlSelect/vlSelectGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlSelect_vlSelectGroupvue_type_script_lang_js_ = (vlSelectGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlSelect/vlSelectGroup.vue





/* normalize component */

var vlSelectGroup_component = normalizeComponent(
  vlSelect_vlSelectGroupvue_type_script_lang_js_,
  vlSelectGroupvue_type_template_id_d35ef4a8_render,
  vlSelectGroupvue_type_template_id_d35ef4a8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlSelectGroup_component.options.__file = "vlSelectGroup.vue"
/* harmony default export */ var vlSelectGroup = (vlSelectGroup_component.exports);
// CONCATENATED MODULE: ./src/components/vlSelect/index.js





/* harmony default export */ var components_vlSelect = (function (Vue) {
  Vue.component(vlSelect.name, vlSelect);
  Vue.component(vlSelectItem.name, vlSelectItem);
  Vue.component(vlSelectGroup.name, vlSelectGroup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSwitch/vlSwitch.vue?vue&type=template&id=7ab50934&lang=html&
var vlSwitchvue_type_template_id_7ab50934_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._b({staticClass:"vl-component vl-switch",class:[
    ("vl-switch-" + _vm.color),
    {
      'vl-switch-active':_vm.isChecked || _vm.$attrs.checked
    }
  ],style:(_vm.style),attrs:{"type":"button","name":"button"},on:{"click":function($event){_vm.toggleCheckbox($event)}}},'button',_vm.$attrs,false),[_c('input',_vm._g({ref:"inputCheckbox",staticClass:"input-switch vl-switch--input",attrs:{"disabled":_vm.$attrs.disabled,"type":"checkbox","name":"","value":""},domProps:{"checked":_vm.value}},_vm.listeners)),_c('span',{ref:"on",staticClass:"text-on text-switch vl-switch--text",class:{'active-text':_vm.isChecked || _vm.$attrs.checked}},[_vm._t("on"),_c('VlIcon',{staticClass:"icons-switch vl-switch--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.vlIconOn || _vm.vlIcon}})],2),_c('span',{ref:"off",staticClass:"text-off text-switch vl-switch--text",class:{'active-text':!_vm.isChecked && !_vm.$attrs.checked}},[_vm._t("off"),_c('VlIcon',{staticClass:"icons-switch vl-switch--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.vlIconOff || _vm.vlIcon}})],2),_c('span',{staticClass:"vl-circle-switch vl-switch--circle"})])}
var vlSwitchvue_type_template_id_7ab50934_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlSwitch/vlSwitch.vue?vue&type=template&id=7ab50934&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSwitch/vlSwitch.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlSwitchvue_type_script_lang_js_ = ({
  name: 'VlSwitch',
  inheritAttrs: false,
  props: {
    value: {},
    color: {
      default: 'primary',
      type: String
    },
    vlIcon: {
      default: null,
      type: String
    },
    vlIconOn: {
      default: null,
      type: String
    },
    vlIconOff: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    vlValue: {}
  },
  data: function data() {
    return {
      widthx: 42,
      checkboxClicked: false
    };
  },
  computed: {
    style: function style() {
      return {
        background: this.value ? utils_color.getColor(this.color, 1) : null,
        width: "".concat(this.widthx, "px")
      };
    },
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        change: function change(evt) {
          _this.toggleValue(evt);
        }
      });
    },
    isChecked: function isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.value;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      var w = _this2.$refs.on.clientWidth > _this2.$refs.off.clientWidth ? _this2.$refs.on.clientWidth : _this2.$refs.off.clientWidth;
      _this2.widthx = w + 24;
    });
  },
  methods: {
    toggleCheckbox: function toggleCheckbox() {
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        this.$refs.inputCheckbox.checked = !this.$refs.inputCheckbox.checked;
        this.$emit('input', this.$refs.inputCheckbox.checked);
      }
    },
    toggleValue: function toggleValue(evt) {
      if (this.isArrayx()) {
        this.setArray(evt);
      } else {
        this.$emit('input', evt.target.checked);
        this.$emit('change', evt);
      }
    },
    setArray: function setArray(evt) {
      var value = this.value.slice(0); // Copy Array.

      if (this.isArrayIncludes()) {
        value.splice(value.indexOf(this.vlValue), 1); // delete value

        this.$emit('input', value);
        this.$emit('change', evt);
      } else {
        value.push(this.vlValue); // add value new

        this.$emit('input', value);
        this.$emit('change', evt);
      }
    },
    isArrayIncludes: function isArrayIncludes() {
      var modelx = this.value;
      var value = this.vlValue;
      return modelx.includes(value);
    },
    isArrayx: function isArrayx() {
      return Array.isArray(this.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlSwitch/vlSwitch.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlSwitch_vlSwitchvue_type_script_lang_js_ = (vlSwitchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlSwitch/vlSwitch.vue





/* normalize component */

var vlSwitch_component = normalizeComponent(
  vlSwitch_vlSwitchvue_type_script_lang_js_,
  vlSwitchvue_type_template_id_7ab50934_lang_html_render,
  vlSwitchvue_type_template_id_7ab50934_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlSwitch_component.options.__file = "vlSwitch.vue"
/* harmony default export */ var vlSwitch = (vlSwitch_component.exports);
// CONCATENATED MODULE: ./src/components/vlSwitch/index.js



/* harmony default export */ var components_vlSwitch = (function (Vue) {
  Vue.component(vlSwitch.name, vlSwitch);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlCheckBox/vlCheckBox.vue?vue&type=template&id=6fb00174&lang=html&
var vlCheckBoxvue_type_template_id_6fb00174_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-component con-vl-checkbox",class:[("vl-checkbox-" + _vm.color), ("vl-checkbox-" + _vm.size)]},[_c('input',_vm._g(_vm._b({staticClass:"vl-checkbox--input",attrs:{"type":"checkbox"},domProps:{"checked":_vm.isChecked || _vm.$attrs.checked,"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{staticClass:"checkbox_x vl-checkbox",style:(_vm.style)},[_c('span',{staticClass:"vl-checkbox--check",style:(_vm.style_check)},[_c('VlIcon',{staticClass:"vl-checkbox--icon ",attrs:{"icon":_vm.icon,"icon-pack":_vm.iconPack}})],1)]),_c('span',{staticClass:"con-slot-label"},[_vm._t("default")],2)])}
var vlCheckBoxvue_type_template_id_6fb00174_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlCheckBox/vlCheckBox.vue?vue&type=template&id=6fb00174&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlCheckBox/vlCheckBox.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlCheckBoxvue_type_script_lang_js_ = ({
  name: 'VlCheckbox',
  inheritAttrs: false,
  props: {
    color: {
      default: 'primary',
      type: String
    },
    value: {},
    icon: {
      default: 'check',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    vlValue: {
      type: [Boolean, Array, String, Number, Object],
      default: false
    },
    size: {
      default: 'default',
      type: String
    }
  },
  computed: {
    style_check: function style_check() {
      return {
        background: this.isChecked ? utils_color.getColor(this.color, 1) : null
      };
    },
    style: function style() {
      return {
        border: "2px solid ".concat(this.isChecked ? utils_color.getColor(this.color, 1) : 'rgb(180, 180, 180)')
      };
    },
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        change: function change(evt) {
          _this.toggleValue(evt);
        }
      });
    },
    isChecked: function isChecked() {
      return this.isArrayx() ? this.isArrayIncludes() : this.value;
    }
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color.rColor(color);
    },
    toggleValue: function toggleValue(evt) {
      if (this.isArrayx()) {
        this.setArray();
      } else if (typeof this.vlValue == 'string') {
        this.setValueString();
      } else {
        this.$emit('input', !this.value);
        this.$emit('change', evt);
      }
    },
    setArray: function setArray() {
      // Copy Array
      var value = this.value.slice(0);

      if (this.isArrayIncludes()) {
        value.splice(value.indexOf(this.vlValue), 1);
        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        value.push(this.vlValue);
        this.$emit('input', value);
        this.$emit('change', value);
      }
    },
    setValueString: function setValueString() {
      if (this.value == this.vlValue) {
        this.$emit('input', null);
        this.$emit('change', null);
      } else {
        this.$emit('input', this.vlValue);
        this.$emit('change', this.vlValue);
      }
    },
    isArrayIncludes: function isArrayIncludes() {
      var modelx = this.value;
      var value = this.vlValue;
      return modelx.includes(value);
    },
    isArrayx: function isArrayx() {
      return Array.isArray(this.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlCheckBox/vlCheckBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlCheckBox_vlCheckBoxvue_type_script_lang_js_ = (vlCheckBoxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlCheckBox/vlCheckBox.vue





/* normalize component */

var vlCheckBox_component = normalizeComponent(
  vlCheckBox_vlCheckBoxvue_type_script_lang_js_,
  vlCheckBoxvue_type_template_id_6fb00174_lang_html_render,
  vlCheckBoxvue_type_template_id_6fb00174_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlCheckBox_component.options.__file = "vlCheckBox.vue"
/* harmony default export */ var vlCheckBox = (vlCheckBox_component.exports);
// CONCATENATED MODULE: ./src/components/vlCheckBox/index.js



/* harmony default export */ var components_vlCheckBox = (function (Vue) {
  Vue.component(vlCheckBox.name, vlCheckBox);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlRadio/vlRadio.vue?vue&type=template&id=0b6a5024&lang=html&
var vlRadiovue_type_template_id_0b6a5024_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"vl-component con-vl-radio",class:[("vl-radio-" + _vm.color)]},[_c('input',_vm._g(_vm._b({staticClass:"vl-radio--input",attrs:{"type":"radio"},domProps:{"checked":_vm.isChecked,"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{staticClass:"vl-radio"},[_c('span',{staticClass:"vl-radio--borde",style:(_vm.styles)}),_c('span',{staticClass:"vl-radio--circle",style:(_vm.styleCircle)})]),_c('span',{staticClass:"vl-radio--label"},[_vm._t("default")],2)])}
var vlRadiovue_type_template_id_0b6a5024_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlRadio/vlRadio.vue?vue&type=template&id=0b6a5024&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlRadio/vlRadio.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlRadiovue_type_script_lang_js_ = ({
  name: 'VlRadio',
  inheritAttrs: false,
  props: {
    value: {},
    vlValue: {},
    color: {
      default: 'primary',
      type: String
    }
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        input: function input() {
          return _this.$emit('input', _this.vlValue);
        }
      });
    },
    attrs: function attrs() {
      var attrsx = JSON.parse(JSON.stringify(this.$attrs));
      return {
        attrsx: attrsx
      };
    },
    isChecked: function isChecked() {
      return this.vlValue == this.value;
    },
    styles: function styles() {
      return {
        'border': "2px solid ".concat(this.isChecked ? utils_color.getColor(this.color, 1) : 'rgb(200, 200, 200)')
      };
    },
    styleCircle: function styleCircle() {
      return {
        'background': utils_color.getColor(this.color, 1),
        'box-shadow': "0px 3px 12px 0px ".concat(utils_color.getColor(this.color, .4))
      };
    }
  },
  methods: {
    giveColor: function giveColor(color, opacity) {
      return utils_color.rColor(color, opacity);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlRadio/vlRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlRadio_vlRadiovue_type_script_lang_js_ = (vlRadiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlRadio/vlRadio.vue





/* normalize component */

var vlRadio_component = normalizeComponent(
  vlRadio_vlRadiovue_type_script_lang_js_,
  vlRadiovue_type_template_id_0b6a5024_lang_html_render,
  vlRadiovue_type_template_id_0b6a5024_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlRadio_component.options.__file = "vlRadio.vue"
/* harmony default export */ var vlRadio = (vlRadio_component.exports);
// CONCATENATED MODULE: ./src/components/vlRadio/index.js



/* harmony default export */ var components_vlRadio = (function (Vue) {
  Vue.component(vlRadio.name, vlRadio);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlInput/vlInput.vue?vue&type=template&id=21fcad5c&lang=html&
var vlInputvue_type_template_id_21fcad5c_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"coninput",staticClass:"vl-component vl-con-input-label vl-input",class:[("vl-input-" + _vm.color),{
    'isFocus':_vm.isFocus,
    'input-icon-validate-success':_vm.success,
    'input-icon-validate-danger':_vm.danger,
    'input-icon-validate-warning':_vm.warning,
    'is-label-placeholder':_vm.labelPlaceholder
  }],style:(_vm.styleLabel)},[(_vm.labelPlaceholder?false:_vm.label)?_c('label',{staticClass:"vl-input--label",attrs:{"for":""},on:{"click":_vm.focusInput}},[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]):_vm._e(),_c('div',{staticClass:"vl-con-input"},[_c('input',_vm._g(_vm._b({ref:"vlinput",staticClass:"vl-inputx vl-input--input",class:[_vm.size,{
        'hasValue':_vm.value != '',
        'hasIcon':_vm.icon,
        'icon-after-input':_vm.iconAfter
      }],style:(_vm.style),attrs:{"placeholder":null,"type":_vm.$attrs.type?_vm.$attrs.type:'text'},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('Transition',{attrs:{"name":"placeholderx"}},[(_vm.isValue&&(_vm.labelPlaceholder||_vm.$attrs.placeholder))?_c('span',{ref:"spanplaceholder",staticClass:"input-span-placeholder vl-input--placeholder",class:[
          _vm.labelPlaceholder&&(_vm.size),
          _vm.size,
          {
            'vl-placeholder-label': _vm.labelPlaceholder,
          }],style:(_vm.styleLabel),on:{"click":_vm.focusInput}},[_vm._v("\n        "+_vm._s(_vm.$attrs.placeholder || _vm.labelPlaceholder)+"\n      ")]):_vm._e()]),(_vm.icon)?_c('VlIcon',{staticClass:"icon-inputx notranslate vl-input--icon",class:{'icon-after':_vm.iconAfter},attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon},on:{"click":_vm.focusInput}}):_vm._e(),_c('Transition',{attrs:{"name":"icon-validate"}},[(_vm.success || _vm.danger || _vm.warning)?_c('span',{staticClass:"input-icon-validate vl-input--icon-validate",class:{'icon-before':_vm.iconAfter}},[_c('VlIcon',{class:{'icon-before':_vm.iconAfter},attrs:{"icon-pack":_vm.iconPack,"icon":_vm.getIcon}})],1):_vm._e()])],1),_c('TransitionGroup',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.success)?_c('div',{key:"success",staticClass:"con-text-validation vl-input--text-validation"},[_c('span',{staticClass:"span-text-validation span-text-validation-success vl-input--text-validation-span"},[_vm._v("\n        "+_vm._s(_vm.successText)+"\n      ")])]):(_vm.danger)?_c('div',{key:"danger",staticClass:"con-text-validation span-text-validation-danger vl-input--text-validation-span"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.dangerText)+"\n      ")])]):(_vm.warning)?_c('div',{key:"warning",staticClass:"con-text-validation span-text-validation-warning vl-input--text-validation-span"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.warningText)+"\n      ")])]):_vm._e(),(_vm.descriptionText)?_c('div',{key:"description",staticClass:"con-text-validation span-text-validation vl-input--text-validation-span"},[_c('span',{staticClass:"span-text-validation"},[_vm._v("\n        "+_vm._s(_vm.descriptionText)+"\n      ")])]):_vm._e()])],1)}
var vlInputvue_type_template_id_21fcad5c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlInput/vlInput.vue?vue&type=template&id=21fcad5c&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlInput/vlInput.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlInputvue_type_script_lang_js_ = ({
  name: 'VlInput',
  inheritAttrs: false,
  props: {
    value: {},
    labelPlaceholder: {
      default: null,
      type: [String, Number]
    },
    label: {
      default: null,
      type: [String, Number]
    },
    icon: {
      default: null,
      type: String
    },
    iconAfter: {
      default: false,
      type: [Boolean, String]
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    color: {
      default: 'primary',
      type: String
    },
    success: {
      default: false,
      type: Boolean
    },
    danger: {
      default: false,
      type: Boolean
    },
    warning: {
      default: false,
      type: Boolean
    },
    successText: {
      default: null,
      type: String
    },
    dangerText: {
      default: null,
      type: String
    },
    warningText: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    },
    size: {
      default: 'normal',
      type: String
    },
    valIconSuccess: {
      default: null,
      type: String
    },
    valIconDanger: {
      default: null,
      type: String
    },
    valIconWarning: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      isFocus: false
    };
  },
  computed: {
    style: function style() {
      return {
        border: "1px solid ".concat(this.isFocus ? utils_color.getColor(this.color, 1) : 'rgba(0, 0, 0,.2)')
      };
    },
    styleLabel: function styleLabel() {
      return {
        color: this.isFocus ? utils_color.getColor(this.color, 1) : null
      };
    },
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        input: function input(evt) {
          _this.$emit('input', evt.target.value);
        },
        focus: function focus(evt) {
          _this.$emit('focus', evt);

          _this.changeFocus(true);
        },
        blur: function blur(evt) {
          _this.$emit('blur', evt);

          _this.changeFocus(false);
        }
      });
    },
    isValue: function isValue() {
      return this.labelPlaceholder ? true : !this.value;
    },
    getIcon: function getIcon() {
      return this.danger ? this.valIconDanger : this.warning ? this.valIconWarning : this.success ? this.valIconSuccess : '';
    }
  },
  methods: {
    // animation
    changeFocus: function changeFocus(booleanx) {
      this.isFocus = booleanx;
    },
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
    },
    enter: function enter(el, done) {
      var h = el.scrollHeight;
      el.style.height = h + 'px';
      done();
    },
    leave: function leave(el) {
      el.style.height = 0 + 'px';
    },
    focusInput: function focusInput() {
      this.$refs.vlinput.focus();
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlInput/vlInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlInput_vlInputvue_type_script_lang_js_ = (vlInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlInput/vlInput.vue





/* normalize component */

var vlInput_component = normalizeComponent(
  vlInput_vlInputvue_type_script_lang_js_,
  vlInputvue_type_template_id_21fcad5c_lang_html_render,
  vlInputvue_type_template_id_21fcad5c_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlInput_component.options.__file = "vlInput.vue"
/* harmony default export */ var vlInput = (vlInput_component.exports);
// CONCATENATED MODULE: ./src/components/vlInput/index.js



/* harmony default export */ var components_vlInput = (function (Vue) {
  Vue.component(vlInput.name, vlInput);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTabs/vlTabs.vue?vue&type=template&id=45234604&lang=html&
var vlTabsvue_type_template_id_45234604_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vl-tabs vl-tabs",class:[("vl-tabs-" + _vm.color),("vl-tabs-position-" + _vm.vlPosition)]},[_c('div',{staticClass:"con-ul-tabs",style:(_vm.styleTabs)},[_c('ul',{ref:"ul",staticClass:"ul-tabs vl-tabs--ul",class:[("ul-tabs-" + _vm.vlAlignment)]},_vm._l((_vm.children),function(child,index){return _c('li',{key:index,ref:"li",refInFor:true,staticClass:"vl-tabs--li",class:{'activeChild':_vm.childActive == index},on:{"mouseover":function($event){_vm.hover = true},"mouseout":function($event){_vm.hover = false},"click":function($event){_vm.activeChild(index)}}},[_c('button',_vm._g(_vm._b({attrs:{"type":"button"}},'button',child.attrs,false),child.listeners),[_vm._v("\n          "+_vm._s(child.label)+"\n        ")])])})),_c('span',{staticClass:"line-vl-tabs",style:(_vm.stylex)})]),_c('div',{staticClass:"con-slot-tabs"},[_vm._t("default")],2)])}
var vlTabsvue_type_template_id_45234604_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlTabs/vlTabs.vue?vue&type=template&id=45234604&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTabs/vlTabs.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlTabsvue_type_script_lang_js_ = ({
  name: 'VlTabs',
  components: {},
  props: {
    value: {
      default: 0,
      type: [Number, String]
    },
    color: {
      default: 'primary',
      type: String
    },
    vlAlignment: {
      default: 'left',
      type: String
    },
    vlPosition: {
      default: 'top',
      type: String
    }
  },
  data: function data() {
    return {
      topx: 'auto',
      heightx: 2,
      hover: false,
      children: [],
      childActive: 0,
      leftx: 0,
      widthx: 0,
      these: false
    };
  },
  computed: {
    styleTabs: function styleTabs() {
      return {
        color: utils_color.getColor(this.color, 1)
      };
    },
    stylex: function stylex() {
      return {
        top: "".concat(this.topx, "px"),
        left: "".concat(this.leftx, "px"),
        width: "".concat(this.widthx, "px"),
        height: "".concat(this.heightx, "px"),
        background: "linear-gradient(30deg, ".concat(utils_color.getColor(this.color, 1), " 0%, ").concat(utils_color.getColor(this.color, .5), " 100%)"),
        boxShadow: "0px 0px 8px 0px ".concat(utils_color.getColor(this.color, .5)),
        transform: "scaleX(".concat(this.these ? 1.3 : 1, ")")
      };
    }
  },
  watch: {
    value: function value(index) {
      var activeIndex = this.parseIndex(index);
      this.activeChild(activeIndex);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var activeIndex = this.parseIndex(this.value);
    this.childActive = activeIndex;
    this.$nextTick(function () {
      _this.activeChild(activeIndex, true);
    });
  },
  methods: {
    parseIndex: function parseIndex(index) {
      var activeIndex = this.childActive;

      if (index < 0) {
        activeIndex = 0;
      } else if (index >= this.$children.length) {
        activeIndex = this.$children.length - 1;
      } else if (typeof this.$children[index].$attrs.disabled === 'undefined') {
        activeIndex = parseInt(index);
      }

      return activeIndex;
    },
    activeChild: function activeChild(index, initialAnimation) {
      var _this2 = this;

      initialAnimation = !!initialAnimation;
      var elem = this.$refs.li[index];

      if (this.childActive == index && !initialAnimation) {
        this.these = true;
        elem.classList.add('isActive');
        setTimeout(function () {
          elem.classList.remove('isActive');
          _this2.these = false;
        }, 200);
      }

      this.$children.map(function (item, item_index) {
        if (item_index != index) {
          item.active = false;
        }
      });

      if (this.childActive > index) {
        this.$children[index].invert = true;
        this.$children[this.childActive].invert = false;
      } else {
        this.$children[this.childActive].invert = true;
        this.$children[index].invert = false;
      }

      this.$children[index].active = true;
      this.childActive = index;
      this.$emit('input', this.childActive);

      if (this.vlPosition == 'left' || this.vlPosition == 'right') {
        this.$children[index].vertical = true;
      }

      this.changePositionLine(elem, initialAnimation);
    },
    changePositionLine: function changePositionLine(elem, initialAnimation) {
      var _this3 = this;

      if (this.vlPosition == 'left' || this.vlPosition == 'right') {
        this.topx = elem.offsetTop;
        this.heightx = elem.offsetHeight;
        this.widthx = 2;
      } else {
        var update = function update() {
          _this3.leftx = elem.offsetLeft;
          _this3.widthx = elem.offsetWidth;
        };

        if (!initialAnimation) {
          update();
        } else {
          setTimeout(update, 100);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlTabs/vlTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlTabs_vlTabsvue_type_script_lang_js_ = (vlTabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlTabs/vlTabs.vue





/* normalize component */

var vlTabs_component = normalizeComponent(
  vlTabs_vlTabsvue_type_script_lang_js_,
  vlTabsvue_type_template_id_45234604_lang_html_render,
  vlTabsvue_type_template_id_45234604_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlTabs_component.options.__file = "vlTabs.vue"
/* harmony default export */ var vlTabs = (vlTabs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTabs/vlTab.vue?vue&type=template&id=f5ecc282&lang=html&
var vlTabvue_type_template_id_f5ecc282_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Transition',{attrs:{"name":_vm.invert?_vm.vertical?'fade-tab-vertical-invert':'fade-tab-invert':_vm.vertical?'fade-tab-vertical':'fade-tab'}},[(_vm.active)?_c('div',{staticClass:"con-tab vl-tabs--content"},[_vm._t("default")],2):_vm._e()])}
var vlTabvue_type_template_id_f5ecc282_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlTabs/vlTab.vue?vue&type=template&id=f5ecc282&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTabs/vlTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlTabvue_type_script_lang_js_ = ({
  name: 'VlTab',
  inheritAttrs: false,
  props: {
    vlLabel: {
      default: 'Label',
      type: String
    }
  },
  data: function data() {
    return {
      vertical: false,
      active: false,
      id: null,
      invert: false
    };
  },
  mounted: function mounted() {
    this.id = this.$parent.children.length;
    this.$parent.children.push({
      label: this.vlLabel,
      id: this.$parent.children.length,
      listeners: this.$listeners,
      attrs: this.$attrs
    });
  }
});
// CONCATENATED MODULE: ./src/components/vlTabs/vlTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlTabs_vlTabvue_type_script_lang_js_ = (vlTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlTabs/vlTab.vue





/* normalize component */

var vlTab_component = normalizeComponent(
  vlTabs_vlTabvue_type_script_lang_js_,
  vlTabvue_type_template_id_f5ecc282_lang_html_render,
  vlTabvue_type_template_id_f5ecc282_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlTab_component.options.__file = "vlTab.vue"
/* harmony default export */ var vlTab = (vlTab_component.exports);
// CONCATENATED MODULE: ./src/components/vlTabs/index.js




/* harmony default export */ var components_vlTabs = (function (Vue) {
  Vue.component(vlTabs.name, vlTabs);
  Vue.component(vlTab.name, vlTab);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSlider/vlSlider.vue?vue&type=template&id=1c771b4e&lang=html&
var vlSlidervue_type_template_id_1c771b4e_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vl-slider",class:[
    ("vl-slider-" + _vm.color),
    {'disabledx':_vm.disabled}
  ],on:{"mousewheel":function($event){$event.preventDefault();return _vm.mousewheelx($event)},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.keydownLeft($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }return _vm.keydownRight($event)}]}},[_c('button',{ref:"slider",staticClass:"vl-slider",attrs:{"disabled":_vm.disabled},on:{"click":function($event){_vm.clickSlider($event),_vm.actived = true}}},[_c('span',{staticClass:"vl-slider-line-one",class:{'hasTransition':_vm.effect},style:(_vm.styleLineOne)}),_c('span',{staticClass:"vl-slider-line-two"}),_c('span',{staticClass:"vl-slider-line-efect",class:{'run-effect':_vm.effect},style:(_vm.styleEfect)}),_vm._l((_vm.countTicks),function(tick,index){return _c('span',{key:index,staticClass:"vl-slider--tick",class:{'isEnd':index == _vm.countTicks-1},style:(_vm.styleTicks(index))})})],2),_c('button',{ref:"circle1",staticClass:"vl-circle-slider vl-circles-slider vl-slider--circles vl-slider--circle",class:{
      'hasTransition':_vm.effect,
      'isEquals':_vm.isEquals,
      'changeValue':_vm.changeValue,
      'isEndValue':_vm.value == _vm.max
    },style:(_vm.styleCircle),attrs:{"disabled":_vm.disabled},on:{"touchstart":function($event){_vm.activeFocus($event),_vm.actived = true},"mousedown":function($event){_vm.activeFocus($event),_vm.actived = true}}},[_c('span',{staticClass:"text-circle-slider vl-slider--circle-text",style:(_vm.styleText)},[_vm._v("\n      "+_vm._s(_vm.valueCircle1)+"\n      "),(_vm.textFixed)?_c('span',[_vm._v("\n        "+_vm._s(_vm.textFixed)+"\n      ")]):_vm._e(),_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],1)]),(Array.isArray(_vm.value))?_c('button',{ref:"circle2",staticClass:"vl-circle-slider-two vl-circles-slider vl-slider--circles vl-slider--circle-two",class:{
      'hasTransition':_vm.effect,
      'isEquals':_vm.isEquals,
      'changeValue':_vm.changeValue,
      'isEndValue':_vm.value == _vm.max
    },style:(_vm.styleCircleTwo),attrs:{"disabled":_vm.disabled},on:{"touchstart":function($event){_vm.activeFocus($event),_vm.two = true,_vm.actived = true},"mousedown":function($event){_vm.activeFocus($event),_vm.two = true,_vm.actived = true}}},[_c('span',{staticClass:"text-circle-slider vl-slider--circle-text",style:(_vm.styleText)},[_vm._v("\n      "+_vm._s(_vm.valueCircle2)+"\n      "),(_vm.textFixed)?_c('span',[_vm._v("\n        "+_vm._s(_vm.textFixed)+"\n      ")]):_vm._e(),(_vm.icon)?_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v("\n        "+_vm._s(_vm.icon)+"\n      ")]):_vm._e()])]):_vm._e()])}
var vlSlidervue_type_template_id_1c771b4e_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlSlider/vlSlider.vue?vue&type=template&id=1c771b4e&lang=html&

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.math.sign.js
var es6_math_sign = __webpack_require__("a34d");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSlider/vlSlider.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlSlidervue_type_script_lang_js_ = ({
  name: 'VlSlider',
  props: {
    value: {},
    disabled: {
      default: false,
      type: [Boolean, String]
    },
    color: {
      default: 'primary',
      type: String
    },
    max: {
      default: 100,
      type: [Number, String]
    },
    min: {
      default: 0,
      type: Number
    },
    ticks: {
      default: false,
      type: Boolean
    },
    step: {
      default: 1,
      type: [Number, String]
    },
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    textFixed: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      leftx: 0,
      leftTwo: 0,
      effect: false,
      two: false,
      actived: false,
      changeValue: false,
      valueCircle1: 0,
      valueCircle2: 0
    };
  },
  computed: {
    isEquals: function isEquals() {
      return Array.isArray(this.value) ? this.value[0] == this.value[1] : false;
    },
    countTicks: function countTicks() {
      return this.max + 1;
    },

    /*
     * styles component
     */
    styleSlider: function styleSlider() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleLineOne: function styleLineOne() {
      var widthx = this.leftTwo - this.leftx;
      var leftx = this.leftx;

      if (this.leftx > this.leftTwo) {
        widthx = this.leftx - this.leftTwo;
        leftx = this.leftTwo;
      }

      return {
        width: "".concat(widthx, "%"),
        left: "".concat(leftx, "%"),
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleCircle: function styleCircle() {
      return {
        left: "".concat(this.leftx, "%"),
        border: "2px solid ".concat(utils_color.getColor(this.color, 1))
      };
    },
    styleCircleTwo: function styleCircleTwo() {
      return {
        left: "".concat(this.leftTwo, "%"),
        border: "2px solid ".concat(utils_color.getColor(this.color, 1))
      };
    },
    styleEfect: function styleEfect() {
      return {
        left: "".concat(this.leftx, "%"),
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleText: function styleText() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    }
  },
  watch: {
    value: function value() {
      var _this = this;

      if (!this.actived) {
        this.changePosition();
      }

      this.changeValue = true;
      setTimeout(function () {
        _this.changeValue = false;
      }, 300);
      this.$emit('change', this.value);
    },
    leftx: function leftx() {
      if (Array.isArray(this.value)) {
        if (this.leftx > this.leftTwo) {
          this.valueCircle1 = this.value[1];
        } else {
          this.valueCircle1 = this.value[0];
        }
      } else {
        this.valueCircle1 = this.value;
      }
    },
    leftTwo: {
      handler: function handler() {
        if (this.leftTwo > this.leftx) {
          this.valueCircle2 = this.value[1];
        } else {
          this.valueCircle2 = this.value[0];
        }
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.changePosition();
  },
  methods: {
    mousewheelx: function mousewheelx(evt) {
      if (!Array.isArray(this.value)) {
        if (evt.wheelDelta > 0) {
          var val = this.value + this.step;

          if (this.value >= this.max) {
            val = this.max;
          }

          this.leftx = val;
          this.$emit('input', val);
        } else {
          var _val = this.value - this.step;

          if (this.value <= this.min) {
            _val = this.min;
          }

          this.leftx = _val;
          this.$emit('input', _val);
        }
      }
    },
    keydownLeft: function keydownLeft() {
      if (!Array.isArray(this.value)) {
        var val = this.value - this.step;

        if (this.value == this.min) {
          val = this.min;
        }

        this.leftx = val;
        this.$emit('input', val);
      }
    },
    keydownRight: function keydownRight() {
      if (!Array.isArray(this.value)) {
        var val = this.value + this.step;

        if (this.value >= this.max) {
          val = this.max;
        }

        this.leftx = val;
        this.$emit('input', val);
      }
    },
    changePosition: function changePosition() {
      if (Array.isArray(this.value)) {
        this.leftx = Math.round((this.value[1] - this.min) / (this.max - this.min) * 100);
        this.leftTwo = Math.round((this.value[0] - this.min) / (this.max - this.min) * 100);
      } else {
        this.leftx = Math.round((this.value - this.min) / (this.max - this.min) * 100);
      }
    },
    styleTicks: function styleTicks(index) {
      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
      var steps = Math.round(index / lengthPerStep);
      return {
        left: steps * lengthPerStep + '%'
      };
    },
    activeFocus: function activeFocus() {
      window.addEventListener('mousemove', this.mouseMovex);
      window.addEventListener('mouseup', this.removeEvents);
      window.addEventListener('touchmove', this.mouseMovex);
      window.addEventListener('touchend', this.removeEvents);
    },
    mouseMovex: function mouseMovex(evt) {
      var slider = this.$refs.slider;
      var leftx;
      /*
      * change position left circle and bar
      */

      if (evt.type == 'touchmove') {
        leftx = event.targetTouches[0].clientX - slider.getBoundingClientRect().left;
      } else {
        leftx = evt.clientX - slider.getBoundingClientRect().left;
      }

      if (Math.sign(leftx) == -1) {
        leftx = 0;
      } else if (leftx > slider.clientWidth) {
        leftx = slider.clientWidth;
      }

      this.changeLeft(leftx);
    },
    removeEvents: function removeEvents() {
      this.two = this.actived = false;
      window.removeEventListener('mouseup', this.removeEvents);
      window.removeEventListener('mousemove', this.mouseMovex);
      window.removeEventListener('touchmove', this.mouseMovex);
      window.removeEventListener('touchend', this.removeEvents);
    },
    clickSlider: function clickSlider(evt) {
      var _this2 = this;

      var slider = this.$refs.slider;
      var leftx = evt.clientX - slider.getBoundingClientRect().left;
      this.effect = true;
      setTimeout(function () {
        _this2.effect = false;
      }, 200);
      var obtenerPorcentaje = leftx / slider.clientWidth * 100;
      var porcentajex = Math.round(obtenerPorcentaje);

      if (Array.isArray(this.value)) {
        if (Math.abs(porcentajex - this.leftx) > Math.abs(porcentajex - this.leftTwo)) {
          this.two = true;
        } else {
          this.two = false;
        }
      }

      this.changeLeft(leftx);
    },
    changeLeft: function changeLeft(leftx) {
      var slider = this.$refs.slider;
      var obtenerPorcentaje = leftx / slider.clientWidth * 100;
      var porcentajex = Math.round(obtenerPorcentaje); // let val = Math.round(porcentajex / 100 * (this.max))

      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
      var steps = Math.round(porcentajex / lengthPerStep);
      var val = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
      val = Math.round(val); // let val = Math.round(porcentajex * (this.max - this.min) * 0.01 + this.min)

      if (this.ticks) {
        // val =  Math.round(porcentajex / 100 * (this.max / this.step)) * this.step
        if (val > this.max) {
          val = this.max;
          this[this.two ? 'leftTwo' : 'leftx'] = 100;
        } else {
          this[this.two ? 'leftTwo' : 'leftx'] = Math.round(steps * lengthPerStep);
        }
      } else {
        this[this.two ? 'leftTwo' : 'leftx'] = Math.round(steps * lengthPerStep);
      }

      if (Array.isArray(this.value)) {
        var valueNew = val;

        if (val == this.max) {
          valueNew = this.max;
        }

        var vals = this.value;
        var min = Math.round(this.leftTwo / 100 * (this.max / this.step)) * this.step;
        var max = Math.round(this.leftx / 100 * (this.max / this.step)) * this.step;

        if (this.two) {
          if (min < max) {
            this.$emit('input', [valueNew, vals[1]]);
          } else if (min > max) {
            this.$emit('input', [vals[0], valueNew]);
          } else {
            this.$emit('input', [valueNew, valueNew]);
          }
        } else {
          if (min > max) {
            this.$emit('input', [valueNew, vals[1]]);
          } else if (min < max) {
            this.$emit('input', [vals[0], valueNew]);
          } else {
            this.$emit('input', [valueNew, valueNew]);
          }
        }
      } else {
        this.$emit('input', val);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlSlider/vlSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlSlider_vlSlidervue_type_script_lang_js_ = (vlSlidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlSlider/vlSlider.vue





/* normalize component */

var vlSlider_component = normalizeComponent(
  vlSlider_vlSlidervue_type_script_lang_js_,
  vlSlidervue_type_template_id_1c771b4e_lang_html_render,
  vlSlidervue_type_template_id_1c771b4e_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlSlider_component.options.__file = "vlSlider.vue"
/* harmony default export */ var vlSlider = (vlSlider_component.exports);
// CONCATENATED MODULE: ./src/components/vlSlider/index.js



/* harmony default export */ var components_vlSlider = (function (Vue) {
  Vue.component(vlSlider.name, vlSlider);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlInputNumber/vlInputNumber.vue?vue&type=template&id=92c40e12&lang=html&
var vlInputNumbervue_type_template_id_92c40e12_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-input-number",class:[
    ("vl-input-number-size-" + _vm.size),
    ("vl-input-number-" + _vm.color),
    {'isChangeValue':_vm.isChangeValue}
  ]},[_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.less),expression:"less"}],staticClass:"btn-less vl-input-number--button-less",class:{
      limit:_vm.value <= _vm.min
    },style:({
      background:_vm.getColor
    }),attrs:{"disabled":_vm.$attrs.disabled,"type":"button"}},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconDec}})],1),_c('input',_vm._g(_vm._b({ref:"input",staticClass:"vl-input-number--input",style:({
      width:(_vm.getLength + "px")
    }),attrs:{"type":"number"},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('button',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.plus),expression:"plus"}],staticClass:"btn-plus vl-input-number--button-plus",class:{
      limit:_vm.value >= _vm.max && _vm.max !== null
    },style:({
      background:_vm.getColor
    }),attrs:{"disabled":_vm.$attrs.disabled,"type":"button"}},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconInc}})],1)])}
var vlInputNumbervue_type_template_id_92c40e12_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlInputNumber/vlInputNumber.vue?vue&type=template&id=92c40e12&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlInputNumber/vlInputNumber.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlInputNumbervue_type_script_lang_js_ = ({
  name: 'VlInputNumber',
  directives: {
    repeatClick: {
      bind: function bind(el, binding, vnode) {
        var intervalx = null;
        var startT;

        var functionx = function functionx() {
          return vnode.context[binding.expression].apply();
        };

        var bucle = function bucle() {
          if (new Date() - startT < 100) {
            functionx();
          }

          clearInterval(intervalx);
          intervalx = null;
        };

        var eventx = function eventx(e) {
          if (e.button !== 0) return;
          startT = new Date();

          var escuchando = function escuchando() {
            if (bucle) {
              bucle.apply(this, arguments);
            }

            el.removeEventListener('mouseup', escuchando, false);
          };

          el.addEventListener('mouseleave', escuchando, false);
          el.addEventListener('mouseup', escuchando, false);
          clearInterval(intervalx);
          intervalx = setInterval(functionx, 100);
        };

        el.addEventListener('mousedown', eventx, false);
      }
    }
  },
  inheritAttrs: false,
  props: {
    value: {},
    color: {
      default: 'primary',
      type: String
    },
    max: {
      default: null,
      type: [Number, String]
    },
    min: {
      default: 0,
      type: [Number, String]
    },
    size: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    iconDec: {
      default: 'remove',
      type: String
    },
    iconInc: {
      default: 'add',
      type: String
    }
  },
  data: function data() {
    return {
      isChangeValue: false
    };
  },
  computed: {
    getLength: function getLength() {
      if (this.value) {
        return this.value.length * 9.1;
      } else {
        return 0;
      }
    },
    getColor: function getColor() {
      return utils_color.getColor(this.color, 1);
    },
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        blur: function blur(evt) {
          if (parseInt(_this.value) > parseInt(_this.max)) {
            _this.$emit('input', _this.max);
          } else if (parseInt(_this.value) < parseInt(_this.min)) {
            _this.$emit('input', _this.min);

            _this.$emit('blur', evt);
          }
        },
        input: function input(evt) {
          _this.$emit('input', evt.target.value);
        }
      });
    }
  },
  watch: {
    value: function value() {
      var _this2 = this;

      this.isChangeValue = true;
      setTimeout(function () {
        _this2.isChangeValue = false;
      }, 200);
    }
  },
  methods: {
    plus: function plus() {
      var newValue;

      if (this.value) {
        newValue = 0;
      }

      if (this.max ? parseInt(this.value) < parseInt(this.max) : true) {
        newValue = parseInt(this.value) + 1;
        this.$emit('input', newValue);
      }
    },
    less: function less() {
      var newValue;

      if (this.value) {
        newValue = 0;
      }

      if (this.min ? parseInt(this.value) > parseInt(this.min) : true) {
        newValue = parseInt(this.value) - 1;
        this.$emit('input', newValue);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlInputNumber/vlInputNumber.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlInputNumber_vlInputNumbervue_type_script_lang_js_ = (vlInputNumbervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlInputNumber/vlInputNumber.vue





/* normalize component */

var vlInputNumber_component = normalizeComponent(
  vlInputNumber_vlInputNumbervue_type_script_lang_js_,
  vlInputNumbervue_type_template_id_92c40e12_lang_html_render,
  vlInputNumbervue_type_template_id_92c40e12_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlInputNumber_component.options.__file = "vlInputNumber.vue"
/* harmony default export */ var vlInputNumber = (vlInputNumber_component.exports);
// CONCATENATED MODULE: ./src/components/vlInputNumber/index.js



/* harmony default export */ var components_vlInputNumber = (function (Vue) {
  Vue.component(vlInputNumber.name, vlInputNumber);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTooltip/vlTooltip.vue?vue&type=template&id=340d52b0&
var vlTooltipvue_type_template_id_340d52b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"convltooltip",staticClass:"con-vl-tooltip",on:{"mouseout":_vm.mouseoutx,"mouseover":_vm.mouseoverx}},[_c('Transition',{attrs:{"name":"tooltip-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],ref:"vltooltip",staticClass:"vl-tooltip",class:[("vl-tooltip-" + (_vm.positionx || _vm.position)),("vl-tooltip-" + _vm.color), {'after-none': _vm.noneAfter}],style:(_vm.style)},[(_vm.title)?_c('h4',[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]):_vm._e(),_vm._v("\n      "+_vm._s(_vm.text)+"\n    ")])]),_vm._t("default")],2)}
var vlTooltipvue_type_template_id_340d52b0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlTooltip/vlTooltip.vue?vue&type=template&id=340d52b0&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTooltip/vlTooltip.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var vlTooltipvue_type_script_lang_js_ = ({
  name: 'VlTooltip',
  props: {
    title: {
      default: null,
      type: [String, Number]
    },
    text: {
      default: null,
      type: [String, Number]
    },
    color: {
      default: null,
      type: String
    },
    position: {
      default: 'top',
      type: String
    },
    delay: {
      default: '0s',
      type: [Number, String]
    }
  },
  data: function data() {
    return {
      cords: {},
      active: false,
      widthx: 'auto',
      positionx: null,
      noneAfter: false
    };
  },
  computed: {
    style: function style() {
      return {
        left: this.cords.left,
        top: this.cords.top,
        transitionDelay: this.active ? this.delay : '0s',
        background: utils_color.getColor(this.color, 1),
        width: this.widthx
      };
    }
  },
  mounted: function mounted() {
    utils.insertBody(this.$refs.vltooltip);
  },
  methods: {
    mouseoverx: function mouseoverx() {
      var _this = this;

      this.active = true;
      this.$nextTick(function () {
        _this.changePosition(_this.$refs.convltooltip, _this.$refs.vltooltip);
      });
    },
    mouseoutx: function mouseoutx() {
      this.active = false;
    },
    changePosition: function changePosition(elxEvent, tooltip) {
      this.noneAfter = false;
      this.positionx = null;
      var elx = elxEvent.closest('.con-vl-tooltip');
      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      var topx = elx.getBoundingClientRect().top + scrollTopx - tooltip.clientHeight - 4;
      var leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 + elx.clientWidth / 2;
      var widthx = elx.clientWidth;

      if (this.position == 'bottom') {
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
      } else if (this.position == 'left') {
        leftx = elx.getBoundingClientRect().left - tooltip.clientWidth - 4;
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight / 2 - tooltip.clientHeight / 2;

        if (Math.sign(leftx) == -1) {
          leftx = elx.getBoundingClientRect().left;
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
          this.positionx = 'bottom';
          this.noneAfter = true;
        }
      } else if (this.position == 'right') {
        leftx = elx.getBoundingClientRect().left + elx.clientWidth + 4;
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight / 2 - tooltip.clientHeight / 2;

        if (window.innerWidth - (leftx + tooltip.clientWidth) <= 20) {
          leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 - 10;
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
          this.positionx = 'bottom';
          this.noneAfter = true;
        }
      }

      this.cords = {
        left: "".concat(leftx, "px"),
        top: "".concat(topx, "px"),
        width: "".concat(widthx, "px")
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlTooltip/vlTooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlTooltip_vlTooltipvue_type_script_lang_js_ = (vlTooltipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlTooltip/vlTooltip.vue





/* normalize component */

var vlTooltip_component = normalizeComponent(
  vlTooltip_vlTooltipvue_type_script_lang_js_,
  vlTooltipvue_type_template_id_340d52b0_render,
  vlTooltipvue_type_template_id_340d52b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlTooltip_component.options.__file = "vlTooltip.vue"
/* harmony default export */ var vlTooltip = (vlTooltip_component.exports);
// CONCATENATED MODULE: ./src/components/vlTooltip/index.js



/* harmony default export */ var components_vlTooltip = (function (Vue) {
  Vue.component(vlTooltip.name, vlTooltip);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlUpload/vlUpload.vue?vue&type=template&id=3da4673c&
var vlUploadvue_type_template_id_3da4673c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-upload"},[(_vm.viewActive)?_c('ViewUpload',{attrs:{"src":_vm.viewSrc}}):_vm._e(),_c('div',{staticClass:"con-input-upload",class:{
      'on-progress-all-upload':_vm.percent != 0,
      'is-ready-all-upload':_vm.percent >= 100,
      'disabled-upload':_vm.$attrs.hasOwnProperty('disabled') || _vm.limit?(_vm.srcs.length - _vm.itemRemove.length) >= Number(_vm.limit):false
    }},[_c('input',_vm._b({ref:"fileInput",attrs:{"disabled":_vm.$attrs.disabled || _vm.limit?(_vm.srcs.length - _vm.itemRemove.length) >= Number(_vm.limit):false,"type":"file"},on:{"change":_vm.getFiles}},'input',_vm.$attrs,false)),_c('span',{staticClass:"text-input"},[_vm._v("\n      "+_vm._s(_vm.text)+"\n    ")]),_c('span',{staticClass:"input-progress",style:({
        width:(_vm.percent + "%")
      })}),(_vm.showUploadButton)?_c('button',{staticClass:"btn-upload-all vl-upload--button-upload",attrs:{"type":"button","title":"Upload"},on:{"click":function($event){_vm.upload('all')}}},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v("\n        cloud_upload\n      ")])]):_vm._e()]),_c('div',{staticClass:"con-img-upload"},[_c('TransitionGroup',{attrs:{"name":"upload"}},_vm._l((_vm.srcs),function(img,index){return _c('div',{key:index,staticClass:"img-upload",class:{
          'fileError':img.error,
          'removeItem':_vm.itemRemove.includes(index)
        }},[_c('button',{staticClass:"btn-x-file",on:{"click":function($event){_vm.removeFile(index)}}},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v("\n            clear\n          ")])]),(_vm.showUploadButton)?_c('button',{staticClass:"btn-upload-file",class:{
            'on-progress':img.percent,
            'ready-progress':img.percent >= 100
          },style:({
            height: ((img.percent) + "%")
          }),on:{"click":function($event){_vm.upload(index)}}},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v("\n            "+_vm._s(img.percent >= 100?img.error?'report_problem':'cloud_done':'cloud_upload')+"\n          ")]),_c('span',[_vm._v(_vm._s(img.percent)+" %")])]):_vm._e(),(img.src)?_c('img',{key:index,style:({
            maxWidth:img.orientation == 'h'?'100%':'none',
            maxHeight:img.orientation == 'w'?'100%':'none'
          }),attrs:{"src":img.src},on:{"touchend":function($event){_vm.viewImage(img.src,$event)},"click":function($event){_vm.viewImage(img.src,$event)}}}):_vm._e(),(!img.src)?_c('h4',{staticClass:"text-archive"},[_c('i',{staticClass:"material-icons notranslate",attrs:{"translate":"no"}},[_vm._v("\n            description\n          ")]),_c('span',[_vm._v("\n            "+_vm._s(img.name)+"\n          ")])]):_vm._e()])}))],1)],1)}
var vlUploadvue_type_template_id_3da4673c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlUpload/vlUpload.vue?vue&type=template&id=3da4673c&

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.math.trunc.js
var es6_math_trunc = __webpack_require__("a764");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlUpload/viewUpload.vue?vue&type=template&id=d5014cb4&
var viewUploadvue_type_template_id_d5014cb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Transition',{attrs:{"name":"view-upload"}},[_c('div',{ref:"view",staticClass:"view-upload",on:{"click":_vm.closeView}},[_c('img',{attrs:{"src":_vm.src,"alt":"image"}})])])}
var viewUploadvue_type_template_id_d5014cb4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlUpload/viewUpload.vue?vue&type=template&id=d5014cb4&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlUpload/viewUpload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var viewUploadvue_type_script_lang_js_ = ({
  name: 'ViewUpload',
  props: {
    active: {
      default: false,
      type: Boolean
    },
    src: {
      default: null,
      type: String
    }
  },
  mounted: function mounted() {
    utils.insertBody(this.$refs.view);
  },
  upload: function upload() {
    utils.insertBody(this.$refs.view);
  },
  methods: {
    closeView: function closeView(evt) {
      if (evt.target.tagName != 'IMG') {
        this.$parent.viewActive = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlUpload/viewUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlUpload_viewUploadvue_type_script_lang_js_ = (viewUploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlUpload/viewUpload.vue





/* normalize component */

var viewUpload_component = normalizeComponent(
  vlUpload_viewUploadvue_type_script_lang_js_,
  viewUploadvue_type_template_id_d5014cb4_render,
  viewUploadvue_type_template_id_d5014cb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

viewUpload_component.options.__file = "viewUpload.vue"
/* harmony default export */ var viewUpload = (viewUpload_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlUpload/vlUpload.vue?vue&type=script&lang=js&








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var lastTap = 0;
/* harmony default export */ var vlUploadvue_type_script_lang_js_ = ({
  name: 'VlUpload',
  components: {
    viewUpload: viewUpload
  },
  inheritAttrs: false,
  props: {
    fileName: {
      default: null,
      type: String
    },
    text: {
      default: 'Upload File',
      type: String
    },
    limit: {
      default: null,
      type: [Number, String]
    },
    action: {
      default: null,
      type: String
    },
    headers: {
      default: null,
      type: Object
    },
    data: {
      default: null,
      type: Object
    },
    automatic: {
      default: false,
      type: Boolean
    },
    showUploadButton: {
      default: true,
      type: Boolean
    },
    singleUpload: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      inputValue: null,
      type: null,
      srcs: [],
      filesx: [],
      itemRemove: [],
      percent: 0,
      viewActive: false,
      viewSrc: null
    };
  },
  computed: {
    postFiles: function postFiles() {
      var postFiles = Array.prototype.slice.call(this.filesx);
      postFiles = postFiles.filter(function (item) {
        return !item.hasOwnProperty('remove');
      });
      return postFiles.length;
    }
  },
  watch: {
    percent: function percent() {
      var _this2 = this;

      if (this.percent >= 100) {
        this.srcs.forEach(function (file) {
          file.percent = 100;
        });
        setTimeout(function () {
          _this2.percent = 0;
        }, 1000);
      }
    }
  },
  methods: {
    viewImage: function viewImage(src, evt) {
      var timeout;
      var eventx = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchstart' : 'click';

      if (eventx == 'click') {
        this.viewActive = true;
        this.viewSrc = src;
      } else {
        if (evt.type == 'touchend') {
          var currentTime = new Date().getTime();
          var tapLength = currentTime - lastTap;
          clearTimeout(timeout);

          if (tapLength < 500 && tapLength > 0) {
            this.viewActive = true;
            this.viewSrc = src;
            event.preventDefault();
          }

          lastTap = currentTime;
        }
      }
    },
    removeFile: function removeFile(index) {
      var _this3 = this;

      this.itemRemove.push(index);
      setTimeout(function () {
        _this3.filesx[index].remove = true;
      }, 301);
    },
    getFiles: function getFiles(e) {
      this.$emit('update:vlFile', e.target.value);

      var _this = this;

      function uploadImage(e) {
        var orientation = 'h';
        var image = new Image();
        image.src = e.target.result;

        image.onload = function () {
          if (this.width > this.height) {
            orientation = 'w';
          }

          switchImage(this, orientation);
        };
      }

      function switchImage(image, orientation) {
        _this.srcs.push({
          src: image.src,
          orientation: orientation,
          type: _this.typex,
          percent: null,
          error: false,
          remove: null
        });
      }

      var files = e.target.files;
      var count = this.srcs.length - this.itemRemove.length;

      for (var file in files) {
        if (files.hasOwnProperty(file)) {
          if (this.limit) {
            count++;

            if (count > Number(this.limit)) {
              break;
            }
          }

          var reader = new FileReader();
          var filex = files[file];

          if (/image.*/.test(filex.type)) {
            this.typex = 'image';
            this.filesx.push(filex);
            reader.onload = uploadImage;
            reader.readAsDataURL(filex);
          } else if (/video.*/.test(filex.type)) {
            this.typex = 'video';
            this.filesx.push(filex);

            _this.srcs.push({
              src: null,
              name: filex.name,
              type: 'video',
              percent: null,
              error: false,
              remove: null
            });
          } else {
            this.filesx.push(filex);

            _this.srcs.push({
              src: null,
              name: filex.name,
              percent: null,
              error: false,
              remove: null
            });
          }
        }
      }

      var input = this.$refs.fileInput;
      input.type = 'text';
      input.type = 'file';

      if (this.automatic) {
        this.uploadx('all');
      }
    },
    upload: function upload(index) {
      var _this4 = this;

      var formData = new FormData();
      var postFiles = Array.prototype.slice.call(this.filesx);

      if (typeof index == 'number') {
        postFiles = [postFiles[index]];
      } else if (index == 'all') {
        postFiles = postFiles.filter(function (item) {
          return !item.hasOwnProperty('remove');
        });
      }

      var data = this.data || {};

      for (var key in data) {
        formData.append(key, data[key]);
      }

      if (this.singleUpload) {
        postFiles.forEach(function (filex) {
          var formData = new FormData();

          for (var key in data) {
            formData.append(key, data[key]);
          }

          formData.append(_this4.fileName, filex, filex.name);

          _this4.uploadx(index, formData);
        });
      } else {
        postFiles.forEach(function (filex) {
          formData.append(_this4.fileName, filex, filex.name);
        });
        this.uploadx(index, formData);
      }
    },
    uploadx: function uploadx(index, formData) {
      var self = this;
      var xhr = new XMLHttpRequest();

      xhr.onerror = function error(e) {
        self.$emit('on-error', e);

        if (typeof index == 'number') {
          self.srcs[index].error = true;
        }
      };

      xhr.onload = function onload(e) {
        if (xhr.status < 200 || xhr.status >= 300) {
          self.$emit('on-error', e);

          if (typeof index == 'number') {
            self.srcs[index].error = true;
          }
        } else {
          self.$emit('on-success', e);
          self.$emit('on-data', xhr.response);
        }
      };

      if (xhr.upload) {
        xhr.upload.onprogress = function progress(e) {
          if (e.total > 0) {
            var percent = e.loaded / e.total * 100;

            if (typeof index == 'number') {
              self.srcs[index].percent = Math.trunc(percent);
            } else {
              self.percent = Math.trunc(percent);
            }
          }
        };
      }

      xhr.withCredentials = true;
      xhr.open('POST', this.action);
      var headers = this.headers || {};

      for (var head in headers) {
        if (headers.hasOwnProperty(head) && headers[head] !== null) {
          xhr.setRequestHeader(head, headers[head]);
        }
      }

      xhr.send(formData);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlUpload/vlUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlUpload_vlUploadvue_type_script_lang_js_ = (vlUploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlUpload/vlUpload.vue





/* normalize component */

var vlUpload_component = normalizeComponent(
  vlUpload_vlUploadvue_type_script_lang_js_,
  vlUploadvue_type_template_id_3da4673c_render,
  vlUploadvue_type_template_id_3da4673c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlUpload_component.options.__file = "vlUpload.vue"
/* harmony default export */ var vlUpload = (vlUpload_component.exports);
// CONCATENATED MODULE: ./src/components/vlUpload/index.js



/* harmony default export */ var components_vlUpload = (function (Vue) {
  Vue.component(vlUpload.name, vlUpload);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlPopup/vlPopup.vue?vue&type=template&id=1fb605f1&lang=html&
var vlPopupvue_type_template_id_1fb605f1_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Transition',{attrs:{"name":"popup-t"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],ref:"con",staticClass:"vl-component con-vl-popup",class:[("vl-popup-" + _vm.color),{'fullscreen':_vm.fullscreen}, {'confirmation':_vm.confirmation}],on:{"click":function($event){_vm.close($event,true)}}},[_c('div',{staticClass:"vl-popup--background",style:(_vm.styleCon)}),_c('div',{ref:"popupx",staticClass:"vl-popup",style:(_vm.stylePopup)},[_c('header',{staticClass:"vl-popup--header",style:(_vm.styleHeader)},[_c('div',{staticClass:"vl-popup--title"},[_c('h3',[_vm._v(_vm._s(_vm.title))])]),(!_vm.buttonCloseHidden)?_c('VlIcon',{ref:"btnclose",staticClass:"vl-popup--close vl-popup--close--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconClose},on:{"click":_vm.close}}):_vm._e()],1),_c('div',{staticClass:"vl-popup--content",class:_vm.classContent,style:(_vm.styleContent)},[_vm._t("default")],2),(_vm.type=='form')?_c('footer',{staticClass:"vl-popup--footer"},[_c('VlButton',{attrs:{"color":_vm.colorSave,"type":_vm.buttonType},on:{"click":_vm.acceptForm}},[_vm._v("\n          "+_vm._s(_vm.acceptFormText)+"\n        ")]),_c('VlButton',{attrs:{"color":_vm.colorCancel,"type":_vm.buttonType},on:{"click":_vm.cancelForm}},[_vm._v("\n          "+_vm._s(_vm.cancelFormText)+"\n        ")])],1):_vm._e(),(_vm.type=='basic')?_c('footer',{staticClass:"vl-popup--footer"},[_c('VlButton',{attrs:{"color":_vm.colorCancel,"type":_vm.buttonType},on:{"click":_vm.cancelForm}},[_vm._v("\n          "+_vm._s(_vm.cancelFormText)+"\n        ")])],1):_vm._e()])])])}
var vlPopupvue_type_template_id_1fb605f1_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlPopup/vlPopup.vue?vue&type=template&id=1fb605f1&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlPopup/vlPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlPopupvue_type_script_lang_js_ = ({
  name: 'VlPopup',
  props: {
    colorCancel: {
      default: 'dark',
      type: String
    },
    acceptFormText: {
      default: 'Save',
      type: String
    },
    cancelFormText: {
      default: 'Cancel',
      type: String
    },
    colorSave: {
      default: 'primary',
      type: String
    },
    buttonType: {
      default: 'filled',
      type: String
    },
    active: {
      default: false,
      type: Boolean
    },
    title: {
      default: 'popup',
      type: String
    },
    type: {
      default: 'popup',
      type: String
    },
    buttonCloseHidden: {
      default: false,
      type: Boolean
    },
    fullscreen: {
      default: false,
      type: Boolean
    },
    confirmation: {
      default: false,
      type: Boolean
    },
    backgroundColor: {
      default: null,
      type: String
    },
    backgroundColorPopup: {
      default: 'rgb(255,255,255)',
      type: String
    },
    styleContent: {
      default: null,
      type: String
    },
    classContent: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    iconClose: {
      default: 'close',
      type: String
    },
    vlWidth: {
      default: '600px',
      type: String
    }
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color, 1)
      };
    },
    styleAfter: function styleAfter() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    },
    styleCon: function styleCon() {
      return {
        background: utils_color.getColor(this.backgroundColor, 1)
      };
    },
    stylePopup: function stylePopup() {
      return {
        background: utils_color.getColor(this.backgroundColorPopup, 1),
        width: this.vlWidth
      };
    }
  },
  mounted: function mounted() {
    this.insertBody();
  },
  methods: {
    acceptForm: function acceptForm() {
      this.$emit('vl-accept', true);
    },
    cancelForm: function cancelForm() {
      this.$emit('update:active', false);
      this.$emit('close', false);
    },
    giveColor: function giveColor(color) {
      return utils_color.rColor(color);
    },
    close: function close(event, con) {
      if (con) {
        if (event.target.className.indexOf('vl-popup--background') != -1) {
          this.$emit('update:active', false);
          this.$emit('close', false);
        } else if (event.toElement == this.$refs.btnclose.$el) {
          this.$emit('update:active', false);
          this.$emit('close', false);
        }
      }
    },
    insertBody: function insertBody() {
      var elx = this.$refs.con;
      document.body.insertBefore(elx, document.body.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlPopup/vlPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlPopup_vlPopupvue_type_script_lang_js_ = (vlPopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlPopup/vlPopup.vue





/* normalize component */

var vlPopup_component = normalizeComponent(
  vlPopup_vlPopupvue_type_script_lang_js_,
  vlPopupvue_type_template_id_1fb605f1_lang_html_render,
  vlPopupvue_type_template_id_1fb605f1_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlPopup_component.options.__file = "vlPopup.vue"
/* harmony default export */ var vlPopup = (vlPopup_component.exports);
// CONCATENATED MODULE: ./src/components/vlPopup/index.js



/* harmony default export */ var components_vlPopup = (function (Vue) {
  Vue.component(vlPopup.name, vlPopup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlAlert/vlAlert.vue?vue&type=template&id=18fbb87b&lang=html&
var vlAlertvue_type_template_id_18fbb87b_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.active)?_c('div',_vm._g(_vm._b({ref:"alert",staticClass:"con-vl-alert",class:[("con-vl-alert-" + _vm.color),{
      'con-icon':_vm.icon,
    }],style:(_vm.styleAlert)},'div',_vm.$attrs,false),_vm.$listeners),[(_vm.closable)?_c('div',{staticClass:"con-x vl-alert--close",on:{"click":function($event){_vm.$emit('update:active',false)}}},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.closeIcon}})],1):_vm._e(),(_vm.title)?_c('h4',{staticClass:"titlex vl-alert--title",style:(_vm.styleTitle)},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")]):_vm._e(),_c('div',{staticClass:"vl-alert"},[(_vm.icon)?_c('VlIcon',{staticClass:"icon-alert",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}):_vm._e(),_vm._t("default")],2)]):_vm._e()])}
var vlAlertvue_type_template_id_18fbb87b_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlAlert/vlAlert.vue?vue&type=template&id=18fbb87b&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlAlert/vlAlert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlAlertvue_type_script_lang_js_ = ({
  name: 'VlAlert',
  props: {
    active: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    },
    margin: {
      type: [String, Boolean],
      default: '10px'
    },
    icon: {
      type: String,
      default: null
    },
    closeIcon: {
      type: String,
      default: 'close'
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  },
  computed: {
    styleAlert: function styleAlert() {
      return {
        background: utils_color.getColor(this.color, .15),
        boxShadow: "0px 0px 25px 0px ".concat(utils_color.getColor(this.color, .15)),
        color: utils_color.getColor(this.color, 1)
      };
    },
    styleTitle: function styleTitle() {
      return {
        boxShadow: "0px 6px 15px -7px ".concat(utils_color.getColor(this.color, .4))
      };
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      var h = this.$refs.alert.scrollHeight;
      this.$refs.alert.style.height = h + 'px';
      el.style.opacity = 1;
      done();
    },
    leave: function leave(el) {
      this.$refs.alert.style.height = 0 + 'px';
      el.style.opacity = 0;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlAlert/vlAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlAlert_vlAlertvue_type_script_lang_js_ = (vlAlertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlAlert/vlAlert.vue





/* normalize component */

var vlAlert_component = normalizeComponent(
  vlAlert_vlAlertvue_type_script_lang_js_,
  vlAlertvue_type_template_id_18fbb87b_lang_html_render,
  vlAlertvue_type_template_id_18fbb87b_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlAlert_component.options.__file = "vlAlert.vue"
/* harmony default export */ var vlAlert = (vlAlert_component.exports);
// CONCATENATED MODULE: ./src/components/vlAlert/index.js



/* harmony default export */ var components_vlAlert = (function (Vue) {
  Vue.component(vlAlert.name, vlAlert);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlChip/vlChip.vue?vue&type=template&id=3f24848a&lang=html&
var vlChipvue_type_template_id_3f24848a_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vl-chip",class:[
    ("vl-chip-" + _vm.color),
    {
      'closable': _vm.closable,
      'con-color': _vm.color
    }
  ],style:(_vm.styleChip)},[_c('span',{staticClass:"text-chip vl-chip--text"},[_vm._t("default")],2),(_vm.closable)?_c('button',{staticClass:"btn-close vl-chip--close",on:{"click":_vm.closeChip}},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.closeIcon}})],1):_vm._e()])}
var vlChipvue_type_template_id_3f24848a_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlChip/vlChip.vue?vue&type=template&id=3f24848a&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlChip/vlChip.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlChipvue_type_script_lang_js_ = ({
  name: 'VlChip',
  props: {
    item: {
      type: Boolean
    },
    value: {},
    active: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: null
    },
    closable: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    closeIcon: {
      type: String,
      default: 'clear'
    }
  },
  computed: {
    styleChip: function styleChip() {
      return {
        background: utils_color.getColor(this.color, 1),
        color: this.color ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.7)'
      };
    },
    eliminado: function eliminado() {
      if (this.item) {
        return true;
      } else {
        if (this.vlClosable) {
          return this.value;
        } else {
          return true;
        }
      }
    }
  },
  methods: {
    closeChip: function closeChip() {
      this.$emit('input', false);
      this.$emit('click');
    },
    remove: function remove() {
      this.$emit('vl-remove', false);
      this.$emit('input', false);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlChip/vlChip.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlChip_vlChipvue_type_script_lang_js_ = (vlChipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlChip/vlChip.vue





/* normalize component */

var vlChip_component = normalizeComponent(
  vlChip_vlChipvue_type_script_lang_js_,
  vlChipvue_type_template_id_3f24848a_lang_html_render,
  vlChipvue_type_template_id_3f24848a_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlChip_component.options.__file = "vlChip.vue"
/* harmony default export */ var vlChip = (vlChip_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlChip/vlChips.vue?vue&type=template&id=4e298e98&lang=html&
var vlChipsvue_type_template_id_4e298e98_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('div',{staticClass:"con-chips",class:{'no-items':_vm.value.length==0}},[_vm._t("default"),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newChip),expression:"newChip"}],staticClass:"con-chips--input",attrs:{"placeholder":_vm.value.length>0?null:_vm.placeholder,"type":"text"},domProps:{"value":(_vm.newChip)},on:{"keypress":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.addItem($event)},"input":function($event){if($event.target.composing){ return; }_vm.newChip=$event.target.value}}}),_c('div',{staticClass:"x-global con-chips--remove-all",on:{"click":_vm.removeTotalItems}},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.removeIcon}})],1)],2)])}
var vlChipsvue_type_template_id_4e298e98_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlChip/vlChips.vue?vue&type=template&id=4e298e98&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlChip/vlChips.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlChipsvue_type_script_lang_js_ = ({
  name: 'VlChips',
  components: {},
  props: {
    value: {},
    vlColor: {
      type: String,
      default: 'primary'
    },
    placeholder: {
      type: String,
      default: ''
    },
    items: {
      type: Array
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    removeIcon: {
      type: String,
      default: 'close'
    }
  },
  data: function data() {
    return {
      newChip: '',
      chip1: true,
      itemsx: this.items
    };
  },
  methods: {
    addItem: function addItem() {
      // this.itemsx.push(this.newChip)
      var valueOld = this.value ? this.value : [];
      valueOld.push(this.newChip);
      this.$emit('input', valueOld);
      this.newChip = '';
    },
    removeTotalItems: function removeTotalItems() {
      var valueOld = this.value ? this.value : [];
      valueOld.splice(0, this.value.length);
      this.$emit('input', valueOld);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlChip/vlChips.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlChip_vlChipsvue_type_script_lang_js_ = (vlChipsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlChip/vlChips.vue





/* normalize component */

var vlChips_component = normalizeComponent(
  vlChip_vlChipsvue_type_script_lang_js_,
  vlChipsvue_type_template_id_4e298e98_lang_html_render,
  vlChipsvue_type_template_id_4e298e98_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlChips_component.options.__file = "vlChips.vue"
/* harmony default export */ var vlChips = (vlChips_component.exports);
// CONCATENATED MODULE: ./src/components/vlChip/index.js




/* harmony default export */ var components_vlChip = (function (Vue) {
  Vue.component(vlChip.name, vlChip);
  Vue.component(vlChips.name, vlChips);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlProgress/vlProgress.vue?vue&type=template&id=6079cad2&lang=html&
var vlProgressvue_type_template_id_6079cad2_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-progress--background",class:[("vl-progress-" + _vm.color),{
    'indeterminate':_vm.indeterminate,
  }],style:(_vm.styleConProgress)},[_c('div',{staticClass:"vl-progress--foreground",style:(_vm.styleProgress)}),(_vm.indeterminate)?_c('div',{staticClass:"vl-progress--indeterminate",style:(_vm.styleProgress)}):_vm._e()])}
var vlProgressvue_type_template_id_6079cad2_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlProgress/vlProgress.vue?vue&type=template&id=6079cad2&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlProgress/vlProgress.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlProgressvue_type_script_lang_js_ = ({
  name: 'VlProgress',
  props: {
    height: {
      type: [Number, String],
      default: 5
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    percent: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  data: function data() {
    return {
      percentx: 0
    };
  },
  computed: {
    styleConProgress: function styleConProgress() {
      return {
        background: utils_color.getColor(this.color, .1),
        height: "".concat(this.height, "px")
      };
    },
    styleProgress: function styleProgress() {
      return {
        background: utils_color.getColor(this.color),
        width: "".concat(this.percentx, "%")
      };
    }
  },
  watch: {
    percent: function percent() {
      this.percentx = this.percent;
    }
  },
  created: function created() {
    this.percentx = 0;
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.percentx = _this.percent; // to force animation
    }, 600);
  }
});
// CONCATENATED MODULE: ./src/components/vlProgress/vlProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlProgress_vlProgressvue_type_script_lang_js_ = (vlProgressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlProgress/vlProgress.vue





/* normalize component */

var vlProgress_component = normalizeComponent(
  vlProgress_vlProgressvue_type_script_lang_js_,
  vlProgressvue_type_template_id_6079cad2_lang_html_render,
  vlProgressvue_type_template_id_6079cad2_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlProgress_component.options.__file = "vlProgress.vue"
/* harmony default export */ var vlProgress = (vlProgress_component.exports);
// CONCATENATED MODULE: ./src/components/vlProgress/index.js



/* harmony default export */ var components_vlProgress = (function (Vue) {
  Vue.component(vlProgress.name, vlProgress);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlCard/vlCard.vue?vue&type=template&id=db66acf2&
var vlCardvue_type_template_id_db66acf2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vl-card",class:{'withHover': _vm.actionable, 'fixedHeight': _vm.fixedHeight }},[(_vm.hasSlot('header'))?_c('header',{staticClass:"vl-card--header"},[_vm._t("header")],2):_vm._e(),(_vm.hasSlot('media'))?_c('div',{staticClass:"vl-card--media"},[_vm._t("media")],2):_vm._e(),(_vm.hasSlot('default'))?_c('div',{staticClass:"vl-card--content",class:{'fixedHeight': _vm.fixedHeight }},[_vm._t("default")],2):_vm._e(),(_vm.hasSlot('extra-content'))?_c('div',{staticClass:"vl-card-extra--content"},[_vm._t("extra-content")],2):_vm._e(),(_vm.hasSlot('footer'))?_c('footer',{staticClass:"vl-card--footer",class:{'fixedHeight': _vm.fixedHeight }},[_vm._t("footer")],2):_vm._e()])}
var vlCardvue_type_template_id_db66acf2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlCard/vlCard.vue?vue&type=template&id=db66acf2&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlCard/vlCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlCardvue_type_script_lang_js_ = ({
  name: 'VlCard',
  props: {
    actionable: {
      default: false,
      type: Boolean
    },
    fixedHeight: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    hasSlot: function hasSlot(slot) {
      return this.$slots[slot];
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlCard/vlCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlCard_vlCardvue_type_script_lang_js_ = (vlCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlCard/vlCard.vue





/* normalize component */

var vlCard_component = normalizeComponent(
  vlCard_vlCardvue_type_script_lang_js_,
  vlCardvue_type_template_id_db66acf2_render,
  vlCardvue_type_template_id_db66acf2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlCard_component.options.__file = "vlCard.vue"
/* harmony default export */ var vlCard = (vlCard_component.exports);
// CONCATENATED MODULE: ./src/components/vlCard/index.js



/* harmony default export */ var components_vlCard = (function (Vue) {
  Vue.component(vlCard.name, vlCard);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlList/vlList.vue?vue&type=template&id=5291a233&lang=html&
var vlListvue_type_template_id_5291a233_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-list"},[_vm._t("default")],2)}
var vlListvue_type_template_id_5291a233_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlList/vlList.vue?vue&type=template&id=5291a233&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlList/vlList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var vlListvue_type_script_lang_js_ = ({
  name: 'VlList'
});
// CONCATENATED MODULE: ./src/components/vlList/vlList.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlList_vlListvue_type_script_lang_js_ = (vlListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlList/vlList.vue





/* normalize component */

var vlList_component = normalizeComponent(
  vlList_vlListvue_type_script_lang_js_,
  vlListvue_type_template_id_5291a233_lang_html_render,
  vlListvue_type_template_id_5291a233_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlList_component.options.__file = "vlList.vue"
/* harmony default export */ var vlList = (vlList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlList/vlListItem.vue?vue&type=template&id=7b8cf780&lang=html&
var vlListItemvue_type_template_id_7b8cf780_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-list--item"},[_c('div',{staticClass:"vl-list--avatar"},[_vm._t("avatar")],2),(_vm.icon)?_c('div',{staticClass:"vl-list--icon"},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],1):_vm._e(),_c('div',{staticClass:"list-titles"},[(_vm.title)?_c('div',{staticClass:"vl-list--title"},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")]):_vm._e(),(_vm.subtitle)?_c('div',{staticClass:"vl-list--subtitle"},[_vm._v("\n      "+_vm._s(_vm.subtitle)+"\n    ")]):_vm._e()]),_c('div',{staticClass:"vl-list--slot"},[_vm._t("default")],2)])}
var vlListItemvue_type_template_id_7b8cf780_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlList/vlListItem.vue?vue&type=template&id=7b8cf780&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlList/vlListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlListItemvue_type_script_lang_js_ = ({
  name: 'VlListItem',
  props: {
    vlAvatar: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlList/vlListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlList_vlListItemvue_type_script_lang_js_ = (vlListItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlList/vlListItem.vue





/* normalize component */

var vlListItem_component = normalizeComponent(
  vlList_vlListItemvue_type_script_lang_js_,
  vlListItemvue_type_template_id_7b8cf780_lang_html_render,
  vlListItemvue_type_template_id_7b8cf780_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlListItem_component.options.__file = "vlListItem.vue"
/* harmony default export */ var vlListItem = (vlListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlList/vlListHeader.vue?vue&type=template&id=1bc50b90&lang=html&
var vlListHeadervue_type_template_id_1bc50b90_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-list--header",class:[("vl-header-list-" + _vm.color),{
    'with-icon':_vm.icon,
  }],style:(_vm.styleHeader)},[(_vm.icon)?_c('div',{staticClass:"vl-list--icon"},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],1):_vm._e(),_c('div',{staticClass:"list-titles"},[(_vm.title)?_c('div',{staticClass:"vl-list--title"},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")]):_vm._e()])])}
var vlListHeadervue_type_template_id_1bc50b90_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlList/vlListHeader.vue?vue&type=template&id=1bc50b90&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlList/vlListHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlListHeadervue_type_script_lang_js_ = ({
  name: 'VlListHeader',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color)
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlList/vlListHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlList_vlListHeadervue_type_script_lang_js_ = (vlListHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlList/vlListHeader.vue





/* normalize component */

var vlListHeader_component = normalizeComponent(
  vlList_vlListHeadervue_type_script_lang_js_,
  vlListHeadervue_type_template_id_1bc50b90_lang_html_render,
  vlListHeadervue_type_template_id_1bc50b90_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlListHeader_component.options.__file = "vlListHeader.vue"
/* harmony default export */ var vlListHeader = (vlListHeader_component.exports);
// CONCATENATED MODULE: ./src/components/vlList/index.js





/* harmony default export */ var components_vlList = (function (Vue) {
  Vue.component(vlList.name, vlList);
  Vue.component(vlListItem.name, vlListItem);
  Vue.component(vlListHeader.name, vlListHeader);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlAvatar/vlAvatar.vue?vue&type=template&id=d8e07efe&lang=html&
var vlAvatarvue_type_template_id_d8e07efe_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g(_vm._b({staticClass:"con-vl-avatar",class:_vm.avatarClass,style:(_vm.avatarStyle)},'div',_vm.$attrs,false),_vm.$listeners),[(_vm.badge && _vm.badge > 0)?_c('div',{staticClass:"dot-count vl-avatar--count",class:_vm.badgeClass,style:(_vm.badgeStyle)},[_vm._v("\n    "+_vm._s(typeof _vm.badge != 'boolean' ? _vm.badge : null)+"\n  ")]):_vm._e(),(_vm.src)?_c('div',{staticClass:"con-img vl-avatar--con-img"},[_c('img',{attrs:{"src":_vm.src,"alt":""}})]):_c('span',{staticClass:"vl-avatar--text notranslate",class:[_vm.text ? '' : _vm.iconPack, _vm.text ? '' : _vm.icon, _vm.textClass],style:(_vm.textStyle),attrs:{"title":_vm.text,"translate":"no"}},[_vm._v("\n    "+_vm._s(_vm.text ? _vm.returnText : _vm.iconPack == 'material-icons' ? _vm.icon : '')+"\n  ")])])}
var vlAvatarvue_type_template_id_d8e07efe_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlAvatar/vlAvatar.vue?vue&type=template&id=d8e07efe&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlAvatar/vlAvatar.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlAvatarvue_type_script_lang_js_ = ({
  name: 'VlAvatar',
  props: {
    badge: {
      type: [Boolean, String, Number],
      default: false
    },
    badgeColor: {
      default: 'danger',
      type: String
    },
    size: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: 'person'
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    },
    textColor: {
      type: String,
      default: 'rgb(255, 255, 255)'
    },
    text: {
      type: [String, Number],
      default: null
    },
    color: {
      type: String,
      default: 'rgb(195, 195, 195)'
    }
  },
  computed: {
    avatarClass: function avatarClass() {
      var classes = {};
      classes[this.size] = true;

      if (utils_color.isColor(this.color)) {
        classes["con-vl-avatar-".concat(this.color)] = true;
      }

      return classes;
    },
    avatarStyle: function avatarStyle() {
      var style = {
        width: /[px]/.test(this.size) ? this.size : null,
        height: /[px]/.test(this.size) ? this.size : null
      };

      if (!utils_color.isColor(this.color)) {
        style.background = utils_color.getColor(this.color);
      }

      return style;
    },
    badgeClass: function badgeClass() {
      var classes = {
        badgeNumber: typeof badge != 'boolean'
      };

      if (utils_color.isColor(this.badgeColor)) {
        classes["dot-count-".concat(this.badgeColor)] = true;
      }

      return classes;
    },
    badgeStyle: function badgeStyle() {
      var style = {};

      if (!utils_color.isColor(this.badgeColor)) {
        style.background = utils_color.getColor(this.badgeColor);
      }

      return style;
    },
    textClass: function textClass() {
      var classes = {
        'material-icons': !this.text
      };

      if (utils_color.isColor(this.textColor)) {
        classes["vl-avatar-text-".concat(this.textColor)] = true;
      }

      return classes;
    },
    textStyle: function textStyle() {
      var style = {
        transform: "translate(-50%,-50%) scale(".concat(this.returnScale, ")")
      };

      if (!utils_color.isColor(this.textColor)) {
        style.color = utils_color.getColor(this.textColor);
      }

      return style;
    },
    returnText: function returnText() {
      if (this.text.length <= 5) {
        return this.text;
      }

      var exp = /\s/g;
      var letras = '';

      if (exp.test(this.text)) {
        this.text.split(exp).forEach(function (word) {
          letras += word[0].toUpperCase();
        });
      } else {
        letras = this.text[0].toUpperCase();
      }

      return letras.length > 5 ? letras[0] : letras;
    },
    returnScale: function returnScale() {
      if (!this.text) {
        return 1;
      }

      var lengthx = this.returnText.length;

      if (lengthx <= 5 && lengthx > 1) {
        return lengthx / (lengthx * 1.50);
      } else {
        return 1;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlAvatar/vlAvatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlAvatar_vlAvatarvue_type_script_lang_js_ = (vlAvatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlAvatar/vlAvatar.vue





/* normalize component */

var vlAvatar_component = normalizeComponent(
  vlAvatar_vlAvatarvue_type_script_lang_js_,
  vlAvatarvue_type_template_id_d8e07efe_lang_html_render,
  vlAvatarvue_type_template_id_d8e07efe_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlAvatar_component.options.__file = "vlAvatar.vue"
/* harmony default export */ var vlAvatar = (vlAvatar_component.exports);
// CONCATENATED MODULE: ./src/components/vlAvatar/index.js



/* harmony default export */ var components_vlAvatar = (function (Vue) {
  Vue.component(vlAvatar.name, vlAvatar);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlPagination/vlPagination.vue?vue&type=template&id=3b5e1090&
var vlPaginationvue_type_template_id_3b5e1090_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"con-vl-pagination",class:[("vl-pagination-" + _vm.color)],style:(_vm.stylePagination)},[_c('nav',{staticClass:"vl-pagination--nav"},[_c('button',{staticClass:"vl-pagination--buttons btn-prev-pagination vl-pagination--button-prev",class:{disabled:_vm.current <= 1 ? 'disabled' : null},attrs:{"disabled":_vm.current === 1},on:{"click":_vm.prevPage}},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.prevIcon}})],1),_c('ul',{staticClass:"vl-pagination--ul"},_vm._l((_vm.pages),function(page,index){return _c('li',{key:index,staticClass:"item-pagination vl-pagination--li",class:{'is-current': page == _vm.current},on:{"click":function($event){_vm.goTo(page)}}},[_c('span',[_vm._v("\n          "+_vm._s(page)+"\n        ")]),_c('div',{staticClass:"effect"})])})),_c('button',{staticClass:"vl-pagination--buttons btn-next-pagination vl-pagination--button-next",class:{disabled:_vm.current === _vm.total ? 'disabled' : null},attrs:{"disabled":_vm.current === _vm.total},on:{"click":_vm.nextPage}},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.nextIcon}})],1),(_vm.goto)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.go),expression:"go"}],staticClass:"vl-pagination--input-goto",attrs:{"max":_vm.total,"min":"1","type":"number"},domProps:{"value":(_vm.go)},on:{"change":_vm.goTo,"input":function($event){if($event.target.composing){ return; }_vm.go=$event.target.value}}}):_vm._e()])])}
var vlPaginationvue_type_template_id_3b5e1090_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlPagination/vlPagination.vue?vue&type=template&id=3b5e1090&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlPagination/vlPagination.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlPaginationvue_type_script_lang_js_ = ({
  name: 'VlPagination',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    total: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true,
      default: 1
    },
    max: {
      type: Number,
      default: 9
    },
    goto: {
      type: Boolean
    },
    type: {
      type: String
    },
    prevIcon: {
      type: String,
      default: 'chevron_left'
    },
    nextIcon: {
      type: String,
      default: 'chevron_right'
    },
    iconPack: {
      type: String,
      default: 'material-icons'
    }
  },
  data: function data() {
    return {
      pages: [],
      current: 0,
      go: 0,
      prevRange: '',
      nextRange: '',
      hoverBtn1: false
    };
  },
  computed: {
    stylePagination: function stylePagination() {
      var style = {};

      if (!utils_color.isColor(this.color)) {
        style = {
          '--color-pagination': utils_color.getColor(this.color),
          '--color-pagination-alpha': utils_color.getColor(this.color, .5)
        };
      }

      return style;
    }
  },
  watch: {
    current: function current() {
      this.getPages();
      this.$emit('input', this.current);
      this.$emit('change', this.current);
    },
    total: function total() {
      this.getPages();
    }
  },
  mounted: function mounted() {
    this.current = this.go = this.value;
    this.getPages();
  },
  methods: {
    isEllipsis: function isEllipsis(page) {
      return page === '...';
    },
    goTo: function goTo(page) {
      if (page === '...') {
        return;
      }

      if (typeof page.target === 'undefined') {
        this.current = page;
      } else {
        var value = parseInt(page.target.value, 10);
        this.go = value < 1 ? 1 : value <= this.total ? value : this.total;
        this.current = this.go;
      }
    },
    getPages: function getPages() {
      if (this.total <= this.max) {
        var pages = this.setPages(1, this.total);
        this.pages = pages;
      }

      var even = this.max % 2 === 0 ? 1 : 0;

      if (this.total < 6) {
        this.prevRange = Math.floor(this.max / (this.max / 2));
      } else {
        this.prevRange = Math.floor(this.max / 2);
      }

      this.nextRange = this.total - this.prevRange + 1 + even;

      if (this.current >= this.prevRange && this.current <= this.nextRange) {
        var start = this.current - this.prevRange + 2;
        var end = this.current + this.prevRange - 2 - even;
        this.pages = [1, '...'].concat(_toConsumableArray(this.setPages(start, end)), ['...', this.total]);
      } else if (this.total < 6) {
        this.pages = _toConsumableArray(this.setPages(1, this.total));
      } else {
        this.pages = _toConsumableArray(this.setPages(1, this.prevRange)).concat(['...'], _toConsumableArray(this.setPages(this.nextRange, this.total)));
      }
    },
    setPages: function setPages(start, end) {
      var setPages = [];

      for (start > 0 ? start : 1; start <= end; start++) {
        setPages.push(start);
      }

      return setPages;
    },
    nextPage: function nextPage() {
      if (this.current < this.total) {
        this.current++;
      }
    },
    prevPage: function prevPage() {
      if (this.current > 1) {
        this.current--;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlPagination/vlPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlPagination_vlPaginationvue_type_script_lang_js_ = (vlPaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlPagination/vlPagination.vue





/* normalize component */

var vlPagination_component = normalizeComponent(
  vlPagination_vlPaginationvue_type_script_lang_js_,
  vlPaginationvue_type_template_id_3b5e1090_render,
  vlPaginationvue_type_template_id_3b5e1090_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlPagination_component.options.__file = "vlPagination.vue"
/* harmony default export */ var vlPagination = (vlPagination_component.exports);
// CONCATENATED MODULE: ./src/components/vlPagination/index.js



/* harmony default export */ var components_vlPagination = (function (Vue) {
  Vue.component(vlPagination.name, vlPagination);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlBreadcrumb/vlBreadcrumb.vue?vue&type=template&id=35b4d23c&lang=html&
var vlBreadcrumbvue_type_template_id_35b4d23c_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',_vm._g(_vm._b({staticClass:"vl-breadcrumb",class:("vl-align-" + _vm.align),attrs:{"aria-label":"breadcrumb"}},'nav',_vm.$attrs,false),_vm.$listeners),[_c('ol',{staticClass:"vl-breadcrumb--ol"},[_vm._t("default"),_vm._l((_vm.items),function(item){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasSlot),expression:"!hasSlot"}],key:item.title,class:{'vl-active':item.active,'disabled-link':item.disabled},attrs:{"aria-current":item.active ? 'page' : null}},[(!item.active)?_c('a',{staticClass:"vl-breadcrumb--link",attrs:{"href":item.url ? item.url : '#',"title":item.title}},[_vm._v("\n        "+_vm._s(item.title)+"\n      ")]):[_c('span',{staticClass:"vl-breadcrumb--text",class:_vm.textClass,style:(_vm.textStyle)},[_vm._v("\n          "+_vm._s(item.title)+"\n        ")])],(!item.active)?_c('span',{staticClass:"separator notranslate vl-breadcrum--separator",class:_vm.separator.length > 1 ? 'material-icons' : null,attrs:{"translate":"no","aria-hidden":"true"}},[_vm._v("\n        "+_vm._s(_vm.separator)+"\n      ")]):_vm._e()],2)})],2)])}
var vlBreadcrumbvue_type_template_id_35b4d23c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlBreadcrumb/vlBreadcrumb.vue?vue&type=template&id=35b4d23c&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlBreadcrumb/vlBreadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlBreadcrumbvue_type_script_lang_js_ = ({
  name: 'VlBreadcrumb',
  props: {
    items: {
      type: Array
    },
    separator: {
      type: String,
      default: '/'
    },
    color: {
      type: String,
      default: 'primary'
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    textClass: function textClass() {
      var classes = {};

      if (utils_color.isColor(this.color)) {
        classes["vl-breadcrumb-text-".concat(this.color)] = true;
      }

      return classes;
    },
    textStyle: function textStyle() {
      var style = {};

      if (!utils_color.isColor(this.color)) {
        style.color = utils_color.getColor(this.color);
      }

      return style;
    },
    hasSlot: function hasSlot() {
      return !!this.$slots.default;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlBreadcrumb/vlBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlBreadcrumb_vlBreadcrumbvue_type_script_lang_js_ = (vlBreadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlBreadcrumb/vlBreadcrumb.vue





/* normalize component */

var vlBreadcrumb_component = normalizeComponent(
  vlBreadcrumb_vlBreadcrumbvue_type_script_lang_js_,
  vlBreadcrumbvue_type_template_id_35b4d23c_lang_html_render,
  vlBreadcrumbvue_type_template_id_35b4d23c_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlBreadcrumb_component.options.__file = "vlBreadcrumb.vue"
/* harmony default export */ var vlBreadcrumb = (vlBreadcrumb_component.exports);
// CONCATENATED MODULE: ./src/components/vlBreadcrumb/index.js



/* harmony default export */ var components_vlBreadcrumb = (function (Vue) {
  Vue.component(vlBreadcrumb.name, vlBreadcrumb);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vlDialog/index.vue?vue&type=template&id=034b2a40&lang=html&
var vlDialogvue_type_template_id_034b2a40_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Transition',{attrs:{"name":"dialog-t"}},[(_vm.active || _vm.vlActive)?_c('div',{ref:"con",staticClass:"vl-component con-vl-dialog",class:[("vl-dialog-" + (_vm.isPrompt?_vm.vlColor:_vm.color))]},[_c('div',{staticClass:"vl-dialog-dark",on:{"click":function($event){_vm.close($event,true)}}}),_c('div',{ref:"dialogx",staticClass:"vl-dialog"},[_c('header',{style:(_vm.styleHeader)},[_c('div',{staticClass:"con-title-after"},[_c('span',{staticClass:"after",style:(_vm.styleAfter)}),_c('h3',[_vm._v(_vm._s(_vm.title || _vm.vlTitle))])]),(_vm.type=='alert')?_c('VlIcon',{staticClass:"vl-dialog-cancel vl-dialog-cancel--icon notranslate",attrs:{"icon":_vm.vlCloseIcon,"click":_vm.close,"icon-pack":_vm.vlIconPack}}):_vm._e()],1),_c('div',{staticClass:"vl-dialog-text"},[_vm._t("default"),_vm._v("\n        "+_vm._s(_vm.text)+"\n      ")],2),(_vm.vlButtonsHidden?false:_vm.isPrompt||_vm.type=='confirm')?_c('footer',[_c('VlButton',{attrs:{"disabled":_vm.vlIsValid=='none'?false:!_vm.vlIsValid,"color":_vm.isPrompt?_vm.vlColor:_vm.color,"type":_vm.isPrompt?_vm.vlButtonAccept:_vm.buttonAccept},on:{"click":_vm.acceptDialog}},[_vm._v("\n          "+_vm._s(_vm.isPrompt?_vm.vlAcceptText:_vm.acceptText)+"\n        ")]),_c('VlButton',{attrs:{"color":'rgb(0,0,0,.5)',"type":_vm.isPrompt?_vm.vlButtonCancel:_vm.buttonCancel},on:{"click":_vm.cancelClose}},[_vm._v("\n          "+_vm._s(_vm.isPrompt?_vm.vlCancelText:_vm.cancelText)+"\n        ")])],1):_vm._e(),(_vm.type=='alert'&&!_vm.isPrompt)?_c('footer',[_c('VlButton',{attrs:{"color":_vm.isPrompt?_vm.vlColor:_vm.color,"type":_vm.buttonAccept},on:{"click":_vm.acceptDialog}},[_vm._v("\n          "+_vm._s(_vm.isPrompt?_vm.vlAcceptText:_vm.acceptText)+"\n        ")])],1):_vm._e()])]):_vm._e()])}
var vlDialogvue_type_template_id_034b2a40_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/functions/vlDialog/index.vue?vue&type=template&id=034b2a40&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vlDialog/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlDialogvue_type_script_lang_js_ = ({
  name: 'VlPrompt',
  props: {
    vlColor: {
      default: 'primary',
      type: String
    },
    vlActive: {
      default: false,
      type: Boolean
    },
    vlTitle: {
      default: 'Dialog',
      type: String
    },
    vlButtonAccept: {
      default: 'filled',
      type: String
    },
    vlButtonCancel: {
      default: 'flat',
      type: String
    },
    vlIsValid: {
      default: 'none',
      type: [Boolean, String]
    },
    vlButtonsHidden: {
      default: false,
      type: Boolean
    },
    vlAcceptText: {
      default: 'Accept',
      type: String
    },
    vlCancelText: {
      default: 'Cancel',
      type: String
    },
    vlIconPack: {
      default: 'material-icons',
      type: String
    },
    vlCloseIcon: {
      default: 'close',
      type: String
    }
  },
  data: function data() {
    return {
      isPrompt: true,
      active: false,
      type: 'alert',
      color: 'primary',
      text: null,
      title: null,
      buttonAccept: 'filled',
      buttonCancel: 'flat',
      acceptText: 'Accept',
      cancelText: 'Cancel',
      closeIcon: 'close',
      iconPack: 'material-icons'
    };
  },
  computed: {
    styleHeader: function styleHeader() {
      return {
        color: utils_color.getColor(this.color, 1)
      };
    },
    styleAfter: function styleAfter() {
      return {
        background: utils_color.getColor(this.color, 1)
      };
    }
  },
  watch: {
    vlActive: function vlActive() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.vlActive) {
          _this.insertBody();
        }
      });
    }
  },
  mounted: function mounted() {
    if (this.active && this.isPrompt) {
      this.insertBody();
    }
  },
  methods: {
    giveColor: function giveColor(color) {
      return utils_color.rColor(color);
    },
    acceptDialog: function acceptDialog() {
      if (!this.isPrompt) {
        this.accept ? this.accept() : null;
        this.active = false;
        this.$emit('update:vlActive', false);
        this.$emit('vl-accept');
      } else {
        if (this.vlIsValid || this.vlIsValid == 'none') {
          this.accept ? this.accept() : null;
          this.active = false;
          this.$emit('update:vlActive', false);
          this.$emit('vl-accept');
        } else {
          this.rebound();
        }
      }
    },
    rebound: function rebound() {
      var _this2 = this;

      this.$refs.dialogx.classList.add('locked');
      setTimeout(function () {
        _this2.$refs.dialogx.classList.remove('locked');
      }, 200);
    },
    close: function close(event, con) {
      if (con) {
        if (event.target.className.indexOf('vl-dialog-dark') != -1 && this.type == 'alert') {
          this.active = false;
          this.$emit('update:vlActive', false);
        } else if (event.target.className.indexOf('vl-dialog-dark') != -1) {
          this.rebound();
        }
      } else {
        if (event ? event.target.className.indexOf('vl-dialog-cancel') != -1 : event ? event.target.className.indexOf('vl-dialog-cancel--icon') != -1 : false) {
          this.active = false;
          this.$emit('update:vlActive', false);
        }
      }

      this.$emit('vl-close');
    },
    cancelClose: function cancelClose() {
      this.active = false;
      this.$emit('update:vlActive', false);
      this.$emit('vl-cancel');
      this.cancel ? this.cancel() : null;
    },
    insertBody: function insertBody() {
      var elx = this.$refs.con;
      document.body.insertBefore(elx, document.body.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./src/functions/vlDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var functions_vlDialogvue_type_script_lang_js_ = (vlDialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/functions/vlDialog/index.vue





/* normalize component */

var vlDialog_component = normalizeComponent(
  functions_vlDialogvue_type_script_lang_js_,
  vlDialogvue_type_template_id_034b2a40_lang_html_render,
  vlDialogvue_type_template_id_034b2a40_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlDialog_component.options.__file = "index.vue"
/* harmony default export */ var vlDialog = (vlDialog_component.exports);
// CONCATENATED MODULE: ./src/components/vlPrompt/index.js



/* harmony default export */ var vlPrompt = (function (Vue) {
  Vue.component(vlDialog.name, vlDialog);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlDivider/vlDivider.vue?vue&type=template&id=6587ce8f&lang=html&
var vlDividervue_type_template_id_6587ce8f_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-component vl-divider"},[_c('span',{staticClass:"vl-divider-border after",class:_vm.borderClass,style:(_vm.afterStyle)}),( _vm.icon || _vm.$slots.default)?_c('span',{staticClass:"vl-divider--text",style:({
      'color': _vm.textColor
    })},[(!_vm.icon)?[_vm._t("default")]:_c('VlIcon',{staticClass:"icon-divider notranslate vl-divider--icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}})],2):_vm._e(),_c('span',{staticClass:"vl-divider-border before",class:_vm.borderClass,style:(_vm.beforeStyle)})])}
var vlDividervue_type_template_id_6587ce8f_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlDivider/vlDivider.vue?vue&type=template&id=6587ce8f&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlDivider/vlDivider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlDividervue_type_script_lang_js_ = ({
  name: "VlDivider",
  props: {
    color: {
      type: String,
      default: 'rgba(0, 0, 0,.1)'
    },
    icon: {
      default: null,
      type: String
    },
    borderStyle: {
      default: 'solid',
      type: String
    },
    borderHeight: {
      default: '1px',
      type: String
    },
    position: {
      default: 'center',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    }
  },
  computed: {
    getWidthAfter: function getWidthAfter() {
      var widthx = '100%';

      if (this.position == 'left') {
        widthx = '0%';
      } else if (this.position == 'left-center') {
        widthx = '25%';
      } else if (this.position == 'right-center') {
        widthx = '75%';
      } else if (this.position == 'right') {
        widthx = '100%';
      }

      return widthx;
    },
    getWidthBefore: function getWidthBefore() {
      var widthx = '100%';

      if (this.position == 'left') {
        widthx = '100%';
      } else if (this.position == 'left-center') {
        widthx = '75%';
      } else if (this.position == 'right-center') {
        widthx = '25%';
      } else if (this.position == 'right') {
        widthx = '0%';
      }

      return widthx;
    },
    borderColor: function borderColor() {
      if (!utils_color.isColor(this.color)) {
        return utils_color.getColor(this.color);
      } else {
        return utils_color.getColor('rgba(0, 0, 0,.1)');
      }
    },
    afterStyle: function afterStyle() {
      var classes = {
        width: this.getWidthAfter,
        'border-top-width': this.borderHeight,
        'border-top-style': this.borderStyle
      };

      if (!utils_color.isColor(this.color)) {
        classes['border-top-color'] = this.borderColor;
      }

      return classes;
    },
    beforeStyle: function beforeStyle() {
      var classes = {
        width: this.getWidthBefore,
        'border-top-width': this.borderHeight,
        'border-top-style': this.borderStyle
      };

      if (!utils_color.isColor(this.color)) {
        classes['border-top-color'] = this.borderColor;
      }

      return classes;
    },
    borderClass: function borderClass() {
      var classes = {};

      if (utils_color.isColor(this.color)) {
        classes["vl-divider-border-".concat(this.color)] = true;
      }

      return classes;
    },
    textColor: function textColor() {
      if (!utils_color.isColor(this.color)) {
        return utils_color.getColor(this.color === 'rgba(0, 0, 0,.1)' ? 'rgba(0,0,0,0.8)' : this.color);
      } else {
        return utils_color.getColor('rgba(0, 0, 0,.1)');
      }
    },
    textClass: function textClass() {
      var classes = {};

      if (utils_color.isColor(this.color)) {
        classes["vl-divider-text-".concat(this.color)] = true;
      }

      return classes;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlDivider/vlDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlDivider_vlDividervue_type_script_lang_js_ = (vlDividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlDivider/vlDivider.vue





/* normalize component */

var vlDivider_component = normalizeComponent(
  vlDivider_vlDividervue_type_script_lang_js_,
  vlDividervue_type_template_id_6587ce8f_lang_html_render,
  vlDividervue_type_template_id_6587ce8f_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlDivider_component.options.__file = "vlDivider.vue"
/* harmony default export */ var vlDivider = (vlDivider_component.exports);
// CONCATENATED MODULE: ./src/components/vlDivider/index.js



/* harmony default export */ var components_vlDivider = (function (Vue) {
  Vue.component(vlDivider.name, vlDivider);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSpacer/vlSpacer.vue?vue&type=template&id=c2264832&
var vlSpacervue_type_template_id_c2264832_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-spacer"})}
var vlSpacervue_type_template_id_c2264832_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlSpacer/vlSpacer.vue?vue&type=template&id=c2264832&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSpacer/vlSpacer.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var vlSpacervue_type_script_lang_js_ = ({
  name: 'VlSpacer'
});
// CONCATENATED MODULE: ./src/components/vlSpacer/vlSpacer.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlSpacer_vlSpacervue_type_script_lang_js_ = (vlSpacervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlSpacer/vlSpacer.vue





/* normalize component */

var vlSpacer_component = normalizeComponent(
  vlSpacer_vlSpacervue_type_script_lang_js_,
  vlSpacervue_type_template_id_c2264832_render,
  vlSpacervue_type_template_id_c2264832_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlSpacer_component.options.__file = "vlSpacer.vue"
/* harmony default export */ var vlSpacer = (vlSpacer_component.exports);
// CONCATENATED MODULE: ./src/components/vlSpacer/index.js



/* harmony default export */ var components_vlSpacer = (function (Vue) {
  Vue.component(vlSpacer.name, vlSpacer);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlIcon/vlIcon.vue?vue&type=template&id=321fff5a&
var vlIconvue_type_template_id_321fff5a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"vl-icon notranslate icon-scale",class:[_vm.iconPack, _vm.iconPack !='material-icons' ? _vm.icon : '',_vm.iconClass,_vm.getBg,_vm.getBgSize,{'round':_vm.round}],style:(_vm.iconStyle)},[_vm._t("default",[_vm._v(_vm._s(_vm.iconPack == 'material-icons' ? _vm.icon : ''))])],2)}
var vlIconvue_type_template_id_321fff5a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlIcon/vlIcon.vue?vue&type=template&id=321fff5a&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlIcon/vlIcon.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlIconvue_type_script_lang_js_ = ({
  name: 'VlIcon',
  props: {
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    color: {
      default: null,
      type: String
    },
    bg: {
      default: null,
      type: String
    },
    size: {
      default: null,
      type: String
    },
    round: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    iconClass: function iconClass() {
      var classes = {};
      classes[this.size] = true;

      if (utils_color.isColor(this.color)) {
        classes["vl-icon-".concat(this.color)] = true;
      }

      return classes;
    },
    iconStyle: function iconStyle() {
      var style = {
        width: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        height: /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        'font-size': /(px)/.test(this.size) ? this.size : /(em)/.test(this.size) ? this.size : null,
        color: this.getColor,
        background: this.getBgColor
      };
      return style;
    },
    getBg: function getBg() {
      var classes = {};

      if (utils_color.isColor(this.bg)) {
        classes["con-vl-icon-bg-".concat(this.bg)] = true;
      }

      return classes;
    },
    getBgSize: function getBgSize() {
      var classes = {};

      if (['small', 'medium', 'large'].includes(this.size)) {
        classes["bg-".concat(this.size)] = true;
        classes['vl-icon-bg'] = true;
      }

      return classes;
    },
    getColor: function getColor() {
      return utils_color.isColor(this.color) ? this.color : this.color;
    },
    getBgColor: function getBgColor() {
      return utils_color.isColor(this.bg) ? this.bg : this.bg;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlIcon/vlIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlIcon_vlIconvue_type_script_lang_js_ = (vlIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlIcon/vlIcon.vue





/* normalize component */

var vlIcon_component = normalizeComponent(
  vlIcon_vlIconvue_type_script_lang_js_,
  vlIconvue_type_template_id_321fff5a_render,
  vlIconvue_type_template_id_321fff5a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlIcon_component.options.__file = "vlIcon.vue"
/* harmony default export */ var vlIcon = (vlIcon_component.exports);
// CONCATENATED MODULE: ./src/components/vlIcon/index.js



/* harmony default export */ var components_vlIcon = (function (Vue) {
  Vue.component(vlIcon.name, vlIcon);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlNavbar/vlNavbar.vue?vue&type=template&id=739d0813&lang=html&
var vlNavbarvue_type_template_id_739d0813_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"vl-navbar",class:[("vl-navbar-" + _vm.type)],style:([_vm.styleNavbar])},[_vm._t("default")],2)}
var vlNavbarvue_type_template_id_739d0813_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavbar.vue?vue&type=template&id=739d0813&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlNavbar/vlNavbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlNavbarvue_type_script_lang_js_ = ({
  name: 'VlNavbar',
  props: {
    value: {},
    type: {
      default: null,
      type: String
    },
    color: {
      type: String,
      default: 'transparent'
    },
    activeTextColor: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'rgb(40,40,40)'
    },
    background: {
      type: String,
      default: null
    }
  },
  computed: {
    styleNavbar: function styleNavbar() {
      if (utils_color.isColor(this.color)) {
        return {
          background: "rgb(".concat(utils_color.changeColor(this.color), ")")
        };
      }

      if (this.background) {
        return this.background;
      }

      return {
        background: utils_color.getColor(this.color)
      };
    }
  },
  methods: {
    changeIndex: function changeIndex(index) {
      this.$emit('input', index);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlNavbar_vlNavbarvue_type_script_lang_js_ = (vlNavbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavbar.vue





/* normalize component */

var vlNavbar_component = normalizeComponent(
  vlNavbar_vlNavbarvue_type_script_lang_js_,
  vlNavbarvue_type_template_id_739d0813_lang_html_render,
  vlNavbarvue_type_template_id_739d0813_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlNavbar_component.options.__file = "vlNavbar.vue"
/* harmony default export */ var vlNavbar = (vlNavbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlNavbar/vlNavItem.vue?vue&type=template&id=6ed15f0e&
var vlNavItemvue_type_template_id_6ed15f0e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vl-navbar--item",class:[{'is-active-item': _vm.isActiveItem}, ("vl-navbar-item-" + _vm.getActiveTextColor)],style:([_vm.styleHover]),on:{"click":function($event){_vm.clickItem()},"mouseout":_vm.mouseout,"mouseover":_vm.mouseover}},[_vm._t("default"),_c('span',{staticClass:"vl-navbar-after",style:([_vm.styleAfter])})],2)}
var vlNavItemvue_type_template_id_6ed15f0e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavItem.vue?vue&type=template&id=6ed15f0e&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlNavbar/vlNavItem.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlNavItemvue_type_script_lang_js_ = ({
  name: 'VlNavbarItem',
  props: {
    index: {
      type: [Number, String],
      default: null
    }
  },
  data: function data() {
    return {
      hover: false
    };
  },
  computed: {
    getActiveTextColor: function getActiveTextColor() {
      return this.$parent.$props.activeTextColor;
    },
    isActiveItem: function isActiveItem() {
      return this.$parent.value == this.index;
    },
    styleAfter: function styleAfter() {
      return {
        background: utils_color.getColor(this.getActiveTextColor)
      };
    },
    styleHover: function styleHover() {
      if (this.isActiveItem) {
        return {
          color: utils_color.getColor(this.getActiveTextColor)
        };
      } else {
        return {
          color: this.hover ? utils_color.getColor(this.getActiveTextColor) : utils_color.getColor(this.$parent.$props.textColor)
        };
      }
    }
  },
  methods: {
    clickItem: function clickItem() {
      this.$parent.changeIndex(this.index);
    },
    mouseout: function mouseout() {
      this.hover = false;
    },
    mouseover: function mouseover() {
      this.hover = true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlNavbar_vlNavItemvue_type_script_lang_js_ = (vlNavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavItem.vue





/* normalize component */

var vlNavItem_component = normalizeComponent(
  vlNavbar_vlNavItemvue_type_script_lang_js_,
  vlNavItemvue_type_template_id_6ed15f0e_render,
  vlNavItemvue_type_template_id_6ed15f0e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlNavItem_component.options.__file = "vlNavItem.vue"
/* harmony default export */ var vlNavItem = (vlNavItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlNavbar/vlNavGroup.vue?vue&type=template&id=5bc4597e&
var vlNavGroupvue_type_template_id_5bc4597e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vl-nav-item"},[_c('div',{staticClass:"vl-nav-item-slot"},[_vm._t("default")],2),_c('ul',{staticClass:"vl-nav-submenu"},[_vm._t("submenu")],2)])}
var vlNavGroupvue_type_template_id_5bc4597e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavGroup.vue?vue&type=template&id=5bc4597e&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlNavbar/vlNavGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlNavGroupvue_type_script_lang_js_ = ({
  name: 'VlNavbarGroup'
});
// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlNavbar_vlNavGroupvue_type_script_lang_js_ = (vlNavGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavGroup.vue





/* normalize component */

var vlNavGroup_component = normalizeComponent(
  vlNavbar_vlNavGroupvue_type_script_lang_js_,
  vlNavGroupvue_type_template_id_5bc4597e_render,
  vlNavGroupvue_type_template_id_5bc4597e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlNavGroup_component.options.__file = "vlNavGroup.vue"
/* harmony default export */ var vlNavGroup = (vlNavGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlNavbar/vlNavbarTitle.vue?vue&type=template&id=40f94637&
var vlNavbarTitlevue_type_template_id_40f94637_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{staticClass:"vl-navbar--title"},[_vm._t("default")],2)}
var vlNavbarTitlevue_type_template_id_40f94637_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavbarTitle.vue?vue&type=template&id=40f94637&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlNavbar/vlNavbarTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var vlNavbarTitlevue_type_script_lang_js_ = ({
  name: 'VlNavbarTitle'
});
// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavbarTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlNavbar_vlNavbarTitlevue_type_script_lang_js_ = (vlNavbarTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavbarTitle.vue





/* normalize component */

var vlNavbarTitle_component = normalizeComponent(
  vlNavbar_vlNavbarTitlevue_type_script_lang_js_,
  vlNavbarTitlevue_type_template_id_40f94637_render,
  vlNavbarTitlevue_type_template_id_40f94637_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlNavbarTitle_component.options.__file = "vlNavbarTitle.vue"
/* harmony default export */ var vlNavbarTitle = (vlNavbarTitle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlNavbar/vlNavbarItems.vue?vue&type=template&id=32a98ec6&
var vlNavbarItemsvue_type_template_id_32a98ec6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-navbar--items"},[_vm._t("default")],2)}
var vlNavbarItemsvue_type_template_id_32a98ec6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavbarItems.vue?vue&type=template&id=32a98ec6&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlNavbar/vlNavbarItems.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var vlNavbarItemsvue_type_script_lang_js_ = ({
  name: 'VlNavbarItems'
});
// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavbarItems.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlNavbar_vlNavbarItemsvue_type_script_lang_js_ = (vlNavbarItemsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlNavbar/vlNavbarItems.vue





/* normalize component */

var vlNavbarItems_component = normalizeComponent(
  vlNavbar_vlNavbarItemsvue_type_script_lang_js_,
  vlNavbarItemsvue_type_template_id_32a98ec6_render,
  vlNavbarItemsvue_type_template_id_32a98ec6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlNavbarItems_component.options.__file = "vlNavbarItems.vue"
/* harmony default export */ var vlNavbarItems = (vlNavbarItems_component.exports);
// CONCATENATED MODULE: ./src/components/vlNavbar/index.js







/* harmony default export */ var components_vlNavbar = (function (Vue) {
  Vue.component(vlNavbar.name, vlNavbar);
  Vue.component(vlNavItem.name, vlNavItem);
  Vue.component(vlNavGroup.name, vlNavGroup);
  Vue.component(vlNavbarTitle.name, vlNavbarTitle);
  Vue.component(vlNavbarItems.name, vlNavbarItems);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSideBar/vlSidebar.vue?vue&type=template&id=e3bab2ce&
var vlSidebarvue_type_template_id_e3bab2ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Transition',{attrs:{"name":"vl-sidebar-animate"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.staticPosition || _vm.value),expression:"staticPosition || value"}],ref:"sidebarbackground",staticClass:"vl-content-sidebar"},[(!_vm.hiddenBackground)?_c('div',{staticClass:"vl-sidebar--background"}):_vm._e(),_c('div',{staticClass:"vl-sidebar",class:[
        ("vl-sidebar-" + _vm.color),
        {
          'vl-sidebar-parent': _vm.parent != 'body',
          'vl-sidebar-staticPosition': _vm.staticPosition,
          'vl-sidebar-position-right': _vm.positionRight,
          'vl-sidebar-reduce': _vm.reduce,
          'vl-sidebar-reduceNotRebound': _vm.reduceNotRebound,
          'vl-sidebar-reduceNotHoverExpand': _vm.reduceNotHoverExpand
        }
      ]},[(_vm.$slots.header)?_c('header',{staticClass:"vl-sidebar--header"},[_vm._t("header")],2):_vm._e(),_c('div',{staticClass:"vl-sidebar--items"},[_vm._t("default")],2),(_vm.spacer)?_c('VlSpacer'):_vm._e(),(_vm.$slots.footer)?_c('footer',{staticClass:"vl-sidebar--footer"},[_vm._t("footer")],2):_vm._e()],1)])])}
var vlSidebarvue_type_template_id_e3bab2ce_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlSideBar/vlSidebar.vue?vue&type=template&id=e3bab2ce&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSideBar/vlSidebar.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlSidebarvue_type_script_lang_js_ = ({
  name: 'VlSidebar',
  props: {
    value: {
      default: false
    },
    defaultIndex: {
      default: null,
      type: [String, Number]
    },
    color: {
      default: 'primary',
      type: String
    },
    parent: {
      default: null,
      type: [String, Object]
    },
    spacer: {
      default: false,
      type: Boolean
    },
    staticPosition: {
      default: false,
      type: Boolean
    },
    positionRight: {
      default: false,
      type: Boolean
    },
    clickNotClose: {
      default: false,
      type: Boolean
    },
    reduce: {
      default: false,
      type: Boolean
    },
    reduceNotRebound: {
      default: false,
      type: Boolean
    },
    reduceNotHoverExpand: {
      default: false,
      type: Boolean
    },
    hiddenBackground: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    value: function value() {
      if (this.value && !this.clickNotClose) {
        this.addEventClick();
      }
    }
  },
  created: function created() {
    this.currentIndex = this.defaultIndex;
  },
  mounted: function mounted() {
    this.insertBody();
  },
  methods: {
    getActive: function getActive() {
      return this.currentIndex;
    },
    setIndexActive: function setIndexActive(index) {
      this.currentIndex = index;
    },
    addEventClick: function addEventClick() {
      window.addEventListener('click', this.closeSidebar);
    },
    closeSidebar: function closeSidebar(evt) {
      var parent = evt.target.closest('.vl-sidebar');

      if (!parent) {
        this.$emit('input', false);
        window.removeEventListener('click', this.closeSidebar);
      }
    },
    insertBody: function insertBody() {
      if (this.parent) {
        var elx = this.$refs.sidebarbackground;
        var parentx = typeof this.parent == 'string' ? document.querySelector(this.parent) : this.parent;
        parentx.insertBefore(elx, parentx.firstChild);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlSideBar/vlSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlSideBar_vlSidebarvue_type_script_lang_js_ = (vlSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlSideBar/vlSidebar.vue





/* normalize component */

var vlSidebar_component = normalizeComponent(
  vlSideBar_vlSidebarvue_type_script_lang_js_,
  vlSidebarvue_type_template_id_e3bab2ce_render,
  vlSidebarvue_type_template_id_e3bab2ce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlSidebar_component.options.__file = "vlSidebar.vue"
/* harmony default export */ var vlSidebar = (vlSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSideBar/vlSidebarItem.vue?vue&type=template&id=27162f10&
var vlSidebarItemvue_type_template_id_27162f10_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-sidebar--item",class:{'vl-sidebar-item-active':_vm.getActive},on:{"click":_vm.setIndexActive}},[(_vm.to)?_c('RouterLink',{attrs:{"to":_vm.to}},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}),_vm._t("default")],2):_c('a',{attrs:{"href":_vm.href}},[_c('VlIcon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}),_vm._t("default")],2)],1)}
var vlSidebarItemvue_type_template_id_27162f10_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlSideBar/vlSidebarItem.vue?vue&type=template&id=27162f10&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSideBar/vlSidebarItem.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlSidebarItemvue_type_script_lang_js_ = ({
  name: 'VlSidebarItem',
  props: {
    icon: {
      default: null,
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    },
    href: {
      default: '#',
      type: String
    },
    to: {
      default: null,
      type: String
    },
    index: {
      default: null,
      type: [String, Number]
    }
  },
  computed: {
    getActive: function getActive() {
      return this.$parent.getActive() == this.index;
    }
  },
  methods: {
    setIndexActive: function setIndexActive() {
      this.$parent.setIndexActive(this.index);
      this.$emit('click');
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlSideBar/vlSidebarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlSideBar_vlSidebarItemvue_type_script_lang_js_ = (vlSidebarItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlSideBar/vlSidebarItem.vue





/* normalize component */

var vlSidebarItem_component = normalizeComponent(
  vlSideBar_vlSidebarItemvue_type_script_lang_js_,
  vlSidebarItemvue_type_template_id_27162f10_render,
  vlSidebarItemvue_type_template_id_27162f10_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlSidebarItem_component.options.__file = "vlSidebarItem.vue"
/* harmony default export */ var vlSidebarItem = (vlSidebarItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSideBar/vlSidebarGroup.vue?vue&type=template&id=440bc2ba&
var vlSidebarGroupvue_type_template_id_440bc2ba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-sidebar-group",class:{'vl-sidebar-group-open' : _vm.openItems},on:{"mouseover":_vm.mouseover,"mouseout":_vm.mouseout}},[_c('h4',{on:{"click":_vm.clickGroup}},[_vm._v("\n    "+_vm._s(_vm.title)+" "),_c('VlIcon',[_vm._v("keyboard_arrow_down")])],1),_c('span',{staticClass:"vl-sidebar--tooltip"},[_vm._v("\n    "+_vm._s(_vm.title)+"\n  ")]),_c('ul',{ref:"items",staticClass:"vl-sidebar--group-items",style:(_vm.styleItems)},[_vm._t("default")],2)])}
var vlSidebarGroupvue_type_template_id_440bc2ba_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlSideBar/vlSidebarGroup.vue?vue&type=template&id=440bc2ba&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlSideBar/vlSidebarGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlSidebarGroupvue_type_script_lang_js_ = ({
  name: 'VlSidebarGroup',
  props: {
    collapsed: {
      default: false,
      type: Boolean
    },
    title: {
      default: null,
      type: String
    },
    openHover: {
      default: false,
      type: Boolean
    },
    open: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      maxHeight: '0px',
      openItems: false
    };
  },
  computed: {
    styleItems: function styleItems() {
      return {
        maxHeight: this.maxHeight
      };
    }
  },
  watch: {
    maxHeight: function maxHeight() {
      this.openItems = this.maxHeight != '0px';
    }
  },
  mounted: function mounted() {
    this.openItems = this.open;

    if (this.open) {
      this.maxHeight = 'none';
    }
  },
  methods: {
    getActive: function getActive() {
      return this.$parent.getActive();
    },
    setIndexActive: function setIndexActive(index) {
      this.$parent.setIndexActive(index);
    },
    clickGroup: function clickGroup() {
      var _this = this;

      if (!this.openHover) {
        var scrollHeight = this.$refs.items.scrollHeight;

        if (this.maxHeight == '0px') {
          this.maxHeight = "".concat(scrollHeight, "px");
          setTimeout(function () {
            _this.maxHeight = 'none';
          }, 300);
        } else {
          this.maxHeight = "".concat(scrollHeight, "px");
          setTimeout(function () {
            _this.maxHeight = "".concat(0, "px");
          }, 50);
        }
      }
    },
    mouseover: function mouseover() {
      if (this.openHover) {
        var scrollHeight = this.$refs.items.scrollHeight;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    },
    mouseout: function mouseout() {
      if (this.openHover) {
        var scrollHeight = 0;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlSideBar/vlSidebarGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlSideBar_vlSidebarGroupvue_type_script_lang_js_ = (vlSidebarGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlSideBar/vlSidebarGroup.vue





/* normalize component */

var vlSidebarGroup_component = normalizeComponent(
  vlSideBar_vlSidebarGroupvue_type_script_lang_js_,
  vlSidebarGroupvue_type_template_id_440bc2ba_render,
  vlSidebarGroupvue_type_template_id_440bc2ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlSidebarGroup_component.options.__file = "vlSidebarGroup.vue"
/* harmony default export */ var vlSidebarGroup = (vlSidebarGroup_component.exports);
// CONCATENATED MODULE: ./src/components/vlSideBar/index.js





/* harmony default export */ var vlSideBar = (function (Vue) {
  Vue.component(vlSidebar.name, vlSidebar);
  Vue.component(vlSidebarItem.name, vlSidebarItem);
  Vue.component(vlSidebarGroup.name, vlSidebarGroup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlDropDown/vlDropDown.vue?vue&type=template&id=e48cd7ec&lang=html&
var vlDropDownvue_type_template_id_e48cd7ec_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({ref:"dropdown",staticClass:"vl-con-dropdown parent-dropdown"},'button',_vm.$attrs,false),_vm.listeners),[_vm._t("default")],2)}
var vlDropDownvue_type_template_id_e48cd7ec_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDown.vue?vue&type=template&id=e48cd7ec&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlDropDown/vlDropDown.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlDropDownvue_type_script_lang_js_ = ({
  name: "VlDropdown",
  inheritAttrs: false,
  props: {
    vlTriggerClick: {
      default: false,
      type: Boolean
    },
    vlTriggerContextmenu: {
      default: false,
      type: Boolean
    },
    color: {
      default: 'primary',
      type: String
    },
    vlCustomContent: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      vlDropdownVisible: false,
      rightx: false
    };
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        contextmenu: function contextmenu(evt) {
          return _this.vlTriggerContextmenu ? _this.clickToogleMenu(evt, true) : {};
        },
        click: function click(evt) {
          return _this.vlTriggerContextmenu ? {} : _this.clickToogleMenu(evt);
        },
        mouseout: function mouseout(evt) {
          return _this.toggleMenu('out', evt);
        },
        mouseover: function mouseover(evt) {
          return _this.toggleMenu('over', evt);
        }
      });
    }
  },
  watch: {
    vlDropdownVisible: function vlDropdownVisible() {
      this.changePositionMenu();

      if (this.vlDropdownVisible) {
        this.$emit('focus');
      } else {
        this.$emit('blur');
      }
    }
  },
  mounted: function mounted() {
    var _this$$children$filte = this.$children.filter(function (item) {
      return item.hasOwnProperty('dropdownVisible');
    }),
        _this$$children$filte2 = _slicedToArray(_this$$children$filte, 1),
        dropdownMenu = _this$$children$filte2[0];

    dropdownMenu.vlCustomContent = this.vlCustomContent;
    dropdownMenu.vlTriggerClick = this.vlTriggerClick;
    this.changeColor();
  },
  methods: {
    changeColor: function changeColor() {
      var _this2 = this;

      var child = this.$children;
      child.forEach(function (item) {
        if (item.$vnode.tag.indexOf('dropdown') != -1) {
          item.color = _this2.color;
        }
      });
    },
    changePositionMenu: function changePositionMenu() {
      var _this3 = this;

      var _this$$children$filte3 = this.$children.filter(function (item) {
        return item.hasOwnProperty('dropdownVisible');
      }),
          _this$$children$filte4 = _slicedToArray(_this$$children$filte3, 1),
          dropdownMenu = _this$$children$filte4[0];

      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;

      if (this.$refs.dropdown.getBoundingClientRect().top + 300 >= window.innerHeight) {
        this.$nextTick(function () {
          dropdownMenu.topx = _this3.$refs.dropdown.getBoundingClientRect().top - dropdownMenu.$el.clientHeight - 10 + scrollTopx;
          dropdownMenu.notHeight = true;
        });
      } else {
        dropdownMenu.notHeight = false;
        dropdownMenu.topx = this.$refs.dropdown.getBoundingClientRect().top + this.$refs.dropdown.clientHeight + scrollTopx;
      }

      this.$nextTick(function () {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (_this3.$refs.dropdown.getBoundingClientRect().left + dropdownMenu.$el.offsetWidth >= w - 20) {
          _this3.rightx = true;
        }

        dropdownMenu.leftx = _this3.$refs.dropdown.getBoundingClientRect().left + _this3.$refs.dropdown.clientWidth;
      });
    },
    clickToogleMenu: function clickToogleMenu(evt) {
      var _this4 = this;

      if (evt.type == 'contextmenu') {
        evt.preventDefault();
      }

      var _this$$children$filte5 = this.$children.filter(function (item) {
        return item.hasOwnProperty('dropdownVisible');
      }),
          _this$$children$filte6 = _slicedToArray(_this$$children$filte5, 1),
          dropdownMenu = _this$$children$filte6[0];

      if (this.vlTriggerClick || this.vlTriggerContextmenu) {
        if (this.vlDropdownVisible && !evt.target.closest('.vl-dropdown--menu')) {
          dropdownMenu.dropdownVisible = this.vlDropdownVisible = false;
        } else {
          dropdownMenu.dropdownVisible = this.vlDropdownVisible = true;
          window.addEventListener('click', function () {
            if (!evt.target.closest('.vl-con-dropdown') && !evt.target.closest('.vl-dropdown--menu')) {
              dropdownMenu.dropdownVisible = _this4.vlDropdownVisible = false;
            }
          });
        }
      }
    },
    toggleMenu: function toggleMenu(typex) {
      var _this$$children$filte7 = this.$children.filter(function (item) {
        return item.hasOwnProperty('dropdownVisible');
      }),
          _this$$children$filte8 = _slicedToArray(_this$$children$filte7, 1),
          dropdownMenu = _this$$children$filte8[0];

      if (!this.vlTriggerClick && !this.vlTriggerContextmenu) {
        if (typex == 'over') {
          dropdownMenu.dropdownVisible = this.vlDropdownVisible = true;
        } else {
          dropdownMenu.dropdownVisible = this.vlDropdownVisible = false;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlDropDown_vlDropDownvue_type_script_lang_js_ = (vlDropDownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDown.vue





/* normalize component */

var vlDropDown_component = normalizeComponent(
  vlDropDown_vlDropDownvue_type_script_lang_js_,
  vlDropDownvue_type_template_id_e48cd7ec_lang_html_render,
  vlDropDownvue_type_template_id_e48cd7ec_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlDropDown_component.options.__file = "vlDropDown.vue"
/* harmony default export */ var vlDropDown = (vlDropDown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlDropDown/vlDropDownMenu.vue?vue&type=template&id=08a2eed5&lang=html&
var vlDropDownMenuvue_type_template_id_08a2eed5_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Transition',{attrs:{"name":"dropdownx"}},[(_vm.dropdownVisible)?_c('div',{ref:"options",staticClass:"con-vl-dropdown--menu vl-dropdown-menu",class:{'rightx':_vm.rightx,'notHeight':_vm.notHeight},style:({
      'left':_vm.leftx+'px',
      'top':_vm.topx+'px'
    }),on:{"mouseover":function($event){_vm.toggleMenu($event)},"mouseout":function($event){_vm.toggleMenu($event)}}},[(!_vm.vlCustomContent)?_c('ul',{staticClass:"vl-component vl-dropdown--menu"},[_vm._t("default")],2):_c('div',{staticClass:"vl-dropdown--custom vl-dropdown--menu"},[_vm._t("default")],2)]):_vm._e()])}
var vlDropDownMenuvue_type_template_id_08a2eed5_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDownMenu.vue?vue&type=template&id=08a2eed5&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlDropDown/vlDropDownMenu.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlDropDownMenuvue_type_script_lang_js_ = ({
  name: "VlDropdownMenu",
  data: function data() {
    return {
      dropdownVisible: false,
      leftAfter: 20,
      leftx: 0,
      topx: 0,
      rightx: true,
      vlTriggerClick: false,
      widthx: 0,
      notHeight: false,
      vlCustomContent: false
    };
  },
  watch: {
    dropdownVisible: function dropdownVisible() {
      var dropdownGroup = this.$children.filter(function (item) {
        return item.hasOwnProperty('activeGroup');
      });
      dropdownGroup.forEach(function (item_group) {
        item_group.activeGroup = false;
      });
    }
  },
  mounted: function mounted() {
    this.insertBody();
  },
  beforeDestroy: function beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
  },
  methods: {
    toggleMenu: function toggleMenu(event) {
      if (event.type == 'mouseover' && !this.vlTriggerClick) {
        this.dropdownVisible = true;
      } else if (!this.vlTriggerClick) {
        this.dropdownVisible = false;
      }

      this.widthx = this.$el.clientWidth;
    },
    insertBody: function insertBody() {
      var elp = this.$el;
      document.body.insertBefore(elp, document.body.firstChild);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDownMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlDropDown_vlDropDownMenuvue_type_script_lang_js_ = (vlDropDownMenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDownMenu.vue





/* normalize component */

var vlDropDownMenu_component = normalizeComponent(
  vlDropDown_vlDropDownMenuvue_type_script_lang_js_,
  vlDropDownMenuvue_type_template_id_08a2eed5_lang_html_render,
  vlDropDownMenuvue_type_template_id_08a2eed5_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlDropDownMenu_component.options.__file = "vlDropDownMenu.vue"
/* harmony default export */ var vlDropDownMenu = (vlDropDownMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlDropDown/vlDropDownItem.vue?vue&type=template&id=50cc6f5d&lang=html&
var vlDropDownItemvue_type_template_id_50cc6f5d_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vl-component vl-dropdown--item",class:{'divider':_vm.divider},style:({
    'color':_vm.hoverx?_vm.giveColor()+' !important':null,
    'background':_vm.hoverx?_vm.giveColor(.01)+' !important':null
  }),on:{"click":_vm.closeParent,"mouseover":function($event){_vm.hoverx=true},"mouseout":function($event){_vm.hoverx=false}}},[(_vm.to)?_c('RouterLink',_vm._g(_vm._b({staticClass:"vl-dropdown--item-link",class:{'disabled':_vm.disabled},attrs:{"to":_vm.to}},'RouterLink',_vm.$attrs,false),_vm.$listeners),[_vm._v("\n    "+_vm._s(_vm.$attrs.disabled)+"\n    "),_vm._t("default")],2):_c('a',_vm._g(_vm._b({staticClass:"vl-dropdown--item-link",class:{'disabled':_vm.disabled}},'a',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)],1)}
var vlDropDownItemvue_type_template_id_50cc6f5d_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDownItem.vue?vue&type=template&id=50cc6f5d&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlDropDown/vlDropDownItem.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlDropDownItemvue_type_script_lang_js_ = ({
  name: "VlDropdownItem",
  inheritAttrs: false,
  props: {
    to: {},
    disabled: {
      default: false,
      type: Boolean
    },
    divider: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      hoverx: false,
      vlDropDownItem: true,
      color: null
    };
  },
  mounted: function mounted() {
    this.changeColor();
  },
  updated: function updated() {
    this.changeColor();
  },
  methods: {
    closeParent: function closeParent() {
      if (this.disabled) {
        return;
      }

      searchParent(this);

      function searchParent(_this) {
        var parent = _this.$parent;

        if (!parent.$el.className) {
          return;
        }

        if (parent.$el.className.indexOf('parent-dropdown') == -1) {
          searchParent(parent);
        } else {
          var _parent$$children$fil = parent.$children.filter(function (item) {
            return item.hasOwnProperty('dropdownVisible');
          }),
              _parent$$children$fil2 = _slicedToArray(_parent$$children$fil, 1),
              dropdownMenu = _parent$$children$fil2[0];

          dropdownMenu.dropdownVisible = parent.vlDropdownVisible = false;
        }
      }
    },
    changeColor: function changeColor() {
      var _self = this;

      searchParent(this);

      function searchParent(_this) {
        var parent = _this.$parent;

        if (!parent.$el.className) {
          return;
        }

        if (parent.$el.className.indexOf('parent-dropdown') == -1) {
          searchParent(parent);
        } else {
          _self.color = parent.color;
        }
      }
    },
    giveColor: function giveColor() {
      var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return utils_color.rColor(this.color, opacity);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDownItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlDropDown_vlDropDownItemvue_type_script_lang_js_ = (vlDropDownItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDownItem.vue





/* normalize component */

var vlDropDownItem_component = normalizeComponent(
  vlDropDown_vlDropDownItemvue_type_script_lang_js_,
  vlDropDownItemvue_type_template_id_50cc6f5d_lang_html_render,
  vlDropDownItemvue_type_template_id_50cc6f5d_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlDropDownItem_component.options.__file = "vlDropDownItem.vue"
/* harmony default export */ var vlDropDownItem = (vlDropDownItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlDropDown/vlDropDownGroup.vue?vue&type=template&id=2f5f1acc&lang=html&
var vlDropDownGroupvue_type_template_id_2f5f1acc_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vl-component vl-dropdown--group",class:{'marginIcon':_vm.vlCollapse, 'no-cascading':!_vm.vlCollapse, 'group-rightx':_vm.rightx},on:{"mouseout":function($event){_vm.toggleGroup($event)},"mouseover":function($event){_vm.toggleGroup($event)}}},[(_vm.vlCollapse)?_c('span',{staticClass:"span vl-dropdown--group-label"},[_vm._v("\n    "+_vm._s(_vm.vlLabel)+"\n  ")]):_c('h3',[_vm._v("\n    "+_vm._s(_vm.vlLabel)+"\n  ")]),(_vm.vlCollapse)?_c('VlIcon',{staticClass:"icon-group notranslate vl-dropdown--group-icon",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.vlIcon}}):_vm._e(),_c('Transition',{on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.activeGroup||!_vm.vlCollapse)?_c('div',{ref:"ulx",staticClass:"con-dropdown--group-con-ul",class:{'con-dropdown-group-no-cascading':!_vm.vlCollapse}},[_c('ul',{staticClass:"con-dropdown--group-ul"},[_vm._t("default")],2)]):_vm._e()])],1)}
var vlDropDownGroupvue_type_template_id_2f5f1acc_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDownGroup.vue?vue&type=template&id=2f5f1acc&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlDropDown/vlDropDownGroup.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlDropDownGroupvue_type_script_lang_js_ = ({
  name: 'VlDropdownGroup',
  props: {
    vlLabel: {
      default: 'Options',
      type: String
    },
    vlCollapse: {
      default: false,
      type: Boolean
    },
    vlIcon: {
      default: 'keyboard_arrow_right',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    }
  },
  data: function data() {
    return {
      activeGroup: false,
      rightx: false,
      widthx: 0
    };
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      el.style.height = 0;
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      var h = this.$refs.ulx.scrollHeight;
      this.$refs.ulx.style.height = h + 'px';
      el.style.opacity = 1;
      parents(this);

      function parents(_this) {
        if (_this.$parent.$el.className.search('vl-dropdown--group') != -1) {
          // this.$parent.$el
          var hp = _this.$parent.$refs.ulx.scrollHeight;
          _this.$parent.$refs.ulx.style.height = hp + h + 'px';
          parents(_this.$parent);
        }
      }

      done();
    },
    leave: function leave(el) {
      var __this = this;

      addParents(this);

      function addParents(_this) {
        if (_this.$parent.$refs.ulx) {
          var hp = _this.$parent.$refs.ulx.scrollHeight - __this.$refs.ulx.scrollHeight;
          _this.$parent.$refs.ulx.style.height = hp + 'px';
          addParents(_this.$parent);
        }
      }

      if (!this.$parent.$refs.ulx) {
        this.$refs.ulx.style.height = 0 + 'px';
      }

      this.$refs.ulx.style.height = 0 + 'px';
      el.style.opacity = 0;
    },
    toggleGroup: function toggleGroup() {
      this.activeGroup = !this.activeGroup;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDownGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlDropDown_vlDropDownGroupvue_type_script_lang_js_ = (vlDropDownGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlDropDown/vlDropDownGroup.vue





/* normalize component */

var vlDropDownGroup_component = normalizeComponent(
  vlDropDown_vlDropDownGroupvue_type_script_lang_js_,
  vlDropDownGroupvue_type_template_id_2f5f1acc_lang_html_render,
  vlDropDownGroupvue_type_template_id_2f5f1acc_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlDropDownGroup_component.options.__file = "vlDropDownGroup.vue"
/* harmony default export */ var vlDropDownGroup = (vlDropDownGroup_component.exports);
// CONCATENATED MODULE: ./src/components/vlDropDown/index.js






/* harmony default export */ var components_vlDropDown = (function (Vue) {
  Vue.component(vlDropDown.name, vlDropDown);
  Vue.component(vlDropDownMenu.name, vlDropDownMenu);
  Vue.component(vlDropDownItem.name, vlDropDownItem);
  Vue.component(vlDropDownGroup.name, vlDropDownGroup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTable/vlTable.vue?vue&type=template&id=54532b8c&lang=html&
var vlTablevue_type_template_id_54532b8c_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-component vl-con-table",class:[{'stripe': _vm.stripe, 'hoverFlat': _vm.hoverFlat}, ("vl-table-" + _vm.color) ]},[_c('header',{staticClass:"header-table vl-table--header"},[_c('span',[_vm._t("header")],2),(_vm.search)?_c('div',{staticClass:"con-input-search vl-table--search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchx),expression:"searchx"}],staticClass:"input-search vl-table--search-input",attrs:{"type":"text"},domProps:{"value":(_vm.searchx)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchx=$event.target.value}}}),_c('i',{staticClass:"material-icons"},[_vm._v("\n        search\n      ")])]):_vm._e()]),_c('div',{staticClass:"con-tablex vl-table--content"},[_c('div',{staticClass:"vl-con-table-theade vl-table--thead"},[_c('table',{staticClass:"vl-table--thead-table",style:(_vm.tableHeaderStyle)},[_c('colgroup',{ref:"colgroup"},[_c('col',{attrs:{"width":"20"}}),_vm._l((_vm.getThs),function(col,index){return _c('col',{key:index,staticClass:"colx",attrs:{"name":("col-" + index)}})})],2),_c('thead',{ref:"thead"},[_c('tr',[_c('th',{staticClass:"td-check"},[(_vm.multiple)?_c('span',{staticClass:"con-td-check"},[_c('VlCheckbox',{attrs:{"icon":_vm.isCheckedLine ? 'remove' : 'check',"checked":_vm.isCheckedMultiple,"size":"small"},on:{"click":_vm.changeCheckedMultiple}})],1):_vm._e()]),_vm._t("thead")],2)])])]),_c('div',{staticClass:"vl-con-tbody vl-table--tbody",style:(_vm.styleConTbody)},[_c('table',{ref:"table",staticClass:"vl-table vl-table--tbody-table"},[_c('colgroup',{ref:"colgrouptable"},[_c('col',{attrs:{"width":"20"}}),_vm._l((3),function(col,index){return _c('col',{key:index,attrs:{"name":("col-" + index)}})})],2),_vm._t("default",null,{data:_vm.datax})],2)]),(_vm.isNoData)?_c('div',{staticClass:"not-data-table vl-table--not-data"},[_vm._v("\n      No data Available\n    ")]):_vm._e(),(_vm.pagination)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.searchx),expression:"!searchx"}],staticClass:"con-pagination-table vl-table--pagination"},[_c('VlPagination',{attrs:{"total":_vm.getTotalPages},model:{value:(_vm.currentx),callback:function ($$v) {_vm.currentx=$$v},expression:"currentx"}})],1):_vm._e()])])}
var vlTablevue_type_template_id_54532b8c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlTable/vlTable.vue?vue&type=template&id=54532b8c&lang=html&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("f58a");

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("aa8b");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTable/vlTable.vue?vue&type=script&lang=js&




















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlTablevue_type_script_lang_js_ = ({
  name: "VlTable",
  props: {
    value: {},
    color: {
      default: 'primary',
      type: String
    },
    stripe: {
      default: false,
      type: Boolean
    },
    hoverFlat: {
      default: false,
      type: Boolean
    },
    maxHeight: {
      default: 'auto',
      type: String
    },
    multiple: {
      default: false,
      type: Boolean
    },
    data: {
      default: null
    },
    notSpacer: {
      default: false,
      type: Boolean
    },
    search: {
      default: false,
      type: Boolean
    },
    maxItems: {
      default: 5,
      type: [Number, String]
    },
    pagination: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      headerWidth: '100%',
      trs: [],
      datax: [],
      searchx: null,
      currentx: 1
    };
  },
  computed: {
    getTotalPages: function getTotalPages() {
      return Math.ceil(this.data.length / this.maxItems);
    },
    isNoData: function isNoData() {
      return this.datax ? this.datax.length == 0 : false && this.search;
    },
    isCheckedLine: function isCheckedLine() {
      var lengthx = this.data.length;
      var lengthSelected = this.value.length;
      return lengthx !== lengthSelected;
    },
    isCheckedMultiple: function isCheckedMultiple() {
      return this.value.length > 0;
    },
    styleConTbody: function styleConTbody() {
      return {
        maxHeight: this.maxHeight,
        overflow: this.maxHeight != 'auto' ? 'auto' : null
      };
    },
    getThs: function getThs() {
      var ths = this.$slots.thead.filter(function (item) {
        return item.tag;
      });
      return ths.length;
    },
    tableHeaderStyle: function tableHeaderStyle() {
      return {
        width: this.headerWidth
      };
    }
  },
  watch: {
    currentx: function currentx() {
      this.loadData();
    },
    maxItems: function maxItems() {
      this.loadData();
    },
    data: function data() {
      var _this = this;

      this.loadData();
      this.$nextTick(function () {
        if (_this.datax.length > 0) {
          _this.changeTdsWidth();
        }
      });
    },
    searchx: function searchx() {
      this.filterValues();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    window.addEventListener('resize', this.listenerChangeWidth);
    this.loadData();
    this.$nextTick(function () {
      if (_this2.datax.length > 0) {
        _this2.changeTdsWidth();
      }
    });
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.listenerChangeWidth);
  },
  methods: {
    loadData: function loadData() {
      var max = Math.ceil(this.currentx * this.maxItems);
      var min = max - this.maxItems;
      this.datax = this.pagination ? this.getItems(min, max) : this.data || [];
    },
    getItems: function getItems(min, max) {
      var items = [];

      if (!_.isEmpty(this.data)) {
        this.data.forEach(function (item, index) {
          if (index >= min && index < max) {
            items.push(item);
          }
        });
      }

      return items;
    },
    sort: function sort(key, active) {
      var datax = this.pagination ? this.data : this.datax;

      function compare(a, b) {
        if (a[key] < b[key]) return active ? 1 : -1;
        if (a[key] > b[key]) return active ? -1 : 1;
        return 0;
      }

      this.datax = datax.sort(compare);
    },
    filterValues: function filterValues() {
      var _this3 = this;

      var dataBase = this.data;
      var filterx = dataBase.filter(function (tr) {
        var values = _this3.getValues(tr).toString().toLowerCase();

        return values.indexOf(_this3.searchx.toLowerCase()) != -1;
      });
      var pagex = filterx;

      if (this.pagination) {
        var max = Math.ceil(this.currentx * this.maxItems);
        var min = max - this.maxItems;
        pagex = this.getItems(min, max);
      }

      this.datax = this.searchx !== '' ? filterx : pagex;
    },
    getValues: function getValues(obj) {
      var valuesx = Object.values(obj);
      var strings = [];

      function getStrings(obj) {
        if (Array.isArray(obj)) {
          strings = _toConsumableArray(strings).concat(_toConsumableArray(obj));
          obj.forEach(function (item) {
            getStrings(item);
          });
        } else if (_typeof(obj) == 'object') {
          var subObj = Object.values(obj);
          strings = _toConsumableArray(strings).concat(_toConsumableArray(subObj));
          getStrings(subObj);
        }
      }

      getStrings(valuesx);
      strings = strings.filter(function (item) {
        return typeof item == 'string' || typeof item == 'number';
      });
      return valuesx;
    },
    getStrings: function getStrings(obj, valuesx) {
      var stringsx = Object.values(obj);
      valuesx.forEach(function (item) {
        if (_typeof(item) == 'object') {
          valuesx = _toConsumableArray(valuesx).concat(_toConsumableArray(Object.values(item)));
        }
      }); // return [...valuesx,...Object.values(item)]

      return stringsx;
    },
    changeCheckedMultiple: function changeCheckedMultiple() {
      var lengthx = this.data.length;
      var lengthSelected = this.value.length;
      var selectedx = lengthx - lengthSelected;

      if (selectedx == 0) {
        this.$emit('input', []);
      } else {
        this.$emit('input', this.data);
      }
    },
    clicktr: function clicktr(tr, isTr) {
      if (this.multiple && isTr) {
        var val = this.value.slice(0);

        if (val.includes(tr)) {
          val.splice(val.indexOf(tr), 1);
        } else {
          val.push(tr);
        }

        this.$emit('input', val);
        this.$emit('selected', tr);
      } else if (isTr) {
        this.$emit('input', tr);
        this.$emit('selected', tr);
      }
    },
    listenerChangeWidth: function listenerChangeWidth() {
      this.headerWidth = "".concat(this.$refs.table.offsetWidth, "px");
      this.changeTdsWidth();
    },
    changeTdsWidth: function changeTdsWidth() {
      var tbody = this.$refs.table.querySelector('tbody');
      var tds = tbody.querySelector('.tr-values').querySelectorAll('.td');
      var tdsx = [];
      tds.forEach(function (td, index) {
        tdsx.push({
          index: index,
          widthx: td.offsetWidth
        });
      });
      var colgroup = this.$refs.colgroup;
      var cols = colgroup.querySelectorAll('.col');
      cols.forEach(function (col, index) {
        col.setAttribute('width', tdsx[index].widthx);
      });
      var colgrouptable = this.$refs.colgrouptable;
      var colsTable = colgrouptable.querySelectorAll('.col');
      colsTable.forEach(function (col, index) {
        col.setAttribute('width', tdsx[index].widthx);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlTable/vlTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlTable_vlTablevue_type_script_lang_js_ = (vlTablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlTable/vlTable.vue





/* normalize component */

var vlTable_component = normalizeComponent(
  vlTable_vlTablevue_type_script_lang_js_,
  vlTablevue_type_template_id_54532b8c_lang_html_render,
  vlTablevue_type_template_id_54532b8c_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlTable_component.options.__file = "vlTable.vue"
/* harmony default export */ var vlTable = (vlTable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTable/vlTh.vue?vue&type=template&id=2a51d3c2&
var vlThvue_type_template_id_2a51d3c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{staticClass:"col-0 col",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"vl-table-text"},[(_vm.sortKey)?_c('span',{staticClass:"sort-th"},[_c('i',{staticClass:"material-icons up-sort",on:{"click":function($event){_vm.sortValue(false)}}},[_vm._v("\n        expand_less\n      ")]),_c('i',{staticClass:"material-icons down-sort",on:{"click":function($event){_vm.sortValue(true)}}},[_vm._v("\n        expand_more\n      ")])]):_vm._e(),_vm._t("default")],2)])}
var vlThvue_type_template_id_2a51d3c2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlTable/vlTh.vue?vue&type=template&id=2a51d3c2&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTable/vlTh.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlThvue_type_script_lang_js_ = ({
  name: 'VlTh',
  props: {
    sortKey: {
      default: null,
      type: String
    }
  },
  data: function data() {
    return {
      thIndex: 0,
      thwidth: '100%',
      sortActive: false
    };
  },
  computed: {
    styleth: function styleth() {
      return {
        width: this.thwidth
      };
    }
  },
  methods: {
    sortValue: function sortValue(direction) {
      this.$parent.sort(this.sortKey, direction);
      this.sortActive = direction;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlTable/vlTh.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlTable_vlThvue_type_script_lang_js_ = (vlThvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlTable/vlTh.vue





/* normalize component */

var vlTh_component = normalizeComponent(
  vlTable_vlThvue_type_script_lang_js_,
  vlThvue_type_template_id_2a51d3c2_render,
  vlThvue_type_template_id_2a51d3c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlTh_component.options.__file = "vlTh.vue"
/* harmony default export */ var vlTh = (vlTh_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTable/vlTr.vue?vue&type=template&id=3e457d56&
var vlTrvue_type_template_id_3e457d56_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tbody',{staticClass:"tr-table",class:[("tr-table-state-" + _vm.state), {'is-selected':_vm.isSelected, 'selected': _vm.data, 'is-expand': _vm.maxHeight != '0px', 'activeEdit': _vm.activeEdit, 'hoverFlat': _vm.$parent.hoverFlat}],on:{"click":_vm.clicktr}},[(!_vm.$parent.notSpacer)?_c('tr',{staticClass:"tr-spacer"}):_vm._e(),_c('tr',{staticClass:"tr-values vl-table--tr"},[_c('td',{staticClass:"td-check",on:{"click":function($event){_vm.clicktd()}}},[(_vm.$parent.multiple)?_c('VlCheckbox',{attrs:{"checked":_vm.isSelected,"size":"small"}}):_vm._e(),(_vm.$slots.expand)?_c('VlIcon',[_vm._v("\n        keyboard_arrow_down\n      ")]):_vm._e()],1),_vm._t("default")],2),(_vm.$slots.expand)?_c('tr',{staticClass:"tr-expand"},[_c('td',{ref:"td",attrs:{"colspan":_vm.colspan}},[_c('div',{staticClass:"con-expand",style:(_vm.styleExpand)},[_vm._t("expand")],2)])]):_vm._e()])}
var vlTrvue_type_template_id_3e457d56_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlTable/vlTr.vue?vue&type=template&id=3e457d56&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTable/vlTr.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlTrvue_type_script_lang_js_ = ({
  name: 'VlTr',
  props: {
    state: {
      type: String,
      default: null
    },
    data: {
      default: null
    }
  },
  data: function data() {
    return {
      colspan: 0,
      expanded: false,
      maxHeight: '0px',
      activeEdit: false
    };
  },
  computed: {
    styleExpand: function styleExpand() {
      return {
        maxHeight: this.maxHeight
      };
    },
    getColspanExpand: function getColspanExpand() {
      var lengthx = this.$parent.$refs.colgroup.querySelectorAll('th').length;
      return lengthx;
    },
    isSelected: function isSelected() {
      if (this.$parent.multiple && this.$parent.value) {
        return this.data ? this.$parent.value.includes(this.data) : false;
      } else {
        return this.data ? this.$parent.value == this.data : false;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.colspan = _this.$parent.$refs.thead.querySelectorAll('th').length;

      if (_this.$slots.expand) {
        _this.colspan++;
      }
    });
  },
  methods: {
    clicktr: function clicktr() {
      this.$parent.clicktr(this.data, true);
    },
    clicktd: function clicktd() {
      var _this2 = this;

      this.$parent.clicktr(this.data, false);

      if (this.$parent.multiple) {
        return;
      }

      var scrollHeight = this.$refs.td.scrollHeight;

      if (this.maxHeight == '0px') {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this2.maxHeight = 'none';
        }, 300);
      } else {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this2.maxHeight = "".concat(0, "px");
        }, 50);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlTable/vlTr.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlTable_vlTrvue_type_script_lang_js_ = (vlTrvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlTable/vlTr.vue





/* normalize component */

var vlTr_component = normalizeComponent(
  vlTable_vlTrvue_type_script_lang_js_,
  vlTrvue_type_template_id_3e457d56_render,
  vlTrvue_type_template_id_3e457d56_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlTr_component.options.__file = "vlTr.vue"
/* harmony default export */ var vlTr = (vlTr_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTable/vlTd.vue?vue&type=template&id=63b4af68&
var vlTdvue_type_template_id_63b4af68_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{ref:"td",staticClass:"td vl-table--td",class:{'td-edit': _vm.$slots.edit}},[_c('span',{on:{"click":_vm.clicktd}},[(_vm.$slots.edit)?_c('VlIcon',{staticClass:"icon-edit"},[_vm._v("\n      edit\n    ")]):_vm._e(),_vm._t("default"),(_vm.$slots.edit)?_c('span',{staticClass:"empty"},[_vm._v("\n      "+_vm._s(_vm.data ? '' : 'Empty')+"\n    ")]):_vm._e()],2),_c('Transition',{attrs:{"name":"td"}},[(_vm.activeEdit)?_c('div',{staticClass:"con-edit-td"},[_vm._t("edit"),_c('VlButton',{attrs:{"icon":"clear","size":"small","color":"primary","type":"flat"},on:{"click":_vm.close}})],2):_vm._e()])],1)}
var vlTdvue_type_template_id_63b4af68_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlTable/vlTd.vue?vue&type=template&id=63b4af68&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTable/vlTd.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlTdvue_type_script_lang_js_ = ({
  name: 'VlTd',
  props: {
    data: {
      default: null
    }
  },
  data: function data() {
    return {
      activeEdit: false
    };
  },
  watch: {
    activeEdit: function activeEdit() {
      this.$parent.activeEdit = this.activeEdit;
    }
  },
  methods: {
    clicktd: function clicktd() {
      var _this = this;

      if (this.$slots.edit) {
        if (!this.activeEdit) {
          this.activeEdit = true;
          setTimeout(function () {
            window.addEventListener('click', _this.closeEdit);
          }, 10);
        }
      }
    },
    closeEdit: function closeEdit(evt) {
      if (!evt.target.closest('.con-edit-td') && !evt.target.closest('.vl-select--options')) {
        this.close();
      }
    },
    close: function close() {
      this.activeEdit = false;
      window.removeEventListener('click', this.closeEdit);
    },
    saveEdit: function saveEdit() {
      this.activeEdit = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlTable/vlTd.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlTable_vlTdvue_type_script_lang_js_ = (vlTdvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlTable/vlTd.vue





/* normalize component */

var vlTd_component = normalizeComponent(
  vlTable_vlTdvue_type_script_lang_js_,
  vlTdvue_type_template_id_63b4af68_render,
  vlTdvue_type_template_id_63b4af68_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlTd_component.options.__file = "vlTd.vue"
/* harmony default export */ var vlTd = (vlTd_component.exports);
// CONCATENATED MODULE: ./src/components/vlTable/index.js






/* harmony default export */ var components_vlTable = (function (Vue) {
  Vue.component(vlTable.name, vlTable);
  Vue.component(vlTh.name, vlTh);
  Vue.component(vlTr.name, vlTr);
  Vue.component(vlTd.name, vlTd);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTextarea/vlTextarea.vue?vue&type=template&id=0d7ebf11&lang=html&
var vlTextareavue_type_template_id_0d7ebf11_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-component vl-con-textarea",class:{'textarea-danger': _vm.counter ? _vm.value.length > _vm.counter : false, 'focusx': _vm.focusx}},[(_vm.label)?_c('h4',[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]):_vm._e(),_c('textarea',_vm._g(_vm._b({staticClass:"vl-textarea",domProps:{"value":_vm.value}},'textarea',_vm.$attrs,false),_vm.listeners)),(_vm.counter)?_c('div',{staticClass:"count vl-textarea--count"},[_vm._v("\n    "+_vm._s(_vm.value.length)+" / "+_vm._s(_vm.counter)+"\n  ")]):_vm._e()])}
var vlTextareavue_type_template_id_0d7ebf11_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlTextarea/vlTextarea.vue?vue&type=template&id=0d7ebf11&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlTextarea/vlTextarea.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlTextareavue_type_script_lang_js_ = ({
  name: "VlTextarea",
  inheritAttrs: false,
  props: {
    value: {
      default: '',
      type: String
    },
    label: {
      default: null,
      type: String
    },
    counter: {
      default: null,
      type: [Number, String]
    },
    counterDanger: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      focusx: false
    };
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        input: function input(evt) {
          _this.$emit('input', evt.target.value);
        },
        focus: function focus() {
          _this.focus();
        },
        blur: function blur() {
          _this.blur();
        }
      });
    }
  },
  watch: {
    value: function value() {
      if (this.value.length > this.counter) {
        this.$emit('update:counterDanger', true);
      } else {
        this.$emit('update:counterDanger', false);
      }
    }
  },
  methods: {
    focus: function focus() {
      this.focusx = true;
    },
    blur: function blur() {
      this.focusx = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlTextarea/vlTextarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlTextarea_vlTextareavue_type_script_lang_js_ = (vlTextareavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlTextarea/vlTextarea.vue





/* normalize component */

var vlTextarea_component = normalizeComponent(
  vlTextarea_vlTextareavue_type_script_lang_js_,
  vlTextareavue_type_template_id_0d7ebf11_lang_html_render,
  vlTextareavue_type_template_id_0d7ebf11_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlTextarea_component.options.__file = "vlTextarea.vue"
/* harmony default export */ var vlTextarea = (vlTextarea_component.exports);
// CONCATENATED MODULE: ./src/components/vlTextarea/index.js



/* harmony default export */ var components_vlTextarea = (function (Vue) {
  Vue.component(vlTextarea.name, vlTextarea);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlCollapse/vlCollapse.vue?vue&type=template&id=1b8cd9f8&
var vlCollapsevue_type_template_id_1b8cd9f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-collapse",class:[_vm.type]},[_vm._t("default")],2)}
var vlCollapsevue_type_template_id_1b8cd9f8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlCollapse/vlCollapse.vue?vue&type=template&id=1b8cd9f8&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlCollapse/vlCollapse.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var vlCollapsevue_type_script_lang_js_ = ({
  name: 'VlCollapse',
  props: {
    accordion: {
      default: false,
      type: Boolean
    },
    type: {
      default: 'default',
      type: String
    },
    openHover: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    emitChange: function emitChange() {
      this.$emit('change');
    },
    closeAllItems: function closeAllItems(el) {
      var children = this.$children;
      children.map(function (item) {
        if (item.$el !== el) {
          item.maxHeight = '0px';
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlCollapse/vlCollapse.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlCollapse_vlCollapsevue_type_script_lang_js_ = (vlCollapsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlCollapse/vlCollapse.vue





/* normalize component */

var vlCollapse_component = normalizeComponent(
  vlCollapse_vlCollapsevue_type_script_lang_js_,
  vlCollapsevue_type_template_id_1b8cd9f8_render,
  vlCollapsevue_type_template_id_1b8cd9f8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlCollapse_component.options.__file = "vlCollapse.vue"
/* harmony default export */ var vlCollapse = (vlCollapse_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlCollapse/vlCollapseItem.vue?vue&type=template&id=49b8ec7c&
var vlCollapseItemvue_type_template_id_49b8ec7c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-collapse-item",class:{'open-item': _vm.maxHeight != '0px', 'disabledx': _vm.disabled},on:{"mouseover":_vm.mouseover,"mouseout":_vm.mouseout}},[_c('header',{staticClass:"vl-collapse-item--header",on:{"click":_vm.toggleContent}},[_vm._t("header"),(!_vm.notArrow)?_c('span',{staticClass:"icon-header vl-collapse-item--icon-header"},[_c('vl-icon',{attrs:{"icon-pack":_vm.iconPack,"icon":_vm.iconArrow}})],1):_vm._e()],2),_c('div',{ref:"content",staticClass:"vl-collapse-item--content",style:(_vm.styleContent)},[_c('div',{staticClass:"con-content--item"},[_vm._t("default")],2)])])}
var vlCollapseItemvue_type_template_id_49b8ec7c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlCollapse/vlCollapseItem.vue?vue&type=template&id=49b8ec7c&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlCollapse/vlCollapseItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlCollapseItemvue_type_script_lang_js_ = ({
  name: 'VlCollapseItem',
  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    notArrow: {
      default: false,
      type: Boolean
    },
    iconArrow: {
      default: 'keyboard_arrow_down',
      type: String
    },
    iconPack: {
      default: 'material-icons',
      type: String
    }
  },
  data: function data() {
    return {
      maxHeight: '0px'
    };
  },
  components: {
    VlIcon: components_vlIcon
  },
  computed: {
    accordion: function accordion() {
      return this.$parent.accordion;
    },
    openHover: function openHover() {
      return this.$parent.openHover;
    },
    styleContent: function styleContent() {
      return {
        maxHeight: this.maxHeight
      };
    }
  },
  watch: {
    maxHeight: function maxHeight() {
      this.$parent.emitChange();
    }
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.changeHeight);
  },
  methods: {
    changeHeight: function changeHeight() {
      var maxHeightx = this.$refs.content.scrollHeight;

      if (this.maxHeight != '0px') {
        this.maxHeight = "".concat(maxHeightx, "px");
      }
    },
    toggleContent: function toggleContent() {
      if (this.openHover || this.disabled) {
        return;
      }

      if (this.accordion) {
        this.$parent.closeAllItems(this.$el);
      }

      var maxHeightx = this.$refs.content.scrollHeight;

      if (this.maxHeight == '0px') {
        this.maxHeight = "".concat(maxHeightx, "px");
      } else {
        this.maxHeight = "0px";
      }
    },
    mouseover: function mouseover() {
      if (this.disabled) {
        return;
      }

      var maxHeightx = this.$refs.content.scrollHeight;

      if (this.openHover) {
        this.maxHeight = "".concat(maxHeightx, "px");
      }
    },
    mouseout: function mouseout() {
      if (this.openHover) {
        this.maxHeight = "0px";
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlCollapse/vlCollapseItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlCollapse_vlCollapseItemvue_type_script_lang_js_ = (vlCollapseItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlCollapse/vlCollapseItem.vue





/* normalize component */

var vlCollapseItem_component = normalizeComponent(
  vlCollapse_vlCollapseItemvue_type_script_lang_js_,
  vlCollapseItemvue_type_template_id_49b8ec7c_render,
  vlCollapseItemvue_type_template_id_49b8ec7c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlCollapseItem_component.options.__file = "vlCollapseItem.vue"
/* harmony default export */ var vlCollapseItem = (vlCollapseItem_component.exports);
// CONCATENATED MODULE: ./src/components/vlCollapse/index.js




/* harmony default export */ var components_vlCollapse = (function (Vue) {
  Vue.component(vlCollapse.name, vlCollapse);
  Vue.component(vlCollapseItem.name, vlCollapseItem);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlImages/vlImages.vue?vue&type=template&id=419b5709&lang=html&
var vlImagesvue_type_template_id_419b5709_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-component vl-images",class:[("vl-images-hover-" + _vm.hover), {'alternating': _vm.alternating, 'notBorderRadius': _vm.notBorderRadius, 'notMargin': _vm.notMargin}]},[_c('ul',{staticClass:"vl-ul-images vl-images--ul"},[_vm._t("default")],2)])}
var vlImagesvue_type_template_id_419b5709_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlImages/vlImages.vue?vue&type=template&id=419b5709&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlImages/vlImages.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlImagesvue_type_script_lang_js_ = ({
  name: "VlImages",
  inheritAttrs: false,
  props: {
    hover: {
      default: 'default',
      type: String
    },
    alternating: {
      default: false,
      type: Boolean
    },
    notBorderRadius: {
      default: false,
      type: Boolean
    },
    notMargin: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/vlImages/vlImages.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlImages_vlImagesvue_type_script_lang_js_ = (vlImagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlImages/vlImages.vue





/* normalize component */

var vlImages_component = normalizeComponent(
  vlImages_vlImagesvue_type_script_lang_js_,
  vlImagesvue_type_template_id_419b5709_lang_html_render,
  vlImagesvue_type_template_id_419b5709_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlImages_component.options.__file = "vlImages.vue"
/* harmony default export */ var vlImages = (vlImages_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlImages/vlImage.vue?vue&type=template&id=9a296174&
var vlImagevue_type_template_id_9a296174_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"vl-image"},[_c('div',{staticClass:"con-vl-image"},[_c('div',{staticClass:"vl-image--img",style:(_vm.styleImage),attrs:{"v-bind":_vm.$attrs},on:{"click":function($event){_vm.selected(_vm.$attrs)}}})]),_c('img',{staticClass:"imag-blur",attrs:{"src":_vm.src,"alt":""}})])}
var vlImagevue_type_template_id_9a296174_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vlImages/vlImage.vue?vue&type=template&id=9a296174&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vlImages/vlImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlImagevue_type_script_lang_js_ = ({
  name: 'VlImage',
  inheritAttrs: false,
  props: {
    src: {
      default: null,
      type: String
    }
  },
  computed: {
    styleImage: function styleImage() {
      return {
        backgroundImage: "url(".concat(this.src, ")")
      };
    }
  },
  methods: {
    selected: function selected(attrs) {
      this.$emit('selected', attrs);
    }
  }
});
// CONCATENATED MODULE: ./src/components/vlImages/vlImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlImages_vlImagevue_type_script_lang_js_ = (vlImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/vlImages/vlImage.vue





/* normalize component */

var vlImage_component = normalizeComponent(
  vlImages_vlImagevue_type_script_lang_js_,
  vlImagevue_type_template_id_9a296174_render,
  vlImagevue_type_template_id_9a296174_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlImage_component.options.__file = "vlImage.vue"
/* harmony default export */ var vlImage = (vlImage_component.exports);
// CONCATENATED MODULE: ./src/components/vlImages/index.js




/* harmony default export */ var components_vlImages = (function (Vue) {
  Vue.component(vlImages.name, vlImages);
  Vue.component(vlImage.name, vlImage);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vlRow/vlRow.vue?vue&type=template&id=3a9b009b&lang=html&
var vlRowvue_type_template_id_3a9b009b_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-row",style:({
    'align-items':_vm.vlAlign,
    'justify-content':_vm.vlJustify,
    'display':_vm.vlType,
    'overflow': _vm.vlType === 'block' ? 'hidden' : null,
    'width':_vm.vlW*100/12+'%'})},[_vm._t("default")],2)}
var vlRowvue_type_template_id_3a9b009b_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/layout/vlRow/vlRow.vue?vue&type=template&id=3a9b009b&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vlRow/vlRow.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlRowvue_type_script_lang_js_ = ({
  name: 'VlRow',
  props: {
    vlType: {
      default: 'flex',
      type: String
    },
    vlW: {
      type: [Number, String],
      default: 12
    },
    vlJustify: {
      type: String,
      default: null
    },
    vlAlign: {
      type: String,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./src/layout/vlRow/vlRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlRow_vlRowvue_type_script_lang_js_ = (vlRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/vlRow/vlRow.vue?vue&type=style&index=0&lang=css&
var vlRowvue_type_style_index_0_lang_css_ = __webpack_require__("233b");

// CONCATENATED MODULE: ./src/layout/vlRow/vlRow.vue






/* normalize component */

var vlRow_component = normalizeComponent(
  vlRow_vlRowvue_type_script_lang_js_,
  vlRowvue_type_template_id_3a9b009b_lang_html_render,
  vlRowvue_type_template_id_3a9b009b_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlRow_component.options.__file = "vlRow.vue"
/* harmony default export */ var vlRow = (vlRow_component.exports);
// CONCATENATED MODULE: ./src/layout/vlRow/index.js



/* harmony default export */ var layout_vlRow = (function (Vue) {
  Vue.component(vlRow.name, vlRow);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vlCol/vlCol.vue?vue&type=template&id=2690cf58&lang=html&
var vlColvue_type_template_id_2690cf58_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vl-col",class:[
    'vl-xs-'+_vm.vlXs,
    'vl-sm-'+_vm.vlSm,
    'vl-lg-'+_vm.vlLg ],style:({
    'order':_vm.vlOrder,
    'justify-content':_vm.vlJustify,
    'display':_vm.vlType,
    'align-items':_vm.vlAlign,
    'margin-left':_vm.vlOffset*100/12+'%',
    'width':_vm.vlW*100/12+'%'})},[_vm._t("default")],2)}
var vlColvue_type_template_id_2690cf58_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/layout/vlCol/vlCol.vue?vue&type=template&id=2690cf58&lang=html&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/vlCol/vlCol.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlColvue_type_script_lang_js_ = ({
  name: 'VlCol',
  props: {
    vlW: {
      type: [Number, String],
      default: 12
    },
    vlXs: {
      type: [Number, String],
      default: ''
    },
    vlSm: {
      type: [Number, String],
      default: ''
    },
    vlLg: {
      type: [Number, String],
      default: ''
    },
    vlOffset: {
      type: [Number, String],
      default: 0
    },
    vlType: {
      type: String,
      default: null
    },
    vlJustify: {
      type: String,
      default: null
    },
    vlAlign: {
      type: String,
      default: null
    },
    vlOrder: {
      default: null,
      type: [String, Number]
    }
  }
});
// CONCATENATED MODULE: ./src/layout/vlCol/vlCol.vue?vue&type=script&lang=js&
 /* harmony default export */ var vlCol_vlColvue_type_script_lang_js_ = (vlColvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/vlCol/vlCol.vue?vue&type=style&index=0&lang=css&
var vlColvue_type_style_index_0_lang_css_ = __webpack_require__("8e13");

// CONCATENATED MODULE: ./src/layout/vlCol/vlCol.vue






/* normalize component */

var vlCol_component = normalizeComponent(
  vlCol_vlColvue_type_script_lang_js_,
  vlColvue_type_template_id_2690cf58_lang_html_render,
  vlColvue_type_template_id_2690cf58_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlCol_component.options.__file = "vlCol.vue"
/* harmony default export */ var vlCol = (vlCol_component.exports);
// CONCATENATED MODULE: ./src/layout/vlCol/index.js



/* harmony default export */ var layout_vlCol = (function (Vue) {
  Vue.component(vlCol.name, vlCol);
});
// CONCATENATED MODULE: ./src/components/index.js






























 // export { default as vlTimePicker } from './vlTimePicker'
//New Component import
//layout



// EXTERNAL MODULE: ./src/styles/index.styl
var src_styles = __webpack_require__("fe46");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vlNotifications/index.vue?vue&type=template&id=1cfe41ba&lang=html&
var vlNotificationsvue_type_template_id_1cfe41ba_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Transition',{attrs:{"name":"noti"},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"leave":_vm.leave}},[(_vm.active)?_c('div',{ref:"noti",staticClass:"vl-component vl-notifications",class:[("vl-noti-" + _vm.position),("vl-noti-" + _vm.color),{'activeNoti':_vm.active}],style:(_vm.stylex),on:{"click":_vm.clickNoti}},[_c('div',{staticClass:"content-noti"},[_c('div',{staticClass:"con-text-noti"},[_c('h3',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_c('p',{domProps:{"innerHTML":_vm._s(_vm.text)}}),_vm._t("default")],2),(_vm.icon)?_c('VlIcon',{staticClass:"vl-icon-noti",attrs:{"icon-pack":_vm.iconPack,"icon":_vm.icon}}):_vm._e()],1),_c('span',{staticClass:"filling",style:(_vm.fillingStyle)})]):_vm._e()])}
var vlNotificationsvue_type_template_id_1cfe41ba_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/functions/vlNotifications/index.vue?vue&type=template&id=1cfe41ba&lang=html&

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.string.fixed.js
var es6_string_fixed = __webpack_require__("574b");

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vlNotifications/index.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vlNotificationsvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      fullWidth: false,
      icon: null,
      iconPack: 'material-icons',
      color: 'primary',
      colorText: 'rgb(255, 255, 255)',
      active: true,
      text: null,
      title: null,
      position: 'bottom-right',
      time: 3000,
      cords: {
        top: null,
        left: null,
        right: null,
        bottom: null
      },
      widthx: 0,
      fixed: false
    };
  },
  computed: {
    fillingStyle: function fillingStyle() {
      return {
        left: this.cords.left ? '-100px' : null,
        right: this.cords.right ? '-100px' : null,
        background: this.color,
        height: "".concat(this.widthx * 2, "px"),
        width: "".concat(this.widthx * 2, "px")
      };
    },
    stylex: function stylex() {
      return _objectSpread({}, this.cords, {
        color: this.colorText,
        width: this.fullWidth ? "calc(100% - 14px)" : "",
        maxWidth: this.fullWidth ? 'none' : "350px"
      });
    }
  },
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.moverNotis();
    }, 0);
    this.changeCords();
  },
  mounted: function mounted() {
    var _this2 = this;

    setTimeout(function () {
      _this2.widthx = _this2.$refs.noti.clientWidth;
    }, 0);

    if (!this.fixed) {
      setTimeout(function () {
        _this2.closeNoti();
      }, this.time);
    }
  },
  methods: {
    clickNoti: function clickNoti() {
      this.active = false;
      this.click ? this.click() : null;
    },
    beforeEnter: function beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter: function enter(el, done) {
      el.style.opacity = 1;
      done();
    },
    leave: function leave(el, done) {
      var _this3 = this;

      el.style.opacity = 0;
      var transformx = el.style.transform;

      if (this.cords.left == '50%' || this.fullWidth) {
        transformx += " translateY(".concat(this.cords.top ? '-' : '', "100%)");
      } else {
        transformx += " translateX(".concat(this.cords.left ? '-' : '', "100%)");
      }

      el.style.transform = transformx;
      setTimeout(function () {
        done();

        _this3.moverNotis();
      }, 150);
    },
    closeNoti: function closeNoti() {
      this.active = false;
    },
    changeCords: function changeCords() {
      var positions = this.position.split('-');

      var search = function search(text) {
        return positions.indexOf(text) != -1;
      };

      if (search('top')) {
        this.cords.top = '0px';
      }

      if (search('bottom')) {
        this.cords.bottom = '0px';
      }

      if (search('right')) {
        this.cords.right = '0px';
      }

      if (search('left')) {
        this.cords.left = '0px';
      }

      if (search('center')) {
        this.cords.left = '50%';
      }
    },
    moverNotis: function moverNotis() {
      var notisx = document.querySelectorAll('.vl-noti-' + this.position);

      for (var i = 0; i < notisx.length; i++) {
        var hx = 10;

        for (var i2 = 0; i2 < i; i2++) {
          hx += notisx[i2].clientHeight + 6;
        }

        if (this.position.search('center') == -1) {
          if (this.position.search('top') != -1) {
            notisx[i].style.transform = "translatey(".concat(hx, "px)");
          } else if (this.position.search('bottom') != -1) {
            notisx[i].style.transform = "translatey(-".concat(hx, "px)");
          }
        }

        if (this.position.search('top') != -1 && this.position.search('center') != -1) {
          notisx[i].style.transform = "translate(-50%,".concat(hx, "px)");
          notisx[i].style.zIndex = 10000 - i;
        }

        if (this.position.search('bottom') != -1 && this.position.search('center') != -1) {
          notisx[i].style.transform = "translate(-50%,-".concat(hx, "px)");
          notisx[i].style.zIndex = 10000 - i;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/functions/vlNotifications/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var functions_vlNotificationsvue_type_script_lang_js_ = (vlNotificationsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/functions/vlNotifications/index.vue





/* normalize component */

var vlNotifications_component = normalizeComponent(
  functions_vlNotificationsvue_type_script_lang_js_,
  vlNotificationsvue_type_template_id_1cfe41ba_lang_html_render,
  vlNotificationsvue_type_template_id_1cfe41ba_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlNotifications_component.options.__file = "index.vue"
/* harmony default export */ var vlNotifications = (vlNotifications_component.exports);
// CONCATENATED MODULE: ./src/functions/vlNotifications/index.js





var NotiConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vlNotifications);
var instance;
/* harmony default export */ var functions_vlNotifications = ({
  name: 'notify',
  vlfunction: function vlfunction(parameters) {
    if (parameters.fullWidth) {
      if (parameters.position) {
        parameters.position = parameters.position.replace('right', 'left');
      }
    }

    instance = new NotiConstructor({
      data: parameters
    });
    instance.vm = instance.$mount();
    parameters.click ? instance.vm.$on('click', parameters.click) : null;
    utils.insertBody(instance.vm.$el);
  }
});
// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("b0c9");

// EXTERNAL MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("aecb");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ca1fd1f0-vue-loader-template"}!/home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vlLoading/index.vue?vue&type=template&id=7b34c7eb&
var vlLoadingvue_type_template_id_7b34c7eb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Transition',{attrs:{"name":"fade"}},[(_vm.active)?_c('div',{staticClass:"con-vl-loading",class:[("vl-loading-background-" + _vm.background),("vl-loading-color-" + _vm.color),{'textAfter':_vm.textAfter}],style:(_vm.style),on:{"click":_vm.effectClick}},[_c('Transition',{attrs:{"name":"effect-click"}},[(_vm.activeEffectClick&&_vm.clickEffect)?_c('div',{staticClass:"effect-click",style:(_vm.styleEffectClick)}):_vm._e()]),(_vm.text)?_c('h4',{staticClass:"title-loading"},[_vm._v("\n      "+_vm._s(_vm.text)+"\n    ")]):_vm._e(),_c('div',{staticClass:"vl-loading",class:[_vm.type],style:({
        transform:("scale(" + _vm.scale + ")")
      })},[(_vm.type!='material')?_c('div',{staticClass:"effect-1 effects",style:(_vm.styleEffect1)}):_vm._e(),(_vm.type!='material')?_c('div',{staticClass:"effect-2 effects",style:(_vm.styleEffect2)}):_vm._e(),(_vm.type!='material')?_c('div',{staticClass:"effect-3 effects",style:(_vm.styleEffect3)}):_vm._e(),_c('img',{attrs:{"src":_vm.src}}),(_vm.type=='material')?_c('svg',{staticClass:"spinner",attrs:{"width":"50px","height":"50px","viewBox":"0 0 66 66","xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{staticClass:"path",attrs:{"fill":"none","stroke-width":"5","stroke-linecap":"round","cx":"33","cy":"33","r":"30"}})]):_vm._e()])],1):_vm._e()])}
var vlLoadingvue_type_template_id_7b34c7eb_staticRenderFns = []


// CONCATENATED MODULE: ./src/functions/vlLoading/index.vue?vue&type=template&id=7b34c7eb&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib??ref--12-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/functions/vlLoading/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vlLoadingvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      active: false,
      type: 'default',
      color: null,
      background: 'rgba(255,255,255,.6)',
      src: '',
      leftx: 0,
      topx: 0,
      clickEffect: false,
      activeEffectClick: false,
      scale: 1,
      textAfter: false,
      text: null
    };
  },
  computed: {
    styleEffectClick: function styleEffectClick() {
      return {
        left: "".concat(this.leftx, "px"),
        top: "".concat(this.topx, "px")
      };
    },
    styleEffect1: function styleEffect1() {
      var style = {
        borderLeft: "3px solid ".concat(utils_color.getColor(this.color, 1))
      };

      if (this.type == 'border') {
        style = {
          borderLeft: "1px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'point') {
        style = {
          background: utils_color.getColor(this.color, .4)
        };
      }

      if (this.type == 'radius') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'corners') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'sound') {
        style = {
          background: utils_color.getColor(this.color, 1)
        };
      }

      return style;
    },
    styleEffect2: function styleEffect2() {
      var style = {
        borderLeft: "3px solid ".concat(utils_color.getColor(this.color, 1))
      };

      if (this.type == 'border') {
        style = {
          borderLeft: "1px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'point') {
        style = {
          background: utils_color.getColor(this.color, .4)
        };
      }

      if (this.type == 'radius') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'corners') {
        style = {};
      }

      if (this.type == 'sound') {
        style = {
          background: utils_color.getColor(this.color, 1)
        };
      }

      return style;
    },
    styleEffect3: function styleEffect3() {
      var style = {
        borderLeft: "3px solid ".concat(utils_color.getColor(this.color, 1))
      };

      if (this.type == 'border') {
        style = {
          borderLeft: "1px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'point') {
        style = {
          background: utils_color.getColor(this.color, .4)
        };
      }

      if (this.type == 'radius') {
        style = {
          border: "3px solid ".concat(utils_color.getColor(this.color, 1))
        };
      }

      if (this.type == 'corners') {
        style = {};
      }

      if (this.type == 'sound') {
        style = {
          background: utils_color.getColor(this.color, 1)
        };
      }

      return style;
    },
    style: function style() {
      return {
        background: utils_color.getColor(this.background, 1)
      };
    }
  },
  mounted: function mounted() {
    this.active = true;
  },
  methods: {
    effectClick: function effectClick(evt) {
      var _this = this;

      this.leftx = evt.offsetX;
      this.topx = evt.offsetY;
      this.activeEffectClick = true;
      setTimeout(function () {
        _this.activeEffectClick = false;
      }, 50);
    },
    close: function close() {
      this.active = false;
    }
  }
});
// CONCATENATED MODULE: ./src/functions/vlLoading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var functions_vlLoadingvue_type_script_lang_js_ = (vlLoadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/functions/vlLoading/index.vue





/* normalize component */

var vlLoading_component = normalizeComponent(
  functions_vlLoadingvue_type_script_lang_js_,
  vlLoadingvue_type_template_id_7b34c7eb_render,
  vlLoadingvue_type_template_id_7b34c7eb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

vlLoading_component.options.__file = "index.vue"
/* harmony default export */ var vlLoading = (vlLoading_component.exports);
// CONCATENATED MODULE: ./src/functions/vlLoading/index.js







var loadingConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vlLoading);
/* harmony default export */ var functions_vlLoading = ({
  name: 'loading',
  vlfunction: function vlfunction(parameters) {
    var instance = new loadingConstructor();
    var containerx = document.body;

    if (parameters) {
      instance.$data.type = parameters.type || 'default';
      instance.$data.background = parameters.background;
      instance.$data.color = parameters.color;
      instance.$data.scale = parameters.scale;
      instance.$data.text = parameters.text;
      instance.$data.clickEffect = parameters.clickEffect;

      if (parameters.container) {
        containerx = parameters.container instanceof Element ? parameters.container : document.querySelector(parameters.container);
      }
    }

    instance.vm = instance.$mount();
    containerx.insertBefore(instance.vm.$el, containerx.firstChild);
  },
  close: function close(elx) {
    var loadings;

    if (elx instanceof Element) {
      // Mimicking the behavior of doing `elx.querySelectorAll('> con-vl-loading')` but `>` is not well supported.
      // We are doing this because we can only add the respective classes to .con-vl-loading
      loadings = Array.from(elx.children).filter(function (el) {
        return el.classList.contains('con-vl-loading');
      });
    } else {
      loadings = document.querySelectorAll(elx || 'body > .con-vl-loading');
    }

    loadings.forEach(function (loading) {
      loading.classList.add('beforeRemove');
      setTimeout(function () {
        loading.remove();
      }, 300);
    });
  }
});
// CONCATENATED MODULE: ./src/functions/vlDialog/index.js



var dialogConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(vlDialog);
var vlDialog_instance;
/* harmony default export */ var functions_vlDialog = ({
  name: 'dialog',
  vlfunction: function vlfunction(parameters) {
    vlDialog_instance = new dialogConstructor({
      data: parameters
    });
    vlDialog_instance.$data.isPrompt = false;
    vlDialog_instance.vm = vlDialog_instance.$mount();
    parameters.accept ? vlDialog_instance.vm.$on('accept', parameters.accept) : null;
    parameters.cancel ? vlDialog_instance.vm.$on('cancel', parameters.cancel) : null;
    utils.insertBody(vlDialog_instance.vm.$el);
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
      vlDialog_instance.active = true;
    });
  }
});
// CONCATENATED MODULE: ./src/utils/theme.js



/* harmony default export */ var theme = ({
  name: 'theme',
  vlfunction: function vlfunction(json) {
    for (var clave in json) {
      var colorx = void 0;

      if (/^[rgb(]/g.test(json[clave])) {
        colorx = json[clave].replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(json[clave])) {
        var rgbx = utils_color.hexToRgb(json[clave]);
        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = json[clave];
      }

      utils_color.setCssVariable('--' + clave, colorx);
    }
  }
});
// CONCATENATED MODULE: ./src/functions/index.js








// Functions


 //theme


var vlFunctions = {
  vlNotifications: functions_vlNotifications,
  vlLoading: functions_vlLoading,
  vlTheme: theme,
  vlDialog: functions_vlDialog
};
/* harmony default export */ var functions = (function (Vue) {
  Vue.prototype.$vl = {};
  Object.values(vlFunctions).forEach(function (vlFunctions) {
    if (vlFunctions.hasOwnProperty('subName')) {
      Vue.prototype.$vl[vlFunctions.name][vlFunctions.subName] = vlFunctions.vlfunction;
    } else {
      Vue.prototype.$vl[vlFunctions.name] = vlFunctions.vlfunction;
    }
  });
  Vue.prototype.$vl.loading.close = functions_vlLoading.close;
});
// CONCATENATED MODULE: ./src/utils/easing.js
/* harmony default export */ var easing = ({
  name: 'easing',
  // no easing, no acceleration
  linear: function linear(t, b, c, d) {
    return c * t / d + b;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t, b, c, d) {
    t /= d;
    return c * t * t + b;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t, b, c, d) {
    t /= d;
    return c * t * t * t + b;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t, b, c, d) {
    t /= d;
    return c * t * t * t * t + b;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t, b, c, d) {
    t /= d;
    return c * t * t * t * t * t + b;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuintfunction: function easeInOutQuintfunction(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t * t * t + 2) + b;
  },
  easeInSine: function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function easeInExpo(t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function easeOutExpo(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function easeInOutExpo(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    t--;
    return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
  },
  easeInCirc: function easeInCirc(t, b, c, d) {
    t /= d;
    return -c * (Math.sqrt(1 - t * t) - 1) + b;
  },
  easeOutCirc: function easeOutCirc(t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b;
  },
  easeInOutCirc: function easeInOutCirc(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
  }
});
// CONCATENATED MODULE: ./src/index.js











var Vuelux = {
  install: function install(Vue, options) {
    //change defaults colors, Not Support SSR, else = Stylus vars
    if (options) {
      if (options.hasOwnProperty('theme')) {
        if (options.theme.hasOwnProperty('colors')) {
          if (typeof window !== 'undefined') {
            theme.vlfunction(options.theme.colors, options.server);
          }
        }
      }
    }

    Object.values(components_namespaceObject).forEach(function (vlComponent) {
      Vue.use(vlComponent);
    });
    functions(Vue);
    Vue.prototype.$vl.easing = easing;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuelux);
}

/* harmony default export */ var src = (Vuelux);
// CONCATENATED MODULE: /home/luxknight/.nvm/versions/node/v8.11.4/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "8172":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "82e0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("bfb5");
var inheritIfRequired = __webpack_require__("f8db");
var dP = __webpack_require__("7814").f;
var gOPN = __webpack_require__("454c").f;
var isRegExp = __webpack_require__("666a");
var $flags = __webpack_require__("f153");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("f4b2") && (!CORRECT_NEW || __webpack_require__("6dbe")(function () {
  re2[__webpack_require__("4d5e")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("0b9e")(global, 'RegExp', $RegExp);
}

__webpack_require__("100d")('RegExp');


/***/ }),

/***/ "8b24":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("c685");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8e13":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vlCol_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9073");
/* harmony import */ var _nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vlCol_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vlCol_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_nvm_versions_node_v8_11_4_lib_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vlCol_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9073":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9339":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("c685");
var TAG = __webpack_require__("4d5e")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "93c8":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("4d5e")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("a733")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "95f3":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "998d":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("e248");
var defined = __webpack_require__("11f8");
var fails = __webpack_require__("6dbe");
var spaces = __webpack_require__("02db");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "9a6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("39ea");
var getKeys = __webpack_require__("5ee6");
var redefine = __webpack_require__("0b9e");
var global = __webpack_require__("bfb5");
var hide = __webpack_require__("a733");
var Iterators = __webpack_require__("1bc7");
var wks = __webpack_require__("4d5e");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "9c6d":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("bfc3");
var defined = __webpack_require__("11f8");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "a34d":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__("e248");

$export($export.S, 'Math', { sign: __webpack_require__("4715") });


/***/ }),

/***/ "a733":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("7814");
var createDesc = __webpack_require__("13a6");
module.exports = __webpack_require__("f4b2") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "a764":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__("e248");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "aa8b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("e248");
var aFunction = __webpack_require__("4fac");
var toObject = __webpack_require__("440e");
var fails = __webpack_require__("6dbe");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("526e")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "aecb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("730f");
var $export = __webpack_require__("e248");
var toObject = __webpack_require__("440e");
var call = __webpack_require__("65bd");
var isArrayIter = __webpack_require__("6871");
var toLength = __webpack_require__("7ac1");
var createProperty = __webpack_require__("4253");
var getIterFn = __webpack_require__("b0de");

$export($export.S + $export.F * !__webpack_require__("7576")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "b0c9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("9c6d")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("148e")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "b0de":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("9339");
var ITERATOR = __webpack_require__("4d5e")('iterator');
var Iterators = __webpack_require__("1bc7");
module.exports = __webpack_require__("95f3").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "b24d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("e248");
var context = __webpack_require__("0787");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("3996")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "b34d":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("b87a");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "b7d1":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("bfb5").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "b7f1":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("f4b2") && /./g.flags != 'g') __webpack_require__("7814").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("f153")
});


/***/ }),

/***/ "b87a":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "bfb5":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "bfc3":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "c58f":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("f2db");
var createDesc = __webpack_require__("13a6");
var toIObject = __webpack_require__("4299");
var toPrimitive = __webpack_require__("b34d");
var has = __webpack_require__("f41c");
var IE8_DOM_DEFINE = __webpack_require__("2eab");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("f4b2") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c685":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "caa9":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("f41c");
var toObject = __webpack_require__("440e");
var IE_PROTO = __webpack_require__("3ff1")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "d448":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("95f3");
var global = __webpack_require__("bfb5");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("209e") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dc5e":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("3517")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "e080":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("bfc3");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "e248":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("bfb5");
var core = __webpack_require__("95f3");
var hide = __webpack_require__("a733");
var redefine = __webpack_require__("0b9e");
var ctx = __webpack_require__("730f");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "e8da":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("3517")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("666a");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "ea4f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("7814");
var anObject = __webpack_require__("3403");
var getKeys = __webpack_require__("5ee6");

module.exports = __webpack_require__("f4b2") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "ee93":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("e248");
var fails = __webpack_require__("6dbe");
var defined = __webpack_require__("11f8");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "f153":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("3403");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "f2db":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "f41c":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "f4b2":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("6dbe")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "f58a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b7f1");
var anObject = __webpack_require__("3403");
var $flags = __webpack_require__("f153");
var DESCRIPTORS = __webpack_require__("f4b2");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("0b9e")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("6dbe")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "f8db":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b87a");
var setPrototypeOf = __webpack_require__("3b4d").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "fe46":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });