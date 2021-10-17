(this["webpackJsonphfa-drone-map"]=this["webpackJsonphfa-drone-map"]||[]).push([[0],{110:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2go77"}},124:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);n(123),n(124);var r=n(111),a=n(211),o=n(63),i=n(0),c=n.n(i),s=n(27),l=n.n(s),u=n(9),d=n(92),j=n.n(d),b=n(93),p=n.n(b),f=n(212),g=n(1),x=function(e){var t=e.deleteSignal,n=e.sendDeleteSignal,r=e.setWaypoints;return Object(g.jsx)(f.a,{onClick:function(){window.confirm("Are you sure you wish to delete these waypoints?")&&(r([]),n(!t))},variant:"outlined",color:"error",endIcon:Object(g.jsx)(p.a,{}),children:"Clear waypoints"})},h=n(210),v=n(94),O=n.n(v),m=function(e){var t=e.boatId,n=e.waypoints,r=e.disabled,a=void 0!==r&&r,o=e.filename,i=void 0===o?"data.csv":o,c=e.contentType,s=void 0===c?"data:text/csv;charset=utf-8,":c;return Object(g.jsx)(f.a,{disabled:a,onClick:function(){var e="boatId,waypointNumber,latitude,longitude\n";!function(e,t,n){if(navigator.msSaveBlob){var r=new Blob([e],{type:n});navigator.msSaveBlob(r,t)}else{var a=document.createElement("a");a.style.display="none",a.setAttribute("href",n+encodeURIComponent(e)),a.setAttribute("download",t),document.body.appendChild(a),a.click(),document.body.removeChild(a)}}(e+=n.map((function(e,n){return y(t,n,e)})).join("\n"),i,s)},variant:"contained",endIcon:Object(g.jsx)(O.a,{}),children:"Export"})},y=function(e,t,n){return"".concat(e,",").concat(t+1,",").concat(n.lat.toFixed(6),",").concat(n.long.toFixed(6))},C=n(79),w=n.n(C),k=function(e){var t=e.waypoints,n=c.a.useState(""),r=Object(u.a)(n,2),a=r[0],o=r[1];return Object(g.jsxs)("div",{className:w.a.csvDownloaderContainer,children:[Object(g.jsx)(h.a,{className:w.a.input,placeholder:"Boat ID",value:a,onChange:function(e){return o(e.target.value)}}),Object(g.jsx)(m,{disabled:!a||0===t.length,boatId:a,waypoints:t,children:"Download"})]})},S=n(219),I=n(220),L=n(224),_=n(223),D=n(218),E=n(221),M=n(222),F=function(e){var t=e.waypoints;return Object(g.jsx)(D.a,{component:S.a,children:Object(g.jsxs)(I.a,{size:"small",children:[Object(g.jsx)(E.a,{children:Object(g.jsxs)(M.a,{children:[Object(g.jsx)(_.a,{children:"#"}),Object(g.jsx)(_.a,{align:"right",children:"Longitude"}),Object(g.jsx)(_.a,{align:"right",children:"Latitude"})]})}),Object(g.jsx)(L.a,{children:0===t.length?Object(g.jsx)(M.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:Object(g.jsx)(_.a,{align:"center",colSpan:3,children:Object(g.jsx)("b",{children:"No waypoints added"})})}):t.map((function(e,t){return Object(g.jsxs)(M.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(g.jsx)(_.a,{component:"th",scope:"row",children:t+1}),Object(g.jsx)(_.a,{align:"right",children:e.long.toFixed(6)}),Object(g.jsx)(_.a,{align:"right",children:e.lat.toFixed(6)})]},t)}))})]})})},N=function(e){var t=e.waypoints,n=e.deleteSignal,r=e.sendDeleteSignal,a=e.setWaypoints;return Object(g.jsxs)("div",{children:[Object(g.jsx)(k,{waypoints:t}),Object(g.jsx)(x,{deleteSignal:n,sendDeleteSignal:r,setWaypoints:a}),Object(g.jsx)(F,{waypoints:t})]})},B=n(80),W=n.n(B),P=n(96),T=n(205),A=["id","lat","long","avgSpeed","avgBearing","avgCurrent","batteryVoltage"],R=function(e){var t=1;return/[SW]$/.test(e)&&(t=-1),t*parseFloat(e.substring(0,e.length-1))},V=n(107),J=n.n(V),U=n(108),G=n.n(U),Y=n(225),Z=n(226),q=n(227),z=n(207),H=function(e){return Math.max((e-11)/(13.61-11)*100,0)},X=n(100),$=n.n(X),K=n(101),Q=n.n(K),ee=n(102),te=n.n(ee),ne=n(103),re=n.n(ne),ae=n(104),oe=n.n(ae),ie=n(105),ce=n.n(ie),se=n(98),le=n.n(se),ue=n(106),de=n.n(ue),je=n(99),be=n.n(je),pe=n(97),fe=n.n(pe),ge=function(e){var t=e.pc,n=t<95?Math.floor(t/10):10,r=Object(g.jsx)(fe.a,{});switch(n){case 0:r=Object(g.jsx)(le.a,{});break;case 1:r=Object(g.jsx)(be.a,{});break;case 2:r=Object(g.jsx)($.a,{});break;case 3:case 4:r=Object(g.jsx)(Q.a,{});break;case 5:r=Object(g.jsx)(te.a,{});break;case 6:case 7:r=Object(g.jsx)(re.a,{});break;case 8:r=Object(g.jsx)(oe.a,{});break;case 9:r=Object(g.jsx)(ce.a,{});break;case 10:r=Object(g.jsx)(de.a,{})}return Object(g.jsx)(z.a,{title:Math.max(Math.min(t,100),0).toFixed(0)+"%",children:r})},xe=n(65),he=n.n(xe),ve=function(e){var t=e.drone,n=e.onLocationClick,r=H(t.batteryVoltage),a=void 0===t.long||void 0===t.lat;return Object(g.jsx)(Y.a,{variant:"outlined",children:Object(g.jsx)(Z.a,{children:Object(g.jsxs)("div",{className:he.a.droneId,children:[Object(g.jsxs)("div",{className:a?he.a.locationMissing:"",children:[Object(g.jsx)(J.a,{className:he.a.boatIcon}),t.id," ",Object(g.jsx)(ge,{pc:r})]}),!a&&Object(g.jsx)(z.a,{title:"Center on this location",placement:"top",children:Object(g.jsx)(q.a,{onClick:n,children:Object(g.jsx)(G.a,{})})})]})})})},Oe=function(e){var t=e.drones,n=e.setCurrentPosition;if(!t)return null;return t.map((function(e){return Object(g.jsx)(ve,{drone:e,onLocationClick:function(){return function(e){var t=e.lat,r=e.long;n&&n({lat:t,long:r})}(e)}},e.id)}))},me=n(52),ye=n.n(me),Ce=function(e){var t=e.onSubmit,n=e.text,r=e.setText,a=e.setCurrentPosition,i=c.a.useState(""),s=Object(u.a)(i,2),l=s[0],d=s[1],j=Object(o.b)().enqueueSnackbar,b=c.a.useRef(null),p=function(){var e=function(e){var t={};e.split("\n").forEach((function(e,n){console.log("line: ",e);var r=e.split(",");if(r.length<2)return null;console.log(r),console.log("chunks length: ",r.length);var a=r[0],o=r[1];t[o]||(t[o]={id:o});try{if("P"===a)t[o].batteryVoltage=r[2];else if("M"===a){var i=R(r[2]),c=R(r[3]),s=r[4],l=r[5],u=r[6];t[o].lat=i,t[o].long=c,t[o].avgSpeed=s,t[o].avgBearing=l,t[o].avgCurrent=u}}catch(d){console.warn("Error processing line ".concat(n+1,", drone id: ").concat(o))}t[o].complete=A.reduce((function(e,n){return e&&!!t[o][n]}),!0),console.log(o,t[o])}));var n=Object.values(t),r=n.filter((function(e){return!e.complete})).map((function(e){return e.id}));return console.log(r),{values:n,errors:r}}(n),r=e.values,a=e.errors;console.log(r),a.length>0&&j("Missing data for drone(s): ".concat(a.join(", ")),{variant:"warning"}),d(r),t&&t(r)},x=function(){var e=Object(P.a)(W.a.mark((function e(t){var n,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files,console.log(n),e.next=4,Promise.all(Array.from(n).map((function(e){return t=e,new Promise((function(e,n){var r=new FileReader;r.onabort=function(){return n("file reading was aborted")},r.onerror=function(){return n("file reading has failed")},r.readAsText?(r.addEventListener("load",(function(){var t=null!=this.resultString?this.resultString:this.result;e(t)}),!1),r.readAsText(t)):n("Failed to read file")}));var t})));case 4:a=e.sent,r(a.join("\n"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.useEffect((function(){p()}),[n]),Object(g.jsxs)("div",{className:ye.a.fileInputContainer,children:[Object(g.jsx)("input",{type:"file",id:"fileInput",name:"fileInput",ref:b,multiple:!0,onChange:x,className:ye.a.uploadInput}),Object(g.jsxs)("div",{className:ye.a.buttonBar,children:[Object(g.jsx)(f.a,{onClick:function(){b.current&&b.current.click()},variant:"contained",color:"secondary",children:"Import CSV"}),Object(g.jsx)(f.a,{onClick:function(){t([]),d("")},variant:"contained",color:"error",children:"Clear"}),Object(g.jsx)(f.a,{onClick:p,variant:"contained",color:"primary",children:"Show Drones"})]}),Object(g.jsx)(T.a,{className:ye.a.textarea,minRows:20,onChange:function(e){return r(e.target.value)},value:n}),Object(g.jsx)(Oe,{drones:l,setCurrentPosition:a})]})},we=n(26),ke=n(15),Se=n.n(ke),Ie={"circle-stroke-width":2,"circle-radius":8,"circle-blur":.15,"circle-color":"#3770C6","circle-stroke-color":"white"},Le=function(e,t){return e?t||e:"Missing Data"},_e=function(e){var t=c.a.useContext(we.c);return c.a.useEffect((function(){if(t){var e=new Se.a.Popup({closeButton:!1,closeOnClick:!1});t.on("mouseenter","position-marker",(function(n){t.getCanvas().style.cursor="pointer";for(var r=n.features[0].geometry.coordinates.slice(),a=n.features[0].properties,o="";Math.abs(n.lngLat.lng-r[0])>180;)r[0]+=n.lngLat.lng>r[0]?360:-360;for(var i in e.setLngLat(r).addTo(t),a){var c=i+": ";"DroneID"===i?o+=c="<strong>"+a[i]+"</strong><br>":"id"!==i&&(o+=c+a[i]+"<br>",console.log(a[i]),e.setHTML(o))}})),t.on("click","position-marker",(function(e){t.flyTo({center:e.features[0].geometry.coordinates})})),t.on("mouseenter","position-marker",(function(){t.getCanvas().style.cursor="pointer"})),t.on("mouseleave","position-marker",(function(){t.getCanvas().style.cursor="",e.remove()}))}}),[t]),Object(g.jsx)(we.b,{type:"circle",id:"position-marker",paint:Ie,children:e.droneLocations.map((function(e,t){return Object(g.jsx)(we.a,{coordinates:[e.long,e.lat],properties:{DroneID:Le(e.id),Longitude:Le(e.long),Latitude:Le(e.lat),"Battery Level":Le(e.batteryVoltage,H(e.batteryVoltage)),"Average Speed":Le(e.avgSpeed,e.avgSpeed+" NM/h"),"Average Bearing":Le(e.avgBearing),"Average Current":Le(e.avgCurrent)}},t)}))})},De=function(e){var t=c.a.useContext(we.c),n=e.deleteSignal,r=e.disabled,a=e.initialWaypoints,o=Object(i.useRef)(null),s=Object(i.useRef)(null),l=Object(i.useRef)(null),d=function(t){var n=t.map((function(e){var t=Object(u.a)(e,2);return{long:t[0],lat:t[1]}}));e.onChange&&e.onChange(n)};function j(e,t){s.current.features.splice(e,0,function(e){return{type:"Feature",geometry:{type:"Point",coordinates:e},properties:{description:"<p>"+JSON.stringify(e)+"</p>",tag:JSON.stringify(e)}}}(t)),l.current.features[0].geometry.coordinates.splice(e,0,t),b(),d(l.current.features[0].geometry.coordinates)}function b(){t.getSource("lines").setData(l.current),t.getSource("points").setData(s.current)}function p(e){var n,r=[e.point.x,e.point.y],a=r[0],o=r[1],i=t.queryRenderedFeatures([[a-5,o-5],[a+5,o+5]],{layers:["points"]});return i.length>0?(n=i[0].properties.tag,s.current.features.findIndex((function(e){return e.properties.tag===n}))):null}function f(e){if(o.current.a&&o.current.a.index===e)return function(e){s.current.features.splice(e,1),l.current.features[0].geometry.coordinates.splice(e,1),b(),d(l.current.features[0].geometry.coordinates)}(e),void x();o.current.b&&o.current.b.marker.remove(),o.current.a&&(o.current.b=o.current.a);var n=(new Se.a.Marker).setLngLat(s.current.features[e].geometry.coordinates).addTo(t);o.current.a={index:e,marker:n}}function g(e){0===s.current.features.length?(j(0,e),f(0)):2===Object.keys(o.current).length?function(e){var t=o.current.a.index,n=o.current.b.index;if(t>n){var r=[n,t];t=r[0],n=r[1]}n-t===1&&(j(n,e),x())}(e):1===Object.keys(o.current).length?function(e){var t=s.current.features.length;o.current.a.index===s.current.features.length-1?(j(t,e),x(),f(t)):0===o.current.a.index&&(j(0,e),x(),f(0))}(e):t.panTo(s.current.features[0].geometry.coordinates)}function x(){o.current.a&&o.current.a.marker.remove(),o.current.b&&o.current.b.marker.remove(),o.current={}}function h(e){27===e.keyCode&&x()}function v(e){var t=p(e);null!==t?f(t):g([e.lngLat.lng,e.lngLat.lat])}return c.a.useEffect((function(){if(t&&!r)return function(){o.current={},l.current={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:[]}}]},s.current={type:"FeatureCollection",features:[]},t.addSource("lines",{type:"geojson",data:l.current}),t.addSource("points",{type:"geojson",data:s.current}),t.addLayer({id:"lines",type:"line",source:"lines",paint:{"line-color":"yellow","line-opacity":.75,"line-width":5}}),t.addLayer({id:"points",type:"circle",source:"points",paint:{"circle-radius":6,"circle-color":"#B42222"}});for(var e=0;e<a.length;e++)j(e,[a[e].long,a[e].lat]);a.length>0&&(t.panTo(s.current.features[0].geometry.coordinates),1===a.length&&f(0))}(),t.on("click",v),window.addEventListener("keydown",h),function(){t.off("click",v),window.removeEventListener("keydown",h),t.removeLayer("lines"),t.removeSource("lines"),t.removeLayer("points"),t.removeSource("points"),x()}}),[t,n,r]),null},Ee=function(e){var t=e.currentPosition,n=c.a.useContext(we.c);function r(){n.setPitch(0)}return c.a.useEffect((function(){t.long&&t.lat&&n.panTo([t.long,t.lat])}),[t]),c.a.useEffect((function(){if(n)return n.on("click",r),n.on("contextmenu",r),function(){n.off("click",r),n.off("contextmenu",r)}}),[n]),null},Me=Object(we.g)({accessToken:"pk.eyJ1Ijoic3BpZGVyMjI5OCIsImEiOiJja3VzOGN1cWUwY2M5MndtZmZ1Nm0wdHZqIn0.rsbsUbg1W7V0Ev9aAXGGsA"}),Fe=function(e){var t=e.currentPosition,n=e.droneLocations,r=e.onChange,a=e.waypoints,o=e.deleteSignal,i=e.disableWaypointEditing;return Object(g.jsx)("div",{children:Object(g.jsxs)(Me,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100%",width:"100%"},children:[Object(g.jsx)(we.f,{}),Object(g.jsx)(we.e,{}),Object(g.jsx)(we.d,{}),Object(g.jsx)(Ee,{currentPosition:t}),Object(g.jsx)(_e,{droneLocations:n}),Object(g.jsx)(De,{onChange:r,initialWaypoints:a,deleteSignal:o,disabled:i})]})})},Ne=function(e){var t=e.droneLocations,n=e.setWaypoints,r=e.exportMode;return Object(g.jsx)(f.a,{onClick:function(){t.length>0&&(n([t[0]]),r())},variant:"contained",color:"primary",children:"Start Creating Waypoints from First Drone"})},Be=n(66),We=n(112),Pe=n(215),Te=n(213),Ae=n(216),Re=n(209),Ve=n(214),Je=n(109),Ue=n.n(Je),Ge=n(110),Ye=n.n(Ge),Ze=["children","value","index"];function qe(e){var t=e.children,n=e.value,r=e.index,a=Object(We.a)(e,Ze);return Object(g.jsx)("div",Object(Be.a)(Object(Be.a)({role:"tabpanel",hidden:n!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r)},a),{},{children:n===r&&Object(g.jsx)(Te.a,{sx:{p:3},children:Object(g.jsx)(Ve.a,{children:t})})}))}var ze=function(e){var t=e.panels,n=e.currentIndex,r=e.setCurrentIndex,a=n;return Object(g.jsxs)(Te.a,{className:Ye.a.sidebar,children:[Object(g.jsx)(Pe.a,{position:"static",children:Object(g.jsx)(Re.a,{value:a,onChange:function(e,t){r(t)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth",children:t.map((function(e,t){return Object(g.jsx)(Ae.a,Object(Be.a)({label:e.label},{id:"full-width-tab-".concat(n=t),"aria-controls":"full-width-tabpanel-".concat(n)}),e.label);var n}))})}),Object(g.jsx)(Ue.a,{index:a,onChangeIndex:function(e){r(e)},children:t.map((function(e,t){return Object(g.jsx)(qe,{value:a,index:t,children:e.contents},e.label)}))})]})};function He(){var e=c.a.useState(0),t=Object(u.a)(e,2),n=t[0],r=t[1],a=c.a.useState("M,UL997,37.821608S,145.313996E,470668.68,3,3.4\nP,UL997,12.68,26.3,3.4,41.3,0.0"),o=Object(u.a)(a,2),i=o[0],s=o[1],l=c.a.useState({lat:-37.8136,long:144.9631}),d=Object(u.a)(l,2),b=d[0],p=d[1],f=c.a.useState([]),x=Object(u.a)(f,2),h=x[0],v=x[1],O=c.a.useState([]),m=Object(u.a)(O,2),y=m[0],C=m[1],w=c.a.useState(!1),k=Object(u.a)(w,2),S=k[0],I=k[1];return Object(g.jsxs)("div",{className:j.a.appContainer,children:[Object(g.jsx)(ze,{currentIndex:n,setCurrentIndex:r,panels:[{label:"Import",contents:Object(g.jsxs)("div",{children:[Object(g.jsx)(Ne,{droneLocations:h,setWaypoints:C,exportMode:function(){return r(1)}}),Object(g.jsx)(Ce,{onSubmit:v,text:i,setText:s,setCurrentPosition:p})]})},{label:"Export",contents:Object(g.jsx)(N,{waypoints:y,deleteSignal:S,sendDeleteSignal:I,setWaypoints:C})}]}),Object(g.jsx)(Fe,{droneLocations:0===n?h:[],currentPosition:b,onChange:C,disableWaypointEditing:0===n,waypoints:y,deleteSignal:S})]})}var Xe=Object(r.a)({palette:{primary:{main:"#272264"},secondary:{main:"#a7b1b8"}}});l.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(g.jsx)(a.a,{theme:Xe,children:Object(g.jsx)(He,{})})})}),document.getElementById("root"))},52:function(e,t,n){e.exports={fileInputContainer:"FileInput_fileInputContainer__2FREY",uploadInput:"FileInput_uploadInput__3LcYe",buttonBar:"FileInput_buttonBar__IRrE5",textarea:"FileInput_textarea__bwjhJ"}},65:function(e,t,n){e.exports={droneId:"Dronecard_droneId__1RcYD",boatIcon:"Dronecard_boatIcon__1ku68",locationMissing:"Dronecard_locationMissing__2w8WV"}},79:function(e,t,n){e.exports={csvDownloaderContainer:"CsvDownloader_csvDownloaderContainer__9mBnF",input:"CsvDownloader_input__3ATbp"}},92:function(e,t,n){e.exports={appContainer:"App_appContainer__3jRx1"}}},[[160,1,2]]]);
//# sourceMappingURL=main.2121d02e.chunk.js.map