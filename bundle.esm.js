import ReactDOM from 'react-dom/client';
import Stream from 'stream';
import http$2 from 'http';
import Url from 'url';
import require$$0$1 from 'punycode';
import https$1 from 'https';
import zlib$1 from 'zlib';
import require$$0$2 from 'events';
import require$$3 from 'net';
import require$$4 from 'tls';
import require$$5 from 'crypto';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign;
}

var react = {exports: {}};

var react_production_min = {};

/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l = requireObjectAssign(),
    n = 60103,
    p = 60106;
  react_production_min.Fragment = 60107;
  react_production_min.StrictMode = 60108;
  react_production_min.Profiler = 60114;
  var q = 60109,
    r = 60110,
    t = 60112;
  react_production_min.Suspense = 60113;
  var u = 60115,
    v = 60116;
  if ("function" === typeof Symbol && Symbol.for) {
    var w = Symbol.for;
    n = w("react.element");
    p = w("react.portal");
    react_production_min.Fragment = w("react.fragment");
    react_production_min.StrictMode = w("react.strict_mode");
    react_production_min.Profiler = w("react.profiler");
    q = w("react.provider");
    r = w("react.context");
    t = w("react.forward_ref");
    react_production_min.Suspense = w("react.suspense");
    u = w("react.memo");
    v = w("react.lazy");
  }
  var x = "function" === typeof Symbol && Symbol.iterator;
  function y(a) {
    if (null === a || "object" !== typeof a) return null;
    a = x && a[x] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  function z(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    B = {};
  function C(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B;
    this.updater = c || A;
  }
  C.prototype.isReactComponent = {};
  C.prototype.setState = function (a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  C.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function D() {}
  D.prototype = C.prototype;
  function E(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B;
    this.updater = c || A;
  }
  var F = E.prototype = new D();
  F.constructor = E;
  l(F, C.prototype);
  F.isPureReactComponent = !0;
  var G = {
      current: null
    },
    H = Object.prototype.hasOwnProperty,
    I = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function J(a, b, c) {
    var e,
      d = {},
      k = null,
      h = null;
    if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
    var g = arguments.length - 2;
    if (1 === g) d.children = c;else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      d.children = f;
    }
    if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
    return {
      $$typeof: n,
      type: a,
      key: k,
      ref: h,
      props: d,
      _owner: G.current
    };
  }
  function K(a, b) {
    return {
      $$typeof: n,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    };
  }
  function L(a) {
    return "object" === typeof a && null !== a && a.$$typeof === n;
  }
  function escape(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function (a) {
      return b[a];
    });
  }
  var M = /\/+/g;
  function N(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }
  function O(a, b, c, e, d) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;else switch (k) {
      case "string":
      case "number":
        h = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case n:
          case p:
            h = !0;
        }
    }
    if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
      return a;
    })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
    h = 0;
    e = "" === e ? "." : e + ":";
    if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = e + N(k, g);
      h += O(k, b, c, f, d);
    } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
  }
  function P(a, b, c) {
    if (null == a) return a;
    var e = [],
      d = 0;
    O(a, e, "", "", function (a) {
      return b.call(c, a, d++);
    });
    return e;
  }
  function Q(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      a._status = 0;
      a._result = b;
      b.then(function (b) {
        0 === a._status && (b = b.default, a._status = 1, a._result = b);
      }, function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      });
    }
    if (1 === a._status) return a._result;
    throw a._result;
  }
  var R = {
    current: null
  };
  function S() {
    var a = R.current;
    if (null === a) throw Error(z(321));
    return a;
  }
  var T = {
    ReactCurrentDispatcher: R,
    ReactCurrentBatchConfig: {
      transition: 0
    },
    ReactCurrentOwner: G,
    IsSomeRendererActing: {
      current: !1
    },
    assign: l
  };
  react_production_min.Children = {
    map: P,
    forEach: function (a, b, c) {
      P(a, function () {
        b.apply(this, arguments);
      }, c);
    },
    count: function (a) {
      var b = 0;
      P(a, function () {
        b++;
      });
      return b;
    },
    toArray: function (a) {
      return P(a, function (a) {
        return a;
      }) || [];
    },
    only: function (a) {
      if (!L(a)) throw Error(z(143));
      return a;
    }
  };
  react_production_min.Component = C;
  react_production_min.PureComponent = E;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
  react_production_min.cloneElement = function (a, b, c) {
    if (null === a || void 0 === a) throw Error(z(267, a));
    var e = l({}, a.props),
      d = a.key,
      k = a.ref,
      h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (k = b.ref, h = G.current);
      void 0 !== b.key && (d = "" + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) e.children = c;else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      e.children = g;
    }
    return {
      $$typeof: n,
      type: a.type,
      key: d,
      ref: k,
      props: e,
      _owner: h
    };
  };
  react_production_min.createContext = function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: r,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: q,
      _context: a
    };
    return a.Consumer = a;
  };
  react_production_min.createElement = J;
  react_production_min.createFactory = function (a) {
    var b = J.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function () {
    return {
      current: null
    };
  };
  react_production_min.forwardRef = function (a) {
    return {
      $$typeof: t,
      render: a
    };
  };
  react_production_min.isValidElement = L;
  react_production_min.lazy = function (a) {
    return {
      $$typeof: v,
      _payload: {
        _status: -1,
        _result: a
      },
      _init: Q
    };
  };
  react_production_min.memo = function (a, b) {
    return {
      $$typeof: u,
      type: a,
      compare: void 0 === b ? null : b
    };
  };
  react_production_min.useCallback = function (a, b) {
    return S().useCallback(a, b);
  };
  react_production_min.useContext = function (a, b) {
    return S().useContext(a, b);
  };
  react_production_min.useDebugValue = function () {};
  react_production_min.useEffect = function (a, b) {
    return S().useEffect(a, b);
  };
  react_production_min.useImperativeHandle = function (a, b, c) {
    return S().useImperativeHandle(a, b, c);
  };
  react_production_min.useLayoutEffect = function (a, b) {
    return S().useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function (a, b) {
    return S().useMemo(a, b);
  };
  react_production_min.useReducer = function (a, b, c) {
    return S().useReducer(a, b, c);
  };
  react_production_min.useRef = function (a) {
    return S().useRef(a);
  };
  react_production_min.useState = function (a) {
    return S().useState(a);
  };
  react_production_min.version = "17.0.2";
  return react_production_min;
}

var react_development = {};

/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_development;
function requireReact_development() {
  if (hasRequiredReact_development) return react_development;
  hasRequiredReact_development = 1;
  (function (exports) {

    if (process.env.NODE_ENV !== "production") {
      (function () {

        var _assign = requireObjectAssign();

        // TODO: this is special because it gets imported during build.
        var ReactVersion = '17.0.2';

        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var REACT_ELEMENT_TYPE = 0xeac7;
        var REACT_PORTAL_TYPE = 0xeaca;
        exports.Fragment = 0xeacb;
        exports.StrictMode = 0xeacc;
        exports.Profiler = 0xead2;
        var REACT_PROVIDER_TYPE = 0xeacd;
        var REACT_CONTEXT_TYPE = 0xeace;
        var REACT_FORWARD_REF_TYPE = 0xead0;
        exports.Suspense = 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = 0xead8;
        var REACT_MEMO_TYPE = 0xead3;
        var REACT_LAZY_TYPE = 0xead4;
        var REACT_BLOCK_TYPE = 0xead9;
        var REACT_SERVER_BLOCK_TYPE = 0xeada;
        var REACT_FUNDAMENTAL_TYPE = 0xead5;
        var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
        var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
        if (typeof Symbol === 'function' && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor('react.element');
          REACT_PORTAL_TYPE = symbolFor('react.portal');
          exports.Fragment = symbolFor('react.fragment');
          exports.StrictMode = symbolFor('react.strict_mode');
          exports.Profiler = symbolFor('react.profiler');
          REACT_PROVIDER_TYPE = symbolFor('react.provider');
          REACT_CONTEXT_TYPE = symbolFor('react.context');
          REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
          exports.Suspense = symbolFor('react.suspense');
          REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
          REACT_MEMO_TYPE = symbolFor('react.memo');
          REACT_LAZY_TYPE = symbolFor('react.lazy');
          REACT_BLOCK_TYPE = symbolFor('react.block');
          REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
          REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
          symbolFor('react.scope');
          symbolFor('react.opaque.id');
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
          symbolFor('react.offscreen');
          REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== 'object') {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }
          return null;
        }

        /**
         * Keeps track of the current dispatcher.
         */
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };

        /**
         * Keeps track of the current batch's configuration such as how long an update
         * should suspend for if it needs to.
         */
        var ReactCurrentBatchConfig = {
          transition: 0
        };

        /**
         * Keeps track of the current owner.
         *
         * The current owner is the component who should own any components that are
         * currently being constructed.
         */
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
            {
              currentExtraStackFrame = stack;
            }
          }; // Stack implementation injected by the current renderer.

          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function () {
            var stack = ''; // Add an extra top frame while an element is being validated

            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            } // Delegate to the injected renderer-specific implementation

            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || '';
            }
            return stack;
          };
        }

        /**
         * Used by act() to track whether you're inside an act() scope.
         */
        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher: ReactCurrentDispatcher,
          ReactCurrentBatchConfig: ReactCurrentBatchConfig,
          ReactCurrentOwner: ReactCurrentOwner,
          IsSomeRendererActing: IsSomeRendererActing,
          // Used by renderers to avoid bundling object-assign twice in UMD bundles:
          assign: _assign
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
        }

        // by calls to these methods by a Babel plugin.
        //
        // In PROD (or in packages without access to React internals),
        // they are left as they are instead.

        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning('warn', format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning('error', format, args);
          }
        }
        function printWarning(level, format, args) {
          // When changing this logic, you might want to also
          // update consoleWithStackDev.www.js as well.
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function (item) {
              return '' + item;
            }); // Careful: RN currently depends on this prefix

            argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
            // breaks IE9: https://github.com/facebook/react/issues/13610
            // eslint-disable-next-line react-internal/no-production-logging

            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        /**
         * This is the abstract API for an update queue.
         */

        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function (publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function (publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState');
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function (publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState');
          }
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        /**
         * Base class helpers for the updating state of a component.
         */

        function Component(props, context, updater) {
          this.props = props;
          this.context = context; // If a component has string refs, we will assign a different object later.

          this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
          // renderer.

          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        /**
         * Sets a subset of the state. Always use this to mutate
         * state. You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * There is no guarantee that calls to `setState` will run synchronously,
         * as they may eventually be batched together.  You can provide an optional
         * callback that will be executed when the call to setState is actually
         * completed.
         *
         * When a function is provided to setState, it will be called at some point in
         * the future (not synchronously). It will be called with the up to date
         * component arguments (state, props, context). These values can be different
         * from this.* because your function may be called after receiveProps but before
         * shouldComponentUpdate, and this new state, props, and context will not yet be
         * assigned to this.
         *
         * @param {object|function} partialState Next partial state or function to
         *        produce next partial state to be merged with current state.
         * @param {?function} callback Called after state is updated.
         * @final
         * @protected
         */

        Component.prototype.setState = function (partialState, callback) {
          if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, 'setState');
        };
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {?function} callback Called after update is complete.
         * @final
         * @protected
         */

        Component.prototype.forceUpdate = function (callback) {
          this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        /**
         * Deprecated APIs. These APIs used to exist on classic React classes but since
         * we would like to deprecate them, we're not going to move them over to this
         * modern base class. Instead, we define a getter that warns if it's accessed.
         */

        {
          var deprecatedAPIs = {
            isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
            replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
          };
          var defineDeprecationWarning = function (methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function () {
                warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                return undefined;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        /**
         * Convenience component with default shallow equality check for sCU.
         */

        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context; // If a component has string refs, we will assign a different object later.

          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;

        // an immutable object with a single mutable value
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || '';
          return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || 'Context';
        }
        function getComponentName(type) {
          if (type == null) {
            // Host root, text node or just invalid type.
            return null;
          }
          {
            if (typeof type.tag === 'number') {
              error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
            }
          }
          if (typeof type === 'function') {
            return type.displayName || type.name || null;
          }
          if (typeof type === 'string') {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return 'Fragment';
            case REACT_PORTAL_TYPE:
              return 'Portal';
            case exports.Profiler:
              return 'Profiler';
            case exports.StrictMode:
              return 'StrictMode';
            case exports.Suspense:
              return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
              return 'SuspenseList';
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE:
                {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentName(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, 'ref')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== undefined;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, 'key')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== undefined;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function () {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function () {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        /**
         * Factory method to create a new React element. This no longer adheres to
         * the class pattern, so do not use new to call it. Also, instanceof check
         * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
         * if something is a React Element.
         *
         * @param {*} type
         * @param {*} props
         * @param {*} key
         * @param {string|object} ref
         * @param {*} owner
         * @param {*} self A *temporary* helper to detect places where `this` is
         * different from the `owner` when React.createElement is called, so that we
         * can warn. We want to get rid of owner and replace string `ref`s with arrow
         * functions, and as long as `this` and owner are the same, there will be no
         * change in behavior.
         * @param {*} source An annotation object (added by a transpiler or otherwise)
         * indicating filename, line number, and/or other information.
         * @internal
         */

        var ReactElement = function (type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            // The validation flag is currently mutative. We put it on
            // an external backing store so that we can freeze the whole object.
            // This can be replaced with a WeakMap once they are implemented in
            // commonly used development environments.
            element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
            // the validation flag non-enumerable (where possible, which should
            // include every environment we run tests in), so the test framework
            // ignores it.

            Object.defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            }); // self and source are DEV only properties.

            Object.defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            }); // Two elements created in two different places should be considered
            // equal for testing purposes and therefore we hide it from enumeration.

            Object.defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        /**
         * Create and return a new ReactElement of the given type.
         * See https://reactjs.org/docs/react-api.html#createelement
         */

        function createElement(type, config, children) {
          var propName; // Reserved names are extracted

          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              key = '' + config.key;
            }
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          } // Children can be more than one argument, and those are transferred onto
          // the newly allocated props object.

          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          } // Resolve default props

          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        /**
         * Clone and return a new ReactElement using element as the starting point.
         * See https://reactjs.org/docs/react-api.html#cloneelement
         */

        function cloneElement(element, config, children) {
          if (!!(element === null || element === undefined)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }
          var propName; // Original props are copied

          var props = _assign({}, element.props); // Reserved names are extracted

          var key = element.key;
          var ref = element.ref; // Self is preserved since the owner is preserved.

          var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
          // transpiler, and the original source is probably a better indicator of the
          // true owner.

          var source = element._source; // Owner will be preserved, unless ref is overridden

          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              // Silently steal the ref from the parent.
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = '' + config.key;
            } // Remaining properties override existing props

            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) {
                  // Resolve default props
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          } // Children can be more than one argument, and those are transferred onto
          // the newly allocated props object.

          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        /**
         * Verifies the object is a ReactElement.
         * See https://reactjs.org/docs/react-api.html#isvalidelement
         * @param {?object} object
         * @return {boolean} True if `object` is a ReactElement.
         * @final
         */

        function isValidElement(object) {
          return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = '.';
        var SUBSEPARATOR = ':';
        /**
         * Escape and wrap key so it is safe to use as a reactid
         *
         * @param {string} key to be escaped.
         * @return {string} the escaped key.
         */

        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            '=': '=0',
            ':': '=2'
          };
          var escapedString = key.replace(escapeRegex, function (match) {
            return escaperLookup[match];
          });
          return '$' + escapedString;
        }
        /**
         * TODO: Test that a single child and an array with one item have the same key
         * pattern.
         */

        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, '$&/');
        }
        /**
         * Generate a key string that identifies a element within a set.
         *
         * @param {*} element A element that could contain a manual key.
         * @param {number} index Index that is used if a manual key is not provided.
         * @return {string}
         */

        function getElementKey(element, index) {
          // Do some typechecking here since we call this blindly. We want to ensure
          // that we don't block potential future ES APIs.
          if (typeof element === 'object' && element !== null && element.key != null) {
            // Explicit key
            return escape('' + element.key);
          } // Implicit key determined by the index in the set

          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === 'undefined' || type === 'boolean') {
            // All of the above are perceived as null.
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case 'string':
              case 'number':
                invokeCallback = true;
                break;
              case 'object':
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:

            var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
              var escapedChildKey = '';
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + '/';
              }
              mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                mappedChild = cloneAndReplaceKey(mappedChild,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                escapedPrefix + (
                // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                mappedChild.key && (!_child || _child.key !== mappedChild.key) ?
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0; // Count of children found in the current subtree.

          var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
              var iterableChildren = children;
              {
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === 'object') {
              var childrenString = '' + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                }
              }
            }
          }
          return subtreeCount;
        }

        /**
         * Maps children that are typically specified as `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenmap
         *
         * The provided mapFunction(child, index) will be called for each
         * leaf child.
         *
         * @param {?*} children Children tree container.
         * @param {function(*, int)} func The map function.
         * @param {*} context Context for mapFunction.
         * @return {object} Object containing the ordered map of results.
         */
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, '', '', function (child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        /**
         * Count the number of children that are typically specified as
         * `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrencount
         *
         * @param {?*} children Children tree container.
         * @return {number} The number of children.
         */

        function countChildren(children) {
          var n = 0;
          mapChildren(children, function () {
            n++; // Don't return anything
          });
          return n;
        }

        /**
         * Iterates through children that are typically specified as `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
         *
         * The provided forEachFunc(child, index) will be called for each
         * leaf child.
         *
         * @param {?*} children Children tree container.
         * @param {function(*, int)} forEachFunc
         * @param {*} forEachContext Context for forEachContext.
         */
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function () {
            forEachFunc.apply(this, arguments); // Don't return anything.
          }, forEachContext);
        }
        /**
         * Flatten a children object (typically specified as `props.children`) and
         * return an array with appropriately re-keyed children.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
         */

        function toArray(children) {
          return mapChildren(children, function (child) {
            return child;
          }) || [];
        }
        /**
         * Returns the first child in a collection of children and verifies that there
         * is only one child in the collection.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenonly
         *
         * The current implementation of this function assumes that a single child gets
         * passed without a wrapper, but the purpose of this helper function is to
         * abstract away the particular structure of children.
         *
         * @param {?object} children Child collection structure.
         * @return {ReactElement} The first and only `ReactElement` contained in the
         * structure.
         */

        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }
          return children;
        }
        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === undefined) {
            calculateChangedBits = null;
          } else {
            {
              if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
                error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            // A separate object, but proxies back to the original context object for
            // backwards compatibility. It has a different $$typeof, so we can properly
            // warn for the incorrect usage of Context as a Consumer.
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

            Object.defineProperties(Consumer, {
              Provider: {
                get: function () {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
                  }
                  return context.Provider;
                },
                set: function (_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function () {
                  return context._currentValue;
                },
                set: function (_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function () {
                  return context._currentValue2;
                },
                set: function (_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function () {
                  return context._threadCount;
                },
                set: function (_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function () {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function () {
                  return context.displayName;
                },
                set: function (displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.

            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(function (moduleObject) {
              if (payload._status === Pending) {
                var defaultExport = moduleObject.default;
                {
                  if (defaultExport === undefined) {
                    error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
                    // Break up imports to avoid accidentally parsing them as dependencies.
                    'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
                  }
                } // Transition to the next state.

                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = defaultExport;
              }
            }, function (error) {
              if (payload._status === Pending) {
                // Transition to the next state.
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error;
              }
            });
          }
          if (payload._status === Resolved) {
            return payload._result;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: -1,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            // In production, this would just set it on the object.
            var defaultProps;
            var propTypes; // $FlowFixMe

            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function () {
                  return defaultProps;
                },
                set: function (newDefaultProps) {
                  error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                  defaultProps = newDefaultProps; // Match production behavior more closely:
                  // $FlowFixMe

                  Object.defineProperty(lazyType, 'defaultProps', {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function () {
                  return propTypes;
                },
                set: function (newPropTypes) {
                  error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                  propTypes = newPropTypes; // Match production behavior more closely:
                  // $FlowFixMe

                  Object.defineProperty(lazyType, 'propTypes', {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
            } else if (typeof render !== 'function') {
              error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
          };
          {
            var ownName;
            Object.defineProperty(elementType, 'displayName', {
              enumerable: false,
              configurable: true,
              get: function () {
                return ownName;
              },
              set: function (name) {
                ownName = name;
                if (render.displayName == null) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }

        // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

        var enableScopeAPI = false; // Experimental Create Event Handle API.

        function isValidElementType(type) {
          if (typeof type === 'string' || typeof type === 'function') {
            return true;
          } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

          if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, 'displayName', {
              enumerable: false,
              configurable: true,
              get: function () {
                return ownName;
              },
              set: function (name) {
                ownName = name;
                if (type.displayName == null) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== undefined) {
              error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
            } // TODO: add a more generic warning for invalid values.

            if (Context._context !== undefined) {
              var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
              // and nobody should be using this in existing code.

              if (realContext.Consumer === Context) {
                error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
              } else if (realContext.Provider === Context) {
                error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }

        // Helpers to patch console.logs to avoid logging during side-effect free
        // replaying on render function. This currently only patches the object
        // lazily which won't cover if the log function was extracted eagerly.
        // We could also eagerly patch the method.
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              /* eslint-disable react-internal/no-production-logging */
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              }; // $FlowFixMe Flow thinks console is immutable.

              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
              /* eslint-enable react-internal/no-production-logging */
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              /* eslint-disable react-internal/no-production-logging */
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              }; // $FlowFixMe Flow thinks console is immutable.

              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
              /* eslint-enable react-internal/no-production-logging */
            }
            if (disabledDepth < 0) {
              error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === undefined) {
              // Extract the VM specific prefix used by each line.
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || '';
              }
            } // We use the prefix to ensure our stacks line up with native stack frames.

            return '\n' + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          // If something asked for a stack inside a fake render, it should get ignored.
          if (!fn || reentry) {
            return '';
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== undefined) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

          Error.prepareStackTrace = undefined;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
            // for warnings.

            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            // This should throw.
            if (construct) {
              // Something should be setting the props in the constructor.
              var Fake = function () {
                throw Error();
              }; // $FlowFixMe

              Object.defineProperty(Fake.prototype, 'props', {
                set: function () {
                  // We use a throwing setter instead of frozen or non-writable props
                  // because that won't throw in a non-strict mode function.
                  throw Error();
                }
              });
              if (typeof Reflect === 'object' && Reflect.construct) {
                // We construct a different control for this case to include any extra
                // frames added by the construct call.
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
              // This extracts the first frame from the sample that isn't also in the control.
              // Skipping one frame that we assume is the frame that calls the two.
              var sampleLines = sample.stack.split('\n');
              var controlLines = control.stack.split('\n');
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                // We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                // Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                  // In V8, the first line is describing the message but other VMs don't.
                  // If we're about to return the first line, and the control is also on the same
                  // line, that's a pretty good indicator that our sample threw at same line as
                  // the control. I.e. before we entered the sample frame. So we ignore this result.
                  // This can happen if you passed a class to function component, or non-function.
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--; // We may still have similar intermediate frames from the construct call.
                      // The next one that isn't the same should be our match though.

                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                        {
                          if (typeof fn === 'function') {
                            componentFrameCache.set(fn, _frame);
                          }
                        } // Return the line we found.

                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          } // Fallback to just using the name if we couldn't make it throw.

          var name = fn ? fn.displayName || fn.name : '';
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
          {
            if (typeof fn === 'function') {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return '';
          }
          if (typeof type === 'function') {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === 'string') {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case exports.Suspense:
              return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame('SuspenseList');
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE:
                {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {}
                }
            }
          }
          return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            // $FlowFixMe This is okay but Flow doesn't know it.
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.

                try {
                  // This is intentionally an invariant that gets caught. It's the same
                  // behavior as without this statement except with a better message.
                  if (typeof typeSpecs[typeSpecName] !== 'function') {
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  // Only monitor this failure once because there tends to be a lot of the
                  // same error.
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error('Failed %s type: %s', location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return '\n\nCheck the render method of `' + name + '`.';
            }
          }
          return '';
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
          }
          return '';
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== undefined) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return '';
        }
        /**
         * Warn if there's no key explicitly set on dynamic arrays of children or
         * object keys are not valid. This allows us to keep track of children between
         * updates.
         */

        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        /**
         * Warn if the element doesn't have an explicit key assigned to it.
         * This element is in an array. The array could grow and shrink or be
         * reordered. All children that haven't already been validated are required to
         * have a "key" property assigned to it. Error statuses are cached so a warning
         * will only be shown once.
         *
         * @internal
         * @param {ReactElement} element Element that requires a key.
         * @param {*} parentType element's parent's type.
         */

        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
          // property, it may be the creator of the child that's responsible for
          // assigning it a key.

          var childOwner = '';
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            // Give the component that originally created this child.
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        /**
         * Ensure that every element either is passed in a static location, in an
         * array with an explicit keys property defined, or in an object literal
         * with valid key property.
         *
         * @internal
         * @param {ReactNode} node Statically passed child of any type.
         * @param {*} parentType node's parent's type.
         */

        function validateChildKeys(node, parentType) {
          if (typeof node !== 'object') {
            return;
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            // This element was passed in a valid location.
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') {
              // Entry iterators used to provide implicit keys,
              // but now we print a separate warning for them later.
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        /**
         * Given an element, validate that its props follow the propTypes definition,
         * provided by the type.
         *
         * @param {ReactElement} element
         */

        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === undefined || typeof type === 'string') {
              return;
            }
            var propTypes;
            if (typeof type === 'function') {
              propTypes = type.propTypes;
            } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
            // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              // Intentionally inside to avoid triggering lazy initializers:
              var name = getComponentName(type);
              checkPropTypes(propTypes, element.props, 'prop', name, element);
            } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

              var _name = getComponentName(type);
              error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
            }
            if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
              error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
            }
          }
        }
        /**
         * Given a fragment, validate that it can only be provided with fragment props
         * @param {ReactElement} fragment
         */

        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid attribute `ref` supplied to `React.Fragment`.');
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
          // succeed and there will likely be errors in render.

          if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = 'null';
            } else if (Array.isArray(type)) {
              typeString = 'array';
            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
              info = ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = typeof type;
            }
            {
              error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
            }
          }
          var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
          // TODO: Drop this when these are no longer allowed as the type argument.

          if (element == null) {
            return element;
          } // Skip key warning if the type isn't valid since our key validation logic
          // doesn't expect a non-string/function type and can throw confusing errors.
          // We don't want exception behavior to differ between dev and prod.
          // (Rendering will throw with a helpful message and as soon as the type is
          // fixed, the key warnings will appear.)

          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
            } // Legacy hook: remove it

            Object.defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get: function () {
                warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
                Object.defineProperty(this, 'type', {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            /* eslint-disable no-new */

            new Map([[frozenObject, null]]);
            new Set([frozenObject]);
            /* eslint-enable no-new */
          } catch (e) {}
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray: toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.PureComponent = PureComponent;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.version = ReactVersion;
      })();
    }
  })(react_development);
  return react_development;
}

if (process.env.NODE_ENV === 'production') {
  react.exports = requireReact_production_min();
} else {
  react.exports = requireReact_development();
}
var reactExports = react.exports;
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  requireObjectAssign();
  var f = reactExports,
    g = 60103;
  reactJsxRuntime_production_min.Fragment = 60107;
  if ("function" === typeof Symbol && Symbol.for) {
    var h = Symbol.for;
    g = h("react.element");
    reactJsxRuntime_production_min.Fragment = h("react.fragment");
  }
  var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = Object.prototype.hasOwnProperty,
    p = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function q(c, a, k) {
    var b,
      d = {},
      e = null,
      l = null;
    void 0 !== k && (e = "" + k);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (l = a.ref);
    for (b in a) n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return {
      $$typeof: g,
      type: c,
      key: e,
      ref: l,
      props: d,
      _owner: m.current
    };
  }
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  (function (exports) {

    if (process.env.NODE_ENV !== "production") {
      (function () {

        var React = reactExports;
        var _assign = requireObjectAssign();

        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var REACT_ELEMENT_TYPE = 0xeac7;
        var REACT_PORTAL_TYPE = 0xeaca;
        exports.Fragment = 0xeacb;
        var REACT_STRICT_MODE_TYPE = 0xeacc;
        var REACT_PROFILER_TYPE = 0xead2;
        var REACT_PROVIDER_TYPE = 0xeacd;
        var REACT_CONTEXT_TYPE = 0xeace;
        var REACT_FORWARD_REF_TYPE = 0xead0;
        var REACT_SUSPENSE_TYPE = 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = 0xead8;
        var REACT_MEMO_TYPE = 0xead3;
        var REACT_LAZY_TYPE = 0xead4;
        var REACT_BLOCK_TYPE = 0xead9;
        var REACT_SERVER_BLOCK_TYPE = 0xeada;
        var REACT_FUNDAMENTAL_TYPE = 0xead5;
        var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
        var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
        if (typeof Symbol === 'function' && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor('react.element');
          REACT_PORTAL_TYPE = symbolFor('react.portal');
          exports.Fragment = symbolFor('react.fragment');
          REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
          REACT_PROFILER_TYPE = symbolFor('react.profiler');
          REACT_PROVIDER_TYPE = symbolFor('react.provider');
          REACT_CONTEXT_TYPE = symbolFor('react.context');
          REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
          REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
          REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
          REACT_MEMO_TYPE = symbolFor('react.memo');
          REACT_LAZY_TYPE = symbolFor('react.lazy');
          REACT_BLOCK_TYPE = symbolFor('react.block');
          REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
          REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
          symbolFor('react.scope');
          symbolFor('react.opaque.id');
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
          symbolFor('react.offscreen');
          REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== 'object') {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning('error', format, args);
          }
        }
        function printWarning(level, format, args) {
          // When changing this logic, you might want to also
          // update consoleWithStackDev.www.js as well.
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function (item) {
              return '' + item;
            }); // Careful: RN currently depends on this prefix

            argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
            // breaks IE9: https://github.com/facebook/react/issues/13610
            // eslint-disable-next-line react-internal/no-production-logging

            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }

        // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

        var enableScopeAPI = false; // Experimental Create Event Handle API.

        function isValidElementType(type) {
          if (typeof type === 'string' || typeof type === 'function') {
            return true;
          } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

          if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || '';
          return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || 'Context';
        }
        function getComponentName(type) {
          if (type == null) {
            // Host root, text node or just invalid type.
            return null;
          }
          {
            if (typeof type.tag === 'number') {
              error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
            }
          }
          if (typeof type === 'function') {
            return type.displayName || type.name || null;
          }
          if (typeof type === 'string') {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return 'Fragment';
            case REACT_PORTAL_TYPE:
              return 'Portal';
            case REACT_PROFILER_TYPE:
              return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
              return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
              return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
              return 'SuspenseList';
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE:
                {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentName(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
            }
          }
          return null;
        }

        // Helpers to patch console.logs to avoid logging during side-effect free
        // replaying on render function. This currently only patches the object
        // lazily which won't cover if the log function was extracted eagerly.
        // We could also eagerly patch the method.
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              /* eslint-disable react-internal/no-production-logging */
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              }; // $FlowFixMe Flow thinks console is immutable.

              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
              /* eslint-enable react-internal/no-production-logging */
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              /* eslint-disable react-internal/no-production-logging */
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              }; // $FlowFixMe Flow thinks console is immutable.

              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
              /* eslint-enable react-internal/no-production-logging */
            }
            if (disabledDepth < 0) {
              error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === undefined) {
              // Extract the VM specific prefix used by each line.
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || '';
              }
            } // We use the prefix to ensure our stacks line up with native stack frames.

            return '\n' + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          // If something asked for a stack inside a fake render, it should get ignored.
          if (!fn || reentry) {
            return '';
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== undefined) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

          Error.prepareStackTrace = undefined;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
            // for warnings.

            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            // This should throw.
            if (construct) {
              // Something should be setting the props in the constructor.
              var Fake = function () {
                throw Error();
              }; // $FlowFixMe

              Object.defineProperty(Fake.prototype, 'props', {
                set: function () {
                  // We use a throwing setter instead of frozen or non-writable props
                  // because that won't throw in a non-strict mode function.
                  throw Error();
                }
              });
              if (typeof Reflect === 'object' && Reflect.construct) {
                // We construct a different control for this case to include any extra
                // frames added by the construct call.
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
              // This extracts the first frame from the sample that isn't also in the control.
              // Skipping one frame that we assume is the frame that calls the two.
              var sampleLines = sample.stack.split('\n');
              var controlLines = control.stack.split('\n');
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                // We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                // Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                  // In V8, the first line is describing the message but other VMs don't.
                  // If we're about to return the first line, and the control is also on the same
                  // line, that's a pretty good indicator that our sample threw at same line as
                  // the control. I.e. before we entered the sample frame. So we ignore this result.
                  // This can happen if you passed a class to function component, or non-function.
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--; // We may still have similar intermediate frames from the construct call.
                      // The next one that isn't the same should be our match though.

                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                        {
                          if (typeof fn === 'function') {
                            componentFrameCache.set(fn, _frame);
                          }
                        } // Return the line we found.

                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          } // Fallback to just using the name if we couldn't make it throw.

          var name = fn ? fn.displayName || fn.name : '';
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
          {
            if (typeof fn === 'function') {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return '';
          }
          if (typeof type === 'function') {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === 'string') {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame('SuspenseList');
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE:
                {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {}
                }
            }
          }
          return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            // $FlowFixMe This is okay but Flow doesn't know it.
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.

                try {
                  // This is intentionally an invariant that gets caught. It's the same
                  // behavior as without this statement except with a better message.
                  if (typeof typeSpecs[typeSpecName] !== 'function') {
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  // Only monitor this failure once because there tends to be a lot of the
                  // same error.
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error('Failed %s type: %s', location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, 'ref')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== undefined;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, 'key')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== undefined;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function () {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, 'key', {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function () {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, 'ref', {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        /**
         * Factory method to create a new React element. This no longer adheres to
         * the class pattern, so do not use new to call it. Also, instanceof check
         * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
         * if something is a React Element.
         *
         * @param {*} type
         * @param {*} props
         * @param {*} key
         * @param {string|object} ref
         * @param {*} owner
         * @param {*} self A *temporary* helper to detect places where `this` is
         * different from the `owner` when React.createElement is called, so that we
         * can warn. We want to get rid of owner and replace string `ref`s with arrow
         * functions, and as long as `this` and owner are the same, there will be no
         * change in behavior.
         * @param {*} source An annotation object (added by a transpiler or otherwise)
         * indicating filename, line number, and/or other information.
         * @internal
         */

        var ReactElement = function (type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            // The validation flag is currently mutative. We put it on
            // an external backing store so that we can freeze the whole object.
            // This can be replaced with a WeakMap once they are implemented in
            // commonly used development environments.
            element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
            // the validation flag non-enumerable (where possible, which should
            // include every environment we run tests in), so the test framework
            // ignores it.

            Object.defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            }); // self and source are DEV only properties.

            Object.defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            }); // Two elements created in two different places should be considered
            // equal for testing purposes and therefore we hide it from enumeration.

            Object.defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        /**
         * https://github.com/reactjs/rfcs/pull/107
         * @param {*} type
         * @param {object} props
         * @param {string} key
         */

        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName; // Reserved names are extracted

            var props = {};
            var key = null;
            var ref = null; // Currently, key can be spread in as a prop. This causes a potential
            // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
            // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
            // but as an intermediary step, we will use jsxDEV for everything except
            // <div {...props} key="Hi" />, because we aren't currently able to tell if
            // key is explicitly declared to be undefined or not.

            if (maybeKey !== undefined) {
              key = '' + maybeKey;
            }
            if (hasValidKey(config)) {
              key = '' + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            } // Remaining properties are added to a new props object

            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            } // Resolve default props

            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === undefined) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        /**
         * Verifies the object is a ReactElement.
         * See https://reactjs.org/docs/react-api.html#isvalidelement
         * @param {?object} object
         * @return {boolean} True if `object` is a ReactElement.
         * @final
         */

        function isValidElement(object) {
          {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentName(ReactCurrentOwner$1.current.type);
              if (name) {
                return '\n\nCheck the render method of `' + name + '`.';
              }
            }
            return '';
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== undefined) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, '');
              var lineNumber = source.lineNumber;
              return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
            }
            return '';
          }
        }
        /**
         * Warn if there's no key explicitly set on dynamic arrays of children or
         * object keys are not valid. This allows us to keep track of children between
         * updates.
         */

        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        /**
         * Warn if the element doesn't have an explicit key assigned to it.
         * This element is in an array. The array could grow and shrink or be
         * reordered. All children that haven't already been validated are required to
         * have a "key" property assigned to it. Error statuses are cached so a warning
         * will only be shown once.
         *
         * @internal
         * @param {ReactElement} element Element that requires a key.
         * @param {*} parentType element's parent's type.
         */

        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
            // property, it may be the creator of the child that's responsible for
            // assigning it a key.

            var childOwner = '';
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              // Give the component that originally created this child.
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        /**
         * Ensure that every element either is passed in a static location, in an
         * array with an explicit keys property defined, or in an object literal
         * with valid key property.
         *
         * @internal
         * @param {ReactNode} node Statically passed child of any type.
         * @param {*} parentType node's parent's type.
         */

        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== 'object') {
              return;
            }
            if (Array.isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              // This element was passed in a valid location.
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === 'function') {
                // Entry iterators used to provide implicit keys,
                // but now we print a separate warning for them later.
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        /**
         * Given an element, validate that its props follow the propTypes definition,
         * provided by the type.
         *
         * @param {ReactElement} element
         */

        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === undefined || typeof type === 'string') {
              return;
            }
            var propTypes;
            if (typeof type === 'function') {
              propTypes = type.propTypes;
            } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
            // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              // Intentionally inside to avoid triggering lazy initializers:
              var name = getComponentName(type);
              checkPropTypes(propTypes, element.props, 'prop', name, element);
            } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

              var _name = getComponentName(type);
              error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
            }
            if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
              error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
            }
          }
        }
        /**
         * Given a fragment, validate that it can only be provided with fragment props
         * @param {ReactElement} fragment
         */

        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid attribute `ref` supplied to `React.Fragment`.');
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
            // succeed and there will likely be errors in render.

            if (!validType) {
              var info = '';
              if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = 'null';
              } else if (Array.isArray(type)) {
                typeString = 'array';
              } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
              } else {
                typeString = typeof type;
              }
              error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
            // TODO: Drop this when these are no longer allowed as the type argument.

            if (element == null) {
              return element;
            } // Skip key warning if the type isn't valid since our key validation logic
            // doesn't expect a non-string/function type and can throw confusing errors.
            // We don't want exception behavior to differ between dev and prod.
            // (Rendering will throw with a helpful message and as soon as the type is
            // fixed, the key warnings will appear.)

            if (validType) {
              var children = props.children;
              if (children !== undefined) {
                if (isStaticChildren) {
                  if (Array.isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === exports.Fragment) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        } // These two functions exist to still get child warnings in dev
        // even with the prod transform. This means that jsxDEV is purely
        // opt-in behavior for better messages but that we won't stop
        // giving you warnings if you use production apis.

        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
        // for now we can ship identical prod functions

        var jsxs = jsxWithValidationStatic;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  })(reactJsxRuntime_development);
  return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}
var jsxRuntimeExports = jsxRuntime.exports;

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n";
styleInject(css_248z$1);

var MessageContractABI = [
	{
		inputs: [
		],
		name: "getMessage",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_message",
				type: "string"
			}
		],
		name: "setMessage",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter$E(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
// Response error
const ERR_RESPONSE = 100;
const ERR_INVALID_RESPONSE = 101;
const ERR_FORMATTERS = 201;
const ERR_METHOD_NOT_IMPLEMENTED = 202;
const ERR_OPERATION_TIMEOUT = 203;
const ERR_OPERATION_ABORT = 204;
const ERR_ABI_ENCODING = 205;
const ERR_EXISTING_PLUGIN_NAMESPACE = 206;
const ERR_INVALID_METHOD_PARAMS = 207;
// Contract error codes
const ERR_CONTRACT = 300;
const ERR_CONTRACT_RESOLVER_MISSING = 301;
const ERR_CONTRACT_EXECUTION_REVERTED = 310;
const ERR_CONTRACT_TX_DATA_AND_INPUT = 311;
// Transaction error codes
const ERR_TX = 400;
const ERR_TX_REVERT_TRANSACTION = 402;
const ERR_TX_REVERT_WITHOUT_REASON = 405;
const ERR_RAW_TX_UNDEFINED = 407;
const ERR_TX_INVALID_SENDER = 408;
const ERR_TX_MISSING_CUSTOM_CHAIN = 410;
const ERR_TX_MISSING_CUSTOM_CHAIN_ID = 411;
const ERR_TX_CHAIN_ID_MISMATCH = 412;
const ERR_TX_INVALID_CHAIN_INFO = 413;
const ERR_TX_MISSING_CHAIN_INFO = 414;
const ERR_TX_MISSING_GAS = 415;
const ERR_TX_INVALID_LEGACY_GAS = 416;
const ERR_TX_INVALID_FEE_MARKET_GAS = 417;
const ERR_TX_INVALID_FEE_MARKET_GAS_PRICE = 418;
const ERR_TX_INVALID_LEGACY_FEE_MARKET = 419;
const ERR_TX_INVALID_OBJECT = 420;
const ERR_TX_INVALID_NONCE_OR_CHAIN_ID = 421;
const ERR_TX_UNABLE_TO_POPULATE_NONCE = 422;
const ERR_TX_UNSUPPORTED_EIP_1559 = 423;
const ERR_TX_UNSUPPORTED_TYPE = 424;
const ERR_TX_DATA_AND_INPUT = 425;
const ERR_TX_POLLING_TIMEOUT = 426;
const ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL = 427;
const ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER = 428;
const ERR_TX_LOCAL_WALLET_NOT_AVAILABLE = 429;
const ERR_TX_NOT_FOUND = 430;
const ERR_TX_SEND_TIMEOUT = 431;
const ERR_TX_BLOCK_TIMEOUT = 432;
const ERR_TX_SIGNING = 433;
const ERR_TX_GAS_MISMATCH = 434;
const ERR_TX_CHAIN_MISMATCH = 435;
const ERR_TX_HARDFORK_MISMATCH = 436;
const ERR_TX_INVALID_RECEIVER = 437;
const ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR = 438;
const ERR_TX_INVALID_PROPERTIES_FOR_TYPE = 439;
const ERR_TX_MISSING_GAS_INNER_ERROR = 440;
const ERR_TX_GAS_MISMATCH_INNER_ERROR = 441;
// Connection error codes
const ERR_CONN = 500;
const ERR_CONN_NOT_OPEN = 503;
const ERR_CONN_MAX_ATTEMPTS = 505;
const ERR_CONN_PENDING_REQUESTS = 506;
const ERR_REQ_ALREADY_SENT = 507;
// Provider error codes
const ERR_PROVIDER = 600;
const ERR_INVALID_CLIENT = 602;
const ERR_SUBSCRIPTION = 603;
const ERR_WS_PROVIDER = 604;
// Account error codes
const ERR_PRIVATE_KEY_LENGTH = 701;
const ERR_INVALID_PRIVATE_KEY = 702;
const ERR_UNSUPPORTED_KDF = 703;
const ERR_KEY_DERIVATION_FAIL = 704;
const ERR_KEY_VERSION_UNSUPPORTED = 705;
const ERR_INVALID_PASSWORD = 706;
const ERR_IV_LENGTH = 707;
const ERR_PBKDF2_ITERATIONS = 709;
// Signature error codes
const ERR_SIGNATURE_FAILED = 801;
const ERR_INVALID_SIGNATURE = 802;
// RPC error codes (EIP-1193)
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md#provider-errors
const JSONRPC_ERR_REJECTED_REQUEST = 4001;
const JSONRPC_ERR_UNAUTHORIZED = 4100;
const JSONRPC_ERR_UNSUPPORTED_METHOD = 4200;
const JSONRPC_ERR_DISCONNECTED = 4900;
const JSONRPC_ERR_CHAIN_DISCONNECTED = 4901;
const ERR_ENS_UNSUPPORTED_NETWORK = 902;
const ERR_ENS_NETWORK_NOT_SYNCED = 903;
// Utils error codes
const ERR_INVALID_STRING = 1001;
const ERR_INVALID_BYTES = 1002;
const ERR_INVALID_NUMBER = 1003;
const ERR_INVALID_UNIT = 1004;
const ERR_INVALID_ADDRESS = 1005;
const ERR_INVALID_HEX = 1006;
const ERR_INVALID_BOOLEAN = 1008;
const ERR_INVALID_UNSIGNED_INTEGER = 1009;
const ERR_INVALID_SIZE = 1010;
const ERR_INVALID_LARGE_VALUE = 1011;
const ERR_INVALID_BLOCK = 1012;
const ERR_INVALID_NIBBLE_WIDTH = 1014;
// Validation error codes
const ERR_VALIDATION = 1100;
// Core error codes
const ERR_CORE_HARDFORK_MISMATCH = 1101;
// Schema error codes
const ERR_SCHEMA_FORMAT = 1200;
// RPC error codes (EIP-1474)
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md
const ERR_RPC_INVALID_JSON = -32700;
const ERR_RPC_INVALID_REQUEST = -32600;
const ERR_RPC_INVALID_METHOD = -32601;
const ERR_RPC_INVALID_PARAMS = -32602;
const ERR_RPC_INTERNAL_ERROR = -32603;
const ERR_RPC_INVALID_INPUT = -32000;
const ERR_RPC_MISSING_RESOURCE = -32001;
const ERR_RPC_UNAVAILABLE_RESOURCE = -32002;
const ERR_RPC_TRANSACTION_REJECTED = -32003;
const ERR_RPC_UNSUPPORTED_METHOD = -32004;
const ERR_RPC_LIMIT_EXCEEDED = -32005;
const ERR_RPC_NOT_SUPPORTED = -32006;

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class BaseWeb3Error extends Error {
  constructor(msg, innerError) {
    super(msg);
    this.innerError = innerError;
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(new.target.constructor);
    } else {
      this.stack = new Error().stack;
    }
  }
  static convertToString(value, unquotValue = false) {
    // Using "null" value intentionally for validation
    // eslint-disable-next-line no-null/no-null
    if (value === null || value === undefined) return 'undefined';
    const result = JSON.stringify(value, (_, v) => typeof v === 'bigint' ? v.toString() : v);
    return unquotValue && ['bigint', 'string'].includes(typeof value) ? result.replace(/['\\"]+/g, '') : result;
  }
  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      innerError: this.innerError
    };
  }
}
class InvalidValueError extends BaseWeb3Error {
  constructor(value, msg) {
    super(`Invalid value given "${BaseWeb3Error.convertToString(value, true)}". Error: ${msg}.`);
    this.name = this.constructor.name;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class PrivateKeyLengthError extends BaseWeb3Error {
  constructor() {
    super(`Private key must be 32 bytes.`);
    this.code = ERR_PRIVATE_KEY_LENGTH;
  }
}
class InvalidPrivateKeyError extends BaseWeb3Error {
  constructor() {
    super(`Invalid Private Key, Not a valid string or uint8Array`);
    this.code = ERR_INVALID_PRIVATE_KEY;
  }
}
class InvalidSignatureError extends BaseWeb3Error {
  constructor(errorDetails) {
    super(`"${errorDetails}"`);
    this.code = ERR_INVALID_SIGNATURE;
  }
}
class InvalidKdfError extends BaseWeb3Error {
  constructor() {
    super(`Invalid key derivation function`);
    this.code = ERR_UNSUPPORTED_KDF;
  }
}
class KeyDerivationError extends BaseWeb3Error {
  constructor() {
    super(`Key derivation failed - possibly wrong password`);
    this.code = ERR_KEY_DERIVATION_FAIL;
  }
}
class KeyStoreVersionError extends BaseWeb3Error {
  constructor() {
    super('Unsupported key store version');
    this.code = ERR_KEY_VERSION_UNSUPPORTED;
  }
}
class InvalidPasswordError extends BaseWeb3Error {
  constructor() {
    super('Password cannot be empty');
    this.code = ERR_INVALID_PASSWORD;
  }
}
class IVLengthError extends BaseWeb3Error {
  constructor() {
    super('Initialization vector must be 16 bytes');
    this.code = ERR_IV_LENGTH;
  }
}
class PBKDF2IterationsError extends BaseWeb3Error {
  constructor() {
    super('c > 1000, pbkdf2 is less secure with less iterations');
    this.code = ERR_PBKDF2_ITERATIONS;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class ConnectionError extends BaseWeb3Error {
  constructor(message, event) {
    super(message);
    this.code = ERR_CONN;
    if (event) {
      this.errorCode = event.code;
      this.errorReason = event.reason;
    }
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      errorCode: this.errorCode,
      errorReason: this.errorReason
    });
  }
}
class ConnectionNotOpenError extends ConnectionError {
  constructor(event) {
    super('Connection not open', event);
    this.code = ERR_CONN_NOT_OPEN;
  }
}
class MaxAttemptsReachedOnReconnectingError extends ConnectionError {
  constructor(numberOfAttempts) {
    super(`Maximum number of reconnect attempts reached! (${numberOfAttempts})`);
    this.code = ERR_CONN_MAX_ATTEMPTS;
  }
}
class PendingRequestsOnReconnectingError extends ConnectionError {
  constructor() {
    super('CONNECTION ERROR: Provider started to reconnect before the response got received!');
    this.code = ERR_CONN_PENDING_REQUESTS;
  }
}
class RequestAlreadySentError extends ConnectionError {
  constructor(id) {
    super(`Request already sent with following id: ${id}`);
    this.code = ERR_REQ_ALREADY_SENT;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class Web3ContractError extends BaseWeb3Error {
  constructor(message, receipt) {
    super(message);
    this.code = ERR_CONTRACT;
    this.receipt = receipt;
  }
}
class ResolverMethodMissingError extends BaseWeb3Error {
  constructor(address, name) {
    super(`The resolver at ${address} does not implement requested method: "${name}".`);
    this.address = address;
    this.name = name;
    this.code = ERR_CONTRACT_RESOLVER_MISSING;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      address: this.address,
      name: this.name
    });
  }
}
/**
 * This class is expected to be set as an `innerError` inside ContractExecutionError
 * The properties would be typically decoded from the `data` if it was encoded according to EIP-838
 */
class Eip838ExecutionError extends Web3ContractError {
  constructor(error) {
    super(error.message || 'Error');
    this.name = 'name' in error && error.name || this.constructor.name;
    this.stack = 'stack' in error && error.stack || undefined;
    this.code = error.code;
    // get embedded error details got from some providers like MetaMask
    // and set this.data from the inner error data for easier read.
    // note: the data is a hex string inside either:
    //	 error.data, error.data.data or error.data.originalError.data (https://github.com/web3/web3.js/issues/4454#issuecomment-1485953455)
    if (typeof error.data === 'object') {
      let originalError;
      if ('originalError' in error.data) {
        originalError = error.data.originalError;
      } else {
        // Ganache has no `originalError` sub-object unlike others
        originalError = error.data;
      }
      this.data = originalError.data;
      this.innerError = new Eip838ExecutionError(originalError);
    } else {
      this.data = error.data;
    }
  }
  setDecodedProperties(errorName, errorSignature, errorArgs) {
    this.errorName = errorName;
    this.errorSignature = errorSignature;
    this.errorArgs = errorArgs;
  }
  toJSON() {
    let json = Object.assign(Object.assign({}, super.toJSON()), {
      data: this.data
    });
    if (this.errorName) {
      json = Object.assign(Object.assign({}, json), {
        errorName: this.errorName,
        errorSignature: this.errorSignature,
        errorArgs: this.errorArgs
      });
    }
    return json;
  }
}
/**
 * Used when an error is raised while executing a function inside a smart contract.
 * The data is expected to be encoded according to EIP-848.
 */
class ContractExecutionError extends Web3ContractError {
  constructor(rpcError) {
    super('Error happened while trying to execute a function inside a smart contract');
    this.code = ERR_CONTRACT_EXECUTION_REVERTED;
    this.innerError = new Eip838ExecutionError(rpcError);
  }
}
class ContractTransactionDataAndInputError extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`data: ${(_a = value.data) !== null && _a !== void 0 ? _a : 'undefined'}, input: ${(_b = value.input) !== null && _b !== void 0 ? _b : 'undefined'}`, 'You can\'t have "data" and "input" as properties of a contract at the same time, please use either "data" or "input" instead.');
    this.code = ERR_CONTRACT_TX_DATA_AND_INPUT;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class ENSUnsupportedNetworkError extends BaseWeb3Error {
  constructor(networkType) {
    super(`ENS is not supported on network ${networkType}`);
    this.code = ERR_ENS_UNSUPPORTED_NETWORK;
  }
}
class ENSNetworkNotSyncedError extends BaseWeb3Error {
  constructor() {
    super(`Network not synced`);
    this.code = ERR_ENS_NETWORK_NOT_SYNCED;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class InvalidMethodParamsError extends BaseWeb3Error {
  constructor(hint) {
    super(`Invalid parameters passed. "${typeof hint !== 'undefined' ? hint : ''}"`);
    this.hint = hint;
    this.code = ERR_INVALID_METHOD_PARAMS;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      hint: this.hint
    });
  }
}
class FormatterError extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_FORMATTERS;
  }
}
class MethodNotImplementedError extends BaseWeb3Error {
  constructor() {
    super("The method you're trying to call is not implemented.");
    this.code = ERR_METHOD_NOT_IMPLEMENTED;
  }
}
class OperationTimeoutError extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_OPERATION_TIMEOUT;
  }
}
class OperationAbortError extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_OPERATION_ABORT;
  }
}
class AbiError extends BaseWeb3Error {
  constructor(message, props) {
    super(message);
    this.code = ERR_ABI_ENCODING;
    this.props = props !== null && props !== void 0 ? props : {};
  }
}
class ExistingPluginNamespaceError extends BaseWeb3Error {
  constructor(pluginNamespace) {
    super(`A plugin with the namespace: ${pluginNamespace} has already been registered.`);
    this.code = ERR_EXISTING_PLUGIN_NAMESPACE;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class ProviderError extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_PROVIDER;
  }
}
class InvalidClientError extends BaseWeb3Error {
  constructor(clientUrl) {
    super(`Client URL "${clientUrl}" is invalid.`);
    this.code = ERR_INVALID_CLIENT;
  }
}
class SubscriptionError extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_SUBSCRIPTION;
  }
}
class Web3WSProviderError extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_WS_PROVIDER; // this had duplicate code with generic provider
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class SignatureError extends InvalidValueError {
  constructor() {
    super(...arguments);
    this.code = ERR_SIGNATURE_FAILED;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class TransactionError extends BaseWeb3Error {
  constructor(message, receipt) {
    super(message);
    this.receipt = receipt;
    this.code = ERR_TX;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      receipt: this.receipt
    });
  }
}
class TransactionRevertInstructionError extends BaseWeb3Error {
  constructor(reason, signature, receipt, data) {
    super(`Transaction has been reverted by the EVM${receipt === undefined ? '' : `:\n ${BaseWeb3Error.convertToString(receipt)}`}`);
    this.reason = reason;
    this.signature = signature;
    this.receipt = receipt;
    this.data = data;
    this.code = ERR_TX_REVERT_TRANSACTION;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      reason: this.reason,
      signature: this.signature,
      receipt: this.receipt,
      data: this.data
    });
  }
}
/**
 * This error is used when a transaction to a smart contract fails and
 * a custom user error (https://blog.soliditylang.org/2021/04/21/custom-errors/)
 * is able to be parsed from the revert reason
 */
class TransactionRevertWithCustomError extends TransactionRevertInstructionError {
  constructor(reason, customErrorName, customErrorDecodedSignature, customErrorArguments, signature, receipt, data) {
    super(reason);
    this.reason = reason;
    this.customErrorName = customErrorName;
    this.customErrorDecodedSignature = customErrorDecodedSignature;
    this.customErrorArguments = customErrorArguments;
    this.signature = signature;
    this.receipt = receipt;
    this.data = data;
    this.code = ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      reason: this.reason,
      customErrorName: this.customErrorName,
      customErrorDecodedSignature: this.customErrorDecodedSignature,
      customErrorArguments: this.customErrorArguments,
      signature: this.signature,
      receipt: this.receipt,
      data: this.data
    });
  }
}
class TransactionRevertedWithoutReasonError extends TransactionError {
  constructor(receipt) {
    super(`Transaction has been reverted by the EVM${receipt === undefined ? '' : `:\n ${BaseWeb3Error.convertToString(receipt)}`}`, receipt);
    this.code = ERR_TX_REVERT_WITHOUT_REASON;
  }
}
class UndefinedRawTransactionError extends TransactionError {
  constructor() {
    super(`Raw transaction undefined`);
    this.code = ERR_RAW_TX_UNDEFINED;
  }
}
class TransactionNotFound extends TransactionError {
  constructor() {
    super('Transaction not found');
    this.code = ERR_TX_NOT_FOUND;
  }
}
class InvalidTransactionWithSender extends InvalidValueError {
  constructor(value) {
    super(value, 'invalid transaction with invalid sender');
    this.code = ERR_TX_INVALID_SENDER;
  }
}
class InvalidTransactionWithReceiver extends InvalidValueError {
  constructor(value) {
    super(value, 'invalid transaction with invalid receiver');
    this.code = ERR_TX_INVALID_RECEIVER;
  }
}
class MissingCustomChainError extends InvalidValueError {
  constructor() {
    super('MissingCustomChainError', 'If tx.common is provided it must have tx.common.customChain');
    this.code = ERR_TX_MISSING_CUSTOM_CHAIN;
  }
}
class MissingCustomChainIdError extends InvalidValueError {
  constructor() {
    super('MissingCustomChainIdError', 'If tx.common is provided it must have tx.common.customChain and tx.common.customChain.chainId');
    this.code = ERR_TX_MISSING_CUSTOM_CHAIN_ID;
  }
}
class ChainIdMismatchError extends InvalidValueError {
  constructor(value) {
    super(JSON.stringify(value),
    // https://github.com/ChainSafe/web3.js/blob/8783f4d64e424456bdc53b34ef1142d0a7cee4d7/packages/web3-eth-accounts/src/index.js#L176
    'Chain Id doesnt match in tx.chainId tx.common.customChain.chainId');
    this.code = ERR_TX_CHAIN_ID_MISMATCH;
  }
}
class ChainMismatchError extends InvalidValueError {
  constructor(value) {
    super(JSON.stringify(value), 'Chain doesnt match in tx.chain tx.common.basechain');
    this.code = ERR_TX_CHAIN_MISMATCH;
  }
}
class HardforkMismatchError extends InvalidValueError {
  constructor(value) {
    super(JSON.stringify(value), 'hardfork doesnt match in tx.hardfork tx.common.hardfork');
    this.code = ERR_TX_HARDFORK_MISMATCH;
  }
}
class CommonOrChainAndHardforkError extends InvalidValueError {
  constructor() {
    super('CommonOrChainAndHardforkError', 'Please provide the common object or the chain and hardfork property but not all together.');
    this.code = ERR_TX_INVALID_CHAIN_INFO;
  }
}
class MissingChainOrHardforkError extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super('MissingChainOrHardforkError', `When specifying chain and hardfork, both values must be defined. Received "chain": ${(_a = value.chain) !== null && _a !== void 0 ? _a : 'undefined'}, "hardfork": ${(_b = value.hardfork) !== null && _b !== void 0 ? _b : 'undefined'}`);
    this.code = ERR_TX_MISSING_CHAIN_INFO;
  }
}
class MissingGasInnerError extends BaseWeb3Error {
  constructor() {
    super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions');
    this.code = ERR_TX_MISSING_GAS_INNER_ERROR;
  }
}
class MissingGasError extends InvalidValueError {
  constructor(value) {
    var _a, _b, _c, _d;
    super(`gas: ${(_a = value.gas) !== null && _a !== void 0 ? _a : 'undefined'}, gasPrice: ${(_b = value.gasPrice) !== null && _b !== void 0 ? _b : 'undefined'}, maxPriorityFeePerGas: ${(_c = value.maxPriorityFeePerGas) !== null && _c !== void 0 ? _c : 'undefined'}, maxFeePerGas: ${(_d = value.maxFeePerGas) !== null && _d !== void 0 ? _d : 'undefined'}`, '"gas" is missing');
    this.code = ERR_TX_MISSING_GAS;
    this.innerError = new MissingGasInnerError();
  }
}
class TransactionGasMismatchInnerError extends BaseWeb3Error {
  constructor() {
    super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions, not both');
    this.code = ERR_TX_GAS_MISMATCH_INNER_ERROR;
  }
}
class TransactionGasMismatchError extends InvalidValueError {
  constructor(value) {
    var _a, _b, _c, _d;
    super(`gas: ${(_a = value.gas) !== null && _a !== void 0 ? _a : 'undefined'}, gasPrice: ${(_b = value.gasPrice) !== null && _b !== void 0 ? _b : 'undefined'}, maxPriorityFeePerGas: ${(_c = value.maxPriorityFeePerGas) !== null && _c !== void 0 ? _c : 'undefined'}, maxFeePerGas: ${(_d = value.maxFeePerGas) !== null && _d !== void 0 ? _d : 'undefined'}`, 'transaction must specify legacy or fee market gas properties, not both');
    this.code = ERR_TX_GAS_MISMATCH;
    this.innerError = new TransactionGasMismatchInnerError();
  }
}
class InvalidGasOrGasPrice extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`gas: ${(_a = value.gas) !== null && _a !== void 0 ? _a : 'undefined'}, gasPrice: ${(_b = value.gasPrice) !== null && _b !== void 0 ? _b : 'undefined'}`, 'Gas or gasPrice is lower than 0');
    this.code = ERR_TX_INVALID_LEGACY_GAS;
  }
}
class InvalidMaxPriorityFeePerGasOrMaxFeePerGas extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`maxPriorityFeePerGas: ${(_a = value.maxPriorityFeePerGas) !== null && _a !== void 0 ? _a : 'undefined'}, maxFeePerGas: ${(_b = value.maxFeePerGas) !== null && _b !== void 0 ? _b : 'undefined'}`, 'maxPriorityFeePerGas or maxFeePerGas is lower than 0');
    this.code = ERR_TX_INVALID_FEE_MARKET_GAS;
  }
}
class Eip1559GasPriceError extends InvalidValueError {
  constructor(value) {
    super(value, "eip-1559 transactions don't support gasPrice");
    this.code = ERR_TX_INVALID_FEE_MARKET_GAS_PRICE;
  }
}
class UnsupportedFeeMarketError extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`maxPriorityFeePerGas: ${(_a = value.maxPriorityFeePerGas) !== null && _a !== void 0 ? _a : 'undefined'}, maxFeePerGas: ${(_b = value.maxFeePerGas) !== null && _b !== void 0 ? _b : 'undefined'}`, "pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas");
    this.code = ERR_TX_INVALID_LEGACY_FEE_MARKET;
  }
}
class InvalidTransactionObjectError extends InvalidValueError {
  constructor(value) {
    super(value, 'invalid transaction object');
    this.code = ERR_TX_INVALID_OBJECT;
  }
}
class InvalidNonceOrChainIdError extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`nonce: ${(_a = value.nonce) !== null && _a !== void 0 ? _a : 'undefined'}, chainId: ${(_b = value.chainId) !== null && _b !== void 0 ? _b : 'undefined'}`, 'Nonce or chainId is lower than 0');
    this.code = ERR_TX_INVALID_NONCE_OR_CHAIN_ID;
  }
}
class UnableToPopulateNonceError extends InvalidValueError {
  constructor() {
    super('UnableToPopulateNonceError', 'unable to populate nonce, no from address available');
    this.code = ERR_TX_UNABLE_TO_POPULATE_NONCE;
  }
}
class Eip1559NotSupportedError extends InvalidValueError {
  constructor() {
    super('Eip1559NotSupportedError', "Network doesn't support eip-1559");
    this.code = ERR_TX_UNSUPPORTED_EIP_1559;
  }
}
class UnsupportedTransactionTypeError extends InvalidValueError {
  constructor(value) {
    super(value, 'unsupported transaction type');
    this.code = ERR_TX_UNSUPPORTED_TYPE;
  }
}
class TransactionDataAndInputError extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`data: ${(_a = value.data) !== null && _a !== void 0 ? _a : 'undefined'}, input: ${(_b = value.input) !== null && _b !== void 0 ? _b : 'undefined'}`, 'You can\'t have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.');
    this.code = ERR_TX_DATA_AND_INPUT;
  }
}
class TransactionSendTimeoutError extends BaseWeb3Error {
  constructor(value) {
    super(`The connected Ethereum Node did not respond within ${value.numberOfSeconds} seconds, please make sure your transaction was properly sent and you are connected to a healthy Node. Be aware that transaction might still be pending or mined!\n\tTransaction Hash: ${value.transactionHash ? value.transactionHash.toString() : 'not available'}`);
    this.code = ERR_TX_SEND_TIMEOUT;
  }
}
function transactionTimeoutHint(transactionHash) {
  return `Please make sure your transaction was properly sent and there are no previous pending transaction for the same account. However, be aware that it might still be mined!\n\tTransaction Hash: ${transactionHash ? transactionHash.toString() : 'not available'}`;
}
class TransactionPollingTimeoutError extends BaseWeb3Error {
  constructor(value) {
    super(`Transaction was not mined within ${value.numberOfSeconds} seconds. ${transactionTimeoutHint(value.transactionHash)}`);
    this.code = ERR_TX_POLLING_TIMEOUT;
  }
}
class TransactionBlockTimeoutError extends BaseWeb3Error {
  constructor(value) {
    super(`Transaction started at ${value.starterBlockNumber} but was not mined within ${value.numberOfBlocks} blocks. ${transactionTimeoutHint(value.transactionHash)}`);
    this.code = ERR_TX_BLOCK_TIMEOUT;
  }
}
class TransactionMissingReceiptOrBlockHashError extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`receipt: ${JSON.stringify(value.receipt)}, blockHash: ${(_a = value.blockHash) === null || _a === void 0 ? void 0 : _a.toString()}, transactionHash: ${(_b = value.transactionHash) === null || _b === void 0 ? void 0 : _b.toString()}`, `Receipt missing or blockHash null`);
    this.code = ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL;
  }
}
class TransactionReceiptMissingBlockNumberError extends InvalidValueError {
  constructor(value) {
    super(`receipt: ${JSON.stringify(value.receipt)}`, `Receipt missing block number`);
    this.code = ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER;
  }
}
class TransactionSigningError extends BaseWeb3Error {
  constructor(errorDetails) {
    super(`Invalid signature. "${errorDetails}"`);
    this.code = ERR_TX_SIGNING;
  }
}
class LocalWalletNotAvailableError extends InvalidValueError {
  constructor() {
    super('LocalWalletNotAvailableError', `Attempted to index account in local wallet, but no wallet is available`);
    this.code = ERR_TX_LOCAL_WALLET_NOT_AVAILABLE;
  }
}
class InvalidPropertiesForTransactionTypeError extends BaseWeb3Error {
  constructor(validationError, txType) {
    const invalidPropertyNames = [];
    validationError.forEach(error => invalidPropertyNames.push(error.keyword));
    super(`The following properties are invalid for the transaction type ${txType}: ${invalidPropertyNames.join(', ')}`);
    this.code = ERR_TX_INVALID_PROPERTIES_FOR_TYPE;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class InvalidBytesError extends InvalidValueError {
  constructor(value) {
    super(value, 'can not parse as byte data');
    this.code = ERR_INVALID_BYTES;
  }
}
class InvalidNumberError extends InvalidValueError {
  constructor(value) {
    super(value, 'can not parse as number data');
    this.code = ERR_INVALID_NUMBER;
  }
}
class InvalidAddressError extends InvalidValueError {
  constructor(value) {
    super(value, 'invalid ethereum address');
    this.code = ERR_INVALID_ADDRESS;
  }
}
class InvalidStringError extends InvalidValueError {
  constructor(value) {
    super(value, 'not a valid string');
    this.code = ERR_INVALID_STRING;
  }
}
class InvalidUnitError extends InvalidValueError {
  constructor(value) {
    super(value, 'invalid unit');
    this.code = ERR_INVALID_UNIT;
  }
}
class HexProcessingError extends InvalidValueError {
  constructor(value) {
    super(value, 'can not be converted to hex');
    this.code = ERR_INVALID_HEX;
  }
}
class NibbleWidthError extends InvalidValueError {
  constructor(value) {
    super(value, 'value greater than the nibble width');
    this.code = ERR_INVALID_NIBBLE_WIDTH;
  }
}
class InvalidBooleanError extends InvalidValueError {
  constructor(value) {
    super(value, 'not a valid boolean.');
    this.code = ERR_INVALID_BOOLEAN;
  }
}
class InvalidUnsignedIntegerError extends InvalidValueError {
  constructor(value) {
    super(value, 'not a valid unsigned integer.');
    this.code = ERR_INVALID_UNSIGNED_INTEGER;
  }
}
class InvalidSizeError extends InvalidValueError {
  constructor(value) {
    super(value, 'invalid size given.');
    this.code = ERR_INVALID_SIZE;
  }
}
class InvalidLargeValueError extends InvalidValueError {
  constructor(value) {
    super(value, 'value is larger than size.');
    this.code = ERR_INVALID_LARGE_VALUE;
  }
}
class InvalidBlockError extends InvalidValueError {
  constructor(value) {
    super(value, 'invalid string given');
    this.code = ERR_INVALID_BLOCK;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
// To avoid circular package dependency, copied to code here. If you update this please update same function in `json_rpc.ts`
const isResponseWithError$1 = response => !Array.isArray(response) && response.jsonrpc === '2.0' && !!response && (
// eslint-disable-next-line no-null/no-null
response.result === undefined || response.result === null) &&
// JSON RPC consider "null" as valid response
'error' in response && (typeof response.id === 'number' || typeof response.id === 'string');
const buildErrorMessage = response => isResponseWithError$1(response) ? response.error.message : '';
class ResponseError extends BaseWeb3Error {
  constructor(response, message, request) {
    var _a;
    super(message !== null && message !== void 0 ? message : `Returned error: ${Array.isArray(response) ? response.map(r => buildErrorMessage(r)).join(',') : buildErrorMessage(response)}`);
    this.code = ERR_RESPONSE;
    if (!message) {
      this.data = Array.isArray(response) ? response.map(r => {
        var _a;
        return (_a = r.error) === null || _a === void 0 ? void 0 : _a.data;
      }) : (_a = response === null || response === void 0 ? void 0 : response.error) === null || _a === void 0 ? void 0 : _a.data;
    }
    this.request = request;
    let errorOrErrors;
    if (`error` in response) {
      errorOrErrors = response.error;
    } else if (response instanceof Array) {
      errorOrErrors = response.map(r => r.error);
    }
    this.innerError = errorOrErrors;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      data: this.data,
      request: this.request
    });
  }
}
class InvalidResponseError extends ResponseError {
  constructor(result, request) {
    super(result, undefined, request);
    this.code = ERR_INVALID_RESPONSE;
    let errorOrErrors;
    if (`error` in result) {
      errorOrErrors = result.error;
    } else if (result instanceof Array) {
      errorOrErrors = result.map(r => r.error);
    }
    this.innerError = errorOrErrors;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class ConfigHardforkMismatchError extends BaseWeb3Error {
  constructor(defaultHardfork, commonHardFork) {
    super(`Web3Config hardfork doesnt match in defaultHardfork ${defaultHardfork} and common.hardfork ${commonHardFork}`);
    this.code = ERR_CORE_HARDFORK_MISMATCH;
  }
}
class ConfigChainMismatchError extends BaseWeb3Error {
  constructor(defaultHardfork, commonHardFork) {
    super(`Web3Config chain doesnt match in defaultHardfork ${defaultHardfork} and common.hardfork ${commonHardFork}`);
    this.code = ERR_CORE_HARDFORK_MISMATCH;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * A template string for a generic Rpc Error. The `*code*` will be replaced with the code number.
 * Note: consider in next version that a spelling mistake could be corrected for `occured` and the value could be:
 * 	`An Rpc error has occurred with a code of *code*`
 */
const genericRpcErrorMessageTemplate = 'An Rpc error has occured with a code of *code*';
/* eslint-disable @typescript-eslint/naming-convention */
const RpcErrorMessages = {
  //  EIP-1474 & JSON RPC 2.0
  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md
  [ERR_RPC_INVALID_JSON]: {
    message: 'Parse error',
    description: 'Invalid JSON'
  },
  [ERR_RPC_INVALID_REQUEST]: {
    message: 'Invalid request',
    description: 'JSON is not a valid request object	'
  },
  [ERR_RPC_INVALID_METHOD]: {
    message: 'Method not found',
    description: 'Method does not exist	'
  },
  [ERR_RPC_INVALID_PARAMS]: {
    message: 'Invalid params',
    description: 'Invalid method parameters'
  },
  [ERR_RPC_INTERNAL_ERROR]: {
    message: 'Internal error',
    description: 'Internal JSON-RPC error'
  },
  [ERR_RPC_INVALID_INPUT]: {
    message: 'Invalid input',
    description: 'Missing or invalid parameters'
  },
  [ERR_RPC_MISSING_RESOURCE]: {
    message: 'Resource not found',
    description: 'Requested resource not found'
  },
  [ERR_RPC_UNAVAILABLE_RESOURCE]: {
    message: 'Resource unavailable',
    description: 'Requested resource not available'
  },
  [ERR_RPC_TRANSACTION_REJECTED]: {
    message: 'Transaction rejected',
    description: 'Transaction creation failed'
  },
  [ERR_RPC_UNSUPPORTED_METHOD]: {
    message: 'Method not supported',
    description: 'Method is not implemented'
  },
  [ERR_RPC_LIMIT_EXCEEDED]: {
    message: 'Limit exceeded',
    description: 'Request exceeds defined limit'
  },
  [ERR_RPC_NOT_SUPPORTED]: {
    message: 'JSON-RPC version not supported',
    description: 'Version of JSON-RPC protocol is not supported'
  },
  // EIP-1193
  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md#provider-errors
  [JSONRPC_ERR_REJECTED_REQUEST]: {
    name: 'User Rejected Request',
    message: 'The user rejected the request.'
  },
  [JSONRPC_ERR_UNAUTHORIZED]: {
    name: 'Unauthorized',
    message: 'The requested method and/or account has not been authorized by the user.'
  },
  [JSONRPC_ERR_UNSUPPORTED_METHOD]: {
    name: 'Unsupported Method',
    message: 'The Provider does not support the requested method.'
  },
  [JSONRPC_ERR_DISCONNECTED]: {
    name: 'Disconnected',
    message: 'The Provider is disconnected from all chains.'
  },
  [JSONRPC_ERR_CHAIN_DISCONNECTED]: {
    name: 'Chain Disconnected',
    message: 'The Provider is not connected to the requested chain.'
  },
  // EIP-1193 - CloseEvent
  // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
  '0-999': {
    name: '',
    message: 'Not used.'
  },
  1000: {
    name: 'Normal Closure',
    message: 'The connection successfully completed the purpose for which it was created.'
  },
  1001: {
    name: 'Going Away',
    message: 'The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.'
  },
  1002: {
    name: 'Protocol error',
    message: 'The endpoint is terminating the connection due to a protocol error.'
  },
  1003: {
    name: 'Unsupported Data',
    message: 'The connection is being terminated because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)'
  },
  1004: {
    name: 'Reserved',
    message: 'Reserved. A meaning might be defined in the future.'
  },
  1005: {
    name: 'No Status Rcvd',
    message: 'Reserved. Indicates that no status code was provided even though one was expected.'
  },
  1006: {
    name: 'Abnormal Closure',
    message: 'Reserved. Indicates that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected.'
  },
  1007: {
    name: 'Invalid frame payload data',
    message: 'The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message).'
  },
  1008: {
    name: 'Policy Violation',
    message: 'The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable.'
  },
  1009: {
    name: 'Message Too Big',
    message: 'The endpoint is terminating the connection because a data frame was received that is too large.'
  },
  1010: {
    name: 'Mandatory Ext.',
    message: "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."
  },
  1011: {
    name: 'Internal Error',
    message: 'The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.'
  },
  1012: {
    name: 'Service Restart',
    message: 'The server is terminating the connection because it is restarting.'
  },
  1013: {
    name: 'Try Again Later',
    message: 'The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients.'
  },
  1014: {
    name: 'Bad Gateway',
    message: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code.'
  },
  1015: {
    name: 'TLS handshake',
    message: "Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."
  },
  '1016-2999': {
    name: '',
    message: 'For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications.'
  },
  '3000-3999': {
    name: '',
    message: 'For use by libraries, frameworks, and applications. These status codes are registered directly with IANA. The interpretation of these codes is undefined by the WebSocket protocol.'
  },
  '4000-4999': {
    name: '',
    message: "For private use, and thus can't be registered. Such codes can be used by prior agreements between WebSocket applications. The interpretation of these codes is undefined by the WebSocket protocol."
  }
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class RpcError extends BaseWeb3Error {
  constructor(rpcError, message) {
    super(message !== null && message !== void 0 ? message : genericRpcErrorMessageTemplate.replace('*code*', rpcError.error.code.toString()));
    this.code = rpcError.error.code;
    this.id = rpcError.id;
    this.jsonrpc = rpcError.jsonrpc;
    this.jsonRpcError = rpcError.error;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      error: this.jsonRpcError,
      id: this.id,
      jsonRpc: this.jsonrpc
    });
  }
}
class EIP1193ProviderRpcError extends BaseWeb3Error {
  constructor(code, data) {
    var _a, _b, _c, _d;
    if (!code) {
      // this case should ideally not happen
      super();
    } else if ((_a = RpcErrorMessages[code]) === null || _a === void 0 ? void 0 : _a.message) {
      super(RpcErrorMessages[code].message);
    } else {
      // Retrieve the status code object for the given code from the table, by searching through the appropriate range
      const statusCodeRange = Object.keys(RpcErrorMessages).find(statusCode => typeof statusCode === 'string' && code >= parseInt(statusCode.split('-')[0], 10) && code <= parseInt(statusCode.split('-')[1], 10));
      super((_c = (_b = RpcErrorMessages[statusCodeRange !== null && statusCodeRange !== void 0 ? statusCodeRange : '']) === null || _b === void 0 ? void 0 : _b.message) !== null && _c !== void 0 ? _c : genericRpcErrorMessageTemplate.replace('*code*', (_d = code === null || code === void 0 ? void 0 : code.toString()) !== null && _d !== void 0 ? _d : '""'));
    }
    this.code = code;
    this.data = data;
  }
}
class ParseError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INVALID_JSON].message);
    this.code = ERR_RPC_INVALID_JSON;
  }
}
class InvalidRequestError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INVALID_REQUEST].message);
    this.code = ERR_RPC_INVALID_REQUEST;
  }
}
class MethodNotFoundError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INVALID_METHOD].message);
    this.code = ERR_RPC_INVALID_METHOD;
  }
}
class InvalidParamsError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INVALID_PARAMS].message);
    this.code = ERR_RPC_INVALID_PARAMS;
  }
}
class InternalError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INTERNAL_ERROR].message);
    this.code = ERR_RPC_INTERNAL_ERROR;
  }
}
class InvalidInputError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INVALID_INPUT].message);
    this.code = ERR_RPC_INVALID_INPUT;
  }
}
class MethodNotSupported extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_UNSUPPORTED_METHOD].message);
    this.code = ERR_RPC_UNSUPPORTED_METHOD;
  }
}
class ResourceUnavailableError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_UNAVAILABLE_RESOURCE].message);
    this.code = ERR_RPC_UNAVAILABLE_RESOURCE;
  }
}
class ResourcesNotFoundError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_MISSING_RESOURCE].message);
    this.code = ERR_RPC_MISSING_RESOURCE;
  }
}
class VersionNotSupportedError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_NOT_SUPPORTED].message);
    this.code = ERR_RPC_NOT_SUPPORTED;
  }
}
class TransactionRejectedError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_TRANSACTION_REJECTED].message);
    this.code = ERR_RPC_TRANSACTION_REJECTED;
  }
}
class LimitExceededError extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_LIMIT_EXCEEDED].message);
    this.code = ERR_RPC_LIMIT_EXCEEDED;
  }
}
const rpcErrorsMap = new Map();
rpcErrorsMap.set(ERR_RPC_INVALID_JSON, {
  error: ParseError
});
rpcErrorsMap.set(ERR_RPC_INVALID_REQUEST, {
  error: InvalidRequestError
});
rpcErrorsMap.set(ERR_RPC_INVALID_METHOD, {
  error: MethodNotFoundError
});
rpcErrorsMap.set(ERR_RPC_INVALID_PARAMS, {
  error: InvalidParamsError
});
rpcErrorsMap.set(ERR_RPC_INTERNAL_ERROR, {
  error: InternalError
});
rpcErrorsMap.set(ERR_RPC_INVALID_INPUT, {
  error: InvalidInputError
});
rpcErrorsMap.set(ERR_RPC_UNSUPPORTED_METHOD, {
  error: MethodNotSupported
});
rpcErrorsMap.set(ERR_RPC_UNAVAILABLE_RESOURCE, {
  error: ResourceUnavailableError
});
rpcErrorsMap.set(ERR_RPC_TRANSACTION_REJECTED, {
  error: TransactionRejectedError
});
rpcErrorsMap.set(ERR_RPC_MISSING_RESOURCE, {
  error: ResourcesNotFoundError
});
rpcErrorsMap.set(ERR_RPC_NOT_SUPPORTED, {
  error: VersionNotSupportedError
});
rpcErrorsMap.set(ERR_RPC_LIMIT_EXCEEDED, {
  error: LimitExceededError
});

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class SchemaFormatError extends BaseWeb3Error {
  constructor(type) {
    super(`Format for the type ${type} is unsupported`);
    this.type = type;
    this.code = ERR_SCHEMA_FORMAT;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      type: this.type
    });
  }
}

function number(n) {
  if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
  if (typeof b !== 'boolean') throw new Error(`Expected boolean, not ${b}`);
}
// copied from utils
function isBytes$3(a) {
  return a instanceof Uint8Array || a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array';
}
function bytes(b, ...lengths) {
  if (!isBytes$3(b)) throw new Error('Expected Uint8Array');
  if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash) {
  if (typeof hash !== 'function' || typeof hash.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
  number(hash.outputLen);
  number(hash.blockLen);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed) throw new Error('Hash instance has been destroyed');
  if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
const assert = {
  number,
  bool,
  bytes,
  hash,
  exists,
  output
};

const U32_MASK64 = /* @__PURE__ */BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
  if (le) return {
    h: Number(n & U32_MASK64),
    l: Number(n >> _32n & U32_MASK64)
  };
  return {
    h: Number(n >> _32n & U32_MASK64) | 0,
    l: Number(n & U32_MASK64) | 0
  };
}
function split$1(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const {
      h,
      l
    } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
const toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s) => h >>> s;
const shrSL = (h, l, s) => h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => h >>> s | l << 32 - s;
const rotrSL = (h, l, s) => h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l) => l;
const rotr32L = (h, _l) => h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => h << s | l >>> 32 - s;
const rotlSL = (h, l, s) => l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
  const l = (Al >>> 0) + (Bl >>> 0);
  return {
    h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
    l: l | 0
  };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
// prettier-ignore
const u64 = {
  fromBig,
  split: split$1,
  toBig,
  shrSH,
  shrSL,
  rotrSH,
  rotrSL,
  rotrBH,
  rotrBL,
  rotr32H,
  rotr32L,
  rotlSH,
  rotlSL,
  rotlBH,
  rotlBL,
  add,
  add3L,
  add3H,
  add4L,
  add4H,
  add5H,
  add5L
};

const crypto$1 = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;

/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const u32 = arr => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
function isBytes$2(a) {
  return a instanceof Uint8Array || a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array';
}
// Cast array to view
const createView = arr => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift) => word << 32 - shift | word >>> shift;
// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
// Other libraries would silently corrupt the data instead of throwing an error,
// when they don't support it.
const isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
if (!isLE) throw new Error('Non little-endian hardware is not supported');
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes$3(str) {
  if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */
function toBytes$1(data) {
  if (typeof data === 'string') data = utf8ToBytes$3(data);
  if (!isBytes$2(data)) throw new Error(`expected Uint8Array, got ${typeof data}`);
  return data;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes$2(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    if (!isBytes$2(a)) throw new Error('Uint8Array expected');
    sum += a.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const a = arrays[i];
    res.set(a, pad);
    pad += a.length;
  }
  return res;
}
// For runtime check if class implements interface
class Hash {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
const toStr = {}.toString;
function checkOpts(defaults, opts) {
  if (opts !== undefined && toStr.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
  const merged = Object.assign(defaults, opts);
  return merged;
}
function wrapConstructor(hashCons) {
  const hashC = msg => hashCons().update(toBytes$1(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */
function randomBytes$2(bytesLength = 32) {
  if (crypto$1 && typeof crypto$1.getRandomValues === 'function') {
    return crypto$1.getRandomValues(new Uint8Array(bytesLength));
  }
  throw new Error('crypto.getRandomValues must be defined');
}

// SHA3 (keccak) is based on a new design: basically, the internal state is bigger than output size.
// It's called a sponge function.
// Various per round constants calculations
const [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
const _0n$4 = /* @__PURE__ */BigInt(0);
const _1n$5 = /* @__PURE__ */BigInt(1);
const _2n$3 = /* @__PURE__ */BigInt(2);
const _7n = /* @__PURE__ */BigInt(7);
const _256n = /* @__PURE__ */BigInt(256);
const _0x71n = /* @__PURE__ */BigInt(0x71);
for (let round = 0, R = _1n$5, x = 1, y = 0; round < 24; round++) {
  // Pi
  [x, y] = [y, (2 * x + 3 * y) % 5];
  SHA3_PI.push(2 * (5 * y + x));
  // Rotational
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  // Iota
  let t = _0n$4;
  for (let j = 0; j < 7; j++) {
    R = (R << _1n$5 ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n$3) t ^= _1n$5 << (_1n$5 << /* @__PURE__ */BigInt(j)) - _1n$5;
  }
  _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */split$1(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
const rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
// Same as keccakf1600, but allows to skip some rounds
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
  for (let round = 24 - rounds; round < 24; round++) {
    // Theta θ
    for (let x = 0; x < 10; x++) B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    // Rho (ρ) and Pi (π)
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    // Chi (χ)
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++) B[x] = s[y + x];
      for (let x = 0; x < 10; x++) s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    // Iota (ι)
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B.fill(0);
}
class Keccak extends Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    super();
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    this.pos = 0;
    this.posOut = 0;
    this.finished = false;
    this.destroyed = false;
    // Can be passed from user as dkLen
    number(outputLen);
    // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
    if (0 >= this.blockLen || this.blockLen >= 200) throw new Error('Sha3 supports only keccak-f1600 function');
    this.state = new Uint8Array(200);
    this.state32 = u32(this.state);
  }
  keccak() {
    keccakP(this.state32, this.rounds);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    exists(this);
    const {
      blockLen,
      state
    } = this;
    data = toBytes$1(data);
    const len = data.length;
    for (let pos = 0; pos < len;) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i = 0; i < take; i++) state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen) this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const {
      state,
      suffix,
      pos,
      blockLen
    } = this;
    // Do the padding
    state[pos] ^= suffix;
    if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
    state[blockLen - 1] ^= 0x80;
    this.keccak();
  }
  writeInto(out) {
    exists(this, false);
    bytes(out);
    this.finish();
    const bufferOut = this.state;
    const {
      blockLen
    } = this;
    for (let pos = 0, len = out.length; pos < len;) {
      if (this.posOut >= blockLen) this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
    if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
    return this.writeInto(out);
  }
  xof(bytes) {
    number(bytes);
    return this.xofInto(new Uint8Array(bytes));
  }
  digestInto(out) {
    output(out, this);
    if (this.finished) throw new Error('digest() was already called');
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    this.state.fill(0);
  }
  _cloneInto(to) {
    const {
      blockLen,
      suffix,
      outputLen,
      rounds,
      enableXOF
    } = this;
    to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
    to.state32.set(this.state32);
    to.pos = this.pos;
    to.posOut = this.posOut;
    to.finished = this.finished;
    to.rounds = rounds;
    // Suffix can change in cSHAKE
    to.suffix = suffix;
    to.outputLen = outputLen;
    to.enableXOF = enableXOF;
    to.destroyed = this.destroyed;
    return to;
  }
}
const gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
const keccak_224 = /* @__PURE__ */gen(0x01, 144, 224 / 8);
/**
 * keccak-256 hash function. Different from SHA3-256.
 * @param message - that would be hashed
 */
const keccak_256 = /* @__PURE__ */gen(0x01, 136, 256 / 8);
const keccak_384 = /* @__PURE__ */gen(0x01, 104, 384 / 8);
const keccak_512 = /* @__PURE__ */gen(0x01, 72, 512 / 8);

const assertBytes = assert.bytes;
// buf.toString('utf8') -> bytesToUtf8(buf)
function bytesToUtf8(data) {
  if (!(data instanceof Uint8Array)) {
    throw new TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof data}`);
  }
  return new TextDecoder().decode(data);
}
// buf.equals(buf2) -> equalsBytes(buf, buf2)
function equalsBytes(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
// Internal utils
function wrapHash(hash) {
  return msg => {
    assert.bytes(msg);
    return hash(msg);
  };
}
// TODO(v3): switch away from node crypto, remove this unnecessary variable.
(() => {
  const webCrypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : undefined;
  const nodeRequire = typeof module !== "undefined" && typeof module.require === "function" && module.require.bind(module);
  return {
    node: nodeRequire && !webCrypto ? nodeRequire("crypto") : undefined,
    web: webCrypto
  };
})();

wrapHash(keccak_224);
const keccak256 = (() => {
  const k = wrapHash(keccak_256);
  k.create = keccak_256.create;
  return k;
})();
wrapHash(keccak_384);
wrapHash(keccak_512);

var util;
(function (util) {
  util.assertEqual = val => val;
  function assertIs(_arg) {}
  util.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util.assertNever = assertNever;
  util.arrayToEnum = items => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util.getValidEnumValues = obj => {
    const validKeys = util.objectKeys(obj).filter(k => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util.objectValues(filtered);
  };
  util.objectValues = obj => {
    return util.objectKeys(obj).map(function (e) {
      return obj[e];
    });
  };
  util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
  ? obj => Object.keys(obj) // eslint-disable-line ban/ban
  : object => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item)) return item;
    }
    return undefined;
  };
  util.isInteger = typeof Number.isInteger === "function" ? val => Number.isInteger(val) // eslint-disable-line ban/ban
  : val => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map(val => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util.joinValues = joinValues;
  util.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function (objectUtil) {
  objectUtil.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
const getParsedType = data => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
const ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
const quotelessJson = obj => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = sub => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      // eslint-disable-next-line ban/ban
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function (issue) {
      return issue.message;
    };
    const fieldErrors = {
      _errors: []
    };
    const processError = error => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || {
                _errors: []
              };
              // if (typeof el === "string") {
              //   curr[el] = curr[el] || { _errors: [] };
              // } else if (typeof el === "number") {
              //   const errorArray: any = [];
              //   errorArray._errors = [];
              //   curr[el] = curr[el] || errorArray;
              // }
            } else {
              curr[el] = curr[el] || {
                _errors: []
              };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = issue => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return {
      formErrors,
      fieldErrors
    };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = issues => {
  const error = new ZodError(issues);
  return error;
};
const errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;else message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;else message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return {
    message
  };
};
let overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
const makeIssue = params => {
  const {
    data,
    path,
    errorMaps,
    issueData
  } = params;
  const fullPath = [...path, ...(issueData.path || [])];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter(m => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, {
      data,
      defaultError: errorMessage
    }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData: issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap // then global default map
    ].filter(x => !!x)
  });
  ctx.common.issues.push(issue);
}
class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted") return INVALID;
      if (s.status === "dirty") status.dirty();
      arrayValue.push(s.value);
    }
    return {
      status: status.value,
      value: arrayValue
    };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const {
        key,
        value
      } = pair;
      if (key.status === "aborted") return INVALID;
      if (value.status === "aborted") return INVALID;
      if (key.status === "dirty") status.dirty();
      if (value.status === "dirty") status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return {
      status: status.value,
      value: finalObject
    };
  }
}
const INVALID = Object.freeze({
  status: "aborted"
});
const DIRTY = value => ({
  status: "dirty",
  value
});
const OK = value => ({
  status: "valid",
  value
});
const isAborted = x => x.status === "aborted";
const isDirty = x => x.status === "dirty";
const isValid = x => x.status === "valid";
const isAsync = x => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function (errorUtil) {
  errorUtil.errToObj = message => typeof message === "string" ? {
    message
  } : message || {};
  errorUtil.toString = message => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
const handleResult = (ctx, result) => {
  if (isValid(result)) {
    return {
      success: true,
      data: result.value
    };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error) return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params) return {};
  const {
    errorMap,
    invalid_type_error,
    required_error,
    description
  } = params;
  if (errorMap && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap) return {
    errorMap: errorMap,
    description
  };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type") return {
      message: ctx.defaultError
    };
    if (typeof ctx.data === "undefined") {
      return {
        message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError
      };
    }
    return {
      message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError
    };
  };
  return {
    errorMap: customMap,
    description
  };
}
class ZodType {
  constructor(def) {
    /** Alias of safeParseAsync */
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success) return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({
      data,
      path: ctx.path,
      parent: ctx
    });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success) return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = val => {
      if (typeof message === "string" || typeof message === "undefined") {
        return {
          message
        };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then(data => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: {
        type: "refinement",
        refinement
      }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: {
        type: "transform",
        transform
      }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[a-z][a-z0-9]*$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
const ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
const ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
// Adapted from https://stackoverflow.com/a/3143231
const datetimeRegex = args => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx.parsedType
      }
      //
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              includes: check.value,
              position: check.position
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              startsWith: check.value
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              endsWith: check.value
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  _regex(regex, validation, message) {
    return this.refinement(data => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({
      kind: "email",
      ...errorUtil.errToObj(message)
    });
  }
  url(message) {
    return this._addCheck({
      kind: "url",
      ...errorUtil.errToObj(message)
    });
  }
  emoji(message) {
    return this._addCheck({
      kind: "emoji",
      ...errorUtil.errToObj(message)
    });
  }
  uuid(message) {
    return this._addCheck({
      kind: "uuid",
      ...errorUtil.errToObj(message)
    });
  }
  cuid(message) {
    return this._addCheck({
      kind: "cuid",
      ...errorUtil.errToObj(message)
    });
  }
  cuid2(message) {
    return this._addCheck({
      kind: "cuid2",
      ...errorUtil.errToObj(message)
    });
  }
  ulid(message) {
    return this._addCheck({
      kind: "ulid",
      ...errorUtil.errToObj(message)
    });
  }
  ip(options) {
    return this._addCheck({
      kind: "ip",
      ...errorUtil.errToObj(options)
    });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex: regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value: value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value: value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value: value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(ch => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find(ch => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(ch => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(ch => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(ch => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find(ch => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(ch => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(ch => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(ch => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = params => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, {
        kind,
        value,
        inclusive,
        message: errorUtil.toString(message)
      }]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value: value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find(ch => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null,
      min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = params => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, {
        kind,
        value,
        inclusive,
        message: errorUtil.toString(message)
      }]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = params => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = params => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = params => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = params => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = params => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = params => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = params => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    // required
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = params => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = params => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = params => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
class ZodArray extends ZodType {
  _parse(input) {
    const {
      ctx,
      status
    } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then(result => {
        return ParseStatus.mergeArray(status, result);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: {
        value: minLength,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: {
        value: maxLength,
        message: errorUtil.toString(message)
      }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: {
        value: len,
        message: errorUtil.toString(message)
      }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map(item => deepPartialify(item)));
  } else {
    return schema;
  }
}
class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    /**
     * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
     * If you want to pass through unknown properties, use `.passthrough()` instead.
     */
    this.nonstrict = this.passthrough;
    // extend<
    //   Augmentation extends ZodRawShape,
    //   NewOutput extends util.flatten<{
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   }>,
    //   NewInput extends util.flatten<{
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }>
    // >(
    //   augmentation: Augmentation
    // ): ZodObject<
    //   extendShape<T, Augmentation>,
    //   UnknownKeys,
    //   Catchall,
    //   NewOutput,
    //   NewInput
    // > {
    //   return new ZodObject({
    //     ...this._def,
    //     shape: () => ({
    //       ...this._def.shape(),
    //       ...augmentation,
    //     }),
    //   }) as any;
    // }
    /**
     * @deprecated Use `.extend` instead
     *  */
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = {
      shape,
      keys
    };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const {
      shape,
      keys: shapeKeys
    } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: {
          status: "valid",
          value: key
        },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: {
              status: "valid",
              value: key
            },
            value: {
              status: "valid",
              value: ctx.data[key]
            }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ;else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      // run catchall validation
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: {
            status: "valid",
            value: key
          },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then(syncPairs => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...(message !== undefined ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys") return {
            message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
          };
          return {
            message: defaultError
          };
        }
      } : {})
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({
      [key]: schema
    });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach(key => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach(key => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach(key => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach(key => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
class ZodUnion extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      // return first issue-free validation if it exists
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          // add issues from dirty option
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      // return invalid
      const unionErrors = results.map(result => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async option => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = {
            result,
            ctx: childCtx
          };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map(issues => new ZodError(issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = type => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    // eslint-disable-next-line ban/ban
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    // Get all the valid discriminator values
    const optionsMap = new Map();
    // try {
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return {
      valid: true,
      data: a
    };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter(key => bKeys.indexOf(key) !== -1);
    const newObj = {
      ...a,
      ...b
    };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false
        };
      }
      newObj[key] = sharedValue.data;
    }
    return {
      valid: true,
      data: newObj
    };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return {
        valid: false
      };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false
        };
      }
      newArray.push(sharedValue.data);
    }
    return {
      valid: true,
      data: newArray
    };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return {
      valid: true,
      data: a
    };
  } else {
    return {
      valid: false
    };
  }
}
class ZodIntersection extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return {
        status: status.value,
        value: merged.data
      };
    };
    if (ctx.common.async) {
      return Promise.all([this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left: left,
    right: right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
class ZodTuple extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema) return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter(x => !!x); // filter nulls
    if (ctx.common.async) {
      return Promise.all(items).then(results => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}
class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return {
          status: status.value,
          value: finalMap
        };
      });
    } else {
      const finalMap = new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return {
        status: status.value,
        value: finalMap
      };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
class ZodSet extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements) {
      const parsedSet = new Set();
      for (const element of elements) {
        if (element.status === "aborted") return INVALID;
        if (element.status === "dirty") status.dirty();
        parsedSet.add(element.value);
      }
      return {
        status: status.value,
        value: parsedSet
      };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then(elements => finalizeSet(elements));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: {
        value: minSize,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: {
        value: maxSize,
        message: errorUtil.toString(message)
      }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(x => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(x => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = {
      errorMap: ctx.common.contextualErrorMap
    };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      // Would love a way to avoid disabling this rule, but we need
      // an alias (using an arrow function was what caused 2651).
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const me = this;
      return OK(async function (...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch(e => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch(e => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      // Would love a way to avoid disabling this rule, but we need
      // an alias (using an arrow function was what caused 2651).
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const me = this;
      return OK(function (...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}
class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter: getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return {
      status: "valid",
      value: input.data
    };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value: value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter(opt => !values.includes(opt)));
  }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values: values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then(data => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: arg => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then(processed => {
          return this._def.schema._parseAsync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc
      // effect: RefinementEffect<any>
      ) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted") return INVALID;
        if (inner.status === "dirty") status.dirty();
        // return value is ignored
        executeRefinement(inner.value);
        return {
          status: status.value,
          value: inner.value
        };
      } else {
        return this._def.schema._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }).then(inner => {
          if (inner.status === "aborted") return INVALID;
          if (inner.status === "dirty") status.dirty();
          return executeRefinement(inner.value).then(() => {
            return {
              status: status.value,
              value: inner.value
            };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base)) return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return {
          status: status.value,
          value: result
        };
      } else {
        return this._def.schema._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }).then(base => {
          if (!isValid(base)) return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then(result => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: {
      type: "preprocess",
      transform: preprocess
    },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
class ZodDefault extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
class ZodCatch extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    // newCtx is used to not collect issues from inner types in ctx
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then(result => {
        return {
          status: "valid",
          value: result.status === "valid" ? result.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return {
      status: "valid",
      value: input.data
    };
  }
}
ZodNaN.create = params => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ZodPipeline extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted") return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted") return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}
class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
const custom = (check, params = {},
/**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */
fatal) => {
  if (check) return ZodAny.create().superRefine((data, ctx) => {
    var _a, _b;
    if (!check(data)) {
      const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
        message: params
      } : params;
      const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
      const p2 = typeof p === "string" ? {
        message: p
      } : p;
      ctx.addIssue({
        code: "custom",
        ...p2,
        fatal: _fatal
      });
    }
  });
  return ZodAny.create();
};
const late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
  ZodFirstPartyTypeKind["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (
// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom(data => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
  string: arg => ZodString.create({
    ...arg,
    coerce: true
  }),
  number: arg => ZodNumber.create({
    ...arg,
    coerce: true
  }),
  boolean: arg => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: arg => ZodBigInt.create({
    ...arg,
    coerce: true
  }),
  date: arg => ZodDate.create({
    ...arg,
    coerce: true
  })
};
const NEVER = INVALID;
var z = /*#__PURE__*/Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap: setErrorMap,
  getErrorMap: getErrorMap,
  makeIssue: makeIssue,
  EMPTY_PATH: EMPTY_PATH,
  addIssueToContext: addIssueToContext,
  ParseStatus: ParseStatus,
  INVALID: INVALID,
  DIRTY: DIRTY,
  OK: OK,
  isAborted: isAborted,
  isDirty: isDirty,
  isValid: isValid,
  isAsync: isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType: ZodParsedType,
  getParsedType: getParsedType,
  ZodType: ZodType,
  ZodString: ZodString,
  ZodNumber: ZodNumber,
  ZodBigInt: ZodBigInt,
  ZodBoolean: ZodBoolean,
  ZodDate: ZodDate,
  ZodSymbol: ZodSymbol,
  ZodUndefined: ZodUndefined,
  ZodNull: ZodNull,
  ZodAny: ZodAny,
  ZodUnknown: ZodUnknown,
  ZodNever: ZodNever,
  ZodVoid: ZodVoid,
  ZodArray: ZodArray,
  ZodObject: ZodObject,
  ZodUnion: ZodUnion,
  ZodDiscriminatedUnion: ZodDiscriminatedUnion,
  ZodIntersection: ZodIntersection,
  ZodTuple: ZodTuple,
  ZodRecord: ZodRecord,
  ZodMap: ZodMap,
  ZodSet: ZodSet,
  ZodFunction: ZodFunction,
  ZodLazy: ZodLazy,
  ZodLiteral: ZodLiteral,
  ZodEnum: ZodEnum,
  ZodNativeEnum: ZodNativeEnum,
  ZodPromise: ZodPromise,
  ZodEffects: ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional: ZodOptional,
  ZodNullable: ZodNullable,
  ZodDefault: ZodDefault,
  ZodCatch: ZodCatch,
  ZodNaN: ZodNaN,
  BRAND: BRAND,
  ZodBranded: ZodBranded,
  ZodPipeline: ZodPipeline,
  ZodReadonly: ZodReadonly,
  custom: custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late: late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce: coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  'enum': enumType,
  'function': functionType,
  'instanceof': instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  'null': nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean: oboolean,
  onumber: onumber,
  optional: optionalType,
  ostring: ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  'undefined': undefinedType,
  union: unionType,
  unknown: unknownType,
  'void': voidType,
  NEVER: NEVER,
  ZodIssueCode: ZodIssueCode,
  quotelessJson: quotelessJson,
  ZodError: ZodError
});

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const errorFormatter = error => {
  if (error.message) {
    return error.message;
  }
  return 'unspecified error';
};
class Web3ValidatorError extends BaseWeb3Error {
  constructor(errors) {
    super();
    this.code = ERR_VALIDATION;
    this.errors = errors;
    super.message = `Web3 validator found ${errors.length} error[s]:\n${this._compileErrors().join('\n')}`;
  }
  _compileErrors() {
    return this.errors.map(errorFormatter);
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const VALID_ETH_BASE_TYPES = ['bool', 'int', 'uint', 'bytes', 'string', 'address', 'tuple'];

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const isAbiParameterSchema = schema => typeof schema === 'object' && 'type' in schema && 'name' in schema;

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * checks input if typeof data is valid string input
 */
const isString = value => typeof value === 'string';
const isHexStrict$1 = hex => typeof hex === 'string' && /^((-)?0x[0-9a-f]+|(0x))$/i.test(hex);
/**
 * Is the string a hex string.
 *
 * @param  value
 * @param  length
 * @returns  output the string is a hex string
 */
function isHexString(value, length) {
  if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) return false;
  if (typeof length !== 'undefined' && length > 0 && value.length !== 2 + 2 * length) return false;
  return true;
}
const isHex$1 = hex => typeof hex === 'number' || typeof hex === 'bigint' || typeof hex === 'string' && /^((-0x|0x|-)?[0-9a-f]+|(0x))$/i.test(hex);
/**
 * Returns a `Boolean` on whether or not the a `String` starts with '0x'
 * @param str the string input value
 * @return a boolean if it is or is not hex prefixed
 * @throws if the str input is not a string
 */
function isHexPrefixed$1(str) {
  if (typeof str !== 'string') {
    throw new Error(`[isHexPrefixed] input must be type 'string', received type ${typeof str}`);
  }
  return str.startsWith('0x');
}
/**
 * Checks provided Uint8Array for leading zeroes and throws if found.
 *
 * Examples:
 *
 * Valid values: 0x1, 0x, 0x01, 0x1234
 * Invalid values: 0x0, 0x00, 0x001, 0x0001
 *
 * Note: This method is useful for validating that RLP encoded integers comply with the rule that all
 * integer values encoded to RLP must be in the most compact form and contain no leading zero bytes
 * @param values An object containing string keys and Uint8Array values
 * @throws if any provided value is found to have leading zero bytes
 */
const validateNoLeadingZeroes = function (values) {
  for (const [k, v] of Object.entries(values)) {
    if (v !== undefined && v.length > 0 && v[0] === 0) {
      throw new Error(`${k} cannot have leading zeroes, received: ${v.toString()}`);
    }
  }
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const extraTypes = ['hex', 'number', 'blockNumber', 'blockNumberOrTag', 'filter', 'bloom'];
const parseBaseType$1 = type => {
  // Remove all empty spaces to avoid any parsing issue.
  let strippedType = type.replace(/ /, '');
  let baseTypeSize;
  let isArray = false;
  let arraySizes = [];
  if (type.includes('[')) {
    // Extract the array type
    strippedType = strippedType.slice(0, strippedType.indexOf('['));
    // Extract array indexes
    arraySizes = [...type.matchAll(/(?:\[(\d*)\])/g)].map(match => parseInt(match[1], 10)).map(size => Number.isNaN(size) ? -1 : size);
    isArray = arraySizes.length > 0;
  }
  if (VALID_ETH_BASE_TYPES.includes(strippedType)) {
    return {
      baseType: strippedType,
      isArray,
      baseTypeSize,
      arraySizes
    };
  }
  if (strippedType.startsWith('int')) {
    baseTypeSize = parseInt(strippedType.substring(3), 10);
    strippedType = 'int';
  } else if (strippedType.startsWith('uint')) {
    baseTypeSize = parseInt(type.substring(4), 10);
    strippedType = 'uint';
  } else if (strippedType.startsWith('bytes')) {
    baseTypeSize = parseInt(strippedType.substring(5), 10);
    strippedType = 'bytes';
  } else {
    return {
      baseType: undefined,
      isArray: false,
      baseTypeSize: undefined,
      arraySizes
    };
  }
  return {
    baseType: strippedType,
    isArray,
    baseTypeSize,
    arraySizes
  };
};
const convertEthType = (type, parentSchema = {}) => {
  const typePropertyPresent = Object.keys(parentSchema).includes('type');
  if (typePropertyPresent) {
    throw new Web3ValidatorError([{
      keyword: 'eth',
      message: 'Either "eth" or "type" can be presented in schema',
      params: {
        eth: type
      },
      instancePath: '',
      schemaPath: ''
    }]);
  }
  const {
    baseType,
    baseTypeSize
  } = parseBaseType$1(type);
  if (!baseType && !extraTypes.includes(type)) {
    throw new Web3ValidatorError([{
      keyword: 'eth',
      message: `Eth data type "${type}" is not valid`,
      params: {
        eth: type
      },
      instancePath: '',
      schemaPath: ''
    }]);
  }
  if (baseType) {
    if (baseType === 'tuple') {
      throw new Error('"tuple" type is not implemented directly.');
    }
    return {
      format: `${baseType}${baseTypeSize !== null && baseTypeSize !== void 0 ? baseTypeSize : ''}`,
      required: true
    };
  }
  if (type) {
    return {
      format: type,
      required: true
    };
  }
  return {};
};
const abiSchemaToJsonSchema = (abis, level = '/0') => {
  const schema = {
    type: 'array',
    items: [],
    maxItems: abis.length,
    minItems: abis.length
  };
  for (const [index, abi] of abis.entries()) {
    // eslint-disable-next-line no-nested-ternary
    let abiType;
    let abiName;
    let abiComponents = [];
    // If it's a complete Abi Parameter
    // e.g. {name: 'a', type: 'uint'}
    if (isAbiParameterSchema(abi)) {
      abiType = abi.type;
      abiName = abi.name;
      abiComponents = abi.components;
      // If its short form string value e.g. ['uint']
    } else if (typeof abi === 'string') {
      abiType = abi;
      abiName = `${level}/${index}`;
      // If it's provided in short form of tuple e.g. [['uint', 'string']]
    } else if (Array.isArray(abi)) {
      // If its custom tuple e.g. ['tuple[2]', ['uint', 'string']]
      if (abi[0] && typeof abi[0] === 'string' && abi[0].startsWith('tuple') && !Array.isArray(abi[0]) && abi[1] && Array.isArray(abi[1])) {
        // eslint-disable-next-line prefer-destructuring
        abiType = abi[0];
        abiName = `${level}/${index}`;
        abiComponents = abi[1];
      } else {
        abiType = 'tuple';
        abiName = `${level}/${index}`;
        abiComponents = abi;
      }
    }
    const {
      baseType,
      isArray,
      arraySizes
    } = parseBaseType$1(abiType);
    let childSchema;
    let lastSchema = schema;
    for (let i = arraySizes.length - 1; i > 0; i -= 1) {
      childSchema = {
        type: 'array',
        items: [],
        maxItems: arraySizes[i],
        minItems: arraySizes[i]
      };
      if (arraySizes[i] < 0) {
        delete childSchema.maxItems;
        delete childSchema.minItems;
      }
      // lastSchema.items is a Schema, concat with 'childSchema'
      if (!Array.isArray(lastSchema.items)) {
        lastSchema.items = [lastSchema.items, childSchema];
      } // lastSchema.items is an empty Scheme array, set it to 'childSchema'
      else if (lastSchema.items.length === 0) {
        lastSchema.items = childSchema;
      } // lastSchema.items is a non-empty Scheme array, append 'childSchema'
      else {
        lastSchema.items.push(childSchema);
      }
      lastSchema = childSchema;
    }
    if (baseType === 'tuple' && !isArray) {
      const nestedTuple = abiSchemaToJsonSchema(abiComponents, abiName);
      nestedTuple.$id = abiName;
      lastSchema.items.push(nestedTuple);
    } else if (baseType === 'tuple' && isArray) {
      const arraySize = arraySizes[0];
      const item = {
        $id: abiName,
        type: 'array',
        items: abiSchemaToJsonSchema(abiComponents, abiName),
        maxItems: arraySize,
        minItems: arraySize
      };
      if (arraySize < 0) {
        delete item.maxItems;
        delete item.minItems;
      }
      lastSchema.items.push(item);
    } else if (isArray) {
      const arraySize = arraySizes[0];
      const item = {
        type: 'array',
        $id: abiName,
        items: convertEthType(String(baseType)),
        minItems: arraySize,
        maxItems: arraySize
      };
      if (arraySize < 0) {
        delete item.maxItems;
        delete item.minItems;
      }
      lastSchema.items.push(item);
    } else if (Array.isArray(lastSchema.items)) {
      // Array of non-tuple items
      lastSchema.items.push(Object.assign({
        $id: abiName
      }, convertEthType(abiType)));
    } else {
      // Nested object
      lastSchema.items.items.push(Object.assign({
        $id: abiName
      }, convertEthType(abiType)));
    }
    lastSchema = schema;
  }
  return schema;
};
const ethAbiToJsonSchema = abis => abiSchemaToJsonSchema(abis);
const fetchArrayElement = (data, level) => {
  if (level === 1) {
    return data;
  }
  return fetchArrayElement(data[0], level - 1);
};
const transformJsonDataToAbiFormat = (abis, data, transformedData) => {
  const newData = [];
  for (const [index, abi] of abis.entries()) {
    // eslint-disable-next-line no-nested-ternary
    let abiType;
    let abiName;
    let abiComponents = [];
    // If it's a complete Abi Parameter
    // e.g. {name: 'a', type: 'uint'}
    if (isAbiParameterSchema(abi)) {
      abiType = abi.type;
      abiName = abi.name;
      abiComponents = abi.components;
      // If its short form string value e.g. ['uint']
    } else if (typeof abi === 'string') {
      abiType = abi;
      // If it's provided in short form of tuple e.g. [['uint', 'string']]
    } else if (Array.isArray(abi)) {
      // If its custom tuple e.g. ['tuple[2]', ['uint', 'string']]
      if (abi[1] && Array.isArray(abi[1])) {
        abiType = abi[0];
        abiComponents = abi[1];
      } else {
        abiType = 'tuple';
        abiComponents = abi;
      }
    }
    const {
      baseType,
      isArray,
      arraySizes
    } = parseBaseType$1(abiType);
    const dataItem = Array.isArray(data) ? data[index] : data[abiName];
    if (baseType === 'tuple' && !isArray) {
      newData.push(transformJsonDataToAbiFormat(abiComponents, dataItem, transformedData));
    } else if (baseType === 'tuple' && isArray) {
      const tupleData = [];
      for (const tupleItem of dataItem) {
        // Nested array
        if (arraySizes.length > 1) {
          const nestedItems = fetchArrayElement(tupleItem, arraySizes.length - 1);
          const nestedData = [];
          for (const nestedItem of nestedItems) {
            nestedData.push(transformJsonDataToAbiFormat(abiComponents, nestedItem, transformedData));
          }
          tupleData.push(nestedData);
        } else {
          tupleData.push(transformJsonDataToAbiFormat(abiComponents, tupleItem, transformedData));
        }
      }
      newData.push(tupleData);
    } else {
      newData.push(dataItem);
    }
  }
  // Have to reassign before pushing to transformedData
  // eslint-disable-next-line no-param-reassign
  transformedData = transformedData !== null && transformedData !== void 0 ? transformedData : [];
  transformedData.push(...newData);
  return transformedData;
};
/**
 * Code points to int
 */
const codePointToInt = codePoint => {
  if (codePoint >= 48 && codePoint <= 57) {
    /* ['0'..'9'] -> [0..9] */
    return codePoint - 48;
  }
  if (codePoint >= 65 && codePoint <= 70) {
    /* ['A'..'F'] -> [10..15] */
    return codePoint - 55;
  }
  if (codePoint >= 97 && codePoint <= 102) {
    /* ['a'..'f'] -> [10..15] */
    return codePoint - 87;
  }
  throw new Error(`Invalid code point: ${codePoint}`);
};
/**
 * Converts value to it's number representation
 */
const hexToNumber$2 = value => {
  if (!isHexStrict$1(value)) {
    throw new Error('Invalid hex string');
  }
  const [negative, hexValue] = value.startsWith('-') ? [true, value.slice(1)] : [false, value];
  const num = BigInt(hexValue);
  if (num > Number.MAX_SAFE_INTEGER) {
    return negative ? -num : num;
  }
  if (num < Number.MIN_SAFE_INTEGER) {
    return num;
  }
  return negative ? -1 * Number(num) : Number(num);
};
/**
 * Converts value to it's hex representation
 */
const numberToHex$2 = value => {
  if ((typeof value === 'number' || typeof value === 'bigint') && value < 0) {
    return `-0x${value.toString(16).slice(1)}`;
  }
  if ((typeof value === 'number' || typeof value === 'bigint') && value >= 0) {
    return `0x${value.toString(16)}`;
  }
  if (typeof value === 'string' && isHexStrict$1(value)) {
    const [negative, hex] = value.startsWith('-') ? [true, value.slice(1)] : [false, value];
    const hexValue = hex.split(/^(-)?0(x|X)/).slice(-1)[0];
    return `${negative ? '-' : ''}0x${hexValue.replace(/^0+/, '').toLowerCase()}`;
  }
  if (typeof value === 'string' && !isHexStrict$1(value)) {
    return numberToHex$2(BigInt(value));
  }
  throw new InvalidNumberError(value);
};
/**
 * Adds a padding on the left of a string, if value is a integer or bigInt will be converted to a hex string.
 */
const padLeft$1 = (value, characterAmount, sign = '0') => {
  if (typeof value === 'string' && !isHexStrict$1(value)) {
    return value.padStart(characterAmount, sign);
  }
  const hex = typeof value === 'string' && isHexStrict$1(value) ? value : numberToHex$2(value);
  const [prefix, hexValue] = hex.startsWith('-') ? ['-0x', hex.slice(3)] : ['0x', hex.slice(2)];
  return `${prefix}${hexValue.padStart(characterAmount, sign)}`;
};
function uint8ArrayToHexString$1(uint8Array) {
  let hexString = '0x';
  for (const e of uint8Array) {
    const hex = e.toString(16);
    hexString += hex.length === 1 ? `0${hex}` : hex;
  }
  return hexString;
}
// for optimized technique for hex to bytes conversion
const charCodeMap = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
  return undefined;
}
function hexToUint8Array(hex) {
  let offset = 0;
  if (hex.startsWith('0') && (hex[1] === 'x' || hex[1] === 'X')) {
    offset = 2;
  }
  if (hex.length % 2 !== 0) {
    throw new InvalidBytesError(`hex string has odd length: ${hex}`);
  }
  const length = (hex.length - offset) / 2;
  const bytes = new Uint8Array(length);
  for (let index = 0, j = offset; index < length; index += 1) {
    // eslint-disable-next-line no-plusplus
    const nibbleLeft = charCodeToBase16(hex.charCodeAt(j++));
    // eslint-disable-next-line no-plusplus
    const nibbleRight = charCodeToBase16(hex.charCodeAt(j++));
    if (nibbleLeft === undefined || nibbleRight === undefined) {
      throw new InvalidBytesError(`Invalid byte sequence ("${hex[j - 2]}${hex[j - 1]}" in "${hex}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
// @TODO: Remove this function and its usages once all sub dependencies uses version 1.3.3 or above of @noble/hashes
function ensureIfUint8Array(data) {
  var _a;
  if (!(data instanceof Uint8Array) && ((_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'Uint8Array') {
    return Uint8Array.from(data);
  }
  return data;
}

var utils$2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	parseBaseType: parseBaseType$1,
	abiSchemaToJsonSchema: abiSchemaToJsonSchema,
	ethAbiToJsonSchema: ethAbiToJsonSchema,
	fetchArrayElement: fetchArrayElement,
	transformJsonDataToAbiFormat: transformJsonDataToAbiFormat,
	codePointToInt: codePointToInt,
	hexToNumber: hexToNumber$2,
	numberToHex: numberToHex$2,
	padLeft: padLeft$1,
	uint8ArrayToHexString: uint8ArrayToHexString$1,
	hexToUint8Array: hexToUint8Array,
	ensureIfUint8Array: ensureIfUint8Array
});

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * checks input if typeof data is valid Uint8Array input
 */
const isUint8Array$1 = data => {
  var _a;
  return data instanceof Uint8Array || ((_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'Uint8Array';
};
const isBytes$1 = (value, options = {
  abiType: 'bytes'
}) => {
  if (typeof value !== 'string' && !Array.isArray(value) && !isUint8Array$1(value)) {
    return false;
  }
  // isHexStrict also accepts - prefix which can not exists in bytes
  if (typeof value === 'string' && isHexStrict$1(value) && value.startsWith('-')) {
    return false;
  }
  if (typeof value === 'string' && !isHexStrict$1(value)) {
    return false;
  }
  let valueToCheck;
  if (typeof value === 'string') {
    if (value.length % 2 !== 0) {
      // odd length hex
      return false;
    }
    valueToCheck = hexToUint8Array(value);
  } else if (Array.isArray(value)) {
    if (value.some(d => d < 0 || d > 255 || !Number.isInteger(d))) {
      return false;
    }
    valueToCheck = new Uint8Array(value);
  } else {
    valueToCheck = value;
  }
  if (options === null || options === void 0 ? void 0 : options.abiType) {
    const {
      baseTypeSize
    } = parseBaseType$1(options.abiType);
    return baseTypeSize ? valueToCheck.length === baseTypeSize : true;
  }
  if (options === null || options === void 0 ? void 0 : options.size) {
    return valueToCheck.length === (options === null || options === void 0 ? void 0 : options.size);
  }
  return true;
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * Checks the checksum of a given address. Will also return false on non-checksum addresses.
 */
const checkAddressCheckSum$1 = data => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(data)) return false;
  const address = data.slice(2);
  const updatedData = utf8ToBytes$3(address.toLowerCase());
  const addressHash = uint8ArrayToHexString$1(keccak256(ensureIfUint8Array(updatedData))).slice(2);
  for (let i = 0; i < 40; i += 1) {
    // the nth letter should be uppercase if the nth digit of casemap is 1
    if (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i] || parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]) {
      return false;
    }
  }
  return true;
};
/**
 * Checks if a given string is a valid Ethereum address. It will also check the checksum, if the address has upper and lowercase letters.
 */
const isAddress$1 = (value, checkChecksum = true) => {
  if (typeof value !== 'string' && !isUint8Array$1(value)) {
    return false;
  }
  let valueToCheck;
  if (isUint8Array$1(value)) {
    valueToCheck = uint8ArrayToHexString$1(value);
  } else if (typeof value === 'string' && !isHexStrict$1(value)) {
    valueToCheck = value.toLowerCase().startsWith('0x') ? value : `0x${value}`;
  } else {
    valueToCheck = value;
  }
  // check if it has the basic requirements of an address
  if (!/^(0x)?[0-9a-f]{40}$/i.test(valueToCheck)) {
    return false;
  }
  // If it's ALL lowercase or ALL upppercase
  if (/^(0x|0X)?[0-9a-f]{40}$/.test(valueToCheck) || /^(0x|0X)?[0-9A-F]{40}$/.test(valueToCheck)) {
    return true;
    // Otherwise check each case
  }
  return checkChecksum ? checkAddressCheckSum$1(valueToCheck) : true;
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
var FMT_NUMBER;
(function (FMT_NUMBER) {
  FMT_NUMBER["NUMBER"] = "NUMBER_NUMBER";
  FMT_NUMBER["HEX"] = "NUMBER_HEX";
  FMT_NUMBER["STR"] = "NUMBER_STR";
  FMT_NUMBER["BIGINT"] = "NUMBER_BIGINT";
})(FMT_NUMBER || (FMT_NUMBER = {}));
var FMT_BYTES;
(function (FMT_BYTES) {
  FMT_BYTES["HEX"] = "BYTES_HEX";
  FMT_BYTES["UINT8ARRAY"] = "BYTES_UINT8ARRAY";
})(FMT_BYTES || (FMT_BYTES = {}));
const DEFAULT_RETURN_FORMAT = {
  number: FMT_NUMBER.BIGINT,
  bytes: FMT_BYTES.HEX
};
const ETH_DATA_FORMAT = {
  number: FMT_NUMBER.HEX,
  bytes: FMT_BYTES.HEX
};

var BlockTags;
(function (BlockTags) {
  BlockTags["EARLIEST"] = "earliest";
  BlockTags["LATEST"] = "latest";
  BlockTags["PENDING"] = "pending";
  BlockTags["SAFE"] = "safe";
  BlockTags["FINALIZED"] = "finalized";
})(BlockTags || (BlockTags = {}));
// This list of hardforks is expected to be in order
// keep this in mind when making changes to it
var HardforksOrdered;
(function (HardforksOrdered) {
  HardforksOrdered["chainstart"] = "chainstart";
  HardforksOrdered["frontier"] = "frontier";
  HardforksOrdered["homestead"] = "homestead";
  HardforksOrdered["dao"] = "dao";
  HardforksOrdered["tangerineWhistle"] = "tangerineWhistle";
  HardforksOrdered["spuriousDragon"] = "spuriousDragon";
  HardforksOrdered["byzantium"] = "byzantium";
  HardforksOrdered["constantinople"] = "constantinople";
  HardforksOrdered["petersburg"] = "petersburg";
  HardforksOrdered["istanbul"] = "istanbul";
  HardforksOrdered["muirGlacier"] = "muirGlacier";
  HardforksOrdered["berlin"] = "berlin";
  HardforksOrdered["london"] = "london";
  HardforksOrdered["altair"] = "altair";
  HardforksOrdered["arrowGlacier"] = "arrowGlacier";
  HardforksOrdered["grayGlacier"] = "grayGlacier";
  HardforksOrdered["bellatrix"] = "bellatrix";
  HardforksOrdered["merge"] = "merge";
  HardforksOrdered["capella"] = "capella";
  HardforksOrdered["shanghai"] = "shanghai";
})(HardforksOrdered || (HardforksOrdered = {}));

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const TypedArray = Object.getPrototypeOf(Uint8Array);

var __awaiter$D = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const symbol = Symbol.for('web3/base-provider');
// Provider interface compatible with EIP-1193
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md
class Web3BaseProvider {
  static isWeb3Provider(provider) {
    return provider instanceof Web3BaseProvider || Boolean(provider && provider[symbol]);
  }
  // To match an object "instanceof" does not work if
  // matcher class and object is using different package versions
  // to overcome this bottleneck used this approach.
  // The symbol value for one string will always remain same regardless of package versions
  // eslint-disable-next-line class-methods-use-this
  get [symbol]() {
    return true;
  }
  /**
   * @deprecated Please use `.request` instead.
   * @param payload - Request Payload
   * @param callback - Callback
   */
  send(payload,
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback) {
    this.request(payload).then(response => {
      // eslint-disable-next-line no-null/no-null
      callback(null, response);
    }).catch(err => {
      callback(err);
    });
  }
  /**
   * @deprecated Please use `.request` instead.
   * @param payload - Request Payload
   */
  sendAsync(payload) {
    return __awaiter$D(this, void 0, void 0, function* () {
      return this.request(payload);
    });
  }
  /**
   * Modify the return type of the request method to be fully compatible with EIP-1193
   *
   * [deprecated] In the future major releases (\>= v5) all providers are supposed to be fully compatible with EIP-1193.
   * So this method will not be needed and would not be available in the future.
   *
   * @returns A new instance of the provider with the request method fully compatible with EIP-1193
   *
   * @example
   * ```ts
   * const provider = new Web3HttpProvider('http://localhost:8545');
   * const fullyCompatibleProvider = provider.asEIP1193Provider();
   * const result = await fullyCompatibleProvider.request({ method: 'eth_getBalance' });
   * console.log(result); // '0x0234c8a3397aab58' or something like that
   * ```
   */
  asEIP1193Provider() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newObj = Object.create(this);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const originalRequest = newObj.request;
    newObj.request = function request(args) {
      return __awaiter$D(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        const response = yield originalRequest(args);
        return response.result;
      });
    };
    // @ts-expect-error the property should not be available in the new object because of using Object.create(this).
    //	But it is available if we do not delete it.
    newObj.asEIP1193Provider = undefined; // to prevent the user for calling this method again
    return newObj;
  }
}

class Web3BaseWallet extends Array {
  constructor(accountProvider) {
    super();
    this._accountProvider = accountProvider;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
// Note: this could be simplified using ** operator, but babel does not handle it well
// 	you can find more at: https://github.com/babel/babel/issues/13109 and https://github.com/web3/web3.js/issues/6187
/** @internal */
const bigintPower = (base, expo) => {
  let res = base;
  for (let index = 1; index < expo; index += 1) {
    res *= base;
  }
  return res;
};
const isUInt = (value, options = {
  abiType: 'uint'
}) => {
  if (!['number', 'string', 'bigint'].includes(typeof value) || typeof value === 'string' && value.length === 0) {
    return false;
  }
  let size;
  if (options === null || options === void 0 ? void 0 : options.abiType) {
    const {
      baseTypeSize
    } = parseBaseType$1(options.abiType);
    if (baseTypeSize) {
      size = baseTypeSize;
    }
  } else if (options.bitSize) {
    size = options.bitSize;
  }
  const maxSize = bigintPower(BigInt(2), BigInt(size !== null && size !== void 0 ? size : 256)) - BigInt(1);
  try {
    const valueToCheck = typeof value === 'string' && isHexStrict$1(value) ? BigInt(hexToNumber$2(value)) : BigInt(value);
    return valueToCheck >= 0 && valueToCheck <= maxSize;
  } catch (error) {
    // Some invalid number value given which can not be converted via BigInt
    return false;
  }
};
const isInt = (value, options = {
  abiType: 'int'
}) => {
  if (!['number', 'string', 'bigint'].includes(typeof value)) {
    return false;
  }
  if (typeof value === 'number' && value > Number.MAX_SAFE_INTEGER) {
    return false;
  }
  let size;
  if (options === null || options === void 0 ? void 0 : options.abiType) {
    const {
      baseTypeSize,
      baseType
    } = parseBaseType$1(options.abiType);
    if (baseType !== 'int') {
      return false;
    }
    if (baseTypeSize) {
      size = baseTypeSize;
    }
  } else if (options.bitSize) {
    size = options.bitSize;
  }
  const maxSize = bigintPower(BigInt(2), BigInt((size !== null && size !== void 0 ? size : 256) - 1));
  const minSize = BigInt(-1) * bigintPower(BigInt(2), BigInt((size !== null && size !== void 0 ? size : 256) - 1));
  try {
    const valueToCheck = typeof value === 'string' && isHexStrict$1(value) ? BigInt(hexToNumber$2(value)) : BigInt(value);
    return valueToCheck >= minSize && valueToCheck <= maxSize;
  } catch (error) {
    // Some invalid number value given which can not be converted via BigInt
    return false;
  }
};
const isNumber = value => {
  if (isInt(value)) {
    return true;
  }
  // It would be a decimal number
  if (typeof value === 'string' && /[0-9.]/.test(value) && value.indexOf('.') === value.lastIndexOf('.')) {
    return true;
  }
  if (typeof value === 'number') {
    return true;
  }
  return false;
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const isBlockNumber = value => isUInt(value);
/**
 * Returns true if the given blockNumber is 'latest', 'pending', 'earliest, 'safe' or 'finalized'
 */
const isBlockTag = value => Object.values(BlockTags).includes(value);
/**
 * Returns true if given value is valid hex string and not negative, or is a valid BlockTag
 */
const isBlockNumberOrTag = value => isBlockTag(value) || isBlockNumber(value);

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * Returns true if the bloom is a valid bloom
 * https://github.com/joshstevens19/ethereum-bloom-filters/blob/fbeb47b70b46243c3963fe1c2988d7461ef17236/src/index.ts#L7
 */
const isBloom$1 = bloom => {
  if (typeof bloom !== 'string') {
    return false;
  }
  if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {
    return false;
  }
  if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {
    return true;
  }
  return false;
};
/**
 * Returns true if the value is part of the given bloom
 * note: false positives are possible.
 */
const isInBloom$1 = (bloom, value) => {
  if (typeof value === 'string' && !isHexStrict$1(value)) {
    return false;
  }
  if (!isBloom$1(bloom)) {
    return false;
  }
  const uint8Array = typeof value === 'string' ? hexToUint8Array(value) : value;
  const hash = uint8ArrayToHexString$1(keccak256(uint8Array)).slice(2);
  for (let i = 0; i < 12; i += 4) {
    // calculate bit position in bloom filter that must be active
    const bitpos =
    // eslint-disable-next-line no-bitwise
    (parseInt(hash.slice(i, i + 2), 16) << 8) + parseInt(hash.slice(i + 2, i + 4), 16) & 2047;
    // test if bitpos in bloom is active
    const code = codePointToInt(bloom.charCodeAt(bloom.length - 1 - Math.floor(bitpos / 4)));
    // eslint-disable-next-line no-bitwise
    const offset = 1 << bitpos % 4;
    // eslint-disable-next-line no-bitwise
    if ((code & offset) !== offset) {
      return false;
    }
  }
  return true;
};
/**
 * Returns true if the ethereum users address is part of the given bloom note: false positives are possible.
 */
const isUserEthereumAddressInBloom$1 = (bloom, ethereumAddress) => {
  if (!isBloom$1(bloom)) {
    return false;
  }
  if (!isAddress$1(ethereumAddress)) {
    return false;
  }
  // you have to pad the ethereum address to 32 bytes
  // else the bloom filter does not work
  // this is only if your matching the USERS
  // ethereum address. Contract address do not need this
  // hence why we have 2 methods
  // (0x is not in the 2nd parameter of padleft so 64 chars is fine)
  const address = padLeft$1(ethereumAddress, 64);
  return isInBloom$1(bloom, address);
};
/**
 * Returns true if the contract address is part of the given bloom.
 * note: false positives are possible.
 */
const isContractAddressInBloom$1 = (bloom, contractAddress) => {
  if (!isBloom$1(bloom)) {
    return false;
  }
  if (!isAddress$1(contractAddress)) {
    return false;
  }
  return isInBloom$1(bloom, contractAddress);
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const isBoolean = value => {
  if (!['number', 'string', 'boolean'].includes(typeof value)) {
    return false;
  }
  if (typeof value === 'boolean') {
    return true;
  }
  if (typeof value === 'string' && !isHexStrict$1(value)) {
    return value === '1' || value === '0';
  }
  if (typeof value === 'string' && isHexStrict$1(value)) {
    return value === '0x1' || value === '0x0';
  }
  // type === number
  return value === 1 || value === 0;
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
// Explicitly check for the
// eslint-disable-next-line @typescript-eslint/ban-types
const isNullish$1 = item =>
// Using "null" value intentionally for validation
// eslint-disable-next-line no-null/no-null
item === undefined || item === null;
const isObject = item => typeof item === 'object' && !isNullish$1(item) && !Array.isArray(item) && !(item instanceof TypedArray);

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * Checks if its a valid topic
 */
const isTopic$1 = topic => {
  if (typeof topic !== 'string') {
    return false;
  }
  if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {
    return false;
  }
  if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {
    return true;
  }
  return false;
};
/**
 * Returns true if the topic is part of the given bloom.
 * note: false positives are possible.
 */
const isTopicInBloom$1 = (bloom, topic) => {
  if (!isBloom$1(bloom)) {
    return false;
  }
  if (!isTopic$1(topic)) {
    return false;
  }
  return isInBloom$1(bloom, topic);
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * First we check if all properties in the provided value are expected,
 * then because all Filter properties are optional, we check if the expected properties
 * are defined. If defined and they're not the expected type, we immediately return false,
 * otherwise we return true after all checks pass.
 */
const isFilterObject = value => {
  const expectedFilterProperties = ['fromBlock', 'toBlock', 'address', 'topics', 'blockHash'];
  if (isNullish$1(value) || typeof value !== 'object') return false;
  if (!Object.keys(value).every(property => expectedFilterProperties.includes(property))) return false;
  if (!isNullish$1(value.fromBlock) && !isBlockNumberOrTag(value.fromBlock) || !isNullish$1(value.toBlock) && !isBlockNumberOrTag(value.toBlock)) return false;
  if (!isNullish$1(value.address)) {
    if (Array.isArray(value.address)) {
      if (!value.address.every(address => isAddress$1(address))) return false;
    } else if (!isAddress$1(value.address)) return false;
  }
  if (!isNullish$1(value.topics)) {
    if (!value.topics.every(topic => {
      if (isNullish$1(topic)) return true;
      if (Array.isArray(topic)) {
        return topic.every(nestedTopic => isTopic$1(nestedTopic));
      }
      if (isTopic$1(topic)) return true;
      return false;
    })) return false;
  }
  return true;
};

const formats = {
  address: data => isAddress$1(data),
  bloom: data => isBloom$1(data),
  blockNumber: data => isBlockNumber(data),
  blockTag: data => isBlockTag(data),
  blockNumberOrTag: data => isBlockNumberOrTag(data),
  bool: data => isBoolean(data),
  bytes: data => isBytes$1(data),
  filter: data => isFilterObject(data),
  hex: data => isHexStrict$1(data),
  uint: data => isUInt(data),
  int: data => isInt(data),
  number: data => isNumber(data),
  string: data => isString(data)
};
// generate formats for all numbers types
for (let bitSize = 8; bitSize <= 256; bitSize += 8) {
  formats[`int${bitSize}`] = data => isInt(data, {
    bitSize
  });
  formats[`uint${bitSize}`] = data => isUInt(data, {
    bitSize
  });
}
// generate bytes
for (let size = 1; size <= 32; size += 1) {
  formats[`bytes${size}`] = data => isBytes$1(data, {
    size
  });
}
formats.bytes256 = formats.bytes;

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const convertToZod = schema => {
  if ((!(schema === null || schema === void 0 ? void 0 : schema.type) || (schema === null || schema === void 0 ? void 0 : schema.type) === 'object') && (schema === null || schema === void 0 ? void 0 : schema.properties)) {
    const obj = {};
    for (const name of Object.keys(schema.properties)) {
      const zItem = convertToZod(schema.properties[name]);
      if (zItem) {
        obj[name] = zItem;
      }
    }
    if (Array.isArray(schema.required)) {
      return z.object(obj).partial().required(schema.required.reduce((acc, v) => Object.assign(Object.assign({}, acc), {
        [v]: true
      }), {}));
    }
    return z.object(obj).partial();
  }
  if ((schema === null || schema === void 0 ? void 0 : schema.type) === 'array' && (schema === null || schema === void 0 ? void 0 : schema.items)) {
    if (Array.isArray(schema.items) && schema.items.length > 0) {
      const arr = [];
      for (const item of schema.items) {
        const zItem = convertToZod(item);
        if (zItem) {
          arr.push(zItem);
        }
      }
      return z.tuple(arr);
    }
    return z.array(convertToZod(schema.items));
  }
  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    return z.union(schema.oneOf.map(oneOfSchema => convertToZod(oneOfSchema)));
  }
  if (schema === null || schema === void 0 ? void 0 : schema.format) {
    if (!formats[schema.format]) {
      throw new SchemaFormatError(schema.format);
    }
    return z.any().refine(formats[schema.format], value => ({
      params: {
        value,
        format: schema.format
      }
    }));
  }
  if ((schema === null || schema === void 0 ? void 0 : schema.type) && (schema === null || schema === void 0 ? void 0 : schema.type) !== 'object' && typeof z[String(schema.type)] === 'function') {
    return z[String(schema.type)]();
  }
  return z.object({
    data: z.any()
  }).partial();
};
class Validator {
  // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
  static factory() {
    if (!Validator.validatorInstance) {
      Validator.validatorInstance = new Validator();
    }
    return Validator.validatorInstance;
  }
  validate(schema, data, options) {
    var _a, _b;
    const zod = convertToZod(schema);
    const result = zod.safeParse(data);
    if (!result.success) {
      const errors = this.convertErrors((_b = (_a = result.error) === null || _a === void 0 ? void 0 : _a.issues) !== null && _b !== void 0 ? _b : []);
      if (errors) {
        if (options === null || options === void 0 ? void 0 : options.silent) {
          return errors;
        }
        throw new Web3ValidatorError(errors);
      }
    }
    return undefined;
  }
  // eslint-disable-next-line class-methods-use-this
  convertErrors(errors) {
    if (errors && Array.isArray(errors) && errors.length > 0) {
      return errors.map(error => {
        var _a;
        let message;
        let keyword;
        let params;
        let schemaPath;
        schemaPath = error.path.join('/');
        const field = String(error.path[error.path.length - 1]);
        const instancePath = error.path.join('/');
        if (error.code === ZodIssueCode.too_big) {
          keyword = 'maxItems';
          schemaPath = `${instancePath}/maxItems`;
          params = {
            limit: error.maximum
          };
          message = `must NOT have more than ${error.maximum} items`;
        } else if (error.code === ZodIssueCode.too_small) {
          keyword = 'minItems';
          schemaPath = `${instancePath}/minItems`;
          params = {
            limit: error.minimum
          };
          message = `must NOT have fewer than ${error.minimum} items`;
        } else if (error.code === ZodIssueCode.custom) {
          const {
            value,
            format
          } = (_a = error.params) !== null && _a !== void 0 ? _a : {};
          if (typeof value === 'undefined') {
            message = `value at "/${schemaPath}" is required`;
          } else {
            message = `value "${
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            typeof value === 'object' ? JSON.stringify(value) : value}" at "/${schemaPath}" must pass "${format}" validation`;
          }
          params = {
            value
          };
        }
        return {
          keyword: keyword !== null && keyword !== void 0 ? keyword : field,
          instancePath: instancePath ? `/${instancePath}` : '',
          schemaPath: schemaPath ? `#${schemaPath}` : '#',
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          params: params !== null && params !== void 0 ? params : {
            value: error.message
          },
          message: message !== null && message !== void 0 ? message : error.message
        };
      });
    }
    return undefined;
  }
}

class Web3Validator {
  constructor() {
    this._validator = Validator.factory();
  }
  validateJSONSchema(schema, data, options) {
    return this._validator.validate(schema, data, options);
  }
  validate(schema, data, options = {
    silent: false
  }) {
    var _a, _b;
    const jsonSchema = ethAbiToJsonSchema(schema);
    if (Array.isArray(jsonSchema.items) && ((_a = jsonSchema.items) === null || _a === void 0 ? void 0 : _a.length) === 0 && data.length === 0) {
      return undefined;
    }
    if (Array.isArray(jsonSchema.items) && ((_b = jsonSchema.items) === null || _b === void 0 ? void 0 : _b.length) === 0 && data.length !== 0) {
      throw new Web3ValidatorError([{
        instancePath: '/0',
        schemaPath: '/',
        keyword: 'required',
        message: 'empty schema against data can not be validated',
        params: data
      }]);
    }
    return this._validator.validate(jsonSchema, data, options);
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const validator = new Web3Validator();

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
function isUint8Array(data) {
  var _a;
  return data instanceof Uint8Array || ((_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'Uint8Array';
}
function uint8ArrayConcat(...parts) {
  const length = parts.reduce((prev, part) => {
    const agg = prev + part.length;
    return agg;
  }, 0);
  const result = new Uint8Array(length);
  let offset = 0;
  for (const part of parts) {
    result.set(part, offset);
    offset += part.length;
  }
  return result;
}
/**
 * Returns true if the two passed Uint8Arrays have the same content
 */
function uint8ArrayEquals(a, b) {
  if (a === b) {
    return true;
  }
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (let i = 0; i < a.byteLength; i += 1) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
// Ref: https://ethdocs.org/en/latest/ether.html
// Note: this could be simplified using ** operator, but babel does not handle it well (https://github.com/babel/babel/issues/13109)
/** @internal */
const ethUnitMap = {
  noether: BigInt(0),
  wei: BigInt(1),
  kwei: BigInt(1000),
  Kwei: BigInt(1000),
  babbage: BigInt(1000),
  femtoether: BigInt(1000),
  mwei: BigInt(1000000),
  Mwei: BigInt(1000000),
  lovelace: BigInt(1000000),
  picoether: BigInt(1000000),
  gwei: BigInt(1000000000),
  Gwei: BigInt(1000000000),
  shannon: BigInt(1000000000),
  nanoether: BigInt(1000000000),
  nano: BigInt(1000000000),
  szabo: BigInt(1000000000000),
  microether: BigInt(1000000000000),
  micro: BigInt(1000000000000),
  finney: BigInt(1000000000000000),
  milliether: BigInt(1000000000000000),
  milli: BigInt(1000000000000000),
  ether: BigInt('1000000000000000000'),
  kether: BigInt('1000000000000000000000'),
  grand: BigInt('1000000000000000000000'),
  mether: BigInt('1000000000000000000000000'),
  gether: BigInt('1000000000000000000000000000'),
  tether: BigInt('1000000000000000000000000000000')
};
/**
 * Convert a value from bytes to Uint8Array
 * @param data - Data to be converted
 * @returns - The Uint8Array representation of the input data
 *
 * @example
 * ```ts
 * console.log(web3.utils.bytesToUint8Array("0xab")));
 * > Uint8Array(1) [ 171 ]
 * ```
 */
const bytesToUint8Array = data => {
  validator.validate(['bytes'], [data]);
  if (isUint8Array(data)) {
    return data;
  }
  if (Array.isArray(data)) {
    return new Uint8Array(data);
  }
  if (typeof data === 'string') {
    return hexToUint8Array(data);
  }
  throw new InvalidBytesError(data);
};
/**
 * @internal
 */
const {
  uint8ArrayToHexString
} = utils$2;
/**
 * Convert a byte array to a hex string
 * @param bytes - Byte array to be converted
 * @returns - The hex string representation of the input byte array
 *
 * @example
 * ```ts
 * console.log(web3.utils.bytesToHex(new Uint8Array([72, 12])));
 * > "0x480c"
 *
 */
const bytesToHex$2 = bytes => uint8ArrayToHexString(bytesToUint8Array(bytes));
/**
 * Convert a hex string to a byte array
 * @param hex - Hex string to be converted
 * @returns - The byte array representation of the input hex string
 *
 * @example
 * ```ts
 * console.log(web3.utils.hexToBytes('0x74657374'));
 * > Uint8Array(4) [ 116, 101, 115, 116 ]
 * ```
 */
const hexToBytes$2 = bytes => {
  if (typeof bytes === 'string' && bytes.slice(0, 2).toLowerCase() !== '0x') {
    return bytesToUint8Array(`0x${bytes}`);
  }
  return bytesToUint8Array(bytes);
};
/**
 * Converts value to it's number representation
 * @param value - Hex string to be converted
 * @returns - The number representation of the input value
 *
 * @example
 * ```ts
 * conoslle.log(web3.utils.hexToNumber('0xa'));
 * > 10
 * ```
 */
const hexToNumber$1 = value => {
  validator.validate(['hex'], [value]);
  // To avoid duplicate code and circular dependency we will
  // use `hexToNumber` implementation from `web3-validator`
  return hexToNumber$2(value);
};
/**
 * Converts value to it's number representation @alias `hexToNumber`
 */
const toDecimal = hexToNumber$1;
/**
 * Converts value to it's hex representation
 * @param value - Value to be converted
 * @param hexstrict - Add padding to converted value if odd, to make it hexstrict
 * @returns - The hex representation of the input value
 *
 * @example
 * ```ts
 * console.log(web3.utils.numberToHex(10));
 * > "0xa"
 * ```
 */
const numberToHex$1 = (value, hexstrict) => {
  if (typeof value !== 'bigint') validator.validate(['int'], [value]);
  // To avoid duplicate code and circular dependency we will
  // use `numberToHex` implementation from `web3-validator`
  let updatedValue = numberToHex$2(value);
  if (hexstrict) {
    if (!updatedValue.startsWith('-') && updatedValue.length % 2 === 1) {
      // To avoid duplicate a circular dependency we will not be using the padLeft method
      updatedValue = '0x0'.concat(updatedValue.slice(2));
    } else if (updatedValue.length % 2 === 0 && updatedValue.startsWith('-')) updatedValue = '-0x0'.concat(updatedValue.slice(3));
  }
  return updatedValue;
};
/**
 * Converts value to it's hex representation @alias `numberToHex`
 *
 */
const fromDecimal = numberToHex$1;
/**
 * Converts value to it's decimal representation in string
 * @param value - Hex string to be converted
 * @returns - The decimal representation of the input value
 *
 * @example
 * ```ts
 * console.log(web3.utils.hexToNumberString('0xa'));
 * > "10"
 * ```
 */
const hexToNumberString = data => hexToNumber$1(data).toString();
/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 * @param str - Utf8 string to be converted
 * @returns - The hex representation of the input string
 *
 * @example
 * ```ts
 * console.log(utf8ToHex('web3.js'));
 * > "0x776562332e6a73"
 * ```
 *
 */
const utf8ToHex = str => {
  validator.validate(['string'], [str]);
  // To be compatible with 1.x trim null character
  // eslint-disable-next-line no-control-regex
  let strWithoutNullCharacter = str.replace(/^(?:\u0000)/, '');
  // eslint-disable-next-line no-control-regex
  strWithoutNullCharacter = strWithoutNullCharacter.replace(/(?:\u0000)$/, '');
  return bytesToHex$2(new TextEncoder().encode(strWithoutNullCharacter));
};
/**
 * @alias utf8ToHex
 */
const fromUtf8 = utf8ToHex;
/**
 * @alias utf8ToHex
 */
const stringToHex = utf8ToHex;
/**
 * Should be called to get utf8 from it's hex representation
 * @param str - Hex string to be converted
 * @returns - Utf8 string
 *
 * @example
 * ```ts
 * console.log(web3.utils.hexToUtf8('0x48656c6c6f20576f726c64'));
 * > Hello World
 * ```
 */
const hexToUtf8 = str => bytesToUtf8(hexToBytes$2(str));
/**
 * @alias hexToUtf8
 */
const toUtf8 = input => {
  if (typeof input === 'string') {
    return hexToUtf8(input);
  }
  validator.validate(['bytes'], [input]);
  return bytesToUtf8(input);
};
const utf8ToBytes$2 = utf8ToBytes$3;
/**
 * @alias hexToUtf8
 */
const hexToString = hexToUtf8;
/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 * @param str - String to be converted to hex
 * @returns - Hex string
 *
 * @example
 * ```ts
 * console.log(web3.utils.asciiToHex('Hello World'));
 * > 0x48656c6c6f20576f726c64
 * ```
 */
const asciiToHex = str => {
  validator.validate(['string'], [str]);
  let hexString = '';
  for (let i = 0; i < str.length; i += 1) {
    const hexCharCode = str.charCodeAt(i).toString(16);
    // might need a leading 0
    hexString += hexCharCode.length % 2 !== 0 ? `0${hexCharCode}` : hexCharCode;
  }
  return `0x${hexString}`;
};
/**
 * @alias asciiToHex
 */
const fromAscii = asciiToHex;
/**
 * Should be called to get ascii from it's hex representation
 * @param str - Hex string to be converted to ascii
 * @returns - Ascii string
 *
 * @example
 * ```ts
 * console.log(web3.utils.hexToAscii('0x48656c6c6f20576f726c64'));
 * > Hello World
 * ```
 */
const hexToAscii = str => {
  const decoder = new TextDecoder('ascii');
  return decoder.decode(hexToBytes$2(str));
};
/**
 * @alias hexToAscii
 */
const toAscii = hexToAscii;
/**
 * Auto converts any given value into it's hex representation.
 * @param value - Value to be converted to hex
 * @param returnType - If true, it will return the type of the value
 *
 * @example
 * ```ts
 * console.log(web3.utils.toHex(10));
 * > 0xa
 *
 * console.log(web3.utils.toHex('0x123', true));
 * > bytes
 *```
 */
const toHex = (value, returnType) => {
  if (typeof value === 'string' && isAddress$1(value)) {
    return returnType ? 'address' : `0x${value.toLowerCase().replace(/^0x/i, '')}`;
  }
  if (typeof value === 'boolean') {
    // eslint-disable-next-line no-nested-ternary
    return returnType ? 'bool' : value ? '0x01' : '0x00';
  }
  if (typeof value === 'number') {
    // eslint-disable-next-line no-nested-ternary
    return returnType ? value < 0 ? 'int256' : 'uint256' : numberToHex$1(value);
  }
  if (typeof value === 'bigint') {
    return returnType ? 'bigint' : numberToHex$1(value);
  }
  if (typeof value === 'object' && !!value) {
    return returnType ? 'string' : utf8ToHex(JSON.stringify(value));
  }
  if (typeof value === 'string') {
    if (value.startsWith('-0x') || value.startsWith('-0X')) {
      return returnType ? 'int256' : numberToHex$1(value);
    }
    if (isHexStrict$1(value)) {
      return returnType ? 'bytes' : value;
    }
    if (isHex$1(value) && !isInt(value) && !isUInt(value)) {
      return returnType ? 'bytes' : `0x${value}`;
    }
    if (isHex$1(value) && !isInt(value) && isUInt(value)) {
      return returnType ? 'uint' : numberToHex$1(value);
    }
    if (!Number.isFinite(value)) {
      return returnType ? 'string' : utf8ToHex(value);
    }
  }
  throw new HexProcessingError(value);
};
/**
 * Converts any given value into it's number representation, if possible, else into it's bigint representation.
 * @param value - The value to convert
 * @returns - Returns the value in number or bigint representation
 *
 * @example
 * ```ts
 * console.log(web3.utils.toNumber(1));
 * > 1
 * console.log(web3.utils.toNumber(Number.MAX_SAFE_INTEGER));
 * > 9007199254740991
 *
 * console.log(web3.utils.toNumber(BigInt(Number.MAX_SAFE_INTEGER)));
 * > 9007199254740991
 *
 * console.log(web3.utils.toNumber(BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1)));
 * > 9007199254740992n
 *
 * ```
 */
const toNumber = value => {
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'bigint') {
    return value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER ? Number(value) : value;
  }
  if (typeof value === 'string' && isHexStrict$1(value)) {
    return hexToNumber$1(value);
  }
  try {
    return toNumber(BigInt(value));
  } catch (_a) {
    throw new InvalidNumberError(value);
  }
};
/**
 * Auto converts any given value into it's bigint representation
 *
 * @param value - The value to convert
 * @returns - Returns the value in bigint representation

 * @example
 * ```ts
 * console.log(web3.utils.toBigInt(1));
 * > 1n
 * ```
 */
const toBigInt = value => {
  if (typeof value === 'number') {
    return BigInt(value);
  }
  if (typeof value === 'bigint') {
    return value;
  }
  // isHex passes for dec, too
  if (typeof value === 'string' && isHex$1(value)) {
    if (value.startsWith('-')) {
      return -BigInt(value.substring(1));
    }
    return BigInt(value);
  }
  throw new InvalidNumberError(value);
};
/**
 * Takes a number of wei and converts it to any other ether unit.
 * @param number - The value in wei
 * @param unit - The unit to convert to
 * @returns - Returns the converted value in the given unit
 *
 * @example
 * ```ts
 * console.log(web3.utils.fromWei("1", "ether"));
 * > 0.000000000000000001
 *
 * console.log(web3.utils.fromWei("1", "shannon"));
 * > 0.000000001
 * ```
 */
const fromWei = (number, unit) => {
  const denomination = ethUnitMap[unit];
  if (!denomination) {
    throw new InvalidUnitError(unit);
  }
  // value in wei would always be integer
  // 13456789, 1234
  const value = String(toNumber(number));
  // count number of zeros in denomination
  // 1000000 -> 6
  const numberOfZerosInDenomination = denomination.toString().length - 1;
  if (numberOfZerosInDenomination <= 0) {
    return value.toString();
  }
  // pad the value with required zeros
  // 13456789 -> 13456789, 1234 -> 001234
  const zeroPaddedValue = value.padStart(numberOfZerosInDenomination, '0');
  // get the integer part of value by counting number of zeros from start
  // 13456789 -> '13'
  // 001234 -> ''
  const integer = zeroPaddedValue.slice(0, -numberOfZerosInDenomination);
  // get the fraction part of value by counting number of zeros backward
  // 13456789 -> '456789'
  // 001234 -> '001234'
  const fraction = zeroPaddedValue.slice(-numberOfZerosInDenomination).replace(/\.?0+$/, '');
  if (integer === '') {
    return `0.${fraction}`;
  }
  if (fraction === '') {
    return integer;
  }
  return `${integer}.${fraction}`;
};
/**
 * Takes a number of a unit and converts it to wei.
 *
 * @param number - The number to convert.
 * @param unit - {@link EtherUnits} The unit of the number passed.
 * @returns The number converted to wei.
 *
 * @example
 * ```ts
 * console.log(web3.utils.toWei("0.001", "ether"));
 * > 1000000000000000 //(wei)
 * ```
 */
// todo in 1.x unit defaults to 'ether'
const toWei = (number, unit) => {
  validator.validate(['number'], [number]);
  const denomination = ethUnitMap[unit];
  if (!denomination) {
    throw new InvalidUnitError(unit);
  }
  // if value is decimal e.g. 24.56 extract `integer` and `fraction` part
  // to avoid `fraction` to be null use `concat` with empty string
  const [integer, fraction] = String(typeof number === 'string' && !isHexStrict$1(number) ? number : toNumber(number)).split('.').concat('');
  // join the value removing `.` from
  // 24.56 -> 2456
  const value = BigInt(`${integer}${fraction}`);
  // multiply value with denomination
  // 2456 * 1000000 -> 2456000000
  const updatedValue = value * denomination;
  // count number of zeros in denomination
  const numberOfZerosInDenomination = denomination.toString().length - 1;
  // check which either `fraction` or `denomination` have lower number of zeros
  const decimals = Math.min(fraction.length, numberOfZerosInDenomination);
  if (decimals === 0) {
    return updatedValue.toString();
  }
  // Add zeros to make length equal to required decimal points
  // If string is larger than decimal points required then remove last zeros
  return updatedValue.toString().padStart(decimals, '0').slice(0, -decimals);
};
/**
 * Will convert an upper or lowercase Ethereum address to a checksum address.
 * @param address - An address string
 * @returns	The checksum address
 * @example
 * ```ts
 * web3.utils.toChecksumAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d');
 * > "0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d"
 * ```
 */
const toChecksumAddress = address => {
  if (!isAddress$1(address, false)) {
    throw new InvalidAddressError(address);
  }
  const lowerCaseAddress = address.toLowerCase().replace(/^0x/i, '');
  // calling `Uint8Array.from` because `noble-hashes` checks with `instanceof Uint8Array` that fails in some edge cases:
  // 	https://github.com/paulmillr/noble-hashes/issues/25#issuecomment-1750106284
  const hash = uint8ArrayToHexString$1(keccak256(ensureIfUint8Array(utf8ToBytes$2(lowerCaseAddress))));
  if (isNullish$1(hash) || hash === '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470') return ''; // // EIP-1052 if hash is equal to c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470, keccak was given empty data
  let checksumAddress = '0x';
  const addressHash = hash.replace(/^0x/i, '');
  for (let i = 0; i < lowerCaseAddress.length; i += 1) {
    // If ith character is 8 to f then make it uppercase
    if (parseInt(addressHash[i], 16) > 7) {
      checksumAddress += lowerCaseAddress[i].toUpperCase();
    } else {
      checksumAddress += lowerCaseAddress[i];
    }
  }
  return checksumAddress;
};
const toBool = value => {
  if (typeof value === 'boolean') {
    return value;
  }
  if (typeof value === 'number' && (value === 0 || value === 1)) {
    return Boolean(value);
  }
  if (typeof value === 'bigint' && (value === BigInt(0) || value === BigInt(1))) {
    return Boolean(value);
  }
  if (typeof value === 'string' && !isHexStrict$1(value) && (value === '1' || value === '0' || value === 'false' || value === 'true')) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    return Boolean(Number(value));
  }
  if (typeof value === 'string' && isHexStrict$1(value) && (value === '0x1' || value === '0x0')) {
    return Boolean(toNumber(value));
  }
  throw new InvalidBooleanError(value);
};

var eventemitter3 = {exports: {}};

eventemitter3.exports;
(function (module) {

  var has = Object.prototype.hasOwnProperty,
    prefix = '~';

  /**
   * Constructor to create a storage for our `EE` objects.
   * An `Events` instance is a plain object whose properties are event names.
   *
   * @constructor
   * @private
   */
  function Events() {}

  //
  // We try to not inherit from `Object.prototype`. In some engines creating an
  // instance in this way is faster than calling `Object.create(null)` directly.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // character to make sure that the built-in object properties are not
  // overridden or used as an attack vector.
  //
  if (Object.create) {
    Events.prototype = Object.create(null);

    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
  }

  /**
   * Representation of a single event listener.
   *
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
   * @constructor
   * @private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Add a listener for a given event.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} once Specify if the listener is a one-time listener.
   * @returns {EventEmitter}
   * @private
   */
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
      throw new TypeError('The listener must be a function');
    }
    var listener = new EE(fn, context || emitter, once),
      evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
    return emitter;
  }

  /**
   * Clear event by name.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} evt The Event name.
   * @private
   */
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
  }

  /**
   * Minimal `EventEmitter` interface that is molded against the Node.js
   * `EventEmitter` interface.
   *
   * @constructor
   * @public
   */
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = [],
      events,
      name;
    if (this._eventsCount === 0) return names;
    for (name in events = this._events) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
  };

  /**
   * Return the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Array} The registered listeners.
   * @public
   */
  EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event,
      handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }
    return ee;
  };

  /**
   * Return the number of listeners listening to a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Number} The number of listeners.
   * @public
   */
  EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event,
      listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  };

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt],
      len = arguments.length,
      args,
      i;
    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length,
        j;
      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
              args[j - 1] = arguments[j];
            }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };

  /**
   * Add a listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };

  /**
   * Add a one-time listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };

  /**
   * Remove the listeners of a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {*} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
          events.push(listeners[i]);
        }
      }

      //
      // Reset the array, or remove it completely if we have no more listeners.
      //
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
    }
    return this;
  };

  /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {(String|Symbol)} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Allow `EventEmitter` to be imported as module namespace.
  //
  EventEmitter.EventEmitter = EventEmitter;

  //
  // Expose the module.
  //
  {
    module.exports = EventEmitter;
  }
})(eventemitter3);
var eventemitter3Exports = eventemitter3.exports;
var EventEmitter$3 = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * This class copy the behavior of Node.js EventEmitter class.
 * It is used to provide the same interface for the browser environment.
 */
class EventEmitter$2 extends EventEmitter$3 {
  constructor() {
    super(...arguments);
    // must be defined for backwards compatibility
    this.maxListeners = Number.MAX_SAFE_INTEGER;
  }
  setMaxListeners(maxListeners) {
    this.maxListeners = maxListeners;
    return this;
  }
  getMaxListeners() {
    return this.maxListeners;
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @deprecated Will be removed in next release. Please use `web3-validator` package instead.
 */
const isHexStrict = isHexStrict$1;
/**
 * returns true if input is a hexstring, number or bigint
 *
 * @deprecated Will be removed in next release. Please use `web3-validator` package instead.
 */
const isHex = isHex$1;
/**
 * Checks the checksum of a given address. Will also return false on non-checksum addresses.
 *
 * @deprecated Will be removed in next release. Please use `web3-validator` package instead.
 */
const checkAddressCheckSum = checkAddressCheckSum$1;
/**
 * Checks if a given string is a valid Ethereum address. It will also check the checksum, if the address has upper and lowercase letters.
 *
 * @deprecated Will be removed in next release. Please use `web3-validator` package instead.
 */
const isAddress = isAddress$1;
/**
 * Returns true if the bloom is a valid bloom
 * https://github.com/joshstevens19/ethereum-bloom-filters/blob/fbeb47b70b46243c3963fe1c2988d7461ef17236/src/index.ts#L7
 *
 * @deprecated Will be removed in next release. Please use `web3-validator` package instead.
 */
const isBloom = isBloom$1;
/**
 * Returns true if the value is part of the given bloom
 * note: false positives are possible.
 *
 * @deprecated Will be removed in next release. Please use `web3-validator` package instead.
 */
const isInBloom = isInBloom$1;
/**
 * Returns true if the ethereum users address is part of the given bloom note: false positives are possible.
 *
 * @deprecated Will be removed in next release. Please use `web3-validator` package instead.
 */
const isUserEthereumAddressInBloom = isUserEthereumAddressInBloom$1;
/**
 * Returns true if the contract address is part of the given bloom.
 * note: false positives are possible.
 *
 * @deprecated Will be removed in next release. Please use `web3-validator` package instead.
 */
const isContractAddressInBloom = isContractAddressInBloom$1;
/**
 * Checks if its a valid topic
 *
 * @deprecated Will be removed in next release. Please use `web3-validator` package instead.
 */
const isTopic = isTopic$1;
/**
 * Returns true if the topic is part of the given bloom.
 * note: false positives are possible.
 *
 * @deprecated Will be removed in next release. Please use `web3-validator` package instead.
 */
const isTopicInBloom = isTopicInBloom$1;
/**
 * Compares between block A and block B
 * @param blockA - Block number or string
 * @param blockB - Block number or string
 *
 * @returns - Returns -1 if a \< b, returns 1 if a \> b and returns 0 if a == b
 *
 * @example
 * ```ts
 * console.log(web3.utils.compareBlockNumbers('latest', 'pending'));
 * > -1
 *
 * console.log(web3.utils.compareBlockNumbers(12, 11));
 * > 1
 * ```
 */
const compareBlockNumbers = (blockA, blockB) => {
  const isABlockTag = typeof blockA === 'string' && isBlockTag(blockA);
  const isBBlockTag = typeof blockB === 'string' && isBlockTag(blockB);
  if (blockA === blockB || (blockA === 'earliest' || blockA === 0) && (blockB === 'earliest' || blockB === 0) // only exception compare blocktag with number
  ) {
    return 0;
  }
  if (blockA === 'earliest' && blockB > 0) {
    return -1;
  }
  if (blockB === 'earliest' && blockA > 0) {
    return 1;
  }
  if (isABlockTag && isBBlockTag) {
    // Increasing order:  earliest, finalized , safe, latest, pending
    const tagsOrder = {
      [BlockTags.EARLIEST]: 1,
      [BlockTags.FINALIZED]: 2,
      [BlockTags.SAFE]: 3,
      [BlockTags.LATEST]: 4,
      [BlockTags.PENDING]: 5
    };
    if (tagsOrder[blockA] < tagsOrder[blockB]) {
      return -1;
    }
    return 1;
  }
  if (isABlockTag && !isBBlockTag || !isABlockTag && isBBlockTag) {
    throw new InvalidBlockError('Cannot compare blocktag with provided non-blocktag input.');
  }
  const bigIntA = BigInt(blockA);
  const bigIntB = BigInt(blockB);
  if (bigIntA < bigIntB) {
    return -1;
  }
  if (bigIntA === bigIntB) {
    return 0;
  }
  return 1;
};
const isContractInitOptions = options => typeof options === 'object' && !isNullish$1(options) && Object.keys(options).length !== 0 && ['input', 'data', 'from', 'gas', 'gasPrice', 'gasLimit', 'address', 'jsonInterface', 'syncWithContext', 'dataInputFill'].some(key => key in options);
const isNullish = isNullish$1;

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const isIterable = item => typeof item === 'object' && !isNullish$1(item) && !Array.isArray(item) && !(item instanceof TypedArray);
// The following code is a derivative work of the code from the "LiskHQ/lisk-sdk" project,
// which is licensed under Apache version 2.
/**
 * Deep merge two objects.
 * @param destination - The destination object.
 * @param sources - An array of source objects.
 * @returns - The merged object.
 */
const mergeDeep = (destination, ...sources) => {
  if (!isIterable(destination)) {
    return destination;
  }
  const result = Object.assign({}, destination); // clone deep here
  for (const src of sources) {
    // const src = { ..._src };
    // eslint-disable-next-line no-restricted-syntax
    for (const key in src) {
      if (isIterable(src[key])) {
        if (!result[key]) {
          result[key] = {};
        }
        result[key] = mergeDeep(result[key], src[key]);
      } else if (!isNullish$1(src[key]) && Object.hasOwnProperty.call(src, key)) {
        if (Array.isArray(src[key]) || src[key] instanceof TypedArray) {
          result[key] = src[key].slice(0);
        } else {
          result[key] = src[key];
        }
      }
    }
  }
  return result;
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * Adds a padding on the left of a string, if value is a integer or bigInt will be converted to a hex string.
 * @param value - The value to be padded.
 * @param characterAmount - The amount of characters the string should have.
 * @param sign - The sign to be added (default is 0).
 * @returns The padded string.
 *
 * @example
 * ```ts
 *
 * console.log(web3.utils.padLeft('0x123', 10));
 * >0x0000000123
 * ```
 */
const padLeft = (value, characterAmount, sign = '0') => {
  // To avoid duplicate code and circular dependency we will
  // use `padLeft` implementation from `web3-validator`
  if (typeof value === 'string') {
    if (!isHexStrict$1(value)) {
      return value.padStart(characterAmount, sign);
    }
    return padLeft$1(value, characterAmount, sign);
  }
  validator.validate(['int'], [value]);
  return padLeft$1(value, characterAmount, sign);
};
/**
 * Adds a padding on the right of a string, if value is a integer or bigInt will be converted to a hex string.
 * @param value - The value to be padded.
 * @param characterAmount - The amount of characters the string should have.
 * @param sign - The sign to be added (default is 0).
 * @returns The padded string.
 *
 * @example
 * ```ts
 * console.log(web3.utils.padRight('0x123', 10));
 * > 0x1230000000
 *
 * console.log(web3.utils.padRight('0x123', 10, '1'));
 * > 0x1231111111
 * ```
 */
const padRight = (value, characterAmount, sign = '0') => {
  if (typeof value === 'string' && !isHexStrict$1(value)) {
    return value.padEnd(characterAmount, sign);
  }
  validator.validate(['int'], [value]);
  const hexString = typeof value === 'string' && isHexStrict$1(value) ? value : numberToHex$1(value);
  const prefixLength = hexString.startsWith('-') ? 3 : 2;
  return hexString.padEnd(characterAmount + prefixLength, sign);
};
/**
 * Adds a padding on the right of a string, if value is a integer or bigInt will be converted to a hex string. @alias `padRight`
 */
const rightPad = padRight;
/**
 * Adds a padding on the left of a string, if value is a integer or bigInt will be converted to a hex string. @alias `padLeft`
 */
const leftPad = padLeft;
/**
 * Converts a negative number into the two’s complement and return a hexstring of 64 nibbles.
 * @param value - The value to be converted.
 * @param nibbleWidth - The nibble width of the hex string (default is 64).
 *
 * @returns The hex string of the two’s complement.
 *
 * @example
 * ```ts
 * console.log(web3.utils.toTwosComplement(13, 32));
 * > 0x0000000000000000000000000000000d
 *
 * console.log(web3.utils.toTwosComplement('-0x1', 32));
 * > 0xffffffffffffffffffffffffffffffff
 *
 * console.log(web3.utils.toTwosComplement(BigInt('9007199254740992'), 32));
 * > 0x00000000000000000020000000000000
 * ```
 */
const toTwosComplement = (value, nibbleWidth = 64) => {
  validator.validate(['int'], [value]);
  const val = toNumber(value);
  if (val >= 0) return padLeft(toHex(val), nibbleWidth);
  const largestBit = bigintPower(BigInt(2), BigInt(nibbleWidth * 4));
  if (-val >= largestBit) {
    throw new NibbleWidthError(`value: ${value}, nibbleWidth: ${nibbleWidth}`);
  }
  const updatedVal = BigInt(val);
  const complement = updatedVal + largestBit;
  return padLeft(numberToHex$1(complement), nibbleWidth);
};
/**
 * Converts the twos complement into a decimal number or big int.
 * @param value - The value to be converted.
 * @param nibbleWidth - The nibble width of the hex string (default is 64).
 * @returns The decimal number or big int.
 *
 * @example
 * ```ts
 * console.log(web3.utils.fromTwosComplement('0x0000000000000000000000000000000d', 32'));
 * > 13
 *
 * console.log(web3.utils.fromTwosComplement('0x00000000000000000020000000000000', 32));
 * > 9007199254740992n
 * ```
 */
const fromTwosComplement = (value, nibbleWidth = 64) => {
  validator.validate(['int'], [value]);
  const val = toNumber(value);
  if (val < 0) return val;
  const largestBit = Math.ceil(Math.log(Number(val)) / Math.log(2));
  if (largestBit > nibbleWidth * 4) throw new NibbleWidthError(`value: "${value}", nibbleWidth: "${nibbleWidth}"`);
  // check the largest bit to see if negative
  if (nibbleWidth * 4 !== largestBit) return val;
  const complement = bigintPower(BigInt(2), BigInt(nibbleWidth) * BigInt(4));
  return toNumber(BigInt(val) - complement);
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const {
  parseBaseType
} = utils$2;
const isDataFormat = dataFormat => typeof dataFormat === 'object' && !isNullish$1(dataFormat) && 'number' in dataFormat && 'bytes' in dataFormat;
/**
 * Finds the schema that corresponds to a specific data path within a larger JSON schema.
 * It works by iterating over the dataPath array and traversing the JSON schema one step at a time until it reaches the end of the path.
 *
 * @param schema - represents a JSON schema, which is an object that describes the structure of JSON data
 * @param dataPath - represents an array of strings that specifies the path to the data within the JSON schema
 * @param oneOfPath - represents an optional array of two-element tuples that specifies the "oneOf" option to choose, if the schema has oneOf and the data path can match multiple subschemas
 * @returns the JSON schema that matches the data path
 *
 */
const findSchemaByDataPath = (schema, dataPath, oneOfPath = []) => {
  let result = Object.assign({}, schema);
  let previousDataPath;
  for (const dataPart of dataPath) {
    if (result.oneOf && previousDataPath) {
      const path = oneOfPath.find(function (element) {
        return this === element[0];
      }, previousDataPath !== null && previousDataPath !== void 0 ? previousDataPath : '');
      if (path && path[0] === previousDataPath) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        result = result.oneOf[path[1]];
      }
    }
    if (!result.properties && !result.items) {
      return undefined;
    }
    if (result.properties) {
      result = result.properties[dataPart];
    } else if (result.items && result.items.properties) {
      const node = result.items.properties;
      if (!node) {
        return undefined;
      }
      result = node[dataPart];
    } else if (result.items && isObject(result.items)) {
      result = result.items;
    } else if (result.items && Array.isArray(result.items)) {
      result = result.items[parseInt(dataPart, 10)];
    }
    if (result && dataPart) previousDataPath = dataPart;
  }
  return result;
};
/**
 * Converts a value depending on the format
 * @param value - value to convert
 * @param ethType - The type of the value to be parsed
 * @param format - The format to be converted to
 * @returns - The value converted to the specified format
 */
const convertScalarValue = (value, ethType, format) => {
  try {
    const {
      baseType,
      baseTypeSize
    } = parseBaseType(ethType);
    if (baseType === 'int' || baseType === 'uint') {
      switch (format.number) {
        case FMT_NUMBER.NUMBER:
          return Number(toBigInt(value));
        case FMT_NUMBER.HEX:
          return numberToHex$1(toBigInt(value));
        case FMT_NUMBER.STR:
          return toBigInt(value).toString();
        case FMT_NUMBER.BIGINT:
          return toBigInt(value);
        default:
          throw new FormatterError(`Invalid format: ${String(format.number)}`);
      }
    }
    if (baseType === 'bytes') {
      let paddedValue;
      if (baseTypeSize) {
        if (typeof value === 'string') paddedValue = padLeft(value, baseTypeSize * 2);else if (isUint8Array(value)) {
          paddedValue = uint8ArrayConcat(new Uint8Array(baseTypeSize - value.length), value);
        }
      } else {
        paddedValue = value;
      }
      switch (format.bytes) {
        case FMT_BYTES.HEX:
          return bytesToHex$2(bytesToUint8Array(paddedValue));
        case FMT_BYTES.UINT8ARRAY:
          return bytesToUint8Array(paddedValue);
        default:
          throw new FormatterError(`Invalid format: ${String(format.bytes)}`);
      }
    }
  } catch (error) {
    // If someone didn't use `eth` keyword we can return original value
    // as the scope of this code is formatting not validation
    return value;
  }
  return value;
};
/**
 * Converts the data to the specified format
 * @param data - data to convert
 * @param schema - The JSON schema that describes the structure of the data
 * @param dataPath - A string array that specifies the path to the data within the JSON schema
 * @param format  - The format to be converted to
 * @param oneOfPath - An optional array of two-element tuples that specifies the "oneOf" option to choose, if the schema has oneOf and the data path can match multiple subschemas
 * @returns - The data converted to the specified format
 */
const convert$1 = (data, schema, dataPath, format, oneOfPath = []) => {
  var _a, _b;
  // If it's a scalar value
  if (!isObject(data) && !Array.isArray(data)) {
    return convertScalarValue(data, schema === null || schema === void 0 ? void 0 : schema.format, format);
  }
  const object = data;
  for (const [key, value] of Object.entries(object)) {
    dataPath.push(key);
    const schemaProp = findSchemaByDataPath(schema, dataPath, oneOfPath);
    // If value is a scaler value
    if (isNullish$1(schemaProp)) {
      delete object[key];
      dataPath.pop();
      continue;
    }
    // If value is an object, recurse into it
    if (isObject(value)) {
      convert$1(value, schema, dataPath, format);
      dataPath.pop();
      continue;
    }
    // If value is an array
    if (Array.isArray(value)) {
      let _schemaProp = schemaProp;
      // TODO This is a naive approach to solving the issue of
      // a schema using oneOf. This chunk of code was intended to handle
      // BlockSchema.transactions
      // TODO BlockSchema.transactions are not being formatted
      if ((schemaProp === null || schemaProp === void 0 ? void 0 : schemaProp.oneOf) !== undefined) {
        // The following code is basically saying:
        // if the schema specifies oneOf, then we are to loop
        // over each possible schema and check if they type of the schema
        // matches the type of value[0], and if so we use the oneOfSchemaProp
        // as the schema for formatting
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        schemaProp.oneOf.forEach((oneOfSchemaProp, index) => {
          var _a, _b;
          if (!Array.isArray(schemaProp === null || schemaProp === void 0 ? void 0 : schemaProp.items) && (typeof value[0] === 'object' && ((_a = oneOfSchemaProp === null || oneOfSchemaProp === void 0 ? void 0 : oneOfSchemaProp.items) === null || _a === void 0 ? void 0 : _a.type) === 'object' || typeof value[0] === 'string' && ((_b = oneOfSchemaProp === null || oneOfSchemaProp === void 0 ? void 0 : oneOfSchemaProp.items) === null || _b === void 0 ? void 0 : _b.type) !== 'object')) {
            _schemaProp = oneOfSchemaProp;
            oneOfPath.push([key, index]);
          }
        });
      }
      if (isNullish$1(_schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items)) {
        // Can not find schema for array item, delete that item
        delete object[key];
        dataPath.pop();
        continue;
      }
      // If schema for array items is a single type
      if (isObject(_schemaProp.items) && !isNullish$1(_schemaProp.items.format)) {
        for (let i = 0; i < value.length; i += 1) {
          object[key][i] = convertScalarValue(value[i],
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          (_a = _schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items) === null || _a === void 0 ? void 0 : _a.format, format);
        }
        dataPath.pop();
        continue;
      }
      // If schema for array items is an object
      if (!Array.isArray(_schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items) && ((_b = _schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items) === null || _b === void 0 ? void 0 : _b.type) === 'object') {
        for (const arrObject of value) {
          convert$1(arrObject, schema, dataPath, format, oneOfPath);
        }
        dataPath.pop();
        continue;
      }
      // If schema for array is a tuple
      if (Array.isArray(_schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items)) {
        for (let i = 0; i < value.length; i += 1) {
          object[key][i] = convertScalarValue(value[i], _schemaProp.items[i].format, format);
        }
        dataPath.pop();
        continue;
      }
    }
    object[key] = convertScalarValue(value, schemaProp.format, format);
    dataPath.pop();
  }
  return object;
};
const format$3 = (schema, data, returnFormat) => {
  let dataToParse;
  if (isObject(data)) {
    dataToParse = mergeDeep({}, data);
  } else if (Array.isArray(data)) {
    dataToParse = [...data];
  } else {
    dataToParse = data;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const jsonSchema = isObject(schema) ? schema : ethAbiToJsonSchema(schema);
  if (!jsonSchema.properties && !jsonSchema.items && !jsonSchema.format) {
    throw new FormatterError('Invalid json schema for formatting');
  }
  return convert$1(dataToParse, jsonSchema, [], returnFormat);
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
const SHA3_EMPTY_BYTES = '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
/**
 * computes the Keccak-256 hash of the input and returns a hexstring
 * @param data - the input to hash
 * @returns - the Keccak-256 hash of the input
 *
 * @example
 * ```ts
 * console.log(web3.utils.sha3('web3.js'));
 * > 0x63667efb1961039c9bb0d6ea7a5abdd223a3aca7daa5044ad894226e1f83919a
 *
 * console.log(web3.utils.sha3(''));
 * > undefined
 * ```
 */
const sha3 = data => {
  let updatedData;
  if (typeof data === 'string') {
    if (data.startsWith('0x') && isHexStrict$1(data)) {
      updatedData = hexToBytes$2(data);
    } else {
      updatedData = utf8ToBytes$3(data);
    }
  } else {
    updatedData = data;
  }
  const hash = bytesToHex$2(keccak256(ensureIfUint8Array(updatedData)));
  // EIP-1052 if hash is equal to c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470, keccak was given empty data
  return hash === SHA3_EMPTY_BYTES ? undefined : hash;
};
/**
 * Will calculate the sha3 of the input but does return the hash value instead of null if for example a empty string is passed.
 * @param data - the input to hash
 * @returns - the Keccak-256 hash of the input
 *
 * @example
 * ```ts
 * conosle.log(web3.utils.sha3Raw('web3.js'));
 * > 0x63667efb1961039c9bb0d6ea7a5abdd223a3aca7daa5044ad894226e1f83919a
 *
 * console.log(web3.utils.sha3Raw(''));
 * > 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470
 * ```
 */
const sha3Raw = data => {
  const hash = sha3(data);
  if (isNullish$1(hash)) {
    return SHA3_EMPTY_BYTES;
  }
  return hash;
};
/**
 * A wrapper for ethereum-cryptography/keccak256 to allow hashing a `string` and a `bigint` in addition to `UInt8Array`
 * @param data - the input to hash
 * @returns - the Keccak-256 hash of the input
 *
 * @example
 * ```ts
 * console.log(web3.utils.keccak256Wrapper('web3.js'));
 * > 0x63667efb1961039c9bb0d6ea7a5abdd223a3aca7daa5044ad894226e1f83919a
 *
 * console.log(web3.utils.keccak256Wrapper(1));
 * > 0xc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6
 *
 * console.log(web3.utils.keccak256Wrapper(0xaf12fd));
 * > 0x358640fd4719fa923525d74ab5ae80a594301aba5543e3492b052bf4598b794c
 * ```
 */
const keccak256Wrapper = data => {
  let processedData;
  if (typeof data === 'bigint' || typeof data === 'number') {
    processedData = utf8ToBytes$3(data.toString());
  } else if (Array.isArray(data)) {
    processedData = new Uint8Array(data);
  } else if (typeof data === 'string' && !isHexStrict$1(data)) {
    processedData = utf8ToBytes$3(data);
  } else {
    processedData = bytesToUint8Array(data);
  }
  return bytesToHex$2(keccak256(ensureIfUint8Array(processedData)));
};
/**
 * returns type and value
 * @param arg - the input to return the type and value
 * @returns - the type and value of the input
 */
const getType = arg => {
  if (Array.isArray(arg)) {
    throw new Error('Autodetection of array types is not supported.');
  }
  let type;
  let value;
  // if type is given
  if (typeof arg === 'object' && ('t' in arg || 'type' in arg) && ('v' in arg || 'value' in arg)) {
    type = 't' in arg ? arg.t : arg.type;
    value = 'v' in arg ? arg.v : arg.value;
    type = type.toLowerCase() === 'bigint' ? 'int' : type;
  } else if (typeof arg === 'bigint') {
    return ['int', arg];
  }
  // otherwise try to guess the type
  else {
    type = toHex(arg, true);
    value = toHex(arg);
    if (!type.startsWith('int') && !type.startsWith('uint')) {
      type = 'bytes';
    }
  }
  if ((type.startsWith('int') || type.startsWith('uint')) && typeof value === 'string' && !/^(-)?0x/i.test(value)) {
    value = toBigInt(value);
  }
  return [type, value];
};
/**
 * returns the type with size if uint or int
 * @param name - the input to return the type with size
 * @returns - the type with size of the input
 */
const elementaryName = name => {
  if (name.startsWith('int[')) {
    return `int256${name.slice(3)}`;
  }
  if (name === 'int') {
    return 'int256';
  }
  if (name.startsWith('uint[')) {
    return `uint256'${name.slice(4)}`;
  }
  if (name === 'uint') {
    return 'uint256';
  }
  return name;
};
/**
 * returns the size of the value of type 'byte'
 */
const parseTypeN = (value, typeLength) => {
  const typesize = /^(\d+).*$/.exec(value.slice(typeLength));
  return typesize ? parseInt(typesize[1], 10) : 0;
};
/**
 * returns the bit length of the value
 * @param value - the input to return the bit length
 * @returns - the bit length of the input
 */
const bitLength = value => {
  const updatedVal = value.toString(2);
  return updatedVal.length;
};
/**
 * Pads the value based on size and type
 * returns a string of the padded value
 * @param type - the input to pad
 * @returns = the padded value
 */
const solidityPack = (type, val) => {
  const value = val.toString();
  if (type === 'string') {
    if (typeof val === 'string') return utf8ToHex(val);
    throw new InvalidStringError(val);
  }
  if (type === 'bool' || type === 'boolean') {
    if (typeof val === 'boolean') return val ? '01' : '00';
    throw new InvalidBooleanError(val);
  }
  if (type === 'address') {
    if (!isAddress$1(value)) {
      throw new InvalidAddressError(value);
    }
    return value;
  }
  const name = elementaryName(type);
  if (type.startsWith('uint')) {
    const size = parseTypeN(name, 'uint'.length);
    if (size % 8 || size < 8 || size > 256) {
      throw new InvalidSizeError(value);
    }
    const num = toNumber(value);
    if (bitLength(num) > size) {
      throw new InvalidLargeValueError(value);
    }
    if (num < BigInt(0)) {
      throw new InvalidUnsignedIntegerError(value);
    }
    return size ? leftPad(num.toString(16), size / 8 * 2) : num.toString(16);
  }
  if (type.startsWith('int')) {
    const size = parseTypeN(name, 'int'.length);
    if (size % 8 || size < 8 || size > 256) {
      throw new InvalidSizeError(type);
    }
    const num = toNumber(value);
    if (bitLength(num) > size) {
      throw new InvalidLargeValueError(value);
    }
    if (num < BigInt(0)) {
      return toTwosComplement(num.toString(), size / 8 * 2);
    }
    return size ? leftPad(num.toString(16), size / 4) : num.toString(16);
  }
  if (name === 'bytes') {
    if (value.replace(/^0x/i, '').length % 2 !== 0) {
      throw new InvalidBytesError(value);
    }
    return value;
  }
  if (type.startsWith('bytes')) {
    if (value.replace(/^0x/i, '').length % 2 !== 0) {
      throw new InvalidBytesError(value);
    }
    const size = parseTypeN(type, 'bytes'.length);
    if (!size || size < 1 || size > 64 || size < value.replace(/^0x/i, '').length / 2) {
      throw new InvalidBytesError(value);
    }
    return rightPad(value, size * 2);
  }
  return '';
};
/**
 * returns a string of the tightly packed value given based on the type
 * @param arg - the input to return the tightly packed value
 * @returns - the tightly packed value
 */
const processSolidityEncodePackedArgs = arg => {
  const [type, val] = getType(arg);
  // array case
  if (Array.isArray(val)) {
    // go through each element of the array and use map function to create new hexarg list
    const hexArg = val.map(v => solidityPack(type, v).replace('0x', ''));
    return hexArg.join('');
  }
  const hexArg = solidityPack(type, val);
  return hexArg.replace('0x', '');
};
/**
 * Encode packed arguments to a hexstring
 */
const encodePacked = (...values) => {
  const hexArgs = values.map(processSolidityEncodePackedArgs);
  return `0x${hexArgs.join('').toLowerCase()}`;
};
/**
 * Will tightly pack values given in the same way solidity would then hash.
 * returns a hash string, or null if input is empty
 * @param values - the input to return the tightly packed values
 * @returns - the keccack246 of the tightly packed values
 *
 * @example
 * ```ts
 * console.log(web3.utils.soliditySha3({ type: "string", value: "31323334" }));
 * > 0xf15f8da2ad27e486d632dc37d24912f634398918d6f9913a0a0ff84e388be62b
 * ```
 */
const soliditySha3 = (...values) => sha3(encodePacked(...values));
/**
 * Will tightly pack values given in the same way solidity would then hash.
 * returns a hash string, if input is empty will return `0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470`
 * @param values - the input to return the tightly packed values
 * @returns - the keccack246 of the tightly packed values
 *
 * @example
 * ```ts
 * console.log(web3.utils.soliditySha3Raw({ type: "string", value: "helloworld" }))
 * > 0xfa26db7ca85ead399216e7c6316bc50ed24393c3122b582735e7f3b0f91b93f0
 * ```
 */
const soliditySha3Raw = (...values) => sha3Raw(encodePacked(...values));
/**
 * Get slot number for storage long string in contract. Basically for getStorage method
 * returns slotNumber where will data placed
 * @param mainSlotNumber - the slot number where will be stored hash of long string
 * @returns - the slot number where will be stored long string
 */
const getStorageSlotNumForLongString = mainSlotNumber => sha3(`0x${(typeof mainSlotNumber === 'number' ? mainSlotNumber.toString() : mainSlotNumber).padStart(64, '0')}`);

function getRandomBytesSync(bytes) {
  return randomBytes$2(bytes);
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * Returns a random byte array by the given bytes size
 * @param size - The size of the random byte array returned
 * @returns - random byte array
 *
 * @example
 * ```ts
 * console.log(web3.utils.randomBytes(32));
 * > Uint8Array(32) [
 *       93, 172, 226,  32,  33, 176, 156, 156,
 *       182,  30, 240,   2,  69,  96, 174, 197,
 *       33, 136, 194, 241, 197, 156, 110, 111,
 *       66,  87,  17,  88,  67,  48, 245, 183
 *    ]
 * ```
 */
const randomBytes$1 = size => getRandomBytesSync(size);
/**
 * Returns a random hex string by the given bytes size
 * @param byteSize - The size of the random hex string returned
 * @returns - random hex string
 *
 * ```ts
 * console.log(web3.utils.randomHex(32));
 * > 0x139f5b88b72a25eab053d3b57fe1f8a9dbc62a526b1cb1774d0d7db1c3e7ce9e
 * ```
 */
const randomHex = byteSize => bytesToHex$2(randomBytes$1(byteSize));

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
var __awaiter$C = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
/**
 * An alternative to the node function `isPromise` that exists in `util/types` because it is not available on the browser.
 * @param object - to check if it is a `Promise`
 * @returns `true` if it is an `object` or a `function` that has a `then` function. And returns `false` otherwise.
 */
function isPromise(object) {
  return (typeof object === 'object' || typeof object === 'function') &&
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  typeof object.then === 'function';
}
/**
 * Wait for a promise but interrupt it if it did not resolve within a given timeout.
 * If the timeout reached, before the promise code resolve, either throw an error if an error object was provided, or return `undefined`.
 * @param awaitable - The promise or function to wait for.
 * @param timeout - The timeout in milliseconds.
 * @param error - (Optional) The error to throw if the timeout reached.
 */
function waitWithTimeout(awaitable, timeout, error) {
  return __awaiter$C(this, void 0, void 0, function* () {
    let timeoutId;
    const result = yield Promise.race([awaitable instanceof Promise ? awaitable : awaitable(), new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => error ? reject(error) : resolve(undefined), timeout);
    })]);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (result instanceof Error) {
      throw result;
    }
    return result;
  });
}
/**
 * Repeatedly calls an async function with a given interval until the result of the function is defined (not undefined or null),
 * or until a timeout is reached. It returns promise and intervalId.
 * @param func - The function to call.
 * @param interval - The interval in milliseconds.
 */
function pollTillDefinedAndReturnIntervalId(func, interval) {
  let intervalId;
  const polledRes = new Promise((resolve, reject) => {
    intervalId = setInterval(function intervalCallbackFunc() {
      (() => __awaiter$C(this, void 0, void 0, function* () {
        try {
          const res = yield waitWithTimeout(func, interval);
          if (!isNullish$1(res)) {
            clearInterval(intervalId);
            resolve(res);
          }
        } catch (error) {
          clearInterval(intervalId);
          reject(error);
        }
      }))();
      return intervalCallbackFunc;
    }() // this will immediate invoke first call
    , interval);
  });
  return [polledRes, intervalId];
}
/**
 * Repeatedly calls an async function with a given interval until the result of the function is defined (not undefined or null),
 * or until a timeout is reached.
 * pollTillDefinedAndReturnIntervalId() function should be used instead of pollTillDefined if you need IntervalId in result.
 * This function will be deprecated in next major release so use pollTillDefinedAndReturnIntervalId().
 * @param func - The function to call.
 * @param interval - The interval in milliseconds.
 */
function pollTillDefined(func, interval) {
  return __awaiter$C(this, void 0, void 0, function* () {
    return pollTillDefinedAndReturnIntervalId(func, interval)[0];
  });
}
/**
 * Enforce a timeout on a promise, so that it can be rejected if it takes too long to complete
 * @param timeout - The timeout to enforced in milliseconds.
 * @param error - The error to throw if the timeout is reached.
 * @returns A tuple of the timeout id and the promise that will be rejected if the timeout is reached.
 *
 * @example
 * ```ts
 * const [timerId, promise] = web3.utils.rejectIfTimeout(100, new Error('time out'));
 * ```
 */
function rejectIfTimeout(timeout, error) {
  let timeoutId;
  const rejectOnTimeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(error);
    }, timeout);
  });
  return [timeoutId, rejectOnTimeout];
}
/**
 * Sets an interval that repeatedly executes the given cond function with the specified interval between each call.
 * If the condition is met, the interval is cleared and a Promise that rejects with the returned value is returned.
 * @param cond - The function/confition to call.
 * @param interval - The interval in milliseconds.
 * @returns - an array with the interval ID and the Promise.
 */
function rejectIfConditionAtInterval(cond, interval) {
  let intervalId;
  const rejectIfCondition = new Promise((_, reject) => {
    intervalId = setInterval(() => {
      (() => __awaiter$C(this, void 0, void 0, function* () {
        const error = yield cond();
        if (error) {
          clearInterval(intervalId);
          reject(error);
        }
      }))();
    }, interval);
  });
  return [intervalId, rejectIfCondition];
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * Generate a version 4 (random) uuid
 * https://github.com/uuidjs/uuid/blob/main/src/v4.js#L5
 * @returns - A version 4 uuid of the form xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx
 * @example
 * ```ts
 * console.log(web3.utils.uuidV4());
 * > "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"
 * ```
 */
const uuidV4 = () => {
  const bytes = randomBytes$1(16);
  // https://github.com/ethers-io/ethers.js/blob/ce8f1e4015c0f27bf178238770b1325136e3351a/packages/json-wallets/src.ts/utils.ts#L54
  // Section: 4.1.3:
  // - time_hi_and_version[12:16] = 0b0100
  /* eslint-disable-next-line */
  bytes[6] = bytes[6] & 0x0f | 0x40;
  // Section 4.4
  // - clock_seq_hi_and_reserved[6] = 0b0
  // - clock_seq_hi_and_reserved[7] = 0b1
  /* eslint-disable-next-line */
  bytes[8] = bytes[8] & 0x3f | 0x80;
  const hexString = bytesToHex$2(bytes);
  return [hexString.substring(2, 10), hexString.substring(10, 14), hexString.substring(14, 18), hexString.substring(18, 22), hexString.substring(22, 34)].join('-');
};

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
// check if code is a valid rpc server error code
const isResponseRpcError = rpcError => {
  const errorCode = rpcError.error.code;
  return rpcErrorsMap.has(errorCode) || errorCode >= -32099 && errorCode <= -32000;
};
const isResponseWithResult = response => !Array.isArray(response) && !!response && response.jsonrpc === '2.0' &&
// JSON RPC consider "null" as valid response
'result' in response && isNullish$1(response.error) && (typeof response.id === 'number' || typeof response.id === 'string');
// To avoid circular package dependency, copied to code here. If you update this please update same function in `response_errors.ts`
const isResponseWithError = response => !Array.isArray(response) && response.jsonrpc === '2.0' && !!response && isNullish$1(response.result) &&
// JSON RPC consider "null" as valid response
'error' in response && (typeof response.id === 'number' || typeof response.id === 'string');
const isResponseWithNotification = response => !Array.isArray(response) && !!response && response.jsonrpc === '2.0' && !isNullish$1(response.params) && !isNullish$1(response.method);
const isSubscriptionResult = response => !Array.isArray(response) && !!response && response.jsonrpc === '2.0' && 'id' in response &&
// JSON RPC consider "null" as valid response
'result' in response;
const validateResponse = response => isResponseWithResult(response) || isResponseWithError(response);
const isValidResponse = response => Array.isArray(response) ? response.every(validateResponse) : validateResponse(response);
const isBatchResponse = response => Array.isArray(response) && response.length > 0 && isValidResponse(response);
// internal optional variable to increment and use for the jsonrpc `id`
let requestIdSeed;
/**
 * Optionally use to make the jsonrpc `id` start from a specific number.
 * Without calling this function, the `id` will be filled with a Uuid.
 * But after this being called with a number, the `id` will be a number staring from the provided `start` variable.
 * However, if `undefined` was passed to this function, the `id` will be a Uuid again.
 * @param start - a number to start incrementing from.
 * 	Or `undefined` to use a new Uuid (this is the default behavior)
 */
const setRequestIdStart = start => {
  requestIdSeed = start;
};
const toPayload = request => {
  var _a, _b, _c, _d;
  if (typeof requestIdSeed !== 'undefined') {
    requestIdSeed += 1;
  }
  return {
    jsonrpc: (_a = request.jsonrpc) !== null && _a !== void 0 ? _a : '2.0',
    id: (_c = (_b = request.id) !== null && _b !== void 0 ? _b : requestIdSeed) !== null && _c !== void 0 ? _c : uuidV4(),
    method: request.method,
    params: (_d = request.params) !== null && _d !== void 0 ? _d : undefined
  };
};
const toBatchPayload = requests => requests.map(request => toPayload(request));
const isBatchRequest = request => Array.isArray(request) && request.length > 0;

var json_rpc = /*#__PURE__*/Object.freeze({
	__proto__: null,
	isResponseRpcError: isResponseRpcError,
	isResponseWithResult: isResponseWithResult,
	isResponseWithError: isResponseWithError,
	isResponseWithNotification: isResponseWithNotification,
	isSubscriptionResult: isSubscriptionResult,
	validateResponse: validateResponse,
	isValidResponse: isValidResponse,
	isBatchResponse: isBatchResponse,
	setRequestIdStart: setRequestIdStart,
	toPayload: toPayload,
	toBatchPayload: toBatchPayload,
	isBatchRequest: isBatchRequest
});

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
var __awaiter$B = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var _a$2;
/**
 * The class is a simple implementation of a deferred promise with optional timeout functionality,
 * which can be useful when dealing with asynchronous tasks.
 *
 */
class Web3DeferredPromise {
  /**
   *
   * @param timeout - (optional) The timeout in milliseconds.
   * @param eagerStart - (optional) If true, the timer starts as soon as the promise is created.
   * @param timeoutMessage - (optional) The message to include in the timeout erro that is thrown when the promise times out.
   */
  constructor({
    timeout,
    eagerStart,
    timeoutMessage
  } = {
    timeout: 0,
    eagerStart: false,
    timeoutMessage: 'DeferredPromise timed out'
  }) {
    // public tag to treat object as promise by different libs
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    this[_a$2] = 'Promise';
    this._state = 'pending';
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this._timeoutMessage = timeoutMessage;
    this._timeoutInterval = timeout;
    if (eagerStart) {
      this.startTimer();
    }
  }
  /**
   * Returns the current state of the promise.
   * @returns 'pending' | 'fulfilled' | 'rejected'
   */
  get state() {
    return this._state;
  }
  /**
   *
   * @param onfulfilled - (optional) The callback to execute when the promise is fulfilled.
   * @param onrejected  - (optional) The callback to execute when the promise is rejected.
   * @returns
   */
  then(onfulfilled, onrejected) {
    return __awaiter$B(this, void 0, void 0, function* () {
      return this._promise.then(onfulfilled, onrejected);
    });
  }
  /**
   *
   * @param onrejected - (optional) The callback to execute when the promise is rejected.
   * @returns
   */
  catch(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onrejected) {
    return __awaiter$B(this, void 0, void 0, function* () {
      return this._promise.catch(onrejected);
    });
  }
  /**
   *
   * @param onfinally - (optional) The callback to execute when the promise is settled (fulfilled or rejected).
   * @returns
   */
  finally(onfinally) {
    return __awaiter$B(this, void 0, void 0, function* () {
      return this._promise.finally(onfinally);
    });
  }
  /**
   * Resolves the current promise.
   * @param value - The value to resolve the promise with.
   */
  resolve(value) {
    this._resolve(value);
    this._state = 'fulfilled';
    this._clearTimeout();
  }
  /**
   * Rejects the current promise.
   * @param reason - The reason to reject the promise with.
   */
  reject(reason) {
    this._reject(reason);
    this._state = 'rejected';
    this._clearTimeout();
  }
  /**
   * Starts the timeout timer for the promise.
   */
  startTimer() {
    if (this._timeoutInterval && this._timeoutInterval > 0) {
      this._timeoutId = setTimeout(this._checkTimeout.bind(this), this._timeoutInterval);
    }
  }
  _checkTimeout() {
    if (this._state === 'pending' && this._timeoutId) {
      this.reject(new OperationTimeoutError(this._timeoutMessage));
    }
  }
  _clearTimeout() {
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
  }
}
_a$2 = Symbol.toStringTag;

class ChunkResponseParser {
  constructor(eventEmitter, autoReconnect) {
    this.eventEmitter = eventEmitter;
    this.autoReconnect = autoReconnect;
    this.chunkTimout = 1000 * 15;
  }
  clearQueues() {
    if (typeof this._clearQueues === 'function') {
      this._clearQueues();
    }
  }
  onError(clearQueues) {
    this._clearQueues = clearQueues;
  }
  parseResponse(data) {
    const returnValues = [];
    // DE-CHUNKER
    const dechunkedData = data.replace(/\}[\n\r]?\{/g, '}|--|{') // }{
    .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
    .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
    .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
    .split('|--|');
    dechunkedData.forEach(_chunkData => {
      // prepend the last chunk
      let chunkData = _chunkData;
      if (this.lastChunk) {
        chunkData = this.lastChunk + chunkData;
      }
      let result;
      try {
        result = JSON.parse(chunkData);
      } catch (e) {
        this.lastChunk = chunkData;
        // start timeout to cancel all requests
        if (this.lastChunkTimeout) {
          clearTimeout(this.lastChunkTimeout);
        }
        this.lastChunkTimeout = setTimeout(() => {
          if (this.autoReconnect) return;
          this.clearQueues();
          this.eventEmitter.emit('error', new InvalidResponseError({
            id: 1,
            jsonrpc: '2.0',
            error: {
              code: 2,
              message: 'Chunk timeout'
            }
          }));
        }, this.chunkTimout);
        return;
      }
      // cancel timeout and set chunk to null
      clearTimeout(this.lastChunkTimeout);
      this.lastChunk = undefined;
      if (result) returnValues.push(result);
    });
    return returnValues;
  }
}

var __awaiter$A = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
/**
 * This is an abstract class, which extends {@link Web3BaseProvider} class. This class is used to implement a provider that adheres to the EIP-1193 standard for Ethereum providers.
 */
class Eip1193Provider extends Web3BaseProvider {
  constructor() {
    super(...arguments);
    this._eventEmitter = new EventEmitter$3();
    this._chainId = '';
    this._accounts = [];
  }
  _getChainId() {
    var _a;
    return __awaiter$A(this, void 0, void 0, function* () {
      const data = yield this.request(toPayload({
        method: 'eth_chainId',
        params: []
      }));
      return (_a = data === null || data === void 0 ? void 0 : data.result) !== null && _a !== void 0 ? _a : '';
    });
  }
  _getAccounts() {
    var _a;
    return __awaiter$A(this, void 0, void 0, function* () {
      const data = yield this.request(toPayload({
        method: 'eth_accounts',
        params: []
      }));
      return (_a = data === null || data === void 0 ? void 0 : data.result) !== null && _a !== void 0 ? _a : [];
    });
  }
  _onConnect() {
    Promise.all([this._getChainId().then(chainId => {
      if (chainId !== this._chainId) {
        this._chainId = chainId;
        this._eventEmitter.emit('chainChanged', this._chainId);
      }
    }).catch(err => {
      // todo: add error handler
      console.error(err);
    }), this._getAccounts().then(accounts => {
      if (!(this._accounts.length === accounts.length && accounts.every(v => accounts.includes(v)))) {
        this._accounts = accounts;
        this._onAccountsChanged();
      }
    }).catch(err => {
      // todo: add error handler
      // eslint-disable-next-line no-console
      console.error(err);
    })]).then(() => this._eventEmitter.emit('connect', {
      chainId: this._chainId
    })).catch(err => {
      // todo: add error handler
      // eslint-disable-next-line no-console
      console.error(err);
    });
  }
  // todo this must be ProvideRpcError with a message too
  _onDisconnect(code, data) {
    this._eventEmitter.emit('disconnect', new EIP1193ProviderRpcError(code, data));
  }
  _onAccountsChanged() {
    // get chainId and safe to local
    this._eventEmitter.emit('accountsChanged', this._accounts);
  }
}

var __awaiter$z = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const DEFAULT_RECONNECTION_OPTIONS = {
  autoReconnect: true,
  delay: 5000,
  maxAttempts: 5
};
const NORMAL_CLOSE_CODE = 1000; // https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/close
class SocketProvider extends Eip1193Provider {
  /**
   * This is an abstract class for implementing a socket provider (e.g. WebSocket, IPC). It extends the EIP-1193 provider {@link EIP1193Provider}.
   * @param socketPath - The path to the socket (e.g. /ipc/path or ws://localhost:8546)
   * @param socketOptions - The options for the socket connection. Its type is supposed to be specified in the inherited classes.
   * @param reconnectOptions - The options for the socket reconnection {@link ReconnectOptions}
   */
  constructor(socketPath, socketOptions, reconnectOptions) {
    super();
    this._connectionStatus = 'connecting';
    // Message handlers. Due to bounding of `this` and removing the listeners we have to keep it's reference.
    this._onMessageHandler = this._onMessage.bind(this);
    this._onOpenHandler = this._onConnect.bind(this);
    this._onCloseHandler = this._onCloseEvent.bind(this);
    this._onErrorHandler = this._onError.bind(this);
    if (!this._validateProviderPath(socketPath)) throw new InvalidClientError(socketPath);
    this._socketPath = socketPath;
    this._socketOptions = socketOptions;
    this._reconnectOptions = Object.assign(Object.assign({}, DEFAULT_RECONNECTION_OPTIONS), reconnectOptions !== null && reconnectOptions !== void 0 ? reconnectOptions : {});
    this._pendingRequestsQueue = new Map();
    this._sentRequestsQueue = new Map();
    this._init();
    this.connect();
    this.chunkResponseParser = new ChunkResponseParser(this._eventEmitter, this._reconnectOptions.autoReconnect);
    this.chunkResponseParser.onError(() => {
      this._clearQueues();
    });
    this.isReconnecting = false;
  }
  get SocketConnection() {
    return this._socketConnection;
  }
  _init() {
    this._reconnectAttempts = 0;
  }
  /**
   * Try to establish a connection to the socket
   */
  connect() {
    try {
      this._openSocketConnection();
      this._connectionStatus = 'connecting';
      this._addSocketListeners();
    } catch (e) {
      if (!this.isReconnecting) {
        this._connectionStatus = 'disconnected';
        if (e && e.message) {
          throw new ConnectionError(`Error while connecting to ${this._socketPath}. Reason: ${e.message}`);
        } else {
          throw new InvalidClientError(this._socketPath);
        }
      } else {
        setImmediate(() => {
          this._reconnect();
        });
      }
    }
  }
  // eslint-disable-next-line class-methods-use-this
  _validateProviderPath(path) {
    return !!path;
  }
  /**
   *
   * @returns the pendingRequestQueue size
   */
  // eslint-disable-next-line class-methods-use-this
  getPendingRequestQueueSize() {
    return this._pendingRequestsQueue.size;
  }
  /**
   *
   * @returns the sendPendingRequests size
   */
  // eslint-disable-next-line class-methods-use-this
  getSentRequestsQueueSize() {
    return this._sentRequestsQueue.size;
  }
  /**
   *
   * @returns `true` if the socket supports subscriptions
   */
  // eslint-disable-next-line class-methods-use-this
  supportsSubscriptions() {
    return true;
  }
  on(type, listener) {
    this._eventEmitter.on(type, listener);
  }
  once(type, listener) {
    this._eventEmitter.once(type, listener);
  }
  removeListener(type, listener) {
    this._eventEmitter.removeListener(type, listener);
  }
  _onDisconnect(code, data) {
    this._connectionStatus = 'disconnected';
    super._onDisconnect(code, data);
  }
  /**
   * Disconnects the socket
   * @param code - The code to be sent to the server
   * @param data - The data to be sent to the server
   */
  disconnect(code, data) {
    const disconnectCode = code !== null && code !== void 0 ? code : NORMAL_CLOSE_CODE;
    this._removeSocketListeners();
    if (this.getStatus() !== 'disconnected') {
      this._closeSocketConnection(disconnectCode, data);
    }
    this._onDisconnect(disconnectCode, data);
  }
  /**
   * Safely disconnects the socket, async and waits for request size to be 0 before disconnecting
   * @param forceDisconnect - If true, will clear queue after 5 attempts of waiting for both pending and sent queue to be 0
   * @param ms - Determines the ms of setInterval
   * @param code - The code to be sent to the server
   * @param data - The data to be sent to the server
   */
  safeDisconnect(code, data, forceDisconnect = false, ms = 1000) {
    return __awaiter$z(this, void 0, void 0, function* () {
      let retryAttempt = 0;
      const checkQueue = () => __awaiter$z(this, void 0, void 0, function* () {
        return new Promise(resolve => {
          const interval = setInterval(() => {
            if (forceDisconnect && retryAttempt === 5) {
              this.clearQueues();
            }
            if (this.getPendingRequestQueueSize() === 0 && this.getSentRequestsQueueSize() === 0) {
              clearInterval(interval);
              resolve(true);
            }
            retryAttempt += 1;
          }, ms);
        });
      });
      yield checkQueue();
      this.disconnect(code, data);
    });
  }
  /**
   * Removes all listeners for the specified event type.
   * @param type - The event type to remove the listeners for
   */
  removeAllListeners(type) {
    this._eventEmitter.removeAllListeners(type);
  }
  _onError(event) {
    // do not emit error while trying to reconnect
    if (this.isReconnecting) {
      this._reconnect();
    } else {
      this._eventEmitter.emit('error', event);
    }
  }
  /**
   * Resets the socket, removing all listeners and pending requests
   */
  reset() {
    this._sentRequestsQueue.clear();
    this._pendingRequestsQueue.clear();
    this._init();
    this._removeSocketListeners();
    this._addSocketListeners();
  }
  _reconnect() {
    if (this.isReconnecting) {
      return;
    }
    this.isReconnecting = true;
    if (this._sentRequestsQueue.size > 0) {
      this._sentRequestsQueue.forEach((request, key) => {
        request.deferredPromise.reject(new PendingRequestsOnReconnectingError());
        this._sentRequestsQueue.delete(key);
      });
    }
    if (this._reconnectAttempts < this._reconnectOptions.maxAttempts) {
      this._reconnectAttempts += 1;
      setTimeout(() => {
        this._removeSocketListeners();
        this.connect();
        this.isReconnecting = false;
      }, this._reconnectOptions.delay);
    } else {
      this.isReconnecting = false;
      this._clearQueues();
      this._removeSocketListeners();
      this._eventEmitter.emit('error', new MaxAttemptsReachedOnReconnectingError(this._reconnectOptions.maxAttempts));
    }
  }
  /**
   *  Creates a request object to be sent to the server
   */
  request(request) {
    return __awaiter$z(this, void 0, void 0, function* () {
      if (isNullish(this._socketConnection)) {
        throw new Error('Connection is undefined');
      }
      // if socket disconnected - open connection
      if (this.getStatus() === 'disconnected') {
        this.connect();
      }
      const requestId = isBatchRequest(request) ? request[0].id : request.id;
      if (!requestId) {
        throw new Web3WSProviderError('Request Id not defined');
      }
      if (this._sentRequestsQueue.has(requestId)) {
        throw new RequestAlreadySentError(requestId);
      }
      const deferredPromise = new Web3DeferredPromise();
      deferredPromise.catch(error => {
        this._eventEmitter.emit('error', error);
      });
      const reqItem = {
        payload: request,
        deferredPromise
      };
      if (this.getStatus() === 'connecting') {
        this._pendingRequestsQueue.set(requestId, reqItem);
        return reqItem.deferredPromise;
      }
      this._sentRequestsQueue.set(requestId, reqItem);
      try {
        this._sendToSocket(reqItem.payload);
      } catch (error) {
        this._sentRequestsQueue.delete(requestId);
        this._eventEmitter.emit('error', error);
      }
      return deferredPromise;
    });
  }
  _onConnect() {
    this._connectionStatus = 'connected';
    this._reconnectAttempts = 0;
    super._onConnect();
    this._sendPendingRequests();
  }
  _sendPendingRequests() {
    for (const [id, value] of this._pendingRequestsQueue.entries()) {
      this._sendToSocket(value.payload);
      this._pendingRequestsQueue.delete(id);
      this._sentRequestsQueue.set(id, value);
    }
  }
  _onMessage(event) {
    const responses = this._parseResponses(event);
    if (isNullish(responses) || responses.length === 0) {
      return;
    }
    for (const response of responses) {
      if (isResponseWithNotification(response) && response.method.endsWith('_subscription')) {
        this._eventEmitter.emit('message', response);
        return;
      }
      const requestId = isBatchResponse(response) ? response[0].id : response.id;
      const requestItem = this._sentRequestsQueue.get(requestId);
      if (!requestItem) {
        return;
      }
      if (isBatchResponse(response) || isResponseWithResult(response) || isResponseWithError(response)) {
        this._eventEmitter.emit('message', response);
        requestItem.deferredPromise.resolve(response);
      }
      this._sentRequestsQueue.delete(requestId);
    }
  }
  clearQueues(event) {
    this._clearQueues(event);
  }
  _clearQueues(event) {
    if (this._pendingRequestsQueue.size > 0) {
      this._pendingRequestsQueue.forEach((request, key) => {
        request.deferredPromise.reject(new ConnectionNotOpenError(event));
        this._pendingRequestsQueue.delete(key);
      });
    }
    if (this._sentRequestsQueue.size > 0) {
      this._sentRequestsQueue.forEach((request, key) => {
        request.deferredPromise.reject(new ConnectionNotOpenError(event));
        this._sentRequestsQueue.delete(key);
      });
    }
    this._removeSocketListeners();
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/

var utils$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	jsonRpc: json_rpc,
	ethUnitMap: ethUnitMap,
	bytesToUint8Array: bytesToUint8Array,
	bytesToHex: bytesToHex$2,
	hexToBytes: hexToBytes$2,
	hexToNumber: hexToNumber$1,
	toDecimal: toDecimal,
	numberToHex: numberToHex$1,
	fromDecimal: fromDecimal,
	hexToNumberString: hexToNumberString,
	utf8ToHex: utf8ToHex,
	fromUtf8: fromUtf8,
	stringToHex: stringToHex,
	hexToUtf8: hexToUtf8,
	toUtf8: toUtf8,
	utf8ToBytes: utf8ToBytes$2,
	hexToString: hexToString,
	asciiToHex: asciiToHex,
	fromAscii: fromAscii,
	hexToAscii: hexToAscii,
	toAscii: toAscii,
	toHex: toHex,
	toNumber: toNumber,
	toBigInt: toBigInt,
	fromWei: fromWei,
	toWei: toWei,
	toChecksumAddress: toChecksumAddress,
	toBool: toBool,
	EventEmitter: EventEmitter$2,
	isHexStrict: isHexStrict,
	isHex: isHex,
	checkAddressCheckSum: checkAddressCheckSum,
	isAddress: isAddress,
	isBloom: isBloom,
	isInBloom: isInBloom,
	isUserEthereumAddressInBloom: isUserEthereumAddressInBloom,
	isContractAddressInBloom: isContractAddressInBloom,
	isTopic: isTopic,
	isTopicInBloom: isTopicInBloom,
	compareBlockNumbers: compareBlockNumbers,
	isContractInitOptions: isContractInitOptions,
	isNullish: isNullish,
	isDataFormat: isDataFormat,
	convertScalarValue: convertScalarValue,
	convert: convert$1,
	format: format$3,
	sha3: sha3,
	sha3Raw: sha3Raw,
	keccak256Wrapper: keccak256Wrapper,
	keccak256: keccak256Wrapper,
	processSolidityEncodePackedArgs: processSolidityEncodePackedArgs,
	encodePacked: encodePacked,
	soliditySha3: soliditySha3,
	soliditySha3Raw: soliditySha3Raw,
	getStorageSlotNumForLongString: getStorageSlotNumForLongString,
	randomBytes: randomBytes$1,
	randomHex: randomHex,
	padLeft: padLeft,
	padRight: padRight,
	rightPad: rightPad,
	leftPad: leftPad,
	toTwosComplement: toTwosComplement,
	fromTwosComplement: fromTwosComplement,
	mergeDeep: mergeDeep,
	isPromise: isPromise,
	waitWithTimeout: waitWithTimeout,
	pollTillDefinedAndReturnIntervalId: pollTillDefinedAndReturnIntervalId,
	pollTillDefined: pollTillDefined,
	rejectIfTimeout: rejectIfTimeout,
	rejectIfConditionAtInterval: rejectIfConditionAtInterval,
	isResponseRpcError: isResponseRpcError,
	isResponseWithResult: isResponseWithResult,
	isResponseWithError: isResponseWithError,
	isResponseWithNotification: isResponseWithNotification,
	isSubscriptionResult: isSubscriptionResult,
	validateResponse: validateResponse,
	isValidResponse: isValidResponse,
	isBatchResponse: isBatchResponse,
	setRequestIdStart: setRequestIdStart,
	toPayload: toPayload,
	toBatchPayload: toBatchPayload,
	isBatchRequest: isBatchRequest,
	Web3DeferredPromise: Web3DeferredPromise,
	ChunkResponseParser: ChunkResponseParser,
	uuidV4: uuidV4,
	Eip1193Provider: Eip1193Provider,
	SocketProvider: SocketProvider,
	isUint8Array: isUint8Array,
	uint8ArrayConcat: uint8ArrayConcat,
	uint8ArrayEquals: uint8ArrayEquals
});

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
class Web3EventEmitter {
  constructor() {
    this._emitter = new EventEmitter$2();
  }
  on(eventName, fn) {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this._emitter.on(eventName, fn);
  }
  once(eventName, fn) {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this._emitter.once(eventName, fn);
  }
  off(eventName, fn) {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this._emitter.off(eventName, fn);
  }
  emit(eventName, params) {
    this._emitter.emit(eventName, params);
  }
  listenerCount(eventName) {
    return this._emitter.listenerCount(eventName);
  }
  listeners(eventName) {
    return this._emitter.listeners(eventName);
  }
  eventNames() {
    return this._emitter.eventNames();
  }
  removeAllListeners() {
    return this._emitter.removeAllListeners();
  }
  setMaxListenerWarningThreshold(maxListenersWarningThreshold) {
    this._emitter.setMaxListeners(maxListenersWarningThreshold);
  }
  getMaxListeners() {
    return this._emitter.getMaxListeners();
  }
}

/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
var Web3ConfigEvent;
(function (Web3ConfigEvent) {
  Web3ConfigEvent["CONFIG_CHANGE"] = "CONFIG_CHANGE";
})(Web3ConfigEvent || (Web3ConfigEvent = {}));
class Web3Config extends Web3EventEmitter {
  constructor(options) {
    super();
    this.config = {
      handleRevert: false,
      defaultAccount: undefined,
      defaultBlock: 'latest',
      transactionBlockTimeout: 50,
      transactionConfirmationBlocks: 24,
      transactionPollingInterval: 1000,
      transactionPollingTimeout: 750 * 1000,
      transactionReceiptPollingInterval: undefined,
      transactionSendTimeout: 750 * 1000,
      transactionConfirmationPollingInterval: undefined,
      blockHeaderTimeout: 10,
      maxListenersWarningThreshold: 100,
      contractDataInputFill: 'data',
      defaultNetworkId: undefined,
      defaultChain: 'mainnet',
      defaultHardfork: 'london',
      // TODO - Check if there is a default Common
      defaultCommon: undefined,
      defaultTransactionType: '0x2',
      defaultMaxPriorityFeePerGas: toHex(2500000000),
      enableExperimentalFeatures: {
        useSubscriptionWhenCheckingBlockTimeout: false,
        useRpcCallSpecification: false
      },
      transactionBuilder: undefined,
      transactionTypeParser: undefined
    };
    this.setConfig(options !== null && options !== void 0 ? options : {});
  }
  setConfig(options) {
    // TODO: Improve and add key check
    const keys = Object.keys(options);
    for (const key of keys) {
      this._triggerConfigChange(key, options[key]);
    }
    Object.assign(this.config, options);
  }
  /**
   * The `handleRevert` options property returns the revert reason string if enabled for the following methods:
   * - web3.eth.sendTransaction()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   * - myContract.methods.myMethod().send()
   * Default is `false`.
   *
   * `Note`: At the moment `handleRevert` is only supported for `sendTransaction` and not for `sendSignedTransaction`
   */
  get handleRevert() {
    return this.config.handleRevert;
  }
  /**
   * Will set the handleRevert
   */
  set handleRevert(val) {
    this._triggerConfigChange('handleRevert', val);
    this.config.handleRevert = val;
  }
  /**
   * The `contractDataInputFill` options property will allow you to set the hash of the method signature and encoded parameters to the property
   * either `data`, `input` or both within your contract.
   * This will affect the contracts send, call and estimateGas methods
   * Default is `input`.
   */
  get contractDataInputFill() {
    return this.config.contractDataInputFill;
  }
  /**
   * Will set the contractDataInputFill
   */
  set contractDataInputFill(val) {
    this._triggerConfigChange('contractDataInputFill', val);
    this.config.contractDataInputFill = val;
  }
  /**
   * This default address is used as the default `from` property, if no `from` property is specified in for the following methods:
   * - web3.eth.sendTransaction()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   * - myContract.methods.myMethod().send()
   */
  get defaultAccount() {
    return this.config.defaultAccount;
  }
  /**
   * Will set the default account.
   */
  set defaultAccount(val) {
    this._triggerConfigChange('defaultAccount', val);
    this.config.defaultAccount = val;
  }
  /**
   * The default block is used for certain methods. You can override it by passing in the defaultBlock as last parameter. The default value is `"latest"`.
   * - web3.eth.getBalance()
   * - web3.eth.getCode()
   * - web3.eth.getTransactionCount()
   * - web3.eth.getStorageAt()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   */
  get defaultBlock() {
    return this.config.defaultBlock;
  }
  /**
   * Will set the default block.
   *
   * - A block number
   * - `"earliest"` - String: The genesis block
   * - `"latest"` - String: The latest block (current head of the blockchain)
   * - `"pending"` - String: The currently mined block (including pending transactions)
   * - `"finalized"` - String: (For POS networks) The finalized block is one which has been accepted as canonical by greater than 2/3 of validators
   * - `"safe"` - String: (For POS networks) The safe head block is one which under normal network conditions, is expected to be included in the canonical chain. Under normal network conditions the safe head and the actual tip of the chain will be equivalent (with safe head trailing only by a few seconds). Safe heads will be less likely to be reorged than the proof of work network`s latest blocks.
   */
  set defaultBlock(val) {
    this._triggerConfigChange('defaultBlock', val);
    this.config.defaultBlock = val;
  }
  /**
   * The time used to wait for Ethereum Node to return the sent transaction result.
   * Note: If the RPC call stuck at the Node and therefor timed-out, the transaction may still be pending or even mined by the Network. We recommend checking the pending transactions in such a case.
   * Default is `750` seconds (12.5 minutes).
   */
  get transactionSendTimeout() {
    return this.config.transactionSendTimeout;
  }
  /**
   * Will set the transactionSendTimeout.
   */
  set transactionSendTimeout(val) {
    this._triggerConfigChange('transactionSendTimeout', val);
    this.config.transactionSendTimeout = val;
  }
  /**
   * The `transactionBlockTimeout` is used over socket-based connections. This option defines the amount of new blocks it should wait until the first confirmation happens, otherwise the PromiEvent rejects with a timeout error.
   * Default is `50`.
   */
  get transactionBlockTimeout() {
    return this.config.transactionBlockTimeout;
  }
  /**
   * Will set the transactionBlockTimeout.
   */
  set transactionBlockTimeout(val) {
    this._triggerConfigChange('transactionBlockTimeout', val);
    this.config.transactionBlockTimeout = val;
  }
  /**
   * This defines the number of blocks it requires until a transaction is considered confirmed.
   * Default is `24`.
   */
  get transactionConfirmationBlocks() {
    return this.config.transactionConfirmationBlocks;
  }
  /**
   * Will set the transactionConfirmationBlocks.
   */
  set transactionConfirmationBlocks(val) {
    this._triggerConfigChange('transactionConfirmationBlocks', val);
    this.config.transactionConfirmationBlocks = val;
  }
  /**
   * Used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
   * Default is `1000` ms.
   */
  get transactionPollingInterval() {
    return this.config.transactionPollingInterval;
  }
  /**
   * Will set the transactionPollingInterval.
   */
  set transactionPollingInterval(val) {
    this._triggerConfigChange('transactionPollingInterval', val);
    this.config.transactionPollingInterval = val;
    this.transactionReceiptPollingInterval = val;
    this.transactionConfirmationPollingInterval = val;
  }
  /**
   * Used over HTTP connections. This option defines the number of seconds Web3 will wait for a receipt which confirms that a transaction was mined by the network. Note: If this method times out, the transaction may still be pending.
   * Default is `750` seconds (12.5 minutes).
   */
  get transactionPollingTimeout() {
    return this.config.transactionPollingTimeout;
  }
  /**
   * Will set the transactionPollingTimeout.
   */
  set transactionPollingTimeout(val) {
    this._triggerConfigChange('transactionPollingTimeout', val);
    this.config.transactionPollingTimeout = val;
  }
  /**
   * The `transactionPollingInterval` is used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
   * Default is `undefined`
   */
  get transactionReceiptPollingInterval() {
    return this.config.transactionReceiptPollingInterval;
  }
  /**
   * Will set the transactionReceiptPollingInterval
   */
  set transactionReceiptPollingInterval(val) {
    this._triggerConfigChange('transactionReceiptPollingInterval', val);
    this.config.transactionReceiptPollingInterval = val;
  }
  get transactionConfirmationPollingInterval() {
    return this.config.transactionConfirmationPollingInterval;
  }
  set transactionConfirmationPollingInterval(val) {
    this._triggerConfigChange('transactionConfirmationPollingInterval', val);
    this.config.transactionConfirmationPollingInterval = val;
  }
  /**
   * The blockHeaderTimeout is used over socket-based connections. This option defines the amount seconds it should wait for `'newBlockHeaders'` event before falling back to polling to fetch transaction receipt.
   * Default is `10` seconds.
   */
  get blockHeaderTimeout() {
    return this.config.blockHeaderTimeout;
  }
  /**
   * Will set the blockHeaderTimeout
   */
  set blockHeaderTimeout(val) {
    this._triggerConfigChange('blockHeaderTimeout', val);
    this.config.blockHeaderTimeout = val;
  }
  /**
   * The enableExperimentalFeatures is used to enable trying new experimental features that are still not fully implemented or not fully tested or still have some related issues.
   * Default is `false` for every feature.
   */
  get enableExperimentalFeatures() {
    return this.config.enableExperimentalFeatures;
  }
  /**
   * Will set the enableExperimentalFeatures
   */
  set enableExperimentalFeatures(val) {
    this._triggerConfigChange('enableExperimentalFeatures', val);
    this.config.enableExperimentalFeatures = val;
  }
  get maxListenersWarningThreshold() {
    return this.config.maxListenersWarningThreshold;
  }
  set maxListenersWarningThreshold(val) {
    this._triggerConfigChange('maxListenersWarningThreshold', val);
    this.setMaxListenerWarningThreshold(val);
    this.config.maxListenersWarningThreshold = val;
  }
  get defaultNetworkId() {
    return this.config.defaultNetworkId;
  }
  set defaultNetworkId(val) {
    this._triggerConfigChange('defaultNetworkId', val);
    this.config.defaultNetworkId = val;
  }
  get defaultChain() {
    return this.config.defaultChain;
  }
  set defaultChain(val) {
    if (!isNullish(this.config.defaultCommon) && !isNullish(this.config.defaultCommon.baseChain) && val !== this.config.defaultCommon.baseChain) throw new ConfigChainMismatchError(this.config.defaultChain, val);
    this._triggerConfigChange('defaultChain', val);
    this.config.defaultChain = val;
  }
  /**
   * Will return the default hardfork. Default is `london`
   * The default hardfork property can be one of the following:
   * - `chainstart`
   * - `homestead`
   * - `dao`
   * - `tangerineWhistle`
   * - `spuriousDragon`
   * - `byzantium`
   * - `constantinople`
   * - `petersburg`
   * - `istanbul`
   * - `berlin`
   * - `london`
   * - 'arrowGlacier',
   * - 'tangerineWhistle',
   * - 'muirGlacier'
   *
   */
  get defaultHardfork() {
    return this.config.defaultHardfork;
  }
  /**
   * Will set the default hardfork.
   *
   */
  set defaultHardfork(val) {
    if (!isNullish(this.config.defaultCommon) && !isNullish(this.config.defaultCommon.hardfork) && val !== this.config.defaultCommon.hardfork) throw new ConfigHardforkMismatchError(this.config.defaultCommon.hardfork, val);
    this._triggerConfigChange('defaultHardfork', val);
    this.config.defaultHardfork = val;
  }
  /**
   *
   * Will get the default common property
   * The default common property does contain the following Common object:
   * - `customChain` - `Object`: The custom chain properties
   * 	- `name` - `string`: (optional) The name of the chain
   * 	- `networkId` - `number`: Network ID of the custom chain
   * 	- `chainId` - `number`: Chain ID of the custom chain
   * - `baseChain` - `string`: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
   * - `hardfork` - `string`: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul, berlin, or london
   * Default is `undefined`.
   *
   */
  get defaultCommon() {
    return this.config.defaultCommon;
  }
  /**
   * Will set the default common property
   *
   */
  set defaultCommon(val) {
    // validation check if default hardfork is set and matches defaultCommon hardfork
    if (!isNullish(this.config.defaultHardfork) && !isNullish(val) && !isNullish(val.hardfork) && this.config.defaultHardfork !== val.hardfork) throw new ConfigHardforkMismatchError(this.config.defaultHardfork, val.hardfork);
    if (!isNullish(this.config.defaultChain) && !isNullish(val) && !isNullish(val.baseChain) && this.config.defaultChain !== val.baseChain) throw new ConfigChainMismatchError(this.config.defaultChain, val.baseChain);
    this._triggerConfigChange('defaultCommon', val);
    this.config.defaultCommon = val;
  }
  get defaultTransactionType() {
    return this.config.defaultTransactionType;
  }
  set defaultTransactionType(val) {
    this._triggerConfigChange('defaultTransactionType', val);
    this.config.defaultTransactionType = val;
  }
  get defaultMaxPriorityFeePerGas() {
    return this.config.defaultMaxPriorityFeePerGas;
  }
  set defaultMaxPriorityFeePerGas(val) {
    this._triggerConfigChange('defaultMaxPriorityFeePerGas', val);
    this.config.defaultMaxPriorityFeePerGas = val;
  }
  get transactionBuilder() {
    return this.config.transactionBuilder;
  }
  set transactionBuilder(val) {
    this._triggerConfigChange('transactionBuilder', val);
    this.config.transactionBuilder = val;
  }
  get transactionTypeParser() {
    return this.config.transactionTypeParser;
  }
  set transactionTypeParser(val) {
    this._triggerConfigChange('transactionTypeParser', val);
    this.config.transactionTypeParser = val;
  }
  _triggerConfigChange(config, newValue) {
    this.emit(Web3ConfigEvent.CONFIG_CHANGE, {
      name: config,
      oldValue: this.config[config],
      newValue
    });
  }
}

var nodePonyfill = {exports: {}};

var publicApi = {};

var URL$3 = {exports: {}};

var conversions = {};
var lib$1 = conversions;
function sign$5(x) {
  return x < 0 ? -1 : 1;
}
function evenRound(x) {
  // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
  if (x % 1 === 0.5 && (x & 1) === 0) {
    // [even number].5; round down (i.e. floor)
    return Math.floor(x);
  } else {
    return Math.round(x);
  }
}
function createNumberConversion(bitLength, typeOpts) {
  if (!typeOpts.unsigned) {
    --bitLength;
  }
  const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
  const upperBound = Math.pow(2, bitLength) - 1;
  const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
  const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
  return function (V, opts) {
    if (!opts) opts = {};
    let x = +V;
    if (opts.enforceRange) {
      if (!Number.isFinite(x)) {
        throw new TypeError("Argument is not a finite number");
      }
      x = sign$5(x) * Math.floor(Math.abs(x));
      if (x < lowerBound || x > upperBound) {
        throw new TypeError("Argument is not in byte range");
      }
      return x;
    }
    if (!isNaN(x) && opts.clamp) {
      x = evenRound(x);
      if (x < lowerBound) x = lowerBound;
      if (x > upperBound) x = upperBound;
      return x;
    }
    if (!Number.isFinite(x) || x === 0) {
      return 0;
    }
    x = sign$5(x) * Math.floor(Math.abs(x));
    x = x % moduloVal;
    if (!typeOpts.unsigned && x >= moduloBound) {
      return x - moduloVal;
    } else if (typeOpts.unsigned) {
      if (x < 0) {
        x += moduloVal;
      } else if (x === -0) {
        // don't return negative zero
        return 0;
      }
    }
    return x;
  };
}
conversions["void"] = function () {
  return undefined;
};
conversions["boolean"] = function (val) {
  return !!val;
};
conversions["byte"] = createNumberConversion(8, {
  unsigned: false
});
conversions["octet"] = createNumberConversion(8, {
  unsigned: true
});
conversions["short"] = createNumberConversion(16, {
  unsigned: false
});
conversions["unsigned short"] = createNumberConversion(16, {
  unsigned: true
});
conversions["long"] = createNumberConversion(32, {
  unsigned: false
});
conversions["unsigned long"] = createNumberConversion(32, {
  unsigned: true
});
conversions["long long"] = createNumberConversion(32, {
  unsigned: false,
  moduloBitLength: 64
});
conversions["unsigned long long"] = createNumberConversion(32, {
  unsigned: true,
  moduloBitLength: 64
});
conversions["double"] = function (V) {
  const x = +V;
  if (!Number.isFinite(x)) {
    throw new TypeError("Argument is not a finite floating-point value");
  }
  return x;
};
conversions["unrestricted double"] = function (V) {
  const x = +V;
  if (isNaN(x)) {
    throw new TypeError("Argument is NaN");
  }
  return x;
};

// not quite valid, but good enough for JS
conversions["float"] = conversions["double"];
conversions["unrestricted float"] = conversions["unrestricted double"];
conversions["DOMString"] = function (V, opts) {
  if (!opts) opts = {};
  if (opts.treatNullAsEmptyString && V === null) {
    return "";
  }
  return String(V);
};
conversions["ByteString"] = function (V, opts) {
  const x = String(V);
  let c = undefined;
  for (let i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
    if (c > 255) {
      throw new TypeError("Argument is not a valid bytestring");
    }
  }
  return x;
};
conversions["USVString"] = function (V) {
  const S = String(V);
  const n = S.length;
  const U = [];
  for (let i = 0; i < n; ++i) {
    const c = S.charCodeAt(i);
    if (c < 0xD800 || c > 0xDFFF) {
      U.push(String.fromCodePoint(c));
    } else if (0xDC00 <= c && c <= 0xDFFF) {
      U.push(String.fromCodePoint(0xFFFD));
    } else {
      if (i === n - 1) {
        U.push(String.fromCodePoint(0xFFFD));
      } else {
        const d = S.charCodeAt(i + 1);
        if (0xDC00 <= d && d <= 0xDFFF) {
          const a = c & 0x3FF;
          const b = d & 0x3FF;
          U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
          ++i;
        } else {
          U.push(String.fromCodePoint(0xFFFD));
        }
      }
    }
  }
  return U.join('');
};
conversions["Date"] = function (V, opts) {
  if (!(V instanceof Date)) {
    throw new TypeError("Argument is not a Date object");
  }
  if (isNaN(V)) {
    return undefined;
  }
  return V;
};
conversions["RegExp"] = function (V, opts) {
  if (!(V instanceof RegExp)) {
    V = new RegExp(V);
  }
  return V;
};

var utils = {exports: {}};

utils.exports;
(function (module) {

  module.exports.mixin = function mixin(target, source) {
    const keys = Object.getOwnPropertyNames(source);
    for (let i = 0; i < keys.length; ++i) {
      Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
    }
  };
  module.exports.wrapperSymbol = Symbol("wrapper");
  module.exports.implSymbol = Symbol("impl");
  module.exports.wrapperForImpl = function (impl) {
    return impl[module.exports.wrapperSymbol];
  };
  module.exports.implForWrapper = function (wrapper) {
    return wrapper[module.exports.implSymbol];
  };
})(utils);
var utilsExports = utils.exports;

var URLImpl = {};

var urlStateMachine = {exports: {}};

var tr46 = {};

var require$$1 = [
	[
		[
			0,
			44
		],
		"disallowed_STD3_valid"
	],
	[
		[
			45,
			46
		],
		"valid"
	],
	[
		[
			47,
			47
		],
		"disallowed_STD3_valid"
	],
	[
		[
			48,
			57
		],
		"valid"
	],
	[
		[
			58,
			64
		],
		"disallowed_STD3_valid"
	],
	[
		[
			65,
			65
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			66,
			66
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			67,
			67
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			68,
			68
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			69,
			69
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			70,
			70
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			71,
			71
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			72,
			72
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			73,
			73
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			74,
			74
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			75,
			75
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			76,
			76
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			77,
			77
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			78,
			78
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			79,
			79
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			80,
			80
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			81,
			81
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			82,
			82
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			83,
			83
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			84,
			84
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			85,
			85
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			86,
			86
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			87,
			87
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			88,
			88
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			89,
			89
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			90,
			90
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			91,
			96
		],
		"disallowed_STD3_valid"
	],
	[
		[
			97,
			122
		],
		"valid"
	],
	[
		[
			123,
			127
		],
		"disallowed_STD3_valid"
	],
	[
		[
			128,
			159
		],
		"disallowed"
	],
	[
		[
			160,
			160
		],
		"disallowed_STD3_mapped",
		[
			32
		]
	],
	[
		[
			161,
			167
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			168,
			168
		],
		"disallowed_STD3_mapped",
		[
			32,
			776
		]
	],
	[
		[
			169,
			169
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			170,
			170
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			171,
			172
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			173,
			173
		],
		"ignored"
	],
	[
		[
			174,
			174
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			175,
			175
		],
		"disallowed_STD3_mapped",
		[
			32,
			772
		]
	],
	[
		[
			176,
			177
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			178,
			178
		],
		"mapped",
		[
			50
		]
	],
	[
		[
			179,
			179
		],
		"mapped",
		[
			51
		]
	],
	[
		[
			180,
			180
		],
		"disallowed_STD3_mapped",
		[
			32,
			769
		]
	],
	[
		[
			181,
			181
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			182,
			182
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			183,
			183
		],
		"valid"
	],
	[
		[
			184,
			184
		],
		"disallowed_STD3_mapped",
		[
			32,
			807
		]
	],
	[
		[
			185,
			185
		],
		"mapped",
		[
			49
		]
	],
	[
		[
			186,
			186
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			187,
			187
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			188,
			188
		],
		"mapped",
		[
			49,
			8260,
			52
		]
	],
	[
		[
			189,
			189
		],
		"mapped",
		[
			49,
			8260,
			50
		]
	],
	[
		[
			190,
			190
		],
		"mapped",
		[
			51,
			8260,
			52
		]
	],
	[
		[
			191,
			191
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			192,
			192
		],
		"mapped",
		[
			224
		]
	],
	[
		[
			193,
			193
		],
		"mapped",
		[
			225
		]
	],
	[
		[
			194,
			194
		],
		"mapped",
		[
			226
		]
	],
	[
		[
			195,
			195
		],
		"mapped",
		[
			227
		]
	],
	[
		[
			196,
			196
		],
		"mapped",
		[
			228
		]
	],
	[
		[
			197,
			197
		],
		"mapped",
		[
			229
		]
	],
	[
		[
			198,
			198
		],
		"mapped",
		[
			230
		]
	],
	[
		[
			199,
			199
		],
		"mapped",
		[
			231
		]
	],
	[
		[
			200,
			200
		],
		"mapped",
		[
			232
		]
	],
	[
		[
			201,
			201
		],
		"mapped",
		[
			233
		]
	],
	[
		[
			202,
			202
		],
		"mapped",
		[
			234
		]
	],
	[
		[
			203,
			203
		],
		"mapped",
		[
			235
		]
	],
	[
		[
			204,
			204
		],
		"mapped",
		[
			236
		]
	],
	[
		[
			205,
			205
		],
		"mapped",
		[
			237
		]
	],
	[
		[
			206,
			206
		],
		"mapped",
		[
			238
		]
	],
	[
		[
			207,
			207
		],
		"mapped",
		[
			239
		]
	],
	[
		[
			208,
			208
		],
		"mapped",
		[
			240
		]
	],
	[
		[
			209,
			209
		],
		"mapped",
		[
			241
		]
	],
	[
		[
			210,
			210
		],
		"mapped",
		[
			242
		]
	],
	[
		[
			211,
			211
		],
		"mapped",
		[
			243
		]
	],
	[
		[
			212,
			212
		],
		"mapped",
		[
			244
		]
	],
	[
		[
			213,
			213
		],
		"mapped",
		[
			245
		]
	],
	[
		[
			214,
			214
		],
		"mapped",
		[
			246
		]
	],
	[
		[
			215,
			215
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			216,
			216
		],
		"mapped",
		[
			248
		]
	],
	[
		[
			217,
			217
		],
		"mapped",
		[
			249
		]
	],
	[
		[
			218,
			218
		],
		"mapped",
		[
			250
		]
	],
	[
		[
			219,
			219
		],
		"mapped",
		[
			251
		]
	],
	[
		[
			220,
			220
		],
		"mapped",
		[
			252
		]
	],
	[
		[
			221,
			221
		],
		"mapped",
		[
			253
		]
	],
	[
		[
			222,
			222
		],
		"mapped",
		[
			254
		]
	],
	[
		[
			223,
			223
		],
		"deviation",
		[
			115,
			115
		]
	],
	[
		[
			224,
			246
		],
		"valid"
	],
	[
		[
			247,
			247
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			248,
			255
		],
		"valid"
	],
	[
		[
			256,
			256
		],
		"mapped",
		[
			257
		]
	],
	[
		[
			257,
			257
		],
		"valid"
	],
	[
		[
			258,
			258
		],
		"mapped",
		[
			259
		]
	],
	[
		[
			259,
			259
		],
		"valid"
	],
	[
		[
			260,
			260
		],
		"mapped",
		[
			261
		]
	],
	[
		[
			261,
			261
		],
		"valid"
	],
	[
		[
			262,
			262
		],
		"mapped",
		[
			263
		]
	],
	[
		[
			263,
			263
		],
		"valid"
	],
	[
		[
			264,
			264
		],
		"mapped",
		[
			265
		]
	],
	[
		[
			265,
			265
		],
		"valid"
	],
	[
		[
			266,
			266
		],
		"mapped",
		[
			267
		]
	],
	[
		[
			267,
			267
		],
		"valid"
	],
	[
		[
			268,
			268
		],
		"mapped",
		[
			269
		]
	],
	[
		[
			269,
			269
		],
		"valid"
	],
	[
		[
			270,
			270
		],
		"mapped",
		[
			271
		]
	],
	[
		[
			271,
			271
		],
		"valid"
	],
	[
		[
			272,
			272
		],
		"mapped",
		[
			273
		]
	],
	[
		[
			273,
			273
		],
		"valid"
	],
	[
		[
			274,
			274
		],
		"mapped",
		[
			275
		]
	],
	[
		[
			275,
			275
		],
		"valid"
	],
	[
		[
			276,
			276
		],
		"mapped",
		[
			277
		]
	],
	[
		[
			277,
			277
		],
		"valid"
	],
	[
		[
			278,
			278
		],
		"mapped",
		[
			279
		]
	],
	[
		[
			279,
			279
		],
		"valid"
	],
	[
		[
			280,
			280
		],
		"mapped",
		[
			281
		]
	],
	[
		[
			281,
			281
		],
		"valid"
	],
	[
		[
			282,
			282
		],
		"mapped",
		[
			283
		]
	],
	[
		[
			283,
			283
		],
		"valid"
	],
	[
		[
			284,
			284
		],
		"mapped",
		[
			285
		]
	],
	[
		[
			285,
			285
		],
		"valid"
	],
	[
		[
			286,
			286
		],
		"mapped",
		[
			287
		]
	],
	[
		[
			287,
			287
		],
		"valid"
	],
	[
		[
			288,
			288
		],
		"mapped",
		[
			289
		]
	],
	[
		[
			289,
			289
		],
		"valid"
	],
	[
		[
			290,
			290
		],
		"mapped",
		[
			291
		]
	],
	[
		[
			291,
			291
		],
		"valid"
	],
	[
		[
			292,
			292
		],
		"mapped",
		[
			293
		]
	],
	[
		[
			293,
			293
		],
		"valid"
	],
	[
		[
			294,
			294
		],
		"mapped",
		[
			295
		]
	],
	[
		[
			295,
			295
		],
		"valid"
	],
	[
		[
			296,
			296
		],
		"mapped",
		[
			297
		]
	],
	[
		[
			297,
			297
		],
		"valid"
	],
	[
		[
			298,
			298
		],
		"mapped",
		[
			299
		]
	],
	[
		[
			299,
			299
		],
		"valid"
	],
	[
		[
			300,
			300
		],
		"mapped",
		[
			301
		]
	],
	[
		[
			301,
			301
		],
		"valid"
	],
	[
		[
			302,
			302
		],
		"mapped",
		[
			303
		]
	],
	[
		[
			303,
			303
		],
		"valid"
	],
	[
		[
			304,
			304
		],
		"mapped",
		[
			105,
			775
		]
	],
	[
		[
			305,
			305
		],
		"valid"
	],
	[
		[
			306,
			307
		],
		"mapped",
		[
			105,
			106
		]
	],
	[
		[
			308,
			308
		],
		"mapped",
		[
			309
		]
	],
	[
		[
			309,
			309
		],
		"valid"
	],
	[
		[
			310,
			310
		],
		"mapped",
		[
			311
		]
	],
	[
		[
			311,
			312
		],
		"valid"
	],
	[
		[
			313,
			313
		],
		"mapped",
		[
			314
		]
	],
	[
		[
			314,
			314
		],
		"valid"
	],
	[
		[
			315,
			315
		],
		"mapped",
		[
			316
		]
	],
	[
		[
			316,
			316
		],
		"valid"
	],
	[
		[
			317,
			317
		],
		"mapped",
		[
			318
		]
	],
	[
		[
			318,
			318
		],
		"valid"
	],
	[
		[
			319,
			320
		],
		"mapped",
		[
			108,
			183
		]
	],
	[
		[
			321,
			321
		],
		"mapped",
		[
			322
		]
	],
	[
		[
			322,
			322
		],
		"valid"
	],
	[
		[
			323,
			323
		],
		"mapped",
		[
			324
		]
	],
	[
		[
			324,
			324
		],
		"valid"
	],
	[
		[
			325,
			325
		],
		"mapped",
		[
			326
		]
	],
	[
		[
			326,
			326
		],
		"valid"
	],
	[
		[
			327,
			327
		],
		"mapped",
		[
			328
		]
	],
	[
		[
			328,
			328
		],
		"valid"
	],
	[
		[
			329,
			329
		],
		"mapped",
		[
			700,
			110
		]
	],
	[
		[
			330,
			330
		],
		"mapped",
		[
			331
		]
	],
	[
		[
			331,
			331
		],
		"valid"
	],
	[
		[
			332,
			332
		],
		"mapped",
		[
			333
		]
	],
	[
		[
			333,
			333
		],
		"valid"
	],
	[
		[
			334,
			334
		],
		"mapped",
		[
			335
		]
	],
	[
		[
			335,
			335
		],
		"valid"
	],
	[
		[
			336,
			336
		],
		"mapped",
		[
			337
		]
	],
	[
		[
			337,
			337
		],
		"valid"
	],
	[
		[
			338,
			338
		],
		"mapped",
		[
			339
		]
	],
	[
		[
			339,
			339
		],
		"valid"
	],
	[
		[
			340,
			340
		],
		"mapped",
		[
			341
		]
	],
	[
		[
			341,
			341
		],
		"valid"
	],
	[
		[
			342,
			342
		],
		"mapped",
		[
			343
		]
	],
	[
		[
			343,
			343
		],
		"valid"
	],
	[
		[
			344,
			344
		],
		"mapped",
		[
			345
		]
	],
	[
		[
			345,
			345
		],
		"valid"
	],
	[
		[
			346,
			346
		],
		"mapped",
		[
			347
		]
	],
	[
		[
			347,
			347
		],
		"valid"
	],
	[
		[
			348,
			348
		],
		"mapped",
		[
			349
		]
	],
	[
		[
			349,
			349
		],
		"valid"
	],
	[
		[
			350,
			350
		],
		"mapped",
		[
			351
		]
	],
	[
		[
			351,
			351
		],
		"valid"
	],
	[
		[
			352,
			352
		],
		"mapped",
		[
			353
		]
	],
	[
		[
			353,
			353
		],
		"valid"
	],
	[
		[
			354,
			354
		],
		"mapped",
		[
			355
		]
	],
	[
		[
			355,
			355
		],
		"valid"
	],
	[
		[
			356,
			356
		],
		"mapped",
		[
			357
		]
	],
	[
		[
			357,
			357
		],
		"valid"
	],
	[
		[
			358,
			358
		],
		"mapped",
		[
			359
		]
	],
	[
		[
			359,
			359
		],
		"valid"
	],
	[
		[
			360,
			360
		],
		"mapped",
		[
			361
		]
	],
	[
		[
			361,
			361
		],
		"valid"
	],
	[
		[
			362,
			362
		],
		"mapped",
		[
			363
		]
	],
	[
		[
			363,
			363
		],
		"valid"
	],
	[
		[
			364,
			364
		],
		"mapped",
		[
			365
		]
	],
	[
		[
			365,
			365
		],
		"valid"
	],
	[
		[
			366,
			366
		],
		"mapped",
		[
			367
		]
	],
	[
		[
			367,
			367
		],
		"valid"
	],
	[
		[
			368,
			368
		],
		"mapped",
		[
			369
		]
	],
	[
		[
			369,
			369
		],
		"valid"
	],
	[
		[
			370,
			370
		],
		"mapped",
		[
			371
		]
	],
	[
		[
			371,
			371
		],
		"valid"
	],
	[
		[
			372,
			372
		],
		"mapped",
		[
			373
		]
	],
	[
		[
			373,
			373
		],
		"valid"
	],
	[
		[
			374,
			374
		],
		"mapped",
		[
			375
		]
	],
	[
		[
			375,
			375
		],
		"valid"
	],
	[
		[
			376,
			376
		],
		"mapped",
		[
			255
		]
	],
	[
		[
			377,
			377
		],
		"mapped",
		[
			378
		]
	],
	[
		[
			378,
			378
		],
		"valid"
	],
	[
		[
			379,
			379
		],
		"mapped",
		[
			380
		]
	],
	[
		[
			380,
			380
		],
		"valid"
	],
	[
		[
			381,
			381
		],
		"mapped",
		[
			382
		]
	],
	[
		[
			382,
			382
		],
		"valid"
	],
	[
		[
			383,
			383
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			384,
			384
		],
		"valid"
	],
	[
		[
			385,
			385
		],
		"mapped",
		[
			595
		]
	],
	[
		[
			386,
			386
		],
		"mapped",
		[
			387
		]
	],
	[
		[
			387,
			387
		],
		"valid"
	],
	[
		[
			388,
			388
		],
		"mapped",
		[
			389
		]
	],
	[
		[
			389,
			389
		],
		"valid"
	],
	[
		[
			390,
			390
		],
		"mapped",
		[
			596
		]
	],
	[
		[
			391,
			391
		],
		"mapped",
		[
			392
		]
	],
	[
		[
			392,
			392
		],
		"valid"
	],
	[
		[
			393,
			393
		],
		"mapped",
		[
			598
		]
	],
	[
		[
			394,
			394
		],
		"mapped",
		[
			599
		]
	],
	[
		[
			395,
			395
		],
		"mapped",
		[
			396
		]
	],
	[
		[
			396,
			397
		],
		"valid"
	],
	[
		[
			398,
			398
		],
		"mapped",
		[
			477
		]
	],
	[
		[
			399,
			399
		],
		"mapped",
		[
			601
		]
	],
	[
		[
			400,
			400
		],
		"mapped",
		[
			603
		]
	],
	[
		[
			401,
			401
		],
		"mapped",
		[
			402
		]
	],
	[
		[
			402,
			402
		],
		"valid"
	],
	[
		[
			403,
			403
		],
		"mapped",
		[
			608
		]
	],
	[
		[
			404,
			404
		],
		"mapped",
		[
			611
		]
	],
	[
		[
			405,
			405
		],
		"valid"
	],
	[
		[
			406,
			406
		],
		"mapped",
		[
			617
		]
	],
	[
		[
			407,
			407
		],
		"mapped",
		[
			616
		]
	],
	[
		[
			408,
			408
		],
		"mapped",
		[
			409
		]
	],
	[
		[
			409,
			411
		],
		"valid"
	],
	[
		[
			412,
			412
		],
		"mapped",
		[
			623
		]
	],
	[
		[
			413,
			413
		],
		"mapped",
		[
			626
		]
	],
	[
		[
			414,
			414
		],
		"valid"
	],
	[
		[
			415,
			415
		],
		"mapped",
		[
			629
		]
	],
	[
		[
			416,
			416
		],
		"mapped",
		[
			417
		]
	],
	[
		[
			417,
			417
		],
		"valid"
	],
	[
		[
			418,
			418
		],
		"mapped",
		[
			419
		]
	],
	[
		[
			419,
			419
		],
		"valid"
	],
	[
		[
			420,
			420
		],
		"mapped",
		[
			421
		]
	],
	[
		[
			421,
			421
		],
		"valid"
	],
	[
		[
			422,
			422
		],
		"mapped",
		[
			640
		]
	],
	[
		[
			423,
			423
		],
		"mapped",
		[
			424
		]
	],
	[
		[
			424,
			424
		],
		"valid"
	],
	[
		[
			425,
			425
		],
		"mapped",
		[
			643
		]
	],
	[
		[
			426,
			427
		],
		"valid"
	],
	[
		[
			428,
			428
		],
		"mapped",
		[
			429
		]
	],
	[
		[
			429,
			429
		],
		"valid"
	],
	[
		[
			430,
			430
		],
		"mapped",
		[
			648
		]
	],
	[
		[
			431,
			431
		],
		"mapped",
		[
			432
		]
	],
	[
		[
			432,
			432
		],
		"valid"
	],
	[
		[
			433,
			433
		],
		"mapped",
		[
			650
		]
	],
	[
		[
			434,
			434
		],
		"mapped",
		[
			651
		]
	],
	[
		[
			435,
			435
		],
		"mapped",
		[
			436
		]
	],
	[
		[
			436,
			436
		],
		"valid"
	],
	[
		[
			437,
			437
		],
		"mapped",
		[
			438
		]
	],
	[
		[
			438,
			438
		],
		"valid"
	],
	[
		[
			439,
			439
		],
		"mapped",
		[
			658
		]
	],
	[
		[
			440,
			440
		],
		"mapped",
		[
			441
		]
	],
	[
		[
			441,
			443
		],
		"valid"
	],
	[
		[
			444,
			444
		],
		"mapped",
		[
			445
		]
	],
	[
		[
			445,
			451
		],
		"valid"
	],
	[
		[
			452,
			454
		],
		"mapped",
		[
			100,
			382
		]
	],
	[
		[
			455,
			457
		],
		"mapped",
		[
			108,
			106
		]
	],
	[
		[
			458,
			460
		],
		"mapped",
		[
			110,
			106
		]
	],
	[
		[
			461,
			461
		],
		"mapped",
		[
			462
		]
	],
	[
		[
			462,
			462
		],
		"valid"
	],
	[
		[
			463,
			463
		],
		"mapped",
		[
			464
		]
	],
	[
		[
			464,
			464
		],
		"valid"
	],
	[
		[
			465,
			465
		],
		"mapped",
		[
			466
		]
	],
	[
		[
			466,
			466
		],
		"valid"
	],
	[
		[
			467,
			467
		],
		"mapped",
		[
			468
		]
	],
	[
		[
			468,
			468
		],
		"valid"
	],
	[
		[
			469,
			469
		],
		"mapped",
		[
			470
		]
	],
	[
		[
			470,
			470
		],
		"valid"
	],
	[
		[
			471,
			471
		],
		"mapped",
		[
			472
		]
	],
	[
		[
			472,
			472
		],
		"valid"
	],
	[
		[
			473,
			473
		],
		"mapped",
		[
			474
		]
	],
	[
		[
			474,
			474
		],
		"valid"
	],
	[
		[
			475,
			475
		],
		"mapped",
		[
			476
		]
	],
	[
		[
			476,
			477
		],
		"valid"
	],
	[
		[
			478,
			478
		],
		"mapped",
		[
			479
		]
	],
	[
		[
			479,
			479
		],
		"valid"
	],
	[
		[
			480,
			480
		],
		"mapped",
		[
			481
		]
	],
	[
		[
			481,
			481
		],
		"valid"
	],
	[
		[
			482,
			482
		],
		"mapped",
		[
			483
		]
	],
	[
		[
			483,
			483
		],
		"valid"
	],
	[
		[
			484,
			484
		],
		"mapped",
		[
			485
		]
	],
	[
		[
			485,
			485
		],
		"valid"
	],
	[
		[
			486,
			486
		],
		"mapped",
		[
			487
		]
	],
	[
		[
			487,
			487
		],
		"valid"
	],
	[
		[
			488,
			488
		],
		"mapped",
		[
			489
		]
	],
	[
		[
			489,
			489
		],
		"valid"
	],
	[
		[
			490,
			490
		],
		"mapped",
		[
			491
		]
	],
	[
		[
			491,
			491
		],
		"valid"
	],
	[
		[
			492,
			492
		],
		"mapped",
		[
			493
		]
	],
	[
		[
			493,
			493
		],
		"valid"
	],
	[
		[
			494,
			494
		],
		"mapped",
		[
			495
		]
	],
	[
		[
			495,
			496
		],
		"valid"
	],
	[
		[
			497,
			499
		],
		"mapped",
		[
			100,
			122
		]
	],
	[
		[
			500,
			500
		],
		"mapped",
		[
			501
		]
	],
	[
		[
			501,
			501
		],
		"valid"
	],
	[
		[
			502,
			502
		],
		"mapped",
		[
			405
		]
	],
	[
		[
			503,
			503
		],
		"mapped",
		[
			447
		]
	],
	[
		[
			504,
			504
		],
		"mapped",
		[
			505
		]
	],
	[
		[
			505,
			505
		],
		"valid"
	],
	[
		[
			506,
			506
		],
		"mapped",
		[
			507
		]
	],
	[
		[
			507,
			507
		],
		"valid"
	],
	[
		[
			508,
			508
		],
		"mapped",
		[
			509
		]
	],
	[
		[
			509,
			509
		],
		"valid"
	],
	[
		[
			510,
			510
		],
		"mapped",
		[
			511
		]
	],
	[
		[
			511,
			511
		],
		"valid"
	],
	[
		[
			512,
			512
		],
		"mapped",
		[
			513
		]
	],
	[
		[
			513,
			513
		],
		"valid"
	],
	[
		[
			514,
			514
		],
		"mapped",
		[
			515
		]
	],
	[
		[
			515,
			515
		],
		"valid"
	],
	[
		[
			516,
			516
		],
		"mapped",
		[
			517
		]
	],
	[
		[
			517,
			517
		],
		"valid"
	],
	[
		[
			518,
			518
		],
		"mapped",
		[
			519
		]
	],
	[
		[
			519,
			519
		],
		"valid"
	],
	[
		[
			520,
			520
		],
		"mapped",
		[
			521
		]
	],
	[
		[
			521,
			521
		],
		"valid"
	],
	[
		[
			522,
			522
		],
		"mapped",
		[
			523
		]
	],
	[
		[
			523,
			523
		],
		"valid"
	],
	[
		[
			524,
			524
		],
		"mapped",
		[
			525
		]
	],
	[
		[
			525,
			525
		],
		"valid"
	],
	[
		[
			526,
			526
		],
		"mapped",
		[
			527
		]
	],
	[
		[
			527,
			527
		],
		"valid"
	],
	[
		[
			528,
			528
		],
		"mapped",
		[
			529
		]
	],
	[
		[
			529,
			529
		],
		"valid"
	],
	[
		[
			530,
			530
		],
		"mapped",
		[
			531
		]
	],
	[
		[
			531,
			531
		],
		"valid"
	],
	[
		[
			532,
			532
		],
		"mapped",
		[
			533
		]
	],
	[
		[
			533,
			533
		],
		"valid"
	],
	[
		[
			534,
			534
		],
		"mapped",
		[
			535
		]
	],
	[
		[
			535,
			535
		],
		"valid"
	],
	[
		[
			536,
			536
		],
		"mapped",
		[
			537
		]
	],
	[
		[
			537,
			537
		],
		"valid"
	],
	[
		[
			538,
			538
		],
		"mapped",
		[
			539
		]
	],
	[
		[
			539,
			539
		],
		"valid"
	],
	[
		[
			540,
			540
		],
		"mapped",
		[
			541
		]
	],
	[
		[
			541,
			541
		],
		"valid"
	],
	[
		[
			542,
			542
		],
		"mapped",
		[
			543
		]
	],
	[
		[
			543,
			543
		],
		"valid"
	],
	[
		[
			544,
			544
		],
		"mapped",
		[
			414
		]
	],
	[
		[
			545,
			545
		],
		"valid"
	],
	[
		[
			546,
			546
		],
		"mapped",
		[
			547
		]
	],
	[
		[
			547,
			547
		],
		"valid"
	],
	[
		[
			548,
			548
		],
		"mapped",
		[
			549
		]
	],
	[
		[
			549,
			549
		],
		"valid"
	],
	[
		[
			550,
			550
		],
		"mapped",
		[
			551
		]
	],
	[
		[
			551,
			551
		],
		"valid"
	],
	[
		[
			552,
			552
		],
		"mapped",
		[
			553
		]
	],
	[
		[
			553,
			553
		],
		"valid"
	],
	[
		[
			554,
			554
		],
		"mapped",
		[
			555
		]
	],
	[
		[
			555,
			555
		],
		"valid"
	],
	[
		[
			556,
			556
		],
		"mapped",
		[
			557
		]
	],
	[
		[
			557,
			557
		],
		"valid"
	],
	[
		[
			558,
			558
		],
		"mapped",
		[
			559
		]
	],
	[
		[
			559,
			559
		],
		"valid"
	],
	[
		[
			560,
			560
		],
		"mapped",
		[
			561
		]
	],
	[
		[
			561,
			561
		],
		"valid"
	],
	[
		[
			562,
			562
		],
		"mapped",
		[
			563
		]
	],
	[
		[
			563,
			563
		],
		"valid"
	],
	[
		[
			564,
			566
		],
		"valid"
	],
	[
		[
			567,
			569
		],
		"valid"
	],
	[
		[
			570,
			570
		],
		"mapped",
		[
			11365
		]
	],
	[
		[
			571,
			571
		],
		"mapped",
		[
			572
		]
	],
	[
		[
			572,
			572
		],
		"valid"
	],
	[
		[
			573,
			573
		],
		"mapped",
		[
			410
		]
	],
	[
		[
			574,
			574
		],
		"mapped",
		[
			11366
		]
	],
	[
		[
			575,
			576
		],
		"valid"
	],
	[
		[
			577,
			577
		],
		"mapped",
		[
			578
		]
	],
	[
		[
			578,
			578
		],
		"valid"
	],
	[
		[
			579,
			579
		],
		"mapped",
		[
			384
		]
	],
	[
		[
			580,
			580
		],
		"mapped",
		[
			649
		]
	],
	[
		[
			581,
			581
		],
		"mapped",
		[
			652
		]
	],
	[
		[
			582,
			582
		],
		"mapped",
		[
			583
		]
	],
	[
		[
			583,
			583
		],
		"valid"
	],
	[
		[
			584,
			584
		],
		"mapped",
		[
			585
		]
	],
	[
		[
			585,
			585
		],
		"valid"
	],
	[
		[
			586,
			586
		],
		"mapped",
		[
			587
		]
	],
	[
		[
			587,
			587
		],
		"valid"
	],
	[
		[
			588,
			588
		],
		"mapped",
		[
			589
		]
	],
	[
		[
			589,
			589
		],
		"valid"
	],
	[
		[
			590,
			590
		],
		"mapped",
		[
			591
		]
	],
	[
		[
			591,
			591
		],
		"valid"
	],
	[
		[
			592,
			680
		],
		"valid"
	],
	[
		[
			681,
			685
		],
		"valid"
	],
	[
		[
			686,
			687
		],
		"valid"
	],
	[
		[
			688,
			688
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			689,
			689
		],
		"mapped",
		[
			614
		]
	],
	[
		[
			690,
			690
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			691,
			691
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			692,
			692
		],
		"mapped",
		[
			633
		]
	],
	[
		[
			693,
			693
		],
		"mapped",
		[
			635
		]
	],
	[
		[
			694,
			694
		],
		"mapped",
		[
			641
		]
	],
	[
		[
			695,
			695
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			696,
			696
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			697,
			705
		],
		"valid"
	],
	[
		[
			706,
			709
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			710,
			721
		],
		"valid"
	],
	[
		[
			722,
			727
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			728,
			728
		],
		"disallowed_STD3_mapped",
		[
			32,
			774
		]
	],
	[
		[
			729,
			729
		],
		"disallowed_STD3_mapped",
		[
			32,
			775
		]
	],
	[
		[
			730,
			730
		],
		"disallowed_STD3_mapped",
		[
			32,
			778
		]
	],
	[
		[
			731,
			731
		],
		"disallowed_STD3_mapped",
		[
			32,
			808
		]
	],
	[
		[
			732,
			732
		],
		"disallowed_STD3_mapped",
		[
			32,
			771
		]
	],
	[
		[
			733,
			733
		],
		"disallowed_STD3_mapped",
		[
			32,
			779
		]
	],
	[
		[
			734,
			734
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			735,
			735
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			736,
			736
		],
		"mapped",
		[
			611
		]
	],
	[
		[
			737,
			737
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			738,
			738
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			739,
			739
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			740,
			740
		],
		"mapped",
		[
			661
		]
	],
	[
		[
			741,
			745
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			746,
			747
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			748,
			748
		],
		"valid"
	],
	[
		[
			749,
			749
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			750,
			750
		],
		"valid"
	],
	[
		[
			751,
			767
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			768,
			831
		],
		"valid"
	],
	[
		[
			832,
			832
		],
		"mapped",
		[
			768
		]
	],
	[
		[
			833,
			833
		],
		"mapped",
		[
			769
		]
	],
	[
		[
			834,
			834
		],
		"valid"
	],
	[
		[
			835,
			835
		],
		"mapped",
		[
			787
		]
	],
	[
		[
			836,
			836
		],
		"mapped",
		[
			776,
			769
		]
	],
	[
		[
			837,
			837
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			838,
			846
		],
		"valid"
	],
	[
		[
			847,
			847
		],
		"ignored"
	],
	[
		[
			848,
			855
		],
		"valid"
	],
	[
		[
			856,
			860
		],
		"valid"
	],
	[
		[
			861,
			863
		],
		"valid"
	],
	[
		[
			864,
			865
		],
		"valid"
	],
	[
		[
			866,
			866
		],
		"valid"
	],
	[
		[
			867,
			879
		],
		"valid"
	],
	[
		[
			880,
			880
		],
		"mapped",
		[
			881
		]
	],
	[
		[
			881,
			881
		],
		"valid"
	],
	[
		[
			882,
			882
		],
		"mapped",
		[
			883
		]
	],
	[
		[
			883,
			883
		],
		"valid"
	],
	[
		[
			884,
			884
		],
		"mapped",
		[
			697
		]
	],
	[
		[
			885,
			885
		],
		"valid"
	],
	[
		[
			886,
			886
		],
		"mapped",
		[
			887
		]
	],
	[
		[
			887,
			887
		],
		"valid"
	],
	[
		[
			888,
			889
		],
		"disallowed"
	],
	[
		[
			890,
			890
		],
		"disallowed_STD3_mapped",
		[
			32,
			953
		]
	],
	[
		[
			891,
			893
		],
		"valid"
	],
	[
		[
			894,
			894
		],
		"disallowed_STD3_mapped",
		[
			59
		]
	],
	[
		[
			895,
			895
		],
		"mapped",
		[
			1011
		]
	],
	[
		[
			896,
			899
		],
		"disallowed"
	],
	[
		[
			900,
			900
		],
		"disallowed_STD3_mapped",
		[
			32,
			769
		]
	],
	[
		[
			901,
			901
		],
		"disallowed_STD3_mapped",
		[
			32,
			776,
			769
		]
	],
	[
		[
			902,
			902
		],
		"mapped",
		[
			940
		]
	],
	[
		[
			903,
			903
		],
		"mapped",
		[
			183
		]
	],
	[
		[
			904,
			904
		],
		"mapped",
		[
			941
		]
	],
	[
		[
			905,
			905
		],
		"mapped",
		[
			942
		]
	],
	[
		[
			906,
			906
		],
		"mapped",
		[
			943
		]
	],
	[
		[
			907,
			907
		],
		"disallowed"
	],
	[
		[
			908,
			908
		],
		"mapped",
		[
			972
		]
	],
	[
		[
			909,
			909
		],
		"disallowed"
	],
	[
		[
			910,
			910
		],
		"mapped",
		[
			973
		]
	],
	[
		[
			911,
			911
		],
		"mapped",
		[
			974
		]
	],
	[
		[
			912,
			912
		],
		"valid"
	],
	[
		[
			913,
			913
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			914,
			914
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			915,
			915
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			916,
			916
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			917,
			917
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			918,
			918
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			919,
			919
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			920,
			920
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			921,
			921
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			922,
			922
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			923,
			923
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			924,
			924
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			925,
			925
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			926,
			926
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			927,
			927
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			928,
			928
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			929,
			929
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			930,
			930
		],
		"disallowed"
	],
	[
		[
			931,
			931
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			932,
			932
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			933,
			933
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			934,
			934
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			935,
			935
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			936,
			936
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			937,
			937
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			938,
			938
		],
		"mapped",
		[
			970
		]
	],
	[
		[
			939,
			939
		],
		"mapped",
		[
			971
		]
	],
	[
		[
			940,
			961
		],
		"valid"
	],
	[
		[
			962,
			962
		],
		"deviation",
		[
			963
		]
	],
	[
		[
			963,
			974
		],
		"valid"
	],
	[
		[
			975,
			975
		],
		"mapped",
		[
			983
		]
	],
	[
		[
			976,
			976
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			977,
			977
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			978,
			978
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			979,
			979
		],
		"mapped",
		[
			973
		]
	],
	[
		[
			980,
			980
		],
		"mapped",
		[
			971
		]
	],
	[
		[
			981,
			981
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			982,
			982
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			983,
			983
		],
		"valid"
	],
	[
		[
			984,
			984
		],
		"mapped",
		[
			985
		]
	],
	[
		[
			985,
			985
		],
		"valid"
	],
	[
		[
			986,
			986
		],
		"mapped",
		[
			987
		]
	],
	[
		[
			987,
			987
		],
		"valid"
	],
	[
		[
			988,
			988
		],
		"mapped",
		[
			989
		]
	],
	[
		[
			989,
			989
		],
		"valid"
	],
	[
		[
			990,
			990
		],
		"mapped",
		[
			991
		]
	],
	[
		[
			991,
			991
		],
		"valid"
	],
	[
		[
			992,
			992
		],
		"mapped",
		[
			993
		]
	],
	[
		[
			993,
			993
		],
		"valid"
	],
	[
		[
			994,
			994
		],
		"mapped",
		[
			995
		]
	],
	[
		[
			995,
			995
		],
		"valid"
	],
	[
		[
			996,
			996
		],
		"mapped",
		[
			997
		]
	],
	[
		[
			997,
			997
		],
		"valid"
	],
	[
		[
			998,
			998
		],
		"mapped",
		[
			999
		]
	],
	[
		[
			999,
			999
		],
		"valid"
	],
	[
		[
			1000,
			1000
		],
		"mapped",
		[
			1001
		]
	],
	[
		[
			1001,
			1001
		],
		"valid"
	],
	[
		[
			1002,
			1002
		],
		"mapped",
		[
			1003
		]
	],
	[
		[
			1003,
			1003
		],
		"valid"
	],
	[
		[
			1004,
			1004
		],
		"mapped",
		[
			1005
		]
	],
	[
		[
			1005,
			1005
		],
		"valid"
	],
	[
		[
			1006,
			1006
		],
		"mapped",
		[
			1007
		]
	],
	[
		[
			1007,
			1007
		],
		"valid"
	],
	[
		[
			1008,
			1008
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			1009,
			1009
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			1010,
			1010
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			1011,
			1011
		],
		"valid"
	],
	[
		[
			1012,
			1012
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			1013,
			1013
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			1014,
			1014
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1015,
			1015
		],
		"mapped",
		[
			1016
		]
	],
	[
		[
			1016,
			1016
		],
		"valid"
	],
	[
		[
			1017,
			1017
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			1018,
			1018
		],
		"mapped",
		[
			1019
		]
	],
	[
		[
			1019,
			1019
		],
		"valid"
	],
	[
		[
			1020,
			1020
		],
		"valid"
	],
	[
		[
			1021,
			1021
		],
		"mapped",
		[
			891
		]
	],
	[
		[
			1022,
			1022
		],
		"mapped",
		[
			892
		]
	],
	[
		[
			1023,
			1023
		],
		"mapped",
		[
			893
		]
	],
	[
		[
			1024,
			1024
		],
		"mapped",
		[
			1104
		]
	],
	[
		[
			1025,
			1025
		],
		"mapped",
		[
			1105
		]
	],
	[
		[
			1026,
			1026
		],
		"mapped",
		[
			1106
		]
	],
	[
		[
			1027,
			1027
		],
		"mapped",
		[
			1107
		]
	],
	[
		[
			1028,
			1028
		],
		"mapped",
		[
			1108
		]
	],
	[
		[
			1029,
			1029
		],
		"mapped",
		[
			1109
		]
	],
	[
		[
			1030,
			1030
		],
		"mapped",
		[
			1110
		]
	],
	[
		[
			1031,
			1031
		],
		"mapped",
		[
			1111
		]
	],
	[
		[
			1032,
			1032
		],
		"mapped",
		[
			1112
		]
	],
	[
		[
			1033,
			1033
		],
		"mapped",
		[
			1113
		]
	],
	[
		[
			1034,
			1034
		],
		"mapped",
		[
			1114
		]
	],
	[
		[
			1035,
			1035
		],
		"mapped",
		[
			1115
		]
	],
	[
		[
			1036,
			1036
		],
		"mapped",
		[
			1116
		]
	],
	[
		[
			1037,
			1037
		],
		"mapped",
		[
			1117
		]
	],
	[
		[
			1038,
			1038
		],
		"mapped",
		[
			1118
		]
	],
	[
		[
			1039,
			1039
		],
		"mapped",
		[
			1119
		]
	],
	[
		[
			1040,
			1040
		],
		"mapped",
		[
			1072
		]
	],
	[
		[
			1041,
			1041
		],
		"mapped",
		[
			1073
		]
	],
	[
		[
			1042,
			1042
		],
		"mapped",
		[
			1074
		]
	],
	[
		[
			1043,
			1043
		],
		"mapped",
		[
			1075
		]
	],
	[
		[
			1044,
			1044
		],
		"mapped",
		[
			1076
		]
	],
	[
		[
			1045,
			1045
		],
		"mapped",
		[
			1077
		]
	],
	[
		[
			1046,
			1046
		],
		"mapped",
		[
			1078
		]
	],
	[
		[
			1047,
			1047
		],
		"mapped",
		[
			1079
		]
	],
	[
		[
			1048,
			1048
		],
		"mapped",
		[
			1080
		]
	],
	[
		[
			1049,
			1049
		],
		"mapped",
		[
			1081
		]
	],
	[
		[
			1050,
			1050
		],
		"mapped",
		[
			1082
		]
	],
	[
		[
			1051,
			1051
		],
		"mapped",
		[
			1083
		]
	],
	[
		[
			1052,
			1052
		],
		"mapped",
		[
			1084
		]
	],
	[
		[
			1053,
			1053
		],
		"mapped",
		[
			1085
		]
	],
	[
		[
			1054,
			1054
		],
		"mapped",
		[
			1086
		]
	],
	[
		[
			1055,
			1055
		],
		"mapped",
		[
			1087
		]
	],
	[
		[
			1056,
			1056
		],
		"mapped",
		[
			1088
		]
	],
	[
		[
			1057,
			1057
		],
		"mapped",
		[
			1089
		]
	],
	[
		[
			1058,
			1058
		],
		"mapped",
		[
			1090
		]
	],
	[
		[
			1059,
			1059
		],
		"mapped",
		[
			1091
		]
	],
	[
		[
			1060,
			1060
		],
		"mapped",
		[
			1092
		]
	],
	[
		[
			1061,
			1061
		],
		"mapped",
		[
			1093
		]
	],
	[
		[
			1062,
			1062
		],
		"mapped",
		[
			1094
		]
	],
	[
		[
			1063,
			1063
		],
		"mapped",
		[
			1095
		]
	],
	[
		[
			1064,
			1064
		],
		"mapped",
		[
			1096
		]
	],
	[
		[
			1065,
			1065
		],
		"mapped",
		[
			1097
		]
	],
	[
		[
			1066,
			1066
		],
		"mapped",
		[
			1098
		]
	],
	[
		[
			1067,
			1067
		],
		"mapped",
		[
			1099
		]
	],
	[
		[
			1068,
			1068
		],
		"mapped",
		[
			1100
		]
	],
	[
		[
			1069,
			1069
		],
		"mapped",
		[
			1101
		]
	],
	[
		[
			1070,
			1070
		],
		"mapped",
		[
			1102
		]
	],
	[
		[
			1071,
			1071
		],
		"mapped",
		[
			1103
		]
	],
	[
		[
			1072,
			1103
		],
		"valid"
	],
	[
		[
			1104,
			1104
		],
		"valid"
	],
	[
		[
			1105,
			1116
		],
		"valid"
	],
	[
		[
			1117,
			1117
		],
		"valid"
	],
	[
		[
			1118,
			1119
		],
		"valid"
	],
	[
		[
			1120,
			1120
		],
		"mapped",
		[
			1121
		]
	],
	[
		[
			1121,
			1121
		],
		"valid"
	],
	[
		[
			1122,
			1122
		],
		"mapped",
		[
			1123
		]
	],
	[
		[
			1123,
			1123
		],
		"valid"
	],
	[
		[
			1124,
			1124
		],
		"mapped",
		[
			1125
		]
	],
	[
		[
			1125,
			1125
		],
		"valid"
	],
	[
		[
			1126,
			1126
		],
		"mapped",
		[
			1127
		]
	],
	[
		[
			1127,
			1127
		],
		"valid"
	],
	[
		[
			1128,
			1128
		],
		"mapped",
		[
			1129
		]
	],
	[
		[
			1129,
			1129
		],
		"valid"
	],
	[
		[
			1130,
			1130
		],
		"mapped",
		[
			1131
		]
	],
	[
		[
			1131,
			1131
		],
		"valid"
	],
	[
		[
			1132,
			1132
		],
		"mapped",
		[
			1133
		]
	],
	[
		[
			1133,
			1133
		],
		"valid"
	],
	[
		[
			1134,
			1134
		],
		"mapped",
		[
			1135
		]
	],
	[
		[
			1135,
			1135
		],
		"valid"
	],
	[
		[
			1136,
			1136
		],
		"mapped",
		[
			1137
		]
	],
	[
		[
			1137,
			1137
		],
		"valid"
	],
	[
		[
			1138,
			1138
		],
		"mapped",
		[
			1139
		]
	],
	[
		[
			1139,
			1139
		],
		"valid"
	],
	[
		[
			1140,
			1140
		],
		"mapped",
		[
			1141
		]
	],
	[
		[
			1141,
			1141
		],
		"valid"
	],
	[
		[
			1142,
			1142
		],
		"mapped",
		[
			1143
		]
	],
	[
		[
			1143,
			1143
		],
		"valid"
	],
	[
		[
			1144,
			1144
		],
		"mapped",
		[
			1145
		]
	],
	[
		[
			1145,
			1145
		],
		"valid"
	],
	[
		[
			1146,
			1146
		],
		"mapped",
		[
			1147
		]
	],
	[
		[
			1147,
			1147
		],
		"valid"
	],
	[
		[
			1148,
			1148
		],
		"mapped",
		[
			1149
		]
	],
	[
		[
			1149,
			1149
		],
		"valid"
	],
	[
		[
			1150,
			1150
		],
		"mapped",
		[
			1151
		]
	],
	[
		[
			1151,
			1151
		],
		"valid"
	],
	[
		[
			1152,
			1152
		],
		"mapped",
		[
			1153
		]
	],
	[
		[
			1153,
			1153
		],
		"valid"
	],
	[
		[
			1154,
			1154
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1155,
			1158
		],
		"valid"
	],
	[
		[
			1159,
			1159
		],
		"valid"
	],
	[
		[
			1160,
			1161
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1162,
			1162
		],
		"mapped",
		[
			1163
		]
	],
	[
		[
			1163,
			1163
		],
		"valid"
	],
	[
		[
			1164,
			1164
		],
		"mapped",
		[
			1165
		]
	],
	[
		[
			1165,
			1165
		],
		"valid"
	],
	[
		[
			1166,
			1166
		],
		"mapped",
		[
			1167
		]
	],
	[
		[
			1167,
			1167
		],
		"valid"
	],
	[
		[
			1168,
			1168
		],
		"mapped",
		[
			1169
		]
	],
	[
		[
			1169,
			1169
		],
		"valid"
	],
	[
		[
			1170,
			1170
		],
		"mapped",
		[
			1171
		]
	],
	[
		[
			1171,
			1171
		],
		"valid"
	],
	[
		[
			1172,
			1172
		],
		"mapped",
		[
			1173
		]
	],
	[
		[
			1173,
			1173
		],
		"valid"
	],
	[
		[
			1174,
			1174
		],
		"mapped",
		[
			1175
		]
	],
	[
		[
			1175,
			1175
		],
		"valid"
	],
	[
		[
			1176,
			1176
		],
		"mapped",
		[
			1177
		]
	],
	[
		[
			1177,
			1177
		],
		"valid"
	],
	[
		[
			1178,
			1178
		],
		"mapped",
		[
			1179
		]
	],
	[
		[
			1179,
			1179
		],
		"valid"
	],
	[
		[
			1180,
			1180
		],
		"mapped",
		[
			1181
		]
	],
	[
		[
			1181,
			1181
		],
		"valid"
	],
	[
		[
			1182,
			1182
		],
		"mapped",
		[
			1183
		]
	],
	[
		[
			1183,
			1183
		],
		"valid"
	],
	[
		[
			1184,
			1184
		],
		"mapped",
		[
			1185
		]
	],
	[
		[
			1185,
			1185
		],
		"valid"
	],
	[
		[
			1186,
			1186
		],
		"mapped",
		[
			1187
		]
	],
	[
		[
			1187,
			1187
		],
		"valid"
	],
	[
		[
			1188,
			1188
		],
		"mapped",
		[
			1189
		]
	],
	[
		[
			1189,
			1189
		],
		"valid"
	],
	[
		[
			1190,
			1190
		],
		"mapped",
		[
			1191
		]
	],
	[
		[
			1191,
			1191
		],
		"valid"
	],
	[
		[
			1192,
			1192
		],
		"mapped",
		[
			1193
		]
	],
	[
		[
			1193,
			1193
		],
		"valid"
	],
	[
		[
			1194,
			1194
		],
		"mapped",
		[
			1195
		]
	],
	[
		[
			1195,
			1195
		],
		"valid"
	],
	[
		[
			1196,
			1196
		],
		"mapped",
		[
			1197
		]
	],
	[
		[
			1197,
			1197
		],
		"valid"
	],
	[
		[
			1198,
			1198
		],
		"mapped",
		[
			1199
		]
	],
	[
		[
			1199,
			1199
		],
		"valid"
	],
	[
		[
			1200,
			1200
		],
		"mapped",
		[
			1201
		]
	],
	[
		[
			1201,
			1201
		],
		"valid"
	],
	[
		[
			1202,
			1202
		],
		"mapped",
		[
			1203
		]
	],
	[
		[
			1203,
			1203
		],
		"valid"
	],
	[
		[
			1204,
			1204
		],
		"mapped",
		[
			1205
		]
	],
	[
		[
			1205,
			1205
		],
		"valid"
	],
	[
		[
			1206,
			1206
		],
		"mapped",
		[
			1207
		]
	],
	[
		[
			1207,
			1207
		],
		"valid"
	],
	[
		[
			1208,
			1208
		],
		"mapped",
		[
			1209
		]
	],
	[
		[
			1209,
			1209
		],
		"valid"
	],
	[
		[
			1210,
			1210
		],
		"mapped",
		[
			1211
		]
	],
	[
		[
			1211,
			1211
		],
		"valid"
	],
	[
		[
			1212,
			1212
		],
		"mapped",
		[
			1213
		]
	],
	[
		[
			1213,
			1213
		],
		"valid"
	],
	[
		[
			1214,
			1214
		],
		"mapped",
		[
			1215
		]
	],
	[
		[
			1215,
			1215
		],
		"valid"
	],
	[
		[
			1216,
			1216
		],
		"disallowed"
	],
	[
		[
			1217,
			1217
		],
		"mapped",
		[
			1218
		]
	],
	[
		[
			1218,
			1218
		],
		"valid"
	],
	[
		[
			1219,
			1219
		],
		"mapped",
		[
			1220
		]
	],
	[
		[
			1220,
			1220
		],
		"valid"
	],
	[
		[
			1221,
			1221
		],
		"mapped",
		[
			1222
		]
	],
	[
		[
			1222,
			1222
		],
		"valid"
	],
	[
		[
			1223,
			1223
		],
		"mapped",
		[
			1224
		]
	],
	[
		[
			1224,
			1224
		],
		"valid"
	],
	[
		[
			1225,
			1225
		],
		"mapped",
		[
			1226
		]
	],
	[
		[
			1226,
			1226
		],
		"valid"
	],
	[
		[
			1227,
			1227
		],
		"mapped",
		[
			1228
		]
	],
	[
		[
			1228,
			1228
		],
		"valid"
	],
	[
		[
			1229,
			1229
		],
		"mapped",
		[
			1230
		]
	],
	[
		[
			1230,
			1230
		],
		"valid"
	],
	[
		[
			1231,
			1231
		],
		"valid"
	],
	[
		[
			1232,
			1232
		],
		"mapped",
		[
			1233
		]
	],
	[
		[
			1233,
			1233
		],
		"valid"
	],
	[
		[
			1234,
			1234
		],
		"mapped",
		[
			1235
		]
	],
	[
		[
			1235,
			1235
		],
		"valid"
	],
	[
		[
			1236,
			1236
		],
		"mapped",
		[
			1237
		]
	],
	[
		[
			1237,
			1237
		],
		"valid"
	],
	[
		[
			1238,
			1238
		],
		"mapped",
		[
			1239
		]
	],
	[
		[
			1239,
			1239
		],
		"valid"
	],
	[
		[
			1240,
			1240
		],
		"mapped",
		[
			1241
		]
	],
	[
		[
			1241,
			1241
		],
		"valid"
	],
	[
		[
			1242,
			1242
		],
		"mapped",
		[
			1243
		]
	],
	[
		[
			1243,
			1243
		],
		"valid"
	],
	[
		[
			1244,
			1244
		],
		"mapped",
		[
			1245
		]
	],
	[
		[
			1245,
			1245
		],
		"valid"
	],
	[
		[
			1246,
			1246
		],
		"mapped",
		[
			1247
		]
	],
	[
		[
			1247,
			1247
		],
		"valid"
	],
	[
		[
			1248,
			1248
		],
		"mapped",
		[
			1249
		]
	],
	[
		[
			1249,
			1249
		],
		"valid"
	],
	[
		[
			1250,
			1250
		],
		"mapped",
		[
			1251
		]
	],
	[
		[
			1251,
			1251
		],
		"valid"
	],
	[
		[
			1252,
			1252
		],
		"mapped",
		[
			1253
		]
	],
	[
		[
			1253,
			1253
		],
		"valid"
	],
	[
		[
			1254,
			1254
		],
		"mapped",
		[
			1255
		]
	],
	[
		[
			1255,
			1255
		],
		"valid"
	],
	[
		[
			1256,
			1256
		],
		"mapped",
		[
			1257
		]
	],
	[
		[
			1257,
			1257
		],
		"valid"
	],
	[
		[
			1258,
			1258
		],
		"mapped",
		[
			1259
		]
	],
	[
		[
			1259,
			1259
		],
		"valid"
	],
	[
		[
			1260,
			1260
		],
		"mapped",
		[
			1261
		]
	],
	[
		[
			1261,
			1261
		],
		"valid"
	],
	[
		[
			1262,
			1262
		],
		"mapped",
		[
			1263
		]
	],
	[
		[
			1263,
			1263
		],
		"valid"
	],
	[
		[
			1264,
			1264
		],
		"mapped",
		[
			1265
		]
	],
	[
		[
			1265,
			1265
		],
		"valid"
	],
	[
		[
			1266,
			1266
		],
		"mapped",
		[
			1267
		]
	],
	[
		[
			1267,
			1267
		],
		"valid"
	],
	[
		[
			1268,
			1268
		],
		"mapped",
		[
			1269
		]
	],
	[
		[
			1269,
			1269
		],
		"valid"
	],
	[
		[
			1270,
			1270
		],
		"mapped",
		[
			1271
		]
	],
	[
		[
			1271,
			1271
		],
		"valid"
	],
	[
		[
			1272,
			1272
		],
		"mapped",
		[
			1273
		]
	],
	[
		[
			1273,
			1273
		],
		"valid"
	],
	[
		[
			1274,
			1274
		],
		"mapped",
		[
			1275
		]
	],
	[
		[
			1275,
			1275
		],
		"valid"
	],
	[
		[
			1276,
			1276
		],
		"mapped",
		[
			1277
		]
	],
	[
		[
			1277,
			1277
		],
		"valid"
	],
	[
		[
			1278,
			1278
		],
		"mapped",
		[
			1279
		]
	],
	[
		[
			1279,
			1279
		],
		"valid"
	],
	[
		[
			1280,
			1280
		],
		"mapped",
		[
			1281
		]
	],
	[
		[
			1281,
			1281
		],
		"valid"
	],
	[
		[
			1282,
			1282
		],
		"mapped",
		[
			1283
		]
	],
	[
		[
			1283,
			1283
		],
		"valid"
	],
	[
		[
			1284,
			1284
		],
		"mapped",
		[
			1285
		]
	],
	[
		[
			1285,
			1285
		],
		"valid"
	],
	[
		[
			1286,
			1286
		],
		"mapped",
		[
			1287
		]
	],
	[
		[
			1287,
			1287
		],
		"valid"
	],
	[
		[
			1288,
			1288
		],
		"mapped",
		[
			1289
		]
	],
	[
		[
			1289,
			1289
		],
		"valid"
	],
	[
		[
			1290,
			1290
		],
		"mapped",
		[
			1291
		]
	],
	[
		[
			1291,
			1291
		],
		"valid"
	],
	[
		[
			1292,
			1292
		],
		"mapped",
		[
			1293
		]
	],
	[
		[
			1293,
			1293
		],
		"valid"
	],
	[
		[
			1294,
			1294
		],
		"mapped",
		[
			1295
		]
	],
	[
		[
			1295,
			1295
		],
		"valid"
	],
	[
		[
			1296,
			1296
		],
		"mapped",
		[
			1297
		]
	],
	[
		[
			1297,
			1297
		],
		"valid"
	],
	[
		[
			1298,
			1298
		],
		"mapped",
		[
			1299
		]
	],
	[
		[
			1299,
			1299
		],
		"valid"
	],
	[
		[
			1300,
			1300
		],
		"mapped",
		[
			1301
		]
	],
	[
		[
			1301,
			1301
		],
		"valid"
	],
	[
		[
			1302,
			1302
		],
		"mapped",
		[
			1303
		]
	],
	[
		[
			1303,
			1303
		],
		"valid"
	],
	[
		[
			1304,
			1304
		],
		"mapped",
		[
			1305
		]
	],
	[
		[
			1305,
			1305
		],
		"valid"
	],
	[
		[
			1306,
			1306
		],
		"mapped",
		[
			1307
		]
	],
	[
		[
			1307,
			1307
		],
		"valid"
	],
	[
		[
			1308,
			1308
		],
		"mapped",
		[
			1309
		]
	],
	[
		[
			1309,
			1309
		],
		"valid"
	],
	[
		[
			1310,
			1310
		],
		"mapped",
		[
			1311
		]
	],
	[
		[
			1311,
			1311
		],
		"valid"
	],
	[
		[
			1312,
			1312
		],
		"mapped",
		[
			1313
		]
	],
	[
		[
			1313,
			1313
		],
		"valid"
	],
	[
		[
			1314,
			1314
		],
		"mapped",
		[
			1315
		]
	],
	[
		[
			1315,
			1315
		],
		"valid"
	],
	[
		[
			1316,
			1316
		],
		"mapped",
		[
			1317
		]
	],
	[
		[
			1317,
			1317
		],
		"valid"
	],
	[
		[
			1318,
			1318
		],
		"mapped",
		[
			1319
		]
	],
	[
		[
			1319,
			1319
		],
		"valid"
	],
	[
		[
			1320,
			1320
		],
		"mapped",
		[
			1321
		]
	],
	[
		[
			1321,
			1321
		],
		"valid"
	],
	[
		[
			1322,
			1322
		],
		"mapped",
		[
			1323
		]
	],
	[
		[
			1323,
			1323
		],
		"valid"
	],
	[
		[
			1324,
			1324
		],
		"mapped",
		[
			1325
		]
	],
	[
		[
			1325,
			1325
		],
		"valid"
	],
	[
		[
			1326,
			1326
		],
		"mapped",
		[
			1327
		]
	],
	[
		[
			1327,
			1327
		],
		"valid"
	],
	[
		[
			1328,
			1328
		],
		"disallowed"
	],
	[
		[
			1329,
			1329
		],
		"mapped",
		[
			1377
		]
	],
	[
		[
			1330,
			1330
		],
		"mapped",
		[
			1378
		]
	],
	[
		[
			1331,
			1331
		],
		"mapped",
		[
			1379
		]
	],
	[
		[
			1332,
			1332
		],
		"mapped",
		[
			1380
		]
	],
	[
		[
			1333,
			1333
		],
		"mapped",
		[
			1381
		]
	],
	[
		[
			1334,
			1334
		],
		"mapped",
		[
			1382
		]
	],
	[
		[
			1335,
			1335
		],
		"mapped",
		[
			1383
		]
	],
	[
		[
			1336,
			1336
		],
		"mapped",
		[
			1384
		]
	],
	[
		[
			1337,
			1337
		],
		"mapped",
		[
			1385
		]
	],
	[
		[
			1338,
			1338
		],
		"mapped",
		[
			1386
		]
	],
	[
		[
			1339,
			1339
		],
		"mapped",
		[
			1387
		]
	],
	[
		[
			1340,
			1340
		],
		"mapped",
		[
			1388
		]
	],
	[
		[
			1341,
			1341
		],
		"mapped",
		[
			1389
		]
	],
	[
		[
			1342,
			1342
		],
		"mapped",
		[
			1390
		]
	],
	[
		[
			1343,
			1343
		],
		"mapped",
		[
			1391
		]
	],
	[
		[
			1344,
			1344
		],
		"mapped",
		[
			1392
		]
	],
	[
		[
			1345,
			1345
		],
		"mapped",
		[
			1393
		]
	],
	[
		[
			1346,
			1346
		],
		"mapped",
		[
			1394
		]
	],
	[
		[
			1347,
			1347
		],
		"mapped",
		[
			1395
		]
	],
	[
		[
			1348,
			1348
		],
		"mapped",
		[
			1396
		]
	],
	[
		[
			1349,
			1349
		],
		"mapped",
		[
			1397
		]
	],
	[
		[
			1350,
			1350
		],
		"mapped",
		[
			1398
		]
	],
	[
		[
			1351,
			1351
		],
		"mapped",
		[
			1399
		]
	],
	[
		[
			1352,
			1352
		],
		"mapped",
		[
			1400
		]
	],
	[
		[
			1353,
			1353
		],
		"mapped",
		[
			1401
		]
	],
	[
		[
			1354,
			1354
		],
		"mapped",
		[
			1402
		]
	],
	[
		[
			1355,
			1355
		],
		"mapped",
		[
			1403
		]
	],
	[
		[
			1356,
			1356
		],
		"mapped",
		[
			1404
		]
	],
	[
		[
			1357,
			1357
		],
		"mapped",
		[
			1405
		]
	],
	[
		[
			1358,
			1358
		],
		"mapped",
		[
			1406
		]
	],
	[
		[
			1359,
			1359
		],
		"mapped",
		[
			1407
		]
	],
	[
		[
			1360,
			1360
		],
		"mapped",
		[
			1408
		]
	],
	[
		[
			1361,
			1361
		],
		"mapped",
		[
			1409
		]
	],
	[
		[
			1362,
			1362
		],
		"mapped",
		[
			1410
		]
	],
	[
		[
			1363,
			1363
		],
		"mapped",
		[
			1411
		]
	],
	[
		[
			1364,
			1364
		],
		"mapped",
		[
			1412
		]
	],
	[
		[
			1365,
			1365
		],
		"mapped",
		[
			1413
		]
	],
	[
		[
			1366,
			1366
		],
		"mapped",
		[
			1414
		]
	],
	[
		[
			1367,
			1368
		],
		"disallowed"
	],
	[
		[
			1369,
			1369
		],
		"valid"
	],
	[
		[
			1370,
			1375
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1376,
			1376
		],
		"disallowed"
	],
	[
		[
			1377,
			1414
		],
		"valid"
	],
	[
		[
			1415,
			1415
		],
		"mapped",
		[
			1381,
			1410
		]
	],
	[
		[
			1416,
			1416
		],
		"disallowed"
	],
	[
		[
			1417,
			1417
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1418,
			1418
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1419,
			1420
		],
		"disallowed"
	],
	[
		[
			1421,
			1422
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1423,
			1423
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1424,
			1424
		],
		"disallowed"
	],
	[
		[
			1425,
			1441
		],
		"valid"
	],
	[
		[
			1442,
			1442
		],
		"valid"
	],
	[
		[
			1443,
			1455
		],
		"valid"
	],
	[
		[
			1456,
			1465
		],
		"valid"
	],
	[
		[
			1466,
			1466
		],
		"valid"
	],
	[
		[
			1467,
			1469
		],
		"valid"
	],
	[
		[
			1470,
			1470
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1471,
			1471
		],
		"valid"
	],
	[
		[
			1472,
			1472
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1473,
			1474
		],
		"valid"
	],
	[
		[
			1475,
			1475
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1476,
			1476
		],
		"valid"
	],
	[
		[
			1477,
			1477
		],
		"valid"
	],
	[
		[
			1478,
			1478
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1479,
			1479
		],
		"valid"
	],
	[
		[
			1480,
			1487
		],
		"disallowed"
	],
	[
		[
			1488,
			1514
		],
		"valid"
	],
	[
		[
			1515,
			1519
		],
		"disallowed"
	],
	[
		[
			1520,
			1524
		],
		"valid"
	],
	[
		[
			1525,
			1535
		],
		"disallowed"
	],
	[
		[
			1536,
			1539
		],
		"disallowed"
	],
	[
		[
			1540,
			1540
		],
		"disallowed"
	],
	[
		[
			1541,
			1541
		],
		"disallowed"
	],
	[
		[
			1542,
			1546
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1547,
			1547
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1548,
			1548
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1549,
			1551
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1552,
			1557
		],
		"valid"
	],
	[
		[
			1558,
			1562
		],
		"valid"
	],
	[
		[
			1563,
			1563
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1564,
			1564
		],
		"disallowed"
	],
	[
		[
			1565,
			1565
		],
		"disallowed"
	],
	[
		[
			1566,
			1566
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1567,
			1567
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1568,
			1568
		],
		"valid"
	],
	[
		[
			1569,
			1594
		],
		"valid"
	],
	[
		[
			1595,
			1599
		],
		"valid"
	],
	[
		[
			1600,
			1600
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1601,
			1618
		],
		"valid"
	],
	[
		[
			1619,
			1621
		],
		"valid"
	],
	[
		[
			1622,
			1624
		],
		"valid"
	],
	[
		[
			1625,
			1630
		],
		"valid"
	],
	[
		[
			1631,
			1631
		],
		"valid"
	],
	[
		[
			1632,
			1641
		],
		"valid"
	],
	[
		[
			1642,
			1645
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1646,
			1647
		],
		"valid"
	],
	[
		[
			1648,
			1652
		],
		"valid"
	],
	[
		[
			1653,
			1653
		],
		"mapped",
		[
			1575,
			1652
		]
	],
	[
		[
			1654,
			1654
		],
		"mapped",
		[
			1608,
			1652
		]
	],
	[
		[
			1655,
			1655
		],
		"mapped",
		[
			1735,
			1652
		]
	],
	[
		[
			1656,
			1656
		],
		"mapped",
		[
			1610,
			1652
		]
	],
	[
		[
			1657,
			1719
		],
		"valid"
	],
	[
		[
			1720,
			1721
		],
		"valid"
	],
	[
		[
			1722,
			1726
		],
		"valid"
	],
	[
		[
			1727,
			1727
		],
		"valid"
	],
	[
		[
			1728,
			1742
		],
		"valid"
	],
	[
		[
			1743,
			1743
		],
		"valid"
	],
	[
		[
			1744,
			1747
		],
		"valid"
	],
	[
		[
			1748,
			1748
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1749,
			1756
		],
		"valid"
	],
	[
		[
			1757,
			1757
		],
		"disallowed"
	],
	[
		[
			1758,
			1758
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1759,
			1768
		],
		"valid"
	],
	[
		[
			1769,
			1769
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1770,
			1773
		],
		"valid"
	],
	[
		[
			1774,
			1775
		],
		"valid"
	],
	[
		[
			1776,
			1785
		],
		"valid"
	],
	[
		[
			1786,
			1790
		],
		"valid"
	],
	[
		[
			1791,
			1791
		],
		"valid"
	],
	[
		[
			1792,
			1805
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			1806,
			1806
		],
		"disallowed"
	],
	[
		[
			1807,
			1807
		],
		"disallowed"
	],
	[
		[
			1808,
			1836
		],
		"valid"
	],
	[
		[
			1837,
			1839
		],
		"valid"
	],
	[
		[
			1840,
			1866
		],
		"valid"
	],
	[
		[
			1867,
			1868
		],
		"disallowed"
	],
	[
		[
			1869,
			1871
		],
		"valid"
	],
	[
		[
			1872,
			1901
		],
		"valid"
	],
	[
		[
			1902,
			1919
		],
		"valid"
	],
	[
		[
			1920,
			1968
		],
		"valid"
	],
	[
		[
			1969,
			1969
		],
		"valid"
	],
	[
		[
			1970,
			1983
		],
		"disallowed"
	],
	[
		[
			1984,
			2037
		],
		"valid"
	],
	[
		[
			2038,
			2042
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2043,
			2047
		],
		"disallowed"
	],
	[
		[
			2048,
			2093
		],
		"valid"
	],
	[
		[
			2094,
			2095
		],
		"disallowed"
	],
	[
		[
			2096,
			2110
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2111,
			2111
		],
		"disallowed"
	],
	[
		[
			2112,
			2139
		],
		"valid"
	],
	[
		[
			2140,
			2141
		],
		"disallowed"
	],
	[
		[
			2142,
			2142
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2143,
			2207
		],
		"disallowed"
	],
	[
		[
			2208,
			2208
		],
		"valid"
	],
	[
		[
			2209,
			2209
		],
		"valid"
	],
	[
		[
			2210,
			2220
		],
		"valid"
	],
	[
		[
			2221,
			2226
		],
		"valid"
	],
	[
		[
			2227,
			2228
		],
		"valid"
	],
	[
		[
			2229,
			2274
		],
		"disallowed"
	],
	[
		[
			2275,
			2275
		],
		"valid"
	],
	[
		[
			2276,
			2302
		],
		"valid"
	],
	[
		[
			2303,
			2303
		],
		"valid"
	],
	[
		[
			2304,
			2304
		],
		"valid"
	],
	[
		[
			2305,
			2307
		],
		"valid"
	],
	[
		[
			2308,
			2308
		],
		"valid"
	],
	[
		[
			2309,
			2361
		],
		"valid"
	],
	[
		[
			2362,
			2363
		],
		"valid"
	],
	[
		[
			2364,
			2381
		],
		"valid"
	],
	[
		[
			2382,
			2382
		],
		"valid"
	],
	[
		[
			2383,
			2383
		],
		"valid"
	],
	[
		[
			2384,
			2388
		],
		"valid"
	],
	[
		[
			2389,
			2389
		],
		"valid"
	],
	[
		[
			2390,
			2391
		],
		"valid"
	],
	[
		[
			2392,
			2392
		],
		"mapped",
		[
			2325,
			2364
		]
	],
	[
		[
			2393,
			2393
		],
		"mapped",
		[
			2326,
			2364
		]
	],
	[
		[
			2394,
			2394
		],
		"mapped",
		[
			2327,
			2364
		]
	],
	[
		[
			2395,
			2395
		],
		"mapped",
		[
			2332,
			2364
		]
	],
	[
		[
			2396,
			2396
		],
		"mapped",
		[
			2337,
			2364
		]
	],
	[
		[
			2397,
			2397
		],
		"mapped",
		[
			2338,
			2364
		]
	],
	[
		[
			2398,
			2398
		],
		"mapped",
		[
			2347,
			2364
		]
	],
	[
		[
			2399,
			2399
		],
		"mapped",
		[
			2351,
			2364
		]
	],
	[
		[
			2400,
			2403
		],
		"valid"
	],
	[
		[
			2404,
			2405
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2406,
			2415
		],
		"valid"
	],
	[
		[
			2416,
			2416
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2417,
			2418
		],
		"valid"
	],
	[
		[
			2419,
			2423
		],
		"valid"
	],
	[
		[
			2424,
			2424
		],
		"valid"
	],
	[
		[
			2425,
			2426
		],
		"valid"
	],
	[
		[
			2427,
			2428
		],
		"valid"
	],
	[
		[
			2429,
			2429
		],
		"valid"
	],
	[
		[
			2430,
			2431
		],
		"valid"
	],
	[
		[
			2432,
			2432
		],
		"valid"
	],
	[
		[
			2433,
			2435
		],
		"valid"
	],
	[
		[
			2436,
			2436
		],
		"disallowed"
	],
	[
		[
			2437,
			2444
		],
		"valid"
	],
	[
		[
			2445,
			2446
		],
		"disallowed"
	],
	[
		[
			2447,
			2448
		],
		"valid"
	],
	[
		[
			2449,
			2450
		],
		"disallowed"
	],
	[
		[
			2451,
			2472
		],
		"valid"
	],
	[
		[
			2473,
			2473
		],
		"disallowed"
	],
	[
		[
			2474,
			2480
		],
		"valid"
	],
	[
		[
			2481,
			2481
		],
		"disallowed"
	],
	[
		[
			2482,
			2482
		],
		"valid"
	],
	[
		[
			2483,
			2485
		],
		"disallowed"
	],
	[
		[
			2486,
			2489
		],
		"valid"
	],
	[
		[
			2490,
			2491
		],
		"disallowed"
	],
	[
		[
			2492,
			2492
		],
		"valid"
	],
	[
		[
			2493,
			2493
		],
		"valid"
	],
	[
		[
			2494,
			2500
		],
		"valid"
	],
	[
		[
			2501,
			2502
		],
		"disallowed"
	],
	[
		[
			2503,
			2504
		],
		"valid"
	],
	[
		[
			2505,
			2506
		],
		"disallowed"
	],
	[
		[
			2507,
			2509
		],
		"valid"
	],
	[
		[
			2510,
			2510
		],
		"valid"
	],
	[
		[
			2511,
			2518
		],
		"disallowed"
	],
	[
		[
			2519,
			2519
		],
		"valid"
	],
	[
		[
			2520,
			2523
		],
		"disallowed"
	],
	[
		[
			2524,
			2524
		],
		"mapped",
		[
			2465,
			2492
		]
	],
	[
		[
			2525,
			2525
		],
		"mapped",
		[
			2466,
			2492
		]
	],
	[
		[
			2526,
			2526
		],
		"disallowed"
	],
	[
		[
			2527,
			2527
		],
		"mapped",
		[
			2479,
			2492
		]
	],
	[
		[
			2528,
			2531
		],
		"valid"
	],
	[
		[
			2532,
			2533
		],
		"disallowed"
	],
	[
		[
			2534,
			2545
		],
		"valid"
	],
	[
		[
			2546,
			2554
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2555,
			2555
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2556,
			2560
		],
		"disallowed"
	],
	[
		[
			2561,
			2561
		],
		"valid"
	],
	[
		[
			2562,
			2562
		],
		"valid"
	],
	[
		[
			2563,
			2563
		],
		"valid"
	],
	[
		[
			2564,
			2564
		],
		"disallowed"
	],
	[
		[
			2565,
			2570
		],
		"valid"
	],
	[
		[
			2571,
			2574
		],
		"disallowed"
	],
	[
		[
			2575,
			2576
		],
		"valid"
	],
	[
		[
			2577,
			2578
		],
		"disallowed"
	],
	[
		[
			2579,
			2600
		],
		"valid"
	],
	[
		[
			2601,
			2601
		],
		"disallowed"
	],
	[
		[
			2602,
			2608
		],
		"valid"
	],
	[
		[
			2609,
			2609
		],
		"disallowed"
	],
	[
		[
			2610,
			2610
		],
		"valid"
	],
	[
		[
			2611,
			2611
		],
		"mapped",
		[
			2610,
			2620
		]
	],
	[
		[
			2612,
			2612
		],
		"disallowed"
	],
	[
		[
			2613,
			2613
		],
		"valid"
	],
	[
		[
			2614,
			2614
		],
		"mapped",
		[
			2616,
			2620
		]
	],
	[
		[
			2615,
			2615
		],
		"disallowed"
	],
	[
		[
			2616,
			2617
		],
		"valid"
	],
	[
		[
			2618,
			2619
		],
		"disallowed"
	],
	[
		[
			2620,
			2620
		],
		"valid"
	],
	[
		[
			2621,
			2621
		],
		"disallowed"
	],
	[
		[
			2622,
			2626
		],
		"valid"
	],
	[
		[
			2627,
			2630
		],
		"disallowed"
	],
	[
		[
			2631,
			2632
		],
		"valid"
	],
	[
		[
			2633,
			2634
		],
		"disallowed"
	],
	[
		[
			2635,
			2637
		],
		"valid"
	],
	[
		[
			2638,
			2640
		],
		"disallowed"
	],
	[
		[
			2641,
			2641
		],
		"valid"
	],
	[
		[
			2642,
			2648
		],
		"disallowed"
	],
	[
		[
			2649,
			2649
		],
		"mapped",
		[
			2582,
			2620
		]
	],
	[
		[
			2650,
			2650
		],
		"mapped",
		[
			2583,
			2620
		]
	],
	[
		[
			2651,
			2651
		],
		"mapped",
		[
			2588,
			2620
		]
	],
	[
		[
			2652,
			2652
		],
		"valid"
	],
	[
		[
			2653,
			2653
		],
		"disallowed"
	],
	[
		[
			2654,
			2654
		],
		"mapped",
		[
			2603,
			2620
		]
	],
	[
		[
			2655,
			2661
		],
		"disallowed"
	],
	[
		[
			2662,
			2676
		],
		"valid"
	],
	[
		[
			2677,
			2677
		],
		"valid"
	],
	[
		[
			2678,
			2688
		],
		"disallowed"
	],
	[
		[
			2689,
			2691
		],
		"valid"
	],
	[
		[
			2692,
			2692
		],
		"disallowed"
	],
	[
		[
			2693,
			2699
		],
		"valid"
	],
	[
		[
			2700,
			2700
		],
		"valid"
	],
	[
		[
			2701,
			2701
		],
		"valid"
	],
	[
		[
			2702,
			2702
		],
		"disallowed"
	],
	[
		[
			2703,
			2705
		],
		"valid"
	],
	[
		[
			2706,
			2706
		],
		"disallowed"
	],
	[
		[
			2707,
			2728
		],
		"valid"
	],
	[
		[
			2729,
			2729
		],
		"disallowed"
	],
	[
		[
			2730,
			2736
		],
		"valid"
	],
	[
		[
			2737,
			2737
		],
		"disallowed"
	],
	[
		[
			2738,
			2739
		],
		"valid"
	],
	[
		[
			2740,
			2740
		],
		"disallowed"
	],
	[
		[
			2741,
			2745
		],
		"valid"
	],
	[
		[
			2746,
			2747
		],
		"disallowed"
	],
	[
		[
			2748,
			2757
		],
		"valid"
	],
	[
		[
			2758,
			2758
		],
		"disallowed"
	],
	[
		[
			2759,
			2761
		],
		"valid"
	],
	[
		[
			2762,
			2762
		],
		"disallowed"
	],
	[
		[
			2763,
			2765
		],
		"valid"
	],
	[
		[
			2766,
			2767
		],
		"disallowed"
	],
	[
		[
			2768,
			2768
		],
		"valid"
	],
	[
		[
			2769,
			2783
		],
		"disallowed"
	],
	[
		[
			2784,
			2784
		],
		"valid"
	],
	[
		[
			2785,
			2787
		],
		"valid"
	],
	[
		[
			2788,
			2789
		],
		"disallowed"
	],
	[
		[
			2790,
			2799
		],
		"valid"
	],
	[
		[
			2800,
			2800
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2801,
			2801
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2802,
			2808
		],
		"disallowed"
	],
	[
		[
			2809,
			2809
		],
		"valid"
	],
	[
		[
			2810,
			2816
		],
		"disallowed"
	],
	[
		[
			2817,
			2819
		],
		"valid"
	],
	[
		[
			2820,
			2820
		],
		"disallowed"
	],
	[
		[
			2821,
			2828
		],
		"valid"
	],
	[
		[
			2829,
			2830
		],
		"disallowed"
	],
	[
		[
			2831,
			2832
		],
		"valid"
	],
	[
		[
			2833,
			2834
		],
		"disallowed"
	],
	[
		[
			2835,
			2856
		],
		"valid"
	],
	[
		[
			2857,
			2857
		],
		"disallowed"
	],
	[
		[
			2858,
			2864
		],
		"valid"
	],
	[
		[
			2865,
			2865
		],
		"disallowed"
	],
	[
		[
			2866,
			2867
		],
		"valid"
	],
	[
		[
			2868,
			2868
		],
		"disallowed"
	],
	[
		[
			2869,
			2869
		],
		"valid"
	],
	[
		[
			2870,
			2873
		],
		"valid"
	],
	[
		[
			2874,
			2875
		],
		"disallowed"
	],
	[
		[
			2876,
			2883
		],
		"valid"
	],
	[
		[
			2884,
			2884
		],
		"valid"
	],
	[
		[
			2885,
			2886
		],
		"disallowed"
	],
	[
		[
			2887,
			2888
		],
		"valid"
	],
	[
		[
			2889,
			2890
		],
		"disallowed"
	],
	[
		[
			2891,
			2893
		],
		"valid"
	],
	[
		[
			2894,
			2901
		],
		"disallowed"
	],
	[
		[
			2902,
			2903
		],
		"valid"
	],
	[
		[
			2904,
			2907
		],
		"disallowed"
	],
	[
		[
			2908,
			2908
		],
		"mapped",
		[
			2849,
			2876
		]
	],
	[
		[
			2909,
			2909
		],
		"mapped",
		[
			2850,
			2876
		]
	],
	[
		[
			2910,
			2910
		],
		"disallowed"
	],
	[
		[
			2911,
			2913
		],
		"valid"
	],
	[
		[
			2914,
			2915
		],
		"valid"
	],
	[
		[
			2916,
			2917
		],
		"disallowed"
	],
	[
		[
			2918,
			2927
		],
		"valid"
	],
	[
		[
			2928,
			2928
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2929,
			2929
		],
		"valid"
	],
	[
		[
			2930,
			2935
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			2936,
			2945
		],
		"disallowed"
	],
	[
		[
			2946,
			2947
		],
		"valid"
	],
	[
		[
			2948,
			2948
		],
		"disallowed"
	],
	[
		[
			2949,
			2954
		],
		"valid"
	],
	[
		[
			2955,
			2957
		],
		"disallowed"
	],
	[
		[
			2958,
			2960
		],
		"valid"
	],
	[
		[
			2961,
			2961
		],
		"disallowed"
	],
	[
		[
			2962,
			2965
		],
		"valid"
	],
	[
		[
			2966,
			2968
		],
		"disallowed"
	],
	[
		[
			2969,
			2970
		],
		"valid"
	],
	[
		[
			2971,
			2971
		],
		"disallowed"
	],
	[
		[
			2972,
			2972
		],
		"valid"
	],
	[
		[
			2973,
			2973
		],
		"disallowed"
	],
	[
		[
			2974,
			2975
		],
		"valid"
	],
	[
		[
			2976,
			2978
		],
		"disallowed"
	],
	[
		[
			2979,
			2980
		],
		"valid"
	],
	[
		[
			2981,
			2983
		],
		"disallowed"
	],
	[
		[
			2984,
			2986
		],
		"valid"
	],
	[
		[
			2987,
			2989
		],
		"disallowed"
	],
	[
		[
			2990,
			2997
		],
		"valid"
	],
	[
		[
			2998,
			2998
		],
		"valid"
	],
	[
		[
			2999,
			3001
		],
		"valid"
	],
	[
		[
			3002,
			3005
		],
		"disallowed"
	],
	[
		[
			3006,
			3010
		],
		"valid"
	],
	[
		[
			3011,
			3013
		],
		"disallowed"
	],
	[
		[
			3014,
			3016
		],
		"valid"
	],
	[
		[
			3017,
			3017
		],
		"disallowed"
	],
	[
		[
			3018,
			3021
		],
		"valid"
	],
	[
		[
			3022,
			3023
		],
		"disallowed"
	],
	[
		[
			3024,
			3024
		],
		"valid"
	],
	[
		[
			3025,
			3030
		],
		"disallowed"
	],
	[
		[
			3031,
			3031
		],
		"valid"
	],
	[
		[
			3032,
			3045
		],
		"disallowed"
	],
	[
		[
			3046,
			3046
		],
		"valid"
	],
	[
		[
			3047,
			3055
		],
		"valid"
	],
	[
		[
			3056,
			3058
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3059,
			3066
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3067,
			3071
		],
		"disallowed"
	],
	[
		[
			3072,
			3072
		],
		"valid"
	],
	[
		[
			3073,
			3075
		],
		"valid"
	],
	[
		[
			3076,
			3076
		],
		"disallowed"
	],
	[
		[
			3077,
			3084
		],
		"valid"
	],
	[
		[
			3085,
			3085
		],
		"disallowed"
	],
	[
		[
			3086,
			3088
		],
		"valid"
	],
	[
		[
			3089,
			3089
		],
		"disallowed"
	],
	[
		[
			3090,
			3112
		],
		"valid"
	],
	[
		[
			3113,
			3113
		],
		"disallowed"
	],
	[
		[
			3114,
			3123
		],
		"valid"
	],
	[
		[
			3124,
			3124
		],
		"valid"
	],
	[
		[
			3125,
			3129
		],
		"valid"
	],
	[
		[
			3130,
			3132
		],
		"disallowed"
	],
	[
		[
			3133,
			3133
		],
		"valid"
	],
	[
		[
			3134,
			3140
		],
		"valid"
	],
	[
		[
			3141,
			3141
		],
		"disallowed"
	],
	[
		[
			3142,
			3144
		],
		"valid"
	],
	[
		[
			3145,
			3145
		],
		"disallowed"
	],
	[
		[
			3146,
			3149
		],
		"valid"
	],
	[
		[
			3150,
			3156
		],
		"disallowed"
	],
	[
		[
			3157,
			3158
		],
		"valid"
	],
	[
		[
			3159,
			3159
		],
		"disallowed"
	],
	[
		[
			3160,
			3161
		],
		"valid"
	],
	[
		[
			3162,
			3162
		],
		"valid"
	],
	[
		[
			3163,
			3167
		],
		"disallowed"
	],
	[
		[
			3168,
			3169
		],
		"valid"
	],
	[
		[
			3170,
			3171
		],
		"valid"
	],
	[
		[
			3172,
			3173
		],
		"disallowed"
	],
	[
		[
			3174,
			3183
		],
		"valid"
	],
	[
		[
			3184,
			3191
		],
		"disallowed"
	],
	[
		[
			3192,
			3199
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3200,
			3200
		],
		"disallowed"
	],
	[
		[
			3201,
			3201
		],
		"valid"
	],
	[
		[
			3202,
			3203
		],
		"valid"
	],
	[
		[
			3204,
			3204
		],
		"disallowed"
	],
	[
		[
			3205,
			3212
		],
		"valid"
	],
	[
		[
			3213,
			3213
		],
		"disallowed"
	],
	[
		[
			3214,
			3216
		],
		"valid"
	],
	[
		[
			3217,
			3217
		],
		"disallowed"
	],
	[
		[
			3218,
			3240
		],
		"valid"
	],
	[
		[
			3241,
			3241
		],
		"disallowed"
	],
	[
		[
			3242,
			3251
		],
		"valid"
	],
	[
		[
			3252,
			3252
		],
		"disallowed"
	],
	[
		[
			3253,
			3257
		],
		"valid"
	],
	[
		[
			3258,
			3259
		],
		"disallowed"
	],
	[
		[
			3260,
			3261
		],
		"valid"
	],
	[
		[
			3262,
			3268
		],
		"valid"
	],
	[
		[
			3269,
			3269
		],
		"disallowed"
	],
	[
		[
			3270,
			3272
		],
		"valid"
	],
	[
		[
			3273,
			3273
		],
		"disallowed"
	],
	[
		[
			3274,
			3277
		],
		"valid"
	],
	[
		[
			3278,
			3284
		],
		"disallowed"
	],
	[
		[
			3285,
			3286
		],
		"valid"
	],
	[
		[
			3287,
			3293
		],
		"disallowed"
	],
	[
		[
			3294,
			3294
		],
		"valid"
	],
	[
		[
			3295,
			3295
		],
		"disallowed"
	],
	[
		[
			3296,
			3297
		],
		"valid"
	],
	[
		[
			3298,
			3299
		],
		"valid"
	],
	[
		[
			3300,
			3301
		],
		"disallowed"
	],
	[
		[
			3302,
			3311
		],
		"valid"
	],
	[
		[
			3312,
			3312
		],
		"disallowed"
	],
	[
		[
			3313,
			3314
		],
		"valid"
	],
	[
		[
			3315,
			3328
		],
		"disallowed"
	],
	[
		[
			3329,
			3329
		],
		"valid"
	],
	[
		[
			3330,
			3331
		],
		"valid"
	],
	[
		[
			3332,
			3332
		],
		"disallowed"
	],
	[
		[
			3333,
			3340
		],
		"valid"
	],
	[
		[
			3341,
			3341
		],
		"disallowed"
	],
	[
		[
			3342,
			3344
		],
		"valid"
	],
	[
		[
			3345,
			3345
		],
		"disallowed"
	],
	[
		[
			3346,
			3368
		],
		"valid"
	],
	[
		[
			3369,
			3369
		],
		"valid"
	],
	[
		[
			3370,
			3385
		],
		"valid"
	],
	[
		[
			3386,
			3386
		],
		"valid"
	],
	[
		[
			3387,
			3388
		],
		"disallowed"
	],
	[
		[
			3389,
			3389
		],
		"valid"
	],
	[
		[
			3390,
			3395
		],
		"valid"
	],
	[
		[
			3396,
			3396
		],
		"valid"
	],
	[
		[
			3397,
			3397
		],
		"disallowed"
	],
	[
		[
			3398,
			3400
		],
		"valid"
	],
	[
		[
			3401,
			3401
		],
		"disallowed"
	],
	[
		[
			3402,
			3405
		],
		"valid"
	],
	[
		[
			3406,
			3406
		],
		"valid"
	],
	[
		[
			3407,
			3414
		],
		"disallowed"
	],
	[
		[
			3415,
			3415
		],
		"valid"
	],
	[
		[
			3416,
			3422
		],
		"disallowed"
	],
	[
		[
			3423,
			3423
		],
		"valid"
	],
	[
		[
			3424,
			3425
		],
		"valid"
	],
	[
		[
			3426,
			3427
		],
		"valid"
	],
	[
		[
			3428,
			3429
		],
		"disallowed"
	],
	[
		[
			3430,
			3439
		],
		"valid"
	],
	[
		[
			3440,
			3445
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3446,
			3448
		],
		"disallowed"
	],
	[
		[
			3449,
			3449
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3450,
			3455
		],
		"valid"
	],
	[
		[
			3456,
			3457
		],
		"disallowed"
	],
	[
		[
			3458,
			3459
		],
		"valid"
	],
	[
		[
			3460,
			3460
		],
		"disallowed"
	],
	[
		[
			3461,
			3478
		],
		"valid"
	],
	[
		[
			3479,
			3481
		],
		"disallowed"
	],
	[
		[
			3482,
			3505
		],
		"valid"
	],
	[
		[
			3506,
			3506
		],
		"disallowed"
	],
	[
		[
			3507,
			3515
		],
		"valid"
	],
	[
		[
			3516,
			3516
		],
		"disallowed"
	],
	[
		[
			3517,
			3517
		],
		"valid"
	],
	[
		[
			3518,
			3519
		],
		"disallowed"
	],
	[
		[
			3520,
			3526
		],
		"valid"
	],
	[
		[
			3527,
			3529
		],
		"disallowed"
	],
	[
		[
			3530,
			3530
		],
		"valid"
	],
	[
		[
			3531,
			3534
		],
		"disallowed"
	],
	[
		[
			3535,
			3540
		],
		"valid"
	],
	[
		[
			3541,
			3541
		],
		"disallowed"
	],
	[
		[
			3542,
			3542
		],
		"valid"
	],
	[
		[
			3543,
			3543
		],
		"disallowed"
	],
	[
		[
			3544,
			3551
		],
		"valid"
	],
	[
		[
			3552,
			3557
		],
		"disallowed"
	],
	[
		[
			3558,
			3567
		],
		"valid"
	],
	[
		[
			3568,
			3569
		],
		"disallowed"
	],
	[
		[
			3570,
			3571
		],
		"valid"
	],
	[
		[
			3572,
			3572
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3573,
			3584
		],
		"disallowed"
	],
	[
		[
			3585,
			3634
		],
		"valid"
	],
	[
		[
			3635,
			3635
		],
		"mapped",
		[
			3661,
			3634
		]
	],
	[
		[
			3636,
			3642
		],
		"valid"
	],
	[
		[
			3643,
			3646
		],
		"disallowed"
	],
	[
		[
			3647,
			3647
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3648,
			3662
		],
		"valid"
	],
	[
		[
			3663,
			3663
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3664,
			3673
		],
		"valid"
	],
	[
		[
			3674,
			3675
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3676,
			3712
		],
		"disallowed"
	],
	[
		[
			3713,
			3714
		],
		"valid"
	],
	[
		[
			3715,
			3715
		],
		"disallowed"
	],
	[
		[
			3716,
			3716
		],
		"valid"
	],
	[
		[
			3717,
			3718
		],
		"disallowed"
	],
	[
		[
			3719,
			3720
		],
		"valid"
	],
	[
		[
			3721,
			3721
		],
		"disallowed"
	],
	[
		[
			3722,
			3722
		],
		"valid"
	],
	[
		[
			3723,
			3724
		],
		"disallowed"
	],
	[
		[
			3725,
			3725
		],
		"valid"
	],
	[
		[
			3726,
			3731
		],
		"disallowed"
	],
	[
		[
			3732,
			3735
		],
		"valid"
	],
	[
		[
			3736,
			3736
		],
		"disallowed"
	],
	[
		[
			3737,
			3743
		],
		"valid"
	],
	[
		[
			3744,
			3744
		],
		"disallowed"
	],
	[
		[
			3745,
			3747
		],
		"valid"
	],
	[
		[
			3748,
			3748
		],
		"disallowed"
	],
	[
		[
			3749,
			3749
		],
		"valid"
	],
	[
		[
			3750,
			3750
		],
		"disallowed"
	],
	[
		[
			3751,
			3751
		],
		"valid"
	],
	[
		[
			3752,
			3753
		],
		"disallowed"
	],
	[
		[
			3754,
			3755
		],
		"valid"
	],
	[
		[
			3756,
			3756
		],
		"disallowed"
	],
	[
		[
			3757,
			3762
		],
		"valid"
	],
	[
		[
			3763,
			3763
		],
		"mapped",
		[
			3789,
			3762
		]
	],
	[
		[
			3764,
			3769
		],
		"valid"
	],
	[
		[
			3770,
			3770
		],
		"disallowed"
	],
	[
		[
			3771,
			3773
		],
		"valid"
	],
	[
		[
			3774,
			3775
		],
		"disallowed"
	],
	[
		[
			3776,
			3780
		],
		"valid"
	],
	[
		[
			3781,
			3781
		],
		"disallowed"
	],
	[
		[
			3782,
			3782
		],
		"valid"
	],
	[
		[
			3783,
			3783
		],
		"disallowed"
	],
	[
		[
			3784,
			3789
		],
		"valid"
	],
	[
		[
			3790,
			3791
		],
		"disallowed"
	],
	[
		[
			3792,
			3801
		],
		"valid"
	],
	[
		[
			3802,
			3803
		],
		"disallowed"
	],
	[
		[
			3804,
			3804
		],
		"mapped",
		[
			3755,
			3737
		]
	],
	[
		[
			3805,
			3805
		],
		"mapped",
		[
			3755,
			3745
		]
	],
	[
		[
			3806,
			3807
		],
		"valid"
	],
	[
		[
			3808,
			3839
		],
		"disallowed"
	],
	[
		[
			3840,
			3840
		],
		"valid"
	],
	[
		[
			3841,
			3850
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3851,
			3851
		],
		"valid"
	],
	[
		[
			3852,
			3852
		],
		"mapped",
		[
			3851
		]
	],
	[
		[
			3853,
			3863
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3864,
			3865
		],
		"valid"
	],
	[
		[
			3866,
			3871
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3872,
			3881
		],
		"valid"
	],
	[
		[
			3882,
			3892
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3893,
			3893
		],
		"valid"
	],
	[
		[
			3894,
			3894
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3895,
			3895
		],
		"valid"
	],
	[
		[
			3896,
			3896
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3897,
			3897
		],
		"valid"
	],
	[
		[
			3898,
			3901
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3902,
			3906
		],
		"valid"
	],
	[
		[
			3907,
			3907
		],
		"mapped",
		[
			3906,
			4023
		]
	],
	[
		[
			3908,
			3911
		],
		"valid"
	],
	[
		[
			3912,
			3912
		],
		"disallowed"
	],
	[
		[
			3913,
			3916
		],
		"valid"
	],
	[
		[
			3917,
			3917
		],
		"mapped",
		[
			3916,
			4023
		]
	],
	[
		[
			3918,
			3921
		],
		"valid"
	],
	[
		[
			3922,
			3922
		],
		"mapped",
		[
			3921,
			4023
		]
	],
	[
		[
			3923,
			3926
		],
		"valid"
	],
	[
		[
			3927,
			3927
		],
		"mapped",
		[
			3926,
			4023
		]
	],
	[
		[
			3928,
			3931
		],
		"valid"
	],
	[
		[
			3932,
			3932
		],
		"mapped",
		[
			3931,
			4023
		]
	],
	[
		[
			3933,
			3944
		],
		"valid"
	],
	[
		[
			3945,
			3945
		],
		"mapped",
		[
			3904,
			4021
		]
	],
	[
		[
			3946,
			3946
		],
		"valid"
	],
	[
		[
			3947,
			3948
		],
		"valid"
	],
	[
		[
			3949,
			3952
		],
		"disallowed"
	],
	[
		[
			3953,
			3954
		],
		"valid"
	],
	[
		[
			3955,
			3955
		],
		"mapped",
		[
			3953,
			3954
		]
	],
	[
		[
			3956,
			3956
		],
		"valid"
	],
	[
		[
			3957,
			3957
		],
		"mapped",
		[
			3953,
			3956
		]
	],
	[
		[
			3958,
			3958
		],
		"mapped",
		[
			4018,
			3968
		]
	],
	[
		[
			3959,
			3959
		],
		"mapped",
		[
			4018,
			3953,
			3968
		]
	],
	[
		[
			3960,
			3960
		],
		"mapped",
		[
			4019,
			3968
		]
	],
	[
		[
			3961,
			3961
		],
		"mapped",
		[
			4019,
			3953,
			3968
		]
	],
	[
		[
			3962,
			3968
		],
		"valid"
	],
	[
		[
			3969,
			3969
		],
		"mapped",
		[
			3953,
			3968
		]
	],
	[
		[
			3970,
			3972
		],
		"valid"
	],
	[
		[
			3973,
			3973
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			3974,
			3979
		],
		"valid"
	],
	[
		[
			3980,
			3983
		],
		"valid"
	],
	[
		[
			3984,
			3986
		],
		"valid"
	],
	[
		[
			3987,
			3987
		],
		"mapped",
		[
			3986,
			4023
		]
	],
	[
		[
			3988,
			3989
		],
		"valid"
	],
	[
		[
			3990,
			3990
		],
		"valid"
	],
	[
		[
			3991,
			3991
		],
		"valid"
	],
	[
		[
			3992,
			3992
		],
		"disallowed"
	],
	[
		[
			3993,
			3996
		],
		"valid"
	],
	[
		[
			3997,
			3997
		],
		"mapped",
		[
			3996,
			4023
		]
	],
	[
		[
			3998,
			4001
		],
		"valid"
	],
	[
		[
			4002,
			4002
		],
		"mapped",
		[
			4001,
			4023
		]
	],
	[
		[
			4003,
			4006
		],
		"valid"
	],
	[
		[
			4007,
			4007
		],
		"mapped",
		[
			4006,
			4023
		]
	],
	[
		[
			4008,
			4011
		],
		"valid"
	],
	[
		[
			4012,
			4012
		],
		"mapped",
		[
			4011,
			4023
		]
	],
	[
		[
			4013,
			4013
		],
		"valid"
	],
	[
		[
			4014,
			4016
		],
		"valid"
	],
	[
		[
			4017,
			4023
		],
		"valid"
	],
	[
		[
			4024,
			4024
		],
		"valid"
	],
	[
		[
			4025,
			4025
		],
		"mapped",
		[
			3984,
			4021
		]
	],
	[
		[
			4026,
			4028
		],
		"valid"
	],
	[
		[
			4029,
			4029
		],
		"disallowed"
	],
	[
		[
			4030,
			4037
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4038,
			4038
		],
		"valid"
	],
	[
		[
			4039,
			4044
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4045,
			4045
		],
		"disallowed"
	],
	[
		[
			4046,
			4046
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4047,
			4047
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4048,
			4049
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4050,
			4052
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4053,
			4056
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4057,
			4058
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4059,
			4095
		],
		"disallowed"
	],
	[
		[
			4096,
			4129
		],
		"valid"
	],
	[
		[
			4130,
			4130
		],
		"valid"
	],
	[
		[
			4131,
			4135
		],
		"valid"
	],
	[
		[
			4136,
			4136
		],
		"valid"
	],
	[
		[
			4137,
			4138
		],
		"valid"
	],
	[
		[
			4139,
			4139
		],
		"valid"
	],
	[
		[
			4140,
			4146
		],
		"valid"
	],
	[
		[
			4147,
			4149
		],
		"valid"
	],
	[
		[
			4150,
			4153
		],
		"valid"
	],
	[
		[
			4154,
			4159
		],
		"valid"
	],
	[
		[
			4160,
			4169
		],
		"valid"
	],
	[
		[
			4170,
			4175
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4176,
			4185
		],
		"valid"
	],
	[
		[
			4186,
			4249
		],
		"valid"
	],
	[
		[
			4250,
			4253
		],
		"valid"
	],
	[
		[
			4254,
			4255
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4256,
			4293
		],
		"disallowed"
	],
	[
		[
			4294,
			4294
		],
		"disallowed"
	],
	[
		[
			4295,
			4295
		],
		"mapped",
		[
			11559
		]
	],
	[
		[
			4296,
			4300
		],
		"disallowed"
	],
	[
		[
			4301,
			4301
		],
		"mapped",
		[
			11565
		]
	],
	[
		[
			4302,
			4303
		],
		"disallowed"
	],
	[
		[
			4304,
			4342
		],
		"valid"
	],
	[
		[
			4343,
			4344
		],
		"valid"
	],
	[
		[
			4345,
			4346
		],
		"valid"
	],
	[
		[
			4347,
			4347
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4348,
			4348
		],
		"mapped",
		[
			4316
		]
	],
	[
		[
			4349,
			4351
		],
		"valid"
	],
	[
		[
			4352,
			4441
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4442,
			4446
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4447,
			4448
		],
		"disallowed"
	],
	[
		[
			4449,
			4514
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4515,
			4519
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4520,
			4601
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4602,
			4607
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4608,
			4614
		],
		"valid"
	],
	[
		[
			4615,
			4615
		],
		"valid"
	],
	[
		[
			4616,
			4678
		],
		"valid"
	],
	[
		[
			4679,
			4679
		],
		"valid"
	],
	[
		[
			4680,
			4680
		],
		"valid"
	],
	[
		[
			4681,
			4681
		],
		"disallowed"
	],
	[
		[
			4682,
			4685
		],
		"valid"
	],
	[
		[
			4686,
			4687
		],
		"disallowed"
	],
	[
		[
			4688,
			4694
		],
		"valid"
	],
	[
		[
			4695,
			4695
		],
		"disallowed"
	],
	[
		[
			4696,
			4696
		],
		"valid"
	],
	[
		[
			4697,
			4697
		],
		"disallowed"
	],
	[
		[
			4698,
			4701
		],
		"valid"
	],
	[
		[
			4702,
			4703
		],
		"disallowed"
	],
	[
		[
			4704,
			4742
		],
		"valid"
	],
	[
		[
			4743,
			4743
		],
		"valid"
	],
	[
		[
			4744,
			4744
		],
		"valid"
	],
	[
		[
			4745,
			4745
		],
		"disallowed"
	],
	[
		[
			4746,
			4749
		],
		"valid"
	],
	[
		[
			4750,
			4751
		],
		"disallowed"
	],
	[
		[
			4752,
			4782
		],
		"valid"
	],
	[
		[
			4783,
			4783
		],
		"valid"
	],
	[
		[
			4784,
			4784
		],
		"valid"
	],
	[
		[
			4785,
			4785
		],
		"disallowed"
	],
	[
		[
			4786,
			4789
		],
		"valid"
	],
	[
		[
			4790,
			4791
		],
		"disallowed"
	],
	[
		[
			4792,
			4798
		],
		"valid"
	],
	[
		[
			4799,
			4799
		],
		"disallowed"
	],
	[
		[
			4800,
			4800
		],
		"valid"
	],
	[
		[
			4801,
			4801
		],
		"disallowed"
	],
	[
		[
			4802,
			4805
		],
		"valid"
	],
	[
		[
			4806,
			4807
		],
		"disallowed"
	],
	[
		[
			4808,
			4814
		],
		"valid"
	],
	[
		[
			4815,
			4815
		],
		"valid"
	],
	[
		[
			4816,
			4822
		],
		"valid"
	],
	[
		[
			4823,
			4823
		],
		"disallowed"
	],
	[
		[
			4824,
			4846
		],
		"valid"
	],
	[
		[
			4847,
			4847
		],
		"valid"
	],
	[
		[
			4848,
			4878
		],
		"valid"
	],
	[
		[
			4879,
			4879
		],
		"valid"
	],
	[
		[
			4880,
			4880
		],
		"valid"
	],
	[
		[
			4881,
			4881
		],
		"disallowed"
	],
	[
		[
			4882,
			4885
		],
		"valid"
	],
	[
		[
			4886,
			4887
		],
		"disallowed"
	],
	[
		[
			4888,
			4894
		],
		"valid"
	],
	[
		[
			4895,
			4895
		],
		"valid"
	],
	[
		[
			4896,
			4934
		],
		"valid"
	],
	[
		[
			4935,
			4935
		],
		"valid"
	],
	[
		[
			4936,
			4954
		],
		"valid"
	],
	[
		[
			4955,
			4956
		],
		"disallowed"
	],
	[
		[
			4957,
			4958
		],
		"valid"
	],
	[
		[
			4959,
			4959
		],
		"valid"
	],
	[
		[
			4960,
			4960
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4961,
			4988
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			4989,
			4991
		],
		"disallowed"
	],
	[
		[
			4992,
			5007
		],
		"valid"
	],
	[
		[
			5008,
			5017
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			5018,
			5023
		],
		"disallowed"
	],
	[
		[
			5024,
			5108
		],
		"valid"
	],
	[
		[
			5109,
			5109
		],
		"valid"
	],
	[
		[
			5110,
			5111
		],
		"disallowed"
	],
	[
		[
			5112,
			5112
		],
		"mapped",
		[
			5104
		]
	],
	[
		[
			5113,
			5113
		],
		"mapped",
		[
			5105
		]
	],
	[
		[
			5114,
			5114
		],
		"mapped",
		[
			5106
		]
	],
	[
		[
			5115,
			5115
		],
		"mapped",
		[
			5107
		]
	],
	[
		[
			5116,
			5116
		],
		"mapped",
		[
			5108
		]
	],
	[
		[
			5117,
			5117
		],
		"mapped",
		[
			5109
		]
	],
	[
		[
			5118,
			5119
		],
		"disallowed"
	],
	[
		[
			5120,
			5120
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			5121,
			5740
		],
		"valid"
	],
	[
		[
			5741,
			5742
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			5743,
			5750
		],
		"valid"
	],
	[
		[
			5751,
			5759
		],
		"valid"
	],
	[
		[
			5760,
			5760
		],
		"disallowed"
	],
	[
		[
			5761,
			5786
		],
		"valid"
	],
	[
		[
			5787,
			5788
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			5789,
			5791
		],
		"disallowed"
	],
	[
		[
			5792,
			5866
		],
		"valid"
	],
	[
		[
			5867,
			5872
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			5873,
			5880
		],
		"valid"
	],
	[
		[
			5881,
			5887
		],
		"disallowed"
	],
	[
		[
			5888,
			5900
		],
		"valid"
	],
	[
		[
			5901,
			5901
		],
		"disallowed"
	],
	[
		[
			5902,
			5908
		],
		"valid"
	],
	[
		[
			5909,
			5919
		],
		"disallowed"
	],
	[
		[
			5920,
			5940
		],
		"valid"
	],
	[
		[
			5941,
			5942
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			5943,
			5951
		],
		"disallowed"
	],
	[
		[
			5952,
			5971
		],
		"valid"
	],
	[
		[
			5972,
			5983
		],
		"disallowed"
	],
	[
		[
			5984,
			5996
		],
		"valid"
	],
	[
		[
			5997,
			5997
		],
		"disallowed"
	],
	[
		[
			5998,
			6000
		],
		"valid"
	],
	[
		[
			6001,
			6001
		],
		"disallowed"
	],
	[
		[
			6002,
			6003
		],
		"valid"
	],
	[
		[
			6004,
			6015
		],
		"disallowed"
	],
	[
		[
			6016,
			6067
		],
		"valid"
	],
	[
		[
			6068,
			6069
		],
		"disallowed"
	],
	[
		[
			6070,
			6099
		],
		"valid"
	],
	[
		[
			6100,
			6102
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6103,
			6103
		],
		"valid"
	],
	[
		[
			6104,
			6107
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6108,
			6108
		],
		"valid"
	],
	[
		[
			6109,
			6109
		],
		"valid"
	],
	[
		[
			6110,
			6111
		],
		"disallowed"
	],
	[
		[
			6112,
			6121
		],
		"valid"
	],
	[
		[
			6122,
			6127
		],
		"disallowed"
	],
	[
		[
			6128,
			6137
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6138,
			6143
		],
		"disallowed"
	],
	[
		[
			6144,
			6149
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6150,
			6150
		],
		"disallowed"
	],
	[
		[
			6151,
			6154
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6155,
			6157
		],
		"ignored"
	],
	[
		[
			6158,
			6158
		],
		"disallowed"
	],
	[
		[
			6159,
			6159
		],
		"disallowed"
	],
	[
		[
			6160,
			6169
		],
		"valid"
	],
	[
		[
			6170,
			6175
		],
		"disallowed"
	],
	[
		[
			6176,
			6263
		],
		"valid"
	],
	[
		[
			6264,
			6271
		],
		"disallowed"
	],
	[
		[
			6272,
			6313
		],
		"valid"
	],
	[
		[
			6314,
			6314
		],
		"valid"
	],
	[
		[
			6315,
			6319
		],
		"disallowed"
	],
	[
		[
			6320,
			6389
		],
		"valid"
	],
	[
		[
			6390,
			6399
		],
		"disallowed"
	],
	[
		[
			6400,
			6428
		],
		"valid"
	],
	[
		[
			6429,
			6430
		],
		"valid"
	],
	[
		[
			6431,
			6431
		],
		"disallowed"
	],
	[
		[
			6432,
			6443
		],
		"valid"
	],
	[
		[
			6444,
			6447
		],
		"disallowed"
	],
	[
		[
			6448,
			6459
		],
		"valid"
	],
	[
		[
			6460,
			6463
		],
		"disallowed"
	],
	[
		[
			6464,
			6464
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6465,
			6467
		],
		"disallowed"
	],
	[
		[
			6468,
			6469
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6470,
			6509
		],
		"valid"
	],
	[
		[
			6510,
			6511
		],
		"disallowed"
	],
	[
		[
			6512,
			6516
		],
		"valid"
	],
	[
		[
			6517,
			6527
		],
		"disallowed"
	],
	[
		[
			6528,
			6569
		],
		"valid"
	],
	[
		[
			6570,
			6571
		],
		"valid"
	],
	[
		[
			6572,
			6575
		],
		"disallowed"
	],
	[
		[
			6576,
			6601
		],
		"valid"
	],
	[
		[
			6602,
			6607
		],
		"disallowed"
	],
	[
		[
			6608,
			6617
		],
		"valid"
	],
	[
		[
			6618,
			6618
		],
		"valid",
		[
		],
		"XV8"
	],
	[
		[
			6619,
			6621
		],
		"disallowed"
	],
	[
		[
			6622,
			6623
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6624,
			6655
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6656,
			6683
		],
		"valid"
	],
	[
		[
			6684,
			6685
		],
		"disallowed"
	],
	[
		[
			6686,
			6687
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6688,
			6750
		],
		"valid"
	],
	[
		[
			6751,
			6751
		],
		"disallowed"
	],
	[
		[
			6752,
			6780
		],
		"valid"
	],
	[
		[
			6781,
			6782
		],
		"disallowed"
	],
	[
		[
			6783,
			6793
		],
		"valid"
	],
	[
		[
			6794,
			6799
		],
		"disallowed"
	],
	[
		[
			6800,
			6809
		],
		"valid"
	],
	[
		[
			6810,
			6815
		],
		"disallowed"
	],
	[
		[
			6816,
			6822
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6823,
			6823
		],
		"valid"
	],
	[
		[
			6824,
			6829
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6830,
			6831
		],
		"disallowed"
	],
	[
		[
			6832,
			6845
		],
		"valid"
	],
	[
		[
			6846,
			6846
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			6847,
			6911
		],
		"disallowed"
	],
	[
		[
			6912,
			6987
		],
		"valid"
	],
	[
		[
			6988,
			6991
		],
		"disallowed"
	],
	[
		[
			6992,
			7001
		],
		"valid"
	],
	[
		[
			7002,
			7018
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			7019,
			7027
		],
		"valid"
	],
	[
		[
			7028,
			7036
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			7037,
			7039
		],
		"disallowed"
	],
	[
		[
			7040,
			7082
		],
		"valid"
	],
	[
		[
			7083,
			7085
		],
		"valid"
	],
	[
		[
			7086,
			7097
		],
		"valid"
	],
	[
		[
			7098,
			7103
		],
		"valid"
	],
	[
		[
			7104,
			7155
		],
		"valid"
	],
	[
		[
			7156,
			7163
		],
		"disallowed"
	],
	[
		[
			7164,
			7167
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			7168,
			7223
		],
		"valid"
	],
	[
		[
			7224,
			7226
		],
		"disallowed"
	],
	[
		[
			7227,
			7231
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			7232,
			7241
		],
		"valid"
	],
	[
		[
			7242,
			7244
		],
		"disallowed"
	],
	[
		[
			7245,
			7293
		],
		"valid"
	],
	[
		[
			7294,
			7295
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			7296,
			7359
		],
		"disallowed"
	],
	[
		[
			7360,
			7367
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			7368,
			7375
		],
		"disallowed"
	],
	[
		[
			7376,
			7378
		],
		"valid"
	],
	[
		[
			7379,
			7379
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			7380,
			7410
		],
		"valid"
	],
	[
		[
			7411,
			7414
		],
		"valid"
	],
	[
		[
			7415,
			7415
		],
		"disallowed"
	],
	[
		[
			7416,
			7417
		],
		"valid"
	],
	[
		[
			7418,
			7423
		],
		"disallowed"
	],
	[
		[
			7424,
			7467
		],
		"valid"
	],
	[
		[
			7468,
			7468
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			7469,
			7469
		],
		"mapped",
		[
			230
		]
	],
	[
		[
			7470,
			7470
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			7471,
			7471
		],
		"valid"
	],
	[
		[
			7472,
			7472
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			7473,
			7473
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			7474,
			7474
		],
		"mapped",
		[
			477
		]
	],
	[
		[
			7475,
			7475
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			7476,
			7476
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			7477,
			7477
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			7478,
			7478
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			7479,
			7479
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			7480,
			7480
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			7481,
			7481
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			7482,
			7482
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			7483,
			7483
		],
		"valid"
	],
	[
		[
			7484,
			7484
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			7485,
			7485
		],
		"mapped",
		[
			547
		]
	],
	[
		[
			7486,
			7486
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			7487,
			7487
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			7488,
			7488
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			7489,
			7489
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			7490,
			7490
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			7491,
			7491
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			7492,
			7492
		],
		"mapped",
		[
			592
		]
	],
	[
		[
			7493,
			7493
		],
		"mapped",
		[
			593
		]
	],
	[
		[
			7494,
			7494
		],
		"mapped",
		[
			7426
		]
	],
	[
		[
			7495,
			7495
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			7496,
			7496
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			7497,
			7497
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			7498,
			7498
		],
		"mapped",
		[
			601
		]
	],
	[
		[
			7499,
			7499
		],
		"mapped",
		[
			603
		]
	],
	[
		[
			7500,
			7500
		],
		"mapped",
		[
			604
		]
	],
	[
		[
			7501,
			7501
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			7502,
			7502
		],
		"valid"
	],
	[
		[
			7503,
			7503
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			7504,
			7504
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			7505,
			7505
		],
		"mapped",
		[
			331
		]
	],
	[
		[
			7506,
			7506
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			7507,
			7507
		],
		"mapped",
		[
			596
		]
	],
	[
		[
			7508,
			7508
		],
		"mapped",
		[
			7446
		]
	],
	[
		[
			7509,
			7509
		],
		"mapped",
		[
			7447
		]
	],
	[
		[
			7510,
			7510
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			7511,
			7511
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			7512,
			7512
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			7513,
			7513
		],
		"mapped",
		[
			7453
		]
	],
	[
		[
			7514,
			7514
		],
		"mapped",
		[
			623
		]
	],
	[
		[
			7515,
			7515
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			7516,
			7516
		],
		"mapped",
		[
			7461
		]
	],
	[
		[
			7517,
			7517
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			7518,
			7518
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			7519,
			7519
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			7520,
			7520
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			7521,
			7521
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			7522,
			7522
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			7523,
			7523
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			7524,
			7524
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			7525,
			7525
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			7526,
			7526
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			7527,
			7527
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			7528,
			7528
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			7529,
			7529
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			7530,
			7530
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			7531,
			7531
		],
		"valid"
	],
	[
		[
			7532,
			7543
		],
		"valid"
	],
	[
		[
			7544,
			7544
		],
		"mapped",
		[
			1085
		]
	],
	[
		[
			7545,
			7578
		],
		"valid"
	],
	[
		[
			7579,
			7579
		],
		"mapped",
		[
			594
		]
	],
	[
		[
			7580,
			7580
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			7581,
			7581
		],
		"mapped",
		[
			597
		]
	],
	[
		[
			7582,
			7582
		],
		"mapped",
		[
			240
		]
	],
	[
		[
			7583,
			7583
		],
		"mapped",
		[
			604
		]
	],
	[
		[
			7584,
			7584
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			7585,
			7585
		],
		"mapped",
		[
			607
		]
	],
	[
		[
			7586,
			7586
		],
		"mapped",
		[
			609
		]
	],
	[
		[
			7587,
			7587
		],
		"mapped",
		[
			613
		]
	],
	[
		[
			7588,
			7588
		],
		"mapped",
		[
			616
		]
	],
	[
		[
			7589,
			7589
		],
		"mapped",
		[
			617
		]
	],
	[
		[
			7590,
			7590
		],
		"mapped",
		[
			618
		]
	],
	[
		[
			7591,
			7591
		],
		"mapped",
		[
			7547
		]
	],
	[
		[
			7592,
			7592
		],
		"mapped",
		[
			669
		]
	],
	[
		[
			7593,
			7593
		],
		"mapped",
		[
			621
		]
	],
	[
		[
			7594,
			7594
		],
		"mapped",
		[
			7557
		]
	],
	[
		[
			7595,
			7595
		],
		"mapped",
		[
			671
		]
	],
	[
		[
			7596,
			7596
		],
		"mapped",
		[
			625
		]
	],
	[
		[
			7597,
			7597
		],
		"mapped",
		[
			624
		]
	],
	[
		[
			7598,
			7598
		],
		"mapped",
		[
			626
		]
	],
	[
		[
			7599,
			7599
		],
		"mapped",
		[
			627
		]
	],
	[
		[
			7600,
			7600
		],
		"mapped",
		[
			628
		]
	],
	[
		[
			7601,
			7601
		],
		"mapped",
		[
			629
		]
	],
	[
		[
			7602,
			7602
		],
		"mapped",
		[
			632
		]
	],
	[
		[
			7603,
			7603
		],
		"mapped",
		[
			642
		]
	],
	[
		[
			7604,
			7604
		],
		"mapped",
		[
			643
		]
	],
	[
		[
			7605,
			7605
		],
		"mapped",
		[
			427
		]
	],
	[
		[
			7606,
			7606
		],
		"mapped",
		[
			649
		]
	],
	[
		[
			7607,
			7607
		],
		"mapped",
		[
			650
		]
	],
	[
		[
			7608,
			7608
		],
		"mapped",
		[
			7452
		]
	],
	[
		[
			7609,
			7609
		],
		"mapped",
		[
			651
		]
	],
	[
		[
			7610,
			7610
		],
		"mapped",
		[
			652
		]
	],
	[
		[
			7611,
			7611
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			7612,
			7612
		],
		"mapped",
		[
			656
		]
	],
	[
		[
			7613,
			7613
		],
		"mapped",
		[
			657
		]
	],
	[
		[
			7614,
			7614
		],
		"mapped",
		[
			658
		]
	],
	[
		[
			7615,
			7615
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			7616,
			7619
		],
		"valid"
	],
	[
		[
			7620,
			7626
		],
		"valid"
	],
	[
		[
			7627,
			7654
		],
		"valid"
	],
	[
		[
			7655,
			7669
		],
		"valid"
	],
	[
		[
			7670,
			7675
		],
		"disallowed"
	],
	[
		[
			7676,
			7676
		],
		"valid"
	],
	[
		[
			7677,
			7677
		],
		"valid"
	],
	[
		[
			7678,
			7679
		],
		"valid"
	],
	[
		[
			7680,
			7680
		],
		"mapped",
		[
			7681
		]
	],
	[
		[
			7681,
			7681
		],
		"valid"
	],
	[
		[
			7682,
			7682
		],
		"mapped",
		[
			7683
		]
	],
	[
		[
			7683,
			7683
		],
		"valid"
	],
	[
		[
			7684,
			7684
		],
		"mapped",
		[
			7685
		]
	],
	[
		[
			7685,
			7685
		],
		"valid"
	],
	[
		[
			7686,
			7686
		],
		"mapped",
		[
			7687
		]
	],
	[
		[
			7687,
			7687
		],
		"valid"
	],
	[
		[
			7688,
			7688
		],
		"mapped",
		[
			7689
		]
	],
	[
		[
			7689,
			7689
		],
		"valid"
	],
	[
		[
			7690,
			7690
		],
		"mapped",
		[
			7691
		]
	],
	[
		[
			7691,
			7691
		],
		"valid"
	],
	[
		[
			7692,
			7692
		],
		"mapped",
		[
			7693
		]
	],
	[
		[
			7693,
			7693
		],
		"valid"
	],
	[
		[
			7694,
			7694
		],
		"mapped",
		[
			7695
		]
	],
	[
		[
			7695,
			7695
		],
		"valid"
	],
	[
		[
			7696,
			7696
		],
		"mapped",
		[
			7697
		]
	],
	[
		[
			7697,
			7697
		],
		"valid"
	],
	[
		[
			7698,
			7698
		],
		"mapped",
		[
			7699
		]
	],
	[
		[
			7699,
			7699
		],
		"valid"
	],
	[
		[
			7700,
			7700
		],
		"mapped",
		[
			7701
		]
	],
	[
		[
			7701,
			7701
		],
		"valid"
	],
	[
		[
			7702,
			7702
		],
		"mapped",
		[
			7703
		]
	],
	[
		[
			7703,
			7703
		],
		"valid"
	],
	[
		[
			7704,
			7704
		],
		"mapped",
		[
			7705
		]
	],
	[
		[
			7705,
			7705
		],
		"valid"
	],
	[
		[
			7706,
			7706
		],
		"mapped",
		[
			7707
		]
	],
	[
		[
			7707,
			7707
		],
		"valid"
	],
	[
		[
			7708,
			7708
		],
		"mapped",
		[
			7709
		]
	],
	[
		[
			7709,
			7709
		],
		"valid"
	],
	[
		[
			7710,
			7710
		],
		"mapped",
		[
			7711
		]
	],
	[
		[
			7711,
			7711
		],
		"valid"
	],
	[
		[
			7712,
			7712
		],
		"mapped",
		[
			7713
		]
	],
	[
		[
			7713,
			7713
		],
		"valid"
	],
	[
		[
			7714,
			7714
		],
		"mapped",
		[
			7715
		]
	],
	[
		[
			7715,
			7715
		],
		"valid"
	],
	[
		[
			7716,
			7716
		],
		"mapped",
		[
			7717
		]
	],
	[
		[
			7717,
			7717
		],
		"valid"
	],
	[
		[
			7718,
			7718
		],
		"mapped",
		[
			7719
		]
	],
	[
		[
			7719,
			7719
		],
		"valid"
	],
	[
		[
			7720,
			7720
		],
		"mapped",
		[
			7721
		]
	],
	[
		[
			7721,
			7721
		],
		"valid"
	],
	[
		[
			7722,
			7722
		],
		"mapped",
		[
			7723
		]
	],
	[
		[
			7723,
			7723
		],
		"valid"
	],
	[
		[
			7724,
			7724
		],
		"mapped",
		[
			7725
		]
	],
	[
		[
			7725,
			7725
		],
		"valid"
	],
	[
		[
			7726,
			7726
		],
		"mapped",
		[
			7727
		]
	],
	[
		[
			7727,
			7727
		],
		"valid"
	],
	[
		[
			7728,
			7728
		],
		"mapped",
		[
			7729
		]
	],
	[
		[
			7729,
			7729
		],
		"valid"
	],
	[
		[
			7730,
			7730
		],
		"mapped",
		[
			7731
		]
	],
	[
		[
			7731,
			7731
		],
		"valid"
	],
	[
		[
			7732,
			7732
		],
		"mapped",
		[
			7733
		]
	],
	[
		[
			7733,
			7733
		],
		"valid"
	],
	[
		[
			7734,
			7734
		],
		"mapped",
		[
			7735
		]
	],
	[
		[
			7735,
			7735
		],
		"valid"
	],
	[
		[
			7736,
			7736
		],
		"mapped",
		[
			7737
		]
	],
	[
		[
			7737,
			7737
		],
		"valid"
	],
	[
		[
			7738,
			7738
		],
		"mapped",
		[
			7739
		]
	],
	[
		[
			7739,
			7739
		],
		"valid"
	],
	[
		[
			7740,
			7740
		],
		"mapped",
		[
			7741
		]
	],
	[
		[
			7741,
			7741
		],
		"valid"
	],
	[
		[
			7742,
			7742
		],
		"mapped",
		[
			7743
		]
	],
	[
		[
			7743,
			7743
		],
		"valid"
	],
	[
		[
			7744,
			7744
		],
		"mapped",
		[
			7745
		]
	],
	[
		[
			7745,
			7745
		],
		"valid"
	],
	[
		[
			7746,
			7746
		],
		"mapped",
		[
			7747
		]
	],
	[
		[
			7747,
			7747
		],
		"valid"
	],
	[
		[
			7748,
			7748
		],
		"mapped",
		[
			7749
		]
	],
	[
		[
			7749,
			7749
		],
		"valid"
	],
	[
		[
			7750,
			7750
		],
		"mapped",
		[
			7751
		]
	],
	[
		[
			7751,
			7751
		],
		"valid"
	],
	[
		[
			7752,
			7752
		],
		"mapped",
		[
			7753
		]
	],
	[
		[
			7753,
			7753
		],
		"valid"
	],
	[
		[
			7754,
			7754
		],
		"mapped",
		[
			7755
		]
	],
	[
		[
			7755,
			7755
		],
		"valid"
	],
	[
		[
			7756,
			7756
		],
		"mapped",
		[
			7757
		]
	],
	[
		[
			7757,
			7757
		],
		"valid"
	],
	[
		[
			7758,
			7758
		],
		"mapped",
		[
			7759
		]
	],
	[
		[
			7759,
			7759
		],
		"valid"
	],
	[
		[
			7760,
			7760
		],
		"mapped",
		[
			7761
		]
	],
	[
		[
			7761,
			7761
		],
		"valid"
	],
	[
		[
			7762,
			7762
		],
		"mapped",
		[
			7763
		]
	],
	[
		[
			7763,
			7763
		],
		"valid"
	],
	[
		[
			7764,
			7764
		],
		"mapped",
		[
			7765
		]
	],
	[
		[
			7765,
			7765
		],
		"valid"
	],
	[
		[
			7766,
			7766
		],
		"mapped",
		[
			7767
		]
	],
	[
		[
			7767,
			7767
		],
		"valid"
	],
	[
		[
			7768,
			7768
		],
		"mapped",
		[
			7769
		]
	],
	[
		[
			7769,
			7769
		],
		"valid"
	],
	[
		[
			7770,
			7770
		],
		"mapped",
		[
			7771
		]
	],
	[
		[
			7771,
			7771
		],
		"valid"
	],
	[
		[
			7772,
			7772
		],
		"mapped",
		[
			7773
		]
	],
	[
		[
			7773,
			7773
		],
		"valid"
	],
	[
		[
			7774,
			7774
		],
		"mapped",
		[
			7775
		]
	],
	[
		[
			7775,
			7775
		],
		"valid"
	],
	[
		[
			7776,
			7776
		],
		"mapped",
		[
			7777
		]
	],
	[
		[
			7777,
			7777
		],
		"valid"
	],
	[
		[
			7778,
			7778
		],
		"mapped",
		[
			7779
		]
	],
	[
		[
			7779,
			7779
		],
		"valid"
	],
	[
		[
			7780,
			7780
		],
		"mapped",
		[
			7781
		]
	],
	[
		[
			7781,
			7781
		],
		"valid"
	],
	[
		[
			7782,
			7782
		],
		"mapped",
		[
			7783
		]
	],
	[
		[
			7783,
			7783
		],
		"valid"
	],
	[
		[
			7784,
			7784
		],
		"mapped",
		[
			7785
		]
	],
	[
		[
			7785,
			7785
		],
		"valid"
	],
	[
		[
			7786,
			7786
		],
		"mapped",
		[
			7787
		]
	],
	[
		[
			7787,
			7787
		],
		"valid"
	],
	[
		[
			7788,
			7788
		],
		"mapped",
		[
			7789
		]
	],
	[
		[
			7789,
			7789
		],
		"valid"
	],
	[
		[
			7790,
			7790
		],
		"mapped",
		[
			7791
		]
	],
	[
		[
			7791,
			7791
		],
		"valid"
	],
	[
		[
			7792,
			7792
		],
		"mapped",
		[
			7793
		]
	],
	[
		[
			7793,
			7793
		],
		"valid"
	],
	[
		[
			7794,
			7794
		],
		"mapped",
		[
			7795
		]
	],
	[
		[
			7795,
			7795
		],
		"valid"
	],
	[
		[
			7796,
			7796
		],
		"mapped",
		[
			7797
		]
	],
	[
		[
			7797,
			7797
		],
		"valid"
	],
	[
		[
			7798,
			7798
		],
		"mapped",
		[
			7799
		]
	],
	[
		[
			7799,
			7799
		],
		"valid"
	],
	[
		[
			7800,
			7800
		],
		"mapped",
		[
			7801
		]
	],
	[
		[
			7801,
			7801
		],
		"valid"
	],
	[
		[
			7802,
			7802
		],
		"mapped",
		[
			7803
		]
	],
	[
		[
			7803,
			7803
		],
		"valid"
	],
	[
		[
			7804,
			7804
		],
		"mapped",
		[
			7805
		]
	],
	[
		[
			7805,
			7805
		],
		"valid"
	],
	[
		[
			7806,
			7806
		],
		"mapped",
		[
			7807
		]
	],
	[
		[
			7807,
			7807
		],
		"valid"
	],
	[
		[
			7808,
			7808
		],
		"mapped",
		[
			7809
		]
	],
	[
		[
			7809,
			7809
		],
		"valid"
	],
	[
		[
			7810,
			7810
		],
		"mapped",
		[
			7811
		]
	],
	[
		[
			7811,
			7811
		],
		"valid"
	],
	[
		[
			7812,
			7812
		],
		"mapped",
		[
			7813
		]
	],
	[
		[
			7813,
			7813
		],
		"valid"
	],
	[
		[
			7814,
			7814
		],
		"mapped",
		[
			7815
		]
	],
	[
		[
			7815,
			7815
		],
		"valid"
	],
	[
		[
			7816,
			7816
		],
		"mapped",
		[
			7817
		]
	],
	[
		[
			7817,
			7817
		],
		"valid"
	],
	[
		[
			7818,
			7818
		],
		"mapped",
		[
			7819
		]
	],
	[
		[
			7819,
			7819
		],
		"valid"
	],
	[
		[
			7820,
			7820
		],
		"mapped",
		[
			7821
		]
	],
	[
		[
			7821,
			7821
		],
		"valid"
	],
	[
		[
			7822,
			7822
		],
		"mapped",
		[
			7823
		]
	],
	[
		[
			7823,
			7823
		],
		"valid"
	],
	[
		[
			7824,
			7824
		],
		"mapped",
		[
			7825
		]
	],
	[
		[
			7825,
			7825
		],
		"valid"
	],
	[
		[
			7826,
			7826
		],
		"mapped",
		[
			7827
		]
	],
	[
		[
			7827,
			7827
		],
		"valid"
	],
	[
		[
			7828,
			7828
		],
		"mapped",
		[
			7829
		]
	],
	[
		[
			7829,
			7833
		],
		"valid"
	],
	[
		[
			7834,
			7834
		],
		"mapped",
		[
			97,
			702
		]
	],
	[
		[
			7835,
			7835
		],
		"mapped",
		[
			7777
		]
	],
	[
		[
			7836,
			7837
		],
		"valid"
	],
	[
		[
			7838,
			7838
		],
		"mapped",
		[
			115,
			115
		]
	],
	[
		[
			7839,
			7839
		],
		"valid"
	],
	[
		[
			7840,
			7840
		],
		"mapped",
		[
			7841
		]
	],
	[
		[
			7841,
			7841
		],
		"valid"
	],
	[
		[
			7842,
			7842
		],
		"mapped",
		[
			7843
		]
	],
	[
		[
			7843,
			7843
		],
		"valid"
	],
	[
		[
			7844,
			7844
		],
		"mapped",
		[
			7845
		]
	],
	[
		[
			7845,
			7845
		],
		"valid"
	],
	[
		[
			7846,
			7846
		],
		"mapped",
		[
			7847
		]
	],
	[
		[
			7847,
			7847
		],
		"valid"
	],
	[
		[
			7848,
			7848
		],
		"mapped",
		[
			7849
		]
	],
	[
		[
			7849,
			7849
		],
		"valid"
	],
	[
		[
			7850,
			7850
		],
		"mapped",
		[
			7851
		]
	],
	[
		[
			7851,
			7851
		],
		"valid"
	],
	[
		[
			7852,
			7852
		],
		"mapped",
		[
			7853
		]
	],
	[
		[
			7853,
			7853
		],
		"valid"
	],
	[
		[
			7854,
			7854
		],
		"mapped",
		[
			7855
		]
	],
	[
		[
			7855,
			7855
		],
		"valid"
	],
	[
		[
			7856,
			7856
		],
		"mapped",
		[
			7857
		]
	],
	[
		[
			7857,
			7857
		],
		"valid"
	],
	[
		[
			7858,
			7858
		],
		"mapped",
		[
			7859
		]
	],
	[
		[
			7859,
			7859
		],
		"valid"
	],
	[
		[
			7860,
			7860
		],
		"mapped",
		[
			7861
		]
	],
	[
		[
			7861,
			7861
		],
		"valid"
	],
	[
		[
			7862,
			7862
		],
		"mapped",
		[
			7863
		]
	],
	[
		[
			7863,
			7863
		],
		"valid"
	],
	[
		[
			7864,
			7864
		],
		"mapped",
		[
			7865
		]
	],
	[
		[
			7865,
			7865
		],
		"valid"
	],
	[
		[
			7866,
			7866
		],
		"mapped",
		[
			7867
		]
	],
	[
		[
			7867,
			7867
		],
		"valid"
	],
	[
		[
			7868,
			7868
		],
		"mapped",
		[
			7869
		]
	],
	[
		[
			7869,
			7869
		],
		"valid"
	],
	[
		[
			7870,
			7870
		],
		"mapped",
		[
			7871
		]
	],
	[
		[
			7871,
			7871
		],
		"valid"
	],
	[
		[
			7872,
			7872
		],
		"mapped",
		[
			7873
		]
	],
	[
		[
			7873,
			7873
		],
		"valid"
	],
	[
		[
			7874,
			7874
		],
		"mapped",
		[
			7875
		]
	],
	[
		[
			7875,
			7875
		],
		"valid"
	],
	[
		[
			7876,
			7876
		],
		"mapped",
		[
			7877
		]
	],
	[
		[
			7877,
			7877
		],
		"valid"
	],
	[
		[
			7878,
			7878
		],
		"mapped",
		[
			7879
		]
	],
	[
		[
			7879,
			7879
		],
		"valid"
	],
	[
		[
			7880,
			7880
		],
		"mapped",
		[
			7881
		]
	],
	[
		[
			7881,
			7881
		],
		"valid"
	],
	[
		[
			7882,
			7882
		],
		"mapped",
		[
			7883
		]
	],
	[
		[
			7883,
			7883
		],
		"valid"
	],
	[
		[
			7884,
			7884
		],
		"mapped",
		[
			7885
		]
	],
	[
		[
			7885,
			7885
		],
		"valid"
	],
	[
		[
			7886,
			7886
		],
		"mapped",
		[
			7887
		]
	],
	[
		[
			7887,
			7887
		],
		"valid"
	],
	[
		[
			7888,
			7888
		],
		"mapped",
		[
			7889
		]
	],
	[
		[
			7889,
			7889
		],
		"valid"
	],
	[
		[
			7890,
			7890
		],
		"mapped",
		[
			7891
		]
	],
	[
		[
			7891,
			7891
		],
		"valid"
	],
	[
		[
			7892,
			7892
		],
		"mapped",
		[
			7893
		]
	],
	[
		[
			7893,
			7893
		],
		"valid"
	],
	[
		[
			7894,
			7894
		],
		"mapped",
		[
			7895
		]
	],
	[
		[
			7895,
			7895
		],
		"valid"
	],
	[
		[
			7896,
			7896
		],
		"mapped",
		[
			7897
		]
	],
	[
		[
			7897,
			7897
		],
		"valid"
	],
	[
		[
			7898,
			7898
		],
		"mapped",
		[
			7899
		]
	],
	[
		[
			7899,
			7899
		],
		"valid"
	],
	[
		[
			7900,
			7900
		],
		"mapped",
		[
			7901
		]
	],
	[
		[
			7901,
			7901
		],
		"valid"
	],
	[
		[
			7902,
			7902
		],
		"mapped",
		[
			7903
		]
	],
	[
		[
			7903,
			7903
		],
		"valid"
	],
	[
		[
			7904,
			7904
		],
		"mapped",
		[
			7905
		]
	],
	[
		[
			7905,
			7905
		],
		"valid"
	],
	[
		[
			7906,
			7906
		],
		"mapped",
		[
			7907
		]
	],
	[
		[
			7907,
			7907
		],
		"valid"
	],
	[
		[
			7908,
			7908
		],
		"mapped",
		[
			7909
		]
	],
	[
		[
			7909,
			7909
		],
		"valid"
	],
	[
		[
			7910,
			7910
		],
		"mapped",
		[
			7911
		]
	],
	[
		[
			7911,
			7911
		],
		"valid"
	],
	[
		[
			7912,
			7912
		],
		"mapped",
		[
			7913
		]
	],
	[
		[
			7913,
			7913
		],
		"valid"
	],
	[
		[
			7914,
			7914
		],
		"mapped",
		[
			7915
		]
	],
	[
		[
			7915,
			7915
		],
		"valid"
	],
	[
		[
			7916,
			7916
		],
		"mapped",
		[
			7917
		]
	],
	[
		[
			7917,
			7917
		],
		"valid"
	],
	[
		[
			7918,
			7918
		],
		"mapped",
		[
			7919
		]
	],
	[
		[
			7919,
			7919
		],
		"valid"
	],
	[
		[
			7920,
			7920
		],
		"mapped",
		[
			7921
		]
	],
	[
		[
			7921,
			7921
		],
		"valid"
	],
	[
		[
			7922,
			7922
		],
		"mapped",
		[
			7923
		]
	],
	[
		[
			7923,
			7923
		],
		"valid"
	],
	[
		[
			7924,
			7924
		],
		"mapped",
		[
			7925
		]
	],
	[
		[
			7925,
			7925
		],
		"valid"
	],
	[
		[
			7926,
			7926
		],
		"mapped",
		[
			7927
		]
	],
	[
		[
			7927,
			7927
		],
		"valid"
	],
	[
		[
			7928,
			7928
		],
		"mapped",
		[
			7929
		]
	],
	[
		[
			7929,
			7929
		],
		"valid"
	],
	[
		[
			7930,
			7930
		],
		"mapped",
		[
			7931
		]
	],
	[
		[
			7931,
			7931
		],
		"valid"
	],
	[
		[
			7932,
			7932
		],
		"mapped",
		[
			7933
		]
	],
	[
		[
			7933,
			7933
		],
		"valid"
	],
	[
		[
			7934,
			7934
		],
		"mapped",
		[
			7935
		]
	],
	[
		[
			7935,
			7935
		],
		"valid"
	],
	[
		[
			7936,
			7943
		],
		"valid"
	],
	[
		[
			7944,
			7944
		],
		"mapped",
		[
			7936
		]
	],
	[
		[
			7945,
			7945
		],
		"mapped",
		[
			7937
		]
	],
	[
		[
			7946,
			7946
		],
		"mapped",
		[
			7938
		]
	],
	[
		[
			7947,
			7947
		],
		"mapped",
		[
			7939
		]
	],
	[
		[
			7948,
			7948
		],
		"mapped",
		[
			7940
		]
	],
	[
		[
			7949,
			7949
		],
		"mapped",
		[
			7941
		]
	],
	[
		[
			7950,
			7950
		],
		"mapped",
		[
			7942
		]
	],
	[
		[
			7951,
			7951
		],
		"mapped",
		[
			7943
		]
	],
	[
		[
			7952,
			7957
		],
		"valid"
	],
	[
		[
			7958,
			7959
		],
		"disallowed"
	],
	[
		[
			7960,
			7960
		],
		"mapped",
		[
			7952
		]
	],
	[
		[
			7961,
			7961
		],
		"mapped",
		[
			7953
		]
	],
	[
		[
			7962,
			7962
		],
		"mapped",
		[
			7954
		]
	],
	[
		[
			7963,
			7963
		],
		"mapped",
		[
			7955
		]
	],
	[
		[
			7964,
			7964
		],
		"mapped",
		[
			7956
		]
	],
	[
		[
			7965,
			7965
		],
		"mapped",
		[
			7957
		]
	],
	[
		[
			7966,
			7967
		],
		"disallowed"
	],
	[
		[
			7968,
			7975
		],
		"valid"
	],
	[
		[
			7976,
			7976
		],
		"mapped",
		[
			7968
		]
	],
	[
		[
			7977,
			7977
		],
		"mapped",
		[
			7969
		]
	],
	[
		[
			7978,
			7978
		],
		"mapped",
		[
			7970
		]
	],
	[
		[
			7979,
			7979
		],
		"mapped",
		[
			7971
		]
	],
	[
		[
			7980,
			7980
		],
		"mapped",
		[
			7972
		]
	],
	[
		[
			7981,
			7981
		],
		"mapped",
		[
			7973
		]
	],
	[
		[
			7982,
			7982
		],
		"mapped",
		[
			7974
		]
	],
	[
		[
			7983,
			7983
		],
		"mapped",
		[
			7975
		]
	],
	[
		[
			7984,
			7991
		],
		"valid"
	],
	[
		[
			7992,
			7992
		],
		"mapped",
		[
			7984
		]
	],
	[
		[
			7993,
			7993
		],
		"mapped",
		[
			7985
		]
	],
	[
		[
			7994,
			7994
		],
		"mapped",
		[
			7986
		]
	],
	[
		[
			7995,
			7995
		],
		"mapped",
		[
			7987
		]
	],
	[
		[
			7996,
			7996
		],
		"mapped",
		[
			7988
		]
	],
	[
		[
			7997,
			7997
		],
		"mapped",
		[
			7989
		]
	],
	[
		[
			7998,
			7998
		],
		"mapped",
		[
			7990
		]
	],
	[
		[
			7999,
			7999
		],
		"mapped",
		[
			7991
		]
	],
	[
		[
			8000,
			8005
		],
		"valid"
	],
	[
		[
			8006,
			8007
		],
		"disallowed"
	],
	[
		[
			8008,
			8008
		],
		"mapped",
		[
			8000
		]
	],
	[
		[
			8009,
			8009
		],
		"mapped",
		[
			8001
		]
	],
	[
		[
			8010,
			8010
		],
		"mapped",
		[
			8002
		]
	],
	[
		[
			8011,
			8011
		],
		"mapped",
		[
			8003
		]
	],
	[
		[
			8012,
			8012
		],
		"mapped",
		[
			8004
		]
	],
	[
		[
			8013,
			8013
		],
		"mapped",
		[
			8005
		]
	],
	[
		[
			8014,
			8015
		],
		"disallowed"
	],
	[
		[
			8016,
			8023
		],
		"valid"
	],
	[
		[
			8024,
			8024
		],
		"disallowed"
	],
	[
		[
			8025,
			8025
		],
		"mapped",
		[
			8017
		]
	],
	[
		[
			8026,
			8026
		],
		"disallowed"
	],
	[
		[
			8027,
			8027
		],
		"mapped",
		[
			8019
		]
	],
	[
		[
			8028,
			8028
		],
		"disallowed"
	],
	[
		[
			8029,
			8029
		],
		"mapped",
		[
			8021
		]
	],
	[
		[
			8030,
			8030
		],
		"disallowed"
	],
	[
		[
			8031,
			8031
		],
		"mapped",
		[
			8023
		]
	],
	[
		[
			8032,
			8039
		],
		"valid"
	],
	[
		[
			8040,
			8040
		],
		"mapped",
		[
			8032
		]
	],
	[
		[
			8041,
			8041
		],
		"mapped",
		[
			8033
		]
	],
	[
		[
			8042,
			8042
		],
		"mapped",
		[
			8034
		]
	],
	[
		[
			8043,
			8043
		],
		"mapped",
		[
			8035
		]
	],
	[
		[
			8044,
			8044
		],
		"mapped",
		[
			8036
		]
	],
	[
		[
			8045,
			8045
		],
		"mapped",
		[
			8037
		]
	],
	[
		[
			8046,
			8046
		],
		"mapped",
		[
			8038
		]
	],
	[
		[
			8047,
			8047
		],
		"mapped",
		[
			8039
		]
	],
	[
		[
			8048,
			8048
		],
		"valid"
	],
	[
		[
			8049,
			8049
		],
		"mapped",
		[
			940
		]
	],
	[
		[
			8050,
			8050
		],
		"valid"
	],
	[
		[
			8051,
			8051
		],
		"mapped",
		[
			941
		]
	],
	[
		[
			8052,
			8052
		],
		"valid"
	],
	[
		[
			8053,
			8053
		],
		"mapped",
		[
			942
		]
	],
	[
		[
			8054,
			8054
		],
		"valid"
	],
	[
		[
			8055,
			8055
		],
		"mapped",
		[
			943
		]
	],
	[
		[
			8056,
			8056
		],
		"valid"
	],
	[
		[
			8057,
			8057
		],
		"mapped",
		[
			972
		]
	],
	[
		[
			8058,
			8058
		],
		"valid"
	],
	[
		[
			8059,
			8059
		],
		"mapped",
		[
			973
		]
	],
	[
		[
			8060,
			8060
		],
		"valid"
	],
	[
		[
			8061,
			8061
		],
		"mapped",
		[
			974
		]
	],
	[
		[
			8062,
			8063
		],
		"disallowed"
	],
	[
		[
			8064,
			8064
		],
		"mapped",
		[
			7936,
			953
		]
	],
	[
		[
			8065,
			8065
		],
		"mapped",
		[
			7937,
			953
		]
	],
	[
		[
			8066,
			8066
		],
		"mapped",
		[
			7938,
			953
		]
	],
	[
		[
			8067,
			8067
		],
		"mapped",
		[
			7939,
			953
		]
	],
	[
		[
			8068,
			8068
		],
		"mapped",
		[
			7940,
			953
		]
	],
	[
		[
			8069,
			8069
		],
		"mapped",
		[
			7941,
			953
		]
	],
	[
		[
			8070,
			8070
		],
		"mapped",
		[
			7942,
			953
		]
	],
	[
		[
			8071,
			8071
		],
		"mapped",
		[
			7943,
			953
		]
	],
	[
		[
			8072,
			8072
		],
		"mapped",
		[
			7936,
			953
		]
	],
	[
		[
			8073,
			8073
		],
		"mapped",
		[
			7937,
			953
		]
	],
	[
		[
			8074,
			8074
		],
		"mapped",
		[
			7938,
			953
		]
	],
	[
		[
			8075,
			8075
		],
		"mapped",
		[
			7939,
			953
		]
	],
	[
		[
			8076,
			8076
		],
		"mapped",
		[
			7940,
			953
		]
	],
	[
		[
			8077,
			8077
		],
		"mapped",
		[
			7941,
			953
		]
	],
	[
		[
			8078,
			8078
		],
		"mapped",
		[
			7942,
			953
		]
	],
	[
		[
			8079,
			8079
		],
		"mapped",
		[
			7943,
			953
		]
	],
	[
		[
			8080,
			8080
		],
		"mapped",
		[
			7968,
			953
		]
	],
	[
		[
			8081,
			8081
		],
		"mapped",
		[
			7969,
			953
		]
	],
	[
		[
			8082,
			8082
		],
		"mapped",
		[
			7970,
			953
		]
	],
	[
		[
			8083,
			8083
		],
		"mapped",
		[
			7971,
			953
		]
	],
	[
		[
			8084,
			8084
		],
		"mapped",
		[
			7972,
			953
		]
	],
	[
		[
			8085,
			8085
		],
		"mapped",
		[
			7973,
			953
		]
	],
	[
		[
			8086,
			8086
		],
		"mapped",
		[
			7974,
			953
		]
	],
	[
		[
			8087,
			8087
		],
		"mapped",
		[
			7975,
			953
		]
	],
	[
		[
			8088,
			8088
		],
		"mapped",
		[
			7968,
			953
		]
	],
	[
		[
			8089,
			8089
		],
		"mapped",
		[
			7969,
			953
		]
	],
	[
		[
			8090,
			8090
		],
		"mapped",
		[
			7970,
			953
		]
	],
	[
		[
			8091,
			8091
		],
		"mapped",
		[
			7971,
			953
		]
	],
	[
		[
			8092,
			8092
		],
		"mapped",
		[
			7972,
			953
		]
	],
	[
		[
			8093,
			8093
		],
		"mapped",
		[
			7973,
			953
		]
	],
	[
		[
			8094,
			8094
		],
		"mapped",
		[
			7974,
			953
		]
	],
	[
		[
			8095,
			8095
		],
		"mapped",
		[
			7975,
			953
		]
	],
	[
		[
			8096,
			8096
		],
		"mapped",
		[
			8032,
			953
		]
	],
	[
		[
			8097,
			8097
		],
		"mapped",
		[
			8033,
			953
		]
	],
	[
		[
			8098,
			8098
		],
		"mapped",
		[
			8034,
			953
		]
	],
	[
		[
			8099,
			8099
		],
		"mapped",
		[
			8035,
			953
		]
	],
	[
		[
			8100,
			8100
		],
		"mapped",
		[
			8036,
			953
		]
	],
	[
		[
			8101,
			8101
		],
		"mapped",
		[
			8037,
			953
		]
	],
	[
		[
			8102,
			8102
		],
		"mapped",
		[
			8038,
			953
		]
	],
	[
		[
			8103,
			8103
		],
		"mapped",
		[
			8039,
			953
		]
	],
	[
		[
			8104,
			8104
		],
		"mapped",
		[
			8032,
			953
		]
	],
	[
		[
			8105,
			8105
		],
		"mapped",
		[
			8033,
			953
		]
	],
	[
		[
			8106,
			8106
		],
		"mapped",
		[
			8034,
			953
		]
	],
	[
		[
			8107,
			8107
		],
		"mapped",
		[
			8035,
			953
		]
	],
	[
		[
			8108,
			8108
		],
		"mapped",
		[
			8036,
			953
		]
	],
	[
		[
			8109,
			8109
		],
		"mapped",
		[
			8037,
			953
		]
	],
	[
		[
			8110,
			8110
		],
		"mapped",
		[
			8038,
			953
		]
	],
	[
		[
			8111,
			8111
		],
		"mapped",
		[
			8039,
			953
		]
	],
	[
		[
			8112,
			8113
		],
		"valid"
	],
	[
		[
			8114,
			8114
		],
		"mapped",
		[
			8048,
			953
		]
	],
	[
		[
			8115,
			8115
		],
		"mapped",
		[
			945,
			953
		]
	],
	[
		[
			8116,
			8116
		],
		"mapped",
		[
			940,
			953
		]
	],
	[
		[
			8117,
			8117
		],
		"disallowed"
	],
	[
		[
			8118,
			8118
		],
		"valid"
	],
	[
		[
			8119,
			8119
		],
		"mapped",
		[
			8118,
			953
		]
	],
	[
		[
			8120,
			8120
		],
		"mapped",
		[
			8112
		]
	],
	[
		[
			8121,
			8121
		],
		"mapped",
		[
			8113
		]
	],
	[
		[
			8122,
			8122
		],
		"mapped",
		[
			8048
		]
	],
	[
		[
			8123,
			8123
		],
		"mapped",
		[
			940
		]
	],
	[
		[
			8124,
			8124
		],
		"mapped",
		[
			945,
			953
		]
	],
	[
		[
			8125,
			8125
		],
		"disallowed_STD3_mapped",
		[
			32,
			787
		]
	],
	[
		[
			8126,
			8126
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			8127,
			8127
		],
		"disallowed_STD3_mapped",
		[
			32,
			787
		]
	],
	[
		[
			8128,
			8128
		],
		"disallowed_STD3_mapped",
		[
			32,
			834
		]
	],
	[
		[
			8129,
			8129
		],
		"disallowed_STD3_mapped",
		[
			32,
			776,
			834
		]
	],
	[
		[
			8130,
			8130
		],
		"mapped",
		[
			8052,
			953
		]
	],
	[
		[
			8131,
			8131
		],
		"mapped",
		[
			951,
			953
		]
	],
	[
		[
			8132,
			8132
		],
		"mapped",
		[
			942,
			953
		]
	],
	[
		[
			8133,
			8133
		],
		"disallowed"
	],
	[
		[
			8134,
			8134
		],
		"valid"
	],
	[
		[
			8135,
			8135
		],
		"mapped",
		[
			8134,
			953
		]
	],
	[
		[
			8136,
			8136
		],
		"mapped",
		[
			8050
		]
	],
	[
		[
			8137,
			8137
		],
		"mapped",
		[
			941
		]
	],
	[
		[
			8138,
			8138
		],
		"mapped",
		[
			8052
		]
	],
	[
		[
			8139,
			8139
		],
		"mapped",
		[
			942
		]
	],
	[
		[
			8140,
			8140
		],
		"mapped",
		[
			951,
			953
		]
	],
	[
		[
			8141,
			8141
		],
		"disallowed_STD3_mapped",
		[
			32,
			787,
			768
		]
	],
	[
		[
			8142,
			8142
		],
		"disallowed_STD3_mapped",
		[
			32,
			787,
			769
		]
	],
	[
		[
			8143,
			8143
		],
		"disallowed_STD3_mapped",
		[
			32,
			787,
			834
		]
	],
	[
		[
			8144,
			8146
		],
		"valid"
	],
	[
		[
			8147,
			8147
		],
		"mapped",
		[
			912
		]
	],
	[
		[
			8148,
			8149
		],
		"disallowed"
	],
	[
		[
			8150,
			8151
		],
		"valid"
	],
	[
		[
			8152,
			8152
		],
		"mapped",
		[
			8144
		]
	],
	[
		[
			8153,
			8153
		],
		"mapped",
		[
			8145
		]
	],
	[
		[
			8154,
			8154
		],
		"mapped",
		[
			8054
		]
	],
	[
		[
			8155,
			8155
		],
		"mapped",
		[
			943
		]
	],
	[
		[
			8156,
			8156
		],
		"disallowed"
	],
	[
		[
			8157,
			8157
		],
		"disallowed_STD3_mapped",
		[
			32,
			788,
			768
		]
	],
	[
		[
			8158,
			8158
		],
		"disallowed_STD3_mapped",
		[
			32,
			788,
			769
		]
	],
	[
		[
			8159,
			8159
		],
		"disallowed_STD3_mapped",
		[
			32,
			788,
			834
		]
	],
	[
		[
			8160,
			8162
		],
		"valid"
	],
	[
		[
			8163,
			8163
		],
		"mapped",
		[
			944
		]
	],
	[
		[
			8164,
			8167
		],
		"valid"
	],
	[
		[
			8168,
			8168
		],
		"mapped",
		[
			8160
		]
	],
	[
		[
			8169,
			8169
		],
		"mapped",
		[
			8161
		]
	],
	[
		[
			8170,
			8170
		],
		"mapped",
		[
			8058
		]
	],
	[
		[
			8171,
			8171
		],
		"mapped",
		[
			973
		]
	],
	[
		[
			8172,
			8172
		],
		"mapped",
		[
			8165
		]
	],
	[
		[
			8173,
			8173
		],
		"disallowed_STD3_mapped",
		[
			32,
			776,
			768
		]
	],
	[
		[
			8174,
			8174
		],
		"disallowed_STD3_mapped",
		[
			32,
			776,
			769
		]
	],
	[
		[
			8175,
			8175
		],
		"disallowed_STD3_mapped",
		[
			96
		]
	],
	[
		[
			8176,
			8177
		],
		"disallowed"
	],
	[
		[
			8178,
			8178
		],
		"mapped",
		[
			8060,
			953
		]
	],
	[
		[
			8179,
			8179
		],
		"mapped",
		[
			969,
			953
		]
	],
	[
		[
			8180,
			8180
		],
		"mapped",
		[
			974,
			953
		]
	],
	[
		[
			8181,
			8181
		],
		"disallowed"
	],
	[
		[
			8182,
			8182
		],
		"valid"
	],
	[
		[
			8183,
			8183
		],
		"mapped",
		[
			8182,
			953
		]
	],
	[
		[
			8184,
			8184
		],
		"mapped",
		[
			8056
		]
	],
	[
		[
			8185,
			8185
		],
		"mapped",
		[
			972
		]
	],
	[
		[
			8186,
			8186
		],
		"mapped",
		[
			8060
		]
	],
	[
		[
			8187,
			8187
		],
		"mapped",
		[
			974
		]
	],
	[
		[
			8188,
			8188
		],
		"mapped",
		[
			969,
			953
		]
	],
	[
		[
			8189,
			8189
		],
		"disallowed_STD3_mapped",
		[
			32,
			769
		]
	],
	[
		[
			8190,
			8190
		],
		"disallowed_STD3_mapped",
		[
			32,
			788
		]
	],
	[
		[
			8191,
			8191
		],
		"disallowed"
	],
	[
		[
			8192,
			8202
		],
		"disallowed_STD3_mapped",
		[
			32
		]
	],
	[
		[
			8203,
			8203
		],
		"ignored"
	],
	[
		[
			8204,
			8205
		],
		"deviation",
		[
		]
	],
	[
		[
			8206,
			8207
		],
		"disallowed"
	],
	[
		[
			8208,
			8208
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8209,
			8209
		],
		"mapped",
		[
			8208
		]
	],
	[
		[
			8210,
			8214
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8215,
			8215
		],
		"disallowed_STD3_mapped",
		[
			32,
			819
		]
	],
	[
		[
			8216,
			8227
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8228,
			8230
		],
		"disallowed"
	],
	[
		[
			8231,
			8231
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8232,
			8238
		],
		"disallowed"
	],
	[
		[
			8239,
			8239
		],
		"disallowed_STD3_mapped",
		[
			32
		]
	],
	[
		[
			8240,
			8242
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8243,
			8243
		],
		"mapped",
		[
			8242,
			8242
		]
	],
	[
		[
			8244,
			8244
		],
		"mapped",
		[
			8242,
			8242,
			8242
		]
	],
	[
		[
			8245,
			8245
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8246,
			8246
		],
		"mapped",
		[
			8245,
			8245
		]
	],
	[
		[
			8247,
			8247
		],
		"mapped",
		[
			8245,
			8245,
			8245
		]
	],
	[
		[
			8248,
			8251
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8252,
			8252
		],
		"disallowed_STD3_mapped",
		[
			33,
			33
		]
	],
	[
		[
			8253,
			8253
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8254,
			8254
		],
		"disallowed_STD3_mapped",
		[
			32,
			773
		]
	],
	[
		[
			8255,
			8262
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8263,
			8263
		],
		"disallowed_STD3_mapped",
		[
			63,
			63
		]
	],
	[
		[
			8264,
			8264
		],
		"disallowed_STD3_mapped",
		[
			63,
			33
		]
	],
	[
		[
			8265,
			8265
		],
		"disallowed_STD3_mapped",
		[
			33,
			63
		]
	],
	[
		[
			8266,
			8269
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8270,
			8274
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8275,
			8276
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8277,
			8278
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8279,
			8279
		],
		"mapped",
		[
			8242,
			8242,
			8242,
			8242
		]
	],
	[
		[
			8280,
			8286
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8287,
			8287
		],
		"disallowed_STD3_mapped",
		[
			32
		]
	],
	[
		[
			8288,
			8288
		],
		"ignored"
	],
	[
		[
			8289,
			8291
		],
		"disallowed"
	],
	[
		[
			8292,
			8292
		],
		"ignored"
	],
	[
		[
			8293,
			8293
		],
		"disallowed"
	],
	[
		[
			8294,
			8297
		],
		"disallowed"
	],
	[
		[
			8298,
			8303
		],
		"disallowed"
	],
	[
		[
			8304,
			8304
		],
		"mapped",
		[
			48
		]
	],
	[
		[
			8305,
			8305
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			8306,
			8307
		],
		"disallowed"
	],
	[
		[
			8308,
			8308
		],
		"mapped",
		[
			52
		]
	],
	[
		[
			8309,
			8309
		],
		"mapped",
		[
			53
		]
	],
	[
		[
			8310,
			8310
		],
		"mapped",
		[
			54
		]
	],
	[
		[
			8311,
			8311
		],
		"mapped",
		[
			55
		]
	],
	[
		[
			8312,
			8312
		],
		"mapped",
		[
			56
		]
	],
	[
		[
			8313,
			8313
		],
		"mapped",
		[
			57
		]
	],
	[
		[
			8314,
			8314
		],
		"disallowed_STD3_mapped",
		[
			43
		]
	],
	[
		[
			8315,
			8315
		],
		"mapped",
		[
			8722
		]
	],
	[
		[
			8316,
			8316
		],
		"disallowed_STD3_mapped",
		[
			61
		]
	],
	[
		[
			8317,
			8317
		],
		"disallowed_STD3_mapped",
		[
			40
		]
	],
	[
		[
			8318,
			8318
		],
		"disallowed_STD3_mapped",
		[
			41
		]
	],
	[
		[
			8319,
			8319
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			8320,
			8320
		],
		"mapped",
		[
			48
		]
	],
	[
		[
			8321,
			8321
		],
		"mapped",
		[
			49
		]
	],
	[
		[
			8322,
			8322
		],
		"mapped",
		[
			50
		]
	],
	[
		[
			8323,
			8323
		],
		"mapped",
		[
			51
		]
	],
	[
		[
			8324,
			8324
		],
		"mapped",
		[
			52
		]
	],
	[
		[
			8325,
			8325
		],
		"mapped",
		[
			53
		]
	],
	[
		[
			8326,
			8326
		],
		"mapped",
		[
			54
		]
	],
	[
		[
			8327,
			8327
		],
		"mapped",
		[
			55
		]
	],
	[
		[
			8328,
			8328
		],
		"mapped",
		[
			56
		]
	],
	[
		[
			8329,
			8329
		],
		"mapped",
		[
			57
		]
	],
	[
		[
			8330,
			8330
		],
		"disallowed_STD3_mapped",
		[
			43
		]
	],
	[
		[
			8331,
			8331
		],
		"mapped",
		[
			8722
		]
	],
	[
		[
			8332,
			8332
		],
		"disallowed_STD3_mapped",
		[
			61
		]
	],
	[
		[
			8333,
			8333
		],
		"disallowed_STD3_mapped",
		[
			40
		]
	],
	[
		[
			8334,
			8334
		],
		"disallowed_STD3_mapped",
		[
			41
		]
	],
	[
		[
			8335,
			8335
		],
		"disallowed"
	],
	[
		[
			8336,
			8336
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			8337,
			8337
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			8338,
			8338
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			8339,
			8339
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			8340,
			8340
		],
		"mapped",
		[
			601
		]
	],
	[
		[
			8341,
			8341
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			8342,
			8342
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			8343,
			8343
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			8344,
			8344
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			8345,
			8345
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			8346,
			8346
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			8347,
			8347
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			8348,
			8348
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			8349,
			8351
		],
		"disallowed"
	],
	[
		[
			8352,
			8359
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8360,
			8360
		],
		"mapped",
		[
			114,
			115
		]
	],
	[
		[
			8361,
			8362
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8363,
			8363
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8364,
			8364
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8365,
			8367
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8368,
			8369
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8370,
			8373
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8374,
			8376
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8377,
			8377
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8378,
			8378
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8379,
			8381
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8382,
			8382
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8383,
			8399
		],
		"disallowed"
	],
	[
		[
			8400,
			8417
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8418,
			8419
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8420,
			8426
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8427,
			8427
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8428,
			8431
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8432,
			8432
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8433,
			8447
		],
		"disallowed"
	],
	[
		[
			8448,
			8448
		],
		"disallowed_STD3_mapped",
		[
			97,
			47,
			99
		]
	],
	[
		[
			8449,
			8449
		],
		"disallowed_STD3_mapped",
		[
			97,
			47,
			115
		]
	],
	[
		[
			8450,
			8450
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			8451,
			8451
		],
		"mapped",
		[
			176,
			99
		]
	],
	[
		[
			8452,
			8452
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8453,
			8453
		],
		"disallowed_STD3_mapped",
		[
			99,
			47,
			111
		]
	],
	[
		[
			8454,
			8454
		],
		"disallowed_STD3_mapped",
		[
			99,
			47,
			117
		]
	],
	[
		[
			8455,
			8455
		],
		"mapped",
		[
			603
		]
	],
	[
		[
			8456,
			8456
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8457,
			8457
		],
		"mapped",
		[
			176,
			102
		]
	],
	[
		[
			8458,
			8458
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			8459,
			8462
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			8463,
			8463
		],
		"mapped",
		[
			295
		]
	],
	[
		[
			8464,
			8465
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			8466,
			8467
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			8468,
			8468
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8469,
			8469
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			8470,
			8470
		],
		"mapped",
		[
			110,
			111
		]
	],
	[
		[
			8471,
			8472
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8473,
			8473
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			8474,
			8474
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			8475,
			8477
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			8478,
			8479
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8480,
			8480
		],
		"mapped",
		[
			115,
			109
		]
	],
	[
		[
			8481,
			8481
		],
		"mapped",
		[
			116,
			101,
			108
		]
	],
	[
		[
			8482,
			8482
		],
		"mapped",
		[
			116,
			109
		]
	],
	[
		[
			8483,
			8483
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8484,
			8484
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			8485,
			8485
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8486,
			8486
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			8487,
			8487
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8488,
			8488
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			8489,
			8489
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8490,
			8490
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			8491,
			8491
		],
		"mapped",
		[
			229
		]
	],
	[
		[
			8492,
			8492
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			8493,
			8493
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			8494,
			8494
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8495,
			8496
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			8497,
			8497
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			8498,
			8498
		],
		"disallowed"
	],
	[
		[
			8499,
			8499
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			8500,
			8500
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			8501,
			8501
		],
		"mapped",
		[
			1488
		]
	],
	[
		[
			8502,
			8502
		],
		"mapped",
		[
			1489
		]
	],
	[
		[
			8503,
			8503
		],
		"mapped",
		[
			1490
		]
	],
	[
		[
			8504,
			8504
		],
		"mapped",
		[
			1491
		]
	],
	[
		[
			8505,
			8505
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			8506,
			8506
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8507,
			8507
		],
		"mapped",
		[
			102,
			97,
			120
		]
	],
	[
		[
			8508,
			8508
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			8509,
			8510
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			8511,
			8511
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			8512,
			8512
		],
		"mapped",
		[
			8721
		]
	],
	[
		[
			8513,
			8516
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8517,
			8518
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			8519,
			8519
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			8520,
			8520
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			8521,
			8521
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			8522,
			8523
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8524,
			8524
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8525,
			8525
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8526,
			8526
		],
		"valid"
	],
	[
		[
			8527,
			8527
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8528,
			8528
		],
		"mapped",
		[
			49,
			8260,
			55
		]
	],
	[
		[
			8529,
			8529
		],
		"mapped",
		[
			49,
			8260,
			57
		]
	],
	[
		[
			8530,
			8530
		],
		"mapped",
		[
			49,
			8260,
			49,
			48
		]
	],
	[
		[
			8531,
			8531
		],
		"mapped",
		[
			49,
			8260,
			51
		]
	],
	[
		[
			8532,
			8532
		],
		"mapped",
		[
			50,
			8260,
			51
		]
	],
	[
		[
			8533,
			8533
		],
		"mapped",
		[
			49,
			8260,
			53
		]
	],
	[
		[
			8534,
			8534
		],
		"mapped",
		[
			50,
			8260,
			53
		]
	],
	[
		[
			8535,
			8535
		],
		"mapped",
		[
			51,
			8260,
			53
		]
	],
	[
		[
			8536,
			8536
		],
		"mapped",
		[
			52,
			8260,
			53
		]
	],
	[
		[
			8537,
			8537
		],
		"mapped",
		[
			49,
			8260,
			54
		]
	],
	[
		[
			8538,
			8538
		],
		"mapped",
		[
			53,
			8260,
			54
		]
	],
	[
		[
			8539,
			8539
		],
		"mapped",
		[
			49,
			8260,
			56
		]
	],
	[
		[
			8540,
			8540
		],
		"mapped",
		[
			51,
			8260,
			56
		]
	],
	[
		[
			8541,
			8541
		],
		"mapped",
		[
			53,
			8260,
			56
		]
	],
	[
		[
			8542,
			8542
		],
		"mapped",
		[
			55,
			8260,
			56
		]
	],
	[
		[
			8543,
			8543
		],
		"mapped",
		[
			49,
			8260
		]
	],
	[
		[
			8544,
			8544
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			8545,
			8545
		],
		"mapped",
		[
			105,
			105
		]
	],
	[
		[
			8546,
			8546
		],
		"mapped",
		[
			105,
			105,
			105
		]
	],
	[
		[
			8547,
			8547
		],
		"mapped",
		[
			105,
			118
		]
	],
	[
		[
			8548,
			8548
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			8549,
			8549
		],
		"mapped",
		[
			118,
			105
		]
	],
	[
		[
			8550,
			8550
		],
		"mapped",
		[
			118,
			105,
			105
		]
	],
	[
		[
			8551,
			8551
		],
		"mapped",
		[
			118,
			105,
			105,
			105
		]
	],
	[
		[
			8552,
			8552
		],
		"mapped",
		[
			105,
			120
		]
	],
	[
		[
			8553,
			8553
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			8554,
			8554
		],
		"mapped",
		[
			120,
			105
		]
	],
	[
		[
			8555,
			8555
		],
		"mapped",
		[
			120,
			105,
			105
		]
	],
	[
		[
			8556,
			8556
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			8557,
			8557
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			8558,
			8558
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			8559,
			8559
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			8560,
			8560
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			8561,
			8561
		],
		"mapped",
		[
			105,
			105
		]
	],
	[
		[
			8562,
			8562
		],
		"mapped",
		[
			105,
			105,
			105
		]
	],
	[
		[
			8563,
			8563
		],
		"mapped",
		[
			105,
			118
		]
	],
	[
		[
			8564,
			8564
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			8565,
			8565
		],
		"mapped",
		[
			118,
			105
		]
	],
	[
		[
			8566,
			8566
		],
		"mapped",
		[
			118,
			105,
			105
		]
	],
	[
		[
			8567,
			8567
		],
		"mapped",
		[
			118,
			105,
			105,
			105
		]
	],
	[
		[
			8568,
			8568
		],
		"mapped",
		[
			105,
			120
		]
	],
	[
		[
			8569,
			8569
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			8570,
			8570
		],
		"mapped",
		[
			120,
			105
		]
	],
	[
		[
			8571,
			8571
		],
		"mapped",
		[
			120,
			105,
			105
		]
	],
	[
		[
			8572,
			8572
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			8573,
			8573
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			8574,
			8574
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			8575,
			8575
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			8576,
			8578
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8579,
			8579
		],
		"disallowed"
	],
	[
		[
			8580,
			8580
		],
		"valid"
	],
	[
		[
			8581,
			8584
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8585,
			8585
		],
		"mapped",
		[
			48,
			8260,
			51
		]
	],
	[
		[
			8586,
			8587
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8588,
			8591
		],
		"disallowed"
	],
	[
		[
			8592,
			8682
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8683,
			8691
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8692,
			8703
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8704,
			8747
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8748,
			8748
		],
		"mapped",
		[
			8747,
			8747
		]
	],
	[
		[
			8749,
			8749
		],
		"mapped",
		[
			8747,
			8747,
			8747
		]
	],
	[
		[
			8750,
			8750
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8751,
			8751
		],
		"mapped",
		[
			8750,
			8750
		]
	],
	[
		[
			8752,
			8752
		],
		"mapped",
		[
			8750,
			8750,
			8750
		]
	],
	[
		[
			8753,
			8799
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8800,
			8800
		],
		"disallowed_STD3_valid"
	],
	[
		[
			8801,
			8813
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8814,
			8815
		],
		"disallowed_STD3_valid"
	],
	[
		[
			8816,
			8945
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8946,
			8959
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8960,
			8960
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8961,
			8961
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			8962,
			9000
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9001,
			9001
		],
		"mapped",
		[
			12296
		]
	],
	[
		[
			9002,
			9002
		],
		"mapped",
		[
			12297
		]
	],
	[
		[
			9003,
			9082
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9083,
			9083
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9084,
			9084
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9085,
			9114
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9115,
			9166
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9167,
			9168
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9169,
			9179
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9180,
			9191
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9192,
			9192
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9193,
			9203
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9204,
			9210
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9211,
			9215
		],
		"disallowed"
	],
	[
		[
			9216,
			9252
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9253,
			9254
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9255,
			9279
		],
		"disallowed"
	],
	[
		[
			9280,
			9290
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9291,
			9311
		],
		"disallowed"
	],
	[
		[
			9312,
			9312
		],
		"mapped",
		[
			49
		]
	],
	[
		[
			9313,
			9313
		],
		"mapped",
		[
			50
		]
	],
	[
		[
			9314,
			9314
		],
		"mapped",
		[
			51
		]
	],
	[
		[
			9315,
			9315
		],
		"mapped",
		[
			52
		]
	],
	[
		[
			9316,
			9316
		],
		"mapped",
		[
			53
		]
	],
	[
		[
			9317,
			9317
		],
		"mapped",
		[
			54
		]
	],
	[
		[
			9318,
			9318
		],
		"mapped",
		[
			55
		]
	],
	[
		[
			9319,
			9319
		],
		"mapped",
		[
			56
		]
	],
	[
		[
			9320,
			9320
		],
		"mapped",
		[
			57
		]
	],
	[
		[
			9321,
			9321
		],
		"mapped",
		[
			49,
			48
		]
	],
	[
		[
			9322,
			9322
		],
		"mapped",
		[
			49,
			49
		]
	],
	[
		[
			9323,
			9323
		],
		"mapped",
		[
			49,
			50
		]
	],
	[
		[
			9324,
			9324
		],
		"mapped",
		[
			49,
			51
		]
	],
	[
		[
			9325,
			9325
		],
		"mapped",
		[
			49,
			52
		]
	],
	[
		[
			9326,
			9326
		],
		"mapped",
		[
			49,
			53
		]
	],
	[
		[
			9327,
			9327
		],
		"mapped",
		[
			49,
			54
		]
	],
	[
		[
			9328,
			9328
		],
		"mapped",
		[
			49,
			55
		]
	],
	[
		[
			9329,
			9329
		],
		"mapped",
		[
			49,
			56
		]
	],
	[
		[
			9330,
			9330
		],
		"mapped",
		[
			49,
			57
		]
	],
	[
		[
			9331,
			9331
		],
		"mapped",
		[
			50,
			48
		]
	],
	[
		[
			9332,
			9332
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			41
		]
	],
	[
		[
			9333,
			9333
		],
		"disallowed_STD3_mapped",
		[
			40,
			50,
			41
		]
	],
	[
		[
			9334,
			9334
		],
		"disallowed_STD3_mapped",
		[
			40,
			51,
			41
		]
	],
	[
		[
			9335,
			9335
		],
		"disallowed_STD3_mapped",
		[
			40,
			52,
			41
		]
	],
	[
		[
			9336,
			9336
		],
		"disallowed_STD3_mapped",
		[
			40,
			53,
			41
		]
	],
	[
		[
			9337,
			9337
		],
		"disallowed_STD3_mapped",
		[
			40,
			54,
			41
		]
	],
	[
		[
			9338,
			9338
		],
		"disallowed_STD3_mapped",
		[
			40,
			55,
			41
		]
	],
	[
		[
			9339,
			9339
		],
		"disallowed_STD3_mapped",
		[
			40,
			56,
			41
		]
	],
	[
		[
			9340,
			9340
		],
		"disallowed_STD3_mapped",
		[
			40,
			57,
			41
		]
	],
	[
		[
			9341,
			9341
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			48,
			41
		]
	],
	[
		[
			9342,
			9342
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			49,
			41
		]
	],
	[
		[
			9343,
			9343
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			50,
			41
		]
	],
	[
		[
			9344,
			9344
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			51,
			41
		]
	],
	[
		[
			9345,
			9345
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			52,
			41
		]
	],
	[
		[
			9346,
			9346
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			53,
			41
		]
	],
	[
		[
			9347,
			9347
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			54,
			41
		]
	],
	[
		[
			9348,
			9348
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			55,
			41
		]
	],
	[
		[
			9349,
			9349
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			56,
			41
		]
	],
	[
		[
			9350,
			9350
		],
		"disallowed_STD3_mapped",
		[
			40,
			49,
			57,
			41
		]
	],
	[
		[
			9351,
			9351
		],
		"disallowed_STD3_mapped",
		[
			40,
			50,
			48,
			41
		]
	],
	[
		[
			9352,
			9371
		],
		"disallowed"
	],
	[
		[
			9372,
			9372
		],
		"disallowed_STD3_mapped",
		[
			40,
			97,
			41
		]
	],
	[
		[
			9373,
			9373
		],
		"disallowed_STD3_mapped",
		[
			40,
			98,
			41
		]
	],
	[
		[
			9374,
			9374
		],
		"disallowed_STD3_mapped",
		[
			40,
			99,
			41
		]
	],
	[
		[
			9375,
			9375
		],
		"disallowed_STD3_mapped",
		[
			40,
			100,
			41
		]
	],
	[
		[
			9376,
			9376
		],
		"disallowed_STD3_mapped",
		[
			40,
			101,
			41
		]
	],
	[
		[
			9377,
			9377
		],
		"disallowed_STD3_mapped",
		[
			40,
			102,
			41
		]
	],
	[
		[
			9378,
			9378
		],
		"disallowed_STD3_mapped",
		[
			40,
			103,
			41
		]
	],
	[
		[
			9379,
			9379
		],
		"disallowed_STD3_mapped",
		[
			40,
			104,
			41
		]
	],
	[
		[
			9380,
			9380
		],
		"disallowed_STD3_mapped",
		[
			40,
			105,
			41
		]
	],
	[
		[
			9381,
			9381
		],
		"disallowed_STD3_mapped",
		[
			40,
			106,
			41
		]
	],
	[
		[
			9382,
			9382
		],
		"disallowed_STD3_mapped",
		[
			40,
			107,
			41
		]
	],
	[
		[
			9383,
			9383
		],
		"disallowed_STD3_mapped",
		[
			40,
			108,
			41
		]
	],
	[
		[
			9384,
			9384
		],
		"disallowed_STD3_mapped",
		[
			40,
			109,
			41
		]
	],
	[
		[
			9385,
			9385
		],
		"disallowed_STD3_mapped",
		[
			40,
			110,
			41
		]
	],
	[
		[
			9386,
			9386
		],
		"disallowed_STD3_mapped",
		[
			40,
			111,
			41
		]
	],
	[
		[
			9387,
			9387
		],
		"disallowed_STD3_mapped",
		[
			40,
			112,
			41
		]
	],
	[
		[
			9388,
			9388
		],
		"disallowed_STD3_mapped",
		[
			40,
			113,
			41
		]
	],
	[
		[
			9389,
			9389
		],
		"disallowed_STD3_mapped",
		[
			40,
			114,
			41
		]
	],
	[
		[
			9390,
			9390
		],
		"disallowed_STD3_mapped",
		[
			40,
			115,
			41
		]
	],
	[
		[
			9391,
			9391
		],
		"disallowed_STD3_mapped",
		[
			40,
			116,
			41
		]
	],
	[
		[
			9392,
			9392
		],
		"disallowed_STD3_mapped",
		[
			40,
			117,
			41
		]
	],
	[
		[
			9393,
			9393
		],
		"disallowed_STD3_mapped",
		[
			40,
			118,
			41
		]
	],
	[
		[
			9394,
			9394
		],
		"disallowed_STD3_mapped",
		[
			40,
			119,
			41
		]
	],
	[
		[
			9395,
			9395
		],
		"disallowed_STD3_mapped",
		[
			40,
			120,
			41
		]
	],
	[
		[
			9396,
			9396
		],
		"disallowed_STD3_mapped",
		[
			40,
			121,
			41
		]
	],
	[
		[
			9397,
			9397
		],
		"disallowed_STD3_mapped",
		[
			40,
			122,
			41
		]
	],
	[
		[
			9398,
			9398
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			9399,
			9399
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			9400,
			9400
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			9401,
			9401
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			9402,
			9402
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			9403,
			9403
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			9404,
			9404
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			9405,
			9405
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			9406,
			9406
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			9407,
			9407
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			9408,
			9408
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			9409,
			9409
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			9410,
			9410
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			9411,
			9411
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			9412,
			9412
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			9413,
			9413
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			9414,
			9414
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			9415,
			9415
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			9416,
			9416
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			9417,
			9417
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			9418,
			9418
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			9419,
			9419
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			9420,
			9420
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			9421,
			9421
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			9422,
			9422
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			9423,
			9423
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			9424,
			9424
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			9425,
			9425
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			9426,
			9426
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			9427,
			9427
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			9428,
			9428
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			9429,
			9429
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			9430,
			9430
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			9431,
			9431
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			9432,
			9432
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			9433,
			9433
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			9434,
			9434
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			9435,
			9435
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			9436,
			9436
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			9437,
			9437
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			9438,
			9438
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			9439,
			9439
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			9440,
			9440
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			9441,
			9441
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			9442,
			9442
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			9443,
			9443
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			9444,
			9444
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			9445,
			9445
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			9446,
			9446
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			9447,
			9447
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			9448,
			9448
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			9449,
			9449
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			9450,
			9450
		],
		"mapped",
		[
			48
		]
	],
	[
		[
			9451,
			9470
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9471,
			9471
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9472,
			9621
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9622,
			9631
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9632,
			9711
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9712,
			9719
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9720,
			9727
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9728,
			9747
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9748,
			9749
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9750,
			9751
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9752,
			9752
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9753,
			9753
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9754,
			9839
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9840,
			9841
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9842,
			9853
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9854,
			9855
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9856,
			9865
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9866,
			9873
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9874,
			9884
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9885,
			9885
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9886,
			9887
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9888,
			9889
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9890,
			9905
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9906,
			9906
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9907,
			9916
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9917,
			9919
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9920,
			9923
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9924,
			9933
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9934,
			9934
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9935,
			9953
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9954,
			9954
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9955,
			9955
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9956,
			9959
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9960,
			9983
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9984,
			9984
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9985,
			9988
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9989,
			9989
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9990,
			9993
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9994,
			9995
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			9996,
			10023
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10024,
			10024
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10025,
			10059
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10060,
			10060
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10061,
			10061
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10062,
			10062
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10063,
			10066
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10067,
			10069
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10070,
			10070
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10071,
			10071
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10072,
			10078
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10079,
			10080
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10081,
			10087
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10088,
			10101
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10102,
			10132
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10133,
			10135
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10136,
			10159
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10160,
			10160
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10161,
			10174
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10175,
			10175
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10176,
			10182
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10183,
			10186
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10187,
			10187
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10188,
			10188
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10189,
			10189
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10190,
			10191
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10192,
			10219
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10220,
			10223
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10224,
			10239
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10240,
			10495
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10496,
			10763
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10764,
			10764
		],
		"mapped",
		[
			8747,
			8747,
			8747,
			8747
		]
	],
	[
		[
			10765,
			10867
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10868,
			10868
		],
		"disallowed_STD3_mapped",
		[
			58,
			58,
			61
		]
	],
	[
		[
			10869,
			10869
		],
		"disallowed_STD3_mapped",
		[
			61,
			61
		]
	],
	[
		[
			10870,
			10870
		],
		"disallowed_STD3_mapped",
		[
			61,
			61,
			61
		]
	],
	[
		[
			10871,
			10971
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			10972,
			10972
		],
		"mapped",
		[
			10973,
			824
		]
	],
	[
		[
			10973,
			11007
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11008,
			11021
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11022,
			11027
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11028,
			11034
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11035,
			11039
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11040,
			11043
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11044,
			11084
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11085,
			11087
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11088,
			11092
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11093,
			11097
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11098,
			11123
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11124,
			11125
		],
		"disallowed"
	],
	[
		[
			11126,
			11157
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11158,
			11159
		],
		"disallowed"
	],
	[
		[
			11160,
			11193
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11194,
			11196
		],
		"disallowed"
	],
	[
		[
			11197,
			11208
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11209,
			11209
		],
		"disallowed"
	],
	[
		[
			11210,
			11217
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11218,
			11243
		],
		"disallowed"
	],
	[
		[
			11244,
			11247
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11248,
			11263
		],
		"disallowed"
	],
	[
		[
			11264,
			11264
		],
		"mapped",
		[
			11312
		]
	],
	[
		[
			11265,
			11265
		],
		"mapped",
		[
			11313
		]
	],
	[
		[
			11266,
			11266
		],
		"mapped",
		[
			11314
		]
	],
	[
		[
			11267,
			11267
		],
		"mapped",
		[
			11315
		]
	],
	[
		[
			11268,
			11268
		],
		"mapped",
		[
			11316
		]
	],
	[
		[
			11269,
			11269
		],
		"mapped",
		[
			11317
		]
	],
	[
		[
			11270,
			11270
		],
		"mapped",
		[
			11318
		]
	],
	[
		[
			11271,
			11271
		],
		"mapped",
		[
			11319
		]
	],
	[
		[
			11272,
			11272
		],
		"mapped",
		[
			11320
		]
	],
	[
		[
			11273,
			11273
		],
		"mapped",
		[
			11321
		]
	],
	[
		[
			11274,
			11274
		],
		"mapped",
		[
			11322
		]
	],
	[
		[
			11275,
			11275
		],
		"mapped",
		[
			11323
		]
	],
	[
		[
			11276,
			11276
		],
		"mapped",
		[
			11324
		]
	],
	[
		[
			11277,
			11277
		],
		"mapped",
		[
			11325
		]
	],
	[
		[
			11278,
			11278
		],
		"mapped",
		[
			11326
		]
	],
	[
		[
			11279,
			11279
		],
		"mapped",
		[
			11327
		]
	],
	[
		[
			11280,
			11280
		],
		"mapped",
		[
			11328
		]
	],
	[
		[
			11281,
			11281
		],
		"mapped",
		[
			11329
		]
	],
	[
		[
			11282,
			11282
		],
		"mapped",
		[
			11330
		]
	],
	[
		[
			11283,
			11283
		],
		"mapped",
		[
			11331
		]
	],
	[
		[
			11284,
			11284
		],
		"mapped",
		[
			11332
		]
	],
	[
		[
			11285,
			11285
		],
		"mapped",
		[
			11333
		]
	],
	[
		[
			11286,
			11286
		],
		"mapped",
		[
			11334
		]
	],
	[
		[
			11287,
			11287
		],
		"mapped",
		[
			11335
		]
	],
	[
		[
			11288,
			11288
		],
		"mapped",
		[
			11336
		]
	],
	[
		[
			11289,
			11289
		],
		"mapped",
		[
			11337
		]
	],
	[
		[
			11290,
			11290
		],
		"mapped",
		[
			11338
		]
	],
	[
		[
			11291,
			11291
		],
		"mapped",
		[
			11339
		]
	],
	[
		[
			11292,
			11292
		],
		"mapped",
		[
			11340
		]
	],
	[
		[
			11293,
			11293
		],
		"mapped",
		[
			11341
		]
	],
	[
		[
			11294,
			11294
		],
		"mapped",
		[
			11342
		]
	],
	[
		[
			11295,
			11295
		],
		"mapped",
		[
			11343
		]
	],
	[
		[
			11296,
			11296
		],
		"mapped",
		[
			11344
		]
	],
	[
		[
			11297,
			11297
		],
		"mapped",
		[
			11345
		]
	],
	[
		[
			11298,
			11298
		],
		"mapped",
		[
			11346
		]
	],
	[
		[
			11299,
			11299
		],
		"mapped",
		[
			11347
		]
	],
	[
		[
			11300,
			11300
		],
		"mapped",
		[
			11348
		]
	],
	[
		[
			11301,
			11301
		],
		"mapped",
		[
			11349
		]
	],
	[
		[
			11302,
			11302
		],
		"mapped",
		[
			11350
		]
	],
	[
		[
			11303,
			11303
		],
		"mapped",
		[
			11351
		]
	],
	[
		[
			11304,
			11304
		],
		"mapped",
		[
			11352
		]
	],
	[
		[
			11305,
			11305
		],
		"mapped",
		[
			11353
		]
	],
	[
		[
			11306,
			11306
		],
		"mapped",
		[
			11354
		]
	],
	[
		[
			11307,
			11307
		],
		"mapped",
		[
			11355
		]
	],
	[
		[
			11308,
			11308
		],
		"mapped",
		[
			11356
		]
	],
	[
		[
			11309,
			11309
		],
		"mapped",
		[
			11357
		]
	],
	[
		[
			11310,
			11310
		],
		"mapped",
		[
			11358
		]
	],
	[
		[
			11311,
			11311
		],
		"disallowed"
	],
	[
		[
			11312,
			11358
		],
		"valid"
	],
	[
		[
			11359,
			11359
		],
		"disallowed"
	],
	[
		[
			11360,
			11360
		],
		"mapped",
		[
			11361
		]
	],
	[
		[
			11361,
			11361
		],
		"valid"
	],
	[
		[
			11362,
			11362
		],
		"mapped",
		[
			619
		]
	],
	[
		[
			11363,
			11363
		],
		"mapped",
		[
			7549
		]
	],
	[
		[
			11364,
			11364
		],
		"mapped",
		[
			637
		]
	],
	[
		[
			11365,
			11366
		],
		"valid"
	],
	[
		[
			11367,
			11367
		],
		"mapped",
		[
			11368
		]
	],
	[
		[
			11368,
			11368
		],
		"valid"
	],
	[
		[
			11369,
			11369
		],
		"mapped",
		[
			11370
		]
	],
	[
		[
			11370,
			11370
		],
		"valid"
	],
	[
		[
			11371,
			11371
		],
		"mapped",
		[
			11372
		]
	],
	[
		[
			11372,
			11372
		],
		"valid"
	],
	[
		[
			11373,
			11373
		],
		"mapped",
		[
			593
		]
	],
	[
		[
			11374,
			11374
		],
		"mapped",
		[
			625
		]
	],
	[
		[
			11375,
			11375
		],
		"mapped",
		[
			592
		]
	],
	[
		[
			11376,
			11376
		],
		"mapped",
		[
			594
		]
	],
	[
		[
			11377,
			11377
		],
		"valid"
	],
	[
		[
			11378,
			11378
		],
		"mapped",
		[
			11379
		]
	],
	[
		[
			11379,
			11379
		],
		"valid"
	],
	[
		[
			11380,
			11380
		],
		"valid"
	],
	[
		[
			11381,
			11381
		],
		"mapped",
		[
			11382
		]
	],
	[
		[
			11382,
			11383
		],
		"valid"
	],
	[
		[
			11384,
			11387
		],
		"valid"
	],
	[
		[
			11388,
			11388
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			11389,
			11389
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			11390,
			11390
		],
		"mapped",
		[
			575
		]
	],
	[
		[
			11391,
			11391
		],
		"mapped",
		[
			576
		]
	],
	[
		[
			11392,
			11392
		],
		"mapped",
		[
			11393
		]
	],
	[
		[
			11393,
			11393
		],
		"valid"
	],
	[
		[
			11394,
			11394
		],
		"mapped",
		[
			11395
		]
	],
	[
		[
			11395,
			11395
		],
		"valid"
	],
	[
		[
			11396,
			11396
		],
		"mapped",
		[
			11397
		]
	],
	[
		[
			11397,
			11397
		],
		"valid"
	],
	[
		[
			11398,
			11398
		],
		"mapped",
		[
			11399
		]
	],
	[
		[
			11399,
			11399
		],
		"valid"
	],
	[
		[
			11400,
			11400
		],
		"mapped",
		[
			11401
		]
	],
	[
		[
			11401,
			11401
		],
		"valid"
	],
	[
		[
			11402,
			11402
		],
		"mapped",
		[
			11403
		]
	],
	[
		[
			11403,
			11403
		],
		"valid"
	],
	[
		[
			11404,
			11404
		],
		"mapped",
		[
			11405
		]
	],
	[
		[
			11405,
			11405
		],
		"valid"
	],
	[
		[
			11406,
			11406
		],
		"mapped",
		[
			11407
		]
	],
	[
		[
			11407,
			11407
		],
		"valid"
	],
	[
		[
			11408,
			11408
		],
		"mapped",
		[
			11409
		]
	],
	[
		[
			11409,
			11409
		],
		"valid"
	],
	[
		[
			11410,
			11410
		],
		"mapped",
		[
			11411
		]
	],
	[
		[
			11411,
			11411
		],
		"valid"
	],
	[
		[
			11412,
			11412
		],
		"mapped",
		[
			11413
		]
	],
	[
		[
			11413,
			11413
		],
		"valid"
	],
	[
		[
			11414,
			11414
		],
		"mapped",
		[
			11415
		]
	],
	[
		[
			11415,
			11415
		],
		"valid"
	],
	[
		[
			11416,
			11416
		],
		"mapped",
		[
			11417
		]
	],
	[
		[
			11417,
			11417
		],
		"valid"
	],
	[
		[
			11418,
			11418
		],
		"mapped",
		[
			11419
		]
	],
	[
		[
			11419,
			11419
		],
		"valid"
	],
	[
		[
			11420,
			11420
		],
		"mapped",
		[
			11421
		]
	],
	[
		[
			11421,
			11421
		],
		"valid"
	],
	[
		[
			11422,
			11422
		],
		"mapped",
		[
			11423
		]
	],
	[
		[
			11423,
			11423
		],
		"valid"
	],
	[
		[
			11424,
			11424
		],
		"mapped",
		[
			11425
		]
	],
	[
		[
			11425,
			11425
		],
		"valid"
	],
	[
		[
			11426,
			11426
		],
		"mapped",
		[
			11427
		]
	],
	[
		[
			11427,
			11427
		],
		"valid"
	],
	[
		[
			11428,
			11428
		],
		"mapped",
		[
			11429
		]
	],
	[
		[
			11429,
			11429
		],
		"valid"
	],
	[
		[
			11430,
			11430
		],
		"mapped",
		[
			11431
		]
	],
	[
		[
			11431,
			11431
		],
		"valid"
	],
	[
		[
			11432,
			11432
		],
		"mapped",
		[
			11433
		]
	],
	[
		[
			11433,
			11433
		],
		"valid"
	],
	[
		[
			11434,
			11434
		],
		"mapped",
		[
			11435
		]
	],
	[
		[
			11435,
			11435
		],
		"valid"
	],
	[
		[
			11436,
			11436
		],
		"mapped",
		[
			11437
		]
	],
	[
		[
			11437,
			11437
		],
		"valid"
	],
	[
		[
			11438,
			11438
		],
		"mapped",
		[
			11439
		]
	],
	[
		[
			11439,
			11439
		],
		"valid"
	],
	[
		[
			11440,
			11440
		],
		"mapped",
		[
			11441
		]
	],
	[
		[
			11441,
			11441
		],
		"valid"
	],
	[
		[
			11442,
			11442
		],
		"mapped",
		[
			11443
		]
	],
	[
		[
			11443,
			11443
		],
		"valid"
	],
	[
		[
			11444,
			11444
		],
		"mapped",
		[
			11445
		]
	],
	[
		[
			11445,
			11445
		],
		"valid"
	],
	[
		[
			11446,
			11446
		],
		"mapped",
		[
			11447
		]
	],
	[
		[
			11447,
			11447
		],
		"valid"
	],
	[
		[
			11448,
			11448
		],
		"mapped",
		[
			11449
		]
	],
	[
		[
			11449,
			11449
		],
		"valid"
	],
	[
		[
			11450,
			11450
		],
		"mapped",
		[
			11451
		]
	],
	[
		[
			11451,
			11451
		],
		"valid"
	],
	[
		[
			11452,
			11452
		],
		"mapped",
		[
			11453
		]
	],
	[
		[
			11453,
			11453
		],
		"valid"
	],
	[
		[
			11454,
			11454
		],
		"mapped",
		[
			11455
		]
	],
	[
		[
			11455,
			11455
		],
		"valid"
	],
	[
		[
			11456,
			11456
		],
		"mapped",
		[
			11457
		]
	],
	[
		[
			11457,
			11457
		],
		"valid"
	],
	[
		[
			11458,
			11458
		],
		"mapped",
		[
			11459
		]
	],
	[
		[
			11459,
			11459
		],
		"valid"
	],
	[
		[
			11460,
			11460
		],
		"mapped",
		[
			11461
		]
	],
	[
		[
			11461,
			11461
		],
		"valid"
	],
	[
		[
			11462,
			11462
		],
		"mapped",
		[
			11463
		]
	],
	[
		[
			11463,
			11463
		],
		"valid"
	],
	[
		[
			11464,
			11464
		],
		"mapped",
		[
			11465
		]
	],
	[
		[
			11465,
			11465
		],
		"valid"
	],
	[
		[
			11466,
			11466
		],
		"mapped",
		[
			11467
		]
	],
	[
		[
			11467,
			11467
		],
		"valid"
	],
	[
		[
			11468,
			11468
		],
		"mapped",
		[
			11469
		]
	],
	[
		[
			11469,
			11469
		],
		"valid"
	],
	[
		[
			11470,
			11470
		],
		"mapped",
		[
			11471
		]
	],
	[
		[
			11471,
			11471
		],
		"valid"
	],
	[
		[
			11472,
			11472
		],
		"mapped",
		[
			11473
		]
	],
	[
		[
			11473,
			11473
		],
		"valid"
	],
	[
		[
			11474,
			11474
		],
		"mapped",
		[
			11475
		]
	],
	[
		[
			11475,
			11475
		],
		"valid"
	],
	[
		[
			11476,
			11476
		],
		"mapped",
		[
			11477
		]
	],
	[
		[
			11477,
			11477
		],
		"valid"
	],
	[
		[
			11478,
			11478
		],
		"mapped",
		[
			11479
		]
	],
	[
		[
			11479,
			11479
		],
		"valid"
	],
	[
		[
			11480,
			11480
		],
		"mapped",
		[
			11481
		]
	],
	[
		[
			11481,
			11481
		],
		"valid"
	],
	[
		[
			11482,
			11482
		],
		"mapped",
		[
			11483
		]
	],
	[
		[
			11483,
			11483
		],
		"valid"
	],
	[
		[
			11484,
			11484
		],
		"mapped",
		[
			11485
		]
	],
	[
		[
			11485,
			11485
		],
		"valid"
	],
	[
		[
			11486,
			11486
		],
		"mapped",
		[
			11487
		]
	],
	[
		[
			11487,
			11487
		],
		"valid"
	],
	[
		[
			11488,
			11488
		],
		"mapped",
		[
			11489
		]
	],
	[
		[
			11489,
			11489
		],
		"valid"
	],
	[
		[
			11490,
			11490
		],
		"mapped",
		[
			11491
		]
	],
	[
		[
			11491,
			11492
		],
		"valid"
	],
	[
		[
			11493,
			11498
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11499,
			11499
		],
		"mapped",
		[
			11500
		]
	],
	[
		[
			11500,
			11500
		],
		"valid"
	],
	[
		[
			11501,
			11501
		],
		"mapped",
		[
			11502
		]
	],
	[
		[
			11502,
			11505
		],
		"valid"
	],
	[
		[
			11506,
			11506
		],
		"mapped",
		[
			11507
		]
	],
	[
		[
			11507,
			11507
		],
		"valid"
	],
	[
		[
			11508,
			11512
		],
		"disallowed"
	],
	[
		[
			11513,
			11519
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11520,
			11557
		],
		"valid"
	],
	[
		[
			11558,
			11558
		],
		"disallowed"
	],
	[
		[
			11559,
			11559
		],
		"valid"
	],
	[
		[
			11560,
			11564
		],
		"disallowed"
	],
	[
		[
			11565,
			11565
		],
		"valid"
	],
	[
		[
			11566,
			11567
		],
		"disallowed"
	],
	[
		[
			11568,
			11621
		],
		"valid"
	],
	[
		[
			11622,
			11623
		],
		"valid"
	],
	[
		[
			11624,
			11630
		],
		"disallowed"
	],
	[
		[
			11631,
			11631
		],
		"mapped",
		[
			11617
		]
	],
	[
		[
			11632,
			11632
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11633,
			11646
		],
		"disallowed"
	],
	[
		[
			11647,
			11647
		],
		"valid"
	],
	[
		[
			11648,
			11670
		],
		"valid"
	],
	[
		[
			11671,
			11679
		],
		"disallowed"
	],
	[
		[
			11680,
			11686
		],
		"valid"
	],
	[
		[
			11687,
			11687
		],
		"disallowed"
	],
	[
		[
			11688,
			11694
		],
		"valid"
	],
	[
		[
			11695,
			11695
		],
		"disallowed"
	],
	[
		[
			11696,
			11702
		],
		"valid"
	],
	[
		[
			11703,
			11703
		],
		"disallowed"
	],
	[
		[
			11704,
			11710
		],
		"valid"
	],
	[
		[
			11711,
			11711
		],
		"disallowed"
	],
	[
		[
			11712,
			11718
		],
		"valid"
	],
	[
		[
			11719,
			11719
		],
		"disallowed"
	],
	[
		[
			11720,
			11726
		],
		"valid"
	],
	[
		[
			11727,
			11727
		],
		"disallowed"
	],
	[
		[
			11728,
			11734
		],
		"valid"
	],
	[
		[
			11735,
			11735
		],
		"disallowed"
	],
	[
		[
			11736,
			11742
		],
		"valid"
	],
	[
		[
			11743,
			11743
		],
		"disallowed"
	],
	[
		[
			11744,
			11775
		],
		"valid"
	],
	[
		[
			11776,
			11799
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11800,
			11803
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11804,
			11805
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11806,
			11822
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11823,
			11823
		],
		"valid"
	],
	[
		[
			11824,
			11824
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11825,
			11825
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11826,
			11835
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11836,
			11842
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11843,
			11903
		],
		"disallowed"
	],
	[
		[
			11904,
			11929
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11930,
			11930
		],
		"disallowed"
	],
	[
		[
			11931,
			11934
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			11935,
			11935
		],
		"mapped",
		[
			27597
		]
	],
	[
		[
			11936,
			12018
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12019,
			12019
		],
		"mapped",
		[
			40863
		]
	],
	[
		[
			12020,
			12031
		],
		"disallowed"
	],
	[
		[
			12032,
			12032
		],
		"mapped",
		[
			19968
		]
	],
	[
		[
			12033,
			12033
		],
		"mapped",
		[
			20008
		]
	],
	[
		[
			12034,
			12034
		],
		"mapped",
		[
			20022
		]
	],
	[
		[
			12035,
			12035
		],
		"mapped",
		[
			20031
		]
	],
	[
		[
			12036,
			12036
		],
		"mapped",
		[
			20057
		]
	],
	[
		[
			12037,
			12037
		],
		"mapped",
		[
			20101
		]
	],
	[
		[
			12038,
			12038
		],
		"mapped",
		[
			20108
		]
	],
	[
		[
			12039,
			12039
		],
		"mapped",
		[
			20128
		]
	],
	[
		[
			12040,
			12040
		],
		"mapped",
		[
			20154
		]
	],
	[
		[
			12041,
			12041
		],
		"mapped",
		[
			20799
		]
	],
	[
		[
			12042,
			12042
		],
		"mapped",
		[
			20837
		]
	],
	[
		[
			12043,
			12043
		],
		"mapped",
		[
			20843
		]
	],
	[
		[
			12044,
			12044
		],
		"mapped",
		[
			20866
		]
	],
	[
		[
			12045,
			12045
		],
		"mapped",
		[
			20886
		]
	],
	[
		[
			12046,
			12046
		],
		"mapped",
		[
			20907
		]
	],
	[
		[
			12047,
			12047
		],
		"mapped",
		[
			20960
		]
	],
	[
		[
			12048,
			12048
		],
		"mapped",
		[
			20981
		]
	],
	[
		[
			12049,
			12049
		],
		"mapped",
		[
			20992
		]
	],
	[
		[
			12050,
			12050
		],
		"mapped",
		[
			21147
		]
	],
	[
		[
			12051,
			12051
		],
		"mapped",
		[
			21241
		]
	],
	[
		[
			12052,
			12052
		],
		"mapped",
		[
			21269
		]
	],
	[
		[
			12053,
			12053
		],
		"mapped",
		[
			21274
		]
	],
	[
		[
			12054,
			12054
		],
		"mapped",
		[
			21304
		]
	],
	[
		[
			12055,
			12055
		],
		"mapped",
		[
			21313
		]
	],
	[
		[
			12056,
			12056
		],
		"mapped",
		[
			21340
		]
	],
	[
		[
			12057,
			12057
		],
		"mapped",
		[
			21353
		]
	],
	[
		[
			12058,
			12058
		],
		"mapped",
		[
			21378
		]
	],
	[
		[
			12059,
			12059
		],
		"mapped",
		[
			21430
		]
	],
	[
		[
			12060,
			12060
		],
		"mapped",
		[
			21448
		]
	],
	[
		[
			12061,
			12061
		],
		"mapped",
		[
			21475
		]
	],
	[
		[
			12062,
			12062
		],
		"mapped",
		[
			22231
		]
	],
	[
		[
			12063,
			12063
		],
		"mapped",
		[
			22303
		]
	],
	[
		[
			12064,
			12064
		],
		"mapped",
		[
			22763
		]
	],
	[
		[
			12065,
			12065
		],
		"mapped",
		[
			22786
		]
	],
	[
		[
			12066,
			12066
		],
		"mapped",
		[
			22794
		]
	],
	[
		[
			12067,
			12067
		],
		"mapped",
		[
			22805
		]
	],
	[
		[
			12068,
			12068
		],
		"mapped",
		[
			22823
		]
	],
	[
		[
			12069,
			12069
		],
		"mapped",
		[
			22899
		]
	],
	[
		[
			12070,
			12070
		],
		"mapped",
		[
			23376
		]
	],
	[
		[
			12071,
			12071
		],
		"mapped",
		[
			23424
		]
	],
	[
		[
			12072,
			12072
		],
		"mapped",
		[
			23544
		]
	],
	[
		[
			12073,
			12073
		],
		"mapped",
		[
			23567
		]
	],
	[
		[
			12074,
			12074
		],
		"mapped",
		[
			23586
		]
	],
	[
		[
			12075,
			12075
		],
		"mapped",
		[
			23608
		]
	],
	[
		[
			12076,
			12076
		],
		"mapped",
		[
			23662
		]
	],
	[
		[
			12077,
			12077
		],
		"mapped",
		[
			23665
		]
	],
	[
		[
			12078,
			12078
		],
		"mapped",
		[
			24027
		]
	],
	[
		[
			12079,
			12079
		],
		"mapped",
		[
			24037
		]
	],
	[
		[
			12080,
			12080
		],
		"mapped",
		[
			24049
		]
	],
	[
		[
			12081,
			12081
		],
		"mapped",
		[
			24062
		]
	],
	[
		[
			12082,
			12082
		],
		"mapped",
		[
			24178
		]
	],
	[
		[
			12083,
			12083
		],
		"mapped",
		[
			24186
		]
	],
	[
		[
			12084,
			12084
		],
		"mapped",
		[
			24191
		]
	],
	[
		[
			12085,
			12085
		],
		"mapped",
		[
			24308
		]
	],
	[
		[
			12086,
			12086
		],
		"mapped",
		[
			24318
		]
	],
	[
		[
			12087,
			12087
		],
		"mapped",
		[
			24331
		]
	],
	[
		[
			12088,
			12088
		],
		"mapped",
		[
			24339
		]
	],
	[
		[
			12089,
			12089
		],
		"mapped",
		[
			24400
		]
	],
	[
		[
			12090,
			12090
		],
		"mapped",
		[
			24417
		]
	],
	[
		[
			12091,
			12091
		],
		"mapped",
		[
			24435
		]
	],
	[
		[
			12092,
			12092
		],
		"mapped",
		[
			24515
		]
	],
	[
		[
			12093,
			12093
		],
		"mapped",
		[
			25096
		]
	],
	[
		[
			12094,
			12094
		],
		"mapped",
		[
			25142
		]
	],
	[
		[
			12095,
			12095
		],
		"mapped",
		[
			25163
		]
	],
	[
		[
			12096,
			12096
		],
		"mapped",
		[
			25903
		]
	],
	[
		[
			12097,
			12097
		],
		"mapped",
		[
			25908
		]
	],
	[
		[
			12098,
			12098
		],
		"mapped",
		[
			25991
		]
	],
	[
		[
			12099,
			12099
		],
		"mapped",
		[
			26007
		]
	],
	[
		[
			12100,
			12100
		],
		"mapped",
		[
			26020
		]
	],
	[
		[
			12101,
			12101
		],
		"mapped",
		[
			26041
		]
	],
	[
		[
			12102,
			12102
		],
		"mapped",
		[
			26080
		]
	],
	[
		[
			12103,
			12103
		],
		"mapped",
		[
			26085
		]
	],
	[
		[
			12104,
			12104
		],
		"mapped",
		[
			26352
		]
	],
	[
		[
			12105,
			12105
		],
		"mapped",
		[
			26376
		]
	],
	[
		[
			12106,
			12106
		],
		"mapped",
		[
			26408
		]
	],
	[
		[
			12107,
			12107
		],
		"mapped",
		[
			27424
		]
	],
	[
		[
			12108,
			12108
		],
		"mapped",
		[
			27490
		]
	],
	[
		[
			12109,
			12109
		],
		"mapped",
		[
			27513
		]
	],
	[
		[
			12110,
			12110
		],
		"mapped",
		[
			27571
		]
	],
	[
		[
			12111,
			12111
		],
		"mapped",
		[
			27595
		]
	],
	[
		[
			12112,
			12112
		],
		"mapped",
		[
			27604
		]
	],
	[
		[
			12113,
			12113
		],
		"mapped",
		[
			27611
		]
	],
	[
		[
			12114,
			12114
		],
		"mapped",
		[
			27663
		]
	],
	[
		[
			12115,
			12115
		],
		"mapped",
		[
			27668
		]
	],
	[
		[
			12116,
			12116
		],
		"mapped",
		[
			27700
		]
	],
	[
		[
			12117,
			12117
		],
		"mapped",
		[
			28779
		]
	],
	[
		[
			12118,
			12118
		],
		"mapped",
		[
			29226
		]
	],
	[
		[
			12119,
			12119
		],
		"mapped",
		[
			29238
		]
	],
	[
		[
			12120,
			12120
		],
		"mapped",
		[
			29243
		]
	],
	[
		[
			12121,
			12121
		],
		"mapped",
		[
			29247
		]
	],
	[
		[
			12122,
			12122
		],
		"mapped",
		[
			29255
		]
	],
	[
		[
			12123,
			12123
		],
		"mapped",
		[
			29273
		]
	],
	[
		[
			12124,
			12124
		],
		"mapped",
		[
			29275
		]
	],
	[
		[
			12125,
			12125
		],
		"mapped",
		[
			29356
		]
	],
	[
		[
			12126,
			12126
		],
		"mapped",
		[
			29572
		]
	],
	[
		[
			12127,
			12127
		],
		"mapped",
		[
			29577
		]
	],
	[
		[
			12128,
			12128
		],
		"mapped",
		[
			29916
		]
	],
	[
		[
			12129,
			12129
		],
		"mapped",
		[
			29926
		]
	],
	[
		[
			12130,
			12130
		],
		"mapped",
		[
			29976
		]
	],
	[
		[
			12131,
			12131
		],
		"mapped",
		[
			29983
		]
	],
	[
		[
			12132,
			12132
		],
		"mapped",
		[
			29992
		]
	],
	[
		[
			12133,
			12133
		],
		"mapped",
		[
			30000
		]
	],
	[
		[
			12134,
			12134
		],
		"mapped",
		[
			30091
		]
	],
	[
		[
			12135,
			12135
		],
		"mapped",
		[
			30098
		]
	],
	[
		[
			12136,
			12136
		],
		"mapped",
		[
			30326
		]
	],
	[
		[
			12137,
			12137
		],
		"mapped",
		[
			30333
		]
	],
	[
		[
			12138,
			12138
		],
		"mapped",
		[
			30382
		]
	],
	[
		[
			12139,
			12139
		],
		"mapped",
		[
			30399
		]
	],
	[
		[
			12140,
			12140
		],
		"mapped",
		[
			30446
		]
	],
	[
		[
			12141,
			12141
		],
		"mapped",
		[
			30683
		]
	],
	[
		[
			12142,
			12142
		],
		"mapped",
		[
			30690
		]
	],
	[
		[
			12143,
			12143
		],
		"mapped",
		[
			30707
		]
	],
	[
		[
			12144,
			12144
		],
		"mapped",
		[
			31034
		]
	],
	[
		[
			12145,
			12145
		],
		"mapped",
		[
			31160
		]
	],
	[
		[
			12146,
			12146
		],
		"mapped",
		[
			31166
		]
	],
	[
		[
			12147,
			12147
		],
		"mapped",
		[
			31348
		]
	],
	[
		[
			12148,
			12148
		],
		"mapped",
		[
			31435
		]
	],
	[
		[
			12149,
			12149
		],
		"mapped",
		[
			31481
		]
	],
	[
		[
			12150,
			12150
		],
		"mapped",
		[
			31859
		]
	],
	[
		[
			12151,
			12151
		],
		"mapped",
		[
			31992
		]
	],
	[
		[
			12152,
			12152
		],
		"mapped",
		[
			32566
		]
	],
	[
		[
			12153,
			12153
		],
		"mapped",
		[
			32593
		]
	],
	[
		[
			12154,
			12154
		],
		"mapped",
		[
			32650
		]
	],
	[
		[
			12155,
			12155
		],
		"mapped",
		[
			32701
		]
	],
	[
		[
			12156,
			12156
		],
		"mapped",
		[
			32769
		]
	],
	[
		[
			12157,
			12157
		],
		"mapped",
		[
			32780
		]
	],
	[
		[
			12158,
			12158
		],
		"mapped",
		[
			32786
		]
	],
	[
		[
			12159,
			12159
		],
		"mapped",
		[
			32819
		]
	],
	[
		[
			12160,
			12160
		],
		"mapped",
		[
			32895
		]
	],
	[
		[
			12161,
			12161
		],
		"mapped",
		[
			32905
		]
	],
	[
		[
			12162,
			12162
		],
		"mapped",
		[
			33251
		]
	],
	[
		[
			12163,
			12163
		],
		"mapped",
		[
			33258
		]
	],
	[
		[
			12164,
			12164
		],
		"mapped",
		[
			33267
		]
	],
	[
		[
			12165,
			12165
		],
		"mapped",
		[
			33276
		]
	],
	[
		[
			12166,
			12166
		],
		"mapped",
		[
			33292
		]
	],
	[
		[
			12167,
			12167
		],
		"mapped",
		[
			33307
		]
	],
	[
		[
			12168,
			12168
		],
		"mapped",
		[
			33311
		]
	],
	[
		[
			12169,
			12169
		],
		"mapped",
		[
			33390
		]
	],
	[
		[
			12170,
			12170
		],
		"mapped",
		[
			33394
		]
	],
	[
		[
			12171,
			12171
		],
		"mapped",
		[
			33400
		]
	],
	[
		[
			12172,
			12172
		],
		"mapped",
		[
			34381
		]
	],
	[
		[
			12173,
			12173
		],
		"mapped",
		[
			34411
		]
	],
	[
		[
			12174,
			12174
		],
		"mapped",
		[
			34880
		]
	],
	[
		[
			12175,
			12175
		],
		"mapped",
		[
			34892
		]
	],
	[
		[
			12176,
			12176
		],
		"mapped",
		[
			34915
		]
	],
	[
		[
			12177,
			12177
		],
		"mapped",
		[
			35198
		]
	],
	[
		[
			12178,
			12178
		],
		"mapped",
		[
			35211
		]
	],
	[
		[
			12179,
			12179
		],
		"mapped",
		[
			35282
		]
	],
	[
		[
			12180,
			12180
		],
		"mapped",
		[
			35328
		]
	],
	[
		[
			12181,
			12181
		],
		"mapped",
		[
			35895
		]
	],
	[
		[
			12182,
			12182
		],
		"mapped",
		[
			35910
		]
	],
	[
		[
			12183,
			12183
		],
		"mapped",
		[
			35925
		]
	],
	[
		[
			12184,
			12184
		],
		"mapped",
		[
			35960
		]
	],
	[
		[
			12185,
			12185
		],
		"mapped",
		[
			35997
		]
	],
	[
		[
			12186,
			12186
		],
		"mapped",
		[
			36196
		]
	],
	[
		[
			12187,
			12187
		],
		"mapped",
		[
			36208
		]
	],
	[
		[
			12188,
			12188
		],
		"mapped",
		[
			36275
		]
	],
	[
		[
			12189,
			12189
		],
		"mapped",
		[
			36523
		]
	],
	[
		[
			12190,
			12190
		],
		"mapped",
		[
			36554
		]
	],
	[
		[
			12191,
			12191
		],
		"mapped",
		[
			36763
		]
	],
	[
		[
			12192,
			12192
		],
		"mapped",
		[
			36784
		]
	],
	[
		[
			12193,
			12193
		],
		"mapped",
		[
			36789
		]
	],
	[
		[
			12194,
			12194
		],
		"mapped",
		[
			37009
		]
	],
	[
		[
			12195,
			12195
		],
		"mapped",
		[
			37193
		]
	],
	[
		[
			12196,
			12196
		],
		"mapped",
		[
			37318
		]
	],
	[
		[
			12197,
			12197
		],
		"mapped",
		[
			37324
		]
	],
	[
		[
			12198,
			12198
		],
		"mapped",
		[
			37329
		]
	],
	[
		[
			12199,
			12199
		],
		"mapped",
		[
			38263
		]
	],
	[
		[
			12200,
			12200
		],
		"mapped",
		[
			38272
		]
	],
	[
		[
			12201,
			12201
		],
		"mapped",
		[
			38428
		]
	],
	[
		[
			12202,
			12202
		],
		"mapped",
		[
			38582
		]
	],
	[
		[
			12203,
			12203
		],
		"mapped",
		[
			38585
		]
	],
	[
		[
			12204,
			12204
		],
		"mapped",
		[
			38632
		]
	],
	[
		[
			12205,
			12205
		],
		"mapped",
		[
			38737
		]
	],
	[
		[
			12206,
			12206
		],
		"mapped",
		[
			38750
		]
	],
	[
		[
			12207,
			12207
		],
		"mapped",
		[
			38754
		]
	],
	[
		[
			12208,
			12208
		],
		"mapped",
		[
			38761
		]
	],
	[
		[
			12209,
			12209
		],
		"mapped",
		[
			38859
		]
	],
	[
		[
			12210,
			12210
		],
		"mapped",
		[
			38893
		]
	],
	[
		[
			12211,
			12211
		],
		"mapped",
		[
			38899
		]
	],
	[
		[
			12212,
			12212
		],
		"mapped",
		[
			38913
		]
	],
	[
		[
			12213,
			12213
		],
		"mapped",
		[
			39080
		]
	],
	[
		[
			12214,
			12214
		],
		"mapped",
		[
			39131
		]
	],
	[
		[
			12215,
			12215
		],
		"mapped",
		[
			39135
		]
	],
	[
		[
			12216,
			12216
		],
		"mapped",
		[
			39318
		]
	],
	[
		[
			12217,
			12217
		],
		"mapped",
		[
			39321
		]
	],
	[
		[
			12218,
			12218
		],
		"mapped",
		[
			39340
		]
	],
	[
		[
			12219,
			12219
		],
		"mapped",
		[
			39592
		]
	],
	[
		[
			12220,
			12220
		],
		"mapped",
		[
			39640
		]
	],
	[
		[
			12221,
			12221
		],
		"mapped",
		[
			39647
		]
	],
	[
		[
			12222,
			12222
		],
		"mapped",
		[
			39717
		]
	],
	[
		[
			12223,
			12223
		],
		"mapped",
		[
			39727
		]
	],
	[
		[
			12224,
			12224
		],
		"mapped",
		[
			39730
		]
	],
	[
		[
			12225,
			12225
		],
		"mapped",
		[
			39740
		]
	],
	[
		[
			12226,
			12226
		],
		"mapped",
		[
			39770
		]
	],
	[
		[
			12227,
			12227
		],
		"mapped",
		[
			40165
		]
	],
	[
		[
			12228,
			12228
		],
		"mapped",
		[
			40565
		]
	],
	[
		[
			12229,
			12229
		],
		"mapped",
		[
			40575
		]
	],
	[
		[
			12230,
			12230
		],
		"mapped",
		[
			40613
		]
	],
	[
		[
			12231,
			12231
		],
		"mapped",
		[
			40635
		]
	],
	[
		[
			12232,
			12232
		],
		"mapped",
		[
			40643
		]
	],
	[
		[
			12233,
			12233
		],
		"mapped",
		[
			40653
		]
	],
	[
		[
			12234,
			12234
		],
		"mapped",
		[
			40657
		]
	],
	[
		[
			12235,
			12235
		],
		"mapped",
		[
			40697
		]
	],
	[
		[
			12236,
			12236
		],
		"mapped",
		[
			40701
		]
	],
	[
		[
			12237,
			12237
		],
		"mapped",
		[
			40718
		]
	],
	[
		[
			12238,
			12238
		],
		"mapped",
		[
			40723
		]
	],
	[
		[
			12239,
			12239
		],
		"mapped",
		[
			40736
		]
	],
	[
		[
			12240,
			12240
		],
		"mapped",
		[
			40763
		]
	],
	[
		[
			12241,
			12241
		],
		"mapped",
		[
			40778
		]
	],
	[
		[
			12242,
			12242
		],
		"mapped",
		[
			40786
		]
	],
	[
		[
			12243,
			12243
		],
		"mapped",
		[
			40845
		]
	],
	[
		[
			12244,
			12244
		],
		"mapped",
		[
			40860
		]
	],
	[
		[
			12245,
			12245
		],
		"mapped",
		[
			40864
		]
	],
	[
		[
			12246,
			12271
		],
		"disallowed"
	],
	[
		[
			12272,
			12283
		],
		"disallowed"
	],
	[
		[
			12284,
			12287
		],
		"disallowed"
	],
	[
		[
			12288,
			12288
		],
		"disallowed_STD3_mapped",
		[
			32
		]
	],
	[
		[
			12289,
			12289
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12290,
			12290
		],
		"mapped",
		[
			46
		]
	],
	[
		[
			12291,
			12292
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12293,
			12295
		],
		"valid"
	],
	[
		[
			12296,
			12329
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12330,
			12333
		],
		"valid"
	],
	[
		[
			12334,
			12341
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12342,
			12342
		],
		"mapped",
		[
			12306
		]
	],
	[
		[
			12343,
			12343
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12344,
			12344
		],
		"mapped",
		[
			21313
		]
	],
	[
		[
			12345,
			12345
		],
		"mapped",
		[
			21316
		]
	],
	[
		[
			12346,
			12346
		],
		"mapped",
		[
			21317
		]
	],
	[
		[
			12347,
			12347
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12348,
			12348
		],
		"valid"
	],
	[
		[
			12349,
			12349
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12350,
			12350
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12351,
			12351
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12352,
			12352
		],
		"disallowed"
	],
	[
		[
			12353,
			12436
		],
		"valid"
	],
	[
		[
			12437,
			12438
		],
		"valid"
	],
	[
		[
			12439,
			12440
		],
		"disallowed"
	],
	[
		[
			12441,
			12442
		],
		"valid"
	],
	[
		[
			12443,
			12443
		],
		"disallowed_STD3_mapped",
		[
			32,
			12441
		]
	],
	[
		[
			12444,
			12444
		],
		"disallowed_STD3_mapped",
		[
			32,
			12442
		]
	],
	[
		[
			12445,
			12446
		],
		"valid"
	],
	[
		[
			12447,
			12447
		],
		"mapped",
		[
			12424,
			12426
		]
	],
	[
		[
			12448,
			12448
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12449,
			12542
		],
		"valid"
	],
	[
		[
			12543,
			12543
		],
		"mapped",
		[
			12467,
			12488
		]
	],
	[
		[
			12544,
			12548
		],
		"disallowed"
	],
	[
		[
			12549,
			12588
		],
		"valid"
	],
	[
		[
			12589,
			12589
		],
		"valid"
	],
	[
		[
			12590,
			12592
		],
		"disallowed"
	],
	[
		[
			12593,
			12593
		],
		"mapped",
		[
			4352
		]
	],
	[
		[
			12594,
			12594
		],
		"mapped",
		[
			4353
		]
	],
	[
		[
			12595,
			12595
		],
		"mapped",
		[
			4522
		]
	],
	[
		[
			12596,
			12596
		],
		"mapped",
		[
			4354
		]
	],
	[
		[
			12597,
			12597
		],
		"mapped",
		[
			4524
		]
	],
	[
		[
			12598,
			12598
		],
		"mapped",
		[
			4525
		]
	],
	[
		[
			12599,
			12599
		],
		"mapped",
		[
			4355
		]
	],
	[
		[
			12600,
			12600
		],
		"mapped",
		[
			4356
		]
	],
	[
		[
			12601,
			12601
		],
		"mapped",
		[
			4357
		]
	],
	[
		[
			12602,
			12602
		],
		"mapped",
		[
			4528
		]
	],
	[
		[
			12603,
			12603
		],
		"mapped",
		[
			4529
		]
	],
	[
		[
			12604,
			12604
		],
		"mapped",
		[
			4530
		]
	],
	[
		[
			12605,
			12605
		],
		"mapped",
		[
			4531
		]
	],
	[
		[
			12606,
			12606
		],
		"mapped",
		[
			4532
		]
	],
	[
		[
			12607,
			12607
		],
		"mapped",
		[
			4533
		]
	],
	[
		[
			12608,
			12608
		],
		"mapped",
		[
			4378
		]
	],
	[
		[
			12609,
			12609
		],
		"mapped",
		[
			4358
		]
	],
	[
		[
			12610,
			12610
		],
		"mapped",
		[
			4359
		]
	],
	[
		[
			12611,
			12611
		],
		"mapped",
		[
			4360
		]
	],
	[
		[
			12612,
			12612
		],
		"mapped",
		[
			4385
		]
	],
	[
		[
			12613,
			12613
		],
		"mapped",
		[
			4361
		]
	],
	[
		[
			12614,
			12614
		],
		"mapped",
		[
			4362
		]
	],
	[
		[
			12615,
			12615
		],
		"mapped",
		[
			4363
		]
	],
	[
		[
			12616,
			12616
		],
		"mapped",
		[
			4364
		]
	],
	[
		[
			12617,
			12617
		],
		"mapped",
		[
			4365
		]
	],
	[
		[
			12618,
			12618
		],
		"mapped",
		[
			4366
		]
	],
	[
		[
			12619,
			12619
		],
		"mapped",
		[
			4367
		]
	],
	[
		[
			12620,
			12620
		],
		"mapped",
		[
			4368
		]
	],
	[
		[
			12621,
			12621
		],
		"mapped",
		[
			4369
		]
	],
	[
		[
			12622,
			12622
		],
		"mapped",
		[
			4370
		]
	],
	[
		[
			12623,
			12623
		],
		"mapped",
		[
			4449
		]
	],
	[
		[
			12624,
			12624
		],
		"mapped",
		[
			4450
		]
	],
	[
		[
			12625,
			12625
		],
		"mapped",
		[
			4451
		]
	],
	[
		[
			12626,
			12626
		],
		"mapped",
		[
			4452
		]
	],
	[
		[
			12627,
			12627
		],
		"mapped",
		[
			4453
		]
	],
	[
		[
			12628,
			12628
		],
		"mapped",
		[
			4454
		]
	],
	[
		[
			12629,
			12629
		],
		"mapped",
		[
			4455
		]
	],
	[
		[
			12630,
			12630
		],
		"mapped",
		[
			4456
		]
	],
	[
		[
			12631,
			12631
		],
		"mapped",
		[
			4457
		]
	],
	[
		[
			12632,
			12632
		],
		"mapped",
		[
			4458
		]
	],
	[
		[
			12633,
			12633
		],
		"mapped",
		[
			4459
		]
	],
	[
		[
			12634,
			12634
		],
		"mapped",
		[
			4460
		]
	],
	[
		[
			12635,
			12635
		],
		"mapped",
		[
			4461
		]
	],
	[
		[
			12636,
			12636
		],
		"mapped",
		[
			4462
		]
	],
	[
		[
			12637,
			12637
		],
		"mapped",
		[
			4463
		]
	],
	[
		[
			12638,
			12638
		],
		"mapped",
		[
			4464
		]
	],
	[
		[
			12639,
			12639
		],
		"mapped",
		[
			4465
		]
	],
	[
		[
			12640,
			12640
		],
		"mapped",
		[
			4466
		]
	],
	[
		[
			12641,
			12641
		],
		"mapped",
		[
			4467
		]
	],
	[
		[
			12642,
			12642
		],
		"mapped",
		[
			4468
		]
	],
	[
		[
			12643,
			12643
		],
		"mapped",
		[
			4469
		]
	],
	[
		[
			12644,
			12644
		],
		"disallowed"
	],
	[
		[
			12645,
			12645
		],
		"mapped",
		[
			4372
		]
	],
	[
		[
			12646,
			12646
		],
		"mapped",
		[
			4373
		]
	],
	[
		[
			12647,
			12647
		],
		"mapped",
		[
			4551
		]
	],
	[
		[
			12648,
			12648
		],
		"mapped",
		[
			4552
		]
	],
	[
		[
			12649,
			12649
		],
		"mapped",
		[
			4556
		]
	],
	[
		[
			12650,
			12650
		],
		"mapped",
		[
			4558
		]
	],
	[
		[
			12651,
			12651
		],
		"mapped",
		[
			4563
		]
	],
	[
		[
			12652,
			12652
		],
		"mapped",
		[
			4567
		]
	],
	[
		[
			12653,
			12653
		],
		"mapped",
		[
			4569
		]
	],
	[
		[
			12654,
			12654
		],
		"mapped",
		[
			4380
		]
	],
	[
		[
			12655,
			12655
		],
		"mapped",
		[
			4573
		]
	],
	[
		[
			12656,
			12656
		],
		"mapped",
		[
			4575
		]
	],
	[
		[
			12657,
			12657
		],
		"mapped",
		[
			4381
		]
	],
	[
		[
			12658,
			12658
		],
		"mapped",
		[
			4382
		]
	],
	[
		[
			12659,
			12659
		],
		"mapped",
		[
			4384
		]
	],
	[
		[
			12660,
			12660
		],
		"mapped",
		[
			4386
		]
	],
	[
		[
			12661,
			12661
		],
		"mapped",
		[
			4387
		]
	],
	[
		[
			12662,
			12662
		],
		"mapped",
		[
			4391
		]
	],
	[
		[
			12663,
			12663
		],
		"mapped",
		[
			4393
		]
	],
	[
		[
			12664,
			12664
		],
		"mapped",
		[
			4395
		]
	],
	[
		[
			12665,
			12665
		],
		"mapped",
		[
			4396
		]
	],
	[
		[
			12666,
			12666
		],
		"mapped",
		[
			4397
		]
	],
	[
		[
			12667,
			12667
		],
		"mapped",
		[
			4398
		]
	],
	[
		[
			12668,
			12668
		],
		"mapped",
		[
			4399
		]
	],
	[
		[
			12669,
			12669
		],
		"mapped",
		[
			4402
		]
	],
	[
		[
			12670,
			12670
		],
		"mapped",
		[
			4406
		]
	],
	[
		[
			12671,
			12671
		],
		"mapped",
		[
			4416
		]
	],
	[
		[
			12672,
			12672
		],
		"mapped",
		[
			4423
		]
	],
	[
		[
			12673,
			12673
		],
		"mapped",
		[
			4428
		]
	],
	[
		[
			12674,
			12674
		],
		"mapped",
		[
			4593
		]
	],
	[
		[
			12675,
			12675
		],
		"mapped",
		[
			4594
		]
	],
	[
		[
			12676,
			12676
		],
		"mapped",
		[
			4439
		]
	],
	[
		[
			12677,
			12677
		],
		"mapped",
		[
			4440
		]
	],
	[
		[
			12678,
			12678
		],
		"mapped",
		[
			4441
		]
	],
	[
		[
			12679,
			12679
		],
		"mapped",
		[
			4484
		]
	],
	[
		[
			12680,
			12680
		],
		"mapped",
		[
			4485
		]
	],
	[
		[
			12681,
			12681
		],
		"mapped",
		[
			4488
		]
	],
	[
		[
			12682,
			12682
		],
		"mapped",
		[
			4497
		]
	],
	[
		[
			12683,
			12683
		],
		"mapped",
		[
			4498
		]
	],
	[
		[
			12684,
			12684
		],
		"mapped",
		[
			4500
		]
	],
	[
		[
			12685,
			12685
		],
		"mapped",
		[
			4510
		]
	],
	[
		[
			12686,
			12686
		],
		"mapped",
		[
			4513
		]
	],
	[
		[
			12687,
			12687
		],
		"disallowed"
	],
	[
		[
			12688,
			12689
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12690,
			12690
		],
		"mapped",
		[
			19968
		]
	],
	[
		[
			12691,
			12691
		],
		"mapped",
		[
			20108
		]
	],
	[
		[
			12692,
			12692
		],
		"mapped",
		[
			19977
		]
	],
	[
		[
			12693,
			12693
		],
		"mapped",
		[
			22235
		]
	],
	[
		[
			12694,
			12694
		],
		"mapped",
		[
			19978
		]
	],
	[
		[
			12695,
			12695
		],
		"mapped",
		[
			20013
		]
	],
	[
		[
			12696,
			12696
		],
		"mapped",
		[
			19979
		]
	],
	[
		[
			12697,
			12697
		],
		"mapped",
		[
			30002
		]
	],
	[
		[
			12698,
			12698
		],
		"mapped",
		[
			20057
		]
	],
	[
		[
			12699,
			12699
		],
		"mapped",
		[
			19993
		]
	],
	[
		[
			12700,
			12700
		],
		"mapped",
		[
			19969
		]
	],
	[
		[
			12701,
			12701
		],
		"mapped",
		[
			22825
		]
	],
	[
		[
			12702,
			12702
		],
		"mapped",
		[
			22320
		]
	],
	[
		[
			12703,
			12703
		],
		"mapped",
		[
			20154
		]
	],
	[
		[
			12704,
			12727
		],
		"valid"
	],
	[
		[
			12728,
			12730
		],
		"valid"
	],
	[
		[
			12731,
			12735
		],
		"disallowed"
	],
	[
		[
			12736,
			12751
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12752,
			12771
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12772,
			12783
		],
		"disallowed"
	],
	[
		[
			12784,
			12799
		],
		"valid"
	],
	[
		[
			12800,
			12800
		],
		"disallowed_STD3_mapped",
		[
			40,
			4352,
			41
		]
	],
	[
		[
			12801,
			12801
		],
		"disallowed_STD3_mapped",
		[
			40,
			4354,
			41
		]
	],
	[
		[
			12802,
			12802
		],
		"disallowed_STD3_mapped",
		[
			40,
			4355,
			41
		]
	],
	[
		[
			12803,
			12803
		],
		"disallowed_STD3_mapped",
		[
			40,
			4357,
			41
		]
	],
	[
		[
			12804,
			12804
		],
		"disallowed_STD3_mapped",
		[
			40,
			4358,
			41
		]
	],
	[
		[
			12805,
			12805
		],
		"disallowed_STD3_mapped",
		[
			40,
			4359,
			41
		]
	],
	[
		[
			12806,
			12806
		],
		"disallowed_STD3_mapped",
		[
			40,
			4361,
			41
		]
	],
	[
		[
			12807,
			12807
		],
		"disallowed_STD3_mapped",
		[
			40,
			4363,
			41
		]
	],
	[
		[
			12808,
			12808
		],
		"disallowed_STD3_mapped",
		[
			40,
			4364,
			41
		]
	],
	[
		[
			12809,
			12809
		],
		"disallowed_STD3_mapped",
		[
			40,
			4366,
			41
		]
	],
	[
		[
			12810,
			12810
		],
		"disallowed_STD3_mapped",
		[
			40,
			4367,
			41
		]
	],
	[
		[
			12811,
			12811
		],
		"disallowed_STD3_mapped",
		[
			40,
			4368,
			41
		]
	],
	[
		[
			12812,
			12812
		],
		"disallowed_STD3_mapped",
		[
			40,
			4369,
			41
		]
	],
	[
		[
			12813,
			12813
		],
		"disallowed_STD3_mapped",
		[
			40,
			4370,
			41
		]
	],
	[
		[
			12814,
			12814
		],
		"disallowed_STD3_mapped",
		[
			40,
			44032,
			41
		]
	],
	[
		[
			12815,
			12815
		],
		"disallowed_STD3_mapped",
		[
			40,
			45208,
			41
		]
	],
	[
		[
			12816,
			12816
		],
		"disallowed_STD3_mapped",
		[
			40,
			45796,
			41
		]
	],
	[
		[
			12817,
			12817
		],
		"disallowed_STD3_mapped",
		[
			40,
			46972,
			41
		]
	],
	[
		[
			12818,
			12818
		],
		"disallowed_STD3_mapped",
		[
			40,
			47560,
			41
		]
	],
	[
		[
			12819,
			12819
		],
		"disallowed_STD3_mapped",
		[
			40,
			48148,
			41
		]
	],
	[
		[
			12820,
			12820
		],
		"disallowed_STD3_mapped",
		[
			40,
			49324,
			41
		]
	],
	[
		[
			12821,
			12821
		],
		"disallowed_STD3_mapped",
		[
			40,
			50500,
			41
		]
	],
	[
		[
			12822,
			12822
		],
		"disallowed_STD3_mapped",
		[
			40,
			51088,
			41
		]
	],
	[
		[
			12823,
			12823
		],
		"disallowed_STD3_mapped",
		[
			40,
			52264,
			41
		]
	],
	[
		[
			12824,
			12824
		],
		"disallowed_STD3_mapped",
		[
			40,
			52852,
			41
		]
	],
	[
		[
			12825,
			12825
		],
		"disallowed_STD3_mapped",
		[
			40,
			53440,
			41
		]
	],
	[
		[
			12826,
			12826
		],
		"disallowed_STD3_mapped",
		[
			40,
			54028,
			41
		]
	],
	[
		[
			12827,
			12827
		],
		"disallowed_STD3_mapped",
		[
			40,
			54616,
			41
		]
	],
	[
		[
			12828,
			12828
		],
		"disallowed_STD3_mapped",
		[
			40,
			51452,
			41
		]
	],
	[
		[
			12829,
			12829
		],
		"disallowed_STD3_mapped",
		[
			40,
			50724,
			51204,
			41
		]
	],
	[
		[
			12830,
			12830
		],
		"disallowed_STD3_mapped",
		[
			40,
			50724,
			54980,
			41
		]
	],
	[
		[
			12831,
			12831
		],
		"disallowed"
	],
	[
		[
			12832,
			12832
		],
		"disallowed_STD3_mapped",
		[
			40,
			19968,
			41
		]
	],
	[
		[
			12833,
			12833
		],
		"disallowed_STD3_mapped",
		[
			40,
			20108,
			41
		]
	],
	[
		[
			12834,
			12834
		],
		"disallowed_STD3_mapped",
		[
			40,
			19977,
			41
		]
	],
	[
		[
			12835,
			12835
		],
		"disallowed_STD3_mapped",
		[
			40,
			22235,
			41
		]
	],
	[
		[
			12836,
			12836
		],
		"disallowed_STD3_mapped",
		[
			40,
			20116,
			41
		]
	],
	[
		[
			12837,
			12837
		],
		"disallowed_STD3_mapped",
		[
			40,
			20845,
			41
		]
	],
	[
		[
			12838,
			12838
		],
		"disallowed_STD3_mapped",
		[
			40,
			19971,
			41
		]
	],
	[
		[
			12839,
			12839
		],
		"disallowed_STD3_mapped",
		[
			40,
			20843,
			41
		]
	],
	[
		[
			12840,
			12840
		],
		"disallowed_STD3_mapped",
		[
			40,
			20061,
			41
		]
	],
	[
		[
			12841,
			12841
		],
		"disallowed_STD3_mapped",
		[
			40,
			21313,
			41
		]
	],
	[
		[
			12842,
			12842
		],
		"disallowed_STD3_mapped",
		[
			40,
			26376,
			41
		]
	],
	[
		[
			12843,
			12843
		],
		"disallowed_STD3_mapped",
		[
			40,
			28779,
			41
		]
	],
	[
		[
			12844,
			12844
		],
		"disallowed_STD3_mapped",
		[
			40,
			27700,
			41
		]
	],
	[
		[
			12845,
			12845
		],
		"disallowed_STD3_mapped",
		[
			40,
			26408,
			41
		]
	],
	[
		[
			12846,
			12846
		],
		"disallowed_STD3_mapped",
		[
			40,
			37329,
			41
		]
	],
	[
		[
			12847,
			12847
		],
		"disallowed_STD3_mapped",
		[
			40,
			22303,
			41
		]
	],
	[
		[
			12848,
			12848
		],
		"disallowed_STD3_mapped",
		[
			40,
			26085,
			41
		]
	],
	[
		[
			12849,
			12849
		],
		"disallowed_STD3_mapped",
		[
			40,
			26666,
			41
		]
	],
	[
		[
			12850,
			12850
		],
		"disallowed_STD3_mapped",
		[
			40,
			26377,
			41
		]
	],
	[
		[
			12851,
			12851
		],
		"disallowed_STD3_mapped",
		[
			40,
			31038,
			41
		]
	],
	[
		[
			12852,
			12852
		],
		"disallowed_STD3_mapped",
		[
			40,
			21517,
			41
		]
	],
	[
		[
			12853,
			12853
		],
		"disallowed_STD3_mapped",
		[
			40,
			29305,
			41
		]
	],
	[
		[
			12854,
			12854
		],
		"disallowed_STD3_mapped",
		[
			40,
			36001,
			41
		]
	],
	[
		[
			12855,
			12855
		],
		"disallowed_STD3_mapped",
		[
			40,
			31069,
			41
		]
	],
	[
		[
			12856,
			12856
		],
		"disallowed_STD3_mapped",
		[
			40,
			21172,
			41
		]
	],
	[
		[
			12857,
			12857
		],
		"disallowed_STD3_mapped",
		[
			40,
			20195,
			41
		]
	],
	[
		[
			12858,
			12858
		],
		"disallowed_STD3_mapped",
		[
			40,
			21628,
			41
		]
	],
	[
		[
			12859,
			12859
		],
		"disallowed_STD3_mapped",
		[
			40,
			23398,
			41
		]
	],
	[
		[
			12860,
			12860
		],
		"disallowed_STD3_mapped",
		[
			40,
			30435,
			41
		]
	],
	[
		[
			12861,
			12861
		],
		"disallowed_STD3_mapped",
		[
			40,
			20225,
			41
		]
	],
	[
		[
			12862,
			12862
		],
		"disallowed_STD3_mapped",
		[
			40,
			36039,
			41
		]
	],
	[
		[
			12863,
			12863
		],
		"disallowed_STD3_mapped",
		[
			40,
			21332,
			41
		]
	],
	[
		[
			12864,
			12864
		],
		"disallowed_STD3_mapped",
		[
			40,
			31085,
			41
		]
	],
	[
		[
			12865,
			12865
		],
		"disallowed_STD3_mapped",
		[
			40,
			20241,
			41
		]
	],
	[
		[
			12866,
			12866
		],
		"disallowed_STD3_mapped",
		[
			40,
			33258,
			41
		]
	],
	[
		[
			12867,
			12867
		],
		"disallowed_STD3_mapped",
		[
			40,
			33267,
			41
		]
	],
	[
		[
			12868,
			12868
		],
		"mapped",
		[
			21839
		]
	],
	[
		[
			12869,
			12869
		],
		"mapped",
		[
			24188
		]
	],
	[
		[
			12870,
			12870
		],
		"mapped",
		[
			25991
		]
	],
	[
		[
			12871,
			12871
		],
		"mapped",
		[
			31631
		]
	],
	[
		[
			12872,
			12879
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12880,
			12880
		],
		"mapped",
		[
			112,
			116,
			101
		]
	],
	[
		[
			12881,
			12881
		],
		"mapped",
		[
			50,
			49
		]
	],
	[
		[
			12882,
			12882
		],
		"mapped",
		[
			50,
			50
		]
	],
	[
		[
			12883,
			12883
		],
		"mapped",
		[
			50,
			51
		]
	],
	[
		[
			12884,
			12884
		],
		"mapped",
		[
			50,
			52
		]
	],
	[
		[
			12885,
			12885
		],
		"mapped",
		[
			50,
			53
		]
	],
	[
		[
			12886,
			12886
		],
		"mapped",
		[
			50,
			54
		]
	],
	[
		[
			12887,
			12887
		],
		"mapped",
		[
			50,
			55
		]
	],
	[
		[
			12888,
			12888
		],
		"mapped",
		[
			50,
			56
		]
	],
	[
		[
			12889,
			12889
		],
		"mapped",
		[
			50,
			57
		]
	],
	[
		[
			12890,
			12890
		],
		"mapped",
		[
			51,
			48
		]
	],
	[
		[
			12891,
			12891
		],
		"mapped",
		[
			51,
			49
		]
	],
	[
		[
			12892,
			12892
		],
		"mapped",
		[
			51,
			50
		]
	],
	[
		[
			12893,
			12893
		],
		"mapped",
		[
			51,
			51
		]
	],
	[
		[
			12894,
			12894
		],
		"mapped",
		[
			51,
			52
		]
	],
	[
		[
			12895,
			12895
		],
		"mapped",
		[
			51,
			53
		]
	],
	[
		[
			12896,
			12896
		],
		"mapped",
		[
			4352
		]
	],
	[
		[
			12897,
			12897
		],
		"mapped",
		[
			4354
		]
	],
	[
		[
			12898,
			12898
		],
		"mapped",
		[
			4355
		]
	],
	[
		[
			12899,
			12899
		],
		"mapped",
		[
			4357
		]
	],
	[
		[
			12900,
			12900
		],
		"mapped",
		[
			4358
		]
	],
	[
		[
			12901,
			12901
		],
		"mapped",
		[
			4359
		]
	],
	[
		[
			12902,
			12902
		],
		"mapped",
		[
			4361
		]
	],
	[
		[
			12903,
			12903
		],
		"mapped",
		[
			4363
		]
	],
	[
		[
			12904,
			12904
		],
		"mapped",
		[
			4364
		]
	],
	[
		[
			12905,
			12905
		],
		"mapped",
		[
			4366
		]
	],
	[
		[
			12906,
			12906
		],
		"mapped",
		[
			4367
		]
	],
	[
		[
			12907,
			12907
		],
		"mapped",
		[
			4368
		]
	],
	[
		[
			12908,
			12908
		],
		"mapped",
		[
			4369
		]
	],
	[
		[
			12909,
			12909
		],
		"mapped",
		[
			4370
		]
	],
	[
		[
			12910,
			12910
		],
		"mapped",
		[
			44032
		]
	],
	[
		[
			12911,
			12911
		],
		"mapped",
		[
			45208
		]
	],
	[
		[
			12912,
			12912
		],
		"mapped",
		[
			45796
		]
	],
	[
		[
			12913,
			12913
		],
		"mapped",
		[
			46972
		]
	],
	[
		[
			12914,
			12914
		],
		"mapped",
		[
			47560
		]
	],
	[
		[
			12915,
			12915
		],
		"mapped",
		[
			48148
		]
	],
	[
		[
			12916,
			12916
		],
		"mapped",
		[
			49324
		]
	],
	[
		[
			12917,
			12917
		],
		"mapped",
		[
			50500
		]
	],
	[
		[
			12918,
			12918
		],
		"mapped",
		[
			51088
		]
	],
	[
		[
			12919,
			12919
		],
		"mapped",
		[
			52264
		]
	],
	[
		[
			12920,
			12920
		],
		"mapped",
		[
			52852
		]
	],
	[
		[
			12921,
			12921
		],
		"mapped",
		[
			53440
		]
	],
	[
		[
			12922,
			12922
		],
		"mapped",
		[
			54028
		]
	],
	[
		[
			12923,
			12923
		],
		"mapped",
		[
			54616
		]
	],
	[
		[
			12924,
			12924
		],
		"mapped",
		[
			52280,
			44256
		]
	],
	[
		[
			12925,
			12925
		],
		"mapped",
		[
			51452,
			51032
		]
	],
	[
		[
			12926,
			12926
		],
		"mapped",
		[
			50864
		]
	],
	[
		[
			12927,
			12927
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			12928,
			12928
		],
		"mapped",
		[
			19968
		]
	],
	[
		[
			12929,
			12929
		],
		"mapped",
		[
			20108
		]
	],
	[
		[
			12930,
			12930
		],
		"mapped",
		[
			19977
		]
	],
	[
		[
			12931,
			12931
		],
		"mapped",
		[
			22235
		]
	],
	[
		[
			12932,
			12932
		],
		"mapped",
		[
			20116
		]
	],
	[
		[
			12933,
			12933
		],
		"mapped",
		[
			20845
		]
	],
	[
		[
			12934,
			12934
		],
		"mapped",
		[
			19971
		]
	],
	[
		[
			12935,
			12935
		],
		"mapped",
		[
			20843
		]
	],
	[
		[
			12936,
			12936
		],
		"mapped",
		[
			20061
		]
	],
	[
		[
			12937,
			12937
		],
		"mapped",
		[
			21313
		]
	],
	[
		[
			12938,
			12938
		],
		"mapped",
		[
			26376
		]
	],
	[
		[
			12939,
			12939
		],
		"mapped",
		[
			28779
		]
	],
	[
		[
			12940,
			12940
		],
		"mapped",
		[
			27700
		]
	],
	[
		[
			12941,
			12941
		],
		"mapped",
		[
			26408
		]
	],
	[
		[
			12942,
			12942
		],
		"mapped",
		[
			37329
		]
	],
	[
		[
			12943,
			12943
		],
		"mapped",
		[
			22303
		]
	],
	[
		[
			12944,
			12944
		],
		"mapped",
		[
			26085
		]
	],
	[
		[
			12945,
			12945
		],
		"mapped",
		[
			26666
		]
	],
	[
		[
			12946,
			12946
		],
		"mapped",
		[
			26377
		]
	],
	[
		[
			12947,
			12947
		],
		"mapped",
		[
			31038
		]
	],
	[
		[
			12948,
			12948
		],
		"mapped",
		[
			21517
		]
	],
	[
		[
			12949,
			12949
		],
		"mapped",
		[
			29305
		]
	],
	[
		[
			12950,
			12950
		],
		"mapped",
		[
			36001
		]
	],
	[
		[
			12951,
			12951
		],
		"mapped",
		[
			31069
		]
	],
	[
		[
			12952,
			12952
		],
		"mapped",
		[
			21172
		]
	],
	[
		[
			12953,
			12953
		],
		"mapped",
		[
			31192
		]
	],
	[
		[
			12954,
			12954
		],
		"mapped",
		[
			30007
		]
	],
	[
		[
			12955,
			12955
		],
		"mapped",
		[
			22899
		]
	],
	[
		[
			12956,
			12956
		],
		"mapped",
		[
			36969
		]
	],
	[
		[
			12957,
			12957
		],
		"mapped",
		[
			20778
		]
	],
	[
		[
			12958,
			12958
		],
		"mapped",
		[
			21360
		]
	],
	[
		[
			12959,
			12959
		],
		"mapped",
		[
			27880
		]
	],
	[
		[
			12960,
			12960
		],
		"mapped",
		[
			38917
		]
	],
	[
		[
			12961,
			12961
		],
		"mapped",
		[
			20241
		]
	],
	[
		[
			12962,
			12962
		],
		"mapped",
		[
			20889
		]
	],
	[
		[
			12963,
			12963
		],
		"mapped",
		[
			27491
		]
	],
	[
		[
			12964,
			12964
		],
		"mapped",
		[
			19978
		]
	],
	[
		[
			12965,
			12965
		],
		"mapped",
		[
			20013
		]
	],
	[
		[
			12966,
			12966
		],
		"mapped",
		[
			19979
		]
	],
	[
		[
			12967,
			12967
		],
		"mapped",
		[
			24038
		]
	],
	[
		[
			12968,
			12968
		],
		"mapped",
		[
			21491
		]
	],
	[
		[
			12969,
			12969
		],
		"mapped",
		[
			21307
		]
	],
	[
		[
			12970,
			12970
		],
		"mapped",
		[
			23447
		]
	],
	[
		[
			12971,
			12971
		],
		"mapped",
		[
			23398
		]
	],
	[
		[
			12972,
			12972
		],
		"mapped",
		[
			30435
		]
	],
	[
		[
			12973,
			12973
		],
		"mapped",
		[
			20225
		]
	],
	[
		[
			12974,
			12974
		],
		"mapped",
		[
			36039
		]
	],
	[
		[
			12975,
			12975
		],
		"mapped",
		[
			21332
		]
	],
	[
		[
			12976,
			12976
		],
		"mapped",
		[
			22812
		]
	],
	[
		[
			12977,
			12977
		],
		"mapped",
		[
			51,
			54
		]
	],
	[
		[
			12978,
			12978
		],
		"mapped",
		[
			51,
			55
		]
	],
	[
		[
			12979,
			12979
		],
		"mapped",
		[
			51,
			56
		]
	],
	[
		[
			12980,
			12980
		],
		"mapped",
		[
			51,
			57
		]
	],
	[
		[
			12981,
			12981
		],
		"mapped",
		[
			52,
			48
		]
	],
	[
		[
			12982,
			12982
		],
		"mapped",
		[
			52,
			49
		]
	],
	[
		[
			12983,
			12983
		],
		"mapped",
		[
			52,
			50
		]
	],
	[
		[
			12984,
			12984
		],
		"mapped",
		[
			52,
			51
		]
	],
	[
		[
			12985,
			12985
		],
		"mapped",
		[
			52,
			52
		]
	],
	[
		[
			12986,
			12986
		],
		"mapped",
		[
			52,
			53
		]
	],
	[
		[
			12987,
			12987
		],
		"mapped",
		[
			52,
			54
		]
	],
	[
		[
			12988,
			12988
		],
		"mapped",
		[
			52,
			55
		]
	],
	[
		[
			12989,
			12989
		],
		"mapped",
		[
			52,
			56
		]
	],
	[
		[
			12990,
			12990
		],
		"mapped",
		[
			52,
			57
		]
	],
	[
		[
			12991,
			12991
		],
		"mapped",
		[
			53,
			48
		]
	],
	[
		[
			12992,
			12992
		],
		"mapped",
		[
			49,
			26376
		]
	],
	[
		[
			12993,
			12993
		],
		"mapped",
		[
			50,
			26376
		]
	],
	[
		[
			12994,
			12994
		],
		"mapped",
		[
			51,
			26376
		]
	],
	[
		[
			12995,
			12995
		],
		"mapped",
		[
			52,
			26376
		]
	],
	[
		[
			12996,
			12996
		],
		"mapped",
		[
			53,
			26376
		]
	],
	[
		[
			12997,
			12997
		],
		"mapped",
		[
			54,
			26376
		]
	],
	[
		[
			12998,
			12998
		],
		"mapped",
		[
			55,
			26376
		]
	],
	[
		[
			12999,
			12999
		],
		"mapped",
		[
			56,
			26376
		]
	],
	[
		[
			13000,
			13000
		],
		"mapped",
		[
			57,
			26376
		]
	],
	[
		[
			13001,
			13001
		],
		"mapped",
		[
			49,
			48,
			26376
		]
	],
	[
		[
			13002,
			13002
		],
		"mapped",
		[
			49,
			49,
			26376
		]
	],
	[
		[
			13003,
			13003
		],
		"mapped",
		[
			49,
			50,
			26376
		]
	],
	[
		[
			13004,
			13004
		],
		"mapped",
		[
			104,
			103
		]
	],
	[
		[
			13005,
			13005
		],
		"mapped",
		[
			101,
			114,
			103
		]
	],
	[
		[
			13006,
			13006
		],
		"mapped",
		[
			101,
			118
		]
	],
	[
		[
			13007,
			13007
		],
		"mapped",
		[
			108,
			116,
			100
		]
	],
	[
		[
			13008,
			13008
		],
		"mapped",
		[
			12450
		]
	],
	[
		[
			13009,
			13009
		],
		"mapped",
		[
			12452
		]
	],
	[
		[
			13010,
			13010
		],
		"mapped",
		[
			12454
		]
	],
	[
		[
			13011,
			13011
		],
		"mapped",
		[
			12456
		]
	],
	[
		[
			13012,
			13012
		],
		"mapped",
		[
			12458
		]
	],
	[
		[
			13013,
			13013
		],
		"mapped",
		[
			12459
		]
	],
	[
		[
			13014,
			13014
		],
		"mapped",
		[
			12461
		]
	],
	[
		[
			13015,
			13015
		],
		"mapped",
		[
			12463
		]
	],
	[
		[
			13016,
			13016
		],
		"mapped",
		[
			12465
		]
	],
	[
		[
			13017,
			13017
		],
		"mapped",
		[
			12467
		]
	],
	[
		[
			13018,
			13018
		],
		"mapped",
		[
			12469
		]
	],
	[
		[
			13019,
			13019
		],
		"mapped",
		[
			12471
		]
	],
	[
		[
			13020,
			13020
		],
		"mapped",
		[
			12473
		]
	],
	[
		[
			13021,
			13021
		],
		"mapped",
		[
			12475
		]
	],
	[
		[
			13022,
			13022
		],
		"mapped",
		[
			12477
		]
	],
	[
		[
			13023,
			13023
		],
		"mapped",
		[
			12479
		]
	],
	[
		[
			13024,
			13024
		],
		"mapped",
		[
			12481
		]
	],
	[
		[
			13025,
			13025
		],
		"mapped",
		[
			12484
		]
	],
	[
		[
			13026,
			13026
		],
		"mapped",
		[
			12486
		]
	],
	[
		[
			13027,
			13027
		],
		"mapped",
		[
			12488
		]
	],
	[
		[
			13028,
			13028
		],
		"mapped",
		[
			12490
		]
	],
	[
		[
			13029,
			13029
		],
		"mapped",
		[
			12491
		]
	],
	[
		[
			13030,
			13030
		],
		"mapped",
		[
			12492
		]
	],
	[
		[
			13031,
			13031
		],
		"mapped",
		[
			12493
		]
	],
	[
		[
			13032,
			13032
		],
		"mapped",
		[
			12494
		]
	],
	[
		[
			13033,
			13033
		],
		"mapped",
		[
			12495
		]
	],
	[
		[
			13034,
			13034
		],
		"mapped",
		[
			12498
		]
	],
	[
		[
			13035,
			13035
		],
		"mapped",
		[
			12501
		]
	],
	[
		[
			13036,
			13036
		],
		"mapped",
		[
			12504
		]
	],
	[
		[
			13037,
			13037
		],
		"mapped",
		[
			12507
		]
	],
	[
		[
			13038,
			13038
		],
		"mapped",
		[
			12510
		]
	],
	[
		[
			13039,
			13039
		],
		"mapped",
		[
			12511
		]
	],
	[
		[
			13040,
			13040
		],
		"mapped",
		[
			12512
		]
	],
	[
		[
			13041,
			13041
		],
		"mapped",
		[
			12513
		]
	],
	[
		[
			13042,
			13042
		],
		"mapped",
		[
			12514
		]
	],
	[
		[
			13043,
			13043
		],
		"mapped",
		[
			12516
		]
	],
	[
		[
			13044,
			13044
		],
		"mapped",
		[
			12518
		]
	],
	[
		[
			13045,
			13045
		],
		"mapped",
		[
			12520
		]
	],
	[
		[
			13046,
			13046
		],
		"mapped",
		[
			12521
		]
	],
	[
		[
			13047,
			13047
		],
		"mapped",
		[
			12522
		]
	],
	[
		[
			13048,
			13048
		],
		"mapped",
		[
			12523
		]
	],
	[
		[
			13049,
			13049
		],
		"mapped",
		[
			12524
		]
	],
	[
		[
			13050,
			13050
		],
		"mapped",
		[
			12525
		]
	],
	[
		[
			13051,
			13051
		],
		"mapped",
		[
			12527
		]
	],
	[
		[
			13052,
			13052
		],
		"mapped",
		[
			12528
		]
	],
	[
		[
			13053,
			13053
		],
		"mapped",
		[
			12529
		]
	],
	[
		[
			13054,
			13054
		],
		"mapped",
		[
			12530
		]
	],
	[
		[
			13055,
			13055
		],
		"disallowed"
	],
	[
		[
			13056,
			13056
		],
		"mapped",
		[
			12450,
			12497,
			12540,
			12488
		]
	],
	[
		[
			13057,
			13057
		],
		"mapped",
		[
			12450,
			12523,
			12501,
			12449
		]
	],
	[
		[
			13058,
			13058
		],
		"mapped",
		[
			12450,
			12531,
			12506,
			12450
		]
	],
	[
		[
			13059,
			13059
		],
		"mapped",
		[
			12450,
			12540,
			12523
		]
	],
	[
		[
			13060,
			13060
		],
		"mapped",
		[
			12452,
			12491,
			12531,
			12464
		]
	],
	[
		[
			13061,
			13061
		],
		"mapped",
		[
			12452,
			12531,
			12481
		]
	],
	[
		[
			13062,
			13062
		],
		"mapped",
		[
			12454,
			12457,
			12531
		]
	],
	[
		[
			13063,
			13063
		],
		"mapped",
		[
			12456,
			12473,
			12463,
			12540,
			12489
		]
	],
	[
		[
			13064,
			13064
		],
		"mapped",
		[
			12456,
			12540,
			12459,
			12540
		]
	],
	[
		[
			13065,
			13065
		],
		"mapped",
		[
			12458,
			12531,
			12473
		]
	],
	[
		[
			13066,
			13066
		],
		"mapped",
		[
			12458,
			12540,
			12512
		]
	],
	[
		[
			13067,
			13067
		],
		"mapped",
		[
			12459,
			12452,
			12522
		]
	],
	[
		[
			13068,
			13068
		],
		"mapped",
		[
			12459,
			12521,
			12483,
			12488
		]
	],
	[
		[
			13069,
			13069
		],
		"mapped",
		[
			12459,
			12525,
			12522,
			12540
		]
	],
	[
		[
			13070,
			13070
		],
		"mapped",
		[
			12460,
			12525,
			12531
		]
	],
	[
		[
			13071,
			13071
		],
		"mapped",
		[
			12460,
			12531,
			12510
		]
	],
	[
		[
			13072,
			13072
		],
		"mapped",
		[
			12462,
			12460
		]
	],
	[
		[
			13073,
			13073
		],
		"mapped",
		[
			12462,
			12491,
			12540
		]
	],
	[
		[
			13074,
			13074
		],
		"mapped",
		[
			12461,
			12517,
			12522,
			12540
		]
	],
	[
		[
			13075,
			13075
		],
		"mapped",
		[
			12462,
			12523,
			12480,
			12540
		]
	],
	[
		[
			13076,
			13076
		],
		"mapped",
		[
			12461,
			12525
		]
	],
	[
		[
			13077,
			13077
		],
		"mapped",
		[
			12461,
			12525,
			12464,
			12521,
			12512
		]
	],
	[
		[
			13078,
			13078
		],
		"mapped",
		[
			12461,
			12525,
			12513,
			12540,
			12488,
			12523
		]
	],
	[
		[
			13079,
			13079
		],
		"mapped",
		[
			12461,
			12525,
			12527,
			12483,
			12488
		]
	],
	[
		[
			13080,
			13080
		],
		"mapped",
		[
			12464,
			12521,
			12512
		]
	],
	[
		[
			13081,
			13081
		],
		"mapped",
		[
			12464,
			12521,
			12512,
			12488,
			12531
		]
	],
	[
		[
			13082,
			13082
		],
		"mapped",
		[
			12463,
			12523,
			12476,
			12452,
			12525
		]
	],
	[
		[
			13083,
			13083
		],
		"mapped",
		[
			12463,
			12525,
			12540,
			12493
		]
	],
	[
		[
			13084,
			13084
		],
		"mapped",
		[
			12465,
			12540,
			12473
		]
	],
	[
		[
			13085,
			13085
		],
		"mapped",
		[
			12467,
			12523,
			12490
		]
	],
	[
		[
			13086,
			13086
		],
		"mapped",
		[
			12467,
			12540,
			12509
		]
	],
	[
		[
			13087,
			13087
		],
		"mapped",
		[
			12469,
			12452,
			12463,
			12523
		]
	],
	[
		[
			13088,
			13088
		],
		"mapped",
		[
			12469,
			12531,
			12481,
			12540,
			12512
		]
	],
	[
		[
			13089,
			13089
		],
		"mapped",
		[
			12471,
			12522,
			12531,
			12464
		]
	],
	[
		[
			13090,
			13090
		],
		"mapped",
		[
			12475,
			12531,
			12481
		]
	],
	[
		[
			13091,
			13091
		],
		"mapped",
		[
			12475,
			12531,
			12488
		]
	],
	[
		[
			13092,
			13092
		],
		"mapped",
		[
			12480,
			12540,
			12473
		]
	],
	[
		[
			13093,
			13093
		],
		"mapped",
		[
			12487,
			12471
		]
	],
	[
		[
			13094,
			13094
		],
		"mapped",
		[
			12489,
			12523
		]
	],
	[
		[
			13095,
			13095
		],
		"mapped",
		[
			12488,
			12531
		]
	],
	[
		[
			13096,
			13096
		],
		"mapped",
		[
			12490,
			12494
		]
	],
	[
		[
			13097,
			13097
		],
		"mapped",
		[
			12494,
			12483,
			12488
		]
	],
	[
		[
			13098,
			13098
		],
		"mapped",
		[
			12495,
			12452,
			12484
		]
	],
	[
		[
			13099,
			13099
		],
		"mapped",
		[
			12497,
			12540,
			12475,
			12531,
			12488
		]
	],
	[
		[
			13100,
			13100
		],
		"mapped",
		[
			12497,
			12540,
			12484
		]
	],
	[
		[
			13101,
			13101
		],
		"mapped",
		[
			12496,
			12540,
			12524,
			12523
		]
	],
	[
		[
			13102,
			13102
		],
		"mapped",
		[
			12500,
			12450,
			12473,
			12488,
			12523
		]
	],
	[
		[
			13103,
			13103
		],
		"mapped",
		[
			12500,
			12463,
			12523
		]
	],
	[
		[
			13104,
			13104
		],
		"mapped",
		[
			12500,
			12467
		]
	],
	[
		[
			13105,
			13105
		],
		"mapped",
		[
			12499,
			12523
		]
	],
	[
		[
			13106,
			13106
		],
		"mapped",
		[
			12501,
			12449,
			12521,
			12483,
			12489
		]
	],
	[
		[
			13107,
			13107
		],
		"mapped",
		[
			12501,
			12451,
			12540,
			12488
		]
	],
	[
		[
			13108,
			13108
		],
		"mapped",
		[
			12502,
			12483,
			12471,
			12455,
			12523
		]
	],
	[
		[
			13109,
			13109
		],
		"mapped",
		[
			12501,
			12521,
			12531
		]
	],
	[
		[
			13110,
			13110
		],
		"mapped",
		[
			12504,
			12463,
			12479,
			12540,
			12523
		]
	],
	[
		[
			13111,
			13111
		],
		"mapped",
		[
			12506,
			12477
		]
	],
	[
		[
			13112,
			13112
		],
		"mapped",
		[
			12506,
			12491,
			12498
		]
	],
	[
		[
			13113,
			13113
		],
		"mapped",
		[
			12504,
			12523,
			12484
		]
	],
	[
		[
			13114,
			13114
		],
		"mapped",
		[
			12506,
			12531,
			12473
		]
	],
	[
		[
			13115,
			13115
		],
		"mapped",
		[
			12506,
			12540,
			12472
		]
	],
	[
		[
			13116,
			13116
		],
		"mapped",
		[
			12505,
			12540,
			12479
		]
	],
	[
		[
			13117,
			13117
		],
		"mapped",
		[
			12509,
			12452,
			12531,
			12488
		]
	],
	[
		[
			13118,
			13118
		],
		"mapped",
		[
			12508,
			12523,
			12488
		]
	],
	[
		[
			13119,
			13119
		],
		"mapped",
		[
			12507,
			12531
		]
	],
	[
		[
			13120,
			13120
		],
		"mapped",
		[
			12509,
			12531,
			12489
		]
	],
	[
		[
			13121,
			13121
		],
		"mapped",
		[
			12507,
			12540,
			12523
		]
	],
	[
		[
			13122,
			13122
		],
		"mapped",
		[
			12507,
			12540,
			12531
		]
	],
	[
		[
			13123,
			13123
		],
		"mapped",
		[
			12510,
			12452,
			12463,
			12525
		]
	],
	[
		[
			13124,
			13124
		],
		"mapped",
		[
			12510,
			12452,
			12523
		]
	],
	[
		[
			13125,
			13125
		],
		"mapped",
		[
			12510,
			12483,
			12495
		]
	],
	[
		[
			13126,
			13126
		],
		"mapped",
		[
			12510,
			12523,
			12463
		]
	],
	[
		[
			13127,
			13127
		],
		"mapped",
		[
			12510,
			12531,
			12471,
			12519,
			12531
		]
	],
	[
		[
			13128,
			13128
		],
		"mapped",
		[
			12511,
			12463,
			12525,
			12531
		]
	],
	[
		[
			13129,
			13129
		],
		"mapped",
		[
			12511,
			12522
		]
	],
	[
		[
			13130,
			13130
		],
		"mapped",
		[
			12511,
			12522,
			12496,
			12540,
			12523
		]
	],
	[
		[
			13131,
			13131
		],
		"mapped",
		[
			12513,
			12460
		]
	],
	[
		[
			13132,
			13132
		],
		"mapped",
		[
			12513,
			12460,
			12488,
			12531
		]
	],
	[
		[
			13133,
			13133
		],
		"mapped",
		[
			12513,
			12540,
			12488,
			12523
		]
	],
	[
		[
			13134,
			13134
		],
		"mapped",
		[
			12516,
			12540,
			12489
		]
	],
	[
		[
			13135,
			13135
		],
		"mapped",
		[
			12516,
			12540,
			12523
		]
	],
	[
		[
			13136,
			13136
		],
		"mapped",
		[
			12518,
			12450,
			12531
		]
	],
	[
		[
			13137,
			13137
		],
		"mapped",
		[
			12522,
			12483,
			12488,
			12523
		]
	],
	[
		[
			13138,
			13138
		],
		"mapped",
		[
			12522,
			12521
		]
	],
	[
		[
			13139,
			13139
		],
		"mapped",
		[
			12523,
			12500,
			12540
		]
	],
	[
		[
			13140,
			13140
		],
		"mapped",
		[
			12523,
			12540,
			12502,
			12523
		]
	],
	[
		[
			13141,
			13141
		],
		"mapped",
		[
			12524,
			12512
		]
	],
	[
		[
			13142,
			13142
		],
		"mapped",
		[
			12524,
			12531,
			12488,
			12466,
			12531
		]
	],
	[
		[
			13143,
			13143
		],
		"mapped",
		[
			12527,
			12483,
			12488
		]
	],
	[
		[
			13144,
			13144
		],
		"mapped",
		[
			48,
			28857
		]
	],
	[
		[
			13145,
			13145
		],
		"mapped",
		[
			49,
			28857
		]
	],
	[
		[
			13146,
			13146
		],
		"mapped",
		[
			50,
			28857
		]
	],
	[
		[
			13147,
			13147
		],
		"mapped",
		[
			51,
			28857
		]
	],
	[
		[
			13148,
			13148
		],
		"mapped",
		[
			52,
			28857
		]
	],
	[
		[
			13149,
			13149
		],
		"mapped",
		[
			53,
			28857
		]
	],
	[
		[
			13150,
			13150
		],
		"mapped",
		[
			54,
			28857
		]
	],
	[
		[
			13151,
			13151
		],
		"mapped",
		[
			55,
			28857
		]
	],
	[
		[
			13152,
			13152
		],
		"mapped",
		[
			56,
			28857
		]
	],
	[
		[
			13153,
			13153
		],
		"mapped",
		[
			57,
			28857
		]
	],
	[
		[
			13154,
			13154
		],
		"mapped",
		[
			49,
			48,
			28857
		]
	],
	[
		[
			13155,
			13155
		],
		"mapped",
		[
			49,
			49,
			28857
		]
	],
	[
		[
			13156,
			13156
		],
		"mapped",
		[
			49,
			50,
			28857
		]
	],
	[
		[
			13157,
			13157
		],
		"mapped",
		[
			49,
			51,
			28857
		]
	],
	[
		[
			13158,
			13158
		],
		"mapped",
		[
			49,
			52,
			28857
		]
	],
	[
		[
			13159,
			13159
		],
		"mapped",
		[
			49,
			53,
			28857
		]
	],
	[
		[
			13160,
			13160
		],
		"mapped",
		[
			49,
			54,
			28857
		]
	],
	[
		[
			13161,
			13161
		],
		"mapped",
		[
			49,
			55,
			28857
		]
	],
	[
		[
			13162,
			13162
		],
		"mapped",
		[
			49,
			56,
			28857
		]
	],
	[
		[
			13163,
			13163
		],
		"mapped",
		[
			49,
			57,
			28857
		]
	],
	[
		[
			13164,
			13164
		],
		"mapped",
		[
			50,
			48,
			28857
		]
	],
	[
		[
			13165,
			13165
		],
		"mapped",
		[
			50,
			49,
			28857
		]
	],
	[
		[
			13166,
			13166
		],
		"mapped",
		[
			50,
			50,
			28857
		]
	],
	[
		[
			13167,
			13167
		],
		"mapped",
		[
			50,
			51,
			28857
		]
	],
	[
		[
			13168,
			13168
		],
		"mapped",
		[
			50,
			52,
			28857
		]
	],
	[
		[
			13169,
			13169
		],
		"mapped",
		[
			104,
			112,
			97
		]
	],
	[
		[
			13170,
			13170
		],
		"mapped",
		[
			100,
			97
		]
	],
	[
		[
			13171,
			13171
		],
		"mapped",
		[
			97,
			117
		]
	],
	[
		[
			13172,
			13172
		],
		"mapped",
		[
			98,
			97,
			114
		]
	],
	[
		[
			13173,
			13173
		],
		"mapped",
		[
			111,
			118
		]
	],
	[
		[
			13174,
			13174
		],
		"mapped",
		[
			112,
			99
		]
	],
	[
		[
			13175,
			13175
		],
		"mapped",
		[
			100,
			109
		]
	],
	[
		[
			13176,
			13176
		],
		"mapped",
		[
			100,
			109,
			50
		]
	],
	[
		[
			13177,
			13177
		],
		"mapped",
		[
			100,
			109,
			51
		]
	],
	[
		[
			13178,
			13178
		],
		"mapped",
		[
			105,
			117
		]
	],
	[
		[
			13179,
			13179
		],
		"mapped",
		[
			24179,
			25104
		]
	],
	[
		[
			13180,
			13180
		],
		"mapped",
		[
			26157,
			21644
		]
	],
	[
		[
			13181,
			13181
		],
		"mapped",
		[
			22823,
			27491
		]
	],
	[
		[
			13182,
			13182
		],
		"mapped",
		[
			26126,
			27835
		]
	],
	[
		[
			13183,
			13183
		],
		"mapped",
		[
			26666,
			24335,
			20250,
			31038
		]
	],
	[
		[
			13184,
			13184
		],
		"mapped",
		[
			112,
			97
		]
	],
	[
		[
			13185,
			13185
		],
		"mapped",
		[
			110,
			97
		]
	],
	[
		[
			13186,
			13186
		],
		"mapped",
		[
			956,
			97
		]
	],
	[
		[
			13187,
			13187
		],
		"mapped",
		[
			109,
			97
		]
	],
	[
		[
			13188,
			13188
		],
		"mapped",
		[
			107,
			97
		]
	],
	[
		[
			13189,
			13189
		],
		"mapped",
		[
			107,
			98
		]
	],
	[
		[
			13190,
			13190
		],
		"mapped",
		[
			109,
			98
		]
	],
	[
		[
			13191,
			13191
		],
		"mapped",
		[
			103,
			98
		]
	],
	[
		[
			13192,
			13192
		],
		"mapped",
		[
			99,
			97,
			108
		]
	],
	[
		[
			13193,
			13193
		],
		"mapped",
		[
			107,
			99,
			97,
			108
		]
	],
	[
		[
			13194,
			13194
		],
		"mapped",
		[
			112,
			102
		]
	],
	[
		[
			13195,
			13195
		],
		"mapped",
		[
			110,
			102
		]
	],
	[
		[
			13196,
			13196
		],
		"mapped",
		[
			956,
			102
		]
	],
	[
		[
			13197,
			13197
		],
		"mapped",
		[
			956,
			103
		]
	],
	[
		[
			13198,
			13198
		],
		"mapped",
		[
			109,
			103
		]
	],
	[
		[
			13199,
			13199
		],
		"mapped",
		[
			107,
			103
		]
	],
	[
		[
			13200,
			13200
		],
		"mapped",
		[
			104,
			122
		]
	],
	[
		[
			13201,
			13201
		],
		"mapped",
		[
			107,
			104,
			122
		]
	],
	[
		[
			13202,
			13202
		],
		"mapped",
		[
			109,
			104,
			122
		]
	],
	[
		[
			13203,
			13203
		],
		"mapped",
		[
			103,
			104,
			122
		]
	],
	[
		[
			13204,
			13204
		],
		"mapped",
		[
			116,
			104,
			122
		]
	],
	[
		[
			13205,
			13205
		],
		"mapped",
		[
			956,
			108
		]
	],
	[
		[
			13206,
			13206
		],
		"mapped",
		[
			109,
			108
		]
	],
	[
		[
			13207,
			13207
		],
		"mapped",
		[
			100,
			108
		]
	],
	[
		[
			13208,
			13208
		],
		"mapped",
		[
			107,
			108
		]
	],
	[
		[
			13209,
			13209
		],
		"mapped",
		[
			102,
			109
		]
	],
	[
		[
			13210,
			13210
		],
		"mapped",
		[
			110,
			109
		]
	],
	[
		[
			13211,
			13211
		],
		"mapped",
		[
			956,
			109
		]
	],
	[
		[
			13212,
			13212
		],
		"mapped",
		[
			109,
			109
		]
	],
	[
		[
			13213,
			13213
		],
		"mapped",
		[
			99,
			109
		]
	],
	[
		[
			13214,
			13214
		],
		"mapped",
		[
			107,
			109
		]
	],
	[
		[
			13215,
			13215
		],
		"mapped",
		[
			109,
			109,
			50
		]
	],
	[
		[
			13216,
			13216
		],
		"mapped",
		[
			99,
			109,
			50
		]
	],
	[
		[
			13217,
			13217
		],
		"mapped",
		[
			109,
			50
		]
	],
	[
		[
			13218,
			13218
		],
		"mapped",
		[
			107,
			109,
			50
		]
	],
	[
		[
			13219,
			13219
		],
		"mapped",
		[
			109,
			109,
			51
		]
	],
	[
		[
			13220,
			13220
		],
		"mapped",
		[
			99,
			109,
			51
		]
	],
	[
		[
			13221,
			13221
		],
		"mapped",
		[
			109,
			51
		]
	],
	[
		[
			13222,
			13222
		],
		"mapped",
		[
			107,
			109,
			51
		]
	],
	[
		[
			13223,
			13223
		],
		"mapped",
		[
			109,
			8725,
			115
		]
	],
	[
		[
			13224,
			13224
		],
		"mapped",
		[
			109,
			8725,
			115,
			50
		]
	],
	[
		[
			13225,
			13225
		],
		"mapped",
		[
			112,
			97
		]
	],
	[
		[
			13226,
			13226
		],
		"mapped",
		[
			107,
			112,
			97
		]
	],
	[
		[
			13227,
			13227
		],
		"mapped",
		[
			109,
			112,
			97
		]
	],
	[
		[
			13228,
			13228
		],
		"mapped",
		[
			103,
			112,
			97
		]
	],
	[
		[
			13229,
			13229
		],
		"mapped",
		[
			114,
			97,
			100
		]
	],
	[
		[
			13230,
			13230
		],
		"mapped",
		[
			114,
			97,
			100,
			8725,
			115
		]
	],
	[
		[
			13231,
			13231
		],
		"mapped",
		[
			114,
			97,
			100,
			8725,
			115,
			50
		]
	],
	[
		[
			13232,
			13232
		],
		"mapped",
		[
			112,
			115
		]
	],
	[
		[
			13233,
			13233
		],
		"mapped",
		[
			110,
			115
		]
	],
	[
		[
			13234,
			13234
		],
		"mapped",
		[
			956,
			115
		]
	],
	[
		[
			13235,
			13235
		],
		"mapped",
		[
			109,
			115
		]
	],
	[
		[
			13236,
			13236
		],
		"mapped",
		[
			112,
			118
		]
	],
	[
		[
			13237,
			13237
		],
		"mapped",
		[
			110,
			118
		]
	],
	[
		[
			13238,
			13238
		],
		"mapped",
		[
			956,
			118
		]
	],
	[
		[
			13239,
			13239
		],
		"mapped",
		[
			109,
			118
		]
	],
	[
		[
			13240,
			13240
		],
		"mapped",
		[
			107,
			118
		]
	],
	[
		[
			13241,
			13241
		],
		"mapped",
		[
			109,
			118
		]
	],
	[
		[
			13242,
			13242
		],
		"mapped",
		[
			112,
			119
		]
	],
	[
		[
			13243,
			13243
		],
		"mapped",
		[
			110,
			119
		]
	],
	[
		[
			13244,
			13244
		],
		"mapped",
		[
			956,
			119
		]
	],
	[
		[
			13245,
			13245
		],
		"mapped",
		[
			109,
			119
		]
	],
	[
		[
			13246,
			13246
		],
		"mapped",
		[
			107,
			119
		]
	],
	[
		[
			13247,
			13247
		],
		"mapped",
		[
			109,
			119
		]
	],
	[
		[
			13248,
			13248
		],
		"mapped",
		[
			107,
			969
		]
	],
	[
		[
			13249,
			13249
		],
		"mapped",
		[
			109,
			969
		]
	],
	[
		[
			13250,
			13250
		],
		"disallowed"
	],
	[
		[
			13251,
			13251
		],
		"mapped",
		[
			98,
			113
		]
	],
	[
		[
			13252,
			13252
		],
		"mapped",
		[
			99,
			99
		]
	],
	[
		[
			13253,
			13253
		],
		"mapped",
		[
			99,
			100
		]
	],
	[
		[
			13254,
			13254
		],
		"mapped",
		[
			99,
			8725,
			107,
			103
		]
	],
	[
		[
			13255,
			13255
		],
		"disallowed"
	],
	[
		[
			13256,
			13256
		],
		"mapped",
		[
			100,
			98
		]
	],
	[
		[
			13257,
			13257
		],
		"mapped",
		[
			103,
			121
		]
	],
	[
		[
			13258,
			13258
		],
		"mapped",
		[
			104,
			97
		]
	],
	[
		[
			13259,
			13259
		],
		"mapped",
		[
			104,
			112
		]
	],
	[
		[
			13260,
			13260
		],
		"mapped",
		[
			105,
			110
		]
	],
	[
		[
			13261,
			13261
		],
		"mapped",
		[
			107,
			107
		]
	],
	[
		[
			13262,
			13262
		],
		"mapped",
		[
			107,
			109
		]
	],
	[
		[
			13263,
			13263
		],
		"mapped",
		[
			107,
			116
		]
	],
	[
		[
			13264,
			13264
		],
		"mapped",
		[
			108,
			109
		]
	],
	[
		[
			13265,
			13265
		],
		"mapped",
		[
			108,
			110
		]
	],
	[
		[
			13266,
			13266
		],
		"mapped",
		[
			108,
			111,
			103
		]
	],
	[
		[
			13267,
			13267
		],
		"mapped",
		[
			108,
			120
		]
	],
	[
		[
			13268,
			13268
		],
		"mapped",
		[
			109,
			98
		]
	],
	[
		[
			13269,
			13269
		],
		"mapped",
		[
			109,
			105,
			108
		]
	],
	[
		[
			13270,
			13270
		],
		"mapped",
		[
			109,
			111,
			108
		]
	],
	[
		[
			13271,
			13271
		],
		"mapped",
		[
			112,
			104
		]
	],
	[
		[
			13272,
			13272
		],
		"disallowed"
	],
	[
		[
			13273,
			13273
		],
		"mapped",
		[
			112,
			112,
			109
		]
	],
	[
		[
			13274,
			13274
		],
		"mapped",
		[
			112,
			114
		]
	],
	[
		[
			13275,
			13275
		],
		"mapped",
		[
			115,
			114
		]
	],
	[
		[
			13276,
			13276
		],
		"mapped",
		[
			115,
			118
		]
	],
	[
		[
			13277,
			13277
		],
		"mapped",
		[
			119,
			98
		]
	],
	[
		[
			13278,
			13278
		],
		"mapped",
		[
			118,
			8725,
			109
		]
	],
	[
		[
			13279,
			13279
		],
		"mapped",
		[
			97,
			8725,
			109
		]
	],
	[
		[
			13280,
			13280
		],
		"mapped",
		[
			49,
			26085
		]
	],
	[
		[
			13281,
			13281
		],
		"mapped",
		[
			50,
			26085
		]
	],
	[
		[
			13282,
			13282
		],
		"mapped",
		[
			51,
			26085
		]
	],
	[
		[
			13283,
			13283
		],
		"mapped",
		[
			52,
			26085
		]
	],
	[
		[
			13284,
			13284
		],
		"mapped",
		[
			53,
			26085
		]
	],
	[
		[
			13285,
			13285
		],
		"mapped",
		[
			54,
			26085
		]
	],
	[
		[
			13286,
			13286
		],
		"mapped",
		[
			55,
			26085
		]
	],
	[
		[
			13287,
			13287
		],
		"mapped",
		[
			56,
			26085
		]
	],
	[
		[
			13288,
			13288
		],
		"mapped",
		[
			57,
			26085
		]
	],
	[
		[
			13289,
			13289
		],
		"mapped",
		[
			49,
			48,
			26085
		]
	],
	[
		[
			13290,
			13290
		],
		"mapped",
		[
			49,
			49,
			26085
		]
	],
	[
		[
			13291,
			13291
		],
		"mapped",
		[
			49,
			50,
			26085
		]
	],
	[
		[
			13292,
			13292
		],
		"mapped",
		[
			49,
			51,
			26085
		]
	],
	[
		[
			13293,
			13293
		],
		"mapped",
		[
			49,
			52,
			26085
		]
	],
	[
		[
			13294,
			13294
		],
		"mapped",
		[
			49,
			53,
			26085
		]
	],
	[
		[
			13295,
			13295
		],
		"mapped",
		[
			49,
			54,
			26085
		]
	],
	[
		[
			13296,
			13296
		],
		"mapped",
		[
			49,
			55,
			26085
		]
	],
	[
		[
			13297,
			13297
		],
		"mapped",
		[
			49,
			56,
			26085
		]
	],
	[
		[
			13298,
			13298
		],
		"mapped",
		[
			49,
			57,
			26085
		]
	],
	[
		[
			13299,
			13299
		],
		"mapped",
		[
			50,
			48,
			26085
		]
	],
	[
		[
			13300,
			13300
		],
		"mapped",
		[
			50,
			49,
			26085
		]
	],
	[
		[
			13301,
			13301
		],
		"mapped",
		[
			50,
			50,
			26085
		]
	],
	[
		[
			13302,
			13302
		],
		"mapped",
		[
			50,
			51,
			26085
		]
	],
	[
		[
			13303,
			13303
		],
		"mapped",
		[
			50,
			52,
			26085
		]
	],
	[
		[
			13304,
			13304
		],
		"mapped",
		[
			50,
			53,
			26085
		]
	],
	[
		[
			13305,
			13305
		],
		"mapped",
		[
			50,
			54,
			26085
		]
	],
	[
		[
			13306,
			13306
		],
		"mapped",
		[
			50,
			55,
			26085
		]
	],
	[
		[
			13307,
			13307
		],
		"mapped",
		[
			50,
			56,
			26085
		]
	],
	[
		[
			13308,
			13308
		],
		"mapped",
		[
			50,
			57,
			26085
		]
	],
	[
		[
			13309,
			13309
		],
		"mapped",
		[
			51,
			48,
			26085
		]
	],
	[
		[
			13310,
			13310
		],
		"mapped",
		[
			51,
			49,
			26085
		]
	],
	[
		[
			13311,
			13311
		],
		"mapped",
		[
			103,
			97,
			108
		]
	],
	[
		[
			13312,
			19893
		],
		"valid"
	],
	[
		[
			19894,
			19903
		],
		"disallowed"
	],
	[
		[
			19904,
			19967
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			19968,
			40869
		],
		"valid"
	],
	[
		[
			40870,
			40891
		],
		"valid"
	],
	[
		[
			40892,
			40899
		],
		"valid"
	],
	[
		[
			40900,
			40907
		],
		"valid"
	],
	[
		[
			40908,
			40908
		],
		"valid"
	],
	[
		[
			40909,
			40917
		],
		"valid"
	],
	[
		[
			40918,
			40959
		],
		"disallowed"
	],
	[
		[
			40960,
			42124
		],
		"valid"
	],
	[
		[
			42125,
			42127
		],
		"disallowed"
	],
	[
		[
			42128,
			42145
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42146,
			42147
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42148,
			42163
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42164,
			42164
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42165,
			42176
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42177,
			42177
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42178,
			42180
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42181,
			42181
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42182,
			42182
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42183,
			42191
		],
		"disallowed"
	],
	[
		[
			42192,
			42237
		],
		"valid"
	],
	[
		[
			42238,
			42239
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42240,
			42508
		],
		"valid"
	],
	[
		[
			42509,
			42511
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42512,
			42539
		],
		"valid"
	],
	[
		[
			42540,
			42559
		],
		"disallowed"
	],
	[
		[
			42560,
			42560
		],
		"mapped",
		[
			42561
		]
	],
	[
		[
			42561,
			42561
		],
		"valid"
	],
	[
		[
			42562,
			42562
		],
		"mapped",
		[
			42563
		]
	],
	[
		[
			42563,
			42563
		],
		"valid"
	],
	[
		[
			42564,
			42564
		],
		"mapped",
		[
			42565
		]
	],
	[
		[
			42565,
			42565
		],
		"valid"
	],
	[
		[
			42566,
			42566
		],
		"mapped",
		[
			42567
		]
	],
	[
		[
			42567,
			42567
		],
		"valid"
	],
	[
		[
			42568,
			42568
		],
		"mapped",
		[
			42569
		]
	],
	[
		[
			42569,
			42569
		],
		"valid"
	],
	[
		[
			42570,
			42570
		],
		"mapped",
		[
			42571
		]
	],
	[
		[
			42571,
			42571
		],
		"valid"
	],
	[
		[
			42572,
			42572
		],
		"mapped",
		[
			42573
		]
	],
	[
		[
			42573,
			42573
		],
		"valid"
	],
	[
		[
			42574,
			42574
		],
		"mapped",
		[
			42575
		]
	],
	[
		[
			42575,
			42575
		],
		"valid"
	],
	[
		[
			42576,
			42576
		],
		"mapped",
		[
			42577
		]
	],
	[
		[
			42577,
			42577
		],
		"valid"
	],
	[
		[
			42578,
			42578
		],
		"mapped",
		[
			42579
		]
	],
	[
		[
			42579,
			42579
		],
		"valid"
	],
	[
		[
			42580,
			42580
		],
		"mapped",
		[
			42581
		]
	],
	[
		[
			42581,
			42581
		],
		"valid"
	],
	[
		[
			42582,
			42582
		],
		"mapped",
		[
			42583
		]
	],
	[
		[
			42583,
			42583
		],
		"valid"
	],
	[
		[
			42584,
			42584
		],
		"mapped",
		[
			42585
		]
	],
	[
		[
			42585,
			42585
		],
		"valid"
	],
	[
		[
			42586,
			42586
		],
		"mapped",
		[
			42587
		]
	],
	[
		[
			42587,
			42587
		],
		"valid"
	],
	[
		[
			42588,
			42588
		],
		"mapped",
		[
			42589
		]
	],
	[
		[
			42589,
			42589
		],
		"valid"
	],
	[
		[
			42590,
			42590
		],
		"mapped",
		[
			42591
		]
	],
	[
		[
			42591,
			42591
		],
		"valid"
	],
	[
		[
			42592,
			42592
		],
		"mapped",
		[
			42593
		]
	],
	[
		[
			42593,
			42593
		],
		"valid"
	],
	[
		[
			42594,
			42594
		],
		"mapped",
		[
			42595
		]
	],
	[
		[
			42595,
			42595
		],
		"valid"
	],
	[
		[
			42596,
			42596
		],
		"mapped",
		[
			42597
		]
	],
	[
		[
			42597,
			42597
		],
		"valid"
	],
	[
		[
			42598,
			42598
		],
		"mapped",
		[
			42599
		]
	],
	[
		[
			42599,
			42599
		],
		"valid"
	],
	[
		[
			42600,
			42600
		],
		"mapped",
		[
			42601
		]
	],
	[
		[
			42601,
			42601
		],
		"valid"
	],
	[
		[
			42602,
			42602
		],
		"mapped",
		[
			42603
		]
	],
	[
		[
			42603,
			42603
		],
		"valid"
	],
	[
		[
			42604,
			42604
		],
		"mapped",
		[
			42605
		]
	],
	[
		[
			42605,
			42607
		],
		"valid"
	],
	[
		[
			42608,
			42611
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42612,
			42619
		],
		"valid"
	],
	[
		[
			42620,
			42621
		],
		"valid"
	],
	[
		[
			42622,
			42622
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42623,
			42623
		],
		"valid"
	],
	[
		[
			42624,
			42624
		],
		"mapped",
		[
			42625
		]
	],
	[
		[
			42625,
			42625
		],
		"valid"
	],
	[
		[
			42626,
			42626
		],
		"mapped",
		[
			42627
		]
	],
	[
		[
			42627,
			42627
		],
		"valid"
	],
	[
		[
			42628,
			42628
		],
		"mapped",
		[
			42629
		]
	],
	[
		[
			42629,
			42629
		],
		"valid"
	],
	[
		[
			42630,
			42630
		],
		"mapped",
		[
			42631
		]
	],
	[
		[
			42631,
			42631
		],
		"valid"
	],
	[
		[
			42632,
			42632
		],
		"mapped",
		[
			42633
		]
	],
	[
		[
			42633,
			42633
		],
		"valid"
	],
	[
		[
			42634,
			42634
		],
		"mapped",
		[
			42635
		]
	],
	[
		[
			42635,
			42635
		],
		"valid"
	],
	[
		[
			42636,
			42636
		],
		"mapped",
		[
			42637
		]
	],
	[
		[
			42637,
			42637
		],
		"valid"
	],
	[
		[
			42638,
			42638
		],
		"mapped",
		[
			42639
		]
	],
	[
		[
			42639,
			42639
		],
		"valid"
	],
	[
		[
			42640,
			42640
		],
		"mapped",
		[
			42641
		]
	],
	[
		[
			42641,
			42641
		],
		"valid"
	],
	[
		[
			42642,
			42642
		],
		"mapped",
		[
			42643
		]
	],
	[
		[
			42643,
			42643
		],
		"valid"
	],
	[
		[
			42644,
			42644
		],
		"mapped",
		[
			42645
		]
	],
	[
		[
			42645,
			42645
		],
		"valid"
	],
	[
		[
			42646,
			42646
		],
		"mapped",
		[
			42647
		]
	],
	[
		[
			42647,
			42647
		],
		"valid"
	],
	[
		[
			42648,
			42648
		],
		"mapped",
		[
			42649
		]
	],
	[
		[
			42649,
			42649
		],
		"valid"
	],
	[
		[
			42650,
			42650
		],
		"mapped",
		[
			42651
		]
	],
	[
		[
			42651,
			42651
		],
		"valid"
	],
	[
		[
			42652,
			42652
		],
		"mapped",
		[
			1098
		]
	],
	[
		[
			42653,
			42653
		],
		"mapped",
		[
			1100
		]
	],
	[
		[
			42654,
			42654
		],
		"valid"
	],
	[
		[
			42655,
			42655
		],
		"valid"
	],
	[
		[
			42656,
			42725
		],
		"valid"
	],
	[
		[
			42726,
			42735
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42736,
			42737
		],
		"valid"
	],
	[
		[
			42738,
			42743
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42744,
			42751
		],
		"disallowed"
	],
	[
		[
			42752,
			42774
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42775,
			42778
		],
		"valid"
	],
	[
		[
			42779,
			42783
		],
		"valid"
	],
	[
		[
			42784,
			42785
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42786,
			42786
		],
		"mapped",
		[
			42787
		]
	],
	[
		[
			42787,
			42787
		],
		"valid"
	],
	[
		[
			42788,
			42788
		],
		"mapped",
		[
			42789
		]
	],
	[
		[
			42789,
			42789
		],
		"valid"
	],
	[
		[
			42790,
			42790
		],
		"mapped",
		[
			42791
		]
	],
	[
		[
			42791,
			42791
		],
		"valid"
	],
	[
		[
			42792,
			42792
		],
		"mapped",
		[
			42793
		]
	],
	[
		[
			42793,
			42793
		],
		"valid"
	],
	[
		[
			42794,
			42794
		],
		"mapped",
		[
			42795
		]
	],
	[
		[
			42795,
			42795
		],
		"valid"
	],
	[
		[
			42796,
			42796
		],
		"mapped",
		[
			42797
		]
	],
	[
		[
			42797,
			42797
		],
		"valid"
	],
	[
		[
			42798,
			42798
		],
		"mapped",
		[
			42799
		]
	],
	[
		[
			42799,
			42801
		],
		"valid"
	],
	[
		[
			42802,
			42802
		],
		"mapped",
		[
			42803
		]
	],
	[
		[
			42803,
			42803
		],
		"valid"
	],
	[
		[
			42804,
			42804
		],
		"mapped",
		[
			42805
		]
	],
	[
		[
			42805,
			42805
		],
		"valid"
	],
	[
		[
			42806,
			42806
		],
		"mapped",
		[
			42807
		]
	],
	[
		[
			42807,
			42807
		],
		"valid"
	],
	[
		[
			42808,
			42808
		],
		"mapped",
		[
			42809
		]
	],
	[
		[
			42809,
			42809
		],
		"valid"
	],
	[
		[
			42810,
			42810
		],
		"mapped",
		[
			42811
		]
	],
	[
		[
			42811,
			42811
		],
		"valid"
	],
	[
		[
			42812,
			42812
		],
		"mapped",
		[
			42813
		]
	],
	[
		[
			42813,
			42813
		],
		"valid"
	],
	[
		[
			42814,
			42814
		],
		"mapped",
		[
			42815
		]
	],
	[
		[
			42815,
			42815
		],
		"valid"
	],
	[
		[
			42816,
			42816
		],
		"mapped",
		[
			42817
		]
	],
	[
		[
			42817,
			42817
		],
		"valid"
	],
	[
		[
			42818,
			42818
		],
		"mapped",
		[
			42819
		]
	],
	[
		[
			42819,
			42819
		],
		"valid"
	],
	[
		[
			42820,
			42820
		],
		"mapped",
		[
			42821
		]
	],
	[
		[
			42821,
			42821
		],
		"valid"
	],
	[
		[
			42822,
			42822
		],
		"mapped",
		[
			42823
		]
	],
	[
		[
			42823,
			42823
		],
		"valid"
	],
	[
		[
			42824,
			42824
		],
		"mapped",
		[
			42825
		]
	],
	[
		[
			42825,
			42825
		],
		"valid"
	],
	[
		[
			42826,
			42826
		],
		"mapped",
		[
			42827
		]
	],
	[
		[
			42827,
			42827
		],
		"valid"
	],
	[
		[
			42828,
			42828
		],
		"mapped",
		[
			42829
		]
	],
	[
		[
			42829,
			42829
		],
		"valid"
	],
	[
		[
			42830,
			42830
		],
		"mapped",
		[
			42831
		]
	],
	[
		[
			42831,
			42831
		],
		"valid"
	],
	[
		[
			42832,
			42832
		],
		"mapped",
		[
			42833
		]
	],
	[
		[
			42833,
			42833
		],
		"valid"
	],
	[
		[
			42834,
			42834
		],
		"mapped",
		[
			42835
		]
	],
	[
		[
			42835,
			42835
		],
		"valid"
	],
	[
		[
			42836,
			42836
		],
		"mapped",
		[
			42837
		]
	],
	[
		[
			42837,
			42837
		],
		"valid"
	],
	[
		[
			42838,
			42838
		],
		"mapped",
		[
			42839
		]
	],
	[
		[
			42839,
			42839
		],
		"valid"
	],
	[
		[
			42840,
			42840
		],
		"mapped",
		[
			42841
		]
	],
	[
		[
			42841,
			42841
		],
		"valid"
	],
	[
		[
			42842,
			42842
		],
		"mapped",
		[
			42843
		]
	],
	[
		[
			42843,
			42843
		],
		"valid"
	],
	[
		[
			42844,
			42844
		],
		"mapped",
		[
			42845
		]
	],
	[
		[
			42845,
			42845
		],
		"valid"
	],
	[
		[
			42846,
			42846
		],
		"mapped",
		[
			42847
		]
	],
	[
		[
			42847,
			42847
		],
		"valid"
	],
	[
		[
			42848,
			42848
		],
		"mapped",
		[
			42849
		]
	],
	[
		[
			42849,
			42849
		],
		"valid"
	],
	[
		[
			42850,
			42850
		],
		"mapped",
		[
			42851
		]
	],
	[
		[
			42851,
			42851
		],
		"valid"
	],
	[
		[
			42852,
			42852
		],
		"mapped",
		[
			42853
		]
	],
	[
		[
			42853,
			42853
		],
		"valid"
	],
	[
		[
			42854,
			42854
		],
		"mapped",
		[
			42855
		]
	],
	[
		[
			42855,
			42855
		],
		"valid"
	],
	[
		[
			42856,
			42856
		],
		"mapped",
		[
			42857
		]
	],
	[
		[
			42857,
			42857
		],
		"valid"
	],
	[
		[
			42858,
			42858
		],
		"mapped",
		[
			42859
		]
	],
	[
		[
			42859,
			42859
		],
		"valid"
	],
	[
		[
			42860,
			42860
		],
		"mapped",
		[
			42861
		]
	],
	[
		[
			42861,
			42861
		],
		"valid"
	],
	[
		[
			42862,
			42862
		],
		"mapped",
		[
			42863
		]
	],
	[
		[
			42863,
			42863
		],
		"valid"
	],
	[
		[
			42864,
			42864
		],
		"mapped",
		[
			42863
		]
	],
	[
		[
			42865,
			42872
		],
		"valid"
	],
	[
		[
			42873,
			42873
		],
		"mapped",
		[
			42874
		]
	],
	[
		[
			42874,
			42874
		],
		"valid"
	],
	[
		[
			42875,
			42875
		],
		"mapped",
		[
			42876
		]
	],
	[
		[
			42876,
			42876
		],
		"valid"
	],
	[
		[
			42877,
			42877
		],
		"mapped",
		[
			7545
		]
	],
	[
		[
			42878,
			42878
		],
		"mapped",
		[
			42879
		]
	],
	[
		[
			42879,
			42879
		],
		"valid"
	],
	[
		[
			42880,
			42880
		],
		"mapped",
		[
			42881
		]
	],
	[
		[
			42881,
			42881
		],
		"valid"
	],
	[
		[
			42882,
			42882
		],
		"mapped",
		[
			42883
		]
	],
	[
		[
			42883,
			42883
		],
		"valid"
	],
	[
		[
			42884,
			42884
		],
		"mapped",
		[
			42885
		]
	],
	[
		[
			42885,
			42885
		],
		"valid"
	],
	[
		[
			42886,
			42886
		],
		"mapped",
		[
			42887
		]
	],
	[
		[
			42887,
			42888
		],
		"valid"
	],
	[
		[
			42889,
			42890
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			42891,
			42891
		],
		"mapped",
		[
			42892
		]
	],
	[
		[
			42892,
			42892
		],
		"valid"
	],
	[
		[
			42893,
			42893
		],
		"mapped",
		[
			613
		]
	],
	[
		[
			42894,
			42894
		],
		"valid"
	],
	[
		[
			42895,
			42895
		],
		"valid"
	],
	[
		[
			42896,
			42896
		],
		"mapped",
		[
			42897
		]
	],
	[
		[
			42897,
			42897
		],
		"valid"
	],
	[
		[
			42898,
			42898
		],
		"mapped",
		[
			42899
		]
	],
	[
		[
			42899,
			42899
		],
		"valid"
	],
	[
		[
			42900,
			42901
		],
		"valid"
	],
	[
		[
			42902,
			42902
		],
		"mapped",
		[
			42903
		]
	],
	[
		[
			42903,
			42903
		],
		"valid"
	],
	[
		[
			42904,
			42904
		],
		"mapped",
		[
			42905
		]
	],
	[
		[
			42905,
			42905
		],
		"valid"
	],
	[
		[
			42906,
			42906
		],
		"mapped",
		[
			42907
		]
	],
	[
		[
			42907,
			42907
		],
		"valid"
	],
	[
		[
			42908,
			42908
		],
		"mapped",
		[
			42909
		]
	],
	[
		[
			42909,
			42909
		],
		"valid"
	],
	[
		[
			42910,
			42910
		],
		"mapped",
		[
			42911
		]
	],
	[
		[
			42911,
			42911
		],
		"valid"
	],
	[
		[
			42912,
			42912
		],
		"mapped",
		[
			42913
		]
	],
	[
		[
			42913,
			42913
		],
		"valid"
	],
	[
		[
			42914,
			42914
		],
		"mapped",
		[
			42915
		]
	],
	[
		[
			42915,
			42915
		],
		"valid"
	],
	[
		[
			42916,
			42916
		],
		"mapped",
		[
			42917
		]
	],
	[
		[
			42917,
			42917
		],
		"valid"
	],
	[
		[
			42918,
			42918
		],
		"mapped",
		[
			42919
		]
	],
	[
		[
			42919,
			42919
		],
		"valid"
	],
	[
		[
			42920,
			42920
		],
		"mapped",
		[
			42921
		]
	],
	[
		[
			42921,
			42921
		],
		"valid"
	],
	[
		[
			42922,
			42922
		],
		"mapped",
		[
			614
		]
	],
	[
		[
			42923,
			42923
		],
		"mapped",
		[
			604
		]
	],
	[
		[
			42924,
			42924
		],
		"mapped",
		[
			609
		]
	],
	[
		[
			42925,
			42925
		],
		"mapped",
		[
			620
		]
	],
	[
		[
			42926,
			42927
		],
		"disallowed"
	],
	[
		[
			42928,
			42928
		],
		"mapped",
		[
			670
		]
	],
	[
		[
			42929,
			42929
		],
		"mapped",
		[
			647
		]
	],
	[
		[
			42930,
			42930
		],
		"mapped",
		[
			669
		]
	],
	[
		[
			42931,
			42931
		],
		"mapped",
		[
			43859
		]
	],
	[
		[
			42932,
			42932
		],
		"mapped",
		[
			42933
		]
	],
	[
		[
			42933,
			42933
		],
		"valid"
	],
	[
		[
			42934,
			42934
		],
		"mapped",
		[
			42935
		]
	],
	[
		[
			42935,
			42935
		],
		"valid"
	],
	[
		[
			42936,
			42998
		],
		"disallowed"
	],
	[
		[
			42999,
			42999
		],
		"valid"
	],
	[
		[
			43000,
			43000
		],
		"mapped",
		[
			295
		]
	],
	[
		[
			43001,
			43001
		],
		"mapped",
		[
			339
		]
	],
	[
		[
			43002,
			43002
		],
		"valid"
	],
	[
		[
			43003,
			43007
		],
		"valid"
	],
	[
		[
			43008,
			43047
		],
		"valid"
	],
	[
		[
			43048,
			43051
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43052,
			43055
		],
		"disallowed"
	],
	[
		[
			43056,
			43065
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43066,
			43071
		],
		"disallowed"
	],
	[
		[
			43072,
			43123
		],
		"valid"
	],
	[
		[
			43124,
			43127
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43128,
			43135
		],
		"disallowed"
	],
	[
		[
			43136,
			43204
		],
		"valid"
	],
	[
		[
			43205,
			43213
		],
		"disallowed"
	],
	[
		[
			43214,
			43215
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43216,
			43225
		],
		"valid"
	],
	[
		[
			43226,
			43231
		],
		"disallowed"
	],
	[
		[
			43232,
			43255
		],
		"valid"
	],
	[
		[
			43256,
			43258
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43259,
			43259
		],
		"valid"
	],
	[
		[
			43260,
			43260
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43261,
			43261
		],
		"valid"
	],
	[
		[
			43262,
			43263
		],
		"disallowed"
	],
	[
		[
			43264,
			43309
		],
		"valid"
	],
	[
		[
			43310,
			43311
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43312,
			43347
		],
		"valid"
	],
	[
		[
			43348,
			43358
		],
		"disallowed"
	],
	[
		[
			43359,
			43359
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43360,
			43388
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43389,
			43391
		],
		"disallowed"
	],
	[
		[
			43392,
			43456
		],
		"valid"
	],
	[
		[
			43457,
			43469
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43470,
			43470
		],
		"disallowed"
	],
	[
		[
			43471,
			43481
		],
		"valid"
	],
	[
		[
			43482,
			43485
		],
		"disallowed"
	],
	[
		[
			43486,
			43487
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43488,
			43518
		],
		"valid"
	],
	[
		[
			43519,
			43519
		],
		"disallowed"
	],
	[
		[
			43520,
			43574
		],
		"valid"
	],
	[
		[
			43575,
			43583
		],
		"disallowed"
	],
	[
		[
			43584,
			43597
		],
		"valid"
	],
	[
		[
			43598,
			43599
		],
		"disallowed"
	],
	[
		[
			43600,
			43609
		],
		"valid"
	],
	[
		[
			43610,
			43611
		],
		"disallowed"
	],
	[
		[
			43612,
			43615
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43616,
			43638
		],
		"valid"
	],
	[
		[
			43639,
			43641
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43642,
			43643
		],
		"valid"
	],
	[
		[
			43644,
			43647
		],
		"valid"
	],
	[
		[
			43648,
			43714
		],
		"valid"
	],
	[
		[
			43715,
			43738
		],
		"disallowed"
	],
	[
		[
			43739,
			43741
		],
		"valid"
	],
	[
		[
			43742,
			43743
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43744,
			43759
		],
		"valid"
	],
	[
		[
			43760,
			43761
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43762,
			43766
		],
		"valid"
	],
	[
		[
			43767,
			43776
		],
		"disallowed"
	],
	[
		[
			43777,
			43782
		],
		"valid"
	],
	[
		[
			43783,
			43784
		],
		"disallowed"
	],
	[
		[
			43785,
			43790
		],
		"valid"
	],
	[
		[
			43791,
			43792
		],
		"disallowed"
	],
	[
		[
			43793,
			43798
		],
		"valid"
	],
	[
		[
			43799,
			43807
		],
		"disallowed"
	],
	[
		[
			43808,
			43814
		],
		"valid"
	],
	[
		[
			43815,
			43815
		],
		"disallowed"
	],
	[
		[
			43816,
			43822
		],
		"valid"
	],
	[
		[
			43823,
			43823
		],
		"disallowed"
	],
	[
		[
			43824,
			43866
		],
		"valid"
	],
	[
		[
			43867,
			43867
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			43868,
			43868
		],
		"mapped",
		[
			42791
		]
	],
	[
		[
			43869,
			43869
		],
		"mapped",
		[
			43831
		]
	],
	[
		[
			43870,
			43870
		],
		"mapped",
		[
			619
		]
	],
	[
		[
			43871,
			43871
		],
		"mapped",
		[
			43858
		]
	],
	[
		[
			43872,
			43875
		],
		"valid"
	],
	[
		[
			43876,
			43877
		],
		"valid"
	],
	[
		[
			43878,
			43887
		],
		"disallowed"
	],
	[
		[
			43888,
			43888
		],
		"mapped",
		[
			5024
		]
	],
	[
		[
			43889,
			43889
		],
		"mapped",
		[
			5025
		]
	],
	[
		[
			43890,
			43890
		],
		"mapped",
		[
			5026
		]
	],
	[
		[
			43891,
			43891
		],
		"mapped",
		[
			5027
		]
	],
	[
		[
			43892,
			43892
		],
		"mapped",
		[
			5028
		]
	],
	[
		[
			43893,
			43893
		],
		"mapped",
		[
			5029
		]
	],
	[
		[
			43894,
			43894
		],
		"mapped",
		[
			5030
		]
	],
	[
		[
			43895,
			43895
		],
		"mapped",
		[
			5031
		]
	],
	[
		[
			43896,
			43896
		],
		"mapped",
		[
			5032
		]
	],
	[
		[
			43897,
			43897
		],
		"mapped",
		[
			5033
		]
	],
	[
		[
			43898,
			43898
		],
		"mapped",
		[
			5034
		]
	],
	[
		[
			43899,
			43899
		],
		"mapped",
		[
			5035
		]
	],
	[
		[
			43900,
			43900
		],
		"mapped",
		[
			5036
		]
	],
	[
		[
			43901,
			43901
		],
		"mapped",
		[
			5037
		]
	],
	[
		[
			43902,
			43902
		],
		"mapped",
		[
			5038
		]
	],
	[
		[
			43903,
			43903
		],
		"mapped",
		[
			5039
		]
	],
	[
		[
			43904,
			43904
		],
		"mapped",
		[
			5040
		]
	],
	[
		[
			43905,
			43905
		],
		"mapped",
		[
			5041
		]
	],
	[
		[
			43906,
			43906
		],
		"mapped",
		[
			5042
		]
	],
	[
		[
			43907,
			43907
		],
		"mapped",
		[
			5043
		]
	],
	[
		[
			43908,
			43908
		],
		"mapped",
		[
			5044
		]
	],
	[
		[
			43909,
			43909
		],
		"mapped",
		[
			5045
		]
	],
	[
		[
			43910,
			43910
		],
		"mapped",
		[
			5046
		]
	],
	[
		[
			43911,
			43911
		],
		"mapped",
		[
			5047
		]
	],
	[
		[
			43912,
			43912
		],
		"mapped",
		[
			5048
		]
	],
	[
		[
			43913,
			43913
		],
		"mapped",
		[
			5049
		]
	],
	[
		[
			43914,
			43914
		],
		"mapped",
		[
			5050
		]
	],
	[
		[
			43915,
			43915
		],
		"mapped",
		[
			5051
		]
	],
	[
		[
			43916,
			43916
		],
		"mapped",
		[
			5052
		]
	],
	[
		[
			43917,
			43917
		],
		"mapped",
		[
			5053
		]
	],
	[
		[
			43918,
			43918
		],
		"mapped",
		[
			5054
		]
	],
	[
		[
			43919,
			43919
		],
		"mapped",
		[
			5055
		]
	],
	[
		[
			43920,
			43920
		],
		"mapped",
		[
			5056
		]
	],
	[
		[
			43921,
			43921
		],
		"mapped",
		[
			5057
		]
	],
	[
		[
			43922,
			43922
		],
		"mapped",
		[
			5058
		]
	],
	[
		[
			43923,
			43923
		],
		"mapped",
		[
			5059
		]
	],
	[
		[
			43924,
			43924
		],
		"mapped",
		[
			5060
		]
	],
	[
		[
			43925,
			43925
		],
		"mapped",
		[
			5061
		]
	],
	[
		[
			43926,
			43926
		],
		"mapped",
		[
			5062
		]
	],
	[
		[
			43927,
			43927
		],
		"mapped",
		[
			5063
		]
	],
	[
		[
			43928,
			43928
		],
		"mapped",
		[
			5064
		]
	],
	[
		[
			43929,
			43929
		],
		"mapped",
		[
			5065
		]
	],
	[
		[
			43930,
			43930
		],
		"mapped",
		[
			5066
		]
	],
	[
		[
			43931,
			43931
		],
		"mapped",
		[
			5067
		]
	],
	[
		[
			43932,
			43932
		],
		"mapped",
		[
			5068
		]
	],
	[
		[
			43933,
			43933
		],
		"mapped",
		[
			5069
		]
	],
	[
		[
			43934,
			43934
		],
		"mapped",
		[
			5070
		]
	],
	[
		[
			43935,
			43935
		],
		"mapped",
		[
			5071
		]
	],
	[
		[
			43936,
			43936
		],
		"mapped",
		[
			5072
		]
	],
	[
		[
			43937,
			43937
		],
		"mapped",
		[
			5073
		]
	],
	[
		[
			43938,
			43938
		],
		"mapped",
		[
			5074
		]
	],
	[
		[
			43939,
			43939
		],
		"mapped",
		[
			5075
		]
	],
	[
		[
			43940,
			43940
		],
		"mapped",
		[
			5076
		]
	],
	[
		[
			43941,
			43941
		],
		"mapped",
		[
			5077
		]
	],
	[
		[
			43942,
			43942
		],
		"mapped",
		[
			5078
		]
	],
	[
		[
			43943,
			43943
		],
		"mapped",
		[
			5079
		]
	],
	[
		[
			43944,
			43944
		],
		"mapped",
		[
			5080
		]
	],
	[
		[
			43945,
			43945
		],
		"mapped",
		[
			5081
		]
	],
	[
		[
			43946,
			43946
		],
		"mapped",
		[
			5082
		]
	],
	[
		[
			43947,
			43947
		],
		"mapped",
		[
			5083
		]
	],
	[
		[
			43948,
			43948
		],
		"mapped",
		[
			5084
		]
	],
	[
		[
			43949,
			43949
		],
		"mapped",
		[
			5085
		]
	],
	[
		[
			43950,
			43950
		],
		"mapped",
		[
			5086
		]
	],
	[
		[
			43951,
			43951
		],
		"mapped",
		[
			5087
		]
	],
	[
		[
			43952,
			43952
		],
		"mapped",
		[
			5088
		]
	],
	[
		[
			43953,
			43953
		],
		"mapped",
		[
			5089
		]
	],
	[
		[
			43954,
			43954
		],
		"mapped",
		[
			5090
		]
	],
	[
		[
			43955,
			43955
		],
		"mapped",
		[
			5091
		]
	],
	[
		[
			43956,
			43956
		],
		"mapped",
		[
			5092
		]
	],
	[
		[
			43957,
			43957
		],
		"mapped",
		[
			5093
		]
	],
	[
		[
			43958,
			43958
		],
		"mapped",
		[
			5094
		]
	],
	[
		[
			43959,
			43959
		],
		"mapped",
		[
			5095
		]
	],
	[
		[
			43960,
			43960
		],
		"mapped",
		[
			5096
		]
	],
	[
		[
			43961,
			43961
		],
		"mapped",
		[
			5097
		]
	],
	[
		[
			43962,
			43962
		],
		"mapped",
		[
			5098
		]
	],
	[
		[
			43963,
			43963
		],
		"mapped",
		[
			5099
		]
	],
	[
		[
			43964,
			43964
		],
		"mapped",
		[
			5100
		]
	],
	[
		[
			43965,
			43965
		],
		"mapped",
		[
			5101
		]
	],
	[
		[
			43966,
			43966
		],
		"mapped",
		[
			5102
		]
	],
	[
		[
			43967,
			43967
		],
		"mapped",
		[
			5103
		]
	],
	[
		[
			43968,
			44010
		],
		"valid"
	],
	[
		[
			44011,
			44011
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			44012,
			44013
		],
		"valid"
	],
	[
		[
			44014,
			44015
		],
		"disallowed"
	],
	[
		[
			44016,
			44025
		],
		"valid"
	],
	[
		[
			44026,
			44031
		],
		"disallowed"
	],
	[
		[
			44032,
			55203
		],
		"valid"
	],
	[
		[
			55204,
			55215
		],
		"disallowed"
	],
	[
		[
			55216,
			55238
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			55239,
			55242
		],
		"disallowed"
	],
	[
		[
			55243,
			55291
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			55292,
			55295
		],
		"disallowed"
	],
	[
		[
			55296,
			57343
		],
		"disallowed"
	],
	[
		[
			57344,
			63743
		],
		"disallowed"
	],
	[
		[
			63744,
			63744
		],
		"mapped",
		[
			35912
		]
	],
	[
		[
			63745,
			63745
		],
		"mapped",
		[
			26356
		]
	],
	[
		[
			63746,
			63746
		],
		"mapped",
		[
			36554
		]
	],
	[
		[
			63747,
			63747
		],
		"mapped",
		[
			36040
		]
	],
	[
		[
			63748,
			63748
		],
		"mapped",
		[
			28369
		]
	],
	[
		[
			63749,
			63749
		],
		"mapped",
		[
			20018
		]
	],
	[
		[
			63750,
			63750
		],
		"mapped",
		[
			21477
		]
	],
	[
		[
			63751,
			63752
		],
		"mapped",
		[
			40860
		]
	],
	[
		[
			63753,
			63753
		],
		"mapped",
		[
			22865
		]
	],
	[
		[
			63754,
			63754
		],
		"mapped",
		[
			37329
		]
	],
	[
		[
			63755,
			63755
		],
		"mapped",
		[
			21895
		]
	],
	[
		[
			63756,
			63756
		],
		"mapped",
		[
			22856
		]
	],
	[
		[
			63757,
			63757
		],
		"mapped",
		[
			25078
		]
	],
	[
		[
			63758,
			63758
		],
		"mapped",
		[
			30313
		]
	],
	[
		[
			63759,
			63759
		],
		"mapped",
		[
			32645
		]
	],
	[
		[
			63760,
			63760
		],
		"mapped",
		[
			34367
		]
	],
	[
		[
			63761,
			63761
		],
		"mapped",
		[
			34746
		]
	],
	[
		[
			63762,
			63762
		],
		"mapped",
		[
			35064
		]
	],
	[
		[
			63763,
			63763
		],
		"mapped",
		[
			37007
		]
	],
	[
		[
			63764,
			63764
		],
		"mapped",
		[
			27138
		]
	],
	[
		[
			63765,
			63765
		],
		"mapped",
		[
			27931
		]
	],
	[
		[
			63766,
			63766
		],
		"mapped",
		[
			28889
		]
	],
	[
		[
			63767,
			63767
		],
		"mapped",
		[
			29662
		]
	],
	[
		[
			63768,
			63768
		],
		"mapped",
		[
			33853
		]
	],
	[
		[
			63769,
			63769
		],
		"mapped",
		[
			37226
		]
	],
	[
		[
			63770,
			63770
		],
		"mapped",
		[
			39409
		]
	],
	[
		[
			63771,
			63771
		],
		"mapped",
		[
			20098
		]
	],
	[
		[
			63772,
			63772
		],
		"mapped",
		[
			21365
		]
	],
	[
		[
			63773,
			63773
		],
		"mapped",
		[
			27396
		]
	],
	[
		[
			63774,
			63774
		],
		"mapped",
		[
			29211
		]
	],
	[
		[
			63775,
			63775
		],
		"mapped",
		[
			34349
		]
	],
	[
		[
			63776,
			63776
		],
		"mapped",
		[
			40478
		]
	],
	[
		[
			63777,
			63777
		],
		"mapped",
		[
			23888
		]
	],
	[
		[
			63778,
			63778
		],
		"mapped",
		[
			28651
		]
	],
	[
		[
			63779,
			63779
		],
		"mapped",
		[
			34253
		]
	],
	[
		[
			63780,
			63780
		],
		"mapped",
		[
			35172
		]
	],
	[
		[
			63781,
			63781
		],
		"mapped",
		[
			25289
		]
	],
	[
		[
			63782,
			63782
		],
		"mapped",
		[
			33240
		]
	],
	[
		[
			63783,
			63783
		],
		"mapped",
		[
			34847
		]
	],
	[
		[
			63784,
			63784
		],
		"mapped",
		[
			24266
		]
	],
	[
		[
			63785,
			63785
		],
		"mapped",
		[
			26391
		]
	],
	[
		[
			63786,
			63786
		],
		"mapped",
		[
			28010
		]
	],
	[
		[
			63787,
			63787
		],
		"mapped",
		[
			29436
		]
	],
	[
		[
			63788,
			63788
		],
		"mapped",
		[
			37070
		]
	],
	[
		[
			63789,
			63789
		],
		"mapped",
		[
			20358
		]
	],
	[
		[
			63790,
			63790
		],
		"mapped",
		[
			20919
		]
	],
	[
		[
			63791,
			63791
		],
		"mapped",
		[
			21214
		]
	],
	[
		[
			63792,
			63792
		],
		"mapped",
		[
			25796
		]
	],
	[
		[
			63793,
			63793
		],
		"mapped",
		[
			27347
		]
	],
	[
		[
			63794,
			63794
		],
		"mapped",
		[
			29200
		]
	],
	[
		[
			63795,
			63795
		],
		"mapped",
		[
			30439
		]
	],
	[
		[
			63796,
			63796
		],
		"mapped",
		[
			32769
		]
	],
	[
		[
			63797,
			63797
		],
		"mapped",
		[
			34310
		]
	],
	[
		[
			63798,
			63798
		],
		"mapped",
		[
			34396
		]
	],
	[
		[
			63799,
			63799
		],
		"mapped",
		[
			36335
		]
	],
	[
		[
			63800,
			63800
		],
		"mapped",
		[
			38706
		]
	],
	[
		[
			63801,
			63801
		],
		"mapped",
		[
			39791
		]
	],
	[
		[
			63802,
			63802
		],
		"mapped",
		[
			40442
		]
	],
	[
		[
			63803,
			63803
		],
		"mapped",
		[
			30860
		]
	],
	[
		[
			63804,
			63804
		],
		"mapped",
		[
			31103
		]
	],
	[
		[
			63805,
			63805
		],
		"mapped",
		[
			32160
		]
	],
	[
		[
			63806,
			63806
		],
		"mapped",
		[
			33737
		]
	],
	[
		[
			63807,
			63807
		],
		"mapped",
		[
			37636
		]
	],
	[
		[
			63808,
			63808
		],
		"mapped",
		[
			40575
		]
	],
	[
		[
			63809,
			63809
		],
		"mapped",
		[
			35542
		]
	],
	[
		[
			63810,
			63810
		],
		"mapped",
		[
			22751
		]
	],
	[
		[
			63811,
			63811
		],
		"mapped",
		[
			24324
		]
	],
	[
		[
			63812,
			63812
		],
		"mapped",
		[
			31840
		]
	],
	[
		[
			63813,
			63813
		],
		"mapped",
		[
			32894
		]
	],
	[
		[
			63814,
			63814
		],
		"mapped",
		[
			29282
		]
	],
	[
		[
			63815,
			63815
		],
		"mapped",
		[
			30922
		]
	],
	[
		[
			63816,
			63816
		],
		"mapped",
		[
			36034
		]
	],
	[
		[
			63817,
			63817
		],
		"mapped",
		[
			38647
		]
	],
	[
		[
			63818,
			63818
		],
		"mapped",
		[
			22744
		]
	],
	[
		[
			63819,
			63819
		],
		"mapped",
		[
			23650
		]
	],
	[
		[
			63820,
			63820
		],
		"mapped",
		[
			27155
		]
	],
	[
		[
			63821,
			63821
		],
		"mapped",
		[
			28122
		]
	],
	[
		[
			63822,
			63822
		],
		"mapped",
		[
			28431
		]
	],
	[
		[
			63823,
			63823
		],
		"mapped",
		[
			32047
		]
	],
	[
		[
			63824,
			63824
		],
		"mapped",
		[
			32311
		]
	],
	[
		[
			63825,
			63825
		],
		"mapped",
		[
			38475
		]
	],
	[
		[
			63826,
			63826
		],
		"mapped",
		[
			21202
		]
	],
	[
		[
			63827,
			63827
		],
		"mapped",
		[
			32907
		]
	],
	[
		[
			63828,
			63828
		],
		"mapped",
		[
			20956
		]
	],
	[
		[
			63829,
			63829
		],
		"mapped",
		[
			20940
		]
	],
	[
		[
			63830,
			63830
		],
		"mapped",
		[
			31260
		]
	],
	[
		[
			63831,
			63831
		],
		"mapped",
		[
			32190
		]
	],
	[
		[
			63832,
			63832
		],
		"mapped",
		[
			33777
		]
	],
	[
		[
			63833,
			63833
		],
		"mapped",
		[
			38517
		]
	],
	[
		[
			63834,
			63834
		],
		"mapped",
		[
			35712
		]
	],
	[
		[
			63835,
			63835
		],
		"mapped",
		[
			25295
		]
	],
	[
		[
			63836,
			63836
		],
		"mapped",
		[
			27138
		]
	],
	[
		[
			63837,
			63837
		],
		"mapped",
		[
			35582
		]
	],
	[
		[
			63838,
			63838
		],
		"mapped",
		[
			20025
		]
	],
	[
		[
			63839,
			63839
		],
		"mapped",
		[
			23527
		]
	],
	[
		[
			63840,
			63840
		],
		"mapped",
		[
			24594
		]
	],
	[
		[
			63841,
			63841
		],
		"mapped",
		[
			29575
		]
	],
	[
		[
			63842,
			63842
		],
		"mapped",
		[
			30064
		]
	],
	[
		[
			63843,
			63843
		],
		"mapped",
		[
			21271
		]
	],
	[
		[
			63844,
			63844
		],
		"mapped",
		[
			30971
		]
	],
	[
		[
			63845,
			63845
		],
		"mapped",
		[
			20415
		]
	],
	[
		[
			63846,
			63846
		],
		"mapped",
		[
			24489
		]
	],
	[
		[
			63847,
			63847
		],
		"mapped",
		[
			19981
		]
	],
	[
		[
			63848,
			63848
		],
		"mapped",
		[
			27852
		]
	],
	[
		[
			63849,
			63849
		],
		"mapped",
		[
			25976
		]
	],
	[
		[
			63850,
			63850
		],
		"mapped",
		[
			32034
		]
	],
	[
		[
			63851,
			63851
		],
		"mapped",
		[
			21443
		]
	],
	[
		[
			63852,
			63852
		],
		"mapped",
		[
			22622
		]
	],
	[
		[
			63853,
			63853
		],
		"mapped",
		[
			30465
		]
	],
	[
		[
			63854,
			63854
		],
		"mapped",
		[
			33865
		]
	],
	[
		[
			63855,
			63855
		],
		"mapped",
		[
			35498
		]
	],
	[
		[
			63856,
			63856
		],
		"mapped",
		[
			27578
		]
	],
	[
		[
			63857,
			63857
		],
		"mapped",
		[
			36784
		]
	],
	[
		[
			63858,
			63858
		],
		"mapped",
		[
			27784
		]
	],
	[
		[
			63859,
			63859
		],
		"mapped",
		[
			25342
		]
	],
	[
		[
			63860,
			63860
		],
		"mapped",
		[
			33509
		]
	],
	[
		[
			63861,
			63861
		],
		"mapped",
		[
			25504
		]
	],
	[
		[
			63862,
			63862
		],
		"mapped",
		[
			30053
		]
	],
	[
		[
			63863,
			63863
		],
		"mapped",
		[
			20142
		]
	],
	[
		[
			63864,
			63864
		],
		"mapped",
		[
			20841
		]
	],
	[
		[
			63865,
			63865
		],
		"mapped",
		[
			20937
		]
	],
	[
		[
			63866,
			63866
		],
		"mapped",
		[
			26753
		]
	],
	[
		[
			63867,
			63867
		],
		"mapped",
		[
			31975
		]
	],
	[
		[
			63868,
			63868
		],
		"mapped",
		[
			33391
		]
	],
	[
		[
			63869,
			63869
		],
		"mapped",
		[
			35538
		]
	],
	[
		[
			63870,
			63870
		],
		"mapped",
		[
			37327
		]
	],
	[
		[
			63871,
			63871
		],
		"mapped",
		[
			21237
		]
	],
	[
		[
			63872,
			63872
		],
		"mapped",
		[
			21570
		]
	],
	[
		[
			63873,
			63873
		],
		"mapped",
		[
			22899
		]
	],
	[
		[
			63874,
			63874
		],
		"mapped",
		[
			24300
		]
	],
	[
		[
			63875,
			63875
		],
		"mapped",
		[
			26053
		]
	],
	[
		[
			63876,
			63876
		],
		"mapped",
		[
			28670
		]
	],
	[
		[
			63877,
			63877
		],
		"mapped",
		[
			31018
		]
	],
	[
		[
			63878,
			63878
		],
		"mapped",
		[
			38317
		]
	],
	[
		[
			63879,
			63879
		],
		"mapped",
		[
			39530
		]
	],
	[
		[
			63880,
			63880
		],
		"mapped",
		[
			40599
		]
	],
	[
		[
			63881,
			63881
		],
		"mapped",
		[
			40654
		]
	],
	[
		[
			63882,
			63882
		],
		"mapped",
		[
			21147
		]
	],
	[
		[
			63883,
			63883
		],
		"mapped",
		[
			26310
		]
	],
	[
		[
			63884,
			63884
		],
		"mapped",
		[
			27511
		]
	],
	[
		[
			63885,
			63885
		],
		"mapped",
		[
			36706
		]
	],
	[
		[
			63886,
			63886
		],
		"mapped",
		[
			24180
		]
	],
	[
		[
			63887,
			63887
		],
		"mapped",
		[
			24976
		]
	],
	[
		[
			63888,
			63888
		],
		"mapped",
		[
			25088
		]
	],
	[
		[
			63889,
			63889
		],
		"mapped",
		[
			25754
		]
	],
	[
		[
			63890,
			63890
		],
		"mapped",
		[
			28451
		]
	],
	[
		[
			63891,
			63891
		],
		"mapped",
		[
			29001
		]
	],
	[
		[
			63892,
			63892
		],
		"mapped",
		[
			29833
		]
	],
	[
		[
			63893,
			63893
		],
		"mapped",
		[
			31178
		]
	],
	[
		[
			63894,
			63894
		],
		"mapped",
		[
			32244
		]
	],
	[
		[
			63895,
			63895
		],
		"mapped",
		[
			32879
		]
	],
	[
		[
			63896,
			63896
		],
		"mapped",
		[
			36646
		]
	],
	[
		[
			63897,
			63897
		],
		"mapped",
		[
			34030
		]
	],
	[
		[
			63898,
			63898
		],
		"mapped",
		[
			36899
		]
	],
	[
		[
			63899,
			63899
		],
		"mapped",
		[
			37706
		]
	],
	[
		[
			63900,
			63900
		],
		"mapped",
		[
			21015
		]
	],
	[
		[
			63901,
			63901
		],
		"mapped",
		[
			21155
		]
	],
	[
		[
			63902,
			63902
		],
		"mapped",
		[
			21693
		]
	],
	[
		[
			63903,
			63903
		],
		"mapped",
		[
			28872
		]
	],
	[
		[
			63904,
			63904
		],
		"mapped",
		[
			35010
		]
	],
	[
		[
			63905,
			63905
		],
		"mapped",
		[
			35498
		]
	],
	[
		[
			63906,
			63906
		],
		"mapped",
		[
			24265
		]
	],
	[
		[
			63907,
			63907
		],
		"mapped",
		[
			24565
		]
	],
	[
		[
			63908,
			63908
		],
		"mapped",
		[
			25467
		]
	],
	[
		[
			63909,
			63909
		],
		"mapped",
		[
			27566
		]
	],
	[
		[
			63910,
			63910
		],
		"mapped",
		[
			31806
		]
	],
	[
		[
			63911,
			63911
		],
		"mapped",
		[
			29557
		]
	],
	[
		[
			63912,
			63912
		],
		"mapped",
		[
			20196
		]
	],
	[
		[
			63913,
			63913
		],
		"mapped",
		[
			22265
		]
	],
	[
		[
			63914,
			63914
		],
		"mapped",
		[
			23527
		]
	],
	[
		[
			63915,
			63915
		],
		"mapped",
		[
			23994
		]
	],
	[
		[
			63916,
			63916
		],
		"mapped",
		[
			24604
		]
	],
	[
		[
			63917,
			63917
		],
		"mapped",
		[
			29618
		]
	],
	[
		[
			63918,
			63918
		],
		"mapped",
		[
			29801
		]
	],
	[
		[
			63919,
			63919
		],
		"mapped",
		[
			32666
		]
	],
	[
		[
			63920,
			63920
		],
		"mapped",
		[
			32838
		]
	],
	[
		[
			63921,
			63921
		],
		"mapped",
		[
			37428
		]
	],
	[
		[
			63922,
			63922
		],
		"mapped",
		[
			38646
		]
	],
	[
		[
			63923,
			63923
		],
		"mapped",
		[
			38728
		]
	],
	[
		[
			63924,
			63924
		],
		"mapped",
		[
			38936
		]
	],
	[
		[
			63925,
			63925
		],
		"mapped",
		[
			20363
		]
	],
	[
		[
			63926,
			63926
		],
		"mapped",
		[
			31150
		]
	],
	[
		[
			63927,
			63927
		],
		"mapped",
		[
			37300
		]
	],
	[
		[
			63928,
			63928
		],
		"mapped",
		[
			38584
		]
	],
	[
		[
			63929,
			63929
		],
		"mapped",
		[
			24801
		]
	],
	[
		[
			63930,
			63930
		],
		"mapped",
		[
			20102
		]
	],
	[
		[
			63931,
			63931
		],
		"mapped",
		[
			20698
		]
	],
	[
		[
			63932,
			63932
		],
		"mapped",
		[
			23534
		]
	],
	[
		[
			63933,
			63933
		],
		"mapped",
		[
			23615
		]
	],
	[
		[
			63934,
			63934
		],
		"mapped",
		[
			26009
		]
	],
	[
		[
			63935,
			63935
		],
		"mapped",
		[
			27138
		]
	],
	[
		[
			63936,
			63936
		],
		"mapped",
		[
			29134
		]
	],
	[
		[
			63937,
			63937
		],
		"mapped",
		[
			30274
		]
	],
	[
		[
			63938,
			63938
		],
		"mapped",
		[
			34044
		]
	],
	[
		[
			63939,
			63939
		],
		"mapped",
		[
			36988
		]
	],
	[
		[
			63940,
			63940
		],
		"mapped",
		[
			40845
		]
	],
	[
		[
			63941,
			63941
		],
		"mapped",
		[
			26248
		]
	],
	[
		[
			63942,
			63942
		],
		"mapped",
		[
			38446
		]
	],
	[
		[
			63943,
			63943
		],
		"mapped",
		[
			21129
		]
	],
	[
		[
			63944,
			63944
		],
		"mapped",
		[
			26491
		]
	],
	[
		[
			63945,
			63945
		],
		"mapped",
		[
			26611
		]
	],
	[
		[
			63946,
			63946
		],
		"mapped",
		[
			27969
		]
	],
	[
		[
			63947,
			63947
		],
		"mapped",
		[
			28316
		]
	],
	[
		[
			63948,
			63948
		],
		"mapped",
		[
			29705
		]
	],
	[
		[
			63949,
			63949
		],
		"mapped",
		[
			30041
		]
	],
	[
		[
			63950,
			63950
		],
		"mapped",
		[
			30827
		]
	],
	[
		[
			63951,
			63951
		],
		"mapped",
		[
			32016
		]
	],
	[
		[
			63952,
			63952
		],
		"mapped",
		[
			39006
		]
	],
	[
		[
			63953,
			63953
		],
		"mapped",
		[
			20845
		]
	],
	[
		[
			63954,
			63954
		],
		"mapped",
		[
			25134
		]
	],
	[
		[
			63955,
			63955
		],
		"mapped",
		[
			38520
		]
	],
	[
		[
			63956,
			63956
		],
		"mapped",
		[
			20523
		]
	],
	[
		[
			63957,
			63957
		],
		"mapped",
		[
			23833
		]
	],
	[
		[
			63958,
			63958
		],
		"mapped",
		[
			28138
		]
	],
	[
		[
			63959,
			63959
		],
		"mapped",
		[
			36650
		]
	],
	[
		[
			63960,
			63960
		],
		"mapped",
		[
			24459
		]
	],
	[
		[
			63961,
			63961
		],
		"mapped",
		[
			24900
		]
	],
	[
		[
			63962,
			63962
		],
		"mapped",
		[
			26647
		]
	],
	[
		[
			63963,
			63963
		],
		"mapped",
		[
			29575
		]
	],
	[
		[
			63964,
			63964
		],
		"mapped",
		[
			38534
		]
	],
	[
		[
			63965,
			63965
		],
		"mapped",
		[
			21033
		]
	],
	[
		[
			63966,
			63966
		],
		"mapped",
		[
			21519
		]
	],
	[
		[
			63967,
			63967
		],
		"mapped",
		[
			23653
		]
	],
	[
		[
			63968,
			63968
		],
		"mapped",
		[
			26131
		]
	],
	[
		[
			63969,
			63969
		],
		"mapped",
		[
			26446
		]
	],
	[
		[
			63970,
			63970
		],
		"mapped",
		[
			26792
		]
	],
	[
		[
			63971,
			63971
		],
		"mapped",
		[
			27877
		]
	],
	[
		[
			63972,
			63972
		],
		"mapped",
		[
			29702
		]
	],
	[
		[
			63973,
			63973
		],
		"mapped",
		[
			30178
		]
	],
	[
		[
			63974,
			63974
		],
		"mapped",
		[
			32633
		]
	],
	[
		[
			63975,
			63975
		],
		"mapped",
		[
			35023
		]
	],
	[
		[
			63976,
			63976
		],
		"mapped",
		[
			35041
		]
	],
	[
		[
			63977,
			63977
		],
		"mapped",
		[
			37324
		]
	],
	[
		[
			63978,
			63978
		],
		"mapped",
		[
			38626
		]
	],
	[
		[
			63979,
			63979
		],
		"mapped",
		[
			21311
		]
	],
	[
		[
			63980,
			63980
		],
		"mapped",
		[
			28346
		]
	],
	[
		[
			63981,
			63981
		],
		"mapped",
		[
			21533
		]
	],
	[
		[
			63982,
			63982
		],
		"mapped",
		[
			29136
		]
	],
	[
		[
			63983,
			63983
		],
		"mapped",
		[
			29848
		]
	],
	[
		[
			63984,
			63984
		],
		"mapped",
		[
			34298
		]
	],
	[
		[
			63985,
			63985
		],
		"mapped",
		[
			38563
		]
	],
	[
		[
			63986,
			63986
		],
		"mapped",
		[
			40023
		]
	],
	[
		[
			63987,
			63987
		],
		"mapped",
		[
			40607
		]
	],
	[
		[
			63988,
			63988
		],
		"mapped",
		[
			26519
		]
	],
	[
		[
			63989,
			63989
		],
		"mapped",
		[
			28107
		]
	],
	[
		[
			63990,
			63990
		],
		"mapped",
		[
			33256
		]
	],
	[
		[
			63991,
			63991
		],
		"mapped",
		[
			31435
		]
	],
	[
		[
			63992,
			63992
		],
		"mapped",
		[
			31520
		]
	],
	[
		[
			63993,
			63993
		],
		"mapped",
		[
			31890
		]
	],
	[
		[
			63994,
			63994
		],
		"mapped",
		[
			29376
		]
	],
	[
		[
			63995,
			63995
		],
		"mapped",
		[
			28825
		]
	],
	[
		[
			63996,
			63996
		],
		"mapped",
		[
			35672
		]
	],
	[
		[
			63997,
			63997
		],
		"mapped",
		[
			20160
		]
	],
	[
		[
			63998,
			63998
		],
		"mapped",
		[
			33590
		]
	],
	[
		[
			63999,
			63999
		],
		"mapped",
		[
			21050
		]
	],
	[
		[
			64000,
			64000
		],
		"mapped",
		[
			20999
		]
	],
	[
		[
			64001,
			64001
		],
		"mapped",
		[
			24230
		]
	],
	[
		[
			64002,
			64002
		],
		"mapped",
		[
			25299
		]
	],
	[
		[
			64003,
			64003
		],
		"mapped",
		[
			31958
		]
	],
	[
		[
			64004,
			64004
		],
		"mapped",
		[
			23429
		]
	],
	[
		[
			64005,
			64005
		],
		"mapped",
		[
			27934
		]
	],
	[
		[
			64006,
			64006
		],
		"mapped",
		[
			26292
		]
	],
	[
		[
			64007,
			64007
		],
		"mapped",
		[
			36667
		]
	],
	[
		[
			64008,
			64008
		],
		"mapped",
		[
			34892
		]
	],
	[
		[
			64009,
			64009
		],
		"mapped",
		[
			38477
		]
	],
	[
		[
			64010,
			64010
		],
		"mapped",
		[
			35211
		]
	],
	[
		[
			64011,
			64011
		],
		"mapped",
		[
			24275
		]
	],
	[
		[
			64012,
			64012
		],
		"mapped",
		[
			20800
		]
	],
	[
		[
			64013,
			64013
		],
		"mapped",
		[
			21952
		]
	],
	[
		[
			64014,
			64015
		],
		"valid"
	],
	[
		[
			64016,
			64016
		],
		"mapped",
		[
			22618
		]
	],
	[
		[
			64017,
			64017
		],
		"valid"
	],
	[
		[
			64018,
			64018
		],
		"mapped",
		[
			26228
		]
	],
	[
		[
			64019,
			64020
		],
		"valid"
	],
	[
		[
			64021,
			64021
		],
		"mapped",
		[
			20958
		]
	],
	[
		[
			64022,
			64022
		],
		"mapped",
		[
			29482
		]
	],
	[
		[
			64023,
			64023
		],
		"mapped",
		[
			30410
		]
	],
	[
		[
			64024,
			64024
		],
		"mapped",
		[
			31036
		]
	],
	[
		[
			64025,
			64025
		],
		"mapped",
		[
			31070
		]
	],
	[
		[
			64026,
			64026
		],
		"mapped",
		[
			31077
		]
	],
	[
		[
			64027,
			64027
		],
		"mapped",
		[
			31119
		]
	],
	[
		[
			64028,
			64028
		],
		"mapped",
		[
			38742
		]
	],
	[
		[
			64029,
			64029
		],
		"mapped",
		[
			31934
		]
	],
	[
		[
			64030,
			64030
		],
		"mapped",
		[
			32701
		]
	],
	[
		[
			64031,
			64031
		],
		"valid"
	],
	[
		[
			64032,
			64032
		],
		"mapped",
		[
			34322
		]
	],
	[
		[
			64033,
			64033
		],
		"valid"
	],
	[
		[
			64034,
			64034
		],
		"mapped",
		[
			35576
		]
	],
	[
		[
			64035,
			64036
		],
		"valid"
	],
	[
		[
			64037,
			64037
		],
		"mapped",
		[
			36920
		]
	],
	[
		[
			64038,
			64038
		],
		"mapped",
		[
			37117
		]
	],
	[
		[
			64039,
			64041
		],
		"valid"
	],
	[
		[
			64042,
			64042
		],
		"mapped",
		[
			39151
		]
	],
	[
		[
			64043,
			64043
		],
		"mapped",
		[
			39164
		]
	],
	[
		[
			64044,
			64044
		],
		"mapped",
		[
			39208
		]
	],
	[
		[
			64045,
			64045
		],
		"mapped",
		[
			40372
		]
	],
	[
		[
			64046,
			64046
		],
		"mapped",
		[
			37086
		]
	],
	[
		[
			64047,
			64047
		],
		"mapped",
		[
			38583
		]
	],
	[
		[
			64048,
			64048
		],
		"mapped",
		[
			20398
		]
	],
	[
		[
			64049,
			64049
		],
		"mapped",
		[
			20711
		]
	],
	[
		[
			64050,
			64050
		],
		"mapped",
		[
			20813
		]
	],
	[
		[
			64051,
			64051
		],
		"mapped",
		[
			21193
		]
	],
	[
		[
			64052,
			64052
		],
		"mapped",
		[
			21220
		]
	],
	[
		[
			64053,
			64053
		],
		"mapped",
		[
			21329
		]
	],
	[
		[
			64054,
			64054
		],
		"mapped",
		[
			21917
		]
	],
	[
		[
			64055,
			64055
		],
		"mapped",
		[
			22022
		]
	],
	[
		[
			64056,
			64056
		],
		"mapped",
		[
			22120
		]
	],
	[
		[
			64057,
			64057
		],
		"mapped",
		[
			22592
		]
	],
	[
		[
			64058,
			64058
		],
		"mapped",
		[
			22696
		]
	],
	[
		[
			64059,
			64059
		],
		"mapped",
		[
			23652
		]
	],
	[
		[
			64060,
			64060
		],
		"mapped",
		[
			23662
		]
	],
	[
		[
			64061,
			64061
		],
		"mapped",
		[
			24724
		]
	],
	[
		[
			64062,
			64062
		],
		"mapped",
		[
			24936
		]
	],
	[
		[
			64063,
			64063
		],
		"mapped",
		[
			24974
		]
	],
	[
		[
			64064,
			64064
		],
		"mapped",
		[
			25074
		]
	],
	[
		[
			64065,
			64065
		],
		"mapped",
		[
			25935
		]
	],
	[
		[
			64066,
			64066
		],
		"mapped",
		[
			26082
		]
	],
	[
		[
			64067,
			64067
		],
		"mapped",
		[
			26257
		]
	],
	[
		[
			64068,
			64068
		],
		"mapped",
		[
			26757
		]
	],
	[
		[
			64069,
			64069
		],
		"mapped",
		[
			28023
		]
	],
	[
		[
			64070,
			64070
		],
		"mapped",
		[
			28186
		]
	],
	[
		[
			64071,
			64071
		],
		"mapped",
		[
			28450
		]
	],
	[
		[
			64072,
			64072
		],
		"mapped",
		[
			29038
		]
	],
	[
		[
			64073,
			64073
		],
		"mapped",
		[
			29227
		]
	],
	[
		[
			64074,
			64074
		],
		"mapped",
		[
			29730
		]
	],
	[
		[
			64075,
			64075
		],
		"mapped",
		[
			30865
		]
	],
	[
		[
			64076,
			64076
		],
		"mapped",
		[
			31038
		]
	],
	[
		[
			64077,
			64077
		],
		"mapped",
		[
			31049
		]
	],
	[
		[
			64078,
			64078
		],
		"mapped",
		[
			31048
		]
	],
	[
		[
			64079,
			64079
		],
		"mapped",
		[
			31056
		]
	],
	[
		[
			64080,
			64080
		],
		"mapped",
		[
			31062
		]
	],
	[
		[
			64081,
			64081
		],
		"mapped",
		[
			31069
		]
	],
	[
		[
			64082,
			64082
		],
		"mapped",
		[
			31117
		]
	],
	[
		[
			64083,
			64083
		],
		"mapped",
		[
			31118
		]
	],
	[
		[
			64084,
			64084
		],
		"mapped",
		[
			31296
		]
	],
	[
		[
			64085,
			64085
		],
		"mapped",
		[
			31361
		]
	],
	[
		[
			64086,
			64086
		],
		"mapped",
		[
			31680
		]
	],
	[
		[
			64087,
			64087
		],
		"mapped",
		[
			32244
		]
	],
	[
		[
			64088,
			64088
		],
		"mapped",
		[
			32265
		]
	],
	[
		[
			64089,
			64089
		],
		"mapped",
		[
			32321
		]
	],
	[
		[
			64090,
			64090
		],
		"mapped",
		[
			32626
		]
	],
	[
		[
			64091,
			64091
		],
		"mapped",
		[
			32773
		]
	],
	[
		[
			64092,
			64092
		],
		"mapped",
		[
			33261
		]
	],
	[
		[
			64093,
			64094
		],
		"mapped",
		[
			33401
		]
	],
	[
		[
			64095,
			64095
		],
		"mapped",
		[
			33879
		]
	],
	[
		[
			64096,
			64096
		],
		"mapped",
		[
			35088
		]
	],
	[
		[
			64097,
			64097
		],
		"mapped",
		[
			35222
		]
	],
	[
		[
			64098,
			64098
		],
		"mapped",
		[
			35585
		]
	],
	[
		[
			64099,
			64099
		],
		"mapped",
		[
			35641
		]
	],
	[
		[
			64100,
			64100
		],
		"mapped",
		[
			36051
		]
	],
	[
		[
			64101,
			64101
		],
		"mapped",
		[
			36104
		]
	],
	[
		[
			64102,
			64102
		],
		"mapped",
		[
			36790
		]
	],
	[
		[
			64103,
			64103
		],
		"mapped",
		[
			36920
		]
	],
	[
		[
			64104,
			64104
		],
		"mapped",
		[
			38627
		]
	],
	[
		[
			64105,
			64105
		],
		"mapped",
		[
			38911
		]
	],
	[
		[
			64106,
			64106
		],
		"mapped",
		[
			38971
		]
	],
	[
		[
			64107,
			64107
		],
		"mapped",
		[
			24693
		]
	],
	[
		[
			64108,
			64108
		],
		"mapped",
		[
			148206
		]
	],
	[
		[
			64109,
			64109
		],
		"mapped",
		[
			33304
		]
	],
	[
		[
			64110,
			64111
		],
		"disallowed"
	],
	[
		[
			64112,
			64112
		],
		"mapped",
		[
			20006
		]
	],
	[
		[
			64113,
			64113
		],
		"mapped",
		[
			20917
		]
	],
	[
		[
			64114,
			64114
		],
		"mapped",
		[
			20840
		]
	],
	[
		[
			64115,
			64115
		],
		"mapped",
		[
			20352
		]
	],
	[
		[
			64116,
			64116
		],
		"mapped",
		[
			20805
		]
	],
	[
		[
			64117,
			64117
		],
		"mapped",
		[
			20864
		]
	],
	[
		[
			64118,
			64118
		],
		"mapped",
		[
			21191
		]
	],
	[
		[
			64119,
			64119
		],
		"mapped",
		[
			21242
		]
	],
	[
		[
			64120,
			64120
		],
		"mapped",
		[
			21917
		]
	],
	[
		[
			64121,
			64121
		],
		"mapped",
		[
			21845
		]
	],
	[
		[
			64122,
			64122
		],
		"mapped",
		[
			21913
		]
	],
	[
		[
			64123,
			64123
		],
		"mapped",
		[
			21986
		]
	],
	[
		[
			64124,
			64124
		],
		"mapped",
		[
			22618
		]
	],
	[
		[
			64125,
			64125
		],
		"mapped",
		[
			22707
		]
	],
	[
		[
			64126,
			64126
		],
		"mapped",
		[
			22852
		]
	],
	[
		[
			64127,
			64127
		],
		"mapped",
		[
			22868
		]
	],
	[
		[
			64128,
			64128
		],
		"mapped",
		[
			23138
		]
	],
	[
		[
			64129,
			64129
		],
		"mapped",
		[
			23336
		]
	],
	[
		[
			64130,
			64130
		],
		"mapped",
		[
			24274
		]
	],
	[
		[
			64131,
			64131
		],
		"mapped",
		[
			24281
		]
	],
	[
		[
			64132,
			64132
		],
		"mapped",
		[
			24425
		]
	],
	[
		[
			64133,
			64133
		],
		"mapped",
		[
			24493
		]
	],
	[
		[
			64134,
			64134
		],
		"mapped",
		[
			24792
		]
	],
	[
		[
			64135,
			64135
		],
		"mapped",
		[
			24910
		]
	],
	[
		[
			64136,
			64136
		],
		"mapped",
		[
			24840
		]
	],
	[
		[
			64137,
			64137
		],
		"mapped",
		[
			24974
		]
	],
	[
		[
			64138,
			64138
		],
		"mapped",
		[
			24928
		]
	],
	[
		[
			64139,
			64139
		],
		"mapped",
		[
			25074
		]
	],
	[
		[
			64140,
			64140
		],
		"mapped",
		[
			25140
		]
	],
	[
		[
			64141,
			64141
		],
		"mapped",
		[
			25540
		]
	],
	[
		[
			64142,
			64142
		],
		"mapped",
		[
			25628
		]
	],
	[
		[
			64143,
			64143
		],
		"mapped",
		[
			25682
		]
	],
	[
		[
			64144,
			64144
		],
		"mapped",
		[
			25942
		]
	],
	[
		[
			64145,
			64145
		],
		"mapped",
		[
			26228
		]
	],
	[
		[
			64146,
			64146
		],
		"mapped",
		[
			26391
		]
	],
	[
		[
			64147,
			64147
		],
		"mapped",
		[
			26395
		]
	],
	[
		[
			64148,
			64148
		],
		"mapped",
		[
			26454
		]
	],
	[
		[
			64149,
			64149
		],
		"mapped",
		[
			27513
		]
	],
	[
		[
			64150,
			64150
		],
		"mapped",
		[
			27578
		]
	],
	[
		[
			64151,
			64151
		],
		"mapped",
		[
			27969
		]
	],
	[
		[
			64152,
			64152
		],
		"mapped",
		[
			28379
		]
	],
	[
		[
			64153,
			64153
		],
		"mapped",
		[
			28363
		]
	],
	[
		[
			64154,
			64154
		],
		"mapped",
		[
			28450
		]
	],
	[
		[
			64155,
			64155
		],
		"mapped",
		[
			28702
		]
	],
	[
		[
			64156,
			64156
		],
		"mapped",
		[
			29038
		]
	],
	[
		[
			64157,
			64157
		],
		"mapped",
		[
			30631
		]
	],
	[
		[
			64158,
			64158
		],
		"mapped",
		[
			29237
		]
	],
	[
		[
			64159,
			64159
		],
		"mapped",
		[
			29359
		]
	],
	[
		[
			64160,
			64160
		],
		"mapped",
		[
			29482
		]
	],
	[
		[
			64161,
			64161
		],
		"mapped",
		[
			29809
		]
	],
	[
		[
			64162,
			64162
		],
		"mapped",
		[
			29958
		]
	],
	[
		[
			64163,
			64163
		],
		"mapped",
		[
			30011
		]
	],
	[
		[
			64164,
			64164
		],
		"mapped",
		[
			30237
		]
	],
	[
		[
			64165,
			64165
		],
		"mapped",
		[
			30239
		]
	],
	[
		[
			64166,
			64166
		],
		"mapped",
		[
			30410
		]
	],
	[
		[
			64167,
			64167
		],
		"mapped",
		[
			30427
		]
	],
	[
		[
			64168,
			64168
		],
		"mapped",
		[
			30452
		]
	],
	[
		[
			64169,
			64169
		],
		"mapped",
		[
			30538
		]
	],
	[
		[
			64170,
			64170
		],
		"mapped",
		[
			30528
		]
	],
	[
		[
			64171,
			64171
		],
		"mapped",
		[
			30924
		]
	],
	[
		[
			64172,
			64172
		],
		"mapped",
		[
			31409
		]
	],
	[
		[
			64173,
			64173
		],
		"mapped",
		[
			31680
		]
	],
	[
		[
			64174,
			64174
		],
		"mapped",
		[
			31867
		]
	],
	[
		[
			64175,
			64175
		],
		"mapped",
		[
			32091
		]
	],
	[
		[
			64176,
			64176
		],
		"mapped",
		[
			32244
		]
	],
	[
		[
			64177,
			64177
		],
		"mapped",
		[
			32574
		]
	],
	[
		[
			64178,
			64178
		],
		"mapped",
		[
			32773
		]
	],
	[
		[
			64179,
			64179
		],
		"mapped",
		[
			33618
		]
	],
	[
		[
			64180,
			64180
		],
		"mapped",
		[
			33775
		]
	],
	[
		[
			64181,
			64181
		],
		"mapped",
		[
			34681
		]
	],
	[
		[
			64182,
			64182
		],
		"mapped",
		[
			35137
		]
	],
	[
		[
			64183,
			64183
		],
		"mapped",
		[
			35206
		]
	],
	[
		[
			64184,
			64184
		],
		"mapped",
		[
			35222
		]
	],
	[
		[
			64185,
			64185
		],
		"mapped",
		[
			35519
		]
	],
	[
		[
			64186,
			64186
		],
		"mapped",
		[
			35576
		]
	],
	[
		[
			64187,
			64187
		],
		"mapped",
		[
			35531
		]
	],
	[
		[
			64188,
			64188
		],
		"mapped",
		[
			35585
		]
	],
	[
		[
			64189,
			64189
		],
		"mapped",
		[
			35582
		]
	],
	[
		[
			64190,
			64190
		],
		"mapped",
		[
			35565
		]
	],
	[
		[
			64191,
			64191
		],
		"mapped",
		[
			35641
		]
	],
	[
		[
			64192,
			64192
		],
		"mapped",
		[
			35722
		]
	],
	[
		[
			64193,
			64193
		],
		"mapped",
		[
			36104
		]
	],
	[
		[
			64194,
			64194
		],
		"mapped",
		[
			36664
		]
	],
	[
		[
			64195,
			64195
		],
		"mapped",
		[
			36978
		]
	],
	[
		[
			64196,
			64196
		],
		"mapped",
		[
			37273
		]
	],
	[
		[
			64197,
			64197
		],
		"mapped",
		[
			37494
		]
	],
	[
		[
			64198,
			64198
		],
		"mapped",
		[
			38524
		]
	],
	[
		[
			64199,
			64199
		],
		"mapped",
		[
			38627
		]
	],
	[
		[
			64200,
			64200
		],
		"mapped",
		[
			38742
		]
	],
	[
		[
			64201,
			64201
		],
		"mapped",
		[
			38875
		]
	],
	[
		[
			64202,
			64202
		],
		"mapped",
		[
			38911
		]
	],
	[
		[
			64203,
			64203
		],
		"mapped",
		[
			38923
		]
	],
	[
		[
			64204,
			64204
		],
		"mapped",
		[
			38971
		]
	],
	[
		[
			64205,
			64205
		],
		"mapped",
		[
			39698
		]
	],
	[
		[
			64206,
			64206
		],
		"mapped",
		[
			40860
		]
	],
	[
		[
			64207,
			64207
		],
		"mapped",
		[
			141386
		]
	],
	[
		[
			64208,
			64208
		],
		"mapped",
		[
			141380
		]
	],
	[
		[
			64209,
			64209
		],
		"mapped",
		[
			144341
		]
	],
	[
		[
			64210,
			64210
		],
		"mapped",
		[
			15261
		]
	],
	[
		[
			64211,
			64211
		],
		"mapped",
		[
			16408
		]
	],
	[
		[
			64212,
			64212
		],
		"mapped",
		[
			16441
		]
	],
	[
		[
			64213,
			64213
		],
		"mapped",
		[
			152137
		]
	],
	[
		[
			64214,
			64214
		],
		"mapped",
		[
			154832
		]
	],
	[
		[
			64215,
			64215
		],
		"mapped",
		[
			163539
		]
	],
	[
		[
			64216,
			64216
		],
		"mapped",
		[
			40771
		]
	],
	[
		[
			64217,
			64217
		],
		"mapped",
		[
			40846
		]
	],
	[
		[
			64218,
			64255
		],
		"disallowed"
	],
	[
		[
			64256,
			64256
		],
		"mapped",
		[
			102,
			102
		]
	],
	[
		[
			64257,
			64257
		],
		"mapped",
		[
			102,
			105
		]
	],
	[
		[
			64258,
			64258
		],
		"mapped",
		[
			102,
			108
		]
	],
	[
		[
			64259,
			64259
		],
		"mapped",
		[
			102,
			102,
			105
		]
	],
	[
		[
			64260,
			64260
		],
		"mapped",
		[
			102,
			102,
			108
		]
	],
	[
		[
			64261,
			64262
		],
		"mapped",
		[
			115,
			116
		]
	],
	[
		[
			64263,
			64274
		],
		"disallowed"
	],
	[
		[
			64275,
			64275
		],
		"mapped",
		[
			1396,
			1398
		]
	],
	[
		[
			64276,
			64276
		],
		"mapped",
		[
			1396,
			1381
		]
	],
	[
		[
			64277,
			64277
		],
		"mapped",
		[
			1396,
			1387
		]
	],
	[
		[
			64278,
			64278
		],
		"mapped",
		[
			1406,
			1398
		]
	],
	[
		[
			64279,
			64279
		],
		"mapped",
		[
			1396,
			1389
		]
	],
	[
		[
			64280,
			64284
		],
		"disallowed"
	],
	[
		[
			64285,
			64285
		],
		"mapped",
		[
			1497,
			1460
		]
	],
	[
		[
			64286,
			64286
		],
		"valid"
	],
	[
		[
			64287,
			64287
		],
		"mapped",
		[
			1522,
			1463
		]
	],
	[
		[
			64288,
			64288
		],
		"mapped",
		[
			1506
		]
	],
	[
		[
			64289,
			64289
		],
		"mapped",
		[
			1488
		]
	],
	[
		[
			64290,
			64290
		],
		"mapped",
		[
			1491
		]
	],
	[
		[
			64291,
			64291
		],
		"mapped",
		[
			1492
		]
	],
	[
		[
			64292,
			64292
		],
		"mapped",
		[
			1499
		]
	],
	[
		[
			64293,
			64293
		],
		"mapped",
		[
			1500
		]
	],
	[
		[
			64294,
			64294
		],
		"mapped",
		[
			1501
		]
	],
	[
		[
			64295,
			64295
		],
		"mapped",
		[
			1512
		]
	],
	[
		[
			64296,
			64296
		],
		"mapped",
		[
			1514
		]
	],
	[
		[
			64297,
			64297
		],
		"disallowed_STD3_mapped",
		[
			43
		]
	],
	[
		[
			64298,
			64298
		],
		"mapped",
		[
			1513,
			1473
		]
	],
	[
		[
			64299,
			64299
		],
		"mapped",
		[
			1513,
			1474
		]
	],
	[
		[
			64300,
			64300
		],
		"mapped",
		[
			1513,
			1468,
			1473
		]
	],
	[
		[
			64301,
			64301
		],
		"mapped",
		[
			1513,
			1468,
			1474
		]
	],
	[
		[
			64302,
			64302
		],
		"mapped",
		[
			1488,
			1463
		]
	],
	[
		[
			64303,
			64303
		],
		"mapped",
		[
			1488,
			1464
		]
	],
	[
		[
			64304,
			64304
		],
		"mapped",
		[
			1488,
			1468
		]
	],
	[
		[
			64305,
			64305
		],
		"mapped",
		[
			1489,
			1468
		]
	],
	[
		[
			64306,
			64306
		],
		"mapped",
		[
			1490,
			1468
		]
	],
	[
		[
			64307,
			64307
		],
		"mapped",
		[
			1491,
			1468
		]
	],
	[
		[
			64308,
			64308
		],
		"mapped",
		[
			1492,
			1468
		]
	],
	[
		[
			64309,
			64309
		],
		"mapped",
		[
			1493,
			1468
		]
	],
	[
		[
			64310,
			64310
		],
		"mapped",
		[
			1494,
			1468
		]
	],
	[
		[
			64311,
			64311
		],
		"disallowed"
	],
	[
		[
			64312,
			64312
		],
		"mapped",
		[
			1496,
			1468
		]
	],
	[
		[
			64313,
			64313
		],
		"mapped",
		[
			1497,
			1468
		]
	],
	[
		[
			64314,
			64314
		],
		"mapped",
		[
			1498,
			1468
		]
	],
	[
		[
			64315,
			64315
		],
		"mapped",
		[
			1499,
			1468
		]
	],
	[
		[
			64316,
			64316
		],
		"mapped",
		[
			1500,
			1468
		]
	],
	[
		[
			64317,
			64317
		],
		"disallowed"
	],
	[
		[
			64318,
			64318
		],
		"mapped",
		[
			1502,
			1468
		]
	],
	[
		[
			64319,
			64319
		],
		"disallowed"
	],
	[
		[
			64320,
			64320
		],
		"mapped",
		[
			1504,
			1468
		]
	],
	[
		[
			64321,
			64321
		],
		"mapped",
		[
			1505,
			1468
		]
	],
	[
		[
			64322,
			64322
		],
		"disallowed"
	],
	[
		[
			64323,
			64323
		],
		"mapped",
		[
			1507,
			1468
		]
	],
	[
		[
			64324,
			64324
		],
		"mapped",
		[
			1508,
			1468
		]
	],
	[
		[
			64325,
			64325
		],
		"disallowed"
	],
	[
		[
			64326,
			64326
		],
		"mapped",
		[
			1510,
			1468
		]
	],
	[
		[
			64327,
			64327
		],
		"mapped",
		[
			1511,
			1468
		]
	],
	[
		[
			64328,
			64328
		],
		"mapped",
		[
			1512,
			1468
		]
	],
	[
		[
			64329,
			64329
		],
		"mapped",
		[
			1513,
			1468
		]
	],
	[
		[
			64330,
			64330
		],
		"mapped",
		[
			1514,
			1468
		]
	],
	[
		[
			64331,
			64331
		],
		"mapped",
		[
			1493,
			1465
		]
	],
	[
		[
			64332,
			64332
		],
		"mapped",
		[
			1489,
			1471
		]
	],
	[
		[
			64333,
			64333
		],
		"mapped",
		[
			1499,
			1471
		]
	],
	[
		[
			64334,
			64334
		],
		"mapped",
		[
			1508,
			1471
		]
	],
	[
		[
			64335,
			64335
		],
		"mapped",
		[
			1488,
			1500
		]
	],
	[
		[
			64336,
			64337
		],
		"mapped",
		[
			1649
		]
	],
	[
		[
			64338,
			64341
		],
		"mapped",
		[
			1659
		]
	],
	[
		[
			64342,
			64345
		],
		"mapped",
		[
			1662
		]
	],
	[
		[
			64346,
			64349
		],
		"mapped",
		[
			1664
		]
	],
	[
		[
			64350,
			64353
		],
		"mapped",
		[
			1658
		]
	],
	[
		[
			64354,
			64357
		],
		"mapped",
		[
			1663
		]
	],
	[
		[
			64358,
			64361
		],
		"mapped",
		[
			1657
		]
	],
	[
		[
			64362,
			64365
		],
		"mapped",
		[
			1700
		]
	],
	[
		[
			64366,
			64369
		],
		"mapped",
		[
			1702
		]
	],
	[
		[
			64370,
			64373
		],
		"mapped",
		[
			1668
		]
	],
	[
		[
			64374,
			64377
		],
		"mapped",
		[
			1667
		]
	],
	[
		[
			64378,
			64381
		],
		"mapped",
		[
			1670
		]
	],
	[
		[
			64382,
			64385
		],
		"mapped",
		[
			1671
		]
	],
	[
		[
			64386,
			64387
		],
		"mapped",
		[
			1677
		]
	],
	[
		[
			64388,
			64389
		],
		"mapped",
		[
			1676
		]
	],
	[
		[
			64390,
			64391
		],
		"mapped",
		[
			1678
		]
	],
	[
		[
			64392,
			64393
		],
		"mapped",
		[
			1672
		]
	],
	[
		[
			64394,
			64395
		],
		"mapped",
		[
			1688
		]
	],
	[
		[
			64396,
			64397
		],
		"mapped",
		[
			1681
		]
	],
	[
		[
			64398,
			64401
		],
		"mapped",
		[
			1705
		]
	],
	[
		[
			64402,
			64405
		],
		"mapped",
		[
			1711
		]
	],
	[
		[
			64406,
			64409
		],
		"mapped",
		[
			1715
		]
	],
	[
		[
			64410,
			64413
		],
		"mapped",
		[
			1713
		]
	],
	[
		[
			64414,
			64415
		],
		"mapped",
		[
			1722
		]
	],
	[
		[
			64416,
			64419
		],
		"mapped",
		[
			1723
		]
	],
	[
		[
			64420,
			64421
		],
		"mapped",
		[
			1728
		]
	],
	[
		[
			64422,
			64425
		],
		"mapped",
		[
			1729
		]
	],
	[
		[
			64426,
			64429
		],
		"mapped",
		[
			1726
		]
	],
	[
		[
			64430,
			64431
		],
		"mapped",
		[
			1746
		]
	],
	[
		[
			64432,
			64433
		],
		"mapped",
		[
			1747
		]
	],
	[
		[
			64434,
			64449
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			64450,
			64466
		],
		"disallowed"
	],
	[
		[
			64467,
			64470
		],
		"mapped",
		[
			1709
		]
	],
	[
		[
			64471,
			64472
		],
		"mapped",
		[
			1735
		]
	],
	[
		[
			64473,
			64474
		],
		"mapped",
		[
			1734
		]
	],
	[
		[
			64475,
			64476
		],
		"mapped",
		[
			1736
		]
	],
	[
		[
			64477,
			64477
		],
		"mapped",
		[
			1735,
			1652
		]
	],
	[
		[
			64478,
			64479
		],
		"mapped",
		[
			1739
		]
	],
	[
		[
			64480,
			64481
		],
		"mapped",
		[
			1733
		]
	],
	[
		[
			64482,
			64483
		],
		"mapped",
		[
			1737
		]
	],
	[
		[
			64484,
			64487
		],
		"mapped",
		[
			1744
		]
	],
	[
		[
			64488,
			64489
		],
		"mapped",
		[
			1609
		]
	],
	[
		[
			64490,
			64491
		],
		"mapped",
		[
			1574,
			1575
		]
	],
	[
		[
			64492,
			64493
		],
		"mapped",
		[
			1574,
			1749
		]
	],
	[
		[
			64494,
			64495
		],
		"mapped",
		[
			1574,
			1608
		]
	],
	[
		[
			64496,
			64497
		],
		"mapped",
		[
			1574,
			1735
		]
	],
	[
		[
			64498,
			64499
		],
		"mapped",
		[
			1574,
			1734
		]
	],
	[
		[
			64500,
			64501
		],
		"mapped",
		[
			1574,
			1736
		]
	],
	[
		[
			64502,
			64504
		],
		"mapped",
		[
			1574,
			1744
		]
	],
	[
		[
			64505,
			64507
		],
		"mapped",
		[
			1574,
			1609
		]
	],
	[
		[
			64508,
			64511
		],
		"mapped",
		[
			1740
		]
	],
	[
		[
			64512,
			64512
		],
		"mapped",
		[
			1574,
			1580
		]
	],
	[
		[
			64513,
			64513
		],
		"mapped",
		[
			1574,
			1581
		]
	],
	[
		[
			64514,
			64514
		],
		"mapped",
		[
			1574,
			1605
		]
	],
	[
		[
			64515,
			64515
		],
		"mapped",
		[
			1574,
			1609
		]
	],
	[
		[
			64516,
			64516
		],
		"mapped",
		[
			1574,
			1610
		]
	],
	[
		[
			64517,
			64517
		],
		"mapped",
		[
			1576,
			1580
		]
	],
	[
		[
			64518,
			64518
		],
		"mapped",
		[
			1576,
			1581
		]
	],
	[
		[
			64519,
			64519
		],
		"mapped",
		[
			1576,
			1582
		]
	],
	[
		[
			64520,
			64520
		],
		"mapped",
		[
			1576,
			1605
		]
	],
	[
		[
			64521,
			64521
		],
		"mapped",
		[
			1576,
			1609
		]
	],
	[
		[
			64522,
			64522
		],
		"mapped",
		[
			1576,
			1610
		]
	],
	[
		[
			64523,
			64523
		],
		"mapped",
		[
			1578,
			1580
		]
	],
	[
		[
			64524,
			64524
		],
		"mapped",
		[
			1578,
			1581
		]
	],
	[
		[
			64525,
			64525
		],
		"mapped",
		[
			1578,
			1582
		]
	],
	[
		[
			64526,
			64526
		],
		"mapped",
		[
			1578,
			1605
		]
	],
	[
		[
			64527,
			64527
		],
		"mapped",
		[
			1578,
			1609
		]
	],
	[
		[
			64528,
			64528
		],
		"mapped",
		[
			1578,
			1610
		]
	],
	[
		[
			64529,
			64529
		],
		"mapped",
		[
			1579,
			1580
		]
	],
	[
		[
			64530,
			64530
		],
		"mapped",
		[
			1579,
			1605
		]
	],
	[
		[
			64531,
			64531
		],
		"mapped",
		[
			1579,
			1609
		]
	],
	[
		[
			64532,
			64532
		],
		"mapped",
		[
			1579,
			1610
		]
	],
	[
		[
			64533,
			64533
		],
		"mapped",
		[
			1580,
			1581
		]
	],
	[
		[
			64534,
			64534
		],
		"mapped",
		[
			1580,
			1605
		]
	],
	[
		[
			64535,
			64535
		],
		"mapped",
		[
			1581,
			1580
		]
	],
	[
		[
			64536,
			64536
		],
		"mapped",
		[
			1581,
			1605
		]
	],
	[
		[
			64537,
			64537
		],
		"mapped",
		[
			1582,
			1580
		]
	],
	[
		[
			64538,
			64538
		],
		"mapped",
		[
			1582,
			1581
		]
	],
	[
		[
			64539,
			64539
		],
		"mapped",
		[
			1582,
			1605
		]
	],
	[
		[
			64540,
			64540
		],
		"mapped",
		[
			1587,
			1580
		]
	],
	[
		[
			64541,
			64541
		],
		"mapped",
		[
			1587,
			1581
		]
	],
	[
		[
			64542,
			64542
		],
		"mapped",
		[
			1587,
			1582
		]
	],
	[
		[
			64543,
			64543
		],
		"mapped",
		[
			1587,
			1605
		]
	],
	[
		[
			64544,
			64544
		],
		"mapped",
		[
			1589,
			1581
		]
	],
	[
		[
			64545,
			64545
		],
		"mapped",
		[
			1589,
			1605
		]
	],
	[
		[
			64546,
			64546
		],
		"mapped",
		[
			1590,
			1580
		]
	],
	[
		[
			64547,
			64547
		],
		"mapped",
		[
			1590,
			1581
		]
	],
	[
		[
			64548,
			64548
		],
		"mapped",
		[
			1590,
			1582
		]
	],
	[
		[
			64549,
			64549
		],
		"mapped",
		[
			1590,
			1605
		]
	],
	[
		[
			64550,
			64550
		],
		"mapped",
		[
			1591,
			1581
		]
	],
	[
		[
			64551,
			64551
		],
		"mapped",
		[
			1591,
			1605
		]
	],
	[
		[
			64552,
			64552
		],
		"mapped",
		[
			1592,
			1605
		]
	],
	[
		[
			64553,
			64553
		],
		"mapped",
		[
			1593,
			1580
		]
	],
	[
		[
			64554,
			64554
		],
		"mapped",
		[
			1593,
			1605
		]
	],
	[
		[
			64555,
			64555
		],
		"mapped",
		[
			1594,
			1580
		]
	],
	[
		[
			64556,
			64556
		],
		"mapped",
		[
			1594,
			1605
		]
	],
	[
		[
			64557,
			64557
		],
		"mapped",
		[
			1601,
			1580
		]
	],
	[
		[
			64558,
			64558
		],
		"mapped",
		[
			1601,
			1581
		]
	],
	[
		[
			64559,
			64559
		],
		"mapped",
		[
			1601,
			1582
		]
	],
	[
		[
			64560,
			64560
		],
		"mapped",
		[
			1601,
			1605
		]
	],
	[
		[
			64561,
			64561
		],
		"mapped",
		[
			1601,
			1609
		]
	],
	[
		[
			64562,
			64562
		],
		"mapped",
		[
			1601,
			1610
		]
	],
	[
		[
			64563,
			64563
		],
		"mapped",
		[
			1602,
			1581
		]
	],
	[
		[
			64564,
			64564
		],
		"mapped",
		[
			1602,
			1605
		]
	],
	[
		[
			64565,
			64565
		],
		"mapped",
		[
			1602,
			1609
		]
	],
	[
		[
			64566,
			64566
		],
		"mapped",
		[
			1602,
			1610
		]
	],
	[
		[
			64567,
			64567
		],
		"mapped",
		[
			1603,
			1575
		]
	],
	[
		[
			64568,
			64568
		],
		"mapped",
		[
			1603,
			1580
		]
	],
	[
		[
			64569,
			64569
		],
		"mapped",
		[
			1603,
			1581
		]
	],
	[
		[
			64570,
			64570
		],
		"mapped",
		[
			1603,
			1582
		]
	],
	[
		[
			64571,
			64571
		],
		"mapped",
		[
			1603,
			1604
		]
	],
	[
		[
			64572,
			64572
		],
		"mapped",
		[
			1603,
			1605
		]
	],
	[
		[
			64573,
			64573
		],
		"mapped",
		[
			1603,
			1609
		]
	],
	[
		[
			64574,
			64574
		],
		"mapped",
		[
			1603,
			1610
		]
	],
	[
		[
			64575,
			64575
		],
		"mapped",
		[
			1604,
			1580
		]
	],
	[
		[
			64576,
			64576
		],
		"mapped",
		[
			1604,
			1581
		]
	],
	[
		[
			64577,
			64577
		],
		"mapped",
		[
			1604,
			1582
		]
	],
	[
		[
			64578,
			64578
		],
		"mapped",
		[
			1604,
			1605
		]
	],
	[
		[
			64579,
			64579
		],
		"mapped",
		[
			1604,
			1609
		]
	],
	[
		[
			64580,
			64580
		],
		"mapped",
		[
			1604,
			1610
		]
	],
	[
		[
			64581,
			64581
		],
		"mapped",
		[
			1605,
			1580
		]
	],
	[
		[
			64582,
			64582
		],
		"mapped",
		[
			1605,
			1581
		]
	],
	[
		[
			64583,
			64583
		],
		"mapped",
		[
			1605,
			1582
		]
	],
	[
		[
			64584,
			64584
		],
		"mapped",
		[
			1605,
			1605
		]
	],
	[
		[
			64585,
			64585
		],
		"mapped",
		[
			1605,
			1609
		]
	],
	[
		[
			64586,
			64586
		],
		"mapped",
		[
			1605,
			1610
		]
	],
	[
		[
			64587,
			64587
		],
		"mapped",
		[
			1606,
			1580
		]
	],
	[
		[
			64588,
			64588
		],
		"mapped",
		[
			1606,
			1581
		]
	],
	[
		[
			64589,
			64589
		],
		"mapped",
		[
			1606,
			1582
		]
	],
	[
		[
			64590,
			64590
		],
		"mapped",
		[
			1606,
			1605
		]
	],
	[
		[
			64591,
			64591
		],
		"mapped",
		[
			1606,
			1609
		]
	],
	[
		[
			64592,
			64592
		],
		"mapped",
		[
			1606,
			1610
		]
	],
	[
		[
			64593,
			64593
		],
		"mapped",
		[
			1607,
			1580
		]
	],
	[
		[
			64594,
			64594
		],
		"mapped",
		[
			1607,
			1605
		]
	],
	[
		[
			64595,
			64595
		],
		"mapped",
		[
			1607,
			1609
		]
	],
	[
		[
			64596,
			64596
		],
		"mapped",
		[
			1607,
			1610
		]
	],
	[
		[
			64597,
			64597
		],
		"mapped",
		[
			1610,
			1580
		]
	],
	[
		[
			64598,
			64598
		],
		"mapped",
		[
			1610,
			1581
		]
	],
	[
		[
			64599,
			64599
		],
		"mapped",
		[
			1610,
			1582
		]
	],
	[
		[
			64600,
			64600
		],
		"mapped",
		[
			1610,
			1605
		]
	],
	[
		[
			64601,
			64601
		],
		"mapped",
		[
			1610,
			1609
		]
	],
	[
		[
			64602,
			64602
		],
		"mapped",
		[
			1610,
			1610
		]
	],
	[
		[
			64603,
			64603
		],
		"mapped",
		[
			1584,
			1648
		]
	],
	[
		[
			64604,
			64604
		],
		"mapped",
		[
			1585,
			1648
		]
	],
	[
		[
			64605,
			64605
		],
		"mapped",
		[
			1609,
			1648
		]
	],
	[
		[
			64606,
			64606
		],
		"disallowed_STD3_mapped",
		[
			32,
			1612,
			1617
		]
	],
	[
		[
			64607,
			64607
		],
		"disallowed_STD3_mapped",
		[
			32,
			1613,
			1617
		]
	],
	[
		[
			64608,
			64608
		],
		"disallowed_STD3_mapped",
		[
			32,
			1614,
			1617
		]
	],
	[
		[
			64609,
			64609
		],
		"disallowed_STD3_mapped",
		[
			32,
			1615,
			1617
		]
	],
	[
		[
			64610,
			64610
		],
		"disallowed_STD3_mapped",
		[
			32,
			1616,
			1617
		]
	],
	[
		[
			64611,
			64611
		],
		"disallowed_STD3_mapped",
		[
			32,
			1617,
			1648
		]
	],
	[
		[
			64612,
			64612
		],
		"mapped",
		[
			1574,
			1585
		]
	],
	[
		[
			64613,
			64613
		],
		"mapped",
		[
			1574,
			1586
		]
	],
	[
		[
			64614,
			64614
		],
		"mapped",
		[
			1574,
			1605
		]
	],
	[
		[
			64615,
			64615
		],
		"mapped",
		[
			1574,
			1606
		]
	],
	[
		[
			64616,
			64616
		],
		"mapped",
		[
			1574,
			1609
		]
	],
	[
		[
			64617,
			64617
		],
		"mapped",
		[
			1574,
			1610
		]
	],
	[
		[
			64618,
			64618
		],
		"mapped",
		[
			1576,
			1585
		]
	],
	[
		[
			64619,
			64619
		],
		"mapped",
		[
			1576,
			1586
		]
	],
	[
		[
			64620,
			64620
		],
		"mapped",
		[
			1576,
			1605
		]
	],
	[
		[
			64621,
			64621
		],
		"mapped",
		[
			1576,
			1606
		]
	],
	[
		[
			64622,
			64622
		],
		"mapped",
		[
			1576,
			1609
		]
	],
	[
		[
			64623,
			64623
		],
		"mapped",
		[
			1576,
			1610
		]
	],
	[
		[
			64624,
			64624
		],
		"mapped",
		[
			1578,
			1585
		]
	],
	[
		[
			64625,
			64625
		],
		"mapped",
		[
			1578,
			1586
		]
	],
	[
		[
			64626,
			64626
		],
		"mapped",
		[
			1578,
			1605
		]
	],
	[
		[
			64627,
			64627
		],
		"mapped",
		[
			1578,
			1606
		]
	],
	[
		[
			64628,
			64628
		],
		"mapped",
		[
			1578,
			1609
		]
	],
	[
		[
			64629,
			64629
		],
		"mapped",
		[
			1578,
			1610
		]
	],
	[
		[
			64630,
			64630
		],
		"mapped",
		[
			1579,
			1585
		]
	],
	[
		[
			64631,
			64631
		],
		"mapped",
		[
			1579,
			1586
		]
	],
	[
		[
			64632,
			64632
		],
		"mapped",
		[
			1579,
			1605
		]
	],
	[
		[
			64633,
			64633
		],
		"mapped",
		[
			1579,
			1606
		]
	],
	[
		[
			64634,
			64634
		],
		"mapped",
		[
			1579,
			1609
		]
	],
	[
		[
			64635,
			64635
		],
		"mapped",
		[
			1579,
			1610
		]
	],
	[
		[
			64636,
			64636
		],
		"mapped",
		[
			1601,
			1609
		]
	],
	[
		[
			64637,
			64637
		],
		"mapped",
		[
			1601,
			1610
		]
	],
	[
		[
			64638,
			64638
		],
		"mapped",
		[
			1602,
			1609
		]
	],
	[
		[
			64639,
			64639
		],
		"mapped",
		[
			1602,
			1610
		]
	],
	[
		[
			64640,
			64640
		],
		"mapped",
		[
			1603,
			1575
		]
	],
	[
		[
			64641,
			64641
		],
		"mapped",
		[
			1603,
			1604
		]
	],
	[
		[
			64642,
			64642
		],
		"mapped",
		[
			1603,
			1605
		]
	],
	[
		[
			64643,
			64643
		],
		"mapped",
		[
			1603,
			1609
		]
	],
	[
		[
			64644,
			64644
		],
		"mapped",
		[
			1603,
			1610
		]
	],
	[
		[
			64645,
			64645
		],
		"mapped",
		[
			1604,
			1605
		]
	],
	[
		[
			64646,
			64646
		],
		"mapped",
		[
			1604,
			1609
		]
	],
	[
		[
			64647,
			64647
		],
		"mapped",
		[
			1604,
			1610
		]
	],
	[
		[
			64648,
			64648
		],
		"mapped",
		[
			1605,
			1575
		]
	],
	[
		[
			64649,
			64649
		],
		"mapped",
		[
			1605,
			1605
		]
	],
	[
		[
			64650,
			64650
		],
		"mapped",
		[
			1606,
			1585
		]
	],
	[
		[
			64651,
			64651
		],
		"mapped",
		[
			1606,
			1586
		]
	],
	[
		[
			64652,
			64652
		],
		"mapped",
		[
			1606,
			1605
		]
	],
	[
		[
			64653,
			64653
		],
		"mapped",
		[
			1606,
			1606
		]
	],
	[
		[
			64654,
			64654
		],
		"mapped",
		[
			1606,
			1609
		]
	],
	[
		[
			64655,
			64655
		],
		"mapped",
		[
			1606,
			1610
		]
	],
	[
		[
			64656,
			64656
		],
		"mapped",
		[
			1609,
			1648
		]
	],
	[
		[
			64657,
			64657
		],
		"mapped",
		[
			1610,
			1585
		]
	],
	[
		[
			64658,
			64658
		],
		"mapped",
		[
			1610,
			1586
		]
	],
	[
		[
			64659,
			64659
		],
		"mapped",
		[
			1610,
			1605
		]
	],
	[
		[
			64660,
			64660
		],
		"mapped",
		[
			1610,
			1606
		]
	],
	[
		[
			64661,
			64661
		],
		"mapped",
		[
			1610,
			1609
		]
	],
	[
		[
			64662,
			64662
		],
		"mapped",
		[
			1610,
			1610
		]
	],
	[
		[
			64663,
			64663
		],
		"mapped",
		[
			1574,
			1580
		]
	],
	[
		[
			64664,
			64664
		],
		"mapped",
		[
			1574,
			1581
		]
	],
	[
		[
			64665,
			64665
		],
		"mapped",
		[
			1574,
			1582
		]
	],
	[
		[
			64666,
			64666
		],
		"mapped",
		[
			1574,
			1605
		]
	],
	[
		[
			64667,
			64667
		],
		"mapped",
		[
			1574,
			1607
		]
	],
	[
		[
			64668,
			64668
		],
		"mapped",
		[
			1576,
			1580
		]
	],
	[
		[
			64669,
			64669
		],
		"mapped",
		[
			1576,
			1581
		]
	],
	[
		[
			64670,
			64670
		],
		"mapped",
		[
			1576,
			1582
		]
	],
	[
		[
			64671,
			64671
		],
		"mapped",
		[
			1576,
			1605
		]
	],
	[
		[
			64672,
			64672
		],
		"mapped",
		[
			1576,
			1607
		]
	],
	[
		[
			64673,
			64673
		],
		"mapped",
		[
			1578,
			1580
		]
	],
	[
		[
			64674,
			64674
		],
		"mapped",
		[
			1578,
			1581
		]
	],
	[
		[
			64675,
			64675
		],
		"mapped",
		[
			1578,
			1582
		]
	],
	[
		[
			64676,
			64676
		],
		"mapped",
		[
			1578,
			1605
		]
	],
	[
		[
			64677,
			64677
		],
		"mapped",
		[
			1578,
			1607
		]
	],
	[
		[
			64678,
			64678
		],
		"mapped",
		[
			1579,
			1605
		]
	],
	[
		[
			64679,
			64679
		],
		"mapped",
		[
			1580,
			1581
		]
	],
	[
		[
			64680,
			64680
		],
		"mapped",
		[
			1580,
			1605
		]
	],
	[
		[
			64681,
			64681
		],
		"mapped",
		[
			1581,
			1580
		]
	],
	[
		[
			64682,
			64682
		],
		"mapped",
		[
			1581,
			1605
		]
	],
	[
		[
			64683,
			64683
		],
		"mapped",
		[
			1582,
			1580
		]
	],
	[
		[
			64684,
			64684
		],
		"mapped",
		[
			1582,
			1605
		]
	],
	[
		[
			64685,
			64685
		],
		"mapped",
		[
			1587,
			1580
		]
	],
	[
		[
			64686,
			64686
		],
		"mapped",
		[
			1587,
			1581
		]
	],
	[
		[
			64687,
			64687
		],
		"mapped",
		[
			1587,
			1582
		]
	],
	[
		[
			64688,
			64688
		],
		"mapped",
		[
			1587,
			1605
		]
	],
	[
		[
			64689,
			64689
		],
		"mapped",
		[
			1589,
			1581
		]
	],
	[
		[
			64690,
			64690
		],
		"mapped",
		[
			1589,
			1582
		]
	],
	[
		[
			64691,
			64691
		],
		"mapped",
		[
			1589,
			1605
		]
	],
	[
		[
			64692,
			64692
		],
		"mapped",
		[
			1590,
			1580
		]
	],
	[
		[
			64693,
			64693
		],
		"mapped",
		[
			1590,
			1581
		]
	],
	[
		[
			64694,
			64694
		],
		"mapped",
		[
			1590,
			1582
		]
	],
	[
		[
			64695,
			64695
		],
		"mapped",
		[
			1590,
			1605
		]
	],
	[
		[
			64696,
			64696
		],
		"mapped",
		[
			1591,
			1581
		]
	],
	[
		[
			64697,
			64697
		],
		"mapped",
		[
			1592,
			1605
		]
	],
	[
		[
			64698,
			64698
		],
		"mapped",
		[
			1593,
			1580
		]
	],
	[
		[
			64699,
			64699
		],
		"mapped",
		[
			1593,
			1605
		]
	],
	[
		[
			64700,
			64700
		],
		"mapped",
		[
			1594,
			1580
		]
	],
	[
		[
			64701,
			64701
		],
		"mapped",
		[
			1594,
			1605
		]
	],
	[
		[
			64702,
			64702
		],
		"mapped",
		[
			1601,
			1580
		]
	],
	[
		[
			64703,
			64703
		],
		"mapped",
		[
			1601,
			1581
		]
	],
	[
		[
			64704,
			64704
		],
		"mapped",
		[
			1601,
			1582
		]
	],
	[
		[
			64705,
			64705
		],
		"mapped",
		[
			1601,
			1605
		]
	],
	[
		[
			64706,
			64706
		],
		"mapped",
		[
			1602,
			1581
		]
	],
	[
		[
			64707,
			64707
		],
		"mapped",
		[
			1602,
			1605
		]
	],
	[
		[
			64708,
			64708
		],
		"mapped",
		[
			1603,
			1580
		]
	],
	[
		[
			64709,
			64709
		],
		"mapped",
		[
			1603,
			1581
		]
	],
	[
		[
			64710,
			64710
		],
		"mapped",
		[
			1603,
			1582
		]
	],
	[
		[
			64711,
			64711
		],
		"mapped",
		[
			1603,
			1604
		]
	],
	[
		[
			64712,
			64712
		],
		"mapped",
		[
			1603,
			1605
		]
	],
	[
		[
			64713,
			64713
		],
		"mapped",
		[
			1604,
			1580
		]
	],
	[
		[
			64714,
			64714
		],
		"mapped",
		[
			1604,
			1581
		]
	],
	[
		[
			64715,
			64715
		],
		"mapped",
		[
			1604,
			1582
		]
	],
	[
		[
			64716,
			64716
		],
		"mapped",
		[
			1604,
			1605
		]
	],
	[
		[
			64717,
			64717
		],
		"mapped",
		[
			1604,
			1607
		]
	],
	[
		[
			64718,
			64718
		],
		"mapped",
		[
			1605,
			1580
		]
	],
	[
		[
			64719,
			64719
		],
		"mapped",
		[
			1605,
			1581
		]
	],
	[
		[
			64720,
			64720
		],
		"mapped",
		[
			1605,
			1582
		]
	],
	[
		[
			64721,
			64721
		],
		"mapped",
		[
			1605,
			1605
		]
	],
	[
		[
			64722,
			64722
		],
		"mapped",
		[
			1606,
			1580
		]
	],
	[
		[
			64723,
			64723
		],
		"mapped",
		[
			1606,
			1581
		]
	],
	[
		[
			64724,
			64724
		],
		"mapped",
		[
			1606,
			1582
		]
	],
	[
		[
			64725,
			64725
		],
		"mapped",
		[
			1606,
			1605
		]
	],
	[
		[
			64726,
			64726
		],
		"mapped",
		[
			1606,
			1607
		]
	],
	[
		[
			64727,
			64727
		],
		"mapped",
		[
			1607,
			1580
		]
	],
	[
		[
			64728,
			64728
		],
		"mapped",
		[
			1607,
			1605
		]
	],
	[
		[
			64729,
			64729
		],
		"mapped",
		[
			1607,
			1648
		]
	],
	[
		[
			64730,
			64730
		],
		"mapped",
		[
			1610,
			1580
		]
	],
	[
		[
			64731,
			64731
		],
		"mapped",
		[
			1610,
			1581
		]
	],
	[
		[
			64732,
			64732
		],
		"mapped",
		[
			1610,
			1582
		]
	],
	[
		[
			64733,
			64733
		],
		"mapped",
		[
			1610,
			1605
		]
	],
	[
		[
			64734,
			64734
		],
		"mapped",
		[
			1610,
			1607
		]
	],
	[
		[
			64735,
			64735
		],
		"mapped",
		[
			1574,
			1605
		]
	],
	[
		[
			64736,
			64736
		],
		"mapped",
		[
			1574,
			1607
		]
	],
	[
		[
			64737,
			64737
		],
		"mapped",
		[
			1576,
			1605
		]
	],
	[
		[
			64738,
			64738
		],
		"mapped",
		[
			1576,
			1607
		]
	],
	[
		[
			64739,
			64739
		],
		"mapped",
		[
			1578,
			1605
		]
	],
	[
		[
			64740,
			64740
		],
		"mapped",
		[
			1578,
			1607
		]
	],
	[
		[
			64741,
			64741
		],
		"mapped",
		[
			1579,
			1605
		]
	],
	[
		[
			64742,
			64742
		],
		"mapped",
		[
			1579,
			1607
		]
	],
	[
		[
			64743,
			64743
		],
		"mapped",
		[
			1587,
			1605
		]
	],
	[
		[
			64744,
			64744
		],
		"mapped",
		[
			1587,
			1607
		]
	],
	[
		[
			64745,
			64745
		],
		"mapped",
		[
			1588,
			1605
		]
	],
	[
		[
			64746,
			64746
		],
		"mapped",
		[
			1588,
			1607
		]
	],
	[
		[
			64747,
			64747
		],
		"mapped",
		[
			1603,
			1604
		]
	],
	[
		[
			64748,
			64748
		],
		"mapped",
		[
			1603,
			1605
		]
	],
	[
		[
			64749,
			64749
		],
		"mapped",
		[
			1604,
			1605
		]
	],
	[
		[
			64750,
			64750
		],
		"mapped",
		[
			1606,
			1605
		]
	],
	[
		[
			64751,
			64751
		],
		"mapped",
		[
			1606,
			1607
		]
	],
	[
		[
			64752,
			64752
		],
		"mapped",
		[
			1610,
			1605
		]
	],
	[
		[
			64753,
			64753
		],
		"mapped",
		[
			1610,
			1607
		]
	],
	[
		[
			64754,
			64754
		],
		"mapped",
		[
			1600,
			1614,
			1617
		]
	],
	[
		[
			64755,
			64755
		],
		"mapped",
		[
			1600,
			1615,
			1617
		]
	],
	[
		[
			64756,
			64756
		],
		"mapped",
		[
			1600,
			1616,
			1617
		]
	],
	[
		[
			64757,
			64757
		],
		"mapped",
		[
			1591,
			1609
		]
	],
	[
		[
			64758,
			64758
		],
		"mapped",
		[
			1591,
			1610
		]
	],
	[
		[
			64759,
			64759
		],
		"mapped",
		[
			1593,
			1609
		]
	],
	[
		[
			64760,
			64760
		],
		"mapped",
		[
			1593,
			1610
		]
	],
	[
		[
			64761,
			64761
		],
		"mapped",
		[
			1594,
			1609
		]
	],
	[
		[
			64762,
			64762
		],
		"mapped",
		[
			1594,
			1610
		]
	],
	[
		[
			64763,
			64763
		],
		"mapped",
		[
			1587,
			1609
		]
	],
	[
		[
			64764,
			64764
		],
		"mapped",
		[
			1587,
			1610
		]
	],
	[
		[
			64765,
			64765
		],
		"mapped",
		[
			1588,
			1609
		]
	],
	[
		[
			64766,
			64766
		],
		"mapped",
		[
			1588,
			1610
		]
	],
	[
		[
			64767,
			64767
		],
		"mapped",
		[
			1581,
			1609
		]
	],
	[
		[
			64768,
			64768
		],
		"mapped",
		[
			1581,
			1610
		]
	],
	[
		[
			64769,
			64769
		],
		"mapped",
		[
			1580,
			1609
		]
	],
	[
		[
			64770,
			64770
		],
		"mapped",
		[
			1580,
			1610
		]
	],
	[
		[
			64771,
			64771
		],
		"mapped",
		[
			1582,
			1609
		]
	],
	[
		[
			64772,
			64772
		],
		"mapped",
		[
			1582,
			1610
		]
	],
	[
		[
			64773,
			64773
		],
		"mapped",
		[
			1589,
			1609
		]
	],
	[
		[
			64774,
			64774
		],
		"mapped",
		[
			1589,
			1610
		]
	],
	[
		[
			64775,
			64775
		],
		"mapped",
		[
			1590,
			1609
		]
	],
	[
		[
			64776,
			64776
		],
		"mapped",
		[
			1590,
			1610
		]
	],
	[
		[
			64777,
			64777
		],
		"mapped",
		[
			1588,
			1580
		]
	],
	[
		[
			64778,
			64778
		],
		"mapped",
		[
			1588,
			1581
		]
	],
	[
		[
			64779,
			64779
		],
		"mapped",
		[
			1588,
			1582
		]
	],
	[
		[
			64780,
			64780
		],
		"mapped",
		[
			1588,
			1605
		]
	],
	[
		[
			64781,
			64781
		],
		"mapped",
		[
			1588,
			1585
		]
	],
	[
		[
			64782,
			64782
		],
		"mapped",
		[
			1587,
			1585
		]
	],
	[
		[
			64783,
			64783
		],
		"mapped",
		[
			1589,
			1585
		]
	],
	[
		[
			64784,
			64784
		],
		"mapped",
		[
			1590,
			1585
		]
	],
	[
		[
			64785,
			64785
		],
		"mapped",
		[
			1591,
			1609
		]
	],
	[
		[
			64786,
			64786
		],
		"mapped",
		[
			1591,
			1610
		]
	],
	[
		[
			64787,
			64787
		],
		"mapped",
		[
			1593,
			1609
		]
	],
	[
		[
			64788,
			64788
		],
		"mapped",
		[
			1593,
			1610
		]
	],
	[
		[
			64789,
			64789
		],
		"mapped",
		[
			1594,
			1609
		]
	],
	[
		[
			64790,
			64790
		],
		"mapped",
		[
			1594,
			1610
		]
	],
	[
		[
			64791,
			64791
		],
		"mapped",
		[
			1587,
			1609
		]
	],
	[
		[
			64792,
			64792
		],
		"mapped",
		[
			1587,
			1610
		]
	],
	[
		[
			64793,
			64793
		],
		"mapped",
		[
			1588,
			1609
		]
	],
	[
		[
			64794,
			64794
		],
		"mapped",
		[
			1588,
			1610
		]
	],
	[
		[
			64795,
			64795
		],
		"mapped",
		[
			1581,
			1609
		]
	],
	[
		[
			64796,
			64796
		],
		"mapped",
		[
			1581,
			1610
		]
	],
	[
		[
			64797,
			64797
		],
		"mapped",
		[
			1580,
			1609
		]
	],
	[
		[
			64798,
			64798
		],
		"mapped",
		[
			1580,
			1610
		]
	],
	[
		[
			64799,
			64799
		],
		"mapped",
		[
			1582,
			1609
		]
	],
	[
		[
			64800,
			64800
		],
		"mapped",
		[
			1582,
			1610
		]
	],
	[
		[
			64801,
			64801
		],
		"mapped",
		[
			1589,
			1609
		]
	],
	[
		[
			64802,
			64802
		],
		"mapped",
		[
			1589,
			1610
		]
	],
	[
		[
			64803,
			64803
		],
		"mapped",
		[
			1590,
			1609
		]
	],
	[
		[
			64804,
			64804
		],
		"mapped",
		[
			1590,
			1610
		]
	],
	[
		[
			64805,
			64805
		],
		"mapped",
		[
			1588,
			1580
		]
	],
	[
		[
			64806,
			64806
		],
		"mapped",
		[
			1588,
			1581
		]
	],
	[
		[
			64807,
			64807
		],
		"mapped",
		[
			1588,
			1582
		]
	],
	[
		[
			64808,
			64808
		],
		"mapped",
		[
			1588,
			1605
		]
	],
	[
		[
			64809,
			64809
		],
		"mapped",
		[
			1588,
			1585
		]
	],
	[
		[
			64810,
			64810
		],
		"mapped",
		[
			1587,
			1585
		]
	],
	[
		[
			64811,
			64811
		],
		"mapped",
		[
			1589,
			1585
		]
	],
	[
		[
			64812,
			64812
		],
		"mapped",
		[
			1590,
			1585
		]
	],
	[
		[
			64813,
			64813
		],
		"mapped",
		[
			1588,
			1580
		]
	],
	[
		[
			64814,
			64814
		],
		"mapped",
		[
			1588,
			1581
		]
	],
	[
		[
			64815,
			64815
		],
		"mapped",
		[
			1588,
			1582
		]
	],
	[
		[
			64816,
			64816
		],
		"mapped",
		[
			1588,
			1605
		]
	],
	[
		[
			64817,
			64817
		],
		"mapped",
		[
			1587,
			1607
		]
	],
	[
		[
			64818,
			64818
		],
		"mapped",
		[
			1588,
			1607
		]
	],
	[
		[
			64819,
			64819
		],
		"mapped",
		[
			1591,
			1605
		]
	],
	[
		[
			64820,
			64820
		],
		"mapped",
		[
			1587,
			1580
		]
	],
	[
		[
			64821,
			64821
		],
		"mapped",
		[
			1587,
			1581
		]
	],
	[
		[
			64822,
			64822
		],
		"mapped",
		[
			1587,
			1582
		]
	],
	[
		[
			64823,
			64823
		],
		"mapped",
		[
			1588,
			1580
		]
	],
	[
		[
			64824,
			64824
		],
		"mapped",
		[
			1588,
			1581
		]
	],
	[
		[
			64825,
			64825
		],
		"mapped",
		[
			1588,
			1582
		]
	],
	[
		[
			64826,
			64826
		],
		"mapped",
		[
			1591,
			1605
		]
	],
	[
		[
			64827,
			64827
		],
		"mapped",
		[
			1592,
			1605
		]
	],
	[
		[
			64828,
			64829
		],
		"mapped",
		[
			1575,
			1611
		]
	],
	[
		[
			64830,
			64831
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			64832,
			64847
		],
		"disallowed"
	],
	[
		[
			64848,
			64848
		],
		"mapped",
		[
			1578,
			1580,
			1605
		]
	],
	[
		[
			64849,
			64850
		],
		"mapped",
		[
			1578,
			1581,
			1580
		]
	],
	[
		[
			64851,
			64851
		],
		"mapped",
		[
			1578,
			1581,
			1605
		]
	],
	[
		[
			64852,
			64852
		],
		"mapped",
		[
			1578,
			1582,
			1605
		]
	],
	[
		[
			64853,
			64853
		],
		"mapped",
		[
			1578,
			1605,
			1580
		]
	],
	[
		[
			64854,
			64854
		],
		"mapped",
		[
			1578,
			1605,
			1581
		]
	],
	[
		[
			64855,
			64855
		],
		"mapped",
		[
			1578,
			1605,
			1582
		]
	],
	[
		[
			64856,
			64857
		],
		"mapped",
		[
			1580,
			1605,
			1581
		]
	],
	[
		[
			64858,
			64858
		],
		"mapped",
		[
			1581,
			1605,
			1610
		]
	],
	[
		[
			64859,
			64859
		],
		"mapped",
		[
			1581,
			1605,
			1609
		]
	],
	[
		[
			64860,
			64860
		],
		"mapped",
		[
			1587,
			1581,
			1580
		]
	],
	[
		[
			64861,
			64861
		],
		"mapped",
		[
			1587,
			1580,
			1581
		]
	],
	[
		[
			64862,
			64862
		],
		"mapped",
		[
			1587,
			1580,
			1609
		]
	],
	[
		[
			64863,
			64864
		],
		"mapped",
		[
			1587,
			1605,
			1581
		]
	],
	[
		[
			64865,
			64865
		],
		"mapped",
		[
			1587,
			1605,
			1580
		]
	],
	[
		[
			64866,
			64867
		],
		"mapped",
		[
			1587,
			1605,
			1605
		]
	],
	[
		[
			64868,
			64869
		],
		"mapped",
		[
			1589,
			1581,
			1581
		]
	],
	[
		[
			64870,
			64870
		],
		"mapped",
		[
			1589,
			1605,
			1605
		]
	],
	[
		[
			64871,
			64872
		],
		"mapped",
		[
			1588,
			1581,
			1605
		]
	],
	[
		[
			64873,
			64873
		],
		"mapped",
		[
			1588,
			1580,
			1610
		]
	],
	[
		[
			64874,
			64875
		],
		"mapped",
		[
			1588,
			1605,
			1582
		]
	],
	[
		[
			64876,
			64877
		],
		"mapped",
		[
			1588,
			1605,
			1605
		]
	],
	[
		[
			64878,
			64878
		],
		"mapped",
		[
			1590,
			1581,
			1609
		]
	],
	[
		[
			64879,
			64880
		],
		"mapped",
		[
			1590,
			1582,
			1605
		]
	],
	[
		[
			64881,
			64882
		],
		"mapped",
		[
			1591,
			1605,
			1581
		]
	],
	[
		[
			64883,
			64883
		],
		"mapped",
		[
			1591,
			1605,
			1605
		]
	],
	[
		[
			64884,
			64884
		],
		"mapped",
		[
			1591,
			1605,
			1610
		]
	],
	[
		[
			64885,
			64885
		],
		"mapped",
		[
			1593,
			1580,
			1605
		]
	],
	[
		[
			64886,
			64887
		],
		"mapped",
		[
			1593,
			1605,
			1605
		]
	],
	[
		[
			64888,
			64888
		],
		"mapped",
		[
			1593,
			1605,
			1609
		]
	],
	[
		[
			64889,
			64889
		],
		"mapped",
		[
			1594,
			1605,
			1605
		]
	],
	[
		[
			64890,
			64890
		],
		"mapped",
		[
			1594,
			1605,
			1610
		]
	],
	[
		[
			64891,
			64891
		],
		"mapped",
		[
			1594,
			1605,
			1609
		]
	],
	[
		[
			64892,
			64893
		],
		"mapped",
		[
			1601,
			1582,
			1605
		]
	],
	[
		[
			64894,
			64894
		],
		"mapped",
		[
			1602,
			1605,
			1581
		]
	],
	[
		[
			64895,
			64895
		],
		"mapped",
		[
			1602,
			1605,
			1605
		]
	],
	[
		[
			64896,
			64896
		],
		"mapped",
		[
			1604,
			1581,
			1605
		]
	],
	[
		[
			64897,
			64897
		],
		"mapped",
		[
			1604,
			1581,
			1610
		]
	],
	[
		[
			64898,
			64898
		],
		"mapped",
		[
			1604,
			1581,
			1609
		]
	],
	[
		[
			64899,
			64900
		],
		"mapped",
		[
			1604,
			1580,
			1580
		]
	],
	[
		[
			64901,
			64902
		],
		"mapped",
		[
			1604,
			1582,
			1605
		]
	],
	[
		[
			64903,
			64904
		],
		"mapped",
		[
			1604,
			1605,
			1581
		]
	],
	[
		[
			64905,
			64905
		],
		"mapped",
		[
			1605,
			1581,
			1580
		]
	],
	[
		[
			64906,
			64906
		],
		"mapped",
		[
			1605,
			1581,
			1605
		]
	],
	[
		[
			64907,
			64907
		],
		"mapped",
		[
			1605,
			1581,
			1610
		]
	],
	[
		[
			64908,
			64908
		],
		"mapped",
		[
			1605,
			1580,
			1581
		]
	],
	[
		[
			64909,
			64909
		],
		"mapped",
		[
			1605,
			1580,
			1605
		]
	],
	[
		[
			64910,
			64910
		],
		"mapped",
		[
			1605,
			1582,
			1580
		]
	],
	[
		[
			64911,
			64911
		],
		"mapped",
		[
			1605,
			1582,
			1605
		]
	],
	[
		[
			64912,
			64913
		],
		"disallowed"
	],
	[
		[
			64914,
			64914
		],
		"mapped",
		[
			1605,
			1580,
			1582
		]
	],
	[
		[
			64915,
			64915
		],
		"mapped",
		[
			1607,
			1605,
			1580
		]
	],
	[
		[
			64916,
			64916
		],
		"mapped",
		[
			1607,
			1605,
			1605
		]
	],
	[
		[
			64917,
			64917
		],
		"mapped",
		[
			1606,
			1581,
			1605
		]
	],
	[
		[
			64918,
			64918
		],
		"mapped",
		[
			1606,
			1581,
			1609
		]
	],
	[
		[
			64919,
			64920
		],
		"mapped",
		[
			1606,
			1580,
			1605
		]
	],
	[
		[
			64921,
			64921
		],
		"mapped",
		[
			1606,
			1580,
			1609
		]
	],
	[
		[
			64922,
			64922
		],
		"mapped",
		[
			1606,
			1605,
			1610
		]
	],
	[
		[
			64923,
			64923
		],
		"mapped",
		[
			1606,
			1605,
			1609
		]
	],
	[
		[
			64924,
			64925
		],
		"mapped",
		[
			1610,
			1605,
			1605
		]
	],
	[
		[
			64926,
			64926
		],
		"mapped",
		[
			1576,
			1582,
			1610
		]
	],
	[
		[
			64927,
			64927
		],
		"mapped",
		[
			1578,
			1580,
			1610
		]
	],
	[
		[
			64928,
			64928
		],
		"mapped",
		[
			1578,
			1580,
			1609
		]
	],
	[
		[
			64929,
			64929
		],
		"mapped",
		[
			1578,
			1582,
			1610
		]
	],
	[
		[
			64930,
			64930
		],
		"mapped",
		[
			1578,
			1582,
			1609
		]
	],
	[
		[
			64931,
			64931
		],
		"mapped",
		[
			1578,
			1605,
			1610
		]
	],
	[
		[
			64932,
			64932
		],
		"mapped",
		[
			1578,
			1605,
			1609
		]
	],
	[
		[
			64933,
			64933
		],
		"mapped",
		[
			1580,
			1605,
			1610
		]
	],
	[
		[
			64934,
			64934
		],
		"mapped",
		[
			1580,
			1581,
			1609
		]
	],
	[
		[
			64935,
			64935
		],
		"mapped",
		[
			1580,
			1605,
			1609
		]
	],
	[
		[
			64936,
			64936
		],
		"mapped",
		[
			1587,
			1582,
			1609
		]
	],
	[
		[
			64937,
			64937
		],
		"mapped",
		[
			1589,
			1581,
			1610
		]
	],
	[
		[
			64938,
			64938
		],
		"mapped",
		[
			1588,
			1581,
			1610
		]
	],
	[
		[
			64939,
			64939
		],
		"mapped",
		[
			1590,
			1581,
			1610
		]
	],
	[
		[
			64940,
			64940
		],
		"mapped",
		[
			1604,
			1580,
			1610
		]
	],
	[
		[
			64941,
			64941
		],
		"mapped",
		[
			1604,
			1605,
			1610
		]
	],
	[
		[
			64942,
			64942
		],
		"mapped",
		[
			1610,
			1581,
			1610
		]
	],
	[
		[
			64943,
			64943
		],
		"mapped",
		[
			1610,
			1580,
			1610
		]
	],
	[
		[
			64944,
			64944
		],
		"mapped",
		[
			1610,
			1605,
			1610
		]
	],
	[
		[
			64945,
			64945
		],
		"mapped",
		[
			1605,
			1605,
			1610
		]
	],
	[
		[
			64946,
			64946
		],
		"mapped",
		[
			1602,
			1605,
			1610
		]
	],
	[
		[
			64947,
			64947
		],
		"mapped",
		[
			1606,
			1581,
			1610
		]
	],
	[
		[
			64948,
			64948
		],
		"mapped",
		[
			1602,
			1605,
			1581
		]
	],
	[
		[
			64949,
			64949
		],
		"mapped",
		[
			1604,
			1581,
			1605
		]
	],
	[
		[
			64950,
			64950
		],
		"mapped",
		[
			1593,
			1605,
			1610
		]
	],
	[
		[
			64951,
			64951
		],
		"mapped",
		[
			1603,
			1605,
			1610
		]
	],
	[
		[
			64952,
			64952
		],
		"mapped",
		[
			1606,
			1580,
			1581
		]
	],
	[
		[
			64953,
			64953
		],
		"mapped",
		[
			1605,
			1582,
			1610
		]
	],
	[
		[
			64954,
			64954
		],
		"mapped",
		[
			1604,
			1580,
			1605
		]
	],
	[
		[
			64955,
			64955
		],
		"mapped",
		[
			1603,
			1605,
			1605
		]
	],
	[
		[
			64956,
			64956
		],
		"mapped",
		[
			1604,
			1580,
			1605
		]
	],
	[
		[
			64957,
			64957
		],
		"mapped",
		[
			1606,
			1580,
			1581
		]
	],
	[
		[
			64958,
			64958
		],
		"mapped",
		[
			1580,
			1581,
			1610
		]
	],
	[
		[
			64959,
			64959
		],
		"mapped",
		[
			1581,
			1580,
			1610
		]
	],
	[
		[
			64960,
			64960
		],
		"mapped",
		[
			1605,
			1580,
			1610
		]
	],
	[
		[
			64961,
			64961
		],
		"mapped",
		[
			1601,
			1605,
			1610
		]
	],
	[
		[
			64962,
			64962
		],
		"mapped",
		[
			1576,
			1581,
			1610
		]
	],
	[
		[
			64963,
			64963
		],
		"mapped",
		[
			1603,
			1605,
			1605
		]
	],
	[
		[
			64964,
			64964
		],
		"mapped",
		[
			1593,
			1580,
			1605
		]
	],
	[
		[
			64965,
			64965
		],
		"mapped",
		[
			1589,
			1605,
			1605
		]
	],
	[
		[
			64966,
			64966
		],
		"mapped",
		[
			1587,
			1582,
			1610
		]
	],
	[
		[
			64967,
			64967
		],
		"mapped",
		[
			1606,
			1580,
			1610
		]
	],
	[
		[
			64968,
			64975
		],
		"disallowed"
	],
	[
		[
			64976,
			65007
		],
		"disallowed"
	],
	[
		[
			65008,
			65008
		],
		"mapped",
		[
			1589,
			1604,
			1746
		]
	],
	[
		[
			65009,
			65009
		],
		"mapped",
		[
			1602,
			1604,
			1746
		]
	],
	[
		[
			65010,
			65010
		],
		"mapped",
		[
			1575,
			1604,
			1604,
			1607
		]
	],
	[
		[
			65011,
			65011
		],
		"mapped",
		[
			1575,
			1603,
			1576,
			1585
		]
	],
	[
		[
			65012,
			65012
		],
		"mapped",
		[
			1605,
			1581,
			1605,
			1583
		]
	],
	[
		[
			65013,
			65013
		],
		"mapped",
		[
			1589,
			1604,
			1593,
			1605
		]
	],
	[
		[
			65014,
			65014
		],
		"mapped",
		[
			1585,
			1587,
			1608,
			1604
		]
	],
	[
		[
			65015,
			65015
		],
		"mapped",
		[
			1593,
			1604,
			1610,
			1607
		]
	],
	[
		[
			65016,
			65016
		],
		"mapped",
		[
			1608,
			1587,
			1604,
			1605
		]
	],
	[
		[
			65017,
			65017
		],
		"mapped",
		[
			1589,
			1604,
			1609
		]
	],
	[
		[
			65018,
			65018
		],
		"disallowed_STD3_mapped",
		[
			1589,
			1604,
			1609,
			32,
			1575,
			1604,
			1604,
			1607,
			32,
			1593,
			1604,
			1610,
			1607,
			32,
			1608,
			1587,
			1604,
			1605
		]
	],
	[
		[
			65019,
			65019
		],
		"disallowed_STD3_mapped",
		[
			1580,
			1604,
			32,
			1580,
			1604,
			1575,
			1604,
			1607
		]
	],
	[
		[
			65020,
			65020
		],
		"mapped",
		[
			1585,
			1740,
			1575,
			1604
		]
	],
	[
		[
			65021,
			65021
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			65022,
			65023
		],
		"disallowed"
	],
	[
		[
			65024,
			65039
		],
		"ignored"
	],
	[
		[
			65040,
			65040
		],
		"disallowed_STD3_mapped",
		[
			44
		]
	],
	[
		[
			65041,
			65041
		],
		"mapped",
		[
			12289
		]
	],
	[
		[
			65042,
			65042
		],
		"disallowed"
	],
	[
		[
			65043,
			65043
		],
		"disallowed_STD3_mapped",
		[
			58
		]
	],
	[
		[
			65044,
			65044
		],
		"disallowed_STD3_mapped",
		[
			59
		]
	],
	[
		[
			65045,
			65045
		],
		"disallowed_STD3_mapped",
		[
			33
		]
	],
	[
		[
			65046,
			65046
		],
		"disallowed_STD3_mapped",
		[
			63
		]
	],
	[
		[
			65047,
			65047
		],
		"mapped",
		[
			12310
		]
	],
	[
		[
			65048,
			65048
		],
		"mapped",
		[
			12311
		]
	],
	[
		[
			65049,
			65049
		],
		"disallowed"
	],
	[
		[
			65050,
			65055
		],
		"disallowed"
	],
	[
		[
			65056,
			65059
		],
		"valid"
	],
	[
		[
			65060,
			65062
		],
		"valid"
	],
	[
		[
			65063,
			65069
		],
		"valid"
	],
	[
		[
			65070,
			65071
		],
		"valid"
	],
	[
		[
			65072,
			65072
		],
		"disallowed"
	],
	[
		[
			65073,
			65073
		],
		"mapped",
		[
			8212
		]
	],
	[
		[
			65074,
			65074
		],
		"mapped",
		[
			8211
		]
	],
	[
		[
			65075,
			65076
		],
		"disallowed_STD3_mapped",
		[
			95
		]
	],
	[
		[
			65077,
			65077
		],
		"disallowed_STD3_mapped",
		[
			40
		]
	],
	[
		[
			65078,
			65078
		],
		"disallowed_STD3_mapped",
		[
			41
		]
	],
	[
		[
			65079,
			65079
		],
		"disallowed_STD3_mapped",
		[
			123
		]
	],
	[
		[
			65080,
			65080
		],
		"disallowed_STD3_mapped",
		[
			125
		]
	],
	[
		[
			65081,
			65081
		],
		"mapped",
		[
			12308
		]
	],
	[
		[
			65082,
			65082
		],
		"mapped",
		[
			12309
		]
	],
	[
		[
			65083,
			65083
		],
		"mapped",
		[
			12304
		]
	],
	[
		[
			65084,
			65084
		],
		"mapped",
		[
			12305
		]
	],
	[
		[
			65085,
			65085
		],
		"mapped",
		[
			12298
		]
	],
	[
		[
			65086,
			65086
		],
		"mapped",
		[
			12299
		]
	],
	[
		[
			65087,
			65087
		],
		"mapped",
		[
			12296
		]
	],
	[
		[
			65088,
			65088
		],
		"mapped",
		[
			12297
		]
	],
	[
		[
			65089,
			65089
		],
		"mapped",
		[
			12300
		]
	],
	[
		[
			65090,
			65090
		],
		"mapped",
		[
			12301
		]
	],
	[
		[
			65091,
			65091
		],
		"mapped",
		[
			12302
		]
	],
	[
		[
			65092,
			65092
		],
		"mapped",
		[
			12303
		]
	],
	[
		[
			65093,
			65094
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			65095,
			65095
		],
		"disallowed_STD3_mapped",
		[
			91
		]
	],
	[
		[
			65096,
			65096
		],
		"disallowed_STD3_mapped",
		[
			93
		]
	],
	[
		[
			65097,
			65100
		],
		"disallowed_STD3_mapped",
		[
			32,
			773
		]
	],
	[
		[
			65101,
			65103
		],
		"disallowed_STD3_mapped",
		[
			95
		]
	],
	[
		[
			65104,
			65104
		],
		"disallowed_STD3_mapped",
		[
			44
		]
	],
	[
		[
			65105,
			65105
		],
		"mapped",
		[
			12289
		]
	],
	[
		[
			65106,
			65106
		],
		"disallowed"
	],
	[
		[
			65107,
			65107
		],
		"disallowed"
	],
	[
		[
			65108,
			65108
		],
		"disallowed_STD3_mapped",
		[
			59
		]
	],
	[
		[
			65109,
			65109
		],
		"disallowed_STD3_mapped",
		[
			58
		]
	],
	[
		[
			65110,
			65110
		],
		"disallowed_STD3_mapped",
		[
			63
		]
	],
	[
		[
			65111,
			65111
		],
		"disallowed_STD3_mapped",
		[
			33
		]
	],
	[
		[
			65112,
			65112
		],
		"mapped",
		[
			8212
		]
	],
	[
		[
			65113,
			65113
		],
		"disallowed_STD3_mapped",
		[
			40
		]
	],
	[
		[
			65114,
			65114
		],
		"disallowed_STD3_mapped",
		[
			41
		]
	],
	[
		[
			65115,
			65115
		],
		"disallowed_STD3_mapped",
		[
			123
		]
	],
	[
		[
			65116,
			65116
		],
		"disallowed_STD3_mapped",
		[
			125
		]
	],
	[
		[
			65117,
			65117
		],
		"mapped",
		[
			12308
		]
	],
	[
		[
			65118,
			65118
		],
		"mapped",
		[
			12309
		]
	],
	[
		[
			65119,
			65119
		],
		"disallowed_STD3_mapped",
		[
			35
		]
	],
	[
		[
			65120,
			65120
		],
		"disallowed_STD3_mapped",
		[
			38
		]
	],
	[
		[
			65121,
			65121
		],
		"disallowed_STD3_mapped",
		[
			42
		]
	],
	[
		[
			65122,
			65122
		],
		"disallowed_STD3_mapped",
		[
			43
		]
	],
	[
		[
			65123,
			65123
		],
		"mapped",
		[
			45
		]
	],
	[
		[
			65124,
			65124
		],
		"disallowed_STD3_mapped",
		[
			60
		]
	],
	[
		[
			65125,
			65125
		],
		"disallowed_STD3_mapped",
		[
			62
		]
	],
	[
		[
			65126,
			65126
		],
		"disallowed_STD3_mapped",
		[
			61
		]
	],
	[
		[
			65127,
			65127
		],
		"disallowed"
	],
	[
		[
			65128,
			65128
		],
		"disallowed_STD3_mapped",
		[
			92
		]
	],
	[
		[
			65129,
			65129
		],
		"disallowed_STD3_mapped",
		[
			36
		]
	],
	[
		[
			65130,
			65130
		],
		"disallowed_STD3_mapped",
		[
			37
		]
	],
	[
		[
			65131,
			65131
		],
		"disallowed_STD3_mapped",
		[
			64
		]
	],
	[
		[
			65132,
			65135
		],
		"disallowed"
	],
	[
		[
			65136,
			65136
		],
		"disallowed_STD3_mapped",
		[
			32,
			1611
		]
	],
	[
		[
			65137,
			65137
		],
		"mapped",
		[
			1600,
			1611
		]
	],
	[
		[
			65138,
			65138
		],
		"disallowed_STD3_mapped",
		[
			32,
			1612
		]
	],
	[
		[
			65139,
			65139
		],
		"valid"
	],
	[
		[
			65140,
			65140
		],
		"disallowed_STD3_mapped",
		[
			32,
			1613
		]
	],
	[
		[
			65141,
			65141
		],
		"disallowed"
	],
	[
		[
			65142,
			65142
		],
		"disallowed_STD3_mapped",
		[
			32,
			1614
		]
	],
	[
		[
			65143,
			65143
		],
		"mapped",
		[
			1600,
			1614
		]
	],
	[
		[
			65144,
			65144
		],
		"disallowed_STD3_mapped",
		[
			32,
			1615
		]
	],
	[
		[
			65145,
			65145
		],
		"mapped",
		[
			1600,
			1615
		]
	],
	[
		[
			65146,
			65146
		],
		"disallowed_STD3_mapped",
		[
			32,
			1616
		]
	],
	[
		[
			65147,
			65147
		],
		"mapped",
		[
			1600,
			1616
		]
	],
	[
		[
			65148,
			65148
		],
		"disallowed_STD3_mapped",
		[
			32,
			1617
		]
	],
	[
		[
			65149,
			65149
		],
		"mapped",
		[
			1600,
			1617
		]
	],
	[
		[
			65150,
			65150
		],
		"disallowed_STD3_mapped",
		[
			32,
			1618
		]
	],
	[
		[
			65151,
			65151
		],
		"mapped",
		[
			1600,
			1618
		]
	],
	[
		[
			65152,
			65152
		],
		"mapped",
		[
			1569
		]
	],
	[
		[
			65153,
			65154
		],
		"mapped",
		[
			1570
		]
	],
	[
		[
			65155,
			65156
		],
		"mapped",
		[
			1571
		]
	],
	[
		[
			65157,
			65158
		],
		"mapped",
		[
			1572
		]
	],
	[
		[
			65159,
			65160
		],
		"mapped",
		[
			1573
		]
	],
	[
		[
			65161,
			65164
		],
		"mapped",
		[
			1574
		]
	],
	[
		[
			65165,
			65166
		],
		"mapped",
		[
			1575
		]
	],
	[
		[
			65167,
			65170
		],
		"mapped",
		[
			1576
		]
	],
	[
		[
			65171,
			65172
		],
		"mapped",
		[
			1577
		]
	],
	[
		[
			65173,
			65176
		],
		"mapped",
		[
			1578
		]
	],
	[
		[
			65177,
			65180
		],
		"mapped",
		[
			1579
		]
	],
	[
		[
			65181,
			65184
		],
		"mapped",
		[
			1580
		]
	],
	[
		[
			65185,
			65188
		],
		"mapped",
		[
			1581
		]
	],
	[
		[
			65189,
			65192
		],
		"mapped",
		[
			1582
		]
	],
	[
		[
			65193,
			65194
		],
		"mapped",
		[
			1583
		]
	],
	[
		[
			65195,
			65196
		],
		"mapped",
		[
			1584
		]
	],
	[
		[
			65197,
			65198
		],
		"mapped",
		[
			1585
		]
	],
	[
		[
			65199,
			65200
		],
		"mapped",
		[
			1586
		]
	],
	[
		[
			65201,
			65204
		],
		"mapped",
		[
			1587
		]
	],
	[
		[
			65205,
			65208
		],
		"mapped",
		[
			1588
		]
	],
	[
		[
			65209,
			65212
		],
		"mapped",
		[
			1589
		]
	],
	[
		[
			65213,
			65216
		],
		"mapped",
		[
			1590
		]
	],
	[
		[
			65217,
			65220
		],
		"mapped",
		[
			1591
		]
	],
	[
		[
			65221,
			65224
		],
		"mapped",
		[
			1592
		]
	],
	[
		[
			65225,
			65228
		],
		"mapped",
		[
			1593
		]
	],
	[
		[
			65229,
			65232
		],
		"mapped",
		[
			1594
		]
	],
	[
		[
			65233,
			65236
		],
		"mapped",
		[
			1601
		]
	],
	[
		[
			65237,
			65240
		],
		"mapped",
		[
			1602
		]
	],
	[
		[
			65241,
			65244
		],
		"mapped",
		[
			1603
		]
	],
	[
		[
			65245,
			65248
		],
		"mapped",
		[
			1604
		]
	],
	[
		[
			65249,
			65252
		],
		"mapped",
		[
			1605
		]
	],
	[
		[
			65253,
			65256
		],
		"mapped",
		[
			1606
		]
	],
	[
		[
			65257,
			65260
		],
		"mapped",
		[
			1607
		]
	],
	[
		[
			65261,
			65262
		],
		"mapped",
		[
			1608
		]
	],
	[
		[
			65263,
			65264
		],
		"mapped",
		[
			1609
		]
	],
	[
		[
			65265,
			65268
		],
		"mapped",
		[
			1610
		]
	],
	[
		[
			65269,
			65270
		],
		"mapped",
		[
			1604,
			1570
		]
	],
	[
		[
			65271,
			65272
		],
		"mapped",
		[
			1604,
			1571
		]
	],
	[
		[
			65273,
			65274
		],
		"mapped",
		[
			1604,
			1573
		]
	],
	[
		[
			65275,
			65276
		],
		"mapped",
		[
			1604,
			1575
		]
	],
	[
		[
			65277,
			65278
		],
		"disallowed"
	],
	[
		[
			65279,
			65279
		],
		"ignored"
	],
	[
		[
			65280,
			65280
		],
		"disallowed"
	],
	[
		[
			65281,
			65281
		],
		"disallowed_STD3_mapped",
		[
			33
		]
	],
	[
		[
			65282,
			65282
		],
		"disallowed_STD3_mapped",
		[
			34
		]
	],
	[
		[
			65283,
			65283
		],
		"disallowed_STD3_mapped",
		[
			35
		]
	],
	[
		[
			65284,
			65284
		],
		"disallowed_STD3_mapped",
		[
			36
		]
	],
	[
		[
			65285,
			65285
		],
		"disallowed_STD3_mapped",
		[
			37
		]
	],
	[
		[
			65286,
			65286
		],
		"disallowed_STD3_mapped",
		[
			38
		]
	],
	[
		[
			65287,
			65287
		],
		"disallowed_STD3_mapped",
		[
			39
		]
	],
	[
		[
			65288,
			65288
		],
		"disallowed_STD3_mapped",
		[
			40
		]
	],
	[
		[
			65289,
			65289
		],
		"disallowed_STD3_mapped",
		[
			41
		]
	],
	[
		[
			65290,
			65290
		],
		"disallowed_STD3_mapped",
		[
			42
		]
	],
	[
		[
			65291,
			65291
		],
		"disallowed_STD3_mapped",
		[
			43
		]
	],
	[
		[
			65292,
			65292
		],
		"disallowed_STD3_mapped",
		[
			44
		]
	],
	[
		[
			65293,
			65293
		],
		"mapped",
		[
			45
		]
	],
	[
		[
			65294,
			65294
		],
		"mapped",
		[
			46
		]
	],
	[
		[
			65295,
			65295
		],
		"disallowed_STD3_mapped",
		[
			47
		]
	],
	[
		[
			65296,
			65296
		],
		"mapped",
		[
			48
		]
	],
	[
		[
			65297,
			65297
		],
		"mapped",
		[
			49
		]
	],
	[
		[
			65298,
			65298
		],
		"mapped",
		[
			50
		]
	],
	[
		[
			65299,
			65299
		],
		"mapped",
		[
			51
		]
	],
	[
		[
			65300,
			65300
		],
		"mapped",
		[
			52
		]
	],
	[
		[
			65301,
			65301
		],
		"mapped",
		[
			53
		]
	],
	[
		[
			65302,
			65302
		],
		"mapped",
		[
			54
		]
	],
	[
		[
			65303,
			65303
		],
		"mapped",
		[
			55
		]
	],
	[
		[
			65304,
			65304
		],
		"mapped",
		[
			56
		]
	],
	[
		[
			65305,
			65305
		],
		"mapped",
		[
			57
		]
	],
	[
		[
			65306,
			65306
		],
		"disallowed_STD3_mapped",
		[
			58
		]
	],
	[
		[
			65307,
			65307
		],
		"disallowed_STD3_mapped",
		[
			59
		]
	],
	[
		[
			65308,
			65308
		],
		"disallowed_STD3_mapped",
		[
			60
		]
	],
	[
		[
			65309,
			65309
		],
		"disallowed_STD3_mapped",
		[
			61
		]
	],
	[
		[
			65310,
			65310
		],
		"disallowed_STD3_mapped",
		[
			62
		]
	],
	[
		[
			65311,
			65311
		],
		"disallowed_STD3_mapped",
		[
			63
		]
	],
	[
		[
			65312,
			65312
		],
		"disallowed_STD3_mapped",
		[
			64
		]
	],
	[
		[
			65313,
			65313
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			65314,
			65314
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			65315,
			65315
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			65316,
			65316
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			65317,
			65317
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			65318,
			65318
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			65319,
			65319
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			65320,
			65320
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			65321,
			65321
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			65322,
			65322
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			65323,
			65323
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			65324,
			65324
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			65325,
			65325
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			65326,
			65326
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			65327,
			65327
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			65328,
			65328
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			65329,
			65329
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			65330,
			65330
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			65331,
			65331
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			65332,
			65332
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			65333,
			65333
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			65334,
			65334
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			65335,
			65335
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			65336,
			65336
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			65337,
			65337
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			65338,
			65338
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			65339,
			65339
		],
		"disallowed_STD3_mapped",
		[
			91
		]
	],
	[
		[
			65340,
			65340
		],
		"disallowed_STD3_mapped",
		[
			92
		]
	],
	[
		[
			65341,
			65341
		],
		"disallowed_STD3_mapped",
		[
			93
		]
	],
	[
		[
			65342,
			65342
		],
		"disallowed_STD3_mapped",
		[
			94
		]
	],
	[
		[
			65343,
			65343
		],
		"disallowed_STD3_mapped",
		[
			95
		]
	],
	[
		[
			65344,
			65344
		],
		"disallowed_STD3_mapped",
		[
			96
		]
	],
	[
		[
			65345,
			65345
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			65346,
			65346
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			65347,
			65347
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			65348,
			65348
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			65349,
			65349
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			65350,
			65350
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			65351,
			65351
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			65352,
			65352
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			65353,
			65353
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			65354,
			65354
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			65355,
			65355
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			65356,
			65356
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			65357,
			65357
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			65358,
			65358
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			65359,
			65359
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			65360,
			65360
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			65361,
			65361
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			65362,
			65362
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			65363,
			65363
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			65364,
			65364
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			65365,
			65365
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			65366,
			65366
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			65367,
			65367
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			65368,
			65368
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			65369,
			65369
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			65370,
			65370
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			65371,
			65371
		],
		"disallowed_STD3_mapped",
		[
			123
		]
	],
	[
		[
			65372,
			65372
		],
		"disallowed_STD3_mapped",
		[
			124
		]
	],
	[
		[
			65373,
			65373
		],
		"disallowed_STD3_mapped",
		[
			125
		]
	],
	[
		[
			65374,
			65374
		],
		"disallowed_STD3_mapped",
		[
			126
		]
	],
	[
		[
			65375,
			65375
		],
		"mapped",
		[
			10629
		]
	],
	[
		[
			65376,
			65376
		],
		"mapped",
		[
			10630
		]
	],
	[
		[
			65377,
			65377
		],
		"mapped",
		[
			46
		]
	],
	[
		[
			65378,
			65378
		],
		"mapped",
		[
			12300
		]
	],
	[
		[
			65379,
			65379
		],
		"mapped",
		[
			12301
		]
	],
	[
		[
			65380,
			65380
		],
		"mapped",
		[
			12289
		]
	],
	[
		[
			65381,
			65381
		],
		"mapped",
		[
			12539
		]
	],
	[
		[
			65382,
			65382
		],
		"mapped",
		[
			12530
		]
	],
	[
		[
			65383,
			65383
		],
		"mapped",
		[
			12449
		]
	],
	[
		[
			65384,
			65384
		],
		"mapped",
		[
			12451
		]
	],
	[
		[
			65385,
			65385
		],
		"mapped",
		[
			12453
		]
	],
	[
		[
			65386,
			65386
		],
		"mapped",
		[
			12455
		]
	],
	[
		[
			65387,
			65387
		],
		"mapped",
		[
			12457
		]
	],
	[
		[
			65388,
			65388
		],
		"mapped",
		[
			12515
		]
	],
	[
		[
			65389,
			65389
		],
		"mapped",
		[
			12517
		]
	],
	[
		[
			65390,
			65390
		],
		"mapped",
		[
			12519
		]
	],
	[
		[
			65391,
			65391
		],
		"mapped",
		[
			12483
		]
	],
	[
		[
			65392,
			65392
		],
		"mapped",
		[
			12540
		]
	],
	[
		[
			65393,
			65393
		],
		"mapped",
		[
			12450
		]
	],
	[
		[
			65394,
			65394
		],
		"mapped",
		[
			12452
		]
	],
	[
		[
			65395,
			65395
		],
		"mapped",
		[
			12454
		]
	],
	[
		[
			65396,
			65396
		],
		"mapped",
		[
			12456
		]
	],
	[
		[
			65397,
			65397
		],
		"mapped",
		[
			12458
		]
	],
	[
		[
			65398,
			65398
		],
		"mapped",
		[
			12459
		]
	],
	[
		[
			65399,
			65399
		],
		"mapped",
		[
			12461
		]
	],
	[
		[
			65400,
			65400
		],
		"mapped",
		[
			12463
		]
	],
	[
		[
			65401,
			65401
		],
		"mapped",
		[
			12465
		]
	],
	[
		[
			65402,
			65402
		],
		"mapped",
		[
			12467
		]
	],
	[
		[
			65403,
			65403
		],
		"mapped",
		[
			12469
		]
	],
	[
		[
			65404,
			65404
		],
		"mapped",
		[
			12471
		]
	],
	[
		[
			65405,
			65405
		],
		"mapped",
		[
			12473
		]
	],
	[
		[
			65406,
			65406
		],
		"mapped",
		[
			12475
		]
	],
	[
		[
			65407,
			65407
		],
		"mapped",
		[
			12477
		]
	],
	[
		[
			65408,
			65408
		],
		"mapped",
		[
			12479
		]
	],
	[
		[
			65409,
			65409
		],
		"mapped",
		[
			12481
		]
	],
	[
		[
			65410,
			65410
		],
		"mapped",
		[
			12484
		]
	],
	[
		[
			65411,
			65411
		],
		"mapped",
		[
			12486
		]
	],
	[
		[
			65412,
			65412
		],
		"mapped",
		[
			12488
		]
	],
	[
		[
			65413,
			65413
		],
		"mapped",
		[
			12490
		]
	],
	[
		[
			65414,
			65414
		],
		"mapped",
		[
			12491
		]
	],
	[
		[
			65415,
			65415
		],
		"mapped",
		[
			12492
		]
	],
	[
		[
			65416,
			65416
		],
		"mapped",
		[
			12493
		]
	],
	[
		[
			65417,
			65417
		],
		"mapped",
		[
			12494
		]
	],
	[
		[
			65418,
			65418
		],
		"mapped",
		[
			12495
		]
	],
	[
		[
			65419,
			65419
		],
		"mapped",
		[
			12498
		]
	],
	[
		[
			65420,
			65420
		],
		"mapped",
		[
			12501
		]
	],
	[
		[
			65421,
			65421
		],
		"mapped",
		[
			12504
		]
	],
	[
		[
			65422,
			65422
		],
		"mapped",
		[
			12507
		]
	],
	[
		[
			65423,
			65423
		],
		"mapped",
		[
			12510
		]
	],
	[
		[
			65424,
			65424
		],
		"mapped",
		[
			12511
		]
	],
	[
		[
			65425,
			65425
		],
		"mapped",
		[
			12512
		]
	],
	[
		[
			65426,
			65426
		],
		"mapped",
		[
			12513
		]
	],
	[
		[
			65427,
			65427
		],
		"mapped",
		[
			12514
		]
	],
	[
		[
			65428,
			65428
		],
		"mapped",
		[
			12516
		]
	],
	[
		[
			65429,
			65429
		],
		"mapped",
		[
			12518
		]
	],
	[
		[
			65430,
			65430
		],
		"mapped",
		[
			12520
		]
	],
	[
		[
			65431,
			65431
		],
		"mapped",
		[
			12521
		]
	],
	[
		[
			65432,
			65432
		],
		"mapped",
		[
			12522
		]
	],
	[
		[
			65433,
			65433
		],
		"mapped",
		[
			12523
		]
	],
	[
		[
			65434,
			65434
		],
		"mapped",
		[
			12524
		]
	],
	[
		[
			65435,
			65435
		],
		"mapped",
		[
			12525
		]
	],
	[
		[
			65436,
			65436
		],
		"mapped",
		[
			12527
		]
	],
	[
		[
			65437,
			65437
		],
		"mapped",
		[
			12531
		]
	],
	[
		[
			65438,
			65438
		],
		"mapped",
		[
			12441
		]
	],
	[
		[
			65439,
			65439
		],
		"mapped",
		[
			12442
		]
	],
	[
		[
			65440,
			65440
		],
		"disallowed"
	],
	[
		[
			65441,
			65441
		],
		"mapped",
		[
			4352
		]
	],
	[
		[
			65442,
			65442
		],
		"mapped",
		[
			4353
		]
	],
	[
		[
			65443,
			65443
		],
		"mapped",
		[
			4522
		]
	],
	[
		[
			65444,
			65444
		],
		"mapped",
		[
			4354
		]
	],
	[
		[
			65445,
			65445
		],
		"mapped",
		[
			4524
		]
	],
	[
		[
			65446,
			65446
		],
		"mapped",
		[
			4525
		]
	],
	[
		[
			65447,
			65447
		],
		"mapped",
		[
			4355
		]
	],
	[
		[
			65448,
			65448
		],
		"mapped",
		[
			4356
		]
	],
	[
		[
			65449,
			65449
		],
		"mapped",
		[
			4357
		]
	],
	[
		[
			65450,
			65450
		],
		"mapped",
		[
			4528
		]
	],
	[
		[
			65451,
			65451
		],
		"mapped",
		[
			4529
		]
	],
	[
		[
			65452,
			65452
		],
		"mapped",
		[
			4530
		]
	],
	[
		[
			65453,
			65453
		],
		"mapped",
		[
			4531
		]
	],
	[
		[
			65454,
			65454
		],
		"mapped",
		[
			4532
		]
	],
	[
		[
			65455,
			65455
		],
		"mapped",
		[
			4533
		]
	],
	[
		[
			65456,
			65456
		],
		"mapped",
		[
			4378
		]
	],
	[
		[
			65457,
			65457
		],
		"mapped",
		[
			4358
		]
	],
	[
		[
			65458,
			65458
		],
		"mapped",
		[
			4359
		]
	],
	[
		[
			65459,
			65459
		],
		"mapped",
		[
			4360
		]
	],
	[
		[
			65460,
			65460
		],
		"mapped",
		[
			4385
		]
	],
	[
		[
			65461,
			65461
		],
		"mapped",
		[
			4361
		]
	],
	[
		[
			65462,
			65462
		],
		"mapped",
		[
			4362
		]
	],
	[
		[
			65463,
			65463
		],
		"mapped",
		[
			4363
		]
	],
	[
		[
			65464,
			65464
		],
		"mapped",
		[
			4364
		]
	],
	[
		[
			65465,
			65465
		],
		"mapped",
		[
			4365
		]
	],
	[
		[
			65466,
			65466
		],
		"mapped",
		[
			4366
		]
	],
	[
		[
			65467,
			65467
		],
		"mapped",
		[
			4367
		]
	],
	[
		[
			65468,
			65468
		],
		"mapped",
		[
			4368
		]
	],
	[
		[
			65469,
			65469
		],
		"mapped",
		[
			4369
		]
	],
	[
		[
			65470,
			65470
		],
		"mapped",
		[
			4370
		]
	],
	[
		[
			65471,
			65473
		],
		"disallowed"
	],
	[
		[
			65474,
			65474
		],
		"mapped",
		[
			4449
		]
	],
	[
		[
			65475,
			65475
		],
		"mapped",
		[
			4450
		]
	],
	[
		[
			65476,
			65476
		],
		"mapped",
		[
			4451
		]
	],
	[
		[
			65477,
			65477
		],
		"mapped",
		[
			4452
		]
	],
	[
		[
			65478,
			65478
		],
		"mapped",
		[
			4453
		]
	],
	[
		[
			65479,
			65479
		],
		"mapped",
		[
			4454
		]
	],
	[
		[
			65480,
			65481
		],
		"disallowed"
	],
	[
		[
			65482,
			65482
		],
		"mapped",
		[
			4455
		]
	],
	[
		[
			65483,
			65483
		],
		"mapped",
		[
			4456
		]
	],
	[
		[
			65484,
			65484
		],
		"mapped",
		[
			4457
		]
	],
	[
		[
			65485,
			65485
		],
		"mapped",
		[
			4458
		]
	],
	[
		[
			65486,
			65486
		],
		"mapped",
		[
			4459
		]
	],
	[
		[
			65487,
			65487
		],
		"mapped",
		[
			4460
		]
	],
	[
		[
			65488,
			65489
		],
		"disallowed"
	],
	[
		[
			65490,
			65490
		],
		"mapped",
		[
			4461
		]
	],
	[
		[
			65491,
			65491
		],
		"mapped",
		[
			4462
		]
	],
	[
		[
			65492,
			65492
		],
		"mapped",
		[
			4463
		]
	],
	[
		[
			65493,
			65493
		],
		"mapped",
		[
			4464
		]
	],
	[
		[
			65494,
			65494
		],
		"mapped",
		[
			4465
		]
	],
	[
		[
			65495,
			65495
		],
		"mapped",
		[
			4466
		]
	],
	[
		[
			65496,
			65497
		],
		"disallowed"
	],
	[
		[
			65498,
			65498
		],
		"mapped",
		[
			4467
		]
	],
	[
		[
			65499,
			65499
		],
		"mapped",
		[
			4468
		]
	],
	[
		[
			65500,
			65500
		],
		"mapped",
		[
			4469
		]
	],
	[
		[
			65501,
			65503
		],
		"disallowed"
	],
	[
		[
			65504,
			65504
		],
		"mapped",
		[
			162
		]
	],
	[
		[
			65505,
			65505
		],
		"mapped",
		[
			163
		]
	],
	[
		[
			65506,
			65506
		],
		"mapped",
		[
			172
		]
	],
	[
		[
			65507,
			65507
		],
		"disallowed_STD3_mapped",
		[
			32,
			772
		]
	],
	[
		[
			65508,
			65508
		],
		"mapped",
		[
			166
		]
	],
	[
		[
			65509,
			65509
		],
		"mapped",
		[
			165
		]
	],
	[
		[
			65510,
			65510
		],
		"mapped",
		[
			8361
		]
	],
	[
		[
			65511,
			65511
		],
		"disallowed"
	],
	[
		[
			65512,
			65512
		],
		"mapped",
		[
			9474
		]
	],
	[
		[
			65513,
			65513
		],
		"mapped",
		[
			8592
		]
	],
	[
		[
			65514,
			65514
		],
		"mapped",
		[
			8593
		]
	],
	[
		[
			65515,
			65515
		],
		"mapped",
		[
			8594
		]
	],
	[
		[
			65516,
			65516
		],
		"mapped",
		[
			8595
		]
	],
	[
		[
			65517,
			65517
		],
		"mapped",
		[
			9632
		]
	],
	[
		[
			65518,
			65518
		],
		"mapped",
		[
			9675
		]
	],
	[
		[
			65519,
			65528
		],
		"disallowed"
	],
	[
		[
			65529,
			65531
		],
		"disallowed"
	],
	[
		[
			65532,
			65532
		],
		"disallowed"
	],
	[
		[
			65533,
			65533
		],
		"disallowed"
	],
	[
		[
			65534,
			65535
		],
		"disallowed"
	],
	[
		[
			65536,
			65547
		],
		"valid"
	],
	[
		[
			65548,
			65548
		],
		"disallowed"
	],
	[
		[
			65549,
			65574
		],
		"valid"
	],
	[
		[
			65575,
			65575
		],
		"disallowed"
	],
	[
		[
			65576,
			65594
		],
		"valid"
	],
	[
		[
			65595,
			65595
		],
		"disallowed"
	],
	[
		[
			65596,
			65597
		],
		"valid"
	],
	[
		[
			65598,
			65598
		],
		"disallowed"
	],
	[
		[
			65599,
			65613
		],
		"valid"
	],
	[
		[
			65614,
			65615
		],
		"disallowed"
	],
	[
		[
			65616,
			65629
		],
		"valid"
	],
	[
		[
			65630,
			65663
		],
		"disallowed"
	],
	[
		[
			65664,
			65786
		],
		"valid"
	],
	[
		[
			65787,
			65791
		],
		"disallowed"
	],
	[
		[
			65792,
			65794
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			65795,
			65798
		],
		"disallowed"
	],
	[
		[
			65799,
			65843
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			65844,
			65846
		],
		"disallowed"
	],
	[
		[
			65847,
			65855
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			65856,
			65930
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			65931,
			65932
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			65933,
			65935
		],
		"disallowed"
	],
	[
		[
			65936,
			65947
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			65948,
			65951
		],
		"disallowed"
	],
	[
		[
			65952,
			65952
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			65953,
			65999
		],
		"disallowed"
	],
	[
		[
			66000,
			66044
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			66045,
			66045
		],
		"valid"
	],
	[
		[
			66046,
			66175
		],
		"disallowed"
	],
	[
		[
			66176,
			66204
		],
		"valid"
	],
	[
		[
			66205,
			66207
		],
		"disallowed"
	],
	[
		[
			66208,
			66256
		],
		"valid"
	],
	[
		[
			66257,
			66271
		],
		"disallowed"
	],
	[
		[
			66272,
			66272
		],
		"valid"
	],
	[
		[
			66273,
			66299
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			66300,
			66303
		],
		"disallowed"
	],
	[
		[
			66304,
			66334
		],
		"valid"
	],
	[
		[
			66335,
			66335
		],
		"valid"
	],
	[
		[
			66336,
			66339
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			66340,
			66351
		],
		"disallowed"
	],
	[
		[
			66352,
			66368
		],
		"valid"
	],
	[
		[
			66369,
			66369
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			66370,
			66377
		],
		"valid"
	],
	[
		[
			66378,
			66378
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			66379,
			66383
		],
		"disallowed"
	],
	[
		[
			66384,
			66426
		],
		"valid"
	],
	[
		[
			66427,
			66431
		],
		"disallowed"
	],
	[
		[
			66432,
			66461
		],
		"valid"
	],
	[
		[
			66462,
			66462
		],
		"disallowed"
	],
	[
		[
			66463,
			66463
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			66464,
			66499
		],
		"valid"
	],
	[
		[
			66500,
			66503
		],
		"disallowed"
	],
	[
		[
			66504,
			66511
		],
		"valid"
	],
	[
		[
			66512,
			66517
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			66518,
			66559
		],
		"disallowed"
	],
	[
		[
			66560,
			66560
		],
		"mapped",
		[
			66600
		]
	],
	[
		[
			66561,
			66561
		],
		"mapped",
		[
			66601
		]
	],
	[
		[
			66562,
			66562
		],
		"mapped",
		[
			66602
		]
	],
	[
		[
			66563,
			66563
		],
		"mapped",
		[
			66603
		]
	],
	[
		[
			66564,
			66564
		],
		"mapped",
		[
			66604
		]
	],
	[
		[
			66565,
			66565
		],
		"mapped",
		[
			66605
		]
	],
	[
		[
			66566,
			66566
		],
		"mapped",
		[
			66606
		]
	],
	[
		[
			66567,
			66567
		],
		"mapped",
		[
			66607
		]
	],
	[
		[
			66568,
			66568
		],
		"mapped",
		[
			66608
		]
	],
	[
		[
			66569,
			66569
		],
		"mapped",
		[
			66609
		]
	],
	[
		[
			66570,
			66570
		],
		"mapped",
		[
			66610
		]
	],
	[
		[
			66571,
			66571
		],
		"mapped",
		[
			66611
		]
	],
	[
		[
			66572,
			66572
		],
		"mapped",
		[
			66612
		]
	],
	[
		[
			66573,
			66573
		],
		"mapped",
		[
			66613
		]
	],
	[
		[
			66574,
			66574
		],
		"mapped",
		[
			66614
		]
	],
	[
		[
			66575,
			66575
		],
		"mapped",
		[
			66615
		]
	],
	[
		[
			66576,
			66576
		],
		"mapped",
		[
			66616
		]
	],
	[
		[
			66577,
			66577
		],
		"mapped",
		[
			66617
		]
	],
	[
		[
			66578,
			66578
		],
		"mapped",
		[
			66618
		]
	],
	[
		[
			66579,
			66579
		],
		"mapped",
		[
			66619
		]
	],
	[
		[
			66580,
			66580
		],
		"mapped",
		[
			66620
		]
	],
	[
		[
			66581,
			66581
		],
		"mapped",
		[
			66621
		]
	],
	[
		[
			66582,
			66582
		],
		"mapped",
		[
			66622
		]
	],
	[
		[
			66583,
			66583
		],
		"mapped",
		[
			66623
		]
	],
	[
		[
			66584,
			66584
		],
		"mapped",
		[
			66624
		]
	],
	[
		[
			66585,
			66585
		],
		"mapped",
		[
			66625
		]
	],
	[
		[
			66586,
			66586
		],
		"mapped",
		[
			66626
		]
	],
	[
		[
			66587,
			66587
		],
		"mapped",
		[
			66627
		]
	],
	[
		[
			66588,
			66588
		],
		"mapped",
		[
			66628
		]
	],
	[
		[
			66589,
			66589
		],
		"mapped",
		[
			66629
		]
	],
	[
		[
			66590,
			66590
		],
		"mapped",
		[
			66630
		]
	],
	[
		[
			66591,
			66591
		],
		"mapped",
		[
			66631
		]
	],
	[
		[
			66592,
			66592
		],
		"mapped",
		[
			66632
		]
	],
	[
		[
			66593,
			66593
		],
		"mapped",
		[
			66633
		]
	],
	[
		[
			66594,
			66594
		],
		"mapped",
		[
			66634
		]
	],
	[
		[
			66595,
			66595
		],
		"mapped",
		[
			66635
		]
	],
	[
		[
			66596,
			66596
		],
		"mapped",
		[
			66636
		]
	],
	[
		[
			66597,
			66597
		],
		"mapped",
		[
			66637
		]
	],
	[
		[
			66598,
			66598
		],
		"mapped",
		[
			66638
		]
	],
	[
		[
			66599,
			66599
		],
		"mapped",
		[
			66639
		]
	],
	[
		[
			66600,
			66637
		],
		"valid"
	],
	[
		[
			66638,
			66717
		],
		"valid"
	],
	[
		[
			66718,
			66719
		],
		"disallowed"
	],
	[
		[
			66720,
			66729
		],
		"valid"
	],
	[
		[
			66730,
			66815
		],
		"disallowed"
	],
	[
		[
			66816,
			66855
		],
		"valid"
	],
	[
		[
			66856,
			66863
		],
		"disallowed"
	],
	[
		[
			66864,
			66915
		],
		"valid"
	],
	[
		[
			66916,
			66926
		],
		"disallowed"
	],
	[
		[
			66927,
			66927
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			66928,
			67071
		],
		"disallowed"
	],
	[
		[
			67072,
			67382
		],
		"valid"
	],
	[
		[
			67383,
			67391
		],
		"disallowed"
	],
	[
		[
			67392,
			67413
		],
		"valid"
	],
	[
		[
			67414,
			67423
		],
		"disallowed"
	],
	[
		[
			67424,
			67431
		],
		"valid"
	],
	[
		[
			67432,
			67583
		],
		"disallowed"
	],
	[
		[
			67584,
			67589
		],
		"valid"
	],
	[
		[
			67590,
			67591
		],
		"disallowed"
	],
	[
		[
			67592,
			67592
		],
		"valid"
	],
	[
		[
			67593,
			67593
		],
		"disallowed"
	],
	[
		[
			67594,
			67637
		],
		"valid"
	],
	[
		[
			67638,
			67638
		],
		"disallowed"
	],
	[
		[
			67639,
			67640
		],
		"valid"
	],
	[
		[
			67641,
			67643
		],
		"disallowed"
	],
	[
		[
			67644,
			67644
		],
		"valid"
	],
	[
		[
			67645,
			67646
		],
		"disallowed"
	],
	[
		[
			67647,
			67647
		],
		"valid"
	],
	[
		[
			67648,
			67669
		],
		"valid"
	],
	[
		[
			67670,
			67670
		],
		"disallowed"
	],
	[
		[
			67671,
			67679
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			67680,
			67702
		],
		"valid"
	],
	[
		[
			67703,
			67711
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			67712,
			67742
		],
		"valid"
	],
	[
		[
			67743,
			67750
		],
		"disallowed"
	],
	[
		[
			67751,
			67759
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			67760,
			67807
		],
		"disallowed"
	],
	[
		[
			67808,
			67826
		],
		"valid"
	],
	[
		[
			67827,
			67827
		],
		"disallowed"
	],
	[
		[
			67828,
			67829
		],
		"valid"
	],
	[
		[
			67830,
			67834
		],
		"disallowed"
	],
	[
		[
			67835,
			67839
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			67840,
			67861
		],
		"valid"
	],
	[
		[
			67862,
			67865
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			67866,
			67867
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			67868,
			67870
		],
		"disallowed"
	],
	[
		[
			67871,
			67871
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			67872,
			67897
		],
		"valid"
	],
	[
		[
			67898,
			67902
		],
		"disallowed"
	],
	[
		[
			67903,
			67903
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			67904,
			67967
		],
		"disallowed"
	],
	[
		[
			67968,
			68023
		],
		"valid"
	],
	[
		[
			68024,
			68027
		],
		"disallowed"
	],
	[
		[
			68028,
			68029
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68030,
			68031
		],
		"valid"
	],
	[
		[
			68032,
			68047
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68048,
			68049
		],
		"disallowed"
	],
	[
		[
			68050,
			68095
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68096,
			68099
		],
		"valid"
	],
	[
		[
			68100,
			68100
		],
		"disallowed"
	],
	[
		[
			68101,
			68102
		],
		"valid"
	],
	[
		[
			68103,
			68107
		],
		"disallowed"
	],
	[
		[
			68108,
			68115
		],
		"valid"
	],
	[
		[
			68116,
			68116
		],
		"disallowed"
	],
	[
		[
			68117,
			68119
		],
		"valid"
	],
	[
		[
			68120,
			68120
		],
		"disallowed"
	],
	[
		[
			68121,
			68147
		],
		"valid"
	],
	[
		[
			68148,
			68151
		],
		"disallowed"
	],
	[
		[
			68152,
			68154
		],
		"valid"
	],
	[
		[
			68155,
			68158
		],
		"disallowed"
	],
	[
		[
			68159,
			68159
		],
		"valid"
	],
	[
		[
			68160,
			68167
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68168,
			68175
		],
		"disallowed"
	],
	[
		[
			68176,
			68184
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68185,
			68191
		],
		"disallowed"
	],
	[
		[
			68192,
			68220
		],
		"valid"
	],
	[
		[
			68221,
			68223
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68224,
			68252
		],
		"valid"
	],
	[
		[
			68253,
			68255
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68256,
			68287
		],
		"disallowed"
	],
	[
		[
			68288,
			68295
		],
		"valid"
	],
	[
		[
			68296,
			68296
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68297,
			68326
		],
		"valid"
	],
	[
		[
			68327,
			68330
		],
		"disallowed"
	],
	[
		[
			68331,
			68342
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68343,
			68351
		],
		"disallowed"
	],
	[
		[
			68352,
			68405
		],
		"valid"
	],
	[
		[
			68406,
			68408
		],
		"disallowed"
	],
	[
		[
			68409,
			68415
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68416,
			68437
		],
		"valid"
	],
	[
		[
			68438,
			68439
		],
		"disallowed"
	],
	[
		[
			68440,
			68447
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68448,
			68466
		],
		"valid"
	],
	[
		[
			68467,
			68471
		],
		"disallowed"
	],
	[
		[
			68472,
			68479
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68480,
			68497
		],
		"valid"
	],
	[
		[
			68498,
			68504
		],
		"disallowed"
	],
	[
		[
			68505,
			68508
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68509,
			68520
		],
		"disallowed"
	],
	[
		[
			68521,
			68527
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68528,
			68607
		],
		"disallowed"
	],
	[
		[
			68608,
			68680
		],
		"valid"
	],
	[
		[
			68681,
			68735
		],
		"disallowed"
	],
	[
		[
			68736,
			68736
		],
		"mapped",
		[
			68800
		]
	],
	[
		[
			68737,
			68737
		],
		"mapped",
		[
			68801
		]
	],
	[
		[
			68738,
			68738
		],
		"mapped",
		[
			68802
		]
	],
	[
		[
			68739,
			68739
		],
		"mapped",
		[
			68803
		]
	],
	[
		[
			68740,
			68740
		],
		"mapped",
		[
			68804
		]
	],
	[
		[
			68741,
			68741
		],
		"mapped",
		[
			68805
		]
	],
	[
		[
			68742,
			68742
		],
		"mapped",
		[
			68806
		]
	],
	[
		[
			68743,
			68743
		],
		"mapped",
		[
			68807
		]
	],
	[
		[
			68744,
			68744
		],
		"mapped",
		[
			68808
		]
	],
	[
		[
			68745,
			68745
		],
		"mapped",
		[
			68809
		]
	],
	[
		[
			68746,
			68746
		],
		"mapped",
		[
			68810
		]
	],
	[
		[
			68747,
			68747
		],
		"mapped",
		[
			68811
		]
	],
	[
		[
			68748,
			68748
		],
		"mapped",
		[
			68812
		]
	],
	[
		[
			68749,
			68749
		],
		"mapped",
		[
			68813
		]
	],
	[
		[
			68750,
			68750
		],
		"mapped",
		[
			68814
		]
	],
	[
		[
			68751,
			68751
		],
		"mapped",
		[
			68815
		]
	],
	[
		[
			68752,
			68752
		],
		"mapped",
		[
			68816
		]
	],
	[
		[
			68753,
			68753
		],
		"mapped",
		[
			68817
		]
	],
	[
		[
			68754,
			68754
		],
		"mapped",
		[
			68818
		]
	],
	[
		[
			68755,
			68755
		],
		"mapped",
		[
			68819
		]
	],
	[
		[
			68756,
			68756
		],
		"mapped",
		[
			68820
		]
	],
	[
		[
			68757,
			68757
		],
		"mapped",
		[
			68821
		]
	],
	[
		[
			68758,
			68758
		],
		"mapped",
		[
			68822
		]
	],
	[
		[
			68759,
			68759
		],
		"mapped",
		[
			68823
		]
	],
	[
		[
			68760,
			68760
		],
		"mapped",
		[
			68824
		]
	],
	[
		[
			68761,
			68761
		],
		"mapped",
		[
			68825
		]
	],
	[
		[
			68762,
			68762
		],
		"mapped",
		[
			68826
		]
	],
	[
		[
			68763,
			68763
		],
		"mapped",
		[
			68827
		]
	],
	[
		[
			68764,
			68764
		],
		"mapped",
		[
			68828
		]
	],
	[
		[
			68765,
			68765
		],
		"mapped",
		[
			68829
		]
	],
	[
		[
			68766,
			68766
		],
		"mapped",
		[
			68830
		]
	],
	[
		[
			68767,
			68767
		],
		"mapped",
		[
			68831
		]
	],
	[
		[
			68768,
			68768
		],
		"mapped",
		[
			68832
		]
	],
	[
		[
			68769,
			68769
		],
		"mapped",
		[
			68833
		]
	],
	[
		[
			68770,
			68770
		],
		"mapped",
		[
			68834
		]
	],
	[
		[
			68771,
			68771
		],
		"mapped",
		[
			68835
		]
	],
	[
		[
			68772,
			68772
		],
		"mapped",
		[
			68836
		]
	],
	[
		[
			68773,
			68773
		],
		"mapped",
		[
			68837
		]
	],
	[
		[
			68774,
			68774
		],
		"mapped",
		[
			68838
		]
	],
	[
		[
			68775,
			68775
		],
		"mapped",
		[
			68839
		]
	],
	[
		[
			68776,
			68776
		],
		"mapped",
		[
			68840
		]
	],
	[
		[
			68777,
			68777
		],
		"mapped",
		[
			68841
		]
	],
	[
		[
			68778,
			68778
		],
		"mapped",
		[
			68842
		]
	],
	[
		[
			68779,
			68779
		],
		"mapped",
		[
			68843
		]
	],
	[
		[
			68780,
			68780
		],
		"mapped",
		[
			68844
		]
	],
	[
		[
			68781,
			68781
		],
		"mapped",
		[
			68845
		]
	],
	[
		[
			68782,
			68782
		],
		"mapped",
		[
			68846
		]
	],
	[
		[
			68783,
			68783
		],
		"mapped",
		[
			68847
		]
	],
	[
		[
			68784,
			68784
		],
		"mapped",
		[
			68848
		]
	],
	[
		[
			68785,
			68785
		],
		"mapped",
		[
			68849
		]
	],
	[
		[
			68786,
			68786
		],
		"mapped",
		[
			68850
		]
	],
	[
		[
			68787,
			68799
		],
		"disallowed"
	],
	[
		[
			68800,
			68850
		],
		"valid"
	],
	[
		[
			68851,
			68857
		],
		"disallowed"
	],
	[
		[
			68858,
			68863
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			68864,
			69215
		],
		"disallowed"
	],
	[
		[
			69216,
			69246
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			69247,
			69631
		],
		"disallowed"
	],
	[
		[
			69632,
			69702
		],
		"valid"
	],
	[
		[
			69703,
			69709
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			69710,
			69713
		],
		"disallowed"
	],
	[
		[
			69714,
			69733
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			69734,
			69743
		],
		"valid"
	],
	[
		[
			69744,
			69758
		],
		"disallowed"
	],
	[
		[
			69759,
			69759
		],
		"valid"
	],
	[
		[
			69760,
			69818
		],
		"valid"
	],
	[
		[
			69819,
			69820
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			69821,
			69821
		],
		"disallowed"
	],
	[
		[
			69822,
			69825
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			69826,
			69839
		],
		"disallowed"
	],
	[
		[
			69840,
			69864
		],
		"valid"
	],
	[
		[
			69865,
			69871
		],
		"disallowed"
	],
	[
		[
			69872,
			69881
		],
		"valid"
	],
	[
		[
			69882,
			69887
		],
		"disallowed"
	],
	[
		[
			69888,
			69940
		],
		"valid"
	],
	[
		[
			69941,
			69941
		],
		"disallowed"
	],
	[
		[
			69942,
			69951
		],
		"valid"
	],
	[
		[
			69952,
			69955
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			69956,
			69967
		],
		"disallowed"
	],
	[
		[
			69968,
			70003
		],
		"valid"
	],
	[
		[
			70004,
			70005
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			70006,
			70006
		],
		"valid"
	],
	[
		[
			70007,
			70015
		],
		"disallowed"
	],
	[
		[
			70016,
			70084
		],
		"valid"
	],
	[
		[
			70085,
			70088
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			70089,
			70089
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			70090,
			70092
		],
		"valid"
	],
	[
		[
			70093,
			70093
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			70094,
			70095
		],
		"disallowed"
	],
	[
		[
			70096,
			70105
		],
		"valid"
	],
	[
		[
			70106,
			70106
		],
		"valid"
	],
	[
		[
			70107,
			70107
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			70108,
			70108
		],
		"valid"
	],
	[
		[
			70109,
			70111
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			70112,
			70112
		],
		"disallowed"
	],
	[
		[
			70113,
			70132
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			70133,
			70143
		],
		"disallowed"
	],
	[
		[
			70144,
			70161
		],
		"valid"
	],
	[
		[
			70162,
			70162
		],
		"disallowed"
	],
	[
		[
			70163,
			70199
		],
		"valid"
	],
	[
		[
			70200,
			70205
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			70206,
			70271
		],
		"disallowed"
	],
	[
		[
			70272,
			70278
		],
		"valid"
	],
	[
		[
			70279,
			70279
		],
		"disallowed"
	],
	[
		[
			70280,
			70280
		],
		"valid"
	],
	[
		[
			70281,
			70281
		],
		"disallowed"
	],
	[
		[
			70282,
			70285
		],
		"valid"
	],
	[
		[
			70286,
			70286
		],
		"disallowed"
	],
	[
		[
			70287,
			70301
		],
		"valid"
	],
	[
		[
			70302,
			70302
		],
		"disallowed"
	],
	[
		[
			70303,
			70312
		],
		"valid"
	],
	[
		[
			70313,
			70313
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			70314,
			70319
		],
		"disallowed"
	],
	[
		[
			70320,
			70378
		],
		"valid"
	],
	[
		[
			70379,
			70383
		],
		"disallowed"
	],
	[
		[
			70384,
			70393
		],
		"valid"
	],
	[
		[
			70394,
			70399
		],
		"disallowed"
	],
	[
		[
			70400,
			70400
		],
		"valid"
	],
	[
		[
			70401,
			70403
		],
		"valid"
	],
	[
		[
			70404,
			70404
		],
		"disallowed"
	],
	[
		[
			70405,
			70412
		],
		"valid"
	],
	[
		[
			70413,
			70414
		],
		"disallowed"
	],
	[
		[
			70415,
			70416
		],
		"valid"
	],
	[
		[
			70417,
			70418
		],
		"disallowed"
	],
	[
		[
			70419,
			70440
		],
		"valid"
	],
	[
		[
			70441,
			70441
		],
		"disallowed"
	],
	[
		[
			70442,
			70448
		],
		"valid"
	],
	[
		[
			70449,
			70449
		],
		"disallowed"
	],
	[
		[
			70450,
			70451
		],
		"valid"
	],
	[
		[
			70452,
			70452
		],
		"disallowed"
	],
	[
		[
			70453,
			70457
		],
		"valid"
	],
	[
		[
			70458,
			70459
		],
		"disallowed"
	],
	[
		[
			70460,
			70468
		],
		"valid"
	],
	[
		[
			70469,
			70470
		],
		"disallowed"
	],
	[
		[
			70471,
			70472
		],
		"valid"
	],
	[
		[
			70473,
			70474
		],
		"disallowed"
	],
	[
		[
			70475,
			70477
		],
		"valid"
	],
	[
		[
			70478,
			70479
		],
		"disallowed"
	],
	[
		[
			70480,
			70480
		],
		"valid"
	],
	[
		[
			70481,
			70486
		],
		"disallowed"
	],
	[
		[
			70487,
			70487
		],
		"valid"
	],
	[
		[
			70488,
			70492
		],
		"disallowed"
	],
	[
		[
			70493,
			70499
		],
		"valid"
	],
	[
		[
			70500,
			70501
		],
		"disallowed"
	],
	[
		[
			70502,
			70508
		],
		"valid"
	],
	[
		[
			70509,
			70511
		],
		"disallowed"
	],
	[
		[
			70512,
			70516
		],
		"valid"
	],
	[
		[
			70517,
			70783
		],
		"disallowed"
	],
	[
		[
			70784,
			70853
		],
		"valid"
	],
	[
		[
			70854,
			70854
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			70855,
			70855
		],
		"valid"
	],
	[
		[
			70856,
			70863
		],
		"disallowed"
	],
	[
		[
			70864,
			70873
		],
		"valid"
	],
	[
		[
			70874,
			71039
		],
		"disallowed"
	],
	[
		[
			71040,
			71093
		],
		"valid"
	],
	[
		[
			71094,
			71095
		],
		"disallowed"
	],
	[
		[
			71096,
			71104
		],
		"valid"
	],
	[
		[
			71105,
			71113
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			71114,
			71127
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			71128,
			71133
		],
		"valid"
	],
	[
		[
			71134,
			71167
		],
		"disallowed"
	],
	[
		[
			71168,
			71232
		],
		"valid"
	],
	[
		[
			71233,
			71235
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			71236,
			71236
		],
		"valid"
	],
	[
		[
			71237,
			71247
		],
		"disallowed"
	],
	[
		[
			71248,
			71257
		],
		"valid"
	],
	[
		[
			71258,
			71295
		],
		"disallowed"
	],
	[
		[
			71296,
			71351
		],
		"valid"
	],
	[
		[
			71352,
			71359
		],
		"disallowed"
	],
	[
		[
			71360,
			71369
		],
		"valid"
	],
	[
		[
			71370,
			71423
		],
		"disallowed"
	],
	[
		[
			71424,
			71449
		],
		"valid"
	],
	[
		[
			71450,
			71452
		],
		"disallowed"
	],
	[
		[
			71453,
			71467
		],
		"valid"
	],
	[
		[
			71468,
			71471
		],
		"disallowed"
	],
	[
		[
			71472,
			71481
		],
		"valid"
	],
	[
		[
			71482,
			71487
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			71488,
			71839
		],
		"disallowed"
	],
	[
		[
			71840,
			71840
		],
		"mapped",
		[
			71872
		]
	],
	[
		[
			71841,
			71841
		],
		"mapped",
		[
			71873
		]
	],
	[
		[
			71842,
			71842
		],
		"mapped",
		[
			71874
		]
	],
	[
		[
			71843,
			71843
		],
		"mapped",
		[
			71875
		]
	],
	[
		[
			71844,
			71844
		],
		"mapped",
		[
			71876
		]
	],
	[
		[
			71845,
			71845
		],
		"mapped",
		[
			71877
		]
	],
	[
		[
			71846,
			71846
		],
		"mapped",
		[
			71878
		]
	],
	[
		[
			71847,
			71847
		],
		"mapped",
		[
			71879
		]
	],
	[
		[
			71848,
			71848
		],
		"mapped",
		[
			71880
		]
	],
	[
		[
			71849,
			71849
		],
		"mapped",
		[
			71881
		]
	],
	[
		[
			71850,
			71850
		],
		"mapped",
		[
			71882
		]
	],
	[
		[
			71851,
			71851
		],
		"mapped",
		[
			71883
		]
	],
	[
		[
			71852,
			71852
		],
		"mapped",
		[
			71884
		]
	],
	[
		[
			71853,
			71853
		],
		"mapped",
		[
			71885
		]
	],
	[
		[
			71854,
			71854
		],
		"mapped",
		[
			71886
		]
	],
	[
		[
			71855,
			71855
		],
		"mapped",
		[
			71887
		]
	],
	[
		[
			71856,
			71856
		],
		"mapped",
		[
			71888
		]
	],
	[
		[
			71857,
			71857
		],
		"mapped",
		[
			71889
		]
	],
	[
		[
			71858,
			71858
		],
		"mapped",
		[
			71890
		]
	],
	[
		[
			71859,
			71859
		],
		"mapped",
		[
			71891
		]
	],
	[
		[
			71860,
			71860
		],
		"mapped",
		[
			71892
		]
	],
	[
		[
			71861,
			71861
		],
		"mapped",
		[
			71893
		]
	],
	[
		[
			71862,
			71862
		],
		"mapped",
		[
			71894
		]
	],
	[
		[
			71863,
			71863
		],
		"mapped",
		[
			71895
		]
	],
	[
		[
			71864,
			71864
		],
		"mapped",
		[
			71896
		]
	],
	[
		[
			71865,
			71865
		],
		"mapped",
		[
			71897
		]
	],
	[
		[
			71866,
			71866
		],
		"mapped",
		[
			71898
		]
	],
	[
		[
			71867,
			71867
		],
		"mapped",
		[
			71899
		]
	],
	[
		[
			71868,
			71868
		],
		"mapped",
		[
			71900
		]
	],
	[
		[
			71869,
			71869
		],
		"mapped",
		[
			71901
		]
	],
	[
		[
			71870,
			71870
		],
		"mapped",
		[
			71902
		]
	],
	[
		[
			71871,
			71871
		],
		"mapped",
		[
			71903
		]
	],
	[
		[
			71872,
			71913
		],
		"valid"
	],
	[
		[
			71914,
			71922
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			71923,
			71934
		],
		"disallowed"
	],
	[
		[
			71935,
			71935
		],
		"valid"
	],
	[
		[
			71936,
			72383
		],
		"disallowed"
	],
	[
		[
			72384,
			72440
		],
		"valid"
	],
	[
		[
			72441,
			73727
		],
		"disallowed"
	],
	[
		[
			73728,
			74606
		],
		"valid"
	],
	[
		[
			74607,
			74648
		],
		"valid"
	],
	[
		[
			74649,
			74649
		],
		"valid"
	],
	[
		[
			74650,
			74751
		],
		"disallowed"
	],
	[
		[
			74752,
			74850
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			74851,
			74862
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			74863,
			74863
		],
		"disallowed"
	],
	[
		[
			74864,
			74867
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			74868,
			74868
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			74869,
			74879
		],
		"disallowed"
	],
	[
		[
			74880,
			75075
		],
		"valid"
	],
	[
		[
			75076,
			77823
		],
		"disallowed"
	],
	[
		[
			77824,
			78894
		],
		"valid"
	],
	[
		[
			78895,
			82943
		],
		"disallowed"
	],
	[
		[
			82944,
			83526
		],
		"valid"
	],
	[
		[
			83527,
			92159
		],
		"disallowed"
	],
	[
		[
			92160,
			92728
		],
		"valid"
	],
	[
		[
			92729,
			92735
		],
		"disallowed"
	],
	[
		[
			92736,
			92766
		],
		"valid"
	],
	[
		[
			92767,
			92767
		],
		"disallowed"
	],
	[
		[
			92768,
			92777
		],
		"valid"
	],
	[
		[
			92778,
			92781
		],
		"disallowed"
	],
	[
		[
			92782,
			92783
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			92784,
			92879
		],
		"disallowed"
	],
	[
		[
			92880,
			92909
		],
		"valid"
	],
	[
		[
			92910,
			92911
		],
		"disallowed"
	],
	[
		[
			92912,
			92916
		],
		"valid"
	],
	[
		[
			92917,
			92917
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			92918,
			92927
		],
		"disallowed"
	],
	[
		[
			92928,
			92982
		],
		"valid"
	],
	[
		[
			92983,
			92991
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			92992,
			92995
		],
		"valid"
	],
	[
		[
			92996,
			92997
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			92998,
			93007
		],
		"disallowed"
	],
	[
		[
			93008,
			93017
		],
		"valid"
	],
	[
		[
			93018,
			93018
		],
		"disallowed"
	],
	[
		[
			93019,
			93025
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			93026,
			93026
		],
		"disallowed"
	],
	[
		[
			93027,
			93047
		],
		"valid"
	],
	[
		[
			93048,
			93052
		],
		"disallowed"
	],
	[
		[
			93053,
			93071
		],
		"valid"
	],
	[
		[
			93072,
			93951
		],
		"disallowed"
	],
	[
		[
			93952,
			94020
		],
		"valid"
	],
	[
		[
			94021,
			94031
		],
		"disallowed"
	],
	[
		[
			94032,
			94078
		],
		"valid"
	],
	[
		[
			94079,
			94094
		],
		"disallowed"
	],
	[
		[
			94095,
			94111
		],
		"valid"
	],
	[
		[
			94112,
			110591
		],
		"disallowed"
	],
	[
		[
			110592,
			110593
		],
		"valid"
	],
	[
		[
			110594,
			113663
		],
		"disallowed"
	],
	[
		[
			113664,
			113770
		],
		"valid"
	],
	[
		[
			113771,
			113775
		],
		"disallowed"
	],
	[
		[
			113776,
			113788
		],
		"valid"
	],
	[
		[
			113789,
			113791
		],
		"disallowed"
	],
	[
		[
			113792,
			113800
		],
		"valid"
	],
	[
		[
			113801,
			113807
		],
		"disallowed"
	],
	[
		[
			113808,
			113817
		],
		"valid"
	],
	[
		[
			113818,
			113819
		],
		"disallowed"
	],
	[
		[
			113820,
			113820
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			113821,
			113822
		],
		"valid"
	],
	[
		[
			113823,
			113823
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			113824,
			113827
		],
		"ignored"
	],
	[
		[
			113828,
			118783
		],
		"disallowed"
	],
	[
		[
			118784,
			119029
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119030,
			119039
		],
		"disallowed"
	],
	[
		[
			119040,
			119078
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119079,
			119080
		],
		"disallowed"
	],
	[
		[
			119081,
			119081
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119082,
			119133
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119134,
			119134
		],
		"mapped",
		[
			119127,
			119141
		]
	],
	[
		[
			119135,
			119135
		],
		"mapped",
		[
			119128,
			119141
		]
	],
	[
		[
			119136,
			119136
		],
		"mapped",
		[
			119128,
			119141,
			119150
		]
	],
	[
		[
			119137,
			119137
		],
		"mapped",
		[
			119128,
			119141,
			119151
		]
	],
	[
		[
			119138,
			119138
		],
		"mapped",
		[
			119128,
			119141,
			119152
		]
	],
	[
		[
			119139,
			119139
		],
		"mapped",
		[
			119128,
			119141,
			119153
		]
	],
	[
		[
			119140,
			119140
		],
		"mapped",
		[
			119128,
			119141,
			119154
		]
	],
	[
		[
			119141,
			119154
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119155,
			119162
		],
		"disallowed"
	],
	[
		[
			119163,
			119226
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119227,
			119227
		],
		"mapped",
		[
			119225,
			119141
		]
	],
	[
		[
			119228,
			119228
		],
		"mapped",
		[
			119226,
			119141
		]
	],
	[
		[
			119229,
			119229
		],
		"mapped",
		[
			119225,
			119141,
			119150
		]
	],
	[
		[
			119230,
			119230
		],
		"mapped",
		[
			119226,
			119141,
			119150
		]
	],
	[
		[
			119231,
			119231
		],
		"mapped",
		[
			119225,
			119141,
			119151
		]
	],
	[
		[
			119232,
			119232
		],
		"mapped",
		[
			119226,
			119141,
			119151
		]
	],
	[
		[
			119233,
			119261
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119262,
			119272
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119273,
			119295
		],
		"disallowed"
	],
	[
		[
			119296,
			119365
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119366,
			119551
		],
		"disallowed"
	],
	[
		[
			119552,
			119638
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119639,
			119647
		],
		"disallowed"
	],
	[
		[
			119648,
			119665
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			119666,
			119807
		],
		"disallowed"
	],
	[
		[
			119808,
			119808
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			119809,
			119809
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			119810,
			119810
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			119811,
			119811
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			119812,
			119812
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			119813,
			119813
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			119814,
			119814
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			119815,
			119815
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			119816,
			119816
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			119817,
			119817
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			119818,
			119818
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			119819,
			119819
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			119820,
			119820
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			119821,
			119821
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			119822,
			119822
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			119823,
			119823
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			119824,
			119824
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			119825,
			119825
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			119826,
			119826
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			119827,
			119827
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			119828,
			119828
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			119829,
			119829
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			119830,
			119830
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			119831,
			119831
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			119832,
			119832
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			119833,
			119833
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			119834,
			119834
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			119835,
			119835
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			119836,
			119836
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			119837,
			119837
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			119838,
			119838
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			119839,
			119839
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			119840,
			119840
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			119841,
			119841
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			119842,
			119842
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			119843,
			119843
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			119844,
			119844
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			119845,
			119845
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			119846,
			119846
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			119847,
			119847
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			119848,
			119848
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			119849,
			119849
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			119850,
			119850
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			119851,
			119851
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			119852,
			119852
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			119853,
			119853
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			119854,
			119854
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			119855,
			119855
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			119856,
			119856
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			119857,
			119857
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			119858,
			119858
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			119859,
			119859
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			119860,
			119860
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			119861,
			119861
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			119862,
			119862
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			119863,
			119863
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			119864,
			119864
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			119865,
			119865
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			119866,
			119866
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			119867,
			119867
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			119868,
			119868
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			119869,
			119869
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			119870,
			119870
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			119871,
			119871
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			119872,
			119872
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			119873,
			119873
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			119874,
			119874
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			119875,
			119875
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			119876,
			119876
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			119877,
			119877
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			119878,
			119878
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			119879,
			119879
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			119880,
			119880
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			119881,
			119881
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			119882,
			119882
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			119883,
			119883
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			119884,
			119884
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			119885,
			119885
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			119886,
			119886
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			119887,
			119887
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			119888,
			119888
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			119889,
			119889
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			119890,
			119890
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			119891,
			119891
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			119892,
			119892
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			119893,
			119893
		],
		"disallowed"
	],
	[
		[
			119894,
			119894
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			119895,
			119895
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			119896,
			119896
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			119897,
			119897
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			119898,
			119898
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			119899,
			119899
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			119900,
			119900
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			119901,
			119901
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			119902,
			119902
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			119903,
			119903
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			119904,
			119904
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			119905,
			119905
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			119906,
			119906
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			119907,
			119907
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			119908,
			119908
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			119909,
			119909
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			119910,
			119910
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			119911,
			119911
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			119912,
			119912
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			119913,
			119913
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			119914,
			119914
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			119915,
			119915
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			119916,
			119916
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			119917,
			119917
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			119918,
			119918
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			119919,
			119919
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			119920,
			119920
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			119921,
			119921
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			119922,
			119922
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			119923,
			119923
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			119924,
			119924
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			119925,
			119925
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			119926,
			119926
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			119927,
			119927
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			119928,
			119928
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			119929,
			119929
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			119930,
			119930
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			119931,
			119931
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			119932,
			119932
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			119933,
			119933
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			119934,
			119934
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			119935,
			119935
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			119936,
			119936
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			119937,
			119937
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			119938,
			119938
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			119939,
			119939
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			119940,
			119940
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			119941,
			119941
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			119942,
			119942
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			119943,
			119943
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			119944,
			119944
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			119945,
			119945
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			119946,
			119946
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			119947,
			119947
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			119948,
			119948
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			119949,
			119949
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			119950,
			119950
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			119951,
			119951
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			119952,
			119952
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			119953,
			119953
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			119954,
			119954
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			119955,
			119955
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			119956,
			119956
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			119957,
			119957
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			119958,
			119958
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			119959,
			119959
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			119960,
			119960
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			119961,
			119961
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			119962,
			119962
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			119963,
			119963
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			119964,
			119964
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			119965,
			119965
		],
		"disallowed"
	],
	[
		[
			119966,
			119966
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			119967,
			119967
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			119968,
			119969
		],
		"disallowed"
	],
	[
		[
			119970,
			119970
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			119971,
			119972
		],
		"disallowed"
	],
	[
		[
			119973,
			119973
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			119974,
			119974
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			119975,
			119976
		],
		"disallowed"
	],
	[
		[
			119977,
			119977
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			119978,
			119978
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			119979,
			119979
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			119980,
			119980
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			119981,
			119981
		],
		"disallowed"
	],
	[
		[
			119982,
			119982
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			119983,
			119983
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			119984,
			119984
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			119985,
			119985
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			119986,
			119986
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			119987,
			119987
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			119988,
			119988
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			119989,
			119989
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			119990,
			119990
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			119991,
			119991
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			119992,
			119992
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			119993,
			119993
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			119994,
			119994
		],
		"disallowed"
	],
	[
		[
			119995,
			119995
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			119996,
			119996
		],
		"disallowed"
	],
	[
		[
			119997,
			119997
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			119998,
			119998
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			119999,
			119999
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120000,
			120000
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120001,
			120001
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120002,
			120002
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120003,
			120003
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120004,
			120004
		],
		"disallowed"
	],
	[
		[
			120005,
			120005
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120006,
			120006
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120007,
			120007
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120008,
			120008
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120009,
			120009
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120010,
			120010
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120011,
			120011
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120012,
			120012
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120013,
			120013
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120014,
			120014
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120015,
			120015
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120016,
			120016
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120017,
			120017
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120018,
			120018
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120019,
			120019
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120020,
			120020
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120021,
			120021
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120022,
			120022
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120023,
			120023
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120024,
			120024
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120025,
			120025
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120026,
			120026
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120027,
			120027
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120028,
			120028
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120029,
			120029
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120030,
			120030
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120031,
			120031
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120032,
			120032
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120033,
			120033
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120034,
			120034
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120035,
			120035
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120036,
			120036
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120037,
			120037
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120038,
			120038
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120039,
			120039
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120040,
			120040
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120041,
			120041
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120042,
			120042
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120043,
			120043
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120044,
			120044
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120045,
			120045
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120046,
			120046
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120047,
			120047
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120048,
			120048
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120049,
			120049
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120050,
			120050
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120051,
			120051
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120052,
			120052
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120053,
			120053
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120054,
			120054
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120055,
			120055
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120056,
			120056
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120057,
			120057
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120058,
			120058
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120059,
			120059
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120060,
			120060
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120061,
			120061
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120062,
			120062
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120063,
			120063
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120064,
			120064
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120065,
			120065
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120066,
			120066
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120067,
			120067
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120068,
			120068
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120069,
			120069
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120070,
			120070
		],
		"disallowed"
	],
	[
		[
			120071,
			120071
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120072,
			120072
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120073,
			120073
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120074,
			120074
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120075,
			120076
		],
		"disallowed"
	],
	[
		[
			120077,
			120077
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120078,
			120078
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120079,
			120079
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120080,
			120080
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120081,
			120081
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120082,
			120082
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120083,
			120083
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120084,
			120084
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120085,
			120085
		],
		"disallowed"
	],
	[
		[
			120086,
			120086
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120087,
			120087
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120088,
			120088
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120089,
			120089
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120090,
			120090
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120091,
			120091
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120092,
			120092
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120093,
			120093
		],
		"disallowed"
	],
	[
		[
			120094,
			120094
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120095,
			120095
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120096,
			120096
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120097,
			120097
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120098,
			120098
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120099,
			120099
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120100,
			120100
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120101,
			120101
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120102,
			120102
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120103,
			120103
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120104,
			120104
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120105,
			120105
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120106,
			120106
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120107,
			120107
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120108,
			120108
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120109,
			120109
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120110,
			120110
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120111,
			120111
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120112,
			120112
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120113,
			120113
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120114,
			120114
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120115,
			120115
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120116,
			120116
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120117,
			120117
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120118,
			120118
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120119,
			120119
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120120,
			120120
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120121,
			120121
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120122,
			120122
		],
		"disallowed"
	],
	[
		[
			120123,
			120123
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120124,
			120124
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120125,
			120125
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120126,
			120126
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120127,
			120127
		],
		"disallowed"
	],
	[
		[
			120128,
			120128
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120129,
			120129
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120130,
			120130
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120131,
			120131
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120132,
			120132
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120133,
			120133
		],
		"disallowed"
	],
	[
		[
			120134,
			120134
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120135,
			120137
		],
		"disallowed"
	],
	[
		[
			120138,
			120138
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120139,
			120139
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120140,
			120140
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120141,
			120141
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120142,
			120142
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120143,
			120143
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120144,
			120144
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120145,
			120145
		],
		"disallowed"
	],
	[
		[
			120146,
			120146
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120147,
			120147
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120148,
			120148
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120149,
			120149
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120150,
			120150
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120151,
			120151
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120152,
			120152
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120153,
			120153
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120154,
			120154
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120155,
			120155
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120156,
			120156
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120157,
			120157
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120158,
			120158
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120159,
			120159
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120160,
			120160
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120161,
			120161
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120162,
			120162
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120163,
			120163
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120164,
			120164
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120165,
			120165
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120166,
			120166
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120167,
			120167
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120168,
			120168
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120169,
			120169
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120170,
			120170
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120171,
			120171
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120172,
			120172
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120173,
			120173
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120174,
			120174
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120175,
			120175
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120176,
			120176
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120177,
			120177
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120178,
			120178
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120179,
			120179
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120180,
			120180
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120181,
			120181
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120182,
			120182
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120183,
			120183
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120184,
			120184
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120185,
			120185
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120186,
			120186
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120187,
			120187
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120188,
			120188
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120189,
			120189
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120190,
			120190
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120191,
			120191
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120192,
			120192
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120193,
			120193
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120194,
			120194
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120195,
			120195
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120196,
			120196
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120197,
			120197
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120198,
			120198
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120199,
			120199
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120200,
			120200
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120201,
			120201
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120202,
			120202
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120203,
			120203
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120204,
			120204
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120205,
			120205
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120206,
			120206
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120207,
			120207
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120208,
			120208
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120209,
			120209
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120210,
			120210
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120211,
			120211
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120212,
			120212
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120213,
			120213
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120214,
			120214
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120215,
			120215
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120216,
			120216
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120217,
			120217
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120218,
			120218
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120219,
			120219
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120220,
			120220
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120221,
			120221
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120222,
			120222
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120223,
			120223
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120224,
			120224
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120225,
			120225
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120226,
			120226
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120227,
			120227
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120228,
			120228
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120229,
			120229
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120230,
			120230
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120231,
			120231
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120232,
			120232
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120233,
			120233
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120234,
			120234
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120235,
			120235
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120236,
			120236
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120237,
			120237
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120238,
			120238
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120239,
			120239
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120240,
			120240
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120241,
			120241
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120242,
			120242
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120243,
			120243
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120244,
			120244
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120245,
			120245
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120246,
			120246
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120247,
			120247
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120248,
			120248
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120249,
			120249
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120250,
			120250
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120251,
			120251
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120252,
			120252
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120253,
			120253
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120254,
			120254
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120255,
			120255
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120256,
			120256
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120257,
			120257
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120258,
			120258
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120259,
			120259
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120260,
			120260
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120261,
			120261
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120262,
			120262
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120263,
			120263
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120264,
			120264
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120265,
			120265
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120266,
			120266
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120267,
			120267
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120268,
			120268
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120269,
			120269
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120270,
			120270
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120271,
			120271
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120272,
			120272
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120273,
			120273
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120274,
			120274
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120275,
			120275
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120276,
			120276
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120277,
			120277
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120278,
			120278
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120279,
			120279
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120280,
			120280
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120281,
			120281
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120282,
			120282
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120283,
			120283
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120284,
			120284
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120285,
			120285
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120286,
			120286
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120287,
			120287
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120288,
			120288
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120289,
			120289
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120290,
			120290
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120291,
			120291
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120292,
			120292
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120293,
			120293
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120294,
			120294
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120295,
			120295
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120296,
			120296
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120297,
			120297
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120298,
			120298
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120299,
			120299
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120300,
			120300
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120301,
			120301
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120302,
			120302
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120303,
			120303
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120304,
			120304
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120305,
			120305
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120306,
			120306
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120307,
			120307
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120308,
			120308
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120309,
			120309
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120310,
			120310
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120311,
			120311
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120312,
			120312
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120313,
			120313
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120314,
			120314
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120315,
			120315
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120316,
			120316
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120317,
			120317
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120318,
			120318
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120319,
			120319
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120320,
			120320
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120321,
			120321
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120322,
			120322
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120323,
			120323
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120324,
			120324
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120325,
			120325
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120326,
			120326
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120327,
			120327
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120328,
			120328
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120329,
			120329
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120330,
			120330
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120331,
			120331
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120332,
			120332
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120333,
			120333
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120334,
			120334
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120335,
			120335
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120336,
			120336
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120337,
			120337
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120338,
			120338
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120339,
			120339
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120340,
			120340
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120341,
			120341
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120342,
			120342
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120343,
			120343
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120344,
			120344
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120345,
			120345
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120346,
			120346
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120347,
			120347
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120348,
			120348
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120349,
			120349
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120350,
			120350
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120351,
			120351
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120352,
			120352
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120353,
			120353
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120354,
			120354
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120355,
			120355
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120356,
			120356
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120357,
			120357
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120358,
			120358
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120359,
			120359
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120360,
			120360
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120361,
			120361
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120362,
			120362
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120363,
			120363
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120364,
			120364
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120365,
			120365
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120366,
			120366
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120367,
			120367
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120368,
			120368
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120369,
			120369
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120370,
			120370
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120371,
			120371
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120372,
			120372
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120373,
			120373
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120374,
			120374
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120375,
			120375
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120376,
			120376
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120377,
			120377
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120378,
			120378
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120379,
			120379
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120380,
			120380
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120381,
			120381
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120382,
			120382
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120383,
			120383
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120384,
			120384
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120385,
			120385
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120386,
			120386
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120387,
			120387
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120388,
			120388
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120389,
			120389
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120390,
			120390
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120391,
			120391
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120392,
			120392
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120393,
			120393
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120394,
			120394
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120395,
			120395
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120396,
			120396
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120397,
			120397
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120398,
			120398
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120399,
			120399
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120400,
			120400
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120401,
			120401
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120402,
			120402
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120403,
			120403
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120404,
			120404
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120405,
			120405
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120406,
			120406
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120407,
			120407
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120408,
			120408
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120409,
			120409
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120410,
			120410
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120411,
			120411
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120412,
			120412
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120413,
			120413
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120414,
			120414
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120415,
			120415
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120416,
			120416
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120417,
			120417
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120418,
			120418
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120419,
			120419
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120420,
			120420
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120421,
			120421
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120422,
			120422
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120423,
			120423
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120424,
			120424
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120425,
			120425
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120426,
			120426
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120427,
			120427
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120428,
			120428
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120429,
			120429
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120430,
			120430
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120431,
			120431
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120432,
			120432
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120433,
			120433
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120434,
			120434
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120435,
			120435
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120436,
			120436
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120437,
			120437
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120438,
			120438
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120439,
			120439
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120440,
			120440
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120441,
			120441
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120442,
			120442
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120443,
			120443
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120444,
			120444
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120445,
			120445
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120446,
			120446
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120447,
			120447
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120448,
			120448
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120449,
			120449
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120450,
			120450
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120451,
			120451
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120452,
			120452
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120453,
			120453
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120454,
			120454
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120455,
			120455
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120456,
			120456
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120457,
			120457
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120458,
			120458
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			120459,
			120459
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			120460,
			120460
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			120461,
			120461
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			120462,
			120462
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			120463,
			120463
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			120464,
			120464
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			120465,
			120465
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			120466,
			120466
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			120467,
			120467
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			120468,
			120468
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			120469,
			120469
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			120470,
			120470
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			120471,
			120471
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			120472,
			120472
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			120473,
			120473
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			120474,
			120474
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			120475,
			120475
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			120476,
			120476
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			120477,
			120477
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			120478,
			120478
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			120479,
			120479
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			120480,
			120480
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			120481,
			120481
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			120482,
			120482
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			120483,
			120483
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			120484,
			120484
		],
		"mapped",
		[
			305
		]
	],
	[
		[
			120485,
			120485
		],
		"mapped",
		[
			567
		]
	],
	[
		[
			120486,
			120487
		],
		"disallowed"
	],
	[
		[
			120488,
			120488
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			120489,
			120489
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			120490,
			120490
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			120491,
			120491
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			120492,
			120492
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120493,
			120493
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			120494,
			120494
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			120495,
			120495
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120496,
			120496
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			120497,
			120497
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120498,
			120498
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			120499,
			120499
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			120500,
			120500
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			120501,
			120501
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			120502,
			120502
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			120503,
			120503
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120504,
			120504
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120505,
			120505
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120506,
			120506
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			120507,
			120507
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			120508,
			120508
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			120509,
			120509
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120510,
			120510
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			120511,
			120511
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			120512,
			120512
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			120513,
			120513
		],
		"mapped",
		[
			8711
		]
	],
	[
		[
			120514,
			120514
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			120515,
			120515
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			120516,
			120516
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			120517,
			120517
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			120518,
			120518
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120519,
			120519
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			120520,
			120520
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			120521,
			120521
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120522,
			120522
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			120523,
			120523
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120524,
			120524
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			120525,
			120525
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			120526,
			120526
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			120527,
			120527
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			120528,
			120528
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			120529,
			120529
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120530,
			120530
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120531,
			120532
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			120533,
			120533
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			120534,
			120534
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			120535,
			120535
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120536,
			120536
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			120537,
			120537
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			120538,
			120538
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			120539,
			120539
		],
		"mapped",
		[
			8706
		]
	],
	[
		[
			120540,
			120540
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120541,
			120541
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120542,
			120542
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120543,
			120543
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120544,
			120544
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120545,
			120545
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120546,
			120546
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			120547,
			120547
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			120548,
			120548
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			120549,
			120549
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			120550,
			120550
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120551,
			120551
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			120552,
			120552
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			120553,
			120553
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120554,
			120554
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			120555,
			120555
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120556,
			120556
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			120557,
			120557
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			120558,
			120558
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			120559,
			120559
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			120560,
			120560
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			120561,
			120561
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120562,
			120562
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120563,
			120563
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120564,
			120564
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			120565,
			120565
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			120566,
			120566
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			120567,
			120567
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120568,
			120568
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			120569,
			120569
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			120570,
			120570
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			120571,
			120571
		],
		"mapped",
		[
			8711
		]
	],
	[
		[
			120572,
			120572
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			120573,
			120573
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			120574,
			120574
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			120575,
			120575
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			120576,
			120576
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120577,
			120577
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			120578,
			120578
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			120579,
			120579
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120580,
			120580
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			120581,
			120581
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120582,
			120582
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			120583,
			120583
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			120584,
			120584
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			120585,
			120585
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			120586,
			120586
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			120587,
			120587
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120588,
			120588
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120589,
			120590
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			120591,
			120591
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			120592,
			120592
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			120593,
			120593
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120594,
			120594
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			120595,
			120595
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			120596,
			120596
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			120597,
			120597
		],
		"mapped",
		[
			8706
		]
	],
	[
		[
			120598,
			120598
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120599,
			120599
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120600,
			120600
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120601,
			120601
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120602,
			120602
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120603,
			120603
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120604,
			120604
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			120605,
			120605
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			120606,
			120606
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			120607,
			120607
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			120608,
			120608
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120609,
			120609
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			120610,
			120610
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			120611,
			120611
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120612,
			120612
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			120613,
			120613
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120614,
			120614
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			120615,
			120615
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			120616,
			120616
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			120617,
			120617
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			120618,
			120618
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			120619,
			120619
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120620,
			120620
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120621,
			120621
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120622,
			120622
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			120623,
			120623
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			120624,
			120624
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			120625,
			120625
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120626,
			120626
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			120627,
			120627
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			120628,
			120628
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			120629,
			120629
		],
		"mapped",
		[
			8711
		]
	],
	[
		[
			120630,
			120630
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			120631,
			120631
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			120632,
			120632
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			120633,
			120633
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			120634,
			120634
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120635,
			120635
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			120636,
			120636
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			120637,
			120637
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120638,
			120638
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			120639,
			120639
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120640,
			120640
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			120641,
			120641
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			120642,
			120642
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			120643,
			120643
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			120644,
			120644
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			120645,
			120645
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120646,
			120646
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120647,
			120648
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			120649,
			120649
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			120650,
			120650
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			120651,
			120651
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120652,
			120652
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			120653,
			120653
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			120654,
			120654
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			120655,
			120655
		],
		"mapped",
		[
			8706
		]
	],
	[
		[
			120656,
			120656
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120657,
			120657
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120658,
			120658
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120659,
			120659
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120660,
			120660
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120661,
			120661
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120662,
			120662
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			120663,
			120663
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			120664,
			120664
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			120665,
			120665
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			120666,
			120666
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120667,
			120667
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			120668,
			120668
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			120669,
			120669
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120670,
			120670
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			120671,
			120671
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120672,
			120672
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			120673,
			120673
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			120674,
			120674
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			120675,
			120675
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			120676,
			120676
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			120677,
			120677
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120678,
			120678
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120679,
			120679
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120680,
			120680
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			120681,
			120681
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			120682,
			120682
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			120683,
			120683
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120684,
			120684
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			120685,
			120685
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			120686,
			120686
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			120687,
			120687
		],
		"mapped",
		[
			8711
		]
	],
	[
		[
			120688,
			120688
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			120689,
			120689
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			120690,
			120690
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			120691,
			120691
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			120692,
			120692
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120693,
			120693
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			120694,
			120694
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			120695,
			120695
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120696,
			120696
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			120697,
			120697
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120698,
			120698
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			120699,
			120699
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			120700,
			120700
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			120701,
			120701
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			120702,
			120702
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			120703,
			120703
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120704,
			120704
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120705,
			120706
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			120707,
			120707
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			120708,
			120708
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			120709,
			120709
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120710,
			120710
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			120711,
			120711
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			120712,
			120712
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			120713,
			120713
		],
		"mapped",
		[
			8706
		]
	],
	[
		[
			120714,
			120714
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120715,
			120715
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120716,
			120716
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120717,
			120717
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120718,
			120718
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120719,
			120719
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120720,
			120720
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			120721,
			120721
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			120722,
			120722
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			120723,
			120723
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			120724,
			120724
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120725,
			120725
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			120726,
			120726
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			120727,
			120727
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120728,
			120728
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			120729,
			120729
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120730,
			120730
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			120731,
			120731
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			120732,
			120732
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			120733,
			120733
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			120734,
			120734
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			120735,
			120735
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120736,
			120736
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120737,
			120737
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120738,
			120738
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			120739,
			120739
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			120740,
			120740
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			120741,
			120741
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120742,
			120742
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			120743,
			120743
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			120744,
			120744
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			120745,
			120745
		],
		"mapped",
		[
			8711
		]
	],
	[
		[
			120746,
			120746
		],
		"mapped",
		[
			945
		]
	],
	[
		[
			120747,
			120747
		],
		"mapped",
		[
			946
		]
	],
	[
		[
			120748,
			120748
		],
		"mapped",
		[
			947
		]
	],
	[
		[
			120749,
			120749
		],
		"mapped",
		[
			948
		]
	],
	[
		[
			120750,
			120750
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120751,
			120751
		],
		"mapped",
		[
			950
		]
	],
	[
		[
			120752,
			120752
		],
		"mapped",
		[
			951
		]
	],
	[
		[
			120753,
			120753
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120754,
			120754
		],
		"mapped",
		[
			953
		]
	],
	[
		[
			120755,
			120755
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120756,
			120756
		],
		"mapped",
		[
			955
		]
	],
	[
		[
			120757,
			120757
		],
		"mapped",
		[
			956
		]
	],
	[
		[
			120758,
			120758
		],
		"mapped",
		[
			957
		]
	],
	[
		[
			120759,
			120759
		],
		"mapped",
		[
			958
		]
	],
	[
		[
			120760,
			120760
		],
		"mapped",
		[
			959
		]
	],
	[
		[
			120761,
			120761
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120762,
			120762
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120763,
			120764
		],
		"mapped",
		[
			963
		]
	],
	[
		[
			120765,
			120765
		],
		"mapped",
		[
			964
		]
	],
	[
		[
			120766,
			120766
		],
		"mapped",
		[
			965
		]
	],
	[
		[
			120767,
			120767
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120768,
			120768
		],
		"mapped",
		[
			967
		]
	],
	[
		[
			120769,
			120769
		],
		"mapped",
		[
			968
		]
	],
	[
		[
			120770,
			120770
		],
		"mapped",
		[
			969
		]
	],
	[
		[
			120771,
			120771
		],
		"mapped",
		[
			8706
		]
	],
	[
		[
			120772,
			120772
		],
		"mapped",
		[
			949
		]
	],
	[
		[
			120773,
			120773
		],
		"mapped",
		[
			952
		]
	],
	[
		[
			120774,
			120774
		],
		"mapped",
		[
			954
		]
	],
	[
		[
			120775,
			120775
		],
		"mapped",
		[
			966
		]
	],
	[
		[
			120776,
			120776
		],
		"mapped",
		[
			961
		]
	],
	[
		[
			120777,
			120777
		],
		"mapped",
		[
			960
		]
	],
	[
		[
			120778,
			120779
		],
		"mapped",
		[
			989
		]
	],
	[
		[
			120780,
			120781
		],
		"disallowed"
	],
	[
		[
			120782,
			120782
		],
		"mapped",
		[
			48
		]
	],
	[
		[
			120783,
			120783
		],
		"mapped",
		[
			49
		]
	],
	[
		[
			120784,
			120784
		],
		"mapped",
		[
			50
		]
	],
	[
		[
			120785,
			120785
		],
		"mapped",
		[
			51
		]
	],
	[
		[
			120786,
			120786
		],
		"mapped",
		[
			52
		]
	],
	[
		[
			120787,
			120787
		],
		"mapped",
		[
			53
		]
	],
	[
		[
			120788,
			120788
		],
		"mapped",
		[
			54
		]
	],
	[
		[
			120789,
			120789
		],
		"mapped",
		[
			55
		]
	],
	[
		[
			120790,
			120790
		],
		"mapped",
		[
			56
		]
	],
	[
		[
			120791,
			120791
		],
		"mapped",
		[
			57
		]
	],
	[
		[
			120792,
			120792
		],
		"mapped",
		[
			48
		]
	],
	[
		[
			120793,
			120793
		],
		"mapped",
		[
			49
		]
	],
	[
		[
			120794,
			120794
		],
		"mapped",
		[
			50
		]
	],
	[
		[
			120795,
			120795
		],
		"mapped",
		[
			51
		]
	],
	[
		[
			120796,
			120796
		],
		"mapped",
		[
			52
		]
	],
	[
		[
			120797,
			120797
		],
		"mapped",
		[
			53
		]
	],
	[
		[
			120798,
			120798
		],
		"mapped",
		[
			54
		]
	],
	[
		[
			120799,
			120799
		],
		"mapped",
		[
			55
		]
	],
	[
		[
			120800,
			120800
		],
		"mapped",
		[
			56
		]
	],
	[
		[
			120801,
			120801
		],
		"mapped",
		[
			57
		]
	],
	[
		[
			120802,
			120802
		],
		"mapped",
		[
			48
		]
	],
	[
		[
			120803,
			120803
		],
		"mapped",
		[
			49
		]
	],
	[
		[
			120804,
			120804
		],
		"mapped",
		[
			50
		]
	],
	[
		[
			120805,
			120805
		],
		"mapped",
		[
			51
		]
	],
	[
		[
			120806,
			120806
		],
		"mapped",
		[
			52
		]
	],
	[
		[
			120807,
			120807
		],
		"mapped",
		[
			53
		]
	],
	[
		[
			120808,
			120808
		],
		"mapped",
		[
			54
		]
	],
	[
		[
			120809,
			120809
		],
		"mapped",
		[
			55
		]
	],
	[
		[
			120810,
			120810
		],
		"mapped",
		[
			56
		]
	],
	[
		[
			120811,
			120811
		],
		"mapped",
		[
			57
		]
	],
	[
		[
			120812,
			120812
		],
		"mapped",
		[
			48
		]
	],
	[
		[
			120813,
			120813
		],
		"mapped",
		[
			49
		]
	],
	[
		[
			120814,
			120814
		],
		"mapped",
		[
			50
		]
	],
	[
		[
			120815,
			120815
		],
		"mapped",
		[
			51
		]
	],
	[
		[
			120816,
			120816
		],
		"mapped",
		[
			52
		]
	],
	[
		[
			120817,
			120817
		],
		"mapped",
		[
			53
		]
	],
	[
		[
			120818,
			120818
		],
		"mapped",
		[
			54
		]
	],
	[
		[
			120819,
			120819
		],
		"mapped",
		[
			55
		]
	],
	[
		[
			120820,
			120820
		],
		"mapped",
		[
			56
		]
	],
	[
		[
			120821,
			120821
		],
		"mapped",
		[
			57
		]
	],
	[
		[
			120822,
			120822
		],
		"mapped",
		[
			48
		]
	],
	[
		[
			120823,
			120823
		],
		"mapped",
		[
			49
		]
	],
	[
		[
			120824,
			120824
		],
		"mapped",
		[
			50
		]
	],
	[
		[
			120825,
			120825
		],
		"mapped",
		[
			51
		]
	],
	[
		[
			120826,
			120826
		],
		"mapped",
		[
			52
		]
	],
	[
		[
			120827,
			120827
		],
		"mapped",
		[
			53
		]
	],
	[
		[
			120828,
			120828
		],
		"mapped",
		[
			54
		]
	],
	[
		[
			120829,
			120829
		],
		"mapped",
		[
			55
		]
	],
	[
		[
			120830,
			120830
		],
		"mapped",
		[
			56
		]
	],
	[
		[
			120831,
			120831
		],
		"mapped",
		[
			57
		]
	],
	[
		[
			120832,
			121343
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			121344,
			121398
		],
		"valid"
	],
	[
		[
			121399,
			121402
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			121403,
			121452
		],
		"valid"
	],
	[
		[
			121453,
			121460
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			121461,
			121461
		],
		"valid"
	],
	[
		[
			121462,
			121475
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			121476,
			121476
		],
		"valid"
	],
	[
		[
			121477,
			121483
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			121484,
			121498
		],
		"disallowed"
	],
	[
		[
			121499,
			121503
		],
		"valid"
	],
	[
		[
			121504,
			121504
		],
		"disallowed"
	],
	[
		[
			121505,
			121519
		],
		"valid"
	],
	[
		[
			121520,
			124927
		],
		"disallowed"
	],
	[
		[
			124928,
			125124
		],
		"valid"
	],
	[
		[
			125125,
			125126
		],
		"disallowed"
	],
	[
		[
			125127,
			125135
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			125136,
			125142
		],
		"valid"
	],
	[
		[
			125143,
			126463
		],
		"disallowed"
	],
	[
		[
			126464,
			126464
		],
		"mapped",
		[
			1575
		]
	],
	[
		[
			126465,
			126465
		],
		"mapped",
		[
			1576
		]
	],
	[
		[
			126466,
			126466
		],
		"mapped",
		[
			1580
		]
	],
	[
		[
			126467,
			126467
		],
		"mapped",
		[
			1583
		]
	],
	[
		[
			126468,
			126468
		],
		"disallowed"
	],
	[
		[
			126469,
			126469
		],
		"mapped",
		[
			1608
		]
	],
	[
		[
			126470,
			126470
		],
		"mapped",
		[
			1586
		]
	],
	[
		[
			126471,
			126471
		],
		"mapped",
		[
			1581
		]
	],
	[
		[
			126472,
			126472
		],
		"mapped",
		[
			1591
		]
	],
	[
		[
			126473,
			126473
		],
		"mapped",
		[
			1610
		]
	],
	[
		[
			126474,
			126474
		],
		"mapped",
		[
			1603
		]
	],
	[
		[
			126475,
			126475
		],
		"mapped",
		[
			1604
		]
	],
	[
		[
			126476,
			126476
		],
		"mapped",
		[
			1605
		]
	],
	[
		[
			126477,
			126477
		],
		"mapped",
		[
			1606
		]
	],
	[
		[
			126478,
			126478
		],
		"mapped",
		[
			1587
		]
	],
	[
		[
			126479,
			126479
		],
		"mapped",
		[
			1593
		]
	],
	[
		[
			126480,
			126480
		],
		"mapped",
		[
			1601
		]
	],
	[
		[
			126481,
			126481
		],
		"mapped",
		[
			1589
		]
	],
	[
		[
			126482,
			126482
		],
		"mapped",
		[
			1602
		]
	],
	[
		[
			126483,
			126483
		],
		"mapped",
		[
			1585
		]
	],
	[
		[
			126484,
			126484
		],
		"mapped",
		[
			1588
		]
	],
	[
		[
			126485,
			126485
		],
		"mapped",
		[
			1578
		]
	],
	[
		[
			126486,
			126486
		],
		"mapped",
		[
			1579
		]
	],
	[
		[
			126487,
			126487
		],
		"mapped",
		[
			1582
		]
	],
	[
		[
			126488,
			126488
		],
		"mapped",
		[
			1584
		]
	],
	[
		[
			126489,
			126489
		],
		"mapped",
		[
			1590
		]
	],
	[
		[
			126490,
			126490
		],
		"mapped",
		[
			1592
		]
	],
	[
		[
			126491,
			126491
		],
		"mapped",
		[
			1594
		]
	],
	[
		[
			126492,
			126492
		],
		"mapped",
		[
			1646
		]
	],
	[
		[
			126493,
			126493
		],
		"mapped",
		[
			1722
		]
	],
	[
		[
			126494,
			126494
		],
		"mapped",
		[
			1697
		]
	],
	[
		[
			126495,
			126495
		],
		"mapped",
		[
			1647
		]
	],
	[
		[
			126496,
			126496
		],
		"disallowed"
	],
	[
		[
			126497,
			126497
		],
		"mapped",
		[
			1576
		]
	],
	[
		[
			126498,
			126498
		],
		"mapped",
		[
			1580
		]
	],
	[
		[
			126499,
			126499
		],
		"disallowed"
	],
	[
		[
			126500,
			126500
		],
		"mapped",
		[
			1607
		]
	],
	[
		[
			126501,
			126502
		],
		"disallowed"
	],
	[
		[
			126503,
			126503
		],
		"mapped",
		[
			1581
		]
	],
	[
		[
			126504,
			126504
		],
		"disallowed"
	],
	[
		[
			126505,
			126505
		],
		"mapped",
		[
			1610
		]
	],
	[
		[
			126506,
			126506
		],
		"mapped",
		[
			1603
		]
	],
	[
		[
			126507,
			126507
		],
		"mapped",
		[
			1604
		]
	],
	[
		[
			126508,
			126508
		],
		"mapped",
		[
			1605
		]
	],
	[
		[
			126509,
			126509
		],
		"mapped",
		[
			1606
		]
	],
	[
		[
			126510,
			126510
		],
		"mapped",
		[
			1587
		]
	],
	[
		[
			126511,
			126511
		],
		"mapped",
		[
			1593
		]
	],
	[
		[
			126512,
			126512
		],
		"mapped",
		[
			1601
		]
	],
	[
		[
			126513,
			126513
		],
		"mapped",
		[
			1589
		]
	],
	[
		[
			126514,
			126514
		],
		"mapped",
		[
			1602
		]
	],
	[
		[
			126515,
			126515
		],
		"disallowed"
	],
	[
		[
			126516,
			126516
		],
		"mapped",
		[
			1588
		]
	],
	[
		[
			126517,
			126517
		],
		"mapped",
		[
			1578
		]
	],
	[
		[
			126518,
			126518
		],
		"mapped",
		[
			1579
		]
	],
	[
		[
			126519,
			126519
		],
		"mapped",
		[
			1582
		]
	],
	[
		[
			126520,
			126520
		],
		"disallowed"
	],
	[
		[
			126521,
			126521
		],
		"mapped",
		[
			1590
		]
	],
	[
		[
			126522,
			126522
		],
		"disallowed"
	],
	[
		[
			126523,
			126523
		],
		"mapped",
		[
			1594
		]
	],
	[
		[
			126524,
			126529
		],
		"disallowed"
	],
	[
		[
			126530,
			126530
		],
		"mapped",
		[
			1580
		]
	],
	[
		[
			126531,
			126534
		],
		"disallowed"
	],
	[
		[
			126535,
			126535
		],
		"mapped",
		[
			1581
		]
	],
	[
		[
			126536,
			126536
		],
		"disallowed"
	],
	[
		[
			126537,
			126537
		],
		"mapped",
		[
			1610
		]
	],
	[
		[
			126538,
			126538
		],
		"disallowed"
	],
	[
		[
			126539,
			126539
		],
		"mapped",
		[
			1604
		]
	],
	[
		[
			126540,
			126540
		],
		"disallowed"
	],
	[
		[
			126541,
			126541
		],
		"mapped",
		[
			1606
		]
	],
	[
		[
			126542,
			126542
		],
		"mapped",
		[
			1587
		]
	],
	[
		[
			126543,
			126543
		],
		"mapped",
		[
			1593
		]
	],
	[
		[
			126544,
			126544
		],
		"disallowed"
	],
	[
		[
			126545,
			126545
		],
		"mapped",
		[
			1589
		]
	],
	[
		[
			126546,
			126546
		],
		"mapped",
		[
			1602
		]
	],
	[
		[
			126547,
			126547
		],
		"disallowed"
	],
	[
		[
			126548,
			126548
		],
		"mapped",
		[
			1588
		]
	],
	[
		[
			126549,
			126550
		],
		"disallowed"
	],
	[
		[
			126551,
			126551
		],
		"mapped",
		[
			1582
		]
	],
	[
		[
			126552,
			126552
		],
		"disallowed"
	],
	[
		[
			126553,
			126553
		],
		"mapped",
		[
			1590
		]
	],
	[
		[
			126554,
			126554
		],
		"disallowed"
	],
	[
		[
			126555,
			126555
		],
		"mapped",
		[
			1594
		]
	],
	[
		[
			126556,
			126556
		],
		"disallowed"
	],
	[
		[
			126557,
			126557
		],
		"mapped",
		[
			1722
		]
	],
	[
		[
			126558,
			126558
		],
		"disallowed"
	],
	[
		[
			126559,
			126559
		],
		"mapped",
		[
			1647
		]
	],
	[
		[
			126560,
			126560
		],
		"disallowed"
	],
	[
		[
			126561,
			126561
		],
		"mapped",
		[
			1576
		]
	],
	[
		[
			126562,
			126562
		],
		"mapped",
		[
			1580
		]
	],
	[
		[
			126563,
			126563
		],
		"disallowed"
	],
	[
		[
			126564,
			126564
		],
		"mapped",
		[
			1607
		]
	],
	[
		[
			126565,
			126566
		],
		"disallowed"
	],
	[
		[
			126567,
			126567
		],
		"mapped",
		[
			1581
		]
	],
	[
		[
			126568,
			126568
		],
		"mapped",
		[
			1591
		]
	],
	[
		[
			126569,
			126569
		],
		"mapped",
		[
			1610
		]
	],
	[
		[
			126570,
			126570
		],
		"mapped",
		[
			1603
		]
	],
	[
		[
			126571,
			126571
		],
		"disallowed"
	],
	[
		[
			126572,
			126572
		],
		"mapped",
		[
			1605
		]
	],
	[
		[
			126573,
			126573
		],
		"mapped",
		[
			1606
		]
	],
	[
		[
			126574,
			126574
		],
		"mapped",
		[
			1587
		]
	],
	[
		[
			126575,
			126575
		],
		"mapped",
		[
			1593
		]
	],
	[
		[
			126576,
			126576
		],
		"mapped",
		[
			1601
		]
	],
	[
		[
			126577,
			126577
		],
		"mapped",
		[
			1589
		]
	],
	[
		[
			126578,
			126578
		],
		"mapped",
		[
			1602
		]
	],
	[
		[
			126579,
			126579
		],
		"disallowed"
	],
	[
		[
			126580,
			126580
		],
		"mapped",
		[
			1588
		]
	],
	[
		[
			126581,
			126581
		],
		"mapped",
		[
			1578
		]
	],
	[
		[
			126582,
			126582
		],
		"mapped",
		[
			1579
		]
	],
	[
		[
			126583,
			126583
		],
		"mapped",
		[
			1582
		]
	],
	[
		[
			126584,
			126584
		],
		"disallowed"
	],
	[
		[
			126585,
			126585
		],
		"mapped",
		[
			1590
		]
	],
	[
		[
			126586,
			126586
		],
		"mapped",
		[
			1592
		]
	],
	[
		[
			126587,
			126587
		],
		"mapped",
		[
			1594
		]
	],
	[
		[
			126588,
			126588
		],
		"mapped",
		[
			1646
		]
	],
	[
		[
			126589,
			126589
		],
		"disallowed"
	],
	[
		[
			126590,
			126590
		],
		"mapped",
		[
			1697
		]
	],
	[
		[
			126591,
			126591
		],
		"disallowed"
	],
	[
		[
			126592,
			126592
		],
		"mapped",
		[
			1575
		]
	],
	[
		[
			126593,
			126593
		],
		"mapped",
		[
			1576
		]
	],
	[
		[
			126594,
			126594
		],
		"mapped",
		[
			1580
		]
	],
	[
		[
			126595,
			126595
		],
		"mapped",
		[
			1583
		]
	],
	[
		[
			126596,
			126596
		],
		"mapped",
		[
			1607
		]
	],
	[
		[
			126597,
			126597
		],
		"mapped",
		[
			1608
		]
	],
	[
		[
			126598,
			126598
		],
		"mapped",
		[
			1586
		]
	],
	[
		[
			126599,
			126599
		],
		"mapped",
		[
			1581
		]
	],
	[
		[
			126600,
			126600
		],
		"mapped",
		[
			1591
		]
	],
	[
		[
			126601,
			126601
		],
		"mapped",
		[
			1610
		]
	],
	[
		[
			126602,
			126602
		],
		"disallowed"
	],
	[
		[
			126603,
			126603
		],
		"mapped",
		[
			1604
		]
	],
	[
		[
			126604,
			126604
		],
		"mapped",
		[
			1605
		]
	],
	[
		[
			126605,
			126605
		],
		"mapped",
		[
			1606
		]
	],
	[
		[
			126606,
			126606
		],
		"mapped",
		[
			1587
		]
	],
	[
		[
			126607,
			126607
		],
		"mapped",
		[
			1593
		]
	],
	[
		[
			126608,
			126608
		],
		"mapped",
		[
			1601
		]
	],
	[
		[
			126609,
			126609
		],
		"mapped",
		[
			1589
		]
	],
	[
		[
			126610,
			126610
		],
		"mapped",
		[
			1602
		]
	],
	[
		[
			126611,
			126611
		],
		"mapped",
		[
			1585
		]
	],
	[
		[
			126612,
			126612
		],
		"mapped",
		[
			1588
		]
	],
	[
		[
			126613,
			126613
		],
		"mapped",
		[
			1578
		]
	],
	[
		[
			126614,
			126614
		],
		"mapped",
		[
			1579
		]
	],
	[
		[
			126615,
			126615
		],
		"mapped",
		[
			1582
		]
	],
	[
		[
			126616,
			126616
		],
		"mapped",
		[
			1584
		]
	],
	[
		[
			126617,
			126617
		],
		"mapped",
		[
			1590
		]
	],
	[
		[
			126618,
			126618
		],
		"mapped",
		[
			1592
		]
	],
	[
		[
			126619,
			126619
		],
		"mapped",
		[
			1594
		]
	],
	[
		[
			126620,
			126624
		],
		"disallowed"
	],
	[
		[
			126625,
			126625
		],
		"mapped",
		[
			1576
		]
	],
	[
		[
			126626,
			126626
		],
		"mapped",
		[
			1580
		]
	],
	[
		[
			126627,
			126627
		],
		"mapped",
		[
			1583
		]
	],
	[
		[
			126628,
			126628
		],
		"disallowed"
	],
	[
		[
			126629,
			126629
		],
		"mapped",
		[
			1608
		]
	],
	[
		[
			126630,
			126630
		],
		"mapped",
		[
			1586
		]
	],
	[
		[
			126631,
			126631
		],
		"mapped",
		[
			1581
		]
	],
	[
		[
			126632,
			126632
		],
		"mapped",
		[
			1591
		]
	],
	[
		[
			126633,
			126633
		],
		"mapped",
		[
			1610
		]
	],
	[
		[
			126634,
			126634
		],
		"disallowed"
	],
	[
		[
			126635,
			126635
		],
		"mapped",
		[
			1604
		]
	],
	[
		[
			126636,
			126636
		],
		"mapped",
		[
			1605
		]
	],
	[
		[
			126637,
			126637
		],
		"mapped",
		[
			1606
		]
	],
	[
		[
			126638,
			126638
		],
		"mapped",
		[
			1587
		]
	],
	[
		[
			126639,
			126639
		],
		"mapped",
		[
			1593
		]
	],
	[
		[
			126640,
			126640
		],
		"mapped",
		[
			1601
		]
	],
	[
		[
			126641,
			126641
		],
		"mapped",
		[
			1589
		]
	],
	[
		[
			126642,
			126642
		],
		"mapped",
		[
			1602
		]
	],
	[
		[
			126643,
			126643
		],
		"mapped",
		[
			1585
		]
	],
	[
		[
			126644,
			126644
		],
		"mapped",
		[
			1588
		]
	],
	[
		[
			126645,
			126645
		],
		"mapped",
		[
			1578
		]
	],
	[
		[
			126646,
			126646
		],
		"mapped",
		[
			1579
		]
	],
	[
		[
			126647,
			126647
		],
		"mapped",
		[
			1582
		]
	],
	[
		[
			126648,
			126648
		],
		"mapped",
		[
			1584
		]
	],
	[
		[
			126649,
			126649
		],
		"mapped",
		[
			1590
		]
	],
	[
		[
			126650,
			126650
		],
		"mapped",
		[
			1592
		]
	],
	[
		[
			126651,
			126651
		],
		"mapped",
		[
			1594
		]
	],
	[
		[
			126652,
			126703
		],
		"disallowed"
	],
	[
		[
			126704,
			126705
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			126706,
			126975
		],
		"disallowed"
	],
	[
		[
			126976,
			127019
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127020,
			127023
		],
		"disallowed"
	],
	[
		[
			127024,
			127123
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127124,
			127135
		],
		"disallowed"
	],
	[
		[
			127136,
			127150
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127151,
			127152
		],
		"disallowed"
	],
	[
		[
			127153,
			127166
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127167,
			127167
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127168,
			127168
		],
		"disallowed"
	],
	[
		[
			127169,
			127183
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127184,
			127184
		],
		"disallowed"
	],
	[
		[
			127185,
			127199
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127200,
			127221
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127222,
			127231
		],
		"disallowed"
	],
	[
		[
			127232,
			127232
		],
		"disallowed"
	],
	[
		[
			127233,
			127233
		],
		"disallowed_STD3_mapped",
		[
			48,
			44
		]
	],
	[
		[
			127234,
			127234
		],
		"disallowed_STD3_mapped",
		[
			49,
			44
		]
	],
	[
		[
			127235,
			127235
		],
		"disallowed_STD3_mapped",
		[
			50,
			44
		]
	],
	[
		[
			127236,
			127236
		],
		"disallowed_STD3_mapped",
		[
			51,
			44
		]
	],
	[
		[
			127237,
			127237
		],
		"disallowed_STD3_mapped",
		[
			52,
			44
		]
	],
	[
		[
			127238,
			127238
		],
		"disallowed_STD3_mapped",
		[
			53,
			44
		]
	],
	[
		[
			127239,
			127239
		],
		"disallowed_STD3_mapped",
		[
			54,
			44
		]
	],
	[
		[
			127240,
			127240
		],
		"disallowed_STD3_mapped",
		[
			55,
			44
		]
	],
	[
		[
			127241,
			127241
		],
		"disallowed_STD3_mapped",
		[
			56,
			44
		]
	],
	[
		[
			127242,
			127242
		],
		"disallowed_STD3_mapped",
		[
			57,
			44
		]
	],
	[
		[
			127243,
			127244
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127245,
			127247
		],
		"disallowed"
	],
	[
		[
			127248,
			127248
		],
		"disallowed_STD3_mapped",
		[
			40,
			97,
			41
		]
	],
	[
		[
			127249,
			127249
		],
		"disallowed_STD3_mapped",
		[
			40,
			98,
			41
		]
	],
	[
		[
			127250,
			127250
		],
		"disallowed_STD3_mapped",
		[
			40,
			99,
			41
		]
	],
	[
		[
			127251,
			127251
		],
		"disallowed_STD3_mapped",
		[
			40,
			100,
			41
		]
	],
	[
		[
			127252,
			127252
		],
		"disallowed_STD3_mapped",
		[
			40,
			101,
			41
		]
	],
	[
		[
			127253,
			127253
		],
		"disallowed_STD3_mapped",
		[
			40,
			102,
			41
		]
	],
	[
		[
			127254,
			127254
		],
		"disallowed_STD3_mapped",
		[
			40,
			103,
			41
		]
	],
	[
		[
			127255,
			127255
		],
		"disallowed_STD3_mapped",
		[
			40,
			104,
			41
		]
	],
	[
		[
			127256,
			127256
		],
		"disallowed_STD3_mapped",
		[
			40,
			105,
			41
		]
	],
	[
		[
			127257,
			127257
		],
		"disallowed_STD3_mapped",
		[
			40,
			106,
			41
		]
	],
	[
		[
			127258,
			127258
		],
		"disallowed_STD3_mapped",
		[
			40,
			107,
			41
		]
	],
	[
		[
			127259,
			127259
		],
		"disallowed_STD3_mapped",
		[
			40,
			108,
			41
		]
	],
	[
		[
			127260,
			127260
		],
		"disallowed_STD3_mapped",
		[
			40,
			109,
			41
		]
	],
	[
		[
			127261,
			127261
		],
		"disallowed_STD3_mapped",
		[
			40,
			110,
			41
		]
	],
	[
		[
			127262,
			127262
		],
		"disallowed_STD3_mapped",
		[
			40,
			111,
			41
		]
	],
	[
		[
			127263,
			127263
		],
		"disallowed_STD3_mapped",
		[
			40,
			112,
			41
		]
	],
	[
		[
			127264,
			127264
		],
		"disallowed_STD3_mapped",
		[
			40,
			113,
			41
		]
	],
	[
		[
			127265,
			127265
		],
		"disallowed_STD3_mapped",
		[
			40,
			114,
			41
		]
	],
	[
		[
			127266,
			127266
		],
		"disallowed_STD3_mapped",
		[
			40,
			115,
			41
		]
	],
	[
		[
			127267,
			127267
		],
		"disallowed_STD3_mapped",
		[
			40,
			116,
			41
		]
	],
	[
		[
			127268,
			127268
		],
		"disallowed_STD3_mapped",
		[
			40,
			117,
			41
		]
	],
	[
		[
			127269,
			127269
		],
		"disallowed_STD3_mapped",
		[
			40,
			118,
			41
		]
	],
	[
		[
			127270,
			127270
		],
		"disallowed_STD3_mapped",
		[
			40,
			119,
			41
		]
	],
	[
		[
			127271,
			127271
		],
		"disallowed_STD3_mapped",
		[
			40,
			120,
			41
		]
	],
	[
		[
			127272,
			127272
		],
		"disallowed_STD3_mapped",
		[
			40,
			121,
			41
		]
	],
	[
		[
			127273,
			127273
		],
		"disallowed_STD3_mapped",
		[
			40,
			122,
			41
		]
	],
	[
		[
			127274,
			127274
		],
		"mapped",
		[
			12308,
			115,
			12309
		]
	],
	[
		[
			127275,
			127275
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			127276,
			127276
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			127277,
			127277
		],
		"mapped",
		[
			99,
			100
		]
	],
	[
		[
			127278,
			127278
		],
		"mapped",
		[
			119,
			122
		]
	],
	[
		[
			127279,
			127279
		],
		"disallowed"
	],
	[
		[
			127280,
			127280
		],
		"mapped",
		[
			97
		]
	],
	[
		[
			127281,
			127281
		],
		"mapped",
		[
			98
		]
	],
	[
		[
			127282,
			127282
		],
		"mapped",
		[
			99
		]
	],
	[
		[
			127283,
			127283
		],
		"mapped",
		[
			100
		]
	],
	[
		[
			127284,
			127284
		],
		"mapped",
		[
			101
		]
	],
	[
		[
			127285,
			127285
		],
		"mapped",
		[
			102
		]
	],
	[
		[
			127286,
			127286
		],
		"mapped",
		[
			103
		]
	],
	[
		[
			127287,
			127287
		],
		"mapped",
		[
			104
		]
	],
	[
		[
			127288,
			127288
		],
		"mapped",
		[
			105
		]
	],
	[
		[
			127289,
			127289
		],
		"mapped",
		[
			106
		]
	],
	[
		[
			127290,
			127290
		],
		"mapped",
		[
			107
		]
	],
	[
		[
			127291,
			127291
		],
		"mapped",
		[
			108
		]
	],
	[
		[
			127292,
			127292
		],
		"mapped",
		[
			109
		]
	],
	[
		[
			127293,
			127293
		],
		"mapped",
		[
			110
		]
	],
	[
		[
			127294,
			127294
		],
		"mapped",
		[
			111
		]
	],
	[
		[
			127295,
			127295
		],
		"mapped",
		[
			112
		]
	],
	[
		[
			127296,
			127296
		],
		"mapped",
		[
			113
		]
	],
	[
		[
			127297,
			127297
		],
		"mapped",
		[
			114
		]
	],
	[
		[
			127298,
			127298
		],
		"mapped",
		[
			115
		]
	],
	[
		[
			127299,
			127299
		],
		"mapped",
		[
			116
		]
	],
	[
		[
			127300,
			127300
		],
		"mapped",
		[
			117
		]
	],
	[
		[
			127301,
			127301
		],
		"mapped",
		[
			118
		]
	],
	[
		[
			127302,
			127302
		],
		"mapped",
		[
			119
		]
	],
	[
		[
			127303,
			127303
		],
		"mapped",
		[
			120
		]
	],
	[
		[
			127304,
			127304
		],
		"mapped",
		[
			121
		]
	],
	[
		[
			127305,
			127305
		],
		"mapped",
		[
			122
		]
	],
	[
		[
			127306,
			127306
		],
		"mapped",
		[
			104,
			118
		]
	],
	[
		[
			127307,
			127307
		],
		"mapped",
		[
			109,
			118
		]
	],
	[
		[
			127308,
			127308
		],
		"mapped",
		[
			115,
			100
		]
	],
	[
		[
			127309,
			127309
		],
		"mapped",
		[
			115,
			115
		]
	],
	[
		[
			127310,
			127310
		],
		"mapped",
		[
			112,
			112,
			118
		]
	],
	[
		[
			127311,
			127311
		],
		"mapped",
		[
			119,
			99
		]
	],
	[
		[
			127312,
			127318
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127319,
			127319
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127320,
			127326
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127327,
			127327
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127328,
			127337
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127338,
			127338
		],
		"mapped",
		[
			109,
			99
		]
	],
	[
		[
			127339,
			127339
		],
		"mapped",
		[
			109,
			100
		]
	],
	[
		[
			127340,
			127343
		],
		"disallowed"
	],
	[
		[
			127344,
			127352
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127353,
			127353
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127354,
			127354
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127355,
			127356
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127357,
			127358
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127359,
			127359
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127360,
			127369
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127370,
			127373
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127374,
			127375
		],
		"valid",
		[
		],
		"NV8"
	],
	[
		[
			127376,
			127376
		],
		"mapped",
		[
			100,
			106
		]
	],
	[
		[
			127377,
			127386
		],
		"valid",
		[
		],
		"NV8"
	],
	[