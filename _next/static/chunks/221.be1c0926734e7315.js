(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[221],{838:function(e,n,t){"use strict";t.d(n,{hi:function(){return w},Ee:function(){return E},g4:function(){return h},I4:function(){return u},us:function(){return x}});var r=t(5893),a=t(1023),i=t(8508),o=t(2585),c=t.n(o);function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(e){var n=e.active;return(0,r.jsx)("div",{className:c().app__navigation,children:a.FV.map((function(e){var t=s(e,2),a=t[0],o=t[1];return(0,r.jsx)("a",{title:(0,i.Hh)(o),href:"#".concat(a),className:c()["app__navigation-dot"],style:n===a?{backgroundColor:"rgb(var(--primary-color))"}:{}},a)}))})},f=t(3750),p=t(9583);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function _(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h=function(e){var n=e.icon,t=e.children,a=_(e,["icon","children"]);switch(n){case"github":return t||(0,r.jsx)(p.hJX,m({},a));case"linkedin":return t||(0,r.jsx)(p.ltd,m({},a));case"facebook":return t||(0,r.jsx)(p.tBk,m({},a));case"twitter":return t||(0,r.jsx)(f.meP,m({},a));case"instagram":return t||(0,r.jsx)(f.Vs6,m({},a));default:return null}},b=t(9479),y=t.n(b),x=function(){return(0,r.jsx)("div",{className:y().app__social,children:a.KT.map((function(e){return(0,r.jsx)("div",{className:y()[e.icon],children:(0,r.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer","aria-label":e.icon,title:e.icon,className:"flex-grow app__flex",children:(0,r.jsx)(h,{icon:e.icon})})},e.icon)}))})},v=t(7294),g=t(9215),j=t.n(g),w=function(){var e=(0,v.useRef)(null),n=function(){e.current&&(window.scrollY>window.innerHeight?e.current.style.display="flex":e.current.style.display="none")};return(0,v.useEffect)((function(){return n(),window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),(0,r.jsx)("div",{ref:e,className:"app__flex text-white ".concat(j()["app__goto-top"]),children:(0,r.jsx)("a",{href:"#home",title:"Home","aria-label":"Home",children:(0,r.jsx)(p.$Pg,{className:"h-8"})})})},k=(t(8685),t(8374),t(5675)),O=t.n(k);function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var S=function(e){return e.src};function E(e){return(0,r.jsx)(O(),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){N(e,n,t[n])}))}return e}({},e,{loader:S}))}},5221:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var r=t(5893),a=t(7294),i=t(3854),o=t(7824),c=t(655),l=t(4394),s=t(7107),u=t(5759);function f(){var e=!1,n=[],t=new Set,r={subscribe:function(e){return t.add(e),function(){t.delete(e)}},start:function(r,a){if(e){var i=[];return t.forEach((function(e){i.push((0,s.d5)(e,r,{transitionOverride:a}))})),Promise.all(i)}return new Promise((function(e){n.push({animation:[r,a],resolve:e})}))},set:function(n){return(0,l.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach((function(e){(0,u.gg)(e,n)}))},stop:function(){t.forEach((function(e){(0,s.p_)(e)}))},mount:function(){return e=!0,n.forEach((function(e){var n=e.animation,t=e.resolve;r.start.apply(r,(0,c.ev)([],(0,c.CR)(n),!1)).then(t)})),function(){e=!1,r.stop()}}};return r}var p=t(6681);var d=t(5417),m=t(3990),_=t(9583),h=t(838),b=t(878),y=t.n(b),x=function(e){var n=e.name,t=e.feedback,i=e.iconUrl,o=e.iconName,c=e.company,l=e.animate,s=function(){var e=(0,p.h)(f);return(0,a.useEffect)(e.mount,[]),e}();return(0,a.useEffect)((function(){s.set(l)}),[l,s]),(0,r.jsx)(d.E.div,{className:"".concat(y()["app__testimonial-item"]," app__flex"),animate:s,transition:{duration:1},children:(0,r.jsxs)(d.E.div,{className:y()["app__testimonial-content"],children:[(0,r.jsxs)("div",{className:"flex justify-between w-full text-2xl text-gray-600",children:[(0,r.jsx)(m.bFs,{}),(0,r.jsx)(m.SfF,{})]}),(0,r.jsx)("p",{className:"mx-10 p-text",children:t}),(0,r.jsxs)("div",{className:"flex flex-col items-center w-full mt-8",children:[(0,r.jsxs)("div",{className:"flex gap-2 mb-3 text-2xl text-yellow-400",children:[(0,r.jsx)(_.QJe,{}),(0,r.jsx)(_.QJe,{}),(0,r.jsx)(_.QJe,{}),(0,r.jsx)(_.QJe,{}),(0,r.jsx)(_.QJe,{})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(h.Ee,{src:i,alt:o,title:o,width:20,height:15,className:"bg-gray-400"}),(0,r.jsxs)("a",{href:"https://www.freelancer.in/u/paalan007",target:"_blank",rel:"noreferrer",className:"ml-2 bold-text text-primary",children:[n,"\xa0\xa0(",c,")"]})]})]})]})})},v=t(1023),g=[{name:"Parth P",iconUrl:v.ci.V2.us,iconName:"USA",feedback:"On point work, tried to understand the requirements really well and delivered it brilliantly. Would love to work with him again.",company:"Freelance"},{name:"Chandrakandh M",iconUrl:v.ci.V2.in,iconName:"India",feedback:"He understood the requirement very well and finished our React+Node work on time. He followed coding standards and did like a professional company. Definitely we will rehire him.",company:"Freelance"},{name:"Bishop M",iconUrl:v.ci.V2.us,iconName:"USA",feedback:"Did a FANTASTIC job. Typically I dread hiring freelancers for small odds and ends on larger scale projects because they typically end up costing me more time than they save me but not only did he get an understanding of what I was needing done in a quick fashion he also didn't push back when I informed him that it would have be developed a certain way. Its nice to work with a professional that can build our project to the spec required. 5 STARS!",company:"Freelance"},{name:"Renan Georgio C",iconUrl:v.ci.V2.br,iconName:"Brazil",feedback:"Paalamugan is a great worker, attentive and i definitely hired again",company:"Freelance"},{name:"Ashraf M",iconUrl:v.ci.V2.eg,iconName:"Egypt",feedback:"Best freelancer i have never been seen before.",company:"Freelance"},{name:"Junxi L",iconUrl:v.ci.V2.au,iconName:"Australia",feedback:"Awesome communication. honest man with dedicated work.",company:"Freelance"}],j=t(6421),w=t.n(j);function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O=(0,o.D)((0,o.A)((function(){var e=(0,a.useState)(0),n=e[0],t=e[1],o=(0,a.useState)([]),c=o[0],l=o[1],s=function(e){t(e)};(0,a.useEffect)((function(){l(g)}),[]);var u=(0,a.useState)({x:0,opacity:1}),f=u[0],p=u[1];return(0,r.jsx)(r.Fragment,{children:c.length&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"mb-12 head-text",children:"Testimonial"}),c.map((function(e,t){return t===n&&(0,r.jsx)(x,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){k(e,n,t[n])}))}return e}({},e,{animate:f}),e.name)})),(0,r.jsxs)("div",{className:"".concat(w()["app__testimonial-btns"]," app__flex"),children:[(0,r.jsx)("div",{className:"cursor-pointer app__flex",onClick:function(){p({x:-300,opacity:0}),setTimeout((function(){p({x:0,opacity:1}),s(0===n?c.length-1:n-1)}),700)},children:(0,r.jsx)(i.DEl,{})}),(0,r.jsx)("div",{className:"cursor-pointer app__flex",onClick:function(){p({x:300,opacity:0}),setTimeout((function(){p({x:0,opacity:1}),s(n===c.length-1?0:n+1)}),700)},children:(0,r.jsx)(i.MOd,{})})]})]})})}),w().app__testimonial),"testimonial","bg-secondary")},7824:function(e,n,t){"use strict";t.d(n,{D:function(){return c},A:function(){return s}});var r=t(5893),a=t(838),i=t(9902),o=t.n(i),c=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return function(){return(0,r.jsxs)("div",{className:"".concat(n," ").concat(o()["app__sub-container"],"  ").concat(t||""),children:["home"===n&&(0,r.jsx)(a.us,{}),(0,r.jsx)("div",{className:"".concat(o().app__wrapper," ").concat(i||"",' app__flex"'),children:(0,r.jsx)(e,{})}),(0,r.jsx)(a.I4,{active:n}),(0,r.jsx)(a.hi,{})]})}},l=(t(7294),t(5417)),s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){return(0,r.jsx)(l.E.div,{whileInView:{y:[100,50,0],opacity:[0,0,1]},transition:{duration:.5},className:"".concat(n," app__flex"),children:(0,r.jsx)(e,{})})}}},9215:function(e){e.exports={"app__goto-top":"GotoTopButton_app__goto-top__wetLu",goToTopBounceIn:"GotoTopButton_goToTopBounceIn__wwp_4"}},2585:function(e){e.exports={app__navigation:"NavigationDots_app__navigation__uljyr","app__navigation-dot":"NavigationDots_app__navigation-dot__inQX7"}},9479:function(e){e.exports={app__social:"SocialMedia_app__social__4sWV3",twitter:"SocialMedia_twitter__1d1n1",facebook:"SocialMedia_facebook__0DLmv",github:"SocialMedia_github__L_Okd",linkedin:"SocialMedia_linkedin__AtmYj",instagram:"SocialMedia_instagram__wnOuD"}},6421:function(e){e.exports={app__testimonial:"Testimonial_app__testimonial__9Xrdl","app__testimonial-btns":"Testimonial_app__testimonial-btns__ZuF04","app__testimonial-brands":"Testimonial_app__testimonial-brands__NmNOp"}},878:function(e){e.exports={"app__testimonial-item":"TestimonialItem_app__testimonial-item__fdzGk","app__testimonial-content":"TestimonialItem_app__testimonial-content__ijs_C"}},9902:function(e){e.exports={app__wrapper:"AppWrap_app__wrapper__wDyx7","app__sub-container":"AppWrap_app__sub-container__oE2fW"}}}]);