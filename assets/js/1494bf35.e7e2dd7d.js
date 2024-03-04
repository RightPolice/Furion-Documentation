"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5426],{6723:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=i(5893),r=i(1151),s=i(4996);const c={id:"get-start-net7",title:"2.4 ASP.NET 7 \u96c6\u6210",sidebar_label:"2.4 ASP.NET 7 \u96c6\u6210",description:"\u5b66\u4e60\u5982\u4f55\u5728 ASP.NET 7 \u4e2d\u96c6\u6210 Furion"},d=void 0,o={id:"get-start-net7",title:"2.4 ASP.NET 7 \u96c6\u6210",description:"\u5b66\u4e60\u5982\u4f55\u5728 ASP.NET 7 \u4e2d\u96c6\u6210 Furion",source:"@site/docs/get-start-net7.mdx",sourceDirName:".",slug:"/get-start-net7",permalink:"/Furion-Documentation/docs/get-start-net7",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/get-start-net7.mdx",tags:[],version:"current",lastUpdatedBy:"RightPolice",lastUpdatedAt:1199145600,formattedLastUpdatedAt:"Jan 1, 2008",frontMatter:{id:"get-start-net7",title:"2.4 ASP.NET 7 \u96c6\u6210",sidebar_label:"2.4 ASP.NET 7 \u96c6\u6210",description:"\u5b66\u4e60\u5982\u4f55\u5728 ASP.NET 7 \u4e2d\u96c6\u6210 Furion"},sidebar:"docs",previous:{title:"2.3 ASP.NET 6 \u96c6\u6210",permalink:"/Furion-Documentation/docs/get-start-net6"},next:{title:"2.5 ASP.NET 8 \u96c6\u6210 \u2728",permalink:"/Furion-Documentation/docs/get-start-net8"}},l={},a=[{value:"2.4.1 \u521b\u5efa <code>Web</code> \u9879\u76ee",id:"241-\u521b\u5efa-web-\u9879\u76ee",level:2},{value:"2.4.1.1 \u521b\u5efa <code>ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f</code>",id:"2411-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"2.4.2 \u6dfb\u52a0 <code>Furion</code> \u4f9d\u8d56\u5305",id:"242-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305",level:2},{value:"2.4.3 <code>Furion</code> \u57fa\u672c\u914d\u7f6e",id:"243-furion-\u57fa\u672c\u914d\u7f6e",level:2},{value:"2.4.3.1 <code>Program.cs</code> \u6dfb\u52a0 <code>Inject()</code>",id:"2431-programcs-\u6dfb\u52a0-inject",level:3},{value:"2.4.4 \u542f\u52a8\u6d4f\u89c8\u5668",id:"244-\u542f\u52a8\u6d4f\u89c8\u5668",level:2},{value:"2.4.5 <code>WebApplication</code> \u8bf4\u660e \ud83c\udf83",id:"245-webapplication-\u8bf4\u660e-",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"\u63a8\u8350\u4f7f\u7528\u811a\u624b\u67b6",type:"tip",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Furion"})," \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002"]}),(0,t.jsxs)(n.p,{children:["\u63a8\u8350\u4f7f\u7528 \u300a",(0,t.jsx)(n.a,{href:"/Furion-Documentation/docs/template",children:"2.6 \u5b98\u65b9\u811a\u624b\u67b6"}),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002"]})]}),"\n","\n","\n",(0,t.jsx)(n.admonition,{title:"\u5165\u95e8\u6761\u4ef6",type:"note",children:(0,t.jsxs)(n.p,{children:["\u5bf9 ",(0,t.jsx)(n.code,{children:".NET Core/ASP.NET Core"})," \u6709\u4e00\u5b9a\u57fa\u7840\u4e86\u89e3\uff0c\u8fd8\u672a\u63a5\u89e6\u7684\u53ef\u5148\u770b ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/?view=aspnetcore-7.0&tabs=windows",children:"\u3010ASP.NET Core \u57fa\u7840\u3011"})]})}),"\n",(0,t.jsxs)(n.h2,{id:"241-\u521b\u5efa-web-\u9879\u76ee",children:["2.4.1 \u521b\u5efa ",(0,t.jsx)(n.code,{children:"Web"})," \u9879\u76ee"]}),"\n",(0,t.jsx)(n.admonition,{title:"\u73af\u5883\u8981\u6c42",type:"note",children:(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Furion"})," \u4e4b\u524d\u5148\u786e\u4fdd\u5b89\u88c5\u4e86\u6700\u65b0\u7684 ",(0,t.jsx)(n.code,{children:".NET 7 SDK"})," \u5e76\u5b89\u88c5 ",(0,t.jsx)(n.code,{children:"Visual Studio 2022 Preview"})," \u6700\u65b0\u7248\u3002"]})}),"\n",(0,t.jsxs)(n.h3,{id:"2411-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f",children:["2.4.1.1 \u521b\u5efa ",(0,t.jsx)(n.code,{children:"ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6253\u5f00 ",(0,t.jsx)(n.code,{children:"Visual Studio 2022 Preview"})," \u5e76\u521b\u5efa ",(0,t.jsx)(n.code,{children:"Web"})," \u9879\u76ee"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,s.Z)("img/rmn1.png")}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u914d\u7f6e\u9879\u76ee\u540d\u79f0"}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,s.Z)("img/rmn2.png")}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u9009\u62e9 ",(0,t.jsx)(n.code,{children:"WebAPI"})," \u9879\u76ee"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,s.Z)("img/net71.png")}),"\n",(0,t.jsx)(n.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Furion"})," \u5df2\u7ecf\u5185\u7f6e\u4e86 ",(0,t.jsx)(n.code,{children:"Swagger"})," \u89c4\u8303\u5316\u5e93\uff0c\u6240\u4ee5\u521b\u5efa\u65f6",(0,t.jsx)(n.strong,{children:"\u65e0\u9700\u52fe\u9009"})," ",(0,t.jsx)(n.code,{children:"Enable OpenAPI support"})," \u9009\u9879\u3002\u5426\u5219\u63d0\u793a\u7248\u672c\u4e0d\u4e00\u81f4\u4ea7\u751f\u51b2\u7a81\u3002"]})}),"\n",(0,t.jsxs)(n.h2,{id:"242-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305",children:["2.4.2 \u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"Furion"})," \u4f9d\u8d56\u5305"]}),"\n",(0,t.jsx)("img",{src:(0,s.Z)("img/net72.png")}),"\n",(0,t.jsxs)(n.h2,{id:"243-furion-\u57fa\u672c\u914d\u7f6e",children:["2.4.3 ",(0,t.jsx)(n.code,{children:"Furion"})," \u57fa\u672c\u914d\u7f6e"]}),"\n",(0,t.jsxs)(n.h3,{id:"2431-programcs-\u6dfb\u52a0-inject",children:["2.4.3.1 ",(0,t.jsx)(n.code,{children:"Program.cs"})," \u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"Inject()"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {1,3,11}",children:"var builder = WebApplication.CreateBuilder(args).Inject();\n\nbuilder.Services.AddControllers().AddInject();\n\nvar app = builder.Build();\n\napp.UseHttpsRedirection();\n\napp.UseAuthorization();\n\napp.UseInject();\n\napp.MapControllers();\n\napp.Run();\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"\u5c0f\u63d0\u9192",type:"important",children:(0,t.jsxs)(n.p,{children:["\u5982\u679c ",(0,t.jsx)(n.code,{children:"app.UseInject()"})," \u4e0d\u8f93\u5165\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u5730\u5740\u4e3a ",(0,t.jsx)(n.code,{children:"/api"}),"\uff0c\u5982\u679c\u8f93\u5165 ",(0,t.jsx)(n.code,{children:"string.Empty"})," \u5219\u4e3a ",(0,t.jsx)(n.code,{children:"/"})," \u76ee\u5f55\u3002\u5982\u679c\u8f93\u5165\u4efb\u610f\u5b57\u7b26\u4e32\uff0c\u5219\u4e3a ",(0,t.jsx)(n.code,{children:"/\u4efb\u610f\u5b57\u7b26\u4e32"})," \u76ee\u5f55\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"244-\u542f\u52a8\u6d4f\u89c8\u5668",children:"2.4.4 \u542f\u52a8\u6d4f\u89c8\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u542f\u52a8\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c\u3002"}),"\n",(0,t.jsx)("img",{src:(0,s.Z)("img/rmn5.png")}),"\n",(0,t.jsxs)(n.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"note",children:[(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Visual Studio 2022 Preview"})," \u521b\u5efa\u7684\u9879\u76ee\u4f1a\u81ea\u52a8\u914d\u7f6e\u4e86\u542f\u52a8\u9875\uff0c\u5982\u679c\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"F5"})," \u8fd0\u884c\uff0c\u53ef\u80fd\u4e0d\u4f1a\u81ea\u52a8\u6253\u5f00\u9996\u9875\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e ",(0,t.jsx)(n.code,{children:"launchSettings.json"})," \u7684 ",(0,t.jsx)(n.code,{children:"launchUrl"})," \u5373\u53ef\uff1a"]}),(0,t.jsx)("img",{src:(0,s.Z)("img/rmn6.png")})]}),"\n",(0,t.jsxs)(n.h2,{id:"245-webapplication-\u8bf4\u660e-",children:["2.4.5 ",(0,t.jsx)(n.code,{children:"WebApplication"})," \u8bf4\u660e \ud83c\udf83"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:".NET6"})," \u7248\u672c\u65b0\u589e\u4e86 ",(0,t.jsx)(n.code,{children:"WebApplication"})," \u5bf9\u8c61\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u6ce8\u518c\u670d\u52a1\uff0c\u53ea\u9700\u8981\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"builder.Services.AddXXX()"})," \u5373\u53ef\u3002\u5982\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",metastring:"showLineNumbers  {4}",children:"var builder = WebApplication.CreateBuilder(args).Inject();\n\nbuilder.Services.AddControllers().AddInject();\nbuilder.Services.AddRemoteRequest();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var t=i(7294);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);