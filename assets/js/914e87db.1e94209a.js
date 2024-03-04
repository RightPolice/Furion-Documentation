"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[988],{1898:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=c(5893),t=c(1151),l=c(510);const o={id:"scoped",title:"11. Scoped \u9759\u6001\u7c7b",sidebar_label:"11. Scoped \u9759\u6001\u7c7b"},i=void 0,r={id:"global/scoped",title:"11. Scoped \u9759\u6001\u7c7b",description:"\ud83d\udcdd \u6a21\u5757\u66f4\u65b0\u65e5\u5fd7",source:"@site/docs/global/scoped.mdx",sourceDirName:"global",slug:"/global/scoped",permalink:"/Furion-Documentation/docs/global/scoped",draft:!1,unlisted:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/global/scoped.mdx",tags:[],version:"current",lastUpdatedBy:"RightPolice",lastUpdatedAt:1199145600,formattedLastUpdatedAt:"Jan 1, 2008",frontMatter:{id:"scoped",title:"11. Scoped \u9759\u6001\u7c7b",sidebar_label:"11. Scoped \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"10. JSON \u9759\u6001\u7c7b",permalink:"/Furion-Documentation/docs/global/json"},next:{title:"12. SpareTime \u9759\u6001\u7c7b",permalink:"/Furion-Documentation/docs/global/sparetime"}},a={},d=[{value:"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",id:"111-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",level:2},{value:"11.2 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df",id:"112-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df",level:2},{value:"11.3 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\uff08\u5e26\u8fd4\u56de\u503c\uff09",id:"113-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\u5e26\u8fd4\u56de\u503c",level:2},{value:"11.4 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\uff08\u5e26\u8fd4\u56de\u503c\uff09",id:"114-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\u5e26\u8fd4\u56de\u503c",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:c}=s;return c||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c,{children:[(0,n.jsx)("summary",{children:"\ud83d\udcdd \u6a21\u5757\u66f4\u65b0\u65e5\u5fd7"}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u95ee\u9898\u4fee\u590d"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\xa0",(0,n.jsx)(l.Z,{children:"\u4fee\u590d"})," ",(0,n.jsx)(s.code,{children:"Scoped.CreateUowAsync"})," \u4f5c\u7528\u57df\u5de5\u4f5c\u5355\u5143\u5f02\u5e38\u65e0\u6cd5\u56de\u6eda\u95ee\u9898 ",(0,n.jsx)("sup",{children:"4.8.8.44"})," ",(0,n.jsx)("sup",{children:"\u23f1\ufe0f2023.09.23"})," ",(0,n.jsx)(s.a,{href:"https://gitee.com/dotnetchina/Furion/issues/I833I9",children:"#I833I9"})]}),"\n"]}),"\n"]}),"\n"]})})})]}),"\n",(0,n.jsx)(s.h2,{id:"111-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4",children:"11.1 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u540c\u6b65\nScoped.Create((factory, scope) => {\n     var services = scope.ServiceProvider;\n});\n\n// \u5f02\u6b65\nawait Scoped.CreateAsync(async (factory, scope) => {\n     var services = scope.ServiceProvider;\n     await _calcService.GetAsync();\n     // ...\n})\n"})}),"\n",(0,n.jsx)(s.admonition,{title:"\u6570\u636e\u5e93\u64cd\u4f5c\u6ce8\u610f",type:"important",children:(0,n.jsxs)(s.p,{children:["\u5982\u679c\u4f5c\u7528\u57df\u4e2d\u5bf9",(0,n.jsx)(s.strong,{children:"\u6570\u636e\u5e93\u6709\u4efb\u4f55\u53d8\u66f4\u64cd\u4f5c"}),"\uff0c\u9700\u624b\u52a8\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"SaveChanges"})," \u6216\u5e26 ",(0,n.jsx)(s.code,{children:"Now"})," \u7ed3\u5c3e\u7684\u65b9\u6cd5\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"Scoped.CreateUow(handler)"})," \u4ee3\u66ff\u3002"]})}),"\n",(0,n.jsx)(s.h2,{id:"112-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df",children:"11.2 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",metastring:"showLineNumbers",children:"// \u540c\u6b65\nScoped.CreateUow((factory, scope) => {\n     var services = scope.ServiceProvider;\n});\n\n// \u5f02\u6b65\nawait Scope.CreateUowAsync(async (factory, scope) => {\n     var services = scope.ServiceProvider;\n     await _calcService.GetAsync();\n     // ...\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u6b64\u65b9\u6cd5\u5c06\u5728\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\u81ea\u52a8\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"SaveChanges()"})]}),"\n",(0,n.jsx)(s.h2,{id:"113-\u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\u5e26\u8fd4\u56de\u503c",children:"11.3 \u521b\u5efa\u4e00\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4f5c\u7528\u57df\u8303\u56f4\uff08\u5e26\u8fd4\u56de\u503c\uff09"}),"\n",(0,n.jsx)(s.admonition,{title:"\u79fb\u9664\u58f0\u660e",type:"warning",children:(0,n.jsxs)(s.p,{children:["\u5728 ",(0,n.jsx)(s.code,{children:"Furion v2.18+"})," \u7248\u672c\u79fb\u9664\u5e26\u8fd4\u56de\u503c\u7684\u4f5c\u7528\u57df\uff08\u8be5\u65b9\u6cd5\u5c5e\u4e8e\u591a\u4f59\u64cd\u4f5c\uff09"]})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",metastring:"showLineNumbers  {1}",children:'var obj = Scoped.CreateRef<string>((factory, scope) => {\n     var services = scope.ServiceProvider;\n     return "\u8fd4\u56de\u503c";\n});\n'})}),"\n",(0,n.jsx)(s.h2,{id:"114-\u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\u5e26\u8fd4\u56de\u503c",children:"11.4 \u521b\u5efa\u4e00\u4e2a\u5e26\u5de5\u4f5c\u5355\u5143\u7684\u4f5c\u7528\u57df\uff08\u5e26\u8fd4\u56de\u503c\uff09"}),"\n",(0,n.jsx)(s.admonition,{title:"\u79fb\u9664\u58f0\u660e",type:"warning",children:(0,n.jsxs)(s.p,{children:["\u5728 ",(0,n.jsx)(s.code,{children:"Furion v2.18+"})," \u7248\u672c\u79fb\u9664\u5e26\u8fd4\u56de\u503c\u7684\u4f5c\u7528\u57df\uff08\u8be5\u65b9\u6cd5\u5c5e\u4e8e\u591a\u4f59\u64cd\u4f5c\uff09"]})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",metastring:"showLineNumbers",children:'var obj = Scoped.CreateUowRef<string>((factory, scope) => {\n     var services = scope.ServiceProvider;\n     return "\u8fd4\u56de\u503c";\n});\n'})})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},510:(e,s,c)=>{c.d(s,{Z:()=>G});c(7294);const n=(e,s,c)=>e?"string"==typeof e?e:e[s]||c:c;var t=c(5893);const l={display:"block"},o=e=>{let{size:s,color:c,style:o,...i}=e;const r=o?{...l,...o}:l;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:r,...i,children:(0,t.jsx)("path",{d:"M856.4 292.8c-63.3-63.6-126.6-127.1-190.2-190.3-15.3-15.2-32.7-16.1-48.1-0.8-64.3 63.6-128.1 127.6-191.8 191.9-14 14.2-16.3 31.6-1.7 46 14.8 14.7 31.5 10.6 46.1-2.7 5.1-4.6 9.8-9.7 14.7-14.7 39.2-39.7 78.5-79.5 122.8-124.4 0 170 3 332.2-1.1 494-2.4 96.4-91.2 174.6-187.4 176.6-110.6 2.3-198.6-84.4-199-197.4-0.6-136.3-0.2-272.6-0.1-408.9 0-21.8-7.9-37.4-31.2-39.9-18.9-2-33.2 13.2-33.1 37.5 0 145.8-3.4 291.7 2.4 437.2 6 152.1 160.4 263.5 309.5 230.5C591.8 900 672.8 797.2 673.6 664.6c0.8-144 0.2-288.1 0.2-432.1v-33.3c11.2 10.2 17.6 15.4 23.3 21.3 38.5 38.4 76.7 77 115.3 115.2 14.8 14.6 32.2 19.2 47.8 2.9 13.8-14.8 10.3-31.7-3.8-45.8z",fill:n(c,0,"#333333")})})};o.defaultProps={size:18};const i=o,r={display:"block"},a=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{...r,...l}:r;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:i,...o,children:[(0,t.jsx)("path",{d:"M143.872 768a51.2 51.2 0 0 1-15.36-2.56 51.2 51.2 0 0 1-35.328-51.2V283.136a148.992 148.992 0 0 1 141.824-153.6h450.56a148.992 148.992 0 0 1 141.824 153.6V512a148.992 148.992 0 0 1-141.824 153.6H244.224l-60.928 80.896a51.2 51.2 0 0 1-39.424 21.504zM235.008 180.224a97.792 97.792 0 0 0-90.624 102.4v430.592L218.624 614.4h466.944a97.792 97.792 0 0 0 90.624-102.4V283.136a97.792 97.792 0 0 0-90.624-102.4z",fill:n(c,0,"#333333")}),(0,t.jsx)("path",{d:"M880.128 875.52a51.2 51.2 0 0 1-39.424-20.48l-60.928-80.896h-243.2a25.6 25.6 0 0 1 0-51.2h268.8l76.288 102.4v-295.936a25.6 25.6 0 0 1 25.6-25.6 25.6 25.6 0 0 1 25.6 25.6v293.888a51.2 51.2 0 0 1-51.2 51.2z",fill:n(c,1,"#333333")})]})};a.defaultProps={size:18};const d=a,h={display:"block"},p=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{...h,...l}:h;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:i,...o,children:[(0,t.jsx)("path",{d:"M223.425605 449.2744l161.632237 0 0 253.65714c0 16.954137 13.745049 30.699186 30.699186 30.699186 16.95516 0 30.699186-13.745049 30.699186-30.699186l0-284.356326c0-16.95516-13.744026-30.699186-30.699186-30.699186L291.035446 387.876028l217.23665-248.51605L733.039255 387.580293 607.104031 387.580293c-16.954137 0-30.699186 13.745049-30.699186 30.699186l0 284.652062c0 16.954137 13.745049 30.699186 30.699186 30.699186s30.699186-13.745049 30.699186-30.699186L637.803217 448.978664l164.448376 0c12.140505 0 23.140023-7.154957 28.063149-18.251689 4.922103-11.097756 2.841721-24.053835-5.307889-33.05279L530.62315 72.570829c-5.881964-6.495948-14.273075-10.134825-23.024389-10.091846-8.763594 0.076748-17.076934 3.895727-22.844288 10.494005L200.312188 398.371056c-7.92653 9.067516-9.818623 21.931498-4.839215 32.896224S211.383338 449.2744 223.425605 449.2744z",fill:n(c,0,"#333333")}),(0,t.jsx)("path",{d:"M222.354204 829.113381l581.732178 0c16.954137 0 30.699186-13.745049 30.699186-30.699186s-13.745049-30.699186-30.699186-30.699186L222.354204 767.715009c-16.954137 0-30.699186 13.745049-30.699186 30.699186S205.400067 829.113381 222.354204 829.113381z",fill:n(c,1,"#333333")}),(0,t.jsx)("path",{d:"M804.086381 896.729361 222.354204 896.729361c-16.954137 0-30.699186 13.745049-30.699186 30.699186s13.745049 30.699186 30.699186 30.699186l581.732178 0c16.954137 0 30.699186-13.745049 30.699186-30.699186S821.041542 896.729361 804.086381 896.729361z",fill:n(c,2,"#333333")})]})};p.defaultProps={size:18};const x=p,u={display:"block"},v=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{...u,...l}:u;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:i,...o,children:(0,t.jsx)("path",{d:"M380.15463648 874.54223633c0 18.12744166-14.83154297 32.95898463-32.95898463 32.95898463s-32.95898463-14.83154297-32.95898462-32.95898463V228.9152832L172.71078883 370.86962865a33.04467773 33.04467773 0 0 1-46.60400416 0 33.04467773 33.04467773 0 0 1 0-46.6040034l197.55615234-198.14941406A32.76782227 32.76782227 0 0 1 347.0967749 116.52514674c0.03295924 0 0.06591772-0.03295924 0.09887695-0.03295924 1.54907201 0 2.90039088 0.69213867 4.41650366 0.88989258 2.66967773 0.39550781 5.40527318 0.59326172 7.94311548 1.61499049 12.03002904 4.94384766 20.59936549 16.71020508 20.59936549 30.45410156v725.0910642z m320.15698192 23.34155248a32.85351537 32.85351537 0 0 1-23.43383789 9.59106445c-0.03295924 0-0.06591772 0.03295924-0.09887696 0.03295924-1.54907201 0-2.90039088-0.69213867-4.41650365-0.92285182-2.70263697-0.36254857-5.40527318-0.56030248-7.94311549-1.61498972-12.03002904-4.91088842-20.59936549-16.67724584-20.59936473-30.42114309V149.45776367c0-18.12744166 14.83154297-32.95898463 32.95898387-32.95898463s32.95898463 14.83154297 32.95898463 32.95898463v645.60058619l141.52587916-141.92138697c12.81445313-12.82104467 33.81591797-12.82104467 46.63037109 0 12.78808619 12.81445313 12.78808619 33.77636719 0 46.60400416L700.3116184 897.88378881z",fill:n(c,0,"#333333")})})};v.defaultProps={size:18};const j=v,g={display:"block"},f=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{...g,...l}:g;return(0,t.jsx)("svg",{viewBox:"0 0 1172 1024",width:s+"px",height:s+"px",style:i,...o,children:(0,t.jsx)("path",{d:"M870.0416 250.4704a38.4 38.4 0 0 0-8.96 53.5552c13.056 18.2784 24.4224 37.8368 33.7408 58.112a38.4512 38.4512 0 0 0 50.944 18.8928 38.4512 38.4512 0 0 0 18.8416-50.944 436.0192 436.0192 0 0 0-40.96-70.6048 38.3488 38.3488 0 0 0-53.6064-9.0112zM181.4528 566.016a35.9936 35.9936 0 0 0 25.5488-10.5984L351.7952 410.624a36.096 36.096 0 1 0-51.0976-51.0976L217.6 442.5728C250.0096 278.1184 395.264 153.6 569.1392 153.6c50.7904 0 99.8912 10.3936 145.92 30.9248a38.4 38.4 0 1 0 31.232-70.0928 431.36 431.36 0 0 0-177.152-37.632c-214.6816 0-393.1136 156.416-428.4416 361.216L62.1568 359.4752a36.1984 36.1984 0 0 0-51.0976 51.0976l144.8448 144.7936a36.0448 36.0448 0 0 0 25.5488 10.6496zM978.5344 463.104a36.1984 36.1984 0 0 0-51.0976 0l-144.8448 144.7936a36.096 36.096 0 1 0 51.0976 51.0976l88.6272-88.576C894.3104 740.2496 746.8032 870.4 569.1392 870.4a357.7856 357.7856 0 0 1-325.2736-207.7184 38.4 38.4 0 1 0-69.7344 32.3072 434.3808 434.3808 0 0 0 394.9568 252.2112c215.1936 0 393.984-157.184 428.6464-362.7008l74.496 74.496a35.9936 35.9936 0 0 0 51.0976 0 36.096 36.096 0 0 0 0-51.0976l-144.7936-144.7936z",fill:n(c,0,"#333333")})})};f.defaultProps={size:18};const y=f,b={display:"block"},z=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{...b,...l}:b;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:i,...o,children:[(0,t.jsx)("path",{d:"M302 332a30 30 0 1 1 0-60h420a30 30 0 0 1 0 60H302zM302 542a30 30 0 0 1 0-60h420a30 30 0 0 1 0 60H302zM302 752a30 30 0 0 1 0-60h120a30 30 0 0 1 0 60H302z",fill:n(c,0,"#333333")}),(0,t.jsx)("path",{d:"M789.47 784.1a30 30 0 0 1 39.36 45.3l-144.24 125.25a30 30 0 0 1-19.68 7.35H214.85C163.4 962 122 919.46 122 867.38V156.62C122 104.54 163.4 62 214.85 62h594.3C860.6 62 902 104.54 902 156.62v529.05a30 30 0 1 1-60 0V156.62C842 137.3 827.09 122 809.15 122H214.85C196.91 122 182 137.3 182 156.62v710.76C182 886.7 196.91 902 214.85 902h438.84l135.78-117.9z",fill:n(c,1,"#333333")}),(0,t.jsx)("path",{d:"M692 931.19a30 30 0 1 1-60 0v-174.6C632 704.57 673.4 662 724.85 662h147.78a30 30 0 0 1 0 60h-147.78c-17.94 0-32.85 15.3-32.85 34.62v174.6z",fill:n(c,2,"#333333")})]})};z.defaultProps={size:18};const m=z,w={display:"block"},C=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{...w,...l}:w;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:i,...o,children:[(0,t.jsx)("path",{d:"M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z",fill:n(c,0,"#333333")}),(0,t.jsx)("path",{d:"M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z",fill:n(c,1,"#333333")})]})};C.defaultProps={size:18};const M=C,S={display:"block"},k=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{...S,...l}:S;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:i,...o,children:[(0,t.jsx)("path",{d:"M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 34.8-28.2 63-63 63H232c-34.8 0-63-28.2-63-63 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5 0.2 13 0.7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7 6 17.2 13.6 33.6 22.7 49 24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2c41.5-24.3 76.2-59 100.5-100.5 9.1-15.5 16.7-31.9 22.7-49C812.1 793.1 836 831.8 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7 0.4-6.4 0.7-12.8 0.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3-20.1 11.8-42 20-64.9 24.3V484c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v396.5c-22.9-4.3-44.8-12.5-64.9-24.3-30.3-17.7-55.6-43-73.3-73.3C317.7 752 308 716.8 308 680V412h408v268z",fill:n(c,0,"#333333")}),(0,t.jsx)("path",{d:"M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1-17.2-31.5-42.5-56.8-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9-31.5 17.2-56.8 42.5-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z",fill:n(c,1,"#333333")})]})};k.defaultProps={size:18};const L=k,P={display:"block"},B=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{...P,...l}:P;return(0,t.jsxs)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:i,...o,children:[(0,t.jsx)("path",{d:"M512 71.68c-242.688 0-440.32 197.632-440.32 440.32s197.632 440.32 440.32 440.32 440.32-197.632 440.32-440.32-197.632-440.32-440.32-440.32z m0 819.2c-208.896 0-378.88-169.984-378.88-378.88s169.984-378.88 378.88-378.88 378.88 169.984 378.88 378.88-169.984 378.88-378.88 378.88z",fill:n(c,0,"#333333")}),(0,t.jsx)("path",{d:"M542.72 261.12H481.28v220.16H261.12v61.44h220.16v220.16h61.44v-220.16h220.16V481.28h-220.16z",fill:n(c,1,"#333333")})]})};B.defaultProps={size:18};const N=B,H={display:"block"},V=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{...H,...l}:H;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:i,...o,children:(0,t.jsx)("path",{d:"M384 896h-64v-70.4c0-15.2-10.4-28-24.8-31.2C159.2 768 64 644.8 64 496v-32h64v32c0 118.4 73.6 215.2 179.2 236 44.8 8.8 76.8 48 76.8 94.4v69.6zM704 896h-64v-70.4c0-45.6 32-85.6 76.8-94.4C822.4 711.2 896 614.4 896 496v-32h64v32c0 148.8-95.2 272-231.2 298.4-14.4 3.2-24.8 16-24.8 31.2v70.4zM512.8 640l-41.6-37.6c-147.2-133.6-244-208-244-316.8 0-88 68.8-156.8 156.8-156.8 49.6 0 97.6 23.2 128.8 60C544 152 592 128.8 641.6 128.8c88 0 156.8 68.8 156.8 156.8 0 108-96.8 183.2-244 316.8L512.8 640z",fill:n(c,0,"#333333")})})};V.defaultProps={size:18};const A=V,U={display:"block"},F=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{...U,...l}:U;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:i,...o,children:(0,t.jsx)("path",{d:"M942.4615936 284.62787926c-14.30911886-14.12709945-37.31996786-14.05468217-51.48229632 0.21920654L517.97142983 661.27810333 139.75544149 286.45003606c-14.30911886-14.16232846-37.31996786-14.05468217-51.51948344 0.21920654-14.16232846 14.30911886-14.05468217 37.35519687 0.21920654 51.51948345l401.99014627 398.34974663c0.61847666 0.61847666 1.41897273 0.76526706 2.03940637 1.34655658 0.14483342 0.14483342 0.18201941 0.32685283 0.32685283 0.47364324 7.09877874 7.02636259 16.38375538 10.55911595 25.63154489 10.55911595 9.35739278 0 18.75001458-3.60516949 25.85075143-10.77636551l398.34974663-401.99014628C956.84312974 321.8382427 956.73548345 298.7921647 942.4615936 284.62787926z",fill:n(c,0,"#333333")})})};F.defaultProps={size:18};const D=F,_={display:"block"},I=e=>{let{size:s,color:c,style:l,...o}=e;const i=l?{..._,...l}:_;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",width:s+"px",height:s+"px",style:i,...o,children:(0,t.jsx)("path",{d:"M81.5384064 739.37212074c14.30911886 14.12709945 37.31996786 14.05468217 51.48229632-0.21920654L506.02857017 362.72189667 884.24455851 737.54996394c14.30911886 14.16232846 37.31996786 14.05468217 51.51948344-0.21920654 14.16232846-14.30911886 14.05468217-37.35519687-0.21920654-51.51948345l-401.99014627-398.34974663c-0.61847666-0.61847666-1.41897273-0.76526706-2.03940637-1.34655658-0.14483342-0.14483342-0.18201941-0.32685283-0.32685282-0.47364324-7.09877874-7.02636259-16.38375538-10.55911595-25.6315449-10.55911595-9.35739278 0-18.75001458 3.60516949-25.85075143 10.77636551l-398.34974663 401.99014628C67.15687026 702.1617573 67.26451655 725.2078353 81.5384064 739.37212074z",fill:n(c,0,"#333333")})})};I.defaultProps={size:18};const E=I,R=e=>{let{name:s,...c}=e;switch(s){case"youhua":return(0,t.jsx)(i,{...c});case"dayi":return(0,t.jsx)(d,{...c});case"shengji":return(0,t.jsx)(x,{...c});case"tiaozheng":return(0,t.jsx)(j,{...c});case"gengxin":return(0,t.jsx)(y,{...c});case"wendang":return(0,t.jsx)(m,{...c});case"shanchu":return(0,t.jsx)(M,{...c});case"bug":return(0,t.jsx)(L,{...c});case"xinzeng":return(0,t.jsx)(N,{...c});case"fuwu":return(0,t.jsx)(A,{...c});case"down":return(0,t.jsx)(D,{...c});case"up":return(0,t.jsx)(E,{...c})}return null},Z={label:"label_p8vM",icon:"icon_knQK"};function G(e){const{children:s}=e,c={"\u65b0\u589e":{icon:"xinzeng",bgColor:"#39b54a"},"\u4fee\u590d":{icon:"bug",bgColor:"#9c26b0"},"\u6587\u6863":{icon:"wendang",bgColor:"rgb(79, 147, 255)"},"\u66f4\u65b0":{icon:"gengxin",bgColor:"#0081ff"},"\u8c03\u6574":{icon:"tiaozheng",bgColor:"#333"},"\u5347\u7ea7":{icon:"shengji",bgColor:"#e03997"},"\u79fb\u9664":{icon:"shanchu",bgColor:"#666"},"\u7b54\u7591":{icon:"dayi",bgColor:"#bbb"},"\u4f18\u5316":{icon:"youhua",bgColor:"#38e550"}};return(0,t.jsxs)("label",{className:Z.label,title:s,style:{backgroundColor:c[s].bgColor},children:[(0,t.jsx)(R,{name:c[s].icon,color:"white",size:14,className:Z.icon})," ",s]})}},1151:(e,s,c)=>{c.d(s,{Z:()=>i,a:()=>o});var n=c(7294);const t={},l=n.createContext(t);function o(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);