(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{14:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),c=a(9),n=a.n(c),u=(a(14),a(8)),i=a(2),j=a(0),l=function(e){var t=e.mensaje;return Object(j.jsx)("p",{className:"alert alert-danger error",children:t})},o=a(6),b=a.n(o),d=function(e){var t=e.guardarGasto,a=e.guardarCrearGasto,r=Object(s.useState)(""),c=Object(i.a)(r,2),n=c[0],u=c[1],o=Object(s.useState)(0),d=Object(i.a)(o,2),O=d[0],m=d[1],p=Object(s.useState)(!1),h=Object(i.a)(p,2),g=h[0],x=h[1];return Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),O<1||isNaN(O)||""===n.trim())x(!0);else{x(!1);var s={nombre:n,cantidad:O,id:b.a.generate()};t(s),a(!0),u(""),m(0)}},children:[Object(j.jsx)("h2",{children:"Gatos aqu\xed"}),g?Object(j.jsx)(l,{mensaje:"Ambos campos son obligatorios o Presupuesto incorrecto"}):null,Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Nombre Gasto"}),Object(j.jsx)("input",{type:"text",className:"u-full-width",placeholder:"Ej. Transporte",value:n,onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Cantidad Gasto"}),Object(j.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Ej. 300",value:O,onChange:function(e){return m(parseInt(e.target.value,10))}})]}),Object(j.jsx)("input",{type:"submit",className:"button-primary u-full-width button-gasto-submit",value:"agregar Gasto"})]})},O=function(e){var t=e.guardarPresupuesto,a=e.guardarRestante,r=e.actualizarPregunta,c=Object(s.useState)(0),n=Object(i.a)(c,2),u=n[0],o=n[1],b=Object(s.useState)(!1),d=Object(i.a)(b,2),O=d[0],m=d[1];return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)("h2",{children:"Coloca tu presupuesto inicial"}),O?Object(j.jsx)(l,{mensaje:"El presupuesto es incorrecto"}):null,Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u<1||isNaN(u)?m(!0):(m(!1),t(u),a(u),r(!1))},children:[Object(j.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Coloca tu presupuesto",onChange:function(e){o(parseInt(e.target.value,10))}}),Object(j.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Definir Presupuesto"})]})]})},m=function(e){var t=e.gasto;return Object(j.jsx)("li",{className:"gastos",children:Object(j.jsxs)("p",{children:[t.nombre,Object(j.jsxs)("span",{className:"gasto",children:["$ ",t.cantidad]})]})})},p=function(e){var t=e.ingreso;return Object(j.jsx)("li",{className:"gastos",children:Object(j.jsxs)("p",{children:[t.nombre,Object(j.jsxs)("span",{className:"ingreso",children:["$ ",t.cantidad]})]})})},h=function(e){var t=e.gastos,a=e.ingresos;return Object(j.jsxs)("div",{className:"gastos-realizados",children:[Object(j.jsx)("h2",{children:"Listado"}),t.map((function(e){return Object(j.jsx)(m,{gasto:e},e.id)})),a.map((function(e){return Object(j.jsx)(p,{ingreso:e},e.id)}))]})},g=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},x=function(e){var t=e.presupuesto,a=e.restante;return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsxs)("div",{className:"alert alert-primary",children:["Presupuesto inicial: $ ",t]}),Object(j.jsxs)("div",{className:g(t,a),children:["Cartera: $ ",a]})]})},f=function(e){var t=e.guardarGasto,a=e.guardarCrearGasto,r=Object(s.useState)(""),c=Object(i.a)(r,2),n=c[0],u=c[1],o=Object(s.useState)(0),d=Object(i.a)(o,2),O=d[0],m=d[1],p=Object(s.useState)(!1),h=Object(i.a)(p,2),g=h[0],x=h[1];return Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),O<1||isNaN(O)||""===n.trim())x(!0);else{x(!1);var s={nombre:n,cantidad:O,id:b.a.generate()};t(s),a(!0),u(""),m(0)}},children:[Object(j.jsx)("h2",{children:"Ingresos aqu\xed"}),g?Object(j.jsx)(l,{mensaje:"Ambos campos son obligatorios o Presupuesto incorrecto"}):null,Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Nombre Ingreso"}),Object(j.jsx)("input",{type:"text",className:"u-full-width",placeholder:"Ej. Transporte",value:n,onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)("div",{className:"campo",children:[Object(j.jsx)("label",{children:"Cantidad Ingreso"}),Object(j.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Ej. 300",value:O,onChange:function(e){return m(parseInt(e.target.value,10))}})]}),Object(j.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"agregar Ingreso"})]})};var v=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(0),n=Object(i.a)(c,2),l=n[0],o=n[1],b=Object(s.useState)(!0),m=Object(i.a)(b,2),p=m[0],g=m[1],v=Object(s.useState)([]),N=Object(i.a)(v,2),S=N[0],C=N[1],w=Object(s.useState)({}),y=Object(i.a)(w,2),G=y[0],I=y[1],P=Object(s.useState)(!1),E=Object(i.a)(P,2),F=E[0],D=E[1],T=Object(s.useState)([]),$=Object(i.a)(T,2),z=$[0],L=$[1],k=Object(s.useState)({}),q=Object(i.a)(k,2),A=q[0],B=q[1],J=Object(s.useState)(!1),R=Object(i.a)(J,2),M=R[0],H=R[1];return Object(s.useEffect)((function(){if(M){L([].concat(Object(u.a)(z),[A]));var e=l+A.cantidad;o(e),H(!1)}if(F){C([].concat(Object(u.a)(S),[G]));var t=l-G.cantidad;o(t),D(!1)}}),[A,M,z,l,G,F,S]),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Control de Gastos e Ingresos"}),Object(j.jsx)("div",{className:"contenido-principal contenido",children:p?Object(j.jsx)(O,{guardarPresupuesto:r,guardarRestante:o,actualizarPregunta:g}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"one-half column",children:Object(j.jsx)(f,{guardarGasto:B,guardarCrearGasto:H})}),Object(j.jsx)("div",{className:"one-half column",children:Object(j.jsx)(d,{guardarGasto:I,guardarCrearGasto:D})})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"two-half column",children:[Object(j.jsx)(h,{gastos:S,ingresos:z}),Object(j.jsx)(x,{presupuesto:a,restante:l})]})})]})})]})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),r(e),c(e),n(e)}))};n.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),N()}},[[24,1,2]]]);
//# sourceMappingURL=main.68ccd4c1.chunk.js.map