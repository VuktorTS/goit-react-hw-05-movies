"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[468],{945:function(n,t,e){e.d(t,{Z:function(){return x}});e(791);var r,a,i,c=e(689),u=e(928),o=e(168),s=e(87),p=e(924),l=p.ZP.h1(r||(r=(0,o.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n"]))),f=p.ZP.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 20px;\n  list-style: none;\n  color: red;\n  padding-bottom: 20px;\n  & li {\n    flex-basis: calc((100% - 76px) / 4);\n    border: 1px solid black;\n    border-radius: 5px;\n    overflow: hidden;\n  }\n"]))),d=(0,p.ZP)(s.rU)(i||(i=(0,o.Z)(["\n  text-decoration: none;\n  & h2 {\n    color: red;\n    height: 112px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n  & img {\n    border-bottom: 1px solid black;\n  }\n"]))),h=e(184),x=function(n){var t=n.muviesList,e=n.title,r=(0,c.TH)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{children:e}),(0,h.jsx)(f,{children:t.map((function(n){var t=n.id,e=n.original_title,a=n.poster_path,i=n.title;return(0,h.jsx)("li",{children:(0,h.jsxs)(d,{to:"/movies/".concat(t),state:{from:r},children:[(0,h.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):u.Y,alt:i,width:266,height:398}),(0,h.jsx)("h2",{children:e})]})},t)}))})]})}},928:function(n,t,e){e.d(t,{Y:function(){return r}});var r="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},468:function(n,t,e){e.r(t);var r=e(861),a=e(439),i=e(757),c=e.n(i),u=e(945),o=e(791),s=e(679),p=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],i=t[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Hg)();case 3:t=n.sent,e=t.results,i(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsx)(u.Z,{muviesList:e,title:"Trending today"})}},679:function(n,t,e){e.d(t,{Pt:function(){return o},zv:function(){return p},TP:function(){return s},tx:function(){return l},Hg:function(){return u}});var r=e(861),a=e(757),i=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzE3NThlMDFmMjI1OWM4NTZlMGY3MGFlNjViYThmZSIsInN1YiI6IjY1OTU1OGExZDdhNzBhMTIyZTY5NGJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qS9WFf-TwNZvx1ogxQNmBt4zTjxjKlHS7BGELLpuzDM";var u=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=468.4bd7c079.chunk.js.map