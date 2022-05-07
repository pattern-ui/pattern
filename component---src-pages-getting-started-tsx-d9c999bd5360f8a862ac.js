"use strict";(self.webpackChunkpattern_docs=self.webpackChunkpattern_docs||[]).push([[48],{31513:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(27378),a=n(81823),i=n(73702),o=n(78426),c=n(42982),s=n(4942),l=n(46645),p=n(48108),d=n(9113),u=[{package:"@pattern-ui/hooks",description:"Hooks for state and UI management",dependencies:["@pattern-ui/hooks"]},{package:"@pattern-ui/core",description:"Core components library: inputs, buttons, overlays, etc.",dependencies:["@pattern-ui/hooks","@pattern-ui/core"]},{package:"@pattern-ui/form",description:"Form management library",dependencies:["@pattern-ui/form"]},{package:"@pattern-ui/dates",description:"Date inputs, calendars",dependencies:["@pattern-ui/hooks","@pattern-ui/core","@pattern-ui/dates","dayjs"]},{package:"@pattern-ui/notifications",description:"Notifications system",dependencies:["@pattern-ui/hooks","@pattern-ui/core","@pattern-ui/notifications"]},{package:"@pattern-ui/prism",description:"Code highlight with your theme colors and styles",dependencies:["@pattern-ui/hooks","@pattern-ui/core","@pattern-ui/prism"]},{package:"@pattern-ui/rte",description:"Rich text editor based on Quill.js",dependencies:["@pattern-ui/hooks","@pattern-ui/core","@pattern-ui/rte"]},{package:"@pattern-ui/dropzone",description:"Capture files with drag and drop",dependencies:["@pattern-ui/hooks","@pattern-ui/core","@pattern-ui/dropzone"]},{package:"@pattern-ui/modals",description:"Centralized modals manager",dependencies:["@pattern-ui/hooks","@pattern-ui/core","@pattern-ui/modals"]},{package:"@pattern-ui/spotlight",description:"Overlay command center",dependencies:["@pattern-ui/hooks","@pattern-ui/core","@pattern-ui/spotlight"]}],m=n(63366),g=n(77526),h=n(37111),k=n(9348),f=n(23238),b=n(44779),x=["checked","defaultChecked","onChange","title","description","className"],y=(0,g.k)((function(e){return{button:{display:"flex",width:"100%",border:"1px solid "+("dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[3]),borderRadius:e.radius.sm,padding:e.spacing.lg,backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,"&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[9]:e.colors.gray[0]}}}}));function E(e){var t=e.checked,n=e.defaultChecked,a=e.onChange,i=e.title,o=e.description,c=e.className,s=(0,m.Z)(e,x),l=y(),p=l.classes,d=l.cx,u=(0,b.C)({value:t,defaultValue:n,finalValue:!1,onChange:a,rule:function(e){return"boolean"==typeof e}}),g=u[0],E=u[1];return r.createElement(h.k,Object.assign({},s,{onClick:function(){return E(!g)},className:d(p.button,c)}),r.createElement(k.X,{checked:g,onChange:function(){},tabIndex:-1,size:"md",mr:"xl",styles:{input:{cursor:"pointer"}}}),r.createElement("div",null,r.createElement(f.x,{weight:500,mb:7,sx:{lineHeight:1}},i),r.createElement(f.x,{size:"sm",color:"dimmed"},o)))}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=e.setDependencies,n=(0,l.CJ)(),a=(0,r.useState)({"@pattern-ui/hooks":!0,"@pattern-ui/core":!0,"@pattern-ui/dates":!1,"@pattern-ui/notifications":!1,"@pattern-ui/prism":!1,"@pattern-ui/rte":!1,"@pattern-ui/dropzone":!1}),i=a[0],o=a[1],s=u.map((function(e){return r.createElement(E,{key:e.package,checked:i[e.package],title:e.package,description:e.description,onChange:function(){return o((function(t){var n;return v(v({},t),{},((n={})[e.package]=!t[e.package],n))}))},style:{minHeight:90}})})),m=Array.from(new Set(u.reduce((function(e,t){return i[t.package]&&e.push.apply(e,(0,c.Z)(t.dependencies)),e}),[]))).sort().reverse();return(0,r.useEffect)((function(){t(m.join(" "))}),[m]),r.createElement("div",{style:{marginBottom:50}},r.createElement(p.D,{order:2,mb:"lg",sx:{color:"dark"===n.colorScheme?n.white:n.black}},"Choose packages"),r.createElement(d.M,{cols:2,breakpoints:[{maxWidth:1e3,cols:1}]},s))}var O=n(8666),C=n(23025),j=n(75131),z=n(32292),D=n(9460);function P(e){var t=e.dependencies,n=e.initScript,a=e.children,i=e.action,o=e.actionLink,c=e.withDone,s=(0,l.CJ)();return r.createElement(r.Fragment,null,o&&r.createElement(j.z,{component:"a",href:o,target:"_blank",size:"xl",fullWidth:!0,variant:"dark"===s.colorScheme?"outline":"default",mb:30},i),r.createElement(f.x,{weight:500,mb:5,size:"lg"},o?"Or init":"Init"," new application"),r.createElement(z.p,{language:"bash"},n),r.createElement(f.x,{weight:500,size:"lg",mt:30},"Install dependencies"),r.createElement(f.x,{mb:5,mt:5,size:"sm"},"With yarn"),r.createElement(z.p,{language:"bash"},"yarn add "+(t||"@pattern-ui/core @pattern-ui/hooks")),r.createElement(f.x,{mb:5,mt:15,size:"sm"},"With npm"),r.createElement(z.p,{language:"bash"},"npm install "+(t||"@pattern-ui/core @pattern-ui/hooks")),a,c&&r.createElement(r.Fragment,null,r.createElement(f.x,{weight:500,mt:30,mb:5,size:"lg"},"All done!"),r.createElement(z.p,{language:"tsx"},"\nimport { Button } from '@pattern-ui/core';\n\nexport function MyApp() {\n  return <Button>Hello world!</Button>;\n}\n")))}var N={cra:function(e){var t=e.dependencies;return r.createElement(P,{dependencies:t,initScript:"npx create-react-app my-app --template typescript",withDone:!0})},next:function(e){var t=e.dependencies;return r.createElement(P,{dependencies:t+" @pattern-ui/next",initScript:"npx create-next-app --ts",action:"Get started with Next.js GitHub template",actionLink:"https://github.com/pattern-ui/pattern-next-template"},r.createElement(f.x,{weight:500,mt:30,mb:5,size:"lg"},"And follow Next.js guide"),r.createElement(D.Z,{to:"/theming/next/"},"Follow Next.js getting started guide"))},vite:function(e){var t=e.dependencies;return r.createElement(P,{dependencies:t,initScript:"yarn create @vitejs/app pattern-vite --template react-ts",withDone:!0})},gatsby:function(e){var t=e.dependencies;return r.createElement(P,{dependencies:t+" gatsby-plugin-pattern",initScript:"npm init gatsby",action:"Get started with Gatsby.js GitHub template",actionLink:"https://github.com/pattern-ui/pattern-gatsby-template",withDone:!0},r.createElement(f.x,{weight:500,mt:30,mb:5,size:"lg"},"Add gatsby-plugin-pattern in your gatsby.config.js file:"),r.createElement(z.p,{language:"tsx"},"plugins: ['gatsby-plugin-pattern']"))},remix:function(e){var t=e.dependencies;return r.createElement(P,{dependencies:t+" @pattern-ui/ssr",initScript:"npx create-remix@latest",action:"View example setup",actionLink:"https://github.com/remix-run/remix/tree/main/examples/pattern",withDone:!0},r.createElement(f.x,{weight:500,mt:30,mb:5,size:"lg"},"Replace your entry.server.tsx file with"),r.createElement(z.p,{language:"tsx"},"import { renderToString } from 'react-dom/server';\nimport { RemixServer } from '@remix-run/react';\nimport type { EntryContext } from '@remix-run/node';\nimport { injectStylesIntoStaticMarkup } from '@pattern-ui/ssr';\n\nexport default function handleRequest(\n  request: Request,\n  responseStatusCode: number,\n  responseHeaders: Headers,\n  remixContext: EntryContext\n) {\n  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);\n  responseHeaders.set('Content-Type', 'text/html');\n\n  return new Response(`<!DOCTYPE html>${injectStylesIntoStaticMarkup(markup)}`, {\n    status: responseStatusCode,\n    headers: responseHeaders,\n  });\n}\n"))}},R=(0,g.k)((function(e){return{guide:{paddingTop:e.spacing.xl},control:{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid "+("dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[4]),backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,padding:e.spacing.xl,borderRadius:e.radius.md,"&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[9]:e.colors.gray[0]},minWidth:180,flex:1},active:{borderColor:e.colors.blue[6]}}}));function H(e){var t,n=e.dependencies,a="undefined"!=typeof window?null===(t=window.location.search)||void 0===t?void 0:t.replace("?g=",""):"next",i=(0,r.useState)(a in N?a:"next"),o=i[0],c=i[1],s=R(),l=s.classes,d=s.cx,u=N[o],m=C.R.map((function(e){var t;return r.createElement(h.k,{className:d(l.control,(t={},t[l.active]=e.id===o,t)),key:e.id,onClick:function(){return c(e.id)}},r.createElement(e.icon,null),r.createElement(f.x,{mt:"md"},e.title))}));return r.createElement("div",null,r.createElement(p.D,{order:2,mb:"lg",sx:function(e){return{color:"dark"===e.colorScheme?e.white:e.black}}},"And get started with"),r.createElement(O.Z,null,m),r.createElement("div",{className:l.guide},r.createElement(u,{dependencies:n})))}var L=n(25444),T=n(58209),I=n(43055),W=n(47536),Z=n(20598),G=[{title:"Learn the basics",description:"Read a 5 minute tutorial to get an overview of all core features, please start your journey with Pattern here",link:"/pages/basics/",type:"gatsby",icon:I.e0l,color:Z.t0.colors.violet[6]},{title:"Learn about theming",description:"Learn how to change colors, fonts, shadows, spacing and other theme values with PatternProvider",link:"/theming/pattern-provider/",type:"gatsby",icon:I.EGi,color:Z.t0.colors.pink[6]},{title:"Explore source code",description:"Pattern packages and documentation website is open source, if you like Pattern please give us a star",link:"https://github.com/pattern-ui/pattern",type:"link",icon:W.g_Y,color:"#000"}];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=(0,g.k)((function(e){return{links:{display:"flex",flexWrap:"wrap",marginTop:e.spacing.md,marginLeft:-e.spacing.md/2,marginRight:-e.spacing.md/2},link:B(B({},e.fn.focusStyles()),{},{display:"block",padding:e.spacing.xl,borderRadius:e.radius.md,border:"1px solid "+("dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[3]),textDecoration:"none",backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,"&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[9]:e.colors.gray[0]}}),wrapper:{paddingTop:2*e.spacing.xl,paddingBottom:e.spacing.xl}}}));function M(){var e=(0,l.CJ)(),t=F().classes,n=G.map((function(e,n){var a="gatsby"===e.type?L.Link:function(e){return r.createElement("a",e)},i="gatsby"===e.type?{to:e.link}:{href:e.link};return r.createElement(a,Object.assign({className:t.link,key:n},i),r.createElement(O.Z,null,r.createElement(T.k,{size:34,sx:{backgroundColor:e.color}},r.createElement(e.icon,{width:22,height:22,size:22})),r.createElement(f.x,{weight:500,size:"lg"},e.title)),r.createElement(f.x,{size:"sm",color:"dimmed",mt:"md",sx:{lineHeight:1.6}},e.description))}));return r.createElement("div",{className:t.wrapper},r.createElement(p.D,{order:2,sx:{color:"dark"===e.colorScheme?e.white:e.black}},"Next steps"),r.createElement(d.M,{cols:3,mt:15,breakpoints:[{maxWidth:960,cols:1}]},n))}var q=n(88693),_=(0,g.k)((function(e){var t;return{wrapper:{position:"relative",zIndex:4,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,boxShadow:e.shadows.sm},container:(t={paddingTop:50,paddingBottom:50,paddingLeft:2*e.spacing.xl,paddingRight:2*e.spacing.xl},t[e.fn.smallerThan("sm")]={paddingLeft:e.spacing.md,paddingRight:e.spacing.md},t)}}));function J(){var e=_().classes,t=(0,r.useState)("@pattern-ui/hooks @pattern-ui/core"),n=t[0],c=t[1];return r.createElement(r.Fragment,null,r.createElement(o.Z,{title:"Getting started"}),r.createElement("div",{className:e.wrapper},r.createElement(a.W,{px:null,className:e.container,size:1100},r.createElement(S,{setDependencies:c}),r.createElement(H,{dependencies:n}),r.createElement(M,null),r.createElement(q.Y,null))),r.createElement(i.$,{withNavbar:!0}))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-tsx-d9c999bd5360f8a862ac.js.map