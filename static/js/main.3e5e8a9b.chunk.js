(this["webpackJsonpport-pwa"]=this["webpackJsonpport-pwa"]||[]).push([[0],{24:function(e,n,t){"use strict";var i=t(11),o=t(26).a;n.a={theme:Object(i.b)({key:"theme",default:o})}},26:function(e,n,t){"use strict";var i=t.p+"static/media/github-icon.c64cb926.svg",o=t.p+"static/media/linkedin-icon.ca2c426b.svg",c=t.p+"static/media/codepen-icon.2f2cb152.svg",r=t.p+"static/media/external-icon.8c33c212.svg";n.a={colors:{primary:"hsl(207, 93%, 62%)",font:"hsl(0, 0%, 7%)",lightFont:"hsl(0, 0%, 70%)",border:"hsl(207, 93%, 92%)"},spacing:{tiny:"4px",xSmall:"8px",small:"12px",normal:"16px",large:"24px",xLarge:"32px",giant:"48px",xGiant:"64px",huge:"96px",xHuge:"128px",jumbo:"192px",xJumbo:"256px"},sizes:{input:"52px",borderRadius:"25px",pill:"25px",borderRadiusSmall:"15px"},device:{mobileS:"(min-width: 320px)",mobileM:"(min-width: 375px)",mobileL:"(min-width: 425px)",tablet:"(min-width: 768px)",laptop:"(min-width: 1024px)",laptopL:"(min-width: 1440px)",desktop:"(min-width: 2560px)",desktopL:"(min-width: 2560px)"},typography:{mainTitle:"600 24px Inter",subtitle:"500 18x Inter",body:"400 14px Inter",small:"500 10px Inter"},images:{githubIcon:i,linkedinIcon:o,codepenIcon:c,externalIcon:r}}},36:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),c=t(16),r=t.n(c),a=t(11),s=(t(36),t(1)),l=t(27),d=t(2),p=t(25),h=t(3);var u=function(e){return Object(h.jsx)("div",{children:"Loading..."})},b=t(24),x=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,48))})),f=Object(i.lazy)((function(){return t.e(3).then(t.t.bind(null,45,7))})),g=Object(i.lazy)((function(){return t.e(4).then(t.t.bind(null,46,7))}));var j=function(){var e=Object(a.c)(b.a.theme),n=Object(s.a)(e,1)[0];return Object(h.jsx)(l.a,{children:Object(h.jsx)(p.a,{theme:n,children:Object(h.jsx)(i.Suspense,{fallback:Object(h.jsx)(u,{}),children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/",children:Object(h.jsx)(x,{})}),Object(h.jsx)(d.a,{path:"/art",exact:!0,children:Object(h.jsx)(f,{})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(g,{})})]})})})})},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var w=function(e){e&&e instanceof Function&&t.e(6).then(t.bind(null,47)).then((function(n){var t=n.getCLS,i=n.getFID,o=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),i(e),o(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(i.Suspense,{fallback:Object(h.jsx)(u,{}),children:Object(h.jsx)(a.a,{children:Object(h.jsx)(j,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/portfolio","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):v(n,e)}))}}(),w()}},[[44,1,2]]]);
//# sourceMappingURL=main.3e5e8a9b.chunk.js.map