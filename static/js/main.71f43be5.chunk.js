(this["webpackJsonphfa-drone-map"]=this["webpackJsonphfa-drone-map"]||[]).push([[0],{12:function(e,t,n){e.exports={appContainer:"App_appContainer__3jRx1"}},13:function(e,t,n){e.exports={fileInputContainer:"FileInput_fileInputContainer__3K1pc"}},14:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=(n(19),n(2)),u=n.n(i),c=n(5),s=n(10),p=(n(24),Object(s.b)({accessToken:"pk.eyJ1Ijoic3BpZGVyMjI5OCIsImEiOiJja3VzOGN1cWUwY2M5MndtZmZ1Nm0wdHZqIn0.rsbsUbg1W7V0Ev9aAXGGsA"})),f=function(){return r.a.createElement("div",null,r.a.createElement(p,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100%",width:"100%"}},r.a.createElement(s.a.Consumer,null,(function(e){var t={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:[[-122.019807,45.632433]]}}]};e.addSource("trace",{type:"geojson",data:t}),e.addLayer({id:"trace",type:"line",source:"trace",paint:{"line-color":"yellow","line-opacity":.75,"line-width":5}}),e.panTo(t.features[0].geometry.coordinates[0]),e.on("click",function(){var n=Object(c.a)(u.a.mark((function n(a){var r,l,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=a.lngLat,l=r.lng,o=r.lat,console.log([l,o]),t.features[0].geometry.coordinates.push([l,o]),e.getSource("trace").setData(t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}))))},m=n(12),d=n.n(m),g=n(3),h=function(e){return parseFloat(e.substring(0,e.length-1))},v=n(13),y=n.n(v),E=function(){var e=r.a.useState("M,UL997,37.821608S,145.313996E,470668.68,3,3.4\nP,UL997,12.68,26.3,3.4,41.3,0.0"),t=Object(g.a)(e,2),n=t[0],a=t[1],l=r.a.useState(""),o=Object(g.a)(l,2),i=o[0],s=o[1],p=function(){var e=Object(c.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files,console.log(n),e.next=4,Promise.all(Array.from(n).map((function(e){return t=e,new Promise((function(e,n){var a=new FileReader;a.onabort=function(){return n("file reading was aborted")},a.onerror=function(){return n("file reading has failed")},a.readAsText?(a.addEventListener("load",(function(){var t=null!=this.resultString?this.resultString:this.result;e(t)}),!1),a.readAsText(t)):n("Failed to read file")}));var t})));case 4:r=e.sent,a(r.join("\n"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:y.a.fileInputContainer},r.a.createElement("label",{htmlFor:"fileInput"},"Select a CSV file:"),r.a.createElement("input",{type:"file",id:"fileInput",name:"fileInput",multiple:!0,onChange:p}),r.a.createElement("textarea",{value:n,onChange:function(e){return a(e.target.value)},rows:20}),r.a.createElement("button",{onClick:function(){var e=function(e){return e.split("\n").map((function(e){console.log(e);var t=e.split(",");return 0===t.length?null:(console.log("chunks length: ",t.length),"M"!==t[0]||7!==t.length?null:{id:t[1],lat:h(t[2]),long:h(t[3])})})).filter((function(e){return null!==e}))}(n);console.log(e),s(JSON.stringify(e,null,2))}},"submit"),r.a.createElement("pre",null,i))};var b=function(){return r.a.createElement("div",{className:d.a.appContainer},r.a.createElement(E,null),r.a.createElement(f,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.71f43be5.chunk.js.map