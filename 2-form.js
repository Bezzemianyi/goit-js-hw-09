import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a={email:"",message:""},m="feedback-form-state",l=document.querySelector(".feedback-form");l.addEventListener("input",r);l.addEventListener("submit",i);s();function r(e){e.target.name==="email"?a.email=e.target.value.trim():e.target.name==="message"&&(a.message=e.target.value.trim()),localStorage.setItem(m,JSON.stringify(a))}function s(){const e=localStorage.getItem(m),t=JSON.parse(e);e&&(a.email=t.email,a.message=t.message,l.querySelector('input[name="email"]').value=t.email,l.querySelector('textarea[name="message"]').value=t.message)}function i(e){if(e.preventDefault(),!a.email||!a.message){alert("Fill please all fields");return}console.log(a),e.currentTarget.reset(),a.email="",a.message="",localStorage.removeItem(m)}
//# sourceMappingURL=2-form.js.map
