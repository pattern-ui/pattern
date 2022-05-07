"use strict";(self.webpackChunkpattern_docs=self.webpackChunkpattern_docs||[]).push([[733],{73702:function(e,t,a){a.d(t,{$:function(){return y}});var r=a(27378),c=a(81823),n=a(23238),i=a(8666),l=a(65392),o=a(50393),s=a(25444),m=a(77526),p=(0,m.k)((function(e){return{wrapper:{"& + &":{marginLeft:60},"@media (max-width: 1000px)":{"& + &":{marginLeft:40}}},link:{display:"block",color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[6],fontSize:e.fontSizes.sm,paddingTop:3,paddingBottom:3,"&:hover":{textDecoration:"underline"}},title:{fontSize:e.fontSizes.lg,fontWeight:700,fontFamily:"Greycliff CF, "+e.fontFamily,marginBottom:e.spacing.xs/2,color:"dark"===e.colorScheme?e.white:e.black}}}));function d(e){var t=e.data,a=e.title,c=p().classes,i=t.map((function(e,t){var a="gatsby"===e.type?{to:e.link}:{href:e.link};return r.createElement(n.x,Object.assign({className:c.link,component:"gatsby"===e.type?s.Link:"a"},a,{key:t}),e.label)}));return r.createElement("div",{className:c.wrapper},r.createElement(n.x,{className:c.title},a),i)}var h=[{title:"About",data:[{type:"gatsby",label:"Contribute",link:"/pages/contributing/"},{type:"gatsby",label:"Media assets",link:"/assets/"},{type:"gatsby",label:"Changelog",link:"/pages/changelog/"},{type:"link",label:"Releases",link:"https://github.com/pattern-ui/pattern/releases"}]},{title:"Community",data:[{type:"link",label:"Chat on Discord",link:"https://discord.gg/eUZpPbpxb4"},{type:"link",label:"Follow on Twitter",link:"https://twitter.com/pattern-ui"},{type:"link",label:"Follow on Github",link:"https://github.com/lokielse"},{type:"link",label:"GitHub discussions",link:"https://github.com/pattern-ui/pattern/discussions"}]},{title:"Project",data:[{type:"link",label:"Pattern UI",link:"https://ui.pattern-ui.design/"},{type:"link",label:"Documentation",link:"https://pattern-ui.design/"},{type:"link",label:"Github organization",link:"https://github.com/pattern-ui"},{type:"link",label:"npm organization",link:"https://www.npmjs.com/org/pattern"}]}],g=a(4942),u=a(69756),f=a(91116);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,g.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=(0,m.k)((function(e){var t;return{spacer:{height:400,"@media (max-width: 800px)":{height:460},"@media (max-width: 640px)":{height:320}},wrapper:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],position:"fixed",bottom:0,left:0,right:0,height:400,"@media (max-width: 800px)":{height:460},"@media (max-width: 640px)":{height:320}},withNavbar:(t={paddingLeft:u.aO+2*e.spacing.md,paddingRight:2*e.spacing.md},t["@media (max-width: "+f.Bs+"px)"]={paddingLeft:u.aO+e.spacing.md,paddingRight:e.spacing.md},t["@media (max-width: "+u.jO+"px)"]={paddingLeft:e.spacing.md,paddingRight:e.spacing.md},t),inner:{paddingTop:2*e.spacing.xl,paddingBottom:2*e.spacing.xl,display:"flex",justifyContent:"space-between","@media (max-width: 1000px)":{flexDirection:"column"},"@media (max-width: 640px)":{paddingBottom:e.spacing.md}},logoSection:{maxWidth:300,"@media (max-width: 1000px)":{marginBottom:e.spacing.xl},"@media (max-width: 640px)":{marginBottom:0}},description:{marginTop:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},title:{marginBottom:e.spacing.sm,lineHeight:1},afterFooter:{borderTop:"1px solid "+("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2]),paddingTop:e.spacing.md},afterFooterNote:{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],"& a":v(v({},e.fn.focusStyles()),{},{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]})},groups:{display:"flex","@media (max-width: 640px)":{display:"none"}},social:{display:"flex","@media (max-width: 640px)":{display:"block"}},socialButton:{"& + &":{marginLeft:e.spacing.md},"@media (max-width: 640px)":{flex:1,width:"100%","& + &":{marginLeft:0,marginTop:e.spacing.md}}}}}));function y(e){var t,a=e.withNavbar,s=w(),m=s.classes,p=s.cx,g=h.map((function(e){return r.createElement(d,{data:e.data,title:e.title,key:e.title})}));return r.createElement(r.Fragment,null,r.createElement("div",{className:m.spacer}),r.createElement("div",{className:p(m.wrapper,(t={},t[m.withNavbar]=a,t))},r.createElement(c.W,{size:1100},r.createElement("div",{className:m.inner},r.createElement("div",{className:m.logoSection},r.createElement(l.T,null),r.createElement(n.x,{className:m.description,size:"sm"},"Build fully functional accessible web applications faster than ever")),r.createElement("div",{className:m.groups},g)),r.createElement("div",{className:m.afterFooter},r.createElement(i.Z,{position:"apart"},r.createElement(n.x,{size:"xs",className:m.afterFooterNote},"Built by ",r.createElement("a",{href:"https://github.com/lokielse"},"lokielse")," and"," ",r.createElement("a",{href:"https://github.com/pattern-ui/pattern/graphs/contributors"},"these awesome people")),r.createElement("div",{className:m.social},r.createElement(o.Z,{service:"discord",className:m.socialButton}),r.createElement(o.Z,{service:"twitter",className:m.socialButton})))))))}},23025:function(e,t,a){a.d(t,{R:function(){return i}});var r=a(27378);var c=a(46645);var n=a(77785);var i=[{id:"next",title:"Next.js",icon:function(){var e=(0,c.CJ)();return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 309",style:{height:80}},r.createElement("path",{fill:"dark"===e.colorScheme?e.white:e.black,d:"M120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675H120.81V80.561zm105.22 0h10.26l45.467 63.423L328.23 80.56 391.441 0l-103.85 150.65 53.515 74.127h-10.663l-48.686-67.462-48.888 67.462h-10.461l53.917-74.128-50.296-70.088zm118.898 7.676V80.56h110.048v7.676h-50.699v136.54h-8.852V88.237h-50.497zM0 80.56h11.065l152.58 228.323-63.053-84.107L9.254 91.468l-.402 133.31H0V80.56zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212 0-1.81 1.356-3.212 3.165-3.212 1.83 0 3.165 1.401 3.165 3.212 0 1.811-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29 3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828 3.875 0 6.717-2.005 6.717-4.764 0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602 0-5.54 4.521-9.227 11.303-9.227 6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657-3.81 0-6.35 1.833-6.35 4.635 0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753 0 5.95-4.607 9.68-11.97 9.68-6.89 0-11.52-3.558-11.864-9.12z"}))}},{id:"gatsby",title:"Gatsby",icon:function(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 256 256",style:{width:80,height:80}},r.createElement("rect",{width:"250",height:"250",x:"3",y:"3",fill:"#fff",rx:"125"}),r.createElement("path",{fill:"#744C9E",d:"M128 0C57.308 0 0 57.307 0 128s57.308 128 128 128c70.693 0 128-57.307 128-128S198.693 0 128 0zM27.504 129.334l99.161 99.162c-54.45-.71-98.452-44.711-99.161-99.162zm122.992 96.649L30.016 105.504C40.234 60.824 80.223 27.487 128 27.487c33.397 0 62.985 16.293 81.263 41.36l-13.917 12.279C180.52 59.864 155.887 45.949 128 45.949c-35.505 0-65.74 22.552-77.169 54.113L155.94 205.169c25.525-9.243 45.156-30.79 51.731-57.477h-43.567V128h64.41c0 47.778-33.336 87.767-78.017 97.983z"}))}},{id:"cra",title:"Create React App",icon:function(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170.96 159.93",style:{display:"block",width:80,height:80}},r.createElement("path",{fill:"#09d3ac",d:"M141.35 73.27c0-6.89-8.11-13-20.58-16.73 3-12.67 1.69-22.75-4.28-26.16a9.55 9.55 0 00-4.79-1.2c-5.57 0-12.61 3.89-19.72 10.62-7.11-6.68-14.13-10.55-19.69-10.55a9.46 9.46 0 00-4.86 1.22c-5.94 3.42-7.17 13.44-4.21 26.05-12.41 3.71-20.48 9.77-20.5 16.63s8.12 13 20.59 16.72c-3 12.68-1.7 22.75 4.28 26.16a9.41 9.41 0 004.78 1.2c5.58 0 12.62-3.89 19.73-10.62 7.1 6.68 14.12 10.55 19.69 10.55a9.59 9.59 0 004.86-1.22c5.94-3.42 7.16-13.44 4.21-26 12.41-3.76 20.48-9.82 20.49-16.67zM96.56 42.06c8.19-7.33 13.31-8.12 15.13-8.12a4.71 4.71 0 012.42.58c2.86 1.63 4 7.38 3.09 15a56.73 56.73 0 01-1 5.79 97.7 97.7 0 00-12.58-2.07 98.47 98.47 0 00-8.24-10.08c.37-.37.77-.74 1.18-1.1zM71.77 78.94c.78 1.5 1.61 3 2.47 4.51S76 86.49 77 88c-2.71-.39-5.34-.88-7.84-1.46.7-2.54 1.59-5.04 2.61-7.6zM69 59.9a87.99 87.99 0 017.93-1.46c-1 1.48-1.86 3-2.76 4.59s-1.69 3-2.46 4.52q-1.53-3.9-2.71-7.65zm5.21 13.34q1.86-3.93 4.09-7.86c1.5-2.62 3.11-5.17 4.77-7.61 2.91-.22 5.91-.34 9-.33s6 .12 8.89.35c1.66 2.42 3.25 5 4.75 7.55s2.88 5.22 4.12 7.83c-1.23 2.62-2.6 5.25-4.08 7.85s-3.11 5.18-4.77 7.62c-2.91.23-5.91.34-9 .34s-6-.13-8.89-.36c-1.66-2.42-3.26-4.94-4.76-7.55s-2.83-5.22-4.08-7.83zm32.86-14.77c2.72.38 5.35.87 7.84 1.45-.74 2.47-1.62 5-2.64 7.55-.79-1.5-1.61-3-2.48-4.51s-1.79-3.03-2.68-4.49zm2.76 24.92q1.29-2.27 2.46-4.53c1 2.6 2 5.16 2.7 7.66a87.16 87.16 0 01-7.92 1.45q1.45-2.22 2.8-4.58zM92 46.56c1.8 1.92 3.57 4 5.3 6.23-1.71-.07-3.46-.12-5.23-.12s-3.58 0-5.33.12c1.71-2.22 3.46-4.31 5.26-6.23zm-22.18-12a4.82 4.82 0 012.47-.56 13.11 13.11 0 015.19 1.31 39.07 39.07 0 0110 6.78l1.17 1.07a98.49 98.49 0 00-8.16 10 98.88 98.88 0 00-12.65 2.06c-.44-1.94-.8-3.84-1-5.67C65.8 42 67 36.24 69.81 34.6zm-5.29 50.7a58.75 58.75 0 01-5.54-2c-7.1-3-11.5-6.85-11.5-10.14S51.91 66 59 63.05a57.63 57.63 0 015.44-1.94A97.93 97.93 0 0069 73.25a98.72 98.72 0 00-4.47 12.01zm23 19.1c-8.19 7.33-13.31 8.11-15.14 8.11a4.69 4.69 0 01-2.42-.58c-2.86-1.63-4-7.38-3.09-15a56.07 56.07 0 011-5.78 99.51 99.51 0 0012.58 2.06 97.17 97.17 0 008.24 10.08zm4.57-4.51c-1.8-1.92-3.57-4-5.31-6.23 1.72.08 3.47.12 5.24.12s3.58 0 5.33-.11a95.47 95.47 0 01-5.27 6.22zm22.18 12a4.82 4.82 0 01-2.48.59c-1.82 0-7-.8-15.16-8.1l-1.17-1.07a98.44 98.44 0 008.15-10 97 97 0 0012.66-2.06c.44 1.94.79 3.84 1 5.67.99 7.54-.16 13.3-3.01 14.93zm10.8-28.44c-1.71.7-3.52 1.35-5.44 1.93a98.54 98.54 0 00-4.57-12.14 98.1 98.1 0 004.49-12 58.75 58.75 0 015.54 2c7.09 3 11.5 6.85 11.49 10.14s-4.42 7.08-11.52 10.03zM92 82.39a9.18 9.18 0 10-9.17-9.19A9.17 9.17 0 0092 82.39zM31 17.88v110.65h122.07V17.88zm117.3 105.89H35.78V22.65H148.3zm-85-33.9c-3 12.68-1.7 22.75 4.28 26.16a9.41 9.41 0 004.78 1.2c5.58 0 12.62-3.89 19.73-10.62 7.1 6.68 14.12 10.55 19.69 10.55a9.59 9.59 0 004.86-1.22c5.94-3.42 7.16-13.44 4.21-26 12.41-3.72 20.48-9.78 20.49-16.63s-8.11-13-20.58-16.73c3-12.67 1.69-22.75-4.28-26.16a9.55 9.55 0 00-4.79-1.2c-5.57 0-12.61 3.89-19.72 10.62-7.11-6.68-14.13-10.55-19.69-10.55a9.46 9.46 0 00-4.86 1.22c-5.94 3.42-7.17 13.44-4.21 26.05-12.41 3.71-20.48 9.77-20.5 16.63s8.13 12.94 20.6 16.68zm24.21 14.49c-8.19 7.33-13.31 8.11-15.14 8.11a4.69 4.69 0 01-2.42-.58c-2.86-1.63-4-7.38-3.09-15a56.07 56.07 0 011-5.78 99.51 99.51 0 0012.58 2.06 97.17 97.17 0 008.24 10.08zm24.79-36.89c-.79-1.5-1.61-3-2.48-4.51s-1.8-3-2.72-4.49c2.72.38 5.35.87 7.84 1.45-.73 2.47-1.61 5-2.63 7.55zm2.72 19a87.16 87.16 0 01-7.92 1.45q1.41-2.22 2.76-4.58t2.46-4.53c1.05 2.65 1.96 5.19 2.68 7.71zm-5.21-13.35c-1.23 2.62-2.6 5.25-4.08 7.85s-3.11 5.18-4.77 7.62c-2.91.23-5.91.34-9 .34s-6-.13-8.89-.36c-1.66-2.42-3.26-4.94-4.76-7.55s-2.87-5.22-4.12-7.83q1.86-3.93 4.09-7.86c1.5-2.62 3.11-5.17 4.77-7.61 2.91-.22 5.91-.34 9-.33s6 .12 8.89.35c1.66 2.42 3.25 5 4.75 7.55s2.89 5.27 4.13 7.88zM77 88c-2.71-.39-5.34-.88-7.84-1.46.74-2.46 1.63-5 2.65-7.55.78 1.5 1.61 3 2.47 4.51S76 86.49 77 88zm-2.79-25c-.87 1.5-1.69 3-2.46 4.52Q70.18 63.65 69 59.9a87.99 87.99 0 017.93-1.46c-.93 1.48-1.82 3.01-2.72 4.56zm17.88 36.85c-1.8-1.92-3.57-4-5.31-6.23 1.72.08 3.47.12 5.24.12s3.58 0 5.33-.11c-1.72 2.22-3.48 4.3-5.26 6.22zm22.18 12a4.82 4.82 0 01-2.48.59c-1.82 0-7-.8-15.16-8.1l-1.17-1.07a98.44 98.44 0 008.15-10 97 97 0 0012.66-2.06c.44 1.94.79 3.84 1 5.67 1 7.54-.15 13.3-3 14.93zm5.28-50.66a58.75 58.75 0 015.54 2c7.09 3 11.5 6.85 11.49 10.14s-4.41 7.16-11.51 10.11c-1.71.7-3.52 1.35-5.44 1.93a98.54 98.54 0 00-4.57-12.14 98.1 98.1 0 004.49-12.08zm-23-19.09c8.19-7.33 13.31-8.12 15.13-8.12a4.71 4.71 0 012.42.58c2.86 1.63 4 7.38 3.09 15a56.73 56.73 0 01-1 5.79 97.7 97.7 0 00-12.58-2.07 98.47 98.47 0 00-8.24-10.08c.38-.41.78-.78 1.19-1.14zM92 46.56c1.8 1.92 3.57 4 5.3 6.23-1.71-.07-3.46-.12-5.23-.12s-3.58 0-5.33.12c1.71-2.22 3.46-4.31 5.26-6.23zm-22.18-12a4.82 4.82 0 012.47-.56 13.11 13.11 0 015.19 1.31 39.07 39.07 0 0110 6.78l1.17 1.07a98.49 98.49 0 00-8.16 10 98.88 98.88 0 00-12.65 2.06c-.44-1.94-.8-3.84-1-5.67C65.8 42 67 36.24 69.81 34.6zM59 63.05a57.63 57.63 0 015.44-1.94A97.93 97.93 0 0069 73.25a98.72 98.72 0 00-4.49 12 58.75 58.75 0 01-5.54-2c-7.1-3-11.5-6.85-11.5-10.14S51.91 66 59 63.05zm33 1a9.18 9.18 0 109.17 9.19A9.17 9.17 0 0092 64zm0 0a9.18 9.18 0 109.17 9.19A9.17 9.17 0 0092 64zm0 0a9.18 9.18 0 109.17 9.19A9.17 9.17 0 0092 64zm49.35 9.24c0-6.89-8.11-13-20.58-16.73 3-12.67 1.69-22.75-4.28-26.16a9.55 9.55 0 00-4.79-1.2c-5.57 0-12.61 3.89-19.72 10.62-7.11-6.68-14.13-10.55-19.69-10.55a9.46 9.46 0 00-4.86 1.22c-5.94 3.42-7.17 13.44-4.21 26.05-12.41 3.71-20.48 9.77-20.5 16.63s8.12 13 20.59 16.72c-3 12.68-1.7 22.75 4.28 26.16a9.41 9.41 0 004.78 1.2c5.58 0 12.62-3.89 19.73-10.62 7.1 6.68 14.12 10.55 19.69 10.55a9.59 9.59 0 004.86-1.22c5.94-3.42 7.16-13.44 4.21-26 12.41-3.78 20.48-9.84 20.49-16.69zM96.56 42.06c8.19-7.33 13.31-8.12 15.13-8.12a4.71 4.71 0 012.42.58c2.86 1.63 4 7.38 3.09 15a56.73 56.73 0 01-1 5.79 97.7 97.7 0 00-12.58-2.07 98.47 98.47 0 00-8.24-10.08c.37-.37.77-.74 1.18-1.1zM71.77 78.94c.78 1.5 1.61 3 2.47 4.51S76 86.49 77 88c-2.71-.39-5.34-.88-7.84-1.46.7-2.54 1.59-5.04 2.61-7.6zM69 59.9a87.99 87.99 0 017.93-1.46c-1 1.48-1.86 3-2.76 4.59s-1.69 3-2.46 4.52q-1.53-3.9-2.71-7.65zm5.21 13.34q1.86-3.93 4.09-7.86c1.5-2.62 3.11-5.17 4.77-7.61 2.91-.22 5.91-.34 9-.33s6 .12 8.89.35c1.66 2.42 3.25 5 4.75 7.55s2.88 5.22 4.12 7.83c-1.23 2.62-2.6 5.25-4.08 7.85s-3.11 5.18-4.77 7.62c-2.91.23-5.91.34-9 .34s-6-.13-8.89-.36c-1.66-2.42-3.26-4.94-4.76-7.55s-2.83-5.22-4.08-7.83zm32.86-14.77c2.72.38 5.35.87 7.84 1.45-.74 2.47-1.62 5-2.64 7.55-.79-1.5-1.61-3-2.48-4.51s-1.79-3.03-2.68-4.49zm2.76 24.92q1.29-2.27 2.46-4.53c1 2.6 2 5.16 2.7 7.66a87.16 87.16 0 01-7.92 1.45q1.45-2.22 2.8-4.58zM92 46.56c1.8 1.92 3.57 4 5.3 6.23-1.71-.07-3.46-.12-5.23-.12s-3.58 0-5.33.12c1.71-2.22 3.46-4.31 5.26-6.23zm-22.18-12a4.82 4.82 0 012.47-.56 13.11 13.11 0 015.19 1.31 39.07 39.07 0 0110 6.78l1.17 1.07a98.49 98.49 0 00-8.16 10 98.88 98.88 0 00-12.65 2.06c-.44-1.94-.8-3.84-1-5.67C65.8 42 67 36.24 69.81 34.6zm-5.29 50.7a58.75 58.75 0 01-5.54-2c-7.1-3-11.5-6.85-11.5-10.14S51.91 66 59 63.05a57.63 57.63 0 015.44-1.94A97.93 97.93 0 0069 73.25a98.72 98.72 0 00-4.47 12.01zm23 19.1c-8.19 7.33-13.31 8.11-15.14 8.11a4.69 4.69 0 01-2.42-.58c-2.86-1.63-4-7.38-3.09-15a56.07 56.07 0 011-5.78 99.51 99.51 0 0012.58 2.06 97.17 97.17 0 008.24 10.08zm4.57-4.51c-1.8-1.92-3.57-4-5.31-6.23 1.72.08 3.47.12 5.24.12s3.58 0 5.33-.11a95.47 95.47 0 01-5.27 6.22zm22.18 12a4.82 4.82 0 01-2.48.59c-1.82 0-7-.8-15.16-8.1l-1.17-1.07a98.44 98.44 0 008.15-10 97 97 0 0012.66-2.06c.44 1.94.79 3.84 1 5.67.99 7.54-.16 13.3-3.01 14.93zm10.8-28.44c-1.71.7-3.52 1.35-5.44 1.93a98.54 98.54 0 00-4.57-12.14 98.1 98.1 0 004.49-12 58.75 58.75 0 015.54 2c7.09 3 11.5 6.85 11.49 10.14s-4.42 7.08-11.52 10.03zM92 82.39a9.18 9.18 0 10-9.17-9.19A9.17 9.17 0 0092 82.39zm-69.32 54.5V26.2L17.89 31v110.66h122.05l4.78-4.77z"}))}},{id:"vite",title:"Vite",icon:function(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 257",style:{display:"block",width:80,height:80}},r.createElement("defs",null,r.createElement("linearGradient",{id:"vite-a",x1:"-.828%",x2:"57.636%",y1:"7.652%",y2:"78.411%"},r.createElement("stop",{offset:"0%",stopColor:"#41D1FF"}),r.createElement("stop",{offset:"100%",stopColor:"#BD34FE"})),r.createElement("linearGradient",{id:"vite-b",x1:"43.376%",x2:"50.316%",y1:"2.242%",y2:"89.03%"},r.createElement("stop",{offset:"0%",stopColor:"#FFEA83"}),r.createElement("stop",{offset:"8.333%",stopColor:"#FFDD35"}),r.createElement("stop",{offset:"100%",stopColor:"#FFA800"}))),r.createElement("path",{fill:"url(#vite-a)",d:"M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 002.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z"}),r.createElement("path",{fill:"url(#vite-b)",d:"M185.432.063L96.44 17.501a3.268 3.268 0 00-2.634 3.014l-5.474 92.456a3.268 3.268 0 003.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z"}))}},{id:"remix",title:"Remix",icon:function(){var e=(0,c.CJ)();return r.createElement(n.M,{sx:{height:80,width:"100%"}},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 128",style:{flex:1,maxWidth:120}},r.createElement("path",{fill:"dark"===e.colorScheme?e.white:e.black,d:"M404.472 38.335v89.493h-32.264V38.335h32.264zm41.606-.176l14.738 21.27 15.136-21.27h33.26l-32.264 42.54L512 127.653h-35.65l-17.724-24.28-17.726 24.28h-33.26l34.853-45.55L410.43 38.16h35.65zm-116.09-2.827c24.252 0 31.522 16.717 31.665 35.158l.002.56v56.184H329.39V79.313l-.006-.72-.01-.707-.018-.693-.023-.678a63.244 63.244 0 00-.014-.334l-.033-.657a53.255 53.255 0 00-.04-.643l-.046-.629a44.966 44.966 0 00-.026-.309l-.058-.608-.065-.593c-.915-7.718-3.901-11.725-11.61-11.725-9.142 0-13.103 6.379-14.086 16.549l-.064.724c-.12 1.46-.18 2.996-.189 4.598l-.001 44.346h-32.264V79.678l-.003-.727c0-.12-.002-.24-.003-.359l-.012-.706-.018-.693-.025-.678-.032-.664a54.24 54.24 0 00-.018-.327l-.043-.643-.05-.629-.057-.615c-.838-8.303-3.885-12.62-11.888-12.62-10.45 0-14.263 8.653-14.338 21.87l-.001 44.347h-32.264V37.74h32.264v13.444c4.78-9.832 14.34-15.852 27.683-15.852 15.734 0 23.899 7.224 27.684 17.658 4.78-10.033 15.335-17.658 30.271-17.658zm-170.42-2.827c29.38 0 45.093 20.06 45.405 44.02l.004.728v9.029H142.64c.797 11.036 8.764 16.253 18.522 16.253 8.65 0 14.195-2.931 17.21-9.76l.117-.272 25.891 2.407c-4.58 20.468-20.912 31.905-44.413 31.905-28.48 0-48.794-17.257-48.794-45.75 0-28.293 20.713-48.56 48.396-48.56zM60.366 0c32.541 0 48.712 15.488 48.712 40.228 0 18.505-11.38 30.573-26.752 32.585 12.977 2.615 20.563 10.057 21.96 24.74l.203 2.7.177 2.524.152 2.362.106 1.78.114 2.1.06 1.2.083 1.904.068 1.8.034 1.033.045 1.657.04 1.894.014.916.025 2.652.008 2.768.001 1.655H71.857c0-.698.006-1.37.014-2.03l.02-1.306.058-3.164.015-1.06.01-1.097.001-.566-.001-1.063-.01-1.115-.014-.876-.027-1.225-.04-1.3-.054-1.381-.068-1.472-.04-.772-.069-1.207-.079-1.268-.122-1.792-.106-1.424C70.417 88.912 65 85.186 55.093 84.73l-.646-.025-.658-.016a54.423 54.423 0 00-.67-.008L0 84.68V58.33h54.376c14.374 0 21.56-4.406 21.56-16.072 0-10.258-7.186-16.475-21.56-16.475H0V0h60.365zM35.483 106.855c4.402 0 6.245 2.445 6.9 4.785l.071.27.032.133.055.267.047.263.02.13.033.257.025.252.01.123.013.243.004.118.003.23v12.572H0v-19.643h35.483zM159.17 55.782c-8.078 0-12.642 3.906-14.826 9.625l-.164.443-.154.45c-.15.454-.285.918-.408 1.39l-.118.477c-.075.32-.145.642-.21.97l-.092.492c-.015.083-.03.166-.043.249l-.08.5-.037.253h31.268c-.399-8.027-5.577-14.85-15.136-14.85zm245.5-54.369v28.494H372.01V1.413h32.662z"})))}}]},91116:function(e,t,a){a.d(t,{Bs:function(){return r},x6:function(){return c},pp:function(){return n},s$:function(){return i},v_:function(){return l}});var r=1080,c=260,n=820,i=46,l=38},88693:function(e,t,a){a.d(t,{Y:function(){return u}});var r=a(63366),c=a(27378),n=a(14365),i=a(48108),l=a(23238),o=a(8666),s=a(75131),m=a(47536),p=a(77526),d=a.p+"static/banner-3aed73d88ba2f8fca5f19f43eb8df554.webp",h=(0,p.k)((function(e){var t;return{root:(t={position:"relative",backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],padding:1.5*e.spacing.xl,minHeight:340,borderRadius:e.radius.md,backgroundImage:"url("+d+")",backgroundRepeat:"no-repeat",backgroundPosition:"center right",backgroundSize:600,display:"flex",flexDirection:"column",justifyContent:"center"},t[e.fn.smallerThan("md")]={backgroundImage:"none",minHeight:"unset"},t),content:{position:"relative",zIndex:1,maxWidth:400},highlight:{color:e.colors.blue["dark"===e.colorScheme?5:6]},title:{fontSize:32,fontWeight:900,color:"dark"===e.colorScheme?e.white:e.black,marginBottom:e.spacing.sm},secondaryControl:{border:"1px solid transparent"}}})),g=["className"];function u(e){var t=e.className,a=(0,r.Z)(e,g),p=h(),d=p.classes,u=p.cx,f=p.theme;return c.createElement("div",Object.assign({className:u(d.root,t)},a),c.createElement(n.a,{gradient:"linear-gradient(45deg, "+("dark"===f.colorScheme?f.colors.dark[8]:f.colors.gray[2])+" 25%, rgba(0, 0, 0, 0) 95%)",opacity:.5,zIndex:0,radius:"md"}),c.createElement("div",{className:d.content},c.createElement(i.D,{order:2,className:d.title},"Explore ",c.createElement("span",{className:d.highlight},"Pattern UI")),c.createElement(l.x,{size:"sm",sx:{lineHeight:1.7}},"Pattern UI is a set of more than 120 responsive components built with Pattern. All components support dark/light color scheme and Pattern theme customizations. Pattern UI is free for everyone."),c.createElement(o.Z,{mt:"xl"},c.createElement(s.z,{component:"a",href:"https://ui.pattern-ui.design/"},"View components"),c.createElement(s.z,{className:d.secondaryControl,component:"a",href:"https://github.com/pattern-ui/ui.pattern-ui.design",variant:"default",leftIcon:c.createElement(m.g_Y,{size:14})},"Source code"))))}},50393:function(e,t,a){a.d(t,{Z:function(){return z}});var r=a(4942),c=a(63366),n=a(27378),i=a(46645),l=a(75131),o=a(47536);function s(e){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 209"},e),n.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 01-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 01-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 01-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 00256 25.45"}))}function m(e){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 293"},e),n.createElement("path",{fill:"#fff",d:"M226.011 0H29.99C13.459 0 0 13.458 0 30.135v197.778c0 16.677 13.458 30.135 29.989 30.135h165.888l-7.754-27.063 18.725 17.408 17.7 16.384L256 292.571V30.135C256 13.458 242.542 0 226.011 0zm-56.466 191.05s-5.266-6.291-9.655-11.85c19.164-5.413 26.478-17.408 26.478-17.408-5.998 3.95-11.703 6.73-16.823 8.63-7.314 3.073-14.336 5.12-21.211 6.291-14.044 2.633-26.917 1.902-37.888-.146-8.339-1.61-15.507-3.95-21.504-6.29-3.365-1.317-7.022-2.926-10.68-4.974-.438-.293-.877-.439-1.316-.732-.292-.146-.439-.292-.585-.438-2.633-1.463-4.096-2.487-4.096-2.487s7.022 11.703 25.6 17.261c-4.388 5.56-9.801 12.142-9.801 12.142-32.33-1.024-44.617-22.235-44.617-22.235 0-47.104 21.065-85.285 21.065-85.285 21.065-15.799 41.106-15.36 41.106-15.36l1.463 1.756C80.75 77.53 68.608 89.088 68.608 89.088s3.218-1.755 8.63-4.242c15.653-6.876 28.088-8.777 33.208-9.216.877-.147 1.609-.293 2.487-.293a123.776 123.776 0 0129.55-.292c13.896 1.609 28.818 5.705 44.031 14.043 0 0-11.556-10.971-36.425-18.578l2.048-2.34s20.041-.44 41.106 15.36c0 0 21.066 38.18 21.066 85.284 0 0-12.435 21.211-44.764 22.235zm-68.023-68.316c-8.338 0-14.92 7.314-14.92 16.237 0 8.924 6.728 16.238 14.92 16.238 8.339 0 14.921-7.314 14.921-16.238.147-8.923-6.582-16.237-14.92-16.237m53.394 0c-8.339 0-14.922 7.314-14.922 16.237 0 8.924 6.73 16.238 14.922 16.238 8.338 0 14.92-7.314 14.92-16.238 0-8.923-6.582-16.237-14.92-16.237"}))}var p=["style"],d=["style"],h=["style"],g=["service"];function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={border:0,height:42,paddingLeft:20,paddingRight:20};function v(e){var t=e.style,a=(0,c.Z)(e,p),r=(0,i.CJ)();return n.createElement(l.z,Object.assign({component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg/eUZpPbpxb4",leftIcon:n.createElement(m,{style:{width:14,marginRight:5}}),style:f(f(f({},t),b),{},{backgroundColor:"dark"===r.colorScheme?"#5865f2":"#7289da"})},a),"Join Discord community")}function w(e){var t=e.style,a=(0,c.Z)(e,d),r=(0,i.CJ)();return n.createElement(l.z,Object.assign({component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/pattern-ui",leftIcon:n.createElement(s,{style:{width:14,marginRight:5}}),style:f(f(f({},t),b),{},{backgroundColor:"dark"===r.colorScheme?"#1C8CD8":"#00acee"})},a),"Follow Pattern on Twitter")}function y(e){var t=e.style,a=(0,c.Z)(e,h),r=(0,i.CJ)();return n.createElement(l.z,Object.assign({component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/pattern-ui/pattern/discussions",leftIcon:n.createElement(o.g_Y,{size:14}),style:f(f(f({},t),b),{},{color:r.black,backgroundColor:r.white}),styles:{leftIcon:{marginRight:16}}},a),"GitHub Discussions")}function z(e){var t=e.service,a=(0,c.Z)(e,g);return"discord"===t?n.createElement(v,a):"twitter"===t?n.createElement(w,a):"github"===t?n.createElement(y,a):null}}}]);
//# sourceMappingURL=f2daa30b7f34c51368630bdd8c7f84809e1db014-a6b8f1ff204b77e405c8.js.map