"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5901],{8305:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=i(5893),s=i(1151),o=i(4996);const r={id:"get-start-net5",title:"2.2 ASP.NET 5 \u96c6\u6210",sidebar_label:"2.2 ASP.NET 5 \u96c6\u6210",description:"\u5b66\u4e60\u5982\u4f55\u5728 ASP.NET 5 \u4e2d\u96c6\u6210 Furion"},c=void 0,d={id:"get-start-net5",title:"2.2 ASP.NET 5 \u96c6\u6210",description:"\u5b66\u4e60\u5982\u4f55\u5728 ASP.NET 5 \u4e2d\u96c6\u6210 Furion",source:"@site/docs/get-start-net5.mdx",sourceDirName:".",slug:"/get-start-net5",permalink:"/Furion-Documentation/docs/get-start-net5",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/get-start-net5.mdx",tags:[],version:"current",lastUpdatedBy:"RightPolice",lastUpdatedAt:1199145600,formattedLastUpdatedAt:"Jan 1, 2008",frontMatter:{id:"get-start-net5",title:"2.2 ASP.NET 5 \u96c6\u6210",sidebar_label:"2.2 ASP.NET 5 \u96c6\u6210",description:"\u5b66\u4e60\u5982\u4f55\u5728 ASP.NET 5 \u4e2d\u96c6\u6210 Furion"},sidebar:"docs",previous:{title:"2.1 \u5165\u95e8\u6307\u5357",permalink:"/Furion-Documentation/docs/serverun"},next:{title:"2.3 ASP.NET 6 \u96c6\u6210",permalink:"/Furion-Documentation/docs/get-start-net6"}},l={},a=[{value:"2.2.1 \u521b\u5efa <code>Web</code> \u9879\u76ee",id:"221-\u521b\u5efa-web-\u9879\u76ee",level:2},{value:"2.2.1.1 \u521b\u5efa <code>ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f</code>",id:"2211-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"2.2.2 \u6dfb\u52a0 <code>Furion</code> \u4f9d\u8d56\u5305",id:"222-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305",level:2},{value:"2.2.3 <code>Furion</code> \u57fa\u672c\u914d\u7f6e",id:"223-furion-\u57fa\u672c\u914d\u7f6e",level:2},{value:"2.2.3.1 <code>Program.cs</code> \u6dfb\u52a0 <code>Inject()</code>",id:"2231-programcs-\u6dfb\u52a0-inject",level:3},{value:"2.2.3.2 \u5728 <code>Startup.cs</code> \u4e2d\u6dfb\u52a0\u4e24\u4e2a <code>Inject()</code>",id:"2232-\u5728-startupcs-\u4e2d\u6dfb\u52a0\u4e24\u4e2a-inject",level:3},{value:"2.2.4 \u542f\u52a8\u6d4f\u89c8\u5668",id:"224-\u542f\u52a8\u6d4f\u89c8\u5668",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.admonition,{title:"\u5c3d\u5feb\u5347\u7ea7",type:"caution",children:(0,t.jsxs)(e.p,{children:["\u622a\u81f3 ",(0,t.jsx)(e.strong,{children:"2022 \u5e74 05 \u6708 31 \u65e5"}),"\uff0c\u5fae\u8f6f\u5df2\u7ecf\u505c\u6b62\u4e86 ",(0,t.jsx)(e.code,{children:".NET5"})," \u7684\u6280\u672f\u652f\u6301\uff0c\u6240\u4ee5\u8bf7\u5c3d\u5feb\u5347\u7ea7\u5230 ",(0,t.jsx)(e.code,{children:".NET6"})," \u7248\u672c\uff0c\u8be6\u7ec6\u5347\u7ea7\u53ef\u67e5\u9605 \u3010",(0,t.jsx)(e.a,{href:"/Furion-Documentation/docs/net5-to-net6",children:".NET5 \u5347\u7ea7 .NET6"}),"\u3011"]})}),"\n",(0,t.jsxs)(e.admonition,{title:"\u63a8\u8350\u4f7f\u7528\u811a\u624b\u67b6",type:"tip",children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Furion"})," \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002"]}),(0,t.jsxs)(e.p,{children:["\u63a8\u8350\u4f7f\u7528 \u300a",(0,t.jsx)(e.a,{href:"/Furion-Documentation/docs/template",children:"2.6 \u5b98\u65b9\u811a\u624b\u67b6"}),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002"]})]}),"\n","\n","\n",(0,t.jsx)(e.admonition,{title:"\u5165\u95e8\u6761\u4ef6",type:"note",children:(0,t.jsxs)(e.p,{children:["\u5bf9 ",(0,t.jsx)(e.code,{children:".NET Core/ASP.NET Core"})," \u6709\u4e00\u5b9a\u57fa\u7840\u4e86\u89e3\uff0c\u8fd8\u672a\u63a5\u89e6\u7684\u53ef\u5148\u770b ",(0,t.jsx)(e.a,{href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/?view=aspnetcore-5.0&tabs=windows",children:"\u3010ASP.NET Core \u57fa\u7840\u3011"})]})}),"\n",(0,t.jsxs)(e.h2,{id:"221-\u521b\u5efa-web-\u9879\u76ee",children:["2.2.1 \u521b\u5efa ",(0,t.jsx)(e.code,{children:"Web"})," \u9879\u76ee"]}),"\n",(0,t.jsx)(e.admonition,{title:"\u73af\u5883\u8981\u6c42",type:"note",children:(0,t.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"Furion"})," \u4e4b\u524d\u5148\u786e\u4fdd\u5b89\u88c5\u4e86\u6700\u65b0\u7684 ",(0,t.jsx)(e.code,{children:".NET 5 SDK"})," \u5e76\u5347\u7ea7 ",(0,t.jsx)(e.code,{children:"Visual Studio 2019"})," \u81f3\u6700\u65b0\u7248\u3002"]})}),"\n",(0,t.jsxs)(e.h3,{id:"2211-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f",children:["2.2.1.1 \u521b\u5efa ",(0,t.jsx)(e.code,{children:"ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f"})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u6253\u5f00 ",(0,t.jsx)(e.code,{children:"Visual Studio 2019"})," \u5e76\u521b\u5efa ",(0,t.jsx)(e.code,{children:"Web"})," \u9879\u76ee"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Z)("img/rm1.png")}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u914d\u7f6e\u9879\u76ee\u540d\u79f0"}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Z)("img/rm2.png")}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u9009\u62e9 ",(0,t.jsx)(e.code,{children:"WebAPI"})," \u9879\u76ee"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Z)("img/rm3.png")}),"\n",(0,t.jsx)(e.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"warning",children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Furion"})," \u5df2\u7ecf\u5185\u7f6e\u4e86 ",(0,t.jsx)(e.code,{children:"Swagger"})," \u89c4\u8303\u5316\u5e93\uff0c\u6240\u4ee5\u521b\u5efa\u65f6",(0,t.jsx)(e.strong,{children:"\u65e0\u9700\u52fe\u9009"})," ",(0,t.jsx)(e.code,{children:"Enable OpenAPI support"})," \u9009\u9879\u3002\u5426\u5219\u63d0\u793a\u7248\u672c\u4e0d\u4e00\u81f4\u4ea7\u751f\u51b2\u7a81\u3002"]})}),"\n",(0,t.jsxs)(e.h2,{id:"222-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305",children:["2.2.2 \u6dfb\u52a0 ",(0,t.jsx)(e.code,{children:"Furion"})," \u4f9d\u8d56\u5305"]}),"\n",(0,t.jsx)("img",{src:(0,o.Z)("img/rm4.png")}),"\n",(0,t.jsxs)(e.h2,{id:"223-furion-\u57fa\u672c\u914d\u7f6e",children:["2.2.3 ",(0,t.jsx)(e.code,{children:"Furion"})," \u57fa\u672c\u914d\u7f6e"]}),"\n",(0,t.jsxs)(e.h3,{id:"2231-programcs-\u6dfb\u52a0-inject",children:["2.2.3.1 ",(0,t.jsx)(e.code,{children:"Program.cs"})," \u6dfb\u52a0 ",(0,t.jsx)(e.code,{children:"Inject()"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cs",metastring:"showLineNumbers  {18}",children:"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionStart\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder\n                    .Inject()   // \u6dfb\u52a0\u8fd9\u4e00\u884c\n                    .UseStartup<Startup>();\n                });\n    }\n}\n"})}),"\n",(0,t.jsxs)(e.h3,{id:"2232-\u5728-startupcs-\u4e2d\u6dfb\u52a0\u4e24\u4e2a-inject",children:["2.2.3.2 \u5728 ",(0,t.jsx)(e.code,{children:"Startup.cs"})," \u4e2d\u6dfb\u52a0\u4e24\u4e2a ",(0,t.jsx)(e.code,{children:"Inject()"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cs",metastring:"showLineNumbers  {20,37}",children:"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionStart\n{\n    public class Startup\n    {\n        public Startup(IConfiguration configuration)\n        {\n            Configuration = configuration;\n        }\n\n        public IConfiguration Configuration { get; }\n\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddControllers().AddInject();  // \u6dfb\u52a0 AddInject();\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            if (env.IsDevelopment())\n            {\n                app.UseDeveloperExceptionPage();\n            }\n\n            app.UseHttpsRedirection();\n\n            app.UseRouting();\n\n            app.UseAuthorization();\n\n            // \u6dfb\u52a0\u8fd9\u4e00\u884c\uff0c\u5982\u679c\u662f MVC\u548cAPI\u5171\u5b58\u9879\u76ee\uff0c\u65e0\u9700\u6dfb\u52a0 string.Empty\n            app.UseInject(string.Empty);\n\n            app.UseEndpoints(endpoints =>\n            {\n                endpoints.MapControllers();\n            });\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(e.admonition,{title:"\u5c0f\u63d0\u9192",type:"important",children:(0,t.jsxs)(e.p,{children:["\u5982\u679c ",(0,t.jsx)(e.code,{children:"app.UseInject()"})," \u4e0d\u8f93\u5165\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u5730\u5740\u4e3a ",(0,t.jsx)(e.code,{children:"/api"}),"\uff0c\u5982\u679c\u8f93\u5165 ",(0,t.jsx)(e.code,{children:"string.Empty"})," \u5219\u4e3a ",(0,t.jsx)(e.code,{children:"/"})," \u76ee\u5f55\u3002\u5982\u679c\u8f93\u5165\u4efb\u610f\u5b57\u7b26\u4e32\uff0c\u5219\u4e3a ",(0,t.jsx)(e.code,{children:"/\u4efb\u610f\u5b57\u7b26\u4e32"})," \u76ee\u5f55\u3002"]})}),"\n",(0,t.jsx)(e.h2,{id:"224-\u542f\u52a8\u6d4f\u89c8\u5668",children:"2.2.4 \u542f\u52a8\u6d4f\u89c8\u5668"}),"\n",(0,t.jsx)(e.p,{children:"\u542f\u52a8\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c\u3002"}),"\n",(0,t.jsx)("img",{src:(0,o.Z)("img/rm5.png")}),"\n",(0,t.jsxs)(e.admonition,{title:"\u5c0f\u77e5\u8bc6",type:"note",children:[(0,t.jsxs)(e.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"Visual Studio 2019"})," \u521b\u5efa\u7684\u9879\u76ee\u4f1a\u81ea\u52a8\u914d\u7f6e\u4e86\u542f\u52a8\u9875\uff0c\u5982\u679c\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"F5"})," \u8fd0\u884c\uff0c\u53ef\u80fd\u4e0d\u4f1a\u81ea\u52a8\u6253\u5f00\u9996\u9875\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e ",(0,t.jsx)(e.code,{children:"launchSettings.json"})," \u7684 ",(0,t.jsx)(e.code,{children:"launchUrl"})," \u5373\u53ef\uff1a"]}),(0,t.jsx)("img",{src:(0,o.Z)("img/rm6.png")})]})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);