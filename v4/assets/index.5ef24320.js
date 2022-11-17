import{a as _}from"./use-translate.5fa8a2a1.js";import{w as S}from"./with-install.ff23f643.js";import{a as b}from"./Picker.3ce15127.js";import{T as E}from"./index.913b15ce.js";import{D as V}from"./index.7d0e5a48.js";import{s as d}from"./index.0db0e899.js";import{A as T,u as c,o as F,c as C,w as s,e as n,C as e,D as g,r as w,a as R,F as U}from"./vue-libs.ed3d9812.js";import"./constant.e12a51b9.js";import"./use-expose.840221e5.js";import"./index.200bbe9c.js";import"./use-touch.ecfb8eef.js";import"./index.8000eae0.js";import"./use-id.6401ef5b.js";import"./use-route.24f31c45.js";import"./index.79003321.js";import"./on-popup-reopen.08d2a38f.js";import"./interceptor.f92ff708.js";import"./use-refs.abd3b4ec.js";import"./index.049f3457.js";import"./index.0f47b777.js";import"./utils.8aaad399.js";import"./index.b4e19f4d.js";import"./index.dc9079c8.js";import"./index.84111d02.js";import"./use-lazy-render.997d3548.js";import"./index.5e96c57f.js";import"./mount-component.6bbd68ed.js";const x=S(b),k=T({__name:"SelectDateTime",setup(f){const t=_({"zh-CN":{date:"\u9009\u62E9\u65E5\u671F",time:"\u9009\u62E9\u65F6\u95F4",title:"\u9884\u7EA6\u65E5\u671F"},"en-US":{date:"Date",time:"Time",title:"Title"}}),a=c(["12","00"]),l=c(["2022","06","01"]),u=new Date(2020,0,1),i=new Date(2025,5,1),D=()=>{d(`${l.value.join("/")} ${a.value.join(":")}`)},o=()=>{d("cancel")};return(r,p)=>(F(),C(e(x),{title:e(t)("title"),tabs:[e(t)("date"),e(t)("time")],onConfirm:D,onCancel:o},{default:s(()=>[n(e(V),{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=m=>l.value=m),"min-date":e(u),"max-date":e(i)},null,8,["modelValue","min-date","max-date"]),n(e(E),{modelValue:a.value,"onUpdate:modelValue":p[1]||(p[1]=m=>a.value=m)},null,8,["modelValue"])]),_:1},8,["title","tabs"]))}}),$=T({__name:"SelectTimeRange",setup(f){const t=_({"zh-CN":{startTime:"\u5F00\u59CB\u65F6\u95F4",endTime:"\u7ED3\u675F\u65F6\u95F4",title:"\u9884\u7EA6\u65F6\u95F4"},"en-US":{startTime:"Start Time",endTime:"End Time",title:"Title"}}),a=c(["12","00"]),l=c(["13","00"]),u=()=>{d(`${a.value.join(":")} - ${l.value.join(":")}`)},i=()=>{d("cancel")};return(D,o)=>(F(),C(e(x),{title:e(t)("title"),tabs:[e(t)("startTime"),e(t)("endTime")],onConfirm:u,onCancel:i},{default:s(()=>[n(e(E),{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=r=>a.value=r)},null,8,["modelValue"]),n(e(E),{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=r=>l.value=r)},null,8,["modelValue"])]),_:1},8,["title","tabs"]))}}),N=T({__name:"SelectDateRange",setup(f){const t=_({"zh-CN":{startDate:"\u5F00\u59CB\u65E5\u671F",endDate:"\u7ED3\u675F\u65E5\u671F",title:"\u9884\u7EA6\u65E5\u671F"},"en-US":{startDate:"Start Date",endDate:"End Date",title:"Title"}}),a=c(["2022","06","01"]),l=c(["2023","06","01"]),u=new Date(2020,0,1),i=new Date(2025,5,1),D=g(()=>new Date(Number(a.value[0]),Number(a.value[1])-1,Number(a.value[2]))),o=()=>{d(`${a.value.join("/")} - ${l.value.join("/")}`)},r=()=>{d("cancel")};return(p,m)=>(F(),C(e(x),{title:e(t)("title"),tabs:[e(t)("startDate"),e(t)("endDate")],onConfirm:o,onCancel:r},{default:s(()=>[n(e(V),{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=v=>a.value=v),"min-date":e(u),"max-date":e(i)},null,8,["modelValue","min-date","max-date"]),n(e(V),{modelValue:l.value,"onUpdate:modelValue":m[1]||(m[1]=v=>l.value=v),"min-date":e(D),"max-date":e(i)},null,8,["modelValue","min-date","max-date"])]),_:1},8,["title","tabs"]))}}),oe=T({__name:"index",setup(f){const t=_({"zh-CN":{selectDateTime:"\u9009\u62E9\u65E5\u671F\u65F6\u95F4",selectDateRange:"\u9009\u62E9\u65E5\u671F\u8303\u56F4",selectTimeRange:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4"},"en-US":{selectDateTime:"Select Date Time",selectDateRange:"Select Date Range",selectTimeRange:"Select Time Range"}});return(a,l)=>{const u=w("demo-block");return F(),R(U,null,[n(u,{card:"",title:e(t)("selectDateTime")},{default:s(()=>[n(k)]),_:1},8,["title"]),n(u,{card:"",title:e(t)("selectDateRange")},{default:s(()=>[n(N)]),_:1},8,["title"]),n(u,{card:"",title:e(t)("selectTimeRange")},{default:s(()=>[n($)]),_:1},8,["title"])],64)}}});export{oe as default};