"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{2049:function(n,t,e){e.r(t),e.d(t,{MovieList:function(){return h}});var r,a,c,o,u=e(7689),i=e(168),s=e(6731),p=e(6444),f=p.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  align-items: baseline;\n"]))),l=p.ZP.li(a||(a=(0,i.Z)(["\n  width: 300px;\n  text-align: center;\n"]))),v=p.ZP.p(c||(c=(0,i.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 5px;\n"]))),g=(0,p.ZP)(s.rU)(o||(o=(0,i.Z)(["\n  text-decoration: none;\n  color: black;\n  &:hover {\n    color: orange;\n  }\n"]))),d=e(184),h=function(n){var t=n.movies,e=(0,u.TH)();return console.log(t),(0,d.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,d.jsx)(l,{children:(0,d.jsxs)(g,{to:"/movies/".concat(t),state:{from:e},children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(a),alt:r}),(0,d.jsx)(v,{children:r})]})},t)}))})}},8042:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(2982),a=e(5861),c=e(885),o=e(7757),u=e.n(o),i=e(184),s=e(2791),p=s.useEffect,f=s.useState,l=e(4635).getTrendingMoovies,v=e(2049).MovieList,g=function(){var n=f([]),t=(0,c.Z)(n,2),e=t[0],o=t[1];return p((function(){function n(){return(n=(0,a.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l();case 3:t=n.sent,console.log(t),o((0,r.Z)(t.results)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,i.jsx)(v,{movies:e})},d=e(7689),h=function(){return(0,i.jsxs)("main",{children:[(0,i.jsx)("h2",{children:"Trending today"}),(0,i.jsx)(g,{}),(0,i.jsx)(d.j3,{})]})}},4635:function(n,t,e){e.r(t),e.d(t,{getMovieById:function(){return l},getMovieCast:function(){return v},getMovieReviews:function(){return g},getSearchQuery:function(){return f},getTrendingMoovies:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),o=e(4569),u=e.n(o),i="cd467bf58867975fca1c146cba682fc3",s="https://api.themoviedb.org/3",p=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1&language=en-US"));case 2:return e=n.sent,console.log(e.data),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=42.d8bff4db.chunk.js.map