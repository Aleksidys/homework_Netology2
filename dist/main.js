(()=>{var t={547:()=>{},867:()=>{window.addEventListener("load",(function(){let t,e=document.querySelectorAll(".container > *"),n=document.querySelector(".failCounter"),o=0;function c(){t=setTimeout((function(){o+=1,console.log('Failed to click on element with class "target"'),n.innerText=`Fail Count: ${o}`,i()}),1e3)}function i(){clearTimeout(t),c()}c(),setInterval((function(){e.forEach((function(t){t.classList.contains("item")||t.classList.add("item")})),e.forEach((function(t){t.classList.remove("target")}));let t=Math.floor(Math.random()*e.length);e[t].classList.remove("item"),e[t].classList.add("target"),i()}),1e3)})),document.addEventListener("DOMContentLoaded",(function(){let t=document.querySelector(".counter"),e=0;document.querySelector(".container").addEventListener("click",(function(n){let o=n.target;o.closest(".container")&&o.classList.contains("target")&&(e+=1,console.log('Clicked on element with class "target"'),t.innerText=`Счет: ${e}`,o.classList.remove("target"),o.classList.add("item"))}))}))}},e={};function n(o){var c=e[o];if(void 0!==c)return c.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}(()=>{"use strict";n(867),n(547),console.log(0x338bc0fa7dc05c0)})()})();