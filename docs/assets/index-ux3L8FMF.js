import{M as b}from"./MySvgIcon-942L7yLE.js";import{f as K,g as P,a as G}from"./consult-QXGEUvDX.js";import{e as g,d as I,r as p,o as m,c as w,f as s,a as n,t as v,w as l,b as L,u as k,F as T,g as E,h as S,_ as F,i as M,n as Q,j as Y,k as q,l as W,m as A,p as R,q as J,s as V,v as j,x as X}from"./index-erOPif8K.js";import{s as Z}from"./index-mAaPtwf-.js";import{C as x}from"./index-TccbDu2X.js";const z="/excellent-medical-consultation/assets/ad-GVbUr23F.png",H=(e="doc")=>{const i=g(!1);return{loading:i,follow:async t=>{i.value=!0;try{await K(t.id,e),t.likeFlag=t.likeFlag===1?0:1}finally{i.value=!1}}}},ee={class:"knowledge-card van-hairline--bottom"},te={class:"head"},ne={class:"info"},se={class:"name"},oe={class:"dep van-ellipsis"},ae={class:"body"},ie={class:"title van-ellipsis"},le={class:"tag"},ce=["innerHTML"],re={class:"imgs"},de={class:"logs"},ue=I({__name:"KnowledgeCard",props:{item:{}},setup(e){const{loading:i,follow:o}=H("knowledge");return(t,a)=>{const d=p("van-image"),u=p("van-button");return m(),w("div",ee,[s("div",te,[n(d,{round:"",class:"avatar",src:t.item.creatorAvatar},null,8,["src"]),s("div",ne,[s("p",se,v(t.item.creatorName),1),s("p",oe,v(t.item.creatorHospatalName)+" "+v(t.item.creatorDep)+" "+v(t.item.creatorTitles),1)]),n(u,{class:"btn",size:"small",loading:k(i),onClick:a[0]||(a[0]=c=>k(o)(t.item)),round:""},{default:l(()=>[L(v(t.item.likeFlag===1?"已关注":"+ 关注"),1)]),_:1},8,["loading"])]),s("div",ae,[s("h3",ie,v(t.item.title),1),s("p",le,[(m(!0),w(T,null,E(t.item.topic.split(","),(c,r)=>(m(),w("span",{key:r},"# "+v(c),1))),128))]),s("p",{class:"intro van-multi-ellipsis--l2",innerHTML:t.item.content},null,8,ce),s("div",re,[(m(!0),w(T,null,E(t.item.coverUrl,(c,r)=>(m(),S(d,{key:r,src:c},null,8,["src"]))),128))]),s("p",de,[s("span",null,v(t.item.collectionNumber)+" 收藏",1),s("span",null,v(t.item.commentNumber)+" 评论",1)])])])}}}),_e=F(ue,[["__scopeId","data-v-83913dd3"]]),pe={class:"knowledge-list"},N=I({__name:"KnowledgeList",props:{type:{}},setup(e){const o=g({type:e.type,current:1,pageSize:10}),t=g([]),a=g(!1),d=g(!1),u=async()=>{if(d.value)return Z("当前已经是最后的数据");a.value=!0;const c=await P(o.value);t.value.push(...c.data.rows),o.value.current>=c.data.pageTotal?d.value=!0:o.value.current++,a.value=!1};return(c,r)=>{const f=p("van-list");return m(),w("div",pe,[n(f,{loading:a.value,"onUpdate:loading":r[0]||(r[0]=_=>a.value=_),finished:d.value,"finished-text":"没有更多了",onLoad:u},{default:l(()=>[(m(!0),w(T,null,E(t.value,_=>(m(),S(_e,{key:_.id,item:_},null,8,["item"]))),128))]),_:1},8,["loading","finished"])])}}}),me={class:"doctor-card"},fe={class:"name"},ve={class:"van-ellipsis"},he=I({__name:"DoctorCard",props:{item:{}},setup(e){const{loading:i,follow:o}=H();return(t,a)=>{const d=p("van-image"),u=p("van-button");return m(),w("div",me,[n(d,{round:"",src:t.item.avatar},null,8,["src"]),s("p",fe,v(t.item.name),1),s("p",ve,v(t.item.hospitalName)+" "+v(t.item.depName),1),s("p",null,v(t.item.positionalTitles),1),n(u,{round:"",loading:k(i),onClick:a[0]||(a[0]=c=>k(o)(t.item)),size:"small",type:"primary"},{default:l(()=>[L(v(t.item.likeFlag===1?"已关注":"+ 关注"),1)]),_:1},8,["loading"])])}}}),ge=F(he,[["__scopeId","data-v-fc28257f"]]);function B(e){return Y()?(q(e),!0):!1}function D(e){return typeof e=="function"?e():k(e)}const we=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ye=Object.prototype.toString,be=e=>ye.call(e)==="[object Object]",ke=()=>{};function $e(e){return e||W()}function Se(e,i=!0,o){$e()?M(e,o):i?e():Q(e)}function Ie(e){var i;const o=D(e);return(i=o==null?void 0:o.$el)!=null?i:o}const O=we?window:void 0;function Ce(...e){let i,o,t,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,t,a]=e,i=O):[i,o,t,a]=e,!i)return ke;Array.isArray(o)||(o=[o]),Array.isArray(t)||(t=[t]);const d=[],u=()=>{d.forEach(_=>_()),d.length=0},c=(_,y,$,C)=>(_.addEventListener(y,$,C),()=>_.removeEventListener(y,$,C)),r=A(()=>[Ie(i),D(a)],([_,y])=>{if(u(),!_)return;const $=be(y)?{...y}:y;d.push(...o.flatMap(C=>t.map(U=>c(_,C,U,$))))},{immediate:!0,flush:"post"}),f=()=>{r(),u()};return B(f),f}function Ne(){const e=g(!1);return W()&&M(()=>{e.value=!0}),e}function Te(e){const i=Ne();return J(()=>(i.value,!!e()))}function Ee(e,i={}){const{window:o=O}=i,t=Te(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let a;const d=g(!1),u=f=>{d.value=f.matches},c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",u):a.removeListener(u))},r=R(()=>{t.value&&(c(),a=o.matchMedia(D(e)),"addEventListener"in a?a.addEventListener("change",u):a.addListener(u),d.value=a.matches)});return B(()=>{r(),c(),a=void 0}),d}function Le(e={}){const{window:i=O,initialWidth:o=Number.POSITIVE_INFINITY,initialHeight:t=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:d=!0}=e,u=g(o),c=g(t),r=()=>{i&&(d?(u.value=i.innerWidth,c.value=i.innerHeight):(u.value=i.document.documentElement.clientWidth,c.value=i.document.documentElement.clientHeight))};if(r(),Se(r),Ce("resize",r,{passive:!0}),a){const f=Ee("(orientation: portrait)");A(f,()=>r())}return{width:u,height:c}}const Fe=e=>(V("data-v-8e75fd25"),e=e(),j(),e),Me={class:"follow-doctor"},De=Fe(()=>s("div",{className:"head"},[s("p",null,"推荐关注"),s("a",{href:"javascript:;"},[L(" 查看更多"),s("i",{class:"van-icon van-icon-arrow"})])],-1)),Oe={class:"body"},We=I({__name:"FollowDoctor",setup(e){const{width:i}=Le(),o=g();return M(async()=>{const t=await G({current:1,pageSize:5});console.log(t),o.value=t.data.rows}),(t,a)=>{var r;const d=p("van-swipe-item"),u=p("van-swipe"),c=p("van-empty");return m(),w("div",Me,[De,s("div",Oe,[(r=o.value)!=null&&r.length?(m(),S(u,{key:0,width:150/375*k(i),"show-indicators":!1,loop:!1},{default:l(()=>[(m(!0),w(T,null,E(o.value,f=>(m(),S(d,{key:f.id},{default:l(()=>[n(ge,{item:f},null,8,["item"])]),_:2},1024))),128))]),_:1},8,["width"])):(m(),S(c,{key:1,image:"error",description:"暂无数据"}))])])}}}),Ae=F(We,[["__scopeId","data-v-8e75fd25"]]),h=e=>(V("data-v-40a7eafb"),e=e(),j(),e),Ve={class:"home-page"},je={class:"home-header"},ze={class:"con"},He=h(()=>s("h1",null,"优医",-1)),Be={class:"search"},Ue={class:"home-navs"},Ke=h(()=>s("p",{class:"title"},"问医生",-1)),Pe=h(()=>s("p",{class:"desc"},"按科室查问医生",-1)),Ge=h(()=>s("p",{class:"title"},"极速问诊",-1)),Qe=h(()=>s("p",{class:"desc"},"20s医生极速回复",-1)),Ye=h(()=>s("p",{class:"title"},"开药门诊",-1)),qe=h(()=>s("p",{class:"desc"},"线上买药更方便",-1)),Re=h(()=>s("p",{class:"title"},"药品订单",-1)),Je=h(()=>s("p",{class:"title"},"健康档案",-1)),Xe=h(()=>s("p",{class:"title"},"我的处方",-1)),Ze=h(()=>s("p",{class:"title"},"疾病查询",-1)),xe={class:"home-banner"},et=h(()=>s("img",{src:z,alt:""},null,-1)),tt=h(()=>s("img",{src:z,alt:""},null,-1)),nt=I({__name:"index",setup(e){const i=X(),o=g(0);return(t,a)=>{const d=p("van-tab"),u=p("van-tabs"),c=p("router-link"),r=p("van-col"),f=p("van-row"),_=p("van-swipe-item"),y=p("van-swipe");return m(),w("div",Ve,[s("div",je,[s("div",ze,[He,s("div",Be,[n(b,{name:"home-search"}),L(" 搜一搜：疾病/症状/医生/健康知识 ")])])]),n(u,{shrink:"",sticky:"",active:o.value,"onUpdate:active":a[0]||(a[0]=$=>o.value=$)},{default:l(()=>[n(d,{title:"关注"},{default:l(()=>[n(Ae),n(N,{type:"like"})]),_:1}),n(d,{title:"推荐"},{default:l(()=>[n(N,{type:"recommend"})]),_:1}),n(d,{title:"减脂"},{default:l(()=>[n(N,{type:"fatReduction"})]),_:1}),n(d,{title:"饮食"},{default:l(()=>[n(N,{type:"food"})]),_:1})]),_:1},8,["active"]),s("div",Ue,[n(f,null,{default:l(()=>[n(r,{span:"8"},{default:l(()=>[n(c,{to:"/",class:"nav"},{default:l(()=>[n(b,{name:"home-doctor"}),Ke,Pe]),_:1})]),_:1}),n(r,{span:"8"},{default:l(()=>[n(c,{to:"/consult/fast",onClick:a[1]||(a[1]=$=>k(i).setType(k(x).Fast)),class:"nav"},{default:l(()=>[n(b,{name:"home-graphic"}),Ge,Qe]),_:1})]),_:1}),n(r,{span:"8"},{default:l(()=>[n(c,{to:"/",class:"nav"},{default:l(()=>[n(b,{name:"home-prescribe"}),Ye,qe]),_:1})]),_:1})]),_:1}),n(f,null,{default:l(()=>[n(r,{span:"6"},{default:l(()=>[n(c,{to:"/",class:"nav min"},{default:l(()=>[n(b,{name:"home-order"}),Re]),_:1})]),_:1}),n(r,{span:"6"},{default:l(()=>[n(c,{to:"/",class:"nav min"},{default:l(()=>[n(b,{name:"home-docs"}),Je]),_:1})]),_:1}),n(r,{span:"6"},{default:l(()=>[n(c,{to:"/",class:"nav min"},{default:l(()=>[n(b,{name:"home-rp"}),Xe]),_:1})]),_:1}),n(r,{span:"6"},{default:l(()=>[n(c,{to:"/",class:"nav min"},{default:l(()=>[n(b,{name:"home-find"}),Ze]),_:1})]),_:1})]),_:1})]),s("div",xe,[n(y,{"indicator-color":"#fff"},{default:l(()=>[n(_,null,{default:l(()=>[et]),_:1}),n(_,null,{default:l(()=>[tt]),_:1})]),_:1})])])}}}),ct=F(nt,[["__scopeId","data-v-40a7eafb"]]);export{ct as default};
