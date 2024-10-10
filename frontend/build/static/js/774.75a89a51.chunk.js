"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[774],{9894:(e,r,t)=>{t.d(r,{A:()=>s});t(5043);var a=t(579);const s=()=>(0,a.jsx)("footer",{className:"footer",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"col-md-4 d-flex align-items-center",children:[(0,a.jsx)("a",{href:"/",className:"footer-logo",children:(0,a.jsx)("svg",{className:"bi",width:"30",height:"24",children:(0,a.jsx)("use",{xlinkHref:"#bootstrap"})})}),(0,a.jsxs)("span",{className:"footer-text",children:["\xa9 ",(new Date).getFullYear()," PersBlog"]})]})})})},6774:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var a=t(5043),s=t(3216),i=t(6213),o=t(9424),n=t(1637),l=t(4496),c=t(1596),d=t(9894),h=t(579);const p=()=>{const{postId:e}=(0,s.g)(),[r,t]=(0,a.useState)(null),[p,m]=(0,a.useState)(!0),[u,x]=(0,a.useState)(null);return(0,a.useEffect)((()=>{(async()=>{try{const r=await i.A.get(`http://localhost:4000/api/posts/${e}`);t(r.data)}catch(u){console.error("Error fetching the post:",u),x("Failed to load the post. Please try again.")}finally{m(!1)}})()}),[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.A,{component:"main",maxWidth:"md",style:{marginTop:"150px"},children:p?(0,h.jsx)("div",{className:"text-center my-5",children:(0,h.jsx)(n.A,{})}):u?(0,h.jsx)(l.A,{variant:"body1",color:"error",align:"center",children:u}):(0,h.jsxs)(c.A,{elevation:5,style:{padding:"20px",borderRadius:"8px"},children:[(0,h.jsx)(l.A,{variant:"h4",component:"h1",align:"center",style:{marginTop:"30px",marginBottom:"50px"},gutterBottom:!0,children:r.title}),(0,h.jsx)(l.A,{variant:"body1",paragraph:!0,style:{whiteSpace:"pre-wrap"},children:r.content}),(0,h.jsxs)(l.A,{variant:"caption",color:"textSecondary",display:"block",align:"right",children:["Posted at: ",new Date(r.posted_at).toLocaleString()]}),(0,h.jsx)(l.A,{variant:"caption",color:"textSecondary",display:"block",align:"right",children:"Author: Ashik Ibrahim "})]})}),(0,h.jsx)(d.A,{})]})}},1637:(e,r,t)=>{t.d(r,{A:()=>j});var a=t(5043),s=t(8387),i=t(8610),o=t(3290),n=t(4535),l=t(6870),c=t(8249),d=t(6803),h=t(2445),p=t(2532),m=t(2372);function u(e){return(0,m.Ay)("MuiCircularProgress",e)}(0,p.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var x=t(579);const g=44,f=o.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,v=o.i7`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,y="string"!==typeof f?o.AH`
        animation: ${f} 1.4s linear infinite;
      `:null,k="string"!==typeof v?o.AH`
        animation: ${v} 1.4s ease-in-out infinite;
      `:null,A=(0,n.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,d.A)(t.color)}`]]}})((0,l.A)((e=>{let{theme:r}=e;return{display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:y||{animation:`${f} 1.4s linear infinite`}},...Object.entries(r.palette).filter((0,h.A)()).map((e=>{let[t]=e;return{props:{color:t},style:{color:(r.vars||r).palette[t].main}}}))]}}))),b=(0,n.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),S=(0,n.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,d.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((0,l.A)((e=>{let{theme:r}=e;return{stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink},style:k||{animation:`${v} 1.4s ease-in-out infinite`}}]}}))),j=a.forwardRef((function(e,r){const t=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:a,color:o="primary",disableShrink:n=!1,size:l=40,style:h,thickness:p=3.6,value:m=0,variant:f="indeterminate",...v}=t,y={...t,color:o,disableShrink:n,size:l,thickness:p,value:m,variant:f},k=(e=>{const{classes:r,variant:t,color:a,disableShrink:s}=e,o={root:["root",t,`color${(0,d.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(t)}`,s&&"circleDisableShrink"]};return(0,i.A)(o,u,r)})(y),j={},w={},N={};if("determinate"===f){const e=2*Math.PI*((g-p)/2);j.strokeDasharray=e.toFixed(3),N["aria-valuenow"]=Math.round(m),j.strokeDashoffset=`${((100-m)/100*e).toFixed(3)}px`,w.transform="rotate(-90deg)"}return(0,x.jsx)(A,{className:(0,s.A)(k.root,a),style:{width:l,height:l,...w,...h},ownerState:y,ref:r,role:"progressbar",...N,...v,children:(0,x.jsx)(b,{className:k.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,x.jsx)(S,{className:k.circle,style:j,ownerState:y,cx:g,cy:g,r:(g-p)/2,fill:"none",strokeWidth:p})})})}))}}]);
//# sourceMappingURL=774.75a89a51.chunk.js.map