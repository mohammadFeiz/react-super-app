import e,{useEffect as t,useState as r}from"react";import{Storage as i}from"aio-utils";import{Icon as o}from"@mdi/react";import{mdiMenu as a,mdiChevronRight as n,mdiChevronLeft as s,mdiChevronDown as l}from"@mdi/js";import d from"react-virtual-dom";import u from"aio-popup";import"./index.css";import{jsx as c}from"react/jsx-runtime";import{jsxs as p}from"react/jsx-runtime";function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}export default class f{constructor(e){_defineProperty(this,"backButtonCallBack",void 0),_defineProperty(this,"rootProps",void 0),_defineProperty(this,"popup",void 0),_defineProperty(this,"getNavId",void 0),_defineProperty(this,"setNavId",void 0),_defineProperty(this,"removeModal",void 0),_defineProperty(this,"openSide",void 0),_defineProperty(this,"closeSide",void 0),_defineProperty(this,"addModal",void 0),_defineProperty(this,"setBackButtonCallBack",void 0),_defineProperty(this,"render",void 0),_defineProperty(this,"addAlert",void 0),_defineProperty(this,"addSnakebar",void 0),_defineProperty(this,"addConfirm",void 0),_defineProperty(this,"addPrompt",void 0),RSAValidate(e||{});let{rtl:t}=e;this.rootProps=e,this.backButtonCallBack=!0,this.popup=new u({rtl:t}),this.removeModal=e=>this.popup.removeModal(e),this.addModal=e=>this.popup.addModal(e),this.setBackButtonCallBack=e=>this.backButtonCallBack=e,this.getNavId=()=>"",this.closeSide=()=>{},this.setNavId=()=>{},this.openSide=()=>{},this.render=()=>c(ReactSuperApp,{rootProps:this.rootProps,popup:this.popup,getActions:({getNavId:e,setNavId:t,openSide:r,closeSide:i})=>{this.getNavId=e,this.setNavId=t,this.openSide=r,this.closeSide=i}}),this.addAlert=e=>this.popup.addAlert(e),this.addSnakebar=e=>this.popup.addSnackebar(e),this.addConfirm=e=>this.popup.addConfirm(e),this.addPrompt=e=>this.popup.addPrompt(e),window.history.pushState({},""),window.onpopstate=()=>{setTimeout(()=>window.history.pushState({},""),100);try{!0===this.backButtonCallBack?this.removeModal():"function"==typeof this.backButtonCallBack&&this.backButtonCallBack()}catch{}}}};function ReactSuperApp(e){let{rootProps:n,getActions:s,popup:l}=e,{splash:u,splashTime:f=7e3,id:m,nav:h,header:v,headerContent:b,side:y,title:N,subtitle:$=()=>"",rtl:g,className:x,body:_,maxWidth:S}=n,[R,w]=r(!!u),[P]=r(new i("rsa-cache-"+m)),k="function"==typeof h.items?h.items():h.items,[A,C]=r(!1);function I(e){return e&&!1!==V(e)?e:h.id&&!1!==V(h.id)?h.id:k.filter(({show:e=()=>!0})=>e())[0].id}function j(){return A}function B(e){h.cache&&P.save("navId",e),C(e)}t(()=>{let e;C(h.cache?I(P.load("navId",I())):I()),u&&setTimeout(()=>w(!1),f),s({openSide:O,closeSide:E,setNavId:B,getNavId:j})},[]);let M=!1;function V(e){return M=!1,function e(t,r){if(!M)for(let i=0;i<t.length;i++){if(M)return;let o=t[i],{show:a=()=>!0}=o;if(!a())continue;if(o.id===r){M=o;break}let n=o.items;n&&e(n,r)}}(k,e),M}function z(e){return h&&k&&k.length&&!1!==A?{className:"of-visible"+("bottom"===e?" rsa-bottom-menu-container":""),html:c(Navigation,{nav:h,navId:A,setNavId:B,type:e,rtl:!!g,navItems:k,navItems:k})}:{}}function O(){l.addModal({position:g?"right":"left",id:"rsadefaultsidemodal",setAttrs(e){if("backdrop"===e)return{className:"rsa-sidemenu-backdrop"}},body:({close:e})=>(function e(t){if(!y)return null;let r="function"==typeof y.items?y.items():y.items;return c(SideMenu,{...{...y,attrs:y.attrs,items:r,onClose:()=>t()}})})(e)})}function E(){l.removeModal("rsadefaultsidemodal")}return c("div",{className:"rvd-container rsa-container"+(x?" "+x:""),style:{direction:g?"rtl":"ltr"},children:p("div",{className:"rsa",style:{maxWidth:S},children:[function e(){var t;if("string"!=typeof A)return null;let r=V(A),i="rsa-main";i+=x?" "+x:"",i+=g?" rtl":" ltr";let n={className:i},s;return n.row=[z("side"),(s=_(t=r),{flex:1,column:[function e(t){let r="function"==typeof v?v():v;if(!1===r)return{};if(r)return{style:{flex:"none",width:"100%"},className:"rsa-header of-visible align-v",html:r};let i;i=!1===t?"":N?N(h):"function"==typeof t.text?t.text():t.text;let n=$(h);return i||y||b?{style:{flex:"none"},className:"rsa-header of-visible align-v w-100",row:[{size:60,show:!!y,html:c(o,{path:a,size:1}),className:"align-vh",onClick:()=>O()},{show:!!i,column:[{html:i,className:"rsa-header-title"},{show:!!n,html:n,className:"rsa-header-subtitle"}]},{show:!!N||!!y,flex:1},{flex:N||y?void 0:1,show:!!b,html:()=>b(),className:"of-visible"}]}:{}}("string"==typeof A&&V(A)),{flex:1,html:c("div",{className:"rsa-body",children:s})},z("bottom")]})],c(d,{rootNode:n})}(),l.render(),R&&!!u&&u()]})})}function Navigation(e){let{nav:t,navId:i,setNavId:a,rtl:u,navItems:p,type:f}=e,[m,h]=r({});function v(e,t){let{text:r,marquee:i}=e;r="function"==typeof r?r():r;let o;return(o=i?c("marquee",{behavior:"scroll",scrollamount:3,direction:"right",children:r}):r,"side"===t)?{html:o,className:"align-v"}:"bottom"===t?{html:o,className:"rsa-bottom-menu-item-text align-vh"}:{}}function b(e,r=0){let{id:d,icon:p,items:f,disabled:b}=e,y=void 0===m[d]||m[d];return{className:"rsa-navigation-item"+(d===i?" active":""),onClick:b?void 0:()=>{var e;let t;return f?(t=void 0===m[e=d]||m[e],void h({...m,[e]:!t})):a(d)},row:[{size:16*r},{show:!0===t.nested,size:24,html:f?c(o,{path:y?l:u?s:n,size:1}):"",className:"align-vh"},{show:!!p,size:48,html:()=>"function"==typeof p?p():p,className:"align-vh"},v(e,"side")]}}return"bottom"===f?c(d,{rootNode:{className:"rsa-bottom-menu",hide_sm:!0,hide_md:!0,hide_lg:!0,row:p.filter(({show:e=()=>!0})=>e()).map(e=>(function e(t){let{icon:r,id:o,disabled:n}=t;return{flex:1,className:"rsa-bottom-menu-item of-visible"+(o===i?" active":""),onClick:n?void 0:()=>a(o),column:[{show:!r,flex:1},{show:!!r,flex:2},{show:!!r,html:()=>"function"==typeof r?r():r,className:"of-visible rsa-bottom-menu-item-icon align-vh"},{show:!!r,flex:1},v(t,"bottom"),{flex:1}]}})(e))}}):c(d,{rootNode:{hide_xs:!0,className:"rsa-navigation",column:[t.header?{html:t.header()}:{size:12},function e(t,r){return{flex:1,className:"ofy-auto",column:t.filter(({show:e=()=>!0})=>e()).map((t,i)=>{if(t.items){let o=void 0===m[t.id]||m[t.id],a=[b(t,r)];return o&&a.push(e(t.items,r+1)),{column:a}}return b(t,r)})}}(p,0),t.footer?{html:t.footer()}:{size:12}]}})}function SideMenu(e){let{attrs:t={},header:r,items:i,onClose:o,footer:a}=e;return c(d,{rootNode:{attrs:t,className:"rsa-sidemenu"+(t.className?" "+t.className:""),column:[r?{html:r(),className:"rsa-sidemenu-header"}:{},{flex:1,column:i.map((e,t)=>{let{icon:r=()=>c("div",{style:{width:12}}),text:i,attrs:a={},onClick:n=()=>{},show:s=()=>!0}=e,l=s();return{style:a.style,show:!1!==l,size:36,className:"rsa-sidemenu-item"+(a.className?" "+a.className:""),onClick(){n(e),o()},row:[{size:48,html:"function"==typeof r?r():r,className:"align-vh"},{html:i,className:"align-v"}]}})},a?{html:a(),className:"rsa-sidemenu-footer"}:{}]}})}let RSANavInterface=`
{
  id?:string,
  items:[],
  header?:()=>React.ReactNode,
  footer?:()=>React.ReactNode,
  cache?:boolean,
  disabled?:boolean
}
`,RSANavItemInterface=`
{
  id:string,
  text:string | ()=>string,
  icon?:React.ReactNode || ()=>React.ReactNode,
  items?:[],
  show?:()=>boolean
}
`;function RSAValidate(e){let t=RSAValidateError(e);t&&alert(t)}function RSAValidateError(e){let t=["id","rtl","title","nav","subtitle","body","header","headerContent","maxWidth","side","theme"];for(let r in e)if(-1===t.indexOf(r))return`
        react-super-app error => invalid props (${r}). 
        valid properties are 'id','rtl','title','nav','subtitle','body','header','headerContent','maxWidth','side','theme'
      `;if(void 0!==e.rtl&&"boolean"!=typeof e.rtl)return`
        react-super-app error => rtl props should be boolean. 
      `;if(!e.id||"string"!=typeof e.id)return`
        react-super-app error => id props should be an string but is ${e.id}. 
      `;if(void 0!==e.title&&"function"!=typeof e.title)return`
        react-super-app error => title props should be a functon that get nav item as parameter and returns string. 
      `;if(void 0!==e.subtitle&&"function"!=typeof e.subtitle)return`
        react-super-app error => subtitle props should be a functon that get nav item as parameter and returns string. 
      `;if(void 0!==e.headerContent&&"function"!=typeof e.headerContent)return`
      react-super-app error => headerContent props should be a functon that returns html. 
    `;if("function"!=typeof e.body)return`
        react-super-app error => body props should be a funtion that returns html. 
      `;let i=RSAValidateNav(e.nav);if(i)return i;let o=RSAValidateSide(e.side);if(o)return o}function RSAValidateSide(e){if(!e)return;let t=["items","header","footer","attrs"];for(let r in e)if(-1===t.indexOf(r))return`
        react-super-app error => invalid side property (${r}). 
        valid side properties are 'items','header','footer','attrs'
      `;let i="each side item should be an object cointan {icon?:React.ReactNode | ()=>React.ReactNode,text:String,attrs?:object,show?:()=>boolean,onClick:function|undefined}";if(!e.items||!Array.isArray(e.items)&&"function"!=typeof e.items)return`
      react-super-app error => side.items should be an array of objects or function that returns array of objects 
      ${i}
    `;for(let o=0;o<e.items.length;o++){let{items:a}=e,n=("function"==typeof a?a():a)[o],{text:s,show:l=()=>!0,attrs:d={}}=n,u=["text","icon","attrs","show","onClick"];for(let c in n)if(-1===u.indexOf(c))return`
          react-super-app error => side.items[${o}].${c} is not a valid side item property.
          ${i}
        `;if("function"!=typeof l)return`
        react-super-app error => side.items[${o}].show should be a function that returns boolean.
        ${i}
      `;if("object"!=typeof d||Array.isArray(d))return`
        react-super-app error => side.items[${o}].attrs should be an object contain dom attributes.
        ${i}
      `;if(!s||"string"!=typeof s)return`react-super-app error => side.items[${o}].text should be an string`}}function RSAValidateNav(e){if("object"!=typeof e||Array.isArray(e))return`
      react-super-app error => nav props should be an object contain ${RSANavInterface}.
      each nav item should be an object contain ${RSANavItemInterface}
    `;let t=["id","items","header","footer","cache","nested"];for(let r in e)if(-1===t.indexOf(r))return`
        react-super-app error => invalid nav property (${r}). 
        valid nav properties are ${t.join(" - ")}
      `;if(e.id&&"string"!=typeof e.id)return"react-super-app error => exist nav.id should be an string";if(!e.items||"function"!=typeof e.items)return`
    react-super-app error => nav.items should be a function that returns array of nav items.
    each nav item type is:
    ${RSANavItemInterface}
  `;let i=RSAValidateNavItems(("function"==typeof e.items?e.items():e.items)||[]);if(i)return i}function RSAValidateNavItems(e,t){t=t||"nav",e=e||[];let r=`
    nav item should be an object contain 
    ${RSANavItemInterface}
  `;for(let i=0;i<e.length;i++){let o=e[i],{id:a,text:n,show:s=()=>!0,render:l}=o,d=[],u=["id","items","icon","show","text","render","disabled"];for(let c in o)if(-1===u.indexOf(c))return`
          react-super-app error => ${t}.items[${i}].${c} is not a valid nav item property.
          ${r}
        `;if(l&&"function"!=typeof l)return`
        react-super-app error => ${t}.items[${i}].render should be a function that returns html.
        ${r}
      `;if("function"!=typeof s)return`
        react-super-app error => ${t}.items[${i}].show should be a function that returns boolean.
        ${r}
      `;if(!a||"string"!=typeof a)return`
        react-super-app error => ${t}.items[${i}].id should be an string.
        ${r}
      `;if(-1!==d.indexOf(a))return`
        react-super-app error => ${t}.items[${i}].id is duplicate.
        ${r}
      `;if(d.push(o.id),!n||"string"!=typeof n)return`react-super-app error => ${t}.items[${i}].text should be an string`;let p=RSAValidateNavItems(o.items||[],t+`.items[${i}]`);if(p)return p}}