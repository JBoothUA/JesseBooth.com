
  ;
  this.gbar_ = {
    CONFIG: [
      [
        [0, "", "og.qtm.en_US._9wrv7MHJqk.O", "com", "en", "316", 0, [4, 2, ".40.40.40.76.40.40.40.", "", "1300102,3700281,3700489,3700521", "211295948", "0"], null, "NkeTW6uiHcGZmQHc94rgCg", null, 0, "og.qtm.105d7drwq7jxq.L.W.O", "AA2YrTsaCnRFzHjl85UeqPVEelJqRG59Lg", "AA2YrTsb0YAbq7cAwNd5_rrpPUtgXOn17g", "", 2, 0, 200, "USA", null, null, "269", "316", 1], null, null, null, [1, 0, 0, null, "0", "", "", ""],
        [1, 1, "", 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0, 0, 1, 0, 0, 0, 0, "", "", "", "", "", "", "", 0, 0, 0, 0, 0],
        null,
        ["", "", "", "", "/u/0/widget", "sourceid=316", "pid=316", "en", 5, "", 1, 30000, null, "", "103014054308445924614", ""],
        ["1", "gci_91f30755d6a6b787dcc2a4062e6e9824.js", "", "0", "en"], null, null,
        [0, "", null, "", 0, "", "", 1, null, null, null, null, 0, [
          [1, "%1$s of %2$s", "%1$s of %2$s in the more section"]
        ], null, 0],
        [1, null, null, "[[]]", ["", "", 0, "/u/0", "rt=j\u0026sourceid=316", ["/u/0/_/og/customization/get", ""],
          ["/u/0/_/og/customization/set", ""],
          ["/u/0/_/og/customization/remove", ""]
        ], "AGRuxZbpI_Ek5lb1dUrp2MR_HNW1oxO-5Latfg4Vw8drS58nOkb_QEK7SVX4AZhVZaEs91pLjXtquNBcO3hFRWS7Y8NA9E4U_w"],
        ["m;/_/scs/abc-static/_/js/k=gapi.gapi.en.7_zYrcOKhe0.O/rt=j/d=1/rs=AHpOoo_tirFeAub0r3Y1DFynYgUbfJZWLA/m=__features__", "", "", "", "1", "", null, 1, "es_plusone_gc_20180826.0_p0", "en"],
        [0.009999999776482582, "com", "316", [null, "", "w", null, 1, 5184000, 1, 0, "", 0, 1, "", 0, 0, null, 0, 1], null, [
          ["", "", "0", 0, 0, -1]
        ], null, 0, null, null, ["5061451", "", 1]],
        [1, 1, 0, 40400, 316, "USA", "en", "211295948.0", 7, 0.001000000047497451, 1, 0, 0, 0, 0, 0],
        [
          [null, null, null, "https://www.gstatic.com/og/_/js/k=og.qtm.en_US._9wrv7MHJqk.O/rt=j/m=qgl,q_d,qawd,qnd,qdid,qmd,qsd,qmutsd,qbg/exm=qaaw,qabr,qadd,qaid,qalo,qano,qebr,qein,qhaw,qhbr,qhch,qhga,qhid,qhin,qhlo,qhmn,qhno,qhpc,qhpr,qhsf,qhtb,qhtt/d=1/ed=1/rs=AA2YrTsaCnRFzHjl85UeqPVEelJqRG59Lg"],
          [null, null, null, "https://www.gstatic.com/og/_/ss/k=og.qtm.105d7drwq7jxq.L.W.O/m=q_d,qawd,qnd,qdid,qmd/excm=qaaw,qabr,qadd,qaid,qalo,qano,qebr,qein,qhaw,qhbr,qhch,qhga,qhid,qhin,qhlo,qhmn,qhno,qhpc,qhpr,qhsf,qhtb,qhtt/d=1/ed=1/rs=AA2YrTsb0YAbq7cAwNd5_rrpPUtgXOn17g"]
        ], null, null, [""]
      ]
    ],
  };
  this.gbar_ = this.gbar_ || {};
  (function (_) {
    var window = this;
    try {
      var ba, ha, ia, ka, Ca, Da;
      _.aa = "function" == typeof Object.create ? Object.create : function (a) {
        var c = function () { };
        c.prototype = a;
        return new c
      };
      if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
      else {
        var ca;
        a: {
          var da = {
            jg: !0
          },
            ea = {};
          try {
            ea.__proto__ = da;
            ca = ea.jg;
            break a
          } catch (a) { }
          ca = !1
        }
        ba = ca ? function (a, c) {
          a.__proto__ = c;
          if (a.__proto__ !== c) throw new TypeError("a`" + a);
          return a
        } : null
      }
      _.fa = ba;
      ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, c, d) {
        a != Array.prototype && a != Object.prototype && (a[c] = d.value)
      };
      ia = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global && null != window.global ? window.global : this;
      ka = function (a, c) {
        if (c) {
          var d = ia;
          a = a.split(".");
          for (var e = 0; e < a.length - 1; e++) {
            var f = a[e];
            f in d || (d[f] = {});
            d = d[f]
          }
          a = a[a.length - 1];
          e = d[a];
          c = c(e);
          c != e && null != c && ha(d, a, {
            configurable: !0,
            writable: !0,
            value: c
          })
        }
      };
      var la = function () {
        la = function () { };
        ia.Symbol || (ia.Symbol = ma)
      },
        ma = function () {
          var a = 0;
          return function (c) {
            return "jscomp_symbol_" + (c || "") + a++
          }
        }(),
        oa = function () {
          la();
          var a = ia.Symbol.iterator;
          a || (a = ia.Symbol.iterator = ia.Symbol("iterator"));
          "function" != typeof Array.prototype[a] && ha(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return na(this)
            }
          });
          oa = function () { }
        },
        na = function (a) {
          var c = 0;
          return pa(function () {
            return c < a.length ? {
              done: !1,
              value: a[c++]
            } : {
              done: !0
            }
          })
        },
        pa = function (a) {
          oa();
          a = {
            next: a
          };
          a[ia.Symbol.iterator] = function () {
            return this
          };
          return a
        },
        ra = function (a) {
          oa();
          var c = a[window.Symbol.iterator];
          return c ? c.call(a) : na(a)
        },
        sa = function (a, c) {
          return Object.prototype.hasOwnProperty.call(a, c)
        };
      ka("Map", function (a) {
        if (function () {
          if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
          try {
            var c = Object.seal({
              x: 4
            }),
              d = new a(ra([
                [c, "s"]
              ]));
            if ("s" != d.get(c) || 1 != d.size || d.get({
              x: 4
            }) || d.set({
              x: 4
            }, "t") != d || 2 != d.size) return !1;
            var e = d.entries(),
              f = e.next();
            if (f.done || f.value[0] != c || "s" != f.value[1]) return !1;
            f = e.next();
            return f.done || 4 != f.value[0].x || "t" != f.value[1] || !e.next().done ? !1 : !0
          } catch (E) {
            return !1
          }
        }()) return a;
        la();
        oa();
        var c = new window.WeakMap,
          d = function (a) {
            this.f = {};
            this.b = g();
            this.size = 0;
            if (a) {
              a = ra(a);
              for (var c; !(c = a.next()).done;) c = c.value, this.set(c[0], c[1])
            }
          };
        d.prototype.set = function (a, c) {
          a = 0 === a ? 0 : a;
          var d = e(this, a);
          d.list || (d.list = this.f[d.id] = []);
          d.Sa ? d.Sa.value = c : (d.Sa = {
            next: this.b,
            Ub: this.b.Ub,
            head: this.b,
            key: a,
            value: c
          }, d.list.push(d.Sa), this.b.Ub.next = d.Sa, this.b.Ub = d.Sa, this.size++);
          return this
        };
        d.prototype["delete"] = function (a) {
          a = e(this, a);
          return a.Sa && a.list ? (a.list.splice(a.index, 1), a.list.length || delete this.f[a.id], a.Sa.Ub.next = a.Sa.next, a.Sa.next.Ub =
            a.Sa.Ub, a.Sa.head = null, this.size--, !0) : !1
        };
        d.prototype.clear = function () {
          this.f = {};
          this.b = this.b.Ub = g();
          this.size = 0
        };
        d.prototype.has = function (a) {
          return !!e(this, a).Sa
        };
        d.prototype.get = function (a) {
          return (a = e(this, a).Sa) && a.value
        };
        d.prototype.entries = function () {
          return f(this, function (a) {
            return [a.key, a.value]
          })
        };
        d.prototype.keys = function () {
          return f(this, function (a) {
            return a.key
          })
        };
        d.prototype.values = function () {
          return f(this, function (a) {
            return a.value
          })
        };
        d.prototype.forEach = function (a, c) {
          for (var d = this.entries(),
            e; !(e = d.next()).done;) e = e.value, a.call(c, e[1], e[0], this)
        };
        d.prototype[window.Symbol.iterator] = d.prototype.entries;
        var e = function (a, d) {
          var e = d && typeof d;
          "object" == e || "function" == e ? c.has(d) ? e = c.get(d) : (e = "" + ++h, c.set(d, e)) : e = "p_" + d;
          var f = a.f[e];
          if (f && sa(a.f, e))
            for (a = 0; a < f.length; a++) {
              var g = f[a];
              if (d !== d && g.key !== g.key || d === g.key) return {
                id: e,
                list: f,
                index: a,
                Sa: g
              }
            }
          return {
            id: e,
            list: f,
            index: -1,
            Sa: void 0
          }
        },
          f = function (a, c) {
            var d = a.b;
            return pa(function () {
              if (d) {
                for (; d.head != a.b;) d = d.Ub;
                for (; d.next != d.head;) return d =
                  d.next, {
                  done: !1,
                  value: c(d)
                };
                d = null
              }
              return {
                done: !0,
                value: void 0
              }
            })
          },
          g = function () {
            var a = {};
            return a.Ub = a.next = a.head = a
          },
          h = 0;
        return d
      });
      _.ta = _.ta || {};
      _.l = this;
      _.ua = function (a) {
        return void 0 !== a
      };
      _.n = function (a) {
        return "string" == typeof a
      };
      _.va = function (a) {
        return "number" == typeof a
      };
      _.p = function (a, c, d) {
        a = a.split(".");
        d = d || _.l;
        a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());) !a.length && _.ua(c) ? d[e] = c : d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {}
      };
      _.wa = function () { };
      _.xa = function (a) {
        a.ve = void 0;
        a.ta = function () {
          return a.ve ? a.ve : a.ve = new a
        }
      };
      _.ya = function (a) {
        var c = typeof a;
        if ("object" == c)
          if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return c;
            var d = Object.prototype.toString.call(a);
            if ("[object Window]" == d) return "object";
            if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
          } else return "null";
        else if ("function" == c && "undefined" == typeof a.call) return "object";
        return c
      };
      _.r = function (a) {
        return "array" == _.ya(a)
      };
      _.za = function (a) {
        return "function" == _.ya(a)
      };
      _.Aa = function (a) {
        var c = typeof a;
        return "object" == c && null != a || "function" == c
      };
      _.Ba = "closure_uid_" + (1E9 * Math.random() >>> 0);
      Ca = function (a, c, d) {
        return a.call.apply(a.bind, arguments)
      };
      Da = function (a, c, d) {
        if (!a) throw Error();
        if (2 < arguments.length) {
          var e = Array.prototype.slice.call(arguments, 2);
          return function () {
            var d = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(d, e);
            return a.apply(c, d)
          }
        }
        return function () {
          return a.apply(c, arguments)
        }
      };
      _.u = function (a, c, d) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.u = Ca : _.u = Da;
        return _.u.apply(null, arguments)
      };
      _.Ea = Date.now || function () {
        return +new Date
      };
      _.v = function (a, c) {
        function d() { }
        d.prototype = c.prototype;
        a.H = c.prototype;
        a.prototype = new d;
        a.prototype.constructor = a;
        a.nk = function (a, d, g) {
          for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
          return c.prototype[d].apply(a, e)
        }
      };
      _.Fa = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, _.Fa);
        else {
          var c = Error().stack;
          c && (this.stack = c)
        }
        a && (this.message = String(a))
      };
      _.v(_.Fa, Error);
      _.Fa.prototype.name = "CustomError";
      _.Ga = Array.prototype.indexOf ? function (a, c) {
        return Array.prototype.indexOf.call(a, c, void 0)
      } : function (a, c) {
        if (_.n(a)) return _.n(c) && 1 == c.length ? a.indexOf(c, 0) : -1;
        for (var d = 0; d < a.length; d++)
          if (d in a && a[d] === c) return d;
        return -1
      };
      _.Ha = Array.prototype.forEach ? function (a, c, d) {
        Array.prototype.forEach.call(a, c, d)
      } : function (a, c, d) {
        for (var e = a.length, f = _.n(a) ? a.split("") : a, g = 0; g < e; g++) g in f && c.call(d, f[g], g, a)
      };
      _.Ja = Array.prototype.filter ? function (a, c, d) {
        return Array.prototype.filter.call(a, c, d)
      } : function (a, c, d) {
        for (var e = a.length, f = [], g = 0, h = _.n(a) ? a.split("") : a, m = 0; m < e; m++)
          if (m in h) {
            var q = h[m];
            c.call(d, q, m, a) && (f[g++] = q)
          }
        return f
      };
      _.Ka = Array.prototype.map ? function (a, c, d) {
        return Array.prototype.map.call(a, c, d)
      } : function (a, c, d) {
        for (var e = a.length, f = Array(e), g = _.n(a) ? a.split("") : a, h = 0; h < e; h++) h in g && (f[h] = c.call(d, g[h], h, a));
        return f
      };
      _.La = Array.prototype.some ? function (a, c) {
        return Array.prototype.some.call(a, c, void 0)
      } : function (a, c) {
        for (var d = a.length, e = _.n(a) ? a.split("") : a, f = 0; f < d; f++)
          if (f in e && c.call(void 0, e[f], f, a)) return !0;
        return !1
      };
      _.Ma = function (a, c) {
        return 0 <= (0, _.Ga)(a, c)
      };
      var Oa;
      _.Na = String.prototype.trim ? function (a) {
        return a.trim()
      } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
      };
      _.Pa = function (a, c) {
        var d = 0;
        a = (0, _.Na)(String(a)).split(".");
        c = (0, _.Na)(String(c)).split(".");
        for (var e = Math.max(a.length, c.length), f = 0; 0 == d && f < e; f++) {
          var g = a[f] || "",
            h = c[f] || "";
          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            if (0 == g[0].length && 0 == h[0].length) break;
            d = Oa(0 == g[1].length ? 0 : (0, window.parseInt)(g[1], 10), 0 == h[1].length ? 0 : (0, window.parseInt)(h[1], 10)) || Oa(0 == g[2].length, 0 == h[2].length) || Oa(g[2], h[2]);
            g = g[3];
            h = h[3]
          } while (0 == d)
        }
        return d
      };
      Oa = function (a, c) {
        return a < c ? -1 : a > c ? 1 : 0
      };
      a: {
        var Ra = _.l.navigator;
        if (Ra) {
          var Ta = Ra.userAgent;
          if (Ta) {
            _.Qa = Ta;
            break a
          }
        }
        _.Qa = ""
      }
      _.x = function (a) {
        return -1 != _.Qa.indexOf(a)
      };
      var Ua;
      Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      _.Va = function (a, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
          e = arguments[f];
          for (d in e) a[d] = e[d];
          for (var g = 0; g < Ua.length; g++) d = Ua[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d])
        }
      };
      var Wa;
      Wa = function () {
        // return (_.x("Chrome") || _.x("CriOS")) && !_.x("Edge")
      };
      _.Ya = function () {
        // return _.x("Android") && !(Wa() || _.x("Firefox") || _.x("Opera") || _.x("Silk"))
      };
      _.Za = function () {
        // return _.x("iPhone") && !_.x("iPod") && !_.x("iPad")
      };
      _.$a = function () {
        // return _.Za() || _.x("iPad") || _.x("iPod")
      };
      _.ab = function (a) {
        _.ab[" "](a);
        return a
      };
      _.ab[" "] = _.wa;
      var cb = function (a, c) {
        var d = bb;
        return Object.prototype.hasOwnProperty.call(d, a) ? d[a] : d[a] = c(a)
      };
      var qb, rb, bb, zb;
      qb = function () {
        var a = _.l.document;
        return a ? a.documentMode : void 0
      };
      a: {
        var sb = "",
          tb = function () {
            var a = _.Qa;
            if (_.gb) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (_.eb) return /Edge\/([\d\.]+)/.exec(a);
            if (_.y) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (_.hb) return /WebKit\/(\S+)/.exec(a);
            if (_.db) return /(?:Version)[ \/]?(\S+)/.exec(a)
          }(); tb && (sb = tb ? tb[1] : "");
        if (_.y) {
          var ub = qb();
          if (null != ub && ub > (0, window.parseFloat)(sb)) {
            rb = String(ub);
            break a
          }
        }
        rb = sb
      }
      _.vb = rb;
      bb = {};
      _.wb = function (a) {
        return cb(a, function () {
          return 0 <= _.Pa(_.vb, a)
        })
      };
      _.yb = function (a) {
        return Number(xb) >= a
      };
      var Bb = _.l.document;
      zb = Bb && _.y ? qb() || ("CSS1Compat" == Bb.compatMode ? (0, window.parseInt)(_.vb, 10) : 5) : void 0;
      var xb = zb;
      _.Cb = _.x("Firefox");
      _.Db = _.Za() || _.x("iPod");
      _.Eb = _.x("iPad");
      _.Fb = _.Ya();
      _.Gb = Wa();
      _.Hb = !_.$a();
      var Ib = null;
      var Lb, Mb;
      _.z = function () { };
      _.Jb = "function" == typeof window.Uint8Array;
      _.A = function (a, c, d, e, f) {
        a.b = null;
        c || (c = d ? [d] : []);
        a.G = d ? String(d) : void 0;
        a.A = 0 === d ? -1 : 0;
        a.j = c;
        a: {
          d = a.j.length; c = -1;
          if (d && (c = d - 1, (d = a.j[c]) && "object" == typeof d && !_.r(d) && !(_.Jb && d instanceof window.Uint8Array))) {
            a.w = c - a.A;
            a.o = d;
            break a
          } - 1 < e ? (a.w = Math.max(e, c + 1 - a.A), a.o = null) : a.w = Number.MAX_VALUE
        }
        a.D = {};
        if (f)
          for (e = 0; e < f.length; e++) c = f[e], c < a.w ? (c += a.A, a.j[c] = a.j[c] || _.Kb) : (Lb(a), a.o[c] = a.o[c] || _.Kb)
      };
      _.Kb = [];
      Lb = function (a) {
        var c = a.w + a.A;
        a.j[c] || (a.o = a.j[c] = {})
      };
      _.B = function (a, c) {
        if (c < a.w) {
          c += a.A;
          var d = a.j[c];
          return d === _.Kb ? a.j[c] = [] : d
        }
        if (a.o) return d = a.o[c], d === _.Kb ? a.o[c] = [] : d
      };
      _.C = function (a, c, d) {
        a = _.B(a, c);
        return null == a ? d : a
      };
      _.D = function (a, c, d) {
        c < a.w ? a.j[c + a.A] = d : (Lb(a), a.o[c] = d)
      };
      _.F = function (a, c, d) {
        a.b || (a.b = {});
        if (!a.b[d]) {
          var e = _.B(a, d);
          e && (a.b[d] = new c(e))
        }
        return a.b[d]
      };
      Mb = function (a) {
        if (a.b)
          for (var c in a.b) {
            var d = a.b[c];
            if (_.r(d))
              for (var e = 0; e < d.length; e++) d[e] && d[e].Vb();
            else d && d.Vb()
          }
      };
      _.z.prototype.Vb = function () {
        Mb(this);
        return this.j
      };
      _.z.prototype.f = _.Jb ? function () {
        var a = window.Uint8Array.prototype.toJSON;
        window.Uint8Array.prototype.toJSON = function () {
          if (!Ib) {
            Ib = {};
            for (var a = 0; 65 > a; a++) Ib[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)
          }
          a = Ib;
          for (var d = [], e = 0; e < this.length; e += 3) {
            var f = this[e],
              g = e + 1 < this.length,
              h = g ? this[e + 1] : 0,
              m = e + 2 < this.length,
              q = m ? this[e + 2] : 0,
              t = f >> 2;
            f = (f & 3) << 4 | h >> 4;
            h = (h & 15) << 2 | q >> 6;
            q &= 63;
            m || (q = 64, g || (h = 64));
            d.push(a[t], a[f], a[h], a[q])
          }
          return d.join("")
        };
        try {
          return JSON.stringify(this.j &&
            this.Vb(), Nb)
        } finally {
          window.Uint8Array.prototype.toJSON = a
        }
      } : function () {
        return JSON.stringify(this.j && this.Vb(), Nb)
      };
      var Nb = function (a, c) {
        return _.va(c) && ((0, window.isNaN)(c) || window.Infinity === c || -window.Infinity === c) ? String(c) : c
      };
      _.z.prototype.toString = function () {
        Mb(this);
        return this.j.toString()
      };
      _.G = function () {
        this.Ha = this.Ha;
        this.Ya = this.Ya
      };
      _.G.prototype.Ha = !1;
      _.G.prototype.ka = function () {
        this.Ha || (this.Ha = !0, this.O())
      };
      _.G.prototype.O = function () {
        if (this.Ya)
          for (; this.Ya.length;) this.Ya.shift()()
      };
      var Ob = function (a) {
        _.A(this, a, 0, -1, null)
      };
      _.v(Ob, _.z);
      _.Pb = function (a) {
        _.A(this, a, 0, -1, null)
      };
      _.v(_.Pb, _.z);
      _.Qb = function (a) {
        _.A(this, a, 0, -1, null)
      };
      _.v(_.Qb, _.z);
      var Rb = function (a) {
        _.G.call(this);
        this.j = a;
        this.b = [];
        this.f = {}
      };
      _.v(Rb, _.G);
      Rb.prototype.td = function () {
        for (var a = this.b.length, c = this.b, d = [], e = 0; e < a; ++e) {
          var f = c[e].b();
          a: {
            var g = this.j;
            for (var h = f.split("."), m = h.length, q = 0; q < m; ++q)
              if (g[h[q]]) g = g[h[q]];
              else {
                g = null;
                break a
              }
            g = g instanceof Function ? g : null
          }
          if (g && g != this.f[f]) try {
            c[e].td(g)
          } catch (t) { } else d.push(c[e])
        }
        this.b = d.concat(c.slice(a))
      };
      var Sb = function (a) {
        _.G.call(this);
        this.A = a;
        this.j = this.b = null;
        this.w = 0;
        this.o = {};
        this.f = !1;
        a = window.navigator.userAgent;
        0 <= a.indexOf("MSIE") && 0 <= a.indexOf("Trident") && (a = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)) && a[1] && 9 > (0, window.parseFloat)(a[1]) && (this.f = !0)
      };
      _.v(Sb, _.G);
      Sb.prototype.B = function (a, c) {
        this.b = c;
        this.j = a;
        c.preventDefault ? c.preventDefault() : c.returnValue = !1
      };
      _.Tb = function (a) {
        _.A(this, a, 0, -1, null)
      };
      _.v(_.Tb, _.z);
      _.Ub = function (a) {
        _.A(this, a, 0, -1, null)
      };
      _.v(_.Ub, _.z);
      _.H = function (a, c) {
        return null != a ? !!a : !!c
      };
      _.I = function (a, c) {
        void 0 == c && (c = "");
        return null != a ? a : c
      };
      _.J = function (a, c) {
        void 0 == c && (c = 0);
        return null != a ? a : c
      };
      var Vb, Yb, Xb;
      _.Wb = function (a) {
        var c = window.google && window.google.logUrl ? "" : "";
        c += "/gen_204?";
        c += a.f(2040 - c.length);
        Vb(c)
      };
      Vb = function (a) {
        var c = new window.Image,
          d = Xb;
        c.onerror = c.onload = c.onabort = function () {
          d in Yb && delete Yb[d]
        };
        Yb[Xb++] = c;
        c.src = a
      };
      Yb = [];
      Xb = 0;
      var Zb = function (a) {
        this.b = a
      };
      Zb.prototype.log = function (a, c) {
        try {
          if (this.B(a)) {
            var d = this.j(a, c);
            this.f(d)
          }
        } catch (e) { }
      };
      Zb.prototype.f = function (a) {
        this.b ? a.b() : _.Wb(a)
      };
      _.$b = function () {
        this.data = {}
      };
      _.$b.prototype.b = function () {
        window.console && window.console.log && window.console.log("Log data: ", this.data)
      };
      _.$b.prototype.f = function (a) {
        var c = [],
          d;
        for (d in this.data) c.push((0, window.encodeURIComponent)(d) + "=" + (0, window.encodeURIComponent)(String(this.data[d])));
        return ("atyp=i&zx=" + (new Date).getTime() + "&" + c.join("&")).substr(0, a)
      };
      var ac = function (a, c) {
      };
      _.v(ac, _.$b);
      _.bc = function (a, c, d, e, f) {
        ac.call(this, a, c);
        _.Va(this.data, {
          jexpid: _.I(_.B(a, 9)),
          srcpg: "prop=" + _.I(_.B(a, 6)),
          jsr: Math.round(1 / e),
          emsg: d.name + ":" + d.message
        });
        if (f) {
          f._sn && (f._sn = "og." + f._sn);
          for (var g in f) this.data[(0, window.encodeURIComponent)(g)] = f[g]
        }
      };
      _.v(_.bc, ac);
      var cc = function (a) {
        _.A(this, a, 0, -1, null)
      };
      _.v(cc, _.z);
      _.ec = function (a) {
        _.A(this, a, 0, -1, null)
      };
      _.v(_.ec, _.z);
      var kc;
      _.fc = function () {
        this.b = {};
        this.f = {}
      };
      _.xa(_.fc);
      _.hc = function (a, c) {
        var d = _.fc.ta();
        if (a in d.b) {
          if (d.b[a] != c) throw new gc(a);
        } else {
          d.b[a] = c;
          if (c = d.f[a])
            for (var e = 0, f = c.length; e < f; e++) c[e].b(d.b, a);
          delete d.f[a]
        }
      };
      _.jc = function (a, c) {
        if (c in a.b) return a.b[c];
        throw new ic(c);
      };
      kc = function () {
        _.Fa.call(this)
      };
      _.v(kc, _.Fa);
      var gc = function () {
        _.Fa.call(this)
      };
      _.v(gc, kc);
      var ic = function () {
        _.Fa.call(this)
      };
      _.v(ic, kc);
      var lc = function (a, c, d, e) {
        this.b = e;
        this.M = c;
        this.Ha = d;
        this.w = _.J(+_.C(a, 2, .001), .001);
        this.G = _.H(_.B(a, 1)) && Math.random() < this.w;
        this.C = _.J(_.C(a, 3, 1), 1);
        this.A = 0;
        this.o = null;
        this.D = _.H(_.C(a, 4, !0), !0)
      };
      _.v(lc, Zb);
      lc.prototype.log = function (a, c) {
        lc.H.log.call(this, a, c);
        if (this.b && this.D) throw a;
      };
      lc.prototype.B = function () {
        return this.b || this.G && this.A < this.C
      };
      lc.prototype.j = function (a, c) {
        try {
          return (this.o || _.jc(_.fc.ta(), "lm")).b(a, c)
        } catch (d) {
          return new _.bc(this.M, this.Ha, a, this.w, c)
        }
      };
      lc.prototype.f = function (a) {
        lc.H.f.call(this, a);
        this.A++
      };
      var mc = [1, 2, 3, 4, 5, 6, 9, 10, 11, 13, 14, 28, 29, 30, 34, 35, 37, 38, 39, 40, 41, 42, 43, 48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 62, 500],
        oc = function (a, c, d, e, f, g) {
          ac.call(this, a, c);
          _.Va(this.data, {
            oge: e,
            ogex: _.I(_.B(a, 9)),
            ogp: _.I(_.B(a, 6)),
            ogsr: Math.round(1 / (nc(e) ? _.J(+_.C(d, 3, 1)) : _.J(+_.C(d, 2, 1E-4)))),
            ogus: f
          });
          if (g) {
            "ogw" in g && (this.data.ogw = g.ogw, delete g.ogw);
            "ved" in g && (this.data.ved = g.ved, delete g.ved);
            a = [];
            for (var h in g) 0 != a.length && a.push(","), a.push(h.replace(".", "%2E").replace(",", "%2C")), a.push("."), a.push(g[h].replace(".", "%2E").replace(",", "%2C"));
            g = a.join("");
            "" != g && (this.data.ogad = g)
          }
        };
      _.v(oc, ac);
      var pc = null,
        nc = function (a) {
          if (!pc) {
            pc = {};
            for (var c = 0; c < mc.length; c++) pc[mc[c]] = !0
          }
          return !!pc[a]
        };
      var qc = function (a, c, d, e, f) {
        this.b = f;
        this.G = a;
        this.D = c;
        this.M = e;
        this.C = _.J(+_.C(a, 2, 1E-4), 1E-4);
        this.A = _.J(+_.C(a, 3, 1), 1);
        c = Math.random();
        this.w = _.H(_.B(a, 1)) && c < this.C;
        this.o = _.H(_.B(a, 1)) && c < this.A;
        a = 0;
        _.H(_.B(d, 1)) && (a |= 1);
        _.H(_.B(d, 2)) && (a |= 2);
        _.H(_.B(d, 3)) && (a |= 4);
        this.Ha = a
      };
      _.v(qc, Zb);
      qc.prototype.B = function (a) {
        return this.b || (nc(a) ? this.o : this.w)
      };
      qc.prototype.j = function (a, c) {
        return new oc(this.D, this.M, this.G, a, this.Ha, c)
      };
      var rc = function (a) {
        this.b = a;
        this.f = void 0;
        this.j = []
      };
      rc.prototype.then = function (a, c, d) {
        this.j.push(new sc(a, c, d));
        _.tc(this)
      };
      _.tc = function (a) {
        if (0 < a.j.length) {
          var c = void 0 !== a.b,
            d = void 0 !== a.f;
          if (c || d) {
            c = c ? a.o : a.A;
            d = a.j;
            a.j = [];
            try {
              (0, _.Ha)(d, c, a)
            } catch (e) {
              window.console.error(e)
            }
          }
        }
      };
      rc.prototype.o = function (a) {
        a.f && a.f.call(a.b, this.b)
      };
      rc.prototype.A = function (a) {
        a.j && a.j.call(a.b, this.f)
      };
      var sc = function (a, c, d) {
        this.f = a;
        this.j = c;
        this.b = d
      };
      _.K = function () {
        this.f = new rc;
        this.b = new rc;
        this.w = new rc;
        this.o = new rc;
        this.A = new rc;
        this.B = new rc;
        this.C = new rc;
        this.j = new rc
      };
      _.xa(_.K);
      _.k = _.K.prototype;
      _.k.Mg = function () {
        return this.f
      };
      _.k.Vg = function () {
        return this.b
      };
      _.k.$g = function () {
        return this.w
      };
      _.k.Tg = function () {
        return this.o
      };
      _.k.Yg = function () {
        return this.A
      };
      _.k.ah = function () {
        return this.B
      };
      _.k.Qg = function () {
        return this.C
      };
      _.k.Rg = function () {
        return this.j
      };
      var uc = function (a) {
        _.A(this, a, 0, -1, null)
      };
      _.v(uc, _.z);
      _.wc = function () {
        return _.F(_.vc, _.Pb, 1)
      };
      _.xc = function () {
        return _.F(_.vc, _.Qb, 5)
      };
      var yc;
      window.gbar_ && window.gbar_.CONFIG ? yc = window.gbar_.CONFIG[0] || {} : yc = [];
      _.vc = new uc(yc);
      _.p("gbar_._DumpException", function (a) {
        window.console.error(a)
      }, void 0);
      var zc, Ac, Cc, Dc, Ec;
      zc = _.F(_.vc, _.ec, 3) || new _.ec;
      Ac = _.wc() || new _.Pb;
      _.L = new lc(zc, Ac, "quantum:gapiBuildLabel", !1);
      Cc = _.wc() || new _.Pb;
      Dc = _.xc() || new _.Qb;
      Ec = _.F(_.vc, cc, 4) || new cc;
      _.Bc = new qc(Ec, Cc, Dc, "quantum:gapiBuildLabel", !1);
      _.Fc = new Sb(_.L);
      _.Bc.log(8, {
        m: "BackCompat" == window.document.compatMode ? "q" : "s"
      });
      _.p("gbar.A", rc, void 0);
      rc.prototype.aa = rc.prototype.then;
      _.p("gbar.B", _.K, void 0);
      _.K.prototype.ba = _.K.prototype.Vg;
      _.K.prototype.bb = _.K.prototype.$g;
      _.K.prototype.bd = _.K.prototype.Yg;
      _.K.prototype.be = _.K.prototype.ah;
      _.K.prototype.bf = _.K.prototype.Mg;
      _.K.prototype.bg = _.K.prototype.Tg;
      _.K.prototype.bh = _.K.prototype.Qg;
      _.K.prototype.bi = _.K.prototype.Rg;
      var Gc = _.K.ta();
      _.p("gbar.a", Gc, void 0);
      var Hc = new Rb(window);
      _.hc("api", Hc);
      var Ic = _.xc() || new _.Qb,
        Jc = _.I(_.B(Ic, 8));
      window.__PVT = Jc;
      _.hc("eq", _.Fc);

    } catch (e) {
      _._DumpException(e)
    }
  })(this.gbar_);
