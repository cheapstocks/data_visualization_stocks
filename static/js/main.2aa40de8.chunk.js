(this.webpackJsonpvisualise_fundamentals=this.webpackJsonpvisualise_fundamentals||[]).push([[0],{320:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(62),o=n(19),i=n(17),r=n(321),s=n(322),j=n(167),u=n(168),d=n(72),h=n(69),f=n(170),l=window.location.origin;function b(t,e,n){return fetch("".concat(l,"/data/").concat(t,"/").concat(n,"/").concat(e,".json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}function O(t,e){return b(t,e,"info").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))}var x=n(18),m=n(14);var v=n(80);Object(a.render)(Object(m.jsx)(v.a,{children:Object(m.jsxs)(x.c,{children:[Object(m.jsx)(x.a,{exact:!0,path:"/dividends/:market/:id",component:function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],l=Object(c.useState)("$"),v=Object(i.a)(l,2),y=v[0],p=v[1],g=Object(x.f)();return Object(c.useEffect)((function(){var t,e;(t=g.market,e=g.id,b(t,e,"dividends").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))).then((function(t){var e,n=t,c=[],i=Object(o.a)(n);try{for(i.s();!(e=i.n()).done;){var r=e.value,s=new Date(r.Date);c.push({x:s.toLocaleDateString(),y:r.Dividends})}}catch(j){i.e(j)}finally{i.f()}a(c)})),O(g.market,g.id).then((function(t){p(t.currency)}))}),[g.id,g.market]),Object(m.jsx)("div",{style:{width:800,height:600},children:Object(m.jsx)(r.a,{children:Object(m.jsxs)(s.a,{width:500,height:300,data:n,margin:{top:5,right:30,left:20,bottom:5},children:[Object(m.jsx)(j.a,{dataKey:"x"}),Object(m.jsx)(u.a,{tickFormatter:function(t){return"".concat(y," ").concat(t)}}),Object(m.jsx)(d.a,{}),Object(m.jsx)(h.a,{}),Object(m.jsx)(f.a,{type:"monotone",dataKey:"y",name:"Dividends",stroke:"#8884d8",dot:!1})]})})})}}),Object(m.jsx)(x.a,{exact:!0,path:"/price/:market/:id",component:function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],l=Object(c.useState)("$"),v=Object(i.a)(l,2),y=v[0],p=v[1],g=Object(x.f)();return Object(c.useEffect)((function(){var t,e;(t=g.market,e=g.id,b(t,e,"prices").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))).then((function(t){var e,n=t,c=[],i=Object(o.a)(n);try{for(i.s();!(e=i.n()).done;){var r=e.value,s=new Date(r.Date);c.push({x:s.toLocaleDateString(),y:r.Close})}}catch(j){i.e(j)}finally{i.f()}a(c)})),O(g.market,g.id).then((function(t){p(t.currency)}))}),[g.id,g.market]),Object(m.jsx)("div",{style:{width:800,height:600},children:Object(m.jsx)(r.a,{children:Object(m.jsxs)(s.a,{width:800,height:600,data:n,margin:{top:5,right:30,left:20,bottom:5},children:[Object(m.jsx)(j.a,{dataKey:"x"}),Object(m.jsx)(u.a,{tickFormatter:function(t){return"".concat(y," ").concat(t)}}),Object(m.jsx)(d.a,{}),Object(m.jsx)(h.a,{}),Object(m.jsx)(f.a,{type:"monotone",dataKey:"y",name:"Historical Price",stroke:"#8884d8",dot:!1})]})})})}})]})}),document.getElementById("root"))}},[[320,1,2]]]);
//# sourceMappingURL=main.2aa40de8.chunk.js.map