(this["webpackJsonphfa-drone-map"]=this["webpackJsonphfa-drone-map"]||[]).push([[0],{12:function(e,t,n){e.exports={appContainer:"App_appContainer__3jRx1"}},13:function(e,t,n){e.exports={fileInputContainer:"FileInput_fileInputContainer__3K1pc"}},14:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=(n(19),n(2)),u=n(3),c=n.n(u),s=n(5),p=n(10),f=(n(24),Object(p.b)({accessToken:"pk.eyJ1Ijoic3BpZGVyMjI5OCIsImEiOiJja3VzOGN1cWUwY2M5MndtZmZ1Nm0wdHZqIn0.rsbsUbg1W7V0Ev9aAXGGsA"})),m=function(){return r.a.createElement("div",null,r.a.createElement(f,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100%",width:"100%"}},r.a.createElement(p.a.Consumer,null,(function(e){var t={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:[[-122.019807,45.632433]]}}]};e.addSource("trace",{type:"geojson",data:t}),e.addLayer({id:"trace",type:"line",source:"trace",paint:{"line-color":"yellow","line-opacity":.75,"line-width":5}}),e.panTo(t.features[0].geometry.coordinates[0]),e.on("click",function(){var n=Object(s.a)(c.a.mark((function n(a){var r,o,i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=a.lngLat,o=r.lng,i=r.lat,console.log([o,i]),t.features[0].geometry.coordinates.push([o,i]),e.getSource("trace").setData(t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}))))},d=n(12),g=n.n(d),h=function(e){return parseFloat(e.substring(0,e.length-1))},v=n(13),b=n.n(v),y=function(e){var t=r.a.useState("M,UL997,37.821608S,145.313996E,470668.68,3,3.4\nP,UL997,12.68,26.3,3.4,41.3,0.0"),n=Object(l.a)(t,2),a=n[0],o=n[1],i=r.a.useState(""),u=Object(l.a)(i,2),p=u[0],f=u[1],m=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files,console.log(n),e.next=4,Promise.all(Array.from(n).map((function(e){return t=e,new Promise((function(e,n){var a=new FileReader;a.onabort=function(){return n("file reading was aborted")},a.onerror=function(){return n("file reading has failed")},a.readAsText?(a.addEventListener("load",(function(){var t=null!=this.resultString?this.resultString:this.result;e(t)}),!1),a.readAsText(t)):n("Failed to read file")}));var t})));case 4:a=e.sent,o(a.join("\n"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:b.a.fileInputContainer},r.a.createElement("label",{htmlFor:"fileInput"},"Select a CSV file:"),r.a.createElement("input",{type:"file",id:"fileInput",name:"fileInput",multiple:!0,onChange:m}),r.a.createElement("textarea",{value:a,onChange:function(e){return o(e.target.value)},rows:20}),r.a.createElement("button",{onClick:function(){var t=function(e){return e.split("\n").map((function(e){console.log(e);var t=e.split(",");return 0===t.length?null:(console.log("chunks length: ",t.length),"M"!==t[0]||7!==t.length?null:{id:t[1],lat:h(t[2]),long:h(t[3])})})).filter((function(e){return null!==e}))}(a);console.log(t),f(JSON.stringify(t,null,2)),e.onSubmit&&e.onSubmit(t)}},"submit"),r.a.createElement("pre",null,p))};var E=function(){var e=r.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{className:g.a.appContainer},r.a.createElement(y,{onSubmit:function(e){return a(e)}}),r.a.createElement(m,{droneLocations:n}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d6809e40.chunk.js.map