var ne=Object.defineProperty,te=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var q=(e,o,a)=>o in e?ne(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,D=(e,o)=>{for(var a in o||(o={}))se.call(o,a)&&q(e,a,o[a]);if(j)for(var a of j(o))ue.call(o,a)&&q(e,a,o[a]);return e},T=(e,o)=>te(e,ae(o));import{c as U,i as z,M as Y,R as O,H as Z,a as ce}from"./use-translate.94d81043.js";import{t as k,b as N,m as E,c as le,w as G,d as ie,a as M}from"./with-install.dd5596ee.js";import{C as re}from"./index.b5574021.js";import{A,e as n,D as p,x as g,y as _,N as de,j as pe,v as me,q as he,r as ge,o as ve,c as Ce,w as J,C}from"./vue-libs.84c45047.js";import{P as be}from"./index.00b48509.js";import{u as fe}from"./use-refs.e65104ff.js";import{T as xe,a as K}from"./index.7d33bcb1.js";import{F as ye}from"./index.d546301d.js";import{B as Q}from"./index.84df32bd.js";import{C as Be}from"./index.b6b78f90.js";import{T as we}from"./function-call.a4a9c07c.js";import"./use-route.7c55373a.js";import"./index.63869abe.js";import"./constant.80c6de18.js";import"./interceptor.e76ee8d4.js";import"./use-expose.771ababc.js";import"./use-touch.109c1035.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.9c372815.js";import"./use-id.e5fd672f.js";import"./index.d1d9d18e.js";import"./index.3adc435d.js";import"./index.a750e74d.js";import"./Checker.99b27945.js";import"./mount-component.725b707e.js";const[De,W,V]=U("coupon-cell"),Te={title:String,border:k,editable:k,coupons:N(),currency:E("\xA5"),chosenCoupon:le(-1)};function ke({coupons:e,chosenCoupon:o,currency:a}){const u=e[+o];if(u){let t=0;return z(u.value)?{value:t}=u:z(u.denominations)&&(t=u.denominations),`-${a} ${(t/100).toFixed(2)}`}return e.length===0?V("noCoupon"):V("count",e.length)}var Ee=A({name:De,props:Te,setup(e){return()=>{const o=e.coupons[+e.chosenCoupon];return n(re,{class:W(),value:ke(e),title:e.title||V("title"),border:e.border,isLink:e.editable,valueClass:W("value",{selected:o})},null)}}});const $e=G(Ee);function X(e){const o=new Date(e*1e3);return`${o.getFullYear()}.${Y(o.getMonth()+1)}.${Y(o.getDate())}`}const Fe=e=>(e/10).toFixed(e%10===0?0:1),ee=e=>(e/100).toFixed(e%100===0?0:e%10===0?1:2),[Pe,r,R]=U("coupon");var Se=A({name:Pe,props:{chosen:Boolean,coupon:ie(Object),disabled:Boolean,currency:E("\xA5")},setup(e){const o=p(()=>{const{startAt:t,endAt:c}=e.coupon;return`${X(t)} - ${X(c)}`}),a=p(()=>{const{coupon:t,currency:c}=e;if(t.valueDesc)return[t.valueDesc,n("span",null,[t.unitDesc||""])];if(t.denominations){const l=ee(t.denominations);return[n("span",null,[c]),` ${l}`]}return t.discount?R("discount",Fe(t.discount)):""}),u=p(()=>{const t=ee(e.coupon.originCondition||0);return t==="0"?R("unlimited"):R("condition",t)});return()=>{const{chosen:t,coupon:c,disabled:l}=e,h=l&&c.reason||c.description;return n("div",{class:r({disabled:l})},[n("div",{class:r("content")},[n("div",{class:r("head")},[n("h2",{class:r("amount")},[a.value]),n("p",{class:r("condition")},[c.condition||u.value])]),n("div",{class:r("body")},[n("p",{class:r("name")},[c.name]),n("p",{class:r("valid")},[o.value]),!l&&n(Be,{class:r("corner"),modelValue:t},null)])]),h&&n("p",{class:r("description")},[h])])}}});const oe=G(Se),[_e,d,x]=U("coupon-list"),Ae="https://img.yzcdn.cn/vant/coupon-empty.png",Ie={code:E(""),coupons:N(),currency:E("\xA5"),showCount:k,emptyImage:E(Ae),chosenCoupon:M(-1),enabledTitle:String,disabledTitle:String,disabledCoupons:N(),showExchangeBar:k,showCloseButton:k,closeButtonText:String,inputPlaceholder:String,exchangeMinLength:M(1),exchangeButtonText:String,displayedCouponIndex:M(-1),exchangeButtonLoading:Boolean,exchangeButtonDisabled:Boolean};var Le=A({name:_e,props:Ie,emits:["change","exchange","update:code"],setup(e,{emit:o,slots:a}){const[u,t]=fe(),c=g(),l=g(),h=g(0),y=g(0),i=g(e.code),$=p(()=>!e.exchangeButtonLoading&&(e.exchangeButtonDisabled||!i.value||i.value.length<e.exchangeMinLength)),F=()=>{const m=Z(c).height,f=Z(l).height+44;y.value=(m>f?m:O.value)-f},I=()=>{o("exchange",i.value),e.code||(i.value="")},P=s=>{he(()=>{var m;return(m=u.value[s])==null?void 0:m.scrollIntoView()})},v=()=>n("div",{class:d("empty")},[n("img",{src:e.emptyImage},null),n("p",null,[x("noCoupon")])]),b=()=>{if(e.showExchangeBar)return n("div",{ref:l,class:d("exchange-bar")},[n(ye,{modelValue:i.value,"onUpdate:modelValue":s=>i.value=s,clearable:!0,border:!1,class:d("field"),placeholder:e.inputPlaceholder||x("placeholder"),maxlength:"20"},null),n(Q,{plain:!0,type:"primary",class:d("exchange"),text:e.exchangeButtonText||x("exchange"),loading:e.exchangeButtonLoading,disabled:$.value,onClick:I},null)])},L=()=>{const{coupons:s}=e,m=e.showCount?` (${s.length})`:"",f=(e.enabledTitle||x("enable"))+m;return n(K,{title:f},{default:()=>{var B;return[n("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${y.value}px`}},[s.map((w,H)=>n(oe,{key:w.id,ref:t(H),coupon:w,chosen:H===e.chosenCoupon,currency:e.currency,onClick:()=>o("change",H)},null)),!s.length&&v(),(B=a["list-footer"])==null?void 0:B.call(a)])]}})},S=()=>{const{disabledCoupons:s}=e,m=e.showCount?` (${s.length})`:"",f=(e.disabledTitle||x("disabled"))+m;return n(K,{title:f},{default:()=>{var B;return[n("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${y.value}px`}},[s.map(w=>n(oe,{disabled:!0,key:w.id,coupon:w,currency:e.currency},null)),!s.length&&v(),(B=a["disabled-list-footer"])==null?void 0:B.call(a)])]}})};return _(()=>e.code,s=>{i.value=s}),_(O,F),_(i,s=>o("update:code",s)),_(()=>e.displayedCouponIndex,P),de(()=>{F(),P(e.displayedCouponIndex)}),()=>n("div",{ref:c,class:d()},[b(),n(xe,{active:h.value,"onUpdate:active":s=>h.value=s,class:d("tab")},{default:()=>[L(),S()]}),n("div",{class:d("bottom")},[pe(n(Q,{round:!0,block:!0,type:"primary",class:d("close"),text:e.closeButtonText||x("close"),onClick:()=>o("change",-1)},null),[[me,e.showCloseButton]])])])}});const He=G(Le),ro=A({setup(e){const o=ce({"zh-CN":{coupon:{name:"\u4F18\u60E0\u5238\u540D\u79F0",reason:"\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0",description:"\u63CF\u8FF0\u4FE1\u606F"},exchange:"\u5151\u6362\u6210\u529F"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason",description:"Description"},exchange:"Success"}}),a=(v=999999)=>String(Math.floor(Math.random()*v)+1),u=g(!1),t=g(-1),c=g([]),l=p(()=>({id:1,condition:`\u65E0\u95E8\u69DB
\u6700\u591A\u4F18\u60E012\u5143`,reason:"",value:150,name:o("coupon.name"),description:o("coupon.description"),startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"\u5143"})),h=p(()=>T(D({},l.value),{id:2,value:12,valueDesc:"8.8",unitDesc:"\u6298"})),y=p(()=>T(D({},l.value),{id:3,reason:o("coupon.reason")})),i=p(()=>T(D({},h.value),{valueDesc:"1",unitDesc:"\u6298",id:4,reason:o("coupon.reason")})),$=p(()=>[l.value,h.value,...c.value]),F=p(()=>[y.value,i.value]),I=v=>{u.value=!1,t.value=v},P=()=>{we(o("exchange")),c.value.push(T(D({},l.value),{id:a()}))};return(v,b)=>{const L=ge("demo-block");return ve(),Ce(L,{title:C(o)("basicUsage")},{default:J(()=>[n(C($e),{coupons:C($),"chosen-coupon":t.value,onClick:b[0]||(b[0]=S=>u.value=!0)},null,8,["coupons","chosen-coupon"]),n(C(be),{show:u.value,"onUpdate:show":b[1]||(b[1]=S=>u.value=S),round:"",position:"bottom",style:{height:"90%","padding-top":"4px"}},{default:J(()=>[n(C(He),{coupons:C($),"chosen-coupon":t.value,"disabled-coupons":C(F),onChange:I,onExchange:P},null,8,["coupons","chosen-coupon","disabled-coupons"])]),_:1},8,["show"])]),_:1},8,["title"])}}});export{ro as default};