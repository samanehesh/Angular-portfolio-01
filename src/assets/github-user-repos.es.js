var Li = {};
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xt(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const K = Li.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ot = Li.NODE_ENV !== "production" ? Object.freeze([]) : [], J = () => {
}, Gr = () => !1, Kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), an = (e) => e.startsWith("onUpdate:"), W = Object.assign, Eo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, zr = Object.prototype.hasOwnProperty, A = (e, t) => zr.call(e, t), C = Array.isArray, rt = (e) => Bt(e) === "[object Map]", yn = (e) => Bt(e) === "[object Set]", Yo = (e) => Bt(e) === "[object Date]", R = (e) => typeof e == "function", G = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", H = (e) => e !== null && typeof e == "object", No = (e) => (H(e) || R(e)) && R(e.then) && R(e.catch), Hi = Object.prototype.toString, Bt = (e) => Hi.call(e), yo = (e) => Bt(e).slice(8, -1), Ui = (e) => Bt(e) === "[object Object]", bo = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pt = /* @__PURE__ */ xt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Jr = /* @__PURE__ */ xt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Yr = /-(\w)/g, Me = bn((e) => e.replace(Yr, (t, n) => n ? n.toUpperCase() : "")), Xr = /\B([A-Z])/g, ae = bn(
  (e) => e.replace(Xr, "-$1").toLowerCase()
), On = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), nt = bn((e) => e ? `on${On(e)}` : ""), pt = (e, t) => !Object.is(e, t), Nt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, dn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, jt = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xo = (e) => {
  const t = G(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Zo;
const Oo = () => Zo || (Zo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vo(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = G(o) ? ts(o) : vo(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (G(e) || H(e))
    return e;
}
const Zr = /;(?![^(]*\))/g, Qr = /:([^]+)/, es = /\/\*[^]*?\*\//g;
function ts(e) {
  const t = {};
  return e.replace(es, "").split(Zr).forEach((n) => {
    if (n) {
      const o = n.split(Qr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function wo(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = wo(e[n]);
      o && (t += o + " ");
    }
  else if (H(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ns = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", os = /* @__PURE__ */ xt(ns);
function Ki(e) {
  return !!e || e === "";
}
function is(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = vn(e[o], t[o]);
  return n;
}
function vn(e, t) {
  if (e === t)
    return !0;
  let n = Yo(e), o = Yo(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Je(e), o = Je(t), n || o)
    return e === t;
  if (n = C(e), o = C(t), n || o)
    return n && o ? is(e, t) : !1;
  if (n = H(e), o = H(t), n || o) {
    if (!n || !o)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const s in e) {
      const c = e.hasOwnProperty(s), u = t.hasOwnProperty(s);
      if (c && !u || !c && u || !vn(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function rs(e, t) {
  return e.findIndex((n) => vn(n, t));
}
const St = (e) => G(e) ? e : e == null ? "" : C(e) || H(e) && (e.toString === Hi || !R(e.toString)) ? JSON.stringify(e, Bi, 2) : String(e), Bi = (e, t) => t && t.__v_isRef ? Bi(e, t.value) : rt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], r) => (n[Un(o, r) + " =>"] = i, n),
    {}
  )
} : yn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Un(n))
} : Je(t) ? Un(t) : H(t) && !C(t) && !Ui(t) ? String(t) : t, Un = (e, t = "") => {
  var n;
  return Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
var X = {};
function Ye(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ee;
class ss {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ee, !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = n;
      }
    } else
      X.NODE_ENV !== "production" && Ye("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ee = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ee = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ls(e, t = Ee) {
  t && t.active && t.effects.push(e);
}
function cs() {
  return Ee;
}
let st;
class Vo {
  constructor(t, n, o, i) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ls(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ze();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (us(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Qe();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = ze, n = st;
    try {
      return ze = !0, st = this, this._runnings++, Qo(this), this.fn();
    } finally {
      ei(this), this._runnings--, st = n, ze = t;
    }
  }
  stop() {
    var t;
    this.active && (Qo(this), ei(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function us(e) {
  return e.value;
}
function Qo(e) {
  e._trackId++, e._depsLength = 0;
}
function ei(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      ki(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function ki(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let ze = !0, eo = 0;
const Wi = [];
function Ze() {
  Wi.push(ze), ze = !1;
}
function Qe() {
  const e = Wi.pop();
  ze = e === void 0 ? !0 : e;
}
function xo() {
  eo++;
}
function Do() {
  for (eo--; !eo && to.length; )
    to.shift()();
}
function qi(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const i = e.deps[e._depsLength];
    i !== t ? (i && ki(i, e), e.deps[e._depsLength++] = t) : e._depsLength++, X.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, W({ effect: e }, n)));
  }
}
const to = [];
function Gi(e, t, n) {
  var o;
  xo();
  for (const i of e.keys()) {
    let r;
    i._dirtyLevel < t && (r ?? (r = e.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = t), i._shouldSchedule && (r ?? (r = e.get(i) === i._trackId)) && (X.NODE_ENV !== "production" && ((o = i.onTrigger) == null || o.call(i, W({ effect: i }, n))), i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && to.push(i.scheduler)));
  }
  Do();
}
const zi = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, no = /* @__PURE__ */ new WeakMap(), lt = Symbol(X.NODE_ENV !== "production" ? "iterate" : ""), oo = Symbol(X.NODE_ENV !== "production" ? "Map key iterate" : "");
function te(e, t, n) {
  if (ze && st) {
    let o = no.get(e);
    o || no.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || o.set(n, i = zi(() => o.delete(n))), qi(
      st,
      i,
      X.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Ce(e, t, n, o, i, r) {
  const s = no.get(e);
  if (!s)
    return;
  let c = [];
  if (t === "clear")
    c = [...s.values()];
  else if (n === "length" && C(e)) {
    const u = Number(o);
    s.forEach((d, _) => {
      (_ === "length" || !Je(_) && _ >= u) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(s.get(n)), t) {
      case "add":
        C(e) ? bo(n) && c.push(s.get("length")) : (c.push(s.get(lt)), rt(e) && c.push(s.get(oo)));
        break;
      case "delete":
        C(e) || (c.push(s.get(lt)), rt(e) && c.push(s.get(oo)));
        break;
      case "set":
        rt(e) && c.push(s.get(lt));
        break;
    }
  xo();
  for (const u of c)
    u && Gi(
      u,
      4,
      X.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: i,
        oldTarget: r
      } : void 0
    );
  Do();
}
const fs = /* @__PURE__ */ xt("__proto__,__v_isRef,__isVue"), Ji = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
), ti = /* @__PURE__ */ as();
function as() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = I(this);
      for (let r = 0, s = this.length; r < s; r++)
        te(o, "get", r + "");
      const i = o[t](...n);
      return i === -1 || i === !1 ? o[t](...n.map(I)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ze(), xo();
      const o = I(this)[t].apply(this, n);
      return Do(), Qe(), o;
    };
  }), e;
}
function ds(e) {
  const t = I(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class Yi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (i ? r ? or : nr : r ? tr : er).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = C(t);
    if (!i) {
      if (s && A(ti, n))
        return Reflect.get(ti, n, o);
      if (n === "hasOwnProperty")
        return ds;
    }
    const c = Reflect.get(t, n, o);
    return (Je(n) ? Ji.has(n) : fs(n)) || (i || te(t, "get", n), r) ? c : ie(c) ? s && bo(n) ? c : c.value : H(c) ? i ? ir(c) : So(c) : c;
  }
}
class Xi extends Yi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const u = ht(r);
      if (!vt(o) && !ht(o) && (r = I(r), o = I(o)), !C(t) && ie(r) && !ie(o))
        return u ? !1 : (r.value = o, !0);
    }
    const s = C(t) && bo(n) ? Number(n) < t.length : A(t, n), c = Reflect.set(t, n, o, i);
    return t === I(i) && (s ? pt(o, r) && Ce(t, "set", n, o, r) : Ce(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = A(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Ce(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Je(n) || !Ji.has(n)) && te(t, "has", n), o;
  }
  ownKeys(t) {
    return te(
      t,
      "iterate",
      C(t) ? "length" : lt
    ), Reflect.ownKeys(t);
  }
}
class Zi extends Yi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return X.NODE_ENV !== "production" && Ye(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return X.NODE_ENV !== "production" && Ye(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ps = /* @__PURE__ */ new Xi(), hs = /* @__PURE__ */ new Zi(), _s = /* @__PURE__ */ new Xi(
  !0
), gs = /* @__PURE__ */ new Zi(!0), Co = (e) => e, wn = (e) => Reflect.getPrototypeOf(e);
function Yt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const i = I(e), r = I(t);
  n || (pt(t, r) && te(i, "get", t), te(i, "get", r));
  const { has: s } = wn(i), c = o ? Co : n ? $o : Ro;
  if (s.call(i, t))
    return c(e.get(t));
  if (s.call(i, r))
    return c(e.get(r));
  e !== i && e.get(t);
}
function Xt(e, t = !1) {
  const n = this.__v_raw, o = I(n), i = I(e);
  return t || (pt(e, i) && te(o, "has", e), te(o, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function Zt(e, t = !1) {
  return e = e.__v_raw, !t && te(I(e), "iterate", lt), Reflect.get(e, "size", e);
}
function ni(e) {
  e = I(e);
  const t = I(this);
  return wn(t).has.call(t, e) || (t.add(e), Ce(t, "add", e, e)), this;
}
function oi(e, t) {
  t = I(t);
  const n = I(this), { has: o, get: i } = wn(n);
  let r = o.call(n, e);
  r ? X.NODE_ENV !== "production" && Qi(n, o, e) : (e = I(e), r = o.call(n, e));
  const s = i.call(n, e);
  return n.set(e, t), r ? pt(t, s) && Ce(n, "set", e, t, s) : Ce(n, "add", e, t), this;
}
function ii(e) {
  const t = I(this), { has: n, get: o } = wn(t);
  let i = n.call(t, e);
  i ? X.NODE_ENV !== "production" && Qi(t, n, e) : (e = I(e), i = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, s = t.delete(e);
  return i && Ce(t, "delete", e, void 0, r), s;
}
function ri() {
  const e = I(this), t = e.size !== 0, n = X.NODE_ENV !== "production" ? rt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Ce(e, "clear", void 0, void 0, n), o;
}
function Qt(e, t) {
  return function(o, i) {
    const r = this, s = r.__v_raw, c = I(s), u = t ? Co : e ? $o : Ro;
    return !e && te(c, "iterate", lt), s.forEach((d, _) => o.call(i, u(d), u(_), r));
  };
}
function en(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = I(i), s = rt(r), c = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, d = i[e](...o), _ = n ? Co : t ? $o : Ro;
    return !t && te(
      r,
      "iterate",
      u ? oo : lt
    ), {
      // iterator protocol
      next() {
        const { value: p, done: y } = d.next();
        return y ? { value: p, done: y } : {
          value: c ? [_(p[0]), _(p[1])] : _(p),
          done: y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ke(e) {
  return function(...t) {
    if (X.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ye(
        `${On(e)} operation ${n}failed: target is readonly.`,
        I(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ms() {
  const e = {
    get(r) {
      return Yt(this, r);
    },
    get size() {
      return Zt(this);
    },
    has: Xt,
    add: ni,
    set: oi,
    delete: ii,
    clear: ri,
    forEach: Qt(!1, !1)
  }, t = {
    get(r) {
      return Yt(this, r, !1, !0);
    },
    get size() {
      return Zt(this);
    },
    has: Xt,
    add: ni,
    set: oi,
    delete: ii,
    clear: ri,
    forEach: Qt(!1, !0)
  }, n = {
    get(r) {
      return Yt(this, r, !0);
    },
    get size() {
      return Zt(this, !0);
    },
    has(r) {
      return Xt.call(this, r, !0);
    },
    add: Ke("add"),
    set: Ke("set"),
    delete: Ke("delete"),
    clear: Ke("clear"),
    forEach: Qt(!0, !1)
  }, o = {
    get(r) {
      return Yt(this, r, !0, !0);
    },
    get size() {
      return Zt(this, !0);
    },
    has(r) {
      return Xt.call(this, r, !0);
    },
    add: Ke("add"),
    set: Ke("set"),
    delete: Ke("delete"),
    clear: Ke("clear"),
    forEach: Qt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = en(
      r,
      !1,
      !1
    ), n[r] = en(
      r,
      !0,
      !1
    ), t[r] = en(
      r,
      !1,
      !0
    ), o[r] = en(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  Es,
  Ns,
  ys,
  bs
] = /* @__PURE__ */ ms();
function Vn(e, t) {
  const n = t ? e ? bs : ys : e ? Ns : Es;
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    A(n, i) && i in o ? n : o,
    i,
    r
  );
}
const Os = {
  get: /* @__PURE__ */ Vn(!1, !1)
}, vs = {
  get: /* @__PURE__ */ Vn(!1, !0)
}, ws = {
  get: /* @__PURE__ */ Vn(!0, !1)
}, Vs = {
  get: /* @__PURE__ */ Vn(!0, !0)
};
function Qi(e, t, n) {
  const o = I(n);
  if (o !== n && t.call(e, o)) {
    const i = yo(e);
    Ye(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap();
function xs(e) {
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
function Ds(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : xs(yo(e));
}
function So(e) {
  return ht(e) ? e : xn(
    e,
    !1,
    ps,
    Os,
    er
  );
}
function Cs(e) {
  return xn(
    e,
    !1,
    _s,
    vs,
    tr
  );
}
function ir(e) {
  return xn(
    e,
    !0,
    hs,
    ws,
    nr
  );
}
function bt(e) {
  return xn(
    e,
    !0,
    gs,
    Vs,
    or
  );
}
function xn(e, t, n, o, i) {
  if (!H(e))
    return X.NODE_ENV !== "production" && Ye(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const s = Ds(e);
  if (s === 0)
    return e;
  const c = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, c), c;
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
function io(e) {
  return ct(e) || ht(e);
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function rr(e) {
  return Object.isExtensible(e) && dn(e, "__v_skip", !0), e;
}
const Ro = (e) => H(e) ? So(e) : e, $o = (e) => H(e) ? ir(e) : e, Ss = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class sr {
  constructor(t, n, o, i) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Vo(
      () => t(this._value),
      () => Kn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = o;
  }
  get value() {
    const t = I(this);
    return (!t._cacheable || t.effect.dirty) && pt(t._value, t._value = t.effect.run()) && Kn(t, 4), $s(t), t.effect._dirtyLevel >= 2 && (X.NODE_ENV !== "production" && this._warnRecursive && Ye(Ss, `

getter: `, this.getter), Kn(t, 2)), t._value;
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
function Rs(e, t, n = !1) {
  let o, i;
  const r = R(e);
  r ? (o = e, i = X.NODE_ENV !== "production" ? () => {
    Ye("Write operation failed: computed value is readonly");
  } : J) : (o = e.get, i = e.set);
  const s = new sr(o, i, r || !i, n);
  return X.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
function $s(e) {
  var t;
  ze && st && (e = I(e), qi(
    st,
    (t = e.dep) != null ? t : e.dep = zi(
      () => e.dep = void 0,
      e instanceof sr ? e : void 0
    ),
    X.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Kn(e, t = 4, n) {
  e = I(e);
  const o = e.dep;
  o && Gi(
    o,
    t,
    X.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function ie(e) {
  return !!(e && e.__v_isRef === !0);
}
function Is(e) {
  return ie(e) ? e.value : e;
}
const Ts = {
  get: (e, t, n) => Is(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return ie(i) && !ie(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function lr(e) {
  return ct(e) ? e : new Proxy(e, Ts);
}
var a = {};
const ut = [];
function nn(e) {
  ut.push(e);
}
function on() {
  ut.pop();
}
function v(e, ...t) {
  Ze();
  const n = ut.length ? ut[ut.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Ps();
  if (o)
    Fe(
      o,
      n,
      11,
      [
        e + t.map((r) => {
          var s, c;
          return (c = (s = r.toString) == null ? void 0 : s.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${Pn(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...As(i)), console.warn(...r);
  }
  Qe();
}
function Ps() {
  let e = ut[ut.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function As(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ms(n));
  }), t;
}
function Ms({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${Pn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...Fs(e.props), r] : [i + r];
}
function Fs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...cr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function cr(e, t, n) {
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ie(t) ? (t = cr(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
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
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Fe(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    kt(i, t, n);
  }
}
function be(e, t, n, o) {
  if (R(e)) {
    const r = Fe(e, t, n, o);
    return r && No(r) && r.catch((s) => {
      kt(s, t, n);
    }), r;
  }
  const i = [];
  for (let r = 0; r < e.length; r++)
    i.push(be(e[r], t, n, o));
  return i;
}
function kt(e, t, n, o = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const s = t.proxy, c = a.NODE_ENV !== "production" ? Io[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const d = r.ec;
      if (d) {
        for (let _ = 0; _ < d.length; _++)
          if (d[_](e, s, c) === !1)
            return;
      }
      r = r.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Fe(
        u,
        null,
        10,
        [e, s, c]
      );
      return;
    }
  }
  js(e, n, i, o);
}
function js(e, t, n, o = !0) {
  if (a.NODE_ENV !== "production") {
    const i = Io[t];
    if (n && nn(n), v(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && on(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Lt = !1, ro = !1;
const ne = [];
let xe = 0;
const wt = [];
let Ae = null, ke = 0;
const ur = /* @__PURE__ */ Promise.resolve();
let To = null;
const Ls = 100;
function Po(e) {
  const t = To || ur;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hs(e) {
  let t = xe + 1, n = ne.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = ne[o], r = Ht(i);
    r < e || r === e && i.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Dn(e) {
  (!ne.length || !ne.includes(
    e,
    Lt && e.allowRecurse ? xe + 1 : xe
  )) && (e.id == null ? ne.push(e) : ne.splice(Hs(e.id), 0, e), fr());
}
function fr() {
  !Lt && !ro && (ro = !0, To = ur.then(pr));
}
function Us(e) {
  const t = ne.indexOf(e);
  t > xe && ne.splice(t, 1);
}
function ar(e) {
  C(e) ? wt.push(...e) : (!Ae || !Ae.includes(
    e,
    e.allowRecurse ? ke + 1 : ke
  )) && wt.push(e), fr();
}
function si(e, t, n = Lt ? xe + 1 : 0) {
  for (a.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ne.length; n++) {
    const o = ne[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || a.NODE_ENV !== "production" && Ao(t, o))
        continue;
      ne.splice(n, 1), n--, o();
    }
  }
}
function dr(e) {
  if (wt.length) {
    const t = [...new Set(wt)].sort(
      (n, o) => Ht(n) - Ht(o)
    );
    if (wt.length = 0, Ae) {
      Ae.push(...t);
      return;
    }
    for (Ae = t, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ke = 0; ke < Ae.length; ke++)
      a.NODE_ENV !== "production" && Ao(e, Ae[ke]) || Ae[ke]();
    Ae = null, ke = 0;
  }
}
const Ht = (e) => e.id == null ? 1 / 0 : e.id, Ks = (e, t) => {
  const n = Ht(e) - Ht(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function pr(e) {
  ro = !1, Lt = !0, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ne.sort(Ks);
  const t = a.NODE_ENV !== "production" ? (n) => Ao(e, n) : J;
  try {
    for (xe = 0; xe < ne.length; xe++) {
      const n = ne[xe];
      if (n && n.active !== !1) {
        if (a.NODE_ENV !== "production" && t(n))
          continue;
        Fe(n, null, 14);
      }
    }
  } finally {
    xe = 0, ne.length = 0, dr(e), Lt = !1, To = null, (ne.length || wt.length) && pr(e);
  }
}
function Ao(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ls) {
      const o = t.ownerInstance, i = o && Kr(o.type);
      return kt(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let ft = !1;
const yt = /* @__PURE__ */ new Set();
a.NODE_ENV !== "production" && (Oo().__VUE_HMR_RUNTIME__ = {
  createRecord: Bn(hr),
  rerender: Bn(Ws),
  reload: Bn(qs)
});
const _t = /* @__PURE__ */ new Map();
function Bs(e) {
  const t = e.type.__hmrId;
  let n = _t.get(t);
  n || (hr(t, e.type), n = _t.get(t)), n.instances.add(e);
}
function ks(e) {
  _t.get(e.type.__hmrId).instances.delete(e);
}
function hr(e, t) {
  return _t.has(e) ? !1 : (_t.set(e, {
    initialDef: At(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function At(e) {
  return Br(e) ? e.__vccOpts : e;
}
function Ws(e, t) {
  const n = _t.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, At(o.type).render = t), o.renderCache = [], ft = !0, o.effect.dirty = !0, o.update(), ft = !1;
  }));
}
function qs(e, t) {
  const n = _t.get(e);
  if (!n)
    return;
  t = At(t), li(n.initialDef, t);
  const o = [...n.instances];
  for (const i of o) {
    const r = At(i.type);
    yt.has(r) || (r !== n.initialDef && li(r, t), yt.add(r)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (yt.add(r), i.ceReload(t.styles), yt.delete(r)) : i.parent ? (i.parent.effect.dirty = !0, Dn(i.parent.update)) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  ar(() => {
    for (const i of o)
      yt.delete(
        At(i.type)
      );
  });
}
function li(e, t) {
  W(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Bn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let De, It = [], so = !1;
function Wt(e, ...t) {
  De ? De.emit(e, ...t) : so || It.push({ event: e, args: t });
}
function _r(e, t) {
  var n, o;
  De = e, De ? (De.enabled = !0, It.forEach(({ event: i, args: r }) => De.emit(i, ...r)), It = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    _r(r, t);
  }), setTimeout(() => {
    De || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, so = !0, It = []);
  }, 3e3)) : (so = !0, It = []);
}
function Gs(e, t) {
  Wt("app:init", e, t, {
    Fragment: he,
    Text: qt,
    Comment: pe,
    Static: cn
  });
}
function zs(e) {
  Wt("app:unmount", e);
}
const Js = /* @__PURE__ */ Mo(
  "component:added"
  /* COMPONENT_ADDED */
), gr = /* @__PURE__ */ Mo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ys = /* @__PURE__ */ Mo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Xs = (e) => {
  De && typeof De.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !De.cleanupBuffer(e) && Ys(e);
};
function Mo(e) {
  return (t) => {
    Wt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Zs = /* @__PURE__ */ mr(
  "perf:start"
  /* PERFORMANCE_START */
), Qs = /* @__PURE__ */ mr(
  "perf:end"
  /* PERFORMANCE_END */
);
function mr(e) {
  return (t, n, o) => {
    Wt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function el(e, t, n) {
  Wt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function tl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || K;
  if (a.NODE_ENV !== "production") {
    const {
      emitsOptions: _,
      propsOptions: [p]
    } = e;
    if (_)
      if (!(t in _))
        (!p || !(nt(t) in p)) && v(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${nt(t)}" prop.`
        );
      else {
        const y = _[t];
        R(y) && (y(...n) || v(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && t.slice(7);
  if (s && s in o) {
    const _ = `${s === "modelValue" ? "model" : s}Modifiers`, { number: p, trim: y } = o[_] || K;
    y && (i = n.map((x) => G(x) ? x.trim() : x)), p && (i = n.map(jt));
  }
  if (a.NODE_ENV !== "production" && el(e, t, i), a.NODE_ENV !== "production") {
    const _ = t.toLowerCase();
    _ !== t && o[nt(_)] && v(
      `Event "${_}" is emitted in component ${Pn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ae(
        t
      )}" instead of "${t}".`
    );
  }
  let c, u = o[c = nt(t)] || // also try camelCase event handler (#2249)
  o[c = nt(Me(t))];
  !u && r && (u = o[c = nt(ae(t))]), u && be(
    u,
    e,
    6,
    i
  );
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, be(
      d,
      e,
      6,
      i
    );
  }
}
function Er(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, c = !1;
  if (!R(e)) {
    const u = (d) => {
      const _ = Er(d, t, !0);
      _ && (c = !0, W(s, _));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (H(e) && o.set(e, null), null) : (C(r) ? r.forEach((u) => s[u] = null) : W(s, r), H(e) && o.set(e, s), s);
}
function Cn(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), A(e, t[0].toLowerCase() + t.slice(1)) || A(e, ae(t)) || A(e, t));
}
let oe = null, Sn = null;
function pn(e) {
  const t = oe;
  return oe = e, Sn = e && e.type.__scopeId || null, t;
}
function nl(e) {
  Sn = e;
}
function ol() {
  Sn = null;
}
function il(e, t = oe, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && yi(-1);
    const r = pn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      pn(r), o._d && yi(1);
    }
    return a.NODE_ENV !== "production" && gr(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let lo = !1;
function hn() {
  lo = !0;
}
function kn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    props: r,
    propsOptions: [s],
    slots: c,
    attrs: u,
    emit: d,
    render: _,
    renderCache: p,
    data: y,
    setupState: x,
    ctx: P,
    inheritAttrs: M
  } = e;
  let ee, Y;
  const de = pn(e);
  a.NODE_ENV !== "production" && (lo = !1);
  try {
    if (n.shapeFlag & 4) {
      const z = i || o, _e = a.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(z, {
        get(T, re, se) {
          return v(
            `Property '${String(
              re
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(T, re, se);
        }
      }) : z;
      ee = Ne(
        _.call(
          _e,
          z,
          p,
          r,
          x,
          y,
          P
        )
      ), Y = u;
    } else {
      const z = t;
      a.NODE_ENV !== "production" && u === r && hn(), ee = Ne(
        z.length > 1 ? z(
          r,
          a.NODE_ENV !== "production" ? {
            get attrs() {
              return hn(), u;
            },
            slots: c,
            emit: d
          } : { attrs: u, slots: c, emit: d }
        ) : z(
          r,
          null
          /* we know it doesn't need it */
        )
      ), Y = t.props ? u : rl(u);
    }
  } catch (z) {
    Ft.length = 0, kt(z, e, 1), ee = Se(pe);
  }
  let k = ee, q;
  if (a.NODE_ENV !== "production" && ee.patchFlag > 0 && ee.patchFlag & 2048 && ([k, q] = Nr(ee)), Y && M !== !1) {
    const z = Object.keys(Y), { shapeFlag: _e } = k;
    if (z.length) {
      if (_e & 7)
        s && z.some(an) && (Y = sl(
          Y,
          s
        )), k = Xe(k, Y);
      else if (a.NODE_ENV !== "production" && !lo && k.type !== pe) {
        const T = Object.keys(u), re = [], se = [];
        for (let Re = 0, Le = T.length; Re < Le; Re++) {
          const ge = T[Re];
          Kt(ge) ? an(ge) || re.push(ge[2].toLowerCase() + ge.slice(3)) : se.push(ge);
        }
        se.length && v(
          `Extraneous non-props attributes (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), re.length && v(
          `Extraneous non-emits event listeners (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (a.NODE_ENV !== "production" && !ci(k) && v(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), k = Xe(k), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && (a.NODE_ENV !== "production" && !ci(k) && v(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), k.transition = n.transition), a.NODE_ENV !== "production" && q ? q(k) : ee = k, pn(de), ee;
}
const Nr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Fo(t, !1);
  if (o) {
    if (a.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Nr(o);
  } else
    return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (c) => {
    t[i] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ne(o), s];
};
function Fo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (Ko(i)) {
      if (i.type !== pe || i.children === "v-if") {
        if (n)
          return;
        if (n = i, a.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Fo(n.children);
      }
    } else
      return;
  }
  return n;
}
const rl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, sl = (e, t) => {
  const n = {};
  for (const o in e)
    (!an(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, ci = (e) => e.shapeFlag & 7 || e.type === pe;
function ll(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: c, patchFlag: u } = t, d = r.emitsOptions;
  if (a.NODE_ENV !== "production" && (i || c) && ft || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? ui(o, s, d) : !!s;
    if (u & 8) {
      const _ = t.dynamicProps;
      for (let p = 0; p < _.length; p++) {
        const y = _[p];
        if (s[y] !== o[y] && !Cn(d, y))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : o === s ? !1 : o ? s ? ui(o, s, d) : !0 : !!s;
  return !1;
}
function ui(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Cn(n, r))
      return !0;
  }
  return !1;
}
function cl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ul = Symbol.for("v-ndc"), fl = (e) => e.__isSuspense;
function al(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : ar(e);
}
const dl = Symbol.for("v-scx"), pl = () => {
  {
    const e = sn(dl);
    return e || a.NODE_ENV !== "production" && v(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, tn = {};
function Wn(e, t, n) {
  return a.NODE_ENV !== "production" && !R(t) && v(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), yr(e, t, n);
}
function yr(e, t, {
  immediate: n,
  deep: o,
  flush: i,
  once: r,
  onTrack: s,
  onTrigger: c
} = K) {
  if (t && r) {
    const T = t;
    t = (...re) => {
      T(...re), _e();
    };
  }
  a.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && v(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), a.NODE_ENV !== "production" && !t && (n !== void 0 && v(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && v(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && v(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (T) => {
    v(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = Q, _ = (T) => o === !0 ? T : (
    // for deep: false, only traverse root-level properties
    it(T, o === !1 ? 1 : void 0)
  );
  let p, y = !1, x = !1;
  if (ie(e) ? (p = () => e.value, y = vt(e)) : ct(e) ? (p = () => _(e), y = !0) : C(e) ? (x = !0, y = e.some((T) => ct(T) || vt(T)), p = () => e.map((T) => {
    if (ie(T))
      return T.value;
    if (ct(T))
      return _(T);
    if (R(T))
      return Fe(T, d, 2);
    a.NODE_ENV !== "production" && u(T);
  })) : R(e) ? t ? p = () => Fe(e, d, 2) : p = () => (P && P(), be(
    e,
    d,
    3,
    [M]
  )) : (p = J, a.NODE_ENV !== "production" && u(e)), t && o) {
    const T = p;
    p = () => it(T());
  }
  let P, M = (T) => {
    P = q.onStop = () => {
      Fe(T, d, 4), P = q.onStop = void 0;
    };
  }, ee;
  if (In)
    if (M = J, t ? n && be(t, d, 3, [
      p(),
      x ? [] : void 0,
      M
    ]) : p(), i === "sync") {
      const T = pl();
      ee = T.__watcherHandles || (T.__watcherHandles = []);
    } else
      return J;
  let Y = x ? new Array(e.length).fill(tn) : tn;
  const de = () => {
    if (!(!q.active || !q.dirty))
      if (t) {
        const T = q.run();
        (o || y || (x ? T.some((re, se) => pt(re, Y[se])) : pt(T, Y))) && (P && P(), be(t, d, 3, [
          T,
          // pass undefined as the old value when it's changed for the first time
          Y === tn ? void 0 : x && Y[0] === tn ? [] : Y,
          M
        ]), Y = T);
      } else
        q.run();
  };
  de.allowRecurse = !!t;
  let k;
  i === "sync" ? k = de : i === "post" ? k = () => fe(de, d && d.suspense) : (de.pre = !0, d && (de.id = d.uid), k = () => Dn(de));
  const q = new Vo(p, J, k), z = cs(), _e = () => {
    q.stop(), z && Eo(z.effects, q);
  };
  return a.NODE_ENV !== "production" && (q.onTrack = s, q.onTrigger = c), t ? n ? de() : Y = q.run() : i === "post" ? fe(
    q.run.bind(q),
    d && d.suspense
  ) : q.run(), ee && ee.push(_e), _e;
}
function hl(e, t, n) {
  const o = this.proxy, i = G(e) ? e.includes(".") ? br(o, e) : () => o[e] : e.bind(o, o);
  let r;
  R(t) ? r = t : (r = t.handler, n = t);
  const s = Gt(this), c = yr(i, r.bind(o), n);
  return s(), c;
}
function br(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
function it(e, t, n = 0, o) {
  if (!H(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), ie(e))
    it(e.value, t, n, o);
  else if (C(e))
    for (let i = 0; i < e.length; i++)
      it(e[i], t, n, o);
  else if (yn(e) || rt(e))
    e.forEach((i) => {
      it(i, t, n, o);
    });
  else if (Ui(e))
    for (const i in e)
      it(e[i], t, n, o);
  return e;
}
function Or(e) {
  Jr(e) && v("Do not use built-in directive ids as custom directive id: " + e);
}
function qn(e, t) {
  if (oe === null)
    return a.NODE_ENV !== "production" && v("withDirectives can only be used inside render functions."), e;
  const n = Tn(oe) || oe.proxy, o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, s, c, u = K] = t[i];
    r && (R(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && it(s), o.push({
      dir: r,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: c,
      modifiers: u
    }));
  }
  return e;
}
function et(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const c = i[s];
    r && (c.oldValue = r[s].value);
    let u = c.dir[o];
    u && (Ze(), be(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Qe());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _l(e, t) {
  return R(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    W({ name: e.name }, t, { setup: e })
  ) : e;
}
const rn = (e) => !!e.type.__asyncLoader, jo = (e) => e.type.__isKeepAlive;
function gl(e, t) {
  vr(e, "a", t);
}
function ml(e, t) {
  vr(e, "da", t);
}
function vr(e, t, n = Q) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Rn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      jo(i.parent.vnode) && El(o, t, n, i), i = i.parent;
  }
}
function El(e, t, n, o) {
  const i = Rn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  wr(() => {
    Eo(o[t], i);
  }, n);
}
function Rn(e, t, n = Q, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      Ze();
      const c = Gt(n), u = be(t, n, e, s);
      return c(), Qe(), u;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (a.NODE_ENV !== "production") {
    const i = nt(Io[e].replace(/ hook$/, ""));
    v(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const je = (e) => (t, n = Q) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!In || e === "sp") && Rn(e, (...o) => t(...o), n)
), Nl = je("bm"), yl = je("m"), bl = je("bu"), Ol = je("u"), vl = je("bum"), wr = je("um"), wl = je("sp"), Vl = je(
  "rtg"
), xl = je(
  "rtc"
);
function Dl(e, t = Q) {
  Rn("ec", e, t);
}
function fi(e, t, n, o) {
  let i;
  const r = n && n[o];
  if (C(e) || G(e)) {
    i = new Array(e.length);
    for (let s = 0, c = e.length; s < c; s++)
      i[s] = t(e[s], s, void 0, r && r[s]);
  } else if (typeof e == "number") {
    a.NODE_ENV !== "production" && !Number.isInteger(e) && v(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, r && r[s]);
  } else if (H(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, c) => t(s, c, void 0, r && r[c])
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let c = 0, u = s.length; c < u; c++) {
        const d = s[c];
        i[c] = t(e[d], d, c, r && r[c]);
      }
    }
  else
    i = [];
  return n && (n[o] = i), i;
}
const co = (e) => e ? Hr(e) ? Tn(e) || e.proxy : co(e.parent) : null, at = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ W(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => a.NODE_ENV !== "production" ? bt(e.props) : e.props,
    $attrs: (e) => a.NODE_ENV !== "production" ? bt(e.attrs) : e.attrs,
    $slots: (e) => a.NODE_ENV !== "production" ? bt(e.slots) : e.slots,
    $refs: (e) => a.NODE_ENV !== "production" ? bt(e.refs) : e.refs,
    $parent: (e) => co(e.parent),
    $root: (e) => co(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ho(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Dn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Po.bind(e.proxy)),
    $watch: (e) => hl.bind(e)
  })
), Lo = (e) => e === "_" || e === "$", Gn = (e, t) => e !== K && !e.__isScriptSetup && A(e, t), Vr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: c, appContext: u } = e;
    if (a.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const x = s[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Gn(o, t))
          return s[t] = 1, o[t];
        if (i !== K && A(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && A(d, t)
        )
          return s[t] = 3, r[t];
        if (n !== K && A(n, t))
          return s[t] = 4, n[t];
        uo && (s[t] = 0);
      }
    }
    const _ = at[t];
    let p, y;
    if (_)
      return t === "$attrs" ? (te(e, "get", t), a.NODE_ENV !== "production" && hn()) : a.NODE_ENV !== "production" && t === "$slots" && te(e, "get", t), _(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== K && A(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      y = u.config.globalProperties, A(y, t)
    )
      return y[t];
    a.NODE_ENV !== "production" && oe && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== K && Lo(t[0]) && A(i, t) ? v(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === oe && v(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return Gn(i, t) ? (i[t] = n, !0) : a.NODE_ENV !== "production" && i.__isScriptSetup && A(i, t) ? (v(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== K && A(o, t) ? (o[t] = n, !0) : A(e.props, t) ? (a.NODE_ENV !== "production" && v(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (a.NODE_ENV !== "production" && v(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (a.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r }
  }, s) {
    let c;
    return !!n[s] || e !== K && A(e, s) || Gn(t, s) || (c = r[0]) && A(c, s) || A(o, s) || A(at, s) || A(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : A(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
a.NODE_ENV !== "production" && (Vr.ownKeys = (e) => (v(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Cl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(at).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => at[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: J
    });
  }), t;
}
function Sl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: J
    });
  });
}
function Rl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(I(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Lo(o[0])) {
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
        set: J
      });
    }
  });
}
function ai(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function $l() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? v(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let uo = !0;
function Il(e) {
  const t = Ho(e), n = e.proxy, o = e.ctx;
  uo = !1, t.beforeCreate && di(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
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
    deactivated: ee,
    beforeDestroy: Y,
    beforeUnmount: de,
    destroyed: k,
    unmounted: q,
    render: z,
    renderTracked: _e,
    renderTriggered: T,
    errorCaptured: re,
    serverPrefetch: se,
    // public API
    expose: Re,
    inheritAttrs: Le,
    // assets
    components: ge,
    directives: zt,
    filters: Wo
  } = t, He = a.NODE_ENV !== "production" ? $l() : null;
  if (a.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const j in L)
        He("Props", j);
  }
  if (d && Tl(d, o, He), s)
    for (const L in s) {
      const j = s[L];
      R(j) ? (a.NODE_ENV !== "production" ? Object.defineProperty(o, L, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[L] = j.bind(n), a.NODE_ENV !== "production" && He("Methods", L)) : a.NODE_ENV !== "production" && v(
        `Method "${L}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    a.NODE_ENV !== "production" && !R(i) && v(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const L = i.call(n, n);
    if (a.NODE_ENV !== "production" && No(L) && v(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !H(L))
      a.NODE_ENV !== "production" && v("data() should return an object.");
    else if (e.data = So(L), a.NODE_ENV !== "production")
      for (const j in L)
        He("Data", j), Lo(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => L[j],
          set: J
        });
  }
  if (uo = !0, r)
    for (const L in r) {
      const j = r[L], Oe = R(j) ? j.bind(n, n) : R(j.get) ? j.get.bind(n, n) : J;
      a.NODE_ENV !== "production" && Oe === J && v(`Computed property "${L}" has no getter.`);
      const Mn = !R(j) && R(j.set) ? j.set.bind(n) : a.NODE_ENV !== "production" ? () => {
        v(
          `Write operation failed: computed property "${L}" is readonly.`
        );
      } : J, Dt = yc({
        get: Oe,
        set: Mn
      });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Dt.value,
        set: (gt) => Dt.value = gt
      }), a.NODE_ENV !== "production" && He("Computed", L);
    }
  if (c)
    for (const L in c)
      xr(c[L], o, n, L);
  if (u) {
    const L = R(u) ? u.call(n) : u;
    Reflect.ownKeys(L).forEach((j) => {
      Ll(j, L[j]);
    });
  }
  _ && di(_, e, "c");
  function ue(L, j) {
    C(j) ? j.forEach((Oe) => L(Oe.bind(n))) : j && L(j.bind(n));
  }
  if (ue(Nl, p), ue(yl, y), ue(bl, x), ue(Ol, P), ue(gl, M), ue(ml, ee), ue(Dl, re), ue(xl, _e), ue(Vl, T), ue(vl, de), ue(wr, q), ue(wl, se), C(Re))
    if (Re.length) {
      const L = e.exposed || (e.exposed = {});
      Re.forEach((j) => {
        Object.defineProperty(L, j, {
          get: () => n[j],
          set: (Oe) => n[j] = Oe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  z && e.render === J && (e.render = z), Le != null && (e.inheritAttrs = Le), ge && (e.components = ge), zt && (e.directives = zt);
}
function Tl(e, t, n = J) {
  C(e) && (e = fo(e));
  for (const o in e) {
    const i = e[o];
    let r;
    H(i) ? "default" in i ? r = sn(
      i.from || o,
      i.default,
      !0
    ) : r = sn(i.from || o) : r = sn(i), ie(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, a.NODE_ENV !== "production" && n("Inject", o);
  }
}
function di(e, t, n) {
  be(
    C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xr(e, t, n, o) {
  const i = o.includes(".") ? br(n, o) : () => n[o];
  if (G(e)) {
    const r = t[e];
    R(r) ? Wn(i, r) : a.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e}"`, r);
  } else if (R(e))
    Wn(i, e.bind(n));
  else if (H(e))
    if (C(e))
      e.forEach((r) => xr(r, t, n, o));
    else {
      const r = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(r) ? Wn(i, r, e) : a.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    a.NODE_ENV !== "production" && v(`Invalid watch option: "${o}"`, e);
}
function Ho(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !i.length && !n && !o ? u = t : (u = {}, i.length && i.forEach(
    (d) => _n(u, d, s, !0)
  ), _n(u, t, s)), H(t) && r.set(t, u), u;
}
function _n(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && _n(e, r, n, !0), i && i.forEach(
    (s) => _n(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      a.NODE_ENV !== "production" && v(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Pl[s] || n && n[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const Pl = {
  data: pi,
  props: hi,
  emits: hi,
  // objects
  methods: Tt,
  computed: Tt,
  // lifecycle
  beforeCreate: ce,
  created: ce,
  beforeMount: ce,
  mounted: ce,
  beforeUpdate: ce,
  updated: ce,
  beforeDestroy: ce,
  beforeUnmount: ce,
  destroyed: ce,
  unmounted: ce,
  activated: ce,
  deactivated: ce,
  errorCaptured: ce,
  serverPrefetch: ce,
  // assets
  components: Tt,
  directives: Tt,
  // watch
  watch: Ml,
  // provide / inject
  provide: pi,
  inject: Al
};
function pi(e, t) {
  return t ? e ? function() {
    return W(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Al(e, t) {
  return Tt(fo(e), fo(t));
}
function fo(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tt(e, t) {
  return e ? W(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hi(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : W(
    /* @__PURE__ */ Object.create(null),
    ai(e),
    ai(t ?? {})
  ) : t;
}
function Ml(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = W(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ce(e[o], t[o]);
  return n;
}
function Dr() {
  return {
    app: null,
    config: {
      isNativeTag: Gr,
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
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Fl = 0;
function jl(e, t) {
  return function(o, i = null) {
    R(o) || (o = W({}, o)), i != null && !H(i) && (a.NODE_ENV !== "production" && v("root props passed to app.mount() must be an object."), i = null);
    const r = Dr(), s = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = r.app = {
      _uid: Fl++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: wi,
      get config() {
        return r.config;
      },
      set config(d) {
        a.NODE_ENV !== "production" && v(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ..._) {
        return s.has(d) ? a.NODE_ENV !== "production" && v("Plugin has already been applied to target app.") : d && R(d.install) ? (s.add(d), d.install(u, ..._)) : R(d) ? (s.add(d), d(u, ..._)) : a.NODE_ENV !== "production" && v(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(d) {
        return r.mixins.includes(d) ? a.NODE_ENV !== "production" && v(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), u;
      },
      component(d, _) {
        return a.NODE_ENV !== "production" && go(d, r.config), _ ? (a.NODE_ENV !== "production" && r.components[d] && v(`Component "${d}" has already been registered in target app.`), r.components[d] = _, u) : r.components[d];
      },
      directive(d, _) {
        return a.NODE_ENV !== "production" && Or(d), _ ? (a.NODE_ENV !== "production" && r.directives[d] && v(`Directive "${d}" has already been registered in target app.`), r.directives[d] = _, u) : r.directives[d];
      },
      mount(d, _, p) {
        if (c)
          a.NODE_ENV !== "production" && v(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          a.NODE_ENV !== "production" && d.__vue_app__ && v(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const y = Se(o, i);
          return y.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), a.NODE_ENV !== "production" && (r.reload = () => {
            e(
              Xe(y),
              d,
              p
            );
          }), _ && t ? t(y, d) : e(y, d, p), c = !0, u._container = d, d.__vue_app__ = u, a.NODE_ENV !== "production" && (u._instance = y.component, Gs(u, wi)), Tn(y.component) || y.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, u._container), a.NODE_ENV !== "production" && (u._instance = null, zs(u)), delete u._container.__vue_app__) : a.NODE_ENV !== "production" && v("Cannot unmount an app that is not mounted.");
      },
      provide(d, _) {
        return a.NODE_ENV !== "production" && d in r.provides && v(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), r.provides[d] = _, u;
      },
      runWithContext(d) {
        const _ = Mt;
        Mt = u;
        try {
          return d();
        } finally {
          Mt = _;
        }
      }
    };
    return u;
  };
}
let Mt = null;
function Ll(e, t) {
  if (!Q)
    a.NODE_ENV !== "production" && v("provide() can only be used inside setup().");
  else {
    let n = Q.provides;
    const o = Q.parent && Q.parent.provides;
    o === n && (n = Q.provides = Object.create(o)), n[e] = t;
  }
}
function sn(e, t, n = !1) {
  const o = Q || oe;
  if (o || Mt) {
    const i = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Mt._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
    a.NODE_ENV !== "production" && v(`injection "${String(e)}" not found.`);
  } else
    a.NODE_ENV !== "production" && v("inject() can only be used inside setup() or functional components.");
}
function Hl(e, t, n, o = !1) {
  const i = {}, r = {};
  dn(r, $n, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Cr(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  a.NODE_ENV !== "production" && Rr(t || {}, i, e), n ? e.props = o ? i : Cs(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Ul(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Kl(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, c = I(i), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(a.NODE_ENV !== "production" && Ul(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const _ = e.vnode.dynamicProps;
      for (let p = 0; p < _.length; p++) {
        let y = _[p];
        if (Cn(e.emitsOptions, y))
          continue;
        const x = t[y];
        if (u)
          if (A(r, y))
            x !== r[y] && (r[y] = x, d = !0);
          else {
            const P = Me(y);
            i[P] = ao(
              u,
              c,
              P,
              x,
              e,
              !1
            );
          }
        else
          x !== r[y] && (r[y] = x, d = !0);
      }
    }
  } else {
    Cr(e, t, i, r) && (d = !0);
    let _;
    for (const p in c)
      (!t || // for camelCase
      !A(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = ae(p)) === p || !A(t, _))) && (u ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[_] !== void 0) && (i[p] = ao(
        u,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (r !== c)
      for (const p in r)
        (!t || !A(t, p)) && (delete r[p], d = !0);
  }
  d && Ce(e, "set", "$attrs"), a.NODE_ENV !== "production" && Rr(t || {}, i, e);
}
function Cr(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let u in t) {
      if (Pt(u))
        continue;
      const d = t[u];
      let _;
      i && A(i, _ = Me(u)) ? !r || !r.includes(_) ? n[_] = d : (c || (c = {}))[_] = d : Cn(e.emitsOptions, u) || (!(u in o) || d !== o[u]) && (o[u] = d, s = !0);
    }
  if (r) {
    const u = I(n), d = c || K;
    for (let _ = 0; _ < r.length; _++) {
      const p = r[_];
      n[p] = ao(
        i,
        u,
        p,
        d[p],
        e,
        !A(d, p)
      );
    }
  }
  return s;
}
function ao(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const c = A(s, "default");
    if (c && o === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && R(u)) {
        const { propsDefaults: d } = i;
        if (n in d)
          o = d[n];
        else {
          const _ = Gt(i);
          o = d[n] = u.call(
            null,
            t
          ), _();
        }
      } else
        o = u;
    }
    s[
      0
      /* shouldCast */
    ] && (r && !c ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === ae(n)) && (o = !0));
  }
  return o;
}
function Sr(e, t, n = !1) {
  const o = t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, c = [];
  let u = !1;
  if (!R(e)) {
    const _ = (p) => {
      u = !0;
      const [y, x] = Sr(p, t, !0);
      W(s, y), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!r && !u)
    return H(e) && o.set(e, Ot), Ot;
  if (C(r))
    for (let _ = 0; _ < r.length; _++) {
      a.NODE_ENV !== "production" && !G(r[_]) && v("props must be strings when using array syntax.", r[_]);
      const p = Me(r[_]);
      _i(p) && (s[p] = K);
    }
  else if (r) {
    a.NODE_ENV !== "production" && !H(r) && v("invalid props options", r);
    for (const _ in r) {
      const p = Me(_);
      if (_i(p)) {
        const y = r[_], x = s[p] = C(y) || R(y) ? { type: y } : W({}, y);
        if (x) {
          const P = mi(Boolean, x.type), M = mi(String, x.type);
          x[
            0
            /* shouldCast */
          ] = P > -1, x[
            1
            /* shouldCastTrue */
          ] = M < 0 || P < M, (P > -1 || A(x, "default")) && c.push(p);
        }
      }
    }
  }
  const d = [s, c];
  return H(e) && o.set(e, d), d;
}
function _i(e) {
  return e[0] !== "$" && !Pt(e) ? !0 : (a.NODE_ENV !== "production" && v(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function po(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gi(e, t) {
  return po(e) === po(t);
}
function mi(e, t) {
  return C(t) ? t.findIndex((n) => gi(n, e)) : R(t) && gi(t, e) ? 0 : -1;
}
function Rr(e, t, n) {
  const o = I(t), i = n.propsOptions[0];
  for (const r in i) {
    let s = i[r];
    s != null && Bl(
      r,
      o[r],
      s,
      a.NODE_ENV !== "production" ? bt(o) : o,
      !A(e, r) && !A(e, ae(r))
    );
  }
}
function Bl(e, t, n, o, i) {
  const { type: r, required: s, validator: c, skipCheck: u } = n;
  if (s && i) {
    v('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !u) {
      let d = !1;
      const _ = C(r) ? r : [r], p = [];
      for (let y = 0; y < _.length && !d; y++) {
        const { valid: x, expectedType: P } = Wl(t, _[y]);
        p.push(P || ""), d = x;
      }
      if (!d) {
        v(ql(e, t, p));
        return;
      }
    }
    c && !c(t, o) && v('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const kl = /* @__PURE__ */ xt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Wl(e, t) {
  let n;
  const o = po(t);
  if (kl(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = H(e) : o === "Array" ? n = C(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function ql(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(On).join(" | ")}`;
  const i = n[0], r = yo(t), s = Ei(t, i), c = Ei(t, r);
  return n.length === 1 && Ni(i) && !Gl(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, Ni(r) && (o += `with value ${c}.`), o;
}
function Ei(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ni(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Gl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const $r = (e) => e[0] === "_" || e === "$stable", Uo = (e) => C(e) ? e.map(Ne) : [Ne(e)], zl = (e, t, n) => {
  if (t._n)
    return t;
  const o = il((...i) => (a.NODE_ENV !== "production" && Q && (!n || n.root === Q.root) && v(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Uo(t(...i))), n);
  return o._c = !1, o;
}, Ir = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if ($r(i))
      continue;
    const r = e[i];
    if (R(r))
      t[i] = zl(i, r, o);
    else if (r != null) {
      a.NODE_ENV !== "production" && v(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = Uo(r);
      t[i] = () => s;
    }
  }
}, Tr = (e, t) => {
  a.NODE_ENV !== "production" && !jo(e.vnode) && v(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Uo(t);
  e.slots.default = () => n;
}, Jl = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = I(t), dn(t, "_", n)) : Ir(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Tr(e, t);
  dn(e.slots, $n, 1);
}, Yl = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = K;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? a.NODE_ENV !== "production" && ft ? (W(i, t), Ce(e, "set", "$slots")) : n && c === 1 ? r = !1 : (W(i, t), !n && c === 1 && delete i._) : (r = !t.$stable, Ir(t, i)), s = t;
  } else
    t && (Tr(e, t), s = { default: 1 });
  if (r)
    for (const c in i)
      !$r(c) && s[c] == null && delete i[c];
};
function ho(e, t, n, o, i = !1) {
  if (C(e)) {
    e.forEach(
      (y, x) => ho(
        y,
        t && (C(t) ? t[x] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (rn(o) && !i)
    return;
  const r = o.shapeFlag & 4 ? Tn(o.component) || o.component.proxy : o.el, s = i ? null : r, { i: c, r: u } = e;
  if (a.NODE_ENV !== "production" && !c) {
    v(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, _ = c.refs === K ? c.refs = {} : c.refs, p = c.setupState;
  if (d != null && d !== u && (G(d) ? (_[d] = null, A(p, d) && (p[d] = null)) : ie(d) && (d.value = null)), R(u))
    Fe(u, c, 12, [s, _]);
  else {
    const y = G(u), x = ie(u);
    if (y || x) {
      const P = () => {
        if (e.f) {
          const M = y ? A(p, u) ? p[u] : _[u] : u.value;
          i ? C(M) && Eo(M, r) : C(M) ? M.includes(r) || M.push(r) : y ? (_[u] = [r], A(p, u) && (p[u] = _[u])) : (u.value = [r], e.k && (_[e.k] = u.value));
        } else
          y ? (_[u] = s, A(p, u) && (p[u] = s)) : x ? (u.value = s, e.k && (_[e.k] = s)) : a.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? (P.id = -1, fe(P, n)) : P();
    } else
      a.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let Rt, Ge;
function Ie(e, t) {
  e.appContext.config.performance && gn() && Ge.mark(`vue-${t}-${e.uid}`), a.NODE_ENV !== "production" && Zs(e, t, gn() ? Ge.now() : Date.now());
}
function Te(e, t) {
  if (e.appContext.config.performance && gn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ge.mark(o), Ge.measure(
      `<${Pn(e, e.type)}> ${t}`,
      n,
      o
    ), Ge.clearMarks(n), Ge.clearMarks(o);
  }
  a.NODE_ENV !== "production" && Qs(e, t, gn() ? Ge.now() : Date.now());
}
function gn() {
  return Rt !== void 0 || (typeof window < "u" && window.performance ? (Rt = !0, Ge = window.performance) : Rt = !1), Rt;
}
function Xl() {
  const e = [];
  if (a.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const fe = al;
function Zl(e) {
  return Ql(e);
}
function Ql(e, t) {
  Xl();
  const n = Oo();
  n.__VUE__ = !0, a.NODE_ENV !== "production" && _r(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: c,
    createComment: u,
    setText: d,
    setElementText: _,
    parentNode: p,
    nextSibling: y,
    setScopeId: x = J,
    insertStaticContent: P
  } = e, M = (l, f, h, g = null, m = null, b = null, w = void 0, N = null, O = a.NODE_ENV !== "production" && ft ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !$t(l, f) && (g = Jt(l), Ue(l, m, b, !0), l = null), f.patchFlag === -2 && (O = !1, f.dynamicChildren = null);
    const { type: E, ref: V, shapeFlag: S } = f;
    switch (E) {
      case qt:
        ee(l, f, h, g);
        break;
      case pe:
        Y(l, f, h, g);
        break;
      case cn:
        l == null ? de(f, h, g, w) : a.NODE_ENV !== "production" && k(l, f, h, w);
        break;
      case he:
        zt(
          l,
          f,
          h,
          g,
          m,
          b,
          w,
          N,
          O
        );
        break;
      default:
        S & 1 ? _e(
          l,
          f,
          h,
          g,
          m,
          b,
          w,
          N,
          O
        ) : S & 6 ? Wo(
          l,
          f,
          h,
          g,
          m,
          b,
          w,
          N,
          O
        ) : S & 64 || S & 128 ? E.process(
          l,
          f,
          h,
          g,
          m,
          b,
          w,
          N,
          O,
          mt
        ) : a.NODE_ENV !== "production" && v("Invalid VNode type:", E, `(${typeof E})`);
    }
    V != null && m && ho(V, l && l.ref, b, f || l, !f);
  }, ee = (l, f, h, g) => {
    if (l == null)
      o(
        f.el = c(f.children),
        h,
        g
      );
    else {
      const m = f.el = l.el;
      f.children !== l.children && d(m, f.children);
    }
  }, Y = (l, f, h, g) => {
    l == null ? o(
      f.el = u(f.children || ""),
      h,
      g
    ) : f.el = l.el;
  }, de = (l, f, h, g) => {
    [l.el, l.anchor] = P(
      l.children,
      f,
      h,
      g,
      l.el,
      l.anchor
    );
  }, k = (l, f, h, g) => {
    if (f.children !== l.children) {
      const m = y(l.anchor);
      z(l), [f.el, f.anchor] = P(
        f.children,
        h,
        m,
        g
      );
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, q = ({ el: l, anchor: f }, h, g) => {
    let m;
    for (; l && l !== f; )
      m = y(l), o(l, h, g), l = m;
    o(f, h, g);
  }, z = ({ el: l, anchor: f }) => {
    let h;
    for (; l && l !== f; )
      h = y(l), i(l), l = h;
    i(f);
  }, _e = (l, f, h, g, m, b, w, N, O) => {
    f.type === "svg" ? w = "svg" : f.type === "math" && (w = "mathml"), l == null ? T(
      f,
      h,
      g,
      m,
      b,
      w,
      N,
      O
    ) : Re(
      l,
      f,
      m,
      b,
      w,
      N,
      O
    );
  }, T = (l, f, h, g, m, b, w, N) => {
    let O, E;
    const { props: V, shapeFlag: S, transition: D, dirs: $ } = l;
    if (O = l.el = s(
      l.type,
      b,
      V && V.is,
      V
    ), S & 8 ? _(O, l.children) : S & 16 && se(
      l.children,
      O,
      null,
      g,
      m,
      zn(l, b),
      w,
      N
    ), $ && et(l, null, g, "created"), re(O, l, l.scopeId, w, g), V) {
      for (const U in V)
        U !== "value" && !Pt(U) && r(
          O,
          U,
          null,
          V[U],
          b,
          l.children,
          g,
          m,
          $e
        );
      "value" in V && r(O, "value", null, V.value, b), (E = V.onVnodeBeforeMount) && we(E, g, l);
    }
    a.NODE_ENV !== "production" && (Object.defineProperty(O, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(O, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), $ && et(l, null, g, "beforeMount");
    const F = ec(m, D);
    F && D.beforeEnter(O), o(O, f, h), ((E = V && V.onVnodeMounted) || F || $) && fe(() => {
      E && we(E, g, l), F && D.enter(O), $ && et(l, null, g, "mounted");
    }, m);
  }, re = (l, f, h, g, m) => {
    if (h && x(l, h), g)
      for (let b = 0; b < g.length; b++)
        x(l, g[b]);
    if (m) {
      let b = m.subTree;
      if (a.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = Fo(b.children) || b), f === b) {
        const w = m.vnode;
        re(
          l,
          w,
          w.scopeId,
          w.slotScopeIds,
          m.parent
        );
      }
    }
  }, se = (l, f, h, g, m, b, w, N, O = 0) => {
    for (let E = O; E < l.length; E++) {
      const V = l[E] = N ? We(l[E]) : Ne(l[E]);
      M(
        null,
        V,
        f,
        h,
        g,
        m,
        b,
        w,
        N
      );
    }
  }, Re = (l, f, h, g, m, b, w) => {
    const N = f.el = l.el;
    let { patchFlag: O, dynamicChildren: E, dirs: V } = f;
    O |= l.patchFlag & 16;
    const S = l.props || K, D = f.props || K;
    let $;
    if (h && tt(h, !1), ($ = D.onVnodeBeforeUpdate) && we($, h, f, l), V && et(f, l, h, "beforeUpdate"), h && tt(h, !0), a.NODE_ENV !== "production" && ft && (O = 0, w = !1, E = null), E ? (Le(
      l.dynamicChildren,
      E,
      N,
      h,
      g,
      zn(f, m),
      b
    ), a.NODE_ENV !== "production" && ln(l, f)) : w || Oe(
      l,
      f,
      N,
      null,
      h,
      g,
      zn(f, m),
      b,
      !1
    ), O > 0) {
      if (O & 16)
        ge(
          N,
          f,
          S,
          D,
          h,
          g,
          m
        );
      else if (O & 2 && S.class !== D.class && r(N, "class", null, D.class, m), O & 4 && r(N, "style", S.style, D.style, m), O & 8) {
        const F = f.dynamicProps;
        for (let U = 0; U < F.length; U++) {
          const B = F[U], Z = S[B], me = D[B];
          (me !== Z || B === "value") && r(
            N,
            B,
            Z,
            me,
            m,
            l.children,
            h,
            g,
            $e
          );
        }
      }
      O & 1 && l.children !== f.children && _(N, f.children);
    } else
      !w && E == null && ge(
        N,
        f,
        S,
        D,
        h,
        g,
        m
      );
    (($ = D.onVnodeUpdated) || V) && fe(() => {
      $ && we($, h, f, l), V && et(f, l, h, "updated");
    }, g);
  }, Le = (l, f, h, g, m, b, w) => {
    for (let N = 0; N < f.length; N++) {
      const O = l[N], E = f[N], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === he || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$t(O, E) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? p(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      M(
        O,
        E,
        V,
        null,
        g,
        m,
        b,
        w,
        !0
      );
    }
  }, ge = (l, f, h, g, m, b, w) => {
    if (h !== g) {
      if (h !== K)
        for (const N in h)
          !Pt(N) && !(N in g) && r(
            l,
            N,
            h[N],
            null,
            w,
            f.children,
            m,
            b,
            $e
          );
      for (const N in g) {
        if (Pt(N))
          continue;
        const O = g[N], E = h[N];
        O !== E && N !== "value" && r(
          l,
          N,
          E,
          O,
          w,
          f.children,
          m,
          b,
          $e
        );
      }
      "value" in g && r(l, "value", h.value, g.value, w);
    }
  }, zt = (l, f, h, g, m, b, w, N, O) => {
    const E = f.el = l ? l.el : c(""), V = f.anchor = l ? l.anchor : c("");
    let { patchFlag: S, dynamicChildren: D, slotScopeIds: $ } = f;
    a.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (ft || S & 2048) && (S = 0, O = !1, D = null), $ && (N = N ? N.concat($) : $), l == null ? (o(E, h, g), o(V, h, g), se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      V,
      m,
      b,
      w,
      N,
      O
    )) : S > 0 && S & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Le(
      l.dynamicChildren,
      D,
      h,
      m,
      b,
      w,
      N
    ), a.NODE_ENV !== "production" ? ln(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && ln(
        l,
        f,
        !0
        /* shallow */
      )
    )) : Oe(
      l,
      f,
      h,
      V,
      m,
      b,
      w,
      N,
      O
    );
  }, Wo = (l, f, h, g, m, b, w, N, O) => {
    f.slotScopeIds = N, l == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      h,
      g,
      w,
      O
    ) : He(
      f,
      h,
      g,
      m,
      b,
      w,
      O
    ) : ue(l, f, O);
  }, He = (l, f, h, g, m, b, w) => {
    const N = l.component = fc(
      l,
      g,
      m
    );
    if (a.NODE_ENV !== "production" && N.type.__hmrId && Bs(N), a.NODE_ENV !== "production" && (nn(l), Ie(N, "mount")), jo(l) && (N.ctx.renderer = mt), a.NODE_ENV !== "production" && Ie(N, "init"), pc(N), a.NODE_ENV !== "production" && Te(N, "init"), N.asyncDep) {
      if (m && m.registerDep(N, L), !l.el) {
        const O = N.subTree = Se(pe);
        Y(null, O, f, h);
      }
    } else
      L(
        N,
        l,
        f,
        h,
        m,
        b,
        w
      );
    a.NODE_ENV !== "production" && (on(), Te(N, "mount"));
  }, ue = (l, f, h) => {
    const g = f.component = l.component;
    if (ll(l, f, h))
      if (g.asyncDep && !g.asyncResolved) {
        a.NODE_ENV !== "production" && nn(f), j(g, f, h), a.NODE_ENV !== "production" && on();
        return;
      } else
        g.next = f, Us(g.update), g.effect.dirty = !0, g.update();
    else
      f.el = l.el, g.vnode = f;
  }, L = (l, f, h, g, m, b, w) => {
    const N = () => {
      if (l.isMounted) {
        let { next: V, bu: S, u: D, parent: $, vnode: F } = l;
        {
          const Et = Pr(l);
          if (Et) {
            V && (V.el = F.el, j(l, V, w)), Et.asyncDep.then(() => {
              l.isUnmounted || N();
            });
            return;
          }
        }
        let U = V, B;
        a.NODE_ENV !== "production" && nn(V || l.vnode), tt(l, !1), V ? (V.el = F.el, j(l, V, w)) : V = F, S && Nt(S), (B = V.props && V.props.onVnodeBeforeUpdate) && we(B, $, V, F), tt(l, !0), a.NODE_ENV !== "production" && Ie(l, "render");
        const Z = kn(l);
        a.NODE_ENV !== "production" && Te(l, "render");
        const me = l.subTree;
        l.subTree = Z, a.NODE_ENV !== "production" && Ie(l, "patch"), M(
          me,
          Z,
          // parent may have changed if it's in a teleport
          p(me.el),
          // anchor may have changed if it's in a fragment
          Jt(me),
          l,
          m,
          b
        ), a.NODE_ENV !== "production" && Te(l, "patch"), V.el = Z.el, U === null && cl(l, Z.el), D && fe(D, m), (B = V.props && V.props.onVnodeUpdated) && fe(
          () => we(B, $, V, F),
          m
        ), a.NODE_ENV !== "production" && gr(l), a.NODE_ENV !== "production" && on();
      } else {
        let V;
        const { el: S, props: D } = f, { bm: $, m: F, parent: U } = l, B = rn(f);
        if (tt(l, !1), $ && Nt($), !B && (V = D && D.onVnodeBeforeMount) && we(V, U, f), tt(l, !0), S && Hn) {
          const Z = () => {
            a.NODE_ENV !== "production" && Ie(l, "render"), l.subTree = kn(l), a.NODE_ENV !== "production" && Te(l, "render"), a.NODE_ENV !== "production" && Ie(l, "hydrate"), Hn(
              S,
              l.subTree,
              l,
              m,
              null
            ), a.NODE_ENV !== "production" && Te(l, "hydrate");
          };
          B ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && Z()
          ) : Z();
        } else {
          a.NODE_ENV !== "production" && Ie(l, "render");
          const Z = l.subTree = kn(l);
          a.NODE_ENV !== "production" && Te(l, "render"), a.NODE_ENV !== "production" && Ie(l, "patch"), M(
            null,
            Z,
            h,
            g,
            l,
            m,
            b
          ), a.NODE_ENV !== "production" && Te(l, "patch"), f.el = Z.el;
        }
        if (F && fe(F, m), !B && (V = D && D.onVnodeMounted)) {
          const Z = f;
          fe(
            () => we(V, U, Z),
            m
          );
        }
        (f.shapeFlag & 256 || U && rn(U.vnode) && U.vnode.shapeFlag & 256) && l.a && fe(l.a, m), l.isMounted = !0, a.NODE_ENV !== "production" && Js(l), f = h = g = null;
      }
    }, O = l.effect = new Vo(
      N,
      J,
      () => Dn(E),
      l.scope
      // track it in component's effect scope
    ), E = l.update = () => {
      O.dirty && O.run();
    };
    E.id = l.uid, tt(l, !0), a.NODE_ENV !== "production" && (O.onTrack = l.rtc ? (V) => Nt(l.rtc, V) : void 0, O.onTrigger = l.rtg ? (V) => Nt(l.rtg, V) : void 0, E.ownerInstance = l), E();
  }, j = (l, f, h) => {
    f.component = l;
    const g = l.vnode.props;
    l.vnode = f, l.next = null, Kl(l, f.props, g, h), Yl(l, f.children, h), Ze(), si(l), Qe();
  }, Oe = (l, f, h, g, m, b, w, N, O = !1) => {
    const E = l && l.children, V = l ? l.shapeFlag : 0, S = f.children, { patchFlag: D, shapeFlag: $ } = f;
    if (D > 0) {
      if (D & 128) {
        Dt(
          E,
          S,
          h,
          g,
          m,
          b,
          w,
          N,
          O
        );
        return;
      } else if (D & 256) {
        Mn(
          E,
          S,
          h,
          g,
          m,
          b,
          w,
          N,
          O
        );
        return;
      }
    }
    $ & 8 ? (V & 16 && $e(E, m, b), S !== E && _(h, S)) : V & 16 ? $ & 16 ? Dt(
      E,
      S,
      h,
      g,
      m,
      b,
      w,
      N,
      O
    ) : $e(E, m, b, !0) : (V & 8 && _(h, ""), $ & 16 && se(
      S,
      h,
      g,
      m,
      b,
      w,
      N,
      O
    ));
  }, Mn = (l, f, h, g, m, b, w, N, O) => {
    l = l || Ot, f = f || Ot;
    const E = l.length, V = f.length, S = Math.min(E, V);
    let D;
    for (D = 0; D < S; D++) {
      const $ = f[D] = O ? We(f[D]) : Ne(f[D]);
      M(
        l[D],
        $,
        h,
        null,
        m,
        b,
        w,
        N,
        O
      );
    }
    E > V ? $e(
      l,
      m,
      b,
      !0,
      !1,
      S
    ) : se(
      f,
      h,
      g,
      m,
      b,
      w,
      N,
      O,
      S
    );
  }, Dt = (l, f, h, g, m, b, w, N, O) => {
    let E = 0;
    const V = f.length;
    let S = l.length - 1, D = V - 1;
    for (; E <= S && E <= D; ) {
      const $ = l[E], F = f[E] = O ? We(f[E]) : Ne(f[E]);
      if ($t($, F))
        M(
          $,
          F,
          h,
          null,
          m,
          b,
          w,
          N,
          O
        );
      else
        break;
      E++;
    }
    for (; E <= S && E <= D; ) {
      const $ = l[S], F = f[D] = O ? We(f[D]) : Ne(f[D]);
      if ($t($, F))
        M(
          $,
          F,
          h,
          null,
          m,
          b,
          w,
          N,
          O
        );
      else
        break;
      S--, D--;
    }
    if (E > S) {
      if (E <= D) {
        const $ = D + 1, F = $ < V ? f[$].el : g;
        for (; E <= D; )
          M(
            null,
            f[E] = O ? We(f[E]) : Ne(f[E]),
            h,
            F,
            m,
            b,
            w,
            N,
            O
          ), E++;
      }
    } else if (E > D)
      for (; E <= S; )
        Ue(l[E], m, b, !0), E++;
    else {
      const $ = E, F = E, U = /* @__PURE__ */ new Map();
      for (E = F; E <= D; E++) {
        const le = f[E] = O ? We(f[E]) : Ne(f[E]);
        le.key != null && (a.NODE_ENV !== "production" && U.has(le.key) && v(
          "Duplicate keys found during update:",
          JSON.stringify(le.key),
          "Make sure keys are unique."
        ), U.set(le.key, E));
      }
      let B, Z = 0;
      const me = D - F + 1;
      let Et = !1, Go = 0;
      const Ct = new Array(me);
      for (E = 0; E < me; E++)
        Ct[E] = 0;
      for (E = $; E <= S; E++) {
        const le = l[E];
        if (Z >= me) {
          Ue(le, m, b, !0);
          continue;
        }
        let ve;
        if (le.key != null)
          ve = U.get(le.key);
        else
          for (B = F; B <= D; B++)
            if (Ct[B - F] === 0 && $t(le, f[B])) {
              ve = B;
              break;
            }
        ve === void 0 ? Ue(le, m, b, !0) : (Ct[ve - F] = E + 1, ve >= Go ? Go = ve : Et = !0, M(
          le,
          f[ve],
          h,
          null,
          m,
          b,
          w,
          N,
          O
        ), Z++);
      }
      const zo = Et ? tc(Ct) : Ot;
      for (B = zo.length - 1, E = me - 1; E >= 0; E--) {
        const le = F + E, ve = f[le], Jo = le + 1 < V ? f[le + 1].el : g;
        Ct[E] === 0 ? M(
          null,
          ve,
          h,
          Jo,
          m,
          b,
          w,
          N,
          O
        ) : Et && (B < 0 || E !== zo[B] ? gt(ve, h, Jo, 2) : B--);
      }
    }
  }, gt = (l, f, h, g, m = null) => {
    const { el: b, type: w, transition: N, children: O, shapeFlag: E } = l;
    if (E & 6) {
      gt(l.component.subTree, f, h, g);
      return;
    }
    if (E & 128) {
      l.suspense.move(f, h, g);
      return;
    }
    if (E & 64) {
      w.move(l, f, h, mt);
      return;
    }
    if (w === he) {
      o(b, f, h);
      for (let S = 0; S < O.length; S++)
        gt(O[S], f, h, g);
      o(l.anchor, f, h);
      return;
    }
    if (w === cn) {
      q(l, f, h);
      return;
    }
    if (g !== 2 && E & 1 && N)
      if (g === 0)
        N.beforeEnter(b), o(b, f, h), fe(() => N.enter(b), m);
      else {
        const { leave: S, delayLeave: D, afterLeave: $ } = N, F = () => o(b, f, h), U = () => {
          S(b, () => {
            F(), $ && $();
          });
        };
        D ? D(b, F, U) : U();
      }
    else
      o(b, f, h);
  }, Ue = (l, f, h, g = !1, m = !1) => {
    const {
      type: b,
      props: w,
      ref: N,
      children: O,
      dynamicChildren: E,
      shapeFlag: V,
      patchFlag: S,
      dirs: D
    } = l;
    if (N != null && ho(N, null, h, l, !0), V & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const $ = V & 1 && D, F = !rn(l);
    let U;
    if (F && (U = w && w.onVnodeBeforeUnmount) && we(U, f, l), V & 6)
      qr(l.component, h, g);
    else {
      if (V & 128) {
        l.suspense.unmount(h, g);
        return;
      }
      $ && et(l, null, f, "beforeUnmount"), V & 64 ? l.type.remove(
        l,
        f,
        h,
        m,
        mt,
        g
      ) : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== he || S > 0 && S & 64) ? $e(
        E,
        f,
        h,
        !1,
        !0
      ) : (b === he && S & 384 || !m && V & 16) && $e(O, f, h), g && Fn(l);
    }
    (F && (U = w && w.onVnodeUnmounted) || $) && fe(() => {
      U && we(U, f, l), $ && et(l, null, f, "unmounted");
    }, h);
  }, Fn = (l) => {
    const { type: f, el: h, anchor: g, transition: m } = l;
    if (f === he) {
      a.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((w) => {
        w.type === pe ? i(w.el) : Fn(w);
      }) : Wr(h, g);
      return;
    }
    if (f === cn) {
      z(l);
      return;
    }
    const b = () => {
      i(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: w, delayLeave: N } = m, O = () => w(h, b);
      N ? N(l.el, b, O) : O();
    } else
      b();
  }, Wr = (l, f) => {
    let h;
    for (; l !== f; )
      h = y(l), i(l), l = h;
    i(f);
  }, qr = (l, f, h) => {
    a.NODE_ENV !== "production" && l.type.__hmrId && ks(l);
    const { bum: g, scope: m, update: b, subTree: w, um: N } = l;
    g && Nt(g), m.stop(), b && (b.active = !1, Ue(w, l, f, h)), N && fe(N, f), fe(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), a.NODE_ENV !== "production" && Xs(l);
  }, $e = (l, f, h, g = !1, m = !1, b = 0) => {
    for (let w = b; w < l.length; w++)
      Ue(l[w], f, h, g, m);
  }, Jt = (l) => l.shapeFlag & 6 ? Jt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : y(l.anchor || l.el);
  let jn = !1;
  const qo = (l, f, h) => {
    l == null ? f._vnode && Ue(f._vnode, null, null, !0) : M(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      h
    ), jn || (jn = !0, si(), dr(), jn = !1), f._vnode = l;
  }, mt = {
    p: M,
    um: Ue,
    m: gt,
    r: Fn,
    mt: He,
    mc: se,
    pc: Oe,
    pbc: Le,
    n: Jt,
    o: e
  };
  let Ln, Hn;
  return t && ([Ln, Hn] = t(
    mt
  )), {
    render: qo,
    hydrate: Ln,
    createApp: jl(qo, Ln)
  };
}
function zn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ec(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ln(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (C(o) && C(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let c = i[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = We(i[r]), c.el = s.el), n || ln(s, c)), c.type === qt && (c.el = s.el), a.NODE_ENV !== "production" && c.type === pe && !c.el && (c.el = s.el);
    }
}
function tc(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const d = e[o];
    if (d !== 0) {
      if (i = n[n.length - 1], e[i] < d) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        c = r + s >> 1, e[n[c]] < d ? r = c + 1 : s = c;
      d < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function Pr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Pr(t);
}
const nc = (e) => e.__isTeleport, he = Symbol.for("v-fgt"), qt = Symbol.for("v-txt"), pe = Symbol.for("v-cmt"), cn = Symbol.for("v-stc"), Ft = [];
let ye = null;
function Pe(e = !1) {
  Ft.push(ye = e ? null : []);
}
function oc() {
  Ft.pop(), ye = Ft[Ft.length - 1] || null;
}
let Ut = 1;
function yi(e) {
  Ut += e;
}
function Ar(e) {
  return e.dynamicChildren = Ut > 0 ? ye || Ot : null, oc(), Ut > 0 && ye && ye.push(e), e;
}
function Be(e, t, n, o, i, r) {
  return Ar(
    Ve(
      e,
      t,
      n,
      o,
      i,
      r,
      !0
    )
  );
}
function ic(e, t, n, o, i) {
  return Ar(
    Se(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function Ko(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $t(e, t) {
  return a.NODE_ENV !== "production" && t.shapeFlag & 6 && yt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const rc = (...e) => Fr(
  ...e
), $n = "__vInternal", Mr = ({ key: e }) => e ?? null, un = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || ie(e) || R(e) ? { i: oe, r: e, k: t, f: !!n } : e : null);
function Ve(e, t = null, n = null, o = 0, i = null, r = e === he ? 0 : 1, s = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mr(t),
    ref: t && un(t),
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: oe
  };
  return c ? (Bo(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= G(n) ? 8 : 16), a.NODE_ENV !== "production" && u.key !== u.key && v("VNode created with invalid key (NaN). VNode type:", u.type), Ut > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ye.push(u), u;
}
const Se = a.NODE_ENV !== "production" ? rc : Fr;
function Fr(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === ul) && (a.NODE_ENV !== "production" && !e && v(`Invalid vnode type when creating vnode: ${e}.`), e = pe), Ko(e)) {
    const c = Xe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Bo(c, n), Ut > 0 && !r && ye && (c.shapeFlag & 6 ? ye[ye.indexOf(e)] = c : ye.push(c)), c.patchFlag |= -2, c;
  }
  if (Br(e) && (e = e.__vccOpts), t) {
    t = sc(t);
    let { class: c, style: u } = t;
    c && !G(c) && (t.class = wo(c)), H(u) && (io(u) && !C(u) && (u = W({}, u)), t.style = vo(u));
  }
  const s = G(e) ? 1 : fl(e) ? 128 : nc(e) ? 64 : H(e) ? 4 : R(e) ? 2 : 0;
  return a.NODE_ENV !== "production" && s & 4 && io(e) && (e = I(e), v(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ve(
    e,
    t,
    n,
    o,
    i,
    s,
    r,
    !0
  );
}
function sc(e) {
  return e ? io(e) || $n in e ? W({}, e) : e : null;
}
function Xe(e, t, n = !1) {
  const { props: o, ref: i, patchFlag: r, children: s } = e, c = t ? lc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Mr(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? C(i) ? i.concat(un(t)) : [i, un(t)] : un(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a.NODE_ENV !== "production" && r === -1 && C(s) ? s.map(jr) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== he ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Xe(e.ssContent),
    ssFallback: e.ssFallback && Xe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function jr(e) {
  const t = Xe(e);
  return C(e.children) && (t.children = e.children.map(jr)), t;
}
function Lr(e = " ", t = 0) {
  return Se(qt, null, e, t);
}
function Jn(e = "", t = !1) {
  return t ? (Pe(), ic(pe, null, e)) : Se(pe, null, e);
}
function Ne(e) {
  return e == null || typeof e == "boolean" ? Se(pe) : C(e) ? Se(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? We(e) : Se(qt, null, String(e));
}
function We(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xe(e);
}
function Bo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Bo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !($n in t) ? t._ctx = oe : i === 3 && oe && (oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: oe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Lr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function lc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = wo([t.class, o.class]));
      else if (i === "style")
        t.style = vo([t.style, o.style]);
      else if (Kt(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(C(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else
        i !== "" && (t[i] = o[i]);
  }
  return t;
}
function we(e, t, n, o = null) {
  be(e, t, 7, [
    n,
    o
  ]);
}
const cc = Dr();
let uc = 0;
function fc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || cc, r = {
    uid: uc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new ss(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Sr(o, i),
    emitsOptions: Er(o, i),
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
    sp: null
  };
  return a.NODE_ENV !== "production" ? r.ctx = Cl(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = tl.bind(null, r), e.ce && e.ce(r), r;
}
let Q = null;
const ac = () => Q || oe;
let mn, _o;
{
  const e = Oo(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  mn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Q = n
  ), _o = t(
    "__VUE_SSR_SETTERS__",
    (n) => In = n
  );
}
const Gt = (e) => {
  const t = Q;
  return mn(e), e.scope.on(), () => {
    e.scope.off(), mn(t);
  };
}, bi = () => {
  Q && Q.scope.off(), mn(null);
}, dc = /* @__PURE__ */ xt("slot,component");
function go(e, { isNativeTag: t }) {
  (dc(e) || t(e)) && v(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Hr(e) {
  return e.vnode.shapeFlag & 4;
}
let In = !1;
function pc(e, t = !1) {
  t && _o(t);
  const { props: n, children: o } = e.vnode, i = Hr(e);
  Hl(e, n, i, t), Jl(e, o);
  const r = i ? hc(e, t) : void 0;
  return t && _o(!1), r;
}
function hc(e, t) {
  var n;
  const o = e.type;
  if (a.NODE_ENV !== "production") {
    if (o.name && go(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        go(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        Or(r[s]);
    }
    o.compilerOptions && _c() && v(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = rr(new Proxy(e.ctx, Vr)), a.NODE_ENV !== "production" && Sl(e);
  const { setup: i } = o;
  if (i) {
    const r = e.setupContext = i.length > 1 ? mc(e) : null, s = Gt(e);
    Ze();
    const c = Fe(
      i,
      e,
      0,
      [
        a.NODE_ENV !== "production" ? bt(e.props) : e.props,
        r
      ]
    );
    if (Qe(), s(), No(c)) {
      if (c.then(bi, bi), t)
        return c.then((u) => {
          Oi(e, u, t);
        }).catch((u) => {
          kt(u, e, 0);
        });
      if (e.asyncDep = c, a.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = o.name) != null ? n : "Anonymous";
        v(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Oi(e, c, t);
  } else
    Ur(e, t);
}
function Oi(e, t, n) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : H(t) ? (a.NODE_ENV !== "production" && Ko(t) && v(
    "setup() should not return VNodes directly - return a render function instead."
  ), a.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = lr(t), a.NODE_ENV !== "production" && Rl(e)) : a.NODE_ENV !== "production" && t !== void 0 && v(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ur(e, n);
}
let mo;
const _c = () => !mo;
function Ur(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && mo && !o.render) {
      const i = o.template || Ho(e).template;
      if (i) {
        a.NODE_ENV !== "production" && Ie(e, "compile");
        const { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, d = W(
          W(
            {
              isCustomElement: r,
              delimiters: c
            },
            s
          ),
          u
        );
        o.render = mo(i, d), a.NODE_ENV !== "production" && Te(e, "compile");
      }
    }
    e.render = o.render || J;
  }
  {
    const i = Gt(e);
    Ze();
    try {
      Il(e);
    } finally {
      Qe(), i();
    }
  }
  a.NODE_ENV !== "production" && !o.render && e.render === J && !t && (o.template ? v(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : v("Component is missing template or render function."));
}
function vi(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    a.NODE_ENV !== "production" ? {
      get(t, n) {
        return hn(), te(e, "get", "$attrs"), t[n];
      },
      set() {
        return v("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return v("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return te(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function gc(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return te(e, "get", "$slots"), t[n];
    }
  }));
}
function mc(e) {
  const t = (n) => {
    if (a.NODE_ENV !== "production" && (e.exposed && v("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (C(n) ? o = "array" : ie(n) && (o = "ref")), o !== "object" && v(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return a.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return vi(e);
    },
    get slots() {
      return gc(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return vi(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Tn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(lr(rr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in at)
          return at[n](e);
      },
      has(t, n) {
        return n in t || n in at;
      }
    }));
}
const Ec = /(?:^|[-_])(\w)/g, Nc = (e) => e.replace(Ec, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Kr(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pn(e, t, n = !1) {
  let o = Kr(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e && e.parent) {
    const i = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    o = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? Nc(o) : n ? "App" : "Anonymous";
}
function Br(e) {
  return R(e) && "__vccOpts" in e;
}
const yc = (e, t) => {
  const n = Rs(e, t, In);
  if (a.NODE_ENV !== "production") {
    const o = ac();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function bc() {
  if (a.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    header(p) {
      return H(p) ? p.__isVue ? ["div", e, "VueInstance"] : ie(p) ? [
        "div",
        {},
        ["span", e, _(p)],
        "<",
        c(p.value),
        ">"
      ] : ct(p) ? [
        "div",
        {},
        ["span", e, vt(p) ? "ShallowReactive" : "Reactive"],
        "<",
        c(p),
        `>${ht(p) ? " (readonly)" : ""}`
      ] : ht(p) ? [
        "div",
        {},
        ["span", e, vt(p) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(p),
        ">"
      ] : null : null;
    },
    hasBody(p) {
      return p && p.__isVue;
    },
    body(p) {
      if (p && p.__isVue)
        return [
          "div",
          {},
          ...r(p.$)
        ];
    }
  };
  function r(p) {
    const y = [];
    p.type.props && p.props && y.push(s("props", I(p.props))), p.setupState !== K && y.push(s("setup", p.setupState)), p.data !== K && y.push(s("data", I(p.data)));
    const x = u(p, "computed");
    x && y.push(s("computed", x));
    const P = u(p, "inject");
    return P && y.push(s("injected", P)), y.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: p }]
    ]), y;
  }
  function s(p, y) {
    return y = W({}, y), Object.keys(y).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        p
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(y).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          c(y[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(p, y = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : H(p) ? ["object", { object: y ? I(p) : p }] : ["span", n, String(p)];
  }
  function u(p, y) {
    const x = p.type;
    if (R(x))
      return;
    const P = {};
    for (const M in p.ctx)
      d(x, M, y) && (P[M] = p.ctx[M]);
    return P;
  }
  function d(p, y, x) {
    const P = p[x];
    if (C(P) && P.includes(y) || H(P) && y in P || p.extends && d(p.extends, y, x) || p.mixins && p.mixins.some((M) => d(M, y, x)))
      return !0;
  }
  function _(p) {
    return vt(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const wi = "3.4.21", An = a.NODE_ENV !== "production" ? v : J;
var dt = {};
const Oc = "http://www.w3.org/2000/svg", vc = "http://www.w3.org/1998/Math/MathML", qe = typeof document < "u" ? document : null, Vi = qe && /* @__PURE__ */ qe.createElement("template"), wc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? qe.createElementNS(Oc, e) : t === "mathml" ? qe.createElementNS(vc, e) : qe.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
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
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Vi.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const c = Vi.content;
      if (o === "svg" || o === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Vc = Symbol("_vtc");
function xc(e, t, n) {
  const o = e[Vc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const xi = Symbol("_vod"), Dc = Symbol("_vsh"), Cc = Symbol(dt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Sc = /(^|;)\s*display\s*:/;
function Rc(e, t, n) {
  const o = e.style, i = G(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (G(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          n[c] == null && fn(o, c, "");
        }
      else
        for (const s in t)
          n[s] == null && fn(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), fn(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[Cc];
      s && (n += ";" + s), o.cssText = n, r = Sc.test(n);
    }
  } else
    t && e.removeAttribute("style");
  xi in e && (e[xi] = r ? o.display : "", e[Dc] && (o.display = "none"));
}
const $c = /[^\\];\s*$/, Di = /\s*!important$/;
function fn(e, t, n) {
  if (C(n))
    n.forEach((o) => fn(e, t, o));
  else if (n == null && (n = ""), dt.NODE_ENV !== "production" && $c.test(n) && An(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Ic(e, t);
    Di.test(n) ? e.setProperty(
      ae(o),
      n.replace(Di, ""),
      "important"
    ) : e[o] = n;
  }
}
const Ci = ["Webkit", "Moz", "ms"], Yn = {};
function Ic(e, t) {
  const n = Yn[t];
  if (n)
    return n;
  let o = Me(t);
  if (o !== "filter" && o in e)
    return Yn[t] = o;
  o = On(o);
  for (let i = 0; i < Ci.length; i++) {
    const r = Ci[i] + o;
    if (r in e)
      return Yn[t] = r;
  }
  return t;
}
const Si = "http://www.w3.org/1999/xlink";
function Tc(e, t, n, o, i) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Si, t.slice(6, t.length)) : e.setAttributeNS(Si, t, n);
  else {
    const r = os(t);
    n == null || r && !Ki(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function Pc(e, t, n, o, i, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    o && s(o, i, r), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const d = c === "OPTION" ? e.getAttribute("value") || "" : e.value, _ = n ?? "";
    (d !== _ || !("_value" in e)) && (e.value = _), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = Ki(n) : n == null && d === "string" ? (n = "", u = !0) : d === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch (d) {
    dt.NODE_ENV !== "production" && !u && An(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  u && e.removeAttribute(t);
}
function ot(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ac(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Ri = Symbol("_vei");
function Mc(e, t, n, o, i = null) {
  const r = e[Ri] || (e[Ri] = {}), s = r[t];
  if (o && s)
    s.value = o;
  else {
    const [c, u] = Fc(t);
    if (o) {
      const d = r[t] = Hc(o, i);
      ot(e, c, d, u);
    } else
      s && (Ac(e, c, s, u), r[t] = void 0);
  }
}
const $i = /(?:Once|Passive|Capture)$/;
function Fc(e) {
  let t;
  if ($i.test(e)) {
    t = {};
    let o;
    for (; o = e.match($i); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
let Xn = 0;
const jc = /* @__PURE__ */ Promise.resolve(), Lc = () => Xn || (jc.then(() => Xn = 0), Xn = Date.now());
function Hc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    be(
      Uc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Lc(), n;
}
function Uc(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (i) => !i._stopped && o && o(i));
  } else
    return t;
}
const Ii = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kc = (e, t, n, o, i, r, s, c, u) => {
  const d = i === "svg";
  t === "class" ? xc(e, o, d) : t === "style" ? Rc(e, n, o) : Kt(t) ? an(t) || Mc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Bc(e, t, o, d)) ? Pc(
    e,
    t,
    o,
    r,
    s,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Tc(e, t, o, d));
};
function Bc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ii(t) && R(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ii(t) && G(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function kc(e, t) {
  const n = /* @__PURE__ */ _l(e);
  class o extends ko {
    constructor(r) {
      super(n, r, t);
    }
  }
  return o.def = n, o;
}
const Wc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ko extends Wc {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (dt.NODE_ENV !== "production" && this.shadowRoot && An(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Po(() => {
      this._connected || (ji(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const i of o)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (o, i = !1) => {
      const { props: r, styles: s } = o;
      let c;
      if (r && !C(r))
        for (const u in r) {
          const d = r[u];
          (d === Number || d && d.type === Number) && (u in this._props && (this._props[u] = Xo(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[Me(u)] = !0);
        }
      this._numberProps = c, i && this._resolveProps(o), this._applyStyles(s), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((o) => t(o, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, o = C(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && o.includes(i) && this._setProp(i, this[i], !0, !1);
    for (const i of o.map(Me))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const o = Me(t);
    this._numberProps && this._numberProps[o] && (n = Xo(n)), this._setProp(o, n, !1);
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
  _setProp(t, n, o = !0, i = !0) {
    n !== this._props[t] && (this._props[t] = n, i && this._instance && this._update(), o && (n === !0 ? this.setAttribute(ae(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ae(t), n + "") : n || this.removeAttribute(ae(t))));
  }
  _update() {
    ji(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Se(this._def, W({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, dt.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((s) => this.shadowRoot.removeChild(s)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const o = (r, s) => {
        this.dispatchEvent(
          new CustomEvent(r, {
            detail: s
          })
        );
      };
      n.emit = (r, ...s) => {
        o(r, s), ae(r) !== r && o(ae(r), s);
      };
      let i = this;
      for (; i = i && (i.parentNode || i.host); )
        if (i instanceof ko) {
          n.parent = i._instance, n.provides = i._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const o = document.createElement("style");
      o.textContent = n, this.shadowRoot.appendChild(o), dt.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(o);
    });
  }
}
const En = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return C(t) ? (n) => Nt(t, n) : t;
};
function qc(e) {
  e.target.composing = !0;
}
function Ti(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Vt = Symbol("_assign"), Pi = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
    e[Vt] = En(i);
    const r = o || i.props && i.props.type === "number";
    ot(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let c = e.value;
      n && (c = c.trim()), r && (c = jt(c)), e[Vt](c);
    }), n && ot(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ot(e, "compositionstart", qc), ot(e, "compositionend", Ti), ot(e, "change", Ti));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: i } }, r) {
    if (e[Vt] = En(r), e.composing)
      return;
    const s = i || e.type === "number" ? jt(e.value) : e.value, c = t ?? "";
    s !== c && (document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === c) || (e.value = c));
  }
}, Gc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const i = yn(t);
    ot(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? jt(Nn(s)) : Nn(s)
      );
      e[Vt](
        e.multiple ? i ? new Set(r) : r : r[0]
      ), e._assigning = !0, Po(() => {
        e._assigning = !1;
      });
    }), e[Vt] = En(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Ai(e, t, n);
  },
  beforeUpdate(e, t, n) {
    e[Vt] = En(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || Ai(e, t, n);
  }
};
function Ai(e, t, n) {
  const o = e.multiple, i = C(t);
  if (o && !i && !yn(t)) {
    dt.NODE_ENV !== "production" && An(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, s = e.options.length; r < s; r++) {
    const c = e.options[r], u = Nn(c);
    if (o)
      if (i) {
        const d = typeof u;
        d === "string" || d === "number" ? c.selected = t.includes(
          n ? jt(u) : u
        ) : c.selected = rs(t, u) > -1;
      } else
        c.selected = t.has(u);
    else if (vn(Nn(c), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Nn(e) {
  return "_value" in e ? e._value : e.value;
}
const zc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Mi = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (i) => {
    if (!("key" in i))
      return;
    const r = ae(i.key);
    if (t.some((s) => s === r || zc[s] === r))
      return e(i);
  });
}, Jc = /* @__PURE__ */ W({ patchProp: Kc }, wc);
let Fi;
function Yc() {
  return Fi || (Fi = Zl(Jc));
}
const ji = (...e) => {
  Yc().render(...e);
};
var Xc = {};
function Zc() {
  bc();
}
Xc.NODE_ENV !== "production" && Zc();
const Zn = "https://api.github.com", Qn = {
  getUserRepos(e) {
    return fetch(`${Zn}/users/${e}/repos`).then(
      (t) => t.json()
    );
  },
  getRepoBranches(e, t) {
    return fetch(`${Zn}/repos/${e}/${t}/branches`).then(
      (n) => n.json()
    );
  },
  getRepoLatestCommit(e, t, n) {
    return fetch(
      `${Zn}/repos/${e}/${t}/commits?sha=${n}`
    ).then((o) => o.json());
  }
}, Qc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, eu = {
  data() {
    return {
      username: "",
      repos: [],
      selectedRepo: "",
      branches: [],
      selectedBranch: "",
      latestCommits: []
    };
  },
  props: {
    initialUsername: {
      type: String,
      default: ""
    },
    initialRepo: {
      type: String,
      default: ""
    }
  },
  //   lifecycle hook
  mounted() {
    this.$refs.usernameInput.focus(), this.$refs.repoInput.focus(), this.initialRepo && this.initialUsername && (this.username = this.initialUsername, console.log(this.initialRepo), this.selectedRepo = this.initialRepo, this.selectRepo(this.initialRepo)), this.$refs.repoInput.value = this.initialRepo;
  },
  watch: {
    async selectedBranch(e) {
      e && (await this.fetchLatestCommits(this.selectedRepo, e), this.$nextTick(() => {
        this.$refs.branchSelect.scrollIntoView({ behavior: "smooth" });
      }));
    }
  },
  methods: {
    async fetchRepos() {
      this.repos = await Qn.getUserRepos(this.username), this.selectedRepo = "", this.branches = [], this.selectedBranch = "", this.latestCommits = [], this.$nextTick(() => {
        this.$refs.usernameInput.focus();
      });
    },
    async selectRepo(e) {
      this.selectedRepo = e, this.branches = await Qn.getRepoBranches(this.username, e), this.$nextTick(() => {
        this.$refs.repoInput.focus();
      }), this.branches.length ? (this.selectedBranch = this.branches[0].name, this.$refs.repoInput.value = this.branches[0].name) : (this.selectedBranch = "", this.latestCommits = []);
    },
    async fetchLatestCommits(e, t, n = 5) {
      this.latestCommits = await Qn.getRepoLatestCommit(
        this.username,
        e,
        t
      ), this.latestCommits = this.latestCommits.slice(0, n), console.log(this.latestCommits);
    }
  }
}, kr = (e) => (nl("data-v-b428968c"), e = e(), ol(), e), tu = { key: 0 }, nu = { key: 0 }, ou = /* @__PURE__ */ kr(() => /* @__PURE__ */ Ve("h4", null, "Branches:", -1)), iu = ["value"], ru = { key: 1 }, su = /* @__PURE__ */ kr(() => /* @__PURE__ */ Ve("h4", null, "Latest Commits:", -1));
function lu(e, t, n, o, i, r) {
  return Pe(), Be("div", null, [
    qn(Ve("input", {
      style: { display: "none" },
      "onUpdate:modelValue": t[0] || (t[0] = (s) => i.username = s),
      ref: "usernameInput",
      onKeyup: t[1] || (t[1] = Mi((...s) => r.fetchRepos && r.fetchRepos(...s), ["enter"])),
      placeholder: "GitHub Username"
    }, null, 544), [
      [Pi, i.username]
    ]),
    qn(Ve("input", {
      style: { display: "none" },
      "onUpdate:modelValue": t[2] || (t[2] = (s) => i.selectedRepo = s),
      ref: "repoInput",
      onKeyup: t[3] || (t[3] = Mi((s) => r.selectRepo(i.selectedRepo), ["enter"])),
      placeholder: "GitHub Repo"
    }, null, 544), [
      [Pi, i.selectedRepo]
    ]),
    i.selectedRepo ? (Pe(), Be("div", tu, [
      Ve("h4", null, "Repository: " + St(i.selectedRepo), 1),
      i.branches.length > 0 ? (Pe(), Be("div", nu, [
        ou,
        qn(Ve("select", {
          "onUpdate:modelValue": t[4] || (t[4] = (s) => i.selectedBranch = s),
          ref: "branchSelect"
        }, [
          (Pe(!0), Be(he, null, fi(i.branches, (s) => (Pe(), Be("option", {
            key: s.name,
            value: s.name
          }, St(s.name), 9, iu))), 128))
        ], 512), [
          [Gc, i.selectedBranch]
        ])
      ])) : Jn("", !0)
    ])) : Jn("", !0),
    i.latestCommits.length > 0 ? (Pe(), Be("div", ru, [
      su,
      Ve("ul", null, [
        (Pe(!0), Be(he, null, fi(i.latestCommits, (s, c) => (Pe(), Be("li", { key: c }, [
          Ve("h5", null, St(s.commit.author.name) + " " + St(new Date(s.commit.author.date).toLocaleString()), 1),
          Lr(" - " + St(s.commit.message), 1)
        ]))), 128))
      ])
    ])) : Jn("", !0)
  ]);
}
const cu = /* @__PURE__ */ Qc(eu, [["render", lu], ["__scopeId", "data-v-b428968c"]]), uu = /* @__PURE__ */ kc({
  ...cu,
  props: ["initialUsername", "initialRepo"]
});
customElements.define("github-user-repos", uu);
