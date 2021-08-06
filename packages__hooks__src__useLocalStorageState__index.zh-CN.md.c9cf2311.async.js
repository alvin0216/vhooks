(self["webpackChunkx_rhooks"]=self["webpackChunkx_rhooks"]||[]).push([[692],{3602:function(e,t,a){"use strict";a.d(t,{m:function(){return n.m}});var n=a(7624);a(3142)},7231:function(e,t,a){"use strict";a.r(t);var n=a(7294),l=a(6924),c=a(2221),o=a(6148),r=a(8090);const s=n.memo(r.default["uselocalstoragestate-demo1"].component),m=n.memo(r.default["uselocalstoragestate-demo2"].component),i=n.memo(r.default["uselocalstoragestate-demo3"].component);t["default"]=e=>(n.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h1",{id:"uselocalstoragestate"},n.createElement(l.AnchorLink,{to:"#uselocalstoragestate","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useLocalStorageState"),n.createElement("p",null,"\u4e00\u4e2a\u53ef\u4ee5\u5c06\u72b6\u6001\u6301\u4e45\u5316\u5b58\u50a8\u5728 localStorage \u4e2d\u7684 Hook \u3002"),n.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},n.createElement(l.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),n.createElement("h3",{id:"\u5c06-state-\u6301\u4e45\u5316\u5728-localstorage-\u4e2d"},n.createElement(l.AnchorLink,{to:"#\u5c06-state-\u6301\u4e45\u5316\u5728-localstorage-\u4e2d","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u5c06 state \u6301\u4e45\u5316\u5728 localStorage \u4e2d")),n.createElement(c.default,r.default["uselocalstoragestate-demo1"].previewerProps,n.createElement(s,null)),n.createElement("div",{className:"markdown"},n.createElement("h3",{id:"\u5b58\u50a8\u5bf9\u8c61"},n.createElement(l.AnchorLink,{to:"#\u5b58\u50a8\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u5b58\u50a8\u5bf9\u8c61")),n.createElement(c.default,r.default["uselocalstoragestate-demo2"].previewerProps,n.createElement(m,null)),n.createElement("div",{className:"markdown"},n.createElement("h3",{id:"\u4f7f\u7528-function-updater-\u5b58\u50a8"},n.createElement(l.AnchorLink,{to:"#\u4f7f\u7528-function-updater-\u5b58\u50a8","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528 function updater \u5b58\u50a8")),n.createElement(c.default,r.default["uselocalstoragestate-demo3"].previewerProps,n.createElement(i,null)),n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"api"},n.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"API"),n.createElement(o.Z,{code:"const [state, setState] = useLocalStorageState<T>(\n  key: string,\n  defaultValue?: T | (() => T),\n): [T?, (value?: T | ((previousState: T) => T)) => void]",lang:"typescript"}),n.createElement("p",null,"\u5b83\u7684 API \u548c ",n.createElement("code",null,"useState")," \u975e\u5e38\u7c7b\u4f3c\uff0c\u4f46\u662f\u591a\u4e86\u4e00\u4e2a\u53c2\u6570 ",n.createElement("code",null,"key")," \uff0c\u7528\u6765\u6307\u5b9a\u5728 localStorage \u4e2d\u5b58\u50a8\u65f6\u6240\u4f7f\u7528\u7684 ",n.createElement("code",null,"key")," \u3002\u800c\u5b83\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u548c ",n.createElement("code",null,"useState")," \u4fdd\u6301\u4e86\u4e00\u81f4\uff0c\u5f53\u8c03\u7528 ",n.createElement("code",null,"setState")," \u65f6\uff0c\u5b83\u4f1a\u81ea\u52a8\u5c06\u65b0\u503c\u5199\u5165\u5230 localStorage \u4e2d\u3002"),n.createElement("p",null,"\u5982\u679c\u60f3\u4ece localStorage \u4e2d\u5220\u9664\u8fd9\u6761\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",n.createElement("code",null,"setState()")," \u6216 ",n.createElement("code",null,"setState(undefined)")," \u3002")))))}}]);