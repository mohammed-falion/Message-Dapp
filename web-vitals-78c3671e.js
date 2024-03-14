var e,
  n,
  t,
  i,
  r,
  a = -1,
  o = function (e) {
    addEventListener("pageshow", function (n) {
      n.persisted && (a = n.timeStamp, e(n));
    }, !0);
  },
  c = function () {
    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  },
  u = function () {
    var e = c();
    return e && e.activationStart || 0;
  },
  f = function (e, n) {
    var t = c(),
      i = "navigate";
    a >= 0 ? i = "back-forward-cache" : t && (document.prerendering || u() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : t.type && (i = t.type.replace(/_/g, "-")));
    return {
      name: e,
      value: void 0 === n ? -1 : n,
      rating: "good",
      delta: 0,
      entries: [],
      id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
      navigationType: i
    };
  },
  s = function (e, n, t) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        var i = new PerformanceObserver(function (e) {
          Promise.resolve().then(function () {
            n(e.getEntries());
          });
        });
        return i.observe(Object.assign({
          type: e,
          buffered: !0
        }, t || {})), i;
      }
    } catch (e) {}
  },
  d = function (e, n, t, i) {
    var r, a;
    return function (o) {
      n.value >= 0 && (o || i) && ((a = n.value - (r || 0)) || void 0 === r) && (r = n.value, n.delta = a, n.rating = function (e, n) {
        return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good";
      }(n.value, t), e(n));
    };
  },
  l = function (e) {
    requestAnimationFrame(function () {
      return requestAnimationFrame(function () {
        return e();
      });
    });
  },
  p = function (e) {
    var n = function (n) {
      "pagehide" !== n.type && "hidden" !== document.visibilityState || e(n);
    };
    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
  },
  v = function (e) {
    var n = !1;
    return function (t) {
      n || (e(t), n = !0);
    };
  },
  m = -1,
  h = function () {
    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
  },
  g = function (e) {
    "hidden" === document.visibilityState && m > -1 && (m = "visibilitychange" === e.type ? e.timeStamp : 0, T());
  },
  y = function () {
    addEventListener("visibilitychange", g, !0), addEventListener("prerenderingchange", g, !0);
  },
  T = function () {
    removeEventListener("visibilitychange", g, !0), removeEventListener("prerenderingchange", g, !0);
  },
  E = function () {
    return m < 0 && (m = h(), y(), o(function () {
      setTimeout(function () {
        m = h(), y();
      }, 0);
    })), {
      get firstHiddenTime() {
        return m;
      }
    };
  },
  C = function (e) {
    document.prerendering ? addEventListener("prerenderingchange", function () {
      return e();
    }, !0) : e();
  },
  L = [1800, 3e3],
  w = function (e, n) {
    n = n || {}, C(function () {
      var t,
        i = E(),
        r = f("FCP"),
        a = s("paint", function (e) {
          e.forEach(function (e) {
            "first-contentful-paint" === e.name && (a.disconnect(), e.startTime < i.firstHiddenTime && (r.value = Math.max(e.startTime - u(), 0), r.entries.push(e), t(!0)));
          });
        });
      a && (t = d(e, r, L, n.reportAllChanges), o(function (i) {
        r = f("FCP"), t = d(e, r, L, n.reportAllChanges), l(function () {
          r.value = performance.now() - i.timeStamp, t(!0);
        });
      }));
    });
  },
  b = [.1, .25],
  S = function (e, n) {
    n = n || {}, w(v(function () {
      var t,
        i = f("CLS", 0),
        r = 0,
        a = [],
        c = function (e) {
          e.forEach(function (e) {
            if (!e.hadRecentInput) {
              var n = a[0],
                t = a[a.length - 1];
              r && e.startTime - t.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (r += e.value, a.push(e)) : (r = e.value, a = [e]);
            }
          }), r > i.value && (i.value = r, i.entries = a, t());
        },
        u = s("layout-shift", c);
      u && (t = d(e, i, b, n.reportAllChanges), p(function () {
        c(u.takeRecords()), t(!0);
      }), o(function () {
        r = 0, i = f("CLS", 0), t = d(e, i, b, n.reportAllChanges), l(function () {
          return t();
        });
      }), setTimeout(t, 0));
    }));
  },
  A = {
    passive: !0,
    capture: !0
  },
  I = new Date(),
  P = function (i, r) {
    e || (e = r, n = i, t = new Date(), k(removeEventListener), F());
  },
  F = function () {
    if (n >= 0 && n < t - I) {
      var r = {
        entryType: "first-input",
        name: e.type,
        target: e.target,
        cancelable: e.cancelable,
        startTime: e.timeStamp,
        processingStart: e.timeStamp + n
      };
      i.forEach(function (e) {
        e(r);
      }), i = [];
    }
  },
  M = function (e) {
    if (e.cancelable) {
      var n = (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
      "pointerdown" == e.type ? function (e, n) {
        var t = function () {
            P(e, n), r();
          },
          i = function () {
            r();
          },
          r = function () {
            removeEventListener("pointerup", t, A), removeEventListener("pointercancel", i, A);
          };
        addEventListener("pointerup", t, A), addEventListener("pointercancel", i, A);
      }(n, e) : P(n, e);
    }
  },
  k = function (e) {
    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (n) {
      return e(n, M, A);
    });
  },
  D = [100, 300],
  x = function (t, r) {
    r = r || {}, C(function () {
      var a,
        c = E(),
        u = f("FID"),
        l = function (e) {
          e.startTime < c.firstHiddenTime && (u.value = e.processingStart - e.startTime, u.entries.push(e), a(!0));
        },
        m = function (e) {
          e.forEach(l);
        },
        h = s("first-input", m);
      a = d(t, u, D, r.reportAllChanges), h && p(v(function () {
        m(h.takeRecords()), h.disconnect();
      })), h && o(function () {
        var o;
        u = f("FID"), a = d(t, u, D, r.reportAllChanges), i = [], n = -1, e = null, k(addEventListener), o = l, i.push(o), F();
      });
    });
  },
  B = 0,
  R = 1 / 0,
  H = 0,
  N = function (e) {
    e.forEach(function (e) {
      e.interactionId && (R = Math.min(R, e.interactionId), H = Math.max(H, e.interactionId), B = H ? (H - R) / 7 + 1 : 0);
    });
  },
  O = function () {
    return r ? B : performance.interactionCount || 0;
  },
  q = function () {
    "interactionCount" in performance || r || (r = s("event", N, {
      type: "event",
      buffered: !0,
      durationThreshold: 0
    }));
  },
  j = [200, 500],
  _ = 0,
  z = function () {
    return O() - _;
  },
  G = [],
  J = {},
  K = function (e) {
    var n = G[G.length - 1],
      t = J[e.interactionId];
    if (t || G.length < 10 || e.duration > n.latency) {
      if (t) t.entries.push(e), t.latency = Math.max(t.latency, e.duration);else {
        var i = {
          id: e.interactionId,
          latency: e.duration,
          entries: [e]
        };
        J[i.id] = i, G.push(i);
      }
      G.sort(function (e, n) {
        return n.latency - e.latency;
      }), G.splice(10).forEach(function (e) {
        delete J[e.id];
      });
    }
  },
  Q = function (e, n) {
    n = n || {}, C(function () {
      var t;
      q();
      var i,
        r = f("INP"),
        a = function (e) {
          e.forEach(function (e) {
            (e.interactionId && K(e), "first-input" === e.entryType) && !G.some(function (n) {
              return n.entries.some(function (n) {
                return e.duration === n.duration && e.startTime === n.startTime;
              });
            }) && K(e);
          });
          var n,
            t = (n = Math.min(G.length - 1, Math.floor(z() / 50)), G[n]);
          t && t.latency !== r.value && (r.value = t.latency, r.entries = t.entries, i());
        },
        c = s("event", a, {
          durationThreshold: null !== (t = n.durationThreshold) && void 0 !== t ? t : 40
        });
      i = d(e, r, j, n.reportAllChanges), c && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && c.observe({
        type: "first-input",
        buffered: !0
      }), p(function () {
        a(c.takeRecords()), r.value < 0 && z() > 0 && (r.value = 0, r.entries = []), i(!0);
      }), o(function () {
        G = [], _ = O(), r = f("INP"), i = d(e, r, j, n.reportAllChanges);
      }));
    });
  },
  U = [2500, 4e3],
  V = {},
  W = function (e, n) {
    n = n || {}, C(function () {
      var t,
        i = E(),
        r = f("LCP"),
        a = function (e) {
          var n = e[e.length - 1];
          n && n.startTime < i.firstHiddenTime && (r.value = Math.max(n.startTime - u(), 0), r.entries = [n], t());
        },
        c = s("largest-contentful-paint", a);
      if (c) {
        t = d(e, r, U, n.reportAllChanges);
        var m = v(function () {
          V[r.id] || (a(c.takeRecords()), c.disconnect(), V[r.id] = !0, t(!0));
        });
        ["keydown", "click"].forEach(function (e) {
          addEventListener(e, function () {
            return setTimeout(m, 0);
          }, !0);
        }), p(m), o(function (i) {
          r = f("LCP"), t = d(e, r, U, n.reportAllChanges), l(function () {
            r.value = performance.now() - i.timeStamp, V[r.id] = !0, t(!0);
          });
        });
      }
    });
  },
  X = [800, 1800],
  Y = function e(n) {
    document.prerendering ? C(function () {
      return e(n);
    }) : "complete" !== document.readyState ? addEventListener("load", function () {
      return e(n);
    }, !0) : setTimeout(n, 0);
  },
  Z = function (e, n) {
    n = n || {};
    var t = f("TTFB"),
      i = d(e, t, X, n.reportAllChanges);
    Y(function () {
      var r = c();
      if (r) {
        var a = r.responseStart;
        if (a <= 0 || a > performance.now()) return;
        t.value = Math.max(a - u(), 0), t.entries = [r], i(!0), o(function () {
          t = f("TTFB", 0), (i = d(e, t, X, n.reportAllChanges))(!0);
        });
      }
    });
  };

export { b as CLSThresholds, L as FCPThresholds, D as FIDThresholds, j as INPThresholds, U as LCPThresholds, X as TTFBThresholds, S as getCLS, w as getFCP, x as getFID, Q as getINP, W as getLCP, Z as getTTFB, S as onCLS, w as onFCP, x as onFID, Q as onINP, W as onLCP, Z as onTTFB };
