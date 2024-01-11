"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,i=e(861),u=e(439),o=e(757),s=e.n(o),p=e(791),f=e(689),l=e(168),d=e(924),h=d.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 48px 24px;\n  padding-bottom: 20px;\n"]))),x=d.ZP.li(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  border-radius: 5px;\n  overflow: hidden;\n  width: calc((100% - 116px) / 5);\n"]))),v=d.ZP.div(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  padding: 10px 0;\n  border-top: 1px solid black;\n  flex-grow: 1;\n  & h3 {\n    font-size: 20px;\n  }\n  & p {\n    text-align: center;\n    & span {\n      font-weight: 700;\n      font-size: 16px;\n    }\n  }\n"]))),m=e(679),g=e(928),Z=e(184),w=function(){var n=(0,f.UO)().movieId,t=(0,p.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1];return(0,p.useEffect)((function(){var t=function(){var t=(0,i.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,m.zv)(n);case 3:e=t.sent,r=e.cast,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,Z.jsx)(h,{children:r.map((function(n){var t=n.cast_id,e=n.name,r=n.profile_path,a=n.character;return(0,Z.jsxs)(x,{children:[(0,Z.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200".concat(r):g.Y,alt:e,width:208,height:300}),(0,Z.jsxs)(v,{children:[(0,Z.jsx)("h3",{children:e}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("span",{children:"Character: "}),a]})]})]},t)}))})}},928:function(n,t,e){e.d(t,{Y:function(){return r}});var r="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},679:function(n,t,e){e.d(t,{Pt:function(){return o},zv:function(){return p},TP:function(){return s},tx:function(){return f},Hg:function(){return u}});var r=e(861),a=e(757),c=e.n(a),i=e(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzE3NThlMDFmMjI1OWM4NTZlMGY3MGFlNjViYThmZSIsInN1YiI6IjY1OTU1OGExZDdhNzBhMTIyZTY5NGJkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qS9WFf-TwNZvx1ogxQNmBt4zTjxjKlHS7BGELLpuzDM";var u=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.f559ff71.chunk.js.map