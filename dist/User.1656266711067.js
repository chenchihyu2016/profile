var T=Object.defineProperty;var w=(e,t,i)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var $=(e,t,i)=>(w(e,typeof t!="symbol"?t+"":t,i),i);import{d as y,_ as k,o as n,c as d,a,b as M,w as D,e as b,t as o,T as S,F as u,r as p,f as h,g as P,h as A,i as L,z as N,j,k as B,s as q,l as f,u as z,m as F,n as I,p as V,q as H}from"./index.1656266711067.js";import{u as E,a as K}from"./scroll.1656266711067.js";const W=y({props:{data:{type:Object,required:!0},store:{type:Object,required:!0}},setup(){const{imageRef:e,clickImageRef:t,imageChange:i}=E();return{rightData:["id","name","username","phone"],imageRef:e,clickImageRef:t,imageChange:i}}}),Y={class:"wrapper"},G={class:"image_container"},J=["src"],Q={class:"right_data_container"},X={class:"data_name"},Z={class:"data_value"},x={class:"bottom_data_container"},ee={class:"data_item"},ae={class:"data_name"},se={class:"data_value"},te={class:"data_item"},oe={class:"data_name"},ne={class:"data_value"},ie={class:"data_item"},de={class:"data_name"},le={class:"data_value"},ce={class:"data_item"},re={class:"data_name"},_e={class:"data_value"},me={class:"button_container"};function ue(e,t,i,c,r,_){return n(),d("div",Y,[a("input",{type:"file",ref:"imageRef",accept:"image/*",onChange:t[0]||(t[0]=(...s)=>e.imageChange&&e.imageChange(...s))},null,544),a("div",G,[M(S,{name:"fade",mode:"out-in"},{default:D(()=>[e.data.image?(n(),d("img",{src:e.data.image,key:e.data.id,class:"image",onClick:t[1]||(t[1]=s=>e.clickImageRef(e.data.id))},null,8,J)):(n(),d("div",{key:1,class:"image",onClick:t[2]||(t[2]=b(s=>e.clickImageRef(e.data.id),["self"]))},o(e.$t("CLICK_TO_UPDATE_PHOTO")),1))]),_:1})]),a("div",Q,[(n(!0),d(u,null,p(e.rightData,(s,l)=>(n(),d("div",{class:"data_item",key:l},[a("div",X,o(e.$t(s.toUpperCase())),1),a("div",Z,o(e.data[s]),1)]))),128))]),a("div",x,[a("div",ee,[a("div",ae,o(e.$t("EMAIL")),1),a("div",se,o(e.data.email),1)]),a("div",te,[a("div",oe,o(e.$t("WEBSITE")),1),a("div",ne,o(e.data.website),1)]),a("div",ie,[a("div",de,o(e.$t("ADDRESS")),1),a("div",le,o(`${e.data.address.city},
                        ${e.data.address.street},
                        ${e.data.address.suite},
                        ${e.data.address.zipcode}`),1)]),a("div",ce,[a("div",re,o(e.$t("COMPANY")),1),a("div",_e,o(e.data.company.name),1)])]),a("div",me,[a("button",{class:"success",onClick:t[3]||(t[3]=b(s=>e.$emit("destroy"),["self"]))},o(e.$t("CLOSE")),1)])])}var pe=k(W,[["render",ue],["__scopeId","data-v-cb66ab30"]]);const ve=y({props:{modals:{type:Object},store:{type:Object},destroyModals:{type:Function}},components:{MUserDetail:pe},setup(e){const t=e.modals,i=e.store,c=e.destroyModals,r=h(t);function _(s){const l=r.value.findIndex(m=>m.id===s);r.value.splice(l,1),r.value.length===0&&c()}return{modals:r,storeProp:i,destroy:_}}}),he={class:"modal_backdrop"};function ge(e,t,i,c,r,_){return n(),d("div",he,[(n(!0),d(u,null,p(e.modals,s=>(n(),P(A(s.modalName),{store:e.storeProp,data:s.data,key:s.id,class:"component",onDestroy:l=>e.destroy(s.id),onCallback:s.callback},null,8,["store","data","onDestroy","onCallback"]))),128))])}var $e=k(ve,[["render",ge],["__scopeId","data-v-3e3fffaa"]]);class fe{constructor(){$(this,"modals");$(this,"app");this.modals=h([]),this.app=null}userDetail(t,i){const c="MUserDetail";this.create(t,c,i)}create(t,i,c){var l;const _={id:new Date().getTime(),data:t,callback:c,modalName:i},s=L({legacy:!1,locale:(l=localStorage.getItem("locale"))!=null?l:"en-US",fallbackLocale:"en-US",messages:{"zh-TW":N,"en-US":j}});if(this.modals.value.push(_),this.modals.value.length===1){const m=this.modals,v=document.createElement("div"),g=this.destroyModals.bind(this);this.app=B($e,{modals:m,store:q,destroyModals:g}),this.app.use(s),v.id="modalElement",document.body.appendChild(v),this.app.mount(v)}}destroyModals(){const t=document.body.querySelector("#modalElement");this.app.unmount(),document.body.removeChild(t)}}var ye=new fe;const ke=y({setup(){const e=h(!0),t=h(),i=f(()=>m.isMobile),c=f(()=>v["data/getUsers"]),r=f(()=>i.value?["id","name"]:["id","name","username","email","phone","website"]),{imageRef:_,clickImageRef:s,imageChange:l}=E(),{state:m,getters:v,dispatch:g}=z(),{setScrollTarget:R}=K();F(async()=>{await g("data/getUsers"),R(t.value),setTimeout(()=>{e.value=!1},750)});function U(O){ye.userDetail(O)}return{users:c,loading:e,itemList:r,imageRef:_,isMobile:i,elementContainerRef:t,clickImageRef:s,imageChange:l,userDetail:U}}}),C=e=>(V("data-v-701b9c42"),e=e(),H(),e),Ce={class:"element_container",ref:"elementContainerRef"},be={class:"image_container"},Ie=["src","onClick"],Me=["onClick"],De={class:"data_container"},Se={class:"data_name"},Ee={class:"data_value"},Re={key:0,class:"data_item"},Ue={class:"data_name"},Oe={class:"data_value"},Te={key:1,class:"data_item"},we={class:"data_name"},Pe={class:"data_value"},Ae=["onClick"],Le=C(()=>a("div",{class:"image_container"},[a("div",{class:"image_skeleton"})],-1)),Ne={class:"data_container"},je=C(()=>a("div",{class:"data_name_skeleton"},null,-1)),Be=C(()=>a("div",{class:"data_value"},null,-1)),qe=[je,Be];function ze(e,t,i,c,r,_){return n(),d("main",Ce,[e.loading?(n(),d(u,{key:1},p(5,s=>a("div",{class:"element",key:s},[Le,a("div",Ne,[(n(),d(u,null,p(9,l=>a("div",{class:"data_item",key:l},qe)),64))])])),64)):(n(),d(u,{key:0},[a("input",{type:"file",ref:"imageRef",accept:"image/*",onChange:t[0]||(t[0]=(...s)=>e.imageChange&&e.imageChange(...s))},null,544),(n(!0),d(u,null,p(e.users,s=>(n(),d("div",{class:"element",key:s.id},[a("figure",be,[M(S,{name:"fade",mode:"out-in"},{default:D(()=>[s.image?(n(),d("img",{src:s.image,key:s.image,class:"image",onClick:l=>e.clickImageRef(s.id)},null,8,Ie)):(n(),d("figcaption",{key:1,class:"image",onClick:l=>e.clickImageRef(s.id)},o(e.$t("CLICK_TO_UPDATE_PHOTO")),9,Me))]),_:2},1024)]),a("div",De,[(n(!0),d(u,null,p(e.itemList,(l,m)=>(n(),d("div",{class:"data_item",key:m},[a("div",Se,o(e.$t(l.toUpperCase())),1),a("div",Ee,o(s[l]),1)]))),128)),e.isMobile?I("",!0):(n(),d("div",Re,[a("div",Ue,o(e.$t("COMPANY")),1),a("div",Oe,o(s.company.name),1)])),e.isMobile?I("",!0):(n(),d("div",Te,[a("div",we,o(e.$t("ADDRESS")),1),a("div",Pe,o(s.address.city)+", "+o(s.address.street),1)])),a("div",{class:"data_item clickable",onClick:l=>e.userDetail(s)},o(e.$t("SEE_MORE")),9,Ae)])]))),128))],64))],512)}var Ke=k(ke,[["render",ze],["__scopeId","data-v-701b9c42"]]);export{Ke as default};