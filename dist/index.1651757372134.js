var mf = Object.defineProperty;
var pf = (e, t, n) =>
    t in e
        ? mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n);
var xa = (e, t, n) => (pf(e, typeof t != 'symbol' ? t + '' : t, n), n);
const hf = function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        r(a);
    new MutationObserver((a) => {
        for (const i of a)
            if (i.type === 'childList')
                for (const s of i.addedNodes)
                    s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(a) {
        const i = {};
        return (
            a.integrity && (i.integrity = a.integrity),
            a.referrerpolicy && (i.referrerPolicy = a.referrerpolicy),
            a.crossorigin === 'use-credentials'
                ? (i.credentials = 'include')
                : a.crossorigin === 'anonymous'
                ? (i.credentials = 'omit')
                : (i.credentials = 'same-origin'),
            i
        );
    }
    function r(a) {
        if (a.ep) return;
        a.ep = !0;
        const i = n(a);
        fetch(a.href, i);
    }
};
hf();
function Ui(e, t) {
    const n = Object.create(null),
        r = e.split(',');
    for (let a = 0; a < r.length; a++) n[r[a]] = !0;
    return t ? (a) => !!n[a.toLowerCase()] : (a) => !!n[a];
}
const gf =
        'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
    vf = Ui(gf);
function Fl(e) {
    return !!e || e === '';
}
function Or(e) {
    if (q(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                a = we(r) ? yf(r) : Or(r);
            if (a) for (const i in a) t[i] = a[i];
        }
        return t;
    } else {
        if (we(e)) return e;
        if (Se(e)) return e;
    }
}
const _f = /;(?![^(]*\))/g,
    bf = /:(.+)/;
function yf(e) {
    const t = {};
    return (
        e.split(_f).forEach((n) => {
            if (n) {
                const r = n.split(bf);
                r.length > 1 && (t[r[0].trim()] = r[1].trim());
            }
        }),
        t
    );
}
function $n(e) {
    let t = '';
    if (we(e)) t = e;
    else if (q(e))
        for (let n = 0; n < e.length; n++) {
            const r = $n(e[n]);
            r && (t += r + ' ');
        }
    else if (Se(e)) for (const n in e) e[n] && (t += n + ' ');
    return t.trim();
}
const Kr = (e) =>
        we(e)
            ? e
            : e == null
            ? ''
            : q(e) || (Se(e) && (e.toString === Wl || !Z(e.toString)))
            ? JSON.stringify(e, $l, 2)
            : String(e),
    $l = (e, t) =>
        t && t.__v_isRef
            ? $l(e, t.value)
            : wn(t)
            ? {
                  [`Map(${t.size})`]: [...t.entries()].reduce(
                      (n, [r, a]) => ((n[`${r} =>`] = a), n),
                      {}
                  )
              }
            : Ul(t)
            ? { [`Set(${t.size})`]: [...t.values()] }
            : Se(t) && !q(t) && !jl(t)
            ? String(t)
            : t,
    ge = {},
    On = [],
    lt = () => {},
    Ef = () => !1,
    Tf = /^on[^a-z]/,
    oa = (e) => Tf.test(e),
    Hi = (e) => e.startsWith('onUpdate:'),
    De = Object.assign,
    Wi = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    },
    If = Object.prototype.hasOwnProperty,
    oe = (e, t) => If.call(e, t),
    q = Array.isArray,
    wn = (e) => la(e) === '[object Map]',
    Ul = (e) => la(e) === '[object Set]',
    Z = (e) => typeof e == 'function',
    we = (e) => typeof e == 'string',
    ji = (e) => typeof e == 'symbol',
    Se = (e) => e !== null && typeof e == 'object',
    Hl = (e) => Se(e) && Z(e.then) && Z(e.catch),
    Wl = Object.prototype.toString,
    la = (e) => Wl.call(e),
    Cf = (e) => la(e).slice(8, -1),
    jl = (e) => la(e) === '[object Object]',
    Gi = (e) =>
        we(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
    Wr = Ui(
        ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
    ),
    ca = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    Nf = /-(\w)/g,
    vt = ca((e) => e.replace(Nf, (t, n) => (n ? n.toUpperCase() : ''))),
    Af = /\B([A-Z])/g,
    Un = ca((e) => e.replace(Af, '-$1').toLowerCase()),
    ua = ca((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Ma = ca((e) => (e ? `on${ua(e)}` : '')),
    hr = (e, t) => !Object.is(e, t),
    rr = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t);
    },
    zr = (e, t, n) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n
        });
    },
    Gl = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
    };
let Ds;
const Of = () =>
    Ds ||
    (Ds =
        typeof globalThis != 'undefined'
            ? globalThis
            : typeof self != 'undefined'
            ? self
            : typeof window != 'undefined'
            ? window
            : typeof global != 'undefined'
            ? global
            : {});
let mt;
class Vl {
    constructor(t = !1) {
        (this.active = !0),
            (this.effects = []),
            (this.cleanups = []),
            !t &&
                mt &&
                ((this.parent = mt),
                (this.index = (mt.scopes || (mt.scopes = [])).push(this) - 1));
    }
    run(t) {
        if (this.active) {
            const n = mt;
            try {
                return (mt = this), t();
            } finally {
                mt = n;
            }
        }
    }
    on() {
        mt = this;
    }
    off() {
        mt = this.parent;
    }
    stop(t) {
        if (this.active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0, r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (this.parent && !t) {
                const a = this.parent.scopes.pop();
                a &&
                    a !== this &&
                    ((this.parent.scopes[this.index] = a),
                    (a.index = this.index));
            }
            this.active = !1;
        }
    }
}
function wf(e) {
    return new Vl(e);
}
function Sf(e, t = mt) {
    t && t.active && t.effects.push(e);
}
const Vi = (e) => {
        const t = new Set(e);
        return (t.w = 0), (t.n = 0), t;
    },
    Bl = (e) => (e.w & Ht) > 0,
    Yl = (e) => (e.n & Ht) > 0,
    kf = ({ deps: e }) => {
        if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ht;
    },
    Lf = (e) => {
        const { deps: t } = e;
        if (t.length) {
            let n = 0;
            for (let r = 0; r < t.length; r++) {
                const a = t[r];
                Bl(a) && !Yl(a) ? a.delete(e) : (t[n++] = a),
                    (a.w &= ~Ht),
                    (a.n &= ~Ht);
            }
            t.length = n;
        }
    },
    Ja = new WeakMap();
let Jn = 0,
    Ht = 1;
const Za = 30;
let st;
const on = Symbol(''),
    ei = Symbol('');
class Bi {
    constructor(t, n = null, r) {
        (this.fn = t),
            (this.scheduler = n),
            (this.active = !0),
            (this.deps = []),
            (this.parent = void 0),
            Sf(this, r);
    }
    run() {
        if (!this.active) return this.fn();
        let t = st,
            n = $t;
        for (; t; ) {
            if (t === this) return;
            t = t.parent;
        }
        try {
            return (
                (this.parent = st),
                (st = this),
                ($t = !0),
                (Ht = 1 << ++Jn),
                Jn <= Za ? kf(this) : Fs(this),
                this.fn()
            );
        } finally {
            Jn <= Za && Lf(this),
                (Ht = 1 << --Jn),
                (st = this.parent),
                ($t = n),
                (this.parent = void 0),
                this.deferStop && this.stop();
        }
    }
    stop() {
        st === this
            ? (this.deferStop = !0)
            : this.active &&
              (Fs(this), this.onStop && this.onStop(), (this.active = !1));
    }
}
function Fs(e) {
    const { deps: t } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0;
    }
}
let $t = !0;
const Kl = [];
function Hn() {
    Kl.push($t), ($t = !1);
}
function Wn() {
    const e = Kl.pop();
    $t = e === void 0 ? !0 : e;
}
function qe(e, t, n) {
    if ($t && st) {
        let r = Ja.get(e);
        r || Ja.set(e, (r = new Map()));
        let a = r.get(n);
        a || r.set(n, (a = Vi())), zl(a);
    }
}
function zl(e, t) {
    let n = !1;
    Jn <= Za ? Yl(e) || ((e.n |= Ht), (n = !Bl(e))) : (n = !e.has(st)),
        n && (e.add(st), st.deps.push(e));
}
function It(e, t, n, r, a, i) {
    const s = Ja.get(e);
    if (!s) return;
    let o = [];
    if (t === 'clear') o = [...s.values()];
    else if (n === 'length' && q(e))
        s.forEach((l, c) => {
            (c === 'length' || c >= r) && o.push(l);
        });
    else
        switch ((n !== void 0 && o.push(s.get(n)), t)) {
            case 'add':
                q(e)
                    ? Gi(n) && o.push(s.get('length'))
                    : (o.push(s.get(on)), wn(e) && o.push(s.get(ei)));
                break;
            case 'delete':
                q(e) || (o.push(s.get(on)), wn(e) && o.push(s.get(ei)));
                break;
            case 'set':
                wn(e) && o.push(s.get(on));
                break;
        }
    if (o.length === 1) o[0] && ti(o[0]);
    else {
        const l = [];
        for (const c of o) c && l.push(...c);
        ti(Vi(l));
    }
}
function ti(e, t) {
    for (const n of q(e) ? e : [...e])
        (n !== st || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
}
const Rf = Ui('__proto__,__v_isRef,__isVue'),
    Xl = new Set(
        Object.getOwnPropertyNames(Symbol)
            .map((e) => Symbol[e])
            .filter(ji)
    ),
    Pf = Yi(),
    xf = Yi(!1, !0),
    Mf = Yi(!0),
    $s = Df();
function Df() {
    const e = {};
    return (
        ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
            e[t] = function (...n) {
                const r = fe(this);
                for (let i = 0, s = this.length; i < s; i++)
                    qe(r, 'get', i + '');
                const a = r[t](...n);
                return a === -1 || a === !1 ? r[t](...n.map(fe)) : a;
            };
        }),
        ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
            e[t] = function (...n) {
                Hn();
                const r = fe(this)[t].apply(this, n);
                return Wn(), r;
            };
        }),
        e
    );
}
function Yi(e = !1, t = !1) {
    return function (r, a, i) {
        if (a === '__v_isReactive') return !e;
        if (a === '__v_isReadonly') return e;
        if (a === '__v_isShallow') return t;
        if (a === '__v_raw' && i === (e ? (t ? Jf : ec) : t ? Zl : Jl).get(r))
            return r;
        const s = q(r);
        if (!e && s && oe($s, a)) return Reflect.get($s, a, i);
        const o = Reflect.get(r, a, i);
        return (ji(a) ? Xl.has(a) : Rf(a)) || (e || qe(r, 'get', a), t)
            ? o
            : Le(o)
            ? !s || !Gi(a)
                ? o.value
                : o
            : Se(o)
            ? e
                ? tc(o)
                : dn(o)
            : o;
    };
}
const Ff = ql(),
    $f = ql(!0);
function ql(e = !1) {
    return function (n, r, a, i) {
        let s = n[r];
        if (gr(s) && Le(s) && !Le(a)) return !1;
        if (
            !e &&
            !gr(a) &&
            (nc(a) || ((a = fe(a)), (s = fe(s))), !q(n) && Le(s) && !Le(a))
        )
            return (s.value = a), !0;
        const o = q(n) && Gi(r) ? Number(r) < n.length : oe(n, r),
            l = Reflect.set(n, r, a, i);
        return (
            n === fe(i) &&
                (o ? hr(a, s) && It(n, 'set', r, a) : It(n, 'add', r, a)),
            l
        );
    };
}
function Uf(e, t) {
    const n = oe(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && It(e, 'delete', t, void 0), r;
}
function Hf(e, t) {
    const n = Reflect.has(e, t);
    return (!ji(t) || !Xl.has(t)) && qe(e, 'has', t), n;
}
function Wf(e) {
    return qe(e, 'iterate', q(e) ? 'length' : on), Reflect.ownKeys(e);
}
const Ql = { get: Pf, set: Ff, deleteProperty: Uf, has: Hf, ownKeys: Wf },
    jf = {
        get: Mf,
        set(e, t) {
            return !0;
        },
        deleteProperty(e, t) {
            return !0;
        }
    },
    Gf = De({}, Ql, { get: xf, set: $f }),
    Ki = (e) => e,
    fa = (e) => Reflect.getPrototypeOf(e);
function Rr(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const a = fe(e),
        i = fe(t);
    t !== i && !n && qe(a, 'get', t), !n && qe(a, 'get', i);
    const { has: s } = fa(a),
        o = r ? Ki : n ? qi : vr;
    if (s.call(a, t)) return o(e.get(t));
    if (s.call(a, i)) return o(e.get(i));
    e !== a && e.get(t);
}
function Pr(e, t = !1) {
    const n = this.__v_raw,
        r = fe(n),
        a = fe(e);
    return (
        e !== a && !t && qe(r, 'has', e),
        !t && qe(r, 'has', a),
        e === a ? n.has(e) : n.has(e) || n.has(a)
    );
}
function xr(e, t = !1) {
    return (
        (e = e.__v_raw),
        !t && qe(fe(e), 'iterate', on),
        Reflect.get(e, 'size', e)
    );
}
function Us(e) {
    e = fe(e);
    const t = fe(this);
    return fa(t).has.call(t, e) || (t.add(e), It(t, 'add', e, e)), this;
}
function Hs(e, t) {
    t = fe(t);
    const n = fe(this),
        { has: r, get: a } = fa(n);
    let i = r.call(n, e);
    i || ((e = fe(e)), (i = r.call(n, e)));
    const s = a.call(n, e);
    return (
        n.set(e, t),
        i ? hr(t, s) && It(n, 'set', e, t) : It(n, 'add', e, t),
        this
    );
}
function Ws(e) {
    const t = fe(this),
        { has: n, get: r } = fa(t);
    let a = n.call(t, e);
    a || ((e = fe(e)), (a = n.call(t, e))), r && r.call(t, e);
    const i = t.delete(e);
    return a && It(t, 'delete', e, void 0), i;
}
function js() {
    const e = fe(this),
        t = e.size !== 0,
        n = e.clear();
    return t && It(e, 'clear', void 0, void 0), n;
}
function Mr(e, t) {
    return function (r, a) {
        const i = this,
            s = i.__v_raw,
            o = fe(s),
            l = t ? Ki : e ? qi : vr;
        return (
            !e && qe(o, 'iterate', on),
            s.forEach((c, u) => r.call(a, l(c), l(u), i))
        );
    };
}
function Dr(e, t, n) {
    return function (...r) {
        const a = this.__v_raw,
            i = fe(a),
            s = wn(i),
            o = e === 'entries' || (e === Symbol.iterator && s),
            l = e === 'keys' && s,
            c = a[e](...r),
            u = n ? Ki : t ? qi : vr;
        return (
            !t && qe(i, 'iterate', l ? ei : on),
            {
                next() {
                    const { value: m, done: p } = c.next();
                    return p
                        ? { value: m, done: p }
                        : { value: o ? [u(m[0]), u(m[1])] : u(m), done: p };
                },
                [Symbol.iterator]() {
                    return this;
                }
            }
        );
    };
}
function St(e) {
    return function (...t) {
        return e === 'delete' ? !1 : this;
    };
}
function Vf() {
    const e = {
            get(i) {
                return Rr(this, i);
            },
            get size() {
                return xr(this);
            },
            has: Pr,
            add: Us,
            set: Hs,
            delete: Ws,
            clear: js,
            forEach: Mr(!1, !1)
        },
        t = {
            get(i) {
                return Rr(this, i, !1, !0);
            },
            get size() {
                return xr(this);
            },
            has: Pr,
            add: Us,
            set: Hs,
            delete: Ws,
            clear: js,
            forEach: Mr(!1, !0)
        },
        n = {
            get(i) {
                return Rr(this, i, !0);
            },
            get size() {
                return xr(this, !0);
            },
            has(i) {
                return Pr.call(this, i, !0);
            },
            add: St('add'),
            set: St('set'),
            delete: St('delete'),
            clear: St('clear'),
            forEach: Mr(!0, !1)
        },
        r = {
            get(i) {
                return Rr(this, i, !0, !0);
            },
            get size() {
                return xr(this, !0);
            },
            has(i) {
                return Pr.call(this, i, !0);
            },
            add: St('add'),
            set: St('set'),
            delete: St('delete'),
            clear: St('clear'),
            forEach: Mr(!0, !0)
        };
    return (
        ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
            (e[i] = Dr(i, !1, !1)),
                (n[i] = Dr(i, !0, !1)),
                (t[i] = Dr(i, !1, !0)),
                (r[i] = Dr(i, !0, !0));
        }),
        [e, n, t, r]
    );
}
const [Bf, Yf, Kf, zf] = Vf();
function zi(e, t) {
    const n = t ? (e ? zf : Kf) : e ? Yf : Bf;
    return (r, a, i) =>
        a === '__v_isReactive'
            ? !e
            : a === '__v_isReadonly'
            ? e
            : a === '__v_raw'
            ? r
            : Reflect.get(oe(n, a) && a in r ? n : r, a, i);
}
const Xf = { get: zi(!1, !1) },
    qf = { get: zi(!1, !0) },
    Qf = { get: zi(!0, !1) },
    Jl = new WeakMap(),
    Zl = new WeakMap(),
    ec = new WeakMap(),
    Jf = new WeakMap();
function Zf(e) {
    switch (e) {
        case 'Object':
        case 'Array':
            return 1;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2;
        default:
            return 0;
    }
}
function ed(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Zf(Cf(e));
}
function dn(e) {
    return gr(e) ? e : Xi(e, !1, Ql, Xf, Jl);
}
function td(e) {
    return Xi(e, !1, Gf, qf, Zl);
}
function tc(e) {
    return Xi(e, !0, jf, Qf, ec);
}
function Xi(e, t, n, r, a) {
    if (!Se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const i = a.get(e);
    if (i) return i;
    const s = ed(e);
    if (s === 0) return e;
    const o = new Proxy(e, s === 2 ? r : n);
    return a.set(e, o), o;
}
function Sn(e) {
    return gr(e) ? Sn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gr(e) {
    return !!(e && e.__v_isReadonly);
}
function nc(e) {
    return !!(e && e.__v_isShallow);
}
function rc(e) {
    return Sn(e) || gr(e);
}
function fe(e) {
    const t = e && e.__v_raw;
    return t ? fe(t) : e;
}
function ac(e) {
    return zr(e, '__v_skip', !0), e;
}
const vr = (e) => (Se(e) ? dn(e) : e),
    qi = (e) => (Se(e) ? tc(e) : e);
function ic(e) {
    $t && st && ((e = fe(e)), zl(e.dep || (e.dep = Vi())));
}
function sc(e, t) {
    (e = fe(e)), e.dep && ti(e.dep);
}
function Le(e) {
    return !!(e && e.__v_isRef === !0);
}
function Ce(e) {
    return lc(e, !1);
}
function oc(e) {
    return lc(e, !0);
}
function lc(e, t) {
    return Le(e) ? e : new nd(e, t);
}
class nd {
    constructor(t, n) {
        (this.__v_isShallow = n),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this._rawValue = n ? t : fe(t)),
            (this._value = n ? t : vr(t));
    }
    get value() {
        return ic(this), this._value;
    }
    set value(t) {
        (t = this.__v_isShallow ? t : fe(t)),
            hr(t, this._rawValue) &&
                ((this._rawValue = t),
                (this._value = this.__v_isShallow ? t : vr(t)),
                sc(this));
    }
}
function ar(e) {
    return Le(e) ? e.value : e;
}
const rd = {
    get: (e, t, n) => ar(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const a = e[t];
        return Le(a) && !Le(n) ? ((a.value = n), !0) : Reflect.set(e, t, n, r);
    }
};
function cc(e) {
    return Sn(e) ? e : new Proxy(e, rd);
}
function ad(e) {
    const t = q(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = sd(e, n);
    return t;
}
class id {
    constructor(t, n, r) {
        (this._object = t),
            (this._key = n),
            (this._defaultValue = r),
            (this.__v_isRef = !0);
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
        this._object[this._key] = t;
    }
}
function sd(e, t, n) {
    const r = e[t];
    return Le(r) ? r : new id(e, t, n);
}
class od {
    constructor(t, n, r, a) {
        (this._setter = n),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this._dirty = !0),
            (this.effect = new Bi(t, () => {
                this._dirty || ((this._dirty = !0), sc(this));
            })),
            (this.effect.computed = this),
            (this.effect.active = this._cacheable = !a),
            (this.__v_isReadonly = r);
    }
    get value() {
        const t = fe(this);
        return (
            ic(t),
            (t._dirty || !t._cacheable) &&
                ((t._dirty = !1), (t._value = t.effect.run())),
            t._value
        );
    }
    set value(t) {
        this._setter(t);
    }
}
function ld(e, t, n = !1) {
    let r, a;
    const i = Z(e);
    return (
        i ? ((r = e), (a = lt)) : ((r = e.get), (a = e.set)),
        new od(r, a, i || !a, n)
    );
}
function Ut(e, t, n, r) {
    let a;
    try {
        a = r ? e(...r) : e();
    } catch (i) {
        da(i, t, n);
    }
    return a;
}
function tt(e, t, n, r) {
    if (Z(e)) {
        const i = Ut(e, t, n, r);
        return (
            i &&
                Hl(i) &&
                i.catch((s) => {
                    da(s, t, n);
                }),
            i
        );
    }
    const a = [];
    for (let i = 0; i < e.length; i++) a.push(tt(e[i], t, n, r));
    return a;
}
function da(e, t, n, r = !0) {
    const a = t ? t.vnode : null;
    if (t) {
        let i = t.parent;
        const s = t.proxy,
            o = n;
        for (; i; ) {
            const c = i.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, s, o) === !1) return;
            }
            i = i.parent;
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            Ut(l, null, 10, [e, s, o]);
            return;
        }
    }
    cd(e, n, a, r);
}
function cd(e, t, n, r = !0) {
    console.error(e);
}
let Xr = !1,
    ni = !1;
const Xe = [];
let Et = 0;
const ir = [];
let Zn = null,
    yn = 0;
const sr = [];
let Mt = null,
    En = 0;
const uc = Promise.resolve();
let Qi = null,
    ri = null;
function fc(e) {
    const t = Qi || uc;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function ud(e) {
    let t = Et + 1,
        n = Xe.length;
    for (; t < n; ) {
        const r = (t + n) >>> 1;
        _r(Xe[r]) < e ? (t = r + 1) : (n = r);
    }
    return t;
}
function dc(e) {
    (!Xe.length || !Xe.includes(e, Xr && e.allowRecurse ? Et + 1 : Et)) &&
        e !== ri &&
        (e.id == null ? Xe.push(e) : Xe.splice(ud(e.id), 0, e), mc());
}
function mc() {
    !Xr && !ni && ((ni = !0), (Qi = uc.then(gc)));
}
function fd(e) {
    const t = Xe.indexOf(e);
    t > Et && Xe.splice(t, 1);
}
function pc(e, t, n, r) {
    q(e)
        ? n.push(...e)
        : (!t || !t.includes(e, e.allowRecurse ? r + 1 : r)) && n.push(e),
        mc();
}
function dd(e) {
    pc(e, Zn, ir, yn);
}
function md(e) {
    pc(e, Mt, sr, En);
}
function Ji(e, t = null) {
    if (ir.length) {
        for (
            ri = t, Zn = [...new Set(ir)], ir.length = 0, yn = 0;
            yn < Zn.length;
            yn++
        )
            Zn[yn]();
        (Zn = null), (yn = 0), (ri = null), Ji(e, t);
    }
}
function hc(e) {
    if (sr.length) {
        const t = [...new Set(sr)];
        if (((sr.length = 0), Mt)) {
            Mt.push(...t);
            return;
        }
        for (
            Mt = t, Mt.sort((n, r) => _r(n) - _r(r)), En = 0;
            En < Mt.length;
            En++
        )
            Mt[En]();
        (Mt = null), (En = 0);
    }
}
const _r = (e) => (e.id == null ? 1 / 0 : e.id);
function gc(e) {
    (ni = !1), (Xr = !0), Ji(e), Xe.sort((n, r) => _r(n) - _r(r));
    const t = lt;
    try {
        for (Et = 0; Et < Xe.length; Et++) {
            const n = Xe[Et];
            n && n.active !== !1 && Ut(n, null, 14);
        }
    } finally {
        (Et = 0),
            (Xe.length = 0),
            hc(),
            (Xr = !1),
            (Qi = null),
            (Xe.length || ir.length || sr.length) && gc(e);
    }
}
function pd(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ge;
    let a = n;
    const i = t.startsWith('update:'),
        s = i && t.slice(7);
    if (s && s in r) {
        const u = `${s === 'modelValue' ? 'model' : s}Modifiers`,
            { number: m, trim: p } = r[u] || ge;
        p ? (a = n.map((_) => _.trim())) : m && (a = n.map(Gl));
    }
    let o,
        l = r[(o = Ma(t))] || r[(o = Ma(vt(t)))];
    !l && i && (l = r[(o = Ma(Un(t)))]), l && tt(l, e, 6, a);
    const c = r[o + 'Once'];
    if (c) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[o]) return;
        (e.emitted[o] = !0), tt(c, e, 6, a);
    }
}
function vc(e, t, n = !1) {
    const r = t.emitsCache,
        a = r.get(e);
    if (a !== void 0) return a;
    const i = e.emits;
    let s = {},
        o = !1;
    if (!Z(e)) {
        const l = (c) => {
            const u = vc(c, t, !0);
            u && ((o = !0), De(s, u));
        };
        !n && t.mixins.length && t.mixins.forEach(l),
            e.extends && l(e.extends),
            e.mixins && e.mixins.forEach(l);
    }
    return !i && !o
        ? (r.set(e, null), null)
        : (q(i) ? i.forEach((l) => (s[l] = null)) : De(s, i), r.set(e, s), s);
}
function ma(e, t) {
    return !e || !oa(t)
        ? !1
        : ((t = t.slice(2).replace(/Once$/, '')),
          oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, Un(t)) || oe(e, t));
}
let He = null,
    pa = null;
function qr(e) {
    const t = He;
    return (He = e), (pa = (e && e.type.__scopeId) || null), t;
}
function eE(e) {
    pa = e;
}
function tE() {
    pa = null;
}
function rn(e, t = He, n) {
    if (!t || e._n) return e;
    const r = (...a) => {
        r._d && eo(-1);
        const i = qr(t),
            s = e(...a);
        return qr(i), r._d && eo(1), s;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Da(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: a,
        props: i,
        propsOptions: [s],
        slots: o,
        attrs: l,
        emit: c,
        render: u,
        renderCache: m,
        data: p,
        setupState: _,
        ctx: N,
        inheritAttrs: O
    } = e;
    let A, h;
    const g = qr(e);
    try {
        if (n.shapeFlag & 4) {
            const T = a || r;
            (A = pt(u.call(T, T, m, i, _, p, N))), (h = l);
        } else {
            const T = t;
            (A = pt(
                T.length > 1
                    ? T(i, { attrs: l, slots: o, emit: c })
                    : T(i, null)
            )),
                (h = t.props ? l : hd(l));
        }
    } catch (T) {
        (or.length = 0), da(T, e, 1), (A = Ee(rt));
    }
    let I = A;
    if (h && O !== !1) {
        const T = Object.keys(h),
            { shapeFlag: C } = I;
        T.length &&
            C & 7 &&
            (s && T.some(Hi) && (h = gd(h, s)), (I = jt(I, h)));
    }
    return (
        n.dirs && (I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs),
        n.transition && (I.transition = n.transition),
        (A = I),
        qr(g),
        A
    );
}
const hd = (e) => {
        let t;
        for (const n in e)
            (n === 'class' || n === 'style' || oa(n)) &&
                ((t || (t = {}))[n] = e[n]);
        return t;
    },
    gd = (e, t) => {
        const n = {};
        for (const r in e) (!Hi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n;
    };
function vd(e, t, n) {
    const { props: r, children: a, component: i } = e,
        { props: s, children: o, patchFlag: l } = t,
        c = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return r ? Gs(r, s, c) : !!s;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let m = 0; m < u.length; m++) {
                const p = u[m];
                if (s[p] !== r[p] && !ma(c, p)) return !0;
            }
        }
    } else
        return (a || o) && (!o || !o.$stable)
            ? !0
            : r === s
            ? !1
            : r
            ? s
                ? Gs(r, s, c)
                : !0
            : !!s;
    return !1;
}
function Gs(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let a = 0; a < r.length; a++) {
        const i = r[a];
        if (t[i] !== e[i] && !ma(n, i)) return !0;
    }
    return !1;
}
function _d({ vnode: e, parent: t }, n) {
    for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const bd = (e) => e.__isSuspense;
function yd(e, t) {
    t && t.pendingBranch
        ? q(e)
            ? t.effects.push(...e)
            : t.effects.push(e)
        : md(e);
}
function jr(e, t) {
    if (Pe) {
        let n = Pe.provides;
        const r = Pe.parent && Pe.parent.provides;
        r === n && (n = Pe.provides = Object.create(r)), (n[e] = t);
    }
}
function nt(e, t, n = !1) {
    const r = Pe || He;
    if (r) {
        const a =
            r.parent == null
                ? r.vnode.appContext && r.vnode.appContext.provides
                : r.parent.provides;
        if (a && e in a) return a[e];
        if (arguments.length > 1) return n && Z(t) ? t.call(r.proxy) : t;
    }
}
const Vs = {};
function ct(e, t, n) {
    return _c(e, t, n);
}
function _c(
    e,
    t,
    { immediate: n, deep: r, flush: a, onTrack: i, onTrigger: s } = ge
) {
    const o = Pe;
    let l,
        c = !1,
        u = !1;
    if (
        (Le(e)
            ? ((l = () => e.value), (c = nc(e)))
            : Sn(e)
            ? ((l = () => e), (r = !0))
            : q(e)
            ? ((u = !0),
              (c = e.some(Sn)),
              (l = () =>
                  e.map((h) => {
                      if (Le(h)) return h.value;
                      if (Sn(h)) return an(h);
                      if (Z(h)) return Ut(h, o, 2);
                  })))
            : Z(e)
            ? t
                ? (l = () => Ut(e, o, 2))
                : (l = () => {
                      if (!(o && o.isUnmounted))
                          return m && m(), tt(e, o, 3, [p]);
                  })
            : (l = lt),
        t && r)
    ) {
        const h = l;
        l = () => an(h());
    }
    let m,
        p = (h) => {
            m = A.onStop = () => {
                Ut(h, o, 4);
            };
        };
    if (Tr)
        return (
            (p = lt), t ? n && tt(t, o, 3, [l(), u ? [] : void 0, p]) : l(), lt
        );
    let _ = u ? [] : Vs;
    const N = () => {
        if (!!A.active)
            if (t) {
                const h = A.run();
                (r || c || (u ? h.some((g, I) => hr(g, _[I])) : hr(h, _))) &&
                    (m && m(),
                    tt(t, o, 3, [h, _ === Vs ? void 0 : _, p]),
                    (_ = h));
            } else A.run();
    };
    N.allowRecurse = !!t;
    let O;
    a === 'sync'
        ? (O = N)
        : a === 'post'
        ? (O = () => Ue(N, o && o.suspense))
        : (O = () => {
              !o || o.isMounted ? dd(N) : N();
          });
    const A = new Bi(l, O);
    return (
        t
            ? n
                ? N()
                : (_ = A.run())
            : a === 'post'
            ? Ue(A.run.bind(A), o && o.suspense)
            : A.run(),
        () => {
            A.stop(), o && o.scope && Wi(o.scope.effects, A);
        }
    );
}
function Ed(e, t, n) {
    const r = this.proxy,
        a = we(e) ? (e.includes('.') ? bc(r, e) : () => r[e]) : e.bind(r, r);
    let i;
    Z(t) ? (i = t) : ((i = t.handler), (n = t));
    const s = Pe;
    xn(this);
    const o = _c(a, i.bind(r), n);
    return s ? xn(s) : cn(), o;
}
function bc(e, t) {
    const n = t.split('.');
    return () => {
        let r = e;
        for (let a = 0; a < n.length && r; a++) r = r[n[a]];
        return r;
    };
}
function an(e, t) {
    if (!Se(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
    if ((t.add(e), Le(e))) an(e.value, t);
    else if (q(e)) for (let n = 0; n < e.length; n++) an(e[n], t);
    else if (Ul(e) || wn(e))
        e.forEach((n) => {
            an(n, t);
        });
    else if (jl(e)) for (const n in e) an(e[n], t);
    return e;
}
function yc() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map()
    };
    return (
        jn(() => {
            e.isMounted = !0;
        }),
        ts(() => {
            e.isUnmounting = !0;
        }),
        e
    );
}
const Ze = [Function, Array],
    Td = {
        name: 'BaseTransition',
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: Ze,
            onEnter: Ze,
            onAfterEnter: Ze,
            onEnterCancelled: Ze,
            onBeforeLeave: Ze,
            onLeave: Ze,
            onAfterLeave: Ze,
            onLeaveCancelled: Ze,
            onBeforeAppear: Ze,
            onAppear: Ze,
            onAfterAppear: Ze,
            onAppearCancelled: Ze
        },
        setup(e, { slots: t }) {
            const n = Gt(),
                r = yc();
            let a;
            return () => {
                const i = t.default && Zi(t.default(), !0);
                if (!i || !i.length) return;
                let s = i[0];
                if (i.length > 1) {
                    for (const O of i)
                        if (O.type !== rt) {
                            s = O;
                            break;
                        }
                }
                const o = fe(e),
                    { mode: l } = o;
                if (r.isLeaving) return Fa(s);
                const c = Bs(s);
                if (!c) return Fa(s);
                const u = br(c, o, r, n);
                Ln(c, u);
                const m = n.subTree,
                    p = m && Bs(m);
                let _ = !1;
                const { getTransitionKey: N } = c.type;
                if (N) {
                    const O = N();
                    a === void 0 ? (a = O) : O !== a && ((a = O), (_ = !0));
                }
                if (p && p.type !== rt && (!tn(c, p) || _)) {
                    const O = br(p, o, r, n);
                    if ((Ln(p, O), l === 'out-in'))
                        return (
                            (r.isLeaving = !0),
                            (O.afterLeave = () => {
                                (r.isLeaving = !1), n.update();
                            }),
                            Fa(s)
                        );
                    l === 'in-out' &&
                        c.type !== rt &&
                        (O.delayLeave = (A, h, g) => {
                            const I = Tc(r, p);
                            (I[String(p.key)] = p),
                                (A._leaveCb = () => {
                                    h(),
                                        (A._leaveCb = void 0),
                                        delete u.delayedLeave;
                                }),
                                (u.delayedLeave = g);
                        });
                }
                return s;
            };
        }
    },
    Ec = Td;
function Tc(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function br(e, t, n, r) {
    const {
            appear: a,
            mode: i,
            persisted: s = !1,
            onBeforeEnter: o,
            onEnter: l,
            onAfterEnter: c,
            onEnterCancelled: u,
            onBeforeLeave: m,
            onLeave: p,
            onAfterLeave: _,
            onLeaveCancelled: N,
            onBeforeAppear: O,
            onAppear: A,
            onAfterAppear: h,
            onAppearCancelled: g
        } = t,
        I = String(e.key),
        T = Tc(n, e),
        C = (R, K) => {
            R && tt(R, r, 9, K);
        },
        P = {
            mode: i,
            persisted: s,
            beforeEnter(R) {
                let K = o;
                if (!n.isMounted)
                    if (a) K = O || o;
                    else return;
                R._leaveCb && R._leaveCb(!0);
                const Y = T[I];
                Y && tn(e, Y) && Y.el._leaveCb && Y.el._leaveCb(), C(K, [R]);
            },
            enter(R) {
                let K = l,
                    Y = c,
                    te = u;
                if (!n.isMounted)
                    if (a) (K = A || l), (Y = h || c), (te = g || u);
                    else return;
                let J = !1;
                const j = (R._enterCb = (ce) => {
                    J ||
                        ((J = !0),
                        ce ? C(te, [R]) : C(Y, [R]),
                        P.delayedLeave && P.delayedLeave(),
                        (R._enterCb = void 0));
                });
                K ? (K(R, j), K.length <= 1 && j()) : j();
            },
            leave(R, K) {
                const Y = String(e.key);
                if ((R._enterCb && R._enterCb(!0), n.isUnmounting)) return K();
                C(m, [R]);
                let te = !1;
                const J = (R._leaveCb = (j) => {
                    te ||
                        ((te = !0),
                        K(),
                        j ? C(N, [R]) : C(_, [R]),
                        (R._leaveCb = void 0),
                        T[Y] === e && delete T[Y]);
                });
                (T[Y] = e), p ? (p(R, J), p.length <= 1 && J()) : J();
            },
            clone(R) {
                return br(R, t, n, r);
            }
        };
    return P;
}
function Fa(e) {
    if (ha(e)) return (e = jt(e)), (e.children = null), e;
}
function Bs(e) {
    return ha(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Ln(e, t) {
    e.shapeFlag & 6 && e.component
        ? Ln(e.component.subTree, t)
        : e.shapeFlag & 128
        ? ((e.ssContent.transition = t.clone(e.ssContent)),
          (e.ssFallback.transition = t.clone(e.ssFallback)))
        : (e.transition = t);
}
function Zi(e, t = !1, n) {
    let r = [],
        a = 0;
    for (let i = 0; i < e.length; i++) {
        let s = e[i];
        const o =
            n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
        s.type === Ae
            ? (s.patchFlag & 128 && a++, (r = r.concat(Zi(s.children, t, o))))
            : (t || s.type !== rt) && r.push(o != null ? jt(s, { key: o }) : s);
    }
    if (a > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
    return r;
}
function at(e) {
    return Z(e) ? { setup: e, name: e.name } : e;
}
const yr = (e) => !!e.type.__asyncLoader,
    ha = (e) => e.type.__isKeepAlive,
    Id = {
        name: 'KeepAlive',
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, { slots: t }) {
            const n = Gt(),
                r = n.ctx;
            if (!r.renderer) return t.default;
            const a = new Map(),
                i = new Set();
            let s = null;
            const o = n.suspense,
                {
                    renderer: {
                        p: l,
                        m: c,
                        um: u,
                        o: { createElement: m }
                    }
                } = r,
                p = m('div');
            (r.activate = (g, I, T, C, P) => {
                const R = g.component;
                c(g, I, T, 0, o),
                    l(R.vnode, g, I, T, R, o, C, g.slotScopeIds, P),
                    Ue(() => {
                        (R.isDeactivated = !1), R.a && rr(R.a);
                        const K = g.props && g.props.onVnodeMounted;
                        K && et(K, R.parent, g);
                    }, o);
            }),
                (r.deactivate = (g) => {
                    const I = g.component;
                    c(g, p, null, 1, o),
                        Ue(() => {
                            I.da && rr(I.da);
                            const T = g.props && g.props.onVnodeUnmounted;
                            T && et(T, I.parent, g), (I.isDeactivated = !0);
                        }, o);
                });
            function _(g) {
                $a(g), u(g, n, o, !0);
            }
            function N(g) {
                a.forEach((I, T) => {
                    const C = ci(I.type);
                    C && (!g || !g(C)) && O(T);
                });
            }
            function O(g) {
                const I = a.get(g);
                !s || I.type !== s.type ? _(I) : s && $a(s),
                    a.delete(g),
                    i.delete(g);
            }
            ct(
                () => [e.include, e.exclude],
                ([g, I]) => {
                    g && N((T) => er(g, T)), I && N((T) => !er(I, T));
                },
                { flush: 'post', deep: !0 }
            );
            let A = null;
            const h = () => {
                A != null && a.set(A, Ua(n.subTree));
            };
            return (
                jn(h),
                es(h),
                ts(() => {
                    a.forEach((g) => {
                        const { subTree: I, suspense: T } = n,
                            C = Ua(I);
                        if (g.type === C.type) {
                            $a(C);
                            const P = C.component.da;
                            P && Ue(P, T);
                            return;
                        }
                        _(g);
                    });
                }),
                () => {
                    if (((A = null), !t.default)) return null;
                    const g = t.default(),
                        I = g[0];
                    if (g.length > 1) return (s = null), g;
                    if (!Er(I) || (!(I.shapeFlag & 4) && !(I.shapeFlag & 128)))
                        return (s = null), I;
                    let T = Ua(I);
                    const C = T.type,
                        P = ci(yr(T) ? T.type.__asyncResolved || {} : C),
                        { include: R, exclude: K, max: Y } = e;
                    if ((R && (!P || !er(R, P))) || (K && P && er(K, P)))
                        return (s = T), I;
                    const te = T.key == null ? C : T.key,
                        J = a.get(te);
                    return (
                        T.el &&
                            ((T = jt(T)),
                            I.shapeFlag & 128 && (I.ssContent = T)),
                        (A = te),
                        J
                            ? ((T.el = J.el),
                              (T.component = J.component),
                              T.transition && Ln(T, T.transition),
                              (T.shapeFlag |= 512),
                              i.delete(te),
                              i.add(te))
                            : (i.add(te),
                              Y &&
                                  i.size > parseInt(Y, 10) &&
                                  O(i.values().next().value)),
                        (T.shapeFlag |= 256),
                        (s = T),
                        I
                    );
                }
            );
        }
    },
    nE = Id;
function er(e, t) {
    return q(e)
        ? e.some((n) => er(n, t))
        : we(e)
        ? e.split(',').includes(t)
        : e.test
        ? e.test(t)
        : !1;
}
function Cd(e, t) {
    Ic(e, 'a', t);
}
function Nd(e, t) {
    Ic(e, 'da', t);
}
function Ic(e, t, n = Pe) {
    const r =
        e.__wdc ||
        (e.__wdc = () => {
            let a = n;
            for (; a; ) {
                if (a.isDeactivated) return;
                a = a.parent;
            }
            return e();
        });
    if ((ga(t, r, n), n)) {
        let a = n.parent;
        for (; a && a.parent; )
            ha(a.parent.vnode) && Ad(r, t, n, a), (a = a.parent);
    }
}
function Ad(e, t, n, r) {
    const a = ga(t, e, r, !0);
    va(() => {
        Wi(r[t], a);
    }, n);
}
function $a(e) {
    let t = e.shapeFlag;
    t & 256 && (t -= 256), t & 512 && (t -= 512), (e.shapeFlag = t);
}
function Ua(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
}
function ga(e, t, n = Pe, r = !1) {
    if (n) {
        const a = n[e] || (n[e] = []),
            i =
                t.__weh ||
                (t.__weh = (...s) => {
                    if (n.isUnmounted) return;
                    Hn(), xn(n);
                    const o = tt(t, n, e, s);
                    return cn(), Wn(), o;
                });
        return r ? a.unshift(i) : a.push(i), i;
    }
}
const Ot =
        (e) =>
        (t, n = Pe) =>
            (!Tr || e === 'sp') && ga(e, t, n),
    Cc = Ot('bm'),
    jn = Ot('m'),
    Od = Ot('bu'),
    es = Ot('u'),
    ts = Ot('bum'),
    va = Ot('um'),
    wd = Ot('sp'),
    Sd = Ot('rtg'),
    kd = Ot('rtc');
function Ld(e, t = Pe) {
    ga('ec', e, t);
}
let ai = !0;
function Rd(e) {
    const t = Ac(e),
        n = e.proxy,
        r = e.ctx;
    (ai = !1), t.beforeCreate && Ys(t.beforeCreate, e, 'bc');
    const {
        data: a,
        computed: i,
        methods: s,
        watch: o,
        provide: l,
        inject: c,
        created: u,
        beforeMount: m,
        mounted: p,
        beforeUpdate: _,
        updated: N,
        activated: O,
        deactivated: A,
        beforeDestroy: h,
        beforeUnmount: g,
        destroyed: I,
        unmounted: T,
        render: C,
        renderTracked: P,
        renderTriggered: R,
        errorCaptured: K,
        serverPrefetch: Y,
        expose: te,
        inheritAttrs: J,
        components: j,
        directives: ce,
        filters: Ne
    } = t;
    if ((c && Pd(c, r, null, e.appContext.config.unwrapInjectedRef), s))
        for (const re in s) {
            const se = s[re];
            Z(se) && (r[re] = se.bind(n));
        }
    if (a) {
        const re = a.call(n, n);
        Se(re) && (e.data = dn(re));
    }
    if (((ai = !0), i))
        for (const re in i) {
            const se = i[re],
                ke = Z(se) ? se.bind(n, n) : Z(se.get) ? se.get.bind(n, n) : lt,
                Je = !Z(se) && Z(se.set) ? se.set.bind(n) : lt,
                je = ee({ get: ke, set: Je });
            Object.defineProperty(r, re, {
                enumerable: !0,
                configurable: !0,
                get: () => je.value,
                set: (Fe) => (je.value = Fe)
            });
        }
    if (o) for (const re in o) Nc(o[re], r, n, re);
    if (l) {
        const re = Z(l) ? l.call(n) : l;
        Reflect.ownKeys(re).forEach((se) => {
            jr(se, re[se]);
        });
    }
    u && Ys(u, e, 'c');
    function ie(re, se) {
        q(se) ? se.forEach((ke) => re(ke.bind(n))) : se && re(se.bind(n));
    }
    if (
        (ie(Cc, m),
        ie(jn, p),
        ie(Od, _),
        ie(es, N),
        ie(Cd, O),
        ie(Nd, A),
        ie(Ld, K),
        ie(kd, P),
        ie(Sd, R),
        ie(ts, g),
        ie(va, T),
        ie(wd, Y),
        q(te))
    )
        if (te.length) {
            const re = e.exposed || (e.exposed = {});
            te.forEach((se) => {
                Object.defineProperty(re, se, {
                    get: () => n[se],
                    set: (ke) => (n[se] = ke)
                });
            });
        } else e.exposed || (e.exposed = {});
    C && e.render === lt && (e.render = C),
        J != null && (e.inheritAttrs = J),
        j && (e.components = j),
        ce && (e.directives = ce);
}
function Pd(e, t, n = lt, r = !1) {
    q(e) && (e = ii(e));
    for (const a in e) {
        const i = e[a];
        let s;
        Se(i)
            ? 'default' in i
                ? (s = nt(i.from || a, i.default, !0))
                : (s = nt(i.from || a))
            : (s = nt(i)),
            Le(s) && r
                ? Object.defineProperty(t, a, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => s.value,
                      set: (o) => (s.value = o)
                  })
                : (t[a] = s);
    }
}
function Ys(e, t, n) {
    tt(q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Nc(e, t, n, r) {
    const a = r.includes('.') ? bc(n, r) : () => n[r];
    if (we(e)) {
        const i = t[e];
        Z(i) && ct(a, i);
    } else if (Z(e)) ct(a, e.bind(n));
    else if (Se(e))
        if (q(e)) e.forEach((i) => Nc(i, t, n, r));
        else {
            const i = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
            Z(i) && ct(a, i, e);
        }
}
function Ac(e) {
    const t = e.type,
        { mixins: n, extends: r } = t,
        {
            mixins: a,
            optionsCache: i,
            config: { optionMergeStrategies: s }
        } = e.appContext,
        o = i.get(t);
    let l;
    return (
        o
            ? (l = o)
            : !a.length && !n && !r
            ? (l = t)
            : ((l = {}),
              a.length && a.forEach((c) => Qr(l, c, s, !0)),
              Qr(l, t, s)),
        i.set(t, l),
        l
    );
}
function Qr(e, t, n, r = !1) {
    const { mixins: a, extends: i } = t;
    i && Qr(e, i, n, !0), a && a.forEach((s) => Qr(e, s, n, !0));
    for (const s in t)
        if (!(r && s === 'expose')) {
            const o = xd[s] || (n && n[s]);
            e[s] = o ? o(e[s], t[s]) : t[s];
        }
    return e;
}
const xd = {
    data: Ks,
    props: Zt,
    emits: Zt,
    methods: Zt,
    computed: Zt,
    beforeCreate: Ge,
    created: Ge,
    beforeMount: Ge,
    mounted: Ge,
    beforeUpdate: Ge,
    updated: Ge,
    beforeDestroy: Ge,
    beforeUnmount: Ge,
    destroyed: Ge,
    unmounted: Ge,
    activated: Ge,
    deactivated: Ge,
    errorCaptured: Ge,
    serverPrefetch: Ge,
    components: Zt,
    directives: Zt,
    watch: Dd,
    provide: Ks,
    inject: Md
};
function Ks(e, t) {
    return t
        ? e
            ? function () {
                  return De(
                      Z(e) ? e.call(this, this) : e,
                      Z(t) ? t.call(this, this) : t
                  );
              }
            : t
        : e;
}
function Md(e, t) {
    return Zt(ii(e), ii(t));
}
function ii(e) {
    if (q(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t;
    }
    return e;
}
function Ge(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function Zt(e, t) {
    return e ? De(De(Object.create(null), e), t) : t;
}
function Dd(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = De(Object.create(null), e);
    for (const r in t) n[r] = Ge(e[r], t[r]);
    return n;
}
function Fd(e, t, n, r = !1) {
    const a = {},
        i = {};
    zr(i, ba, 1), (e.propsDefaults = Object.create(null)), Oc(e, t, a, i);
    for (const s in e.propsOptions[0]) s in a || (a[s] = void 0);
    n
        ? (e.props = r ? a : td(a))
        : e.type.props
        ? (e.props = a)
        : (e.props = i),
        (e.attrs = i);
}
function $d(e, t, n, r) {
    const {
            props: a,
            attrs: i,
            vnode: { patchFlag: s }
        } = e,
        o = fe(a),
        [l] = e.propsOptions;
    let c = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const u = e.vnode.dynamicProps;
            for (let m = 0; m < u.length; m++) {
                let p = u[m];
                if (ma(e.emitsOptions, p)) continue;
                const _ = t[p];
                if (l)
                    if (oe(i, p)) _ !== i[p] && ((i[p] = _), (c = !0));
                    else {
                        const N = vt(p);
                        a[N] = si(l, o, N, _, e, !1);
                    }
                else _ !== i[p] && ((i[p] = _), (c = !0));
            }
        }
    } else {
        Oc(e, t, a, i) && (c = !0);
        let u;
        for (const m in o)
            (!t || (!oe(t, m) && ((u = Un(m)) === m || !oe(t, u)))) &&
                (l
                    ? n &&
                      (n[m] !== void 0 || n[u] !== void 0) &&
                      (a[m] = si(l, o, m, void 0, e, !0))
                    : delete a[m]);
        if (i !== o)
            for (const m in i)
                (!t || (!oe(t, m) && !0)) && (delete i[m], (c = !0));
    }
    c && It(e, 'set', '$attrs');
}
function Oc(e, t, n, r) {
    const [a, i] = e.propsOptions;
    let s = !1,
        o;
    if (t)
        for (let l in t) {
            if (Wr(l)) continue;
            const c = t[l];
            let u;
            a && oe(a, (u = vt(l)))
                ? !i || !i.includes(u)
                    ? (n[u] = c)
                    : ((o || (o = {}))[u] = c)
                : ma(e.emitsOptions, l) ||
                  ((!(l in r) || c !== r[l]) && ((r[l] = c), (s = !0)));
        }
    if (i) {
        const l = fe(n),
            c = o || ge;
        for (let u = 0; u < i.length; u++) {
            const m = i[u];
            n[m] = si(a, l, m, c[m], e, !oe(c, m));
        }
    }
    return s;
}
function si(e, t, n, r, a, i) {
    const s = e[n];
    if (s != null) {
        const o = oe(s, 'default');
        if (o && r === void 0) {
            const l = s.default;
            if (s.type !== Function && Z(l)) {
                const { propsDefaults: c } = a;
                n in c
                    ? (r = c[n])
                    : (xn(a), (r = c[n] = l.call(null, t)), cn());
            } else r = l;
        }
        s[0] &&
            (i && !o
                ? (r = !1)
                : s[1] && (r === '' || r === Un(n)) && (r = !0));
    }
    return r;
}
function wc(e, t, n = !1) {
    const r = t.propsCache,
        a = r.get(e);
    if (a) return a;
    const i = e.props,
        s = {},
        o = [];
    let l = !1;
    if (!Z(e)) {
        const u = (m) => {
            l = !0;
            const [p, _] = wc(m, t, !0);
            De(s, p), _ && o.push(..._);
        };
        !n && t.mixins.length && t.mixins.forEach(u),
            e.extends && u(e.extends),
            e.mixins && e.mixins.forEach(u);
    }
    if (!i && !l) return r.set(e, On), On;
    if (q(i))
        for (let u = 0; u < i.length; u++) {
            const m = vt(i[u]);
            zs(m) && (s[m] = ge);
        }
    else if (i)
        for (const u in i) {
            const m = vt(u);
            if (zs(m)) {
                const p = i[u],
                    _ = (s[m] = q(p) || Z(p) ? { type: p } : p);
                if (_) {
                    const N = Qs(Boolean, _.type),
                        O = Qs(String, _.type);
                    (_[0] = N > -1),
                        (_[1] = O < 0 || N < O),
                        (N > -1 || oe(_, 'default')) && o.push(m);
                }
            }
        }
    const c = [s, o];
    return r.set(e, c), c;
}
function zs(e) {
    return e[0] !== '$';
}
function Xs(e) {
    const t = e && e.toString().match(/^\s*function (\w+)/);
    return t ? t[1] : e === null ? 'null' : '';
}
function qs(e, t) {
    return Xs(e) === Xs(t);
}
function Qs(e, t) {
    return q(t) ? t.findIndex((n) => qs(n, e)) : Z(t) && qs(t, e) ? 0 : -1;
}
const Sc = (e) => e[0] === '_' || e === '$stable',
    ns = (e) => (q(e) ? e.map(pt) : [pt(e)]),
    Ud = (e, t, n) => {
        const r = rn((...a) => ns(t(...a)), n);
        return (r._c = !1), r;
    },
    kc = (e, t, n) => {
        const r = e._ctx;
        for (const a in e) {
            if (Sc(a)) continue;
            const i = e[a];
            if (Z(i)) t[a] = Ud(a, i, r);
            else if (i != null) {
                const s = ns(i);
                t[a] = () => s;
            }
        }
    },
    Lc = (e, t) => {
        const n = ns(t);
        e.slots.default = () => n;
    },
    Hd = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? ((e.slots = fe(t)), zr(t, '_', n)) : kc(t, (e.slots = {}));
        } else (e.slots = {}), t && Lc(e, t);
        zr(e.slots, ba, 1);
    },
    Wd = (e, t, n) => {
        const { vnode: r, slots: a } = e;
        let i = !0,
            s = ge;
        if (r.shapeFlag & 32) {
            const o = t._;
            o
                ? n && o === 1
                    ? (i = !1)
                    : (De(a, t), !n && o === 1 && delete a._)
                : ((i = !t.$stable), kc(t, a)),
                (s = t);
        } else t && (Lc(e, t), (s = { default: 1 }));
        if (i) for (const o in a) !Sc(o) && !(o in s) && delete a[o];
    };
function jd(e, t) {
    const n = He;
    if (n === null) return e;
    const r = Ea(n) || n.proxy,
        a = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let [s, o, l, c = ge] = t[i];
        Z(s) && (s = { mounted: s, updated: s }),
            s.deep && an(o),
            a.push({
                dir: s,
                instance: r,
                value: o,
                oldValue: void 0,
                arg: l,
                modifiers: c
            });
    }
    return e;
}
function qt(e, t, n, r) {
    const a = e.dirs,
        i = t && t.dirs;
    for (let s = 0; s < a.length; s++) {
        const o = a[s];
        i && (o.oldValue = i[s].value);
        let l = o.dir[r];
        l && (Hn(), tt(l, n, 8, [e.el, o, e, t]), Wn());
    }
}
function Rc() {
    return {
        app: null,
        config: {
            isNativeTag: Ef,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let Gd = 0;
function Vd(e, t) {
    return function (r, a = null) {
        Z(r) || (r = Object.assign({}, r)), a != null && !Se(a) && (a = null);
        const i = Rc(),
            s = new Set();
        let o = !1;
        const l = (i.app = {
            _uid: Gd++,
            _component: r,
            _props: a,
            _container: null,
            _context: i,
            _instance: null,
            version: fm,
            get config() {
                return i.config;
            },
            set config(c) {},
            use(c, ...u) {
                return (
                    s.has(c) ||
                        (c && Z(c.install)
                            ? (s.add(c), c.install(l, ...u))
                            : Z(c) && (s.add(c), c(l, ...u))),
                    l
                );
            },
            mixin(c) {
                return i.mixins.includes(c) || i.mixins.push(c), l;
            },
            component(c, u) {
                return u ? ((i.components[c] = u), l) : i.components[c];
            },
            directive(c, u) {
                return u ? ((i.directives[c] = u), l) : i.directives[c];
            },
            mount(c, u, m) {
                if (!o) {
                    const p = Ee(r, a);
                    return (
                        (p.appContext = i),
                        u && t ? t(p, c) : e(p, c, m),
                        (o = !0),
                        (l._container = c),
                        (c.__vue_app__ = l),
                        Ea(p.component) || p.component.proxy
                    );
                }
            },
            unmount() {
                o && (e(null, l._container), delete l._container.__vue_app__);
            },
            provide(c, u) {
                return (i.provides[c] = u), l;
            }
        });
        return l;
    };
}
function oi(e, t, n, r, a = !1) {
    if (q(e)) {
        e.forEach((p, _) => oi(p, t && (q(t) ? t[_] : t), n, r, a));
        return;
    }
    if (yr(r) && !a) return;
    const i = r.shapeFlag & 4 ? Ea(r.component) || r.component.proxy : r.el,
        s = a ? null : i,
        { i: o, r: l } = e,
        c = t && t.r,
        u = o.refs === ge ? (o.refs = {}) : o.refs,
        m = o.setupState;
    if (
        (c != null &&
            c !== l &&
            (we(c)
                ? ((u[c] = null), oe(m, c) && (m[c] = null))
                : Le(c) && (c.value = null)),
        Z(l))
    )
        Ut(l, o, 12, [s, u]);
    else {
        const p = we(l),
            _ = Le(l);
        if (p || _) {
            const N = () => {
                if (e.f) {
                    const O = p ? u[l] : l.value;
                    a
                        ? q(O) && Wi(O, i)
                        : q(O)
                        ? O.includes(i) || O.push(i)
                        : p
                        ? ((u[l] = [i]), oe(m, l) && (m[l] = u[l]))
                        : ((l.value = [i]), e.k && (u[e.k] = l.value));
                } else
                    p
                        ? ((u[l] = s), oe(m, l) && (m[l] = s))
                        : Le(l) && ((l.value = s), e.k && (u[e.k] = s));
            };
            s ? ((N.id = -1), Ue(N, n)) : N();
        }
    }
}
const Ue = yd;
function Bd(e) {
    return Yd(e);
}
function Yd(e, t) {
    const n = Of();
    n.__VUE__ = !0;
    const {
            insert: r,
            remove: a,
            patchProp: i,
            createElement: s,
            createText: o,
            createComment: l,
            setText: c,
            setElementText: u,
            parentNode: m,
            nextSibling: p,
            setScopeId: _ = lt,
            cloneNode: N,
            insertStaticContent: O
        } = e,
        A = (
            f,
            d,
            y,
            S = null,
            k = null,
            M = null,
            $ = !1,
            D = null,
            x = !!d.dynamicChildren
        ) => {
            if (f === d) return;
            f && !tn(f, d) && ((S = B(f)), $e(f, k, M, !0), (f = null)),
                d.patchFlag === -2 && ((x = !1), (d.dynamicChildren = null));
            const { type: E, ref: w, shapeFlag: U } = d;
            switch (E) {
                case _a:
                    h(f, d, y, S);
                    break;
                case rt:
                    g(f, d, y, S);
                    break;
                case Ha:
                    f == null && I(d, y, S, $);
                    break;
                case Ae:
                    ce(f, d, y, S, k, M, $, D, x);
                    break;
                default:
                    U & 1
                        ? P(f, d, y, S, k, M, $, D, x)
                        : U & 6
                        ? Ne(f, d, y, S, k, M, $, D, x)
                        : (U & 64 || U & 128) &&
                          E.process(f, d, y, S, k, M, $, D, x, ue);
            }
            w != null && k && oi(w, f && f.ref, M, d || f, !d);
        },
        h = (f, d, y, S) => {
            if (f == null) r((d.el = o(d.children)), y, S);
            else {
                const k = (d.el = f.el);
                d.children !== f.children && c(k, d.children);
            }
        },
        g = (f, d, y, S) => {
            f == null ? r((d.el = l(d.children || '')), y, S) : (d.el = f.el);
        },
        I = (f, d, y, S) => {
            [f.el, f.anchor] = O(f.children, d, y, S, f.el, f.anchor);
        },
        T = ({ el: f, anchor: d }, y, S) => {
            let k;
            for (; f && f !== d; ) (k = p(f)), r(f, y, S), (f = k);
            r(d, y, S);
        },
        C = ({ el: f, anchor: d }) => {
            let y;
            for (; f && f !== d; ) (y = p(f)), a(f), (f = y);
            a(d);
        },
        P = (f, d, y, S, k, M, $, D, x) => {
            ($ = $ || d.type === 'svg'),
                f == null ? R(d, y, S, k, M, $, D, x) : te(f, d, k, M, $, D, x);
        },
        R = (f, d, y, S, k, M, $, D) => {
            let x, E;
            const {
                type: w,
                props: U,
                shapeFlag: W,
                transition: X,
                patchFlag: ne,
                dirs: de
            } = f;
            if (f.el && N !== void 0 && ne === -1) x = f.el = N(f.el);
            else {
                if (
                    ((x = f.el = s(f.type, M, U && U.is, U)),
                    W & 8
                        ? u(x, f.children)
                        : W & 16 &&
                          Y(
                              f.children,
                              x,
                              null,
                              S,
                              k,
                              M && w !== 'foreignObject',
                              $,
                              D
                          ),
                    de && qt(f, null, S, 'created'),
                    U)
                ) {
                    for (const ve in U)
                        ve !== 'value' &&
                            !Wr(ve) &&
                            i(x, ve, null, U[ve], M, f.children, S, k, F);
                    'value' in U && i(x, 'value', null, U.value),
                        (E = U.onVnodeBeforeMount) && et(E, S, f);
                }
                K(x, f, f.scopeId, $, S);
            }
            de && qt(f, null, S, 'beforeMount');
            const pe = (!k || (k && !k.pendingBranch)) && X && !X.persisted;
            pe && X.beforeEnter(x),
                r(x, d, y),
                ((E = U && U.onVnodeMounted) || pe || de) &&
                    Ue(() => {
                        E && et(E, S, f),
                            pe && X.enter(x),
                            de && qt(f, null, S, 'mounted');
                    }, k);
        },
        K = (f, d, y, S, k) => {
            if ((y && _(f, y), S))
                for (let M = 0; M < S.length; M++) _(f, S[M]);
            if (k) {
                let M = k.subTree;
                if (d === M) {
                    const $ = k.vnode;
                    K(f, $, $.scopeId, $.slotScopeIds, k.parent);
                }
            }
        },
        Y = (f, d, y, S, k, M, $, D, x = 0) => {
            for (let E = x; E < f.length; E++) {
                const w = (f[E] = D ? Dt(f[E]) : pt(f[E]));
                A(null, w, d, y, S, k, M, $, D);
            }
        },
        te = (f, d, y, S, k, M, $) => {
            const D = (d.el = f.el);
            let { patchFlag: x, dynamicChildren: E, dirs: w } = d;
            x |= f.patchFlag & 16;
            const U = f.props || ge,
                W = d.props || ge;
            let X;
            y && Qt(y, !1),
                (X = W.onVnodeBeforeUpdate) && et(X, y, d, f),
                w && qt(d, f, y, 'beforeUpdate'),
                y && Qt(y, !0);
            const ne = k && d.type !== 'foreignObject';
            if (
                (E
                    ? J(f.dynamicChildren, E, D, y, S, ne, M)
                    : $ || ke(f, d, D, null, y, S, ne, M, !1),
                x > 0)
            ) {
                if (x & 16) j(D, d, U, W, y, S, k);
                else if (
                    (x & 2 &&
                        U.class !== W.class &&
                        i(D, 'class', null, W.class, k),
                    x & 4 && i(D, 'style', U.style, W.style, k),
                    x & 8)
                ) {
                    const de = d.dynamicProps;
                    for (let pe = 0; pe < de.length; pe++) {
                        const ve = de[pe],
                            it = U[ve],
                            gn = W[ve];
                        (gn !== it || ve === 'value') &&
                            i(D, ve, it, gn, k, f.children, y, S, F);
                    }
                }
                x & 1 && f.children !== d.children && u(D, d.children);
            } else !$ && E == null && j(D, d, U, W, y, S, k);
            ((X = W.onVnodeUpdated) || w) &&
                Ue(() => {
                    X && et(X, y, d, f), w && qt(d, f, y, 'updated');
                }, S);
        },
        J = (f, d, y, S, k, M, $) => {
            for (let D = 0; D < d.length; D++) {
                const x = f[D],
                    E = d[D],
                    w =
                        x.el && (x.type === Ae || !tn(x, E) || x.shapeFlag & 70)
                            ? m(x.el)
                            : y;
                A(x, E, w, null, S, k, M, $, !0);
            }
        },
        j = (f, d, y, S, k, M, $) => {
            if (y !== S) {
                for (const D in S) {
                    if (Wr(D)) continue;
                    const x = S[D],
                        E = y[D];
                    x !== E &&
                        D !== 'value' &&
                        i(f, D, E, x, $, d.children, k, M, F);
                }
                if (y !== ge)
                    for (const D in y)
                        !Wr(D) &&
                            !(D in S) &&
                            i(f, D, y[D], null, $, d.children, k, M, F);
                'value' in S && i(f, 'value', y.value, S.value);
            }
        },
        ce = (f, d, y, S, k, M, $, D, x) => {
            const E = (d.el = f ? f.el : o('')),
                w = (d.anchor = f ? f.anchor : o(''));
            let { patchFlag: U, dynamicChildren: W, slotScopeIds: X } = d;
            X && (D = D ? D.concat(X) : X),
                f == null
                    ? (r(E, y, S),
                      r(w, y, S),
                      Y(d.children, y, w, k, M, $, D, x))
                    : U > 0 && U & 64 && W && f.dynamicChildren
                    ? (J(f.dynamicChildren, W, y, k, M, $, D),
                      (d.key != null || (k && d === k.subTree)) && Pc(f, d, !0))
                    : ke(f, d, y, w, k, M, $, D, x);
        },
        Ne = (f, d, y, S, k, M, $, D, x) => {
            (d.slotScopeIds = D),
                f == null
                    ? d.shapeFlag & 512
                        ? k.ctx.activate(d, y, S, $, x)
                        : We(d, y, S, k, M, $, x)
                    : ie(f, d, x);
        },
        We = (f, d, y, S, k, M, $) => {
            const D = (f.component = im(f, S, k));
            if ((ha(f) && (D.ctx.renderer = ue), sm(D), D.asyncDep)) {
                if ((k && k.registerDep(D, re), !f.el)) {
                    const x = (D.subTree = Ee(rt));
                    g(null, x, d, y);
                }
                return;
            }
            re(D, f, d, y, k, M, $);
        },
        ie = (f, d, y) => {
            const S = (d.component = f.component);
            if (vd(f, d, y))
                if (S.asyncDep && !S.asyncResolved) {
                    se(S, d, y);
                    return;
                } else (S.next = d), fd(S.update), S.update();
            else (d.component = f.component), (d.el = f.el), (S.vnode = d);
        },
        re = (f, d, y, S, k, M, $) => {
            const D = () => {
                    if (f.isMounted) {
                        let { next: w, bu: U, u: W, parent: X, vnode: ne } = f,
                            de = w,
                            pe;
                        Qt(f, !1),
                            w ? ((w.el = ne.el), se(f, w, $)) : (w = ne),
                            U && rr(U),
                            (pe = w.props && w.props.onVnodeBeforeUpdate) &&
                                et(pe, X, w, ne),
                            Qt(f, !0);
                        const ve = Da(f),
                            it = f.subTree;
                        (f.subTree = ve),
                            A(it, ve, m(it.el), B(it), f, k, M),
                            (w.el = ve.el),
                            de === null && _d(f, ve.el),
                            W && Ue(W, k),
                            (pe = w.props && w.props.onVnodeUpdated) &&
                                Ue(() => et(pe, X, w, ne), k);
                    } else {
                        let w;
                        const { el: U, props: W } = d,
                            { bm: X, m: ne, parent: de } = f,
                            pe = yr(d);
                        if (
                            (Qt(f, !1),
                            X && rr(X),
                            !pe &&
                                (w = W && W.onVnodeBeforeMount) &&
                                et(w, de, d),
                            Qt(f, !0),
                            U && b)
                        ) {
                            const ve = () => {
                                (f.subTree = Da(f)),
                                    b(U, f.subTree, f, k, null);
                            };
                            pe
                                ? d.type
                                      .__asyncLoader()
                                      .then(() => !f.isUnmounted && ve())
                                : ve();
                        } else {
                            const ve = (f.subTree = Da(f));
                            A(null, ve, y, S, f, k, M), (d.el = ve.el);
                        }
                        if (
                            (ne && Ue(ne, k),
                            !pe && (w = W && W.onVnodeMounted))
                        ) {
                            const ve = d;
                            Ue(() => et(w, de, ve), k);
                        }
                        d.shapeFlag & 256 && f.a && Ue(f.a, k),
                            (f.isMounted = !0),
                            (d = y = S = null);
                    }
                },
                x = (f.effect = new Bi(D, () => dc(f.update), f.scope)),
                E = (f.update = x.run.bind(x));
            (E.id = f.uid), Qt(f, !0), E();
        },
        se = (f, d, y) => {
            d.component = f;
            const S = f.vnode.props;
            (f.vnode = d),
                (f.next = null),
                $d(f, d.props, S, y),
                Wd(f, d.children, y),
                Hn(),
                Ji(void 0, f.update),
                Wn();
        },
        ke = (f, d, y, S, k, M, $, D, x = !1) => {
            const E = f && f.children,
                w = f ? f.shapeFlag : 0,
                U = d.children,
                { patchFlag: W, shapeFlag: X } = d;
            if (W > 0) {
                if (W & 128) {
                    je(E, U, y, S, k, M, $, D, x);
                    return;
                } else if (W & 256) {
                    Je(E, U, y, S, k, M, $, D, x);
                    return;
                }
            }
            X & 8
                ? (w & 16 && F(E, k, M), U !== E && u(y, U))
                : w & 16
                ? X & 16
                    ? je(E, U, y, S, k, M, $, D, x)
                    : F(E, k, M, !0)
                : (w & 8 && u(y, ''), X & 16 && Y(U, y, S, k, M, $, D, x));
        },
        Je = (f, d, y, S, k, M, $, D, x) => {
            (f = f || On), (d = d || On);
            const E = f.length,
                w = d.length,
                U = Math.min(E, w);
            let W;
            for (W = 0; W < U; W++) {
                const X = (d[W] = x ? Dt(d[W]) : pt(d[W]));
                A(f[W], X, y, null, k, M, $, D, x);
            }
            E > w ? F(f, k, M, !0, !1, U) : Y(d, y, S, k, M, $, D, x, U);
        },
        je = (f, d, y, S, k, M, $, D, x) => {
            let E = 0;
            const w = d.length;
            let U = f.length - 1,
                W = w - 1;
            for (; E <= U && E <= W; ) {
                const X = f[E],
                    ne = (d[E] = x ? Dt(d[E]) : pt(d[E]));
                if (tn(X, ne)) A(X, ne, y, null, k, M, $, D, x);
                else break;
                E++;
            }
            for (; E <= U && E <= W; ) {
                const X = f[U],
                    ne = (d[W] = x ? Dt(d[W]) : pt(d[W]));
                if (tn(X, ne)) A(X, ne, y, null, k, M, $, D, x);
                else break;
                U--, W--;
            }
            if (E > U) {
                if (E <= W) {
                    const X = W + 1,
                        ne = X < w ? d[X].el : S;
                    for (; E <= W; )
                        A(
                            null,
                            (d[E] = x ? Dt(d[E]) : pt(d[E])),
                            y,
                            ne,
                            k,
                            M,
                            $,
                            D,
                            x
                        ),
                            E++;
                }
            } else if (E > W) for (; E <= U; ) $e(f[E], k, M, !0), E++;
            else {
                const X = E,
                    ne = E,
                    de = new Map();
                for (E = ne; E <= W; E++) {
                    const ze = (d[E] = x ? Dt(d[E]) : pt(d[E]));
                    ze.key != null && de.set(ze.key, E);
                }
                let pe,
                    ve = 0;
                const it = W - ne + 1;
                let gn = !1,
                    Ps = 0;
                const Kn = new Array(it);
                for (E = 0; E < it; E++) Kn[E] = 0;
                for (E = X; E <= U; E++) {
                    const ze = f[E];
                    if (ve >= it) {
                        $e(ze, k, M, !0);
                        continue;
                    }
                    let ft;
                    if (ze.key != null) ft = de.get(ze.key);
                    else
                        for (pe = ne; pe <= W; pe++)
                            if (Kn[pe - ne] === 0 && tn(ze, d[pe])) {
                                ft = pe;
                                break;
                            }
                    ft === void 0
                        ? $e(ze, k, M, !0)
                        : ((Kn[ft - ne] = E + 1),
                          ft >= Ps ? (Ps = ft) : (gn = !0),
                          A(ze, d[ft], y, null, k, M, $, D, x),
                          ve++);
                }
                const xs = gn ? Kd(Kn) : On;
                for (pe = xs.length - 1, E = it - 1; E >= 0; E--) {
                    const ze = ne + E,
                        ft = d[ze],
                        Ms = ze + 1 < w ? d[ze + 1].el : S;
                    Kn[E] === 0
                        ? A(null, ft, y, Ms, k, M, $, D, x)
                        : gn &&
                          (pe < 0 || E !== xs[pe] ? Fe(ft, y, Ms, 2) : pe--);
                }
            }
        },
        Fe = (f, d, y, S, k = null) => {
            const {
                el: M,
                type: $,
                transition: D,
                children: x,
                shapeFlag: E
            } = f;
            if (E & 6) {
                Fe(f.component.subTree, d, y, S);
                return;
            }
            if (E & 128) {
                f.suspense.move(d, y, S);
                return;
            }
            if (E & 64) {
                $.move(f, d, y, ue);
                return;
            }
            if ($ === Ae) {
                r(M, d, y);
                for (let U = 0; U < x.length; U++) Fe(x[U], d, y, S);
                r(f.anchor, d, y);
                return;
            }
            if ($ === Ha) {
                T(f, d, y);
                return;
            }
            if (S !== 2 && E & 1 && D)
                if (S === 0)
                    D.beforeEnter(M), r(M, d, y), Ue(() => D.enter(M), k);
                else {
                    const { leave: U, delayLeave: W, afterLeave: X } = D,
                        ne = () => r(M, d, y),
                        de = () => {
                            U(M, () => {
                                ne(), X && X();
                            });
                        };
                    W ? W(M, ne, de) : de();
                }
            else r(M, d, y);
        },
        $e = (f, d, y, S = !1, k = !1) => {
            const {
                type: M,
                props: $,
                ref: D,
                children: x,
                dynamicChildren: E,
                shapeFlag: w,
                patchFlag: U,
                dirs: W
            } = f;
            if ((D != null && oi(D, null, y, f, !0), w & 256)) {
                d.ctx.deactivate(f);
                return;
            }
            const X = w & 1 && W,
                ne = !yr(f);
            let de;
            if (
                (ne && (de = $ && $.onVnodeBeforeUnmount) && et(de, d, f),
                w & 6)
            )
                G(f.component, y, S);
            else {
                if (w & 128) {
                    f.suspense.unmount(y, S);
                    return;
                }
                X && qt(f, null, d, 'beforeUnmount'),
                    w & 64
                        ? f.type.remove(f, d, y, k, ue, S)
                        : E && (M !== Ae || (U > 0 && U & 64))
                        ? F(E, d, y, !1, !0)
                        : ((M === Ae && U & 384) || (!k && w & 16)) &&
                          F(x, d, y),
                    S && _t(f);
            }
            ((ne && (de = $ && $.onVnodeUnmounted)) || X) &&
                Ue(() => {
                    de && et(de, d, f), X && qt(f, null, d, 'unmounted');
                }, y);
        },
        _t = (f) => {
            const { type: d, el: y, anchor: S, transition: k } = f;
            if (d === Ae) {
                L(y, S);
                return;
            }
            if (d === Ha) {
                C(f);
                return;
            }
            const M = () => {
                a(y), k && !k.persisted && k.afterLeave && k.afterLeave();
            };
            if (f.shapeFlag & 1 && k && !k.persisted) {
                const { leave: $, delayLeave: D } = k,
                    x = () => $(y, M);
                D ? D(f.el, M, x) : x();
            } else M();
        },
        L = (f, d) => {
            let y;
            for (; f !== d; ) (y = p(f)), a(f), (f = y);
            a(d);
        },
        G = (f, d, y) => {
            const { bum: S, scope: k, update: M, subTree: $, um: D } = f;
            S && rr(S),
                k.stop(),
                M && ((M.active = !1), $e($, f, d, y)),
                D && Ue(D, d),
                Ue(() => {
                    f.isUnmounted = !0;
                }, d),
                d &&
                    d.pendingBranch &&
                    !d.isUnmounted &&
                    f.asyncDep &&
                    !f.asyncResolved &&
                    f.suspenseId === d.pendingId &&
                    (d.deps--, d.deps === 0 && d.resolve());
        },
        F = (f, d, y, S = !1, k = !1, M = 0) => {
            for (let $ = M; $ < f.length; $++) $e(f[$], d, y, S, k);
        },
        B = (f) =>
            f.shapeFlag & 6
                ? B(f.component.subTree)
                : f.shapeFlag & 128
                ? f.suspense.next()
                : p(f.anchor || f.el),
        ae = (f, d, y) => {
            f == null
                ? d._vnode && $e(d._vnode, null, null, !0)
                : A(d._vnode || null, f, d, null, null, null, y),
                hc(),
                (d._vnode = f);
        },
        ue = {
            p: A,
            um: $e,
            m: Fe,
            r: _t,
            mt: We,
            mc: Y,
            pc: ke,
            pbc: J,
            n: B,
            o: e
        };
    let v, b;
    return (
        t && ([v, b] = t(ue)), { render: ae, hydrate: v, createApp: Vd(ae, v) }
    );
}
function Qt({ effect: e, update: t }, n) {
    e.allowRecurse = t.allowRecurse = n;
}
function Pc(e, t, n = !1) {
    const r = e.children,
        a = t.children;
    if (q(r) && q(a))
        for (let i = 0; i < r.length; i++) {
            const s = r[i];
            let o = a[i];
            o.shapeFlag & 1 &&
                !o.dynamicChildren &&
                ((o.patchFlag <= 0 || o.patchFlag === 32) &&
                    ((o = a[i] = Dt(a[i])), (o.el = s.el)),
                n || Pc(s, o));
        }
}
function Kd(e) {
    const t = e.slice(),
        n = [0];
    let r, a, i, s, o;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const c = e[r];
        if (c !== 0) {
            if (((a = n[n.length - 1]), e[a] < c)) {
                (t[r] = a), n.push(r);
                continue;
            }
            for (i = 0, s = n.length - 1; i < s; )
                (o = (i + s) >> 1), e[n[o]] < c ? (i = o + 1) : (s = o);
            c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
        }
    }
    for (i = n.length, s = n[i - 1]; i-- > 0; ) (n[i] = s), (s = t[s]);
    return n;
}
const zd = (e) => e.__isTeleport,
    rs = 'components',
    Xd = 'directives';
function Rn(e, t) {
    return as(rs, e, !0, t) || e;
}
const xc = Symbol();
function Js(e) {
    return we(e) ? as(rs, e, !1) || e : e || xc;
}
function rE(e) {
    return as(Xd, e);
}
function as(e, t, n = !0, r = !1) {
    const a = He || Pe;
    if (a) {
        const i = a.type;
        if (e === rs) {
            const o = ci(i);
            if (o && (o === t || o === vt(t) || o === ua(vt(t)))) return i;
        }
        const s = Zs(a[e] || i[e], t) || Zs(a.appContext[e], t);
        return !s && r ? i : s;
    }
}
function Zs(e, t) {
    return e && (e[t] || e[vt(t)] || e[ua(vt(t))]);
}
const Ae = Symbol(void 0),
    _a = Symbol(void 0),
    rt = Symbol(void 0),
    Ha = Symbol(void 0),
    or = [];
let ln = null;
function ye(e = !1) {
    or.push((ln = e ? null : []));
}
function qd() {
    or.pop(), (ln = or[or.length - 1] || null);
}
let Jr = 1;
function eo(e) {
    Jr += e;
}
function Mc(e) {
    return (
        (e.dynamicChildren = Jr > 0 ? ln || On : null),
        qd(),
        Jr > 0 && ln && ln.push(e),
        e
    );
}
function Be(e, t, n, r, a, i) {
    return Mc(Wt(e, t, n, r, a, i, !0));
}
function Tt(e, t, n, r, a) {
    return Mc(Ee(e, t, n, r, a, !0));
}
function Er(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function tn(e, t) {
    return e.type === t.type && e.key === t.key;
}
const ba = '__vInternal',
    Dc = ({ key: e }) => (e != null ? e : null),
    Gr = ({ ref: e, ref_key: t, ref_for: n }) =>
        e != null
            ? we(e) || Le(e) || Z(e)
                ? { i: He, r: e, k: t, f: !!n }
                : e
            : null;
function Wt(
    e,
    t = null,
    n = null,
    r = 0,
    a = null,
    i = e === Ae ? 0 : 1,
    s = !1,
    o = !1
) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Dc(t),
        ref: t && Gr(t),
        scopeId: pa,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: a,
        dynamicChildren: null,
        appContext: null
    };
    return (
        o
            ? (is(l, n), i & 128 && e.normalize(l))
            : n && (l.shapeFlag |= we(n) ? 8 : 16),
        Jr > 0 &&
            !s &&
            ln &&
            (l.patchFlag > 0 || i & 6) &&
            l.patchFlag !== 32 &&
            ln.push(l),
        l
    );
}
const Ee = Qd;
function Qd(e, t = null, n = null, r = 0, a = null, i = !1) {
    if (((!e || e === xc) && (e = rt), Er(e))) {
        const o = jt(e, t, !0);
        return n && is(o, n), o;
    }
    if ((um(e) && (e = e.__vccOpts), t)) {
        t = Jd(t);
        let { class: o, style: l } = t;
        o && !we(o) && (t.class = $n(o)),
            Se(l) && (rc(l) && !q(l) && (l = De({}, l)), (t.style = Or(l)));
    }
    const s = we(e) ? 1 : bd(e) ? 128 : zd(e) ? 64 : Se(e) ? 4 : Z(e) ? 2 : 0;
    return Wt(e, t, n, r, a, s, i, !0);
}
function Jd(e) {
    return e ? (rc(e) || ba in e ? De({}, e) : e) : null;
}
function jt(e, t, n = !1) {
    const { props: r, ref: a, patchFlag: i, children: s } = e,
        o = t ? em(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: o,
        key: o && Dc(o),
        ref:
            t && t.ref
                ? n && a
                    ? q(a)
                        ? a.concat(Gr(t))
                        : [a, Gr(t)]
                    : Gr(t)
                : a,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ae ? (i === -1 ? 16 : i | 16) : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && jt(e.ssContent),
        ssFallback: e.ssFallback && jt(e.ssFallback),
        el: e.el,
        anchor: e.anchor
    };
}
function Zd(e = ' ', t = 0) {
    return Ee(_a, null, e, t);
}
function Pn(e = '', t = !1) {
    return t ? (ye(), Tt(rt, null, e)) : Ee(rt, null, e);
}
function pt(e) {
    return e == null || typeof e == 'boolean'
        ? Ee(rt)
        : q(e)
        ? Ee(Ae, null, e.slice())
        : typeof e == 'object'
        ? Dt(e)
        : Ee(_a, null, String(e));
}
function Dt(e) {
    return e.el === null || e.memo ? e : jt(e);
}
function is(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (q(t)) n = 16;
    else if (typeof t == 'object')
        if (r & 65) {
            const a = t.default;
            a && (a._c && (a._d = !1), is(e, a()), a._c && (a._d = !0));
            return;
        } else {
            n = 32;
            const a = t._;
            !a && !(ba in t)
                ? (t._ctx = He)
                : a === 3 &&
                  He &&
                  (He.slots._ === 1
                      ? (t._ = 1)
                      : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    else
        Z(t)
            ? ((t = { default: t, _ctx: He }), (n = 32))
            : ((t = String(t)), r & 64 ? ((n = 16), (t = [Zd(t)])) : (n = 8));
    (e.children = t), (e.shapeFlag |= n);
}
function em(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const a in r)
            if (a === 'class')
                t.class !== r.class && (t.class = $n([t.class, r.class]));
            else if (a === 'style') t.style = Or([t.style, r.style]);
            else if (oa(a)) {
                const i = t[a],
                    s = r[a];
                s &&
                    i !== s &&
                    !(q(i) && i.includes(s)) &&
                    (t[a] = i ? [].concat(i, s) : s);
            } else a !== '' && (t[a] = r[a]);
    }
    return t;
}
function et(e, t, n, r = null) {
    tt(e, t, 7, [n, r]);
}
function ya(e, t, n, r) {
    let a;
    const i = n && n[r];
    if (q(e) || we(e)) {
        a = new Array(e.length);
        for (let s = 0, o = e.length; s < o; s++)
            a[s] = t(e[s], s, void 0, i && i[s]);
    } else if (typeof e == 'number') {
        a = new Array(e);
        for (let s = 0; s < e; s++) a[s] = t(s + 1, s, void 0, i && i[s]);
    } else if (Se(e))
        if (e[Symbol.iterator])
            a = Array.from(e, (s, o) => t(s, o, void 0, i && i[o]));
        else {
            const s = Object.keys(e);
            a = new Array(s.length);
            for (let o = 0, l = s.length; o < l; o++) {
                const c = s[o];
                a[o] = t(e[c], c, o, i && i[o]);
            }
        }
    else a = [];
    return n && (n[r] = a), a;
}
function tm(e, t, n = {}, r, a) {
    if (He.isCE || (He.parent && yr(He.parent) && He.parent.isCE))
        return Ee('slot', t === 'default' ? null : { name: t }, r && r());
    let i = e[t];
    i && i._c && (i._d = !1), ye();
    const s = i && Fc(i(n)),
        o = Tt(
            Ae,
            { key: n.key || `_${t}` },
            s || (r ? r() : []),
            s && e._ === 1 ? 64 : -2
        );
    return (
        !a && o.scopeId && (o.slotScopeIds = [o.scopeId + '-s']),
        i && i._c && (i._d = !0),
        o
    );
}
function Fc(e) {
    return e.some((t) =>
        Er(t) ? !(t.type === rt || (t.type === Ae && !Fc(t.children))) : !0
    )
        ? e
        : null;
}
const li = (e) => (e ? ($c(e) ? Ea(e) || e.proxy : li(e.parent)) : null),
    Zr = De(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => li(e.parent),
        $root: (e) => li(e.root),
        $emit: (e) => e.emit,
        $options: (e) => Ac(e),
        $forceUpdate: (e) => () => dc(e.update),
        $nextTick: (e) => fc.bind(e.proxy),
        $watch: (e) => Ed.bind(e)
    }),
    nm = {
        get({ _: e }, t) {
            const {
                ctx: n,
                setupState: r,
                data: a,
                props: i,
                accessCache: s,
                type: o,
                appContext: l
            } = e;
            let c;
            if (t[0] !== '$') {
                const _ = s[t];
                if (_ !== void 0)
                    switch (_) {
                        case 1:
                            return r[t];
                        case 2:
                            return a[t];
                        case 4:
                            return n[t];
                        case 3:
                            return i[t];
                    }
                else {
                    if (r !== ge && oe(r, t)) return (s[t] = 1), r[t];
                    if (a !== ge && oe(a, t)) return (s[t] = 2), a[t];
                    if ((c = e.propsOptions[0]) && oe(c, t))
                        return (s[t] = 3), i[t];
                    if (n !== ge && oe(n, t)) return (s[t] = 4), n[t];
                    ai && (s[t] = 0);
                }
            }
            const u = Zr[t];
            let m, p;
            if (u) return t === '$attrs' && qe(e, 'get', t), u(e);
            if ((m = o.__cssModules) && (m = m[t])) return m;
            if (n !== ge && oe(n, t)) return (s[t] = 4), n[t];
            if (((p = l.config.globalProperties), oe(p, t))) return p[t];
        },
        set({ _: e }, t, n) {
            const { data: r, setupState: a, ctx: i } = e;
            return a !== ge && oe(a, t)
                ? ((a[t] = n), !0)
                : r !== ge && oe(r, t)
                ? ((r[t] = n), !0)
                : oe(e.props, t) || (t[0] === '$' && t.slice(1) in e)
                ? !1
                : ((i[t] = n), !0);
        },
        has(
            {
                _: {
                    data: e,
                    setupState: t,
                    accessCache: n,
                    ctx: r,
                    appContext: a,
                    propsOptions: i
                }
            },
            s
        ) {
            let o;
            return (
                !!n[s] ||
                (e !== ge && oe(e, s)) ||
                (t !== ge && oe(t, s)) ||
                ((o = i[0]) && oe(o, s)) ||
                oe(r, s) ||
                oe(Zr, s) ||
                oe(a.config.globalProperties, s)
            );
        },
        defineProperty(e, t, n) {
            return (
                n.get != null
                    ? (e._.accessCache[t] = 0)
                    : oe(n, 'value') && this.set(e, t, n.value, null),
                Reflect.defineProperty(e, t, n)
            );
        }
    },
    rm = Rc();
let am = 0;
function im(e, t, n) {
    const r = e.type,
        a = (t ? t.appContext : e.appContext) || rm,
        i = {
            uid: am++,
            vnode: e,
            type: r,
            parent: t,
            appContext: a,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new Vl(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(a.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: wc(r, a),
            emitsOptions: vc(r, a),
            emit: null,
            emitted: null,
            propsDefaults: ge,
            inheritAttrs: r.inheritAttrs,
            ctx: ge,
            data: ge,
            props: ge,
            attrs: ge,
            slots: ge,
            refs: ge,
            setupState: ge,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return (
        (i.ctx = { _: i }),
        (i.root = t ? t.root : i),
        (i.emit = pd.bind(null, i)),
        e.ce && e.ce(i),
        i
    );
}
let Pe = null;
const Gt = () => Pe || He,
    xn = (e) => {
        (Pe = e), e.scope.on();
    },
    cn = () => {
        Pe && Pe.scope.off(), (Pe = null);
    };
function $c(e) {
    return e.vnode.shapeFlag & 4;
}
let Tr = !1;
function sm(e, t = !1) {
    Tr = t;
    const { props: n, children: r } = e.vnode,
        a = $c(e);
    Fd(e, n, a, t), Hd(e, r);
    const i = a ? om(e, t) : void 0;
    return (Tr = !1), i;
}
function om(e, t) {
    const n = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = ac(new Proxy(e.ctx, nm)));
    const { setup: r } = n;
    if (r) {
        const a = (e.setupContext = r.length > 1 ? cm(e) : null);
        xn(e), Hn();
        const i = Ut(r, e, 0, [e.props, a]);
        if ((Wn(), cn(), Hl(i))) {
            if ((i.then(cn, cn), t))
                return i
                    .then((s) => {
                        to(e, s, t);
                    })
                    .catch((s) => {
                        da(s, e, 0);
                    });
            e.asyncDep = i;
        } else to(e, i, t);
    } else Uc(e, t);
}
function to(e, t, n) {
    Z(t)
        ? e.type.__ssrInlineRender
            ? (e.ssrRender = t)
            : (e.render = t)
        : Se(t) && (e.setupState = cc(t)),
        Uc(e, n);
}
let no;
function Uc(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && no && !r.render) {
            const a = r.template;
            if (a) {
                const { isCustomElement: i, compilerOptions: s } =
                        e.appContext.config,
                    { delimiters: o, compilerOptions: l } = r,
                    c = De(De({ isCustomElement: i, delimiters: o }, s), l);
                r.render = no(a, c);
            }
        }
        e.render = r.render || lt;
    }
    xn(e), Hn(), Rd(e), Wn(), cn();
}
function lm(e) {
    return new Proxy(e.attrs, {
        get(t, n) {
            return qe(e, 'get', '$attrs'), t[n];
        }
    });
}
function cm(e) {
    const t = (r) => {
        e.exposed = r || {};
    };
    let n;
    return {
        get attrs() {
            return n || (n = lm(e));
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    };
}
function Ea(e) {
    if (e.exposed)
        return (
            e.exposeProxy ||
            (e.exposeProxy = new Proxy(cc(ac(e.exposed)), {
                get(t, n) {
                    if (n in t) return t[n];
                    if (n in Zr) return Zr[n](e);
                }
            }))
        );
}
function ci(e) {
    return (Z(e) && e.displayName) || e.name;
}
function um(e) {
    return Z(e) && '__vccOpts' in e;
}
const ee = (e, t) => ld(e, t, Tr);
function mn(e, t, n) {
    const r = arguments.length;
    return r === 2
        ? Se(t) && !q(t)
            ? Er(t)
                ? Ee(e, null, [t])
                : Ee(e, t)
            : Ee(e, null, t)
        : (r > 3
              ? (n = Array.prototype.slice.call(arguments, 2))
              : r === 3 && Er(n) && (n = [n]),
          Ee(e, t, n));
}
const fm = '3.2.33',
    dm = 'http://www.w3.org/2000/svg',
    nn = typeof document != 'undefined' ? document : null,
    ro = nn && nn.createElement('template'),
    mm = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null);
        },
        remove: (e) => {
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, n, r) => {
            const a = t
                ? nn.createElementNS(dm, e)
                : nn.createElement(e, n ? { is: n } : void 0);
            return (
                e === 'select' &&
                    r &&
                    r.multiple != null &&
                    a.setAttribute('multiple', r.multiple),
                a
            );
        },
        createText: (e) => nn.createTextNode(e),
        createComment: (e) => nn.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => nn.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, '');
        },
        cloneNode(e) {
            const t = e.cloneNode(!0);
            return '_value' in e && (t._value = e._value), t;
        },
        insertStaticContent(e, t, n, r, a, i) {
            const s = n ? n.previousSibling : t.lastChild;
            if (a && (a === i || a.nextSibling))
                for (
                    ;
                    t.insertBefore(a.cloneNode(!0), n),
                        !(a === i || !(a = a.nextSibling));

                );
            else {
                ro.innerHTML = r ? `<svg>${e}</svg>` : e;
                const o = ro.content;
                if (r) {
                    const l = o.firstChild;
                    for (; l.firstChild; ) o.appendChild(l.firstChild);
                    o.removeChild(l);
                }
                t.insertBefore(o, n);
            }
            return [
                s ? s.nextSibling : t.firstChild,
                n ? n.previousSibling : t.lastChild
            ];
        }
    };
function pm(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(' ')),
        t == null
            ? e.removeAttribute('class')
            : n
            ? e.setAttribute('class', t)
            : (e.className = t);
}
function hm(e, t, n) {
    const r = e.style,
        a = we(n);
    if (n && !a) {
        for (const i in n) ui(r, i, n[i]);
        if (t && !we(t)) for (const i in t) n[i] == null && ui(r, i, '');
    } else {
        const i = r.display;
        a ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'),
            '_vod' in e && (r.display = i);
    }
}
const ao = /\s*!important$/;
function ui(e, t, n) {
    if (q(n)) n.forEach((r) => ui(e, t, r));
    else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
    else {
        const r = gm(e, t);
        ao.test(n)
            ? e.setProperty(Un(r), n.replace(ao, ''), 'important')
            : (e[r] = n);
    }
}
const io = ['Webkit', 'Moz', 'ms'],
    Wa = {};
function gm(e, t) {
    const n = Wa[t];
    if (n) return n;
    let r = vt(t);
    if (r !== 'filter' && r in e) return (Wa[t] = r);
    r = ua(r);
    for (let a = 0; a < io.length; a++) {
        const i = io[a] + r;
        if (i in e) return (Wa[t] = i);
    }
    return t;
}
const so = 'http://www.w3.org/1999/xlink';
function vm(e, t, n, r, a) {
    if (r && t.startsWith('xlink:'))
        n == null
            ? e.removeAttributeNS(so, t.slice(6, t.length))
            : e.setAttributeNS(so, t, n);
    else {
        const i = vf(t);
        n == null || (i && !Fl(n))
            ? e.removeAttribute(t)
            : e.setAttribute(t, i ? '' : n);
    }
}
function _m(e, t, n, r, a, i, s) {
    if (t === 'innerHTML' || t === 'textContent') {
        r && s(r, a, i), (e[t] = n == null ? '' : n);
        return;
    }
    if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
        e._value = n;
        const l = n == null ? '' : n;
        (e.value !== l || e.tagName === 'OPTION') && (e.value = l),
            n == null && e.removeAttribute(t);
        return;
    }
    let o = !1;
    if (n === '' || n == null) {
        const l = typeof e[t];
        l === 'boolean'
            ? (n = Fl(n))
            : n == null && l === 'string'
            ? ((n = ''), (o = !0))
            : l === 'number' && ((n = 0), (o = !0));
    }
    try {
        e[t] = n;
    } catch {}
    o && e.removeAttribute(t);
}
const [Hc, bm] = (() => {
    let e = Date.now,
        t = !1;
    if (typeof window != 'undefined') {
        Date.now() > document.createEvent('Event').timeStamp &&
            (e = () => performance.now());
        const n = navigator.userAgent.match(/firefox\/(\d+)/i);
        t = !!(n && Number(n[1]) <= 53);
    }
    return [e, t];
})();
let fi = 0;
const ym = Promise.resolve(),
    Em = () => {
        fi = 0;
    },
    Tm = () => fi || (ym.then(Em), (fi = Hc()));
function Im(e, t, n, r) {
    e.addEventListener(t, n, r);
}
function Cm(e, t, n, r) {
    e.removeEventListener(t, n, r);
}
function Nm(e, t, n, r, a = null) {
    const i = e._vei || (e._vei = {}),
        s = i[t];
    if (r && s) s.value = r;
    else {
        const [o, l] = Am(t);
        if (r) {
            const c = (i[t] = Om(r, a));
            Im(e, o, c, l);
        } else s && (Cm(e, o, s, l), (i[t] = void 0));
    }
}
const oo = /(?:Once|Passive|Capture)$/;
function Am(e) {
    let t;
    if (oo.test(e)) {
        t = {};
        let n;
        for (; (n = e.match(oo)); )
            (e = e.slice(0, e.length - n[0].length)),
                (t[n[0].toLowerCase()] = !0);
    }
    return [Un(e.slice(2)), t];
}
function Om(e, t) {
    const n = (r) => {
        const a = r.timeStamp || Hc();
        (bm || a >= n.attached - 1) && tt(wm(r, n.value), t, 5, [r]);
    };
    return (n.value = e), (n.attached = Tm()), n;
}
function wm(e, t) {
    if (q(t)) {
        const n = e.stopImmediatePropagation;
        return (
            (e.stopImmediatePropagation = () => {
                n.call(e), (e._stopped = !0);
            }),
            t.map((r) => (a) => !a._stopped && r && r(a))
        );
    } else return t;
}
const lo = /^on[a-z]/,
    Sm = (e, t, n, r, a = !1, i, s, o, l) => {
        t === 'class'
            ? pm(e, r, a)
            : t === 'style'
            ? hm(e, n, r)
            : oa(t)
            ? Hi(t) || Nm(e, t, n, r, s)
            : (
                  t[0] === '.'
                      ? ((t = t.slice(1)), !0)
                      : t[0] === '^'
                      ? ((t = t.slice(1)), !1)
                      : km(e, t, r, a)
              )
            ? _m(e, t, r, i, s, o, l)
            : (t === 'true-value'
                  ? (e._trueValue = r)
                  : t === 'false-value' && (e._falseValue = r),
              vm(e, t, r, a));
    };
function km(e, t, n, r) {
    return r
        ? !!(
              t === 'innerHTML' ||
              t === 'textContent' ||
              (t in e && lo.test(t) && Z(n))
          )
        : t === 'spellcheck' ||
          t === 'draggable' ||
          t === 'translate' ||
          t === 'form' ||
          (t === 'list' && e.tagName === 'INPUT') ||
          (t === 'type' && e.tagName === 'TEXTAREA') ||
          (lo.test(t) && we(n))
        ? !1
        : t in e;
}
const kt = 'transition',
    zn = 'animation',
    Ir = (e, { slots: t }) => mn(Ec, jc(e), t);
Ir.displayName = 'Transition';
const Wc = {
        name: String,
        type: String,
        css: { type: Boolean, default: !0 },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    Lm = (Ir.props = De({}, Ec.props, Wc)),
    Jt = (e, t = []) => {
        q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
    },
    co = (e) => (e ? (q(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function jc(e) {
    const t = {};
    for (const j in e) j in Wc || (t[j] = e[j]);
    if (e.css === !1) return t;
    const {
            name: n = 'v',
            type: r,
            duration: a,
            enterFromClass: i = `${n}-enter-from`,
            enterActiveClass: s = `${n}-enter-active`,
            enterToClass: o = `${n}-enter-to`,
            appearFromClass: l = i,
            appearActiveClass: c = s,
            appearToClass: u = o,
            leaveFromClass: m = `${n}-leave-from`,
            leaveActiveClass: p = `${n}-leave-active`,
            leaveToClass: _ = `${n}-leave-to`
        } = e,
        N = Rm(a),
        O = N && N[0],
        A = N && N[1],
        {
            onBeforeEnter: h,
            onEnter: g,
            onEnterCancelled: I,
            onLeave: T,
            onLeaveCancelled: C,
            onBeforeAppear: P = h,
            onAppear: R = g,
            onAppearCancelled: K = I
        } = t,
        Y = (j, ce, Ne) => {
            en(j, ce ? u : o), en(j, ce ? c : s), Ne && Ne();
        },
        te = (j, ce) => {
            en(j, _), en(j, p), ce && ce();
        },
        J = (j) => (ce, Ne) => {
            const We = j ? R : g,
                ie = () => Y(ce, j, Ne);
            Jt(We, [ce, ie]),
                uo(() => {
                    en(ce, j ? l : i),
                        yt(ce, j ? u : o),
                        co(We) || fo(ce, r, O, ie);
                });
        };
    return De(t, {
        onBeforeEnter(j) {
            Jt(h, [j]), yt(j, i), yt(j, s);
        },
        onBeforeAppear(j) {
            Jt(P, [j]), yt(j, l), yt(j, c);
        },
        onEnter: J(!1),
        onAppear: J(!0),
        onLeave(j, ce) {
            const Ne = () => te(j, ce);
            yt(j, m),
                Vc(),
                yt(j, p),
                uo(() => {
                    en(j, m), yt(j, _), co(T) || fo(j, r, A, Ne);
                }),
                Jt(T, [j, Ne]);
        },
        onEnterCancelled(j) {
            Y(j, !1), Jt(I, [j]);
        },
        onAppearCancelled(j) {
            Y(j, !0), Jt(K, [j]);
        },
        onLeaveCancelled(j) {
            te(j), Jt(C, [j]);
        }
    });
}
function Rm(e) {
    if (e == null) return null;
    if (Se(e)) return [ja(e.enter), ja(e.leave)];
    {
        const t = ja(e);
        return [t, t];
    }
}
function ja(e) {
    return Gl(e);
}
function yt(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
        (e._vtc || (e._vtc = new Set())).add(t);
}
function en(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const { _vtc: n } = e;
    n && (n.delete(t), n.size || (e._vtc = void 0));
}
function uo(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e);
    });
}
let Pm = 0;
function fo(e, t, n, r) {
    const a = (e._endId = ++Pm),
        i = () => {
            a === e._endId && r();
        };
    if (n) return setTimeout(i, n);
    const { type: s, timeout: o, propCount: l } = Gc(e, t);
    if (!s) return r();
    const c = s + 'end';
    let u = 0;
    const m = () => {
            e.removeEventListener(c, p), i();
        },
        p = (_) => {
            _.target === e && ++u >= l && m();
        };
    setTimeout(() => {
        u < l && m();
    }, o + 1),
        e.addEventListener(c, p);
}
function Gc(e, t) {
    const n = window.getComputedStyle(e),
        r = (N) => (n[N] || '').split(', '),
        a = r(kt + 'Delay'),
        i = r(kt + 'Duration'),
        s = mo(a, i),
        o = r(zn + 'Delay'),
        l = r(zn + 'Duration'),
        c = mo(o, l);
    let u = null,
        m = 0,
        p = 0;
    t === kt
        ? s > 0 && ((u = kt), (m = s), (p = i.length))
        : t === zn
        ? c > 0 && ((u = zn), (m = c), (p = l.length))
        : ((m = Math.max(s, c)),
          (u = m > 0 ? (s > c ? kt : zn) : null),
          (p = u ? (u === kt ? i.length : l.length) : 0));
    const _ = u === kt && /\b(transform|all)(,|$)/.test(n[kt + 'Property']);
    return { type: u, timeout: m, propCount: p, hasTransform: _ };
}
function mo(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => po(n) + po(e[r])));
}
function po(e) {
    return Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Vc() {
    return document.body.offsetHeight;
}
const Bc = new WeakMap(),
    Yc = new WeakMap(),
    xm = {
        name: 'TransitionGroup',
        props: De({}, Lm, { tag: String, moveClass: String }),
        setup(e, { slots: t }) {
            const n = Gt(),
                r = yc();
            let a, i;
            return (
                es(() => {
                    if (!a.length) return;
                    const s = e.moveClass || `${e.name || 'v'}-move`;
                    if (!Um(a[0].el, n.vnode.el, s)) return;
                    a.forEach(Dm), a.forEach(Fm);
                    const o = a.filter($m);
                    Vc(),
                        o.forEach((l) => {
                            const c = l.el,
                                u = c.style;
                            yt(c, s),
                                (u.transform =
                                    u.webkitTransform =
                                    u.transitionDuration =
                                        '');
                            const m = (c._moveCb = (p) => {
                                (p && p.target !== c) ||
                                    ((!p ||
                                        /transform$/.test(p.propertyName)) &&
                                        (c.removeEventListener(
                                            'transitionend',
                                            m
                                        ),
                                        (c._moveCb = null),
                                        en(c, s)));
                            });
                            c.addEventListener('transitionend', m);
                        });
                }),
                () => {
                    const s = fe(e),
                        o = jc(s);
                    let l = s.tag || Ae;
                    (a = i), (i = t.default ? Zi(t.default()) : []);
                    for (let c = 0; c < i.length; c++) {
                        const u = i[c];
                        u.key != null && Ln(u, br(u, o, r, n));
                    }
                    if (a)
                        for (let c = 0; c < a.length; c++) {
                            const u = a[c];
                            Ln(u, br(u, o, r, n)),
                                Bc.set(u, u.el.getBoundingClientRect());
                        }
                    return Ee(l, null, i);
                }
            );
        }
    },
    Mm = xm;
function Dm(e) {
    const t = e.el;
    t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function Fm(e) {
    Yc.set(e, e.el.getBoundingClientRect());
}
function $m(e) {
    const t = Bc.get(e),
        n = Yc.get(e),
        r = t.left - n.left,
        a = t.top - n.top;
    if (r || a) {
        const i = e.el.style;
        return (
            (i.transform = i.webkitTransform = `translate(${r}px,${a}px)`),
            (i.transitionDuration = '0s'),
            e
        );
    }
}
function Um(e, t, n) {
    const r = e.cloneNode();
    e._vtc &&
        e._vtc.forEach((s) => {
            s.split(/\s+/).forEach((o) => o && r.classList.remove(o));
        }),
        n.split(/\s+/).forEach((s) => s && r.classList.add(s)),
        (r.style.display = 'none');
    const a = t.nodeType === 1 ? t : t.parentNode;
    a.appendChild(r);
    const { hasTransform: i } = Gc(r);
    return a.removeChild(r), i;
}
const Hm = ['ctrl', 'shift', 'alt', 'meta'],
    Wm = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => 'button' in e && e.button !== 0,
        middle: (e) => 'button' in e && e.button !== 1,
        right: (e) => 'button' in e && e.button !== 2,
        exact: (e, t) => Hm.some((n) => e[`${n}Key`] && !t.includes(n))
    },
    jm =
        (e, t) =>
        (n, ...r) => {
            for (let a = 0; a < t.length; a++) {
                const i = Wm[t[a]];
                if (i && i(n, t)) return;
            }
            return e(n, ...r);
        },
    Gm = {
        beforeMount(e, { value: t }, { transition: n }) {
            (e._vod = e.style.display === 'none' ? '' : e.style.display),
                n && t ? n.beforeEnter(e) : Xn(e, t);
        },
        mounted(e, { value: t }, { transition: n }) {
            n && t && n.enter(e);
        },
        updated(e, { value: t, oldValue: n }, { transition: r }) {
            !t != !n &&
                (r
                    ? t
                        ? (r.beforeEnter(e), Xn(e, !0), r.enter(e))
                        : r.leave(e, () => {
                              Xn(e, !1);
                          })
                    : Xn(e, t));
        },
        beforeUnmount(e, { value: t }) {
            Xn(e, t);
        }
    };
function Xn(e, t) {
    e.style.display = t ? e._vod : 'none';
}
const Vm = De({ patchProp: Sm }, mm);
let ho;
function Bm() {
    return ho || (ho = Bd(Vm));
}
const Kc = (...e) => {
    const t = Bm().createApp(...e),
        { mount: n } = t;
    return (
        (t.mount = (r) => {
            const a = Ym(r);
            if (!a) return;
            const i = t._component;
            !Z(i) && !i.render && !i.template && (i.template = a.innerHTML),
                (a.innerHTML = '');
            const s = n(a, !1, a instanceof SVGElement);
            return (
                a instanceof Element &&
                    (a.removeAttribute('v-cloak'),
                    a.setAttribute('data-v-app', '')),
                s
            );
        }),
        t
    );
};
function Ym(e) {
    return we(e) ? document.querySelector(e) : e;
}
function Km() {
    return zc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function zc() {
    return typeof navigator != 'undefined' && typeof window != 'undefined'
        ? window
        : typeof global != 'undefined'
        ? global
        : {};
}
const zm = typeof Proxy == 'function',
    Xm = 'devtools-plugin:setup',
    qm = 'plugin:settings:set';
let vn, di;
function Qm() {
    var e;
    return (
        vn !== void 0 ||
            (typeof window != 'undefined' && window.performance
                ? ((vn = !0), (di = window.performance))
                : typeof global != 'undefined' &&
                  ((e = global.perf_hooks) === null || e === void 0
                      ? void 0
                      : e.performance)
                ? ((vn = !0), (di = global.perf_hooks.performance))
                : (vn = !1)),
        vn
    );
}
function Jm() {
    return Qm() ? di.now() : Date.now();
}
class Zm {
    constructor(t, n) {
        (this.target = null),
            (this.targetQueue = []),
            (this.onQueue = []),
            (this.plugin = t),
            (this.hook = n);
        const r = {};
        if (t.settings)
            for (const s in t.settings) {
                const o = t.settings[s];
                r[s] = o.defaultValue;
            }
        const a = `__vue-devtools-plugin-settings__${t.id}`;
        let i = Object.assign({}, r);
        try {
            const s = localStorage.getItem(a),
                o = JSON.parse(s);
            Object.assign(i, o);
        } catch {}
        (this.fallbacks = {
            getSettings() {
                return i;
            },
            setSettings(s) {
                try {
                    localStorage.setItem(a, JSON.stringify(s));
                } catch {}
                i = s;
            },
            now() {
                return Jm();
            }
        }),
            n &&
                n.on(qm, (s, o) => {
                    s === this.plugin.id && this.fallbacks.setSettings(o);
                }),
            (this.proxiedOn = new Proxy(
                {},
                {
                    get: (s, o) =>
                        this.target
                            ? this.target.on[o]
                            : (...l) => {
                                  this.onQueue.push({ method: o, args: l });
                              }
                }
            )),
            (this.proxiedTarget = new Proxy(
                {},
                {
                    get: (s, o) =>
                        this.target
                            ? this.target[o]
                            : o === 'on'
                            ? this.proxiedOn
                            : Object.keys(this.fallbacks).includes(o)
                            ? (...l) => (
                                  this.targetQueue.push({
                                      method: o,
                                      args: l,
                                      resolve: () => {}
                                  }),
                                  this.fallbacks[o](...l)
                              )
                            : (...l) =>
                                  new Promise((c) => {
                                      this.targetQueue.push({
                                          method: o,
                                          args: l,
                                          resolve: c
                                      });
                                  })
                }
            ));
    }
    async setRealTarget(t) {
        this.target = t;
        for (const n of this.onQueue) this.target.on[n.method](...n.args);
        for (const n of this.targetQueue)
            n.resolve(await this.target[n.method](...n.args));
    }
}
function ep(e, t) {
    const n = e,
        r = zc(),
        a = Km(),
        i = zm && n.enableEarlyProxy;
    if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i)) a.emit(Xm, e, t);
    else {
        const s = i ? new Zm(n, a) : null;
        (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
            pluginDescriptor: n,
            setupFn: t,
            proxy: s
        }),
            s && t(s.proxiedTarget);
    }
}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */ var Xc = 'store';
function tp(e) {
    return e === void 0 && (e = null), nt(e !== null ? e : Xc);
}
function Gn(e, t) {
    Object.keys(e).forEach(function (n) {
        return t(e[n], n);
    });
}
function np(e) {
    return e !== null && typeof e == 'object';
}
function rp(e) {
    return e && typeof e.then == 'function';
}
function ap(e, t) {
    return function () {
        return e(t);
    };
}
function qc(e, t, n) {
    return (
        t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
        function () {
            var r = t.indexOf(e);
            r > -1 && t.splice(r, 1);
        }
    );
}
function Qc(e, t) {
    (e._actions = Object.create(null)),
        (e._mutations = Object.create(null)),
        (e._wrappedGetters = Object.create(null)),
        (e._modulesNamespaceMap = Object.create(null));
    var n = e.state;
    Ta(e, n, [], e._modules.root, !0), ss(e, n, t);
}
function ss(e, t, n) {
    var r = e._state;
    (e.getters = {}), (e._makeLocalGettersCache = Object.create(null));
    var a = e._wrappedGetters,
        i = {};
    Gn(a, function (s, o) {
        (i[o] = ap(s, e)),
            Object.defineProperty(e.getters, o, {
                get: function () {
                    return i[o]();
                },
                enumerable: !0
            });
    }),
        (e._state = dn({ data: t })),
        e.strict && cp(e),
        r &&
            n &&
            e._withCommit(function () {
                r.data = null;
            });
}
function Ta(e, t, n, r, a) {
    var i = !n.length,
        s = e._modules.getNamespace(n);
    if (
        (r.namespaced &&
            (e._modulesNamespaceMap[s], (e._modulesNamespaceMap[s] = r)),
        !i && !a)
    ) {
        var o = os(t, n.slice(0, -1)),
            l = n[n.length - 1];
        e._withCommit(function () {
            o[l] = r.state;
        });
    }
    var c = (r.context = ip(e, s, n));
    r.forEachMutation(function (u, m) {
        var p = s + m;
        sp(e, p, u, c);
    }),
        r.forEachAction(function (u, m) {
            var p = u.root ? m : s + m,
                _ = u.handler || u;
            op(e, p, _, c);
        }),
        r.forEachGetter(function (u, m) {
            var p = s + m;
            lp(e, p, u, c);
        }),
        r.forEachChild(function (u, m) {
            Ta(e, t, n.concat(m), u, a);
        });
}
function ip(e, t, n) {
    var r = t === '',
        a = {
            dispatch: r
                ? e.dispatch
                : function (i, s, o) {
                      var l = ea(i, s, o),
                          c = l.payload,
                          u = l.options,
                          m = l.type;
                      return (!u || !u.root) && (m = t + m), e.dispatch(m, c);
                  },
            commit: r
                ? e.commit
                : function (i, s, o) {
                      var l = ea(i, s, o),
                          c = l.payload,
                          u = l.options,
                          m = l.type;
                      (!u || !u.root) && (m = t + m), e.commit(m, c, u);
                  }
        };
    return (
        Object.defineProperties(a, {
            getters: {
                get: r
                    ? function () {
                          return e.getters;
                      }
                    : function () {
                          return Jc(e, t);
                      }
            },
            state: {
                get: function () {
                    return os(e.state, n);
                }
            }
        }),
        a
    );
}
function Jc(e, t) {
    if (!e._makeLocalGettersCache[t]) {
        var n = {},
            r = t.length;
        Object.keys(e.getters).forEach(function (a) {
            if (a.slice(0, r) === t) {
                var i = a.slice(r);
                Object.defineProperty(n, i, {
                    get: function () {
                        return e.getters[a];
                    },
                    enumerable: !0
                });
            }
        }),
            (e._makeLocalGettersCache[t] = n);
    }
    return e._makeLocalGettersCache[t];
}
function sp(e, t, n, r) {
    var a = e._mutations[t] || (e._mutations[t] = []);
    a.push(function (s) {
        n.call(e, r.state, s);
    });
}
function op(e, t, n, r) {
    var a = e._actions[t] || (e._actions[t] = []);
    a.push(function (s) {
        var o = n.call(
            e,
            {
                dispatch: r.dispatch,
                commit: r.commit,
                getters: r.getters,
                state: r.state,
                rootGetters: e.getters,
                rootState: e.state
            },
            s
        );
        return (
            rp(o) || (o = Promise.resolve(o)),
            e._devtoolHook
                ? o.catch(function (l) {
                      throw (e._devtoolHook.emit('vuex:error', l), l);
                  })
                : o
        );
    });
}
function lp(e, t, n, r) {
    e._wrappedGetters[t] ||
        (e._wrappedGetters[t] = function (i) {
            return n(r.state, r.getters, i.state, i.getters);
        });
}
function cp(e) {
    ct(
        function () {
            return e._state.data;
        },
        function () {},
        { deep: !0, flush: 'sync' }
    );
}
function os(e, t) {
    return t.reduce(function (n, r) {
        return n[r];
    }, e);
}
function ea(e, t, n) {
    return (
        np(e) && e.type && ((n = t), (t = e), (e = e.type)),
        { type: e, payload: t, options: n }
    );
}
var up = 'vuex bindings',
    go = 'vuex:mutations',
    Ga = 'vuex:actions',
    _n = 'vuex',
    fp = 0;
function dp(e, t) {
    ep(
        {
            id: 'org.vuejs.vuex',
            app: e,
            label: 'Vuex',
            homepage: 'https://next.vuex.vuejs.org/',
            logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
            packageName: 'vuex',
            componentStateTypes: [up]
        },
        function (n) {
            n.addTimelineLayer({ id: go, label: 'Vuex Mutations', color: vo }),
                n.addTimelineLayer({
                    id: Ga,
                    label: 'Vuex Actions',
                    color: vo
                }),
                n.addInspector({
                    id: _n,
                    label: 'Vuex',
                    icon: 'storage',
                    treeFilterPlaceholder: 'Filter stores...'
                }),
                n.on.getInspectorTree(function (r) {
                    if (r.app === e && r.inspectorId === _n)
                        if (r.filter) {
                            var a = [];
                            nu(a, t._modules.root, r.filter, ''),
                                (r.rootNodes = a);
                        } else r.rootNodes = [tu(t._modules.root, '')];
                }),
                n.on.getInspectorState(function (r) {
                    if (r.app === e && r.inspectorId === _n) {
                        var a = r.nodeId;
                        Jc(t, a),
                            (r.state = hp(
                                vp(t._modules, a),
                                a === 'root'
                                    ? t.getters
                                    : t._makeLocalGettersCache,
                                a
                            ));
                    }
                }),
                n.on.editInspectorState(function (r) {
                    if (r.app === e && r.inspectorId === _n) {
                        var a = r.nodeId,
                            i = r.path;
                        a !== 'root' &&
                            (i = a.split('/').filter(Boolean).concat(i)),
                            t._withCommit(function () {
                                r.set(t._state.data, i, r.state.value);
                            });
                    }
                }),
                t.subscribe(function (r, a) {
                    var i = {};
                    r.payload && (i.payload = r.payload),
                        (i.state = a),
                        n.notifyComponentUpdate(),
                        n.sendInspectorTree(_n),
                        n.sendInspectorState(_n),
                        n.addTimelineEvent({
                            layerId: go,
                            event: { time: Date.now(), title: r.type, data: i }
                        });
                }),
                t.subscribeAction({
                    before: function (r, a) {
                        var i = {};
                        r.payload && (i.payload = r.payload),
                            (r._id = fp++),
                            (r._time = Date.now()),
                            (i.state = a),
                            n.addTimelineEvent({
                                layerId: Ga,
                                event: {
                                    time: r._time,
                                    title: r.type,
                                    groupId: r._id,
                                    subtitle: 'start',
                                    data: i
                                }
                            });
                    },
                    after: function (r, a) {
                        var i = {},
                            s = Date.now() - r._time;
                        (i.duration = {
                            _custom: {
                                type: 'duration',
                                display: s + 'ms',
                                tooltip: 'Action duration',
                                value: s
                            }
                        }),
                            r.payload && (i.payload = r.payload),
                            (i.state = a),
                            n.addTimelineEvent({
                                layerId: Ga,
                                event: {
                                    time: Date.now(),
                                    title: r.type,
                                    groupId: r._id,
                                    subtitle: 'end',
                                    data: i
                                }
                            });
                    }
                });
        }
    );
}
var vo = 8702998,
    mp = 6710886,
    pp = 16777215,
    Zc = { label: 'namespaced', textColor: pp, backgroundColor: mp };
function eu(e) {
    return e && e !== 'root' ? e.split('/').slice(-2, -1)[0] : 'Root';
}
function tu(e, t) {
    return {
        id: t || 'root',
        label: eu(t),
        tags: e.namespaced ? [Zc] : [],
        children: Object.keys(e._children).map(function (n) {
            return tu(e._children[n], t + n + '/');
        })
    };
}
function nu(e, t, n, r) {
    r.includes(n) &&
        e.push({
            id: r || 'root',
            label: r.endsWith('/') ? r.slice(0, r.length - 1) : r || 'Root',
            tags: t.namespaced ? [Zc] : []
        }),
        Object.keys(t._children).forEach(function (a) {
            nu(e, t._children[a], n, r + a + '/');
        });
}
function hp(e, t, n) {
    t = n === 'root' ? t : t[n];
    var r = Object.keys(t),
        a = {
            state: Object.keys(e.state).map(function (s) {
                return { key: s, editable: !0, value: e.state[s] };
            })
        };
    if (r.length) {
        var i = gp(t);
        a.getters = Object.keys(i).map(function (s) {
            return {
                key: s.endsWith('/') ? eu(s) : s,
                editable: !1,
                value: mi(function () {
                    return i[s];
                })
            };
        });
    }
    return a;
}
function gp(e) {
    var t = {};
    return (
        Object.keys(e).forEach(function (n) {
            var r = n.split('/');
            if (r.length > 1) {
                var a = t,
                    i = r.pop();
                r.forEach(function (s) {
                    a[s] ||
                        (a[s] = {
                            _custom: {
                                value: {},
                                display: s,
                                tooltip: 'Module',
                                abstract: !0
                            }
                        }),
                        (a = a[s]._custom.value);
                }),
                    (a[i] = mi(function () {
                        return e[n];
                    }));
            } else
                t[n] = mi(function () {
                    return e[n];
                });
        }),
        t
    );
}
function vp(e, t) {
    var n = t.split('/').filter(function (r) {
        return r;
    });
    return n.reduce(
        function (r, a, i) {
            var s = r[a];
            if (!s)
                throw new Error(
                    'Missing module "' + a + '" for path "' + t + '".'
                );
            return i === n.length - 1 ? s : s._children;
        },
        t === 'root' ? e : e.root._children
    );
}
function mi(e) {
    try {
        return e();
    } catch (t) {
        return t;
    }
}
var ut = function (t, n) {
        (this.runtime = n),
            (this._children = Object.create(null)),
            (this._rawModule = t);
        var r = t.state;
        this.state = (typeof r == 'function' ? r() : r) || {};
    },
    ru = { namespaced: { configurable: !0 } };
ru.namespaced.get = function () {
    return !!this._rawModule.namespaced;
};
ut.prototype.addChild = function (t, n) {
    this._children[t] = n;
};
ut.prototype.removeChild = function (t) {
    delete this._children[t];
};
ut.prototype.getChild = function (t) {
    return this._children[t];
};
ut.prototype.hasChild = function (t) {
    return t in this._children;
};
ut.prototype.update = function (t) {
    (this._rawModule.namespaced = t.namespaced),
        t.actions && (this._rawModule.actions = t.actions),
        t.mutations && (this._rawModule.mutations = t.mutations),
        t.getters && (this._rawModule.getters = t.getters);
};
ut.prototype.forEachChild = function (t) {
    Gn(this._children, t);
};
ut.prototype.forEachGetter = function (t) {
    this._rawModule.getters && Gn(this._rawModule.getters, t);
};
ut.prototype.forEachAction = function (t) {
    this._rawModule.actions && Gn(this._rawModule.actions, t);
};
ut.prototype.forEachMutation = function (t) {
    this._rawModule.mutations && Gn(this._rawModule.mutations, t);
};
Object.defineProperties(ut.prototype, ru);
var pn = function (t) {
    this.register([], t, !1);
};
pn.prototype.get = function (t) {
    return t.reduce(function (n, r) {
        return n.getChild(r);
    }, this.root);
};
pn.prototype.getNamespace = function (t) {
    var n = this.root;
    return t.reduce(function (r, a) {
        return (n = n.getChild(a)), r + (n.namespaced ? a + '/' : '');
    }, '');
};
pn.prototype.update = function (t) {
    au([], this.root, t);
};
pn.prototype.register = function (t, n, r) {
    var a = this;
    r === void 0 && (r = !0);
    var i = new ut(n, r);
    if (t.length === 0) this.root = i;
    else {
        var s = this.get(t.slice(0, -1));
        s.addChild(t[t.length - 1], i);
    }
    n.modules &&
        Gn(n.modules, function (o, l) {
            a.register(t.concat(l), o, r);
        });
};
pn.prototype.unregister = function (t) {
    var n = this.get(t.slice(0, -1)),
        r = t[t.length - 1],
        a = n.getChild(r);
    !a || !a.runtime || n.removeChild(r);
};
pn.prototype.isRegistered = function (t) {
    var n = this.get(t.slice(0, -1)),
        r = t[t.length - 1];
    return n ? n.hasChild(r) : !1;
};
function au(e, t, n) {
    if ((t.update(n), n.modules))
        for (var r in n.modules) {
            if (!t.getChild(r)) return;
            au(e.concat(r), t.getChild(r), n.modules[r]);
        }
}
function _p(e) {
    return new Ke(e);
}
var Ke = function (t) {
        var n = this;
        t === void 0 && (t = {});
        var r = t.plugins;
        r === void 0 && (r = []);
        var a = t.strict;
        a === void 0 && (a = !1);
        var i = t.devtools;
        (this._committing = !1),
            (this._actions = Object.create(null)),
            (this._actionSubscribers = []),
            (this._mutations = Object.create(null)),
            (this._wrappedGetters = Object.create(null)),
            (this._modules = new pn(t)),
            (this._modulesNamespaceMap = Object.create(null)),
            (this._subscribers = []),
            (this._makeLocalGettersCache = Object.create(null)),
            (this._devtools = i);
        var s = this,
            o = this,
            l = o.dispatch,
            c = o.commit;
        (this.dispatch = function (p, _) {
            return l.call(s, p, _);
        }),
            (this.commit = function (p, _, N) {
                return c.call(s, p, _, N);
            }),
            (this.strict = a);
        var u = this._modules.root.state;
        Ta(this, u, [], this._modules.root),
            ss(this, u),
            r.forEach(function (m) {
                return m(n);
            });
    },
    ls = { state: { configurable: !0 } };
Ke.prototype.install = function (t, n) {
    t.provide(n || Xc, this), (t.config.globalProperties.$store = this);
    var r = this._devtools !== void 0 ? this._devtools : !1;
    r && dp(t, this);
};
ls.state.get = function () {
    return this._state.data;
};
ls.state.set = function (e) {};
Ke.prototype.commit = function (t, n, r) {
    var a = this,
        i = ea(t, n, r),
        s = i.type,
        o = i.payload,
        l = { type: s, payload: o },
        c = this._mutations[s];
    !c ||
        (this._withCommit(function () {
            c.forEach(function (m) {
                m(o);
            });
        }),
        this._subscribers.slice().forEach(function (u) {
            return u(l, a.state);
        }));
};
Ke.prototype.dispatch = function (t, n) {
    var r = this,
        a = ea(t, n),
        i = a.type,
        s = a.payload,
        o = { type: i, payload: s },
        l = this._actions[i];
    if (!!l) {
        try {
            this._actionSubscribers
                .slice()
                .filter(function (u) {
                    return u.before;
                })
                .forEach(function (u) {
                    return u.before(o, r.state);
                });
        } catch {}
        var c =
            l.length > 1
                ? Promise.all(
                      l.map(function (u) {
                          return u(s);
                      })
                  )
                : l[0](s);
        return new Promise(function (u, m) {
            c.then(
                function (p) {
                    try {
                        r._actionSubscribers
                            .filter(function (_) {
                                return _.after;
                            })
                            .forEach(function (_) {
                                return _.after(o, r.state);
                            });
                    } catch {}
                    u(p);
                },
                function (p) {
                    try {
                        r._actionSubscribers
                            .filter(function (_) {
                                return _.error;
                            })
                            .forEach(function (_) {
                                return _.error(o, r.state, p);
                            });
                    } catch {}
                    m(p);
                }
            );
        });
    }
};
Ke.prototype.subscribe = function (t, n) {
    return qc(t, this._subscribers, n);
};
Ke.prototype.subscribeAction = function (t, n) {
    var r = typeof t == 'function' ? { before: t } : t;
    return qc(r, this._actionSubscribers, n);
};
Ke.prototype.watch = function (t, n, r) {
    var a = this;
    return ct(
        function () {
            return t(a.state, a.getters);
        },
        n,
        Object.assign({}, r)
    );
};
Ke.prototype.replaceState = function (t) {
    var n = this;
    this._withCommit(function () {
        n._state.data = t;
    });
};
Ke.prototype.registerModule = function (t, n, r) {
    r === void 0 && (r = {}),
        typeof t == 'string' && (t = [t]),
        this._modules.register(t, n),
        Ta(this, this.state, t, this._modules.get(t), r.preserveState),
        ss(this, this.state);
};
Ke.prototype.unregisterModule = function (t) {
    var n = this;
    typeof t == 'string' && (t = [t]),
        this._modules.unregister(t),
        this._withCommit(function () {
            var r = os(n.state, t.slice(0, -1));
            delete r[t[t.length - 1]];
        }),
        Qc(this);
};
Ke.prototype.hasModule = function (t) {
    return typeof t == 'string' && (t = [t]), this._modules.isRegistered(t);
};
Ke.prototype.hotUpdate = function (t) {
    this._modules.update(t), Qc(this, !0);
};
Ke.prototype._withCommit = function (t) {
    var n = this._committing;
    (this._committing = !0), t(), (this._committing = n);
};
Object.defineProperties(Ke.prototype, ls);
const bp = {
        isSidebarShow: !1,
        isMobile: !1,
        isNavShow: !0,
        scrollTopList: []
    },
    yp = {},
    Ep = {
        setIsSidebarShow: (e, t) => (e.isSidebarShow = t),
        setIsMobile: (e, t) => (e.isMobile = t),
        setIsNavShow: (e, t) => (e.isNavShow = t),
        setScrollTopList: (e, t) => {
            e.scrollTopList.push(t);
        }
    },
    Tp = { setIsSidebarShow: (e, t) => e.commit('setIsSidebarShow', t) };
var hn = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, a] of t) n[r] = a;
    return n;
};
const Ip = at({
        props: {
            alerts: { type: Array, required: !0 },
            destroyAlerts: { type: Function, required: !0 }
        },
        setup(e) {
            const { alerts: t } = ad(e),
                n = e.destroyAlerts,
                r = Ce(0);
            function a(o) {
                switch (o) {
                    case 'success':
                        return '#f0f9eb';
                    case 'warning':
                        return '#fdf6ec';
                    case 'error':
                        return '#fef0f0';
                }
            }
            function i(o) {
                switch (o) {
                    case 'success':
                        return '#67c23a';
                    case 'warning':
                        return '#e6a23c';
                    case 'error':
                        return '#f56c6c';
                }
            }
            function s(o) {
                const l = t.value.findIndex((c) => c.id === o);
                t.value.splice(l, 1),
                    t.value.length === 0 &&
                        (n(), window.clearInterval(r.value));
            }
            return (
                (r.value = window.setInterval(() => {
                    s(t.value[0].id);
                }, 2500)),
                {
                    alerts: t,
                    backgroundConversion: a,
                    colorConversion: i,
                    close: s
                }
            );
        }
    }),
    Cp = { class: 'alert_container' },
    Np = ['onClick'],
    Ap = { class: 'message' },
    Op = { key: 0, class: 'description' };
function wp(e, t, n, r, a, i) {
    return (
        ye(),
        Be('div', Cp, [
            (ye(!0),
            Be(
                Ae,
                null,
                ya(
                    e.alerts,
                    (s) => (
                        ye(),
                        Be(
                            'div',
                            {
                                class: 'alert',
                                key: s.id,
                                style: Or({
                                    background: e.backgroundConversion(s.type),
                                    color: e.colorConversion(s.type)
                                }),
                                onClick: (o) => e.close(s.id)
                            },
                            [
                                Wt('span', Ap, Kr(s.message), 1),
                                s.description
                                    ? (ye(), Be('p', Op, Kr(s.description), 1))
                                    : Pn('', !0)
                            ],
                            12,
                            Np
                        )
                    )
                ),
                128
            ))
        ])
    );
}
var Sp = hn(Ip, [
    ['render', wp],
    ['__scopeId', 'data-v-0a472c8d']
]);
class kp {
    constructor() {
        xa(this, 'alerts');
        xa(this, 'app');
        (this.alerts = Ce([])), (this.app = null);
    }
    success(t, n) {
        this.create('success', t, n);
    }
    error(t, n) {
        this.create('error', t, n);
    }
    warning(t, n) {
        this.create('warning', t, n);
    }
    create(t, n, r) {
        const i = {
            id: new Date().getTime(),
            message: n,
            description: r,
            type: t
        };
        if ((this.alerts.value.push(i), this.alerts.value.length === 1)) {
            const s = document.createElement('div'),
                o = this.destroyAlerts.bind(this);
            (this.app = Kc(Sp, {
                alerts: this.alerts.value,
                destroyAlerts: o
            })),
                (s.id = 'alertElement'),
                document.body.appendChild(s),
                this.app.mount(s);
        }
    }
    destroyAlerts() {
        const t = document.body.querySelector('#alertElement');
        this.app.unmount(), document.body.removeChild(t);
    }
}
var _o = new kp();
const Lp = 'https://jsonplaceholder.typicode.com',
    Rp = { headers: { contentType: 'application/json' } };
class Pp {
    get(t, n, r) {
        return this.requestHandle('GET', t, n, r);
    }
    post(t, n, r) {
        return this.requestHandle('POST', t, n, r);
    }
    async requestHandle(t, n, r, a = Rp) {
        if (t === 'GET') {
            if (r) {
                const i = Object.keys(r);
                (n += '?'),
                    i.forEach((s, o) => {
                        const l = o === i.length - 1 ? '' : '&';
                        n += `${s}=${r[s]}${l}`;
                    });
            }
        } else a.body = JSON.stringify(r);
        try {
            const i = Lp + n;
            return await (await fetch(i, a)).json();
        } catch (i) {
            const { status: s } = i;
            switch (s) {
                case 401:
                    _o.error('\u6B0A\u9650\u4E0D\u8DB3');
                    break;
                case 500:
                    _o.error('\u4F3A\u670D\u5668\u51FA\u932F');
                    break;
            }
        }
    }
}
var xp = new Pp();
class Mp {
    getUsers() {
        return xp.get('/users');
    }
}
var Dp = new Mp();
const Fp = {
        async getUsers({ commit: e }) {
            const t = await Dp.getUsers();
            e('setUsers', t);
        }
    },
    $p = { getUsers: (e) => e.users },
    Up = {
        setUsers(e, t) {
            e.users = t;
        },
        setUserImage(e, t) {
            const { imageURL: n, userId: r } = t,
                a = e.users.find((i) => i.id === r);
            a.image = n;
        }
    },
    Hp = { users: [] },
    Wp = { namespaced: !0, state: Hp, getters: $p, mutations: Up, actions: Fp },
    iu = Symbol(),
    jp = _p({
        state: bp,
        getters: yp,
        mutations: Ep,
        actions: Tp,
        modules: { data: Wp }
    });
function wr() {
    return tp(iu);
}
const Gp = [
    { title: 'introduction', children: [{ title: 'profile', children: [] }] },
    { title: 'playground', children: [{ title: 'basic', children: [] }] }
];
var Vp = { menus: Gp };
/*!
 * vue-router v4.0.14
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const su =
        typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol',
    Vn = (e) => (su ? Symbol(e) : '_vr_' + e),
    Bp = Vn('rvlm'),
    bo = Vn('rvd'),
    Ia = Vn('r'),
    cs = Vn('rl'),
    pi = Vn('rvl'),
    Tn = typeof window != 'undefined';
function Yp(e) {
    return e.__esModule || (su && e[Symbol.toStringTag] === 'Module');
}
const he = Object.assign;
function Va(e, t) {
    const n = {};
    for (const r in t) {
        const a = t[r];
        n[r] = Array.isArray(a) ? a.map(e) : e(a);
    }
    return n;
}
const lr = () => {},
    Kp = /\/$/,
    zp = (e) => e.replace(Kp, '');
function Ba(e, t, n = '/') {
    let r,
        a = {},
        i = '',
        s = '';
    const o = t.indexOf('?'),
        l = t.indexOf('#', o > -1 ? o : 0);
    return (
        o > -1 &&
            ((r = t.slice(0, o)),
            (i = t.slice(o + 1, l > -1 ? l : t.length)),
            (a = e(i))),
        l > -1 && ((r = r || t.slice(0, l)), (s = t.slice(l, t.length))),
        (r = Jp(r != null ? r : t, n)),
        { fullPath: r + (i && '?') + i + s, path: r, query: a, hash: s }
    );
}
function Xp(e, t) {
    const n = t.query ? e(t.query) : '';
    return t.path + (n && '?') + n + (t.hash || '');
}
function yo(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase())
        ? e
        : e.slice(t.length) || '/';
}
function qp(e, t, n) {
    const r = t.matched.length - 1,
        a = n.matched.length - 1;
    return (
        r > -1 &&
        r === a &&
        Mn(t.matched[r], n.matched[a]) &&
        ou(t.params, n.params) &&
        e(t.query) === e(n.query) &&
        t.hash === n.hash
    );
}
function Mn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
}
function ou(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!Qp(e[n], t[n])) return !1;
    return !0;
}
function Qp(e, t) {
    return Array.isArray(e) ? Eo(e, t) : Array.isArray(t) ? Eo(t, e) : e === t;
}
function Eo(e, t) {
    return Array.isArray(t)
        ? e.length === t.length && e.every((n, r) => n === t[r])
        : e.length === 1 && e[0] === t;
}
function Jp(e, t) {
    if (e.startsWith('/')) return e;
    if (!e) return t;
    const n = t.split('/'),
        r = e.split('/');
    let a = n.length - 1,
        i,
        s;
    for (i = 0; i < r.length; i++)
        if (((s = r[i]), !(a === 1 || s === '.')))
            if (s === '..') a--;
            else break;
    return (
        n.slice(0, a).join('/') +
        '/' +
        r.slice(i - (i === r.length ? 1 : 0)).join('/')
    );
}
var Cr;
(function (e) {
    (e.pop = 'pop'), (e.push = 'push');
})(Cr || (Cr = {}));
var cr;
(function (e) {
    (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(cr || (cr = {}));
function Zp(e) {
    if (!e)
        if (Tn) {
            const t = document.querySelector('base');
            (e = (t && t.getAttribute('href')) || '/'),
                (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
        } else e = '/';
    return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), zp(e);
}
const eh = /^[^#]+#/;
function th(e, t) {
    return e.replace(eh, '#') + t;
}
function nh(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    };
}
const Ca = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function rh(e) {
    let t;
    if ('el' in e) {
        const n = e.el,
            r = typeof n == 'string' && n.startsWith('#'),
            a =
                typeof n == 'string'
                    ? r
                        ? document.getElementById(n.slice(1))
                        : document.querySelector(n)
                    : n;
        if (!a) return;
        t = nh(a, e);
    } else t = e;
    'scrollBehavior' in document.documentElement.style
        ? window.scrollTo(t)
        : window.scrollTo(
              t.left != null ? t.left : window.pageXOffset,
              t.top != null ? t.top : window.pageYOffset
          );
}
function To(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
}
const hi = new Map();
function ah(e, t) {
    hi.set(e, t);
}
function ih(e) {
    const t = hi.get(e);
    return hi.delete(e), t;
}
let sh = () => location.protocol + '//' + location.host;
function lu(e, t) {
    const { pathname: n, search: r, hash: a } = t,
        i = e.indexOf('#');
    if (i > -1) {
        let o = a.includes(e.slice(i)) ? e.slice(i).length : 1,
            l = a.slice(o);
        return l[0] !== '/' && (l = '/' + l), yo(l, '');
    }
    return yo(n, e) + r + a;
}
function oh(e, t, n, r) {
    let a = [],
        i = [],
        s = null;
    const o = ({ state: p }) => {
        const _ = lu(e, location),
            N = n.value,
            O = t.value;
        let A = 0;
        if (p) {
            if (((n.value = _), (t.value = p), s && s === N)) {
                s = null;
                return;
            }
            A = O ? p.position - O.position : 0;
        } else r(_);
        a.forEach((h) => {
            h(n.value, N, {
                delta: A,
                type: Cr.pop,
                direction: A ? (A > 0 ? cr.forward : cr.back) : cr.unknown
            });
        });
    };
    function l() {
        s = n.value;
    }
    function c(p) {
        a.push(p);
        const _ = () => {
            const N = a.indexOf(p);
            N > -1 && a.splice(N, 1);
        };
        return i.push(_), _;
    }
    function u() {
        const { history: p } = window;
        !p.state || p.replaceState(he({}, p.state, { scroll: Ca() }), '');
    }
    function m() {
        for (const p of i) p();
        (i = []),
            window.removeEventListener('popstate', o),
            window.removeEventListener('beforeunload', u);
    }
    return (
        window.addEventListener('popstate', o),
        window.addEventListener('beforeunload', u),
        { pauseListeners: l, listen: c, destroy: m }
    );
}
function Io(e, t, n, r = !1, a = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: a ? Ca() : null
    };
}
function lh(e) {
    const { history: t, location: n } = window,
        r = { value: lu(e, n) },
        a = { value: t.state };
    a.value ||
        i(
            r.value,
            {
                back: null,
                current: r.value,
                forward: null,
                position: t.length - 1,
                replaced: !0,
                scroll: null
            },
            !0
        );
    function i(l, c, u) {
        const m = e.indexOf('#'),
            p =
                m > -1
                    ? (n.host && document.querySelector('base')
                          ? e
                          : e.slice(m)) + l
                    : sh() + e + l;
        try {
            t[u ? 'replaceState' : 'pushState'](c, '', p), (a.value = c);
        } catch (_) {
            console.error(_), n[u ? 'replace' : 'assign'](p);
        }
    }
    function s(l, c) {
        const u = he({}, t.state, Io(a.value.back, l, a.value.forward, !0), c, {
            position: a.value.position
        });
        i(l, u, !0), (r.value = l);
    }
    function o(l, c) {
        const u = he({}, a.value, t.state, { forward: l, scroll: Ca() });
        i(u.current, u, !0);
        const m = he({}, Io(r.value, l, null), { position: u.position + 1 }, c);
        i(l, m, !1), (r.value = l);
    }
    return { location: r, state: a, push: o, replace: s };
}
function ch(e) {
    e = Zp(e);
    const t = lh(e),
        n = oh(e, t.state, t.location, t.replace);
    function r(i, s = !0) {
        s || n.pauseListeners(), history.go(i);
    }
    const a = he(
        { location: '', base: e, go: r, createHref: th.bind(null, e) },
        t,
        n
    );
    return (
        Object.defineProperty(a, 'location', {
            enumerable: !0,
            get: () => t.location.value
        }),
        Object.defineProperty(a, 'state', {
            enumerable: !0,
            get: () => t.state.value
        }),
        a
    );
}
function uh(e) {
    return typeof e == 'string' || (e && typeof e == 'object');
}
function cu(e) {
    return typeof e == 'string' || typeof e == 'symbol';
}
const Lt = {
        path: '/',
        name: void 0,
        params: {},
        query: {},
        hash: '',
        fullPath: '/',
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    uu = Vn('nf');
var Co;
(function (e) {
    (e[(e.aborted = 4)] = 'aborted'),
        (e[(e.cancelled = 8)] = 'cancelled'),
        (e[(e.duplicated = 16)] = 'duplicated');
})(Co || (Co = {}));
function Dn(e, t) {
    return he(new Error(), { type: e, [uu]: !0 }, t);
}
function Rt(e, t) {
    return e instanceof Error && uu in e && (t == null || !!(e.type & t));
}
const No = '[^/]+?',
    fh = { sensitive: !1, strict: !1, start: !0, end: !0 },
    dh = /[.+*?^${}()[\]/\\]/g;
function mh(e, t) {
    const n = he({}, fh, t),
        r = [];
    let a = n.start ? '^' : '';
    const i = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (a += '/');
        for (let m = 0; m < c.length; m++) {
            const p = c[m];
            let _ = 40 + (n.sensitive ? 0.25 : 0);
            if (p.type === 0)
                m || (a += '/'), (a += p.value.replace(dh, '\\$&')), (_ += 40);
            else if (p.type === 1) {
                const { value: N, repeatable: O, optional: A, regexp: h } = p;
                i.push({ name: N, repeatable: O, optional: A });
                const g = h || No;
                if (g !== No) {
                    _ += 10;
                    try {
                        new RegExp(`(${g})`);
                    } catch (T) {
                        throw new Error(
                            `Invalid custom RegExp for param "${N}" (${g}): ` +
                                T.message
                        );
                    }
                }
                let I = O ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
                m || (I = A && c.length < 2 ? `(?:/${I})` : '/' + I),
                    A && (I += '?'),
                    (a += I),
                    (_ += 20),
                    A && (_ += -8),
                    O && (_ += -20),
                    g === '.*' && (_ += -50);
            }
            u.push(_);
        }
        r.push(u);
    }
    if (n.strict && n.end) {
        const c = r.length - 1;
        r[c][r[c].length - 1] += 0.7000000000000001;
    }
    n.strict || (a += '/?'), n.end ? (a += '$') : n.strict && (a += '(?:/|$)');
    const s = new RegExp(a, n.sensitive ? '' : 'i');
    function o(c) {
        const u = c.match(s),
            m = {};
        if (!u) return null;
        for (let p = 1; p < u.length; p++) {
            const _ = u[p] || '',
                N = i[p - 1];
            m[N.name] = _ && N.repeatable ? _.split('/') : _;
        }
        return m;
    }
    function l(c) {
        let u = '',
            m = !1;
        for (const p of e) {
            (!m || !u.endsWith('/')) && (u += '/'), (m = !1);
            for (const _ of p)
                if (_.type === 0) u += _.value;
                else if (_.type === 1) {
                    const { value: N, repeatable: O, optional: A } = _,
                        h = N in c ? c[N] : '';
                    if (Array.isArray(h) && !O)
                        throw new Error(
                            `Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`
                        );
                    const g = Array.isArray(h) ? h.join('/') : h;
                    if (!g)
                        if (A)
                            p.length < 2 &&
                                (u.endsWith('/')
                                    ? (u = u.slice(0, -1))
                                    : (m = !0));
                        else throw new Error(`Missing required param "${N}"`);
                    u += g;
                }
        }
        return u;
    }
    return { re: s, score: r, keys: i, parse: o, stringify: l };
}
function ph(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r) return r;
        n++;
    }
    return e.length < t.length
        ? e.length === 1 && e[0] === 40 + 40
            ? -1
            : 1
        : e.length > t.length
        ? t.length === 1 && t[0] === 40 + 40
            ? 1
            : -1
        : 0;
}
function hh(e, t) {
    let n = 0;
    const r = e.score,
        a = t.score;
    for (; n < r.length && n < a.length; ) {
        const i = ph(r[n], a[n]);
        if (i) return i;
        n++;
    }
    return a.length - r.length;
}
const gh = { type: 0, value: '' },
    vh = /[a-zA-Z0-9_]/;
function _h(e) {
    if (!e) return [[]];
    if (e === '/') return [[gh]];
    if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
    function t(_) {
        throw new Error(`ERR (${n})/"${c}": ${_}`);
    }
    let n = 0,
        r = n;
    const a = [];
    let i;
    function s() {
        i && a.push(i), (i = []);
    }
    let o = 0,
        l,
        c = '',
        u = '';
    function m() {
        !c ||
            (n === 0
                ? i.push({ type: 0, value: c })
                : n === 1 || n === 2 || n === 3
                ? (i.length > 1 &&
                      (l === '*' || l === '+') &&
                      t(
                          `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
                      ),
                  i.push({
                      type: 1,
                      value: c,
                      regexp: u,
                      repeatable: l === '*' || l === '+',
                      optional: l === '*' || l === '?'
                  }))
                : t('Invalid state to consume buffer'),
            (c = ''));
    }
    function p() {
        c += l;
    }
    for (; o < e.length; ) {
        if (((l = e[o++]), l === '\\' && n !== 2)) {
            (r = n), (n = 4);
            continue;
        }
        switch (n) {
            case 0:
                l === '/' ? (c && m(), s()) : l === ':' ? (m(), (n = 1)) : p();
                break;
            case 4:
                p(), (n = r);
                break;
            case 1:
                l === '('
                    ? (n = 2)
                    : vh.test(l)
                    ? p()
                    : (m(),
                      (n = 0),
                      l !== '*' && l !== '?' && l !== '+' && o--);
                break;
            case 2:
                l === ')'
                    ? u[u.length - 1] == '\\'
                        ? (u = u.slice(0, -1) + l)
                        : (n = 3)
                    : (u += l);
                break;
            case 3:
                m(),
                    (n = 0),
                    l !== '*' && l !== '?' && l !== '+' && o--,
                    (u = '');
                break;
            default:
                t('Unknown state');
                break;
        }
    }
    return (
        n === 2 && t(`Unfinished custom RegExp for param "${c}"`), m(), s(), a
    );
}
function bh(e, t, n) {
    const r = mh(_h(e.path), n),
        a = he(r, { record: e, parent: t, children: [], alias: [] });
    return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
}
function yh(e, t) {
    const n = [],
        r = new Map();
    t = Oo({ strict: !1, end: !0, sensitive: !1 }, t);
    function a(u) {
        return r.get(u);
    }
    function i(u, m, p) {
        const _ = !p,
            N = Th(u);
        N.aliasOf = p && p.record;
        const O = Oo(t, u),
            A = [N];
        if ('alias' in u) {
            const I = typeof u.alias == 'string' ? [u.alias] : u.alias;
            for (const T of I)
                A.push(
                    he({}, N, {
                        components: p ? p.record.components : N.components,
                        path: T,
                        aliasOf: p ? p.record : N
                    })
                );
        }
        let h, g;
        for (const I of A) {
            const { path: T } = I;
            if (m && T[0] !== '/') {
                const C = m.record.path,
                    P = C[C.length - 1] === '/' ? '' : '/';
                I.path = m.record.path + (T && P + T);
            }
            if (
                ((h = bh(I, m, O)),
                p
                    ? p.alias.push(h)
                    : ((g = g || h),
                      g !== h && g.alias.push(h),
                      _ && u.name && !Ao(h) && s(u.name)),
                'children' in N)
            ) {
                const C = N.children;
                for (let P = 0; P < C.length; P++)
                    i(C[P], h, p && p.children[P]);
            }
            (p = p || h), l(h);
        }
        return g
            ? () => {
                  s(g);
              }
            : lr;
    }
    function s(u) {
        if (cu(u)) {
            const m = r.get(u);
            m &&
                (r.delete(u),
                n.splice(n.indexOf(m), 1),
                m.children.forEach(s),
                m.alias.forEach(s));
        } else {
            const m = n.indexOf(u);
            m > -1 &&
                (n.splice(m, 1),
                u.record.name && r.delete(u.record.name),
                u.children.forEach(s),
                u.alias.forEach(s));
        }
    }
    function o() {
        return n;
    }
    function l(u) {
        let m = 0;
        for (
            ;
            m < n.length &&
            hh(u, n[m]) >= 0 &&
            (u.record.path !== n[m].record.path || !fu(u, n[m]));

        )
            m++;
        n.splice(m, 0, u), u.record.name && !Ao(u) && r.set(u.record.name, u);
    }
    function c(u, m) {
        let p,
            _ = {},
            N,
            O;
        if ('name' in u && u.name) {
            if (((p = r.get(u.name)), !p)) throw Dn(1, { location: u });
            (O = p.record.name),
                (_ = he(
                    Eh(
                        m.params,
                        p.keys.filter((g) => !g.optional).map((g) => g.name)
                    ),
                    u.params
                )),
                (N = p.stringify(_));
        } else if ('path' in u)
            (N = u.path),
                (p = n.find((g) => g.re.test(N))),
                p && ((_ = p.parse(N)), (O = p.record.name));
        else {
            if (
                ((p = m.name
                    ? r.get(m.name)
                    : n.find((g) => g.re.test(m.path))),
                !p)
            )
                throw Dn(1, { location: u, currentLocation: m });
            (O = p.record.name),
                (_ = he({}, m.params, u.params)),
                (N = p.stringify(_));
        }
        const A = [];
        let h = p;
        for (; h; ) A.unshift(h.record), (h = h.parent);
        return { name: O, path: N, params: _, matched: A, meta: Ch(A) };
    }
    return (
        e.forEach((u) => i(u)),
        {
            addRoute: i,
            resolve: c,
            removeRoute: s,
            getRoutes: o,
            getRecordMatcher: a
        }
    );
}
function Eh(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
}
function Th(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Ih(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components:
            'components' in e ? e.components || {} : { default: e.component }
    };
}
function Ih(e) {
    const t = {},
        n = e.props || !1;
    if ('component' in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == 'boolean' ? n : n[r];
    return t;
}
function Ao(e) {
    for (; e; ) {
        if (e.record.aliasOf) return !0;
        e = e.parent;
    }
    return !1;
}
function Ch(e) {
    return e.reduce((t, n) => he(t, n.meta), {});
}
function Oo(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
}
function fu(e, t) {
    return t.children.some((n) => n === e || fu(e, n));
}
const du = /#/g,
    Nh = /&/g,
    Ah = /\//g,
    Oh = /=/g,
    wh = /\?/g,
    mu = /\+/g,
    Sh = /%5B/g,
    kh = /%5D/g,
    pu = /%5E/g,
    Lh = /%60/g,
    hu = /%7B/g,
    Rh = /%7C/g,
    gu = /%7D/g,
    Ph = /%20/g;
function us(e) {
    return encodeURI('' + e)
        .replace(Rh, '|')
        .replace(Sh, '[')
        .replace(kh, ']');
}
function xh(e) {
    return us(e).replace(hu, '{').replace(gu, '}').replace(pu, '^');
}
function gi(e) {
    return us(e)
        .replace(mu, '%2B')
        .replace(Ph, '+')
        .replace(du, '%23')
        .replace(Nh, '%26')
        .replace(Lh, '`')
        .replace(hu, '{')
        .replace(gu, '}')
        .replace(pu, '^');
}
function Mh(e) {
    return gi(e).replace(Oh, '%3D');
}
function Dh(e) {
    return us(e).replace(du, '%23').replace(wh, '%3F');
}
function Fh(e) {
    return e == null ? '' : Dh(e).replace(Ah, '%2F');
}
function ta(e) {
    try {
        return decodeURIComponent('' + e);
    } catch {}
    return '' + e;
}
function $h(e) {
    const t = {};
    if (e === '' || e === '?') return t;
    const r = (e[0] === '?' ? e.slice(1) : e).split('&');
    for (let a = 0; a < r.length; ++a) {
        const i = r[a].replace(mu, ' '),
            s = i.indexOf('='),
            o = ta(s < 0 ? i : i.slice(0, s)),
            l = s < 0 ? null : ta(i.slice(s + 1));
        if (o in t) {
            let c = t[o];
            Array.isArray(c) || (c = t[o] = [c]), c.push(l);
        } else t[o] = l;
    }
    return t;
}
function wo(e) {
    let t = '';
    for (let n in e) {
        const r = e[n];
        if (((n = Mh(n)), r == null)) {
            r !== void 0 && (t += (t.length ? '&' : '') + n);
            continue;
        }
        (Array.isArray(r) ? r.map((i) => i && gi(i)) : [r && gi(r)]).forEach(
            (i) => {
                i !== void 0 &&
                    ((t += (t.length ? '&' : '') + n),
                    i != null && (t += '=' + i));
            }
        );
    }
    return t;
}
function Uh(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 &&
            (t[n] = Array.isArray(r)
                ? r.map((a) => (a == null ? null : '' + a))
                : r == null
                ? r
                : '' + r);
    }
    return t;
}
function qn() {
    let e = [];
    function t(r) {
        return (
            e.push(r),
            () => {
                const a = e.indexOf(r);
                a > -1 && e.splice(a, 1);
            }
        );
    }
    function n() {
        e = [];
    }
    return { add: t, list: () => e, reset: n };
}
function Ft(e, t, n, r, a) {
    const i = r && (r.enterCallbacks[a] = r.enterCallbacks[a] || []);
    return () =>
        new Promise((s, o) => {
            const l = (m) => {
                    m === !1
                        ? o(Dn(4, { from: n, to: t }))
                        : m instanceof Error
                        ? o(m)
                        : uh(m)
                        ? o(Dn(2, { from: t, to: m }))
                        : (i &&
                              r.enterCallbacks[a] === i &&
                              typeof m == 'function' &&
                              i.push(m),
                          s());
                },
                c = e.call(r && r.instances[a], t, n, l);
            let u = Promise.resolve(c);
            e.length < 3 && (u = u.then(l)), u.catch((m) => o(m));
        });
}
function Ya(e, t, n, r) {
    const a = [];
    for (const i of e)
        for (const s in i.components) {
            let o = i.components[s];
            if (!(t !== 'beforeRouteEnter' && !i.instances[s]))
                if (Hh(o)) {
                    const c = (o.__vccOpts || o)[t];
                    c && a.push(Ft(c, n, r, i, s));
                } else {
                    let l = o();
                    a.push(() =>
                        l.then((c) => {
                            if (!c)
                                return Promise.reject(
                                    new Error(
                                        `Couldn't resolve component "${s}" at "${i.path}"`
                                    )
                                );
                            const u = Yp(c) ? c.default : c;
                            i.components[s] = u;
                            const p = (u.__vccOpts || u)[t];
                            return p && Ft(p, n, r, i, s)();
                        })
                    );
                }
        }
    return a;
}
function Hh(e) {
    return (
        typeof e == 'object' ||
        'displayName' in e ||
        'props' in e ||
        '__vccOpts' in e
    );
}
function So(e) {
    const t = nt(Ia),
        n = nt(cs),
        r = ee(() => t.resolve(ar(e.to))),
        a = ee(() => {
            const { matched: l } = r.value,
                { length: c } = l,
                u = l[c - 1],
                m = n.matched;
            if (!u || !m.length) return -1;
            const p = m.findIndex(Mn.bind(null, u));
            if (p > -1) return p;
            const _ = ko(l[c - 2]);
            return c > 1 && ko(u) === _ && m[m.length - 1].path !== _
                ? m.findIndex(Mn.bind(null, l[c - 2]))
                : p;
        }),
        i = ee(() => a.value > -1 && Vh(n.params, r.value.params)),
        s = ee(
            () =>
                a.value > -1 &&
                a.value === n.matched.length - 1 &&
                ou(n.params, r.value.params)
        );
    function o(l = {}) {
        return Gh(l)
            ? t[ar(e.replace) ? 'replace' : 'push'](ar(e.to)).catch(lr)
            : Promise.resolve();
    }
    return {
        route: r,
        href: ee(() => r.value.href),
        isActive: i,
        isExactActive: s,
        navigate: o
    };
}
const Wh = at({
        name: 'RouterLink',
        props: {
            to: { type: [String, Object], required: !0 },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: { type: String, default: 'page' }
        },
        useLink: So,
        setup(e, { slots: t }) {
            const n = dn(So(e)),
                { options: r } = nt(Ia),
                a = ee(() => ({
                    [Lo(
                        e.activeClass,
                        r.linkActiveClass,
                        'router-link-active'
                    )]: n.isActive,
                    [Lo(
                        e.exactActiveClass,
                        r.linkExactActiveClass,
                        'router-link-exact-active'
                    )]: n.isExactActive
                }));
            return () => {
                const i = t.default && t.default(n);
                return e.custom
                    ? i
                    : mn(
                          'a',
                          {
                              'aria-current': n.isExactActive
                                  ? e.ariaCurrentValue
                                  : null,
                              href: n.href,
                              onClick: n.navigate,
                              class: a.value
                          },
                          i
                      );
            };
        }
    }),
    jh = Wh;
function Gh(e) {
    if (
        !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
        !e.defaultPrevented &&
        !(e.button !== void 0 && e.button !== 0)
    ) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute('target');
            if (/\b_blank\b/i.test(t)) return;
        }
        return e.preventDefault && e.preventDefault(), !0;
    }
}
function Vh(e, t) {
    for (const n in t) {
        const r = t[n],
            a = e[n];
        if (typeof r == 'string') {
            if (r !== a) return !1;
        } else if (
            !Array.isArray(a) ||
            a.length !== r.length ||
            r.some((i, s) => i !== a[s])
        )
            return !1;
    }
    return !0;
}
function ko(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Lo = (e, t, n) => (e != null ? e : t != null ? t : n),
    Bh = at({
        name: 'RouterView',
        inheritAttrs: !1,
        props: { name: { type: String, default: 'default' }, route: Object },
        setup(e, { attrs: t, slots: n }) {
            const r = nt(pi),
                a = ee(() => e.route || r.value),
                i = nt(bo, 0),
                s = ee(() => a.value.matched[i]);
            jr(bo, i + 1), jr(Bp, s), jr(pi, a);
            const o = Ce();
            return (
                ct(
                    () => [o.value, s.value, e.name],
                    ([l, c, u], [m, p, _]) => {
                        c &&
                            ((c.instances[u] = l),
                            p &&
                                p !== c &&
                                l &&
                                l === m &&
                                (c.leaveGuards.size ||
                                    (c.leaveGuards = p.leaveGuards),
                                c.updateGuards.size ||
                                    (c.updateGuards = p.updateGuards))),
                            l &&
                                c &&
                                (!p || !Mn(c, p) || !m) &&
                                (c.enterCallbacks[u] || []).forEach((N) =>
                                    N(l)
                                );
                    },
                    { flush: 'post' }
                ),
                () => {
                    const l = a.value,
                        c = s.value,
                        u = c && c.components[e.name],
                        m = e.name;
                    if (!u) return Ro(n.default, { Component: u, route: l });
                    const p = c.props[e.name],
                        _ = p
                            ? p === !0
                                ? l.params
                                : typeof p == 'function'
                                ? p(l)
                                : p
                            : null,
                        O = mn(
                            u,
                            he({}, _, t, {
                                onVnodeUnmounted: (A) => {
                                    A.component.isUnmounted &&
                                        (c.instances[m] = null);
                                },
                                ref: o
                            })
                        );
                    return Ro(n.default, { Component: O, route: l }) || O;
                }
            );
        }
    });
function Ro(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
}
const Yh = Bh;
function Kh(e) {
    const t = yh(e.routes, e),
        n = e.parseQuery || $h,
        r = e.stringifyQuery || wo,
        a = e.history,
        i = qn(),
        s = qn(),
        o = qn(),
        l = oc(Lt);
    let c = Lt;
    Tn &&
        e.scrollBehavior &&
        'scrollRestoration' in history &&
        (history.scrollRestoration = 'manual');
    const u = Va.bind(null, (L) => '' + L),
        m = Va.bind(null, Fh),
        p = Va.bind(null, ta);
    function _(L, G) {
        let F, B;
        return (
            cu(L) ? ((F = t.getRecordMatcher(L)), (B = G)) : (B = L),
            t.addRoute(B, F)
        );
    }
    function N(L) {
        const G = t.getRecordMatcher(L);
        G && t.removeRoute(G);
    }
    function O() {
        return t.getRoutes().map((L) => L.record);
    }
    function A(L) {
        return !!t.getRecordMatcher(L);
    }
    function h(L, G) {
        if (((G = he({}, G || l.value)), typeof L == 'string')) {
            const b = Ba(n, L, G.path),
                f = t.resolve({ path: b.path }, G),
                d = a.createHref(b.fullPath);
            return he(b, f, {
                params: p(f.params),
                hash: ta(b.hash),
                redirectedFrom: void 0,
                href: d
            });
        }
        let F;
        if ('path' in L) F = he({}, L, { path: Ba(n, L.path, G.path).path });
        else {
            const b = he({}, L.params);
            for (const f in b) b[f] == null && delete b[f];
            (F = he({}, L, { params: m(L.params) })), (G.params = m(G.params));
        }
        const B = t.resolve(F, G),
            ae = L.hash || '';
        B.params = u(p(B.params));
        const ue = Xp(r, he({}, L, { hash: xh(ae), path: B.path })),
            v = a.createHref(ue);
        return he(
            {
                fullPath: ue,
                hash: ae,
                query: r === wo ? Uh(L.query) : L.query || {}
            },
            B,
            { redirectedFrom: void 0, href: v }
        );
    }
    function g(L) {
        return typeof L == 'string' ? Ba(n, L, l.value.path) : he({}, L);
    }
    function I(L, G) {
        if (c !== L) return Dn(8, { from: G, to: L });
    }
    function T(L) {
        return R(L);
    }
    function C(L) {
        return T(he(g(L), { replace: !0 }));
    }
    function P(L) {
        const G = L.matched[L.matched.length - 1];
        if (G && G.redirect) {
            const { redirect: F } = G;
            let B = typeof F == 'function' ? F(L) : F;
            return (
                typeof B == 'string' &&
                    ((B =
                        B.includes('?') || B.includes('#')
                            ? (B = g(B))
                            : { path: B }),
                    (B.params = {})),
                he({ query: L.query, hash: L.hash, params: L.params }, B)
            );
        }
    }
    function R(L, G) {
        const F = (c = h(L)),
            B = l.value,
            ae = L.state,
            ue = L.force,
            v = L.replace === !0,
            b = P(F);
        if (b) return R(he(g(b), { state: ae, force: ue, replace: v }), G || F);
        const f = F;
        f.redirectedFrom = G;
        let d;
        return (
            !ue &&
                qp(r, B, F) &&
                ((d = Dn(16, { to: f, from: B })), Je(B, B, !0, !1)),
            (d ? Promise.resolve(d) : Y(f, B))
                .catch((y) => (Rt(y) ? (Rt(y, 2) ? y : ke(y)) : re(y, f, B)))
                .then((y) => {
                    if (y) {
                        if (Rt(y, 2))
                            return R(
                                he(g(y.to), {
                                    state: ae,
                                    force: ue,
                                    replace: v
                                }),
                                G || f
                            );
                    } else y = J(f, B, !0, v, ae);
                    return te(f, B, y), y;
                })
        );
    }
    function K(L, G) {
        const F = I(L, G);
        return F ? Promise.reject(F) : Promise.resolve();
    }
    function Y(L, G) {
        let F;
        const [B, ae, ue] = zh(L, G);
        F = Ya(B.reverse(), 'beforeRouteLeave', L, G);
        for (const b of B)
            b.leaveGuards.forEach((f) => {
                F.push(Ft(f, L, G));
            });
        const v = K.bind(null, L, G);
        return (
            F.push(v),
            bn(F)
                .then(() => {
                    F = [];
                    for (const b of i.list()) F.push(Ft(b, L, G));
                    return F.push(v), bn(F);
                })
                .then(() => {
                    F = Ya(ae, 'beforeRouteUpdate', L, G);
                    for (const b of ae)
                        b.updateGuards.forEach((f) => {
                            F.push(Ft(f, L, G));
                        });
                    return F.push(v), bn(F);
                })
                .then(() => {
                    F = [];
                    for (const b of L.matched)
                        if (b.beforeEnter && !G.matched.includes(b))
                            if (Array.isArray(b.beforeEnter))
                                for (const f of b.beforeEnter)
                                    F.push(Ft(f, L, G));
                            else F.push(Ft(b.beforeEnter, L, G));
                    return F.push(v), bn(F);
                })
                .then(
                    () => (
                        L.matched.forEach((b) => (b.enterCallbacks = {})),
                        (F = Ya(ue, 'beforeRouteEnter', L, G)),
                        F.push(v),
                        bn(F)
                    )
                )
                .then(() => {
                    F = [];
                    for (const b of s.list()) F.push(Ft(b, L, G));
                    return F.push(v), bn(F);
                })
                .catch((b) => (Rt(b, 8) ? b : Promise.reject(b)))
        );
    }
    function te(L, G, F) {
        for (const B of o.list()) B(L, G, F);
    }
    function J(L, G, F, B, ae) {
        const ue = I(L, G);
        if (ue) return ue;
        const v = G === Lt,
            b = Tn ? history.state : {};
        F &&
            (B || v
                ? a.replace(L.fullPath, he({ scroll: v && b && b.scroll }, ae))
                : a.push(L.fullPath, ae)),
            (l.value = L),
            Je(L, G, F, v),
            ke();
    }
    let j;
    function ce() {
        j = a.listen((L, G, F) => {
            const B = h(L),
                ae = P(B);
            if (ae) {
                R(he(ae, { replace: !0 }), B).catch(lr);
                return;
            }
            c = B;
            const ue = l.value;
            Tn && ah(To(ue.fullPath, F.delta), Ca()),
                Y(B, ue)
                    .catch((v) =>
                        Rt(v, 12)
                            ? v
                            : Rt(v, 2)
                            ? (R(v.to, B)
                                  .then((b) => {
                                      Rt(b, 20) &&
                                          !F.delta &&
                                          F.type === Cr.pop &&
                                          a.go(-1, !1);
                                  })
                                  .catch(lr),
                              Promise.reject())
                            : (F.delta && a.go(-F.delta, !1), re(v, B, ue))
                    )
                    .then((v) => {
                        (v = v || J(B, ue, !1)),
                            v &&
                                (F.delta
                                    ? a.go(-F.delta, !1)
                                    : F.type === Cr.pop &&
                                      Rt(v, 20) &&
                                      a.go(-1, !1)),
                            te(B, ue, v);
                    })
                    .catch(lr);
        });
    }
    let Ne = qn(),
        We = qn(),
        ie;
    function re(L, G, F) {
        ke(L);
        const B = We.list();
        return (
            B.length ? B.forEach((ae) => ae(L, G, F)) : console.error(L),
            Promise.reject(L)
        );
    }
    function se() {
        return ie && l.value !== Lt
            ? Promise.resolve()
            : new Promise((L, G) => {
                  Ne.add([L, G]);
              });
    }
    function ke(L) {
        return (
            ie ||
                ((ie = !L),
                ce(),
                Ne.list().forEach(([G, F]) => (L ? F(L) : G())),
                Ne.reset()),
            L
        );
    }
    function Je(L, G, F, B) {
        const { scrollBehavior: ae } = e;
        if (!Tn || !ae) return Promise.resolve();
        const ue =
            (!F && ih(To(L.fullPath, 0))) ||
            ((B || !F) && history.state && history.state.scroll) ||
            null;
        return fc()
            .then(() => ae(L, G, ue))
            .then((v) => v && rh(v))
            .catch((v) => re(v, L, G));
    }
    const je = (L) => a.go(L);
    let Fe;
    const $e = new Set();
    return {
        currentRoute: l,
        addRoute: _,
        removeRoute: N,
        hasRoute: A,
        getRoutes: O,
        resolve: h,
        options: e,
        push: T,
        replace: C,
        go: je,
        back: () => je(-1),
        forward: () => je(1),
        beforeEach: i.add,
        beforeResolve: s.add,
        afterEach: o.add,
        onError: We.add,
        isReady: se,
        install(L) {
            const G = this;
            L.component('RouterLink', jh),
                L.component('RouterView', Yh),
                (L.config.globalProperties.$router = G),
                Object.defineProperty(L.config.globalProperties, '$route', {
                    enumerable: !0,
                    get: () => ar(l)
                }),
                Tn &&
                    !Fe &&
                    l.value === Lt &&
                    ((Fe = !0), T(a.location).catch((ae) => {}));
            const F = {};
            for (const ae in Lt) F[ae] = ee(() => l.value[ae]);
            L.provide(Ia, G), L.provide(cs, dn(F)), L.provide(pi, l);
            const B = L.unmount;
            $e.add(L),
                (L.unmount = function () {
                    $e.delete(L),
                        $e.size < 1 &&
                            ((c = Lt),
                            j && j(),
                            (l.value = Lt),
                            (Fe = !1),
                            (ie = !1)),
                        B();
                });
        }
    };
}
function bn(e) {
    return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function zh(e, t) {
    const n = [],
        r = [],
        a = [],
        i = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < i; s++) {
        const o = t.matched[s];
        o && (e.matched.find((c) => Mn(c, o)) ? r.push(o) : n.push(o));
        const l = e.matched[s];
        l && (t.matched.find((c) => Mn(c, l)) || a.push(l));
    }
    return [n, r, a];
}
function Xh() {
    return nt(Ia);
}
function fs() {
    return nt(cs);
}
/*!
 * shared v9.2.0-beta.35
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const qh = typeof window != 'undefined',
    Qh = typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol',
    Kt = (e) => (Qh ? Symbol(e) : e),
    Jh = (e, t, n) => Zh({ l: e, k: t, s: n }),
    Zh = (e) =>
        JSON.stringify(e)
            .replace(/\u2028/g, '\\u2028')
            .replace(/\u2029/g, '\\u2029')
            .replace(/\u0027/g, '\\u0027'),
    xe = (e) => typeof e == 'number' && isFinite(e),
    eg = (e) => ms(e) === '[object Date]',
    Vt = (e) => ms(e) === '[object RegExp]',
    Na = (e) => Q(e) && Object.keys(e).length === 0;
function tg(e, t) {
    typeof console != 'undefined' &&
        (console.warn('[intlify] ' + e), t && console.warn(t.stack));
}
const Me = Object.assign;
let Po;
const ur = () =>
    Po ||
    (Po =
        typeof globalThis != 'undefined'
            ? globalThis
            : typeof self != 'undefined'
            ? self
            : typeof window != 'undefined'
            ? window
            : typeof global != 'undefined'
            ? global
            : {});
function xo(e) {
    return e
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
const ng = Object.prototype.hasOwnProperty;
function ds(e, t) {
    return ng.call(e, t);
}
const _e = Array.isArray,
    Ie = (e) => typeof e == 'function',
    H = (e) => typeof e == 'string',
    le = (e) => typeof e == 'boolean',
    Te = (e) => e !== null && typeof e == 'object',
    vu = Object.prototype.toString,
    ms = (e) => vu.call(e),
    Q = (e) => ms(e) === '[object Object]',
    rg = (e) =>
        e == null
            ? ''
            : _e(e) || (Q(e) && e.toString === vu)
            ? JSON.stringify(e, null, 2)
            : String(e);
/*!
 * message-compiler v9.2.0-beta.35
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const me = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15
};
function Aa(e, t, n = {}) {
    const { domain: r, messages: a, args: i } = n,
        s = e,
        o = new SyntaxError(String(s));
    return (o.code = e), t && (o.location = t), (o.domain = r), o;
}
function ag(e) {
    throw e;
}
function ig(e, t, n) {
    return { line: e, column: t, offset: n };
}
function vi(e, t, n) {
    const r = { start: e, end: t };
    return n != null && (r.source = n), r;
}
const bt = ' ',
    sg = '\r',
    Ve = `
`,
    og = String.fromCharCode(8232),
    lg = String.fromCharCode(8233);
function cg(e) {
    const t = e;
    let n = 0,
        r = 1,
        a = 1,
        i = 0;
    const s = (R) => t[R] === sg && t[R + 1] === Ve,
        o = (R) => t[R] === Ve,
        l = (R) => t[R] === lg,
        c = (R) => t[R] === og,
        u = (R) => s(R) || o(R) || l(R) || c(R),
        m = () => n,
        p = () => r,
        _ = () => a,
        N = () => i,
        O = (R) => (s(R) || l(R) || c(R) ? Ve : t[R]),
        A = () => O(n),
        h = () => O(n + i);
    function g() {
        return (i = 0), u(n) && (r++, (a = 0)), s(n) && n++, n++, a++, t[n];
    }
    function I() {
        return s(n + i) && i++, i++, t[n + i];
    }
    function T() {
        (n = 0), (r = 1), (a = 1), (i = 0);
    }
    function C(R = 0) {
        i = R;
    }
    function P() {
        const R = n + i;
        for (; R !== n; ) g();
        i = 0;
    }
    return {
        index: m,
        line: p,
        column: _,
        peekOffset: N,
        charAt: O,
        currentChar: A,
        currentPeek: h,
        next: g,
        peek: I,
        reset: T,
        resetPeek: C,
        skipToPeek: P
    };
}
const Pt = void 0,
    Mo = "'",
    ug = 'tokenizer';
function fg(e, t = {}) {
    const n = t.location !== !1,
        r = cg(e),
        a = () => r.index(),
        i = () => ig(r.line(), r.column(), r.index()),
        s = i(),
        o = a(),
        l = {
            currentType: 14,
            offset: o,
            startLoc: s,
            endLoc: s,
            lastType: 14,
            lastOffset: o,
            lastStartLoc: s,
            lastEndLoc: s,
            braceNest: 0,
            inLinked: !1,
            text: ''
        },
        c = () => l,
        { onError: u } = t;
    function m(v, b, f, ...d) {
        const y = c();
        if (((b.column += f), (b.offset += f), u)) {
            const S = vi(y.startLoc, b),
                k = Aa(v, S, { domain: ug, args: d });
            u(k);
        }
    }
    function p(v, b, f) {
        (v.endLoc = i()), (v.currentType = b);
        const d = { type: b };
        return (
            n && (d.loc = vi(v.startLoc, v.endLoc)),
            f != null && (d.value = f),
            d
        );
    }
    const _ = (v) => p(v, 14);
    function N(v, b) {
        return v.currentChar() === b
            ? (v.next(), b)
            : (m(me.EXPECTED_TOKEN, i(), 0, b), '');
    }
    function O(v) {
        let b = '';
        for (; v.currentPeek() === bt || v.currentPeek() === Ve; )
            (b += v.currentPeek()), v.peek();
        return b;
    }
    function A(v) {
        const b = O(v);
        return v.skipToPeek(), b;
    }
    function h(v) {
        if (v === Pt) return !1;
        const b = v.charCodeAt(0);
        return (b >= 97 && b <= 122) || (b >= 65 && b <= 90) || b === 95;
    }
    function g(v) {
        if (v === Pt) return !1;
        const b = v.charCodeAt(0);
        return b >= 48 && b <= 57;
    }
    function I(v, b) {
        const { currentType: f } = b;
        if (f !== 2) return !1;
        O(v);
        const d = h(v.currentPeek());
        return v.resetPeek(), d;
    }
    function T(v, b) {
        const { currentType: f } = b;
        if (f !== 2) return !1;
        O(v);
        const d = v.currentPeek() === '-' ? v.peek() : v.currentPeek(),
            y = g(d);
        return v.resetPeek(), y;
    }
    function C(v, b) {
        const { currentType: f } = b;
        if (f !== 2) return !1;
        O(v);
        const d = v.currentPeek() === Mo;
        return v.resetPeek(), d;
    }
    function P(v, b) {
        const { currentType: f } = b;
        if (f !== 8) return !1;
        O(v);
        const d = v.currentPeek() === '.';
        return v.resetPeek(), d;
    }
    function R(v, b) {
        const { currentType: f } = b;
        if (f !== 9) return !1;
        O(v);
        const d = h(v.currentPeek());
        return v.resetPeek(), d;
    }
    function K(v, b) {
        const { currentType: f } = b;
        if (!(f === 8 || f === 12)) return !1;
        O(v);
        const d = v.currentPeek() === ':';
        return v.resetPeek(), d;
    }
    function Y(v, b) {
        const { currentType: f } = b;
        if (f !== 10) return !1;
        const d = () => {
                const S = v.currentPeek();
                return S === '{'
                    ? h(v.peek())
                    : S === '@' ||
                      S === '%' ||
                      S === '|' ||
                      S === ':' ||
                      S === '.' ||
                      S === bt ||
                      !S
                    ? !1
                    : S === Ve
                    ? (v.peek(), d())
                    : h(S);
            },
            y = d();
        return v.resetPeek(), y;
    }
    function te(v) {
        O(v);
        const b = v.currentPeek() === '|';
        return v.resetPeek(), b;
    }
    function J(v, b = !0) {
        const f = (y = !1, S = '', k = !1) => {
                const M = v.currentPeek();
                return M === '{'
                    ? S === '%'
                        ? !1
                        : y
                    : M === '@' || !M
                    ? S === '%'
                        ? !0
                        : y
                    : M === '%'
                    ? (v.peek(), f(y, '%', !0))
                    : M === '|'
                    ? S === '%' || k
                        ? !0
                        : !(S === bt || S === Ve)
                    : M === bt
                    ? (v.peek(), f(!0, bt, k))
                    : M === Ve
                    ? (v.peek(), f(!0, Ve, k))
                    : !0;
            },
            d = f();
        return b && v.resetPeek(), d;
    }
    function j(v, b) {
        const f = v.currentChar();
        return f === Pt ? Pt : b(f) ? (v.next(), f) : null;
    }
    function ce(v) {
        return j(v, (f) => {
            const d = f.charCodeAt(0);
            return (
                (d >= 97 && d <= 122) ||
                (d >= 65 && d <= 90) ||
                (d >= 48 && d <= 57) ||
                d === 95 ||
                d === 36
            );
        });
    }
    function Ne(v) {
        return j(v, (f) => {
            const d = f.charCodeAt(0);
            return d >= 48 && d <= 57;
        });
    }
    function We(v) {
        return j(v, (f) => {
            const d = f.charCodeAt(0);
            return (
                (d >= 48 && d <= 57) ||
                (d >= 65 && d <= 70) ||
                (d >= 97 && d <= 102)
            );
        });
    }
    function ie(v) {
        let b = '',
            f = '';
        for (; (b = Ne(v)); ) f += b;
        return f;
    }
    function re(v) {
        let b = '';
        for (;;) {
            const f = v.currentChar();
            if (f === '{' || f === '}' || f === '@' || f === '|' || !f) break;
            if (f === '%')
                if (J(v)) (b += f), v.next();
                else break;
            else if (f === bt || f === Ve)
                if (J(v)) (b += f), v.next();
                else {
                    if (te(v)) break;
                    (b += f), v.next();
                }
            else (b += f), v.next();
        }
        return b;
    }
    function se(v) {
        A(v);
        let b = '',
            f = '';
        for (; (b = ce(v)); ) f += b;
        return (
            v.currentChar() === Pt && m(me.UNTERMINATED_CLOSING_BRACE, i(), 0),
            f
        );
    }
    function ke(v) {
        A(v);
        let b = '';
        return (
            v.currentChar() === '-'
                ? (v.next(), (b += `-${ie(v)}`))
                : (b += ie(v)),
            v.currentChar() === Pt && m(me.UNTERMINATED_CLOSING_BRACE, i(), 0),
            b
        );
    }
    function Je(v) {
        A(v), N(v, "'");
        let b = '',
            f = '';
        const d = (S) => S !== Mo && S !== Ve;
        for (; (b = j(v, d)); ) b === '\\' ? (f += je(v)) : (f += b);
        const y = v.currentChar();
        return y === Ve || y === Pt
            ? (m(me.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0),
              y === Ve && (v.next(), N(v, "'")),
              f)
            : (N(v, "'"), f);
    }
    function je(v) {
        const b = v.currentChar();
        switch (b) {
            case '\\':
            case "'":
                return v.next(), `\\${b}`;
            case 'u':
                return Fe(v, b, 4);
            case 'U':
                return Fe(v, b, 6);
            default:
                return m(me.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, b), '';
        }
    }
    function Fe(v, b, f) {
        N(v, b);
        let d = '';
        for (let y = 0; y < f; y++) {
            const S = We(v);
            if (!S) {
                m(
                    me.INVALID_UNICODE_ESCAPE_SEQUENCE,
                    i(),
                    0,
                    `\\${b}${d}${v.currentChar()}`
                );
                break;
            }
            d += S;
        }
        return `\\${b}${d}`;
    }
    function $e(v) {
        A(v);
        let b = '',
            f = '';
        const d = (y) => y !== '{' && y !== '}' && y !== bt && y !== Ve;
        for (; (b = j(v, d)); ) f += b;
        return f;
    }
    function _t(v) {
        let b = '',
            f = '';
        for (; (b = ce(v)); ) f += b;
        return f;
    }
    function L(v) {
        const b = (f = !1, d) => {
            const y = v.currentChar();
            return y === '{' ||
                y === '%' ||
                y === '@' ||
                y === '|' ||
                !y ||
                y === bt
                ? d
                : y === Ve
                ? ((d += y), v.next(), b(f, d))
                : ((d += y), v.next(), b(!0, d));
        };
        return b(!1, '');
    }
    function G(v) {
        A(v);
        const b = N(v, '|');
        return A(v), b;
    }
    function F(v, b) {
        let f = null;
        switch (v.currentChar()) {
            case '{':
                return (
                    b.braceNest >= 1 &&
                        m(me.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0),
                    v.next(),
                    (f = p(b, 2, '{')),
                    A(v),
                    b.braceNest++,
                    f
                );
            case '}':
                return (
                    b.braceNest > 0 &&
                        b.currentType === 2 &&
                        m(me.EMPTY_PLACEHOLDER, i(), 0),
                    v.next(),
                    (f = p(b, 3, '}')),
                    b.braceNest--,
                    b.braceNest > 0 && A(v),
                    b.inLinked && b.braceNest === 0 && (b.inLinked = !1),
                    f
                );
            case '@':
                return (
                    b.braceNest > 0 && m(me.UNTERMINATED_CLOSING_BRACE, i(), 0),
                    (f = B(v, b) || _(b)),
                    (b.braceNest = 0),
                    f
                );
            default:
                let y = !0,
                    S = !0,
                    k = !0;
                if (te(v))
                    return (
                        b.braceNest > 0 &&
                            m(me.UNTERMINATED_CLOSING_BRACE, i(), 0),
                        (f = p(b, 1, G(v))),
                        (b.braceNest = 0),
                        (b.inLinked = !1),
                        f
                    );
                if (
                    b.braceNest > 0 &&
                    (b.currentType === 5 ||
                        b.currentType === 6 ||
                        b.currentType === 7)
                )
                    return (
                        m(me.UNTERMINATED_CLOSING_BRACE, i(), 0),
                        (b.braceNest = 0),
                        ae(v, b)
                    );
                if ((y = I(v, b))) return (f = p(b, 5, se(v))), A(v), f;
                if ((S = T(v, b))) return (f = p(b, 6, ke(v))), A(v), f;
                if ((k = C(v, b))) return (f = p(b, 7, Je(v))), A(v), f;
                if (!y && !S && !k)
                    return (
                        (f = p(b, 13, $e(v))),
                        m(me.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, f.value),
                        A(v),
                        f
                    );
                break;
        }
        return f;
    }
    function B(v, b) {
        const { currentType: f } = b;
        let d = null;
        const y = v.currentChar();
        switch (
            ((f === 8 || f === 9 || f === 12 || f === 10) &&
                (y === Ve || y === bt) &&
                m(me.INVALID_LINKED_FORMAT, i(), 0),
            y)
        ) {
            case '@':
                return v.next(), (d = p(b, 8, '@')), (b.inLinked = !0), d;
            case '.':
                return A(v), v.next(), p(b, 9, '.');
            case ':':
                return A(v), v.next(), p(b, 10, ':');
            default:
                return te(v)
                    ? ((d = p(b, 1, G(v))),
                      (b.braceNest = 0),
                      (b.inLinked = !1),
                      d)
                    : P(v, b) || K(v, b)
                    ? (A(v), B(v, b))
                    : R(v, b)
                    ? (A(v), p(b, 12, _t(v)))
                    : Y(v, b)
                    ? (A(v), y === '{' ? F(v, b) || d : p(b, 11, L(v)))
                    : (f === 8 && m(me.INVALID_LINKED_FORMAT, i(), 0),
                      (b.braceNest = 0),
                      (b.inLinked = !1),
                      ae(v, b));
        }
    }
    function ae(v, b) {
        let f = { type: 14 };
        if (b.braceNest > 0) return F(v, b) || _(b);
        if (b.inLinked) return B(v, b) || _(b);
        const d = v.currentChar();
        switch (d) {
            case '{':
                return F(v, b) || _(b);
            case '}':
                return (
                    m(me.UNBALANCED_CLOSING_BRACE, i(), 0),
                    v.next(),
                    p(b, 3, '}')
                );
            case '@':
                return B(v, b) || _(b);
            default:
                if (te(v))
                    return (
                        (f = p(b, 1, G(v))),
                        (b.braceNest = 0),
                        (b.inLinked = !1),
                        f
                    );
                if (J(v)) return p(b, 0, re(v));
                if (d === '%') return v.next(), p(b, 4, '%');
                break;
        }
        return f;
    }
    function ue() {
        const { currentType: v, offset: b, startLoc: f, endLoc: d } = l;
        return (
            (l.lastType = v),
            (l.lastOffset = b),
            (l.lastStartLoc = f),
            (l.lastEndLoc = d),
            (l.offset = a()),
            (l.startLoc = i()),
            r.currentChar() === Pt ? p(l, 14) : ae(r, l)
        );
    }
    return { nextToken: ue, currentOffset: a, currentPosition: i, context: c };
}
const dg = 'parser',
    mg = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function pg(e, t, n) {
    switch (e) {
        case '\\\\':
            return '\\';
        case "\\'":
            return "'";
        default: {
            const r = parseInt(t || n, 16);
            return r <= 55295 || r >= 57344
                ? String.fromCodePoint(r)
                : '\uFFFD';
        }
    }
}
function hg(e = {}) {
    const t = e.location !== !1,
        { onError: n } = e;
    function r(h, g, I, T, ...C) {
        const P = h.currentPosition();
        if (((P.offset += T), (P.column += T), n)) {
            const R = vi(I, P),
                K = Aa(g, R, { domain: dg, args: C });
            n(K);
        }
    }
    function a(h, g, I) {
        const T = { type: h, start: g, end: g };
        return t && (T.loc = { start: I, end: I }), T;
    }
    function i(h, g, I, T) {
        (h.end = g), T && (h.type = T), t && h.loc && (h.loc.end = I);
    }
    function s(h, g) {
        const I = h.context(),
            T = a(3, I.offset, I.startLoc);
        return (T.value = g), i(T, h.currentOffset(), h.currentPosition()), T;
    }
    function o(h, g) {
        const I = h.context(),
            { lastOffset: T, lastStartLoc: C } = I,
            P = a(5, T, C);
        return (
            (P.index = parseInt(g, 10)),
            h.nextToken(),
            i(P, h.currentOffset(), h.currentPosition()),
            P
        );
    }
    function l(h, g) {
        const I = h.context(),
            { lastOffset: T, lastStartLoc: C } = I,
            P = a(4, T, C);
        return (
            (P.key = g),
            h.nextToken(),
            i(P, h.currentOffset(), h.currentPosition()),
            P
        );
    }
    function c(h, g) {
        const I = h.context(),
            { lastOffset: T, lastStartLoc: C } = I,
            P = a(9, T, C);
        return (
            (P.value = g.replace(mg, pg)),
            h.nextToken(),
            i(P, h.currentOffset(), h.currentPosition()),
            P
        );
    }
    function u(h) {
        const g = h.nextToken(),
            I = h.context(),
            { lastOffset: T, lastStartLoc: C } = I,
            P = a(8, T, C);
        return g.type !== 12
            ? (r(h, me.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0),
              (P.value = ''),
              i(P, T, C),
              { nextConsumeToken: g, node: P })
            : (g.value == null &&
                  r(
                      h,
                      me.UNEXPECTED_LEXICAL_ANALYSIS,
                      I.lastStartLoc,
                      0,
                      dt(g)
                  ),
              (P.value = g.value || ''),
              i(P, h.currentOffset(), h.currentPosition()),
              { node: P });
    }
    function m(h, g) {
        const I = h.context(),
            T = a(7, I.offset, I.startLoc);
        return (T.value = g), i(T, h.currentOffset(), h.currentPosition()), T;
    }
    function p(h) {
        const g = h.context(),
            I = a(6, g.offset, g.startLoc);
        let T = h.nextToken();
        if (T.type === 9) {
            const C = u(h);
            (I.modifier = C.node), (T = C.nextConsumeToken || h.nextToken());
        }
        switch (
            (T.type !== 10 &&
                r(h, me.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, dt(T)),
            (T = h.nextToken()),
            T.type === 2 && (T = h.nextToken()),
            T.type)
        ) {
            case 11:
                T.value == null &&
                    r(
                        h,
                        me.UNEXPECTED_LEXICAL_ANALYSIS,
                        g.lastStartLoc,
                        0,
                        dt(T)
                    ),
                    (I.key = m(h, T.value || ''));
                break;
            case 5:
                T.value == null &&
                    r(
                        h,
                        me.UNEXPECTED_LEXICAL_ANALYSIS,
                        g.lastStartLoc,
                        0,
                        dt(T)
                    ),
                    (I.key = l(h, T.value || ''));
                break;
            case 6:
                T.value == null &&
                    r(
                        h,
                        me.UNEXPECTED_LEXICAL_ANALYSIS,
                        g.lastStartLoc,
                        0,
                        dt(T)
                    ),
                    (I.key = o(h, T.value || ''));
                break;
            case 7:
                T.value == null &&
                    r(
                        h,
                        me.UNEXPECTED_LEXICAL_ANALYSIS,
                        g.lastStartLoc,
                        0,
                        dt(T)
                    ),
                    (I.key = c(h, T.value || ''));
                break;
            default:
                r(h, me.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
                const C = h.context(),
                    P = a(7, C.offset, C.startLoc);
                return (
                    (P.value = ''),
                    i(P, C.offset, C.startLoc),
                    (I.key = P),
                    i(I, C.offset, C.startLoc),
                    { nextConsumeToken: T, node: I }
                );
        }
        return i(I, h.currentOffset(), h.currentPosition()), { node: I };
    }
    function _(h) {
        const g = h.context(),
            I = g.currentType === 1 ? h.currentOffset() : g.offset,
            T = g.currentType === 1 ? g.endLoc : g.startLoc,
            C = a(2, I, T);
        C.items = [];
        let P = null;
        do {
            const Y = P || h.nextToken();
            switch (((P = null), Y.type)) {
                case 0:
                    Y.value == null &&
                        r(
                            h,
                            me.UNEXPECTED_LEXICAL_ANALYSIS,
                            g.lastStartLoc,
                            0,
                            dt(Y)
                        ),
                        C.items.push(s(h, Y.value || ''));
                    break;
                case 6:
                    Y.value == null &&
                        r(
                            h,
                            me.UNEXPECTED_LEXICAL_ANALYSIS,
                            g.lastStartLoc,
                            0,
                            dt(Y)
                        ),
                        C.items.push(o(h, Y.value || ''));
                    break;
                case 5:
                    Y.value == null &&
                        r(
                            h,
                            me.UNEXPECTED_LEXICAL_ANALYSIS,
                            g.lastStartLoc,
                            0,
                            dt(Y)
                        ),
                        C.items.push(l(h, Y.value || ''));
                    break;
                case 7:
                    Y.value == null &&
                        r(
                            h,
                            me.UNEXPECTED_LEXICAL_ANALYSIS,
                            g.lastStartLoc,
                            0,
                            dt(Y)
                        ),
                        C.items.push(c(h, Y.value || ''));
                    break;
                case 8:
                    const te = p(h);
                    C.items.push(te.node), (P = te.nextConsumeToken || null);
                    break;
            }
        } while (g.currentType !== 14 && g.currentType !== 1);
        const R = g.currentType === 1 ? g.lastOffset : h.currentOffset(),
            K = g.currentType === 1 ? g.lastEndLoc : h.currentPosition();
        return i(C, R, K), C;
    }
    function N(h, g, I, T) {
        const C = h.context();
        let P = T.items.length === 0;
        const R = a(1, g, I);
        (R.cases = []), R.cases.push(T);
        do {
            const K = _(h);
            P || (P = K.items.length === 0), R.cases.push(K);
        } while (C.currentType !== 14);
        return (
            P && r(h, me.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0),
            i(R, h.currentOffset(), h.currentPosition()),
            R
        );
    }
    function O(h) {
        const g = h.context(),
            { offset: I, startLoc: T } = g,
            C = _(h);
        return g.currentType === 14 ? C : N(h, I, T, C);
    }
    function A(h) {
        const g = fg(h, Me({}, e)),
            I = g.context(),
            T = a(0, I.offset, I.startLoc);
        return (
            t && T.loc && (T.loc.source = h),
            (T.body = O(g)),
            I.currentType !== 14 &&
                r(
                    g,
                    me.UNEXPECTED_LEXICAL_ANALYSIS,
                    I.lastStartLoc,
                    0,
                    h[I.offset] || ''
                ),
            i(T, g.currentOffset(), g.currentPosition()),
            T
        );
    }
    return { parse: A };
}
function dt(e) {
    if (e.type === 14) return 'EOF';
    const t = (e.value || '').replace(/\r?\n/gu, '\\n');
    return t.length > 10 ? t.slice(0, 9) + '\u2026' : t;
}
function gg(e, t = {}) {
    const n = { ast: e, helpers: new Set() };
    return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function Do(e, t) {
    for (let n = 0; n < e.length; n++) ps(e[n], t);
}
function ps(e, t) {
    switch (e.type) {
        case 1:
            Do(e.cases, t), t.helper('plural');
            break;
        case 2:
            Do(e.items, t);
            break;
        case 6:
            ps(e.key, t), t.helper('linked');
            break;
        case 5:
            t.helper('interpolate'), t.helper('list');
            break;
        case 4:
            t.helper('interpolate'), t.helper('named');
            break;
    }
}
function vg(e, t = {}) {
    const n = gg(e);
    n.helper('normalize'), e.body && ps(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers);
}
function _g(e, t) {
    const { sourceMap: n, filename: r, breakLineCode: a, needIndent: i } = t,
        s = {
            source: e.loc.source,
            filename: r,
            code: '',
            column: 1,
            line: 1,
            offset: 0,
            map: void 0,
            breakLineCode: a,
            needIndent: i,
            indentLevel: 0
        },
        o = () => s;
    function l(O, A) {
        s.code += O;
    }
    function c(O, A = !0) {
        const h = A ? a : '';
        l(i ? h + '  '.repeat(O) : h);
    }
    function u(O = !0) {
        const A = ++s.indentLevel;
        O && c(A);
    }
    function m(O = !0) {
        const A = --s.indentLevel;
        O && c(A);
    }
    function p() {
        c(s.indentLevel);
    }
    return {
        context: o,
        push: l,
        indent: u,
        deindent: m,
        newline: p,
        helper: (O) => `_${O}`,
        needIndent: () => s.needIndent
    };
}
function bg(e, t) {
    const { helper: n } = e;
    e.push(`${n('linked')}(`),
        Fn(e, t.key),
        t.modifier && (e.push(', '), Fn(e, t.modifier)),
        e.push(')');
}
function yg(e, t) {
    const { helper: n, needIndent: r } = e;
    e.push(`${n('normalize')}([`), e.indent(r());
    const a = t.items.length;
    for (let i = 0; i < a && (Fn(e, t.items[i]), i !== a - 1); i++)
        e.push(', ');
    e.deindent(r()), e.push('])');
}
function Eg(e, t) {
    const { helper: n, needIndent: r } = e;
    if (t.cases.length > 1) {
        e.push(`${n('plural')}([`), e.indent(r());
        const a = t.cases.length;
        for (let i = 0; i < a && (Fn(e, t.cases[i]), i !== a - 1); i++)
            e.push(', ');
        e.deindent(r()), e.push('])');
    }
}
function Tg(e, t) {
    t.body ? Fn(e, t.body) : e.push('null');
}
function Fn(e, t) {
    const { helper: n } = e;
    switch (t.type) {
        case 0:
            Tg(e, t);
            break;
        case 1:
            Eg(e, t);
            break;
        case 2:
            yg(e, t);
            break;
        case 6:
            bg(e, t);
            break;
        case 8:
            e.push(JSON.stringify(t.value), t);
            break;
        case 7:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push(`${n('interpolate')}(${n('list')}(${t.index}))`, t);
            break;
        case 4:
            e.push(
                `${n('interpolate')}(${n('named')}(${JSON.stringify(t.key)}))`,
                t
            );
            break;
        case 9:
            e.push(JSON.stringify(t.value), t);
            break;
        case 3:
            e.push(JSON.stringify(t.value), t);
            break;
    }
}
const Ig = (e, t = {}) => {
    const n = H(t.mode) ? t.mode : 'normal',
        r = H(t.filename) ? t.filename : 'message.intl',
        a = !!t.sourceMap,
        i =
            t.breakLineCode != null
                ? t.breakLineCode
                : n === 'arrow'
                ? ';'
                : `
`,
        s = t.needIndent ? t.needIndent : n !== 'arrow',
        o = e.helpers || [],
        l = _g(e, {
            mode: n,
            filename: r,
            sourceMap: a,
            breakLineCode: i,
            needIndent: s
        });
    l.push(n === 'normal' ? 'function __msg__ (ctx) {' : '(ctx) => {'),
        l.indent(s),
        o.length > 0 &&
            (l.push(
                `const { ${o.map((m) => `${m}: _${m}`).join(', ')} } = ctx`
            ),
            l.newline()),
        l.push('return '),
        Fn(l, e),
        l.deindent(s),
        l.push('}');
    const { code: c, map: u } = l.context();
    return { ast: e, code: c, map: u ? u.toJSON() : void 0 };
};
function Cg(e, t = {}) {
    const n = Me({}, t),
        a = hg(n).parse(e);
    return vg(a, n), Ig(a, n);
}
/*!
 * devtools-if v9.2.0-beta.35
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const _u = {
    I18nInit: 'i18n:init',
    FunctionTranslate: 'function:translate'
};
/*!
 * core-base v9.2.0-beta.35
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const zt = [];
zt[0] = { w: [0], i: [3, 0], ['[']: [4], o: [7] };
zt[1] = { w: [1], ['.']: [2], ['[']: [4], o: [7] };
zt[2] = { w: [2], i: [3, 0], ['0']: [3, 0] };
zt[3] = {
    i: [3, 0],
    ['0']: [3, 0],
    w: [1, 1],
    ['.']: [2, 1],
    ['[']: [4, 1],
    o: [7, 1]
};
zt[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ['[']: [4, 2],
    [']']: [1, 3],
    o: 8,
    l: [4, 0]
};
zt[5] = { ["'"]: [4, 0], o: 8, l: [5, 0] };
zt[6] = { ['"']: [4, 0], o: 8, l: [6, 0] };
const Ng = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ag(e) {
    return Ng.test(e);
}
function Og(e) {
    const t = e.charCodeAt(0),
        n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function wg(e) {
    if (e == null) return 'o';
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return 'i';
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return 'w';
    }
    return 'i';
}
function Sg(e) {
    const t = e.trim();
    return e.charAt(0) === '0' && isNaN(parseInt(e))
        ? !1
        : Ag(t)
        ? Og(t)
        : '*' + t;
}
function kg(e) {
    const t = [];
    let n = -1,
        r = 0,
        a = 0,
        i,
        s,
        o,
        l,
        c,
        u,
        m;
    const p = [];
    (p[0] = () => {
        s === void 0 ? (s = o) : (s += o);
    }),
        (p[1] = () => {
            s !== void 0 && (t.push(s), (s = void 0));
        }),
        (p[2] = () => {
            p[0](), a++;
        }),
        (p[3] = () => {
            if (a > 0) a--, (r = 4), p[0]();
            else {
                if (((a = 0), s === void 0 || ((s = Sg(s)), s === !1)))
                    return !1;
                p[1]();
            }
        });
    function _() {
        const N = e[n + 1];
        if ((r === 5 && N === "'") || (r === 6 && N === '"'))
            return n++, (o = '\\' + N), p[0](), !0;
    }
    for (; r !== null; )
        if ((n++, (i = e[n]), !(i === '\\' && _()))) {
            if (
                ((l = wg(i)),
                (m = zt[r]),
                (c = m[l] || m.l || 8),
                c === 8 ||
                    ((r = c[0]),
                    c[1] !== void 0 &&
                        ((u = p[c[1]]), u && ((o = i), u() === !1))))
            )
                return;
            if (r === 7) return t;
        }
}
const Fo = new Map();
function Lg(e, t) {
    return Te(e) ? e[t] : null;
}
function Rg(e, t) {
    if (!Te(e)) return null;
    let n = Fo.get(t);
    if ((n || ((n = kg(t)), n && Fo.set(t, n)), !n)) return null;
    const r = n.length;
    let a = e,
        i = 0;
    for (; i < r; ) {
        const s = a[n[i]];
        if (s === void 0) return null;
        (a = s), i++;
    }
    return a;
}
const Pg = (e) => e,
    xg = (e) => '',
    Mg = 'text',
    Dg = (e) => (e.length === 0 ? '' : e.join('')),
    Fg = rg;
function $o(e, t) {
    return (
        (e = Math.abs(e)),
        t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
    );
}
function $g(e) {
    const t = xe(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (xe(e.named.count) || xe(e.named.n))
        ? xe(e.named.count)
            ? e.named.count
            : xe(e.named.n)
            ? e.named.n
            : t
        : t;
}
function Ug(e, t) {
    t.count || (t.count = e), t.n || (t.n = e);
}
function Hg(e = {}) {
    const t = e.locale,
        n = $g(e),
        r =
            Te(e.pluralRules) && H(t) && Ie(e.pluralRules[t])
                ? e.pluralRules[t]
                : $o,
        a = Te(e.pluralRules) && H(t) && Ie(e.pluralRules[t]) ? $o : void 0,
        i = (h) => h[r(n, h.length, a)],
        s = e.list || [],
        o = (h) => s[h],
        l = e.named || {};
    xe(e.pluralIndex) && Ug(n, l);
    const c = (h) => l[h];
    function u(h) {
        const g = Ie(e.messages)
            ? e.messages(h)
            : Te(e.messages)
            ? e.messages[h]
            : !1;
        return g || (e.parent ? e.parent.message(h) : xg);
    }
    const m = (h) => (e.modifiers ? e.modifiers[h] : Pg),
        p =
            Q(e.processor) && Ie(e.processor.normalize)
                ? e.processor.normalize
                : Dg,
        _ =
            Q(e.processor) && Ie(e.processor.interpolate)
                ? e.processor.interpolate
                : Fg,
        N = (h, g) => {
            const I = u(h)(A);
            return H(g) ? m(g)(I) : I;
        },
        O = Q(e.processor) && H(e.processor.type) ? e.processor.type : Mg,
        A = {
            list: o,
            named: c,
            plural: i,
            linked: N,
            message: u,
            type: O,
            interpolate: _,
            normalize: p
        };
    return A;
}
let Nr = null;
function Wg(e) {
    Nr = e;
}
function jg(e, t, n) {
    Nr &&
        Nr.emit(_u.I18nInit, {
            timestamp: Date.now(),
            i18n: e,
            version: t,
            meta: n
        });
}
const Gg = Vg(_u.FunctionTranslate);
function Vg(e) {
    return (t) => Nr && Nr.emit(e, t);
}
const Bg = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
};
function Yg(e, t, n) {
    return [
        ...new Set([
            n,
            ...(_e(t) ? t : Te(t) ? Object.keys(t) : H(t) ? [t] : [n])
        ])
    ];
}
function bu(e, t, n) {
    const r = H(n) ? n : Sr,
        a = e;
    a.__localeChainCache || (a.__localeChainCache = new Map());
    let i = a.__localeChainCache.get(r);
    if (!i) {
        i = [];
        let s = [n];
        for (; _e(s); ) s = Uo(i, s, t);
        const o = _e(t) || !Q(t) ? t : t.default ? t.default : null;
        (s = H(o) ? [o] : o),
            _e(s) && Uo(i, s, !1),
            a.__localeChainCache.set(r, i);
    }
    return i;
}
function Uo(e, t, n) {
    let r = !0;
    for (let a = 0; a < t.length && le(r); a++) {
        const i = t[a];
        H(i) && (r = Kg(e, t[a], n));
    }
    return r;
}
function Kg(e, t, n) {
    let r;
    const a = t.split('-');
    do {
        const i = a.join('-');
        (r = zg(e, i, n)), a.splice(-1, 1);
    } while (a.length && r === !0);
    return r;
}
function zg(e, t, n) {
    let r = !1;
    if (!e.includes(t) && ((r = !0), t)) {
        r = t[t.length - 1] !== '!';
        const a = t.replace(/!/g, '');
        e.push(a), (_e(n) || Q(n)) && n[a] && (r = n[a]);
    }
    return r;
}
const Xg = '9.2.0-beta.35',
    Oa = -1,
    Sr = 'en-US',
    Ho = '';
function qg() {
    return {
        upper: (e) => (H(e) ? e.toUpperCase() : e),
        lower: (e) => (H(e) ? e.toLowerCase() : e),
        capitalize: (e) =>
            H(e) ? `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}` : e
    };
}
let yu;
function Qg(e) {
    yu = e;
}
let Eu;
function Jg(e) {
    Eu = e;
}
let Tu;
function Zg(e) {
    Tu = e;
}
let Iu = null;
const Wo = (e) => {
        Iu = e;
    },
    ev = () => Iu;
let Cu = null;
const jo = (e) => {
        Cu = e;
    },
    tv = () => Cu;
let Go = 0;
function nv(e = {}) {
    const t = H(e.version) ? e.version : Xg,
        n = H(e.locale) ? e.locale : Sr,
        r =
            _e(e.fallbackLocale) ||
            Q(e.fallbackLocale) ||
            H(e.fallbackLocale) ||
            e.fallbackLocale === !1
                ? e.fallbackLocale
                : n,
        a = Q(e.messages) ? e.messages : { [n]: {} },
        i = Q(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} },
        s = Q(e.numberFormats) ? e.numberFormats : { [n]: {} },
        o = Me({}, e.modifiers || {}, qg()),
        l = e.pluralRules || {},
        c = Ie(e.missing) ? e.missing : null,
        u = le(e.missingWarn) || Vt(e.missingWarn) ? e.missingWarn : !0,
        m = le(e.fallbackWarn) || Vt(e.fallbackWarn) ? e.fallbackWarn : !0,
        p = !!e.fallbackFormat,
        _ = !!e.unresolving,
        N = Ie(e.postTranslation) ? e.postTranslation : null,
        O = Q(e.processor) ? e.processor : null,
        A = le(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        h = !!e.escapeParameter,
        g = Ie(e.messageCompiler) ? e.messageCompiler : yu,
        I = Ie(e.messageResolver) ? e.messageResolver : Eu || Lg,
        T = Ie(e.localeFallbacker) ? e.localeFallbacker : Tu || Yg,
        C = Te(e.fallbackContext) ? e.fallbackContext : void 0,
        P = Ie(e.onWarn) ? e.onWarn : tg,
        R = e,
        K = Te(R.__datetimeFormatters) ? R.__datetimeFormatters : new Map(),
        Y = Te(R.__numberFormatters) ? R.__numberFormatters : new Map(),
        te = Te(R.__meta) ? R.__meta : {};
    Go++;
    const J = {
        version: t,
        cid: Go,
        locale: n,
        fallbackLocale: r,
        messages: a,
        modifiers: o,
        pluralRules: l,
        missing: c,
        missingWarn: u,
        fallbackWarn: m,
        fallbackFormat: p,
        unresolving: _,
        postTranslation: N,
        processor: O,
        warnHtmlMessage: A,
        escapeParameter: h,
        messageCompiler: g,
        messageResolver: I,
        localeFallbacker: T,
        fallbackContext: C,
        onWarn: P,
        __meta: te
    };
    return (
        (J.datetimeFormats = i),
        (J.numberFormats = s),
        (J.__datetimeFormatters = K),
        (J.__numberFormatters = Y),
        __INTLIFY_PROD_DEVTOOLS__ && jg(J, t, te),
        J
    );
}
function hs(e, t, n, r, a) {
    const { missing: i, onWarn: s } = e;
    if (i !== null) {
        const o = i(e, n, t, a);
        return H(o) ? o : t;
    } else return t;
}
function Qn(e, t, n) {
    const r = e;
    (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
const rv = (e) => e;
let Vo = Object.create(null);
function av(e, t = {}) {
    {
        const r = (t.onCacheKey || rv)(e),
            a = Vo[r];
        if (a) return a;
        let i = !1;
        const s = t.onError || ag;
        t.onError = (c) => {
            (i = !0), s(c);
        };
        const { code: o } = Cg(e, t),
            l = new Function(`return ${o}`)();
        return i ? l : (Vo[r] = l);
    }
}
let Nu = me.__EXTEND_POINT__;
const Ka = () => ++Nu,
    In = {
        INVALID_ARGUMENT: Nu,
        INVALID_DATE_ARGUMENT: Ka(),
        INVALID_ISO_DATE_ARGUMENT: Ka(),
        __EXTEND_POINT__: Ka()
    };
function Cn(e) {
    return Aa(e, null, void 0);
}
const Bo = () => '',
    ht = (e) => Ie(e);
function Yo(e, ...t) {
    const {
            fallbackFormat: n,
            postTranslation: r,
            unresolving: a,
            messageCompiler: i,
            fallbackLocale: s,
            messages: o
        } = e,
        [l, c] = _i(...t),
        u = le(c.missingWarn) ? c.missingWarn : e.missingWarn,
        m = le(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
        p = le(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
        _ = !!c.resolvedMessage,
        N =
            H(c.default) || le(c.default)
                ? le(c.default)
                    ? i
                        ? l
                        : () => l
                    : c.default
                : n
                ? i
                    ? l
                    : () => l
                : '',
        O = n || N !== '',
        A = H(c.locale) ? c.locale : e.locale;
    p && iv(c);
    let [h, g, I] = _ ? [l, A, o[A] || {}] : Au(e, l, A, s, m, u),
        T = h,
        C = l;
    if (
        (!_ && !(H(T) || ht(T)) && O && ((T = N), (C = T)),
        !_ && (!(H(T) || ht(T)) || !H(g)))
    )
        return a ? Oa : l;
    let P = !1;
    const R = () => {
            P = !0;
        },
        K = ht(T) ? T : Ou(e, l, g, T, C, R);
    if (P) return T;
    const Y = lv(e, g, I, c),
        te = Hg(Y),
        J = sv(e, K, te),
        j = r ? r(J) : J;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const ce = {
            timestamp: Date.now(),
            key: H(l) ? l : ht(T) ? T.key : '',
            locale: g || (ht(T) ? T.locale : ''),
            format: H(T) ? T : ht(T) ? T.source : '',
            message: j
        };
        (ce.meta = Me({}, e.__meta, ev() || {})), Gg(ce);
    }
    return j;
}
function iv(e) {
    _e(e.list)
        ? (e.list = e.list.map((t) => (H(t) ? xo(t) : t)))
        : Te(e.named) &&
          Object.keys(e.named).forEach((t) => {
              H(e.named[t]) && (e.named[t] = xo(e.named[t]));
          });
}
function Au(e, t, n, r, a, i) {
    const {
            messages: s,
            onWarn: o,
            messageResolver: l,
            localeFallbacker: c
        } = e,
        u = c(e, r, n);
    let m = {},
        p,
        _ = null;
    const N = 'translate';
    for (
        let O = 0;
        O < u.length &&
        ((p = u[O]),
        (m = s[p] || {}),
        (_ = l(m, t)) === null && (_ = m[t]),
        !(H(_) || Ie(_)));
        O++
    ) {
        const A = hs(e, t, p, i, N);
        A !== t && (_ = A);
    }
    return [_, p, m];
}
function Ou(e, t, n, r, a, i) {
    const { messageCompiler: s, warnHtmlMessage: o } = e;
    if (ht(r)) {
        const c = r;
        return (c.locale = c.locale || n), (c.key = c.key || t), c;
    }
    if (s == null) {
        const c = () => r;
        return (c.locale = n), (c.key = t), c;
    }
    const l = s(r, ov(e, n, a, r, o, i));
    return (l.locale = n), (l.key = t), (l.source = r), l;
}
function sv(e, t, n) {
    return t(n);
}
function _i(...e) {
    const [t, n, r] = e,
        a = {};
    if (!H(t) && !xe(t) && !ht(t)) throw Cn(In.INVALID_ARGUMENT);
    const i = xe(t) ? String(t) : (ht(t), t);
    return (
        xe(n)
            ? (a.plural = n)
            : H(n)
            ? (a.default = n)
            : Q(n) && !Na(n)
            ? (a.named = n)
            : _e(n) && (a.list = n),
        xe(r) ? (a.plural = r) : H(r) ? (a.default = r) : Q(r) && Me(a, r),
        [i, a]
    );
}
function ov(e, t, n, r, a, i) {
    return {
        warnHtmlMessage: a,
        onError: (s) => {
            throw (i && i(s), s);
        },
        onCacheKey: (s) => Jh(t, n, s)
    };
}
function lv(e, t, n, r) {
    const {
            modifiers: a,
            pluralRules: i,
            messageResolver: s,
            fallbackLocale: o,
            fallbackWarn: l,
            missingWarn: c,
            fallbackContext: u
        } = e,
        p = {
            locale: t,
            modifiers: a,
            pluralRules: i,
            messages: (_) => {
                let N = s(n, _);
                if (N == null && u) {
                    const [, , O] = Au(u, _, t, o, l, c);
                    N = s(O, _);
                }
                if (H(N)) {
                    let O = !1;
                    const h = Ou(e, _, t, N, _, () => {
                        O = !0;
                    });
                    return O ? Bo : h;
                } else return ht(N) ? N : Bo;
            }
        };
    return (
        e.processor && (p.processor = e.processor),
        r.list && (p.list = r.list),
        r.named && (p.named = r.named),
        xe(r.plural) && (p.pluralIndex = r.plural),
        p
    );
}
function Ko(e, ...t) {
    const {
            datetimeFormats: n,
            unresolving: r,
            fallbackLocale: a,
            onWarn: i,
            localeFallbacker: s
        } = e,
        { __datetimeFormatters: o } = e,
        [l, c, u, m] = bi(...t),
        p = le(u.missingWarn) ? u.missingWarn : e.missingWarn;
    le(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const _ = !!u.part,
        N = H(u.locale) ? u.locale : e.locale,
        O = s(e, a, N);
    if (!H(l) || l === '') return new Intl.DateTimeFormat(N).format(c);
    let A = {},
        h,
        g = null;
    const I = 'datetime format';
    for (
        let P = 0;
        P < O.length && ((h = O[P]), (A = n[h] || {}), (g = A[l]), !Q(g));
        P++
    )
        hs(e, l, h, p, I);
    if (!Q(g) || !H(h)) return r ? Oa : l;
    let T = `${h}__${l}`;
    Na(m) || (T = `${T}__${JSON.stringify(m)}`);
    let C = o.get(T);
    return (
        C || ((C = new Intl.DateTimeFormat(h, Me({}, g, m))), o.set(T, C)),
        _ ? C.formatToParts(c) : C.format(c)
    );
}
function bi(...e) {
    const [t, n, r, a] = e;
    let i = {},
        s = {},
        o;
    if (H(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l) throw Cn(In.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3]
            ? l[3].trim().startsWith('T')
                ? `${l[1].trim()}${l[3].trim()}`
                : `${l[1].trim()}T${l[3].trim()}`
            : l[1].trim();
        o = new Date(c);
        try {
            o.toISOString();
        } catch {
            throw Cn(In.INVALID_ISO_DATE_ARGUMENT);
        }
    } else if (eg(t)) {
        if (isNaN(t.getTime())) throw Cn(In.INVALID_DATE_ARGUMENT);
        o = t;
    } else if (xe(t)) o = t;
    else throw Cn(In.INVALID_ARGUMENT);
    return (
        H(n) ? (i.key = n) : Q(n) && (i = n),
        H(r) ? (i.locale = r) : Q(r) && (s = r),
        Q(a) && (s = a),
        [i.key || '', o, i, s]
    );
}
function zo(e, t, n) {
    const r = e;
    for (const a in n) {
        const i = `${t}__${a}`;
        !r.__datetimeFormatters.has(i) || r.__datetimeFormatters.delete(i);
    }
}
function Xo(e, ...t) {
    const {
            numberFormats: n,
            unresolving: r,
            fallbackLocale: a,
            onWarn: i,
            localeFallbacker: s
        } = e,
        { __numberFormatters: o } = e,
        [l, c, u, m] = yi(...t),
        p = le(u.missingWarn) ? u.missingWarn : e.missingWarn;
    le(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const _ = !!u.part,
        N = H(u.locale) ? u.locale : e.locale,
        O = s(e, a, N);
    if (!H(l) || l === '') return new Intl.NumberFormat(N).format(c);
    let A = {},
        h,
        g = null;
    const I = 'number format';
    for (
        let P = 0;
        P < O.length && ((h = O[P]), (A = n[h] || {}), (g = A[l]), !Q(g));
        P++
    )
        hs(e, l, h, p, I);
    if (!Q(g) || !H(h)) return r ? Oa : l;
    let T = `${h}__${l}`;
    Na(m) || (T = `${T}__${JSON.stringify(m)}`);
    let C = o.get(T);
    return (
        C || ((C = new Intl.NumberFormat(h, Me({}, g, m))), o.set(T, C)),
        _ ? C.formatToParts(c) : C.format(c)
    );
}
function yi(...e) {
    const [t, n, r, a] = e;
    let i = {},
        s = {};
    if (!xe(t)) throw Cn(In.INVALID_ARGUMENT);
    const o = t;
    return (
        H(n) ? (i.key = n) : Q(n) && (i = n),
        H(r) ? (i.locale = r) : Q(r) && (s = r),
        Q(a) && (s = a),
        [i.key || '', o, i, s]
    );
}
function qo(e, t, n) {
    const r = e;
    for (const a in n) {
        const i = `${t}__${a}`;
        !r.__numberFormatters.has(i) || r.__numberFormatters.delete(i);
    }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != 'boolean' &&
    (ur().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
 * vue-i18n v9.2.0-beta.35
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const cv = '9.2.0-beta.35';
function uv() {
    typeof __VUE_I18N_FULL_INSTALL__ != 'boolean' &&
        (ur().__VUE_I18N_FULL_INSTALL__ = !0),
        typeof __VUE_I18N_LEGACY_API__ != 'boolean' &&
            (ur().__VUE_I18N_LEGACY_API__ = !0),
        typeof __INTLIFY_PROD_DEVTOOLS__ != 'boolean' &&
            (ur().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
Bg.__EXTEND_POINT__;
let wu = me.__EXTEND_POINT__;
const Ye = () => ++wu,
    Oe = {
        UNEXPECTED_RETURN_TYPE: wu,
        INVALID_ARGUMENT: Ye(),
        MUST_BE_CALL_SETUP_TOP: Ye(),
        NOT_INSLALLED: Ye(),
        NOT_AVAILABLE_IN_LEGACY_MODE: Ye(),
        REQUIRED_VALUE: Ye(),
        INVALID_VALUE: Ye(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ye(),
        NOT_INSLALLED_WITH_PROVIDE: Ye(),
        UNEXPECTED_ERROR: Ye(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: Ye(),
        BRIDGE_SUPPORT_VUE_2_ONLY: Ye(),
        MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ye(),
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ye(),
        __EXTEND_POINT__: Ye()
    };
function Re(e, ...t) {
    return Aa(e, null, void 0);
}
const Ei = Kt('__transrateVNode'),
    Ti = Kt('__datetimeParts'),
    Ii = Kt('__numberParts'),
    Su = Kt('__setPluralRules');
Kt('__intlifyMeta');
const ku = Kt('__injectWithOption');
function Ci(e) {
    if (!Te(e)) return e;
    for (const t in e)
        if (!!ds(e, t))
            if (!t.includes('.')) Te(e[t]) && Ci(e[t]);
            else {
                const n = t.split('.'),
                    r = n.length - 1;
                let a = e;
                for (let i = 0; i < r; i++)
                    n[i] in a || (a[n[i]] = {}), (a = a[n[i]]);
                (a[n[r]] = e[t]), delete e[t], Te(a[n[r]]) && Ci(a[n[r]]);
            }
    return e;
}
function wa(e, t) {
    const { messages: n, __i18n: r, messageResolver: a, flatJson: i } = t,
        s = Q(n) ? n : _e(r) ? {} : { [e]: {} };
    if (
        (_e(r) &&
            r.forEach((o) => {
                if ('locale' in o && 'resource' in o) {
                    const { locale: l, resource: c } = o;
                    l ? ((s[l] = s[l] || {}), fr(c, s[l])) : fr(c, s);
                } else H(o) && fr(JSON.parse(o), s);
            }),
        a == null && i)
    )
        for (const o in s) ds(s, o) && Ci(s[o]);
    return s;
}
const Fr = (e) => !Te(e) || _e(e);
function fr(e, t) {
    if (Fr(e) || Fr(t)) throw Re(Oe.INVALID_VALUE);
    for (const n in e)
        ds(e, n) && (Fr(e[n]) || Fr(t[n]) ? (t[n] = e[n]) : fr(e[n], t[n]));
}
function Lu(e) {
    return e.type;
}
function Ru(e, t, n) {
    let r = Te(t.messages) ? t.messages : {};
    '__i18nGlobal' in n &&
        (r = wa(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
    const a = Object.keys(r);
    a.length &&
        a.forEach((i) => {
            e.mergeLocaleMessage(i, r[i]);
        });
    {
        if (Te(t.datetimeFormats)) {
            const i = Object.keys(t.datetimeFormats);
            i.length &&
                i.forEach((s) => {
                    e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
                });
        }
        if (Te(t.numberFormats)) {
            const i = Object.keys(t.numberFormats);
            i.length &&
                i.forEach((s) => {
                    e.mergeNumberFormat(s, t.numberFormats[s]);
                });
        }
    }
}
function Qo(e) {
    return Ee(_a, null, e, 0);
}
const Jo = '__INTLIFY_META__';
let Zo = 0;
function el(e) {
    return (t, n, r, a) => e(n, r, Gt() || void 0, a);
}
const fv = () => {
    const e = Gt();
    let t = null;
    return e && (t = Lu(e)[Jo]) ? { [Jo]: t } : null;
};
function gs(e = {}, t) {
    const { __root: n } = e,
        r = n === void 0;
    let a = le(e.inheritLocale) ? e.inheritLocale : !0;
    const i = Ce(n && a ? n.locale.value : H(e.locale) ? e.locale : Sr),
        s = Ce(
            n && a
                ? n.fallbackLocale.value
                : H(e.fallbackLocale) ||
                  _e(e.fallbackLocale) ||
                  Q(e.fallbackLocale) ||
                  e.fallbackLocale === !1
                ? e.fallbackLocale
                : i.value
        ),
        o = Ce(wa(i.value, e)),
        l = Ce(Q(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }),
        c = Ce(Q(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
    let u = n
            ? n.missingWarn
            : le(e.missingWarn) || Vt(e.missingWarn)
            ? e.missingWarn
            : !0,
        m = n
            ? n.fallbackWarn
            : le(e.fallbackWarn) || Vt(e.fallbackWarn)
            ? e.fallbackWarn
            : !0,
        p = n ? n.fallbackRoot : le(e.fallbackRoot) ? e.fallbackRoot : !0,
        _ = !!e.fallbackFormat,
        N = Ie(e.missing) ? e.missing : null,
        O = Ie(e.missing) ? el(e.missing) : null,
        A = Ie(e.postTranslation) ? e.postTranslation : null,
        h = n
            ? n.warnHtmlMessage
            : le(e.warnHtmlMessage)
            ? e.warnHtmlMessage
            : !0,
        g = !!e.escapeParameter;
    const I = n ? n.modifiers : Q(e.modifiers) ? e.modifiers : {};
    let T = e.pluralRules || (n && n.pluralRules),
        C;
    function P() {
        r && jo(null);
        const E = {
            version: cv,
            locale: i.value,
            fallbackLocale: s.value,
            messages: o.value,
            modifiers: I,
            pluralRules: T,
            missing: O === null ? void 0 : O,
            missingWarn: u,
            fallbackWarn: m,
            fallbackFormat: _,
            unresolving: !0,
            postTranslation: A === null ? void 0 : A,
            warnHtmlMessage: h,
            escapeParameter: g,
            messageResolver: e.messageResolver,
            __meta: { framework: 'vue' }
        };
        (E.datetimeFormats = l.value),
            (E.numberFormats = c.value),
            (E.__datetimeFormatters = Q(C) ? C.__datetimeFormatters : void 0),
            (E.__numberFormatters = Q(C) ? C.__numberFormatters : void 0);
        const w = nv(E);
        return r && jo(w), w;
    }
    (C = P()), Qn(C, i.value, s.value);
    function R() {
        return [i.value, s.value, o.value, l.value, c.value];
    }
    const K = ee({
            get: () => i.value,
            set: (E) => {
                (i.value = E), (C.locale = i.value);
            }
        }),
        Y = ee({
            get: () => s.value,
            set: (E) => {
                (s.value = E), (C.fallbackLocale = s.value), Qn(C, i.value, E);
            }
        }),
        te = ee(() => o.value),
        J = ee(() => l.value),
        j = ee(() => c.value);
    function ce() {
        return Ie(A) ? A : null;
    }
    function Ne(E) {
        (A = E), (C.postTranslation = E);
    }
    function We() {
        return N;
    }
    function ie(E) {
        E !== null && (O = el(E)), (N = E), (C.missing = O);
    }
    function re(E, w, U, W, X, ne) {
        R();
        let de;
        if (__INTLIFY_PROD_DEVTOOLS__)
            try {
                Wo(fv()),
                    r || (C.fallbackContext = n ? tv() : void 0),
                    (de = E(C));
            } finally {
                Wo(null), r || (C.fallbackContext = void 0);
            }
        else de = E(C);
        if (xe(de) && de === Oa) {
            const [pe, ve] = w();
            return n && p ? W(n) : X(pe);
        } else {
            if (ne(de)) return de;
            throw Re(Oe.UNEXPECTED_RETURN_TYPE);
        }
    }
    function se(...E) {
        return re(
            (w) => Reflect.apply(Yo, null, [w, ...E]),
            () => _i(...E),
            'translate',
            (w) => Reflect.apply(w.t, w, [...E]),
            (w) => w,
            (w) => H(w)
        );
    }
    function ke(...E) {
        const [w, U, W] = E;
        if (W && !Te(W)) throw Re(Oe.INVALID_ARGUMENT);
        return se(w, U, Me({ resolvedMessage: !0 }, W || {}));
    }
    function Je(...E) {
        return re(
            (w) => Reflect.apply(Ko, null, [w, ...E]),
            () => bi(...E),
            'datetime format',
            (w) => Reflect.apply(w.d, w, [...E]),
            () => Ho,
            (w) => H(w)
        );
    }
    function je(...E) {
        return re(
            (w) => Reflect.apply(Xo, null, [w, ...E]),
            () => yi(...E),
            'number format',
            (w) => Reflect.apply(w.n, w, [...E]),
            () => Ho,
            (w) => H(w)
        );
    }
    function Fe(E) {
        return E.map((w) => (H(w) ? Qo(w) : w));
    }
    const _t = { normalize: Fe, interpolate: (E) => E, type: 'vnode' };
    function L(...E) {
        return re(
            (w) => {
                let U;
                const W = w;
                try {
                    (W.processor = _t),
                        (U = Reflect.apply(Yo, null, [W, ...E]));
                } finally {
                    W.processor = null;
                }
                return U;
            },
            () => _i(...E),
            'translate',
            (w) => w[Ei](...E),
            (w) => [Qo(w)],
            (w) => _e(w)
        );
    }
    function G(...E) {
        return re(
            (w) => Reflect.apply(Xo, null, [w, ...E]),
            () => yi(...E),
            'number format',
            (w) => w[Ii](...E),
            () => [],
            (w) => H(w) || _e(w)
        );
    }
    function F(...E) {
        return re(
            (w) => Reflect.apply(Ko, null, [w, ...E]),
            () => bi(...E),
            'datetime format',
            (w) => w[Ti](...E),
            () => [],
            (w) => H(w) || _e(w)
        );
    }
    function B(E) {
        (T = E), (C.pluralRules = T);
    }
    function ae(E, w) {
        const U = H(w) ? w : i.value,
            W = b(U);
        return C.messageResolver(W, E) !== null;
    }
    function ue(E) {
        let w = null;
        const U = bu(C, s.value, i.value);
        for (let W = 0; W < U.length; W++) {
            const X = o.value[U[W]] || {},
                ne = C.messageResolver(X, E);
            if (ne != null) {
                w = ne;
                break;
            }
        }
        return w;
    }
    function v(E) {
        const w = ue(E);
        return w != null ? w : n ? n.tm(E) || {} : {};
    }
    function b(E) {
        return o.value[E] || {};
    }
    function f(E, w) {
        (o.value[E] = w), (C.messages = o.value);
    }
    function d(E, w) {
        (o.value[E] = o.value[E] || {}),
            fr(w, o.value[E]),
            (C.messages = o.value);
    }
    function y(E) {
        return l.value[E] || {};
    }
    function S(E, w) {
        (l.value[E] = w), (C.datetimeFormats = l.value), zo(C, E, w);
    }
    function k(E, w) {
        (l.value[E] = Me(l.value[E] || {}, w)),
            (C.datetimeFormats = l.value),
            zo(C, E, w);
    }
    function M(E) {
        return c.value[E] || {};
    }
    function $(E, w) {
        (c.value[E] = w), (C.numberFormats = c.value), qo(C, E, w);
    }
    function D(E, w) {
        (c.value[E] = Me(c.value[E] || {}, w)),
            (C.numberFormats = c.value),
            qo(C, E, w);
    }
    Zo++,
        n &&
            qh &&
            (ct(n.locale, (E) => {
                a && ((i.value = E), (C.locale = E), Qn(C, i.value, s.value));
            }),
            ct(n.fallbackLocale, (E) => {
                a &&
                    ((s.value = E),
                    (C.fallbackLocale = E),
                    Qn(C, i.value, s.value));
            }));
    const x = {
        id: Zo,
        locale: K,
        fallbackLocale: Y,
        get inheritLocale() {
            return a;
        },
        set inheritLocale(E) {
            (a = E),
                E &&
                    n &&
                    ((i.value = n.locale.value),
                    (s.value = n.fallbackLocale.value),
                    Qn(C, i.value, s.value));
        },
        get availableLocales() {
            return Object.keys(o.value).sort();
        },
        messages: te,
        get modifiers() {
            return I;
        },
        get pluralRules() {
            return T || {};
        },
        get isGlobal() {
            return r;
        },
        get missingWarn() {
            return u;
        },
        set missingWarn(E) {
            (u = E), (C.missingWarn = u);
        },
        get fallbackWarn() {
            return m;
        },
        set fallbackWarn(E) {
            (m = E), (C.fallbackWarn = m);
        },
        get fallbackRoot() {
            return p;
        },
        set fallbackRoot(E) {
            p = E;
        },
        get fallbackFormat() {
            return _;
        },
        set fallbackFormat(E) {
            (_ = E), (C.fallbackFormat = _);
        },
        get warnHtmlMessage() {
            return h;
        },
        set warnHtmlMessage(E) {
            (h = E), (C.warnHtmlMessage = E);
        },
        get escapeParameter() {
            return g;
        },
        set escapeParameter(E) {
            (g = E), (C.escapeParameter = E);
        },
        t: se,
        getLocaleMessage: b,
        setLocaleMessage: f,
        mergeLocaleMessage: d,
        getPostTranslationHandler: ce,
        setPostTranslationHandler: Ne,
        getMissingHandler: We,
        setMissingHandler: ie,
        [Su]: B
    };
    return (
        (x.datetimeFormats = J),
        (x.numberFormats = j),
        (x.rt = ke),
        (x.te = ae),
        (x.tm = v),
        (x.d = Je),
        (x.n = je),
        (x.getDateTimeFormat = y),
        (x.setDateTimeFormat = S),
        (x.mergeDateTimeFormat = k),
        (x.getNumberFormat = M),
        (x.setNumberFormat = $),
        (x.mergeNumberFormat = D),
        (x[ku] = e.__injectWithOption),
        (x[Ei] = L),
        (x[Ti] = F),
        (x[Ii] = G),
        x
    );
}
function dv(e) {
    const t = H(e.locale) ? e.locale : Sr,
        n =
            H(e.fallbackLocale) ||
            _e(e.fallbackLocale) ||
            Q(e.fallbackLocale) ||
            e.fallbackLocale === !1
                ? e.fallbackLocale
                : t,
        r = Ie(e.missing) ? e.missing : void 0,
        a =
            le(e.silentTranslationWarn) || Vt(e.silentTranslationWarn)
                ? !e.silentTranslationWarn
                : !0,
        i =
            le(e.silentFallbackWarn) || Vt(e.silentFallbackWarn)
                ? !e.silentFallbackWarn
                : !0,
        s = le(e.fallbackRoot) ? e.fallbackRoot : !0,
        o = !!e.formatFallbackMessages,
        l = Q(e.modifiers) ? e.modifiers : {},
        c = e.pluralizationRules,
        u = Ie(e.postTranslation) ? e.postTranslation : void 0,
        m = H(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== 'off' : !0,
        p = !!e.escapeParameterHtml,
        _ = le(e.sync) ? e.sync : !0;
    let N = e.messages;
    if (Q(e.sharedMessages)) {
        const C = e.sharedMessages;
        N = Object.keys(C).reduce((R, K) => {
            const Y = R[K] || (R[K] = {});
            return Me(Y, C[K]), R;
        }, N || {});
    }
    const { __i18n: O, __root: A, __injectWithOption: h } = e,
        g = e.datetimeFormats,
        I = e.numberFormats,
        T = e.flatJson;
    return {
        locale: t,
        fallbackLocale: n,
        messages: N,
        flatJson: T,
        datetimeFormats: g,
        numberFormats: I,
        missing: r,
        missingWarn: a,
        fallbackWarn: i,
        fallbackRoot: s,
        fallbackFormat: o,
        modifiers: l,
        pluralRules: c,
        postTranslation: u,
        warnHtmlMessage: m,
        escapeParameter: p,
        messageResolver: e.messageResolver,
        inheritLocale: _,
        __i18n: O,
        __root: A,
        __injectWithOption: h
    };
}
function Ni(e = {}, t) {
    {
        const n = gs(dv(e)),
            r = {
                id: n.id,
                get locale() {
                    return n.locale.value;
                },
                set locale(a) {
                    n.locale.value = a;
                },
                get fallbackLocale() {
                    return n.fallbackLocale.value;
                },
                set fallbackLocale(a) {
                    n.fallbackLocale.value = a;
                },
                get messages() {
                    return n.messages.value;
                },
                get datetimeFormats() {
                    return n.datetimeFormats.value;
                },
                get numberFormats() {
                    return n.numberFormats.value;
                },
                get availableLocales() {
                    return n.availableLocales;
                },
                get formatter() {
                    return {
                        interpolate() {
                            return [];
                        }
                    };
                },
                set formatter(a) {},
                get missing() {
                    return n.getMissingHandler();
                },
                set missing(a) {
                    n.setMissingHandler(a);
                },
                get silentTranslationWarn() {
                    return le(n.missingWarn) ? !n.missingWarn : n.missingWarn;
                },
                set silentTranslationWarn(a) {
                    n.missingWarn = le(a) ? !a : a;
                },
                get silentFallbackWarn() {
                    return le(n.fallbackWarn)
                        ? !n.fallbackWarn
                        : n.fallbackWarn;
                },
                set silentFallbackWarn(a) {
                    n.fallbackWarn = le(a) ? !a : a;
                },
                get modifiers() {
                    return n.modifiers;
                },
                get formatFallbackMessages() {
                    return n.fallbackFormat;
                },
                set formatFallbackMessages(a) {
                    n.fallbackFormat = a;
                },
                get postTranslation() {
                    return n.getPostTranslationHandler();
                },
                set postTranslation(a) {
                    n.setPostTranslationHandler(a);
                },
                get sync() {
                    return n.inheritLocale;
                },
                set sync(a) {
                    n.inheritLocale = a;
                },
                get warnHtmlInMessage() {
                    return n.warnHtmlMessage ? 'warn' : 'off';
                },
                set warnHtmlInMessage(a) {
                    n.warnHtmlMessage = a !== 'off';
                },
                get escapeParameterHtml() {
                    return n.escapeParameter;
                },
                set escapeParameterHtml(a) {
                    n.escapeParameter = a;
                },
                get preserveDirectiveContent() {
                    return !0;
                },
                set preserveDirectiveContent(a) {},
                get pluralizationRules() {
                    return n.pluralRules || {};
                },
                __composer: n,
                t(...a) {
                    const [i, s, o] = a,
                        l = {};
                    let c = null,
                        u = null;
                    if (!H(i)) throw Re(Oe.INVALID_ARGUMENT);
                    const m = i;
                    return (
                        H(s)
                            ? (l.locale = s)
                            : _e(s)
                            ? (c = s)
                            : Q(s) && (u = s),
                        _e(o) ? (c = o) : Q(o) && (u = o),
                        Reflect.apply(n.t, n, [m, c || u || {}, l])
                    );
                },
                rt(...a) {
                    return Reflect.apply(n.rt, n, [...a]);
                },
                tc(...a) {
                    const [i, s, o] = a,
                        l = { plural: 1 };
                    let c = null,
                        u = null;
                    if (!H(i)) throw Re(Oe.INVALID_ARGUMENT);
                    const m = i;
                    return (
                        H(s)
                            ? (l.locale = s)
                            : xe(s)
                            ? (l.plural = s)
                            : _e(s)
                            ? (c = s)
                            : Q(s) && (u = s),
                        H(o)
                            ? (l.locale = o)
                            : _e(o)
                            ? (c = o)
                            : Q(o) && (u = o),
                        Reflect.apply(n.t, n, [m, c || u || {}, l])
                    );
                },
                te(a, i) {
                    return n.te(a, i);
                },
                tm(a) {
                    return n.tm(a);
                },
                getLocaleMessage(a) {
                    return n.getLocaleMessage(a);
                },
                setLocaleMessage(a, i) {
                    n.setLocaleMessage(a, i);
                },
                mergeLocaleMessage(a, i) {
                    n.mergeLocaleMessage(a, i);
                },
                d(...a) {
                    return Reflect.apply(n.d, n, [...a]);
                },
                getDateTimeFormat(a) {
                    return n.getDateTimeFormat(a);
                },
                setDateTimeFormat(a, i) {
                    n.setDateTimeFormat(a, i);
                },
                mergeDateTimeFormat(a, i) {
                    n.mergeDateTimeFormat(a, i);
                },
                n(...a) {
                    return Reflect.apply(n.n, n, [...a]);
                },
                getNumberFormat(a) {
                    return n.getNumberFormat(a);
                },
                setNumberFormat(a, i) {
                    n.setNumberFormat(a, i);
                },
                mergeNumberFormat(a, i) {
                    n.mergeNumberFormat(a, i);
                },
                getChoiceIndex(a, i) {
                    return -1;
                },
                __onComponentInstanceCreated(a) {
                    const { componentInstanceCreatedListener: i } = e;
                    i && i(a, r);
                }
            };
        return r;
    }
}
const vs = {
    tag: { type: [String, Object] },
    locale: { type: String },
    scope: {
        type: String,
        validator: (e) => e === 'parent' || e === 'global',
        default: 'parent'
    },
    i18n: { type: Object }
};
function mv({ slots: e }, t) {
    return t.length === 1 && t[0] === 'default'
        ? (e.default ? e.default() : []).reduce(
              (r, a) => (r = [...r, ...(_e(a.children) ? a.children : [a])]),
              []
          )
        : t.reduce((n, r) => {
              const a = e[r];
              return a && (n[r] = a()), n;
          }, {});
}
function Pu(e) {
    return Ae;
}
const tl = {
    name: 'i18n-t',
    props: Me(
        {
            keypath: { type: String, required: !0 },
            plural: {
                type: [Number, String],
                validator: (e) => xe(e) || !isNaN(e)
            }
        },
        vs
    ),
    setup(e, t) {
        const { slots: n, attrs: r } = t,
            a = e.i18n || kr({ useScope: e.scope, __useComponent: !0 }),
            i = Object.keys(n).filter((s) => s !== '_');
        return () => {
            const s = {};
            e.locale && (s.locale = e.locale),
                e.plural !== void 0 &&
                    (s.plural = H(e.plural) ? +e.plural : e.plural);
            const o = mv(t, i),
                l = a[Ei](e.keypath, o, s),
                c = Me({}, r),
                u = H(e.tag) || Te(e.tag) ? e.tag : Pu();
            return mn(u, c, l);
        };
    }
};
function pv(e) {
    return _e(e) && !H(e[0]);
}
function xu(e, t, n, r) {
    const { slots: a, attrs: i } = t;
    return () => {
        const s = { part: !0 };
        let o = {};
        e.locale && (s.locale = e.locale),
            H(e.format)
                ? (s.key = e.format)
                : Te(e.format) &&
                  (H(e.format.key) && (s.key = e.format.key),
                  (o = Object.keys(e.format).reduce(
                      (p, _) =>
                          n.includes(_) ? Me({}, p, { [_]: e.format[_] }) : p,
                      {}
                  )));
        const l = r(e.value, s, o);
        let c = [s.key];
        _e(l)
            ? (c = l.map((p, _) => {
                  const N = a[p.type],
                      O = N
                          ? N({ [p.type]: p.value, index: _, parts: l })
                          : [p.value];
                  return pv(O) && (O[0].key = `${p.type}-${_}`), O;
              }))
            : H(l) && (c = [l]);
        const u = Me({}, i),
            m = H(e.tag) || Te(e.tag) ? e.tag : Pu();
        return mn(m, u, c);
    };
}
const hv = [
        'localeMatcher',
        'style',
        'unit',
        'unitDisplay',
        'currency',
        'currencyDisplay',
        'useGrouping',
        'numberingSystem',
        'minimumIntegerDigits',
        'minimumFractionDigits',
        'maximumFractionDigits',
        'minimumSignificantDigits',
        'maximumSignificantDigits',
        'notation',
        'formatMatcher'
    ],
    nl = {
        name: 'i18n-n',
        props: Me(
            {
                value: { type: Number, required: !0 },
                format: { type: [String, Object] }
            },
            vs
        ),
        setup(e, t) {
            const n = e.i18n || kr({ useScope: 'parent', __useComponent: !0 });
            return xu(e, t, hv, (...r) => n[Ii](...r));
        }
    },
    gv = [
        'dateStyle',
        'timeStyle',
        'fractionalSecondDigits',
        'calendar',
        'dayPeriod',
        'numberingSystem',
        'localeMatcher',
        'timeZone',
        'hour12',
        'hourCycle',
        'formatMatcher',
        'weekday',
        'era',
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'timeZoneName'
    ],
    rl = {
        name: 'i18n-d',
        props: Me(
            {
                value: { type: [Number, Date], required: !0 },
                format: { type: [String, Object] }
            },
            vs
        ),
        setup(e, t) {
            const n = e.i18n || kr({ useScope: 'parent', __useComponent: !0 });
            return xu(e, t, gv, (...r) => n[Ti](...r));
        }
    };
function vv(e, t) {
    const n = e;
    if (e.mode === 'composition') return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer;
    }
}
function _v(e) {
    const t = (n, { instance: r, value: a, modifiers: i }) => {
        if (!r || !r.$) throw Re(Oe.UNEXPECTED_ERROR);
        const s = vv(e, r.$),
            o = bv(a);
        n.textContent = Reflect.apply(s.t, s, [...yv(o)]);
    };
    return { beforeMount: t, beforeUpdate: t };
}
function bv(e) {
    if (H(e)) return { path: e };
    if (Q(e)) {
        if (!('path' in e)) throw Re(Oe.REQUIRED_VALUE, 'path');
        return e;
    } else throw Re(Oe.INVALID_VALUE);
}
function yv(e) {
    const { path: t, locale: n, args: r, choice: a, plural: i } = e,
        s = {},
        o = r || {};
    return (
        H(n) && (s.locale = n),
        xe(a) && (s.plural = a),
        xe(i) && (s.plural = i),
        [t, o, s]
    );
}
function Ev(e, t, ...n) {
    const r = Q(n[0]) ? n[0] : {},
        a = !!r.useI18nComponentName;
    (le(r.globalInstall) ? r.globalInstall : !0) &&
        (e.component(a ? 'i18n' : tl.name, tl),
        e.component(nl.name, nl),
        e.component(rl.name, rl)),
        e.directive('t', _v(t));
}
function Tv(e, t, n) {
    return {
        beforeCreate() {
            const r = Gt();
            if (!r) throw Re(Oe.UNEXPECTED_ERROR);
            const a = this.$options;
            if (a.i18n) {
                const i = a.i18n;
                a.__i18n && (i.__i18n = a.__i18n),
                    (i.__root = t),
                    this === this.$root
                        ? (this.$i18n = al(e, i))
                        : ((i.__injectWithOption = !0), (this.$i18n = Ni(i)));
            } else
                a.__i18n
                    ? this === this.$root
                        ? (this.$i18n = al(e, a))
                        : (this.$i18n = Ni({
                              __i18n: a.__i18n,
                              __injectWithOption: !0,
                              __root: t
                          }))
                    : (this.$i18n = e);
            a.__i18nGlobal && Ru(t, a, a),
                e.__onComponentInstanceCreated(this.$i18n),
                n.__setInstance(r, this.$i18n),
                (this.$t = (...i) => this.$i18n.t(...i)),
                (this.$rt = (...i) => this.$i18n.rt(...i)),
                (this.$tc = (...i) => this.$i18n.tc(...i)),
                (this.$te = (i, s) => this.$i18n.te(i, s)),
                (this.$d = (...i) => this.$i18n.d(...i)),
                (this.$n = (...i) => this.$i18n.n(...i)),
                (this.$tm = (i) => this.$i18n.tm(i));
        },
        mounted() {},
        unmounted() {
            const r = Gt();
            if (!r) throw Re(Oe.UNEXPECTED_ERROR);
            delete this.$t,
                delete this.$rt,
                delete this.$tc,
                delete this.$te,
                delete this.$d,
                delete this.$n,
                delete this.$tm,
                n.__deleteInstance(r),
                delete this.$i18n;
        }
    };
}
function al(e, t) {
    (e.locale = t.locale || e.locale),
        (e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
        (e.missing = t.missing || e.missing),
        (e.silentTranslationWarn =
            t.silentTranslationWarn || e.silentFallbackWarn),
        (e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
        (e.formatFallbackMessages =
            t.formatFallbackMessages || e.formatFallbackMessages),
        (e.postTranslation = t.postTranslation || e.postTranslation),
        (e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
        (e.escapeParameterHtml =
            t.escapeParameterHtml || e.escapeParameterHtml),
        (e.sync = t.sync || e.sync),
        e.__composer[Su](t.pluralizationRules || e.pluralizationRules);
    const n = wa(e.locale, { messages: t.messages, __i18n: t.__i18n });
    return (
        Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])),
        t.datetimeFormats &&
            Object.keys(t.datetimeFormats).forEach((r) =>
                e.mergeDateTimeFormat(r, t.datetimeFormats[r])
            ),
        t.numberFormats &&
            Object.keys(t.numberFormats).forEach((r) =>
                e.mergeNumberFormat(r, t.numberFormats[r])
            ),
        e
    );
}
const Iv = Kt('global-vue-i18n');
function Cv(e = {}, t) {
    const n =
            __VUE_I18N_LEGACY_API__ && le(e.legacy)
                ? e.legacy
                : __VUE_I18N_LEGACY_API__,
        r = le(e.globalInjection) ? e.globalInjection : !0,
        a = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0,
        i = new Map(),
        [s, o] = Nv(e, n),
        l = Kt('');
    function c(p) {
        return i.get(p) || null;
    }
    function u(p, _) {
        i.set(p, _);
    }
    function m(p) {
        i.delete(p);
    }
    {
        const p = {
            get mode() {
                return __VUE_I18N_LEGACY_API__ && n ? 'legacy' : 'composition';
            },
            get allowComposition() {
                return a;
            },
            async install(_, ...N) {
                (_.__VUE_I18N_SYMBOL__ = l),
                    _.provide(_.__VUE_I18N_SYMBOL__, p),
                    !n && r && xv(_, p.global),
                    __VUE_I18N_FULL_INSTALL__ && Ev(_, p, ...N),
                    __VUE_I18N_LEGACY_API__ &&
                        n &&
                        _.mixin(Tv(o, o.__composer, p));
                const O = _.unmount;
                _.unmount = () => {
                    p.dispose(), O();
                };
            },
            get global() {
                return o;
            },
            dispose() {
                s.stop();
            },
            __instances: i,
            __getInstance: c,
            __setInstance: u,
            __deleteInstance: m
        };
        return p;
    }
}
function kr(e = {}) {
    const t = Gt();
    if (t == null) throw Re(Oe.MUST_BE_CALL_SETUP_TOP);
    if (
        !t.isCE &&
        t.appContext.app != null &&
        !t.appContext.app.__VUE_I18N_SYMBOL__
    )
        throw Re(Oe.NOT_INSLALLED);
    const n = Av(t),
        r = wv(n),
        a = Lu(t),
        i = Ov(e, a);
    if (__VUE_I18N_LEGACY_API__ && n.mode === 'legacy' && !e.__useComponent) {
        if (!n.allowComposition) throw Re(Oe.NOT_AVAILABLE_IN_LEGACY_MODE);
        return Lv(t, i, r, e);
    }
    if (i === 'global') return Ru(r, e, a), r;
    if (i === 'parent') {
        let l = Sv(n, t, e.__useComponent);
        return l == null && (l = r), l;
    }
    const s = n;
    let o = s.__getInstance(t);
    if (o == null) {
        const l = Me({}, e);
        '__i18n' in a && (l.__i18n = a.__i18n),
            r && (l.__root = r),
            (o = gs(l)),
            kv(s, t),
            s.__setInstance(t, o);
    }
    return o;
}
function Nv(e, t, n) {
    const r = wf();
    {
        const a =
            __VUE_I18N_LEGACY_API__ && t
                ? r.run(() => Ni(e))
                : r.run(() => gs(e));
        if (a == null) throw Re(Oe.UNEXPECTED_ERROR);
        return [r, a];
    }
}
function Av(e) {
    {
        const t = nt(e.isCE ? Iv : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw Re(
                e.isCE ? Oe.NOT_INSLALLED_WITH_PROVIDE : Oe.UNEXPECTED_ERROR
            );
        return t;
    }
}
function Ov(e, t) {
    return Na(e)
        ? '__i18n' in t
            ? 'local'
            : 'global'
        : e.useScope
        ? e.useScope
        : 'local';
}
function wv(e) {
    return e.mode === 'composition' ? e.global : e.global.__composer;
}
function Sv(e, t, n = !1) {
    let r = null;
    const a = t.root;
    let i = t.parent;
    for (; i != null; ) {
        const s = e;
        if (e.mode === 'composition') r = s.__getInstance(i);
        else if (__VUE_I18N_LEGACY_API__) {
            const o = s.__getInstance(i);
            o != null && ((r = o.__composer), n && r && !r[ku] && (r = null));
        }
        if (r != null || a === i) break;
        i = i.parent;
    }
    return r;
}
function kv(e, t, n) {
    jn(() => {}, t),
        va(() => {
            e.__deleteInstance(t);
        }, t);
}
function Lv(e, t, n, r = {}) {
    const a = t === 'local',
        i = oc(null);
    if (a && e.proxy && !e.proxy.$options.i18n)
        throw Re(Oe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const s = le(r.inheritLocale) ? r.inheritLocale : !0,
        o = Ce(a && s ? n.locale.value : H(r.locale) ? r.locale : Sr),
        l = Ce(
            a && s
                ? n.fallbackLocale.value
                : H(r.fallbackLocale) ||
                  _e(r.fallbackLocale) ||
                  Q(r.fallbackLocale) ||
                  r.fallbackLocale === !1
                ? r.fallbackLocale
                : o.value
        ),
        c = Ce(wa(o.value, r)),
        u = Ce(Q(r.datetimeFormats) ? r.datetimeFormats : { [o.value]: {} }),
        m = Ce(Q(r.numberFormats) ? r.numberFormats : { [o.value]: {} }),
        p = a
            ? n.missingWarn
            : le(r.missingWarn) || Vt(r.missingWarn)
            ? r.missingWarn
            : !0,
        _ = a
            ? n.fallbackWarn
            : le(r.fallbackWarn) || Vt(r.fallbackWarn)
            ? r.fallbackWarn
            : !0,
        N = a ? n.fallbackRoot : le(r.fallbackRoot) ? r.fallbackRoot : !0,
        O = !!r.fallbackFormat,
        A = Ie(r.missing) ? r.missing : null,
        h = Ie(r.postTranslation) ? r.postTranslation : null,
        g = a
            ? n.warnHtmlMessage
            : le(r.warnHtmlMessage)
            ? r.warnHtmlMessage
            : !0,
        I = !!r.escapeParameter,
        T = a ? n.modifiers : Q(r.modifiers) ? r.modifiers : {},
        C = r.pluralRules || (a && n.pluralRules);
    function P() {
        return [o.value, l.value, c.value, u.value, m.value];
    }
    const R = ee({
            get: () => (i.value ? i.value.locale.value : o.value),
            set: (d) => {
                i.value && (i.value.locale.value = d), (o.value = d);
            }
        }),
        K = ee({
            get: () => (i.value ? i.value.fallbackLocale.value : l.value),
            set: (d) => {
                i.value && (i.value.fallbackLocale.value = d), (l.value = d);
            }
        }),
        Y = ee(() => (i.value ? i.value.messages.value : c.value)),
        te = ee(() => u.value),
        J = ee(() => m.value);
    function j() {
        return i.value ? i.value.getPostTranslationHandler() : h;
    }
    function ce(d) {
        i.value && i.value.setPostTranslationHandler(d);
    }
    function Ne() {
        return i.value ? i.value.getMissingHandler() : A;
    }
    function We(d) {
        i.value && i.value.setMissingHandler(d);
    }
    function ie(d) {
        return P(), d();
    }
    function re(...d) {
        return i.value
            ? ie(() => Reflect.apply(i.value.t, null, [...d]))
            : ie(() => '');
    }
    function se(...d) {
        return i.value ? Reflect.apply(i.value.rt, null, [...d]) : '';
    }
    function ke(...d) {
        return i.value
            ? ie(() => Reflect.apply(i.value.d, null, [...d]))
            : ie(() => '');
    }
    function Je(...d) {
        return i.value
            ? ie(() => Reflect.apply(i.value.n, null, [...d]))
            : ie(() => '');
    }
    function je(d) {
        return i.value ? i.value.tm(d) : {};
    }
    function Fe(d, y) {
        return i.value ? i.value.te(d, y) : !1;
    }
    function $e(d) {
        return i.value ? i.value.getLocaleMessage(d) : {};
    }
    function _t(d, y) {
        i.value && (i.value.setLocaleMessage(d, y), (c.value[d] = y));
    }
    function L(d, y) {
        i.value && i.value.mergeLocaleMessage(d, y);
    }
    function G(d) {
        return i.value ? i.value.getDateTimeFormat(d) : {};
    }
    function F(d, y) {
        i.value && (i.value.setDateTimeFormat(d, y), (u.value[d] = y));
    }
    function B(d, y) {
        i.value && i.value.mergeDateTimeFormat(d, y);
    }
    function ae(d) {
        return i.value ? i.value.getNumberFormat(d) : {};
    }
    function ue(d, y) {
        i.value && (i.value.setNumberFormat(d, y), (m.value[d] = y));
    }
    function v(d, y) {
        i.value && i.value.mergeNumberFormat(d, y);
    }
    const b = {
        get id() {
            return i.value ? i.value.id : -1;
        },
        locale: R,
        fallbackLocale: K,
        messages: Y,
        datetimeFormats: te,
        numberFormats: J,
        get inheritLocale() {
            return i.value ? i.value.inheritLocale : s;
        },
        set inheritLocale(d) {
            i.value && (i.value.inheritLocale = d);
        },
        get availableLocales() {
            return i.value ? i.value.availableLocales : Object.keys(c.value);
        },
        get modifiers() {
            return i.value ? i.value.modifiers : T;
        },
        get pluralRules() {
            return i.value ? i.value.pluralRules : C;
        },
        get isGlobal() {
            return i.value ? i.value.isGlobal : !1;
        },
        get missingWarn() {
            return i.value ? i.value.missingWarn : p;
        },
        set missingWarn(d) {
            i.value && (i.value.missingWarn = d);
        },
        get fallbackWarn() {
            return i.value ? i.value.fallbackWarn : _;
        },
        set fallbackWarn(d) {
            i.value && (i.value.missingWarn = d);
        },
        get fallbackRoot() {
            return i.value ? i.value.fallbackRoot : N;
        },
        set fallbackRoot(d) {
            i.value && (i.value.fallbackRoot = d);
        },
        get fallbackFormat() {
            return i.value ? i.value.fallbackFormat : O;
        },
        set fallbackFormat(d) {
            i.value && (i.value.fallbackFormat = d);
        },
        get warnHtmlMessage() {
            return i.value ? i.value.warnHtmlMessage : g;
        },
        set warnHtmlMessage(d) {
            i.value && (i.value.warnHtmlMessage = d);
        },
        get escapeParameter() {
            return i.value ? i.value.escapeParameter : I;
        },
        set escapeParameter(d) {
            i.value && (i.value.escapeParameter = d);
        },
        t: re,
        getPostTranslationHandler: j,
        setPostTranslationHandler: ce,
        getMissingHandler: Ne,
        setMissingHandler: We,
        rt: se,
        d: ke,
        n: Je,
        tm: je,
        te: Fe,
        getLocaleMessage: $e,
        setLocaleMessage: _t,
        mergeLocaleMessage: L,
        getDateTimeFormat: G,
        setDateTimeFormat: F,
        mergeDateTimeFormat: B,
        getNumberFormat: ae,
        setNumberFormat: ue,
        mergeNumberFormat: v
    };
    function f(d) {
        (d.locale.value = o.value),
            (d.fallbackLocale.value = l.value),
            Object.keys(c.value).forEach((y) => {
                d.mergeLocaleMessage(y, c.value[y]);
            }),
            Object.keys(u.value).forEach((y) => {
                d.mergeDateTimeFormat(y, u.value[y]);
            }),
            Object.keys(m.value).forEach((y) => {
                d.mergeNumberFormat(y, m.value[y]);
            }),
            (d.escapeParameter = I),
            (d.fallbackFormat = O),
            (d.fallbackRoot = N),
            (d.fallbackWarn = _),
            (d.missingWarn = p),
            (d.warnHtmlMessage = g);
    }
    return (
        Cc(() => {
            if (e.proxy == null || e.proxy.$i18n == null)
                throw Re(Oe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const d = (i.value = e.proxy.$i18n.__composer);
            t === 'global'
                ? ((o.value = d.locale.value),
                  (l.value = d.fallbackLocale.value),
                  (c.value = d.messages.value),
                  (u.value = d.datetimeFormats.value),
                  (m.value = d.numberFormats.value))
                : a && f(d);
        }),
        b
    );
}
const Rv = ['locale', 'fallbackLocale', 'availableLocales'],
    Pv = ['t', 'rt', 'd', 'n', 'tm'];
function xv(e, t) {
    const n = Object.create(null);
    Rv.forEach((r) => {
        const a = Object.getOwnPropertyDescriptor(t, r);
        if (!a) throw Re(Oe.UNEXPECTED_ERROR);
        const i = Le(a.value)
            ? {
                  get() {
                      return a.value.value;
                  },
                  set(s) {
                      a.value.value = s;
                  }
              }
            : {
                  get() {
                      return a.get && a.get();
                  }
              };
        Object.defineProperty(n, r, i);
    }),
        (e.config.globalProperties.$i18n = n),
        Pv.forEach((r) => {
            const a = Object.getOwnPropertyDescriptor(t, r);
            if (!a || !a.value) throw Re(Oe.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${r}`, a);
        });
}
Qg(av);
Jg(Rg);
Zg(bu);
uv();
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = ur();
    (e.__INTLIFY__ = !0), Wg(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Mv = at({
        name: 'Menu',
        props: { item: { type: Object, required: !0 } },
        setup() {
            const e = Ce(!1),
                t = Xh(),
                { commit: n } = wr(),
                r = fs(),
                { t: a } = kr();
            function i(o) {
                o.children.length === 0 &&
                    (t.push({ name: o.title }), n('setIsSidebarShow', !1));
            }
            function s(o) {
                const l = ee(() => r.name);
                return o === l.value;
            }
            return { isOpen: e, routeHandle: i, isRouterLink: s, t: a };
        }
    }),
    Dv = { key: 0, class: 'sub_menu' };
function Fv(e, t, n, r, a, i) {
    const s = Rn('Menu');
    return e.item
        ? (ye(),
          Be('div', Dv, [
              Wt(
                  'div',
                  {
                      class: 'title_bar',
                      onClick:
                          t[1] ||
                          (t[1] = jm(
                              (o) => (e.isOpen = !e.isOpen),
                              ['prevent']
                          ))
                  },
                  [
                      Wt(
                          'div',
                          {
                              class: $n([
                                  'title',
                                  e.isRouterLink(e.item.title)
                                      ? 'router_link'
                                      : ''
                              ]),
                              onClick:
                                  t[0] || (t[0] = (o) => e.routeHandle(e.item))
                          },
                          Kr(e.t(e.item.title.toUpperCase())),
                          3
                      )
                  ]
              ),
              e.item.children
                  ? (ye(),
                    Tt(
                        Mm,
                        { key: 0, name: 'fade', mode: 'out-in' },
                        {
                            default: rn(() => [
                                (ye(!0),
                                Be(
                                    Ae,
                                    null,
                                    ya(e.item.children, (o) =>
                                        jd(
                                            (ye(),
                                            Tt(
                                                s,
                                                { key: o.title, item: o },
                                                null,
                                                8,
                                                ['item']
                                            )),
                                            [[Gm, e.isOpen]]
                                        )
                                    ),
                                    128
                                ))
                            ]),
                            _: 1
                        }
                    ))
                  : Pn('', !0)
          ]))
        : Pn('', !0);
}
var $v = hn(Mv, [
    ['render', Fv],
    ['__scopeId', 'data-v-6b87e8c4']
]);
const $r = 50,
    il = 1,
    sl = 2,
    ol = 3,
    ll = 4;
function Uv() {
    let e = null,
        t = null;
    function n() {
        const c = e.changedTouches[0],
            u = t.changedTouches[0],
            m = c.screenX - (u == null ? void 0 : u.screenX),
            p = c.screenY - (u == null ? void 0 : u.screenY);
        let _ = null;
        return !c || !u
            ? null
            : (Math.abs(m) > Math.abs(p)
                  ? m >= $r
                      ? (_ = il)
                      : m <= -$r && (_ = sl)
                  : p >= $r
                  ? (_ = ol)
                  : p <= -$r && (_ = ll),
              _);
    }
    function r() {
        return n() === il;
    }
    function a() {
        return n() === sl;
    }
    function i() {
        return n() === ol;
    }
    function s() {
        return n() === ll;
    }
    function o(c) {
        e = c;
    }
    function l(c) {
        t = c;
    }
    return {
        isSwipeLeft: r,
        isSwipeRight: a,
        isSwipeUp: i,
        isSwipeDown: s,
        setTouchstartEvent: o,
        setTouchendEvent: l
    };
}
const Hv = at({
    name: 'Sidebar',
    components: { Menu: $v },
    setup() {
        const { state: e, commit: t } = wr(),
            n = ee(() => e.isSidebarShow),
            r = ee(() => e.isNavShow),
            a = dn(Vp.menus),
            {
                isSwipeLeft: i,
                setTouchstartEvent: s,
                setTouchendEvent: o
            } = Uv();
        function l(u) {
            s(u);
        }
        function c(u) {
            o(u), i() && t('setIsSidebarShow', !1), o(null);
        }
        return {
            isSidebarShow: n,
            menus: a,
            isNavShow: r,
            touchstartHandle: l,
            touchendHandle: c
        };
    }
});
function Wv(e, t, n, r, a, i) {
    const s = Rn('Menu');
    return (
        ye(),
        Be(
            'div',
            {
                class: $n([
                    'sidebar',
                    e.isSidebarShow ? 'open' : '',
                    e.isNavShow ? '' : 'toTop'
                ]),
                onTouchstartPassive:
                    t[0] ||
                    (t[0] = (...o) =>
                        e.touchstartHandle && e.touchstartHandle(...o)),
                onTouchend:
                    t[1] ||
                    (t[1] = (...o) =>
                        e.touchendHandle && e.touchendHandle(...o))
            },
            [
                (ye(!0),
                Be(
                    Ae,
                    null,
                    ya(
                        e.menus,
                        (o) => (
                            ye(),
                            Tt(s, { key: o.title, item: o }, null, 8, ['item'])
                        )
                    ),
                    128
                ))
            ],
            34
        )
    );
}
var jv = hn(Hv, [
        ['render', Wv],
        ['__scopeId', 'data-v-4af21008']
    ]),
    Gv = [
        { localeKey: 'ABOUT_ME', value: 'intro' },
        { localeKey: 'WORK_EXPERIENCE', value: 'experience' },
        { localeKey: 'EXTERNAL_LINK', value: 'externalLink' },
        { localeKey: 'CONTACT_ME', value: 'contact' }
    ];
const Ur = Ce(0),
    cl = Ce(!1);
function Vv() {
    let e = null;
    function t(r) {
        (e = r),
            e.addEventListener('scroll', () => {
                (cl.value = Ur.value < e.scrollTop),
                    (Ur.value = parseInt(e.scrollTop.toFixed(0)));
            });
    }
    function n(r) {
        Ur.value = r;
    }
    return {
        scrollTopValue: Ur,
        isScrollDown: cl,
        setScrollTopValue: n,
        setScrollTarget: t
    };
}
function aE(e) {
    const { offsetTop: t, offsetHeight: n } = e;
    return t - n / 4;
}
const Bv = at({
        setup() {
            const { commit: e, state: t } = wr(),
                n = ee(() => t.isSidebarShow),
                r = ee(() => t.isMobile),
                a = ee(() => t.isNavShow),
                i = ee(() => t.scrollTopList),
                s = fs(),
                o = ee(() => s.name === 'profile'),
                { t: l, locale: c } = kr(),
                { setScrollTopValue: u, isScrollDown: m } = Vv(),
                p = Ce(Gv);
            function _() {
                e('setIsSidebarShow', !n.value);
            }
            function N(A) {
                var I;
                const h = i.value.find((T) => T.key === A),
                    g = (I = h == null ? void 0 : h.value) != null ? I : 0;
                u(g);
            }
            function O() {
                const A = c.value === 'en-US' ? 'zh-TW' : 'en-US';
                (c.value = A), localStorage.setItem('locale', A);
            }
            return (
                ct(m, () => {
                    e('setIsNavShow', !m.value);
                }),
                {
                    isSidebarShow: n,
                    isNavShow: a,
                    tabs: p,
                    isMobile: r,
                    isF0106: o,
                    locale: c,
                    t: l,
                    toggleSidebar: _,
                    tabClickHandle: N,
                    localeHandle: O
                }
            );
        }
    }),
    Yv = { key: 0 },
    Kv = { class: 'options_container' },
    zv = ['onClick'];
function Xv(e, t, n, r, a, i) {
    const s = Rn('font-awesome-icon');
    return (
        ye(),
        Tt(
            Ir,
            { name: 'header', mode: 'out-in' },
            {
                default: rn(() => [
                    e.isNavShow
                        ? (ye(),
                          Be('header', Yv, [
                              Wt(
                                  'div',
                                  {
                                      class: 'close_icon',
                                      onClick:
                                          t[0] ||
                                          (t[0] = (...o) =>
                                              e.toggleSidebar &&
                                              e.toggleSidebar(...o))
                                  },
                                  [
                                      Ee(
                                          s,
                                          {
                                              icon: [
                                                  'fas',
                                                  e.isSidebarShow
                                                      ? 'xmark'
                                                      : 'bars'
                                              ]
                                          },
                                          null,
                                          8,
                                          ['icon']
                                      )
                                  ]
                              ),
                              Wt('div', Kv, [
                                  (ye(!0),
                                  Be(
                                      Ae,
                                      null,
                                      ya(
                                          e.tabs,
                                          (o) => (
                                              ye(),
                                              Be(
                                                  Ae,
                                                  null,
                                                  [
                                                      !e.isMobile && e.isF0106
                                                          ? (ye(),
                                                            Be(
                                                                'div',
                                                                {
                                                                    class: 'tab',
                                                                    onClick: (
                                                                        l
                                                                    ) =>
                                                                        e.tabClickHandle(
                                                                            o.value
                                                                        ),
                                                                    key: o.value
                                                                },
                                                                Kr(
                                                                    e.t(
                                                                        o.localeKey
                                                                    )
                                                                ),
                                                                9,
                                                                zv
                                                            ))
                                                          : Pn('', !0)
                                                  ],
                                                  64
                                              )
                                          )
                                      ),
                                      256
                                  )),
                                  Ee(
                                      s,
                                      {
                                          icon: ['fas', 'globe'],
                                          class: 'locale',
                                          onClick: e.localeHandle
                                      },
                                      null,
                                      8,
                                      ['onClick']
                                  )
                              ])
                          ]))
                        : Pn('', !0)
                ]),
                _: 1
            }
        )
    );
}
var qv = hn(Bv, [['render', Xv]]);
function Ai(e, t, n) {
    jn(() => e.addEventListener(t, n)), va(() => e.removeEventListener(t, n));
}
const Qv = at({
    setup() {
        const { state: e } = wr(),
            t = Ce(0),
            n = Ce(0),
            r = Ce(!1),
            a = ee(() => e.isMobile);
        function i(o) {
            (t.value = o.x - 30), (n.value = o.y - 30);
        }
        function s() {
            (r.value = !0),
                setTimeout(() => {
                    r.value = !1;
                }, 500);
        }
        return (
            Ai(window, 'mousemove', i),
            Ai(window, 'click', s),
            { cursorX: t, cursorY: n, pulse: r, clickHandle: s, isMobile: a }
        );
    }
});
function Jv(e, t, n, r, a, i) {
    return e.isMobile
        ? Pn('', !0)
        : (ye(),
          Be(
              'div',
              {
                  key: 0,
                  class: $n(['cursor', [e.pulse ? 'pulse' : '']]),
                  style: Or({ left: `${e.cursorX}px`, top: `${e.cursorY}px` }),
                  onClick:
                      t[0] ||
                      (t[0] = (...s) => e.clickHandle && e.clickHandle(...s))
              },
              null,
              6
          ));
}
var Zv = hn(Qv, [
    ['render', Jv],
    ['__scopeId', 'data-v-6371299d']
]);
const e_ = at({
        components: { Header: qv, Sidebar: jv, Cursor: Zv },
        setup() {
            return {};
        }
    }),
    t_ = { class: 'slot' };
function n_(e, t, n, r, a, i) {
    const s = Rn('Header'),
        o = Rn('Sidebar');
    return (
        ye(),
        Be(
            Ae,
            null,
            [
                Ee(s),
                Ee(o),
                Wt('div', t_, [tm(e.$slots, 'default', {}, void 0, !0)])
            ],
            64
        )
    );
}
var r_ = hn(e_, [
    ['render', n_],
    ['__scopeId', 'data-v-ada96dca']
]);
const a_ = at({
    components: { VIndex: r_ },
    setup() {
        const e = Ce('VIndex'),
            t = fs(),
            n = ee(() => t.name),
            { commit: r } = wr();
        function a() {
            const i = document.body.clientWidth < 1024;
            r('setIsMobile', i);
        }
        return (
            jn(() => {
                a();
            }),
            Ai(window, 'resize', a),
            { layout: e, routeName: n }
        );
    }
});
function i_(e, t, n, r, a, i) {
    const s = Rn('router-view');
    return (
        ye(),
        Tt(
            Ir,
            { name: 'fade', mode: 'out-in' },
            {
                default: rn(() => [
                    (ye(),
                    Be('div', { class: 'component', key: e.layout }, [
                        (ye(),
                        Tt(Js(e.layout), null, {
                            default: rn(() => [
                                Ee(s, null, {
                                    default: rn(({ Component: o }) => [
                                        Ee(
                                            Ir,
                                            {
                                                name: 'component',
                                                mode: 'out-in'
                                            },
                                            {
                                                default: rn(() => [
                                                    (ye(),
                                                    Tt(Js(o), {
                                                        key: e.routeName
                                                    }))
                                                ]),
                                                _: 2
                                            },
                                            1024
                                        )
                                    ]),
                                    _: 1
                                })
                            ]),
                            _: 1
                        }))
                    ]))
                ]),
                _: 1
            }
        )
    );
}
var s_ = hn(a_, [['render', i_]]);
const o_ = 'modulepreload',
    ul = {},
    l_ = '/',
    _s = function (t, n) {
        return !n || n.length === 0
            ? t()
            : Promise.all(
                  n.map((r) => {
                      if (((r = `${l_}${r}`), r in ul)) return;
                      ul[r] = !0;
                      const a = r.endsWith('.css'),
                          i = a ? '[rel="stylesheet"]' : '';
                      if (document.querySelector(`link[href="${r}"]${i}`))
                          return;
                      const s = document.createElement('link');
                      if (
                          ((s.rel = a ? 'stylesheet' : o_),
                          a || ((s.as = 'script'), (s.crossOrigin = '')),
                          (s.href = r),
                          document.head.appendChild(s),
                          a)
                      )
                          return new Promise((o, l) => {
                              s.addEventListener('load', o),
                                  s.addEventListener('error', () =>
                                      l(
                                          new Error(
                                              `Unable to preload CSS for ${r}`
                                          )
                                      )
                                  );
                          });
                  })
              ).then(() => t());
    },
    c_ = () =>
        _s(
            () => import('./User.1651757372134.js'),
            [
                'User.1651757372134.js',
                'User.1651757372134.css',
                'image.1651757372134.js'
            ]
        ),
    u_ = () =>
        _s(
            () => import('./Profile.1651757372134.js'),
            [
                'Profile.1651757372134.js',
                'Profile.1651757372134.css',
                'image.1651757372134.js'
            ]
        ),
    f_ = () =>
        _s(
            () => import('./Error.1651757372134.js'),
            ['Error.1651757372134.js', 'Error.1651757372134.css']
        ),
    d_ = [
        { path: '/basic', name: 'basic', component: c_ },
        { path: '/', name: 'profile', component: u_ },
        { path: '/:pathMatch(.*)*', name: 'Error', component: f_ }
    ],
    m_ = Kh({ history: ch(), routes: d_ }),
    p_ = '\u95DC\u65BC\u6211',
    h_ = '\u5DE5\u4F5C\u7D93\u9A57',
    g_ = '\u5916\u90E8\u9023\u7D50',
    v_ = '\u8207\u6211\u806F\u7E6B',
    __ = '\u5176\u4ED6\u7D93\u6B77',
    b_ =
        '\u6211\u662F\u4E00\u540D\u8EDF\u9AD4\u5DE5\u7A0B\u5E2B\u3002\u76EE\u524D\u5728\u6B63\u5C0B\u627E\u4E00\u4EFD<mark>VueJS\u5DE5\u7A0B\u5E2B</mark>\u7684\u5DE5\u4F5C\u6A5F\u6703\u3002',
    y_ = '\u4F60\u597D\uFF0C\u6211\u662F\u9673\u5FD7\u5B87',
    E_ =
        '\u6211\u65BC2020\u5E74\u8F49\u63DB\u8DD1\u9053\u9032\u5165\u8EDF\u9AD4\u5DE5\u7A0B\u7684\u9818\u57DF\uFF0C\u525B\u958B\u59CB\u8CA0\u8CAC\u7DAD\u8B77\u8207\u53CD\u7D44\u8B6FJava\u5C08\u6848\u3002\u5728\u8207\u524D\u7AEF\u540C\u4E8B\u5408\u4F5C\u7684\u904E\u7A0B\u4E2D\uFF0C\u767C\u73FE\u81EA\u5DF1\u5C0D\u65BC\u524D\u7AEF\u5DE5\u7A0B\u7684\u71B1\u5FF1\uFF0C\u56E0\u6B64\u958B\u555F\u524D\u7AEF\u4FEE\u7149\u4E4B\u65C5\u3002',
    T_ = '\u8EDF\u9AD4\u5DE5\u7A0B\u5E2B',
    I_ = '\u904A\u6232\u8A9E\u8A00\u6E2C\u8A66\u54E1',
    C_ = '\u82F1\u6587\u8AB2\u8F14\u8001\u5E2B',
    N_ = '\u524D\u7AEF\u5DE5\u7A0B\u5E2B',
    A_ = '\u5F8C\u7AEF\u5DE5\u7A0B\u5E2B',
    O_ = 'GRADIENTLY',
    w_ =
        '\u6F38\u5C64\u904A\u6232\u3002\u53D7 Nintendo Switch \u4E3B\u6A5F Gradiently \u6240\u555F\u767C\uFF0C\u4E00\u6B3E\u65BC\u9592\u6687\u7121\u4E8B\u6642\u4EE5Vue 2\u958B\u767C\u51FA\u7684\u904A\u6232\u3002',
    S_ = '\u8D8A\u4E16\u5BE6\u696D',
    k_ = { SA: 'QLOC' },
    L_ = '\u5B57\u795E',
    R_ = '\u82F1\u6587',
    P_ = '\u7E41\u9AD4\u4E2D\u6587',
    x_ = '\u6258\u798F\u95B1\u8B80',
    M_ = '\u6258\u798F\u5BEB\u4F5C',
    D_ = '\u958B\u767C\u5C08\u6848\u524D\u7AEFVue 3\u7A0B\u5F0F\u78BC',
    F_ =
        '\u7DAD\u8B77\u8207\u958B\u767C\u6578\u500B\u5C08\u6848\u524D\u7AEFVue 2\u7A0B\u5F0F\u78BC\u3002',
    $_ =
        '\u53CD\u7D44\u8B6F\u8207\u7DAD\u8B77\u958B\u767C Springboot \u5F8C\u7AEF\u7A0B\u5F0F\u78BC\uFF0C\u4E26\u4E14\u5C0F\u5E45\u4FEE\u6539\u524D\u7AEF\u7A0B\u5F0F\u78BC\u3002',
    U_ =
        '\u627E\u51FA\u904A\u6232\u4E2D\u7E41\u9AD4\u4E2D\u6587\u6587\u6CD5\u8207\u6587\u5B57\u932F\u8AA4\u3002',
    H_ =
        '\u8AB2\u8F14\u9AD8\u4E2D\u8207\u6210\u4EBA\u90E8\u5B78\u751F\u6258\u798F\u95B1\u8B80\u8207\u5BEB\u4F5C\uFF0C\u4E26\u4E14\u8209\u8FA6\u8B80\u66F8\u6703\u3002',
    W_ =
        '\u4E0D\u597D\u610F\u601D\uFF0C\u60A8\u9020\u8A2A\u7684\u9801\u9762\u4E0D\u5B58\u5728\u3002\u8ACB\u62DC\u8A2A\u5176\u4ED6\u9801\u9762\u3002',
    j_ =
        '\u6B64\u9801\u6DF1\u53D7 Brittany Chiang \u7684\u500B\u4EBA\u9801\u9762\u6240\u555F\u767C\uFF0C\u4E14\u4E26\u7121\u958B\u71DF\u5229\u3002\u62DC\u8A2A\u5979\u7684\u9801\u9762:',
    G_ = '\u7DF4\u7FD2\u5340',
    V_ = '\u500B\u4EBA\u6A94\u6848',
    B_ = 'API\u7DF4\u7FD2',
    Y_ = 'GRAPHQL',
    K_ = '\u4ECB\u7D39',
    z_ = 'ID',
    X_ = '\u59D3\u540D',
    q_ = '\u540D\u7A31',
    Q_ = '\u4FE1\u7BB1',
    J_ = '\u96FB\u8A71',
    Z_ = '\u7DB2\u9801',
    eb = '\u516C\u53F8',
    tb = '\u5730\u5740',
    nb = '\u8B8A\u66F4\u7167\u7247',
    rb = '\u67E5\u770B\u66F4\u591A',
    ab = '\u95DC\u9589';
var ib = {
    ABOUT_ME: p_,
    WORK_EXPERIENCE: h_,
    EXTERNAL_LINK: g_,
    CONTACT_ME: v_,
    OTHER_EXPERIENCE: __,
    LANDING_PAGE_DESCRIPTION: b_,
    LANDING_PAGE_GREETING: y_,
    ABOUT_ME_DESCRIPTION: E_,
    ENGINEER: T_,
    TESTER: I_,
    TUTOR: C_,
    FRONTEND_ENGINEER: N_,
    BACKEND_ENGINEER: A_,
    GRADIENTLY: O_,
    GRADIENTLY_DESCRIPTION: w_,
    YESEE: S_,
    QLOC: k_,
    WORDGOD: L_,
    ENGLISH: R_,
    TRADITIONAL_CHINESE: P_,
    TOEFL_READING: x_,
    TOEFL_WRITING: M_,
    ENGINEER_FIRST_DESCRIPTION: D_,
    ENGINEER_SECOND_DESCRIPTION: F_,
    ENGINEER_THIRD_DESCRIPTION: $_,
    TESTER_FIRST_DESCRIPTION: U_,
    TUTOR_FIRST_DESCRIPTION: H_,
    PAGE_NOT_FOUND: W_,
    FOOTER_MESSAGE: j_,
    PLAYGROUND: G_,
    PROFILE: V_,
    BASIC: B_,
    GRAPHQL: Y_,
    INTRODUCTION: K_,
    ID: z_,
    NAME: X_,
    USERNAME: q_,
    EMAIL: Q_,
    PHONE: J_,
    WEBSITE: Z_,
    COMPANY: eb,
    ADDRESS: tb,
    CLICK_TO_UPDATE_PHOTO: nb,
    SEE_MORE: rb,
    CLOSE: ab
};
const sb = 'About',
    ob = 'Work Experience',
    lb = 'External Link',
    cb = 'Contact',
    ub = 'Others',
    fb =
        'I am a software engineer and looking for a new job as a <mark>Vuejs developer</mark>.',
    db = 'Hi, my name is Chih-Yu, Chen.',
    mb =
        'I entered the software engineering field in 2020 and was responsible for maintaining and decompiling Java projects. I found my passion for frontend while collabatorating with my frontend colleagues, and I started my journey as a frontend developer since then.',
    pb = 'Software engineer',
    hb = 'Linguistic tester',
    gb = 'English tutor',
    vb = 'Frontend engineer',
    _b = 'Backend engineer',
    bb = 'GRADIENTLY',
    yb =
        'A gradient game. Inspired by the Nintendo Switch game, Gradiently, I tried to develop a simple copy of the game with Vue 2 at leisure time.',
    Eb = 'Yesee ',
    Tb = { SA: 'QLOC' },
    Ib = 'Wordgod',
    Cb = 'English',
    Nb = 'Traditional Chinese',
    Ab = 'TOEFL Reading',
    Ob = 'TOEFL Writing',
    wb = 'Developed a frontend project with Vue 3.',
    Sb = 'Developed and maintained multiple frotend projects with Vue 2.',
    kb =
        'Decompiled and maintained backend Springboot projects and modify part of its frontend code. ',
    Lb = 'Spot Traditional Chinese typos and grammartical issues in games.',
    Rb =
        'Tutored adult and high school students in TOEFL reading and writing and started study groups.',
    Pb = ` Sorry, the page you are looking for could not be found. Please visit
        other pages.`,
    xb =
        "This page is greatly inspired by Brittany Chiang's profile page and is not monetized. Visit her page:  ",
    Mb = 'Playground',
    Db = 'Profile',
    Fb = 'API Practice',
    $b = 'GRAPHQL',
    Ub = 'Introduction',
    Hb = 'ID',
    Wb = 'Name',
    jb = 'Username',
    Gb = 'Email',
    Vb = 'Phone',
    Bb = 'Website',
    Yb = 'Company',
    Kb = 'Address',
    zb = 'CLICK TO UPDATE PHOTO',
    Xb = 'SEE MORE',
    qb = 'Close';
var Qb = {
    ABOUT_ME: sb,
    WORK_EXPERIENCE: ob,
    EXTERNAL_LINK: lb,
    CONTACT_ME: cb,
    OTHER_EXPERIENCE: ub,
    LANDING_PAGE_DESCRIPTION: fb,
    LANDING_PAGE_GREETING: db,
    ABOUT_ME_DESCRIPTION: mb,
    ENGINEER: pb,
    TESTER: hb,
    TUTOR: gb,
    FRONTEND_ENGINEER: vb,
    BACKEND_ENGINEER: _b,
    GRADIENTLY: bb,
    GRADIENTLY_DESCRIPTION: yb,
    YESEE: Eb,
    QLOC: Tb,
    WORDGOD: Ib,
    ENGLISH: Cb,
    TRADITIONAL_CHINESE: Nb,
    TOEFL_READING: Ab,
    TOEFL_WRITING: Ob,
    ENGINEER_FIRST_DESCRIPTION: wb,
    ENGINEER_SECOND_DESCRIPTION: Sb,
    ENGINEER_THIRD_DESCRIPTION: kb,
    TESTER_FIRST_DESCRIPTION: Lb,
    TUTOR_FIRST_DESCRIPTION: Rb,
    PAGE_NOT_FOUND: Pb,
    FOOTER_MESSAGE: xb,
    PLAYGROUND: Mb,
    PROFILE: Db,
    BASIC: Fb,
    GRAPHQL: $b,
    INTRODUCTION: Ub,
    ID: Hb,
    NAME: Wb,
    USERNAME: jb,
    EMAIL: Gb,
    PHONE: Vb,
    WEBSITE: Bb,
    COMPANY: Yb,
    ADDRESS: Kb,
    CLICK_TO_UPDATE_PHOTO: zb,
    SEE_MORE: Xb,
    CLOSE: qb
};
/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */ function fl(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? fl(Object(n), !0).forEach(function (r) {
                  e1(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fl(Object(n)).forEach(function (r) {
                  Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(n, r)
                  );
              });
    }
    return e;
}
function na(e) {
    return (
        (na =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == 'function' &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                  }),
        na(e)
    );
}
function Jb(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function dl(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function Zb(e, t, n) {
    return (
        t && dl(e.prototype, t),
        n && dl(e, n),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
    );
}
function e1(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function bs(e, t) {
    return n1(e) || a1(e, t) || Mu(e, t) || s1();
}
function Sa(e) {
    return t1(e) || r1(e) || Mu(e) || i1();
}
function t1(e) {
    if (Array.isArray(e)) return Oi(e);
}
function n1(e) {
    if (Array.isArray(e)) return e;
}
function r1(e) {
    if (
        (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
        e['@@iterator'] != null
    )
        return Array.from(e);
}
function a1(e, t) {
    var n =
        e == null
            ? null
            : (typeof Symbol != 'undefined' && e[Symbol.iterator]) ||
              e['@@iterator'];
    if (n != null) {
        var r = [],
            a = !0,
            i = !1,
            s,
            o;
        try {
            for (
                n = n.call(e);
                !(a = (s = n.next()).done) &&
                (r.push(s.value), !(t && r.length === t));
                a = !0
            );
        } catch (l) {
            (i = !0), (o = l);
        } finally {
            try {
                !a && n.return != null && n.return();
            } finally {
                if (i) throw o;
            }
        }
        return r;
    }
}
function Mu(e, t) {
    if (!!e) {
        if (typeof e == 'string') return Oi(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (
            (n === 'Object' && e.constructor && (n = e.constructor.name),
            n === 'Map' || n === 'Set')
        )
            return Array.from(e);
        if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
            return Oi(e, t);
    }
}
function Oi(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function i1() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s1() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ml = function () {},
    ys = {},
    Du = {},
    Fu = null,
    $u = { mark: ml, measure: ml };
try {
    typeof window != 'undefined' && (ys = window),
        typeof document != 'undefined' && (Du = document),
        typeof MutationObserver != 'undefined' && (Fu = MutationObserver),
        typeof performance != 'undefined' && ($u = performance);
} catch {}
var o1 = ys.navigator || {},
    pl = o1.userAgent,
    hl = pl === void 0 ? '' : pl,
    Bt = ys,
    be = Du,
    gl = Fu,
    Hr = $u;
Bt.document;
var wt =
        !!be.documentElement &&
        !!be.head &&
        typeof be.addEventListener == 'function' &&
        typeof be.createElement == 'function',
    Uu = ~hl.indexOf('MSIE') || ~hl.indexOf('Trident/'),
    Ct = '___FONT_AWESOME___',
    wi = 16,
    Hu = 'fa',
    Wu = 'svg-inline--fa',
    un = 'data-fa-i2svg',
    Si = 'data-fa-pseudo-element',
    l1 = 'data-fa-pseudo-element-pending',
    Es = 'data-prefix',
    Ts = 'data-icon',
    vl = 'fontawesome-i2svg',
    c1 = 'async',
    u1 = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
    ju = (function () {
        try {
            return !0;
        } catch {
            return !1;
        }
    })(),
    Is = {
        fas: 'solid',
        'fa-solid': 'solid',
        far: 'regular',
        'fa-regular': 'regular',
        fal: 'light',
        'fa-light': 'light',
        fat: 'thin',
        'fa-thin': 'thin',
        fad: 'duotone',
        'fa-duotone': 'duotone',
        fab: 'brands',
        'fa-brands': 'brands',
        fak: 'kit',
        'fa-kit': 'kit',
        fa: 'solid'
    },
    ra = {
        solid: 'fas',
        regular: 'far',
        light: 'fal',
        thin: 'fat',
        duotone: 'fad',
        brands: 'fab',
        kit: 'fak'
    },
    Gu = {
        fab: 'fa-brands',
        fad: 'fa-duotone',
        fak: 'fa-kit',
        fal: 'fa-light',
        far: 'fa-regular',
        fas: 'fa-solid',
        fat: 'fa-thin'
    },
    f1 = {
        'fa-brands': 'fab',
        'fa-duotone': 'fad',
        'fa-kit': 'fak',
        'fa-light': 'fal',
        'fa-regular': 'far',
        'fa-solid': 'fas',
        'fa-thin': 'fat'
    },
    d1 = /fa[srltdbk\-\ ]/,
    Vu = 'fa-layers-text',
    m1 =
        /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,
    p1 = { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
    Bu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    h1 = Bu.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    g1 = [
        'class',
        'data-prefix',
        'data-icon',
        'data-fa-transform',
        'data-fa-mask'
    ],
    sn = {
        GROUP: 'duotone-group',
        SWAP_OPACITY: 'swap-opacity',
        PRIMARY: 'primary',
        SECONDARY: 'secondary'
    },
    v1 = []
        .concat(Sa(Object.keys(ra)), [
            '2xs',
            'xs',
            'sm',
            'lg',
            'xl',
            '2xl',
            'beat',
            'border',
            'fade',
            'beat-fade',
            'bounce',
            'flip-both',
            'flip-horizontal',
            'flip-vertical',
            'flip',
            'fw',
            'inverse',
            'layers-counter',
            'layers-text',
            'layers',
            'li',
            'pull-left',
            'pull-right',
            'pulse',
            'rotate-180',
            'rotate-270',
            'rotate-90',
            'rotate-by',
            'shake',
            'spin-pulse',
            'spin-reverse',
            'spin',
            'stack-1x',
            'stack-2x',
            'stack',
            'ul',
            sn.GROUP,
            sn.SWAP_OPACITY,
            sn.PRIMARY,
            sn.SECONDARY
        ])
        .concat(
            Bu.map(function (e) {
                return ''.concat(e, 'x');
            })
        )
        .concat(
            h1.map(function (e) {
                return 'w-'.concat(e);
            })
        ),
    Yu = Bt.FontAwesomeConfig || {};
function _1(e) {
    var t = be.querySelector('script[' + e + ']');
    if (t) return t.getAttribute(e);
}
function b1(e) {
    return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e;
}
if (be && typeof be.querySelector == 'function') {
    var y1 = [
        ['data-family-prefix', 'familyPrefix'],
        ['data-style-default', 'styleDefault'],
        ['data-replacement-class', 'replacementClass'],
        ['data-auto-replace-svg', 'autoReplaceSvg'],
        ['data-auto-add-css', 'autoAddCss'],
        ['data-auto-a11y', 'autoA11y'],
        ['data-search-pseudo-elements', 'searchPseudoElements'],
        ['data-observe-mutations', 'observeMutations'],
        ['data-mutate-approach', 'mutateApproach'],
        ['data-keep-original-source', 'keepOriginalSource'],
        ['data-measure-performance', 'measurePerformance'],
        ['data-show-missing-icons', 'showMissingIcons']
    ];
    y1.forEach(function (e) {
        var t = bs(e, 2),
            n = t[0],
            r = t[1],
            a = b1(_1(n));
        a != null && (Yu[r] = a);
    });
}
var E1 = {
        familyPrefix: Hu,
        styleDefault: 'solid',
        replacementClass: Wu,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: 'async',
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    },
    dr = V(V({}, E1), Yu);
dr.autoReplaceSvg || (dr.observeMutations = !1);
var z = {};
Object.keys(dr).forEach(function (e) {
    Object.defineProperty(z, e, {
        enumerable: !0,
        set: function (n) {
            (dr[e] = n),
                Vr.forEach(function (r) {
                    return r(z);
                });
        },
        get: function () {
            return dr[e];
        }
    });
});
Bt.FontAwesomeConfig = z;
var Vr = [];
function T1(e) {
    return (
        Vr.push(e),
        function () {
            Vr.splice(Vr.indexOf(e), 1);
        }
    );
}
var xt = wi,
    gt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function I1(e) {
    if (!(!e || !wt)) {
        var t = be.createElement('style');
        t.setAttribute('type', 'text/css'), (t.innerHTML = e);
        for (
            var n = be.head.childNodes, r = null, a = n.length - 1;
            a > -1;
            a--
        ) {
            var i = n[a],
                s = (i.tagName || '').toUpperCase();
            ['STYLE', 'LINK'].indexOf(s) > -1 && (r = i);
        }
        return be.head.insertBefore(t, r), e;
    }
}
var C1 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function Ar() {
    for (var e = 12, t = ''; e-- > 0; ) t += C1[(Math.random() * 62) | 0];
    return t;
}
function Bn(e) {
    for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
    return t;
}
function Cs(e) {
    return e.classList
        ? Bn(e.classList)
        : (e.getAttribute('class') || '').split(' ').filter(function (t) {
              return t;
          });
}
function Ku(e) {
    return ''
        .concat(e)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
function N1(e) {
    return Object.keys(e || {})
        .reduce(function (t, n) {
            return t + ''.concat(n, '="').concat(Ku(e[n]), '" ');
        }, '')
        .trim();
}
function ka(e) {
    return Object.keys(e || {}).reduce(function (t, n) {
        return t + ''.concat(n, ': ').concat(e[n].trim(), ';');
    }, '');
}
function Ns(e) {
    return (
        e.size !== gt.size ||
        e.x !== gt.x ||
        e.y !== gt.y ||
        e.rotate !== gt.rotate ||
        e.flipX ||
        e.flipY
    );
}
function A1(e) {
    var t = e.transform,
        n = e.containerWidth,
        r = e.iconWidth,
        a = { transform: 'translate('.concat(n / 2, ' 256)') },
        i = 'translate('.concat(t.x * 32, ', ').concat(t.y * 32, ') '),
        s = 'scale('
            .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
            .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
        o = 'rotate('.concat(t.rotate, ' 0 0)'),
        l = { transform: ''.concat(i, ' ').concat(s, ' ').concat(o) },
        c = { transform: 'translate('.concat((r / 2) * -1, ' -256)') };
    return { outer: a, inner: l, path: c };
}
function O1(e) {
    var t = e.transform,
        n = e.width,
        r = n === void 0 ? wi : n,
        a = e.height,
        i = a === void 0 ? wi : a,
        s = e.startCentered,
        o = s === void 0 ? !1 : s,
        l = '';
    return (
        o && Uu
            ? (l += 'translate('
                  .concat(t.x / xt - r / 2, 'em, ')
                  .concat(t.y / xt - i / 2, 'em) '))
            : o
            ? (l += 'translate(calc(-50% + '
                  .concat(t.x / xt, 'em), calc(-50% + ')
                  .concat(t.y / xt, 'em)) '))
            : (l += 'translate('
                  .concat(t.x / xt, 'em, ')
                  .concat(t.y / xt, 'em) ')),
        (l += 'scale('
            .concat((t.size / xt) * (t.flipX ? -1 : 1), ', ')
            .concat((t.size / xt) * (t.flipY ? -1 : 1), ') ')),
        (l += 'rotate('.concat(t.rotate, 'deg) ')),
        l
    );
}
var w1 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function zu() {
    var e = Hu,
        t = Wu,
        n = z.familyPrefix,
        r = z.replacementClass,
        a = w1;
    if (n !== e || r !== t) {
        var i = new RegExp('\\.'.concat(e, '\\-'), 'g'),
            s = new RegExp('\\--'.concat(e, '\\-'), 'g'),
            o = new RegExp('\\.'.concat(t), 'g');
        a = a
            .replace(i, '.'.concat(n, '-'))
            .replace(s, '--'.concat(n, '-'))
            .replace(o, '.'.concat(r));
    }
    return a;
}
var _l = !1;
function za() {
    z.autoAddCss && !_l && (I1(zu()), (_l = !0));
}
var S1 = {
        mixout: function () {
            return { dom: { css: zu, insertCss: za } };
        },
        hooks: function () {
            return {
                beforeDOMElementCreation: function () {
                    za();
                },
                beforeI2svg: function () {
                    za();
                }
            };
        }
    },
    Nt = Bt || {};
Nt[Ct] || (Nt[Ct] = {});
Nt[Ct].styles || (Nt[Ct].styles = {});
Nt[Ct].hooks || (Nt[Ct].hooks = {});
Nt[Ct].shims || (Nt[Ct].shims = []);
var ot = Nt[Ct],
    Xu = [],
    k1 = function e() {
        be.removeEventListener('DOMContentLoaded', e),
            (aa = 1),
            Xu.map(function (t) {
                return t();
            });
    },
    aa = !1;
wt &&
    ((aa = (be.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
        be.readyState
    )),
    aa || be.addEventListener('DOMContentLoaded', k1));
function L1(e) {
    !wt || (aa ? setTimeout(e, 0) : Xu.push(e));
}
function Lr(e) {
    var t = e.tag,
        n = e.attributes,
        r = n === void 0 ? {} : n,
        a = e.children,
        i = a === void 0 ? [] : a;
    return typeof e == 'string'
        ? Ku(e)
        : '<'
              .concat(t, ' ')
              .concat(N1(r), '>')
              .concat(i.map(Lr).join(''), '</')
              .concat(t, '>');
}
function bl(e, t, n) {
    if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var R1 = function (t, n) {
        return function (r, a, i, s) {
            return t.call(n, r, a, i, s);
        };
    },
    Xa = function (t, n, r, a) {
        var i = Object.keys(t),
            s = i.length,
            o = a !== void 0 ? R1(n, a) : n,
            l,
            c,
            u;
        for (
            r === void 0 ? ((l = 1), (u = t[i[0]])) : ((l = 0), (u = r));
            l < s;
            l++
        )
            (c = i[l]), (u = o(u, t[c], c, t));
        return u;
    };
function P1(e) {
    for (var t = [], n = 0, r = e.length; n < r; ) {
        var a = e.charCodeAt(n++);
        if (a >= 55296 && a <= 56319 && n < r) {
            var i = e.charCodeAt(n++);
            (i & 64512) == 56320
                ? t.push(((a & 1023) << 10) + (i & 1023) + 65536)
                : (t.push(a), n--);
        } else t.push(a);
    }
    return t;
}
function ki(e) {
    var t = P1(e);
    return t.length === 1 ? t[0].toString(16) : null;
}
function x1(e, t) {
    var n = e.length,
        r = e.charCodeAt(t),
        a;
    return r >= 55296 &&
        r <= 56319 &&
        n > t + 1 &&
        ((a = e.charCodeAt(t + 1)), a >= 56320 && a <= 57343)
        ? (r - 55296) * 1024 + a - 56320 + 65536
        : r;
}
function yl(e) {
    return Object.keys(e).reduce(function (t, n) {
        var r = e[n],
            a = !!r.icon;
        return a ? (t[r.iconName] = r.icon) : (t[n] = r), t;
    }, {});
}
function Li(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        r = n.skipHooks,
        a = r === void 0 ? !1 : r,
        i = yl(t);
    typeof ot.hooks.addPack == 'function' && !a
        ? ot.hooks.addPack(e, yl(t))
        : (ot.styles[e] = V(V({}, ot.styles[e] || {}), i)),
        e === 'fas' && Li('fa', t);
}
var mr = ot.styles,
    M1 = ot.shims,
    D1 = Object.values(Gu),
    As = null,
    qu = {},
    Qu = {},
    Ju = {},
    Zu = {},
    ef = {},
    F1 = Object.keys(Is);
function $1(e) {
    return ~v1.indexOf(e);
}
function U1(e, t) {
    var n = t.split('-'),
        r = n[0],
        a = n.slice(1).join('-');
    return r === e && a !== '' && !$1(a) ? a : null;
}
var tf = function () {
    var t = function (i) {
        return Xa(
            mr,
            function (s, o, l) {
                return (s[l] = Xa(o, i, {})), s;
            },
            {}
        );
    };
    (qu = t(function (a, i, s) {
        if ((i[3] && (a[i[3]] = s), i[2])) {
            var o = i[2].filter(function (l) {
                return typeof l == 'number';
            });
            o.forEach(function (l) {
                a[l.toString(16)] = s;
            });
        }
        return a;
    })),
        (Qu = t(function (a, i, s) {
            if (((a[s] = s), i[2])) {
                var o = i[2].filter(function (l) {
                    return typeof l == 'string';
                });
                o.forEach(function (l) {
                    a[l] = s;
                });
            }
            return a;
        })),
        (ef = t(function (a, i, s) {
            var o = i[2];
            return (
                (a[s] = s),
                o.forEach(function (l) {
                    a[l] = s;
                }),
                a
            );
        }));
    var n = 'far' in mr || z.autoFetchSvg,
        r = Xa(
            M1,
            function (a, i) {
                var s = i[0],
                    o = i[1],
                    l = i[2];
                return (
                    o === 'far' && !n && (o = 'fas'),
                    typeof s == 'string' &&
                        (a.names[s] = { prefix: o, iconName: l }),
                    typeof s == 'number' &&
                        (a.unicodes[s.toString(16)] = {
                            prefix: o,
                            iconName: l
                        }),
                    a
                );
            },
            { names: {}, unicodes: {} }
        );
    (Ju = r.names), (Zu = r.unicodes), (As = La(z.styleDefault));
};
T1(function (e) {
    As = La(e.styleDefault);
});
tf();
function Os(e, t) {
    return (qu[e] || {})[t];
}
function H1(e, t) {
    return (Qu[e] || {})[t];
}
function Nn(e, t) {
    return (ef[e] || {})[t];
}
function nf(e) {
    return Ju[e] || { prefix: null, iconName: null };
}
function W1(e) {
    var t = Zu[e],
        n = Os('fas', e);
    return (
        t ||
        (n ? { prefix: 'fas', iconName: n } : null) || {
            prefix: null,
            iconName: null
        }
    );
}
function Yt() {
    return As;
}
var ws = function () {
    return { prefix: null, iconName: null, rest: [] };
};
function La(e) {
    var t = Is[e],
        n = ra[e] || ra[t],
        r = e in ot.styles ? e : null;
    return n || r || null;
}
function Ra(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = t.skipLookups,
        r = n === void 0 ? !1 : n,
        a = null,
        i = e.reduce(function (s, o) {
            var l = U1(z.familyPrefix, o);
            if (
                (mr[o]
                    ? ((o = D1.includes(o) ? f1[o] : o),
                      (a = o),
                      (s.prefix = o))
                    : F1.indexOf(o) > -1
                    ? ((a = o), (s.prefix = La(o)))
                    : l
                    ? (s.iconName = l)
                    : o !== z.replacementClass && s.rest.push(o),
                !r && s.prefix && s.iconName)
            ) {
                var c = a === 'fa' ? nf(s.iconName) : {},
                    u = Nn(s.prefix, s.iconName);
                c.prefix && (a = null),
                    (s.iconName = c.iconName || u || s.iconName),
                    (s.prefix = c.prefix || s.prefix),
                    s.prefix === 'far' &&
                        !mr.far &&
                        mr.fas &&
                        !z.autoFetchSvg &&
                        (s.prefix = 'fas');
            }
            return s;
        }, ws());
    return (i.prefix === 'fa' || a === 'fa') && (i.prefix = Yt() || 'fas'), i;
}
var j1 = (function () {
        function e() {
            Jb(this, e), (this.definitions = {});
        }
        return (
            Zb(e, [
                {
                    key: 'add',
                    value: function () {
                        for (
                            var n = this,
                                r = arguments.length,
                                a = new Array(r),
                                i = 0;
                            i < r;
                            i++
                        )
                            a[i] = arguments[i];
                        var s = a.reduce(this._pullDefinitions, {});
                        Object.keys(s).forEach(function (o) {
                            (n.definitions[o] = V(
                                V({}, n.definitions[o] || {}),
                                s[o]
                            )),
                                Li(o, s[o]);
                            var l = Gu[o];
                            l && Li(l, s[o]), tf();
                        });
                    }
                },
                {
                    key: 'reset',
                    value: function () {
                        this.definitions = {};
                    }
                },
                {
                    key: '_pullDefinitions',
                    value: function (n, r) {
                        var a = r.prefix && r.iconName && r.icon ? { 0: r } : r;
                        return (
                            Object.keys(a).map(function (i) {
                                var s = a[i],
                                    o = s.prefix,
                                    l = s.iconName,
                                    c = s.icon,
                                    u = c[2];
                                n[o] || (n[o] = {}),
                                    u.length > 0 &&
                                        u.forEach(function (m) {
                                            typeof m == 'string' &&
                                                (n[o][m] = c);
                                        }),
                                    (n[o][l] = c);
                            }),
                            n
                        );
                    }
                }
            ]),
            e
        );
    })(),
    El = [],
    An = {},
    kn = {},
    G1 = Object.keys(kn);
function V1(e, t) {
    var n = t.mixoutsTo;
    return (
        (El = e),
        (An = {}),
        Object.keys(kn).forEach(function (r) {
            G1.indexOf(r) === -1 && delete kn[r];
        }),
        El.forEach(function (r) {
            var a = r.mixout ? r.mixout() : {};
            if (
                (Object.keys(a).forEach(function (s) {
                    typeof a[s] == 'function' && (n[s] = a[s]),
                        na(a[s]) === 'object' &&
                            Object.keys(a[s]).forEach(function (o) {
                                n[s] || (n[s] = {}), (n[s][o] = a[s][o]);
                            });
                }),
                r.hooks)
            ) {
                var i = r.hooks();
                Object.keys(i).forEach(function (s) {
                    An[s] || (An[s] = []), An[s].push(i[s]);
                });
            }
            r.provides && r.provides(kn);
        }),
        n
    );
}
function Ri(e, t) {
    for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
        a < n;
        a++
    )
        r[a - 2] = arguments[a];
    var i = An[e] || [];
    return (
        i.forEach(function (s) {
            t = s.apply(null, [t].concat(r));
        }),
        t
    );
}
function fn(e) {
    for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
    )
        n[r - 1] = arguments[r];
    var a = An[e] || [];
    a.forEach(function (i) {
        i.apply(null, n);
    });
}
function At() {
    var e = arguments[0],
        t = Array.prototype.slice.call(arguments, 1);
    return kn[e] ? kn[e].apply(null, t) : void 0;
}
function Pi(e) {
    e.prefix === 'fa' && (e.prefix = 'fas');
    var t = e.iconName,
        n = e.prefix || Yt();
    if (!!t)
        return (
            (t = Nn(n, t) || t), bl(rf.definitions, n, t) || bl(ot.styles, n, t)
        );
}
var rf = new j1(),
    B1 = function () {
        (z.autoReplaceSvg = !1), (z.observeMutations = !1), fn('noAuto');
    },
    Y1 = {
        i2svg: function () {
            var t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
            return wt
                ? (fn('beforeI2svg', t),
                  At('pseudoElements2svg', t),
                  At('i2svg', t))
                : Promise.reject('Operation requires a DOM of some kind.');
        },
        watch: function () {
            var t =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {},
                n = t.autoReplaceSvgRoot;
            z.autoReplaceSvg === !1 && (z.autoReplaceSvg = !0),
                (z.observeMutations = !0),
                L1(function () {
                    z1({ autoReplaceSvgRoot: n }), fn('watch', t);
                });
        }
    },
    K1 = {
        icon: function (t) {
            if (t === null) return null;
            if (na(t) === 'object' && t.prefix && t.iconName)
                return {
                    prefix: t.prefix,
                    iconName: Nn(t.prefix, t.iconName) || t.iconName
                };
            if (Array.isArray(t) && t.length === 2) {
                var n = t[1].indexOf('fa-') === 0 ? t[1].slice(3) : t[1],
                    r = La(t[0]);
                return { prefix: r, iconName: Nn(r, n) || n };
            }
            if (
                typeof t == 'string' &&
                (t.indexOf(''.concat(z.familyPrefix, '-')) > -1 || t.match(d1))
            ) {
                var a = Ra(t.split(' '), { skipLookups: !0 });
                return {
                    prefix: a.prefix || Yt(),
                    iconName: Nn(a.prefix, a.iconName) || a.iconName
                };
            }
            if (typeof t == 'string') {
                var i = Yt();
                return { prefix: i, iconName: Nn(i, t) || t };
            }
        }
    },
    Qe = {
        noAuto: B1,
        config: z,
        dom: Y1,
        parse: K1,
        library: rf,
        findIconDefinition: Pi,
        toHtml: Lr
    },
    z1 = function () {
        var t =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
            n = t.autoReplaceSvgRoot,
            r = n === void 0 ? be : n;
        (Object.keys(ot.styles).length > 0 || z.autoFetchSvg) &&
            wt &&
            z.autoReplaceSvg &&
            Qe.dom.i2svg({ node: r });
    };
function Pa(e, t) {
    return (
        Object.defineProperty(e, 'abstract', { get: t }),
        Object.defineProperty(e, 'html', {
            get: function () {
                return e.abstract.map(function (r) {
                    return Lr(r);
                });
            }
        }),
        Object.defineProperty(e, 'node', {
            get: function () {
                if (!!wt) {
                    var r = be.createElement('div');
                    return (r.innerHTML = e.html), r.children;
                }
            }
        }),
        e
    );
}
function X1(e) {
    var t = e.children,
        n = e.main,
        r = e.mask,
        a = e.attributes,
        i = e.styles,
        s = e.transform;
    if (Ns(s) && n.found && !r.found) {
        var o = n.width,
            l = n.height,
            c = { x: o / l / 2, y: 0.5 };
        a.style = ka(
            V(
                V({}, i),
                {},
                {
                    'transform-origin': ''
                        .concat(c.x + s.x / 16, 'em ')
                        .concat(c.y + s.y / 16, 'em')
                }
            )
        );
    }
    return [{ tag: 'svg', attributes: a, children: t }];
}
function q1(e) {
    var t = e.prefix,
        n = e.iconName,
        r = e.children,
        a = e.attributes,
        i = e.symbol,
        s =
            i === !0
                ? ''.concat(t, '-').concat(z.familyPrefix, '-').concat(n)
                : i;
    return [
        {
            tag: 'svg',
            attributes: { style: 'display: none;' },
            children: [
                {
                    tag: 'symbol',
                    attributes: V(V({}, a), {}, { id: s }),
                    children: r
                }
            ]
        }
    ];
}
function Ss(e) {
    var t = e.icons,
        n = t.main,
        r = t.mask,
        a = e.prefix,
        i = e.iconName,
        s = e.transform,
        o = e.symbol,
        l = e.title,
        c = e.maskId,
        u = e.titleId,
        m = e.extra,
        p = e.watchable,
        _ = p === void 0 ? !1 : p,
        N = r.found ? r : n,
        O = N.width,
        A = N.height,
        h = a === 'fak',
        g = [
            z.replacementClass,
            i ? ''.concat(z.familyPrefix, '-').concat(i) : ''
        ]
            .filter(function (Y) {
                return m.classes.indexOf(Y) === -1;
            })
            .filter(function (Y) {
                return Y !== '' || !!Y;
            })
            .concat(m.classes)
            .join(' '),
        I = {
            children: [],
            attributes: V(
                V({}, m.attributes),
                {},
                {
                    'data-prefix': a,
                    'data-icon': i,
                    class: g,
                    role: m.attributes.role || 'img',
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 '.concat(O, ' ').concat(A)
                }
            )
        },
        T =
            h && !~m.classes.indexOf('fa-fw')
                ? { width: ''.concat((O / A) * 16 * 0.0625, 'em') }
                : {};
    _ && (I.attributes[un] = ''),
        l &&
            (I.children.push({
                tag: 'title',
                attributes: {
                    id:
                        I.attributes['aria-labelledby'] ||
                        'title-'.concat(u || Ar())
                },
                children: [l]
            }),
            delete I.attributes.title);
    var C = V(
            V({}, I),
            {},
            {
                prefix: a,
                iconName: i,
                main: n,
                mask: r,
                maskId: c,
                transform: s,
                symbol: o,
                styles: V(V({}, T), m.styles)
            }
        ),
        P =
            r.found && n.found
                ? At('generateAbstractMask', C) || {
                      children: [],
                      attributes: {}
                  }
                : At('generateAbstractIcon', C) || {
                      children: [],
                      attributes: {}
                  },
        R = P.children,
        K = P.attributes;
    return (C.children = R), (C.attributes = K), o ? q1(C) : X1(C);
}
function Tl(e) {
    var t = e.content,
        n = e.width,
        r = e.height,
        a = e.transform,
        i = e.title,
        s = e.extra,
        o = e.watchable,
        l = o === void 0 ? !1 : o,
        c = V(
            V(V({}, s.attributes), i ? { title: i } : {}),
            {},
            { class: s.classes.join(' ') }
        );
    l && (c[un] = '');
    var u = V({}, s.styles);
    Ns(a) &&
        ((u.transform = O1({
            transform: a,
            startCentered: !0,
            width: n,
            height: r
        })),
        (u['-webkit-transform'] = u.transform));
    var m = ka(u);
    m.length > 0 && (c.style = m);
    var p = [];
    return (
        p.push({ tag: 'span', attributes: c, children: [t] }),
        i &&
            p.push({
                tag: 'span',
                attributes: { class: 'sr-only' },
                children: [i]
            }),
        p
    );
}
function Q1(e) {
    var t = e.content,
        n = e.title,
        r = e.extra,
        a = V(
            V(V({}, r.attributes), n ? { title: n } : {}),
            {},
            { class: r.classes.join(' ') }
        ),
        i = ka(r.styles);
    i.length > 0 && (a.style = i);
    var s = [];
    return (
        s.push({ tag: 'span', attributes: a, children: [t] }),
        n &&
            s.push({
                tag: 'span',
                attributes: { class: 'sr-only' },
                children: [n]
            }),
        s
    );
}
var qa = ot.styles;
function xi(e) {
    var t = e[0],
        n = e[1],
        r = e.slice(4),
        a = bs(r, 1),
        i = a[0],
        s = null;
    return (
        Array.isArray(i)
            ? (s = {
                  tag: 'g',
                  attributes: {
                      class: ''.concat(z.familyPrefix, '-').concat(sn.GROUP)
                  },
                  children: [
                      {
                          tag: 'path',
                          attributes: {
                              class: ''
                                  .concat(z.familyPrefix, '-')
                                  .concat(sn.SECONDARY),
                              fill: 'currentColor',
                              d: i[0]
                          }
                      },
                      {
                          tag: 'path',
                          attributes: {
                              class: ''
                                  .concat(z.familyPrefix, '-')
                                  .concat(sn.PRIMARY),
                              fill: 'currentColor',
                              d: i[1]
                          }
                      }
                  ]
              })
            : (s = { tag: 'path', attributes: { fill: 'currentColor', d: i } }),
        { found: !0, width: t, height: n, icon: s }
    );
}
var J1 = { found: !1, width: 512, height: 512 };
function Z1(e, t) {
    !ju &&
        !z.showMissingIcons &&
        e &&
        console.error(
            'Icon with name "'
                .concat(e, '" and prefix "')
                .concat(t, '" is missing.')
        );
}
function Mi(e, t) {
    var n = t;
    return (
        t === 'fa' && z.styleDefault !== null && (t = Yt()),
        new Promise(function (r, a) {
            if ((At('missingIconAbstract'), n === 'fa')) {
                var i = nf(e) || {};
                (e = i.iconName || e), (t = i.prefix || t);
            }
            if (e && t && qa[t] && qa[t][e]) {
                var s = qa[t][e];
                return r(xi(s));
            }
            Z1(e, t),
                r(
                    V(
                        V({}, J1),
                        {},
                        {
                            icon:
                                z.showMissingIcons && e
                                    ? At('missingIconAbstract') || {}
                                    : {}
                        }
                    )
                );
        })
    );
}
var Il = function () {},
    Di =
        z.measurePerformance && Hr && Hr.mark && Hr.measure
            ? Hr
            : { mark: Il, measure: Il },
    tr = 'FA "6.0.0"',
    ey = function (t) {
        return (
            Di.mark(''.concat(tr, ' ').concat(t, ' begins')),
            function () {
                return af(t);
            }
        );
    },
    af = function (t) {
        Di.mark(''.concat(tr, ' ').concat(t, ' ends')),
            Di.measure(
                ''.concat(tr, ' ').concat(t),
                ''.concat(tr, ' ').concat(t, ' begins'),
                ''.concat(tr, ' ').concat(t, ' ends')
            );
    },
    ks = { begin: ey, end: af },
    Br = function () {};
function Cl(e) {
    var t = e.getAttribute ? e.getAttribute(un) : null;
    return typeof t == 'string';
}
function ty(e) {
    var t = e.getAttribute ? e.getAttribute(Es) : null,
        n = e.getAttribute ? e.getAttribute(Ts) : null;
    return t && n;
}
function ny(e) {
    return (
        e &&
        e.classList &&
        e.classList.contains &&
        e.classList.contains(z.replacementClass)
    );
}
function ry() {
    if (z.autoReplaceSvg === !0) return Yr.replace;
    var e = Yr[z.autoReplaceSvg];
    return e || Yr.replace;
}
function ay(e) {
    return be.createElementNS('http://www.w3.org/2000/svg', e);
}
function iy(e) {
    return be.createElement(e);
}
function sf(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = t.ceFn,
        r = n === void 0 ? (e.tag === 'svg' ? ay : iy) : n;
    if (typeof e == 'string') return be.createTextNode(e);
    var a = r(e.tag);
    Object.keys(e.attributes || []).forEach(function (s) {
        a.setAttribute(s, e.attributes[s]);
    });
    var i = e.children || [];
    return (
        i.forEach(function (s) {
            a.appendChild(sf(s, { ceFn: r }));
        }),
        a
    );
}
function sy(e) {
    var t = ' '.concat(e.outerHTML, ' ');
    return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t;
}
var Yr = {
    replace: function (t) {
        var n = t[0];
        if (n.parentNode)
            if (
                (t[1].forEach(function (a) {
                    n.parentNode.insertBefore(sf(a), n);
                }),
                n.getAttribute(un) === null && z.keepOriginalSource)
            ) {
                var r = be.createComment(sy(n));
                n.parentNode.replaceChild(r, n);
            } else n.remove();
    },
    nest: function (t) {
        var n = t[0],
            r = t[1];
        if (~Cs(n).indexOf(z.replacementClass)) return Yr.replace(t);
        var a = new RegExp(''.concat(z.familyPrefix, '-.*'));
        if ((delete r[0].attributes.id, r[0].attributes.class)) {
            var i = r[0].attributes.class.split(' ').reduce(
                function (o, l) {
                    return (
                        l === z.replacementClass || l.match(a)
                            ? o.toSvg.push(l)
                            : o.toNode.push(l),
                        o
                    );
                },
                { toNode: [], toSvg: [] }
            );
            (r[0].attributes.class = i.toSvg.join(' ')),
                i.toNode.length === 0
                    ? n.removeAttribute('class')
                    : n.setAttribute('class', i.toNode.join(' '));
        }
        var s = r.map(function (o) {
            return Lr(o);
        }).join(`
`);
        n.setAttribute(un, ''), (n.innerHTML = s);
    }
};
function Nl(e) {
    e();
}
function of(e, t) {
    var n = typeof t == 'function' ? t : Br;
    if (e.length === 0) n();
    else {
        var r = Nl;
        z.mutateApproach === c1 && (r = Bt.requestAnimationFrame || Nl),
            r(function () {
                var a = ry(),
                    i = ks.begin('mutate');
                e.map(a), i(), n();
            });
    }
}
var Ls = !1;
function lf() {
    Ls = !0;
}
function Fi() {
    Ls = !1;
}
var ia = null;
function Al(e) {
    if (!!gl && !!z.observeMutations) {
        var t = e.treeCallback,
            n = t === void 0 ? Br : t,
            r = e.nodeCallback,
            a = r === void 0 ? Br : r,
            i = e.pseudoElementsCallback,
            s = i === void 0 ? Br : i,
            o = e.observeMutationsRoot,
            l = o === void 0 ? be : o;
        (ia = new gl(function (c) {
            if (!Ls) {
                var u = Yt();
                Bn(c).forEach(function (m) {
                    if (
                        (m.type === 'childList' &&
                            m.addedNodes.length > 0 &&
                            !Cl(m.addedNodes[0]) &&
                            (z.searchPseudoElements && s(m.target),
                            n(m.target)),
                        m.type === 'attributes' &&
                            m.target.parentNode &&
                            z.searchPseudoElements &&
                            s(m.target.parentNode),
                        m.type === 'attributes' &&
                            Cl(m.target) &&
                            ~g1.indexOf(m.attributeName))
                    )
                        if (m.attributeName === 'class' && ty(m.target)) {
                            var p = Ra(Cs(m.target)),
                                _ = p.prefix,
                                N = p.iconName;
                            m.target.setAttribute(Es, _ || u),
                                N && m.target.setAttribute(Ts, N);
                        } else ny(m.target) && a(m.target);
                });
            }
        })),
            wt &&
                ia.observe(l, {
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    subtree: !0
                });
    }
}
function oy() {
    !ia || ia.disconnect();
}
function ly(e) {
    var t = e.getAttribute('style'),
        n = [];
    return (
        t &&
            (n = t.split(';').reduce(function (r, a) {
                var i = a.split(':'),
                    s = i[0],
                    o = i.slice(1);
                return s && o.length > 0 && (r[s] = o.join(':').trim()), r;
            }, {})),
        n
    );
}
function cy(e) {
    var t = e.getAttribute('data-prefix'),
        n = e.getAttribute('data-icon'),
        r = e.innerText !== void 0 ? e.innerText.trim() : '',
        a = Ra(Cs(e));
    return (
        a.prefix || (a.prefix = Yt()),
        t && n && ((a.prefix = t), (a.iconName = n)),
        (a.iconName && a.prefix) ||
            (a.prefix &&
                r.length > 0 &&
                (a.iconName =
                    H1(a.prefix, e.innerText) ||
                    Os(a.prefix, ki(e.innerText)))),
        a
    );
}
function uy(e) {
    var t = Bn(e.attributes).reduce(function (a, i) {
            return (
                a.name !== 'class' &&
                    a.name !== 'style' &&
                    (a[i.name] = i.value),
                a
            );
        }, {}),
        n = e.getAttribute('title'),
        r = e.getAttribute('data-fa-title-id');
    return (
        z.autoA11y &&
            (n
                ? (t['aria-labelledby'] = ''
                      .concat(z.replacementClass, '-title-')
                      .concat(r || Ar()))
                : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
        t
    );
}
function fy() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: gt,
        symbol: !1,
        mask: { iconName: null, prefix: null, rest: [] },
        maskId: null,
        extra: { classes: [], styles: {}, attributes: {} }
    };
}
function Ol(e) {
    var t =
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { styleParser: !0 },
        n = cy(e),
        r = n.iconName,
        a = n.prefix,
        i = n.rest,
        s = uy(e),
        o = Ri('parseNodeAttributes', {}, e),
        l = t.styleParser ? ly(e) : [];
    return V(
        {
            iconName: r,
            title: e.getAttribute('title'),
            titleId: e.getAttribute('data-fa-title-id'),
            prefix: a,
            transform: gt,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            symbol: !1,
            extra: { classes: i, styles: l, attributes: s }
        },
        o
    );
}
var dy = ot.styles;
function cf(e) {
    var t = z.autoReplaceSvg === 'nest' ? Ol(e, { styleParser: !1 }) : Ol(e);
    return ~t.extra.classes.indexOf(Vu)
        ? At('generateLayersText', e, t)
        : At('generateSvgReplacementMutation', e, t);
}
function wl(e) {
    var t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!wt) return Promise.resolve();
    var n = be.documentElement.classList,
        r = function (m) {
            return n.add(''.concat(vl, '-').concat(m));
        },
        a = function (m) {
            return n.remove(''.concat(vl, '-').concat(m));
        },
        i = z.autoFetchSvg ? Object.keys(Is) : Object.keys(dy),
        s = ['.'.concat(Vu, ':not([').concat(un, '])')]
            .concat(
                i.map(function (u) {
                    return '.'.concat(u, ':not([').concat(un, '])');
                })
            )
            .join(', ');
    if (s.length === 0) return Promise.resolve();
    var o = [];
    try {
        o = Bn(e.querySelectorAll(s));
    } catch {}
    if (o.length > 0) r('pending'), a('complete');
    else return Promise.resolve();
    var l = ks.begin('onTree'),
        c = o.reduce(function (u, m) {
            try {
                var p = cf(m);
                p && u.push(p);
            } catch (_) {
                ju || (_.name === 'MissingIcon' && console.error(_));
            }
            return u;
        }, []);
    return new Promise(function (u, m) {
        Promise.all(c)
            .then(function (p) {
                of(p, function () {
                    r('active'),
                        r('complete'),
                        a('pending'),
                        typeof t == 'function' && t(),
                        l(),
                        u();
                });
            })
            .catch(function (p) {
                l(), m(p);
            });
    });
}
function my(e) {
    var t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    cf(e).then(function (n) {
        n && of([n], t);
    });
}
function py(e) {
    return function (t) {
        var n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
            r = (t || {}).icon ? t : Pi(t || {}),
            a = n.mask;
        return (
            a && (a = (a || {}).icon ? a : Pi(a || {})),
            e(r, V(V({}, n), {}, { mask: a }))
        );
    };
}
var hy = function (t) {
        var n =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
            r = n.transform,
            a = r === void 0 ? gt : r,
            i = n.symbol,
            s = i === void 0 ? !1 : i,
            o = n.mask,
            l = o === void 0 ? null : o,
            c = n.maskId,
            u = c === void 0 ? null : c,
            m = n.title,
            p = m === void 0 ? null : m,
            _ = n.titleId,
            N = _ === void 0 ? null : _,
            O = n.classes,
            A = O === void 0 ? [] : O,
            h = n.attributes,
            g = h === void 0 ? {} : h,
            I = n.styles,
            T = I === void 0 ? {} : I;
        if (!!t) {
            var C = t.prefix,
                P = t.iconName,
                R = t.icon;
            return Pa(V({ type: 'icon' }, t), function () {
                return (
                    fn('beforeDOMElementCreation', {
                        iconDefinition: t,
                        params: n
                    }),
                    z.autoA11y &&
                        (p
                            ? (g['aria-labelledby'] = ''
                                  .concat(z.replacementClass, '-title-')
                                  .concat(N || Ar()))
                            : ((g['aria-hidden'] = 'true'),
                              (g.focusable = 'false'))),
                    Ss({
                        icons: {
                            main: xi(R),
                            mask: l
                                ? xi(l.icon)
                                : {
                                      found: !1,
                                      width: null,
                                      height: null,
                                      icon: {}
                                  }
                        },
                        prefix: C,
                        iconName: P,
                        transform: V(V({}, gt), a),
                        symbol: s,
                        title: p,
                        maskId: u,
                        titleId: N,
                        extra: { attributes: g, styles: T, classes: A }
                    })
                );
            });
        }
    },
    gy = {
        mixout: function () {
            return { icon: py(hy) };
        },
        hooks: function () {
            return {
                mutationObserverCallbacks: function (n) {
                    return (n.treeCallback = wl), (n.nodeCallback = my), n;
                }
            };
        },
        provides: function (t) {
            (t.i2svg = function (n) {
                var r = n.node,
                    a = r === void 0 ? be : r,
                    i = n.callback,
                    s = i === void 0 ? function () {} : i;
                return wl(a, s);
            }),
                (t.generateSvgReplacementMutation = function (n, r) {
                    var a = r.iconName,
                        i = r.title,
                        s = r.titleId,
                        o = r.prefix,
                        l = r.transform,
                        c = r.symbol,
                        u = r.mask,
                        m = r.maskId,
                        p = r.extra;
                    return new Promise(function (_, N) {
                        Promise.all([
                            Mi(a, o),
                            u.iconName
                                ? Mi(u.iconName, u.prefix)
                                : Promise.resolve({
                                      found: !1,
                                      width: 512,
                                      height: 512,
                                      icon: {}
                                  })
                        ])
                            .then(function (O) {
                                var A = bs(O, 2),
                                    h = A[0],
                                    g = A[1];
                                _([
                                    n,
                                    Ss({
                                        icons: { main: h, mask: g },
                                        prefix: o,
                                        iconName: a,
                                        transform: l,
                                        symbol: c,
                                        maskId: m,
                                        title: i,
                                        titleId: s,
                                        extra: p,
                                        watchable: !0
                                    })
                                ]);
                            })
                            .catch(N);
                    });
                }),
                (t.generateAbstractIcon = function (n) {
                    var r = n.children,
                        a = n.attributes,
                        i = n.main,
                        s = n.transform,
                        o = n.styles,
                        l = ka(o);
                    l.length > 0 && (a.style = l);
                    var c;
                    return (
                        Ns(s) &&
                            (c = At('generateAbstractTransformGrouping', {
                                main: i,
                                transform: s,
                                containerWidth: i.width,
                                iconWidth: i.width
                            })),
                        r.push(c || i.icon),
                        { children: r, attributes: a }
                    );
                });
        }
    },
    vy = {
        mixout: function () {
            return {
                layer: function (n) {
                    var r =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {},
                        a = r.classes,
                        i = a === void 0 ? [] : a;
                    return Pa({ type: 'layer' }, function () {
                        fn('beforeDOMElementCreation', {
                            assembler: n,
                            params: r
                        });
                        var s = [];
                        return (
                            n(function (o) {
                                Array.isArray(o)
                                    ? o.map(function (l) {
                                          s = s.concat(l.abstract);
                                      })
                                    : (s = s.concat(o.abstract));
                            }),
                            [
                                {
                                    tag: 'span',
                                    attributes: {
                                        class: [
                                            ''.concat(z.familyPrefix, '-layers')
                                        ]
                                            .concat(Sa(i))
                                            .join(' ')
                                    },
                                    children: s
                                }
                            ]
                        );
                    });
                }
            };
        }
    },
    _y = {
        mixout: function () {
            return {
                counter: function (n) {
                    var r =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {},
                        a = r.title,
                        i = a === void 0 ? null : a,
                        s = r.classes,
                        o = s === void 0 ? [] : s,
                        l = r.attributes,
                        c = l === void 0 ? {} : l,
                        u = r.styles,
                        m = u === void 0 ? {} : u;
                    return Pa({ type: 'counter', content: n }, function () {
                        return (
                            fn('beforeDOMElementCreation', {
                                content: n,
                                params: r
                            }),
                            Q1({
                                content: n.toString(),
                                title: i,
                                extra: {
                                    attributes: c,
                                    styles: m,
                                    classes: [
                                        ''.concat(
                                            z.familyPrefix,
                                            '-layers-counter'
                                        )
                                    ].concat(Sa(o))
                                }
                            })
                        );
                    });
                }
            };
        }
    },
    by = {
        mixout: function () {
            return {
                text: function (n) {
                    var r =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {},
                        a = r.transform,
                        i = a === void 0 ? gt : a,
                        s = r.title,
                        o = s === void 0 ? null : s,
                        l = r.classes,
                        c = l === void 0 ? [] : l,
                        u = r.attributes,
                        m = u === void 0 ? {} : u,
                        p = r.styles,
                        _ = p === void 0 ? {} : p;
                    return Pa({ type: 'text', content: n }, function () {
                        return (
                            fn('beforeDOMElementCreation', {
                                content: n,
                                params: r
                            }),
                            Tl({
                                content: n,
                                transform: V(V({}, gt), i),
                                title: o,
                                extra: {
                                    attributes: m,
                                    styles: _,
                                    classes: [
                                        ''.concat(
                                            z.familyPrefix,
                                            '-layers-text'
                                        )
                                    ].concat(Sa(c))
                                }
                            })
                        );
                    });
                }
            };
        },
        provides: function (t) {
            t.generateLayersText = function (n, r) {
                var a = r.title,
                    i = r.transform,
                    s = r.extra,
                    o = null,
                    l = null;
                if (Uu) {
                    var c = parseInt(getComputedStyle(n).fontSize, 10),
                        u = n.getBoundingClientRect();
                    (o = u.width / c), (l = u.height / c);
                }
                return (
                    z.autoA11y && !a && (s.attributes['aria-hidden'] = 'true'),
                    Promise.resolve([
                        n,
                        Tl({
                            content: n.innerHTML,
                            width: o,
                            height: l,
                            transform: i,
                            title: a,
                            extra: s,
                            watchable: !0
                        })
                    ])
                );
            };
        }
    },
    yy = new RegExp('"', 'ug'),
    Sl = [1105920, 1112319];
function Ey(e) {
    var t = e.replace(yy, ''),
        n = x1(t, 0),
        r = n >= Sl[0] && n <= Sl[1],
        a = t.length === 2 ? t[0] === t[1] : !1;
    return { value: ki(a ? t[0] : t), isSecondary: r || a };
}
function kl(e, t) {
    var n = ''.concat(l1).concat(t.replace(':', '-'));
    return new Promise(function (r, a) {
        if (e.getAttribute(n) !== null) return r();
        var i = Bn(e.children),
            s = i.filter(function (P) {
                return P.getAttribute(Si) === t;
            })[0],
            o = Bt.getComputedStyle(e, t),
            l = o.getPropertyValue('font-family').match(m1),
            c = o.getPropertyValue('font-weight'),
            u = o.getPropertyValue('content');
        if (s && !l) return e.removeChild(s), r();
        if (l && u !== 'none' && u !== '') {
            var m = o.getPropertyValue('content'),
                p = ~[
                    'Solid',
                    'Regular',
                    'Light',
                    'Thin',
                    'Duotone',
                    'Brands',
                    'Kit'
                ].indexOf(l[2])
                    ? ra[l[2].toLowerCase()]
                    : p1[c],
                _ = Ey(m),
                N = _.value,
                O = _.isSecondary,
                A = l[0].startsWith('FontAwesome'),
                h = Os(p, N),
                g = h;
            if (A) {
                var I = W1(N);
                I.iconName && I.prefix && ((h = I.iconName), (p = I.prefix));
            }
            if (
                h &&
                !O &&
                (!s || s.getAttribute(Es) !== p || s.getAttribute(Ts) !== g)
            ) {
                e.setAttribute(n, g), s && e.removeChild(s);
                var T = fy(),
                    C = T.extra;
                (C.attributes[Si] = t),
                    Mi(h, p)
                        .then(function (P) {
                            var R = Ss(
                                    V(
                                        V({}, T),
                                        {},
                                        {
                                            icons: { main: P, mask: ws() },
                                            prefix: p,
                                            iconName: g,
                                            extra: C,
                                            watchable: !0
                                        }
                                    )
                                ),
                                K = be.createElement('svg');
                            t === '::before'
                                ? e.insertBefore(K, e.firstChild)
                                : e.appendChild(K),
                                (K.outerHTML = R.map(function (Y) {
                                    return Lr(Y);
                                }).join(`
`)),
                                e.removeAttribute(n),
                                r();
                        })
                        .catch(a);
            } else r();
        } else r();
    });
}
function Ty(e) {
    return Promise.all([kl(e, '::before'), kl(e, '::after')]);
}
function Iy(e) {
    return (
        e.parentNode !== document.head &&
        !~u1.indexOf(e.tagName.toUpperCase()) &&
        !e.getAttribute(Si) &&
        (!e.parentNode || e.parentNode.tagName !== 'svg')
    );
}
function Ll(e) {
    if (!!wt)
        return new Promise(function (t, n) {
            var r = Bn(e.querySelectorAll('*')).filter(Iy).map(Ty),
                a = ks.begin('searchPseudoElements');
            lf(),
                Promise.all(r)
                    .then(function () {
                        a(), Fi(), t();
                    })
                    .catch(function () {
                        a(), Fi(), n();
                    });
        });
}
var Cy = {
        hooks: function () {
            return {
                mutationObserverCallbacks: function (n) {
                    return (n.pseudoElementsCallback = Ll), n;
                }
            };
        },
        provides: function (t) {
            t.pseudoElements2svg = function (n) {
                var r = n.node,
                    a = r === void 0 ? be : r;
                z.searchPseudoElements && Ll(a);
            };
        }
    },
    Rl = !1,
    Ny = {
        mixout: function () {
            return {
                dom: {
                    unwatch: function () {
                        lf(), (Rl = !0);
                    }
                }
            };
        },
        hooks: function () {
            return {
                bootstrap: function () {
                    Al(Ri('mutationObserverCallbacks', {}));
                },
                noAuto: function () {
                    oy();
                },
                watch: function (n) {
                    var r = n.observeMutationsRoot;
                    Rl
                        ? Fi()
                        : Al(
                              Ri('mutationObserverCallbacks', {
                                  observeMutationsRoot: r
                              })
                          );
                }
            };
        }
    },
    Pl = function (t) {
        var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
        return t
            .toLowerCase()
            .split(' ')
            .reduce(function (r, a) {
                var i = a.toLowerCase().split('-'),
                    s = i[0],
                    o = i.slice(1).join('-');
                if (s && o === 'h') return (r.flipX = !0), r;
                if (s && o === 'v') return (r.flipY = !0), r;
                if (((o = parseFloat(o)), isNaN(o))) return r;
                switch (s) {
                    case 'grow':
                        r.size = r.size + o;
                        break;
                    case 'shrink':
                        r.size = r.size - o;
                        break;
                    case 'left':
                        r.x = r.x - o;
                        break;
                    case 'right':
                        r.x = r.x + o;
                        break;
                    case 'up':
                        r.y = r.y - o;
                        break;
                    case 'down':
                        r.y = r.y + o;
                        break;
                    case 'rotate':
                        r.rotate = r.rotate + o;
                        break;
                }
                return r;
            }, n);
    },
    Ay = {
        mixout: function () {
            return {
                parse: {
                    transform: function (n) {
                        return Pl(n);
                    }
                }
            };
        },
        hooks: function () {
            return {
                parseNodeAttributes: function (n, r) {
                    var a = r.getAttribute('data-fa-transform');
                    return a && (n.transform = Pl(a)), n;
                }
            };
        },
        provides: function (t) {
            t.generateAbstractTransformGrouping = function (n) {
                var r = n.main,
                    a = n.transform,
                    i = n.containerWidth,
                    s = n.iconWidth,
                    o = { transform: 'translate('.concat(i / 2, ' 256)') },
                    l = 'translate('
                        .concat(a.x * 32, ', ')
                        .concat(a.y * 32, ') '),
                    c = 'scale('
                        .concat((a.size / 16) * (a.flipX ? -1 : 1), ', ')
                        .concat((a.size / 16) * (a.flipY ? -1 : 1), ') '),
                    u = 'rotate('.concat(a.rotate, ' 0 0)'),
                    m = {
                        transform: ''.concat(l, ' ').concat(c, ' ').concat(u)
                    },
                    p = {
                        transform: 'translate('.concat((s / 2) * -1, ' -256)')
                    },
                    _ = { outer: o, inner: m, path: p };
                return {
                    tag: 'g',
                    attributes: V({}, _.outer),
                    children: [
                        {
                            tag: 'g',
                            attributes: V({}, _.inner),
                            children: [
                                {
                                    tag: r.icon.tag,
                                    children: r.icon.children,
                                    attributes: V(
                                        V({}, r.icon.attributes),
                                        _.path
                                    )
                                }
                            ]
                        }
                    ]
                };
            };
        }
    },
    Qa = { x: 0, y: 0, width: '100%', height: '100%' };
function xl(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return (
        e.attributes &&
            (e.attributes.fill || t) &&
            (e.attributes.fill = 'black'),
        e
    );
}
function Oy(e) {
    return e.tag === 'g' ? e.children : [e];
}
var wy = {
        hooks: function () {
            return {
                parseNodeAttributes: function (n, r) {
                    var a = r.getAttribute('data-fa-mask'),
                        i = a
                            ? Ra(
                                  a.split(' ').map(function (s) {
                                      return s.trim();
                                  })
                              )
                            : ws();
                    return (
                        i.prefix || (i.prefix = Yt()),
                        (n.mask = i),
                        (n.maskId = r.getAttribute('data-fa-mask-id')),
                        n
                    );
                }
            };
        },
        provides: function (t) {
            t.generateAbstractMask = function (n) {
                var r = n.children,
                    a = n.attributes,
                    i = n.main,
                    s = n.mask,
                    o = n.maskId,
                    l = n.transform,
                    c = i.width,
                    u = i.icon,
                    m = s.width,
                    p = s.icon,
                    _ = A1({ transform: l, containerWidth: m, iconWidth: c }),
                    N = {
                        tag: 'rect',
                        attributes: V(V({}, Qa), {}, { fill: 'white' })
                    },
                    O = u.children ? { children: u.children.map(xl) } : {},
                    A = {
                        tag: 'g',
                        attributes: V({}, _.inner),
                        children: [
                            xl(
                                V(
                                    {
                                        tag: u.tag,
                                        attributes: V(
                                            V({}, u.attributes),
                                            _.path
                                        )
                                    },
                                    O
                                )
                            )
                        ]
                    },
                    h = { tag: 'g', attributes: V({}, _.outer), children: [A] },
                    g = 'mask-'.concat(o || Ar()),
                    I = 'clip-'.concat(o || Ar()),
                    T = {
                        tag: 'mask',
                        attributes: V(
                            V({}, Qa),
                            {},
                            {
                                id: g,
                                maskUnits: 'userSpaceOnUse',
                                maskContentUnits: 'userSpaceOnUse'
                            }
                        ),
                        children: [N, h]
                    },
                    C = {
                        tag: 'defs',
                        children: [
                            {
                                tag: 'clipPath',
                                attributes: { id: I },
                                children: Oy(p)
                            },
                            T
                        ]
                    };
                return (
                    r.push(C, {
                        tag: 'rect',
                        attributes: V(
                            {
                                fill: 'currentColor',
                                'clip-path': 'url(#'.concat(I, ')'),
                                mask: 'url(#'.concat(g, ')')
                            },
                            Qa
                        )
                    }),
                    { children: r, attributes: a }
                );
            };
        }
    },
    Sy = {
        provides: function (t) {
            var n = !1;
            Bt.matchMedia &&
                (n = Bt.matchMedia('(prefers-reduced-motion: reduce)').matches),
                (t.missingIconAbstract = function () {
                    var r = [],
                        a = { fill: 'currentColor' },
                        i = {
                            attributeType: 'XML',
                            repeatCount: 'indefinite',
                            dur: '2s'
                        };
                    r.push({
                        tag: 'path',
                        attributes: V(
                            V({}, a),
                            {},
                            {
                                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
                            }
                        )
                    });
                    var s = V(V({}, i), {}, { attributeName: 'opacity' }),
                        o = {
                            tag: 'circle',
                            attributes: V(
                                V({}, a),
                                {},
                                { cx: '256', cy: '364', r: '28' }
                            ),
                            children: []
                        };
                    return (
                        n ||
                            o.children.push(
                                {
                                    tag: 'animate',
                                    attributes: V(
                                        V({}, i),
                                        {},
                                        {
                                            attributeName: 'r',
                                            values: '28;14;28;28;14;28;'
                                        }
                                    )
                                },
                                {
                                    tag: 'animate',
                                    attributes: V(
                                        V({}, s),
                                        {},
                                        { values: '1;0;1;1;0;1;' }
                                    )
                                }
                            ),
                        r.push(o),
                        r.push({
                            tag: 'path',
                            attributes: V(
                                V({}, a),
                                {},
                                {
                                    opacity: '1',
                                    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
                                }
                            ),
                            children: n
                                ? []
                                : [
                                      {
                                          tag: 'animate',
                                          attributes: V(
                                              V({}, s),
                                              {},
                                              { values: '1;0;0;0;0;1;' }
                                          )
                                      }
                                  ]
                        }),
                        n ||
                            r.push({
                                tag: 'path',
                                attributes: V(
                                    V({}, a),
                                    {},
                                    {
                                        opacity: '0',
                                        d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
                                    }
                                ),
                                children: [
                                    {
                                        tag: 'animate',
                                        attributes: V(
                                            V({}, s),
                                            {},
                                            { values: '0;0;1;1;0;0;' }
                                        )
                                    }
                                ]
                            }),
                        {
                            tag: 'g',
                            attributes: { class: 'missing' },
                            children: r
                        }
                    );
                });
        }
    },
    ky = {
        hooks: function () {
            return {
                parseNodeAttributes: function (n, r) {
                    var a = r.getAttribute('data-fa-symbol'),
                        i = a === null ? !1 : a === '' ? !0 : a;
                    return (n.symbol = i), n;
                }
            };
        }
    },
    Ly = [S1, gy, vy, _y, by, Cy, Ny, Ay, wy, Sy, ky];
V1(Ly, { mixoutsTo: Qe });
Qe.noAuto;
var uf = Qe.config,
    Xt = Qe.library;
Qe.dom;
var ff = Qe.parse;
Qe.findIconDefinition;
Qe.toHtml;
var Ry = Qe.icon;
Qe.layer;
var Py = Qe.text;
Qe.counter;
var xy =
    typeof window != 'undefined'
        ? window
        : typeof global != 'undefined'
        ? global
        : typeof self != 'undefined'
        ? self
        : {};
function My(e, t) {
    return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var Dy = My(function (e) {
        (function (t) {
            var n = function (h, g, I) {
                    if (!c(g) || m(g) || p(g) || _(g) || l(g)) return g;
                    var T,
                        C = 0,
                        P = 0;
                    if (u(g))
                        for (T = [], P = g.length; C < P; C++)
                            T.push(n(h, g[C], I));
                    else {
                        T = {};
                        for (var R in g)
                            Object.prototype.hasOwnProperty.call(g, R) &&
                                (T[h(R, I)] = n(h, g[R], I));
                    }
                    return T;
                },
                r = function (h, g) {
                    g = g || {};
                    var I = g.separator || '_',
                        T = g.split || /(?=[A-Z])/;
                    return h.split(T).join(I);
                },
                a = function (h) {
                    return N(h)
                        ? h
                        : ((h = h.replace(/[\-_\s]+(.)?/g, function (g, I) {
                              return I ? I.toUpperCase() : '';
                          })),
                          h.substr(0, 1).toLowerCase() + h.substr(1));
                },
                i = function (h) {
                    var g = a(h);
                    return g.substr(0, 1).toUpperCase() + g.substr(1);
                },
                s = function (h, g) {
                    return r(h, g).toLowerCase();
                },
                o = Object.prototype.toString,
                l = function (h) {
                    return typeof h == 'function';
                },
                c = function (h) {
                    return h === Object(h);
                },
                u = function (h) {
                    return o.call(h) == '[object Array]';
                },
                m = function (h) {
                    return o.call(h) == '[object Date]';
                },
                p = function (h) {
                    return o.call(h) == '[object RegExp]';
                },
                _ = function (h) {
                    return o.call(h) == '[object Boolean]';
                },
                N = function (h) {
                    return (h = h - 0), h === h;
                },
                O = function (h, g) {
                    var I = g && 'process' in g ? g.process : g;
                    return typeof I != 'function'
                        ? h
                        : function (T, C) {
                              return I(T, h, C);
                          };
                },
                A = {
                    camelize: a,
                    decamelize: s,
                    pascalize: i,
                    depascalize: s,
                    camelizeKeys: function (h, g) {
                        return n(O(a, g), h);
                    },
                    decamelizeKeys: function (h, g) {
                        return n(O(s, g), h, g);
                    },
                    pascalizeKeys: function (h, g) {
                        return n(O(i, g), h);
                    },
                    depascalizeKeys: function () {
                        return this.decamelizeKeys.apply(this, arguments);
                    }
                };
            e.exports ? (e.exports = A) : (t.humps = A);
        })(xy);
    }),
    Fy =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e &&
                      typeof Symbol == 'function' &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
              },
    nr = function (e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n),
            e
        );
    },
    sa =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    $y = function (e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 ||
                !Object.prototype.hasOwnProperty.call(e, r) ||
                (n[r] = e[r]);
        return n;
    },
    $i = function (e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        } else return Array.from(e);
    };
function Uy(e) {
    return e
        .split(';')
        .map(function (t) {
            return t.trim();
        })
        .filter(function (t) {
            return t;
        })
        .reduce(function (t, n) {
            var r = n.indexOf(':'),
                a = Dy.camelize(n.slice(0, r)),
                i = n.slice(r + 1).trim();
            return (t[a] = i), t;
        }, {});
}
function Hy(e) {
    return e.split(/\s+/).reduce(function (t, n) {
        return (t[n] = !0), t;
    }, {});
}
function Rs(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof e == 'string') return e;
    var r = (e.children || []).map(function (l) {
            return Rs(l);
        }),
        a = Object.keys(e.attributes || {}).reduce(
            function (l, c) {
                var u = e.attributes[c];
                switch (c) {
                    case 'class':
                        l.class = Hy(u);
                        break;
                    case 'style':
                        l.style = Uy(u);
                        break;
                    default:
                        l.attrs[c] = u;
                }
                return l;
            },
            { attrs: {}, class: {}, style: {} }
        );
    n.class;
    var i = n.style,
        s = i === void 0 ? {} : i,
        o = $y(n, ['class', 'style']);
    return mn(
        e.tag,
        sa({}, t, { class: a.class, style: sa({}, a.style, s) }, a.attrs, o),
        r
    );
}
var df = !1;
try {
    df = !0;
} catch {}
function Wy() {
    if (!df && console && typeof console.error == 'function') {
        var e;
        (e = console).error.apply(e, arguments);
    }
}
function pr(e, t) {
    return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
        ? nr({}, e, t)
        : {};
}
function jy(e) {
    var t,
        n =
            ((t = {
                'fa-spin': e.spin,
                'fa-pulse': e.pulse,
                'fa-fw': e.fixedWidth,
                'fa-border': e.border,
                'fa-li': e.listItem,
                'fa-inverse': e.inverse,
                'fa-flip-horizontal':
                    e.flip === 'horizontal' || e.flip === 'both',
                'fa-flip-vertical': e.flip === 'vertical' || e.flip === 'both'
            }),
            nr(t, 'fa-' + e.size, e.size !== null),
            nr(t, 'fa-rotate-' + e.rotation, e.rotation !== null),
            nr(t, 'fa-pull-' + e.pull, e.pull !== null),
            nr(t, 'fa-swap-opacity', e.swapOpacity),
            t);
    return Object.keys(n)
        .map(function (r) {
            return n[r] ? r : null;
        })
        .filter(function (r) {
            return r;
        });
}
function Ml(e) {
    if (e === null) return null;
    if (
        (typeof e == 'undefined' ? 'undefined' : Fy(e)) === 'object' &&
        e.prefix &&
        e.iconName
    )
        return e;
    if (Array.isArray(e) && e.length === 2)
        return { prefix: e[0], iconName: e[1] };
    if (typeof e == 'string') return { prefix: 'fas', iconName: e };
}
var Gy = at({
    name: 'FontAwesomeIcon',
    props: {
        border: { type: Boolean, default: !1 },
        fixedWidth: { type: Boolean, default: !1 },
        flip: {
            type: String,
            default: null,
            validator: function (t) {
                return ['horizontal', 'vertical', 'both'].indexOf(t) > -1;
            }
        },
        icon: { type: [Object, Array, String], required: !0 },
        mask: { type: [Object, Array, String], default: null },
        listItem: { type: Boolean, default: !1 },
        pull: {
            type: String,
            default: null,
            validator: function (t) {
                return ['right', 'left'].indexOf(t) > -1;
            }
        },
        pulse: { type: Boolean, default: !1 },
        rotation: {
            type: [String, Number],
            default: null,
            validator: function (t) {
                return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
            }
        },
        swapOpacity: { type: Boolean, default: !1 },
        size: {
            type: String,
            default: null,
            validator: function (t) {
                return (
                    [
                        'lg',
                        'xs',
                        'sm',
                        '1x',
                        '2x',
                        '3x',
                        '4x',
                        '5x',
                        '6x',
                        '7x',
                        '8x',
                        '9x',
                        '10x'
                    ].indexOf(t) > -1
                );
            }
        },
        spin: { type: Boolean, default: !1 },
        transform: { type: [String, Object], default: null },
        symbol: { type: [Boolean, String], default: !1 },
        title: { type: String, default: null },
        inverse: { type: Boolean, default: !1 }
    },
    setup: function (t, n) {
        var r = n.attrs,
            a = ee(function () {
                return Ml(t.icon);
            }),
            i = ee(function () {
                return pr('classes', jy(t));
            }),
            s = ee(function () {
                return pr(
                    'transform',
                    typeof t.transform == 'string'
                        ? ff.transform(t.transform)
                        : t.transform
                );
            }),
            o = ee(function () {
                return pr('mask', Ml(t.mask));
            }),
            l = ee(function () {
                return Ry(
                    a.value,
                    sa({}, i.value, s.value, o.value, {
                        symbol: t.symbol,
                        title: t.title
                    })
                );
            });
        ct(
            l,
            function (u) {
                if (!u)
                    return Wy(
                        'Could not find one or more icon(s)',
                        a.value,
                        o.value
                    );
            },
            { immediate: !0 }
        );
        var c = ee(function () {
            return l.value ? Rs(l.value.abstract[0], {}, r) : null;
        });
        return function () {
            return c.value;
        };
    }
});
at({
    name: 'FontAwesomeLayers',
    props: { fixedWidth: { type: Boolean, default: !1 } },
    setup: function (t, n) {
        var r = n.slots,
            a = uf.familyPrefix,
            i = ee(function () {
                return [a + '-layers'].concat(
                    $i(t.fixedWidth ? [a + '-fw'] : [])
                );
            });
        return function () {
            return mn('div', { class: i.value }, r.default ? r.default() : []);
        };
    }
});
at({
    name: 'FontAwesomeLayersText',
    props: {
        value: { type: [String, Number], default: '' },
        transform: { type: [String, Object], default: null },
        counter: { type: Boolean, default: !1 },
        position: {
            type: String,
            default: null,
            validator: function (t) {
                return (
                    [
                        'bottom-left',
                        'bottom-right',
                        'top-left',
                        'top-right'
                    ].indexOf(t) > -1
                );
            }
        }
    },
    setup: function (t, n) {
        var r = n.attrs,
            a = uf.familyPrefix,
            i = ee(function () {
                return pr(
                    'classes',
                    [].concat(
                        $i(t.counter ? [a + '-layers-counter'] : []),
                        $i(t.position ? [a + '-layers-' + t.position] : [])
                    )
                );
            }),
            s = ee(function () {
                return pr(
                    'transform',
                    typeof t.transform == 'string'
                        ? ff.transform(t.transform)
                        : t.transform
                );
            }),
            o = ee(function () {
                var c = Py(t.value.toString(), sa({}, s.value, i.value)),
                    u = c.abstract;
                return (
                    t.counter &&
                        (u[0].attributes.class = u[0].attributes.class.replace(
                            'fa-layers-text',
                            ''
                        )),
                    u[0]
                );
            }),
            l = ee(function () {
                return Rs(o.value, {}, r);
            });
        return function () {
            return l.value;
        };
    }
});
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */ var Vy = {
        prefix: 'fas',
        iconName: 'bars',
        icon: [
            448,
            512,
            ['navicon'],
            'f0c9',
            'M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z'
        ]
    },
    By = {
        prefix: 'fas',
        iconName: 'diamond',
        icon: [
            512,
            512,
            [9830],
            'f219',
            'M500.3 227.7C515.9 243.3 515.9 268.7 500.3 284.3L284.3 500.3C268.7 515.9 243.3 515.9 227.7 500.3L11.72 284.3C-3.905 268.7-3.905 243.3 11.72 227.7L227.7 11.72C243.3-3.905 268.7-3.905 284.3 11.72L500.3 227.7z'
        ]
    },
    Yy = {
        prefix: 'fas',
        iconName: 'globe',
        icon: [
            512,
            512,
            [127760],
            'f0ac',
            'M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z'
        ]
    },
    Ky = {
        prefix: 'fas',
        iconName: 'mobile',
        icon: [
            384,
            512,
            [128241, 'mobile-android', 'mobile-phone'],
            'f3ce',
            'M320 0H64C37.5 0 16 21.5 16 48v416C16 490.5 37.5 512 64 512h256c26.5 0 48-21.5 48-48v-416C368 21.5 346.5 0 320 0zM240 447.1C240 456.8 232.8 464 224 464H159.1C151.2 464 144 456.8 144 448S151.2 432 160 432h64C232.8 432 240 439.2 240 447.1z'
        ]
    },
    zy = {
        prefix: 'fas',
        iconName: 'paper-plane',
        icon: [
            512,
            512,
            [61913],
            'f1d8',
            'M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z'
        ]
    },
    Xy = {
        prefix: 'fas',
        iconName: 'xmark',
        icon: [
            320,
            512,
            [
                128473,
                10005,
                10006,
                10060,
                215,
                'close',
                'multiply',
                'remove',
                'times'
            ],
            'f00d',
            'M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z'
        ]
    };
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */ var qy = {
        prefix: 'fab',
        iconName: 'github',
        icon: [
            496,
            512,
            [],
            'f09b',
            'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
        ]
    },
    Qy = {
        prefix: 'fab',
        iconName: 'linkedin',
        icon: [
            448,
            512,
            [],
            'f08c',
            'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
        ]
    };
Xt.add(Ky);
Xt.add(By);
Xt.add(Vy);
Xt.add(Qy);
Xt.add(Xy);
Xt.add(zy);
Xt.add(Yy);
Xt.add(qy);
const Yn = Kc(s_);
var Dl;
const Jy = Cv({
    legacy: !1,
    locale: (Dl = localStorage.getItem('locale')) != null ? Dl : 'zh-TW',
    fallbackLocale: 'zh-TW',
    messages: { 'zh-TW': ib, 'en-US': Qb }
});
Yn.component('font-awesome-icon', Gy);
Yn.use(m_);
Yn.use(jp, iu);
Yn.use(Jy);
Yn.directive('src', (e, t) => {
    if (((e.style.opacity = 0), t.value)) {
        const n = new Image();
        (n.src = t.value),
            (n.onload = () => {
                (e.src = t.value), (e.style.opacity = 1);
            });
    }
});
Yn.mount('#app');
export {
    es as A,
    ct as B,
    fc as C,
    ts as D,
    Od as E,
    Ae as F,
    dn as G,
    Or as H,
    Rn as I,
    Zd as J,
    aE as K,
    rE as L,
    jd as M,
    $n as N,
    nE as O,
    Uv as P,
    Ir as T,
    hn as _,
    Wt as a,
    Ee as b,
    Be as c,
    at as d,
    jm as e,
    Ce as f,
    Tt as g,
    Js as h,
    Cv as i,
    Qb as j,
    Kc as k,
    ee as l,
    wr as m,
    jn as n,
    ye as o,
    Pn as p,
    Vv as q,
    ya as r,
    jp as s,
    Kr as t,
    kr as u,
    eE as v,
    rn as w,
    tE as x,
    mn as y,
    ib as z
};
