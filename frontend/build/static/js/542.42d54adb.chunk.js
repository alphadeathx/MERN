"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[542],{999:(e,t,s)=>{s.d(t,{Z:()=>r});s(791);var n=s(523),a=s(184);const r=e=>e.href?(0,a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,a.jsx)(n.rU,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,a.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},373:(e,t,s)=>{s.d(t,{Z:()=>a});s(791);var n=s(184);const a=e=>(0,n.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},434:(e,t,s)=>{s.d(t,{Z:()=>c});s(791);var n=s(921),a=s(999),r=s(184);const c=e=>(0,r.jsx)(n.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,r.jsx)(a.Z,{onClick:e.onClear,children:"Okay"}),children:(0,r.jsx)("p",{children:e.error})})},921:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(791),a=s(164),r=s(549),c=s(422),o=s(184);const l=e=>{const t=(0,o.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,o.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,o.jsx)("h2",{children:e.header})}),(0,o.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,o.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,o.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return a.createPortal(t,document.getElementById("modal-hook"))},i=e=>(0,o.jsxs)(n.Fragment,{children:[e.show&&(0,o.jsx)(c.Z,{onClick:e.onCancel}),(0,o.jsx)(r.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,o.jsx)(l,{...e})})]})},508:(e,t,s)=>{s.d(t,{x:()=>a});var n=s(791);const a=()=>{const[e,t]=(0,n.useState)(!1),[s,a]=(0,n.useState)(),r=(0,n.useRef)([]),c=(0,n.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const o=new AbortController;r.current.push(o);try{const a=await fetch(e,{method:s,body:n,headers:c,signal:o.signal}),l=await a.json();if(r.current=r.current.filter((e=>e!==o)),!a.ok)throw new Error(l.message);return t(!1),l}catch(l){throw a(l.message),t(!1),l}}),[]);return(0,n.useEffect)((()=>()=>{r.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:s,sendRequest:c,clearError:()=>{a(null)}}}},542:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var n=s(791),a=s(523),r=s(184);const c=e=>(0,r.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:(0,r.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})});var o=s(373);const l=e=>(0,r.jsx)("li",{className:"user-item",children:(0,r.jsx)(o.Z,{className:"user-item__content",children:(0,r.jsxs)(a.rU,{to:"/".concat(e.id,"/places"),children:[(0,r.jsx)("div",{className:"user-item__image",children:(0,r.jsx)(c,{image:"".concat("https://peter-app2-78161232811b.herokuapp.com").concat(e.image),alt:e.name})}),(0,r.jsxs)("div",{className:"user-item__info",children:[(0,r.jsx)("h2",{children:e.name}),(0,r.jsxs)("h3",{children:[e.placeCount," ",1===e.placeCount?"\u5730\u9ede":"\u5730\u9ede*"]})]})]})})}),i=e=>0===e.items.length?(0,r.jsx)("div",{className:"center",children:(0,r.jsx)(o.Z,{children:(0,r.jsx)("h2",{children:"\u627e\u4e0d\u5230\u8a72\u540d\u4f7f\u7528\u8005."})})}):(0,r.jsx)("ul",{className:"users-list",children:e.items.map((e=>(0,r.jsx)(l,{id:e.id,image:e.image,name:e.name,placeCount:e.places.length},e.id)))});var d=s(434),h=s(895),u=s(508);const m=()=>{const{isLoading:e,error:t,sendRequest:s,clearError:a}=(0,u.x)(),[c,o]=(0,n.useState)();return(0,n.useEffect)((()=>{(async()=>{try{const e=await s("https://peter-app2-78161232811b.herokuapp.com/api/users");o(e.users)}catch(e){}})()}),[s]),(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)(d.Z,{error:t,onClear:a}),e&&(0,r.jsx)("div",{className:"center",children:(0,r.jsx)(h.Z,{})}),!e&&c&&(0,r.jsx)(i,{items:c})]})}}}]);
//# sourceMappingURL=542.42d54adb.chunk.js.map