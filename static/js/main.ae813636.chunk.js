(this["webpackJsonphfa-drone-map"]=this["webpackJsonphfa-drone-map"]||[]).push([[0],{108:function(e,n,t){},144:function(e,n,t){"use strict";t.r(n);t(107),t(108);var r=t(96),a=t(183),o=t(97),i=t(0),c=t.n(i),s=t(27),l=t.n(s),u=t(12),d=t(86),j=t.n(d),p=t(87),b=t.n(p),f=t(184),g=t(1),h=function(e){var n=e.deleteSignal,t=e.sendDeleteSignal,r=e.setWaypoints;return Object(g.jsx)(f.a,{onClick:function(){window.confirm("Are you sure you wish to delete these waypoints?")&&(r([]),t(!n))},variant:"outlined",color:"error",endIcon:Object(g.jsx)(b.a,{}),children:"Clear waypoints"})},v=t(181),x=t(88),O=t.n(x),m=function(e){var n=e.boatId,t=e.waypoints,r=e.disabled,a=void 0!==r&&r,o=e.filename,i=void 0===o?"data.csv":o,c=e.contentType,s=void 0===c?"data:text/csv;charset=utf-8,":c;return Object(g.jsx)(f.a,{disabled:a,onClick:function(){var e="boatId,waypointNumber,latitude,longitude\n";!function(e,n,t){if(navigator.msSaveBlob){var r=new Blob([e],{type:t});navigator.msSaveBlob(r,n)}else{var a=document.createElement("a");a.style.display="none",a.setAttribute("href",t+encodeURIComponent(e)),a.setAttribute("download",n),document.body.appendChild(a),a.click(),document.body.removeChild(a)}}(e+=t.map((function(e,t){return y(n,t,e)})).join("\n"),i,s)},variant:"contained",endIcon:Object(g.jsx)(O.a,{}),children:"Download"})},y=function(e,n,t){return"".concat(e,",").concat(n+1,",").concat(t.lat.toFixed(6),",").concat(t.long.toFixed(6))},w=t(72),C=t.n(w),S=function(e){var n=e.waypoints,t=c.a.useState(""),r=Object(u.a)(t,2),a=r[0],o=r[1];return Object(g.jsxs)("div",{className:C.a.csvDownloaderContainer,children:[Object(g.jsx)(v.a,{className:C.a.input,placeholder:"Boat ID",value:a,onChange:function(e){return o(e.target.value)}}),Object(g.jsx)(m,{disabled:!a||0===n.length,boatId:a,waypoints:n,children:"Download"})]})},I=t(190),k=t(191),L=t(195),_=t(194),D=t(189),E=t(192),F=t(193),B=function(e){var n=e.waypoints;return Object(g.jsx)(D.a,{component:I.a,children:Object(g.jsxs)(k.a,{size:"small",children:[Object(g.jsx)(E.a,{children:Object(g.jsxs)(F.a,{children:[Object(g.jsx)(_.a,{children:"#"}),Object(g.jsx)(_.a,{align:"right",children:"Longitude"}),Object(g.jsx)(_.a,{align:"right",children:"Latitude"})]})}),Object(g.jsx)(L.a,{children:0===n.length?Object(g.jsx)(F.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:Object(g.jsx)(_.a,{align:"center",colSpan:3,children:Object(g.jsx)("b",{children:"No waypoints added"})})}):n.map((function(e,n){return Object(g.jsxs)(F.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(g.jsx)(_.a,{component:"th",scope:"row",children:n+1}),Object(g.jsx)(_.a,{align:"right",children:e.long}),Object(g.jsx)(_.a,{align:"right",children:e.lat})]},n)}))})]})})},N=function(e){var n=e.waypoints,t=e.deleteSignal,r=e.sendDeleteSignal,a=e.setWaypoints;return Object(g.jsxs)("div",{children:[Object(g.jsx)(S,{waypoints:n}),Object(g.jsx)(h,{deleteSignal:t,sendDeleteSignal:r,setWaypoints:a}),Object(g.jsx)(B,{waypoints:n})]})},W=t(73),A=t.n(W),M=t(89),R=t(93),T=t.n(R),J=t(92),P=t.n(J),U=t(177),V=function(e){var n=1;return/[SW]$/.test(e)&&(n=-1),n*parseFloat(e.substring(0,e.length-1))},G=t(91),Y=t.n(G),Z=t(196),H=t(197),q=t(90),z=t.n(q),X=function(e){var n=e.drone;return Object(g.jsx)(Z.a,{variant:"outlined",children:Object(g.jsx)(H.a,{children:Object(g.jsxs)("div",{className:z.a.droneId,children:[Object(g.jsx)("div",{children:n.id}),Object(g.jsx)("div",{children:Object(g.jsx)(Y.a,{onClick:function(){return console.log([n.long,n.lat])}})})]})})})},$=function(e){var n=e.drones;return n?n.map((function(e){return Object(g.jsx)(X,{drone:e},e.id)})):null},K=t(50),Q=t.n(K),ee=function(e){var n=c.a.useState("M,UL997,37.821608S,145.313996E,470668.68,3,3.4\nP,UL997,12.68,26.3,3.4,41.3,0.0"),t=Object(u.a)(n,2),r=t[0],a=t[1],o=c.a.useState(""),i=Object(u.a)(o,2),s=i[0],l=i[1],d=c.a.useRef(null),j=function(){var e=Object(M.a)(A.a.mark((function e(n){var t,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.target.files,console.log(t),e.next=4,Promise.all(Array.from(t).map((function(e){return n=e,new Promise((function(e,t){var r=new FileReader;r.onabort=function(){return t("file reading was aborted")},r.onerror=function(){return t("file reading has failed")},r.readAsText?(r.addEventListener("load",(function(){var n=null!=this.resultString?this.resultString:this.result;e(n)}),!1),r.readAsText(n)):t("Failed to read file")}));var n})));case 4:r=e.sent,a(r.join("\n"));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:Q.a.fileInputContainer,children:[Object(g.jsx)("input",{type:"file",id:"fileInput",name:"fileInput",ref:d,multiple:!0,onChange:j,className:Q.a.uploadInput}),Object(g.jsxs)("div",{className:Q.a.buttonBar,children:[Object(g.jsx)(f.a,{onClick:function(){d.current&&d.current.click()},endIcon:Object(g.jsx)(P.a,{}),variant:"contained",color:"secondary",children:"Upload CSV"}),Object(g.jsx)(f.a,{onClick:function(){var n=function(e){var n={};return e.split("\n").forEach((function(e){var t=e.split(",");if(0===t.length||7!==t.length)return null;console.log(t),console.log("chunks length: ",t.length);var r=t[0],a=t[1];if(n[a]||(n[a]={id:a}),"P"===r){var o=Math.round(t[2]/13.61*100,2)+"% ("+t[2]+"/13.61V)";n[a].batteryLvl=o}else if("M"===r){var i=V(t[2]),c=V(t[3]),s=t[4]+" NM/H",l=t[5],u=t[6];n[a].lat=i,n[a].long=c,n[a].avgSpeed=s,n[a].avgBearing=l,n[a].avgCurrent=u}})),Object.values(n)}(r);console.log(n),l(n),e.onSubmit&&e.onSubmit(n)},variant:"contained",color:"primary",endIcon:Object(g.jsx)(T.a,{}),children:"Submit"})]}),Object(g.jsx)(U.a,{className:Q.a.textarea,minRows:20,onChange:function(e){return a(e.target.value)},value:r}),Object(g.jsx)($,{drones:s})]})},ne=t(26),te=t(14),re=t.n(te),ae={"circle-stroke-width":2,"circle-radius":8,"circle-blur":.15,"circle-color":"#3770C6","circle-stroke-color":"white"},oe=function(e){var n=c.a.useContext(ne.c);return c.a.useEffect((function(){if(n){var e=new re.a.Popup({closeButton:!1,closeOnClick:!1});n.on("mouseenter","position-marker",(function(t){n.getCanvas().style.cursor="pointer";for(var r=t.features[0].geometry.coordinates.slice(),a=t.features[0].properties,o="";Math.abs(t.lngLat.lng-r[0])>180;)r[0]+=t.lngLat.lng>r[0]?360:-360;for(var i in e.setLngLat(r).addTo(n),a){var c=i+": ";"DroneID"===i?o+=c="<strong>"+a[i]+"</strong><br>":"id"!==i&&(o+=c+a[i]+"<br>",console.log(a[i]),e.setHTML(o))}})),n.on("click","position-marker",(function(e){n.flyTo({center:e.features[0].geometry.coordinates})})),n.on("mouseenter","position-marker",(function(){n.getCanvas().style.cursor="pointer"})),n.on("mouseleave","position-marker",(function(){n.getCanvas().style.cursor="",e.remove()}))}}),[n]),Object(g.jsx)(ne.b,{type:"circle",id:"position-marker",paint:ae,children:e.droneLocations.map((function(e,n){return Object(g.jsx)(ne.a,{coordinates:[e.long,e.lat],properties:{DroneID:e.id,Longitude:e.long,Latitude:e.lat,"Battery Level":e.batteryLvl,"Average Speed":e.avgSpeed,"Average Bearing":e.avgBearing,"Average Current":e.avgCurrent}},n)}))})},ie=function(e){var n=c.a.useContext(ne.c),t=e.initialWaypoints,r=e.deleteSignal,a=e.disabled,o=Object(i.useRef)(null),s=Object(i.useRef)(null),l=Object(i.useRef)(null),d=function(n){var t=n.map((function(e){var n=Object(u.a)(e,2);return{long:n[0],lat:n[1]}}));e.onChange&&e.onChange(t)};function j(e,n){s.current.features.splice(e,0,function(e){return{type:"Feature",geometry:{type:"Point",coordinates:e},properties:{description:"<p>"+JSON.stringify(e)+"</p>",tag:JSON.stringify(e)}}}(n)),l.current.features[0].geometry.coordinates.splice(e,0,n),p(),d(l.current.features[0].geometry.coordinates)}function p(){n.getSource("lines").setData(l.current),n.getSource("points").setData(s.current)}function b(e){var t,r=[e.point.x,e.point.y],a=r[0],o=r[1],i=n.queryRenderedFeatures([[a-5,o-5],[a+5,o+5]],{layers:["points"]});return i.length>0?(t=i[0].properties.tag,s.current.features.findIndex((function(e){return e.properties.tag===t}))):null}function f(e){if(o.current.a&&o.current.a.index===e)return function(e){s.current.features.splice(e,1),l.current.features[0].geometry.coordinates.splice(e,1),p(),d(l.current.features[0].geometry.coordinates)}(e),void h();o.current.b&&o.current.b.marker.remove(),o.current.a&&(o.current.b=o.current.a);var t=(new re.a.Marker).setLngLat(s.current.features[e].geometry.coordinates).addTo(n);o.current.a={index:e,marker:t}}function g(e){0===s.current.features.length?(j(0,e),f(0)):2===Object.keys(o.current).length?function(e){var n=o.current.a.index,t=o.current.b.index;if(n>t){var r=[t,n];n=r[0],t=r[1]}t-n===1&&(j(t,e),h())}(e):1===Object.keys(o.current).length?function(e){var n=s.current.features.length;o.current.a.index===s.current.features.length-1?(j(n,e),h(),f(n)):0===o.current.a.index&&(j(0,e),h(),f(0))}(e):n.panTo(s.current.features[0].geometry.coordinates)}function h(){o.current.a&&o.current.a.marker.remove(),o.current.b&&o.current.b.marker.remove(),o.current={}}function v(e){27===e.keyCode&&h()}function x(e){var n=b(e);null!==n?f(n):g([e.lngLat.lng,e.lngLat.lat])}return c.a.useEffect((function(){if(n&&!a)return function(){o.current={},l.current={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:[]}}]},s.current={type:"FeatureCollection",features:[]},n.addSource("lines",{type:"geojson",data:l.current}),n.addSource("points",{type:"geojson",data:s.current}),n.addLayer({id:"lines",type:"line",source:"lines",paint:{"line-color":"yellow","line-opacity":.75,"line-width":5}}),n.addLayer({id:"points",type:"circle",source:"points",paint:{"circle-radius":6,"circle-color":"#B42222"}});for(var e=0;e<t.length;e++)j(e,[t[e].long,t[e].lat]);t.length>0&&n.panTo(s.current.features[0].geometry.coordinates)}(),n.on("click",x),window.addEventListener("keydown",v),function(){n.off("click",x),window.removeEventListener("keydown",v),n.removeLayer("lines"),n.removeSource("lines"),n.removeLayer("points"),n.removeSource("points"),h()}}),[n,a,r]),null},ce=function(){var e=c.a.useContext(ne.c);function n(){e.setPitch(0)}return c.a.useEffect((function(){if(e)return e.on("click",n),e.on("contextmenu",n),function(){e.off("click",n),e.off("contextmenu",n)}}),[e]),null},se=Object(ne.e)({accessToken:"pk.eyJ1Ijoic3BpZGVyMjI5OCIsImEiOiJja3VzOGN1cWUwY2M5MndtZmZ1Nm0wdHZqIn0.rsbsUbg1W7V0Ev9aAXGGsA"}),le=function(e){var n=e.droneLocations,t=e.onChange,r=e.waypoints,a=e.deleteSignal,o=e.disableWaypointEditing;return Object(g.jsx)("div",{children:Object(g.jsxs)(se,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100%",width:"100%"},children:[Object(g.jsx)(ne.d,{}),Object(g.jsx)(ce,{}),Object(g.jsx)(oe,{droneLocations:n}),Object(g.jsx)(ie,{onChange:t,initialWaypoints:r,deleteSignal:a,disabled:o})]})})},ue=function(e){var n=e.droneLocations,t=e.setWaypoints,r=e.exportMode;return Object(g.jsx)(f.a,{onClick:function(){n.length>0&&(t([n[0]]),r())},variant:"contained",color:"primary",children:"Start Creating Waypoints from First Drone"})},de=t(61),je=t(98),pe=t(187),be=t(185),fe=t(188),ge=t(180),he=t(186),ve=t(94),xe=t.n(ve),Oe=t(95),me=t.n(Oe),ye=["children","value","index"];function we(e){var n=e.children,t=e.value,r=e.index,a=Object(je.a)(e,ye);return Object(g.jsx)("div",Object(de.a)(Object(de.a)({role:"tabpanel",hidden:t!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r)},a),{},{children:t===r&&Object(g.jsx)(be.a,{sx:{p:3},children:Object(g.jsx)(he.a,{children:n})})}))}var Ce=function(e){var n=e.panels,t=e.currentIndex,r=e.setCurrentIndex,a=t;return Object(g.jsxs)(be.a,{className:me.a.sidebar,children:[Object(g.jsx)(pe.a,{position:"static",children:Object(g.jsx)(ge.a,{value:a,onChange:function(e,n){r(n)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth",children:n.map((function(e,n){return Object(g.jsx)(fe.a,Object(de.a)({label:e.label},{id:"full-width-tab-".concat(t=n),"aria-controls":"full-width-tabpanel-".concat(t)}),e.label);var t}))})}),Object(g.jsx)(xe.a,{index:a,onChangeIndex:function(e){r(e)},children:n.map((function(e,n){return Object(g.jsx)(we,{value:a,index:n,children:e.contents},e.label)}))})]})};function Se(){var e=c.a.useState(0),n=Object(u.a)(e,2),t=n[0],r=n[1],a=c.a.useState([]),o=Object(u.a)(a,2),i=o[0],s=o[1],l=c.a.useState([]),d=Object(u.a)(l,2),p=d[0],b=d[1],f=c.a.useState(!1),h=Object(u.a)(f,2),v=h[0],x=h[1];return Object(g.jsxs)("div",{className:j.a.appContainer,children:[Object(g.jsx)(Ce,{currentIndex:t,setCurrentIndex:r,panels:[{label:"Import",contents:Object(g.jsxs)("div",{children:[Object(g.jsx)(ue,{droneLocations:i,setWaypoints:b,exportMode:function(){return r(1)}}),Object(g.jsx)(ee,{onSubmit:s})]})},{label:"Export",contents:Object(g.jsx)(N,{waypoints:p,deleteSignal:v,sendDeleteSignal:x,setWaypoints:b})}]}),Object(g.jsx)(le,{droneLocations:i,onChange:b,disableWaypointEditing:0===t,waypoints:p,deleteSignal:v})]})}var Ie=Object(r.a)({palette:{primary:{main:"#272264"},secondary:{main:"#a7b1b8"}}});l.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{maxSnack:3,children:Object(g.jsx)(a.a,{theme:Ie,children:Object(g.jsx)(Se,{})})})}),document.getElementById("root"))},50:function(e,n,t){e.exports={fileInputContainer:"FileInput_fileInputContainer__2FREY",uploadInput:"FileInput_uploadInput__3LcYe",buttonBar:"FileInput_buttonBar__IRrE5",textarea:"FileInput_textarea__bwjhJ"}},72:function(e,n,t){e.exports={csvDownloaderContainer:"CsvDownloader_csvDownloaderContainer__9mBnF",input:"CsvDownloader_input__3ATbp"}},86:function(e,n,t){e.exports={appContainer:"App_appContainer__3jRx1"}},90:function(e,n,t){e.exports={droneId:"Dronecard_droneId__1RcYD"}},95:function(e,n,t){e.exports={sidebar:"Sidebar_sidebar__2go77"}}},[[144,1,2]]]);
//# sourceMappingURL=main.ae813636.chunk.js.map