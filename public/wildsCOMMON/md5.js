!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,r,e,o,u,c){return t((f=t(t(r,n),t(o,c)))<<(i=u)|f>>>32-i,e);var f,i}function e(n,t,e,o,u,c,f){return r(t&e|~t&o,n,t,u,c,f)}function o(n,t,e,o,u,c,f){return r(t&o|e&~o,n,t,u,c,f)}function u(n,t,e,o,u,c,f){return r(t^e^o,n,t,u,c,f)}function c(n,t,e,o,u,c,f){return r(e^(t|~o),n,t,u,c,f)}function f(n,r){var f,i,a,h,d;n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var l=1732584193,v=-271733879,g=-1732584194,m=271733878;for(f=0;f<n.length;f+=16)i=l,a=v,h=g,d=m,v=c(v=c(v=c(v=c(v=u(v=u(v=u(v=u(v=o(v=o(v=o(v=o(v=e(v=e(v=e(v=e(v,g=e(g,m=e(m,l=e(l,v,g,m,n[f],7,-680876936),v,g,n[f+1],12,-389564586),l,v,n[f+2],17,606105819),m,l,n[f+3],22,-1044525330),g=e(g,m=e(m,l=e(l,v,g,m,n[f+4],7,-176418897),v,g,n[f+5],12,1200080426),l,v,n[f+6],17,-1473231341),m,l,n[f+7],22,-45705983),g=e(g,m=e(m,l=e(l,v,g,m,n[f+8],7,1770035416),v,g,n[f+9],12,-1958414417),l,v,n[f+10],17,-42063),m,l,n[f+11],22,-1990404162),g=e(g,m=e(m,l=e(l,v,g,m,n[f+12],7,1804603682),v,g,n[f+13],12,-40341101),l,v,n[f+14],17,-1502002290),m,l,n[f+15],22,1236535329),g=o(g,m=o(m,l=o(l,v,g,m,n[f+1],5,-165796510),v,g,n[f+6],9,-1069501632),l,v,n[f+11],14,643717713),m,l,n[f],20,-373897302),g=o(g,m=o(m,l=o(l,v,g,m,n[f+5],5,-701558691),v,g,n[f+10],9,38016083),l,v,n[f+15],14,-660478335),m,l,n[f+4],20,-405537848),g=o(g,m=o(m,l=o(l,v,g,m,n[f+9],5,568446438),v,g,n[f+14],9,-1019803690),l,v,n[f+3],14,-187363961),m,l,n[f+8],20,1163531501),g=o(g,m=o(m,l=o(l,v,g,m,n[f+13],5,-1444681467),v,g,n[f+2],9,-51403784),l,v,n[f+7],14,1735328473),m,l,n[f+12],20,-1926607734),g=u(g,m=u(m,l=u(l,v,g,m,n[f+5],4,-378558),v,g,n[f+8],11,-2022574463),l,v,n[f+11],16,1839030562),m,l,n[f+14],23,-35309556),g=u(g,m=u(m,l=u(l,v,g,m,n[f+1],4,-1530992060),v,g,n[f+4],11,1272893353),l,v,n[f+7],16,-155497632),m,l,n[f+10],23,-1094730640),g=u(g,m=u(m,l=u(l,v,g,m,n[f+13],4,681279174),v,g,n[f],11,-358537222),l,v,n[f+3],16,-722521979),m,l,n[f+6],23,76029189),g=u(g,m=u(m,l=u(l,v,g,m,n[f+9],4,-640364487),v,g,n[f+12],11,-421815835),l,v,n[f+15],16,530742520),m,l,n[f+2],23,-995338651),g=c(g,m=c(m,l=c(l,v,g,m,n[f],6,-198630844),v,g,n[f+7],10,1126891415),l,v,n[f+14],15,-1416354905),m,l,n[f+5],21,-57434055),g=c(g,m=c(m,l=c(l,v,g,m,n[f+12],6,1700485571),v,g,n[f+3],10,-1894986606),l,v,n[f+10],15,-1051523),m,l,n[f+1],21,-2054922799),g=c(g,m=c(m,l=c(l,v,g,m,n[f+8],6,1873313359),v,g,n[f+15],10,-30611744),l,v,n[f+6],15,-1560198380),m,l,n[f+13],21,1309151649),g=c(g,m=c(m,l=c(l,v,g,m,n[f+4],6,-145523070),v,g,n[f+11],10,-1120210379),l,v,n[f+2],15,718787259),m,l,n[f+9],21,-343485551),l=t(l,i),v=t(v,a),g=t(g,h),m=t(m,d);return[l,v,g,m]}function i(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function a(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){var t,r,e="0123456789abcdef",o="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),o+=e.charAt(t>>>4&15)+e.charAt(15&t);return o}function d(n){return unescape(encodeURIComponent(n))}function l(n){return i(f(a(t=d(n)),8*t.length));var t}function v(n,t){return function(n,t){var r,e,o=a(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=f(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=f(u.concat(a(t)),512+8*t.length),i(f(c.concat(e),640))}(d(n),d(t))}function g(n,t,r){return t?r?v(t,n):h(v(t,n)):r?l(n):h(l(n))}"function"==typeof define&&define.amd?define(function(){return g}):"object"==typeof module&&module.exports?module.exports=g:n.md5=g}(this);