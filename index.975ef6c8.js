// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _keenSlider = require("keen-slider");
var _keenSliderDefault = parcelHelpers.interopDefault(_keenSlider);
var _jsConfetti = require("js-confetti");
var _jsConfettiDefault = parcelHelpers.interopDefault(_jsConfetti);
const slider = new (0, _keenSliderDefault.default)(".keen-slider", {
    created: ()=>{
        console.log("created");
    }
}, []);
const jsConfetti = new (0, _jsConfettiDefault.default)();
slider.on("slideChanged", ()=>{
    var slide = slider.track.details.rel;
    const bullets = document.querySelectorAll(".bullet");
    bullets.forEach((bullet, index, array)=>{
        if (index === slide) {
            bullet.classList.add("bullet--active");
            bullet.classList.add("Bgc(#fff)::a");
            bullet.classList.remove("Bgc($c-bg-black)::a");
            bullet.classList.remove("Op(.2)");
        } else if (bullet.classList.contains("bullet--active")) {
            bullet.classList.add("Bgc($c-bg-black)::a");
            bullet.classList.add("Op(.2)");
            bullet.classList.remove("Bgc(#fff)::a");
            bullet.classList.remove("bullet--active");
        }
    });
    if (slide === bullets.length - 1) {
        jsConfetti.addConfetti({
            emojis: [
                "\uD83D\uDC96",
                "\uD83E\uDD0D",
                "\uD83D\uDC8D",
                "\uD83D\uDC70\u200D\u2640\uFE0F",
                "\uD83D\uDC90"
            ]
        });
        jsConfetti.addConfetti({
            confettiColors: [
                "#ff0a54",
                "#ff477e",
                "#ff7096",
                "#ff85a1",
                "#fbb1bd",
                "#f9bec7", 
            ]
        });
    }
});

},{"keen-slider":"4GIfd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","js-confetti":"gZbVi"}],"4GIfd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>k);
var n = function() {
    return n = Object.assign || function(n1) {
        for(var t1, i1 = 1, e1 = arguments.length; i1 < e1; i1++)for(var r1 in t1 = arguments[i1])Object.prototype.hasOwnProperty.call(t1, r1) && (n1[r1] = t1[r1]);
        return n1;
    }, n.apply(this, arguments);
};
function t(n2, t2, i2) {
    if (i2 || 2 === arguments.length) for(var e2, r2 = 0, a1 = t2.length; r2 < a1; r2++)!e2 && r2 in t2 || (e2 || (e2 = Array.prototype.slice.call(t2, 0, r2)), e2[r2] = t2[r2]);
    return n2.concat(e2 || Array.prototype.slice.call(t2));
}
function i(n3) {
    return Array.prototype.slice.call(n3);
}
function e(n4, t3) {
    var i3 = Math.floor(n4);
    return i3 === t3 || i3 + 1 === t3 ? n4 : t3;
}
function r() {
    return Date.now();
}
function a(n5, t4, i4) {
    if (t4 = "data-keen-slider-" + t4, null === i4) return n5.removeAttribute(t4);
    n5.setAttribute(t4, i4 || "");
}
function o(n6, t5) {
    return t5 = t5 || document, "function" == typeof n6 && (n6 = n6(t5)), Array.isArray(n6) ? n6 : "string" == typeof n6 ? i(t5.querySelectorAll(n6)) : n6 instanceof HTMLElement ? [
        n6
    ] : n6 instanceof NodeList ? i(n6) : [];
}
function u(n7) {
    n7.raw && (n7 = n7.raw), n7.cancelable && !n7.defaultPrevented && n7.preventDefault();
}
function s(n8) {
    n8.raw && (n8 = n8.raw), n8.stopPropagation && n8.stopPropagation();
}
function c() {
    var n9 = [];
    return {
        add: function(t6, i5, e3, r3) {
            t6.addListener ? t6.addListener(e3) : t6.addEventListener(i5, e3, r3), n9.push([
                t6,
                i5,
                e3,
                r3
            ]);
        },
        input: function(n10, t7, i6, e4) {
            this.add(n10, t7, function(n11) {
                return function(t8) {
                    t8.nativeEvent && (t8 = t8.nativeEvent);
                    var i7 = t8.changedTouches || [], e5 = t8.targetTouches || [], r4 = t8.detail && t8.detail.x ? t8.detail : null;
                    return n11({
                        id: r4 ? r4.identifier ? r4.identifier : "i" : e5[0] ? e5[0] ? e5[0].identifier : "e" : "d",
                        idChanged: r4 ? r4.identifier ? r4.identifier : "i" : i7[0] ? i7[0] ? i7[0].identifier : "e" : "d",
                        raw: t8,
                        x: r4 && r4.x ? r4.x : e5[0] ? e5[0].screenX : r4 ? r4.x : t8.pageX,
                        y: r4 && r4.y ? r4.y : e5[0] ? e5[0].screenY : r4 ? r4.y : t8.pageY
                    });
                };
            }(i6), e4);
        },
        purge: function() {
            n9.forEach(function(n12) {
                n12[0].removeListener ? n12[0].removeListener(n12[2]) : n12[0].removeEventListener(n12[1], n12[2], n12[3]);
            }), n9 = [];
        }
    };
}
function d(n13, t9, i8) {
    return Math.min(Math.max(n13, t9), i8);
}
function l(n14) {
    return (n14 > 0 ? 1 : 0) - (n14 < 0 ? 1 : 0) || +n14;
}
function f(n15) {
    var t10 = n15.getBoundingClientRect();
    return {
        height: e(t10.height, n15.offsetHeight),
        width: e(t10.width, n15.offsetWidth)
    };
}
function p(n16, t11, i9, e6) {
    var r5 = n16 && n16[t11];
    return null == r5 ? i9 : e6 && "function" == typeof r5 ? r5() : r5;
}
function v(n17) {
    return Math.round(1e6 * n17) / 1e6;
}
function h(n18) {
    var t12, i10, e7, r6, a2, o1;
    function u1(t13) {
        o1 || (o1 = t13), s1(!0);
        var a3 = t13 - o1;
        a3 > e7 && (a3 = e7);
        var l2 = r6[i10];
        if (l2[3] < a3) return i10++, u1(t13);
        var f1 = l2[2], p1 = l2[4], v1 = l2[0], h1 = l2[1] * (0, l2[5])(0 === p1 ? 1 : (a3 - f1) / p1);
        if (h1 && n18.track.to(v1 + h1), a3 < e7) return d1();
        o1 = null, s1(!1), c1(null), n18.emit("animationEnded");
    }
    function s1(n19) {
        t12.active = n19;
    }
    function c1(n20) {
        t12.targetIdx = n20;
    }
    function d1() {
        var n21;
        n21 = u1, a2 = window.requestAnimationFrame(n21);
    }
    function l1() {
        var t14;
        t14 = a2, window.cancelAnimationFrame(t14), s1(!1), c1(null), o1 && n18.emit("animationStopped"), o1 = null;
    }
    return t12 = {
        active: !1,
        start: function(t15) {
            if (l1(), n18.track.details) {
                var a4 = 0, o2 = n18.track.details.position;
                i10 = 0, e7 = 0, r6 = t15.map(function(n22) {
                    var t16, i11 = o2, r7 = null !== (t16 = n22.earlyExit) && void 0 !== t16 ? t16 : n22.duration, u2 = n22.easing, s2 = n22.distance * u2(r7 / n22.duration) || 0;
                    o2 += s2;
                    var c2 = e7;
                    return e7 += r7, a4 += s2, [
                        i11,
                        n22.distance,
                        c2,
                        e7,
                        n22.duration,
                        u2
                    ];
                }), c1(n18.track.distToIdx(a4)), d1(), n18.emit("animationStarted");
            }
        },
        stop: l1,
        targetIdx: null
    };
}
function m(n23) {
    var i12, e8, a5, o3, u3, s3, c3, f2, h2, m1, g1, b1, x1, y1, k1 = 1 / 0, w = [], M = null, T = 0;
    function C(n24) {
        _(T + n24);
    }
    function E(n25) {
        var t17 = z(T + n25).abs;
        return D(t17) ? t17 : null;
    }
    function z(n26) {
        var i13 = Math.floor(Math.abs(v(n26 / e8))), r8 = v((n26 % e8 + e8) % e8);
        r8 === e8 && (r8 = 0);
        var a6 = l(n26), o4 = c3.indexOf(t([], c3, !0).reduce(function(n27, t18) {
            return Math.abs(t18 - r8) < Math.abs(n27 - r8) ? t18 : n27;
        })), u4 = o4;
        return a6 < 0 && i13++, o4 === s3 && (u4 = 0, i13 += a6 > 0 ? 1 : -1), {
            abs: u4 + i13 * s3 * a6,
            origin: o4,
            rel: u4
        };
    }
    function I(n28, t19, i14) {
        var e9;
        if (t19 || !S()) return A(n28, i14);
        if (!D(n28)) return null;
        var r9 = z(null != i14 ? i14 : T), a7 = r9.abs, o5 = n28 - r9.rel, u5 = a7 + o5;
        e9 = A(u5);
        var c4 = A(u5 - s3 * l(o5));
        return (null !== c4 && Math.abs(c4) < Math.abs(e9) || null === e9) && (e9 = c4), v(e9);
    }
    function A(n29, t20) {
        if (null == t20 && (t20 = v(T)), !D(n29) || null === n29) return null;
        n29 = Math.round(n29);
        var i15 = z(t20), r10 = i15.abs, a8 = i15.rel, o6 = i15.origin, u6 = O(n29), d2 = (t20 % e8 + e8) % e8, l3 = c3[o6], f3 = Math.floor((n29 - (r10 - a8)) / s3) * e8;
        return v(l3 - d2 - l3 + c3[u6] + f3 + (o6 === s3 ? e8 : 0));
    }
    function D(n30) {
        return L(n30) === n30;
    }
    function L(n31) {
        return d(n31, h2, m1);
    }
    function S() {
        return o3.loop;
    }
    function O(n32) {
        return (n32 % s3 + s3) % s3;
    }
    function _(t21) {
        var i16;
        i16 = t21 - T, w.push({
            distance: i16,
            timestamp: r()
        }), w.length > 6 && (w = w.slice(-6)), T = v(t21);
        var e10 = H().abs;
        if (e10 !== M) {
            var a9 = null !== M;
            M = e10, a9 && n23.emit("slideChanged");
        }
    }
    function H(t22) {
        var r11 = t22 ? null : function() {
            if (s3) {
                var n33 = S(), t23 = n33 ? (T % e8 + e8) % e8 : T, i17 = (n33 ? T % e8 : T) - u3[0][2], r12 = 0 - (i17 < 0 && n33 ? e8 - Math.abs(i17) : i17), c5 = 0, d3 = z(T), f4 = d3.abs, p2 = d3.rel, v2 = u3[p2][2], k2 = u3.map(function(t25, i18) {
                    var a10 = r12 + c5;
                    (a10 < 0 - t25[0] || a10 > 1) && (a10 += (Math.abs(a10) > e8 - 1 && n33 ? e8 : 0) * l(-a10));
                    var u7 = i18 - p2, d4 = l(u7), h3 = u7 + f4;
                    n33 && (-1 === d4 && a10 > v2 && (h3 += s3), 1 === d4 && a10 < v2 && (h3 -= s3), null !== g1 && h3 < g1 && (a10 += e8), null !== b1 && h3 > b1 && (a10 -= e8));
                    var m2 = a10 + t25[0] + t25[1], x2 = Math.max(a10 >= 0 && m2 <= 1 ? 1 : m2 < 0 || a10 > 1 ? 0 : a10 < 0 ? Math.min(1, (t25[0] + a10) / t25[0]) : (1 - a10) / t25[0], 0);
                    return c5 += t25[0] + t25[1], {
                        abs: h3,
                        distance: o3.rtl ? -1 * a10 + 1 - t25[0] : a10,
                        portion: x2,
                        size: t25[0]
                    };
                });
                return f4 = L(f4), p2 = O(f4), {
                    abs: L(f4),
                    length: a5,
                    max: y1,
                    maxIdx: m1,
                    min: x1,
                    minIdx: h2,
                    position: T,
                    progress: n33 ? t23 / e8 : T / a5,
                    rel: p2,
                    slides: k2,
                    slidesLength: e8
                };
            }
        }();
        return i12.details = r11, n23.emit("detailsChanged"), r11;
    }
    return i12 = {
        absToRel: O,
        add: C,
        details: null,
        distToIdx: E,
        idxToDist: I,
        init: function(t26) {
            if (function() {
                if (o3 = n23.options, u3 = (o3.trackConfig || []).map(function(n34) {
                    return [
                        p(n34, "size", 1),
                        p(n34, "spacing", 0),
                        p(n34, "origin", 0)
                    ];
                }), s3 = u3.length) {
                    e8 = v(u3.reduce(function(n35, t29) {
                        return n35 + t29[0] + t29[1];
                    }, 0));
                    var t27, i20 = s3 - 1;
                    a5 = v(e8 + u3[0][2] - u3[i20][0] - u3[i20][2] - u3[i20][1]), c3 = u3.reduce(function(n36, i21) {
                        if (!n36) return [
                            0
                        ];
                        var e11 = u3[n36.length - 1], r13 = n36[n36.length - 1] + (e11[0] + e11[2]) + e11[1];
                        return r13 -= i21[2], n36[n36.length - 1] > r13 && (r13 = n36[n36.length - 1]), r13 = v(r13), n36.push(r13), (!t27 || t27 < r13) && (f2 = n36.length - 1), t27 = r13, n36;
                    }, null), 0 === a5 && (f2 = 0), c3.push(v(e8));
                }
            }(), !s3) return H(!0);
            var i19;
            !function() {
                var t30 = n23.options.range, i22 = n23.options.loop;
                g1 = h2 = i22 ? p(i22, "min", -1 / 0) : 0, b1 = m1 = i22 ? p(i22, "max", k1) : f2;
                var e12 = p(t30, "min", null), r14 = p(t30, "max", null);
                e12 && (h2 = e12), r14 && (m1 = r14), x1 = h2 === -1 / 0 ? h2 : n23.track.idxToDist(h2 || 0, !0, 0), y1 = m1 === k1 ? m1 : I(m1, !0, 0), null === r14 && (b1 = m1), p(t30, "align", !1) && m1 !== k1 && 0 === u3[O(m1)][2] && (y1 -= 1 - u3[O(m1)][0], m1 = E(y1 - T)), x1 = v(x1), y1 = v(y1);
            }(), i19 = t26, Number(i19) === i19 ? C(A(L(t26))) : H();
        },
        to: _,
        velocity: function() {
            var n37 = r(), t31 = w.reduce(function(t32, i23) {
                var e13 = i23.distance, r15 = i23.timestamp;
                return n37 - r15 > 200 || (l(e13) !== l(t32.distance) && t32.distance && (t32 = {
                    distance: 0,
                    lastTimestamp: 0,
                    time: 0
                }), t32.time && (t32.distance += e13), t32.lastTimestamp && (t32.time += r15 - t32.lastTimestamp), t32.lastTimestamp = r15), t32;
            }, {
                distance: 0,
                lastTimestamp: 0,
                time: 0
            });
            return t31.distance / t31.time || 0;
        }
    };
}
function g(n38) {
    var t33, i24, e14, r16, a11, o7, u8;
    function s4(n39) {
        return 2 * n39;
    }
    function c6(n40) {
        return d(n40, o7, u8);
    }
    function f5(n41) {
        return 1 - Math.pow(1 - n41, 3);
    }
    function p3() {
        m3();
        var t34 = "free-snap" === n38.options.mode, i25 = n38.track, o8 = i25.velocity();
        e14 = l(o8);
        var u9 = n38.track.details, d5 = [];
        if (o8 || !t34) {
            var p4 = v3(o8), h5 = p4.dist, g2 = p4.dur;
            if (g2 = s4(g2), h5 *= e14, t34) {
                var b2 = i25.idxToDist(i25.distToIdx(h5), !0);
                b2 && (h5 = b2);
            }
            d5.push({
                distance: h5,
                duration: g2,
                easing: f5
            });
            var x3 = u9.position, y2 = x3 + h5;
            if (y2 < r16 || y2 > a11) {
                var k3 = y2 < r16 ? r16 - x3 : a11 - x3, w = 0, M = o8;
                if (l(k3) === e14) {
                    var T = Math.min(Math.abs(k3) / Math.abs(h5), 1), C = function(n42) {
                        return 1 - Math.pow(1 - n42, 1 / 3);
                    }(T) * g2;
                    d5[0].earlyExit = C, M = o8 * (1 - T);
                } else d5[0].earlyExit = 0, w += k3;
                var E = v3(M, 100), z = E.dist * e14;
                n38.options.rubberband && (d5.push({
                    distance: z,
                    duration: s4(E.dur),
                    easing: f5
                }), d5.push({
                    distance: -z + w,
                    duration: 500,
                    easing: f5
                }));
            }
            n38.animator.start(d5);
        } else n38.moveToIdx(c6(u9.abs), !0, {
            duration: 500,
            easing: function(n43) {
                return 1 + --n43 * n43 * n43 * n43 * n43;
            }
        });
    }
    function v3(n44, t35) {
        void 0 === t35 && (t35 = 1e3);
        var i26 = 147e-9 + (n44 = Math.abs(n44)) / t35;
        return {
            dist: Math.pow(n44, 2) / i26,
            dur: n44 / i26
        };
    }
    function h4() {
        var t36 = n38.track.details;
        t36 && (r16 = t36.min, a11 = t36.max, o7 = t36.minIdx, u8 = t36.maxIdx);
    }
    function m3() {
        n38.animator.stop();
    }
    n38.on("updated", h4), n38.on("optionsChanged", h4), n38.on("created", h4), n38.on("dragStarted", function() {
        m3(), t33 = i24 = n38.track.details.abs;
    }), n38.on("dragEnded", function() {
        var e15 = n38.options.mode;
        "snap" === e15 && function() {
            var e16 = n38.track, o9 = n38.track.details, u10 = o9.position, s5 = l(e16.velocity());
            (u10 > a11 || u10 < r16) && (s5 = 0);
            var d6 = t33 + s5;
            0 === o9.slides[e16.absToRel(d6)].portion && (d6 -= s5), t33 !== i24 && (d6 = i24), l(e16.idxToDist(d6, !0)) !== s5 && (d6 += s5), d6 = c6(d6);
            var f6 = e16.idxToDist(d6, !0);
            n38.animator.start([
                {
                    distance: f6,
                    duration: 500,
                    easing: function(n45) {
                        return 1 + --n45 * n45 * n45 * n45 * n45;
                    }
                }
            ]);
        }(), "free" !== e15 && "free-snap" !== e15 || p3();
    }), n38.on("dragged", function() {
        i24 = n38.track.details.abs;
    });
}
function b(n46) {
    var t37, i27, e17, r17, f7, p5, v4, h6, m4, g3, b3, x4, y3, k4, w, M, T, C, E = c();
    function z(o10) {
        if (p5 && h6 === o10.id) {
            var c7 = L(o10);
            if (m4) {
                if (!D(o10)) return A(o10);
                g3 = c7, m4 = !1, n46.emit("dragChecked");
            }
            if (M) return g3 = c7;
            u(o10);
            var y4 = function(t38) {
                if (T === -1 / 0 && C === 1 / 0) return t38;
                var e18 = n46.track.details, a12 = e18.length, o11 = e18.position, u11 = d(t38, T - o11, C - o11);
                if (0 === a12) return 0;
                if (!n46.options.rubberband) return u11;
                if (o11 <= C && o11 >= T) return t38;
                if (o11 < T && i27 > 0 || o11 > C && i27 < 0) return t38;
                var s6 = (o11 < T ? o11 - T : o11 - C) / a12, c8 = r17 * a12, l4 = Math.abs(s6 * c8), p6 = Math.max(0, 1 - l4 / f7 * 2);
                return p6 * p6 * t38;
            }(v4(g3 - c7) / r17 * e17);
            i27 = l(y4);
            var k5 = n46.track.details.position;
            (k5 > T && k5 < C || k5 === T && i27 > 0 || k5 === C && i27 < 0) && s(o10), b3 += y4, !x4 && Math.abs(b3 * r17) > 5 && (x4 = !0, a(t37, "moves", "")), n46.track.add(y4), g3 = c7, n46.emit("dragged");
        }
    }
    function I(t39) {
        !p5 && n46.track.details && n46.track.details.length && (x4 = !1, b3 = 0, p5 = !0, m4 = !0, h6 = t39.id, D(t39), g3 = L(t39), n46.emit("dragStarted"));
    }
    function A(i28) {
        p5 && h6 === i28.idChanged && (a(t37, "moves", null), p5 = !1, n46.emit("dragEnded"));
    }
    function D(n47) {
        var t40 = S(), i29 = t40 ? n47.y : n47.x, e19 = t40 ? n47.x : n47.y, r18 = void 0 !== y3 && void 0 !== k4 && Math.abs(k4 - e19) <= Math.abs(y3 - i29);
        return y3 = i29, k4 = e19, r18;
    }
    function L(n48) {
        return S() ? n48.y : n48.x;
    }
    function S() {
        return n46.options.vertical;
    }
    function O() {
        r17 = n46.size, f7 = S() ? window.innerHeight : window.innerWidth;
        var t41 = n46.track.details;
        t41 && (T = t41.min, C = t41.max);
    }
    function _() {
        if (E.purge(), n46.options.drag && !n46.options.disabled) {
            var i30;
            i30 = n46.options.dragSpeed || 1, v4 = "function" == typeof i30 ? i30 : function(n49) {
                return n49 * i30;
            }, e17 = n46.options.rtl ? -1 : 1, O(), t37 = n46.container, function() {
                var n50 = "data-keen-slider-clickable";
                o("[".concat(n50, "]:not([").concat(n50, "=false])"), t37).map(function(n51) {
                    E.add(n51, "mousedown", s), E.add(n51, "touchstart", s);
                });
            }(), E.add(t37, "dragstart", function(n52) {
                u(n52);
            }), E.input(t37, "ksDragStart", I), E.input(t37, "ksDrag", z), E.input(t37, "ksDragEnd", A), E.input(t37, "mousedown", I), E.input(t37, "mousemove", z), E.input(t37, "mouseleave", A), E.input(t37, "mouseup", A), E.input(t37, "touchstart", I, {
                passive: !0
            }), E.input(t37, "touchmove", z, {
                passive: !1
            }), E.input(t37, "touchend", A), E.input(t37, "touchcancel", A), E.add(window, "wheel", function(n53) {
                p5 && u(n53);
            });
            var r19 = "data-keen-slider-scrollable";
            o("[".concat(r19, "]:not([").concat(r19, "=false])"), n46.container).map(function(n54) {
                return function(n55) {
                    var t42;
                    E.input(n55, "touchstart", function(n56) {
                        t42 = L(n56), M = !0, w = !0;
                    }, {
                        passive: !0
                    }), E.input(n55, "touchmove", function(i31) {
                        var e20 = S(), r20 = e20 ? n55.scrollHeight - n55.clientHeight : n55.scrollWidth - n55.clientWidth, a13 = t42 - L(i31), o12 = e20 ? n55.scrollTop : n55.scrollLeft, s7 = e20 && "scroll" === n55.style.overflowY || !e20 && "scroll" === n55.style.overflowX;
                        if (t42 = L(i31), (a13 < 0 && o12 > 0 || a13 > 0 && o12 < r20) && w && s7) return M = !0;
                        w = !1, u(i31), M = !1;
                    }), E.input(n55, "touchend", function() {
                        M = !1;
                    });
                }(n54);
            });
        }
    }
    n46.on("updated", O), n46.on("optionsChanged", _), n46.on("created", _), n46.on("destroyed", E.purge);
}
function x(n57) {
    var t43, i32, e21 = null;
    function r21(t44, i33, e22) {
        n57.animator.active ? o13(t44, i33, e22) : requestAnimationFrame(function() {
            return o13(t44, i33, e22);
        });
    }
    function a14() {
        r21(!1, !1, i32);
    }
    function o13(i34, r22, a15) {
        var o14 = 0, u13 = n57.size, d8 = n57.track.details;
        if (d8 && t43) {
            var l6 = d8.slides;
            t43.forEach(function(n58, t45) {
                if (i34) !e21 && r22 && s8(n58, null, a15), c9(n58, null, a15);
                else {
                    if (!l6[t45]) return;
                    var d9 = l6[t45].size * u13;
                    !e21 && r22 && s8(n58, d9, a15), c9(n58, l6[t45].distance * u13 - o14, a15), o14 += d9;
                }
            });
        }
    }
    function u12(t46) {
        return "performance" === n57.options.renderMode ? Math.round(t46) : t46;
    }
    function s8(n59, t47, i35) {
        var e23 = i35 ? "height" : "width";
        null !== t47 && (t47 = u12(t47) + "px"), n59.style["min-" + e23] = t47, n59.style["max-" + e23] = t47;
    }
    function c9(n60, t48, i36) {
        if (null !== t48) {
            t48 = u12(t48);
            var e24 = i36 ? t48 : 0;
            t48 = "translate3d(".concat(i36 ? 0 : t48, "px, ").concat(e24, "px, 0)");
        }
        n60.style.transform = t48, n60.style["-webkit-transform"] = t48;
    }
    function d7() {
        t43 && (o13(!0, !0, i32), t43 = null), n57.on("detailsChanged", a14, !0);
    }
    function l5() {
        r21(!1, !0, i32);
    }
    function f8() {
        d7(), i32 = n57.options.vertical, n57.options.disabled || "custom" === n57.options.renderMode || (e21 = "auto" === p(n57.options.slides, "perView", null), n57.on("detailsChanged", a14), (t43 = n57.slides).length && l5());
    }
    n57.on("created", f8), n57.on("optionsChanged", f8), n57.on("beforeOptionsChanged", function() {
        d7();
    }), n57.on("updated", l5), n57.on("destroyed", d7);
}
function y(t49, i37) {
    return function(e25) {
        var r23, u14, s9, d10, l7, v5, h7 = c();
        function m5(n61) {
            var t50;
            a(e25.container, "reverse", "rtl" !== (t50 = e25.container, window.getComputedStyle(t50, null).getPropertyValue("direction")) || n61 ? null : ""), a(e25.container, "v", e25.options.vertical && !n61 ? "" : null), a(e25.container, "disabled", e25.options.disabled && !n61 ? "" : null);
        }
        function g4() {
            b4() && M();
        }
        function b4() {
            var t51 = null;
            if (d10.forEach(function(n62) {
                n62.matches && (t51 = n62.__media);
            }), t51 === r23) return !1;
            r23 || e25.emit("beforeOptionsChanged"), r23 = t51;
            var i38 = t51 ? s9.breakpoints[t51] : s9;
            return e25.options = n(n({}, s9), i38), m5(), I(), A(), C(), !0;
        }
        function x5(n63) {
            var t52 = f(n63);
            return (e25.options.vertical ? t52.height : t52.width) / e25.size || 1;
        }
        function y5() {
            return e25.options.trackConfig.length;
        }
        function k6(t53) {
            for(var a16 in r23 = !1, s9 = n(n({}, i37), t53), h7.purge(), u14 = e25.size, d10 = [], s9.breakpoints || []){
                var o15 = window.matchMedia(a16);
                o15.__media = a16, d10.push(o15), h7.add(o15, "change", g4);
            }
            h7.add(window, "orientationchange", z), h7.add(window, "resize", E), b4();
        }
        function w(n64) {
            e25.animator.stop();
            var t54 = e25.track.details;
            e25.track.init(null != n64 ? n64 : t54 ? t54.abs : 0);
        }
        function M(n65) {
            w(n65), e25.emit("optionsChanged");
        }
        function T(n66, t55) {
            if (n66) return k6(n66), void M(t55);
            I(), A();
            var i39 = y5();
            C(), y5() !== i39 ? M(t55) : w(t55), e25.emit("updated");
        }
        function C() {
            var n67 = e25.options.slides;
            if ("function" == typeof n67) return e25.options.trackConfig = n67(e25.size, e25.slides);
            for(var t56 = e25.slides, i40 = t56.length, r24 = "number" == typeof n67 ? n67 : p(n67, "number", i40, !0), a17 = [], o16 = p(n67, "perView", 1, !0), u15 = p(n67, "spacing", 0, !0) / e25.size || 0, s10 = "auto" === o16 ? u15 : u15 / o16, c10 = p(n67, "origin", "auto"), d11 = 0, l8 = 0; l8 < r24; l8++){
                var f9 = "auto" === o16 ? x5(t56[l8]) : 1 / o16 - u15 + s10, v6 = "center" === c10 ? .5 - f9 / 2 : "auto" === c10 ? 0 : c10;
                a17.push({
                    origin: v6,
                    size: f9,
                    spacing: u15
                }), d11 += f9;
            }
            if (d11 += u15 * (r24 - 1), "auto" === c10 && !e25.options.loop && 1 !== o16) {
                var h8 = 0;
                a17.map(function(n68) {
                    var t57 = d11 - h8;
                    return h8 += n68.size + u15, t57 >= 1 || (n68.origin = 1 - t57 - (d11 > 1 ? 0 : 1 - d11)), n68;
                });
            }
            e25.options.trackConfig = a17;
        }
        function E() {
            I();
            var n69 = e25.size;
            e25.options.disabled || n69 === u14 || (u14 = n69, T());
        }
        function z() {
            E(), setTimeout(E, 500), setTimeout(E, 2e3);
        }
        function I() {
            var n70 = f(e25.container);
            e25.size = (e25.options.vertical ? n70.height : n70.width) || 1;
        }
        function A() {
            e25.slides = o(e25.options.selector, e25.container);
        }
        e25.container = (v5 = o(t49, l7 || document)).length ? v5[0] : null, e25.destroy = function() {
            h7.purge(), e25.emit("destroyed"), m5(!0);
        }, e25.prev = function() {
            e25.moveToIdx(e25.track.details.abs - 1, !0);
        }, e25.next = function() {
            e25.moveToIdx(e25.track.details.abs + 1, !0);
        }, e25.update = T, k6(e25.options);
    };
}
var k = function(n71, i41, e26) {
    try {
        return function(n72, t58) {
            var i42, e27 = {};
            return i42 = {
                emit: function(n73) {
                    e27[n73] && e27[n73].forEach(function(n74) {
                        n74(i42);
                    });
                    var t59 = i42.options && i42.options[n73];
                    t59 && t59(i42);
                },
                moveToIdx: function(n75, t60, e28) {
                    var r25 = i42.track.idxToDist(n75, t60);
                    if (r25) {
                        var a18 = i42.options.defaultAnimation;
                        i42.animator.start([
                            {
                                distance: r25,
                                duration: p(e28 || a18, "duration", 500),
                                easing: p(e28 || a18, "easing", function(n76) {
                                    return 1 + --n76 * n76 * n76 * n76 * n76;
                                })
                            }
                        ]);
                    }
                },
                on: function(n77, t61, i43) {
                    void 0 === i43 && (i43 = !1), e27[n77] || (e27[n77] = []);
                    var r26 = e27[n77].indexOf(t61);
                    r26 > -1 ? i43 && delete e27[n77][r26] : i43 || e27[n77].push(t61);
                },
                options: n72
            }, function() {
                if (i42.track = m(i42), i42.animator = h(i42), t58) for(var n78 = 0, e29 = t58; n78 < e29.length; n78++)(0, e29[n78])(i42);
                i42.track.init(i42.options.initial || 0), i42.emit("created");
            }(), i42;
        }(i41, t([
            y(n71, {
                drag: !0,
                mode: "snap",
                renderMode: "precision",
                rubberband: !0,
                selector: ".keen-slider__slide"
            }),
            x,
            b,
            g
        ], e26 || [], !0));
    } catch (n79) {
        console.error(n79);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gZbVi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function normalizeComputedStyleValue(string) {
    // "250px" --> 250
    return +string.replace(/px/, "");
}
function fixDPR(canvas) {
    var dpr = window.devicePixelRatio;
    var computedStyles = getComputedStyle(canvas);
    var width = normalizeComputedStyleValue(computedStyles.getPropertyValue("width"));
    var height = normalizeComputedStyleValue(computedStyles.getPropertyValue("height"));
    canvas.setAttribute("width", (width * dpr).toString());
    canvas.setAttribute("height", (height * dpr).toString());
}
function generateRandomNumber(min, max) {
    var fractionDigits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits);
}
function generateRandomArrayElement(arr) {
    return arr[generateRandomNumber(0, arr.length)];
}
var FREE_FALLING_OBJECT_ACCELERATION = 0.00125;
var MIN_DRAG_FORCE_COEFFICIENT = 0.0005;
var MAX_DRAG_FORCE_COEFFICIENT = 0.0009;
var ROTATION_SLOWDOWN_ACCELERATION = 0.00001;
var INITIAL_SHAPE_RADIUS = 6;
var INITIAL_EMOJI_SIZE = 80;
var MIN_INITIAL_CONFETTI_SPEED = 0.9;
var MAX_INITIAL_CONFETTI_SPEED = 1.7;
var MIN_FINAL_X_CONFETTI_SPEED = 0.2;
var MAX_FINAL_X_CONFETTI_SPEED = 0.6;
var MIN_INITIAL_ROTATION_SPEED = 0.03;
var MAX_INITIAL_ROTATION_SPEED = 0.07;
var MIN_CONFETTI_ANGLE = 15;
var MAX_CONFETTI_ANGLE = 82;
var MAX_CONFETTI_POSITION_SHIFT = 150;
var SHAPE_VISIBILITY_TRESHOLD = 100;
var DEFAULT_CONFETTI_NUMBER = 250;
var DEFAULT_EMOJIS_NUMBER = 40;
var DEFAULT_CONFETTI_COLORS = [
    "#fcf403",
    "#62fc03",
    "#f4fc03",
    "#03e7fc",
    "#03fca5",
    "#a503fc",
    "#fc03ad",
    "#fc03c2"
];
function getWindowWidthCoefficient(canvasWidth) {
    var HD_SCREEN_WIDTH = 1920;
    return Math.log(canvasWidth) / Math.log(HD_SCREEN_WIDTH);
}
var ConfettiShape = /*#__PURE__*/ function() {
    function ConfettiShape1(args) {
        _classCallCheck(this, ConfettiShape1);
        var initialPosition = args.initialPosition, direction = args.direction, confettiRadius = args.confettiRadius, confettiColors = args.confettiColors, emojis = args.emojis, emojiSize = args.emojiSize, canvasWidth = args.canvasWidth;
        var randomConfettiSpeed = generateRandomNumber(MIN_INITIAL_CONFETTI_SPEED, MAX_INITIAL_CONFETTI_SPEED, 3);
        var initialSpeed = randomConfettiSpeed * getWindowWidthCoefficient(canvasWidth);
        this.confettiSpeed = {
            x: initialSpeed,
            y: initialSpeed
        };
        this.finalConfettiSpeedX = generateRandomNumber(MIN_FINAL_X_CONFETTI_SPEED, MAX_FINAL_X_CONFETTI_SPEED, 3);
        this.rotationSpeed = emojis.length ? 0.01 : generateRandomNumber(MIN_INITIAL_ROTATION_SPEED, MAX_INITIAL_ROTATION_SPEED, 3) * getWindowWidthCoefficient(canvasWidth);
        this.dragForceCoefficient = generateRandomNumber(MIN_DRAG_FORCE_COEFFICIENT, MAX_DRAG_FORCE_COEFFICIENT, 6);
        this.radius = {
            x: confettiRadius,
            y: confettiRadius
        };
        this.initialRadius = confettiRadius;
        this.rotationAngle = direction === "left" ? generateRandomNumber(0, 0.2, 3) : generateRandomNumber(-0.2, 0, 3);
        this.emojiSize = emojiSize;
        this.emojiRotationAngle = generateRandomNumber(0, 2 * Math.PI);
        this.radiusYUpdateDirection = "down";
        var angle = direction === "left" ? generateRandomNumber(MAX_CONFETTI_ANGLE, MIN_CONFETTI_ANGLE) * Math.PI / 180 : generateRandomNumber(-MIN_CONFETTI_ANGLE, -MAX_CONFETTI_ANGLE) * Math.PI / 180;
        this.absCos = Math.abs(Math.cos(angle));
        this.absSin = Math.abs(Math.sin(angle));
        var positionShift = generateRandomNumber(-MAX_CONFETTI_POSITION_SHIFT, 0);
        var shiftedInitialPosition = {
            x: initialPosition.x + (direction === "left" ? -positionShift : positionShift) * this.absCos,
            y: initialPosition.y - positionShift * this.absSin
        };
        this.currentPosition = Object.assign({}, shiftedInitialPosition);
        this.initialPosition = Object.assign({}, shiftedInitialPosition);
        this.color = emojis.length ? null : generateRandomArrayElement(confettiColors);
        this.emoji = emojis.length ? generateRandomArrayElement(emojis) : null;
        this.createdAt = new Date().getTime();
        this.direction = direction;
    }
    _createClass(ConfettiShape1, [
        {
            key: "draw",
            value: function draw(canvasContext) {
                var currentPosition = this.currentPosition, radius = this.radius, color = this.color, emoji = this.emoji, rotationAngle = this.rotationAngle, emojiRotationAngle = this.emojiRotationAngle, emojiSize = this.emojiSize;
                var dpr = window.devicePixelRatio;
                if (color) {
                    canvasContext.fillStyle = color;
                    canvasContext.beginPath();
                    canvasContext.ellipse(currentPosition.x * dpr, currentPosition.y * dpr, radius.x * dpr, radius.y * dpr, rotationAngle, 0, 2 * Math.PI);
                    canvasContext.fill();
                } else if (emoji) {
                    canvasContext.font = "".concat(emojiSize, "px serif");
                    canvasContext.save();
                    canvasContext.translate(dpr * currentPosition.x, dpr * currentPosition.y);
                    canvasContext.rotate(emojiRotationAngle);
                    canvasContext.textAlign = "center";
                    canvasContext.fillText(emoji, 0, 0);
                    canvasContext.restore();
                }
            }
        },
        {
            key: "updatePosition",
            value: function updatePosition(iterationTimeDelta, currentTime) {
                var confettiSpeed = this.confettiSpeed, dragForceCoefficient = this.dragForceCoefficient, finalConfettiSpeedX = this.finalConfettiSpeedX, radiusYUpdateDirection = this.radiusYUpdateDirection, rotationSpeed = this.rotationSpeed, createdAt = this.createdAt, direction = this.direction;
                var timeDeltaSinceCreation = currentTime - createdAt;
                if (confettiSpeed.x > finalConfettiSpeedX) this.confettiSpeed.x -= dragForceCoefficient * iterationTimeDelta;
                this.currentPosition.x += confettiSpeed.x * (direction === "left" ? -this.absCos : this.absCos) * iterationTimeDelta;
                this.currentPosition.y = this.initialPosition.y - confettiSpeed.y * this.absSin * timeDeltaSinceCreation + FREE_FALLING_OBJECT_ACCELERATION * Math.pow(timeDeltaSinceCreation, 2) / 2;
                this.rotationSpeed -= this.emoji ? 0.0001 : ROTATION_SLOWDOWN_ACCELERATION * iterationTimeDelta;
                if (this.rotationSpeed < 0) this.rotationSpeed = 0; // no need to update rotation radius for emoji
                if (this.emoji) {
                    this.emojiRotationAngle += this.rotationSpeed * iterationTimeDelta % (2 * Math.PI);
                    return;
                }
                if (radiusYUpdateDirection === "down") {
                    this.radius.y -= iterationTimeDelta * rotationSpeed;
                    if (this.radius.y <= 0) {
                        this.radius.y = 0;
                        this.radiusYUpdateDirection = "up";
                    }
                } else {
                    this.radius.y += iterationTimeDelta * rotationSpeed;
                    if (this.radius.y >= this.initialRadius) {
                        this.radius.y = this.initialRadius;
                        this.radiusYUpdateDirection = "down";
                    }
                }
            }
        },
        {
            key: "getIsVisibleOnCanvas",
            value: function getIsVisibleOnCanvas(canvasHeight) {
                return this.currentPosition.y < canvasHeight + SHAPE_VISIBILITY_TRESHOLD;
            }
        }
    ]);
    return ConfettiShape1;
}();
function createCanvas() {
    var canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "1000";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);
    return canvas;
}
function normalizeConfettiConfig(confettiConfig) {
    var _confettiConfig$confe = confettiConfig.confettiRadius, confettiRadius = _confettiConfig$confe === void 0 ? INITIAL_SHAPE_RADIUS : _confettiConfig$confe, _confettiConfig$confe2 = confettiConfig.confettiNumber, confettiNumber = _confettiConfig$confe2 === void 0 ? confettiConfig.confettiesNumber || (confettiConfig.emojis ? DEFAULT_EMOJIS_NUMBER : DEFAULT_CONFETTI_NUMBER) : _confettiConfig$confe2, _confettiConfig$confe3 = confettiConfig.confettiColors, confettiColors = _confettiConfig$confe3 === void 0 ? DEFAULT_CONFETTI_COLORS : _confettiConfig$confe3, _confettiConfig$emoji = confettiConfig.emojis, emojis = _confettiConfig$emoji === void 0 ? confettiConfig.emojies || [] : _confettiConfig$emoji, _confettiConfig$emoji2 = confettiConfig.emojiSize, emojiSize = _confettiConfig$emoji2 === void 0 ? INITIAL_EMOJI_SIZE : _confettiConfig$emoji2; // deprecate wrong plural forms, used in early releases
    if (confettiConfig.emojies) console.error("emojies argument is deprecated, please use emojis instead");
    if (confettiConfig.confettiesNumber) console.error("confettiesNumber argument is deprecated, please use confettiNumber instead");
    return {
        confettiRadius: confettiRadius,
        confettiNumber: confettiNumber,
        confettiColors: confettiColors,
        emojis: emojis,
        emojiSize: emojiSize
    };
}
var ConfettiBatch = /*#__PURE__*/ function() {
    function ConfettiBatch1(canvasContext) {
        var _this = this;
        _classCallCheck(this, ConfettiBatch1);
        this.canvasContext = canvasContext;
        this.shapes = [];
        this.promise = new Promise(function(completionCallback) {
            return _this.resolvePromise = completionCallback;
        });
    }
    _createClass(ConfettiBatch1, [
        {
            key: "getBatchCompletePromise",
            value: function getBatchCompletePromise() {
                return this.promise;
            }
        },
        {
            key: "addShapes",
            value: function addShapes() {
                var _this$shapes;
                (_this$shapes = this.shapes).push.apply(_this$shapes, arguments);
            }
        },
        {
            key: "complete",
            value: function complete() {
                var _a;
                if (this.shapes.length) return false;
                (_a = this.resolvePromise) === null || _a === void 0 || _a.call(this);
                return true;
            }
        },
        {
            key: "processShapes",
            value: function processShapes(time, canvasHeight, cleanupInvisibleShapes) {
                var _this2 = this;
                var timeDelta = time.timeDelta, currentTime = time.currentTime;
                this.shapes = this.shapes.filter(function(shape) {
                    // Render the shapes in this batch
                    shape.updatePosition(timeDelta, currentTime);
                    shape.draw(_this2.canvasContext); // Only cleanup the shapes if we're being asked to
                    if (!cleanupInvisibleShapes) return true;
                    return shape.getIsVisibleOnCanvas(canvasHeight);
                });
            }
        }
    ]);
    return ConfettiBatch1;
}();
var JSConfetti = /*#__PURE__*/ function() {
    function JSConfetti1() {
        var jsConfettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, JSConfetti1);
        this.activeConfettiBatches = [];
        this.canvas = jsConfettiConfig.canvas || createCanvas();
        this.canvasContext = this.canvas.getContext("2d");
        this.requestAnimationFrameRequested = false;
        this.lastUpdated = new Date().getTime();
        this.iterationIndex = 0;
        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
    }
    _createClass(JSConfetti1, [
        {
            key: "loop",
            value: function loop() {
                this.requestAnimationFrameRequested = false;
                fixDPR(this.canvas);
                var currentTime = new Date().getTime();
                var timeDelta = currentTime - this.lastUpdated;
                var canvasHeight = this.canvas.offsetHeight;
                var cleanupInvisibleShapes = this.iterationIndex % 10 === 0;
                this.activeConfettiBatches = this.activeConfettiBatches.filter(function(batch) {
                    batch.processShapes({
                        timeDelta: timeDelta,
                        currentTime: currentTime
                    }, canvasHeight, cleanupInvisibleShapes); // Do not remove invisible shapes on every iteration
                    if (!cleanupInvisibleShapes) return true;
                    return !batch.complete();
                });
                this.iterationIndex++;
                this.queueAnimationFrameIfNeeded(currentTime);
            }
        },
        {
            key: "queueAnimationFrameIfNeeded",
            value: function queueAnimationFrameIfNeeded(currentTime) {
                if (this.requestAnimationFrameRequested) // We already have a pended animation frame, so there is no more work
                return;
                if (this.activeConfettiBatches.length < 1) // No shapes to animate, so don't queue another frame
                return;
                this.requestAnimationFrameRequested = true; // Capture the last updated time for animation
                this.lastUpdated = currentTime || new Date().getTime();
                requestAnimationFrame(this.loop);
            }
        },
        {
            key: "addConfetti",
            value: function addConfetti() {
                var confettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var _normalizeConfettiCon = normalizeConfettiConfig(confettiConfig), confettiRadius = _normalizeConfettiCon.confettiRadius, confettiNumber = _normalizeConfettiCon.confettiNumber, confettiColors = _normalizeConfettiCon.confettiColors, emojis = _normalizeConfettiCon.emojis, emojiSize = _normalizeConfettiCon.emojiSize; // Use the bounding rect rather tahn the canvas width / height, because
                // .width / .height are unset until a layout pass has been completed. Upon
                // confetti being immediately queued on a page load, this hasn't happened so
                // the default of 300x150 will be returned, causing an improper source point
                // for the confetti animation.
                var canvasRect = this.canvas.getBoundingClientRect();
                var canvasWidth = canvasRect.width;
                var canvasHeight = canvasRect.height;
                var yPosition = canvasHeight * 5 / 7;
                var leftConfettiPosition = {
                    x: 0,
                    y: yPosition
                };
                var rightConfettiPosition = {
                    x: canvasWidth,
                    y: yPosition
                };
                var confettiGroup = new ConfettiBatch(this.canvasContext);
                for(var i = 0; i < confettiNumber / 2; i++){
                    var confettiOnTheRight = new ConfettiShape({
                        initialPosition: leftConfettiPosition,
                        direction: "right",
                        confettiRadius: confettiRadius,
                        confettiColors: confettiColors,
                        confettiNumber: confettiNumber,
                        emojis: emojis,
                        emojiSize: emojiSize,
                        canvasWidth: canvasWidth
                    });
                    var confettiOnTheLeft = new ConfettiShape({
                        initialPosition: rightConfettiPosition,
                        direction: "left",
                        confettiRadius: confettiRadius,
                        confettiColors: confettiColors,
                        confettiNumber: confettiNumber,
                        emojis: emojis,
                        emojiSize: emojiSize,
                        canvasWidth: canvasWidth
                    });
                    confettiGroup.addShapes(confettiOnTheRight, confettiOnTheLeft);
                }
                this.activeConfettiBatches.push(confettiGroup);
                this.queueAnimationFrameIfNeeded();
                return confettiGroup.getBatchCompletePromise();
            }
        }
    ]);
    return JSConfetti1;
}();
exports.default = JSConfetti;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequirefc38")

//# sourceMappingURL=index.975ef6c8.js.map
