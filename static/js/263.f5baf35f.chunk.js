"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[263],{2049:function(n,e,t){t.r(e),t.d(e,{MovieList:function(){return v}});var r,a,c,o,i=t(7689),u=t(168),s=t(6731),p=t(6444),l=p.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  align-items: baseline;\n"]))),f=p.ZP.li(a||(a=(0,u.Z)(["\n  width: 300px;\n  text-align: center;\n"]))),g=p.ZP.p(c||(c=(0,u.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 5px;\n"]))),h=(0,p.ZP)(s.rU)(o||(o=(0,u.Z)(["\n  text-decoration: none;\n  color: black;\n  &:hover {\n    color: orange;\n  }\n"]))),d=t(184),v=function(n){var e=n.movies,t=(0,i.TH)();return console.log(e),(0,d.jsx)(l,{children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,d.jsx)(f,{children:(0,d.jsxs)(h,{to:"/movies/".concat(e),state:{from:t},children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(a),alt:r}),(0,d.jsx)(g,{children:r})]})},e)}))})}},5263:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,c,o,i=t(885),u=t(5705),s=t(828),p=t(168),l=t(6444),f=l.ZP.div(r||(r=(0,p.Z)(["\n  padding-top: 10px;\n  /* display: block; */\n  text-align: center;\n  /* margin-left: auto;\n  margin-right: auto; */\n"]))),g=(0,l.ZP)(u.l0)(a||(a=(0,p.Z)(["\n  display: flex;\n  justify-content: baseline;\n  align-items: center;\n"]))),h=l.ZP.button(c||(c=(0,p.Z)(["\n  padding: 5px;\n  background-color: white;\n  color: black;\n\n  text-align: center;\n  :hover {\n    border-color: orange;\n    background-color: orange;\n    color: white;\n  }\n"]))),d=(0,l.ZP)(u.gN)(o||(o=(0,p.Z)(["\n  padding: 5px;\n  height: 35px;\n  border-right: none;\n"]))),v=t(184),x={searchParam:""},m=function(n){var e=n.onSubmit;return(0,v.jsx)(f,{children:(0,v.jsx)(u.J9,{initialValues:x,onSubmit:function(n,t){var r=t.resetForm;if(""===n.searchParam.trim())return alert("Please specify your search query."),void r();e(n.searchParam),r()},children:(0,v.jsxs)(g,{children:[(0,v.jsx)(d,{type:"text",name:"searchParam",placeholder:"Search movies......"}),(0,v.jsx)(h,{type:"submit",children:(0,v.jsx)(s.Yfv,{})})]})})})},y=t(2982),Z=t(5861),b=t(7757),w=t.n(b),k=t(2049),j=t(2791),P=t(6731),S=t(4635),_=function(n){var e=n.search,t=(0,j.useState)([]),r=(0,i.Z)(t,2),a=r[0],c=r[1],o=(0,j.useState)(0),u=(0,i.Z)(o,2),s=u[0],p=u[1],l=(0,P.lr)(),f=(0,i.Z)(l,1)[0];return console.log(e),(0,j.useEffect)((function(){var n=f.get("query");function e(){return(e=(0,Z.Z)(w().mark((function e(){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,S.getSearchQuery)(n);case 3:t=e.sent,console.log(t),c((0,y.Z)(t.results)),p(t.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}console.log(n),null!==n&&function(){e.apply(this,arguments)}()}),[f]),(0,v.jsx)("div",{children:s>0&&(0,v.jsx)(k.MovieList,{movies:a})})},M=t(7689),U=function(){var n=(0,j.useState)(""),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,M.s0)();return(0,v.jsxs)("main",{children:[(0,v.jsx)("h1",{children:"Movies"}),(0,v.jsx)(m,{onSubmit:function(n){r(n),a("?query=".concat(n),{replace:!0})}}),(0,v.jsx)(_,{search:t})]})}},4635:function(n,e,t){t.r(e),t.d(e,{getMovieById:function(){return f},getMovieCast:function(){return g},getMovieReviews:function(){return h},getSearchQuery:function(){return l},getTrendingMoovies:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),o=t(4569),i=t.n(o),u="cd467bf58867975fca1c146cba682fc3",s="https://api.themoviedb.org/3",p=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(e,"&page=1&language=en-US"));case 2:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=263.f5baf35f.chunk.js.map