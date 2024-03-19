var jr = {};
/**
 * @vue/shared v3.4.19
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function xt(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const K = jr.NODE_ENV !== "production" ? Object.freeze({}) : {},
  Ot = jr.NODE_ENV !== "production" ? Object.freeze([]) : [],
  J = () => {},
  Lr = () => !1,
  Kt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 && // uppercase letter
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  an = (e) => e.startsWith("onUpdate:"),
  W = Object.assign,
  No = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  qi = Object.prototype.hasOwnProperty,
  A = (e, t) => qi.call(e, t),
  C = Array.isArray,
  it = (e) => Bt(e) === "[object Map]",
  yn = (e) => Bt(e) === "[object Set]",
  Xo = (e) => Bt(e) === "[object Date]",
  T = (e) => typeof e == "function",
  G = (e) => typeof e == "string",
  Je = (e) => typeof e == "symbol",
  U = (e) => e !== null && typeof e == "object",
  yo = (e) => (U(e) || T(e)) && T(e.then) && T(e.catch),
  Ur = Object.prototype.toString,
  Bt = (e) => Ur.call(e),
  bo = (e) => Bt(e).slice(8, -1),
  Hr = (e) => Bt(e) === "[object Object]",
  Oo = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  It = /* @__PURE__ */ xt(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Gi = /* @__PURE__ */ xt(
    "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
  ),
  bn = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  zi = /-(\w)/g,
  Fe = bn((e) => e.replace(zi, (t, n) => (n ? n.toUpperCase() : ""))),
  Ji = /\B([A-Z])/g,
  de = bn((e) => e.replace(Ji, "-$1").toLowerCase()),
  On = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  nt = bn((e) => (e ? `on${On(e)}` : "")),
  pt = (e, t) => !Object.is(e, t),
  Nt = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  dn = (e, t, n) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: n,
    });
  },
  Ft = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Zo = (e) => {
    const t = G(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Qo;
const vo = () =>
  Qo ||
  (Qo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function wo(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        r = G(o) ? Qi(o) : wo(o);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (G(e) || U(e)) return e;
}
const Yi = /;(?![^(]*\))/g,
  Xi = /:([^]+)/,
  Zi = /\/\*[^]*?\*\//g;
function Qi(e) {
  const t = {};
  return (
    e
      .replace(Zi, "")
      .split(Yi)
      .forEach((n) => {
        if (n) {
          const o = n.split(Xi);
          o.length > 1 && (t[o[0].trim()] = o[1].trim());
        }
      }),
    t
  );
}
function Vo(e) {
  let t = "";
  if (G(e)) t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = Vo(e[n]);
      o && (t += o + " ");
    }
  else if (U(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const es =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ts = /* @__PURE__ */ xt(es);
function Kr(e) {
  return !!e || e === "";
}
function ns(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++) n = vn(e[o], t[o]);
  return n;
}
function vn(e, t) {
  if (e === t) return !0;
  let n = Xo(e),
    o = Xo(t);
  if (n || o) return n && o ? e.getTime() === t.getTime() : !1;
  if (((n = Je(e)), (o = Je(t)), n || o)) return e === t;
  if (((n = C(e)), (o = C(t)), n || o)) return n && o ? ns(e, t) : !1;
  if (((n = U(e)), (o = U(t)), n || o)) {
    if (!n || !o) return !1;
    const r = Object.keys(e).length,
      i = Object.keys(t).length;
    if (r !== i) return !1;
    for (const s in e) {
      const c = e.hasOwnProperty(s),
        u = t.hasOwnProperty(s);
      if ((c && !u) || (!c && u) || !vn(e[s], t[s])) return !1;
    }
  }
  return String(e) === String(t);
}
function os(e, t) {
  return e.findIndex((n) => vn(n, t));
}
const Qe = (e) =>
    G(e)
      ? e
      : e == null
      ? ""
      : C(e) || (U(e) && (e.toString === Ur || !T(e.toString)))
      ? JSON.stringify(e, Br, 2)
      : String(e),
  Br = (e, t) =>
    t && t.__v_isRef
      ? Br(e, t.value)
      : it(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [o, r], i) => ((n[Kn(o, i) + " =>"] = r), n),
            {}
          ),
        }
      : yn(t)
      ? {
          [`Set(${t.size})`]: [...t.values()].map((n) => Kn(n)),
        }
      : Je(t)
      ? Kn(t)
      : U(t) && !C(t) && !Hr(t)
      ? String(t)
      : t,
  Kn = (e, t = "") => {
    var n;
    return Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
var X = {};
function jt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let be;
class rs {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = be),
      !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = be;
      try {
        return (be = this), t();
      } finally {
        be = n;
      }
    } else
      X.NODE_ENV !== "production" && jt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    be = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    be = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function is(e, t = be) {
  t && t.active && t.effects.push(e);
}
function ss() {
  return be;
}
let st;
class xo {
  constructor(t, n, o, r) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = o),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      is(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), Xe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (ls(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ze();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = ze,
      n = st;
    try {
      return (ze = !0), (st = this), this._runnings++, er(this), this.fn();
    } finally {
      tr(this), this._runnings--, (st = n), (ze = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (er(this),
      tr(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function ls(e) {
  return e.value;
}
function er(e) {
  e._trackId++, (e._depsLength = 0);
}
function tr(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) kr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function kr(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let ze = !0,
  eo = 0;
const Wr = [];
function Xe() {
  Wr.push(ze), (ze = !1);
}
function Ze() {
  const e = Wr.pop();
  ze = e === void 0 ? !0 : e;
}
function Do() {
  eo++;
}
function Co() {
  for (eo--; !eo && to.length; ) to.shift()();
}
function qr(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && kr(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++,
      X.NODE_ENV !== "production" &&
        ((o = e.onTrack) == null || o.call(e, W({ effect: e }, n)));
  }
}
const to = [];
function Gr(e, t, n) {
  var o;
  Do();
  for (const r of e.keys()) {
    let i;
    r._dirtyLevel < t &&
      (i ?? (i = e.get(r) === r._trackId)) &&
      (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
      (r._dirtyLevel = t)),
      r._shouldSchedule &&
        (i ?? (i = e.get(r) === r._trackId)) &&
        (X.NODE_ENV !== "production" &&
          ((o = r.onTrigger) == null || o.call(r, W({ effect: r }, n))),
        r.trigger(),
        (!r._runnings || r.allowRecurse) &&
          r._dirtyLevel !== 2 &&
          ((r._shouldSchedule = !1), r.scheduler && to.push(r.scheduler)));
  }
  Co();
}
const zr = (e, t) => {
    const n = /* @__PURE__ */ new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  no = /* @__PURE__ */ new WeakMap(),
  lt = Symbol(X.NODE_ENV !== "production" ? "iterate" : ""),
  oo = Symbol(X.NODE_ENV !== "production" ? "Map key iterate" : "");
function te(e, t, n) {
  if (ze && st) {
    let o = no.get(e);
    o || no.set(e, (o = /* @__PURE__ */ new Map()));
    let r = o.get(n);
    r || o.set(n, (r = zr(() => o.delete(n)))),
      qr(
        st,
        r,
        X.NODE_ENV !== "production"
          ? {
              target: e,
              type: t,
              key: n,
            }
          : void 0
      );
  }
}
function Te(e, t, n, o, r, i) {
  const s = no.get(e);
  if (!s) return;
  let c = [];
  if (t === "clear") c = [...s.values()];
  else if (n === "length" && C(e)) {
    const u = Number(o);
    s.forEach((d, _) => {
      (_ === "length" || (!Je(_) && _ >= u)) && c.push(d);
    });
  } else
    switch ((n !== void 0 && c.push(s.get(n)), t)) {
      case "add":
        C(e)
          ? Oo(n) && c.push(s.get("length"))
          : (c.push(s.get(lt)), it(e) && c.push(s.get(oo)));
        break;
      case "delete":
        C(e) || (c.push(s.get(lt)), it(e) && c.push(s.get(oo)));
        break;
      case "set":
        it(e) && c.push(s.get(lt));
        break;
    }
  Do();
  for (const u of c)
    u &&
      Gr(
        u,
        4,
        X.NODE_ENV !== "production"
          ? {
              target: e,
              type: t,
              key: n,
              newValue: o,
              oldValue: r,
              oldTarget: i,
            }
          : void 0
      );
  Co();
}
const cs = /* @__PURE__ */ xt("__proto__,__v_isRef,__isVue"),
  Jr = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Je)
  ),
  nr = /* @__PURE__ */ us();
function us() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const o = $(this);
        for (let i = 0, s = this.length; i < s; i++) te(o, "get", i + "");
        const r = o[t](...n);
        return r === -1 || r === !1 ? o[t](...n.map($)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Xe(), Do();
        const o = $(this)[t].apply(this, n);
        return Co(), Ze(), o;
      };
    }),
    e
  );
}
function fs(e) {
  const t = $(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class Yr {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, o) {
    const r = this._isReadonly,
      i = this._shallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return o === (r ? (i ? oi : ni) : i ? ti : ei).get(t) || // receiver is not the reactive proxy, but has the same prototype
        // this means the reciever is a user proxy of the reactive proxy
        Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
        ? t
        : void 0;
    const s = C(t);
    if (!r) {
      if (s && A(nr, n)) return Reflect.get(nr, n, o);
      if (n === "hasOwnProperty") return fs;
    }
    const c = Reflect.get(t, n, o);
    return (Je(n) ? Jr.has(n) : cs(n)) || (r || te(t, "get", n), i)
      ? c
      : oe(c)
      ? s && Oo(n)
        ? c
        : c.value
      : U(c)
      ? r
        ? ri(c)
        : To(c)
      : c;
  }
}
class Xr extends Yr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (!this._shallow) {
      const u = ht(i);
      if (
        (!vt(o) && !ht(o) && ((i = $(i)), (o = $(o))), !C(t) && oe(i) && !oe(o))
      )
        return u ? !1 : ((i.value = o), !0);
    }
    const s = C(t) && Oo(n) ? Number(n) < t.length : A(t, n),
      c = Reflect.set(t, n, o, r);
    return (
      t === $(r) &&
        (s ? pt(o, i) && Te(t, "set", n, o, i) : Te(t, "add", n, o)),
      c
    );
  }
  deleteProperty(t, n) {
    const o = A(t, n),
      r = t[n],
      i = Reflect.deleteProperty(t, n);
    return i && o && Te(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Je(n) || !Jr.has(n)) && te(t, "has", n), o;
  }
  ownKeys(t) {
    return te(t, "iterate", C(t) ? "length" : lt), Reflect.ownKeys(t);
  }
}
class Zr extends Yr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return (
      X.NODE_ENV !== "production" &&
        jt(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t
        ),
      !0
    );
  }
  deleteProperty(t, n) {
    return (
      X.NODE_ENV !== "production" &&
        jt(
          `Delete operation on key "${String(n)}" failed: target is readonly.`,
          t
        ),
      !0
    );
  }
}
const as = /* @__PURE__ */ new Xr(),
  ds = /* @__PURE__ */ new Zr(),
  ps = /* @__PURE__ */ new Xr(!0),
  hs = /* @__PURE__ */ new Zr(!0),
  So = (e) => e,
  wn = (e) => Reflect.getPrototypeOf(e);
function Yt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = $(e),
    i = $(t);
  n || (pt(t, i) && te(r, "get", t), te(r, "get", i));
  const { has: s } = wn(r),
    c = o ? So : n ? $o : Ro;
  if (s.call(r, t)) return c(e.get(t));
  if (s.call(r, i)) return c(e.get(i));
  e !== r && e.get(t);
}
function Xt(e, t = !1) {
  const n = this.__v_raw,
    o = $(n),
    r = $(e);
  return (
    t || (pt(e, r) && te(o, "has", e), te(o, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function Zt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && te($(e), "iterate", lt), Reflect.get(e, "size", e)
  );
}
function or(e) {
  e = $(e);
  const t = $(this);
  return wn(t).has.call(t, e) || (t.add(e), Te(t, "add", e, e)), this;
}
function rr(e, t) {
  t = $(t);
  const n = $(this),
    { has: o, get: r } = wn(n);
  let i = o.call(n, e);
  i
    ? X.NODE_ENV !== "production" && Qr(n, o, e)
    : ((e = $(e)), (i = o.call(n, e)));
  const s = r.call(n, e);
  return (
    n.set(e, t),
    i ? pt(t, s) && Te(n, "set", e, t, s) : Te(n, "add", e, t),
    this
  );
}
function ir(e) {
  const t = $(this),
    { has: n, get: o } = wn(t);
  let r = n.call(t, e);
  r
    ? X.NODE_ENV !== "production" && Qr(t, n, e)
    : ((e = $(e)), (r = n.call(t, e)));
  const i = o ? o.call(t, e) : void 0,
    s = t.delete(e);
  return r && Te(t, "delete", e, void 0, i), s;
}
function sr() {
  const e = $(this),
    t = e.size !== 0,
    n =
      X.NODE_ENV !== "production" ? (it(e) ? new Map(e) : new Set(e)) : void 0,
    o = e.clear();
  return t && Te(e, "clear", void 0, void 0, n), o;
}
function Qt(e, t) {
  return function (o, r) {
    const i = this,
      s = i.__v_raw,
      c = $(s),
      u = t ? So : e ? $o : Ro;
    return (
      !e && te(c, "iterate", lt), s.forEach((d, _) => o.call(r, u(d), u(_), i))
    );
  };
}
function en(e, t, n) {
  return function (...o) {
    const r = this.__v_raw,
      i = $(r),
      s = it(i),
      c = e === "entries" || (e === Symbol.iterator && s),
      u = e === "keys" && s,
      d = r[e](...o),
      _ = n ? So : t ? $o : Ro;
    return (
      !t && te(i, "iterate", u ? oo : lt),
      {
        // iterator protocol
        next() {
          const { value: p, done: y } = d.next();
          return y
            ? { value: p, done: y }
            : {
                value: c ? [_(p[0]), _(p[1])] : _(p),
                done: y,
              };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Be(e) {
  return function (...t) {
    if (X.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${On(e)} operation ${n}failed: target is readonly.`,
        $(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _s() {
  const e = {
      get(i) {
        return Yt(this, i);
      },
      get size() {
        return Zt(this);
      },
      has: Xt,
      add: or,
      set: rr,
      delete: ir,
      clear: sr,
      forEach: Qt(!1, !1),
    },
    t = {
      get(i) {
        return Yt(this, i, !1, !0);
      },
      get size() {
        return Zt(this);
      },
      has: Xt,
      add: or,
      set: rr,
      delete: ir,
      clear: sr,
      forEach: Qt(!1, !0),
    },
    n = {
      get(i) {
        return Yt(this, i, !0);
      },
      get size() {
        return Zt(this, !0);
      },
      has(i) {
        return Xt.call(this, i, !0);
      },
      add: Be("add"),
      set: Be("set"),
      delete: Be("delete"),
      clear: Be("clear"),
      forEach: Qt(!0, !1),
    },
    o = {
      get(i) {
        return Yt(this, i, !0, !0);
      },
      get size() {
        return Zt(this, !0);
      },
      has(i) {
        return Xt.call(this, i, !0);
      },
      add: Be("add"),
      set: Be("set"),
      delete: Be("delete"),
      clear: Be("clear"),
      forEach: Qt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = en(i, !1, !1)),
        (n[i] = en(i, !0, !1)),
        (t[i] = en(i, !1, !0)),
        (o[i] = en(i, !0, !0));
    }),
    [e, n, t, o]
  );
}
const [ms, gs, Es, Ns] = /* @__PURE__ */ _s();
function Vn(e, t) {
  const n = t ? (e ? Ns : Es) : e ? gs : ms;
  return (o, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? o
      : Reflect.get(A(n, r) && r in o ? n : o, r, i);
}
const ys = {
    get: /* @__PURE__ */ Vn(!1, !1),
  },
  bs = {
    get: /* @__PURE__ */ Vn(!1, !0),
  },
  Os = {
    get: /* @__PURE__ */ Vn(!0, !1),
  },
  vs = {
    get: /* @__PURE__ */ Vn(!0, !0),
  };
function Qr(e, t, n) {
  const o = $(n);
  if (o !== n && t.call(e, o)) {
    const r = bo(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${
        r === "Map" ? " as keys" : ""
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ei = /* @__PURE__ */ new WeakMap(),
  ti = /* @__PURE__ */ new WeakMap(),
  ni = /* @__PURE__ */ new WeakMap(),
  oi = /* @__PURE__ */ new WeakMap();
function ws(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Vs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ws(bo(e));
}
function To(e) {
  return ht(e) ? e : xn(e, !1, as, ys, ei);
}
function xs(e) {
  return xn(e, !1, ps, bs, ti);
}
function ri(e) {
  return xn(e, !0, ds, Os, ni);
}
function bt(e) {
  return xn(e, !0, hs, vs, oi);
}
function xn(e, t, n, o, r) {
  if (!U(e))
    return (
      X.NODE_ENV !== "production" &&
        console.warn(`value cannot be made reactive: ${String(e)}`),
      e
    );
  if (e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = r.get(e);
  if (i) return i;
  const s = Vs(e);
  if (s === 0) return e;
  const c = new Proxy(e, s === 2 ? o : n);
  return r.set(e, c), c;
}
function ct(e) {
  return ht(e) ? ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ht(e) {
  return !!(e && e.__v_isReadonly);
}
function vt(e) {
  return !!(e && e.__v_isShallow);
}
function ro(e) {
  return ct(e) || ht(e);
}
function $(e) {
  const t = e && e.__v_raw;
  return t ? $(t) : e;
}
function ii(e) {
  return Object.isExtensible(e) && dn(e, "__v_skip", !0), e;
}
const Ro = (e) => (U(e) ? To(e) : e),
  $o = (e) => (U(e) ? ri(e) : e),
  Ds =
    "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class si {
  constructor(t, n, o, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new xo(
        () => t(this._value),
        () => Bn(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = o);
  }
  get value() {
    const t = $(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        pt(t._value, (t._value = t.effect.run())) &&
        Bn(t, 4),
      Ss(t),
      t.effect._dirtyLevel >= 2 &&
        (X.NODE_ENV !== "production" && jt(Ds), Bn(t, 2)),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Cs(e, t, n = !1) {
  let o, r;
  const i = T(e);
  i
    ? ((o = e),
      (r =
        X.NODE_ENV !== "production"
          ? () => {
              jt("Write operation failed: computed value is readonly");
            }
          : J))
    : ((o = e.get), (r = e.set));
  const s = new si(o, r, i || !r, n);
  return (
    X.NODE_ENV !== "production" &&
      t &&
      !n &&
      ((s.effect.onTrack = t.onTrack), (s.effect.onTrigger = t.onTrigger)),
    s
  );
}
function Ss(e) {
  var t;
  ze &&
    st &&
    ((e = $(e)),
    qr(
      st,
      (t = e.dep) != null
        ? t
        : (e.dep = zr(() => (e.dep = void 0), e instanceof si ? e : void 0)),
      X.NODE_ENV !== "production"
        ? {
            target: e,
            type: "get",
            key: "value",
          }
        : void 0
    ));
}
function Bn(e, t = 4, n) {
  e = $(e);
  const o = e.dep;
  o &&
    Gr(
      o,
      t,
      X.NODE_ENV !== "production"
        ? {
            target: e,
            type: "set",
            key: "value",
            newValue: n,
          }
        : void 0
    );
}
function oe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ts(e) {
  return oe(e) ? e.value : e;
}
const Rs = {
  get: (e, t, n) => Ts(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return oe(r) && !oe(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, o);
  },
};
function li(e) {
  return ct(e) ? e : new Proxy(e, Rs);
}
var a = {};
const ut = [];
function on(e) {
  ut.push(e);
}
function rn() {
  ut.pop();
}
function v(e, ...t) {
  Xe();
  const n = ut.length ? ut[ut.length - 1].component : null,
    o = n && n.appContext.config.warnHandler,
    r = $s();
  if (o)
    je(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: i }) => `at <${Pn(n, i.type)}>`).join(`
`),
      r,
    ]);
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length &&
      i.push(
        `
`,
        ...Is(r)
      ),
      console.warn(...i);
  }
  Ze();
}
function $s() {
  let e = ut[ut.length - 1];
  if (!e) return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e
      ? n.recurseCount++
      : t.push({
          vnode: e,
          recurseCount: 0,
        });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Is(e) {
  const t = [];
  return (
    e.forEach((n, o) => {
      t.push(
        ...(o === 0
          ? []
          : [
              `
`,
            ]),
        ...Ps(n)
      );
    }),
    t
  );
}
function Ps({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "",
    o = e.component ? e.component.parent == null : !1,
    r = ` at <${Pn(e.component, e.type, o)}`,
    i = ">" + n;
  return e.props ? [r, ...As(e.props), i] : [r + i];
}
function As(e) {
  const t = [],
    n = Object.keys(e);
  return (
    n.slice(0, 3).forEach((o) => {
      t.push(...ci(o, e[o]));
    }),
    n.length > 3 && t.push(" ..."),
    t
  );
}
function ci(e, t, n) {
  return G(t)
    ? ((t = JSON.stringify(t)), n ? t : [`${e}=${t}`])
    : typeof t == "number" || typeof t == "boolean" || t == null
    ? n
      ? t
      : [`${e}=${t}`]
    : oe(t)
    ? ((t = ci(e, $(t.value), !0)), n ? t : [`${e}=Ref<`, t, ">"])
    : T(t)
    ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`]
    : ((t = $(t)), n ? t : [`${e}=`, t]);
}
const Io = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core .",
};
function je(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    kt(r, t, n);
  }
}
function we(e, t, n, o) {
  if (T(e)) {
    const i = je(e, t, n, o);
    return (
      i &&
        yo(i) &&
        i.catch((s) => {
          kt(s, t, n);
        }),
      i
    );
  }
  const r = [];
  for (let i = 0; i < e.length; i++) r.push(we(e[i], t, n, o));
  return r;
}
function kt(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy,
      c =
        a.NODE_ENV !== "production"
          ? Io[n]
          : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let _ = 0; _ < d.length; _++) if (d[_](e, s, c) === !1) return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      je(u, null, 10, [e, s, c]);
      return;
    }
  }
  Ms(e, n, r, o);
}
function Ms(e, t, n, o = !0) {
  if (a.NODE_ENV !== "production") {
    const r = Io[t];
    if (
      (n && on(n),
      v(`Unhandled error${r ? ` during execution of ${r}` : ""}`),
      n && rn(),
      o)
    )
      throw e;
    console.error(e);
  } else console.error(e);
}
let Lt = !1,
  io = !1;
const ne = [];
let Ce = 0;
const wt = [];
let Me = null,
  ke = 0;
const ui = /* @__PURE__ */ Promise.resolve();
let Po = null;
const Fs = 100;
function Ao(e) {
  const t = Po || ui;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function js(e) {
  let t = Ce + 1,
    n = ne.length;
  for (; t < n; ) {
    const o = (t + n) >>> 1,
      r = ne[o],
      i = Ut(r);
    i < e || (i === e && r.pre) ? (t = o + 1) : (n = o);
  }
  return t;
}
function Dn(e) {
  (!ne.length || !ne.includes(e, Lt && e.allowRecurse ? Ce + 1 : Ce)) &&
    (e.id == null ? ne.push(e) : ne.splice(js(e.id), 0, e), fi());
}
function fi() {
  !Lt && !io && ((io = !0), (Po = ui.then(pi)));
}
function Ls(e) {
  const t = ne.indexOf(e);
  t > Ce && ne.splice(t, 1);
}
function ai(e) {
  C(e)
    ? wt.push(...e)
    : (!Me || !Me.includes(e, e.allowRecurse ? ke + 1 : ke)) && wt.push(e),
    fi();
}
function lr(e, t, n = Lt ? Ce + 1 : 0) {
  for (
    a.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
    n < ne.length;
    n++
  ) {
    const o = ne[n];
    if (o && o.pre) {
      if ((e && o.id !== e.uid) || (a.NODE_ENV !== "production" && Mo(t, o)))
        continue;
      ne.splice(n, 1), n--, o();
    }
  }
}
function di(e) {
  if (wt.length) {
    const t = [...new Set(wt)].sort((n, o) => Ut(n) - Ut(o));
    if (((wt.length = 0), Me)) {
      Me.push(...t);
      return;
    }
    for (
      Me = t,
        a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()),
        ke = 0;
      ke < Me.length;
      ke++
    )
      (a.NODE_ENV !== "production" && Mo(e, Me[ke])) || Me[ke]();
    (Me = null), (ke = 0);
  }
}
const Ut = (e) => (e.id == null ? 1 / 0 : e.id),
  Us = (e, t) => {
    const n = Ut(e) - Ut(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function pi(e) {
  (io = !1),
    (Lt = !0),
    a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()),
    ne.sort(Us);
  const t = a.NODE_ENV !== "production" ? (n) => Mo(e, n) : J;
  try {
    for (Ce = 0; Ce < ne.length; Ce++) {
      const n = ne[Ce];
      if (n && n.active !== !1) {
        if (a.NODE_ENV !== "production" && t(n)) continue;
        je(n, null, 14);
      }
    }
  } finally {
    (Ce = 0),
      (ne.length = 0),
      di(e),
      (Lt = !1),
      (Po = null),
      (ne.length || wt.length) && pi(e);
  }
}
function Mo(e, t) {
  if (!e.has(t)) e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Fs) {
      const o = t.ownerInstance,
        r = o && Ki(o.type);
      return (
        kt(
          `Maximum recursive updates exceeded${
            r ? ` in component <${r}>` : ""
          }. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
          null,
          10
        ),
        !0
      );
    } else e.set(t, n + 1);
  }
}
let ft = !1;
const yt = /* @__PURE__ */ new Set();
a.NODE_ENV !== "production" &&
  (vo().__VUE_HMR_RUNTIME__ = {
    createRecord: kn(hi),
    rerender: kn(Bs),
    reload: kn(ks),
  });
const _t = /* @__PURE__ */ new Map();
function Hs(e) {
  const t = e.type.__hmrId;
  let n = _t.get(t);
  n || (hi(t, e.type), (n = _t.get(t))), n.instances.add(e);
}
function Ks(e) {
  _t.get(e.type.__hmrId).instances.delete(e);
}
function hi(e, t) {
  return _t.has(e)
    ? !1
    : (_t.set(e, {
        initialDef: Pt(t),
        instances: /* @__PURE__ */ new Set(),
      }),
      !0);
}
function Pt(e) {
  return Bi(e) ? e.__vccOpts : e;
}
function Bs(e, t) {
  const n = _t.get(e);
  n &&
    ((n.initialDef.render = t),
    [...n.instances].forEach((o) => {
      t && ((o.render = t), (Pt(o.type).render = t)),
        (o.renderCache = []),
        (ft = !0),
        (o.effect.dirty = !0),
        o.update(),
        (ft = !1);
    }));
}
function ks(e, t) {
  const n = _t.get(e);
  if (!n) return;
  (t = Pt(t)), cr(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const i = Pt(r.type);
    yt.has(i) || (i !== n.initialDef && cr(i, t), yt.add(i)),
      r.appContext.propsCache.delete(r.type),
      r.appContext.emitsCache.delete(r.type),
      r.appContext.optionsCache.delete(r.type),
      r.ceReload
        ? (yt.add(i), r.ceReload(t.styles), yt.delete(i))
        : r.parent
        ? ((r.parent.effect.dirty = !0), Dn(r.parent.update))
        : r.appContext.reload
        ? r.appContext.reload()
        : typeof window < "u"
        ? window.location.reload()
        : console.warn(
            "[HMR] Root or manually mounted instance modified. Full reload required."
          );
  }
  ai(() => {
    for (const r of o) yt.delete(Pt(r.type));
  });
}
function cr(e, t) {
  W(e, t);
  for (const n in e) n !== "__file" && !(n in t) && delete e[n];
}
function kn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o),
        console.warn(
          "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
        );
    }
  };
}
let Se,
  Rt = [],
  so = !1;
function Wt(e, ...t) {
  Se ? Se.emit(e, ...t) : so || Rt.push({ event: e, args: t });
}
function _i(e, t) {
  var n, o;
  (Se = e),
    Se
      ? ((Se.enabled = !0),
        Rt.forEach(({ event: r, args: i }) => Se.emit(r, ...i)),
        (Rt = []))
      : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window <
          "u" && // some envs mock window but not fully
        window.HTMLElement && // also exclude jsdom
        !(
          (o = (n = window.navigator) == null ? void 0 : n.userAgent) != null &&
          o.includes("jsdom")
        )
      ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
          t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
          _i(i, t);
        }),
        setTimeout(() => {
          Se || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (so = !0), (Rt = []));
        }, 3e3))
      : ((so = !0), (Rt = []));
}
function Ws(e, t) {
  Wt("app:init", e, t, {
    Fragment: he,
    Text: qt,
    Comment: _e,
    Static: un,
  });
}
function qs(e) {
  Wt("app:unmount", e);
}
const Gs = /* @__PURE__ */ Fo(
    "component:added"
    /* COMPONENT_ADDED */
  ),
  mi = /* @__PURE__ */ Fo(
    "component:updated"
    /* COMPONENT_UPDATED */
  ),
  zs = /* @__PURE__ */ Fo(
    "component:removed"
    /* COMPONENT_REMOVED */
  ),
  Js = (e) => {
    Se &&
      typeof Se.cleanupBuffer == "function" && // remove the component if it wasn't buffered
      !Se.cleanupBuffer(e) &&
      zs(e);
  };
function Fo(e) {
  return (t) => {
    Wt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Ys = /* @__PURE__ */ gi(
    "perf:start"
    /* PERFORMANCE_START */
  ),
  Xs = /* @__PURE__ */ gi(
    "perf:end"
    /* PERFORMANCE_END */
  );
function gi(e) {
  return (t, n, o) => {
    Wt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Zs(e, t, n) {
  Wt("component:emit", e.appContext.app, e, t, n);
}
function Qs(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || K;
  if (a.NODE_ENV !== "production") {
    const {
      emitsOptions: _,
      propsOptions: [p],
    } = e;
    if (_)
      if (!(t in _))
        (!p || !(nt(t) in p)) &&
          v(
            `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${nt(
              t
            )}" prop.`
          );
      else {
        const y = _[t];
        T(y) &&
          (y(...n) ||
            v(
              `Invalid event arguments: event validation failed for event "${t}".`
            ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"),
    s = i && t.slice(7);
  if (s && s in o) {
    const _ = `${s === "modelValue" ? "model" : s}Modifiers`,
      { number: p, trim: y } = o[_] || K;
    y && (r = n.map((x) => (G(x) ? x.trim() : x))), p && (r = n.map(Ft));
  }
  if (
    (a.NODE_ENV !== "production" && Zs(e, t, r), a.NODE_ENV !== "production")
  ) {
    const _ = t.toLowerCase();
    _ !== t &&
      o[nt(_)] &&
      v(
        `Event "${_}" is emitted in component ${Pn(
          e,
          e.type
        )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${de(
          t
        )}" instead of "${t}".`
      );
  }
  let c,
    u =
      o[(c = nt(t))] || // also try camelCase event handler (#2249)
      o[(c = nt(Fe(t)))];
  !u && i && (u = o[(c = nt(de(t)))]), u && we(u, e, 6, r);
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), we(d, e, 6, r);
  }
}
function Ei(e, t, n = !1) {
  const o = t.emitsCache,
    r = o.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let s = {},
    c = !1;
  if (!T(e)) {
    const u = (d) => {
      const _ = Ei(d, t, !0);
      _ && ((c = !0), W(s, _));
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  return !i && !c
    ? (U(e) && o.set(e, null), null)
    : (C(i) ? i.forEach((u) => (s[u] = null)) : W(s, i),
      U(e) && o.set(e, s),
      s);
}
function Cn(e, t) {
  return !e || !Kt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      A(e, t[0].toLowerCase() + t.slice(1)) || A(e, de(t)) || A(e, t));
}
let ue = null,
  Sn = null;
function pn(e) {
  const t = ue;
  return (ue = e), (Sn = (e && e.type.__scopeId) || null), t;
}
function el(e) {
  Sn = e;
}
function tl() {
  Sn = null;
}
function nl(e, t = ue, n) {
  if (!t || e._n) return e;
  const o = (...r) => {
    o._d && br(-1);
    const i = pn(t);
    let s;
    try {
      s = e(...r);
    } finally {
      pn(i), o._d && br(1);
    }
    return a.NODE_ENV !== "production" && mi(t), s;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
let lo = !1;
function hn() {
  lo = !0;
}
function Wn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: i,
    propsOptions: [s],
    slots: c,
    attrs: u,
    emit: d,
    render: _,
    renderCache: p,
    data: y,
    setupState: x,
    ctx: P,
    inheritAttrs: M,
  } = e;
  let Q, Y;
  const pe = pn(e);
  a.NODE_ENV !== "production" && (lo = !1);
  try {
    if (n.shapeFlag & 4) {
      const z = r || o,
        ge =
          a.NODE_ENV !== "production" && x.__isScriptSetup
            ? new Proxy(z, {
                get(I, re, ie) {
                  return (
                    v(
                      `Property '${String(
                        re
                      )}' was accessed via 'this'. Avoid using 'this' in templates.`
                    ),
                    Reflect.get(I, re, ie)
                  );
                },
              })
            : z;
      (Q = Oe(_.call(ge, z, p, i, x, y, P))), (Y = u);
    } else {
      const z = t;
      a.NODE_ENV !== "production" && u === i && hn(),
        (Q = Oe(
          z.length > 1
            ? z(
                i,
                a.NODE_ENV !== "production"
                  ? {
                      get attrs() {
                        return hn(), u;
                      },
                      slots: c,
                      emit: d,
                    }
                  : { attrs: u, slots: c, emit: d }
              )
            : z(
                i,
                null
                /* we know it doesn't need it */
              )
        )),
        (Y = t.props ? u : ol(u));
    }
  } catch (z) {
    (Mt.length = 0), kt(z, e, 1), (Q = Re(_e));
  }
  let k = Q,
    q;
  if (
    (a.NODE_ENV !== "production" &&
      Q.patchFlag > 0 &&
      Q.patchFlag & 2048 &&
      ([k, q] = Ni(Q)),
    Y && M !== !1)
  ) {
    const z = Object.keys(Y),
      { shapeFlag: ge } = k;
    if (z.length) {
      if (ge & 7) s && z.some(an) && (Y = rl(Y, s)), (k = Ye(k, Y));
      else if (a.NODE_ENV !== "production" && !lo && k.type !== _e) {
        const I = Object.keys(u),
          re = [],
          ie = [];
        for (let $e = 0, Ue = I.length; $e < Ue; $e++) {
          const Ee = I[$e];
          Kt(Ee)
            ? an(Ee) || re.push(Ee[2].toLowerCase() + Ee.slice(3))
            : ie.push(Ee);
        }
        ie.length &&
          v(
            `Extraneous non-props attributes (${ie.join(
              ", "
            )}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
          ),
          re.length &&
            v(
              `Extraneous non-emits event listeners (${re.join(
                ", "
              )}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
            );
      }
    }
  }
  return (
    n.dirs &&
      (a.NODE_ENV !== "production" &&
        !ur(k) &&
        v(
          "Runtime directive used on component with non-element root node. The directives will not function as intended."
        ),
      (k = Ye(k)),
      (k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs)),
    n.transition &&
      (a.NODE_ENV !== "production" &&
        !ur(k) &&
        v(
          "Component inside <Transition> renders non-element root node that cannot be animated."
        ),
      (k.transition = n.transition)),
    a.NODE_ENV !== "production" && q ? q(k) : (Q = k),
    pn(pe),
    Q
  );
}
const Ni = (e) => {
  const t = e.children,
    n = e.dynamicChildren,
    o = jo(t, !1);
  if (o) {
    if (a.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Ni(o);
  } else return [e, void 0];
  const r = t.indexOf(o),
    i = n ? n.indexOf(o) : -1,
    s = (c) => {
      (t[r] = c),
        n &&
          (i > -1
            ? (n[i] = c)
            : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
    };
  return [Oe(o), s];
};
function jo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (Bo(r)) {
      if (r.type !== _e || r.children === "v-if") {
        if (n) return;
        if (
          ((n = r),
          a.NODE_ENV !== "production" &&
            t &&
            n.patchFlag > 0 &&
            n.patchFlag & 2048)
        )
          return jo(n.children);
      }
    } else return;
  }
  return n;
}
const ol = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  rl = (e, t) => {
    const n = {};
    for (const o in e) (!an(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n;
  },
  ur = (e) => e.shapeFlag & 7 || e.type === _e;
function il(e, t, n) {
  const { props: o, children: r, component: i } = e,
    { props: s, children: c, patchFlag: u } = t,
    d = i.emitsOptions;
  if ((a.NODE_ENV !== "production" && (r || c) && ft) || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return o ? fr(o, s, d) : !!s;
    if (u & 8) {
      const _ = t.dynamicProps;
      for (let p = 0; p < _.length; p++) {
        const y = _[p];
        if (s[y] !== o[y] && !Cn(d, y)) return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable)
      ? !0
      : o === s
      ? !1
      : o
      ? s
        ? fr(o, s, d)
        : !0
      : !!s;
  return !1;
}
function fr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Cn(n, i)) return !0;
  }
  return !1;
}
function sl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const ll = Symbol.for("v-ndc"),
  cl = (e) => e.__isSuspense;
function ul(e, t) {
  t && t.pendingBranch
    ? C(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ai(e);
}
const fl = Symbol.for("v-scx"),
  al = () => {
    {
      const e = ln(fl);
      return (
        e ||
          (a.NODE_ENV !== "production" &&
            v(
              "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
            )),
        e
      );
    }
  },
  tn = {};
function qn(e, t, n) {
  return (
    a.NODE_ENV !== "production" &&
      !T(t) &&
      v(
        "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
      ),
    yi(e, t, n)
  );
}
function yi(
  e,
  t,
  { immediate: n, deep: o, flush: r, once: i, onTrack: s, onTrigger: c } = K
) {
  if (t && i) {
    const I = t;
    t = (...re) => {
      I(...re), ge();
    };
  }
  a.NODE_ENV !== "production" &&
    o !== void 0 &&
    typeof o == "number" &&
    v(
      'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
    ),
    a.NODE_ENV !== "production" &&
      !t &&
      (n !== void 0 &&
        v(
          'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
        ),
      o !== void 0 &&
        v(
          'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
        ),
      i !== void 0 &&
        v(
          'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
        ));
  const u = (I) => {
      v(
        "Invalid watch source: ",
        I,
        "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
      );
    },
    d = ee,
    _ = (I) =>
      o === !0
        ? I
        : // for deep: false, only traverse root-level properties
          rt(I, o === !1 ? 1 : void 0);
  let p,
    y = !1,
    x = !1;
  if (
    (oe(e)
      ? ((p = () => e.value), (y = vt(e)))
      : ct(e)
      ? ((p = () => _(e)), (y = !0))
      : C(e)
      ? ((x = !0),
        (y = e.some((I) => ct(I) || vt(I))),
        (p = () =>
          e.map((I) => {
            if (oe(I)) return I.value;
            if (ct(I)) return _(I);
            if (T(I)) return je(I, d, 2);
            a.NODE_ENV !== "production" && u(I);
          })))
      : T(e)
      ? t
        ? (p = () => je(e, d, 2))
        : (p = () => (P && P(), we(e, d, 3, [M])))
      : ((p = J), a.NODE_ENV !== "production" && u(e)),
    t && o)
  ) {
    const I = p;
    p = () => rt(I());
  }
  let P,
    M = (I) => {
      P = q.onStop = () => {
        je(I, d, 4), (P = q.onStop = void 0);
      };
    },
    Q;
  if ($n)
    if (
      ((M = J),
      t ? n && we(t, d, 3, [p(), x ? [] : void 0, M]) : p(),
      r === "sync")
    ) {
      const I = al();
      Q = I.__watcherHandles || (I.__watcherHandles = []);
    } else return J;
  let Y = x ? new Array(e.length).fill(tn) : tn;
  const pe = () => {
    if (!(!q.active || !q.dirty))
      if (t) {
        const I = q.run();
        (o || y || (x ? I.some((re, ie) => pt(re, Y[ie])) : pt(I, Y))) &&
          (P && P(),
          we(t, d, 3, [
            I,
            // pass undefined as the old value when it's changed for the first time
            Y === tn ? void 0 : x && Y[0] === tn ? [] : Y,
            M,
          ]),
          (Y = I));
      } else q.run();
  };
  pe.allowRecurse = !!t;
  let k;
  r === "sync"
    ? (k = pe)
    : r === "post"
    ? (k = () => ae(pe, d && d.suspense))
    : ((pe.pre = !0), d && (pe.id = d.uid), (k = () => Dn(pe)));
  const q = new xo(p, J, k),
    z = ss(),
    ge = () => {
      q.stop(), z && No(z.effects, q);
    };
  return (
    a.NODE_ENV !== "production" && ((q.onTrack = s), (q.onTrigger = c)),
    t
      ? n
        ? pe()
        : (Y = q.run())
      : r === "post"
      ? ae(q.run.bind(q), d && d.suspense)
      : q.run(),
    Q && Q.push(ge),
    ge
  );
}
function dl(e, t, n) {
  const o = this.proxy,
    r = G(e) ? (e.includes(".") ? bi(o, e) : () => o[e]) : e.bind(o, o);
  let i;
  T(t) ? (i = t) : ((i = t.handler), (n = t));
  const s = Gt(this),
    c = yi(r, i.bind(o), n);
  return s(), c;
}
function bi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++) o = o[n[r]];
    return o;
  };
}
function rt(e, t, n = 0, o) {
  if (!U(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((o = o || /* @__PURE__ */ new Set()), o.has(e))) return e;
  if ((o.add(e), oe(e))) rt(e.value, t, n, o);
  else if (C(e)) for (let r = 0; r < e.length; r++) rt(e[r], t, n, o);
  else if (yn(e) || it(e))
    e.forEach((r) => {
      rt(r, t, n, o);
    });
  else if (Hr(e)) for (const r in e) rt(e[r], t, n, o);
  return e;
}
function Oi(e) {
  Gi(e) && v("Do not use built-in directive ids as custom directive id: " + e);
}
function ar(e, t) {
  if (ue === null)
    return (
      a.NODE_ENV !== "production" &&
        v("withDirectives can only be used inside render functions."),
      e
    );
  const n = In(ue) || ue.proxy,
    o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, s, c, u = K] = t[r];
    i &&
      (T(i) &&
        (i = {
          mounted: i,
          updated: i,
        }),
      i.deep && rt(s),
      o.push({
        dir: i,
        instance: n,
        value: s,
        oldValue: void 0,
        arg: c,
        modifiers: u,
      }));
  }
  return e;
}
function et(e, t, n, o) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const c = r[s];
    i && (c.oldValue = i[s].value);
    let u = c.dir[o];
    u && (Xe(), we(u, n, 8, [e.el, c, e, t]), Ze());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function pl(e, t) {
  return T(e)
    ? // #8326: extend call and options.name access are considered side-effects
      // by Rollup, so we have to wrap it in a pure-annotated IIFE.
      W({ name: e.name }, t, { setup: e })
    : e;
}
const sn = (e) => !!e.type.__asyncLoader,
  Lo = (e) => e.type.__isKeepAlive;
function hl(e, t) {
  vi(e, "a", t);
}
function _l(e, t) {
  vi(e, "da", t);
}
function vi(e, t, n = ee) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Tn(t, o, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      Lo(r.parent.vnode) && ml(o, t, n, r), (r = r.parent);
  }
}
function ml(e, t, n, o) {
  const r = Tn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  wi(() => {
    No(o[t], r);
  }, n);
}
function Tn(e, t, n = ee, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...s) => {
          if (n.isUnmounted) return;
          Xe();
          const c = Gt(n),
            u = we(t, n, e, s);
          return c(), Ze(), u;
        });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (a.NODE_ENV !== "production") {
    const r = nt(Io[e].replace(/ hook$/, ""));
    v(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Le =
    (e) =>
    (t, n = ee) =>
      // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
      (!$n || e === "sp") && Tn(e, (...o) => t(...o), n),
  gl = Le("bm"),
  El = Le("m"),
  Nl = Le("bu"),
  yl = Le("u"),
  bl = Le("bum"),
  wi = Le("um"),
  Ol = Le("sp"),
  vl = Le("rtg"),
  wl = Le("rtc");
function Vl(e, t = ee) {
  Tn("ec", e, t);
}
function Gn(e, t, n, o) {
  let r;
  const i = n && n[o];
  if (C(e) || G(e)) {
    r = new Array(e.length);
    for (let s = 0, c = e.length; s < c; s++)
      r[s] = t(e[s], s, void 0, i && i[s]);
  } else if (typeof e == "number") {
    a.NODE_ENV !== "production" &&
      !Number.isInteger(e) &&
      v(`The v-for range expect an integer value but got ${e}.`),
      (r = new Array(e));
    for (let s = 0; s < e; s++) r[s] = t(s + 1, s, void 0, i && i[s]);
  } else if (U(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (s, c) => t(s, c, void 0, i && i[c]));
    else {
      const s = Object.keys(e);
      r = new Array(s.length);
      for (let c = 0, u = s.length; c < u; c++) {
        const d = s[c];
        r[c] = t(e[d], d, c, i && i[c]);
      }
    }
  else r = [];
  return n && (n[o] = r), r;
}
const co = (e) => (e ? (Ui(e) ? In(e) || e.proxy : co(e.parent)) : null),
  at =
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ W(/* @__PURE__ */ Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => (a.NODE_ENV !== "production" ? bt(e.props) : e.props),
      $attrs: (e) => (a.NODE_ENV !== "production" ? bt(e.attrs) : e.attrs),
      $slots: (e) => (a.NODE_ENV !== "production" ? bt(e.slots) : e.slots),
      $refs: (e) => (a.NODE_ENV !== "production" ? bt(e.refs) : e.refs),
      $parent: (e) => co(e.parent),
      $root: (e) => co(e.root),
      $emit: (e) => e.emit,
      $options: (e) => Ho(e),
      $forceUpdate: (e) =>
        e.f ||
        (e.f = () => {
          (e.effect.dirty = !0), Dn(e.update);
        }),
      $nextTick: (e) => e.n || (e.n = Ao.bind(e.proxy)),
      $watch: (e) => dl.bind(e),
    }),
  Uo = (e) => e === "_" || e === "$",
  zn = (e, t) => e !== K && !e.__isScriptSetup && A(e, t),
  Vi = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: o,
        data: r,
        props: i,
        accessCache: s,
        type: c,
        appContext: u,
      } = e;
      if (a.NODE_ENV !== "production" && t === "__isVue") return !0;
      let d;
      if (t[0] !== "$") {
        const x = s[t];
        if (x !== void 0)
          switch (x) {
            case 1:
              return o[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (zn(o, t)) return (s[t] = 1), o[t];
          if (r !== K && A(r, t)) return (s[t] = 2), r[t];
          if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (d = e.propsOptions[0]) &&
            A(d, t)
          )
            return (s[t] = 3), i[t];
          if (n !== K && A(n, t)) return (s[t] = 4), n[t];
          uo && (s[t] = 0);
        }
      }
      const _ = at[t];
      let p, y;
      if (_)
        return (
          t === "$attrs"
            ? (te(e, "get", t), a.NODE_ENV !== "production" && hn())
            : a.NODE_ENV !== "production" && t === "$slots" && te(e, "get", t),
          _(e)
        );
      if (
        // css module (injected by vue-loader)
        (p = c.__cssModules) &&
        (p = p[t])
      )
        return p;
      if (n !== K && A(n, t)) return (s[t] = 4), n[t];
      if (
        // global properties
        ((y = u.config.globalProperties), A(y, t))
      )
        return y[t];
      a.NODE_ENV !== "production" &&
        ue &&
        (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
          // to infinite warning loop
          t.indexOf("__v") !== 0) &&
        (r !== K && Uo(t[0]) && A(r, t)
          ? v(
              `Property ${JSON.stringify(
                t
              )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
            )
          : e === ue &&
            v(
              `Property ${JSON.stringify(
                t
              )} was accessed during render but is not defined on instance.`
            ));
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: r, ctx: i } = e;
      return zn(r, t)
        ? ((r[t] = n), !0)
        : a.NODE_ENV !== "production" && r.__isScriptSetup && A(r, t)
        ? (v(`Cannot mutate <script setup> binding "${t}" from Options API.`),
          !1)
        : o !== K && A(o, t)
        ? ((o[t] = n), !0)
        : A(e.props, t)
        ? (a.NODE_ENV !== "production" &&
            v(`Attempting to mutate prop "${t}". Props are readonly.`),
          !1)
        : t[0] === "$" && t.slice(1) in e
        ? (a.NODE_ENV !== "production" &&
            v(
              `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
            ),
          !1)
        : (a.NODE_ENV !== "production" &&
          t in e.appContext.config.globalProperties
            ? Object.defineProperty(i, t, {
                enumerable: !0,
                configurable: !0,
                value: n,
              })
            : (i[t] = n),
          !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: r,
          propsOptions: i,
        },
      },
      s
    ) {
      let c;
      return (
        !!n[s] ||
        (e !== K && A(e, s)) ||
        zn(t, s) ||
        ((c = i[0]) && A(c, s)) ||
        A(o, s) ||
        A(at, s) ||
        A(r.config.globalProperties, s)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : A(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
a.NODE_ENV !== "production" &&
  (Vi.ownKeys = (e) => (
    v(
      "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
    ),
    Reflect.ownKeys(e)
  ));
function xl(e) {
  const t = {};
  return (
    Object.defineProperty(t, "_", {
      configurable: !0,
      enumerable: !1,
      get: () => e,
    }),
    Object.keys(at).forEach((n) => {
      Object.defineProperty(t, n, {
        configurable: !0,
        enumerable: !1,
        get: () => at[n](e),
        // intercepted by the proxy so no need for implementation,
        // but needed to prevent set errors
        set: J,
      });
    }),
    t
  );
}
function Dl(e) {
  const {
    ctx: t,
    propsOptions: [n],
  } = e;
  n &&
    Object.keys(n).forEach((o) => {
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => e.props[o],
        set: J,
      });
    });
}
function Cl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys($(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Uo(o[0])) {
        v(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: J,
      });
    }
  });
}
function dr(e) {
  return C(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function Sl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n]
      ? v(`${t} property "${n}" is already defined in ${e[n]}.`)
      : (e[n] = t);
  };
}
let uo = !0;
function Tl(e) {
  const t = Ho(e),
    n = e.proxy,
    o = e.ctx;
  (uo = !1), t.beforeCreate && pr(t.beforeCreate, e, "bc");
  const {
      // state
      data: r,
      computed: i,
      methods: s,
      watch: c,
      provide: u,
      inject: d,
      // lifecycle
      created: _,
      beforeMount: p,
      mounted: y,
      beforeUpdate: x,
      updated: P,
      activated: M,
      deactivated: Q,
      beforeDestroy: Y,
      beforeUnmount: pe,
      destroyed: k,
      unmounted: q,
      render: z,
      renderTracked: ge,
      renderTriggered: I,
      errorCaptured: re,
      serverPrefetch: ie,
      // public API
      expose: $e,
      inheritAttrs: Ue,
      // assets
      components: Ee,
      directives: zt,
      filters: qo,
    } = t,
    He = a.NODE_ENV !== "production" ? Sl() : null;
  if (a.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L) for (const j in L) He("Props", j);
  }
  if ((d && Rl(d, o, He), s))
    for (const L in s) {
      const j = s[L];
      T(j)
        ? (a.NODE_ENV !== "production"
            ? Object.defineProperty(o, L, {
                value: j.bind(n),
                configurable: !0,
                enumerable: !0,
                writable: !0,
              })
            : (o[L] = j.bind(n)),
          a.NODE_ENV !== "production" && He("Methods", L))
        : a.NODE_ENV !== "production" &&
          v(
            `Method "${L}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
          );
    }
  if (r) {
    a.NODE_ENV !== "production" &&
      !T(r) &&
      v(
        "The data option must be a function. Plain object usage is no longer supported."
      );
    const L = r.call(n, n);
    if (
      (a.NODE_ENV !== "production" &&
        yo(L) &&
        v(
          "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
        ),
      !U(L))
    )
      a.NODE_ENV !== "production" && v("data() should return an object.");
    else if (((e.data = To(L)), a.NODE_ENV !== "production"))
      for (const j in L)
        He("Data", j),
          Uo(j[0]) ||
            Object.defineProperty(o, j, {
              configurable: !0,
              enumerable: !0,
              get: () => L[j],
              set: J,
            });
  }
  if (((uo = !0), i))
    for (const L in i) {
      const j = i[L],
        Ve = T(j) ? j.bind(n, n) : T(j.get) ? j.get.bind(n, n) : J;
      a.NODE_ENV !== "production" &&
        Ve === J &&
        v(`Computed property "${L}" has no getter.`);
      const Fn =
          !T(j) && T(j.set)
            ? j.set.bind(n)
            : a.NODE_ENV !== "production"
            ? () => {
                v(
                  `Write operation failed: computed property "${L}" is readonly.`
                );
              }
            : J,
        Dt = gc({
          get: Ve,
          set: Fn,
        });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Dt.value,
        set: (mt) => (Dt.value = mt),
      }),
        a.NODE_ENV !== "production" && He("Computed", L);
    }
  if (c) for (const L in c) xi(c[L], o, n, L);
  if (u) {
    const L = T(u) ? u.call(n) : u;
    Reflect.ownKeys(L).forEach((j) => {
      Fl(j, L[j]);
    });
  }
  _ && pr(_, e, "c");
  function fe(L, j) {
    C(j) ? j.forEach((Ve) => L(Ve.bind(n))) : j && L(j.bind(n));
  }
  if (
    (fe(gl, p),
    fe(El, y),
    fe(Nl, x),
    fe(yl, P),
    fe(hl, M),
    fe(_l, Q),
    fe(Vl, re),
    fe(wl, ge),
    fe(vl, I),
    fe(bl, pe),
    fe(wi, q),
    fe(Ol, ie),
    C($e))
  )
    if ($e.length) {
      const L = e.exposed || (e.exposed = {});
      $e.forEach((j) => {
        Object.defineProperty(L, j, {
          get: () => n[j],
          set: (Ve) => (n[j] = Ve),
        });
      });
    } else e.exposed || (e.exposed = {});
  z && e.render === J && (e.render = z),
    Ue != null && (e.inheritAttrs = Ue),
    Ee && (e.components = Ee),
    zt && (e.directives = zt);
}
function Rl(e, t, n = J) {
  C(e) && (e = fo(e));
  for (const o in e) {
    const r = e[o];
    let i;
    U(r)
      ? "default" in r
        ? (i = ln(r.from || o, r.default, !0))
        : (i = ln(r.from || o))
      : (i = ln(r)),
      oe(i)
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (s) => (i.value = s),
          })
        : (t[o] = i),
      a.NODE_ENV !== "production" && n("Inject", o);
  }
}
function pr(e, t, n) {
  we(C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function xi(e, t, n, o) {
  const r = o.includes(".") ? bi(n, o) : () => n[o];
  if (G(e)) {
    const i = t[e];
    T(i)
      ? qn(r, i)
      : a.NODE_ENV !== "production" &&
        v(`Invalid watch handler specified by key "${e}"`, i);
  } else if (T(e)) qn(r, e.bind(n));
  else if (U(e))
    if (C(e)) e.forEach((i) => xi(i, t, n, o));
    else {
      const i = T(e.handler) ? e.handler.bind(n) : t[e.handler];
      T(i)
        ? qn(r, i, e)
        : a.NODE_ENV !== "production" &&
          v(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else a.NODE_ENV !== "production" && v(`Invalid watch option: "${o}"`, e);
}
function Ho(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    c = i.get(t);
  let u;
  return (
    c
      ? (u = c)
      : !r.length && !n && !o
      ? (u = t)
      : ((u = {}), r.length && r.forEach((d) => _n(u, d, s, !0)), _n(u, t, s)),
    U(t) && i.set(t, u),
    u
  );
}
function _n(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && _n(e, i, n, !0), r && r.forEach((s) => _n(e, s, n, !0));
  for (const s in t)
    if (o && s === "expose")
      a.NODE_ENV !== "production" &&
        v(
          '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
        );
    else {
      const c = $l[s] || (n && n[s]);
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const $l = {
  data: hr,
  props: _r,
  emits: _r,
  // objects
  methods: $t,
  computed: $t,
  // lifecycle
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  // assets
  components: $t,
  directives: $t,
  // watch
  watch: Pl,
  // provide / inject
  provide: hr,
  inject: Il,
};
function hr(e, t) {
  return t
    ? e
      ? function () {
          return W(
            T(e) ? e.call(this, this) : e,
            T(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Il(e, t) {
  return $t(fo(e), fo(t));
}
function fo(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $t(e, t) {
  return e ? W(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _r(e, t) {
  return e
    ? C(e) && C(t)
      ? [.../* @__PURE__ */ new Set([...e, ...t])]
      : W(/* @__PURE__ */ Object.create(null), dr(e), dr(t ?? {}))
    : t;
}
function Pl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = W(/* @__PURE__ */ Object.create(null), e);
  for (const o in t) n[o] = le(e[o], t[o]);
  return n;
}
function Di() {
  return {
    app: null,
    config: {
      isNativeTag: Lr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap(),
  };
}
let Al = 0;
function Ml(e, t) {
  return function (o, r = null) {
    T(o) || (o = W({}, o)),
      r != null &&
        !U(r) &&
        (a.NODE_ENV !== "production" &&
          v("root props passed to app.mount() must be an object."),
        (r = null));
    const i = Di(),
      s = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = (i.app = {
      _uid: Al++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Vr,
      get config() {
        return i.config;
      },
      set config(d) {
        a.NODE_ENV !== "production" &&
          v(
            "app.config cannot be replaced. Modify individual options instead."
          );
      },
      use(d, ..._) {
        return (
          s.has(d)
            ? a.NODE_ENV !== "production" &&
              v("Plugin has already been applied to target app.")
            : d && T(d.install)
            ? (s.add(d), d.install(u, ..._))
            : T(d)
            ? (s.add(d), d(u, ..._))
            : a.NODE_ENV !== "production" &&
              v(
                'A plugin must either be a function or an object with an "install" function.'
              ),
          u
        );
      },
      mixin(d) {
        return (
          i.mixins.includes(d)
            ? a.NODE_ENV !== "production" &&
              v(
                "Mixin has already been applied to target app" +
                  (d.name ? `: ${d.name}` : "")
              )
            : i.mixins.push(d),
          u
        );
      },
      component(d, _) {
        return (
          a.NODE_ENV !== "production" && mo(d, i.config),
          _
            ? (a.NODE_ENV !== "production" &&
                i.components[d] &&
                v(
                  `Component "${d}" has already been registered in target app.`
                ),
              (i.components[d] = _),
              u)
            : i.components[d]
        );
      },
      directive(d, _) {
        return (
          a.NODE_ENV !== "production" && Oi(d),
          _
            ? (a.NODE_ENV !== "production" &&
                i.directives[d] &&
                v(
                  `Directive "${d}" has already been registered in target app.`
                ),
              (i.directives[d] = _),
              u)
            : i.directives[d]
        );
      },
      mount(d, _, p) {
        if (c)
          a.NODE_ENV !== "production" &&
            v(
              "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
            );
        else {
          a.NODE_ENV !== "production" &&
            d.__vue_app__ &&
            v(
              "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
            );
          const y = Re(o, r);
          return (
            (y.appContext = i),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            a.NODE_ENV !== "production" &&
              (i.reload = () => {
                e(Ye(y), d, p);
              }),
            _ && t ? t(y, d) : e(y, d, p),
            (c = !0),
            (u._container = d),
            (d.__vue_app__ = u),
            a.NODE_ENV !== "production" &&
              ((u._instance = y.component), Ws(u, Vr)),
            In(y.component) || y.component.proxy
          );
        }
      },
      unmount() {
        c
          ? (e(null, u._container),
            a.NODE_ENV !== "production" && ((u._instance = null), qs(u)),
            delete u._container.__vue_app__)
          : a.NODE_ENV !== "production" &&
            v("Cannot unmount an app that is not mounted.");
      },
      provide(d, _) {
        return (
          a.NODE_ENV !== "production" &&
            d in i.provides &&
            v(
              `App already provides property with key "${String(
                d
              )}". It will be overwritten with the new value.`
            ),
          (i.provides[d] = _),
          u
        );
      },
      runWithContext(d) {
        const _ = At;
        At = u;
        try {
          return d();
        } finally {
          At = _;
        }
      },
    });
    return u;
  };
}
let At = null;
function Fl(e, t) {
  if (!ee)
    a.NODE_ENV !== "production" &&
      v("provide() can only be used inside setup().");
  else {
    let n = ee.provides;
    const o = ee.parent && ee.parent.provides;
    o === n && (n = ee.provides = Object.create(o)), (n[e] = t);
  }
}
function ln(e, t, n = !1) {
  const o = ee || ue;
  if (o || At) {
    const r = o
      ? o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
      : At._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && T(t) ? t.call(o && o.proxy) : t;
    a.NODE_ENV !== "production" && v(`injection "${String(e)}" not found.`);
  } else
    a.NODE_ENV !== "production" &&
      v("inject() can only be used inside setup() or functional components.");
}
function jl(e, t, n, o = !1) {
  const r = {},
    i = {};
  dn(i, Rn, 1),
    (e.propsDefaults = /* @__PURE__ */ Object.create(null)),
    Ci(e, t, r, i);
  for (const s in e.propsOptions[0]) s in r || (r[s] = void 0);
  a.NODE_ENV !== "production" && Ti(t || {}, r, e),
    n
      ? (e.props = o ? r : xs(r))
      : e.type.props
      ? (e.props = r)
      : (e.props = i),
    (e.attrs = i);
}
function Ll(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ul(e, t, n, o) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: s },
    } = e,
    c = $(r),
    [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(a.NODE_ENV !== "production" && Ll(e)) &&
    (o || s > 0) &&
    !(s & 16)
  ) {
    if (s & 8) {
      const _ = e.vnode.dynamicProps;
      for (let p = 0; p < _.length; p++) {
        let y = _[p];
        if (Cn(e.emitsOptions, y)) continue;
        const x = t[y];
        if (u)
          if (A(i, y)) x !== i[y] && ((i[y] = x), (d = !0));
          else {
            const P = Fe(y);
            r[P] = ao(u, c, P, x, e, !1);
          }
        else x !== i[y] && ((i[y] = x), (d = !0));
      }
    }
  } else {
    Ci(e, t, r, i) && (d = !0);
    let _;
    for (const p in c)
      (!t || // for camelCase
        (!A(t, p) && // it's possible the original props was passed in as kebab-case
          // and converted to camelCase (#955)
          ((_ = de(p)) === p || !A(t, _)))) &&
        (u
          ? n && // for camelCase
            (n[p] !== void 0 || // for kebab-case
              n[_] !== void 0) &&
            (r[p] = ao(u, c, p, void 0, e, !0))
          : delete r[p]);
    if (i !== c) for (const p in i) (!t || !A(t, p)) && (delete i[p], (d = !0));
  }
  d && Te(e, "set", "$attrs"), a.NODE_ENV !== "production" && Ti(t || {}, r, e);
}
function Ci(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1,
    c;
  if (t)
    for (let u in t) {
      if (It(u)) continue;
      const d = t[u];
      let _;
      r && A(r, (_ = Fe(u)))
        ? !i || !i.includes(_)
          ? (n[_] = d)
          : ((c || (c = {}))[_] = d)
        : Cn(e.emitsOptions, u) ||
          ((!(u in o) || d !== o[u]) && ((o[u] = d), (s = !0)));
    }
  if (i) {
    const u = $(n),
      d = c || K;
    for (let _ = 0; _ < i.length; _++) {
      const p = i[_];
      n[p] = ao(r, u, p, d[p], e, !A(d, p));
    }
  }
  return s;
}
function ao(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const c = A(s, "default");
    if (c && o === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && T(u)) {
        const { propsDefaults: d } = r;
        if (n in d) o = d[n];
        else {
          const _ = Gt(r);
          (o = d[n] = u.call(null, t)), _();
        }
      } else o = u;
    }
    s[0] &&
    /* shouldCast */
      (i && !c
        ? (o = !1)
        : s[1] &&
          /* shouldCastTrue */
          (o === "" || o === de(n)) &&
          (o = !0));
  }
  return o;
}
function Si(e, t, n = !1) {
  const o = t.propsCache,
    r = o.get(e);
  if (r) return r;
  const i = e.props,
    s = {},
    c = [];
  let u = !1;
  if (!T(e)) {
    const _ = (p) => {
      u = !0;
      const [y, x] = Si(p, t, !0);
      W(s, y), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(_),
      e.extends && _(e.extends),
      e.mixins && e.mixins.forEach(_);
  }
  if (!i && !u) return U(e) && o.set(e, Ot), Ot;
  if (C(i))
    for (let _ = 0; _ < i.length; _++) {
      a.NODE_ENV !== "production" &&
        !G(i[_]) &&
        v("props must be strings when using array syntax.", i[_]);
      const p = Fe(i[_]);
      mr(p) && (s[p] = K);
    }
  else if (i) {
    a.NODE_ENV !== "production" && !U(i) && v("invalid props options", i);
    for (const _ in i) {
      const p = Fe(_);
      if (mr(p)) {
        const y = i[_],
          x = (s[p] = C(y) || T(y) ? { type: y } : W({}, y));
        if (x) {
          const P = Er(Boolean, x.type),
            M = Er(String, x.type);
          (x[0] = P > -1),
          /* shouldCast */
            (x[1] = M < 0 || P < M),
            /* shouldCastTrue */
            (P > -1 || A(x, "default")) && c.push(p);
        }
      }
    }
  }
  const d = [s, c];
  return U(e) && o.set(e, d), d;
}
function mr(e) {
  return e[0] !== "$" && !It(e)
    ? !0
    : (a.NODE_ENV !== "production" &&
        v(`Invalid prop name: "${e}" is a reserved property.`),
      !1);
}
function po(e) {
  return e === null
    ? "null"
    : typeof e == "function"
    ? e.name || ""
    : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function gr(e, t) {
  return po(e) === po(t);
}
function Er(e, t) {
  return C(t) ? t.findIndex((n) => gr(n, e)) : T(t) && gr(t, e) ? 0 : -1;
}
function Ti(e, t, n) {
  const o = $(t),
    r = n.propsOptions[0];
  for (const i in r) {
    let s = r[i];
    s != null &&
      Hl(
        i,
        o[i],
        s,
        a.NODE_ENV !== "production" ? bt(o) : o,
        !A(e, i) && !A(e, de(i))
      );
  }
}
function Hl(e, t, n, o, r) {
  const { type: i, required: s, validator: c, skipCheck: u } = n;
  if (s && r) {
    v('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !u) {
      let d = !1;
      const _ = C(i) ? i : [i],
        p = [];
      for (let y = 0; y < _.length && !d; y++) {
        const { valid: x, expectedType: P } = Bl(t, _[y]);
        p.push(P || ""), (d = x);
      }
      if (!d) {
        v(kl(e, t, p));
        return;
      }
    }
    c &&
      !c(t, o) &&
      v('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Kl = /* @__PURE__ */ xt("String,Number,Boolean,Function,Symbol,BigInt");
function Bl(e, t) {
  let n;
  const o = po(t);
  if (Kl(o)) {
    const r = typeof e;
    (n = r === o.toLowerCase()), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object"
      ? (n = U(e))
      : o === "Array"
      ? (n = C(e))
      : o === "null"
      ? (n = e === null)
      : (n = e instanceof t);
  return {
    valid: n,
    expectedType: o,
  };
}
function kl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n
    .map(On)
    .join(" | ")}`;
  const r = n[0],
    i = bo(t),
    s = Nr(t, r),
    c = Nr(t, i);
  return (
    n.length === 1 && yr(r) && !Wl(r, i) && (o += ` with value ${s}`),
    (o += `, got ${i} `),
    yr(i) && (o += `with value ${c}.`),
    o
  );
}
function Nr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function yr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Wl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ri = (e) => e[0] === "_" || e === "$stable",
  Ko = (e) => (C(e) ? e.map(Oe) : [Oe(e)]),
  ql = (e, t, n) => {
    if (t._n) return t;
    const o = nl(
      (...r) => (
        a.NODE_ENV !== "production" &&
          ee &&
          (!n || n.root === ee.root) &&
          v(
            `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
          ),
        Ko(t(...r))
      ),
      n
    );
    return (o._c = !1), o;
  },
  $i = (e, t, n) => {
    const o = e._ctx;
    for (const r in e) {
      if (Ri(r)) continue;
      const i = e[r];
      if (T(i)) t[r] = ql(r, i, o);
      else if (i != null) {
        a.NODE_ENV !== "production" &&
          v(
            `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
          );
        const s = Ko(i);
        t[r] = () => s;
      }
    }
  },
  Ii = (e, t) => {
    a.NODE_ENV !== "production" &&
      !Lo(e.vnode) &&
      v(
        "Non-function value encountered for default slot. Prefer function slots for better performance."
      );
    const n = Ko(t);
    e.slots.default = () => n;
  },
  Gl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = $(t)), dn(t, "_", n)) : $i(t, (e.slots = {}));
    } else (e.slots = {}), t && Ii(e, t);
    dn(e.slots, Rn, 1);
  },
  zl = (e, t, n) => {
    const { vnode: o, slots: r } = e;
    let i = !0,
      s = K;
    if (o.shapeFlag & 32) {
      const c = t._;
      c
        ? a.NODE_ENV !== "production" && ft
          ? (W(r, t), Te(e, "set", "$slots"))
          : n && c === 1
          ? (i = !1)
          : (W(r, t), !n && c === 1 && delete r._)
        : ((i = !t.$stable), $i(t, r)),
        (s = t);
    } else t && (Ii(e, t), (s = { default: 1 }));
    if (i) for (const c in r) !Ri(c) && s[c] == null && delete r[c];
  };
function ho(e, t, n, o, r = !1) {
  if (C(e)) {
    e.forEach((y, x) => ho(y, t && (C(t) ? t[x] : t), n, o, r));
    return;
  }
  if (sn(o) && !r) return;
  const i = o.shapeFlag & 4 ? In(o.component) || o.component.proxy : o.el,
    s = r ? null : i,
    { i: c, r: u } = e;
  if (a.NODE_ENV !== "production" && !c) {
    v(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r,
    _ = c.refs === K ? (c.refs = {}) : c.refs,
    p = c.setupState;
  if (
    (d != null &&
      d !== u &&
      (G(d)
        ? ((_[d] = null), A(p, d) && (p[d] = null))
        : oe(d) && (d.value = null)),
    T(u))
  )
    je(u, c, 12, [s, _]);
  else {
    const y = G(u),
      x = oe(u);
    if (y || x) {
      const P = () => {
        if (e.f) {
          const M = y ? (A(p, u) ? p[u] : _[u]) : u.value;
          r
            ? C(M) && No(M, i)
            : C(M)
            ? M.includes(i) || M.push(i)
            : y
            ? ((_[u] = [i]), A(p, u) && (p[u] = _[u]))
            : ((u.value = [i]), e.k && (_[e.k] = u.value));
        } else
          y
            ? ((_[u] = s), A(p, u) && (p[u] = s))
            : x
            ? ((u.value = s), e.k && (_[e.k] = s))
            : a.NODE_ENV !== "production" &&
              v("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? ((P.id = -1), ae(P, n)) : P();
    } else
      a.NODE_ENV !== "production" &&
        v("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let St, Ge;
function Pe(e, t) {
  e.appContext.config.performance && mn() && Ge.mark(`vue-${t}-${e.uid}`),
    a.NODE_ENV !== "production" && Ys(e, t, mn() ? Ge.now() : Date.now());
}
function Ae(e, t) {
  if (e.appContext.config.performance && mn()) {
    const n = `vue-${t}-${e.uid}`,
      o = n + ":end";
    Ge.mark(o),
      Ge.measure(`<${Pn(e, e.type)}> ${t}`, n, o),
      Ge.clearMarks(n),
      Ge.clearMarks(o);
  }
  a.NODE_ENV !== "production" && Xs(e, t, mn() ? Ge.now() : Date.now());
}
function mn() {
  return (
    St !== void 0 ||
      (typeof window < "u" && window.performance
        ? ((St = !0), (Ge = window.performance))
        : (St = !1)),
    St
  );
}
function Jl() {
  const e = [];
  if (a.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${
        t ? "are" : "is"
      } not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ae = ul;
function Yl(e) {
  return Xl(e);
}
function Xl(e, t) {
  Jl();
  const n = vo();
  (n.__VUE__ = !0),
    a.NODE_ENV !== "production" && _i(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
      insert: o,
      remove: r,
      patchProp: i,
      createElement: s,
      createText: c,
      createComment: u,
      setText: d,
      setElementText: _,
      parentNode: p,
      nextSibling: y,
      setScopeId: x = J,
      insertStaticContent: P,
    } = e,
    M = (
      l,
      f,
      h,
      m = null,
      g = null,
      b = null,
      w = void 0,
      N = null,
      O = a.NODE_ENV !== "production" && ft ? !1 : !!f.dynamicChildren
    ) => {
      if (l === f) return;
      l && !Tt(l, f) && ((m = Jt(l)), Ke(l, g, b, !0), (l = null)),
        f.patchFlag === -2 && ((O = !1), (f.dynamicChildren = null));
      const { type: E, ref: V, shapeFlag: S } = f;
      switch (E) {
        case qt:
          Q(l, f, h, m);
          break;
        case _e:
          Y(l, f, h, m);
          break;
        case un:
          l == null
            ? pe(f, h, m, w)
            : a.NODE_ENV !== "production" && k(l, f, h, w);
          break;
        case he:
          zt(l, f, h, m, g, b, w, N, O);
          break;
        default:
          S & 1
            ? ge(l, f, h, m, g, b, w, N, O)
            : S & 6
            ? qo(l, f, h, m, g, b, w, N, O)
            : S & 64 || S & 128
            ? E.process(l, f, h, m, g, b, w, N, O, gt)
            : a.NODE_ENV !== "production" &&
              v("Invalid VNode type:", E, `(${typeof E})`);
      }
      V != null && g && ho(V, l && l.ref, b, f || l, !f);
    },
    Q = (l, f, h, m) => {
      if (l == null) o((f.el = c(f.children)), h, m);
      else {
        const g = (f.el = l.el);
        f.children !== l.children && d(g, f.children);
      }
    },
    Y = (l, f, h, m) => {
      l == null ? o((f.el = u(f.children || "")), h, m) : (f.el = l.el);
    },
    pe = (l, f, h, m) => {
      [l.el, l.anchor] = P(l.children, f, h, m, l.el, l.anchor);
    },
    k = (l, f, h, m) => {
      if (f.children !== l.children) {
        const g = y(l.anchor);
        z(l), ([f.el, f.anchor] = P(f.children, h, g, m));
      } else (f.el = l.el), (f.anchor = l.anchor);
    },
    q = ({ el: l, anchor: f }, h, m) => {
      let g;
      for (; l && l !== f; ) (g = y(l)), o(l, h, m), (l = g);
      o(f, h, m);
    },
    z = ({ el: l, anchor: f }) => {
      let h;
      for (; l && l !== f; ) (h = y(l)), r(l), (l = h);
      r(f);
    },
    ge = (l, f, h, m, g, b, w, N, O) => {
      f.type === "svg" ? (w = "svg") : f.type === "math" && (w = "mathml"),
        l == null ? I(f, h, m, g, b, w, N, O) : $e(l, f, g, b, w, N, O);
    },
    I = (l, f, h, m, g, b, w, N) => {
      let O, E;
      const { props: V, shapeFlag: S, transition: D, dirs: R } = l;
      if (
        ((O = l.el = s(l.type, b, V && V.is, V)),
        S & 8
          ? _(O, l.children)
          : S & 16 && ie(l.children, O, null, m, g, Jn(l, b), w, N),
        R && et(l, null, m, "created"),
        re(O, l, l.scopeId, w, m),
        V)
      ) {
        for (const H in V)
          H !== "value" &&
            !It(H) &&
            i(O, H, null, V[H], b, l.children, m, g, Ie);
        "value" in V && i(O, "value", null, V.value, b),
          (E = V.onVnodeBeforeMount) && De(E, m, l);
      }
      a.NODE_ENV !== "production" &&
        (Object.defineProperty(O, "__vnode", {
          value: l,
          enumerable: !1,
        }),
        Object.defineProperty(O, "__vueParentComponent", {
          value: m,
          enumerable: !1,
        })),
        R && et(l, null, m, "beforeMount");
      const F = Zl(g, D);
      F && D.beforeEnter(O),
        o(O, f, h),
        ((E = V && V.onVnodeMounted) || F || R) &&
          ae(() => {
            E && De(E, m, l), F && D.enter(O), R && et(l, null, m, "mounted");
          }, g);
    },
    re = (l, f, h, m, g) => {
      if ((h && x(l, h), m)) for (let b = 0; b < m.length; b++) x(l, m[b]);
      if (g) {
        let b = g.subTree;
        if (
          (a.NODE_ENV !== "production" &&
            b.patchFlag > 0 &&
            b.patchFlag & 2048 &&
            (b = jo(b.children) || b),
          f === b)
        ) {
          const w = g.vnode;
          re(l, w, w.scopeId, w.slotScopeIds, g.parent);
        }
      }
    },
    ie = (l, f, h, m, g, b, w, N, O = 0) => {
      for (let E = O; E < l.length; E++) {
        const V = (l[E] = N ? We(l[E]) : Oe(l[E]));
        M(null, V, f, h, m, g, b, w, N);
      }
    },
    $e = (l, f, h, m, g, b, w) => {
      const N = (f.el = l.el);
      let { patchFlag: O, dynamicChildren: E, dirs: V } = f;
      O |= l.patchFlag & 16;
      const S = l.props || K,
        D = f.props || K;
      let R;
      if (
        (h && tt(h, !1),
        (R = D.onVnodeBeforeUpdate) && De(R, h, f, l),
        V && et(f, l, h, "beforeUpdate"),
        h && tt(h, !0),
        a.NODE_ENV !== "production" && ft && ((O = 0), (w = !1), (E = null)),
        E
          ? (Ue(l.dynamicChildren, E, N, h, m, Jn(f, g), b),
            a.NODE_ENV !== "production" && cn(l, f))
          : w || Ve(l, f, N, null, h, m, Jn(f, g), b, !1),
        O > 0)
      ) {
        if (O & 16) Ee(N, f, S, D, h, m, g);
        else if (
          (O & 2 && S.class !== D.class && i(N, "class", null, D.class, g),
          O & 4 && i(N, "style", S.style, D.style, g),
          O & 8)
        ) {
          const F = f.dynamicProps;
          for (let H = 0; H < F.length; H++) {
            const B = F[H],
              Z = S[B],
              Ne = D[B];
            (Ne !== Z || B === "value") &&
              i(N, B, Z, Ne, g, l.children, h, m, Ie);
          }
        }
        O & 1 && l.children !== f.children && _(N, f.children);
      } else !w && E == null && Ee(N, f, S, D, h, m, g);
      ((R = D.onVnodeUpdated) || V) &&
        ae(() => {
          R && De(R, h, f, l), V && et(f, l, h, "updated");
        }, m);
    },
    Ue = (l, f, h, m, g, b, w) => {
      for (let N = 0; N < f.length; N++) {
        const O = l[N],
          E = f[N],
          V =
            // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            O.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (O.type === he || // - In the case of different nodes, there is going to be a replacement
              // which also requires the correct parent container
              !Tt(O, E) || // - In the case of a component, it could contain anything.
              O.shapeFlag & 70)
              ? p(O.el)
              : // In other cases, the parent container is not actually used so we
                // just pass the block element here to avoid a DOM parentNode call.
                h;
        M(O, E, V, null, m, g, b, w, !0);
      }
    },
    Ee = (l, f, h, m, g, b, w) => {
      if (h !== m) {
        if (h !== K)
          for (const N in h)
            !It(N) && !(N in m) && i(l, N, h[N], null, w, f.children, g, b, Ie);
        for (const N in m) {
          if (It(N)) continue;
          const O = m[N],
            E = h[N];
          O !== E && N !== "value" && i(l, N, E, O, w, f.children, g, b, Ie);
        }
        "value" in m && i(l, "value", h.value, m.value, w);
      }
    },
    zt = (l, f, h, m, g, b, w, N, O) => {
      const E = (f.el = l ? l.el : c("")),
        V = (f.anchor = l ? l.anchor : c(""));
      let { patchFlag: S, dynamicChildren: D, slotScopeIds: R } = f;
      a.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
        (ft || S & 2048) &&
        ((S = 0), (O = !1), (D = null)),
        R && (N = N ? N.concat(R) : R),
        l == null
          ? (o(E, h, m),
            o(V, h, m),
            ie(
              // #10007
              // such fragment like `<></>` will be compiled into
              // a fragment which doesn't have a children.
              // In this case fallback to an empty array
              f.children || [],
              h,
              V,
              g,
              b,
              w,
              N,
              O
            ))
          : S > 0 &&
            S & 64 &&
            D && // #2715 the previous fragment could've been a BAILed one as a result
            // of renderSlot() with no valid children
            l.dynamicChildren
          ? (Ue(l.dynamicChildren, D, h, g, b, w, N),
            a.NODE_ENV !== "production"
              ? cn(l, f)
              : // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                (f.key != null || (g && f === g.subTree)) &&
                cn(
                  l,
                  f,
                  !0
                  /* shallow */
                ))
          : Ve(l, f, h, V, g, b, w, N, O);
    },
    qo = (l, f, h, m, g, b, w, N, O) => {
      (f.slotScopeIds = N),
        l == null
          ? f.shapeFlag & 512
            ? g.ctx.activate(f, h, m, w, O)
            : He(f, h, m, g, b, w, O)
          : fe(l, f, O);
    },
    He = (l, f, h, m, g, b, w) => {
      const N = (l.component = cc(l, m, g));
      if (
        (a.NODE_ENV !== "production" && N.type.__hmrId && Hs(N),
        a.NODE_ENV !== "production" && (on(l), Pe(N, "mount")),
        Lo(l) && (N.ctx.renderer = gt),
        a.NODE_ENV !== "production" && Pe(N, "init"),
        fc(N),
        a.NODE_ENV !== "production" && Ae(N, "init"),
        N.asyncDep)
      ) {
        if ((g && g.registerDep(N, L), !l.el)) {
          const O = (N.subTree = Re(_e));
          Y(null, O, f, h);
        }
      } else L(N, l, f, h, g, b, w);
      a.NODE_ENV !== "production" && (rn(), Ae(N, "mount"));
    },
    fe = (l, f, h) => {
      const m = (f.component = l.component);
      if (il(l, f, h))
        if (m.asyncDep && !m.asyncResolved) {
          a.NODE_ENV !== "production" && on(f),
            j(m, f, h),
            a.NODE_ENV !== "production" && rn();
          return;
        } else (m.next = f), Ls(m.update), (m.effect.dirty = !0), m.update();
      else (f.el = l.el), (m.vnode = f);
    },
    L = (l, f, h, m, g, b, w) => {
      const N = () => {
          if (l.isMounted) {
            let { next: V, bu: S, u: D, parent: R, vnode: F } = l;
            {
              const Et = Pi(l);
              if (Et) {
                V && ((V.el = F.el), j(l, V, w)),
                  Et.asyncDep.then(() => {
                    l.isUnmounted || N();
                  });
                return;
              }
            }
            let H = V,
              B;
            a.NODE_ENV !== "production" && on(V || l.vnode),
              tt(l, !1),
              V ? ((V.el = F.el), j(l, V, w)) : (V = F),
              S && Nt(S),
              (B = V.props && V.props.onVnodeBeforeUpdate) && De(B, R, V, F),
              tt(l, !0),
              a.NODE_ENV !== "production" && Pe(l, "render");
            const Z = Wn(l);
            a.NODE_ENV !== "production" && Ae(l, "render");
            const Ne = l.subTree;
            (l.subTree = Z),
              a.NODE_ENV !== "production" && Pe(l, "patch"),
              M(
                Ne,
                Z,
                // parent may have changed if it's in a teleport
                p(Ne.el),
                // anchor may have changed if it's in a fragment
                Jt(Ne),
                l,
                g,
                b
              ),
              a.NODE_ENV !== "production" && Ae(l, "patch"),
              (V.el = Z.el),
              H === null && sl(l, Z.el),
              D && ae(D, g),
              (B = V.props && V.props.onVnodeUpdated) &&
                ae(() => De(B, R, V, F), g),
              a.NODE_ENV !== "production" && mi(l),
              a.NODE_ENV !== "production" && rn();
          } else {
            let V;
            const { el: S, props: D } = f,
              { bm: R, m: F, parent: H } = l,
              B = sn(f);
            if (
              (tt(l, !1),
              R && Nt(R),
              !B && (V = D && D.onVnodeBeforeMount) && De(V, H, f),
              tt(l, !0),
              S && Hn)
            ) {
              const Z = () => {
                a.NODE_ENV !== "production" && Pe(l, "render"),
                  (l.subTree = Wn(l)),
                  a.NODE_ENV !== "production" && Ae(l, "render"),
                  a.NODE_ENV !== "production" && Pe(l, "hydrate"),
                  Hn(S, l.subTree, l, g, null),
                  a.NODE_ENV !== "production" && Ae(l, "hydrate");
              };
              B
                ? f.type.__asyncLoader().then(
                    // note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    () => !l.isUnmounted && Z()
                  )
                : Z();
            } else {
              a.NODE_ENV !== "production" && Pe(l, "render");
              const Z = (l.subTree = Wn(l));
              a.NODE_ENV !== "production" && Ae(l, "render"),
                a.NODE_ENV !== "production" && Pe(l, "patch"),
                M(null, Z, h, m, l, g, b),
                a.NODE_ENV !== "production" && Ae(l, "patch"),
                (f.el = Z.el);
            }
            if ((F && ae(F, g), !B && (V = D && D.onVnodeMounted))) {
              const Z = f;
              ae(() => De(V, H, Z), g);
            }
            (f.shapeFlag & 256 ||
              (H && sn(H.vnode) && H.vnode.shapeFlag & 256)) &&
              l.a &&
              ae(l.a, g),
              (l.isMounted = !0),
              a.NODE_ENV !== "production" && Gs(l),
              (f = h = m = null);
          }
        },
        O = (l.effect = new xo(
          N,
          J,
          () => Dn(E),
          l.scope
          // track it in component's effect scope
        )),
        E = (l.update = () => {
          O.dirty && O.run();
        });
      (E.id = l.uid),
        tt(l, !0),
        a.NODE_ENV !== "production" &&
          ((O.onTrack = l.rtc ? (V) => Nt(l.rtc, V) : void 0),
          (O.onTrigger = l.rtg ? (V) => Nt(l.rtg, V) : void 0),
          (E.ownerInstance = l)),
        E();
    },
    j = (l, f, h) => {
      f.component = l;
      const m = l.vnode.props;
      (l.vnode = f),
        (l.next = null),
        Ul(l, f.props, m, h),
        zl(l, f.children, h),
        Xe(),
        lr(l),
        Ze();
    },
    Ve = (l, f, h, m, g, b, w, N, O = !1) => {
      const E = l && l.children,
        V = l ? l.shapeFlag : 0,
        S = f.children,
        { patchFlag: D, shapeFlag: R } = f;
      if (D > 0) {
        if (D & 128) {
          Dt(E, S, h, m, g, b, w, N, O);
          return;
        } else if (D & 256) {
          Fn(E, S, h, m, g, b, w, N, O);
          return;
        }
      }
      R & 8
        ? (V & 16 && Ie(E, g, b), S !== E && _(h, S))
        : V & 16
        ? R & 16
          ? Dt(E, S, h, m, g, b, w, N, O)
          : Ie(E, g, b, !0)
        : (V & 8 && _(h, ""), R & 16 && ie(S, h, m, g, b, w, N, O));
    },
    Fn = (l, f, h, m, g, b, w, N, O) => {
      (l = l || Ot), (f = f || Ot);
      const E = l.length,
        V = f.length,
        S = Math.min(E, V);
      let D;
      for (D = 0; D < S; D++) {
        const R = (f[D] = O ? We(f[D]) : Oe(f[D]));
        M(l[D], R, h, null, g, b, w, N, O);
      }
      E > V ? Ie(l, g, b, !0, !1, S) : ie(f, h, m, g, b, w, N, O, S);
    },
    Dt = (l, f, h, m, g, b, w, N, O) => {
      let E = 0;
      const V = f.length;
      let S = l.length - 1,
        D = V - 1;
      for (; E <= S && E <= D; ) {
        const R = l[E],
          F = (f[E] = O ? We(f[E]) : Oe(f[E]));
        if (Tt(R, F)) M(R, F, h, null, g, b, w, N, O);
        else break;
        E++;
      }
      for (; E <= S && E <= D; ) {
        const R = l[S],
          F = (f[D] = O ? We(f[D]) : Oe(f[D]));
        if (Tt(R, F)) M(R, F, h, null, g, b, w, N, O);
        else break;
        S--, D--;
      }
      if (E > S) {
        if (E <= D) {
          const R = D + 1,
            F = R < V ? f[R].el : m;
          for (; E <= D; )
            M(null, (f[E] = O ? We(f[E]) : Oe(f[E])), h, F, g, b, w, N, O), E++;
        }
      } else if (E > D) for (; E <= S; ) Ke(l[E], g, b, !0), E++;
      else {
        const R = E,
          F = E,
          H = /* @__PURE__ */ new Map();
        for (E = F; E <= D; E++) {
          const se = (f[E] = O ? We(f[E]) : Oe(f[E]));
          se.key != null &&
            (a.NODE_ENV !== "production" &&
              H.has(se.key) &&
              v(
                "Duplicate keys found during update:",
                JSON.stringify(se.key),
                "Make sure keys are unique."
              ),
            H.set(se.key, E));
        }
        let B,
          Z = 0;
        const Ne = D - F + 1;
        let Et = !1,
          zo = 0;
        const Ct = new Array(Ne);
        for (E = 0; E < Ne; E++) Ct[E] = 0;
        for (E = R; E <= S; E++) {
          const se = l[E];
          if (Z >= Ne) {
            Ke(se, g, b, !0);
            continue;
          }
          let xe;
          if (se.key != null) xe = H.get(se.key);
          else
            for (B = F; B <= D; B++)
              if (Ct[B - F] === 0 && Tt(se, f[B])) {
                xe = B;
                break;
              }
          xe === void 0
            ? Ke(se, g, b, !0)
            : ((Ct[xe - F] = E + 1),
              xe >= zo ? (zo = xe) : (Et = !0),
              M(se, f[xe], h, null, g, b, w, N, O),
              Z++);
        }
        const Jo = Et ? Ql(Ct) : Ot;
        for (B = Jo.length - 1, E = Ne - 1; E >= 0; E--) {
          const se = F + E,
            xe = f[se],
            Yo = se + 1 < V ? f[se + 1].el : m;
          Ct[E] === 0
            ? M(null, xe, h, Yo, g, b, w, N, O)
            : Et && (B < 0 || E !== Jo[B] ? mt(xe, h, Yo, 2) : B--);
        }
      }
    },
    mt = (l, f, h, m, g = null) => {
      const { el: b, type: w, transition: N, children: O, shapeFlag: E } = l;
      if (E & 6) {
        mt(l.component.subTree, f, h, m);
        return;
      }
      if (E & 128) {
        l.suspense.move(f, h, m);
        return;
      }
      if (E & 64) {
        w.move(l, f, h, gt);
        return;
      }
      if (w === he) {
        o(b, f, h);
        for (let S = 0; S < O.length; S++) mt(O[S], f, h, m);
        o(l.anchor, f, h);
        return;
      }
      if (w === un) {
        q(l, f, h);
        return;
      }
      if (m !== 2 && E & 1 && N)
        if (m === 0) N.beforeEnter(b), o(b, f, h), ae(() => N.enter(b), g);
        else {
          const { leave: S, delayLeave: D, afterLeave: R } = N,
            F = () => o(b, f, h),
            H = () => {
              S(b, () => {
                F(), R && R();
              });
            };
          D ? D(b, F, H) : H();
        }
      else o(b, f, h);
    },
    Ke = (l, f, h, m = !1, g = !1) => {
      const {
        type: b,
        props: w,
        ref: N,
        children: O,
        dynamicChildren: E,
        shapeFlag: V,
        patchFlag: S,
        dirs: D,
      } = l;
      if ((N != null && ho(N, null, h, l, !0), V & 256)) {
        f.ctx.deactivate(l);
        return;
      }
      const R = V & 1 && D,
        F = !sn(l);
      let H;
      if ((F && (H = w && w.onVnodeBeforeUnmount) && De(H, f, l), V & 6))
        Wi(l.component, h, m);
      else {
        if (V & 128) {
          l.suspense.unmount(h, m);
          return;
        }
        R && et(l, null, f, "beforeUnmount"),
          V & 64
            ? l.type.remove(l, f, h, g, gt, m)
            : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
              (b !== he || (S > 0 && S & 64))
            ? Ie(E, f, h, !1, !0)
            : ((b === he && S & 384) || (!g && V & 16)) && Ie(O, f, h),
          m && jn(l);
      }
      ((F && (H = w && w.onVnodeUnmounted)) || R) &&
        ae(() => {
          H && De(H, f, l), R && et(l, null, f, "unmounted");
        }, h);
    },
    jn = (l) => {
      const { type: f, el: h, anchor: m, transition: g } = l;
      if (f === he) {
        a.NODE_ENV !== "production" &&
        l.patchFlag > 0 &&
        l.patchFlag & 2048 &&
        g &&
        !g.persisted
          ? l.children.forEach((w) => {
              w.type === _e ? r(w.el) : jn(w);
            })
          : ki(h, m);
        return;
      }
      if (f === un) {
        z(l);
        return;
      }
      const b = () => {
        r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (l.shapeFlag & 1 && g && !g.persisted) {
        const { leave: w, delayLeave: N } = g,
          O = () => w(h, b);
        N ? N(l.el, b, O) : O();
      } else b();
    },
    ki = (l, f) => {
      let h;
      for (; l !== f; ) (h = y(l)), r(l), (l = h);
      r(f);
    },
    Wi = (l, f, h) => {
      a.NODE_ENV !== "production" && l.type.__hmrId && Ks(l);
      const { bum: m, scope: g, update: b, subTree: w, um: N } = l;
      m && Nt(m),
        g.stop(),
        b && ((b.active = !1), Ke(w, l, f, h)),
        N && ae(N, f),
        ae(() => {
          l.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          l.asyncDep &&
          !l.asyncResolved &&
          l.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve()),
        a.NODE_ENV !== "production" && Js(l);
    },
    Ie = (l, f, h, m = !1, g = !1, b = 0) => {
      for (let w = b; w < l.length; w++) Ke(l[w], f, h, m, g);
    },
    Jt = (l) =>
      l.shapeFlag & 6
        ? Jt(l.component.subTree)
        : l.shapeFlag & 128
        ? l.suspense.next()
        : y(l.anchor || l.el);
  let Ln = !1;
  const Go = (l, f, h) => {
      l == null
        ? f._vnode && Ke(f._vnode, null, null, !0)
        : M(f._vnode || null, l, f, null, null, null, h),
        Ln || ((Ln = !0), lr(), di(), (Ln = !1)),
        (f._vnode = l);
    },
    gt = {
      p: M,
      um: Ke,
      m: mt,
      r: jn,
      mt: He,
      mc: ie,
      pc: Ve,
      pbc: Ue,
      n: Jt,
      o: e,
    };
  let Un, Hn;
  return (
    t && ([Un, Hn] = t(gt)),
    {
      render: Go,
      hydrate: Un,
      createApp: Ml(Go, Un),
    }
  );
}
function Jn({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Zl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function cn(e, t, n = !1) {
  const o = e.children,
    r = t.children;
  if (C(o) && C(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let c = r[i];
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = r[i] = We(r[i])), (c.el = s.el)),
        n || cn(s, c)),
        c.type === qt && (c.el = s.el),
        a.NODE_ENV !== "production" && c.type === _e && !c.el && (c.el = s.el);
    }
}
function Ql(e) {
  const t = e.slice(),
    n = [0];
  let o, r, i, s, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const d = e[o];
    if (d !== 0) {
      if (((r = n[n.length - 1]), e[r] < d)) {
        (t[o] = r), n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        (c = (i + s) >> 1), e[n[c]] < d ? (i = c + 1) : (s = c);
      d < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), (n[i] = o));
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; ) (n[i] = s), (s = t[s]);
  return n;
}
function Pi(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Pi(t);
}
const ec = (e) => e.__isTeleport,
  he = Symbol.for("v-fgt"),
  qt = Symbol.for("v-txt"),
  _e = Symbol.for("v-cmt"),
  un = Symbol.for("v-stc"),
  Mt = [];
let ve = null;
function me(e = !1) {
  Mt.push((ve = e ? null : []));
}
function tc() {
  Mt.pop(), (ve = Mt[Mt.length - 1] || null);
}
let Ht = 1;
function br(e) {
  Ht += e;
}
function Ai(e) {
  return (
    (e.dynamicChildren = Ht > 0 ? ve || Ot : null),
    tc(),
    Ht > 0 && ve && ve.push(e),
    e
  );
}
function ye(e, t, n, o, r, i) {
  return Ai(ce(e, t, n, o, r, i, !0));
}
function nc(e, t, n, o, r) {
  return Ai(Re(e, t, n, o, r, !0));
}
function Bo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  return a.NODE_ENV !== "production" && t.shapeFlag & 6 && yt.has(t.type)
    ? ((e.shapeFlag &= -257), (t.shapeFlag &= -513), !1)
    : e.type === t.type && e.key === t.key;
}
const oc = (...e) => Fi(...e),
  Rn = "__vInternal",
  Mi = ({ key: e }) => e ?? null,
  fn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? G(e) || oe(e) || T(e)
        ? { i: ue, r: e, k: t, f: !!n }
        : e
      : null
  );
function ce(
  e,
  t = null,
  n = null,
  o = 0,
  r = null,
  i = e === he ? 0 : 1,
  s = !1,
  c = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mi(t),
    ref: t && fn(t),
    scopeId: Sn,
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
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ue,
  };
  return (
    c
      ? (ko(u, n), i & 128 && e.normalize(u))
      : n && (u.shapeFlag |= G(n) ? 8 : 16),
    a.NODE_ENV !== "production" &&
      u.key !== u.key &&
      v("VNode created with invalid key (NaN). VNode type:", u.type),
    Ht > 0 && // avoid a block node from tracking itself
      !s && // has current parent block
      ve && // presence of a patch flag indicates this node needs patching on updates.
      // component nodes also should always be patched, because even if the
      // component doesn't need to update, it needs to persist the instance on to
      // the next vnode so that it can be properly unmounted later.
      (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
      // vnode should not be considered dynamic due to handler caching.
      u.patchFlag !== 32 &&
      ve.push(u),
    u
  );
}
const Re = a.NODE_ENV !== "production" ? oc : Fi;
function Fi(e, t = null, n = null, o = 0, r = null, i = !1) {
  if (
    ((!e || e === ll) &&
      (a.NODE_ENV !== "production" &&
        !e &&
        v(`Invalid vnode type when creating vnode: ${e}.`),
      (e = _e)),
    Bo(e))
  ) {
    const c = Ye(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return (
      n && ko(c, n),
      Ht > 0 &&
        !i &&
        ve &&
        (c.shapeFlag & 6 ? (ve[ve.indexOf(e)] = c) : ve.push(c)),
      (c.patchFlag |= -2),
      c
    );
  }
  if ((Bi(e) && (e = e.__vccOpts), t)) {
    t = rc(t);
    let { class: c, style: u } = t;
    c && !G(c) && (t.class = Vo(c)),
      U(u) && (ro(u) && !C(u) && (u = W({}, u)), (t.style = wo(u)));
  }
  const s = G(e) ? 1 : cl(e) ? 128 : ec(e) ? 64 : U(e) ? 4 : T(e) ? 2 : 0;
  return (
    a.NODE_ENV !== "production" &&
      s & 4 &&
      ro(e) &&
      ((e = $(e)),
      v(
        "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
        `
Component that was made reactive: `,
        e
      )),
    ce(e, t, n, o, r, s, i, !0)
  );
}
function rc(e) {
  return e ? (ro(e) || Rn in e ? W({}, e) : e) : null;
}
function Ye(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: s } = e,
    c = t ? ic(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Mi(c),
    ref:
      t && t.ref
        ? // #2078 in the case of <component :is="vnode" ref="extra"/>
          // if the vnode itself already has a ref, cloneVNode will need to merge
          // the refs so the single vnode can be set on multiple refs
          n && r
          ? C(r)
            ? r.concat(fn(t))
            : [r, fn(t)]
          : fn(t)
        : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a.NODE_ENV !== "production" && i === -1 && C(s) ? s.map(ji) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== he ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ye(e.ssContent),
    ssFallback: e.ssFallback && Ye(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function ji(e) {
  const t = Ye(e);
  return C(e.children) && (t.children = e.children.map(ji)), t;
}
function Li(e = " ", t = 0) {
  return Re(qt, null, e, t);
}
function nn(e = "", t = !1) {
  return t ? (me(), nc(_e, null, e)) : Re(_e, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean"
    ? Re(_e)
    : C(e)
    ? Re(
        he,
        null,
        // #3666, avoid reference pollution when reusing vnode
        e.slice()
      )
    : typeof e == "object"
    ? We(e)
    : Re(qt, null, String(e));
}
function We(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ye(e);
}
function ko(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null) t = null;
  else if (C(t)) n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ko(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Rn in t)
        ? (t._ctx = ue)
        : r === 3 &&
          ue &&
          (ue.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    T(t)
      ? ((t = { default: t, _ctx: ue }), (n = 32))
      : ((t = String(t)), o & 64 ? ((n = 16), (t = [Li(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ic(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Vo([t.class, o.class]));
      else if (r === "style") t.style = wo([t.style, o.style]);
      else if (Kt(r)) {
        const i = t[r],
          s = o[r];
        s &&
          i !== s &&
          !(C(i) && i.includes(s)) &&
          (t[r] = i ? [].concat(i, s) : s);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function De(e, t, n, o = null) {
  we(e, t, 7, [n, o]);
}
const sc = Di();
let lc = 0;
function cc(e, t, n) {
  const o = e.type,
    r = (t ? t.appContext : e.appContext) || sc,
    i = {
      uid: lc++,
      vnode: e,
      type: o,
      parent: t,
      appContext: r,
      root: null,
      // to be immediately set
      next: null,
      subTree: null,
      // will be set synchronously right after creation
      effect: null,
      update: null,
      // will be set synchronously right after creation
      scope: new rs(
        !0
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: Si(o, r),
      emitsOptions: Ei(o, r),
      // emit
      emit: null,
      // to be set immediately
      emitted: null,
      // props default value
      propsDefaults: K,
      // inheritAttrs
      inheritAttrs: o.inheritAttrs,
      // state
      ctx: K,
      data: K,
      props: K,
      attrs: K,
      slots: K,
      refs: K,
      setupState: K,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      // suspense related
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      // lifecycle hooks
      // not using enums here because it results in computed properties
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
      sp: null,
    };
  return (
    a.NODE_ENV !== "production" ? (i.ctx = xl(i)) : (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Qs.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let ee = null,
  gn,
  _o;
{
  const e = vo(),
    t = (n, o) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(o),
        (i) => {
          r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
        }
      );
    };
  (gn = t("__VUE_INSTANCE_SETTERS__", (n) => (ee = n))),
    (_o = t("__VUE_SSR_SETTERS__", (n) => ($n = n)));
}
const Gt = (e) => {
    const t = ee;
    return (
      gn(e),
      e.scope.on(),
      () => {
        e.scope.off(), gn(t);
      }
    );
  },
  Or = () => {
    ee && ee.scope.off(), gn(null);
  },
  uc = /* @__PURE__ */ xt("slot,component");
function mo(e, t) {
  const n = t.isNativeTag || Lr;
  (uc(e) || n(e)) &&
    v("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Ui(e) {
  return e.vnode.shapeFlag & 4;
}
let $n = !1;
function fc(e, t = !1) {
  t && _o(t);
  const { props: n, children: o } = e.vnode,
    r = Ui(e);
  jl(e, n, r, t), Gl(e, o);
  const i = r ? ac(e, t) : void 0;
  return t && _o(!1), i;
}
function ac(e, t) {
  var n;
  const o = e.type;
  if (a.NODE_ENV !== "production") {
    if ((o.name && mo(o.name, e.appContext.config), o.components)) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++) mo(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++) Oi(i[s]);
    }
    o.compilerOptions &&
      dc() &&
      v(
        '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
      );
  }
  (e.accessCache = /* @__PURE__ */ Object.create(null)),
    (e.proxy = ii(new Proxy(e.ctx, Vi))),
    a.NODE_ENV !== "production" && Dl(e);
  const { setup: r } = o;
  if (r) {
    const i = (e.setupContext = r.length > 1 ? hc(e) : null),
      s = Gt(e);
    Xe();
    const c = je(r, e, 0, [
      a.NODE_ENV !== "production" ? bt(e.props) : e.props,
      i,
    ]);
    if ((Ze(), s(), yo(c))) {
      if ((c.then(Or, Or), t))
        return c
          .then((u) => {
            vr(e, u, t);
          })
          .catch((u) => {
            kt(u, e, 0);
          });
      if (((e.asyncDep = c), a.NODE_ENV !== "production" && !e.suspense)) {
        const u = (n = o.name) != null ? n : "Anonymous";
        v(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else vr(e, c, t);
  } else Hi(e, t);
}
function vr(e, t, n) {
  T(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : U(t)
    ? (a.NODE_ENV !== "production" &&
        Bo(t) &&
        v(
          "setup() should not return VNodes directly - return a render function instead."
        ),
      a.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t),
      (e.setupState = li(t)),
      a.NODE_ENV !== "production" && Cl(e))
    : a.NODE_ENV !== "production" &&
      t !== void 0 &&
      v(
        `setup() should return an object. Received: ${
          t === null ? "null" : typeof t
        }`
      ),
    Hi(e, n);
}
let go;
const dc = () => !go;
function Hi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && go && !o.render) {
      const r = o.template || Ho(e).template;
      if (r) {
        a.NODE_ENV !== "production" && Pe(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config,
          { delimiters: c, compilerOptions: u } = o,
          d = W(
            W(
              {
                isCustomElement: i,
                delimiters: c,
              },
              s
            ),
            u
          );
        (o.render = go(r, d)), a.NODE_ENV !== "production" && Ae(e, "compile");
      }
    }
    e.render = o.render || J;
  }
  {
    const r = Gt(e);
    Xe();
    try {
      Tl(e);
    } finally {
      Ze(), r();
    }
  }
  a.NODE_ENV !== "production" &&
    !o.render &&
    e.render === J &&
    !t &&
    (o.template
      ? v(
          'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
        )
      : v("Component is missing template or render function."));
}
function wr(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(
      e.attrs,
      a.NODE_ENV !== "production"
        ? {
            get(t, n) {
              return hn(), te(e, "get", "$attrs"), t[n];
            },
            set() {
              return v("setupContext.attrs is readonly."), !1;
            },
            deleteProperty() {
              return v("setupContext.attrs is readonly."), !1;
            },
          }
        : {
            get(t, n) {
              return te(e, "get", "$attrs"), t[n];
            },
          }
    ))
  );
}
function pc(e) {
  return (
    e.slotsProxy ||
    (e.slotsProxy = new Proxy(e.slots, {
      get(t, n) {
        return te(e, "get", "$slots"), t[n];
      },
    }))
  );
}
function hc(e) {
  const t = (n) => {
    if (
      a.NODE_ENV !== "production" &&
      (e.exposed && v("expose() should be called only once per setup()."),
      n != null)
    ) {
      let o = typeof n;
      o === "object" && (C(n) ? (o = "array") : oe(n) && (o = "ref")),
        o !== "object" &&
          v(`expose() should be passed a plain object, received ${o}.`);
    }
    e.exposed = n || {};
  };
  return a.NODE_ENV !== "production"
    ? Object.freeze({
        get attrs() {
          return wr(e);
        },
        get slots() {
          return pc(e);
        },
        get emit() {
          return (n, ...o) => e.emit(n, ...o);
        },
        expose: t,
      })
    : {
        get attrs() {
          return wr(e);
        },
        slots: e.slots,
        emit: e.emit,
        expose: t,
      };
}
function In(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(li(ii(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in at) return at[n](e);
        },
        has(t, n) {
          return n in t || n in at;
        },
      }))
    );
}
const _c = /(?:^|[-_])(\w)/g,
  mc = (e) => e.replace(_c, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ki(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Pn(e, t, n = !1) {
  let o = Ki(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const s in i) if (i[s] === t) return s;
    };
    o =
      r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? mc(o) : n ? "App" : "Anonymous";
}
function Bi(e) {
  return T(e) && "__vccOpts" in e;
}
const gc = (e, t) => Cs(e, t, $n);
function Ec() {
  if (a.NODE_ENV === "production" || typeof window > "u") return;
  const e = { style: "color:#3ba776" },
    t = { style: "color:#1677ff" },
    n = { style: "color:#f5222d" },
    o = { style: "color:#eb2f96" },
    r = {
      header(p) {
        return U(p)
          ? p.__isVue
            ? ["div", e, "VueInstance"]
            : oe(p)
            ? ["div", {}, ["span", e, _(p)], "<", c(p.value), ">"]
            : ct(p)
            ? [
                "div",
                {},
                ["span", e, vt(p) ? "ShallowReactive" : "Reactive"],
                "<",
                c(p),
                `>${ht(p) ? " (readonly)" : ""}`,
              ]
            : ht(p)
            ? [
                "div",
                {},
                ["span", e, vt(p) ? "ShallowReadonly" : "Readonly"],
                "<",
                c(p),
                ">",
              ]
            : null
          : null;
      },
      hasBody(p) {
        return p && p.__isVue;
      },
      body(p) {
        if (p && p.__isVue) return ["div", {}, ...i(p.$)];
      },
    };
  function i(p) {
    const y = [];
    p.type.props && p.props && y.push(s("props", $(p.props))),
      p.setupState !== K && y.push(s("setup", p.setupState)),
      p.data !== K && y.push(s("data", $(p.data)));
    const x = u(p, "computed");
    x && y.push(s("computed", x));
    const P = u(p, "inject");
    return (
      P && y.push(s("injected", P)),
      y.push([
        "div",
        {},
        [
          "span",
          {
            style: o.style + ";opacity:0.66",
          },
          "$ (internal): ",
        ],
        ["object", { object: p }],
      ]),
      y
    );
  }
  function s(p, y) {
    return (
      (y = W({}, y)),
      Object.keys(y).length
        ? [
            "div",
            { style: "line-height:1.25em;margin-bottom:0.6em" },
            [
              "div",
              {
                style: "color:#476582",
              },
              p,
            ],
            [
              "div",
              {
                style: "padding-left:1.25em",
              },
              ...Object.keys(y).map((x) => [
                "div",
                {},
                ["span", o, x + ": "],
                c(y[x], !1),
              ]),
            ],
          ]
        : ["span", {}]
    );
  }
  function c(p, y = !0) {
    return typeof p == "number"
      ? ["span", t, p]
      : typeof p == "string"
      ? ["span", n, JSON.stringify(p)]
      : typeof p == "boolean"
      ? ["span", o, p]
      : U(p)
      ? ["object", { object: y ? $(p) : p }]
      : ["span", n, String(p)];
  }
  function u(p, y) {
    const x = p.type;
    if (T(x)) return;
    const P = {};
    for (const M in p.ctx) d(x, M, y) && (P[M] = p.ctx[M]);
    return P;
  }
  function d(p, y, x) {
    const P = p[x];
    if (
      (C(P) && P.includes(y)) ||
      (U(P) && y in P) ||
      (p.extends && d(p.extends, y, x)) ||
      (p.mixins && p.mixins.some((M) => d(M, y, x)))
    )
      return !0;
  }
  function _(p) {
    return vt(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters
    ? window.devtoolsFormatters.push(r)
    : (window.devtoolsFormatters = [r]);
}
const Vr = "3.4.19",
  An = a.NODE_ENV !== "production" ? v : J;
var dt = {};
const Nc = "http://www.w3.org/2000/svg",
  yc = "http://www.w3.org/1998/Math/MathML",
  qe = typeof document < "u" ? document : null,
  xr = qe && /* @__PURE__ */ qe.createElement("template"),
  bc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const r =
        t === "svg"
          ? qe.createElementNS(Nc, e)
          : t === "mathml"
          ? qe.createElementNS(yc, e)
          : qe.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          o &&
          o.multiple != null &&
          r.setAttribute("multiple", o.multiple),
        r
      );
    },
    createText: (e) => qe.createTextNode(e),
    createComment: (e) => qe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => qe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(e, t, n, o, r, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        xr.innerHTML =
          o === "svg"
            ? `<svg>${e}</svg>`
            : o === "mathml"
            ? `<math>${e}</math>`
            : e;
        const c = xr.content;
        if (o === "svg" || o === "mathml") {
          const u = c.firstChild;
          for (; u.firstChild; ) c.appendChild(u.firstChild);
          c.removeChild(u);
        }
        t.insertBefore(c, n);
      }
      return [
        // first
        s ? s.nextSibling : t.firstChild,
        // last
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Oc = Symbol("_vtc");
function vc(e, t, n) {
  const o = e[Oc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Dr = Symbol("_vod"),
  wc = Symbol(dt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""),
  Vc = /(^|;)\s*display\s*:/;
function xc(e, t, n) {
  const o = e.style,
    r = G(n),
    i = o.display;
  let s = !1;
  if (n && !r) {
    if (t && !G(t)) for (const c in t) n[c] == null && Eo(o, c, "");
    for (const c in n) c === "display" && (s = !0), Eo(o, c, n[c]);
  } else if (r) {
    if (t !== n) {
      const c = o[wc];
      c && (n += ";" + c), (o.cssText = n), (s = Vc.test(n));
    }
  } else t && e.removeAttribute("style");
  Dr in e && ((e[Dr] = s ? o.display : ""), (o.display = i));
}
const Dc = /[^\\];\s*$/,
  Cr = /\s*!important$/;
function Eo(e, t, n) {
  if (C(n)) n.forEach((o) => Eo(e, t, o));
  else if (
    (n == null && (n = ""),
    dt.NODE_ENV !== "production" &&
      Dc.test(n) &&
      An(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),
    t.startsWith("--"))
  )
    e.setProperty(t, n);
  else {
    const o = Cc(e, t);
    Cr.test(n)
      ? e.setProperty(de(o), n.replace(Cr, ""), "important")
      : (e[o] = n);
  }
}
const Sr = ["Webkit", "Moz", "ms"],
  Yn = {};
function Cc(e, t) {
  const n = Yn[t];
  if (n) return n;
  let o = Fe(t);
  if (o !== "filter" && o in e) return (Yn[t] = o);
  o = On(o);
  for (let r = 0; r < Sr.length; r++) {
    const i = Sr[r] + o;
    if (i in e) return (Yn[t] = i);
  }
  return t;
}
const Tr = "http://www.w3.org/1999/xlink";
function Sc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Tr, t.slice(6, t.length))
      : e.setAttributeNS(Tr, t, n);
  else {
    const i = ts(t);
    n == null || (i && !Kr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : n);
  }
}
function Tc(e, t, n, o, r, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    o && s(o, r, i), (e[t] = n ?? "");
    return;
  }
  const c = e.tagName;
  if (
    t === "value" &&
    c !== "PROGRESS" && // custom elements may use _value internally
    !c.includes("-")
  ) {
    e._value = n;
    const d = c === "OPTION" ? e.getAttribute("value") : e.value,
      _ = n ?? "";
    d !== _ && (e.value = _), n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean"
      ? (n = Kr(n))
      : n == null && d === "string"
      ? ((n = ""), (u = !0))
      : d === "number" && ((n = 0), (u = !0));
  }
  try {
    e[t] = n;
  } catch (d) {
    dt.NODE_ENV !== "production" &&
      !u &&
      An(
        `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
        d
      );
  }
  u && e.removeAttribute(t);
}
function ot(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Rc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Rr = Symbol("_vei");
function $c(e, t, n, o, r = null) {
  const i = e[Rr] || (e[Rr] = {}),
    s = i[t];
  if (o && s) s.value = o;
  else {
    const [c, u] = Ic(t);
    if (o) {
      const d = (i[t] = Mc(o, r));
      ot(e, c, d, u);
    } else s && (Rc(e, c, s, u), (i[t] = void 0));
  }
}
const $r = /(?:Once|Passive|Capture)$/;
function Ic(e) {
  let t;
  if ($r.test(e)) {
    t = {};
    let o;
    for (; (o = e.match($r)); )
      (e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : de(e.slice(2)), t];
}
let Xn = 0;
const Pc = /* @__PURE__ */ Promise.resolve(),
  Ac = () => Xn || (Pc.then(() => (Xn = 0)), (Xn = Date.now()));
function Mc(e, t) {
  const n = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= n.attached) return;
    we(Fc(o, n.value), t, 5, [o]);
  };
  return (n.value = e), (n.attached = Ac()), n;
}
function Fc(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((o) => (r) => !r._stopped && o && o(r))
    );
  } else return t;
}
const Ir = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 && // lowercase letter
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  jc = (e, t, n, o, r, i, s, c, u) => {
    const d = r === "svg";
    t === "class"
      ? vc(e, o, d)
      : t === "style"
      ? xc(e, n, o)
      : Kt(t)
      ? an(t) || $c(e, t, n, o, s)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Lc(e, t, o, d)
        )
      ? Tc(e, t, o, i, s, c, u)
      : (t === "true-value"
          ? (e._trueValue = o)
          : t === "false-value" && (e._falseValue = o),
        Sc(e, t, o, d));
  };
function Lc(e, t, n, o) {
  if (o)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Ir(t) && T(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ir(t) && G(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Uc(e, t) {
  const n = /* @__PURE__ */ pl(e);
  class o extends Wo {
    constructor(i) {
      super(n, i, t);
    }
  }
  return (o.def = n), o;
}
const Hc = typeof HTMLElement < "u" ? HTMLElement : class {};
class Wo extends Hc {
  constructor(t, n = {}, o) {
    super(),
      (this._def = t),
      (this._props = n),
      (this._instance = null),
      (this._connected = !1),
      (this._resolved = !1),
      (this._numberProps = null),
      (this._ob = null),
      this.shadowRoot && o
        ? o(this._createVNode(), this.shadowRoot)
        : (dt.NODE_ENV !== "production" &&
            this.shadowRoot &&
            An(
              "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
            ),
          this.attachShadow({ mode: "open" }),
          this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    (this._connected = !0),
      this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    (this._connected = !1),
      this._ob && (this._ob.disconnect(), (this._ob = null)),
      Ao(() => {
        this._connected || (Fr(null, this.shadowRoot), (this._instance = null));
      });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    (this._ob = new MutationObserver((o) => {
      for (const r of o) this._setAttr(r.attributeName);
    })),
      this._ob.observe(this, { attributes: !0 });
    const t = (o, r = !1) => {
        const { props: i, styles: s } = o;
        let c;
        if (i && !C(i))
          for (const u in i) {
            const d = i[u];
            (d === Number || (d && d.type === Number)) &&
              (u in this._props && (this._props[u] = Zo(this._props[u])),
              ((c || (c = /* @__PURE__ */ Object.create(null)))[Fe(u)] = !0));
          }
        (this._numberProps = c),
          r && this._resolveProps(o),
          this._applyStyles(s),
          this._update();
      },
      n = this._def.__asyncLoader;
    n ? n().then((o) => t(o, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t,
      o = C(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of o.map(Fe))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(i) {
          this._setProp(r, i);
        },
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const o = Fe(t);
    this._numberProps && this._numberProps[o] && (n = Zo(n)),
      this._setProp(o, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] &&
      ((this._props[t] = n),
      r && this._instance && this._update(),
      o &&
        (n === !0
          ? this.setAttribute(de(t), "")
          : typeof n == "string" || typeof n == "number"
          ? this.setAttribute(de(t), n + "")
          : n || this.removeAttribute(de(t))));
  }
  _update() {
    Fr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Re(this._def, W({}, this._props));
    return (
      this._instance ||
        (t.ce = (n) => {
          (this._instance = n),
            (n.isCE = !0),
            dt.NODE_ENV !== "production" &&
              (n.ceReload = (i) => {
                this._styles &&
                  (this._styles.forEach((s) => this.shadowRoot.removeChild(s)),
                  (this._styles.length = 0)),
                  this._applyStyles(i),
                  (this._instance = null),
                  this._update();
              });
          const o = (i, s) => {
            this.dispatchEvent(
              new CustomEvent(i, {
                detail: s,
              })
            );
          };
          n.emit = (i, ...s) => {
            o(i, s), de(i) !== i && o(de(i), s);
          };
          let r = this;
          for (; (r = r && (r.parentNode || r.host)); )
            if (r instanceof Wo) {
              (n.parent = r._instance), (n.provides = r._instance.provides);
              break;
            }
        }),
      t
    );
  }
  _applyStyles(t) {
    t &&
      t.forEach((n) => {
        const o = document.createElement("style");
        (o.textContent = n),
          this.shadowRoot.appendChild(o),
          dt.NODE_ENV !== "production" &&
            (this._styles || (this._styles = [])).push(o);
      });
  }
}
const En = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return C(t) ? (n) => Nt(t, n) : t;
};
function Kc(e) {
  e.target.composing = !0;
}
function Pr(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Vt = Symbol("_assign"),
  Bc = {
    created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
      e[Vt] = En(r);
      const i = o || (r.props && r.props.type === "number");
      ot(e, t ? "change" : "input", (s) => {
        if (s.target.composing) return;
        let c = e.value;
        n && (c = c.trim()), i && (c = Ft(c)), e[Vt](c);
      }),
        n &&
          ot(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (ot(e, "compositionstart", Kc),
          ot(e, "compositionend", Pr),
          ot(e, "change", Pr));
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: o, number: r } },
      i
    ) {
      if (((e[Vt] = En(i)), e.composing)) return;
      const s = r || e.type === "number" ? Ft(e.value) : e.value,
        c = t ?? "";
      s !== c &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (o && e.value.trim() === c))) ||
          (e.value = c));
    },
  },
  kc = {
    // <select multiple> value need to be deep traversed
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, o) {
      const r = yn(t);
      ot(e, "change", () => {
        const i = Array.prototype.filter
          .call(e.options, (s) => s.selected)
          .map((s) => (n ? Ft(Nn(s)) : Nn(s)));
        e[Vt](e.multiple ? (r ? new Set(i) : i) : i[0]),
          (e._assigning = !0),
          Ao(() => {
            e._assigning = !1;
          });
      }),
        (e[Vt] = En(o));
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(e, { value: t, oldValue: n, modifiers: { number: o } }) {
      Ar(e, t, n, o);
    },
    beforeUpdate(e, t, n) {
      e[Vt] = En(n);
    },
    updated(e, { value: t, oldValue: n, modifiers: { number: o } }) {
      e._assigning || Ar(e, t, n, o);
    },
  };
function Ar(e, t, n, o) {
  const r = e.multiple,
    i = C(t);
  if (r && !i && !yn(t)) {
    dt.NODE_ENV !== "production" &&
      An(
        `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString
          .call(t)
          .slice(8, -1)}.`
      );
    return;
  }
  for (let s = 0, c = e.options.length; s < c; s++) {
    const u = e.options[s],
      d = Nn(u);
    if (r)
      if (i) {
        const _ = typeof d;
        _ === "string" || _ === "number"
          ? (u.selected = t.includes(o ? Ft(d) : d))
          : (u.selected = os(t, d) > -1);
      } else u.selected = t.has(d);
    else if (vn(Nn(u), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Nn(e) {
  return "_value" in e ? e._value : e.value;
}
const Wc = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  qc = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      o = t.join(".");
    return (
      n[o] ||
      (n[o] = (r) => {
        if (!("key" in r)) return;
        const i = de(r.key);
        if (t.some((s) => s === i || Wc[s] === i)) return e(r);
      })
    );
  },
  Gc = /* @__PURE__ */ W({ patchProp: jc }, bc);
let Mr;
function zc() {
  return Mr || (Mr = Yl(Gc));
}
const Fr = (...e) => {
  zc().render(...e);
};
var Jc = {};
function Yc() {
  Ec();
}
Jc.NODE_ENV !== "production" && Yc();
const Zn = "https://api.github.com",
  Qn = {
    getUserRepos(e) {
      return fetch(`${Zn}/users/${e}/repos`).then((t) => t.json());
    },
    getRepoBranches(e, t) {
      return fetch(`${Zn}/repos/${e}/${t}/branches`).then((n) => n.json());
    },
    getRepoLatestCommit(e, t, n) {
      return fetch(`${Zn}/repos/${e}/${t}/commits?sha=${n}`).then((o) =>
        o.json()
      );
    },
  },
  Xc = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, r] of t) n[o] = r;
    return n;
  },
  Zc = {
    data() {
      return {
        username: "",
        repos: [],
        selectedRepo: "",
        branches: [],
        selectedBranch: "",
        latestCommits: [],
      };
    },
    props: {
      initialUsername: {
        type: String,
        default: "",
      },
    },
    //   lifecycle hook
    mounted() {
      this.$refs.usernameInput.focus(),
        this.initialUsername &&
          ((this.username = this.initialUsername), this.fetchRepos());
    },
    watch: {
      async selectedBranch(e) {
        e &&
          (await this.fetchLatestCommits(this.selectedRepo, e),
          this.$nextTick(() => {
            this.$refs.branchSelect.scrollIntoView({ behavior: "smooth" });
          }));
      },
    },
    methods: {
      async fetchRepos() {
        (this.repos = await Qn.getUserRepos(this.username)),
          (this.selectedRepo = ""),
          (this.branches = []),
          (this.selectedBranch = ""),
          (this.latestCommits = []),
          this.$nextTick(() => {
            this.$refs.usernameInput.focus();
          });
      },
      async selectRepo(e) {
        (this.selectedRepo = e),
          (this.branches = await Qn.getRepoBranches(this.username, e)),
          this.branches.length
            ? (this.selectedBranch = this.branches[0].name)
            : ((this.selectedBranch = ""), (this.latestCommits = []));
      },
      async fetchLatestCommits(e, t, n = 25) {
        (this.latestCommits = await Qn.getRepoLatestCommit(
          this.username,
          e,
          t
        )),
          (this.latestCommits = this.latestCommits.slice(0, n)),
          console.log(this.latestCommits);
      },
    },
  },
  Mn = (e) => (el("data-v-09c33006"), (e = e()), tl(), e),
  Qc = /* @__PURE__ */ Mn(() =>
    /* @__PURE__ */ ce(
      "header",
      null,
      [/* @__PURE__ */ ce("h1", null, "Repo Browser")],
      -1
    )
  ),
  eu = { key: 0 },
  tu = ["onClick"],
  nu = { key: 1 },
  ou = /* @__PURE__ */ Mn(() =>
    /* @__PURE__ */ ce("h2", null, "Selected Repo", -1)
  ),
  ru = { key: 0 },
  iu = /* @__PURE__ */ Mn(() => /* @__PURE__ */ ce("h3", null, "Branches", -1)),
  su = ["value"],
  lu = { key: 2 },
  cu = /* @__PURE__ */ Mn(() =>
    /* @__PURE__ */ ce("h3", null, "Latest Commits", -1)
  );
function uu(e, t, n, o, r, i) {
  return (
    me(),
    ye("div", null, [
      Qc,
      ar(
        ce(
          "input",
          {
            "onUpdate:modelValue": t[0] || (t[0] = (s) => (r.username = s)),
            ref: "usernameInput",
            onKeyup:
              t[1] ||
              (t[1] = qc(
                (...s) => i.fetchRepos && i.fetchRepos(...s),
                ["enter"]
              )),
            placeholder: "GitHub Username",
          },
          null,
          544
        ),
        [[Bc, r.username]]
      ),
      ce(
        "button",
        {
          onClick:
            t[2] || (t[2] = (...s) => i.fetchRepos && i.fetchRepos(...s)),
        },
        "Get Repos"
      ),
      r.repos.length > 0
        ? (me(),
          ye("div", eu, [
            ce("h2", null, Qe(r.username) + " Public Repositories", 1),
            ce("ul", null, [
              (me(!0),
              ye(
                he,
                null,
                Gn(
                  r.repos,
                  (s) => (
                    me(),
                    ye(
                      "li",
                      {
                        key: s.id,
                        onClick: (c) => i.selectRepo(s.name),
                      },
                      Qe(s.name),
                      9,
                      tu
                    )
                  )
                ),
                128
              )),
            ]),
          ]))
        : nn("", !0),
      r.selectedRepo
        ? (me(),
          ye("div", nu, [
            ou,
            ce("h3", null, Qe(r.selectedRepo), 1),
            r.branches.length > 0
              ? (me(),
                ye("div", ru, [
                  iu,
                  ar(
                    ce(
                      "select",
                      {
                        "onUpdate:modelValue":
                          t[3] || (t[3] = (s) => (r.selectedBranch = s)),
                        ref: "branchSelect",
                      },
                      [
                        (me(!0),
                        ye(
                          he,
                          null,
                          Gn(
                            r.branches,
                            (s) => (
                              me(),
                              ye(
                                "option",
                                {
                                  key: s.name,
                                  value: s.name,
                                },
                                Qe(s.name),
                                9,
                                su
                              )
                            )
                          ),
                          128
                        )),
                      ],
                      512
                    ),
                    [[kc, r.selectedBranch]]
                  ),
                ]))
              : nn("", !0),
          ]))
        : nn("", !0),
      r.latestCommits.length > 0
        ? (me(),
          ye("div", lu, [
            cu,
            ce("ul", null, [
              (me(!0),
              ye(
                he,
                null,
                Gn(
                  r.latestCommits,
                  (s, c) => (
                    me(),
                    ye("li", { key: c }, [
                      ce(
                        "h4",
                        null,
                        Qe(s.commit.author.name) +
                          " " +
                          Qe(new Date(s.commit.author.date).toLocaleString()),
                        1
                      ),
                      Li(" - " + Qe(s.commit.message), 1),
                    ])
                  )
                ),
                128
              )),
            ]),
          ]))
        : nn("", !0),
    ])
  );
}
const fu = /* @__PURE__ */ Xc(Zc, [
    ["render", uu],
    ["__scopeId", "data-v-09c33006"],
  ]),
  au = /* @__PURE__ */ Uc({
    ...fu,
    props: ["initialUsername"],
  });
customElements.define("github-user-repos", au);
