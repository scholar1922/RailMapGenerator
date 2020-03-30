(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[73],{103:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),c=e(4),i=e(3),o=e(1),s=e(5),l=e(24),u=e(23),f=e(8),h=function(t){var n=r.useContext(s.b).param.stn_list[t.stnId];return r.createElement(r.Fragment,null,r.createElement("use",{xlinkHref:"#"+("none"===n.transfer.type?"stn_sh":"int2_sh")+(-1===t.stnState?"_pass":""),className:"rmg-stn"}),r.createElement("g",{transform:"translate(".concat([].concat(Object(f.a)(n.branch.left),Object(f.a)(n.branch.right)).length?30:0,",0)")},r.createElement(m,{name:n.name,infos:n.transfer.info,isOSI:n.transfer.type.includes("osi"),stnState:t.stnState})))},m=function(t){var n,e=t.name[1].split("\\").length,a=r.useRef(null),i=r.useState({width:0}),o=Object(c.a)(i,2),s=o[0],l=o[1];r.useEffect((function(){return l(a.current.getBBox())}),[t.name.toString()]);var u=s.width+5;return r.createElement("g",{className:"Name Future",transform:"translate(".concat(-(24+12*(e-1))*Math.cos(-45),",").concat(-25.921875-12*(e-1)*Math.cos(-45),")rotate(-50)"),textAnchor:"start"},r.createElement(d,{ref:a,name:t.name}),r.createElement(g,{intInfos:t.isOSI?(n=[]).concat.apply(n,Object(f.a)(t.infos)):t.infos[0],transform:"translate(".concat(u,",0)")}),t.isOSI&&r.createElement("g",{transform:"translate(".concat(u+15*t.infos.reduce((function(t,n){return t+n.length}),0),",-30)")},r.createElement(b,{osiInfos:t.infos[1]})))},d=r.forwardRef((function(t,n){return r.useMemo((function(){return r.createElement("g",{ref:n},r.createElement("text",{className:"rmg-name__zh"},t.name[0]),r.createElement("g",{fontSize:"60%"},t.name[1].split("\\").map((function(t,n){return r.createElement("text",{key:n,className:"rmg-name__en",dy:12*(n+1)},t)}))))}),[t.name.toString()])})),g=function(t){var n=t.intInfos,e=Object(u.a)(t,["intInfos"]),a=0;return r.createElement("g",e,n.map((function(t,n){var e=Boolean(t[4].match(/^\d.*$/)),c=r.createElement("g",{transform:"translate(".concat(a,",0)"),key:n},e?r.createElement(p,{info:t}):r.createElement(O,{info:t}));return a+=e?25:16*t[4].length+12+5,c})))},p=r.memo((function(t){return r.createElement(r.Fragment,null,r.createElement("rect",{height:30,width:20,y:-15,fill:t.info[2]}),r.createElement("text",{x:10,className:"rmg-name__zh",textAnchor:"middle",fill:t.info[3],dominantBaseline:"central"},t.info[4].match(/(\d*)\w+/)[0]))}),(function(t,n){return t.info.toString()===n.info.toString()})),O=r.memo((function(t){var n=t.info[4].split("\\")[0].length;return r.createElement(r.Fragment,null,r.createElement("rect",{height:30,width:16*n+12,y:-15,fill:t.info[2]}),r.createElement("text",{x:8*n+6,className:"rmg-name__zh",textAnchor:"middle",fill:t.info[3],dominantBaseline:"central"},t.info[4].split("\\")[0]))}),(function(t,n){return t.info.toString()===n.info.toString()})),b=function(t){var n=t.osiInfos.map((function(t){return t[4]}));return r.useMemo((function(){return r.createElement("g",{textAnchor:"middle",fontSize:"50%"},r.createElement("text",{className:"rmg-name__zh rmg-name__shmetro--station"},"\u6362\u4e58"+n.join("\uff0c")),r.createElement("text",{className:"rmg-name__zh rmg-name__shmetro--station",dy:10},"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"))}),[n.toString()])},y=function(){var t=a.a.useContext(s.b),n=t.param,e=t.routes,r=t.branches,c=t.deps,u=Object(l.b)(n.stn_list,(function(){return 0}),(function(){return 0})),f=Object(l.c)("linestart","lineend",u),h=Object(l.c)(f.nodes[1],f.nodes.slice(-2)[0],u),m=a.a.useMemo((function(){return console.log("computing x shares"),Object.keys(n.stn_list).reduce((function(t,n){return Object(o.a)({},t,Object(i.a)({},n,Object(l.f)(n,u,r)))}),{})}),[r.toString(),JSON.stringify(u)]),d=[n.svgWidth.railmap*n.padding/100,n.svgWidth.railmap*(1-n.padding/100)],g=Object.keys(m).reduce((function(t,n){return Object(o.a)({},t,Object(i.a)({},n,d[0]+m[n]/h.len*(d[1]-d[0])))}),{}),p=a.a.useMemo((function(){return console.log("computing y shares"),Object.keys(n.stn_list).reduce((function(t,n){return Object(o.a)({},t,Object(i.a)({},n,r[0].includes(n)?0:3))}),{})}),[c]),O=Object.keys(p).reduce((function(t,e){return Object(o.a)({},t,Object(i.a)({},e,-p[e]*n.branch_spacing))}),{}),b=a.a.useMemo((function(){return Object(l.e)(n.current_stn_idx,e,n.direction)}),[n.current_stn_idx,n.direction,e.toString()]),y=Object(l.d)(r,b),j=Object.keys(y).reduce((function(t,e){return Object(o.a)({},t,Object(i.a)({},e,y[e].map((function(t){return _(t,e,g,O,n.direction)}))))}),{});return a.a.createElement("g",{id:"main",transform:"translate(0,".concat(n.svg_height-63,")")},a.a.createElement(v,{paths:j}),a.a.createElement(E,{xs:g,ys:O,stnStates:b}))},v=function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement("g",{className:"rmg-line rmg-line__pass rmg-line__shmetro"},t.paths.pass.map((function(t,n){return a.a.createElement("path",{key:n,stroke:"gray",strokeWidth:12,fill:"none",d:t})}))),a.a.createElement("g",{className:"rmg-line rmg-line__shmetro"},t.paths.main.map((function(t,n){return a.a.createElement("path",{key:n,fill:"var(--rmg-theme-colour)",d:t})}))))},_=function(t,n,e,r,a){var i=Object(c.a)([],2),o=i[0],s=i[1],l={},u=30;if(t.forEach((function(t){var n=e[t],a=r[t];if(!o&&0!==o)return s=n,o=a,void(l.start=[n,a]);0===a?a!==o&&(l.bifurcate=[s,o]):a!==o&&(l.bifurcate=[n,a]),l.end=[n,a],s=n,o=a})),l.hasOwnProperty("start")){if(l.hasOwnProperty("end")){if(l.hasOwnProperty("bifurcate")){var f=Object(c.a)(l.start,2),h=f[0],m=f[1],d=Object(c.a)(l.end,2),g=d[0],p=d[1];return"main"===n?"l"===a?p>m?"M ".concat(h-u,",").concat(m-6," H ").concat(g+6," V ").concat(p-6," h -12 V ").concat(m+6," H ").concat(h-u-12," Z"):"M ".concat(g,",").concat(p-6," H ").concat(h-6," V ").concat(m-6," h 12 V ").concat(p+6," H ").concat(g," Z"):p>m?"M ".concat(h,",").concat(m-6," H ").concat(g+6," V ").concat(p-6," h -12 V ").concat(m+6," H ").concat(h," Z"):"M ".concat(g+u,",").concat(p-6," H ").concat(h-6," V ").concat(m-6," h 12 V ").concat(p+6," H ").concat(g+u+12," Z"):p>m?"M ".concat(h-u,",").concat(m," H ").concat(g," V ").concat(p):"M ".concat(h,",").concat(m," V ").concat(p," H ").concat(g+u)}var O=Object(c.a)(l.start,2),b=O[0],y=O[1],v=l.end[0];return"main"===n?"l"===a?"M ".concat(b-u,",").concat(y-6," H ").concat(v," l 0,12 L ").concat(b-42,",").concat(y+6," Z"):"M ".concat(b,",").concat(y-6," H ").concat(v+u," l 12,12 L ").concat(b,",").concat(y+6," Z"):"M ".concat(b-u,",").concat(y," H ").concat(v+u)}var _=Object(c.a)(l.start,2),E=_[0],j=_[1];return"main"===n?"l"===a?"M ".concat(E,",").concat(j-6," L ").concat(E-u,",").concat(j-6," l -12,12 L ").concat(E,",").concat(j+6," Z"):"M ".concat(E,",").concat(j-6," L ").concat(E+u,",").concat(j-6," l 12,12 L ").concat(E,",").concat(j+6," Z"):"l"===a?"M ".concat(E,",").concat(j," L ").concat(E+u,",").concat(j):"M ".concat(E-u,",").concat(j," L ").concat(E,",").concat(j)}return""},E=function(t){var n=a.a.useContext(s.b).param;return a.a.createElement("g",{id:"stn_icons"},Object.keys(n.stn_list).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(n){return a.a.createElement("g",{key:n,style:{transform:"translate(".concat(t.xs[n],"px,").concat(t.ys[n],"px)")}},a.a.createElement(h,{stnId:n,stnState:t.stnStates[n]}))})))},j=r.memo((function(){return r.createElement(r.Fragment,null,r.createElement(x,null),r.createElement(y,null))})),x=(n.default=j,r.memo((function(){return r.createElement("defs",null,r.createElement("circle",{id:"stn_sh",fill:"#fff",stroke:"var(--rmg-theme-colour)",strokeWidth:2,r:5}),r.createElement("circle",{id:"stn_sh_pass",fill:"#fff",stroke:"#aaa",strokeWidth:2,r:5}),r.createElement("path",{id:"int2_sh",fill:"#fff",stroke:"var(--rmg-theme-colour)",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V10 a 5,5 0 1 1 -10,0Z"}),r.createElement("path",{id:"int2_sh_pass",fill:"#fff",stroke:"#aaa",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V10 a 5,5 0 1 1 -10,0Z"}))})))},23:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)e=c[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}e.d(n,"a",(function(){return r}))},24:function(t,n,e){"use strict";e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return u})),e.d(n,"f",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"a",(function(){return m})),e.d(n,"d",(function(){return d}));var r=e(4),a=e(12),c=e(13),i=e(8),o=e(3),s=e(1),l=(e(9),function(t,n,e){return Object.keys(t).reduce((function(r,a){return Object(s.a)({},r,Object(o.a)({},a,t[a].children.reduce((function(r,c){return Object(s.a)({},r,Object(o.a)({},c,1+n(t,c)+e(t,a)))}),{})))}),{})}),u=function t(n,e,r){if(n===e)return{len:0,nodes:[n]};var a=[],c=[];Object.keys(r[n]).forEach((function(i){var o=t(i,e,r);o.len<0||(a.push(r[n][i]+o.len),o.nodes.unshift(n),c.push(o.nodes))}));var i=Math.max.apply(Math,a);return{len:i,nodes:c[a.indexOf(i)]}},f=function(t,n,e){var r=u("linestart","lineend",n);if(r.nodes.includes(t))return u(r.nodes[1],t,n).len;for(var a=e.filter((function(n){return n.includes(t)}))[0],c=t;!r.nodes.includes(c);)c=a[a.indexOf(c)-1];for(var i=t;!r.nodes.includes(i);)i=a[a.indexOf(i)+1];var o="linestart"===c,s=[];return o||"lineend"===i?o?(s[0]=0,s[1]=u(r.nodes[1],i,n).len,s[2]=u(a[1],t,n).len,s[3]=u(t,i,n).len):(s[0]=u(r.nodes[1],c,n).len,s[1]=u(c,r.nodes.slice(-2)[0],n).len,s[2]=u(c,t,n).len,s[3]=u(t,a.slice(-2)[0],n).len):(s[0]=u(r.nodes[1],c,n).len,s[1]=u(c,i,n).len,s[2]=u(c,t,n).len,s[3]=u(t,i,n).len),s[0]+s[2]*s[1]/(s[2]+s[3])},h=function(t,n,e){var r;return console.log("computing stations' states"),Object(i.a)(new Set((r=[]).concat.apply(r,Object(i.a)(n)))).reduce((function(r,a){return Object(s.a)({},r,Object(o.a)({},a,a===t?0:("r"===e?function(t,n,e){var r=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=i.value,l=s.indexOf(t),u=s.indexOf(n);if(-1!==l&&l<u)return!0}}catch(f){a=!0,c=f}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return!1}(t,a,n):function(t,n,e){var r=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=i.value,l=s.indexOf(t),u=s.indexOf(n);if(-1!==u&&u<l)return!0}}catch(f){a=!0,c=f}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return!1}(t,a,n))?1:-1))}),{})},m=function(){function t(n){var e=this;Object(a.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,n){return e.stnList[t].children.includes(n)?1+e.rightWideFactor(t)+e.leftWideFactor(n):-1/0},this.pathTurnParams=function(t){var n=35-17.5*Math.sqrt(3),e=t-2*n;return{tr:35,dx_a:17.5,dy_a:n,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(t){var n=e.pathTurnParams(t),r=n.tr,a=n.dx_a,c=n.dy_a,i=n.dx_l,o=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(a,",").concat(c," l ").concat(i,",").concat(o," a ").concat(r,",").concat(r," 0 0,0 ").concat(a,",").concat(c)},this.pathTurnNE=function(t){var n=e.pathTurnParams(t),r=n.tr,a=n.dx_a,c=n.dy_a,i=n.dx_l,o=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(a,",").concat(-c," l ").concat(i,",").concat(-o," a ").concat(r,",").concat(r," 0 0,1 ").concat(a,",").concat(-c)},this.stnList=n.stnList,this.criticalPath=n.criticalPath}return Object(c.a)(t,[{key:"getYShare",value:function(t,n){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var e=this.stnList[t].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[t]=r,r}var a=0===this.stnList[e].children.indexOf(t)?1:-1;return this.yShares[t]=a,a}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,n,e,a,c,i,o){var s=this,l=Object(r.a)([],3),u=l[0],f=l[1],h=l[2],m=[],d=this.pathTurnParams(i),g=d.dx_a+d.dx_l/2,p=(n[1]-n[0])/o.len*.8,O=((n[1]-n[0])/o.len-2*g)/2;return O+p<0&&console.warn("SVG width too small! ".concat(O+p)),t.forEach((function(n){var r=a[n],o=c[n];if(!f&&0!==f)return u=n,h=r,f=o,void(1===t.length?m.push("M ".concat(r,",").concat(o)):e[0].includes(n)?e[0].includes(t[1])?m.push("M ".concat(r,",").concat(o)):(a[t[1]]>0&&m.push("M ".concat(r,",").concat(o+9.68)),c[t[1]]<0&&m.push("M ".concat(r,",").concat(o-9.68))):m.push("M ".concat(r,",").concat(o)));o>f?(m.push("h ".concat(0===o?r-h-p*s.leftWideFactor(n)-O-2*g:p*s.rightWideFactor(u)+O)),m.push(s.pathTurnSE(i))):o<f&&(m.push("h ".concat(0===o?r-h-p*s.leftWideFactor(n)-O-2*g:p*s.rightWideFactor(u)+O)),m.push(s.pathTurnNE(i))),m.push("H ".concat(r)),u=n,h=r,f=o})),m.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,n){console.log("computing y shares");var e=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in e.yShares||e.getYShare(t,n)})),e.yShares}},{key:"drawLine",value:function(t,n,e,r,a,c,i,o){var s=this,l={main:[],pass:[]};return t.forEach((function(u,f){var h=(u=u.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),m=u.filter((function(t){return n[t]<=0}));1===h.length&&(m=u),0===h.filter((function(t){return-1!==m.indexOf(t)})).length&&h.length&&(m[0]===u[0]?m.push(h[0]):h[0]===u[0]&&h[h.length-1]===u[u.length-1]&&m.length?(m=u,h=[]):m.unshift(h[h.length-1])),l.main.push(new s({stnList:e,criticalPath:o})._linePath(h,r,t,a,c,i,o)),l.pass.push(new s({stnList:e,criticalPath:o})._linePath(m,r,t,a,c,i,o))})),l}}]),t}(),d=function(t,n){var e={main:[],pass:[]};return t.forEach((function(t){var r=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),a=t.filter((function(t){return n[t]<=0}));1===r.length&&(a=t),0===r.filter((function(t){return-1!==a.indexOf(t)})).length&&r.length&&(a[0]===t[0]?a.push(r[0]):r[0]===t[0]&&r[r.length-1]===t[t.length-1]&&a.length?(a=t,r=[]):a.unshift(r[r.length-1])),e.main.push(r),e.pass.push(a)})),e}}}]);
//# sourceMappingURL=railmapSHMetro.852fa3ef.chunk.js.map