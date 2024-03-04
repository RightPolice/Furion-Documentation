"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7057],{5875:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=s(5893),o=s(1151),l=s(4996);const r={id:"globalusing",title:"2.12 GlobalUsing \u4f7f\u7528",sidebar_label:"2.12 GlobalUsing \u4f7f\u7528",description:"\u5b66\u4e60\u5982\u4f55\u907f\u514d\u4ee3\u7801\u5934\u90e8\u5927\u91cf Using"},c=void 0,d={id:"globalusing",title:"2.12 GlobalUsing \u4f7f\u7528",description:"\u5b66\u4e60\u5982\u4f55\u907f\u514d\u4ee3\u7801\u5934\u90e8\u5927\u91cf Using",source:"@site/docs/globalusing.mdx",sourceDirName:".",slug:"/globalusing",permalink:"/Furion-Documentation/docs/globalusing",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/globalusing.mdx",tags:[],version:"current",lastUpdatedBy:"RightPolice",lastUpdatedAt:1199145600,formattedLastUpdatedAt:"Jan 1, 2008",frontMatter:{id:"globalusing",title:"2.12 GlobalUsing \u4f7f\u7528",sidebar_label:"2.12 GlobalUsing \u4f7f\u7528",description:"\u5b66\u4e60\u5982\u4f55\u907f\u514d\u4ee3\u7801\u5934\u90e8\u5927\u91cf Using"},sidebar:"docs",previous:{title:"2.11 .NET7 \u5347\u7ea7 .NET8 \u2728",permalink:"/Furion-Documentation/docs/net7-to-net8"},next:{title:"2.13 JSON Schema \u4f7f\u7528",permalink:"/Furion-Documentation/docs/jsonschema"}},t={},a=[{value:"2.12.1 \u5173\u4e8e <code>GlobalUsing</code>",id:"2121-\u5173\u4e8e-globalusing",level:2},{value:"2.12.2 \u5fc5\u8981\u914d\u7f6e",id:"2122-\u5fc5\u8981\u914d\u7f6e",level:2},{value:"2.12.3 \u57fa\u672c\u4f7f\u7528",id:"2123-\u57fa\u672c\u4f7f\u7528",level:2},{value:"2.12.3.1 \u9ed8\u8ba4\u5168\u5c40 <code>using</code>",id:"21231-\u9ed8\u8ba4\u5168\u5c40-using",level:3},{value:"2.12.4 <code>.NET5</code> \u9879\u76ee\u5f00\u542f\u652f\u6301",id:"2124-net5-\u9879\u76ee\u5f00\u542f\u652f\u6301",level:2},{value:"2.12.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"2125-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}];function g(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h2,{id:"2121-\u5173\u4e8e-globalusing",children:["2.12.1 \u5173\u4e8e ",(0,i.jsx)(e.code,{children:"GlobalUsing"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 ",(0,i.jsx)(e.code,{children:".NET6/C#10"})," \u4e4b\u540e\uff0c\u5fae\u8f6f\u65b0\u589e\u4e86 ",(0,i.jsx)(e.code,{children:"GlobalUsings"})," \u673a\u5236\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"GlobalUsings.cs"})," \u6587\u4ef6\uff0c\u628a\u5e38\u7528\u7684 ",(0,i.jsx)(e.code,{children:"using"})," \u653e\u7f6e\u5176\u4e2d\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u6837 ",(0,i.jsx)(e.code,{children:"GlobalUsings.cs"})," \u6240\u5728\u7684\u9879\u76ee ",(0,i.jsx)(e.code,{children:".cs"})," \u6587\u4ef6\u5c31\u65e0\u9700\u91cd\u590d ",(0,i.jsx)(e.code,{children:"using"})," \u4e86\uff0c\u5927\u5927\u7684\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u4e5f\u8ba9\u4ee3\u7801\u53d8\u7684\u66f4\u52a0\u7b80\u6d01\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"2122-\u5fc5\u8981\u914d\u7f6e",children:"2.12.2 \u5fc5\u8981\u914d\u7f6e"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["\u542f\u7528 ",(0,i.jsx)(e.code,{children:"GlobalUsings"})," \u673a\u5236\u9700\u8981\u4ee5\u4e0b\u4e24\u4e2a\u6b65\u9aa4\uff1a"]})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728\u4f60\u9700\u8981\u5168\u5c40 ",(0,i.jsx)(e.code,{children:"using"})," \u7684\u9879\u76ee\u5c42\u6839\u76ee\u5f55\u521b\u5efa ",(0,i.jsx)(e.code,{children:"GlobalUsings.cs"})," \u6587\u4ef6\uff0c\u5982\u679c\u591a\u4e2a\u9879\u76ee\u5c42\u9700\u8981\uff0c\u5219\u6bcf\u4e2a\u5c42\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"GlobalUsings.cs"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u7f16\u8f91\u9879\u76ee\u7684 ",(0,i.jsx)(e.code,{children:".csproj"})," \u6587\u4ef6\uff0c\u6dfb\u52a0 ",(0,i.jsx)(e.code,{children:"<ImplicitUsings>enable</ImplicitUsings>"}),"\uff0c\u6ce8\u610f\u662f\u5728 ",(0,i.jsx)(e.code,{children:"<PropertyGroup>"})," \u4e2d\u6dfb\u52a0\uff0c\u901a\u5e38\u548c ",(0,i.jsx)(e.code,{children:"<TargetFramework>"})," \u540c\u7236\u540c\u7ea7"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"2123-\u57fa\u672c\u4f7f\u7528",children:"2.12.3 \u57fa\u672c\u4f7f\u7528"}),"\n",(0,i.jsxs)(e.p,{children:["\u914d\u7f6e\u4e4b\u540e\uff0c\u73b0\u5728\u5c31\u53ef\u4ee5\u628a\u5e38\u7528\u7684 ",(0,i.jsx)(e.code,{children:"using"})," \u653e\u5230 ",(0,i.jsx)(e.code,{children:"GlobalUsings.cs"})," \u4e2d\u4e86\uff0c\u5199\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cs",metastring:'showLineNumbers title="Furion \u63a8\u8350\u7684\u5168\u5c40\u547d\u540d\u7a7a\u95f4"',children:"global using Furion;\nglobal using Furion.DatabaseAccessor;\nglobal using Furion.DataEncryption;\nglobal using Furion.DataValidation;\nglobal using Furion.DependencyInjection;\nglobal using Furion.DynamicApiController;\nglobal using Furion.Extensions;\nglobal using Furion.FriendlyException;\nglobal using Furion.Logging;\nglobal using Mapster;\nglobal using Microsoft.AspNetCore.Authorization;\nglobal using Microsoft.AspNetCore.Http;\nglobal using Microsoft.AspNetCore.Mvc;\nglobal using Microsoft.CodeAnalysis;\nglobal using Microsoft.EntityFrameworkCore;\nglobal using System.ComponentModel.DataAnnotations;\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["\u6ce8\u610f\u5fc5\u987b\u4ee5 ",(0,i.jsx)(e.code,{children:"global"})," \u5f00\u5934\uff01"]})}),"\n",(0,i.jsxs)(e.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"tip",children:[(0,i.jsxs)(e.p,{children:["\u4e00\u822c\u63a8\u8350\u628a\u5b9e\u4f53\u7c7b\u7684\u547d\u540d\u7a7a\u95f4\u4e5f\u653e\u8fdb\u53bb\uff0c\u56e0\u4e3a\u4ed3\u50a8 ",(0,i.jsx)(e.code,{children:"IRepository<T>"})," \u4f7f\u7528\u7684\u9891\u7387\u975e\u5e38\u9ad8\u3002"]}),(0,i.jsxs)(e.p,{children:["\u53e6\u5916\u63a8\u8350\u5927\u5bb6\u5728 ",(0,i.jsx)(e.code,{children:"Visual Studio"})," \u4e2d\u5b89\u88c5 ",(0,i.jsx)(e.code,{children:"CodeMaid"})," \u63d2\u4ef6\uff08\u6ce8\u610f ",(0,i.jsx)(e.code,{children:"2019"})," \u548c ",(0,i.jsx)(e.code,{children:"2022"})," \u7248\u672c\uff09\uff0c\u81ea\u52a8\u6e05\u7406\u89e3\u51b3\u65b9\u6848\u6240\u6709\u65e0\u7528\u7684 ",(0,i.jsx)(e.code,{children:"using"}),"\uff0c\u7ed3\u5408 ",(0,i.jsx)(e.code,{children:"GlobalUsings.cs"})," \u975e\u5e38\u68d2\uff01"]})]}),"\n",(0,i.jsxs)(e.admonition,{title:"\u4e2a\u522b\u60c5\u51b5",type:"important",children:[(0,i.jsxs)(e.p,{children:["\u53ef\u80fd\u7531\u4e8e ",(0,i.jsx)(e.code,{children:"Visual Studio"})," \u7248\u672c\u7684\u95ee\u9898\uff0c\u5bfc\u81f4 ",(0,i.jsx)(e.code,{children:"GlobalUsings.cs"})," \u5b9a\u4e49\u51fa\u9519\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u5728 ",(0,i.jsx)(e.code,{children:"using"})," \u540e\u9762\u52a0 ",(0,i.jsx)(e.code,{children:"global::"}),"\uff0c\u5982\uff1a"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cs",metastring:"showLineNumbers",children:"global using global::Furion;\n"})})]}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cs",metastring:"showLineNumbers {1}",children:"// \u65e0\u9700 using Furion \u7684\u547d\u540d\u7a7a\u95f4\u4e86\u54e6\uff0c\u6e05\u723d\u4e86\u4e0d\u5c11\n\nnamespace Your.Application;\n\npublic class DefaultAppService : IDynamicApiController\n{\n    private readonly IRepository<BoardCard> _boardCardRepository;\n    private readonly IRepository<BoardGroup> _boardGroupRepository;\n    private readonly IRepository<BoardCardAttachment> _boardCardAttachmentRepository;\n    private readonly IRepository<BoardCardUser> _boardCardUserRepository;\n}\n\n// ....\n"})}),"\n",(0,i.jsx)("img",{src:(0,l.Z)("img/cd2223.png")}),"\n",(0,i.jsxs)(e.h3,{id:"21231-\u9ed8\u8ba4\u5168\u5c40-using",children:["2.12.3.1 \u9ed8\u8ba4\u5168\u5c40 ",(0,i.jsx)(e.code,{children:"using"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.strong,{children:["\u5b9e\u9645\u4e0a\u5fae\u8f6f\u5df2\u7ecf\u81ea\u52a8\u628a\u4e00\u4e9b\u5e38\u7528\u7684 ",(0,i.jsx)(e.code,{children:"using"})," \u5728\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u4e2d\u81ea\u52a8\u8865\u4e0a\u4e86"]}),"\uff0c\u8def\u5f84\u5728 ",(0,i.jsx)(e.code,{children:"\u9879\u76ee/obj/Debug/net6.0/\u9879\u76ee.GlobalUsings.cs"})," \u6587\u4ef6\u4e2d\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cs",metastring:"showLineNumbers",children:"// <auto-generated/>\nglobal using global::System;\nglobal using global::System.Collections.Generic;\nglobal using global::System.IO;\nglobal using global::System.Linq;\nglobal using global::System.Net.Http;\nglobal using global::System.Threading;\nglobal using global::System.Threading.Tasks;\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["\u4e5f\u5c31\u662f\u4ee5\u4e0a\u7684 ",(0,i.jsx)(e.code,{children:"using"})," \u65e0\u9700\u5199\u5728\u4f60\u521b\u5efa\u7684 ",(0,i.jsx)(e.code,{children:"GlobalUsings.cs"})," \u4e2d\u4e86\uff0c\u5fae\u8f6f\u4f1a\u5728\u7f16\u8bd1\u65f6\u81ea\u52a8\u5408\u5e76\u3002"]})}),"\n",(0,i.jsxs)(e.h2,{id:"2124-net5-\u9879\u76ee\u5f00\u542f\u652f\u6301",children:["2.12.4 ",(0,i.jsx)(e.code,{children:".NET5"})," \u9879\u76ee\u5f00\u542f\u652f\u6301"]}),"\n",(0,i.jsxs)(e.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.jsx)(e.code,{children:".NET5"})," \u91c7\u7528 ",(0,i.jsx)(e.code,{children:"C# 9.0"})," \u7f16\u8bd1\uff0c\u800c ",(0,i.jsx)(e.code,{children:"GlobalUsing"})," \u662f\u4ece ",(0,i.jsx)(e.code,{children:"C# 10.0"})," \u5f00\u59cb\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u7f16\u8f91\u9879\u76ee\u7684 ",(0,i.jsx)(e.code,{children:".csproj"})," \u5e76\u6dfb\u52a0 ",(0,i.jsx)(e.code,{children:"<LangVersion>10.0</LangVersion>"})," \u5373\u53ef\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-xml",metastring:"showLineNumbers {3}",children:"<PropertyGroup>\n\t<TargetFramework>net5.0</TargetFramework>\n    <LangVersion>10.0</LangVersion>\n    \x3c!-- \u5176\u4ed6\u914d\u7f6e --\x3e\n</PropertyGroup>\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u9700\u4f7f\u7528\u6700\u65b0\u7248\u53ef\u914d\u7f6e\u4e3a ",(0,i.jsx)(e.code,{children:"<LangVersion>latest</LangVersion>"}),"\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"2125-\u53cd\u9988\u4e0e\u5efa\u8bae",children:"2.12.5 \u53cd\u9988\u4e0e\u5efa\u8bae"}),"\n",(0,i.jsx)(e.admonition,{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note",children:(0,i.jsxs)(e.p,{children:["\u7ed9 Furion \u63d0 ",(0,i.jsx)(e.a,{href:"https://gitee.com/dotnetchina/Furion/issues/new?issue",children:"Issue"}),"\u3002"]})})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>r});var i=s(7294);const o={},l=i.createContext(o);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);