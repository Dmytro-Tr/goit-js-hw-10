import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as s}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form");const r=document.querySelector("input[type=number]");addEventListener("submit",l);function l(t){t.preventDefault();const o=t.target.elements.delay.value;console.log(o);const i=t.target.elements.state.value;console.log(i),new Promise((e,n)=>{setTimeout(()=>{i==="fulfilled"?e(o):n(o)},o),r.value=""}).then(e=>{s.show({message:`✅ Fulfilled promise in ${e}ms`,titleSize:"16px",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",timeout:"3000",closeOnClick:"true",progressBarColor:"#fff",transitionIn:"bounceInDown",transitionOut:"flipOutX"})}).catch(e=>{s.show({message:`❌ Rejected promise in ${e}ms`,titleSize:"16px",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",timeout:"3000",closeOnClick:"true",progressBarColor:"#fff",transitionIn:"bounceInDown",transitionOut:"flipOutX"})})}
//# sourceMappingURL=2-snackbar.js.map
