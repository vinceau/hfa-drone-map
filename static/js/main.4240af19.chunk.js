(this["webpackJsonphfa-drone-map"]=this["webpackJsonphfa-drone-map"]||[]).push([[0],{108:function(e,n,t){e.exports={sidebar:"Sidebar_sidebar__2go77"}},122:function(e,n,t){},158:function(e,n,t){"use strict";t.r(n);t(121),t(122);var r=t(109),a=t(208),o=t(64),i=t(0),c=t.n(i),s=t(27),l=t.n(s),u=t(9),d=t(89),j=t.n(d),p=t(90),b=t.n(p),f=t(209),g=t(1),h=function(e){var n=e.deleteSignal,t=e.sendDeleteSignal,r=e.setWaypoints;return Object(g.jsx)(f.a,{onClick:function(){window.confirm("Are you sure you wish to delete these waypoints?")&&(r([]),t(!n))},variant:"outlined",color:"error",endIcon:Object(g.jsx)(b.a,{}),children:"Clear waypoints"})},x=t(207),v=t(91),O=t.n(v),y=function(e){var n=e.boatId,t=e.waypoints,r=e.disabled,a=void 0!==r&&r,o=e.filename,i=void 0===o?"data.csv":o,c=e.contentType,s=void 0===c?"data:text/csv;charset=utf-8,":c;return Object(g.jsx)(f.a,{disabled:a,onClick:function(){var e="boatId,waypointNumber,latitude,longitude\n";!function(e,n,t){if(navigator.msSaveBlob){var r=new Blob([e],{type:t});navigator.msSaveBlob(r,n)}else{var a=document.createElement("a");a.style.display="none",a.setAttribute("href",t+encodeURIComponent(e)),a.setAttribute("download",n),document.body.appendChild(a),a.click(),document.body.removeChild(a)}}(e+=t.map((function(e,t){return m(n,t,e)})).join("\n"),i,s)},variant:"contained",endIcon:Object(g.jsx)(O.a,{}),children:"Export"})},m=function(e,n,t){return"".concat(e,",").concat(n+1,",").concat(t.lat.toFixed(6),",").concat(t.long.toFixed(6))},C=t(78),w=t.n(C),S=function(e){var n=e.waypoints,t=c.a.useState(""),r=Object(u.a)(t,2),a=r[0],o=r[1];return Object(g.jsxs)("div",{className:w.a.csvDownloaderContainer,children:[Object(g.jsx)(x.a,{className:w.a.input,placeholder:"Boat ID",value:a,onChange:function(e){return o(e.target.value)}}),Object(g.jsx)(y,{disabled:!a||0===n.length,boatId:a,waypoints:n,children:"Download"})]})},I=t(216),k=t(217),_=t(221),L=t(220),D=t(215),N=t(218),E=t(219),F=function(e){var n=e.waypoints;return Object(g.jsx)(D.a,{component:I.a,children:Object(g.jsxs)(k.a,{size:"small",children:[Object(g.jsx)(N.a,{children:Object(g.jsxs)(E.a,{children:[Object(g.jsx)(L.a,{children:"#"}),Object(g.jsx)(L.a,{align:"right",children:"Longitude"}),Object(g.jsx)(L.a,{align:"right",children:"Latitude"})]})}),Object(g.jsx)(_.a,{children:0===n.length?Object(g.jsx)(E.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:Object(g.jsx)(L.a,{align:"center",colSpan:3,children:Object(g.jsx)("b",{children:"No waypoints added"})})}):n.map((function(e,n){return Object(g.jsxs)(E.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(g.jsx)(L.a,{component:"th",scope:"row",children:n+1}),Object(g.jsx)(L.a,{align:"right",children:e.long.toFixed(6)}),Object(g.jsx)(L.a,{align:"right",children:e.lat.toFixed(6)})]},n)}))})]})})},B=function(e){var n=e.waypoints,t=e.deleteSignal,r=e.sendDeleteSignal,a=e.setWaypoints;return Object(g.jsxs)("div",{children:[Object(g.jsx)(S,{waypoints:n}),Object(g.jsx)(h,{deleteSignal:t,sendDeleteSignal:r,setWaypoints:a}),Object(g.jsx)(F,{waypoints:n})]})},W=t(79),M=t.n(W),T=t(93),P=t(202),A=["id","lat","long","avgSpeed","avgBearing","avgCurrent","batteryVoltage"],R=function(e){var n=1;return/[SW]$/.test(e)&&(n=-1),n*parseFloat(e.substring(0,e.length-1))},V=t(103),J=t.n(V),U=t(106),G=t.n(U),Z=t(105),q=t.n(Z),z=t(104),Y=t.n(z),H=t(222),Q=t(223),X=t(224),$=t(204),K=function(e){return Math.max((e-11)/(13.61-11)*100,0)},ee=t(96),ne=t.n(ee),te=t(97),re=t.n(te),ae=t(98),oe=t.n(ae),ie=t(99),ce=t.n(ie),se=t(100),le=t.n(se),ue=t(101),de=t.n(ue),je=t(94),pe=t.n(je),be=t(102),fe=t.n(be),ge=t(95),he=t.n(ge),xe=function(e){var n=e.percent;if(isNaN(n))return null;var t=ve(n);return Object(g.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(g.jsx)("span",{style:{color:Oe(n)},children:Object(g.jsx)(t,{color:"inherit"})})," ",Object(g.jsxs)("span",{children:[n.toFixed(1),"%"]})]})},ve=function(e){return e<10?pe.a:e<20?he.a:e<30?ne.a:e<45?re.a:e<55?oe.a:e<65?ce.a:e<85?le.a:e<95?de.a:fe.a},Oe=function(e){return e<15?"red":e<45?"orange":"green"},ye=t(52),me=t.n(ye),Ce=function(e){var n=e.drone,t=e.onLocationClick,r=e.onStartWaypointClick,a=K(n.batteryVoltage),o=void 0===n.long||void 0===n.lat;return Object(g.jsx)(H.a,{variant:"outlined",style:{marginBottom:10},children:Object(g.jsx)(Q.a,{style:{padding:"10px 20px"},children:Object(g.jsxs)("div",{className:me.a.droneInfoContainer,children:[Object(g.jsxs)("div",{className:me.a.droneInfo,children:[Object(g.jsxs)("div",{className:me.a.droneName,children:[Object(g.jsx)(J.a,{className:me.a.boatIcon}),n.id]}),Object(g.jsx)(xe,{percent:a})]}),o?Object(g.jsx)($.a,{title:"This drone has missing data",children:Object(g.jsx)("div",{style:{color:"orange"},children:Object(g.jsx)(Y.a,{color:"inherit"})})}):Object(g.jsxs)("div",{children:[Object(g.jsx)($.a,{title:"Start a waypoint",children:Object(g.jsx)(X.a,{onClick:r,children:Object(g.jsx)(q.a,{})})}),Object(g.jsx)($.a,{title:"Center on this location",children:Object(g.jsx)(X.a,{onClick:t,children:Object(g.jsx)(G.a,{})})})]})]})})})},we=function(e){var n=e.drones,t=e.setCurrentPosition,r=e.setStartingWaypoint;if(!n)return null;return n.map((function(e){return Object(g.jsx)(Ce,{drone:e,onLocationClick:function(){return function(e){var n=e.lat,r=e.long;t&&t({lat:n,long:r})}(e)},onStartWaypointClick:function(){return r(e)}},e.id)}))},Se=t(53),Ie=t.n(Se),ke=function(e){var n=e.onSubmit,t=e.text,r=e.setText,a=e.drones,i=e.setDrones,s=e.setCurrentPosition,l=e.setStartingWaypoint,u=Object(o.b)().enqueueSnackbar,d=c.a.useRef(null),j=function(){var e=Object(T.a)(M.a.mark((function e(n){var t,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.target.files,console.log(t),e.next=4,Promise.all(Array.from(t).map((function(e){return n=e,new Promise((function(e,t){var r=new FileReader;r.onabort=function(){return t("file reading was aborted")},r.onerror=function(){return t("file reading has failed")},r.readAsText?(r.addEventListener("load",(function(){var n=null!=this.resultString?this.resultString:this.result;e(n)}),!1),r.readAsText(n)):t("Failed to read file")}));var n})));case 4:a=e.sent,r(a.join("\n"));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:Ie.a.fileInputContainer,children:[Object(g.jsx)("input",{type:"file",id:"fileInput",name:"fileInput",ref:d,multiple:!0,onChange:j,className:Ie.a.uploadInput}),Object(g.jsxs)("div",{className:Ie.a.buttonBar,children:[Object(g.jsx)(f.a,{onClick:function(){d.current&&d.current.click()},variant:"contained",color:"secondary",children:"Import CSV"}),Object(g.jsx)(f.a,{onClick:function(){n([]),i("")},variant:"contained",color:"error",children:"Clear"}),Object(g.jsx)(f.a,{onClick:function(){var e=function(e){var n={};e.split("\n").forEach((function(e,t){console.log("line: ",e);var r=e.split(",");if(r.length<2)return null;console.log(r),console.log("chunks length: ",r.length);var a=r[0],o=r[1];n[o]||(n[o]={id:o});try{if("P"===a)n[o].batteryVoltage=r[2];else if("M"===a){var i=R(r[2]),c=R(r[3]),s=r[4],l=r[5],u=r[6];n[o].lat=i,n[o].long=c,n[o].avgSpeed=s,n[o].avgBearing=l,n[o].avgCurrent=u}}catch(d){console.warn("Error processing line ".concat(t+1,", drone id: ").concat(o))}n[o].complete=A.reduce((function(e,t){return e&&!!n[o][t]}),!0),console.log(o,n[o])}));var t=Object.values(n),r=t.filter((function(e){return!e.complete})).map((function(e){return e.id}));return console.log(r),{values:t,errors:r}}(t),r=e.values,a=e.errors;console.log(r),a.length>0&&u("Missing data for drone(s): ".concat(a.join(", ")),{variant:"warning"}),i(r),n&&n(r)},variant:"contained",color:"primary",children:"Show Drones"})]}),Object(g.jsx)(P.a,{className:Ie.a.textarea,minRows:20,onChange:function(e){return r(e.target.value)},value:t}),Object(g.jsx)(we,{drones:a,setCurrentPosition:s,setStartingWaypoint:l})]})},_e=t(26),Le=t(15),De=t.n(Le),Ne={"circle-stroke-width":2,"circle-radius":8,"circle-blur":.15,"circle-color":"rgba(55, 112, 198, 0.8)","circle-stroke-color":"white"},Ee=function(e,n){return e?n||e:"Missing Data"},Fe=function(e){var n=c.a.useContext(_e.c);return c.a.useEffect((function(){if(n){var e=new De.a.Popup({closeButton:!1,closeOnClick:!1});n.on("mouseenter","position-marker",(function(t){n.getCanvas().style.cursor="pointer";for(var r=t.features[0].geometry.coordinates.slice(),a=t.features[0].properties,o="";Math.abs(t.lngLat.lng-r[0])>180;)r[0]+=t.lngLat.lng>r[0]?360:-360;for(var i in e.setLngLat(r).addTo(n),a){var c=i+": ";"DroneID"===i?o+=c="<strong>"+a[i]+"</strong><br>":"id"!==i&&(o+=c+a[i]+"<br>",console.log(a[i]),e.setHTML(o))}})),n.on("click","position-marker",(function(e){n.flyTo({center:e.features[0].geometry.coordinates})})),n.on("mouseenter","position-marker",(function(){n.getCanvas().style.cursor="pointer"})),n.on("mouseleave","position-marker",(function(){n.getCanvas().style.cursor="",e.remove()}))}}),[n]),Object(g.jsx)(_e.b,{type:"circle",id:"position-marker",paint:Ne,children:e.droneLocations.map((function(e,n){return Object(g.jsx)(_e.a,{coordinates:[e.long,e.lat],properties:{DroneID:Ee(e.id),Longitude:Ee(e.long),Latitude:Ee(e.lat),"Battery Level":Ee(e.batteryVoltage,K(e.batteryVoltage)),"Average Speed":Ee(e.avgSpeed,e.avgSpeed+" NM/h"),"Average Bearing":Ee(e.avgBearing),"Average Current":Ee(e.avgCurrent)}},n)}))})},Be=function(e){var n=c.a.useContext(_e.c),t=e.deleteSignal,r=e.disabled,a=e.initialWaypoints,o=Object(i.useRef)(null),s=Object(i.useRef)(null),l=Object(i.useRef)(null),d=function(n){var t=n.map((function(e){var n=Object(u.a)(e,2);return{long:n[0],lat:n[1]}}));e.onChange&&e.onChange(t)};function j(e,n){s.current.features.splice(e,0,function(e){return{type:"Feature",geometry:{type:"Point",coordinates:e},properties:{description:"<p>"+JSON.stringify(e)+"</p>",tag:JSON.stringify(e)}}}(n)),l.current.features[0].geometry.coordinates.splice(e,0,n),p(),d(l.current.features[0].geometry.coordinates)}function p(){n.getSource("lines").setData(l.current),n.getSource("points").setData(s.current)}function b(e){var t,r=[e.point.x,e.point.y],a=r[0],o=r[1],i=n.queryRenderedFeatures([[a-5,o-5],[a+5,o+5]],{layers:["points"]});return i.length>0?(t=i[0].properties.tag,s.current.features.findIndex((function(e){return e.properties.tag===t}))):null}function f(e){if(o.current.a&&o.current.a.index===e)return function(e){s.current.features.splice(e,1),l.current.features[0].geometry.coordinates.splice(e,1),p(),d(l.current.features[0].geometry.coordinates)}(e),void h();o.current.b&&o.current.b.marker.remove(),o.current.a&&(o.current.b=o.current.a);var t=(new De.a.Marker).setLngLat(s.current.features[e].geometry.coordinates).addTo(n);o.current.a={index:e,marker:t}}function g(e){0===s.current.features.length?(j(0,e),f(0)):2===Object.keys(o.current).length?function(e){var n=o.current.a.index,t=o.current.b.index;if(n>t){var r=[t,n];n=r[0],t=r[1]}t-n===1&&(j(t,e),h())}(e):1===Object.keys(o.current).length?function(e){var n=s.current.features.length;o.current.a.index===s.current.features.length-1?(j(n,e),h(),f(n)):0===o.current.a.index&&(j(0,e),h(),f(0))}(e):n.panTo(s.current.features[0].geometry.coordinates)}function h(){o.current.a&&o.current.a.marker.remove(),o.current.b&&o.current.b.marker.remove(),o.current={}}function x(e){27===e.keyCode&&h()}function v(e){var n=b(e);null!==n?f(n):g([e.lngLat.lng,e.lngLat.lat])}return c.a.useEffect((function(){if(n&&!r)return function(){o.current={},l.current={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:[]}}]},s.current={type:"FeatureCollection",features:[]},n.addSource("lines",{type:"geojson",data:l.current}),n.addSource("points",{type:"geojson",data:s.current}),n.addLayer({id:"lines",type:"line",source:"lines",paint:{"line-color":"yellow","line-opacity":.75,"line-width":5}}),n.addLayer({id:"points",type:"circle",source:"points",paint:{"circle-radius":6,"circle-color":"#B42222"}});for(var e=0;e<a.length;e++)j(e,[a[e].long,a[e].lat]);a.length>0&&(n.panTo(s.current.features[0].geometry.coordinates),1===a.length&&f(0))}(),n.on("click",v),window.addEventListener("keydown",x),function(){n.off("click",v),window.removeEventListener("keydown",x),n.removeLayer("lines"),n.removeSource("lines"),n.removeLayer("points"),n.removeSource("points"),h()}}),[n,t,r]),null},We=function(e){var n=e.currentPosition,t=c.a.useContext(_e.c);function r(){t.setPitch(0)}return c.a.useEffect((function(){n.long&&n.lat&&t.panTo([n.long,n.lat])}),[n]),c.a.useEffect((function(){if(t)return t.on("click",r),t.on("contextmenu",r),function(){t.off("click",r),t.off("contextmenu",r)}}),[t]),null},Me=Object(_e.g)({accessToken:"pk.eyJ1Ijoic3BpZGVyMjI5OCIsImEiOiJja3VzOGN1cWUwY2M5MndtZmZ1Nm0wdHZqIn0.rsbsUbg1W7V0Ev9aAXGGsA"}),Te=function(e){var n=e.currentPosition,t=e.droneLocations,r=e.onChange,a=e.waypoints,o=e.deleteSignal,i=e.disableWaypointEditing;return Object(g.jsx)("div",{children:Object(g.jsxs)(Me,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100%",width:"100%"},children:[Object(g.jsx)(_e.f,{}),Object(g.jsx)(_e.e,{}),Object(g.jsx)(_e.d,{}),Object(g.jsx)(We,{currentPosition:n}),Object(g.jsx)(Fe,{droneLocations:t}),Object(g.jsx)(Be,{onChange:r,initialWaypoints:a,deleteSignal:o,disabled:i})]})})},Pe=t(66),Ae=t(110),Re=t(212),Ve=t(210),Je=t(213),Ue=t(206),Ge=t(211),Ze=t(107),qe=t.n(Ze),ze=t(108),Ye=t.n(ze),He=["children","value","index"];function Qe(e){var n=e.children,t=e.value,r=e.index,a=Object(Ae.a)(e,He);return Object(g.jsx)("div",Object(Pe.a)(Object(Pe.a)({role:"tabpanel",hidden:t!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r)},a),{},{children:t===r&&Object(g.jsx)(Ve.a,{sx:{p:3},children:Object(g.jsx)(Ge.a,{children:n})})}))}var Xe=function(e){var n=e.panels,t=e.currentIndex,r=e.setCurrentIndex,a=t;return Object(g.jsxs)(Ve.a,{className:Ye.a.sidebar,children:[Object(g.jsx)(Re.a,{position:"static",children:Object(g.jsx)(Ue.a,{value:a,onChange:function(e,n){r(n)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth",children:n.map((function(e,n){return Object(g.jsx)(Je.a,Object(Pe.a)({label:e.label},{id:"full-width-tab-".concat(t=n),"aria-controls":"full-width-tabpanel-".concat(t)}),e.label);var t}))})}),Object(g.jsx)(qe.a,{index:a,onChangeIndex:function(e){r(e)},children:n.map((function(e,n){return Object(g.jsx)(Qe,{value:a,index:n,children:e.contents},e.label)}))})]})};function $e(){var e=c.a.useState(0),n=Object(u.a)(e,2),t=n[0],r=n[1],a=c.a.useState("M,UL997,37.821608S,145.313996E,470668.68,3,3.4\nP,UL997,12.68,26.3,3.4,41.3,0.0"),o=Object(u.a)(a,2),i=o[0],s=o[1],l=c.a.useState(""),d=Object(u.a)(l,2),p=d[0],b=d[1],f=c.a.useState({lat:-37.8136,long:144.9631}),h=Object(u.a)(f,2),x=h[0],v=h[1],O=c.a.useState([]),y=Object(u.a)(O,2),m=y[0],C=y[1],w=c.a.useState([]),S=Object(u.a)(w,2),I=S[0],k=S[1],_=c.a.useState(!1),L=Object(u.a)(_,2),D=L[0],N=L[1];return Object(g.jsxs)("div",{className:j.a.appContainer,children:[Object(g.jsx)(Xe,{currentIndex:t,setCurrentIndex:r,panels:[{label:"Import",contents:Object(g.jsx)("div",{children:Object(g.jsx)(ke,{onSubmit:C,text:i,setText:s,drones:p,setDrones:b,setCurrentPosition:v,setStartingWaypoint:function(e){k([e]),r(1)}})})},{label:"Export",contents:Object(g.jsx)(B,{waypoints:I,deleteSignal:D,sendDeleteSignal:N,setWaypoints:k})}]}),Object(g.jsx)(Te,{droneLocations:0===t?m:[],currentPosition:x,onChange:k,disableWaypointEditing:0===t,waypoints:I,deleteSignal:D})]})}var Ke=Object(r.a)({palette:{primary:{main:"#272264"},secondary:{main:"#a7b1b8"}}});l.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(g.jsx)(a.a,{theme:Ke,children:Object(g.jsx)($e,{})})})}),document.getElementById("root"))},52:function(e,n,t){e.exports={droneInfoContainer:"DroneCard_droneInfoContainer__2hapw",droneInfo:"DroneCard_droneInfo__tLaf8",droneName:"DroneCard_droneName__1_muf",boatIcon:"DroneCard_boatIcon__10MQA",locationMissing:"DroneCard_locationMissing__2tayT"}},53:function(e,n,t){e.exports={fileInputContainer:"FileInput_fileInputContainer__2FREY",uploadInput:"FileInput_uploadInput__3LcYe",buttonBar:"FileInput_buttonBar__IRrE5",textarea:"FileInput_textarea__bwjhJ"}},78:function(e,n,t){e.exports={csvDownloaderContainer:"CsvDownloader_csvDownloaderContainer__9mBnF",input:"CsvDownloader_input__3ATbp"}},89:function(e,n,t){e.exports={appContainer:"App_appContainer__3jRx1"}}},[[158,1,2]]]);
//# sourceMappingURL=main.4240af19.chunk.js.map