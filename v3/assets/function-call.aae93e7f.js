import{c as B,i as N,e as d,a as D,b as L}from"./use-translate.dc7c72f2.js";import{m as O,n as x,a as U,u as P,w as V}from"./with-install.eb95b9ca.js";import{m as H,u as q}from"./mount-component.21d1f7e5.js";import{I as E}from"./index.c4602e68.js";import{P as G}from"./index.87835e2a.js";import{L as J}from"./index.5c5fe2f2.js";import{z as $,x as b,G as A,H as F,e as r,D as K,I as Q,J as R}from"./vue-libs.84090ae0.js";let m=0;function W(e){e?(m||document.body.classList.add("van-toast--unclickable"),m++):m&&(m--,m||document.body.classList.remove("van-toast--unclickable"))}const[X,y]=B("toast");var I=$({name:X,props:{icon:String,show:Boolean,type:O("text"),overlay:Boolean,message:x,iconSize:x,duration:U(2e3),position:O("middle"),className:P,iconPrefix:String,transition:O("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:P,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean},emits:["update:show"],setup(e,{emit:n}){let o,u=!1;const i=()=>{const a=e.show&&e.forbidClick;u!==a&&(u=a,W(u))},f=a=>n("update:show",a),k=()=>{e.closeOnClick&&f(!1)},g=()=>clearTimeout(o),w=()=>{const{icon:a,type:l,iconSize:S,iconPrefix:M,loadingType:z}=e;if(a||l==="success"||l==="fail")return r(E,{name:a||l,size:S,class:y("icon"),classPrefix:M},null);if(l==="loading")return r(J,{class:y("loading"),size:S,type:z},null)},c=()=>{const{type:a,message:l}=e;if(N(l)&&l!=="")return a==="html"?r("div",{class:y("text"),innerHTML:String(l)},null):r("div",{class:y("text")},[l])};return b(()=>[e.show,e.forbidClick],i),b(()=>[e.show,e.type,e.message,e.duration],()=>{g(),e.show&&e.duration>0&&(o=setTimeout(()=>{f(!1)},e.duration))}),A(i),F(i),()=>r(G,{show:e.show,class:[y([e.position,{[e.type]:!e.icon}]),e.className],overlay:e.overlay,lockScroll:!1,transition:e.transition,overlayClass:e.overlayClass,overlayStyle:e.overlayStyle,closeOnClickOverlay:e.closeOnClickOverlay,onClick:k,onClosed:g,"onUpdate:show":f},{default:()=>[w(),c()]})}});const T={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let t=[],C=!1,h=d({},T);const v=new Map;function j(e){return L(e)?e:{message:e}}function Y(){const{instance:e,unmount:n}=H({setup(){const o=K(""),{open:u,state:i,close:f,toggle:k}=q(),g=()=>{C&&(t=t.filter(c=>c!==e),n())},w=()=>r(I,R(i,{onClosed:g,"onUpdate:show":k}),null);return b(o,c=>{i.message=c}),Q().render=w,{open:u,clear:f,message:o}}});return e}function Z(){if(!t.length||C){const e=Y();t.push(e)}return t[t.length-1]}function s(e={}){if(!D)return{};const n=Z(),o=j(e);return n.open(d({},h,v.get(o.type||h.type),o)),n}const p=e=>n=>s(d({type:e},j(n)));s.loading=p("loading");s.success=p("success");s.fail=p("fail");s.clear=e=>{var n;t.length&&(e?(t.forEach(o=>{o.clear()}),t=[]):C?(n=t.shift())==null||n.clear():t[0].clear())};function _(e,n){typeof e=="string"?v.set(e,n):d(h,e)}s.setDefaultOptions=_;s.resetDefaultOptions=e=>{typeof e=="string"?v.delete(e):(h=d({},T),v.clear())};s.allowMultiple=(e=!0)=>{C=e};s.install=e=>{e.use(V(I)),e.config.globalProperties.$toast=s};export{s as T};