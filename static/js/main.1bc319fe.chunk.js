(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(16),c(2)),b=c(1),r=function(e){var t=e.tabs,c=Object(i.h)().tabId,a=t.find((function(e){return e.id===c}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Tabs page"}),Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)("li",{"data-cy":"tab",className:e.id===c?"is-active":"",children:Object(b.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"tab-content",children:a?null===a||void 0===a?void 0:a.content:"Please select a tab"})]})},j=function(){return Object(b.jsx)("h1",{className:"title",children:"Home Page"})},l=function(){return Object(b.jsx)("h1",{className:"title",children:"Page not found"})},d=c(8),o=c.n(d),h=function(){return Object(b.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(b.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})},children:"Tabs"})]})})})},x=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/",element:Object(b.jsx)(j,{})}),Object(b.jsx)(i.b,{path:"home",element:Object(b.jsx)(i.a,{to:"/",replace:!0})}),Object(b.jsxs)(i.b,{path:"/tabs",children:[Object(b.jsx)(i.b,{index:!0,element:Object(b.jsx)(r,{tabs:x})}),Object(b.jsx)(i.b,{path:":tabId",element:Object(b.jsx)(r,{tabs:x})})]}),Object(b.jsx)(i.b,{path:"*",element:Object(b.jsx)(l,{})})]})})})]})};s.a.render(Object(b.jsx)(n.a,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1bc319fe.chunk.js.map