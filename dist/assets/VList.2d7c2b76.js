import{n as ot,am as rt,r as _,ag as ut,an as dt,y as V,o as xe,q as Le,v as P,ao as ct,C as x,x as te,f as o,s as m,z as Z,ap as J,aq as Y,ak as B,ar as ee,as as ye,D as _e,t as U,aj as E,at as Se,al as F,au as vt,G as ft,H as mt,I as ne,M as se,O as ie,av as Be,R as A,c as S,aw as Ve,e as R,i as H,p as j,ax as oe,u as ke,ay as $e,az as gt,b as pt,T as $,L as W,g as z,ab as le,aA as ht,a8 as Te,ae as yt,aB as De,aC as Me,S as _t,U as Re,W as Ne,aD as Ge,X as Oe,Z as Ue,_ as St,N as Ee,a7 as Vt,w as kt,a0 as Fe,a1 as Ct,a2 as He,aE as je,a3 as We,a4 as ze,a9 as bt,aa as wt,af as Ce,ad as be,aF as It,h as we,Q as At,aG as D}from"./index.dac6d4ee.js";const Ie="/assets/heart.f3fcd020.svg",Ae="/assets/heart-active.d7694286.svg",Pt="/assets/repost.c552515b.svg";const Ke=(e,s)=>{const t=e.__vccOpts||e;for(const[l,n]of s)t[l]=n;return t},K=e=>(ft("data-v-4c40eb61"),e=e(),mt(),e),xt={key:0,class:"d-flex align-center"},Lt=["src"],Bt=["src"],$t=x("\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u043C"),Tt=K(()=>P("b",null," VK ",-1)),Dt=K(()=>P("b",null," Telegram ",-1)),Mt=K(()=>P("h3",null,"\u0412\u0445\u043E\u0434",-1)),Rt=x(" \u0432\u043E\u0439\u0442\u0438 "),Nt=x(" \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F "),Gt=K(()=>P("h3",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",-1)),Ot=x(" \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F "),Ut=x(" \u0432\u0445\u043E\u0434 "),Et={__name:"Rating",props:["_id","rating"],setup(e){const s=e,t=ot(),l=rt(),n=s._id;let a=s.rating,i=_(""),u=_(""),v=_(""),g=_(""),f=_(!1);function r(){f.value=!0,d.value=!1}function c(){l.login(i.value,u.value),f.value=!1}let d=_(!1);function h(){d.value=!0,f.value=!1}function k(){l.registration(v.value,g.value),d.value=!1}let I=_(!1),L=_(Ie);function w(){if(!l.isAuth){r();return}I.value=!I.value,I.value?(L.value=Ae,a.likes++):(L.value=Ie,a.likes--),t.likeRecipe(I.value,n,l.user.email)}let p=_(!1);function q(){if(!l.isAuth){r();return}p.value=!0}function N(){t.shareRecipe(n)}return ut(()=>{a.likedBy.find(G=>G.email==l.user.email)&&(L.value=Ae,I.value=!0)}),(G,C)=>{const O=dt("ShareNetwork");return V(a)?(xe(),Le("div",xt,[P("div",{class:"rating-item ml-0",onClick:w},[P("img",{src:V(L),height:"24",class:ct(["mr-1",{liked:V(I)}])},null,10,Lt),x(" "+te(V(a).likes),1)]),P("div",{class:"rating-item",onClick:q},[P("img",{src:V(Pt),height:"24",class:"mr-1"},null,8,Bt),x(" "+te(V(a).reposts),1)]),o(ee,{modelValue:V(p),"onUpdate:modelValue":C[0]||(C[0]=y=>B(p)?p.value=y:p=y)},{default:m(()=>[o(Z,null,{default:m(()=>[o(J,null,{default:m(()=>[$t]),_:1}),o(Y,null,{default:m(()=>[o(O,{network:"VK",url:"http://localhost:5173/recipe?_id="+V(n),title:"\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u044B\u0439 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A Chefee | "+V(a).title,description:"\u0413\u043E\u0442\u043E\u0432\u044C\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0430\u043C\u0438!",hashtags:"\u0440\u0435\u0446\u0435\u043F\u0442\u044B,\u0435\u0434\u0430",onOpen:N},{default:m(()=>[Tt]),_:1},8,["url","title"]),o(O,{network:"Telegram",url:"http://localhost:5173/recipe?_id="+V(n),title:"\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u044B\u0439 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A Chefee | "+V(a).title,description:"\u0413\u043E\u0442\u043E\u0432\u044C\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0430\u043C\u0438!",hashtags:"\u0440\u0435\u0446\u0435\u043F\u0442\u044B,\u0435\u0434\u0430",onOpen:N},{default:m(()=>[Dt]),_:1},8,["url","title"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(ee,{modelValue:V(f),"onUpdate:modelValue":C[3]||(C[3]=y=>B(f)?f.value=y:f=y)},{default:m(()=>[o(Z,{style:{"min-width":"40vw"}},{default:m(()=>[o(J,null,{default:m(()=>[Mt]),_:1}),o(Y,null,{default:m(()=>[o(ye,null,{default:m(()=>[o(_e,null,{default:m(()=>[o(U,{cols:"12"},{default:m(()=>[o(E,{modelValue:V(i),"onUpdate:modelValue":C[1]||(C[1]=y=>B(i)?i.value=y:i=y),placeholder:"email",variant:"outlined","hide-details":"auto",density:"compact",class:"search-input"},null,8,["modelValue"])]),_:1}),o(U,{cols:"12"},{default:m(()=>[o(E,{modelValue:V(u),"onUpdate:modelValue":C[2]||(C[2]=y=>B(u)?u.value=y:u=y),placeholder:"\u043F\u0430\u0440\u043E\u043B\u044C",variant:"outlined","hide-details":"auto",density:"compact",class:"search-input",type:"password"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),o(Se,null,{default:m(()=>[o(F,{onClick:c},{default:m(()=>[Rt]),_:1}),o(F,{onClick:h},{default:m(()=>[Nt]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(ee,{modelValue:V(d),"onUpdate:modelValue":C[6]||(C[6]=y=>B(d)?d.value=y:d=y)},{default:m(()=>[o(Z,{style:{"min-width":"30vw"}},{default:m(()=>[o(J,null,{default:m(()=>[Gt]),_:1}),o(Y,null,{default:m(()=>[o(ye,null,{default:m(()=>[o(_e,null,{default:m(()=>[o(U,{cols:"12"},{default:m(()=>[o(E,{modelValue:V(v),"onUpdate:modelValue":C[4]||(C[4]=y=>B(v)?v.value=y:v=y),placeholder:"email",variant:"outlined","hide-details":"auto",density:"compact",class:"search-input"},null,8,["modelValue"])]),_:1}),o(U,{cols:"12"},{default:m(()=>[o(E,{modelValue:V(g),"onUpdate:modelValue":C[5]||(C[5]=y=>B(g)?g.value=y:g=y),placeholder:"\u043F\u0430\u0440\u043E\u043B\u044C",variant:"outlined","hide-details":"auto",density:"compact",class:"search-input",type:"password"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),o(Se,null,{default:m(()=>[o(F,{onClick:k},{default:m(()=>[Ot]),_:1}),o(F,{onClick:r},{default:m(()=>[Ut]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])):vt("",!0)}}},cl=Ke(Et,[["__scopeId","data-v-4c40eb61"]]),Ft="/assets/health-indicator-healthy.13adbf96.svg";const Ht={class:"health-index"},jt=["src"],Wt={__name:"HealthIndex",props:["healthIndex"],setup(e){let t=e.healthIndex;return(l,n)=>(xe(),Le("div",Ht,[x(te(V(t))+" / 10 ",1),P("img",{src:V(Ft),height:"24",class:"ml-1"},null,8,jt)]))}},vl=Ke(Wt,[["__scopeId","data-v-8e7452cc"]]);const zt=ne({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...se()},setup(e,s){let{attrs:t}=s;const{themeClasses:l}=ie(e),{backgroundColorClasses:n,backgroundColorStyles:a}=Be(A(e,"color")),i=S(()=>{const u={};return e.length&&(u[e.vertical?"maxHeight":"maxWidth"]=Ve(e.length)),e.thickness&&(u[e.vertical?"borderRightWidth":"borderTopWidth"]=Ve(e.thickness)),u});return R(()=>o("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,n.value],style:[i.value,a.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const ae=Symbol.for("vuetify:list");function qe(){const e=H(ae,{hasPrepend:_(!1),updateHasPrepend:()=>null}),s={hasPrepend:_(!1),updateHasPrepend:t=>{t&&(s.hasPrepend.value=t)}};return j(ae,s),e}function Qe(){return H(ae,null)}const Kt={open:e=>{let{id:s,value:t,opened:l,parents:n}=e;if(t){const a=new Set;a.add(s);let i=n.get(s);for(;i!=null;)a.add(i),i=n.get(i);return a}else return l.delete(s),l},select:()=>null},Xe={open:e=>{let{id:s,value:t,opened:l,parents:n}=e;if(t){let a=n.get(s);for(l.add(s);a!=null&&a!==s;)l.add(a),a=n.get(a);return l}else l.delete(s);return l},select:()=>null},qt={open:Xe.open,select:e=>{let{id:s,value:t,opened:l,parents:n}=e;if(!t)return l;const a=[];let i=n.get(s);for(;i!=null;)a.push(i),i=n.get(i);return new Set(a)}},re=e=>{const s={select:t=>{let{id:l,value:n,selected:a}=t;if(e&&!n){const i=Array.from(a.entries()).reduce((u,v)=>{let[g,f]=v;return f==="on"?[...u,g]:u},[]);if(i.length===1&&i[0]===l)return a}return a.set(l,n?"on":"off"),a},in:(t,l,n)=>{let a=new Map;for(const i of t||[])a=s.select({id:i,value:!0,selected:new Map(a),children:l,parents:n});return a},out:t=>{const l=[];for(const[n,a]of t.entries())a==="on"&&l.push(n);return l}};return s},Ze=e=>{const s=re(e);return{select:l=>{let{selected:n,id:a,...i}=l;const u=n.has(a)?new Map([[a,n.get(a)]]):new Map;return s.select({...i,id:a,selected:u})},in:(l,n,a)=>{let i=new Map;return l!=null&&l.length&&(i=s.in(l.slice(0,1),n,a)),i},out:(l,n,a)=>s.out(l,n,a)}},Qt=e=>{const s=re(e);return{select:l=>{let{id:n,selected:a,children:i,...u}=l;return i.has(n)?a:s.select({id:n,selected:a,children:i,...u})},in:s.in,out:s.out}},Xt=e=>{const s=Ze(e);return{select:l=>{let{id:n,selected:a,children:i,...u}=l;return i.has(n)?a:s.select({id:n,selected:a,children:i,...u})},in:s.in,out:s.out}},Zt=e=>{const s={select:t=>{let{id:l,value:n,selected:a,children:i,parents:u}=t;const v=new Map(a),g=[l];for(;g.length;){const r=g.shift();a.set(r,n?"on":"off"),i.has(r)&&g.push(...i.get(r))}let f=u.get(l);for(;f;){const r=i.get(f),c=r.every(h=>a.get(h)==="on"),d=r.every(h=>!a.has(h)||a.get(h)==="off");a.set(f,c?"on":d?"off":"indeterminate"),f=u.get(f)}return e&&!n&&Array.from(a.entries()).reduce((c,d)=>{let[h,k]=d;return k==="on"?[...c,h]:c},[]).length===0?v:a},in:(t,l,n)=>{let a=new Map;for(const i of t||[])a=s.select({id:i,value:!0,selected:new Map(a),children:l,parents:n});return a},out:(t,l)=>{const n=[];for(const[a,i]of t.entries())i==="on"&&!l.has(a)&&n.push(a);return n}};return s},M=Symbol.for("vuetify:nested"),Je={id:_(),root:{register:()=>null,unregister:()=>null,parents:_(new Map),children:_(new Map),open:()=>null,select:()=>null,opened:_(new Set),selected:_(new Map),selectedValues:_([])}},Jt=oe({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),Yt=e=>{let s=!1;const t=_(new Map),l=_(new Map),n=ke(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Xt(e.mandatory);case"leaf":return Qt(e.mandatory);case"independent":return re(e.mandatory);case"single-independent":return Ze(e.mandatory);case"classic":default:return Zt(e.mandatory)}}),i=S(()=>{if(typeof e.openStrategy=="function")return e.openStrategy;switch(e.openStrategy){case"list":return qt;case"single":return Kt;case"multiple":default:return Xe}}),u=ke(e,"selected",e.selected,r=>a.value.in(r,t.value,l.value),r=>a.value.out(r,t.value,l.value));$e(()=>{s=!0});function v(r){const c=[];let d=r;for(;d!=null;)c.unshift(d),d=l.value.get(d);return c}const g=gt("nested"),f={id:_(),root:{opened:n,selected:u,selectedValues:S(()=>{const r=[];for(const[c,d]of u.value.entries())d==="on"&&r.push(c);return r}),register:(r,c,d)=>{c&&r!==c&&l.value.set(r,c),d&&t.value.set(r,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],r])},unregister:r=>{if(s)return;t.value.delete(r);const c=l.value.get(r);if(c){var d;const h=(d=t.value.get(c))!=null?d:[];t.value.set(c,h.filter(k=>k!==r))}l.value.delete(r),n.value.delete(r)},open:(r,c,d)=>{g.emit("click:open",{id:r,value:c,path:v(r),event:d});const h=i.value.open({id:r,value:c,opened:new Set(n.value),children:t.value,parents:l.value,event:d});h&&(n.value=h)},select:(r,c,d)=>{g.emit("click:select",{id:r,value:c,path:v(r),event:d});const h=a.value.select({id:r,value:c,selected:new Map(u.value),children:t.value,parents:l.value,event:d});h&&(u.value=h);const k=i.value.select({id:r,value:c,selected:new Map(u.value),opened:new Set(n.value),children:t.value,parents:l.value,event:d});k&&(n.value=k)},children:t,parents:l}};return j(M,f),f.root},Ye=(e,s)=>{const t=H(M,Je),l=S(()=>{var a;return(a=e.value)!=null?a:pt().toString()}),n={...t,id:l,open:(a,i)=>t.root.open(l.value,a,i),isOpen:S(()=>t.root.opened.value.has(l.value)),parent:S(()=>t.root.parents.value.get(l.value)),select:(a,i)=>t.root.select(l.value,a,i),isSelected:S(()=>t.root.selected.value.get(l.value)==="on"),isIndeterminate:S(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:S(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,s),$e(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),s&&j(M,n),n},el=()=>{const e=H(M,Je);j(M,{...e,isGroupActivator:!0})},tl=ne({name:"VListGroupActivator",setup(e,s){let{slots:t}=s;return el(),()=>{var l;return(l=t.default)==null?void 0:l.call(t)}}}),ll=oe({activeColor:String,color:String,collapseIcon:{type:$,default:"$collapse"},expandIcon:{type:$,default:"$expand"},prependIcon:$,appendIcon:$,fluid:Boolean,subgroup:Boolean,value:null,...W()}),et=z()({name:"VListGroup",props:{title:String,...ll()},setup(e,s){let{slots:t}=s;const{isOpen:l,open:n}=Ye(A(e,"value"),!0),a=Qe(),i=g=>{n(!l.value,g)},u=S(()=>({onClick:i,class:"v-list-group__header"})),v=S(()=>l.value?e.collapseIcon:e.expandIcon);return R(()=>{var g;return o(e.tag,{class:["v-list-group",{"v-list-group--prepend":a==null?void 0:a.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup}]},{default:()=>[t.activator&&o(le,{defaults:{VListItem:{active:l.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&v.value,appendIcon:e.appendIcon||!e.subgroup&&v.value,title:e.title,value:e.value}}},{default:()=>[o(tl,null,{default:()=>[t.activator({props:u.value,isOpen:l})]})]}),o(ht,null,{default:()=>[Te(o("div",{class:"v-list-group__items"},[(g=t.default)==null?void 0:g.call(t)]),[[yt,l.value]])]})]})}),{}}});function al(e){return De(e,Object.keys(et.props))}const nl=Me("v-list-item-subtitle"),sl=Me("v-list-item-title"),Pe=z()({name:"VListItem",directives:{Ripple:_t},props:{active:Boolean,activeColor:String,activeClass:String,appendAvatar:String,appendIcon:$,disabled:Boolean,lines:String,nav:Boolean,prependAvatar:String,prependIcon:$,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,link:Boolean,...Re(),...Ne(),...Ge(),...Oe(),...Ue(),...St(),...W(),...se(),...Ee({variant:"text"})},setup(e,s){let{attrs:t,slots:l}=s;const n=Vt(e,t),a=S(()=>{var b;return(b=e.value)!=null?b:n.href.value}),{select:i,isSelected:u,isIndeterminate:v,isGroupActivator:g,root:f,parent:r}=Ye(a,!1),c=Qe(),d=S(()=>{var b;return e.active||((b=n.isExactActive)==null?void 0:b.value)||u.value}),h=S(()=>e.rounded||e.nav),k=S(()=>{var b;return{color:d.value&&(b=e.activeColor)!=null?b:e.color,variant:e.variant}});kt(()=>{var b;return(b=n.isExactActive)==null?void 0:b.value},b=>{b&&r.value!=null&&f.open(r.value,!0)},{immediate:!0});const{themeClasses:I}=ie(e),{borderClasses:L}=Fe(e),{colorClasses:w,colorStyles:p,variantClasses:q}=Ct(k),{densityClasses:N}=He(e),{dimensionStyles:G}=je(e),{elevationClasses:C}=We(e),{roundedClasses:O}=ze(h),y=S(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Q=S(()=>({isActive:d.value,select:i,isSelected:u.value,isIndeterminate:v.value}));return R(()=>{var b,ue,de,ce,ve,fe,me;const at=n.isLink.value?"a":e.tag,ge=!c||u.value||d.value,nt=l.title||e.title,st=l.subtitle||e.subtitle,it=!!(l.append||e.appendAvatar||e.appendIcon),X=!!(l.prepend||e.prependAvatar||e.prependIcon),T=!e.disabled&&(e.link||n.isClickable.value||e.value!=null&&!!c);return c==null||c.updateHasPrepend(X),Te(o(at,{class:["v-list-item",{"v-list-item--active":d.value,"v-list-item--disabled":e.disabled,"v-list-item--link":T,"v-list-item--nav":e.nav,"v-list-item--prepend":!X&&(c==null?void 0:c.hasPrepend.value),[`${e.activeClass}`]:d.value},I.value,L.value,ge?w.value:void 0,N.value,C.value,y.value,O.value,q.value],style:[ge?p.value:void 0,G.value],href:n.href.value,tabindex:T?0:void 0,onClick:T&&(pe=>{var he;g||((he=n.navigate)==null||he.call(n,pe),e.value!=null&&i(!u.value,pe))})},{default:()=>[wt(T||d.value,"v-list-item"),X&&o(le,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[o("div",{class:"v-list-item__prepend"},[e.prependAvatar&&o(Ce,{key:"prepend-avatar"},null),e.prependIcon&&o(be,{key:"prepend-icon"},null),(b=l.prepend)==null?void 0:b.call(l,Q.value)])]}),o("div",{class:"v-list-item__content"},[nt&&o(sl,{key:"title"},{default:()=>[(ue=(de=l.title)==null?void 0:de.call(l,{title:e.title}))!=null?ue:e.title]}),st&&o(nl,{key:"subtitle"},{default:()=>[(ce=(ve=l.subtitle)==null?void 0:ve.call(l,{subtitle:e.subtitle}))!=null?ce:e.subtitle]}),(fe=l.default)==null?void 0:fe.call(l,Q.value)]),it&&o(le,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[o("div",{class:"v-list-item__append"},[(me=l.append)==null?void 0:me.call(l,Q.value),e.appendIcon&&o(be,{key:"append-icon"},null),e.appendAvatar&&o(Ce,{key:"append-avatar"},null)])]})]}),[[bt("ripple"),T]])}),{}}}),il=ne({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...W()},setup(e,s){let{slots:t}=s;const{textColorClasses:l,textColorStyles:n}=It(A(e,"color"));return R(()=>{var a,i;const u=!!(t.default||e.title);return o(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},l.value],style:{textColorStyles:n}},{default:()=>[u&&o("div",{class:"v-list-subheader__text"},[(a=(i=t.default)==null?void 0:i.call(t))!=null?a:e.title])]})}),{}}}),tt=z()({name:"VListChildren",props:{items:Array},setup(e,s){let{slots:t}=s;return qe(),()=>{var l,n,a;return(l=(n=t.default)==null?void 0:n.call(t))!=null?l:(a=e.items)==null?void 0:a.map(i=>{let{children:u,props:v,type:g,raw:f}=i;if(g==="divider"){var r,c;return(r=(c=t.divider)==null?void 0:c.call(t,{props:v}))!=null?r:o(zt,v,null)}if(g==="subheader"){var d,h;return(d=(h=t.subheader)==null?void 0:h.call(t,{props:v}))!=null?d:o(il,v,{default:t.subheader})}const k={subtitle:t.subtitle?w=>{var p;return(p=t.subtitle)==null?void 0:p.call(t,{...w,item:f})}:void 0,prepend:t.prepend?w=>{var p;return(p=t.prepend)==null?void 0:p.call(t,{...w,item:f})}:void 0,append:t.append?w=>{var p;return(p=t.append)==null?void 0:p.call(t,{...w,item:f})}:void 0,default:t.default?w=>{var p;return(p=t.default)==null?void 0:p.call(t,{...w,item:f})}:void 0,title:t.title?w=>{var p;return(p=t.title)==null?void 0:p.call(t,{...w,item:f})}:void 0},[I,L]=al(v);return u?o(et,we({value:v==null?void 0:v.value},I),{activator:w=>{let{props:p}=w;return t.header?t.header({...v,...p}):o(Pe,we(v,p),k)},default:()=>o(tt,{items:u},t)}):t.item?t.item(v):o(Pe,v,k)})}}}),ol=oe({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function rl(e,s){const t=D(s,e.itemType,"item"),l=typeof s=="string"?s:D(s,e.itemTitle),n=D(s,e.itemValue,void 0),a=D(s,e.itemChildren),i=e.itemProps===!0?De(s,["children"])[1]:D(s,e.itemProps),u={title:l,value:n,...i};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&a?lt(e,a):void 0,raw:s}}function lt(e,s){const t=[];for(const l of s)t.push(rl(e,l));return t}function ul(e){return{items:S(()=>lt(e,e.items))}}const fl=z()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Jt({selectStrategy:"single-leaf",openStrategy:"list"}),...Re(),...Ne(),...Ge(),...Oe(),itemType:{type:String,default:"type"},...ol(),...Ue(),...W(),...se(),...Ee({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,s){let{slots:t}=s;const{items:l}=ul(e),{themeClasses:n}=ie(e),{backgroundColorClasses:a,backgroundColorStyles:i}=Be(A(e,"bgColor")),{borderClasses:u}=Fe(e),{densityClasses:v}=He(e),{dimensionStyles:g}=je(e),{elevationClasses:f}=We(e),{roundedClasses:r}=ze(e),{open:c,select:d}=Yt(e),h=S(()=>e.lines?`v-list--${e.lines}-line`:void 0),k=A(e,"activeColor"),I=A(e,"color");return qe(),At({VListGroup:{activeColor:k,color:I},VListItem:{activeClass:A(e,"activeClass"),activeColor:k,color:I,density:A(e,"density"),disabled:A(e,"disabled"),lines:A(e,"lines"),nav:A(e,"nav"),variant:A(e,"variant")}}),R(()=>o(e.tag,{class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},n.value,a.value,u.value,v.value,f.value,h.value,r.value],style:[i.value,g.value]},{default:()=>[o(tt,{items:l.value},t)]})),{open:c,select:d}}});export{vl as H,cl as R,fl as V,Ke as _,zt as a,Pe as b};
