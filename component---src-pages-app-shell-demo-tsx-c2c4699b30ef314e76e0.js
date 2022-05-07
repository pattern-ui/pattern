"use strict";(self.webpackChunkpattern_docs=self.webpackChunkpattern_docs||[]).push([[616],{5281:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var n=r(27378),o=r(59551),a=r(46645),i=r(20045);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=Object.defineProperty,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=function(e,t,r){return t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},m={fixed:!1,position:{top:0,right:0},zIndex:(0,o.w)("app"),hiddenBreakpoint:"md",hidden:!1},y=(0,n.forwardRef)((function(e,t){var r=(0,a.Bk)("Aside",m,e);return n.createElement(i.e,function(e,t){for(var r in t||(t={}))f.call(t,r)&&d(e,r,t[r]);if(s)for(var n,o=l(s(t));!(n=o()).done;)r=n.value,p.call(t,r)&&d(e,r,t[r]);return e}({section:"aside",__staticSelector:"Aside",ref:t},r))}));y.Section=i.e.Section,y.displayName="@pattern-ui/core/Aside";var b=r(92844);function h(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=Object.defineProperty,O=Object.defineProperties,w=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,j=function(e,t,r){return t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},k={fixed:!1,position:{bottom:0,left:0,right:0},zIndex:(0,o.w)("app")},x=(0,n.forwardRef)((function(e,t){var r,o=function(e,t){var r={};for(var n in e)A.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&E)for(var o,a=h(E(e));!(o=a()).done;)n=o.value,t.indexOf(n)<0&&S.call(e,n)&&(r[n]=e[n]);return r}((0,a.Bk)("Footer",k,e),[]);return n.createElement(b.Q,(r=function(e,t){for(var r in t||(t={}))A.call(t,r)&&j(e,r,t[r]);if(E)for(var n,o=h(E(t));!(n=o()).done;)r=n.value,S.call(t,r)&&j(e,r,t[r]);return e}({section:"footer",__staticSelector:"Footer"},o),O(r,w({ref:t}))))}));x.displayName="@pattern-ui/core/Footer";var I=r(6666),P=r(10485),B=r(23238),z=r(70906),C=r(90224),_=r(14200),F=r(78426);function T(){var e=(0,a.CJ)(),t=(0,n.useState)(!1),r=t[0],o=t[1];return n.createElement(n.Fragment,null,n.createElement(F.Z,{title:"AppShell demo"}),n.createElement(I.V,{styles:{main:{background:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0]}},navbarOffsetBreakpoint:"sm",asideOffsetBreakpoint:"sm",fixed:!0,navbar:n.createElement(P.w,{p:"md",hiddenBreakpoint:"sm",hidden:!r,width:{sm:200,lg:300}},n.createElement(B.x,null,"Application navbar")),aside:n.createElement(z.z,{smallerThan:"sm",styles:{display:"none"}},n.createElement(y,{p:"md",hiddenBreakpoint:"sm",width:{sm:200,lg:300}},n.createElement(B.x,null,"Application sidebar"))),footer:n.createElement(x,{height:60,p:"md"},"Application footer"),header:n.createElement(C.h,{height:70,p:"md"},n.createElement("div",{style:{display:"flex",alignItems:"center",height:"100%"}},n.createElement(z.z,{largerThan:"sm",styles:{display:"none"}},n.createElement(_.O,{opened:r,onClick:function(){return o((function(e){return!e}))},size:"sm",color:e.colors.gray[6],mr:"xl"})),n.createElement(B.x,null,"Application header")))},n.createElement(B.x,null,"Resize app to see responsive navbar in action")))}}}]);
//# sourceMappingURL=component---src-pages-app-shell-demo-tsx-c2c4699b30ef314e76e0.js.map