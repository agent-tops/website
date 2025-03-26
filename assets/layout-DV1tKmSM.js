import{G as g}from"./graph-ChQduDsJ.js";import{b as Me,p as ce,q as le,g as z,e as ee,l as F,o as Te,s as Ie,c as Se,u as je,d as f,i as m,f as _,v as x,r as I}from"./_baseUniq-UaTKCf30.js";import{f as O,b as he,a as Fe,c as Ve,d as Be,t as V,m as w,e as P,h as ve,g as X,l as M,i as Ae}from"./_basePickBy-mz45TfcH.js";import{bw as Ge,bx as Ye,by as De,bc as qe,bz as $e,bg as pe,bf as we,bA as We,bb as q,aS as ze,bi as Xe,bB as $}from"./index-CZp_AsJc.js";function Ue(e){return Ge(Ye(e,void 0,O),e+"")}var He=1,Je=4;function Ze(e){return Me(e,He|Je)}function Ke(e,n){return e==null?e:De(e,ce(n),qe)}function Qe(e,n){return le(e,ce(n))}function en(e,n){return e>n}function S(e,n){var r={};return n=z(n),le(e,function(t,i,a){$e(r,i,n(t,i,a))}),r}function y(e){return e&&e.length?he(e,pe,en):void 0}function U(e,n){return e&&e.length?he(e,z(n),Fe):void 0}function nn(e,n){var r=e.length;for(e.sort(n);r--;)e[r]=e[r].value;return e}function rn(e,n){if(e!==n){var r=e!==void 0,t=e===null,i=e===e,a=ee(e),o=n!==void 0,u=n===null,d=n===n,s=ee(n);if(!u&&!s&&!a&&e>n||a&&o&&d&&!u&&!s||t&&o&&d||!r&&d||!i)return 1;if(!t&&!a&&!s&&e<n||s&&r&&i&&!t&&!a||u&&r&&i||!o&&i||!d)return-1}return 0}function tn(e,n,r){for(var t=-1,i=e.criteria,a=n.criteria,o=i.length,u=r.length;++t<o;){var d=rn(i[t],a[t]);if(d){if(t>=u)return d;var s=r[t];return d*(s=="desc"?-1:1)}}return e.index-n.index}function an(e,n,r){n.length?n=F(n,function(a){return we(a)?function(o){return Te(o,a.length===1?a[0]:a)}:a}):n=[pe];var t=-1;n=F(n,We(z));var i=Ve(e,function(a,o,u){var d=F(n,function(s){return s(a)});return{criteria:d,index:++t,value:a}});return nn(i,function(a,o){return tn(a,o,r)})}function on(e,n){return Be(e,n,function(r,t){return Ie(e,t)})}var T=Ue(function(e,n){return e==null?{}:on(e,n)}),un=Math.ceil,dn=Math.max;function sn(e,n,r,t){for(var i=-1,a=dn(un((n-e)/(r||1)),0),o=Array(a);a--;)o[++i]=e,e+=r;return o}function fn(e){return function(n,r,t){return t&&typeof t!="number"&&q(n,r,t)&&(r=t=void 0),n=V(n),r===void 0?(r=n,n=0):r=V(r),t=t===void 0?n<r?1:-1:V(t),sn(n,r,t)}}var E=fn(),R=ze(function(e,n){if(e==null)return[];var r=n.length;return r>1&&q(e,n[0],n[1])?n=[]:r>2&&q(n[0],n[1],n[2])&&(n=[n[0]]),an(e,Se(n),[])}),cn=0;function H(e){var n=++cn;return je(e)+n}function ln(e,n,r){for(var t=-1,i=e.length,a=n.length,o={};++t<i;){var u=t<a?n[t]:void 0;r(o,e[t],u)}return o}function hn(e,n){return ln(e||[],n||[],Xe)}class vn{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,r=n._prev;if(r!==n)return ne(r),r}enqueue(n){var r=this._sentinel;n._prev&&n._next&&ne(n),n._next=r._next,r._next._prev=n,r._next=n,n._prev=r}toString(){for(var n=[],r=this._sentinel,t=r._prev;t!==r;)n.push(JSON.stringify(t,pn)),t=t._prev;return"["+n.join(", ")+"]"}}function ne(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function pn(e,n){if(e!=="_next"&&e!=="_prev")return n}function wn(e,n){if(e.nodeCount()<=1)return[];var r=mn(e,n),t=bn(r.graph,r.buckets,r.zeroIdx);return O(w(t,function(i){return e.outEdges(i.v,i.w)}))}function bn(e,n,r){for(var t=[],i=n[n.length-1],a=n[0],o;e.nodeCount();){for(;o=a.dequeue();)B(e,n,r,o);for(;o=i.dequeue();)B(e,n,r,o);if(e.nodeCount()){for(var u=n.length-2;u>0;--u)if(o=n[u].dequeue(),o){t=t.concat(B(e,n,r,o,!0));break}}}return t}function B(e,n,r,t,i){var a=i?[]:void 0;return f(e.inEdges(t.v),function(o){var u=e.edge(o),d=e.node(o.v);i&&a.push({v:o.v,w:o.w}),d.out-=u,W(n,r,d)}),f(e.outEdges(t.v),function(o){var u=e.edge(o),d=o.w,s=e.node(d);s.in-=u,W(n,r,s)}),e.removeNode(t.v),a}function mn(e,n){var r=new g,t=0,i=0;f(e.nodes(),function(u){r.setNode(u,{v:u,in:0,out:0})}),f(e.edges(),function(u){var d=r.edge(u.v,u.w)||0,s=n(u),c=d+s;r.setEdge(u.v,u.w,c),i=Math.max(i,r.node(u.v).out+=s),t=Math.max(t,r.node(u.w).in+=s)});var a=E(i+t+3).map(function(){return new vn}),o=t+1;return f(r.nodes(),function(u){W(a,o,r.node(u))}),{graph:r,buckets:a,zeroIdx:o}}function W(e,n,r){r.out?r.in?e[r.out-r.in+n].enqueue(r):e[e.length-1].enqueue(r):e[0].enqueue(r)}function gn(e){var n=e.graph().acyclicer==="greedy"?wn(e,r(e)):yn(e);f(n,function(t){var i=e.edge(t);e.removeEdge(t),i.forwardName=t.name,i.reversed=!0,e.setEdge(t.w,t.v,i,H("rev"))});function r(t){return function(i){return t.edge(i).weight}}}function yn(e){var n=[],r={},t={};function i(a){Object.prototype.hasOwnProperty.call(t,a)||(t[a]=!0,r[a]=!0,f(e.outEdges(a),function(o){Object.prototype.hasOwnProperty.call(r,o.w)?n.push(o):i(o.w)}),delete r[a])}return f(e.nodes(),i),n}function kn(e){f(e.edges(),function(n){var r=e.edge(n);if(r.reversed){e.removeEdge(n);var t=r.forwardName;delete r.reversed,delete r.forwardName,e.setEdge(n.w,n.v,r,t)}})}function L(e,n,r,t){var i;do i=H(t);while(e.hasNode(i));return r.dummy=n,e.setNode(i,r),i}function xn(e){var n=new g().setGraph(e.graph());return f(e.nodes(),function(r){n.setNode(r,e.node(r))}),f(e.edges(),function(r){var t=n.edge(r.v,r.w)||{weight:0,minlen:1},i=e.edge(r);n.setEdge(r.v,r.w,{weight:t.weight+i.weight,minlen:Math.max(t.minlen,i.minlen)})}),n}function be(e){var n=new g({multigraph:e.isMultigraph()}).setGraph(e.graph());return f(e.nodes(),function(r){e.children(r).length||n.setNode(r,e.node(r))}),f(e.edges(),function(r){n.setEdge(r,e.edge(r))}),n}function re(e,n){var r=e.x,t=e.y,i=n.x-r,a=n.y-t,o=e.width/2,u=e.height/2;if(!i&&!a)throw new Error("Not possible to find intersection inside of the rectangle");var d,s;return Math.abs(a)*o>Math.abs(i)*u?(a<0&&(u=-u),d=u*i/a,s=u):(i<0&&(o=-o),d=o,s=o*a/i),{x:r+d,y:t+s}}function j(e){var n=w(E(me(e)+1),function(){return[]});return f(e.nodes(),function(r){var t=e.node(r),i=t.rank;m(i)||(n[i][t.order]=r)}),n}function En(e){var n=P(w(e.nodes(),function(r){return e.node(r).rank}));f(e.nodes(),function(r){var t=e.node(r);ve(t,"rank")&&(t.rank-=n)})}function On(e){var n=P(w(e.nodes(),function(a){return e.node(a).rank})),r=[];f(e.nodes(),function(a){var o=e.node(a).rank-n;r[o]||(r[o]=[]),r[o].push(a)});var t=0,i=e.graph().nodeRankFactor;f(r,function(a,o){m(a)&&o%i!==0?--t:t&&f(a,function(u){e.node(u).rank+=t})})}function te(e,n,r,t){var i={width:0,height:0};return arguments.length>=4&&(i.rank=r,i.order=t),L(e,"border",i,n)}function me(e){return y(w(e.nodes(),function(n){var r=e.node(n).rank;if(!m(r))return r}))}function Ln(e,n){var r={lhs:[],rhs:[]};return f(e,function(t){n(t)?r.lhs.push(t):r.rhs.push(t)}),r}function Nn(e,n){return n()}function Pn(e){function n(r){var t=e.children(r),i=e.node(r);if(t.length&&f(t,n),Object.prototype.hasOwnProperty.call(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var a=i.minRank,o=i.maxRank+1;a<o;++a)ie(e,"borderLeft","_bl",r,i,a),ie(e,"borderRight","_br",r,i,a)}}f(e.children(),n)}function ie(e,n,r,t,i,a){var o={width:0,height:0,rank:a,borderType:n},u=i[n][a-1],d=L(e,"border",o,r);i[n][a]=d,e.setParent(d,t),u&&e.setEdge(u,d,{weight:1})}function Cn(e){var n=e.graph().rankdir.toLowerCase();(n==="lr"||n==="rl")&&ge(e)}function _n(e){var n=e.graph().rankdir.toLowerCase();(n==="bt"||n==="rl")&&Rn(e),(n==="lr"||n==="rl")&&(Mn(e),ge(e))}function ge(e){f(e.nodes(),function(n){ae(e.node(n))}),f(e.edges(),function(n){ae(e.edge(n))})}function ae(e){var n=e.width;e.width=e.height,e.height=n}function Rn(e){f(e.nodes(),function(n){A(e.node(n))}),f(e.edges(),function(n){var r=e.edge(n);f(r.points,A),Object.prototype.hasOwnProperty.call(r,"y")&&A(r)})}function A(e){e.y=-e.y}function Mn(e){f(e.nodes(),function(n){G(e.node(n))}),f(e.edges(),function(n){var r=e.edge(n);f(r.points,G),Object.prototype.hasOwnProperty.call(r,"x")&&G(r)})}function G(e){var n=e.x;e.x=e.y,e.y=n}function Tn(e){e.graph().dummyChains=[],f(e.edges(),function(n){In(e,n)})}function In(e,n){var r=n.v,t=e.node(r).rank,i=n.w,a=e.node(i).rank,o=n.name,u=e.edge(n),d=u.labelRank;if(a!==t+1){e.removeEdge(n);var s=void 0,c,l;for(l=0,++t;t<a;++l,++t)u.points=[],s={width:0,height:0,edgeLabel:u,edgeObj:n,rank:t},c=L(e,"edge",s,"_d"),t===d&&(s.width=u.width,s.height=u.height,s.dummy="edge-label",s.labelpos=u.labelpos),e.setEdge(r,c,{weight:u.weight},o),l===0&&e.graph().dummyChains.push(c),r=c;e.setEdge(r,i,{weight:u.weight},o)}}function Sn(e){f(e.graph().dummyChains,function(n){var r=e.node(n),t=r.edgeLabel,i;for(e.setEdge(r.edgeObj,t);r.dummy;)i=e.successors(n)[0],e.removeNode(n),t.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),n=i,r=e.node(n)})}function J(e){var n={};function r(t){var i=e.node(t);if(Object.prototype.hasOwnProperty.call(n,t))return i.rank;n[t]=!0;var a=P(w(e.outEdges(t),function(o){return r(o.w)-e.edge(o).minlen}));return(a===Number.POSITIVE_INFINITY||a===void 0||a===null)&&(a=0),i.rank=a}f(e.sources(),r)}function C(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function ye(e){var n=new g({directed:!1}),r=e.nodes()[0],t=e.nodeCount();n.setNode(r,{});for(var i,a;jn(n,e)<t;)i=Fn(n,e),a=n.hasNode(i.v)?C(e,i):-C(e,i),Vn(n,e,a);return n}function jn(e,n){function r(t){f(n.nodeEdges(t),function(i){var a=i.v,o=t===a?i.w:a;!e.hasNode(o)&&!C(n,i)&&(e.setNode(o,{}),e.setEdge(t,o,{}),r(o))})}return f(e.nodes(),r),e.nodeCount()}function Fn(e,n){return U(n.edges(),function(r){if(e.hasNode(r.v)!==e.hasNode(r.w))return C(n,r)})}function Vn(e,n,r){f(e.nodes(),function(t){n.node(t).rank+=r})}function Bn(){}Bn.prototype=new Error;function ke(e,n,r){we(n)||(n=[n]);var t=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],a={};return f(n,function(o){if(!e.hasNode(o))throw new Error("Graph does not have node: "+o);xe(e,o,r==="post",a,t,i)}),i}function xe(e,n,r,t,i,a){Object.prototype.hasOwnProperty.call(t,n)||(t[n]=!0,r||a.push(n),f(i(n),function(o){xe(e,o,r,t,i,a)}),r&&a.push(n))}function An(e,n){return ke(e,n,"post")}function Gn(e,n){return ke(e,n,"pre")}k.initLowLimValues=K;k.initCutValues=Z;k.calcCutValue=Ee;k.leaveEdge=Le;k.enterEdge=Ne;k.exchangeEdges=Pe;function k(e){e=xn(e),J(e);var n=ye(e);K(n),Z(n,e);for(var r,t;r=Le(n);)t=Ne(n,e,r),Pe(n,e,r,t)}function Z(e,n){var r=An(e,e.nodes());r=r.slice(0,r.length-1),f(r,function(t){Yn(e,n,t)})}function Yn(e,n,r){var t=e.node(r),i=t.parent;e.edge(r,i).cutvalue=Ee(e,n,r)}function Ee(e,n,r){var t=e.node(r),i=t.parent,a=!0,o=n.edge(r,i),u=0;return o||(a=!1,o=n.edge(i,r)),u=o.weight,f(n.nodeEdges(r),function(d){var s=d.v===r,c=s?d.w:d.v;if(c!==i){var l=s===a,h=n.edge(d).weight;if(u+=l?h:-h,qn(e,r,c)){var v=e.edge(r,c).cutvalue;u+=l?-v:v}}}),u}function K(e,n){arguments.length<2&&(n=e.nodes()[0]),Oe(e,{},1,n)}function Oe(e,n,r,t,i){var a=r,o=e.node(t);return n[t]=!0,f(e.neighbors(t),function(u){Object.prototype.hasOwnProperty.call(n,u)||(r=Oe(e,n,r,u,t))}),o.low=a,o.lim=r++,i?o.parent=i:delete o.parent,r}function Le(e){return X(e.edges(),function(n){return e.edge(n).cutvalue<0})}function Ne(e,n,r){var t=r.v,i=r.w;n.hasEdge(t,i)||(t=r.w,i=r.v);var a=e.node(t),o=e.node(i),u=a,d=!1;a.lim>o.lim&&(u=o,d=!0);var s=_(n.edges(),function(c){return d===oe(e,e.node(c.v),u)&&d!==oe(e,e.node(c.w),u)});return U(s,function(c){return C(n,c)})}function Pe(e,n,r,t){var i=r.v,a=r.w;e.removeEdge(i,a),e.setEdge(t.v,t.w,{}),K(e),Z(e,n),Dn(e,n)}function Dn(e,n){var r=X(e.nodes(),function(i){return!n.node(i).parent}),t=Gn(e,r);t=t.slice(1),f(t,function(i){var a=e.node(i).parent,o=n.edge(i,a),u=!1;o||(o=n.edge(a,i),u=!0),n.node(i).rank=n.node(a).rank+(u?o.minlen:-o.minlen)})}function qn(e,n,r){return e.hasEdge(n,r)}function oe(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}function $n(e){switch(e.graph().ranker){case"network-simplex":ue(e);break;case"tight-tree":zn(e);break;case"longest-path":Wn(e);break;default:ue(e)}}var Wn=J;function zn(e){J(e),ye(e)}function ue(e){k(e)}function Xn(e){var n=L(e,"root",{},"_root"),r=Un(e),t=y(x(r))-1,i=2*t+1;e.graph().nestingRoot=n,f(e.edges(),function(o){e.edge(o).minlen*=i});var a=Hn(e)+1;f(e.children(),function(o){Ce(e,n,i,a,t,r,o)}),e.graph().nodeRankFactor=i}function Ce(e,n,r,t,i,a,o){var u=e.children(o);if(!u.length){o!==n&&e.setEdge(n,o,{weight:0,minlen:r});return}var d=te(e,"_bt"),s=te(e,"_bb"),c=e.node(o);e.setParent(d,o),c.borderTop=d,e.setParent(s,o),c.borderBottom=s,f(u,function(l){Ce(e,n,r,t,i,a,l);var h=e.node(l),v=h.borderTop?h.borderTop:l,p=h.borderBottom?h.borderBottom:l,b=h.borderTop?t:2*t,N=v!==p?1:i-a[o]+1;e.setEdge(d,v,{weight:b,minlen:N,nestingEdge:!0}),e.setEdge(p,s,{weight:b,minlen:N,nestingEdge:!0})}),e.parent(o)||e.setEdge(n,d,{weight:0,minlen:i+a[o]})}function Un(e){var n={};function r(t,i){var a=e.children(t);a&&a.length&&f(a,function(o){r(o,i+1)}),n[t]=i}return f(e.children(),function(t){r(t,1)}),n}function Hn(e){return I(e.edges(),function(n,r){return n+e.edge(r).weight},0)}function Jn(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,f(e.edges(),function(r){var t=e.edge(r);t.nestingEdge&&e.removeEdge(r)})}function Zn(e,n,r){var t={},i;f(r,function(a){for(var o=e.parent(a),u,d;o;){if(u=e.parent(o),u?(d=t[u],t[u]=o):(d=i,i=o),d&&d!==o){n.setEdge(d,o);return}o=u}})}function Kn(e,n,r){var t=Qn(e),i=new g({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(a){return e.node(a)});return f(e.nodes(),function(a){var o=e.node(a),u=e.parent(a);(o.rank===n||o.minRank<=n&&n<=o.maxRank)&&(i.setNode(a),i.setParent(a,u||t),f(e[r](a),function(d){var s=d.v===a?d.w:d.v,c=i.edge(s,a),l=m(c)?0:c.weight;i.setEdge(s,a,{weight:e.edge(d).weight+l})}),Object.prototype.hasOwnProperty.call(o,"minRank")&&i.setNode(a,{borderLeft:o.borderLeft[n],borderRight:o.borderRight[n]}))}),i}function Qn(e){for(var n;e.hasNode(n=H("_root")););return n}function er(e,n){for(var r=0,t=1;t<n.length;++t)r+=nr(e,n[t-1],n[t]);return r}function nr(e,n,r){for(var t=hn(r,w(r,function(s,c){return c})),i=O(w(n,function(s){return R(w(e.outEdges(s),function(c){return{pos:t[c.w],weight:e.edge(c).weight}}),"pos")})),a=1;a<r.length;)a<<=1;var o=2*a-1;a-=1;var u=w(new Array(o),function(){return 0}),d=0;return f(i.forEach(function(s){var c=s.pos+a;u[c]+=s.weight;for(var l=0;c>0;)c%2&&(l+=u[c+1]),c=c-1>>1,u[c]+=s.weight;d+=s.weight*l})),d}function rr(e){var n={},r=_(e.nodes(),function(u){return!e.children(u).length}),t=y(w(r,function(u){return e.node(u).rank})),i=w(E(t+1),function(){return[]});function a(u){if(!ve(n,u)){n[u]=!0;var d=e.node(u);i[d.rank].push(u),f(e.successors(u),a)}}var o=R(r,function(u){return e.node(u).rank});return f(o,a),i}function tr(e,n){return w(n,function(r){var t=e.inEdges(r);if(t.length){var i=I(t,function(a,o){var u=e.edge(o),d=e.node(o.v);return{sum:a.sum+u.weight*d.order,weight:a.weight+u.weight}},{sum:0,weight:0});return{v:r,barycenter:i.sum/i.weight,weight:i.weight}}else return{v:r}})}function ir(e,n){var r={};f(e,function(i,a){var o=r[i.v]={indegree:0,in:[],out:[],vs:[i.v],i:a};m(i.barycenter)||(o.barycenter=i.barycenter,o.weight=i.weight)}),f(n.edges(),function(i){var a=r[i.v],o=r[i.w];!m(a)&&!m(o)&&(o.indegree++,a.out.push(r[i.w]))});var t=_(r,function(i){return!i.indegree});return ar(t)}function ar(e){var n=[];function r(a){return function(o){o.merged||(m(o.barycenter)||m(a.barycenter)||o.barycenter>=a.barycenter)&&or(a,o)}}function t(a){return function(o){o.in.push(a),--o.indegree===0&&e.push(o)}}for(;e.length;){var i=e.pop();n.push(i),f(i.in.reverse(),r(i)),f(i.out,t(i))}return w(_(n,function(a){return!a.merged}),function(a){return T(a,["vs","i","barycenter","weight"])})}function or(e,n){var r=0,t=0;e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=r/t,e.weight=t,e.i=Math.min(n.i,e.i),n.merged=!0}function ur(e,n){var r=Ln(e,function(c){return Object.prototype.hasOwnProperty.call(c,"barycenter")}),t=r.lhs,i=R(r.rhs,function(c){return-c.i}),a=[],o=0,u=0,d=0;t.sort(dr(!!n)),d=de(a,i,d),f(t,function(c){d+=c.vs.length,a.push(c.vs),o+=c.barycenter*c.weight,u+=c.weight,d=de(a,i,d)});var s={vs:O(a)};return u&&(s.barycenter=o/u,s.weight=u),s}function de(e,n,r){for(var t;n.length&&(t=M(n)).i<=r;)n.pop(),e.push(t.vs),r++;return r}function dr(e){return function(n,r){return n.barycenter<r.barycenter?-1:n.barycenter>r.barycenter?1:e?r.i-n.i:n.i-r.i}}function _e(e,n,r,t){var i=e.children(n),a=e.node(n),o=a?a.borderLeft:void 0,u=a?a.borderRight:void 0,d={};o&&(i=_(i,function(p){return p!==o&&p!==u}));var s=tr(e,i);f(s,function(p){if(e.children(p.v).length){var b=_e(e,p.v,r,t);d[p.v]=b,Object.prototype.hasOwnProperty.call(b,"barycenter")&&fr(p,b)}});var c=ir(s,r);sr(c,d);var l=ur(c,t);if(o&&(l.vs=O([o,l.vs,u]),e.predecessors(o).length)){var h=e.node(e.predecessors(o)[0]),v=e.node(e.predecessors(u)[0]);Object.prototype.hasOwnProperty.call(l,"barycenter")||(l.barycenter=0,l.weight=0),l.barycenter=(l.barycenter*l.weight+h.order+v.order)/(l.weight+2),l.weight+=2}return l}function sr(e,n){f(e,function(r){r.vs=O(r.vs.map(function(t){return n[t]?n[t].vs:t}))})}function fr(e,n){m(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}function cr(e){var n=me(e),r=se(e,E(1,n+1),"inEdges"),t=se(e,E(n-1,-1,-1),"outEdges"),i=rr(e);fe(e,i);for(var a=Number.POSITIVE_INFINITY,o,u=0,d=0;d<4;++u,++d){lr(u%2?r:t,u%4>=2),i=j(e);var s=er(e,i);s<a&&(d=0,o=Ze(i),a=s)}fe(e,o)}function se(e,n,r){return w(n,function(t){return Kn(e,t,r)})}function lr(e,n){var r=new g;f(e,function(t){var i=t.graph().root,a=_e(t,i,r,n);f(a.vs,function(o,u){t.node(o).order=u}),Zn(t,r,a.vs)})}function fe(e,n){f(n,function(r){f(r,function(t,i){e.node(t).order=i})})}function hr(e){var n=pr(e);f(e.graph().dummyChains,function(r){for(var t=e.node(r),i=t.edgeObj,a=vr(e,n,i.v,i.w),o=a.path,u=a.lca,d=0,s=o[d],c=!0;r!==i.w;){if(t=e.node(r),c){for(;(s=o[d])!==u&&e.node(s).maxRank<t.rank;)d++;s===u&&(c=!1)}if(!c){for(;d<o.length-1&&e.node(s=o[d+1]).minRank<=t.rank;)d++;s=o[d]}e.setParent(r,s),r=e.successors(r)[0]}})}function vr(e,n,r,t){var i=[],a=[],o=Math.min(n[r].low,n[t].low),u=Math.max(n[r].lim,n[t].lim),d,s;d=r;do d=e.parent(d),i.push(d);while(d&&(n[d].low>o||u>n[d].lim));for(s=d,d=t;(d=e.parent(d))!==s;)a.push(d);return{path:i.concat(a.reverse()),lca:s}}function pr(e){var n={},r=0;function t(i){var a=r;f(e.children(i),t),n[i]={low:a,lim:r++}}return f(e.children(),t),n}function wr(e,n){var r={};function t(i,a){var o=0,u=0,d=i.length,s=M(a);return f(a,function(c,l){var h=mr(e,c),v=h?e.node(h).order:d;(h||c===s)&&(f(a.slice(u,l+1),function(p){f(e.predecessors(p),function(b){var N=e.node(b),Q=N.order;(Q<o||v<Q)&&!(N.dummy&&e.node(p).dummy)&&Re(r,b,p)})}),u=l+1,o=v)}),a}return I(n,t),r}function br(e,n){var r={};function t(a,o,u,d,s){var c;f(E(o,u),function(l){c=a[l],e.node(c).dummy&&f(e.predecessors(c),function(h){var v=e.node(h);v.dummy&&(v.order<d||v.order>s)&&Re(r,h,c)})})}function i(a,o){var u=-1,d,s=0;return f(o,function(c,l){if(e.node(c).dummy==="border"){var h=e.predecessors(c);h.length&&(d=e.node(h[0]).order,t(o,s,l,u,d),s=l,u=d)}t(o,s,o.length,d,a.length)}),o}return I(n,i),r}function mr(e,n){if(e.node(n).dummy)return X(e.predecessors(n),function(r){return e.node(r).dummy})}function Re(e,n,r){if(n>r){var t=n;n=r,r=t}var i=e[n];i||(e[n]=i={}),i[r]=!0}function gr(e,n,r){if(n>r){var t=n;n=r,r=t}return!!e[n]&&Object.prototype.hasOwnProperty.call(e[n],r)}function yr(e,n,r,t){var i={},a={},o={};return f(n,function(u){f(u,function(d,s){i[d]=d,a[d]=d,o[d]=s})}),f(n,function(u){var d=-1;f(u,function(s){var c=t(s);if(c.length){c=R(c,function(b){return o[b]});for(var l=(c.length-1)/2,h=Math.floor(l),v=Math.ceil(l);h<=v;++h){var p=c[h];a[s]===s&&d<o[p]&&!gr(r,s,p)&&(a[p]=s,a[s]=i[s]=i[p],d=o[p])}}})}),{root:i,align:a}}function kr(e,n,r,t,i){var a={},o=xr(e,n,r,i),u=i?"borderLeft":"borderRight";function d(l,h){for(var v=o.nodes(),p=v.pop(),b={};p;)b[p]?l(p):(b[p]=!0,v.push(p),v=v.concat(h(p))),p=v.pop()}function s(l){a[l]=o.inEdges(l).reduce(function(h,v){return Math.max(h,a[v.v]+o.edge(v))},0)}function c(l){var h=o.outEdges(l).reduce(function(p,b){return Math.min(p,a[b.w]-o.edge(b))},Number.POSITIVE_INFINITY),v=e.node(l);h!==Number.POSITIVE_INFINITY&&v.borderType!==u&&(a[l]=Math.max(a[l],h))}return d(s,o.predecessors.bind(o)),d(c,o.successors.bind(o)),f(t,function(l){a[l]=a[r[l]]}),a}function xr(e,n,r,t){var i=new g,a=e.graph(),o=Pr(a.nodesep,a.edgesep,t);return f(n,function(u){var d;f(u,function(s){var c=r[s];if(i.setNode(c),d){var l=r[d],h=i.edge(l,c);i.setEdge(l,c,Math.max(o(e,s,d),h||0))}d=s})}),i}function Er(e,n){return U(x(n),function(r){var t=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;return Ke(r,function(a,o){var u=Cr(e,o)/2;t=Math.max(a+u,t),i=Math.min(a-u,i)}),t-i})}function Or(e,n){var r=x(n),t=P(r),i=y(r);f(["u","d"],function(a){f(["l","r"],function(o){var u=a+o,d=e[u],s;if(d!==n){var c=x(d);s=o==="l"?t-P(c):i-y(c),s&&(e[u]=S(d,function(l){return l+s}))}})})}function Lr(e,n){return S(e.ul,function(r,t){if(n)return e[n.toLowerCase()][t];var i=R(w(e,t));return(i[1]+i[2])/2})}function Nr(e){var n=j(e),r=$(wr(e,n),br(e,n)),t={},i;f(["u","d"],function(o){i=o==="u"?n:x(n).reverse(),f(["l","r"],function(u){u==="r"&&(i=w(i,function(l){return x(l).reverse()}));var d=(o==="u"?e.predecessors:e.successors).bind(e),s=yr(e,i,r,d),c=kr(e,i,s.root,s.align,u==="r");u==="r"&&(c=S(c,function(l){return-l})),t[o+u]=c})});var a=Er(e,t);return Or(t,a),Lr(t,e.graph().align)}function Pr(e,n,r){return function(t,i,a){var o=t.node(i),u=t.node(a),d=0,s;if(d+=o.width/2,Object.prototype.hasOwnProperty.call(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":s=-o.width/2;break;case"r":s=o.width/2;break}if(s&&(d+=r?s:-s),s=0,d+=(o.dummy?n:e)/2,d+=(u.dummy?n:e)/2,d+=u.width/2,Object.prototype.hasOwnProperty.call(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":s=u.width/2;break;case"r":s=-u.width/2;break}return s&&(d+=r?s:-s),s=0,d}}function Cr(e,n){return e.node(n).width}function _r(e){e=be(e),Rr(e),Qe(Nr(e),function(n,r){e.node(r).x=n})}function Rr(e){var n=j(e),r=e.graph().ranksep,t=0;f(n,function(i){var a=y(w(i,function(o){return e.node(o).height}));f(i,function(o){e.node(o).y=t+a/2}),t+=a+r})}function it(e,n){var r=Nn;r("layout",()=>{var t=r("  buildLayoutGraph",()=>Yr(e));r("  runLayout",()=>Mr(t,r)),r("  updateInputGraph",()=>Tr(e,t))})}function Mr(e,n){n("    makeSpaceForEdgeLabels",()=>Dr(e)),n("    removeSelfEdges",()=>Zr(e)),n("    acyclic",()=>gn(e)),n("    nestingGraph.run",()=>Xn(e)),n("    rank",()=>$n(be(e))),n("    injectEdgeLabelProxies",()=>qr(e)),n("    removeEmptyRanks",()=>On(e)),n("    nestingGraph.cleanup",()=>Jn(e)),n("    normalizeRanks",()=>En(e)),n("    assignRankMinMax",()=>$r(e)),n("    removeEdgeLabelProxies",()=>Wr(e)),n("    normalize.run",()=>Tn(e)),n("    parentDummyChains",()=>hr(e)),n("    addBorderSegments",()=>Pn(e)),n("    order",()=>cr(e)),n("    insertSelfEdges",()=>Kr(e)),n("    adjustCoordinateSystem",()=>Cn(e)),n("    position",()=>_r(e)),n("    positionSelfEdges",()=>Qr(e)),n("    removeBorderNodes",()=>Jr(e)),n("    normalize.undo",()=>Sn(e)),n("    fixupEdgeLabelCoords",()=>Ur(e)),n("    undoCoordinateSystem",()=>_n(e)),n("    translateGraph",()=>zr(e)),n("    assignNodeIntersects",()=>Xr(e)),n("    reversePoints",()=>Hr(e)),n("    acyclic.undo",()=>kn(e))}function Tr(e,n){f(e.nodes(),function(r){var t=e.node(r),i=n.node(r);t&&(t.x=i.x,t.y=i.y,n.children(r).length&&(t.width=i.width,t.height=i.height))}),f(e.edges(),function(r){var t=e.edge(r),i=n.edge(r);t.points=i.points,Object.prototype.hasOwnProperty.call(i,"x")&&(t.x=i.x,t.y=i.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height}var Ir=["nodesep","edgesep","ranksep","marginx","marginy"],Sr={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},jr=["acyclicer","ranker","rankdir","align"],Fr=["width","height"],Vr={width:0,height:0},Br=["minlen","weight","width","height","labeloffset"],Ar={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},Gr=["labelpos"];function Yr(e){var n=new g({multigraph:!0,compound:!0}),r=D(e.graph());return n.setGraph($({},Sr,Y(r,Ir),T(r,jr))),f(e.nodes(),function(t){var i=D(e.node(t));n.setNode(t,Ae(Y(i,Fr),Vr)),n.setParent(t,e.parent(t))}),f(e.edges(),function(t){var i=D(e.edge(t));n.setEdge(t,$({},Ar,Y(i,Br),T(i,Gr)))}),n}function Dr(e){var n=e.graph();n.ranksep/=2,f(e.edges(),function(r){var t=e.edge(r);t.minlen*=2,t.labelpos.toLowerCase()!=="c"&&(n.rankdir==="TB"||n.rankdir==="BT"?t.width+=t.labeloffset:t.height+=t.labeloffset)})}function qr(e){f(e.edges(),function(n){var r=e.edge(n);if(r.width&&r.height){var t=e.node(n.v),i=e.node(n.w),a={rank:(i.rank-t.rank)/2+t.rank,e:n};L(e,"edge-proxy",a,"_ep")}})}function $r(e){var n=0;f(e.nodes(),function(r){var t=e.node(r);t.borderTop&&(t.minRank=e.node(t.borderTop).rank,t.maxRank=e.node(t.borderBottom).rank,n=y(n,t.maxRank))}),e.graph().maxRank=n}function Wr(e){f(e.nodes(),function(n){var r=e.node(n);r.dummy==="edge-proxy"&&(e.edge(r.e).labelRank=r.rank,e.removeNode(n))})}function zr(e){var n=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,i=0,a=e.graph(),o=a.marginx||0,u=a.marginy||0;function d(s){var c=s.x,l=s.y,h=s.width,v=s.height;n=Math.min(n,c-h/2),r=Math.max(r,c+h/2),t=Math.min(t,l-v/2),i=Math.max(i,l+v/2)}f(e.nodes(),function(s){d(e.node(s))}),f(e.edges(),function(s){var c=e.edge(s);Object.prototype.hasOwnProperty.call(c,"x")&&d(c)}),n-=o,t-=u,f(e.nodes(),function(s){var c=e.node(s);c.x-=n,c.y-=t}),f(e.edges(),function(s){var c=e.edge(s);f(c.points,function(l){l.x-=n,l.y-=t}),Object.prototype.hasOwnProperty.call(c,"x")&&(c.x-=n),Object.prototype.hasOwnProperty.call(c,"y")&&(c.y-=t)}),a.width=r-n+o,a.height=i-t+u}function Xr(e){f(e.edges(),function(n){var r=e.edge(n),t=e.node(n.v),i=e.node(n.w),a,o;r.points?(a=r.points[0],o=r.points[r.points.length-1]):(r.points=[],a=i,o=t),r.points.unshift(re(t,a)),r.points.push(re(i,o))})}function Ur(e){f(e.edges(),function(n){var r=e.edge(n);if(Object.prototype.hasOwnProperty.call(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}function Hr(e){f(e.edges(),function(n){var r=e.edge(n);r.reversed&&r.points.reverse()})}function Jr(e){f(e.nodes(),function(n){if(e.children(n).length){var r=e.node(n),t=e.node(r.borderTop),i=e.node(r.borderBottom),a=e.node(M(r.borderLeft)),o=e.node(M(r.borderRight));r.width=Math.abs(o.x-a.x),r.height=Math.abs(i.y-t.y),r.x=a.x+r.width/2,r.y=t.y+r.height/2}}),f(e.nodes(),function(n){e.node(n).dummy==="border"&&e.removeNode(n)})}function Zr(e){f(e.edges(),function(n){if(n.v===n.w){var r=e.node(n.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}})}function Kr(e){var n=j(e);f(n,function(r){var t=0;f(r,function(i,a){var o=e.node(i);o.order=a+t,f(o.selfEdges,function(u){L(e,"selfedge",{width:u.label.width,height:u.label.height,rank:o.rank,order:a+ ++t,e:u.e,label:u.label},"_se")}),delete o.selfEdges})})}function Qr(e){f(e.nodes(),function(n){var r=e.node(n);if(r.dummy==="selfedge"){var t=e.node(r.e.v),i=t.x+t.width/2,a=t.y,o=r.x-i,u=t.height/2;e.setEdge(r.e,r.label),e.removeNode(n),r.label.points=[{x:i+2*o/3,y:a-u},{x:i+5*o/6,y:a-u},{x:i+o,y:a},{x:i+5*o/6,y:a+u},{x:i+2*o/3,y:a+u}],r.label.x=r.x,r.label.y=r.y}})}function Y(e,n){return S(T(e,n),Number)}function D(e){var n={};return f(e,function(r,t){n[t.toLowerCase()]=r}),n}export{it as l};
