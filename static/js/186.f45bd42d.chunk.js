"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(t,n,r){r.r(n);var e=r(861),u=r(439),a=r(757),c=r.n(a),i=r(791),s=r(689),o=r(393),f=r(184);n.default=function(){var t=(0,s.UO)().movieId,n=(0,i.useState)([]),r=(0,u.Z)(n,2),a=r[0],p=r[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.tx)(t);case 3:r=n.sent,e=r.results,p(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{children:a.map((function(t){var n=t.id,r=t.author,e=t.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h4",{children:["Author: ",r]}),(0,f.jsx)("p",{children:e})]},n)}))})})}},393:function(t,n,r){r.d(n,{zv:function(){return o},TP:function(){return s},tx:function(){return f},Hg:function(){return i}});var e=r(861),u=r(757),a=r.n(u),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzE3NThlMDFmMjI1OWM4NTZlMGY3MGFlNjViYThmZSIsInN1YiI6IjY1OTU1OGExZDdhNzBhMTIyZTY5NGJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qS9WFf-TwNZvx1ogxQNmBt4zTjxjKlHS7BGELLpuzDM";var i=function(){var t=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.f45bd42d.chunk.js.map