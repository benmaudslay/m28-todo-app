(this["webpackJsonpm28-todo-app"]=this["webpackJsonpm28-todo-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(7),i=n.n(o),r=(n(12),n(5)),d=n(4),s=(n(13),n(0)),l=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],o=n[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),console.log("The form was submitted"),e.handleForm(a),o("")},children:Object(s.jsx)("input",{type:"text",value:a,onChange:function(e){return o(e.target.value)}})})},u=(n(15),function(e){var t=e.todoDate;return Object(s.jsx)("p",{className:"date",children:t.toLocaleString()})}),h=function(e){var t=e.value,n=e.checked,c=e.handleChecked,a=e.handleDelete,o=e.date;return Object(s.jsxs)("li",{className:"itemWrapper ".concat(n?"checked":void 0),children:[Object(s.jsxs)("div",{className:"itemContainer",children:[Object(s.jsx)("p",{children:t}),Object(s.jsxs)("div",{className:"actionWrapper",children:[Object(s.jsx)("input",{type:"checkbox",className:"actionButton",name:"",id:"",checked:n,onChange:c}),Object(s.jsx)("p",{className:"actionButton bin",onClick:a,children:"\u2620\ufe0f"})]})]}),Object(s.jsx)(u,{todoDate:o})]})},j=function(e){return Object(s.jsx)("ul",{children:e.todos.map((function(t,n){return Object(s.jsx)(h,{value:t.value,checked:t.checked,date:t.date,handleDelete:function(){return e.handleDelete(n)},handleChecked:function(){return e.handleChecked(n)}},n)}))})},b=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)("h1",{children:"Todo List"}),Object(s.jsx)(l,{handleForm:function(e){a([].concat(Object(r.a)(n),[{value:e,checked:!1,date:new Date}]))}}),Object(s.jsx)(j,{todos:n,handleChecked:function(e){var t=Object(r.a)(n);t[e].checked=!t[e].checked,a(t)},handleDelete:function(e){var t=Object(r.a)(n);t.splice(e,1),a(t)}})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.0497acba.chunk.js.map