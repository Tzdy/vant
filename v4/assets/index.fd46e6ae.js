import{o as j,m as F,l as H,e as M,c as V,i as N,n as Y}from"./use-translate.c56bc05e.js";import{n as S,t as I,u as G,m as C,w as U}from"./with-install.2d06a5b3.js";import{M as g,J as $,y as T,A as q,x as b,D as J,q as Z,N as Q,L as W,I as X,e as f,T as ee,R as oe,F as te,j as ne,v as ae,B as se}from"./vue-libs.a3cd7f61.js";import{H as re}from"./constant.80c6de18.js";import{c as ce}from"./interceptor.7caa5e9a.js";import{u as le}from"./use-expose.2dad0d8e.js";import{u as ie}from"./use-touch.196fce0c.js";import{u as ue}from"./use-lazy-render.4c81c593.js";import{P as de}from"./on-popup-reopen.a53db14c.js";import{I as fe}from"./index.e7e14384.js";import{O as ve}from"./index.a0b9e7c8.js";const E={show:Boolean,zIndex:S,overlay:I,duration:S,teleport:[String,Object],lockScroll:I,lazyRender:I,beforeClose:Function,overlayStyle:Object,overlayClass:G,transitionAppear:Boolean,closeOnClickOverlay:I},ge=Object.keys(E);let p=0;const A="van-overflow-hidden";function me(e,t){const s=ie(),r=i=>{s.move(i);const P=s.deltaY.value>0?"10":"01",y=F(i.target,e.value),{scrollHeight:u,offsetHeight:h,scrollTop:m}=y;let d="11";m===0?d=h>=u?"00":"01":m+h>=u&&(d="10"),d!=="11"&&s.isVertical()&&!(parseInt(d,2)&parseInt(P,2))&&H(i,!0)},n=()=>{document.addEventListener("touchstart",s.start),document.addEventListener("touchmove",r,{passive:!1}),p||document.body.classList.add(A),p++},c=()=>{p&&(document.removeEventListener("touchstart",s.start),document.removeEventListener("touchmove",r),p--,p||document.body.classList.remove(A))},v=()=>t()&&n(),l=()=>t()&&c();j(v),g(l),$(l),T(t,i=>{i?n():c()})}const pe=M({},E,{round:Boolean,position:C("center"),closeIcon:C("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:C("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[ye,B]=V("popup");let L=2e3;const he=q({name:ye,inheritAttrs:!1,props:pe,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:s,slots:r}){let n,c;const v=b(),l=b(),i=ue(()=>e.show||!e.lazyRender),P=J(()=>{const o={zIndex:v.value};if(N(e.duration)){const a=e.position==="center"?"animationDuration":"transitionDuration";o[a]=`${e.duration}s`}return o}),y=()=>{n||(e.zIndex!==void 0&&(L=+e.zIndex),n=!0,v.value=++L,t("open"))},u=()=>{n&&ce(e.beforeClose,{done(){n=!1,t("close"),t("update:show",!1)}})},h=o=>{t("clickOverlay",o),e.closeOnClickOverlay&&u()},m=()=>{if(e.overlay)return f(ve,{show:e.show,class:e.overlayClass,zIndex:v.value,duration:e.duration,customStyle:e.overlayStyle,onClick:h},{default:r["overlay-content"]})},d=o=>{t("clickCloseIcon",o),u()},z=()=>{if(e.closeable)return f(fe,{role:"button",tabindex:0,name:e.closeIcon,class:[B("close-icon",e.closeIconPosition),re],classPrefix:e.iconPrefix,onClick:d},null)},D=()=>t("opened"),R=()=>t("closed"),K=o=>t("keydown",o),_=i(()=>{var x;const{round:o,position:a,safeAreaInsetTop:w,safeAreaInsetBottom:k}=e;return ne(f("div",se({ref:l,style:P.value,class:[B({round:o,[a]:a}),{"van-safe-area-top":w,"van-safe-area-bottom":k}],onKeydown:K},s),[(x=r.default)==null?void 0:x.call(r),z()]),[[ae,e.show]])}),O=()=>{const{position:o,transition:a,transitionAppear:w}=e,k=o==="center"?"van-fade":`van-popup-slide-${o}`;return f(ee,{name:a||k,appear:w,onAfterEnter:D,onAfterLeave:R},{default:_})};return T(()=>e.show,o=>{o&&!n&&(y(),s.tabindex===0&&Z(()=>{var a;(a=l.value)==null||a.focus()})),!o&&n&&(n=!1,t("close"))}),le({popupRef:l}),me(l,()=>e.show&&e.lockScroll),Y("popstate",()=>{e.closeOnPopstate&&(u(),c=!1)}),Q(()=>{e.show&&y()}),W(()=>{c&&(t("update:show",!0),c=!1)}),g(()=>{e.show&&e.teleport&&(u(),c=!0)}),X(de,()=>e.show),()=>e.teleport?f(oe,{to:e.teleport},{default:()=>[m(),O()]}):f(te,null,[m(),O()])}}),Ie=U(he),Te=Ie;export{Ie as P,Te as V,ge as a,E as p};