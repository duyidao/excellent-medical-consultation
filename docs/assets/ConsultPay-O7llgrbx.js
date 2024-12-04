import{_ as O}from"./avatar-doctor-9PVW_Dbc.js";import{M as U}from"./MyNavBar-juD04P2Y.js";import{M as C}from"./MySvgIcon-942L7yLE.js";import{d as K,e as L,h as R}from"./consult-QXGEUvDX.js";import{c as z}from"./user-eeNM9fpv.js";import{d as A,x as E,e as c,i as G,G as j,z as q,r,o as x,c as k,a as e,f as t,t as I,w as a,A as H,F as J,u as Q,b as P,s as W,v as X,_ as Y}from"./index-erOPif8K.js";import{a as Z,s as ee}from"./function-call-6z9IMAhC.js";import{a as D,d as te}from"./index-mAaPtwf-.js";const m=v=>(W("data-v-e0dbbbeb"),v=v(),X(),v),ae={key:0,class:"consult-pay-page"},oe={class:"pay-info"},se={class:"tit"},le=m(()=>t("img",{class:"img",src:O},null,-1)),ne=m(()=>t("p",{class:"desc"},[t("span",null,"极速问诊"),t("span",null,"自动分配医生")],-1)),ue=m(()=>t("div",{class:"pay-space"},null,-1)),ce={class:"pay-schema"},ie=m(()=>t("span",{class:"text"},"支付协议",-1)),re={class:"pay-type"},de={class:"amount"},pe={class:"btn"},ve=A({__name:"ConsultPay",setup(v){const o=E(),s=c(),T=async()=>{const l=await K({type:o.consult.type,illnessType:o.consult.illnessType});s.value=l.data,o.setCoupon(s.value.couponId)},d=c(),V=async()=>{if(!o.consult.patientId)return;const l=await z(o.consult.patientId);d.value=l.data};G(()=>{if(!["type","illnessType","depId","illnessDesc","illnessTime","consultFlag","patientId"].every(u=>o.consult[u]!==void 0))return Z({title:"温馨提示",message:"问诊信息不完整请重新填写，如有未支付的问诊订单可在问诊记录中继续支付！",closeOnPopstate:!1}).then(()=>{w.push("/")});T(),V()});const f=c(!1),y=c(!1),i=c(),h=c(!1),_=c(""),$=async()=>{if(!f.value)return D("请勾选我已同意支付协议");y.value=!0,h.value=!0;const l=await L(o.consult);_.value=l.data.id,h.value=!1,o.clear()};j(()=>{if(_.value)return!1});const w=q(),B=()=>ee({title:"关闭支付",message:"取消支付将无法获得医生回复，医生接诊名额有限，是否确认关闭？",cancelButtonText:"仍要关闭",confirmButtonText:"继续支付"}).then(()=>!1).catch(()=>(_.value="",w.replace("/user/consult"),!0)),M=async()=>{if(i.value===void 0)return D("请选择支付方式");te({message:"跳转支付",duration:0});const l=await R({orderId:_.value,paymentMethod:i.value,payCallback:"http://localhost:5173/room"});window.location.href=l.data.payUrl};return(l,n)=>{const u=r("van-cell"),b=r("van-cell-group"),g=r("van-checkbox"),S=r("van-submit-bar"),N=r("van-button"),F=r("van-action-sheet");return x(),k(J,null,[s.value&&d.value?(x(),k("div",ae,[e(U,{title:"支付"}),t("div",oe,[t("p",se,"图文问诊 "+I(s.value.payment)+" 元",1),le,ne]),e(b,null,{default:a(()=>[e(u,{title:"优惠券",value:`-¥${s.value.couponDeduction}`},null,8,["value"]),e(u,{title:"积分抵扣",value:`-¥${s.value.pointDeduction}`},null,8,["value"]),e(u,{title:"实付款",value:`¥${s.value.actualPayment}`,class:"pay-price"},null,8,["value"])]),_:1}),ue,e(b,null,{default:a(()=>[e(u,{title:"患者信息",value:`${d.value.name} | ${d.value.genderValue} | ${d.value.age}岁`},null,8,["value"]),e(u,{title:"病情描述",label:Q(o).consult.illnessDesc},null,8,["label"])]),_:1}),t("div",ce,[e(g,{modelValue:f.value,"onUpdate:modelValue":n[0]||(n[0]=p=>f.value=p)},{default:a(()=>[P("我已同意 "),ie]),_:1},8,["modelValue"])]),e(S,{"button-type":"primary",price:s.value.actualPayment*100,loading:h.value,"button-text":"立即支付","text-align":"left",onClick:$},null,8,["price","loading"])])):H("",!0),e(F,{show:y.value,"onUpdate:show":n[3]||(n[3]=p=>y.value=p),title:"选择支付方式","close-on-popstate":!1,closeable:!1,onClose:B},{default:a(()=>[t("div",re,[t("p",de,"￥"+I(s.value.actualPayment.toFixed(2)),1),e(b,null,{default:a(()=>[e(u,{title:"微信支付",onClick:n[1]||(n[1]=p=>i.value=0)},{icon:a(()=>[e(C,{name:"consult-wechat"})]),extra:a(()=>[e(g,{checked:i.value===0},null,8,["checked"])]),_:1}),e(u,{title:"支付宝支付",onClick:n[2]||(n[2]=p=>i.value=1)},{icon:a(()=>[e(C,{name:"consult-alipay"})]),extra:a(()=>[e(g,{checked:i.value===1},null,8,["checked"])]),_:1})]),_:1}),t("div",pe,[e(N,{type:"primary",round:"",block:"",onClick:M},{default:a(()=>[P("立即支付")]),_:1})])])]),_:1},8,["show"])],64)}}}),Ce=Y(ve,[["__scopeId","data-v-e0dbbbeb"]]);export{Ce as default};