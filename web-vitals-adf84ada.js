"use strict";var e,n,t,r,i,o=-1,a=function(e){addEventListener("pageshow",(function(n){n.persisted&&(o=n.timeStamp,e(n))}),!0)},c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},u=function(){var e=c();return e&&e.activationStart||0},s=function(e,n){var t=c(),r="navigate";return o>=0?r="back-forward-cache":t&&(document.prerendering||u()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},f=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},t||{})),r}}catch(e){}},d=function(e,n,t,r){var i,o;return function(a){n.value>=0&&(a||r)&&((o=n.value-(i||0))||void 0===i)&&(i=n.value,n.delta=o,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},p=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},l=function(e){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},v=function(e){var n=!1;return function(t){n||(e(t),n=!0)}},m=-1,h=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},g=function(e){"hidden"===document.visibilityState&&m>-1&&(m="visibilitychange"===e.type?e.timeStamp:0,y())},T=function(){addEventListener("visibilitychange",g,!0),addEventListener("prerenderingchange",g,!0)},y=function(){removeEventListener("visibilitychange",g,!0),removeEventListener("prerenderingchange",g,!0)},E=function(){return m<0&&(m=h(),T(),a((function(){setTimeout((function(){m=h(),T()}),0)}))),{get firstHiddenTime(){return m}}},C=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},L=[1800,3e3],x=function(e,n){n=n||{},C((function(){var t,r=E(),i=s("FCP"),o=f("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-u(),0),i.entries.push(e),t(!0)))}))}));o&&(t=d(e,i,L,n.reportAllChanges),a((function(r){i=s("FCP"),t=d(e,i,L,n.reportAllChanges),p((function(){i.value=performance.now()-r.timeStamp,t(!0)}))})))}))},w=[.1,.25],S=function(e,n){n=n||{},x(v((function(){var t,r=s("CLS",0),i=0,o=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=o[0],t=o[o.length-1];i&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(i+=e.value,o.push(e)):(i=e.value,o=[e])}})),i>r.value&&(r.value=i,r.entries=o,t())},u=f("layout-shift",c);u&&(t=d(e,r,w,n.reportAllChanges),l((function(){c(u.takeRecords()),t(!0)})),a((function(){i=0,r=s("CLS",0),t=d(e,r,w,n.reportAllChanges),p((function(){return t()}))})),setTimeout(t,0))})))},P={passive:!0,capture:!0},b=new Date,I=function(r,i){e||(e=i,n=r,t=new Date,D(removeEventListener),F())},F=function(){if(n>=0&&n<t-b){var i={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+n};r.forEach((function(e){e(i)})),r=[]}},A=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){I(e,n),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,P),removeEventListener("pointercancel",r,P)};addEventListener("pointerup",t,P),addEventListener("pointercancel",r,P)}(n,e):I(n,e)}},D=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,A,P)}))},M=[100,300],k=function(t,i){i=i||{},C((function(){var o,c=E(),u=s("FID"),p=function(e){e.startTime<c.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),o(!0))},m=function(e){e.forEach(p)},h=f("first-input",m);o=d(t,u,M,i.reportAllChanges),h&&l(v((function(){m(h.takeRecords()),h.disconnect()}))),h&&a((function(){var a;u=s("FID"),o=d(t,u,M,i.reportAllChanges),r=[],n=-1,e=null,D(addEventListener),a=p,r.push(a),F()}))}))},B=0,N=1/0,R=0,H=function(e){e.forEach((function(e){e.interactionId&&(N=Math.min(N,e.interactionId),R=Math.max(R,e.interactionId),B=R?(R-N)/7+1:0)}))},O=function(){return i?B:performance.interactionCount||0},q=function(){"interactionCount"in performance||i||(i=f("event",H,{type:"event",buffered:!0,durationThreshold:0}))},j=[200,500],_=0,z=function(){return O()-_},G=[],J={},K=function(e){var n=G[G.length-1],t=J[e.interactionId];if(t||G.length<10||e.duration>n.latency){if(t)t.entries.push(e),t.latency=Math.max(t.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};J[r.id]=r,G.push(r)}G.sort((function(e,n){return n.latency-e.latency})),G.splice(10).forEach((function(e){delete J[e.id]}))}},Q=function(e,n){n=n||{},C((function(){var t;q();var r,i=s("INP"),o=function(e){e.forEach((function(e){e.interactionId&&K(e),"first-input"===e.entryType&&!G.some((function(n){return n.entries.some((function(n){return e.duration===n.duration&&e.startTime===n.startTime}))}))&&K(e)}));var n,t=(n=Math.min(G.length-1,Math.floor(z()/50)),G[n]);t&&t.latency!==i.value&&(i.value=t.latency,i.entries=t.entries,r())},c=f("event",o,{durationThreshold:null!==(t=n.durationThreshold)&&void 0!==t?t:40});r=d(e,i,j,n.reportAllChanges),c&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&c.observe({type:"first-input",buffered:!0}),l((function(){o(c.takeRecords()),i.value<0&&z()>0&&(i.value=0,i.entries=[]),r(!0)})),a((function(){G=[],_=O(),i=s("INP"),r=d(e,i,j,n.reportAllChanges)})))}))},U=[2500,4e3],V={},W=function(e,n){n=n||{},C((function(){var t,r=E(),i=s("LCP"),o=function(e){var n=e[e.length-1];n&&n.startTime<r.firstHiddenTime&&(i.value=Math.max(n.startTime-u(),0),i.entries=[n],t())},c=f("largest-contentful-paint",o);if(c){t=d(e,i,U,n.reportAllChanges);var m=v((function(){V[i.id]||(o(c.takeRecords()),c.disconnect(),V[i.id]=!0,t(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return setTimeout(m,0)}),!0)})),l(m),a((function(r){i=s("LCP"),t=d(e,i,U,n.reportAllChanges),p((function(){i.value=performance.now()-r.timeStamp,V[i.id]=!0,t(!0)}))}))}}))},X=[800,1800],Y=function e(n){document.prerendering?C((function(){return e(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},Z=function(e,n){n=n||{};var t=s("TTFB"),r=d(e,t,X,n.reportAllChanges);Y((function(){var i=c();if(i){var o=i.responseStart;if(o<=0||o>performance.now())return;t.value=Math.max(o-u(),0),t.entries=[i],r(!0),a((function(){t=s("TTFB",0),(r=d(e,t,X,n.reportAllChanges))(!0)}))}}))};exports.CLSThresholds=w,exports.FCPThresholds=L,exports.FIDThresholds=M,exports.INPThresholds=j,exports.LCPThresholds=U,exports.TTFBThresholds=X,exports.getCLS=S,exports.getFCP=x,exports.getFID=k,exports.getINP=Q,exports.getLCP=W,exports.getTTFB=Z,exports.onCLS=S,exports.onFCP=x,exports.onFID=k,exports.onINP=Q,exports.onLCP=W,exports.onTTFB=Z;
//# sourceMappingURL=web-vitals-adf84ada.js.map
