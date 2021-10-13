(this["webpackJsonppe-elastics-frontend"]=this["webpackJsonppe-elastics-frontend"]||[]).push([[0],{394:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(65),o=n.n(c),s=(n(92),n(14)),i=n(2),l=n(8),d=n.n(l),u=n(23),h=n(12),b=n(66),p=n.n(b),j=function(){var e=Object(u.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.delete("/github/repo?projectName=".concat(t,"&token=").concat(n));case 2:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=p.a.create({baseURL:"https://8eqbhzi5ay.eu-west-1.awsapprunner.com"}),f=n(1),m=function(e){var t=e.title,n=e.onClick,a=e.disabled;return Object(f.jsx)("button",{className:"bg-primary-500 shadow hover:bg-primary-400 disabled:cursor-not-allowed disabled:bg-primary-500 focus:shadow-outline focus:outline-none text-secondary font-bold py-2 px-4 rounded",onClick:n,disabled:a,children:t})},O=function(e){var t=e.id,n=e.placeholder,a=e.error,r=e.value,c=e.onChange,o="border-primary-500";return a&&(o="border-error"),Object(f.jsx)("input",{className:"shadow appearance-none border-2 "+o+" rounded py-2 px-3 text-primary-500 leading-tight focus:outline-none focus:shadow-outline",id:t,type:"text",placeholder:n,value:r,onChange:c})},g=n(67),v=n.n(g),y=function(){return Object(f.jsx)("div",{className:v.a.loader})},w=n(18),N=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(h.a)(c,2),s=o[0],l=o[1],b=Object(a.useState)(""),p=Object(h.a)(b,2),g=p[0],v=p[1],N=Object(a.useState)(""),k=Object(h.a)(N,2),C=k[0],S=k[1],P=Object(a.useState)(!1),F=Object(h.a)(P,2),L=F[0],R=F[1],A=new URLSearchParams(Object(i.f)().search).get("code");Object(a.useEffect)((function(){A&&function(e){return x.post("/github/auth",{githubCode:e}).then((function(e){return console.log(e.data),e.data}))}(A).then((function(e){r(e)}))}),[A]);var _=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(s,n).then((function(){S(""),v("")})).catch((function(){S("Oh no! One or more of the repositories could not be deleted! \ud83d\ude2e Please try again later")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("main",{className:"container mx-auto w-2/6 space-y-10 pb-20 pt-20",children:[Object(f.jsx)("h1",{className:"text-secondary text-4xl",children:"Peareasy Elastics \ud83d\udd25"}),Object(f.jsx)("h3",{className:"text-secondary text-xl",children:"In order for us to be able to create an awesome project template for you, we need you to authorize your Github account with us."}),Object(f.jsx)("div",{children:Object(f.jsx)(m,{disabled:!!n,onClick:function(){return window.location.href="https://github.com/login/oauth/authorize?client_id=e78392cb4d38b6f34b4b&scope=repo delete_repo workflow"},title:n?"You have authorized Github \ud83c\udf89":"Authorize Github"})}),n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{className:"text-secondary text-xl",children:"Cool! The next step is to choose a project name \ud83d\ude0e"}),Object(f.jsxs)("div",{className:"space-y-3",children:[Object(f.jsx)("div",{hidden:!C,children:Object(f.jsx)("p",{className:"text-error text-xl",children:C})}),Object(f.jsx)("div",{children:Object(f.jsx)(O,{id:"projectName",error:C,placeholder:"Project name",value:s,onChange:function(e){S(""),l(e.target.value)}})}),Object(f.jsx)("div",{children:Object(f.jsx)(m,{title:"Create Repositories",onClick:function(){R(!0),function(e,t){return x.post("/github/repo",{projectName:e,githubToken:t}).then((function(e){return e.data.rootUrl}))}(s,n).then((function(e){R(!1),v(e)})).catch((function(e){422===e.response.status&&S("Oh no! Project name was already occupied on your Github account! \ud83d\ude2e Find a new name and try again!"),v(""),R(!1)}))},disabled:!n||!s})}),Object(f.jsx)("div",{children:Object(f.jsx)(m,{title:"Delete Repositories",onClick:_})}),Object(f.jsx)("div",{children:L?Object(f.jsx)(y,{}):null})]}),g?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{children:Object(f.jsx)("h3",{className:"text-secondary text-xl",children:"Alright, this is it. Here's the link to your new Github repo! \ud83d\udc4a\ud83c\udffc"})}),Object(f.jsx)("div",{children:Object(f.jsx)(m,{title:"Open Root Repository",onClick:function(){return window.open(g)}})}),Object(f.jsx)("div",{children:Object(f.jsx)("h3",{className:"text-secondary text-xl",children:"To download the entire project, open a terminal, paste and run the command below!"})}),Object(f.jsx)("div",{children:Object(f.jsx)(w.a,{theme:w.b,text:"git clone --recurse-submodules -j8 ".concat(g),language:"shell",showLineNumbers:!1,startingLineNumber:1})}),Object(f.jsx)("div",{children:Object(f.jsx)("h3",{className:"text-secondary text-xl",children:"Now navigate to the project folder and run the entire project!\ud83c\udf7e\ud83e\udd42\ud83e\udd73"})}),Object(f.jsx)("div",{children:Object(f.jsx)(w.a,{theme:w.b,text:"cd ".concat(s," \n&& docker-compose up"),language:"shell",showLineNumbers:!1,startingLineNumber:1})})]}):null]}):null]})},k=n(399),C=n(398),S=function(){return Object(f.jsxs)("main",{className:"container mx-auto w-1/2 space-y-5 pb-10 pt-10",children:[Object(f.jsx)("h3",{className:"text-secondary text-2xl text-left",children:"Introduction"}),Object(f.jsx)("p",{className:"text-secondary text-m text-left",children:"Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming)."}),Object(f.jsx)("p",{className:"text-secondary text-m text-left",children:"Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!"}),Object(f.jsx)("p",{className:"text-secondary text-m text-left",children:"Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform."}),Object(f.jsx)("div",{children:Object(f.jsx)(k.a,{language:"javascript",style:C.a,children:"<div className=\"min-h-screen bg-gray-800 text-center\">\n  <BrowserRouter>\n    <NavigationBar />\n    <Switch>\n      <Route path={'/docs'} component={Docs} />\n      <Route path={'/about'} component={About} />\n      <Route path={'/'} component={Homepage} />\n    </Switch>\n  </BrowserRouter>\n</div>"})}),Object(f.jsx)("h3",{className:"text-secondary text-2xl text-left pt-5",children:"Philosophy"}),Object(f.jsx)("p",{className:"text-secondary text-m text-left",children:"In recent years, thanks to Node.js, JavaScript has become the \u201clingua franca\u201d of the web for both front and backend applications. This has given rise to awesome projects like Angular, React and Vue, which improve developer productivity and enable the creation of fast, testable, and extensible frontend applications. However, while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript), none of them effectively solve the main problem of - Architecture."}),Object(f.jsx)("p",{className:"text-secondary text-m text-left",children:"Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular."})]})},P=function(){return Object(f.jsx)(f.Fragment,{})},F=function(e){var t=e.link,n=e.onClick,a=e.children;return Object(f.jsx)(s.b,{to:t,className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75",onClick:n,children:Object(f.jsx)("span",{className:"ml-2",children:a})})},L=function(e){var t=e.link,n=e.children;return Object(f.jsx)("button",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75",onClick:function(){return window.open(t)},children:Object(f.jsx)("span",{className:"ml-2",children:n})})},R=Object(f.jsx)("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",children:Object(f.jsx)("path",{d:"M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"})}),A=function(){var e=r.a.useState(!1),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(f.jsx)("nav",{className:"relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary-500 mb-3",children:Object(f.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[Object(f.jsxs)("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[Object(f.jsx)(s.b,{className:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-secondary",to:"/",children:"Peareasy Elastics"}),Object(f.jsx)("button",{className:"text-secondary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return a(!n)},children:R})]}),Object(f.jsx)("div",{className:"lg:flex flex-grow items-center"+(n?" flex":" hidden"),id:"example-navbar-danger",children:Object(f.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto",children:[Object(f.jsx)(F,{link:"/docs",onClick:function(){return a(!n)},children:"docs"}),Object(f.jsx)(F,{link:"/about",onClick:function(){return a(!n)},children:"about"}),Object(f.jsx)(L,{link:"https://github.com/peareasy-elastics",children:"github"})]})})]})})};var _=function(){return Object(f.jsx)("div",{className:"min-h-screen bg-gray-800 text-center",children:Object(f.jsxs)(s.a,{children:[Object(f.jsx)(A,{}),Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"/docs",component:S}),Object(f.jsx)(i.a,{path:"/about",component:P}),Object(f.jsx)(i.a,{path:"/",component:N})]})]})})},T=function(e){e&&e instanceof Function&&n.e(155).then(n.bind(null,558)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root")),T()},67:function(e,t,n){e.exports={loader:"Spinner_loader__fTuX5",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},92:function(e,t,n){}},[[394,152,153]]]);
//# sourceMappingURL=main.74ad30f1.chunk.js.map