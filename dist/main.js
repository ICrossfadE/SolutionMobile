(()=>{"use strict";var e=document.querySelector(".start-booton"),o=document.querySelector(".submit-booton"),t=document.querySelector(".input-submit"),n=document.querySelector(".modal_window"),c=document.querySelector(".modal_window-background"),l=document.querySelector(".modal_window-quest"),r=document.querySelector(".game-life"),u=document.querySelectorAll(".life"),a=Array.from(u),i=v(),d=m(),s=g(i,d);function m(){var e=["-","+"];return e[f(0,e.length-1)]}function f(e,o){return Math.floor(Math.random()*(o+1-e)+e)}function v(){return[f(1,100),f(1,100)]}function g(e,o){var t=e[0],n=e[1];return"+"==o?t+n:t-n}function h(e,o){var t=o[0],n=o[1];return"".concat(t).concat(e).concat(n)}function q(e){i=v(),d=m(),s=g(i,d),console.log("TOTAL",s),e.textContent=h(d,i)}function y(e){e.classList.add("active"),e.classList.remove("hidden")}function L(e){e.classList.add("hidden"),e.classList.remove("active")}e.addEventListener("click",(function(e){!function(e,o){for(var t=0;t>=o.length;t++){var n=document.createElement("div");if(n.classList.add("life"),console.log("create",n),o.push(n),e.appendChild(n),2===t)break}console.log("start",o)}(r,a),y(n),y(c),l.textContent=h(d,i),console.log("TOTAL",s)})),o.addEventListener("click",(function(e){var o,u,i,d=(o=l,u=t,0!==(i=Number(u.value))&&i===s?(console.log("ok"),q(o),!0):(console.log("no"),u.value="",q(o),!1));console.log(d),d?t.value="":function(e,o,t,n){e.pop(),o.firstChild.remove(),console.log(e),console.log(Boolean(e.length)),Boolean(e.length)||(L(t),L(n))}(a,r,n,c)}))})();