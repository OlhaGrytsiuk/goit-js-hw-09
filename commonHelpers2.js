import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector(".feedback-form"),r=document.querySelector(".feedback-form input"),m=document.querySelector(".feedback-form textarea"),a="feedback-form-state",t={email:"",message:""};c();o.addEventListener("input",l);o.addEventListener("submit",n);function l(e){t[e.target.name]=e.target.value;const s=JSON.stringify(t);localStorage.setItem(a,s)}function n(e){if(e.preventDefault(),r.value===""||m.value==="")return alert("Fill please all fields");console.log(t),e.currentTarget.reset(),localStorage.removeItem(a)}function c(){const e=JSON.parse(localStorage.getItem(a));e&&(r.value=e.email,m.value=e.message,t.email=e.email,t.message=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
