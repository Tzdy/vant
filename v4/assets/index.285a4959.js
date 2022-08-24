import{c as C,v as A,a as I}from"./use-translate.c56bc05e.js";import{n as R,t as S,w as F}from"./with-install.2d06a5b3.js";import{H as d,f as E}from"./constant.80c6de18.js";import{u as N}from"./use-placeholder.dc0fc6b5.js";import{I as D,a as L}from"./index.bb072daf.js";import{A as g,x as P,e as r,r as z,o as y,a as O,w as s,C as e,F as U}from"./vue-libs.a3cd7f61.js";import{s as x}from"./index.b77af129.js";import"./use-height.09314ad4.js";import"./on-popup-reopen.a53db14c.js";import"./index.649b4224.js";import"./interceptor.7caa5e9a.js";import"./use-expose.2dad0d8e.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./index.a0b9e7c8.js";import"./index.1fe53b6c.js";import"./mount-component.2ea251e1.js";const[V,n]=C("nav-bar"),H={title:String,fixed:Boolean,zIndex:R,border:S,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean},K=g({name:V,props:H,emits:["clickLeft","clickRight"],setup(a,{emit:t,slots:l}){const i=P(),u=N(i,n),m=c=>t("clickLeft",c),o=c=>t("clickRight",c),B=()=>l.left?l.left():[a.leftArrow&&r(D,{class:n("arrow"),name:"arrow-left"},null),a.leftText&&r("span",{class:n("text")},[a.leftText])],k=()=>l.right?l.right():r("span",{class:n("text")},[a.rightText]),h=()=>{const{title:c,fixed:p,border:_,zIndex:v}=a,w=A(v),T=a.leftArrow||a.leftText||l.left,b=a.rightText||l.right;return r("div",{ref:i,style:w,class:[n({fixed:p}),{[E]:_,"van-safe-area-top":a.safeAreaInsetTop}]},[r("div",{class:n("content")},[T&&r("div",{class:[n("left"),d],onClick:m},[B()]),r("div",{class:[n("title"),"van-ellipsis"]},[l.title?l.title():c]),b&&r("div",{class:[n("right"),d],onClick:o},[k()])])])};return()=>a.fixed&&a.placeholder?u(h):h()}}),M=F(K),f=M,it=g({__name:"index",setup(a){const t=I({"zh-CN":{useSlot:"\u4F7F\u7528\u63D2\u69FD",showBack:"\u8FD4\u56DE\u4E0A\u7EA7",rightButton:"\u53F3\u4FA7\u6309\u94AE"},"en-US":{useSlot:"Use Slot",showBack:"Back",rightButton:"Right Button"}}),l=()=>x(t("back")),i=()=>x(t("button"));return(u,m)=>{const o=z("demo-block");return y(),O(U,null,[r(o,{title:e(t)("basicUsage")},{default:s(()=>[r(e(f),{title:e(t)("title")},null,8,["title"])]),_:1},8,["title"]),r(o,{title:e(t)("showBack")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":"",onClickRight:i},null,8,["title","left-text"])]),_:1},8,["title"]),r(o,{title:e(t)("rightButton")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"right-text":e(t)("button"),"left-arrow":"",onClickLeft:l,onClickRight:i},null,8,["title","left-text","right-text"])]),_:1},8,["title"]),r(o,{title:e(t)("useSlot")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":""},{right:s(()=>[r(e(L),{name:"search",size:"18"})]),_:1},8,["title","left-text"])]),_:1},8,["title"])],64)}}});export{it as default};