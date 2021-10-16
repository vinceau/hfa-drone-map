(this["webpackJsonphfa-drone-map"]=this["webpackJsonphfa-drone-map"]||[]).push([[0],{100:function(e,n,t){e.exports={droneId:"Dronecard_droneId__1RcYD"}},105:function(e,n,t){e.exports={sidebar:"Sidebar_sidebar__2go77"}},117:function(e,n,t){},153:function(e,n,t){"use strict";t.r(n);t(116),t(117);var r=t(106),a=t(192),o=t(60),i=t(0),c=t.n(i),s=t(29),l=t.n(s),u=t(12),d=t(88),j=t.n(d),b=t(89),p=t.n(b),f=t(193),g=t(1),h=function(e){var n=e.deleteSignal,t=e.sendDeleteSignal,r=e.setWaypoints;return Object(g.jsx)(f.a,{onClick:function(){window.confirm("Are you sure you wish to delete these waypoints?")&&(r([]),t(!n))},variant:"outlined",color:"error",endIcon:Object(g.jsx)(p.a,{}),children:"Clear waypoints"})},x=t(190),v=t(90),O=t.n(v),m=function(e){var n=e.boatId,t=e.waypoints,r=e.disabled,a=void 0!==r&&r,o=e.filename,i=void 0===o?"data.csv":o,c=e.contentType,s=void 0===c?"data:text/csv;charset=utf-8,":c;return Object(g.jsx)(f.a,{disabled:a,onClick:function(){var e="boatId,waypointNumber,latitude,longitude\n";!function(e,n,t){if(navigator.msSaveBlob){var r=new Blob([e],{type:t});navigator.msSaveBlob(r,n)}else{var a=document.createElement("a");a.style.display="none",a.setAttribute("href",t+encodeURIComponent(e)),a.setAttribute("download",n),document.body.appendChild(a),a.click(),document.body.removeChild(a)}}(e+=t.map((function(e,t){return y(n,t,e)})).join("\n"),i,s)},variant:"contained",endIcon:Object(g.jsx)(O.a,{}),children:"Download"})},y=function(e,n,t){return"".concat(e,",").concat(n+1,",").concat(t.lat.toFixed(6),",").concat(t.long.toFixed(6))},w=t(73),C=t.n(w),S=function(e){var n=e.waypoints,t=c.a.useState(""),r=Object(u.a)(t,2),a=r[0],o=r[1];return Object(g.jsxs)("div",{className:C.a.csvDownloaderContainer,children:[Object(g.jsx)(x.a,{className:C.a.input,placeholder:"Boat ID",value:a,onChange:function(e){return o(e.target.value)}}),Object(g.jsx)(m,{disabled:!a||0===n.length,boatId:a,waypoints:n,children:"Download"})]})},I=t(199),k=t(200),L=t(204),_=t(203),D=t(198),B=t(201),F=t(202),E=function(e){var n=e.waypoints;return Object(g.jsx)(D.a,{component:I.a,children:Object(g.jsxs)(k.a,{size:"small",children:[Object(g.jsx)(B.a,{children:Object(g.jsxs)(F.a,{children:[Object(g.jsx)(_.a,{children:"#"}),Object(g.jsx)(_.a,{align:"right",children:"Longitude"}),Object(g.jsx)(_.a,{align:"right",children:"Latitude"})]})}),Object(g.jsx)(L.a,{children:0===n.length?Object(g.jsx)(F.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:Object(g.jsx)(_.a,{align:"center",colSpan:3,children:Object(g.jsx)("b",{children:"No waypoints added"})})}):n.map((function(e,n){return Object(g.jsxs)(F.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(g.jsx)(_.a,{component:"th",scope:"row",children:n+1}),Object(g.jsx)(_.a,{align:"right",children:e.long}),Object(g.jsx)(_.a,{align:"right",children:e.lat})]},n)}))})]})})},N=function(e){var n=e.waypoints,t=e.deleteSignal,r=e.sendDeleteSignal,a=e.setWaypoints;return Object(g.jsxs)("div",{children:[Object(g.jsx)(S,{waypoints:n}),Object(g.jsx)(h,{deleteSignal:t,sendDeleteSignal:r,setWaypoints:a}),Object(g.jsx)(E,{waypoints:n})]})},W=t(74),M=t.n(W),A=t(91),R=t(103),T=t.n(R),P=t(102),V=t.n(P),J=t(186),U=["id","lat","long","avgSpeed","avgBearing","avgCurrent","batteryVoltage"],G=function(e){var n=1;return/[SW]$/.test(e)&&(n=-1),n*parseFloat(e.substring(0,e.length-1))},Y=t(101),Z=t.n(Y),q=t(205),z=t(206),H=function(e){return((e-11)/(13.61-11)*200).toFixed(2)},X=t(94),$=t.n(X),K=t(95),Q=t.n(K),ee=t(75),ne=t.n(ee),te=t(96),re=t.n(te),ae=t(97),oe=t.n(ae),ie=t(98),ce=t.n(ie),se=t(92),le=t.n(se),ue=t(93),de=t.n(ue),je=t(99),be=t.n(je),pe=function(e){var n=e.pc;switch(n<95?Math.floor(n/10):10){case 0:return Object(g.jsx)(le.a,{});case 1:return Object(g.jsx)(de.a,{});case 2:return Object(g.jsx)($.a,{});case 3:case 4:return Object(g.jsx)(Q.a,{});case 5:case 10:return Object(g.jsx)(ne.a,{});case 6:case 7:return Object(g.jsx)(re.a,{});case 8:return Object(g.jsx)(oe.a,{});case 9:return Object(g.jsx)(ce.a,{})}return Object(g.jsx)(be.a,{})},fe=t(100),ge=t.n(fe),he=function(e){var n=e.drone,t=H(n.batteryVoltage);return Object(g.jsx)(q.a,{variant:"outlined",children:Object(g.jsx)(z.a,{children:Object(g.jsxs)("div",{className:ge.a.droneId,children:[Object(g.jsxs)("div",{children:[n.id," ",Object(g.jsx)(pe,{pc:t})]}),Object(g.jsx)("div",{children:Object(g.jsx)(Z.a,{onClick:function(){return console.log([n.long,n.lat])}})})]})})})},xe=function(e){var n=e.drones;return n?n.map((function(e){return Object(g.jsx)(he,{drone:e},e.id)})):null},ve=t(50),Oe=t.n(ve),me=function(e){var n=c.a.useState("M,UL997,37.821608S,145.313996E,470668.68,3,3.4\nP,UL997,12.68,26.3,3.4,41.3,0.0"),t=Object(u.a)(n,2),r=t[0],a=t[1],i=c.a.useState(""),s=Object(u.a)(i,2),l=s[0],d=s[1],j=Object(o.b)().enqueueSnackbar,b=c.a.useRef(null),p=function(){var e=Object(A.a)(M.a.mark((function e(n){var t,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.target.files,console.log(t),e.next=4,Promise.all(Array.from(t).map((function(e){return n=e,new Promise((function(e,t){var r=new FileReader;r.onabort=function(){return t("file reading was aborted")},r.onerror=function(){return t("file reading has failed")},r.readAsText?(r.addEventListener("load",(function(){var n=null!=this.resultString?this.resultString:this.result;e(n)}),!1),r.readAsText(n)):t("Failed to read file")}));var n})));case 4:r=e.sent,a(r.join("\n"));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:Oe.a.fileInputContainer,children:[Object(g.jsx)("input",{type:"file",id:"fileInput",name:"fileInput",ref:b,multiple:!0,onChange:p,className:Oe.a.uploadInput}),Object(g.jsxs)("div",{className:Oe.a.buttonBar,children:[Object(g.jsx)(f.a,{onClick:function(){b.current&&b.current.click()},endIcon:Object(g.jsx)(V.a,{}),variant:"contained",color:"secondary",children:"Upload CSV"}),Object(g.jsx)(f.a,{onClick:function(){var n=function(e){var n={},t=[],r=0;e.split("\n").forEach((function(e){var t=e.split(",");if(0===t.length||7!==t.length)return null;console.log(t),console.log("chunks length: ",t.length);var r=t[0],a=t[1];if(n[a]||(n[a]={id:a}),"P"===r)n[a].batteryVoltage=t[2];else if("M"===r){var o=G(t[2]),i=G(t[3]),c=t[4],s=t[5],l=t[6];n[a].lat=o,n[a].long=i,n[a].avgSpeed=c,n[a].avgBearing=s,n[a].avgCurrent=l}for(var u=!0,d=1;d<U.length;d++)n[a][U[d]]||(n[a][U[d]]="Missing Data",u=!1);n[a].complete=u}));for(var a=Object.values(n),o=0;o<a.length;o++)a[o].complete||(r+=1,t.push(a[o].id));return{values:a,errors:r,where:t}}(r),t=n.values,a=n.errors,o=n.where;if(console.log(t),a>0)for(var i=0;i<o.length;i++)j("Warning message: Please import missing data for drone "+o[i],{variant:"warning"});d(t),e.onSubmit&&e.onSubmit(t)},variant:"contained",color:"primary",endIcon:Object(g.jsx)(T.a,{}),children:"Submit"})]}),Object(g.jsx)(J.a,{className:Oe.a.textarea,minRows:20,onChange:function(e){return a(e.target.value)},value:r}),Object(g.jsx)(xe,{drones:l})]})},ye=t(28),we=t(14),Ce=t.n(we),Se={"circle-stroke-width":2,"circle-radius":8,"circle-blur":.15,"circle-color":"#3770C6","circle-stroke-color":"white"},Ie=function(e){var n=c.a.useContext(ye.c);return c.a.useEffect((function(){if(n){var e=new Ce.a.Popup({closeButton:!1,closeOnClick:!1});n.on("mouseenter","position-marker",(function(t){n.getCanvas().style.cursor="pointer";for(var r=t.features[0].geometry.coordinates.slice(),a=t.features[0].properties,o="";Math.abs(t.lngLat.lng-r[0])>180;)r[0]+=t.lngLat.lng>r[0]?360:-360;for(var i in e.setLngLat(r).addTo(n),a){var c=i+": ";"DroneID"===i?o+=c="<strong>"+a[i]+"</strong><br>":"id"!==i&&(o+=c+a[i]+"<br>",console.log(a[i]),e.setHTML(o))}})),n.on("click","position-marker",(function(e){n.flyTo({center:e.features[0].geometry.coordinates})})),n.on("mouseenter","position-marker",(function(){n.getCanvas().style.cursor="pointer"})),n.on("mouseleave","position-marker",(function(){n.getCanvas().style.cursor="",e.remove()}))}}),[n]),Object(g.jsx)(ye.b,{type:"circle",id:"position-marker",paint:Se,children:e.droneLocations.map((function(e,n){return Object(g.jsx)(ye.a,{coordinates:[e.long,e.lat],properties:{DroneID:e.id,Longitude:e.long,Latitude:e.lat,"Battery Level":H(e.batteryVoltage),"Average Speed":e.avgSpeed+" NM/h","Average Bearing":e.avgBearing,"Average Current":e.avgCurrent}},n)}))})},ke=function(e){var n=c.a.useContext(ye.c),t=e.deleteWaypoints,r=e.disabled,a=Object(i.useRef)(null),o=Object(i.useRef)(null),s=Object(i.useRef)(null),l=function(n){var t=n.map((function(e){var n=Object(u.a)(e,2);return{long:n[0],lat:n[1]}}));e.onChange&&e.onChange(t)};function d(e,n){o.current.features.splice(e,0,function(e){return{type:"Feature",geometry:{type:"Point",coordinates:e},properties:{description:"<p>"+JSON.stringify(e)+"</p>",tag:JSON.stringify(e)}}}(n)),s.current.features[0].geometry.coordinates.splice(e,0,n),j(),l(s.current.features[0].geometry.coordinates)}function j(){n.getSource("lines").setData(s.current),n.getSource("points").setData(o.current)}function b(e){var t,r=[e.point.x,e.point.y],a=r[0],i=r[1],c=n.queryRenderedFeatures([[a-5,i-5],[a+5,i+5]],{layers:["points"]});return c.length>0?(t=c[0].properties.tag,o.current.features.findIndex((function(e){return e.properties.tag===t}))):null}function p(e){if(a.current.a&&a.current.a.index===e)return function(e){o.current.features.splice(e,1),s.current.features[0].geometry.coordinates.splice(e,1),j(),l(s.current.features[0].geometry.coordinates)}(e),void g();a.current.b&&a.current.b.marker.remove(),a.current.a&&(a.current.b=a.current.a);var t=(new Ce.a.Marker).setLngLat(o.current.features[e].geometry.coordinates).addTo(n);a.current.a={index:e,marker:t}}function f(e){0===o.current.features.length?(d(0,e),p(0)):2===Object.keys(a.current).length?function(e){var n=a.current.a.index,t=a.current.b.index;if(n>t){var r=[t,n];n=r[0],t=r[1]}t-n===1&&(d(t,e),g())}(e):1===Object.keys(a.current).length?function(e){var n=o.current.features.length;a.current.a.index===o.current.features.length-1?(d(n,e),g(),p(n)):0===a.current.a.index&&(d(0,e),g(),p(0))}(e):n.panTo(o.current.features[0].geometry.coordinates)}function g(){a.current.a&&a.current.a.marker.remove(),a.current.b&&a.current.b.marker.remove(),a.current={}}function h(e){27===e.keyCode&&g()}function x(e){var n=b(e);null!==n?p(n):f([e.lngLat.lng,e.lngLat.lat])}function v(){n.setBearing(0),n.setPitch(0)}return c.a.useEffect((function(){if(n&&!r)return a.current={},s.current={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:[]}}]},o.current={type:"FeatureCollection",features:[]},n.addSource("lines",{type:"geojson",data:s.current}),n.addSource("points",{type:"geojson",data:o.current}),n.addLayer({id:"lines",type:"line",source:"lines",paint:{"line-color":"yellow","line-opacity":.75,"line-width":5}}),n.addLayer({id:"points",type:"circle",source:"points",paint:{"circle-radius":6,"circle-color":"#B42222"}}),n.on("click",x),n.on("contextmenu",v),window.addEventListener("keydown",h),function(){n.off("click",x),n.off("contextmenu",v),window.removeEventListener("keydown",h),n.removeLayer("lines"),n.removeSource("lines"),n.removeLayer("points"),n.removeSource("points"),g(),l([])}}),[n,t,r]),null},Le=function(){var e=c.a.useContext(ye.c);function n(){e.setPitch(0)}return c.a.useEffect((function(){if(e)return e.on("click",n),e.on("contextmenu",n),function(){e.off("click",n),e.off("contextmenu",n)}}),[e]),null},_e=Object(ye.e)({accessToken:"pk.eyJ1Ijoic3BpZGVyMjI5OCIsImEiOiJja3VzOGN1cWUwY2M5MndtZmZ1Nm0wdHZqIn0.rsbsUbg1W7V0Ev9aAXGGsA"}),De=function(e){var n=e.droneLocations,t=e.onChange,r=e.waypoints,a=e.deleteSignal,o=e.disableWaypointEditing;return Object(g.jsx)("div",{children:Object(g.jsxs)(_e,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100%",width:"100%"},children:[Object(g.jsx)(ye.d,{}),Object(g.jsx)(Le,{}),Object(g.jsx)(Ie,{droneLocations:n}),Object(g.jsx)(ke,{onChange:t,initialWaypoints:r,deleteSignal:a,disabled:o})]})})},Be=function(e){var n=e.droneLocations,t=e.setWaypoints,r=e.exportMode;return Object(g.jsx)(f.a,{onClick:function(){n.length>0&&(t([n[0]]),r())},variant:"contained",color:"primary",children:"Start Creating Waypoints from First Drone"})},Fe=t(62),Ee=t(107),Ne=t(196),We=t(194),Me=t(197),Ae=t(189),Re=t(195),Te=t(104),Pe=t.n(Te),Ve=t(105),Je=t.n(Ve),Ue=["children","value","index"];function Ge(e){var n=e.children,t=e.value,r=e.index,a=Object(Ee.a)(e,Ue);return Object(g.jsx)("div",Object(Fe.a)(Object(Fe.a)({role:"tabpanel",hidden:t!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r)},a),{},{children:t===r&&Object(g.jsx)(We.a,{sx:{p:3},children:Object(g.jsx)(Re.a,{children:n})})}))}var Ye=function(e){var n=e.panels,t=e.currentIndex,r=e.setCurrentIndex,a=t;return Object(g.jsxs)(We.a,{className:Je.a.sidebar,children:[Object(g.jsx)(Ne.a,{position:"static",children:Object(g.jsx)(Ae.a,{value:a,onChange:function(e,n){r(n)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth",children:n.map((function(e,n){return Object(g.jsx)(Me.a,Object(Fe.a)({label:e.label},{id:"full-width-tab-".concat(t=n),"aria-controls":"full-width-tabpanel-".concat(t)}),e.label);var t}))})}),Object(g.jsx)(Pe.a,{index:a,onChangeIndex:function(e){r(e)},children:n.map((function(e,n){return Object(g.jsx)(Ge,{value:a,index:n,children:e.contents},e.label)}))})]})};function Ze(){var e=c.a.useState(0),n=Object(u.a)(e,2),t=n[0],r=n[1],a=c.a.useState([]),o=Object(u.a)(a,2),i=o[0],s=o[1],l=c.a.useState([]),d=Object(u.a)(l,2),b=d[0],p=d[1],f=c.a.useState(!1),h=Object(u.a)(f,2),x=h[0],v=h[1];return Object(g.jsxs)("div",{className:j.a.appContainer,children:[Object(g.jsx)(Ye,{currentIndex:t,setCurrentIndex:r,panels:[{label:"Import",contents:Object(g.jsxs)("div",{children:[Object(g.jsx)(Be,{droneLocations:i,setWaypoints:p,exportMode:function(){return r(1)}}),Object(g.jsx)(me,{onSubmit:s})]})},{label:"Export",contents:Object(g.jsx)(N,{waypoints:b,deleteSignal:x,sendDeleteSignal:v,setWaypoints:p})}]}),Object(g.jsx)(De,{droneLocations:i,onChange:p,disableWaypointEditing:0===t,waypoints:b,deleteSignal:x})]})}var qe=Object(r.a)({palette:{primary:{main:"#272264"},secondary:{main:"#a7b1b8"}}});l.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(g.jsx)(a.a,{theme:qe,children:Object(g.jsx)(Ze,{})})})}),document.getElementById("root"))},50:function(e,n,t){e.exports={fileInputContainer:"FileInput_fileInputContainer__2FREY",uploadInput:"FileInput_uploadInput__3LcYe",buttonBar:"FileInput_buttonBar__IRrE5",textarea:"FileInput_textarea__bwjhJ"}},73:function(e,n,t){e.exports={csvDownloaderContainer:"CsvDownloader_csvDownloaderContainer__9mBnF",input:"CsvDownloader_input__3ATbp"}},88:function(e,n,t){e.exports={appContainer:"App_appContainer__3jRx1"}}},[[153,1,2]]]);
//# sourceMappingURL=main.6315b6be.chunk.js.map