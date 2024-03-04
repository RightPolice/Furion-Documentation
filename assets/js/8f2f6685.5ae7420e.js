"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[8387],{4063:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(5893),r=n(1151);n(4996);const i={slug:"httpcontext",title:"1. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://gitee.com/dotnetchina",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","httpcontext"]},a=void 0,c={permalink:"/Furion-Documentation/blog/httpcontext",editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/blog/2021-02-01-httpcontext.mdx",source:"@site/blog/2021-02-01-httpcontext.mdx",title:"1. HttpContext \u5e94\u7528",description:"HttpContext \u91cd\u5927\u8c03\u6574",date:"2021-02-01T00:00:00.000Z",formattedDate:"February 1, 2021",tags:[{label:"furion",permalink:"/Furion-Documentation/blog/tags/furion"},{label:"furos",permalink:"/Furion-Documentation/blog/tags/furos"},{label:".net",permalink:"/Furion-Documentation/blog/tags/net"},{label:".netcore",permalink:"/Furion-Documentation/blog/tags/netcore"},{label:".net5",permalink:"/Furion-Documentation/blog/tags/net-5"},{label:"httpcontext",permalink:"/Furion-Documentation/blog/tags/httpcontext"}],readingTime:1.545,hasTruncateMarker:!0,authors:[{name:"dotNET China",title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",url:"https://gitee.com/dotnetchina",imageURL:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],frontMatter:{slug:"httpcontext",title:"1. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://gitee.com/dotnetchina",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5","httpcontext"]},unlisted:!1,prevItem:{title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",permalink:"/Furion-Documentation/blog/fileupload-download"}},l={authorsImageUrls:[void 0]},s=[{value:"HttpContext \u91cd\u5927\u8c03\u6574",id:"httpcontext-\u91cd\u5927\u8c03\u6574",level:2},{value:"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",level:2}];function u(t){const e={code:"code",h2:"h2",p:"p",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"httpcontext-\u91cd\u5927\u8c03\u6574",children:"HttpContext \u91cd\u5927\u8c03\u6574"}),"\n",(0,o.jsxs)(e.p,{children:["\u5728 ",(0,o.jsx)(e.code,{children:"ASP.NET"})," \u7684\u65f6\u4ee3\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"HttpContext"})," \u5168\u5c40\u9759\u6001\u7c7b\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u4f46\u5728 ",(0,o.jsx)(e.code,{children:"ASP.NET Core"})," \u4e2d\uff0c",(0,o.jsx)(e.code,{children:"HttpContext"})," \u662f\u4e00\u4e2a\u975e\u9759\u6001\u7684\u62bd\u8c61\u7c7b\uff0c\u65e0\u6cd5\u624b\u52a8\u521b\u5efa\uff0c\u4e5f\u65e0\u6cd5\u901a\u8fc7\u9759\u6001\u83b7\u53d6\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u867d\u7136\u5728 ",(0,o.jsx)(e.code,{children:"ASP.NET Core"})," \u4e2d\u65e0\u6cd5\u76f4\u63a5\u83b7\u53d6 ",(0,o.jsx)(e.code,{children:"HttpContext"})," \u5bf9\u8c61\u3002\u4f46\u662f\u5fae\u8f6f\u4e5f\u63d0\u4f9b\u4e86\u6ce8\u5165 ",(0,o.jsx)(e.code,{children:"IHttpContextAccessor"})," \u65b9\u5f0f\u83b7\u53d6\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",children:"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f"})]})}function p(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var o=n(7294);const r={},i=o.createContext(r);function a(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);