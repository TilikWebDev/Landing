(this.webpackJsonplending=this.webpackJsonplending||[]).push([[6],{117:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),c=r(23),a=r(9),i=r(89),u=r(86),o=(r(97),r(1)),l=function(e){var t=e.title,r=Object(u.a)(e,["title"]),c=Object(s.useRef)();return Object(s.useEffect)((function(){c.current.firstChild.firstChild.scrollWidth>c.current.firstChild.firstChild.clientWidth&&c.current.setAttribute("data-tooltip",t)}),[c]),Object(o.jsx)("div",{ref:c,className:"tooltip",children:n.a.cloneElement(r.children,{ref:c})})},d=r.p+"static/media/photo-cover.ee434590.svg",j=Object(i.trackWindowScroll)((function(e){var t=e.user,r=e.scrollPosition;return Object(o.jsx)("div",{className:"user",children:Object(o.jsxs)("div",{className:"user__container",children:[Object(o.jsx)("div",{className:"user__image",children:Object(o.jsx)(i.LazyLoadImage,{alt:t.name,width:70,height:70,scrollPosition:r,src:t.photo,onError:function(e){return e.target.onerror=null,e.target.src=d}})}),Object(o.jsx)("h2",{className:"user__name h2",children:t.name}),Object(o.jsx)("p",{className:"user__position p1",children:t.position}),Object(o.jsx)(l,{title:t.email,children:Object(o.jsx)("p",{className:"user__email p1",children:Object(o.jsx)("span",{className:"user__email_overflow",children:t.email})})}),Object(o.jsx)("p",{className:"user__phone p1",children:t.phone})]})})})),h=function(e){var t=e.users_data;return Object(o.jsx)("div",{className:"users__list",children:t.map((function(e,t){return Object(o.jsx)(j,{user:e},t)}))})},_=function(e){var t=e.users_data,r=e.current_page,s=e.show_more_status,n=e.getUsersData;return Object(o.jsxs)("section",{id:"users_container",className:"users container",children:[Object(o.jsxs)("div",{className:"users__text",children:[Object(o.jsx)("h1",{className:"h1",children:"Our cheerful users"}),Object(o.jsx)("p",{className:"p1",children:"Attention! Sorting users by registration date"})]}),Object(o.jsx)(h,{users_data:t}),"hide"!==s&&Object(o.jsx)("button",{onClick:function(){return n(r)},className:["button_primary",s].join(" "),children:"Show more"})]})};t.default=Object(c.b)((function(e){return{users_data:e.users.users_data,current_page:e.users.current_page,show_more_status:e.users.show_more_status}}),{getUsersData:a.b})((function(e){var t=e.users_data,r=e.current_page,s=e.show_more_status,n=e.getUsersData;return Object(o.jsx)(_,{users_data:t,current_page:r,show_more_status:s,getUsersData:n})}))},86:function(e,t,r){"use strict";function s(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},c=Object.keys(e);for(s=0;s<c.length;s++)r=c[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)r=c[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return s}))},97:function(e,t,r){}}]);
//# sourceMappingURL=6.0b53eb3a.chunk.js.map