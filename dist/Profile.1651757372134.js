import {
    y as F,
    f as P,
    A as ot,
    B as dt,
    C as Bt,
    n as te,
    D as ut,
    E as At,
    l as ge,
    d as Y,
    G as tt,
    _ as q,
    o as I,
    c as z,
    a as C,
    H as $t,
    v as Ve,
    x as je,
    I as j,
    g as ft,
    w as $e,
    r as ae,
    b as W,
    F as se,
    u as le,
    J as pt,
    t as k,
    m as ue,
    K as Se,
    L as Rt,
    M as zt,
    N as ct,
    O as Nt,
    T as Gt,
    q as Dt,
    P as kt
} from './index.1651757372134.js';
import { a as We } from './image.1651757372134.js';
function it(t) {
    return (
        t !== null &&
        typeof t == 'object' &&
        'constructor' in t &&
        t.constructor === Object
    );
}
function qe(t, e) {
    t === void 0 && (t = {}),
        e === void 0 && (e = {}),
        Object.keys(e).forEach(function (r) {
            typeof t[r] == 'undefined'
                ? (t[r] = e[r])
                : it(e[r]) &&
                  it(t[r]) &&
                  Object.keys(e[r]).length > 0 &&
                  qe(t[r], e[r]);
        });
}
var vt = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: '' },
    querySelector: function () {
        return null;
    },
    querySelectorAll: function () {
        return [];
    },
    getElementById: function () {
        return null;
    },
    createEvent: function () {
        return { initEvent: function () {} };
    },
    createElement: function () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
                return [];
            }
        };
    },
    createElementNS: function () {
        return {};
    },
    importNode: function () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    }
};
function H() {
    var t = typeof document != 'undefined' ? document : {};
    return qe(t, vt), t;
}
var Ht = {
    document: vt,
    navigator: { userAgent: '' },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    },
    history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {}
    },
    CustomEvent: function () {
        return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
        return {
            getPropertyValue: function () {
                return '';
            }
        };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
        return {};
    },
    requestAnimationFrame: function (t) {
        return typeof setTimeout == 'undefined'
            ? (t(), null)
            : setTimeout(t, 0);
    },
    cancelAnimationFrame: function (t) {
        typeof setTimeout != 'undefined' && clearTimeout(t);
    }
};
function N() {
    var t = typeof window != 'undefined' ? window : {};
    return qe(t, Ht), t;
}
function Ft(t, e) {
    (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
}
function Re(t) {
    return (
        (Re = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r);
              }),
        Re(t)
    );
}
function we(t, e) {
    return (
        (we =
            Object.setPrototypeOf ||
            function (i, n) {
                return (i.__proto__ = n), i;
            }),
        we(t, e)
    );
}
function Vt() {
    if (
        typeof Reflect == 'undefined' ||
        !Reflect.construct ||
        Reflect.construct.sham
    )
        return !1;
    if (typeof Proxy == 'function') return !0;
    try {
        return (
            Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
            ),
            !0
        );
    } catch {
        return !1;
    }
}
function me(t, e, r) {
    return (
        Vt()
            ? (me = Reflect.construct)
            : (me = function (n, a, s) {
                  var l = [null];
                  l.push.apply(l, a);
                  var o = Function.bind.apply(n, l),
                      d = new o();
                  return s && we(d, s.prototype), d;
              }),
        me.apply(null, arguments)
    );
}
function jt(t) {
    return Function.toString.call(t).indexOf('[native code]') !== -1;
}
function ze(t) {
    var e = typeof Map == 'function' ? new Map() : void 0;
    return (
        (ze = function (i) {
            if (i === null || !jt(i)) return i;
            if (typeof i != 'function')
                throw new TypeError(
                    'Super expression must either be null or a function'
                );
            if (typeof e != 'undefined') {
                if (e.has(i)) return e.get(i);
                e.set(i, n);
            }
            function n() {
                return me(i, arguments, Re(this).constructor);
            }
            return (
                (n.prototype = Object.create(i.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                we(n, i)
            );
        }),
        ze(t)
    );
}
function Wt(t) {
    if (t === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return t;
}
function qt(t) {
    var e = t.__proto__;
    Object.defineProperty(t, '__proto__', {
        get: function () {
            return e;
        },
        set: function (i) {
            e.__proto__ = i;
        }
    });
}
var X = (function (t) {
    Ft(e, t);
    function e(r) {
        var i;
        return (i = t.call.apply(t, [this].concat(r)) || this), qt(Wt(i)), i;
    }
    return e;
})(ze(Array));
function fe(t) {
    t === void 0 && (t = []);
    var e = [];
    return (
        t.forEach(function (r) {
            Array.isArray(r) ? e.push.apply(e, fe(r)) : e.push(r);
        }),
        e
    );
}
function ht(t, e) {
    return Array.prototype.filter.call(t, e);
}
function Yt(t) {
    for (var e = [], r = 0; r < t.length; r += 1)
        e.indexOf(t[r]) === -1 && e.push(t[r]);
    return e;
}
function Xt(t, e) {
    if (typeof t != 'string') return [t];
    for (var r = [], i = e.querySelectorAll(t), n = 0; n < i.length; n += 1)
        r.push(i[n]);
    return r;
}
function g(t, e) {
    var r = N(),
        i = H(),
        n = [];
    if (!e && t instanceof X) return t;
    if (!t) return new X(n);
    if (typeof t == 'string') {
        var a = t.trim();
        if (a.indexOf('<') >= 0 && a.indexOf('>') >= 0) {
            var s = 'div';
            a.indexOf('<li') === 0 && (s = 'ul'),
                a.indexOf('<tr') === 0 && (s = 'tbody'),
                (a.indexOf('<td') === 0 || a.indexOf('<th') === 0) &&
                    (s = 'tr'),
                a.indexOf('<tbody') === 0 && (s = 'table'),
                a.indexOf('<option') === 0 && (s = 'select');
            var l = i.createElement(s);
            l.innerHTML = a;
            for (var o = 0; o < l.childNodes.length; o += 1)
                n.push(l.childNodes[o]);
        } else n = Xt(t.trim(), e || i);
    } else if (t.nodeType || t === r || t === i) n.push(t);
    else if (Array.isArray(t)) {
        if (t instanceof X) return t;
        n = t;
    }
    return new X(Yt(n));
}
g.fn = X.prototype;
function Ut() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
    var i = fe(
        e.map(function (n) {
            return n.split(' ');
        })
    );
    return (
        this.forEach(function (n) {
            var a;
            (a = n.classList).add.apply(a, i);
        }),
        this
    );
}
function Kt() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
    var i = fe(
        e.map(function (n) {
            return n.split(' ');
        })
    );
    return (
        this.forEach(function (n) {
            var a;
            (a = n.classList).remove.apply(a, i);
        }),
        this
    );
}
function Jt() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
    var i = fe(
        e.map(function (n) {
            return n.split(' ');
        })
    );
    this.forEach(function (n) {
        i.forEach(function (a) {
            n.classList.toggle(a);
        });
    });
}
function Qt() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
    var i = fe(
        e.map(function (n) {
            return n.split(' ');
        })
    );
    return (
        ht(this, function (n) {
            return (
                i.filter(function (a) {
                    return n.classList.contains(a);
                }).length > 0
            );
        }).length > 0
    );
}
function Zt(t, e) {
    if (arguments.length === 1 && typeof t == 'string')
        return this[0] ? this[0].getAttribute(t) : void 0;
    for (var r = 0; r < this.length; r += 1)
        if (arguments.length === 2) this[r].setAttribute(t, e);
        else
            for (var i in t) (this[r][i] = t[i]), this[r].setAttribute(i, t[i]);
    return this;
}
function ei(t) {
    for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
    return this;
}
function ti(t) {
    for (var e = 0; e < this.length; e += 1) this[e].style.transform = t;
    return this;
}
function ii(t) {
    for (var e = 0; e < this.length; e += 1)
        this[e].style.transitionDuration = typeof t != 'string' ? t + 'ms' : t;
    return this;
}
function ri() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
    var i = e[0],
        n = e[1],
        a = e[2],
        s = e[3];
    typeof e[1] == 'function' &&
        ((i = e[0]), (a = e[1]), (s = e[2]), (n = void 0)),
        s || (s = !1);
    function l(h) {
        var S = h.target;
        if (!!S) {
            var y = h.target.dom7EventData || [];
            if ((y.indexOf(h) < 0 && y.unshift(h), g(S).is(n))) a.apply(S, y);
            else
                for (var E = g(S).parents(), b = 0; b < E.length; b += 1)
                    g(E[b]).is(n) && a.apply(E[b], y);
        }
    }
    function o(h) {
        var S = h && h.target ? h.target.dom7EventData || [] : [];
        S.indexOf(h) < 0 && S.unshift(h), a.apply(this, S);
    }
    for (var d = i.split(' '), u, p = 0; p < this.length; p += 1) {
        var f = this[p];
        if (n)
            for (u = 0; u < d.length; u += 1) {
                var v = d[u];
                f.dom7LiveListeners || (f.dom7LiveListeners = {}),
                    f.dom7LiveListeners[v] || (f.dom7LiveListeners[v] = []),
                    f.dom7LiveListeners[v].push({
                        listener: a,
                        proxyListener: l
                    }),
                    f.addEventListener(v, l, s);
            }
        else
            for (u = 0; u < d.length; u += 1) {
                var c = d[u];
                f.dom7Listeners || (f.dom7Listeners = {}),
                    f.dom7Listeners[c] || (f.dom7Listeners[c] = []),
                    f.dom7Listeners[c].push({ listener: a, proxyListener: o }),
                    f.addEventListener(c, o, s);
            }
    }
    return this;
}
function ni() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
    var i = e[0],
        n = e[1],
        a = e[2],
        s = e[3];
    typeof e[1] == 'function' &&
        ((i = e[0]), (a = e[1]), (s = e[2]), (n = void 0)),
        s || (s = !1);
    for (var l = i.split(' '), o = 0; o < l.length; o += 1)
        for (var d = l[o], u = 0; u < this.length; u += 1) {
            var p = this[u],
                f = void 0;
            if (
                (!n && p.dom7Listeners
                    ? (f = p.dom7Listeners[d])
                    : n && p.dom7LiveListeners && (f = p.dom7LiveListeners[d]),
                f && f.length)
            )
                for (var c = f.length - 1; c >= 0; c -= 1) {
                    var v = f[c];
                    (a && v.listener === a) ||
                    (a &&
                        v.listener &&
                        v.listener.dom7proxy &&
                        v.listener.dom7proxy === a)
                        ? (p.removeEventListener(d, v.proxyListener, s),
                          f.splice(c, 1))
                        : a ||
                          (p.removeEventListener(d, v.proxyListener, s),
                          f.splice(c, 1));
                }
        }
    return this;
}
function ai() {
    for (var t = N(), e = arguments.length, r = new Array(e), i = 0; i < e; i++)
        r[i] = arguments[i];
    for (var n = r[0].split(' '), a = r[1], s = 0; s < n.length; s += 1)
        for (var l = n[s], o = 0; o < this.length; o += 1) {
            var d = this[o];
            if (t.CustomEvent) {
                var u = new t.CustomEvent(l, {
                    detail: a,
                    bubbles: !0,
                    cancelable: !0
                });
                (d.dom7EventData = r.filter(function (p, f) {
                    return f > 0;
                })),
                    d.dispatchEvent(u),
                    (d.dom7EventData = []),
                    delete d.dom7EventData;
            }
        }
    return this;
}
function si(t) {
    var e = this;
    function r(i) {
        i.target === this && (t.call(this, i), e.off('transitionend', r));
    }
    return t && e.on('transitionend', r), this;
}
function li(t) {
    if (this.length > 0) {
        if (t) {
            var e = this.styles();
            return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue('margin-right')) +
                parseFloat(e.getPropertyValue('margin-left'))
            );
        }
        return this[0].offsetWidth;
    }
    return null;
}
function oi(t) {
    if (this.length > 0) {
        if (t) {
            var e = this.styles();
            return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue('margin-top')) +
                parseFloat(e.getPropertyValue('margin-bottom'))
            );
        }
        return this[0].offsetHeight;
    }
    return null;
}
function di() {
    if (this.length > 0) {
        var t = N(),
            e = H(),
            r = this[0],
            i = r.getBoundingClientRect(),
            n = e.body,
            a = r.clientTop || n.clientTop || 0,
            s = r.clientLeft || n.clientLeft || 0,
            l = r === t ? t.scrollY : r.scrollTop,
            o = r === t ? t.scrollX : r.scrollLeft;
        return { top: i.top + l - a, left: i.left + o - s };
    }
    return null;
}
function ui() {
    var t = N();
    return this[0] ? t.getComputedStyle(this[0], null) : {};
}
function fi(t, e) {
    var r = N(),
        i;
    if (arguments.length === 1)
        if (typeof t == 'string') {
            if (this[0])
                return r.getComputedStyle(this[0], null).getPropertyValue(t);
        } else {
            for (i = 0; i < this.length; i += 1)
                for (var n in t) this[i].style[n] = t[n];
            return this;
        }
    if (arguments.length === 2 && typeof t == 'string') {
        for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
        return this;
    }
    return this;
}
function pi(t) {
    return t
        ? (this.forEach(function (e, r) {
              t.apply(e, [e, r]);
          }),
          this)
        : this;
}
function ci(t) {
    var e = ht(this, t);
    return g(e);
}
function vi(t) {
    if (typeof t == 'undefined') return this[0] ? this[0].innerHTML : null;
    for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
    return this;
}
function hi(t) {
    if (typeof t == 'undefined')
        return this[0] ? this[0].textContent.trim() : null;
    for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
    return this;
}
function mi(t) {
    var e = N(),
        r = H(),
        i = this[0],
        n,
        a;
    if (!i || typeof t == 'undefined') return !1;
    if (typeof t == 'string') {
        if (i.matches) return i.matches(t);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(t);
        if (i.msMatchesSelector) return i.msMatchesSelector(t);
        for (n = g(t), a = 0; a < n.length; a += 1) if (n[a] === i) return !0;
        return !1;
    }
    if (t === r) return i === r;
    if (t === e) return i === e;
    if (t.nodeType || t instanceof X) {
        for (n = t.nodeType ? [t] : t, a = 0; a < n.length; a += 1)
            if (n[a] === i) return !0;
        return !1;
    }
    return !1;
}
function gi() {
    var t = this[0],
        e;
    if (t) {
        for (e = 0; (t = t.previousSibling) !== null; )
            t.nodeType === 1 && (e += 1);
        return e;
    }
}
function wi(t) {
    if (typeof t == 'undefined') return this;
    var e = this.length;
    if (t > e - 1) return g([]);
    if (t < 0) {
        var r = e + t;
        return r < 0 ? g([]) : g([this[r]]);
    }
    return g([this[t]]);
}
function Si() {
    for (var t, e = H(), r = 0; r < arguments.length; r += 1) {
        t = r < 0 || arguments.length <= r ? void 0 : arguments[r];
        for (var i = 0; i < this.length; i += 1)
            if (typeof t == 'string') {
                var n = e.createElement('div');
                for (n.innerHTML = t; n.firstChild; )
                    this[i].appendChild(n.firstChild);
            } else if (t instanceof X)
                for (var a = 0; a < t.length; a += 1) this[i].appendChild(t[a]);
            else this[i].appendChild(t);
    }
    return this;
}
function bi(t) {
    var e = H(),
        r,
        i;
    for (r = 0; r < this.length; r += 1)
        if (typeof t == 'string') {
            var n = e.createElement('div');
            for (n.innerHTML = t, i = n.childNodes.length - 1; i >= 0; i -= 1)
                this[r].insertBefore(n.childNodes[i], this[r].childNodes[0]);
        } else if (t instanceof X)
            for (i = 0; i < t.length; i += 1)
                this[r].insertBefore(t[i], this[r].childNodes[0]);
        else this[r].insertBefore(t, this[r].childNodes[0]);
    return this;
}
function yi(t) {
    return this.length > 0
        ? t
            ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(t)
                ? g([this[0].nextElementSibling])
                : g([])
            : this[0].nextElementSibling
            ? g([this[0].nextElementSibling])
            : g([])
        : g([]);
}
function Ti(t) {
    var e = [],
        r = this[0];
    if (!r) return g([]);
    for (; r.nextElementSibling; ) {
        var i = r.nextElementSibling;
        t ? g(i).is(t) && e.push(i) : e.push(i), (r = i);
    }
    return g(e);
}
function Ci(t) {
    if (this.length > 0) {
        var e = this[0];
        return t
            ? e.previousElementSibling && g(e.previousElementSibling).is(t)
                ? g([e.previousElementSibling])
                : g([])
            : e.previousElementSibling
            ? g([e.previousElementSibling])
            : g([]);
    }
    return g([]);
}
function Ei(t) {
    var e = [],
        r = this[0];
    if (!r) return g([]);
    for (; r.previousElementSibling; ) {
        var i = r.previousElementSibling;
        t ? g(i).is(t) && e.push(i) : e.push(i), (r = i);
    }
    return g(e);
}
function xi(t) {
    for (var e = [], r = 0; r < this.length; r += 1)
        this[r].parentNode !== null &&
            (t
                ? g(this[r].parentNode).is(t) && e.push(this[r].parentNode)
                : e.push(this[r].parentNode));
    return g(e);
}
function _i(t) {
    for (var e = [], r = 0; r < this.length; r += 1)
        for (var i = this[r].parentNode; i; )
            t ? g(i).is(t) && e.push(i) : e.push(i), (i = i.parentNode);
    return g(e);
}
function Mi(t) {
    var e = this;
    return typeof t == 'undefined'
        ? g([])
        : (e.is(t) || (e = e.parents(t).eq(0)), e);
}
function Li(t) {
    for (var e = [], r = 0; r < this.length; r += 1)
        for (var i = this[r].querySelectorAll(t), n = 0; n < i.length; n += 1)
            e.push(i[n]);
    return g(e);
}
function Oi(t) {
    for (var e = [], r = 0; r < this.length; r += 1)
        for (var i = this[r].children, n = 0; n < i.length; n += 1)
            (!t || g(i[n]).is(t)) && e.push(i[n]);
    return g(e);
}
function Pi() {
    for (var t = 0; t < this.length; t += 1)
        this[t].parentNode && this[t].parentNode.removeChild(this[t]);
    return this;
}
var rt = {
    addClass: Ut,
    removeClass: Kt,
    hasClass: Qt,
    toggleClass: Jt,
    attr: Zt,
    removeAttr: ei,
    transform: ti,
    transition: ii,
    on: ri,
    off: ni,
    trigger: ai,
    transitionEnd: si,
    outerWidth: li,
    outerHeight: oi,
    styles: ui,
    offset: di,
    css: fi,
    each: pi,
    html: vi,
    text: hi,
    is: mi,
    index: gi,
    eq: wi,
    append: Si,
    prepend: bi,
    next: yi,
    nextAll: Ti,
    prev: Ci,
    prevAll: Ei,
    parent: xi,
    parents: _i,
    closest: Mi,
    find: Li,
    children: Oi,
    filter: ci,
    remove: Pi
};
Object.keys(rt).forEach(function (t) {
    Object.defineProperty(g.fn, t, { value: rt[t], writable: !0 });
});
function Ii(t) {
    var e = t;
    Object.keys(e).forEach(function (r) {
        try {
            e[r] = null;
        } catch {}
        try {
            delete e[r];
        } catch {}
    });
}
function Ne(t, e) {
    return e === void 0 && (e = 0), setTimeout(t, e);
}
function K() {
    return Date.now();
}
function Bi(t) {
    var e = N(),
        r;
    return (
        e.getComputedStyle && (r = e.getComputedStyle(t, null)),
        !r && t.currentStyle && (r = t.currentStyle),
        r || (r = t.style),
        r
    );
}
function Ai(t, e) {
    e === void 0 && (e = 'x');
    var r = N(),
        i,
        n,
        a,
        s = Bi(t);
    return (
        r.WebKitCSSMatrix
            ? ((n = s.transform || s.webkitTransform),
              n.split(',').length > 6 &&
                  (n = n
                      .split(', ')
                      .map(function (l) {
                          return l.replace(',', '.');
                      })
                      .join(', ')),
              (a = new r.WebKitCSSMatrix(n === 'none' ? '' : n)))
            : ((a =
                  s.MozTransform ||
                  s.OTransform ||
                  s.MsTransform ||
                  s.msTransform ||
                  s.transform ||
                  s
                      .getPropertyValue('transform')
                      .replace('translate(', 'matrix(1, 0, 0, 1,')),
              (i = a.toString().split(','))),
        e === 'x' &&
            (r.WebKitCSSMatrix
                ? (n = a.m41)
                : i.length === 16
                ? (n = parseFloat(i[12]))
                : (n = parseFloat(i[4]))),
        e === 'y' &&
            (r.WebKitCSSMatrix
                ? (n = a.m42)
                : i.length === 16
                ? (n = parseFloat(i[13]))
                : (n = parseFloat(i[5]))),
        n || 0
    );
}
function oe(t) {
    return (
        typeof t == 'object' &&
        t !== null &&
        t.constructor &&
        Object.prototype.toString.call(t).slice(8, -1) === 'Object'
    );
}
function $i(t) {
    return typeof window != 'undefined' &&
        typeof window.HTMLElement != 'undefined'
        ? t instanceof HTMLElement
        : t && (t.nodeType === 1 || t.nodeType === 11);
}
function A() {
    for (
        var t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            e = ['__proto__', 'constructor', 'prototype'],
            r = 1;
        r < arguments.length;
        r += 1
    ) {
        var i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
        if (i != null && !$i(i))
            for (
                var n = Object.keys(Object(i)).filter(function (d) {
                        return e.indexOf(d) < 0;
                    }),
                    a = 0,
                    s = n.length;
                a < s;
                a += 1
            ) {
                var l = n[a],
                    o = Object.getOwnPropertyDescriptor(i, l);
                o !== void 0 &&
                    o.enumerable &&
                    (oe(t[l]) && oe(i[l])
                        ? i[l].__swiper__
                            ? (t[l] = i[l])
                            : A(t[l], i[l])
                        : !oe(t[l]) && oe(i[l])
                        ? ((t[l] = {}),
                          i[l].__swiper__ ? (t[l] = i[l]) : A(t[l], i[l]))
                        : (t[l] = i[l]));
            }
    }
    return t;
}
function mt(t, e) {
    Object.keys(e).forEach(function (r) {
        oe(e[r]) &&
            Object.keys(e[r]).forEach(function (i) {
                typeof e[r][i] == 'function' && (e[r][i] = e[r][i].bind(t));
            }),
            (t[r] = e[r]);
    });
}
function ne(t) {
    return (
        t === void 0 && (t = ''),
        '.' +
            t
                .trim()
                .replace(/([\.:!\/])/g, '\\$1')
                .replace(/ /g, '.')
    );
}
function Ri(t, e, r, i) {
    var n = H();
    return (
        r &&
            Object.keys(i).forEach(function (a) {
                if (!e[a] && e.auto === !0) {
                    var s = n.createElement('div');
                    (s.className = i[a]), t.append(s), (e[a] = s);
                }
            }),
        e
    );
}
var Le;
function zi() {
    var t = N(),
        e = H();
    return {
        touch: !!(
            'ontouchstart' in t ||
            (t.DocumentTouch && e instanceof t.DocumentTouch)
        ),
        pointerEvents:
            !!t.PointerEvent &&
            'maxTouchPoints' in t.navigator &&
            t.navigator.maxTouchPoints >= 0,
        observer: (function () {
            return 'MutationObserver' in t || 'WebkitMutationObserver' in t;
        })(),
        passiveListener: (function () {
            var i = !1;
            try {
                var n = Object.defineProperty({}, 'passive', {
                    get: function () {
                        i = !0;
                    }
                });
                t.addEventListener('testPassiveListener', null, n);
            } catch {}
            return i;
        })(),
        gestures: (function () {
            return 'ongesturestart' in t;
        })()
    };
}
function gt() {
    return Le || (Le = zi()), Le;
}
var Oe;
function Ni(t) {
    var e = t === void 0 ? {} : t,
        r = e.userAgent,
        i = gt(),
        n = N(),
        a = n.navigator.platform,
        s = r || n.navigator.userAgent,
        l = { ios: !1, android: !1 },
        o = n.screen.width,
        d = n.screen.height,
        u = s.match(/(Android);?[\s\/]+([\d.]+)?/),
        p = s.match(/(iPad).*OS\s([\d_]+)/),
        f = s.match(/(iPod)(.*OS\s([\d_]+))?/),
        c = !p && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        v = a === 'Win32',
        h = a === 'MacIntel',
        S = [
            '1024x1366',
            '1366x1024',
            '834x1194',
            '1194x834',
            '834x1112',
            '1112x834',
            '768x1024',
            '1024x768',
            '820x1180',
            '1180x820',
            '810x1080',
            '1080x810'
        ];
    return (
        !p &&
            h &&
            i.touch &&
            S.indexOf(o + 'x' + d) >= 0 &&
            ((p = s.match(/(Version)\/([\d.]+)/)),
            p || (p = [0, 1, '13_0_0']),
            (h = !1)),
        u && !v && ((l.os = 'android'), (l.android = !0)),
        (p || c || f) && ((l.os = 'ios'), (l.ios = !0)),
        l
    );
}
function Gi(t) {
    return t === void 0 && (t = {}), Oe || (Oe = Ni(t)), Oe;
}
var Pe;
function Di() {
    var t = N();
    function e() {
        var r = t.navigator.userAgent.toLowerCase();
        return (
            r.indexOf('safari') >= 0 &&
            r.indexOf('chrome') < 0 &&
            r.indexOf('android') < 0
        );
    }
    return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: e(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            t.navigator.userAgent
        )
    };
}
function ki() {
    return Pe || (Pe = Di()), Pe;
}
var Hi = function () {
        var e = N();
        return typeof e.ResizeObserver != 'undefined';
    },
    Fi = {
        name: 'resize',
        create: function () {
            var e = this;
            A(e, {
                resize: {
                    observer: null,
                    createObserver: function () {
                        !e ||
                            e.destroyed ||
                            !e.initialized ||
                            ((e.resize.observer = new ResizeObserver(function (
                                i
                            ) {
                                var n = e.width,
                                    a = e.height,
                                    s = n,
                                    l = a;
                                i.forEach(function (o) {
                                    var d = o.contentBoxSize,
                                        u = o.contentRect,
                                        p = o.target;
                                    (p && p !== e.el) ||
                                        ((s = u
                                            ? u.width
                                            : (d[0] || d).inlineSize),
                                        (l = u
                                            ? u.height
                                            : (d[0] || d).blockSize));
                                }),
                                    (s !== n || l !== a) &&
                                        e.resize.resizeHandler();
                            })),
                            e.resize.observer.observe(e.el));
                    },
                    removeObserver: function () {
                        e.resize.observer &&
                            e.resize.observer.unobserve &&
                            e.el &&
                            (e.resize.observer.unobserve(e.el),
                            (e.resize.observer = null));
                    },
                    resizeHandler: function () {
                        !e ||
                            e.destroyed ||
                            !e.initialized ||
                            (e.emit('beforeResize'), e.emit('resize'));
                    },
                    orientationChangeHandler: function () {
                        !e ||
                            e.destroyed ||
                            !e.initialized ||
                            e.emit('orientationchange');
                    }
                }
            });
        },
        on: {
            init: function (e) {
                var r = N();
                if (e.params.resizeObserver && Hi()) {
                    e.resize.createObserver();
                    return;
                }
                r.addEventListener('resize', e.resize.resizeHandler),
                    r.addEventListener(
                        'orientationchange',
                        e.resize.orientationChangeHandler
                    );
            },
            destroy: function (e) {
                var r = N();
                e.resize.removeObserver(),
                    r.removeEventListener('resize', e.resize.resizeHandler),
                    r.removeEventListener(
                        'orientationchange',
                        e.resize.orientationChangeHandler
                    );
            }
        }
    };
function Ge() {
    return (
        (Ge =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) &&
                            (t[i] = r[i]);
                }
                return t;
            }),
        Ge.apply(this, arguments)
    );
}
var Vi = {
        attach: function (e, r) {
            r === void 0 && (r = {});
            var i = N(),
                n = this,
                a = i.MutationObserver || i.WebkitMutationObserver,
                s = new a(function (l) {
                    if (l.length === 1) {
                        n.emit('observerUpdate', l[0]);
                        return;
                    }
                    var o = function () {
                        n.emit('observerUpdate', l[0]);
                    };
                    i.requestAnimationFrame
                        ? i.requestAnimationFrame(o)
                        : i.setTimeout(o, 0);
                });
            s.observe(e, {
                attributes:
                    typeof r.attributes == 'undefined' ? !0 : r.attributes,
                childList: typeof r.childList == 'undefined' ? !0 : r.childList,
                characterData:
                    typeof r.characterData == 'undefined' ? !0 : r.characterData
            }),
                n.observer.observers.push(s);
        },
        init: function () {
            var e = this;
            if (!(!e.support.observer || !e.params.observer)) {
                if (e.params.observeParents)
                    for (var r = e.$el.parents(), i = 0; i < r.length; i += 1)
                        e.observer.attach(r[i]);
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                    e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
            }
        },
        destroy: function () {
            var e = this;
            e.observer.observers.forEach(function (r) {
                r.disconnect();
            }),
                (e.observer.observers = []);
        }
    },
    ji = {
        name: 'observer',
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function () {
            var e = this;
            mt(e, { observer: Ge({}, Vi, { observers: [] }) });
        },
        on: {
            init: function (e) {
                e.observer.init();
            },
            destroy: function (e) {
                e.observer.destroy();
            }
        }
    },
    Wi = {
        useParams: function (e) {
            var r = this;
            !r.modules ||
                Object.keys(r.modules).forEach(function (i) {
                    var n = r.modules[i];
                    n.params && A(e, n.params);
                });
        },
        useModules: function (e) {
            e === void 0 && (e = {});
            var r = this;
            !r.modules ||
                Object.keys(r.modules).forEach(function (i) {
                    var n = r.modules[i],
                        a = e[i] || {};
                    n.on &&
                        r.on &&
                        Object.keys(n.on).forEach(function (s) {
                            r.on(s, n.on[s]);
                        }),
                        n.create && n.create.bind(r)(a);
                });
        }
    },
    qi = {
        on: function (e, r, i) {
            var n = this;
            if (typeof r != 'function') return n;
            var a = i ? 'unshift' : 'push';
            return (
                e.split(' ').forEach(function (s) {
                    n.eventsListeners[s] || (n.eventsListeners[s] = []),
                        n.eventsListeners[s][a](r);
                }),
                n
            );
        },
        once: function (e, r, i) {
            var n = this;
            if (typeof r != 'function') return n;
            function a() {
                n.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                for (
                    var s = arguments.length, l = new Array(s), o = 0;
                    o < s;
                    o++
                )
                    l[o] = arguments[o];
                r.apply(n, l);
            }
            return (a.__emitterProxy = r), n.on(e, a, i);
        },
        onAny: function (e, r) {
            var i = this;
            if (typeof e != 'function') return i;
            var n = r ? 'unshift' : 'push';
            return (
                i.eventsAnyListeners.indexOf(e) < 0 &&
                    i.eventsAnyListeners[n](e),
                i
            );
        },
        offAny: function (e) {
            var r = this;
            if (!r.eventsAnyListeners) return r;
            var i = r.eventsAnyListeners.indexOf(e);
            return i >= 0 && r.eventsAnyListeners.splice(i, 1), r;
        },
        off: function (e, r) {
            var i = this;
            return (
                i.eventsListeners &&
                    e.split(' ').forEach(function (n) {
                        typeof r == 'undefined'
                            ? (i.eventsListeners[n] = [])
                            : i.eventsListeners[n] &&
                              i.eventsListeners[n].forEach(function (a, s) {
                                  (a === r ||
                                      (a.__emitterProxy &&
                                          a.__emitterProxy === r)) &&
                                      i.eventsListeners[n].splice(s, 1);
                              });
                    }),
                i
            );
        },
        emit: function () {
            var e = this;
            if (!e.eventsListeners) return e;
            for (
                var r, i, n, a = arguments.length, s = new Array(a), l = 0;
                l < a;
                l++
            )
                s[l] = arguments[l];
            typeof s[0] == 'string' || Array.isArray(s[0])
                ? ((r = s[0]), (i = s.slice(1, s.length)), (n = e))
                : ((r = s[0].events), (i = s[0].data), (n = s[0].context || e)),
                i.unshift(n);
            var o = Array.isArray(r) ? r : r.split(' ');
            return (
                o.forEach(function (d) {
                    e.eventsAnyListeners &&
                        e.eventsAnyListeners.length &&
                        e.eventsAnyListeners.forEach(function (u) {
                            u.apply(n, [d].concat(i));
                        }),
                        e.eventsListeners &&
                            e.eventsListeners[d] &&
                            e.eventsListeners[d].forEach(function (u) {
                                u.apply(n, i);
                            });
                }),
                e
            );
        }
    };
function Yi() {
    var t = this,
        e,
        r,
        i = t.$el;
    typeof t.params.width != 'undefined' && t.params.width !== null
        ? (e = t.params.width)
        : (e = i[0].clientWidth),
        typeof t.params.height != 'undefined' && t.params.height !== null
            ? (r = t.params.height)
            : (r = i[0].clientHeight),
        !((e === 0 && t.isHorizontal()) || (r === 0 && t.isVertical())) &&
            ((e =
                e -
                parseInt(i.css('padding-left') || 0, 10) -
                parseInt(i.css('padding-right') || 0, 10)),
            (r =
                r -
                parseInt(i.css('padding-top') || 0, 10) -
                parseInt(i.css('padding-bottom') || 0, 10)),
            Number.isNaN(e) && (e = 0),
            Number.isNaN(r) && (r = 0),
            A(t, { width: e, height: r, size: t.isHorizontal() ? e : r }));
}
function Xi() {
    var t = this;
    function e(G) {
        return t.isHorizontal()
            ? G
            : {
                  width: 'height',
                  'margin-top': 'margin-left',
                  'margin-bottom ': 'margin-right',
                  'margin-left': 'margin-top',
                  'margin-right': 'margin-bottom',
                  'padding-left': 'padding-top',
                  'padding-right': 'padding-bottom',
                  marginRight: 'marginBottom'
              }[G];
    }
    function r(G, Z) {
        return parseFloat(G.getPropertyValue(e(Z)) || 0);
    }
    var i = t.params,
        n = t.$wrapperEl,
        a = t.size,
        s = t.rtlTranslate,
        l = t.wrongRTL,
        o = t.virtual && i.virtual.enabled,
        d = o ? t.virtual.slides.length : t.slides.length,
        u = n.children('.' + t.params.slideClass),
        p = o ? t.virtual.slides.length : u.length,
        f = [],
        c = [],
        v = [],
        h = i.slidesOffsetBefore;
    typeof h == 'function' && (h = i.slidesOffsetBefore.call(t));
    var S = i.slidesOffsetAfter;
    typeof S == 'function' && (S = i.slidesOffsetAfter.call(t));
    var y = t.snapGrid.length,
        E = t.slidesGrid.length,
        b = i.spaceBetween,
        m = -h,
        O = 0,
        $ = 0;
    if (typeof a != 'undefined') {
        typeof b == 'string' &&
            b.indexOf('%') >= 0 &&
            (b = (parseFloat(b.replace('%', '')) / 100) * a),
            (t.virtualSize = -b),
            s
                ? u.css({ marginLeft: '', marginBottom: '', marginTop: '' })
                : u.css({ marginRight: '', marginBottom: '', marginTop: '' });
        var T;
        i.slidesPerColumn > 1 &&
            (Math.floor(p / i.slidesPerColumn) === p / t.params.slidesPerColumn
                ? (T = p)
                : (T = Math.ceil(p / i.slidesPerColumn) * i.slidesPerColumn),
            i.slidesPerView !== 'auto' &&
                i.slidesPerColumnFill === 'row' &&
                (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));
        for (
            var w,
                B = i.slidesPerColumn,
                x = T / B,
                _ = Math.floor(p / i.slidesPerColumn),
                L = 0;
            L < p;
            L += 1
        ) {
            w = 0;
            var M = u.eq(L);
            if (i.slidesPerColumn > 1) {
                var V = void 0,
                    R = void 0,
                    D = void 0;
                if (i.slidesPerColumnFill === 'row' && i.slidesPerGroup > 1) {
                    var J = Math.floor(
                            L / (i.slidesPerGroup * i.slidesPerColumn)
                        ),
                        Q = L - i.slidesPerColumn * i.slidesPerGroup * J,
                        pe =
                            J === 0
                                ? i.slidesPerGroup
                                : Math.min(
                                      Math.ceil(
                                          (p - J * B * i.slidesPerGroup) / B
                                      ),
                                      i.slidesPerGroup
                                  );
                    (D = Math.floor(Q / pe)),
                        (R = Q - D * pe + J * i.slidesPerGroup),
                        (V = R + (D * T) / B),
                        M.css({
                            '-webkit-box-ordinal-group': V,
                            '-moz-box-ordinal-group': V,
                            '-ms-flex-order': V,
                            '-webkit-order': V,
                            order: V
                        });
                } else
                    i.slidesPerColumnFill === 'column'
                        ? ((R = Math.floor(L / B)),
                          (D = L - R * B),
                          (R > _ || (R === _ && D === B - 1)) &&
                              ((D += 1), D >= B && ((D = 0), (R += 1))))
                        : ((D = Math.floor(L / x)), (R = L - D * x));
                M.css(
                    e('margin-top'),
                    D !== 0 ? i.spaceBetween && i.spaceBetween + 'px' : ''
                );
            }
            if (M.css('display') !== 'none') {
                if (i.slidesPerView === 'auto') {
                    var ie = getComputedStyle(M[0]),
                        be = M[0].style.transform,
                        ye = M[0].style.webkitTransform;
                    if (
                        (be && (M[0].style.transform = 'none'),
                        ye && (M[0].style.webkitTransform = 'none'),
                        i.roundLengths)
                    )
                        w = t.isHorizontal()
                            ? M.outerWidth(!0)
                            : M.outerHeight(!0);
                    else {
                        var Xe = r(ie, 'width'),
                            Mt = r(ie, 'padding-left'),
                            Lt = r(ie, 'padding-right'),
                            Ue = r(ie, 'margin-left'),
                            Ke = r(ie, 'margin-right'),
                            Je = ie.getPropertyValue('box-sizing');
                        if (Je && Je === 'border-box') w = Xe + Ue + Ke;
                        else {
                            var Qe = M[0],
                                Ot = Qe.clientWidth,
                                Pt = Qe.offsetWidth;
                            w = Xe + Mt + Lt + Ue + Ke + (Pt - Ot);
                        }
                    }
                    be && (M[0].style.transform = be),
                        ye && (M[0].style.webkitTransform = ye),
                        i.roundLengths && (w = Math.floor(w));
                } else
                    (w = (a - (i.slidesPerView - 1) * b) / i.slidesPerView),
                        i.roundLengths && (w = Math.floor(w)),
                        u[L] && (u[L].style[e('width')] = w + 'px');
                u[L] && (u[L].swiperSlideSize = w),
                    v.push(w),
                    i.centeredSlides
                        ? ((m = m + w / 2 + O / 2 + b),
                          O === 0 && L !== 0 && (m = m - a / 2 - b),
                          L === 0 && (m = m - a / 2 - b),
                          Math.abs(m) < 1 / 1e3 && (m = 0),
                          i.roundLengths && (m = Math.floor(m)),
                          $ % i.slidesPerGroup === 0 && f.push(m),
                          c.push(m))
                        : (i.roundLengths && (m = Math.floor(m)),
                          ($ - Math.min(t.params.slidesPerGroupSkip, $)) %
                              t.params.slidesPerGroup ===
                              0 && f.push(m),
                          c.push(m),
                          (m = m + w + b)),
                    (t.virtualSize += w + b),
                    (O = w),
                    ($ += 1);
            }
        }
        t.virtualSize = Math.max(t.virtualSize, a) + S;
        var re;
        if (
            (s &&
                l &&
                (i.effect === 'slide' || i.effect === 'coverflow') &&
                n.css({ width: t.virtualSize + i.spaceBetween + 'px' }),
            i.setWrapperSize)
        ) {
            var Te;
            n.css(
                ((Te = {}),
                (Te[e('width')] = t.virtualSize + i.spaceBetween + 'px'),
                Te)
            );
        }
        if (i.slidesPerColumn > 1) {
            var Ce;
            if (
                ((t.virtualSize = (w + i.spaceBetween) * T),
                (t.virtualSize =
                    Math.ceil(t.virtualSize / i.slidesPerColumn) -
                    i.spaceBetween),
                n.css(
                    ((Ce = {}),
                    (Ce[e('width')] = t.virtualSize + i.spaceBetween + 'px'),
                    Ce)
                ),
                i.centeredSlides)
            ) {
                re = [];
                for (var ce = 0; ce < f.length; ce += 1) {
                    var Ee = f[ce];
                    i.roundLengths && (Ee = Math.floor(Ee)),
                        f[ce] < t.virtualSize + f[0] && re.push(Ee);
                }
                f = re;
            }
        }
        if (!i.centeredSlides) {
            re = [];
            for (var ve = 0; ve < f.length; ve += 1) {
                var xe = f[ve];
                i.roundLengths && (xe = Math.floor(xe)),
                    f[ve] <= t.virtualSize - a && re.push(xe);
            }
            (f = re),
                Math.floor(t.virtualSize - a) - Math.floor(f[f.length - 1]) >
                    1 && f.push(t.virtualSize - a);
        }
        if ((f.length === 0 && (f = [0]), i.spaceBetween !== 0)) {
            var _e,
                It = t.isHorizontal() && s ? 'marginLeft' : e('marginRight');
            u.filter(function (G, Z) {
                return i.cssMode ? Z !== u.length - 1 : !0;
            }).css(((_e = {}), (_e[It] = b + 'px'), _e));
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
            var Me = 0;
            v.forEach(function (G) {
                Me += G + (i.spaceBetween ? i.spaceBetween : 0);
            }),
                (Me -= i.spaceBetween);
            var Ze = Me - a;
            f = f.map(function (G) {
                return G < 0 ? -h : G > Ze ? Ze + S : G;
            });
        }
        if (i.centerInsufficientSlides) {
            var he = 0;
            if (
                (v.forEach(function (G) {
                    he += G + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (he -= i.spaceBetween),
                he < a)
            ) {
                var et = (a - he) / 2;
                f.forEach(function (G, Z) {
                    f[Z] = G - et;
                }),
                    c.forEach(function (G, Z) {
                        c[Z] = G + et;
                    });
            }
        }
        A(t, { slides: u, snapGrid: f, slidesGrid: c, slidesSizesGrid: v }),
            p !== d && t.emit('slidesLengthChange'),
            f.length !== y &&
                (t.params.watchOverflow && t.checkOverflow(),
                t.emit('snapGridLengthChange')),
            c.length !== E && t.emit('slidesGridLengthChange'),
            (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                t.updateSlidesOffset();
    }
}
function Ui(t) {
    var e = this,
        r = [],
        i = e.virtual && e.params.virtual.enabled,
        n = 0,
        a;
    typeof t == 'number'
        ? e.setTransition(t)
        : t === !0 && e.setTransition(e.params.speed);
    var s = function (u) {
        return i
            ? e.slides.filter(function (p) {
                  return (
                      parseInt(
                          p.getAttribute('data-swiper-slide-index'),
                          10
                      ) === u
                  );
              })[0]
            : e.slides.eq(u)[0];
    };
    if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            e.visibleSlides.each(function (d) {
                r.push(d);
            });
        else
            for (a = 0; a < Math.ceil(e.params.slidesPerView); a += 1) {
                var l = e.activeIndex + a;
                if (l > e.slides.length && !i) break;
                r.push(s(l));
            }
    else r.push(s(e.activeIndex));
    for (a = 0; a < r.length; a += 1)
        if (typeof r[a] != 'undefined') {
            var o = r[a].offsetHeight;
            n = o > n ? o : n;
        }
    n && e.$wrapperEl.css('height', n + 'px');
}
function Ki() {
    for (var t = this, e = t.slides, r = 0; r < e.length; r += 1)
        e[r].swiperSlideOffset = t.isHorizontal()
            ? e[r].offsetLeft
            : e[r].offsetTop;
}
function Ji(t) {
    t === void 0 && (t = (this && this.translate) || 0);
    var e = this,
        r = e.params,
        i = e.slides,
        n = e.rtlTranslate;
    if (i.length !== 0) {
        typeof i[0].swiperSlideOffset == 'undefined' && e.updateSlidesOffset();
        var a = -t;
        n && (a = t),
            i.removeClass(r.slideVisibleClass),
            (e.visibleSlidesIndexes = []),
            (e.visibleSlides = []);
        for (var s = 0; s < i.length; s += 1) {
            var l = i[s],
                o =
                    (a +
                        (r.centeredSlides ? e.minTranslate() : 0) -
                        l.swiperSlideOffset) /
                    (l.swiperSlideSize + r.spaceBetween);
            if (r.watchSlidesVisibility || (r.centeredSlides && r.autoHeight)) {
                var d = -(a - l.swiperSlideOffset),
                    u = d + e.slidesSizesGrid[s],
                    p =
                        (d >= 0 && d < e.size - 1) ||
                        (u > 1 && u <= e.size) ||
                        (d <= 0 && u >= e.size);
                p &&
                    (e.visibleSlides.push(l),
                    e.visibleSlidesIndexes.push(s),
                    i.eq(s).addClass(r.slideVisibleClass));
            }
            l.progress = n ? -o : o;
        }
        e.visibleSlides = g(e.visibleSlides);
    }
}
function Qi(t) {
    var e = this;
    if (typeof t == 'undefined') {
        var r = e.rtlTranslate ? -1 : 1;
        t = (e && e.translate && e.translate * r) || 0;
    }
    var i = e.params,
        n = e.maxTranslate() - e.minTranslate(),
        a = e.progress,
        s = e.isBeginning,
        l = e.isEnd,
        o = s,
        d = l;
    n === 0
        ? ((a = 0), (s = !0), (l = !0))
        : ((a = (t - e.minTranslate()) / n), (s = a <= 0), (l = a >= 1)),
        A(e, { progress: a, isBeginning: s, isEnd: l }),
        (i.watchSlidesProgress ||
            i.watchSlidesVisibility ||
            (i.centeredSlides && i.autoHeight)) &&
            e.updateSlidesProgress(t),
        s && !o && e.emit('reachBeginning toEdge'),
        l && !d && e.emit('reachEnd toEdge'),
        ((o && !s) || (d && !l)) && e.emit('fromEdge'),
        e.emit('progress', a);
}
function Zi() {
    var t = this,
        e = t.slides,
        r = t.params,
        i = t.$wrapperEl,
        n = t.activeIndex,
        a = t.realIndex,
        s = t.virtual && r.virtual.enabled;
    e.removeClass(
        r.slideActiveClass +
            ' ' +
            r.slideNextClass +
            ' ' +
            r.slidePrevClass +
            ' ' +
            r.slideDuplicateActiveClass +
            ' ' +
            r.slideDuplicateNextClass +
            ' ' +
            r.slideDuplicatePrevClass
    );
    var l;
    s
        ? (l = t.$wrapperEl.find(
              '.' + r.slideClass + '[data-swiper-slide-index="' + n + '"]'
          ))
        : (l = e.eq(n)),
        l.addClass(r.slideActiveClass),
        r.loop &&
            (l.hasClass(r.slideDuplicateClass)
                ? i
                      .children(
                          '.' +
                              r.slideClass +
                              ':not(.' +
                              r.slideDuplicateClass +
                              ')[data-swiper-slide-index="' +
                              a +
                              '"]'
                      )
                      .addClass(r.slideDuplicateActiveClass)
                : i
                      .children(
                          '.' +
                              r.slideClass +
                              '.' +
                              r.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              a +
                              '"]'
                      )
                      .addClass(r.slideDuplicateActiveClass));
    var o = l
        .nextAll('.' + r.slideClass)
        .eq(0)
        .addClass(r.slideNextClass);
    r.loop && o.length === 0 && ((o = e.eq(0)), o.addClass(r.slideNextClass));
    var d = l
        .prevAll('.' + r.slideClass)
        .eq(0)
        .addClass(r.slidePrevClass);
    r.loop && d.length === 0 && ((d = e.eq(-1)), d.addClass(r.slidePrevClass)),
        r.loop &&
            (o.hasClass(r.slideDuplicateClass)
                ? i
                      .children(
                          '.' +
                              r.slideClass +
                              ':not(.' +
                              r.slideDuplicateClass +
                              ')[data-swiper-slide-index="' +
                              o.attr('data-swiper-slide-index') +
                              '"]'
                      )
                      .addClass(r.slideDuplicateNextClass)
                : i
                      .children(
                          '.' +
                              r.slideClass +
                              '.' +
                              r.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              o.attr('data-swiper-slide-index') +
                              '"]'
                      )
                      .addClass(r.slideDuplicateNextClass),
            d.hasClass(r.slideDuplicateClass)
                ? i
                      .children(
                          '.' +
                              r.slideClass +
                              ':not(.' +
                              r.slideDuplicateClass +
                              ')[data-swiper-slide-index="' +
                              d.attr('data-swiper-slide-index') +
                              '"]'
                      )
                      .addClass(r.slideDuplicatePrevClass)
                : i
                      .children(
                          '.' +
                              r.slideClass +
                              '.' +
                              r.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              d.attr('data-swiper-slide-index') +
                              '"]'
                      )
                      .addClass(r.slideDuplicatePrevClass)),
        t.emitSlidesClasses();
}
function er(t) {
    var e = this,
        r = e.rtlTranslate ? e.translate : -e.translate,
        i = e.slidesGrid,
        n = e.snapGrid,
        a = e.params,
        s = e.activeIndex,
        l = e.realIndex,
        o = e.snapIndex,
        d = t,
        u;
    if (typeof d == 'undefined') {
        for (var p = 0; p < i.length; p += 1)
            typeof i[p + 1] != 'undefined'
                ? r >= i[p] && r < i[p + 1] - (i[p + 1] - i[p]) / 2
                    ? (d = p)
                    : r >= i[p] && r < i[p + 1] && (d = p + 1)
                : r >= i[p] && (d = p);
        a.normalizeSlideIndex && (d < 0 || typeof d == 'undefined') && (d = 0);
    }
    if (n.indexOf(r) >= 0) u = n.indexOf(r);
    else {
        var f = Math.min(a.slidesPerGroupSkip, d);
        u = f + Math.floor((d - f) / a.slidesPerGroup);
    }
    if ((u >= n.length && (u = n.length - 1), d === s)) {
        u !== o && ((e.snapIndex = u), e.emit('snapIndexChange'));
        return;
    }
    var c = parseInt(e.slides.eq(d).attr('data-swiper-slide-index') || d, 10);
    A(e, { snapIndex: u, realIndex: c, previousIndex: s, activeIndex: d }),
        e.emit('activeIndexChange'),
        e.emit('snapIndexChange'),
        l !== c && e.emit('realIndexChange'),
        (e.initialized || e.params.runCallbacksOnInit) && e.emit('slideChange');
}
function tr(t) {
    var e = this,
        r = e.params,
        i = g(t.target).closest('.' + r.slideClass)[0],
        n = !1,
        a;
    if (i) {
        for (var s = 0; s < e.slides.length; s += 1)
            if (e.slides[s] === i) {
                (n = !0), (a = s);
                break;
            }
    }
    if (i && n)
        (e.clickedSlide = i),
            e.virtual && e.params.virtual.enabled
                ? (e.clickedIndex = parseInt(
                      g(i).attr('data-swiper-slide-index'),
                      10
                  ))
                : (e.clickedIndex = a);
    else {
        (e.clickedSlide = void 0), (e.clickedIndex = void 0);
        return;
    }
    r.slideToClickedSlide &&
        e.clickedIndex !== void 0 &&
        e.clickedIndex !== e.activeIndex &&
        e.slideToClickedSlide();
}
var ir = {
    updateSize: Yi,
    updateSlides: Xi,
    updateAutoHeight: Ui,
    updateSlidesOffset: Ki,
    updateSlidesProgress: Ji,
    updateProgress: Qi,
    updateSlidesClasses: Zi,
    updateActiveIndex: er,
    updateClickedSlide: tr
};
function rr(t) {
    t === void 0 && (t = this.isHorizontal() ? 'x' : 'y');
    var e = this,
        r = e.params,
        i = e.rtlTranslate,
        n = e.translate,
        a = e.$wrapperEl;
    if (r.virtualTranslate) return i ? -n : n;
    if (r.cssMode) return n;
    var s = Ai(a[0], t);
    return i && (s = -s), s || 0;
}
function nr(t, e) {
    var r = this,
        i = r.rtlTranslate,
        n = r.params,
        a = r.$wrapperEl,
        s = r.wrapperEl,
        l = r.progress,
        o = 0,
        d = 0,
        u = 0;
    r.isHorizontal() ? (o = i ? -t : t) : (d = t),
        n.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
        n.cssMode
            ? (s[r.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                  r.isHorizontal() ? -o : -d)
            : n.virtualTranslate ||
              a.transform('translate3d(' + o + 'px, ' + d + 'px, ' + u + 'px)'),
        (r.previousTranslate = r.translate),
        (r.translate = r.isHorizontal() ? o : d);
    var p,
        f = r.maxTranslate() - r.minTranslate();
    f === 0 ? (p = 0) : (p = (t - r.minTranslate()) / f),
        p !== l && r.updateProgress(t),
        r.emit('setTranslate', r.translate, e);
}
function ar() {
    return -this.snapGrid[0];
}
function sr() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function lr(t, e, r, i, n) {
    t === void 0 && (t = 0),
        e === void 0 && (e = this.params.speed),
        r === void 0 && (r = !0),
        i === void 0 && (i = !0);
    var a = this,
        s = a.params,
        l = a.wrapperEl;
    if (a.animating && s.preventInteractionOnTransition) return !1;
    var o = a.minTranslate(),
        d = a.maxTranslate(),
        u;
    if (
        (i && t > o ? (u = o) : i && t < d ? (u = d) : (u = t),
        a.updateProgress(u),
        s.cssMode)
    ) {
        var p = a.isHorizontal();
        if (e === 0) l[p ? 'scrollLeft' : 'scrollTop'] = -u;
        else if (l.scrollTo) {
            var f;
            l.scrollTo(
                ((f = {}),
                (f[p ? 'left' : 'top'] = -u),
                (f.behavior = 'smooth'),
                f)
            );
        } else l[p ? 'scrollLeft' : 'scrollTop'] = -u;
        return !0;
    }
    return (
        e === 0
            ? (a.setTransition(0),
              a.setTranslate(u),
              r &&
                  (a.emit('beforeTransitionStart', e, n),
                  a.emit('transitionEnd')))
            : (a.setTransition(e),
              a.setTranslate(u),
              r &&
                  (a.emit('beforeTransitionStart', e, n),
                  a.emit('transitionStart')),
              a.animating ||
                  ((a.animating = !0),
                  a.onTranslateToWrapperTransitionEnd ||
                      (a.onTranslateToWrapperTransitionEnd = function (v) {
                          !a ||
                              a.destroyed ||
                              (v.target === this &&
                                  (a.$wrapperEl[0].removeEventListener(
                                      'transitionend',
                                      a.onTranslateToWrapperTransitionEnd
                                  ),
                                  a.$wrapperEl[0].removeEventListener(
                                      'webkitTransitionEnd',
                                      a.onTranslateToWrapperTransitionEnd
                                  ),
                                  (a.onTranslateToWrapperTransitionEnd = null),
                                  delete a.onTranslateToWrapperTransitionEnd,
                                  r && a.emit('transitionEnd')));
                      }),
                  a.$wrapperEl[0].addEventListener(
                      'transitionend',
                      a.onTranslateToWrapperTransitionEnd
                  ),
                  a.$wrapperEl[0].addEventListener(
                      'webkitTransitionEnd',
                      a.onTranslateToWrapperTransitionEnd
                  ))),
        !0
    );
}
var or = {
    getTranslate: rr,
    setTranslate: nr,
    minTranslate: ar,
    maxTranslate: sr,
    translateTo: lr
};
function dr(t, e) {
    var r = this;
    r.params.cssMode || r.$wrapperEl.transition(t),
        r.emit('setTransition', t, e);
}
function ur(t, e) {
    t === void 0 && (t = !0);
    var r = this,
        i = r.activeIndex,
        n = r.params,
        a = r.previousIndex;
    if (!n.cssMode) {
        n.autoHeight && r.updateAutoHeight();
        var s = e;
        if (
            (s || (i > a ? (s = 'next') : i < a ? (s = 'prev') : (s = 'reset')),
            r.emit('transitionStart'),
            t && i !== a)
        ) {
            if (s === 'reset') {
                r.emit('slideResetTransitionStart');
                return;
            }
            r.emit('slideChangeTransitionStart'),
                s === 'next'
                    ? r.emit('slideNextTransitionStart')
                    : r.emit('slidePrevTransitionStart');
        }
    }
}
function fr(t, e) {
    t === void 0 && (t = !0);
    var r = this,
        i = r.activeIndex,
        n = r.previousIndex,
        a = r.params;
    if (((r.animating = !1), !a.cssMode)) {
        r.setTransition(0);
        var s = e;
        if (
            (s || (i > n ? (s = 'next') : i < n ? (s = 'prev') : (s = 'reset')),
            r.emit('transitionEnd'),
            t && i !== n)
        ) {
            if (s === 'reset') {
                r.emit('slideResetTransitionEnd');
                return;
            }
            r.emit('slideChangeTransitionEnd'),
                s === 'next'
                    ? r.emit('slideNextTransitionEnd')
                    : r.emit('slidePrevTransitionEnd');
        }
    }
}
var pr = { setTransition: dr, transitionStart: ur, transitionEnd: fr };
function cr(t, e, r, i, n) {
    if (
        (t === void 0 && (t = 0),
        e === void 0 && (e = this.params.speed),
        r === void 0 && (r = !0),
        typeof t != 'number' && typeof t != 'string')
    )
        throw new Error(
            "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                typeof t +
                '] given.'
        );
    if (typeof t == 'string') {
        var a = parseInt(t, 10),
            s = isFinite(a);
        if (!s)
            throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                    t +
                    '] given.'
            );
        t = a;
    }
    var l = this,
        o = t;
    o < 0 && (o = 0);
    var d = l.params,
        u = l.snapGrid,
        p = l.slidesGrid,
        f = l.previousIndex,
        c = l.activeIndex,
        v = l.rtlTranslate,
        h = l.wrapperEl,
        S = l.enabled;
    if ((l.animating && d.preventInteractionOnTransition) || (!S && !i && !n))
        return !1;
    var y = Math.min(l.params.slidesPerGroupSkip, o),
        E = y + Math.floor((o - y) / l.params.slidesPerGroup);
    E >= u.length && (E = u.length - 1),
        (c || d.initialSlide || 0) === (f || 0) &&
            r &&
            l.emit('beforeSlideChangeStart');
    var b = -u[E];
    if ((l.updateProgress(b), d.normalizeSlideIndex))
        for (var m = 0; m < p.length; m += 1) {
            var O = -Math.floor(b * 100),
                $ = Math.floor(p[m] * 100),
                T = Math.floor(p[m + 1] * 100);
            typeof p[m + 1] != 'undefined'
                ? O >= $ && O < T - (T - $) / 2
                    ? (o = m)
                    : O >= $ && O < T && (o = m + 1)
                : O >= $ && (o = m);
        }
    if (
        l.initialized &&
        o !== c &&
        ((!l.allowSlideNext && b < l.translate && b < l.minTranslate()) ||
            (!l.allowSlidePrev &&
                b > l.translate &&
                b > l.maxTranslate() &&
                (c || 0) !== o))
    )
        return !1;
    var w;
    if (
        (o > c ? (w = 'next') : o < c ? (w = 'prev') : (w = 'reset'),
        (v && -b === l.translate) || (!v && b === l.translate))
    )
        return (
            l.updateActiveIndex(o),
            d.autoHeight && l.updateAutoHeight(),
            l.updateSlidesClasses(),
            d.effect !== 'slide' && l.setTranslate(b),
            w !== 'reset' && (l.transitionStart(r, w), l.transitionEnd(r, w)),
            !1
        );
    if (d.cssMode) {
        var B = l.isHorizontal(),
            x = -b;
        if ((v && (x = h.scrollWidth - h.offsetWidth - x), e === 0))
            h[B ? 'scrollLeft' : 'scrollTop'] = x;
        else if (h.scrollTo) {
            var _;
            h.scrollTo(
                ((_ = {}),
                (_[B ? 'left' : 'top'] = x),
                (_.behavior = 'smooth'),
                _)
            );
        } else h[B ? 'scrollLeft' : 'scrollTop'] = x;
        return !0;
    }
    return (
        e === 0
            ? (l.setTransition(0),
              l.setTranslate(b),
              l.updateActiveIndex(o),
              l.updateSlidesClasses(),
              l.emit('beforeTransitionStart', e, i),
              l.transitionStart(r, w),
              l.transitionEnd(r, w))
            : (l.setTransition(e),
              l.setTranslate(b),
              l.updateActiveIndex(o),
              l.updateSlidesClasses(),
              l.emit('beforeTransitionStart', e, i),
              l.transitionStart(r, w),
              l.animating ||
                  ((l.animating = !0),
                  l.onSlideToWrapperTransitionEnd ||
                      (l.onSlideToWrapperTransitionEnd = function (M) {
                          !l ||
                              l.destroyed ||
                              (M.target === this &&
                                  (l.$wrapperEl[0].removeEventListener(
                                      'transitionend',
                                      l.onSlideToWrapperTransitionEnd
                                  ),
                                  l.$wrapperEl[0].removeEventListener(
                                      'webkitTransitionEnd',
                                      l.onSlideToWrapperTransitionEnd
                                  ),
                                  (l.onSlideToWrapperTransitionEnd = null),
                                  delete l.onSlideToWrapperTransitionEnd,
                                  l.transitionEnd(r, w)));
                      }),
                  l.$wrapperEl[0].addEventListener(
                      'transitionend',
                      l.onSlideToWrapperTransitionEnd
                  ),
                  l.$wrapperEl[0].addEventListener(
                      'webkitTransitionEnd',
                      l.onSlideToWrapperTransitionEnd
                  ))),
        !0
    );
}
function vr(t, e, r, i) {
    t === void 0 && (t = 0),
        e === void 0 && (e = this.params.speed),
        r === void 0 && (r = !0);
    var n = this,
        a = t;
    return n.params.loop && (a += n.loopedSlides), n.slideTo(a, e, r, i);
}
function hr(t, e, r) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
    var i = this,
        n = i.params,
        a = i.animating,
        s = i.enabled;
    if (!s) return i;
    var l = i.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
    if (n.loop) {
        if (a && n.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
    }
    return i.slideTo(i.activeIndex + l, t, e, r);
}
function mr(t, e, r) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
    var i = this,
        n = i.params,
        a = i.animating,
        s = i.snapGrid,
        l = i.slidesGrid,
        o = i.rtlTranslate,
        d = i.enabled;
    if (!d) return i;
    if (n.loop) {
        if (a && n.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
    }
    var u = o ? i.translate : -i.translate;
    function p(S) {
        return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S);
    }
    var f = p(u),
        c = s.map(function (S) {
            return p(S);
        }),
        v = s[c.indexOf(f) - 1];
    typeof v == 'undefined' &&
        n.cssMode &&
        s.forEach(function (S) {
            !v && f >= S && (v = S);
        });
    var h;
    return (
        typeof v != 'undefined' &&
            ((h = l.indexOf(v)), h < 0 && (h = i.activeIndex - 1)),
        i.slideTo(h, t, e, r)
    );
}
function gr(t, e, r) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
    var i = this;
    return i.slideTo(i.activeIndex, t, e, r);
}
function wr(t, e, r, i) {
    t === void 0 && (t = this.params.speed),
        e === void 0 && (e = !0),
        i === void 0 && (i = 0.5);
    var n = this,
        a = n.activeIndex,
        s = Math.min(n.params.slidesPerGroupSkip, a),
        l = s + Math.floor((a - s) / n.params.slidesPerGroup),
        o = n.rtlTranslate ? n.translate : -n.translate;
    if (o >= n.snapGrid[l]) {
        var d = n.snapGrid[l],
            u = n.snapGrid[l + 1];
        o - d > (u - d) * i && (a += n.params.slidesPerGroup);
    } else {
        var p = n.snapGrid[l - 1],
            f = n.snapGrid[l];
        o - p <= (f - p) * i && (a -= n.params.slidesPerGroup);
    }
    return (
        (a = Math.max(a, 0)),
        (a = Math.min(a, n.slidesGrid.length - 1)),
        n.slideTo(a, t, e, r)
    );
}
function Sr() {
    var t = this,
        e = t.params,
        r = t.$wrapperEl,
        i =
            e.slidesPerView === 'auto'
                ? t.slidesPerViewDynamic()
                : e.slidesPerView,
        n = t.clickedIndex,
        a;
    if (e.loop) {
        if (t.animating) return;
        (a = parseInt(g(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
            e.centeredSlides
                ? n < t.loopedSlides - i / 2 ||
                  n > t.slides.length - t.loopedSlides + i / 2
                    ? (t.loopFix(),
                      (n = r
                          .children(
                              '.' +
                                  e.slideClass +
                                  '[data-swiper-slide-index="' +
                                  a +
                                  '"]:not(.' +
                                  e.slideDuplicateClass +
                                  ')'
                          )
                          .eq(0)
                          .index()),
                      Ne(function () {
                          t.slideTo(n);
                      }))
                    : t.slideTo(n)
                : n > t.slides.length - i
                ? (t.loopFix(),
                  (n = r
                      .children(
                          '.' +
                              e.slideClass +
                              '[data-swiper-slide-index="' +
                              a +
                              '"]:not(.' +
                              e.slideDuplicateClass +
                              ')'
                      )
                      .eq(0)
                      .index()),
                  Ne(function () {
                      t.slideTo(n);
                  }))
                : t.slideTo(n);
    } else t.slideTo(n);
}
var br = {
    slideTo: cr,
    slideToLoop: vr,
    slideNext: hr,
    slidePrev: mr,
    slideReset: gr,
    slideToClosest: wr,
    slideToClickedSlide: Sr
};
function yr() {
    var t = this,
        e = H(),
        r = t.params,
        i = t.$wrapperEl;
    i.children('.' + r.slideClass + '.' + r.slideDuplicateClass).remove();
    var n = i.children('.' + r.slideClass);
    if (r.loopFillGroupWithBlank) {
        var a = r.slidesPerGroup - (n.length % r.slidesPerGroup);
        if (a !== r.slidesPerGroup) {
            for (var s = 0; s < a; s += 1) {
                var l = g(e.createElement('div')).addClass(
                    r.slideClass + ' ' + r.slideBlankClass
                );
                i.append(l);
            }
            n = i.children('.' + r.slideClass);
        }
    }
    r.slidesPerView === 'auto' &&
        !r.loopedSlides &&
        (r.loopedSlides = n.length),
        (t.loopedSlides = Math.ceil(
            parseFloat(r.loopedSlides || r.slidesPerView, 10)
        )),
        (t.loopedSlides += r.loopAdditionalSlides),
        t.loopedSlides > n.length && (t.loopedSlides = n.length);
    var o = [],
        d = [];
    n.each(function (f, c) {
        var v = g(f);
        c < t.loopedSlides && d.push(f),
            c < n.length && c >= n.length - t.loopedSlides && o.push(f),
            v.attr('data-swiper-slide-index', c);
    });
    for (var u = 0; u < d.length; u += 1)
        i.append(g(d[u].cloneNode(!0)).addClass(r.slideDuplicateClass));
    for (var p = o.length - 1; p >= 0; p -= 1)
        i.prepend(g(o[p].cloneNode(!0)).addClass(r.slideDuplicateClass));
}
function Tr() {
    var t = this;
    t.emit('beforeLoopFix');
    var e = t.activeIndex,
        r = t.slides,
        i = t.loopedSlides,
        n = t.allowSlidePrev,
        a = t.allowSlideNext,
        s = t.snapGrid,
        l = t.rtlTranslate,
        o;
    (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
    var d = -s[e],
        u = d - t.getTranslate();
    if (e < i) {
        (o = r.length - i * 3 + e), (o += i);
        var p = t.slideTo(o, 0, !1, !0);
        p && u !== 0 && t.setTranslate((l ? -t.translate : t.translate) - u);
    } else if (e >= r.length - i) {
        (o = -r.length + e + i), (o += i);
        var f = t.slideTo(o, 0, !1, !0);
        f && u !== 0 && t.setTranslate((l ? -t.translate : t.translate) - u);
    }
    (t.allowSlidePrev = n), (t.allowSlideNext = a), t.emit('loopFix');
}
function Cr() {
    var t = this,
        e = t.$wrapperEl,
        r = t.params,
        i = t.slides;
    e
        .children(
            '.' +
                r.slideClass +
                '.' +
                r.slideDuplicateClass +
                ',.' +
                r.slideClass +
                '.' +
                r.slideBlankClass
        )
        .remove(),
        i.removeAttr('data-swiper-slide-index');
}
var Er = { loopCreate: yr, loopFix: Tr, loopDestroy: Cr };
function xr(t) {
    var e = this;
    if (
        !(
            e.support.touch ||
            !e.params.simulateTouch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode
        )
    ) {
        var r = e.el;
        (r.style.cursor = 'move'),
            (r.style.cursor = t ? '-webkit-grabbing' : '-webkit-grab'),
            (r.style.cursor = t ? '-moz-grabbin' : '-moz-grab'),
            (r.style.cursor = t ? 'grabbing' : 'grab');
    }
}
function _r() {
    var t = this;
    t.support.touch ||
        (t.params.watchOverflow && t.isLocked) ||
        t.params.cssMode ||
        (t.el.style.cursor = '');
}
var Mr = { setGrabCursor: xr, unsetGrabCursor: _r };
function Lr(t) {
    var e = this,
        r = e.$wrapperEl,
        i = e.params;
    if ((i.loop && e.loopDestroy(), typeof t == 'object' && 'length' in t))
        for (var n = 0; n < t.length; n += 1) t[n] && r.append(t[n]);
    else r.append(t);
    i.loop && e.loopCreate(), (i.observer && e.support.observer) || e.update();
}
function Or(t) {
    var e = this,
        r = e.params,
        i = e.$wrapperEl,
        n = e.activeIndex;
    r.loop && e.loopDestroy();
    var a = n + 1;
    if (typeof t == 'object' && 'length' in t) {
        for (var s = 0; s < t.length; s += 1) t[s] && i.prepend(t[s]);
        a = n + t.length;
    } else i.prepend(t);
    r.loop && e.loopCreate(),
        (r.observer && e.support.observer) || e.update(),
        e.slideTo(a, 0, !1);
}
function Pr(t, e) {
    var r = this,
        i = r.$wrapperEl,
        n = r.params,
        a = r.activeIndex,
        s = a;
    n.loop &&
        ((s -= r.loopedSlides),
        r.loopDestroy(),
        (r.slides = i.children('.' + n.slideClass)));
    var l = r.slides.length;
    if (t <= 0) {
        r.prependSlide(e);
        return;
    }
    if (t >= l) {
        r.appendSlide(e);
        return;
    }
    for (var o = s > t ? s + 1 : s, d = [], u = l - 1; u >= t; u -= 1) {
        var p = r.slides.eq(u);
        p.remove(), d.unshift(p);
    }
    if (typeof e == 'object' && 'length' in e) {
        for (var f = 0; f < e.length; f += 1) e[f] && i.append(e[f]);
        o = s > t ? s + e.length : s;
    } else i.append(e);
    for (var c = 0; c < d.length; c += 1) i.append(d[c]);
    n.loop && r.loopCreate(),
        (n.observer && r.support.observer) || r.update(),
        n.loop ? r.slideTo(o + r.loopedSlides, 0, !1) : r.slideTo(o, 0, !1);
}
function Ir(t) {
    var e = this,
        r = e.params,
        i = e.$wrapperEl,
        n = e.activeIndex,
        a = n;
    r.loop &&
        ((a -= e.loopedSlides),
        e.loopDestroy(),
        (e.slides = i.children('.' + r.slideClass)));
    var s = a,
        l;
    if (typeof t == 'object' && 'length' in t) {
        for (var o = 0; o < t.length; o += 1)
            (l = t[o]),
                e.slides[l] && e.slides.eq(l).remove(),
                l < s && (s -= 1);
        s = Math.max(s, 0);
    } else
        (l = t),
            e.slides[l] && e.slides.eq(l).remove(),
            l < s && (s -= 1),
            (s = Math.max(s, 0));
    r.loop && e.loopCreate(),
        (r.observer && e.support.observer) || e.update(),
        r.loop ? e.slideTo(s + e.loopedSlides, 0, !1) : e.slideTo(s, 0, !1);
}
function Br() {
    for (var t = this, e = [], r = 0; r < t.slides.length; r += 1) e.push(r);
    t.removeSlide(e);
}
var Ar = {
    appendSlide: Lr,
    prependSlide: Or,
    addSlide: Pr,
    removeSlide: Ir,
    removeAllSlides: Br
};
function $r(t, e) {
    e === void 0 && (e = this);
    function r(i) {
        if (!i || i === H() || i === N()) return null;
        i.assignedSlot && (i = i.assignedSlot);
        var n = i.closest(t);
        return n || r(i.getRootNode().host);
    }
    return r(e);
}
function Rr(t) {
    var e = this,
        r = H(),
        i = N(),
        n = e.touchEventsData,
        a = e.params,
        s = e.touches,
        l = e.enabled;
    if (!!l && !(e.animating && a.preventInteractionOnTransition)) {
        var o = t;
        o.originalEvent && (o = o.originalEvent);
        var d = g(o.target);
        if (
            !(
                a.touchEventsTarget === 'wrapper' &&
                !d.closest(e.wrapperEl).length
            ) &&
            ((n.isTouchEvent = o.type === 'touchstart'),
            !(!n.isTouchEvent && 'which' in o && o.which === 3) &&
                !(!n.isTouchEvent && 'button' in o && o.button > 0) &&
                !(n.isTouched && n.isMoved))
        ) {
            var u = !!a.noSwipingClass && a.noSwipingClass !== '';
            u &&
                o.target &&
                o.target.shadowRoot &&
                t.path &&
                t.path[0] &&
                (d = g(t.path[0]));
            var p = a.noSwipingSelector
                    ? a.noSwipingSelector
                    : '.' + a.noSwipingClass,
                f = !!(o.target && o.target.shadowRoot);
            if (a.noSwiping && (f ? $r(p, o.target) : d.closest(p)[0])) {
                e.allowClick = !0;
                return;
            }
            if (!(a.swipeHandler && !d.closest(a.swipeHandler)[0])) {
                (s.currentX =
                    o.type === 'touchstart'
                        ? o.targetTouches[0].pageX
                        : o.pageX),
                    (s.currentY =
                        o.type === 'touchstart'
                            ? o.targetTouches[0].pageY
                            : o.pageY);
                var c = s.currentX,
                    v = s.currentY,
                    h = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    S = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (h && (c <= S || c >= i.innerWidth - S))
                    if (h === 'prevent') t.preventDefault();
                    else return;
                if (
                    (A(n, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }),
                    (s.startX = c),
                    (s.startY = v),
                    (n.touchStartTime = K()),
                    (e.allowClick = !0),
                    e.updateSize(),
                    (e.swipeDirection = void 0),
                    a.threshold > 0 && (n.allowThresholdMove = !1),
                    o.type !== 'touchstart')
                ) {
                    var y = !0;
                    d.is(n.focusableElements) && (y = !1),
                        r.activeElement &&
                            g(r.activeElement).is(n.focusableElements) &&
                            r.activeElement !== d[0] &&
                            r.activeElement.blur();
                    var E = y && e.allowTouchMove && a.touchStartPreventDefault;
                    (a.touchStartForcePreventDefault || E) &&
                        !d[0].isContentEditable &&
                        o.preventDefault();
                }
                e.emit('touchStart', o);
            }
        }
    }
}
function zr(t) {
    var e = H(),
        r = this,
        i = r.touchEventsData,
        n = r.params,
        a = r.touches,
        s = r.rtlTranslate,
        l = r.enabled;
    if (!!l) {
        var o = t;
        if ((o.originalEvent && (o = o.originalEvent), !i.isTouched)) {
            i.startMoving && i.isScrolling && r.emit('touchMoveOpposite', o);
            return;
        }
        if (!(i.isTouchEvent && o.type !== 'touchmove')) {
            var d =
                    o.type === 'touchmove' &&
                    o.targetTouches &&
                    (o.targetTouches[0] || o.changedTouches[0]),
                u = o.type === 'touchmove' ? d.pageX : o.pageX,
                p = o.type === 'touchmove' ? d.pageY : o.pageY;
            if (o.preventedByNestedSwiper) {
                (a.startX = u), (a.startY = p);
                return;
            }
            if (!r.allowTouchMove) {
                (r.allowClick = !1),
                    i.isTouched &&
                        (A(a, {
                            startX: u,
                            startY: p,
                            currentX: u,
                            currentY: p
                        }),
                        (i.touchStartTime = K()));
                return;
            }
            if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) {
                if (r.isVertical()) {
                    if (
                        (p < a.startY && r.translate <= r.maxTranslate()) ||
                        (p > a.startY && r.translate >= r.minTranslate())
                    ) {
                        (i.isTouched = !1), (i.isMoved = !1);
                        return;
                    }
                } else if (
                    (u < a.startX && r.translate <= r.maxTranslate()) ||
                    (u > a.startX && r.translate >= r.minTranslate())
                )
                    return;
            }
            if (
                i.isTouchEvent &&
                e.activeElement &&
                o.target === e.activeElement &&
                g(o.target).is(i.focusableElements)
            ) {
                (i.isMoved = !0), (r.allowClick = !1);
                return;
            }
            if (
                (i.allowTouchCallbacks && r.emit('touchMove', o),
                !(o.targetTouches && o.targetTouches.length > 1))
            ) {
                (a.currentX = u), (a.currentY = p);
                var f = a.currentX - a.startX,
                    c = a.currentY - a.startY;
                if (
                    !(
                        r.params.threshold &&
                        Math.sqrt(Math.pow(f, 2) + Math.pow(c, 2)) <
                            r.params.threshold
                    )
                ) {
                    if (typeof i.isScrolling == 'undefined') {
                        var v;
                        (r.isHorizontal() && a.currentY === a.startY) ||
                        (r.isVertical() && a.currentX === a.startX)
                            ? (i.isScrolling = !1)
                            : f * f + c * c >= 25 &&
                              ((v =
                                  (Math.atan2(Math.abs(c), Math.abs(f)) * 180) /
                                  Math.PI),
                              (i.isScrolling = r.isHorizontal()
                                  ? v > n.touchAngle
                                  : 90 - v > n.touchAngle));
                    }
                    if (
                        (i.isScrolling && r.emit('touchMoveOpposite', o),
                        typeof i.startMoving == 'undefined' &&
                            (a.currentX !== a.startX ||
                                a.currentY !== a.startY) &&
                            (i.startMoving = !0),
                        i.isScrolling)
                    ) {
                        i.isTouched = !1;
                        return;
                    }
                    if (!!i.startMoving) {
                        (r.allowClick = !1),
                            !n.cssMode && o.cancelable && o.preventDefault(),
                            n.touchMoveStopPropagation &&
                                !n.nested &&
                                o.stopPropagation(),
                            i.isMoved ||
                                (n.loop && r.loopFix(),
                                (i.startTranslate = r.getTranslate()),
                                r.setTransition(0),
                                r.animating &&
                                    r.$wrapperEl.trigger(
                                        'webkitTransitionEnd transitionend'
                                    ),
                                (i.allowMomentumBounce = !1),
                                n.grabCursor &&
                                    (r.allowSlideNext === !0 ||
                                        r.allowSlidePrev === !0) &&
                                    r.setGrabCursor(!0),
                                r.emit('sliderFirstMove', o)),
                            r.emit('sliderMove', o),
                            (i.isMoved = !0);
                        var h = r.isHorizontal() ? f : c;
                        (a.diff = h),
                            (h *= n.touchRatio),
                            s && (h = -h),
                            (r.swipeDirection = h > 0 ? 'prev' : 'next'),
                            (i.currentTranslate = h + i.startTranslate);
                        var S = !0,
                            y = n.resistanceRatio;
                        if (
                            (n.touchReleaseOnEdges && (y = 0),
                            h > 0 && i.currentTranslate > r.minTranslate()
                                ? ((S = !1),
                                  n.resistance &&
                                      (i.currentTranslate =
                                          r.minTranslate() -
                                          1 +
                                          Math.pow(
                                              -r.minTranslate() +
                                                  i.startTranslate +
                                                  h,
                                              y
                                          )))
                                : h < 0 &&
                                  i.currentTranslate < r.maxTranslate() &&
                                  ((S = !1),
                                  n.resistance &&
                                      (i.currentTranslate =
                                          r.maxTranslate() +
                                          1 -
                                          Math.pow(
                                              r.maxTranslate() -
                                                  i.startTranslate -
                                                  h,
                                              y
                                          ))),
                            S && (o.preventedByNestedSwiper = !0),
                            !r.allowSlideNext &&
                                r.swipeDirection === 'next' &&
                                i.currentTranslate < i.startTranslate &&
                                (i.currentTranslate = i.startTranslate),
                            !r.allowSlidePrev &&
                                r.swipeDirection === 'prev' &&
                                i.currentTranslate > i.startTranslate &&
                                (i.currentTranslate = i.startTranslate),
                            !r.allowSlidePrev &&
                                !r.allowSlideNext &&
                                (i.currentTranslate = i.startTranslate),
                            n.threshold > 0)
                        )
                            if (
                                Math.abs(h) > n.threshold ||
                                i.allowThresholdMove
                            ) {
                                if (!i.allowThresholdMove) {
                                    (i.allowThresholdMove = !0),
                                        (a.startX = a.currentX),
                                        (a.startY = a.currentY),
                                        (i.currentTranslate = i.startTranslate),
                                        (a.diff = r.isHorizontal()
                                            ? a.currentX - a.startX
                                            : a.currentY - a.startY);
                                    return;
                                }
                            } else {
                                i.currentTranslate = i.startTranslate;
                                return;
                            }
                        !n.followFinger ||
                            n.cssMode ||
                            ((n.freeMode ||
                                n.watchSlidesProgress ||
                                n.watchSlidesVisibility) &&
                                (r.updateActiveIndex(),
                                r.updateSlidesClasses()),
                            n.freeMode &&
                                (i.velocities.length === 0 &&
                                    i.velocities.push({
                                        position:
                                            a[
                                                r.isHorizontal()
                                                    ? 'startX'
                                                    : 'startY'
                                            ],
                                        time: i.touchStartTime
                                    }),
                                i.velocities.push({
                                    position:
                                        a[
                                            r.isHorizontal()
                                                ? 'currentX'
                                                : 'currentY'
                                        ],
                                    time: K()
                                })),
                            r.updateProgress(i.currentTranslate),
                            r.setTranslate(i.currentTranslate));
                    }
                }
            }
        }
    }
}
function Nr(t) {
    var e = this,
        r = e.touchEventsData,
        i = e.params,
        n = e.touches,
        a = e.rtlTranslate,
        s = e.$wrapperEl,
        l = e.slidesGrid,
        o = e.snapGrid,
        d = e.enabled;
    if (!!d) {
        var u = t;
        if (
            (u.originalEvent && (u = u.originalEvent),
            r.allowTouchCallbacks && e.emit('touchEnd', u),
            (r.allowTouchCallbacks = !1),
            !r.isTouched)
        ) {
            r.isMoved && i.grabCursor && e.setGrabCursor(!1),
                (r.isMoved = !1),
                (r.startMoving = !1);
            return;
        }
        i.grabCursor &&
            r.isMoved &&
            r.isTouched &&
            (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
            e.setGrabCursor(!1);
        var p = K(),
            f = p - r.touchStartTime;
        if (
            (e.allowClick &&
                (e.updateClickedSlide(u),
                e.emit('tap click', u),
                f < 300 &&
                    p - r.lastClickTime < 300 &&
                    e.emit('doubleTap doubleClick', u)),
            (r.lastClickTime = K()),
            Ne(function () {
                e.destroyed || (e.allowClick = !0);
            }),
            !r.isTouched ||
                !r.isMoved ||
                !e.swipeDirection ||
                n.diff === 0 ||
                r.currentTranslate === r.startTranslate)
        ) {
            (r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1);
            return;
        }
        (r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1);
        var c;
        if (
            (i.followFinger
                ? (c = a ? e.translate : -e.translate)
                : (c = -r.currentTranslate),
            !i.cssMode)
        ) {
            if (i.freeMode) {
                if (c < -e.minTranslate()) {
                    e.slideTo(e.activeIndex);
                    return;
                }
                if (c > -e.maxTranslate()) {
                    e.slides.length < o.length
                        ? e.slideTo(o.length - 1)
                        : e.slideTo(e.slides.length - 1);
                    return;
                }
                if (i.freeModeMomentum) {
                    if (r.velocities.length > 1) {
                        var v = r.velocities.pop(),
                            h = r.velocities.pop(),
                            S = v.position - h.position,
                            y = v.time - h.time;
                        (e.velocity = S / y),
                            (e.velocity /= 2),
                            Math.abs(e.velocity) < i.freeModeMinimumVelocity &&
                                (e.velocity = 0),
                            (y > 150 || K() - v.time > 300) && (e.velocity = 0);
                    } else e.velocity = 0;
                    (e.velocity *= i.freeModeMomentumVelocityRatio),
                        (r.velocities.length = 0);
                    var E = 1e3 * i.freeModeMomentumRatio,
                        b = e.velocity * E,
                        m = e.translate + b;
                    a && (m = -m);
                    var O = !1,
                        $,
                        T =
                            Math.abs(e.velocity) *
                            20 *
                            i.freeModeMomentumBounceRatio,
                        w;
                    if (m < e.maxTranslate())
                        i.freeModeMomentumBounce
                            ? (m + e.maxTranslate() < -T &&
                                  (m = e.maxTranslate() - T),
                              ($ = e.maxTranslate()),
                              (O = !0),
                              (r.allowMomentumBounce = !0))
                            : (m = e.maxTranslate()),
                            i.loop && i.centeredSlides && (w = !0);
                    else if (m > e.minTranslate())
                        i.freeModeMomentumBounce
                            ? (m - e.minTranslate() > T &&
                                  (m = e.minTranslate() + T),
                              ($ = e.minTranslate()),
                              (O = !0),
                              (r.allowMomentumBounce = !0))
                            : (m = e.minTranslate()),
                            i.loop && i.centeredSlides && (w = !0);
                    else if (i.freeModeSticky) {
                        for (var B, x = 0; x < o.length; x += 1)
                            if (o[x] > -m) {
                                B = x;
                                break;
                            }
                        Math.abs(o[B] - m) < Math.abs(o[B - 1] - m) ||
                        e.swipeDirection === 'next'
                            ? (m = o[B])
                            : (m = o[B - 1]),
                            (m = -m);
                    }
                    if (
                        (w &&
                            e.once('transitionEnd', function () {
                                e.loopFix();
                            }),
                        e.velocity !== 0)
                    ) {
                        if (
                            (a
                                ? (E = Math.abs(
                                      (-m - e.translate) / e.velocity
                                  ))
                                : (E = Math.abs(
                                      (m - e.translate) / e.velocity
                                  )),
                            i.freeModeSticky)
                        ) {
                            var _ = Math.abs((a ? -m : m) - e.translate),
                                L = e.slidesSizesGrid[e.activeIndex];
                            _ < L
                                ? (E = i.speed)
                                : _ < 2 * L
                                ? (E = i.speed * 1.5)
                                : (E = i.speed * 2.5);
                        }
                    } else if (i.freeModeSticky) {
                        e.slideToClosest();
                        return;
                    }
                    i.freeModeMomentumBounce && O
                        ? (e.updateProgress($),
                          e.setTransition(E),
                          e.setTranslate(m),
                          e.transitionStart(!0, e.swipeDirection),
                          (e.animating = !0),
                          s.transitionEnd(function () {
                              !e ||
                                  e.destroyed ||
                                  !r.allowMomentumBounce ||
                                  (e.emit('momentumBounce'),
                                  e.setTransition(i.speed),
                                  setTimeout(function () {
                                      e.setTranslate($),
                                          s.transitionEnd(function () {
                                              !e ||
                                                  e.destroyed ||
                                                  e.transitionEnd();
                                          });
                                  }, 0));
                          }))
                        : e.velocity
                        ? (e.updateProgress(m),
                          e.setTransition(E),
                          e.setTranslate(m),
                          e.transitionStart(!0, e.swipeDirection),
                          e.animating ||
                              ((e.animating = !0),
                              s.transitionEnd(function () {
                                  !e || e.destroyed || e.transitionEnd();
                              })))
                        : (e.emit('_freeModeNoMomentumRelease'),
                          e.updateProgress(m)),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                } else if (i.freeModeSticky) {
                    e.slideToClosest();
                    return;
                } else i.freeMode && e.emit('_freeModeNoMomentumRelease');
                (!i.freeModeMomentum || f >= i.longSwipesMs) &&
                    (e.updateProgress(),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses());
                return;
            }
            for (
                var M = 0, V = e.slidesSizesGrid[0], R = 0;
                R < l.length;
                R += R < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
            ) {
                var D = R < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                typeof l[R + D] != 'undefined'
                    ? c >= l[R] &&
                      c < l[R + D] &&
                      ((M = R), (V = l[R + D] - l[R]))
                    : c >= l[R] &&
                      ((M = R), (V = l[l.length - 1] - l[l.length - 2]));
            }
            var J = (c - l[M]) / V,
                Q = M < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (f > i.longSwipesMs) {
                if (!i.longSwipes) {
                    e.slideTo(e.activeIndex);
                    return;
                }
                e.swipeDirection === 'next' &&
                    (J >= i.longSwipesRatio ? e.slideTo(M + Q) : e.slideTo(M)),
                    e.swipeDirection === 'prev' &&
                        (J > 1 - i.longSwipesRatio
                            ? e.slideTo(M + Q)
                            : e.slideTo(M));
            } else {
                if (!i.shortSwipes) {
                    e.slideTo(e.activeIndex);
                    return;
                }
                var pe =
                    e.navigation &&
                    (u.target === e.navigation.nextEl ||
                        u.target === e.navigation.prevEl);
                pe
                    ? u.target === e.navigation.nextEl
                        ? e.slideTo(M + Q)
                        : e.slideTo(M)
                    : (e.swipeDirection === 'next' && e.slideTo(M + Q),
                      e.swipeDirection === 'prev' && e.slideTo(M));
            }
        }
    }
}
function De() {
    var t = this,
        e = t.params,
        r = t.el;
    if (!(r && r.offsetWidth === 0)) {
        e.breakpoints && t.setBreakpoint();
        var i = t.allowSlideNext,
            n = t.allowSlidePrev,
            a = t.snapGrid;
        (t.allowSlideNext = !0),
            (t.allowSlidePrev = !0),
            t.updateSize(),
            t.updateSlides(),
            t.updateSlidesClasses(),
            (e.slidesPerView === 'auto' || e.slidesPerView > 1) &&
            t.isEnd &&
            !t.isBeginning &&
            !t.params.centeredSlides
                ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                : t.slideTo(t.activeIndex, 0, !1, !0),
            t.autoplay &&
                t.autoplay.running &&
                t.autoplay.paused &&
                t.autoplay.run(),
            (t.allowSlidePrev = n),
            (t.allowSlideNext = i),
            t.params.watchOverflow && a !== t.snapGrid && t.checkOverflow();
    }
}
function Gr(t) {
    var e = this;
    !e.enabled ||
        e.allowClick ||
        (e.params.preventClicks && t.preventDefault(),
        e.params.preventClicksPropagation &&
            e.animating &&
            (t.stopPropagation(), t.stopImmediatePropagation()));
}
function Dr() {
    var t = this,
        e = t.wrapperEl,
        r = t.rtlTranslate,
        i = t.enabled;
    if (!!i) {
        (t.previousTranslate = t.translate),
            t.isHorizontal()
                ? r
                    ? (t.translate =
                          e.scrollWidth - e.offsetWidth - e.scrollLeft)
                    : (t.translate = -e.scrollLeft)
                : (t.translate = -e.scrollTop),
            t.translate === -0 && (t.translate = 0),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        var n,
            a = t.maxTranslate() - t.minTranslate();
        a === 0 ? (n = 0) : (n = (t.translate - t.minTranslate()) / a),
            n !== t.progress &&
                t.updateProgress(r ? -t.translate : t.translate),
            t.emit('setTranslate', t.translate, !1);
    }
}
var nt = !1;
function kr() {}
function Hr() {
    var t = this,
        e = H(),
        r = t.params,
        i = t.touchEvents,
        n = t.el,
        a = t.wrapperEl,
        s = t.device,
        l = t.support;
    (t.onTouchStart = Rr.bind(t)),
        (t.onTouchMove = zr.bind(t)),
        (t.onTouchEnd = Nr.bind(t)),
        r.cssMode && (t.onScroll = Dr.bind(t)),
        (t.onClick = Gr.bind(t));
    var o = !!r.nested;
    if (!l.touch && l.pointerEvents)
        n.addEventListener(i.start, t.onTouchStart, !1),
            e.addEventListener(i.move, t.onTouchMove, o),
            e.addEventListener(i.end, t.onTouchEnd, !1);
    else {
        if (l.touch) {
            var d =
                i.start === 'touchstart' &&
                l.passiveListener &&
                r.passiveListeners
                    ? { passive: !0, capture: !1 }
                    : !1;
            n.addEventListener(i.start, t.onTouchStart, d),
                n.addEventListener(
                    i.move,
                    t.onTouchMove,
                    l.passiveListener ? { passive: !1, capture: o } : o
                ),
                n.addEventListener(i.end, t.onTouchEnd, d),
                i.cancel && n.addEventListener(i.cancel, t.onTouchEnd, d),
                nt || (e.addEventListener('touchstart', kr), (nt = !0));
        }
        ((r.simulateTouch && !s.ios && !s.android) ||
            (r.simulateTouch && !l.touch && s.ios)) &&
            (n.addEventListener('mousedown', t.onTouchStart, !1),
            e.addEventListener('mousemove', t.onTouchMove, o),
            e.addEventListener('mouseup', t.onTouchEnd, !1));
    }
    (r.preventClicks || r.preventClicksPropagation) &&
        n.addEventListener('click', t.onClick, !0),
        r.cssMode && a.addEventListener('scroll', t.onScroll),
        r.updateOnWindowResize
            ? t.on(
                  s.ios || s.android
                      ? 'resize orientationchange observerUpdate'
                      : 'resize observerUpdate',
                  De,
                  !0
              )
            : t.on('observerUpdate', De, !0);
}
function Fr() {
    var t = this,
        e = H(),
        r = t.params,
        i = t.touchEvents,
        n = t.el,
        a = t.wrapperEl,
        s = t.device,
        l = t.support,
        o = !!r.nested;
    if (!l.touch && l.pointerEvents)
        n.removeEventListener(i.start, t.onTouchStart, !1),
            e.removeEventListener(i.move, t.onTouchMove, o),
            e.removeEventListener(i.end, t.onTouchEnd, !1);
    else {
        if (l.touch) {
            var d =
                i.start === 'onTouchStart' &&
                l.passiveListener &&
                r.passiveListeners
                    ? { passive: !0, capture: !1 }
                    : !1;
            n.removeEventListener(i.start, t.onTouchStart, d),
                n.removeEventListener(i.move, t.onTouchMove, o),
                n.removeEventListener(i.end, t.onTouchEnd, d),
                i.cancel && n.removeEventListener(i.cancel, t.onTouchEnd, d);
        }
        ((r.simulateTouch && !s.ios && !s.android) ||
            (r.simulateTouch && !l.touch && s.ios)) &&
            (n.removeEventListener('mousedown', t.onTouchStart, !1),
            e.removeEventListener('mousemove', t.onTouchMove, o),
            e.removeEventListener('mouseup', t.onTouchEnd, !1));
    }
    (r.preventClicks || r.preventClicksPropagation) &&
        n.removeEventListener('click', t.onClick, !0),
        r.cssMode && a.removeEventListener('scroll', t.onScroll),
        t.off(
            s.ios || s.android
                ? 'resize orientationchange observerUpdate'
                : 'resize observerUpdate',
            De
        );
}
var Vr = { attachEvents: Hr, detachEvents: Fr };
function jr() {
    var t = this,
        e = t.activeIndex,
        r = t.initialized,
        i = t.loopedSlides,
        n = i === void 0 ? 0 : i,
        a = t.params,
        s = t.$el,
        l = a.breakpoints;
    if (!(!l || (l && Object.keys(l).length === 0))) {
        var o = t.getBreakpoint(l, t.params.breakpointsBase, t.el);
        if (!(!o || t.currentBreakpoint === o)) {
            var d = o in l ? l[o] : void 0;
            d &&
                [
                    'slidesPerView',
                    'spaceBetween',
                    'slidesPerGroup',
                    'slidesPerGroupSkip',
                    'slidesPerColumn'
                ].forEach(function (y) {
                    var E = d[y];
                    typeof E != 'undefined' &&
                        (y === 'slidesPerView' && (E === 'AUTO' || E === 'auto')
                            ? (d[y] = 'auto')
                            : y === 'slidesPerView'
                            ? (d[y] = parseFloat(E))
                            : (d[y] = parseInt(E, 10)));
                });
            var u = d || t.originalParams,
                p = a.slidesPerColumn > 1,
                f = u.slidesPerColumn > 1,
                c = a.enabled;
            p && !f
                ? (s.removeClass(
                      a.containerModifierClass +
                          'multirow ' +
                          a.containerModifierClass +
                          'multirow-column'
                  ),
                  t.emitContainerClasses())
                : !p &&
                  f &&
                  (s.addClass(a.containerModifierClass + 'multirow'),
                  ((u.slidesPerColumnFill &&
                      u.slidesPerColumnFill === 'column') ||
                      (!u.slidesPerColumnFill &&
                          a.slidesPerColumnFill === 'column')) &&
                      s.addClass(a.containerModifierClass + 'multirow-column'),
                  t.emitContainerClasses());
            var v = u.direction && u.direction !== a.direction,
                h = a.loop && (u.slidesPerView !== a.slidesPerView || v);
            v && r && t.changeDirection(), A(t.params, u);
            var S = t.params.enabled;
            A(t, {
                allowTouchMove: t.params.allowTouchMove,
                allowSlideNext: t.params.allowSlideNext,
                allowSlidePrev: t.params.allowSlidePrev
            }),
                c && !S ? t.disable() : !c && S && t.enable(),
                (t.currentBreakpoint = o),
                t.emit('_beforeBreakpoint', u),
                h &&
                    r &&
                    (t.loopDestroy(),
                    t.loopCreate(),
                    t.updateSlides(),
                    t.slideTo(e - n + t.loopedSlides, 0, !1)),
                t.emit('breakpoint', u);
        }
    }
}
function Wr(t, e, r) {
    if ((e === void 0 && (e = 'window'), !(!t || (e === 'container' && !r)))) {
        var i = !1,
            n = N(),
            a = e === 'window' ? n.innerHeight : r.clientHeight,
            s = Object.keys(t).map(function (p) {
                if (typeof p == 'string' && p.indexOf('@') === 0) {
                    var f = parseFloat(p.substr(1)),
                        c = a * f;
                    return { value: c, point: p };
                }
                return { value: p, point: p };
            });
        s.sort(function (p, f) {
            return parseInt(p.value, 10) - parseInt(f.value, 10);
        });
        for (var l = 0; l < s.length; l += 1) {
            var o = s[l],
                d = o.point,
                u = o.value;
            e === 'window'
                ? n.matchMedia('(min-width: ' + u + 'px)').matches && (i = d)
                : u <= r.clientWidth && (i = d);
        }
        return i || 'max';
    }
}
var qr = { setBreakpoint: jr, getBreakpoint: Wr };
function Yr(t, e) {
    var r = [];
    return (
        t.forEach(function (i) {
            typeof i == 'object'
                ? Object.keys(i).forEach(function (n) {
                      i[n] && r.push(e + n);
                  })
                : typeof i == 'string' && r.push(e + i);
        }),
        r
    );
}
function Xr() {
    var t = this,
        e = t.classNames,
        r = t.params,
        i = t.rtl,
        n = t.$el,
        a = t.device,
        s = t.support,
        l = Yr(
            [
                'initialized',
                r.direction,
                { 'pointer-events': s.pointerEvents && !s.touch },
                { 'free-mode': r.freeMode },
                { autoheight: r.autoHeight },
                { rtl: i },
                { multirow: r.slidesPerColumn > 1 },
                {
                    'multirow-column':
                        r.slidesPerColumn > 1 &&
                        r.slidesPerColumnFill === 'column'
                },
                { android: a.android },
                { ios: a.ios },
                { 'css-mode': r.cssMode }
            ],
            r.containerModifierClass
        );
    e.push.apply(e, l),
        n.addClass([].concat(e).join(' ')),
        t.emitContainerClasses();
}
function Ur() {
    var t = this,
        e = t.$el,
        r = t.classNames;
    e.removeClass(r.join(' ')), t.emitContainerClasses();
}
var Kr = { addClasses: Xr, removeClasses: Ur };
function Jr(t, e, r, i, n, a) {
    var s = N(),
        l;
    function o() {
        a && a();
    }
    var d = g(t).parent('picture')[0];
    !d && (!t.complete || !n) && e
        ? ((l = new s.Image()),
          (l.onload = o),
          (l.onerror = o),
          i && (l.sizes = i),
          r && (l.srcset = r),
          e && (l.src = e))
        : o();
}
function Qr() {
    var t = this;
    t.imagesToLoad = t.$el.find('img');
    function e() {
        typeof t == 'undefined' ||
            t === null ||
            !t ||
            t.destroyed ||
            (t.imagesLoaded !== void 0 && (t.imagesLoaded += 1),
            t.imagesLoaded === t.imagesToLoad.length &&
                (t.params.updateOnImagesReady && t.update(),
                t.emit('imagesReady')));
    }
    for (var r = 0; r < t.imagesToLoad.length; r += 1) {
        var i = t.imagesToLoad[r];
        t.loadImage(
            i,
            i.currentSrc || i.getAttribute('src'),
            i.srcset || i.getAttribute('srcset'),
            i.sizes || i.getAttribute('sizes'),
            !0,
            e
        );
    }
}
var Zr = { loadImage: Jr, preloadImages: Qr };
function en() {
    var t = this,
        e = t.params,
        r = t.isLocked,
        i =
            t.slides.length > 0 &&
            e.slidesOffsetBefore +
                e.spaceBetween * (t.slides.length - 1) +
                t.slides[0].offsetWidth * t.slides.length;
    e.slidesOffsetBefore && e.slidesOffsetAfter && i
        ? (t.isLocked = i <= t.size)
        : (t.isLocked = t.snapGrid.length === 1),
        (t.allowSlideNext = !t.isLocked),
        (t.allowSlidePrev = !t.isLocked),
        r !== t.isLocked && t.emit(t.isLocked ? 'lock' : 'unlock'),
        r &&
            r !== t.isLocked &&
            ((t.isEnd = !1), t.navigation && t.navigation.update());
}
var tn = { checkOverflow: en },
    at = {
        init: !0,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
            'input, select, option, textarea, button, video, label',
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsBase: 'window',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
function st(t, e) {
    for (var r = 0; r < e.length; r++) {
        var i = e[r];
        (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
    }
}
function rn(t, e, r) {
    return e && st(t.prototype, e), r && st(t, r), t;
}
var Ie = {
        modular: Wi,
        eventsEmitter: qi,
        update: ir,
        translate: or,
        transition: pr,
        slide: br,
        loop: Er,
        grabCursor: Mr,
        manipulation: Ar,
        events: Vr,
        breakpoints: qr,
        checkOverflow: tn,
        classes: Kr,
        images: Zr
    },
    Be = {},
    Ye = (function () {
        function t() {
            for (
                var r, i, n = arguments.length, a = new Array(n), s = 0;
                s < n;
                s++
            )
                a[s] = arguments[s];
            if (
                (a.length === 1 &&
                a[0].constructor &&
                Object.prototype.toString.call(a[0]).slice(8, -1) === 'Object'
                    ? (i = a[0])
                    : ((r = a[0]), (i = a[1])),
                i || (i = {}),
                (i = A({}, i)),
                r && !i.el && (i.el = r),
                i.el && g(i.el).length > 1)
            ) {
                var l = [];
                return (
                    g(i.el).each(function (u) {
                        var p = A({}, i, { el: u });
                        l.push(new t(p));
                    }),
                    l
                );
            }
            var o = this;
            (o.__swiper__ = !0),
                (o.support = gt()),
                (o.device = Gi({ userAgent: i.userAgent })),
                (o.browser = ki()),
                (o.eventsListeners = {}),
                (o.eventsAnyListeners = []),
                typeof o.modules == 'undefined' && (o.modules = {}),
                Object.keys(o.modules).forEach(function (u) {
                    var p = o.modules[u];
                    if (p.params) {
                        var f = Object.keys(p.params)[0],
                            c = p.params[f];
                        if (
                            typeof c != 'object' ||
                            c === null ||
                            (['navigation', 'pagination', 'scrollbar'].indexOf(
                                f
                            ) >= 0 &&
                                i[f] === !0 &&
                                (i[f] = { auto: !0 }),
                            !(f in i && 'enabled' in c))
                        )
                            return;
                        i[f] === !0 && (i[f] = { enabled: !0 }),
                            typeof i[f] == 'object' &&
                                !('enabled' in i[f]) &&
                                (i[f].enabled = !0),
                            i[f] || (i[f] = { enabled: !1 });
                    }
                });
            var d = A({}, at);
            return (
                o.useParams(d),
                (o.params = A({}, d, Be, i)),
                (o.originalParams = A({}, o.params)),
                (o.passedParams = A({}, i)),
                o.params &&
                    o.params.on &&
                    Object.keys(o.params.on).forEach(function (u) {
                        o.on(u, o.params.on[u]);
                    }),
                o.params && o.params.onAny && o.onAny(o.params.onAny),
                (o.$ = g),
                A(o, {
                    enabled: o.params.enabled,
                    el: r,
                    classNames: [],
                    slides: g(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function () {
                        return o.params.direction === 'horizontal';
                    },
                    isVertical: function () {
                        return o.params.direction === 'vertical';
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: o.params.allowSlideNext,
                    allowSlidePrev: o.params.allowSlidePrev,
                    touchEvents: (function () {
                        var p = [
                                'touchstart',
                                'touchmove',
                                'touchend',
                                'touchcancel'
                            ],
                            f = ['mousedown', 'mousemove', 'mouseup'];
                        return (
                            o.support.pointerEvents &&
                                (f = [
                                    'pointerdown',
                                    'pointermove',
                                    'pointerup'
                                ]),
                            (o.touchEventsTouch = {
                                start: p[0],
                                move: p[1],
                                end: p[2],
                                cancel: p[3]
                            }),
                            (o.touchEventsDesktop = {
                                start: f[0],
                                move: f[1],
                                end: f[2]
                            }),
                            o.support.touch || !o.params.simulateTouch
                                ? o.touchEventsTouch
                                : o.touchEventsDesktop
                        );
                    })(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: o.params.focusableElements,
                        lastClickTime: K(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: o.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                o.useModules(),
                o.emit('_swiper'),
                o.params.init && o.init(),
                o
            );
        }
        var e = t.prototype;
        return (
            (e.enable = function () {
                var i = this;
                i.enabled ||
                    ((i.enabled = !0),
                    i.params.grabCursor && i.setGrabCursor(),
                    i.emit('enable'));
            }),
            (e.disable = function () {
                var i = this;
                !i.enabled ||
                    ((i.enabled = !1),
                    i.params.grabCursor && i.unsetGrabCursor(),
                    i.emit('disable'));
            }),
            (e.setProgress = function (i, n) {
                var a = this;
                i = Math.min(Math.max(i, 0), 1);
                var s = a.minTranslate(),
                    l = a.maxTranslate(),
                    o = (l - s) * i + s;
                a.translateTo(o, typeof n == 'undefined' ? 0 : n),
                    a.updateActiveIndex(),
                    a.updateSlidesClasses();
            }),
            (e.emitContainerClasses = function () {
                var i = this;
                if (!(!i.params._emitClasses || !i.el)) {
                    var n = i.el.className.split(' ').filter(function (a) {
                        return (
                            a.indexOf('swiper-container') === 0 ||
                            a.indexOf(i.params.containerModifierClass) === 0
                        );
                    });
                    i.emit('_containerClasses', n.join(' '));
                }
            }),
            (e.getSlideClasses = function (i) {
                var n = this;
                return i.className
                    .split(' ')
                    .filter(function (a) {
                        return (
                            a.indexOf('swiper-slide') === 0 ||
                            a.indexOf(n.params.slideClass) === 0
                        );
                    })
                    .join(' ');
            }),
            (e.emitSlidesClasses = function () {
                var i = this;
                if (!(!i.params._emitClasses || !i.el)) {
                    var n = [];
                    i.slides.each(function (a) {
                        var s = i.getSlideClasses(a);
                        n.push({ slideEl: a, classNames: s }),
                            i.emit('_slideClass', a, s);
                    }),
                        i.emit('_slideClasses', n);
                }
            }),
            (e.slidesPerViewDynamic = function () {
                var i = this,
                    n = i.params,
                    a = i.slides,
                    s = i.slidesGrid,
                    l = i.size,
                    o = i.activeIndex,
                    d = 1;
                if (n.centeredSlides) {
                    for (
                        var u = a[o].swiperSlideSize, p, f = o + 1;
                        f < a.length;
                        f += 1
                    )
                        a[f] &&
                            !p &&
                            ((u += a[f].swiperSlideSize),
                            (d += 1),
                            u > l && (p = !0));
                    for (var c = o - 1; c >= 0; c -= 1)
                        a[c] &&
                            !p &&
                            ((u += a[c].swiperSlideSize),
                            (d += 1),
                            u > l && (p = !0));
                } else
                    for (var v = o + 1; v < a.length; v += 1)
                        s[v] - s[o] < l && (d += 1);
                return d;
            }),
            (e.update = function () {
                var i = this;
                if (!i || i.destroyed) return;
                var n = i.snapGrid,
                    a = i.params;
                a.breakpoints && i.setBreakpoint(),
                    i.updateSize(),
                    i.updateSlides(),
                    i.updateProgress(),
                    i.updateSlidesClasses();
                function s() {
                    var o = i.rtlTranslate ? i.translate * -1 : i.translate,
                        d = Math.min(
                            Math.max(o, i.maxTranslate()),
                            i.minTranslate()
                        );
                    i.setTranslate(d),
                        i.updateActiveIndex(),
                        i.updateSlidesClasses();
                }
                var l;
                i.params.freeMode
                    ? (s(), i.params.autoHeight && i.updateAutoHeight())
                    : ((i.params.slidesPerView === 'auto' ||
                          i.params.slidesPerView > 1) &&
                      i.isEnd &&
                      !i.params.centeredSlides
                          ? (l = i.slideTo(i.slides.length - 1, 0, !1, !0))
                          : (l = i.slideTo(i.activeIndex, 0, !1, !0)),
                      l || s()),
                    a.watchOverflow && n !== i.snapGrid && i.checkOverflow(),
                    i.emit('update');
            }),
            (e.changeDirection = function (i, n) {
                n === void 0 && (n = !0);
                var a = this,
                    s = a.params.direction;
                return (
                    i || (i = s === 'horizontal' ? 'vertical' : 'horizontal'),
                    i === s ||
                        (i !== 'horizontal' && i !== 'vertical') ||
                        (a.$el
                            .removeClass(
                                '' + a.params.containerModifierClass + s
                            )
                            .addClass('' + a.params.containerModifierClass + i),
                        a.emitContainerClasses(),
                        (a.params.direction = i),
                        a.slides.each(function (l) {
                            i === 'vertical'
                                ? (l.style.width = '')
                                : (l.style.height = '');
                        }),
                        a.emit('changeDirection'),
                        n && a.update()),
                    a
                );
            }),
            (e.mount = function (i) {
                var n = this;
                if (n.mounted) return !0;
                var a = g(i || n.params.el);
                if (((i = a[0]), !i)) return !1;
                i.swiper = n;
                var s = function () {
                        return (
                            '.' +
                            (n.params.wrapperClass || '')
                                .trim()
                                .split(' ')
                                .join('.')
                        );
                    },
                    l = function () {
                        if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                            var f = g(i.shadowRoot.querySelector(s()));
                            return (
                                (f.children = function (c) {
                                    return a.children(c);
                                }),
                                f
                            );
                        }
                        return a.children(s());
                    },
                    o = l();
                if (o.length === 0 && n.params.createElements) {
                    var d = H(),
                        u = d.createElement('div');
                    (o = g(u)),
                        (u.className = n.params.wrapperClass),
                        a.append(u),
                        a
                            .children('.' + n.params.slideClass)
                            .each(function (p) {
                                o.append(p);
                            });
                }
                return (
                    A(n, {
                        $el: a,
                        el: i,
                        $wrapperEl: o,
                        wrapperEl: o[0],
                        mounted: !0,
                        rtl:
                            i.dir.toLowerCase() === 'rtl' ||
                            a.css('direction') === 'rtl',
                        rtlTranslate:
                            n.params.direction === 'horizontal' &&
                            (i.dir.toLowerCase() === 'rtl' ||
                                a.css('direction') === 'rtl'),
                        wrongRTL: o.css('display') === '-webkit-box'
                    }),
                    !0
                );
            }),
            (e.init = function (i) {
                var n = this;
                if (n.initialized) return n;
                var a = n.mount(i);
                return (
                    a === !1 ||
                        (n.emit('beforeInit'),
                        n.params.breakpoints && n.setBreakpoint(),
                        n.addClasses(),
                        n.params.loop && n.loopCreate(),
                        n.updateSize(),
                        n.updateSlides(),
                        n.params.watchOverflow && n.checkOverflow(),
                        n.params.grabCursor && n.enabled && n.setGrabCursor(),
                        n.params.preloadImages && n.preloadImages(),
                        n.params.loop
                            ? n.slideTo(
                                  n.params.initialSlide + n.loopedSlides,
                                  0,
                                  n.params.runCallbacksOnInit,
                                  !1,
                                  !0
                              )
                            : n.slideTo(
                                  n.params.initialSlide,
                                  0,
                                  n.params.runCallbacksOnInit,
                                  !1,
                                  !0
                              ),
                        n.attachEvents(),
                        (n.initialized = !0),
                        n.emit('init'),
                        n.emit('afterInit')),
                    n
                );
            }),
            (e.destroy = function (i, n) {
                i === void 0 && (i = !0), n === void 0 && (n = !0);
                var a = this,
                    s = a.params,
                    l = a.$el,
                    o = a.$wrapperEl,
                    d = a.slides;
                return (
                    typeof a.params == 'undefined' ||
                        a.destroyed ||
                        (a.emit('beforeDestroy'),
                        (a.initialized = !1),
                        a.detachEvents(),
                        s.loop && a.loopDestroy(),
                        n &&
                            (a.removeClasses(),
                            l.removeAttr('style'),
                            o.removeAttr('style'),
                            d &&
                                d.length &&
                                d
                                    .removeClass(
                                        [
                                            s.slideVisibleClass,
                                            s.slideActiveClass,
                                            s.slideNextClass,
                                            s.slidePrevClass
                                        ].join(' ')
                                    )
                                    .removeAttr('style')
                                    .removeAttr('data-swiper-slide-index')),
                        a.emit('destroy'),
                        Object.keys(a.eventsListeners).forEach(function (u) {
                            a.off(u);
                        }),
                        i !== !1 && ((a.$el[0].swiper = null), Ii(a)),
                        (a.destroyed = !0)),
                    null
                );
            }),
            (t.extendDefaults = function (i) {
                A(Be, i);
            }),
            (t.installModule = function (i) {
                t.prototype.modules || (t.prototype.modules = {});
                var n =
                    i.name ||
                    Object.keys(t.prototype.modules).length + '_' + K();
                t.prototype.modules[n] = i;
            }),
            (t.use = function (i) {
                return Array.isArray(i)
                    ? (i.forEach(function (n) {
                          return t.installModule(n);
                      }),
                      t)
                    : (t.installModule(i), t);
            }),
            rn(t, null, [
                {
                    key: 'extendedDefaults',
                    get: function () {
                        return Be;
                    }
                },
                {
                    key: 'defaults',
                    get: function () {
                        return at;
                    }
                }
            ]),
            t
        );
    })();
Object.keys(Ie).forEach(function (t) {
    Object.keys(Ie[t]).forEach(function (e) {
        Ye.prototype[e] = Ie[t][e];
    });
});
Ye.use([Fi, ji]);
var de = Ye;
function ke() {
    return (
        (ke =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) &&
                            (t[i] = r[i]);
                }
                return t;
            }),
        ke.apply(this, arguments)
    );
}
var nn = {
        update: function () {
            var e = this,
                r = e.rtl,
                i = e.params.pagination;
            if (
                !(
                    !i.el ||
                    !e.pagination.el ||
                    !e.pagination.$el ||
                    e.pagination.$el.length === 0
                )
            ) {
                var n =
                        e.virtual && e.params.virtual.enabled
                            ? e.virtual.slides.length
                            : e.slides.length,
                    a = e.pagination.$el,
                    s,
                    l = e.params.loop
                        ? Math.ceil(
                              (n - e.loopedSlides * 2) / e.params.slidesPerGroup
                          )
                        : e.snapGrid.length;
                if (
                    (e.params.loop
                        ? ((s = Math.ceil(
                              (e.activeIndex - e.loopedSlides) /
                                  e.params.slidesPerGroup
                          )),
                          s > n - 1 - e.loopedSlides * 2 &&
                              (s -= n - e.loopedSlides * 2),
                          s > l - 1 && (s -= l),
                          s < 0 &&
                              e.params.paginationType !== 'bullets' &&
                              (s = l + s))
                        : typeof e.snapIndex != 'undefined'
                        ? (s = e.snapIndex)
                        : (s = e.activeIndex || 0),
                    i.type === 'bullets' &&
                        e.pagination.bullets &&
                        e.pagination.bullets.length > 0)
                ) {
                    var o = e.pagination.bullets,
                        d,
                        u,
                        p;
                    if (
                        (i.dynamicBullets &&
                            ((e.pagination.bulletSize = o
                                .eq(0)
                                [
                                    e.isHorizontal()
                                        ? 'outerWidth'
                                        : 'outerHeight'
                                ](!0)),
                            a.css(
                                e.isHorizontal() ? 'width' : 'height',
                                e.pagination.bulletSize *
                                    (i.dynamicMainBullets + 4) +
                                    'px'
                            ),
                            i.dynamicMainBullets > 1 &&
                                e.previousIndex !== void 0 &&
                                ((e.pagination.dynamicBulletIndex +=
                                    s - e.previousIndex),
                                e.pagination.dynamicBulletIndex >
                                i.dynamicMainBullets - 1
                                    ? (e.pagination.dynamicBulletIndex =
                                          i.dynamicMainBullets - 1)
                                    : e.pagination.dynamicBulletIndex < 0 &&
                                      (e.pagination.dynamicBulletIndex = 0)),
                            (d = s - e.pagination.dynamicBulletIndex),
                            (u =
                                d +
                                (Math.min(o.length, i.dynamicMainBullets) - 1)),
                            (p = (u + d) / 2)),
                        o.removeClass(
                            i.bulletActiveClass +
                                ' ' +
                                i.bulletActiveClass +
                                '-next ' +
                                i.bulletActiveClass +
                                '-next-next ' +
                                i.bulletActiveClass +
                                '-prev ' +
                                i.bulletActiveClass +
                                '-prev-prev ' +
                                i.bulletActiveClass +
                                '-main'
                        ),
                        a.length > 1)
                    )
                        o.each(function (B) {
                            var x = g(B),
                                _ = x.index();
                            _ === s && x.addClass(i.bulletActiveClass),
                                i.dynamicBullets &&
                                    (_ >= d &&
                                        _ <= u &&
                                        x.addClass(
                                            i.bulletActiveClass + '-main'
                                        ),
                                    _ === d &&
                                        x
                                            .prev()
                                            .addClass(
                                                i.bulletActiveClass + '-prev'
                                            )
                                            .prev()
                                            .addClass(
                                                i.bulletActiveClass +
                                                    '-prev-prev'
                                            ),
                                    _ === u &&
                                        x
                                            .next()
                                            .addClass(
                                                i.bulletActiveClass + '-next'
                                            )
                                            .next()
                                            .addClass(
                                                i.bulletActiveClass +
                                                    '-next-next'
                                            ));
                        });
                    else {
                        var f = o.eq(s),
                            c = f.index();
                        if (
                            (f.addClass(i.bulletActiveClass), i.dynamicBullets)
                        ) {
                            for (
                                var v = o.eq(d), h = o.eq(u), S = d;
                                S <= u;
                                S += 1
                            )
                                o.eq(S).addClass(i.bulletActiveClass + '-main');
                            if (e.params.loop)
                                if (c >= o.length - i.dynamicMainBullets) {
                                    for (
                                        var y = i.dynamicMainBullets;
                                        y >= 0;
                                        y -= 1
                                    )
                                        o.eq(o.length - y).addClass(
                                            i.bulletActiveClass + '-main'
                                        );
                                    o.eq(
                                        o.length - i.dynamicMainBullets - 1
                                    ).addClass(i.bulletActiveClass + '-prev');
                                } else
                                    v
                                        .prev()
                                        .addClass(i.bulletActiveClass + '-prev')
                                        .prev()
                                        .addClass(
                                            i.bulletActiveClass + '-prev-prev'
                                        ),
                                        h
                                            .next()
                                            .addClass(
                                                i.bulletActiveClass + '-next'
                                            )
                                            .next()
                                            .addClass(
                                                i.bulletActiveClass +
                                                    '-next-next'
                                            );
                            else
                                v
                                    .prev()
                                    .addClass(i.bulletActiveClass + '-prev')
                                    .prev()
                                    .addClass(
                                        i.bulletActiveClass + '-prev-prev'
                                    ),
                                    h
                                        .next()
                                        .addClass(i.bulletActiveClass + '-next')
                                        .next()
                                        .addClass(
                                            i.bulletActiveClass + '-next-next'
                                        );
                        }
                    }
                    if (i.dynamicBullets) {
                        var E = Math.min(o.length, i.dynamicMainBullets + 4),
                            b =
                                (e.pagination.bulletSize * E -
                                    e.pagination.bulletSize) /
                                    2 -
                                p * e.pagination.bulletSize,
                            m = r ? 'right' : 'left';
                        o.css(e.isHorizontal() ? m : 'top', b + 'px');
                    }
                }
                if (
                    (i.type === 'fraction' &&
                        (a
                            .find(ne(i.currentClass))
                            .text(i.formatFractionCurrent(s + 1)),
                        a
                            .find(ne(i.totalClass))
                            .text(i.formatFractionTotal(l))),
                    i.type === 'progressbar')
                ) {
                    var O;
                    i.progressbarOpposite
                        ? (O = e.isHorizontal() ? 'vertical' : 'horizontal')
                        : (O = e.isHorizontal() ? 'horizontal' : 'vertical');
                    var $ = (s + 1) / l,
                        T = 1,
                        w = 1;
                    O === 'horizontal' ? (T = $) : (w = $),
                        a
                            .find(ne(i.progressbarFillClass))
                            .transform(
                                'translate3d(0,0,0) scaleX(' +
                                    T +
                                    ') scaleY(' +
                                    w +
                                    ')'
                            )
                            .transition(e.params.speed);
                }
                i.type === 'custom' && i.renderCustom
                    ? (a.html(i.renderCustom(e, s + 1, l)),
                      e.emit('paginationRender', a[0]))
                    : e.emit('paginationUpdate', a[0]),
                    e.params.watchOverflow &&
                        e.enabled &&
                        a[e.isLocked ? 'addClass' : 'removeClass'](i.lockClass);
            }
        },
        render: function () {
            var e = this,
                r = e.params.pagination;
            if (
                !(
                    !r.el ||
                    !e.pagination.el ||
                    !e.pagination.$el ||
                    e.pagination.$el.length === 0
                )
            ) {
                var i =
                        e.virtual && e.params.virtual.enabled
                            ? e.virtual.slides.length
                            : e.slides.length,
                    n = e.pagination.$el,
                    a = '';
                if (r.type === 'bullets') {
                    var s = e.params.loop
                        ? Math.ceil(
                              (i - e.loopedSlides * 2) / e.params.slidesPerGroup
                          )
                        : e.snapGrid.length;
                    e.params.freeMode && !e.params.loop && s > i && (s = i);
                    for (var l = 0; l < s; l += 1)
                        r.renderBullet
                            ? (a += r.renderBullet.call(e, l, r.bulletClass))
                            : (a +=
                                  '<' +
                                  r.bulletElement +
                                  ' class="' +
                                  r.bulletClass +
                                  '"></' +
                                  r.bulletElement +
                                  '>');
                    n.html(a),
                        (e.pagination.bullets = n.find(ne(r.bulletClass)));
                }
                r.type === 'fraction' &&
                    (r.renderFraction
                        ? (a = r.renderFraction.call(
                              e,
                              r.currentClass,
                              r.totalClass
                          ))
                        : (a =
                              '<span class="' +
                              r.currentClass +
                              '"></span> / ' +
                              ('<span class="' + r.totalClass + '"></span>')),
                    n.html(a)),
                    r.type === 'progressbar' &&
                        (r.renderProgressbar
                            ? (a = r.renderProgressbar.call(
                                  e,
                                  r.progressbarFillClass
                              ))
                            : (a =
                                  '<span class="' +
                                  r.progressbarFillClass +
                                  '"></span>'),
                        n.html(a)),
                    r.type !== 'custom' &&
                        e.emit('paginationRender', e.pagination.$el[0]);
            }
        },
        init: function () {
            var e = this;
            e.params.pagination = Ri(
                e.$el,
                e.params.pagination,
                e.params.createElements,
                { el: 'swiper-pagination' }
            );
            var r = e.params.pagination;
            if (!!r.el) {
                var i = g(r.el);
                i.length !== 0 &&
                    (e.params.uniqueNavElements &&
                        typeof r.el == 'string' &&
                        i.length > 1 &&
                        (i = e.$el.find(r.el)),
                    r.type === 'bullets' &&
                        r.clickable &&
                        i.addClass(r.clickableClass),
                    i.addClass(r.modifierClass + r.type),
                    r.type === 'bullets' &&
                        r.dynamicBullets &&
                        (i.addClass('' + r.modifierClass + r.type + '-dynamic'),
                        (e.pagination.dynamicBulletIndex = 0),
                        r.dynamicMainBullets < 1 && (r.dynamicMainBullets = 1)),
                    r.type === 'progressbar' &&
                        r.progressbarOpposite &&
                        i.addClass(r.progressbarOppositeClass),
                    r.clickable &&
                        i.on('click', ne(r.bulletClass), function (a) {
                            a.preventDefault();
                            var s = g(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (s += e.loopedSlides),
                                e.slideTo(s);
                        }),
                    A(e.pagination, { $el: i, el: i[0] }),
                    e.enabled || i.addClass(r.lockClass));
            }
        },
        destroy: function () {
            var e = this,
                r = e.params.pagination;
            if (
                !(
                    !r.el ||
                    !e.pagination.el ||
                    !e.pagination.$el ||
                    e.pagination.$el.length === 0
                )
            ) {
                var i = e.pagination.$el;
                i.removeClass(r.hiddenClass),
                    i.removeClass(r.modifierClass + r.type),
                    e.pagination.bullets &&
                        e.pagination.bullets.removeClass(r.bulletActiveClass),
                    r.clickable && i.off('click', ne(r.bulletClass));
            }
        }
    },
    wt = {
        name: 'pagination',
        params: {
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: 'bullets',
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e;
                },
                formatFractionTotal: function (e) {
                    return e;
                },
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-',
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                progressbarOppositeClass:
                    'swiper-pagination-progressbar-opposite',
                clickableClass: 'swiper-pagination-clickable',
                lockClass: 'swiper-pagination-lock'
            }
        },
        create: function () {
            var e = this;
            mt(e, { pagination: ke({ dynamicBulletIndex: 0 }, nn) });
        },
        on: {
            init: function (e) {
                e.pagination.init(),
                    e.pagination.render(),
                    e.pagination.update();
            },
            activeIndexChange: function (e) {
                (e.params.loop || typeof e.snapIndex == 'undefined') &&
                    e.pagination.update();
            },
            snapIndexChange: function (e) {
                e.params.loop || e.pagination.update();
            },
            slidesLengthChange: function (e) {
                e.params.loop && (e.pagination.render(), e.pagination.update());
            },
            snapGridLengthChange: function (e) {
                e.params.loop || (e.pagination.render(), e.pagination.update());
            },
            destroy: function (e) {
                e.pagination.destroy();
            },
            'enable disable': function (e) {
                var r = e.pagination.$el;
                r &&
                    r[e.enabled ? 'removeClass' : 'addClass'](
                        e.params.pagination.lockClass
                    );
            },
            click: function (e, r) {
                var i = r.target;
                if (
                    e.params.pagination.el &&
                    e.params.pagination.hideOnClick &&
                    e.pagination.$el.length > 0 &&
                    !g(i).hasClass(e.params.pagination.bulletClass)
                ) {
                    if (
                        e.navigation &&
                        ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                            (e.navigation.prevEl && i === e.navigation.prevEl))
                    )
                        return;
                    var n = e.pagination.$el.hasClass(
                        e.params.pagination.hiddenClass
                    );
                    n === !0
                        ? e.emit('paginationShow')
                        : e.emit('paginationHide'),
                        e.pagination.$el.toggleClass(
                            e.params.pagination.hiddenClass
                        );
                }
            }
        }
    };
function ee(t) {
    return (
        typeof t == 'object' &&
        t !== null &&
        t.constructor &&
        Object.prototype.toString.call(t).slice(8, -1) === 'Object'
    );
}
function U(t, e) {
    var r = ['__proto__', 'constructor', 'prototype'];
    Object.keys(e)
        .filter(function (i) {
            return r.indexOf(i) < 0;
        })
        .forEach(function (i) {
            typeof t[i] == 'undefined'
                ? (t[i] = e[i])
                : ee(e[i]) && ee(t[i]) && Object.keys(e[i]).length > 0
                ? e[i].__swiper__
                    ? (t[i] = e[i])
                    : U(t[i], e[i])
                : (t[i] = e[i]);
        });
}
function St(t) {
    return (
        t === void 0 && (t = {}),
        t.navigation &&
            typeof t.navigation.nextEl == 'undefined' &&
            typeof t.navigation.prevEl == 'undefined'
    );
}
function bt(t) {
    return (
        t === void 0 && (t = {}),
        t.pagination && typeof t.pagination.el == 'undefined'
    );
}
function yt(t) {
    return (
        t === void 0 && (t = {}),
        t.scrollbar && typeof t.scrollbar.el == 'undefined'
    );
}
function Tt(t) {
    t === void 0 && (t = '');
    var e = t
            .split(' ')
            .map(function (i) {
                return i.trim();
            })
            .filter(function (i) {
                return !!i;
            }),
        r = [];
    return (
        e.forEach(function (i) {
            r.indexOf(i) < 0 && r.push(i);
        }),
        r.join(' ')
    );
}
var Ct = [
    'init',
    '_direction',
    'touchEventsTarget',
    'initialSlide',
    '_speed',
    'cssMode',
    'updateOnWindowResize',
    'resizeObserver',
    'nested',
    'focusableElements',
    '_enabled',
    '_width',
    '_height',
    'preventInteractionOnTransition',
    'userAgent',
    'url',
    '_edgeSwipeDetection',
    '_edgeSwipeThreshold',
    '_freeMode',
    '_freeModeMomentum',
    '_freeModeMomentumRatio',
    '_freeModeMomentumBounce',
    '_freeModeMomentumBounceRatio',
    '_freeModeMomentumVelocityRatio',
    '_freeModeSticky',
    '_freeModeMinimumVelocity',
    '_autoHeight',
    'setWrapperSize',
    'virtualTranslate',
    '_effect',
    'breakpoints',
    '_spaceBetween',
    '_slidesPerView',
    '_slidesPerColumn',
    '_slidesPerColumnFill',
    '_slidesPerGroup',
    '_slidesPerGroupSkip',
    '_centeredSlides',
    '_centeredSlidesBounds',
    '_slidesOffsetBefore',
    '_slidesOffsetAfter',
    'normalizeSlideIndex',
    '_centerInsufficientSlides',
    '_watchOverflow',
    'roundLengths',
    'touchRatio',
    'touchAngle',
    'simulateTouch',
    '_shortSwipes',
    '_longSwipes',
    'longSwipesRatio',
    'longSwipesMs',
    '_followFinger',
    'allowTouchMove',
    '_threshold',
    'touchMoveStopPropagation',
    'touchStartPreventDefault',
    'touchStartForcePreventDefault',
    'touchReleaseOnEdges',
    'uniqueNavElements',
    '_resistance',
    '_resistanceRatio',
    '_watchSlidesProgress',
    '_watchSlidesVisibility',
    '_grabCursor',
    'preventClicks',
    'preventClicksPropagation',
    '_slideToClickedSlide',
    '_preloadImages',
    'updateOnImagesReady',
    '_loop',
    '_loopAdditionalSlides',
    '_loopedSlides',
    '_loopFillGroupWithBlank',
    'loopPreventsSlide',
    '_allowSlidePrev',
    '_allowSlideNext',
    '_swipeHandler',
    '_noSwiping',
    'noSwipingClass',
    'noSwipingSelector',
    'passiveListeners',
    'containerModifierClass',
    'slideClass',
    'slideBlankClass',
    'slideActiveClass',
    'slideDuplicateActiveClass',
    'slideVisibleClass',
    'slideDuplicateClass',
    'slideNextClass',
    'slideDuplicateNextClass',
    'slidePrevClass',
    'slideDuplicatePrevClass',
    'wrapperClass',
    'runCallbacksOnInit',
    'observer',
    'observeParents',
    'observeSlideChildren',
    'a11y',
    'autoplay',
    '_controller',
    'coverflowEffect',
    'cubeEffect',
    'fadeEffect',
    'flipEffect',
    'hashNavigation',
    'history',
    'keyboard',
    'lazy',
    'mousewheel',
    '_navigation',
    '_pagination',
    'parallax',
    '_scrollbar',
    '_thumbs',
    'virtual',
    'zoom'
];
function lt(t) {
    t === void 0 && (t = {});
    var e = { on: {} },
        r = {};
    U(e, de.defaults),
        U(e, de.extendedDefaults),
        (e._emitClasses = !0),
        (e.init = !1);
    var i = {},
        n = Ct.map(function (s) {
            return s.replace(/_/, '');
        }),
        a = Object.assign({}, t);
    return (
        Object.keys(a).forEach(function (s) {
            typeof t[s] != 'undefined' &&
                (n.indexOf(s) >= 0
                    ? ee(t[s])
                        ? ((e[s] = {}),
                          (r[s] = {}),
                          U(e[s], t[s]),
                          U(r[s], t[s]))
                        : ((e[s] = t[s]), (r[s] = t[s]))
                    : s.search(/on[A-Z]/) === 0 && typeof t[s] == 'function'
                    ? (e.on['' + s[2].toLowerCase() + s.substr(3)] = t[s])
                    : (i[s] = t[s]));
        }),
        ['navigation', 'pagination', 'scrollbar'].forEach(function (s) {
            e[s] === !0 && (e[s] = {}), e[s] === !1 && delete e[s];
        }),
        { params: e, passedParams: r, rest: i }
    );
}
function an(t) {
    return new de(t);
}
function sn(t, e) {
    var r = t.el,
        i = t.nextEl,
        n = t.prevEl,
        a = t.paginationEl,
        s = t.scrollbarEl,
        l = t.swiper;
    St(e) &&
        i &&
        n &&
        ((l.params.navigation.nextEl = i),
        (l.originalParams.navigation.nextEl = i),
        (l.params.navigation.prevEl = n),
        (l.originalParams.navigation.prevEl = n)),
        bt(e) &&
            a &&
            ((l.params.pagination.el = a),
            (l.originalParams.pagination.el = a)),
        yt(e) &&
            s &&
            ((l.params.scrollbar.el = s), (l.originalParams.scrollbar.el = s)),
        l.init(r);
}
function He() {
    return (
        (He =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) &&
                            (t[i] = r[i]);
                }
                return t;
            }),
        He.apply(this, arguments)
    );
}
function Et(t, e) {
    var r = e.slidesPerView;
    if (e.breakpoints) {
        var i = de.prototype.getBreakpoint(e.breakpoints),
            n = i in e.breakpoints ? e.breakpoints[i] : void 0;
        n && n.slidesPerView && (r = n.slidesPerView);
    }
    var a = Math.ceil(parseFloat(e.loopedSlides || r, 10));
    return (a += e.loopAdditionalSlides), a > t.length && (a = t.length), a;
}
function ln(t, e, r) {
    var i = e.map(function (p, f) {
        return (
            p.props || (p.props = {}),
            (p.props.swiperRef = t),
            (p.props['data-swiper-slide-index'] = f),
            p
        );
    });
    function n(p, f, c) {
        return (
            p.props || (p.props = {}),
            F(
                p.type,
                He({}, p.props, {
                    key: p.key + '-duplicate-' + f + '-' + c,
                    class:
                        (p.props.className || '') +
                        ' ' +
                        r.slideDuplicateClass +
                        ' ' +
                        (p.props.class || '')
                }),
                p.children
            )
        );
    }
    if (r.loopFillGroupWithBlank) {
        var a = r.slidesPerGroup - (i.length % r.slidesPerGroup);
        if (a !== r.slidesPerGroup)
            for (var s = 0; s < a; s += 1) {
                var l = F('div', {
                    class: r.slideClass + ' ' + r.slideBlankClass
                });
                i.push(l);
            }
    }
    r.slidesPerView === 'auto' &&
        !r.loopedSlides &&
        (r.loopedSlides = i.length);
    var o = Et(i, r),
        d = [],
        u = [];
    return (
        i.forEach(function (p, f) {
            f < o && u.push(n(p, f, 'prepend')),
                f < i.length && f >= i.length - o && d.push(n(p, f, 'append'));
        }),
        t.value && (t.value.loopedSlides = o),
        [].concat(d, i, u)
    );
}
function on(t, e, r, i) {
    var n = [];
    if (!e) return n;
    var a = function (u) {
            n.indexOf(u) < 0 && n.push(u);
        },
        s = i.map(function (d) {
            return d.props && d.props.key;
        }),
        l = r.map(function (d) {
            return d.props && d.props.key;
        });
    s.join('') !== l.join('') && n.push('children'),
        i.length !== r.length && n.push('children');
    var o = Ct.filter(function (d) {
        return d[0] === '_';
    }).map(function (d) {
        return d.replace(/_/, '');
    });
    return (
        o.forEach(function (d) {
            if (d in t && d in e)
                if (ee(t[d]) && ee(e[d])) {
                    var u = Object.keys(t[d]),
                        p = Object.keys(e[d]);
                    u.length !== p.length
                        ? a(d)
                        : (u.forEach(function (f) {
                              t[d][f] !== e[d][f] && a(d);
                          }),
                          p.forEach(function (f) {
                              t[d][f] !== e[d][f] && a(d);
                          }));
                } else t[d] !== e[d] && a(d);
        }),
        n
    );
}
function Ae(t, e, r) {
    t === void 0 && (t = {});
    var i = [],
        n = {
            'container-start': [],
            'container-end': [],
            'wrapper-start': [],
            'wrapper-end': []
        },
        a = function s(l, o) {
            !Array.isArray(l) ||
                l.forEach(function (d) {
                    var u = typeof d.type == 'symbol';
                    o === 'default' && (o = 'container-end'),
                        u && d.children
                            ? s(d.children, 'default')
                            : d.type &&
                              (d.type.name === 'SwiperSlide' ||
                                  d.type.name === 'AsyncComponentWrapper')
                            ? i.push(d)
                            : n[o] && n[o].push(d);
                });
        };
    return (
        Object.keys(t).forEach(function (s) {
            var l = t[s]();
            a(l, s);
        }),
        (r.value = e.value),
        (e.value = i),
        { slides: i, slots: n }
    );
}
function dn(t) {
    var e = t.swiper,
        r = t.slides,
        i = t.passedParams,
        n = t.changedParams,
        a = t.nextEl,
        s = t.prevEl,
        l = t.paginationEl,
        o = t.scrollbarEl,
        d = n.filter(function (T) {
            return T !== 'children' && T !== 'direction';
        }),
        u = e.params,
        p = e.pagination,
        f = e.navigation,
        c = e.scrollbar,
        v = e.virtual,
        h = e.thumbs,
        S,
        y,
        E,
        b,
        m;
    n.includes('thumbs') &&
        i.thumbs &&
        i.thumbs.swiper &&
        u.thumbs &&
        !u.thumbs.swiper &&
        (S = !0),
        n.includes('controller') &&
            i.controller &&
            i.controller.control &&
            u.controller &&
            !u.controller.control &&
            (y = !0),
        n.includes('pagination') &&
            i.pagination &&
            (i.pagination.el || l) &&
            (u.pagination || u.pagination === !1) &&
            p &&
            !p.el &&
            (E = !0),
        n.includes('scrollbar') &&
            i.scrollbar &&
            (i.scrollbar.el || o) &&
            (u.scrollbar || u.scrollbar === !1) &&
            c &&
            !c.el &&
            (b = !0),
        n.includes('navigation') &&
            i.navigation &&
            (i.navigation.prevEl || s) &&
            (i.navigation.nextEl || a) &&
            (u.navigation || u.navigation === !1) &&
            f &&
            !f.prevEl &&
            !f.nextEl &&
            (m = !0);
    var O = function (w) {
        !e[w] ||
            (e[w].destroy(),
            w === 'navigation'
                ? ((u[w].prevEl = void 0),
                  (u[w].nextEl = void 0),
                  (e[w].prevEl = void 0),
                  (e[w].nextEl = void 0))
                : ((u[w].el = void 0), (e[w].el = void 0)));
    };
    if (
        (d.forEach(function (T) {
            if (ee(u[T]) && ee(i[T])) U(u[T], i[T]);
            else {
                var w = i[T];
                (w === !0 || w === !1) &&
                (T === 'navigation' || T === 'pagination' || T === 'scrollbar')
                    ? w === !1 && O(T)
                    : (u[T] = i[T]);
            }
        }),
        n.includes('children') && v && u.virtual.enabled
            ? ((v.slides = r), v.update(!0))
            : n.includes('children') &&
              e.lazy &&
              e.params.lazy.enabled &&
              e.lazy.load(),
        S)
    ) {
        var $ = h.init();
        $ && h.update(!0);
    }
    y && (e.controller.control = u.controller.control),
        E && (l && (u.pagination.el = l), p.init(), p.render(), p.update()),
        b &&
            (o && (u.scrollbar.el = o),
            c.init(),
            c.updateSize(),
            c.setTranslate()),
        m &&
            (a && (u.navigation.nextEl = a),
            s && (u.navigation.prevEl = s),
            f.init(),
            f.update()),
        n.includes('allowSlideNext') && (e.allowSlideNext = i.allowSlideNext),
        n.includes('allowSlidePrev') && (e.allowSlidePrev = i.allowSlidePrev),
        n.includes('direction') && e.changeDirection(i.direction, !1),
        e.update();
}
function Fe() {
    return (
        (Fe =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) &&
                            (t[i] = r[i]);
                }
                return t;
            }),
        Fe.apply(this, arguments)
    );
}
function un(t) {
    !t ||
        t.destroyed ||
        !t.params.virtual ||
        (t.params.virtual && !t.params.virtual.enabled) ||
        (t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses(),
        t.lazy && t.params.lazy.enabled && t.lazy.load(),
        t.parallax &&
            t.params.parallax &&
            t.params.parallax.enabled &&
            t.parallax.setTranslate());
}
function fn(t, e, r) {
    var i;
    if (!r) return null;
    var n = t.value.isHorizontal()
        ? ((i = {}),
          (i[t.value.rtlTranslate ? 'right' : 'left'] = r.offset + 'px'),
          i)
        : { top: r.offset + 'px' };
    return e
        .filter(function (a, s) {
            return s >= r.from && s <= r.to;
        })
        .map(function (a) {
            return (
                a.props || (a.props = {}),
                a.props.style || (a.props.style = {}),
                (a.props.swiperRef = t),
                (a.props.style = n),
                F(a.type, Fe({}, a.props), a.children)
            );
        });
}
var pn = {
        name: 'Swiper',
        props: {
            tag: { type: String, default: 'div' },
            wrapperTag: { type: String, default: 'div' },
            init: { type: Boolean, default: void 0 },
            direction: { type: String, default: void 0 },
            touchEventsTarget: { type: String, default: void 0 },
            initialSlide: { type: Number, default: void 0 },
            speed: { type: Number, default: void 0 },
            cssMode: { type: Boolean, default: void 0 },
            updateOnWindowResize: { type: Boolean, default: void 0 },
            resizeObserver: { type: Boolean, default: void 0 },
            nested: { type: Boolean, default: void 0 },
            focusableElements: { type: String, default: void 0 },
            width: { type: Number, default: void 0 },
            height: { type: Number, default: void 0 },
            preventInteractionOnTransition: { type: Boolean, default: void 0 },
            userAgent: { type: String, default: void 0 },
            url: { type: String, default: void 0 },
            edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
            edgeSwipeThreshold: { type: Number, default: void 0 },
            freeMode: { type: Boolean, default: void 0 },
            freeModeMomentum: { type: Boolean, default: void 0 },
            freeModeMomentumRatio: { type: Number, default: void 0 },
            freeModeMomentumBounce: { type: Boolean, default: void 0 },
            freeModeMomentumBounceRatio: { type: Number, default: void 0 },
            freeModeMomentumVelocityRatio: { type: Number, default: void 0 },
            freeModeSticky: { type: Boolean, default: void 0 },
            freeModeMinimumVelocity: { type: Number, default: void 0 },
            autoHeight: { type: Boolean, default: void 0 },
            setWrapperSize: { type: Boolean, default: void 0 },
            virtualTranslate: { type: Boolean, default: void 0 },
            effect: { type: String, default: void 0 },
            breakpoints: { type: Object, default: void 0 },
            spaceBetween: { type: Number, default: void 0 },
            slidesPerView: { type: [Number, String], default: void 0 },
            slidesPerColumn: { type: Number, default: void 0 },
            slidesPerColumnFill: { type: String, default: void 0 },
            slidesPerGroup: { type: Number, default: void 0 },
            slidesPerGroupSkip: { type: Number, default: void 0 },
            centeredSlides: { type: Boolean, default: void 0 },
            centeredSlidesBounds: { type: Boolean, default: void 0 },
            slidesOffsetBefore: { type: Number, default: void 0 },
            slidesOffsetAfter: { type: Number, default: void 0 },
            normalizeSlideIndex: { type: Boolean, default: void 0 },
            centerInsufficientSlides: { type: Boolean, default: void 0 },
            watchOverflow: { type: Boolean, default: void 0 },
            roundLengths: { type: Boolean, default: void 0 },
            touchRatio: { type: Number, default: void 0 },
            touchAngle: { type: Number, default: void 0 },
            simulateTouch: { type: Boolean, default: void 0 },
            shortSwipes: { type: Boolean, default: void 0 },
            longSwipes: { type: Boolean, default: void 0 },
            longSwipesRatio: { type: Number, default: void 0 },
            longSwipesMs: { type: Number, default: void 0 },
            followFinger: { type: Boolean, default: void 0 },
            allowTouchMove: { type: Boolean, default: void 0 },
            threshold: { type: Number, default: void 0 },
            touchMoveStopPropagation: { type: Boolean, default: void 0 },
            touchStartPreventDefault: { type: Boolean, default: void 0 },
            touchStartForcePreventDefault: { type: Boolean, default: void 0 },
            touchReleaseOnEdges: { type: Boolean, default: void 0 },
            uniqueNavElements: { type: Boolean, default: void 0 },
            resistance: { type: Boolean, default: void 0 },
            resistanceRatio: { type: Number, default: void 0 },
            watchSlidesProgress: { type: Boolean, default: void 0 },
            watchSlidesVisibility: { type: Boolean, default: void 0 },
            grabCursor: { type: Boolean, default: void 0 },
            preventClicks: { type: Boolean, default: void 0 },
            preventClicksPropagation: { type: Boolean, default: void 0 },
            slideToClickedSlide: { type: Boolean, default: void 0 },
            preloadImages: { type: Boolean, default: void 0 },
            updateOnImagesReady: { type: Boolean, default: void 0 },
            loop: { type: Boolean, default: void 0 },
            loopAdditionalSlides: { type: Number, default: void 0 },
            loopedSlides: { type: Number, default: void 0 },
            loopFillGroupWithBlank: { type: Boolean, default: void 0 },
            loopPreventsSlide: { type: Boolean, default: void 0 },
            allowSlidePrev: { type: Boolean, default: void 0 },
            allowSlideNext: { type: Boolean, default: void 0 },
            swipeHandler: { type: Boolean, default: void 0 },
            noSwiping: { type: Boolean, default: void 0 },
            noSwipingClass: { type: String, default: void 0 },
            noSwipingSelector: { type: String, default: void 0 },
            passiveListeners: { type: Boolean, default: void 0 },
            containerModifierClass: { type: String, default: void 0 },
            slideClass: { type: String, default: void 0 },
            slideBlankClass: { type: String, default: void 0 },
            slideActiveClass: { type: String, default: void 0 },
            slideDuplicateActiveClass: { type: String, default: void 0 },
            slideVisibleClass: { type: String, default: void 0 },
            slideDuplicateClass: { type: String, default: void 0 },
            slideNextClass: { type: String, default: void 0 },
            slideDuplicateNextClass: { type: String, default: void 0 },
            slidePrevClass: { type: String, default: void 0 },
            slideDuplicatePrevClass: { type: String, default: void 0 },
            wrapperClass: { type: String, default: void 0 },
            runCallbacksOnInit: { type: Boolean, default: void 0 },
            observer: { type: Boolean, default: void 0 },
            observeParents: { type: Boolean, default: void 0 },
            observeSlideChildren: { type: Boolean, default: void 0 },
            a11y: { type: [Boolean, Object], default: void 0 },
            autoplay: { type: [Boolean, Object], default: void 0 },
            controller: { type: Object, default: void 0 },
            coverflowEffect: { type: Object, default: void 0 },
            cubeEffect: { type: Object, default: void 0 },
            fadeEffect: { type: Object, default: void 0 },
            flipEffect: { type: Object, default: void 0 },
            hashNavigation: { type: [Boolean, Object], default: void 0 },
            history: { type: [Boolean, Object], default: void 0 },
            keyboard: { type: [Boolean, Object], default: void 0 },
            lazy: { type: [Boolean, Object], default: void 0 },
            mousewheel: { type: [Boolean, Object], default: void 0 },
            navigation: { type: [Boolean, Object], default: void 0 },
            pagination: { type: [Boolean, Object], default: void 0 },
            parallax: { type: [Boolean, Object], default: void 0 },
            scrollbar: { type: [Boolean, Object], default: void 0 },
            thumbs: { type: Object, default: void 0 },
            virtual: { type: [Boolean, Object], default: void 0 },
            zoom: { type: [Boolean, Object], default: void 0 }
        },
        emits: [
            '_beforeBreakpoint',
            '_containerClasses',
            '_slideClass',
            '_slideClasses',
            '_swiper',
            'activeIndexChange',
            'afterInit',
            'autoplay',
            'autoplayStart',
            'autoplayStop',
            'beforeDestroy',
            'beforeInit',
            'beforeLoopFix',
            'beforeResize',
            'beforeSlideChangeStart',
            'beforeTransitionStart',
            'breakpoint',
            'changeDirection',
            'click',
            'disable',
            'doubleTap',
            'doubleClick',
            'destroy',
            'enable',
            'fromEdge',
            'hashChange',
            'hashSet',
            'imagesReady',
            'init',
            'keyPress',
            'lazyImageLoad',
            'lazyImageReady',
            'lock',
            'loopFix',
            'momentumBounce',
            'navigationHide',
            'navigationShow',
            'observerUpdate',
            'orientationchange',
            'paginationHide',
            'paginationRender',
            'paginationShow',
            'paginationUpdate',
            'progress',
            'reachBeginning',
            'reachEnd',
            'realIndexChange',
            'resize',
            'scroll',
            'scrollbarDragEnd',
            'scrollbarDragMove',
            'scrollbarDragStart',
            'setTransition',
            'setTranslate',
            'slideChange',
            'slideChangeTransitionEnd',
            'slideChangeTransitionStart',
            'slideNextTransitionEnd',
            'slideNextTransitionStart',
            'slidePrevTransitionEnd',
            'slidePrevTransitionStart',
            'slideResetTransitionStart',
            'slideResetTransitionEnd',
            'sliderMove',
            'sliderFirstMove',
            'slidesLengthChange',
            'slidesGridLengthChange',
            'snapGridLengthChange',
            'snapIndexChange',
            'swiper',
            'tap',
            'toEdge',
            'touchEnd',
            'touchMove',
            'touchMoveOpposite',
            'touchStart',
            'transitionEnd',
            'transitionStart',
            'unlock',
            'update',
            'zoomChange'
        ],
        setup: function (e, r) {
            var i = r.slots,
                n = r.emit,
                a = e.tag,
                s = e.wrapperTag,
                l = P('swiper-container'),
                o = P(null),
                d = P(!1),
                u = P(!1),
                p = P(null),
                f = P(null),
                c = P(null),
                v = { value: [] },
                h = { value: [] },
                S = P(null),
                y = P(null),
                E = P(null),
                b = P(null),
                m = lt(e),
                O = m.params,
                $ = m.passedParams;
            Ae(i, v, h), (c.value = $), (h.value = v.value);
            var T = function () {
                Ae(i, v, h), (d.value = !0);
            };
            if (
                ((O.onAny = function (x) {
                    for (
                        var _ = arguments.length,
                            L = new Array(_ > 1 ? _ - 1 : 0),
                            M = 1;
                        M < _;
                        M++
                    )
                        L[M - 1] = arguments[M];
                    n.apply(void 0, [x].concat(L));
                }),
                Object.assign(O.on, {
                    _beforeBreakpoint: T,
                    _containerClasses: function (_, L) {
                        l.value = L;
                    }
                }),
                (f.value = an(O)),
                (f.value.loopCreate = function () {}),
                (f.value.loopDestroy = function () {}),
                O.loop && (f.value.loopedSlides = Et(v.value, O)),
                f.value.virtual && f.value.params.virtual.enabled)
            ) {
                f.value.virtual.slides = v.value;
                var w = {
                    cache: !1,
                    renderExternal: function (_) {
                        o.value = _;
                    },
                    renderExternalUpdate: !1
                };
                U(f.value.params.virtual, w),
                    U(f.value.originalParams.virtual, w);
            }
            ot(function () {
                !u.value &&
                    f.value &&
                    (f.value.emitSlidesClasses(), (u.value = !0));
                var x = lt(e),
                    _ = x.passedParams,
                    L = on(_, c.value, v.value, h.value);
                (c.value = _),
                    (L.length || d.value) &&
                        f.value &&
                        !f.value.destroyed &&
                        dn({
                            swiper: f.value,
                            slides: v.value,
                            passedParams: _,
                            changedParams: L,
                            nextEl: S.value,
                            prevEl: y.value,
                            scrollbarEl: b.value,
                            paginationEl: E.value
                        }),
                    (d.value = !1);
            }),
                dt(o, function () {
                    Bt(function () {
                        un(f.value);
                    });
                }),
                te(function () {
                    !p.value ||
                        (sn(
                            {
                                el: p.value,
                                nextEl: S.value,
                                prevEl: y.value,
                                paginationEl: E.value,
                                scrollbarEl: b.value,
                                swiper: f.value
                            },
                            O
                        ),
                        n('swiper', f.value));
                }),
                ut(function () {
                    f.value && !f.value.destroyed && f.value.destroy(!0, !1);
                });
            function B(x) {
                return O.virtual
                    ? fn(f, x, o.value)
                    : !O.loop || (f.value && f.value.destroyed)
                    ? (x.forEach(function (_) {
                          _.props || (_.props = {}), (_.props.swiperRef = f);
                      }),
                      x)
                    : ln(f, x, O);
            }
            return function () {
                var x = Ae(i, v, h),
                    _ = x.slides,
                    L = x.slots;
                return F(a, { ref: p, class: Tt(l.value) }, [
                    L['container-start'],
                    St(e) && [
                        F('div', { ref: y, class: 'swiper-button-prev' }),
                        F('div', { ref: S, class: 'swiper-button-next' })
                    ],
                    yt(e) && F('div', { ref: b, class: 'swiper-scrollbar' }),
                    bt(e) && F('div', { ref: E, class: 'swiper-pagination' }),
                    F(s, { class: 'swiper-wrapper' }, [
                        L['wrapper-start'],
                        B(_),
                        L['wrapper-end']
                    ]),
                    L['container-end']
                ]);
            };
        }
    },
    cn = {
        name: 'SwiperSlide',
        props: {
            tag: { type: String, default: 'div' },
            swiperRef: Object,
            zoom: { type: Boolean, default: void 0 },
            virtualIndex: { type: [String, Number], default: void 0 }
        },
        setup: function (e, r) {
            var i = r.slots,
                n = !1,
                a = e.swiperRef,
                s = P(null),
                l = P('swiper-slide');
            function o(u, p, f) {
                p === s.value && (l.value = f);
            }
            te(function () {
                !a.value || (a.value.on('_slideClass', o), (n = !0));
            }),
                At(function () {
                    n ||
                        !a ||
                        !a.value ||
                        (a.value.on('_slideClass', o), (n = !0));
                }),
                ot(function () {
                    !s.value ||
                        !a ||
                        !a.value ||
                        (a.value.destroyed &&
                            l.value !== 'swiper-slide' &&
                            (l.value = 'swiper-slide'));
                }),
                ut(function () {
                    !a || !a.value || a.value.off('_slideClass', o);
                });
            var d = ge(function () {
                return {
                    isActive:
                        l.value.indexOf('swiper-slide-active') >= 0 ||
                        l.value.indexOf('swiper-slide-duplicate-active') >= 0,
                    isVisible: l.value.indexOf('swiper-slide-visible') >= 0,
                    isDuplicate: l.value.indexOf('swiper-slide-duplicate') >= 0,
                    isPrev:
                        l.value.indexOf('swiper-slide-prev') >= 0 ||
                        l.value.indexOf('swiper-slide-duplicate-prev') >= 0,
                    isNext:
                        l.value.indexOf('swiper-slide-next') >= 0 ||
                        l.value.indexOf('swiper-slide-duplicate-next') >= 0
                };
            });
            return function () {
                return F(
                    e.tag,
                    {
                        class: Tt('' + l.value),
                        ref: s,
                        'data-swiper-slide-index': e.virtualIndex
                    },
                    e.zoom
                        ? F(
                              'div',
                              {
                                  class: 'swiper-zoom-container',
                                  'data-swiper-zoom':
                                      typeof e.zoom == 'number'
                                          ? e.zoom
                                          : void 0
                              },
                              i.default && i.default(d.value)
                          )
                        : i.default && i.default(d.value)
                );
            };
        }
    };
const vn = Y({
        setup() {
            const t = tt({ x: 0, y: 0 }),
                e = tt({ x: 0, y: 0 }),
                r = P(0),
                i = P(0);
            function n(l) {
                if (l instanceof MouseEvent) {
                    const { offsetX: o, offsetY: d } = l;
                    (t.x = o >= 0 ? o : 0),
                        (t.y = d >= 0 ? d : 0),
                        (i.value = ((o - e.x) / e.x) * 10),
                        (r.value = ((e.y - d) / e.y) * 5);
                } else {
                    const d = l.target.getBoundingClientRect(),
                        u = l.targetTouches[0].pageX - d.left,
                        p = l.targetTouches[0].pageY - d.top;
                    (i.value = ((u - e.x) / e.x) * 10),
                        (r.value = ((e.y - p) / e.y) * 5);
                }
            }
            function a(l) {
                const o = l.target,
                    d = Number(
                        getComputedStyle(o)
                            .getPropertyValue('height')
                            .replace('px', '')
                    ),
                    u = Number(
                        getComputedStyle(o)
                            .getPropertyValue('width')
                            .replace('px', '')
                    );
                (e.x = u / 2), (e.y = d / 2);
            }
            function s() {
                (r.value = 0), (i.value = 0);
            }
            return {
                offset: t,
                center: e,
                rotateX: r,
                rotateY: i,
                useGetImageUrl: We,
                moveHandle: n,
                enterHandle: a,
                leaveHandle: s
            };
        }
    }),
    hn = (t) => (Ve('data-v-44a91880'), (t = t()), je(), t),
    mn = ['src'],
    gn = hn(() =>
        C(
            'div',
            { class: 'text' },
            [
                C('div', { class: 'title' }, '\u99AC\u7406\u7531\u6CE2'),
                C(
                    'span',
                    { class: 'description' },
                    'Lorem ipsum dolor sit amet conse'
                )
            ],
            -1
        )
    );
function wn(t, e, r, i, n, a) {
    return (
        I(),
        z(
            'div',
            {
                class: 'card_container',
                onTouchstartPassive:
                    e[0] ||
                    (e[0] = (...s) => t.enterHandle && t.enterHandle(...s)),
                onMouseenter:
                    e[1] ||
                    (e[1] = (...s) => t.enterHandle && t.enterHandle(...s)),
                onMousemovePassive:
                    e[2] ||
                    (e[2] = (...s) => t.moveHandle && t.moveHandle(...s)),
                onTouchmovePassive:
                    e[3] ||
                    (e[3] = (...s) => t.moveHandle && t.moveHandle(...s)),
                onMouseleave:
                    e[4] ||
                    (e[4] = (...s) => t.leaveHandle && t.leaveHandle(...s)),
                onTouchend:
                    e[5] ||
                    (e[5] = (...s) => t.leaveHandle && t.leaveHandle(...s)),
                style: $t({
                    transform: `rotateY(${t.rotateY}deg) rotateX(${t.rotateX}deg)`
                })
            },
            [
                C(
                    'img',
                    { class: 'image', src: t.useGetImageUrl('cat') },
                    null,
                    8,
                    mn
                ),
                gn
            ],
            36
        )
    );
}
var xt = q(vn, [
    ['render', wn],
    ['__scopeId', 'data-v-44a91880']
]);
de.use([wt]);
const Sn = {
    components: { Swiper: pn, SwiperSlide: cn, Card: xt },
    setup() {
        return { modules: [wt] };
    }
};
function bn(t, e, r, i, n, a) {
    const s = j('Card'),
        l = j('swiper-slide'),
        o = j('swiper', !0);
    return (
        I(),
        ft(
            o,
            {
                'slides-per-view': 1,
                'space-between': 0,
                class: 'swiper',
                pagination: { clickable: !0 }
            },
            {
                default: $e(() => [
                    (I(),
                    z(
                        se,
                        null,
                        ae(5, (d) =>
                            W(
                                l,
                                { key: d, class: 'swiper_slide' },
                                { default: $e(() => [W(s)]), _: 2 },
                                1024
                            )
                        ),
                        64
                    ))
                ]),
                _: 1
            }
        )
    );
}
var yn = q(Sn, [
    ['render', bn],
    ['__scopeId', 'data-v-45f4481b']
]);
const Tn = Y({
        setup() {
            const { t } = le();
            return { t };
        }
    }),
    _t = (t) => (Ve('data-v-20d9eaa6'), (t = t()), je(), t),
    Cn = { class: 'footer_container' },
    En = { class: 'description' },
    xn = _t(() =>
        C(
            'a',
            {
                href: 'https://brittanychiang.com/',
                target: '_blank',
                rel: 'noreferrer noopener'
            },
            ' https://brittanychiang.com/ ',
            -1
        )
    ),
    _n = _t(() =>
        C(
            'svg',
            {
                class: 'waves',
                xmlns: 'http://www.w3.org/2000/svg',
                'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                viewBox: '0 24 150 28',
                preserveAspectRatio: 'none',
                'shape-rendering': 'auto'
            },
            [
                C('defs', null, [
                    C('path', {
                        id: 'gentle-wave',
                        d: 'M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
                    })
                ]),
                C('g', { class: 'parallax' }, [
                    C('use', {
                        'xlink:href': '#gentle-wave',
                        x: '48',
                        y: '0',
                        fill: 'rgba(255,255,255,0.7'
                    }),
                    C('use', {
                        'xlink:href': '#gentle-wave',
                        x: '48',
                        y: '3',
                        fill: 'rgba(255,255,255,0.5)'
                    }),
                    C('use', {
                        'xlink:href': '#gentle-wave',
                        x: '48',
                        y: '5',
                        fill: 'rgba(255,255,255,0.3)'
                    }),
                    C('use', {
                        'xlink:href': '#gentle-wave',
                        x: '48',
                        y: '7',
                        fill: '#fff'
                    })
                ])
            ],
            -1
        )
    );
function Mn(t, e, r, i, n, a) {
    return (
        I(),
        z('div', Cn, [
            C('div', En, [pt(k(t.t('FOOTER_MESSAGE')) + ' ', 1), xn]),
            _n
        ])
    );
}
var Ln = q(Tn, [
    ['render', Mn],
    ['__scopeId', 'data-v-20d9eaa6']
]);
const On = Y({
        setup() {
            const t = P(),
                { commit: e } = ue(),
                { t: r, locale: i } = le();
            return (
                te(() => {
                    const n = Se(t.value);
                    e('setScrollTopList', { key: 'intro', value: n });
                }),
                console.log(),
                { introContainerRef: t, locale: i, useGetImageUrl: We, t: r }
            );
        }
    }),
    Pn = { class: 'intro_container', ref: 'introContainerRef' },
    In = { class: 'avatar_container' },
    Bn = { class: 'image_container' },
    An = {
        href: 'https://www.linkedin.com/in/chih-yu-chen-095029191/',
        target: '_blank',
        rel: 'noreferrer noopener'
    },
    $n = { class: 'image' },
    Rn = ['data-language'];
function zn(t, e, r, i, n, a) {
    const s = Rt('src');
    return (
        I(),
        z(
            'div',
            Pn,
            [
                C('div', In, [
                    C('div', Bn, [
                        C('a', An, [
                            zt(C('img', $n, null, 512), [
                                [s, t.useGetImageUrl('self')]
                            ])
                        ])
                    ])
                ]),
                C(
                    'div',
                    {
                        class: 'description_container',
                        'data-language': t.locale
                    },
                    k(t.t('ABOUT_ME_DESCRIPTION')),
                    9,
                    Rn
                )
            ],
            512
        )
    );
}
var Nn = q(On, [
    ['render', zn],
    ['__scopeId', 'data-v-499f5ea2']
]);
function Gn(t, e, r) {
    const i = t,
        n = { threshold: 0.8 },
        a = new IntersectionObserver(l, n),
        s = i.querySelectorAll(e);
    function l(o, d) {
        o.forEach((u) => {
            const p = u.target;
            u.isIntersecting && (p.classList.add(r), d.unobserve(p));
        });
    }
    s.forEach((o) => a.observe(o));
}
var Dn = [
    { id: 1, href: 'tel:0988403958', icon: 'mobile' },
    { id: 2, href: 'mailto:chenchihyu2014@gmail.com', icon: 'paper-plane' },
    {
        id: 3,
        href: 'https://www.linkedin.com/in/chih-yu-chen-095029191/',
        icon: 'linkedin'
    },
    { id: 4, href: 'https://github.com/chenchihyu2016/profile', icon: 'github' }
];
const kn = Y({
        setup() {
            const t = P(),
                { commit: e } = ue(),
                { t: r } = le(),
                i = P(Dn);
            return (
                te(() => {
                    const n = Se(t.value);
                    Gn(t.value, '.contact', 'float'),
                        e('setScrollTopList', { key: 'contact', value: n });
                }),
                { contactContainerRef: t, contacts: i, t: r }
            );
        }
    }),
    Hn = { class: 'contact_container', ref: 'contactContainerRef' },
    Fn = { class: 'header_title' },
    Vn = ['href'];
function jn(t, e, r, i, n, a) {
    const s = j('font-awesome-icon');
    return (
        I(),
        z(
            'div',
            Hn,
            [
                C('h2', Fn, k(t.t('CONTACT_ME')), 1),
                (I(!0),
                z(
                    se,
                    null,
                    ae(
                        t.contacts,
                        (l) => (
                            I(),
                            z('div', { class: 'contact', key: l.id }, [
                                W(
                                    s,
                                    {
                                        icon: [
                                            ['linkedin', 'github'].includes(
                                                l.icon
                                            )
                                                ? 'fab'
                                                : 'fas',
                                            l.icon
                                        ],
                                        class: ct(['icon', l.icon])
                                    },
                                    null,
                                    8,
                                    ['icon', 'class']
                                ),
                                C(
                                    'a',
                                    {
                                        class: 'info',
                                        href: l.href,
                                        target: '_blank',
                                        rel: 'noreferrer noopener'
                                    },
                                    k(l.href),
                                    9,
                                    Vn
                                )
                            ])
                        )
                    ),
                    128
                ))
            ],
            512
        )
    );
}
var Wn = q(kn, [
    ['render', jn],
    ['__scopeId', 'data-v-61e93b24']
]);
const qn = Y({
        setup() {
            return { useGetImageUrl: We };
        }
    }),
    Yn = (t) => (Ve('data-v-e03962b0'), (t = t()), je(), t),
    Xn = { class: 'image_container' },
    Un = ['src'],
    Kn = ['src'],
    Jn = Yn(() => C('span', { class: 'description' }, 'TEXT', -1));
function Qn(t, e, r, i, n, a) {
    return (
        I(),
        z('div', Xn, [
            C(
                'img',
                {
                    class: 'image background',
                    src: t.useGetImageUrl('mountain')
                },
                null,
                8,
                Un
            ),
            C(
                'img',
                { class: 'image foreground', src: t.useGetImageUrl('trees') },
                null,
                8,
                Kn
            ),
            Jn
        ])
    );
}
var Zn = q(qn, [
    ['render', Qn],
    ['__scopeId', 'data-v-e03962b0']
]);
const ea = [
        {
            date: '2022-01 ~ 2022-05',
            titleLocaleKey: 'FRONTEND_ENGINEER',
            descriptionLocaleKey: 'ENGINEER_FIRST_DESCRIPTION',
            companyLocaleKey: 'YESEE',
            tags: ['VUE 3', 'HTML', 'SASS', 'JAVASCRIPT'],
            companyURL: 'http://www.yesee.com.tw/'
        },
        {
            date: '2021-01 ~ 2021-12',
            titleLocaleKey: 'FRONTEND_ENGINEER',
            descriptionLocaleKey: 'ENGINEER_SECOND_DESCRIPTION',
            companyLocaleKey: 'YESEE',
            tags: ['VUE 2', 'JAVASCRIPT', 'SASS', 'TYPESCRIPT', 'HTML'],
            companyURL: 'http://www.yesee.com.tw/'
        },
        {
            date: '2020-01 ~ 2020-12',
            titleLocaleKey: 'BACKEND_ENGINEER',
            descriptionLocaleKey: 'ENGINEER_THIRD_DESCRIPTION',
            companyLocaleKey: 'YESEE',
            tags: ['SPRINGBOOT', 'JAVA', 'VUE 2', 'POSTGRESQL'],
            companyURL: 'http://www.yesee.com.tw/'
        }
    ],
    ta = [
        {
            date: '2018-07 ~ 2018-12',
            titleLocaleKey: 'TESTER',
            descriptionLocaleKey: 'TESTER_FIRST_DESCRIPTION',
            companyLocaleKey: 'QLOC.SA',
            tags: ['ENGLISH', 'TRADITIONAL_CHINESE'],
            companyURL: 'https://q-loc.com/'
        }
    ],
    ia = [
        {
            date: '2016-06 ~ 2018-03',
            titleLocaleKey: 'TUTOR',
            companyLocaleKey: 'WORDGOD',
            descriptionLocaleKey: 'TUTOR_FIRST_DESCRIPTION',
            tags: ['TOEFL_READING', 'TOEFL_WRITING'],
            companyURL: 'https://www.wordgod.com.tw/'
        }
    ];
var ra = { ENGINEER: ea, TESTER: ta, TUTOR: ia };
const na = Y({
        setup() {
            const t = P(),
                e = ['ENGINEER', 'TESTER', 'TUTOR'],
                r = P('ENGINEER'),
                { state: i, commit: n } = ue(),
                a = ge(() => i.isMobile),
                s = ra,
                { t: l } = le(),
                o = ge(() => s[r.value]);
            function d(f) {
                r.value = f;
            }
            function u(f) {
                return a.value ? f.replace('~', '<br>~<br>') : f;
            }
            function p(f) {
                window.open(f, 'target = _blank');
            }
            return (
                te(() => {
                    const f = Se(t.value);
                    n('setScrollTopList', { key: 'experience', value: f });
                }),
                {
                    experienceContainerRef: t,
                    tabs: e,
                    currentTab: r,
                    isMobile: a,
                    currentContent: o,
                    tabClickHandle: d,
                    dateHandle: u,
                    t: l,
                    companyClick: p
                }
            );
        }
    }),
    aa = { class: 'expericence_container', ref: 'experienceContainerRef' },
    sa = { class: 'header_title' },
    la = { class: 'tabs_container' },
    oa = ['onClick'],
    da = ['innerHTML'],
    ua = { class: 'content_info' },
    fa = { class: 'content_detail' },
    pa = ['onClick'],
    ca = { class: 'content_detail' },
    va = { class: 'content_detail' };
function ha(t, e, r, i, n, a) {
    return (
        I(),
        z(
            'div',
            aa,
            [
                C('h2', sa, k(t.t('WORK_EXPERIENCE')), 1),
                C('div', la, [
                    (I(!0),
                    z(
                        se,
                        null,
                        ae(
                            t.tabs,
                            (s, l) => (
                                I(),
                                z(
                                    'div',
                                    {
                                        class: ct([
                                            'tab',
                                            t.currentTab === s
                                                ? 'current_tab'
                                                : ''
                                        ]),
                                        key: l,
                                        onClick: (o) => t.tabClickHandle(s)
                                    },
                                    k(t.t(s)),
                                    11,
                                    oa
                                )
                            )
                        ),
                        128
                    ))
                ]),
                W(
                    Gt,
                    { name: 'fade', mode: 'out-in' },
                    {
                        default: $e(() => [
                            (I(),
                            ft(
                                Nt,
                                null,
                                [
                                    (I(),
                                    z(
                                        'div',
                                        {
                                            class: 'content_container',
                                            key: t.currentTab
                                        },
                                        [
                                            (I(!0),
                                            z(
                                                se,
                                                null,
                                                ae(
                                                    t.currentContent,
                                                    (s, l) => (
                                                        I(),
                                                        z(
                                                            'div',
                                                            {
                                                                class: 'content',
                                                                key: l
                                                            },
                                                            [
                                                                C(
                                                                    'span',
                                                                    {
                                                                        class: 'content_date',
                                                                        innerHTML:
                                                                            t.dateHandle(
                                                                                s.date
                                                                            )
                                                                    },
                                                                    null,
                                                                    8,
                                                                    da
                                                                ),
                                                                C('div', ua, [
                                                                    C(
                                                                        'span',
                                                                        fa,
                                                                        [
                                                                            pt(
                                                                                k(
                                                                                    t.t(
                                                                                        s.titleLocaleKey
                                                                                    )
                                                                                ) +
                                                                                    ' ',
                                                                                1
                                                                            ),
                                                                            C(
                                                                                'span',
                                                                                {
                                                                                    class: 'highlight_company',
                                                                                    onClick:
                                                                                        (
                                                                                            o
                                                                                        ) =>
                                                                                            t.companyClick(
                                                                                                s.companyURL
                                                                                            )
                                                                                },
                                                                                ' @' +
                                                                                    k(
                                                                                        t.t(
                                                                                            s.companyLocaleKey
                                                                                        )
                                                                                    ),
                                                                                9,
                                                                                pa
                                                                            )
                                                                        ]
                                                                    ),
                                                                    C(
                                                                        'span',
                                                                        ca,
                                                                        k(
                                                                            t.t(
                                                                                s.descriptionLocaleKey
                                                                            )
                                                                        ),
                                                                        1
                                                                    ),
                                                                    C(
                                                                        'span',
                                                                        va,
                                                                        [
                                                                            (I(
                                                                                !0
                                                                            ),
                                                                            z(
                                                                                se,
                                                                                null,
                                                                                ae(
                                                                                    s.tags,
                                                                                    (
                                                                                        o,
                                                                                        d
                                                                                    ) => (
                                                                                        I(),
                                                                                        z(
                                                                                            'span',
                                                                                            {
                                                                                                key: d,
                                                                                                class: 'content_tags'
                                                                                            },
                                                                                            k(
                                                                                                t.t(
                                                                                                    o
                                                                                                )
                                                                                            ),
                                                                                            1
                                                                                        )
                                                                                    )
                                                                                ),
                                                                                128
                                                                            ))
                                                                        ]
                                                                    )
                                                                ])
                                                            ]
                                                        )
                                                    )
                                                ),
                                                128
                                            ))
                                        ]
                                    ))
                                ],
                                1024
                            ))
                        ]),
                        _: 1
                    }
                )
            ],
            512
        )
    );
}
var ma = q(na, [
    ['render', ha],
    ['__scopeId', 'data-v-73eedb0a']
]);
const ga = Y({
        setup() {
            const { t } = le();
            return { t };
        }
    }),
    wa = { class: 'landing_page_container' },
    Sa = { class: 'greeting' },
    ba = ['innerHTML'];
function ya(t, e, r, i, n, a) {
    return (
        I(),
        z('div', wa, [
            C('span', Sa, k(t.t('LANDING_PAGE_GREETING')), 1),
            C(
                'span',
                {
                    class: 'description',
                    innerHTML: t.t('LANDING_PAGE_DESCRIPTION')
                },
                null,
                8,
                ba
            )
        ])
    );
}
var Ta = q(ga, [
        ['render', ya],
        ['__scopeId', 'data-v-00794541']
    ]),
    Ca = [
        {
            id: 1,
            href: 'https://gradiently.herokuapp.com/#/',
            nameLocaleKey: 'Gradiently',
            descriptionLocaleKey: 'GRADIENTLY_DESCRIPTION'
        }
    ];
const Ea = Y({
        setup() {
            const t = P(),
                e = P(Ca),
                { commit: r } = ue(),
                { t: i } = le();
            function n(a) {
                window.open(a, 'target = _blank');
            }
            return (
                te(() => {
                    const a = Se(t.value);
                    r('setScrollTopList', { key: 'externalLink', value: a });
                }),
                { externalLinkRef: t, links: e, openHandle: n, t: i }
            );
        }
    }),
    xa = { class: 'external_links_container', ref: 'externalLinkRef' },
    _a = { class: 'header_title' },
    Ma = ['onClick'],
    La = { class: 'name' },
    Oa = { class: 'description' };
function Pa(t, e, r, i, n, a) {
    return (
        I(),
        z(
            'div',
            xa,
            [
                C('h2', _a, k(t.t('EXTERNAL_LINK')), 1),
                (I(!0),
                z(
                    se,
                    null,
                    ae(
                        t.links,
                        (s) => (
                            I(),
                            z(
                                'div',
                                {
                                    class: 'external_link',
                                    key: s.id,
                                    onClick: (l) => t.openHandle(s.href)
                                },
                                [
                                    C('h3', La, k(t.t(s.nameLocaleKey)), 1),
                                    C(
                                        'span',
                                        Oa,
                                        k(t.t(s.descriptionLocaleKey)),
                                        1
                                    )
                                ],
                                8,
                                Ma
                            )
                        )
                    ),
                    128
                ))
            ],
            512
        )
    );
}
var Ia = q(Ea, [
    ['render', Pa],
    ['__scopeId', 'data-v-223495ce']
]);
const Ba = Y({
    components: {
        Intro: Nn,
        Swiper: yn,
        Footer: Ln,
        Card: xt,
        Contact: Wn,
        ParallaxImage: Zn,
        Experience: ma,
        LandingPage: Ta,
        ExternalLink: Ia
    },
    setup() {
        const { commit: t, state: e } = ue(),
            r = P(),
            i = ge(() => e.isMobile),
            {
                isSwipeDown: n,
                isSwipeUp: a,
                setTouchstartEvent: s,
                setTouchendEvent: l
            } = kt(),
            {
                scrollTopValue: o,
                setScrollTarget: d,
                setScrollTopValue: u
            } = Dt();
        dt(o, () => {
            i.value || r.value.scroll({ top: o.value, behavior: 'smooth' });
        });
        function p(c) {
            s(c);
        }
        function f(c) {
            l(c),
                a()
                    ? t('setIsSidebarShow', !0)
                    : n() && t('setIsSidebarShow', !1),
                l(null);
        }
        return (
            te(() => {
                const c = Number(sessionStorage.getItem('F0106_SCROLLTOP'));
                d(r.value), c && (u(c), (o.value = c));
            }),
            (window.onbeforeunload = () => {
                sessionStorage.setItem('F0106_SCROLLTOP', o.value.toString());
            }),
            {
                portfolioContainerRef: r,
                scrollTopValue: o,
                touchstartHandle: p,
                touchendHandle: f
            }
        );
    }
});
function Aa(t, e, r, i, n, a) {
    const s = j('LandingPage'),
        l = j('Intro'),
        o = j('Experience'),
        d = j('ExternalLink'),
        u = j('Contact'),
        p = j('Footer');
    return (
        I(),
        z(
            'div',
            {
                class: 'portfolio_container',
                ref: 'portfolioContainerRef',
                onTouchstartPassive:
                    e[0] ||
                    (e[0] = (...f) =>
                        t.touchstartHandle && t.touchstartHandle(...f)),
                onTouchEnd:
                    e[1] ||
                    (e[1] = (...f) =>
                        t.touchendHandle && t.touchendHandle(...f))
            },
            [W(s), W(l), W(o), W(d), W(u), W(p)],
            544
        )
    );
}
var za = q(Ba, [
    ['render', Aa],
    ['__scopeId', 'data-v-43418f94']
]);
export { za as default };
