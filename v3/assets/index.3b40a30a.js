import{c}from"./use-translate.dc7c72f2.js";import{t as o,w as m}from"./with-install.eb95b9ca.js";import{d as u}from"./constant.4d85ecb9.js";import{z as d,e as r,J as f,F as b}from"./vue-libs.84090ae0.js";const[p,a]=c("cell-group");var g=d({name:p,inheritAttrs:!1,props:{title:String,inset:Boolean,border:o},setup(e,{slots:t,attrs:l}){const i=()=>{var n;return r("div",f({class:[a({inset:e.inset}),{[u]:e.border&&!e.inset}]},l),[(n=t.default)==null?void 0:n.call(t)])},s=()=>r("div",{class:a("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(b,null,[s(),i()]):i()}});const O=m(g);export{O as C};