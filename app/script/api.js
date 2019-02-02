var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n){var i={},t=/android/gi.test(navigator.appVersion),a=function(){var e=n.localStorage;return t&&(e=os.localStorage()),e};function o(e,t,n,r){return"function"==typeof t&&(r=n,n=t,t=void 0),"function"!=typeof n&&(r=n,n=void 0),{url:e,data:t,fnSuc:n,dataType:r}}i.trim=function(e){return String.prototype.trim?null==e?"":String.prototype.trim.call(e):e.replace(/(^\s*)|(\s*$)/g,"")},i.trimAll=function(e){return e.replace(/\s*/g,"")},i.isElement=function(e){return!(!e||1!=e.nodeType)},i.isArray=function(e){return Array.isArray?Array.isArray(e):e instanceof Array},i.isEmptyObject=function(e){return"{}"===JSON.stringify(e)},i.addEvt=function(e,t,n,r){i.isElement(e)?(r=r||!1,e.addEventListener&&e.addEventListener(t,n,r)):console.warn("$api.addEvt Function need el param, el param must be DOM Element")},i.rmEvt=function(e,t,n,r){i.isElement(e)?(r=r||!1,e.removeEventListener&&e.removeEventListener(t,n,r)):console.warn("$api.rmEvt Function need el param, el param must be DOM Element")},i.one=function(t,n,r,a){if(i.isElement(t)){a=a||!1;var o=this;o.addEvt(t,n,function e(){r&&r(),o.rmEvt(t,n,e,a)},a)}else console.warn("$api.one Function need el param, el param must be DOM Element")},i.dom=function(e,t){if(1===arguments.length&&"string"==typeof e){if(document.querySelector)return document.querySelector(e)}else if(2===arguments.length&&e.querySelector)return e.querySelector(t)},i.domAll=function(e,t){if(1===arguments.length&&"string"==typeof e){if(document.querySelectorAll)return document.querySelectorAll(e)}else if(2===arguments.length&&e.querySelectorAll)return e.querySelectorAll(t)},i.byId=function(e){return document.getElementById(e)},i.first=function(e,t){return 1===arguments.length?i.isElement(e)?e.children[0]:void console.warn("$api.first Function need el param, el param must be DOM Element"):2===arguments.length?this.dom(e,t+":first-child"):void 0},i.last=function(e,t){if(1===arguments.length){if(!i.isElement(e))return void console.warn("$api.last Function need el param, el param must be DOM Element");var n=e.children;return n[n.length-1]}if(2===arguments.length)return this.dom(e,t+":last-child")},i.eq=function(e,t){return this.dom(e,":nth-child("+t+")")},i.not=function(e,t){return this.domAll(e,":not("+t+")")},i.prev=function(e){if(i.isElement(e)){var t=e.previousSibling;return t.nodeType&&3===t.nodeType?t=t.previousSibling:void 0}console.warn("$api.prev Function need el param, el param must be DOM Element")},i.next=function(e){if(i.isElement(e)){var t=e.nextSibling;return t.nodeType&&3===t.nodeType?t=t.nextSibling:void 0}console.warn("$api.next Function need el param, el param must be DOM Element")},i.closest=function(e,t){if(i.isElement(e)){var r,a;return function e(t,n){for(r=i.domAll(t.parentNode,n),a=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n].isSameNode(t))return e[n];return!1}(r,t);!a;){if(null!=(t=t.parentNode)&&t.nodeType==t.DOCUMENT_NODE)return!1;e(t,n)}return a}(e,t)}console.warn("$api.closest Function need el param, el param must be DOM Element")},i.contains=function(e,t){var n=!1;if(t===e)return n=!0;do{if((t=t.parentNode)===e)return n=!0}while(t===document.body||t===document.documentElement);return n},i.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},i.attr=function(e,t,n){if(i.isElement(e))return 2==arguments.length?e.getAttribute(t):3==arguments.length?(e.setAttribute(t,n),e):void 0;console.warn("$api.attr Function need el param, el param must be DOM Element")},i.removeAttr=function(e,t){i.isElement(e)?2===arguments.length&&e.removeAttribute(t):console.warn("$api.removeAttr Function need el param, el param must be DOM Element")},i.hasCls=function(e,t){if(i.isElement(e))return-1<e.className.indexOf(t);console.warn("$api.hasCls Function need el param, el param must be DOM Element")},i.addCls=function(e,t){if(i.isElement(e)){if("classList"in e)e.classList.add(t);else{var n=e.className+" "+t;e.className=n}return e}console.warn("$api.addCls Function need el param, el param must be DOM Element")},i.removeCls=function(e,t){if(i.isElement(e)){if("classList"in e)e.classList.remove(t);else{var n=e.className.replace(t,"");e.className=n}return e}console.warn("$api.removeCls Function need el param, el param must be DOM Element")},i.toggleCls=function(e,t){if(i.isElement(e))return"classList"in e?e.classList.toggle(t):i.hasCls(e,t)?i.removeCls(e,t):i.addCls(e,t),e;console.warn("$api.toggleCls Function need el param, el param must be DOM Element")},i.val=function(e,t){if(i.isElement(e)){if(1===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value;case"INPUT":case"TEXTAREA":return e.value}if(2===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value=t,e;case"INPUT":case"TEXTAREA":return e.value=t,e}}else console.warn("$api.val Function need el param, el param must be DOM Element")},i.prepend=function(e,t){if(i.isElement(e))return e.insertAdjacentHTML("afterbegin",t),e;console.warn("$api.prepend Function need el param, el param must be DOM Element")},i.append=function(e,t){if(i.isElement(e))return e.insertAdjacentHTML("beforeend",t),e;console.warn("$api.append Function need el param, el param must be DOM Element")},i.before=function(e,t){if(i.isElement(e))return e.insertAdjacentHTML("beforebegin",t),e;console.warn("$api.before Function need el param, el param must be DOM Element")},i.after=function(e,t){if(i.isElement(e))return e.insertAdjacentHTML("afterend",t),e;console.warn("$api.after Function need el param, el param must be DOM Element")},i.html=function(e,t){if(i.isElement(e))return 1===arguments.length?e.innerHTML:2===arguments.length?(e.innerHTML=t,e):void 0;console.warn("$api.html Function need el param, el param must be DOM Element")},i.text=function(e,t){if(i.isElement(e))return 1===arguments.length?e.textContent:2===arguments.length?(e.textContent=t,e):void 0;console.warn("$api.text Function need el param, el param must be DOM Element")},i.offset=function(e){if(i.isElement(e)){var t=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),n=Math.max(document.documentElement.scrollTop,document.body.scrollTop),r=e.getBoundingClientRect();return{l:r.left+t,t:r.top+n,w:e.offsetWidth,h:e.offsetHeight}}console.warn("$api.offset Function need el param, el param must be DOM Element")},i.css=function(e,t){i.isElement(e)?"string"==typeof t&&0<t.indexOf(":")&&e.style&&(e.style.cssText+=";"+t):console.warn("$api.css Function need el param, el param must be DOM Element")},i.cssVal=function(e,t){if(i.isElement(e)){if(2===arguments.length)return n.getComputedStyle(e,null).getPropertyValue(t)}else console.warn("$api.cssVal Function need el param, el param must be DOM Element")},i.jsonToStr=function(e){if("object"===(void 0===e?"undefined":_typeof(e)))return JSON&&JSON.stringify(e)},i.strToJson=function(e){if("string"==typeof e)return JSON&&JSON.parse(e)},i.setStorage=function(e,t){if(2===arguments.length){var n=t;n="object"==(void 0===n?"undefined":_typeof(n))?"obj-"+(n=JSON.stringify(n)):"str-"+n;var r=a();r&&r.setItem(e,n)}},i.getStorage=function(e){var t=a();if(t){var n=t.getItem(e);if(!n)return;if(0===n.indexOf("obj-"))return n=n.slice(4),JSON.parse(n);if(0===n.indexOf("str-"))return n.slice(4)}},i.rmStorage=function(e){var t=a();t&&e&&t.removeItem(e)},i.clearStorage=function(){var e=a();e&&e.clear()},i.fixIos7Bar=function(e){return i.fixStatusBar(e)},i.fixStatusBar=function(e){return i.isElement(e)?(e.style.paddingTop=api.safeArea.top+"px",e.offsetHeight):(console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element"),0)},i.fixTabBar=function(e){return i.isElement(e)?(e.style.paddingBottom=api.safeArea.bottom+"px",e.offsetHeight):(console.warn("$api.fixTabBar Function need el param, el param must be DOM Element"),0)},i.toast=function(e,t,n){var r={},a=function(e,t){api.showProgress(e),setTimeout(function(){api.hideProgress()},t)};if(1===arguments.length){n=n||500;"number"==typeof e?n=e:r.title=e+"",a(r,n)}else if(2===arguments.length){n=n||500;if("number"==typeof(t=t))n=t,t=null;e&&(r.title=e),t&&(r.text=t),a(r,n)}e&&(r.title=e),t&&(r.text=t),a(r,n=n||500)},i.post=function(){var e=o.apply(null,arguments),t={},n=e.fnSuc;if(e.url&&(t.url=e.url),e.data&&(t.data=e.data),e.dataType){var r=e.dataType.toLowerCase();"text"!=r&&"json"!=r||(t.dataType=r)}else t.dataType="json";t.method="post",api.ajax(t,function(e,t){e&&n&&n(e)})},i.get=function(){var e=o.apply(null,arguments),t={},n=e.fnSuc;if(e.url&&(t.url=e.url),e.dataType){var r=e.dataType.toLowerCase();"text"!=r&&"json"!=r||(t.dataType=r)}else t.dataType="text";t.method="get",api.ajax(t,function(e,t){e&&n&&n(e)})},n.$api=i}(window),function(e,t){var n=e.documentElement,r="orientationchange"in window?"orientationchange":"resize",a=n.getAttribute("data-rem")||100;recalc=function(){var e=n.clientWidth;if(e){n.style.fontSize=a*(e/1080)+"px"}},e.addEventListener&&(t.addEventListener(r,recalc,!1),e.addEventListener("DOMContentLoaded",recalc,!1))}(document,window);