var t=function(){return t=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},t.apply(this,arguments)};function e(t,e,i){if(i||2===arguments.length)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}function i(t){return Array.prototype.slice.call(t)}function n(t,e){var i=Math.floor(t);return i===e||i+1===e?t:e}function o(){return Date.now()}function a(t,e,i){if(e="data-keen-slider-"+e,null===i)return t.removeAttribute(e);t.setAttribute(e,i||"")}function r(t,e){return e=e||document,"function"==typeof t&&(t=t(e)),Array.isArray(t)?t:"string"==typeof t?i(e.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?i(t):[]}function s(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function u(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function c(){var t=[];return{add:function(e,i,n,o){e.addListener?e.addListener(n):e.addEventListener(i,n,o),t.push([e,i,n,o])},input:function(t,e,i,n){var o;this.add(t,e,(o=i,function(t){t.nativeEvent&&(t=t.nativeEvent);var e=t.changedTouches||[],i=t.targetTouches||[],n=t.detail&&t.detail.x?t.detail:null;return o({id:n?n.identifier?n.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:n?n.identifier?n.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",raw:t,x:n&&n.x?n.x:i[0]?i[0].screenX:n?n.x:t.pageX,y:n&&n.y?n.y:i[0]?i[0].screenY:n?n.y:t.pageY})}),n)},purge:function(){t.forEach((function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])})),t=[]}}}function d(t,e,i){return Math.min(Math.max(t,e),i)}function l(t){return(t>0?1:0)-(t<0?1:0)||+t}function f(t){var e=t.getBoundingClientRect();return{height:n(e.height,t.offsetHeight),width:n(e.width,t.offsetWidth)}}function h(t,e,i,n){var o=t&&t[e];return null==o?i:n&&"function"==typeof o?o():o}function p(t){return Math.round(1e6*t)/1e6}function v(t){var e,i,n,o,a,r,s;function u(t){return 2*t}function c(t){return d(t,r,s)}function f(t){return 1-Math.pow(1-t,3)}function h(t,e){void 0===e&&(e=1e3);var i=147e-9+(t=Math.abs(t))/e;return{dist:Math.pow(t,2)/i,dur:t/i}}function p(){var e=t.track.details;e&&(o=e.min,a=e.max,r=e.minIdx,s=e.maxIdx)}function v(){t.animator.stop()}t.on("updated",p),t.on("optionsChanged",p),t.on("created",p),t.on("dragStarted",(function(){v(),e=i=t.track.details.abs})),t.on("dragEnded",(function(){var r=t.options.mode;"snap"===r&&function(){var n=t.track,r=t.track.details,s=r.position,u=l(n.velocity());(s>a||s<o)&&(u=0);var d=e+u;0===r.slides[n.absToRel(d)].portion&&(d-=u),e!==i&&(d=i),l(n.idxToDist(d,!0))!==u&&(d+=u),d=c(d);var f=n.idxToDist(d,!0);t.animator.start([{distance:f,duration:500,easing:function(t){return 1+--t*t*t*t*t}}])}(),"free"!==r&&"free-snap"!==r||function(){v();var e="free-snap"===t.options.mode,i=t.track,r=i.velocity();n=l(r);var s,d=t.track.details,p=[];if(r||!e){var m=h(r),g=m.dist,b=m.dur;if(b=u(b),g*=n,e){var y=i.idxToDist(i.distToIdx(g),!0);y&&(g=y)}p.push({distance:g,duration:b,easing:f});var x=d.position,w=x+g;if(w<o||w>a){var k=w<o?o-x:a-x,C=0,M=r;if(l(k)===n){var S=Math.min(Math.abs(k)/Math.abs(g),1),T=(s=S,(1-Math.pow(1-s,1/3))*b);p[0].earlyExit=T,M=r*(1-S)}else p[0].earlyExit=0,C+=k;var j=h(M,100),P=j.dist*n;t.options.rubberband&&(p.push({distance:P,duration:u(j.dur),easing:f}),p.push({distance:-P+C,duration:500,easing:f}))}t.animator.start(p)}else t.moveToIdx(c(d.abs),!0,{duration:500,easing:function(t){return 1+--t*t*t*t*t}})}()})),t.on("dragged",(function(){i=t.track.details.abs}))}function m(t){var e,i,n,o,f,h,p,v,m,g,b,y,x,w,k,C,M,S,T=c();function j(r){if(h&&v===r.id){var c=z(r);if(m){if(!I(r))return A(r);g=c,m=!1,t.emit("dragChecked")}if(C)return g=c;s(r);var x=function(e){if(M===-1/0&&S===1/0)return e;var n=t.track.details,a=n.length,r=n.position,s=d(e,M-r,S-r);if(0===a)return 0;if(!t.options.rubberband)return s;if(r<=S&&r>=M)return e;if(r<M&&i>0||r>S&&i<0)return e;var u=(r<M?r-M:r-S)/a,c=o*a,l=Math.abs(u*c),h=Math.max(0,1-l/f*2);return h*h*e}(p(g-c)/o*n);i=l(x);var w=t.track.details.position;(w>M&&w<S||w===M&&i>0||w===S&&i<0)&&u(r),b+=x,!y&&Math.abs(b*o)>5&&(y=!0,a(e,"moves","")),t.track.add(x),g=c,t.emit("dragged")}}function P(e){!h&&t.track.details&&t.track.details.length&&(y=!1,b=0,h=!0,m=!0,v=e.id,I(e),g=z(e),t.emit("dragStarted"))}function A(i){h&&v===i.idChanged&&(a(e,"moves",null),h=!1,t.emit("dragEnded"))}function I(t){var e=R(),i=e?t.y:t.x,n=e?t.x:t.y,o=void 0!==x&&void 0!==w&&Math.abs(w-n)<=Math.abs(x-i);return x=i,w=n,o}function z(t){return R()?t.y:t.x}function R(){return t.options.vertical}function D(){o=t.size,f=R()?window.innerHeight:window.innerWidth;var e=t.track.details;e&&(M=e.min,S=e.max)}function E(){if(T.purge(),t.options.drag&&!t.options.disabled){var i;i=t.options.dragSpeed||1,p="function"==typeof i?i:function(t){return t*i},n=t.options.rtl?-1:1,D(),e=t.container,r("[".concat(a="data-keen-slider-clickable","]:not([").concat(a,"=false])"),e).map((function(t){T.add(t,"mousedown",u),T.add(t,"touchstart",u)})),T.add(e,"dragstart",(function(t){s(t)})),T.input(e,"ksDragStart",P),T.input(e,"ksDrag",j),T.input(e,"ksDragEnd",A),T.input(e,"mousedown",P),T.input(e,"mousemove",j),T.input(e,"mouseleave",A),T.input(e,"mouseup",A),T.input(e,"touchstart",P,{passive:!0}),T.input(e,"touchmove",j,{passive:!1}),T.input(e,"touchend",A),T.input(e,"touchcancel",A),T.add(window,"wheel",(function(t){h&&s(t)}));var o="data-keen-slider-scrollable";r("[".concat(o,"]:not([").concat(o,"=false])"),t.container).map((function(t){return e=t,T.input(e,"touchstart",(function(t){i=z(t),C=!0,k=!0}),{passive:!0}),T.input(e,"touchmove",(function(t){var n=R(),o=n?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,a=i-z(t),r=n?e.scrollTop:e.scrollLeft,u=n&&"scroll"===e.style.overflowY||!n&&"scroll"===e.style.overflowX;if(i=z(t),(a<0&&r>0||a>0&&r<o)&&k&&u)return C=!0;k=!1,s(t),C=!1})),void T.input(e,"touchend",(function(){C=!1}));var e,i}))}var a}t.on("updated",D),t.on("optionsChanged",E),t.on("created",E),t.on("destroyed",T.purge)}function g(t){var e,i,n=null;function o(e,i,n){t.animator.active?r(e,i,n):requestAnimationFrame((function(){return r(e,i,n)}))}function a(){o(!1,!1,i)}function r(i,o,a){var r=0,s=t.size,d=t.track.details;if(d&&e){var l=d.slides;e.forEach((function(t,e){if(i)!n&&o&&u(t,null,a),c(t,null,a);else{if(!l[e])return;var d=l[e].size*s;!n&&o&&u(t,d,a),c(t,l[e].distance*s-r,a),r+=d}}))}}function s(e){return"performance"===t.options.renderMode?Math.round(e):e}function u(t,e,i){var n=i?"height":"width";null!==e&&(e=s(e)+"px"),t.style["min-"+n]=e,t.style["max-"+n]=e}function c(t,e,i){if(null!==e){e=s(e);var n=i?e:0;e="translate3d(".concat(i?0:e,"px, ").concat(n,"px, 0)")}t.style.transform=e,t.style["-webkit-transform"]=e}function d(){e&&(r(!0,!0,i),e=null),t.on("detailsChanged",a,!0)}function l(){o(!1,!0,i)}function f(){d(),i=t.options.vertical,t.options.disabled||"custom"===t.options.renderMode||(n="auto"===h(t.options.slides,"perView",null),t.on("detailsChanged",a),(e=t.slides).length&&l())}t.on("created",f),t.on("optionsChanged",f),t.on("beforeOptionsChanged",(function(){d()})),t.on("updated",l),t.on("destroyed",d)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,e,i){return e&&y(t.prototype,e),i&&y(t,i),t}function w(t){return+t.replace(/px/,"")}function k(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.random()*(e-t)+t;return Math.floor(n*Math.pow(10,i))/Math.pow(10,i)}function C(t){return t[k(0,t.length)]}var M=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function S(t){return Math.log(t)/Math.log(1920)}var T=function(){function t(e){b(this,t);var i=e.initialPosition,n=e.direction,o=e.confettiRadius,a=e.confettiColors,r=e.emojis,s=e.emojiSize,u=e.canvasWidth,c=k(.9,1.7,3)*S(u);this.confettiSpeed={x:c,y:c},this.finalConfettiSpeedX=k(.2,.6,3),this.rotationSpeed=r.length?.01:k(.03,.07,3)*S(u),this.dragForceCoefficient=k(5e-4,9e-4,6),this.radius={x:o,y:o},this.initialRadius=o,this.rotationAngle="left"===n?k(0,.2,3):k(-.2,0,3),this.emojiSize=s,this.emojiRotationAngle=k(0,2*Math.PI),this.radiusYUpdateDirection="down";var d="left"===n?k(82,15)*Math.PI/180:k(-15,-82)*Math.PI/180;this.absCos=Math.abs(Math.cos(d)),this.absSin=Math.abs(Math.sin(d));var l=k(-150,0),f={x:i.x+("left"===n?-l:l)*this.absCos,y:i.y-l*this.absSin};this.currentPosition=Object.assign({},f),this.initialPosition=Object.assign({},f),this.color=r.length?null:C(a),this.emoji=r.length?C(r):null,this.createdAt=(new Date).getTime(),this.direction=n}return x(t,[{key:"draw",value:function(t){var e=this.currentPosition,i=this.radius,n=this.color,o=this.emoji,a=this.rotationAngle,r=this.emojiRotationAngle,s=this.emojiSize,u=window.devicePixelRatio;n?(t.fillStyle=n,t.beginPath(),t.ellipse(e.x*u,e.y*u,i.x*u,i.y*u,a,0,2*Math.PI),t.fill()):o&&(t.font="".concat(s,"px serif"),t.save(),t.translate(u*e.x,u*e.y),t.rotate(r),t.textAlign="center",t.fillText(o,0,0),t.restore())}},{key:"updatePosition",value:function(t,e){var i=this.confettiSpeed,n=this.dragForceCoefficient,o=this.finalConfettiSpeedX,a=this.radiusYUpdateDirection,r=this.rotationSpeed,s=this.createdAt,u=this.direction,c=e-s;i.x>o&&(this.confettiSpeed.x-=n*t),this.currentPosition.x+=i.x*("left"===u?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-i.y*this.absSin*c+.00125*Math.pow(c,2)/2,this.rotationSpeed-=this.emoji?1e-4:1e-5*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji?this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI):"down"===a?(this.radius.y-=t*r,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*r,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+100}}]),t}();function j(){var t=document.createElement("canvas");return t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.style.zIndex="1000",t.style.pointerEvents="none",document.body.appendChild(t),t}function P(t){var e=t.confettiRadius,i=void 0===e?6:e,n=t.confettiNumber,o=void 0===n?t.confettiesNumber||(t.emojis?40:250):n,a=t.confettiColors,r=void 0===a?M:a,s=t.emojis,u=void 0===s?t.emojies||[]:s,c=t.emojiSize,d=void 0===c?80:c;return t.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),t.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:i,confettiNumber:o,confettiColors:r,emojis:u,emojiSize:d}}var A=function(){function t(e){var i=this;b(this,t),this.canvasContext=e,this.shapes=[],this.promise=new Promise((function(t){return i.resolvePromise=t}))}return x(t,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return!this.shapes.length&&(null===(t=this.resolvePromise)||void 0===t||t.call(this),!0)}},{key:"processShapes",value:function(t,e,i){var n=this,o=t.timeDelta,a=t.currentTime;this.shapes=this.shapes.filter((function(t){return t.updatePosition(o,a),t.draw(n.canvasContext),!i||t.getIsVisibleOnCanvas(e)}))}}]),t}(),I=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(this,t),this.activeConfettiBatches=[],this.canvas=e.canvas||j(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=(new Date).getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return x(t,[{key:"loop",value:function(){var t,e,i,n,o;this.requestAnimationFrameRequested=!1,t=this.canvas,e=window.devicePixelRatio,i=getComputedStyle(t),n=w(i.getPropertyValue("width")),o=w(i.getPropertyValue("height")),t.setAttribute("width",(n*e).toString()),t.setAttribute("height",(o*e).toString());var a=(new Date).getTime(),r=a-this.lastUpdated,s=this.canvas.offsetHeight,u=this.iterationIndex%10==0;this.activeConfettiBatches=this.activeConfettiBatches.filter((function(t){return t.processShapes({timeDelta:r,currentTime:a},s,u),!u||!t.complete()})),this.iterationIndex++,this.queueAnimationFrameIfNeeded(a)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||(new Date).getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=P(t),i=e.confettiRadius,n=e.confettiNumber,o=e.confettiColors,a=e.emojis,r=e.emojiSize,s=this.canvas.getBoundingClientRect(),u=s.width,c=s.height,d=5*c/7,l={x:0,y:d},f={x:u,y:d},h=new A(this.canvasContext),p=0;p<n/2;p++){var v=new T({initialPosition:l,direction:"right",confettiRadius:i,confettiColors:o,confettiNumber:n,emojis:a,emojiSize:r,canvasWidth:u}),m=new T({initialPosition:f,direction:"left",confettiRadius:i,confettiColors:o,confettiNumber:n,emojis:a,emojiSize:r,canvasWidth:u});h.addShapes(v,m)}return this.activeConfettiBatches.push(h),this.queueAnimationFrameIfNeeded(),h.getBatchCompletePromise()}}]),t}();const z=new function(i,n,s){try{return u=n,b=e([(w=i,k={drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"},function(e){var i,n,o,s,u,d=c();function l(t){var i;a(e.container,"reverse","rtl"!==(i=e.container,window.getComputedStyle(i,null).getPropertyValue("direction"))||t?null:""),a(e.container,"v",e.options.vertical&&!t?"":null),a(e.container,"disabled",e.options.disabled&&!t?"":null)}function p(){v()&&y()}function v(){var n=null;if(s.forEach((function(t){t.matches&&(n=t.__media)})),n===i)return!1;i||e.emit("beforeOptionsChanged"),i=n;var a=n?o.breakpoints[n]:o;return e.options=t(t({},o),a),l(),T(),j(),C(),!0}function m(){return e.options.trackConfig.length}function g(a){for(var r in i=!1,o=t(t({},k),a),d.purge(),n=e.size,s=[],o.breakpoints||[]){var u=window.matchMedia(r);u.__media=r,s.push(u),d.add(u,"change",p)}d.add(window,"orientationchange",S),d.add(window,"resize",M),v()}function b(t){e.animator.stop();var i=e.track.details;e.track.init(null!=t?t:i?i.abs:0)}function y(t){b(t),e.emit("optionsChanged")}function x(t,i){if(t)return g(t),void y(i);T(),j();var n=m();C(),m()!==n?y(i):b(i),e.emit("updated")}function C(){var t,i,n=e.options.slides;if("function"==typeof n)return e.options.trackConfig=n(e.size,e.slides);for(var o=e.slides,a=o.length,r="number"==typeof n?n:h(n,"number",a,!0),s=[],u=h(n,"perView",1,!0),c=h(n,"spacing",0,!0)/e.size||0,d="auto"===u?c:c/u,l=h(n,"origin","auto"),p=0,v=0;v<r;v++){var m="auto"===u?(t=o[v],i=void 0,i=f(t),(e.options.vertical?i.height:i.width)/e.size||1):1/u-c+d,g="center"===l?.5-m/2:"auto"===l?0:l;s.push({origin:g,size:m,spacing:c}),p+=m}if(p+=c*(r-1),"auto"===l&&!e.options.loop&&1!==u){var b=0;s.map((function(t){var e=p-b;return b+=t.size+c,e>=1||(t.origin=1-e-(p>1?0:1-p)),t}))}e.options.trackConfig=s}function M(){T();var t=e.size;e.options.disabled||t===n||(n=t,x())}function S(){M(),setTimeout(M,500),setTimeout(M,2e3)}function T(){var t=f(e.container);e.size=(e.options.vertical?t.height:t.width)||1}function j(){e.slides=r(e.options.selector,e.container)}e.container=(u=r(w,document)).length?u[0]:null,e.destroy=function(){d.purge(),e.emit("destroyed"),l(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=x,g(e.options)}),g,m,v],s||[],!0),x={},y={emit:function(t){x[t]&&x[t].forEach((function(t){t(y)}));var e=y.options&&y.options[t];e&&e(y)},moveToIdx:function(t,e,i){var n=y.track.idxToDist(t,e);if(n){var o=y.options.defaultAnimation;y.animator.start([{distance:n,duration:h(i||o,"duration",500),easing:h(i||o,"easing",(function(t){return 1+--t*t*t*t*t}))}])}},on:function(t,e,i){void 0===i&&(i=!1),x[t]||(x[t]=[]);var n=x[t].indexOf(e);n>-1?i&&delete x[t][n]:i||x[t].push(e)},options:u},function(){if(y.track=function(t){var i,n,a,r,s,u,c,f,v,m,g,b,y,x,w=1/0,k=[],C=null,M=0;function S(t){E(M+t)}function T(t){var e=j(M+t).abs;return I(e)?e:null}function j(t){var i=Math.floor(Math.abs(p(t/n))),o=p((t%n+n)%n);o===n&&(o=0);var a=l(t),r=c.indexOf(e([],c,!0).reduce((function(t,e){return Math.abs(e-o)<Math.abs(t-o)?e:t}))),s=r;return a<0&&i++,r===u&&(s=0,i+=a>0?1:-1),{abs:s+i*u*a,origin:r,rel:s}}function P(t,e,i){var n;if(e||!R())return A(t,i);if(!I(t))return null;var o=j(null!=i?i:M),a=o.abs,r=t-o.rel,s=a+r;n=A(s);var c=A(s-u*l(r));return(null!==c&&Math.abs(c)<Math.abs(n)||null===n)&&(n=c),p(n)}function A(t,e){if(null==e&&(e=p(M)),!I(t)||null===t)return null;t=Math.round(t);var i=j(e),o=i.abs,a=i.rel,r=i.origin,s=D(t),d=(e%n+n)%n,l=c[r],f=Math.floor((t-(o-a))/u)*n;return p(l-d-l+c[s]+f+(r===u?n:0))}function I(t){return z(t)===t}function z(t){return d(t,v,m)}function R(){return r.loop}function D(t){return(t%u+u)%u}function E(e){var i;i=e-M,k.push({distance:i,timestamp:o()}),k.length>6&&(k=k.slice(-6)),M=p(e);var n=L().abs;if(n!==C){var a=null!==C;C=n,a&&t.emit("slideChanged")}}function L(e){var o=e?null:function(){if(u){var t=R(),e=t?(M%n+n)%n:M,i=(t?M%n:M)-s[0][2],o=0-(i<0&&t?n-Math.abs(i):i),c=0,d=j(M),f=d.abs,h=d.rel,p=s[h][2],w=s.map((function(e,i){var a=o+c;(a<0-e[0]||a>1)&&(a+=(Math.abs(a)>n-1&&t?n:0)*l(-a));var s=i-h,d=l(s),v=s+f;t&&(-1===d&&a>p&&(v+=u),1===d&&a<p&&(v-=u),null!==g&&v<g&&(a+=n),null!==b&&v>b&&(a-=n));var m=a+e[0]+e[1],y=Math.max(a>=0&&m<=1?1:m<0||a>1?0:a<0?Math.min(1,(e[0]+a)/e[0]):(1-a)/e[0],0);return c+=e[0]+e[1],{abs:v,distance:r.rtl?-1*a+1-e[0]:a,portion:y,size:e[0]}}));return f=z(f),h=D(f),{abs:z(f),length:a,max:x,maxIdx:m,min:y,minIdx:v,position:M,progress:t?e/n:M/a,rel:h,slides:w,slidesLength:n}}}();return i.details=o,t.emit("detailsChanged"),o}return i={absToRel:D,add:S,details:null,distToIdx:T,idxToDist:P,init:function(e){if(function(){if(r=t.options,s=(r.trackConfig||[]).map((function(t){return[h(t,"size",1),h(t,"spacing",0),h(t,"origin",0)]})),u=s.length){n=p(s.reduce((function(t,e){return t+e[0]+e[1]}),0));var e,i=u-1;a=p(n+s[0][2]-s[i][0]-s[i][2]-s[i][1]),c=s.reduce((function(t,i){if(!t)return[0];var n=s[t.length-1],o=t[t.length-1]+(n[0]+n[2])+n[1];return o-=i[2],t[t.length-1]>o&&(o=t[t.length-1]),o=p(o),t.push(o),(!e||e<o)&&(f=t.length-1),e=o,t}),null),0===a&&(f=0),c.push(p(n))}}(),!u)return L(!0);var i;!function(){var e=t.options.range,i=t.options.loop;g=v=i?h(i,"min",-1/0):0,b=m=i?h(i,"max",w):f;var n=h(e,"min",null),o=h(e,"max",null);n&&(v=n),o&&(m=o),y=v===-1/0?v:t.track.idxToDist(v||0,!0,0),x=m===w?m:P(m,!0,0),null===o&&(b=m),h(e,"align",!1)&&m!==w&&0===s[D(m)][2]&&(x-=1-s[D(m)][0],m=T(x-M)),y=p(y),x=p(x)}(),i=e,Number(i)===i?S(A(z(e))):L()},to:E,velocity:function(){var t=o(),e=k.reduce((function(e,i){var n=i.distance,o=i.timestamp;return t-o>200||(l(n)!==l(e.distance)&&e.distance&&(e={distance:0,lastTimestamp:0,time:0}),e.time&&(e.distance+=n),e.lastTimestamp&&(e.time+=o-e.lastTimestamp),e.lastTimestamp=o),e}),{distance:0,lastTimestamp:0,time:0});return e.distance/e.time||0}}}(y),y.animator=function(t){var e,i,n,o,a,r;function s(e){r||(r=e),u(!0);var a=e-r;a>n&&(a=n);var l=o[i];if(l[3]<a)return i++,s(e);var f=l[2],h=l[4],p=l[0],v=l[1]*(0,l[5])(0===h?1:(a-f)/h);if(v&&t.track.to(p+v),a<n)return d();r=null,u(!1),c(null),t.emit("animationEnded")}function u(t){e.active=t}function c(t){e.targetIdx=t}function d(){var t;t=s,a=window.requestAnimationFrame(t)}function l(){var e;e=a,window.cancelAnimationFrame(e),u(!1),c(null),r&&t.emit("animationStopped"),r=null}return e={active:!1,start:function(e){if(l(),t.track.details){var a=0,r=t.track.details.position;i=0,n=0,o=e.map((function(t){var e,i=r,o=null!==(e=t.earlyExit)&&void 0!==e?e:t.duration,s=t.easing,u=t.distance*s(o/t.duration)||0;r+=u;var c=n;return n+=o,a+=u,[i,t.distance,c,n,t.duration,s]})),c(t.track.distToIdx(a)),d(),t.emit("animationStarted")}},stop:l,targetIdx:null}}(y),b)for(var t=0,i=b;t<i.length;t++)(0,i[t])(y);y.track.init(y.options.initial||0),y.emit("created")}(),y}catch(t){console.error(t)}var u,b,y,x,w,k}(".keen-slider",{created:()=>{console.log("created")}},[]),R=new I;z.on("slideChanged",(()=>{var t=z.track.details.rel;const e=document.querySelectorAll(".bullet");e.forEach(((e,i,n)=>{i===t?(e.classList.add("bullet--active"),e.classList.add("Bgc(#fff)::a"),e.classList.remove("Bgc($c-bg-black)::a"),e.classList.remove("Op(.2)")):e.classList.contains("bullet--active")&&(e.classList.add("Bgc($c-bg-black)::a"),e.classList.add("Op(.2)"),e.classList.remove("Bgc(#fff)::a"),e.classList.remove("bullet--active"))})),t===e.length-1&&setTimeout((()=>{R.addConfetti({emojis:["💖","🤍","💍","👰‍♀️","💐"],emojiSize:100,confettiNumber:30}),R.addConfetti({confettiColors:["#ff0a54","#ff477e","#ff7096","#ff85a1","#fbb1bd","#f9bec7"],confettiRadius:10,confettiNumber:70})}),500)}));
//# sourceMappingURL=index.22e99e08.js.map
