import{b as n,f as p,d,u as c,v as o,x as t,$ as r,M as s,r as l,m as i,S as u,U as m,T as y,V as f,a1 as h,n as v}from"./index.js";const S=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=d({name:"ElCard"}),w=d({...b,props:S,setup(_){const a=c("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[i(u(e.header),1)])],2)):m("v-if",!0),y("div",{class:r(s(a).e("body")),style:f(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var C=h(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const $=v(C);export{$ as E};