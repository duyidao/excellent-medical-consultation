import{r as e}from"./index-mAaPtwf-.js";const s=t=>e("/login/password","post",t),a=t=>e("/code","get",t),o=t=>e("/login","post",t),i=()=>e("/patient/myUser"),r=()=>e("/patient/mylist"),d=t=>e("/patient/add","POST",t),c=t=>e("/patient/update","PUT",t),p=t=>e(`/patient/del/${t}`,"DELETE"),g=t=>e(`/patient/info/${t}`);export{r as a,d as b,g as c,p as d,c as e,o as f,i as g,a as h,s as l};