(this["webpackJsonphfa-drone-map"]=this["webpackJsonphfa-drone-map"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=(n(10),n(2)),l=n(1),u=n.n(l);n(11);u.a.accessToken="pk.eyJ1Ijoic3BpZGVyMjI5OCIsImEiOiJja3VzOGN1cWUwY2M5MndtZmZ1Nm0wdHZqIn0.rsbsUbg1W7V0Ev9aAXGGsA";var s=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(5),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(34),s=Object(i.a)(l,2),m=s[0],d=s[1],b=Object(a.useState)(1.5),f=Object(i.a)(b,2),p=f[0],v=f[1];return Object(a.useEffect)((function(){var t=new u.a.Map({container:e.current,style:"mapbox://styles/mapbox/streets-v11",center:[o,m],zoom:p});return t.addControl(new u.a.NavigationControl,"top-right"),t.on("move",(function(){c(t.getCenter().lng.toFixed(4)),d(t.getCenter().lat.toFixed(4)),v(t.getZoom().toFixed(2))})),function(){return t.remove()}}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"sidebarStyle"},r.a.createElement("div",null,"Longitude: ",o," | Latitude: ",m," | Zoom: ",p)),r.a.createElement("div",{className:"map-container",ref:e}))};var m=function(){return r.a.createElement("div",null,r.a.createElement(s,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.d2b18994.chunk.js.map