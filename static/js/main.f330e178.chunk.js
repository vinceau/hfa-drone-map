(this["webpackJsonphfa-drone-map"]=this["webpackJsonphfa-drone-map"]||[]).push([[0],{103:function(e,n,t){},139:function(e,n,t){"use strict";t.r(n);t(102),t(103);var r=t(92),a=t(169),o=t(58),i=t(0),c=t.n(i),s=t(25),l=t.n(s),u=t(9),d=t(83),f=t.n(d),p=t(84),b=t.n(p),j=t(170),g=t(1),v=function(e){var n=e.boatId,t=e.waypoints,r=e.disabled,a=void 0!==r&&r,o=e.filename,i=void 0===o?"data.csv":o,c=e.contentType,s=void 0===c?"data:text/csv;charset=utf-8,":c;return Object(g.jsx)(j.a,{disabled:a,onClick:function(){var e="boatId,waypointNumber,latitude,longitude\n";!function(e,n,t){if(navigator.msSaveBlob){var r=new Blob([e],{type:t});navigator.msSaveBlob(r,n)}else{var a=document.createElement("a");a.style.display="none",a.setAttribute("href",t+encodeURIComponent(e)),a.setAttribute("download",n),document.body.appendChild(a),a.click(),document.body.removeChild(a)}}(e+=t.map((function(e,t){return x(n,t,e)})).join("\n"),i,s)},children:Object(g.jsx)(b.a,{color:"primary"})})},x=function(e,n,t){return"".concat(e,",").concat(n+1,",").concat(t.lat.toFixed(6),",").concat(t.long.toFixed(6))},h=function(e){var n=e.waypoints,t=c.a.useState(""),r=Object(u.a)(t,2),a=r[0],o=r[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{placeholder:"Boat ID",value:a,onChange:function(e){return o(e.target.value)}}),Object(g.jsx)(v,{disabled:!a||0===n.length,boatId:a,waypoints:n})]})},m=function(e){var n=e.deleteSignal,t=e.sendDeleteSignal,r=e.setWaypoints;return Object(g.jsx)(j.a,{onClick:function(){window.confirm("Are you sure you wish to delete these waypoints?")&&(r([]),t(!n))},variant:"contained",color:"error",children:"Delete"})},y=t(71),O=t.n(y),C=t(85),S=t(89),w=t.n(S),k=t(88),I=t.n(k),L=t(164),_=function(e){var n=1;return/[SW]$/.test(e)&&(n=-1),n*parseFloat(e.substring(0,e.length-1))},E=t(87),F=t.n(E),B=t(176),N=t(177),D=t(86),M=t.n(D),W=function(e){var n=e.drone;return Object(g.jsx)(B.a,{variant:"outlined",children:Object(g.jsx)(N.a,{children:Object(g.jsxs)("div",{className:M.a.droneId,children:[Object(g.jsx)("div",{children:n.id}),Object(g.jsx)("div",{children:Object(g.jsx)(F.a,{onClick:function(){return console.log([n.long,n.lat])}})})]})})})},A=function(e){var n=e.drones;return n?n.map((function(e){return Object(g.jsx)(W,{drone:e},e.id)})):null},R=t(46),T=t.n(R),J=function(e){var n=c.a.useState("M,UL997,37.821608S,145.313996E,470668.68,3,3.4\nP,UL997,12.68,26.3,3.4,41.3,0.0"),t=Object(u.a)(n,2),r=t[0],a=t[1],o=c.a.useState(""),i=Object(u.a)(o,2),s=i[0],l=i[1],d=c.a.useRef(null),f=function(){var e=Object(C.a)(O.a.mark((function e(n){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.target.files,console.log(t),e.next=4,Promise.all(Array.from(t).map((function(e){return n=e,new Promise((function(e,t){var r=new FileReader;r.onabort=function(){return t("file reading was aborted")},r.onerror=function(){return t("file reading has failed")},r.readAsText?(r.addEventListener("load",(function(){var n=null!=this.resultString?this.resultString:this.result;e(n)}),!1),r.readAsText(n)):t("Failed to read file")}));var n})));case 4:r=e.sent,a(r.join("\n"));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:T.a.fileInputContainer,children:[Object(g.jsx)("input",{type:"file",id:"fileInput",name:"fileInput",ref:d,multiple:!0,onChange:f,className:T.a.uploadInput}),Object(g.jsxs)("div",{className:T.a.buttonBar,children:[Object(g.jsx)(j.a,{onClick:function(){d.current&&d.current.click()},endIcon:Object(g.jsx)(I.a,{}),variant:"contained",color:"secondary",children:"Upload CSV"}),Object(g.jsx)(j.a,{onClick:function(){var n=function(e){var n={};return e.split("\n").forEach((function(e){var t=e.split(",");if(0===t.length||7!==t.length)return null;console.log(t),console.log("chunks length: ",t.length);var r=t[0],a=t[1];if(n[a]||(n[a]={id:a}),"P"===r){var o=Math.round(t[2]/13.61*100,2)+"% ("+t[2]+"/13.61V)";n[a].batteryLvl=o}else if("M"===r){var i=_(t[2]),c=_(t[3]),s=t[4]+" NM/H",l=t[5],u=t[6];n[a].lat=i,n[a].long=c,n[a].avgSpeed=s,n[a].avgBearing=l,n[a].avgCurrent=u}})),Object.values(n)}(r);console.log(n),l(n),e.onSubmit&&e.onSubmit(n)},variant:"contained",color:"primary",endIcon:Object(g.jsx)(w.a,{}),children:"Submit"})]}),Object(g.jsx)(L.a,{className:T.a.textarea,minRows:20,onChange:function(e){return a(e.target.value)},value:r}),Object(g.jsx)(A,{drones:s})]})},P=t(24),U=t(13),V=t.n(U),G={"circle-stroke-width":2,"circle-radius":8,"circle-blur":.15,"circle-color":"#3770C6","circle-stroke-color":"white"},Y=function(e){var n=c.a.useContext(P.c);return c.a.useEffect((function(){if(n){var e=new V.a.Popup({closeButton:!1,closeOnClick:!1});n.on("mouseenter","position-marker",(function(t){n.getCanvas().style.cursor="pointer";for(var r=t.features[0].geometry.coordinates.slice(),a=t.features[0].properties,o="";Math.abs(t.lngLat.lng-r[0])>180;)r[0]+=t.lngLat.lng>r[0]?360:-360;for(var i in e.setLngLat(r).addTo(n),a){var c=i+": ";"DroneID"===i?o+=c="<strong>"+a[i]+"</strong><br>":"id"!==i&&(o+=c+a[i]+"<br>",console.log(a[i]),e.setHTML(o))}})),n.on("click","position-marker",(function(e){n.flyTo({center:e.features[0].geometry.coordinates})})),n.on("mouseenter","position-marker",(function(){n.getCanvas().style.cursor="pointer"})),n.on("mouseleave","position-marker",(function(){n.getCanvas().style.cursor="",e.remove()}))}}),[n]),Object(g.jsx)(P.b,{type:"circle",id:"position-marker",paint:G,children:e.droneLocations.map((function(e,n){return Object(g.jsx)(P.a,{coordinates:[e.long,e.lat],properties:{DroneID:e.id,Longitude:e.long,Latitude:e.lat,"Battery Level":e.batteryLvl,"Average Speed":e.avgSpeed,"Average Bearing":e.avgBearing,"Average Current":e.avgCurrent}},n)}))})},Z=function(e){var n=c.a.useContext(P.c),t=e.initialWaypoints,r=e.deleteSignal,a=e.disabled,o=Object(i.useRef)(null),s=Object(i.useRef)(null),l=Object(i.useRef)(null),d=function(n){var t=n.map((function(e){var n=Object(u.a)(e,2);return{long:n[0],lat:n[1]}}));e.onChange&&e.onChange(t)};function f(e,n){s.current.features.splice(e,0,function(e){return{type:"Feature",geometry:{type:"Point",coordinates:e},properties:{description:"<p>"+JSON.stringify(e)+"</p>",tag:JSON.stringify(e)}}}(n)),l.current.features[0].geometry.coordinates.splice(e,0,n),p(),d(l.current.features[0].geometry.coordinates)}function p(){n.getSource("lines").setData(l.current),n.getSource("points").setData(s.current)}function b(e){var t,r=[e.point.x,e.point.y],a=r[0],o=r[1],i=n.queryRenderedFeatures([[a-5,o-5],[a+5,o+5]],{layers:["points"]});return i.length>0?(t=i[0].properties.tag,s.current.features.findIndex((function(e){return e.properties.tag===t}))):null}function j(e){if(o.current.a&&o.current.a.index===e)return function(e){s.current.features.splice(e,1),l.current.features[0].geometry.coordinates.splice(e,1),p(),d(l.current.features[0].geometry.coordinates)}(e),void v();o.current.b&&o.current.b.marker.remove(),o.current.a&&(o.current.b=o.current.a);var t=(new V.a.Marker).setLngLat(s.current.features[e].geometry.coordinates).addTo(n);o.current.a={index:e,marker:t}}function g(e){0===s.current.features.length?(f(0,e),j(0)):2===Object.keys(o.current).length?function(e){var n=o.current.a.index,t=o.current.b.index;if(n>t){var r=[t,n];n=r[0],t=r[1]}t-n===1&&(f(t,e),v())}(e):1===Object.keys(o.current).length?function(e){var n=s.current.features.length;o.current.a.index===s.current.features.length-1?(f(n,e),v(),j(n)):0===o.current.a.index&&(f(0,e),v(),j(0))}(e):n.panTo(s.current.features[0].geometry.coordinates)}function v(){o.current.a&&o.current.a.marker.remove(),o.current.b&&o.current.b.marker.remove(),o.current={}}function x(e){27===e.keyCode&&v()}function h(e){var n=b(e);null!==n?j(n):g([e.lngLat.lng,e.lngLat.lat])}return c.a.useEffect((function(){if(n&&!a)return function(){o.current={},l.current={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:[]}}]},s.current={type:"FeatureCollection",features:[]},n.addSource("lines",{type:"geojson",data:l.current}),n.addSource("points",{type:"geojson",data:s.current}),n.addLayer({id:"lines",type:"line",source:"lines",paint:{"line-color":"yellow","line-opacity":.75,"line-width":5}}),n.addLayer({id:"points",type:"circle",source:"points",paint:{"circle-radius":6,"circle-color":"#B42222"}});for(var e=0;e<t.length;e++)f(e,[t[e].long,t[e].lat]);t.length>0&&n.panTo(s.current.features[0].geometry.coordinates)}(),n.on("click",h),window.addEventListener("keydown",x),function(){n.off("click",h),window.removeEventListener("keydown",x),n.removeLayer("lines"),n.removeSource("lines"),n.removeLayer("points"),n.removeSource("points"),v()}}),[n,a,r]),null},q=function(){var e=c.a.useContext(P.c);function n(){e.setPitch(0)}return c.a.useEffect((function(){if(e)return e.on("click",n),e.on("contextmenu",n),function(){e.off("click",n),e.off("contextmenu",n)}}),[e]),null},H=Object(P.e)({accessToken:"pk.eyJ1Ijoic3BpZGVyMjI5OCIsImEiOiJja3VzOGN1cWUwY2M5MndtZmZ1Nm0wdHZqIn0.rsbsUbg1W7V0Ev9aAXGGsA"}),z=function(e){var n=e.droneLocations,t=e.onChange,r=e.waypoints,a=e.deleteSignal,o=e.disableWaypointEditing;return Object(g.jsx)("div",{children:Object(g.jsxs)(H,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100%",width:"100%"},children:[Object(g.jsx)(P.d,{}),Object(g.jsx)(q,{}),Object(g.jsx)(Y,{droneLocations:n}),Object(g.jsx)(Z,{onChange:t,initialWaypoints:r,deleteSignal:a,disabled:o})]})})},X=function(e){var n=e.droneLocations,t=e.setWaypoints,r=e.exportMode;return Object(g.jsx)(j.a,{onClick:function(){n.length>0&&(t([n[0]]),r())},variant:"contained",color:"primary",children:"Start Creating Waypoints from First Drone"})},$=t(60),K=t(93),Q=t(173),ee=t(171),ne=t(174),te=t(167),re=t(172),ae=t(90),oe=t.n(ae),ie=t(91),ce=t.n(ie),se=["children","value","index"];function le(e){var n=e.children,t=e.value,r=e.index,a=Object(K.a)(e,se);return Object(g.jsx)("div",Object($.a)(Object($.a)({role:"tabpanel",hidden:t!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r)},a),{},{children:t===r&&Object(g.jsx)(ee.a,{sx:{p:3},children:Object(g.jsx)(re.a,{children:n})})}))}var ue=function(e){var n=e.panels,t=e.currentIndex,r=e.setCurrentIndex,a=t;return Object(g.jsxs)(ee.a,{className:ce.a.sidebar,children:[Object(g.jsx)(Q.a,{position:"static",children:Object(g.jsx)(te.a,{value:a,onChange:function(e,n){r(n)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth",children:n.map((function(e,n){return Object(g.jsx)(ne.a,Object($.a)({label:e.label},{id:"full-width-tab-".concat(t=n),"aria-controls":"full-width-tabpanel-".concat(t)}),e.label);var t}))})}),Object(g.jsx)(oe.a,{index:a,onChangeIndex:function(e){r(e)},children:n.map((function(e,n){return Object(g.jsx)(le,{value:a,index:n,children:e.contents},e.label)}))})]})};function de(){var e=c.a.useState(0),n=Object(u.a)(e,2),t=n[0],r=n[1],a=c.a.useState([]),i=Object(u.a)(a,2),s=i[0],l=i[1],d=c.a.useState([]),p=Object(u.a)(d,2),b=p[0],j=p[1],v=c.a.useState(!1),x=Object(u.a)(v,2),y=x[0],O=x[1],C=Object(o.b)().enqueueSnackbar;return Object(g.jsxs)("div",{className:f.a.appContainer,children:[Object(g.jsx)(ue,{currentIndex:t,setCurrentIndex:r,panels:[{label:"Import",contents:Object(g.jsxs)("div",{children:[Object(g.jsx)(X,{droneLocations:s,setWaypoints:j,exportMode:function(){return r(1)}}),Object(g.jsx)("button",{onClick:function(){C("I am a message")},children:"show a notification"}),Object(g.jsx)(J,{onSubmit:l})]})},{label:"Export",contents:Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:0===b.length?Object(g.jsx)("span",{children:"No waypoints selected"}):Object(g.jsx)("ol",{style:{listStyle:"decimal"},children:b.map((function(e,n){return Object(g.jsx)("li",{children:"[".concat(e.long,", ").concat(e.lat,"]")},n)}))})}),Object(g.jsx)(h,{waypoints:b}),Object(g.jsx)(m,{deleteSignal:y,sendDeleteSignal:O,setWaypoints:j})]})}]}),Object(g.jsx)(z,{droneLocations:s,onChange:j,disableWaypointEditing:0===t,waypoints:b,deleteSignal:y})]})}var fe=Object(r.a)({palette:{primary:{main:"#272264"},secondary:{main:"#a7b1b8"}}});l.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{maxSnack:3,children:Object(g.jsx)(a.a,{theme:fe,children:Object(g.jsx)(de,{})})})}),document.getElementById("root"))},46:function(e,n,t){e.exports={fileInputContainer:"FileInput_fileInputContainer__2FREY",uploadInput:"FileInput_uploadInput__3LcYe",buttonBar:"FileInput_buttonBar__IRrE5",textarea:"FileInput_textarea__bwjhJ"}},83:function(e,n,t){e.exports={appContainer:"App_appContainer__3jRx1"}},86:function(e,n,t){e.exports={droneId:"Dronecard_droneId__1RcYD"}},91:function(e,n,t){e.exports={sidebar:"Sidebar_sidebar__2go77"}}},[[139,1,2]]]);
//# sourceMappingURL=main.f330e178.chunk.js.map