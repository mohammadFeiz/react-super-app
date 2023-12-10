function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}import t,{Component as e}from"react";import r from"aio-storage";import{Icon as i}from"@mdi/react";import{mdiMenu as s,mdiChevronRight as a,mdiChevronLeft as o,mdiChevronDown as n}from"@mdi/js";import l from"react-virtual-dom";import h from"aio-popup";import"./index.css";import{jsx as p}from"react/jsx-runtime";import{jsxs as d}from"react/jsx-runtime";export default class u{constructor(t={}){_defineProperty(this,"setBackbuttonCallBack",t=>this.backbuttonCallback=t),_defineProperty(this,"render",()=>p(RSAAPP,{...this.props})),_defineProperty(this,"addModal",t=>this.props.popup.addModal(t)),_defineProperty(this,"addAlert",t=>this.props.popup.addAlert(t)),_defineProperty(this,"removeModal",t=>this.props.popup.removeModal(t)),_defineProperty(this,"addSnakebar",t=>this.props.popup.addSnakebar(t)),_defineProperty(this,"addConfirm",t=>this.props.popup.addConfirm(t)),_defineProperty(this,"addPrompt",t=>this.props.popup.addPrompt(t)),RSAValidate(t);let{rtl:e,maxWidth:r,AppContext:i,nav:s,side:a,title:o,subtitle:n,headerContent:l,actions:d,header:u,body:m,id:c,theme:f}=t;this.backbuttonCallback=!0,this.props={rtl:e,maxWidth:r,AppContext:i,nav:s,side:a,title:o,subtitle:n,headerContent:l,actions:d,header:u,body:m,id:c,theme:f,popup:new h({rtl:e}),getActions:({getNavId:t,setNavId:e,openSide:r,closeSide:i})=>{this.getNavId=t,this.setNavId=e,this.openSide=r,this.closeSide=i}},window.history.pushState({},""),window.history.pushState({},""),window.onpopstate=()=>{window.history.pushState({},"");try{!0===this.backbuttonCallback?this.removeModal():"function"==typeof this.backbuttonCallback&&this.backbuttonCallback()}catch{}}}};function RSAAPP(t){return p(ReactSuperApp,{...{...t,getActions:e=>t.getActions({...e})}})}class ReactSuperApp extends e{constructor(t){super(t);let{touch:e="ontouchstart"in document.documentElement,splash:i,splashTime:s=7e3,id:a,nav:o}=t;this.storage=r("rsa-cache-"+a),window.oncontextmenu=function(t){return t.preventDefault(),t.stopPropagation(),!1};let n=!!o&&(o.cache?this.initNavId(this.storage.load({name:"navId",def:this.initNavId()})):this.initNavId());this.state={navId:n,splash:i,showSplash:!0,confirm:!1,touch:e,changeTheme:e=>{let{themes:r}=t;this.theme=this.theme||0,"init"===e?this.theme=this.storage.load({name:"theme",value:0}):"number"==typeof e?this.theme=e:this.theme++,this.storage.save({value:this.theme,name:"theme"}),this.theme>r.length-1&&(this.theme=0);let i;try{i=r[this.theme]||{}}catch{i={}}for(let s in i)document.documentElement.style.setProperty(s,i[s])},openSide:this.openSide.bind(this),closeSide:this.closeSide.bind(this),setNavId:this.setNavId.bind(this),getNavId:this.getNavId.bind(this)},t.themes&&this.state.changeTheme("init"),i&&setTimeout(()=>this.setState({splash:!1}),s),t.getActions({...this.state})}getNavId(){return this.state.navId}setNavId(t){let{nav:e}=this.props;e.cache&&this.storage.save({name:"navId",value:t}),this.setState({navId:t})}initNavId(t){let{nav:e}=this.props;return!!e&&((this.navItems="function"==typeof e.items?e.items():e.items,t&&!1!==this.getNavById(t))?t:e.id&&!1!==this.getNavById(e.id)?e.id:(!!this.navItems||!!this.navItems.length)&&this.navItems.filter(({show:t=()=>!0})=>t())[0].id)}header_layout(t){let{header:e}=this.props,r="function"==typeof e?e():e;if(!1===r)return!1;if(r)return{style:{flex:"none",width:"100%"},align:"v",className:"rsa-header of-visible",html:r};let{headerContent:a,side:o,title:n=()=>t?t.text:"",subtitle:l=()=>{}}=this.props,h=n(t),d=l(t);return(!!h||!!o||!!a)&&{style:{flex:"none",width:"100%"},align:"v",className:"rsa-header of-visible",row:[{size:60,show:!!o,html:p(i,{path:s,size:1}),align:"vh",attrs:{onClick:()=>this.openSide()}},{show:!!h,column:[{html:h,className:"rsa-header-title"},{show:!!d,html:d,className:"rsa-header-subtitle"}]},{show:!!n||!!o,flex:1},{flex:n||o?void 0:1,show:!!a,html:()=>a({...this.state}),className:"of-visible"}]}}getNavById(t){return this.res=!1,this.getNavById_req(this.navItems,t),this.res}getNavById_req(t,e){if(!this.res)for(let r=0;r<t.length;r++){if(this.res)return;let i=t[r],{show:s=()=>!0}=i;if(!s())continue;if(i.id===e){this.res=i;break}let a="function"==typeof i.items?i.items():i.items;a&&this.getNavById_req(a,e)}}getMainClassName(){let{rtl:t,className:e}=this.props,r="rsa-main";return r+=e?" "+e:"",r+=t?" rtl":" ltr"}navigation_layout(t){let{nav:e,rtl:r}=this.props;if(!e||!this.navItems||!this.navItems.length)return!1;let{navId:i}=this.state;return{className:"of-visible"+("bottom"===t?" rsa-bottom-menu-container":""),html:p(Navigation,{nav:e,navId:i,setNavId:t=>this.setNavId(t),type:t,rtl:r,navItems:this.navItems})}}page_layout({render:t}){let{body:e=()=>""}=this.props,{navId:r}=this.state,i=e({...this.state,render:t}),s=this.getNavById(r);return{flex:1,column:[this.header_layout(s),{flex:1,html:p("div",{className:"rsa-body",children:i})},this.navigation_layout("bottom")]}}renderMain(){let{navId:t}=this.state,{nav:e,style:r}=this.props;this.navItems="function"==typeof e.items?e.items():e.items;let i=!!e&&this.getNavById(t),s={style:r,className:this.getMainClassName()};return s.row=[this.navigation_layout("side"),this.page_layout(i)],p(l,{layout:s})}openSide(){let{popup:t,rtl:e}=this.props;t.addModal({position:e?"right":"left",id:"rsadefaultsidemodal",backdrop:{attrs:{className:"rsa-sidemenu-backdrop"}},body:{render:({close:t})=>this.renderSide(t)}})}closeSide(){let{popup:t}=this.props;t.removeModal("rsadefaultsidemodal")}renderSide(t){let{side:e={},rtl:r}=this.props,i="function"==typeof e.items?e.items():e.items;return p(SideMenu,{...e,items:i,rtl:r,onClose:()=>t()})}render(){let{splash:t}=this.state,{style:e,className:r,maxWidth:i,popup:s,rtl:a,theme:o}=this.props;return p("div",{className:"rsa-container"+(r?" "+r:"")+(o?" "+o:""),style:{...e,direction:a?"rtl":"ltr"},children:d("div",{className:"rsa",style:{maxWidth:i},children:[this.renderMain(),s.render(),t&&t()]})})}}class Navigation extends e{constructor(...t){super(...t),_defineProperty(this,"state",{openDic:{}})}header_layout(){let{nav:t}=this.props;return t.header?{html:t.header()}:{size:12}}footer_layout(){let{nav:t}=this.props;return t.footer?{html:t.footer()}:{size:12}}items_layout(t,e){return{flex:1,className:"ofy-auto",column:t.filter(({show:t=()=>!0})=>t()).map((t,r)=>{if(t.items){let{openDic:i}=this.state,s=void 0===i[t.id]||i[t.id],a=[this.item_layout(t,e)];return s&&a.push(this.items_layout(t.items,e+1)),{column:a}}return this.item_layout(t,e)})}}toggle(t){let{openDic:e}=this.state,r=void 0===e[t]||e[t];this.setState({openDic:{...e,[t]:!r}})}text_layout({text:t,marquee:e},r){t="function"==typeof t?t():t;let i;return(i=e?p("marquee",{behavior:"scroll",scrollamount:3,direction:"right",children:t}):t,"side"===r)?{html:i,align:"v"}:"bottom"===r?{html:i,align:"vh",className:"rsa-bottom-menu-item-text"}:void 0}item_layout(t,e=0){let{setNavId:r,navId:s,rtl:l}=this.props,{openDic:h}=this.state,{id:d,icon:u,items:m}=t,c=d===s,f=void 0===h[d]||h[d];return{className:"rsa-navigation-item"+(c?" active":""),attrs:{onClick:()=>m?this.toggle(d):r(d)},row:[{size:16*e},{size:24,html:m?p(i,{path:f?n:l?o:a,size:1}):"",align:"vh"},{show:!!u,size:48,html:()=>"function"==typeof u?u(c):u,align:"vh"},this.text_layout(t,"side")]}}bottomMenu_layout(t){let{icon:e,id:r}=t,{navId:i,setNavId:s}=this.props,a=r===i;return{flex:1,className:"rsa-bottom-menu-item of-visible"+(a?" active":""),attrs:{onClick:()=>s(r)},column:[{show:!e,flex:1},{show:!!e,flex:2},{show:!!e,html:()=>"function"==typeof e?e(a):e,align:"vh",className:"of-visible"},{show:!!e,flex:1},this.text_layout(t,"bottom"),{flex:1}]}}render(){let{type:t,navItems:e}=this.props;return"bottom"===t?p(l,{layout:{className:"rsa-bottom-menu",hide_sm:!0,hide_md:!0,hide_lg:!0,row:e.filter(({show:t=()=>!0})=>t()).map(t=>this.bottomMenu_layout(t))}}):p(l,{layout:{hide_xs:!0,className:"rsa-navigation",column:[this.header_layout(),this.items_layout(e,0),this.footer_layout()]}})}}class SideMenu extends e{header_layout(){let{header:t}=this.props;return!!t&&{html:t(),className:"rsa-sidemenu-header"}}items_layout(){let{items:t,onClose:e}=this.props;return{flex:1,column:t.map((t,r)=>{let{icon:i=()=>p("div",{style:{width:12}}),text:s,attrs:a={},onClick:o=()=>{},show:n=()=>!0}=t,l=n();return{style:a.style,show:!1!==l,size:36,className:"rsa-sidemenu-item"+(a.className?" "+a.className:""),onClick(){o(t),e()},row:[{size:48,html:"function"==typeof i?i():i,align:"vh"},{html:s,align:"v"}]}})}}footer_layout(){let{footer:t}=this.props;return!!t&&{html:t(),className:"rsa-sidemenu-footer"}}componentDidMount(){setTimeout(()=>this.setState({open:!0}),0)}render(){let{attrs:t={}}=this.props;return p(l,{layout:{attrs:t,className:"rsa-sidemenu"+(t.className?" "+t.className:""),column:[this.header_layout(),this.items_layout(),this.footer_layout()]}})}}let RSANavInterface=`
{
  id?:string,
  items:[],
  header?:()=>React.ReactNode,
  footer?:()=>React.ReactNode,
  cache?:boolean
}
`,RSANavItemInterface=`
{
  id:string,
  text:string | ()=>string,
  icon?:React.ReactNode || ()=>React.ReactNode,
  items?:[],
  show?:()=>boolean
}
`;function RSAValidate(t){let e=RSAValidateError(t);e&&alert(e)}function RSAValidateError(t){let e=["id","rtl","title","nav","subtitle","AppContext","actions","body","header","headerContent","maxWidth","side","theme"];for(let r in t)if(-1===e.indexOf(r))return`
        react-super-app error => invalid props (${r}). 
        valid properties are 'id','rtl','title','nav','subtitle','AppContext','actions','body','header','headerContent','maxWidth','side','theme'
      `;if(void 0!==t.actions&&("object"!=typeof t.actions||Array.isArray(t.actions)))return`
        react-super-app error => actions props should be an object. 
      `;if(void 0!==t.rtl&&"boolean"!=typeof t.rtl)return`
        react-super-app error => rtl props should be boolean. 
      `;if(!t.id||"string"!=typeof t.id)return`
        react-super-app error => id props should be an string but is ${t.id}. 
      `;if(void 0!==t.title&&"function"!=typeof t.title)return`
        react-super-app error => title props should be a functon that get nav item as parameter and returns string. 
      `;if(void 0!==t.subtitle&&"function"!=typeof t.subtitle)return`
        react-super-app error => subtitle props should be a functon that get nav item as parameter and returns string. 
      `;if(void 0!==t.headerContent&&"function"!=typeof t.headerContent)return`
      react-super-app error => headerContent props should be a functon that returns html. 
    `;if("function"!=typeof t.body)return`
        react-super-app error => body props should be a funtion that returns html. 
      `;let i=RSAValidateNav(t.nav);if(i)return i;let s=RSAValidateSide(t.side);if(s)return s}function RSAValidateSide(t){if(!t)return;let e=["items","header","footer","attrs"];for(let r in t)if(-1===e.indexOf(r))return`
        react-super-app error => invalid side property (${r}). 
        valid nav properties are 'items','header','footer','attrs'
      `;let i="each side item should be an object cointan {icon?:React.ReactNode | ()=>React.ReactNode,text:String,attrs?:object,show?:()=>boolean,onClick:function|undefined}";if(!t.items||!Array.isArray(t.items)&&"function"!=typeof t.items)return`
      react-super-app error => side.items should be an array of objects or function that returns array of objects 
      ${i}
    `;for(let s=0;s<t.items.length;s++){let a=t.items[s],{text:o,show:n=()=>!0,attrs:l={}}=a,h=["text","icon","attrs","show","onClick"];for(let p in a)if(-1===h.indexOf(p))return`
          react-super-app error => side.items[${s}].${p} is not a valid side item property.
          ${i}
        `;if("function"!=typeof n)return`
        react-super-app error => side.items[${s}].show should be a function that returns boolean.
        ${i}
      `;if("object"!=typeof l||Array.isArray(l))return`
        react-super-app error => side.items[${s}].attrs should be an object contain dom attributes.
        ${i}
      `;if(!o||"string"!=typeof o)return`react-super-app error => side.items[${s}].text should be an string`}}function RSAValidateNav(t){if("object"!=typeof t||Array.isArray(t))return`
      react-super-app error => nav props should be an object contain ${RSANavInterface}.
      each nav item should be an object contain ${RSANavItemInterface}
    `;let e=["id","items","header","footer","cache"];for(let r in t)if(-1===e.indexOf(r))return`
        react-super-app error => invalid nav property (${r}). 
        valid nav properties are 'id','items','header','footer','cache'
      `;if(t.id&&"string"!=typeof t.id)return"react-super-app error => exist nav.id should be an string";if(!t.items||!Array.isArray(t.items)&&"function"!=typeof t.items)return`
    react-super-app error => nav.items should be an array or function.
  `;let i=RSAValidateNavItems(t.items);if(i)return i}function RSAValidateNavItems(t=[],e="nav"){let r=`
    nav item should be an object contain 
    ${RSANavItemInterface}
  `;for(let i=0;i<t.length;i++){let s=t[i],{id:a,text:o,show:n=()=>!0,render:l}=s,h=[],p=["id","items","icon","show","text","render"];for(let d in s)if(-1===p.indexOf(d))return`
          react-super-app error => ${e}.items[${i}].${d} is not a valid nav item property.
          ${r}
        `;if(l&&"function"!=typeof l)return`
        react-super-app error => ${e}.items[${i}].render should be a function that returns html.
        ${r}
      `;if("function"!=typeof n)return`
        react-super-app error => ${e}.items[${i}].show should be a function that returns boolean.
        ${r}
      `;if(!a||"string"!=typeof a)return`
        react-super-app error => ${e}.items[${i}].id should be an string.
        ${r}
      `;if(-1!==h.indexOf(a))return`
        react-super-app error => ${e}.items[${i}].id is duplicate.
        ${r}
      `;if(h.push(s.id),!o||"string"!=typeof o)return`react-super-app error => ${e}.items[${i}].text should be an string`;let u=RSAValidateNavItems(s.items,e+`.items[${i}]`);if(u)return u}}