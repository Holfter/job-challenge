(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{196:function(e,t,c){},214:function(e,t,c){},216:function(e,t,c){},224:function(e,t,c){},225:function(e,t,c){},360:function(e,t,c){},361:function(e,t,c){},362:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(72),s=c.n(r),i=c(12),o=c.n(i),j=c(23),l=c(10),u=(c(196),c(166)),d=c.n(u).a.create({baseURL:"http://localhost:3001"}),b=c(47),h=c(21),O=c(31),p=(c(214),c(122)),m=c(68),x=c(2),f=function(e){var t=e.price,c=Object(a.useState)([]),n=Object(l.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(!1),u=Object(l.a)(i,2),b=u[0],h=u[1],f=Object(a.useState)(""),v=Object(l.a)(f,2),N=v[0],C=v[1],g=Object(a.useState)(!1),y=Object(l.a)(g,2),k=y[0],D=y[1],P=Object(a.useState)(0),_=Object(l.a)(P,2),S=_[0],w=_[1],I=Object(a.useState)(""),V=Object(l.a)(I,2),A=V[0],E=V[1];Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("https://sharenergy.herokuapp.com/clientes").then((function(e){s(e.data.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[b]),Object(a.useEffect)((function(){for(var e=0,t=0;t<r.length;t++)e<100&&(e+=r[t].usinas[0].percentualDeParticipacao);w(e)}),[r]);var F=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("https://sharenergy.herokuapp.com/clientes/".concat(t._id)).then((function(e){return e.data.cliente}));case 2:c=e.sent,a={numeroCliente:0===t.numeroCliente.length?c.numeroCliente:t.numeroCliente,nomeCliente:0===t.nomeCliente.length?c.nomeCliente:t.nomeCliente,usinas:[{usinaId:0===t.usinaId.length?c.usinas[0].usinaId:t.usinaId,percentualDeParticipacao:1*t.percentualDeParticipacao<=100-(S-c.usinas[0].percentualDeParticipacao)?t.percentualDeParticipacao:c.usinas[0].percentualDeParticipacao}]},d.patch("https://sharenergy.herokuapp.com/clientes/".concat(t._id),a),window.location.reload();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){return{numeroCliente:e.numeroCliente,nomeCliente:e.nomeCliente,usinas:[{usinaId:e.usinaId,percentualDeParticipacao:e.percentualDeParticipacao}]}},M=Object(p.a)(),B=M.register,L=M.handleSubmit,R=M.reset,W=M.defaultValues,q=Object(p.a)({mode:"onBlur"}),G=q.register,U=q.handleSubmit,K=q.reset,T=q.defaultValues,J=function(){var e=Object(j.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=1*t.percentualDeParticipacao,!(S<=100&&c<=100-S)){e.next=8;break}return e.next=4,d.post("https://sharenergy.herokuapp.com/clientes",H(t));case 4:R(Object(O.a)({},W)),E(""),e.next=9;break;case 8:E("Limite de participa\xe7\xe3o da usina atingido ou valor digitado n\xe3o disponivel");case 9:h(!b);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"crud",children:[Object(x.jsx)("h1",{children:"Adicionar cliente"}),Object(x.jsx)("p",{style:{color:"red"},children:A}),Object(x.jsxs)("form",{autoComplete:"off",className:"form",onSubmit:L(J),children:[Object(x.jsx)("input",Object(O.a)({placeholder:"Numero do Cliente",type:"number",min:"0"},B("numeroCliente",{required:!0}))),Object(x.jsx)("input",Object(O.a)({placeholder:"Nome"},B("nomeCliente",{required:!0}))),Object(x.jsx)("input",Object(O.a)({placeholder:"ID da usina",type:"number",min:"0"},B("usinaId",{required:!0}))),Object(x.jsx)("input",Object(O.a)({placeholder:"Participa\xe7\xe3o",type:"number",min:"0"},B("percentualDeParticipacao",{required:!0}))),Object(x.jsx)("button",{className:"crudSubmit",type:"submit",children:"Criar"})]}),Object(x.jsx)("div",{className:"client_list",children:Object(x.jsx)("div",{className:"client_item",children:Object(x.jsx)("table",{id:"customers",children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Nome"}),Object(x.jsx)("th",{children:"Numero"}),Object(x.jsx)("th",{children:"ID Usina"}),Object(x.jsx)("th",{children:"Participa\xe7\xe3o"}),Object(x.jsx)("th",{children:"Lucro"}),Object(x.jsx)("th",{}),Object(x.jsx)("th",{})]}),function(e){var c=[];return 0!==e.length&&c.push(e.map((function(e,c){return Object(x.jsxs)("tr",{className:"tr",children:[Object(x.jsxs)("td",{children:[Object(x.jsx)("img",{className:"clientPic",src:"".concat("/job-challenge","/client.PNG"),alt:"cliente"}),e.nomeCliente]}),Object(x.jsx)("td",{children:e.numeroCliente}),Object(x.jsx)("td",{children:e.usinas[0].usinaId}),Object(x.jsxs)("td",{children:[e.usinas[0].percentualDeParticipacao,"%"]}),Object(x.jsxs)("td",{children:["R$",(t/100*e.usinas[0].percentualDeParticipacao).toFixed(2)]}),Object(x.jsx)("td",{onClick:function(){var t;t=e._id,C(t),D(!k),K(Object(O.a)({},T))},children:Object(x.jsx)(m.c,{})}),Object(x.jsx)("td",{onClick:function(){return t=e._id,d.delete("https://sharenergy.herokuapp.com/clientes/".concat(t)),void h(!b);var t},children:Object(x.jsx)(m.d,{})})]},c)}))),c}(r)]})})})}),Object(x.jsxs)("div",{className:k?"editPopup show":"editPopup",children:[Object(x.jsx)("div",{className:"closePopup",children:Object(x.jsx)("span",{onClick:function(){return D(!k)},children:"X"})}),Object(x.jsxs)("form",{autoComplete:"off",className:"form",onSubmit:U(F),children:[Object(x.jsx)("input",Object(O.a)({placeholder:"Numero do Cliente",type:"number",min:"0"},G("numeroCliente"))),Object(x.jsx)("input",Object(O.a)({placeholder:"Nome"},G("nomeCliente"))),Object(x.jsx)("input",Object(O.a)({placeholder:"ID da usina",type:"number",min:"0"},G("usinaId"))),Object(x.jsx)("input",Object(O.a)({placeholder:"Participa\xe7\xe3o",type:"number",min:"0"},G("percentualDeParticipacao"))),Object(x.jsx)("input",Object(O.a)(Object(O.a)({},G("_id")),{},{type:"hidden",defaultValue:N})),Object(x.jsx)("button",{className:"crudSubmit",type:"submit",onClick:function(){D(!k)},children:"Atualizar"})]})]})]})},v=(c(216),function(){return Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsx)("div",{className:"sidebarLogo",children:Object(x.jsx)(b.b,{to:"/dashboard",children:"SHARENERGY"})}),Object(x.jsxs)("div",{className:"sidebar-navegation",children:[Object(x.jsx)(b.c,{activeClassName:"selected",to:"/dashboard",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(m.b,{}),Object(x.jsx)("span",{children:"Dashboard"})]})}),Object(x.jsx)(b.c,{activeClassName:"selected",to:"/clientes",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{}),Object(x.jsx)("span",{children:"Clientes"})]})})]})]})}),N=(c(224),function(e){for(var t=e.data,c=[],a=["tensao_V","corrente_A","potencia_kW","temperatura_C"],n=function(e){var n=a[e],r=t.map((function(e){return e[n]}),undefined),s=r.reduce((function(e,t){return e+t}),0)/r.length,i={name:n,average:s.toFixed(2)};c.push(i)},r=0;r<a.length;r++)n(r);return Object(x.jsxs)("div",{className:"cards-average",children:[Object(x.jsx)("h2",{className:"cardsTitle",children:"M\xe9dia do dia"}),Object(x.jsx)("div",{className:"cards",children:c.map((function(e,t){return Object(x.jsxs)("div",{className:"average-card",children:[Object(x.jsx)("img",{className:"cardImage",src:"".concat("/job-challenge","/").concat(e.name,".PNG"),alt:"img"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"cardName",children:e.name.toUpperCase()}),Object(x.jsx)("span",{className:"cardValue",children:e.average})]})]},t)}))})]})}),C=(c(225),c(364)),g=c(365),y=c(186),k=c(183),D=c(184),P=c(82),_=c(369),S=function(e){var t=e.handleChartOt,c=e.formatData,a=e.usinaData,n=e.chartOpt;function r(e){var t=e.payload,a=e.label;return e.active?Object(x.jsxs)("div",{className:"custom-tooltip",children:[Object(x.jsxs)("p",{className:"label",children:["Hora: ",c(a)]}),Object(x.jsxs)("p",{className:"payload",children:["Valor: ","".concat(t[0].value)]})]}):null}return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"chart",children:[Object(x.jsx)(C.a,{width:"100%",height:500,children:Object(x.jsxs)(g.a,{data:a,children:[Object(x.jsx)("defs",{children:Object(x.jsxs)("linearGradient",{id:"color",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(x.jsx)("stop",{offset:"0%",stopColor:"#2451B7",stopOpacity:.4}),Object(x.jsx)("stop",{offset:"75%",stopColor:"#2451B7",stopOpacity:.05})]})}),Object(x.jsx)(y.a,{dataKey:n,stroke:"#2451B7",fill:"url(#color)"}),Object(x.jsx)(k.a,{dataKey:"tempo_h",tickFormatter:function(e){return c(e)}}),Object(x.jsx)(D.a,{dataKey:n}),Object(x.jsx)(P.a,{content:Object(x.jsx)(r,{})}),Object(x.jsx)(_.a,{opacity:.5,vertical:!1})]})}),Object(x.jsx)("div",{className:"chart-options",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:"tensao_V"===n?"button active":"button",onClick:function(){return t("tensao_V")},children:"Tens\xe3o"}),Object(x.jsx)("button",{className:"corrente_A"===n?"button active":"button",onClick:function(){return t("corrente_A")},children:"Corrente"}),Object(x.jsx)("button",{className:"potencia_kW"===n?"button active":"button",onClick:function(){return t("potencia_kW")},children:"Pot\xeancia"}),Object(x.jsx)("button",{className:"temperatura_C"===n?"button active":"button",onClick:function(){return t("temperatura_C")},children:"Temperatura"})]})})]})})},w=(c(360),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=!0;return d.get("https://sharenergy.herokuapp.com/clientes").then((function(t){e&&n(t.data.data.slice(0,6))})),function(){return e=!1}}),[]),Object(x.jsxs)("div",{className:"clientes",children:[Object(x.jsx)("h1",{children:"Clientes"}),Object(x.jsxs)("div",{className:"clienteList",children:[c.map((function(e,t){return Object(x.jsxs)("div",{className:"clientCard",children:[Object(x.jsxs)("div",{children:["Nome: ",Object(x.jsx)("b",{children:e.nomeCliente})]}),Object(x.jsxs)("div",{children:["Numero: ",Object(x.jsx)("b",{children:e.numeroCliente})]}),Object(x.jsxs)("div",{children:["Usina id: ",Object(x.jsx)("b",{children:e.usinas[0].usinaId})]}),Object(x.jsxs)("div",{children:["Participa\xe7\xe3o: ",Object(x.jsxs)("b",{children:[e.usinas[0].percentualDeParticipacao,"%"]})]})]},t)})),Object(x.jsx)("div",{className:"verMais",children:c.length>5?Object(x.jsx)(b.b,{to:"/clientes",children:"Ver mais"}):""})]})]})}),I=(c(361),function(e){var t=e.handleChartOt,c=e.formatData,a=e.usinaData,n=e.chartOpt,r=e.price,s=e.average;return Object(x.jsxs)("div",{className:"dashboard",children:[Object(x.jsxs)("div",{className:"dashboard-top",children:[Object(x.jsx)("h1",{children:"Dashboard"}),Object(x.jsxs)("div",{className:"kwPrice-card",children:[Object(x.jsxs)("div",{children:[s.toFixed(2)," ",Object(x.jsx)("b",{children:"kWh"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"R$"})," ",r.toFixed(2)]})]})]}),Object(x.jsx)("div",{className:"ch",children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("div",{children:Object(x.jsx)(N,{data:a})}),Object(x.jsx)("div",{children:0!==a.length&&Object(x.jsx)(S,{handleChartOt:t,formatData:c,usinaData:a,chartOpt:n})})]})}),Object(x.jsx)(w,{})]})}),V=c(97),A=c.n(V);var E=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)("tensao_V"),i=Object(l.a)(s,2),u=i[0],O=i[1],p=Object(a.useState)(0),m=Object(l.a)(p,2),N=m[0],C=m[1],g=Object(a.useState)(0),y=Object(l.a)(g,2),k=y[0],D=y[1],P=n.a.useCallback((function(e){var t=_(e,2),c=t%1*60;return"".concat(parseInt(t),":").concat(parseInt(c))}),[]);function _(e,t){var c=Math.pow(10,t);return(Math.round(e*c+(t>0?1:0)*(Math.sign(e)*(10/Math.pow(100,t))))/c).toFixed(t)}return Object(a.useEffect)((function(){function e(e){var t=A()("".concat(P(_(e[0].tempo_h,2)),":00 am"),"HH:mm:ss a"),c=A()("".concat(P(_(e.at(-1).tempo_h,2)),":00 pm"),"HH:mm:ss a"),a=e.map((function(e){return e.potencia_kW}),this).reduce((function(e,t){return e+t}),0),n=A.a.duration(c.diff(t))._data;D(a/(n.minutes/60+n.hours)),C(a/(n.minutes/60+n.hours)*.95)}var t=function(){var t=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get("https://sharenergy.herokuapp.com/usina").then((function(t){r(t.data.data),e(t.data.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[P]),Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)("div",{className:"side",children:Object(x.jsx)(v,{})}),Object(x.jsx)(h.a,{exact:!0,path:"/dashboard",children:Object(x.jsx)("div",{children:Object(x.jsx)(I,{average:k,price:N,handleChartOt:function(e){O(e)},formatData:P,usinaData:c,chartOpt:u})})}),Object(x.jsx)(h.a,{path:"/clientes",children:Object(x.jsx)("div",{children:Object(x.jsx)(f,{price:N})})})]})})};s.a.render(Object(x.jsx)(E,{}),document.getElementById("root"))}},[[362,1,2]]]);
//# sourceMappingURL=main.2ab34e76.chunk.js.map