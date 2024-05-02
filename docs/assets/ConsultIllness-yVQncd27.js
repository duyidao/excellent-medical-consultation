import{_ as T}from"./avatar-doctor-9PVW_Dbc.js";import{M as w}from"./MySvgIcon-942L7yLE.js";import{M as F}from"./MyNavBar-juD04P2Y.js";import{I as p}from"./index-TccbDu2X.js";import{M as g}from"./MyRadioBtn-XW1rGM3m.js";import{u as U}from"./consult-QXGEUvDX.js";import{d as h,q as I,r as V,o as b,c as x,a as u,s as D,v as M,f as l,_ as y,e as B,i as S,x as k,z as N,w as $,D as z,b as A}from"./index-erOPif8K.js";import{s as R}from"./function-call-6z9IMAhC.js";import{a as f}from"./index-mAaPtwf-.js";const O=o=>(D("data-v-89e10e8a"),o=o(),M(),o),q={class:"illness-img"},E=O(()=>l("p",{class:"tip"},"上传内容仅医生可见,最多9张图,最大5MB",-1)),H=h({__name:"MyUploadImg",props:{modelValue:{}},emits:["update:modelValue"],setup(o,{emit:m}){const c=o,e=m,r=I(()=>c.modelValue),t=s=>{Array.isArray(s)||s.file&&(s.status="uploading",s.message="上传中...",U(s.file).then(n=>{s.status="done",s.message=void 0,s.url=n.data.url,e("update:modelValue",[n.data,...c.modelValue])}).catch(()=>{s.status="failed",s.message="上传失败"}))},_=s=>{e("update:modelValue",c.modelValue.filter(n=>n.url!==s.url))};return(s,n)=>{const a=V("van-uploader");return b(),x("div",q,[u(a,{"after-read":t,onDelete:_,modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=v=>r.value=v),"max-count":"9","max-size":5*1024*1024,"upload-icon":"photo-o","upload-text":"上传图片"},null,8,["modelValue"]),E])}}}),L=y(H,[["__scopeId","data-v-89e10e8a"]]),d=o=>(D("data-v-d6d1ca33"),o=o(),M(),o),W={class:"consult-illness-page"},Y={class:"illness-tip van-hairline--bottom"},j=d(()=>l("img",{class:"img",src:T},null,-1)),G={class:"info"},J=d(()=>l("p",{class:"tit"},"在线医生",-1)),K=d(()=>l("p",{class:"tip"}," 请描述你的疾病或症状、是否用药、就诊经历，需要我听过什么样的帮助 ",-1)),P={class:"safe"},Q=d(()=>l("span",null,"内容仅医生可见",-1)),X={class:"illness-form"},Z={class:"item"},ee=d(()=>l("p",null,"本次患病多久了？",-1)),se={class:"item"},le=d(()=>l("p",null,"此次病情是否去医院就诊过？",-1)),oe=h({__name:"ConsultIllness",setup(o){const m=[{label:"一周内",value:p.Week},{label:"一月内",value:p.Month},{label:"半年内",value:p.HalfYear},{label:"大于半年",value:p.More}],c=[{label:"就诊过",value:1},{label:"没就诊过",value:0}],e=B({illnessDesc:"",illnessTime:void 0,consultFlag:void 0,pictures:[]});S(()=>{t.consult.illnessDesc&&R({title:"提示",message:"有未填写的表单，是否需要回显？"}).then(()=>{e.value={illnessDesc:t.consult.illnessDesc,illnessTime:t.consult.illnessTime,consultFlag:t.consult.consultFlag,pictures:t.consult.pictures||[]}}).catch(()=>{})});const r=I(()=>!e.value.illnessDesc||e.value.illnessTime===void 0||e.value.consultFlag===void 0),t=k(),_=N(),s=()=>{if(!e.value.illnessDesc)return f("请输入病情描述");if(e.value.illnessTime===void 0)return f("请选择症状持续时间");if(e.value.consultFlag===void 0)return f("请选择是否已经就诊");t.setIllness(e.value),_.push("/user/patient?isChange=1")};return(n,a)=>{const v=V("van-field"),C=V("van-button");return b(),x("div",W,[u(F,{title:"图文问诊"}),l("div",Y,[j,l("div",G,[J,K,l("p",P,[u(w,{name:"consult-safe"}),Q])])]),l("div",X,[u(v,{type:"textarea",rows:"3",placeholder:"请详细描述您的病情，病情描述不能为空",modelValue:e.value.illnessDesc,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value.illnessDesc=i)},null,8,["modelValue"]),l("div",Z,[ee,u(g,{options:m,modelValue:e.value.illnessTime,"onUpdate:modelValue":a[1]||(a[1]=i=>e.value.illnessTime=i)},null,8,["modelValue"])]),l("div",se,[le,u(g,{options:c,modelValue:e.value.consultFlag,"onUpdate:modelValue":a[2]||(a[2]=i=>e.value.consultFlag=i)},null,8,["modelValue"])]),u(L,{modelValue:e.value.pictures,"onUpdate:modelValue":a[3]||(a[3]=i=>e.value.pictures=i)},null,8,["modelValue"])]),u(C,{class:z({disabled:r.value}),onClick:s,type:"primary",block:"",round:""},{default:$(()=>[A("下一步")]),_:1},8,["class"])])}}}),me=y(oe,[["__scopeId","data-v-d6d1ca33"]]);export{me as default};
