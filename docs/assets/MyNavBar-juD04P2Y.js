import{d as l,z as p,r as _,o as f,h as k,_ as h}from"./index-erOPif8K.js";const m=l({__name:"MyNavBar",props:{title:{},leftText:{},rightText:{},back:{type:Function}},emits:["click-left","click-right"],setup(r,{emit:a}){const c=p(),t=r,o=a,n=()=>{var e;if(t.back)return t.back();(e=history.state)!=null&&e.back?c.back():c.push("/"),o("click-left")},i=()=>{o("click-right")};return(e,u)=>{const s=_("van-nav-bar");return f(),k(s,{title:t.title,"left-text":"返回","right-text":t.rightText,"left-arrow":"",fixed:"",onClickLeft:n,onClickRight:i},null,8,["title","right-text"])}}}),v=h(m,[["__scopeId","data-v-e846c752"]]);export{v as M};
