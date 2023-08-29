(function(){"use strict";var e={5027:function(e,t,n){var a=n(9963),l=n(6252);const s={key:0};function o(e,t,n,a,o,i){const r=(0,l.up)("nav-bar"),u=(0,l.up)("router-view"),d=(0,l.up)("pre-loader");return(0,l.wg)(),(0,l.j4)(d,{loading:a.loading,class:"px-3"},{default:(0,l.w5)((()=>[a.isOk?((0,l.wg)(),(0,l.iD)("div",s,[a.navBarVisible?((0,l.wg)(),(0,l.j4)(r,{key:0})):(0,l.kq)("",!0),(0,l.Wm)(u)])):(0,l.kq)("",!0)])),_:1},8,["loading"])}var i=n(2262),r=n(2201),u=n(9996);const d='\n    <path class="path" d="\n        M 30 15\n        L 28 17\n        M 25.61 25.61\n        A 15 15, 0, 0, 1, 15 30\n        A 15 15, 0, 1, 1, 27.99 7.5\n        L 15 15\n        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>\n  ';var c={__name:"preLoader",props:{loading:{type:Boolean,value:!1}},setup(e){return(t,n)=>{const a=(0,l.Q2)("loading");return(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{"element-loading-text":"Загрузка данных...","element-loading-spinner":d,"element-loading-svg-view-box":"-10, -10, 50, 50",class:"mx-auto"},[(0,l.WI)(t.$slots,"default")])),[[a,e.loading]])}}};const p=c;var m=p,f=n(3577);const w={class:"relative"};function v(e,t,n,a,s,o){const i=(0,l.up)("el-menu-item"),r=(0,l.up)("el-menu");return(0,l.wg)(),(0,l.iD)("div",w,[(0,l.Wm)(r,{"default-active":a.activeIndex,mode:"horizontal",router:!0},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.menu,((e,t)=>((0,l.wg)(),(0,l.j4)(i,{key:t,index:e.path},{default:(0,l.w5)((()=>[(0,l.Uk)((0,f.zw)(e.name),1)])),_:2},1032,["index"])))),128))])),_:1},8,["default-active"])])}var g={name:"navBar",setup(){const e=(0,l.f3)("user"),t=(0,i.iH)(e.roles.indexOf("admin")>=0),n=(0,r.yj)(),a=(0,r.tv)(),s=(0,i.qj)([]);a.getRoutes().forEach((e=>{e.meta.name&&(e.meta.forAdmin?t.value&&s.push({path:e.path,name:e.meta.name,order:e.meta.order}):s.push({path:e.path,name:e.meta.name,order:e.meta.order}))})),s.sort(((e,t)=>e.order-t.order));const o=(0,i.iH)(null);return(0,l.m0)((()=>{o.value=n.path})),{activeIndex:o,menu:s,route:n,router:a}}},y=n(3744);const _=(0,y.Z)(g,[["render",v]]);var b=_,h={name:"App",components:{PreLoader:m,NavBar:b},setup(){const e=(0,r.tv)(),t=(0,i.iH)(!1),n=(0,i.iH)(!1),a=({title:e="",message:t="",type:n="",duration:a=3e3}={})=>{(0,u.bM)({title:e,message:t,type:n,duration:a,dangerouslyUseHTMLString:!0})},s=(0,i.qj)({name:"",id:"",roles:[]}),o=(0,l.Fl)((()=>{let t=e.currentRoute.value.name;return["ListQuestions"].includes(t)})),d=async()=>{t.value=!0,await setTimeout((()=>{s.name="Vasya",s.id=15,s.roles.length=0,s.roles.push("admin"),n.value=!0,t.value=!1}),1e3)};return d(),(0,l.JJ)("user",s),(0,l.JJ)("notify",a),{loading:t,isOk:n,navBarVisible:o}}};const q=(0,y.Z)(h,[["render",o]]);var k=q;class x{_url="http://api.kostya0609.online/site";_version="v1";_endpoint="";constructor(e,t="v1"){this._endpoint=e,this._version=t}async _query({method:e="POST",nestedEndpoint:t="",payload:n=null,options:a={download_file:!1},params:l={}}={}){const s=new URL(`${this._url}/${this._version}/${this._endpoint}`+(t?`/${t}`:""));let o={method:e};if(l&&Object.entries(l).forEach((([e,t])=>{t&&s.searchParams.append(e,t)})),n){let e=n instanceof FormData;e?n.append("token",window.token):n.token=window.token,o={...o,body:e?n:JSON.stringify(n,(function(e,t){return"function"===typeof t?""+t:t})),headers:e?{}:{Accept:"application/json","Content-Type":"application/json;charset=utf-8"}}}const i=await fetch(s.href,o);return a.download_file?i:await i.json()}}class j extends x{constructor(){super("questions")}async add(e){const t=await this._query({payload:e,nestedEndpoint:"add"});if(!t.success)throw new Error(t.message);return t}async delete(e){const t=await this._query({payload:e,nestedEndpoint:"delete"});if(!t.success)throw new Error(t.message);return t}async list(e){const t=await this._query({payload:e,nestedEndpoint:"list"});if(!t.success)throw new Error(t.message);return t}}class U extends x{constructor(){super("answers")}async add(e){const t=await this._query({payload:e,nestedEndpoint:"add"});if(!t.success)throw new Error(t.message);return t}async delete(e){const t=await this._query({payload:e,nestedEndpoint:"delete"});if(!t.success)throw new Error(t.message);return t}}const W=new j,D=new U,O=e=>((0,l.dD)("data-v-1421f484"),e=e(),(0,l.Cn)(),e),S={class:"px-0 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-52 py-5"},V={class:"block sm:flex md:flex lg:flex xl:flex 2xl:flex justify-between"},H=O((()=>(0,l._)("h3",{class:"font-bold text-xl"},"Ответы на вопросы",-1))),I={key:0},E=O((()=>(0,l._)("h4",{class:"font-bold text-lg"},"Ваши ответы",-1)));var C={__name:"index",setup(e){const t=(0,l.f3)("notify"),n=(0,i.iH)(!1),a=(0,i.iH)([]),s=(0,i.iH)(!1),o=(0,i.qj)({}),r=(0,i.qj)([]),u=(0,l.Fl)((()=>Object.keys(o).length)),d=async()=>{try{n.value=!0;let e=await W.list({});r.length=0,e.data&&r.push(...e.data)}catch(e){t({title:"Получение данных о вопросах",message:e.message,type:"error",duration:5e3})}finally{n.value=!1}};return d(),(0,l.YP)((()=>s.value),(()=>{a.value=[]})),(e,t)=>{const d=(0,l.up)("el-switch"),c=(0,l.up)("el-radio"),p=(0,l.up)("el-radio-group"),w=(0,l.up)("el-collapse-item"),v=(0,l.up)("el-collapse");return(0,l.wg)(),(0,l.j4)((0,i.SU)(m),{loading:n.value},{default:(0,l.w5)((()=>[(0,l._)("div",S,[(0,l._)("div",V,[H,(0,l.Wm)(d,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e),"active-text":"Аккордеон","inactive-text":"Обычный"},null,8,["modelValue"])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r,((e,n)=>((0,l.wg)(),(0,l.j4)(v,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),key:"q_"+n+"_"+e.id,class:"questions_block ml-5",accordion:s.value},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{title:"Вопрос ID "+(n+1)+" - "+e.question},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{modelValue:o[e.id],"onUpdate:modelValue":t=>o[e.id]=t,class:"!block"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.answers,((e,t)=>((0,l.wg)(),(0,l.j4)(c,{key:"a_"+t+"_"+e.id,label:e.id,class:"!block pl-5 py-1"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Ответ ID "+(0,f.zw)(t+1+" - "+e.answer),1)])),_:2},1032,["label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["title"])])),_:2},1032,["modelValue","accordion"])))),128)),u.value?((0,l.wg)(),(0,l.iD)("div",I,[E,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o,((e,t)=>((0,l.wg)(),(0,l.iD)("p",{key:e+"_"+t,class:"pl-5 py-1"}," Вопрос ID"+(0,f.zw)(t)+" - "+(0,f.zw)(e?"Ответ ID"+e:" нет ответа"),1)))),128))])):(0,l.kq)("",!0)])])),_:1},8,["loading"])}}};const L=(0,y.Z)(C,[["__scopeId","data-v-1421f484"]]);var T=L,P={__name:"blueButton",props:{label:{type:String,value:""},action:{type:String,value:""}},setup(e){return(t,n)=>{const a=(0,l.up)("Plus"),s=(0,l.up)("el-icon"),o=(0,l.up)("Delete"),i=(0,l.up)("Check"),r=(0,l.up)("el-button");return(0,l.wg)(),(0,l.j4)(r,{class:"uppercase blueButton"},{default:(0,l.w5)((()=>["add"===e.action?((0,l.wg)(),(0,l.j4)(s,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(a)])),_:1})):(0,l.kq)("",!0),"remove"===e.action?((0,l.wg)(),(0,l.j4)(s,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)(o)])),_:1})):(0,l.kq)("",!0),"save"===e.action?((0,l.wg)(),(0,l.j4)(s,{key:2},{default:(0,l.w5)((()=>[(0,l.Wm)(i)])),_:1})):(0,l.kq)("",!0),(0,l.Uk)(" "+(0,f.zw)(e.label),1)])),_:1})}}};const z=P;var B=z,A={__name:"returnButton",setup(e){return(e,t)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(B),{label:"Назад",onClick:t[0]||(t[0]=e=>{(0,i.SU)(ge).back(1)})}))}};const Y=A;var $=Y,J=n(844);const K={class:"font-bold block mb-1"},M=(0,l._)("br",{class:"hidden lg:block xl:block 2xl:block"},null,-1);var Z={__name:"answerTemplate",props:{answer:Object,question_id:Number},setup(e){const t=(0,l.f3)("questionsList"),n=(0,l.f3)("user"),a=(0,l.f3)("notify"),s=(0,i.iH)(!1),o=async(e,l)=>{await J.T.confirm(`Вы уверены, что хотите удалить ответ с ID ${l} у вопроса с ID ${e} ?`);try{s.value=!0,await D.delete({user_id:n.id,answer_id:l});let a=t.findIndex((t=>t.id==e)),o=a>=0?t.find((t=>t.id==e)).answers.findIndex((e=>e.id==l)):null;o>=0&&t[a].answers.splice(o,1)}catch(o){"cancel"!==o&&a({title:"Ошибка при выполнении запроса на удаление ответа",message:o.message,type:"error",duration:5e3})}finally{s.value=!1}};return(t,n)=>{const a=(0,l.up)("el-input"),r=(0,l.up)("el-col"),u=(0,l.up)("CloseBold"),d=(0,l.up)("el-icon"),c=(0,l.up)("el-button"),p=(0,l.up)("el-row");return(0,l.wg)(),(0,l.j4)((0,i.SU)(m),{loading:s.value},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"mb-1 pl-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{md:12},{default:(0,l.w5)((()=>[(0,l._)("label",K,"Ответ ID - "+(0,f.zw)(e.answer.id),1),(0,l.Wm)(a,{modelValue:e.answer.answer,"onUpdate:modelValue":n[0]||(n[0]=t=>e.answer.answer=t),class:(0,f.C_)(["w-full",{"border border-red-500":!1}]),type:"textarea",rows:"2",placeholder:"Содержание ответа"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(r,{md:2,class:"lg:ml-3 my-auto"},{default:(0,l.w5)((()=>[M,(0,l.Wm)(c,{size:"small",type:"danger",onClick:n[1]||(n[1]=t=>o(e.question_id,e.answer.id))},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading"])}}};const F=Z;var Q=F;const R={class:"font-bold text-xl mb-1"},N=(0,l._)("label",{class:"font-bold block mb-1"},"Содержание",-1),G=(0,l._)("br",{class:"hidden lg:block xl:block 2xl:block"},null,-1);var X={__name:"questionTemplate",props:{question:Object},setup(e){const t=(0,l.f3)("notify"),n=(0,l.f3)("questionsList"),a=(0,l.f3)("user"),s=(0,i.iH)(!1),o=async e=>{await J.T.confirm(`Вы уверены, что хотите удалить вопрос с ID ${e} ?`);try{s.value=!0,await W.delete({user_id:a.id,question_id:e});let t=n.findIndex((t=>t.id==e));t>=0&&n.splice(t,1)}catch(l){"cancel"!==l&&t({title:"Ошибка при выполнении запроса на удаление вопроса",message:l.message,type:"error",duration:5e3})}finally{s.value=!1}},r=async e=>{try{s.value=!0;let l=await D.add({user_id:a.id,data:{answer:"Тут необходимо ввести содержание этого ответа",question_id:e}});if(l.data){let a=n.findIndex((t=>t.id==e));a>=0&&n[a].answers.push({id:l.data.answer_id,answer:""}),t({title:"Добавление ответа",message:"Ответ в вопрос успешно добавлен",type:"success",duration:2e3})}}catch(l){t({title:"Добавление ответа в вопрос",message:l.message,type:"error",duration:5e3})}finally{s.value=!1}};return(t,n)=>{const a=(0,l.up)("el-input"),u=(0,l.up)("el-col"),d=(0,l.up)("CloseBold"),c=(0,l.up)("el-icon"),p=(0,l.up)("el-button"),w=(0,l.up)("el-row");return(0,l.wg)(),(0,l.j4)((0,i.SU)(m),{loading:s.value},{default:(0,l.w5)((()=>[(0,l._)("h3",R,"Вопрос ID - "+(0,f.zw)(e.question.id),1),(0,l.Wm)(w,{class:"mb-3 pl-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{md:12},{default:(0,l.w5)((()=>[N,(0,l.Wm)(a,{modelValue:e.question.question,"onUpdate:modelValue":n[0]||(n[0]=t=>e.question.question=t),class:(0,f.C_)(["w-full",{"border border-red-500":!1}]),placeholder:"Содержание вопроса"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,{md:2,class:"lg:ml-3 my-auto"},{default:(0,l.w5)((()=>[G,(0,l.Wm)(p,{size:"small",type:"danger",onClick:n[1]||(n[1]=t=>o(e.question.id))},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d)])),_:1})])),_:1})])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.question.answers,((t,n)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(Q),{key:"a_"+t.id+"_"+n,answer:e.question.answers[n],"onUpdate:answer":t=>e.question.answers[n]=t,question_id:e.question.id},null,8,["answer","onUpdate:answer","question_id"])))),128)),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{md:12,align:"right"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(B),{action:"add",label:"ответ",onClick:n[2]||(n[2]=t=>r(e.question.id))})])),_:1})])),_:1})])),_:1},8,["loading"])}}};const ee=X;var te=ee,ne={__name:"questions",props:{value:Array},setup(e){const t=(0,l.f3)("questionsList"),n=(0,l.f3)("notify"),a=(0,l.f3)("user"),s=(0,i.iH)(!1),o=async()=>{try{s.value=!0;let e=await W.add({user_id:a.id,data:{question:"Тут необходимо ввести содержание этого вопроса"}});e.data&&(t.push({id:e.data.question_id,question:"",answers:[]}),n({title:"Добавление вопроса",message:"Успешно добавлен",type:"success",duration:2e3}))}catch(e){n({title:"Добавление вопроса",message:e.message,type:"error",duration:5e3})}finally{s.value=!1}};return(t,n)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(m),{loading:s.value,class:"p-3"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.value,((t,n)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(te),{key:"q_"+t.id+"_"+n,question:e.value[n],"onUpdate:question":t=>e.value[n]=t,class:"mb-5"},null,8,["question","onUpdate:question"])))),128)),(0,l.Wm)((0,i.SU)(B),{action:"add",label:"вопрос",onClick:o})])),_:1},8,["loading"]))}};const ae=ne;var le=ae;const se={class:"font-bold text-xl"};function oe(e,t,n,a,s,o){return(0,l.wg)(),(0,l.iD)("h3",se,"В разработке")}var ie={name:"settings"};const re=(0,y.Z)(ie,[["render",oe]]);var ue=re;const de={class:"flex justify-between mb-3"},ce=(0,l._)("h3",{class:"font-bold text-xl"},"Администрирование",-1);var pe={__name:"index",setup(e){const t=(0,l.f3)("notify"),n=(0,i.iH)(!1),a=(0,i.iH)("questions"),s=(0,i.qj)({questions:"Вопросы",settings:"Настройки"}),o=(0,i.qj)([]),r=async()=>{try{n.value=!0;let e=await W.list({});o.length=0,e.data&&o.push(...e.data)}catch(e){t({title:"Получение данных о вопросах",message:e.message,type:"error",duration:5e3})}finally{n.value=!1}};return r(),(0,l.JJ)("questionsList",o),(e,t)=>{const r=(0,l.up)("el-tab-pane"),u=(0,l.up)("el-tabs");return(0,l.wg)(),(0,l.j4)((0,i.SU)(m),{loading:n.value,class:"py-3"},{default:(0,l.w5)((()=>[(0,l._)("div",de,[ce,(0,l.Wm)((0,i.SU)($))]),(0,l.Wm)(u,{type:"border-card",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e)},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s,((e,t)=>((0,l.wg)(),(0,l.j4)(r,{label:e,name:t,key:t},null,8,["label","name"])))),128)),"questions"!==a.value||n.value?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)((0,i.SU)(le),{key:0,value:o,"onUpdate:value":t[0]||(t[0]=e=>o=e)},null,8,["value"])),"settings"!==a.value||n.value?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)((0,i.SU)(ue),{key:1}))])),_:1},8,["modelValue"])])),_:1},8,["loading"])}}};const me=pe;var fe=me;const we=[{path:"/site/questions/",children:[{path:"list",name:"ListQuestions",component:T,meta:{name:"Вопросы ответы",forAdmin:!1,order:1}}]},{path:"/site/admin/",name:"AdminPage",component:fe,meta:{name:"Админка",forAdmin:!0,order:2}}],ve=(0,r.p7)({history:(0,r.PO)("/"),routes:we,previous:null});ve.beforeEach(((e,t,n)=>{ve.previous=t.name,!ve.getRoutes().find((t=>t.name===e.name))&&ve.push({name:"ListQuestions"}),n()}));var ge=ve,ye=n(1181),_e=n(3660),be=n(7484),he=n.n(be),qe=(n(600),n(5781));he().locale("ru");const ke=(0,a.ri)(k);ke.use(ye.Z,{locale:_e.Z}),ke.use(ge);for(const[xe,je]of Object.entries(qe))ke.component(xe,je);ke.mount("#app")}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,l,s){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],l=e[d][1],s=e[d][2];for(var i=!0,r=0;r<a.length;r++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(i=!1,s<o&&(o=s));if(i){e.splice(d--,1);var u=l();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,l,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,s,o=a[0],i=a[1],r=a[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(r)var d=r(n)}for(t&&t(a);u<o.length;u++)s=o[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},a=self["webpackChunksite"]=self["webpackChunksite"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(5027)}));a=n.O(a)})();
//# sourceMappingURL=app.f923ff1c.js.map