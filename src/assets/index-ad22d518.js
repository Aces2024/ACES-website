(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver(r => {
        for (const o of r)
            if (o.type === "childList")
                for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
})();

function U() {}
const Et = t => t;

function be(t, e) {
    for (const n in e) t[n] = e[n];
    return t
}

function Rs(t) {
    return t()
}

function Qn() {
    return Object.create(null)
}

function ye(t) {
    t.forEach(Rs)
}

function We(t) {
    return typeof t == "function"
}

function K(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let Tt;

function pe(t, e) {
    return Tt || (Tt = document.createElement("a")), Tt.href = e, t === Tt.href
}

function Lr(t) {
    return Object.keys(t).length === 0
}

function Pn(t, ...e) {
    if (t == null) return U;
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function Ve(t) {
    let e;
    return Pn(t, n => e = n)(), e
}

function ve(t, e, n) {
    t.$$.on_destroy.push(Pn(e, n))
}

function Ge(t, e, n, s) {
    if (t) {
        const r = Ts(t, e, n, s);
        return t[0](r)
    }
}

function Ts(t, e, n, s) {
    return t[1] && s ? be(n.ctx.slice(), t[1](s(e))) : n.ctx
}

function Ke(t, e, n, s) {
    if (t[2] && s) {
        const r = t[2](s(n));
        if (e.dirty === void 0) return r;
        if (typeof r == "object") {
            const o = [],
                i = Math.max(e.dirty.length, r.length);
            for (let a = 0; a < i; a += 1) o[a] = e.dirty[a] | r[a];
            return o
        }
        return e.dirty | r
    }
    return e.dirty
}

function xe(t, e, n, s, r, o) {
    if (r) {
        const i = Ts(e, n, s, o);
        t.p(i, r)
    }
}

function Ye(t) {
    if (t.ctx.length > 32) {
        const e = [],
            n = t.ctx.length / 32;
        for (let s = 0; s < n; s++) e[s] = -1;
        return e
    }
    return -1
}

function ct(t) {
    const e = {};
    for (const n in t) n[0] !== "$" && (e[n] = t[n]);
    return e
}

function Jt(t, e) {
    const n = {};
    e = new Set(e);
    for (const s in t) !e.has(s) && s[0] !== "$" && (n[s] = t[s]);
    return n
}

function Mt(t) {
    return t && We(t.destroy) ? t.destroy : U
}

function Wn(t) {
    const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"]
}
const Or = ["", !0, 1, "true", "contenteditable"],
    As = typeof window < "u";
let Xt = As ? () => window.performance.now() : () => Date.now(),
    Cn = As ? t => requestAnimationFrame(t) : U;
const lt = new Set;

function Ds(t) {
    lt.forEach(e => {
        e.c(t) || (lt.delete(e), e.f())
    }), lt.size !== 0 && Cn(Ds)
}

function Qt(t) {
    let e;
    return lt.size === 0 && Cn(Ds), {
        promise: new Promise(n => {
            lt.add(e = {
                c: t,
                f: n
            })
        }),
        abort() {
            lt.delete(e)
        }
    }
}
const Rn = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;

function w(t, e) {
    t.appendChild(e)
}

function Ns(t) {
    if (!t) return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}

function Pr(t) {
    const e = M("style");
    return Cr(Ns(t), e), e.sheet
}

function Cr(t, e) {
    return w(t.head || t, e), e.sheet
}

function S(t, e, n) {
    t.insertBefore(e, n || null)
}

function k(t) {
    t.parentNode && t.parentNode.removeChild(t)
}

function gt(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}

function M(t) {
    return document.createElement(t)
}

function re(t) {
    return document.createTextNode(t)
}

function O() {
    return re(" ")
}

function Ne() {
    return re("")
}

function ue(t, e, n, s) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s)
}

function $(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
const Rr = ["width", "height"];

function Xe(t, e) {
    const n = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const s in e) e[s] == null ? t.removeAttribute(s) : s === "style" ? t.style.cssText = e[s] : s === "__value" ? t.value = t[s] = e[s] : n[s] && n[s].set && Rr.indexOf(s) === -1 ? t[s] = e[s] : $(t, s, e[s])
}

function Tr(t, e) {
    Object.keys(e).forEach(n => {
        He(t, n, e[n])
    })
}

function He(t, e, n) {
    e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : $(t, e, n)
}

function Zn(t) {
    return /-/.test(t) ? Tr : Xe
}

function Ar(t) {
    return Array.from(t.childNodes)
}

function Pe(t, e) {
    e = "" + e, t.data !== e && (t.data = e)
}

function Dr(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e)
}

function Nr(t, e, n) {
    ~Or.indexOf(n) ? Dr(t, e) : Pe(t, e)
}

function he(t, e, n, s) {
    n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, s ? "important" : "")
}

function ut(t, e, n) {
    t.classList[n ? "add" : "remove"](e)
}

function Hs(t, e, {
    bubbles: n = !1,
    cancelable: s = !1
} = {}) {
    const r = document.createEvent("CustomEvent");
    return r.initCustomEvent(t, n, s, e), r
}

function es(t, e) {
    return new t(e)
}
const Ut = new Map;
let zt = 0;

function Hr(t) {
    let e = 5381,
        n = t.length;
    for (; n--;) e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}

function Br(t, e) {
    const n = {
        stylesheet: Pr(e),
        rules: {}
    };
    return Ut.set(t, n), n
}

function qt(t, e, n, s, r, o, i, a = 0) {
    const l = 16.666 / s;
    let c = `{
`;
    for (let h = 0; h <= 1; h += l) {
        const E = e + (n - e) * o(h);
        c += h * 100 + `%{${i(E,1-E)}}
`
    }
    const f = c + `100% {${i(n,1-n)}}
}`,
        u = `__svelte_${Hr(f)}_${a}`,
        m = Ns(t),
        {
            stylesheet: g,
            rules: p
        } = Ut.get(m) || Br(m, t);
    p[u] || (p[u] = !0, g.insertRule(`@keyframes ${u} ${f}`, g.cssRules.length));
    const b = t.style.animation || "";
    return t.style.animation = `${b?`${b}, `:""}${u} ${s}ms linear ${r}ms 1 both`, zt += 1, u
}

function Vt(t, e) {
    const n = (t.style.animation || "").split(", "),
        s = n.filter(e ? o => o.indexOf(e) < 0 : o => o.indexOf("__svelte") === -1),
        r = n.length - s.length;
    r && (t.style.animation = s.join(", "), zt -= r, zt || Fr())
}

function Fr() {
    Cn(() => {
        zt || (Ut.forEach(t => {
            const {
                ownerNode: e
            } = t.stylesheet;
            e && k(e)
        }), Ut.clear())
    })
}
let wt;

function $t(t) {
    wt = t
}

function jt() {
    if (!wt) throw new Error("Function called outside component initialization");
    return wt
}

function pt(t) {
    jt().$$.on_mount.push(t)
}

function Wt(t) {
    jt().$$.on_destroy.push(t)
}

function Tn() {
    const t = jt();
    return (e, n, {
        cancelable: s = !1
    } = {}) => {
        const r = t.$$.callbacks[e];
        if (r) {
            const o = Hs(e, n, {
                cancelable: s
            });
            return r.slice().forEach(i => {
                i.call(t, o)
            }), !o.defaultPrevented
        }
        return !0
    }
}

function vt(t, e) {
    return jt().$$.context.set(t, e), e
}

function Te(t) {
    return jt().$$.context.get(t)
}
const it = [],
    Me = [];
let at = [];
const wn = [],
    Bs = Promise.resolve();
let kn = !1;

function Fs() {
    kn || (kn = !0, Bs.then(Be))
}

function Jr() {
    return Fs(), Bs
}

function ce(t) {
    at.push(t)
}

function Js(t) {
    wn.push(t)
}
const mn = new Set;
let st = 0;

function Be() {
    if (st !== 0) return;
    const t = wt;
    do {
        try {
            for (; st < it.length;) {
                const e = it[st];
                st++, $t(e), Ur(e.$$)
            }
        } catch (e) {
            throw it.length = 0, st = 0, e
        }
        for ($t(null), it.length = 0, st = 0; Me.length;) Me.pop()();
        for (let e = 0; e < at.length; e += 1) {
            const n = at[e];
            mn.has(n) || (mn.add(n), n())
        }
        at.length = 0
    } while (it.length);
    for (; wn.length;) wn.pop()();
    kn = !1, mn.clear(), $t(t)
}

function Ur(t) {
    if (t.fragment !== null) {
        t.update(), ye(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ce)
    }
}

function zr(t) {
    const e = [],
        n = [];
    at.forEach(s => t.indexOf(s) === -1 ? e.push(s) : n.push(s)), n.forEach(s => s()), at = e
}
let ht;

function An() {
    return ht || (ht = Promise.resolve(), ht.then(() => {
        ht = null
    })), ht
}

function Ue(t, e, n) {
    t.dispatchEvent(Hs(`${e?"intro":"outro"}${n}`))
}
const Ht = new Set;
let Ee;

function Ze() {
    Ee = {
        r: 0,
        c: [],
        p: Ee
    }
}

function et() {
    Ee.r || ye(Ee.c), Ee = Ee.p
}

function j(t, e) {
    t && t.i && (Ht.delete(t), t.i(e))
}

function L(t, e, n, s) {
    if (t && t.o) {
        if (Ht.has(t)) return;
        Ht.add(t), Ee.c.push(() => {
            Ht.delete(t), s && (n && t.d(1), s())
        }), t.o(e)
    } else s && s()
}
const Dn = {
    duration: 0
};

function Fe(t, e, n) {
    const s = {
        direction: "in"
    };
    let r = e(t, n, s),
        o = !1,
        i, a, l = 0;

    function c() {
        i && Vt(t, i)
    }

    function f() {
        const {
            delay: m = 0,
            duration: g = 300,
            easing: p = Et,
            tick: b = U,
            css: h
        } = r || Dn;
        h && (i = qt(t, 0, 1, g, m, p, h, l++)), b(0, 1);
        const E = Xt() + m,
            v = E + g;
        a && a.abort(), o = !0, ce(() => Ue(t, !0, "start")), a = Qt(y => {
            if (o) {
                if (y >= v) return b(1, 0), Ue(t, !0, "end"), c(), o = !1;
                if (y >= E) {
                    const d = p((y - E) / g);
                    b(d, 1 - d)
                }
            }
            return o
        })
    }
    let u = !1;
    return {
        start() {
            u || (u = !0, Vt(t), We(r) ? (r = r(s), An().then(f)) : f())
        },
        invalidate() {
            u = !1
        },
        end() {
            o && (c(), o = !1)
        }
    }
}

function Us(t, e, n) {
    const s = {
        direction: "out"
    };
    let r = e(t, n, s),
        o = !0,
        i;
    const a = Ee;
    a.r += 1;

    function l() {
        const {
            delay: c = 0,
            duration: f = 300,
            easing: u = Et,
            tick: m = U,
            css: g
        } = r || Dn;
        g && (i = qt(t, 1, 0, f, c, u, g));
        const p = Xt() + c,
            b = p + f;
        ce(() => Ue(t, !1, "start")), Qt(h => {
            if (o) {
                if (h >= b) return m(0, 1), Ue(t, !1, "end"), --a.r || ye(a.c), !1;
                if (h >= p) {
                    const E = u((h - p) / f);
                    m(1 - E, E)
                }
            }
            return o
        })
    }
    return We(r) ? An().then(() => {
        r = r(s), l()
    }) : l(), {
        end(c) {
            c && r.tick && r.tick(1, 0), o && (i && Vt(t, i), o = !1)
        }
    }
}

function Gt(t, e, n, s) {
    const r = {
        direction: "both"
    };
    let o = e(t, n, r),
        i = s ? 0 : 1,
        a = null,
        l = null,
        c = null;

    function f() {
        c && Vt(t, c)
    }

    function u(g, p) {
        const b = g.b - i;
        return p *= Math.abs(b), {
            a: i,
            b: g.b,
            d: b,
            duration: p,
            start: g.start,
            end: g.start + p,
            group: g.group
        }
    }

    function m(g) {
        const {
            delay: p = 0,
            duration: b = 300,
            easing: h = Et,
            tick: E = U,
            css: v
        } = o || Dn, y = {
            start: Xt() + p,
            b: g
        };
        g || (y.group = Ee, Ee.r += 1), a || l ? l = y : (v && (f(), c = qt(t, i, g, b, p, h, v)), g && E(0, 1), a = u(y, b), ce(() => Ue(t, g, "start")), Qt(d => {
            if (l && d > l.start && (a = u(l, b), l = null, Ue(t, a.b, "start"), v && (f(), c = qt(t, i, a.b, a.duration, 0, h, o.css))), a) {
                if (d >= a.end) E(i = a.b, 1 - i), Ue(t, a.b, "end"), l || (a.b ? f() : --a.group.r || ye(a.group.c)), a = null;
                else if (d >= a.start) {
                    const _ = d - a.start;
                    i = a.a + a.d * h(_ / a.duration), E(i, 1 - i)
                }
            }
            return !!(a || l)
        }))
    }
    return {
        run(g) {
            We(o) ? An().then(() => {
                o = o(r), m(g)
            }) : m(g)
        },
        end() {
            f(), a = l = null
        }
    }
}

function Nn(t, e) {
    const n = {},
        s = {},
        r = {
            $$scope: 1
        };
    let o = t.length;
    for (; o--;) {
        const i = t[o],
            a = e[o];
        if (a) {
            for (const l in i) l in a || (s[l] = 1);
            for (const l in a) r[l] || (n[l] = a[l], r[l] = 1);
            t[o] = a
        } else
            for (const l in i) r[l] = 1
    }
    for (const i in s) i in n || (n[i] = void 0);
    return n
}

function ts(t) {
    return typeof t == "object" && t !== null ? t : {}
}

function zs(t, e, n) {
    const s = t.$$.props[e];
    s !== void 0 && (t.$$.bound[s] = n, n(t.$$.ctx[s]))
}

function R(t) {
    t && t.c()
}

function P(t, e, n, s) {
    const {
        fragment: r,
        after_update: o
    } = t.$$;
    r && r.m(e, n), s || ce(() => {
        const i = t.$$.on_mount.map(Rs).filter(We);
        t.$$.on_destroy ? t.$$.on_destroy.push(...i) : ye(i), t.$$.on_mount = []
    }), o.forEach(ce)
}

function C(t, e) {
    const n = t.$$;
    n.fragment !== null && (zr(n.after_update), ye(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
}

function qr(t, e) {
    t.$$.dirty[0] === -1 && (it.push(t), Fs(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function Y(t, e, n, s, r, o, i, a = [-1]) {
    const l = wt;
    $t(t);
    const c = t.$$ = {
        fragment: null,
        ctx: [],
        props: o,
        update: U,
        not_equal: r,
        bound: Qn(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (l ? l.$$.context : [])),
        callbacks: Qn(),
        dirty: a,
        skip_bound: !1,
        root: e.target || l.$$.root
    };
    i && i(c.root);
    let f = !1;
    if (c.ctx = n ? n(t, e.props || {}, (u, m, ...g) => {
            const p = g.length ? g[0] : m;
            return c.ctx && r(c.ctx[u], c.ctx[u] = p) && (!c.skip_bound && c.bound[u] && c.bound[u](p), f && qr(t, u)), m
        }) : [], c.update(), f = !0, ye(c.before_update), c.fragment = s ? s(c.ctx) : !1, e.target) {
        if (e.hydrate) {
            const u = Ar(e.target);
            c.fragment && c.fragment.l(u), u.forEach(k)
        } else c.fragment && c.fragment.c();
        e.intro && j(t.$$.fragment), P(t, e.target, e.anchor, e.customElement), Be()
    }
    $t(l)
}
class X {
    $destroy() {
        C(this, 1), this.$destroy = U
    }
    $on(e, n) {
        if (!We(n)) return U;
        const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return s.push(n), () => {
            const r = s.indexOf(n);
            r !== -1 && s.splice(r, 1)
        }
    }
    $set(e) {
        this.$$set && !Lr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
    }
}
const rt = [];

function Vr(t, e) {
    return {
        subscribe: we(t, e).subscribe
    }
}

function we(t, e = U) {
    let n;
    const s = new Set;

    function r(a) {
        if (K(t, a) && (t = a, n)) {
            const l = !rt.length;
            for (const c of s) c[1](), rt.push(c, t);
            if (l) {
                for (let c = 0; c < rt.length; c += 2) rt[c][0](rt[c + 1]);
                rt.length = 0
            }
        }
    }

    function o(a) {
        r(a(t))
    }

    function i(a, l = U) {
        const c = [a, l];
        return s.add(c), s.size === 1 && (n = e(r) || U), a(t), () => {
            s.delete(c), s.size === 0 && n && (n(), n = null)
        }
    }
    return {
        set: r,
        update: o,
        subscribe: i
    }
}

function Gr(t, e, n) {
    const s = !Array.isArray(t),
        r = s ? [t] : t,
        o = e.length < 2;
    return Vr(n, i => {
        let a = !1;
        const l = [];
        let c = 0,
            f = U;
        const u = () => {
                if (c) return;
                f();
                const g = e(s ? l[0] : l, i);
                o ? i(g) : f = We(g) ? g : U
            },
            m = r.map((g, p) => Pn(g, b => {
                l[p] = b, c &= ~(1 << p), a && u()
            }, () => {
                c |= 1 << p
            }));
        return a = !0, u(),
            function() {
                ye(m), f(), a = !1
            }
    })
}
const ns = t => typeof t > "u",
    qs = t => typeof t == "function",
    Vs = t => typeof t == "number";

function Kr(t) {
    return !t.defaultPrevented && t.button === 0 && !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}

function Gs() {
    let t = 0;
    return () => t++
}

function xr() {
    return Math.random().toString(36).substring(2)
}
const Ae = typeof window > "u";

function Ks(t, e, n) {
    return t.addEventListener(e, n), () => t.removeEventListener(e, n)
}
const xs = (t, e) => t ? {} : {
        style: e
    },
    Sn = t => ({
        "aria-hidden": "true",
        ...xs(t, "display:none;")
    }),
    It = t => `@@svnav-ctx__${t}`,
    En = It("LOCATION"),
    ft = It("ROUTER"),
    Ys = It("ROUTE"),
    Yr = It("ROUTE_PARAMS"),
    Xr = It("FOCUS_ELEM"),
    Xs = /^:(.+)/,
    bt = (t, e, n) => t.substr(e, n),
    Mn = (t, e) => bt(t, 0, e.length) === e,
    Qr = t => t === "",
    Wr = t => Xs.test(t),
    Qs = t => t[0] === "*",
    Zr = t => t.replace(/\*.*$/, ""),
    Ws = t => t.replace(/(^\/+|\/+$)/g, "");

function je(t, e = !1) {
    const n = Ws(t).split("/");
    return e ? n.filter(Boolean) : n
}
const gn = (t, e) => t + (e ? `?${e}` : ""),
    Hn = t => `/${Ws(t)}`;

function Lt(...t) {
    const e = s => je(s, !0).join("/"),
        n = t.map(e).join("/");
    return Hn(n)
}
const Bn = 1,
    Zt = 2,
    Qe = 3,
    eo = 4,
    Zs = 5,
    to = 6,
    er = 7,
    no = 8,
    so = 9,
    tr = 10,
    nr = 11,
    ro = {
        [Bn]: "Link",
        [Zt]: "Route",
        [Qe]: "Router",
        [eo]: "useFocus",
        [Zs]: "useLocation",
        [to]: "useMatch",
        [er]: "useNavigate",
        [no]: "useParams",
        [so]: "useResolvable",
        [tr]: "useResolve",
        [nr]: "navigate"
    },
    Fn = t => ro[t];

function oo(t, e) {
    let n;
    return t === Zt ? n = e.path ? `path="${e.path}"` : "default" : t === Bn ? n = `to="${e.to}"` : t === Qe && (n = `basepath="${e.basepath||""}"`), `<${Fn(t)} ${n||""} />`
}

function io(t, e, n, s) {
    const r = n && oo(s || t, n),
        o = r ? `

Occurred in: ${r}` : "",
        i = Fn(t),
        a = qs(e) ? e(i) : e;
    return `<${i}> ${a}${o}`
}
const sr = t => (...e) => t(io(...e)),
    rr = sr(t => {
        throw new Error(t)
    }),
    Kt = sr(console.warn),
    ss = 4,
    lo = 3,
    ao = 2,
    co = 1,
    uo = 1;

function fo(t, e) {
    const n = t.default ? 0 : je(t.fullPath).reduce((s, r) => {
        let o = s;
        return o += ss, Qr(r) ? o += uo : Wr(r) ? o += ao : Qs(r) ? o -= ss + co : o += lo, o
    }, 0);
    return {
        route: t,
        score: n,
        index: e
    }
}

function mo(t) {
    return t.map(fo).sort((e, n) => e.score < n.score ? 1 : e.score > n.score ? -1 : e.index - n.index)
}

function or(t, e) {
    let n, s;
    const [r] = e.split("?"), o = je(r), i = o[0] === "", a = mo(t);
    for (let l = 0, c = a.length; l < c; l++) {
        const {
            route: f
        } = a[l];
        let u = !1;
        const m = {},
            g = E => ({ ...f,
                params: m,
                uri: E
            });
        if (f.default) {
            s = g(e);
            continue
        }
        const p = je(f.fullPath),
            b = Math.max(o.length, p.length);
        let h = 0;
        for (; h < b; h++) {
            const E = p[h],
                v = o[h];
            if (!ns(E) && Qs(E)) {
                const d = E === "*" ? "*" : E.slice(1);
                m[d] = o.slice(h).map(decodeURIComponent).join("/");
                break
            }
            if (ns(v)) {
                u = !0;
                break
            }
            const y = Xs.exec(E);
            if (y && !i) {
                const d = decodeURIComponent(v);
                m[y[1]] = d
            } else if (E !== v) {
                u = !0;
                break
            }
        }
        if (!u) {
            n = g(Lt(...o.slice(0, h)));
            break
        }
    }
    return n || s || null
}

function ir(t, e) {
    return or([t], e)
}

function go(t, e) {
    if (Mn(t, "/")) return t;
    const [n, s] = t.split("?"), [r] = e.split("?"), o = je(n), i = je(r);
    if (o[0] === "") return gn(r, s);
    if (!Mn(o[0], ".")) {
        const c = i.concat(o).join("/");
        return gn((r === "/" ? "" : "/") + c, s)
    }
    const a = i.concat(o),
        l = [];
    return a.forEach(c => {
        c === ".." ? l.pop() : c !== "." && l.push(c)
    }), gn(`/${l.join("/")}`, s)
}

function rs(t, e) {
    const {
        pathname: n,
        hash: s = "",
        search: r = "",
        state: o
    } = t, i = je(e, !0), a = je(n, !0);
    for (; i.length;) i[0] !== a[0] && rr(Qe, `Invalid state: All locations must begin with the basepath "${e}", found "${n}"`), i.shift(), a.shift();
    return {
        pathname: Lt(...a),
        hash: s,
        search: r,
        state: o
    }
}
const os = t => t.length === 1 ? "" : t,
    Jn = t => {
        const e = t.indexOf("?"),
            n = t.indexOf("#"),
            s = e !== -1,
            r = n !== -1,
            o = r ? os(bt(t, n)) : "",
            i = r ? bt(t, 0, n) : t,
            a = s ? os(bt(i, e)) : "";
        return {
            pathname: (s ? bt(i, 0, e) : i) || "/",
            search: a,
            hash: o
        }
    },
    po = t => {
        const {
            pathname: e,
            search: n,
            hash: s
        } = t;
        return e + n + s
    };

function _o(t, e, n) {
    return Lt(n, go(t, e))
}

function ho(t, e) {
    const n = Hn(Zr(t)),
        s = je(n, !0),
        r = je(e, !0).slice(0, s.length),
        o = ir({
            fullPath: n
        }, Lt(...r));
    return o && o.uri
}
const pn = "POP",
    bo = "PUSH",
    yo = "REPLACE";

function _n(t) {
    return { ...t.location,
        pathname: encodeURI(decodeURI(t.location.pathname)),
        state: t.history.state,
        _key: t.history.state && t.history.state._key || "initial"
    }
}

function $o(t) {
    let e = [],
        n = _n(t),
        s = pn;
    const r = (o = e) => o.forEach(i => i({
        location: n,
        action: s
    }));
    return {
        get location() {
            return n
        },
        listen(o) {
            e.push(o);
            const i = () => {
                n = _n(t), s = pn, r([o])
            };
            r([o]);
            const a = Ks(t, "popstate", i);
            return () => {
                a(), e = e.filter(l => l !== o)
            }
        },
        navigate(o, i) {
            const {
                state: a = {},
                replace: l = !1
            } = i || {};
            if (s = l ? yo : bo, Vs(o)) i && Kt(nr, "Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."), s = pn, t.history.go(o);
            else {
                const c = { ...a,
                    _key: xr()
                };
                try {
                    t.history[l ? "replaceState" : "pushState"](c, "", o)
                } catch {
                    t.location[l ? "replace" : "assign"](o)
                }
            }
            n = _n(t), r()
        }
    }
}

function hn(t, e) {
    return { ...Jn(e),
        state: t
    }
}

function vo(t = "/") {
    let e = 0,
        n = [hn(null, t)];
    return {
        get entries() {
            return n
        },
        get location() {
            return n[e]
        },
        addEventListener() {},
        removeEventListener() {},
        history: {
            get state() {
                return n[e].state
            },
            pushState(s, r, o) {
                e++, n = n.slice(0, e), n.push(hn(s, o))
            },
            replaceState(s, r, o) {
                n[e] = hn(s, o)
            },
            go(s) {
                const r = e + s;
                r < 0 || r > n.length - 1 || (e = r)
            }
        }
    }
}
const wo = !!(!Ae && window.document && window.document.createElement),
    ko = !Ae && window.location.origin === "null",
    So = $o(wo && !ko ? window : vo());
let Le = null,
    lr = !0;

function Eo(t, e) {
    const n = document.querySelectorAll("[data-svnav-router]");
    for (let s = 0; s < n.length; s++) {
        const r = n[s],
            o = Number(r.dataset.svnavRouter);
        if (o === t) return !0;
        if (o === e) return !1
    }
    return !1
}

function Mo(t) {
    (!Le || t.level > Le.level || t.level === Le.level && Eo(t.routerId, Le.routerId)) && (Le = t)
}

function jo() {
    Le = null
}

function Io() {
    lr = !1
}

function is(t) {
    if (!t) return !1;
    const e = "tabindex";
    try {
        if (!t.hasAttribute(e)) {
            t.setAttribute(e, "-1");
            let n;
            n = Ks(t, "blur", () => {
                t.removeAttribute(e), n()
            })
        }
        return t.focus(), document.activeElement === t
    } catch {
        return !1
    }
}

function Lo(t, e) {
    return Number(t.dataset.svnavRouteEnd) === e
}

function Oo(t) {
    return /^H[1-6]$/i.test(t.tagName)
}

function ls(t, e = document) {
    return e.querySelector(t)
}

function Po(t) {
    let n = ls(`[data-svnav-route-start="${t}"]`).nextElementSibling;
    for (; !Lo(n, t);) {
        if (Oo(n)) return n;
        const s = ls("h1,h2,h3,h4,h5,h6", n);
        if (s) return s;
        n = n.nextElementSibling
    }
    return null
}

function Co(t) {
    Promise.resolve(Ve(t.focusElement)).then(e => {
        const n = e || Po(t.id);
        n || Kt(Qe, `Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`, t, Zt), !is(n) && is(document.documentElement)
    })
}
const Ro = (t, e, n) => (s, r) => Jr().then(() => {
        if (!Le || lr) {
            Io();
            return
        }
        if (s && Co(Le.route), t.announcements && r) {
            const {
                path: o,
                fullPath: i,
                meta: a,
                params: l,
                uri: c
            } = Le.route, f = t.createAnnouncement({
                path: o,
                fullPath: i,
                meta: a,
                params: l,
                uri: c
            }, Ve(n));
            Promise.resolve(f).then(u => {
                e.set(u)
            })
        }
        jo()
    }),
    To = "position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";

function Ao(t) {
    let e, n, s = [{
            role: "status"
        }, {
            "aria-atomic": "true"
        }, {
            "aria-live": "polite"
        }, {
            "data-svnav-announcer": ""
        }, xs(t[6], To)],
        r = {};
    for (let o = 0; o < s.length; o += 1) r = be(r, s[o]);
    return {
        c() {
            e = M("div"), n = re(t[0]), Xe(e, r)
        },
        m(o, i) {
            S(o, e, i), w(e, n)
        },
        p(o, i) {
            i[0] & 1 && Nr(n, o[0], r.contenteditable)
        },
        d(o) {
            o && k(e)
        }
    }
}

function Do(t) {
    let e, n, s, r, o, i = [Sn(t[6]), {
            "data-svnav-router": t[3]
        }],
        a = {};
    for (let u = 0; u < i.length; u += 1) a = be(a, i[u]);
    const l = t[22].default,
        c = Ge(l, t, t[21], null);
    let f = t[2] && t[4] && t[1].announcements && Ao(t);
    return {
        c() {
            e = M("div"), n = O(), c && c.c(), s = O(), f && f.c(), r = Ne(), Xe(e, a)
        },
        m(u, m) {
            S(u, e, m), S(u, n, m), c && c.m(u, m), S(u, s, m), f && f.m(u, m), S(u, r, m), o = !0
        },
        p(u, m) {
            c && c.p && (!o || m[0] & 2097152) && xe(c, l, u, u[21], o ? Ke(l, u[21], m, null) : Ye(u[21]), null), u[2] && u[4] && u[1].announcements && f.p(u, m)
        },
        i(u) {
            o || (j(c, u), o = !0)
        },
        o(u) {
            L(c, u), o = !1
        },
        d(u) {
            u && k(e), u && k(n), c && c.d(u), u && k(s), f && f.d(u), u && k(r)
        }
    }
}
const No = Gs(),
    as = "/";

function Ho(t, e, n) {
    let s, r, o, i, a, {
            $$slots: l = {},
            $$scope: c
        } = e,
        {
            basepath: f = as
        } = e,
        {
            url: u = null
        } = e,
        {
            history: m = So
        } = e,
        {
            primary: g = !0
        } = e,
        {
            a11y: p = {}
        } = e,
        {
            disableInlineStyles: b = !1
        } = e;
    const h = {
            createAnnouncement: A => `Navigated to ${A.uri}`,
            announcements: !0,
            ...p
        },
        E = f,
        v = Hn(f),
        y = Te(En),
        d = Te(ft),
        _ = !y,
        T = No(),
        I = g && !(d && !d.manageFocus),
        B = we("");
    ve(t, B, A => n(0, a = A));
    const N = d ? d.disableInlineStyles : b,
        F = we([]);
    ve(t, F, A => n(20, i = A));
    const q = we(null);
    ve(t, q, A => n(18, r = A));
    let z = !1;
    const Z = _ ? 0 : d.level + 1,
        te = _ ? we((() => rs(Ae ? Jn(u) : m.location, v))()) : y;
    ve(t, te, A => n(17, s = A));
    const le = we(s);
    ve(t, le, A => n(19, o = A));
    const ne = Ro(h, B, te),
        H = A => W => W.filter(se => se.id !== A);

    function ie(A) {
        if (Ae) {
            if (z) return;
            const W = ir(A, s.pathname);
            if (W) return z = !0, W
        } else F.update(W => {
            const se = H(A.id)(W);
            return se.push(A), se
        })
    }

    function ae(A) {
        F.update(H(A))
    }
    return !_ && f !== as && Kt(Qe, 'Only top-level Routers can have a "basepath" prop. It is ignored.', {
        basepath: f
    }), _ && (pt(() => m.listen(W => {
        const se = rs(W.location, v);
        le.set(s), te.set(se)
    })), vt(En, te)), vt(ft, {
        activeRoute: q,
        registerRoute: ie,
        unregisterRoute: ae,
        manageFocus: I,
        level: Z,
        id: T,
        history: _ ? m : d.history,
        basepath: _ ? v : d.basepath,
        disableInlineStyles: N
    }), t.$$set = A => {
        "basepath" in A && n(11, f = A.basepath), "url" in A && n(12, u = A.url), "history" in A && n(13, m = A.history), "primary" in A && n(14, g = A.primary), "a11y" in A && n(15, p = A.a11y), "disableInlineStyles" in A && n(16, b = A.disableInlineStyles), "$$scope" in A && n(21, c = A.$$scope)
    }, t.$$.update = () => {
        if (t.$$.dirty[0] & 2048 && f !== E && Kt(Qe, 'You cannot change the "basepath" prop. It is ignored.'), t.$$.dirty[0] & 1179648) {
            const A = or(i, s.pathname);
            q.set(A)
        }
        if (t.$$.dirty[0] & 655360 && _) {
            const A = !!s.hash,
                W = !A && I,
                se = !A || s.pathname !== o.pathname;
            ne(W, se)
        }
        t.$$.dirty[0] & 262144 && I && r && r.primary && Mo({
            level: Z,
            routerId: T,
            route: r
        })
    }, [a, h, _, T, I, B, N, F, q, te, le, f, u, m, g, p, b, s, r, o, i, c, l]
}
class Bo extends X {
    constructor(e) {
        super(), Y(this, e, Ho, Do, K, {
            basepath: 11,
            url: 12,
            history: 13,
            primary: 14,
            a11y: 15,
            disableInlineStyles: 16
        }, null, [-1, -1])
    }
}
const ar = Bo;

function Ot(t, e, n = ft, s = Qe) {
    Te(n) || rr(t, o => `You cannot use ${o} outside of a ${Fn(s)}.`, e)
}
const Fo = t => {
    const {
        subscribe: e
    } = Te(t);
    return {
        subscribe: e
    }
};

function cr() {
    return Ot(Zs), Fo(En)
}

function ur() {
    const {
        history: t
    } = Te(ft);
    return t
}

function fr() {
    const t = Te(Ys);
    return t ? Gr(t, e => e.base) : we("/")
}

function dr() {
    Ot(tr);
    const t = fr(),
        {
            basepath: e
        } = Te(ft);
    return s => _o(s, Ve(t), e)
}

function mr() {
    Ot(er);
    const t = dr(),
        {
            navigate: e
        } = ur();
    return (s, r) => {
        const o = Vs(s) ? s : t(s);
        return e(o, r)
    }
}
const Jo = t => ({
        params: t & 16,
        location: t & 8
    }),
    cs = t => ({
        params: Ae ? Ve(t[10]) : t[4],
        location: t[3],
        navigate: t[11]
    });

function us(t) {
    let e, n;
    return e = new ar({
        props: {
            primary: t[1],
            $$slots: {
                default: [qo]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        p(s, r) {
            const o = {};
            r & 2 && (o.primary = s[1]), r & 528409 && (o.$$scope = {
                dirty: r,
                ctx: s
            }), e.$set(o)
        },
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function Uo(t) {
    let e;
    const n = t[18].default,
        s = Ge(n, t, t[19], cs);
    return {
        c() {
            s && s.c()
        },
        m(r, o) {
            s && s.m(r, o), e = !0
        },
        p(r, o) {
            s && s.p && (!e || o & 524312) && xe(s, n, r, r[19], e ? Ke(n, r[19], o, Jo) : Ye(r[19]), cs)
        },
        i(r) {
            e || (j(s, r), e = !0)
        },
        o(r) {
            L(s, r), e = !1
        },
        d(r) {
            s && s.d(r)
        }
    }
}

function zo(t) {
    let e, n, s;
    const r = [{
        location: t[3]
    }, {
        navigate: t[11]
    }, Ae ? Ve(t[10]) : t[4], t[12]];
    var o = t[0];

    function i(a) {
        let l = {};
        for (let c = 0; c < r.length; c += 1) l = be(l, r[c]);
        return {
            props: l
        }
    }
    return o && (e = es(o, i())), {
        c() {
            e && R(e.$$.fragment), n = Ne()
        },
        m(a, l) {
            e && P(e, a, l), S(a, n, l), s = !0
        },
        p(a, l) {
            const c = l & 7192 ? Nn(r, [l & 8 && {
                location: a[3]
            }, l & 2048 && {
                navigate: a[11]
            }, l & 1040 && ts(Ae ? Ve(a[10]) : a[4]), l & 4096 && ts(a[12])]) : {};
            if (l & 1 && o !== (o = a[0])) {
                if (e) {
                    Ze();
                    const f = e;
                    L(f.$$.fragment, 1, 0, () => {
                        C(f, 1)
                    }), et()
                }
                o ? (e = es(o, i()), R(e.$$.fragment), j(e.$$.fragment, 1), P(e, n.parentNode, n)) : e = null
            } else o && e.$set(c)
        },
        i(a) {
            s || (e && j(e.$$.fragment, a), s = !0)
        },
        o(a) {
            e && L(e.$$.fragment, a), s = !1
        },
        d(a) {
            a && k(n), e && C(e, a)
        }
    }
}

function qo(t) {
    let e, n, s, r;
    const o = [zo, Uo],
        i = [];

    function a(l, c) {
        return l[0] !== null ? 0 : 1
    }
    return e = a(t), n = i[e] = o[e](t), {
        c() {
            n.c(), s = Ne()
        },
        m(l, c) {
            i[e].m(l, c), S(l, s, c), r = !0
        },
        p(l, c) {
            let f = e;
            e = a(l), e === f ? i[e].p(l, c) : (Ze(), L(i[f], 1, 1, () => {
                i[f] = null
            }), et(), n = i[e], n ? n.p(l, c) : (n = i[e] = o[e](l), n.c()), j(n, 1), n.m(s.parentNode, s))
        },
        i(l) {
            r || (j(n), r = !0)
        },
        o(l) {
            L(n), r = !1
        },
        d(l) {
            i[e].d(l), l && k(s)
        }
    }
}

function Vo(t) {
    let e, n, s, r, o, i = [Sn(t[7]), {
            "data-svnav-route-start": t[5]
        }],
        a = {};
    for (let u = 0; u < i.length; u += 1) a = be(a, i[u]);
    let l = t[2] && us(t),
        c = [Sn(t[7]), {
            "data-svnav-route-end": t[5]
        }],
        f = {};
    for (let u = 0; u < c.length; u += 1) f = be(f, c[u]);
    return {
        c() {
            e = M("div"), n = O(), l && l.c(), s = O(), r = M("div"), Xe(e, a), Xe(r, f)
        },
        m(u, m) {
            S(u, e, m), S(u, n, m), l && l.m(u, m), S(u, s, m), S(u, r, m), o = !0
        },
        p(u, [m]) {
            u[2] ? l ? (l.p(u, m), m & 4 && j(l, 1)) : (l = us(u), l.c(), j(l, 1), l.m(s.parentNode, s)) : l && (Ze(), L(l, 1, 1, () => {
                l = null
            }), et())
        },
        i(u) {
            o || (j(l), o = !0)
        },
        o(u) {
            L(l), o = !1
        },
        d(u) {
            u && k(e), u && k(n), l && l.d(u), u && k(s), u && k(r)
        }
    }
}
const Go = Gs();

function Ko(t, e, n) {
    let s;
    const r = ["path", "component", "meta", "primary"];
    let o = Jt(e, r),
        i, a, l, c, {
            $$slots: f = {},
            $$scope: u
        } = e,
        {
            path: m = ""
        } = e,
        {
            component: g = null
        } = e,
        {
            meta: p = {}
        } = e,
        {
            primary: b = !0
        } = e;
    Ot(Zt, e);
    const h = Go(),
        {
            registerRoute: E,
            unregisterRoute: v,
            activeRoute: y,
            disableInlineStyles: d
        } = Te(ft);
    ve(t, y, z => n(16, i = z));
    const _ = fr();
    ve(t, _, z => n(17, l = z));
    const T = cr();
    ve(t, T, z => n(3, a = z));
    const I = we(null);
    let B;
    const N = we(),
        F = we({});
    ve(t, F, z => n(4, c = z)), vt(Ys, N), vt(Yr, F), vt(Xr, I);
    const q = mr();
    return Ae || Wt(() => v(h)), t.$$set = z => {
        n(24, e = be(be({}, e), ct(z))), n(12, o = Jt(e, r)), "path" in z && n(13, m = z.path), "component" in z && n(0, g = z.component), "meta" in z && n(14, p = z.meta), "primary" in z && n(1, b = z.primary), "$$scope" in z && n(19, u = z.$$scope)
    }, t.$$.update = () => {
        if (t.$$.dirty & 155658) {
            const z = m === "",
                Z = Lt(l, m),
                ee = {
                    id: h,
                    path: m,
                    meta: p,
                    default: z,
                    fullPath: z ? "" : Z,
                    base: z ? l : ho(Z, a.pathname),
                    primary: b,
                    focusElement: I
                };
            N.set(ee), n(15, B = E(ee))
        }
        if (t.$$.dirty & 98304 && n(2, s = !!(B || i && i.id === h)), t.$$.dirty & 98308 && s) {
            const {
                params: z
            } = B || i;
            F.set(z)
        }
    }, e = ct(e), [g, b, s, a, c, h, y, d, _, T, F, q, o, m, p, B, i, l, f, u]
}
class xo extends X {
    constructor(e) {
        super(), Y(this, e, Ko, Vo, K, {
            path: 13,
            component: 0,
            meta: 14,
            primary: 1
        })
    }
}
const ot = xo;

function Yo(t) {
    let e, n, s, r;
    const o = t[13].default,
        i = Ge(o, t, t[12], null);
    let a = [{
            href: t[0]
        }, t[2], t[1]],
        l = {};
    for (let c = 0; c < a.length; c += 1) l = be(l, a[c]);
    return {
        c() {
            e = M("a"), i && i.c(), Xe(e, l)
        },
        m(c, f) {
            S(c, e, f), i && i.m(e, null), n = !0, s || (r = ue(e, "click", t[4]), s = !0)
        },
        p(c, [f]) {
            i && i.p && (!n || f & 4096) && xe(i, o, c, c[12], n ? Ke(o, c[12], f, null) : Ye(c[12]), null), Xe(e, l = Nn(a, [(!n || f & 1) && {
                href: c[0]
            }, f & 4 && c[2], f & 2 && c[1]]))
        },
        i(c) {
            n || (j(i, c), n = !0)
        },
        o(c) {
            L(i, c), n = !1
        },
        d(c) {
            c && k(e), i && i.d(c), s = !1, r()
        }
    }
}

function Xo(t, e, n) {
    let s, r, o, i, a, l;
    const c = ["to", "replace", "state", "getProps"];
    let f = Jt(e, c),
        u, {
            $$slots: m = {},
            $$scope: g
        } = e,
        {
            to: p
        } = e,
        {
            replace: b = !1
        } = e,
        {
            state: h = {}
        } = e,
        {
            getProps: E = null
        } = e;
    Ot(Bn, e);
    const v = cr();
    ve(t, v, I => n(11, u = I));
    const y = Tn(),
        d = dr(),
        {
            navigate: _
        } = ur();

    function T(I) {
        y("click", I), Kr(I) && (I.preventDefault(), _(s, {
            state: h,
            replace: i || b
        }))
    }
    return t.$$set = I => {
        n(19, e = be(be({}, e), ct(I))), n(18, f = Jt(e, c)), "to" in I && n(5, p = I.to), "replace" in I && n(6, b = I.replace), "state" in I && n(7, h = I.state), "getProps" in I && n(8, E = I.getProps), "$$scope" in I && n(12, g = I.$$scope)
    }, t.$$.update = () => {
        t.$$.dirty & 2080 && n(0, s = d(p, u)), t.$$.dirty & 2049 && n(10, r = Mn(u.pathname, s)), t.$$.dirty & 2049 && n(9, o = s === u.pathname), t.$$.dirty & 2049 && (i = Jn(s) === po(u)), t.$$.dirty & 512 && n(2, a = o ? {
            "aria-current": "page"
        } : {}), n(1, l = (() => {
            if (qs(E)) {
                const I = E({
                    location: u,
                    href: s,
                    isPartiallyCurrent: r,
                    isCurrent: o
                });
                return { ...f,
                    ...I
                }
            }
            return f
        })())
    }, e = ct(e), [s, l, a, v, T, p, b, h, E, o, r, u, g, m]
}
class Qo extends X {
    constructor(e) {
        super(), Y(this, e, Xo, Yo, K, {
            to: 5,
            replace: 6,
            state: 7,
            getProps: 8
        })
    }
}
const _t = Qo;

function Wo(t) {
    let e, n, s, r;
    return {
        c() {
            e = M("li"), n = M("button"), n.textContent = "Compartilhar", $(n, "type", "button"), $(n, "class", "social__link social__link--share"), $(e, "class", "social__item")
        },
        m(o, i) {
            S(o, e, i), w(e, n), s || (r = ue(n, "click", t[0]), s = !0)
        },
        p: U,
        d(o) {
            o && k(e), s = !1, r()
        }
    }
}

function Zo(t) {
    let e, n, s, r, o, i, a = navigator.canShare && Wo(t);
    return {
        c() {
            e = M("nav"), n = M("ul"), s = M("li"), s.innerHTML = '<a target="_blank" href="https://www.instagram.com/guaranajesus/" class="social__link social__link--instagram">Instagram</a>', r = O(), o = M("li"), o.innerHTML = '<a target="_blank" href="https://www.facebook.com/guaranajesus/" class="social__link social__link--facebook">Facebook</a>', i = O(), a && a.c(), $(s, "class", "social__item"), $(o, "class", "social__item"), $(n, "class", "social__list"), $(e, "class", "social")
        },
        m(l, c) {
            S(l, e, c), w(e, n), w(n, s), w(n, r), w(n, o), w(n, i), a && a.m(n, null)
        },
        p(l, [c]) {
            navigator.canShare && a.p(l, c)
        },
        i: U,
        o: U,
        d(l) {
            l && k(e), a && a.d()
        }
    }
}
const ei = "Conheça a história dos artesãos.";

function ti(t) {
    const e = location.toString(),
        n = {
            title: "Guaraná Jesus | São João 2023",
            text: ei,
            url: e
        };
    async function s() {
        try {
            await navigator.share(n)
        } catch (r) {
            console.error(`[Share]: ${r}`)
        }
    }
    return [s]
}
class ni extends X {
    constructor(e) {
        super(), Y(this, e, ti, Zo, K, {})
    }
}

function si(t) {
    let e;
    return {
        c() {
            e = re("Guaraná Jesus")
        },
        m(n, s) {
            S(n, e, s)
        },
        d(n) {
            n && k(e)
        }
    }
}

function ri(t) {
    let e, n, s, r, o, i, a, l, c, f, u;
    return r = new _t({
        props: {
            class: "logo__link",
            to: "/",
            $$slots: {
                default: [si]
            },
            $$scope: {
                ctx: t
            }
        }
    }), f = new ni({}), {
        c() {
            e = M("header"), n = M("div"), s = M("h1"), R(r.$$.fragment), o = O(), i = M("span"), i.textContent = "O Sabor do São João Nasce Aqui", a = O(), l = M("span"), l.textContent = "São João 2023", c = O(), R(f.$$.fragment), $(s, "class", "logo header__logo"), $(i, "class", "header__slogan"), $(l, "class", "header__subtitle"), $(n, "class", "container header__container"), $(e, "class", "header")
        },
        m(m, g) {
            S(m, e, g), w(e, n), w(n, s), P(r, s, null), w(n, o), w(n, i), w(n, a), w(n, l), w(n, c), P(f, n, null), u = !0
        },
        p(m, [g]) {
            const p = {};
            g & 1 && (p.$$scope = {
                dirty: g,
                ctx: m
            }), r.$set(p)
        },
        i(m) {
            u || (j(r.$$.fragment, m), j(f.$$.fragment, m), u = !0)
        },
        o(m) {
            L(r.$$.fragment, m), L(f.$$.fragment, m), u = !1
        },
        d(m) {
            m && k(e), C(r), C(f)
        }
    }
}
class Pt extends X {
    constructor(e) {
        super(), Y(this, e, null, ri, K, {})
    }
}
const {
    window: gr
} = Rn, oi = t => ({}), fs = t => ({}), ii = t => ({}), ds = t => ({});

function li(t) {
    let e, n, s, r, o, i, a, l, c;
    ce(t[21]);
    const f = t[20].background,
        u = Ge(f, t, t[19], ds),
        m = t[20].foreground,
        g = Ge(m, t, t[19], fs);
    return {
        c() {
            e = M("svelte-scroller-outer"), n = M("svelte-scroller-background-container"), s = M("svelte-scroller-background"), u && u.c(), o = O(), i = M("svelte-scroller-foreground"), g && g.c(), He(s, "class", "svelte-xdbafy"), He(n, "class", "background-container svelte-xdbafy"), He(n, "style", r = "" + (t[5] + t[4])), He(i, "class", "svelte-xdbafy"), He(e, "class", "svelte-xdbafy")
        },
        m(p, b) {
            S(p, e, b), w(e, n), w(n, s), u && u.m(s, null), t[22](s), w(e, o), w(e, i), g && g.m(i, null), t[23](i), t[24](e), a = !0, l || (c = ue(gr, "resize", t[21]), l = !0)
        },
        p(p, b) {
            u && u.p && (!a || b[0] & 524288) && xe(u, f, p, p[19], a ? Ke(f, p[19], b, ii) : Ye(p[19]), ds), (!a || b[0] & 48 && r !== (r = "" + (p[5] + p[4]))) && He(n, "style", r), g && g.p && (!a || b[0] & 524288) && xe(g, m, p, p[19], a ? Ke(m, p[19], b, oi) : Ye(p[19]), fs)
        },
        i(p) {
            a || (j(u, p), j(g, p), a = !0)
        },
        o(p) {
            L(u, p), L(g, p), a = !1
        },
        d(p) {
            p && k(e), u && u.d(p), t[22](null), g && g.d(p), t[23](null), t[24](null), l = !1, c()
        }
    }
}
const Se = [];
let xt;
if (typeof window < "u") {
    const t = () => Se.forEach(e => e());
    window.addEventListener("scroll", t), window.addEventListener("resize", t)
}
if (typeof IntersectionObserver < "u") {
    const t = new Map,
        e = new IntersectionObserver((n, s) => {
            n.forEach(r => {
                const o = t.get(r.target),
                    i = Se.indexOf(o);
                r.isIntersecting ? i === -1 && Se.push(o) : (o(), i !== -1 && Se.splice(i, 1))
            })
        }, {
            rootMargin: "400px 0px"
        });
    xt = {
        add: ({
            outer: n,
            update: s
        }) => {
            const {
                top: r,
                bottom: o
            } = n.getBoundingClientRect();
            r < window.innerHeight && o > 0 && Se.push(s), t.set(n, s), e.observe(n)
        },
        remove: ({
            outer: n,
            update: s
        }) => {
            const r = Se.indexOf(s);
            r !== -1 && Se.splice(r, 1), t.delete(n), e.unobserve(n)
        }
    }
} else xt = {
    add: ({
        update: t
    }) => {
        Se.push(t)
    },
    remove: ({
        update: t
    }) => {
        const e = Se.indexOf(t);
        e !== -1 && Se.splice(e, 1)
    }
};

function ai(t, e, n) {
    let s, r, o, i, a, {
            $$slots: l = {},
            $$scope: c
        } = e,
        {
            top: f = 0
        } = e,
        {
            bottom: u = 1
        } = e,
        {
            threshold: m = .5
        } = e,
        {
            query: g = "section"
        } = e,
        {
            parallax: p = !1
        } = e,
        {
            index: b = 0
        } = e,
        {
            count: h = 0
        } = e,
        {
            offset: E = 0
        } = e,
        {
            progress: v = 0
        } = e,
        {
            visible: y = !1
        } = e,
        d, _, T, I, B, N = 0,
        F, q = 0,
        z = 1;
    pt(() => {
        B = _.querySelectorAll(g), n(7, h = B.length), Z();
        const H = {
            outer: d,
            update: Z
        };
        return xt.add(H), () => xt.remove(H)
    });

    function Z() {
        if (!_) return;
        const H = d.getBoundingClientRect();
        I = H.left, n(18, z = H.right - I);
        const ie = _.getBoundingClientRect(),
            ae = T.getBoundingClientRect();
        n(10, y = ie.top < N && ie.bottom > 0);
        const A = ie.bottom - ie.top,
            W = ae.bottom - ae.top,
            se = r - s;
        n(9, v = (s - ie.top) / (A - se)), v <= 0 ? (n(17, q = 0), n(16, F = !1)) : v >= 1 ? (n(17, q = p ? A - W : A - se), n(16, F = !1)) : (n(17, q = p ? Math.round(s - v * (W - se)) : s), n(16, F = !0));
        for (let Q = 0; Q < B.length; Q++) {
            const ke = B[Q],
                {
                    top: fe
                } = ke.getBoundingClientRect(),
                ge = B[Q + 1],
                $e = ge ? ge.getBoundingClientRect().top : ie.bottom;
            if (n(8, E = (o - fe) / ($e - fe)), $e >= o) {
                n(6, b = Q);
                break
            }
        }
    }

    function ee() {
        n(0, N = gr.innerHeight)
    }

    function te(H) {
        Me[H ? "unshift" : "push"](() => {
            T = H, n(3, T)
        })
    }

    function le(H) {
        Me[H ? "unshift" : "push"](() => {
            _ = H, n(2, _)
        })
    }

    function ne(H) {
        Me[H ? "unshift" : "push"](() => {
            d = H, n(1, d)
        })
    }
    return t.$$set = H => {
        "top" in H && n(11, f = H.top), "bottom" in H && n(12, u = H.bottom), "threshold" in H && n(13, m = H.threshold), "query" in H && n(14, g = H.query), "parallax" in H && n(15, p = H.parallax), "index" in H && n(6, b = H.index), "count" in H && n(7, h = H.count), "offset" in H && n(8, E = H.offset), "progress" in H && n(9, v = H.progress), "visible" in H && n(10, y = H.visible), "$$scope" in H && n(19, c = H.$$scope)
    }, t.$$.update = () => {
        t.$$.dirty[0] & 2049 && (s = Math.round(f * N)), t.$$.dirty[0] & 4097 && (r = Math.round(u * N)), t.$$.dirty[0] & 8193 && (o = Math.round(m * N)), t.$$.dirty[0] & 47104 && Z(), t.$$.dirty[0] & 196608 && n(5, i = `
		position: ${F?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${q}px);
		z-index: 1;
	`), t.$$.dirty[0] & 327680 && n(4, a = F ? `width:${z}px;` : "")
    }, [N, d, _, T, a, i, b, h, E, v, y, f, u, m, g, p, F, q, z, c, l, ee, te, le, ne]
}
class pr extends X {
    constructor(e) {
        super(), Y(this, e, ai, li, K, {
            top: 11,
            bottom: 12,
            threshold: 13,
            query: 14,
            parallax: 15,
            index: 6,
            count: 7,
            offset: 8,
            progress: 9,
            visible: 10
        }, null, [-1, -1])
    }
}
var tt = {},
    _r, Oe;
Object.defineProperty(tt, "__esModule", {
    value: !0
});
Oe = tt.range = function(e, n) {
    return function(s) {
        return n[0] + (s - e[0]) * (n[1] - n[0]) / (e[1] - e[0])
    }
};
_r = tt.bezier = function(e) {
    return function(n) {
        var s = e,
            r = [],
            o = 0,
            i = 0;
        for (s = e; s.length > 1; s = r)
            for (o = 0, r = [], i; o < s.length - 1; o++)
                for (r[o] = [], i = 0; i < s[o].length; i++) r[o][i] = s[o][i] * (1 - n) + s[o + 1][i] * n;
        return s[0]
    }
};
var ci = tt.random = function(e, n) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Math.random() * (n - e) + e;
    return s ? Math.floor(r) : r
};
tt.randomGenerator = function(e, n) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    return function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s;
        return ci(e, n, r)
    }
};
tt.inRange = function(e, n) {
    return function(s) {
        return s >= e && s <= n
    }
};
tt.zeroPad = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2,
        s = n - e.toString().length + 1;
    return Array(+(s > 0 && s)).join("0") + e
};

function ui(t) {
    let e, n, s;
    return n = new _t({
        props: {
            to: "/penas",
            class: "footer__link",
            $$slots: {
                default: [fi]
            },
            $$scope: {
                ctx: t
            }
        }
    }), n.$on("click", en), {
        c() {
            e = M("li"), R(n.$$.fragment), $(e, "class", "footer__item footer__item--penas")
        },
        m(r, o) {
            S(r, e, o), P(n, e, null), s = !0
        },
        p(r, o) {
            const i = {};
            o & 16 && (i.$$scope = {
                dirty: o,
                ctx: r
            }), n.$set(i)
        },
        i(r) {
            s || (j(n.$$.fragment, r), s = !0)
        },
        o(r) {
            L(n.$$.fragment, r), s = !1
        },
        d(r) {
            r && k(e), C(n)
        }
    }
}

function fi(t) {
    let e, n, s;
    return {
        c() {
            e = M("h3"), e.innerHTML = "<strong>vanessa</strong>  <small>e as</small>  <em>penas</em>", n = O(), s = M("div"), s.innerHTML = '<img class="footer__img" src="assets/img/lata-penas.webp" alt=""/>', $(e, "class", "footer__subtitle"), $(s, "class", "footer__thumb")
        },
        m(r, o) {
            S(r, e, o), S(r, n, o), S(r, s, o)
        },
        p: U,
        d(r) {
            r && k(e), r && k(n), r && k(s)
        }
    }
}

function di(t) {
    let e, n, s;
    return n = new _t({
        props: {
            to: "/bordado",
            class: "footer__link",
            $$slots: {
                default: [mi]
            },
            $$scope: {
                ctx: t
            }
        }
    }), n.$on("click", en), {
        c() {
            e = M("li"), R(n.$$.fragment), $(e, "class", "footer__item footer__item--bordado")
        },
        m(r, o) {
            S(r, e, o), P(n, e, null), s = !0
        },
        p(r, o) {
            const i = {};
            o & 16 && (i.$$scope = {
                dirty: o,
                ctx: r
            }), n.$set(i)
        },
        i(r) {
            s || (j(n.$$.fragment, r), s = !0)
        },
        o(r) {
            L(n.$$.fragment, r), s = !1
        },
        d(r) {
            r && k(e), C(n)
        }
    }
}

function mi(t) {
    let e, n, s;
    return {
        c() {
            e = M("h3"), e.innerHTML = "<strong>mariana</strong>  <small>e os</small>  <em>bordados</em>", n = O(), s = M("div"), s.innerHTML = '<img class="footer__img" src="assets/img/lata-bordado.webp" alt=""/>', $(e, "class", "footer__subtitle"), $(s, "class", "footer__thumb")
        },
        m(r, o) {
            S(r, e, o), S(r, n, o), S(r, s, o)
        },
        p: U,
        d(r) {
            r && k(e), r && k(n), r && k(s)
        }
    }
}

function gi(t) {
    let e, n, s;
    return n = new _t({
        props: {
            to: "/chita",
            class: "footer__link",
            $$slots: {
                default: [pi]
            },
            $$scope: {
                ctx: t
            }
        }
    }), n.$on("click", en), {
        c() {
            e = M("li"), R(n.$$.fragment), $(e, "class", "footer__item footer__item--chita")
        },
        m(r, o) {
            S(r, e, o), P(n, e, null), s = !0
        },
        p(r, o) {
            const i = {};
            o & 16 && (i.$$scope = {
                dirty: o,
                ctx: r
            }), n.$set(i)
        },
        i(r) {
            s || (j(n.$$.fragment, r), s = !0)
        },
        o(r) {
            L(n.$$.fragment, r), s = !1
        },
        d(r) {
            r && k(e), C(n)
        }
    }
}

function pi(t) {
    let e, n, s;
    return {
        c() {
            e = M("h3"), e.innerHTML = "<strong>Dona Lucília</strong>  <small>e a</small>  <em>chita</em>", n = O(), s = M("div"), s.innerHTML = '<img class="footer__img" src="assets/img/lata-chita.webp" alt=""/>', $(e, "class", "footer__subtitle"), $(s, "class", "footer__thumb")
        },
        m(r, o) {
            S(r, e, o), S(r, n, o), S(r, s, o)
        },
        p: U,
        d(r) {
            r && k(e), r && k(n), r && k(s)
        }
    }
}

function _i(t) {
    let e, n, s;
    return n = new _t({
        props: {
            to: "/fitas",
            class: "footer__link",
            $$slots: {
                default: [hi]
            },
            $$scope: {
                ctx: t
            }
        }
    }), n.$on("click", en), {
        c() {
            e = M("li"), R(n.$$.fragment), $(e, "class", "footer__item footer__item--fitas")
        },
        m(r, o) {
            S(r, e, o), P(n, e, null), s = !0
        },
        p(r, o) {
            const i = {};
            o & 16 && (i.$$scope = {
                dirty: o,
                ctx: r
            }), n.$set(i)
        },
        i(r) {
            s || (j(n.$$.fragment, r), s = !0)
        },
        o(r) {
            L(n.$$.fragment, r), s = !1
        },
        d(r) {
            r && k(e), C(n)
        }
    }
}

function hi(t) {
    let e, n, s;
    return {
        c() {
            e = M("h3"), e.innerHTML = "<strong>Seu raimundo</strong>  <small>e as</small>  <em>fitas</em>", n = O(), s = M("div"), s.innerHTML = '<img class="footer__img" src="assets/img/lata-fitas.webp" alt=""/>', $(e, "class", "footer__subtitle"), $(s, "class", "footer__thumb")
        },
        m(r, o) {
            S(r, e, o), S(r, n, o), S(r, s, o)
        },
        p: U,
        d(r) {
            r && k(e), r && k(n), r && k(s)
        }
    }
}

function bi(t) {
    let e, n, s, r, o, i, a, l, c, f = window.location.pathname !== "/penas" && ui(t),
        u = window.location.pathname !== "/bordado" && di(t),
        m = window.location.pathname !== "/chita" && gi(t),
        g = window.location.pathname !== "/fitas" && _i(t);
    return {
        c() {
            e = M("footer"), n = M("h2"), s = re("Outras histórias"), r = O(), o = M("ul"), f && f.c(), i = O(), u && u.c(), a = O(), m && m.c(), l = O(), g && g.c(), $(n, "class", "footer__title"), he(n, "transform", "translateX(" + t[1] + "px)"), $(o, "class", "footer__list"), $(e, "class", "footer"), $(e, "slot", "foreground")
        },
        m(p, b) {
            S(p, e, b), w(e, n), w(n, s), w(e, r), w(e, o), f && f.m(o, null), w(o, i), u && u.m(o, null), w(o, a), m && m.m(o, null), w(o, l), g && g.m(o, null), c = !0
        },
        p(p, b) {
            (!c || b & 2) && he(n, "transform", "translateX(" + p[1] + "px)"), window.location.pathname !== "/penas" && f.p(p, b), window.location.pathname !== "/bordado" && u.p(p, b), window.location.pathname !== "/chita" && m.p(p, b), window.location.pathname !== "/fitas" && g.p(p, b)
        },
        i(p) {
            c || (j(f), j(u), j(m), j(g), c = !0)
        },
        o(p) {
            L(f), L(u), L(m), L(g), c = !1
        },
        d(p) {
            p && k(e), f && f.d(), u && u.d(), m && m.d(), g && g.d()
        }
    }
}

function yi(t) {
    let e, n, s;

    function r(i) {
        t[2](i)
    }
    let o = {
        bottom: 0,
        $$slots: {
            foreground: [bi]
        },
        $$scope: {
            ctx: t
        }
    };
    return t[0] !== void 0 && (o.progress = t[0]), e = new pr({
        props: o
    }), Me.push(() => zs(e, "progress", r)), {
        c() {
            R(e.$$.fragment)
        },
        m(i, a) {
            P(e, i, a), s = !0
        },
        p(i, [a]) {
            const l = {};
            a & 18 && (l.$$scope = {
                dirty: a,
                ctx: i
            }), !n && a & 1 && (n = !0, l.progress = i[0], Js(() => n = !1)), e.$set(l)
        },
        i(i) {
            s || (j(e.$$.fragment, i), s = !0)
        },
        o(i) {
            L(e.$$.fragment, i), s = !1
        },
        d(i) {
            C(e, i)
        }
    }
}

function en() {
    window.scrollTo(0, 0)
}

function $i(t, e, n) {
    let s;
    const r = (a, l, c) => Math.min(Math.max(a, l), c);
    let o = 0;

    function i(a) {
        o = a, n(0, o)
    }
    return t.$$.update = () => {
        t.$$.dirty & 1 && n(1, s = r(Oe([-1, 0], [-100, 0])(o), -100, 0))
    }, [o, s, i]
}
class tn extends X {
    constructor(e) {
        super(), Y(this, e, $i, yi, K, {})
    }
}

function vi(t) {
    const e = t - 1;
    return e * e * e + 1
}

function dt(t, {
    delay: e = 0,
    duration: n = 400,
    easing: s = Et
} = {}) {
    const r = +getComputedStyle(t).opacity;
    return {
        delay: e,
        duration: n,
        easing: s,
        css: o => `opacity: ${o*r}`
    }
}

function Je(t, {
    delay: e = 0,
    duration: n = 400,
    easing: s = vi,
    x: r = 0,
    y: o = 0,
    opacity: i = 0
} = {}) {
    const a = getComputedStyle(t),
        l = +a.opacity,
        c = a.transform === "none" ? "" : a.transform,
        f = l * (1 - i),
        [u, m] = Wn(r),
        [g, p] = Wn(o);
    return {
        delay: e,
        duration: n,
        easing: s,
        css: (b, h) => `
			transform: ${c} translate(${(1-b)*u}${m}, ${(1-b)*g}${p});
			opacity: ${l-f*h}`
    }
}

function ms(t) {
    return Object.prototype.toString.call(t) === "[object Date]"
}

function jn(t, e) {
    if (t === e || t !== t) return () => t;
    const n = typeof t;
    if (n !== typeof e || Array.isArray(t) !== Array.isArray(e)) throw new Error("Cannot interpolate values of different type");
    if (Array.isArray(t)) {
        const s = e.map((r, o) => jn(t[o], r));
        return r => s.map(o => o(r))
    }
    if (n === "object") {
        if (!t || !e) throw new Error("Object cannot be null");
        if (ms(t) && ms(e)) {
            t = t.getTime(), e = e.getTime();
            const o = e - t;
            return i => new Date(t + i * o)
        }
        const s = Object.keys(e),
            r = {};
        return s.forEach(o => {
            r[o] = jn(t[o], e[o])
        }), o => {
            const i = {};
            return s.forEach(a => {
                i[a] = r[a](o)
            }), i
        }
    }
    if (n === "number") {
        const s = e - t;
        return r => t + r * s
    }
    throw new Error(`Cannot interpolate ${n} values`)
}

function hr(t, e = {}) {
    const n = we(t);
    let s, r = t;

    function o(i, a) {
        if (t == null) return n.set(t = i), Promise.resolve();
        r = i;
        let l = s,
            c = !1,
            {
                delay: f = 0,
                duration: u = 400,
                easing: m = Et,
                interpolate: g = jn
            } = be(be({}, e), a);
        if (u === 0) return l && (l.abort(), l = null), n.set(t = r), Promise.resolve();
        const p = Xt() + f;
        let b;
        return s = Qt(h => {
            if (h < p) return !0;
            c || (b = g(t, i), typeof u == "function" && (u = u(t, i)), c = !0), l && (l.abort(), l = null);
            const E = h - p;
            return E > u ? (n.set(t = i), !1) : (n.set(t = b(m(E / u))), !0)
        }), s.promise
    }
    return {
        set: o,
        update: (i, a) => o(i(r, t), a),
        subscribe: n.subscribe
    }
}

function bn(t) {
    let e, n, s;
    const r = t[11].default,
        o = Ge(r, t, t[10], null);
    let i = [t[5], {
            style: n = "transform: translateY(" + t[3] + "px);"
        }, {
            "aria-hidden": "true"
        }],
        a = {};
    for (let l = 0; l < i.length; l += 1) a = be(a, i[l]);
    return {
        c() {
            e = M(t[0]), o && o.c(), Zn(t[0])(e, a)
        },
        m(l, c) {
            S(l, e, c), o && o.m(e, null), t[13](e), s = !0
        },
        p(l, c) {
            o && o.p && (!s || c & 1024) && xe(o, r, l, l[10], s ? Ke(r, l[10], c, null) : Ye(l[10]), null), Zn(l[0])(e, a = Nn(i, [c & 32 && l[5], (!s || c & 8 && n !== (n = "transform: translateY(" + l[3] + "px);")) && {
                style: n
            }, {
                "aria-hidden": "true"
            }]))
        },
        i(l) {
            s || (j(o, l), s = !0)
        },
        o(l) {
            L(o, l), s = !1
        },
        d(l) {
            l && k(e), o && o.d(l), t[13](null)
        }
    }
}

function wi(t) {
    let e = !1,
        n = () => {
            e = !1
        },
        s, r = t[0],
        o, i, a, l;
    ce(t[12]);
    let c = t[0] && bn(t);
    return {
        c() {
            c && c.c(), o = Ne()
        },
        m(f, u) {
            c && c.m(f, u), S(f, o, u), i = !0, a || (l = ue(window, "scroll", () => {
                e = !0, clearTimeout(s), s = setTimeout(n, 100), t[12]()
            }), a = !0)
        },
        p(f, [u]) {
            u & 2 && !e && (e = !0, clearTimeout(s), scrollTo(window.pageXOffset, f[1]), s = setTimeout(n, 100)), f[0] ? r ? K(r, f[0]) ? (c.d(1), c = bn(f), r = f[0], c.c(), c.m(o.parentNode, o)) : c.p(f, u) : (c = bn(f), r = f[0], c.c(), c.m(o.parentNode, o)) : r && (c.d(1), c = null, r = f[0])
        },
        i(f) {
            i || (j(c), i = !0)
        },
        o(f) {
            L(c), i = !1
        },
        d(f) {
            f && k(o), c && c.d(f), a = !1, l()
        }
    }
}

function ki(t, e, n) {
    let s, {
            $$slots: r = {},
            $$scope: o
        } = e,
        {
            tag: i = "div"
        } = e,
        {
            speed: a = .1
        } = e,
        {
            offset: l = 0
        } = e,
        c = null,
        f = 0,
        u = {
            top: 0
        },
        m = 0,
        g = hr(0, {
            duration: 200
        });
    ve(t, g, h => n(3, s = h)), pt(() => {
        n(8, u = c.getBoundingClientRect()), n(9, m = f)
    });

    function p() {
        n(1, f = window.pageYOffset)
    }

    function b(h) {
        Me[h ? "unshift" : "push"](() => {
            c = h, n(2, c)
        })
    }
    return t.$$set = h => {
        n(5, e = be(be({}, e), ct(h))), "tag" in h && n(0, i = h.tag), "speed" in h && n(6, a = h.speed), "offset" in h && n(7, l = h.offset), "$$scope" in h && n(10, o = h.$$scope)
    }, t.$$.update = () => {
        t.$$.dirty & 962 && g.set((f - u.top - m - l) * -1 * a)
    }, e = ct(e), [i, f, c, s, g, e, a, l, u, m, o, r, p, b]
}
class ze extends X {
    constructor(e) {
        super(), Y(this, e, ki, wi, K, {
            tag: 0,
            speed: 6,
            offset: 7
        })
    }
}

function Si(t) {
    let e, n, s, r;
    return {
        c() {
            e = M("iframe"), pe(e.src, n = `${t[1]}?${t[3].toString()}`) || $(e, "src", n), $(e, "class", t[0]), $(e, "title", "Vídeo"), he(e, "border", "none"), he(e, "position", "absolute"), he(e, "top", "0"), he(e, "height", "100%"), he(e, "width", "100%"), $(e, "allow", "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"), e.allowFullscreen = !0
        },
        m(o, i) {
            S(o, e, i), t[13](e), s || (r = ue(e, "play", t[4]), s = !0)
        },
        p(o, [i]) {
            i & 10 && !pe(e.src, n = `${o[1]}?${o[3].toString()}`) && $(e, "src", n), i & 1 && $(e, "class", o[0])
        },
        i: U,
        o: U,
        d(o) {
            o && k(e), t[13](null), s = !1, r()
        }
    }
}
const gs = "https://embed.cloudflarestream.com/embed/sdk.latest.js";

function Ei(t, e, n) {
    let s, r, {
            classname: o = ""
        } = e,
        {
            src: i = ""
        } = e,
        {
            poster: a = ""
        } = e,
        {
            preload: l = !0
        } = e;
    const c = Tn();
    let f = null,
        u = null,
        {
            isPlaying: m = !1
        } = e;

    function g() {
        s && (s.play().catch(() => {
            console.log("playback failed, muting to try again"), n(12, s.muted = !0, s), s.play(), n(5, m = s.play)
        }), n(5, m = s.play))
    }

    function p() {
        s && s.pause()
    }

    function b(I) {
        n(5, m = s.play), c("play", I)
    }

    function h(I) {
        n(5, m = s.play), c("pause", I)
    }

    function E(I) {
        n(5, m = s.play), c("ended", I)
    }

    function v() {
        s && (s.addEventListener("play", b), s.addEventListener("pause", h), s.addEventListener("ended", E))
    }

    function y() {
        s.removeEventListener("play", b), s.removeEventListener("pause", h), s.removeEventListener("ended", E)
    }
    const d = () => {
        if (!(typeof window > "u")) return window.Stream
    };
    pt(() => {
        if (!f) {
            const I = document.querySelector(`script[src='${gs}']`),
                B = I ? ? document.createElement("script");
            B.addEventListener("load", () => {
                n(11, f = d)
            }), I ? n(11, f = d) : (B.src = gs, document.head.appendChild(B))
        }
    }), Wt(y);

    function T(I) {
        Me[I ? "unshift" : "push"](() => {
            u = I, n(2, u)
        })
    }
    return t.$$set = I => {
        "classname" in I && n(0, o = I.classname), "src" in I && n(1, i = I.src), "poster" in I && n(6, a = I.poster), "preload" in I && n(7, l = I.preload), "isPlaying" in I && n(5, m = I.isPlaying)
    }, t.$$.update = () => {
        t.$$.dirty & 2052 && n(12, s = f ? new Stream(u) : null), t.$$.dirty & 4096 && s && v(), t.$$.dirty & 192 && n(3, r = new URLSearchParams({
            preload: l,
            poster: a
        }))
    }, [o, i, u, r, b, m, a, l, g, p, d, f, s, T]
}
class Mi extends X {
    constructor(e) {
        super(), Y(this, e, Ei, Si, K, {
            classname: 0,
            src: 1,
            poster: 6,
            preload: 7,
            isPlaying: 5,
            play: 8,
            pause: 9,
            safelyAccessStreamSDK: 10
        })
    }
    get classname() {
        return this.$$.ctx[0]
    }
    set classname(e) {
        this.$$set({
            classname: e
        }), Be()
    }
    get src() {
        return this.$$.ctx[1]
    }
    set src(e) {
        this.$$set({
            src: e
        }), Be()
    }
    get poster() {
        return this.$$.ctx[6]
    }
    set poster(e) {
        this.$$set({
            poster: e
        }), Be()
    }
    get preload() {
        return this.$$.ctx[7]
    }
    set preload(e) {
        this.$$set({
            preload: e
        }), Be()
    }
    get isPlaying() {
        return this.$$.ctx[5]
    }
    set isPlaying(e) {
        this.$$set({
            isPlaying: e
        }), Be()
    }
    get play() {
        return this.$$.ctx[8]
    }
    get pause() {
        return this.$$.ctx[9]
    }
    get safelyAccessStreamSDK() {
        return this.$$.ctx[10]
    }
}

function ji(t, e, n) {
    const s = t.slice();
    return s[17] = e[n], s[19] = n, s
}

function ps(t) {
    let e, n;
    return {
        c() {
            e = M("small"), n = re(t[0])
        },
        m(s, r) {
            S(s, e, r), w(e, n)
        },
        p(s, r) {
            r & 1 && Pe(n, s[0])
        },
        d(s) {
            s && k(e)
        }
    }
}

function Ii(t) {
    let e, n, s;
    return {
        c() {
            e = M("span"), n = re(t[17])
        },
        m(r, o) {
            S(r, e, o), w(e, n)
        },
        p(r, o) {
            t = r
        },
        i(r) {
            s || ce(() => {
                s = Fe(e, dt, {
                    delay: yt + t[19] * 150,
                    duration: 300
                }), s.start()
            })
        },
        o: U,
        d(r) {
            r && k(e)
        }
    }
}

function Li(t) {
    let e, n, s, r, o, i, a, l, c, f, u, m, g, p, b, h, E, v, y, d, _, T, I, B, N, F, q, z, Z, ee, te, le, ne, H, ie, ae, A, W, se, Q = t[0] !== "" && ps(t),
        ke = "Assistir".split(""),
        fe = [];
    for (let V = 0; V < ke.length; V += 1) fe[V] = Ii(ji(t, ke, V));
    let ge = {
        classname: "hero__player",
        src: t[4],
        poster: `${window.location.origin}/${t[5]}`
    };
    N = new Mi({
        props: ge
    }), t[16](N), N.$on("play", t[10]), N.$on("pause", t[12]), N.$on("ended", t[11]);
    const $e = t[15].default,
        de = Ge($e, t, t[14], null);
    return ne = new ze({
        props: {
            tag: "i",
            speed: .05,
            class: "hero__ilustra"
        }
    }), ie = new ze({
        props: {
            tag: "i",
            speed: .2,
            class: "hero__ilu2"
        }
    }), {
        c() {
            e = M("div"), n = M("div"), s = M("h2"), Q && Q.c(), r = O(), o = M("strong"), i = re(t[1]), c = O(), f = M("span"), u = M("em"), m = re(t[2]), g = O(), p = M("strong"), b = re(t[3]), E = O(), v = M("div"), y = M("button");
            for (let V = 0; V < fe.length; V += 1) fe[V].c();
            d = O(), _ = M("div"), T = M("img"), B = O(), R(N.$$.fragment), F = O(), q = M("button"), q.innerHTML = "<span>Fechar</span>", Z = O(), ee = M("div"), de && de.c(), le = O(), R(ne.$$.fragment), H = O(), R(ie.$$.fragment), $(s, "class", "hero__title"), $(f, "class", "hero__subtitle"), $(y, "class", "hero__video-link"), pe(T.src, I = t[5]) || $(T, "src", I), $(T, "alt", "Banner"), $(T, "class", "hero__img"), $(q, "class", "hero__close"), $(_, "class", "hero__banner"), $(v, "class", "hero__video"), $(ee, "class", "hero__content"), $(n, "class", "hero__container container"), $(e, "class", ae = "hero " + (t[7] ? "hero--playing" : "") + " hero--" + t[3].split(" ").pop())
        },
        m(V, D) {
            S(V, e, D), w(e, n), w(n, s), Q && Q.m(s, null), w(s, r), w(s, o), w(o, i), w(n, c), w(n, f), w(f, u), w(u, m), w(f, g), w(f, p), w(p, b), w(n, E), w(n, v), w(v, y);
            for (let J = 0; J < fe.length; J += 1) fe[J] && fe[J].m(y, null);
            w(v, d), w(v, _), w(_, T), w(_, B), P(N, _, null), w(_, F), w(_, q), w(n, Z), w(n, ee), de && de.m(ee, null), w(n, le), P(ne, n, null), w(n, H), P(ie, n, null), A = !0, W || (se = [ue(y, "click", t[9]), ue(q, "click", t[13])], W = !0)
        },
        p(V, [D]) {
            t = V, t[0] !== "" ? Q ? Q.p(t, D) : (Q = ps(t), Q.c(), Q.m(s, r)) : Q && (Q.d(1), Q = null), (!A || D & 2) && Pe(i, t[1]), (!A || D & 4) && Pe(m, t[2]), (!A || D & 8) && Pe(b, t[3]), (!A || D & 32 && !pe(T.src, I = t[5])) && $(T, "src", I);
            const J = {};
            D & 16 && (J.src = t[4]), D & 32 && (J.poster = `${window.location.origin}/${t[5]}`), N.$set(J), de && de.p && (!A || D & 16384) && xe(de, $e, t, t[14], A ? Ke($e, t[14], D, null) : Ye(t[14]), null), (!A || D & 136 && ae !== (ae = "hero " + (t[7] ? "hero--playing" : "") + " hero--" + t[3].split(" ").pop())) && $(e, "class", ae)
        },
        i(V) {
            if (!A) {
                a || ce(() => {
                    a = Fe(o, Je, t[8].title), a.start()
                }), l || ce(() => {
                    l = Fe(s, Je, t[8].title), l.start()
                }), h || ce(() => {
                    h = Fe(f, Je, t[8].subtitle), h.start()
                });
                for (let D = 0; D < ke.length; D += 1) j(fe[D]);
                j(N.$$.fragment, V), z || ce(() => {
                    z = Fe(v, Je, t[8].video), z.start()
                }), j(de, V), te || ce(() => {
                    te = Fe(ee, Je, t[8].content), te.start()
                }), j(ne.$$.fragment, V), j(ie.$$.fragment, V), A = !0
            }
        },
        o(V) {
            L(N.$$.fragment, V), L(de, V), L(ne.$$.fragment, V), L(ie.$$.fragment, V), A = !1
        },
        d(V) {
            V && k(e), Q && Q.d(), gt(fe, V), t[16](null), C(N), de && de.d(V), C(ne), C(ie), W = !1, ye(se)
        }
    }
}
const yt = 500;

function Oi(t, e, n) {
    let {
        $$slots: s = {},
        $$scope: r
    } = e, {
        hat: o = ""
    } = e, {
        title: i = ""
    } = e, {
        article: a = "e a"
    } = e, {
        subject: l = ""
    } = e, {
        videoUrl: c = "https://customer-cr9gbt1wye0o1ab6.cloudflarestream.com/c698af1fc7577d3030d1cbbaa3c5d302/iframe"
    } = e, {
        image: f = ""
    } = e;
    const u = {
        title: {
            x: -100,
            opacity: 0,
            delay: yt + 400,
            duration: 400
        },
        subtitle: {
            x: 50,
            opacity: 0,
            delay: yt + 500,
            duration: 400
        },
        video: {
            y: 500,
            opacity: 0,
            delay: yt,
            duration: 400
        },
        content: {
            y: 100,
            opacity: 0,
            delay: yt + 700,
            duration: 200
        }
    };
    let m = null,
        g = !1;

    function p() {
        m && m.play()
    }

    function b() {
        n(7, g = !0), gtag && gtag("event", "video_play", {
            screen_name: l
        })
    }

    function h() {
        n(7, g = !1), gtag && gtag("event", "video_ended", {
            screen_name: l
        })
    }

    function E() {
        gtag && gtag("event", "video_pause", {
            screen_name: l
        })
    }

    function v() {
        m.pause(), n(7, g = !1), gtag && gtag("event", "video_close", {
            screen_name: l
        })
    }

    function y(d) {
        Me[d ? "unshift" : "push"](() => {
            m = d, n(6, m)
        })
    }
    return t.$$set = d => {
        "hat" in d && n(0, o = d.hat), "title" in d && n(1, i = d.title), "article" in d && n(2, a = d.article), "subject" in d && n(3, l = d.subject), "videoUrl" in d && n(4, c = d.videoUrl), "image" in d && n(5, f = d.image), "$$scope" in d && n(14, r = d.$$scope)
    }, [o, i, a, l, c, f, m, g, u, p, b, h, E, v, r, s, y]
}
class nn extends X {
    constructor(e) {
        super(), Y(this, e, Oi, Li, K, {
            hat: 0,
            title: 1,
            article: 2,
            subject: 3,
            videoUrl: 4,
            image: 5
        })
    }
}

function Pi(t) {
    return t()
}

function Ci(t) {
    t.forEach(Pi)
}
const At = [],
    _s = [],
    Bt = [],
    hs = [],
    br = Promise.resolve();
let In = !1;

function Ri() {
    In || (In = !0, br.then(Di))
}

function Ti() {
    return Ri(), br
}

function Ai(t) {
    Bt.push(t)
}
const yn = new Set;
let Dt = 0;

function Di() {
    do {
        for (; Dt < At.length;) {
            const t = At[Dt];
            Dt++, Ni(t.$$)
        }
        for (At.length = 0, Dt = 0; _s.length;) _s.pop()();
        for (let t = 0; t < Bt.length; t += 1) {
            const e = Bt[t];
            yn.has(e) || (yn.add(e), e())
        }
        Bt.length = 0
    } while (At.length);
    for (; hs.length;) hs.pop()();
    In = !1, yn.clear()
}

function Ni(t) {
    if (t.fragment !== null) {
        t.update(), Ci(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ai)
    }
}
const Hi = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
        unobserveOnEnter: !1
    },
    Re = (t, e) => new CustomEvent(t, {
        detail: e
    });

function yr(t, e = {}) {
    const {
        root: n,
        rootMargin: s,
        threshold: r,
        unobserveOnEnter: o
    } = Object.assign(Object.assign({}, Hi), e);
    let i = {
            x: void 0,
            y: void 0
        },
        a = {
            vertical: void 0,
            horizontal: void 0
        };
    if (typeof IntersectionObserver < "u" && t) {
        const l = new IntersectionObserver((c, f) => {
            c.forEach(u => {
                i.y > u.boundingClientRect.y ? a.vertical = "up" : a.vertical = "down", i.x > u.boundingClientRect.x ? a.horizontal = "left" : a.horizontal = "right", i = {
                    y: u.boundingClientRect.y,
                    x: u.boundingClientRect.x
                };
                const m = {
                    inView: u.isIntersecting,
                    entry: u,
                    scrollDirection: a,
                    node: t,
                    observer: f
                };
                t.dispatchEvent(Re("inview_change", m)), t.dispatchEvent(Re("change", m)), u.isIntersecting ? (t.dispatchEvent(Re("inview_enter", m)), t.dispatchEvent(Re("enter", m)), o && f.unobserve(t)) : (t.dispatchEvent(Re("inview_leave", m)), t.dispatchEvent(Re("leave", m)))
            })
        }, {
            root: n,
            rootMargin: s,
            threshold: r
        });
        return Ti().then(() => {
            t.dispatchEvent(Re("inview_init", {
                observer: l,
                node: t
            })), t.dispatchEvent(Re("init", {
                observer: l,
                node: t
            }))
        }), l.observe(t), {
            destroy() {
                l.unobserve(t)
            }
        }
    }
}

function bs(t, e, n) {
    const s = t.slice();
    return s[5] = e[n], s[7] = n, s
}

function ys(t) {
    let e, n = t[5] + "",
        s, r, o, i;

    function a(...l) {
        return t[4](t[7], ...l)
    }
    return {
        c() {
            e = M("p"), s = re(n), r = re(" "), ut(e, "active", t[7] === t[2])
        },
        m(l, c) {
            S(l, e, c), w(e, s), w(e, r), o || (i = [Mt(yr.call(null, e, t[3])), ue(e, "inview_change", a)], o = !0)
        },
        p(l, c) {
            t = l, c & 1 && n !== (n = t[5] + "") && Pe(s, n), c & 4 && ut(e, "active", t[7] === t[2])
        },
        d(l) {
            l && k(e), o = !1, ye(i)
        }
    }
}

function Bi(t) {
    let e, n, s, r, o, i, a, l = t[0],
        c = [];
    for (let f = 0; f < l.length; f += 1) c[f] = ys(bs(t, l, f));
    return o = new ze({
        props: {
            tag: "i",
            class: "paragraph-highlighter__ilu"
        }
    }), {
        c() {
            e = M("section"), n = M("div"), s = M("div");
            for (let f = 0; f < c.length; f += 1) c[f].c();
            r = O(), R(o.$$.fragment), $(s, "class", "paragraph-highlighter__content"), $(n, "class", "container paragraph-highlighter__container"), $(e, "class", i = "paragraph-highlighter paragraph-highlighter--" + t[1])
        },
        m(f, u) {
            S(f, e, u), w(e, n), w(n, s);
            for (let m = 0; m < c.length; m += 1) c[m] && c[m].m(s, null);
            w(s, r), P(o, s, null), a = !0
        },
        p(f, [u]) {
            if (u & 13) {
                l = f[0];
                let m;
                for (m = 0; m < l.length; m += 1) {
                    const g = bs(f, l, m);
                    c[m] ? c[m].p(g, u) : (c[m] = ys(g), c[m].c(), c[m].m(s, r))
                }
                for (; m < c.length; m += 1) c[m].d(1);
                c.length = l.length
            }(!a || u & 2 && i !== (i = "paragraph-highlighter paragraph-highlighter--" + f[1])) && $(e, "class", i)
        },
        i(f) {
            a || (j(o.$$.fragment, f), a = !0)
        },
        o(f) {
            L(o.$$.fragment, f), a = !1
        },
        d(f) {
            f && k(e), gt(c, f), C(o)
        }
    }
}

function Fi(t, e, n) {
    let s = 0,
        {
            content: r = []
        } = e,
        {
            subject: o = ""
        } = e;
    const i = {
            rootMargin: "-45% 0px -45% 0px"
        },
        a = (l, c) => {
            c.detail.inView && n(2, s = l)
        };
    return t.$$set = l => {
        "content" in l && n(0, r = l.content), "subject" in l && n(1, o = l.subject)
    }, [r, o, s, i, a]
}
class sn extends X {
    constructor(e) {
        super(), Y(this, e, Fi, Bi, K, {
            content: 0,
            subject: 1
        })
    }
}

function $s(t, e, n) {
    const s = t.slice();
    return s[10] = e[n], s
}

function vs(t) {
    let e, n, s, r, o;
    return {
        c() {
            e = M("div"), n = M("img"), o = O(), $(n, "class", "sticky-gallery__img"), pe(n.src, s = t[10].src) || $(n, "src", s), $(n, "alt", r = t[10].alt), $(e, "class", "sticky-gallery__content")
        },
        m(i, a) {
            S(i, e, a), w(e, n), w(e, o)
        },
        p(i, a) {
            a & 2 && !pe(n.src, s = i[10].src) && $(n, "src", s), a & 2 && r !== (r = i[10].alt) && $(n, "alt", r)
        },
        d(i) {
            i && k(e)
        }
    }
}

function Ji(t) {
    let e, n, s, r, o, i, a, l, c = t[1],
        f = [];
    for (let u = 0; u < c.length; u += 1) f[u] = vs($s(t, c, u));
    return {
        c() {
            e = M("section"), n = M("div"), s = M("div");
            for (let u = 0; u < f.length; u += 1) f[u].c();
            r = O(), o = M("i"), $(s, "class", "container sticky-gallery__container"), $(n, "class", "sticky-gallery__wrapper"), $(o, "class", "sticky-gallery__ilustra"), $(o, "aria-hidden", "true"), he(o, "transform", "rotate(" + t[3](t[2]) + "deg)"), $(e, "class", i = "sticky-gallery sticky-gallery--" + t[0]), $(e, "slot", "foreground")
        },
        m(u, m) {
            S(u, e, m), w(e, n), w(n, s);
            for (let g = 0; g < f.length; g += 1) f[g] && f[g].m(s, null);
            w(e, r), w(e, o), a || (l = Mt(t[4].call(null, n)), a = !0)
        },
        p(u, m) {
            if (m & 2) {
                c = u[1];
                let g;
                for (g = 0; g < c.length; g += 1) {
                    const p = $s(u, c, g);
                    f[g] ? f[g].p(p, m) : (f[g] = vs(p), f[g].c(), f[g].m(s, null))
                }
                for (; g < f.length; g += 1) f[g].d(1);
                f.length = c.length
            }
            m & 12 && he(o, "transform", "rotate(" + u[3](u[2]) + "deg)"), m & 1 && i !== (i = "sticky-gallery sticky-gallery--" + u[0]) && $(e, "class", i)
        },
        d(u) {
            u && k(e), gt(f, u), a = !1, l()
        }
    }
}

function Ui(t) {
    let e, n, s, r, o;

    function i(l) {
        t[8](l)
    }
    let a = {
        top: 0,
        bottom: 0,
        $$slots: {
            foreground: [Ji]
        },
        $$scope: {
            ctx: t
        }
    };
    return t[2] !== void 0 && (a.offset = t[2]), e = new pr({
        props: a
    }), Me.push(() => zs(e, "offset", i)), {
        c() {
            R(e.$$.fragment)
        },
        m(l, c) {
            P(e, l, c), s = !0, r || (o = [ue(window, "load", t[5]), ue(window, "resize", t[5])], r = !0)
        },
        p(l, [c]) {
            const f = {};
            c & 8207 && (f.$$scope = {
                dirty: c,
                ctx: l
            }), !n && c & 4 && (n = !0, f.offset = l[2], Js(() => n = !1)), e.$set(f)
        },
        i(l) {
            s || (j(e.$$.fragment, l), s = !0)
        },
        o(l) {
            L(e.$$.fragment, l), s = !1
        },
        d(l) {
            C(e, l), r = !1, ye(o)
        }
    }
}

function zi(t, e, n) {
    let {
        subject: s = ""
    } = e, {
        images: r = []
    } = e, o = null, i;
    const a = (g, p, b) => Math.min(Math.max(g, p), b);
    let l = g => g,
        c = g => g;

    function f(g) {
        n(6, o = g), setTimeout(u, 100)
    }

    function u() {
        o && (n(7, l = Oe([0, .7], [0, o.scrollWidth])), n(3, c = Oe([0, 1], [0, 30])))
    }
    pt(u);

    function m(g) {
        i = g, n(2, i)
    }
    return t.$$set = g => {
        "subject" in g && n(0, s = g.subject), "images" in g && n(1, r = g.images)
    }, t.$$.update = () => {
        t.$$.dirty & 196 && o && n(6, o.scrollLeft = l(a(i * .5, 0, 1)), o)
    }, [s, r, i, c, f, u, o, l, m]
}
class rn extends X {
    constructor(e) {
        super(), Y(this, e, zi, Ui, K, {
            subject: 0,
            images: 1
        })
    }
}

function ws(t, e, n) {
    const s = t.slice();
    return s[4] = e[n], s[6] = n, s
}

function ks(t) {
    let e, n, s, r, o, i, a, l;
    return {
        c() {
            e = M("li"), n = M("img"), o = O(), pe(n.src, s = t[4].src) || $(n, "src", s), $(n, "alt", r = t[4].alt), $(e, "class", "gallery__item"), $(e, "alt", i = t[4].alt), ut(e, "show", t[2][t[6]])
        },
        m(c, f) {
            S(c, e, f), w(e, n), w(e, o), a || (l = [Mt(yr.call(null, e, {
                rootMargin: "-10% 0px -10% 0px"
            })), ue(e, "inview_change", t[3](t[6]))], a = !0)
        },
        p(c, f) {
            t = c, f & 2 && !pe(n.src, s = t[4].src) && $(n, "src", s), f & 2 && r !== (r = t[4].alt) && $(n, "alt", r), f & 2 && i !== (i = t[4].alt) && $(e, "alt", i), f & 4 && ut(e, "show", t[2][t[6]])
        },
        d(c) {
            c && k(e), a = !1, ye(l)
        }
    }
}

function qi(t) {
    let e, n, s, r, o = t[1],
        i = [];
    for (let a = 0; a < o.length; a += 1) i[a] = ks(ws(t, o, a));
    return {
        c() {
            e = M("section"), n = M("div"), s = M("ul");
            for (let a = 0; a < i.length; a += 1) i[a].c();
            $(s, "class", "gallery__list"), $(n, "class", "container gallery__container"), $(e, "class", r = "gallery gallery--" + t[0])
        },
        m(a, l) {
            S(a, e, l), w(e, n), w(n, s);
            for (let c = 0; c < i.length; c += 1) i[c] && i[c].m(s, null)
        },
        p(a, [l]) {
            if (l & 14) {
                o = a[1];
                let c;
                for (c = 0; c < o.length; c += 1) {
                    const f = ws(a, o, c);
                    i[c] ? i[c].p(f, l) : (i[c] = ks(f), i[c].c(), i[c].m(s, null))
                }
                for (; c < i.length; c += 1) i[c].d(1);
                i.length = o.length
            }
            l & 1 && r !== (r = "gallery gallery--" + a[0]) && $(e, "class", r)
        },
        i: U,
        o: U,
        d(a) {
            a && k(e), gt(i, a)
        }
    }
}

function Vi(t, e, n) {
    let {
        subject: s = ""
    } = e, {
        images: r = []
    } = e, o = [];
    const i = a => l => {
        n(2, o[a] = o[a] ? o[a] : l.detail.inView, o)
    };
    return t.$$set = a => {
        "subject" in a && n(0, s = a.subject), "images" in a && n(1, r = a.images)
    }, t.$$.update = () => {
        t.$$.dirty & 6 && o.length === 0 && n(2, o = new Array(r.length).fill(!1))
    }, [s, r, o, i]
}
class on extends X {
    constructor(e) {
        super(), Y(this, e, Vi, qi, K, {
            subject: 0,
            images: 1
        })
    }
}

function Gi(t) {
    let e, n, s, r, o, i, a, l, c, f, u, m, g, p, b, h, E, v;
    return m = new ze({
        props: {
            tag: "i",
            speed: .05,
            offset: window.innerHeight / 10,
            class: "gallery-header__ilustra"
        }
    }), p = new ze({
        props: {
            tag: "i",
            speed: .03,
            offset: window.innerHeight / 5,
            class: "gallery-header__pano2"
        }
    }), h = new ze({
        props: {
            tag: "i",
            speed: .1,
            offset: window.innerHeight / 3,
            class: "gallery-header__ilu2"
        }
    }), {
        c() {
            e = M("section"), n = M("div"), s = M("h2"), r = M("astrong"), o = re(t[0]), i = re(" no"), a = O(), l = M("em"), l.textContent = "São João", c = O(), f = M("i"), u = O(), R(m.$$.fragment), g = O(), R(p.$$.fragment), b = O(), R(h.$$.fragment), $(s, "class", "gallery-header__title"), $(s, "data-credits", t[1]), $(n, "class", "container gallery-header__container"), $(f, "class", "gallery-header__pano1"), $(e, "class", E = "gallery-header gallery-header--" + t[0].split(" ").pop())
        },
        m(y, d) {
            S(y, e, d), w(e, n), w(n, s), w(s, r), w(r, o), w(r, i), w(s, a), w(s, l), w(e, c), w(e, f), w(e, u), P(m, e, null), w(e, g), P(p, e, null), w(e, b), P(h, e, null), v = !0
        },
        p(y, [d]) {
            (!v || d & 1) && Pe(o, y[0]), (!v || d & 2) && $(s, "data-credits", y[1]), (!v || d & 1 && E !== (E = "gallery-header gallery-header--" + y[0].split(" ").pop())) && $(e, "class", E)
        },
        i(y) {
            v || (j(m.$$.fragment, y), j(p.$$.fragment, y), j(h.$$.fragment, y), v = !0)
        },
        o(y) {
            L(m.$$.fragment, y), L(p.$$.fragment, y), L(h.$$.fragment, y), v = !1
        },
        d(y) {
            y && k(e), C(m), C(p), C(h)
        }
    }
}

function Ki(t, e, n) {
    let {
        subject: s = ""
    } = e, {
        credits: r = ""
    } = e;
    return t.$$set = o => {
        "subject" in o && n(0, s = o.subject), "credits" in o && n(1, r = o.credits)
    }, [s, r]
}
class ln extends X {
    constructor(e) {
        super(), Y(this, e, Ki, Gi, K, {
            subject: 0,
            credits: 1
        })
    }
}

function xi(t) {
    let e, n, s, r, o, i, a, l, c, f, u, m;
    return u = new ze({
        props: {
            speed: .05,
            tag: "img",
            src: "assets/img/textura-" + t[0] + ".webp",
            alt: ""
        }
    }), {
        c() {
            e = M("div"), n = M("div"), s = M("div"), r = M("quote"), o = re(t[1]), i = O(), a = M("span"), l = re(t[2]), c = O(), f = M("div"), R(u.$$.fragment), $(s, "class", "testimonials__quote"), $(a, "class", "testimonials__author"), $(n, "class", "testimonials__container"), $(f, "class", "testimonials__ilustra"), $(e, "class", "testimonials")
        },
        m(g, p) {
            S(g, e, p), w(e, n), w(n, s), w(s, r), w(r, o), w(n, i), w(n, a), w(a, l), w(e, c), w(e, f), P(u, f, null), m = !0
        },
        p(g, [p]) {
            (!m || p & 2) && Pe(o, g[1]), (!m || p & 4) && Pe(l, g[2]);
            const b = {};
            p & 1 && (b.src = "assets/img/textura-" + g[0] + ".webp"), u.$set(b)
        },
        i(g) {
            m || (j(u.$$.fragment, g), m = !0)
        },
        o(g) {
            L(u.$$.fragment, g), m = !1
        },
        d(g) {
            g && k(e), C(u)
        }
    }
}

function Yi(t, e, n) {
    let {
        theme: s = "fitas"
    } = e, {
        quote: r
    } = e, {
        author: o
    } = e;
    return t.$$set = i => {
        "theme" in i && n(0, s = i.theme), "quote" in i && n(1, r = i.quote), "author" in i && n(2, o = i.author)
    }, [s, r, o]
}
class an extends X {
    constructor(e) {
        super(), Y(this, e, Yi, xi, K, {
            theme: 0,
            quote: 1,
            author: 2
        })
    }
}

function Xi(t) {
    let e, n;
    return {
        c() {
            e = M("a"), n = re($r), $(e, "href", "https://wa.me?text=" + vr + ". Acesse: " + t[0]), $(e, "target", "_blank"), $(e, "rel", "noreferrer noopener"), $(e, "class", "button share__action")
        },
        m(s, r) {
            S(s, e, r), w(e, n)
        },
        p: U,
        d(s) {
            s && k(e)
        }
    }
}

function Qi(t) {
    let e, n, s;
    return {
        c() {
            e = M("button"), e.textContent = `${$r}`, $(e, "type", "button"), $(e, "class", "button share__action")
        },
        m(r, o) {
            S(r, e, o), n || (s = ue(e, "click", t[1]), n = !0)
        },
        p: U,
        d(r) {
            r && k(e), n = !1, s()
        }
    }
}

function Wi(t) {
    let e;

    function n(o, i) {
        return navigator.canShare ? Qi : Xi
    }
    let r = n()(t);
    return {
        c() {
            e = M("div"), r.c(), $(e, "class", "share")
        },
        m(o, i) {
            S(o, e, i), r.m(e, null)
        },
        p(o, [i]) {
            r.p(o, i)
        },
        i: U,
        o: U,
        d(o) {
            o && k(e), r.d()
        }
    }
}
const $r = "Compartilhe com os amigos",
    vr = "Conheça a história dos artesãos.";

function Zi(t) {
    const e = location.toString(),
        n = {
            title: "Guaraná Jesus | São João 2023",
            text: vr,
            url: e
        };
    async function s() {
        try {
            await navigator.share(n)
        } catch (r) {
            console.error(`[Share]: ${r}`)
        }
    }
    return [e, s]
}
class cn extends X {
    constructor(e) {
        super(), Y(this, e, Zi, Wi, K, {})
    }
}
const qe = we(!1);

function el(t) {
    let e;
    return {
        c() {
            e = M("p"), e.textContent = "Os bordados, feitos com vidrilhos e paetês, abrilhantam o São João e estão presentes na latinha temática de Guaraná Jesus."
        },
        m(n, s) {
            S(n, e, s)
        },
        p: U,
        d(n) {
            n && k(e)
        }
    }
}

function tl(t) {
    let e, n, s, r, o, i, a, l, c, f, u, m, g, p, b, h, E, v, y;
    return n = new Pt({}), r = new nn({
        props: {
            title: "Mariana",
            article: "e os",
            subject: "bordados",
            image: "assets/img/thumbs/bordado.jpg",
            videoUrl: "https://customer-cr9gbt1wye0o1ab6.cloudflarestream.com/01ba22efeb4cdf85b859a2e735a07902/iframe",
            $$slots: {
                default: [el]
            },
            $$scope: {
                ctx: t
            }
        }
    }), i = new sn({
        props: {
            subject: "bordados",
            content: ["Durante meses a fio, a bordadeira Mariana Carolina dá vida", "às indumentárias usando suas mãos criativas e habilidosas,", "que já fazem esse trabalho há 8 anos."]
        }
    }), l = new rn({
        props: {
            subject: "bordados",
            images: [{
                src: "assets/img/galeria/bordados01.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/bordados03.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/bordados04.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/bordados02.jpg",
                alt: ""
            }]
        }
    }), f = new ln({
        props: {
            subject: "os bordados",
            credits: "por Meireles Jr"
        }
    }), m = new on({
        props: {
            subject: "bordados",
            images: [{
                src: "assets/img/fotos/bordado1.jpg",
                alt: "Meireles Jr"
            }, {
                src: "assets/img/fotos/bordado2.jpg",
                alt: "Meireles Jr"
            }, {
                src: "assets/img/fotos/bordado3.jpg",
                alt: "Meireles Jr"
            }]
        }
    }), p = new an({
        props: {
            theme: "bordados",
            quote: "Minhas lembranças mais marcantes desse período foram quando brinquei zabumba gestante, e hoje eu mostro as tradições aos meus filhos.",
            author: "Mariana Carolina"
        }
    }), h = new cn({}), v = new tn({}), {
        c() {
            e = O(), R(n.$$.fragment), s = O(), R(r.$$.fragment), o = O(), R(i.$$.fragment), a = O(), R(l.$$.fragment), c = O(), R(f.$$.fragment), u = O(), R(m.$$.fragment), g = O(), R(p.$$.fragment), b = O(), R(h.$$.fragment), E = O(), R(v.$$.fragment), document.title = "Mariana e os bordados - São João 2023 - Guaraná Jesus"
        },
        m(d, _) {
            S(d, e, _), P(n, d, _), S(d, s, _), P(r, d, _), S(d, o, _), P(i, d, _), S(d, a, _), P(l, d, _), S(d, c, _), P(f, d, _), S(d, u, _), P(m, d, _), S(d, g, _), P(p, d, _), S(d, b, _), P(h, d, _), S(d, E, _), P(v, d, _), y = !0
        },
        p(d, [_]) {
            const T = {};
            _ & 1 && (T.$$scope = {
                dirty: _,
                ctx: d
            }), r.$set(T)
        },
        i(d) {
            y || (j(n.$$.fragment, d), j(r.$$.fragment, d), j(i.$$.fragment, d), j(l.$$.fragment, d), j(f.$$.fragment, d), j(m.$$.fragment, d), j(p.$$.fragment, d), j(h.$$.fragment, d), j(v.$$.fragment, d), y = !0)
        },
        o(d) {
            L(n.$$.fragment, d), L(r.$$.fragment, d), L(i.$$.fragment, d), L(l.$$.fragment, d), L(f.$$.fragment, d), L(m.$$.fragment, d), L(p.$$.fragment, d), L(h.$$.fragment, d), L(v.$$.fragment, d), y = !1
        },
        d(d) {
            d && k(e), C(n, d), d && k(s), C(r, d), d && k(o), C(i, d), d && k(a), C(l, d), d && k(c), C(f, d), d && k(u), C(m, d), d && k(g), C(p, d), d && k(b), C(h, d), d && k(E), C(v, d)
        }
    }
}

function nl(t) {
    return qe.set(!0), []
}
class sl extends X {
    constructor(e) {
        super(), Y(this, e, nl, tl, K, {})
    }
}

function rl(t) {
    let e;
    return {
        c() {
            e = M("p"), e.textContent = "A chita, um dos tecidos mais marcantes do São João do Maranhão, ganhou uma versão especial na latinha temática de Guaraná Jesus."
        },
        m(n, s) {
            S(n, e, s)
        },
        p: U,
        d(n) {
            n && k(e)
        }
    }
}

function ol(t) {
    let e, n, s, r, o, i, a, l, c, f, u, m, g, p, b, h, E, v, y;
    return n = new Pt({}), r = new nn({
        props: {
            title: "Dona Lucília",
            subject: "chita",
            image: "assets/img/thumbs/chita.jpg",
            videoUrl: "https://customer-cr9gbt1wye0o1ab6.cloudflarestream.com/c698af1fc7577d3030d1cbbaa3c5d302/iframe",
            $$slots: {
                default: [rl]
            },
            $$scope: {
                ctx: t
            }
        }
    }), i = new sn({
        props: {
            subject: "chita",
            content: ["Dona Lucília Melônio, artesã de 67 anos, trabalha", "com o material há mais de 20 anos, confeccionando", "saias para as coreiras do Tambor de Crioula", "contagiarem o São João com seus giros."]
        }
    }), l = new rn({
        props: {
            subject: "chita",
            images: [{
                src: "assets/img/galeria/chita04.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/chita03.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/chita01.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/chita02.jpg",
                alt: ""
            }]
        }
    }), f = new ln({
        props: {
            subject: "a chita",
            credits: "por Meireles Jr"
        }
    }), m = new on({
        props: {
            subject: "chita",
            images: [{
                src: "assets/img/fotos/chita1.jpg",
                alt: "Meireles Jr"
            }, {
                src: "assets/img/fotos/chita2.jpg",
                alt: "Meireles Jr"
            }, {
                src: "assets/img/fotos/chita3.jpg",
                alt: "Meireles Jr"
            }]
        }
    }), p = new an({
        props: {
            theme: "chita",
            quote: "É uma honra mostrar valor pelo o que a gente sabe fazer: seja dançando, colocando uma fita em um chapéu ou pregando um canutilho.",
            author: "Lucília Melônio"
        }
    }), h = new cn({}), v = new tn({}), {
        c() {
            e = O(), R(n.$$.fragment), s = O(), R(r.$$.fragment), o = O(), R(i.$$.fragment), a = O(), R(l.$$.fragment), c = O(), R(f.$$.fragment), u = O(), R(m.$$.fragment), g = O(), R(p.$$.fragment), b = O(), R(h.$$.fragment), E = O(), R(v.$$.fragment), document.title = "Dona Lucília e a chita - São João 2023 - Guaraná Jesus"
        },
        m(d, _) {
            S(d, e, _), P(n, d, _), S(d, s, _), P(r, d, _), S(d, o, _), P(i, d, _), S(d, a, _), P(l, d, _), S(d, c, _), P(f, d, _), S(d, u, _), P(m, d, _), S(d, g, _), P(p, d, _), S(d, b, _), P(h, d, _), S(d, E, _), P(v, d, _), y = !0
        },
        p(d, [_]) {
            const T = {};
            _ & 1 && (T.$$scope = {
                dirty: _,
                ctx: d
            }), r.$set(T)
        },
        i(d) {
            y || (j(n.$$.fragment, d), j(r.$$.fragment, d), j(i.$$.fragment, d), j(l.$$.fragment, d), j(f.$$.fragment, d), j(m.$$.fragment, d), j(p.$$.fragment, d), j(h.$$.fragment, d), j(v.$$.fragment, d), y = !0)
        },
        o(d) {
            L(n.$$.fragment, d), L(r.$$.fragment, d), L(i.$$.fragment, d), L(l.$$.fragment, d), L(f.$$.fragment, d), L(m.$$.fragment, d), L(p.$$.fragment, d), L(h.$$.fragment, d), L(v.$$.fragment, d), y = !1
        },
        d(d) {
            d && k(e), C(n, d), d && k(s), C(r, d), d && k(o), C(i, d), d && k(a), C(l, d), d && k(c), C(f, d), d && k(u), C(m, d), d && k(g), C(p, d), d && k(b), C(h, d), d && k(E), C(v, d)
        }
    }
}

function il(t) {
    return qe.set(!0), []
}
class ll extends X {
    constructor(e) {
        super(), Y(this, e, il, ol, K, {})
    }
}

function al(t) {
    let e;
    return {
        c() {
            e = M("p"), e.textContent = "As fitas, que enchem de vida e cor os mais tradicionais trajes de São João, também viraram uma versão de latinha temática de Guaraná Jesus."
        },
        m(n, s) {
            S(n, e, s)
        },
        p: U,
        d(n) {
            n && k(e)
        }
    }
}

function cl(t) {
    let e, n, s, r, o, i, a, l, c, f, u, m, g, p, b, h, E, v, y;
    return n = new Pt({}), r = new nn({
        props: {
            title: "Seu Raimundo",
            subject: "fitas",
            article: "e as",
            image: "assets/img/thumbs/fitas.jpg",
            videoUrl: "https://customer-cr9gbt1wye0o1ab6.cloudflarestream.com/da20e8cd59f2aeee37d17c4f6472acb6/iframe",
            $$slots: {
                default: [al]
            },
            $$scope: {
                ctx: t
            }
        }
    }), i = new sn({
        props: {
            subject: "fitas",
            content: ["É na mão do Seu Raimundo Miguel, artesão cheio de amor e criatividade,", "que elas se unem em diferentes composições, criando um verdadeiro", "espetáculo visual das indumentárias juninas."]
        }
    }), l = new rn({
        props: {
            subject: "fitas",
            images: [{
                src: "assets/img/galeria/fitas04.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/fitas02.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/fitas03.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/fitas01.jpg",
                alt: ""
            }]
        }
    }), f = new ln({
        props: {
            subject: "as fitas",
            credits: "por Meireles Jr e Juliana Ribeiro"
        }
    }), m = new on({
        props: {
            subject: "fitas",
            images: [{
                src: "assets/img/fotos/fitas1.jpg",
                alt: "Meireles Jr"
            }, {
                src: "assets/img/fotos/fitas3.jpg",
                alt: "Juliana Ribeiro"
            }, {
                src: "assets/img/fotos/fitas2.jpg",
                alt: "Meireles Jr"
            }]
        }
    }), p = new an({
        props: {
            quote: "Me sinto muito orgulhoso e emocionado de ver as pessoas aplaudindo as indumentárias. Participar do São João do Maranhão é uma marca na minha vida.",
            author: "Raimundo Miguel"
        }
    }), h = new cn({}), v = new tn({}), {
        c() {
            e = O(), R(n.$$.fragment), s = O(), R(r.$$.fragment), o = O(), R(i.$$.fragment), a = O(), R(l.$$.fragment), c = O(), R(f.$$.fragment), u = O(), R(m.$$.fragment), g = O(), R(p.$$.fragment), b = O(), R(h.$$.fragment), E = O(), R(v.$$.fragment), document.title = "Seu Raimundo e as fitas - São João 2023 -  Guaraná Jesus"
        },
        m(d, _) {
            S(d, e, _), P(n, d, _), S(d, s, _), P(r, d, _), S(d, o, _), P(i, d, _), S(d, a, _), P(l, d, _), S(d, c, _), P(f, d, _), S(d, u, _), P(m, d, _), S(d, g, _), P(p, d, _), S(d, b, _), P(h, d, _), S(d, E, _), P(v, d, _), y = !0
        },
        p(d, [_]) {
            const T = {};
            _ & 1 && (T.$$scope = {
                dirty: _,
                ctx: d
            }), r.$set(T)
        },
        i(d) {
            y || (j(n.$$.fragment, d), j(r.$$.fragment, d), j(i.$$.fragment, d), j(l.$$.fragment, d), j(f.$$.fragment, d), j(m.$$.fragment, d), j(p.$$.fragment, d), j(h.$$.fragment, d), j(v.$$.fragment, d), y = !0)
        },
        o(d) {
            L(n.$$.fragment, d), L(r.$$.fragment, d), L(i.$$.fragment, d), L(l.$$.fragment, d), L(f.$$.fragment, d), L(m.$$.fragment, d), L(p.$$.fragment, d), L(h.$$.fragment, d), L(v.$$.fragment, d), y = !1
        },
        d(d) {
            d && k(e), C(n, d), d && k(s), C(r, d), d && k(o), C(i, d), d && k(a), C(l, d), d && k(c), C(f, d), d && k(u), C(m, d), d && k(g), C(p, d), d && k(b), C(h, d), d && k(E), C(v, d)
        }
    }
}

function ul(t) {
    return qe.set(!0), []
}
class fl extends X {
    constructor(e) {
        super(), Y(this, e, ul, cl, K, {})
    }
}

function Ss(t, e, n) {
    const s = t.slice();
    s[9] = e[n], s[13] = n;
    const r = s[13] + 1;
    s[10] = r;
    const o = s[3] === s[10] ? 1 : 0;
    return s[11] = o, s
}

function Es(t) {
    let e, n;
    return {
        c() {
            e = M("img"), pe(e.src, n = "/assets/img/ilustra/" + t[0] + "/" + t[10] + ".png") || $(e, "src", n), $(e, "alt", ""), he(e, "opacity", t[11])
        },
        m(s, r) {
            S(s, e, r)
        },
        p(s, r) {
            r & 1 && !pe(e.src, n = "/assets/img/ilustra/" + s[0] + "/" + s[10] + ".png") && $(e, "src", n), r & 8 && he(e, "opacity", s[11])
        },
        d(s) {
            s && k(e)
        }
    }
}

function dl(t) {
    let e, n, s, r, o, i, a, l, c, f = {
            length: t[2]
        },
        u = [];
    for (let m = 0; m < f.length; m += 1) u[m] = Es(Ss(t, f, m));
    return {
        c() {
            e = M("div"), n = M("div");
            for (let m = 0; m < u.length; m += 1) u[m].c();
            s = O(), r = M("img"), i = O(), a = M("div"), l = M("img"), pe(r.src, o = "/assets/img/ilustra/" + t[0] + "/12.png") || $(r, "src", o), $(r, "alt", ""), he(r, "z-index", "-1"), $(n, "class", "lata__foreground"), pe(l.src, c = t[1]) || $(l, "src", c), $(l, "alt", ""), $(a, "class", "lata__background"), he(a, "transform", "translate(0, " + t[4] + "%)"), $(e, "class", "lata")
        },
        m(m, g) {
            S(m, e, g), w(e, n);
            for (let p = 0; p < u.length; p += 1) u[p] && u[p].m(n, null);
            w(n, s), w(n, r), w(e, i), w(e, a), w(a, l)
        },
        p(m, [g]) {
            if (g & 13) {
                f = {
                    length: m[2]
                };
                let p;
                for (p = 0; p < f.length; p += 1) {
                    const b = Ss(m, f, p);
                    u[p] ? u[p].p(b, g) : (u[p] = Es(b), u[p].c(), u[p].m(n, s))
                }
                for (; p < u.length; p += 1) u[p].d(1);
                u.length = f.length
            }
            g & 1 && !pe(r.src, o = "/assets/img/ilustra/" + m[0] + "/12.png") && $(r, "src", o), g & 2 && !pe(l.src, c = m[1]) && $(l, "src", c), g & 16 && he(a, "transform", "translate(0, " + m[4] + "%)")
        },
        i: U,
        o: U,
        d(m) {
            m && k(e), gt(u, m)
        }
    }
}
const ml = 0,
    gl = 100;

function $n(t, e, n, s = !1) {
    return s ? t : Math.min(n, Math.max(e, t))
}

function pl(t, e, n) {
    let s, r, o, i, {
            apperance: a = "bordados"
        } = e,
        {
            progress: l = 50
        } = e,
        {
            background: c = ""
        } = e,
        {
            frameCount: f = 0
        } = e;
    const u = hr(r, {
        duration: 100
    });
    return ve(t, u, m => n(4, i = m)), t.$$set = m => {
        "apperance" in m && n(0, a = m.apperance), "progress" in m && n(6, l = m.progress), "background" in m && n(1, c = m.background), "frameCount" in m && n(2, f = m.frameCount)
    }, t.$$.update = () => {
        t.$$.dirty & 64 && n(8, s = $n(l, ml, gl)), t.$$.dirty & 256 && n(7, r = $n(_r([
            [100],
            [-100],
            [100]
        ])(s / 100)[0], 0, 100)), t.$$.dirty & 260 && n(3, o = $n(Math.floor(Oe([0, 100], [1, f])(s)), 1, f)), t.$$.dirty & 128 && u.update(m => r)
    }, [a, c, f, o, i, u, l, r, s]
}
class _l extends X {
    constructor(e) {
        super(), Y(this, e, pl, dl, K, {
            apperance: 0,
            progress: 6,
            background: 1,
            frameCount: 2
        })
    }
}

function Ms(t, e, n) {
    const s = t.slice();
    s[4] = e[n], s[10] = n;
    const r = (s[10] + 1) * 100;
    s[5] = r;
    const o = (s[10] + 1) * 100;
    s[6] = o;
    const i = Math.abs(s[10] - s[3].length);
    s[7] = i;
    const a = s[2] ? s[4].range(s[1]) / 100 * 2 : null;
    return s[8] = a, s
}

function js(t) {
    let e, n;
    return e = new _l({
        props: {
            apperance: t[4].title.toLowerCase(),
            background: t[4].img,
            frameCount: 24,
            progress: t[4].range(t[1])
        }
    }), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        p(s, r) {
            const o = {};
            r & 2 && (o.progress = s[4].range(s[1])), e.$set(o)
        },
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function hl(t) {
    let e, n = t[4].title + "",
        s, r, o, i, a = t[4].nome + "",
        l, c, f, u, m = t[4].artigo + "",
        g, p, b, h = t[4].title + "",
        E, v, y, d, _, T, I, B, N = t[2] && js(t);
    return {
        c() {
            e = M("span"), s = re(n), r = O(), o = M("h2"), i = M("strong"), l = re(a), c = O(), f = M("small"), u = re("e "), g = re(m), p = O(), b = M("em"), E = re(h), v = O(), y = M("div"), d = M("img"), T = O(), N && N.c(), I = Ne(), $(e, "class", "home__label"), $(o, "class", "home__nome"), he(o, "opacity", t[8]), pe(d.src, _ = t[4].img) || $(d, "src", _), $(d, "alt", t[4].title), $(d, "class", "home__img"), $(y, "class", "home__ilustra")
        },
        m(F, q) {
            S(F, e, q), w(e, s), S(F, r, q), S(F, o, q), w(o, i), w(i, l), w(o, c), w(o, f), w(f, u), w(f, g), w(o, p), w(o, b), w(b, E), S(F, v, q), S(F, y, q), w(y, d), S(F, T, q), N && N.m(F, q), S(F, I, q), B = !0
        },
        p(F, q) {
            q & 6 && he(o, "opacity", F[8]), F[2] ? N ? (N.p(F, q), q & 4 && j(N, 1)) : (N = js(F), N.c(), j(N, 1), N.m(I.parentNode, I)) : N && (Ze(), L(N, 1, 1, () => {
                N = null
            }), et())
        },
        i(F) {
            B || (j(N), B = !0)
        },
        o(F) {
            L(N), B = !1
        },
        d(F) {
            F && k(e), F && k(r), F && k(o), F && k(v), F && k(y), F && k(T), N && N.d(F), F && k(I)
        }
    }
}

function Is(t) {
    let e, n, s, r, o, i;
    return n = new _t({
        props: {
            to: t[4].link,
            class: "home__link",
            style: "z-index: " + t[7] + ";",
            $$slots: {
                default: [hl]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            e = M("li"), R(n.$$.fragment), s = O(), $(e, "class", t[0])
        },
        m(a, l) {
            S(a, e, l), P(n, e, null), w(e, s), i = !0
        },
        p(a, l) {
            const c = {};
            l & 2054 && (c.$$scope = {
                dirty: l,
                ctx: a
            }), n.$set(c), (!i || l & 1) && $(e, "class", a[0])
        },
        i(a) {
            i || (j(n.$$.fragment, a), ce(() => {
                i && (o && o.end(1), r = Fe(e, Je, {
                    y: 500,
                    delay: t[5],
                    duration: t[6]
                }), r.start())
            }), i = !0)
        },
        o(a) {
            L(n.$$.fragment, a), r && r.invalidate(), o = Us(e, Je, {
                y: 500,
                delay: t[5],
                duration: t[6]
            }), i = !1
        },
        d(a) {
            a && k(e), C(n), a && o && o.end()
        }
    }
}

function bl(t) {
    let e, n, s = t[3],
        r = [];
    for (let i = 0; i < s.length; i += 1) r[i] = Is(Ms(t, s, i));
    const o = i => L(r[i], 1, 1, () => {
        r[i] = null
    });
    return {
        c() {
            for (let i = 0; i < r.length; i += 1) r[i].c();
            e = Ne()
        },
        m(i, a) {
            for (let l = 0; l < r.length; l += 1) r[l] && r[l].m(i, a);
            S(i, e, a), n = !0
        },
        p(i, [a]) {
            if (a & 15) {
                s = i[3];
                let l;
                for (l = 0; l < s.length; l += 1) {
                    const c = Ms(i, s, l);
                    r[l] ? (r[l].p(c, a), j(r[l], 1)) : (r[l] = Is(c), r[l].c(), j(r[l], 1), r[l].m(e.parentNode, e))
                }
                for (Ze(), l = s.length; l < r.length; l += 1) o(l);
                et()
            }
        },
        i(i) {
            if (!n) {
                for (let a = 0; a < s.length; a += 1) j(r[a]);
                n = !0
            }
        },
        o(i) {
            r = r.filter(Boolean);
            for (let a = 0; a < r.length; a += 1) L(r[a]);
            n = !1
        },
        d(i) {
            gt(r, i), i && k(e)
        }
    }
}

function yl(t, e, n) {
    let s, {
            className: r = "home__item"
        } = e,
        {
            progress: o = -1
        } = e;
    const i = [{
        link: "/penas",
        title: "Penas",
        img: "/assets/img/ilustra/Penas.webp",
        artigo: "as",
        nome: "vanessa",
        range: Oe([0, 33], [50, 100])
    }, {
        link: "/bordado",
        title: "Bordados",
        img: "/assets/img/ilustra/Bordados.webp",
        artigo: "os",
        nome: "mariana",
        range: Oe([0, 66], [0, 100])
    }, {
        link: "/chita",
        title: "Chita",
        img: "/assets/img/ilustra/Chita.webp",
        artigo: "a",
        nome: "Dona Lucília",
        range: Oe([33, 100], [0, 100])
    }, {
        link: "/fitas",
        title: "Fitas",
        img: "/assets/img/ilustra/Fitas.webp",
        artigo: "as",
        nome: "Seu raimundo",
        range: Oe([66, 100], [0, 50])
    }];
    return t.$$set = a => {
        "className" in a && n(0, r = a.className), "progress" in a && n(1, o = a.progress)
    }, t.$$.update = () => {
        t.$$.dirty & 2 && n(2, s = o !== -1)
    }, [r, o, s, i]
}
class wr extends X {
    constructor(e) {
        super(), Y(this, e, yl, bl, K, {
            className: 0,
            progress: 1
        })
    }
}

function $l(t) {
    let e, n, s, r, o, i, a, l;
    return a = new wr({}), {
        c() {
            e = M("main"), n = M("div"), n.innerHTML = '<h2 class="home__title">Conheça histórias de Artesãos</h2>', r = O(), o = M("nav"), i = M("ul"), R(a.$$.fragment), $(n, "class", "home__container"), $(i, "class", "home__list"), $(o, "class", "home__nav"), $(e, "class", "home")
        },
        m(c, f) {
            S(c, e, f), w(e, n), w(e, r), w(e, o), w(o, i), P(a, i, null), l = !0
        },
        p: U,
        i(c) {
            l || (ce(() => {
                l && (s || (s = Gt(n, dt, {
                    delay: 200,
                    duration: 300
                }, !0)), s.run(1))
            }), j(a.$$.fragment, c), l = !0)
        },
        o(c) {
            s || (s = Gt(n, dt, {
                delay: 200,
                duration: 300
            }, !1)), s.run(0), L(a.$$.fragment, c), l = !1
        },
        d(c) {
            c && k(e), c && s && s.end(), C(a)
        }
    }
}
class vl extends X {
    constructor(e) {
        super(), Y(this, e, null, $l, K, {})
    }
}

function wl(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function Ls(t) {
    return wl(t) || Array.isArray(t)
}

function kl() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}

function Un(t, e) {
    const n = Object.keys(t),
        s = Object.keys(e);
    if (n.length !== s.length) return !1;
    const r = JSON.stringify(Object.keys(t.breakpoints || {})),
        o = JSON.stringify(Object.keys(e.breakpoints || {}));
    return r !== o ? !1 : n.every(i => {
        const a = t[i],
            l = e[i];
        return typeof a == "function" ? `${a}` == `${l}` : !Ls(a) || !Ls(l) ? a === l : Un(a, l)
    })
}

function Os(t) {
    return t.concat().sort((e, n) => e.name > n.name ? 1 : -1).map(e => e.options)
}

function Sl(t, e) {
    if (t.length !== e.length) return !1;
    const n = Os(t),
        s = Os(e);
    return n.every((r, o) => {
        const i = s[o];
        return Un(r, i)
    })
}

function zn(t) {
    return typeof t == "number"
}

function Ps(t) {
    return typeof t == "string"
}

function qn(t) {
    return typeof t == "boolean"
}

function Cs(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function oe(t) {
    return Math.abs(t)
}

function Vn(t) {
    return Math.sign(t)
}

function Ft(t, e) {
    return oe(t - e)
}

function El(t, e) {
    if (t === 0 || e === 0 || oe(t) <= oe(e)) return 0;
    const n = Ft(oe(t), oe(e));
    return oe(n / t)
}

function kt(t) {
    return Yt(t).map(Number)
}

function Ce(t) {
    return t[un(t)]
}

function un(t) {
    return Math.max(0, t.length - 1)
}

function Yt(t) {
    return Object.keys(t)
}

function kr(t, e) {
    return [t, e].reduce((n, s) => (Yt(s).forEach(r => {
        const o = n[r],
            i = s[r],
            a = Cs(o) && Cs(i);
        n[r] = a ? kr(o, i) : i
    }), n), {})
}

function Sr(t, e) {
    return typeof e.MouseEvent < "u" && t instanceof e.MouseEvent
}

function Ml(t, e) {
    const n = {
        start: s,
        center: r,
        end: o
    };

    function s() {
        return 0
    }

    function r(c) {
        return o(c) / 2
    }

    function o(c) {
        return e - c
    }

    function i() {
        return e * Number(t)
    }

    function a(c) {
        return zn(t) ? i() : n[t](c)
    }
    return {
        measure: a
    }
}

function jl(t, e) {
    const n = t === "y" ? "y" : "x",
        s = t === "y" ? "x" : "y",
        r = a(),
        o = l();

    function i(f) {
        const {
            width: u,
            height: m
        } = f;
        return n === "x" ? u : m
    }

    function a() {
        return n === "y" ? "top" : e === "rtl" ? "right" : "left"
    }

    function l() {
        return n === "y" ? "bottom" : e === "rtl" ? "left" : "right"
    }
    return {
        scroll: n,
        cross: s,
        startEdge: r,
        endEdge: o,
        measureSize: i
    }
}

function De(t, e) {
    const n = oe(t - e);

    function s(c) {
        return c < t
    }

    function r(c) {
        return c > e
    }

    function o(c) {
        return s(c) || r(c)
    }

    function i(c) {
        return o(c) ? s(c) ? t : e : c
    }

    function a(c) {
        return n ? c - n * Math.ceil((c - e) / n) : c
    }
    return {
        length: n,
        max: e,
        min: t,
        constrain: i,
        reachedAny: o,
        reachedMax: r,
        reachedMin: s,
        removeOffset: a
    }
}

function Er(t, e, n) {
    const {
        constrain: s
    } = De(0, t), r = t + 1;
    let o = i(e);

    function i(m) {
        return n ? oe((r + m) % r) : s(m)
    }

    function a() {
        return o
    }

    function l(m) {
        return o = i(m), u
    }

    function c(m) {
        return f().set(a() + m)
    }

    function f() {
        return Er(t, a(), n)
    }
    const u = {
        get: a,
        set: l,
        add: c,
        clone: f
    };
    return u
}

function Il(t) {
    const e = t === "rtl" ? -1 : 1;

    function n(r) {
        return r * e
    }
    return {
        apply: n
    }
}

function St() {
    let t = [];

    function e(r, o, i, a = {
        passive: !0
    }) {
        return r.addEventListener(o, i, a), t.push(() => r.removeEventListener(o, i, a)), s
    }

    function n() {
        t = t.filter(r => r())
    }
    const s = {
        add: e,
        clear: n
    };
    return s
}

function Ll(t, e, n, s, r, o, i, a, l, c, f, u, m, g, p, b, h, E, v) {
    const {
        cross: y
    } = t, d = ["INPUT", "SELECT", "TEXTAREA"], _ = {
        passive: !1
    }, T = St(), I = St(), B = De(50, 225).constrain(p.measure(20)), N = {
        mouse: 300,
        touch: 400
    }, F = {
        mouse: 500,
        touch: 600
    }, q = b ? 43 : 25;
    let z = !1,
        Z = 0,
        ee = 0,
        te = !1,
        le = !1,
        ne = !1,
        H = !1;

    function ie(D, J) {
        if (!J) return;

        function x(me) {
            (qn(J) || J(D, me)) && ke(me)
        }
        const G = n;
        T.add(G, "dragstart", me => me.preventDefault(), _).add(G, "touchmove", () => {}, _).add(G, "touchend", () => {}).add(G, "touchstart", x).add(G, "mousedown", x).add(G, "touchcancel", ge).add(G, "contextmenu", ge).add(G, "click", $e, !0)
    }

    function ae() {
        T.clear(), I.clear()
    }

    function A() {
        const D = H ? s : n;
        I.add(D, "touchmove", fe, _).add(D, "touchend", ge).add(D, "mousemove", fe, _).add(D, "mouseup", ge)
    }

    function W(D) {
        const J = D.nodeName || "";
        return d.includes(J)
    }

    function se() {
        return (b ? F : N)[H ? "mouse" : "touch"]
    }

    function Q(D, J) {
        const x = m.add(Vn(D) * -1),
            G = u.byDistance(D, !b).distance;
        return b || oe(D) < B ? G : E && J ? G * .5 : u.byIndex(x.get(), 0).distance
    }

    function ke(D) {
        const J = Sr(D, r);
        H = J, !(J && D.button !== 0) && (W(D.target) || (ne = b && J && !D.buttons && z, z = Ft(o.get(), a.get()) >= 2, te = !0, i.pointerDown(D), f.useFriction(0).useDuration(0), o.set(a), A(), Z = i.readPoint(D), ee = i.readPoint(D, y), g.emit("pointerDown")))
    }

    function fe(D) {
        const J = i.readPoint(D),
            x = i.readPoint(D, y),
            G = Ft(J, Z),
            me = Ft(x, ee);
        if (!le && !H && (!D.cancelable || (le = G > me, !le))) return ge(D);
        const _e = i.pointerMove(D);
        G > h && (ne = !0), f.useFriction(.3).useDuration(1), l.start(), o.add(e.apply(_e)), D.preventDefault()
    }

    function ge(D) {
        const x = u.byDistance(0, !1).index !== m.get(),
            G = i.pointerUp(D) * se(),
            me = Q(e.apply(G), x),
            _e = El(G, me),
            Ie = q - 10 * _e,
            nt = v + _e / 50;
        le = !1, te = !1, I.clear(), f.useDuration(Ie).useFriction(nt), c.distance(me, !b), H = !1, g.emit("pointerUp")
    }

    function $e(D) {
        ne && (D.stopPropagation(), D.preventDefault())
    }

    function de() {
        return te
    }
    return {
        init: ie,
        pointerDown: de,
        destroy: ae
    }
}

function Ol(t, e) {
    let s, r;

    function o(u) {
        return u.timeStamp
    }

    function i(u, m) {
        const p = `client${(m||t.scroll)==="x"?"X":"Y"}`;
        return (Sr(u, e) ? u : u.touches[0])[p]
    }

    function a(u) {
        return s = u, r = u, i(u)
    }

    function l(u) {
        const m = i(u) - i(r),
            g = o(u) - o(s) > 170;
        return r = u, g && (s = u), m
    }

    function c(u) {
        if (!s || !r) return 0;
        const m = i(r) - i(s),
            g = o(u) - o(s),
            p = o(u) - o(r) > 170,
            b = m / g;
        return g && !p && oe(b) > .1 ? b : 0
    }
    return {
        pointerDown: a,
        pointerMove: l,
        pointerUp: c,
        readPoint: i
    }
}

function Pl(t) {
    function e(s) {
        return t * (s / 100)
    }
    return {
        measure: e
    }
}

function Cl(t, e, n, s) {
    let r, o, i = [],
        a = !1;

    function l(m) {
        return n.measureSize(m.getBoundingClientRect())
    }

    function c(m, g) {
        if (!g) return;
        o = l(t), i = e.map(l);

        function p(h) {
            for (const E of h) {
                const v = E.target === t,
                    y = e.indexOf(E.target),
                    d = v ? o : i[y],
                    _ = l(v ? t : e[y]);
                if (d !== _) {
                    m.reInit(), s.emit("resize");
                    break
                }
            }
        }
        r = new ResizeObserver(h => {
            a || (qn(g) || g(m, h)) && p(h)
        }), [t].concat(e).forEach(h => r.observe(h))
    }

    function f() {
        r && r.disconnect(), a = !0
    }
    return {
        init: c,
        destroy: f
    }
}

function Rl(t, e, n, s) {
    let r = !0,
        o = 0,
        i = 0,
        a = n,
        l = s;

    function c() {
        const v = e.get() - t.get();
        return !l || !a ? (o = 0, t.set(e)) : (o += v / a, o *= l, t.add(o)), i = Vn(o || v), r = oe(v) < .001, E
    }

    function f() {
        return r && t.set(e), r
    }

    function u() {
        return o
    }

    function m() {
        return i
    }

    function g() {
        return b(n)
    }

    function p() {
        return h(s)
    }

    function b(v) {
        return a = v, E
    }

    function h(v) {
        return l = v, E
    }
    const E = {
        direction: m,
        seek: c,
        settled: f,
        useBaseFriction: p,
        useBaseDuration: g,
        useFriction: h,
        useDuration: b,
        velocity: u
    };
    return E
}

function Tl(t, e, n, s, r) {
    const o = r.measure(10),
        i = r.measure(50),
        a = De(.1, .99);
    let l = !1;

    function c() {
        return !(l || !t.reachedAny(n.get()) || !t.reachedAny(e.get()))
    }

    function f(g) {
        if (!c()) return;
        const p = t.reachedMin(e.get()) ? "min" : "max",
            b = oe(t[p] - e.get()),
            h = n.get() - e.get(),
            E = a.constrain(b / i);
        n.subtract(h * E), !g && oe(h) < o && (n.set(t.constrain(n.get())), s.useDuration(25).useBaseFriction())
    }

    function u(g) {
        l = !g
    }
    return {
        constrain: f,
        toggleActive: u
    }
}

function Al(t, e, n, s) {
    const r = De(-e + t, n[0]),
        o = l(),
        i = c();

    function a() {
        const u = o[0],
            m = Ce(o),
            g = o.lastIndexOf(u),
            p = o.indexOf(m) + 1;
        return De(g, p)
    }

    function l() {
        return n.map(r.constrain).map(u => parseFloat(u.toFixed(3)))
    }

    function c() {
        if (e <= t) return [r.max];
        if (s === "keepSnaps") return o;
        const {
            min: u,
            max: m
        } = a();
        return o.slice(u, m)
    }
    return {
        snapsContained: i
    }
}

function Dl(t, e, n) {
    const s = e[0],
        r = n ? s - t : Ce(e);
    return {
        limit: De(r, s)
    }
}

function Nl(t, e, n, s) {
    const o = e.min + .1,
        i = e.max + .1,
        {
            reachedMin: a,
            reachedMax: l
        } = De(o, i);

    function c(m) {
        return m === 1 ? l(n.get()) : m === -1 ? a(n.get()) : !1
    }

    function f(m) {
        if (!c(m)) return;
        const g = t * (m * -1);
        s.forEach(p => p.add(g))
    }
    return {
        loop: f
    }
}

function Hl(t) {
    const {
        max: e,
        length: n
    } = t;

    function s(o) {
        return (o - e) / -n
    }
    return {
        get: s
    }
}

function Bl(t, e, n, s, r, o, i) {
    const {
        startEdge: a,
        endEdge: l
    } = t, {
        groupSlides: c
    } = o, f = g().map(e.measure), u = p(), m = b();

    function g() {
        return c(s).map(E => Ce(E)[l] - E[0][a]).map(oe)
    }

    function p() {
        return s.map(E => n[a] - E[a]).map(E => -oe(E))
    }

    function b() {
        const v = Ce(u) - Ce(r);
        return c(u).map(y => y[0]).map((y, d, _) => {
            const T = !d,
                I = d === un(_);
            return i && T ? 0 : i && I ? v : y + f[d]
        })
    }
    return {
        snaps: u,
        snapsAligned: m
    }
}

function Fl(t, e, n, s, r) {
    const {
        reachedAny: o,
        removeOffset: i,
        constrain: a
    } = s;

    function l(p) {
        return p.concat().sort((b, h) => oe(b) - oe(h))[0]
    }

    function c(p) {
        const b = t ? i(p) : a(p),
            h = e.map(v => v - b).map(v => f(v, 0)).map((v, y) => ({
                diff: v,
                index: y
            })).sort((v, y) => oe(v.diff) - oe(y.diff)),
            {
                index: E
            } = h[0];
        return {
            index: E,
            distance: b
        }
    }

    function f(p, b) {
        const h = [p, p + n, p - n];
        if (!t) return h[0];
        if (!b) return l(h);
        const E = h.filter(v => Vn(v) === b);
        return l(E)
    }

    function u(p, b) {
        const h = e[p] - r.get(),
            E = f(h, b);
        return {
            index: p,
            distance: E
        }
    }

    function m(p, b) {
        const h = r.get() + p,
            {
                index: E,
                distance: v
            } = c(h),
            y = !t && o(h);
        if (!b || y) return {
            index: E,
            distance: p
        };
        const d = e[E] - v,
            _ = p + f(d, 0);
        return {
            index: E,
            distance: _
        }
    }
    return {
        byDistance: m,
        byIndex: u,
        shortcut: f
    }
}

function Jl(t, e, n, s, r, o) {
    function i(f) {
        const u = f.distance,
            m = f.index !== e.get();
        u && (t.start(), r.add(u)), m && (n.set(e.get()), e.set(f.index), o.emit("select"))
    }

    function a(f, u) {
        const m = s.byDistance(f, u);
        i(m)
    }

    function l(f, u) {
        const m = e.clone().set(f),
            g = s.byIndex(m.get(), u);
        i(g)
    }
    return {
        distance: a,
        index: l
    }
}

function Ln(t) {
    let e = t;

    function n() {
        return e
    }

    function s(l) {
        e = i(l)
    }

    function r(l) {
        e += i(l)
    }

    function o(l) {
        e -= i(l)
    }

    function i(l) {
        return zn(l) ? l : l.get()
    }
    return {
        get: n,
        set: s,
        add: r,
        subtract: o
    }
}

function Mr(t, e, n) {
    const s = t.scroll === "x" ? i : a,
        r = n.style;
    let o = !1;

    function i(m) {
        return `translate3d(${m}px,0px,0px)`
    }

    function a(m) {
        return `translate3d(0px,${m}px,0px)`
    }

    function l(m) {
        o || (r.transform = s(e.apply(m)))
    }

    function c(m) {
        o = !m
    }

    function f() {
        o || (r.transform = "", n.getAttribute("style") || n.removeAttribute("style"))
    }
    return {
        clear: f,
        to: l,
        toggleActive: c
    }
}

function Ul(t, e, n, s, r, o, i, a, l) {
    const c = kt(r),
        f = kt(r).reverse(),
        u = b().concat(h());

    function m(_, T) {
        return _.reduce((I, B) => I - r[B], T)
    }

    function g(_, T) {
        return _.reduce((I, B) => m(I, T) > 0 ? I.concat([B]) : I, [])
    }

    function p(_, T) {
        const I = T === "start",
            B = I ? -s : s,
            N = i.findSlideBounds([B]);
        return _.map(F => {
            const q = I ? 0 : -s,
                z = I ? s : 0,
                ee = N.filter(H => H.index === F)[0][I ? "end" : "start"],
                te = Ln(-1),
                le = Mr(t, e, l[F]);
            return {
                index: F,
                location: te,
                translate: le,
                target: () => a.get() > ee ? q : z
            }
        })
    }

    function b() {
        const _ = o[0] - 1,
            T = g(f, _);
        return p(T, "end")
    }

    function h() {
        const _ = n - o[0] - 1,
            T = g(c, _);
        return p(T, "start")
    }

    function E() {
        return u.every(({
            index: _
        }) => {
            const T = c.filter(I => I !== _);
            return m(T, n) <= .1
        })
    }

    function v() {
        u.forEach(_ => {
            const {
                target: T,
                translate: I,
                location: B
            } = _, N = T();
            N !== B.get() && (I.to(N), B.set(N))
        })
    }

    function y() {
        u.forEach(_ => _.translate.clear())
    }
    return {
        canLoop: E,
        clear: y,
        loop: v,
        loopPoints: u
    }
}

function zl(t, e) {
    let n, s = !1;

    function r(a, l) {
        if (!l) return;

        function c(f) {
            for (const u of f)
                if (u.type === "childList") {
                    a.reInit(), e.emit("slidesChanged");
                    break
                }
        }
        n = new MutationObserver(f => {
            s || (qn(l) || l(a, f)) && c(f)
        }), n.observe(t, {
            childList: !0
        })
    }

    function o() {
        n && n.disconnect(), s = !0
    }
    return {
        init: r,
        destroy: o
    }
}

function ql(t, e, n, s, r, o, i) {
    const {
        removeOffset: a,
        constrain: l
    } = r, c = .5, f = o ? [0, e, -e] : [0], u = g(f, i);

    function m(h) {
        const E = h || 0;
        return n.map(v => De(c, v - c).constrain(v * E))
    }

    function g(h, E) {
        const v = h || f,
            y = m(E);
        return v.reduce((d, _) => {
            const T = s.map((I, B) => ({
                start: I - n[B] + y[B] + _,
                end: I + t - y[B] + _,
                index: B
            }));
            return d.concat(T)
        }, [])
    }

    function p(h, E) {
        const v = o ? a(h) : l(h);
        return (E || u).reduce((d, _) => {
            const {
                index: T,
                start: I,
                end: B
            } = _, N = d.includes(T), F = I < v && B > v;
            return !N && F ? d.concat([T]) : d
        }, [])
    }
    return {
        check: p,
        findSlideBounds: g
    }
}

function Vl(t, e, n, s, r, o) {
    const {
        measureSize: i,
        startEdge: a,
        endEdge: l
    } = t, c = n[0] && r, f = p(), u = b(), m = n.map(i), g = h();

    function p() {
        if (!c) return 0;
        const v = n[0];
        return oe(e[a] - v[a])
    }

    function b() {
        if (!c) return 0;
        const v = o.getComputedStyle(Ce(s));
        return parseFloat(v.getPropertyValue(`margin-${l}`))
    }

    function h() {
        return n.map((v, y, d) => {
            const _ = !y,
                T = y === un(d);
            return _ ? m[y] + f : T ? m[y] + u : d[y + 1][a] - v[a]
        }).map(oe)
    }
    return {
        slideSizes: m,
        slideSizesWithGaps: g
    }
}

function Gl(t, e, n) {
    const s = zn(n);

    function r(l, c) {
        return kt(l).filter(f => f % c === 0).map(f => l.slice(f, f + c))
    }

    function o(l) {
        return kt(l).reduce((c, f) => {
            const m = e.slice(Ce(c), f + 1).reduce((g, p) => g + p, 0);
            return !f || m > t ? c.concat(f) : c
        }, []).map((c, f, u) => l.slice(c, u[f + 1]))
    }

    function i(l) {
        return s ? r(l, n) : o(l)
    }
    return {
        groupSlides: i
    }
}

function Kl(t, e, n, s, r, o, i, a) {
    const {
        align: l,
        axis: c,
        direction: f,
        startIndex: u,
        inViewThreshold: m,
        loop: g,
        duration: p,
        dragFree: b,
        dragThreshold: h,
        slidesToScroll: E,
        skipSnaps: v,
        containScroll: y
    } = o, d = e.getBoundingClientRect(), _ = n.map(Ie => Ie.getBoundingClientRect()), T = Il(f), I = jl(c, f), B = I.measureSize(d), N = Pl(B), F = Ml(l, B), q = !g && !!y, z = g || !!y, {
        slideSizes: Z,
        slideSizesWithGaps: ee
    } = Vl(I, d, _, n, z, r), te = Gl(B, ee, E), {
        snaps: le,
        snapsAligned: ne
    } = Bl(I, F, d, _, ee, te, q), H = -Ce(le) + Ce(ee), {
        snapsContained: ie
    } = Al(B, H, ne, y), ae = q ? ie : ne, {
        limit: A
    } = Dl(H, ae, g), W = Er(un(ae), u, g), se = W.clone(), Q = kt(n), ke = ({
        dragHandler: Ie,
        scrollBody: nt,
        scrollBounds: fn,
        scrollLooper: dn,
        slideLooper: Ct,
        eventHandler: Rt,
        animation: Ir,
        options: {
            loop: xn
        }
    }) => {
        const Yn = Ie.pointerDown();
        xn || fn.constrain(Yn);
        const Xn = nt.seek().settled();
        Xn && !Yn && (Ir.stop(), Rt.emit("settle")), Xn || Rt.emit("scroll"), xn && (dn.loop(nt.direction()), Ct.loop())
    }, fe = ({
        scrollBody: Ie,
        translate: nt,
        location: fn
    }, dn) => {
        const Ct = Ie.velocity(),
            Rt = fn.get() - Ct + Ct * dn;
        nt.to(Rt)
    }, ge = {
        update: () => ke(_e),
        render: Ie => fe(_e, Ie),
        start: () => a.start(_e),
        stop: () => a.stop(_e)
    }, $e = .68, de = ae[W.get()], V = Ln(de), D = Ln(de), J = Rl(V, D, p, $e), x = Fl(g, ae, H, A, D), G = Jl(ge, W, se, x, D, i), me = ql(B, H, Z, le, A, g, m), _e = {
        ownerDocument: s,
        ownerWindow: r,
        eventHandler: i,
        containerRect: d,
        slideRects: _,
        animation: ge,
        axis: I,
        direction: T,
        dragHandler: Ll(I, T, t, s, r, D, Ol(I, r), V, ge, G, J, x, W, i, N, b, h, v, $e),
        eventStore: St(),
        percentOfView: N,
        index: W,
        indexPrevious: se,
        limit: A,
        location: V,
        options: o,
        resizeHandler: Cl(e, n, I, i),
        scrollBody: J,
        scrollBounds: Tl(A, V, D, J, N),
        scrollLooper: Nl(H, A, V, [V, D]),
        scrollProgress: Hl(A),
        scrollSnaps: ae,
        scrollTarget: x,
        scrollTo: G,
        slideLooper: Ul(I, T, B, H, ee, ae, me, V, n),
        slidesHandler: zl(e, i),
        slidesInView: me,
        slideIndexes: Q,
        slidesToScroll: te,
        target: D,
        translate: Mr(I, T, e)
    };
    return _e
}

function xl(t) {
    const e = 16.666666666666668;
    let n = [],
        s = null,
        r = 0,
        o = 0;

    function i(u) {
        s || (s = u);
        const m = u - s;
        for (s = u, r += m; r >= e;) n.forEach(({
            animation: p
        }) => p.update()), r -= e;
        const g = oe(r / e);
        n.forEach(({
            animation: p
        }) => p.render(g)), o && t.requestAnimationFrame(i)
    }

    function a(u) {
        n.includes(u) || n.push(u), !o && (o = t.requestAnimationFrame(i))
    }

    function l(u) {
        n = n.filter(m => m !== u), !n.length && (t.cancelAnimationFrame(o), s = null, r = 0, o = 0)
    }

    function c() {
        s = null, r = 0
    }
    return {
        start: a,
        stop: l,
        reset: c,
        window: t
    }
}

function Yl() {
    const t = {};
    let e;

    function n(l) {
        e = l
    }

    function s(l) {
        return t[l] || []
    }

    function r(l) {
        return s(l).forEach(c => c(e, l)), a
    }

    function o(l, c) {
        return t[l] = s(l).concat([c]), a
    }

    function i(l, c) {
        return t[l] = s(l).filter(f => f !== c), a
    }
    const a = {
        init: n,
        emit: r,
        off: i,
        on: o
    };
    return a
}
const Xl = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: null,
    direction: "ltr",
    slidesToScroll: 1,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    inViewThreshold: 0,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0
};

function Ql(t) {
    function e(o, i) {
        return kr(o, i || {})
    }

    function n(o) {
        const i = o.breakpoints || {},
            a = Yt(i).filter(l => t.matchMedia(l).matches).map(l => i[l]).reduce((l, c) => e(l, c), {});
        return e(o, a)
    }

    function s(o) {
        return o.map(i => Yt(i.breakpoints || {})).reduce((i, a) => i.concat(a), []).map(t.matchMedia)
    }
    return {
        mergeOptions: e,
        optionsAtMedia: n,
        optionsMediaQueries: s
    }
}

function Wl(t) {
    let e = [];

    function n(o, i) {
        return e = o.filter(({
            options: a
        }) => t.optionsAtMedia(a).active !== !1), e.forEach(a => a.init(i, t)), o.reduce((a, l) => Object.assign(a, {
            [l.name]: l
        }), {})
    }

    function s() {
        e = e.filter(o => o.destroy())
    }
    return {
        init: n,
        destroy: s
    }
}

function mt(t, e, n) {
    const s = t.ownerDocument,
        r = s.defaultView,
        o = Ql(r),
        i = Wl(o),
        a = St(),
        l = St(),
        c = Yl(),
        {
            animationRealms: f
        } = mt,
        {
            mergeOptions: u,
            optionsAtMedia: m,
            optionsMediaQueries: g
        } = o,
        {
            on: p,
            off: b,
            emit: h
        } = c,
        E = z;
    let v = !1,
        y, d = u(Xl, mt.globalOptions),
        _ = u(d),
        T = [],
        I, B, N;

    function F() {
        const {
            container: J,
            slides: x
        } = _;
        B = (Ps(J) ? t.querySelector(J) : J) || t.children[0];
        const me = Ps(x) ? B.querySelectorAll(x) : x;
        N = [].slice.call(me || B.children)
    }

    function q(J, x) {
        if (v) return;
        const G = f.find(_e => _e.window === r),
            me = G || xl(r);
        if (G || f.push(me), d = u(d, J), _ = m(d), F(), y = Kl(t, B, N, s, r, _, c, me), !_.active) return Z();
        if (y.translate.to(y.location.get()), T = x || T, I = i.init(T, D), g([d, ...T.map(({
                options: _e
            }) => _e)]).forEach(_e => a.add(_e, "change", z)), y.eventHandler.init(D), y.resizeHandler.init(D, _.watchResize), y.slidesHandler.init(D, _.watchSlides), l.add(s, "visibilitychange", () => {
                s.hidden && me.reset()
            }), _.loop) {
            if (!y.slideLooper.canLoop()) {
                Z(), q({
                    loop: !1
                }, x), d = u(d, {
                    loop: !0
                });
                return
            }
            y.slideLooper.loop()
        }
        B.offsetParent && N.length && y.dragHandler.init(D, _.watchDrag)
    }

    function z(J, x) {
        const G = Q();
        Z(), q(u({
            startIndex: G
        }, J), x), c.emit("reInit")
    }

    function Z() {
        y.dragHandler.destroy(), y.animation.stop(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), i.destroy(), a.clear(), l.clear()
    }

    function ee() {
        v || (v = !0, a.clear(), Z(), c.emit("destroy"))
    }

    function te(J) {
        const x = y[J ? "target" : "location"].get(),
            G = _.loop ? "removeOffset" : "constrain";
        return y.slidesInView.check(y.limit[G](x))
    }

    function le(J) {
        const x = te(J);
        return y.slideIndexes.filter(G => !x.includes(G))
    }

    function ne(J, x, G) {
        !_.active || v || (y.scrollBody.useBaseFriction().useDuration(x ? 0 : _.duration), y.scrollTo.index(J, G || 0))
    }

    function H(J) {
        const x = y.index.add(1).get();
        ne(x, J === !0, -1)
    }

    function ie(J) {
        const x = y.index.add(-1).get();
        ne(x, J === !0, 1)
    }

    function ae() {
        return y.index.add(1).get() !== Q()
    }

    function A() {
        return y.index.add(-1).get() !== Q()
    }

    function W() {
        return y.scrollSnaps.map(y.scrollProgress.get)
    }

    function se() {
        return y.scrollProgress.get(y.location.get())
    }

    function Q() {
        return y.index.get()
    }

    function ke() {
        return y.indexPrevious.get()
    }

    function fe() {
        return I
    }

    function ge() {
        return y
    }

    function $e() {
        return t
    }

    function de() {
        return B
    }

    function V() {
        return N
    }
    const D = {
        canScrollNext: ae,
        canScrollPrev: A,
        containerNode: de,
        internalEngine: ge,
        destroy: ee,
        off: b,
        on: p,
        emit: h,
        plugins: fe,
        previousScrollSnap: ke,
        reInit: E,
        rootNode: $e,
        scrollNext: H,
        scrollPrev: ie,
        scrollProgress: se,
        scrollSnapList: W,
        scrollTo: ne,
        selectedScrollSnap: Q,
        slideNodes: V,
        slidesInView: te,
        slidesNotInView: le
    };
    return q(e, n), setTimeout(() => c.emit("init"), 0), D
}
mt.animationRealms = [];
mt.globalOptions = void 0;

function Gn(t, e = {
    options: {},
    plugins: []
}) {
    let n = e,
        s;
    return kl() && (mt.globalOptions = Gn.globalOptions, s = mt(t, n.options, n.plugins), s.on("init", () => t.dispatchEvent(new CustomEvent("emblaInit", {
        detail: s
    })))), {
        destroy: () => {
            s && s.destroy()
        },
        update: r => {
            const o = !Un(n.options, r.options),
                i = !Sl(n.plugins, r.plugins);
            !o && !i || (n = r, s && s.reInit(n.options, n.plugins))
        }
    }
}
Gn.globalOptions = void 0;
const Zl = {
    active: !0,
    breakpoints: {},
    selected: "is-selected",
    draggable: "is-draggable",
    dragging: "is-dragging"
};

function Nt(t, e) {
    const n = t.classList;
    e && n.contains(e) && n.remove(e)
}

function vn(t, e) {
    const n = t.classList;
    e && !n.contains(e) && n.add(e)
}

function Kn(t = {}) {
    let e, n, s, r;
    const o = ["select", "pointerUp"],
        i = ["pointerDown", "pointerUp"];

    function a(m, g) {
        n = m;
        const {
            mergeOptions: p,
            optionsAtMedia: b
        } = g, h = p(Zl, Kn.globalOptions), E = p(h, t);
        e = b(E), s = n.rootNode(), r = n.slideNodes(), !!n.internalEngine().options.watchDrag && vn(s, e.draggable), e.dragging && i.forEach(y => n.on(y, c)), e.selected && (o.forEach(y => n.on(y, f)), f())
    }

    function l() {
        Nt(s, e.draggable), i.forEach(m => n.off(m, c)), o.forEach(m => n.off(m, f)), r.forEach(m => Nt(m, e.selected))
    }

    function c(m, g) {
        g === "pointerDown" ? vn(s, e.dragging) : Nt(s, e.dragging)
    }

    function f() {
        const m = n.slidesInView(!0);
        n.slidesNotInView(!0).forEach(p => Nt(r[p], e.selected)), m.forEach(p => vn(r[p], e.selected))
    }
    return {
        name: "classNames",
        options: t,
        init: a,
        destroy: l
    }
}
Kn.globalOptions = void 0;

function ea(t) {
    let e, n, s, r, o;
    return {
        c() {
            e = O(), n = M("div"), $(n, "class", s = "home__overlay " + (t[0] && "home__overlay--show"))
        },
        m(i, a) {
            S(i, e, a), S(i, n, a), r || (o = [ue(document.body, "mousedown", t[1]), ue(document.body, "touchstart", t[1])], r = !0)
        },
        p(i, [a]) {
            a & 1 && s !== (s = "home__overlay " + (i[0] && "home__overlay--show")) && $(n, "class", s)
        },
        i: U,
        o: U,
        d(i) {
            i && k(e), i && k(n), r = !1, ye(o)
        }
    }
}

function ta(t, e, n) {
    let {
        timeToShowInteractionInMiliseconds: s = 5 * 1e3
    } = e, r = 0, o = !1;
    const i = () => {
            r = setTimeout(() => {
                n(0, o = !0), setTimeout(() => n(0, o = !1), 1e3)
            }, s)
        },
        a = () => {
            n(0, o = !1), clearTimeout(r)
        };
    return pt(() => {
        i()
    }), Wt(() => {
        a()
    }), t.$$set = l => {
        "timeToShowInteractionInMiliseconds" in l && n(2, s = l.timeToShowInteractionInMiliseconds)
    }, [o, a, s]
}
class na extends X {
    constructor(e) {
        super(), Y(this, e, ta, ea, K, {
            timeToShowInteractionInMiliseconds: 2
        })
    }
}

function sa(t) {
    let e, n, s, r, o, i, a, l, c, f, u, m;
    return a = new wr({
        props: {
            className: "home__item embla__slide",
            progress: t[0]
        }
    }), c = new na({}), {
        c() {
            e = M("main"), n = M("div"), n.innerHTML = '<h2 class="home__title">Conheça histórias de Artesãos</h2>', r = O(), o = M("nav"), i = M("ul"), R(a.$$.fragment), l = O(), R(c.$$.fragment), $(n, "class", "home__container"), $(i, "class", "home__list embla__container"), $(o, "class", "home__nav embla"), $(e, "class", "home")
        },
        m(g, p) {
            S(g, e, p), w(e, n), w(e, r), w(e, o), w(o, i), P(a, i, null), w(e, l), P(c, e, null), f = !0, u || (m = [Mt(Gn.call(null, o, t[1])), ue(o, "emblaInit", t[2])], u = !0)
        },
        p(g, [p]) {
            const b = {};
            p & 1 && (b.progress = g[0]), a.$set(b)
        },
        i(g) {
            f || (ce(() => {
                f && (s || (s = Gt(n, dt, {
                    delay: 200,
                    duration: 300
                }, !0)), s.run(1))
            }), j(a.$$.fragment, g), j(c.$$.fragment, g), f = !0)
        },
        o(g) {
            s || (s = Gt(n, dt, {
                delay: 200,
                duration: 300
            }, !1)), s.run(0), L(a.$$.fragment, g), L(c.$$.fragment, g), f = !1
        },
        d(g) {
            g && k(e), g && s && s.end(), C(a), C(c), u = !1, ye(m)
        }
    }
}

function ra(t, e, n) {
    let s = 0;
    const r = {
        options: {
            loop: !1,
            selected: "home__item--selected"
        },
        plugins: [Kn()]
    };
    let o;
    const i = l => {
            n(0, s = Math.min(100, Math.max(0, Math.round(l.scrollProgress() * 100))))
        },
        a = l => {
            o = l.detail, o.on("scroll", i)
        };
    return Wt(() => {
        o && o.off("scroll", i)
    }), [s, r, a]
}
class oa extends X {
    constructor(e) {
        super(), Y(this, e, ra, sa, K, {})
    }
}
const {
    window: jr
} = Rn;

function ia(t) {
    let e, n;
    return e = new vl({}), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function la(t) {
    let e, n;
    return e = new oa({}), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function aa(t) {
    let e, n, s, r, o, i, a, l, c;
    ce(t[1]), n = new Pt({});
    const f = [la, ia],
        u = [];

    function m(g, p) {
        return g[0] <= ca ? 0 : 1
    }
    return r = m(t), o = u[r] = f[r](t), {
        c() {
            e = O(), R(n.$$.fragment), s = O(), o.c(), i = Ne(), document.title = "São João 2023 -  Guaraná Jesus"
        },
        m(g, p) {
            S(g, e, p), P(n, g, p), S(g, s, p), u[r].m(g, p), S(g, i, p), a = !0, l || (c = ue(jr, "resize", t[1]), l = !0)
        },
        p(g, [p]) {
            let b = r;
            r = m(g), r !== b && (Ze(), L(u[b], 1, 1, () => {
                u[b] = null
            }), et(), o = u[r], o || (o = u[r] = f[r](g), o.c()), j(o, 1), o.m(i.parentNode, i))
        },
        i(g) {
            a || (j(n.$$.fragment, g), j(o), a = !0)
        },
        o(g) {
            L(n.$$.fragment, g), L(o), a = !1
        },
        d(g) {
            g && k(e), C(n, g), g && k(s), u[r].d(g), g && k(i), l = !1, c()
        }
    }
}
const ca = 1024;

function ua(t, e, n) {
    let s = window.innerWidth;

    function r() {
        n(0, s = jr.innerWidth)
    }
    return [s, r]
}
class fa extends X {
    constructor(e) {
        super(), Y(this, e, ua, aa, K, {})
    }
}

function da(t) {
    let e;
    return {
        c() {
            e = M("p"), e.textContent = "Leves e delicadas, as penas são destaques na latinha temática de Guaraná Jesus. Com elas, as indumentárias ganham muita cor e beleza para o São João."
        },
        m(n, s) {
            S(n, e, s)
        },
        p: U,
        d(n) {
            n && k(e)
        }
    }
}

function ma(t) {
    let e, n, s, r, o, i, a, l, c, f, u, m, g, p, b, h, E, v, y;
    return n = new Pt({}), r = new nn({
        props: {
            title: "Vanessa",
            subject: "penas",
            article: "e as",
            image: "assets/img/thumbs/penas.jpg",
            videoUrl: "https://customer-cr9gbt1wye0o1ab6.cloudflarestream.com/2e1c1cfb5b72fc957828e4ecb1f012cf/iframe",
            $$slots: {
                default: [da]
            },
            $$scope: {
                ctx: t
            }
        }
    }), i = new sn({
        props: {
            subject: "penas",
            content: ["Nas mãos de Vanessa Sara, elas se transformam em", "chapéus, cocares, colares, brincos e outros adereços", "usados por grupos de Bumba Meu Boi."]
        }
    }), l = new rn({
        props: {
            subject: "penas",
            images: [{
                src: "assets/img/galeria/penas04.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/penas01.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/penas02.jpg",
                alt: ""
            }, {
                src: "assets/img/galeria/penas03.jpg",
                alt: ""
            }]
        }
    }), f = new ln({
        props: {
            subject: "as penas",
            credits: "por Meireles Jr e Juliana Ribeiro"
        }
    }), m = new on({
        props: {
            subject: "penas",
            images: [{
                src: "assets/img/fotos/pena1.jpg",
                alt: "Meireles Jr"
            }, {
                src: "assets/img/fotos/pena3.jpg",
                alt: "Juliana Ribeiro"
            }, {
                src: "assets/img/fotos/pena2.jpg",
                alt: "Juliana Ribeiro"
            }]
        }
    }), p = new an({
        props: {
            theme: "penas",
            quote: "Eu contribuo para que, em junho, pessoas de todo Brasil, e até fora dele, venham ver o brilho do São João do Maranhão.",
            author: "Vanessa Sara"
        }
    }), h = new cn({}), v = new tn({}), {
        c() {
            e = O(), R(n.$$.fragment), s = O(), R(r.$$.fragment), o = O(), R(i.$$.fragment), a = O(), R(l.$$.fragment), c = O(), R(f.$$.fragment), u = O(), R(m.$$.fragment), g = O(), R(p.$$.fragment), b = O(), R(h.$$.fragment), E = O(), R(v.$$.fragment), document.title = "Vanessa e as penas - São João 2023 -  Guaraná Jesus"
        },
        m(d, _) {
            S(d, e, _), P(n, d, _), S(d, s, _), P(r, d, _), S(d, o, _), P(i, d, _), S(d, a, _), P(l, d, _), S(d, c, _), P(f, d, _), S(d, u, _), P(m, d, _), S(d, g, _), P(p, d, _), S(d, b, _), P(h, d, _), S(d, E, _), P(v, d, _), y = !0
        },
        p(d, [_]) {
            const T = {};
            _ & 1 && (T.$$scope = {
                dirty: _,
                ctx: d
            }), r.$set(T)
        },
        i(d) {
            y || (j(n.$$.fragment, d), j(r.$$.fragment, d), j(i.$$.fragment, d), j(l.$$.fragment, d), j(f.$$.fragment, d), j(m.$$.fragment, d), j(p.$$.fragment, d), j(h.$$.fragment, d), j(v.$$.fragment, d), y = !0)
        },
        o(d) {
            L(n.$$.fragment, d), L(r.$$.fragment, d), L(i.$$.fragment, d), L(l.$$.fragment, d), L(f.$$.fragment, d), L(m.$$.fragment, d), L(p.$$.fragment, d), L(h.$$.fragment, d), L(v.$$.fragment, d), y = !1
        },
        d(d) {
            d && k(e), C(n, d), d && k(s), C(r, d), d && k(o), C(i, d), d && k(a), C(l, d), d && k(c), C(f, d), d && k(u), C(m, d), d && k(g), C(p, d), d && k(b), C(h, d), d && k(E), C(v, d)
        }
    }
}

function ga(t) {
    return qe.set(!0), []
}
class pa extends X {
    constructor(e) {
        super(), Y(this, e, ga, ma, K, {})
    }
}

function _a(t) {
    let e, n, s;
    return {
        c() {
            e = M("div")
        },
        m(r, o) {
            S(r, e, o), n || (s = Mt(t[0].call(null, e)), n = !0)
        },
        p: U,
        i: U,
        o: U,
        d(r) {
            r && k(e), n = !1, s()
        }
    }
}

function ha(t) {
    function e(n) {
        mr()("/", {
            replace: !0
        })
    }
    return [e]
}
class ba extends X {
    constructor(e) {
        super(), Y(this, e, ha, _a, K, {})
    }
}
const {
    window: On
} = Rn;

function ya(t) {
    let e, n, s, r, o, i, a, l, c, f;
    return ce(t[9]), {
        c() {
            e = M("div"), n = M("h1"), n.textContent = "O Sabor alguma coisa", s = O(), r = M("video"), o = M("source"), $(n, "class", "intro__title"), ut(n, "out", t[2]), pe(o.src, i = t[3]) || $(o, "src", i), $(o, "type", "video/mp4"), r.playsInline = !0, r.muted = !0, r.autoplay = !0, $(r, "class", "intro__video"), $(e, "class", "intro")
        },
        m(u, m) {
            S(u, e, m), w(e, n), w(e, s), w(e, r), w(r, o), l = !0, c || (f = [ue(On, "resize", t[9]), ue(r, "play", t[4]), ue(r, "ended", t[5])], c = !0)
        },
        p(u, [m]) {
            (!l || m & 4) && ut(n, "out", u[2]), (!l || m & 8 && !pe(o.src, i = u[3])) && $(o, "src", i)
        },
        i(u) {
            l || (a && a.end(1), l = !0)
        },
        o(u) {
            a = Us(e, dt, {
                duration: 300
            }), l = !1
        },
        d(u) {
            u && k(e), u && a && a.end(), c = !1, ye(f)
        }
    }
}

function $a(t, e, n) {
    let s, r, o;
    const i = Tn();
    let a = window.innerWidth,
        l = window.innerHeight,
        c = !1;

    function f() {
        n(2, c = !0)
    }

    function u() {
        i("ended")
    }

    function m() {
        n(0, a = On.innerWidth), n(1, l = On.innerHeight)
    }
    return t.$$.update = () => {
        t.$$.dirty & 3 && n(8, s = a / l), t.$$.dirty & 256 && n(7, r = s > 1), t.$$.dirty & 128 && n(3, o = r ? "/assets/video/intro-desktop-1500kbps.mp4" : "/assets/video/intro-mobile-1500kbps.mp4")
    }, [a, l, c, o, f, u, i, r, s, m]
}
class va extends X {
    constructor(e) {
        super(), Y(this, e, $a, ya, K, {
            dispatch: 6
        })
    }
    get dispatch() {
        return this.$$.ctx[6]
    }
}

function wa(t) {
    let e;
    return {
        c() {
            e = M("div"), e.innerHTML = `<span class="preload__font--pussycat svelte-7dxmy5">pussycat</span> 
    <span class="preload__font--barlow svelte-7dxmy5">barlow</span>`, $(e, "class", "preload svelte-7dxmy5"), $(e, "aria-hidden", "true")
        },
        m(n, s) {
            S(n, e, s)
        },
        p: U,
        i: U,
        o: U,
        d(n) {
            n && k(e)
        }
    }
}
class ka extends X {
    constructor(e) {
        super(), Y(this, e, null, wa, K, {})
    }
}

function Sa(t) {
    let e, n;
    return e = new va({}), e.$on("ended", t[1]), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        p: U,
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function Ea(t) {
    let e, n;
    return e = new fa({}), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        p: U,
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function Ma(t) {
    let e, n, s, r;
    const o = [Ea, Sa],
        i = [];

    function a(l, c) {
        return l[0] ? 0 : 1
    }
    return e = a(t), n = i[e] = o[e](t), {
        c() {
            n.c(), s = Ne()
        },
        m(l, c) {
            i[e].m(l, c), S(l, s, c), r = !0
        },
        p(l, c) {
            let f = e;
            e = a(l), e === f ? i[e].p(l, c) : (Ze(), L(i[f], 1, 1, () => {
                i[f] = null
            }), et(), n = i[e], n ? n.p(l, c) : (n = i[e] = o[e](l), n.c()), j(n, 1), n.m(s.parentNode, s))
        },
        i(l) {
            r || (j(n), r = !0)
        },
        o(l) {
            L(n), r = !1
        },
        d(l) {
            i[e].d(l), l && k(s)
        }
    }
}

function ja(t) {
    let e, n;
    return e = new sl({}), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function Ia(t) {
    let e, n;
    return e = new ll({}), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function La(t) {
    let e, n;
    return e = new fl({}), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function Oa(t) {
    let e, n;
    return e = new pa({}), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function Pa(t) {
    let e, n;
    return e = new ba({}), {
        c() {
            R(e.$$.fragment)
        },
        m(s, r) {
            P(e, s, r), n = !0
        },
        i(s) {
            n || (j(e.$$.fragment, s), n = !0)
        },
        o(s) {
            L(e.$$.fragment, s), n = !1
        },
        d(s) {
            C(e, s)
        }
    }
}

function Ca(t) {
    let e, n, s, r, o, i, a, l, c, f, u, m;
    return e = new ot({
        props: {
            path: "/",
            $$slots: {
                default: [Ma]
            },
            $$scope: {
                ctx: t
            }
        }
    }), s = new ot({
        props: {
            path: "/bordado",
            $$slots: {
                default: [ja]
            },
            $$scope: {
                ctx: t
            }
        }
    }), o = new ot({
        props: {
            path: "/chita",
            $$slots: {
                default: [Ia]
            },
            $$scope: {
                ctx: t
            }
        }
    }), a = new ot({
        props: {
            path: "/fitas",
            $$slots: {
                default: [La]
            },
            $$scope: {
                ctx: t
            }
        }
    }), c = new ot({
        props: {
            path: "/penas",
            $$slots: {
                default: [Oa]
            },
            $$scope: {
                ctx: t
            }
        }
    }), u = new ot({
        props: {
            $$slots: {
                default: [Pa]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            R(e.$$.fragment), n = O(), R(s.$$.fragment), r = O(), R(o.$$.fragment), i = O(), R(a.$$.fragment), l = O(), R(c.$$.fragment), f = O(), R(u.$$.fragment)
        },
        m(g, p) {
            P(e, g, p), S(g, n, p), P(s, g, p), S(g, r, p), P(o, g, p), S(g, i, p), P(a, g, p), S(g, l, p), P(c, g, p), S(g, f, p), P(u, g, p), m = !0
        },
        p(g, p) {
            const b = {};
            p & 5 && (b.$$scope = {
                dirty: p,
                ctx: g
            }), e.$set(b);
            const h = {};
            p & 4 && (h.$$scope = {
                dirty: p,
                ctx: g
            }), s.$set(h);
            const E = {};
            p & 4 && (E.$$scope = {
                dirty: p,
                ctx: g
            }), o.$set(E);
            const v = {};
            p & 4 && (v.$$scope = {
                dirty: p,
                ctx: g
            }), a.$set(v);
            const y = {};
            p & 4 && (y.$$scope = {
                dirty: p,
                ctx: g
            }), c.$set(y);
            const d = {};
            p & 4 && (d.$$scope = {
                dirty: p,
                ctx: g
            }), u.$set(d)
        },
        i(g) {
            m || (j(e.$$.fragment, g), j(s.$$.fragment, g), j(o.$$.fragment, g), j(a.$$.fragment, g), j(c.$$.fragment, g), j(u.$$.fragment, g), m = !0)
        },
        o(g) {
            L(e.$$.fragment, g), L(s.$$.fragment, g), L(o.$$.fragment, g), L(a.$$.fragment, g), L(c.$$.fragment, g), L(u.$$.fragment, g), m = !1
        },
        d(g) {
            C(e, g), g && k(n), C(s, g), g && k(r), C(o, g), g && k(i), C(a, g), g && k(l), C(c, g), g && k(f), C(u, g)
        }
    }
}

function Ra(t) {
    let e, n, s, r;
    return e = new ka({}), s = new ar({
        props: {
            $$slots: {
                default: [Ca]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            R(e.$$.fragment), n = O(), R(s.$$.fragment)
        },
        m(o, i) {
            P(e, o, i), S(o, n, i), P(s, o, i), r = !0
        },
        p(o, [i]) {
            const a = {};
            i & 5 && (a.$$scope = {
                dirty: i,
                ctx: o
            }), s.$set(a)
        },
        i(o) {
            r || (j(e.$$.fragment, o), j(s.$$.fragment, o), r = !0)
        },
        o(o) {
            L(e.$$.fragment, o), L(s.$$.fragment, o), r = !1
        },
        d(o) {
            C(e, o), o && k(n), C(s, o)
        }
    }
}

function Ta(t, e, n) {
    let s = Ve(qe);
    return qe.subscribe(o => {
        n(0, s = o)
    }), [s, () => qe.set(!0)]
}
class Aa extends X {
    constructor(e) {
        super(), Y(this, e, Ta, Ra, K, {})
    }
}
new Aa({
    target: document.getElementById("app")
});