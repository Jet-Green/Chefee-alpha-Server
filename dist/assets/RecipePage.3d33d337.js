import{aH as k,n as B,c as y,ag as j,y as a,o as n,q as f,f as e,aI as H,B as o,s as t,D as c,t as l,v as r,x as u,C as i,E as p,A as x,F as v,G as S,H as w}from"./index.8c6aa1b0.js";import{_ as C,H as P,R as D,V as F,b as L,a as N}from"./VList.9b6fcb93.js";const h=_=>(S("data-v-e51946ec"),_=_(),w(),_),b={key:0,style:{"min-height":"90vh",display:"flex","justify-content":"center","align-items":"center"}},q={class:"recipe-title"},E=h(()=>r("h3",null,"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",-1)),z=h(()=>r("h3",null,"\u0418\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B",-1)),A=h(()=>r("h3",null,"\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F",-1)),G={__name:"RecipePage",setup(_){const I=k(),m=B();let g=I.query._id,s=y(()=>m.currentRecipe),V=y(()=>(s.value.health.protein/61.25*2.5+s.value.health.fat/61.25*2.5+s.value.health.carbohydrates/61.25*2.5+s.value.health.kcal/700*2.5).toFixed(1));return j(()=>{m.getRecipeById(g)}),(M,T)=>a(s)._id?(n(),o(c,{key:1,class:"d-flex justify-center"},{default:t(()=>[e(l,{cols:"12",lg:"8"},{default:t(()=>[e(c,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[r("h1",q,u(a(s).title),1)]),_:1})]),_:1}),e(c,{class:"rating-tray"},{default:t(()=>[e(l,{cols:"4"},{default:t(()=>[i(" \u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F "+u(a(s).time),1)]),_:1}),e(l,{class:"d-flex justify-center",cols:"4"},{default:t(()=>[e(P,{healthIndex:a(V)},null,8,["healthIndex"])]),_:1}),e(l,{class:"d-flex align-center justify-end",cols:"4"},{default:t(()=>[e(D,{_id:a(g),rating:a(s)},null,8,["_id","rating"])]),_:1})]),_:1}),e(c,{class:"slider"},{default:t(()=>[e(l,null,{default:t(()=>[e(p,{src:a(s).previewImage},null,8,["src"])]),_:1})]),_:1}),e(c,{class:"description"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[E,r("p",null,u(a(s).description),1)]),_:1})]),_:1}),e(c,{class:"ingredients"},{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[z]),_:1}),e(l,{class:"d-flex justify-end"},{default:t(()=>[i(" \u041F\u043E\u0440\u0446\u0438\u0438 "+u(a(s).portions),1)]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(l,null,{default:t(()=>[e(F,null,{default:t(()=>[(n(!0),f(v,null,x(a(s).ingredients,d=>(n(),o(L,null,{default:t(()=>[i(u(d.name)+" "+u(d.amount)+" ",1),e(N,{color:"secondary"})]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{class:"instruction"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[A]),_:1}),(n(!0),f(v,null,x(a(s).steps,(d,R)=>(n(),o(l,{cols:"12"},{default:t(()=>[R%2==0?(n(),o(c,{key:0},{default:t(()=>[e(l,{cols:"12",sm:"6"},{default:t(()=>[e(p,{src:d.image},null,8,["src"])]),_:2},1024),e(l,{cols:"12",sm:"6"},{default:t(()=>[i(u(d.description),1)]),_:2},1024)]),_:2},1024)):(n(),o(c,{key:1},{default:t(()=>[e(l,{cols:"12",sm:"6"},{default:t(()=>[i(u(d.description),1)]),_:2},1024),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(p,{src:d.image},null,8,["src"])]),_:2},1024)]),_:2},1024))]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})):(n(),f("div",b,[e(H,{size:50,color:"accent",indeterminate:""})]))}},O=C(G,[["__scopeId","data-v-e51946ec"]]);export{O as default};
