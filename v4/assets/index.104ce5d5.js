import{C as u}from"./index.e53f50c0.js";import{I as E,s as k}from"./index.c35bdd2f.js";import{c as m}from"./index.2a0d4844.js";import{s as x}from"./index.bf09c1cb.js";import{a as F}from"./use-translate.85b7fc27.js";import{A as b,x as v,r as h,o as D,a as P,e as s,w as a,C as e,h as B,t as I,F as $}from"./vue-libs.a3cd7f61.js";import"./with-install.d26e13af.js";import"./use-route.7a9317f3.js";import"./index.33ef0a36.js";import"./mount-component.a164bc7b.js";import"./use-expose.b85ae184.js";import"./constant.80c6de18.js";import"./interceptor.de8ff612.js";import"./index.0df3718b.js";import"./use-touch.196fce0c.js";import"./on-popup-reopen.a53db14c.js";import"./index.c08165fc.js";import"./use-lazy-render.4c81c593.js";import"./index.754c99d2.js";import"./index.c79d2652.js";import"./index.4d0d76f2.js";const Y=b({__name:"index",setup(S){const t=F({"zh-CN":{closed:"\u5173\u95ED",showClose:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",showImages:"\u9884\u89C8\u56FE\u7247",beforeClose:"\u5F02\u6B65\u5173\u95ED",closeEvent:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",customConfig:"\u4F20\u5165\u914D\u7F6E\u9879",startPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",componentCall:"\u7EC4\u4EF6\u8C03\u7528",index:l=>`\u7B2C${l+1}\u9875`},"en-US":{closed:"closed",showClose:"Show Close Icon",showImages:"Show Images",beforeClose:"Before Close",closeEvent:"Close Event",customConfig:"Custom Config",startPosition:"Set Start Position",componentCall:"Component Call",index:l=>`Page: ${l}`}}),C=[m("apple-1.jpeg"),m("apple-2.jpeg"),m("apple-3.jpeg"),m("apple-4.jpeg")],p=v(!1),c=v(0),f=()=>x(t("closed")),d=()=>new Promise(l=>{setTimeout(()=>{l(!0)},1e3)}),w=l=>{c.value=l},g=()=>{p.value=!0},i=(l={})=>{const o=k({images:C,...l});l.beforeClose&&setTimeout(()=>{o==null||o.close()},2e3)};return(l,o)=>{const r=h("demo-block");return D(),P($,null,[s(r,{card:"",title:e(t)("basicUsage")},{default:a(()=>[s(e(u),{"is-link":"",value:e(t)("showImages"),onClick:o[0]||(o[0]=n=>i())},null,8,["value"])]),_:1},8,["title"]),s(r,{card:"",title:e(t)("customConfig")},{default:a(()=>[s(e(u),{"is-link":"",value:e(t)("startPosition"),onClick:o[1]||(o[1]=n=>i({startPosition:1}))},null,8,["value"]),s(e(u),{"is-link":"",value:e(t)("showClose"),onClick:o[2]||(o[2]=n=>i({closeable:!0}))},null,8,["value"]),s(e(u),{"is-link":"",value:e(t)("closeEvent"),onClick:o[3]||(o[3]=n=>i({onClose:f}))},null,8,["value"])]),_:1},8,["title"]),s(r,{card:"",title:e(t)("beforeClose")},{default:a(()=>[s(e(u),{"is-link":"",value:e(t)("beforeClose"),onClick:o[4]||(o[4]=n=>i({beforeClose:d}))},null,8,["value"])]),_:1},8,["title"]),s(r,{card:"",title:e(t)("componentCall")},{default:a(()=>[s(e(u),{"is-link":"",value:e(t)("componentCall"),onClick:g},null,8,["value"]),s(e(E),{show:p.value,"onUpdate:show":o[5]||(o[5]=n=>p.value=n),images:C,onChange:w},{index:a(()=>[B(I(e(t)("index",c.value)),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{Y as default};