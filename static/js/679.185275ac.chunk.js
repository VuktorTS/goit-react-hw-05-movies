"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[679],{928:function(n,e,t){t.d(e,{Y:function(){return r}});var r="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},773:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,i,a,s,o,c,u,l,p=t(861),d=t(439),f=t(757),h=t.n(f),x=t(791),v=t(689),g=t(168),m=t(87),Z=t(924),j=Z.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n"]))),w=(Z.ZP.h2(i||(i=(0,g.Z)(["\n  font-size: 36px;\n  line-height: 1.11;\n"]))),Z.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  & p {\n    font-size: 18px;\n  }\n  & span {\n    font-size: 20px;\n    font-weight: 700;\n  }\n"])))),b=Z.ZP.div(s||(s=(0,g.Z)(["\n  padding-bottom: 20px;\n"]))),k=Z.ZP.h3(o||(o=(0,g.Z)(["\n  text-align: center;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  font-size: 28px;\n  line-height: 1.11;\n"]))),y=Z.ZP.ul(c||(c=(0,g.Z)(["\n  display: flex;\n  gap: 30px;\n  margin-top: 20px;\n  justify-content: center;\n  & li:first-child {\n    position: relative;\n    &::after {\n      position: absolute;\n      content: '';\n      background-color: #5081f5d6;\n      border-radius: 2px;\n      width: 4px;\n      height: 100%;\n      bottom: -1px;\n      right: -18px;\n    }\n  }\n"]))),I=(Z.ZP.li(u||(u=(0,g.Z)([""]))),(0,Z.ZP)(m.OL)(l||(l=(0,g.Z)(["\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  font-size: 25px;\n  line-height: 1.11;\n  color: #5081f5d6;\n  &.active {\n    position: relative;\n    &::after {\n      position: absolute;\n      content: '';\n      background-color: #5081f5d6;\n      border-radius: 2px;\n      width: 100%;\n      height: 4px;\n      bottom: -3px;\n      left: 0;\n    }\n  }\n"])))),z=t(928),_=t(184),N=function(n){var e=n.movieDetails,t=e.title,r=e.release_date,i=e.vote_average,a=e.overview,s=e.genres,o=e.poster_path;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(j,{children:[(0,_.jsx)("img",{src:o?"https://image.tmdb.org/t/p/w500".concat(o):z.Y,alt:t,width:264,height:396}),(0,_.jsxs)(w,{children:[(0,_.jsxs)("h1",{children:[t," (",r.slice(0,4),")"]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("span",{children:"User Score: "}),10*i.toFixed(1),"%"]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("span",{children:"Overview: "}),a]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("span",{children:"Genres: "}),null===s||void 0===s?void 0:s.map((function(n){return n.name})).join(", ")]})]})]}),(0,_.jsxs)(b,{children:[(0,_.jsx)(k,{children:"Additional information"}),(0,_.jsxs)(y,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(I,{to:"cast",children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(I,{to:"reviews",children:"Reviews"})})]})]}),(0,_.jsx)(x.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading...1111111111111111111111111111111111111111111111111111111111111111"}),children:(0,_.jsx)(v.j3,{})})]})},P=t(679),T=function(){var n,e,t=(0,v.UO)().movieId,r=(0,x.useState)(null),i=(0,d.Z)(r,2),a=i[0],s=i[1],o=(0,v.TH)(),c=(0,x.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,x.useEffect)((function(){var n=function(){var n=(0,p.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,P.TP)(t);case 3:e=n.sent,s(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[t,s]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m.OL,{to:c.current,className:"go-back-link",children:"\u2190Go Back"}),a&&(0,_.jsx)(N,{movieDetails:a})]})}},679:function(n,e,t){t.d(e,{Pt:function(){return c},zv:function(){return l},TP:function(){return u},tx:function(){return p},Hg:function(){return o}});var r=t(861),i=t(757),a=t.n(i),s=t(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzE3NThlMDFmMjI1OWM4NTZlMGY3MGFlNjViYThmZSIsInN1YiI6IjY1OTU1OGExZDdhNzBhMTIyZTY5NGJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qS9WFf-TwNZvx1ogxQNmBt4zTjxjKlHS7BGELLpuzDM";var o=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"?language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=679.185275ac.chunk.js.map