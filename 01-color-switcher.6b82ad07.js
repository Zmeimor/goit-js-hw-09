const t=document.querySelector(".start-button"),e=document.querySelector(".stop-button"),r=document.querySelector("body");let o=null;t.addEventListener("click",(()=>{clearInterval(o),o=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;r.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.6b82ad07.js.map