"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4888],{8970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(5893),i=t(1151);const r={id:"unifyresultsettings",title:"10. \u89c4\u8303\u5316\u7ed3\u679c\u914d\u7f6e",sidebar_label:"10. \u89c4\u8303\u5316\u7ed3\u679c\u914d\u7f6e"},o=void 0,c={id:"settings/unifyresultsettings",title:"10. \u89c4\u8303\u5316\u7ed3\u679c\u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/unifyresultsettings.mdx",sourceDirName:"settings",slug:"/settings/unifyresultsettings",permalink:"/Furion-Documentation/docs/settings/unifyresultsettings",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/settings/unifyresultsettings.mdx",tags:[],version:"current",lastUpdatedBy:"RightPolice",lastUpdatedAt:1199145600,formattedLastUpdatedAt:"Jan 1, 2008",frontMatter:{id:"unifyresultsettings",title:"10. \u89c4\u8303\u5316\u7ed3\u679c\u914d\u7f6e",sidebar_label:"10. \u89c4\u8303\u5316\u7ed3\u679c\u914d\u7f6e"},sidebar:"settings",previous:{title:"9. JWT \u914d\u7f6e",permalink:"/Furion-Documentation/docs/settings/jwtsettings"}},d={},l=[{value:"10.1 \u5173\u4e8e\u914d\u7f6e",id:"101-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"10.2 \u914d\u7f6e\u4fe1\u606f",id:"102-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"10.3 \u914d\u7f6e\u793a\u4f8b",id:"103-\u914d\u7f6e\u793a\u4f8b",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,s.jsx)(n.a,{href:"../jsonschema",children:"2.7 JSON Schema \u4f7f\u7528"}),"\u3011"]}),(0,s.jsxs)(n.p,{children:["\u53ea\u9700\u8981\u5728 ",(0,s.jsx)(n.code,{children:".json"})," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers {2}",children:'{\n  "$schema": "https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json"\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"101-\u5173\u4e8e\u914d\u7f6e",children:"10.1 \u5173\u4e8e\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u89c4\u8303\u5316\u914d\u7f6e\u6307\u7684\u662f\u914d\u7f6e\u54cd\u5e94\u7ed3\u679c\uff0c\u54cd\u5e94\u72b6\u6001\u7801\u7b49\u914d\u7f6e"}),"\n",(0,s.jsx)(n.h2,{id:"102-\u914d\u7f6e\u4fe1\u606f",children:"10.2 \u914d\u7f6e\u4fe1\u606f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UnifyResultSettings"})," \u89c4\u8303\u5316\u914d\u7f6e\u6839\u8282\u70b9","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Return200StatusCodes"}),"\uff1a\u914d\u7f6e\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"200"})," \u72b6\u6001\u7801\u7684\u8bf7\u6c42\uff0c",(0,s.jsx)(n.code,{children:"int[]"})," \u7c7b\u578b\uff0c\u53ea\u652f\u6301 ",(0,s.jsx)(n.code,{children:"400+(404\u9664\u5916)"})," \u72b6\u6001\u7801\u7be1\u6539"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AdaptStatusCodes"}),"\uff1a\u914d\u7f6e\u7be1\u6539\u72b6\u6001\u7801\u89c4\u5219\uff0c",(0,s.jsx)(n.code,{children:"int[][]"})," \u7c7b\u578b\uff0c\u53ea\u652f\u6301 ",(0,s.jsx)(n.code,{children:"400+(404\u9664\u5916)"})," \u72b6\u6001\u7801\u7be1\u6539"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SupportMvcController"}),"\uff1a\u662f\u5426\u652f\u6301 ",(0,s.jsx)(n.code,{children:"MVC"})," \u63a7\u5236\u53f0\u89c4\u8303\u5316\u5904\u7406\uff0c",(0,s.jsx)(n.code,{children:"bool"})," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"103-\u914d\u7f6e\u793a\u4f8b",children:"10.3 \u914d\u7f6e\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers  {2,3}",children:'{\n  "UnifyResultSettings": {\n    "Return200StatusCodes": [401, 403],\n    "AdaptStatusCodes": [\n      [401, 200],\n      [403, 401]\n    ],\n    "SupportMvcController": true\n  }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);