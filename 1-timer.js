import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as u,i as h}from"./assets/vendor-BbSUbo7J.js";u("input#datetime-picker",{});const e=document.querySelector("button[data-start]"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]"),c=document.querySelector("#datetime-picker");let l;e.addEventListener("click",C);e.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=new Date;console.log(t[0]),t[0].getTime()<o?(h.show({message:"Please choose a date in the future",messageColor:"#fff",backgroundColor:"#FF0000",messageSize:"20",position:"topCenter"}),e.disabled=!0):(l=t[0].getTime(),e.disabled=!1)}};u(c,g);function C(){e.disabled=!0,c.disabled=!0;const t=setInterval(()=>{const o=Date.now(),a=l-o;if(a<=0){clearInterval(t),c.disabled=!1,this.isActive=!1;return}const{days:d,hours:i,minutes:s,seconds:r}=T(a);y.textContent=n(d),S.textContent=n(i),p.textContent=n(s),b.textContent=n(r)},1e3)}function T(t){const s=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:r,minutes:m,seconds:f}}function n(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
