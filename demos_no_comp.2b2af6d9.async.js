(self["webpackChunkx_rhooks"]=self["webpackChunkx_rhooks"]||[]).push([[50],{7101:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(7939);function u(){return new Promise((e=>{setTimeout((()=>{e(18)}),1e3)}))}t["default"]=()=>{const e=(0,a.Z)(0,(async e=>{const t=await u();e(t)})),t=e.state,n=e.loading,o=e.error,l=e.setState,c=e.refresh;return o?"error":n?"loading...":r.createElement(r.Fragment,null,r.createElement("h4",null," count: ",t),r.createElement("button",{onClick:()=>l((e=>e+1))},"add age"),r.createElement("button",{onClick:c},"refresh"))}},5599:function(e,t,n){"use strict";n.d(t,{f:function(){return o}});var r=n(7337),a=n(7294);function u(e){return"function"===typeof e}function o(e){function t(t,n){const o=e,l=(0,a.useState)((()=>f())),c=(0,r.Z)(l,2),s=c[0],i=c[1],m=(0,a.useRef)(!1);function f(){const e=o.getItem(t);if(e)try{return JSON.parse(e)}catch(r){}return u(n)?n():n}(0,a.useEffect)((()=>{if(m.current)return()=>i(f());m.current=!0}),[t]);const d=(0,a.useCallback)((e=>{if("undefined"===typeof e)o.removeItem(t),i(void 0);else if(u(e)){const n=f(),r=e(n);o.setItem(t,JSON.stringify(r)),i(r)}else o.setItem(t,JSON.stringify(e)),i(e)}),[t]);return[s,d]}return e?t:function(e,t){return[u(t)?t():t,()=>{}]}}},232:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7337),a=n(7294),u=n(6395);function o(){const e=(0,u.Z)("user-message","Hello~"),t=(0,r.Z)(e,2),n=t[0],o=t[1];return a.createElement(a.Fragment,null,a.createElement("input",{value:n||"",placeholder:"Please enter some words...",onChange:e=>o(e.target.value)}),a.createElement("button",{style:{margin:"0 8px"},type:"button",onClick:()=>o("Hello~")},"Reset"),a.createElement("button",{type:"button",onClick:()=>o()},"Clear"))}},7612:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7337),a=n(7294),u=n(6395);const o=["a","e","i","o","u"];function l(){const e=(0,u.Z)("cascader",o),t=(0,r.Z)(e,2),n=t[0],l=t[1];return a.createElement(a.Fragment,null,a.createElement("p",null,n.join("-")),a.createElement("button",{type:"button",style:{marginRight:"16px"},onClick:()=>l([...n,Math.random().toString(36).slice(-1)])},"push random"),a.createElement("button",{type:"button",onClick:()=>l(o)},"reset"))}},410:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7337),a=n(7294),u=n(6395);function o(){const e=(0,u.Z)("user",{id:9234634791,name:"Zhangsan",age:33}),t=(0,r.Z)(e,2),n=t[0],o=t[1];return a.createElement(a.Fragment,null,a.createElement("input",{style:{width:200},defaultValue:n.name,placeholder:"input user name",onChange:e=>{o((t=>({...t,name:e.target.value})))}}))}},6395:function(e,t,n){"use strict";var r=n(5599);const a=(0,r.f)("object"===typeof window?window.localStorage:null);t["Z"]=a},7355:function(e,t,n){"use strict";n.r(t);n(1194);var r=n(8621),a=n(1896),u=(n(7663),n(1577)),o=n(7294),l=n(433);t["default"]=()=>{const e=(0,l.Z)(),t=e.modalProps,n=e.show;return o.createElement(o.Fragment,null,o.createElement(u.Z,{onClick:n},"show"),o.createElement(r.Z,(0,a.Z)({},t,{title:"xxx"}),"Test"))}},4718:function(e,t,n){"use strict";n.r(t);n(1194);var r=n(8621),a=n(1896),u=(n(7663),n(1577)),o=n(7294),l=n(433);t["default"]=()=>{const e=(0,l.Z)(),t=e.modalProps,n=e.show,c=e.modalState,s=e.setModalState;return o.createElement(o.Fragment,null,o.createElement(u.Z,{onClick:()=>{s({age:18}),n()}},"show"),o.createElement(r.Z,(0,a.Z)({},t,{title:"xxx"}),JSON.stringify(c,null,2)))}},433:function(e,t,n){"use strict";var r=n(7337),a=n(7294);function u(e){const t=(0,a.useState)(e),n=(0,r.Z)(t,2),u=n[0],o=n[1],l=(0,a.useState)(!1),c=(0,r.Z)(l,2),s=c[0],i=c[1],m=(0,a.useCallback)((()=>i(!0)),[s]),f=(0,a.useCallback)((()=>i(!1)),[s]),d={visible:s,onCancel:f};return{visible:s,show:m,close:f,modalProps:d,modalState:u,setModalState:o}}t["Z"]=u},6421:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(7939);function u(){return new Promise((e=>{setTimeout((()=>{e({name:"alvin",age:18})}),1e3)}))}t["default"]=()=>{const e=(0,a.Z)({name:"default",age:100},(async e=>{const t=await u();e(t)})),t=e.state,n=e.loading,o=e.error,l=e.setState,c=e.refresh;return o?"error":n?"loading....":r.createElement(r.Fragment,null,r.createElement("h4",null," name: ",t.name),r.createElement("h4",null," age: ",t.age),r.createElement("button",{onClick:()=>l((e=>({...e,age:e.age+1})))},"add age"),r.createElement("button",{onClick:c},"refresh"))}},7939:function(e,t,n){"use strict";var r=n(7337),a=n(7294),u=n(6173);function o(e,t){const n=(0,a.useState)(!0),o=(0,r.Z)(n,2),l=o[0],c=o[1],s=(0,a.useState)(),i=(0,r.Z)(s,2),m=i[0],f=i[1],d=(0,u.Z)(e),g=(0,r.Z)(d,2),p=g[0],E=g[1];async function b(){try{c(!0),await(null===t||void 0===t?void 0:t(E)),c(!1)}catch(m){f(m),c(!1)}}return(0,a.useEffect)((()=>{b()}),[]),{state:p,loading:l,error:m,refresh:b,setState:E}}t["Z"]=o},6259:function(e,t,n){"use strict";n.r(t);var r=n(7337),a=n(7294),u=n(6173);const o=()=>{const e=(0,u.Z)(),t=(0,r.Z)(e,2),n=t[0],o=t[1];a.useEffect((()=>{setTimeout((()=>{o("\u4ece\u670d\u52a1\u7aef\u83b7\u53d6\u7684\u6570\u636e")}),5e3)}),[]);const l=n||"\u6b63\u5728\u83b7\u53d6\u6570\u636e\u3002\u3002\u3002";return a.createElement("div",null,l)};t["default"]=()=>{const e=(0,u.Z)(!0),t=(0,r.Z)(e,2),n=t[0],l=t[1];return a.createElement("div",null,a.createElement("button",{onClick:()=>l(!1)},"\u5378\u8f7d"),n&&a.createElement(o,null))}},6173:function(e,t,n){"use strict";var r=n(7337),a=n(7294),u=n(3290);function o(e){const t=(0,u.Z)(),n=a.useState(e),o=(0,r.Z)(n,2),l=o[0],c=o[1],s=a.useCallback((e=>{t.current||c(e)}),[]);return[l,s]}t["Z"]=o},2189:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7337),a=n(7294),u=n(5798);function o(){const e=(0,u.Z)("user-message","Hello~"),t=(0,r.Z)(e,2),n=t[0],o=t[1];return a.createElement(a.Fragment,null,a.createElement("input",{value:n,onChange:e=>{o(e.target.value)},placeholder:"Please enter some words...",style:{width:200,marginRight:8}}),a.createElement("button",{type:"button",onClick:()=>{o()}},"Reset"))}},8106:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7337),a=n(7294),u=n(5798);const o=["a","e","i","o","u"];function l(){const e=(0,u.Z)("cascader",o),t=(0,r.Z)(e,2),n=t[0],l=t[1];return a.createElement(a.Fragment,null,a.createElement("p",null,n.join("-")),a.createElement("button",{type:"button",style:{marginRight:8},onClick:()=>l([...n,Math.random().toString(36).slice(-1)])},"push random"),a.createElement("button",{type:"button",onClick:()=>l(o)},"reset"))}},6197:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7337),a=n(7294),u=n(5798);function o(){const e=(0,u.Z)("user",{id:9234634791,name:"Zhangsan",age:33}),t=(0,r.Z)(e,2),n=t[0],o=t[1];return a.createElement(a.Fragment,null,a.createElement("input",{style:{width:200},defaultValue:n.name,placeholder:"input user name",onChange:e=>{o((t=>({...t,name:e.target.value})))}}))}},5798:function(e,t,n){"use strict";var r=n(5599);const a=(0,r.f)("object"===typeof window?window.sessionStorage:null);t["Z"]=a},7841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7337),a=n(7294);const u=(e={})=>{const t=(0,a.useState)(e),n=(0,r.Z)(t,2),u=n[0],o=n[1],l=(0,a.useCallback)((e=>{o((t=>({...t,..."function"===typeof e?e(t):e})))}),[]);return[u,l]};var o=u,l=()=>{const e=o({hello:"",count:0}),t=(0,r.Z)(e,2),n=t[0],u=t[1];return a.createElement("div",null,a.createElement("pre",null,JSON.stringify(n,null,2)),a.createElement("p",null,a.createElement("button",{type:"button",onClick:()=>u({hello:"world"})},"set hello"),a.createElement("button",{type:"button",onClick:()=>u({foo:"bar"}),style:{margin:"0 8px"}},"set foo"),a.createElement("button",{type:"button",onClick:()=>u((e=>({count:e.count+1})))},"count + 1")))}},7602:function(e,t,n){"use strict";n.r(t);var r=n(7337),a=n(7294),u=n(3290);const o=({setVisible:e})=>{const t=(0,u.Z)(),n=(0,a.useState)("I am mounted"),o=(0,r.Z)(n,2),l=o[0],c=o[1],s=async()=>{await e(),!t.current&&c("I am unmounted")};return a.createElement("button",{onClick:s},l)};t["default"]=()=>{const e=(0,a.useState)(!0),t=(0,r.Z)(e,2),n=t[0],u=t[1];return a.createElement("div",null,"click the button to unmount it",a.createElement("br",null),n?a.createElement(o,{setVisible:()=>u(!1)}):"nothing")}},3290:function(e,t,n){"use strict";var r=n(7294);const a=()=>{const e=(0,r.useRef)(!1);return(0,r.useEffect)((()=>(e.current=!1,()=>{e.current=!0})),[]),e};t["Z"]=a},1926:function(e,t,n){"use strict";n.r(t);var r=n(7337),a=n(7294),u=n(4392);t["default"]=()=>{const e=(0,u.Z)({count:"1"}),t=(0,r.Z)(e,2),n=t[0],o=t[1];return a.createElement(a.Fragment,null,a.createElement("button",{style:{marginRight:8},type:"button",onClick:()=>o({count:Number(n.count||0)+1})},"add"),a.createElement("button",{type:"button",onClick:()=>o({count:void 0})},"clear"),a.createElement("div",null,"state: ",null===n||void 0===n?void 0:n.count))}},4317:function(e,t,n){"use strict";n.r(t);var r=n(7337),a=n(7294),u=n(4392);t["default"]=()=>{const e=(0,u.Z)({page:"1",pageSize:"10"},{navigateMode:"push"}),t=(0,r.Z)(e,2),n=t[0],o=t[1];return a.createElement(a.Fragment,null,a.createElement("div",null,"page: ",n.page,a.createElement("span",{style:{paddingLeft:8}},a.createElement("button",{onClick:()=>{o((e=>({page:Number(e.page)+1})))}},"+"),a.createElement("button",{onClick:()=>{o((e=>({page:Number(e.page)-1})))},style:{margin:"0 8px"}},"-"),a.createElement("button",{onClick:()=>{o({page:1})}},"reset"))),a.createElement("br",null),a.createElement("div",null,"pageSize: ",n.pageSize,a.createElement("span",{style:{paddingLeft:8}},a.createElement("button",{onClick:()=>{o((e=>({pageSize:Number(e.pageSize)+1})))}},"+"),a.createElement("button",{onClick:()=>{o((e=>({pageSize:Number(e.pageSize)-1})))},style:{margin:"0 8px"}},"-"),a.createElement("button",{onClick:()=>{o({pageSize:10})}},"reset"))))}},4392:function(e,t,n){"use strict";var r=n(7337),a=n(6855),u=n(7294),o=n(5977);const l={skipNull:!0,skipEmptyString:!0,parseNumbers:!1,parseBooleans:!1};t["Z"]=(e,t)=>{const n=t||{},c=n.navigateMode,s=void 0===c?"push":c,i=(0,o.TH)(),m=(0,o.k6)(),f=(0,u.useState)(!1),d=(0,r.Z)(f,2),g=d[1],p=(0,u.useRef)("function"===typeof e?e():e||{}),E=(0,u.useMemo)((()=>(0,a.parse)(i.search,l)),[i.search]),b=(0,u.useMemo)((()=>({...p.current,...E})),[E]),h=e=>{const t="function"===typeof e?e(b):e;g((e=>!e)),m[s]({hash:i.hash,search:(0,a.stringify)({...E,...t},l)||"?"})};return[b,h]}}}]);