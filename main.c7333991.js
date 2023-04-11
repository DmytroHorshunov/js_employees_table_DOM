parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return r(e)||a(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c=document.querySelector("table"),l=2,i=null;function u(t,n){var a,r=Array.from(t.rows).slice(1,t.rows.length-1).sort(function(e,t){var a=e.cells[n].innerText.replace(/\W/g,""),r=t.cells[n].innerText.replace(/\W/g,""),o=l%2==0,c=o?r:a,i=o?a:r;return isNaN(a)?c.localeCompare(i):c-i});(a=c.tBodies[0]).append.apply(a,e(r))}c.addEventListener("click",function(e){var t=e.target,n=e.target.cellIndex;if(n!==i&&(i=n,l=1),"TH"!==t.tagName)return!1;u(c,t.cellIndex),l++}),c.addEventListener("click",function(t){if("TD"!==t.target.tagName)return!1;e(c.tBodies[0].children).forEach(function(e){e.classList.contains("active")?e.classList.remove("active"):t.target.parentElement.classList.add("active")})});var s=document.createElement("form");function d(e,t){var n=document.createElement("label");n.innerText=t[0].toUpperCase()+t.slice(1)+":";var a=document.createElement("input");a.classList.add("input_".concat(t)),a.setAttribute("type",e),a.setAttribute("name",t),a.dataset.qa=t,n.append(a),s.append(n)}s.classList.add("new-employee-form"),document.body.append(s),d("text","name"),d("text","position");var p=document.createElement("label");p.innerText="Office:";var m=document.createElement("select");function v(e){var t=document.createElement("option");t.setAttribute("value",e);var n=document.createTextNode(e);t.append(n),m.appendChild(t)}v("Tokyo"),v("Singapore"),v("London"),v("New York"),v("Edinburgh"),v("San Francisco"),m.setAttribute("name","office"),m.dataset.qa="office",p.append(m),s.append(p),d("number","age"),d("number","salary");var f=document.createElement("button");f.innerText="Save to table",s.append(f),f.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".input_name").value,n=document.querySelector(".input_position").value,a=document.querySelector("select").value,r=document.querySelector(".input_age").value,o=document.querySelector(".input_salary").value;if(isNaN(t)&&isNaN(n))if(t.length<4)g("error","Can only be letters and length more 3");else if(""===n)g("error","Can only be letters and length more 3");else if(r<18||r>90)g("error","Age must be over 18 and not over 90");else if(o.length<1||o<=0)g("error","Salary must be greater than zero");else{h([y(t),y(n),a,r,"$".concat((+o).toLocaleString("en-US"))]),g("success","You have successfully added a person to the table"),s.reset()}else g("error","only letters can be entered\n      in the name and position field");b()});var g=function(e,t){var n=document.createElement("div");n.dataset.qa="notification";var a=document.createElement("h2"),r=document.createElement("p");n.classList.add("notification",e),a.className="title",a.textContent=e,r.textContent=t,n.append(a),n.append(r);var o=document.querySelector("body").appendChild(n);setTimeout(function(){o.remove(n)},2e3)};function b(){return e(document.querySelectorAll("td")).forEach(function(e){e.parentElement.children[0].classList.add("name"),e.parentElement.children[1].classList.add("position"),e.parentElement.children[2].classList.add("office"),e.parentElement.children[3].classList.add("age"),e.parentElement.children[4].classList.add("salary")})}function h(e){var t=document.createElement("tr");e.forEach(function(e){var n=document.createElement("td");n.innerText=e,t.append(n)}),c.tBodies[0].append(t)}function y(e){return e[0].toLocaleUpperCase()+e.slice(1)}b(),c.tBodies[0].addEventListener("dblclick",function(e){if(!e.target.classList.contains("name")&&!e.target.classList.contains("position"))return!1;var t=e.target.innerText,n=document.createElement("input");n.style.width="90px",n.setAttribute("type","text"),e.target.innerText="",e.target.append(n),n.className="cell-input",n.focus(),n.addEventListener("blur",function(){n.value.trim().length<4||!isNaN(n.value)?(e.target.innerText=t,g("error","Can only be letters and length more 3")):(g("success","You have changed the table data"),e.target.innerText=y(n.value),n.blur())}),n.onkeydown=function(a){"Enter"===a.key&&(n.value.trim().length<4||!isNaN(n.value)?(n.value=t,g("error","Can only be letters and length more 3")):(g("success","You have changed the table data"),e.target.innerText=y(n.value),n.blur()))}}),c.addEventListener("dblclick",function(e){if(e.target.classList.contains("office")){e.target.innerText="";var t=document.createElement("select");t.style.width="90px",t.className="cell-input",n("Tokyo",t),n("Singapore",t),n("London",t),n("New York",t),n("Edinburgh",t),n("San Francisco",t),t.focus(),t.onblur=function(){e.target.innerText=t.value,g("success","You have changed the table data"),t.blur()}}function n(t,n){var a=document.createElement("option");a.setAttribute("value",t);var r=document.createTextNode(t);a.append(r),n.append(a),e.target.append(n)}}),c.addEventListener("dblclick",function(e){if(e.target.classList.contains("age")){var t=e.target.innerText,n=document.createElement("input");n.setAttribute("type","number"),n.style.width="40px",e.target.innerText="",e.target.append(n),n.className="cell-input",n.focus(),n.onblur=function(){n.value<18||n.value>90?(e.target.innerText=t,g("error","Age must be over 18 and not over 90")):(g("success","You have changed the table data"),n.blur(),e.target.innerText=n.value)},n.onkeydown=function(a){"Enter"===a.key&&(n.value<18||n.value>90?(n.value=t,g("error","Age must be over 18 and not over 90")):(g("success","You have changed the table data"),n.blur(),e.target.innerText=n.value))}}}),c.addEventListener("dblclick",function(e){if(e.target.classList.contains("salary")){var t=e.target.innerText.replace(/\W/g,""),n=document.createElement("input");n.setAttribute("type","number"),n.style.width="90px",e.target.innerText="",e.target.append(n),n.className="cell-input",n.focus(),n.onblur=function(){n.value.length<1||n.value<=0?(n.setAttribute("type","text"),e.target.innerText="$".concat((+t).toLocaleString("en-US")),g("error","Salary must be greater than zero")):(e.target.innerText="$".concat((+n.value).toLocaleString("en-US")),g("success","You have changed the table data"),n.blur())},n.onkeydown=function(a){"Enter"===a.key&&(n.value<=0||n.value.length<1?(n.setAttribute("type","text"),e.target.innerText="$".concat((+t).toLocaleString("en-US")),g("error","Salary must be greater than zero")):(e.target.innerText="$".concat((+n.value).toLocaleString("en-US")),g("success","You have changed the table data"),n.blur()))}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c7333991.js.map