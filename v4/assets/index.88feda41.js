import{c as p,a as f}from"./use-translate.5fa8a2a1.js";import{m as _,t as k,w as F}from"./with-install.ff23f643.js";import{C as b}from"./index.64e1751e.js";import{A as C,e as a,D as B,r as E,o as h,a as y,w as c,C as t,F as A}from"./vue-libs.ed3d9812.js";import{s}from"./index.0db0e899.js";import"./use-route.24f31c45.js";import"./index.dc9079c8.js";import"./index.0f47b777.js";import"./index.84111d02.js";import"./constant.e12a51b9.js";import"./interceptor.f92ff708.js";import"./use-expose.840221e5.js";import"./use-touch.ecfb8eef.js";import"./use-lazy-render.997d3548.js";import"./on-popup-reopen.08d2a38f.js";import"./index.5e96c57f.js";import"./index.200bbe9c.js";import"./mount-component.6bbd68ed.js";const[w,u,r]=p("contact-card"),x={tel:String,name:String,type:_("add"),addText:String,editable:k},S=C({name:w,props:x,emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||r("addContact"):[a("div",null,[`${r("name")}\uFF1A${e.name}`]),a("div",null,[`${r("tel")}\uFF1A${e.tel}`])];return()=>a(b,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:u([e.type]),border:!1,isLink:e.editable,titleClass:u("title"),onClick:o},{title:d})}}),m=F(S),Q=C({__name:"index",setup(e){const n=f({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=B(()=>({name:n("name"),tel:"13000000000"})),d=()=>s(n("add")),i=()=>s(n("edit"));return(g,T)=>{const l=E("demo-block");return h(),y(A,null,[a(l,{title:t(n)("addContact")},{default:c(()=>[a(t(m),{type:"add",onClick:d})]),_:1},8,["title"]),a(l,{title:t(n)("editContact")},{default:c(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(l,{title:t(n)("uneditable")},{default:c(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{Q as default};