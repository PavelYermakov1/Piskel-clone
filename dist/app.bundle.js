!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return r});const r={canvas:"?",array:"?"};t.b=function(){!function(){const t=document.getElementById("main-canvas"),a=document.getElementById("canvasSizeTemp");let n,o,l;a.addEventListener("click",s=>{"choice-canvas"===s.target.className&&(l=+s.target.innerHTML,t.removeChild(a),(n=document.getElementById("myCanvas")).width=5*l,n.style.width=`${5*l}px`,n.height=5*l,n.className="general-canvas",t.appendChild(n),n.style.opacity="1",function(e){o=new Array(e);for(let t=0;t<e;t++){o[t]=new Array(e);for(let a=0;a<e;a++)o[t][a]={color:"?"}}}(l),r.canvas=n,r.array=o,r.arrayClean=JSON.parse(JSON.stringify(o)),document.getElementById("canvas-size").innerHTML=` [${r.array.length}x${r.array.length}]`);const c=document.getElementById("previewCanvas").getContext("2d");let i,d=0;const f=document.getElementById("inputFps"),m=document.getElementById("nuberFps");f.addEventListener("input",e=>{const t=e.target.value;m.innerHTML=`${t} FPS`}),f.addEventListener("change",e=>{const t=e.target.value;m.innerHTML=`${t} FPS`}),e.console.log(f.value),setInterval(()=>{const e=document.getElementsByClassName("frame");i=Array.from(e),d<i.length?(c.clearRect(0,0,240,240),c.drawImage(i[d].children[4],0,0),++d>=i.length&&(d=0)):d=0},5e3/f.value)})}()}}).call(this,a(1))},function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(e){"object"==typeof window&&(a=window)}e.exports=a},function(e,t,a){"use strict";a.r(t);var r=a(0);const n={state:"?",penSize:1,primaryColor:"#000000",secondaryColor:"#000000",frames:{frame_0:"?"}},o=document.getElementById("size-palette");o.addEventListener("click",e=>{if("penSize"===e.target.className){for(let e=0;e<4;e++)o.children[e].className="penSize",o.children[e].children[0].className="square";e.target.className=`${e.target.className}Current`,e.target.children[0].className=`${e.target.children[0].className}Current`,n.penSize=+e.target.children[0].innerHTML}else if("square"===e.target.className){for(let e=0;e<4;e++)o.children[e].className="penSize",o.children[e].children[0].className="square";e.target.parentNode.className=`${e.target.parentNode.className}Current`,e.target.className=`${e.target.className}Current`,n.penSize=+e.target.innerHTML}});var l=function(){const e=document.getElementById("canvas-coordinates"),t=document.getElementById("myCanvas"),a={x:0,y:0};t.addEventListener("mousemove",function(r){a.x=r.pageX-t.offsetLeft,a.y=r.pageY-t.offsetTop,e.innerHTML=`${Math.floor(a.x/5)}:${Math.floor(a.y/5)} `}),t.addEventListener("mouseout",function(t){e.innerHTML=null})};function s(e,t,a){for(let r=0;r<n.penSize;r++)for(let o=0;o<n.penSize;o++)e[t+r][a+o]={color:n.primaryColor}}function c(e,t,a){t.clearRect(0,0,e.length*a,e.length*a);for(let r=0;r<e.length;r++)for(let n=0;n<e.length;n++)"?"!==e[r][n].color&&(t.fillStyle=e[r][n].color,t.fillRect(n*a,r*a,a,a))}var i=function(){const e={x:0,y:0};let t=!1;const a=document.getElementById("myCanvas");r.a.canvas=a;const o=a.getContext("2d");a.addEventListener("mousedown",l=>{e.x=l.pageX-a.offsetLeft,e.y=l.pageY-a.offsetTop,"pen"===n.state&&(t=!0,o.fillStyle=n.primaryColor,s(r.a.array,Math.floor(e.y/5),Math.floor(e.x/5)),o.fillRect(5*Math.floor(e.x/5),5*Math.floor(e.y/5),5*n.penSize,5*n.penSize))}),a.addEventListener("mousemove",l=>{if(!0===t&&"pen"===n.state){e.x=l.pageX-a.offsetLeft,e.y=l.pageY-a.offsetTop;for(let t=0;t<n.penSize;t++)for(let a=0;a<n.penSize;a++)Math.floor(e.x/5)+a<r.a.array.length&&Math.floor(e.y/5)+t<r.a.array.length&&(r.a.array[Math.floor(e.y/5)+t][Math.floor(e.x/5)+a]={color:n.primaryColor});o.fillRect(5*Math.floor(e.x/5),5*Math.floor(e.y/5),5*n.penSize,5*n.penSize)}"pen"===n.state&&(document.onmouseup=()=>{t=!1,document.onmouseup=null})})};var d=function(){const e={x:0,y:0};let t=!1;const a=document.getElementById("myCanvas");r.a.canvas=a;const o=a.getContext("2d");a.addEventListener("mousedown",l=>{if(e.x=l.pageX-a.offsetLeft,e.y=l.pageY-a.offsetTop,"eraser"===n.state&&"?"!==n.currentColor){t=!0;for(let t=0;t<n.penSize;t++)for(let a=0;a<n.penSize;a++)r.a.array[Math.floor(e.x/5)+t][Math.floor(e.y/5)+a].pop();o.clearRect(5*Math.floor(e.x/5),5*Math.floor(e.y/5),5*n.penSize,5*n.penSize)}}),a.addEventListener("mousemove",l=>{!0===t&&"eraser"===n.state&&(e.x=l.pageX-a.offsetLeft,e.y=l.pageY-a.offsetTop,r.a.array[Math.floor(e.x/5)][Math.floor(e.y/5)]={color:"temp"},o.clearRect(5*Math.floor(e.x/5),5*Math.floor(e.y/5),5*n.penSize,5*n.penSize)),"eraser"===n.state&&(document.onmouseup=()=>{t=!1;for(let e=0;e<r.a.array.length;e++)for(let t=0;t<r.a.array.length;t++)if(void 0!==r.a.array[e][t]&&"temp"===r.a.array[e][t].color)for(let a=0;a<n.penSize;a++)for(let o=0;o<n.penSize;o++)e+a<r.a.array.length&&t+a<r.a.array.length&&r.a.array[e+a][t+o].pop();document.onmouseup=null})})};var f=function(){const e={x:0,y:0},t=document.getElementById("primary-color"),a=document.getElementById("myCanvas");a.addEventListener("click",o=>{if("color-picker"===n.state){e.x=o.pageX-a.offsetLeft,e.y=o.pageY-a.offsetTop;const l=r.a.array[Math.floor(e.y/5)][Math.floor(e.x/5)].color;n.primaryColor=l,t.value=n.primaryColor}})};var m=function(){const e={x:0,y:0},t=document.getElementById("myCanvas");r.a.canvas=t;const a=t.getContext("2d");t.addEventListener("click",o=>{if(e.x=o.pageX-t.offsetLeft,e.y=o.pageY-t.offsetTop,"bucket-all"===n.state){const t=r.a.array[Math.floor(e.y/5)][Math.floor(e.x/5)].color;for(let e=0;e<r.a.array.length;e++)for(let o=0;o<r.a.array.length;o++)r.a.array[e][o].color===t&&(r.a.array[e][o].color=n.primaryColor,a.fillStyle=n.primaryColor,a.fillRect(5*o,5*e,5,5))}})};var y=function(){const e={x:0,y:0};let t=!1;const a=document.getElementById("myCanvas");r.a.canvas=a;const o=a.getContext("2d");a.addEventListener("mousedown",l=>{if(e.x=l.pageX-a.offsetLeft,e.y=l.pageY-a.offsetTop,"mirror"===n.state){t=!0,o.fillStyle=n.primaryColor;for(let t=0;t<n.penSize;t++)for(let a=0;a<n.penSize;a++)r.a.array[Math.floor(e.y/5)+t][Math.floor(e.x/5)+a]={color:n.primaryColor};for(let t=0;t<n.penSize;t++)for(let a=0;a<n.penSize;a++)r.a.array[Math.ceil((5*r.a.array.length-e.y)/5)-1-t][Math.floor(e.x/5)+a]={color:n.primaryColor};o.fillRect(5*Math.floor(e.x/5),5*Math.floor(e.y/5),5*n.penSize,5*n.penSize),o.fillRect(5*Math.floor(e.x/5),5*(r.a.array.length-Math.floor(e.y/5))-5*n.penSize,5*n.penSize,5*n.penSize)}}),a.addEventListener("mousemove",l=>{if(!0===t&&"mirror"===n.state){e.x=l.pageX-a.offsetLeft,e.y=l.pageY-a.offsetTop;for(let t=0;t<n.penSize;t++)for(let a=0;a<n.penSize;a++)r.a.array[Math.floor(e.y/5)+t][Math.floor(e.x/5)+a]={color:n.primaryColor};for(let t=0;t<n.penSize;t++)for(let a=0;a<n.penSize;a++)r.a.array[Math.ceil((5*r.a.array.length-e.y)/5)-1-t][Math.floor(e.x/5)+a]={color:n.primaryColor};o.fillRect(5*Math.floor(e.x/5),5*Math.floor(e.y/5),5*n.penSize,5*n.penSize),o.fillRect(5*Math.floor(e.x/5),5*(r.a.array.length-Math.floor(e.y/5))-5*n.penSize,5*n.penSize,5*n.penSize)}"mirror"===n.state&&(document.onmouseup=()=>{t=!1,document.onmouseup=null})})};var p=function(){const e={x:0,y:0};let t=!1;const a=document.getElementById("myCanvas");r.a.canvas=a;const o=a.getContext("2d");a.addEventListener("mousedown",l=>{if(e.x=l.pageX-a.offsetLeft,e.y=l.pageY-a.offsetTop,"mirrorVertical"===n.state){t=!0,o.fillStyle=n.primaryColor;for(let t=0;t<n.penSize;t++)for(let a=0;a<n.penSize;a++)r.a.array[Math.floor(e.y/5)+t][Math.floor(e.x/5)+a]={color:n.primaryColor};for(let t=0;t<n.penSize;t++)for(let a=0;a<n.penSize;a++)r.a.array[Math.floor(e.y/5)+t][Math.ceil((5*r.a.array.length-e.x)/5)-1-a]={color:n.primaryColor};o.fillRect(5*Math.floor(e.x/5),5*Math.floor(e.y/5),5*n.penSize,5*n.penSize),o.fillRect(5*(r.a.array.length-Math.floor(e.x/5))-5*n.penSize,5*Math.floor(e.y/5),5*n.penSize,5*n.penSize)}}),a.addEventListener("mousemove",l=>{if(!0===t&&"mirrorVertical"===n.state){e.x=l.pageX-a.offsetLeft,e.y=l.pageY-a.offsetTop;for(let t=0;t<n.penSize;t++)for(let a=0;a<n.penSize;a++)r.a.array[Math.floor(e.y/5)+t][Math.floor(e.x/5)+a]={color:n.primaryColor};for(let t=0;t<n.penSize;t++)for(let a=0;a<n.penSize;a++)r.a.array[Math.floor(e.y/5)+t][Math.ceil((5*r.a.array.length-e.x)/5)-1-a]={color:n.primaryColor};o.fillRect(5*Math.floor(e.x/5),5*Math.floor(e.y/5),5*n.penSize,5*n.penSize),o.fillRect(5*(r.a.array.length-Math.floor(e.x/5))-5*n.penSize,5*Math.floor(e.y/5),5*n.penSize,5*n.penSize)}"mirrorVertical"===n.state&&(document.onmouseup=()=>{t=!1,document.onmouseup=null})})};var u=function(){document.addEventListener("keypress",e=>{const t=e.key;"p"===t||"P"===t?n.state="pen":"v"===t||"V"===t?n.state="mirrorVertical":"e"===t||"E"===t?n.state="eraser":"c"===t||"C"===t?n.state="color-picker":"b"===t||"B"===t?n.state="bucket-all":"h"===t||"H"===t?n.state="mirror":"r"!==t&&"R"!==t||(n.state="rectangle")});const e=document.getElementById("keyboard"),t=document.getElementById("key");e.addEventListener("click",()=>{"none"===t.style.display?t.style.display="block":t.style.display="none"})};(function(){const e={x:0,y:0},t=document.getElementById("myCanvas"),a={start:"?",finish:"?",vertex:{y:"?",x:"?"}};t.addEventListener("mousedown",r=>{"rectangle"===n.state&&(e.x=r.pageX-t.offsetLeft,e.y=r.pageY-t.offsetTop,a.start={y:Math.floor(e.y/5),x:Math.floor(e.x/5)})}),t.addEventListener("mouseup",o=>{if("rectangle"===n.state){e.x=o.pageX-t.offsetLeft,e.y=o.pageY-t.offsetTop,a.finish={y:Math.floor(e.y/5),x:Math.floor(e.x/5)},a.distanceX=Math.abs(a.finish.x-a.start.x),a.distanceY=Math.abs(a.finish.y-a.start.y),a.start.y<a.finish.y?a.vertex.y=a.start.y:a.vertex.y=a.finish.y,a.start.x<a.finish.x?a.vertex.x=a.start.x:a.vertex.x=a.finish.x;for(let e=0;e<=a.distanceY;e++)s(r.a.array,a.vertex.y+e,a.vertex.x),s(r.a.array,a.vertex.y+e,a.vertex.x+a.distanceX);for(let e=0;e<=a.distanceX;e++)s(r.a.array,a.vertex.y,a.vertex.x+e),s(r.a.array,a.vertex.y+a.distanceY,a.vertex.x+e);r.a.canvas=t;const n=t.getContext("2d");n.clearRect(0,0,5*r.a.array.length,5*r.a.array.length);for(let e=0;e<r.a.array.length;e++)for(let t=0;t<r.a.array.length;t++)"?"!==r.a.array[e][t].color&&(n.fillStyle=r.a.array[e][t].color,n.fillRect(5*t,5*e,5,5))}})})(),u(),p(),y(),function(){const e=document.getElementById("myCanvas");e.addEventListener("mousedown",()=>{document.addEventListener("mouseup",function e(){const t=document.getElementById("current"),a=t.getContext("2d");c(r.a.array,a,160/r.a.array.length),n.frames[`${t.parentElement.id}`]=JSON.parse(JSON.stringify(r.a.array)),document.removeEventListener("mouseup",e)})}),e.addEventListener("click",()=>{const e=document.getElementById("current"),t=e.getContext("2d");c(r.a.array,t,160/r.a.array.length),n.frames[`${e.parentElement.id}`]=JSON.parse(JSON.stringify(r.a.array))}),document.getElementById("addFrame").addEventListener("click",()=>{const t=document.getElementById("main-frames"),a=document.getElementById("current");n.frames[a.parentElement.id]=JSON.parse(JSON.stringify(r.a.array)),r.a.array=JSON.parse(JSON.stringify(r.a.arrayClean)),e.getContext("2d").clearRect(0,0,5*r.a.array.length,5*r.a.array.length),null!==a&&a.removeAttribute("id");const o=document.createElement("div");o.className="frame";const l=Object.keys(n.frames);o.id=`frame_${+l[l.length-1].match(/\d+/)+1}`,t.appendChild(o),n.frames[o.id]=JSON.parse(JSON.stringify(r.a.array));const s=document.createElement("div");s.className="namber",s.innerHTML=`${+l[l.length-1].match(/\d+/)+1}`,o.appendChild(s);const c=document.createElement("div");c.className="delete",c.innerHTML="X",o.appendChild(c);const i=document.createElement("div");i.className="coppy",i.innerHTML='<img src="dist/assets/copy.png" alt="18">',o.appendChild(i);const d=document.createElement("div");d.className="move",d.innerHTML='<img src="dist/assets/move-frame.png" alt="18" hidden>',o.appendChild(d);const f=document.createElement("canvas");f.className=`canvas canvas_${+l[l.length-1].match(/\d+/)+1}`,f.id="current",f.width=160,f.height=160,o.appendChild(f)});const t=document.getElementById("main-frames");t.addEventListener("click",a=>{let o=Object.keys(n.frames),l=Object.values(n.frames);if(o.length>1){if("delete"===a.target.className)if(delete n.frames[a.target.parentNode.id],"current"===a.target.parentElement.children[4].id){t.removeChild(a.target.parentNode),o=Object.keys(n.frames),l=Object.values(n.frames),t.children[o.length].lastElementChild.setAttribute("id","current");const s=e.getContext("2d");r.a.array=l[l.length-1],c(r.a.array,s,5)}else t.removeChild(a.target.parentNode)}else{r.a.array=JSON.parse(JSON.stringify(r.a.arrayClean));let t=e.getContext("2d");t.clearRect(0,0,5*r.a.array.length,5*r.a.array.length),(t=a.target.parentElement.children[4].getContext("2d")).clearRect(0,0,5*r.a.array.length,5*r.a.array.length)}}),document.getElementById("coppy").addEventListener("click",e=>{let a=Object.keys(n.frames);const r=document.createElement("div");r.className="frame",a=Object.keys(n.frames),r.id=`frame_${+a[a.length-1].match(/\d+/)+1}`,t.appendChild(r),n.frames[r.id]=JSON.parse(JSON.stringify(n.frames[e.target.parentElement.parentElement.id]));const o=document.createElement("div");o.className="namber",o.innerHTML=`${+a[a.length-1].match(/\d+/)+1}`,r.appendChild(o);const l=document.createElement("div");l.className="delete",l.innerHTML="X",r.appendChild(l);const s=document.createElement("div");s.className="coppy",s.innerHTML='<img src="dist/assets/copy.png" alt="18">',r.appendChild(s);const i=document.createElement("div");i.className="move",i.innerHTML='<img src="dist/assets/move-frame.png" alt="18">',r.appendChild(i);const d=document.createElement("canvas");d.className=`canvas canvas_${+a[a.length-1].match(/\d+/)+1}`,d.width=160,d.height=160,r.appendChild(d);const f=d.getContext("2d");c(n.frames[r.id],f,4)}),t.addEventListener("click",t=>{if(160===t.target.width&&"current"!==t.target.id){const a=document.getElementById("current"),o=e.getContext("2d");r.a.array=JSON.parse(JSON.stringify(n.frames[t.target.parentElement.id])),o.clearRect(0,0,5*r.a.array.length,5*r.a.array.length),c(r.a.array,o,5),a.removeAttribute("id"),t.target.id="current"}})}(),m(),f(),d(),i(),l(),function(){const e=document.getElementById("primary-color"),t=document.getElementById("secondary-color"),a=document.getElementById("swapColor");e.addEventListener("change",()=>{n.primaryColor=e.value}),t.addEventListener("change",()=>{n.secondaryColor=t.value}),a.addEventListener("click",()=>{const a=n.primaryColor;n.primaryColor=n.secondaryColor,n.secondaryColor=a,e.value=n.primaryColor,t.value=n.secondaryColor})}(),function(){const e=document.getElementById("left"),t=document.getElementById("right");e.addEventListener("click",e=>{n.state=`${e.target.className}`}),t.addEventListener("click",e=>{n.state=`${e.target.className}`})}(),function(){const e=document.getElementById("fullScreen"),t=document.getElementById("previewCanvas");e.addEventListener("click",()=>{t.requestFullscreen()})}(),Object(r.b)()}]);
//# sourceMappingURL=app.bundle.js.map