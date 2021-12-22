/*!jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license | WordPress 2019-05-16*/ ! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function (a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return e.call(this)
        },
        get: function (a) {
            return null != a ? a < 0 ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a) {
            return n.each(this, a)
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], "__proto__" !== d && g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === n.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function (a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function (b) {
            b && n.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; d < c; d++)
                    if (!1 === b.call(a[d], d, a[d])) break
            } else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (d < c) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)(d = !b(a[f], f)) !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; g < d; g++) null != (e = b(a[g], g, c)) && h.push(e);
            else
                for (g in a) null != (e = b(a[g], g, c)) && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, f;
            if ("string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a)) return c = e.call(arguments, 2), d = function () {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d
        },
        now: function () {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" !== c && !n.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = fa(),
            z = fa(),
            A = fa(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (xa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ea(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + pa(r[h]);
                        s = r.join(","), w = _.test(a) && na(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function fa() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ga(a) {
            return a[u] = !0, a
        }

        function ha(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (xa) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ia(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ja(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ka(a) {
            return function (b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ma(a) {
            return ga(function (b) {
                return b = +b, ga(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function na(a) {
            return a && void 0 !== a.getElementsByTagName && a
        }
        c = ea.support = {}, f = ea.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ea.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ha(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ha(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ha(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (void 0 !== b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                if (void 0 !== b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ha(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ha(function (a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ha(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d || (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ja(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ea.matches = function (a, b) {
            return ea(a, null, null, b)
        }, ea.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (xa) {}
            return ea(b, n, null, [a]).length > 0
        }, ea.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ea.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ea.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ea.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ea.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ea.selectors = {
            cacheLength: 50,
            createPseudo: ga,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ea.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ea.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ea.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), !1 === t)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return (t -= e) === d || t % d == 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ga(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ga(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ga(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ga(function (a) {
                    return function (b) {
                        return ea(a, b).length > 0
                    }
                }),
                contains: ga(function (a) {
                    return a = a.replace(ba, ca),
                        function (b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ga(function (a) {
                    return V.test(a || "") || ea.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function (b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return !1 === a.disabled
                },
                disabled: function (a) {
                    return !0 === a.disabled
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return Y.test(a.nodeName)
                },
                input: function (a) {
                    return X.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: ma(function () {
                    return [0]
                }),
                last: ma(function (a, b) {
                    return [b - 1]
                }),
                eq: ma(function (a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: ma(function (a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: ma(function (a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: ma(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: ma(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ka(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = la(b);

        function oa() {}
        oa.prototype = d.filters = d.pseudos, d.setFilters = new oa, g = ea.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ea.error(a) : z(a, i).slice(0)
        };

        function pa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function qa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ra(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sa(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ea(a, b[d], c);
            return c
        }

        function ta(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function ua(a, b, c, d, e, f) {
            return d && !d[u] && (d = ua(d)), e && !e[u] && (e = ua(e, f)), ga(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || sa(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ta(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ta(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ta(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function va(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = qa(function (a) {
                    return a === b
                }, h, !0), l = qa(function (a) {
                    return J(b, a) > -1
                }, h, !0), m = [function (a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [qa(ra(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return ua(i > 1 && ra(m), i > 1 && pa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, i < e && va(a.slice(i, e)), e < f && va(a = a.slice(e)), e < f && pa(a))
                    }
                    m.push(c)
                } return ra(m)
        }

        function wa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ta(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ea.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ga(f) : f
        }
        return h = ea.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = va(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, wa(e, d)), f.selector = a
            }
            return f
        }, i = ea.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (!(b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0])) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b))) {
                        if (j.splice(i, 1), !(a = f.length && pa(j))) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ha(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ha(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ia("type|href|height|width", function (a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ha(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ia("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ha(function (a) {
            return null == a.getAttribute("disabled")
        }) || ia(K, function (a, b, c) {
            var d;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ea
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function (a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                } return d
        },
        v = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; b < e; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; b < e; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function (a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (n.fn.init = function (a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (!(e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                    for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if ((f = d.getElementById(e[2])) && f.parentNode) {
                if (f.id !== e[2]) return A.find(a);
                this.length = 1, this[0] = f
            }
            return this.context = d, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    }).prototype = n.fn, A = n(d);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function (a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; b < d; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function E(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return u(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function (a) {
            return E(a, "nextSibling")
        },
        prev: function (a) {
            return E(a, "previousSibling")
        },
        nextAll: function (a) {
            return u(a, "nextSibling")
        },
        prevAll: function (a) {
            return u(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function (a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return v(a.firstChild)
        },
        contents: function (a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.uniqueSort(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g;

    function G(a) {
        var b = {};
        return n.each(a.match(F) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function (a) {
        a = "string" == typeof a ? G(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function () {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) !1 === f[h].apply(c[0], c[1]) && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function () {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function b(c) {
                        n.each(c, function (c, d) {
                            n.isFunction(d) ? a.unique && j.has(d) || f.push(d) : d && d.length && "string" !== n.type(d) && b(d)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function () {
                    return n.each(arguments, function (a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function (a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function () {
                    return f && (f = []), this
                },
                disable: function () {
                    return e = g = [], f = c = "", this
                },
                disabled: function () {
                    return !f
                },
                lock: function () {
                    return e = !0, c || j.disable(), this
                },
                locked: function () {
                    return !!e
                },
                fireWith: function (a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function () {
                    return j.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function (a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function (a, b, c) {
                    return function (d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); b < d; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function (a) {
            (!0 === a ? --n.readyWait : n.isReady) || (n.isReady = !0, !0 !== a && --n.readyWait > 0 || (H.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function I() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J)) : (d.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (I(), n.ready())
    }
    n.ready.promise = function (b) {
        if (!H)
            if (H = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J);
        else {
            d.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && function b() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (e) {
                        return a.setTimeout(b, 50)
                    }
                    I(), n.ready()
                }
            }()
        }
        return H.promise(b)
    }, n.ready.promise();
    var K;
    for (K in n(l)) break;
    l.ownFirst = "0" === K, l.inlineBlockNeedsLayout = !1, n(function () {
            var a, b, c, e;
            (c = d.getElementsByTagName("body")[0]) && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function () {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var L = function (a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || !0 !== b && a.getAttribute("classid") === b)
        },
        M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if ("string" == typeof (c = a.getAttribute(d))) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : M.test(c) ? n.parseJSON(c) : c)
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (L(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? null == (f = g[b]) && (f = g[n.camelCase(b)]) : f = g, f
        }
    }

    function R(a, b, c) {
        if (L(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (a) {
                return !!(a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]) && !P(a)
            },
            data: function (a, b, c) {
                return Q(a, b, c)
            },
            removeData: function (a, b) {
                return R(a, b)
            },
            _data: function (a, b, c) {
                return Q(a, b, c, !0)
            },
            _removeData: function (a, b) {
                return R(a, b, !0)
            }
        }), n.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), O(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function () {
                    n.data(this, a, b)
                }) : f ? O(f, a, n.data(f, a)) : void 0
            },
            removeData: function (a) {
                return this.each(function () {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function (a, b, c) {
                var d;
                if (a) return b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function () {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function (a) {
                return this.each(function () {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--)(c = n._data(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function () {
            var a;
            l.shrinkWrapBlocks = function () {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return (c = d.getElementsByTagName("body")[0]) && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function (a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function () {
                return d.cur()
            } : function () {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, n.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) X(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Y = /^(?:checkbox|radio)$/i,
        Z = /<([\w:-]+)/,
        $ = /^$|\/(?:java|ecma)script/i,
        _ = /^\s+/,
        aa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ba(a) {
        var b = aa.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function () {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var ca = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ca.optgroup = ca.option, ca.tbody = ca.tfoot = ca.colgroup = ca.caption = ca.thead, ca.th = ca.td;

    function da(a, b) {
        var c, d, e = 0,
            f = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, da(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function ea(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var fa = /<|&#?\w+;/,
        ga = /<tbody/i;

    function ha(a) {
        Y.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ia(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ba(b), q = [], r = 0; r < o; r++)
            if ((g = a[r]) || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (fa.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = (Z.exec(g) || ["", ""])[1].toLowerCase(), m = ca[j] || ca._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && _.test(g) && q.push(b.createTextNode(_.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ga.test(g) ? "<table>" !== m[1] || ga.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(da(q, "input"), ha), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = da(p.appendChild(g), "script"), h && ea(i), c) {
            f = 0;
            while (g = i[f++]) $.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function () {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = !1 === e.attributes[c].expando);
        e = null
    }();
    var ja = /^(?:input|select|textarea)$/i,
        ka = /^key/,
        la = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ma = /^(?:focusinfocus|focusoutblur)$/,
        na = /^([^.]*)(?:\.(.+)|)/;

    function oa() {
        return !0
    }

    function pa() {
        return !1
    }

    function qa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ra(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ra(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = pa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return void 0 === n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) f = na.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && !1 !== j.setup.call(a, d, p, k) || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--)
                    if (h = na.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && !1 !== l.teardown.call(a, p, r.handle) || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function (b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ma.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || !1 !== l.trigger.apply(e, c))) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, ma.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), (g = h && i[h]) && g.apply && L(i) && (b.result = g.apply(i, c), !1 === b.result && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), c)) && L(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, void 0 !== (d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
                        for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = la.test(f) ? this.mouseHooks : ka.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== qa() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === qa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (n.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (void 0 === a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function (a, b) {
        if (!(this instanceof n.Event)) return new n.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? oa : pa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), this[n.expando] = !0
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: pa,
        isPropagationStopped: pa,
        isImmediatePropagationStopped: pa,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = oa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = oa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = oa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function () {
            if (n.nodeName(this, "form")) return !1;
            n.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function (a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function () {
            if (n.nodeName(this, "form")) return !1;
            n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function () {
            if (ja.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function (a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1;
            n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                ja.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return n.event.remove(this, "._change"), !ja.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d) {
            return ra(this, a, b, c, d)
        },
        one: function (a, b, c, d) {
            return ra(this, a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = pa), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            if (c) return n.event.trigger(a, b, c, !0)
        }
    });
    var sa = / jQuery\d+="(?:null|\d+)"/g,
        ta = new RegExp("<(?:" + aa + ")[\\s/>]", "i"),
        ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        va = /<script|<style|<link/i,
        wa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xa = /^true\/(.*)/,
        ya = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        za = ba(d),
        Aa = za.appendChild(d.createElement("div"));

    function Ba(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Ca(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Da(a) {
        var b = xa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ea(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; d < e; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Fa(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Ca(b).text = a.text, Da(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Y.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ga(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && wa.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ga(f, b, c, d)
        });
        if (o && (k = ia(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(da(k, "script"), Ca), h = i.length; m < o; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, da(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Da), m = 0; m < h; m++) g = i[m], $.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(ya, "")));
            k = e = null
        }
        return a
    }

    function Ha(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(da(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && ea(da(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(ua, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ta.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Aa.innerHTML = a.outerHTML, Aa.removeChild(f = Aa.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = da(f), h = da(a), g = 0; null != (e = h[g]); ++g) d[g] && Fa(e, d[g]);
            if (b)
                if (c)
                    for (h = h || da(a), d = d || da(f), g = 0; null != (e = h[g]); g++) Ea(e, d[g]);
                else Ea(a, f);
            return d = da(f, "script"), d.length > 0 && ea(d, !i && da(a, "script")), d = h = e = null, f
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || L(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || void 0 === d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ga,
        detach: function (a) {
            return Ha(this, a, !0)
        },
        remove: function (a) {
            return Ha(this, a)
        },
        text: function (a) {
            return X(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return Ga(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    Ba(this, a).appendChild(a)
                }
            })
        },
        prepend: function () {
            return Ga(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ba(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return Ga(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return Ga(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(da(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        },
        html: function (a) {
            return X(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(sa, "") : void 0;
                if ("string" == typeof a && !va.test(a) && (l.htmlSerialize || !ta.test(a)) && (l.leadingWhitespace || !_.test(a)) && !ca[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(da(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return Ga(this, arguments, function (b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(da(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; d <= h; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ia, Ja = {
        HTML: "block",
        BODY: "block"
    };

    function Ka(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function La(a) {
        var b = d,
            c = Ja[a];
        return c || (c = Ka(a, b), "none" !== c && c || (Ia = (Ia || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ia[0].contentWindow || Ia[0].contentDocument).document, b.write(), b.close(), c = Ka(a, b), Ia.detach()), Ja[a] = c), c
    }
    var Ma = /^margin/,
        Na = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Oa = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Pa = d.documentElement;
    ! function () {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");

        function k() {
            var k, l, m = d.documentElement;
            m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                width: "4px"
            }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                marginRight: "4px"
            }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", (f = 0 === k[0].offsetHeight) && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
        }
        j.style && (j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
            reliableHiddenOffsets: function () {
                return null == b && k(), f
            },
            boxSizingReliable: function () {
                return null == b && k(), e
            },
            pixelMarginRight: function () {
                return null == b && k(), c
            },
            pixelPosition: function () {
                return null == b && k(), b
            },
            reliableMarginRight: function () {
                return null == b && k(), g
            },
            reliableMarginLeft: function () {
                return null == b && k(), h
            }
        }))
    }();
    var Qa, Ra, Sa = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Qa = function (b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Ra = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Qa(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Na.test(g) && Ma.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Pa.currentStyle && (Qa = function (a) {
        return a.currentStyle
    }, Ra = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Qa(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Na.test(g) && !Sa.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ta(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ua = /alpha\([^)]*\)/i,
        Va = /opacity\s*=\s*([^)]*)/i,
        Wa = /^(none|table(?!-c[ea]).+)/,
        Xa = new RegExp("^(" + S + ")(.*)$", "i"),
        Ya = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Za = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        $a = ["Webkit", "O", "Moz", "ms"],
        _a = d.createElement("div").style;

    function ab(a) {
        if (a in _a) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = $a.length;
        while (c--)
            if ((a = $a[c] + b) in _a) return a
    }

    function bb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", La(d.nodeName)))) : (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function cb(a, b, c) {
        var d = Xa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function db(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function eb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Qa(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (e <= 0 || null == e) {
            if (e = Ra(a, b, f), (e < 0 || null == e) && (e = a.style[b]), Na.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + db(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Ra(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ra(a, b, d)), "normal" === f && b in Za && (f = Za[b]), "" === c || c ? (e = parseFloat(f), !0 === c || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return Wa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Oa(a, Ya, function () {
                    return eb(a, b, d)
                }) : eb(a, b, d)
            },
            set: function (a, c, d) {
                var e = d && Qa(a);
                return cb(a, c, d ? db(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function (a, b) {
            return Va.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Ua, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ua.test(f) ? f.replace(Ua, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ta(l.reliableMarginRight, function (a, b) {
        if (b) return Oa(a, {
            display: "inline-block"
        }, Ra, [a, "marginRight"])
    }), n.cssHooks.marginLeft = Ta(l.reliableMarginLeft, function (a, b) {
        if (b) return (parseFloat(Ra(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Oa(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        }) : 0)) + "px"
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ma.test(a) || (n.cssHooks[a + b].set = cb)
    }), n.fn.extend({
        css: function (a, b) {
            return X(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Qa(a), e = b.length; g < e; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return bb(this, !0)
        },
        hide: function () {
            return bb(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function fb(a, b, c, d, e) {
        return new fb.prototype.init(a, b, c, d, e)
    }
    n.Tween = fb, fb.prototype = {
        constructor: fb,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = fb.propHooks[this.prop];
            return a && a.get ? a.get(this) : fb.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = fb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : fb.propHooks._default.set(this), this
        }
    }, fb.prototype.init.prototype = fb.prototype, fb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, fb.propHooks.scrollTop = fb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = fb.prototype.init, n.fx.step = {};
    var gb, hb, ib = /^(?:toggle|show|hide)$/,
        jb = /queueHooks$/;

    function kb() {
        return a.setTimeout(function () {
            gb = void 0
        }), gb = n.now()
    }

    function lb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; e < 4; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function mb(a, b, c) {
        for (var d, e = (pb.tweeners[b] || []).concat(pb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function nb(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, m.always(function () {
            m.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), "inline" === (k = "none" === j ? n._data(a, "olddisplay") || La(a.nodeName) : j) && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== La(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ib.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? La(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
                n(a).hide()
            }), m.done(function () {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = mb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function ob(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = n.cssHooks[d]) && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function pb(a, b, c) {
        var d, e, f = 0,
            g = pb.prefilters.length,
            h = n.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = gb || kb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: gb || kb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (ob(k, j.opts.specialEasing); f < g; f++)
            if (d = pb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, mb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(pb, {
            tweeners: {
                "*": [function (a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function (a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(F);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], pb.tweeners[c] = pb.tweeners[c] || [], pb.tweeners[c].unshift(b)
            },
            prefilters: [nb],
            prefilter: function (a, b) {
                b ? pb.prefilters.unshift(a) : pb.prefilters.push(a)
            }
        }), n.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function () {
                        var b = pb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && jb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function (a) {
                return !1 !== a && (a = a || "fx"), this.each(function () {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function (a, b) {
            var c = n.fn[b];
            n.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(lb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: lb("show"),
            slideUp: lb("hide"),
            slideToggle: lb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            n.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function () {
            var a, b = n.timers,
                c = 0;
            for (gb = n.now(); c < b.length; c++)(a = b[c])() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), gb = void 0
        }, n.fx.timer = function (a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function () {
            hb || (hb = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function () {
            a.clearInterval(hb), hb = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function (b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function () {
                    a.clearTimeout(e)
                }
            })
        },
        function () {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var qb = /\r/g,
        rb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(qb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(rb, " ")
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                if (n.isArray(b)) return a.checked = n.inArray(n(a).val(), b) > -1
            }
        }, l.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb, tb, ub = n.expr.attrHandle,
        vb = /^(?:checked|selected)$/i,
        wb = l.getSetAttribute,
        xb = l.input;
    n.fn.extend({
        attr: function (a, b) {
            return X(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d)
        }
    }), tb = {
        set: function (a, b, c) {
            return !1 === b ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ub[b] || n.find.attr;
        xb && wb || !vb.test(b) ? ub[b] = function (a, b, d) {
            var e, f;
            return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e
        } : ub[b] = function (a, b, c) {
            if (!c) return a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), xb && wb || (n.attrHooks.value = {
        set: function (a, b, c) {
            if (!n.nodeName(a, "input")) return sb && sb.set(a, b, c);
            a.defaultValue = b
        }
    }), wb || (sb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            if (d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c)) return b
        }
    }, ub.id = ub.name = ub.coords = function (a, b, c) {
        var d;
        if (!c) return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            if (c && c.specified) return c.value
        },
        set: sb.set
    }, n.attrHooks.contenteditable = {
        set: function (a, b, c) {
            sb.set(a, "" !== b && b, c)
        }
    }, n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
            set: function (a, c) {
                if ("" === c) return a.setAttribute(b, "auto"), c
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var yb = /^(?:input|select|textarea|button|object)$/i,
        zb = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return X(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = n.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Ab = /[\t\r\n\f]/g;

    function Bb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, Bb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(F) || [];
                while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, Bb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(F) || [];
                while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
                n(this).toggleClass(a.call(this, c, Bb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || !1 === a ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Cb = a.location,
        Db = n.now(),
        Eb = /\?/,
        Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Fb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Gb = /#.*$/,
        Hb = /([?&])_=[^&]*/,
        Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Nb = {},
        Ob = {},
        Pb = "*/".concat("*"),
        Qb = Cb.href,
        Rb = Mb.exec(Qb.toLowerCase()) || [];

    function Sb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Tb(a, b, c, d) {
        var e = {},
            f = a === Ob;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ub(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Vb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Wb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (!(g = j[i + " " + f] || j["* " + f]))
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                        break
                    } if (!0 !== g)
                if (g && a.throws) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Qb,
            type: "GET",
            isLocal: Jb.test(Rb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a)
        },
        ajaxPrefilter: Sb(Nb),
        ajaxTransport: Sb(Ob),
        ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Ib.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (u < 2)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || v;
                        return j && j.abort(b), x(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(F) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 == n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && !1 !== l.contentType || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (!1 === l.beforeSend.call(m, w, l) || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Tb(Ob, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function () {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, x)
                } catch (y) {
                    if (!(u < 2)) throw y;
                    x(-1, y)
                }
            } else x(-1, "No Transport");

            function x(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && b < 300 || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), (x = w.getResponseHeader("etag")) && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", b < 0 && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, n.fn.extend({
        wrapAll: function (a) {
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Xb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Yb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Xb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function (a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a)
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var Zb = /%20/g,
        $b = /\[\]$/,
        _b = /\r?\n/g,
        ac = /^(?:submit|button|image|reset|file)$/i,
        bc = /^(?:input|select|textarea|keygen)/i;

    function cc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) cc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) cc(c, a[c], b, e);
        return d.join("&").replace(Zb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Y.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(_b, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(_b, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc()
    } : gc;
    var dc = 0,
        ec = {},
        fc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in ec) ec[a](void 0, !0)
    }), l.cors = !!fc && "withCredentials" in fc, (fc = l.ajax = !!fc) && n.ajaxTransport(function (b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function (d, e) {
                    var f, g = b.xhr(),
                        h = ++dc;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function (a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete ec[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            } j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ec[h] = c : c()
                },
                abort: function () {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function gc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function hc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function (e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ic = [],
        jc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = ic.pop() || n.expando + "_" + Db++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : !1 !== b.jsonp && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ia([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var kc = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && kc) return kc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };

    function lc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? (void 0 !== e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Pa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
            return X(this, function (a, d, e) {
                var f = lc(a);
                if (void 0 === e) return f ? b in f ? f[b] : f.document.documentElement[d] : a[d];
                f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Ta(l.pixelPosition, function (a, c) {
            if (c) return c = Ra(a, b), Na.test(c) ? n(a).position()[b] + "px" : c
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (!0 === d || !0 === e ? "margin" : "border");
                return X(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var mc = a.jQuery,
        nc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n
    }, b || (a.jQuery = a.$ = n), n
});
jQuery.noConflict(); /*!This file is auto-generated*/
window.addComment = function (v) {
    var I, C, h, E = v.document,
        b = {
            commentReplyClass: "comment-reply-link",
            commentReplyTitleId: "reply-title",
            cancelReplyId: "cancel-comment-reply-link",
            commentFormId: "commentform",
            temporaryFormId: "wp-temp-form-div",
            parentIdFieldId: "comment_parent",
            postIdFieldId: "comment_post_ID"
        },
        e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver,
        r = "querySelector" in E && "addEventListener" in v,
        n = !!E.documentElement.dataset;

    function t() {
        d(), e && new e(o).observe(E.body, {
            childList: !0,
            subtree: !0
        })
    }

    function d(e) {
        if (r && (I = g(b.cancelReplyId), C = g(b.commentFormId), I)) {
            I.addEventListener("touchstart", l), I.addEventListener("click", l);
            var t = function (e) {
                if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode) return C.removeEventListener("keydown", t), e.preventDefault(), C.submit.click(), !1
            };
            C && C.addEventListener("keydown", t);
            for (var n, d = function (e) {
                    var t = b.commentReplyClass;
                    e && e.childNodes || (e = E);
                    t = E.getElementsByClassName ? e.getElementsByClassName(t) : e.querySelectorAll("." + t);
                    return t
                }(e), o = 0, i = d.length; o < i; o++)(n = d[o]).addEventListener("touchstart", a), n.addEventListener("click", a)
        }
    }

    function l(e) {
        var t, n, d = g(b.temporaryFormId);
        d && h && (g(b.parentIdFieldId).value = "0", t = d.textContent, d.parentNode.replaceChild(h, d), this.style.display = "none", n = (d = (n = g(b.commentReplyTitleId)) && n.firstChild) && d.nextSibling, d && d.nodeType === Node.TEXT_NODE && t && (n && "A" === n.nodeName && n.id !== b.cancelReplyId && (n.style.display = ""), d.textContent = t), e.preventDefault())
    }

    function a(e) {
        var t = g(b.commentReplyTitleId),
            n = t && t.firstChild.textContent,
            d = this,
            o = m(d, "belowelement"),
            i = m(d, "commentid"),
            r = m(d, "respondelement"),
            t = m(d, "postid"),
            n = m(d, "replyto") || n;
        o && i && r && t && !1 === v.addComment.moveForm(o, i, r, t, n) && e.preventDefault()
    }

    function o(e) {
        for (var t = e.length; t--;)
            if (e[t].addedNodes.length) return void d()
    }

    function m(e, t) {
        return n ? e.dataset[t] : e.getAttribute("data-" + t)
    }

    function g(e) {
        return E.getElementById(e)
    }
    return r && "loading" !== E.readyState ? t() : r && v.addEventListener("DOMContentLoaded", t, !1), {
        init: d,
        moveForm: function (e, t, n, d, o) {
            var i = g(e);
            h = g(n);
            var r, l, a, m, c, s = g(b.parentIdFieldId),
                y = g(b.postIdFieldId),
                p = (c = g(b.commentReplyTitleId)) && c.firstChild,
                u = p && p.nextSibling;
            if (i && h && s) {
                void 0 === o && (o = p && p.textContent), m = h, e = b.temporaryFormId, n = g(e), c = (c = g(b.commentReplyTitleId)) ? c.firstChild.textContent : "", n || ((n = E.createElement("div")).id = e, n.style.display = "none", n.textContent = c, m.parentNode.insertBefore(n, m)), d && y && (y.value = d), s.value = t, I.style.display = "", i.parentNode.insertBefore(h, i.nextSibling), p && p.nodeType === Node.TEXT_NODE && (u && "A" === u.nodeName && u.id !== b.cancelReplyId && (u.style.display = "none"), p.textContent = o), I.onclick = function () {
                    return !1
                };
                try {
                    for (var f = 0; f < C.elements.length; f++)
                        if (r = C.elements[f], l = !1, "getComputedStyle" in v ? a = v.getComputedStyle(r) : E.documentElement.currentStyle && (a = r.currentStyle), (r.offsetWidth <= 0 && r.offsetHeight <= 0 || "hidden" === a.visibility) && (l = !0), "hidden" !== r.type && !r.disabled && !l) {
                            r.focus();
                            break
                        }
                } catch (e) {}
                return !1
            }
        }
    }
}(window);
/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
! function r(a, s, l) {
    function d(t, e) {
        if (!s[t]) {
            if (!a[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (u) return u(t, !0);
                var o = new Error("Cannot find module '" + t + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var i = s[t] = {
                exports: {}
            };
            a[t][0].call(i.exports, function (e) {
                return d(a[t][1][e] || e)
            }, i, i.exports, r, a, s, l)
        }
        return s[t].exports
    }
    for (var u = "function" == typeof require && require, e = 0; e < l.length; e++) d(l[e]);
    return d
}({
    1: [function (e, t, n) {}, {}],
    2: [function (i, r, e) {
        (function (e) {
            var t, n = void 0 !== e ? e : "undefined" != typeof window ? window : {},
                o = i(1);
            "undefined" != typeof document ? t = document : (t = n["__GLOBAL_DOCUMENT_CACHE@4"]) || (t = n["__GLOBAL_DOCUMENT_CACHE@4"] = o), r.exports = t
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        1: 1
    }],
    3: [function (e, n, t) {
        (function (e) {
            var t;
            t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    4: [function (e, t, n) {
        var o, i, r = t.exports = {};

        function a() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function l(t) {
            if (o === setTimeout) return setTimeout(t, 0);
            if ((o === a || !o) && setTimeout) return o = setTimeout, setTimeout(t, 0);
            try {
                return o(t, 0)
            } catch (e) {
                try {
                    return o.call(null, t, 0)
                } catch (e) {
                    return o.call(this, t, 0)
                }
            }
        }! function () {
            try {
                o = "function" == typeof setTimeout ? setTimeout : a
            } catch (e) {
                o = a
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                i = s
            }
        }();
        var d, u = [],
            c = !1,
            f = -1;

        function p() {
            c && d && (c = !1, d.length ? u = d.concat(u) : f = -1, u.length && m())
        }

        function m() {
            if (!c) {
                var e = l(p);
                c = !0;
                for (var t = u.length; t;) {
                    for (d = u, u = []; ++f < t;) d && d[f].run();
                    f = -1, t = u.length
                }
                d = null, c = !1,
                    function (t) {
                        if (i === clearTimeout) return clearTimeout(t);
                        if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                        try {
                            i(t)
                        } catch (e) {
                            try {
                                return i.call(null, t)
                            } catch (e) {
                                return i.call(this, t)
                            }
                        }
                    }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function v() {}
        r.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new h(e, t)), 1 !== u.length || c || l(m)
        }, h.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = v, r.addListener = v, r.once = v, r.off = v, r.removeListener = v, r.removeAllListeners = v, r.emit = v, r.prependListener = v, r.prependOnceListener = v, r.listeners = function (e) {
            return []
        }, r.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, r.cwd = function () {
            return "/"
        }, r.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, r.umask = function () {
            return 0
        }
    }, {}],
    5: [function (e, c, t) {
        (function (n) {
            ! function (e) {
                var t = setTimeout;

                function o() {}

                function r(e) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this)
                }

                function i(n, o) {
                    for (; 3 === n._state;) n = n._value;
                    0 !== n._state ? (n._handled = !0, r._immediateFn(function () {
                        var e = 1 === n._state ? o.onFulfilled : o.onRejected;
                        if (null !== e) {
                            var t;
                            try {
                                t = e(n._value)
                            } catch (e) {
                                return void s(o.promise, e)
                            }
                            a(o.promise, t)
                        } else(1 === n._state ? a : s)(o.promise, n._value)
                    })) : n._deferreds.push(o)
                }

                function a(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof r) return t._state = 3, t._value = e, void l(t);
                            if ("function" == typeof n) return void u((o = n, i = e, function () {
                                o.apply(i, arguments)
                            }), t)
                        }
                        t._state = 1, t._value = e, l(t)
                    } catch (e) {
                        s(t, e)
                    }
                    var o, i
                }

                function s(e, t) {
                    e._state = 2, e._value = t, l(e)
                }

                function l(e) {
                    2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () {
                        e._handled || r._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) i(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function d(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                }

                function u(e, t) {
                    var n = !1;
                    try {
                        e(function (e) {
                            n || (n = !0, a(t, e))
                        }, function (e) {
                            n || (n = !0, s(t, e))
                        })
                    } catch (e) {
                        if (n) return;
                        n = !0, s(t, e)
                    }
                }
                r.prototype.catch = function (e) {
                    return this.then(null, e)
                }, r.prototype.then = function (e, t) {
                    var n = new this.constructor(o);
                    return i(this, new d(e, t, n)), n
                }, r.all = function (e) {
                    var s = Array.prototype.slice.call(e);
                    return new r(function (o, i) {
                        if (0 === s.length) return o([]);
                        var r = s.length;

                        function a(t, e) {
                            try {
                                if (e && ("object" == typeof e || "function" == typeof e)) {
                                    var n = e.then;
                                    if ("function" == typeof n) return void n.call(e, function (e) {
                                        a(t, e)
                                    }, i)
                                }
                                s[t] = e, 0 == --r && o(s)
                            } catch (e) {
                                i(e)
                            }
                        }
                        for (var e = 0; e < s.length; e++) a(e, s[e])
                    })
                }, r.resolve = function (t) {
                    return t && "object" == typeof t && t.constructor === r ? t : new r(function (e) {
                        e(t)
                    })
                }, r.reject = function (n) {
                    return new r(function (e, t) {
                        t(n)
                    })
                }, r.race = function (i) {
                    return new r(function (e, t) {
                        for (var n = 0, o = i.length; n < o; n++) i[n].then(e, t)
                    })
                }, r._immediateFn = "function" == typeof n && function (e) {
                    n(e)
                } || function (e) {
                    t(e, 0)
                }, r._unhandledRejectionFn = function (e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }, r._setImmediateFn = function (e) {
                    r._immediateFn = e
                }, r._setUnhandledRejectionFn = function (e) {
                    r._unhandledRejectionFn = e
                }, void 0 !== c && c.exports ? c.exports = r : e.Promise || (e.Promise = r)
            }(this)
        }).call(this, e(6).setImmediate)
    }, {
        6: 6
    }],
    6: [function (l, e, d) {
        (function (e, t) {
            var o = l(4).nextTick,
                n = Function.prototype.apply,
                i = Array.prototype.slice,
                r = {},
                a = 0;

            function s(e, t) {
                this._id = e, this._clearFn = t
            }
            d.setTimeout = function () {
                return new s(n.call(setTimeout, window, arguments), clearTimeout)
            }, d.setInterval = function () {
                return new s(n.call(setInterval, window, arguments), clearInterval)
            }, d.clearTimeout = d.clearInterval = function (e) {
                e.close()
            }, s.prototype.unref = s.prototype.ref = function () {}, s.prototype.close = function () {
                this._clearFn.call(window, this._id)
            }, d.enroll = function (e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, d.unenroll = function (e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, d._unrefActive = d.active = function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                0 <= t && (e._idleTimeoutId = setTimeout(function () {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, d.setImmediate = "function" == typeof e ? e : function (e) {
                var t = a++,
                    n = !(arguments.length < 2) && i.call(arguments, 1);
                return r[t] = !0, o(function () {
                    r[t] && (n ? e.apply(null, n) : e.call(null), d.clearImmediate(t))
                }), t
            }, d.clearImmediate = "function" == typeof t ? t : function (e) {
                delete r[e]
            }
        }).call(this, l(6).setImmediate, l(6).clearImmediate)
    }, {
        4: 4,
        6: 6
    }],
    7: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = e(9),
            r = (o = i) && o.__esModule ? o : {
                default: o
            },
            s = e(17),
            l = e(29);
        var d = {
            lang: "en",
            en: s.EN,
            language: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (null != t && t.length) {
                    if ("string" != typeof t[0]) throw new TypeError("Language code must be a string value");
                    if (!/^[a-z]{2,3}((\-|_)[a-z]{2})?$/i.test(t[0])) throw new TypeError("Language code must have format 2-3 letters and. optionally, hyphen, underscore followed by 2 more letters");
                    d.lang = t[0], void 0 === d[t[0]] ? (t[1] = null !== t[1] && void 0 !== t[1] && "object" === a(t[1]) ? t[1] : {}, d[t[0]] = (0, l.isObjectEmpty)(t[1]) ? s.EN : t[1]) : null !== t[1] && void 0 !== t[1] && "object" === a(t[1]) && (d[t[0]] = t[1])
                }
                return d.lang
            },
            t: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                if ("string" == typeof e && e.length) {
                    var n = void 0,
                        o = void 0,
                        i = d.language(),
                        r = function (e, t, n) {
                            return "object" !== (void 0 === e ? "undefined" : a(e)) || "number" != typeof t || "number" != typeof n ? e : [function () {
                                return arguments.length <= 1 ? void 0 : arguments[1]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function () {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function () {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) || 11 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) || 12 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 < (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 0 < (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : [3]
                            }, function () {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) <= 4 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 1 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 2 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 3 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 4 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 1 ? void 0 : arguments[1]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 < (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) < 7 ? arguments.length <= 3 ? void 0 : arguments[3] : 6 < (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) < 11 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 5 ? void 0 : arguments[5]
                            }, function () {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : 3 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 <= 10 ? arguments.length <= 4 ? void 0 : arguments[4] : 11 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100 ? arguments.length <= 5 ? void 0 : arguments[5] : arguments.length <= 6 ? void 0 : arguments[6]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 < (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 11 ? arguments.length <= 2 ? void 0 : arguments[2] : 10 < (arguments.length <= 0 ? void 0 : arguments[0]) % 100 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function () {
                                return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 2 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || 20 <= (arguments.length <= 0 ? void 0 : arguments[0]) % 100) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 8 !== (arguments.length <= 0 ? void 0 : arguments[0]) && 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function () {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                            }, function () {
                                return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 3 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                            }, function () {
                                return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                            }][n].apply(null, [t].concat(e))
                        };
                    return void 0 !== d[i] && (n = d[i][e], null !== t && "number" == typeof t && (o = d[i]["mejs.plural-form"], n = r.apply(null, [n, t, o]))), !n && d.en && (n = d.en[e], null !== t && "number" == typeof t && (o = d.en["mejs.plural-form"], n = r.apply(null, [n, t, o]))), n = n || e, null !== t && "number" == typeof t && (n = n.replace("%1", t)), (0, l.escapeHTML)(n)
                }
                return e
            }
        };
        r.default.i18n = d, "undefined" != typeof mejsL10n && r.default.i18n.language(mejsL10n.language, mejsL10n.strings), n.default = d
    }, {
        17: 17,
        29: 29,
        9: 9
    }],
    8: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            F = o(e(3)),
            I = o(e(2)),
            j = o(e(9)),
            M = e(29),
            O = e(30),
            D = e(10),
            R = e(27);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = function e(t, n, o) {
            var c = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var f = this;
            o = Array.isArray(o) ? o : null, f.defaults = {
                renderers: [],
                fakeNodeName: "mediaelementwrapper",
                pluginPath: "build/",
                shimScriptAccess: "sameDomain"
            }, n = Object.assign(f.defaults, n), f.mediaElement = I.default.createElement(n.fakeNodeName);
            var i = t,
                r = !1;
            if ("string" == typeof t ? f.mediaElement.originalNode = I.default.getElementById(t) : i = (f.mediaElement.originalNode = t).id, void 0 === f.mediaElement.originalNode || null === f.mediaElement.originalNode) return null;
            f.mediaElement.options = n, i = i || "mejs_" + Math.random().toString().slice(2), f.mediaElement.originalNode.setAttribute("id", i + "_from_mejs");
            var a = f.mediaElement.originalNode.tagName.toLowerCase(); - 1 < ["video", "audio"].indexOf(a) && !f.mediaElement.originalNode.getAttribute("preload") && f.mediaElement.originalNode.setAttribute("preload", "none"), f.mediaElement.originalNode.parentNode.insertBefore(f.mediaElement, f.mediaElement.originalNode), f.mediaElement.appendChild(f.mediaElement.originalNode);
            var s = function (t, e) {
                    if ("https:" === F.default.location.protocol && 0 === t.indexOf("http:") && R.IS_IOS && -1 < j.default.html5media.mediaTypes.indexOf(e)) {
                        var n = new XMLHttpRequest;
                        n.onreadystatechange = function () {
                            if (4 !== this.readyState || 200 !== this.status) return t;
                            var e = (F.default.URL || F.default.webkitURL).createObjectURL(this.response);
                            return f.mediaElement.originalNode.setAttribute("src", e), e
                        }, n.open("GET", t), n.responseType = "blob", n.send()
                    }
                    return t
                },
                l = void 0;
            if (null !== o) l = o;
            else if (null !== f.mediaElement.originalNode) switch (l = [], f.mediaElement.originalNode.nodeName.toLowerCase()) {
                case "iframe":
                    l.push({
                        type: "",
                        src: f.mediaElement.originalNode.getAttribute("src")
                    });
                    break;
                case "audio":
                case "video":
                    var d = f.mediaElement.originalNode.children.length,
                        u = f.mediaElement.originalNode.getAttribute("src");
                    if (u) {
                        var p = f.mediaElement.originalNode,
                            m = (0, O.formatType)(u, p.getAttribute("type"));
                        l.push({
                            type: m,
                            src: s(u, m)
                        })
                    }
                    for (var h = 0; h < d; h++) {
                        var v = f.mediaElement.originalNode.children[h];
                        if ("source" === v.tagName.toLowerCase()) {
                            var y = v.getAttribute("src"),
                                g = (0, O.formatType)(y, v.getAttribute("type"));
                            l.push({
                                type: g,
                                src: s(y, g)
                            })
                        }
                    }
            }
            f.mediaElement.id = i, f.mediaElement.renderers = {}, f.mediaElement.events = {}, f.mediaElement.promises = [], f.mediaElement.renderer = null, f.mediaElement.rendererName = null, f.mediaElement.changeRenderer = function (e, t) {
                var n = c,
                    o = 2 < Object.keys(t[0]).length ? t[0] : t[0].src;
                if (void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && n.mediaElement.renderer.name === e) return n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.show(), n.mediaElement.renderer.setSrc(o), !0;
                void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && (n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.hide());
                var i = n.mediaElement.renderers[e],
                    r = null;
                if (null != i) return i.show(), i.setSrc(o), n.mediaElement.renderer = i, n.mediaElement.rendererName = e, !0;
                for (var a = n.mediaElement.options.renderers.length ? n.mediaElement.options.renderers : D.renderer.order, s = 0, l = a.length; s < l; s++) {
                    var d = a[s];
                    if (d === e) {
                        r = D.renderer.renderers[d];
                        var u = Object.assign(r.options, n.mediaElement.options);
                        return (i = r.create(n.mediaElement, u, t)).name = e, n.mediaElement.renderers[r.name] = i, n.mediaElement.renderer = i, n.mediaElement.rendererName = e, i.show(), !0
                    }
                }
                return !1
            }, f.mediaElement.setSize = function (e, t) {
                void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && f.mediaElement.renderer.setSize(e, t)
            }, f.mediaElement.generateError = function (e, t) {
                e = e || "", t = Array.isArray(t) ? t : [];
                var n = (0, M.createEvent)("error", f.mediaElement);
                n.message = e, n.urls = t, f.mediaElement.dispatchEvent(n), r = !0
            };
            var E = j.default.html5media.properties,
                b = j.default.html5media.methods,
                S = function (t, e, n, o) {
                    var i = t[e];
                    Object.defineProperty(t, e, {
                        get: function () {
                            return n.apply(t, [i])
                        },
                        set: function (e) {
                            return i = o.apply(t, [e])
                        }
                    })
                },
                w = function (e) {
                    if ("src" !== e) {
                        var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1),
                            n = function () {
                                return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer["get" + t] ? f.mediaElement.renderer["get" + t]() : null
                            },
                            o = function (e) {
                                void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer["set" + t] && f.mediaElement.renderer["set" + t](e)
                            };
                        S(f.mediaElement, e, n, o), f.mediaElement["get" + t] = n, f.mediaElement["set" + t] = o
                    }
                },
                x = function () {
                    return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer ? f.mediaElement.renderer.getSrc() : null
                },
                T = function (e) {
                    var t = [];
                    if ("string" == typeof e) t.push({
                        src: e,
                        type: e ? (0, O.getTypeFromFile)(e) : ""
                    });
                    else if ("object" === (void 0 === e ? "undefined" : L(e)) && void 0 !== e.src) {
                        var n = (0, O.absolutizeUrl)(e.src),
                            o = e.type,
                            i = Object.assign(e, {
                                src: n,
                                type: "" !== o && null != o || !n ? o : (0, O.getTypeFromFile)(n)
                            });
                        t.push(i)
                    } else if (Array.isArray(e))
                        for (var r = 0, a = e.length; r < a; r++) {
                            var s = (0, O.absolutizeUrl)(e[r].src),
                                l = e[r].type,
                                d = Object.assign(e[r], {
                                    src: s,
                                    type: "" !== l && null != l || !s ? l : (0, O.getTypeFromFile)(s)
                                });
                            t.push(d)
                        }
                    var u = D.renderer.select(t, f.mediaElement.options.renderers.length ? f.mediaElement.options.renderers : []),
                        c = void 0;
                    if (f.mediaElement.paused || (f.mediaElement.pause(), c = (0, M.createEvent)("pause", f.mediaElement), f.mediaElement.dispatchEvent(c)), f.mediaElement.originalNode.src = t[0].src || "", null !== u || !t[0].src) return t[0].src ? f.mediaElement.changeRenderer(u.rendererName, t) : null;
                    f.mediaElement.generateError("No renderer found", t)
                },
                P = function (e, t) {
                    try {
                        if ("play" !== e || "native_dash" !== f.mediaElement.rendererName && "native_hls" !== f.mediaElement.rendererName) f.mediaElement.renderer[e](t);
                        else {
                            var n = f.mediaElement.renderer[e](t);
                            n && "function" == typeof n.then && n.catch(function () {
                                f.mediaElement.paused && setTimeout(function () {
                                    var e = f.mediaElement.renderer.play();
                                    void 0 !== e && e.catch(function () {
                                        f.mediaElement.renderer.paused || f.mediaElement.renderer.pause()
                                    })
                                }, 150)
                            })
                        }
                    } catch (e) {
                        f.mediaElement.generateError(e, l)
                    }
                },
                C = function (o) {
                    f.mediaElement[o] = function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return void 0 !== f.mediaElement.renderer && null !== f.mediaElement.renderer && "function" == typeof f.mediaElement.renderer[o] && (f.mediaElement.promises.length ? Promise.all(f.mediaElement.promises).then(function () {
                            P(o, t)
                        }).catch(function (e) {
                            f.mediaElement.generateError(e, l)
                        }) : P(o, t)), null
                    }
                };
            S(f.mediaElement, "src", x, T), f.mediaElement.getSrc = x, f.mediaElement.setSrc = T;
            for (var k = 0, _ = E.length; k < _; k++) w(E[k]);
            for (var N = 0, A = b.length; N < A; N++) C(b[N]);
            return f.mediaElement.addEventListener = function (e, t) {
                f.mediaElement.events[e] = f.mediaElement.events[e] || [], f.mediaElement.events[e].push(t)
            }, f.mediaElement.removeEventListener = function (e, t) {
                if (!e) return f.mediaElement.events = {}, !0;
                var n = f.mediaElement.events[e];
                if (!n) return !0;
                if (!t) return f.mediaElement.events[e] = [], !0;
                for (var o = 0; o < n.length; o++)
                    if (n[o] === t) return f.mediaElement.events[e].splice(o, 1), !0;
                return !1
            }, f.mediaElement.dispatchEvent = function (e) {
                var t = f.mediaElement.events[e.type];
                if (t)
                    for (var n = 0; n < t.length; n++) t[n].apply(null, [e])
            }, f.mediaElement.destroy = function () {
                var e = f.mediaElement.originalNode.cloneNode(!0),
                    t = f.mediaElement.parentElement;
                e.removeAttribute("id"), e.remove(), f.mediaElement.remove(), t.appendChild(e)
            }, l.length && (f.mediaElement.src = l), f.mediaElement.promises.length ? Promise.all(f.mediaElement.promises).then(function () {
                f.mediaElement.options.success && f.mediaElement.options.success(f.mediaElement, f.mediaElement.originalNode)
            }).catch(function () {
                r && f.mediaElement.options.error && f.mediaElement.options.error(f.mediaElement, f.mediaElement.originalNode)
            }) : (f.mediaElement.options.success && f.mediaElement.options.success(f.mediaElement, f.mediaElement.originalNode), r && f.mediaElement.options.error && f.mediaElement.options.error(f.mediaElement, f.mediaElement.originalNode)), f.mediaElement
        };
        F.default.MediaElement = i, j.default.MediaElement = i, n.default = i
    }, {
        10: 10,
        2: 2,
        27: 27,
        29: 29,
        3: 3,
        30: 30,
        9: 9
    }],
    9: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = e(3);
        var r = {
            version: "4.2.12",
            html5media: {
                properties: ["volume", "src", "currentTime", "muted", "duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable", "currentSrc", "preload", "bufferedBytes", "bufferedTime", "initialTime", "startOffsetTime", "defaultPlaybackRate", "playbackRate", "played", "autoplay", "loop", "controls"],
                readOnlyProperties: ["duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable"],
                methods: ["load", "play", "pause", "canPlayType"],
                events: ["loadstart", "durationchange", "loadedmetadata", "loadeddata", "progress", "canplay", "canplaythrough", "suspend", "abort", "error", "emptied", "stalled", "play", "playing", "pause", "waiting", "seeking", "seeked", "timeupdate", "ended", "ratechange", "volumechange"],
                mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg", "video/ogv"]
            }
        };
        ((o = i) && o.__esModule ? o : {
            default: o
        }).default.mejs = r, n.default = r
    }, {
        3: 3
    }],
    10: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.renderer = void 0;
        var o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = function () {
                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (e, t, n) {
                    return t && o(e.prototype, t), n && o(e, n), e
                }
            }(),
            a = e(9),
            s = (o = a) && o.__esModule ? o : {
                default: o
            };
        var l = function () {
                function e() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.renderers = {}, this.order = []
                }
                return r(e, [{
                    key: "add",
                    value: function (e) {
                        if (void 0 === e.name) throw new TypeError("renderer must contain at least `name` property");
                        this.renderers[e.name] = e, this.order.push(e.name)
                    }
                }, {
                    key: "select",
                    value: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                            n = t.length;
                        if (t = t.length ? t : this.order, !n) {
                            var o = [/^(html5|native)/i, /^flash/i, /iframe$/i],
                                i = function (e) {
                                    for (var t = 0, n = o.length; t < n; t++)
                                        if (o[t].test(e)) return t;
                                    return o.length
                                };
                            t.sort(function (e, t) {
                                return i(e) - i(t)
                            })
                        }
                        for (var r = 0, a = t.length; r < a; r++) {
                            var s = t[r],
                                l = this.renderers[s];
                            if (null != l)
                                for (var d = 0, u = e.length; d < u; d++)
                                    if ("function" == typeof l.canPlayType && "string" == typeof e[d].type && l.canPlayType(e[d].type)) return {
                                        rendererName: l.name,
                                        src: e[d].src
                                    }
                        }
                        return null
                    }
                }, {
                    key: "order",
                    set: function (e) {
                        if (!Array.isArray(e)) throw new TypeError("order must be an array of strings.");
                        this._order = e
                    },
                    get: function () {
                        return this._order
                    }
                }, {
                    key: "renderers",
                    set: function (e) {
                        if (null !== e && "object" !== (void 0 === e ? "undefined" : i(e))) throw new TypeError("renderers must be an array of objects.");
                        this._renderers = e
                    },
                    get: function () {
                        return this._renderers
                    }
                }]), e
            }(),
            d = n.renderer = new l;
        s.default.Renderers = d
    }, {
        9: 9
    }],
    11: [function (e, t, n) {
        "use strict";
        var f = a(e(3)),
            p = a(e(2)),
            i = a(e(7)),
            o = e(18),
            r = a(o),
            m = function (e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            }(e(27)),
            h = e(29),
            v = e(28),
            y = e(30);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(o.config, {
            usePluginFullScreen: !0,
            fullscreenText: null,
            useFakeFullscreen: !1
        }), Object.assign(r.default.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: "",
            containerSizeTimeout: null,
            buildfullscreen: function (n) {
                if (n.isVideo) {
                    n.isInIframe = f.default.location !== f.default.parent.location, n.detectFullscreenMode();
                    var o = this,
                        e = (0, h.isString)(o.options.fullscreenText) ? o.options.fullscreenText : i.default.t("mejs.fullscreen"),
                        t = p.default.createElement("div");
                    if (t.className = o.options.classPrefix + "button " + o.options.classPrefix + "fullscreen-button", t.innerHTML = '<button type="button" aria-controls="' + o.id + '" title="' + e + '" aria-label="' + e + '" tabindex="0"></button>', o.addControlElement(t, "fullscreen"), t.addEventListener("click", function () {
                            m.HAS_TRUE_NATIVE_FULLSCREEN && m.IS_FULLSCREEN || n.isFullScreen ? n.exitFullScreen() : n.enterFullScreen()
                        }), n.fullscreenBtn = t, o.options.keyActions.push({
                            keys: [70],
                            action: function (e, t, n, o) {
                                o.ctrlKey || void 0 !== e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
                            }
                        }), o.exitFullscreenCallback = function (e) {
                            var t = e.which || e.keyCode || 0;
                            o.options.enableKeyboard && 27 === t && (m.HAS_TRUE_NATIVE_FULLSCREEN && m.IS_FULLSCREEN || o.isFullScreen) && n.exitFullScreen()
                        }, o.globalBind("keydown", o.exitFullscreenCallback), o.normalHeight = 0, o.normalWidth = 0, m.HAS_TRUE_NATIVE_FULLSCREEN) {
                        n.globalBind(m.FULLSCREEN_EVENT_NAME, function () {
                            n.isFullScreen && (m.isFullScreen() ? (n.isNativeFullScreen = !0, n.setControlsSize()) : (n.isNativeFullScreen = !1, n.exitFullScreen()))
                        })
                    }
                }
            },
            cleanfullscreen: function (e) {
                e.exitFullScreen(), e.globalUnbind("keydown", e.exitFullscreenCallback)
            },
            detectFullscreenMode: function () {
                var e = null !== this.media.rendererName && /(native|html5)/i.test(this.media.rendererName),
                    t = "";
                return m.HAS_TRUE_NATIVE_FULLSCREEN && e ? t = "native-native" : m.HAS_TRUE_NATIVE_FULLSCREEN && !e ? t = "plugin-native" : this.usePluginFullScreen && m.SUPPORT_POINTER_EVENTS && (t = "plugin-click"), this.fullscreenMode = t
            },
            enterFullScreen: function () {
                var o = this,
                    e = null !== o.media.rendererName && /(html5|native)/i.test(o.media.rendererName),
                    t = getComputedStyle(o.getElement(o.container));
                if (o.isVideo)
                    if (!1 === o.options.useFakeFullscreen && m.IS_IOS && m.HAS_IOS_FULLSCREEN && "function" == typeof o.media.originalNode.webkitEnterFullscreen && o.media.originalNode.canPlayType((0, y.getTypeFromFile)(o.media.getSrc()))) o.media.originalNode.webkitEnterFullscreen();
                    else {
                        if ((0, v.addClass)(p.default.documentElement, o.options.classPrefix + "fullscreen"), (0, v.addClass)(o.getElement(o.container), o.options.classPrefix + "container-fullscreen"), o.normalHeight = parseFloat(t.height), o.normalWidth = parseFloat(t.width), "native-native" !== o.fullscreenMode && "plugin-native" !== o.fullscreenMode || (m.requestFullScreen(o.getElement(o.container)), o.isInIframe && setTimeout(function e() {
                                if (o.isNativeFullScreen) {
                                    var t = f.default.innerWidth || p.default.documentElement.clientWidth || p.default.body.clientWidth,
                                        n = screen.width;
                                    .002 * n < Math.abs(n - t) ? o.exitFullScreen() : setTimeout(e, 500)
                                }
                            }, 1e3)), o.getElement(o.container).style.width = "100%", o.getElement(o.container).style.height = "100%", o.containerSizeTimeout = setTimeout(function () {
                                o.getElement(o.container).style.width = "100%", o.getElement(o.container).style.height = "100%", o.setControlsSize()
                            }, 500), e) o.node.style.width = "100%", o.node.style.height = "100%";
                        else
                            for (var n = o.getElement(o.container).querySelectorAll("embed, object, video"), i = n.length, r = 0; r < i; r++) n[r].style.width = "100%", n[r].style.height = "100%";
                        o.options.setDimensions && "function" == typeof o.media.setSize && o.media.setSize(screen.width, screen.height);
                        for (var a = o.getElement(o.layers).children, s = a.length, l = 0; l < s; l++) a[l].style.width = "100%", a[l].style.height = "100%";
                        o.fullscreenBtn && ((0, v.removeClass)(o.fullscreenBtn, o.options.classPrefix + "fullscreen"), (0, v.addClass)(o.fullscreenBtn, o.options.classPrefix + "unfullscreen")), o.setControlsSize(), o.isFullScreen = !0;
                        var d = Math.min(screen.width / o.width, screen.height / o.height),
                            u = o.getElement(o.container).querySelector("." + o.options.classPrefix + "captions-text");
                        u && (u.style.fontSize = 100 * d + "%", u.style.lineHeight = "normal", o.getElement(o.container).querySelector("." + o.options.classPrefix + "captions-position").style.bottom = (screen.height - o.normalHeight) / 2 - o.getElement(o.controls).offsetHeight / 2 + d + 15 + "px");
                        var c = (0, h.createEvent)("enteredfullscreen", o.getElement(o.container));
                        o.getElement(o.container).dispatchEvent(c)
                    }
            },
            exitFullScreen: function () {
                var e = this,
                    t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName);
                if (e.isVideo) {
                    if (clearTimeout(e.containerSizeTimeout), m.HAS_TRUE_NATIVE_FULLSCREEN && (m.IS_FULLSCREEN || e.isFullScreen) && m.cancelFullScreen(), (0, v.removeClass)(p.default.documentElement, e.options.classPrefix + "fullscreen"), (0, v.removeClass)(e.getElement(e.container), e.options.classPrefix + "container-fullscreen"), e.options.setDimensions) {
                        if (e.getElement(e.container).style.width = e.normalWidth + "px", e.getElement(e.container).style.height = e.normalHeight + "px", t) e.node.style.width = e.normalWidth + "px", e.node.style.height = e.normalHeight + "px";
                        else
                            for (var n = e.getElement(e.container).querySelectorAll("embed, object, video"), o = n.length, i = 0; i < o; i++) n[i].style.width = e.normalWidth + "px", n[i].style.height = e.normalHeight + "px";
                        "function" == typeof e.media.setSize && e.media.setSize(e.normalWidth, e.normalHeight);
                        for (var r = e.getElement(e.layers).children, a = r.length, s = 0; s < a; s++) r[s].style.width = e.normalWidth + "px", r[s].style.height = e.normalHeight + "px"
                    }
                    e.fullscreenBtn && ((0, v.removeClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen"), (0, v.addClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen")), e.setControlsSize(), e.isFullScreen = !1;
                    var l = e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-text");
                    l && (l.style.fontSize = "", l.style.lineHeight = "", e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "");
                    var d = (0, h.createEvent)("exitedfullscreen", e.getElement(e.container));
                    e.getElement(e.container).dispatchEvent(d)
                }
            }
        })
    }, {
        18: 18,
        2: 2,
        27: 27,
        28: 28,
        29: 29,
        3: 3,
        30: 30,
        7: 7
    }],
    12: [function (e, t, n) {
        "use strict";
        var c = r(e(2)),
            o = e(18),
            i = r(o),
            f = r(e(7)),
            p = e(29),
            m = e(28);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(o.config, {
            playText: null,
            pauseText: null
        }), Object.assign(i.default.prototype, {
            buildplaypause: function (e, t, n, o) {
                var i = this,
                    r = i.options,
                    a = (0, p.isString)(r.playText) ? r.playText : f.default.t("mejs.play"),
                    s = (0, p.isString)(r.pauseText) ? r.pauseText : f.default.t("mejs.pause"),
                    l = c.default.createElement("div");
                l.className = i.options.classPrefix + "button " + i.options.classPrefix + "playpause-button " + i.options.classPrefix + "play", l.innerHTML = '<button type="button" aria-controls="' + i.id + '" title="' + a + '" aria-label="' + s + '" tabindex="0"></button>', l.addEventListener("click", function () {
                    i.paused ? i.play() : i.pause()
                });
                var d = l.querySelector("button");

                function u(e) {
                    "play" === e ? ((0, m.removeClass)(l, i.options.classPrefix + "play"), (0, m.removeClass)(l, i.options.classPrefix + "replay"), (0, m.addClass)(l, i.options.classPrefix + "pause"), d.setAttribute("title", s), d.setAttribute("aria-label", s)) : ((0, m.removeClass)(l, i.options.classPrefix + "pause"), (0, m.removeClass)(l, i.options.classPrefix + "replay"), (0, m.addClass)(l, i.options.classPrefix + "play"), d.setAttribute("title", a), d.setAttribute("aria-label", a))
                }
                i.addControlElement(l, "playpause"), u("pse"), o.addEventListener("loadedmetadata", function () {
                    -1 === o.rendererName.indexOf("flash") && u("pse")
                }), o.addEventListener("play", function () {
                    u("play")
                }), o.addEventListener("playing", function () {
                    u("play")
                }), o.addEventListener("pause", function () {
                    u("pse")
                }), o.addEventListener("ended", function () {
                    e.options.loop || ((0, m.removeClass)(l, i.options.classPrefix + "pause"), (0, m.removeClass)(l, i.options.classPrefix + "play"), (0, m.addClass)(l, i.options.classPrefix + "replay"), d.setAttribute("title", a), d.setAttribute("aria-label", a))
                })
            }
        })
    }, {
        18: 18,
        2: 2,
        28: 28,
        29: 29,
        7: 7
    }],
    13: [function (e, t, n) {
        "use strict";
        var p = r(e(2)),
            o = e(18),
            i = r(o),
            m = r(e(7)),
            g = e(27),
            E = e(32),
            b = e(28);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(o.config, {
            enableProgressTooltip: !0,
            useSmoothHover: !0,
            forceLive: !1
        }), Object.assign(i.default.prototype, {
            buildprogress: function (h, s, e, d) {
                var u = 0,
                    v = !1,
                    c = !1,
                    y = this,
                    t = h.options.autoRewind,
                    n = h.options.enableProgressTooltip ? '<span class="' + y.options.classPrefix + 'time-float"><span class="' + y.options.classPrefix + 'time-float-current">00:00</span><span class="' + y.options.classPrefix + 'time-float-corner"></span></span>' : "",
                    o = p.default.createElement("div");
                o.className = y.options.classPrefix + "time-rail", o.innerHTML = '<span class="' + y.options.classPrefix + "time-total " + y.options.classPrefix + 'time-slider"><span class="' + y.options.classPrefix + 'time-buffering"></span><span class="' + y.options.classPrefix + 'time-loaded"></span><span class="' + y.options.classPrefix + 'time-current"></span><span class="' + y.options.classPrefix + 'time-hovered no-hover"></span><span class="' + y.options.classPrefix + 'time-handle"><span class="' + y.options.classPrefix + 'time-handle-content"></span></span>' + n + "</span>", y.addControlElement(o, "progress"), y.options.keyActions.push({
                    keys: [37, 227],
                    action: function (e) {
                        if (!isNaN(e.duration) && 0 < e.duration) {
                            e.isVideo && (e.showControls(), e.startControlsTimer());
                            var t = e.getElement(e.container).querySelector("." + _player.config.classPrefix + "time-total");
                            t && t.focus();
                            var n = Math.max(e.currentTime - e.options.defaultSeekBackwardInterval(e), 0);
                            e.setCurrentTime(n)
                        }
                    }
                }, {
                    keys: [39, 228],
                    action: function (e) {
                        if (!isNaN(e.duration) && 0 < e.duration) {
                            e.isVideo && (e.showControls(), e.startControlsTimer());
                            var t = e.getElement(e.container).querySelector("." + _player.config.classPrefix + "time-total");
                            t && t.focus();
                            var n = Math.min(e.currentTime + e.options.defaultSeekForwardInterval(e), e.duration);
                            e.setCurrentTime(n)
                        }
                    }
                }), y.rail = s.querySelector("." + y.options.classPrefix + "time-rail"), y.total = s.querySelector("." + y.options.classPrefix + "time-total"), y.loaded = s.querySelector("." + y.options.classPrefix + "time-loaded"), y.current = s.querySelector("." + y.options.classPrefix + "time-current"), y.handle = s.querySelector("." + y.options.classPrefix + "time-handle"), y.timefloat = s.querySelector("." + y.options.classPrefix + "time-float"), y.timefloatcurrent = s.querySelector("." + y.options.classPrefix + "time-float-current"), y.slider = s.querySelector("." + y.options.classPrefix + "time-slider"), y.hovered = s.querySelector("." + y.options.classPrefix + "time-hovered"), y.buffer = s.querySelector("." + y.options.classPrefix + "time-buffering"), y.newTime = 0, y.forcedHandlePause = !1, y.setTransformStyle = function (e, t) {
                    e.style.transform = t, e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t
                }, y.buffer.style.display = "none";
                var i = function (e) {
                        var t = getComputedStyle(y.total),
                            n = (0, b.offset)(y.total),
                            o = y.total.offsetWidth,
                            i = void 0 !== t.webkitTransform ? "webkitTransform" : void 0 !== t.mozTransform ? "mozTransform " : void 0 !== t.oTransform ? "oTransform" : void 0 !== t.msTransform ? "msTransform" : "transform",
                            r = "WebKitCSSMatrix" in window ? "WebKitCSSMatrix" : "MSCSSMatrix" in window ? "MSCSSMatrix" : "CSSMatrix" in window ? "CSSMatrix" : void 0,
                            a = 0,
                            s = 0,
                            l = 0,
                            d = void 0;
                        if (d = e.originalEvent && e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX : e.changedTouches ? e.changedTouches[0].pageX : e.pageX, y.getDuration()) {
                            if (d < n.left ? d = n.left : d > o + n.left && (d = o + n.left), a = (l = d - n.left) / o, y.newTime = a * y.getDuration(), v && null !== y.getCurrentTime() && y.newTime.toFixed(4) !== y.getCurrentTime().toFixed(4) && (y.setCurrentRailHandle(y.newTime), y.updateCurrent(y.newTime)), !g.IS_IOS && !g.IS_ANDROID) {
                                if (l < 0 && (l = 0), y.options.useSmoothHover && null !== r && void 0 !== window[r]) {
                                    var u = new window[r](getComputedStyle(y.handle)[i]).m41,
                                        c = l / parseFloat(getComputedStyle(y.total).width) - u / parseFloat(getComputedStyle(y.total).width);
                                    y.hovered.style.left = u + "px", y.setTransformStyle(y.hovered, "scaleX(" + c + ")"), y.hovered.setAttribute("pos", l), 0 <= c ? (0, b.removeClass)(y.hovered, "negative") : (0, b.addClass)(y.hovered, "negative")
                                }
                                if (y.timefloat) {
                                    var f = y.timefloat.offsetWidth / 2,
                                        p = mejs.Utils.offset(y.getElement(y.container)),
                                        m = getComputedStyle(y.timefloat);
                                    s = d - p.left < y.timefloat.offsetWidth ? f : d - p.left >= y.getElement(y.container).offsetWidth - f ? y.total.offsetWidth - f : l, (0, b.hasClass)(y.getElement(y.container), y.options.classPrefix + "long-video") && (s += parseFloat(m.marginLeft) / 2 + y.timefloat.offsetWidth / 2), y.timefloat.style.left = s + "px", y.timefloatcurrent.innerHTML = (0, E.secondsToTimeCode)(y.newTime, h.options.alwaysShowHours, h.options.showTimecodeFrameCount, h.options.framesPerSecond, h.options.secondsDecimalLength, h.options.timeFormat), y.timefloat.style.display = "block"
                                }
                            }
                        } else g.IS_IOS || g.IS_ANDROID || !y.timefloat || (s = y.timefloat.offsetWidth + o >= y.getElement(y.container).offsetWidth ? y.timefloat.offsetWidth / 2 : 0, y.timefloat.style.left = s + "px", y.timefloat.style.left = s + "px", y.timefloat.style.display = "block")
                    },
                    f = function () {
                        1e3 <= new Date - u && y.play()
                    };
                y.slider.addEventListener("focus", function () {
                    h.options.autoRewind = !1
                }), y.slider.addEventListener("blur", function () {
                    h.options.autoRewind = t
                }), y.slider.addEventListener("keydown", function (e) {
                    if (1e3 <= new Date - u && (c = y.paused), y.options.enableKeyboard && y.options.keyActions.length) {
                        var t = e.which || e.keyCode || 0,
                            n = y.getDuration(),
                            o = h.options.defaultSeekForwardInterval(d),
                            i = h.options.defaultSeekBackwardInterval(d),
                            r = y.getCurrentTime(),
                            a = y.getElement(y.container).querySelector("." + y.options.classPrefix + "volume-slider");
                        if (38 === t || 40 === t) {
                            a && (a.style.display = "block"), y.isVideo && (y.showControls(), y.startControlsTimer());
                            var s = 38 === t ? Math.min(y.volume + .1, 1) : Math.max(y.volume - .1, 0),
                                l = s <= 0;
                            return y.setVolume(s), void y.setMuted(l)
                        }
                        switch (a && (a.style.display = "none"), t) {
                            case 37:
                                y.getDuration() !== 1 / 0 && (r -= i);
                                break;
                            case 39:
                                y.getDuration() !== 1 / 0 && (r += o);
                                break;
                            case 36:
                                r = 0;
                                break;
                            case 35:
                                r = n;
                                break;
                            case 13:
                            case 32:
                                return void(g.IS_FIREFOX && (y.paused ? y.play() : y.pause()));
                            default:
                                return
                        }
                        r = r < 0 || isNaN(r) ? 0 : n <= r ? n : Math.floor(r), u = new Date, c || h.pause(), r < y.getDuration() && !c && setTimeout(f, 1100), y.setCurrentTime(r), h.showControls(), e.preventDefault(), e.stopPropagation()
                    }
                });
                var r = ["mousedown", "touchstart"];
                y.slider.addEventListener("dragstart", function () {
                    return !1
                });
                for (var a = 0, l = r.length; a < l; a++) y.slider.addEventListener(r[a], function (e) {
                    if (y.forcedHandlePause = !1, y.getDuration() !== 1 / 0 && (1 === e.which || 0 === e.which)) {
                        y.paused || (y.pause(), y.forcedHandlePause = !0), v = !0, i(e);
                        for (var t = ["mouseup", "touchend"], n = 0, o = t.length; n < o; n++) y.getElement(y.container).addEventListener(t[n], function (e) {
                            var t = e.target;
                            (t === y.slider || t.closest("." + y.options.classPrefix + "time-slider")) && i(e)
                        });
                        y.globalBind("mouseup.dur touchend.dur", function () {
                            v && null !== y.getCurrentTime() && y.newTime.toFixed(4) !== y.getCurrentTime().toFixed(4) && (y.setCurrentTime(y.newTime), y.setCurrentRailHandle(y.newTime), y.updateCurrent(y.newTime)), y.forcedHandlePause && (y.slider.focus(), y.play()), y.forcedHandlePause = !1, v = !1, y.timefloat && (y.timefloat.style.display = "none")
                        })
                    }
                }, !(!g.SUPPORT_PASSIVE_EVENT || "touchstart" !== r[a]) && {
                    passive: !0
                });
                y.slider.addEventListener("mouseenter", function (e) {
                    e.target === y.slider && y.getDuration() !== 1 / 0 && (y.getElement(y.container).addEventListener("mousemove", function (e) {
                        var t = e.target;
                        (t === y.slider || t.closest("." + y.options.classPrefix + "time-slider")) && i(e)
                    }), !y.timefloat || g.IS_IOS || g.IS_ANDROID || (y.timefloat.style.display = "block"), y.hovered && !g.IS_IOS && !g.IS_ANDROID && y.options.useSmoothHover && (0, b.removeClass)(y.hovered, "no-hover"))
                }), y.slider.addEventListener("mouseleave", function () {
                    y.getDuration() !== 1 / 0 && (v || (y.timefloat && (y.timefloat.style.display = "none"), y.hovered && y.options.useSmoothHover && (0, b.addClass)(y.hovered, "no-hover")))
                }), y.broadcastCallback = function (e) {
                    var t, n, o, i, r = s.querySelector("." + y.options.classPrefix + "broadcast");
                    if (y.options.forceLive || y.getDuration() === 1 / 0) {
                        if (!r && y.options.forceLive) {
                            var a = p.default.createElement("span");
                            a.className = y.options.classPrefix + "broadcast", a.innerText = m.default.t("mejs.live-broadcast"), y.slider.style.display = "none", y.rail.appendChild(a)
                        }
                    } else r && (y.slider.style.display = "", r.remove()), h.setProgressRail(e), y.forcedHandlePause || h.setCurrentRail(e), t = y.getCurrentTime(), n = m.default.t("mejs.time-slider"), o = (0, E.secondsToTimeCode)(t, h.options.alwaysShowHours, h.options.showTimecodeFrameCount, h.options.framesPerSecond, h.options.secondsDecimalLength, h.options.timeFormat), i = y.getDuration(), y.slider.setAttribute("role", "slider"), y.slider.tabIndex = 0, d.paused ? (y.slider.setAttribute("aria-label", n), y.slider.setAttribute("aria-valuemin", 0), y.slider.setAttribute("aria-valuemax", isNaN(i) ? 0 : i), y.slider.setAttribute("aria-valuenow", t), y.slider.setAttribute("aria-valuetext", o)) : (y.slider.removeAttribute("aria-label"), y.slider.removeAttribute("aria-valuemin"), y.slider.removeAttribute("aria-valuemax"), y.slider.removeAttribute("aria-valuenow"), y.slider.removeAttribute("aria-valuetext"))
                }, d.addEventListener("progress", y.broadcastCallback), d.addEventListener("timeupdate", y.broadcastCallback), d.addEventListener("play", function () {
                    y.buffer.style.display = "none"
                }), d.addEventListener("playing", function () {
                    y.buffer.style.display = "none"
                }), d.addEventListener("seeking", function () {
                    y.buffer.style.display = ""
                }), d.addEventListener("seeked", function () {
                    y.buffer.style.display = "none"
                }), d.addEventListener("pause", function () {
                    y.buffer.style.display = "none"
                }), d.addEventListener("waiting", function () {
                    y.buffer.style.display = ""
                }), d.addEventListener("loadeddata", function () {
                    y.buffer.style.display = ""
                }), d.addEventListener("canplay", function () {
                    y.buffer.style.display = "none"
                }), d.addEventListener("error", function () {
                    y.buffer.style.display = "none"
                }), y.getElement(y.container).addEventListener("controlsresize", function (e) {
                    y.getDuration() !== 1 / 0 && (h.setProgressRail(e), y.forcedHandlePause || h.setCurrentRail(e))
                })
            },
            cleanprogress: function (e, t, n, o) {
                o.removeEventListener("progress", e.broadcastCallback), o.removeEventListener("timeupdate", e.broadcastCallback), e.rail && e.rail.remove()
            },
            setProgressRail: function (e) {
                var t = this,
                    n = void 0 !== e ? e.detail.target || e.target : t.media,
                    o = null;
                n && n.buffered && 0 < n.buffered.length && n.buffered.end && t.getDuration() ? o = n.buffered.end(n.buffered.length - 1) / t.getDuration() : n && void 0 !== n.bytesTotal && 0 < n.bytesTotal && void 0 !== n.bufferedBytes ? o = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 !== e.total && (o = e.loaded / e.total), null !== o && (o = Math.min(1, Math.max(0, o)), t.loaded && t.setTransformStyle(t.loaded, "scaleX(" + o + ")"))
            },
            setCurrentRailHandle: function (e) {
                this.setCurrentRailMain(this, e)
            },
            setCurrentRail: function () {
                this.setCurrentRailMain(this)
            },
            setCurrentRailMain: function (e, t) {
                if (void 0 !== e.getCurrentTime() && e.getDuration()) {
                    var n = void 0 === t ? e.getCurrentTime() : t;
                    if (e.total && e.handle) {
                        var o = parseFloat(getComputedStyle(e.total).width),
                            i = Math.round(o * n / e.getDuration()),
                            r = i - Math.round(e.handle.offsetWidth / 2);
                        if (r = r < 0 ? 0 : r, e.setTransformStyle(e.current, "scaleX(" + i / o + ")"), e.setTransformStyle(e.handle, "translateX(" + r + "px)"), e.options.useSmoothHover && !(0, b.hasClass)(e.hovered, "no-hover")) {
                            var a = parseInt(e.hovered.getAttribute("pos"), 10),
                                s = (a = isNaN(a) ? 0 : a) / o - r / o;
                            e.hovered.style.left = r + "px", e.setTransformStyle(e.hovered, "scaleX(" + s + ")"), 0 <= s ? (0, b.removeClass)(e.hovered, "negative") : (0, b.addClass)(e.hovered, "negative")
                        }
                    }
                }
            }
        })
    }, {
        18: 18,
        2: 2,
        27: 27,
        28: 28,
        32: 32,
        7: 7
    }],
    14: [function (e, t, n) {
        "use strict";
        var a = r(e(2)),
            o = e(18),
            i = r(o),
            s = e(32),
            l = e(28);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(o.config, {
            duration: 0,
            timeAndDurationSeparator: "<span> | </span>"
        }), Object.assign(i.default.prototype, {
            buildcurrent: function (e, t, n, o) {
                var i = this,
                    r = a.default.createElement("div");
                r.className = i.options.classPrefix + "time", r.setAttribute("role", "timer"), r.setAttribute("aria-live", "off"), r.innerHTML = '<span class="' + i.options.classPrefix + 'currenttime">' + (0, s.secondsToTimeCode)(0, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat) + "</span>", i.addControlElement(r, "current"), e.updateCurrent(), i.updateTimeCallback = function () {
                    i.controlsAreVisible && e.updateCurrent()
                }, o.addEventListener("timeupdate", i.updateTimeCallback)
            },
            cleancurrent: function (e, t, n, o) {
                o.removeEventListener("timeupdate", e.updateTimeCallback)
            },
            buildduration: function (e, t, n, o) {
                var i = this;
                if (t.lastChild.querySelector("." + i.options.classPrefix + "currenttime")) t.querySelector("." + i.options.classPrefix + "time").innerHTML += i.options.timeAndDurationSeparator + '<span class="' + i.options.classPrefix + 'duration">' + (0, s.secondsToTimeCode)(i.options.duration, i.options.alwaysShowHours, i.options.showTimecodeFrameCount, i.options.framesPerSecond, i.options.secondsDecimalLength, i.options.timeFormat) + "</span>";
                else {
                    t.querySelector("." + i.options.classPrefix + "currenttime") && (0, l.addClass)(t.querySelector("." + i.options.classPrefix + "currenttime").parentNode, i.options.classPrefix + "currenttime-container");
                    var r = a.default.createElement("div");
                    r.className = i.options.classPrefix + "time " + i.options.classPrefix + "duration-container", r.innerHTML = '<span class="' + i.options.classPrefix + 'duration">' + (0, s.secondsToTimeCode)(i.options.duration, i.options.alwaysShowHours, i.options.showTimecodeFrameCount, i.options.framesPerSecond, i.options.secondsDecimalLength, i.options.timeFormat) + "</span>", i.addControlElement(r, "duration")
                }
                i.updateDurationCallback = function () {
                    i.controlsAreVisible && e.updateDuration()
                }, o.addEventListener("timeupdate", i.updateDurationCallback)
            },
            cleanduration: function (e, t, n, o) {
                o.removeEventListener("timeupdate", e.updateDurationCallback)
            },
            updateCurrent: function () {
                var e = this,
                    t = e.getCurrentTime();
                isNaN(t) && (t = 0);
                var n = (0, s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat);
                5 < n.length ? (0, l.addClass)(e.getElement(e.container), e.options.classPrefix + "long-video") : (0, l.removeClass)(e.getElement(e.container), e.options.classPrefix + "long-video"), e.getElement(e.controls).querySelector("." + e.options.classPrefix + "currenttime") && (e.getElement(e.controls).querySelector("." + e.options.classPrefix + "currenttime").innerText = n)
            },
            updateDuration: function () {
                var e = this,
                    t = e.getDuration();
                void 0 !== e.media && (isNaN(t) || t === 1 / 0 || t < 0) && (e.media.duration = e.options.duration = t = 0), 0 < e.options.duration && (t = e.options.duration);
                var n = (0, s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat);
                5 < n.length ? (0, l.addClass)(e.getElement(e.container), e.options.classPrefix + "long-video") : (0, l.removeClass)(e.getElement(e.container), e.options.classPrefix + "long-video"), e.getElement(e.controls).querySelector("." + e.options.classPrefix + "duration") && 0 < t && (e.getElement(e.controls).querySelector("." + e.options.classPrefix + "duration").innerHTML = n)
            }
        })
    }, {
        18: 18,
        2: 2,
        28: 28,
        32: 32
    }],
    15: [function (e, t, n) {
        "use strict";
        var L = r(e(2)),
            d = r(e(9)),
            F = r(e(7)),
            o = e(18),
            i = r(o),
            m = e(32),
            I = e(29),
            j = e(28);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(o.config, {
            startLanguage: "",
            tracksText: null,
            chaptersText: null,
            tracksAriaLive: !1,
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), Object.assign(i.default.prototype, {
            hasChapters: !1,
            buildtracks: function (o, e, t, n) {
                if (this.findTracks(), o.tracks.length || o.trackFiles && 0 !== !o.trackFiles.length) {
                    var i = this,
                        r = i.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : "",
                        a = (0, I.isString)(i.options.tracksText) ? i.options.tracksText : F.default.t("mejs.captions-subtitles"),
                        s = (0, I.isString)(i.options.chaptersText) ? i.options.chaptersText : F.default.t("mejs.captions-chapters"),
                        l = null === o.trackFiles ? o.tracks.length : o.trackFiles.length;
                    if (i.domNode.textTracks)
                        for (var d = i.domNode.textTracks.length - 1; 0 <= d; d--) i.domNode.textTracks[d].mode = "hidden";
                    i.cleartracks(o), o.captions = L.default.createElement("div"), o.captions.className = i.options.classPrefix + "captions-layer " + i.options.classPrefix + "layer", o.captions.innerHTML = '<div class="' + i.options.classPrefix + "captions-position " + i.options.classPrefix + 'captions-position-hover"' + r + '><span class="' + i.options.classPrefix + 'captions-text"></span></div>', o.captions.style.display = "none", t.insertBefore(o.captions, t.firstChild), o.captionsText = o.captions.querySelector("." + i.options.classPrefix + "captions-text"), o.captionsButton = L.default.createElement("div"), o.captionsButton.className = i.options.classPrefix + "button " + i.options.classPrefix + "captions-button", o.captionsButton.innerHTML = '<button type="button" aria-controls="' + i.id + '" title="' + a + '" aria-label="' + a + '" tabindex="0"></button><div class="' + i.options.classPrefix + "captions-selector " + i.options.classPrefix + 'offscreen"><ul class="' + i.options.classPrefix + 'captions-selector-list"><li class="' + i.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + i.options.classPrefix + 'captions-selector-input" name="' + o.id + '_captions" id="' + o.id + '_captions_none" value="none" checked disabled><label class="' + i.options.classPrefix + "captions-selector-label " + i.options.classPrefix + 'captions-selected" for="' + o.id + '_captions_none">' + F.default.t("mejs.none") + "</label></li></ul></div>", i.addControlElement(o.captionsButton, "tracks"), o.captionsButton.querySelector("." + i.options.classPrefix + "captions-selector-input").disabled = !1, o.chaptersButton = L.default.createElement("div"), o.chaptersButton.className = i.options.classPrefix + "button " + i.options.classPrefix + "chapters-button", o.chaptersButton.innerHTML = '<button type="button" aria-controls="' + i.id + '" title="' + s + '" aria-label="' + s + '" tabindex="0"></button><div class="' + i.options.classPrefix + "chapters-selector " + i.options.classPrefix + 'offscreen"><ul class="' + i.options.classPrefix + 'chapters-selector-list"></ul></div>';
                    for (var u = 0, c = 0; c < l; c++) {
                        var f = o.tracks[c].kind;
                        o.tracks[c].src.trim() && ("subtitles" === f || "captions" === f ? u++ : "chapters" !== f || e.querySelector("." + i.options.classPrefix + "chapter-selector") || o.captionsButton.parentNode.insertBefore(o.chaptersButton, o.captionsButton))
                    }
                    o.trackToLoad = -1, o.selectedTrack = null, o.isLoadingTrack = !1;
                    for (var p = 0; p < l; p++) {
                        var m = o.tracks[p].kind;
                        !o.tracks[p].src.trim() || "subtitles" !== m && "captions" !== m || o.addTrackButton(o.tracks[p].trackId, o.tracks[p].srclang, o.tracks[p].label)
                    }
                    o.loadNextTrack();
                    var h = ["mouseenter", "focusin"],
                        v = ["mouseleave", "focusout"];
                    if (i.options.toggleCaptionsButtonWhenOnlyOne && 1 === u) o.captionsButton.addEventListener("click", function (e) {
                        var t = "none";
                        null === o.selectedTrack && (t = o.tracks[0].trackId);
                        var n = e.keyCode || e.which;
                        o.setTrack(t, void 0 !== n)
                    });
                    else {
                        for (var y = o.captionsButton.querySelectorAll("." + i.options.classPrefix + "captions-selector-label"), g = o.captionsButton.querySelectorAll("input[type=radio]"), E = 0, b = h.length; E < b; E++) o.captionsButton.addEventListener(h[E], function () {
                            (0, j.removeClass)(this.querySelector("." + i.options.classPrefix + "captions-selector"), i.options.classPrefix + "offscreen")
                        });
                        for (var S = 0, w = v.length; S < w; S++) o.captionsButton.addEventListener(v[S], function () {
                            (0, j.addClass)(this.querySelector("." + i.options.classPrefix + "captions-selector"), i.options.classPrefix + "offscreen")
                        });
                        for (var x = 0, T = g.length; x < T; x++) g[x].addEventListener("click", function (e) {
                            var t = e.keyCode || e.which;
                            o.setTrack(this.value, void 0 !== t)
                        });
                        for (var P = 0, C = y.length; P < C; P++) y[P].addEventListener("click", function (e) {
                            var t = (0, j.siblings)(this, function (e) {
                                    return "INPUT" === e.tagName
                                })[0],
                                n = (0, I.createEvent)("click", t);
                            t.dispatchEvent(n), e.preventDefault()
                        });
                        o.captionsButton.addEventListener("keydown", function (e) {
                            e.stopPropagation()
                        })
                    }
                    for (var k = 0, _ = h.length; k < _; k++) o.chaptersButton.addEventListener(h[k], function () {
                        this.querySelector("." + i.options.classPrefix + "chapters-selector-list").children.length && (0, j.removeClass)(this.querySelector("." + i.options.classPrefix + "chapters-selector"), i.options.classPrefix + "offscreen")
                    });
                    for (var N = 0, A = v.length; N < A; N++) o.chaptersButton.addEventListener(v[N], function () {
                        (0, j.addClass)(this.querySelector("." + i.options.classPrefix + "chapters-selector"), i.options.classPrefix + "offscreen")
                    });
                    o.chaptersButton.addEventListener("keydown", function (e) {
                        e.stopPropagation()
                    }), o.options.alwaysShowControls ? (0, j.addClass)(o.getElement(o.container).querySelector("." + i.options.classPrefix + "captions-position"), i.options.classPrefix + "captions-position-hover") : (o.getElement(o.container).addEventListener("controlsshown", function () {
                        (0, j.addClass)(o.getElement(o.container).querySelector("." + i.options.classPrefix + "captions-position"), i.options.classPrefix + "captions-position-hover")
                    }), o.getElement(o.container).addEventListener("controlshidden", function () {
                        n.paused || (0, j.removeClass)(o.getElement(o.container).querySelector("." + i.options.classPrefix + "captions-position"), i.options.classPrefix + "captions-position-hover")
                    })), n.addEventListener("timeupdate", function () {
                        o.displayCaptions()
                    }), "" !== o.options.slidesSelector && (o.slidesContainer = L.default.querySelectorAll(o.options.slidesSelector), n.addEventListener("timeupdate", function () {
                        o.displaySlides()
                    }))
                }
            },
            cleartracks: function (e) {
                e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), e.captionsButton && e.captionsButton.remove(), e.chaptersButton && e.chaptersButton.remove())
            },
            rebuildtracks: function () {
                var e = this;
                e.findTracks(), e.buildtracks(e, e.getElement(e.controls), e.getElement(e.layers), e.media)
            },
            findTracks: function () {
                var e = this,
                    t = null === e.trackFiles ? e.node.querySelectorAll("track") : e.trackFiles,
                    n = t.length;
                e.tracks = [];
                for (var o = 0; o < n; o++) {
                    var i = t[o],
                        r = i.getAttribute("srclang").toLowerCase() || "",
                        a = e.id + "_track_" + o + "_" + i.getAttribute("kind") + "_" + r;
                    e.tracks.push({
                        trackId: a,
                        srclang: r,
                        src: i.getAttribute("src"),
                        kind: i.getAttribute("kind"),
                        label: i.getAttribute("label") || "",
                        entries: [],
                        isLoaded: !1
                    })
                }
            },
            setTrack: function (e, t) {
                for (var n = this, o = n.captionsButton.querySelectorAll('input[type="radio"]'), i = n.captionsButton.querySelectorAll("." + n.options.classPrefix + "captions-selected"), r = n.captionsButton.querySelector('input[value="' + e + '"]'), a = 0, s = o.length; a < s; a++) o[a].checked = !1;
                for (var l = 0, d = i.length; l < d; l++)(0, j.removeClass)(i[l], n.options.classPrefix + "captions-selected");
                r.checked = !0;
                for (var u = (0, j.siblings)(r, function (e) {
                        return (0, j.hasClass)(e, n.options.classPrefix + "captions-selector-label")
                    }), c = 0, f = u.length; c < f; c++)(0, j.addClass)(u[c], n.options.classPrefix + "captions-selected");
                if ("none" === e) n.selectedTrack = null, (0, j.removeClass)(n.captionsButton, n.options.classPrefix + "captions-enabled");
                else
                    for (var p = 0, m = n.tracks.length; p < m; p++) {
                        var h = n.tracks[p];
                        if (h.trackId === e) {
                            null === n.selectedTrack && (0, j.addClass)(n.captionsButton, n.options.classPrefix + "captions-enabled"), n.selectedTrack = h, n.captions.setAttribute("lang", n.selectedTrack.srclang), n.displayCaptions();
                            break
                        }
                    }
                var v = (0, I.createEvent)("captionschange", n.media);
                v.detail.caption = n.selectedTrack, n.media.dispatchEvent(v), t || setTimeout(function () {
                    n.getElement(n.container).focus()
                }, 500)
            },
            loadNextTrack: function () {
                var e = this;
                e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
            },
            loadTrack: function (e) {
                var t = this,
                    n = t.tracks[e];
                void 0 === n || void 0 === n.src && "" === n.src || (0, j.ajax)(n.src, "text", function (e) {
                    n.entries = "string" == typeof e && /<tt\s+xml/gi.exec(e) ? d.default.TrackFormatParser.dfxp.parse(e) : d.default.TrackFormatParser.webvtt.parse(e), n.isLoaded = !0, t.enableTrackButton(n), t.loadNextTrack(), "slides" === n.kind ? t.setupSlides(n) : "chapters" !== n.kind || t.hasChapters || (t.drawChapters(n), t.hasChapters = !0)
                }, function () {
                    t.removeTrackButton(n.trackId), t.loadNextTrack()
                })
            },
            enableTrackButton: function (e) {
                var t = this,
                    n = e.srclang,
                    o = L.default.getElementById("" + e.trackId);
                if (o) {
                    var i = e.label;
                    "" === i && (i = F.default.t(d.default.language.codes[n]) || n), o.disabled = !1;
                    for (var r = (0, j.siblings)(o, function (e) {
                            return (0, j.hasClass)(e, t.options.classPrefix + "captions-selector-label")
                        }), a = 0, s = r.length; a < s; a++) r[a].innerHTML = i;
                    if (t.options.startLanguage === n) {
                        o.checked = !0;
                        var l = (0, I.createEvent)("click", o);
                        o.dispatchEvent(l)
                    }
                }
            },
            removeTrackButton: function (e) {
                var t = L.default.getElementById("" + e);
                if (t) {
                    var n = t.closest("li");
                    n && n.remove()
                }
            },
            addTrackButton: function (e, t, n) {
                var o = this;
                "" === n && (n = F.default.t(d.default.language.codes[t]) || t), o.captionsButton.querySelector("ul").innerHTML += '<li class="' + o.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + o.options.classPrefix + 'captions-selector-input" name="' + o.id + '_captions" id="' + e + '" value="' + e + '" disabled><label class="' + o.options.classPrefix + 'captions-selector-label"for="' + e + '">' + n + " (loading)</label></li>"
            },
            checkForTracks: function () {
                var e = this,
                    t = !1;
                if (e.options.hideCaptionsButtonWhenEmpty) {
                    for (var n = 0, o = e.tracks.length; n < o; n++) {
                        var i = e.tracks[n].kind;
                        if (("subtitles" === i || "captions" === i) && e.tracks[n].isLoaded) {
                            t = !0;
                            break
                        }
                    }
                    e.captionsButton.style.display = t ? "" : "none", e.setControlsSize()
                }
            },
            displayCaptions: function () {
                if (void 0 !== this.tracks) {
                    var e = this,
                        t = e.selectedTrack;
                    if (null !== t && t.isLoaded) {
                        var n = e.searchTrackPosition(t.entries, e.media.currentTime);
                        if (-1 < n) return e.captionsText.innerHTML = function (e) {
                            var t = L.default.createElement("div");
                            t.innerHTML = e;
                            for (var n = t.getElementsByTagName("script"), o = n.length; o--;) n[o].remove();
                            for (var i = t.getElementsByTagName("*"), r = 0, a = i.length; r < a; r++)
                                for (var s = i[r].attributes, l = Array.prototype.slice.call(s), d = 0, u = l.length; d < u; d++) l[d].name.startsWith("on") || l[d].value.startsWith("javascript") ? i[r].remove() : "style" === l[d].name && i[r].removeAttribute(l[d].name);
                            return t.innerHTML
                        }(t.entries[n].text), e.captionsText.className = e.options.classPrefix + "captions-text " + (t.entries[n].identifier || ""), e.captions.style.display = "", void(e.captions.style.height = "0px");
                        e.captions.style.display = "none"
                    } else e.captions.style.display = "none"
                }
            },
            setupSlides: function (e) {
                this.slides = e, this.slides.entries.imgs = [this.slides.entries.length], this.showSlide(0)
            },
            showSlide: function (e) {
                var i = this,
                    r = this;
                if (void 0 !== r.tracks && void 0 !== r.slidesContainer) {
                    var t = r.slides.entries[e].text,
                        n = r.slides.entries[e].imgs;
                    if (void 0 === n || void 0 === n.fadeIn) {
                        var a = L.default.createElement("img");
                        a.src = t, a.addEventListener("load", function () {
                            var e = i,
                                t = (0, j.siblings)(e, function (e) {
                                    return t(e)
                                });
                            e.style.display = "none", r.slidesContainer.innerHTML += e.innerHTML, (0, j.fadeIn)(r.slidesContainer.querySelector(a));
                            for (var n = 0, o = t.length; n < o; n++)(0, j.fadeOut)(t[n], 400)
                        }), r.slides.entries[e].imgs = n = a
                    } else if (!(0, j.visible)(n)) {
                        var o = (0, j.siblings)(self, function (e) {
                            return o(e)
                        });
                        (0, j.fadeIn)(r.slidesContainer.querySelector(n));
                        for (var s = 0, l = o.length; s < l; s++)(0, j.fadeOut)(o[s])
                    }
                }
            },
            displaySlides: function () {
                if (void 0 !== this.slides) {
                    var e = this.slides,
                        t = this.searchTrackPosition(e.entries, this.media.currentTime); - 1 < t && this.showSlide(t)
                }
            },
            drawChapters: function (e) {
                var r = this,
                    t = e.entries.length;
                if (t) {
                    r.chaptersButton.querySelector("ul").innerHTML = "";
                    for (var n = 0; n < t; n++) r.chaptersButton.querySelector("ul").innerHTML += '<li class="' + r.options.classPrefix + 'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' + r.options.classPrefix + 'captions-selector-input" name="' + r.id + '_chapters" id="' + r.id + "_chapters_" + n + '" value="' + e.entries[n].start + '" disabled><label class="' + r.options.classPrefix + 'chapters-selector-label"for="' + r.id + "_chapters_" + n + '">' + e.entries[n].text + "</label></li>";
                    for (var o = r.chaptersButton.querySelectorAll('input[type="radio"]'), i = r.chaptersButton.querySelectorAll("." + r.options.classPrefix + "chapters-selector-label"), a = 0, s = o.length; a < s; a++) o[a].disabled = !1, o[a].checked = !1, o[a].addEventListener("click", function (e) {
                        var t = r.chaptersButton.querySelectorAll("li"),
                            n = (0, j.siblings)(this, function (e) {
                                return (0, j.hasClass)(e, r.options.classPrefix + "chapters-selector-label")
                            })[0];
                        this.checked = !0, this.parentNode.setAttribute("aria-checked", !0), (0, j.addClass)(n, r.options.classPrefix + "chapters-selected"), (0, j.removeClass)(r.chaptersButton.querySelector("." + r.options.classPrefix + "chapters-selected"), r.options.classPrefix + "chapters-selected");
                        for (var o = 0, i = t.length; o < i; o++) t[o].setAttribute("aria-checked", !1);
                        void 0 === (e.keyCode || e.which) && setTimeout(function () {
                            r.getElement(r.container).focus()
                        }, 500), r.media.setCurrentTime(parseFloat(this.value)), r.media.paused && r.media.play()
                    });
                    for (var l = 0, d = i.length; l < d; l++) i[l].addEventListener("click", function (e) {
                        var t = (0, j.siblings)(this, function (e) {
                                return "INPUT" === e.tagName
                            })[0],
                            n = (0, I.createEvent)("click", t);
                        t.dispatchEvent(n), e.preventDefault()
                    })
                }
            },
            searchTrackPosition: function (e, t) {
                for (var n = 0, o = e.length - 1, i = void 0, r = void 0, a = void 0; n <= o;) {
                    if (r = e[i = n + o >> 1].start, a = e[i].stop, r <= t && t < a) return i;
                    r < t ? n = i + 1 : t < r && (o = i - 1)
                }
                return -1
            }
        }), d.default.language = {
            codes: {
                af: "mejs.afrikaans",
                sq: "mejs.albanian",
                ar: "mejs.arabic",
                be: "mejs.belarusian",
                bg: "mejs.bulgarian",
                ca: "mejs.catalan",
                zh: "mejs.chinese",
                "zh-cn": "mejs.chinese-simplified",
                "zh-tw": "mejs.chines-traditional",
                hr: "mejs.croatian",
                cs: "mejs.czech",
                da: "mejs.danish",
                nl: "mejs.dutch",
                en: "mejs.english",
                et: "mejs.estonian",
                fl: "mejs.filipino",
                fi: "mejs.finnish",
                fr: "mejs.french",
                gl: "mejs.galician",
                de: "mejs.german",
                el: "mejs.greek",
                ht: "mejs.haitian-creole",
                iw: "mejs.hebrew",
                hi: "mejs.hindi",
                hu: "mejs.hungarian",
                is: "mejs.icelandic",
                id: "mejs.indonesian",
                ga: "mejs.irish",
                it: "mejs.italian",
                ja: "mejs.japanese",
                ko: "mejs.korean",
                lv: "mejs.latvian",
                lt: "mejs.lithuanian",
                mk: "mejs.macedonian",
                ms: "mejs.malay",
                mt: "mejs.maltese",
                no: "mejs.norwegian",
                fa: "mejs.persian",
                pl: "mejs.polish",
                pt: "mejs.portuguese",
                ro: "mejs.romanian",
                ru: "mejs.russian",
                sr: "mejs.serbian",
                sk: "mejs.slovak",
                sl: "mejs.slovenian",
                es: "mejs.spanish",
                sw: "mejs.swahili",
                sv: "mejs.swedish",
                tl: "mejs.tagalog",
                th: "mejs.thai",
                tr: "mejs.turkish",
                uk: "mejs.ukrainian",
                vi: "mejs.vietnamese",
                cy: "mejs.welsh",
                yi: "mejs.yiddish"
            }
        }, d.default.TrackFormatParser = {
            webvtt: {
                pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function (e) {
                    for (var t = e.split(/\r?\n/), n = [], o = void 0, i = void 0, r = void 0, a = 0, s = t.length; a < s; a++) {
                        if ((o = this.pattern.exec(t[a])) && a < t.length) {
                            for (0 <= a - 1 && "" !== t[a - 1] && (r = t[a - 1]), i = t[++a], a++;
                                "" !== t[a] && a < t.length;) i = i + "\n" + t[a], a++;
                            i = i.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), n.push({
                                identifier: r,
                                start: 0 === (0, m.convertSMPTEtoSeconds)(o[1]) ? .2 : (0, m.convertSMPTEtoSeconds)(o[1]),
                                stop: (0, m.convertSMPTEtoSeconds)(o[3]),
                                text: i,
                                settings: o[5]
                            })
                        }
                        r = ""
                    }
                    return n
                }
            },
            dfxp: {
                parse: function (e) {
                    var t = (e = $(e).filter("tt")).firstChild,
                        n = t.querySelectorAll("p"),
                        o = e.getElementById("" + t.attr("style")),
                        i = [],
                        r = void 0;
                    if (o.length) {
                        o.removeAttribute("id");
                        var a = o.attributes;
                        if (a.length) {
                            r = {};
                            for (var s = 0, l = a.length; s < l; s++) r[a[s].name.split(":")[1]] = a[s].value
                        }
                    }
                    for (var d = 0, u = n.length; d < u; d++) {
                        var c = void 0,
                            f = {
                                start: null,
                                stop: null,
                                style: null,
                                text: null
                            };
                        if (n.eq(d).attr("begin") && (f.start = (0, m.convertSMPTEtoSeconds)(n.eq(d).attr("begin"))), !f.start && n.eq(d - 1).attr("end") && (f.start = (0, m.convertSMPTEtoSeconds)(n.eq(d - 1).attr("end"))), n.eq(d).attr("end") && (f.stop = (0, m.convertSMPTEtoSeconds)(n.eq(d).attr("end"))), !f.stop && n.eq(d + 1).attr("begin") && (f.stop = (0, m.convertSMPTEtoSeconds)(n.eq(d + 1).attr("begin"))), r)
                            for (var p in c = "", r) c += p + ":" + r[p] + ";";
                        c && (f.style = c), 0 === f.start && (f.start = .2), f.text = n.eq(d).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), i.push(f)
                    }
                    return i
                }
            }
        }
    }, {
        18: 18,
        2: 2,
        28: 28,
        29: 29,
        32: 32,
        7: 7,
        9: 9
    }],
    16: [function (e, t, n) {
        "use strict";
        var w = i(e(2)),
            x = e(18),
            o = i(x),
            T = i(e(7)),
            P = e(27),
            C = e(29),
            k = e(28);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.assign(x.config, {
            muteText: null,
            unmuteText: null,
            allyVolumeControlText: null,
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical",
            startVolume: .8
        }), Object.assign(o.default.prototype, {
            buildvolume: function (e, t, n, o) {
                if (!P.IS_ANDROID && !P.IS_IOS || !this.options.hideVolumeOnTouchDevices) {
                    var a = this,
                        s = a.isVideo ? a.options.videoVolume : a.options.audioVolume,
                        r = (0, C.isString)(a.options.muteText) ? a.options.muteText : T.default.t("mejs.mute"),
                        l = (0, C.isString)(a.options.unmuteText) ? a.options.unmuteText : T.default.t("mejs.unmute"),
                        i = (0, C.isString)(a.options.allyVolumeControlText) ? a.options.allyVolumeControlText : T.default.t("mejs.volume-help-text"),
                        d = w.default.createElement("div");
                    if (d.className = a.options.classPrefix + "button " + a.options.classPrefix + "volume-button " + a.options.classPrefix + "mute", d.innerHTML = "horizontal" === s ? '<button type="button" aria-controls="' + a.id + '" title="' + r + '" aria-label="' + r + '" tabindex="0"></button>' : '<button type="button" aria-controls="' + a.id + '" title="' + r + '" aria-label="' + r + '" tabindex="0"></button><a href="javascript:void(0);" class="' + a.options.classPrefix + 'volume-slider" aria-label="' + T.default.t("mejs.volume-slider") + '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="' + a.options.classPrefix + 'offscreen">' + i + '</span><div class="' + a.options.classPrefix + 'volume-total"><div class="' + a.options.classPrefix + 'volume-current"></div><div class="' + a.options.classPrefix + 'volume-handle"></div></div></a>', a.addControlElement(d, "volume"), a.options.keyActions.push({
                            keys: [38],
                            action: function (e) {
                                var t = e.getElement(e.container).querySelector("." + x.config.classPrefix + "volume-slider");
                                t && t.matches(":focus") && (t.style.display = "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
                                var n = Math.min(e.volume + .1, 1);
                                e.setVolume(n), 0 < n && e.setMuted(!1)
                            }
                        }, {
                            keys: [40],
                            action: function (e) {
                                var t = e.getElement(e.container).querySelector("." + x.config.classPrefix + "volume-slider");
                                t && (t.style.display = "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
                                var n = Math.max(e.volume - .1, 0);
                                e.setVolume(n), n <= .1 && e.setMuted(!0)
                            }
                        }, {
                            keys: [77],
                            action: function (e) {
                                e.getElement(e.container).querySelector("." + x.config.classPrefix + "volume-slider").style.display = "block", e.isVideo && (e.showControls(), e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
                            }
                        }), "horizontal" === s) {
                        var u = w.default.createElement("a");
                        u.className = a.options.classPrefix + "horizontal-volume-slider", u.href = "javascript:void(0);", u.setAttribute("aria-label", T.default.t("mejs.volume-slider")), u.setAttribute("aria-valuemin", 0), u.setAttribute("aria-valuemax", 100), u.setAttribute("aria-valuenow", 100), u.setAttribute("role", "slider"), u.innerHTML += '<span class="' + a.options.classPrefix + 'offscreen">' + i + '</span><div class="' + a.options.classPrefix + 'horizontal-volume-total"><div class="' + a.options.classPrefix + 'horizontal-volume-current"></div><div class="' + a.options.classPrefix + 'horizontal-volume-handle"></div></div>', d.parentNode.insertBefore(u, d.nextSibling)
                    }
                    var c = !1,
                        f = !1,
                        p = !1,
                        m = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-slider") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-slider"),
                        h = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-total") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-total"),
                        v = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-current") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-current"),
                        y = "vertical" === s ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-handle") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-handle"),
                        g = function (e) {
                            if (null !== e && !isNaN(e) && void 0 !== e) {
                                if (e = Math.max(0, e), 0 === (e = Math.min(e, 1))) {
                                    (0, k.removeClass)(d, a.options.classPrefix + "mute"), (0, k.addClass)(d, a.options.classPrefix + "unmute");
                                    var t = d.firstElementChild;
                                    t.setAttribute("title", l), t.setAttribute("aria-label", l)
                                } else {
                                    (0, k.removeClass)(d, a.options.classPrefix + "unmute"), (0, k.addClass)(d, a.options.classPrefix + "mute");
                                    var n = d.firstElementChild;
                                    n.setAttribute("title", r), n.setAttribute("aria-label", r)
                                }
                                var o = 100 * e + "%",
                                    i = getComputedStyle(y);
                                "vertical" === s ? (v.style.bottom = 0, v.style.height = o, y.style.bottom = o, y.style.marginBottom = -parseFloat(i.height) / 2 + "px") : (v.style.left = 0, v.style.width = o, y.style.left = o, y.style.marginLeft = -parseFloat(i.width) / 2 + "px")
                            }
                        },
                        E = function (e) {
                            var t = (0, k.offset)(h),
                                n = getComputedStyle(h);
                            p = !0;
                            var o = null;
                            if ("vertical" === s) {
                                var i = parseFloat(n.height);
                                if (o = (i - (e.pageY - t.top)) / i, 0 === t.top || 0 === t.left) return
                            } else {
                                var r = parseFloat(n.width);
                                o = (e.pageX - t.left) / r
                            }
                            o = Math.max(0, o), o = Math.min(o, 1), g(o), a.setMuted(0 === o), a.setVolume(o), e.preventDefault(), e.stopPropagation()
                        },
                        b = function () {
                            a.muted ? (g(0), (0, k.removeClass)(d, a.options.classPrefix + "mute"), (0, k.addClass)(d, a.options.classPrefix + "unmute")) : (g(o.volume), (0, k.removeClass)(d, a.options.classPrefix + "unmute"), (0, k.addClass)(d, a.options.classPrefix + "mute"))
                        };
                    e.getElement(e.container).addEventListener("keydown", function (e) {
                        !!e.target.closest("." + a.options.classPrefix + "container") || "vertical" !== s || (m.style.display = "none")
                    }), d.addEventListener("mouseenter", function (e) {
                        e.target === d && (m.style.display = "block", f = !0, e.preventDefault(), e.stopPropagation())
                    }), d.addEventListener("focusin", function () {
                        m.style.display = "block", f = !0
                    }), d.addEventListener("focusout", function (e) {
                        e.relatedTarget && (!e.relatedTarget || e.relatedTarget.matches("." + a.options.classPrefix + "volume-slider")) || "vertical" !== s || (m.style.display = "none")
                    }), d.addEventListener("mouseleave", function () {
                        f = !1, c || "vertical" !== s || (m.style.display = "none")
                    }), d.addEventListener("focusout", function () {
                        f = !1
                    }), d.addEventListener("keydown", function (e) {
                        if (a.options.enableKeyboard && a.options.keyActions.length) {
                            var t = e.which || e.keyCode || 0,
                                n = o.volume;
                            switch (t) {
                                case 38:
                                    n = Math.min(n + .1, 1);
                                    break;
                                case 40:
                                    n = Math.max(0, n - .1);
                                    break;
                                default:
                                    return !0
                            }
                            c = !1, g(n), o.setVolume(n), e.preventDefault(), e.stopPropagation()
                        }
                    }), d.querySelector("button").addEventListener("click", function () {
                        o.setMuted(!o.muted);
                        var e = (0, C.createEvent)("volumechange", o);
                        o.dispatchEvent(e)
                    }), m.addEventListener("dragstart", function () {
                        return !1
                    }), m.addEventListener("mouseover", function () {
                        f = !0
                    }), m.addEventListener("focusin", function () {
                        m.style.display = "block", f = !0
                    }), m.addEventListener("focusout", function () {
                        f = !1, c || "vertical" !== s || (m.style.display = "none")
                    }), m.addEventListener("mousedown", function (e) {
                        E(e), a.globalBind("mousemove.vol", function (e) {
                            var t = e.target;
                            c && (t === m || t.closest("vertical" === s ? "." + a.options.classPrefix + "volume-slider" : "." + a.options.classPrefix + "horizontal-volume-slider")) && E(e)
                        }), a.globalBind("mouseup.vol", function () {
                            c = !1, f || "vertical" !== s || (m.style.display = "none")
                        }), c = !0, e.preventDefault(), e.stopPropagation()
                    }), o.addEventListener("volumechange", function (e) {
                        var t;
                        c || b(), t = Math.floor(100 * o.volume), m.setAttribute("aria-valuenow", t), m.setAttribute("aria-valuetext", t + "%")
                    });
                    var S = !1;
                    o.addEventListener("rendererready", function () {
                        p || setTimeout(function () {
                            S = !0, (0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0), e.options.startVolume = 0), o.setVolume(e.options.startVolume), a.setControlsSize()
                        }, 250)
                    }), o.addEventListener("loadedmetadata", function () {
                        setTimeout(function () {
                            p || S || ((0 === e.options.startVolume || o.originalNode.muted) && o.setMuted(!0), o.setVolume(e.options.startVolume), a.setControlsSize()), S = !1
                        }, 250)
                    }), (0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0), e.options.startVolume = 0, b()), a.getElement(a.container).addEventListener("controlsresize", function () {
                        b()
                    })
                }
            }
        })
    }, {
        18: 18,
        2: 2,
        27: 27,
        28: 28,
        29: 29,
        7: 7
    }],
    17: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.EN = {
            "mejs.plural-form": 1,
            "mejs.download-file": "Download File",
            "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
            "mejs.fullscreen": "Fullscreen",
            "mejs.play": "Play",
            "mejs.pause": "Pause",
            "mejs.time-slider": "Time Slider",
            "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
            "mejs.live-broadcast": "Live Broadcast",
            "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
            "mejs.unmute": "Unmute",
            "mejs.mute": "Mute",
            "mejs.volume-slider": "Volume Slider",
            "mejs.video-player": "Video Player",
            "mejs.audio-player": "Audio Player",
            "mejs.captions-subtitles": "Captions/Subtitles",
            "mejs.captions-chapters": "Chapters",
            "mejs.none": "None",
            "mejs.afrikaans": "Afrikaans",
            "mejs.albanian": "Albanian",
            "mejs.arabic": "Arabic",
            "mejs.belarusian": "Belarusian",
            "mejs.bulgarian": "Bulgarian",
            "mejs.catalan": "Catalan",
            "mejs.chinese": "Chinese",
            "mejs.chinese-simplified": "Chinese (Simplified)",
            "mejs.chinese-traditional": "Chinese (Traditional)",
            "mejs.croatian": "Croatian",
            "mejs.czech": "Czech",
            "mejs.danish": "Danish",
            "mejs.dutch": "Dutch",
            "mejs.english": "English",
            "mejs.estonian": "Estonian",
            "mejs.filipino": "Filipino",
            "mejs.finnish": "Finnish",
            "mejs.french": "French",
            "mejs.galician": "Galician",
            "mejs.german": "German",
            "mejs.greek": "Greek",
            "mejs.haitian-creole": "Haitian Creole",
            "mejs.hebrew": "Hebrew",
            "mejs.hindi": "Hindi",
            "mejs.hungarian": "Hungarian",
            "mejs.icelandic": "Icelandic",
            "mejs.indonesian": "Indonesian",
            "mejs.irish": "Irish",
            "mejs.italian": "Italian",
            "mejs.japanese": "Japanese",
            "mejs.korean": "Korean",
            "mejs.latvian": "Latvian",
            "mejs.lithuanian": "Lithuanian",
            "mejs.macedonian": "Macedonian",
            "mejs.malay": "Malay",
            "mejs.maltese": "Maltese",
            "mejs.norwegian": "Norwegian",
            "mejs.persian": "Persian",
            "mejs.polish": "Polish",
            "mejs.portuguese": "Portuguese",
            "mejs.romanian": "Romanian",
            "mejs.russian": "Russian",
            "mejs.serbian": "Serbian",
            "mejs.slovak": "Slovak",
            "mejs.slovenian": "Slovenian",
            "mejs.spanish": "Spanish",
            "mejs.swahili": "Swahili",
            "mejs.swedish": "Swedish",
            "mejs.tagalog": "Tagalog",
            "mejs.thai": "Thai",
            "mejs.turkish": "Turkish",
            "mejs.ukrainian": "Ukrainian",
            "mejs.vietnamese": "Vietnamese",
            "mejs.welsh": "Welsh",
            "mejs.yiddish": "Yiddish"
        }
    }, {}],
    18: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.config = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = function () {
                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (e, t, n) {
                    return t && o(e.prototype, t), n && o(e, n), e
                }
            }(),
            S = r(e(3)),
            w = r(e(2)),
            v = r(e(9)),
            y = r(e(8)),
            a = r(e(19)),
            g = r(e(7)),
            x = e(27),
            E = e(29),
            d = e(32),
            b = e(30),
            T = function (e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            }(e(28));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        v.default.mepIndex = 0, v.default.players = {};
        var s = n.config = {
            poster: "",
            showPosterWhenEnded: !1,
            showPosterWhenPaused: !1,
            defaultVideoWidth: 480,
            defaultVideoHeight: 270,
            videoWidth: -1,
            videoHeight: -1,
            defaultAudioWidth: 400,
            defaultAudioHeight: 40,
            defaultSeekBackwardInterval: function (e) {
                return .05 * e.getDuration()
            },
            defaultSeekForwardInterval: function (e) {
                return .05 * e.getDuration()
            },
            setDimensions: !0,
            audioWidth: -1,
            audioHeight: -1,
            loop: !1,
            autoRewind: !0,
            enableAutosize: !0,
            timeFormat: "",
            alwaysShowHours: !1,
            showTimecodeFrameCount: !1,
            framesPerSecond: 25,
            alwaysShowControls: !1,
            hideVideoControlsOnLoad: !1,
            hideVideoControlsOnPause: !1,
            clickToPlayPause: !0,
            controlsTimeoutDefault: 1500,
            controlsTimeoutMouseEnter: 2500,
            controlsTimeoutMouseLeave: 1e3,
            iPadUseNativeControls: !1,
            iPhoneUseNativeControls: !1,
            AndroidUseNativeControls: !1,
            features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
            useDefaultControls: !1,
            isVideo: !0,
            stretching: "auto",
            classPrefix: "mejs__",
            enableKeyboard: !0,
            pauseOtherPlayers: !0,
            secondsDecimalLength: 0,
            customError: null,
            keyActions: [{
                keys: [32, 179],
                action: function (e) {
                    x.IS_FIREFOX || (e.paused || e.ended ? e.play() : e.pause())
                }
            }]
        };
        v.default.MepDefaults = s;
        var l = function () {
            function r(e, t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r);
                var n = this,
                    o = "string" == typeof e ? w.default.getElementById(e) : e;
                if (!(n instanceof r)) return new r(o, t);
                if (n.node = n.media = o, n.node) {
                    if (n.media.player) return n.media.player;
                    if (n.hasFocus = !1, n.controlsAreVisible = !0, n.controlsEnabled = !0, n.controlsTimer = null, n.currentMediaTime = 0, n.proxy = null, void 0 === t) {
                        var i = n.node.getAttribute("data-mejsoptions");
                        t = i ? JSON.parse(i) : {}
                    }
                    return n.options = Object.assign({}, s, t), n.options.loop && !n.media.getAttribute("loop") ? (n.media.loop = !0, n.node.loop = !0) : n.media.loop && (n.options.loop = !0), n.options.timeFormat || (n.options.timeFormat = "mm:ss", n.options.alwaysShowHours && (n.options.timeFormat = "hh:mm:ss"), n.options.showTimecodeFrameCount && (n.options.timeFormat += ":ff")), (0, d.calculateTimeFormat)(0, n.options, n.options.framesPerSecond || 25), n.id = "mep_" + v.default.mepIndex++, (v.default.players[n.id] = n).init(), n
                }
            }
            return o(r, [{
                key: "getElement",
                value: function (e) {
                    return e
                }
            }, {
                key: "init",
                value: function () {
                    var n = this,
                        e = Object.assign({}, n.options, {
                            success: function (e, t) {
                                n._meReady(e, t)
                            },
                            error: function (e) {
                                n._handleError(e)
                            }
                        }),
                        t = n.node.tagName.toLowerCase();
                    if (n.isDynamic = "audio" !== t && "video" !== t && "iframe" !== t, n.isVideo = n.isDynamic ? n.options.isVideo : "audio" !== t && n.options.isVideo, n.mediaFiles = null, n.trackFiles = null, x.IS_IPAD && n.options.iPadUseNativeControls || x.IS_IPHONE && n.options.iPhoneUseNativeControls) n.node.setAttribute("controls", !0), x.IS_IPAD && n.node.getAttribute("autoplay") && n.play();
                    else if (!n.isVideo && (n.isVideo || !n.options.features.length && !n.options.useDefaultControls) || x.IS_ANDROID && n.options.AndroidUseNativeControls) n.isVideo || n.options.features.length || n.options.useDefaultControls || (n.node.style.display = "none");
                    else {
                        n.node.removeAttribute("controls");
                        var o = n.isVideo ? g.default.t("mejs.video-player") : g.default.t("mejs.audio-player"),
                            i = w.default.createElement("span");
                        if (i.className = n.options.classPrefix + "offscreen", i.innerText = o, n.media.parentNode.insertBefore(i, n.media), n.container = w.default.createElement("div"), n.getElement(n.container).id = n.id, n.getElement(n.container).className = n.options.classPrefix + "container " + n.options.classPrefix + "container-keyboard-inactive " + n.media.className, n.getElement(n.container).tabIndex = 0, n.getElement(n.container).setAttribute("role", "application"), n.getElement(n.container).setAttribute("aria-label", o), n.getElement(n.container).innerHTML = '<div class="' + n.options.classPrefix + 'inner"><div class="' + n.options.classPrefix + 'mediaelement"></div><div class="' + n.options.classPrefix + 'layers"></div><div class="' + n.options.classPrefix + 'controls"></div></div>', n.getElement(n.container).addEventListener("focus", function (e) {
                                if (!n.controlsAreVisible && !n.hasFocus && n.controlsEnabled) {
                                    n.showControls(!0);
                                    var t = (0, E.isNodeAfter)(e.relatedTarget, n.getElement(n.container)) ? "." + n.options.classPrefix + "controls ." + n.options.classPrefix + "button:last-child > button" : "." + n.options.classPrefix + "playpause-button > button";
                                    n.getElement(n.container).querySelector(t).focus()
                                }
                            }), n.node.parentNode.insertBefore(n.getElement(n.container), n.node), n.options.features.length || n.options.useDefaultControls || (n.getElement(n.container).style.background = "transparent", n.getElement(n.container).querySelector("." + n.options.classPrefix + "controls").style.display = "none"), n.isVideo && "fill" === n.options.stretching && !T.hasClass(n.getElement(n.container).parentNode, n.options.classPrefix + "fill-container")) {
                            n.outerContainer = n.media.parentNode;
                            var r = w.default.createElement("div");
                            r.className = n.options.classPrefix + "fill-container", n.getElement(n.container).parentNode.insertBefore(r, n.getElement(n.container)), r.appendChild(n.getElement(n.container))
                        }
                        if (x.IS_ANDROID && T.addClass(n.getElement(n.container), n.options.classPrefix + "android"), x.IS_IOS && T.addClass(n.getElement(n.container), n.options.classPrefix + "ios"), x.IS_IPAD && T.addClass(n.getElement(n.container), n.options.classPrefix + "ipad"), x.IS_IPHONE && T.addClass(n.getElement(n.container), n.options.classPrefix + "iphone"), T.addClass(n.getElement(n.container), n.isVideo ? n.options.classPrefix + "video" : n.options.classPrefix + "audio"), x.IS_SAFARI && !x.IS_IOS) {
                            T.addClass(n.getElement(n.container), n.options.classPrefix + "hide-cues");
                            for (var a = n.node.cloneNode(), s = n.node.children, l = [], d = [], u = 0, c = s.length; u < c; u++) {
                                var f = s[u];
                                ! function () {
                                    switch (f.tagName.toLowerCase()) {
                                        case "source":
                                            var t = {};
                                            Array.prototype.slice.call(f.attributes).forEach(function (e) {
                                                t[e.name] = e.value
                                            }), t.type = (0, b.formatType)(t.src, t.type), l.push(t);
                                            break;
                                        case "track":
                                            f.mode = "hidden", d.push(f);
                                            break;
                                        default:
                                            a.appendChild(f.cloneNode(!0))
                                    }
                                }()
                            }
                            n.node.remove(), n.node = n.media = a, l.length && (n.mediaFiles = l), d.length && (n.trackFiles = d)
                        }
                        n.getElement(n.container).querySelector("." + n.options.classPrefix + "mediaelement").appendChild(n.node), (n.media.player = n).controls = n.getElement(n.container).querySelector("." + n.options.classPrefix + "controls"), n.layers = n.getElement(n.container).querySelector("." + n.options.classPrefix + "layers");
                        var p = n.isVideo ? "video" : "audio",
                            m = p.substring(0, 1).toUpperCase() + p.substring(1);
                        0 < n.options[p + "Width"] || -1 < n.options[p + "Width"].toString().indexOf("%") ? n.width = n.options[p + "Width"] : "" !== n.node.style.width && null !== n.node.style.width ? n.width = n.node.style.width : n.node.getAttribute("width") ? n.width = n.node.getAttribute("width") : n.width = n.options["default" + m + "Width"], 0 < n.options[p + "Height"] || -1 < n.options[p + "Height"].toString().indexOf("%") ? n.height = n.options[p + "Height"] : "" !== n.node.style.height && null !== n.node.style.height ? n.height = n.node.style.height : n.node.getAttribute("height") ? n.height = n.node.getAttribute("height") : n.height = n.options["default" + m + "Height"], n.initialAspectRatio = n.height >= n.width ? n.width / n.height : n.height / n.width, n.setPlayerSize(n.width, n.height), e.pluginWidth = n.width, e.pluginHeight = n.height
                    }
                    if (v.default.MepDefaults = e, new y.default(n.media, e, n.mediaFiles), void 0 !== n.getElement(n.container) && n.options.features.length && n.controlsAreVisible && !n.options.hideVideoControlsOnLoad) {
                        var h = (0, E.createEvent)("controlsshown", n.getElement(n.container));
                        n.getElement(n.container).dispatchEvent(h)
                    }
                }
            }, {
                key: "showControls",
                value: function (e) {
                    var i = this;
                    if (e = void 0 === e || e, !i.controlsAreVisible && i.isVideo) {
                        if (e) ! function () {
                            T.fadeIn(i.getElement(i.controls), 200, function () {
                                T.removeClass(i.getElement(i.controls), i.options.classPrefix + "offscreen");
                                var e = (0, E.createEvent)("controlsshown", i.getElement(i.container));
                                i.getElement(i.container).dispatchEvent(e)
                            });
                            for (var n = i.getElement(i.container).querySelectorAll("." + i.options.classPrefix + "control"), e = function (e, t) {
                                    T.fadeIn(n[e], 200, function () {
                                        T.removeClass(n[e], i.options.classPrefix + "offscreen")
                                    })
                                }, t = 0, o = n.length; t < o; t++) e(t)
                        }();
                        else {
                            T.removeClass(i.getElement(i.controls), i.options.classPrefix + "offscreen"), i.getElement(i.controls).style.display = "", i.getElement(i.controls).style.opacity = 1;
                            for (var t = i.getElement(i.container).querySelectorAll("." + i.options.classPrefix + "control"), n = 0, o = t.length; n < o; n++) T.removeClass(t[n], i.options.classPrefix + "offscreen"), t[n].style.display = "";
                            var r = (0, E.createEvent)("controlsshown", i.getElement(i.container));
                            i.getElement(i.container).dispatchEvent(r)
                        }
                        i.controlsAreVisible = !0, i.setControlsSize()
                    }
                }
            }, {
                key: "hideControls",
                value: function (e, t) {
                    var i = this;
                    if (e = void 0 === e || e, !0 === t || !(!i.controlsAreVisible || i.options.alwaysShowControls || i.paused && 4 === i.readyState && (!i.options.hideVideoControlsOnLoad && i.currentTime <= 0 || !i.options.hideVideoControlsOnPause && 0 < i.currentTime) || i.isVideo && !i.options.hideVideoControlsOnLoad && !i.readyState || i.ended)) {
                        if (e) ! function () {
                            T.fadeOut(i.getElement(i.controls), 200, function () {
                                T.addClass(i.getElement(i.controls), i.options.classPrefix + "offscreen"), i.getElement(i.controls).style.display = "";
                                var e = (0, E.createEvent)("controlshidden", i.getElement(i.container));
                                i.getElement(i.container).dispatchEvent(e)
                            });
                            for (var n = i.getElement(i.container).querySelectorAll("." + i.options.classPrefix + "control"), e = function (e, t) {
                                    T.fadeOut(n[e], 200, function () {
                                        T.addClass(n[e], i.options.classPrefix + "offscreen"), n[e].style.display = ""
                                    })
                                }, t = 0, o = n.length; t < o; t++) e(t)
                        }();
                        else {
                            T.addClass(i.getElement(i.controls), i.options.classPrefix + "offscreen"), i.getElement(i.controls).style.display = "", i.getElement(i.controls).style.opacity = 0;
                            for (var n = i.getElement(i.container).querySelectorAll("." + i.options.classPrefix + "control"), o = 0, r = n.length; o < r; o++) T.addClass(n[o], i.options.classPrefix + "offscreen"), n[o].style.display = "";
                            var a = (0, E.createEvent)("controlshidden", i.getElement(i.container));
                            i.getElement(i.container).dispatchEvent(a)
                        }
                        i.controlsAreVisible = !1
                    }
                }
            }, {
                key: "startControlsTimer",
                value: function (e) {
                    var t = this;
                    e = void 0 !== e ? e : t.options.controlsTimeoutDefault, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function () {
                        t.hideControls(), t.killControlsTimer("hide")
                    }, e)
                }
            }, {
                key: "killControlsTimer",
                value: function () {
                    null !== this.controlsTimer && (clearTimeout(this.controlsTimer), delete this.controlsTimer, this.controlsTimer = null)
                }
            }, {
                key: "disableControls",
                value: function () {
                    this.killControlsTimer(), this.controlsEnabled = !1, this.hideControls(!1, !0)
                }
            }, {
                key: "enableControls",
                value: function () {
                    this.controlsEnabled = !0, this.showControls(!1)
                }
            }, {
                key: "_setDefaultPlayer",
                value: function () {
                    var e = this;
                    e.proxy && e.proxy.pause(), e.proxy = new a.default(e), e.media.addEventListener("loadedmetadata", function () {
                        0 < e.getCurrentTime() && 0 < e.currentMediaTime && (e.setCurrentTime(e.currentMediaTime), x.IS_IOS || x.IS_ANDROID || e.play())
                    })
                }
            }, {
                key: "_meReady",
                value: function (e, t) {
                    var n = this,
                        o = t.getAttribute("autoplay"),
                        i = !(null == o || "false" === o),
                        r = null !== e.rendererName && /(native|html5)/i.test(n.media.rendererName);
                    if (n.getElement(n.controls) && n.enableControls(), n.getElement(n.container) && n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play") && (n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play").style.display = ""), !n.created) {
                        if (n.created = !0, n.media = e, n.domNode = t, !(x.IS_ANDROID && n.options.AndroidUseNativeControls || x.IS_IPAD && n.options.iPadUseNativeControls || x.IS_IPHONE && n.options.iPhoneUseNativeControls)) {
                            if (!n.isVideo && !n.options.features.length && !n.options.useDefaultControls) return i && r && n.play(), void(n.options.success && ("string" == typeof n.options.success ? S.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n)));
                            if (n.featurePosition = {}, n._setDefaultPlayer(), n.buildposter(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.buildkeyboard(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.buildoverlays(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.options.useDefaultControls) {
                                var a = ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"];
                                n.options.features = a.concat(n.options.features.filter(function (e) {
                                    return -1 === a.indexOf(e)
                                }))
                            }
                            n.buildfeatures(n, n.getElement(n.controls), n.getElement(n.layers), n.media);
                            var s = (0, E.createEvent)("controlsready", n.getElement(n.container));
                            n.getElement(n.container).dispatchEvent(s), n.setPlayerSize(n.width, n.height), n.setControlsSize(), n.isVideo && (n.clickToPlayPauseCallback = function () {
                                if (n.options.clickToPlayPause) {
                                    var e = n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-button"),
                                        t = e.getAttribute("aria-pressed");
                                    n.paused && t ? n.pause() : n.paused ? n.play() : n.pause(), e.setAttribute("aria-pressed", !t), n.getElement(n.container).focus()
                                }
                            }, n.createIframeLayer(), n.media.addEventListener("click", n.clickToPlayPauseCallback), !x.IS_ANDROID && !x.IS_IOS || n.options.alwaysShowControls ? (n.getElement(n.container).addEventListener("mouseenter", function () {
                                n.controlsEnabled && (n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter)))
                            }), n.getElement(n.container).addEventListener("mousemove", function () {
                                n.controlsEnabled && (n.controlsAreVisible || n.showControls(), n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
                            }), n.getElement(n.container).addEventListener("mouseleave", function () {
                                n.controlsEnabled && (n.paused || n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
                            })) : n.node.addEventListener("touchstart", function () {
                                n.controlsAreVisible ? n.hideControls(!1) : n.controlsEnabled && n.showControls(!1)
                            }, !!x.SUPPORT_PASSIVE_EVENT && {
                                passive: !0
                            }), n.options.hideVideoControlsOnLoad && n.hideControls(!1), n.options.enableAutosize && n.media.addEventListener("loadedmetadata", function (e) {
                                var t = void 0 !== e ? e.detail.target || e.target : n.media;
                                n.options.videoHeight <= 0 && !n.domNode.getAttribute("height") && !n.domNode.style.height && null !== t && !isNaN(t.videoHeight) && (n.setPlayerSize(t.videoWidth, t.videoHeight), n.setControlsSize(), n.media.setSize(t.videoWidth, t.videoHeight))
                            })), n.media.addEventListener("play", function () {
                                for (var e in n.hasFocus = !0, v.default.players)
                                    if (v.default.players.hasOwnProperty(e)) {
                                        var t = v.default.players[e];
                                        t.id === n.id || !n.options.pauseOtherPlayers || t.paused || t.ended || (t.pause(), t.hasFocus = !1)
                                    } x.IS_ANDROID || x.IS_IOS || n.options.alwaysShowControls || !n.isVideo || n.hideControls()
                            }), n.media.addEventListener("ended", function () {
                                if (n.options.autoRewind) try {
                                    n.setCurrentTime(0), setTimeout(function () {
                                        var e = n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-loading");
                                        e && e.parentNode && (e.parentNode.style.display = "none")
                                    }, 20)
                                } catch (e) {}
                                "function" == typeof n.media.renderer.stop ? n.media.renderer.stop() : n.pause(), n.setProgressRail && n.setProgressRail(), n.setCurrentRail && n.setCurrentRail(), n.options.loop ? n.play() : !n.options.alwaysShowControls && n.controlsEnabled && n.showControls()
                            }), n.media.addEventListener("loadedmetadata", function () {
                                (0, d.calculateTimeFormat)(n.getDuration(), n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.isFullScreen || (n.setPlayerSize(n.width, n.height), n.setControlsSize())
                            });
                            var l = null;
                            n.media.addEventListener("timeupdate", function () {
                                isNaN(n.getDuration()) || l === n.getDuration() || (l = n.getDuration(), (0, d.calculateTimeFormat)(l, n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.setControlsSize())
                            }), n.getElement(n.container).addEventListener("click", function (e) {
                                T.addClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive")
                            }), n.getElement(n.container).addEventListener("focusin", function (e) {
                                T.removeClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive"), !n.isVideo || x.IS_ANDROID || x.IS_IOS || !n.controlsEnabled || n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
                            }), n.getElement(n.container).addEventListener("focusout", function (e) {
                                setTimeout(function () {
                                    e.relatedTarget && n.keyboardAction && !e.relatedTarget.closest("." + n.options.classPrefix + "container") && (n.keyboardAction = !1, !n.isVideo || n.options.alwaysShowControls || n.paused || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
                                }, 0)
                            }), setTimeout(function () {
                                n.setPlayerSize(n.width, n.height), n.setControlsSize()
                            }, 0), n.globalResizeCallback = function () {
                                n.isFullScreen || x.HAS_TRUE_NATIVE_FULLSCREEN && w.default.webkitIsFullScreen || n.setPlayerSize(n.width, n.height), n.setControlsSize()
                            }, n.globalBind("resize", n.globalResizeCallback)
                        }
                        i && r && n.play(), n.options.success && ("string" == typeof n.options.success ? S.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n))
                    }
                }
            }, {
                key: "_handleError",
                value: function (e, t, n) {
                    var o = this,
                        i = o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-play");
                    i && (i.style.display = "none"), o.options.error && o.options.error(e, t, n), o.getElement(o.container).querySelector("." + o.options.classPrefix + "cannotplay") && o.getElement(o.container).querySelector("." + o.options.classPrefix + "cannotplay").remove();
                    var r = w.default.createElement("div");
                    r.className = o.options.classPrefix + "cannotplay", r.style.width = "100%", r.style.height = "100%";
                    var a = "function" == typeof o.options.customError ? o.options.customError(o.media, o.media.originalNode) : o.options.customError,
                        s = "";
                    if (!a) {
                        var l = o.media.originalNode.getAttribute("poster");
                        if (l && (s = '<img src="' + l + '" alt="' + v.default.i18n.t("mejs.download-file") + '">'), e.message && (a = "<p>" + e.message + "</p>"), e.urls)
                            for (var d = 0, u = e.urls.length; d < u; d++) {
                                var c = e.urls[d];
                                a += '<a href="' + c.src + '" data-type="' + c.type + '"><span>' + v.default.i18n.t("mejs.download-file") + ": " + c.src + "</span></a>"
                            }
                    }
                    a && o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error") && (r.innerHTML = a, o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error").innerHTML = "" + s + r.outerHTML, o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error").parentNode.style.display = "block"), o.controlsEnabled && o.disableControls()
                }
            }, {
                key: "setPlayerSize",
                value: function (e, t) {
                    var n = this;
                    if (!n.options.setDimensions) return !1;
                    switch (void 0 !== e && (n.width = e), void 0 !== t && (n.height = t), n.options.stretching) {
                        case "fill":
                            n.isVideo ? n.setFillMode() : n.setDimensions(n.width, n.height);
                            break;
                        case "responsive":
                            n.setResponsiveMode();
                            break;
                        case "none":
                            n.setDimensions(n.width, n.height);
                            break;
                        default:
                            !0 === n.hasFluidMode() ? n.setResponsiveMode() : n.setDimensions(n.width, n.height)
                    }
                }
            }, {
                key: "hasFluidMode",
                value: function () {
                    var e = this;
                    return -1 !== e.height.toString().indexOf("%") || e.node && e.node.style.maxWidth && "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width || e.node && e.node.currentStyle && "100%" === e.node.currentStyle.maxWidth
                }
            }, {
                key: "setResponsiveMode",
                value: function () {
                    var e, o = this,
                        t = function () {
                            for (var t = void 0, n = o.getElement(o.container); n;) {
                                try {
                                    if (x.IS_FIREFOX && "html" === n.tagName.toLowerCase() && S.default.self !== S.default.top && null !== S.default.frameElement) return S.default.frameElement;
                                    t = n.parentElement
                                } catch (e) {
                                    t = n.parentElement
                                }
                                if (t && T.visible(t)) return t;
                                n = t
                            }
                            return null
                        }(),
                        n = t ? getComputedStyle(t, null) : getComputedStyle(w.default.body, null),
                        i = o.isVideo ? o.node.videoWidth && 0 < o.node.videoWidth ? o.node.videoWidth : o.node.getAttribute("width") ? o.node.getAttribute("width") : o.options.defaultVideoWidth : o.options.defaultAudioWidth,
                        r = o.isVideo ? o.node.videoHeight && 0 < o.node.videoHeight ? o.node.videoHeight : o.node.getAttribute("height") ? o.node.getAttribute("height") : o.options.defaultVideoHeight : o.options.defaultAudioHeight,
                        a = (e = 1, o.isVideo && (e = o.node.videoWidth && 0 < o.node.videoWidth && o.node.videoHeight && 0 < o.node.videoHeight ? o.height >= o.width ? o.node.videoWidth / o.node.videoHeight : o.node.videoHeight / o.node.videoWidth : o.initialAspectRatio, (isNaN(e) || e < .01 || 100 < e) && (e = 1)), e),
                        s = parseFloat(n.height),
                        l = void 0,
                        d = parseFloat(n.width);
                    if (l = o.isVideo ? "100%" === o.height ? parseFloat(d * r / i, 10) : o.height >= o.width ? parseFloat(d / a, 10) : parseFloat(d * a, 10) : r, isNaN(l) && (l = s), 0 < o.getElement(o.container).parentNode.length && "body" === o.getElement(o.container).parentNode.tagName.toLowerCase() && (d = S.default.innerWidth || w.default.documentElement.clientWidth || w.default.body.clientWidth, l = S.default.innerHeight || w.default.documentElement.clientHeight || w.default.body.clientHeight), l && d) {
                        o.getElement(o.container).style.width = d + "px", o.getElement(o.container).style.height = l + "px", o.node.style.width = "100%", o.node.style.height = "100%", o.isVideo && o.media.setSize && o.media.setSize(d, l);
                        for (var u = o.getElement(o.layers).children, c = 0, f = u.length; c < f; c++) u[c].style.width = "100%", u[c].style.height = "100%"
                    }
                }
            }, {
                key: "setFillMode",
                value: function () {
                    var e = this,
                        t = S.default.self !== S.default.top && null !== S.default.frameElement,
                        n = function () {
                            for (var t = void 0, n = e.getElement(e.container); n;) {
                                try {
                                    if (x.IS_FIREFOX && "html" === n.tagName.toLowerCase() && S.default.self !== S.default.top && null !== S.default.frameElement) return S.default.frameElement;
                                    t = n.parentElement
                                } catch (e) {
                                    t = n.parentElement
                                }
                                if (t && T.visible(t)) return t;
                                n = t
                            }
                            return null
                        }(),
                        o = n ? getComputedStyle(n, null) : getComputedStyle(w.default.body, null);
                    "none" !== e.node.style.height && e.node.style.height !== e.height && (e.node.style.height = "auto"), "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width && (e.node.style.maxWidth = "none"), "none" !== e.node.style.maxHeight && e.node.style.maxHeight !== e.height && (e.node.style.maxHeight = "none"), e.node.currentStyle && ("100%" === e.node.currentStyle.height && (e.node.currentStyle.height = "auto"), "100%" === e.node.currentStyle.maxWidth && (e.node.currentStyle.maxWidth = "none"), "100%" === e.node.currentStyle.maxHeight && (e.node.currentStyle.maxHeight = "none")), t || parseFloat(o.width) || (n.style.width = e.media.offsetWidth + "px"), t || parseFloat(o.height) || (n.style.height = e.media.offsetHeight + "px"), o = getComputedStyle(n);
                    var i = parseFloat(o.width),
                        r = parseFloat(o.height);
                    e.setDimensions("100%", "100%");
                    var a = e.getElement(e.container).querySelector("." + e.options.classPrefix + "poster>img");
                    a && (a.style.display = "");
                    for (var s = e.getElement(e.container).querySelectorAll("object, embed, iframe, video"), l = e.height, d = e.width, u = i, c = l * i / d, f = d * r / l, p = r, m = i < f == !1, h = m ? Math.floor(u) : Math.floor(f), v = m ? Math.floor(c) : Math.floor(p), y = m ? i + "px" : h + "px", g = m ? v + "px" : r + "px", E = 0, b = s.length; E < b; E++) s[E].style.height = g, s[E].style.width = y, e.media.setSize && e.media.setSize(y, g), s[E].style.marginLeft = Math.floor((i - h) / 2) + "px", s[E].style.marginTop = 0
                }
            }, {
                key: "setDimensions",
                value: function (e, t) {
                    var n = this;
                    e = (0, E.isString)(e) && -1 < e.indexOf("%") ? e : parseFloat(e) + "px", t = (0, E.isString)(t) && -1 < t.indexOf("%") ? t : parseFloat(t) + "px", n.getElement(n.container).style.width = e, n.getElement(n.container).style.height = t;
                    for (var o = n.getElement(n.layers).children, i = 0, r = o.length; i < r; i++) o[i].style.width = e, o[i].style.height = t
                }
            }, {
                key: "setControlsSize",
                value: function () {
                    var t = this;
                    if (T.visible(t.getElement(t.container)))
                        if (t.rail && T.visible(t.rail)) {
                            for (var e = t.total ? getComputedStyle(t.total, null) : null, n = e ? parseFloat(e.marginLeft) + parseFloat(e.marginRight) : 0, o = getComputedStyle(t.rail), i = parseFloat(o.marginLeft) + parseFloat(o.marginRight), r = 0, a = T.siblings(t.rail, function (e) {
                                    return e !== t.rail
                                }), s = a.length, l = 0; l < s; l++) r += a[l].offsetWidth;
                            r += n + (0 === n ? 2 * i : i) + 1, t.getElement(t.container).style.minWidth = r + "px";
                            var d = (0, E.createEvent)("controlsresize", t.getElement(t.container));
                            t.getElement(t.container).dispatchEvent(d)
                        } else {
                            for (var u = t.getElement(t.controls).children, c = 0, f = 0, p = u.length; f < p; f++) c += u[f].offsetWidth;
                            t.getElement(t.container).style.minWidth = c + "px"
                        }
                }
            }, {
                key: "addControlElement",
                value: function (e, t) {
                    var n = this;
                    if (void 0 !== n.featurePosition[t]) {
                        var o = n.getElement(n.controls).children[n.featurePosition[t] - 1];
                        o.parentNode.insertBefore(e, o.nextSibling)
                    } else {
                        n.getElement(n.controls).appendChild(e);
                        for (var i = n.getElement(n.controls).children, r = 0, a = i.length; r < a; r++)
                            if (e === i[r]) {
                                n.featurePosition[t] = r;
                                break
                            }
                    }
                }
            }, {
                key: "createIframeLayer",
                value: function () {
                    var t = this;
                    if (t.isVideo && null !== t.media.rendererName && -1 < t.media.rendererName.indexOf("iframe") && !w.default.getElementById(t.media.id + "-iframe-overlay")) {
                        var e = w.default.createElement("div"),
                            n = w.default.getElementById(t.media.id + "_" + t.media.rendererName);
                        e.id = t.media.id + "-iframe-overlay", e.className = t.options.classPrefix + "iframe-overlay", e.addEventListener("click", function (e) {
                            t.options.clickToPlayPause && (t.paused ? t.play() : t.pause(), e.preventDefault(), e.stopPropagation())
                        }), n.parentNode.insertBefore(e, n)
                    }
                }
            }, {
                key: "resetSize",
                value: function () {
                    var e = this;
                    setTimeout(function () {
                        e.setPlayerSize(e.width, e.height), e.setControlsSize()
                    }, 50)
                }
            }, {
                key: "setPoster",
                value: function (e) {
                    var t = this;
                    if (t.getElement(t.container)) {
                        var n = t.getElement(t.container).querySelector("." + t.options.classPrefix + "poster");
                        n || ((n = w.default.createElement("div")).className = t.options.classPrefix + "poster " + t.options.classPrefix + "layer", t.getElement(t.layers).appendChild(n));
                        var o = n.querySelector("img");
                        !o && e && ((o = w.default.createElement("img")).className = t.options.classPrefix + "poster-img", o.width = "100%", o.height = "100%", n.style.display = "", n.appendChild(o)), e ? (o.setAttribute("src", e), n.style.backgroundImage = 'url("' + e + '")', n.style.display = "") : o ? (n.style.backgroundImage = "none", n.style.display = "none", o.remove()) : n.style.display = "none"
                    } else(x.IS_IPAD && t.options.iPadUseNativeControls || x.IS_IPHONE && t.options.iPhoneUseNativeControls || x.IS_ANDROID && t.options.AndroidUseNativeControls) && (t.media.originalNode.poster = e)
                }
            }, {
                key: "changeSkin",
                value: function (e) {
                    var t = this;
                    t.getElement(t.container).className = t.options.classPrefix + "container " + e, t.setPlayerSize(t.width, t.height), t.setControlsSize()
                }
            }, {
                key: "globalBind",
                value: function (e, n) {
                    var o = this.node ? this.node.ownerDocument : w.default;
                    if ((e = (0, E.splitEvents)(e, this.id)).d)
                        for (var t = e.d.split(" "), i = 0, r = t.length; i < r; i++) t[i].split(".").reduce(function (e, t) {
                            return o.addEventListener(t, n, !1), t
                        }, "");
                    if (e.w)
                        for (var a = e.w.split(" "), s = 0, l = a.length; s < l; s++) a[s].split(".").reduce(function (e, t) {
                            return S.default.addEventListener(t, n, !1), t
                        }, "")
                }
            }, {
                key: "globalUnbind",
                value: function (e, n) {
                    var o = this.node ? this.node.ownerDocument : w.default;
                    if ((e = (0, E.splitEvents)(e, this.id)).d)
                        for (var t = e.d.split(" "), i = 0, r = t.length; i < r; i++) t[i].split(".").reduce(function (e, t) {
                            return o.removeEventListener(t, n, !1), t
                        }, "");
                    if (e.w)
                        for (var a = e.w.split(" "), s = 0, l = a.length; s < l; s++) a[s].split(".").reduce(function (e, t) {
                            return S.default.removeEventListener(t, n, !1), t
                        }, "")
                }
            }, {
                key: "buildfeatures",
                value: function (e, t, n, o) {
                    for (var i = 0, r = this.options.features.length; i < r; i++) {
                        var a = this.options.features[i];
                        if (this["build" + a]) try {
                            this["build" + a](e, t, n, o)
                        } catch (e) {
                            console.error("error building " + a, e)
                        }
                    }
                }
            }, {
                key: "buildposter",
                value: function (e, t, n, o) {
                    var i = this,
                        r = w.default.createElement("div");
                    r.className = i.options.classPrefix + "poster " + i.options.classPrefix + "layer", n.appendChild(r);
                    var a = o.originalNode.getAttribute("poster");
                    "" !== e.options.poster && (a && x.IS_IOS && o.originalNode.removeAttribute("poster"), a = e.options.poster), a ? i.setPoster(a) : null !== i.media.renderer && "function" == typeof i.media.renderer.getPosterUrl ? i.setPoster(i.media.renderer.getPosterUrl()) : r.style.display = "none", o.addEventListener("play", function () {
                        r.style.display = "none"
                    }), o.addEventListener("playing", function () {
                        r.style.display = "none"
                    }), e.options.showPosterWhenEnded && e.options.autoRewind && o.addEventListener("ended", function () {
                        r.style.display = ""
                    }), o.addEventListener("error", function () {
                        r.style.display = "none"
                    }), e.options.showPosterWhenPaused && o.addEventListener("pause", function () {
                        e.ended || (r.style.display = "")
                    })
                }
            }, {
                key: "buildoverlays",
                value: function (t, e, n, o) {
                    if (t.isVideo) {
                        var i = this,
                            r = w.default.createElement("div"),
                            a = w.default.createElement("div"),
                            s = w.default.createElement("div");
                        r.style.display = "none", r.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer", r.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-loading"><span class="' + i.options.classPrefix + 'overlay-loading-bg-img"></span></div>', n.appendChild(r), a.style.display = "none", a.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer", a.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-error"></div>', n.appendChild(a), s.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer " + i.options.classPrefix + "overlay-play", s.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-button" role="button" tabindex="0" aria-label="' + g.default.t("mejs.play") + '" aria-pressed="false"></div>', s.addEventListener("click", function () {
                            if (i.options.clickToPlayPause) {
                                var e = i.getElement(i.container).querySelector("." + i.options.classPrefix + "overlay-button"),
                                    t = e.getAttribute("aria-pressed");
                                i.paused ? i.play() : i.pause(), e.setAttribute("aria-pressed", !!t), i.getElement(i.container).focus()
                            }
                        }), s.addEventListener("keydown", function (e) {
                            var t = e.keyCode || e.which || 0;
                            if (13 === t || x.IS_FIREFOX && 32 === t) {
                                var n = (0, E.createEvent)("click", s);
                                return s.dispatchEvent(n), !1
                            }
                        }), n.appendChild(s), null !== i.media.rendererName && (/(youtube|facebook)/i.test(i.media.rendererName) && !(i.media.originalNode.getAttribute("poster") || t.options.poster || "function" == typeof i.media.renderer.getPosterUrl && i.media.renderer.getPosterUrl()) || x.IS_STOCK_ANDROID || i.media.originalNode.getAttribute("autoplay")) && (s.style.display = "none");
                        var l = !1;
                        o.addEventListener("play", function () {
                            s.style.display = "none", r.style.display = "none", a.style.display = "none", l = !1
                        }), o.addEventListener("playing", function () {
                            s.style.display = "none", r.style.display = "none", a.style.display = "none", l = !1
                        }), o.addEventListener("seeking", function () {
                            s.style.display = "none", r.style.display = "", l = !1
                        }), o.addEventListener("seeked", function () {
                            s.style.display = i.paused && !x.IS_STOCK_ANDROID ? "" : "none", r.style.display = "none", l = !1
                        }), o.addEventListener("pause", function () {
                            r.style.display = "none", x.IS_STOCK_ANDROID || l || (s.style.display = ""), l = !1
                        }), o.addEventListener("waiting", function () {
                            r.style.display = "", l = !1
                        }), o.addEventListener("loadeddata", function () {
                            r.style.display = "", x.IS_ANDROID && (o.canplayTimeout = setTimeout(function () {
                                if (w.default.createEvent) {
                                    var e = w.default.createEvent("HTMLEvents");
                                    return e.initEvent("canplay", !0, !0), o.dispatchEvent(e)
                                }
                            }, 300)), l = !1
                        }), o.addEventListener("canplay", function () {
                            r.style.display = "none", clearTimeout(o.canplayTimeout), l = !1
                        }), o.addEventListener("error", function (e) {
                            i._handleError(e, i.media, i.node), r.style.display = "none", s.style.display = "none", l = !0
                        }), o.addEventListener("loadedmetadata", function () {
                            i.controlsEnabled || i.enableControls()
                        }), o.addEventListener("keydown", function (e) {
                            i.onkeydown(t, o, e), l = !1
                        })
                    }
                }
            }, {
                key: "buildkeyboard",
                value: function (o, e, t, i) {
                    var r = this;
                    r.getElement(r.container).addEventListener("keydown", function () {
                        r.keyboardAction = !0
                    }), r.globalKeydownCallback = function (e) {
                        var t = w.default.activeElement.closest("." + r.options.classPrefix + "container"),
                            n = r.media.closest("." + r.options.classPrefix + "container");
                        return r.hasFocus = !(!t || !n || t.id !== n.id), r.onkeydown(o, i, e)
                    }, r.globalClickCallback = function (e) {
                        r.hasFocus = !!e.target.closest("." + r.options.classPrefix + "container")
                    }, r.globalBind("keydown", r.globalKeydownCallback), r.globalBind("click", r.globalClickCallback)
                }
            }, {
                key: "onkeydown",
                value: function (e, t, n) {
                    if (e.hasFocus && e.options.enableKeyboard)
                        for (var o = 0, i = e.options.keyActions.length; o < i; o++)
                            for (var r = e.options.keyActions[o], a = 0, s = r.keys.length; a < s; a++)
                                if (n.keyCode === r.keys[a]) return r.action(e, t, n.keyCode, n), n.preventDefault(), void n.stopPropagation();
                    return !0
                }
            }, {
                key: "play",
                value: function () {
                    this.proxy.play()
                }
            }, {
                key: "pause",
                value: function () {
                    this.proxy.pause()
                }
            }, {
                key: "load",
                value: function () {
                    this.proxy.load()
                }
            }, {
                key: "setCurrentTime",
                value: function (e) {
                    this.proxy.setCurrentTime(e)
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.proxy.currentTime
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.proxy.duration
                }
            }, {
                key: "setVolume",
                value: function (e) {
                    this.proxy.volume = e
                }
            }, {
                key: "getVolume",
                value: function () {
                    return this.proxy.getVolume()
                }
            }, {
                key: "setMuted",
                value: function (e) {
                    this.proxy.setMuted(e)
                }
            }, {
                key: "setSrc",
                value: function (e) {
                    this.controlsEnabled || this.enableControls(), this.proxy.setSrc(e)
                }
            }, {
                key: "getSrc",
                value: function () {
                    return this.proxy.getSrc()
                }
            }, {
                key: "canPlayType",
                value: function (e) {
                    return this.proxy.canPlayType(e)
                }
            }, {
                key: "remove",
                value: function () {
                    var l = this,
                        d = l.media.rendererName,
                        u = l.media.originalNode.src;
                    for (var e in l.options.features) {
                        var t = l.options.features[e];
                        if (l["clean" + t]) try {
                            l["clean" + t](l, l.getElement(l.layers), l.getElement(l.controls), l.media)
                        } catch (e) {
                            console.error("error cleaning " + t, e)
                        }
                    }
                    var n = l.node.getAttribute("width"),
                        o = l.node.getAttribute("height");
                    (n ? -1 === n.indexOf("%") && (n += "px") : n = "auto", o ? -1 === o.indexOf("%") && (o += "px") : o = "auto", l.node.style.width = n, l.node.style.height = o, l.setPlayerSize(0, 0), l.isDynamic ? l.getElement(l.container).parentNode.insertBefore(l.node, l.getElement(l.container)) : function () {
                        l.node.setAttribute("controls", !0), l.node.setAttribute("id", l.node.getAttribute("id").replace("_" + d, "").replace("_from_mejs", ""));
                        var e = l.getElement(l.container).querySelector("." + l.options.classPrefix + "poster>img");
                        (e && l.node.setAttribute("poster", e.src), delete l.node.autoplay, l.node.setAttribute("src", ""), "" !== l.media.canPlayType((0, b.getTypeFromFile)(u)) && l.node.setAttribute("src", u), d && -1 < d.indexOf("iframe")) && w.default.getElementById(l.media.id + "-iframe-overlay").remove();
                        var i = l.node.cloneNode();
                        if (i.style.display = "", l.getElement(l.container).parentNode.insertBefore(i, l.getElement(l.container)), l.node.remove(), l.mediaFiles)
                            for (var t = 0, n = l.mediaFiles.length; t < n; t++) {
                                var o = w.default.createElement("source");
                                o.setAttribute("src", l.mediaFiles[t].src), o.setAttribute("type", l.mediaFiles[t].type), i.appendChild(o)
                            }
                        if (l.trackFiles)
                            for (var r = function (e, t) {
                                    var n = l.trackFiles[e],
                                        o = w.default.createElement("track");
                                    o.kind = n.kind, o.label = n.label, o.srclang = n.srclang, o.src = n.src, i.appendChild(o), o.addEventListener("load", function () {
                                        this.mode = "showing", i.textTracks[e].mode = "showing"
                                    })
                                }, a = 0, s = l.trackFiles.length; a < s; a++) r(a);
                        delete l.node, delete l.mediaFiles, delete l.trackFiles
                    }(), l.media.renderer && "function" == typeof l.media.renderer.destroy && l.media.renderer.destroy(), delete v.default.players[l.id], "object" === i(l.getElement(l.container))) && (l.getElement(l.container).parentNode.querySelector("." + l.options.classPrefix + "offscreen").remove(), l.getElement(l.container).remove());
                    l.globalUnbind("resize", l.globalResizeCallback), l.globalUnbind("keydown", l.globalKeydownCallback), l.globalUnbind("click", l.globalClickCallback), delete l.media.player
                }
            }, {
                key: "paused",
                get: function () {
                    return this.proxy.paused
                }
            }, {
                key: "muted",
                get: function () {
                    return this.proxy.muted
                },
                set: function (e) {
                    this.setMuted(e)
                }
            }, {
                key: "ended",
                get: function () {
                    return this.proxy.ended
                }
            }, {
                key: "readyState",
                get: function () {
                    return this.proxy.readyState
                }
            }, {
                key: "currentTime",
                set: function (e) {
                    this.setCurrentTime(e)
                },
                get: function () {
                    return this.getCurrentTime()
                }
            }, {
                key: "duration",
                get: function () {
                    return this.getDuration()
                }
            }, {
                key: "volume",
                set: function (e) {
                    this.setVolume(e)
                },
                get: function () {
                    return this.getVolume()
                }
            }, {
                key: "src",
                set: function (e) {
                    this.setSrc(e)
                },
                get: function () {
                    return this.getSrc()
                }
            }]), r
        }();
        S.default.MediaElementPlayer = l, v.default.MediaElementPlayer = l, n.default = l
    }, {
        19: 19,
        2: 2,
        27: 27,
        28: 28,
        29: 29,
        3: 3,
        30: 30,
        32: 32,
        7: 7,
        8: 8,
        9: 9
    }],
    19: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o, i = function () {
                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (e, t, n) {
                    return t && o(e.prototype, t), n && o(e, n), e
                }
            }(),
            r = e(3),
            a = (o = r) && o.__esModule ? o : {
                default: o
            };
        var s = function () {
            function e(t) {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.media = t.media, this.isVideo = t.isVideo, this.classPrefix = t.options.classPrefix, this.createIframeLayer = function () {
                    return t.createIframeLayer()
                }, this.setPoster = function (e) {
                    return t.setPoster(e)
                }, this
            }
            return i(e, [{
                key: "play",
                value: function () {
                    this.media.play()
                }
            }, {
                key: "pause",
                value: function () {
                    this.media.pause()
                }
            }, {
                key: "load",
                value: function () {
                    this.isLoaded || this.media.load(), this.isLoaded = !0
                }
            }, {
                key: "setCurrentTime",
                value: function (e) {
                    this.media.setCurrentTime(e)
                }
            }, {
                key: "getCurrentTime",
                value: function () {
                    return this.media.currentTime
                }
            }, {
                key: "getDuration",
                value: function () {
                    return this.media.getDuration()
                }
            }, {
                key: "setVolume",
                value: function (e) {
                    this.media.setVolume(e)
                }
            }, {
                key: "getVolume",
                value: function () {
                    return this.media.getVolume()
                }
            }, {
                key: "setMuted",
                value: function (e) {
                    this.media.setMuted(e)
                }
            }, {
                key: "setSrc",
                value: function (e) {
                    var t = this,
                        n = document.getElementById(t.media.id + "-iframe-overlay");
                    n && n.remove(), t.media.setSrc(e), t.createIframeLayer(), null !== t.media.renderer && "function" == typeof t.media.renderer.getPosterUrl && t.setPoster(t.media.renderer.getPosterUrl())
                }
            }, {
                key: "getSrc",
                value: function () {
                    return this.media.getSrc()
                }
            }, {
                key: "canPlayType",
                value: function (e) {
                    return this.media.canPlayType(e)
                }
            }, {
                key: "paused",
                get: function () {
                    return this.media.paused
                }
            }, {
                key: "muted",
                set: function (e) {
                    this.setMuted(e)
                },
                get: function () {
                    return this.media.muted
                }
            }, {
                key: "ended",
                get: function () {
                    return this.media.ended
                }
            }, {
                key: "readyState",
                get: function () {
                    return this.media.readyState
                }
            }, {
                key: "currentTime",
                set: function (e) {
                    this.setCurrentTime(e)
                },
                get: function () {
                    return this.getCurrentTime()
                }
            }, {
                key: "duration",
                get: function () {
                    return this.getDuration()
                }
            }, {
                key: "remainingTime",
                get: function () {
                    return this.getDuration() - this.currentTime()
                }
            }, {
                key: "volume",
                set: function (e) {
                    this.setVolume(e)
                },
                get: function () {
                    return this.getVolume()
                }
            }, {
                key: "src",
                set: function (e) {
                    this.setSrc(e)
                },
                get: function () {
                    return this.getSrc()
                }
            }]), e
        }();
        n.default = s, a.default.DefaultPlayer = s
    }, {
        3: 3
    }],
    20: [function (e, t, n) {
        "use strict";
        a(e(3));
        var o, i = a(e(9)),
            r = a(e(18));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        "undefined" != typeof jQuery ? i.default.$ = jQuery : "undefined" != typeof Zepto ? i.default.$ = Zepto : "undefined" != typeof ender && (i.default.$ = ender), void 0 !== (o = i.default.$) && (o.fn.mediaelementplayer = function (e) {
            return !1 === e ? this.each(function () {
                var e = o(this).data("mediaelementplayer");
                e && e.remove(), o(this).removeData("mediaelementplayer")
            }) : this.each(function () {
                o(this).data("mediaelementplayer", new r.default(this, e))
            }), this
        }, o(document).ready(function () {
            o("." + i.default.MepDefaults.classPrefix + "player").mediaelementplayer()
        }))
    }, {
        18: 18,
        3: 3,
        9: 9
    }],
    21: [function (e, t, n) {
        "use strict";
        var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            S = a(e(3)),
            w = a(e(9)),
            x = e(10),
            T = e(29),
            o = e(30),
            i = e(27),
            r = e(28);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var P = {
                promise: null,
                load: function (e) {
                    return "undefined" != typeof dashjs ? P.promise = new Promise(function (e) {
                        e()
                    }).then(function () {
                        P._createPlayer(e)
                    }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.dashjs.org/latest/dash.all.min.js", P.promise = P.promise || (0, r.loadScript)(e.options.path), P.promise.then(function () {
                        P._createPlayer(e)
                    })), P.promise
                },
                _createPlayer: function (e) {
                    var t = dashjs.MediaPlayer().create();
                    return S.default["__ready__" + e.id](t), t
                }
            },
            s = {
                name: "native_dash",
                options: {
                    prefix: "native_dash",
                    dash: {
                        path: "https://cdn.dashjs.org/latest/dash.all.min.js",
                        debug: !1,
                        drm: {},
                        robustnessLevel: ""
                    }
                },
                canPlayType: function (e) {
                    return i.HAS_MSE && -1 < ["application/dash+xml"].indexOf(e.toLowerCase())
                },
                create: function (s, l, e) {
                    var t = s.originalNode,
                        r = s.id + "_" + l.prefix,
                        a = t.autoplay,
                        n = t.children,
                        d = null,
                        u = null;
                    t.removeAttribute("type");
                    for (var o = 0, i = n.length; o < i; o++) n[o].removeAttribute("type");
                    d = t.cloneNode(!0), l = Object.assign(l, s.options);
                    for (var c = w.default.html5media.properties, f = w.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function (e) {
                            return "error" !== e
                        }), p = function (e) {
                            var t = (0, T.createEvent)(e.type, s);
                            s.dispatchEvent(t)
                        }, m = function (i) {
                            var e = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                            d["get" + e] = function () {
                                return null !== u ? d[i] : null
                            }, d["set" + e] = function (e) {
                                if (-1 === w.default.html5media.readOnlyProperties.indexOf(i))
                                    if ("src" === i) {
                                        var t = "object" === (void 0 === e ? "undefined" : b(e)) && e.src ? e.src : e;
                                        if (d[i] = t, null !== u) {
                                            u.reset();
                                            for (var n = 0, o = f.length; n < o; n++) d.removeEventListener(f[n], p);
                                            u = P._createPlayer({
                                                options: l.dash,
                                                id: r
                                            }), e && "object" === (void 0 === e ? "undefined" : b(e)) && "object" === b(e.drm) && (u.setProtectionData(e.drm), (0, T.isString)(l.dash.robustnessLevel) && l.dash.robustnessLevel && u.getProtectionController().setRobustnessLevel(l.dash.robustnessLevel)), u.attachSource(t), a && u.play()
                                        }
                                    } else d[i] = e
                            }
                        }, h = 0, v = c.length; h < v; h++) m(c[h]);
                    if (S.default["__ready__" + r] = function (e) {
                            s.dashPlayer = u = e;
                            for (var t, n = dashjs.MediaPlayer.events, o = 0, i = f.length; o < i; o++) "loadedmetadata" === (t = f[o]) && (u.initialize(), u.attachView(d), u.setAutoPlay(!1), "object" !== b(l.dash.drm) || w.default.Utils.isObjectEmpty(l.dash.drm) || (u.setProtectionData(l.dash.drm), (0, T.isString)(l.dash.robustnessLevel) && l.dash.robustnessLevel && u.getProtectionController().setRobustnessLevel(l.dash.robustnessLevel)), u.attachSource(d.getSrc())), d.addEventListener(t, p);
                            var r = function (e) {
                                if ("error" === e.type.toLowerCase()) s.generateError(e.message, d.src), console.error(e);
                                else {
                                    var t = (0, T.createEvent)(e.type, s);
                                    t.data = e, s.dispatchEvent(t)
                                }
                            };
                            for (var a in n) n.hasOwnProperty(a) && u.on(n[a], function (e) {
                                return r(e)
                            })
                        }, e && 0 < e.length)
                        for (var y = 0, g = e.length; y < g; y++)
                            if (x.renderer.renderers[l.prefix].canPlayType(e[y].type)) {
                                d.setAttribute("src", e[y].src), void 0 !== e[y].drm && (l.dash.drm = e[y].drm);
                                break
                            } d.setAttribute("id", r), t.parentNode.insertBefore(d, t), t.autoplay = !1, t.style.display = "none", d.setSize = function (e, t) {
                        return d.style.width = e + "px", d.style.height = t + "px", d
                    }, d.hide = function () {
                        return d.pause(), d.style.display = "none", d
                    }, d.show = function () {
                        return d.style.display = "", d
                    }, d.destroy = function () {
                        null !== u && u.reset()
                    };
                    var E = (0, T.createEvent)("rendererready", d);
                    return s.dispatchEvent(E), s.promises.push(P.load({
                        options: l.dash,
                        id: r
                    })), d
                }
            };
        o.typeChecks.push(function (e) {
            return ~e.toLowerCase().indexOf(".mpd") ? "application/dash+xml" : null
        }), x.renderer.add(s)
    }, {
        10: 10,
        27: 27,
        28: 28,
        29: 29,
        3: 3,
        30: 30,
        9: 9
    }],
    22: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.PluginDetector = void 0;
        var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            C = o(e(3)),
            k = o(e(2)),
            _ = o(e(9)),
            N = o(e(7)),
            A = e(10),
            L = e(29),
            F = e(27),
            I = e(30);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = n.PluginDetector = {
            plugins: [],
            hasPluginVersion: function (e, t) {
                var n = r.plugins[e];
                return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] === t[0] && n[1] > t[1] || n[0] === t[0] && n[1] === t[1] && n[2] >= t[2]
            },
            addPlugin: function (e, t, n, o, i) {
                r.plugins[e] = r.detectPlugin(t, n, o, i)
            },
            detectPlugin: function (e, t, n, o) {
                var i = [0, 0, 0],
                    r = void 0,
                    a = void 0;
                if (null !== F.NAV.plugins && void 0 !== F.NAV.plugins && "object" === d(F.NAV.plugins[e])) {
                    if ((r = F.NAV.plugins[e].description) && (void 0 === F.NAV.mimeTypes || !F.NAV.mimeTypes[t] || F.NAV.mimeTypes[t].enabledPlugin))
                        for (var s = 0, l = (i = r.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".")).length; s < l; s++) i[s] = parseInt(i[s].match(/\d+/), 10)
                } else if (void 0 !== C.default.ActiveXObject) try {
                    (a = new ActiveXObject(n)) && (i = o(a))
                } catch (e) {}
                return i
            }
        };
        r.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (e) {
            var t = [],
                n = e.GetVariable("$version");
            return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
        });
        var i = {
            create: function (e, t, n) {
                var r = {},
                    o = !1;
                r.options = t, r.id = e.id + "_" + r.options.prefix, r.mediaElement = e, r.flashState = {}, r.flashApi = null, r.flashApiStack = [];
                for (var i = _.default.html5media.properties, a = function (t) {
                        r.flashState[t] = null;
                        var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
                        r["get" + e] = function () {
                            if (null === r.flashApi) return null;
                            if ("function" != typeof r.flashApi["get_" + t]) return null;
                            var e = r.flashApi["get_" + t]();
                            return "buffered" === t ? {
                                start: function () {
                                    return 0
                                },
                                end: function () {
                                    return e
                                },
                                length: 1
                            } : e
                        }, r["set" + e] = function (e) {
                            if ("src" === t && (e = (0, I.absolutizeUrl)(e)), null !== r.flashApi && void 0 !== r.flashApi["set_" + t]) try {
                                r.flashApi["set_" + t](e)
                            } catch (e) {} else r.flashApiStack.push({
                                type: "set",
                                propName: t,
                                value: e
                            })
                        }
                    }, s = 0, l = i.length; s < l; s++) a(i[s]);
                var d = _.default.html5media.methods,
                    u = function (e) {
                        r[e] = function () {
                            if (o)
                                if (null !== r.flashApi) {
                                    if (r.flashApi["fire_" + e]) try {
                                        r.flashApi["fire_" + e]()
                                    } catch (e) {}
                                } else r.flashApiStack.push({
                                    type: "call",
                                    methodName: e
                                })
                        }
                    };
                d.push("stop");
                for (var c = 0, f = d.length; c < f; c++) u(d[c]);
                for (var p = ["rendererready"], m = 0, h = p.length; m < h; m++) {
                    var v = (0, L.createEvent)(p[m], r);
                    e.dispatchEvent(v)
                }
                C.default["__ready__" + r.id] = function () {
                    if (r.flashReady = !0, r.flashApi = k.default.getElementById("__" + r.id), r.flashApiStack.length)
                        for (var e = 0, t = r.flashApiStack.length; e < t; e++) {
                            var n = r.flashApiStack[e];
                            if ("set" === n.type) {
                                var o = n.propName,
                                    i = "" + o.substring(0, 1).toUpperCase() + o.substring(1);
                                r["set" + i](n.value)
                            } else "call" === n.type && r[n.methodName]()
                        }
                }, C.default["__event__" + r.id] = function (e, t) {
                    var n = (0, L.createEvent)(e, r);
                    if (t) try {
                        n.data = JSON.parse(t), n.details.data = JSON.parse(t)
                    } catch (e) {
                        n.message = t
                    }
                    r.mediaElement.dispatchEvent(n)
                }, r.flashWrapper = k.default.createElement("div"), -1 === ["always", "sameDomain"].indexOf(r.options.shimScriptAccess) && (r.options.shimScriptAccess = "sameDomain");
                var y = e.originalNode.autoplay,
                    g = ["uid=" + r.id, "autoplay=" + y, "allowScriptAccess=" + r.options.shimScriptAccess, "preload=" + (e.originalNode.getAttribute("preload") || "")],
                    E = null !== e.originalNode && "video" === e.originalNode.tagName.toLowerCase(),
                    b = E ? e.originalNode.height : 1,
                    S = E ? e.originalNode.width : 1;
                e.originalNode.getAttribute("src") && g.push("src=" + e.originalNode.getAttribute("src")), !0 === r.options.enablePseudoStreaming && (g.push("pseudostreamstart=" + r.options.pseudoStreamingStartQueryParam), g.push("pseudostreamtype=" + r.options.pseudoStreamingType)), r.options.streamDelimiter && g.push("streamdelimiter=" + encodeURIComponent(r.options.streamDelimiter)), r.options.proxyType && g.push("proxytype=" + r.options.proxyType), e.appendChild(r.flashWrapper), e.originalNode.style.display = "none";
                var w = [];
                if (F.IS_IE || F.IS_EDGE) {
                    var x = k.default.createElement("div");
                    r.flashWrapper.appendChild(x), w = F.IS_EDGE ? ['type="application/x-shockwave-flash"', 'data="' + r.options.pluginPath + r.options.filename + '"', 'id="__' + r.id + '"', 'width="' + S + '"', 'height="' + b + "'\""] : ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + r.id + '"', 'width="' + S + '"', 'height="' + b + '"'], E || w.push('style="clip: rect(0 0 0 0); position: absolute;"'), x.outerHTML = "<object " + w.join(" ") + '><param name="movie" value="' + r.options.pluginPath + r.options.filename + "?x=" + new Date + '" /><param name="flashvars" value="' + g.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + r.options.shimScriptAccess + '" /><param name="allowFullScreen" value="true" /><div>' + N.default.t("mejs.install-flash") + "</div></object>"
                } else w = ['id="__' + r.id + '"', 'name="__' + r.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + r.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + r.options.pluginPath + r.options.filename + '"', 'flashvars="' + g.join("&") + '"'], E ? (w.push('width="' + S + '"'), w.push('height="' + b + '"')) : w.push('style="position: fixed; left: -9999em; top: -9999em;"'), r.flashWrapper.innerHTML = "<embed " + w.join(" ") + ">";
                if (r.flashNode = r.flashWrapper.lastChild, r.hide = function () {
                        o = !1, E && (r.flashNode.style.display = "none")
                    }, r.show = function () {
                        o = !0, E && (r.flashNode.style.display = "")
                    }, r.setSize = function (e, t) {
                        r.flashNode.style.width = e + "px", r.flashNode.style.height = t + "px", null !== r.flashApi && "function" == typeof r.flashApi.fire_setSize && r.flashApi.fire_setSize(e, t)
                    }, r.destroy = function () {
                        r.flashNode.remove()
                    }, n && 0 < n.length)
                    for (var T = 0, P = n.length; T < P; T++)
                        if (A.renderer.renderers[t.prefix].canPlayType(n[T].type)) {
                            r.setSrc(n[T].src);
                            break
                        } return r
            }
        };
        if (r.hasPluginVersion("flash", [10, 0, 0])) {
            I.typeChecks.push(function (e) {
                return (e = e.toLowerCase()).startsWith("rtmp") ? ~e.indexOf(".mp3") ? "audio/rtmp" : "video/rtmp" : /\.og(a|g)/i.test(e) ? "audio/ogg" : ~e.indexOf(".m3u8") ? "application/x-mpegURL" : ~e.indexOf(".mpd") ? "application/dash+xml" : ~e.indexOf(".flv") ? "video/flv" : null
            });
            var a = {
                name: "flash_video",
                options: {
                    prefix: "flash_video",
                    filename: "mediaelement-flash-video.swf",
                    enablePseudoStreaming: !1,
                    pseudoStreamingStartQueryParam: "start",
                    pseudoStreamingType: "byte",
                    proxyType: "",
                    streamDelimiter: ""
                },
                canPlayType: function (e) {
                    return ~["video/mp4", "video/rtmp", "audio/rtmp", "rtmp/mp4", "audio/mp4", "video/flv", "video/x-flv"].indexOf(e.toLowerCase())
                },
                create: i.create
            };
            A.renderer.add(a);
            var s = {
                name: "flash_hls",
                options: {
                    prefix: "flash_hls",
                    filename: "mediaelement-flash-video-hls.swf"
                },
                canPlayType: function (e) {
                    return ~["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
                },
                create: i.create
            };
            A.renderer.add(s);
            var l = {
                name: "flash_dash",
                options: {
                    prefix: "flash_dash",
                    filename: "mediaelement-flash-video-mdash.swf"
                },
                canPlayType: function (e) {
                    return ~["application/dash+xml"].indexOf(e.toLowerCase())
                },
                create: i.create
            };
            A.renderer.add(l);
            var u = {
                name: "flash_audio",
                options: {
                    prefix: "flash_audio",
                    filename: "mediaelement-flash-audio.swf"
                },
                canPlayType: function (e) {
                    return ~["audio/mp3"].indexOf(e.toLowerCase())
                },
                create: i.create
            };
            A.renderer.add(u);
            var c = {
                name: "flash_audio_ogg",
                options: {
                    prefix: "flash_audio_ogg",
                    filename: "mediaelement-flash-audio-ogg.swf"
                },
                canPlayType: function (e) {
                    return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(e.toLowerCase())
                },
                create: i.create
            };
            A.renderer.add(c)
        }
    }, {
        10: 10,
        2: 2,
        27: 27,
        29: 29,
        3: 3,
        30: 30,
        7: 7,
        9: 9
    }],
    23: [function (e, t, n) {
        "use strict";
        var g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            E = a(e(3)),
            b = a(e(9)),
            S = e(10),
            w = e(29),
            o = e(27),
            i = e(30),
            r = e(28);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var x = {
                promise: null,
                load: function (e) {
                    return "undefined" != typeof flvjs ? x.promise = new Promise(function (e) {
                        e()
                    }).then(function () {
                        x._createPlayer(e)
                    }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.jsdelivr.net/npm/flv.js@latest", x.promise = x.promise || (0, r.loadScript)(e.options.path), x.promise.then(function () {
                        x._createPlayer(e)
                    })), x.promise
                },
                _createPlayer: function (e) {
                    flvjs.LoggingControl.enableDebug = e.options.debug, flvjs.LoggingControl.enableVerbose = e.options.debug;
                    var t = flvjs.createPlayer(e.options, e.configs);
                    return E.default["__ready__" + e.id](t), t
                }
            },
            s = {
                name: "native_flv",
                options: {
                    prefix: "native_flv",
                    flv: {
                        path: "https://cdn.jsdelivr.net/npm/flv.js@latest",
                        cors: !0,
                        debug: !1
                    }
                },
                canPlayType: function (e) {
                    return o.HAS_MSE && -1 < ["video/x-flv", "video/flv"].indexOf(e.toLowerCase())
                },
                create: function (s, a, e) {
                    var t = s.originalNode,
                        l = s.id + "_" + a.prefix,
                        d = null,
                        u = null;
                    d = t.cloneNode(!0), a = Object.assign(a, s.options);
                    for (var n = b.default.html5media.properties, c = b.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function (e) {
                            return "error" !== e
                        }), f = function (e) {
                            var t = (0, w.createEvent)(e.type, s);
                            s.dispatchEvent(t)
                        }, o = function (r) {
                            var e = "" + r.substring(0, 1).toUpperCase() + r.substring(1);
                            d["get" + e] = function () {
                                return null !== u ? d[r] : null
                            }, d["set" + e] = function (e) {
                                if (-1 === b.default.html5media.readOnlyProperties.indexOf(r))
                                    if ("src" === r) {
                                        if (d[r] = "object" === (void 0 === e ? "undefined" : g(e)) && e.src ? e.src : e, null !== u) {
                                            var t = {
                                                type: "flv"
                                            };
                                            t.url = e, t.cors = a.flv.cors, t.debug = a.flv.debug, t.path = a.flv.path;
                                            var n = a.flv.configs;
                                            u.destroy();
                                            for (var o = 0, i = c.length; o < i; o++) d.removeEventListener(c[o], f);
                                            (u = x._createPlayer({
                                                options: t,
                                                configs: n,
                                                id: l
                                            })).attachMediaElement(d), u.load()
                                        }
                                    } else d[r] = e
                            }
                        }, i = 0, r = n.length; i < r; i++) o(n[i]);
                    if (E.default["__ready__" + l] = function (e) {
                            s.flvPlayer = u = e;
                            for (var t, i = flvjs.Events, n = 0, o = c.length; n < o; n++) "loadedmetadata" === (t = c[n]) && (u.unload(), u.detachMediaElement(), u.attachMediaElement(d), u.load()), d.addEventListener(t, f);
                            var r = function (o) {
                                i.hasOwnProperty(o) && u.on(i[o], function () {
                                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return function (e, t) {
                                        if ("error" === e) {
                                            var n = t[0] + ": " + t[1] + " " + t[2].msg;
                                            s.generateError(n, d.src)
                                        } else {
                                            var o = (0, w.createEvent)(e, s);
                                            o.data = t, s.dispatchEvent(o)
                                        }
                                    }(i[o], t)
                                })
                            };
                            for (var a in i) r(a)
                        }, e && 0 < e.length)
                        for (var p = 0, m = e.length; p < m; p++)
                            if (S.renderer.renderers[a.prefix].canPlayType(e[p].type)) {
                                d.setAttribute("src", e[p].src);
                                break
                            } d.setAttribute("id", l), t.parentNode.insertBefore(d, t), t.autoplay = !1, t.style.display = "none";
                    var h = {
                        type: "flv"
                    };
                    h.url = d.src, h.cors = a.flv.cors, h.debug = a.flv.debug, h.path = a.flv.path;
                    var v = a.flv.configs;
                    d.setSize = function (e, t) {
                        return d.style.width = e + "px", d.style.height = t + "px", d
                    }, d.hide = function () {
                        return null !== u && u.pause(), d.style.display = "none", d
                    }, d.show = function () {
                        return d.style.display = "", d
                    }, d.destroy = function () {
                        null !== u && u.destroy()
                    };
                    var y = (0, w.createEvent)("rendererready", d);
                    return s.dispatchEvent(y), s.promises.push(x.load({
                        options: h,
                        configs: v,
                        id: l
                    })), d
                }
            };
        i.typeChecks.push(function (e) {
            return ~e.toLowerCase().indexOf(".flv") ? "video/flv" : null
        }), S.renderer.add(s)
    }, {
        10: 10,
        27: 27,
        28: 28,
        29: 29,
        3: 3,
        30: 30,
        9: 9
    }],
    24: [function (e, t, n) {
        "use strict";
        var g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            E = a(e(3)),
            b = a(e(9)),
            S = e(10),
            w = e(29),
            o = e(27),
            i = e(30),
            r = e(28);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var x = {
                promise: null,
                load: function (e) {
                    return "undefined" != typeof Hls ? x.promise = new Promise(function (e) {
                        e()
                    }).then(function () {
                        x._createPlayer(e)
                    }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.jsdelivr.net/npm/hls.js@latest", x.promise = x.promise || (0, r.loadScript)(e.options.path), x.promise.then(function () {
                        x._createPlayer(e)
                    })), x.promise
                },
                _createPlayer: function (e) {
                    var t = new Hls(e.options);
                    return E.default["__ready__" + e.id](t), t
                }
            },
            s = {
                name: "native_hls",
                options: {
                    prefix: "native_hls",
                    hls: {
                        path: "https://cdn.jsdelivr.net/npm/hls.js@latest",
                        autoStartLoad: !1,
                        debug: !1
                    }
                },
                canPlayType: function (e) {
                    return o.HAS_MSE && -1 < ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
                },
                create: function (d, i, u) {
                    var e = d.originalNode,
                        r = d.id + "_" + i.prefix,
                        t = e.getAttribute("preload"),
                        n = e.autoplay,
                        c = null,
                        f = null,
                        p = 0,
                        m = u.length;
                    f = e.cloneNode(!0), (i = Object.assign(i, d.options)).hls.autoStartLoad = t && "none" !== t || n;
                    for (var o = b.default.html5media.properties, h = b.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function (e) {
                            return "error" !== e
                        }), v = function (e) {
                            var t = (0, w.createEvent)(e.type, d);
                            d.dispatchEvent(t)
                        }, a = function (o) {
                            var e = "" + o.substring(0, 1).toUpperCase() + o.substring(1);
                            f["get" + e] = function () {
                                return null !== c ? f[o] : null
                            }, f["set" + e] = function (e) {
                                if (-1 === b.default.html5media.readOnlyProperties.indexOf(o))
                                    if ("src" === o) {
                                        if (f[o] = "object" === (void 0 === e ? "undefined" : g(e)) && e.src ? e.src : e, null !== c) {
                                            c.destroy();
                                            for (var t = 0, n = h.length; t < n; t++) f.removeEventListener(h[t], v);
                                            (c = x._createPlayer({
                                                options: i.hls,
                                                id: r
                                            })).loadSource(e), c.attachMedia(f)
                                        }
                                    } else f[o] = e
                            }
                        }, s = 0, l = o.length; s < l; s++) a(o[s]);
                    if (E.default["__ready__" + r] = function (e) {
                            d.hlsPlayer = c = e;
                            for (var i = Hls.Events, t = function (e) {
                                    if ("loadedmetadata" === e) {
                                        var t = d.originalNode.src;
                                        c.detachMedia(), c.loadSource(t), c.attachMedia(f)
                                    }
                                    f.addEventListener(e, v)
                                }, n = 0, o = h.length; n < o; n++) t(h[n]);
                            var s = void 0,
                                l = void 0,
                                r = function (o) {
                                    i.hasOwnProperty(o) && c.on(i[o], function () {
                                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        return function (e, t) {
                                            if ("hlsError" === e && (console.warn(t), (t = t[1]).fatal)) switch (t.type) {
                                                case "mediaError":
                                                    var n = (new Date).getTime();
                                                    if (!s || 3e3 < n - s) s = (new Date).getTime(), c.recoverMediaError();
                                                    else if (!l || 3e3 < n - l) l = (new Date).getTime(), console.warn("Attempting to swap Audio Codec and recover from media error"), c.swapAudioCodec(), c.recoverMediaError();
                                                    else {
                                                        var o = "Cannot recover, last media error recovery failed";
                                                        d.generateError(o, f.src), console.error(o)
                                                    }
                                                    break;
                                                case "networkError":
                                                    if ("manifestLoadError" === t.details)
                                                        if (p < m && void 0 !== u[p + 1]) f.setSrc(u[p++].src), f.load(), f.play();
                                                        else {
                                                            var i = "Network error";
                                                            d.generateError(i, u), console.error(i)
                                                        }
                                                    else {
                                                        var r = "Network error";
                                                        d.generateError(r, u), console.error(r)
                                                    }
                                                    break;
                                                default:
                                                    c.destroy()
                                            } else {
                                                var a = (0, w.createEvent)(e, d);
                                                a.data = t, d.dispatchEvent(a)
                                            }
                                        }(i[o], t)
                                    })
                                };
                            for (var a in i) r(a)
                        }, 0 < m)
                        for (; p < m; p++)
                            if (S.renderer.renderers[i.prefix].canPlayType(u[p].type)) {
                                f.setAttribute("src", u[p].src);
                                break
                            }
                    "auto" === t || n || (f.addEventListener("play", function () {
                        null !== c && c.startLoad()
                    }), f.addEventListener("pause", function () {
                        null !== c && c.stopLoad()
                    })), f.setAttribute("id", r), e.parentNode.insertBefore(f, e), e.autoplay = !1, e.style.display = "none", f.setSize = function (e, t) {
                        return f.style.width = e + "px", f.style.height = t + "px", f
                    }, f.hide = function () {
                        return f.pause(), f.style.display = "none", f
                    }, f.show = function () {
                        return f.style.display = "", f
                    }, f.destroy = function () {
                        null !== c && (c.stopLoad(), c.destroy())
                    };
                    var y = (0, w.createEvent)("rendererready", f);
                    return d.dispatchEvent(y), d.promises.push(x.load({
                        options: i.hls,
                        id: r
                    })), f
                }
            };
        i.typeChecks.push(function (e) {
            return ~e.toLowerCase().indexOf(".m3u8") ? "application/x-mpegURL" : null
        }), S.renderer.add(s)
    }, {
        10: 10,
        27: 27,
        28: 28,
        29: 29,
        3: 3,
        30: 30,
        9: 9
    }],
    25: [function (e, t, n) {
        "use strict";
        var o = r(e(3)),
            y = r(e(2)),
            g = r(e(9)),
            E = e(10),
            b = e(29),
            i = e(27);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = {
            name: "html5",
            options: {
                prefix: "html5"
            },
            canPlayType: function (e) {
                var t = y.default.createElement("video");
                return i.IS_ANDROID && /\/mp(3|4)$/i.test(e) || ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) && i.SUPPORTS_NATIVE_HLS ? "yes" : t.canPlayType ? t.canPlayType(e.toLowerCase()).replace(/no/, "") : ""
            },
            create: function (n, e, t) {
                var o = n.id + "_" + e.prefix,
                    i = !1,
                    r = null;
                void 0 === n.originalNode || null === n.originalNode ? (r = y.default.createElement("audio"), n.appendChild(r)) : r = n.originalNode, r.setAttribute("id", o);
                for (var a = g.default.html5media.properties, s = function (t) {
                        var e = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
                        r["get" + e] = function () {
                            return r[t]
                        }, r["set" + e] = function (e) {
                            -1 === g.default.html5media.readOnlyProperties.indexOf(t) && (r[t] = e)
                        }
                    }, l = 0, d = a.length; l < d; l++) s(a[l]);
                for (var u, c = g.default.html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function (e) {
                        return "error" !== e
                    }), f = 0, p = c.length; f < p; f++) u = c[f], r.addEventListener(u, function (e) {
                    if (i) {
                        var t = (0, b.createEvent)(e.type, e.target);
                        n.dispatchEvent(t)
                    }
                });
                r.setSize = function (e, t) {
                    return r.style.width = e + "px", r.style.height = t + "px", r
                }, r.hide = function () {
                    return i = !1, r.style.display = "none", r
                }, r.show = function () {
                    return i = !0, r.style.display = "", r
                };
                var m = 0,
                    h = t.length;
                if (0 < h)
                    for (; m < h; m++)
                        if (E.renderer.renderers[e.prefix].canPlayType(t[m].type)) {
                            r.setAttribute("src", t[m].src);
                            break
                        } r.addEventListener("error", function (e) {
                    4 === e.target.error.code && i && (m < h && void 0 !== t[m + 1] ? (r.src = t[m++].src, r.load(), r.play()) : n.generateError("Media error: Format(s) not supported or source(s) not found", t))
                });
                var v = (0, b.createEvent)("rendererready", r);
                return n.dispatchEvent(v), r
            }
        };
        o.default.HtmlMediaElement = g.default.HtmlMediaElement = a, E.renderer.add(a)
    }, {
        10: 10,
        2: 2,
        27: 27,
        29: 29,
        3: 3,
        9: 9
    }],
    26: [function (e, t, n) {
        "use strict";
        var x = a(e(3)),
            T = a(e(2)),
            P = a(e(9)),
            o = e(10),
            C = e(29),
            i = e(30),
            r = e(28);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var k = {
                isIframeStarted: !1,
                isIframeLoaded: !1,
                iframeQueue: [],
                enqueueIframe: function (e) {
                    k.isLoaded = "undefined" != typeof YT && YT.loaded, k.isLoaded ? k.createIframe(e) : (k.loadIframeApi(), k.iframeQueue.push(e))
                },
                loadIframeApi: function () {
                    k.isIframeStarted || ((0, r.loadScript)("https://www.youtube.com/player_api"), k.isIframeStarted = !0)
                },
                iFrameReady: function () {
                    for (k.isLoaded = !0, k.isIframeLoaded = !0; 0 < k.iframeQueue.length;) {
                        var e = k.iframeQueue.pop();
                        k.createIframe(e)
                    }
                },
                createIframe: function (e) {
                    return new YT.Player(e.containerId, e)
                },
                getYouTubeId: function (e) {
                    var t = "";
                    return 0 < e.indexOf("?") ? "" === (t = k.getYouTubeIdFromParam(e)) && (t = k.getYouTubeIdFromUrl(e)) : t = k.getYouTubeIdFromUrl(e), (t = t.substring(t.lastIndexOf("/") + 1).split("?"))[0]
                },
                getYouTubeIdFromParam: function (e) {
                    if (null == e || !e.trim().length) return null;
                    for (var t = e.split("?")[1].split("&"), n = "", o = 0, i = t.length; o < i; o++) {
                        var r = t[o].split("=");
                        if ("v" === r[0]) {
                            n = r[1];
                            break
                        }
                    }
                    return n
                },
                getYouTubeIdFromUrl: function (e) {
                    return null != e && e.trim().length ? (e = e.split("?")[0]).substring(e.lastIndexOf("/") + 1) : null
                },
                getYouTubeNoCookieUrl: function (e) {
                    if (null == e || !e.trim().length || -1 === e.indexOf("//www.youtube")) return e;
                    var t = e.split("/");
                    return t[2] = t[2].replace(".com", "-nocookie.com"), t.join("/")
                }
            },
            s = {
                name: "youtube_iframe",
                options: {
                    prefix: "youtube_iframe",
                    youtube: {
                        autoplay: 0,
                        controls: 0,
                        disablekb: 1,
                        end: 0,
                        loop: 0,
                        modestbranding: 0,
                        playsinline: 0,
                        rel: 0,
                        showinfo: 0,
                        start: 0,
                        iv_load_policy: 3,
                        nocookie: !1,
                        imageQuality: null
                    }
                },
                canPlayType: function (e) {
                    return ~["video/youtube", "video/x-youtube"].indexOf(e.toLowerCase())
                },
                create: function (m, n, o) {
                    var h = {},
                        v = [],
                        y = null,
                        r = !0,
                        a = !1,
                        g = null;
                    h.options = n, h.id = m.id + "_" + n.prefix, h.mediaElement = m;
                    for (var e = P.default.html5media.properties, t = function (i) {
                            var e = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                            h["get" + e] = function () {
                                if (null === y) return null;
                                switch (i) {
                                    case "currentTime":
                                        return y.getCurrentTime();
                                    case "duration":
                                        return y.getDuration();
                                    case "volume":
                                        return y.getVolume() / 100;
                                    case "playbackRate":
                                        return y.getPlaybackRate();
                                    case "paused":
                                        return r;
                                    case "ended":
                                        return a;
                                    case "muted":
                                        return y.isMuted();
                                    case "buffered":
                                        var e = y.getVideoLoadedFraction(),
                                            t = y.getDuration();
                                        return {
                                            start: function () {
                                                return 0
                                            }, end: function () {
                                                return e * t
                                            }, length: 1
                                        };
                                    case "src":
                                        return y.getVideoUrl();
                                    case "readyState":
                                        return 4
                                }
                                return null
                            }, h["set" + e] = function (e) {
                                if (null !== y) switch (i) {
                                    case "src":
                                        var t = "string" == typeof e ? e : e[0].src,
                                            n = k.getYouTubeId(t);
                                        m.originalNode.autoplay ? y.loadVideoById(n) : y.cueVideoById(n);
                                        break;
                                    case "currentTime":
                                        y.seekTo(e);
                                        break;
                                    case "muted":
                                        e ? y.mute() : y.unMute(), setTimeout(function () {
                                            var e = (0, C.createEvent)("volumechange", h);
                                            m.dispatchEvent(e)
                                        }, 50);
                                        break;
                                    case "volume":
                                        e, y.setVolume(100 * e), setTimeout(function () {
                                            var e = (0, C.createEvent)("volumechange", h);
                                            m.dispatchEvent(e)
                                        }, 50);
                                        break;
                                    case "playbackRate":
                                        y.setPlaybackRate(e), setTimeout(function () {
                                            var e = (0, C.createEvent)("ratechange", h);
                                            m.dispatchEvent(e)
                                        }, 50);
                                        break;
                                    case "readyState":
                                        var o = (0, C.createEvent)("canplay", h);
                                        m.dispatchEvent(o)
                                } else v.push({
                                    type: "set",
                                    propName: i,
                                    value: e
                                })
                            }
                        }, i = 0, s = e.length; i < s; i++) t(e[i]);
                    for (var l = P.default.html5media.methods, d = function (e) {
                            h[e] = function () {
                                if (null !== y) switch (e) {
                                    case "play":
                                        return r = !1, y.playVideo();
                                    case "pause":
                                        return r = !0, y.pauseVideo();
                                    case "load":
                                        return null
                                } else v.push({
                                    type: "call",
                                    methodName: e
                                })
                            }
                        }, u = 0, c = l.length; u < c; u++) d(l[u]);
                    var f = T.default.createElement("div");
                    f.id = h.id, h.options.youtube.nocookie && (m.originalNode.src = k.getYouTubeNoCookieUrl(o[0].src)), m.originalNode.parentNode.insertBefore(f, m.originalNode), m.originalNode.style.display = "none";
                    var p = "audio" === m.originalNode.tagName.toLowerCase(),
                        E = p ? "1" : m.originalNode.height,
                        b = p ? "1" : m.originalNode.width,
                        S = k.getYouTubeId(o[0].src),
                        w = {
                            id: h.id,
                            containerId: f.id,
                            videoId: S,
                            height: E,
                            width: b,
                            playerVars: Object.assign({
                                controls: 0,
                                rel: 0,
                                disablekb: 1,
                                showinfo: 0,
                                modestbranding: 0,
                                html5: 1,
                                iv_load_policy: 3
                            }, h.options.youtube),
                            origin: x.default.location.host,
                            events: {
                                onReady: function (e) {
                                    if (m.youTubeApi = y = e.target, m.youTubeState = {
                                            paused: !0,
                                            ended: !1
                                        }, v.length)
                                        for (var t = 0, n = v.length; t < n; t++) {
                                            var o = v[t];
                                            if ("set" === o.type) {
                                                var i = o.propName,
                                                    r = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                                                h["set" + r](o.value)
                                            } else "call" === o.type && h[o.methodName]()
                                        }
                                    g = y.getIframe(), m.originalNode.muted && y.mute();
                                    for (var a = ["mouseover", "mouseout"], s = function (e) {
                                            var t = (0, C.createEvent)(e.type, h);
                                            m.dispatchEvent(t)
                                        }, l = 0, d = a.length; l < d; l++) g.addEventListener(a[l], s, !1);
                                    for (var u = ["rendererready", "loadedmetadata", "loadeddata", "canplay"], c = 0, f = u.length; c < f; c++) {
                                        var p = (0, C.createEvent)(u[c], h);
                                        m.dispatchEvent(p)
                                    }
                                },
                                onStateChange: function (e) {
                                    var t = [];
                                    switch (e.data) {
                                        case -1:
                                            t = ["loadedmetadata"], a = !(r = !0);
                                            break;
                                        case 0:
                                            r = !(t = ["ended"]), a = !h.options.youtube.loop, h.options.youtube.loop || h.stopInterval();
                                            break;
                                        case 1:
                                            a = r = !(t = ["play", "playing"]), h.startInterval();
                                            break;
                                        case 2:
                                            t = ["pause"], a = !(r = !0), h.stopInterval();
                                            break;
                                        case 3:
                                            a = !(t = ["progress"]);
                                            break;
                                        case 5:
                                            t = ["loadeddata", "loadedmetadata", "canplay"], a = !(r = !0)
                                    }
                                    for (var n = 0, o = t.length; n < o; n++) {
                                        var i = (0, C.createEvent)(t[n], h);
                                        m.dispatchEvent(i)
                                    }
                                },
                                onError: function (e) {
                                    return function (e) {
                                        var t = "";
                                        switch (e.data) {
                                            case 2:
                                                t = "The request contains an invalid parameter value. Verify that video ID has 11 characters and that contains no invalid characters, such as exclamation points or asterisks.";
                                                break;
                                            case 5:
                                                t = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
                                                break;
                                            case 100:
                                                t = "The video requested was not found. Either video has been removed or has been marked as private.";
                                                break;
                                            case 101:
                                            case 105:
                                                t = "The owner of the requested video does not allow it to be played in embedded players.";
                                                break;
                                            default:
                                                t = "Unknown error."
                                        }
                                        m.generateError("Code " + e.data + ": " + t, o)
                                    }(e)
                                }
                            }
                        };
                    return (p || m.originalNode.hasAttribute("playsinline")) && (w.playerVars.playsinline = 1), m.originalNode.controls && (w.playerVars.controls = 1), m.originalNode.autoplay && (w.playerVars.autoplay = 1), m.originalNode.loop && (w.playerVars.loop = 1), (w.playerVars.loop && 1 === parseInt(w.playerVars.loop, 10) || -1 < m.originalNode.src.indexOf("loop=")) && !w.playerVars.playlist && -1 === m.originalNode.src.indexOf("playlist=") && (w.playerVars.playlist = k.getYouTubeId(m.originalNode.src)), k.enqueueIframe(w), h.onEvent = function (e, t, n) {
                        null != n && (m.youTubeState = n)
                    }, h.setSize = function (e, t) {
                        null !== y && y.setSize(e, t)
                    }, h.hide = function () {
                        h.stopInterval(), h.pause(), g && (g.style.display = "none")
                    }, h.show = function () {
                        g && (g.style.display = "")
                    }, h.destroy = function () {
                        y.destroy()
                    }, h.interval = null, h.startInterval = function () {
                        h.interval = setInterval(function () {
                            var e = (0, C.createEvent)("timeupdate", h);
                            m.dispatchEvent(e)
                        }, 250)
                    }, h.stopInterval = function () {
                        h.interval && clearInterval(h.interval)
                    }, h.getPosterUrl = function () {
                        var e = n.youtube.imageQuality,
                            t = k.getYouTubeId(m.originalNode.src);
                        return e && -1 < ["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"].indexOf(e) && t ? "https://img.youtube.com/vi/" + t + "/" + e + ".jpg" : ""
                    }, h
                }
            };
        x.default.onYouTubePlayerAPIReady = function () {
            k.iFrameReady()
        }, i.typeChecks.push(function (e) {
            return /\/\/(www\.youtube|youtu\.?be)/i.test(e) ? "video/x-youtube" : null
        }), o.renderer.add(s)
    }, {
        10: 10,
        2: 2,
        28: 28,
        29: 29,
        3: 3,
        30: 30,
        9: 9
    }],
    27: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.cancelFullScreen = n.requestFullScreen = n.isFullScreen = n.FULLSCREEN_EVENT_NAME = n.HAS_NATIVE_FULLSCREEN_ENABLED = n.HAS_TRUE_NATIVE_FULLSCREEN = n.HAS_IOS_FULLSCREEN = n.HAS_MS_NATIVE_FULLSCREEN = n.HAS_MOZ_NATIVE_FULLSCREEN = n.HAS_WEBKIT_NATIVE_FULLSCREEN = n.HAS_NATIVE_FULLSCREEN = n.SUPPORTS_NATIVE_HLS = n.SUPPORT_PASSIVE_EVENT = n.SUPPORT_POINTER_EVENTS = n.HAS_MSE = n.IS_STOCK_ANDROID = n.IS_SAFARI = n.IS_FIREFOX = n.IS_CHROME = n.IS_EDGE = n.IS_IE = n.IS_ANDROID = n.IS_IOS = n.IS_IPOD = n.IS_IPHONE = n.IS_IPAD = n.UA = n.NAV = void 0;
        var i = a(e(3)),
            r = a(e(2)),
            o = a(e(9));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        for (var s = n.NAV = i.default.navigator, l = n.UA = s.userAgent.toLowerCase(), d = n.IS_IPAD = /ipad/i.test(l) && !i.default.MSStream, u = n.IS_IPHONE = /iphone/i.test(l) && !i.default.MSStream, c = n.IS_IPOD = /ipod/i.test(l) && !i.default.MSStream, f = (n.IS_IOS = /ipad|iphone|ipod/i.test(l) && !i.default.MSStream, n.IS_ANDROID = /android/i.test(l)), p = n.IS_IE = /(trident|microsoft)/i.test(s.appName), m = (n.IS_EDGE = "msLaunchUri" in s && !("documentMode" in r.default)), h = n.IS_CHROME = /chrome/i.test(l), v = n.IS_FIREFOX = /firefox/i.test(l), y = n.IS_SAFARI = /safari/i.test(l) && !h, g = n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l), E = (n.HAS_MSE = "MediaSource" in i.default), b = n.SUPPORT_POINTER_EVENTS = function () {
                var e = r.default.createElement("x"),
                    t = r.default.documentElement,
                    n = i.default.getComputedStyle;
                if (!("pointerEvents" in e.style)) return !1;
                e.style.pointerEvents = "auto", e.style.pointerEvents = "x", t.appendChild(e);
                var o = n && "auto" === (n(e, "") || {}).pointerEvents;
                return e.remove(), !!o
            }(), S = n.SUPPORT_PASSIVE_EVENT = function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    i.default.addEventListener("test", null, t)
                } catch (e) {}
                return e
            }(), w = ["source", "track", "audio", "video"], x = void 0, T = 0, P = w.length; T < P; T++) x = r.default.createElement(w[T]);
        var C = n.SUPPORTS_NATIVE_HLS = y || f && (h || g) || p && /edge/i.test(l),
            k = void 0 !== x.webkitEnterFullscreen,
            _ = void 0 !== x.requestFullscreen;
        k && /mac os x 10_5/i.test(l) && (k = _ = !1);
        var N = void 0 !== x.webkitRequestFullScreen,
            A = void 0 !== x.mozRequestFullScreen,
            L = void 0 !== x.msRequestFullscreen,
            F = N || A || L,
            I = F,
            j = "",
            M = void 0,
            O = void 0,
            D = void 0;
        A ? I = r.default.mozFullScreenEnabled : L && (I = r.default.msFullscreenEnabled), h && (k = !1), F && (N ? j = "webkitfullscreenchange" : A ? j = "mozfullscreenchange" : L && (j = "MSFullscreenChange"), n.isFullScreen = M = function () {
            return A ? r.default.mozFullScreen : N ? r.default.webkitIsFullScreen : L ? null !== r.default.msFullscreenElement : void 0
        }, n.requestFullScreen = O = function (e) {
            N ? e.webkitRequestFullScreen() : A ? e.mozRequestFullScreen() : L && e.msRequestFullscreen()
        }, n.cancelFullScreen = D = function () {
            N ? r.default.webkitCancelFullScreen() : A ? r.default.mozCancelFullScreen() : L && r.default.msExitFullscreen()
        });
        var R = n.HAS_NATIVE_FULLSCREEN = _,
            V = n.HAS_WEBKIT_NATIVE_FULLSCREEN = N,
            H = n.HAS_MOZ_NATIVE_FULLSCREEN = A,
            U = n.HAS_MS_NATIVE_FULLSCREEN = L,
            q = n.HAS_IOS_FULLSCREEN = k,
            B = n.HAS_TRUE_NATIVE_FULLSCREEN = F,
            z = n.HAS_NATIVE_FULLSCREEN_ENABLED = I,
            W = n.FULLSCREEN_EVENT_NAME = j;
        n.isFullScreen = M, n.requestFullScreen = O, n.cancelFullScreen = D, o.default.Features = o.default.Features || {}, o.default.Features.isiPad = d, o.default.Features.isiPod = c, o.default.Features.isiPhone = u, o.default.Features.isiOS = o.default.Features.isiPhone || o.default.Features.isiPad, o.default.Features.isAndroid = f, o.default.Features.isIE = p, o.default.Features.isEdge = m, o.default.Features.isChrome = h, o.default.Features.isFirefox = v, o.default.Features.isSafari = y, o.default.Features.isStockAndroid = g, o.default.Features.hasMSE = E, o.default.Features.supportsNativeHLS = C, o.default.Features.supportsPointerEvents = b, o.default.Features.supportsPassiveEvent = S, o.default.Features.hasiOSFullScreen = q, o.default.Features.hasNativeFullscreen = R, o.default.Features.hasWebkitNativeFullScreen = V, o.default.Features.hasMozNativeFullScreen = H, o.default.Features.hasMsNativeFullScreen = U, o.default.Features.hasTrueNativeFullScreen = B, o.default.Features.nativeFullScreenEnabled = z, o.default.Features.fullScreenEventName = W, o.default.Features.isFullScreen = M, o.default.Features.requestFullScreen = O, o.default.Features.cancelFullScreen = D
    }, {
        2: 2,
        3: 3,
        9: 9
    }],
    28: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.removeClass = n.addClass = n.hasClass = void 0, n.loadScript = a, n.offset = s, n.toggleClass = h, n.fadeOut = v, n.fadeIn = y, n.siblings = g, n.visible = E, n.ajax = b;
        var l = r(e(3)),
            i = r(e(2)),
            o = r(e(9));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(o) {
            return new Promise(function (e, t) {
                var n = i.default.createElement("script");
                n.src = o, n.async = !0, n.onload = function () {
                    n.remove(), e()
                }, n.onerror = function () {
                    n.remove(), t()
                }, i.default.head.appendChild(n)
            })
        }

        function s(e) {
            var t = e.getBoundingClientRect(),
                n = l.default.pageXOffset || i.default.documentElement.scrollLeft,
                o = l.default.pageYOffset || i.default.documentElement.scrollTop;
            return {
                top: t.top + o,
                left: t.left + n
            }
        }
        var d = void 0,
            u = void 0,
            c = void 0;
        c = "classList" in i.default.documentElement ? (d = function (e, t) {
            return void 0 !== e.classList && e.classList.contains(t)
        }, u = function (e, t) {
            return e.classList.add(t)
        }, function (e, t) {
            return e.classList.remove(t)
        }) : (d = function (e, t) {
            return new RegExp("\\b" + t + "\\b").test(e.className)
        }, u = function (e, t) {
            f(e, t) || (e.className += " " + t)
        }, function (e, t) {
            e.className = e.className.replace(new RegExp("\\b" + t + "\\b", "g"), "")
        });
        var f = n.hasClass = d,
            p = n.addClass = u,
            m = n.removeClass = c;

        function h(e, t) {
            f(e, t) ? m(e, t) : p(e, t)
        }

        function v(i) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 400,
                a = arguments[2];
            i.style.opacity || (i.style.opacity = 1);
            var s = null;
            l.default.requestAnimationFrame(function e(t) {
                var n = t - (s = s || t),
                    o = parseFloat(1 - n / r, 2);
                i.style.opacity = o < 0 ? 0 : o, r < n ? a && "function" == typeof a && a() : l.default.requestAnimationFrame(e)
            })
        }

        function y(i) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 400,
                a = arguments[2];
            i.style.opacity || (i.style.opacity = 0);
            var s = null;
            l.default.requestAnimationFrame(function e(t) {
                var n = t - (s = s || t),
                    o = parseFloat(n / r, 2);
                i.style.opacity = 1 < o ? 1 : o, r < n ? a && "function" == typeof a && a() : l.default.requestAnimationFrame(e)
            })
        }

        function g(e, t) {
            var n = [];
            for (e = e.parentNode.firstChild; t && !t(e) || n.push(e), e = e.nextSibling;);
            return n
        }

        function E(e) {
            return void 0 !== e.getClientRects && "function" === e.getClientRects ? !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) : !(!e.offsetWidth && !e.offsetHeight)
        }

        function b(e, t, n, o) {
            var i = l.default.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
                r = "application/x-www-form-urlencoded; charset=UTF-8",
                a = !1,
                s = "*/".concat("*");
            switch (t) {
                case "text":
                    r = "text/plain";
                    break;
                case "json":
                    r = "application/json, text/javascript";
                    break;
                case "html":
                    r = "text/html";
                    break;
                case "xml":
                    r = "application/xml, text/xml"
            }
            "application/x-www-form-urlencoded" !== r && (s = r + ", */*; q=0.01"), i && (i.open("GET", e, !0), i.setRequestHeader("Accept", s), i.onreadystatechange = function () {
                if (!a && 4 === i.readyState)
                    if (200 === i.status) {
                        a = !0;
                        var e = void 0;
                        switch (t) {
                            case "json":
                                e = JSON.parse(i.responseText);
                                break;
                            case "xml":
                                e = i.responseXML;
                                break;
                            default:
                                e = i.responseText
                        }
                        n(e)
                    } else "function" == typeof o && o(i.status)
            }, i.send())
        }
        o.default.Utils = o.default.Utils || {}, o.default.Utils.offset = s, o.default.Utils.hasClass = f, o.default.Utils.addClass = p, o.default.Utils.removeClass = m, o.default.Utils.toggleClass = h, o.default.Utils.fadeIn = y, o.default.Utils.fadeOut = v, o.default.Utils.siblings = g, o.default.Utils.visible = E, o.default.Utils.ajax = b, o.default.Utils.loadScript = a
    }, {
        2: 2,
        3: 3,
        9: 9
    }],
    29: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.escapeHTML = a, n.debounce = s, n.isObjectEmpty = l, n.splitEvents = d, n.createEvent = u, n.isNodeAfter = c, n.isString = f;
        var o, i = e(9),
            r = (o = i) && o.__esModule ? o : {
                default: o
            };

        function a(e) {
            if ("string" != typeof e) throw new Error("Argument passed must be a string");
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            };
            return e.replace(/[&<>"]/g, function (e) {
                return t[e]
            })
        }

        function s(o, i) {
            var r = this,
                a = arguments,
                s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            if ("function" != typeof o) throw new Error("First argument must be a function");
            if ("number" != typeof i) throw new Error("Second argument must be a numeric value");
            var l = void 0;
            return function () {
                var e = r,
                    t = a,
                    n = s && !l;
                clearTimeout(l), l = setTimeout(function () {
                    l = null, s || o.apply(e, t)
                }, i), n && o.apply(e, t)
            }
        }

        function l(e) {
            return Object.getOwnPropertyNames(e).length <= 0
        }

        function d(e, n) {
            var o = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
                i = {
                    d: [],
                    w: []
                };
            return (e || "").split(" ").forEach(function (e) {
                var t = e + (n ? "." + n : "");
                t.startsWith(".") ? (i.d.push(t), i.w.push(t)) : i[o.test(e) ? "w" : "d"].push(t)
            }), i.d = i.d.join(" "), i.w = i.w.join(" "), i
        }

        function u(e, t) {
            if ("string" != typeof e) throw new Error("Event name must be a string");
            var n = e.match(/([a-z]+\.([a-z]+))/i),
                o = {
                    target: t
                };
            return null !== n && (e = n[1], o.namespace = n[2]), new window.CustomEvent(e, {
                detail: o
            })
        }

        function c(e, t) {
            return !!(e && t && 2 & e.compareDocumentPosition(t))
        }

        function f(e) {
            return "string" == typeof e
        }
        r.default.Utils = r.default.Utils || {}, r.default.Utils.escapeHTML = a, r.default.Utils.debounce = s, r.default.Utils.isObjectEmpty = l, r.default.Utils.splitEvents = d, r.default.Utils.createEvent = u, r.default.Utils.isNodeAfter = c, r.default.Utils.isString = f
    }, {
        9: 9
    }],
    30: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.typeChecks = void 0, n.absolutizeUrl = l, n.formatType = d, n.getMimeFromType = u, n.getTypeFromFile = c, n.getExtension = f, n.normalizeExtension = p;
        var o, i = e(9),
            r = (o = i) && o.__esModule ? o : {
                default: o
            },
            a = e(29);
        var s = n.typeChecks = [];

        function l(e) {
            if ("string" != typeof e) throw new Error("`url` argument must be a string");
            var t = document.createElement("div");
            return t.innerHTML = '<a href="' + (0, a.escapeHTML)(e) + '">x</a>', t.firstChild.href
        }

        function d(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
            return e && !t ? c(e) : t
        }

        function u(e) {
            if ("string" != typeof e) throw new Error("`type` argument must be a string");
            return e && -1 < e.indexOf(";") ? e.substr(0, e.indexOf(";")) : e
        }

        function c(e) {
            if ("string" != typeof e) throw new Error("`url` argument must be a string");
            for (var t = 0, n = s.length; t < n; t++) {
                var o = s[t](e);
                if (o) return o
            }
            var i = p(f(e)),
                r = "video/mp4";
            return i && (~["mp4", "m4v", "ogg", "ogv", "webm", "flv", "mpeg", "mov"].indexOf(i) ? r = "video/" + i : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(i) && (r = "audio/" + i)), r
        }

        function f(e) {
            if ("string" != typeof e) throw new Error("`url` argument must be a string");
            var t = e.split("?")[0].split("\\").pop().split("/").pop();
            return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : ""
        }

        function p(e) {
            if ("string" != typeof e) throw new Error("`extension` argument must be a string");
            switch (e) {
                case "mp4":
                case "m4v":
                    return "mp4";
                case "webm":
                case "webma":
                case "webmv":
                    return "webm";
                case "ogg":
                case "oga":
                case "ogv":
                    return "ogg";
                default:
                    return e
            }
        }
        r.default.Utils = r.default.Utils || {}, r.default.Utils.typeChecks = s, r.default.Utils.absolutizeUrl = l, r.default.Utils.formatType = d, r.default.Utils.getMimeFromType = u, r.default.Utils.getTypeFromFile = c, r.default.Utils.getExtension = f, r.default.Utils.normalizeExtension = p
    }, {
        29: 29,
        9: 9
    }],
    31: [function (e, t, n) {
        "use strict";
        var o, i = a(e(2)),
            r = a(e(5));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        if ([Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
                e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function () {
                        this.parentNode.removeChild(this)
                    }
                })
            }), function () {
                if ("function" == typeof window.CustomEvent) return;

                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = i.default.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e
            }(), "function" != typeof Object.assign && (Object.assign = function (e) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var t = Object(e), n = 1, o = arguments.length; n < o; n++) {
                    var i = arguments[n];
                    if (null !== i)
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                }
                return t
            }), String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
                return t = t || 0, this.substr(t, e.length) === e
            }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
                for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length - 1; 0 <= --n && t.item(n) !== this;);
                return -1 < n
            }), window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
                var t = (this.document || this.ownerDocument).querySelectorAll(e),
                    n = void 0,
                    o = this;
                do {
                    for (n = t.length; 0 <= --n && t.item(n) !== o;);
                } while (n < 0 && (o = o.parentElement));
                return o
            }), function () {
                for (var i = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
                    var t = (new Date).getTime(),
                        n = Math.max(0, 16 - (t - i)),
                        o = window.setTimeout(function () {
                            e(t + n)
                        }, n);
                    return i = t + n, o
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
                    clearTimeout(e)
                })
            }(), /firefox/i.test(navigator.userAgent)) {
            var s = window.getComputedStyle;
            window.getComputedStyle = function (e, t) {
                var n = s(e, t);
                return null === n ? {
                    getPropertyValue: function () {}
                } : n
            }
        }
        window.Promise || (window.Promise = r.default), (o = window.Node || window.Element) && o.prototype && null === o.prototype.children && Object.defineProperty(o.prototype, "children", {
            get: function () {
                for (var e = 0, t = void 0, n = this.childNodes, o = []; t = n[e++];) 1 === t.nodeType && o.push(t);
                return o
            }
        })
    }, {
        2: 2,
        5: 5
    }],
    32: [function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.isDropFrame = C, n.secondsToTimeCode = a, n.timeCodeToSeconds = s, n.calculateTimeFormat = l, n.convertSMPTEtoSeconds = d;
        var o, i = e(9),
            r = (o = i) && o.__esModule ? o : {
                default: o
            };

        function C() {
            return !((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 25) % 1 == 0)
        }

        function a(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 25,
                i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "hh:mm:ss";
            e = !e || "number" != typeof e || e < 0 ? 0 : e;
            var a = Math.round(.066666 * o),
                s = Math.round(o),
                l = 24 * Math.round(3600 * o),
                d = Math.round(600 * o),
                u = C(o) ? ";" : ":",
                c = void 0,
                f = void 0,
                p = void 0,
                m = void 0,
                h = Math.round(e * o);
            if (C(o)) {
                h < 0 && (h = l + h);
                var v = (h %= l) % d;
                h += 9 * a * Math.floor(h / d), a < v && (h += a * Math.floor((v - a) / Math.round(60 * s - a)));
                var y = Math.floor(h / s);
                c = Math.floor(Math.floor(y / 60) / 60), f = Math.floor(y / 60) % 60, p = n ? y % 60 : Math.floor(h / s % 60).toFixed(i)
            } else c = Math.floor(e / 3600) % 24, f = Math.floor(e / 60) % 60, p = n ? Math.floor(e % 60) : Math.floor(e % 60).toFixed(i);
            c = c <= 0 ? 0 : c, p = 60 === (p = p <= 0 ? 0 : p) ? 0 : p, f = 60 === (f = f <= 0 ? 0 : f) ? 0 : f;
            for (var g = r.split(":"), E = {}, b = 0, S = g.length; b < S; ++b) {
                for (var w = "", x = 0, T = g[b].length; x < T; x++) w.indexOf(g[b][x]) < 0 && (w += g[b][x]);
                ~["f", "s", "m", "h"].indexOf(w) && (E[w] = g[b].length)
            }
            var P = t || 0 < c ? (c < 10 && 1 < E.h ? "0" + c : c) + ":" : "";
            return P += (f < 10 && 1 < E.m ? "0" + f : f) + ":", P += "" + (p < 10 && 1 < E.s ? "0" + p : p), n && (P += (m = (m = (h % s).toFixed(0)) <= 0 ? 0 : m) < 10 && E.f ? u + "0" + m : "" + u + m), P
        }

        function s(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 25;
            if ("string" != typeof e) throw new TypeError("Time must be a string");
            if (0 < e.indexOf(";") && (e = e.replace(";", ":")), !/\d{2}(\:\d{2}){0,3}/i.test(e)) throw new TypeError("Time code must have the format `00:00:00`");
            var n = e.split(":"),
                o = void 0,
                i = 0,
                r = 0,
                a = 0,
                s = 0,
                l = 0,
                d = Math.round(.066666 * t),
                u = Math.round(t),
                c = 3600 * u,
                f = 60 * u;
            switch (n.length) {
                default:
                case 1:
                    a = parseInt(n[0], 10);
                    break;
                case 2:
                    r = parseInt(n[0], 10), a = parseInt(n[1], 10);
                    break;
                case 3:
                    i = parseInt(n[0], 10), r = parseInt(n[1], 10), a = parseInt(n[2], 10);
                    break;
                case 4:
                    i = parseInt(n[0], 10), r = parseInt(n[1], 10), a = parseInt(n[2], 10), s = parseInt(n[3], 10)
            }
            return o = C(t) ? c * i + f * r + u * a + s - d * ((l = 60 * i + r) - Math.floor(l / 10)) : (c * i + f * r + t * a + s) / t, parseFloat(o.toFixed(3))
        }

        function l(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 25;
            e = !e || "number" != typeof e || e < 0 ? 0 : e;
            for (var o = Math.floor(e / 3600) % 24, i = Math.floor(e / 60) % 60, r = Math.floor(e % 60), a = [
                    [Math.floor((e % 1 * n).toFixed(3)), "f"],
                    [r, "s"],
                    [i, "m"],
                    [o, "h"]
                ], s = t.timeFormat, l = s[1] === s[0], d = l ? 2 : 1, u = s.length < d ? s[d] : ":", c = s[0], f = !1, p = 0, m = a.length; p < m; p++)
                if (~s.indexOf(a[p][1])) f = !0;
                else if (f) {
                for (var h = !1, v = p; v < m; v++)
                    if (0 < a[v][0]) {
                        h = !0;
                        break
                    } if (!h) break;
                l || (s = c + s), s = a[p][1] + u + s, l && (s = a[p][1] + s), c = a[p][1]
            }
            t.timeFormat = s
        }

        function d(e) {
            if ("string" != typeof e) throw new TypeError("Argument must be a string value");
            for (var t = ~(e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, n = 0, o = 1, i = 0, r = (e = e.split(":").reverse()).length; i < r; i++) o = 1, 0 < i && (o = Math.pow(60, i)), n += Number(e[i]) * o;
            return Number(n.toFixed(t))
        }
        r.default.Utils = r.default.Utils || {}, r.default.Utils.secondsToTimeCode = a, r.default.Utils.timeCodeToSeconds = s, r.default.Utils.calculateTimeFormat = l, r.default.Utils.convertSMPTEtoSeconds = d
    }, {
        9: 9
    }]
}, {}, [31, 8, 7, 17, 25, 22, 21, 23, 24, 26, 18, 20, 19, 11, 12, 13, 14, 15, 16]);
! function (a) {
    void 0 === mejs.plugins && (mejs.plugins = {}, mejs.plugins.silverlight = [], mejs.plugins.silverlight.push({
        types: []
    })), mejs.HtmlMediaElementShim = mejs.HtmlMediaElementShim || {
        getTypeFromFile: mejs.Utils.getTypeFromFile
    }, void 0 === mejs.MediaFeatures && (mejs.MediaFeatures = mejs.Features), void 0 === mejs.Utility && (mejs.Utility = mejs.Utils);
    var e = MediaElementPlayer.prototype.init;
    MediaElementPlayer.prototype.init = function () {
        this.options.classPrefix = "mejs-", this.$media = this.$node = a(this.node), e.call(this)
    };
    var t = MediaElementPlayer.prototype._meReady;
    MediaElementPlayer.prototype._meReady = function () {
        this.container = a(this.container), this.controls = a(this.controls), this.layers = a(this.layers), t.apply(this, arguments)
    }, MediaElementPlayer.prototype.getElement = function (e) {
        return void 0 !== a && e instanceof a ? e[0] : e
    }, MediaElementPlayer.prototype.buildfeatures = function (e, t, i, s) {
        for (var r = ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"], l = 0, n = this.options.features.length; l < n; l++) {
            var o = this.options.features[l];
            if (this["build" + o]) try {
                -1 === r.indexOf(o) ? this["build" + o](e, a(t), a(i), s) : this["build" + o](e, t, i, s)
            } catch (e) {
                console.error("error building " + o, e)
            }
        }
    }
}((window, jQuery));
! function (e, n) {
    e.wp = e.wp || {}, e.wp.mediaelement = new function () {
        var e = {};
        return {
            initialize: function () {
                (e = "undefined" != typeof _wpmejsSettings ? n.extend(!0, {}, _wpmejsSettings) : e).classPrefix = "mejs-", e.success = e.success || function (e) {
                    var n, t;
                    e.rendererName && -1 !== e.rendererName.indexOf("flash") && (n = e.attributes.autoplay && "false" !== e.attributes.autoplay, t = e.attributes.loop && "false" !== e.attributes.loop, n && e.addEventListener("canplay", function () {
                        e.play()
                    }, !1), t && e.addEventListener("ended", function () {
                        e.play()
                    }, !1))
                }, e.customError = function (e, n) {
                    if (-1 !== e.rendererName.indexOf("flash") || -1 !== e.rendererName.indexOf("flv")) return '<a href="' + n.src + '">' + mejsL10n.strings["mejs.download-file"] + "</a>"
                }, n(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function () {
                    return !n(this).parent().hasClass("mejs-mediaelement")
                }).mediaelementplayer(e)
            }
        }
    }, n(e.wp.mediaelement.initialize)
}(window, jQuery); /*!This file is auto-generated*/
! function (I) {
    I.fn.hoverIntent = function (e, t, n) {
        function r(e) {
            o = e.pageX, v = e.pageY
        }
        var o, v, i, u, s = {
                interval: 100,
                sensitivity: 6,
                timeout: 0
            },
            s = "object" == typeof e ? I.extend(s, e) : I.isFunction(t) ? I.extend(s, {
                over: e,
                out: t,
                selector: n
            }) : I.extend(s, {
                over: e,
                out: e,
                selector: t
            }),
            h = function (e, t) {
                if (t.hoverIntent_t = clearTimeout(t.hoverIntent_t), Math.sqrt((i - o) * (i - o) + (u - v) * (u - v)) < s.sensitivity) return I(t).off("mousemove.hoverIntent", r), t.hoverIntent_s = !0, s.over.apply(t, [e]);
                i = o, u = v, t.hoverIntent_t = setTimeout(function () {
                    h(e, t)
                }, s.interval)
            },
            t = function (e) {
                var n = I.extend({}, e),
                    o = this;
                o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" === e.type ? (i = n.pageX, u = n.pageY, I(o).on("mousemove.hoverIntent", r), o.hoverIntent_s || (o.hoverIntent_t = setTimeout(function () {
                    h(n, o)
                }, s.interval))) : (I(o).off("mousemove.hoverIntent", r), o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function () {
                    var e, t;
                    e = n, (t = o).hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, s.out.apply(t, [e])
                }, s.timeout)))
            };
        return this.on({
            "mouseenter.hoverIntent": t,
            "mouseleave.hoverIntent": t
        }, s.selector)
    }
}(jQuery); /*!This file is auto-generated*/
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}),
function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function () {
        function e(e, i, n) {
            setTimeout(function () {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function (e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function (t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});
/*!

*/
! function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function (t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }), void 0 !== n ? n : t
        }

        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, o(a))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function () {} : function (t) {
            s.error(t)
        };
    return o(e || t.jQuery), i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {};
            return o[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n],
                    r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e)
        }
    }

    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                I = a.borderTopWidth + a.borderBottomWidth,
                z = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i],
                n = o + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function (t, e) {
        return (t % e + e) % e
    }, i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
            }
        }), n
    }, i.debounceMethod = function (t, e, i) {
        var o = t.prototype[e],
            n = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[n];
            t && clearTimeout(t);
            var e = arguments,
                s = this;
            this[n] = setTimeout(function () {
                o.apply(s, e), delete s[n]
            }, i || 100)
        }
    }, i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function (e, n) {
        i.docReady(function () {
            var s = i.toDashed(n),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function (t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, n, u)
            })
        })
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        } [r],
        h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        },
        d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function () {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function () {
        this.size = e(this.element)
    }, d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
            a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = parseInt(t, 10),
            s = parseInt(e, 10),
            r = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            u = e - o,
            h = {};
        h.transform = this.getTranslate(a, u), this.transition({
            to: h,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop");
        return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + n(a);
    d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function () {
        this.css(c)
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function () {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function () {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function () {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, o
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n) {
    "use strict";

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console,
        h = t.jQuery,
        d = function () {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function (t) {
        o.extend(this.options, t)
    }, c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n],
                r = new i(s, this);
            o.push(r)
        }
        return o
    }, c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function () {
        this.getSize()
    }, c.getSize = function () {
        this.size = i(this.element)
    }, c._getMeasurement = function (t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
    }, c.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function () {
        return {
            x: 0,
            y: 0
        }
    }, c._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function () {
        this.resizeContainer()
    }, c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function (t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }

        function o() {
            r++, r == s && i()
        }
        var n = this,
            s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
            e.once(t, o)
        })
    }, c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h)
            if (this.$element = this.$element || h(this.element), e) {
                var n = h.Event(e);
                n.type = t, this.$element.trigger(n, i)
            } else this.$element.trigger(t, i)
    }, c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
    }, c._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = {
                left: e.left - o.left - n.marginLeft,
                top: e.top - o.top - n.marginTop,
                right: o.right - e.right - n.marginRight,
                bottom: o.bottom - e.bottom - n.marginBottom
            };
        return s
    }, c.handleEvent = o.handleEvent, c.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function () {
        this.resize()
    }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function () {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), o.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function (t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n, s
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function () {
        n.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function (t) {
        o[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, o.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, o.getSegmentSize = function (t, e) {
        var i = t + e,
            o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, o.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, o.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);
        this.containerWidth = o && o.innerWidth
    }, o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
                x: this.columnWidth * s.col,
                y: s.y
            }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r
    }, o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, o._manageStamp = function (t) {
        var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function () {
        return {
            height: this.maxY
        }
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function () {
        this.y = 0
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function () {
        return {
            height: this.y
        }
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
        return function (i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function (t) {
            return t.trim()
        } : function (t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function (t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function () {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            o = !0, t()
        })
    }, l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }, l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering ? function (e) {
            return u(e.element).is(t)
        } : "function" == typeof t ? function (e) {
            return t(e.element)
        } : function (e) {
            return o(e.element, t)
        }
    }, l.updateSortData = function (t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var f = function () {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]];
            return t = a ? function (t) {
                return t && a(r(t))
            } : function (t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function (e) {
                return e.getAttribute(t)
            } : function (t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        },
        parseFloat: function (t) {
            return parseFloat(t)
        }
    }, l._sort = function () {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function () {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element
        })
    }, d
});
! function (e, t) {
    var n = function (e, t) {
        "use strict";
        if (!t.getElementsByClassName) return;
        var n, a = t.documentElement,
            i = e.Date,
            o = e.HTMLPictureElement,
            r = "addEventListener",
            s = "getAttribute",
            l = e[r],
            d = e.setTimeout,
            c = e.requestAnimationFrame || d,
            u = e.requestIdleCallback,
            f = /^picture$/i,
            m = ["load", "error", "lazyincluded", "_lazyloaded"],
            v = {},
            g = Array.prototype.forEach,
            h = function (e, t) {
                return v[t] || (v[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), v[t].test(e[s]("class") || "") && v[t]
            },
            z = function (e, t) {
                h(e, t) || e.setAttribute("class", (e[s]("class") || "").trim() + " " + t)
            },
            y = function (e, t) {
                var n;
                (n = h(e, t)) && e.setAttribute("class", (e[s]("class") || "").replace(n, " "))
            },
            p = function (e, t, n) {
                var a = n ? r : "removeEventListener";
                n && p(e, t), m.forEach((function (n) {
                    e[a](n, t)
                }))
            },
            C = function (e, n, a, i, o) {
                var r = t.createEvent("CustomEvent");
                return r.initCustomEvent(n, !i, !o, a || {}), e.dispatchEvent(r), r
            },
            b = function (t, a) {
                var i;
                !o && (i = e.picturefill || n.pf) ? i({
                    reevaluate: !0,
                    elements: [t]
                }) : a && a.src && (t.src = a.src)
            },
            A = function (e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            E = function (e, t, a) {
                for (a = a || e.offsetWidth; a < n.minSize && t && !e._lazysizesWidth;) a = t.offsetWidth, t = t.parentNode;
                return a
            },
            N = (P = [], T = [], $ = function () {
                var e = P;
                for (P = T, k = !0, O = !1; e.length;) e.shift()();
                k = !1
            }, D = function (e, n) {
                k && !n ? e.apply(this, arguments) : (P.push(e), O || (O = !0, (t.hidden ? d : c)($)))
            }, D._lsFlush = $, D),
            w = function (e, t) {
                return t ? function () {
                    N(e)
                } : function () {
                    var t = this,
                        n = arguments;
                    N((function () {
                        e.apply(t, n)
                    }))
                }
            },
            M = function (e) {
                var t, n = 0,
                    a = 125,
                    o = 66,
                    r = o,
                    s = function () {
                        t = !1, n = i.now(), e()
                    },
                    l = u ? function () {
                        u(s, {
                            timeout: r
                        }), r !== o && (r = o)
                    } : w((function () {
                        d(s)
                    }), !0);
                return function (e) {
                    var o;
                    (e = !0 === e) && (r = 44), t || (t = !0, (o = a - (i.now() - n)) < 0 && (o = 0), e || o < 9 && u ? l() : d(l, o))
                }
            },
            _ = function (e) {
                var t, n, a = 99,
                    o = function () {
                        t = null, e()
                    },
                    r = function () {
                        var e = i.now() - n;
                        e < a ? d(r, a - e) : (u || o)(o)
                    };
                return function () {
                    n = i.now(), t || (t = d(r, a))
                }
            },
            W = function () {
                var o, c, u, m, v, E, W, L, B, F, R, S, k, O, P, T, $ = /^img$/i,
                    D = /^iframe$/i,
                    H = "onscroll" in e && !/glebot/.test(navigator.userAgent),
                    I = 0,
                    q = 0,
                    j = 0,
                    G = -1,
                    J = function (e) {
                        j--, e && e.target && p(e.target, J), (!e || j < 0 || !e.target) && (j = 0)
                    },
                    K = function (e, n) {
                        var i, o = e,
                            r = "hidden" == A(t.body, "visibility") || "hidden" != A(e, "visibility");
                        for (F -= n, k += n, R -= n, S += n; r && (o = o.offsetParent) && o != t.body && o != a;)(r = (A(o, "opacity") || 1) > 0) && "visible" != A(o, "overflow") && (i = o.getBoundingClientRect(), r = S > i.left && R < i.right && k > i.top - 1 && F < i.bottom + 1);
                        return r
                    },
                    Q = function () {
                        var e, i, r, l, d, f, m, g, h;
                        if ((v = n.loadMode) && j < 8 && (e = o.length)) {
                            i = 0, G++, null == P && ("expand" in n || (n.expand = a.clientHeight > 500 && a.clientWidth > 500 ? 500 : 370), O = n.expand, P = O * n.expFactor), q < P && j < 1 && G > 2 && v > 2 && !t.hidden ? (q = P, G = 0) : q = v > 1 && G > 1 && j < 6 ? O : I;
                            for (; i < e; i++)
                                if (o[i] && !o[i]._lazyRace)
                                    if (H)
                                        if ((g = o[i][s]("data-expand")) && (f = 1 * g) || (f = q), h !== f && (L = innerWidth + f * T, B = innerHeight + f, m = -1 * f, h = f), r = o[i].getBoundingClientRect(), (k = r.bottom) >= m && (F = r.top) <= B && (S = r.right) >= m * T && (R = r.left) <= L && (k || S || R || F) && (u && j < 3 && !g && (v < 3 || G < 4) || K(o[i], f))) {
                                            if (ae(o[i]), d = !0, j > 9) break
                                        } else !d && u && !l && j < 4 && G < 4 && v > 2 && (c[0] || n.preloadAfterLoad) && (c[0] || !g && (k || S || R || F || "auto" != o[i][s](n.sizesAttr))) && (l = c[0] || o[i]);
                            else ae(o[i]);
                            l && !d && ae(l)
                        }
                        Y()
                    },
                    U = M(Q),
                    V = function (e) {
                        z(e, n.loadedClass), y(e, n.loadingClass), y(e, n.afterLoadedClass)
                    },
                    X = function (e) {
                        z(e.target, n.afterLoadedClass), Y()
                    },
                    Y = function () {
                        if (W.length > 0)
                            for (var e, t, a = n.animateExpand, i = 0, o = 0; o < W.length; o++) {
                                var r = W[o],
                                    l = r[s]("data-animate");
                                l && (a = l), e = W[o].getBoundingClientRect(), t !== a && (L = innerWidth + a * T, B = innerHeight + a, i = -1 * a, t = a), (k = e.bottom) >= i && (F = e.top) <= B && (S = e.right) >= i * T && (R = e.left) <= L && (k || S || R || F) && h(r, n.afterLoadedClass) && V(r)
                            }
                    },
                    Z = function (e, t) {
                        try {
                            e.contentWindow.location.replace(t)
                        } catch (n) {
                            e.src = t
                        }
                    },
                    ee = function (e) {
                        var t, a, i = e[s](n.srcsetAttr);
                        (t = n.customMedia[e[s]("data-media") || e[s]("media")]) && e.setAttribute("media", t), i && e.setAttribute("srcset", i), t && ((a = e.parentNode).insertBefore(e.cloneNode(), e), a.removeChild(e))
                    },
                    te = w((function (e, t, a, i, o) {
                        var r, l, c, u, v, h;
                        (v = C(e, "lazybeforeunveil", t)).defaultPrevented || (i && (a ? z(e, n.autosizesClass) : e.setAttribute("sizes", i)), l = e[s](n.srcsetAttr), r = e[s](n.srcAttr), o && (u = (c = e.parentNode) && f.test(c.nodeName || "")), h = t.firesLoad || "src" in e && (l || r || u), v = {
                            target: e
                        }, h && (p(e, J, !0), clearTimeout(m), m = d(J, 2500), z(e, n.loadingClass), p(e, X, !0)), u && g.call(c.getElementsByTagName("source"), ee), l ? e.setAttribute("srcset", l) : r && !u && (D.test(e.nodeName) ? Z(e, r) : e.src = r), (l || u) && b(e, {
                            src: r
                        })), e._lazyRace && delete e._lazyRace, y(e, n.lazyClass), N((function () {
                            h && !ne(e) || (h ? J(v) : j--)
                        }), !0)
                    }));

                function ne(e) {
                    return !!e.complete && (void 0 === e.naturalWidth || 0 !== e.naturalWidth)
                }
                var ae = function (e) {
                        var t, a = $.test(e.nodeName),
                            i = a && (e[s](n.sizesAttr) || e[s]("sizes")),
                            o = "auto" == i;
                        (!o && u || !a || !e.src && !e.srcset || e.complete || h(e, n.errorClass)) && (t = C(e, "lazyunveilread").detail, o && x.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, j++, te(e, t, o, i, a))
                    },
                    ie = function () {
                        if (!u)
                            if (i.now() - E < 999) d(ie, 999);
                            else {
                                var e = _((function () {
                                    n.loadMode = 3, U()
                                }));
                                u = !0, n.loadMode = 3, U(), l("scroll", (function () {
                                    3 == n.loadMode && (n.loadMode = 2), e()
                                }), !0)
                            }
                    };
                return {
                    _: function () {
                        E = i.now(), o = t.getElementsByClassName(n.lazyClass), W = t.getElementsByClassName(n.afterLoadedClass), c = t.getElementsByClassName(n.lazyClass + " " + n.preloadClass), T = n.hFac, l("scroll", U, !0), l("resize", U, !0), e.MutationObserver ? new MutationObserver(U).observe(a, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (a[r]("DOMNodeInserted", U, !0), a[r]("DOMAttrModified", U, !0), setInterval(U, 999)), l("hashchange", U, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach((function (e) {
                            t[r](e, U, !0)
                        })), /d$|^c/.test(t.readyState) ? ie() : (l("load", ie), t[r]("DOMContentLoaded", U), d(ie, 2e4)), o.length ? (Q(), N._lsFlush()) : U()
                    },
                    checkElems: U,
                    unveil: ae
                }
            }(),
            x = (F = w((function (e, t, n, a) {
                var i, o, r;
                if (e._lazysizesWidth = a, a += "px", e.setAttribute("sizes", a), f.test(t.nodeName || ""))
                    for (o = 0, r = (i = t.getElementsByTagName("source")).length; o < r; o++) i[o].setAttribute("sizes", a);
                n.detail.dataAttr || b(e, n.detail)
            })), R = function (e, t, n) {
                var a, i = e.parentNode;
                i && (n = E(e, i, n), (a = C(e, "lazybeforesizes", {
                    width: n,
                    dataAttr: !!t
                })).defaultPrevented || (n = a.detail.width) && n !== e._lazysizesWidth && F(e, i, a, n))
            }, S = _((function () {
                var e, t = B.length;
                if (t)
                    for (e = 0; e < t; e++) R(B[e])
            })), {
                _: function () {
                    B = t.getElementsByClassName(n.autosizesClass), l("resize", S)
                },
                checkElems: S,
                updateElem: R
            }),
            L = function () {
                L.i || (L.i = !0, x._(), W._())
            };
        var B, F, R, S;
        var k, O, P, T, $, D;
        return function () {
            var t, a = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                afterLoadedClass: "afterloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                animateExpand: 0
            };
            for (t in n = e.lazySizesConfig || e.lazysizesConfig || {}, a) t in n || (n[t] = a[t]);
            e.lazySizesConfig = n, d((function () {
                n.init && L()
            }))
        }(), {
            cfg: n,
            autoSizer: x,
            loader: W,
            init: L,
            uP: b,
            aC: z,
            rC: y,
            hC: h,
            fire: C,
            gW: E,
            rAF: N
        }
    }(e, e.document);
    e.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
}(window);
! function (e, t) {
    "use strict";
    var a = function () {
        t(e.lazySizes), e.removeEventListener("lazyunveilread", a, !0)
    };
    t = t.bind(null, e, e.document), "object" == typeof module && module.exports ? t(require("lazysizes")) : e.lazySizes ? a() : e.addEventListener("lazyunveilread", a, !0)
}(window, (function (e, t, a) {
    "use strict";
    if (e.addEventListener) {
        var i = /\s+/g,
            r = /\s*\|\s+|\s+\|\s*/g,
            s = /^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,
            n = /\(|\)|'/,
            l = {
                contain: 1,
                cover: 1
            },
            d = function (e) {
                if (e.target._lazybgset) {
                    var t = e.target,
                        i = t._lazybgset,
                        r = t.currentSrc || t.src;
                    r && (i.style.backgroundImage = "url(" + (n.test(r) ? JSON.stringify(r) : r) + ")"), t._lazybgsetLoading && (a.fire(i, "_lazyloaded", {}, !1, !0), delete t._lazybgsetLoading)
                }
            };
        addEventListener("lazybeforeunveil", (function (e) {
            var n, l, o;
            !e.defaultPrevented && (n = e.target.getAttribute("data-bgset")) && (o = e.target, (l = t.createElement("img")).alt = "", l._lazybgsetLoading = !0, e.detail.firesLoad = !0, function (e, a, n) {
                var l = t.createElement("picture"),
                    d = a.getAttribute(lazySizesConfig.sizesAttr),
                    o = a.getAttribute("data-ratio"),
                    z = a.getAttribute("data-optimumx");
                a._lazybgset && a._lazybgset.parentNode == a && a.removeChild(a._lazybgset), Object.defineProperty(n, "_lazybgset", {
                    value: a,
                    writable: !0
                }), Object.defineProperty(a, "_lazybgset", {
                    value: l,
                    writable: !0
                }), e = e.replace(i, " ").split(r), l.style.display = "none", n.className = lazySizesConfig.lazyClass, 1 != e.length || d || (d = "auto"), e.forEach((function (e) {
                    var a = t.createElement("source");
                    d && "auto" != d && a.setAttribute("sizes", d), e.match(s) && (a.setAttribute(lazySizesConfig.srcsetAttr, RegExp.$1), RegExp.$2 && a.setAttribute("media", lazySizesConfig.customMedia[RegExp.$2] || RegExp.$2)), l.appendChild(a)
                })), d && (n.setAttribute(lazySizesConfig.sizesAttr, d), a.removeAttribute(lazySizesConfig.sizesAttr), a.removeAttribute("sizes")), z && n.setAttribute("data-optimumx", z), o && n.setAttribute("data-ratio", o), l.appendChild(n), a.appendChild(l)
            }(n, o, l), setTimeout((function () {
                a.loader.unveil(l), a.rAF((function () {
                    a.fire(l, "_lazyloaded", {}, !0, !0), l.complete && d({
                        target: l
                    })
                }))
            })))
        })), t.addEventListener("load", d, !0), e.addEventListener("lazybeforesizes", (function (e) {
            if (e.detail.instance == a && e.target._lazybgset && e.detail.dataAttr) {
                var t = function (e) {
                    var t;
                    return t = (getComputedStyle(e) || {
                        getPropertyValue: function () {}
                    }).getPropertyValue("background-size"), !l[t] && l[e.style.backgroundSize] && (t = e.style.backgroundSize), t
                }(e.target._lazybgset);
                l[t] && (e.target._lazysizesParentFit = t, a.rAF((function () {
                    e.target.setAttribute("data-parent-fit", t), e.target._lazysizesParentFit && delete e.target._lazysizesParentFit
                })))
            }
        }), !0), t.documentElement.addEventListener("lazybeforesizes", (function (e) {
            var t, i;
            !e.defaultPrevented && e.target._lazybgset && e.detail.instance == a && (e.detail.width = (t = e.target._lazybgset, i = a.gW(t, t.parentNode), (!t._lazysizesWidth || i > t._lazysizesWidth) && (t._lazysizesWidth = i), t._lazysizesWidth))
        }))
    }
}));
! function (e, n) {
    "use strict";
    var t, o, i, s, a, r, l, p, h, f, c, u, d, v, m, y, w, T = !!("object" == typeof jnews && "object" == typeof jnews.library) && jnews.library,
        C = (o = "sf-breadcrumb", i = "sf-js-enabled", s = "sf-with-ul", a = "sf-arrows", r = function () {
            var n = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
            return n && e("html").css("cursor", "pointer").on("click", e.noop), n
        }(), l = "behavior" in (t = document.documentElement.style) && "fill" in t && /iemobile/i.test(navigator.userAgent), p = !!n.PointerEvent, h = function (e, n, t) {
            var o = i;
            n.cssArrows && (o += " " + a), e[t ? "addClass" : "removeClass"](o)
        }, f = function (e, n) {
            var t = n ? "addClass" : "removeClass";
            e.children("a")[t](s)
        }, c = function (e) {
            var n = e[0].style.msTouchAction,
                t = e[0].style.touchAction;
            t = "pan-y" === (t = t || n) ? "auto" : "pan-y", e[0].style.msTouchAction = t, e[0].style.touchAction = t
        }, u = function (e) {
            return e.closest("." + i)
        }, d = function (e) {
            return u(e).data("sfOptions")
        }, v = function () {
            var n = e(this),
                t = d(n);
            clearTimeout(t.sfTimer), n.siblings().superfish("hide").end().superfish("show")
        }, m = function (n) {
            n.retainPath = e.inArray(this[0], n.$path) > -1, this.superfish("hide"), this.parents("." + n.hoverClass).length || (n.onIdle.call(u(this)), n.$path.length && e.proxy(v, n.$path)())
        }, y = function () {
            var n = e(this),
                t = d(n);
            r ? e.proxy(m, n, t)() : (clearTimeout(t.sfTimer), t.sfTimer = setTimeout(e.proxy(m, n, t), t.delay))
        }, w = function (n) {
            var t = e(this),
                o = d(t),
                i = t.siblings(n.data.popUpSelector);
            if (!1 === o.onHandleTouch.call(i)) return this;
            i.length > 0 && i.is(":hidden") && (t.one("click.superfish", !1), "MSPointerDown" === n.type || "pointerdown" === n.type ? t.trigger("focus") : e.proxy(v, t.parent("li"))())
        }, {
            hide: function (n) {
                if (this.length) {
                    var t = d(this);
                    if (!t) return this;
                    var o = !0 === t.retainPath ? t.$path : "",
                        i = this.find("li." + t.hoverClass).add(this).not(o).removeClass(t.hoverClass).children(t.popUpSelector),
                        s = t.speedOut;
                    if (n) {
                        var a = !("object" != typeof jnews || "object" != typeof jnews.library) && jnews.library;
                        a && a.forEach(i, (function (e, n) {
                            e.style.display = 0
                        })), s = 0
                    }
                    if (t.retainPath = !1, !1 === t.onBeforeHide.call(i)) return this;
                    "slide" === t.animationType ? i.stop(!0, !0).fadeOut(t.animationOut, (function () {
                        var n = e(this);
                        t.onHide.call(n)
                    })) : "fade" === t.animationType ? i.stop(!0, !0).fadeOut(t.animationOut, (function () {
                        var n = e(this);
                        t.onHide.call(n)
                    })) : "animateTransform" === t.animationType ? i.stop(!0, !0).hide(0, (function () {
                        var n = e(this);
                        t.onHide.call(n)
                    })) : "none" === t.animationType ? i.stop(!0, !0).hide(0, (function () {
                        var n = e(this);
                        t.onShow.call(n)
                    })) : i.stop(!0, !0).animate(t.animationOut, s, (function () {
                        var n = e(this);
                        t.onHide.call(n)
                    }))
                }
                return this
            },
            show: function () {
                var n = d(this);
                if (!n) return this;
                var t = this.addClass(n.hoverClass).children(n.popUpSelector);
                return !1 === n.onBeforeShow.call(t) || ("slide" === n.animationType ? t.stop(!0, !0).slideDown(n.speed, (function () {
                    var t = e(this);
                    n.onShow.call(t)
                })) : "fade" === n.animationType ? t.stop(!0, !0).fadeIn(n.speed, (function () {
                    var t = e(this);
                    n.onShow.call(t)
                })) : "animateTransform" === n.animationType ? t.stop(!0, !0).css({
                    display: "block",
                    transform: "translate(0, -10px)",
                    opacity: 0
                }).transition({
                    opacity: 1,
                    y: 0
                }, n.speed, "ease", (function () {
                    var t = e(this);
                    n.onShow.call(t)
                })) : "none" === n.animationType ? t.stop(!0, !0).show(0, (function () {
                    var t = e(this);
                    n.onShow.call(t)
                })) : t.stop(!0, !0).animate(n.animation, n.speed, (function () {
                    n.onShow.call(t)
                }))), this
            },
            destroy: function () {
                return this.each((function () {
                    var n, t = e(this),
                        i = t.data("sfOptions");
                    if (!i) return !1;
                    n = t.find(i.popUpSelector).parent("li"), clearTimeout(i.sfTimer), h(t, i), f(n), c(t), t.off(".superfish").off(".hoverIntent"), n.children(i.popUpSelector).attr("style", (function (e, n) {
                        return n.replace(/display[^;]+;?/g, "")
                    })), i.$path.removeClass(i.hoverClass + " " + o).addClass(i.pathClass), t.find("." + i.hoverClass).removeClass(i.hoverClass), i.onDestroy.call(t), t.removeData("sfOptions")
                }))
            },
            init: function (n) {
                return this.each((function () {
                    var t = this;
                    T && T.requestAnimationFrame.call(T.win, (function () {
                        var i = e(t);
                        if (i.data("sfOptions")) return !1;
                        var s = e.extend({}, e.fn.superfish.defaults, n),
                            a = i.find(s.popUpSelector).parent("li");
                        s.$path = function (n, t) {
                                return n.find("li." + t.pathClass).slice(0, t.pathLevels).addClass(t.hoverClass + " " + o).filter((function () {
                                    return e(this).children(t.popUpSelector).hide().show().length
                                })).removeClass(t.pathClass)
                            }(i, s), i.data("sfOptions", s), h(i, s, !0), f(a, !0), c(i),
                            function (n, t) {
                                var o = "li:has(" + t.popUpSelector + ")";
                                e.fn.hoverIntent && !t.disableHI ? n.hoverIntent(v, y, o) : n.on("mouseenter.superfish", o, v).on("mouseleave.superfish", o, y);
                                var i = "MSPointerDown.superfish";
                                p && (i = "pointerdown.superfish"), r || (i += " touchend.superfish"), l && (i += " mousedown.superfish"), n.on("focusin.superfish", "li", v).on("focusout.superfish", "li", y).on(i, "a", t, w)
                            }(i, s), a.not("." + o).superfish("hide", !0), s.onInit.call(t)
                    }))
                }))
            }
        });
    e.fn.superfish = function (n, t) {
        return C[n] ? C[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? e.error("Method " + n + " does not exist on jQuery.fn.superfish") : C.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animationType: "animate",
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        onHandleTouch: e.noop
    }
}(jQuery, window);
/*!
 * Theia Sticky Sidebar v1.3.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2014 WeCodePixels and other contributors
 * Released under the MIT license
 */
! function (i) {
    "use strict";
    i.fn.theiaStickySidebar = function (t) {
        (t = i.extend({
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            sidebarBehavior: "modern",
            wrap: "",
            exclude: ".elementor-element-overlay, .ui-resizable-handle",
            active: !0
        }, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0;
        var o = t.additionalMarginTop;

        function e(t, e) {
            return !0 === t.initialized || !(i("body").width() < t.minWidth) && (function (t, e) {
                t.initialized = !0, i("head").append(i('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each((function () {
                    var e = {};
                    e.sidebar = i(this), e.options = t || {}, e.container = i(e.options.containerSelector), 0 == e.container.size() && (e.container = e.sidebar.parent()), e.sidebar.parents().css("-webkit-transform", "none"), e.sidebar.css({
                        position: "relative",
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), e.stickySidebar = e.sidebar.find(".theiaStickySidebar"), 0 == e.stickySidebar.length && (e.sidebar.find("script").remove(), e.stickySidebar = i("<div>").addClass("theiaStickySidebar"), i(e.sidebar.children(t.wrap)).each((function (o, a) {
                        i(a).is(t.exclude) || e.stickySidebar.append(a)
                    })), e.sidebar.append(i("<div>").addClass("jegStickyHolder").append(e.stickySidebar))), e.marginTop = parseInt(e.sidebar.css("margin-top")), e.marginBottom = parseInt(e.sidebar.css("margin-bottom")), e.paddingTop = parseInt(e.sidebar.css("padding-top")), e.paddingBottom = parseInt(e.sidebar.css("padding-bottom"));
                    var a = e.stickySidebar.offset().top,
                        n = e.stickySidebar.outerHeight();

                    function d() {
                        e.fixedScrollTop = 0, e.sidebar.css({
                            "min-height": "1px"
                        }), e.stickySidebar.css({
                            position: "static",
                            width: ""
                        })
                    }

                    function r(t) {
                        var o = t.height();
                        return t.children().each((function () {
                            o = Math.max(o, i(this).height())
                        })), o
                    }
                    e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), a -= e.stickySidebar.offset().top, n = e.stickySidebar.outerHeight() - n - a, 0 == a ? (e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop = 0) : e.stickySidebarPaddingTop = 1, 0 == n ? (e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom = 0) : e.stickySidebarPaddingBottom = 1, e.previousScrollTop = null, e.fixedScrollTop = 0, d(), e.onScroll = function (o) {
                        if (t.active) {
                            if (!o.stickySidebar.is(":visible")) return;
                            if (i("body").width() < o.options.minWidth) return void d();
                            if (o.sidebar.outerWidth(!0) + 50 > o.container.width()) return void d();
                            var e = i(document).scrollTop(),
                                a = "static";
                            if (e >= o.container.offset().top + (o.paddingTop + o.marginTop - o.options.additionalMarginTop)) {
                                var n, s = o.paddingTop + o.marginTop + t.additionalMarginTop,
                                    c = o.paddingBottom + o.marginBottom + t.additionalMarginBottom,
                                    p = o.container.offset().top,
                                    b = o.container.offset().top + r(o.container),
                                    l = 0 + t.additionalMarginTop;
                                n = o.stickySidebar.outerHeight() + s + c < i(window).height() ? l + o.stickySidebar.outerHeight() : i(window).height() - o.marginBottom - o.paddingBottom - t.additionalMarginBottom;
                                var g = p - e + o.paddingTop + o.marginTop,
                                    h = b - e - o.paddingBottom - o.marginBottom,
                                    f = o.stickySidebar.offset().top - e,
                                    S = o.previousScrollTop - e;
                                "fixed" == o.stickySidebar.css("position") && "modern" == o.options.sidebarBehavior && (f += S), "legacy" == o.options.sidebarBehavior && (f = n - o.stickySidebar.outerHeight(), f = Math.max(f, n - o.stickySidebar.outerHeight())), f = S > 0 ? Math.min(f, l) : Math.max(f, n - o.stickySidebar.outerHeight()), f = Math.max(f, g), f = Math.min(f, h - o.stickySidebar.outerHeight());
                                var u = o.container.height() == o.stickySidebar.outerHeight();
                                a = (u || f != l) && (u || f != n - o.stickySidebar.outerHeight()) ? e + f - o.sidebar.offset().top - o.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                            }
                        } else a = "static";
                        if ("fixed" == a) o.stickySidebar.css({
                            position: "fixed",
                            width: o.sidebar.width(),
                            top: f,
                            left: o.sidebar.offset().left + parseInt(o.sidebar.css("padding-left"))
                        });
                        else if ("absolute" == a) {
                            var m = {};
                            "absolute" != o.stickySidebar.css("position") && (m.position = "absolute", m.top = e + f - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom), m.width = o.sidebar.width(), m.left = "", o.stickySidebar.css(m)
                        } else "static" == a && d();
                        "static" != a && 1 == o.options.updateSidebarHeight && o.sidebar.css({
                            "min-height": o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom
                        }), o.previousScrollTop = e
                    }, e.onScroll(e), i(document).scroll(function (i) {
                        return function () {
                            i.onScroll(i)
                        }
                    }(e)), i(window).resize(function (i) {
                        return function () {
                            i.stickySidebar.css({
                                position: "static"
                            }), i.onScroll(i)
                        }
                    }(e)), i(window).bind("jnews_additional_sticky_margin", (function (i, a) {
                        t.additionalMarginTop = a + o, e.options.additionalMarginTop = a + o
                    }))
                }))
            }(t, e), !0)
        }! function (t, o) {
            e(t, o) || (console.log("TST: Body width smaller than options.minWidth. Init is delayed."), i(document).scroll(function (t, o) {
                return function (a) {
                    e(t, o) && i(this).unbind(a)
                }
            }(t, o)), i(window).resize(function (t, o) {
                return function (a) {
                    e(t, o) && i(this).unbind(a)
                }
            }(t, o)))
        }(t, this), i(this).bind("theiaStickySidebarDeactivate", (function () {
            t.active = !1
        })), i(this).bind("theiaStickySidebarActivate", (function () {
            t.active = !0
        }))
    }
}(jQuery);
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function () {
    "use strict";
    var t = 0,
        e = {};

    function i(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t, this.options = i.Adapter.extend({}, i.defaults, o), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), e[this.key] = this, t += 1
    }
    i.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, i.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, i.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete e[this.key]
    }, i.prototype.disable = function () {
        return this.enabled = !1, this
    }, i.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, i.prototype.next = function () {
        return this.group.next(this)
    }, i.prototype.previous = function () {
        return this.group.previous(this)
    }, i.invokeAll = function (t) {
        var i = [];
        for (var o in e) i.push(e[o]);
        for (var n = 0, r = i.length; n < r; n++) i[n][t]()
    }, i.destroyAll = function () {
        i.invokeAll("destroy")
    }, i.disableAll = function () {
        i.invokeAll("disable")
    }, i.enableAll = function () {
        for (var t in i.Context.refreshAll(), e) e[t].enabled = !0;
        return this
    }, i.refreshAll = function () {
        i.Context.refreshAll()
    }, i.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, i.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, i.adapters = [], i.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, i.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = i
}(),
function () {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }
    var e = 0,
        i = {},
        o = window.Waypoint,
        n = window.onload;

    function r(t) {
        this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + e, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, e += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new r(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    r.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, r.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            o = this.element == this.element.window;
        t && e && !o && (this.adapter.off(".waypoints"), delete i[this.key])
    }, r.prototype.createThrottledResizeHandler = function () {
        var t = this;

        function e() {
            t.handleResize(), t.didResize = !1
        }
        this.adapter.on("resize.waypoints", (function () {
            t.didResize || (t.didResize = !0, o.requestAnimationFrame(e))
        }))
    }, r.prototype.createThrottledScrollHandler = function () {
        var t = this;

        function e() {
            t.handleScroll(), t.didScroll = !1
        }
        this.adapter.on("scroll.waypoints", (function () {
            t.didScroll && !o.isTouch || (t.didScroll = !0, o.requestAnimationFrame(e))
        }))
    }, r.prototype.handleResize = function () {
        o.Context.refreshAll()
    }, r.prototype.handleScroll = function () {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll ? o.forward : o.backward;
            for (var r in this.waypoints[i]) {
                var s = this.waypoints[i][r];
                if (null !== s.triggerPoint) {
                    var a = o.oldScroll < s.triggerPoint,
                        l = o.newScroll >= s.triggerPoint;
                    (a && l || !a && !l) && (s.queueTrigger(n), t[s.group.id] = s.group)
                }
            }
        }
        for (var h in t) t[h].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, r.prototype.innerHeight = function () {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, r.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, r.prototype.innerWidth = function () {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, r.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; o < n; o++) t[o].destroy()
    }, r.prototype.refresh = function () {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            n = {};
        for (var r in this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, c, u = this.waypoints[r][a],
                    d = u.options.offset,
                    f = u.triggerPoint,
                    w = 0,
                    y = null == f;
                u.element !== u.element.window && (w = u.adapter.offset()[s.offsetProp]), "function" == typeof d ? d = d.apply(u) : "string" == typeof d && (d = parseFloat(d), u.options.offset.indexOf("%") > -1 && (d = Math.ceil(s.contextDimension * d / 100))), l = s.contextScroll - s.contextOffset, u.triggerPoint = Math.floor(w + l - d), h = f < s.oldScroll, p = u.triggerPoint >= s.oldScroll, c = !h && !p, !y && (h && p) ? (u.queueTrigger(s.backward), n[u.group.id] = u.group) : (!y && c || y && s.oldScroll >= u.triggerPoint) && (u.queueTrigger(s.forward), n[u.group.id] = u.group)
            }
        }
        return o.requestAnimationFrame((function () {
            for (var t in n) n[t].flushTriggers()
        })), this
    }, r.findOrCreateByElement = function (t) {
        return r.findByElement(t) || new r(t)
    }, r.refreshAll = function () {
        for (var t in i) i[t].refresh()
    }, r.findByElement = function (t) {
        return i[t.waypointContextKey]
    }, window.onload = function () {
        n && n(), r.refreshAll()
    }, o.requestAnimationFrame = function (e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, o.Context = r
}(),
function () {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }
    var i = {
            vertical: {},
            horizontal: {}
        },
        o = window.Waypoint;

    function n(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
    }
    n.prototype.add = function (t) {
        this.waypoints.push(t)
    }, n.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, n.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; r < s; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }, n.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, n.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, n.prototype.remove = function (t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, n.prototype.first = function () {
        return this.waypoints[0]
    }, n.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, n.findOrCreate = function (t) {
        return i[t.axis][t.name] || new n(t)
    }, o.Group = n
}(),
function () {
    "use strict";
    var t = window.jQuery,
        e = window.Waypoint;

    function i(e) {
        this.$element = t(e)
    }
    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function (t, e) {
        i.prototype[e] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[e].apply(this.$element, t)
        }
    })), t.each(["extend", "inArray", "isEmptyObject"], (function (e, o) {
        i[o] = t[o]
    })), e.adapters.push({
        name: "jquery",
        Adapter: i
    }), e.Adapter = i
}(),
function () {
    "use strict";
    var t = window.Waypoint;

    function e(e) {
        return function () {
            var i = [],
                o = arguments[0];
            return e.isFunction(arguments[0]) && ((o = e.extend({}, arguments[1])).handler = arguments[0]), this.each((function () {
                var n = e.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = e(this).closest(n.context)[0]), i.push(new t(n))
            })), i
        }
    }
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}();
/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
! function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function (e) {
    "use strict";
    var t = e.scrollTo = function (t, o, n) {
        return e(window).scrollTo(t, o, n)
    };

    function o(t) {
        return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function n(t) {
        return e.isFunction(t) || e.isPlainObject(t) ? t : {
            top: t,
            left: t
        }
    }
    return t.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    }, e.fn.scrollTo = function (r, i, s) {
        "object" == typeof i && (s = i, i = 0), "function" == typeof s && (s = {
            onAfter: s
        }), "max" === r && (r = 9e9), s = e.extend({}, t.defaults, s), i = i || s.duration;
        var a = s.queue && s.axis.length > 1;
        return a && (i /= 2), s.offset = n(s.offset), s.over = n(s.over), this.each((function () {
            if (null !== r) {
                var f, u = o(this),
                    c = u ? this.contentWindow || window : this,
                    l = e(c),
                    d = r,
                    m = {};
                switch (typeof d) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)) {
                            d = n(d);
                            break
                        }
                        d = u ? e(d) : e(d, c);
                    case "object":
                        if (0 === d.length) return;
                        (d.is || d.style) && (f = (d = e(d)).offset())
                }
                var p = e.isFunction(s.offset) && s.offset(c, d) || s.offset;
                e.each(s.axis.split(""), (function (e, o) {
                    var n = "x" === o ? "Left" : "Top",
                        r = n.toLowerCase(),
                        i = "scroll" + n,
                        x = l[i](),
                        v = t.max(c, o);
                    if (f) m[i] = f[r] + (u ? 0 : x - l.offset()[r]), s.margin && (m[i] -= parseInt(d.css("margin" + n), 10) || 0, m[i] -= parseInt(d.css("border" + n + "Width"), 10) || 0), m[i] += p[r] || 0, s.over[r] && (m[i] += d["x" === o ? "width" : "height"]() * s.over[r]);
                    else {
                        var w = d[r];
                        m[i] = w.slice && "%" === w.slice(-1) ? parseFloat(w) / 100 * v : w
                    }
                    s.limit && /^\d+$/.test(m[i]) && (m[i] = m[i] <= 0 ? 0 : Math.min(m[i], v)), !e && s.axis.length > 1 && (x === m[i] ? m = {} : a && (h(s.onAfterFirst), m = {}))
                })), h(s.onAfter)
            }

            function h(t) {
                var o = e.extend({}, s, {
                    queue: !0,
                    duration: i,
                    complete: t && function () {
                        t.call(c, d, s)
                    }
                });
                l.animate(m, o)
            }
        }))
    }, t.max = function (t, n) {
        var r = "x" === n ? "Width" : "Height",
            i = "scroll" + r;
        if (!o(t)) return t[i] - e(t)[r.toLowerCase()]();
        var s = "client" + r,
            a = t.ownerDocument || t.document,
            f = a.documentElement,
            u = a.body;
        return Math.max(f[i], u[i]) - Math.min(f[s], u[s])
    }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
        get: function (t) {
            return e(t.elem)[t.prop]()
        },
        set: function (t) {
            var o = this.get(t);
            if (t.options.interrupt && t._last && t._last !== o) return e(t.elem).stop();
            var n = Math.round(t.now);
            o !== n && (e(t.elem)[t.prop](n), t._last = this.get(t))
        }
    }, t
}));
! function (n) {
    var t = n(window),
        o = t.height();
    t.resize((function () {
        o = t.height()
    })), n.fn.parallax = function (i, e, r) {
        var u, h, l = n(this);

        function c() {
            var r = t.scrollTop();
            l.each((function () {
                var t = n(this),
                    c = t.offset().top;
                c + u(t) < r || c > r + o || l.css("backgroundPosition", i + " " + Math.round((h - r) * e) + "px")
            }))
        }
        l.each((function () {
            h = l.offset().top
        })), u = r ? function (n) {
            return n.outerHeight(!0)
        } : function (n) {
            return n.height()
        }, (arguments.length < 1 || null === i) && (i = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === r) && (r = !0), t.bind("scroll", c).resize(c), c()
    }
}(jQuery);
/*!
 * jquery.okayNav.js 2.0.4 (https://github.com/VPenkov/okayNav)
 * Author: Vergil Penkov (http://vergilpenkov.com/)
 * MIT license: https://opensource.org/licenses/MIT
 */
! function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function (i, e) {
        return void 0 === e && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(i)), n(e), e
    } : n(jQuery)
}((function (n) {
    var i = !!("object" == typeof jnews && "object" == typeof jnews.library) && jnews.library,
        e = {
            parent: "",
            toggle_icon_class: "okayNav__menu-toggle",
            toggle_icon_content: "<span /><span /><span />",
            align_right: !0,
            swipe_enabled: !0,
            threshold: 50,
            resize_delay: 10,
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
            itemHidden: function () {},
            itemDisplayed: function () {}
        };

    function t(t, o) {
        var a = this;
        a.options = n.extend({}, e, o), a.navigation = n(t), a.document = n(document), a.window = n(window), "" == a.options.parent && (this.options.parent = this.navigation.parent()), a.nav_open = !1, a.parent_full_width = 0, a.radCoef = 180 / Math.PI, a.sTouch = {
            x: 0,
            y: 0
        }, a.cTouch = {
            x: 0,
            y: 0
        }, a.sTime = 0, a.nav_position = 0, a.percent_open = 0, a.nav_moving = !1, i && (a.jnewsLibrary = i, a.init())
    }
    t.prototype = {
        init: function () {
            var i = this;
            n("body").addClass("okayNav-loaded"), i.navigation.addClass("okayNav loaded").children("ul").addClass("okayNav__nav--visible"), i.options.align_right ? i.navigation.append('<ul class="okayNav__nav--invisible transition-enabled nav-right" />').append('<a href="#" class="' + i.options.toggle_icon_class + ' okay-invisible">' + i.options.toggle_icon_content + "</a>") : i.navigation.prepend('<ul class="okayNav__nav--invisible transition-enabled nav-left" />').prepend('<a href="#" class="' + i.options.toggle_icon_class + ' okay-invisible">' + i.options.toggle_icon_content + "</a>"), i.nav_visible = i.navigation.children(".okayNav__nav--visible"), i.nav_invisible = i.navigation.children(".okayNav__nav--invisible"), i.toggle_icon = i.navigation.children("." + i.options.toggle_icon_class), i.toggle_icon_width = i.toggle_icon.outerWidth(!0), i.default_width = i.getChildrenWidth(i.navigation), i.parent_full_width = n(i.options.parent).outerWidth(!0), i.last_visible_child_width = 0, i.initEvents(), i.nav_visible.contents().filter((function () {
                return this.nodeType = Node.TEXT_NODE && !1 === /\S/.test(this.nodeValue)
            })).remove(), 1 == i.options.swipe_enabled && i.initSwipeEvents()
        },
        initEvents: function () {
            var i = this;
            i.options.parent.on("click.okayNav", (function (e) {
                var t = n(e.target);
                !0 === i.nav_open && 0 == t.closest(".okayNav").length && i.closeInvisibleNav(), t.hasClass(i.options.toggle_icon_class) && (e.preventDefault(), i.toggleInvisibleNav())
            })), n(document).on("mouseup.okayNav", (function (e) {
                n(e.target);
                !n(e.target).parents(".okayNav").length > 0 && i.closeInvisibleNav()
            }));
            var e = i._debounce((function () {
                i.recalcNav()
            }), i.options.recalc_delay);
            i.window.on("load.okayNav ready.okayNav resize.okayNav", e), n(document).on("ready.okayNav", e), e()
        },
        initSwipeEvents: function () {
            var i = this;
            i.document.on("touchstart.okayNav", (function (e) {
                if (i.nav_invisible.removeClass("transition-enabled"), 1 == e.originalEvent.touches.length) {
                    var t = e.originalEvent.touches[0];
                    (t.pageX < 25 && 0 == i.options.align_right || t.pageX > n(i.options.parent).outerWidth(!0) - 25 && 1 == i.options.align_right || !0 === i.nav_open) && (i.sTouch.x = i.cTouch.x = t.pageX, i.sTouch.y = i.cTouch.y = t.pageY, i.sTime = Date.now())
                }
            })).on("touchmove.okayNav", (function (n) {
                var e = n.originalEvent.touches[0];
                i._triggerMove(e.pageX, e.pageY), i.nav_moving = !0
            })).on("touchend.okayNav", (function (n) {
                i.sTouch = {
                    x: 0,
                    y: 0
                }, i.cTouch = {
                    x: 0,
                    y: 0
                }, i.sTime = 0, i.percent_open > 100 - i.options.threshold ? (i.nav_position = 0, i.closeInvisibleNav()) : 1 == i.nav_moving && (i.nav_position = i.nav_invisible.width(), i.openInvisibleNav()), i.nav_moving = !1, i.nav_invisible.addClass("transition-enabled")
            }))
        },
        _getDirection: function (n) {
            return this.options.align_right ? n > 0 ? -1 : 1 : n < 0 ? -1 : 1
        },
        _triggerMove: function (n, i) {
            var e = this;
            e.cTouch.x = n, e.cTouch.y = i;
            var t = Date.now(),
                o = e.cTouch.x - e.sTouch.x,
                a = e.cTouch.y - e.sTouch.y,
                s = a * a,
                l = Math.sqrt(o * o + s),
                v = Math.sqrt(s),
                r = Math.asin(Math.sin(v / l)) * e.radCoef;
            e.sTime;
            if (e.sTouch.x = n, e.sTouch.y = i, r < 20) {
                var c = e._getDirection(o),
                    d = e.nav_position + c * l,
                    p = e.nav_invisible.width(),
                    u = 0;
                d < 0 ? u = -d : d > p && (u = p - d);
                var _ = (p - (e.nav_position + c * l + u)) / p * 100;
                e.nav_position += c * l + u, e.percent_open = _
            }
        },
        getParent: function () {
            return this.options.parent
        },
        getVisibleNav: function () {
            return this.nav_visible
        },
        getInvisibleNav: function () {
            return this.nav_invisible
        },
        getNavToggleIcon: function () {
            return this.toggle_icon
        },
        _debounce: function (n, i, e) {
            var t, o = this;
            return function () {
                var i = this,
                    a = arguments,
                    s = function () {
                        t && o.jnewsLibrary.cancelAnimationFrame.call(o.jnewsLibrary.win, t), e || n.apply(i, a)
                    },
                    l = e && !t;
                t && o.jnewsLibrary.cancelAnimationFrame.call(o.jnewsLibrary.win, t), t = o.jnewsLibrary.requestAnimationFrame.call(o.jnewsLibrary.win, s), l && n.apply(i, a)
            }
        },
        openInvisibleNav: function () {
            var n = this;
            n.options.enable_swipe || n.options.beforeOpen.call(), n.toggle_icon.addClass("icon--active"), n.nav_invisible.addClass("nav-open"), n.nav_open = !0, n.options.afterOpen.call()
        },
        closeInvisibleNav: function () {
            var n = this;
            n.options.enable_swipe || n.options.beforeClose.call(), n.toggle_icon.removeClass("icon--active"), n.nav_invisible.removeClass("nav-open"), n.nav_open = !1, n.options.afterClose.call()
        },
        toggleInvisibleNav: function () {
            var n = this;
            n.nav_open ? n.closeInvisibleNav() : n.openInvisibleNav()
        },
        getChildrenWidth: function (i) {
            for (var e = 0, t = n(i).children(), o = 0; o < t.length; o++) e += n(t[o]).outerWidth(!0);
            return e
        },
        getVisibleItemCount: function () {
            return n("li", this.nav_visible).length
        },
        getHiddenItemCount: function () {
            return n("li", this.nav_invisible).length
        },
        recalcNav: function () {
            var i = this,
                e = n(i.options.parent).outerWidth(!0),
                t = i.getChildrenWidth(i.options.parent),
                o = i.navigation.outerWidth(!0),
                a = i.getVisibleItemCount(),
                s = i.nav_visible.outerWidth(!0) + i.toggle_icon_width,
                l = t + i.last_visible_child_width + i.toggle_icon_width;
            if (e > t - o + i.default_width) return i._expandAllItems(), void i.toggle_icon.addClass("okay-invisible");
            a > 0 && o <= s && e <= l && i._collapseNavItem(), e > l + i.toggle_icon_width + 15 && i._expandNavItem(), 0 == i.getHiddenItemCount() ? i.toggle_icon.addClass("okay-invisible") : i.toggle_icon.removeClass("okay-invisible")
        },
        _collapseNavItem: function () {
            var i = this,
                e = n("li:last-child", i.nav_visible);
            i.last_visible_child_width = e.outerWidth(!0), i.document.trigger("okayNav:collapseItem", e), e.detach().prependTo(i.nav_invisible), i.options.itemHidden.call(), i.jnewsLibrary.requestAnimationFrame.call(i.jnewsLibrary.win, (function () {
                i.recalcNav()
            }))
        },
        _expandNavItem: function () {
            var i = this,
                e = n("li:first-child", i.nav_invisible);
            i.document.trigger("okayNav:expandItem", e), e.detach().appendTo(i.nav_visible), i.options.itemDisplayed.call()
        },
        _expandAllItems: function () {
            var i = this;
            n("li", i.nav_invisible).detach().appendTo(i.nav_visible), i.options.itemDisplayed.call()
        },
        _collapseAllItems: function () {
            var i = this;
            n("li", i.nav_visible).detach().appendTo(i.nav_invisible), i.options.itemHidden.call()
        },
        destroy: function () {
            var i = this;
            n("li", i.nav_invisible).appendTo(i.nav_visible), i.nav_invisible.remove(), i.nav_visible.removeClass("okayNav__nav--visible"), i.toggle_icon.remove(), i.document.unbind(".okayNav"), i.window.unbind(".okayNav")
        }
    }, n.fn.okayNav = function (e) {
        var o, a = arguments;
        return void 0 === e || "object" == typeof e ? this.each((function () {
            var o = this;
            i && i.requestAnimationFrame.call(i.win, (function () {
                n.data(o, "plugin_okayNav") || n.data(o, "plugin_okayNav", new t(o, e))
            }))
        })) : "string" == typeof e && "_" !== e[0] && "init" !== e ? (this.each((function () {
            var s = this;
            i && i.requestAnimationFrame.call(i.win, (function () {
                var i = n.data(s, "plugin_okayNav");
                i instanceof t && "function" == typeof i[e] && (o = i[e].apply(i, Array.prototype.slice.call(a, 1))), "destroy" === e && n.data(s, "plugin_okayNav", null)
            }))
        })), void 0 !== o ? o : this) : void 0
    }
}));
/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}((function (e) {
    var t, i, n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var s = n.length; s;) e.event.fixHooks[n[--s]] = e.event.mouseHooks;
    var a = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function () {
            if (this.addEventListener)
                for (var t = o.length; t;) this.addEventListener(o[--t], h, !1);
            else this.onmousewheel = h;
            e.data(this, "mousewheel-line-height", a.getLineHeight(this)), e.data(this, "mousewheel-page-height", a.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var t = o.length; t;) this.removeEventListener(o[--t], h, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function (t) {
            var i = e(t),
                n = i["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function (t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };

    function h(n) {
        var o = n || window.event,
            s = l.call(arguments, 1),
            h = 0,
            f = 0,
            d = 0,
            c = 0,
            m = 0,
            g = 0;
        if ((n = e.event.fix(o)).type = "mousewheel", "detail" in o && (d = -1 * o.detail), "wheelDelta" in o && (d = o.wheelDelta), "wheelDeltaY" in o && (d = o.wheelDeltaY), "wheelDeltaX" in o && (f = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (f = -1 * d, d = 0), h = 0 === d ? f : d, "deltaY" in o && (h = d = -1 * o.deltaY), "deltaX" in o && (f = o.deltaX, 0 === d && (h = -1 * f)), 0 !== d || 0 !== f) {
            if (1 === o.deltaMode) {
                var w = e.data(this, "mousewheel-line-height");
                h *= w, d *= w, f *= w
            } else if (2 === o.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                h *= v, d *= v, f *= v
            }
            if (c = Math.max(Math.abs(d), Math.abs(f)), (!i || c < i) && (i = c, u(o, c) && (i /= 40)), u(o, c) && (h /= 40, f /= 40, d /= 40), h = Math[h >= 1 ? "floor" : "ceil"](h / i), f = Math[f >= 1 ? "floor" : "ceil"](f / i), d = Math[d >= 1 ? "floor" : "ceil"](d / i), a.settings.normalizeOffset && this.getBoundingClientRect) {
                var p = this.getBoundingClientRect();
                m = n.clientX - p.left, g = n.clientY - p.top
            }
            return n.deltaX = f, n.deltaY = d, n.deltaFactor = i, n.offsetX = m, n.offsetY = g, n.deltaMode = 0, s.unshift(n, h, f, d), t && clearTimeout(t), t = setTimeout(r, 200), (e.event.dispatch || e.event.handle).apply(this, s)
        }
    }

    function r() {
        i = null
    }

    function u(e, t) {
        return a.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}));
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function (e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function a(e) {
        var t = C.className,
            n = T._config.classPrefix || "";
        if (E && (t = t.baseVal), T._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        T._config.enableClasses && (t += " " + n + e.join(" " + n), E ? C.className.baseVal = t : C.className = t)
    }

    function o(e, t) {
        if ("object" == typeof e)
            for (var n in e) k(e, n) && o(n, e[n]);
        else {
            var r = (e = e.toLowerCase()).split("."),
                i = T[r[0]];
            if (2 == r.length && (i = i[r[1]]), void 0 !== i) return T;
            t = "function" == typeof t ? t() : t, 1 == r.length ? T[r[0]] = t : (!T[r[0]] || T[r[0]] instanceof Boolean || (T[r[0]] = new Boolean(T[r[0]])), T[r[0]][r[1]] = t), a([(t && 0 != t ? "" : "no-") + r.join("-")]), T._trigger(e, t)
        }
        return T
    }

    function i() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function s(e) {
        return e.replace(/([a-z])-([a-z])/g, (function (e, t, n) {
            return t + n.toUpperCase()
        })).replace(/^-/, "")
    }

    function c(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l(e, n, r, a) {
        var o, s, c, l, d = "modernizr",
            u = i("div"),
            f = function () {
                var e = t.body;
                return e || ((e = i(E ? "svg" : "body")).fake = !0), e
            }();
        if (parseInt(r, 10))
            for (; r--;)(c = i("div")).id = a ? a[r] : d + (r + 1), u.appendChild(c);
        return (o = i("style")).type = "text/css", o.id = "s" + d, (f.fake ? f : u).appendChild(o), f.appendChild(u), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), u.id = d, f.fake && (f.style.background = "", f.style.overflow = "hidden", l = C.style.overflow, C.style.overflow = "hidden", C.appendChild(f)), s = n(u, e), f.fake ? (f.parentNode.removeChild(f), C.style.overflow = l, C.offsetHeight) : u.parentNode.removeChild(u), !!s
    }

    function d(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function u(e) {
        return e.replace(/([A-Z])/g, (function (e, t) {
            return "-" + t.toLowerCase()
        })).replace(/^ms-/, "-ms-")
    }

    function f(t, n, r) {
        var a;
        if ("getComputedStyle" in e) {
            a = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== a) r && (a = a.getPropertyValue(r));
            else if (o) {
                o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else a = !n && t.currentStyle && t.currentStyle[r];
        return a
    }

    function p(t, r) {
        var a = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; a--;)
                if (e.CSS.supports(u(t[a]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; a--;) o.push("(" + u(t[a]) + ":" + r + ")");
            return l("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", (function (e) {
                return "absolute" == f(e, null, "position")
            }))
        }
        return n
    }

    function m(e, t, a, o) {
        function l() {
            u && (delete V.style, delete V.modElem)
        }
        if (o = !r(o, "undefined") && o, !r(a, "undefined")) {
            var d = p(e, a);
            if (!r(d, "undefined")) return d
        }
        for (var u, f, m, g, h, v = ["modernizr", "tspan", "samp"]; !V.style && v.length;) u = !0, V.modElem = i(v.shift()), V.style = V.modElem.style;
        for (m = e.length, f = 0; m > f; f++)
            if (g = e[f], h = V.style[g], c(g, "-") && (g = s(g)), V.style[g] !== n) {
                if (o || r(a, "undefined")) return l(), "pfx" != t || g;
                try {
                    V.style[g] = a
                } catch (e) {}
                if (V.style[g] != h) return l(), "pfx" != t || g
            } return l(), !1
    }

    function g(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + D.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? m(s, t, a, o) : function (e, t, n) {
            var a;
            for (var o in e)
                if (e[o] in t) return !1 === n ? e[o] : r(a = t[e[o]], "function") ? d(a, n || t) : a;
            return !1
        }(s = (e + " " + _.join(i + " ") + i).split(" "), t, n)
    }

    function h(e, t) {
        var n = e.deleteDatabase(t);
        n.onsuccess = function () {
            o("indexeddb.deletedatabase", !0)
        }, n.onerror = function () {
            o("indexeddb.deletedatabase", !1)
        }
    }

    function v(e, t, r) {
        return g(e, n, n, t, r)
    }
    var y = [],
        b = [],
        x = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout((function () {
                    t(n[e])
                }), 0)
            },
            addTest: function (e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function (e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        T = function () {};
    T.prototype = x, (T = new T).addTest("applicationcache", "applicationCache" in e), T.addTest("geolocation", "geolocation" in navigator), T.addTest("history", (function () {
        var t = navigator.userAgent;
        return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol) && (e.history && "pushState" in e.history)
    })), T.addTest("postmessage", "postMessage" in e), T.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var w = !1;
    try {
        w = "WebSocket" in e && 2 === e.WebSocket.CLOSING
    } catch (e) {}
    T.addTest("websockets", w), T.addTest("localstorage", (function () {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (e) {
            return !1
        }
    })), T.addTest("sessionstorage", (function () {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (e) {
            return !1
        }
    })), T.addTest("websqldatabase", "openDatabase" in e), T.addTest("webworkers", "Worker" in e);
    var S = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    x._prefixes = S;
    var C = t.documentElement,
        E = "svg" === C.nodeName.toLowerCase();
    E || function (e, t) {
        function n() {
            var e = g.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function r(e) {
            var t = m[e[f]];
            return t || (t = {}, p++, e[f] = p, m[p] = t), t
        }

        function a(e, n, a) {
            return n || (n = t), c ? n.createElement(e) : (a || (a = r(n)), !(o = a.cache[e] ? a.cache[e].cloneNode() : u.test(e) ? (a.cache[e] = a.createElem(e)).cloneNode() : a.createElem(e)).canHaveChildren || d.test(e) || o.tagUrn ? o : a.frag.appendChild(o));
            var o
        }

        function o(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return g.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-:]+/g, (function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            })) + ");return n}")(g, t.frag)
        }

        function i(e) {
            e || (e = t);
            var n = r(e);
            return !g.shivCSS || s || n.hasCSS || (n.hasCSS = !! function (e, t) {
                var n = e.createElement("p"),
                    r = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
            }(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || o(e, n), e
        }
        var s, c, l = e.html5 || {},
            d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            f = "_html5shiv",
            p = 0,
            m = {};
        ! function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", s = "hidden" in e, c = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (e) {
                s = !0, c = !0
            }
        }();
        var g = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3",
            shivCSS: !1 !== l.shivCSS,
            supportsUnknownElements: c,
            shivMethods: !1 !== l.shivMethods,
            type: "default",
            shivDocument: i,
            createElement: a,
            createDocumentFragment: function (e, a) {
                if (e || (e = t), c) return e.createDocumentFragment();
                for (var o = (a = a || r(e)).frag.cloneNode(), i = 0, s = n(), l = s.length; l > i; i++) o.createElement(s[i]);
                return o
            },
            addElements: function (e, t) {
                var n = g.elements;
                "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), g.elements = n + " " + e, i(t)
            }
        };
        e.html5 = g, i(t), "object" == typeof module && module.exports && (module.exports = g)
    }(void 0 !== e ? e : this, t);
    var k, P = "Moz O ms Webkit",
        _ = x._config.usePrefixes ? P.toLowerCase().split(" ") : [];
    x._domPrefixes = _,
        function () {
            var e = {}.hasOwnProperty;
            k = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
                return t in e && r(e.constructor.prototype[t], "undefined")
            } : function (t, n) {
                return e.call(t, n)
            }
        }(), x._l = {}, x.on = function (e, t) {
            this._l[e] || (this._l[e] = []), this._l[e].push(t), T.hasOwnProperty(e) && setTimeout((function () {
                T._trigger(e, T[e])
            }), 0)
        }, x._trigger = function (e, t) {
            if (this._l[e]) {
                var n = this._l[e];
                setTimeout((function () {
                    var e;
                    for (e = 0; e < n.length; e++)(0, n[e])(t)
                }), 0), delete this._l[e]
            }
        }, T._q.push((function () {
            x.addTest = o
        }));
    var z = function () {
        var e = !("onblur" in t.documentElement);
        return function (t, r) {
            var a;
            return !!t && (r && "string" != typeof r || (r = i(r || "div")), !(a = (t = "on" + t) in r) && e && (r.setAttribute || (r = i("div")), r.setAttribute(t, ""), a = "function" == typeof r[t], r[t] !== n && (r[t] = n), r.removeAttribute(t)), a)
        }
    }();
    x.hasEvent = z, T.addTest("hashchange", (function () {
        return !1 !== z("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    })), T.addTest("audio", (function () {
        var e = i("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (e) {}
        return t
    })), T.addTest("canvas", (function () {
        var e = i("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    })), T.addTest("canvastext", (function () {
        return !1 !== T.canvas && "function" == typeof i("canvas").getContext("2d").fillText
    })), T.addTest("video", (function () {
        var e = i("video"),
            t = !1;
        try {
            (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (e) {}
        return t
    })), T.addTest("webgl", (function () {
        var t = i("canvas"),
            n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
        return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
    })), T.addTest("cssgradients", (function () {
        for (var e, t = "background-image:", n = "", r = 0, a = S.length - 1; a > r; r++) e = 0 === r ? "to " : "", n += t + S[r] + "linear-gradient(" + e + "left top, #9f9, white);";
        T._config.usePrefixes && (n += t + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
        var o = i("a").style;
        return o.cssText = n, ("" + o.backgroundImage).indexOf("gradient") > -1
    })), T.addTest("multiplebgs", (function () {
        var e = i("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    })), T.addTest("opacity", (function () {
        var e = i("a").style;
        return e.cssText = S.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    })), T.addTest("rgba", (function () {
        var e = i("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    })), T.addTest("inlinesvg", (function () {
        var e = i("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    }));
    var N = i("input"),
        A = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        R = {};
    T.input = function (t) {
        for (var n = 0, r = t.length; r > n; n++) R[t[n]] = !!(t[n] in N);
        return R.list && (R.list = !(!i("datalist") || !e.HTMLDataListElement)), R
    }(A);
    var $ = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        M = {};
    T.inputtypes = function (e) {
        for (var r, a, o, i = e.length, s = 0; i > s; s++) N.setAttribute("type", r = e[s]), (o = "text" !== N.type && "style" in N) && (N.value = "1)", N.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && N.style.WebkitAppearance !== n ? (C.appendChild(N), o = (a = t.defaultView).getComputedStyle && "textfield" !== a.getComputedStyle(N, null).WebkitAppearance && 0 !== N.offsetHeight, C.removeChild(N)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? N.checkValidity && !1 === N.checkValidity() : "1)" != N.value)), M[e[s]] = !!o;
        return M
    }($), T.addTest("hsla", (function () {
        var e = i("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)", c(e.backgroundColor, "rgba") || c(e.backgroundColor, "hsla")
    }));
    var L = "CSS" in e && "supports" in e.CSS,
        O = "supportsCSS" in e;
    T.addTest("supports", L || O);
    var B = {}.toString;
    T.addTest("svgclippaths", (function () {
        return !!t.createElementNS && /SVGClipPath/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    })), T.addTest("smil", (function () {
        return !!t.createElementNS && /SVGAnimate/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
    }));
    var j = function () {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function (e) {
            var n = t(e);
            return n && n.matches || !1
        } : function (t) {
            var n = !1;
            return l("@media " + t + " { #modernizr { position: absolute; } }", (function (t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            })), n
        }
    }();
    x.mq = j;
    var F = x.testStyles = l,
        I = function () {
            var e = navigator.userAgent,
                t = e.match(/w(eb)?osbrowser/gi),
                n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
            return t || n
        }();
    I ? T.addTest("fontface", !1) : F('@font-face {font-family:"font";src:url("https://")}', (function (e, n) {
        var r = t.getElementById("smodernizr"),
            a = r.sheet || r.styleSheet,
            o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "",
            i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        T.addTest("fontface", i)
    })), F('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', (function (e) {
        T.addTest("generatedcontent", e.offsetHeight >= 6)
    }));
    var D = x._config.usePrefixes ? P.split(" ") : [];
    x._cssomPrefixes = D;
    var W = function (t) {
        var r, a = S.length,
            o = e.CSSRule;
        if (void 0 === o) return n;
        if (!t) return !1;
        if ((r = (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in o) return "@" + t;
        for (var i = 0; a > i; i++) {
            var s = S[i];
            if (s.toUpperCase() + "_" + r in o) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    x.atRule = W;
    var q = {
        elem: i("modernizr")
    };
    T._q.push((function () {
        delete q.elem
    }));
    var V = {
        style: q.elem.style
    };
    T._q.unshift((function () {
        delete V.style
    }));
    var H = x.testProp = function (e, t, r) {
        return m([e], n, t, r)
    };
    T.addTest("textshadow", H("textShadow", "1px 1px")), x.testAllProps = g;
    var U = x.prefixed = function (e, t, n) {
        return 0 === e.indexOf("@") ? W(e) : (-1 != e.indexOf("-") && (e = s(e)), t ? g(e, t, n) : g(e, "pfx"))
    };
    T.addAsyncTest((function () {
            var t;
            try {
                t = U("indexedDB", e)
            } catch (e) {}
            if (t) {
                var n = "modernizr-" + Math.random(),
                    r = t.open(n);
                r.onerror = function () {
                    r.error && "InvalidStateError" === r.error.name ? o("indexeddb", !1) : (o("indexeddb", !0), h(t, n))
                }, r.onsuccess = function () {
                    o("indexeddb", !0), h(t, n)
                }
            } else o("indexeddb", !1)
        })), x.testAllProps = v, T.addTest("cssanimations", v("animationName", "a", !0)), T.addTest("backgroundsize", v("backgroundSize", "100%", !0)), T.addTest("borderimage", v("borderImage", "url() 1", !0)), T.addTest("borderradius", v("borderRadius", "0px", !0)),
        function () {
            T.addTest("csscolumns", (function () {
                var e = !1,
                    t = v("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e))
                } catch (e) {}
                return e
            }));
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = v("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || v(n[r])), T.addTest("csscolumns." + e, t)
        }(), T.addTest("boxshadow", v("boxShadow", "1px 1px", !0)), T.addTest("flexbox", v("flexBasis", "1px", !0)), T.addTest("cssreflections", v("boxReflect", "above", !0)), T.addTest("csstransforms", (function () {
            return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
        })), T.addTest("csstransforms3d", (function () {
            var e = !!v("perspective", "1px", !0),
                t = T._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in C.style)) {
                var n;
                T.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), F("#modernizr{width:0;height:0}" + (n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"), (function (t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                }))
            }
            return e
        })), T.addTest("csstransitions", v("transition", "all", !0)),
        function () {
            var e, t, n, a, o, i;
            for (var s in b)
                if (b.hasOwnProperty(s)) {
                    if (e = [], (t = b[s]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) 1 === (i = e[o].split(".")).length ? T[i[0]] = a : (!T[i[0]] || T[i[0]] instanceof Boolean || (T[i[0]] = new Boolean(T[i[0]])), T[i[0]][i[1]] = a), y.push((a ? "" : "no-") + i.join("-"))
                }
        }(), a(y), delete x.addTest, delete x.addAsyncTest;
    for (var G = 0; G < T._q.length; G++) T._q[G]();
    e.Modernizr = T
}(window, document);
! function (t, i) {
    "use strict";
    jQuery.fn[i] = function (t) {
        return t ? this.bind("resize", (e = t, function () {
            var t = this,
                i = arguments;

            function s() {
                n || e.apply(t, i), u = null
            }
            u ? clearTimeout(u) : n && e.apply(t, i), u = setTimeout(s, r || 50)
        })) : this.trigger(i);
        var e, r, n, u
    }
}(jQuery, "smartresize");
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com
Version 1.7.0
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2017 Harvest http://getharvest.com
MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/
(function () {
    var t, e, s, i, r = {}.hasOwnProperty;
    i = function () {
        function t() {
            this.options_index = 0, this.parsed = []
        }
        return t.prototype.add_node = function (t) {
            return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
        }, t.prototype.add_group = function (t) {
            var e, s, i, r, n, o;
            for (e = this.parsed.length, this.parsed.push({
                    array_index: e,
                    group: !0,
                    label: this.escapeExpression(t.label),
                    title: t.title ? t.title : void 0,
                    children: 0,
                    disabled: t.disabled,
                    classes: t.className
                }), o = [], i = 0, r = (n = t.childNodes).length; i < r; i++) s = n[i], o.push(this.add_option(s, e, t.disabled));
            return o
        }, t.prototype.add_option = function (t, e, s) {
            if ("OPTION" === t.nodeName.toUpperCase()) return "" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: t.value,
                text: t.text,
                html: t.innerHTML,
                title: t.title ? t.title : void 0,
                selected: t.selected,
                disabled: !0 === s ? s : t.disabled,
                group_array_index: e,
                group_label: null != e ? this.parsed[e].label : null,
                classes: t.className,
                style: t.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1
        }, t.prototype.escapeExpression = function (t) {
            var e, s;
            return null == t || !1 === t ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, s = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(s, (function (t) {
                return e[t] || "&amp;"
            }))) : t
        }, t
    }(), i.select_to_array = function (t) {
        var e, s, r, n, o;
        for (s = new i, r = 0, n = (o = t.childNodes).length; r < n; r++) e = o[r], s.add_node(e);
        return s.parsed
    }, e = function () {
        function t(e, s) {
            var i, r;
            this.form_field = e, this.options = null != s ? s : {}, this.label_click_handler = (i = this.label_click_handler, r = this, function () {
                return i.apply(r, arguments)
            }), t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }
        return t.prototype.set_default_values = function () {
            var t = this;
            return this.click_test_action = function (e) {
                return t.test_active_click(e)
            }, this.activate_action = function (e) {
                return t.activate_field(e)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className), this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1, this.hide_results_on_select = null == this.options.hide_results_on_select || this.options.hide_results_on_select
        }, t.prototype.set_default_text = function () {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.default_text = this.escape_html(this.default_text), this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
        }, t.prototype.choice_label = function (t) {
            return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + t.group_label + "</b>" + t.html : t.html
        }, t.prototype.mouse_enter = function () {
            return this.mouse_on_container = !0
        }, t.prototype.mouse_leave = function () {
            return this.mouse_on_container = !1
        }, t.prototype.input_focus = function (t) {
            var e = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout((function () {
                    return e.container_mousedown()
                }), 50)
            } else if (!this.active_field) return this.activate_field()
        }, t.prototype.input_blur = function (t) {
            var e = this;
            if (!this.mouse_on_container) return this.active_field = !1, setTimeout((function () {
                return e.blur_test()
            }), 100)
        }, t.prototype.label_click_handler = function (t) {
            return this.is_multiple ? this.container_mousedown(t) : this.activate_field()
        }, t.prototype.results_option_build = function (t) {
            var e, s, i, r, n, o, l;
            for (e = "", r = 0, n = 0, o = (l = this.results_data).length; n < o && (i = "", "" !== (i = (s = l[n]).group ? this.result_add_group(s) : this.result_add_option(s)) && (r++, e += i), (null != t ? t.first : void 0) && (s.selected && this.is_multiple ? this.choice_build(s) : s.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(s))), !(r >= this.max_shown_results)); n++);
            return e
        }, t.prototype.result_add_option = function (t) {
            var e, s;
            return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), (s = document.createElement("li")).className = e.join(" "), s.style.cssText = t.style, s.setAttribute("data-option-array-index", t.array_index), s.innerHTML = t.search_text, t.title && (s.title = t.title), this.outerHTML(s)) : ""
        }, t.prototype.result_add_group = function (t) {
            var e, s;
            return (t.search_match || t.group_match) && t.active_options > 0 ? ((e = []).push("group-result"), t.classes && e.push(t.classes), (s = document.createElement("li")).className = e.join(" "), s.innerHTML = t.search_text, t.title && (s.title = t.title), this.outerHTML(s)) : ""
        }, t.prototype.results_update_field = function () {
            if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
        }, t.prototype.reset_single_select_options = function () {
            var t, e, s, i, r;
            for (r = [], e = 0, s = (i = this.results_data).length; e < s; e++)(t = i[e]).selected ? r.push(t.selected = !1) : r.push(void 0);
            return r
        }, t.prototype.results_toggle = function () {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, t.prototype.results_search = function (t) {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, t.prototype.winnow_results = function () {
            var t, e, s, i, r, n, o, l, h, c, _, a;
            for (this.no_results_clear(), r = 0, t = (o = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = this.get_search_regex(t), e = this.get_highlight_regex(t), c = 0, _ = (a = this.results_data).length; c < _; c++)(s = a[c]).search_match = !1, n = null, this.include_option_in_results(s) && (s.group && (s.group_match = !1, s.active_options = 0), null != s.group_array_index && this.results_data[s.group_array_index] && (0 === (n = this.results_data[s.group_array_index]).active_options && n.search_match && (r += 1), n.active_options += 1), s.search_text = s.group ? s.label : s.html, s.group && !this.group_search || (s.search_match = this.search_string_match(s.search_text, i), s.search_match && !s.group && (r += 1), s.search_match ? (o.length && (l = s.search_text.search(e), h = s.search_text.substr(0, l + o.length) + "</em>" + s.search_text.substr(l + o.length), s.search_text = h.substr(0, l) + "<em>" + h.substr(l)), null != n && (n.group_match = !0)) : null != s.group_array_index && this.results_data[s.group_array_index].search_match && (s.search_match = !0)));
            return this.result_clear_highlight(), r < 1 && o.length ? (this.update_results_content(""), this.no_results(o)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, t.prototype.get_search_regex = function (t) {
            var e, s;
            return e = this.search_contains ? "" : "^", s = this.case_sensitive_search ? "" : "i", new RegExp(e + t, s)
        }, t.prototype.get_highlight_regex = function (t) {
            var e, s;
            return e = this.search_contains ? "" : "\\b", s = this.case_sensitive_search ? "" : "i", new RegExp(e + t, s)
        }, t.prototype.search_string_match = function (t, e) {
            var s, i, r, n;
            if (e.test(t)) return !0;
            if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (i = t.replace(/\[|\]/g, "").split(" ")).length)
                for (r = 0, n = i.length; r < n; r++)
                    if (s = i[r], e.test(s)) return !0
        }, t.prototype.choices_count = function () {
            var t, e, s;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, t = 0, e = (s = this.form_field.options).length; t < e; t++) s[t].selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, t.prototype.choices_click = function (t) {
            if (t.preventDefault(), this.activate_field(), !this.results_showing && !this.is_disabled) return this.results_show()
        }, t.prototype.keydown_checker = function (t) {
            var e, s;
            switch (e = null != (s = t.which) ? s : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                case 8:
                    this.backstroke_length = this.get_search_field_value().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                    break;
                case 13:
                case 27:
                    this.results_showing && t.preventDefault();
                    break;
                case 32:
                    this.disable_search && t.preventDefault();
                    break;
                case 38:
                    t.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    t.preventDefault(), this.keydown_arrow()
            }
        }, t.prototype.keyup_checker = function (t) {
            var e, s;
            switch (e = null != (s = t.which) ? s : t.keyCode, this.search_field_scale(), e) {
                case 8:
                    this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0 ? this.keydown_backstroke() : this.pending_backstroke || (this.result_clear_highlight(), this.results_search());
                    break;
                case 13:
                    t.preventDefault(), this.results_showing && this.result_select(t);
                    break;
                case 27:
                    this.results_showing && this.results_hide();
                    break;
                case 9:
                case 16:
                case 17:
                case 18:
                case 38:
                case 40:
                case 91:
                    break;
                default:
                    this.results_search()
            }
        }, t.prototype.clipboard_event_checker = function (t) {
            var e = this;
            if (!this.is_disabled) return setTimeout((function () {
                return e.results_search()
            }), 50)
        }, t.prototype.container_width = function () {
            return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
        }, t.prototype.include_option_in_results = function (t) {
            return !(this.is_multiple && !this.display_selected_options && t.selected) && (!(!this.display_disabled_options && t.disabled) && !t.empty)
        }, t.prototype.search_results_touchstart = function (t) {
            return this.touch_started = !0, this.search_results_mouseover(t)
        }, t.prototype.search_results_touchmove = function (t) {
            return this.touch_started = !1, this.search_results_mouseout(t)
        }, t.prototype.search_results_touchend = function (t) {
            if (this.touch_started) return this.search_results_mouseup(t)
        }, t.prototype.outerHTML = function (t) {
            var e;
            return t.outerHTML ? t.outerHTML : ((e = document.createElement("div")).appendChild(t), e.innerHTML)
        }, t.prototype.get_single_html = function () {
            return '<a class="chosen-single chosen-default">\n  <span>' + this.default_text + '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
        }, t.prototype.get_multi_html = function () {
            return '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' + this.default_text + '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
        }, t.prototype.get_no_results_html = function (t) {
            return '<li class="no-results">\n  ' + this.results_none_found + " <span>" + t + "</span>\n</li>"
        }, t.browser_is_supported = function () {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent))
        }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
    }(), (t = jQuery).fn.extend({
        chosen: function (i) {
            return e.browser_is_supported() ? this.each((function (e) {
                var r, n;
                n = (r = t(this)).data("chosen"), "destroy" !== i ? n instanceof s || r.data("chosen", new s(this, i)) : n instanceof s && n.destroy()
            })) : this
        }
    }), s = function (e) {
        function s() {
            return s.__super__.constructor.apply(this, arguments)
        }
        return function (t, e) {
            for (var s in e) r.call(e, s) && (t[s] = e[s]);

            function i() {
                this.constructor = t
            }
            i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype
        }(s, e), s.prototype.setup = function () {
            return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex
        }, s.prototype.set_up_html = function () {
            var e, s;
            return (e = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), s = {
                class: e.join(" "),
                title: this.form_field.title
            }, this.form_field.id.length && (s.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", s), this.container.width(this.container_width()), this.is_multiple ? this.container.html(this.get_multi_html()) : this.container.html(this.get_single_html()), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, s.prototype.on_ready = function () {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, s.prototype.register_observers = function () {
            var t = this;
            return this.container.bind("touchstart.chosen", (function (e) {
                t.container_mousedown(e)
            })), this.container.bind("touchend.chosen", (function (e) {
                t.container_mouseup(e)
            })), this.container.bind("mousedown.chosen", (function (e) {
                t.container_mousedown(e)
            })), this.container.bind("mouseup.chosen", (function (e) {
                t.container_mouseup(e)
            })), this.container.bind("mouseenter.chosen", (function (e) {
                t.mouse_enter(e)
            })), this.container.bind("mouseleave.chosen", (function (e) {
                t.mouse_leave(e)
            })), this.search_results.bind("mouseup.chosen", (function (e) {
                t.search_results_mouseup(e)
            })), this.search_results.bind("mouseover.chosen", (function (e) {
                t.search_results_mouseover(e)
            })), this.search_results.bind("mouseout.chosen", (function (e) {
                t.search_results_mouseout(e)
            })), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", (function (e) {
                t.search_results_mousewheel(e)
            })), this.search_results.bind("touchstart.chosen", (function (e) {
                t.search_results_touchstart(e)
            })), this.search_results.bind("touchmove.chosen", (function (e) {
                t.search_results_touchmove(e)
            })), this.search_results.bind("touchend.chosen", (function (e) {
                t.search_results_touchend(e)
            })), this.form_field_jq.bind("chosen:updated.chosen", (function (e) {
                t.results_update_field(e)
            })), this.form_field_jq.bind("chosen:activate.chosen", (function (e) {
                t.activate_field(e)
            })), this.form_field_jq.bind("chosen:open.chosen", (function (e) {
                t.container_mousedown(e)
            })), this.form_field_jq.bind("chosen:close.chosen", (function (e) {
                t.close_field(e)
            })), this.search_field.bind("blur.chosen", (function (e) {
                t.input_blur(e)
            })), this.search_field.bind("keyup.chosen", (function (e) {
                t.keyup_checker(e)
            })), this.search_field.bind("keydown.chosen", (function (e) {
                t.keydown_checker(e)
            })), this.search_field.bind("focus.chosen", (function (e) {
                t.input_focus(e)
            })), this.search_field.bind("cut.chosen", (function (e) {
                t.clipboard_event_checker(e)
            })), this.search_field.bind("paste.chosen", (function (e) {
                t.clipboard_event_checker(e)
            })), this.is_multiple ? this.search_choices.bind("click.chosen", (function (e) {
                t.choices_click(e)
            })) : this.container.bind("click.chosen", (function (t) {
                t.preventDefault()
            }))
        }, s.prototype.destroy = function () {
            return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.form_field_label.length > 0 && this.form_field_label.unbind("click.chosen"), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, s.prototype.search_field_disabled = function () {
            return this.is_disabled = this.form_field.disabled || this.form_field_jq.parents("fieldset").is(":disabled"), this.container.toggleClass("chosen-disabled", this.is_disabled), this.search_field[0].disabled = this.is_disabled, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_field), this.is_disabled ? this.close_field() : this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_field)
        }, s.prototype.container_mousedown = function (e) {
            var s;
            if (!this.is_disabled) return !e || "mousedown" !== (s = e.type) && "touchstart" !== s || this.results_showing || e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close") ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, s.prototype.container_mouseup = function (t) {
            if ("ABBR" === t.target.nodeName && !this.is_disabled) return this.results_reset(t)
        }, s.prototype.search_results_mousewheel = function (t) {
            var e;
            if (t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e) return t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop())
        }, s.prototype.blur_test = function (t) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
        }, s.prototype.close_field = function () {
            return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale(), this.search_field.blur()
        }, s.prototype.activate_field = function () {
            if (!this.is_disabled) return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, s.prototype.test_active_click = function (e) {
            var s;
            return (s = t(e.target).closest(".chosen-container")).length && this.container[0] === s[0] ? this.active_field = !0 : this.close_field()
        }, s.prototype.results_build = function () {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, s.prototype.result_do_highlight = function (t) {
            var e, s, i, r, n;
            if (t.length) {
                if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), r = (i = parseInt(this.search_results.css("maxHeight"), 10)) + (n = this.search_results.scrollTop()), (e = (s = this.result_highlight.position().top + this.search_results.scrollTop()) + this.result_highlight.outerHeight()) >= r) return this.search_results.scrollTop(e - i > 0 ? e - i : 0);
                if (s < n) return this.search_results.scrollTop(s)
            }
        }, s.prototype.result_clear_highlight = function () {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, s.prototype.results_show = function () {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.get_search_field_value()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, s.prototype.update_results_content = function (t) {
            return this.search_results.html(t)
        }, s.prototype.results_hide = function () {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, s.prototype.set_tab_index = function (t) {
            var e;
            if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e
        }, s.prototype.set_label_behavior = function () {
            if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.bind("click.chosen", this.label_click_handler)
        }, s.prototype.show_search_field_default = function () {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, s.prototype.search_results_mouseup = function (e) {
            var s;
            if ((s = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()).length) return this.result_highlight = s, this.result_select(e), this.search_field.focus()
        }, s.prototype.search_results_mouseover = function (e) {
            var s;
            if (s = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()) return this.result_do_highlight(s)
        }, s.prototype.search_results_mouseout = function (e) {
            if (t(e.target).hasClass("active-result")) return this.result_clear_highlight()
        }, s.prototype.choice_build = function (e) {
            var s, i, r = this;
            return s = t("<li />", {
                class: "search-choice"
            }).html("<span>" + this.choice_label(e) + "</span>"), e.disabled ? s.addClass("search-choice-disabled") : ((i = t("<a />", {
                class: "search-choice-close",
                "data-option-array-index": e.array_index
            })).bind("click.chosen", (function (t) {
                return r.choice_destroy_link_click(t)
            })), s.append(i)), this.search_container.before(s)
        }, s.prototype.choice_destroy_link_click = function (e) {
            if (e.preventDefault(), e.stopPropagation(), !this.is_disabled) return this.choice_destroy(t(e.target))
        }, s.prototype.choice_destroy = function (t) {
            if (this.result_deselect(t[0].getAttribute("data-option-array-index"))) return this.active_field ? this.search_field.focus() : this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()
        }, s.prototype.results_reset = function () {
            if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.trigger_form_field_change(), this.active_field) return this.results_hide()
        }, s.prototype.results_reset_cleanup = function () {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, s.prototype.result_select = function (t) {
            var e, s;
            if (this.result_highlight) return e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), (s = this.results_data[e[0].getAttribute("data-option-array-index")]).selected = !0, this.form_field.options[s.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(s) : this.single_set_selected_text(this.choice_label(s)), this.is_multiple && (!this.hide_results_on_select || t.metaKey || t.ctrlKey) || (this.results_hide(), this.show_search_field_default()), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.trigger_form_field_change({
                selected: this.form_field.options[s.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale())
        }, s.prototype.single_set_selected_text = function (t) {
            return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t)
        }, s.prototype.result_deselect = function (t) {
            var e;
            return e = this.results_data[t], !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.trigger_form_field_change({
                deselected: this.form_field.options[e.options_index].value
            }), this.search_field_scale(), !0)
        }, s.prototype.single_deselect_control_build = function () {
            if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
        }, s.prototype.get_search_field_value = function () {
            return this.search_field.val()
        }, s.prototype.get_search_text = function () {
            return this.escape_html(t.trim(this.get_search_field_value()))
        }, s.prototype.escape_html = function (e) {
            return t("<div/>").text(e).html()
        }, s.prototype.winnow_results_set_highlight = function () {
            var t, e;
            if (null != (t = (e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result")).length ? e.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(t)
        }, s.prototype.no_results = function (t) {
            var e;
            return e = this.get_no_results_html(t), this.search_results.append(e), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, s.prototype.no_results_clear = function () {
            return this.search_results.find(".no-results").remove()
        }, s.prototype.keydown_arrow = function () {
            var t;
            return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
        }, s.prototype.keyup_arrow = function () {
            var t;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show()
        }, s.prototype.keydown_backstroke = function () {
            var t;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last()).length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
        }, s.prototype.clear_backstroke = function () {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, s.prototype.search_field_scale = function () {
            var e, s, i, r, n, o, l, h;
            if (this.is_multiple) {
                for (r = {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px",
                        display: "none",
                        whiteSpace: "pre"
                    }, l = 0, h = (n = ["fontSize", "fontStyle", "fontWeight", "fontFamily", "lineHeight", "textTransform", "letterSpacing"]).length; l < h; l++) r[i = n[l]] = this.search_field.css(i);
                return (s = t("<div />").css(r)).text(this.get_search_field_value()), t("body").append(s), o = s.width() + 25, s.remove(), e = this.container.outerWidth(), o = Math.min(e - 10, o), this.search_field.width(o)
            }
        }, s.prototype.trigger_form_field_change = function (t) {
            return this.form_field_jq.trigger("input", t), this.form_field_jq.trigger("change", t)
        }, s
    }(e)
}).call(this);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function (e) {
    var t, i, n, o, a, r, s = "Close",
        l = "BeforeClose",
        c = "MarkupParse",
        d = "Open",
        p = "Change",
        u = "mfp",
        f = ".mfp",
        m = "mfp-ready",
        g = "mfp-removing",
        v = "mfp-prevent-close",
        h = function () {},
        C = !!window.jQuery,
        y = e(window),
        w = function (e, i) {
            t.ev.on(u + e + f, i)
        },
        b = function (t, i, n, o) {
            var a = document.createElement("div");
            return a.className = "mfp-" + t, n && (a.innerHTML = n), o ? i && i.appendChild(a) : (a = e(a), i && a.appendTo(i)), a
        },
        I = function (i, n) {
            t.ev.triggerHandler(u + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
        },
        x = function (i) {
            return i === r && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), r = i), t.currTemplate.closeBtn
        },
        k = function () {
            e.magnificPopup.instance || ((t = new h).init(), e.magnificPopup.instance = t)
        };
    h.prototype = {
        constructor: h,
        init: function () {
            var i = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = function () {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
        },
        open: function (i) {
            var o;
            if (!1 === i.isObj) {
                t.items = i.items.toArray(), t.index = 0;
                var r, s = i.items;
                for (o = 0; o < s.length; o++)
                    if ((r = s[o]).parsed && (r = r.el[0]), r === i.el[0]) {
                        t.index = o;
                        break
                    }
            } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
            if (!t.isOpen) {
                t.types = [], a = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = b("bg").on("click.mfp", (function () {
                    t.close()
                })), t.wrap = b("wrap").attr("tabindex", -1).on("click.mfp", (function (e) {
                    t._checkIfClose(e.target) && t.close()
                })), t.container = b("container", t.wrap)), t.contentContainer = b("content"), t.st.preloader && (t.preloader = b("preloader", t.container, t.st.tLoading));
                var l = e.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var p = l[o];
                    p = p.charAt(0).toUpperCase() + p.slice(1), t["init" + p].call(t)
                }
                I("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(c, (function (e, t, i, n) {
                    i.close_replaceWith = x(n.type)
                })), a += " mfp-close-btn-in") : t.wrap.append(x())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                }) : t.wrap.css({
                    top: y.scrollTop(),
                    position: "absolute"
                }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: n.height(),
                    position: "absolute"
                }), t.st.enableEscapeKey && n.on("keyup.mfp", (function (e) {
                    27 === e.keyCode && t.close()
                })), y.on("resize.mfp", (function () {
                    t.updateSize()
                })), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
                var u = t.wH = y.height(),
                    f = {};
                if (t.fixedContentPos && t._hasScrollBar(u)) {
                    var g = t._getScrollbarSize();
                    g && (f.marginRight = g)
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
                var v = t.st.mainClass;
                return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), I("BuildControls"), e("html").css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout((function () {
                    t.content ? (t._addClassToMFP(m), t._setFocus()) : t.bgOverlay.addClass(m), n.on("focusin.mfp", t._onFocusIn)
                }), 16), t.isOpen = !0, t.updateSize(u), I(d), i
            }
            t.updateItemHTML()
        },
        close: function () {
            t.isOpen && (I(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(g), setTimeout((function () {
                t._close()
            }), t.st.removalDelay)) : t._close())
        },
        _close: function () {
            I(s);
            var i = "mfp-removing mfp-ready ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            n.off("keyup.mfp focusin.mfp"), t.ev.off(f), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, I("AfterClose")
        },
        updateSize: function (e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    n = window.innerHeight * i;
                t.wrap.css("height", n), t.wH = n
            } else t.wH = e || y.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), I("Resize")
        },
        updateItemHTML: function () {
            var i = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
            var n = i.type;
            if (I("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
                var a = !!t.st[n] && t.st[n].markup;
                I("FirstMarkupParse", a), t.currTemplate[n] = !a || e(a)
            }
            o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
            var r = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
            t.appendContent(r, n), i.preloaded = !0, I(p, i), o = i.type, t.container.prepend(t.contentContainer), I("AfterChange")
        },
        appendContent: function (e, i) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i] ? t.content.find(".mfp-close").length || t.content.append(x()) : t.content = e : t.content = "", I("BeforeAppend"), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function (i) {
            var n, o = t.items[i];
            if (o.tagName ? o = {
                    el: e(o)
                } : (n = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var a = t.types, r = 0; r < a.length; r++)
                    if (o.el.hasClass("mfp-" + a[r])) {
                        n = a[r];
                        break
                    } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = n || t.st.type || "inline", o.index = i, o.parsed = !0, t.items[i] = o, I("ElementParse", o), t.items[i]
        },
        addGroup: function (e, i) {
            var n = function (n) {
                n.mfpEl = this, t._openClick(n, e, i)
            };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = e, i.items ? (i.isObj = !0, e.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? e.off(o).on(o, i.delegate, n) : (i.items = e, e.off(o).on(o, n)))
        },
        _openClick: function (i, n, o) {
            if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (y.width() < a) return !0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), o.el = e(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function (e, n) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                var o = {
                    status: e,
                    text: n
                };
                I("UpdateStatus", o), e = o.status, n = o.text, t.preloader.html(n), t.preloader.find("a").on("click", (function (e) {
                    e.stopImmediatePropagation()
                })), t.container.addClass("mfp-s-" + e), i = e
            }
        },
        _checkIfClose: function (i) {
            if (!e(i).hasClass(v)) {
                var n = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (n && o) return !0;
                if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                if (i === t.content[0] || e.contains(t.content[0], i)) {
                    if (n) return !0
                } else if (o && e.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function (e) {
            return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || y.height())
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function (i) {
            if (i.target !== t.wrap[0] && !e.contains(t.wrap[0], i.target)) return t._setFocus(), !1
        },
        _parseMarkup: function (t, i, n) {
            var o;
            n.data && (i = e.extend(n.data, i)), I(c, [t, i, n]), e.each(i, (function (i, n) {
                if (void 0 === n || !1 === n) return !0;
                if ((o = i.split("_")).length > 1) {
                    var a = t.find(".mfp-" + o[0]);
                    if (a.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? a[0] !== n[0] && a.replaceWith(n) : "img" === r ? a.is("img") ? a.attr("src", n) : a.replaceWith(e("<img>").attr("src", n).attr("class", a.attr("class"))) : a.attr(o[1], n)
                    }
                } else t.find(".mfp-" + i).html(n)
            }))
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: h.prototype,
        modules: [],
        open: function (t, i) {
            return k(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = i || 0, this.instance.open(t)
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function (t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function (i) {
        k();
        var n = e(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var o, a = C ? n.data("magnificPopup") : n[0].magnificPopup,
                    r = parseInt(arguments[1], 10) || 0;
                a.items ? o = a.items[r] : (o = n, a.delegate && (o = o.find(a.delegate)), o = o.eq(r)), t._openClick({
                    mfpEl: o
                }, n, a)
            } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
        else i = e.extend(!0, {}, i), C ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
        return n
    };
    var T, _, P, S = "inline",
        E = function () {
            P && (_.after(P.addClass(T)).detach(), P = null)
        };
    e.magnificPopup.registerModule(S, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                t.types.push(S), w("Close.inline", (function () {
                    E()
                }))
            },
            getInline: function (i, n) {
                if (E(), i.src) {
                    var o = t.st.inline,
                        a = e(i.src);
                    if (a.length) {
                        var r = a[0].parentNode;
                        r && r.tagName && (_ || (T = o.hiddenClass, _ = b(T), T = "mfp-" + T), P = a.after(_).detach().removeClass(T)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), a = e("<div>");
                    return i.inlineElement = a, a
                }
                return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
            }
        }
    });
    var z, O = "ajax",
        M = function () {
            z && e(document.body).removeClass(z)
        },
        B = function () {
            M(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(O, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                t.types.push(O), z = t.st.ajax.cursor, w("Close.ajax", B), w("BeforeChange.ajax", B)
            },
            getAjax: function (i) {
                z && e(document.body).addClass(z), t.updateStatus("loading");
                var n = e.extend({
                    url: i.src,
                    success: function (n, o, a) {
                        var r = {
                            data: n,
                            xhr: a
                        };
                        I("ParseAjax", r), t.appendContent(e(r.data), O), i.finished = !0, M(), t._setFocus(), setTimeout((function () {
                            t.wrap.addClass(m)
                        }), 16), t.updateStatus("ready"), I("AjaxContentAdded")
                    },
                    error: function () {
                        M(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(n), ""
            }
        }
    });
    var L, H = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = t.st.image.titleSrc;
        if (n) {
            if (e.isFunction(n)) return n.call(t, i);
            if (i.el) return i.el.attr(n) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var i = t.st.image,
                    n = ".image";
                t.types.push("image"), w("Open.image", (function () {
                    "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                })), w("Close.image", (function () {
                    i.cursor && e(document.body).removeClass(i.cursor), y.off("resize.mfp")
                })), w("Resize" + n, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage)
            },
            resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                }
            },
            _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, I("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function (e) {
                var i = 0,
                    n = e.img[0],
                    o = function (a) {
                        L && clearInterval(L), L = setInterval((function () {
                            n.naturalWidth > 0 ? t._onImageHasSize(e) : (i > 200 && clearInterval(L), 3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500))
                        }), a)
                    };
                o(1)
            },
            getImage: function (i, n) {
                var o = 0,
                    a = function () {
                        i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, I("ImageLoadComplete")) : ++o < 200 ? setTimeout(a, 100) : r())
                    },
                    r = function () {
                        i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", s.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                    },
                    s = t.st.image,
                    l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = e(c).on("load.mfploader", a).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return t._parseMarkup(n, {
                    title: H(i),
                    img_replaceWith: i.img
                }, i), t.resizeImage(), i.hasSize ? (L && clearInterval(L), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
            }
        }
    });
    var A;
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var e, i = t.st.zoom,
                    n = ".zoom";
                if (i.enabled && t.supportsTransition) {
                    var o, a, r = i.duration,
                        s = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                n = "all " + i.duration / 1e3 + "s " + i.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                a = "transition";
                            return o["-webkit-" + a] = o["-moz-" + a] = o["-o-" + a] = o[a] = n, t.css(o), t
                        },
                        l = function () {
                            t.content.css("visibility", "visible")
                        };
                    w("BuildControls" + n, (function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void l();
                            (a = s(e)).css(t._getOffset()), t.wrap.append(a), o = setTimeout((function () {
                                a.css(t._getOffset(!0)), o = setTimeout((function () {
                                    l(), setTimeout((function () {
                                        a.remove(), e = a = null, I("ZoomAnimationEnded")
                                    }), 16)
                                }), r)
                            }), 16)
                        }
                    })), w("BeforeClose.zoom", (function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = r, !e) {
                                if (!(e = t._getItemToZoom())) return;
                                a = s(e)
                            }
                            a.css(t._getOffset(!0)), t.wrap.append(a), t.content.css("visibility", "hidden"), setTimeout((function () {
                                a.css(t._getOffset())
                            }), 16)
                        }
                    })), w("Close.zoom", (function () {
                        t._allowZoom() && (l(), a && a.remove(), e = null)
                    }))
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function () {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function (i) {
                var n, o = (n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                    a = parseInt(n.css("padding-top"), 10),
                    r = parseInt(n.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - a;
                var s = {
                    width: n.width(),
                    height: (C ? n.innerHeight() : n[0].offsetHeight) - r - a
                };
                return void 0 === A && (A = void 0 !== document.createElement("p").style.MozTransform), A ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var F = "iframe",
        j = function (e) {
            if (t.currTemplate.iframe) {
                var i = t.currTemplate.iframe.find("iframe");
                i.length && (e || (i[0].src = "//about:blank"), t.isIE8 && i.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(F, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                t.types.push(F), w("BeforeChange", (function (e, t, i) {
                    t !== i && (t === F ? j() : i === F && j(!0))
                })), w("Close.iframe", (function () {
                    j()
                }))
            },
            getIframe: function (i, n) {
                var o = i.src,
                    a = t.st.iframe;
                e.each(a.patterns, (function () {
                    if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1
                }));
                var r = {};
                return a.srcAction && (r[a.srcAction] = o), t._parseMarkup(n, r, i), t.updateStatus("ready"), n
            }
        }
    });
    var N = function (e) {
            var i = t.items.length;
            return e > i - 1 ? e - i : e < 0 ? i + e : e
        },
        W = function (e, t, i) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var i = t.st.gallery,
                    o = ".mfp-gallery";
                if (t.direction = !0, !i || !i.enabled) return !1;
                a += " mfp-gallery", w(d + o, (function () {
                    i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", (function () {
                        if (t.items.length > 1) return t.next(), !1
                    })), n.on("keydown" + o, (function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    }))
                })), w("UpdateStatus" + o, (function (e, i) {
                    i.text && (i.text = W(i.text, t.currItem.index, t.items.length))
                })), w(c + o, (function (e, n, o, a) {
                    var r = t.items.length;
                    o.counter = r > 1 ? W(i.tCounter, a.index, r) : ""
                })), w("BuildControls" + o, (function () {
                    if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                        var n = i.arrowMarkup,
                            o = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(v),
                            a = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(v);
                        o.on("click", (function () {
                            t.prev()
                        })), a.on("click", (function () {
                            t.next()
                        })), t.container.append(o.add(a))
                    }
                })), w(p + o, (function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout((function () {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }), 16)
                })), w(s + o, (function () {
                    n.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
                }))
            },
            next: function () {
                t.direction = !0, t.index = N(t.index + 1), t.updateItemHTML()
            },
            prev: function () {
                t.direction = !1, t.index = N(t.index - 1), t.updateItemHTML()
            },
            goTo: function (e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var e, i = t.st.gallery.preload,
                    n = Math.min(i[0], t.items.length),
                    o = Math.min(i[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : n); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? n : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function (i) {
                if (i = N(i), !t.items[i].preloaded) {
                    var n = t.items[i];
                    n.parsed || (n = t.parseEl(i)), I("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", (function () {
                        n.hasSize = !0
                    })).on("error.mfploader", (function () {
                        n.hasSize = !0, n.loadError = !0, I("LazyLoadError", n)
                    })).attr("src", n.src)), n.preloaded = !0
                }
            }
        }
    });
    var R = "retina";
    e.magnificPopup.registerModule(R, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, (function (e) {
                    return "@2x" + e
                }))
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        i = e.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (w("ImageHasSize.retina", (function (e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    })), w("ElementParse.retina", (function (t, n) {
                        n.src = e.replaceSrc(n, i)
                    })))
                }
            }
        }
    }), k()
}(jQuery);
! function (a) {
    "use strict";
    a.fn.jnewsgif = function (s) {
        var i = {};
        return s = s ? a.extend(i, s) : a.extend(i), a(this).each((function () {
            var s = a(this);
            s.addClass("ff-setup ff-image");
            var i = a('<div class="ff-overlay"><div class="ff-control">GIF</div></div>').insertBefore(s),
                n = a("<canvas />", {
                    class: "ff-canvas"
                }).attr({
                    width: 0,
                    height: 0
                }).insertBefore(s);
            s.add(i).add(n).wrapAll(a("<div />", {
                class: ["ff-container", "ff-responsive"].join(" ") + " " + s[0].classList
            })), i.on("click", (function () {
                var s = a(this),
                    i = a(s).siblings("canvas");
                a(i).hasClass("ff-canvas-active") ? (a(s).removeClass("ff-container-active"), a(i).removeClass("ff-canvas-active").addClass("ff-canvas-ready")) : (a(s).addClass("ff-container-active"), a(i).removeClass("ff-canvas-ready").addClass("ff-canvas-active"))
            })), s.imagesLoaded().progress((function (s, i) {
                var n = a(i.img).siblings("canvas"),
                    e = "transitionend webkitTransitionEnd oTransitionEnd otransitionend",
                    t = a(i.img).width(),
                    f = a(i.img).height();
                n.attr({
                    width: t,
                    height: f
                }), n[0].getContext("2d").drawImage(a(i.img).get(0), 0, 0, t, f), n.addClass("ff-canvas-ready").on(e, (function () {
                    a(this).off(e), a(i.img).addClass("ff-image-ready")
                }))
            }))
        }))
    }
}(jQuery);
! function (o) {
    "use strict";
    o.fn.jsticky = function (s) {
        var t = {
            item_offset: ".jeg_header",
            wrapper: ".jeg_navbar_wrapper",
            state_class: ".jeg_sticky_nav",
            mode: "scroll",
            use_translate3d: !0,
            onScrollDown: !1,
            onScrollUp: !1,
            onStickyRemoved: !1,
            broadcast_position: !1
        };
        return s = s ? o.extend(t, s) : o.extend(t), o(this).each((function () {
            var t, n = 1 == jnewsoption.admin_bar ? 32 : 0,
                e = 0,
                a = 0,
                i = 0,
                r = o(this),
                l = r.outerHeight(),
                c = 0,
                d = 0,
                p = 0,
                f = function () {
                    1 == jnewsoption.admin_bar && (o(window).width() <= 782 && o(window).width() > 600 ? n = 46 : o(window).width() <= 600 && (n = 0)), t = o(".sticky_blankspace").offset().top
                };
            f();
            o(window).on("scroll", (function () {
                if ("normal" !== s.mode) {
                    if (d = o(this).scrollTop(), p = Math.abs(d - a), r.hasClass(s.state_class) || r.addClass("notransition"), d > a) {
                        if ("scroll" === s.mode) {
                            if (d < t + l) return
                        } else if (d < t - n) return;
                        r.addClass(s.state_class), "scroll" === s.mode ? (c = i - p) < -l && (c = -l) : "pinned" === s.mode && p > 5 && d > l + n && (c = -l), "function" == typeof s.onScrollDown && s.onScrollDown()
                    } else d > t - n ? (r.removeClass("notransition"), "scroll" === s.mode && (c = i + p), ("pinned" === s.mode && p > 5 || c > 0) && (c = 0, r.removeClass("notransition"))) : (r.removeClass(s.state_class), c = 0, "function" == typeof s.onStickyRemoved && s.onStickyRemoved()), "function" == typeof s.onScrollUp && s.onScrollUp();
                    e = d < t - n ? 0 : c + n, r.hasClass(s.state_class) ? s.use_translate3d ? r.css({
                        "-webkit-transform": "translate3d(0px, " + e + "px, 0px)",
                        transform: "translate3d(0px, " + e + "px, 0px)"
                    }) : r.css({
                        top: e + "px"
                    }) : s.use_translate3d ? r.css({
                        "-webkit-transform": "",
                        transform: ""
                    }) : r.css({
                        top: ""
                    }), s.broadcast_position && o(window).trigger("jnews_additional_sticky_margin", l + e), i = c, a = d
                }
            })), o(window).on("load resize", (function () {
                setTimeout(f, 200)
            })), o(document).on("ready", f)
        }))
    }
}(jQuery);
(function (t, e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else if (typeof exports === "object") {
        module.exports = e(require("jquery"))
    } else {
        e(t.jQuery)
    }
})(this, function (t) {
    t.transit = {
        version: "0.9.12",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: true,
        useTransitionEnd: false
    };
    var e = document.createElement("div");
    var n = {};

    function i(t) {
        if (t in e.style) return t;
        var n = ["Moz", "Webkit", "O", "ms"];
        var i = t.charAt(0).toUpperCase() + t.substr(1);
        for (var r = 0; r < n.length; ++r) {
            var s = n[r] + i;
            if (s in e.style) {
                return s
            }
        }
    }

    function r() {
        e.style[n.transform] = "";
        e.style[n.transform] = "rotateY(90deg)";
        return e.style[n.transform] !== ""
    }
    var s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    n.transition = i("transition");
    n.transitionDelay = i("transitionDelay");
    n.transform = i("transform");
    n.transformOrigin = i("transformOrigin");
    n.filter = i("Filter");
    n.transform3d = r();
    var a = {
        transition: "transitionend",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    };
    var o = n.transitionEnd = a[n.transition] || null;
    for (var u in n) {
        if (n.hasOwnProperty(u) && typeof t.support[u] === "undefined") {
            t.support[u] = n[u]
        }
    }
    e = null;
    t.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    t.cssHooks["transit:transform"] = {
        get: function (e) {
            return t(e).data("transform") || new f
        },
        set: function (e, i) {
            var r = i;
            if (!(r instanceof f)) {
                r = new f(r)
            }
            if (n.transform === "WebkitTransform" && !s) {
                e.style[n.transform] = r.toString(true)
            } else {
                e.style[n.transform] = r.toString()
            }
            t(e).data("transform", r)
        }
    };
    t.cssHooks.transform = {
        set: t.cssHooks["transit:transform"].set
    };
    t.cssHooks.filter = {
        get: function (t) {
            return t.style[n.filter]
        },
        set: function (t, e) {
            t.style[n.filter] = e
        }
    };
    if (t.fn.jquery < "1.8") {
        t.cssHooks.transformOrigin = {
            get: function (t) {
                return t.style[n.transformOrigin]
            },
            set: function (t, e) {
                t.style[n.transformOrigin] = e
            }
        };
        t.cssHooks.transition = {
            get: function (t) {
                return t.style[n.transition]
            },
            set: function (t, e) {
                t.style[n.transition] = e
            }
        }
    }
    p("scale");
    p("scaleX");
    p("scaleY");
    p("translate");
    p("rotate");
    p("rotateX");
    p("rotateY");
    p("rotate3d");
    p("perspective");
    p("skewX");
    p("skewY");
    p("x", true);
    p("y", true);

    function f(t) {
        if (typeof t === "string") {
            this.parse(t)
        }
        return this
    }
    f.prototype = {
        setFromString: function (t, e) {
            var n = typeof e === "string" ? e.split(",") : e.constructor === Array ? e : [e];
            n.unshift(t);
            f.prototype.set.apply(this, n)
        },
        set: function (t) {
            var e = Array.prototype.slice.apply(arguments, [1]);
            if (this.setter[t]) {
                this.setter[t].apply(this, e)
            } else {
                this[t] = e.join(",")
            }
        },
        get: function (t) {
            if (this.getter[t]) {
                return this.getter[t].apply(this)
            } else {
                return this[t] || 0
            }
        },
        setter: {
            rotate: function (t) {
                this.rotate = b(t, "deg")
            },
            rotateX: function (t) {
                this.rotateX = b(t, "deg")
            },
            rotateY: function (t) {
                this.rotateY = b(t, "deg")
            },
            scale: function (t, e) {
                if (e === undefined) {
                    e = t
                }
                this.scale = t + "," + e
            },
            skewX: function (t) {
                this.skewX = b(t, "deg")
            },
            skewY: function (t) {
                this.skewY = b(t, "deg")
            },
            perspective: function (t) {
                this.perspective = b(t, "px")
            },
            x: function (t) {
                this.set("translate", t, null)
            },
            y: function (t) {
                this.set("translate", null, t)
            },
            translate: function (t, e) {
                if (this._translateX === undefined) {
                    this._translateX = 0
                }
                if (this._translateY === undefined) {
                    this._translateY = 0
                }
                if (t !== null && t !== undefined) {
                    this._translateX = b(t, "px")
                }
                if (e !== null && e !== undefined) {
                    this._translateY = b(e, "px")
                }
                this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function () {
                return this._translateX || 0
            },
            y: function () {
                return this._translateY || 0
            },
            scale: function () {
                var t = (this.scale || "1,1").split(",");
                if (t[0]) {
                    t[0] = parseFloat(t[0])
                }
                if (t[1]) {
                    t[1] = parseFloat(t[1])
                }
                return t[0] === t[1] ? t[0] : t
            },
            rotate3d: function () {
                var t = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var e = 0; e <= 3; ++e) {
                    if (t[e]) {
                        t[e] = parseFloat(t[e])
                    }
                }
                if (t[3]) {
                    t[3] = b(t[3], "deg")
                }
                return t
            }
        },
        parse: function (t) {
            var e = this;
            t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (t, n, i) {
                e.setFromString(n, i)
            })
        },
        toString: function (t) {
            var e = [];
            for (var i in this) {
                if (this.hasOwnProperty(i)) {
                    if (!n.transform3d && (i === "rotateX" || i === "rotateY" || i === "perspective" || i === "transformOrigin")) {
                        continue
                    }
                    if (i[0] !== "_") {
                        if (t && i === "scale") {
                            e.push(i + "3d(" + this[i] + ",1)")
                        } else if (t && i === "translate") {
                            e.push(i + "3d(" + this[i] + ",0)")
                        } else {
                            e.push(i + "(" + this[i] + ")")
                        }
                    }
                }
            }
            return e.join(" ")
        }
    };

    function c(t, e, n) {
        if (e === true) {
            t.queue(n)
        } else if (e) {
            t.queue(e, n)
        } else {
            t.each(function () {
                n.call(this)
            })
        }
    }

    function l(e) {
        var i = [];
        t.each(e, function (e) {
            e = t.camelCase(e);
            e = t.transit.propertyMap[e] || t.cssProps[e] || e;
            e = h(e);
            if (n[e]) e = h(n[e]);
            if (t.inArray(e, i) === -1) {
                i.push(e)
            }
        });
        return i
    }

    function d(e, n, i, r) {
        var s = l(e);
        if (t.cssEase[i]) {
            i = t.cssEase[i]
        }
        var a = "" + y(n) + " " + i;
        if (parseInt(r, 10) > 0) {
            a += " " + y(r)
        }
        var o = [];
        t.each(s, function (t, e) {
            o.push(e + " " + a)
        });
        return o.join(", ")
    }
    t.fn.transition = t.fn.transit = function (e, i, r, s) {
        var a = this;
        var u = 0;
        var f = true;
        var l = t.extend(true, {}, e);
        if (typeof i === "function") {
            s = i;
            i = undefined
        }
        if (typeof i === "object") {
            r = i.easing;
            u = i.delay || 0;
            f = typeof i.queue === "undefined" ? true : i.queue;
            s = i.complete;
            i = i.duration
        }
        if (typeof r === "function") {
            s = r;
            r = undefined
        }
        if (typeof l.easing !== "undefined") {
            r = l.easing;
            delete l.easing
        }
        if (typeof l.duration !== "undefined") {
            i = l.duration;
            delete l.duration
        }
        if (typeof l.complete !== "undefined") {
            s = l.complete;
            delete l.complete
        }
        if (typeof l.queue !== "undefined") {
            f = l.queue;
            delete l.queue
        }
        if (typeof l.delay !== "undefined") {
            u = l.delay;
            delete l.delay
        }
        if (typeof i === "undefined") {
            i = t.fx.speeds._default
        }
        if (typeof r === "undefined") {
            r = t.cssEase._default
        }
        i = y(i);
        var p = d(l, i, r, u);
        var h = t.transit.enabled && n.transition;
        var b = h ? parseInt(i, 10) + parseInt(u, 10) : 0;
        if (b === 0) {
            var g = function (t) {
                a.css(l);
                if (s) {
                    s.apply(a)
                }
                if (t) {
                    t()
                }
            };
            c(a, f, g);
            return a
        }
        var m = {};
        var v = function (e) {
            var i = false;
            var r = function () {
                if (i) {
                    a.unbind(o, r)
                }
                if (b > 0) {
                    a.each(function () {
                        this.style[n.transition] = m[this] || null
                    })
                }
                if (typeof s === "function") {
                    s.apply(a)
                }
                if (typeof e === "function") {
                    e()
                }
            };
            if (b > 0 && o && t.transit.useTransitionEnd) {
                i = true;
                a.bind(o, r)
            } else {
                window.setTimeout(r, b)
            }
            a.each(function () {
                if (b > 0) {
                    this.style[n.transition] = p
                }
                t(this).css(l)
            })
        };
        var z = function (t) {
            this.offsetWidth;
            v(t)
        };
        c(a, f, z);
        return this
    };

    function p(e, i) {
        if (!i) {
            t.cssNumber[e] = true
        }
        t.transit.propertyMap[e] = n.transform;
        t.cssHooks[e] = {
            get: function (n) {
                var i = t(n).css("transit:transform");
                return i.get(e)
            },
            set: function (n, i) {
                var r = t(n).css("transit:transform");
                r.setFromString(e, i);
                t(n).css({
                    "transit:transform": r
                })
            }
        }
    }

    function h(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    function b(t, e) {
        if (typeof t === "string" && !t.match(/^[\-0-9\.]+$/)) {
            return t
        } else {
            return "" + t + e
        }
    }

    function y(e) {
        var n = e;
        if (typeof n === "string" && !n.match(/^[\-0-9\.]+/)) {
            n = t.fx.speeds[n] || t.fx.speeds._default
        }
        return b(n, "ms")
    }
    t.transit.getTransitionValue = d;
    return t
});
! function (e) {
    "use strict";
    var a = !!("object" == typeof jnews && "object" == typeof jnews.library) && jnews.library,
        t = function (t, o) {
            if (a) {
                var n = this;
                n.element = e(t), n.options = o, n.xhr = null, n.xhr_cache = [], n.lock_action = !1, n.unique = n.element.data("unique"), n.data = {
                    filter: 0,
                    filter_type: "all",
                    current_page: 1,
                    attribute: window[n.unique] || {}
                }, n.ajax_mode = n.data.attribute.pagination_mode, n.header = n.element.find(".jeg_block_heading"), n.container = n.element.find(".jeg_block_container"), n.nav_block = n.element.find(".jeg_block_navigation"), n.ad_code = n.element.find(".jeg_ad_code").val(), n.nav_next = null, n.nav_prev = null, n.module_overlay = n.container.find(".module-overlay"), n.load_more_block = n.nav_block.find(".jeg_block_loadmore"), "nextprev" === n.ajax_mode && (n.nav_next = n.nav_block.find(".next"), n.nav_prev = n.nav_block.find(".prev"), n.nav_next.on("click", e.proxy(n.click_next, n)), n.nav_prev.on("click", e.proxy(n.click_prev, n))), "loadmore" !== n.ajax_mode && "scrollload" !== n.ajax_mode || (n.nav_next = n.load_more_block.find("a"), n.nav_next.on("click", e.proxy(n.load_more, n))), "scrollload" === n.ajax_mode && (n.load_limit = n.data.attribute.pagination_scroll_limit, n.load_scroll()), n.masonry_init(), n.init(), n.element.trigger("jnews_module_init", [n])
            }
        };
    t.DEFAULTS = {}, t.prototype.init = function () {
        var e = this;
        e.subcat = e.header.find(".jeg_subcat"), e.subcat.length && e.subcat.okayNav({
            swipe_enabled: !1,
            threshold: 80,
            toggle_icon_content: "<span></span><span></span><span></span>"
        }), e.assign_header()
    }, t.prototype.load_scroll = function () {
        var e = this;
        e.nav_next.hasClass("disabled") || (e.load_limit > e.data.current_page || 0 == e.load_limit) && e.nav_next.waypoint((function () {
            e.data.current_page = e.data.current_page + 1, e.request_ajax("scroll"), this.destroy()
        }), {
            offset: "100%",
            context: window
        })
    }, t.prototype.click_next = function (a) {
        var t = this,
            o = t.nav_next;
        a.preventDefault(), e(o).hasClass("disabled") || t.lock_action || (t.data.current_page = t.data.current_page + 1, t.request_ajax("next"))
    }, t.prototype.click_prev = function (a) {
        var t = this,
            o = t.nav_prev;
        a.preventDefault(), e(o).hasClass("disabled") || t.lock_action || (t.data.current_page = t.data.current_page - 1, t.request_ajax("prev"))
    }, t.prototype.load_more = function (a) {
        var t = this,
            o = t.nav_next;
        a.preventDefault(), e(o).hasClass("disabled") || t.lock_action || (t.data.current_page = t.data.current_page + 1, t.request_ajax("more"))
    }, t.prototype.assign_header = function () {
        var a = this;
        e(a.header).on("click", ".subclass-filter", e.proxy(a.subclass_click, a))
    }, t.prototype.subclass_click = function (a) {
        var t = this,
            o = a.target;
        a.preventDefault(), t.lock_action || (this.header.find(".subclass-filter").removeClass("current"), e(o).addClass("current"), t.data.filter = e(o).data("id"), t.data.filter_type = e(o).data("type"), t.data.current_page = 1, t.request_ajax("subclass"))
    }, t.prototype.request_ajax = function (a) {
        var t = this;
        t.lock_action = !0;
        var o = {
                action: jnewsoption.module_prefix + t.data.attribute.class,
                module: !0,
                data: t.data
            },
            n = t.cache_get(o);
        n ? (t.before_ajax_request(a, !1), setTimeout((function () {
            t.load_ajax(a, o, n), t.element.trigger("jnews_module_ajax")
        }), 100)) : (t.before_ajax_request(a, !0), t.xhr = e.ajax({
            url: jnews_ajax_url,
            type: "post",
            dataType: "json",
            data: o,
            success: function (e) {
                t.load_ajax(a, o, e), t.cache_save(o, e), t.element.trigger("jnews_module_ajax")
            }
        }))
    }, t.prototype.cache_get = function (e) {
        for (var a = this, t = JSON.stringify(e), o = 0; o < a.xhr_cache.length; o++)
            if (a.xhr_cache[o].param == t) return a.cache_prepare(a.xhr_cache[o].result);
        return !1
    }, t.prototype.cache_prepare = function (a) {
        a.content = "<div>" + a.content + "</div>";
        var t = e(a.content);
        return t.find("img").each((function () {
            var a = e(this).data("src");
            e(this).attr("src", a).removeClass("lazyload").addClass("lazyloaded")
        })), a.content = t.html(), a
    }, t.prototype.cache_save = function (e, a) {
        var t = JSON.stringify(e);
        this.xhr_cache.push({
            param: t,
            result: a
        })
    }, t.prototype.load_ajax = function (e, a, t) {
        var o = this;
        switch (o.lock_action = !1, o.ajax_mode) {
            case "loadmore":
                o.load_ajax_load_more(t, e);
                break;
            case "scrollload":
                o.load_scroll_more(t, e);
                break;
            default:
                o.load_ajax_next_prev(t, e)
        }
        jnews.like && jnews.like.init(), jnews.share && jnews.share.init()
    }, t.prototype.before_ajax_request = function (e, a) {
        var t = this;
        t.element.removeClass("loaded next prev more scroll subclass").addClass("loading"), "next" !== e && "prev" !== e && "subclass" !== e || !a || t.module_overlay.show(), "more" !== e && "scroll" !== e || t.load_more_block.find("a").text(t.load_more_block.find("a").data("loading")).addClass("active")
    }, t.prototype.after_ajax_request = function (e) {
        var a = this;
        a.element.removeClass("loading").addClass("loaded").addClass(e), "next" !== e && "prev" !== e && "subclass" !== e || a.module_overlay.hide(), "more" !== e && "scroll" !== e || (a.load_more_block.find("a").text(a.load_more_block.find("a").data("load")).removeClass("active"), void 0 !== a.load_more_block.find("a").data("icon") && a.load_more_block.find("a").html(a.load_more_block.find("a").html() + ' <i class="fa ' + a.load_more_block.find("a").data("icon") + '"></i>'))
    }, t.prototype.replace_content = function (a) {
        this.container.children().each((function () {
            e(this).hasClass("module-overlay") || e(this).remove()
        })), this.container.prepend(a)
    }, t.prototype.load_ajax_next_prev = function (a, t) {
        var o = this;
        o.replace_content(a.content), null !== o.nav_next && (a.next ? o.nav_next.removeClass("disabled") : o.nav_next.addClass("disabled")), null !== o.nav_prev && (a.prev ? o.nav_prev.removeClass("disabled") : o.nav_prev.addClass("disabled")), a.next || a.prev ? null !== o.nav_prev && o.nav_next.parent().removeClass("inactive") : null !== o.nav_next && o.nav_next.parent().addClass("inactive"), o.after_ajax_request(t), o.masonry_init(), e(window).trigger("resize")
    }, t.prototype.load_ajax_load_more = function (a, t) {
        var o = this,
            n = e(a.content),
            r = 0;
        n.each((function () {
            (e(this).hasClass("jeg_ad_module") && o.ad_code && e(this).find(".ads-wrapper").html(o.ad_code), e(this).hasClass("jeg_post")) ? e(this).addClass("jeg_ajax_loaded anim_" + r): e(this).find(".jeg_post").each((function () {
                e(this).addClass("jeg_ajax_loaded anim_" + r), r++
            }));
            r++
        })), o.container.find(".jeg_post").removeClass("jeg_ajax_loaded"), o.container.find(".jeg_ad_module").removeClass("jeg_ajax_loaded"), 1 == o.data.current_page ? o.replace_content(n) : o.element.find(".jeg_load_more_flag").append(n), a.next ? o.nav_next.removeClass("disabled") : o.nav_next.addClass("disabled"), o.after_ajax_request(t), o.masonry_load_more(n), e(window).trigger("resize")
    }, t.prototype.load_scroll_more = function (a, t) {
        var o = this,
            n = e(a.content),
            r = 0;
        n.each((function () {
            e(this).hasClass("jeg_post") ? e(this).addClass("jeg_ajax_loaded anim_" + r) : e(this).find(".jeg_post").each((function () {
                e(this).addClass("jeg_ajax_loaded anim_" + r), r++
            }));
            r++
        })), o.container.find(".jeg_post").removeClass("jeg_ajax_loaded"), o.container.find(".jeg_ad_module").removeClass("jeg_ajax_loaded"), 1 == o.data.current_page ? o.container.html("").html(n) : o.element.find(".jeg_load_more_flag").append(n), a.next ? o.nav_next.removeClass("disabled") : o.nav_next.addClass("disabled"), o.after_ajax_request(t), o.masonry_load_more(n), e(window).trigger("resize"), setTimeout((function () {
            o.load_scroll()
        }), 500)
    }, t.prototype.masonry_load_more = function (e) {
        var a = this;
        a.container.find(".jeg_posts_masonry").length && setTimeout((function () {
            a.masonry.isotope("appended", e)
        }), 150)
    }, t.prototype.masonry_init = function () {
        var a = this;
        a.container.find(".jeg_posts_masonry").length && (setTimeout((function () {
            a.masonry = a.container.find(".jeg_posts_masonry .jeg_posts").isotope({
                itemSelector: ".jeg_post",
                layoutMode: "masonry"
            }), a.masonry.imagesLoaded().progress((function () {
                a.masonry.isotope("layout")
            }))
        }), 150), e(window).on("resize", (function () {
            setTimeout((function () {
                a.masonry.isotope("layout")
            }), 1e3)
        })))
    };
    var o = e.fn.jmodule;
    e.fn.jmodule = function (a) {
        return e(this).each((function () {
            var o = e(this),
                n = e.extend({}, t.DEFAULTS, o.data(), "object" == typeof a && a),
                r = o.data("jeg.module");
            r || o.data("jeg.module", r = new t(this, n))
        }))
    }, e.fn.jmodule.Constructor = t, e.fn.jmodule.noConflict = function () {
        return e.fn.jmodule = o, this
    }, e(".jeg_module_hook").jmodule()
}(jQuery);
! function (e) {
    "use strict";

    function t() {
        jnews.body_inject ? (jnews.body_inject.find("img").attr("data-pin-no-hover", !0), jnews.body_inject.find(".article-content img, .featured img, .thumbnail-container img").removeAttr("data-pin-no-hover")) : (e("img").attr("data-pin-no-hover", !0), e(".article-content img, .featured img, .thumbnail-container img").removeAttr("data-pin-no-hover"))
    }

    function n() {
        var t = jnews.body_inject ? jnews.body_inject.find(".jeg_fs_container") : e(".jeg_fs_container"),
            n = t.find(".jeg_fs_content"),
            a = t.find(".jeg_featured_bg"),
            i = t.find(".jeg_fs_scroll"),
            o = function () {
                var t = jnews.body_inject ? jnews.body_inject.find(".jeg_header") : e(".jeg_header"),
                    i = jnews.body_inject ? jnews.body_inject.find(".jeg_navbar_mobile") : e(".jeg_navbar_mobile");
                if (n.length > 0) {
                    var o = t.is(":visible") ? t.outerHeight() : i.outerHeight(),
                        s = e(window).height();
                    e(n).css({
                        height: s - o + "px"
                    }), e(a).css({
                        height: s + "px"
                    })
                }
            },
            s = jnews.body_inject ? jnews.body_inject.find(".jeg_parallax .jeg_featured_img") : e(".jeg_parallax .jeg_featured_img");
        s.length && s.each((function () {
            e(this).parallax("50%", .15)
        })), i.on("click", (function () {
            var t = jnews.body_inject ? jnews.body_inject.find(".jeg_scroll_flag").offset().top : e(".jeg_scroll_flag").offset().top;
            e("html, body").animate({
                scrollTop: t
            }, 800)
        }));
        var r = function () {
            var n = e(window).scrollTop(),
                a = t.outerHeight(),
                o = 1 - n / a;
            if ((jnews.body_inject ? jnews.body_inject : e("body")).hasClass("jeg_single_tpl_5")) {
                var s = 1 - n / a * .2;
                t.find(".entry-header .container").css({
                    opacity: o,
                    "-webkit-transform": "scale(" + s + ")",
                    transform: "scale(" + s + ")"
                })
            } else t.find(".entry-header .container").css({
                opacity: o
            });
            i.css("opacity", o - .2)
        };
        "object" == typeof jnews.library && (jnews.library.winLoad(o), jnews.library.winLoad(r)), e(window).on("resize", o), e(document).on("ready", o), e(window).on("scroll resize", r)
    }

    function a() {
        if ("object" == typeof jnews.library) {
            var e = function () {
                var e = jnews.library.globalBody.querySelectorAll(".ads-parallax-inner");
                e.length && s.forEach(e, (function (e, t) {
                    var n = e.querySelector(".ads-parallax");
                    if ("object" == typeof n && null !== n) {
                        var a = jnews.library.getWidth(e),
                            i = jnews.library.getHeight(n);
                        n.style.width = a + "px", n.style.marginTop = "-" + i / 2 + "px"
                    }
                }))
            };
            jnews.library.addEvents(jnews.library.win, {
                load: e,
                resize: e
            })
        }
    }

    function i() {
        var t = jnews.body_inject ? jnews.body_inject.find(".jnews-cookie-law-policy") : e(".jnews-cookie-law-policy"),
            n = e.now(),
            a = void 0 === jnewsoption.site_slug ? "/" : jnewsoption.site_slug,
            i = void 0 === jnewsoption.site_domain ? window.location.hostname : jnewsoption.site_domain;
        if (t.length > 0) {
            var o = function (e) {
                for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
                    for (var i = n[a];
                        " " == i.charAt(0);) i = i.substring(1, i.length);
                    if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
                }
                return null
            }("jnews_cookie_law");
            o ? parseInt(o) < n && t.fadeIn("slow") : t.fadeIn("slow"), t.find(".btn-cookie").on("click", (function (t) {
                t.preventDefault();
                var o, s, r, l, d = e(this);
                o = "jnews_cookie_law", s = d.data("expire"), r = n + 24 * s * 60 * 60 * 1e3, (l = new Date).setTime(r), l.toUTCString(), document.cookie = o + "=" + (r || "") + ";expires=" + l + ";path=" + a + ";domain=" + i, d.parent().fadeOut()
            }))
        }
    }

    function o(t) {
        var n = jnews.body_inject ? jnews.body_inject.find(".jeg_progress_container") : e(".jeg_progress_container");
        if (n.length > 0) {
            var a = !1,
                i = e(window),
                o = t.height(),
                s = .85 * i.height();
            e(window).scroll((function () {
                a = !0
            })), e(window).on("resize", (function () {
                o = t.height(), s = .85 * i.height(), r()
            })), void 0 !== window.progressTimer && clearInterval(window.progressTimer), window.progressTimer = setInterval((function () {
                a && (a = !1, r())
            }), 150);
            var r = function () {
                var e = i.scrollTop(),
                    a = t.offset().top,
                    r = s - a + e,
                    l = 0;
                s > o + a ? n.find(".progress-bar").width(0) : (r > o ? o < e - a + .2 * s ? (n.find(".progress-bar").css("transition", "none"), n.find(".progress-bar").width(0)) : (n.find(".progress-bar").css("transition", "none"), n.find(".progress-bar").width("100%"), l = 100) : r > 0 && (l = r / o * 100), n.find(".progress-bar").width(l + "%"), n.find(".progress-bar").css("transition", "all .12s ease-in"))
            }
        }
    }
    window.jnews = window.jnews || {}, void 0 === jnews.body_inject && (window.jnews.body_inject = e("body")), e.youtube_parser = function (e) {
        var t = e.match(/^.*(?:(?:youtu.be\/)|(?:v\/)|(?:\/u\/\w\/)|(?:embed\/)|(?:watch\?))\??&?v?=?([^#\&\?]*).*/);
        if (t && 11 === t[1].length) return t[1];
        window.alert("Url Incorrect")
    }, e.vimeo_parser = function (e) {
        var t = e.match(/(?:(http|https)\:\/\/)(?:(?:www|player)\.)?vimeo\.com(?:\/(?:video\/(\d+)(?:$|\/))|(?:\/(\d+)(?:$|\/)))/);
        if (t) return t = t[2] || t[3];
        window.alert("not a vimeo url")
    }, e.dailymotion_parser = function (e) {
        var t = e.match(/(?:dailymotion\.com(?:\/video|\/hub)|dai\.ly)\/([0-9a-z]+)(?:[\-_0-9a-zA-Z]+#video=([a-z0-9]+))?/);
        if (t) return t[2] ? t[2] : t[1];
        window.alert("not a dailymotion url")
    }, e.type_video_youtube = function (t, n, a) {
        var i = e.youtube_parser(e(t).attr("data-src")),
            o = "",
            s = "";
        a ? (o += !0 === n ? "autoplay=1&" : "", s = '<iframe width="700" height="500" src="//www.youtube.com/v/' + i + "?version=3&" + (o += !0 === a ? "loop=1&playlist=" + i : "") + 'showinfo=0&theme=light&autohide=1&rel=0&wmode=opaque" frameborder="0" allowfullscreen></iframe>') : s = '<iframe width="700" height="500" src="//www.youtube.com/embed/' + i + "?" + (o += !0 === n ? "autoplay=1&" : "") + 'showinfo=0&theme=light&autohide=1&rel=0&wmode=opaque" frameborder="0" allowfullscreen></iframe>', e(".jeg_video_container", t).append(s)
    }, e.type_video_vimeo = function (t, n, a) {
        var i = "";
        i += !0 === n ? "autoplay=1&" : "";
        var o = '<iframe src="//player.vimeo.com/video/' + e.vimeo_parser(e(t).attr("data-src")) + "?" + (i += !0 === a ? "loop=1&" : "") + 'title=0&byline=0&portrait=0" width="700" height="500" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>';
        e(".jeg_video_container", t).append(o)
    }, e.type_video_dailymotion = function (t, n) {
        var a = "",
            i = '<iframe src="//www.dailymotion.com/embed/video/' + e.dailymotion_parser(e(t).attr("data-src")) + "?" + (a += !0 === n ? "autoplay=1&" : "") + 'ui-start-screen-info=0&ui-theme=light&queue-autoplay-next=0&queue-enable=0&sharing-enable=0&ui-logo=0" width="700" height="500" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen></iframe>';
        e(".jeg_video_container", t).append(i)
    }, e.type_soundcloud = function (t) {
        var n = e(t).attr("data-src"),
            a = '<iframe src="https://w.soundcloud.com/player/?url=' + encodeURIComponent(n) + '" width="700" height="500" frameborder="0"></iframe>';
        e(".jeg_video_container", t).append(a)
    }, e.type_audio = function (t) {
        var n = "",
            a = "";
        "" !== e(t).data("mp3") && (n = "<source type='audio/mpeg' src='" + e(t).data("mp3") + "' />"), "" !== e(t).data("ogg") && (a = "<source type='audio/ogg' src='" + e(t).data("ogg") + "' />");
        var i = "<audio preload='none' style='width: 100%; visibility: hidden;' controls='controls'>" + n + a + "</audio>";
        e(t).append(i);
        var o = {};
        "undefined" != typeof _wpmejsSettings && (o = _wpmejsSettings), o.success = function (e) {
            var t, n;
            "flash" === e.pluginType && (t = e.attributes.autoplay && "false" !== e.attributes.autoplay, n = e.attributes.loop && "false" !== e.attributes.loop, t && e.addEventListener("canplay", (function () {
                e.play()
            }), !1), n && e.addEventListener("ended", (function () {
                e.play()
            }), !1))
        }, e(t).find("audio").mediaelementplayer(o)
    }, e.type_video_html5 = function (t, n, a, i) {
        var o = e(t).data("cover");
        a.pauseOtherPlayers = !1;
        var s = "",
            r = "",
            l = "";
        "" !== e(t).data("mp4") && (s = "<source type='video/mp4' src='" + e(t).data("mp4") + "' />"), "" !== e(t).data("webm") && (r = "<source type='video/webm' src='" + e(t).data("webm") + "' />"), "" !== e(t).data("ogg") && (l = "<source type='video/ogg' src='" + e(t).data("ogg") + "' />");
        var d = "<video id='player' style='width:100%;height:100%;' width='100%' height='100%' poster='" + o + "' controls='controls' " + (n ? "preload='auto'" : "preload='none'") + ">" + s + r + l + ("<object width='100%' height='100%' type='application/x-shockwave-flash' data='/public/mediaelementjs/flashmediaelement.swf'><param name='movie' value='/public/mediaelementjs/flashmediaelement.swf' /><param name='flashvars' value='controls=true&file=" + e(t).data("mp4") + "' /><img src='" + o + "' alt='No video playback capabilities' title='No video playback capabilities' /></object>") + "</video>";
        e(i, t).append(d), n && (a.success = function (e) {
            "flash" === e.pluginType ? e.addEventListener("canplay", (function () {
                e.play()
            }), !1) : e.play()
        }), e(t).find("video").mediaelementplayer(a)
    }, e.do_media_render = function (t) {
        e(t).find("[data-type='youtube']").length && e(t).find("[data-type='youtube']").each((function () {
            var t = e(this).data("autoplay"),
                n = e(this).data("repeat");
            e.type_video_youtube(e(this), t, n)
        })), e(t).find("[data-type='vimeo']").length && e(t).find("[data-type='vimeo']").each((function () {
            var t = e(this).data("autoplay"),
                n = e(this).data("repeat");
            e.type_video_vimeo(e(this), t, n)
        })), e(t).find("[data-type='dailymotion']").length && e(t).find("[data-type='dailymotion']").each((function () {
            var t = e(this).data("autoplay");
            e.type_video_dailymotion(e(this), t)
        })), e(t).find("[data-type='soundcloud']").length && e(t).find("[data-type='soundcloud']").each((function () {
            e.type_soundcloud(e(this))
        })), e(t).find("[data-type='audio']").length && e(t).find("[data-type='audio']").each((function () {
            e.type_audio(e(this))
        })), e(t).find("video").length && e(t).find("video").each((function () {
            e(this).parents(".elementor-background-video-container") || e(this).mediaelementplayer()
        }))
    }, e.fn.jtabs = function () {
        e(this).each((function () {
            var t = e(this),
                n = e(".jeg_tabpost_nav li.active", t),
                a = function (n) {
                    var a = e(n).data("tab-content");
                    e(".jeg_tabpost_nav li.active", t).removeClass("active"), e(n).addClass("active"), e(".jeg_tabpost_item.active", t).removeClass("active"), e('.jeg_tabpost_item[id="' + a + '"]', t).addClass("active")
                };
            if (n.length) a(n);
            else {
                var i = e(".jeg_tabpost_nav li", t).first();
                a(i)
            }
            e(".jeg_tabpost_nav li", t).on("click", (function () {
                e(this).hasClass("active") || a(this)
            }))
        }))
    }, e.fn.jskill = function () {
        return e(this).each((function () {
            var t = e(this);
            t.waypoint((function (n) {
                var a = t.find("li"),
                    i = t.data("scoretype");
                t.addClass("show"), a.each((function (t) {
                    var n = e(this).find(".barbg"),
                        a = e(this).find(".reviewscore"),
                        o = n.attr("data-width");
                    window.setTimeout((function () {
                        a.prop("Counter", 0).animate({
                            Counter: o
                        }, {
                            duration: 600,
                            easing: "swing",
                            step: function (t) {
                                var a = "";
                                a = "point" === i ? Math.ceil(.1 * t) : Math.ceil(t) + "%", e(this).text(a), n.css("width", t + "%")
                            }
                        })
                    }), 250 * t)
                })), this.destroy()
            }), {
                offset: "80%",
                context: window
            })
        }))
    }, e.fn.jvideo_background = function () {
        function t(t) {
            var n = function (t, n) {
                var a, i, o = 16,
                    s = 9,
                    r = s / o,
                    l = e(t).height(),
                    d = e(t).width(),
                    c = l / d,
                    p = function () {
                        return [a = d * r, i = d, (d - i) / 2, (l - a) / 2]
                    },
                    u = function () {
                        return [a = l, i = l / r, (d - i) / 2, (l - a) / 2]
                    },
                    f = function () {
                        return [a = s, i = o, (d - i) / 2, (l - a) / 2]
                    };
                if ("fit" === n) return c > r ? p() : u();
                if ("zoom" === n) return c > r ? u() : p();
                if ("fitNoUpscale" === n) return s > l || o > d ? e.new_get_image_container_size(img, t, "fit") : f()
            }(t.parents(".jeg_block_container"), "zoom");
            t.css({
                height: n[0],
                width: n[1],
                left: n[2] + "px",
                top: n[3] + "px",
                "max-width": "inherit"
            })
        }
        e(this).each((function () {
            var n = e(this),
                a = n.parent(".jeg_videowrapper"),
                i = n.get(0),
                o = n.data("youtubeid");
            new YT.Player(i, {
                width: "100%",
                height: "100%",
                videoId: o,
                playerVars: {
                    playlist: o,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function (e) {
                        e.target.mute().setLoop(!0)
                    }
                }
            }), t(a), jQuery(window).on("resize", (function () {
                t(a)
            }))
        }))
    }, e.fn.ajax_review_search = function () {
        return e(this).each((function () {
            var t = this,
                n = e(t).find('input[name="action"]'),
                a = e(t).find('input[name="page"]'),
                i = e(t).find('select[name="category"]'),
                o = e(t).find(".search_keyword"),
                s = e(t).find('select[name="sort"]'),
                r = e(t).find(".jeg_review_search_result_holder"),
                l = e(t).find(".module-overlay"),
                d = e(t).find(".review-search-form"),
                c = e(t).data("id"),
                p = window[c],
                u = null,
                f = null,
                g = function () {
                    u && clearTimeout(u), u = setTimeout((function () {
                        e(l).stop().fadeIn(), p.action = e(n).val(), p.keyword = e(o).val(), p.category = e(i).val(), p.sort = e(s).val(), p.page = e(a).val(), null !== f && f.abort(), f = e.ajax({
                            url: jnews_ajax_url,
                            type: "post",
                            dataType: "html",
                            data: p,
                            success: function (t) {
                                e(r).html(t), e(l).stop().fadeOut()
                            }
                        })
                    }), 250)
                },
                _ = function () {
                    e(a).val(1), g()
                };
            e(o).on("input", (function () {
                (e(o).val().length > 2 || 0 == e(o).val().length) && _()
            })), e(i).on("change", (function () {
                _()
            })), e(s).on("change", (function () {
                _()
            })), e(t).on("click", ".jeg_navigation a", (function (t) {
                t.preventDefault(), e(a).val(e(this).data("id")), g()
            })), e(d).on("submit", (function (e) {
                e.preventDefault(), _()
            }))
        }))
    }, e.facebook_page_widget = function () {
        e(".fb-page").length && (e("#facebook-jssdk").length ? "undefined" != typeof FB && FB.XFBML.parse() : e(".fb-page").waypoint({
            handler: function () {
                var t, n, a, i, o, s = "&appId=" + e(".fb-page").attr("data-id");
                t = document, n = "script", a = "facebook-jssdk", o = t.getElementsByTagName(n)[0], t.getElementById(a) || ((i = t.createElement(n)).id = a, i.src = "//connect.facebook.net/" + jnewsoption.language + "/sdk.js#xfbml=1&version=v2.8" + s, o.parentNode.insertBefore(i, o))
            },
            offset: "100%"
        }))
    }, e.twitter_widget = function () {
        var t = jnews.body_inject ? jnews.body_inject.find(".twitter-timeline") : e(".twitter-timeline"),
            n = !1;
        t.length && t.waypoint({
            handler: function () {
                var e;
                n || ((e = document.createElement("script")).type = "text/javascript", e.async = !0, e.src = "//platform.twitter.com/widgets.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e), n = !0)
            },
            offset: "100%"
        })
    }, e.google_plus_widget = function () {
        var t = jnews.body_inject ? jnews.body_inject.find(".jeg_google_plus_widget") : e(".jeg_google_plus_widget"),
            n = !1;
        t.length && (t.waypoint({
            handler: function () {
                var e;
                n || ((e = document.createElement("script")).type = "text/javascript", e.async = !0, e.src = "//apis.google.com/js/platform.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e), n = !0)
            },
            offset: "100%"
        }), t.each((function () {
            var t = e(this).width(),
                n = e(this).find("div").attr("data-width");
            ("true" === e(this).find("div").attr("data-fit") || t < n) && e(this).find("div").attr("data-width", t)
        })))
    }, e.pinterest_widget = function () {
        var t = jnews.body_inject ? jnews.body_inject.find(".jeg_pinterest_widget") : e(".jeg_pinterest_widget"),
            n = !1;
        t.length && t.waypoint({
            handler: function () {
                var e;
                n || ((e = document.createElement("script")).type = "text/javascript", e.async = !0, e.src = "//assets.pinterest.com/js/pinit.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e), n = !0)
            },
            offset: "100%"
        })
    }, e(document).on("ready", (function () {
        var s, l, d, c = !!("object" == typeof jnews && "object" == typeof jnews.library) && jnews.library,
            p = jnews.body_inject ? jnews.body_inject : e("body"),
            u = p.find(".jeg_tabpost_widget"),
            f = p.find(".jeg_review_search"),
            g = p.find(".jeg_reviewbars"),
            _ = c && "undefined" !== c.globalBody,
            h = !(!_ || "function" != typeof jnews.slider) && c.globalBody.querySelectorAll(".jeg_slider_wrapper .jeg_slider"),
            w = !(!_ || "function" != typeof jnews.tns) && c.globalBody.getElementsByClassName("featured_gallery"),
            m = !(!_ || "function" != typeof jnews.carousel) && c.globalBody.getElementsByClassName("jeg_postblock_carousel"),
            j = !(!_ || "function" != typeof jnews.overlayslider) && c.globalBody.getElementsByClassName("jeg_overlay_slider"),
            v = !(!_ || "function" != typeof jnews.ticker) && c.globalBody.getElementsByClassName("jeg_news_ticker"),
            y = !(!_ || "function" != typeof jnews.vidplaylist) && c.globalBody.getElementsByClassName("jeg_video_playlist"),
            b = !(!_ || "function" != typeof jnews.webstories) && c.globalBody.getElementsByClassName("jnews-webstories");
        if (u.length && u.jtabs(), h && h.length && c.forEach(h, (function (e, t) {
                c.requestAnimationFrame.call(c.win, (function () {
                    jnews.slider({
                        container: e,
                        onInit: function (e) {
                            void 0 !== e.nextButton && c.addClass(e.nextButton, "tns-next"), void 0 !== e.prevButton && c.addClass(e.prevButton, "tns-prev")
                        }
                    })
                }))
            })), w && w.length && c.forEach(w, (function (e, t) {
                if (!c.hasClass(e, "jeg_tns_active")) {
                    var n = jnews.tns({
                        container: e,
                        textDirection: 1 == jnewsoption.rtl ? "rtl" : "ltr",
                        controls: !0,
                        controlsText: ["", ""],
                        nav: !0,
                        items: 1,
                        mouseDrag: !0,
                        autoplay: !1,
                        autoplayTimeout: 3e3,
                        loop: !1,
                        onInit: function (e) {
                            void 0 !== e.nextButton && c.addClass(e.nextButton, "tns-next"), void 0 !== e.prevButton && c.addClass(e.prevButton, "tns-prev")
                        }
                    });
                    void 0 !== n && (n.events.on("dragStart", (function (e) {
                        e.event.preventDefault(), e.event.stopPropagation()
                    })), c.addClass(e, "jeg_tns_active"), c.dataStorage.put(e, "tiny-slider", n))
                }
            })), m && m.length && c.forEach(m, (function (e, t) {
                c.requestAnimationFrame.call(c.win, (function () {
                    jnews.carousel({
                        container: e,
                        textDirection: 1 == jnewsoption.rtl ? "rtl" : "ltr",
                        onInit: function (e) {
                            void 0 !== e.nextButton && c.addClass(e.nextButton, "tns-next"), void 0 !== e.prevButton && c.addClass(e.prevButton, "tns-prev")
                        }
                    })
                }))
            })), j && j.length && jnews.overlayslider({
                container: j[0],
                textDirection: 1 == jnewsoption.rtl ? "rtl" : "ltr",
                onInit: function (e) {
                    void 0 !== e.nextButton && c.addClass(e.nextButton, "tns-next"), void 0 !== e.prevButton && c.addClass(e.prevButton, "tns-prev")
                }
            }), v && v.length && c.forEach(v, (function (e, t) {
                jnews.ticker({
                    container: e
                })
            })), y && y.length && c.forEach(y, (function (e, t) {
                jnews.vidplaylist({
                    container: e,
                    textDirection: 1 == jnewsoption.rtl ? "rtl" : "ltr",
                    onInit: function (e) {
                        void 0 !== e.nextButton && c.addClass(e.nextButton, "tns-next"), void 0 !== e.prevButton && c.addClass(e.prevButton, "tns-prev")
                    }
                })
            })), jnews.hero && jnews.hero.init(), b && c.forEach(b, (function (e, t) {
                jnews.webstories({
                    container: e
                })
            })), n(), e(window).width() > 768 && (! function () {
                if (!((e(".jeg_double_sidebar").length > 1 || e(".jeg_double_right_sidebar").length > 1) && e(window).width() < 992)) {
                    var t = e(".jeg_sticky_sidebar");
                    t.theiaStickySidebar({
                        additionalMarginTop: 20
                    }), window.addEventListener("resize", (function () {
                        window.innerWidth >= 992 ? t.trigger("theiaStickySidebarActivate") : t.trigger("theiaStickySidebarDeactivate")
                    }))
                }
            }(), p.find(".share-float").theiaStickySidebar({
                additionalMarginTop: 20,
                updateSidebarHeight: !1
            }), p.find(".jeg_parallax_bg").parallax("50%", .1)), g.length && g.jskill(), s = jnews.body_inject ? jnews.body_inject.find(".jscroll-to-top") : e(".jscroll-to-top"), l = function () {
                e(window).scrollTop() > 400 ? s.addClass("show") : s.removeClass("show")
            }, s.on("click", (function () {
                return e("html, body").animate({
                    scrollTop: 0
                }, 600), !1
            })), e(window).width() > 1024 ? ("object" == typeof jnews.library && jnews.library.winLoad(l), e(window).on("scroll", l)) : e(window).off("scroll", l), function () {
                var t = jnews.body_inject ? jnews.body_inject.find("a[href*=\\#]:not([href=\\#])") : e("a[href*=\\#]:not([href=\\#])");
                t.length && t.each((function (t, n) {
                    var a = e(n);
                    if (void 0 !== a.data("vc-container") || a.hasClass("bp-primary-action") || a.hasClass("jeg_popuplink")) return !1;
                    a.on("click", (function (t) {
                        var n = e(this).attr("href");
                        if ((n = n.split("#")).length > 1) {
                            n = n[1];
                            var a = jnews.body_inject ? jnews.body_inject.find("#" + n) : e("#" + n);
                            0 !== a.length && e("html, body").animate({
                                scrollTop: a.offset().top
                            }, 600)
                        }
                    }))
                }))
            }(), a(), p.find('select:visible:not(.woocommerce select):not(select.form-control-solid):not(.drts select):not([class^="wpforms"])').chosen({
                disable_search_threshold: 10
            }), e.do_media_render(p), t(), window.onYouTubeIframeAPIReady = function () {
                var t = p.find(".jeg_blocklink .jeg_videobg");
                t.length && t.each((function () {
                    e(this).jvideo_background()
                }))
            }, jnewsoption.gif) p.find('.content-inner img[src$=".gif"]').jnewsgif();
        r(c.globalBody), e.facebook_page_widget(), e.twitter_widget(), e.google_plus_widget(), e.pinterest_widget(), e(document).ajaxComplete((function () {
            e.google_plus_widget(), e.twitter_widget(), e.facebook_page_widget()
        })), e.ajaxSetup({
            data: {
                lang: jnewsoption.language
            }
        }), i(), f.length && f.ajax_review_search(), o(p.find(".entry-content")), e(document).on("jnews-autoload-change-id", (function (e, t) {
            o(p.find(".post-autoload[data-id=" + t + "]").find(".entry-content"))
        })), (d = jnews.body_inject ? jnews.body_inject.find(".jnews_author_box_container") : e(".jnews_author_box_container")).length && d.each((function () {
            var t = e(this);
            t.hasClass("author-truncate") && t.on("click", (function () {
                e(this).removeClass("author-truncate")
            }))
        }))
    })), e(window).load((function () {
        if (-1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > 0) {
            var e = document.createEvent("UIEvents");
            e.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(e)
        } else window.dispatchEvent(new Event("resize"))
    })), e(document).on("jnews-ajax-load", (function (a, i) {
        var o = !!("object" == typeof jnews && "object" == typeof jnews.library) && jnews.library;
        t(), n(), e.do_media_render(i), e(window).width() > 768 && (e(i).find(".jeg_sticky_sidebar").theiaStickySidebar({
            additionalMarginTop: 20
        }), e(i).find(".share-float").theiaStickySidebar({
            additionalMarginTop: 20,
            updateSidebarHeight: !1
        }), e(i).find(".jeg_parallax_bg").parallax("50%", .1)), e(i).find("select:visible").chosen({
            disable_search_threshold: 10
        }), o && "undefined" !== o.globalBody && o.forEach(i, (function (e, t) {
            if ("function" == typeof jnews.carousel) {
                var n = e.getElementsByClassName("jeg_postblock_carousel");
                n.length && o.forEach(n, (function (e, t) {
                    jnews.carousel({
                        container: e,
                        textDirection: 1 == jnewsoption.rtl ? "rtl" : "ltr",
                        onInit: function (e) {
                            void 0 !== e.nextButton && o.addClass(e.nextButton, "tns-next"), void 0 !== e.prevButton && o.addClass(e.prevButton, "tns-prev")
                        }
                    })
                }))
            }
            if ("function" == typeof jnews.tns) {
                var a = e.getElementsByClassName("featured_gallery");
                a.length && o.forEach(a, (function (e, t) {
                    if (!o.hasClass(e, "jeg_tns_active")) {
                        var n = jnews.tns({
                            container: e,
                            textDirection: 1 == jnewsoption.rtl ? "rtl" : "ltr",
                            controls: !0,
                            controlsText: ["", ""],
                            nav: !0,
                            items: 1,
                            mouseDrag: !0,
                            autoplay: !1,
                            autoplayTimeout: 3e3,
                            loop: !1,
                            onInit: function (e) {
                                void 0 !== e.nextButton && o.addClass(e.nextButton, "tns-next"), void 0 !== e.prevButton && o.addClass(e.prevButton, "tns-prev")
                            }
                        });
                        void 0 !== n && (n.events.on("dragStart", (function (e) {
                            e.event.preventDefault(), e.event.stopPropagation()
                        })), o.addClass(e, "jeg_tns_active"), o.dataStorage.put(e, "tiny-slider", n))
                    }
                }))
            }
            if ("function" == typeof jnews.vidplaylist) {
                var s = e.getElementsByClassName("jeg_video_playlist");
                s.length && (o.forEach(s, (function (e, t) {
                    jnews.vidplaylist({
                        container: e,
                        textDirection: 1 == jnewsoption.rtl ? "rtl" : "ltr",
                        onInit: function (e) {
                            void 0 !== e.nextButton && o.addClass(e.nextButton, "tns-next"), void 0 !== e.prevButton && o.addClass(e.prevButton, "tns-prev")
                        }
                    })
                })), setTimeout((function () {
                    window.dispatchEvent(new Event("resize"))
                }), 500))
            }
            if ("function" == typeof jnews.slider) {
                var l = e.querySelectorAll(".jeg_slider_wrapper .jeg_slider");
                l.length && o.forEach(l, (function (e, t) {
                    jnews.slider({
                        container: e,
                        onInit: function (e) {
                            void 0 !== e.nextButton && o.addClass(e.nextButton, "tns-next"), void 0 !== e.prevButton && o.addClass(e.prevButton, "tns-prev")
                        }
                    })
                }))
            }
            "function" == typeof jnews.splitpost && jnews.splitpost(e), o.forEach(i, (function (e, t) {
                r(e)
            }))
        })), e(i).find('.content-inner img[src$=".gif"]').jnewsgif();
        var s = e(i).find(".jeg_reviewbars");
        s.length && s.jskill();
        var l = e(i).find(".jeg_tabpost_widget");
        l.length && l.jtabs(), e(i).find(".jeg_module_hook").jmodule(), jnews.widget.popular.init(i), jnews.popup.init(i), jnews.comment.init(i), jnews.mobile.truncate(), e.facebook_page_widget(), e.twitter_widget(), e.google_plus_widget(), e.pinterest_widget()
    }));
    var s = !!("object" == typeof jnews && "object" == typeof jnews.library) && jnews.library;

    function r(e) {
        if (s) {
            var t = e.getElementsByClassName("jeg_preview_slider");
            t.length && (s.forEach(t, (function (e, t) {
                var n = e,
                    a = window[n.dataset.selector];
                jnews.jpreviewslider(n, a)
            })), setTimeout((function () {
                s.triggerEvents(s.win, "resize")
            }), 500))
        }
    }
    s && s.addEvents(s.doc, {
        jnews_after_split_content_ajax: function (e) {
            if (e.detail && e.detail.data) {
                var t = e.detail.data;
                s.forEach(t, (function (e, t) {
                    r(e)
                }))
            }
        }
    })
}(jQuery),
function (e) {
    "use strict";
    window.jnews = window.jnews || {};
    var t = "object" == typeof jnews && "object" == typeof jnews.library,
        n = !!t && jnews.library;
    void 0 === jnews.body_inject && (window.jnews.body_inject = e("body")), window.jnews.menu = {
        newsfeed_xhr: null,
        search_length_word: 3,
        search_timeout: null,
        search_xhr: null,
        init: function (a) {
            var i = this;
            i.isJNewsLibrary = t, i.jnewsLibrary = !!i.isJNewsLibrary && n, void 0 === a && (a = jnews.body_inject ? jnews.body_inject : e("body")), a.find(".jeg_menu").each((function () {
                var t = this,
                    n = (t = e(t)).attr("data-animation");
                "slide" === n ? t.superfish({
                    animationType: n,
                    popUpSelector: "ul,.sub-menu",
                    speed: 150,
                    animationOut: 100,
                    onShow: function () {
                        e(this).find(".jeg_newsfeed").length && i.mega_menu_init(this, i)
                    }
                }) : "animateTransform" === n ? t.superfish({
                    animationType: n,
                    popUpSelector: "ul,.sub-menu",
                    disableHI: !0,
                    speed: 200,
                    delay: 0,
                    onShow: function () {
                        e(this).find(".jeg_newsfeed").length && i.mega_menu_init(this, i)
                    }
                }) : "none" === n ? t.superfish({
                    animationType: n,
                    popUpSelector: "ul,.sub-menu",
                    delay: 0,
                    disableHI: !0,
                    animation: {
                        opacity: "show"
                    },
                    speed: 1,
                    onShow: function () {
                        e(this).find(".jeg_newsfeed").length && i.mega_menu_init(this, i)
                    }
                }) : t.superfish({
                    popUpSelector: "ul,.sub-menu",
                    delay: 250,
                    speed: "fast",
                    animation: {
                        opacity: "show"
                    },
                    onShow: function () {
                        e(this).find(".jeg_newsfeed").length && i.mega_menu_init(this, i)
                    }
                })
            })), i.search(a), i.meganav(a)
        },
        meganav: function (t) {
            var n = t.find(".jeg_meganav_bar");
            n.find(".current_title").on("click", (function () {
                n.toggleClass("nav-open")
            })), e(document).mouseup((function (t) {
                n.hasClass("nav-open") && !e(t.target).parents(".jeg_meganav_bar").length > 0 && n.removeClass("nav-open")
            }))
        },
        search: function (e) {
            this.search_toggle(e), this.live_search(e)
        },
        search_toggle: function (t) {
            t.find(".jeg_search_toggle").on("click", (function (t) {
                t.preventDefault();
                var n = e(this).parent(".jeg_search_wrapper"),
                    a = e(this).parents(".jeg_container, .jeg_container_full"),
                    i = n.hasClass("jeg_search_fullwidth_expand") ? "hide_navbar_items" : "";
                a.toggleClass("jeg_search_expanded " + i), e("i.fa", e(this)).toggleClass("fa-close fa-search"), e(".jeg_search_input", n).focus()
            }))
        },
        live_search: function (t) {
            var n = this;
            jnewsoption.live_search && (t.find(".jeg_search_wrapper .jeg_search_input").each((function () {
                var t = null,
                    a = e(this),
                    i = e(this).parents(".jeg_search_wrapper");
                e(this).on("keyup", (function () {
                    if (!e(i).hasClass("jeg_search_modal_expand")) {
                        var o = e(this).val();
                        o.trim().length >= n.search_length_word && o !== t ? (t = o, n.do_live_search(o, a)) : o.trim().length < n.search_length_word && n.hide_live_search()
                    }
                }))
            })), t.find(".search-all-button").on("click", (function (t) {
                t.preventDefault();
                var n = e(this).parents(".jeg_search_wrapper");
                e(n).find("form").submit()
            })))
        },
        do_live_search: function (t, n) {
            var a = this;
            clearTimeout(a.search_timeout), a.search_timeout = setTimeout((function () {
                null !== a.search_xhr && a.search_xhr.abort(), a.loading_search(n), a.search_xhr = e.ajax({
                    url: jnews_ajax_url,
                    type: "post",
                    dataType: "html",
                    data: {
                        s: t,
                        action: "jnews_ajax_live_search"
                    },
                    success: e.proxy(a.load_search, a, n)
                })
            }), 200)
        },
        loading_search: function (t) {
            var n = e(t).parents(".jeg_search_wrapper");
            e(n).find(".jeg_search_button .fa").removeClass("fa-search").addClass("fa-spinner fa-spin")
        },
        remove_loading_search: function (t) {
            var n = e(t).parents(".jeg_search_wrapper");
            e(n).find(".jeg_search_button .fa").removeClass("fa-spinner fa-spin").addClass("fa-search")
        },
        load_search: function (t, n) {
            var a = this,
                i = e(t).parents(".jeg_search_wrapper");
            "" === n ? (e(i).find(".search-result-wrapper").html(""), a.search_no_data(i)) : (e(i).find(".search-result-wrapper").html("").append(n), a.search_data_exist(i)), a.remove_loading_search(t)
        },
        search_no_data: function (t) {
            e(t).find(".jeg_search_result").removeClass("jeg_search_hide"), e(t).find(".jeg_search_result").removeClass("with_result").addClass("no_result")
        },
        search_data_exist: function (t) {
            e(t).find(".jeg_search_result").removeClass("jeg_search_hide"), e(t).find(".jeg_search_result").addClass("with_result").removeClass("no_result")
        },
        hide_live_search: function () {
            e(".jeg_search_result").addClass("jeg_search_hide")
        },
        sticky_menu: function (t) {
            void 0 === t && (t = jnews.body_inject ? jnews.body_inject : e("body"));
            var n = t.find(".jeg_stickybar");
            if (n.length) {
                n.jsticky({
                    item_offset: ".jeg_header",
                    mode: n.data("mode"),
                    state_class: "jeg_sticky_nav",
                    wrapper: ".jeg_stickybar",
                    broadcast_position: !0
                })
            }
        },
        mega_menu_init: function (t, n) {
            var a = e(t).parents(".jeg_megamenu");
            if (a.hasClass("ajaxload") && !a.hasClass("loaded")) {
                var i = a.data("category"),
                    o = "jnews_build_mega_category_1",
                    s = a.data("number"),
                    r = "";
                a.hasClass("category_2") && (o = "jnews_build_mega_category_2", r = a.data("tags")), null !== n.newsfeed_xhr && n.newsfeed_xhr.abort(), n.newsfeed_xhr = e.ajax({
                    url: jnews_ajax_url,
                    type: "post",
                    dataType: "html",
                    data: {
                        cat_id: i,
                        action: o,
                        number: s,
                        tags: r
                    },
                    success: function (e) {
                        a.find(".jeg_newsfeed .newsfeed_overlay").remove(), a.find(".jeg_newsfeed").append(e), n.create_menu_carousel(t), n.attach_mouseenter_subcategory(t, n), a.addClass("loaded")
                    }
                })
            } else n.create_menu_carousel(t), n.attach_mouseenter_subcategory(t, n)
        },
        create_menu_carousel_content: function (e) {
            var t = this,
                n = e.getElementsByClassName("newsfeed_carousel");
            if (n.length) {
                var a = 4,
                    i = t.jnewsLibrary.getParents(e, ".jeg_megamenu");
                i = (i = i.length ? i[i.length - 1] : t.jnewsLibrary.doc).dataset.itemRow, t.jnewsLibrary.forEach(n, (function (n, o) {
                    if (a = "default" === i ? t.jnewsLibrary.hasClass(n, "with_subcat") ? t.jnewsLibrary.getParents(e, ".jeg_header.full").length ? 5 : 3 : t.jnewsLibrary.getParents(e, ".jeg_header.full").length ? 6 : 4 : i, !t.jnewsLibrary.hasClass(n, "jeg_tns_active")) {
                        var s = jnews.tns({
                            container: n,
                            textDirection: 1 == jnewsoption.rtl ? "rtl" : "ltr",
                            controls: !0,
                            controlsText: ["", ""],
                            nav: !1,
                            loop: !1,
                            gutter: 20,
                            items: a,
                            mouseDrag: !0,
                            controlsPosition: "bottom",
                            loop: !0,
                            onInit: function (e) {
                                void 0 !== e.nextButton && t.jnewsLibrary.addClass(e.nextButton, "tns-next"), void 0 !== e.prevButton && t.jnewsLibrary.addClass(e.prevButton, "tns-prev")
                            }
                        });
                        void 0 !== s && (s.events.on("dragStart", (function (e) {
                            e.event.preventDefault(), e.event.stopPropagation()
                        })), t.jnewsLibrary.addClass(n, "jeg_tns_active"), t.jnewsLibrary.dataStorage.put(n, "tiny-slider", s))
                    }
                    var r = e.getElementsByClassName("jeg_newsfeed_list");
                    r.length && t.jnewsLibrary.addClass(r[0], "loaded")
                }))
            }
        },
        create_menu_carousel: function (e) {
            var t = this;
            t.jnewsLibrary && (e.length ? t.jnewsLibrary.forEach(e, (function (e, n) {
                t.create_menu_carousel_content(e)
            })) : t.create_menu_carousel_content(e))
        },
        attach_mouseenter_subcategory: function (t, n) {
            e(t).find(".jeg_newsfeed_subcat li").on("mouseenter", (function () {
                n.menu_load_newsfeed(this, n)
            }))
        },
        menu_loaded: function (e) {
            e.addClass("loaded"), e.height("auto")
        },
        menu_load_newsfeed: function (t, n) {
            if (!e(t).hasClass("active")) {
                var a = e(t).parents(".jeg_newsfeed"),
                    i = e(a).find(".jeg_newsfeed_list"),
                    o = e(i).height();
                i.height(o);
                var s = e(t).data("cat-id"),
                    r = i.find(".jeg_newsfeed_container[data-cat-id='" + s + "']");
                if (r.length) i.removeClass("loaded"), i.find(".jeg_newsfeed_container").removeClass("active").hide(), i.find(".jeg_newsfeed_container[data-cat-id='" + s + "']").fadeIn((function () {
                    n.menu_loaded(i)
                }));
                else {
                    null !== n.newsfeed_xhr && n.newsfeed_xhr.abort();
                    var l = e(t).parents(".jeg_megamenu"),
                        d = e(l).data("number"),
                        c = "jnews_mega_category_1";
                    e(l).hasClass("category_2") && (c = "jnews_mega_category_2"), i.removeClass("loaded"), n.newsfeed_xhr = e.ajax({
                        url: jnews_ajax_url,
                        type: "post",
                        dataType: "html",
                        data: {
                            cat_id: s,
                            action: c,
                            number: d
                        },
                        success: function (e) {
                            i.find(".jeg_newsfeed_container").hide(), i.append(e), r = i.find(".jeg_newsfeed_container[data-cat-id='" + s + "']"), n.create_menu_carousel(r), n.menu_loaded(i)
                        }
                    })
                }
                e(t).addClass("active").siblings().removeClass("active")
            }
        }
    }, jnews.menu.init(), jnews.menu.sticky_menu(), window.jnews.loginregister = {
        xhr: null,
        captcha: [],
        validateCaptcha: !1,
        show_popup: function (t) {
            var n = this;
            t.length > 0 && t.magnificPopup({
                type: "inline",
                removalDelay: 500,
                midClick: !0,
                callbacks: {
                    beforeOpen: function () {
                        this.st.mainClass = "mfp-zoom-out", jnews.body_inject.removeClass("jeg_show_menu")
                    },
                    change: function () {
                        var t = this.content.find(".g-recaptcha"),
                            a = this.content.find("form").data("type"),
                            i = t.data("sitekey");
                        this.content.find(".form-message p").remove(), n.validateCaptcha = !1, 1 == jnewsoption.recaptcha && t.length && (t.hasClass("loaded") ? grecaptcha.reset(n.captcha[a]) : (n.captcha[a] = grecaptcha.render(t.get(0), {
                            sitekey: i,
                            callback: n.validateResponse.bind(n)
                        }), e(t).addClass("loaded")))
                    }
                }
            })
        },
        validateResponse: function (e) {
            "" !== e && (this.validateCaptcha = !0)
        },
        init: function () {
            var t = jnews.body_inject ? jnews.body_inject.find(".jeg_popuplink") : e(".jeg_popuplink");
            this.show_popup(t);
            var n = jnews.body_inject ? jnews.body_inject.find(".jeg_popuplink_parent a") : e(".jeg_popuplink_parent a");
            this.show_popup(n)
        },
        validateForm: function (t) {
            var n = e(t).find(".form-message"),
                a = e(t).data("type");
            if ("register" === a && "" === e(t).find('[name="email"]').val()) return n.html("<p class='alert alert-error'>" + jnewsoption.lang.empty_email + "</p>"), !1;
            if (("login" === a || "register" === a) && "" === e(t).find('[name="username"]').val()) return n.html("<p class='alert alert-error'>" + jnewsoption.lang.empty_username + "</p>"), !1;
            if ("login" === a && "" === e(t).find('[name="password"]').val()) return n.html("<p class='alert alert-error'>" + jnewsoption.lang.empty_password + "</p>"), !1;
            if ("forgot" === a && "" === e(t).find('[name="user_login"]').val()) return n.html("<p class='alert alert-error'>" + jnewsoption.lang.empty_username + "</p>"), !1;
            return !(1 == jnewsoption.recaptcha && !this.validateCaptcha) || (n.html("<p class='alert alert-error'>" + jnewsoption.lang.invalid_recaptcha + "</p>"), !1)
        },
        hook_form: function () {
            var t = this;
            e(".jeg_popupform.jeg_popup_account > form").each((function () {
                var n = this,
                    a = e(n),
                    i = a.find(".button"),
                    o = a.find(".form-message");
                a.on("submit", (function (s) {
                    s.preventDefault(), t.validateForm(n) && (o.html(""), i.val(i.data("process")), null !== t.xhr && t.xhr.abort(), t.xhr = e.post(jnews_ajax_url, {
                        action: "jnews_refresh_nonce",
                        refresh_action_nonce: "jnews_nonce"
                    }).always((function (n) {
                        n.jnews_nonce && (a.find('input[name="jnews_nonce"]').val(n.jnews_nonce), t.xhr = e.ajax({
                            url: jnews_ajax_url,
                            type: "post",
                            dataType: "json",
                            data: a.serialize(),
                            success: function (e) {
                                if (1 === e.response && (o.html("<p class='alert alert-success'>" + e.string + "</p>"), 1 === e.refresh && (window.location = jnewsoption.login_reload)), 0 == e.response) {
                                    var n = a.data("type");
                                    i.val(i.data("string")), o.html("<p class='alert alert-error'>" + e.string + "</p>"), "undefined" != typeof grecaptcha && grecaptcha.reset(t.captcha[n])
                                }
                                i.val(i.data("string")), a.trigger("reset")
                            }
                        }))
                    })))
                }))
            }))
        }
    }, window.jnews.mobile = {
        init: function () {
            this.navmobile = jnews.body_inject ? jnews.body_inject.find(".jeg_navbar_mobile") : e(".jeg_navbar_mobile"), this.mobilemenu = jnews.body_inject ? jnews.body_inject.find(".jeg_mobile_menu") : e(".jeg_mobile_menu"), this.menu(), this.search(), this.truncate()
        },
        truncate: function () {
            e(".content-inner.mobile-truncate").on("click", (function () {
                e(this).removeClass("mobile-truncate"), e(this).trigger("resize")
            }))
        },
        show_menu: function (e) {
            e.preventDefault(), jnews.body_inject.toggleClass("jeg_show_menu")
        },
        hide_menu: function (e) {
            e.preventDefault(), jnews.body_inject.removeClass("jeg_show_menu")
        },
        menu: function () {
            var t = this;
            t.mobilemenu.superfish(), e(".jeg_mobile_toggle").off("click", t.show_menu).on("click", t.show_menu), e(".jeg_menu_close").off("click", t.hide_menu).on("click", t.hide_menu), e(document).mouseup((function (t) {
                jnews.body_inject.hasClass("jeg_show_menu") && !e(t.target).parents(".jeg_mobile_wrapper").length > 0 && jnews.body_inject.removeClass("jeg_show_menu")
            })), t.navmobile.jsticky({
                mode: t.navmobile.data("mode"),
                item_offset: ".jeg_navbar_mobile",
                state_class: "jeg_sticky_nav",
                wrapper: ".jeg_navbar_mobile_wrapper",
                use_translate3d: !0,
                broadcast_position: !1
            })
        },
        search: function () {
            e(".jeg_mobile_search").on("click", (function (t) {
                t.preventDefault(), e("body").toggleClass("jeg_search_expanded"), e("i.fa", e(this)).toggleClass("fa-close fa-search"), e(".jeg_navbar_mobile_wrapper .jeg_search_input").val("").focus()
            }))
        }
    }, jnews.mobile.init(), window.jnews.first_load_caller = {
        init: function () {
            jnews.first_load ? jnews.first_load.init() : n.requestAnimationFrame.call(n.win, function () {
                this.init()
            }.bind(this))
        }
    }, jnews.first_load_caller.init(), window.jnews.deprecated = {
        init: function (t) {
            void 0 === t && (t = jnews.body_inject ? jnews.body_inject : e("body"));
            var n = t.find("[class*=google-plus].removed, [class*=google_plus].removed, [class*=googleplus].removed ");
            n.length && n.off("click.share click").on("click", (function (e) {
                e.preventDefault
            })).on("click", (function () {
                return !1
            }))
        }
    }, jnews.deprecated.init(), window.jnews.widget = {}, window.jnews.widget.popular = {
        init: function (t) {
            void 0 === t && (t = jnews.body_inject ? jnews.body_inject : e("body"));
            var n = t.find(".widget_jnews_popular .socialshare_list a");
            n.length && n.on("click", (function (t) {
                var n = e(this);
                t.preventDefault();
                var a = n.attr("href");
                window.open(a, "", "height=570,width=750")
            }))
        }
    }, jnews.widget.popular.init(), window.jnews.popup = {
        popupcontainer: null,
        container: null,
        init: function (t) {
            var n = this;
            n.isJNewsLibrary = "object" == typeof jnews && "object" == typeof jnews.library, n.jnewsLibrary = !!n.isJNewsLibrary && jnews.library, n.jnewsLibrary && (n.globalBody = jnews.body_inject ? jnews.body_inject : e("body"), n.container = void 0 === t ? n.globalBody : t, "photoswipe" === jnewsoption.popup_script ? (n.popupcontainer = n.globalBody.find(".pswp"), n.popupcontainer = n.popupcontainer.get(0), n.popup_photoswipe()) : "magnific" === jnewsoption.popup_script && n.popup_magnific())
        },
        expand_photoswipe: function (e, t) {
            var n = {
                index: t,
                history: !1,
                focus: !1,
                showAnimationDuration: 0,
                hideAnimationDuration: 0,
                barsSize: {
                    top: 44,
                    bottom: 0
                }
            };
            new PhotoSwipe(this.popupcontainer, PhotoSwipeUI_Default, e, n).init()
        },
        expand_single_featured: function (t) {
            var n = e(t),
                a = n.find("img"),
                i = [{
                    src: n.attr("href"),
                    w: parseInt(a.data("full-width"), 10),
                    h: parseInt(a.data("full-height"), 10),
                    title: a.attr("alt")
                }];
            this.expand_photoswipe(i, 0)
        },
        expand_featured_gallery: function (e) {
            var t = this,
                n = t.jnewsLibrary.getParents(e, ".featured_gallery");
            n = n.length ? n[n.length - 1] : t.jnewsLibrary.doc;
            var a = t.jnewsLibrary.dataStorage.get(n, "tiny-slider"),
                i = a.getInfo().index,
                o = [];
            t.jnewsLibrary.forEach(n.getElementsByTagName("a"), (function (e, n) {
                var a = e.getElementsByTagName("img");
                if (a.length) {
                    a = a[0];
                    var i = e.getElementsByClassName("thumbnail-container");
                    if (i.length)
                        if (i = i[0], t.jnewsLibrary.hasClass(i, "thumbnail-background")) {
                            var s = e.querySelectorAll(".thumbnail-container > div");
                            i.length && (s = s[0], o[n] = {
                                src: e.getAttribute("href"),
                                w: parseInt(s.dataset.fullWidth, 10),
                                h: parseInt(s.dataset.fullHeight, 10),
                                title: s.getAttribute("alt")
                            })
                        } else o[n] = {
                            src: e.getAttribute("href"),
                            w: parseInt(a.dataset.fullWidth, 10),
                            h: parseInt(a.dataset.fullHeight, 10),
                            title: a.getAttribute("alt")
                        }
                }
            }));
            var s = {
                    index: i,
                    history: !1,
                    focus: !1,
                    showAnimationDuration: 0,
                    hideAnimationDuration: 0
                },
                r = new PhotoSwipe(t.popupcontainer, PhotoSwipeUI_Default, o, s);
            r.listen("afterChange", (function () {
                var e = r.getCurrentIndex();
                a.goTo(e)
            })), r.init()
        },
        expand_wp_gallery: function (t) {
            var n = e(t),
                a = n.parents(".gallery"),
                i = n.parents("figure").index("figure"),
                o = [];
            a.find("a").each((function (t) {
                var n = e(this),
                    a = n.find("img"),
                    i = n.parents(".gallery-item").find(".wp-caption-text").text();
                o[t] = {
                    src: n.attr("href"),
                    w: parseInt(a.data("full-width"), 10),
                    h: parseInt(a.data("full-height"), 10),
                    title: i
                }
            })), this.expand_photoswipe(o, i)
        },
        expand_single_image_caption: function (t) {
            var n = this,
                a = e(t),
                i = a.parent(),
                o = i.find("a").attr("href"),
                s = i.find(".wp-caption-text").text();
            a.addClass("load-image");
            var r = new Image;
            r.onload = function () {
                a.removeClass("load-image");
                var e = [{
                    src: o,
                    w: parseInt(r.width, 10),
                    h: parseInt(r.height, 10),
                    title: s
                }];
                n.expand_photoswipe(e, 0)
            }, r.src = o
        },
        expand_single_image: function (t) {
            var n = this,
                a = e(t),
                i = a.find("img");
            a.addClass("load-image");
            var o = new Image;
            o.onload = function () {
                a.removeClass("load-image");
                var e = [{
                    src: a.attr("href"),
                    w: parseInt(o.width, 10),
                    h: parseInt(o.height, 10),
                    title: i.attr("alt")
                }];
                n.expand_photoswipe(e, 0)
            }, o.src = a.attr("href")
        },
        popup_photoswipe: function () {
            var t = this;
            t.container.find(".jeg_featured.featured_image a").on("click", (function (e) {
                e.preventDefault(), t.expand_single_featured(this)
            })), t.container.find(".featured_gallery a").on("click", (function (e) {
                e.preventDefault(), t.expand_featured_gallery(this)
            })), t.container.find(".content-inner .gallery").find("a[href$='.gif'], a[href$='.jpg'], a[href$='.png'], a[href$='.bmp']").on("click", (function (e) {
                e.preventDefault(), t.expand_wp_gallery(this)
            })), t.container.find(".content-inner figure.wp-caption").find("a[href$='.gif'], a[href$='.jpg'], a[href$='.png'], a[href$='.bmp']").find("img").each((function () {
                e(this).parent().on("click", (function (e) {
                    e.preventDefault(), t.expand_single_image_caption(this)
                }))
            })), t.container.find(".content-inner").find("a[href$='.gif'], a[href$='.jpg'], a[href$='.png'], a[href$='.bmp']").find("img[class*='align']").each((function () {
                e(this).parent().on("click", (function (e) {
                    e.preventDefault(), t.expand_single_image(this)
                }))
            }))
        },
        expand_magnific: function (t) {
            e(t).magnificPopup({
                gallery: {
                    enabled: !0
                },
                type: "image",
                closeOnContentClick: !0,
                closeBtnInside: !1,
                fixedContentPos: !0,
                mainClass: "mfp-no-margins mfp-with-zoom",
                image: {
                    verticalFit: !0,
                    titleSrc: function (e) {
                        return "FIGURE" === e.el.parent().prop("tagName") ? e.el.parent().find("figcaption").text() : e.el.parents(".gallery-item").find(".wp-caption-text").length ? e.el.parents(".gallery-item").find(".wp-caption-text").text() : e.el.find("img").attr("alt")
                    }
                }
            })
        },
        expand_magnific_gallery: function (e) {
            this.expand_magnific(e)
        },
        popup_magnitif_single_gallery: function (t) {
            var n = this,
                a = [];
            n.container.find(t).each((function () {
                var t = e(this);
                "IMG" === t.prop("tagName") ? a.push(t.parent().get(0)) : a.push(t.get(0))
            })), n.expand_magnific(a), n.expand_magnific_gallery(".featured_gallery a")
        },
        popup_magnitif_normal: function (t) {
            var n = this;
            n.container.find(t).each((function () {
                var t = e(this);
                "IMG" === t.prop("tagName") ? n.expand_magnific(t.parent().get(0)) : n.expand_magnific(t.get(0))
            })), n.expand_magnific_gallery(".featured_gallery a")
        },
        popup_magnific: function () {
            var e = ".content-inner figure.wp-caption > a > img,.content-inner a[href$='.gif'] > img[class*='wp-image'],.content-inner a[href$='.jpg'] > img[class*='wp-image'],.content-inner a[href$='.png'] > img[class*='wp-image'],.content-inner a[href$='.bmp'] > img[class*='wp-image'],.content-inner a[href$='.gif'] > img[class*='align'],.content-inner a[href$='.jpg'] > img[class*='align'],.content-inner a[href$='.png'] > img[class*='align'],.content-inner a[href$='.bmp'] > img[class*='align'],.jeg_featured.featured_image a:not(.wp-caption-text a),.content-inner .gallery a";
            "1" === jnewsoption.single_gallery ? this.popup_magnitif_single_gallery(e) : this.popup_magnitif_normal(e)
        }
    }, jnews.popup.init(), window.jnews.comment = {
        container: null,
        init: function (t) {
            var n = this;
            n.container = void 0 === t ? jnews.body_inject ? jnews.body_inject : e("body") : t, this.create(n.container);
            var a = n.container.find(".ajax_comment_button");
            a.length && a.on("click", (function () {
                var t = e(this),
                    a = t.data("id"),
                    i = t.data("post-type"),
                    o = t.data("loading");
                t.find("span").text(o), e.ajax({
                    url: jnews_ajax_url,
                    type: "post",
                    dataType: "html",
                    data: {
                        action: "jnews_ajax_comment",
                        post_id: a,
                        post_type: i
                    },
                    success: function (e) {
                        t.after(e).remove(), n.create(n.container)
                    }
                })
            }))
        },
        create: function () {
            var t, n, a, i, o, s, r = jnews.body_inject ? jnews.body_inject.find("#comments") : e("#comments");
            if (r.length) {
                var l = r.attr("data-type"),
                    d = r.attr("data-id");
                if ("disqus" == l) e("#disqus-script").length ? DISQUS.reset({
                    reload: !0
                }) : (e("#disqus-script").remove(), (s = document.createElement("script")).id = "disqus-script", s.type = "text/javascript", s.async = !0, s.src = "//" + d + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(s));
                else if ("facebook" == l)
                    if (e("#facebook-jssdk").length) "undefined" != typeof FB && FB.XFBML.parse();
                    else if ("facebook" == l) {
                    var c = d ? "&appId=" + d : "";
                    t = document, n = "script", a = "facebook-jssdk", o = t.getElementsByTagName(n)[0], t.getElementById(a) || ((i = t.createElement(n)).id = a, i.src = "//connect.facebook.net/" + jnewsoption.language + "/sdk.js#xfbml=1&version=v2.8" + c, o.parentNode.insertBefore(i, o))
                }
            }
        }
    }, jnews.comment.init(), window.jnews.ajax_analytic = {
        update: function (e, t) {
            this.google_analytics(window.location.pathname, document.title), this.track_jnews(t)
        },
        get_nonce: function (e) {},
        google_analytics: function (e, t) {
            "undefined" == typeof pageTracker && "undefined" == typeof _gaq && "undefined" == typeof ga && "undefined" == typeof __gaTracker && "undefined" == typeof gaplusu || ("undefined" != typeof pageTracker && null !== pageTracker && pageTracker._trackPageview(e), "undefined" != typeof _gaq && null !== _gaq && (null != t && _gaq.push(["_set", "title", t]), _gaq.push(["_trackPageview", e])), "undefined" != typeof ga && null !== ga && (null != t && ga("set", "title", t), ga("send", "pageview", e)), "undefined" != typeof __gaTracker && null !== __gaTracker && __gaTracker("send", "pageview", e), "undefined" != typeof gaplusu && null !== gaplusu && (null != t && gaplusu("set", "title", t), gaplusu("send", "pageview", e)))
        },
        track_jnews: function (e) {
            jfla.indexOf("view_counter") > -1 && jnews.first_load.do_ajax({
                action: "jnews_first_load_action",
                load_action: ["view_counter"],
                jnews_id: e
            })
        }
    }, window.jnews.menu_drop = {
        init: function () {
            this.menu_drop = jnews.body_inject ? jnews.body_inject.find(".menu-item-has-children") : e(".menu-item-has-children"), this.menu_drop.length && e(window).width() <= 1024 && this.newEvent()
        },
        newEvent: function () {
            this.menu_drop.on("click", (function () {
                e(this).hasClass("sfHover") ? (e(this).removeClass("sfHover"), e(this).find(".sub-menu").attr("style", "display: none")) : e(this).find(".sub-menu").attr("style", "display: block")
            }))
        }
    }, jnews.menu_drop.init(), window.jnews.edit_account = {
        init: function () {
            this.changeHandler(), this.submitForm()
        },
        changeHandler: function () {
            var t = jnews.body_inject ? jnews.body_inject.find("#fname") : e("#fname"),
                n = jnews.body_inject ? jnews.body_inject.find("#lname") : e("#lname");
            (t.length || n.length) && (t.on("change", (function (t) {
                var n = this.value,
                    a = e("#lname").val(),
                    i = e("#dname");
                i.append("<option>" + n + "</option>"), i.append("<option>" + n + " " + a + "</option>"), i.append("<option>" + a + " " + n + "</option>"), i.chosen("destroy").chosen()
            })), n.on("change", (function (t) {
                var n = e("#fname").val(),
                    a = this.value,
                    i = e("#dname");
                i.append("<option>" + a + "</option>"), i.append("<option>" + n + " " + a + "</option>"), i.append("<option>" + a + " " + n + "</option>"), i.chosen("destroy").chosen()
            })))
        },
        submitForm: function () {
            var t = jnews.body_inject.find(".jeg_account_right form");
            t.submit((function (n) {
                if ("false" === t.attr("onsubmit")) return e(window).scrollTop(0), !1
            }))
        }
    }, jnews.edit_account.init()
}(jQuery);
! function (e) {
    const t = e(".jeg_dark_mode_toggle"),
        o = e("body");
    for (var a, r, d = void 0 === jnewsoption.site_slug ? "/" : jnewsoption.site_slug, i = void 0 === jnewsoption.site_domain ? window.location.hostname : jnewsoption.site_domain, n = window.location, c = new URL(n), s = c.searchParams.get("vc_editable"), g = c.searchParams.get("elementor-preview"), m = [], l = [], f = [], h = [], _ = [], k = [], u = [], j = [], p = [e(".jeg_header_wrapper"), e(".jeg_header_sticky"), e(".jeg_navbar_mobile_wrapper"), e(".jeg_about")], w = (a = "darkmode", (r = document.cookie.match("(^|;) ?" + a + "=([^;]*)(;|$)")) ? r[2] : null), v = (new Date).getHours(), y = o.hasClass("jeg_full_dark"), C = 0; C < 4; C++) m[C] = p[C].find("img.jeg_logo_img").attr("data-light-src"), l[C] = p[C].find("img.jeg_logo_img").attr("data-light-srcset"), f[C] = p[C].find("img.jeg_logo_img").attr("data-dark-src"), h[C] = p[C].find("img.jeg_logo_img").attr("data-dark-srcset"), p[C].find(".footer_logo img").each((function (t, o) {
        _[C] = void 0 === _[C] ? [] : _[C], k[C] = void 0 === k[C] ? [] : k[C], u[C] = void 0 === u[C] ? [] : u[C], j[C] = void 0 === j[C] ? [] : j[C], _[C][t] = e(o).attr("data-light-src"), k[C][t] = e(o).attr("data-light-srcset"), u[C][t] = e(o).attr("data-dark-src"), j[C][t] = e(o).attr("data-dark-srcset")
    }));
    if (o.hasClass("jeg_toggle_dark") && (t.on("change", (function () {
            null === s && null === g && function (t) {
                if (t.is(":checked")) {
                    o.addClass("jnews-dark-mode"), o.trigger("tinymce-add-dm");
                    for (var a = 0; a < 4; a++) p[a].find(".jeg_logo_img").attr({
                        src: f[a],
                        srcset: h[a]
                    }), p[a].find(".footer_logo img").each((function (t, o) {
                        e(o).attr({
                            src: u[a][t],
                            srcset: j[a][t],
                            "data-srcset": j[a][t]
                        })
                    }));
                    document.cookie = "darkmode = true;path = " + d + ";domain = " + i
                } else if (!t.is(":checked")) {
                    o.removeClass("jnews-dark-mode"), o.trigger("tinymce-remove-dm");
                    for (a = 0; a < 4; a++) p[a].find(".jeg_logo_img").attr({
                        src: m[a],
                        srcset: l[a]
                    }), p[a].find(".footer_logo img").each((function (t, o) {
                        e(o).attr({
                            src: _[a][t],
                            srcset: k[a][t],
                            "data-srcset": k[a][t]
                        })
                    }));
                    document.cookie = "darkmode = false;path = " + d + ";domain = " + i
                }
            }(e(this))
        })), t.click((function () {
            e(this).is(":checked") ? t.each((function () {
                e(this).prop("checked", !0).trigger("change")
            })) : e(this).is(":checked") || t.each((function () {
                e(this).prop("checked", !1).trigger("change")
            }))
        }))), o.hasClass("jeg_timed_dark"))
        if (v >= 18 || v <= 6) {
            o.addClass("jnews-dark-mode"), o.trigger("tinymce-add-dm");
            for (C = 0; C < 4; C++) p[C].find(".jeg_logo_img").attr({
                src: f[C],
                srcset: h[C]
            }), p[C].find(".footer_logo img").each((function (t, o) {
                e(o).attr({
                    src: u[C][t],
                    srcset: j[C][t],
                    "data-srcset": j[C][t]
                })
            }));
            document.cookie = "darkmode = true;path = " + d + ";domain = " + i
        } else {
            o.removeClass("jnews-dark-mode"), o.trigger("tinymce-remove-dm");
            for (C = 0; C < 4; C++) p[C].find(".jeg_logo_img").attr({
                src: m[C],
                srcset: l[C]
            }), p[C].find(".footer_logo img").each((function (t, o) {
                e(o).attr({
                    src: _[C][t],
                    srcset: k[C][t],
                    "data-srcset": k[C][t]
                })
            }));
            document.cookie = "darkmode = false;path = " + d + ";domain = " + i
        }
    "true" === w ? (t.prop("checked", !0).trigger("change"), document.cookie = "darkmode = true;path = " + d + ";domain = " + i) : "false" === w && (t.prop("checked", !1).trigger("change"), document.cookie = "darkmode = false;path = " + d + ";domain = " + i), e(document).on("tinymce-editor-init", function (t, a) {
        o.on("tinymce-add-dm", (function () {
            e(a.getBody()).addClass("jnews-dark-mode")
        })), o.on("tinymce-remove-dm", (function () {
            e(a.getBody()).removeClass("jnews-dark-mode")
        })), y || "true" === w ? o.trigger("tinymce-add-dm") : o.trigger("tinymce-remove-dm")
    }.bind(o).bind(w))
}(jQuery);
! function (e) {
    "use strict";
    window.jnews.weather = window.jnews.weather || {}, window.jnews.weather = {
        init: function (t) {
            let a = this;
            a.container = void 0 === t ? e("body") : t, a.topbarWeather(), a.widgetWeather()
        },
        topbarWeather: function () {
            let e = this;
            e.container.find(".jeg_top_weather").length && (e.element = e.container.find(".jeg_top_weather"), e.topbarWeatherHover(), e.topbarWeatherCarousel(), e.topbarTempClick())
        },
        topbarTempClick: function () {
            this.element.on("click", ".jeg_weather_temp", (function () {
                let t = e(this),
                    a = t.find(".jeg_weather_value"),
                    n = t.find(".jeg_weather_unit"),
                    i = n.attr("data-unit");
                t.find(".jeg_weather_degrees").length && (n = t.find(".jeg_weather_degrees"), i = n.attr("data-unit")), "f" === i ? (a.text(a.attr("data-temp-c")), n.attr("data-unit", "c"), t.find(".jeg_weather_unit").text("°c")) : (a.text(a.attr("data-temp-f")), n.attr("data-unit", "f"), t.find(".jeg_weather_unit").text("°f"))
            }))
        },
        topbarWeatherHover: function () {
            this.element.hoverIntent({
                over: function () {
                    e(this).find(".jeg_weather_item").fadeIn()
                },
                out: function () {
                    e(this).find(".jeg_weather_item").fadeOut()
                },
                timeout: 300
            })
        },
        topbarWeatherCarousel: function () {
            let e = this;
            if (e.autoplay = e.element.find(".jeg_weather_item_carousel").attr("data-autoplay"), e.autoplayDelay = e.element.find(".jeg_weather_item_carousel").attr("data-auto-delay"), e.autoplayHover = e.element.find(".jeg_weather_item_carousel").attr("data-auto-hover"), e.element.find(".jeg_weather_item_carousel").length) {
                var t = !!("object" == typeof jnews && "object" == typeof jnews.library) && jnews.library;
                t && "function" == typeof jnews.tns && t.forEach(e.element.find(".jeg_weather_item_carousel"), (function (a, n) {
                    if (!t.hasClass(a, "jeg_tns_active")) {
                        var i = jnews.tns({
                            container: a,
                            items: 3,
                            rewind: !0,
                            nav: !1,
                            controls: !1,
                            mouseDrag: !0,
                            controlsText: ["", ""],
                            autoplay: "1" === e.autoplay,
                            autoplayTimeout: parseInt(e.autoplayDelay),
                            autoplayHoverPause: "1" === e.autoplayHover
                        });
                        void 0 !== i && (i.events.on("dragStart", (function (e) {
                            e.event.preventDefault(), e.event.stopPropagation()
                        })), t.addClass(a, "jeg_tns_active"), t.dataStorage.put(a, "tiny-slider", i))
                    }
                }))
            }
        },
        convertTemperature: function (e, t) {
            let a = {};
            return "f" === e ? (a.unit = "c", a.value = 5 * (t - 32) / 9, a.value = Math.floor(a.value)) : (a.unit = "f", a.value = 9 * t / 5 + 32, a.value = Math.floor(a.value)), a
        },
        widgetWeather: function () {
            let e = this;
            e.container.find(".jeg_weather_widget").length && (e.element = e.container.find(".jeg_weather_widget"), e.widgetTempClick())
        },
        widgetTempClick: function () {
            this.element.on("click", ".jeg_weather_temp", (function () {
                e(this).find(".jeg_weather_value").each((function () {
                    let t = e(this),
                        a = t.parent().find(".jeg_weather_unit");
                    "f" === a.attr("data-unit") ? (t.text(t.attr("data-temp-c")), a.attr("data-unit", "c"), a.text("c")) : (t.text(t.attr("data-temp-f")), a.attr("data-unit", "f"), a.text("f"))
                }))
            }))
        }
    }, e(document).on("jnews-ajax-load", (function () {
        jnews.weather.init()
    })), "object" == typeof jnews && "object" == typeof jnews.library && jnews.library.winLoad((function () {
        jnews.library.requestAnimationFrame.call(jnews.library.win, (function () {
            jnews.weather.init()
        }))
    }))
}(jQuery); /*!This file is auto-generated*/
! function (c, d) {
    "use strict";
    var e = !1,
        n = !1;
    if (d.querySelector)
        if (c.addEventListener) e = !0;
    if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage)
        if (c.wp.receiveEmbedMessage = function (e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
                            for (o = 0; o < s.length; o++)
                                if (r = s[o], e.source === r.contentWindow) {
                                    if (r.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        r.height = i
                                    }
                                    if ("link" === t.message)
                                        if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host)
                                            if (d.activeElement === r) c.top.location.href = t.value
                                }
                        }
            }, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
                if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
                if (r || a)(t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2021 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function () {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function ($) {
        "function" != typeof window.vc_js && (window.vc_js = function () {
            "use strict";
            vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function ($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function () {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = 0 == sliderTimeout ? !1 : !0;
                this_element.is(":visible") && this_element.flexslider({
                    animation: sliderFx,
                    slideshow: slideshow,
                    slideshowSpeed: sliderTimeout,
                    sliderSpeed: 800,
                    smoothHeight: !0
                })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function () {
            0 < jQuery(".wpb_googleplus").length && function () {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function () {
            0 < jQuery(".wpb_pinterest").length && function () {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function () {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function () {
                var $el = jQuery(this);
                $el.vcwaypoint(function () {
                    $el.find(".vc_single_bar").each(function (index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function () {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function () {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function () {
                var $el = jQuery(this);
                $el.vcwaypoint(function () {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function ($el) {
            function event(content) {
                content && content.preventDefault && content.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({
                    duration: 300,
                    complete: function () {
                        element.removeClass("vc_toggle_active")
                    }
                }) : content.slideDown({
                    duration: 300,
                    complete: function () {
                        element.addClass("vc_toggle_active")
                    }
                })
            }($el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click") : $el.find(".vc_toggle_title").off("click") : jQuery(".vc_toggle_title").off("click")).on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function (ver) {
            var $call, old_version;
            jQuery.ui && ($call = ver || jQuery(".wpb_tabs, .wpb_tour"), ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10", old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9, $call.each(function (index) {
                var interval = jQuery(this).attr("data-interval"),
                    tabs_array = [],
                    $tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                        show: function (event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        },
                        activate: function (event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        }
                    });
                if (interval && 0 < interval) try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (err) {
                    window.console && window.console.warn && console.warn("tabs behaviours error", err)
                }
                jQuery(this).find(".wpb_tab").each(function () {
                    tabs_array.push(this.id)
                }), jQuery(this).find(".wpb_tabs_nav li").on("click", function (e) {
                    return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function (length) {
                    var index;
                    length && length.preventDefault && length.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                })
            }))
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function () {
            jQuery(".wpb_accordion").each(function (index) {
                var $this = jQuery(this),
                    active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1),
                    $tabs = !1 === active_tab || "yes" === $this.data("collapsible"),
                    $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                        header: "> div > h3",
                        autoHeight: !1,
                        heightStyle: "content",
                        active: active_tab,
                        collapsible: $tabs,
                        navigation: !0,
                        activate: vc_accordionActivate,
                        change: function (event, ui) {
                            void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                        }
                    });
                !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function () {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function () {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function () {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function ($thumbs) {
                    $thumbs && $thumbs.preventDefault && $thumbs.preventDefault();
                    $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).on("load resize", function () {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function ($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function () {
                var fluid_ul = jQuery(this);
                !0 !== fluid_ul.data("carousel_enabled") && fluid_ul.is(":visible") && (fluid_ul.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1"), (fluid_ul = jQuery(this).find(".wpb_thumbnails-fluid li")).css({
                    "margin-right": fluid_ul.css("margin-left"),
                    "margin-left": 0
                }), (fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid")).width(fluid_ul.width() + 300))
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function () {
            jQuery(".wpb_gallery_slides").each(function (index) {
                var $imagesGrid, sliderTimeout, this_element = jQuery(this);
                this_element.hasClass("wpb_slider_nivo") ? (0 === (sliderTimeout = 1e3 * this_element.attr("data-interval")) && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                })) : this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function () {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function () {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function () {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function () {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function () {
            var callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function (key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var el_margin_left, el_margin_right, offset, width, padding, paddingRight, $el_full = $el.next(".vc_row-full-width");
                    ($el_full = !$el_full.length ? $el.parent().next(".vc_row-full-width") : $el_full).length && (el_margin_left = parseInt($el.css("margin-left"), 10), el_margin_right = parseInt($el.css("margin-right"), 10), offset = 0 - $el_full.offset().left - el_margin_left, width = $(window).width(), "rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                        position: "relative",
                        left: offset,
                        "box-sizing": "border-box",
                        width: width
                    }), $el.data("vcStretchContent") || ("rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : (paddingRight = width - (padding = (padding = -1 * offset) < 0 ? 0 : padding) - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })), $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width
                    }))
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var windowHeight, offsetTop, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && $element.css("min-height", 100 - offsetTop / (windowHeight / 100) + "vh")), $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function () {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function () {
                var skrollrSize, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), $parallaxElement.attr("data-bottom-top", "top: " + -(skrollrSize - 100) + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (window.vcParallaxSkroll = skrollr.init({
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function () {
                    return !1
                }
            }), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function () {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function (el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        }), "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function (event, ui) {
            var panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $frame = panel.find(".vc_line-chart"),
                $google_maps = panel.find('[data-ride="vc_carousel"]');
            vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $frame.length && jQuery.fn.vcLineChart && $frame.vcLineChart({
                reload: !1
            }), $google_maps.length && jQuery.fn.carousel && $google_maps.carousel("resizeAction"), $frame = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $frame.length && $frame.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready") && (($frame = $google_maps.find("iframe")).attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")), panel.parents(".isotope").length && panel.parents(".isotope").each(function () {
                jQuery(this).isotope("layout")
            }), $(document).trigger("wpb_prepare_tab_content", panel)
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function () {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function (event, ui) {
            var $pie_charts, $round_charts, $line_charts, $carousel;
            ui.newPanel.length && ui.newHeader.length && ($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"), $round_charts = ui.newPanel.find(".vc_round-chart"), $line_charts = ui.newPanel.find(".vc_line-chart"), $carousel = ui.newPanel.find('[data-ride="vc_carousel"]'), void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                reload: !1
            }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function () {
                jQuery(this).isotope("layout")
            }))
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function () {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function () {
            jQuery("[data-vc-video-bg]").each(function () {
                var youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeId = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeId)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function (event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function ($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function () {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function (event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).on("resize", function () {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function ($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function (id) {
            if (void 0 === id) return !1;
            id = id.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function () {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function () {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function () {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function (hoverBox) {
            hoverBox.each(function () {
                var $this = jQuery(this),
                    width = $this.width();
                $this.css("perspective", 4 * width + "px")
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function (hoverBox) {
            hoverBox.each(function () {
                var hoverBoxHeight = jQuery(this),
                    hoverBoxInner = hoverBoxHeight.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = hoverBoxHeight.find(".vc-hoverbox-front-inner").outerHeight(),
                    hoverBoxHeight = hoverBoxHeight.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = hoverBoxHeight < frontHeight ? frontHeight : hoverBoxHeight;
                hoverBoxInner.css("min-height", (hoverBoxHeight = hoverBoxHeight < 250 ? 250 : hoverBoxHeight) + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function () {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).on("resize", window.vc_prepareHoverBox), jQuery(document).ready(function ($) {
            window.vc_js()
        })
    }(window.jQuery);
! function () {
    "use strict";
    window.jnews = window.jnews || {}, window.jnews.tns = window.jnews.tns || {};
    var t = function () {
        var t = window,
            e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
                return setTimeout(t, 16)
            },
            n = window,
            i = n.cancelAnimationFrame || n.mozCancelAnimationFrame || function (t) {
                clearTimeout(t)
            };

        function a() {
            for (var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length; a < r; a++)
                if (null !== (t = arguments[a]))
                    for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
            return i
        }

        function r(t) {
            return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t
        }

        function o(t, e, n, i) {
            if (i) try {
                t.setItem(e, n)
            } catch (t) {}
            return n
        }

        function u() {
            var t = document,
                e = t.body;
            return e || ((e = t.createElement("body")).fake = !0), e
        }
        var l = document.documentElement;

        function s(t) {
            var e = "";
            return t.fake && (e = l.style.overflow, t.style.background = "", t.style.overflow = l.style.overflow = "hidden", l.appendChild(t)), e
        }

        function c(t, e) {
            t.fake && (t.remove(), l.style.overflow = e, l.offsetHeight)
        }

        function f(t, e, n, i) {
            "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i)
        }

        function d(t) {
            return ("insertRule" in t ? t.cssRules : t.rules).length
        }

        function v(t, e, n) {
            for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i)
        }
        var p = "classList" in document.createElement("_"),
            h = p ? function (t, e) {
                return t.classList.contains(e)
            } : function (t, e) {
                return t.className.indexOf(e) >= 0
            },
            m = p ? function (t, e) {
                h(t, e) || t.classList.add(e)
            } : function (t, e) {
                h(t, e) || (t.className += " " + e)
            },
            y = p ? function (t, e) {
                h(t, e) && t.classList.remove(e)
            } : function (t, e) {
                h(t, e) && (t.className = t.className.replace(e, ""))
            };

        function g(t, e) {
            return t.hasAttribute(e)
        }

        function x(t, e) {
            return t.getAttribute(e)
        }

        function b(t) {
            return void 0 !== t.item
        }

        function w(t, e) {
            if (t = b(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
                for (var n = t.length; n--;)
                    for (var i in e) t[n].setAttribute(i, e[i])
        }

        function C(t, e) {
            t = b(t) || t instanceof Array ? t : [t];
            for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;)
                for (var a = n; a--;) t[i].removeAttribute(e[a])
        }

        function M(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
            return e
        }

        function T(t, e) {
            "none" !== t.style.display && (t.style.display = "none")
        }

        function E(t, e) {
            "none" === t.style.display && (t.style.display = "")
        }

        function A(t) {
            return "none" !== window.getComputedStyle(t).display
        }

        function N(t) {
            if ("string" == typeof t) {
                var e = [t],
                    n = t.charAt(0).toUpperCase() + t.substr(1);
                ["Webkit", "Moz", "ms", "O"].forEach((function (i) {
                    "ms" === i && "transform" !== t || e.push(i + n)
                })), t = e
            }
            for (var i = document.createElement("fakeelement"), a = (t.length, 0); a < t.length; a++) {
                var r = t[a];
                if (void 0 !== i.style[r]) return r
            }
            return !1
        }

        function L(t, e) {
            var n = !1;
            return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n
        }
        var S = !1;
        try {
            var B = Object.defineProperty({}, "passive", {
                get: function () {
                    S = !0
                }
            });
            window.addEventListener("test", null, B)
        } catch (t) {}
        var D = !!S && {
            passive: !0
        };

        function H(t, e, n) {
            for (var i in e) {
                var a = ["touchstart", "touchmove"].indexOf(i) >= 0 && !n && D;
                t.addEventListener(i, e[i], a)
            }
        }

        function O(t, e) {
            for (var n in e) {
                var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && D;
                t.removeEventListener(n, e[n], i)
            }
        }

        function R() {
            return {
                topics: {},
                on: function (t, e) {
                    this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
                },
                off: function (t, e) {
                    if (this.topics[t])
                        for (var n = 0; n < this.topics[t].length; n++)
                            if (this.topics[t][n] === e) {
                                this.topics[t].splice(n, 1);
                                break
                            }
                },
                emit: function (t, e) {
                    e.type = t, this.topics[t] && this.topics[t].forEach((function (n) {
                        n(e, t)
                    }))
                }
            }
        }
        "remove" in Element.prototype || (Element.prototype.remove = function () {
            this.parentNode && this.parentNode.removeChild(this)
        });
        var k = function (t) {
            t = a({
                container: ".slider",
                mode: "carousel",
                axis: "horizontal",
                items: 1,
                gutter: 0,
                edgePadding: 0,
                fixedWidth: !1,
                autoWidth: !1,
                viewportMax: !1,
                slideBy: 1,
                center: !1,
                centerSlideCount: 1,
                controls: !0,
                controlsPosition: "top",
                controlsText: ["prev", "next"],
                controlsContainer: !1,
                prevButton: !1,
                nextButton: !1,
                nav: !0,
                navPosition: "top",
                navContainer: !1,
                navAsThumbnails: !1,
                arrowKeys: !1,
                speed: 300,
                autoplay: !1,
                autoplayPosition: "top",
                autoplayTimeout: 5e3,
                autoplayDirection: "forward",
                autoplayText: ["start", "stop"],
                autoplayHoverPause: !1,
                autoplayButton: !1,
                autoplayButtonOutput: !0,
                autoplayResetOnVisibility: !0,
                animateIn: "tns-fadeIn",
                animateOut: "tns-fadeOut",
                animateNormal: "tns-normal",
                animateDelay: !1,
                loop: !0,
                rewind: !1,
                autoHeight: !1,
                responsive: !1,
                lazyload: !1,
                lazyloadSelector: ".tns-lazy-img",
                touch: !0,
                mouseDrag: !1,
                swipeAngle: 15,
                nested: !1,
                preventActionWhenRunning: !1,
                preventScrollOnTouch: !1,
                freezable: !0,
                onInit: !1,
                useLocalStorage: !0,
                textDirection: "ltr",
                nonce: !1
            }, t || {});
            var n = document,
                l = window,
                p = {
                    ENTER: 13,
                    SPACE: 32,
                    LEFT: 37,
                    RIGHT: 39
                },
                b = {},
                S = t.useLocalStorage;
            if (S) {
                var B = navigator.userAgent,
                    D = new Date;
                try {
                    (b = l.localStorage) ? (b.setItem(D, D), S = b.getItem(D) == D, b.removeItem(D)) : S = !1, S || (b = {})
                } catch (t) {
                    S = !1
                }
                S && (b.tnsApp && b.tnsApp !== B && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach((function (t) {
                    b.removeItem(t)
                })), localStorage.tnsApp = B)
            }
            var I = b.tC ? r(b.tC) : o(b, "tC", function () {
                    var t = document,
                        e = u(),
                        n = s(e),
                        i = t.createElement("div"),
                        a = !1;
                    e.appendChild(i);
                    try {
                        for (var r, o = "(10px * 10)", l = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o], f = 0; f < 3; f++)
                            if (r = l[f], i.style.width = r, 100 === i.offsetWidth) {
                                a = r.replace(o, "");
                                break
                            }
                    } catch (t) {}
                    return e.fake ? c(e, n) : i.remove(), a
                }(), S),
                P = b.tPL ? r(b.tPL) : o(b, "tPL", function () {
                    var t, e = document,
                        n = u(),
                        i = s(n),
                        a = e.createElement("div"),
                        r = e.createElement("div"),
                        o = "";
                    a.className = "tns-t-subp2", r.className = "tns-t-ct";
                    for (var l = 0; l < 70; l++) o += "<div></div>";
                    return r.innerHTML = o, a.appendChild(r), n.appendChild(a), t = Math.abs(a.getBoundingClientRect().left - r.children[67].getBoundingClientRect().left) < 2, n.fake ? c(n, i) : a.remove(), t
                }(), S),
                z = b.tMQ ? r(b.tMQ) : o(b, "tMQ", function () {
                    if (window.matchMedia || window.msMatchMedia) return !0;
                    var t, e = document,
                        n = u(),
                        i = s(n),
                        a = e.createElement("div"),
                        r = e.createElement("style"),
                        o = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                    return r.type = "text/css", a.className = "tns-mq-test", n.appendChild(r), n.appendChild(a), r.styleSheet ? r.styleSheet.cssText = o : r.appendChild(e.createTextNode(o)), t = window.getComputedStyle ? window.getComputedStyle(a).position : a.currentStyle.position, n.fake ? c(n, i) : a.remove(), "absolute" === t
                }(), S),
                W = b.tTf ? r(b.tTf) : o(b, "tTf", N("transform"), S),
                j = b.t3D ? r(b.t3D) : o(b, "t3D", function (t) {
                    if (!t) return !1;
                    if (!window.getComputedStyle) return !1;
                    var e, n = document,
                        i = u(),
                        a = s(i),
                        r = n.createElement("p"),
                        o = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
                    return o += "transform", i.insertBefore(r, null), r.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(r).getPropertyValue(o), i.fake ? c(i, a) : r.remove(), void 0 !== e && e.length > 0 && "none" !== e
                }(W), S),
                q = b.tTDu ? r(b.tTDu) : o(b, "tTDu", N("transitionDuration"), S),
                F = b.tTDe ? r(b.tTDe) : o(b, "tTDe", N("transitionDelay"), S),
                V = b.tADu ? r(b.tADu) : o(b, "tADu", N("animationDuration"), S),
                G = b.tADe ? r(b.tADe) : o(b, "tADe", N("animationDelay"), S),
                Q = b.tTE ? r(b.tTE) : o(b, "tTE", L(q, "Transition"), S),
                X = b.tAE ? r(b.tAE) : o(b, "tAE", L(V, "Animation"), S),
                Y = l.console && "function" == typeof l.console.warn,
                K = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
                J = {};
            if (K.forEach((function (e) {
                    if ("string" == typeof t[e]) {
                        var i = t[e],
                            a = n.querySelector(i);
                        if (J[e] = i, !a || !a.nodeName) return void(Y && console.warn("Can't find", t[e]));
                        t[e] = a
                    }
                })), !(t.container.children.length < 1)) {
                var U = t.responsive,
                    _ = t.nested,
                    Z = "carousel" === t.mode;
                if (U) {
                    0 in U && (t = a(t, U[0]), delete U[0]);
                    var $ = {};
                    for (var tt in U) {
                        var et = U[tt];
                        et = "number" == typeof et ? {
                            items: et
                        } : et, $[tt] = et
                    }
                    U = $, $ = null
                }
                if (Z || function t(e) {
                        for (var n in e) Z || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n])
                    }(t), !Z) {
                    t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
                    var nt = t.animateIn,
                        it = t.animateOut,
                        at = t.animateDelay,
                        rt = t.animateNormal
                }
                var ot, ut, lt = "horizontal" === t.axis,
                    st = n.createElement("div"),
                    ct = n.createElement("div"),
                    ft = t.container,
                    dt = ft.parentNode,
                    vt = ft.outerHTML,
                    pt = ft.children,
                    ht = pt.length,
                    mt = In(),
                    yt = !1;
                U && ii(), Z && (ft.className += " tns-vpfix");
                var gt, xt, bt, wt, Ct, Mt, Tt, Et, At, Nt = qn("autoWidth"),
                    Lt = qn("fixedWidth"),
                    St = qn("edgePadding"),
                    Bt = qn("gutter"),
                    Dt = Wn(),
                    Ht = qn("center"),
                    Ot = qn("centerSlideCount"),
                    Rt = Nt ? 1 : Math.floor(qn("items")),
                    kt = qn("slideBy"),
                    It = t.viewportMax || t.fixedWidthViewportWidth,
                    Pt = qn("arrowKeys"),
                    zt = qn("speed"),
                    Wt = t.rewind,
                    jt = !Wt && t.loop,
                    qt = qn("autoHeight"),
                    Ft = qn("controls"),
                    Vt = qn("controlsText"),
                    Gt = qn("textDirection"),
                    Qt = qn("nav"),
                    Xt = qn("touch"),
                    Yt = qn("mouseDrag"),
                    Kt = qn("autoplay"),
                    Jt = qn("autoplayTimeout"),
                    Ut = qn("autoplayText"),
                    _t = qn("autoplayHoverPause"),
                    Zt = qn("autoplayResetOnVisibility"),
                    $t = (Tt = null, Et = qn("nonce"), At = document.createElement("style"), Tt && At.setAttribute("media", Tt), Et && At.setAttribute("nonce", Et), document.querySelector("head").appendChild(At), At.sheet ? At.sheet : At.styleSheet),
                    te = t.lazyload,
                    ee = t.lazyloadSelector,
                    ne = [],
                    ie = jt ? (Ct = function () {
                        if (Nt || Lt && !It) return ht - 1;
                        var e = Lt ? "fixedWidth" : "items",
                            n = [];
                        if ((Lt || t[e] < ht) && n.push(t[e]), U)
                            for (var i in U) {
                                var a = U[i][e];
                                a && (Lt || a < ht) && n.push(a)
                            }
                        return n.length || n.push(0), Math.ceil(Lt ? It / Math.min.apply(null, n) : Math.max.apply(null, n))
                    }(), Mt = Z ? Math.ceil((5 * Ct - ht) / 2) : 4 * Ct - ht, Mt = Math.max(Ct, Mt), jn("edgePadding") ? Mt + 1 : Mt) : 0,
                    ae = Z ? ht + 2 * ie : ht + ie,
                    re = !(!Lt && !Nt || jt),
                    oe = Lt ? Si() : null,
                    ue = !Z || !jt,
                    le = lt ? "left" : "top",
                    se = "",
                    ce = "",
                    fe = Lt ? function () {
                        return Ht && !jt ? ht - 1 : Math.ceil(-oe / (Lt + Bt))
                    } : Nt ? function () {
                        for (var t = 0; t < ae; t++)
                            if (gt[t] >= -oe) return t
                    } : function () {
                        return Ht && Z && !jt ? ht - 1 : jt || Z ? Math.max(0, ae - Math.ceil(Rt)) : ae - 1
                    },
                    de = On(qn("startIndex")),
                    ve = de,
                    pe = (Hn(), 0),
                    he = Nt ? null : fe(),
                    me = t.preventActionWhenRunning,
                    ye = t.swipeAngle,
                    ge = !ye || "?",
                    xe = !1,
                    be = t.onInit,
                    we = new R,
                    Ce = " tns-slider tns-" + t.mode,
                    Me = ft.id || (wt = window.tnsId, window.tnsId = wt ? wt + 1 : 1, "tns" + window.tnsId),
                    Te = qn("disable"),
                    Ee = !1,
                    Ae = t.freezable,
                    Ne = !(!Ae || Nt) && ni(),
                    Le = !1,
                    Se = {
                        click: zi,
                        keydown: function (t) {
                            t = Xi(t);
                            var e = [p.LEFT, p.RIGHT].indexOf(t.keyCode);
                            e >= 0 && (0 === e ? Ze.disabled || zi(t, -1) : $e.disabled || zi(t, 1))
                        }
                    },
                    Be = {
                        click: function (t) {
                            if (xe) {
                                if (me) return;
                                Ii()
                            }
                            var e = Yi(t = Xi(t));
                            for (; e !== an && !g(e, "data-nav");) e = e.parentNode;
                            if (g(e, "data-nav")) {
                                var n = ln = Number(x(e, "data-nav")),
                                    i = Lt || Nt ? n * ht / on : n * Rt;
                                Pi(ze ? n : Math.min(Math.ceil(i), ht - 1), t), sn === n && (hn && Vi(), ln = -1)
                            }
                        },
                        keydown: function (t) {
                            t = Xi(t);
                            var e = n.activeElement;
                            if (!g(e, "data-nav")) return;
                            var i = [p.LEFT, p.RIGHT, p.ENTER, p.SPACE].indexOf(t.keyCode),
                                a = Number(x(e, "data-nav"));
                            i >= 0 && (0 === i ? a > 0 && Qi(nn[a - 1]) : 1 === i ? a < on - 1 && Qi(nn[a + 1]) : (ln = a, Pi(a, t)))
                        }
                    },
                    De = {
                        mouseover: function () {
                            hn && (ji(), mn = !0)
                        },
                        mouseout: function () {
                            mn && (Wi(), mn = !1)
                        }
                    },
                    He = {
                        visibilitychange: function () {
                            n.hidden ? hn && (ji(), gn = !0) : gn && (Wi(), gn = !1)
                        }
                    },
                    Oe = {
                        keydown: function (t) {
                            t = Xi(t);
                            var e = [p.LEFT, p.RIGHT].indexOf(t.keyCode);
                            e >= 0 && zi(t, 0 === e ? -1 : 1)
                        }
                    },
                    Re = {
                        touchstart: _i,
                        touchmove: Zi,
                        touchend: ta,
                        touchcancel: ta
                    },
                    ke = {
                        mousedown: _i,
                        mousemove: Zi,
                        mouseup: ta,
                        mouseleave: ta
                    },
                    Ie = jn("controls"),
                    Pe = jn("nav"),
                    ze = !!Nt || t.navAsThumbnails,
                    We = jn("autoplay"),
                    je = jn("touch"),
                    qe = jn("mouseDrag"),
                    Fe = "tns-slide-active",
                    Ve = "tns-slide-center",
                    Ge = "tns-slide-cloned",
                    Qe = "tns-complete",
                    Xe = {
                        load: function (t) {
                            di(Yi(t))
                        },
                        error: function (t) {
                            e = Yi(t), m(e, "failed"), vi(e);
                            var e
                        }
                    },
                    Ye = "force" === t.preventScrollOnTouch;
                if (Ie) var Ke, Je, Ue = t.controlsContainer,
                    _e = t.controlsContainer ? t.controlsContainer.outerHTML : "",
                    Ze = t.prevButton,
                    $e = t.nextButton,
                    tn = t.prevButton ? t.prevButton.outerHTML : "",
                    en = t.nextButton ? t.nextButton.outerHTML : "";
                if (Pe) var nn, an = t.navContainer,
                    rn = t.navContainer ? t.navContainer.outerHTML : "",
                    on = Nt ? ht : na(),
                    un = 0,
                    ln = -1,
                    sn = kn(),
                    cn = sn,
                    fn = "tns-nav-active",
                    dn = "Carousel Page ",
                    vn = " (Current Slide)";
                if (We) var pn, hn, mn, yn, gn, xn = "forward" === t.autoplayDirection ? 1 : -1,
                    bn = t.autoplayButton,
                    wn = t.autoplayButton ? t.autoplayButton.outerHTML : "",
                    Cn = ["<span class='tns-visually-hidden'>", " animation</span>"];
                if (je || qe) var Mn, Tn, En = {},
                    An = {},
                    Nn = !1,
                    Ln = lt ? function (t, e) {
                        return t.x - e.x
                    } : function (t, e) {
                        return t.y - e.y
                    };
                Nt || Dn(Te || Ne), W && (le = W, se = "translate", j ? (se += lt ? "3d(" : "3d(0px, ", ce = lt ? ", 0px, 0px)" : ", 0px)") : (se += lt ? "X(" : "Y(", ce = ")")), Z && (ft.className = ft.className.replace("tns-vpfix", "")),
                    function () {
                        jn("gutter");
                        st.className = "tns-outer", ct.className = "tns-inner", st.id = Me + "-ow", ct.id = Me + "-iw", "" === ft.id && (ft.id = Me);
                        Ce += P || Nt ? " tns-subpixel" : " tns-no-subpixel", Ce += I ? " tns-calc" : " tns-no-calc", Nt && (Ce += " tns-autowidth");
                        Ce += " tns-" + t.axis, ft.className += Ce, Z ? ((ot = n.createElement("div")).id = Me + "-mw", ot.className = "tns-ovh", st.appendChild(ot), ot.appendChild(ct)) : st.appendChild(ct);
                        if (qt) {
                            (ot || ct).className += " tns-ah"
                        }
                        if (dt.insertBefore(st, ft), ct.appendChild(ft), v(pt, (function (t, e) {
                                m(t, "tns-item"), t.id || (t.id = Me + "-item" + e), !Z && rt && m(t, rt), w(t, {
                                    "aria-hidden": "true",
                                    tabindex: "-1"
                                })
                            })), ie) {
                            for (var e = n.createDocumentFragment(), i = n.createDocumentFragment(), a = ie; a--;) {
                                var r = a % ht,
                                    o = pt[r].cloneNode(!0);
                                if (m(o, Ge), C(o, "id"), i.insertBefore(o, i.firstChild), Z) {
                                    var u = pt[ht - 1 - r].cloneNode(!0);
                                    m(u, Ge), C(u, "id"), e.appendChild(u)
                                }
                            }
                            ft.insertBefore(e, ft.firstChild), ft.appendChild(i), pt = ft.children
                        }
                    }(),
                    function () {
                        if (!Z)
                            for (var e = de, n = de + Math.min(ht, Rt); e < n; e++) {
                                var i = pt[e];
                                i.style.left = 100 * (e - de) / Rt + "%", m(i, nt), y(i, rt)
                            }
                        lt && (P || Nt ? (f($t, "#" + Me + " > .tns-item", "font-size:" + l.getComputedStyle(pt[0]).fontSize + ";", d($t)), f($t, "#" + Me, "font-size:0;", d($t))) : Z && v(pt, (function (t, e) {
                            t.style.marginLeft = function (t) {
                                return I ? I + "(" + 100 * t + "% / " + ae + ")" : 100 * t / ae + "%"
                            }(e)
                        })));
                        if (z) {
                            if (q) {
                                var a = ot && t.autoHeight ? Yn(t.speed) : "";
                                f($t, "#" + Me + "-mw", a, d($t))
                            }
                            a = Fn(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight), f($t, "#" + Me + "-iw", a, d($t)), Z && (a = lt && !Nt ? "width:" + Vn(t.fixedWidth, t.gutter, t.items) + ";" : "", q && (a += Yn(zt)), f($t, "#" + Me, a, d($t))), a = lt && !Nt ? Gn(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (a += Qn(t.gutter)), Z || (q && (a += Yn(zt)), V && (a += Kn(zt))), a && f($t, "#" + Me + " > .tns-item", a, d($t))
                        } else {
                            Z && qt && (ot.style[q] = zt / 1e3 + "s"), ct.style.cssText = Fn(St, Bt, Lt, qt), Z && lt && !Nt && (ft.style.width = Vn(Lt, Bt, Rt));
                            a = lt && !Nt ? Gn(Lt, Bt, Rt) : "";
                            Bt && (a += Qn(Bt)), a && f($t, "#" + Me + " > .tns-item", a, d($t))
                        }
                        if (U && z)
                            for (var r in U) {
                                r = parseInt(r);
                                var o = U[r],
                                    u = (a = "", ""),
                                    s = "",
                                    c = "",
                                    p = "",
                                    h = Nt ? null : qn("items", r),
                                    g = qn("fixedWidth", r),
                                    x = qn("speed", r),
                                    b = qn("edgePadding", r),
                                    w = qn("autoHeight", r),
                                    C = qn("gutter", r);
                                q && ot && qn("autoHeight", r) && "speed" in o && (u = "#" + Me + "-mw{" + Yn(x) + "}"), ("edgePadding" in o || "gutter" in o) && (s = "#" + Me + "-iw{" + Fn(b, C, g, x, w) + "}"), Z && lt && !Nt && ("fixedWidth" in o || "items" in o || Lt && "gutter" in o) && (c = "width:" + Vn(g, C, h) + ";"), q && "speed" in o && (c += Yn(x)), c && (c = "#" + Me + "{" + c + "}"), ("fixedWidth" in o || Lt && "gutter" in o || !Z && "items" in o) && (p += Gn(g, C, h)), "gutter" in o && (p += Qn(C)), !Z && "speed" in o && (q && (p += Yn(x)), V && (p += Kn(x))), p && (p = "#" + Me + " > .tns-item{" + p + "}"), (a = u + s + c + p) && $t.insertRule("@media (min-width: " + r / 16 + "em) {" + a + "}", $t.cssRules.length)
                            }
                    }(), Jn();
                var Sn = jt ? Z ? function () {
                        var t = pe,
                            e = he;
                        t += kt, e -= kt, St ? (t += 1, e -= 1) : Lt && (Dt + Bt) % (Lt + Bt) && (e -= 1), ie && (de > e ? de -= ht : de < t && (de += ht))
                    } : function () {
                        if (de > he)
                            for (; de >= pe + ht;) de -= ht;
                        else if (de < pe)
                            for (; de <= he - ht;) de += ht
                    } : function () {
                        de = Math.max(pe, Math.min(he, de))
                    },
                    Bn = Z ? function () {
                        var t, e, n, i, a, r, o, u, l, s, c;
                        Ni(ft, ""), q || !zt ? (Hi(), zt && A(ft) || Ii()) : (t = ft, e = le, n = se, i = ce, a = Bi(), r = zt, o = Ii, u = Math.min(r, 10), l = a.indexOf("%") >= 0 ? "%" : "px", a = a.replace(l, ""), s = Number(t.style[e].replace(n, "").replace(i, "").replace(l, "")), c = (a - s) / r * u, setTimeout((function a() {
                            r -= u, s += c, t.style[e] = n + s + l + i, r > 0 ? setTimeout(a, u) : o()
                        }), u)), lt || ea()
                    } : function () {
                        ne = [];
                        var t = {};
                        t[Q] = t[X] = Ii, O(pt[ve], t), H(pt[de], t), Oi(ve, nt, it, !0), Oi(de, rt, nt), Q && X && zt && A(ft) || Ii()
                    };
                return {
                    version: "2.9.3",
                    getInfo: aa,
                    events: we,
                    goTo: Pi,
                    play: function () {
                        Kt && !hn && (Fi(), yn = !1)
                    },
                    pause: function () {
                        hn && (Vi(), yn = !0)
                    },
                    isOn: yt,
                    updateSliderHeight: xi,
                    refresh: Jn,
                    destroy: function () {
                        if ($t.disabled = !0, $t.ownerNode && $t.ownerNode.remove(), O(l, {
                                resize: ti
                            }), Pt && O(n, Oe), Ue && O(Ue, Se), an && O(an, Be), O(ft, De), O(ft, He), bn && O(bn, {
                                click: Gi
                            }), Kt && clearInterval(pn), Z && Q) {
                            var e = {};
                            e[Q] = Ii, O(ft, e)
                        }
                        Xt && O(ft, Re), Yt && O(ft, ke);
                        var i = [vt, _e, tn, en, rn, wn];
                        for (var a in K.forEach((function (e, n) {
                                var a = "container" === e ? st : t[e];
                                if ("object" == typeof a && a) {
                                    var r = !!a.previousElementSibling && a.previousElementSibling,
                                        o = a.parentNode;
                                    a.outerHTML = i[n], t[e] = r ? r.nextElementSibling : o.firstElementChild
                                }
                            })), K = nt = it = at = rt = lt = st = ct = ft = dt = vt = pt = ht = ut = mt = Nt = Lt = St = Bt = Dt = Rt = kt = It = Pt = zt = Wt = jt = qt = $t = te = gt = ne = ie = ae = re = oe = ue = le = se = ce = fe = de = ve = pe = he = ye = ge = xe = be = we = Ce = Me = Te = Ee = Ae = Ne = Le = Se = Be = De = He = Oe = Re = ke = Ie = Pe = ze = We = je = qe = Fe = Ve = Qe = Xe = xt = Ft = Vt = Ue = _e = Ze = $e = Ke = Je = Qt = an = rn = nn = on = un = ln = sn = cn = fn = dn = vn = Kt = Jt = xn = Ut = _t = bn = wn = Zt = Cn = pn = hn = mn = yn = gn = En = An = Mn = Nn = Tn = Ln = Xt = Yt = null, this) "rebuild" !== a && (this[a] = null);
                        yt = !1
                    },
                    rebuild: function () {
                        return k(a(t, J))
                    }
                }
            }

            function Dn(t) {
                t && (Ft = Qt = Xt = Yt = Pt = Kt = _t = Zt = !1)
            }

            function Hn() {
                for (var t = Z ? de - ie : de; t < 0;) t += ht;
                return t % ht + 1
            }

            function On(t) {
                return t = t ? Math.max(0, Math.min(jt ? ht - 1 : ht - Rt, t)) : 0, Z ? t + ie : t
            }

            function Rn(t) {
                for (null == t && (t = de), Z && (t -= ie); t < 0;) t += ht;
                return Math.floor(t % ht)
            }

            function kn() {
                var t, e = Rn();
                return t = ze ? e : Lt || Nt ? Math.ceil((e + 1) * on / ht - 1) : Math.floor(e / Rt), !jt && Z && de === he && (t = on - 1), t
            }

            function In() {
                return l.innerWidth || n.documentElement.clientWidth || n.body.clientWidth
            }

            function Pn(t) {
                return "top" === t ? "afterbegin" : "beforeend"
            }

            function zn(t) {
                if (null != t) {
                    var e, i, a = n.createElement("div");
                    return t.appendChild(a), i = (e = a.getBoundingClientRect()).right - e.left, a.remove(), i || zn(t.parentNode)
                }
            }

            function Wn() {
                var t = St ? 2 * St - Bt : 0;
                return zn(dt) - t
            }

            function jn(e) {
                if (t[e]) return !0;
                if (U)
                    for (var n in U)
                        if (U[n][e]) return !0;
                return !1
            }

            function qn(e, n) {
                if (null == n && (n = mt), "items" === e && Lt) return Math.floor((Dt + Bt) / (Lt + Bt)) || 1;
                var i = t[e];
                if (U)
                    for (var a in U) n >= parseInt(a) && e in U[a] && (i = U[a][e]);
                return "slideBy" === e && "page" === i && (i = qn("items")), Z || "slideBy" !== e && "items" !== e || (i = Math.floor(i)), i
            }

            function Fn(t, e, n, i, a) {
                var r = "";
                if (void 0 !== t) {
                    var o = t;
                    e && (o -= e), r = lt ? "margin: 0 " + o + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + o + "px 0;"
                } else if (e && !n) {
                    var u = "-" + e + "px";
                    r = "margin: 0 " + (lt ? u + " 0 0" : "0 " + u + " 0") + ";"
                }
                return !Z && a && q && i && (r += Yn(i)), r
            }

            function Vn(t, e, n) {
                return t ? (t + e) * ae + "px" : I ? I + "(" + 100 * ae + "% / " + n + ")" : 100 * ae / n + "%"
            }

            function Gn(t, e, n) {
                var i;
                if (t) i = t + e + "px";
                else {
                    Z || (n = Math.floor(n));
                    var a = Z ? ae : n;
                    i = I ? I + "(100% / " + a + ")" : 100 / a + "%"
                }
                return i = "width:" + i, "inner" !== _ ? i + ";" : i + " !important;"
            }

            function Qn(t) {
                var e = "";
                !1 !== t && (e = (lt ? "padding-" : "margin-") + (lt ? "right" : "bottom") + ": " + t + "px;");
                return e
            }

            function Xn(t, e) {
                var n = t.substring(0, t.length - e).toLowerCase();
                return n && (n = "-" + n + "-"), n
            }

            function Yn(t) {
                return Xn(q, 18) + "transition-duration:" + t / 1e3 + "s;"
            }

            function Kn(t) {
                return Xn(V, 17) + "animation-duration:" + t / 1e3 + "s;"
            }

            function Jn() {
                if (jn("autoHeight") || Nt || !lt) {
                    var t = ft.querySelectorAll("img");
                    v(t, (function (t) {
                        var e = t.src;
                        te || (e && e.indexOf("data:image") < 0 ? (t.src = "", H(t, Xe), m(t, "loading"), t.src = e) : di(t))
                    })), e((function () {
                        mi(M(t), (function () {
                            xt = !0
                        }))
                    })), jn("autoHeight") && (t = pi(de, Math.min(de + Rt - 1, ae - 1))), te ? Un() : e((function () {
                        mi(M(t), Un)
                    }))
                } else Z && Di(), Zn(), $n()
            }

            function Un() {
                if (Nt && ht > 1) {
                    var t = jt ? de : ht - 1;
                    ! function e() {
                        var n = pt[t].getBoundingClientRect().left,
                            i = pt[(t || 1) - 1].getBoundingClientRect().right;
                        Math.abs(n - i) <= 1 ? _n() : setTimeout((function () {
                            e()
                        }), 16)
                    }()
                } else _n()
            }

            function _n() {
                lt && !Nt || (bi(), Nt ? (oe = Si(), Ae && (Ne = ni()), he = fe(), Dn(Te || Ne)) : ea()), Z && Di(), Zn(), $n()
            }

            function Zn() {
                if (wi(), st.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + si() + "</span>  of " + ht + "</div>"), bt = st.querySelector(".tns-liveregion .current"), We) {
                    var e = Kt ? "stop" : "start";
                    bn ? w(bn, {
                        "data-action": e
                    }) : t.autoplayButtonOutput && (st.insertAdjacentHTML(Pn(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + Cn[0] + e + Cn[1] + Ut[0] + "</button>"), bn = st.querySelector("[data-action]")), bn && H(bn, {
                        click: Gi
                    }), Kt && (Fi(), _t && H(ft, De), Zt && H(ft, He))
                }
                if (Pe) {
                    if (an) w(an, {
                        "aria-label": "Carousel Pagination"
                    }), v(nn = an.children, (function (t, e) {
                        w(t, {
                            "data-nav": e,
                            tabindex: "-1",
                            "aria-label": dn + (e + 1),
                            "aria-controls": Me
                        })
                    }));
                    else {
                        for (var n = "", i = ze ? "" : 'style="display:none"', a = 0; a < ht; a++) n += '<button type="button" data-nav="' + a + '" tabindex="-1" aria-controls="' + Me + '" ' + i + ' aria-label="' + dn + (a + 1) + '"></button>';
                        n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", st.insertAdjacentHTML(Pn(t.navPosition), n), an = st.querySelector(".tns-nav"), nn = an.children
                    }
                    if (ia(), q) {
                        var r = q.substring(0, q.length - 18).toLowerCase(),
                            o = "transition: all " + zt / 1e3 + "s";
                        r && (o = "-" + r + "-" + o), f($t, "[aria-controls^=" + Me + "-item]", o, d($t))
                    }
                    w(nn[sn], {
                        "aria-label": dn + (sn + 1) + vn
                    }), C(nn[sn], "tabindex"), m(nn[sn], fn), H(an, Be)
                }
                Ie && (Ue || Ze && $e || (st.insertAdjacentHTML(Pn(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + Me + '">' + Vt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + Me + '">' + Vt[1] + "</button></div>"), Ue = st.querySelector(".tns-controls")), Ze && $e || (Ze = Ue.children[0], $e = Ue.children[1]), t.controlsContainer && w(Ue, {
                    "aria-label": "Carousel Navigation",
                    tabindex: "0"
                }), (t.controlsContainer || t.prevButton && t.nextButton) && w([Ze, $e], {
                    "aria-controls": Me,
                    tabindex: "-1"
                }), (t.controlsContainer || t.prevButton && t.nextButton) && (w(Ze, {
                    "data-controls": "prev"
                }), w($e, {
                    "data-controls": "next"
                })), Ke = Mi(Ze), Je = Mi($e), Ai(), Ue ? H(Ue, Se) : (H(Ze, Se), H($e, Se))), ai()
            }

            function $n() {
                if (Z && Q) {
                    var e = {};
                    e[Q] = Ii, H(ft, e)
                }
                Xt && H(ft, Re, t.preventScrollOnTouch), Yt && H(ft, ke), Pt && H(n, Oe), "inner" === _ ? we.on("outerResized", (function () {
                    ei(), we.emit("innerLoaded", aa())
                })) : (U || Lt || Nt || qt || !lt) && H(l, {
                    resize: ti
                }), qt && ("outer" === _ ? we.on("innerLoaded", hi) : Te || hi()), fi(), Te ? ui() : Ne && oi(), we.on("indexChanged", yi), "inner" === _ && we.emit("innerLoaded", aa()), "function" == typeof be && be(aa()), yt = !0
            }

            function ti(t) {
                e((function () {
                    ei(Xi(t))
                }))
            }

            function ei(e) {
                if (yt) {
                    "outer" === _ && we.emit("outerResized", aa(e)), mt = In();
                    var i, a = ut,
                        r = !1;
                    U && (ii(), (i = a !== ut) && we.emit("newBreakpointStart", aa(e)));
                    var o, u, l = Rt,
                        s = Te,
                        c = Ne,
                        p = Pt,
                        h = Ft,
                        g = Qt,
                        x = Xt,
                        b = Yt,
                        w = Kt,
                        C = _t,
                        M = Zt,
                        A = de;
                    if (i) {
                        var N = Lt,
                            L = qt,
                            S = Vt,
                            B = Ht,
                            D = Ot,
                            R = Ut;
                        if (!z) var k = Bt,
                            I = St
                    }
                    if (Pt = qn("arrowKeys"), Ft = qn("controls"), Qt = qn("nav"), Xt = qn("touch"), Ht = qn("center"), Ot = qn("centerSlideCount"), Yt = qn("mouseDrag"), Kt = qn("autoplay"), _t = qn("autoplayHoverPause"), Zt = qn("autoplayResetOnVisibility"), i && (Te = qn("disable"), Lt = qn("fixedWidth"), zt = qn("speed"), qt = qn("autoHeight"), Vt = qn("controlsText"), Ut = qn("autoplayText"), Jt = qn("autoplayTimeout"), z || (St = qn("edgePadding"), Bt = qn("gutter"))), Dn(Te), Dt = Wn(), lt && !Nt || Te || (bi(), lt || (ea(), r = !0)), (Lt || Nt) && (oe = Si(), he = fe()), (i || Lt) && (Rt = qn("items"), kt = qn("slideBy"), (u = Rt !== l) && (Lt || Nt || (he = fe()), Sn())), i && Te !== s && (Te ? ui() : function () {
                            if (!Ee) return;
                            if ($t.disabled = !1, ft.className += Ce, Di(), jt)
                                for (var t = ie; t--;) Z && E(pt[t]), E(pt[ae - t - 1]);
                            if (!Z)
                                for (var e = de, n = de + ht; e < n; e++) {
                                    var i = pt[e],
                                        a = e < de + Rt ? nt : rt;
                                    i.style.left = 100 * (e - de) / Rt + "%", m(i, a)
                                }
                            ri(), Ee = !1
                        }()), Ae && (i || Lt || Nt) && (Ne = ni()) !== c && (Ne ? (Hi(Bi(On(0))), oi()) : (! function () {
                            if (!Le) return;
                            St && z && (ct.style.margin = "");
                            if (ie)
                                for (var t = "tns-transparent", e = ie; e--;) Z && y(pt[e], t), y(pt[ae - e - 1], t);
                            ri(), Le = !1
                        }(), r = !0)), Dn(Te || Ne), Kt || (_t = Zt = !1), Pt !== p && (Pt ? H(n, Oe) : O(n, Oe)), Ft !== h && (Ft ? Ue ? E(Ue) : (Ze && E(Ze), $e && E($e)) : Ue ? T(Ue) : (Ze && T(Ze), $e && T($e))), Qt !== g && (Qt ? (E(an), ia()) : T(an)), Xt !== x && (Xt ? H(ft, Re, t.preventScrollOnTouch) : O(ft, Re)), Yt !== b && (Yt ? H(ft, ke) : O(ft, ke)), Kt !== w && (Kt ? (bn && E(bn), hn || yn || Fi()) : (bn && T(bn), hn && Vi())), _t !== C && (_t ? H(ft, De) : O(ft, De)), Zt !== M && (Zt ? H(n, He) : O(n, He)), i) {
                        if (Lt === N && Ht === B && Ot === D || (r = !0), qt !== L && (qt || (ct.style.height = "")), Ft && Vt !== S && (Ze.innerHTML = Vt[0], $e.innerHTML = Vt[1]), bn && Ut !== R) {
                            var P = Kt ? 1 : 0,
                                W = bn.innerHTML,
                                j = W.length - R[P].length;
                            W.substring(j) === R[P] && (bn.innerHTML = W.substring(0, j) + Ut[P])
                        }
                    } else Ht && (Lt || Nt) && (r = !0);
                    if ((u || Lt && !Nt) && (on = na(), ia()), (o = de !== A) ? (we.emit("indexChanged", aa()), r = !0) : u ? o || yi() : (Lt || Nt) && (fi(), wi(), li()), u && !Z && function () {
                            for (var t = de + Math.min(ht, Rt), e = ae; e--;) {
                                var n = pt[e];
                                e >= de && e < t ? (m(n, "tns-moving"), n.style.left = 100 * (e - de) / Rt + "%", m(n, nt), y(n, rt)) : n.style.left && (n.style.left = "", m(n, rt), y(n, nt)), y(n, it)
                            }
                            setTimeout((function () {
                                v(pt, (function (t) {
                                    y(t, "tns-moving")
                                }))
                            }), 300)
                        }(), !Te && !Ne) {
                        if (i && !z && (St === I && Bt === k || (ct.style.cssText = Fn(St, Bt, Lt, zt, qt)), lt)) {
                            Z && (ft.style.width = Vn(Lt, Bt, Rt));
                            var q = Gn(Lt, Bt, Rt) + Qn(Bt);
                            ! function (t, e) {
                                "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e)
                            }($t, d($t) - 1), f($t, "#" + Me + " > .tns-item", q, d($t))
                        }
                        qt && hi(), r && (Di(), ve = de)
                    }
                    i && we.emit("newBreakpointEnd", aa(e))
                }
            }

            function ni() {
                if (!Lt && !Nt) return ht <= (Ht ? Rt - (Rt - 1) / 2 : Rt);
                var t = Lt ? (Lt + Bt) * ht : gt[ht],
                    e = St ? Dt + 2 * St : Dt + Bt;
                return Ht && (e -= Lt ? (Dt - Lt) / 2 : (Dt - (gt[de + 1] - gt[de] - Bt)) / 2), t <= e
            }

            function ii() {
                for (var t in ut = 0, U) t = parseInt(t), mt >= t && (ut = t)
            }

            function ai() {
                !Kt && bn && T(bn), !Qt && an && T(an), Ft || (Ue ? T(Ue) : (Ze && T(Ze), $e && T($e)))
            }

            function ri() {
                Kt && bn && E(bn), Qt && an && E(an), Ft && (Ue ? E(Ue) : (Ze && E(Ze), $e && E($e)))
            }

            function oi() {
                if (!Le) {
                    if (St && (ct.style.margin = "0px"), ie)
                        for (var t = "tns-transparent", e = ie; e--;) Z && m(pt[e], t), m(pt[ae - e - 1], t);
                    ai(), Le = !0
                }
            }

            function ui() {
                if (!Ee) {
                    if ($t.disabled = !0, ft.className = ft.className.replace(Ce.substring(1), ""), C(ft, ["style"]), jt)
                        for (var t = ie; t--;) Z && T(pt[t]), T(pt[ae - t - 1]);
                    if (lt && Z || C(ct, ["style"]), !Z)
                        for (var e = de, n = de + ht; e < n; e++) {
                            var i = pt[e];
                            C(i, ["style"]), y(i, nt), y(i, rt)
                        }
                    ai(), Ee = !0
                }
            }

            function li() {
                var t = si();
                bt.innerHTML !== t && (bt.innerHTML = t)
            }

            function si() {
                var t = ci(),
                    e = t[0] + 1,
                    n = t[1] + 1;
                return e === n ? e + "" : e + " to " + n
            }

            function ci(t) {
                null == t && (t = Bi());
                var e, n, i, a = de;
                if (Ht || St ? (Nt || Lt) && (n = -(parseFloat(t) + St), i = n + Dt + 2 * St) : Nt && (n = gt[de], i = n + Dt), Nt) gt.forEach((function (t, r) {
                    r < ae && ((Ht || St) && t <= n + .5 && (a = r), i - t >= .5 && (e = r))
                }));
                else {
                    if (Lt) {
                        var r = Lt + Bt;
                        Ht || St ? (a = Math.floor(n / r), e = Math.ceil(i / r - 1)) : e = a + Math.ceil(Dt / r) - 1
                    } else if (Ht || St) {
                        var o = Rt - 1;
                        if (Ht ? (a -= o / 2, e = de + o / 2) : e = de + o, St) {
                            var u = St * Rt / Dt;
                            a -= u, e += u
                        }
                        a = Math.floor(a), e = Math.ceil(e)
                    } else e = a + Rt - 1;
                    a = Math.max(a, 0), e = Math.min(e, ae - 1)
                }
                return [a, e]
            }

            function fi() {
                if (te && !Te) {
                    var t = ci();
                    t.push(ee), pi.apply(null, t).forEach((function (t) {
                        if (!h(t, Qe)) {
                            var e = {};
                            e[Q] = function (t) {
                                t.stopPropagation()
                            }, H(t, e), H(t, Xe), t.src = x(t, "data-src");
                            var n = x(t, "data-srcset");
                            n && (t.srcset = n), m(t, "loading")
                        }
                    }))
                }
            }

            function di(t) {
                m(t, "loaded"), vi(t)
            }

            function vi(t) {
                m(t, Qe), y(t, "loading"), O(t, Xe)
            }

            function pi(t, e, n) {
                var i = [];
                for (n || (n = "img"); t <= e;) v(pt[t].querySelectorAll(n), (function (t) {
                    i.push(t)
                })), t++;
                return i
            }

            function hi() {
                var t = pi.apply(null, ci());
                e((function () {
                    mi(t, xi)
                }))
            }

            function mi(t, n) {
                return xt ? n() : (t.forEach((function (e, n) {
                    !te && e.complete && vi(e), h(e, Qe) && t.splice(n, 1)
                })), t.length ? void e((function () {
                    mi(t, n)
                })) : n())
            }

            function yi() {
                fi(), wi(), li(), Ai(),
                    function () {
                        if (Qt && (sn = ln >= 0 ? ln : kn(), ln = -1, sn !== cn)) {
                            var t = nn[cn],
                                e = nn[sn];
                            w(t, {
                                tabindex: "-1",
                                "aria-label": dn + (cn + 1)
                            }), y(t, fn), w(e, {
                                "aria-label": dn + (sn + 1) + vn
                            }), C(e, "tabindex"), m(e, fn), cn = sn
                        }
                    }()
            }

            function gi(t, e) {
                for (var n = [], i = t, a = Math.min(t + e, ae); i < a; i++) n.push(pt[i].offsetHeight);
                return Math.max.apply(null, n)
            }

            function xi() {
                var t = qt ? gi(de, Rt) : gi(ie, ht),
                    e = ot || ct;
                e.style.height !== t && (e.style.height = t + "px")
            }

            function bi() {
                gt = [0];
                var t = lt ? "left" : "top",
                    e = lt ? "right" : "bottom",
                    n = pt[0].getBoundingClientRect()[t];
                v(pt, (function (i, a) {
                    a && gt.push(i.getBoundingClientRect()[t] - n), a === ae - 1 && gt.push(i.getBoundingClientRect()[e] - n)
                }))
            }

            function wi() {
                var t, e, n = ci(),
                    i = n[0],
                    a = n[1];
                if (Ht && Ot) {
                    var r = a - i + 1,
                        o = r / 2,
                        u = r < Ot ? r : Ot;
                    u > 1 && (o -= u / 2), o = Math.floor(o), e = (t = i + o) + u - 1
                }
                v(pt, (function (n, r) {
                    r >= i && r <= a ? g(n, "aria-hidden") && (C(n, ["aria-hidden", "tabindex"]), m(n, Fe)) : g(n, "aria-hidden") || (w(n, {
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }), y(n, Fe)), t && e && (r >= t && r <= e ? m(n, Ve) : y(n, Ve))
                }))
            }

            function Ci(t) {
                return t.nodeName.toLowerCase()
            }

            function Mi(t) {
                return "button" === Ci(t)
            }

            function Ti(t) {
                return "true" === t.getAttribute("aria-disabled")
            }

            function Ei(t, e, n) {
                t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
            }

            function Ai() {
                if (Ft && !Wt && !jt) {
                    var t = Ke ? Ze.disabled : Ti(Ze),
                        e = Je ? $e.disabled : Ti($e),
                        n = de <= pe,
                        i = !Wt && de >= he;
                    n && !t && Ei(Ke, Ze, !0), !n && t && Ei(Ke, Ze, !1), i && !e && Ei(Je, $e, !0), !i && e && Ei(Je, $e, !1)
                }
            }

            function Ni(t, e) {
                q && (t.style[q] = e)
            }

            function Li(t) {
                return null == t && (t = de), Nt ? (Dt - (St ? Bt : 0) - (gt[t + 1] - gt[t] - Bt)) / 2 : Lt ? (Dt - Lt) / 2 : (Rt - 1) / 2
            }

            function Si() {
                var t = Dt + (St ? Bt : 0) - (Lt ? (Lt + Bt) * ae : gt[ae]);
                return Ht && !jt && (t = Lt ? -(Lt + Bt) * (ae - 1) - Li() : Li(ae - 1) - gt[ae - 1]), t > 0 && (t = 0), t
            }

            function Bi(t) {
                var e;
                if (null == t && (t = de), lt && !Nt)
                    if (Lt) e = -(Lt + Bt) * t, Ht && (e += Li());
                    else {
                        var n = W ? ae : Rt;
                        Ht && (t -= Li()), e = 100 * -t / n
                    }
                else e = -gt[t], Ht && Nt && (e += Li());
                return re && (e = Math.max(e, oe)), e += !lt || Nt || Lt ? "px" : "%"
            }

            function Di(t) {
                Ni(ft, "0s"), Hi(t)
            }

            function Hi(t) {
                null == t && (t = Bi()), "rtl" === Gt && "-" === t.charAt(0) && (t = t.substr(1)), ft.style[le] = se + t + ce
            }

            function Oi(t, e, n, i) {
                var a = t + Rt;
                jt || (a = Math.min(a, ae));
                for (var r = t; r < a; r++) {
                    var o = pt[r];
                    i || (o.style.left = 100 * (r - de) / Rt + "%"), at && F && (o.style[F] = o.style[G] = at * (r - t) / 1e3 + "s"), y(o, e), m(o, n), i && ne.push(o)
                }
            }

            function Ri(t, e) {
                ue && Sn(), (de !== ve || e) && (we.emit("indexChanged", aa()), we.emit("transitionStart", aa()), qt && hi(), hn && t && ["click", "keydown"].indexOf(t.type) >= 0 && Vi(), xe = !0, Bn())
            }

            function ki(t) {
                return t.toLowerCase().replace(/-/g, "")
            }

            function Ii(t) {
                if (Z || xe) {
                    if (we.emit("transitionEnd", aa(t)), !Z && ne.length > 0)
                        for (var e = 0; e < ne.length; e++) {
                            var n = ne[e];
                            n.style.left = "", G && F && (n.style[G] = "", n.style[F] = ""), y(n, it), m(n, rt)
                        }
                    if (!t || !Z && t.target.parentNode === ft || t.target === ft && ki(t.propertyName) === ki(le)) {
                        if (!ue) {
                            var i = de;
                            Sn(), de !== i && (we.emit("indexChanged", aa()), Di())
                        }
                        "inner" === _ && we.emit("innerLoaded", aa()), xe = !1, ve = de
                    }
                }
            }

            function Pi(t, e) {
                if (!Ne)
                    if ("prev" === t) zi(e, -1);
                    else if ("next" === t) zi(e, 1);
                else {
                    if (xe) {
                        if (me) return;
                        Ii()
                    }
                    var n = Rn(),
                        i = 0;
                    if ("first" === t ? i = -n : "last" === t ? i = Z ? ht - Rt - n : ht - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(ht - 1, t))), i = t - n)), !Z && i && Math.abs(i) < Rt) {
                        var a = i > 0 ? 1 : -1;
                        i += de + i - ht >= pe ? ht * a : 2 * ht * a * -1
                    }
                    de += i, Z && jt && (de < pe && (de += ht), de > he && (de -= ht)), Rn(de) !== Rn(ve) && Ri(e)
                }
            }

            function zi(t, e) {
                if (xe) {
                    if (me) return;
                    Ii()
                }
                var n;
                if (!e) {
                    for (var i = Yi(t = Xi(t)); i !== Ue && [Ze, $e].indexOf(i) < 0;) i = i.parentNode;
                    var a = [Ze, $e].indexOf(i);
                    a >= 0 && (n = !0, e = 0 === a ? -1 : 1)
                }
                if (Wt) {
                    if (de === pe && -1 === e) return void Pi("last", t);
                    if (de === he && 1 === e) return void Pi("first", t)
                }
                e && (de += kt * e, Nt && (de = Math.floor(de)), Ri(n || t && "keydown" === t.type ? t : null))
            }

            function Wi() {
                pn = setInterval((function () {
                    zi(null, xn)
                }), Jt), hn = !0
            }

            function ji() {
                clearInterval(pn), hn = !1
            }

            function qi(t, e) {
                w(bn, {
                    "data-action": t
                }), bn.innerHTML = Cn[0] + t + Cn[1] + e
            }

            function Fi() {
                Wi(), bn && qi("stop", Ut[1])
            }

            function Vi() {
                ji(), bn && qi("start", Ut[0])
            }

            function Gi() {
                hn ? (Vi(), yn = !0) : (Fi(), yn = !1)
            }

            function Qi(t) {
                t.focus()
            }

            function Xi(t) {
                return Ki(t = t || l.event) ? t.changedTouches[0] : t
            }

            function Yi(t) {
                return t.target || l.event.srcElement
            }

            function Ki(t) {
                return t.type.indexOf("touch") >= 0
            }

            function Ji(t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            }

            function Ui() {
                return r = An.y - En.y, o = An.x - En.x, e = Math.atan2(r, o) * (180 / Math.PI), n = ye, i = !1, (a = Math.abs(90 - Math.abs(e))) >= 90 - n ? i = "horizontal" : a <= n && (i = "vertical"), i === t.axis;
                var e, n, i, a, r, o
            }

            function _i(t) {
                if (xe) {
                    if (me) return;
                    Ii()
                }
                Kt && hn && ji(), Nn = !0, Tn && (i(Tn), Tn = null);
                var e = Xi(t);
                we.emit(Ki(t) ? "touchStart" : "dragStart", aa(t)), !Ki(t) && ["img", "a"].indexOf(Ci(Yi(t))) >= 0 && Ji(t), An.x = En.x = e.clientX, An.y = En.y = e.clientY, Z && (Mn = parseFloat(ft.style[le].replace(se, "")), Ni(ft, "0s"))
            }

            function Zi(t) {
                if (Nn) {
                    var n = Xi(t);
                    An.x = n.clientX, An.y = n.clientY, Z ? Tn || (Tn = e((function () {
                        $i(t)
                    }))) : ("?" === ge && (ge = Ui()), ge && (Ye = !0)), ("boolean" != typeof t.cancelable || t.cancelable) && Ye && t.preventDefault()
                }
            }

            function $i(t) {
                if (ge) {
                    if (i(Tn), Nn && (Tn = e((function () {
                            $i(t)
                        }))), "?" === ge && (ge = Ui()), ge) {
                        !Ye && Ki(t) && (Ye = !0);
                        try {
                            t.type && we.emit(Ki(t) ? "touchMove" : "dragMove", aa(t))
                        } catch (t) {}
                        var n = Mn,
                            a = Ln(An, En);
                        if (!lt || Lt || Nt) n += a, n += "px";
                        else n += W ? a * Rt * 100 / ((Dt + Bt) * ae) : 100 * a / (Dt + Bt), n += "%";
                        ft.style[le] = se + n + ce
                    }
                } else Nn = !1
            }

            function ta(n) {
                if (Nn) {
                    Tn && (i(Tn), Tn = null), Z && Ni(ft, ""), Nn = !1;
                    var a = Xi(n);
                    An.x = a.clientX, An.y = a.clientY;
                    var r = Ln(An, En);
                    if (Math.abs(r)) {
                        if (!Ki(n)) {
                            var o = Yi(n);
                            H(o, {
                                click: function t(e) {
                                    Ji(e), O(o, {
                                        click: t
                                    })
                                }
                            })
                        }
                        Z ? Tn = e((function () {
                            if (lt && !Nt) {
                                var t = -r * Rt / (Dt + Bt);
                                t = r > 0 ? Math.floor(t) : Math.ceil(t), de += "rtl" === Gt ? -1 * t : t
                            } else {
                                var e = -(Mn + r);
                                if (e <= 0) de = pe;
                                else if (e >= gt[ae - 1]) de = he;
                                else
                                    for (var i = 0; i < ae && e >= gt[i];) de = i, e > gt[i] && r < 0 && (de += 1), i++
                            }
                            Ri(n, r), we.emit(Ki(n) ? "touchEnd" : "dragEnd", aa(n))
                        })) : ge && zi(n, r > 0 ? -1 : 1)
                    }
                }
                "auto" === t.preventScrollOnTouch && (Ye = !1), ye && (ge = "?"), Kt && !hn && Wi()
            }

            function ea() {
                (ot || ct).style.height = gt[de + Rt] - gt[de] + "px"
            }

            function na() {
                var t = Lt ? (Lt + Bt) * ht / Dt : ht / Rt;
                return Math.min(Math.ceil(t), ht)
            }

            function ia() {
                if (Qt && !ze && on !== un) {
                    var t = un,
                        e = on,
                        n = E;
                    for (un > on && (t = on, e = un, n = T); t < e;) n(nn[t]), t++;
                    un = on
                }
            }

            function aa(t) {
                return {
                    container: ft,
                    slideItems: pt,
                    navContainer: an,
                    navItems: nn,
                    controlsContainer: Ue,
                    hasControls: Ie,
                    prevButton: Ze,
                    nextButton: $e,
                    items: Rt,
                    slideBy: kt,
                    cloneCount: ie,
                    slideCount: ht,
                    slideCountNew: ae,
                    index: de,
                    indexCached: ve,
                    displayIndex: Hn(),
                    navCurrentIndex: sn,
                    navCurrentIndexCached: cn,
                    pages: on,
                    pagesCached: un,
                    sheet: $t,
                    isOn: yt,
                    event: t || {}
                }
            }
            Y && console.warn("No slides found in", t.container)
        };
        return k
    }();
    window.jnews.tns = t
}();
var tns;
! function () {
    "use strict";
    window.jnews = window.jnews || {}, window.jnews.tns = window.jnews.tns || {}, "function" == typeof tns && "function" != typeof jnews.tns && (window.jnews.tns = tns), "function" != typeof tns && "function" == typeof jnews.tns && (tns = jnews.tns)
}();
! function () {
    "use strict";
    window.jnews = window.jnews || {}, window.jnews.carousel = window.jnews.carousel || {};
    var t = function () {
        var t = "object" == typeof jnews && "object" == typeof jnews.library,
            e = "function" == typeof jnews.tns;
        if (e && t) var s = jnews.library,
            a = function (t) {
                var e = t.container;
                if (!s.hasClass(e, "jeg_tns_active")) {
                    var a = e.getElementsByClassName("jeg_carousel_post");
                    if (a.length) {
                        t.container = a[0];
                        var n, o = function (t) {
                            var a = {
                                    textDirection: "ltr",
                                    container: t.container,
                                    controls: !1,
                                    gutter: 20,
                                    controlsText: ["", ""],
                                    nav: !1,
                                    loop: !0,
                                    items: 3,
                                    autoplay: !1,
                                    autoplayTimeout: 3e3,
                                    animateOut: "tns-fadeOut",
                                    autoHeight: !0,
                                    mouseDrag: !0,
                                    responsive: !1,
                                    edgePadding: 0,
                                    lazyload: !1,
                                    lazyloadSelector: "img",
                                    mode: "carousel",
                                    speed: 300,
                                    onInit: !1
                                },
                                o = !1;
                            return a.items = void 0 === a.container.dataset.items ? 3 : parseInt(a.container.dataset.items), a.controls = void 0 === a.container.dataset.nav ? a.controls : a.container.dataset.nav, a.autoplay = void 0 === a.container.dataset.autoplay ? a.autoplay : a.container.dataset.autoplay, a.autoplayTimeout = void 0 === a.container.dataset.delay ? a.autoplayTimeout : parseInt(a.container.dataset.delay), a.gutter = void 0 === a.container.dataset.margin ? a.gutter : parseInt(a.container.dataset.margin), "undefined" != typeof jnewsoption && (o = 1 == jnewsoption.rtl), "undefined" != typeof jnewsgutenbergoption && (o = 1 == jnewsgutenbergoption.rtl), a.textDirection = o ? "rtl" : "ltr", s.hasClass(e, "jeg_postblock_carousel_1") ? (n = 1, s.hasClass(e, "jeg_col_12") && (a.items = void 0 === a.container.dataset.items ? 5 : parseInt(a.container.dataset.items)), a.controlsPosition = "bottom", a.responsive = {
                                0: {
                                    items: 1
                                },
                                321: {
                                    items: 2,
                                    gutter: a.gutter > 15 ? 15 : a.gutter
                                },
                                568: {
                                    items: 3,
                                    gutter: a.gutter > 15 ? 15 : a.gutter
                                },
                                1024: {
                                    items: a.items
                                }
                            }, a) : s.hasClass(e, "jeg_postblock_carousel_2") ? (n = 2, a.items = void 0 === a.container.dataset.items ? 3 : parseInt(a.container.dataset.items), a.autoHeight = !1, a.responsive = {
                                0: {
                                    items: 1
                                },
                                568: {
                                    items: 2
                                },
                                768: {
                                    items: a.items > 3 ? 3 : a.items
                                },
                                1024: {
                                    items: a.items
                                }
                            }, a) : s.hasClass(e, "jeg_postblock_carousel_3") ? (n = 3, s.hasClass(e, "jeg_col_12") ? (a.items = void 0 === a.container.dataset.items ? 3 : parseInt(a.container.dataset.items), a.responsive = {
                                0: {
                                    items: 1
                                },
                                568: {
                                    items: 2
                                },
                                768: {
                                    items: a.items > 3 ? 3 : a.items
                                },
                                1024: {
                                    items: a.items
                                }
                            }) : s.hasClass(e, "jeg_col_6") || s.hasClass(e, "jeg_col_7") || s.hasClass(e, "jeg_col_8") ? (a.items = void 0 === a.container.dataset.items ? 2 : parseInt(a.container.dataset.items), a.responsive = {
                                0: {
                                    items: 1
                                },
                                568: {
                                    items: 2
                                },
                                1024: {
                                    items: a.items > 2 ? 2 : a.items
                                }
                            }) : (a.items = 1, a.responsive = {
                                0: {
                                    items: 1
                                },
                                568: {
                                    items: 2
                                },
                                1024: {
                                    items: a.items
                                }
                            }), a) : a
                        }(t);
                        if (t = s.extend(o, t || {}), n && !s.hasClass(t.container, "jeg_tns_active")) {
                            var i = jnews.tns(t);
                            return void 0 !== i && (i.events.on("dragStart", (function (t) {
                                t.event.preventDefault(), t.event.stopPropagation()
                            })), s.addClass(t.container, "jeg_tns_active"), s.dataStorage.put(t.container, "tiny-slider", i)), i
                        }
                    }
                }
            };
        else e || console.warn("Tiny Slider could not be found"), t || console.warn("JNews Library could not be found");
        return a
    }();
    window.jnews.carousel = t
}();
/*!
 * jScrollPane - v2.0.23 - 2016-01-28
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2014 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function (e) {
    e.fn.jScrollPane = function (t) {
        function i(t, i) {
            var o, n, s, r, a, l, c, p, d, u, f, h, j, g, v, m, b, w, y, k, C, T, B, D, x, H, P, S, A, W, Y, z, M, X, R = this,
                I = !0,
                F = !0,
                L = !1,
                q = !1,
                O = t.clone(!1, !1).empty(),
                E = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";

            function V(i) {
                var k, I, F, L, q, O, ae, le, ce, pe, de, ue, fe, he, je = !1,
                    ge = !1;
                if (o = i, void 0 === n) q = t.scrollTop(), O = t.scrollLeft(), t.css({
                    overflow: "hidden",
                    padding: 0
                }), s = t.innerWidth() + M, r = t.innerHeight(), t.width(s), n = e('<div class="jspPane" />').css("padding", z).append(t.children()), a = e('<div class="jspContainer" />').css({
                    width: s + "px",
                    height: r + "px"
                }).append(n).appendTo(t);
                else {
                    if (t.css("width", ""), je = o.stickToBottom && ((le = c - r) > 20 && le - se() < 10), ge = o.stickToRight && ((ae = l - s) > 20 && ae - ne() < 10), (L = t.innerWidth() + M != s || t.outerHeight() != r) && (s = t.innerWidth() + M, r = t.innerHeight(), a.css({
                            width: s + "px",
                            height: r + "px"
                        })), !L && X == l && n.outerHeight() == c) return void t.width(s);
                    X = l, n.css("width", ""), t.width(s), a.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                n.css("overflow", "auto"), l = i.contentWidth ? i.contentWidth : n.width(), c = n[0].scrollHeight, n.css("overflow", ""), u = (d = c / r) > 1, (f = (p = l / s) > 1) || u ? (t.addClass("jspScrollable"), (k = o.maintainPosition && (g || b)) && (I = ne(), F = se()), u && (a.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), w = a.find(">.jspVerticalBar"), y = w.find(">.jspTrack"), h = y.find(">.jspDrag"), o.showArrows && (B = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", Q(0, -1)).bind("click.jsp", re), D = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", Q(0, 1)).bind("click.jsp", re), o.arrowScrollOnHover && (B.bind("mouseover.jsp", Q(0, -1, B)), D.bind("mouseover.jsp", Q(0, 1, D))), K(y, o.verticalArrowPositions, B, D)), C = r, a.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each((function () {
                    C -= e(this).outerHeight()
                })), h.hover((function () {
                    h.addClass("jspHover")
                }), (function () {
                    h.removeClass("jspHover")
                })).bind("mousedown.jsp", (function (t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", re), h.addClass("jspActive");
                    var i = t.pageY - h.position().top;
                    return e("html").bind("mousemove.jsp", (function (e) {
                        J(e.pageY - i, !1)
                    })).bind("mouseup.jsp mouseleave.jsp", $), !1
                })), G()), f && (a.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), x = a.find(">.jspHorizontalBar"), H = x.find(">.jspTrack"), v = H.find(">.jspDrag"), o.showArrows && (A = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", Q(-1, 0)).bind("click.jsp", re), W = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", Q(1, 0)).bind("click.jsp", re), o.arrowScrollOnHover && (A.bind("mouseover.jsp", Q(-1, 0, A)), W.bind("mouseover.jsp", Q(1, 0, W))), K(H, o.horizontalArrowPositions, A, W)), v.hover((function () {
                    v.addClass("jspHover")
                }), (function () {
                    v.removeClass("jspHover")
                })).bind("mousedown.jsp", (function (t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", re), v.addClass("jspActive");
                    var i = t.pageX - v.position().left;
                    return e("html").bind("mousemove.jsp", (function (e) {
                        _(e.pageX - i, !1)
                    })).bind("mouseup.jsp mouseleave.jsp", $), !1
                })), P = a.innerWidth(), N()), function () {
                    if (f && u) {
                        var t = H.outerHeight(),
                            i = y.outerWidth();
                        C -= t, e(x).find(">.jspCap:visible,>.jspArrow").each((function () {
                            P += e(this).outerWidth()
                        })), P -= i, r -= i, s -= t, H.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), G(), N()
                    }
                    f && n.width(a.outerWidth() - M + "px");
                    c = n.outerHeight(), d = c / r, f && ((S = Math.ceil(1 / p * P)) > o.horizontalDragMaxWidth ? S = o.horizontalDragMaxWidth : S < o.horizontalDragMinWidth && (S = o.horizontalDragMinWidth), v.width(S + "px"), m = P - S, ee(b));
                    u && ((T = Math.ceil(1 / d * C)) > o.verticalDragMaxHeight ? T = o.verticalDragMaxHeight : T < o.verticalDragMinHeight && (T = o.verticalDragMinHeight), h.height(T + "px"), j = C - T, Z(g))
                }(), k && (ie(ge ? l - s : I, !1), te(je ? c - r : F, !1)), n.find(":input,a").unbind("focus.jsp").bind("focus.jsp", (function (e) {
                    oe(e.target, !1)
                })), a.unbind(E).bind(E, (function (e, t, i, n) {
                    b || (b = 0), g || (g = 0);
                    var s = b,
                        r = g,
                        a = e.deltaFactor || o.mouseWheelSpeed;
                    return R.scrollBy(i * a, -n * a, !1), s == b && r == g
                })), he = !1, a.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", (function (e) {
                    var t = e.originalEvent.touches[0];
                    ce = ne(), pe = se(), de = t.pageX, ue = t.pageY, fe = !1, he = !0
                })).bind("touchmove.jsp", (function (e) {
                    if (he) {
                        var t = e.originalEvent.touches[0],
                            i = b,
                            o = g;
                        return R.scrollTo(ce + de - t.pageX, pe + ue - t.pageY), fe = fe || Math.abs(de - t.pageX) > 5 || Math.abs(ue - t.pageY) > 5, i == b && o == g
                    }
                })).bind("touchend.jsp", (function (e) {
                    he = !1
                })).bind("click.jsp-touchclick", (function (e) {
                    if (fe) return fe = !1, !1
                })), o.enableKeyboardNavigation && function () {
                    var i, s, l = [];
                    f && l.push(x[0]), u && l.push(w[0]), n.bind("focus.jsp", (function () {
                        t.focus()
                    })), t.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", (function (t) {
                        if (t.target === this || l.length && e(t.target).closest(l).length) {
                            var o = b,
                                n = g;
                            switch (t.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    i = t.keyCode, p();
                                    break;
                                case 35:
                                    te(c - r), i = null;
                                    break;
                                case 36:
                                    te(0), i = null
                            }
                            return !(s = t.keyCode == i && o != b || n != g)
                        }
                    })).bind("keypress.jsp", (function (t) {
                        if (t.keyCode == i && p(), t.target === this || l.length && e(t.target).closest(l).length) return !s
                    })), o.hideFocus ? (t.css("outline", "none"), "hideFocus" in a[0] && t.attr("hideFocus", !0)) : (t.css("outline", ""), "hideFocus" in a[0] && t.attr("hideFocus", !1));

                    function p() {
                        var e = b,
                            t = g;
                        switch (i) {
                            case 40:
                                R.scrollByY(o.keyboardSpeed, !1);
                                break;
                            case 38:
                                R.scrollByY(-o.keyboardSpeed, !1);
                                break;
                            case 34:
                            case 32:
                                R.scrollByY(r * o.scrollPagePercent, !1);
                                break;
                            case 33:
                                R.scrollByY(-r * o.scrollPagePercent, !1);
                                break;
                            case 39:
                                R.scrollByX(o.keyboardSpeed, !1);
                                break;
                            case 37:
                                R.scrollByX(-o.keyboardSpeed, !1)
                        }
                        return s = e != b || t != g
                    }
                }(), o.clickOnTrack && function () {
                    U(), u && y.bind("mousedown.jsp", (function (t) {
                        if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                            var i, n = e(this),
                                s = n.offset(),
                                a = t.pageY - s.top - g,
                                l = !0,
                                p = function () {
                                    var e = n.offset(),
                                        s = t.pageY - e.top - T / 2,
                                        u = r * o.scrollPagePercent,
                                        f = j * u / (c - r);
                                    if (a < 0) g - f > s ? R.scrollByY(-u) : J(s);
                                    else {
                                        if (!(a > 0)) return void d();
                                        g + f < s ? R.scrollByY(u) : J(s)
                                    }
                                    i = setTimeout(p, l ? o.initialDelay : o.trackClickRepeatFreq), l = !1
                                },
                                d = function () {
                                    i && clearTimeout(i), i = null, e(document).unbind("mouseup.jsp", d)
                                };
                            return p(), e(document).bind("mouseup.jsp", d), !1
                        }
                    }));
                    f && H.bind("mousedown.jsp", (function (t) {
                        if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                            var i, n = e(this),
                                r = n.offset(),
                                a = t.pageX - r.left - b,
                                c = !0,
                                p = function () {
                                    var e = n.offset(),
                                        r = t.pageX - e.left - S / 2,
                                        u = s * o.scrollPagePercent,
                                        f = m * u / (l - s);
                                    if (a < 0) b - f > r ? R.scrollByX(-u) : _(r);
                                    else {
                                        if (!(a > 0)) return void d();
                                        b + f < r ? R.scrollByX(u) : _(r)
                                    }
                                    i = setTimeout(p, c ? o.initialDelay : o.trackClickRepeatFreq), c = !1
                                },
                                d = function () {
                                    i && clearTimeout(i), i = null, e(document).unbind("mouseup.jsp", d)
                                };
                            return p(), e(document).bind("mouseup.jsp", d), !1
                        }
                    }))
                }(), function () {
                    if (location.hash && location.hash.length > 1) {
                        var t, i, o = escape(location.hash.substr(1));
                        try {
                            t = e("#" + o + ', a[name="' + o + '"]')
                        } catch (e) {
                            return
                        }
                        t.length && n.find(o) && (0 === a.scrollTop() ? i = setInterval((function () {
                            a.scrollTop() > 0 && (oe(t, !0), e(document).scrollTop(a.position().top), clearInterval(i))
                        }), 50) : (oe(t, !0), e(document).scrollTop(a.position().top)))
                    }
                }(), o.hijackInternalLinks && function () {
                    if (e(document.body).data("jspHijack")) return;
                    e(document.body).data("jspHijack", !0), e(document.body).delegate('a[href*="#"]', "click", (function (t) {
                        var i, o, n, s, r, a = this.href.substr(0, this.href.indexOf("#")),
                            l = location.href;
                        if (-1 !== location.href.indexOf("#") && (l = location.href.substr(0, location.href.indexOf("#"))), a === l) {
                            i = escape(this.href.substr(this.href.indexOf("#") + 1));
                            try {
                                o = e("#" + i + ', a[name="' + i + '"]')
                            } catch (e) {
                                return
                            }
                            o.length && ((n = o.closest(".jspScrollable")).data("jsp").scrollToElement(o, !0), n[0].scrollIntoView && (s = e(window).scrollTop(), ((r = o.offset().top) < s || r > s + e(window).height()) && n[0].scrollIntoView()), t.preventDefault())
                        }
                    }))
                }()) : (t.removeClass("jspScrollable"), n.css({
                    top: 0,
                    left: 0,
                    width: a.width() - M
                }), a.unbind(E), n.find(":input,a").unbind("focus.jsp"), t.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), n.unbind(".jsp"), U()), o.autoReinitialise && !Y ? Y = setInterval((function () {
                    V(o)
                }), o.autoReinitialiseDelay) : !o.autoReinitialise && Y && clearInterval(Y), q && t.scrollTop(0) && te(q, !1), O && t.scrollLeft(0) && ie(O, !1), t.trigger("jsp-initialised", [f || u])
            }

            function G() {
                y.height(C + "px"), g = 0, k = o.verticalGutter + y.outerWidth(), n.width(s - k - M);
                try {
                    0 === w.position().left && n.css("margin-left", k + "px")
                } catch (e) {}
            }

            function N() {
                a.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each((function () {
                    P -= e(this).outerWidth()
                })), H.width(P + "px"), b = 0
            }

            function K(e, t, i, o) {
                var n, s = "before",
                    r = "after";
                "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == s ? r = t : t == r && (s = t, n = i, i = o, o = n), e[s](i)[r](o)
            }

            function Q(t, i, n) {
                return function () {
                    return function (t, i, n, s) {
                        n = e(n).addClass("jspActive");
                        var r, a, l = !0,
                            c = function () {
                                0 !== t && R.scrollByX(t * o.arrowButtonSpeed), 0 !== i && R.scrollByY(i * o.arrowButtonSpeed), a = setTimeout(c, l ? o.initialDelay : o.arrowRepeatFreq), l = !1
                            };
                        c(), r = s ? "mouseout.jsp" : "mouseup.jsp", (s = s || e("html")).bind(r, (function () {
                            n.removeClass("jspActive"), a && clearTimeout(a), a = null, s.unbind(r)
                        }))
                    }(t, i, this, n), this.blur(), !1
                }
            }

            function U() {
                H && H.unbind("mousedown.jsp"), y && y.unbind("mousedown.jsp")
            }

            function $() {
                e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), h && h.removeClass("jspActive"), v && v.removeClass("jspActive")
            }

            function J(i, n) {
                if (u) {
                    i < 0 ? i = 0 : i > j && (i = j);
                    var s = new e.Event("jsp-will-scroll-y");
                    if (t.trigger(s, [i]), !s.isDefaultPrevented()) {
                        var a = i || 0,
                            l = 0 === a,
                            p = a == j,
                            d = -(i / j) * (c - r);
                        void 0 === n && (n = o.animateScroll), n ? R.animate(h, "top", i, Z, (function () {
                            t.trigger("jsp-user-scroll-y", [-d, l, p])
                        })) : (h.css("top", i), Z(i), t.trigger("jsp-user-scroll-y", [-d, l, p]))
                    }
                }
            }

            function Z(e) {
                void 0 === e && (e = h.position().top), a.scrollTop(0);
                var i = 0 === (g = e || 0),
                    s = g == j,
                    l = -(e / j) * (c - r);
                I == i && L == s || (I = i, L = s, t.trigger("jsp-arrow-change", [I, L, F, q])),
                    function (e, t) {
                        o.showArrows && (B[e ? "addClass" : "removeClass"]("jspDisabled"), D[t ? "addClass" : "removeClass"]("jspDisabled"))
                    }(i, s), n.css("top", l), t.trigger("jsp-scroll-y", [-l, i, s]).trigger("scroll")
            }

            function _(i, n) {
                if (f) {
                    i < 0 ? i = 0 : i > m && (i = m);
                    var r = new e.Event("jsp-will-scroll-x");
                    if (t.trigger(r, [i]), !r.isDefaultPrevented()) {
                        var a = i || 0,
                            c = 0 === a,
                            p = a == m,
                            d = -(i / m) * (l - s);
                        void 0 === n && (n = o.animateScroll), n ? R.animate(v, "left", i, ee, (function () {
                            t.trigger("jsp-user-scroll-x", [-d, c, p])
                        })) : (v.css("left", i), ee(i), t.trigger("jsp-user-scroll-x", [-d, c, p]))
                    }
                }
            }

            function ee(e) {
                void 0 === e && (e = v.position().left), a.scrollTop(0);
                var i = 0 === (b = e || 0),
                    r = b == m,
                    c = -(e / m) * (l - s);
                F == i && q == r || (F = i, q = r, t.trigger("jsp-arrow-change", [I, L, F, q])),
                    function (e, t) {
                        o.showArrows && (A[e ? "addClass" : "removeClass"]("jspDisabled"), W[t ? "addClass" : "removeClass"]("jspDisabled"))
                    }(i, r), n.css("left", c), t.trigger("jsp-scroll-x", [-c, i, r]).trigger("scroll")
            }

            function te(e, t) {
                J(e / (c - r) * j, t)
            }

            function ie(e, t) {
                _(e / (l - s) * m, t)
            }

            function oe(t, i, n) {
                var l, c, p, d, u, f, h, j, g, v = 0,
                    m = 0;
                try {
                    l = e(t)
                } catch (e) {
                    return
                }
                for (c = l.outerHeight(), p = l.outerWidth(), a.scrollTop(0), a.scrollLeft(0); !l.is(".jspPane");)
                    if (v += l.position().top, m += l.position().left, l = l.offsetParent(), /^body|html$/i.test(l[0].nodeName)) return;
                f = (d = se()) + r, v < d || i ? j = v - o.horizontalGutter : v + c > f && (j = v - r + c + o.horizontalGutter), isNaN(j) || te(j, n), h = (u = ne()) + s, m < u || i ? g = m - o.horizontalGutter : m + p > h && (g = m - s + p + o.horizontalGutter), isNaN(g) || ie(g, n)
            }

            function ne() {
                return -n.position().left
            }

            function se() {
                return -n.position().top
            }

            function re() {
                return !1
            }
            "border-box" === t.css("box-sizing") ? (z = 0, M = 0) : (z = t.css("paddingTop") + " " + t.css("paddingRight") + " " + t.css("paddingBottom") + " " + t.css("paddingLeft"), M = (parseInt(t.css("paddingLeft"), 10) || 0) + (parseInt(t.css("paddingRight"), 10) || 0)), e.extend(R, {
                reinitialise: function (t) {
                    V(t = e.extend({}, o, t))
                },
                scrollToElement: function (e, t, i) {
                    oe(e, t, i)
                },
                scrollTo: function (e, t, i) {
                    ie(e, i), te(t, i)
                },
                scrollToX: function (e, t) {
                    ie(e, t)
                },
                scrollToY: function (e, t) {
                    te(e, t)
                },
                scrollToPercentX: function (e, t) {
                    ie(e * (l - s), t)
                },
                scrollToPercentY: function (e, t) {
                    te(e * (c - r), t)
                },
                scrollBy: function (e, t, i) {
                    R.scrollByX(e, i), R.scrollByY(t, i)
                },
                scrollByX: function (e, t) {
                    _((ne() + Math[e < 0 ? "floor" : "ceil"](e)) / (l - s) * m, t)
                },
                scrollByY: function (e, t) {
                    J((se() + Math[e < 0 ? "floor" : "ceil"](e)) / (c - r) * j, t)
                },
                positionDragX: function (e, t) {
                    _(e, t)
                },
                positionDragY: function (e, t) {
                    J(e, t)
                },
                animate: function (e, t, i, n, s) {
                    var r = {};
                    r[t] = i, e.animate(r, {
                        duration: o.animateDuration,
                        easing: o.animateEase,
                        queue: !1,
                        step: n,
                        complete: s
                    })
                },
                getContentPositionX: function () {
                    return ne()
                },
                getContentPositionY: function () {
                    return se()
                },
                getContentWidth: function () {
                    return l
                },
                getContentHeight: function () {
                    return c
                },
                getPercentScrolledX: function () {
                    return ne() / (l - s)
                },
                getPercentScrolledY: function () {
                    return se() / (c - r)
                },
                getIsScrollableH: function () {
                    return f
                },
                getIsScrollableV: function () {
                    return u
                },
                getContentPane: function () {
                    return n
                },
                scrollToBottom: function (e) {
                    J(j, e)
                },
                hijackInternalLinks: e.noop,
                destroy: function () {
                    var e, i;
                    e = se(), i = ne(), t.removeClass("jspScrollable").unbind(".jsp"), n.unbind(".jsp"), t.replaceWith(O.append(n.children())), O.scrollTop(e), O.scrollLeft(i), Y && clearInterval(Y)
                }
            }), V(i)
        }
        return t = e.extend({}, e.fn.jScrollPane.defaults, t), e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], (function () {
            t[this] = t[this] || t.speed
        })), this.each((function () {
            var o = e(this),
                n = o.data("jsp");
            n ? n.reinitialise(t) : (e("script", o).filter('[type="text/javascript"],:not([type])').remove(), n = new i(o, t), o.data("jsp", n))
        }))
    }, e.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: void 0,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}));
! function () {
    "use strict";
    window.jnews = window.jnews || {}, window.jnews.vidplaylist = window.jnews.vidplaylist || {};
    var e = function () {
        var e = "object" == typeof jnews && "object" == typeof jnews.library,
            t = "function" == typeof jnews.tns;
        if (t && e) {
            var i = jnews.library;
            return function (e) {
                e = i.extend({
                    container: ".jeg_video_playlist",
                    textDirection: "ltr",
                    controlsText: ["", ""],
                    nav: !1,
                    loop: !1,
                    controls: !0,
                    items: 8,
                    gutter: 0,
                    autoHeight: !0,
                    responsive: {
                        0: {
                            items: 2
                        },
                        480: {
                            items: 3
                        },
                        568: {
                            items: 4
                        },
                        768: {
                            items: 7
                        },
                        1024: {
                            items: 8
                        }
                    }
                }, e || {});
                var t = function (e) {
                    this.construct(e)
                };
                t.prototype.construct = function (e) {
                    var t = this;
                    if (t.options = e, t.tempOptions = t.options, t.element = "string" == typeof t.options.container ? i.globalBody.querySelectorAll(t.options.container) : t.options.container, t.element.length) i.forEach(t.element, (function (e, n) {
                        t.tempOptions.container = e, t.construct(t.tempOptions);
                        var o = i.extend({}, e.dataset, t);
                        i.dataStorage.put(e, "jeg.vidplaylist", o)
                    }));
                    else {
                        var n = i.extend({}, t.element.dataset, t);
                        i.dataStorage.put(t.element, "jeg.vidplaylist", n), t.unique = t.element.dataset.unique, t.data = window[t.unique], t.init()
                    }
                }, t.prototype.init = function () {
                    var e = this;
                    e.playlist = e.element.querySelector(".jeg_video_playlist_list_inner_wrapper"), e.playlist_item = e.playlist.getElementsByClassName("jeg_video_playlist_item_wrapper"), i.hasClass(e.element, "jeg_vertical_playlist") ? e.vertical_playlist() : e.horizontal_playlist(), e.video = e.element.getElementsByTagName("video"), e.video.length && "function" == typeof e.video.mediaelementplayer && e.video.mediaelementplayer(), e.bind_click(), e.autoload_video()
                }, t.prototype.autoload_video = function () {
                    i.forEach(i.globalBody.getElementsByClassName("jeg_video_playlist"), (function (e, t) {
                        i.hasClass(e, "loaded") || new Waypoint({
                            element: e,
                            handler: function () {
                                if (!i.hasClass(e, "loaded")) {
                                    var t = this.element,
                                        n = t.querySelector(".jeg_video_container"),
                                        o = n.children[0].getAttribute("src"),
                                        l = e.querySelector(".jeg_preview_slider_loader");
                                    n.innerHTML = '<iframe src="' + o + '" allowfullscreen="" height="500" width="700"></iframe>', l.parentNode.removeChild(l), i.addClass(t, "loaded")
                                }
                            },
                            offset: "100%"
                        })
                    }))
                }, t.prototype.horizontal_playlist = function () {
                    var e = this,
                        t = i.getWidth(e.element),
                        n = Math.floor(t / 160),
                        o = n - 1,
                        l = i.hasClass(e.element, "jeg_dark_playlist") ? "" : 10;
                    if (void 0 !== e.playlist) {
                        var a = i.extend(e.tempOptions, {
                            container: e.playlist,
                            textDirection: e.tempOptions.textDirection,
                            controlsText: ["", ""],
                            nav: !1,
                            loop: !1,
                            controls: !0,
                            items: n,
                            gutter: l,
                            autoHeight: !0,
                            mouseDrag: !0,
                            responsive: {
                                0: {
                                    items: 2
                                },
                                480: {
                                    items: 3
                                },
                                568: {
                                    items: 4
                                },
                                768: {
                                    items: o
                                },
                                1024: {
                                    items: n
                                }
                            }
                        });
                        if (!i.hasClass(a.container, "jeg_tns_active")) {
                            var r = jnews.tns(a);
                            void 0 !== r && (r.events.on("dragStart", (function (e) {
                                e.event.preventDefault(), e.event.stopPropagation()
                            })), i.addClass(a.container, "jeg_tns_active"), i.dataStorage.put(a.container, "tiny-slider", r))
                        }
                    }
                }, t.prototype.vertical_playlist = function () {
                    var e = this;
                    e.playlist.style.display = "block";
                    var t = jQuery(e.playlist).jScrollPane().data("jsp");
                    e.vertical_resize = function (t) {
                        var n = e.element.querySelector(".jeg_video_playlist_current"),
                            o = e.element.querySelector(".jeg_video_playlist_video_content"),
                            l = e.playlist,
                            a = i.getHeight(o),
                            r = i.windowWidth();
                        if (i.hasClass(e.element, "jeg_col_12") && r > 768 || (i.hasClass(e.element, "jeg_col_9") || i.hasClass(e.element, "jeg_col_9")) && r > 1024) a = i.getHeight(o) - i.getHeight(n);
                        else {
                            for (var s = e.playlist_item, d = 0, c = 0; c < 3; c++) s.length && void 0 !== s[c] && (d += i.getHeight(s[c]));
                            a = d
                        }
                        l.style.height = a + "px", t.reinitialise()
                    };
                    var n = {
                        resize: function () {
                            e.vertical_resize(t)
                        }.bind(e),
                        load: function () {
                            setTimeout((function () {
                                e.vertical_resize(t)
                            }), 200)
                        }.bind(e)
                    };
                    i.addEvents(i.win, n), e.vertical_resize(t)
                }, t.prototype.load_content = function (e, t) {
                    var n = e.parentNode,
                        o = i.getParents(n, ".jeg_video_playlist_wrapper"),
                        l = (o = o.length ? o[o.length - 1] : i.doc).querySelector(".jeg_video_holder"),
                        a = o.querySelector(".jeg_video_playlist_current_info"),
                        r = l.querySelector(".jeg_preview_slider_loader");
                    r.parentNode.removeChild(r);
                    var s = i.doc.createElement("div");
                    s.innerHTML = t.tag;
                    var d = s.querySelector("div.jeg_video_container");
                    l.appendChild(d), "mediaplayer" === t.type && l.querySelector("video").mediaelementplayer({
                        success: function (e) {
                            e.play()
                        }
                    });
                    var c = e.querySelector(".jeg_video_playlist_title"),
                        p = "<a href='" + e.getAttribute("href") + "'>" + (c.innerText || c.textContent) + "</a>";
                    l.style.height = "auto", a.querySelector("h2").innerHTML = p;
                    var _ = a.querySelector("span");
                    if (_) {
                        var v = e.querySelector(".jeg_video_playlist_category");
                        _.innerText && (_.innerText = v.innerText || v.textContent), _.textContent && (_.textContent = v.innerText || v.textContent)
                    }
                }, t.prototype.bind_click = function () {
                    var e = this;
                    i.forEach(e.playlist_item, (function (t, n) {
                        i.addEvents(t, {
                            click: function (n) {
                                n.preventDefault();
                                var o = t.querySelector("a.jeg_video_playlist_item").dataset.id,
                                    l = t.parentNode,
                                    a = i.getParents(l, ".jeg_video_playlist_wrapper"),
                                    r = (a = a.length ? a[a.length - 1] : i.doc).querySelector(".jeg_video_holder");
                                return i.forEach(a.querySelectorAll("a.jeg_video_playlist_item"), (function (e, t) {
                                    i.removeClass(e, "active")
                                })), i.addClass(t.querySelector("a.jeg_video_playlist_item"), "active"), r.style.height = i.getHeight(r), r.innerHTML = "<div class='jeg_preview_slider_loader'><div class='jeg_preview_slider_loader_circle'></div></div>", e.load_content(t.querySelector("a.jeg_video_playlist_item"), e.data[o]), !1
                            }
                        })
                    }))
                }, new t(e)
            }
        }
        t || console.warn("Tiny Slider could not be found"), e || console.warn("JNews Library could not be found")
    }();
    window.jnews.vidplaylist = e
}();
! function a(o, s, u) {
    function c(t, e) {
        if (!s[t]) {
            if (!o[t]) {
                var r = "function" == typeof require && require;
                if (!e && r) return r(t, !0);
                if (l) return l(t, !0);
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            var i = s[t] = {
                exports: {}
            };
            o[t][0].call(i.exports, function (e) {
                return c(o[t][1][e] || e)
            }, i, i.exports, a, o, s, u)
        }
        return s[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < u.length; e++) c(u[e]);
    return c
}({
    1: [function (e, t, r) {
        "use strict";
        var n = window.mc4wp || {},
            i = e("./forms/forms.js");

        function a(e, t) {
            i.trigger(t[0].id + "." + e, t), i.trigger(e, t)
        }

        function o(e, n) {
            document.addEventListener(e, function (e) {
                if (e.target) {
                    var t = e.target,
                        r = !1;
                    "string" == typeof t.className && (r = -1 < t.className.indexOf("mc4wp-form")), r || "function" != typeof t.matches || (r = t.matches(".mc4wp-form *")), r && n.call(e, e)
                }
            }, !0)
        }
        if (e("./forms/conditional-elements.js"), o("submit", function (e) {
                var t = i.getByElement(e.target);
                e.defaultPrevented || i.trigger(t.id + ".submit", [t, e]), e.defaultPrevented || i.trigger("submit", [t, e])
            }), o("focus", function (e) {
                var t = i.getByElement(e.target);
                t.started || (a("started", [t, e]), t.started = !0)
            }), o("change", function (e) {
                a("change", [i.getByElement(e.target), e])
            }), n.listeners) {
            for (var s = n.listeners, u = 0; u < s.length; u++) i.on(s[u].event, s[u].callback);
            delete n.listeners
        }
        n.forms = i, window.mc4wp = n
    }, {
        "./forms/conditional-elements.js": 2,
        "./forms/forms.js": 4
    }],
    2: [function (e, t, r) {
        "use strict";

        function n(e) {
            for (var t = !!e.getAttribute("data-show-if"), r = t ? e.getAttribute("data-show-if").split(":") : e.getAttribute("data-hide-if").split(":"), n = r[0], i = (1 < r.length ? r[1] : "*").split("|"), a = function (e, t) {
                    for (var r = [], n = e.querySelectorAll('input[name="' + t + '"],select[name="' + t + '"],textarea[name="' + t + '"]'), i = 0; i < n.length; i++) {
                        var a = n[i];
                        ("radio" !== a.type && "checkbox" !== a.type || a.checked) && r.push(a.value)
                    }
                    return r
                }(function (e) {
                    for (var t = e; t.parentElement;)
                        if ("FORM" === (t = t.parentElement).tagName) return t;
                    return null
                }(e), n), o = !1, s = 0; s < a.length; s++) {
                var u = a[s];
                if (o = -1 < i.indexOf(u) || -1 < i.indexOf("*") && 0 < u.length) break
            }
            e.style.display = t ? o ? "" : "none" : o ? "none" : "";
            var c = e.querySelectorAll("input,select,textarea");
            [].forEach.call(c, function (e) {
                (o || t) && e.getAttribute("data-was-required") && (e.required = !0, e.removeAttribute("data-was-required")), o && t || !e.required || (e.setAttribute("data-was-required", "true"), e.required = !1)
            })
        }

        function i() {
            var e = document.querySelectorAll(".mc4wp-form [data-show-if],.mc4wp-form [data-hide-if]");
            [].forEach.call(e, n)
        }

        function a(e) {
            if (e.target && e.target.form && !(e.target.form.className.indexOf("mc4wp-form") < 0)) {
                var t = e.target.form.querySelectorAll("[data-show-if],[data-hide-if]");
                [].forEach.call(t, n)
            }
        }
        document.addEventListener("keyup", a, !0), document.addEventListener("change", a, !0), document.addEventListener("mc4wp-refresh", i, !0), window.addEventListener("load", i), i()
    }, {}],
    3: [function (e, t, r) {
        "use strict";

        function n(e, t) {
            this.id = e, this.element = t || document.createElement("form"), this.name = this.element.getAttribute("data-name") || "Form #" + this.id, this.errors = [], this.started = !1
        }
        var i = e("form-serialize"),
            a = e("populate.js");
        n.prototype.setData = function (e) {
            try {
                a(this.element, e)
            } catch (e) {
                console.error(e)
            }
        }, n.prototype.getData = function () {
            return i(this.element, {
                hash: !0,
                empty: !0
            })
        }, n.prototype.getSerializedData = function () {
            return i(this.element, {
                hash: !1,
                empty: !0
            })
        }, n.prototype.setResponse = function (e) {
            this.element.querySelector(".mc4wp-response").innerHTML = e
        }, n.prototype.reset = function () {
            this.setResponse(""), this.element.querySelector(".mc4wp-form-fields").style.display = "", this.element.reset()
        }, t.exports = n
    }, {
        "form-serialize": 5,
        "populate.js": 6
    }],
    4: [function (e, t, r) {
        "use strict";
        var n = e("./form.js"),
            i = [],
            a = {};

        function o(e, t) {
            a[e] = a[e] || [], a[e].forEach(function (e) {
                return e.apply(null, t)
            })
        }

        function s(e, t) {
            t = t || parseInt(e.getAttribute("data-id")) || 0;
            var r = new n(t, e);
            return i.push(r), r
        }
        t.exports = {
            get: function (e) {
                e = parseInt(e);
                for (var t = 0; t < i.length; t++)
                    if (i[t].id === e) return i[t];
                return s(document.querySelector(".mc4wp-form-" + e), e)
            },
            getByElement: function (e) {
                for (var t = e.form || e, r = 0; r < i.length; r++)
                    if (i[r].element === t) return i[r];
                return s(t)
            },
            on: function (e, t) {
                a[e] = a[e] || [], a[e].push(t)
            },
            off: function (e, t) {
                a[e] = a[e] || [], a[e] = a[e].filter(function (e) {
                    return e !== t
                })
            },
            trigger: function (e, t) {
                "submit" === e || 0 < e.indexOf(".submit") ? o(e, t) : window.setTimeout(function () {
                    o(e, t)
                }, 1)
            }
        }
    }, {
        "./form.js": 3
    }],
    5: [function (e, t, r) {
        var v = /^(?:submit|button|image|reset|file)$/i,
            g = /^(?:input|select|textarea|keygen)/i,
            i = /(\[[^\[\]]*\])/g;

        function y(e, t, r) {
            if (t.match(i)) {
                ! function e(t, r, n) {
                    if (0 === r.length) return t = n;
                    var i = r.shift(),
                        a = i.match(/^\[(.+?)\]$/);
                    if ("[]" === i) return t = t || [], Array.isArray(t) ? t.push(e(null, r, n)) : (t._values = t._values || [], t._values.push(e(null, r, n))), t;
                    if (a) {
                        var o = a[1],
                            s = +o;
                        isNaN(s) ? (t = t || {})[o] = e(t[o], r, n) : (t = t || [])[s] = e(t[s], r, n)
                    } else t[i] = e(t[i], r, n);
                    return t
                }(e, function (e) {
                    var t = [],
                        r = new RegExp(i),
                        n = /^([^\[\]]*)/.exec(e);
                    for (n[1] && t.push(n[1]); null !== (n = r.exec(e));) t.push(n[1]);
                    return t
                }(t), r)
            } else {
                var n = e[t];
                n ? (Array.isArray(n) || (e[t] = [n]), e[t].push(r)) : e[t] = r
            }
            return e
        }

        function w(e, t, r) {
            return r = r.replace(/(\r)?\n/g, "\r\n"), r = (r = encodeURIComponent(r)).replace(/%20/g, "+"), e + (e ? "&" : "") + encodeURIComponent(t) + "=" + r
        }
        t.exports = function (e, t) {
            "object" != typeof t ? t = {
                hash: !!t
            } : void 0 === t.hash && (t.hash = !0);
            for (var r = t.hash ? {} : "", n = t.serializer || (t.hash ? y : w), i = e && e.elements ? e.elements : [], a = Object.create(null), o = 0; o < i.length; ++o) {
                var s = i[o];
                if ((t.disabled || !s.disabled) && s.name && (g.test(s.nodeName) && !v.test(s.type))) {
                    var u = s.name,
                        c = s.value;
                    if ("checkbox" !== s.type && "radio" !== s.type || s.checked || (c = void 0), t.empty) {
                        if ("checkbox" !== s.type || s.checked || (c = ""), "radio" === s.type && (a[s.name] || s.checked ? s.checked && (a[s.name] = !0) : a[s.name] = !1), null == c && "radio" == s.type) continue
                    } else if (!c) continue;
                    if ("select-multiple" !== s.type) r = n(r, u, c);
                    else {
                        c = [];
                        for (var l = s.options, f = !1, m = 0; m < l.length; ++m) {
                            var d = l[m],
                                p = t.empty && !d.value,
                                h = d.value || p;
                            d.selected && h && (f = !0, r = t.hash && "[]" !== u.slice(u.length - 2) ? n(r, u + "[]", d.value) : n(r, u, d.value))
                        }!f && t.empty && (r = n(r, u, ""))
                    }
                }
            }
            if (t.empty)
                for (var u in a) a[u] || (r = n(r, u, ""));
            return r
        }
    }, {}],
    6: [function (e, t, r) {
        void 0 !== t && t.exports && (t.exports = function e(t, r, n) {
            for (var i in r)
                if (r.hasOwnProperty(i)) {
                    var a = i,
                        o = r[i];
                    if (void 0 === o && (o = ""), null === o && (o = ""), void 0 !== n && (a = n + "[" + i + "]"), o.constructor === Array) a += "[]";
                    else if ("object" == typeof o) {
                        e(t, o, a);
                        continue
                    }
                    var s = t.elements.namedItem(a);
                    if (s) switch (s.type || s[0].type) {
                        default:
                            s.value = o;
                            break;
                        case "radio":
                        case "checkbox":
                            for (var u = o.constructor === Array ? o : [o], c = 0; c < s.length; c++) s[c].checked = -1 < u.indexOf(s[c].value);
                            break;
                        case "select-multiple":
                            u = o.constructor === Array ? o : [o];
                            for (var l = 0; l < s.options.length; l++) s.options[l].selected = -1 < u.indexOf(s.options[l].value);
                            break;
                        case "select":
                        case "select-one":
                            s.value = o.toString() || o;
                            break;
                        case "date":
                            s.value = new Date(o).toISOString().split("T")[0]
                    }
                }
        })
    }, {}]
}, {}, [1]);;