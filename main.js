(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var n=0;n<this.length;n++){var i=this[n][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var m=[].concat(e[s]);a&&o[m[0]]||(r&&(m[2]?m[2]="".concat(r," and ").concat(m[2]):m[2]=r),t.push(m))}},t}},742:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},197:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(705),o=r.n(a),n=r(742),i=r.n(n),s=r(87),m=r(130),l=r(434),c=o()((function(e){return e[1]})),d=i()(s),p=i()(m),f=i()(l);c.push([e.id,"*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}html{font-size:10px}.body{font-family:'Inter', sans-serif;max-width:1280px;min-width:320px;background-color:#c7d5eec2;box-sizing:border-box;margin:0 auto}@keyframes moveInLeft{0%{opacity:0;transform:translateX(-10rem);-webkit-transform:translateX(-10rem);-moz-transform:translateX(-10rem);-ms-transform:translateX(-10rem);-o-transform:translateX(-10rem)}80%{transform:translateX(1rem);-webkit-transform:translateX(1rem);-moz-transform:translateX(1rem);-ms-transform:translateX(1rem);-o-transform:translateX(1rem)}100%{opacity:1;transform:translate(0);-webkit-transform:translate(0);-moz-transform:translate(0);-ms-transform:translate(0);-o-transform:translate(0)}}@keyframes moveInRight{0%{opacity:0;transform:translateX(10rem);-webkit-transform:translateX(10rem);-moz-transform:translateX(10rem);-ms-transform:translateX(10rem);-o-transform:translateX(10rem)}80%{transform:translateX(-1rem);-webkit-transform:translateX(-1rem);-moz-transform:translateX(-1rem);-ms-transform:translateX(-1rem);-o-transform:translateX(-1rem)}100%{opacity:1;transform:translate(0);-webkit-transform:translate(0);-moz-transform:translate(0);-ms-transform:translate(0);-o-transform:translate(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(7rem);-webkit-transform:translateY(7rem);-moz-transform:translateY(7rem);-ms-transform:translateY(7rem);-o-transform:translateY(7rem)}100%{opacity:1;transform:translate(0);-webkit-transform:translate(0);-moz-transform:translate(0);-ms-transform:translate(0);-o-transform:translate(0)}}@keyframes moveInBottomCards{0%{opacity:0;transform:translateY(3rem);-webkit-transform:translateY(3rem);-moz-transform:translateY(3rem);-ms-transform:translateY(3rem);-o-transform:translateY(3rem)}70%{transform:rotate(160deg);-webkit-transform:rotate(160deg);-moz-transform:rotate(160deg);-ms-transform:rotate(160deg);-o-transform:rotate(160deg)}100%{opacity:1;transform:rotate(0);-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0)}}@keyframes popup{0%{opacity:0;transform:scale(0)}100%{opacity:1;transform:scale(1)}}.border-bottom{border-bottom:3.5px solid #ebebeb;width:125%;transform:translateX(-32px);margin-top:2rem;margin-bottom:2rem}.margin-bottom-big{margin-bottom:10rem}.margin-bottom-medium{margin-bottom:5rem}.margin-bottom-smallest{margin-bottom:.4rem}.margin-right-auto{margin-right:auto}.link-box-animated{transition:all .3s}.link-box-animated:hover{opacity:.8;transform:scale(1.02)}.link-box-styles{color:#000;text-decoration:none}.link-box-styles:link,.link-box-styles:visited{color:#000}.green-span{background-color:#24c08b;border-radius:.7rem;padding:.45rem .7rem;font-size:1rem;color:#fff}.btn{cursor:pointer;border:none;font-size:1.7rem;position:relative;text-transform:uppercase;text-decoration:none;padding:1.5rem 4rem;display:inline-block;border-radius:10rem;transition:all ease-out .2s;margin:5rem 2rem}.btn:hover{box-shadow:0 1rem 2rem rgba(0,0,0,0.2);transform:translateY(-3px)}.btn:hover::after{opacity:0;transform:scaleX(1.5) scaleY(1.6)}.btn:active{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.2);transform:translateY(-1px)}.btn::after{content:\"\";display:inline-block;position:absolute;top:0;left:0;height:100%;width:100%;border-radius:10rem;transition:all .4s}.btn-white{background-color:#fff;color:#777}.btn-white::after{z-index:-1;background-color:#fff}.btn-animated{animation:moveInBottom .5s ease-out;animation-fill-mode:backwards}.btn-yellow{background-color:#fddc04;color:#000;font-size:1.1rem;font-weight:800;width:100%;display:inline-block;border-radius:3rem;padding:.7rem 1.5rem;text-align:center;color:#000;text-decoration:none;transition:all .3s}.btn-yellow:link,.btn-yellow:visited{color:#000}.btn-yellow:hover{opacity:.8;transform:scale(1.02)}.popup{display:none;position:relative;max-width:50%;margin:0 auto;padding:3rem;background-color:#fff;border-radius:.5rem;overflow:hidden;animation:popup linear .5s}.popup__text-result{margin-bottom:2rem}.popup__close-btn{background-color:inherit;border:0;width:1.5rem;height:1.5rem;position:absolute;top:2rem;right:2rem;cursor:pointer;background-image:url("+d+");background-repeat:no-repeat;background-position:center;transform:all .2s}.popup__close-btn:hover{opacity:.8}.popup__search-container{position:relative}.popup__search{width:100%;padding:1.2rem 5rem 1.2rem 1.2rem;font-size:1.7rem;border:none;outline:none;background-color:#ebebeb;border-radius:.5rem;margin:1rem 0}.popup__search-btn{display:inline-block;background-image:url("+p+");background-size:cover;background-position:center;width:35px;height:35px;position:absolute;top:14.5px;right:7px;transition:all .2s;opacity:.8}.popup__search-btn:hover{opacity:.6}.popup__search-btn:active{transform:scale(1.09)}.popup__subtitle{display:inline-block;font-size:1.2rem;font-weight:700;color:#000;transition:all .2s}.popup__subtitle:not(:last-child){margin-right:1rem}.popup__subtitle:link:visited{color:#3f3e3e}.popup__subtitle:hover{opacity:.8}.popup-opened{display:block}.cards{max-width:100%;display:grid;grid-template-columns:repeat(4, 1fr);grid-template-rows:auto;gap:4.5rem 3rem}.cards__item{position:relative;perspective:150rem;-moz-perspective:150rem;height:12.2rem;animation:moveInBottomCards 2s ease}.cards__item:hover .cards__side-front{transform:rotateY(-180deg)}.cards__item:hover .cards__side-back{transform:rotateY(0)}.cards__side{position:absolute;top:0;right:0;width:100%;height:100%;backface-visibility:hidden;border-radius:1rem;transition:all .8s;box-shadow:0rem 0.5rem 1rem rgba(0,0,0,0.45)}.cards__box-img{height:100%;width:100%;display:flex;justify-content:center;align-items:center}.cards__img{width:6rem;-webkit-box-reflect:below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(65%, transparent), to(rgba(250,250,250,0.2)))}.cards__subtitle{font-size:1.7rem;margin-top:1rem;text-transform:uppercase}.cards__side-front{background-image:linear-gradient(to right, #ebebeb, rgba(185,209,207,0.658824))}.cards__side-back{text-align:center;transform:rotateY(180deg);background-image:url("+f+");background-size:cover}.cards__side-back-text{font-size:2rem;color:#fff;margin-top:4rem;text-transform:uppercase}.pages{animation:moveInBottom ease 1s}.pages__box{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-image:linear-gradient(to right, #ebebeb, rgba(185,209,207,0.658824));padding:1.5rem;border-radius:.5rem;animation:moveInBottom ease 1.5s}.pages__box:not(:last-child){margin-bottom:1.2rem}.pages__img-box{margin-right:.6rem;animation:moveInLeft linear 1.5s}.pages__img-box a{color:#000;text-decoration:none;transition:all .3s}.pages__img-box a:link,.pages__img-box a:visited{color:#000}.pages__img-box a:hover{opacity:.8;transform:scale(1.02)}.pages__img{height:6.5rem;width:6.5rem;border-radius:.5rem}.pages__text-box{padding:.8rem;animation:moveInRight linear 1.5s}.pages__title{font-size:1.5rem;margin-bottom:.6rem;font-weight:700}.pages__subtitle{font-size:1.1rem;font-weight:700;line-height:1.8}.pages__box-btn{animation:moveInRight linear 1.5s}.markets__box{max-width:89%}.markets__btn{color:#000;text-decoration:none;transition:all .3s;background-image:linear-gradient(to right, #ebebeb, rgba(185,209,207,0.658824));font-size:1.5rem;font-weight:700;padding:1rem;display:inline-block;border-radius:.5rem;margin-right:1rem;margin-bottom:1rem}.markets__btn:link,.markets__btn:visited{color:#000}.markets__btn:hover{opacity:.8;transform:scale(1.02)}\n",""]);const b=c},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}},379:e=>{var t=[];function r(e){for(var r=-1,a=0;a<t.length;a++)if(t[a].identifier===e){r=a;break}return r}function a(e,a){for(var n={},i=[],s=0;s<e.length;s++){var m=e[s],l=a.base?m[0]+a.base:m[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var p=r(d),f={css:m[1],media:m[2],sourceMap:m[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:d,updater:o(f,a),references:1}),i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var n=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<n.length;i++){var s=r(n[i]);t[s].references--}for(var m=a(e,o),l=0;l<n.length;l++){var c=r(n[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}n=m}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var a=r.css,o=r.media,n=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(a,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},87:(e,t,r)=>{e.exports=r.p+"07d98d4281efb3494ceb.svg"},434:(e,t,r)=>{e.exports=r.p+"7f1004b738d7ea010017.jpg"},130:(e,t,r)=>{e.exports=r.p+"5905e891e29ce57ed979.svg"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={id:a,exports:{}};return e[a](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="",(()=>{var e=r(379),t=r.n(e),a=r(795),o=r.n(a),n=r(695),i=r.n(n),s=r(216),m=r.n(s),l=r(197),c={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=i()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};c.domAPI=o(),c.insertStyleElement=m(),t()(l.Z,c),l.Z&&l.Z.locals&&l.Z.locals;var d=document.querySelector(".popup"),p=document.querySelector(".open-btn"),f=document.querySelector(".popup__close-btn");p.addEventListener("click",(function(){d.classList.add("popup-opened")})),f.addEventListener("click",(function(){d.classList.remove("popup-opened")}))})()})();