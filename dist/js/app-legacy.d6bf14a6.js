(function(){"use strict";var t={9291:function(t,e,a){a.r(e),a.d(e,{__esModule:function(){return s.X},default:function(){return l}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("ProductsList")],1)},n=[],s=a(7930),o=s.Z,r=a(1001),c=(0,r.Z)(o,i,n,!1,null,null,null),l=c.exports},2245:function(t,e,a){a.r(e),a.d(e,{__esModule:function(){return s.X},default:function(){return l}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"pagination-container"},[a("button",{staticClass:"pagination-prev",class:0==t.activeIndex?"pagination-arrow-disabled":"",attrs:{role:"button"},on:{click:function(e){t.activeIndex>0&&t.handlePagination("prev-first")}}},[t._v(" << ")]),a("button",{staticClass:"pagination-prev",class:0==t.activeIndex?"pagination-arrow-disabled":"",attrs:{role:"button"},on:{click:function(e){t.activeIndex>0&&t.handlePagination("prev")}}},[t._v(" < ")]),t._l(t.paginationSize,(function(e,i){return a("li",{key:i,staticClass:"pagination-item",class:i==t.activeIndex?"pagination-active":"",on:{click:function(e){t.activeIndex=i,t.emitter()}}},[t._v(" "+t._s(e)+" ")])})),a("button",{staticClass:"pagination-next",class:t.activeIndex==t.paginationSize-1?"pagination-arrow-disabled":"",attrs:{role:"button"},on:{click:function(e){t.activeIndex<t.paginationSize-1&&t.handlePagination("next")}}},[t._v(" > ")]),a("button",{staticClass:"pagination-next",class:t.activeIndex==t.paginationSize-1?"pagination-arrow-disabled":"",attrs:{role:"button"},on:{click:function(e){t.activeIndex<t.paginationSize-1&&t.handlePagination("next-last")}}},[t._v(" >> ")])],2)])},n=[],s=a(8075),o=s.Z,r=a(1001),c=(0,r.Z)(o,i,n,!1,null,"256517f6",null),l=c.exports},6457:function(t,e,a){a.r(e),a.d(e,{__esModule:function(){return s.X},default:function(){return l}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.data?a("li",{staticClass:"item"},[a("div",{staticClass:"img-wrapper"},[t.data.images.length>1?a("button",{staticClass:"carousel-handler carousel-prev",class:0==t.activeIndex?"carousel-arrow-disabled":"",attrs:{role:"button"},on:{click:function(e){t.activeIndex>0&&t.handleCarousel("prev")}}},[t._v(" < ")]):t._e(),a("img",{staticClass:"product__img",attrs:{src:t.data.images[t.activeIndex].src||t.data.image.src,alt:t.data.title},on:{click:function(e){t.isDetailOpen=!t.isDetailOpen}}}),t.data.images.length>1?a("button",{staticClass:"carousel-handler carousel-next",class:t.activeIndex==t.data.images.length-1?"carousel-arrow-disabled":"",attrs:{role:"button"},on:{click:function(e){t.activeIndex<t.data.images.length-1&&t.handleCarousel("next")}}},[t._v(" > ")]):t._e()]),a("div",{staticClass:"desc-section",class:[{"detail-active":t.isDetailOpen}]},[a("div",{staticClass:"product-descriptions",style:t.isDetailOpen?"":"border-right: 2px solid #f1faeec7"},[a("p",{staticClass:"product__title"},[t._v(" "+t._s(t.data.title||"No Title Available")+" ")]),a("p",{staticClass:"product__price"},[t._v(" "+t._s(t.data.variants[0].price||"No Price Available")+" ")]),t.isDetailOpen?[a("p",[a("span",{staticClass:"detail-key"},[t._v(" Product type:")]),t._v(" "+t._s(t.data.product_type)+" ")]),t.data.options?t._l(t.data.options,(function(e,i){return a("p",{key:i,staticClass:"product-detail-text"},[a("span",{staticClass:"detail-key"},[t._v(" "+t._s(e.name)+":")]),t._l(e.values,(function(e,i){return a("span",{key:i,staticClass:"product-detail-span"},[t._v(" "+t._s(e))])}))],2)})):t._e(),a("p",[a("span",{staticClass:"detail-key"},[t._v("Requires Shipping: ")]),t._v(t._s(t.data.variants[0].requires_shipping?"Yes":"No")+" ")]),a("p",[a("span",{staticClass:"detail-key"},[t._v("Taxable: ")]),t._v(t._s(t.data.variants[0].taxable?"Yes":"No")+" ")]),a("p",[a("span",{staticClass:"detail-key"},[t._v("Weight: ")]),t._v(t._s(""+t.data.variants[0].weight.toFixed(3)+t.data.variants[0].weight_unit)+" ")]),a("p",[a("span",{staticClass:"detail-key"},[t._v("Vendor: ")]),t._v(t._s(t.data.vendor||"Not Available")+" ")])]:t._e()],2),a("div",{class:t.isDetailOpen?"":"action-section"},[a("div",{staticClass:"detail-icon",class:t.isDetailOpen?"detail-open":"",on:{click:function(e){t.isDetailOpen=!t.isDetailOpen}}},[a("span",[t._v(t._s(t.isDetailOpen?"X":"i"))])])])])]):t._e()])},n=[],s=a(3048),o=s.Z,r=a(1001),c=(0,r.Z)(o,i,n,!1,null,"5e4c45f2",null),l=c.exports},2811:function(t,e,a){a.r(e),a.d(e,{__esModule:function(){return s.X},default:function(){return l}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("SearchBar",{on:{searchKeyChange:t.searchIt}}),a("div",{staticClass:"container"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedType,expression:"selectedType"}],attrs:{id:"types"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedType=e.target.multiple?a:a[0]},function(e){return t.filterByType(t.selectedType)}]}},[a("option",{attrs:{value:"All",selected:""}},[t._v("All")]),t._l(t.typesList,(function(e,i){return a("option",{key:i,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2),a("p",{staticClass:"total-indicator"},[t._v(" Shown: "),a("span",[t._v(t._s(t.listSize))]),t._v("/"+t._s(t.productsData.length)+" ")]),t.isLoading?[a("h4",{staticClass:"no-content"},[t._v("Loading..")])]:[t.productsForList.length>0?t._l(t.productsForList,(function(t){return a("Product",{key:t.id,attrs:{data:t}})})):t._e(),0==t.productsForList.length?[a("h4",{staticClass:"no-content"},[t._v("No Product Found!")])]:t._e()]],2),t.productsData.length>10?a("Paginator",{attrs:{"pagination-size":t.paginationSize,isFlush:t.isFlush},on:{paginationChange:t.updateValue}}):t._e()],1)},n=[],s=a(232),o=s.Z,r=a(1001),c=(0,r.Z)(o,i,n,!1,null,"d2c9c026",null),l=c.exports},1898:function(t,e,a){a.r(e),a.d(e,{__esModule:function(){return s.X},default:function(){return l}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],attrs:{type:"text",name:"search",id:"search",placeholder:"Enter your search key here!"},domProps:{value:t.searchKey},on:{input:[function(e){e.target.composing||(t.searchKey=e.target.value)},t.emitter]}})])},n=[],s=a(6496),o=s.Z,r=a(1001),c=(0,r.Z)(o,i,n,!1,null,"4d4b726e",null),l=c.exports},7930:function(t,e,a){Object.defineProperty(e,"X",{value:!0});const i=a(655),n=a(622),s=(0,i.__importDefault)(a(2811));let o=class extends n.Vue{};o=(0,i.__decorate)([(0,n.Component)({components:{ProductsList:s.default}})],o),e.Z=o},8075:function(t,e,a){Object.defineProperty(e,"X",{value:!0});const i=a(655),n=a(622);let s=class extends n.Vue{paginationSize;isFlush;activeIndex=0;handlePagination(t){"prev"==t?this.activeIndex-=1:this.activeIndex+=1,"prev-first"==t?this.activeIndex=0:"next-last"==t&&(this.activeIndex=this.paginationSize-1),this.emitter()}emitter(){this.$emit("paginationChange",this.activeIndex)}watchFlush(){this.activeIndex=0,this.emitter()}};(0,i.__decorate)([(0,n.Prop)()],s.prototype,"paginationSize",void 0),(0,i.__decorate)([(0,n.Prop)()],s.prototype,"isFlush",void 0),(0,i.__decorate)([(0,n.Watch)("isFlush")],s.prototype,"watchFlush",null),s=(0,i.__decorate)([n.Component],s),e.Z=s},3048:function(t,e,a){Object.defineProperty(e,"X",{value:!0});const i=a(655),n=a(622);let s=class extends n.Vue{data;activeIndex=0;isDetailOpen=!1;handleCarousel(t){"prev"==t?this.activeIndex-=1:this.activeIndex+=1,"prev-first"==t?this.activeIndex=0:"next-last"==t&&(this.activeIndex=this.data.images.length-1)}};(0,i.__decorate)([(0,n.Prop)()],s.prototype,"data",void 0),s=(0,i.__decorate)([n.Component],s),e.Z=s},232:function(t,e,a){Object.defineProperty(e,"X",{value:!0});const i=a(655),n=a(622),s=a(1669),o=(0,i.__importDefault)(a(6457)),r=(0,i.__importDefault)(a(2245)),c=(0,i.__importDefault)(a(1898));let l=class extends n.Vue{productsData=[];productsDataCopy=[];typesList=[];activeIndex=0;paginationSize=0;perPage=10;listSize=0;isLoading=!0;noContent=!1;isFlush=!1;selectedType="All";created(){this.getData()}async getData(){try{const t=await(0,s.getProducts)();this.productsData=t.data.products,this.productsDataCopy=this.productsData,this.typesList=[...new Set(this.productsDataCopy.map((t=>t.product_type)))],this.isLoading=!1}catch(t){this.noContent=!0,console.error(t)}}updateValue(t){this.activeIndex=t,this.scrollTop()}searchIt(t){let e=Object.assign([],this.productsDataCopy);t.length>1?this.productsData=e.filter((e=>e.title.toLowerCase().includes(t.toLowerCase()))):(this.isFlush=!this.isFlush,this.productsData=Object.assign([],this.productsDataCopy))}filterByType(t){let e=Object.assign([],this.productsDataCopy);this.productsData="All"!=t?e.filter((e=>e.product_type==t)):Object.assign([],this.productsDataCopy)}scrollTop(){return document.body.scrollTop=0,document.documentElement.scrollTop=0,0}handlePagination(t){"prev"==t?this.activeIndex-=1:this.activeIndex+=1,"prev-first"==t?this.activeIndex=0:"next-last"==t&&(this.activeIndex=this.paginationSize-1)}get productsForList(){const t=this.productsData.slice(this.activeIndex*this.perPage,(this.activeIndex+1)*this.perPage);return this.paginationSize=this.productsData.length>10?Math.round(this.productsData.length/this.perPage):this.productsData.length,this.listSize=t.length,t}};l=(0,i.__decorate)([(0,n.Component)({components:{Product:o.default,Paginator:r.default,SearchBar:c.default}})],l),e.Z=l},6496:function(t,e,a){Object.defineProperty(e,"X",{value:!0});const i=a(655),n=a(622);let s=class extends n.Vue{searchKey="";emitter(){this.$emit("searchKeyChange",this.searchKey)}};s=(0,i.__decorate)([n.Component],s),e.Z=s},214:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});const i=a(655),n=(0,i.__importDefault)(a(144));e["default"]=new n.default},6021:function(t,e,a){const i=a(655),n=(0,i.__importDefault)(a(144)),s=(0,i.__importDefault)(a(9291)),o=(0,i.__importDefault)(a(3204)),r=a(1680);a(8730),a(44),n.default.config.productionTip=!1,n.default.use(r.BootstrapVue),window.axios=o.default,new n.default({render:t=>t(s.default)}).$mount("#app")},3204:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});const i=a(655),n=(0,i.__importDefault)(a(144)),s=(0,i.__importDefault)(a(9669)),o=(0,i.__importDefault)(a(214)),r=s.default.create({baseURL:"https://teknasyon.netlify.app/.netlify/functions/products"});o.default.$HttpService=r,n.default.prototype.$HttpService=r,o.default.$HttpService.interceptors.request.use((t=>(t.url.includes("[products]")&&(t.headers["X-Access-Token"]="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"),t))),e["default"]=s.default},1669:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.getProducts=void 0;const i=a(655),n=(0,i.__importDefault)(a(214));async function s(){return await n.default.$HttpService.get("[products]")}e.getProducts=s}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,i,n,s){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],n=t[u][1],s=t[u][2];for(var r=!0,c=0;c<i.length;c++)(!1&s||o>=s)&&Object.keys(a.O).every((function(t){return a.O[t](i[c])}))?i.splice(c--,1):(r=!1,s<o&&(o=s));if(r){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,n,s]}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,s,o=i[0],r=i[1],c=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(c)var u=c(a)}for(e&&e(i);l<o.length;l++)s=o[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},i=self["webpackChunkapp"]=self["webpackChunkapp"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(6021)}));i=a.O(i)})();
//# sourceMappingURL=app-legacy.d6bf14a6.js.map