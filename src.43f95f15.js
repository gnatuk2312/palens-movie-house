parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"jVF8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=()=>{console.log("Hello my boy")};var o=e;exports.default=o;
},{}],"cE2f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class t{constructor(t,e,i){this.trigger=document.querySelector(t),this.list=document.querySelector(e),this.items=document.querySelectorAll(i)}toggleList(){this.trigger.children[1].classList.toggle("active"),this.trigger.children[1].classList.contains("active")?this.list.classList.remove("visually-hidden"):this.list.classList.add("visually-hidden")}itemClicked(){this.items.forEach(t=>{t.addEventListener("click",()=>{this.trigger.children[1].classList.remove("active"),this.list.classList.add("visually-hidden")})})}init(){this.trigger.addEventListener("click",()=>{this.toggleList(),this.itemClicked()})}}exports.default=t;
},{}],"ppYG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor(e){this.trigger=document.querySelector(e),this.arrow=document.querySelector(".header__categories-menu .arrow"),this.searchBtn=document.querySelector(".header__button"),this.scrollBtn=document.querySelector(".scroll-arrow")}toggleTrigger(){this.trigger.classList.toggle("is-dark"),this.trigger.classList.contains("is-dark")?(this.trigger.children[1].classList.remove("is-hidden"),this.trigger.children[0].classList.add("is-hidden")):(this.trigger.children[1].classList.add("is-hidden"),this.trigger.children[0].classList.remove("is-hidden"))}toggleElement(e,t){document.querySelector(t).classList.toggle("dark-mode")}toggleChildrenRemove(e,t){e.children[t].classList.remove("visually-hidden")}toggleChildrenAdd(e,t){e.children[t].classList.add("visually-hidden")}changeColors(){this.toggleElement(this.header,".header"),this.toggleElement(this.headerTitle,".header__title"),this.toggleElement(this.headerInput,".header__input"),this.toggleElement(this.genre,".header__genre"),this.toggleElement(this.arrow,".header__categories-menu .arrow"),this.toggleElement(this.genresList,".header__categories-wrapper"),this.toggleElement(this.movies,".movies"),this.toggleElement(this.footer,".footer"),this.toggleElement(this.footerRights,".footer__rights"),this.toggleElement(this.footerMail,".footer__mail"),this.trigger.classList.contains("is-dark")?(this.toggleChildrenRemove(this.searchBtn,0),this.toggleChildrenAdd(this.searchBtn,1),this.toggleChildrenRemove(this.scrollBtn,0),this.toggleChildrenAdd(this.scrollBtn,1)):(this.toggleChildrenRemove(this.searchBtn,1),this.toggleChildrenAdd(this.searchBtn,0),this.toggleChildrenRemove(this.scrollBtn,1),this.toggleChildrenAdd(this.scrollBtn,0)),this.categories=document.querySelectorAll(".header__category"),this.categories.forEach(e=>{e.classList.toggle("dark-mode")})}init(){this.trigger.addEventListener("click",()=>{this.toggleTrigger(),this.changeColors()})}}exports.default=e;
},{}],"ksyp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=()=>{const e=document.querySelector(".scroll-arrow");window.addEventListener("scroll",()=>{let t=window.pageYOffset,s=document.documentElement.clientHeight;t<s&&e.classList.add("visually-hidden"),t>s&&e.classList.remove("visually-hidden")}),e.addEventListener("click",function e(){window.pageYOffset>0&&(window.scrollBy(0,-110),setTimeout(e,0))})};var t=e;exports.default=t;
},{}],"zh1L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=async e=>{let t=await fetch(e),s=await t.json();return console.log(s),s.results};var t=e;exports.default=t;
},{}],"BauV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./fetchRequest"));function e(t){return t&&t.__esModule?t:{default:t}}const s="api_key=37ddb2fc7c56da1b6488f77b0c18f898",i="https://api.themoviedb.org/3",o="https://image.tmdb.org/t/p/w500",a=i+"/discover/movie?sort_by=popularity.desc&"+s,n=()=>{const e=document.querySelector(".movies__items");(0,t.default)(a).then(t=>{(t=>{e.innerHTML="",t.forEach(t=>{const s=document.createElement("ARTICLE");s.classList.add("movies__item"),s.innerHTML=`\n\t\t\t\n\t\t\t\t<div class="movies__poster">\n\t\t\t\t\t<img src="${o+t.poster_path}" alt="Картинка" class="movies__image">\n\t\t\t\t</div>\n\t\t\t\t<h3 class="movies__title">${t.title}</h3>\n\t\t\t\t<ul class="movies__genres">\n\t\t\t\t\t<li class="movies__genre">Мультфільм</li>\n\t\t\t\t\t<li class="movies__genre">Комедія</li>\n\t\t\t\t\t<li class="movies__genre">Пригоди</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class="movies__rating ${(t=>t>=7?"green":t>=4?"yellow":t<4?"red":void 0)(t.vote_average)}"><span>${t.vote_average}</span></div>\n\t\t\t`,e.appendChild(s)})})(t)}).catch(t=>{throw t})};var r=n;exports.default=r;
},{"./fetchRequest":"zh1L"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=u(require("./modules/console")),r=u(require("./modules/showGenres")),d=u(require("./modules/darkMode")),o=u(require("./modules/scrollToTop")),s=u(require("./modules/loadMovies"));function u(e){return e&&e.__esModule?e:{default:e}}window.addEventListener("DOMContentLoaded",()=>{(0,e.default)(),new r.default(".header__categories-menu",".header__categories-wrapper",".header__category").init(),new d.default(".header__color-theme").init(),(0,o.default)(),(0,s.default)()});
},{"./sass/main.scss":"clu1","./modules/console":"jVF8","./modules/showGenres":"cE2f","./modules/darkMode":"ppYG","./modules/scrollToTop":"ksyp","./modules/loadMovies":"BauV"}]},{},["Focm"], null)
//# sourceMappingURL=/Palens-MovieHouse/src.43f95f15.js.map