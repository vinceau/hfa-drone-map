(this["webpackJsonphfa-drone-map"]=this["webpackJsonphfa-drone-map"]||[]).push([[0],{17:function(e,t,n){e.exports=n(42)},18:function(e,t,n){},23:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);n(18);var a=n(0),o=n.n(a),c=n(15),r=n.n(c),s=(n(23),n(24),n(3)),i=n(5),l=n.n(i);l.a.accessToken="pk.eyJ1Ijoic3BpZGVyMjI5OCIsImEiOiJja3VzOGN1cWUwY2M5MndtZmZ1Nm0wdHZqIn0.rsbsUbg1W7V0Ev9aAXGGsA";var u=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(-70.9),c=Object(s.a)(n,2),r=c[0],i=c[1],u=Object(a.useState)(42.35),m=Object(s.a)(u,2),d=m[0],f=m[1],b=Object(a.useState)(9),v=Object(s.a)(b,2),p=v[0],j=v[1];return Object(a.useEffect)((function(){t.current||(t.current=new l.a.Map({container:e.current,style:"mapbox://styles/mapbox/streets-v11",center:[r,d],zoom:p}))})),Object(a.useEffect)((function(){t.current&&t.current.on("move",(function(){i(t.current.getCenter().lng.toFixed(4)),f(t.current.getCenter().lat.toFixed(4)),j(t.current.getZoom().toFixed(2))}))})),o.a.createElement("div",null,o.a.createElement("div",{className:"sidebar"},"Longitude: ",r," | Latitude: ",d," | Zoom: ",p),o.a.createElement("div",{ref:e,className:"map-container"}))},m=n(16);console.log("env: ","test");var d=Object(m.hot)((function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,"Hello world! ","test"),o.a.createElement(u,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.018fb1f5.chunk.js.map