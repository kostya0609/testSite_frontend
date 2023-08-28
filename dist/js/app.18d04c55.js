(function(){"use strict";var e={282:function(e,n,t){var a=t(963),o=t(252);const r={key:0};function s(e,n,t,a,s,i){const l=(0,o.up)("nav-bar"),u=(0,o.up)("router-view"),d=(0,o.up)("pre-loader");return(0,o.wg)(),(0,o.j4)(d,{loading:a.loading},{default:(0,o.w5)((()=>[a.isOk?((0,o.wg)(),(0,o.iD)("div",r,[a.navBarVisible?((0,o.wg)(),(0,o.j4)(l,{key:0})):(0,o.kq)("",!0),(0,o.Wm)(u)])):(0,o.kq)("",!0)])),_:1},8,["loading"])}var i=t(262),l=t(201);const u='\n    <path class="path" d="\n        M 30 15\n        L 28 17\n        M 25.61 25.61\n        A 15 15, 0, 0, 1, 15 30\n        A 15 15, 0, 1, 1, 27.99 7.5\n        L 15 15\n        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>\n  ';var d={__name:"preLoader",props:{loading:{type:Boolean,value:!1}},setup(e){return(n,t)=>{const a=(0,o.Q2)("loading");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{"element-loading-text":"Загрузка данных...","element-loading-spinner":u,"element-loading-svg-view-box":"-10, -10, 50, 50",class:"mx-auto"},[(0,o.WI)(n.$slots,"default")])),[[a,e.loading]])}}};const c=d;var p=c,f=t(577);const m={class:"relative"};function v(e,n,t,a,r,s){const i=(0,o.up)("el-menu-item"),l=(0,o.up)("el-menu");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(l,{"default-active":a.activeIndex,mode:"horizontal",router:!0},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.menu,((e,n)=>((0,o.wg)(),(0,o.j4)(i,{key:n,index:e.path},{default:(0,o.w5)((()=>[(0,o.Uk)((0,f.zw)(e.name),1)])),_:2},1032,["index"])))),128))])),_:1},8,["default-active"])])}var w={name:"navBar",setup(){const e=(0,o.f3)("user"),n=(0,i.iH)(e.roles.indexOf("admin")>=0),t=(0,l.yj)(),a=(0,l.tv)(),r=(0,i.qj)([]);a.getRoutes().forEach((e=>{e.meta.name&&(e.meta.forAdmin?n.value&&r.push({path:e.path,name:e.meta.name,order:e.meta.order}):r.push({path:e.path,name:e.meta.name,order:e.meta.order}))})),r.sort(((e,n)=>e.order-n.order));const s=(0,i.iH)(null);return(0,o.m0)((()=>{s.value=t.path})),{activeIndex:s,menu:r,route:t,router:a}}},g=t(744);const h=(0,g.Z)(w,[["render",v]]);var y=h,_={name:"App",components:{PreLoader:p,NavBar:y},setup(){const e=(0,l.tv)(),n=(0,i.iH)(!1),t=(0,i.iH)(!1),a=({title:e="",message:n="",type:t="",duration:a=3e3}={})=>{ElNotification({title:e,message:n,type:t,duration:a,dangerouslyUseHTMLString:!0})},r=(0,i.qj)({name:null,roles:[]}),s=(0,o.Fl)((()=>{let n=e.currentRoute.value.name;return["ListQuestions"].includes(n)})),u=()=>{n.value=!0,setTimeout((()=>{r.name="Vasya",r.roles.length=0,r.roles.push("admin"),t.value=!0,n.value=!1}),1e3)};return u(),(0,o.JJ)("user",r),(0,o.JJ)("notify",a),{loading:n,isOk:t,navBarVisible:s}}};const b=(0,g.Z)(_,[["render",s]]);var x=b;class k{_url="api.kostya0609.online/site";_version="";_endpoint="";constructor(e,n="v1"){this._endpoint=e,this._version=n}async _query({method:e="POST",nestedEndpoint:n="",payload:t=null,options:a={download_file:!1},params:o={}}={}){const r=new URL(`${this._url}/${this._version}/${this._endpoint}`+(n?`/${n}`:""));let s={method:e};if(o&&Object.entries(o).forEach((([e,n])=>{n&&r.searchParams.append(e,n)})),t){let e=t instanceof FormData;e?t.append("token",window.token):t.token=window.token,s={...s,body:e?t:JSON.stringify(t,(function(e,n){return"function"===typeof n?""+n:n})),headers:e?{}:{Accept:"application/json","Content-Type":"application/json;charset=utf-8"}}}const i=await fetch(r.href,s);return a.download_file?i:await i.json()}}class j extends k{constructor(){super("questions")}async create(e){const n=await this._query({payload:e,nestedEndpoint:"create"});if(!n.success)throw new Error(n.message);return n}async delete(e){const n=await this._query({payload:e,nestedEndpoint:"delete"});if(!n.success)throw new Error(n.message);return n}async list(e){const n=await this._query({payload:e,nestedEndpoint:"list"});if(!n.success)throw new Error(n.message);return n}}const q=new j,O=e=>((0,o.dD)("data-v-08f5c65d"),e=e(),(0,o.Cn)(),e),D={class:"px-0 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-52 py-5"},S={class:"block sm:flex md:flex lg:flex xl:flex 2xl:flex justify-between"},U=O((()=>(0,o._)("h3",{class:"font-bold text-xl"},"Ответы на вопросы",-1))),E=O((()=>(0,o._)("h4",{class:"font-bold text-lg"},"Ваши ответы",-1)));var H={__name:"index",setup(e){const n=(0,o.f3)("notify"),t=(0,i.iH)(!1),a=(0,i.iH)([]),r=(0,i.iH)(!1),s=(0,i.qj)({}),l=(0,i.qj)([{id:1,question:"q1",answers:[{id:1,answer:"a11"},{id:2,answer:"a12"},{id:3,answer:"a13"}]},{id:2,question:"q2",answers:[{id:4,answer:"a21"},{id:5,answer:"a22"},{id:6,answer:"a23"}]},{id:3,question:"q3",answers:[{id:7,answer:"a31"},{id:8,answer:"a32"},{id:9,answer:"a33"}]}]),u=async()=>{try{t.value=!0;let e=await q.list({});console.log(e)}catch(e){n({title:"Получение данных о вопросах",message:e.message,type:"error",duration:5e3})}finally{t.value=!1}};return u(),l.forEach((e=>s[e.id]=null)),(0,o.YP)((()=>r.value),(()=>{a.value=[]})),(e,n)=>{const u=(0,o.up)("el-switch"),d=(0,o.up)("el-radio"),c=(0,o.up)("el-radio-group"),m=(0,o.up)("el-collapse-item"),v=(0,o.up)("el-collapse");return(0,o.wg)(),(0,o.j4)((0,i.SU)(p),{loading:t.value},{default:(0,o.w5)((()=>[(0,o._)("div",D,[(0,o._)("div",S,[U,(0,o.Wm)(u,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e),"active-text":"Аккордеон","inactive-text":"Обычный"},null,8,["modelValue"])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l,((e,t)=>((0,o.wg)(),(0,o.j4)(v,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=e=>a.value=e),key:"q_"+t+"_"+e.id,class:"questions_block ml-5",accordion:r.value},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{title:"Вопрос ID "+(t+1)+" - "+e.question},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{modelValue:s[e.id],"onUpdate:modelValue":n=>s[e.id]=n,class:"!block"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.answers,((e,n)=>((0,o.wg)(),(0,o.j4)(d,{key:"a_"+n+"_"+e.id,label:e.id,class:"!block pl-5 py-1"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Ответ ID "+(0,f.zw)(n+1+" - "+e.answer),1)])),_:2},1032,["label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["title"])])),_:2},1032,["modelValue","accordion"])))),128)),E,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s,((e,n)=>((0,o.wg)(),(0,o.iD)("p",{key:e+"_"+n,class:"pl-5 py-1"}," Вопрос ID"+(0,f.zw)(n)+" - "+(0,f.zw)(e?"Ответ ID"+e:" нет ответа"),1)))),128))])])),_:1},8,["loading"])}}};const V=(0,g.Z)(H,[["__scopeId","data-v-08f5c65d"]]);var P=V,L={__name:"blueButton",props:{label:{type:String,value:""}},setup(e){return(n,t)=>{const a=(0,o.up)("el-button");return(0,o.wg)(),(0,o.j4)(a,{class:"uppercase blueButton"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,f.zw)(e.label),1)])),_:1})}}};const A=L;var B=A,I={__name:"returnButton",setup(e){return(e,n)=>((0,o.wg)(),(0,o.j4)((0,i.SU)(B),{label:"Назад",onClick:n[0]||(n[0]=e=>{(0,i.SU)(K).back(1)})}))}};const T=I;var W=T;const z={class:"flex justify-between"},M=(0,o._)("h3",{class:"font-bold text-xl"},"Страница администрирования",-1);var C={__name:"index",setup(e){const n=(0,i.iH)(!1);return(e,t)=>((0,o.wg)(),(0,o.j4)((0,i.SU)(p),{loading:n.value},{default:(0,o.w5)((()=>[(0,o._)("div",z,[M,(0,o.Wm)((0,i.SU)(W))])])),_:1},8,["loading"]))}};const J=C;var Y=J;const Z=[{path:"/site/questions/",children:[{path:"list",name:"ListQuestions",component:P,meta:{name:"Вопросы ответы",forAdmin:!1,order:1}}]},{path:"/site/admin/",name:"AdminPage",component:Y,meta:{name:"Администрирование",forAdmin:!0,order:2}}],$=(0,l.p7)({history:(0,l.PO)("/"),routes:Z,previous:null});$.beforeEach(((e,n,t)=>{$.previous=n.name,!$.getRoutes().find((n=>n.name===e.name))&&$.push({name:"ListQuestions"}),t()}));var K=$,Q=t(715),R=t(660),F=t(484),N=t.n(F),G=(t(600),t(781));N().locale("ru");const X=(0,a.ri)(x);X.use(Q.Z,{locale:R.Z}),X.use(K);for(const[ee,ne]of Object.entries(G))X.component(ee,ne);X.mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,r){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(d--,1);var u=o();void 0!==u&&(n=u)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,o,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,r,s=a[0],i=a[1],l=a[2],u=0;if(s.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var d=l(t)}for(n&&n(a);u<s.length;u++)r=s[u],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},a=self["webpackChunksite"]=self["webpackChunksite"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(282)}));a=t.O(a)})();
//# sourceMappingURL=app.18d04c55.js.map