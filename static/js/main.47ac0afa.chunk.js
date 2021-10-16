(this["webpackJsonphfa-drone-map"]=this["webpackJsonphfa-drone-map"]||[]).push([[0],{11:function(e,t,n){e.exports={appContainer:"App_appContainer__3jRx1"}},13:function(e,t,n){e.exports={fileInputContainer:"FileInput_fileInputContainer__3K1pc"}},14:function(e,t,n){e.exports=n(25)},15:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);n(15);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),l=n(2),c=n(11),s=n.n(c),u=n(7),p=n.n(u),f=n(12),d=n(13),g=n.n(d),m=function(e){return parseFloat(e.substring(0,e.length-1))},y=function(e){var t=a.a.useState("M,UL997,37.821608S,145.313996E,470668.68,3,3.4\nP,UL997,12.68,26.3,3.4,41.3,0.0"),n=Object(l.a)(t,2),r=n[0],o=n[1],i=a.a.useState(""),c=Object(l.a)(i,2),s=c[0],u=c[1],d=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files,console.log(n),e.next=4,Promise.all(Array.from(n).map((function(e){return t=e,new Promise((function(e,n){var r=new FileReader;r.onabort=function(){return n("file reading was aborted")},r.onerror=function(){return n("file reading has failed")},r.readAsText?(r.addEventListener("load",(function(){var t=null!=this.resultString?this.resultString:this.result;e(t)}),!1),r.readAsText(t)):n("Failed to read file")}));var t})));case 4:r=e.sent,o(r.join("\n"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:g.a.fileInputContainer},a.a.createElement("label",{htmlFor:"fileInput"},"Select a CSV file:"),a.a.createElement("input",{type:"file",id:"fileInput",name:"fileInput",multiple:!0,onChange:d}),a.a.createElement("textarea",{value:r,onChange:function(e){return o(e.target.value)},rows:20}),a.a.createElement("button",{onClick:function(){var t=function(e){return e.split("\n").map((function(e){console.log(e);var t=e.split(",");return 0===t.length?null:(console.log("chunks length: ",t.length),"M"!==t[0]||7!==t.length?null:{id:t[1],lat:m(t[2]),long:m(t[3])})})).filter((function(e){return null!==e}))}(r);console.log(t),u(JSON.stringify(t,null,2)),e.onSubmit&&e.onSubmit(t)}},"submit"),a.a.createElement("pre",null,s))},h=n(4),v=(n(24),n(1)),b=n.n(v);function S(e){return{type:"Feature",geometry:{type:"Point",coordinates:e},properties:{description:JSON.stringify(e)}}}var E=function(){var e=Object(r.useRef)(null),t=a.a.useContext(h.a);return a.a.useEffect((function(){if(t){var n={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:[[-122.019807,45.632433]]}}]},r={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[-122.019807,45.632433]},properties:{description:"hello"}}]};t.addSource("trace",{type:"geojson",data:n}),t.addSource("trace2",{type:"geojson",data:r}),t.addLayer({id:"trace",type:"line",source:"trace",paint:{"line-color":"yellow","line-opacity":.75,"line-width":5}}),t.addLayer({id:"trace2",type:"circle",source:"trace2",paint:{"circle-radius":6,"circle-color":"#B42222"}}),t.panTo(n.features[0].geometry.coordinates[0]),t.on("click",(function(a){var o=[[a.point.x-5,a.point.y-5],[a.point.x+5,a.point.y+5]],i=t.queryRenderedFeatures(o,{layers:["trace2"]});if(i.length>0){var l=i[0].geometry.coordinates.slice(),c=i[0].properties.description;for(console.log(i[0]);Math.abs(a.lngLat.lng-l[0])>180;)l[0]+=a.lngLat.lng>l[0]?360:-360;(new b.a.Popup).setLngLat(l).setHTML(c).addTo(t)}else{console.log(a);var s=a.lngLat,u=s.lng,p=s.lat;if(console.log([u,p]),e.current){console.log("selected",e.current),console.log(JSON.stringify(r));var f=r.features.findIndex((function(t){return t.properties.description===e.current}));console.log(f),n.features[0].geometry.coordinates.splice(f+1,0,[u,p]),r.features.splice(f+1,0,S([u,p])),e.current=null}else n.features[0].geometry.coordinates.push([u,p]),r.features.push(S([u,p]));t.getSource("trace").setData(n),t.getSource("trace2").setData(r)}})),t.on("contextmenu",(function(a){var o=[[a.point.x-5,a.point.y-5],[a.point.x+5,a.point.y+5]],i=t.queryRenderedFeatures(o,{layers:["trace2"]});if(0!==i.length){i[0].geometry.coordinates.slice();var l=i[0].properties.description;if(console.log(e.current,"->",l),console.log(r),e.current!==l)e.current=l;else{var c=r.features.findIndex((function(e){return e.properties.description===l}));console.log(n,r),n.features[0].geometry.coordinates.splice(c,1),console.log(r.features.splice(c,1)),console.log(n,r),t.getSource("trace").setData(n),t.getSource("trace2").setData(r),e.current=null}}}))}}),[t]),null},x=Object(h.b)({accessToken:"pk.eyJ1Ijoic3BpZGVyMjI5OCIsImEiOiJja3VzOGN1cWUwY2M5MndtZmZ1Nm0wdHZqIn0.rsbsUbg1W7V0Ev9aAXGGsA"}),I=function(){return a.a.createElement("div",null,a.a.createElement(x,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100%",width:"100%"}},a.a.createElement(E,null)))};function w(){var e=a.a.useState([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return a.a.createElement("div",{className:s.a.appContainer},a.a.createElement(y,{onSubmit:function(e){return r(e)}}),a.a.createElement(I,{droneLocations:n}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.47ac0afa.chunk.js.map