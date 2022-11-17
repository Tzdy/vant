import{c as P,b as N,h as g,e as q,u as D}from"./use-translate.5fa8a2a1.js";import{t as b,n as f,c as O,w as x}from"./with-install.ff23f643.js";import{c as T,d as _}from"./constant.e12a51b9.js";import{A as B,e as a,D as p,B as z}from"./vue-libs.ed3d9812.js";import{r as E,u as V}from"./use-route.24f31c45.js";import{I as $}from"./index.dc9079c8.js";import{B as w}from"./index.0f47b777.js";const[S,j]=P("grid"),A={square:Boolean,center:b,border:b,gutter:f,reverse:Boolean,iconSize:f,direction:String,clickable:Boolean,columnNum:O(4)},h=Symbol(S),K=B({name:S,props:A,setup(e,{slots:t}){const{linkChildren:o}=N(h);return o({props:e}),()=>{var s;return a("div",{style:{paddingLeft:g(e.gutter)},class:[j(),{[T]:e.border&&!e.gutter}]},[(s=t.default)==null?void 0:s.call(t)])}}}),Z=x(K),[L,l]=P("grid-item"),U=q({},E,{dot:Boolean,text:String,icon:String,badge:f,iconColor:String,iconPrefix:String,badgeProps:Object}),Y=B({name:L,props:U,setup(e,{slots:t}){const{parent:o,index:s}=D(h),v=V();if(!o)return;const I=p(()=>{const{square:c,gutter:r,columnNum:n}=o.props,d=`${100/+n}%`,i={flexBasis:d};if(c)i.paddingTop=d;else if(r){const u=g(r);i.paddingRight=u,s.value>=n&&(i.marginTop=u)}return i}),y=p(()=>{const{square:c,gutter:r}=o.props;if(c&&r){const n=g(r);return{right:n,bottom:n,height:"auto"}}}),C=()=>{if(t.icon)return a(w,z({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon});if(e.icon)return a($,{dot:e.dot,name:e.icon,size:o.props.iconSize,badge:e.badge,class:l("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null)},R=()=>{if(t.text)return t.text();if(e.text)return a("span",{class:l("text")},[e.text])},G=()=>t.default?t.default():[C(),R()];return()=>{const{center:c,border:r,square:n,gutter:d,reverse:i,direction:u,clickable:m}=o.props,k=[l("content",[u,{center:c,square:n,reverse:i,clickable:m,surround:r&&d}]),{[_]:r}];return a("div",{class:[l({square:n})],style:I.value},[a("div",{role:m?"button":void 0,class:k,style:y.value,tabindex:m?0:void 0,onClick:v},[G()])])}}}),ee=x(Y);export{Z as G,ee as a};