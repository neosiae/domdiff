var domdiff=function(){"use strict";var r=function(r,e,n,t,f,o){if(f-t<2)e.insertBefore(r(n[t],1),o);else{for(var i=e.ownerDocument.createDocumentFragment();t<f;)i.appendChild(r(n[t++],1));e.insertBefore(i,o)}},e=function(r,e){return r==e},n=function(r){return r},t=function(r,e,n,t,f,o,i){var u=o-f;if(u<1)return-1;for(;n-e>=u;){for(var a=e,v=f;a<n&&v<o&&i(r[a],t[v]);)a++,v++;if(v===o)return e;e=a+1}return-1},f=function(r,e,n,t,f,o){for(;t<f&&o(n[t],r[e-1]);)t++,e--;return 0===e},o=function(r,e,n,t,f){return n<t?r(e[n],0):0<n?r(e[n-1],-0).nextSibling:f},i=function(r,e,n,t,f){if(f-t<2)e.removeChild(r(n[t],-1));else{var o=e.ownerDocument.createRange();o.setStartBefore(r(n[t],-1)),o.setEndAfter(r(n[f-1],-1)),o.deleteContents()}},u="undefined"==typeof Map?function(){var r=[],e=[];return{has:function(e){return-1<r.indexOf(e)},get:function(n){return e[r.indexOf(n)]},set:function(n,t){var f=r.indexOf(n);e[f<0?r.push(n)-1:f]=t}}}:Map,a=function(r,e,n,t,f,o,i,a){var v=0,c=t<a?t:a,d=Array(c++),l=Array(c);l[0]=-1;for(var h=1;h<c;h++)l[h]=i;for(var g=new u,p=o;p<i;p++)g.set(f[p],p);for(var b=e;b<n;b++){var w=g.get(r[b]);null!=w&&-1<(v=s(l,c,w))&&(l[v]=w,d[v]={newi:b,oldi:w,prev:d[v-1]})}for(v=--c,--i;l[v]>i;)--v;c=a+t-v;var m=Array(c),k=d[v];for(--n;k;){for(var y=k,A=y.newi,x=y.oldi;n>A;)m[--c]=1,--n;for(;i>x;)m[--c]=-1,--i;m[--c]=0,--n,--i,k=k.prev}for(;n>=e;)m[--c]=1,--n;for(;i>=o;)m[--c]=-1,--i;return m},v=function(r,e,n,t,f,o,i){var u=n+o,a=[],v=void 0,c=void 0,s=void 0,d=void 0,l=void 0,h=void 0,g=void 0;r:for(v=0;v<=u;v++){if(v>50)return null;for(g=v-1,l=v?a[v-1]:[0,0],h=a[v]=[],c=-v;c<=v;c+=2){for(d=c===-v||c!==v&&l[g+c-1]<l[g+c+1]?l[g+c+1]:l[g+c-1]+1,s=d-c;d<o&&s<n&&i(t[f+d],r[e+s]);)d++,s++;if(d===o&&s===n)break r;h[v+c]=d}}var p=Array(v/2+u/2),b=p.length-1;for(v=a.length-1;v>=0;v--){for(;d>0&&s>0&&i(t[f+d-1],r[e+s-1]);)p[b--]=0,d--,s--;if(!v)break;g=v-1,l=v?a[v-1]:[0,0],c=d-s,c===-v||c!==v&&l[g+c-1]<l[g+c+1]?(s--,p[b--]=1):(d--,p[b--]=-1)}return p},c=function(e,n,t,f,o,a,v,c,s){for(var d=new u,l=e.length,h=v,g=0;g<l;)switch(e[g++]){case 0:o++,h++;break;case 1:d.set(f[o],1),r(n,t,f,o++,o,h<c?n(a[h],1):s);break;case-1:h++}for(g=0;g<l;)switch(e[g++]){case 0:v++;break;case-1:d.has(a[v])?v++:i(n,t,a,v++,v)}},s=function(r,e,n){for(var t=1,f=e;t<f;){var o=(t+f)/2>>>0;n<r[o]?f=o:t=o+1}return t},d=function(r,e,n,t,f,o,i,u,s,d,l,h,g){c(v(n,t,o,i,u,d,h)||a(n,t,f,o,i,u,s,d),r,e,n,t,i,u,l,g)};return function(u,a,v,c){c||(c={});for(var s=c.compare||e,l=c.node||n,h=null==c.before?null:l(c.before,0),g=a.length,p=g,b=0,w=v.length,m=0;b<p&&m<w&&s(a[b],v[m]);)b++,m++;for(;b<p&&m<w&&s(a[p-1],v[w-1]);)p--,w--;var k=b===p,y=m===w;if(k&&y)return v;if(k&&m<w)return r(l,u,v,m,w,o(l,a,b,g,h)),v;if(y&&b<p)return i(l,u,a,b,p),v;var A=p-b,x=w-m,B=-1;if(A<x){if(-1<(B=t(v,m,w,a,b,p,s)))return r(l,u,v,m,B,l(a[b],0)),r(l,u,v,B+A,w,o(l,a,p,g,h)),v}else if(x<A&&-1<(B=t(a,b,p,v,m,w,s)))return i(l,u,a,b,B),i(l,u,a,B+x,p),v;return A<2||x<2?(r(l,u,v,m,w,l(a[b],0)),i(l,u,a,b,p),v):A===x&&f(v,w,a,b,p,s)?(r(l,u,v,m,w,o(l,a,p,g,h)),v):(d(l,u,v,m,w,x,a,b,p,A,g,s,h),v)}}();