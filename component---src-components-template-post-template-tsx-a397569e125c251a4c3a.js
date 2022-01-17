"use strict";(self.webpackChunkaroundus=self.webpackChunkaroundus||[]).push([[160],{2847:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ze}});var n=r(7294),o=r(6575),a=r(3366),i=r(7462),l=r(8685),c=r(2372),u=r(2831),s=r(6640),d=r(8893),p=r(8913),v=r(2162);function f(e){return(0,p.Z)("MuiDivider",e)}(0,v.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var m=r(5893),h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],b=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:t.palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:(0,u.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat(t.palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat(t.palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,i.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),g=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var r=e.ownerState;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),x=n.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiDivider"}),n=r.absolute,o=void 0!==n&&n,u=r.children,s=r.className,p=r.component,v=void 0===p?u?"div":"hr":p,x=r.flexItem,S=void 0!==x&&x,y=r.light,w=void 0!==y&&y,Z=r.orientation,D=void 0===Z?"horizontal":Z,C=r.role,L=void 0===C?"hr"!==v?"separator":void 0:C,E=r.textAlign,A=void 0===E?"center":E,F=r.variant,M=void 0===F?"fullWidth":F,j=(0,a.Z)(r,h),P=(0,i.Z)({},r,{absolute:o,component:v,flexItem:S,light:w,orientation:D,role:L,textAlign:A,variant:M}),R=function(e){var t=e.absolute,r=e.children,n=e.classes,o=e.flexItem,a=e.light,i=e.orientation,l=e.textAlign,u={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===i&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===i&&"withChildrenVertical","right"===l&&"vertical"!==i&&"textAlignRight","left"===l&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,c.Z)(u,f,n)}(P);return(0,m.jsx)(b,(0,i.Z)({as:v,className:(0,l.Z)(R.root,s),role:L,ref:t,ownerState:P},j,{children:u?(0,m.jsx)(g,{className:R.wrapper,ownerState:P,children:u}):null}))})),S=r(7862),y=(0,S.Z)((0,m.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),"InsertEmoticon"),w=r(3264),Z=r(9395),D=r(4113),C=r(3508),L=r(4550),E=r(2366),A=r(1855);function F(e){return(0,p.Z)("MuiStepper",e)}(0,v.Z)("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);var M=r(4517);var j=n.createContext({});var P=n.createContext({});function R(e){return(0,p.Z)("MuiStepConnector",e)}(0,v.Z)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);var O=["className"],I=(0,s.ZP)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,i.Z)({flex:"1 1 auto"},"vertical"===t.orientation&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})})),z=(0,s.ZP)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:function(e,t){var r=e.ownerState;return[t.line,t["line".concat((0,M.Z)(r.orientation))]]}})((function(e){var t=e.ownerState,r=e.theme;return(0,i.Z)({display:"block",borderColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]},"horizontal"===t.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===t.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})})),N=n.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStepConnector"}),o=r.className,u=(0,a.Z)(r,O),s=n.useContext(j),p=s.alternativeLabel,v=s.orientation,f=void 0===v?"horizontal":v,h=n.useContext(P),b=h.active,g=h.disabled,x=h.completed,S=(0,i.Z)({},r,{alternativeLabel:p,orientation:f,active:b,completed:x,disabled:g}),y=function(e){var t=e.classes,r=e.orientation,n={root:["root",r,e.alternativeLabel&&"alternativeLabel",e.active&&"active",e.completed&&"completed",e.disabled&&"disabled"],line:["line","line".concat((0,M.Z)(r))]};return(0,c.Z)(n,R,t)}(S);return(0,m.jsx)(I,(0,i.Z)({className:(0,l.Z)(y.root,o),ref:t,ownerState:S},u,{children:(0,m.jsx)(z,{className:y.line,ownerState:S})}))})),B=["activeStep","alternativeLabel","children","className","connector","nonLinear","orientation"],k=(0,s.ZP)("div",{name:"MuiStepper",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel]}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"flex"},"horizontal"===t.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===t.orientation&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})})),T=(0,m.jsx)(N,{}),W=n.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStepper"}),o=r.activeStep,u=void 0===o?0:o,s=r.alternativeLabel,p=void 0!==s&&s,v=r.children,f=r.className,h=r.connector,b=void 0===h?T:h,g=r.nonLinear,x=void 0!==g&&g,S=r.orientation,y=void 0===S?"horizontal":S,w=(0,a.Z)(r,B),Z=(0,i.Z)({},r,{alternativeLabel:p,orientation:y}),D=function(e){var t=e.orientation,r=e.alternativeLabel,n=e.classes,o={root:["root",t,r&&"alternativeLabel"]};return(0,c.Z)(o,F,n)}(Z),C=n.Children.toArray(v).filter(Boolean),L=C.map((function(e,t){return n.cloneElement(e,(0,i.Z)({index:t,last:t+1===C.length},e.props))})),E=n.useMemo((function(){return{activeStep:u,alternativeLabel:p,connector:b,nonLinear:x,orientation:y}}),[u,p,b,x,y]);return(0,m.jsx)(j.Provider,{value:E,children:(0,m.jsx)(k,(0,i.Z)({ownerState:Z,className:(0,l.Z)(D.root,f),ref:t},w,{children:L}))})}));function V(e){return(0,p.Z)("MuiStep",e)}(0,v.Z)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);var q=["active","children","className","completed","disabled","expanded","index","last"],H=(0,s.ZP)("div",{name:"MuiStep",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,i.Z)({},"horizontal"===t.orientation&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})})),Y=n.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStep"}),o=r.active,u=r.children,s=r.className,p=r.completed,v=r.disabled,f=r.expanded,h=void 0!==f&&f,b=r.index,g=r.last,x=(0,a.Z)(r,q),S=n.useContext(j),y=S.activeStep,w=S.connector,Z=S.alternativeLabel,D=S.orientation,C=S.nonLinear,L=void 0!==o&&o,E=void 0!==p&&p,A=void 0!==v&&v;y===b?L=void 0===o||o:!C&&y>b?E=void 0===p||p:!C&&y<b&&(A=void 0===v||v);var F=n.useMemo((function(){return{index:b,last:g,expanded:h,icon:b+1,active:L,completed:E,disabled:A}}),[b,g,h,L,E,A]),M=(0,i.Z)({},r,{active:L,orientation:D,alternativeLabel:Z,completed:E,disabled:A,expanded:h}),R=function(e){var t=e.classes,r={root:["root",e.orientation,e.alternativeLabel&&"alternativeLabel",e.completed&&"completed"]};return(0,c.Z)(r,V,t)}(M),O=(0,m.jsxs)(H,(0,i.Z)({className:(0,l.Z)(R.root,s),ref:t,ownerState:M},x,{children:[w&&Z&&0!==b?w:null,u]}));return(0,m.jsx)(P.Provider,{value:F,children:w&&!Z&&0!==b?(0,m.jsxs)(n.Fragment,{children:[w,O]}):O})})),$=r(4942),U=(0,S.Z)((0,m.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),Q=(0,S.Z)((0,m.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),X=r(2042);function G(e){return(0,p.Z)("MuiStepIcon",e)}var J,K=(0,v.Z)("MuiStepIcon",["root","active","completed","error","text"]),_=["active","className","completed","error","icon"],ee=(0,s.ZP)(X.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,r=e.theme;return t={display:"block",transition:r.transitions.create("color",{duration:r.transitions.duration.shortest}),color:r.palette.text.disabled},(0,$.Z)(t,"&.".concat(K.completed),{color:r.palette.primary.main}),(0,$.Z)(t,"&.".concat(K.active),{color:r.palette.primary.main}),(0,$.Z)(t,"&.".concat(K.error),{color:r.palette.error.main}),t})),te=(0,s.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:function(e,t){return t.text}})((function(e){var t=e.theme;return{fill:t.palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}})),re=n.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStepIcon"}),n=r.active,o=void 0!==n&&n,u=r.className,s=r.completed,p=void 0!==s&&s,v=r.error,f=void 0!==v&&v,h=r.icon,b=(0,a.Z)(r,_),g=(0,i.Z)({},r,{active:o,completed:p,error:f}),x=function(e){var t=e.classes,r={root:["root",e.active&&"active",e.completed&&"completed",e.error&&"error"],text:["text"]};return(0,c.Z)(r,G,t)}(g);if("number"==typeof h||"string"==typeof h){var S=(0,l.Z)(u,x.root);return f?(0,m.jsx)(ee,(0,i.Z)({as:Q,className:S,ref:t,ownerState:g},b)):p?(0,m.jsx)(ee,(0,i.Z)({as:U,className:S,ref:t,ownerState:g},b)):(0,m.jsxs)(ee,(0,i.Z)({className:S,ref:t,ownerState:g},b,{children:[J||(J=(0,m.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,m.jsx)(te,{className:x.text,x:"12",y:"16",textAnchor:"middle",ownerState:g,children:h})]}))}return h}));function ne(e){return(0,p.Z)("MuiStepLabel",e)}var oe=(0,v.Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),ae=["children","className","componentsProps","error","icon","optional","StepIconComponent","StepIconProps"],ie=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation]]}})((function(e){var t,r=e.ownerState;return(0,i.Z)((t={display:"flex",alignItems:"center"},(0,$.Z)(t,"&.".concat(oe.alternativeLabel),{flexDirection:"column"}),(0,$.Z)(t,"&.".concat(oe.disabled),{cursor:"default"}),t),"vertical"===r.orientation&&{textAlign:"left",padding:"8px 0"})})),le=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:function(e,t){return t.label}})((function(e){var t,r=e.theme;return(0,i.Z)({},r.typography.body2,(t={display:"block",transition:r.transitions.create("color",{duration:r.transitions.duration.shortest})},(0,$.Z)(t,"&.".concat(oe.active),{color:r.palette.text.primary,fontWeight:500}),(0,$.Z)(t,"&.".concat(oe.completed),{color:r.palette.text.primary,fontWeight:500}),(0,$.Z)(t,"&.".concat(oe.alternativeLabel),{textAlign:"center",marginTop:16}),(0,$.Z)(t,"&.".concat(oe.error),{color:r.palette.error.main}),t))})),ce=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:function(e,t){return t.iconContainer}})((function(){return(0,$.Z)({flexShrink:0,display:"flex",paddingRight:8},"&.".concat(oe.alternativeLabel),{paddingRight:0})})),ue=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:function(e,t){return t.labelContainer}})((function(e){return{width:"100%",color:e.theme.palette.text.secondary}})),se=n.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStepLabel"}),o=r.children,u=r.className,s=r.componentsProps,p=void 0===s?{}:s,v=r.error,f=void 0!==v&&v,h=r.icon,b=r.optional,g=r.StepIconComponent,x=r.StepIconProps,S=(0,a.Z)(r,ae),y=n.useContext(j),w=y.alternativeLabel,Z=y.orientation,D=n.useContext(P),C=D.active,L=D.disabled,E=D.completed,A=D.icon,F=h||A,M=g;F&&!M&&(M=re);var R=(0,i.Z)({},r,{active:C,alternativeLabel:w,completed:E,disabled:L,error:f,orientation:Z}),O=function(e){var t=e.classes,r=e.orientation,n=e.active,o=e.completed,a=e.error,i=e.disabled,l=e.alternativeLabel,u={root:["root",r,a&&"error",i&&"disabled",l&&"alternativeLabel"],label:["label",n&&"active",o&&"completed",a&&"error",i&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",l&&"alternativeLabel"],labelContainer:["labelContainer"]};return(0,c.Z)(u,ne,t)}(R);return(0,m.jsxs)(ie,(0,i.Z)({className:(0,l.Z)(O.root,u),ref:t,ownerState:R},S,{children:[F||M?(0,m.jsx)(ce,{className:O.iconContainer,ownerState:R,children:(0,m.jsx)(M,(0,i.Z)({completed:E,active:C,error:f,icon:F},x))}):null,(0,m.jsxs)(ue,{className:O.labelContainer,ownerState:R,children:[o?(0,m.jsx)(le,(0,i.Z)({className:O.label,ownerState:R},p.label,{children:o})):null,b]})]}))}));se.muiName="StepLabel";var de=se,pe=r(8339);function ve(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return fe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return fe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var me=function(e){var t=e.html,r=e.target,o=(0,L.Z)(),a=(0,E.QM)({container:"\n      transition: position 0.2s;\n    "},{name:"FloatingTOC"})(),i=ve((0,n.useState)(0),2),l=i[0],c=i[1],u=ve((0,n.useState)([]),2),s=u[0],d=u[1],p=ve((0,n.useState)("absolute"),2),v=p[0],f=p[1],m=ve((0,n.useState)(0),2),h=m[0],b=m[1],g=ve((0,n.useState)(0),2),x=g[0],S=g[1];return(0,n.useEffect)((function(){var e=function(){var e=window.pageYOffset;s.forEach((function(t,r){t.yOffset<e+20&&c(r)}))};return e(),window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[s]),(0,n.useEffect)((function(){var e,n,o=function(){if(null!==r){var e=r.getBoundingClientRect(),t=window.pageYOffset;b(e.left+e.width),t<r.offsetTop?(f("absolute"),S(r.offsetTop)):t<e.height?(f("fixed"),S(0)):f("absolute")}};return o(),window.addEventListener("resize",o),window.addEventListener("scroll",o),e=(new DOMParser).parseFromString(t,"text/html"),n=[],e.querySelectorAll("ul > li").forEach((function(e){if(!e.querySelector("ul")&&!e.querySelector("p")){var t=e.querySelector("a"),r=t.innerHTML.replace(/\s/g,"-").replace(/<br>/g,"br-").replace(/<\/?mark>/g,"mark").replace(/<\/?u>/g,"u").replace(/[!@#$%^&*()?.,]/g,"").replace(/(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])/g,""),o=document.getElementById(r);if(null!==o){var a=o.getBoundingClientRect(),i=window.pageYOffset;n.push({text:t.innerHTML.replace(/<\/?(br|mark|u)>/g," "),yOffset:a.top+i-60})}}})),d(n),function(){window.removeEventListener("resize",o),window.removeEventListener("scroll",o)}}),[t,r]),n.createElement("aside",{className:a.container,style:{position:v,left:h,top:"calc(".concat(x,"px + ").concat(o.spacing(10),")")}},n.createElement(A.Z,{sx:{minWidth:160}},n.createElement(W,{activeStep:l,orientation:"vertical",connector:null,nonLinear:!0},s.map((function(e){return n.createElement(Y,{key:e.text,onClick:function(){return t=e.yOffset,void window.scroll({top:t,behavior:"smooth"});var t}},n.createElement(de,{StepIconProps:{sx:{fontSize:"1em"}},sx:{py:1,cursor:"pointer",alignItems:"start"}},n.createElement(pe.Z,{variant:"subtitle1",lineHeight:1.3,fontSize:15},e.text)))})))))},he=function(e){var t=e.post,r=(0,L.Z)(),o=(0,C.Z)(r.breakpoints.down("lg")),a=(0,n.useRef)(null);return n.createElement(n.Fragment,null,n.createElement(Z.cy,{post:t}),t.html&&n.createElement(Z.F7,{ref:a,html:t.html}),t.tableOfContents&&!o&&n.createElement(me,{html:t.tableOfContents,target:a.current}))},be=r(7544),ge=r(4983);function xe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ze=function(e){var t=e.data,r=e.data.markdownRemark,a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){we(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:r.id,path:r.fields.slug,html:r.html,tableOfContents:r.tableOfContents},r.frontmatter),i=t.prevPost?{path:t.prevPost.fields.slug,category:t.prevPost.frontmatter.category,title:t.prevPost.frontmatter.title}:void 0,l=t.nextPost?{path:t.nextPost.fields.slug,category:t.nextPost.frontmatter.category,title:t.nextPost.frontmatter.title}:void 0,c=xe((0,n.useState)([]),2),u=c[0],s=c[1];return(0,n.useEffect)((function(){a.category&&s((0,ge.P)(a.category).filter((function(e){return e.id!==a.id})).sort((function(e,t){return Date.parse(t.date)-Date.parse(e.date)})).slice(0,5))}),[a.category]),n.createElement(n.Fragment,null,n.createElement(D.Z,{path:a.path,title:a.title,description:a.description,image:(0,be.m)(a.image||a.category)}),n.createElement(w.Z,null,n.createElement(he,{post:a}),n.createElement(x,{sx:{mb:-4}},n.createElement(y,{color:"primary"})),n.createElement(Z.aE,{prevPost:i,nextPost:l}),!(0,o.Z)(u)&&n.createElement(Z.Is,{query:a.category,posts:u}),n.createElement(Z.F6,{options:{id:a.id,title:"".concat(a.title," #").concat(a.category)}})))}}}]);
//# sourceMappingURL=component---src-components-template-post-template-tsx-a397569e125c251a4c3a.js.map