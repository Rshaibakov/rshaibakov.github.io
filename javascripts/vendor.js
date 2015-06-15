/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*
 AngularJS v1.4.0
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,W,u){'use strict';function F(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.0/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Ta(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===pa&&a?!0:L(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function n(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(K(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==n)b.forEach(a,c,b);else if(nc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)kb.call(b,d)&&a.call(c,b[d],d,b);return b}function oc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function pc(b){return function(a,c){b(c,a)}}function Td(){return++lb}function qc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Nb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(C(g)||G(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var m=h[l],r=g[m];c&&C(r)?(C(b[m])||(b[m]=K(r)?[]:{}),Nb(b[m],
[r],!0)):b[m]=r}}qc(b,d);return b}function Q(b){return Nb(b,ra.call(arguments,1),!1)}function Ud(b){return Nb(b,ra.call(arguments,1),!0)}function Y(b){return parseInt(b,10)}function Ob(b,a){return Q(Object.create(b),a)}function w(){}function Ua(b){return b}function qa(b){return function(){return b}}function v(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function C(b){return null!==b&&"object"===typeof b}function nc(b){return null!==b&&"object"===typeof b&&!rc(b)}function L(b){return"string"===
typeof b}function V(b){return"number"===typeof b}function da(b){return"[object Date]"===sa.call(b)}function G(b){return"function"===typeof b}function Va(b){return"[object RegExp]"===sa.call(b)}function Ta(b){return b&&b.window===b}function Wa(b){return b&&b.$evalAsync&&b.$watch}function Xa(b){return"boolean"===typeof b}function sc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return E(b.nodeName||
b[0]&&b[0].nodeName)}function Ya(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function ua(b,a,c,d){function e(a,b,c,d,e){var f=ua(b,null,d,e);C(b)&&(d.push(b),e.push(f));c[a]=f}if(Ta(b)||Wa(b))throw Ea("cpws");if(tc.test(sa.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];if(C(b)){var f=c.indexOf(b);if(-1!==f)return d[f];c.push(b);d.push(a)}var g;if(K(b))for(f=a.length=0;f<b.length;f++)g=ua(b[f],null,c,d),C(b[f])&&(c.push(b[f]),d.push(g)),a.push(g);else{f=a.$$hashKey;
K(a)?a.length=0:n(a,function(b,c){delete a[c]});if(nc(b))for(g in b)e(g,b[g],a,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(g in b)b.hasOwnProperty(g)&&e(g,b[g],a,c,d);else for(g in b)kb.call(b,g)&&e(g,b[g],a,c,d);qc(a,f)}}else if(a=b)K(b)?a=ua(b,[],c,d):tc.test(sa.call(b))?a=new b.constructor(b):da(b)?a=new Date(b.getTime()):Va(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):C(b)&&(g=Object.create(rc(b)),a=ua(b,g,c,d));return a}function fa(b,a){if(K(b)){a=
a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(C(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(da(b))return da(a)?ka(b.getTime(),a.getTime()):!1;if(Va(b))return Va(a)?b.toString()==a.toString():!1;if(Wa(b)||
Wa(a)||Ta(b)||Ta(a)||K(a)||da(a)||Va(a))return!1;c=ga();for(d in b)if("$"!==d.charAt(0)&&!G(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||"$"===d.charAt(0)||a[d]===u||G(a[d])))return!1;return!0}return!1}function Za(b,a,c){return b.concat(ra.call(a,c))}function uc(b,a){var c=2<arguments.length?ra.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Za(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,
arguments):a.call(b)}}function Wd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Ta(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Wa(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return u;V(a)||(a=a?2:null);return JSON.stringify(b,Wd,a)}function vc(b){return L(b)?JSON.parse(b):b}function wc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Pb(b,a,c){c=c?-1:1;var d=wc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());
a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function va(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return b[0].nodeType===ab?E(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+E(b)})}catch(d){return E(c)}}function xc(b){try{return decodeURIComponent(b)}catch(a){}}function yc(b){var a={},c,d;n((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=xc(c[0]),y(d)&&(b=y(c[1])?xc(c[1]):!0,kb.call(a,d)?K(a[d])?
a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Qb(b){var a=[];n(b,function(b,d){K(b)?n(b,function(b){a.push(ia(d,!0)+(!0===b?"":"="+ia(b,!0)))}):a.push(ia(d,!0)+(!0===b?"":"="+ia(b,!0)))});return a.length?a.join("&"):""}function mb(b){return ia(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ia(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}
function Xd(b,a){var c,d,e=Na.length;for(d=0;d<e;++d)if(c=Na[d]+a,L(c=b.getAttribute(c)))return c;return null}function Yd(b,a){var c,d,e={};n(Na,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});n(Na,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Xd(c,"strict-di"),a(c,d?[d]:[],e))}function zc(b,a,c){C(c)||(c={});c=Q({strictDi:!1},c);var d=function(){b=z(b);if(b.injector()){var d=
b[0]===W?"document":va(b);throw Ea("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=bb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;N&&e.test(N.name)&&(c.debugInfoEnabled=
!0,N.name=N.name.replace(e,""));if(N&&!f.test(N.name))return d();N.name=N.name.replace(f,"");aa.resumeBootstrap=function(b){n(b,function(b){a.push(b)});return d()};G(aa.resumeDeferredBootstrap)&&aa.resumeDeferredBootstrap()}function Zd(){N.name="NG_ENABLE_DEBUG_INFO!"+N.name;N.location.reload()}function $d(b){b=aa.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}function Ac(b,a){a=a||"_";return b.replace(ae,function(b,d){return(d?a:"")+b.toLowerCase()})}function be(){var b;
if(!Bc){var a=nb();la=N.jQuery;y(a)&&(la=null===a?u:N[a]);la&&la.fn.on?(z=la,Q(la.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,"events"))&&d.$destroy&&la(f).triggerHandler("$destroy");b(a)}):z=R;aa.element=z;Bc=!0}}function Sb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Pa(b,a,c){c&&
K(b)&&(b=b[b.length-1]);Sb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Qa(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Cc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?uc(e,b):b}function ob(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return z(c)}function ga(){return Object.create(null)}function ce(b){function a(a,
b,c){return a[b]||(a[b]=c())}var c=F("$injector"),d=F("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||F;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return A}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],s=a("$injector","invoke","push",d),A={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,
name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:a("$provide","decorator"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:s,run:function(a){e.push(a);return this}};h&&s(h);return A})}})}function de(b){Q(b,{bootstrap:zc,copy:ua,extend:Q,
merge:Ud,equals:ka,element:z,forEach:n,injector:bb,noop:w,bind:uc,toJson:$a,fromJson:vc,identity:Ua,isUndefined:v,isDefined:y,isString:L,isFunction:G,isObject:C,isNumber:V,isElement:sc,isArray:K,version:ee,isDate:da,lowercase:E,uppercase:pb,callbacks:{counter:0},getTestability:$d,$$minErr:F,$$csp:cb,reloadWithDebugInfo:Zd});db=ce(N);try{db("ngLocale")}catch(a){db("ngLocale",[]).provider("$locale",fe)}db("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",
Dc).directive({a:he,input:Ec,textarea:Ec,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Fc,ngPattern:Fc,required:Gc,ngRequired:Gc,minlength:Hc,ngMinlength:Hc,maxlength:Ic,
ngMaxlength:Ic,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(qb).directive(Jc);a.provider({$anchorScroll:Qe,$animate:Re,$$animateQueue:Se,$$AnimateRunner:Te,$browser:Ue,$cacheFactory:Ve,$controller:We,$document:Xe,$exceptionHandler:Ye,$filter:Kc,$interpolate:Ze,$interval:$e,$http:af,$httpParamSerializer:bf,$httpParamSerializerJQLike:cf,$httpBackend:df,$location:ef,$log:ff,$parse:gf,$rootScope:hf,$q:jf,$$q:kf,$sce:lf,$sceDelegate:mf,$sniffer:nf,$templateCache:of,$templateRequest:pf,
$$testability:qf,$timeout:rf,$window:sf,$$rAF:tf,$$asyncCallback:uf,$$jqLite:vf,$$HashMap:wf,$$cookieReader:xf})}])}function eb(b){return b.replace(yf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(zf,"Moz$1")}function Lc(b){b=b.nodeType;return b===pa||!b||9===b}function Mc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Tb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Af.exec(b)||["",""])[1].toLowerCase();d=ma[d]||ma._default;c.innerHTML=d[1]+b.replace(Bf,"<$1></$2>")+d[2];for(d=
d[0];d--;)c=c.lastChild;f=Za(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;L(b)&&(b=T(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Ub("nosel");return new R(b)}if(a){a=W;var c;b=(c=Cf.exec(b))?[a.createElement(c[1])]:(c=Mc(b,a))?c.childNodes:[]}Nc(this,b)}function Vb(b){return b.cloneNode(!0)}function rb(b,a){a||sb(b);if(b.querySelectorAll)for(var c=
b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)sb(c[d])}function Oc(b,a,c,d){if(y(d))throw Ub("offargs");var e=(d=tb(b))&&d.events,f=d&&d.handle;if(f)if(a)n(a.split(" "),function(a){if(y(c)){var d=e[a];Ya(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function sb(b,a){var c=b.ng339,d=c&&ub[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Oc(b)),delete ub[c],b.ng339=
u))}function tb(b,a){var c=b.ng339,c=c&&ub[c];a&&!c&&(b.ng339=c=++Df,c=ub[c]={events:{},data:{},handle:u});return c}function Wb(b,a,c){if(Lc(b)){var d=y(c),e=!d&&a&&!C(a),f=!a;b=(b=tb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];Q(b,a)}}}function vb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function wb(b,a){a&&b.setAttribute&&n(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function xb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",T(c))}}function Nc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Pc(b,a){return yb(b,"$"+(a||"ngController")+
"Controller")}function yb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=K(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=z.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Qc(b){for(rb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Xb(b,a){a||rb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ef(b,a){a=a||N;if("complete"===a.document.readyState)a.setTimeout(b);else z(a).on("load",b)}function Rc(b,a){var c=zb[a.toLowerCase()];return c&&Sc[ta(b)]&&c}function Ff(b,
a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Tc[a]}function Gf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(v(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=fa(f));for(var l=
0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function vf(){this.$get=function(){return Q(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return vb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)}})}}function Fa(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Td)():c+":"+b}function Ra(b,a){if(a){var c=
0;this.nextUid=function(){return++c}}n(b,this.put,this)}function Hf(b){return(b=b.toString().replace(Uc,"").match(Vc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function bb(b,a){function c(a){return function(b,c){if(C(b))n(b,pc(a));else return a(b,c)}}function d(a,b){Qa(a,"service");if(G(b)||K(b))b=s.instantiate(b);if(!b.$get)throw Ga("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=H.invoke(b,this);if(v(c))throw Ga("undef",a);return c}}function f(a,b,c){return d(a,
{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;n(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{L(a)?(c=db(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(s.invoke(a)):K(a)?b.push(s.invoke(a)):Pa(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||
e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=bb.$$annotate(b,a,g),l,s,m;s=0;for(l=k.length;s<l;s++){m=k[s];if("string"!==typeof m)throw Ga("itkn",m);h.push(f&&f.hasOwnProperty(m)?f[m]:d(m,g))}K(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,
instantiate:function(a,b,c){var d=Object.create((K(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return C(a)||G(a)?a:d},get:d,annotate:bb.$$annotate,has:function(a){return r.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new Ra([],!0),r={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,qa(b),!1)}),constant:c(function(a,b){Qa(a,"constant");r[a]=b;A[a]=b}),
decorator:function(a,b){var c=s.get(a+"Provider"),d=c.$get;c.$get=function(){var a=H.invoke(d,c);return H.invoke(b,null,{$delegate:a})}}}},s=r.$injector=h(r,function(a,b){aa.isString(b)&&k.push(b);throw Ga("unpr",k.join(" <- "));}),A={},H=A.$injector=h(A,function(a,b){var c=s.get(a+"Provider",b);return H.invoke(c.$get,c,u,a)});n(g(b),function(a){H.invoke(a||w)});return H}function Qe(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=
null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():sc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(a){a=L(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},
function(a,b){a===b&&""===a||Ef(function(){d.$evalAsync(g)})});return g}]}function fb(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;K(b)&&(b=b.join(" "));K(a)&&(a=a.join(" "));return b+" "+a}function If(b){L(b)&&(b=b.split(" "));var a=ga();n(b,function(b){b.length&&(a[b]=!0)});return a}function Ha(b){return C(b)?b:{}}function uf(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Jf(b,a,c,d){function e(a){try{a.apply(null,
ra.call(arguments,1))}finally{if(H--,0===H)for(;M.length;)try{M.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{t=m.state;break a}catch(a){}t=void 0}t=v(t)?null:t;ka(t,D)&&(t=D);D=t}function h(){if(x!==l.url()||p!==t)x=l.url(),p=t,n(B,function(a){a(l.url(),t)})}var l=this,k=b.location,m=b.history,r=b.setTimeout,s=b.clearTimeout,A={};l.isMock=!1;var H=0,M=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=function(){H++};l.notifyWhenNoOutstandingRequests=function(a){0===
H?a():M.push(a)};var t,p,x=k.href,q=a.find("base"),I=null;g();p=t;l.url=function(a,c,e){v(e)&&(e=null);k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){var f=p===e;if(x===a&&(!d.history||f))return l;var h=x&&Ia(x)===Ia(a);x=a;p=e;!d.history||h&&f?(h||(I=a),c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):k.href=a):(m[c?"replaceState":"pushState"](e,"",a),g(),p=t);return l}return I||k.href.replace(/%27/g,"'")};l.state=function(){return t};var B=[],O=!1,D=
null;l.onUrlChange=function(a){if(!O){if(d.history)z(b).on("popstate",f);z(b).on("hashchange",f);O=!0}B.push(a);return a};l.$$applicationDestroyed=function(){z(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=q.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;H++;c=r(function(){delete A[c];e(a)},b||0);A[c]=!0;return c};l.defer.cancel=function(a){return A[a]?(delete A[a],s(a),e(w),!0):!1}}function Ue(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new Jf(b,d,a,c)}]}function Ve(){this.$get=function(){function b(b,d){function e(a){a!=r&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,r),r=a,r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw F("$cacheFactory")("iid",b);var g=0,h=Q({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},r=null,s=null;return a[b]={put:function(a,b){if(!v(b)){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(s.key);
return b}},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==s&&(s=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};r=s=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return Q({},h,{size:g})}}}var a={};b.info=function(){var b={};n(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function of(){this.$get=
["$cacheFactory",function(b){return b("templates")}]}function Dc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==E(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Vd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function s(a,f){Qa(a,"directive");L(a)?(d(a),Sb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];n(e[a],function(e,g){try{var h=b.invoke(e);G(h)?h={compile:qa(h)}:!h.compile&&h.link&&(h.compile=qa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||
h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,s=h.name,m={isolateScope:null,bindToController:null};C(l.scope)&&(!0===l.bindToController?(m.bindToController=c(l.scope,s,!0),m.isolateScope={}):m.isolateScope=c(l.scope,s,!1));C(l.bindToController)&&(m.bindToController=c(l.bindToController,s,!0));if(C(m.bindToController)){var H=l.controller,ba=l.controllerAs;if(!H)throw ea("noctrl",s);var ha;a:if(ba&&L(ba))ha=ba;else{if(L(H)){var n=Wc.exec(H);if(n){ha=n[3];break a}}ha=void 0}if(!ha)throw ea("noident",
s);}var q=k.$$bindings=m;C(q.isolateScope)&&(h.$$isolateBindings=q.isolateScope);f.push(h)}catch(u){d(u)}});return f}])),e[a].push(f)):n(a,pc(s));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return y(a)?(m=a,this):m};this.$get=["$injector",
"$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,t,p,x,q,I,B,O){function D(a,b){try{a.addClass(b)}catch(c){}}function S(a,b,c,d,e){a instanceof z||(a=z(a));n(a,function(b,c){b.nodeType==ab&&b.nodeValue.match(/\S+/)&&(a[c]=z(b).wrap("<span></span>").parent()[0])});var f=P(a,b,a,c,d,e);S.$$addScopeClass(a);var g=null;return function(b,c,d){Sb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;
d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?z(Yb(g,z("<div>").append(a).html())):c?Oa.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);S.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function P(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,m,s,B,A;if(p)for(A=Array(c.length),m=0;m<h.length;m+=3)f=h[m],A[f]=c[f];else A=c;m=0;for(s=h.length;m<
s;)if(l=A[h[m++]],c=h[m++],f=h[m++],c){if(c.scope){if(k=a.$new(),S.$$addScopeInfo(z(l),k),B=c.$$destroyBindings)c.$$destroyBindings=null,k.$on("$destroyed",B)}else k=a;B=c.transcludeOnThisElement?ba(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?ba(a,b):null;c(f,k,l,d,B,c)}else f&&f(a,l.childNodes,u,e)}for(var h=[],l,k,m,s,p,B=0;B<a.length;B++){l=new aa;k=ha(a[B],[],l,0===B?d:u,e);(f=k.length?J(k,a[B],l,b,c,null,[],[],f):null)&&f.scope&&S.$$addScopeClass(l.$$element);
l=f&&f.terminal||!(m=a[B].childNodes)||!m.length?null:P(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(B,f,l),s=!0,p=p||f;f=null}return s?g:null}function ba(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,l;switch(a.nodeType){case pa:v(b,xa(ta(a)),"E",d,e);for(var k,m,s,p=a.attributes,B=0,A=p&&p.length;B<
A;B++){var H=!1,M=!1;k=p[B];l=k.name;m=T(k.value);k=xa(l);if(s=ia.test(k))l=l.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var P=k.replace(/(Start|End)$/,"");F(P)&&k===P+"Start"&&(H=l,M=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=xa(l.toLowerCase());h[k]=l;if(s||!c.hasOwnProperty(k))c[k]=m,Rc(a,k)&&(c[k]=!0);V(a,b,m,k,s);v(b,k,"A",d,e,H,M)}a=a.className;C(a)&&(a=a.animVal);if(L(a)&&""!==a)for(;l=g.exec(a);)k=xa(l[2]),v(b,k,"C",d,e)&&(c[k]=T(l[3])),a=
a.substr(l.index+l[0].length);break;case ab:za(b,a.nodeValue);break;case 8:try{if(l=f.exec(a.nodeValue))k=xa(l[1]),v(b,k,"M",d,e)&&(c[k]=T(l[2]))}catch(O){}}b.sort(Ja);return b}function wa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);a.nodeType==pa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function Xc(a,b,c){return function(d,e,f,g,h){e=wa(e[0],b,c);return a(d,e,f,g,h)}}function J(a,
b,d,e,f,g,h,k,m){function s(a,b,c,d){if(a){c&&(a=Xc(a,c,d));a.require=J.require;a.directiveName=w;if(t===J||J.$$isolateScope)a=Z(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Xc(b,c,d));b.require=J.require;b.directiveName=w;if(t===J||J.$$isolateScope)b=Z(b,{isolateScope:!0});k.push(b)}}function B(a,b,c,d){var e;if(L(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&
!f)throw ea("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=B(a,b[g],c,d);return e||null}function A(a,b,c,d,e,f){var g=ga(),h;for(h in d){var l=d[h],k={$scope:l===t||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=l.controller;"@"==m&&(m=b[l.name]);k=p(m,k,!0,l.controllerAs);g[l.name]=k;q||a.data("$"+l.name+"Controller",k.instance)}return g}function M(a,c,e,f,g,l){function m(a,b,c){var d;Wa(a)||(c=b,b=a,a=u);q&&(d=n);c||(c=q?ja.parent():ja);return g(a,b,d,c,X)}var s,p,H,
P,n,ha,ja;b===e?(f=d,ja=d.$$element):(ja=z(e),f=new aa(ja,d));t&&(P=c.$new(!0));g&&(ha=m,ha.$$boundTransclude=g);ba&&(n=A(ja,f,ha,ba,P,c));t&&(S.$$addScopeInfo(ja,P,!0,!(D&&(D===t||D===t.$$originalDirective))),S.$$addScopeClass(ja,!0),P.$$isolateBindings=t.$$isolateBindings,Y(c,f,P,P.$$isolateBindings,t,P));if(n){var x=t||O,I;x&&n[x.name]&&(p=x.$$bindings.bindToController,(H=n[x.name])&&H.identifier&&p&&(I=H,l.$$destroyBindings=Y(c,f,H.instance,p,x)));for(s in n){H=n[s];var wa=H();wa!==H.instance&&
(H.instance=wa,ja.data("$"+J.name+"Controller",wa),H===I&&(l.$$destroyBindings(),l.$$destroyBindings=Y(c,f,wa,p,x)))}}s=0;for(l=h.length;s<l;s++)p=h[s],$(p,p.isolateScope?P:c,ja,f,p.require&&B(p.directiveName,p.require,ja,n),ha);var X=c;t&&(t.template||null===t.templateUrl)&&(X=P);a&&a(X,e.childNodes,u,g);for(s=k.length-1;0<=s;s--)p=k[s],$(p,p.isolateScope?P:c,ja,f,p.require&&B(p.directiveName,p.require,ja,n),ha)}m=m||{};for(var P=-Number.MAX_VALUE,O,ba=m.controllerDirectives,t=m.newIsolateScopeDirective,
D=m.templateDirective,n=m.nonTlbTranscludeDirective,x=!1,I=!1,q=m.hasElementTranscludeDirective,X=d.$$element=z(b),J,w,v,Ja=e,za,F=0,E=a.length;F<E;F++){J=a[F];var Ab=J.$$start,Q=J.$$end;Ab&&(X=wa(b,Ab,Q));v=u;if(P>J.priority)break;if(v=J.scope)J.templateUrl||(C(v)?(N("new/isolated scope",t||O,J,X),t=J):N("new/isolated scope",t,J,X)),O=O||J;w=J.name;!J.templateUrl&&J.controller&&(v=J.controller,ba=ba||ga(),N("'"+w+"' controller",ba[w],J,X),ba[w]=J);if(v=J.transclude)x=!0,J.$$tlb||(N("transclusion",
n,J,X),n=J),"element"==v?(q=!0,P=J.priority,v=X,X=d.$$element=z(W.createComment(" "+w+": "+d[w]+" ")),b=X[0],U(f,ra.call(v,0),b),Ja=S(v,e,P,g&&g.name,{nonTlbTranscludeDirective:n})):(v=z(Vb(b)).contents(),X.empty(),Ja=S(v,e));if(J.template)if(I=!0,N("template",D,J,X),D=J,v=G(J.template)?J.template(X,d):J.template,v=fa(v),J.replace){g=J;v=Tb.test(v)?Zc(Yb(J.templateNamespace,T(v))):[];b=v[0];if(1!=v.length||b.nodeType!==pa)throw ea("tplrt",w,"");U(f,X,b);E={$attr:{}};v=ha(b,[],E);var R=a.splice(F+
1,a.length-(F+1));t&&y(v);a=a.concat(v).concat(R);$c(d,E);E=a.length}else X.html(v);if(J.templateUrl)I=!0,N("template",D,J,X),D=J,J.replace&&(g=J),M=Kf(a.splice(F,a.length-F),X,d,f,x&&Ja,h,k,{controllerDirectives:ba,newIsolateScopeDirective:t,templateDirective:D,nonTlbTranscludeDirective:n}),E=a.length;else if(J.compile)try{za=J.compile(X,d,Ja),G(za)?s(null,za,Ab,Q):za&&s(za.pre,za.post,Ab,Q)}catch(V){c(V,va(X))}J.terminal&&(M.terminal=!0,P=Math.max(P,J.priority))}M.scope=O&&!0===O.scope;M.transcludeOnThisElement=
x;M.elementTranscludeOnThisElement=q;M.templateOnThisElement=I;M.transclude=Ja;m.hasElementTranscludeDirective=q;return M}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function v(b,d,f,g,h,l,k){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{m=d[p],(g===u||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(l&&(m=Ob(m,{$$start:l,$$end:k})),b.push(m),h=m)}catch(A){c(A)}}return h}function F(b){if(e.hasOwnProperty(b))for(var c=
a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function $c(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(D(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Kf(a,b,c,e,f,g,
h,l){var k=[],m,s,p=b[0],B=a.shift(),A=Ob(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),H=G(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,O=B.templateNamespace;b.empty();d(I.getTrustedResourceUrl(H)).then(function(d){var M,t;d=fa(d);if(B.replace){d=Tb.test(d)?Zc(Yb(O,T(d))):[];M=d[0];if(1!=d.length||M.nodeType!==pa)throw ea("tplrt",B.name,H);d={$attr:{}};U(e,b,M);var x=ha(M,[],d);C(B.scope)&&y(x);a=x.concat(a);$c(c,d)}else M=p,b.html(d);a.unshift(A);m=J(a,M,c,f,b,B,g,
h,l);n(e,function(a,c){a==M&&(e[c]=b[0])});for(s=P(b[0].childNodes,f);k.length;){d=k.shift();t=k.shift();var S=k.shift(),I=k.shift(),x=b[0];if(!d.$$destroyed){if(t!==p){var wa=t.className;l.hasElementTranscludeDirective&&B.replace||(x=Vb(M));U(S,z(t),x);D(z(x),wa)}t=m.transcludeOnThisElement?ba(d,m.transclude,I):I;m(s,d,x,e,t,m)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(m.transcludeOnThisElement&&(a=ba(b,m.transclude,e)),m(s,b,c,d,a,m)))}}function Ja(a,b){var c=b.priority-
a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function N(a,b,c,d){if(b)throw ea("multidir",b.name,c.name,a,va(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&S.$$addBindingClass(a);return function(a,c){var e=c.parent();b||S.$$addBindingClass(e);S.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=E(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");
c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return I.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return I.RESOURCE_URL}function V(a,c,d,e,f){var g=R(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea("nodomevents");
var m=h[e];m!==d&&(l=m&&b(m,!0,g,f),d=m);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function U(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);
z(c).data(z(d).data());la?(Rb=!0,la.cleanData([d])):delete z.cache[d[z.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],z(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return Q(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}function Y(a,c,d,e,f,g){var h;n(e,function(e,g){var l=e.attrName,k=e.optional,m,s,p,B;switch(e.mode){case "@":c.$observe(l,function(a){d[g]=a});c.$$observers[l].$$scope=a;c[l]&&(d[g]=b(c[l])(a));
break;case "=":if(k&&!c[l])break;s=t(c[l]);B=s.literal?ka:function(a,b){return a===b||a!==a&&b!==b};p=s.assign||function(){m=d[g]=s(a);throw ea("nonassign",c[l],f.name);};m=d[g]=s(a);k=function(b){B(b,d[g])||(B(b,m)?p(a,b=d[g]):d[g]=b);return m=b};k.$stateful=!0;k=e.collection?a.$watchCollection(c[l],k):a.$watch(t(c[l],k),null,s.literal);h=h||[];h.push(k);break;case "&":if(!c.hasOwnProperty(l)&&k)break;s=t(c[l]);if(s===w&&k)break;d[g]=function(b){return s(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<
b;++a)h[a]()}:w;return g&&e!==w?(g.$on("$destroy",e),w):e}var aa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};aa.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&B.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&B.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&B.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&B.removeClass(this.$$element,c)},
$set:function(a,b,d,e){var f=this.$$element[0],g=Rc(f,a),h=Ff(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Ac(a,"-"));g=ta(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=O(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=T(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var m=2*k,g=g+O(T(h[m]),!0),g=g+(" "+T(h[m+1]));
h=T(h[2*k]).split(/\s/);g+=O(T(h[0]),!0);2===h.length&&(g+=" "+T(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Ya(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa="{{"==ca||"}}"==da?Ua:function(a){return a.replace(/\{\{/g,
ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;S.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;S.$$addBindingClass=m?function(a){D(a,"ng-binding")}:w;S.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;S.$$addScopeClass=m?function(a,b){D(a,b?"ng-isolate-scope":"ng-scope")}:w;return S}]}function xa(b){return eb(b.replace(Yc,""))}function ad(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),
f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Zc(b){b=z(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Lf.call(b,a,1);return b}function We(){var b={},a=!1;this.register=function(a,d){Qa(a,"controller");C(a)?Q(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!C(a.$scope))throw F("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,
g,h,l){var k,m,r;h=!0===h;l&&L(l)&&(r=l);if(L(f)){l=f.match(Wc);if(!l)throw Mf("ctrlfmt",f);m=l[1];r=r||l[3];f=b.hasOwnProperty(m)?b[m]:Cc(g.$scope,m,!0)||(a?Cc(d,m,!0):u);Pa(f,m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),r&&e(g,r,k,m||f.name),Q(function(){var a=c.invoke(f,k,g,m);a!==k&&(C(a)||G(a))&&(k=a,r&&e(g,r,k,m||f.name));return k},{instance:k,identifier:r});k=c.instantiate(f,g,m);r&&e(g,r,k,m||f.name);return k}}]}function Xe(){this.$get=["$window",function(b){return z(b.document)}]}
function Ye(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b){return C(b)?da(b)?b.toISOString():$a(b):b}function bf(){this.$get=function(){return function(b){if(!b)return"";var a=[];oc(b,function(b,d){null===b||v(b)||(K(b)?n(b,function(b,c){a.push(ia(d)+"="+ia(Zb(b)))}):a.push(ia(d)+"="+ia(Zb(b))))});return a.join("&")}}}function cf(){this.$get=function(){return function(b){function a(b,e,f){null===b||v(b)||(K(b)?n(b,function(b){a(b,e+"[]")}):C(b)&&
!da(b)?oc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ia(e)+"="+ia(Zb(b))))}if(!b)return"";var c=[];a(b,"",!0);return c.join("&")}}}function $b(b,a){if(L(b)){var c=b.replace(Nf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(bd))||(d=(d=c.match(Of))&&Pf[d[0]].test(c));d&&(b=vc(c))}}return b}function cd(b){var a=ga(),c;L(b)?n(b.split("\n"),function(b){c=b.indexOf(":");var e=E(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):C(b)&&n(b,function(b,c){var f=
E(c),g=T(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function dd(b){var a;return function(c){a||(a=cd(b));return c?(c=a[E(c)],void 0===c&&(c=null),c):a}}function ed(b,a,c,d){if(G(d))return d(b,a,c);n(d,function(d){b=d(b,a,c)});return b}function af(){var b=this.defaults={transformResponse:[$b],transformRequest:[function(a){return C(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?$a(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fa(ac),
put:fa(ac),patch:fa(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=Q({},a);b.data=a.data?ed(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,
e={};n(a,function(a,d){G(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!aa.isObject(a))throw F("$http")("badreq",a);var e=Q({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);e.headers=function(a){var c=b.headers,e=Q({},a.headers),f,g,h,c=Q({},c.common,c[E(a.method)]);a:for(f in c){g=E(f);for(h in e)if(E(h)===g)continue a;e[f]=c[f]}return d(e,fa(a))}(a);e.method=pb(e.method);e.paramSerializer=L(e.paramSerializer)?l.get(e.paramSerializer):
e.paramSerializer;var f=[function(a){var d=a.headers,e=ed(a.data,dd(d),u,a.transformRequest);v(e)&&n(d,function(a,b){"content-type"===E(b)&&delete d[b]});v(a.withCredentials)&&!v(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},u],g=h.when(e);for(n(A,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){Pa(a,
"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){Pa(a,"fn");g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}O&&(200<=b&&300>b?O.put(P,[b,c,cd(d),e]):O.remove(P));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?I.resolve:I.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}function A(a){m(a.data,a.status,fa(a.headers()),
a.statusText)}function n(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var I=h.defer(),B=I.promise,O,D,S=c.headers,P=r(c.url,c.paramSerializer(c.params));k.pendingRequests.push(c);B.then(n,n);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=C(c.cache)?c.cache:C(b.cache)?b.cache:s);O&&(D=O.get(P),y(D)?D&&G(D.then)?D.then(A,A):K(D)?m(D[1],D[0],fa(D[2]),D[3]):m(D,200,{},"OK"):O.put(P,B));v(D)&&((D=fd(c.url)?e()[c.xsrfCookieName||b.xsrfCookieName]:
u)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,P,f,l,S,c.timeout,c.withCredentials,c.responseType));return B}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var s=f("$http");b.paramSerializer=L(b.paramSerializer)?l.get(b.paramSerializer):b.paramSerializer;var A=[];n(c,function(a){A.unshift(L(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){n(arguments,function(a){k[a]=function(b,c){return k(Q({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");
(function(a){n(arguments,function(a){k[a]=function(b,c,d){return k(Q({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function Qf(){return new N.XMLHttpRequest}function df(){this.$get=["$browser","$window","$document",function(b,a,c){return Rf(b,Qf,b.defer,a.angular.callbacks,c[0])}]}function Rf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",
m,!1);e.body.removeChild(f);f=null;var g=-1,A="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),A=a.type,g="error"===a.type?404:200);c&&c(g,A)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,r,s,A){function H(){p&&p();x&&x.abort()}function M(a,d,e,f,g){I!==u&&c.cancel(I);p=x=null;a(d,e,f,g);b.$$completeOutstandingRequest(w)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==E(e)){var t="_"+(d.counter++).toString(36);
d[t]=function(a){d[t].data=a;d[t].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+t),t,function(a,b){M(k,a,d[t].data,"",b);d[t]=w})}else{var x=a();x.open(e,h,!0);n(m,function(a,b){y(a)&&x.setRequestHeader(b,a)});x.onload=function(){var a=x.statusText||"",b="response"in x?x.response:x.responseText,c=1223===x.status?204:x.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);M(k,c,b,x.getAllResponseHeaders(),a)};e=function(){M(k,-1,null,null,"")};x.onerror=e;x.onabort=e;s&&(x.withCredentials=
!0);if(A)try{x.responseType=A}catch(q){if("json"!==A)throw q;}x.send(l)}if(0<r)var I=c(H,r);else r&&G(r.then)&&r.then(H)}}function Ze(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,b).replace(r,a)}function h(f,h,m,r){function t(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var c;if(r&&!y(a))c=a;
else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}r=!!r;for(var p,n,q=0,I=[],B=[],O=f.length,D=[],S=[];q<O;)if(-1!=(p=f.indexOf(b,q))&&-1!=(n=f.indexOf(a,p+l)))q!==p&&D.push(g(f.substring(q,p))),q=f.substring(p+l,n),I.push(q),B.push(c(q,t)),q=n+k,S.push(D.length),D.push("");else{q!==O&&D.push(g(f.substring(q)));break}m&&1<D.length&&Ka.throwNoconcat(f);if(!h||I.length){var P=function(a){for(var b=0,c=I.length;b<
c;b++){if(r&&v(a[b]))return;D[S[b]]=a[b]}return D.join("")};return Q(function(a){var b=0,c=I.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return P(e)}catch(g){d(Ka.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,b){var c;return a.$watchGroup(B,function(d,e){var f=P(d);G(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,m=new RegExp(b.replace(/./g,f),"g"),r=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}
function $e(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=4<arguments.length,r=m?ra.call(arguments,4):[],s=a.setInterval,A=a.clearInterval,H=0,M=y(k)&&!k,t=(M?d:c).defer(),p=t.promise;l=y(l)?l:0;p.then(null,null,m?function(){e.apply(null,r)}:e);p.$$intervalId=s(function(){t.notify(H++);0<l&&H>=l&&(t.resolve(H),A(p.$$intervalId),delete f[p.$$intervalId]);M||b.$apply()},h);f[p.$$intervalId]=t;return p}var f={};e.cancel=function(b){return b&&b.$$intervalId in
f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function fe(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}
function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=mb(b[a]);return b.join("/")}function gd(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=Y(c.port)||Sf[c.protocol]||null}function hd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=yc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===
a.indexOf(b))return a.substr(b.length)}function Ia(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Bb(b){return b.replace(/(#.+)|#$/,"$1")}function cc(b){return b.substr(0,Ia(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);gd(b,this);this.$$parse=function(a){var b=ya(c,a);if(!L(b))throw Cb("ipthprfx",a,c);hd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=
bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ya(b,d))!==u?(g=f,g=(f=ya(a,f))!==u?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);gd(b,this);this.$$parse=function(d){d=ya(b,d)||ya(c,d);var e;"#"===d.charAt(0)?(e=ya(a,d),v(e)&&(e=d)):e=this.$$html5?d:"";hd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&
(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ia(b)==Ia(a)?(this.$$parse(a),!0):!1}}function id(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,
g;b==Ia(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Db(b){return function(){return this[b]}}function jd(b,a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ef(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?
(b=a,this):b};this.html5Mode=function(b){return Xa(b)?(a.enabled=b,this):C(b)?(Xa(b.enabled)&&(a.enabled=b.enabled),Xa(b.requireBase)&&(a.requireBase=b.requireBase),Xa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),
a,k.$$state,b)}var k,m;m=d.baseHref();var r=d.url(),s;if(a.enabled){if(!m&&a.requireBase)throw Cb("nobase");s=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?dc:id}else s=Ia(r),m=ec;k=new m(s,"#"+b);k.$$parseLinkUrl(r,r);k.$$state=d.state();var A=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=z(b.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),
l=e.attr("href")||e.attr("xlink:href");C(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);A.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Bb(k.absUrl())!=Bb(r)&&d.url(k.absUrl(),!0);var H=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;
k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(H=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Bb(d.url()),b=Bb(k.absUrl()),f=d.state(),g=k.$$replace,m=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(H||m)H=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(m&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function ff(){var b=!0,a=this;
this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];n(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),
info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Ba(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ca("isecfld",a);return b}function na(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b.window===b)throw ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ca("isecdom",a);if(b===Object)throw ca("isecobj",
a);}return b}function kd(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b===Tf||b===Uf||b===Vf)throw ca("isecff",a);}}function Wf(b,a){return"undefined"!==typeof b?b:a}function ld(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case q.Program:c=!0;n(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case q.Literal:b.constant=!0;b.toWatch=[];break;case q.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;
b.toWatch=b.argument.toWatch;break;case q.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case q.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case q.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case q.Identifier:b.constant=
!1;b.toWatch=[b];break;case q.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case q.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];n(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case q.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;
b.toWatch=[b];break;case q.ArrayExpression:c=!0;d=[];n(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case q.ObjectExpression:c=!0;d=[];n(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case q.ThisExpression:b.constant=!1,b.toWatch=[]}}function md(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:u}}
function nd(b){return b.type===q.Identifier||b.type===q.MemberExpression}function od(b){if(1===b.body.length&&nd(b.body[0].expression))return{type:q.AssignmentExpression,left:b.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function pd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===q.Literal||b.body[0].expression.type===q.ArrayExpression||b.body[0].expression.type===q.ObjectExpression)}function qd(b,a){this.astBuilder=b;this.$filter=a}function rd(b,
a){this.astBuilder=b;this.$filter=a}function Eb(b,a,c,d){na(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=Ba(a.shift(),d);var g=na(b[e],d);g||(g={},b[e]=g);b=g}e=Ba(a.shift(),d);na(b[e],d);return b[e]=c}function Fb(b){return"constructor"==b}function fc(b){return G(b.valueOf)?b.valueOf():Xf.call(b)}function gf(){var b=ga(),a=ga();this.$get=["$filter","$sniffer",function(c,d){function e(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==
b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var l=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,l)||(h=d(a,u,u,[b]),l=b&&fc(b));return h},b,c,f)}for(var k=[],m=[],r=0,n=g.length;r<n;r++)k[r]=e,m[r]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var l=g[c](a);if(b||(b=!e(l,k[c])))m[c]=l,k[c]=l&&fc(l)}b&&(h=d(a,u,u,m));return h},b,c,f)}function g(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);y(a)&&
d.$$postDigest(function(){y(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;n(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==g?function(c,d,e,f){e=a(c,d,e,f);return b(e,
c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return y(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==f?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=a.inputs?a.inputs:[a]);return c}var m={csp:d.csp,expensiveChecks:!1},r={csp:d.csp,expensiveChecks:!0};return function(d,e,H){var n,t,p;switch(typeof d){case "string":p=d=d.trim();var q=H?a:b;n=q[p];n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(t=!0,d=d.substring(2)),H=H?r:m,n=new gc(H),n=(new hc(n,c,H)).parse(d),n.constant?
n.$$watchDelegate=l:t?n.$$watchDelegate=n.literal?h:g:n.inputs&&(n.$$watchDelegate=f),q[p]=n);return k(n,e);case "function":return k(d,e);default:return w}}}]}function jf(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return sd(function(a){b.$evalAsync(a)},a)}]}function kf(){this.$get=["$browser","$exceptionHandler",function(b,a){return sd(function(a){b.defer(a)},a)}]}function sd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}
function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=
e(this,this.notify)}var h=F("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},
$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(C(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;
0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function A(a){if(!G(a))throw h("norslvr",
a);if(!(this instanceof A))return new A(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=m;r.all=function(a){var b=new g,c=0,d=K(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function tf(){this.$get=["$window",
"$timeout",function(b,a){function c(){for(var a=0;a<m.length;a++){var b=m[a];b&&(m[a]=null,b())}k=m.length=0}function d(a){var b=m.length;k++;m.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=m[b]=null,0===--k&&l&&(l(),l=null,m.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};
d.supported=g;var l,k=0,m=[];return d}]}function hf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++lb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=F("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=
!0}function m(){this.$id=++lb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function r(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function s(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function A(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];
while(a=a.$parent)}function q(){}function u(){for(;I.length;)try{I.shift()()}catch(a){g(a)}e=null}function t(){null===e&&(e=l.defer(function(){p.$apply(u)}))}m.prototype={constructor:m,$new:function(a,c){var d;c=c||this;a?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},
$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,l=g.$$watchers,k={fn:b,last:q,get:f,exp:e||a,eq:!!c};d=null;G(b)||(k.fn=w);l||(l=g.$$watchers=[]);l.unshift(k);s(this,1);return function(){0<=Ya(l,k)&&s(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],
function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!v(e)){if(C(e))if(Da(e))for(f!==r&&(f=r,n=f.length=0,k++),a=e.length,n!==a&&(k++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==s&&(f=s={},n=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=
f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(n++,f[b]=g,k++));if(n>a)for(b in k++,f)e.hasOwnProperty(b)||(n--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,m=h(a,c),r=[],s={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(l)if(C(e))if(Da(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)kb.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,m,s,n=a,A,t=[],I,v;r("$digest");l.$$checkUrlChange();
this===p&&null!==e&&(l.defer.cancel(e),u());d=null;do{s=!1;for(A=this;x.length;){try{v=x.shift(),v.scope.$eval(v.expression,v.locals)}catch(w){g(w)}d=null}a:do{if(k=A.$$watchers)for(m=k.length;m--;)try{if(b=k[m])if((f=b.get(A))!==(h=b.last)&&!(b.eq?ka(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))s=!0,d=b,b.last=b.eq?ua(f,null):f,b.fn(f,h===q?f:h,A),5>n&&(I=4-n,t[I]||(t[I]=[]),t[I].push({msg:G(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===
d){s=!1;break a}}catch(z){g(z)}if(!(k=A.$$watchersCount&&A.$$childHead||A!==this&&A.$$nextSibling))for(;A!==this&&!(k=A.$$nextSibling);)A=A.$parent}while(A=k);if((s||x.length)&&!n--)throw p.$$phase=null,c("infdig",a,t);}while(s||x.length);for(p.$$phase=null;y.length;)try{y.shift()()}catch(C){g(C)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();s(this,-this.$$watchersCount);for(var b in this.$$listenerCount)A(this,
this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=
this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){p.$$phase||x.length||l.defer(function(){x.length&&p.$digest()});x.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){y.push(a)},$apply:function(a){try{return r("$apply"),this.$eval(a)}catch(b){g(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&I.push(b);t()},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,A(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=Za([h],arguments,1),k,m;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,
l)}catch(r){g(r)}else d.splice(k,1),k--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Za([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&
c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new m,x=p.$$asyncQueue=[],y=p.$$postDigestQueue=[],I=p.$$applyAsyncQueue=[];return p}]}function ge(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=
d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Yf(b){if("self"===b)return b;if(L(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=td(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Va(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function ud(b){var a=[];y(b)&&n(b,function(b){a.push(Yf(b))});return a}function mf(){this.SCE_CONTEXTS=oa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=ud(a));return b};
this.resourceUrlBlacklist=function(b){arguments.length&&(a=ud(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?fd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));
var g=e(),h={};h[oa.HTML]=e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===oa.RESOURCE_URL){var g=Aa(e.toString()),r,s,n=
!1;r=0;for(s=b.length;r<s;r++)if(d(b[r],g)){n=!0;break}if(n)for(r=0,s=a.length;r<s;r++)if(d(a[r],g)){n=!1;break}if(n)return e;throw Ca("insecurl",e.toString());}if(c===oa.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function lf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>gb)throw Ca("iequirks");var d=fa(oa);d.isEnabled=function(){return b};d.trustAs=
c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Ua);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;n(oa,function(a,b){var c=E(b);d[eb("parse_as_"+c)]=function(b){return e(a,b)};d[eb("get_trusted_"+c)]=function(b){return f(a,b)};d[eb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function nf(){this.$get=["$window","$document",
function(b,a){var c={},d=Y((/android (\d+)/.exec(E((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var r in l)if(k=h.exec(r)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=L(l.webkitTransition),m=L(l.webkitAnimation))}return{history:!(!b.history||
!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=gb)return!1;if(v(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:cb(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function pf(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;K(g)?g=g.filter(function(a){return a!==$b}):g===$b&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){b.put(e,
a.data);return a.data},function(a){if(!f)throw ea("tpload",e,a.status,a.statusText);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function qf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var d=aa.element(a).data("$binding");d&&n(d,function(d){c?(new RegExp("(^|\\s)"+td(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function rf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){G(f)||(k=l,l=f,f=w);var m=ra.call(arguments,3),r=y(k)&&!k,s=(r?d:c).defer(),
n=s.promise,q;q=a.defer(function(){try{s.resolve(f.apply(null,m))}catch(a){s.reject(a),e(a)}finally{delete g[n.$$timeoutId]}r||b.$apply()},l);n.$$timeoutId=q;g[q]=s;return n}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){gb&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,
search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function fd(b){b=L(b)?Aa(b):b;return b.protocol===vd.protocol&&b.host===vd.host}function sf(){this.$get=qa(N)}function wd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=
b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===u&&(d[k]=a(g.substring(l+1))));return d}}function xf(){this.$get=wd}function Kc(b){function a(c,d){if(C(c)){var e={};n(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",xd);a("date",yd);a("filter",Zf);a("json",$f);a("limitTo",ag);a("lowercase",bg);a("number",zd);a("orderBy",Ad);a("uppercase",cg)}function Zf(){return function(b,
a,c){if(!Da(b)){if(null==b)return b;throw F("filter")("notarray",b);}var d;switch(ic(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=dg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function dg(b,a,c){var d=C(b)&&"$"in b;!0===a?a=ka:G(a)||(a=function(a,b){if(v(a))return!1;if(null===a||null===b)return a===b;var c;!(c=C(b))&&(c=C(a))&&(c=a,c=!(G(c.toString)&&c.toString!==Object.prototype.toString));if(c)return!1;a=E(""+a);
b=E(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!C(e)?La(e,b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=ic(b),g=ic(a);if("string"===g&&"!"===a.charAt(0))return!La(b,a.substring(1),c,d);if(K(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&!v(e)&&(f="$"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);
case "function":return!1;default:return c(b,a)}}function ic(b){return null===b?"null":typeof b}function xd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){v(d)&&(d=a.CURRENCY_SYM);v(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Bd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function zd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Bd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Bd(b,a,c,d,e){if(C(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===
b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,m=[];g&&(l="\u221e");if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Cd)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(Cd),h=g[0],g=g[1]||"",r=0,s=a.lgSize,n=a.gSize;if(h.length>=s+n)for(r=h.length-s,k=0;k<r;k++)0===(r-k)%n&&0!==k&&
(l+=c),l+=h.charAt(k);for(k=r;k<h.length;k++)0===(h.length-k)%s&&0!==k&&(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);m.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return m.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,
d){var e=c["get"+b](),f=pb(a?"SHORT"+b:b);return d[f][e]}}function Dd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Ed(b){return function(a){var c=Dd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function jc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function yd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:
a.setHours;b[9]&&(f=Y(b[9]+b[10]),g=Y(b[9]+b[11]));h.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;g=Y(b[5]||0)-g;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;L(c)&&(c=eg.test(c)?Y(c):a(c));V(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;e;)(k=
fg.exec(e))?(h=Za(h,k,1),e=h.pop()):(h.push(e),e=null);var m=c.getTimezoneOffset();f&&(m=wc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));n(h,function(a){l=gg[a];g+=l?l(c,b.DATETIME_FORMATS,m):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function $f(){return function(b,a){v(a)&&(a=2);return $a(b,a)}}function ag(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):Y(a);if(isNaN(a))return b;V(b)&&(b=b.toString());if(!K(b)&&!L(b))return b;c=!c||isNaN(c)?0:Y(c);c=0>c&&c>=-b.length?
b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function Ad(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&
(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Da(a))return a;c=K(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||Ua;if(L(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return ra.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=
c[d](a,b);if(0!==e)return e}return 0},d))}}function Ma(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return qa(b)}function Fd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Ib;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};
f.$addControl=function(a){Qa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});Ya(g,a)};Gd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=
[c]},unset:function(a,b,c){var d=a[b];d&&(Ya(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}
function kc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function hb(b,a,c,d,e,f){var g=E(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,
m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(da(c))return c;if(L(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(hg.test(c))return new Date(c);b.lastIndex=0;if(e=
b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},n(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function ib(b,a,c,d){return function(e,f,g,h,l,k,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return y(a)?da(a)?a:c(a):u}Hd(e,f,g,h);hb(e,
f,g,h,l,k);var n=h&&h.$options&&h.$options.timezone,q;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,q),n&&(b=Pb(b,n)),b):u});h.$formatters.push(function(a){if(a&&!da(a))throw Lb("datefmt",a);if(r(a))return(q=a)&&n&&(q=Pb(q,n,!0)),m("date")(a,d,n);q=null;return""});if(y(g.min)||g.ngMin){var M;h.$validators.min=function(a){return!r(a)||v(M)||c(a)>=M};g.$observe("min",function(a){M=s(a);h.$validate()})}if(y(g.max)||g.ngMax){var t;h.$validators.max=function(a){return!r(a)||
v(t)||c(a)<=t};g.$observe("max",function(a){t=s(a);h.$validate()})}}}function Hd(b,a,c,d){(d.$$hasNativeValidators=C(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?u:b})}function Id(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw F("ngModel")("constexpr",c,d);return b(a)}return e}function lc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;
c.push(e)}return c}function e(a){var b=[];return K(a)?(n(a,function(a){b=b.concat(e(a))}),b):L(a)?a.split(" "):C(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||ga(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var n=l(k,1);h.$addClass(n)}else if(!ka(b,m)){var q=
e(m),n=d(k,q),k=d(q,k),n=l(n,1),k=l(k,-1);n&&n.length&&c.addClass(g,n);k&&k.length&&c.removeClass(g,k)}}m=fa(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Gd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Ac(b,"-"):"";a(jb+b,!0===
c);a(Jd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Jd]=!(f[jb]=e.hasClass(jb));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Kd(d.$pending)&&(d.$pending=u));Xa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Ld,!0),d.$valid=d.$invalid=u,c("",null)):(a(Ld,!1),d.$valid=Kd(d.$error),d.$invalid=!d.$valid,c("",
d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Kd(b){if(b)for(var a in b)return!1;return!0}var ig=/^\/(.+)\/([a-z]*)$/,E=function(b){return L(b)?b.toLowerCase():b},kb=Object.prototype.hasOwnProperty,pb=function(b){return L(b)?b.toUpperCase():b},gb,z,la,ra=[].slice,Lf=[].splice,jg=[].push,sa=Object.prototype.toString,rc=Object.getPrototypeOf,Ea=F("ng"),aa=N.angular||(N.angular={}),db,lb=0;gb=W.documentMode;w.$inject=[];Ua.$inject=
[];var K=Array.isArray,tc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return L(b)?b.trim():b},td=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},cb=function(){if(y(cb.isActive_))return cb.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return cb.isActive_=b},nb=function(){if(y(nb.name_))return nb.name_;var b,a,
c=Na.length,d,e;for(a=0;a<c;++a)if(d=Na[a],b=W.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return nb.name_=e},Na=["ng-","data-ng-","ng:","x-ng-"],ae=/[A-Z]/g,Bc=!1,Rb,pa=1,ab=3,ee={full:"1.4.0",major:1,minor:4,dot:0,codeName:"jaracimrman-existence"};R.expando="ng339";var ub=R.cache={},Df=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var yf=/([\:\-\_]+(.))/g,zf=/^moz([A-Z])/,kg={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=F("jqLite"),Cf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
Tb=/<|&#?\w+;/,Af=/<([\w:]+)/,Bf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ma={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option;ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead;ma.th=ma.td;var Oa=R.prototype={ready:function(b){function a(){c||(c=
!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(N).on("load",a))},toString:function(){var b=[];n(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?z(this[b]):z(this[this.length+b])},length:0,push:jg,sort:[].sort,splice:[].splice},zb={};n("multiple selected checked disabled readOnly required open".split(" "),function(b){zb[E(b)]=b});var Sc={};n("input select option textarea button form details".split(" "),function(b){Sc[b]=
!0});var Tc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Wb,removeData:sb},function(b,a){R[a]=b});n({data:Wb,inheritedData:yb,scope:function(b){return z.data(b,"$scope")||yb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z.data(b,"$isolateScope")||z.data(b,"$isolateScopeNoTemplate")},controller:Pc,injector:function(b){return yb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:vb,css:function(b,
a,c){a=eb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==ab&&2!==d&&8!==d)if(d=E(a),zb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:u;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(v(b)){var d=a.nodeType;return d===pa||d===
ab?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(v(a)){if(b.multiple&&"select"===ta(b)){var c=[];n(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(v(a))return b.innerHTML;rb(b,!0);b.innerHTML=a},empty:Qc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Qc&&(2==b.length&&b!==vb&&b!==Pc?a:d)===u){if(C(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],
f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});n({removeData:sb,on:function a(c,d,e,f){if(y(f))throw Ub("onargs");if(Lc(c)){var g=tb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Gf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,kg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||
h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Oc,one:function(a,c,d){a=z(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;rb(a);n(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];n(a.childNodes,function(a){a.nodeType===pa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===
pa||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===pa){var d=a.firstChild;n(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=z(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:xb,removeClass:wb,toggleClass:function(a,
c,d){c&&n(c.split(" "),function(c){var f=d;v(f)&&(f=!vb(a,c));(f?xb:wb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=tb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:w,type:g,target:a},c.type&&(e=Q(e,c)),c=fa(h),f=d?[e].concat(d):[e],n(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)v(g)?(g=a(this[h],c,e,f),y(g)&&(g=z(g))):Nc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Ra.prototype={put:function(a,
c){this[Fa(a,this.nextUid)]=c},get:function(a){return this[Fa(a,this.nextUid)]},remove:function(a){var c=this[a=Fa(a,this.nextUid)];delete this[a];return c}};var wf=[function(){this.$get=[function(){return Ra}]}],Vc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,lg=/,/,mg=/^\s*(_?)(\S+?)\1\s*$/,Uc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=F("$injector");bb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw L(d)&&d||(d=a.name||Hf(a)),Ga("strictdi",d);c=a.toString().replace(Uc,
"");c=c.match(Vc);n(c[1].split(lg),function(a){a.replace(mg,function(a,c,d){e.push(d)})})}a.$inject=e}}else K(a)?(c=a.length-1,Pa(a[c],"fn"),e=a.slice(0,c)):Pa(a,"fn",!0);return e};var Md=F("$animate"),Te=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=w;d.chain=w;d.prototype={end:w,cancel:w,resume:w,pause:w,complete:w,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Se=function(){var a=new Ra,c=[];this.$get=["$$AnimateRunner","$rootScope",
function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));f&&n(f.split(" "),function(a){a&&(k[a]=!0)});l&&n(l.split(" "),function(a){a&&(k[a]=!1)});1<c.length||e.$$postDigest(function(){n(c,function(c){var d=a.get(c);if(d){var e=If(c.attr("class")),f="",g="";n(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});n(c,function(a){f&&xb(a,f);g&&wb(a,g)});a.remove(c)}});c.length=0})}return{enabled:w,on:w,off:w,pin:w,push:function(a,c,e,k){k&&k();e=e||{};e.from&&
a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Re=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Md("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Md("nongcls",
"ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=g&&z(g);h=h&&z(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ha(l))},move:function(f,g,h,l){g=g&&z(g);h=h&&z(h);
g=g||h.parent();c(f,g,h);return a.push(f,"move",Ha(l))},leave:function(c,e){return a.push(c,"leave",Ha(e),function(){c.remove()})},addClass:function(c,e,h){h=Ha(h);h.addClass=fb(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ha(h);h.removeClass=fb(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ha(l);l.addClass=fb(l.addClass,e);l.removeClass=fb(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ha(k);k.from=k.from?
Q(k.from,e):e;k.to=k.to?Q(k.to,h):h;k.tempClasses=fb(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],ea=F("$compile");Dc.$inject=["$provide","$$sanitizeUriProvider"];var Yc=/^((?:x|data)[\:\-_])/i,Mf=F("$controller"),Wc=/^(\S+)(\s+as\s+(\w+))?$/,bd="application/json",ac={"Content-Type":bd+";charset=utf-8"},Of=/^\[|^\{(?!\{)/,Pf={"[":/]$/,"{":/}$/},Nf=/^\)\]\}',?\n/,Ka=aa.$interpolateMinErr=F("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,
c){return Ka("interr",a,c.toString())};var ng=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Sf={http:80,https:443,ftp:21},Cb=F("$location"),og={$$html5:!1,$$replace:!1,absUrl:Db("$$absUrl"),url:function(a){if(v(a))return this.$$url;var c=ng.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Db("$$protocol"),host:Db("$$host"),port:Db("$$port"),path:jd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?
a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(L(a)||V(a))a=a.toString(),this.$$search=yc(a);else if(C(a))a=ua(a,{}),n(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Cb("isrcharg");break;default:v(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:jd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([id,ec,dc],function(a){a.prototype=Object.create(og);
a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Cb("nostate");this.$$state=v(c)?null:c;return this}});var ca=F("$parse"),Tf=Function.prototype.call,Uf=Function.prototype.apply,Vf=Function.prototype.bind,Mb=ga();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Mb[a]=!0});var pg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=
0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Mb[c],f=Mb[d];Mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),
this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ca("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=E(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=pg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var q=function(a,c){this.lexer=a;this.options=c};q.Program="Program";q.ExpressionStatement=
"ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.NGValueParameter="NGValueParameter";
q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=
this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,
operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:c.text,
left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},
primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=ua(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},
this.consume(")")):"["===c.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===c.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());
while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
c={type:q.Property,kind:"init"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},throwError:function(a,c){throw ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var c=this.expect(a);
c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:q.Literal,value:!0},
"false":{type:q.Literal,value:!1},"null":{type:q.Literal,value:null},undefined:{type:q.Literal,value:u},"this":{type:q.ThisExpression}}};qd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage="assign";if(g=od(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");
g=md(e.body);d.stage="inputs";n(g,function(a,c){var e="fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus",
"text",f))(this.$filter,Ba,na,kd,Wf,ld,a);this.state=this.stage=u;f.literal=pd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;n(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;n(this.state.filters,function(d,e){a.push(d+
"=$filter("+c.escape(e)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,m,r;e=e||w;if(!g&&y(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case q.Program:n(a.body,function(c,d){k.recurse(c.expression,
u,u,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,";"):k.return_(l)});break;case q.Literal:r=this.escape(a.value);this.assign(c,r);e(r);break;case q.UnaryExpression:this.recurse(a.argument,u,u,function(a){l=a});r=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,r);e(r);break;case q.BinaryExpression:this.recurse(a.left,u,u,function(a){h=a});this.recurse(a.right,u,u,function(a){l=a});r="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,
0):"("+h+")"+a.operator+"("+l+")";this.assign(c,r);e(r);break;case q.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case q.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case q.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,
d.name=a.name);Ba(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case q.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();
k.recurse(a.object,h,u,function(){k.if_(k.notNull(h),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),r=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,r),d&&(d.computed=!0,d.name=l);else{Ba(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));r=k.nonComputedMember(h,a.property.name);
if(k.state.expensiveChecks||Fb(a.property.name))r=k.ensureSafeObject(r);k.assign(c,r);d&&(d.computed=!1,d.name=a.property.name)}e(c)})},!!f);break;case q.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),m=[],n(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);m.push(c)}),r=l+"("+m.join(",")+")",k.assign(c,r),e(c)):(l=k.nextId(),h={},m=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);n(a.arguments,function(a){k.recurse(a,k.nextId(),
u,function(a){m.push(k.ensureSafeObject(a))})});h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),r=k.member(h.context,h.name,h.computed)+"("+m.join(",")+")"):r=l+"("+m.join(",")+")";r=k.ensureSafeObject(r);k.assign(c,r);e(c)})}));break;case q.AssignmentExpression:l=this.nextId();h={};if(!nd(a.left))throw ca("lval");this.recurse(a.left,u,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));r=k.member(h.context,
h.name,h.computed)+a.operator+l;k.assign(c,r);e(c||r)})},1);break;case q.ArrayExpression:m=[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){m.push(a)})});r="["+m.join(",")+"]";this.assign(c,r);e(r);break;case q.ObjectExpression:m=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(c){m.push(k.escape(a.key.type===q.Identifier?a.key.name:""+a.key.value)+":"+c)})});r="{"+m.join(",")+"}";this.assign(c,r);e(r);break;case q.ThisExpression:this.assign(c,"s");e("s");break;
case q.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+
a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),
";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,
c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(L(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(V(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+
(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,g;if(f=od(e))g=this.recurse(f);f=md(e.body);var h;f&&(h=[],n(f,function(a,c){var e=d.recurse(a);a.input=e;h.push(e);a.watchId=c}));var l=[];n(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;n(l,function(e){d=
e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=h);f.literal=pd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,c);case q.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case q.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.LogicalExpression:return e=
this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case q.Identifier:return Ba(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),c,d,g.expression);case q.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Ba(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?
this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,g.expensiveChecks,c,d,g.expression);case q.CallExpression:return h=[],n(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var n=[],q=0;q<h.length;++q)n.push(h[q](a,d,e,g));a=f.apply(u,n,g);return c?{context:u,name:u,value:a}:a}:function(a,d,e,r){var n=f(a,d,e,r),q;if(null!=n.value){na(n.context,g.expression);kd(n.value,g.expression);
q=[];for(var u=0;u<h.length;++u)q.push(na(h[u](a,d,e,r),g.expression));q=na(n.value.apply(n.context,q),g.expression)}return c?{value:q}:q};case q.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,n){var s=e(a,d,h,n);a=f(a,d,h,n);na(s.value,g.expression);s.context[s.name]=a;return c?{value:a}:a};case q.ArrayExpression:return h=[],n(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],n=0;n<h.length;++n)g.push(h[n](a,d,e,f));return c?
{value:g}:g};case q.ObjectExpression:return h=[],n(a.properties,function(a){h.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},n=0;n<h.length;++n)g[h[n].key]=h[n].value(a,d,e,f);return c?{value:g}:g};case q.ThisExpression:return function(a){return c?{value:a}:a};case q.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=y(d)?+d:0;return c?{value:d}:
d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=y(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=ld(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(y(l)?l:0)-(y(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);
return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?
{value:e}:e}},"binary!=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:
e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:u,name:u,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?
g[a]:u;c&&na(h,f);return d?{context:g,name:a,value:h}:h}},computedMember:function(a,c,d,e,f){return function(g,h,l,k){var m=a(g,h,l,k),n,s;null!=m&&(n=c(g,h,l,k),Ba(n,f),e&&1!==e&&m&&!m[n]&&(m[n]={}),s=m[n],na(s,f));return d?{context:m,name:n,value:s}:s}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,m){h=a(h,l,k,m);f&&1!==f&&h&&!h[c]&&(h[c]={});l=null!=h?h[c]:u;(d||Fb(c))&&na(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:
a(d,e,f)}}};var hc=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d;this.ast=new q(this.lexer);this.astCompiler=d.csp?new rd(this.ast,c):new qd(this.ast,c)};hc.prototype={constructor:hc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Xf=Object.prototype.valueOf,Ca=F("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ea=F("$compile"),Z=W.createElement("a"),vd=Aa(N.location.href);wd.$inject=["$document"];Kc.$inject=
["$provide"];xd.$inject=["$locale"];zd.$inject=["$locale"];var Cd=".",gg={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,
c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Ed(2),w:Ed(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},fg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,eg=/^\-?\d+$/;yd.$inject=["$locale"];var bg=qa(E),cg=qa(pb);Ad.$inject=["$parse"];var he=qa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f=
"[object SVGAnimatedString]"===sa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),qb={};n(zb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=xa("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});qb[e]=function(){return{restrict:"A",priority:100,link:f}}}});n(Tc,function(a,c){qb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&
(e=f.ngPattern.match(ig))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});n(["src","srcset","href"],function(a){var c=xa("ng-"+a);qb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),gb&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:w,$$renameControl:function(a,
c){a.$name=c},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};Fd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Nd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Fd,compile:function(d,e){d.addClass(Sa).addClass(jb);var f=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,k){if(!("action"in e)){var m=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};
d[0].addEventListener("submit",m,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var n=k.$$parentForm;f&&(Eb(a,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(Eb(a,k.$name,u,k.$name),n.$$renameControl(k,c),Eb(a,k.$name,k,k.$name))}));d.on("$destroy",function(){n.$removeControl(k);f&&Eb(a,e[f],u,k.$name);Q(k,Ib)})}}}}}]},ie=Nd(),ve=Nd(!0),hg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,qg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
rg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,sg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Od=/^(\d{4})-(\d{2})-(\d{2})$/,Pd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Qd=/^(\d{4})-(\d\d)$/,Rd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Sd={text:function(a,c,d,e,f,g){hb(a,c,d,e,f,g);kc(e)},date:ib("date",Od,Kb(Od,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ib("datetimelocal",Pd,Kb(Pd,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:ib("time",Rd,Kb(Rd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ib("week",mc,function(a,c){if(da(a))return a;if(L(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Dd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:ib("month",Qd,Kb(Qd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Hd(a,c,d,e);hb(a,c,d,e,f,g);e.$$parserName=
"number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:sg.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Lb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||v(h)||a>=h};d.$observe("min",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:u;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||v(l)||a<=l};d.$observe("max",function(a){y(a)&&
!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){hb(a,c,d,e,f,g);kc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||qg.test(d)}},email:function(a,c,d,e,f,g){hb(a,c,d,e,f,g);kc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||rg.test(d)}},radio:function(a,c,d,e){v(d.name)&&c.attr("name",++lb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=
function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Id(l,a,"ngTrueValue",d.ngTrueValue,!0),m=Id(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:w,button:w,submit:w,reset:w,file:w},Ec=["$browser",
"$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Sd[E(h.type)]||Sd.text)(f,g,h,l[0],c,a,d,e)}}}}],tg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,c){return tg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);
return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],pe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),
h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Me=qa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),qe=lc("",!0),se=lc("Odd",0),re=lc("Even",1),te=Ma({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Jc={},ug={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=xa("ng-"+a);Jc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};ug[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var xe=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=ob(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:aa.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,n,q,u){var v=0,t,p,x,w=function(){p&&(p.remove(),p=null);t&&(t.$destroy(),t=null);x&&(d.leave(x).then(function(){p=null}),p=x,x=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(k)||k&&!f.$eval(k)||c()},n=++v;e?(a(e,!0).then(function(a){if(n===v){var c=f.$new();q.template=a;a=u(c,function(a){w();d.enter(a,null,g).then(h)});t=c;x=a;t.$emit("$includeContentLoaded",
e);f.$eval(l)}},function(){n===v&&(w(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(w(),q.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Mc(f.template,W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ze=Ma({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?T(f):f;e.$parsers.push(function(a){if(!v(a)){var c=[];a&&n(a.split(h),function(a){a&&c.push(g?T(a):a)});return c}});e.$formatters.push(function(a){return K(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},jb="ng-valid",Jd="ng-invalid",Sa="ng-pristine",Jb="ng-dirty",Ld="ng-pending",Lb=new F("ngModel"),vg=["$scope","$exceptionHandler","$attrs",
"$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||"",!1)(a);var r=f(d.ngModel),s=r.assign,q=r,H=s,
M=null,t,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");q=function(a){var d=r(a);G(d)&&(d=c(a));return d};H=function(a,c){G(r(a))?g(a,{$$$p:p.$modelValue}):s(a,p.$modelValue)}}else if(!r.assign)throw Lb("nonassign",d.ngModel,va(e));};this.$render=w;this.$isEmpty=function(a){return v(a)||""===a||null===a||a!==a};var x=e.inheritedData("$formController")||Ib,z=0;Gd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,
c){delete a[c]},parentForm:x,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Sa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Sa);g.addClass(e,Jb);x.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(M);p.$viewValue=
p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:u,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;n(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(n(p.$asyncValidators,function(a,
c){g(c,null)}),!1)}function f(){var d=[],e=!0;n(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!G(k.then))throw Lb("$asyncValidators",k);g(h,u);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},w):h(!0)}function g(a,c){l===z&&p.$setValidity(a,c)}function h(a){l===z&&d(a)}z++;var l=z;(function(){var a=p.$$parserName||"parse";if(t===u)g(a,null);else return t||(n(p.$validators,function(a,c){g(c,null)}),n(p.$asyncValidators,function(a,c){g(c,
null)})),g(a,t),t;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(M);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(t=v(c)?u:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),v(c)){t=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=q(a));var e=p.$modelValue,
f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:u,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){H(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
function(c){var d=0,e=p.$options;e&&y(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(M);d?M=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=q(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;t=u;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),
p.$$runValidators(c,f,w))}return c})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:vg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(jb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&
h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],wg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=ua(a.$eval(c.ngModelOptions));this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(wg,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=Ma({terminal:!0,priority:1E3}),xg=F("ngOptions"),yg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}
var m=a.match(yg);if(!m)throw xg("iexp",a,va(d));var n=m[5]||m[7],s=m[6];a=/ as /.test(m[0])&&m[1];var q=m[9];d=c(m[2]?m[1]:n);var u=a&&c(a)||d,v=q&&c(q),t=q?function(a,c){return v(e,c)}:function(a){return Fa(a)},p=function(a,c){return t(a,D(a,c))},x=c(m[2]||m[1]),w=c(m[3]||""),y=c(m[4]||""),B=c(m[8]),z={},D=s?function(a,c){z[s]=c;z[n]=a;return z}:function(a){z[n]=a;return z};return{trackBy:q,getTrackByValue:p,getWatchables:c(B,function(a){var c=[];a=a||[];Object.keys(a).forEach(function(d){var f=
D(a[d],d);d=t(a[d],f);c.push(d);if(m[2]||m[1])d=x(e,f),c.push(d);m[4]&&(f=y(e,f),c.push(f))});return c}),getOptions:function(){var a=[],c={},d=B(e)||[],g;if(!s&&Da(d))g=d;else{g=[];for(var h in d)d.hasOwnProperty(h)&&"$"!==h.charAt(0)&&g.push(h)}h=g.length;for(var m=0;m<h;m++){var n=d===g?m:g[m],r=D(d[n],n),v=u(e,r),n=t(v,r),z=x(e,r),M=w(e,r),r=y(e,r),v=new f(n,v,z,M,r);a.push(v);c[n]=v}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[p(a)]},getViewValueFromOption:function(a){return q?
aa.copy(a.viewValue):a.viewValue}}}}}var e=W.createElement("option"),f=W.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function m(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,c.textContent=a.label)}function r(a,c,d,e){c&&E(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function q(a){for(var c;a;)c=a.nextSibling,Xb(a),a=c}
function u(a){var c=p&&p[0],d=O&&O[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function v(){var a=D&&t.readValue();D=C.getOptions();var c={},d=h[0].firstChild;B&&h.prepend(p);d=u(d);D.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=r(h[0],d,"optgroup",f),d=g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=r(g.groupElement,g.currentOptionElement,"option",e),m(a,k),g.currentOptionElement=k.nextSibling):(k=r(h[0],d,"option",
e),m(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){q(c[a].currentOptionElement)});q(d);w.$render();if(!w.$isEmpty(a)){var g=t.readValue();if(C.trackBy&&!ka(a,g)||a!==g)w.$setViewValue(g),w.$render()}}var w=k[1];if(w){var t=k[0];k=l.multiple;for(var p,x=0,y=h.children(),I=y.length;x<I;x++)if(""===y[x].value){p=y.eq(x);break}var B=!!p,O=z(e.cloneNode(!1));O.val("?");var D,C=d(l.ngOptions,h,c);k?(w.$isEmpty=function(a){return!a||0===a.length},t.writeValue=function(a){D.items.forEach(function(a){a.element.selected=
!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},t.readValue=function(){var a=h.val()||[],c=[];n(a,function(a){a=D.selectValueMap[a];a.disabled||c.push(D.getViewValueFromOption(a))});return c},C.trackBy&&c.$watchCollection(function(){if(K(w.$viewValue))return w.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){w.$render()})):(t.writeValue=function(a){var c=D.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&
(O.remove(),B||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||B?(O.remove(),B||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(B||p.remove(),h.prepend(O),h.val("?"),O.prop("selected",!0),O.attr("selected",!0))},t.readValue=function(){var a=D.selectValueMap[h.val()];return a&&!a.disabled?(B||p.remove(),O.remove(),D.getViewValueFromOption(a)):null},C.trackBy&&c.$watch(function(){return C.getTrackByValue(w.$viewValue)},
function(){w.$render()}));B?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=z(e.cloneNode(!1));v();c.$watchCollection(C.getWatchables,v)}}}}],Be=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var m=l.count,r=l.$attr.when&&h.attr(l.$attr.when),q=l.offset||0,u=g.$eval(r)||{},z={},y=c.startSymbol(),t=c.endSymbol(),p=y+m+"-"+q+t,x=aa.noop,C;n(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+E(d[2]),u[d]=h.attr(l.$attr[c]))});
n(u,function(a,d){z[d]=c(a.replace(e,p))});g.$watch(m,function(c){var e=parseFloat(c),f=isNaN(e);f||e in u||(e=a.pluralCat(e-q));e===C||f&&V(C)&&isNaN(C)||(x(),f=z[e],v(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+r),x=w,k()):x=g.$watch(f,k),C=e)})}}}],Ce=["$parse","$animate",function(a,c){var d=F("ngRepeat"),e=function(a,c,d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",
multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var m=k[1],r=k[2],q=k[3],v=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var w=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",
q);var t,p,x,C,I={$id:Fa};v?t=a(v):(x=function(a,c){return Fa(c)},C=function(a){return a});return function(a,f,g,k,m){t&&(p=function(c,d,e){y&&(I[y]=c);I[w]=d;I.$index=e;return t(a,I)});var v=ga();a.$watchCollection(r,function(g){var k,r,t=f[0],A,D=ga(),I,G,L,F,K,E,N;q&&(a[q]=g);if(Da(g))K=g,r=p||x;else for(N in r=p||C,K=[],g)g.hasOwnProperty(N)&&"$"!==N.charAt(0)&&K.push(N);I=K.length;N=Array(I);for(k=0;k<I;k++)if(G=g===K?k:K[k],L=g[G],F=r(G,L,k),v[F])E=v[F],delete v[F],D[F]=E,N[k]=E;else{if(D[F])throw n(N,
function(a){a&&a.scope&&(v[a.id]=a)}),d("dupes",h,F,L);N[k]={id:F,scope:u,clone:u};D[F]=!0}for(A in v){E=v[A];F=ob(E.clone);c.leave(F);if(F[0].parentNode)for(k=0,r=F.length;k<r;k++)F[k].$$NG_REMOVED=!0;E.scope.$destroy()}for(k=0;k<I;k++)if(G=g===K?k:K[k],L=g[G],E=N[k],E.scope){A=t;do A=A.nextSibling;while(A&&A.$$NG_REMOVED);E.clone[0]!=A&&c.move(ob(E.clone),null,z(t));t=E.clone[E.clone.length-1];e(E.scope,k,w,L,y,G,I)}else m(function(a,d){E.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,z(t));t=f;E.clone=a;D[E.id]=E;e(E.scope,k,w,L,y,G,I)});v=D})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=Ma(function(a,c,d){a.$watch(d.ngStyle,
function(a,d){d&&a!==d&&n(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var q=ob(h[d].clone);k[d].$destroy();(l[d]=a.leave(q)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&n(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ge=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),He=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Je=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw F("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],zg={$setViewValue:w,$render:w},Ag=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Ra;e.ngModelCtrl=zg;e.unknownOption=z(W.createElement("option"));
e.renderUnknownOption=function(c){c="? "+Fa(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=w});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};
e.addOption=function(a,c){Qa(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=u)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:Ag,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});
if(d.multiple){g.readValue=function(){var a=[];n(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Ra(a);n(c.find("option"),function(a){a.selected=y(d.get(a.value))})};var h,l=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=fa(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},me=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",
priority:100,compile:function(d,e){if(v(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],le=qa({restrict:"E",
terminal:!1}),Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){L(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw F("ngPattern")("noregexp",g,a,va(c));f=a||u;e.$validate()});
e.$validators.pattern=function(a){return e.$isEmpty(a)||v(f)||f.test(a)}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=Y(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Y(a)||0;e.$validate()});e.$validators.minlength=function(a,
c){return e.$isEmpty(c)||c.length>=f}}}}};N.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(be(),de(aa),z(W).ready(function(){Yd(W,zc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.4.0
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
(v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.4.0
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,g,l){'use strict';function m(b,a,f){var c=f.baseHref(),k=b[0];return function(b,d,e){var f,h;e=e||{};h=e.expires;f=g.isDefined(e.path)?e.path:c;d===l&&(h="Thu, 01 Jan 1970 00:00:00 GMT",d="");g.isString(h)&&(h=new Date(h));d=encodeURIComponent(b)+"="+encodeURIComponent(d);d=d+(f?";path="+f:"")+(e.domain?";domain="+e.domain:"");d+=h?";expires="+h.toUTCString():"";d+=e.secure?";secure":"";e=d.length+1;4096<e&&a.warn("Cookie '"+b+"' possibly not set or overflowed because it was too large ("+
e+" > 4096 bytes)!");k.cookie=d}}g.module("ngCookies",["ng"]).provider("$cookies",[function(){var b=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(a,f){return{get:function(c){return a()[c]},getObject:function(c){return(c=this.get(c))?g.fromJson(c):c},getAll:function(){return a()},put:function(c,a,n){f(c,a,n?g.extend({},b,n):b)},putObject:function(c,b,a){this.put(c,g.toJson(b),a)},remove:function(a,k){f(a,l,k?g.extend({},b,k):b)}}}]}]);g.module("ngCookies").factory("$cookieStore",
["$cookies",function(b){return{get:function(a){return b.getObject(a)},put:function(a,f){b.putObject(a,f)},remove:function(a){b.remove(a)}}}]);m.$inject=["$document","$log","$browser"];g.module("ngCookies").provider("$$cookieWriter",function(){this.$get=m})})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/**
 * @license AngularJS v1.4.0
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {

'use strict';

/**
 * @ngdoc object
 * @name angular.mock
 * @description
 *
 * Namespace from 'angular-mocks.js' which contains testing related code.
 */
angular.mock = {};

/**
 * ! This is a private undocumented service !
 *
 * @name $browser
 *
 * @description
 * This service is a mock implementation of {@link ng.$browser}. It provides fake
 * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,
 * cookies, etc...
 *
 * The api of this service is the same as that of the real {@link ng.$browser $browser}, except
 * that there are several helper methods available which can be used in tests.
 */
angular.mock.$BrowserProvider = function() {
  this.$get = function() {
    return new angular.mock.$Browser();
  };
};

angular.mock.$Browser = function() {
  var self = this;

  this.isMock = true;
  self.$$url = "http://server/";
  self.$$lastUrl = self.$$url; // used by url polling fn
  self.pollFns = [];

  // TODO(vojta): remove this temporary api
  self.$$completeOutstandingRequest = angular.noop;
  self.$$incOutstandingRequestCount = angular.noop;


  // register url polling fn

  self.onUrlChange = function(listener) {
    self.pollFns.push(
      function() {
        if (self.$$lastUrl !== self.$$url || self.$$state !== self.$$lastState) {
          self.$$lastUrl = self.$$url;
          self.$$lastState = self.$$state;
          listener(self.$$url, self.$$state);
        }
      }
    );

    return listener;
  };

  self.$$applicationDestroyed = angular.noop;
  self.$$checkUrlChange = angular.noop;

  self.deferredFns = [];
  self.deferredNextId = 0;

  self.defer = function(fn, delay) {
    delay = delay || 0;
    self.deferredFns.push({time:(self.defer.now + delay), fn:fn, id: self.deferredNextId});
    self.deferredFns.sort(function(a, b) { return a.time - b.time;});
    return self.deferredNextId++;
  };


  /**
   * @name $browser#defer.now
   *
   * @description
   * Current milliseconds mock time.
   */
  self.defer.now = 0;


  self.defer.cancel = function(deferId) {
    var fnIndex;

    angular.forEach(self.deferredFns, function(fn, index) {
      if (fn.id === deferId) fnIndex = index;
    });

    if (fnIndex !== undefined) {
      self.deferredFns.splice(fnIndex, 1);
      return true;
    }

    return false;
  };


  /**
   * @name $browser#defer.flush
   *
   * @description
   * Flushes all pending requests and executes the defer callbacks.
   *
   * @param {number=} number of milliseconds to flush. See {@link #defer.now}
   */
  self.defer.flush = function(delay) {
    if (angular.isDefined(delay)) {
      self.defer.now += delay;
    } else {
      if (self.deferredFns.length) {
        self.defer.now = self.deferredFns[self.deferredFns.length - 1].time;
      } else {
        throw new Error('No deferred tasks to be flushed');
      }
    }

    while (self.deferredFns.length && self.deferredFns[0].time <= self.defer.now) {
      self.deferredFns.shift().fn();
    }
  };

  self.$$baseHref = '/';
  self.baseHref = function() {
    return this.$$baseHref;
  };
};
angular.mock.$Browser.prototype = {

/**
  * @name $browser#poll
  *
  * @description
  * run all fns in pollFns
  */
  poll: function poll() {
    angular.forEach(this.pollFns, function(pollFn) {
      pollFn();
    });
  },

  url: function(url, replace, state) {
    if (angular.isUndefined(state)) {
      state = null;
    }
    if (url) {
      this.$$url = url;
      // Native pushState serializes & copies the object; simulate it.
      this.$$state = angular.copy(state);
      return this;
    }

    return this.$$url;
  },

  state: function() {
    return this.$$state;
  },

  notifyWhenNoOutstandingRequests: function(fn) {
    fn();
  }
};


/**
 * @ngdoc provider
 * @name $exceptionHandlerProvider
 *
 * @description
 * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors
 * passed to the `$exceptionHandler`.
 */

/**
 * @ngdoc service
 * @name $exceptionHandler
 *
 * @description
 * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed
 * to it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration
 * information.
 *
 *
 * ```js
 *   describe('$exceptionHandlerProvider', function() {
 *
 *     it('should capture log messages and exceptions', function() {
 *
 *       module(function($exceptionHandlerProvider) {
 *         $exceptionHandlerProvider.mode('log');
 *       });
 *
 *       inject(function($log, $exceptionHandler, $timeout) {
 *         $timeout(function() { $log.log(1); });
 *         $timeout(function() { $log.log(2); throw 'banana peel'; });
 *         $timeout(function() { $log.log(3); });
 *         expect($exceptionHandler.errors).toEqual([]);
 *         expect($log.assertEmpty());
 *         $timeout.flush();
 *         expect($exceptionHandler.errors).toEqual(['banana peel']);
 *         expect($log.log.logs).toEqual([[1], [2], [3]]);
 *       });
 *     });
 *   });
 * ```
 */

angular.mock.$ExceptionHandlerProvider = function() {
  var handler;

  /**
   * @ngdoc method
   * @name $exceptionHandlerProvider#mode
   *
   * @description
   * Sets the logging mode.
   *
   * @param {string} mode Mode of operation, defaults to `rethrow`.
   *
   *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`
   *            mode stores an array of errors in `$exceptionHandler.errors`, to allow later
   *            assertion of them. See {@link ngMock.$log#assertEmpty assertEmpty()} and
   *            {@link ngMock.$log#reset reset()}
   *   - `rethrow`: If any errors are passed to the handler in tests, it typically means that there
   *                is a bug in the application or test, so this mock will make these tests fail.
   *                For any implementations that expect exceptions to be thrown, the `rethrow` mode
   *                will also maintain a log of thrown errors.
   */
  this.mode = function(mode) {

    switch (mode) {
      case 'log':
      case 'rethrow':
        var errors = [];
        handler = function(e) {
          if (arguments.length == 1) {
            errors.push(e);
          } else {
            errors.push([].slice.call(arguments, 0));
          }
          if (mode === "rethrow") {
            throw e;
          }
        };
        handler.errors = errors;
        break;
      default:
        throw new Error("Unknown mode '" + mode + "', only 'log'/'rethrow' modes are allowed!");
    }
  };

  this.$get = function() {
    return handler;
  };

  this.mode('rethrow');
};


/**
 * @ngdoc service
 * @name $log
 *
 * @description
 * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays
 * (one array per logging level). These arrays are exposed as `logs` property of each of the
 * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.
 *
 */
angular.mock.$LogProvider = function() {
  var debug = true;

  function concat(array1, array2, index) {
    return array1.concat(Array.prototype.slice.call(array2, index));
  }

  this.debugEnabled = function(flag) {
    if (angular.isDefined(flag)) {
      debug = flag;
      return this;
    } else {
      return debug;
    }
  };

  this.$get = function() {
    var $log = {
      log: function() { $log.log.logs.push(concat([], arguments, 0)); },
      warn: function() { $log.warn.logs.push(concat([], arguments, 0)); },
      info: function() { $log.info.logs.push(concat([], arguments, 0)); },
      error: function() { $log.error.logs.push(concat([], arguments, 0)); },
      debug: function() {
        if (debug) {
          $log.debug.logs.push(concat([], arguments, 0));
        }
      }
    };

    /**
     * @ngdoc method
     * @name $log#reset
     *
     * @description
     * Reset all of the logging arrays to empty.
     */
    $log.reset = function() {
      /**
       * @ngdoc property
       * @name $log#log.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#log `log()`}.
       *
       * @example
       * ```js
       * $log.log('Some Log');
       * var first = $log.log.logs.unshift();
       * ```
       */
      $log.log.logs = [];
      /**
       * @ngdoc property
       * @name $log#info.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#info `info()`}.
       *
       * @example
       * ```js
       * $log.info('Some Info');
       * var first = $log.info.logs.unshift();
       * ```
       */
      $log.info.logs = [];
      /**
       * @ngdoc property
       * @name $log#warn.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#warn `warn()`}.
       *
       * @example
       * ```js
       * $log.warn('Some Warning');
       * var first = $log.warn.logs.unshift();
       * ```
       */
      $log.warn.logs = [];
      /**
       * @ngdoc property
       * @name $log#error.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#error `error()`}.
       *
       * @example
       * ```js
       * $log.error('Some Error');
       * var first = $log.error.logs.unshift();
       * ```
       */
      $log.error.logs = [];
        /**
       * @ngdoc property
       * @name $log#debug.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#debug `debug()`}.
       *
       * @example
       * ```js
       * $log.debug('Some Error');
       * var first = $log.debug.logs.unshift();
       * ```
       */
      $log.debug.logs = [];
    };

    /**
     * @ngdoc method
     * @name $log#assertEmpty
     *
     * @description
     * Assert that all of the logging methods have no logged messages. If any messages are present,
     * an exception is thrown.
     */
    $log.assertEmpty = function() {
      var errors = [];
      angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel) {
        angular.forEach($log[logLevel].logs, function(log) {
          angular.forEach(log, function(logItem) {
            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' +
                        (logItem.stack || ''));
          });
        });
      });
      if (errors.length) {
        errors.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or " +
          "an expected log message was not checked and removed:");
        errors.push('');
        throw new Error(errors.join('\n---------\n'));
      }
    };

    $log.reset();
    return $log;
  };
};


/**
 * @ngdoc service
 * @name $interval
 *
 * @description
 * Mock implementation of the $interval service.
 *
 * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
 * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
 * time.
 *
 * @param {function()} fn A function that should be called repeatedly.
 * @param {number} delay Number of milliseconds between each function call.
 * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
 *   indefinitely.
 * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
 *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
 * @param {...*=} Pass additional parameters to the executed function.
 * @returns {promise} A promise which will be notified on each iteration.
 */
angular.mock.$IntervalProvider = function() {
  this.$get = ['$browser', '$rootScope', '$q', '$$q',
       function($browser,   $rootScope,   $q,   $$q) {
    var repeatFns = [],
        nextRepeatId = 0,
        now = 0;

    var $interval = function(fn, delay, count, invokeApply) {
      var hasParams = arguments.length > 4,
          args = hasParams ? Array.prototype.slice.call(arguments, 4) : [],
          iteration = 0,
          skipApply = (angular.isDefined(invokeApply) && !invokeApply),
          deferred = (skipApply ? $$q : $q).defer(),
          promise = deferred.promise;

      count = (angular.isDefined(count)) ? count : 0;
      promise.then(null, null, (!hasParams) ? fn : function() {
        fn.apply(null, args);
      });

      promise.$$intervalId = nextRepeatId;

      function tick() {
        deferred.notify(iteration++);

        if (count > 0 && iteration >= count) {
          var fnIndex;
          deferred.resolve(iteration);

          angular.forEach(repeatFns, function(fn, index) {
            if (fn.id === promise.$$intervalId) fnIndex = index;
          });

          if (fnIndex !== undefined) {
            repeatFns.splice(fnIndex, 1);
          }
        }

        if (skipApply) {
          $browser.defer.flush();
        } else {
          $rootScope.$apply();
        }
      }

      repeatFns.push({
        nextTime:(now + delay),
        delay: delay,
        fn: tick,
        id: nextRepeatId,
        deferred: deferred
      });
      repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});

      nextRepeatId++;
      return promise;
    };
    /**
     * @ngdoc method
     * @name $interval#cancel
     *
     * @description
     * Cancels a task associated with the `promise`.
     *
     * @param {promise} promise A promise from calling the `$interval` function.
     * @returns {boolean} Returns `true` if the task was successfully cancelled.
     */
    $interval.cancel = function(promise) {
      if (!promise) return false;
      var fnIndex;

      angular.forEach(repeatFns, function(fn, index) {
        if (fn.id === promise.$$intervalId) fnIndex = index;
      });

      if (fnIndex !== undefined) {
        repeatFns[fnIndex].deferred.reject('canceled');
        repeatFns.splice(fnIndex, 1);
        return true;
      }

      return false;
    };

    /**
     * @ngdoc method
     * @name $interval#flush
     * @description
     *
     * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
     *
     * @param {number=} millis maximum timeout amount to flush up until.
     *
     * @return {number} The amount of time moved forward.
     */
    $interval.flush = function(millis) {
      now += millis;
      while (repeatFns.length && repeatFns[0].nextTime <= now) {
        var task = repeatFns[0];
        task.fn();
        task.nextTime += task.delay;
        repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});
      }
      return millis;
    };

    return $interval;
  }];
};


/* jshint -W101 */
/* The R_ISO8061_STR regex is never going to fit into the 100 char limit!
 * This directive should go inside the anonymous function but a bug in JSHint means that it would
 * not be enacted early enough to prevent the warning.
 */
var R_ISO8061_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

function jsonStringToDate(string) {
  var match;
  if (match = string.match(R_ISO8061_STR)) {
    var date = new Date(0),
        tzHour = 0,
        tzMin  = 0;
    if (match[9]) {
      tzHour = toInt(match[9] + match[10]);
      tzMin = toInt(match[9] + match[11]);
    }
    date.setUTCFullYear(toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
    date.setUTCHours(toInt(match[4] || 0) - tzHour,
                     toInt(match[5] || 0) - tzMin,
                     toInt(match[6] || 0),
                     toInt(match[7] || 0));
    return date;
  }
  return string;
}

function toInt(str) {
  return parseInt(str, 10);
}

function padNumber(num, digits, trim) {
  var neg = '';
  if (num < 0) {
    neg =  '-';
    num = -num;
  }
  num = '' + num;
  while (num.length < digits) num = '0' + num;
  if (trim) {
    num = num.substr(num.length - digits);
  }
  return neg + num;
}


/**
 * @ngdoc type
 * @name angular.mock.TzDate
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.
 *
 * Mock of the Date type which has its timezone specified via constructor arg.
 *
 * The main purpose is to create Date-like instances with timezone fixed to the specified timezone
 * offset, so that we can test code that depends on local timezone settings without dependency on
 * the time zone settings of the machine where the code is running.
 *
 * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)
 * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*
 *
 * @example
 * !!!! WARNING !!!!!
 * This is not a complete Date object so only methods that were implemented can be called safely.
 * To make matters worse, TzDate instances inherit stuff from Date via a prototype.
 *
 * We do our best to intercept calls to "unimplemented" methods, but since the list of methods is
 * incomplete we might be missing some non-standard methods. This can result in errors like:
 * "Date.prototype.foo called on incompatible Object".
 *
 * ```js
 * var newYearInBratislava = new TzDate(-1, '2009-12-31T23:00:00Z');
 * newYearInBratislava.getTimezoneOffset() => -60;
 * newYearInBratislava.getFullYear() => 2010;
 * newYearInBratislava.getMonth() => 0;
 * newYearInBratislava.getDate() => 1;
 * newYearInBratislava.getHours() => 0;
 * newYearInBratislava.getMinutes() => 0;
 * newYearInBratislava.getSeconds() => 0;
 * ```
 *
 */
angular.mock.TzDate = function(offset, timestamp) {
  var self = new Date(0);
  if (angular.isString(timestamp)) {
    var tsStr = timestamp;

    self.origDate = jsonStringToDate(timestamp);

    timestamp = self.origDate.getTime();
    if (isNaN(timestamp)) {
      throw {
        name: "Illegal Argument",
        message: "Arg '" + tsStr + "' passed into TzDate constructor is not a valid date string"
      };
    }
  } else {
    self.origDate = new Date(timestamp);
  }

  var localOffset = new Date(timestamp).getTimezoneOffset();
  self.offsetDiff = localOffset * 60 * 1000 - offset * 1000 * 60 * 60;
  self.date = new Date(timestamp + self.offsetDiff);

  self.getTime = function() {
    return self.date.getTime() - self.offsetDiff;
  };

  self.toLocaleDateString = function() {
    return self.date.toLocaleDateString();
  };

  self.getFullYear = function() {
    return self.date.getFullYear();
  };

  self.getMonth = function() {
    return self.date.getMonth();
  };

  self.getDate = function() {
    return self.date.getDate();
  };

  self.getHours = function() {
    return self.date.getHours();
  };

  self.getMinutes = function() {
    return self.date.getMinutes();
  };

  self.getSeconds = function() {
    return self.date.getSeconds();
  };

  self.getMilliseconds = function() {
    return self.date.getMilliseconds();
  };

  self.getTimezoneOffset = function() {
    return offset * 60;
  };

  self.getUTCFullYear = function() {
    return self.origDate.getUTCFullYear();
  };

  self.getUTCMonth = function() {
    return self.origDate.getUTCMonth();
  };

  self.getUTCDate = function() {
    return self.origDate.getUTCDate();
  };

  self.getUTCHours = function() {
    return self.origDate.getUTCHours();
  };

  self.getUTCMinutes = function() {
    return self.origDate.getUTCMinutes();
  };

  self.getUTCSeconds = function() {
    return self.origDate.getUTCSeconds();
  };

  self.getUTCMilliseconds = function() {
    return self.origDate.getUTCMilliseconds();
  };

  self.getDay = function() {
    return self.date.getDay();
  };

  // provide this method only on browsers that already have it
  if (self.toISOString) {
    self.toISOString = function() {
      return padNumber(self.origDate.getUTCFullYear(), 4) + '-' +
            padNumber(self.origDate.getUTCMonth() + 1, 2) + '-' +
            padNumber(self.origDate.getUTCDate(), 2) + 'T' +
            padNumber(self.origDate.getUTCHours(), 2) + ':' +
            padNumber(self.origDate.getUTCMinutes(), 2) + ':' +
            padNumber(self.origDate.getUTCSeconds(), 2) + '.' +
            padNumber(self.origDate.getUTCMilliseconds(), 3) + 'Z';
    };
  }

  //hide all methods not implemented in this mock that the Date prototype exposes
  var unimplementedMethods = ['getUTCDay',
      'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
      'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear',
      'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
      'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString',
      'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'];

  angular.forEach(unimplementedMethods, function(methodName) {
    self[methodName] = function() {
      throw new Error("Method '" + methodName + "' is not implemented in the TzDate mock");
    };
  });

  return self;
};

//make "tzDateInstance instanceof Date" return true
angular.mock.TzDate.prototype = Date.prototype;
/* jshint +W101 */

angular.mock.animate = angular.module('ngAnimateMock', ['ng'])

  .config(['$provide', function($provide) {

    var reflowQueue = [];
    $provide.value('$$animateReflow', function(fn) {
      var index = reflowQueue.length;
      reflowQueue.push(fn);
      return function cancel() {
        reflowQueue.splice(index, 1);
      };
    });

    $provide.decorator('$animate', ['$delegate', '$$asyncCallback', '$timeout', '$browser', '$$rAF',
                            function($delegate,   $$asyncCallback,   $timeout,   $browser,   $$rAF) {
      var animate = {
        queue: [],
        cancel: $delegate.cancel,
        enabled: $delegate.enabled,
        triggerCallbackEvents: function() {
          $$rAF.flush();
          $$asyncCallback.flush();
        },
        triggerCallbackPromise: function() {
          $timeout.flush(0);
        },
        triggerCallbacks: function() {
          this.triggerCallbackEvents();
          this.triggerCallbackPromise();
        },
        triggerReflow: function() {
          angular.forEach(reflowQueue, function(fn) {
            fn();
          });
          reflowQueue = [];
        }
      };

      angular.forEach(
        ['animate','enter','leave','move','addClass','removeClass','setClass'], function(method) {
        animate[method] = function() {
          animate.queue.push({
            event: method,
            element: arguments[0],
            options: arguments[arguments.length - 1],
            args: arguments
          });
          return $delegate[method].apply($delegate, arguments);
        };
      });

      return animate;
    }]);

  }]);


/**
 * @ngdoc function
 * @name angular.mock.dump
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available function.
 *
 * Method for serializing common angular objects (scope, elements, etc..) into strings, useful for
 * debugging.
 *
 * This method is also available on window, where it can be used to display objects on debug
 * console.
 *
 * @param {*} object - any object to turn into string.
 * @return {string} a serialized string of the argument
 */
angular.mock.dump = function(object) {
  return serialize(object);

  function serialize(object) {
    var out;

    if (angular.isElement(object)) {
      object = angular.element(object);
      out = angular.element('<div></div>');
      angular.forEach(object, function(element) {
        out.append(angular.element(element).clone());
      });
      out = out.html();
    } else if (angular.isArray(object)) {
      out = [];
      angular.forEach(object, function(o) {
        out.push(serialize(o));
      });
      out = '[ ' + out.join(', ') + ' ]';
    } else if (angular.isObject(object)) {
      if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply)) {
        out = serializeScope(object);
      } else if (object instanceof Error) {
        out = object.stack || ('' + object.name + ': ' + object.message);
      } else {
        // TODO(i): this prevents methods being logged,
        // we should have a better way to serialize objects
        out = angular.toJson(object, true);
      }
    } else {
      out = String(object);
    }

    return out;
  }

  function serializeScope(scope, offset) {
    offset = offset ||  '  ';
    var log = [offset + 'Scope(' + scope.$id + '): {'];
    for (var key in scope) {
      if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/)) {
        log.push('  ' + key + ': ' + angular.toJson(scope[key]));
      }
    }
    var child = scope.$$childHead;
    while (child) {
      log.push(serializeScope(child, offset + '  '));
      child = child.$$nextSibling;
    }
    log.push('}');
    return log.join('\n' + offset);
  }
};

/**
 * @ngdoc service
 * @name $httpBackend
 * @description
 * Fake HTTP backend implementation suitable for unit testing applications that use the
 * {@link ng.$http $http service}.
 *
 * *Note*: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
 * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.
 *
 * During unit testing, we want our unit tests to run quickly and have no external dependencies so
 * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
 * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
 * to verify whether a certain request has been sent or not, or alternatively just let the
 * application make requests, respond with pre-trained responses and assert that the end result is
 * what we expect it to be.
 *
 * This mock implementation can be used to respond with static or dynamic responses via the
 * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).
 *
 * When an Angular application needs some data from a server, it calls the $http service, which
 * sends the request to a real server using $httpBackend service. With dependency injection, it is
 * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
 * the requests and respond with some testing data without sending a request to a real server.
 *
 * There are two ways to specify what test data should be returned as http responses by the mock
 * backend when the code under test makes http requests:
 *
 * - `$httpBackend.expect` - specifies a request expectation
 * - `$httpBackend.when` - specifies a backend definition
 *
 *
 * # Request Expectations vs Backend Definitions
 *
 * Request expectations provide a way to make assertions about requests made by the application and
 * to define responses for those requests. The test will fail if the expected requests are not made
 * or they are made in the wrong order.
 *
 * Backend definitions allow you to define a fake backend for your application which doesn't assert
 * if a particular request was made or not, it just returns a trained response if a request is made.
 * The test will pass whether or not the request gets made during testing.
 *
 *
 * <table class="table">
 *   <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
 *   <tr>
 *     <th>Syntax</th>
 *     <td>.expect(...).respond(...)</td>
 *     <td>.when(...).respond(...)</td>
 *   </tr>
 *   <tr>
 *     <th>Typical usage</th>
 *     <td>strict unit tests</td>
 *     <td>loose (black-box) unit testing</td>
 *   </tr>
 *   <tr>
 *     <th>Fulfills multiple requests</th>
 *     <td>NO</td>
 *     <td>YES</td>
 *   </tr>
 *   <tr>
 *     <th>Order of requests matters</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Request required</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Response required</th>
 *     <td>optional (see below)</td>
 *     <td>YES</td>
 *   </tr>
 * </table>
 *
 * In cases where both backend definitions and request expectations are specified during unit
 * testing, the request expectations are evaluated first.
 *
 * If a request expectation has no response specified, the algorithm will search your backend
 * definitions for an appropriate response.
 *
 * If a request didn't match any expectation or if the expectation doesn't have the response
 * defined, the backend definitions are evaluated in sequential order to see if any of them match
 * the request. The response from the first matched definition is returned.
 *
 *
 * # Flushing HTTP requests
 *
 * The $httpBackend used in production always responds to requests asynchronously. If we preserved
 * this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
 * to follow and to maintain. But neither can the testing mock respond synchronously; that would
 * change the execution of the code under test. For this reason, the mock $httpBackend has a
 * `flush()` method, which allows the test to explicitly flush pending requests. This preserves
 * the async api of the backend, while allowing the test to execute synchronously.
 *
 *
 * # Unit testing with mock $httpBackend
 * The following code shows how to setup and use the mock backend when unit testing a controller.
 * First we create the controller under test:
 *
  ```js
  // The module code
  angular
    .module('MyApp', [])
    .controller('MyController', MyController);

  // The controller code
  function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').success(function(data, status, headers) {
      authToken = headers('A-Token');
      $scope.user = data;
    });

    $scope.saveMessage = function(message) {
      var headers = { 'Authorization': authToken };
      $scope.status = 'Saving...';

      $http.post('/add-msg.py', message, { headers: headers } ).success(function(response) {
        $scope.status = '';
      }).error(function() {
        $scope.status = 'ERROR!';
      });
    };
  }
  ```
 *
 * Now we setup the mock backend and create the test specs:
 *
  ```js
    // testing controller
    describe('MyController', function() {
       var $httpBackend, $rootScope, createController, authRequestHandler;

       // Set up the module
       beforeEach(module('MyApp'));

       beforeEach(inject(function($injector) {
         // Set up the mock http service responses
         $httpBackend = $injector.get('$httpBackend');
         // backend definition common for all tests
         authRequestHandler = $httpBackend.when('GET', '/auth.py')
                                .respond({userId: 'userX'}, {'A-Token': 'xxx'});

         // Get hold of a scope (i.e. the root scope)
         $rootScope = $injector.get('$rootScope');
         // The $controller service is used to create instances of controllers
         var $controller = $injector.get('$controller');

         createController = function() {
           return $controller('MyController', {'$scope' : $rootScope });
         };
       }));


       afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
       });


       it('should fetch authentication token', function() {
         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
       });


       it('should fail authentication', function() {

         // Notice how you can change the response even after it was set
         authRequestHandler.respond(401, '');

         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
         expect($rootScope.status).toBe('Failed...');
       });


       it('should send msg to server', function() {
         var controller = createController();
         $httpBackend.flush();

         // now you don’t care about the authentication, but
         // the controller will still send the request and
         // $httpBackend will respond without you having to
         // specify the expectation and response for this request

         $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
         $rootScope.saveMessage('message content');
         expect($rootScope.status).toBe('Saving...');
         $httpBackend.flush();
         expect($rootScope.status).toBe('');
       });


       it('should send auth header', function() {
         var controller = createController();
         $httpBackend.flush();

         $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
           // check if the header was send, if it wasn't the expectation won't
           // match the request and the test will fail
           return headers['Authorization'] == 'xxx';
         }).respond(201, '');

         $rootScope.saveMessage('whatever');
         $httpBackend.flush();
       });
    });
   ```
 */
angular.mock.$HttpBackendProvider = function() {
  this.$get = ['$rootScope', '$timeout', createHttpBackendMock];
};

/**
 * General factory function for $httpBackend mock.
 * Returns instance for unit testing (when no arguments specified):
 *   - passing through is disabled
 *   - auto flushing is disabled
 *
 * Returns instance for e2e testing (when `$delegate` and `$browser` specified):
 *   - passing through (delegating request to real backend) is enabled
 *   - auto flushing is enabled
 *
 * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)
 * @param {Object=} $browser Auto-flushing enabled if specified
 * @return {Object} Instance of $httpBackend mock
 */
function createHttpBackendMock($rootScope, $timeout, $delegate, $browser) {
  var definitions = [],
      expectations = [],
      responses = [],
      responsesPush = angular.bind(responses, responses.push),
      copy = angular.copy;

  function createResponse(status, data, headers, statusText) {
    if (angular.isFunction(status)) return status;

    return function() {
      return angular.isNumber(status)
          ? [status, data, headers, statusText]
          : [200, status, data, headers];
    };
  }

  // TODO(vojta): change params to: method, url, data, headers, callback
  function $httpBackend(method, url, data, callback, headers, timeout, withCredentials) {
    var xhr = new MockXhr(),
        expectation = expectations[0],
        wasExpected = false;

    function prettyPrint(data) {
      return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp)
          ? data
          : angular.toJson(data);
    }

    function wrapResponse(wrapped) {
      if (!$browser && timeout) {
        timeout.then ? timeout.then(handleTimeout) : $timeout(handleTimeout, timeout);
      }

      return handleResponse;

      function handleResponse() {
        var response = wrapped.response(method, url, data, headers);
        xhr.$$respHeaders = response[2];
        callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(),
                 copy(response[3] || ''));
      }

      function handleTimeout() {
        for (var i = 0, ii = responses.length; i < ii; i++) {
          if (responses[i] === handleResponse) {
            responses.splice(i, 1);
            callback(-1, undefined, '');
            break;
          }
        }
      }
    }

    if (expectation && expectation.match(method, url)) {
      if (!expectation.matchData(data)) {
        throw new Error('Expected ' + expectation + ' with different data\n' +
            'EXPECTED: ' + prettyPrint(expectation.data) + '\nGOT:      ' + data);
      }

      if (!expectation.matchHeaders(headers)) {
        throw new Error('Expected ' + expectation + ' with different headers\n' +
                        'EXPECTED: ' + prettyPrint(expectation.headers) + '\nGOT:      ' +
                        prettyPrint(headers));
      }

      expectations.shift();

      if (expectation.response) {
        responses.push(wrapResponse(expectation));
        return;
      }
      wasExpected = true;
    }

    var i = -1, definition;
    while ((definition = definitions[++i])) {
      if (definition.match(method, url, data, headers || {})) {
        if (definition.response) {
          // if $browser specified, we do auto flush all requests
          ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
        } else if (definition.passThrough) {
          $delegate(method, url, data, callback, headers, timeout, withCredentials);
        } else throw new Error('No response defined !');
        return;
      }
    }
    throw wasExpected ?
        new Error('No response defined !') :
        new Error('Unexpected request: ' + method + ' ' + url + '\n' +
                  (expectation ? 'Expected ' + expectation : 'No more request expected'));
  }

  /**
   * @ngdoc method
   * @name $httpBackend#when
   * @description
   * Creates a new backend definition.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   *
   *  - respond –
   *      `{function([status,] data[, headers, statusText])
   *      | function(function(method, url, data, headers)}`
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (string), response
   *    headers (Object), and the text for the status (string). The respond method returns the
   *    `requestHandler` object for possible overrides.
   */
  $httpBackend.when = function(method, url, data, headers) {
    var definition = new MockHttpExpectation(method, url, data, headers),
        chain = {
          respond: function(status, data, headers, statusText) {
            definition.passThrough = undefined;
            definition.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    if ($browser) {
      chain.passThrough = function() {
        definition.response = undefined;
        definition.passThrough = true;
        return chain;
      };
    }

    definitions.push(definition);
    return chain;
  };

  /**
   * @ngdoc method
   * @name $httpBackend#whenGET
   * @description
   * Creates a new backend definition for GET requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenHEAD
   * @description
   * Creates a new backend definition for HEAD requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenDELETE
   * @description
   * Creates a new backend definition for DELETE requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPOST
   * @description
   * Creates a new backend definition for POST requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPUT
   * @description
   * Creates a new backend definition for PUT requests.  For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenJSONP
   * @description
   * Creates a new backend definition for JSONP requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */
  createShortMethods('when');


  /**
   * @ngdoc method
   * @name $httpBackend#expect
   * @description
   * Creates a new request expectation.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *  request is handled. You can save this object for later use and invoke `respond` again in
   *  order to change how a matched request is handled.
   *
   *  - respond –
   *    `{function([status,] data[, headers, statusText])
   *    | function(function(method, url, data, headers)}`
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (string), response
   *    headers (Object), and the text for the status (string). The respond method returns the
   *    `requestHandler` object for possible overrides.
   */
  $httpBackend.expect = function(method, url, data, headers) {
    var expectation = new MockHttpExpectation(method, url, data, headers),
        chain = {
          respond: function(status, data, headers, statusText) {
            expectation.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    expectations.push(expectation);
    return chain;
  };


  /**
   * @ngdoc method
   * @name $httpBackend#expectGET
   * @description
   * Creates a new request expectation for GET requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #expect for more info.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectHEAD
   * @description
   * Creates a new request expectation for HEAD requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectDELETE
   * @description
   * Creates a new request expectation for DELETE requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPOST
   * @description
   * Creates a new request expectation for POST requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPUT
   * @description
   * Creates a new request expectation for PUT requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPATCH
   * @description
   * Creates a new request expectation for PATCH requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectJSONP
   * @description
   * Creates a new request expectation for JSONP requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives an url
   *   and returns true if the url matches the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */
  createShortMethods('expect');


  /**
   * @ngdoc method
   * @name $httpBackend#flush
   * @description
   * Flushes all pending requests using the trained responses.
   *
   * @param {number=} count Number of responses to flush (in the order they arrived). If undefined,
   *   all pending requests will be flushed. If there are no pending requests when the flush method
   *   is called an exception is thrown (as this typically a sign of programming error).
   */
  $httpBackend.flush = function(count, digest) {
    if (digest !== false) $rootScope.$digest();
    if (!responses.length) throw new Error('No pending request to flush !');

    if (angular.isDefined(count) && count !== null) {
      while (count--) {
        if (!responses.length) throw new Error('No more pending request to flush !');
        responses.shift()();
      }
    } else {
      while (responses.length) {
        responses.shift()();
      }
    }
    $httpBackend.verifyNoOutstandingExpectation(digest);
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingExpectation
   * @description
   * Verifies that all of the requests defined via the `expect` api were made. If any of the
   * requests were not made, verifyNoOutstandingExpectation throws an exception.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingExpectation);
   * ```
   */
  $httpBackend.verifyNoOutstandingExpectation = function(digest) {
    if (digest !== false) $rootScope.$digest();
    if (expectations.length) {
      throw new Error('Unsatisfied requests: ' + expectations.join(', '));
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingRequest
   * @description
   * Verifies that there are no outstanding requests that need to be flushed.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingRequest);
   * ```
   */
  $httpBackend.verifyNoOutstandingRequest = function() {
    if (responses.length) {
      throw new Error('Unflushed requests: ' + responses.length);
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#resetExpectations
   * @description
   * Resets all request expectations, but preserves all backend definitions. Typically, you would
   * call resetExpectations during a multiple-phase test when you want to reuse the same instance of
   * $httpBackend mock.
   */
  $httpBackend.resetExpectations = function() {
    expectations.length = 0;
    responses.length = 0;
  };

  return $httpBackend;


  function createShortMethods(prefix) {
    angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD'], function(method) {
     $httpBackend[prefix + method] = function(url, headers) {
       return $httpBackend[prefix](method, url, undefined, headers);
     };
    });

    angular.forEach(['PUT', 'POST', 'PATCH'], function(method) {
      $httpBackend[prefix + method] = function(url, data, headers) {
        return $httpBackend[prefix](method, url, data, headers);
      };
    });
  }
}

function MockHttpExpectation(method, url, data, headers) {

  this.data = data;
  this.headers = headers;

  this.match = function(m, u, d, h) {
    if (method != m) return false;
    if (!this.matchUrl(u)) return false;
    if (angular.isDefined(d) && !this.matchData(d)) return false;
    if (angular.isDefined(h) && !this.matchHeaders(h)) return false;
    return true;
  };

  this.matchUrl = function(u) {
    if (!url) return true;
    if (angular.isFunction(url.test)) return url.test(u);
    if (angular.isFunction(url)) return url(u);
    return url == u;
  };

  this.matchHeaders = function(h) {
    if (angular.isUndefined(headers)) return true;
    if (angular.isFunction(headers)) return headers(h);
    return angular.equals(headers, h);
  };

  this.matchData = function(d) {
    if (angular.isUndefined(data)) return true;
    if (data && angular.isFunction(data.test)) return data.test(d);
    if (data && angular.isFunction(data)) return data(d);
    if (data && !angular.isString(data)) {
      return angular.equals(angular.fromJson(angular.toJson(data)), angular.fromJson(d));
    }
    return data == d;
  };

  this.toString = function() {
    return method + ' ' + url;
  };
}

function createMockXhr() {
  return new MockXhr();
}

function MockXhr() {

  // hack for testing $http, $httpBackend
  MockXhr.$$lastInstance = this;

  this.open = function(method, url, async) {
    this.$$method = method;
    this.$$url = url;
    this.$$async = async;
    this.$$reqHeaders = {};
    this.$$respHeaders = {};
  };

  this.send = function(data) {
    this.$$data = data;
  };

  this.setRequestHeader = function(key, value) {
    this.$$reqHeaders[key] = value;
  };

  this.getResponseHeader = function(name) {
    // the lookup must be case insensitive,
    // that's why we try two quick lookups first and full scan last
    var header = this.$$respHeaders[name];
    if (header) return header;

    name = angular.lowercase(name);
    header = this.$$respHeaders[name];
    if (header) return header;

    header = undefined;
    angular.forEach(this.$$respHeaders, function(headerVal, headerName) {
      if (!header && angular.lowercase(headerName) == name) header = headerVal;
    });
    return header;
  };

  this.getAllResponseHeaders = function() {
    var lines = [];

    angular.forEach(this.$$respHeaders, function(value, key) {
      lines.push(key + ': ' + value);
    });
    return lines.join('\n');
  };

  this.abort = angular.noop;
}


/**
 * @ngdoc service
 * @name $timeout
 * @description
 *
 * This service is just a simple decorator for {@link ng.$timeout $timeout} service
 * that adds a "flush" and "verifyNoPendingTasks" methods.
 */

angular.mock.$TimeoutDecorator = ['$delegate', '$browser', function($delegate, $browser) {

  /**
   * @ngdoc method
   * @name $timeout#flush
   * @description
   *
   * Flushes the queue of pending tasks.
   *
   * @param {number=} delay maximum timeout amount to flush up until
   */
  $delegate.flush = function(delay) {
    $browser.defer.flush(delay);
  };

  /**
   * @ngdoc method
   * @name $timeout#verifyNoPendingTasks
   * @description
   *
   * Verifies that there are no pending tasks that need to be flushed.
   */
  $delegate.verifyNoPendingTasks = function() {
    if ($browser.deferredFns.length) {
      throw new Error('Deferred tasks to flush (' + $browser.deferredFns.length + '): ' +
          formatPendingTasksAsString($browser.deferredFns));
    }
  };

  function formatPendingTasksAsString(tasks) {
    var result = [];
    angular.forEach(tasks, function(task) {
      result.push('{id: ' + task.id + ', ' + 'time: ' + task.time + '}');
    });

    return result.join(', ');
  }

  return $delegate;
}];

angular.mock.$RAFDecorator = ['$delegate', function($delegate) {
  var queue = [];
  var rafFn = function(fn) {
    var index = queue.length;
    queue.push(fn);
    return function() {
      queue.splice(index, 1);
    };
  };

  rafFn.supported = $delegate.supported;

  rafFn.flush = function() {
    if (queue.length === 0) {
      throw new Error('No rAF callbacks present');
    }

    var length = queue.length;
    for (var i = 0; i < length; i++) {
      queue[i]();
    }

    queue = queue.slice(i);
  };

  return rafFn;
}];

angular.mock.$AsyncCallbackDecorator = ['$delegate', function($delegate) {
  var callbacks = [];
  var addFn = function(fn) {
    callbacks.push(fn);
  };
  addFn.flush = function() {
    angular.forEach(callbacks, function(fn) {
      fn();
    });
    callbacks = [];
  };
  return addFn;
}];

/**
 *
 */
angular.mock.$RootElementProvider = function() {
  this.$get = function() {
    return angular.element('<div ng-app></div>');
  };
};

/**
 * @ngdoc service
 * @name $controller
 * @description
 * A decorator for {@link ng.$controller} with additional `bindings` parameter, useful when testing
 * controllers of directives that use {@link $compile#-bindtocontroller- `bindToController`}.
 *
 *
 * ## Example
 *
 * ```js
 *
 * // Directive definition ...
 *
 * myMod.directive('myDirective', {
 *   controller: 'MyDirectiveController',
 *   bindToController: {
 *     name: '@'
 *   }
 * });
 *
 *
 * // Controller definition ...
 *
 * myMod.controller('MyDirectiveController', ['log', function($log) {
 *   $log.info(this.name);
 * })];
 *
 *
 * // In a test ...
 *
 * describe('myDirectiveController', function() {
 *   it('should write the bound name to the log', inject(function($controller, $log) {
 *     var ctrl = $controller('MyDirective', { /* no locals &#42;/ }, { name: 'Clark Kent' });
 *     expect(ctrl.name).toEqual('Clark Kent');
 *     expect($log.info.logs).toEqual(['Clark Kent']);
 *   });
 * });
 *
 * ```
 *
 * @param {Function|string} constructor If called with a function then it's considered to be the
 *    controller constructor function. Otherwise it's considered to be a string which is used
 *    to retrieve the controller constructor using the following steps:
 *
 *    * check if a controller with given name is registered via `$controllerProvider`
 *    * check if evaluating the string on the current scope returns a constructor
 *    * if $controllerProvider#allowGlobals, check `window[constructor]` on the global
 *      `window` object (not recommended)
 *
 *    The string can use the `controller as property` syntax, where the controller instance is published
 *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
 *    to work correctly.
 *
 * @param {Object} locals Injection locals for Controller.
 * @param {Object=} bindings Properties to add to the controller before invoking the constructor. This is used
 *                           to simulate the `bindToController` feature and simplify certain kinds of tests.
 * @return {Object} Instance of given controller.
 */
angular.mock.$ControllerDecorator = ['$delegate', function($delegate) {
  return function(expression, locals, later, ident) {
    if (later && typeof later === 'object') {
      var create = $delegate(expression, locals, true, ident);
      angular.extend(create.instance, later);
      return create();
    }
    return $delegate(expression, locals, later, ident);
  };
}];


/**
 * @ngdoc module
 * @name ngMock
 * @packageName angular-mocks
 * @description
 *
 * # ngMock
 *
 * The `ngMock` module provides support to inject and mock Angular services into unit tests.
 * In addition, ngMock also extends various core ng services such that they can be
 * inspected and controlled in a synchronous manner within test code.
 *
 *
 * <div doc-module-components="ngMock"></div>
 *
 */
angular.module('ngMock', ['ng']).provider({
  $browser: angular.mock.$BrowserProvider,
  $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
  $log: angular.mock.$LogProvider,
  $interval: angular.mock.$IntervalProvider,
  $httpBackend: angular.mock.$HttpBackendProvider,
  $rootElement: angular.mock.$RootElementProvider
}).config(['$provide', function($provide) {
  $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
  $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
  $provide.decorator('$$asyncCallback', angular.mock.$AsyncCallbackDecorator);
  $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
  $provide.decorator('$controller', angular.mock.$ControllerDecorator);
}]);

/**
 * @ngdoc module
 * @name ngMockE2E
 * @module ngMockE2E
 * @packageName angular-mocks
 * @description
 *
 * The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.
 * Currently there is only one mock present in this module -
 * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.
 */
angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide) {
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}]);

/**
 * @ngdoc service
 * @name $httpBackend
 * @module ngMockE2E
 * @description
 * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
 * applications that use the {@link ng.$http $http service}.
 *
 * *Note*: For fake http backend implementation suitable for unit testing please see
 * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.
 *
 * This implementation can be used to respond with static or dynamic responses via the `when` api
 * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
 * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
 * templates from a webserver).
 *
 * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
 * is being developed with the real backend api replaced with a mock, it is often desirable for
 * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
 * templates or static files from the webserver). To configure the backend with this behavior
 * use the `passThrough` request handler of `when` instead of `respond`.
 *
 * Additionally, we don't want to manually have to flush mocked out requests like we do during unit
 * testing. For this reason the e2e $httpBackend flushes mocked out requests
 * automatically, closely simulating the behavior of the XMLHttpRequest object.
 *
 * To setup the application to run with this http backend, you have to create a module that depends
 * on the `ngMockE2E` and your application modules and defines the fake backend:
 *
 * ```js
 *   myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
 *   myAppDev.run(function($httpBackend) {
 *     phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *     $httpBackend.whenGET(/^\/templates\//).passThrough();
 *     //...
 *   });
 * ```
 *
 * Afterwards, bootstrap your app with this new module.
 */

/**
 * @ngdoc method
 * @name $httpBackend#when
 * @module ngMockE2E
 * @description
 * Creates a new backend definition.
 *
 * @param {string} method HTTP method.
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
 *   object and returns true if the headers match the current definition.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 *
 *  - respond –
 *    `{function([status,] data[, headers, statusText])
 *    | function(function(method, url, data, headers)}`
 *    – The respond method takes a set of static data to be returned or a function that can return
 *    an array containing response status (number), response data (string), response headers
 *    (Object), and the text for the status (string).
 *  - passThrough – `{function()}` – Any request matching a backend definition with
 *    `passThrough` handler will be passed through to the real backend (an XHR request will be made
 *    to the server.)
 *  - Both methods return the `requestHandler` object for possible overrides.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenGET
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for GET requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenHEAD
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for HEAD requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenDELETE
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for DELETE requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPOST
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for POST requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPUT
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PUT requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPATCH
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PATCH requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenJSONP
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for JSONP requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */
angular.mock.e2e = {};
angular.mock.e2e.$httpBackendDecorator =
  ['$rootScope', '$timeout', '$delegate', '$browser', createHttpBackendMock];


/**
 * @ngdoc type
 * @name $rootScope.Scope
 * @module ngMock
 * @description
 * {@link ng.$rootScope.Scope Scope} type decorated with helper methods useful for testing. These
 * methods are automatically available on any {@link ng.$rootScope.Scope Scope} instance when
 * `ngMock` module is loaded.
 *
 * In addition to all the regular `Scope` methods, the following helper methods are available:
 */
angular.mock.$RootScopeDecorator = ['$delegate', function($delegate) {

  var $rootScopePrototype = Object.getPrototypeOf($delegate);

  $rootScopePrototype.$countChildScopes = countChildScopes;
  $rootScopePrototype.$countWatchers = countWatchers;

  return $delegate;

  // ------------------------------------------------------------------------------------------ //

  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countChildScopes
   * @module ngMock
   * @description
   * Counts all the direct and indirect child scopes of the current scope.
   *
   * The current scope is excluded from the count. The count includes all isolate child scopes.
   *
   * @returns {number} Total number of child scopes.
   */
  function countChildScopes() {
    // jshint validthis: true
    var count = 0; // exclude the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += 1;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }


  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countWatchers
   * @module ngMock
   * @description
   * Counts all the watchers of direct and indirect child scopes of the current scope.
   *
   * The watchers of the current scope are included in the count and so are all the watchers of
   * isolate child scopes.
   *
   * @returns {number} Total number of watchers.
   */
  function countWatchers() {
    // jshint validthis: true
    var count = this.$$watchers ? this.$$watchers.length : 0; // include the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }
}];


if (window.jasmine || window.mocha) {

  var currentSpec = null,
      annotatedFunctions = [],
      isSpecRunning = function() {
        return !!currentSpec;
      };

  angular.mock.$$annotate = angular.injector.$$annotate;
  angular.injector.$$annotate = function(fn) {
    if (typeof fn === 'function' && !fn.$inject) {
      annotatedFunctions.push(fn);
    }
    return angular.mock.$$annotate.apply(this, arguments);
  };


  (window.beforeEach || window.setup)(function() {
    annotatedFunctions = [];
    currentSpec = this;
  });

  (window.afterEach || window.teardown)(function() {
    var injector = currentSpec.$injector;

    annotatedFunctions.forEach(function(fn) {
      delete fn.$inject;
    });

    angular.forEach(currentSpec.$modules, function(module) {
      if (module && module.$$hashKey) {
        module.$$hashKey = undefined;
      }
    });

    currentSpec.$injector = null;
    currentSpec.$modules = null;
    currentSpec = null;

    if (injector) {
      injector.get('$rootElement').off();
    }

    // clean up jquery's fragment cache
    angular.forEach(angular.element.fragments, function(val, key) {
      delete angular.element.fragments[key];
    });

    MockXhr.$$lastInstance = null;

    angular.forEach(angular.callbacks, function(val, key) {
      delete angular.callbacks[key];
    });
    angular.callbacks.counter = 0;
  });

  /**
   * @ngdoc function
   * @name angular.mock.module
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * This function registers a module configuration code. It collects the configuration information
   * which will be used when the injector is created by {@link angular.mock.inject inject}.
   *
   * See {@link angular.mock.inject inject} for usage example
   *
   * @param {...(string|Function|Object)} fns any number of modules which are represented as string
   *        aliases or as anonymous module initialization functions. The modules are used to
   *        configure the injector. The 'ng' and 'ngMock' modules are automatically loaded. If an
   *        object literal is passed they will be registered as values in the module, the key being
   *        the module name and the value being what is returned.
   */
  window.module = angular.mock.module = function() {
    var moduleFns = Array.prototype.slice.call(arguments, 0);
    return isSpecRunning() ? workFn() : workFn;
    /////////////////////
    function workFn() {
      if (currentSpec.$injector) {
        throw new Error('Injector already created, can not register a module!');
      } else {
        var modules = currentSpec.$modules || (currentSpec.$modules = []);
        angular.forEach(moduleFns, function(module) {
          if (angular.isObject(module) && !angular.isArray(module)) {
            modules.push(function($provide) {
              angular.forEach(module, function(value, key) {
                $provide.value(key, value);
              });
            });
          } else {
            modules.push(module);
          }
        });
      }
    }
  };

  /**
   * @ngdoc function
   * @name angular.mock.inject
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * The inject function wraps a function into an injectable function. The inject() creates new
   * instance of {@link auto.$injector $injector} per test, which is then used for
   * resolving references.
   *
   *
   * ## Resolving References (Underscore Wrapping)
   * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
   * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
   * that is declared in the scope of the `describe()` block. Since we would, most likely, want
   * the variable to have the same name of the reference we have a problem, since the parameter
   * to the `inject()` function would hide the outer variable.
   *
   * To help with this, the injected parameters can, optionally, be enclosed with underscores.
   * These are ignored by the injector when the reference name is resolved.
   *
   * For example, the parameter `_myService_` would be resolved as the reference `myService`.
   * Since it is available in the function body as _myService_, we can then assign it to a variable
   * defined in an outer scope.
   *
   * ```
   * // Defined out reference variable outside
   * var myService;
   *
   * // Wrap the parameter in underscores
   * beforeEach( inject( function(_myService_){
   *   myService = _myService_;
   * }));
   *
   * // Use myService in a series of tests.
   * it('makes use of myService', function() {
   *   myService.doStuff();
   * });
   *
   * ```
   *
   * See also {@link angular.mock.module angular.mock.module}
   *
   * ## Example
   * Example of what a typical jasmine tests looks like with the inject method.
   * ```js
   *
   *   angular.module('myApplicationModule', [])
   *       .value('mode', 'app')
   *       .value('version', 'v1.0.1');
   *
   *
   *   describe('MyApp', function() {
   *
   *     // You need to load modules that you want to test,
   *     // it loads only the "ng" module by default.
   *     beforeEach(module('myApplicationModule'));
   *
   *
   *     // inject() is used to inject arguments of all given functions
   *     it('should provide a version', inject(function(mode, version) {
   *       expect(version).toEqual('v1.0.1');
   *       expect(mode).toEqual('app');
   *     }));
   *
   *
   *     // The inject and module method can also be used inside of the it or beforeEach
   *     it('should override a version and test the new version is injected', function() {
   *       // module() takes functions or strings (module aliases)
   *       module(function($provide) {
   *         $provide.value('version', 'overridden'); // override version here
   *       });
   *
   *       inject(function(version) {
   *         expect(version).toEqual('overridden');
   *       });
   *     });
   *   });
   *
   * ```
   *
   * @param {...Function} fns any number of functions which will be injected using the injector.
   */



  var ErrorAddingDeclarationLocationStack = function(e, errorForStack) {
    this.message = e.message;
    this.name = e.name;
    if (e.line) this.line = e.line;
    if (e.sourceId) this.sourceId = e.sourceId;
    if (e.stack && errorForStack)
      this.stack = e.stack + '\n' + errorForStack.stack;
    if (e.stackArray) this.stackArray = e.stackArray;
  };
  ErrorAddingDeclarationLocationStack.prototype.toString = Error.prototype.toString;

  window.inject = angular.mock.inject = function() {
    var blockFns = Array.prototype.slice.call(arguments, 0);
    var errorForStack = new Error('Declaration Location');
    return isSpecRunning() ? workFn.call(currentSpec) : workFn;
    /////////////////////
    function workFn() {
      var modules = currentSpec.$modules || [];
      var strictDi = !!currentSpec.$injectorStrict;
      modules.unshift('ngMock');
      modules.unshift('ng');
      var injector = currentSpec.$injector;
      if (!injector) {
        if (strictDi) {
          // If strictDi is enabled, annotate the providerInjector blocks
          angular.forEach(modules, function(moduleFn) {
            if (typeof moduleFn === "function") {
              angular.injector.$$annotate(moduleFn);
            }
          });
        }
        injector = currentSpec.$injector = angular.injector(modules, strictDi);
        currentSpec.$injectorStrict = strictDi;
      }
      for (var i = 0, ii = blockFns.length; i < ii; i++) {
        if (currentSpec.$injectorStrict) {
          // If the injector is strict / strictDi, and the spec wants to inject using automatic
          // annotation, then annotate the function here.
          injector.annotate(blockFns[i]);
        }
        try {
          /* jshint -W040 *//* Jasmine explicitly provides a `this` object when calling functions */
          injector.invoke(blockFns[i] || angular.noop, this);
          /* jshint +W040 */
        } catch (e) {
          if (e.stack && errorForStack) {
            throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
          }
          throw e;
        } finally {
          errorForStack = null;
        }
      }
    }
  };


  angular.mock.inject.strictDi = function(value) {
    value = arguments.length ? !!value : true;
    return isSpecRunning() ? workFn() : workFn;

    function workFn() {
      if (value !== currentSpec.$injectorStrict) {
        if (currentSpec.$injector) {
          throw new Error('Injector already created, can not modify strict annotations');
        } else {
          currentSpec.$injectorStrict = value;
        }
      }
    }
  };
}


})(window, window.angular);

d3=function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function i(){}function u(){}function a(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function o(){}function c(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new i;return t.on=function(t,i){var u,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,u=e.indexOf(a)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function l(){ua.event.stopPropagation(),ua.event.preventDefault()}function f(){for(var n,t=ua.event;n=t.sourceEvent;)t=n;return t}function s(n,t){function e(){n.on(t,null)}n.on(t,function(){l(),e()},!0),setTimeout(e,0)}function h(n){for(var t=new o,e=0,r=arguments.length;++e<r;)t[arguments[e]]=c(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ua.event;i.target=n,ua.event=i,t[i.type].apply(e,r)}finally{ua.event=u}}},t}function g(n,t){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>pa&&(oa.scrollX||oa.scrollY)){e=ua.select(aa.body).append("svg").style("position","absolute").style("top",0).style("left",0);var i=e[0][0].getScreenCTM();pa=!(i.f||i.e),e.remove()}return pa?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function p(n){for(var t=-1,e=n.length,r=[];++t<e;)r.push(n[t]);return r}function d(n){return Array.prototype.slice.call(n)}function m(n){return va(n,wa),n}function v(n){return function(){return ya(n,this)}}function y(n){return function(){return Ma(n,this)}}function M(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ua.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?u:i}function x(n){return n.trim().replace(/\s+/g," ")}function b(n){return RegExp("(?:^|\\s+)"+ua.requote(n)+"(?:\\s+|$)","g")}function _(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=n.trim().split(/\s+/).map(w);var i=n.length;return"function"==typeof t?r:e}function w(n){var t=b(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",x(i+" "+n))):e.setAttribute("class",x(i.replace(t," ")))}}function S(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function E(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function k(n){return{__data__:n}}function A(n){return function(){return _a(this,n)}}function N(n){return arguments.length||(n=ua.ascending),function(t,e){return!t-!e||n(t.__data__,e.__data__)}}function q(){}function T(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function i(){var i=c(t,da(arguments));r.call(this),this.addEventListener(n,this[a]=i,i.$=e),i._=t}function u(){var t,e=RegExp("^__on([^.]+)"+ua.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),c=C;o>0&&(n=n.substring(0,o));var l=ka.get(n);return l&&(n=l,c=z),o?t?i:r:t?q:u}function C(n,t){return function(e){var r=ua.event;ua.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ua.event=r}}}function z(n,t){var e=C(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||r.compareDocumentPosition(t)&8)||e.call(t,n)}}function D(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],a=0,o=u.length;o>a;a++)(i=u[a])&&t(i,a,e);return n}function j(n){return va(n,Aa),n}function L(){}function F(n,t,e){return new H(n,t,e)}function H(n,t,e){this.h=n,this.s=t,this.l=e}function P(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(a-u)*n/60:180>n?a:240>n?u+(a-u)*(240-n)/60:u}function i(n){return Math.round(r(n)*255)}var u,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,u=2*e-a,tt(i(n+120),i(n),i(n-120))}function R(n){return n>0?1:0>n?-1:0}function O(n){return Math.acos(Math.max(-1,Math.min(1,n)))}function Y(n){return n>1?Da/2:-1>n?-Da/2:Math.asin(n)}function U(n){return(Math.exp(n)-Math.exp(-n))/2}function I(n){return(Math.exp(n)+Math.exp(-n))/2}function V(n){return(n=Math.sin(n/2))*n}function X(n,t,e){return new Z(n,t,e)}function Z(n,t,e){this.h=n,this.c=t,this.l=e}function B(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),$(e,Math.cos(n*=La)*t,Math.sin(n)*t)}function $(n,t,e){return new J(n,t,e)}function J(n,t,e){this.l=n,this.a=t,this.b=e}function G(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=W(i)*Ra,r=W(r)*Oa,u=W(u)*Ya,tt(nt(3.2404542*i-1.5371385*r-.4985314*u),nt(-.969266*i+1.8760108*r+.041556*u),nt(.0556434*i-.2040259*r+1.0572252*u))}function K(n,t,e){return n>0?X(Math.atan2(e,t)*Fa,Math.sqrt(t*t+e*e),n):X(0/0,0/0,n)}function W(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function Q(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function nt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function tt(n,t,e){return new et(n,t,e)}function et(n,t,e){this.r=n,this.g=t,this.b=e}function rt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function it(n,t,e){var r,i,u,a=0,o=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(ct(i[0]),ct(i[1]),ct(i[2]))}return(u=Va.get(n))?t(u.r,u.g,u.b):(null!=n&&n.charAt(0)==="#"&&(n.length===4?(a=n.charAt(1),a+=a,o=n.charAt(2),o+=o,c=n.charAt(3),c+=c):n.length===7&&(a=n.substring(1,3),o=n.substring(3,5),c=n.substring(5,7)),a=parseInt(a,16),o=parseInt(o,16),c=parseInt(c,16)),t(a,o,c))}function ut(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-u,c=(a+u)/2;return o?(i=.5>c?o/(a+u):o/(2-a-u),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=0/0,i=c>0&&1>c?0:r),F(r,i,c)}function at(n,t,e){n=ot(n),t=ot(t),e=ot(e);var r=Q((.4124564*n+.3575761*t+.1804375*e)/Ra),i=Q((.2126729*n+.7151522*t+.072175*e)/Oa),u=Q((.0193339*n+.119192*t+.9503041*e)/Ya);return $(116*i-16,500*(r-i),200*(i-u))}function ot(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function ct(n){var t=parseFloat(n);return n.charAt(n.length-1)==="%"?Math.round(2.55*t):t}function lt(n){return"function"==typeof n?n:function(){return n}}function ft(n){return n}function st(n){return function(t,e,r){return arguments.length===2&&"function"==typeof e&&(r=e,e=null),ht(t,e,n,r)}}function ht(n,t,e,r){function i(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(u,c)}catch(r){return a.error.call(u,r),void 0}a.load.call(u,n)}else a.error.call(u,c)}var u={},a=ua.dispatch("progress","load","error"),o={},c=new(oa.XDomainRequest&&/^(http(s)?:)?\/\//.test(n)?XDomainRequest:XMLHttpRequest);return"onload"in c?c.onload=c.onerror=i:c.onreadystatechange=function(){c.readyState>3&&i()},c.onprogress=function(n){var t=ua.event;ua.event=n;try{a.progress.call(u,c)}finally{ua.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(da(arguments)))}}),u.send=function(e,r,i){if(arguments.length===2&&"function"==typeof r&&(i=r,r=null),c.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),c.setRequestHeader)for(var a in o)c.setRequestHeader(a,o[a]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),c.send(null==r?null:r),u},u.abort=function(){return c.abort(),u},ua.rebind(u,a,"on"),null==r?u:u.get(gt(r))}function gt(n){return n.length===1?function(t,e){n(null==t?e:null)}:n}function pt(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var a=ua.xhr(n,t,u);return a.row=function(n){return arguments.length?a.response((e=n)==null?r:i(n)):e},a.row(e)}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function a(t){return t.map(o).join(n)}function o(n){return c.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var c=RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return a;if(i)return i=!1,u;var t=f;if(n.charCodeAt(t)===34){for(var e=t;e++<c;)if(n.charCodeAt(e)===34){if(n.charCodeAt(e+1)!==34)break;++e}f=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,n.charCodeAt(e+2)===10&&++f):10===r&&(i=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;c>f;){var r=n.charCodeAt(f++),o=1;if(10===r)i=!0;else if(13===r)i=!0,n.charCodeAt(f)===10&&(++f,++o);else if(r!==l)continue;return n.substring(t,f-o)}return n.substring(t)}for(var r,i,u={},a={},o=[],c=n.length,f=0,s=0;(r=e())!==a;){for(var h=[];r!==u&&r!==a;)h.push(r),r=e();(!t||(h=t(h,s++)))&&o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new u,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(a).join("\n")},e}function dt(){var n=mt(),t=vt()-n;t>24?(isFinite(t)&&(clearTimeout($a),$a=setTimeout(dt,t)),Ba=0):(Ba=1,Ja(dt))}function mt(){for(var n=Date.now(),t=Xa;t;)n>=t.time&&(t.flush=t.callback(n-t.time)),t=t.next;return n}function vt(){for(var n,t=Xa,e=1/0;t;)t.flush?t=n?n.next=t.next:Xa=t.next:(t.time<e&&(e=t.time),t=(n=t).next);return Za=n,e}function yt(n,t){var e=Math.pow(10,Math.abs(8-t)*3);return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Mt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function xt(n){return n+""}function bt(n,t){n&&uo.hasOwnProperty(n.type)&&uo[n.type](n,t)}function _t(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1]);t.lineEnd()}function wt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)_t(n[e],t,1);t.polygonEnd()}function St(){function n(n,t){n*=La,t=t*La/2+Da/4;var e=n-r,a=Math.cos(t),o=Math.sin(t),c=u*o,l=i*a+c*Math.cos(e),f=c*Math.sin(e);oo+=Math.atan2(f,l),r=n,i=a,u=o}var t,e,r,i,u;co.point=function(a,o){co.point=n,r=(t=a)*La,i=Math.cos(o=(e=o)*La/2+Da/4),u=Math.sin(o)},co.lineEnd=function(){n(t,e)}}function Et(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function kt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function At(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Nt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function qt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Tt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Ct(n){return[Math.atan2(n[1],n[0]),Math.asin(Math.max(-1,Math.min(1,n[2])))]}function zt(n,t){return Math.abs(n[0]-t[0])<ja&&Math.abs(n[1]-t[1])<ja}function Dt(n,t){if(!lo){++fo,n*=La;var e=Math.cos(t*=La);so+=(e*Math.cos(n)-so)/fo,ho+=(e*Math.sin(n)-ho)/fo,go+=(Math.sin(t)-go)/fo}}function jt(){var n,t;lo=1,Lt(),lo=2;var e=po.point;po.point=function(r,i){e(n=r,t=i)},po.lineEnd=function(){po.point(n,t),Ft(),po.lineEnd=Ft}}function Lt(){function n(n,i){n*=La;var u=Math.cos(i*=La),a=u*Math.cos(n),o=u*Math.sin(n),c=Math.sin(i),l=Math.atan2(Math.sqrt((l=e*c-r*o)*l+(l=r*a-t*c)*l+(l=t*o-e*a)*l),t*a+e*o+r*c);fo+=l,so+=l*(t+(t=a)),ho+=l*(e+(e=o)),go+=l*(r+(r=c))}var t,e,r;lo>1||(1>lo&&(lo=1,fo=so=ho=go=0),po.point=function(i,u){i*=La;var a=Math.cos(u*=La);t=a*Math.cos(i),e=a*Math.sin(i),r=Math.sin(u),po.point=n})}function Ft(){po.point=Dt}function Ht(){return!0}function Pt(n,t,e,r,i){var u=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(zt(e,r)){i.lineStart();for(var o=0;t>o;++o)i.point((e=n[o])[0],e[1]);return i.lineEnd(),void 0}var c={point:e,points:n,other:null,visited:!1,entry:!0,subject:!0},l={point:e,points:[e],other:c,visited:!1,entry:!1,subject:!1};c.other=l,u.push(c),a.push(l),c={point:r,points:[r],other:null,visited:!1,entry:!1,subject:!0},l={point:r,points:[r],other:c,visited:!1,entry:!0,subject:!1},c.other=l,u.push(c),a.push(l)}}),a.sort(t),Rt(u),Rt(a),u.length){if(e)for(var o=1,c=!e(a[0].point),l=a.length;l>o;++o)a[o].entry=c=!c;for(var f,s,h,g=u[0];;){for(f=g;f.visited;)if((f=f.next)===g)return;s=f.points,i.lineStart();do{if(f.visited=f.other.visited=!0,f.entry){if(f.subject)for(var o=0;o<s.length;o++)i.point((h=s[o])[0],h[1]);else r(f.point,f.next.point,1,i);f=f.next}else{if(f.subject){s=f.prev.points;for(var o=s.length;--o>=0;)i.point((h=s[o])[0],h[1])}else r(f.point,f.prev.point,-1,i);f=f.prev}f=f.other,s=f.points}while(!f.visited);i.lineEnd()}}}function Rt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.next=e=n[r],e.prev=i,i=e;i.next=e=n[0],e.prev=i}}function Ot(n,t,e){return function(r){function i(t,e){n(t,e)&&r.point(t,e)}function u(n,t){m.point(n,t)}function a(){v.point=u,m.lineStart()}function o(){v.point=i,m.lineEnd()}function c(n,t){M.point(n,t),d.push([n,t])}function l(){M.lineStart(),d=[]}function f(){c(d[0][0],d[0][1]),M.lineEnd();var n,t=M.clean(),e=y.buffer(),i=e.length;if(!i)return p=!0,g+=It(d,-1),d=null,void 0;if(d=null,1&t){n=e[0],h+=It(n,1);var u,i=n.length-1,a=-1;for(r.lineStart();++a<i;)r.point((u=n[a])[0],u[1]);return r.lineEnd(),void 0}i>1&&2&t&&e.push(e.pop().concat(e.shift())),s.push(e.filter(Yt))}var s,h,g,p,d,m=t(r),v={point:i,lineStart:a,lineEnd:o,polygonStart:function(){v.point=c,v.lineStart=l,v.lineEnd=f,p=!1,g=h=0,s=[],r.polygonStart()},polygonEnd:function(){v.point=i,v.lineStart=a,v.lineEnd=o,s=ua.merge(s),s.length?Pt(s,Vt,null,e,r):(-ja>h||p&&-ja>g)&&(r.lineStart(),e(null,null,1,r),r.lineEnd()),r.polygonEnd(),s=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}},y=Ut(),M=t(y);return v}}function Yt(n){return n.length>1}function Ut(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:q,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function It(n,t){if(!(e=n.length))return 0;for(var e,r,i,u=0,a=0,o=n[0],c=o[0],l=o[1],f=Math.cos(l),s=Math.atan2(t*Math.sin(c)*f,Math.sin(l)),h=1-t*Math.cos(c)*f,g=s;++u<e;)o=n[u],f=Math.cos(l=o[1]),r=Math.atan2(t*Math.sin(c=o[0])*f,Math.sin(l)),i=1-t*Math.cos(c)*f,Math.abs(h-2)<ja&&Math.abs(i-2)<ja||(Math.abs(i)<ja||Math.abs(h)<ja||(Math.abs(Math.abs(r-s)-Da)<ja?i+h>2&&(a+=4*(r-s)):a+=Math.abs(h-2)<ja?4*(r-g):((3*Da+r-s)%(2*Da)-Da)*(h+i)),g=s,s=r,h=i);return a}function Vt(n,t){return((n=n.point)[0]<0?n[1]-Da/2-ja:Da/2-n[1])-((t=t.point)[0]<0?t[1]-Da/2-ja:Da/2-t[1])}function Xt(n){var t,e=0/0,r=0/0,i=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(u,a){var o=u>0?Da:-Da,c=Math.abs(u-e);Math.abs(c-Da)<ja?(n.point(e,r=(r+a)/2>0?Da/2:-Da/2),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(u,r),t=0):i!==o&&c>=Da&&(Math.abs(e-i)<ja&&(e-=i*ja),Math.abs(u-o)<ja&&(u-=o*ja),r=Zt(e,r,u,a),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=u,r=a),i=o},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Zt(n,t,e,r){var i,u,a=Math.sin(n-e);return Math.abs(a)>ja?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*a)):(t+r)/2}function Bt(n,t,e,r){var i;if(null==n)i=e*Da/2,r.point(-Da,i),r.point(0,i),r.point(Da,i),r.point(Da,0),r.point(Da,-i),r.point(0,-i),r.point(-Da,-i),r.point(-Da,0),r.point(-Da,i);else if(Math.abs(n[0]-t[0])>ja){var u=(n[0]<t[0]?1:-1)*Da;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function $t(n){function t(n,t){return Math.cos(n)*Math.cos(t)>u}function e(n){var e,u,c,l,f;return{lineStart:function(){l=c=!1,f=1},point:function(s,h){var g,p=[s,h],d=t(s,h),m=a?d?0:i(s,h):d?i(s+(0>s?Da:-Da),h):0;if(!e&&(l=c=d)&&n.lineStart(),d!==c&&(g=r(e,p),(zt(e,g)||zt(p,g))&&(p[0]+=ja,p[1]+=ja,d=t(p[0],p[1]))),d!==c)f=0,d?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(o&&e&&a^d){var v;m&u||!(v=r(p,e,!0))||(f=0,a?(n.lineStart(),n.point(v[0][0],v[0][1]),n.point(v[1][0],v[1][1]),n.lineEnd()):(n.point(v[1][0],v[1][1]),n.lineEnd(),n.lineStart(),n.point(v[0][0],v[0][1])))}!d||e&&zt(e,p)||n.point(p[0],p[1]),e=p,c=d,u=m},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return f|(l&&c)<<1}}}function r(n,t,e){var r=Et(n),i=Et(t),a=[1,0,0],o=At(r,i),c=kt(o,o),l=o[0],f=c-l*l;if(!f)return!e&&n;var s=u*c/f,h=-u*l/f,g=At(a,o),p=qt(a,s),d=qt(o,h);Nt(p,d);var m=g,v=kt(p,m),y=kt(m,m),M=v*v-y*(kt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=qt(m,(-v-x)/y);if(Nt(b,p),b=Ct(b),!e)return b;var _,w=n[0],S=t[0],E=n[1],k=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=Math.abs(A-Da)<ja,q=N||ja>A;if(!N&&E>k&&(_=E,E=k,k=_),q?N?E+k>0^b[1]<(Math.abs(b[0]-w)<ja?E:k):E<=b[1]&&b[1]<=k:A>Da^(w<=b[0]&&b[0]<=S)){var T=qt(m,(-v+x)/y);return Nt(T,p),[b,Ct(T)]}}}function i(t,e){var r=a?n:Da-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var u=Math.cos(n),a=u>0,o=Math.abs(u)>ja,c=oe(n,6*La);return Ot(t,e,c)}function Jt(n,t,e,r){function i(r,i){return Math.abs(r[0]-n)<ja?i>0?0:3:Math.abs(r[0]-e)<ja?i>0?2:1:Math.abs(r[1]-t)<ja?i>0?1:0:i>0?3:2}function u(n,t){return a(n.point,t.point)}function a(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}function o(i,u){var a=u[0]-i[0],o=u[1]-i[1],c=[0,1];return Math.abs(a)<ja&&Math.abs(o)<ja?n<=i[0]&&i[0]<=e&&t<=i[1]&&i[1]<=r:Gt(n-i[0],a,c)&&Gt(i[0]-e,-a,c)&&Gt(t-i[1],o,c)&&Gt(i[1]-r,-o,c)?(c[1]<1&&(u[0]=i[0]+c[1]*a,u[1]=i[1]+c[1]*o),c[0]>0&&(i[0]+=c[0]*a,i[1]+=c[0]*o),!0):!1}return function(c){function l(u){var a=i(u,-1),o=f([0===a||3===a?n:e,a>1?r:t]);return o}function f(n){for(var t=0,e=M.length,r=n[1],i=0;e>i;++i)for(var u,a=1,o=M[i],c=o.length,l=o[0];c>a;++a)u=o[a],l[1]<=r?u[1]>r&&s(l,u,n)>0&&++t:u[1]<=r&&s(l,u,n)<0&&--t,l=u;return 0!==t}function s(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}function h(u,o,c,l){var f=0,s=0;if(null==u||(f=i(u,c))!==(s=i(o,c))||a(u,o)<0^c>0){do l.point(0===f||3===f?n:e,f>1?r:t);while((f=(f+c+4)%4)!==s)}else l.point(o[0],o[1])}function g(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function p(n,t){g(n,t)&&c.point(n,t)}function d(){T.point=v,M&&M.push(x=[]),A=!0,k=!1,S=E=0/0}function m(){y&&(v(b,_),w&&k&&q.rejoin(),y.push(q.buffer())),T.point=p,k&&c.lineEnd()}function v(n,t){n=Math.max(-vo,Math.min(vo,n)),t=Math.max(-vo,Math.min(vo,t));var e=g(n,t);if(M&&x.push([n,t]),A)b=n,_=t,w=e,A=!1,e&&(c.lineStart(),c.point(n,t));else if(e&&k)c.point(n,t);else{var r=[S,E],i=[n,t];o(r,i)?(k||(c.lineStart(),c.point(r[0],r[1])),c.point(i[0],i[1]),e||c.lineEnd()):e&&(c.lineStart(),c.point(n,t))}S=n,E=t,k=e}var y,M,x,b,_,w,S,E,k,A,N=c,q=Ut(),T={point:p,lineStart:d,lineEnd:m,polygonStart:function(){c=q,y=[],M=[]},polygonEnd:function(){c=N,(y=ua.merge(y)).length?(c.polygonStart(),Pt(y,u,l,h,c),c.polygonEnd()):f([n,t])&&(c.polygonStart(),c.lineStart(),h(null,null,1,c),c.lineEnd(),c.polygonEnd()),y=M=x=null}};return T}}function Gt(n,t,e){if(Math.abs(t)<ja)return 0>=n;var r=n/t;if(t>0){if(r>e[1])return!1;r>e[0]&&(e[0]=r)}else{if(r<e[0])return!1;r<e[1]&&(e[1]=r)}return!0}function Kt(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Wt(n){function t(t){function r(e,r){e=n(e,r),t.point(e[0],e[1])}function u(){f=0/0,d.point=a,t.lineStart()}function a(r,u){var a=Et([r,u]),o=n(r,u);e(f,s,l,h,g,p,f=o[0],s=o[1],l=r,h=a[0],g=a[1],p=a[2],i,t),t.point(f,s)}function o(){d.point=r,t.lineEnd()}function c(){var n,r,c,m,v,y,M;u(),d.point=function(t,e){a(n=t,r=e),c=f,m=s,v=h,y=g,M=p,d.point=a},d.lineEnd=function(){e(f,s,l,h,g,p,c,m,n,v,y,M,i,t),d.lineEnd=o,o()}}var l,f,s,h,g,p,d={point:r,lineStart:u,lineEnd:o,polygonStart:function(){t.polygonStart(),d.lineStart=c},polygonEnd:function(){t.polygonEnd(),d.lineStart=u}};return d}function e(t,i,u,a,o,c,l,f,s,h,g,p,d,m){var v=l-t,y=f-i,M=v*v+y*y;if(M>4*r&&d--){var x=a+h,b=o+g,_=c+p,w=Math.sqrt(x*x+b*b+_*_),S=Math.asin(_/=w),E=Math.abs(Math.abs(_)-1)<ja?(u+s)/2:Math.atan2(b,x),k=n(E,S),A=k[0],N=k[1],q=A-t,T=N-i,C=y*q-v*T;(C*C/M>r||Math.abs((v*q+y*T)/M-.5)>.3)&&(e(t,i,u,a,o,c,A,N,E,x/=w,b/=w,_,d,m),m.point(A,N),e(A,N,E,x,b,_,l,f,s,h,g,p,d,m))}}var r=.5,i=16;return t.precision=function(n){return arguments.length?(i=(r=n*n)>0&&16,t):Math.sqrt(r)},t}function Qt(n){return ne(function(){return n})()}function ne(n){function t(n){return n=a(n[0]*La,n[1]*La),[n[0]*f+o,c-n[1]*f]}function e(n){return n=a.invert((n[0]-o)/f,(c-n[1])/f),n&&[n[0]*Fa,n[1]*Fa]}function r(){a=Kt(u=re(d,m,v),i);var n=i(g,p);return o=s-n[0]*f,c=h+n[1]*f,t}var i,u,a,o,c,l=Wt(function(n,t){return n=i(n,t),[n[0]*f+o,c-n[1]*f]}),f=150,s=480,h=250,g=0,p=0,d=0,m=0,v=0,y=mo,M=ft,x=null,b=null;return t.stream=function(n){return te(u,y(l(M(n))))},t.clipAngle=function(n){return arguments.length?(y=null==n?(x=n,mo):$t((x=+n)*La),t):x},t.clipExtent=function(n){return arguments.length?(b=n,M=null==n?ft:Jt(n[0][0],n[0][1],n[1][0],n[1][1]),t):b},t.scale=function(n){return arguments.length?(f=+n,r()):f},t.translate=function(n){return arguments.length?(s=+n[0],h=+n[1],r()):[s,h]},t.center=function(n){return arguments.length?(g=n[0]%360*La,p=n[1]%360*La,r()):[g*Fa,p*Fa]},t.rotate=function(n){return arguments.length?(d=n[0]%360*La,m=n[1]%360*La,v=n.length>2?n[2]%360*La:0,r()):[d*Fa,m*Fa,v*Fa]},ua.rebind(t,l,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function te(n,t){return{point:function(e,r){r=n(e*La,r*La),e=r[0],t.point(e>Da?e-2*Da:-Da>e?e+2*Da:e,r[1])},sphere:function(){t.sphere()},lineStart:function(){t.lineStart()},lineEnd:function(){t.lineEnd()},polygonStart:function(){t.polygonStart()},polygonEnd:function(){t.polygonEnd()}}}function ee(n,t){return[n,t]}function re(n,t,e){return n?t||e?Kt(ue(n),ae(t,e)):ue(n):t||e?ae(t,e):ee}function ie(n){return function(t,e){return t+=n,[t>Da?t-2*Da:-Da>t?t+2*Da:t,e]}}function ue(n){var t=ie(n);return t.invert=ie(-n),t}function ae(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),f=l*r+o*i;return[Math.atan2(c*u-f*a,o*r-l*i),Math.asin(Math.max(-1,Math.min(1,f*u+c*a)))]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),f=l*u-c*a;return[Math.atan2(c*u+l*a,o*r+f*i),Math.asin(Math.max(-1,Math.min(1,f*r-o*i)))]},e}function oe(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,a,o){null!=i?(i=ce(e,i),u=ce(e,u),(a>0?u>i:i>u)&&(i+=2*a*Da)):(i=n+2*a*Da,u=n);for(var c,l=a*t,f=i;a>0?f>u:u>f;f-=l)o.point((c=Ct([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function ce(n,t){var e=Et(t);e[0]-=n,Tt(e);var r=O(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-ja)%(2*Math.PI)}function le(n,t,e){var r=ua.range(n,t-ja,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function fe(n,t,e){var r=ua.range(n,t-ja,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function se(n){return n.source}function he(n){return n.target}function ge(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),a=Math.cos(r),o=Math.sin(r),c=i*Math.cos(n),l=i*Math.sin(n),f=a*Math.cos(e),s=a*Math.sin(e),h=2*Math.asin(Math.sqrt(V(r-t)+i*a*V(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*f,i=e*l+t*s,a=e*u+t*o;return[Math.atan2(i,r)*Fa,Math.atan2(a,Math.sqrt(r*r+i*i))*Fa]}:function(){return[n*Fa,t*Fa]};return p.distance=h,p}function pe(){function n(n,i){var u=Math.sin(i*=La),a=Math.cos(i),o=Math.abs((n*=La)-t),c=Math.cos(o);yo+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*u-e*a*c)*o),e*u+r*a*c),t=n,e=u,r=a}var t,e,r;Mo.point=function(i,u){t=i*La,e=Math.sin(u*=La),r=Math.cos(u),Mo.point=n},Mo.lineEnd=function(){Mo.point=Mo.lineEnd=q}}function de(n){var t=0,e=Da/3,r=ne(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Da/180,e=n[1]*Da/180):[180*(t/Da),180*(e/Da)]},i}function me(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),a-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),a=Math.sqrt(u)/i;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/i,Y((u-(n*n+e*e)*i*i)/(2*i))]},e}function ve(){function n(n,t){bo+=i*n-r*t,r=n,i=t}var t,e,r,i;ko.point=function(u,a){ko.point=n,t=r=u,e=i=a},ko.lineEnd=function(){n(t,e)}}function ye(n,t){_o>n&&(_o=n),n>So&&(So=n),wo>t&&(wo=t),t>Eo&&(Eo=t)}function Me(){function n(n,t){a.push("M",n,",",t,u)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function i(){a.push("Z")}var u=xe(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return u=xe(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function xe(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function be(n,t){lo||(so+=n,ho+=t,++go)}function _e(){function n(n,r){var i=n-t,u=r-e,a=Math.sqrt(i*i+u*u);so+=a*(t+n)/2,ho+=a*(e+r)/2,go+=a,t=n,e=r}var t,e;if(1!==lo){if(!(1>lo))return;lo=1,so=ho=go=0}No.point=function(r,i){No.point=n,t=r,e=i}}function we(){No.point=be}function Se(){function n(n,t){var e=i*n-r*t;so+=e*(r+n),ho+=e*(i+t),go+=3*e,r=n,i=t}var t,e,r,i;2>lo&&(lo=2,so=ho=go=0),No.point=function(u,a){No.point=n,t=r=u,e=i=a},No.lineEnd=function(){n(t,e)}}function Ee(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,a,0,2*Da)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function i(){o.point=t}function u(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:i,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=i,o.point=t},pointRadius:function(n){return a=n,o},result:q};return o}function ke(n){var t=Wt(function(t,e){return n([t*Fa,e*Fa])});return function(n){return n=t(n),{point:function(t,e){n.point(t*La,e*La)},sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}}function Ae(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),a=Math.cos(i);return[Math.atan2(n*u,r*a),Math.asin(r&&e*u/r)]},e}function Ne(n,t){function e(n,t){var e=Math.abs(Math.abs(t)-Da/2)<ja?0:a/Math.pow(i(t),u);return[e*Math.sin(u*n),a-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Da/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),a=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=a-t,r=R(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(a/r,1/u))-Da/2]},e):Te}function qe(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return Math.abs(i)<ja?ee:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-R(i)*Math.sqrt(n*n+e*e)]},e)}function Te(n,t){return[n,Math.log(Math.tan(Da/4+t/2))]}function Ce(n){var t,e=Qt(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=u.apply(e,arguments);if(a===e){if(t=null==n){var o=Da*r(),c=i();u([[c[0]-o,c[1]-o],[c[0]+o,c[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function ze(n,t){var e=Math.cos(t)*Math.sin(n);return[Math.log((1+e)/(1-e))/2,Math.atan2(Math.tan(t),Math.cos(n))]}function De(n){function t(t){function a(){l.push("M",u(n(f),o))}for(var c,l=[],f=[],s=-1,h=t.length,g=lt(e),p=lt(r);++s<h;)i.call(this,c=t[s],s)?f.push([+g.call(this,c,s),+p.call(this,c,s)]):f.length&&(a(),f=[]);return f.length&&a(),l.length?l.join(""):null}var e=je,r=Le,i=Ht,u=Fe,a=u.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?u=n:(u=jo.get(n)||Fe).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function je(n){return n[0]}function Le(n){return n[1]}function Fe(n){return n.join("L")}function He(n){return Fe(n)+"Z"}function Pe(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Re(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function Oe(n,t){return n.length<4?Fe(n):n[1]+Ie(n.slice(1,n.length-1),Ve(n,t))}function Ye(n,t){return n.length<3?Fe(n):n[0]+Ie((n.push(n[0]),n),Ve([n[n.length-2]].concat(n,[n[1]]),t))}function Ue(n,t){return n.length<3?Fe(n):n[0]+Ie(n,Ve(n,t))}function Ie(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Fe(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],a=t[0],o=a,c=1;if(e&&(r+="Q"+(u[0]-a[0]*2/3)+","+(u[1]-a[1]*2/3)+","+u[0]+","+u[1],i=n[1],c=2),t.length>1){o=t[1],u=n[c],c++,r+="C"+(i[0]+a[0])+","+(i[1]+a[1])+","+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1];for(var l=2;l<t.length;l++,c++)u=n[c],o=t[l],r+="S"+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1]}if(e){var f=n[c];r+="Q"+(u[0]+o[0]*2/3)+","+(u[1]+o[1]*2/3)+","+f[0]+","+f[1]}return r}function Ve(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],a=n[1],o=1,c=n.length;++o<c;)e=u,u=a,a=n[o],r.push([i*(a[0]-e[0]),i*(a[1]-e[1])]);return r}function Xe(n){if(n.length<3)return Fe(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],a=[i,i,i,(r=n[1])[0]],o=[u,u,u,r[1]],c=[i,",",u];for(Ge(c,a,o);++t<e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Ge(c,a,o);for(t=-1;++t<2;)a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Ge(c,a,o);return c.join("")}function Ze(n){if(n.length<4)return Fe(n);for(var t,e=[],r=-1,i=n.length,u=[0],a=[0];++r<3;)t=n[r],u.push(t[0]),a.push(t[1]);for(e.push(Je(Ho,u)+","+Je(Ho,a)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),a.shift(),a.push(t[1]),Ge(e,u,a);return e.join("")}function Be(n){for(var t,e,r=-1,i=n.length,u=i+4,a=[],o=[];++r<4;)e=n[r%i],a.push(e[0]),o.push(e[1]);for(t=[Je(Ho,a),",",Je(Ho,o)],--r;++r<u;)e=n[r%i],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),Ge(t,a,o);return t.join("")}function $e(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],a=n[0][1],o=n[e][0]-u,c=n[e][1]-a,l=-1;++l<=e;)r=n[l],i=l/e,r[0]=t*r[0]+(1-t)*(u+i*o),r[1]=t*r[1]+(1-t)*(a+i*c);return Xe(n)}function Je(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Ge(n,t,e){n.push("C",Je(Lo,t),",",Je(Lo,e),",",Je(Fo,t),",",Je(Fo,e),",",Je(Ho,t),",",Je(Ho,e))}function Ke(n,t){return(t[1]-n[1])/(t[0]-n[0])
}function We(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],a=r[0]=Ke(i,u);++t<e;)r[t]=(a+(a=Ke(i=u,u=n[t+1])))/2;return r[t]=a,r}function Qe(n){for(var t,e,r,i,u=[],a=We(n),o=-1,c=n.length-1;++o<c;)t=Ke(n[o],n[o+1]),Math.abs(t)<1e-6?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),a[o]=i*e,a[o+1]=i*r));for(o=-1;++o<=c;)i=(n[Math.min(c,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),u.push([i||0,a[o]*i||0]);return u}function nr(n){return n.length<3?Fe(n):n[0]+Ie(n,Qe(n))}function tr(n,t,e,r){var i,u,a,o,c,l,f;return i=r[n],u=i[0],a=i[1],i=r[t],o=i[0],c=i[1],i=r[e],l=i[0],f=i[1],(f-a)*(o-u)-(c-a)*(l-u)>0}function er(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function rr(n,t,e,r){var i=n[0],u=e[0],a=t[0]-i,o=r[0]-u,c=n[1],l=e[1],f=t[1]-c,s=r[1]-l,h=(o*(c-l)-s*(i-u))/(s*a-o*f);return[i+h*a,c+h*f]}function ir(n,t){var e={list:n.map(function(n,t){return{index:t,x:n[0],y:n[1]}}).sort(function(n,t){return n.y<t.y?-1:n.y>t.y?1:n.x<t.x?-1:n.x>t.x?1:0}),bottomSite:null},r={list:[],leftEnd:null,rightEnd:null,init:function(){r.leftEnd=r.createHalfEdge(null,"l"),r.rightEnd=r.createHalfEdge(null,"l"),r.leftEnd.r=r.rightEnd,r.rightEnd.l=r.leftEnd,r.list.unshift(r.leftEnd,r.rightEnd)},createHalfEdge:function(n,t){return{edge:n,side:t,vertex:null,l:null,r:null}},insert:function(n,t){t.l=n,t.r=n.r,n.r.l=t,n.r=t},leftBound:function(n){var t=r.leftEnd;do t=t.r;while(t!=r.rightEnd&&i.rightOf(t,n));return t=t.l},del:function(n){n.l.r=n.r,n.r.l=n.l,n.edge=null},right:function(n){return n.r},left:function(n){return n.l},leftRegion:function(n){return n.edge==null?e.bottomSite:n.edge.region[n.side]},rightRegion:function(n){return n.edge==null?e.bottomSite:n.edge.region[Po[n.side]]}},i={bisect:function(n,t){var e={region:{l:n,r:t},ep:{l:null,r:null}},r=t.x-n.x,i=t.y-n.y,u=r>0?r:-r,a=i>0?i:-i;return e.c=n.x*r+n.y*i+.5*(r*r+i*i),u>a?(e.a=1,e.b=i/r,e.c/=r):(e.b=1,e.a=r/i,e.c/=i),e},intersect:function(n,t){var e=n.edge,r=t.edge;if(!e||!r||e.region.r==r.region.r)return null;var i=e.a*r.b-e.b*r.a;if(Math.abs(i)<1e-10)return null;var u,a,o=(e.c*r.b-r.c*e.b)/i,c=(r.c*e.a-e.c*r.a)/i,l=e.region.r,f=r.region.r;l.y<f.y||l.y==f.y&&l.x<f.x?(u=n,a=e):(u=t,a=r);var s=o>=a.region.r.x;return s&&u.side==="l"||!s&&u.side==="r"?null:{x:o,y:c}},rightOf:function(n,t){var e=n.edge,r=e.region.r,i=t.x>r.x;if(i&&n.side==="l")return 1;if(!i&&n.side==="r")return 0;if(e.a===1){var u=t.y-r.y,a=t.x-r.x,o=0,c=0;if(!i&&e.b<0||i&&e.b>=0?c=o=u>=e.b*a:(c=t.x+t.y*e.b>e.c,e.b<0&&(c=!c),c||(o=1)),!o){var l=r.x-e.region.l.x;c=e.b*(a*a-u*u)<l*u*(1+2*a/l+e.b*e.b),e.b<0&&(c=!c)}}else{var f=e.c-e.a*t.x,s=t.y-f,h=t.x-r.x,g=f-r.y;c=s*s>h*h+g*g}return n.side==="l"?c:!c},endPoint:function(n,e,r){n.ep[e]=r,n.ep[Po[e]]&&t(n)},distance:function(n,t){var e=n.x-t.x,r=n.y-t.y;return Math.sqrt(e*e+r*r)}},u={list:[],insert:function(n,t,e){n.vertex=t,n.ystar=t.y+e;for(var r=0,i=u.list,a=i.length;a>r;r++){var o=i[r];if(!(n.ystar>o.ystar||n.ystar==o.ystar&&t.x>o.vertex.x))break}i.splice(r,0,n)},del:function(n){for(var t=0,e=u.list,r=e.length;r>t&&e[t]!=n;++t);e.splice(t,1)},empty:function(){return u.list.length===0},nextEvent:function(n){for(var t=0,e=u.list,r=e.length;r>t;++t)if(e[t]==n)return e[t+1];return null},min:function(){var n=u.list[0];return{x:n.vertex.x,y:n.ystar}},extractMin:function(){return u.list.shift()}};r.init(),e.bottomSite=e.list.shift();for(var a,o,c,l,f,s,h,g,p,d,m,v,y,M=e.list.shift();;)if(u.empty()||(a=u.min()),M&&(u.empty()||M.y<a.y||M.y==a.y&&M.x<a.x))o=r.leftBound(M),c=r.right(o),h=r.rightRegion(o),v=i.bisect(h,M),s=r.createHalfEdge(v,"l"),r.insert(o,s),d=i.intersect(o,s),d&&(u.del(o),u.insert(o,d,i.distance(d,M))),o=s,s=r.createHalfEdge(v,"r"),r.insert(o,s),d=i.intersect(s,c),d&&u.insert(s,d,i.distance(d,M)),M=e.list.shift();else{if(u.empty())break;o=u.extractMin(),l=r.left(o),c=r.right(o),f=r.right(c),h=r.leftRegion(o),g=r.rightRegion(c),m=o.vertex,i.endPoint(o.edge,o.side,m),i.endPoint(c.edge,c.side,m),r.del(o),u.del(c),r.del(c),y="l",h.y>g.y&&(p=h,h=g,g=p,y="r"),v=i.bisect(h,g),s=r.createHalfEdge(v,y),r.insert(l,s),i.endPoint(v,Po[y],m),d=i.intersect(l,s),d&&(u.del(l),u.insert(l,d,i.distance(d,h))),d=i.intersect(s,f),d&&u.insert(s,d,i.distance(d,h))}for(o=r.right(r.leftEnd);o!=r.rightEnd;o=r.right(o))t(o.edge)}function ur(n){return n.x}function ar(n){return n.y}function or(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function cr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var a=.5*(e+i),o=.5*(r+u),c=t.nodes;c[0]&&cr(n,c[0],e,r,a,o),c[1]&&cr(n,c[1],a,r,i,o),c[2]&&cr(n,c[2],e,o,a,u),c[3]&&cr(n,c[3],a,o,i,u)}}function lr(n,t){n=ua.rgb(n),t=ua.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,a=t.g-r,o=t.b-i;return function(n){return"#"+rt(Math.round(e+u*n))+rt(Math.round(r+a*n))+rt(Math.round(i+o*n))}}function fr(n){var t=[n.a,n.b],e=[n.c,n.d],r=hr(t),i=sr(t,e),u=hr(gr(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Fa,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Fa:0}function sr(n,t){return n[0]*t[0]+n[1]*t[1]}function hr(n){var t=Math.sqrt(sr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function gr(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function pr(n,t){return t-=n=+n,function(e){return n+t*e}}function dr(n,t){var e,r=[],i=[],u=ua.transform(n),a=ua.transform(t),o=u.translate,c=a.translate,l=u.rotate,f=a.rotate,s=u.skew,h=a.skew,g=u.scale,p=a.scale;return o[0]!=c[0]||o[1]!=c[1]?(r.push("translate(",null,",",null,")"),i.push({i:1,x:pr(o[0],c[0])},{i:3,x:pr(o[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=f?(l-f>180?f+=360:f-l>180&&(l+=360),i.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:pr(l,f)})):f&&r.push(r.pop()+"rotate("+f+")"),s!=h?i.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:pr(s,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),i.push({i:e-4,x:pr(g[0],p[0])},{i:e-2,x:pr(g[1],p[1])})):(p[0]!=1||p[1]!=1)&&r.push(r.pop()+"scale("+p+")"),e=i.length,function(n){for(var t,u=-1;++u<e;)r[(t=i[u]).i]=t.x(n);return r.join("")}}function mr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Mr(e)(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function vr(n,t){var e,r,i,u,a,o=0,c=0,l=[],f=[];for(n+="",t+="",Oo.lastIndex=0,r=0;e=Oo.exec(t);++r)e.index&&l.push(t.substring(o,c=e.index)),f.push({i:l.length,x:e[0]}),l.push(null),o=Oo.lastIndex;for(o<t.length&&l.push(t.substring(o)),r=0,u=f.length;(e=Oo.exec(n))&&u>r;++r)if(a=f[r],a.x==e[0]){if(a.i)if(l[a.i+1]==null)for(l[a.i-1]+=a.x,l.splice(a.i,1),i=r+1;u>i;++i)f[i].i--;else for(l[a.i-1]+=a.x+l[a.i+1],l.splice(a.i,2),i=r+1;u>i;++i)f[i].i-=2;else if(l[a.i+1]==null)l[a.i]=a.x;else for(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1),i=r+1;u>i;++i)f[i].i--;f.splice(r,1),u--,r--}else a.x=pr(parseFloat(e[0]),parseFloat(a.x));for(;u>r;)a=f.pop(),l[a.i+1]==null?l[a.i]=a.x:(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1)),u--;return l.length===1?l[0]==null?(a=f[0].x,function(n){return a(n)+""}):function(){return t}:function(n){for(r=0;u>r;++r)l[(a=f[r]).i]=a.x(n);return l.join("")}}function yr(n,t){for(var e,r=ua.interpolators.length;--r>=0&&!(e=ua.interpolators[r](n,t)););return e}function Mr(n){return"transform"==n?dr:yr}function xr(n,t){var e,r=[],i=[],u=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(yr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;a>e;++e)i[e]=t[e];return function(n){for(e=0;o>e;++e)i[e]=r[e](n);return i}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function Er(n){return n*n*n}function kr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Ar(n){return function(t){return Math.pow(t,n)}}function Nr(n){return 1-Math.cos(n*Da/2)}function qr(n){return Math.pow(2,10*(n-1))}function Tr(n){return 1-Math.sqrt(1-n*n)}function Cr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/(2*Da)*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,10*-r)*Math.sin(2*(r-e)*Da/t)}}function zr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Dr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function jr(n,t){n=ua.hcl(n),t=ua.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,a=t.c-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return B(e+u*n,r+a*n,i+o*n)+""}}function Lr(n,t){n=ua.hsl(n),t=ua.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,a=t.s-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return P(e+u*n,r+a*n,i+o*n)+""}}function Fr(n,t){n=ua.lab(n),t=ua.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,a=t.a-r,o=t.b-i;return function(n){return G(e+u*n,r+a*n,i+o*n)+""}}function Hr(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Pr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Rr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Or(n){for(var t=n.source,e=n.target,r=Ur(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Yr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Ur(n,t){if(n===t)return n;for(var e=Yr(n),r=Yr(t),i=e.pop(),u=r.pop(),a=null;i===u;)a=i,i=e.pop(),u=r.pop();return a}function Ir(n){n.fixed|=2}function Vr(n){n.fixed&=-7}function Xr(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Zr(n){n.fixed&=-5}function Br(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,a=n.nodes,o=a.length,c=-1;++c<o;)u=a[c],null!=u&&(Br(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,i+=l*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function $r(n,t){return ua.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=Wr,n}function Jr(n){return n.children}function Gr(n){return n.value}function Kr(n,t){return t.value-n.value}function Wr(n){return ua.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function Qr(n){return n.x}function ni(n){return n.y}function ti(n,t,e){n.y0=t,n.y=e}function ei(n){return ua.range(n.length)}function ri(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ii(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function ui(n){return n.reduce(ai,0)}function ai(n,t){return n+t[1]}function oi(n,t){return ci(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function ci(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function li(n){return[ua.min(n),ua.max(n)]}function fi(n,t){return n.parent==t.parent?1:2}function si(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function hi(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function gi(n,t){var e=n.children;if(e&&(i=e.length))for(var r,i,u=-1;++u<i;)t(r=gi(e[u],t),n)>0&&(n=r);return n}function pi(n,t){return n.x-t.x}function di(n,t){return t.x-n.x}function mi(n,t){return n.depth-t.depth}function vi(n,t){function e(n,r){var i=n.children;if(i&&(a=i.length))for(var u,a,o=null,c=-1;++c<a;)u=i[c],e(u,o),o=u;t(n,r)}e(n,null)}function yi(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function Mi(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function xi(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function bi(n,t){return n.value-t.value}function _i(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function wi(n,t){n._pack_next=t,t._pack_prev=n}function Si(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return i*i-e*e-r*r>.001}function Ei(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,i,u,a,o,c,l,f=1/0,s=-1/0,h=1/0,g=-1/0;if(e.forEach(ki),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(i=e[1],i.x=i.r,i.y=0,t(i),l>2))for(u=e[2],qi(r,i,u),t(u),_i(r,u),r._pack_prev=u,_i(u,i),i=r._pack_next,a=3;l>a;a++){qi(r,i,u=e[a]);var p=0,d=1,m=1;for(o=i._pack_next;o!==i;o=o._pack_next,d++)if(Si(o,u)){p=1;break}if(1==p)for(c=r._pack_prev;c!==o._pack_prev&&!Si(c,u);c=c._pack_prev,m++);p?(m>d||d==m&&i.r<r.r?wi(r,i=o):wi(r=c,i),a--):(_i(r,u),i=u,t(u))}var v=(f+s)/2,y=(h+g)/2,M=0;for(a=0;l>a;a++)u=e[a],u.x-=v,u.y-=y,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Ai)}}function ki(n){n._pack_next=n._pack_prev=n}function Ai(n){delete n._pack_next,delete n._pack_prev}function Ni(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,a=i.length;++u<a;)Ni(i[u],t,e,r)}function qi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var a=t.r+e.r,o=i*i+u*u;a*=a,r*=r;var c=.5+(r-a)/(2*o),l=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+c*i+l*u,e.y=n.y+c*u-l*i}else e.x=n.x+r,e.y=n.y}function Ti(n){return 1+ua.max(n,function(n){return n.y})}function Ci(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function zi(n){var t=n.children;return t&&t.length?zi(t[0]):n}function Di(n){var t,e=n.children;return e&&(t=e.length)?Di(e[t-1]):n}function ji(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Li(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Fi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Hi(n){return n.rangeExtent?n.rangeExtent():Fi(n.range())}function Pi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Ri(n,t){var e,r=0,i=n.length-1,u=n[r],a=n[i];return u>a&&(e=r,r=i,i=e,e=u,u=a,a=e),(t=t(a-u))&&(n[r]=t.floor(u),n[i]=t.ceil(a)),n}function Oi(n,t,e,r){var i=[],u=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)i.push(e(n[a-1],n[a])),u.push(r(t[a-1],t[a]));return function(t){var e=ua.bisect(n,t,1,o)-1;return u[e](i[e](t))}}function Yi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Oi:Pi,c=r?Rr:Pr;return a=i(n,t,c,e),o=i(t,n,c,yr),u}function u(n){return a(n)}var a,o;return u.invert=function(n){return o(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Hr)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return Xi(n,t)},u.tickFormat=function(t,e){return Zi(n,t,e)},u.nice=function(){return Ri(n,Ii),i()},u.copy=function(){return Yi(n,t,e,r)},i()}function Ui(n,t){return ua.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Ii(n){return n=Math.pow(10,Math.round(Math.log(n)/Math.LN10)-1),n&&{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}}function Vi(n,t){var e=Fi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Xi(n,t){return ua.range.apply(ua,Vi(n,t))}function Zi(n,t,e){var r=-Math.floor(Math.log(Vi(n,t)[2])/Math.LN10+.01);return ua.format(e?e.replace(no,function(n,t,e,i,u,a,o,c,l,f){return[t,e,i,u,a,o,c,l||"."+(r-2*("%"===f)),f].join("")}):",."+r+"f")}function Bi(n,t,e,r,i){function u(t){return n(e(t))}function a(){return e===$i?{floor:o,ceil:c}:{floor:function(n){return-c(-n)},ceil:function(n){return-o(-n)}}}function o(n){return Math.pow(t,Math.floor(Math.log(n)/Math.log(t)))}function c(n){return Math.pow(t,Math.ceil(Math.log(n)/Math.log(t)))}return u.invert=function(t){return r(n.invert(t))},u.domain=function(t){return arguments.length?(t[0]<0?(e=Gi,r=Ki):(e=$i,r=Ji),n.domain((i=t.map(Number)).map(e)),u):i},u.base=function(n){return arguments.length?(t=+n,u):t},u.nice=function(){return n.domain(Ri(i,a).map(e)),u},u.ticks=function(){var i=Fi(n.domain()),u=[];if(i.every(isFinite)){var a=Math.log(t),o=Math.floor(i[0]/a),c=Math.ceil(i[1]/a),l=r(i[0]),f=r(i[1]),s=t%1?2:t;if(e===Gi)for(u.push(-Math.pow(t,-o));o++<c;)for(var h=s-1;h>0;h--)u.push(-Math.pow(t,-o)*h);else{for(;c>o;o++)for(var h=1;s>h;h++)u.push(Math.pow(t,o)*h);u.push(Math.pow(t,o))}for(o=0;u[o]<l;o++);for(c=u.length;u[c-1]>f;c--);u=u.slice(o,c)}return u},u.tickFormat=function(n,i){if(arguments.length<2&&(i=Jo),!arguments.length)return i;var a,o=Math.log(t),c=Math.max(.1,n/u.ticks().length),l=e===Gi?(a=-1e-12,Math.floor):(a=1e-12,Math.ceil);return function(n){return n/r(o*l(e(n)/o+a))<=c?i(n):""}},u.copy=function(){return Bi(n.copy(),t,e,r,i)},Ui(u,n)}function $i(n){return Math.log(0>n?0:n)}function Ji(n){return Math.exp(n)}function Gi(n){return-Math.log(n>0?0:-n)}function Ki(n){return-Math.exp(-n)}function Wi(n,t,e){function r(t){return n(i(t))}var i=Qi(t),u=Qi(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return Xi(e,n)},r.tickFormat=function(n,t){return Zi(e,n,t)},r.nice=function(){return r.domain(Ri(e,Ii))},r.exponent=function(a){return arguments.length?(i=Qi(t=a),u=Qi(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return Wi(n.copy(),t,e)},Ui(r,n)}function Qi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function nu(n,t){function e(t){return a[((u.get(t)||u.set(t,n.push(t)))-1)%a.length]}function r(t,e){return ua.range(n.length).map(function(n){return t+e*n})}var u,a,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new i;for(var a,o=-1,c=r.length;++o<c;)u.has(a=r[o])||u.set(a,n.push(a));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(a=n,o=0,t={t:"range",a:arguments},e):a},e.rangePoints=function(i,u){arguments.length<2&&(u=0);var c=i[0],l=i[1],f=(l-c)/(Math.max(1,n.length-1)+u);return a=r(n.length<2?(c+l)/2:c+f*u/2,f),o=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],f=i[l-0],s=i[1-l],h=(s-f)/(n.length-u+2*c);return a=r(f+h*c,h),l&&a.reverse(),o=h*(1-u),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],f=i[l-0],s=i[1-l],h=Math.floor((s-f)/(n.length-u+2*c)),g=s-f-(n.length-u)*h;return a=r(f+Math.round(g/2),h),l&&a.reverse(),o=Math.round(h*(1-u)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Fi(t.a[0])},e.copy=function(){return nu(n,t)},e.domain(n)}function tu(n,t){function e(){var e=0,u=t.length;for(i=[];++e<u;)i[e-1]=ua.quantile(n,e/u);return r}function r(n){return isNaN(n=+n)?0/0:t[ua.bisect(i,n)]}var i;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(ua.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return i},r.copy=function(){return tu(n,t)},e()}function eu(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),a=e.length-1,r}var u,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.copy=function(){return eu(n,t,e)},i()}function ru(n,t){function e(e){return t[ua.bisect(n,e)]}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.copy=function(){return ru(n,t)},e}function iu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Xi(n,t)},t.tickFormat=function(t,e){return Zi(n,t,e)},t.copy=function(){return iu(n)},t}function uu(n){return n.innerRadius}function au(n){return n.outerRadius}function ou(n){return n.startAngle}function cu(n){return n.endAngle}function lu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]+nc,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function fu(n){function t(t){function c(){d.push("M",o(n(v),s),f,l(n(m.reverse()),s),"Z")}for(var h,g,p,d=[],m=[],v=[],y=-1,M=t.length,x=lt(e),b=lt(i),_=e===r?function(){return g}:lt(r),w=i===u?function(){return p}:lt(u);++y<M;)a.call(this,h=t[y],y)?(m.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),v.push([+_.call(this,h,y),+w.call(this,h,y)])):m.length&&(c(),m=[],v=[]);return m.length&&c(),d.length?d.join(""):null}var e=je,r=je,i=0,u=Le,a=Ht,o=Fe,c=o.key,l=o,f="L",s=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?o=n:(o=jo.get(n)||Fe).key,l=o.reverse||o,f=o.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(s=n,t):s},t}function su(n){return n.radius}function hu(n){return[n.x,n.y]}function gu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+nc;return[e*Math.cos(r),e*Math.sin(r)]}}function pu(){return 64}function du(){return"circle"}function mu(n){var t=Math.sqrt(n/Da);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function vu(n,t){return va(n,ac),n.id=t,n}function yu(n,t,e,r){var i=n.id;return D(n,"function"==typeof e?function(n,u,a){n.__transition__[i].tween.set(t,r(e.call(n,n.__data__,u,a)))}:(e=r(e),function(n){n.__transition__[i].tween.set(t,e)}))}function Mu(n){return null==n&&(n=""),function(){this.textContent=n}}function xu(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),a=u[e];if(!a){var o=r.time;return a=u[e]={tween:new i,event:ua.dispatch("start","end"),time:o,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,ua.timer(function(r){function i(r){return u.active>e?l():(u.active=e,h.start.call(n,f,t),a.tween.forEach(function(e,r){(r=r.call(n,f,t))&&d.push(r)}),c(r)||ua.timer(c,0,o),1)}function c(r){if(u.active!==e)return l();for(var i=(r-g)/p,a=s(i),o=d.length;o>0;)d[--o].call(n,a);return i>=1?(l(),h.end.call(n,f,t),1):void 0}function l(){return--u.count?delete u[e]:delete n.__transition__,1}var f=n.__data__,s=a.ease,h=a.event,g=a.delay,p=a.duration,d=[];return r>=g?i(r):ua.timer(i,g,o),1},0,o),a}}function bu(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function _u(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function wu(n,t,e){if(r=[],e&&t.length>1){for(var r,i,u,a=Fi(n.domain()),o=-1,c=t.length,l=(t[1]-t[0])/++e;++o<c;)for(i=e;--i>0;)(u=+t[o]-i*l)>=a[0]&&r.push(u);for(--o,i=0;++i<e&&(u=+t[o]+i*l)<a[1];)r.push(u)}return r}function Su(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Eu(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new gc(e-1)),1),e}function u(n,e){return t(n=new gc(+n),e),n}function a(n,r,u){var a=i(n),o=[];if(u>1)for(;r>a;)e(a)%u||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{gc=Su;var r=new Su;return r._=n,a(r,t,e)}finally{gc=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=a;var c=n.utc=ku(n);return c.floor=c,c.round=ku(r),c.ceil=ku(i),c.offset=ku(u),c.range=o,n}function ku(n){return function(t,e){try{gc=Su;var r=new Su;return r._=t,n(r,e)._}finally{gc=Date}}}function Au(n,t,e,r){for(var i,u,a=0,o=t.length,c=e.length;o>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(u=Cc[t.charAt(a++)],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function Nu(n){return RegExp("^(?:"+n.map(ua.requote).join("|")+")","i")}function qu(n){for(var t=new i,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Tu(n,t,e){n+="";var r=n.length;return e>r?Array(e-r+1).join(t)+n:n}function Cu(n,t,e){Sc.lastIndex=0;var r=Sc.exec(t.substring(e));return r?e+=r[0].length:-1}function zu(n,t,e){wc.lastIndex=0;var r=wc.exec(t.substring(e));return r?e+=r[0].length:-1}function Du(n,t,e){Ac.lastIndex=0;var r=Ac.exec(t.substring(e));return r?(n.m=Nc.get(r[0].toLowerCase()),e+=r[0].length):-1}function ju(n,t,e){Ec.lastIndex=0;var r=Ec.exec(t.substring(e));return r?(n.m=kc.get(r[0].toLowerCase()),e+=r[0].length):-1}function Lu(n,t,e){return Au(n,""+Tc.c,t,e)}function Fu(n,t,e){return Au(n,""+Tc.x,t,e)}function Hu(n,t,e){return Au(n,""+Tc.X,t,e)}function Pu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+=r[0].length):-1}function Ru(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.y=Ou(+r[0]),e+=r[0].length):-1}function Ou(n){return n+(n>68?1900:2e3)}function Yu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+=r[0].length):-1}function Uu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+=r[0].length):-1}function Iu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+=r[0].length):-1}function Vu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+=r[0].length):-1}function Xu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+=r[0].length):-1}function Zu(n,t,e){zc.lastIndex=0;var r=zc.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+=r[0].length):-1}function Bu(n,t,e){var r=Dc.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}function $u(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(Math.abs(t)/60),i=Math.abs(t)%60;return e+Tu(r,"0",2)+Tu(i,"0",2)}function Ju(n){return n.toISOString()}function Gu(n,t,e){function r(t){return n(t)}return r.invert=function(t){return Ku(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ku)},r.nice=function(n){return r.domain(Ri(r.domain(),function(){return n}))},r.ticks=function(e,i){var u=Fi(r.domain());if("function"!=typeof e){var a=u[1]-u[0],o=a/e,c=ua.bisect(Lc,o);if(c==Lc.length)return t.year(u,e);if(!c)return n.ticks(e).map(Ku);Math.log(o/Lc[c-1])<Math.log(Lc[c]/o)&&--c,e=t[c],i=e[1],e=e[0].range}return e(u[0],new Date(+u[1]+1),i)},r.tickFormat=function(){return e},r.copy=function(){return Gu(n.copy(),t,e)},Ui(r,n)}function Ku(n){return new Date(n)}function Wu(n){return function(t){for(var e=n.length-1,r=n[e];!r[1](t);)r=n[--e];return r[0](t)}}function Qu(n){var t=new Date(n,0,1);return t.setFullYear(n),t}function na(n){var t=n.getFullYear(),e=Qu(t),r=Qu(t+1);return t+(n-e)/(r-e)}function ta(n){var t=new Date(Date.UTC(n,0,1));return t.setUTCFullYear(n),t}function ea(n){var t=n.getUTCFullYear(),e=ta(t),r=ta(t+1);return t+(n-e)/(r-e)}function ra(n){return JSON.parse(n.responseText)}function ia(n){var t=aa.createRange();return t.selectNode(aa.body),t.createContextualFragment(n.responseText)}var ua={version:"3.1.10"};Date.now||(Date.now=function(){return+new Date});var aa=document,oa=window;try{aa.createElement("div").style.setProperty("opacity",0,"")}catch(ca){var la=oa.CSSStyleDeclaration.prototype,fa=la.setProperty;la.setProperty=function(n,t,e){fa.call(this,n,t+"",e)}}ua.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},ua.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ua.min=function(n,t){var e,r,i=-1,u=n.length;if(arguments.length===1){for(;++i<u&&((e=n[i])==null||e!=e);)e=void 0;for(;++i<u;)(r=n[i])!=null&&e>r&&(e=r)}else{for(;++i<u&&((e=t.call(n,n[i],i))==null||e!=e);)e=void 0;for(;++i<u;)(r=t.call(n,n[i],i))!=null&&e>r&&(e=r)}return e},ua.max=function(n,t){var e,r,i=-1,u=n.length;if(arguments.length===1){for(;++i<u&&((e=n[i])==null||e!=e);)e=void 0;for(;++i<u;)(r=n[i])!=null&&r>e&&(e=r)}else{for(;++i<u&&((e=t.call(n,n[i],i))==null||e!=e);)e=void 0;for(;++i<u;)(r=t.call(n,n[i],i))!=null&&r>e&&(e=r)}return e},ua.extent=function(n,t){var e,r,i,u=-1,a=n.length;if(arguments.length===1){for(;++u<a&&((e=i=n[u])==null||e!=e);)e=i=void 0;for(;++u<a;)(r=n[u])!=null&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<a&&((e=i=t.call(n,n[u],u))==null||e!=e);)e=void 0;for(;++u<a;)(r=t.call(n,n[u],u))!=null&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ua.sum=function(n,t){var e,r=0,i=n.length,u=-1;if(arguments.length===1)for(;++u<i;)isNaN(e=+n[u])||(r+=e);else for(;++u<i;)isNaN(e=+t.call(n,n[u],u))||(r+=e);return r},ua.mean=function(t,e){var r,i=t.length,u=0,a=-1,o=0;if(arguments.length===1)for(;++a<i;)n(r=t[a])&&(u+=(r-u)/++o);else for(;++a<i;)n(r=e.call(t,t[a],a))&&(u+=(r-u)/++o);return o?u:void 0},ua.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ua.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?ua.quantile(t.sort(ua.ascending),.5):void 0},ua.bisector=function(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n.call(t,t[u],u)<e?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;e<n.call(t,t[u],u)?i=u:r=u+1}return r}}};var sa=ua.bisector(function(n){return n});ua.bisectLeft=sa.left,ua.bisect=ua.bisectRight=sa.right,ua.shuffle=function(n){for(var t,e,r=n.length;r;)e=Math.random()*r--|0,t=n[r],n[r]=n[e],n[e]=t;return n},ua.permute=function(n,t){for(var e=[],r=-1,i=t.length;++r<i;)e[r]=n[t[r]];return e},ua.zip=function(){if(!(i=arguments.length))return[];for(var n=-1,e=ua.min(arguments,t),r=Array(e);++n<e;)for(var i,u=-1,a=r[n]=Array(i);++u<i;)a[u]=arguments[u][n];return r},ua.transpose=function(n){return ua.zip.apply(ua,n)},ua.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ua.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ua.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ua.merge=function(n){return Array.prototype.concat.apply([],n)},ua.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw Error("infinite range");var i,u=[],a=e(Math.abs(r)),o=-1;if(n*=a,t*=a,r*=a,0>r)for(;(i=n+r*++o)>t;)u.push(i/a);else for(;(i=n+r*++o)<t;)u.push(i/a);return u},ua.map=function(n){var t=new i;for(var e in n)t.set(e,n[e]);return t},r(i,{has:function(n){return ha+n in this},get:function(n){return this[ha+n]},set:function(n,t){return this[ha+n]=t},remove:function(n){return n=ha+n,n in this&&delete this[n]},keys:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1),this[t])}});var ha="\0",ga=ha.charCodeAt(0);ua.nest=function(){function n(t,o,c){if(c>=a.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,f,s,h,g=-1,p=o.length,d=a[c++],m=new i;++g<p;)(h=m.get(l=d(f=o[g])))?h.push(f):m.set(l,[f]);return t?(f=t(),s=function(e,r){f.set(e,n(t,r,c))}):(f={},s=function(e,r){f[e]=n(t,r,c)}),m.forEach(s),f}function t(n,e){if(e>=a.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,u={},a=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ua.map,e,0),0)},u.key=function(n){return a.push(n),u},u.sortKeys=function(n){return o[a.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ua.set=function(n){var t=new u;if(n)for(var e=0;e<n.length;e++)t.add(n[e]);return t},r(u,{has:function(n){return ha+n in this
},add:function(n){return this[ha+n]=!0,n},remove:function(n){return n=ha+n,n in this&&delete this[n]},values:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===ga&&n.call(this,t.substring(1))}}),ua.behavior={},ua.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=a(n,t,t[e]);return n},ua.dispatch=function(){for(var n=new o,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=c(n);return n},o.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(arguments.length===2){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ua.event=null,ua.mouse=function(n){return g(n,f())};var pa=/WebKit/.test(oa.navigator.userAgent)?-1:0,da=d;try{da(aa.documentElement.childNodes)[0].nodeType}catch(ma){da=p}var va=[].__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]};ua.touches=function(n,t){return arguments.length<2&&(t=f().touches),t?da(t).map(function(t){var e=g(n,t);return e.identifier=t.identifier,e}):[]},ua.behavior.drag=function(){function n(){this.on("mousedown.drag",t).on("touchstart.drag",t)}function t(){function n(){var n=a.parentNode;return null!=f?ua.touches(n).filter(function(n){return n.identifier===f})[0]:ua.mouse(n)}function t(){if(!a.parentNode)return i();var t=n(),e=t[0]-h[0],r=t[1]-h[1];g|=e|r,h=t,l(),o({type:"drag",x:t[0]+u[0],y:t[1]+u[1],dx:e,dy:r})}function i(){o({type:"dragend"}),g&&(l(),ua.event.target===c&&s(p,"click")),p.on(null!=f?"touchmove.drag-"+f:"mousemove.drag",null).on(null!=f?"touchend.drag-"+f:"mouseup.drag",null)}var u,a=this,o=e.of(a,arguments),c=ua.event.target,f=ua.event.touches?ua.event.changedTouches[0].identifier:null,h=n(),g=0,p=ua.select(oa).on(null!=f?"touchmove.drag-"+f:"mousemove.drag",t).on(null!=f?"touchend.drag-"+f:"mouseup.drag",i,!0);r?(u=r.apply(a,arguments),u=[u.x-h[0],u.y-h[1]]):u=[0,0],null==f&&l(),o({type:"dragstart"})}var e=h(n,"drag","dragstart","dragend"),r=null;return n.origin=function(t){return arguments.length?(r=t,n):r},ua.rebind(n,e,"on")};var ya=function(n,t){return t.querySelector(n)},Ma=function(n,t){return t.querySelectorAll(n)},xa=aa.documentElement,ba=xa.matchesSelector||xa.webkitMatchesSelector||xa.mozMatchesSelector||xa.msMatchesSelector||xa.oMatchesSelector,_a=function(n,t){return ba.call(n,t)};"function"==typeof Sizzle&&(ya=function(n,t){return Sizzle(n,t)[0]||null},Ma=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},_a=Sizzle.matchesSelector),ua.selection=function(){return Na};var wa=ua.selection.prototype=[];wa.select=function(n){var t,e,r,i,u=[];"function"!=typeof n&&(n=v(n));for(var a=-1,o=this.length;++a<o;){u.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var c=-1,l=r.length;++c<l;)(i=r[c])?(t.push(e=n.call(i,i.__data__,c)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return m(u)},wa.selectAll=function(n){var t,e,r=[];"function"!=typeof n&&(n=y(n));for(var i=-1,u=this.length;++i<u;)for(var a=this[i],o=-1,c=a.length;++o<c;)(e=a[o])&&(r.push(t=da(n.call(e,e.__data__,o))),t.parentNode=e);return m(r)};var Sa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ua.ns={prefix:Sa,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),Sa.hasOwnProperty(e)?{space:Sa[e],local:n}:n}},wa.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ua.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(M(t,n[t]));return this}return this.each(M(n,t))},ua.requote=function(n){return n.replace(Ea,"\\$&")};var Ea=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;wa.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=n.trim().split(/^|\s+/g)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!b(n[i]).test(t))return!1;return!0}for(t in n)this.each(_(t,n[t]));return this}return this.each(_(n,t))},wa.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(S(e,n[e],t));return this}if(2>r)return oa.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(S(n,t,e))},wa.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(E(t,n[t]));return this}return this.each(E(n,t))},wa.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},wa.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},wa.append=function(n){function t(){return this.appendChild(aa.createElementNS(this.namespaceURI,n))}function e(){return this.appendChild(aa.createElementNS(n.space,n.local))}return n=ua.ns.qualify(n),this.select(n.local?e:t)},wa.insert=function(n,t){function e(e,r){return this.insertBefore(aa.createElementNS(this.namespaceURI,n),t.call(this,e,r))}function r(e,r){return this.insertBefore(aa.createElementNS(n.space,n.local),t.call(this,e,r))}return n=ua.ns.qualify(n),"function"!=typeof t&&(t=v(t)),this.select(n.local?r:e)},wa.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},wa.data=function(n,t){function e(n,e){var r,u,a,o=n.length,s=e.length,h=Math.min(o,s),g=Array(s),p=Array(s),d=Array(o);if(t){var m,v=new i,y=new i,M=[];for(r=-1;++r<o;)m=t.call(u=n[r],u.__data__,r),v.has(m)?d[r]=u:v.set(m,u),M.push(m);for(r=-1;++r<s;)m=t.call(e,a=e[r],r),(u=v.get(m))?(g[r]=u,u.__data__=a):y.has(m)||(p[r]=k(a)),y.set(m,a),v.remove(m);for(r=-1;++r<o;)v.has(M[r])&&(d[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],a=e[r],u?(u.__data__=a,g[r]=u):p[r]=k(a);for(;s>r;++r)p[r]=k(e[r]);for(;o>r;++r)d[r]=n[r]}p.update=g,p.parentNode=g.parentNode=d.parentNode=n.parentNode,c.push(p),l.push(g),f.push(d)}var r,u,a=-1,o=this.length;if(!arguments.length){for(n=Array(o=(r=this[0]).length);++a<o;)(u=r[a])&&(n[a]=u.__data__);return n}var c=j([]),l=m([]),f=m([]);if("function"==typeof n)for(;++a<o;)e(r=this[a],n.call(r,r.parentNode.__data__,a));else for(;++a<o;)e(r=this[a],n);return l.enter=function(){return c},l.exit=function(){return f},l},wa.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},wa.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=A(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return m(i)},wa.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},wa.sort=function(n){n=N.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},wa.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(T(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(T(n,t,e))};var ka=ua.map({mouseenter:"mouseover",mouseleave:"mouseout"});ka.forEach(function(n){"on"+n in aa&&ka.remove(n)}),wa.each=function(n){return D(this,function(t,e,r){n.call(t,t.__data__,e,r)})},wa.call=function(n){var t=da(arguments);return n.apply(t[0]=this,t),this},wa.empty=function(){return!this.node()},wa.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null};var Aa=[];ua.selection.enter=j,ua.selection.enter.prototype=Aa,Aa.append=wa.append,Aa.insert=wa.insert,Aa.empty=wa.empty,Aa.node=wa.node,Aa.select=function(n){for(var t,e,r,i,u,a=[],o=-1,c=this.length;++o<c;){r=(i=this[o]).update,a.push(t=[]),t.parentNode=i.parentNode;for(var l=-1,f=i.length;++l<f;)(u=i[l])?(t.push(r[l]=e=n.call(i.parentNode,u.__data__,l)),e.__data__=u.__data__):t.push(null)}return m(a)},wa.transition=function(){var n,t,e=rc||++oc,r=[],i=Object.create(cc);i.time=Date.now();for(var u=-1,a=this.length;++u<a;){r.push(n=[]);for(var o=this[u],c=-1,l=o.length;++c<l;)(t=o[c])&&xu(t,c,e,i),n.push(t)}return vu(r,e)},ua.select=function(n){var t=["string"==typeof n?ya(n,aa):n];return t.parentNode=xa,m([t])},ua.selectAll=function(n){var t=da("string"==typeof n?Ma(n,aa):n);return t.parentNode=xa,m([t])};var Na=ua.select(xa);ua.behavior.zoom=function(){function n(){this.on("mousedown.zoom",o).on("mousemove.zoom",f).on(Ca+".zoom",c).on("dblclick.zoom",g).on("touchstart.zoom",p).on("touchmove.zoom",d).on("touchend.zoom",p)}function t(n){return[(n[0]-w[0])/S,(n[1]-w[1])/S]}function e(n){return[n[0]*S+w[0],n[1]*S+w[1]]}function r(n){S=Math.max(E[0],Math.min(E[1],n))}function i(n,t){t=e(t),w[0]+=n[0]-t[0],w[1]+=n[1]-t[1]}function u(){M&&M.domain(y.range().map(function(n){return(n-w[0])/S}).map(y.invert)),b&&b.domain(x.range().map(function(n){return(n-w[1])/S}).map(x.invert))}function a(n){u(),ua.event.preventDefault(),n({type:"zoom",scale:S,translate:w})}function o(){function n(){c=1,i(ua.mouse(r),h),a(u)}function e(){c&&l(),f.on("mousemove.zoom",null).on("mouseup.zoom",null),c&&ua.event.target===o&&s(f,"click.zoom")}var r=this,u=k.of(r,arguments),o=ua.event.target,c=0,f=ua.select(oa).on("mousemove.zoom",n).on("mouseup.zoom",e),h=t(ua.mouse(r));oa.focus(),l()}function c(){m||(m=t(ua.mouse(this))),r(Math.pow(2,qa()*.002)*S),i(ua.mouse(this),m),a(k.of(this,arguments))}function f(){m=null}function g(){var n=ua.mouse(this),e=t(n),u=Math.log(S)/Math.LN2;r(Math.pow(2,ua.event.shiftKey?Math.ceil(u)-1:Math.floor(u)+1)),i(n,e),a(k.of(this,arguments))}function p(){var n=ua.touches(this),e=Date.now();if(v=S,m={},n.forEach(function(n){m[n.identifier]=t(n)}),l(),n.length===1){if(500>e-_){var u=n[0],o=t(n[0]);r(2*S),i(u,o),a(k.of(this,arguments))}_=e}}function d(){var n=ua.touches(this),t=n[0],e=m[t.identifier];if(u=n[1]){var u,o=m[u.identifier];t=[(t[0]+u[0])/2,(t[1]+u[1])/2],e=[(e[0]+o[0])/2,(e[1]+o[1])/2],r(ua.event.scale*v)}i(t,e),_=null,a(k.of(this,arguments))}var m,v,y,M,x,b,_,w=[0,0],S=1,E=Ta,k=h(n,"zoom");return n.translate=function(t){return arguments.length?(w=t.map(Number),u(),n):w},n.scale=function(t){return arguments.length?(S=+t,u(),n):S},n.scaleExtent=function(t){return arguments.length?(E=null==t?Ta:t.map(Number),n):E},n.x=function(t){return arguments.length?(M=t,y=t.copy(),w=[0,0],S=1,n):M},n.y=function(t){return arguments.length?(b=t,x=t.copy(),w=[0,0],S=1,n):b},ua.rebind(n,k,"on")};var qa,Ta=[0,1/0],Ca="onwheel"in aa?(qa=function(){return-ua.event.deltaY*(ua.event.deltaMode?120:1)},"wheel"):"onmousewheel"in aa?(qa=function(){return ua.event.wheelDelta},"mousewheel"):(qa=function(){return-ua.event.detail},"MozMousePixelScroll");L.prototype.toString=function(){return this.rgb()+""},ua.hsl=function(n,t,e){return arguments.length===1?n instanceof H?F(n.h,n.s,n.l):it(""+n,ut,F):F(+n,+t,+e)};var za=H.prototype=new L;za.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),F(this.h,this.s,this.l/n)},za.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),F(this.h,this.s,n*this.l)},za.rgb=function(){return P(this.h,this.s,this.l)};var Da=Math.PI,ja=1e-6,La=Da/180,Fa=180/Da;ua.hcl=function(n,t,e){return arguments.length===1?n instanceof Z?X(n.h,n.c,n.l):n instanceof J?K(n.l,n.a,n.b):K((n=at((n=ua.rgb(n)).r,n.g,n.b)).l,n.a,n.b):X(+n,+t,+e)};var Ha=Z.prototype=new L;Ha.brighter=function(n){return X(this.h,this.c,Math.min(100,this.l+Pa*(arguments.length?n:1)))},Ha.darker=function(n){return X(this.h,this.c,Math.max(0,this.l-Pa*(arguments.length?n:1)))},Ha.rgb=function(){return B(this.h,this.c,this.l).rgb()},ua.lab=function(n,t,e){return arguments.length===1?n instanceof J?$(n.l,n.a,n.b):n instanceof Z?B(n.l,n.c,n.h):at((n=ua.rgb(n)).r,n.g,n.b):$(+n,+t,+e)};var Pa=18,Ra=.95047,Oa=1,Ya=1.08883,Ua=J.prototype=new L;Ua.brighter=function(n){return $(Math.min(100,this.l+Pa*(arguments.length?n:1)),this.a,this.b)},Ua.darker=function(n){return $(Math.max(0,this.l-Pa*(arguments.length?n:1)),this.a,this.b)},Ua.rgb=function(){return G(this.l,this.a,this.b)},ua.rgb=function(n,t,e){return arguments.length===1?n instanceof et?tt(n.r,n.g,n.b):it(""+n,tt,P):tt(~~n,~~t,~~e)};var Ia=et.prototype=new L;Ia.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),tt(Math.min(255,Math.floor(t/n)),Math.min(255,Math.floor(e/n)),Math.min(255,Math.floor(r/n)))):tt(i,i,i)},Ia.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),tt(Math.floor(n*this.r),Math.floor(n*this.g),Math.floor(n*this.b))},Ia.hsl=function(){return ut(this.r,this.g,this.b)},Ia.toString=function(){return"#"+rt(this.r)+rt(this.g)+rt(this.b)};var Va=ua.map({aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"});Va.forEach(function(n,t){Va.set(n,it(t,tt,P))}),ua.functor=lt,ua.xhr=st(ft),ua.csv=pt(",","text/csv"),ua.tsv=pt("	","text/tab-separated-values");var Xa,Za,Ba,$a;ua.timer=function(n,t,e){if(arguments.length<3){if(arguments.length<2)t=0;else if(!isFinite(t))return;e=Date.now()}var r=e+t,i={callback:n,time:r,next:null};Za?Za.next=i:Xa=i,Za=i,Ba||($a=clearTimeout($a),Ba=1,Ja(dt))},ua.timer.flush=function(){mt(),vt()};var Ja=oa.requestAnimationFrame||oa.webkitRequestAnimationFrame||oa.mozRequestAnimationFrame||oa.oRequestAnimationFrame||oa.msRequestAnimationFrame||function(n){setTimeout(n,17)},Ga=".",Ka=",",Wa=[3,3],Qa=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(yt);ua.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ua.round(n,Mt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,Math.floor((0>=e?e+1:e-1)/3)*3))),Qa[8+e/3]},ua.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)},ua.format=function(n){var t=no.exec(n),e=t[1]||" ",r=t[2]||">",i=t[3]||"",u=t[4]||"",a=t[5],o=+t[6],c=t[7],l=t[8],f=t[9],s=1,h="",g=!1;switch(l&&(l=+l.substring(1)),(a||"0"===e&&"="===r)&&(a=e="0",r="=",c&&(o-=Math.floor((o-1)/4))),f){case"n":c=!0,f="g";break;case"%":s=100,h="%",f="f";break;case"p":s=100,h="%",f="r";break;case"b":case"o":case"x":case"X":u&&(u="0"+f.toLowerCase());case"c":case"d":g=!0,l=0;break;case"s":s=-1,f="r"}"#"===u&&(u=""),"r"!=f||l||(f="g"),null!=l&&("g"==f?l=Math.max(1,Math.min(21,l)):("e"==f||"f"==f)&&(l=Math.max(0,Math.min(20,l)))),f=to.get(f)||xt;var p=a&&c;return function(n){if(g&&n%1)return"";var t=0>n||0===n&&0>1/n?(n=-n,"-"):i;if(0>s){var d=ua.formatPrefix(n,l);n=d.scale(n),h=d.symbol}else n*=s;n=f(n,l),!a&&c&&(n=eo(n));var m=u.length+n.length+(p?0:t.length),v=o>m?Array(m=o-m+1).join(e):"";return p&&(n=eo(v+n)),Ga&&n.replace(".",Ga),t+=u,("<"===r?t+n+v:">"===r?v+t+n:"^"===r?v.substring(0,m>>=1)+t+n+v.substring(m):t+(p?n:v+n))+h}};var no=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,to=ua.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ua.round(n,Mt(n,t))).toFixed(Math.max(0,Math.min(20,Mt(n*(1+1e-15),t))))}}),eo=ft;if(Wa){var ro=Wa.length;eo=function(n){for(var t=n.lastIndexOf("."),e=t>=0?"."+n.substring(t+1):(t=n.length,""),r=[],i=0,u=Wa[0];t>0&&u>0;)r.push(n.substring(t-=u,t+u)),u=Wa[i=(i+1)%ro];return r.reverse().join(Ka||"")+e}}ua.geo={},ua.geo.stream=function(n,t){n&&io.hasOwnProperty(n.type)?io[n.type](n,t):bt(n,t)};var io={Feature:function(n,t){bt(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)bt(e[r].geometry,t)}},uo={Sphere:function(n,t){t.sphere()},Point:function(n,t){var e=n.coordinates;t.point(e[0],e[1])},MultiPoint:function(n,t){for(var e,r=n.coordinates,i=-1,u=r.length;++i<u;)e=r[i],t.point(e[0],e[1])},LineString:function(n,t){_t(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)_t(e[r],t,0)},Polygon:function(n,t){wt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)wt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)bt(e[r],t)}};ua.geo.area=function(n){return ao=0,ua.geo.stream(n,co),ao};var ao,oo,co={sphere:function(){ao+=4*Da},point:q,lineStart:q,lineEnd:q,polygonStart:function(){oo=0,co.lineStart=St},polygonEnd:function(){var n=2*oo;ao+=0>n?4*Da+n:n,co.lineStart=co.lineEnd=co.point=q}};ua.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),s>t&&(s=t),t>g&&(g=t)}function t(t,e){var r=Et([t*La,e*La]);if(v){var i=At(v,r),u=[i[1],-i[0],0],a=At(u,i);Tt(a),a=Ct(a);var c=t-p,l=c>0?1:-1,d=a[0]*Fa*l,m=Math.abs(c)>180;if(m^(d>l*p&&l*t>d)){var y=a[1]*Fa;y>g&&(g=y)}else if(d=(d+360)%360-180,m^(d>l*p&&l*t>d)){var y=-a[1]*Fa;s>y&&(s=y)}else s>e&&(s=e),e>g&&(g=e);m?p>t?o(f,t)>o(f,h)&&(h=t):o(t,h)>o(f,h)&&(f=t):h>=f?(f>t&&(f=t),t>h&&(h=t)):t>p?o(f,t)>o(f,h)&&(h=t):o(t,h)>o(f,h)&&(f=t)}else n(t,e);v=r,p=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,v=null}function i(n,e){if(v){var r=n-p;y+=Math.abs(r)>180?r+(r>0?360:-360):r}else d=n,m=e;co.point(n,e),t(n,e)}function u(){co.lineStart()}function a(){i(d,m),co.lineEnd(),Math.abs(y)>ja&&(f=-(h=180)),x[0]=f,x[1]=h,v=null}function o(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,g,p,d,m,v,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=a,y=0,co.polygonStart()},polygonEnd:function(){co.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>oo?(f=-(h=180),s=-(g=90)):y>ja?g=90:-ja>y&&(s=-90),x[0]=f,x[1]=h}};return function(n){g=h=-(f=s=1/0),M=[],ua.geo.stream(n,b),M.sort(c);for(var t,e=1,r=M.length,i=M[0],u=[i];r>e;++e)t=M[e],l(t[0],i)||l(t[1],i)?(o(i[0],t[1])>o(i[0],i[1])&&(i[1]=t[1]),o(t[0],i[1])>o(i[0],i[1])&&(i[0]=t[0])):u.push(i=t);for(var a,t,p=-1/0,r=u.length-1,e=0,i=u[r];r>=e;i=t,++e)t=u[e],(a=o(i[1],t[0]))>p&&(p=a,f=t[0],h=i[1]);return M=x=null,[[f,s],[h,g]]}}(),ua.geo.centroid=function(n){lo=fo=so=ho=go=0,ua.geo.stream(n,po);var t;return fo&&Math.abs(t=Math.sqrt(so*so+ho*ho+go*go))>ja?[Math.atan2(ho,so)*Fa,Math.asin(Math.max(-1,Math.min(1,go/t)))*Fa]:void 0};var lo,fo,so,ho,go,po={sphere:function(){2>lo&&(lo=2,fo=so=ho=go=0)},point:Dt,lineStart:Lt,lineEnd:Ft,polygonStart:function(){2>lo&&(lo=2,fo=so=ho=go=0),po.lineStart=jt},polygonEnd:function(){po.lineStart=Lt}},mo=Ot(Ht,Xt,Bt),vo=1e9;ua.geo.projection=Qt,ua.geo.projectionMutator=ne,(ua.geo.equirectangular=function(){return Qt(ee)}).raw=ee.invert=ee,ua.geo.rotation=function(n){function t(t){return t=n(t[0]*La,t[1]*La),t[0]*=Fa,t[1]*=Fa,t}return n=re(n[0]%360*La,n[1]*La,n.length>2?n[2]*La:0),t.invert=function(t){return t=n.invert(t[0]*La,t[1]*La),t[0]*=Fa,t[1]*=Fa,t},t},ua.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=re(-n[0]*La,-n[1]*La,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Fa,n[1]*=Fa}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=oe((t=+r)*La,i*La),n):t},n.precision=function(r){return arguments.length?(e=oe(t*La,(i=+r)*La),n):i},n.angle(90)},ua.geo.distance=function(n,t){var e,r=(t[0]-n[0])*La,i=n[1]*La,u=t[1]*La,a=Math.sin(r),o=Math.cos(r),c=Math.sin(i),l=Math.cos(i),f=Math.sin(u),s=Math.cos(u);return Math.atan2(Math.sqrt((e=s*a)*e+(e=l*f-c*s*o)*e),c*f+l*s*o)},ua.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ua.range(Math.ceil(u/m)*m,i,m).map(h).concat(ua.range(Math.ceil(l/v)*v,c,v).map(g)).concat(ua.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Math.abs(n%m)>ja}).map(f)).concat(ua.range(Math.ceil(o/d)*d,a,d).filter(function(n){return Math.abs(n%v)>ja}).map(s))}var e,r,i,u,a,o,c,l,f,s,h,g,p=10,d=p,m=90,v=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(g(c).slice(1),h(i).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],l=+t[0][1],c=+t[1][1],u>i&&(t=u,u=i,i=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[u,l],[i,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(m=+t[0],v=+t[1],n):[m,v]},n.minorStep=function(t){return arguments.length?(p=+t[0],d=+t[1],n):[p,d]},n.precision=function(t){return arguments.length?(y=+t,f=le(o,a,90),s=fe(r,e,y),h=le(l,c,90),g=fe(u,i,y),n):y},n.majorExtent([[-180,-90+ja],[180,90-ja]]).minorExtent([[-180,-80-ja],[180,80+ja]])},ua.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=se,i=he;return n.distance=function(){return ua.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ua.geo.interpolate=function(n,t){return ge(n[0]*La,n[1]*La,t[0]*La,t[1]*La)},ua.geo.length=function(n){return yo=0,ua.geo.stream(n,Mo),yo};var yo,Mo={sphere:q,point:q,lineStart:pe,lineEnd:q,polygonStart:q,polygonEnd:q};(ua.geo.conicEqualArea=function(){return de(me)}).raw=me,ua.geo.albers=function(){return ua.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ua.geo.albersUsa=function(){function n(n){var u=n[0],a=n[1];return t=null,e(u,a),t||(r(u,a),t)||i(u,a),t}var t,e,r,i,u=ua.geo.albers(),a=ua.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=ua.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?a:i>=.166&&.234>i&&r>=-.214&&-.115>r?o:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),a.precision(t),o.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),a.scale(.35*t),o.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var l=u.scale(),f=+t[0],s=+t[1];return e=u.translate(t).clipExtent([[f-.455*l,s-.238*l],[f+.455*l,s+.238*l]]).stream(c).point,r=a.translate([f-.307*l,s+.201*l]).clipExtent([[f-.425*l+ja,s+.12*l+ja],[f-.214*l-ja,s+.234*l-ja]]).stream(c).point,i=o.translate([f-.205*l,s+.212*l]).clipExtent([[f-.214*l+ja,s+.166*l+ja],[f-.115*l-ja,s+.234*l-ja]]).stream(c).point,n},n.scale(1070)};var xo,bo,_o,wo,So,Eo,ko={point:q,lineStart:q,lineEnd:q,polygonStart:function(){bo=0,ko.lineStart=ve},polygonEnd:function(){ko.lineStart=ko.lineEnd=ko.point=q,xo+=Math.abs(bo/2)}},Ao={point:ye,lineStart:q,lineEnd:q,polygonStart:q,polygonEnd:q},No={point:be,lineStart:_e,lineEnd:we,polygonStart:function(){No.lineStart=Se},polygonEnd:function(){No.point=be,No.lineStart=_e,No.lineEnd=we}};ua.geo.path=function(){function n(n){return n&&ua.geo.stream(n,r(i.pointRadius("function"==typeof u?+u.apply(this,arguments):u))),i.result()}var t,e,r,i,u=4.5;return n.area=function(n){return xo=0,ua.geo.stream(n,r(ko)),xo},n.centroid=function(n){return lo=so=ho=go=0,ua.geo.stream(n,r(No)),go?[so/go,ho/go]:void 0},n.bounds=function(n){return So=Eo=-(_o=wo=1/0),ua.geo.stream(n,r(Ao)),[[_o,wo],[So,Eo]]},n.projection=function(e){return arguments.length?(r=(t=e)?e.stream||ke(e):ft,n):t},n.context=function(t){return arguments.length?(i=(e=t)==null?new Me:new Ee(t),n):e},n.pointRadius=function(t){return arguments.length?(u="function"==typeof t?t:+t,n):u},n.projection(ua.geo.albersUsa()).context(null)};var qo=Ae(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ua.geo.azimuthalEqualArea=function(){return Qt(qo)}).raw=qo;var To=Ae(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},ft);(ua.geo.azimuthalEquidistant=function(){return Qt(To)}).raw=To,(ua.geo.conicConformal=function(){return de(Ne)}).raw=Ne,(ua.geo.conicEquidistant=function(){return de(qe)}).raw=qe;var Co=Ae(function(n){return 1/n},Math.atan);(ua.geo.gnomonic=function(){return Qt(Co)}).raw=Co,Te.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Da/2]},(ua.geo.mercator=function(){return Ce(Te)}).raw=Te;var zo=Ae(function(){return 1},Math.asin);(ua.geo.orthographic=function(){return Qt(zo)}).raw=zo;var Do=Ae(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ua.geo.stereographic=function(){return Qt(Do)}).raw=Do,ze.invert=function(n,t){return[Math.atan2(U(n),Math.cos(t)),Y(Math.sin(t)/I(n))]},(ua.geo.transverseMercator=function(){return Ce(ze)}).raw=ze,ua.geom={},ua.svg={},ua.svg.line=function(){return De(ft)};var jo=ua.map({linear:Fe,"linear-closed":He,"step-before":Pe,"step-after":Re,basis:Xe,"basis-open":Ze,"basis-closed":Be,bundle:$e,cardinal:Ue,"cardinal-open":Oe,"cardinal-closed":Ye,monotone:nr});jo.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Lo=[0,2/3,1/3,0],Fo=[0,1/3,2/3,0],Ho=[0,1/6,2/3,1/6];ua.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i,u,a,o,c,l,f,s,h,g,p,d=lt(e),m=lt(r),v=n.length,y=v-1,M=[],x=[],b=0;if(d===je&&r===Le)t=n;else for(u=0,t=[];v>u;++u)t.push([+d.call(this,i=n[u],u),+m.call(this,i,u)]);for(u=1;v>u;++u)(t[u][1]<t[b][1]||t[u][1]==t[b][1]&&t[u][0]<t[b][0])&&(b=u);for(u=0;v>u;++u)u!==b&&(c=t[u][1]-t[b][1],o=t[u][0]-t[b][0],M.push({angle:Math.atan2(c,o),index:u}));for(M.sort(function(n,t){return n.angle-t.angle}),g=M[0].angle,h=M[0].index,s=0,u=1;y>u;++u){if(a=M[u].index,g==M[u].angle){if(o=t[h][0]-t[b][0],c=t[h][1]-t[b][1],l=t[a][0]-t[b][0],f=t[a][1]-t[b][1],o*o+c*c>=l*l+f*f){M[u].index=-1;continue}M[s].index=-1}g=M[u].angle,s=u,h=a}for(x.push(b),u=0,a=0;2>u;++a)M[a].index>-1&&(x.push(M[a].index),u++);for(p=x.length;y>a;++a)if(!(M[a].index<0)){for(;!tr(x[p-2],x[p-1],M[a].index,t);)--p;x[p++]=M[a].index}var _=[];for(u=p-1;u>=0;--u)_.push(n[x[u]]);return _}var e=je,r=Le;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ua.geom.polygon=function(n){return n.area=function(){for(var t=0,e=n.length,r=n[e-1][1]*n[0][0]-n[e-1][0]*n[0][1];++t<e;)r+=n[t-1][1]*n[t][0]-n[t-1][0]*n[t][1];return.5*r},n.centroid=function(t){var e,r,i=-1,u=n.length,a=0,o=0,c=n[u-1];for(arguments.length||(t=-1/(6*n.area()));++i<u;)e=c,c=n[i],r=e[0]*c[1]-c[0]*e[1],a+=(e[0]+c[0])*r,o+=(e[1]+c[1])*r;return[a*t,o*t]},n.clip=function(t){for(var e,r,i,u,a,o,c=-1,l=n.length,f=n[l-1];++c<l;){for(e=t.slice(),t.length=0,u=n[c],a=e[(i=e.length)-1],r=-1;++r<i;)o=e[r],er(o,f,u)?(er(a,f,u)||t.push(rr(a,o,f,u)),t.push(o)):er(a,f,u)&&t.push(rr(a,o,f,u)),a=o;f=u}return t},n},ua.geom.delaunay=function(n){var t=n.map(function(){return[]}),e=[];return ir(n,function(e){t[e.region.l.index].push(n[e.region.r.index])}),t.forEach(function(t,r){var i=n[r],u=i[0],a=i[1];t.forEach(function(n){n.angle=Math.atan2(n[0]-u,n[1]-a)}),t.sort(function(n,t){return n.angle-t.angle});for(var o=0,c=t.length-1;c>o;o++)e.push([i,t[o],t[o+1]])}),e},ua.geom.voronoi=function(n){function t(n){var t,r,a,o=n.map(function(){return[]}),c=lt(i),l=lt(u),f=n.length,s=1e6;if(c===je&&l===Le)t=n;else for(t=[],a=0;f>a;++a)t.push([+c.call(this,r=n[a],a),+l.call(this,r,a)]);if(ir(t,function(n){var t,e,r,i,u,a;n.a===1&&n.b>=0?(t=n.ep.r,e=n.ep.l):(t=n.ep.l,e=n.ep.r),n.a===1?(u=t?t.y:-s,r=n.c-n.b*u,a=e?e.y:s,i=n.c-n.b*a):(r=t?t.x:-s,u=n.c-n.a*r,i=e?e.x:s,a=n.c-n.a*i);var c=[r,u],l=[i,a];o[n.region.l.index].push(c,l),o[n.region.r.index].push(c,l)}),o=o.map(function(n,e){var r=t[e][0],i=t[e][1],u=n.map(function(n){return Math.atan2(n[0]-r,n[1]-i)
}),a=ua.range(n.length).sort(function(n,t){return u[n]-u[t]});return a.filter(function(n,t){return!t||u[n]-u[a[t-1]]>ja}).map(function(t){return n[t]})}),o.forEach(function(n,e){var r=n.length;if(!r)return n.push([-s,-s],[-s,s],[s,s],[s,-s]);if(!(r>2)){var i=t[e],u=n[0],a=n[1],o=i[0],c=i[1],l=u[0],f=u[1],h=a[0],g=a[1],p=Math.abs(h-l),d=g-f;if(Math.abs(d)<ja){var m=f>c?-s:s;n.push([-s,m],[s,m])}else if(ja>p){var v=l>o?-s:s;n.push([v,-s],[v,s])}else{var m=(l-o)*(g-f)>(h-l)*(f-c)?s:-s,y=Math.abs(d)-p;Math.abs(y)<ja?n.push([0>d?m:-m,m]):(y>0&&(m*=-1),n.push([-s,m],[s,m]))}}}),e)for(a=0;f>a;++a)e(o[a]);for(a=0;f>a;++a)o[a].point=n[a];return o}var e,r=null,i=je,u=Le;return arguments.length?t(n):(t.x=function(n){return arguments.length?(i=n,t):i},t.y=function(n){return arguments.length?(u=n,t):u},t.size=function(n){return arguments.length?(null==n?e=null:(r=[+n[0],+n[1]],e=ua.geom.polygon([[0,0],[0,r[1]],r,[r[0],0]]).clip),t):r},t.links=function(n){var t,e,r,a=n.map(function(){return[]}),o=[],c=lt(i),l=lt(u),f=n.length;if(c===je&&l===Le)t=n;else for(r=0;f>r;++r)t.push([+c.call(this,e=n[r],r),+l.call(this,e,r)]);return ir(t,function(t){var e=t.region.l.index,r=t.region.r.index;a[e][r]||(a[e][r]=a[r][e]=!0,o.push({source:n[e],target:n[r]}))}),o},t.triangles=function(n){if(i===je&&u===Le)return ua.geom.delaunay(n);var t,e,r,a,o,c=lt(i),l=lt(u);for(a=0,t=[],o=n.length;o>a;++a)e=[+c.call(this,r=n[a],a),+l.call(this,r,a)],e.data=r,t.push(e);return ua.geom.delaunay(t).map(function(n){return n.map(function(n){return n.data})})},t)};var Po={l:"r",r:"l"};ua.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,f=n.y;if(null!=c)if(Math.abs(c-e)+Math.abs(f-r)<.01)l(n,t,e,r,i,u,a,o);else{var s=n.point;n.x=n.y=n.point=null,l(n,s,c,f,i,u,a,o),l(n,t,e,r,i,u,a,o)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,i,u,a,o)}function l(n,t,e,r,i,a,o,c){var l=.5*(i+o),f=.5*(a+c),s=e>=l,h=r>=f,g=(h<<1)+s;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=or()),s?i=l:o=l,h?a=f:c=f,u(n,t,e,r,i,a,o,c)}var f,s,h,g,p,d,m,v,y,M=lt(o),x=lt(c);if(null!=t)d=t,m=e,v=r,y=i;else if(v=y=-(d=m=1/0),s=[],h=[],p=n.length,a)for(g=0;p>g;++g)f=n[g],f.x<d&&(d=f.x),f.y<m&&(m=f.y),f.x>v&&(v=f.x),f.y>y&&(y=f.y),s.push(f.x),h.push(f.y);else for(g=0;p>g;++g){var b=+M(f=n[g],g),_=+x(f,g);d>b&&(d=b),m>_&&(m=_),b>v&&(v=b),_>y&&(y=_),s.push(b),h.push(_)}var w=v-d,S=y-m;w>S?y=m+w:v=d+S;var E=or();if(E.add=function(n){u(E,n,+M(n,++g),+x(n,g),d,m,v,y)},E.visit=function(n){cr(n,E,d,m,v,y)},g=-1,null==t){for(;++g<p;)u(E,n[g],s[g],h[g],d,m,v,y);--g}else n.forEach(E.add);return s=h=n=f=null,E}var a,o=je,c=Le;return(a=arguments.length)?(o=ur,c=ar,3===a&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(o=n,u):o},u.y=function(n){return arguments.length?(c=n,u):c},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r,i]},u)},ua.interpolateRgb=lr,ua.transform=function(n){var t=aa.createElementNS(ua.ns.prefix.svg,"g");return(ua.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new fr(e?e.matrix:Ro)})(n)},fr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var Ro={a:1,b:0,c:0,d:1,e:0,f:0};ua.interpolateNumber=pr,ua.interpolateTransform=dr,ua.interpolateObject=mr,ua.interpolateString=vr;var Oo=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;ua.interpolate=yr,ua.interpolators=[function(n,t){var e=typeof t;return("string"===e?Va.has(t)||/^(#|rgb\(|hsl\()/.test(t)?lr:vr:t instanceof L?lr:"object"===e?Array.isArray(t)?xr:mr:pr)(n,t)}],ua.interpolateArray=xr;var Yo=function(){return ft},Uo=ua.map({linear:Yo,poly:Ar,quad:function(){return Sr},cubic:function(){return Er},sin:function(){return Nr},exp:function(){return qr},circle:function(){return Tr},elastic:Cr,back:zr,bounce:function(){return Dr}}),Io=ua.map({"in":ft,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});ua.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=Uo.get(e)||Yo,r=Io.get(r)||ft,br(r(e.apply(null,Array.prototype.slice.call(arguments,1))))},ua.interpolateHcl=jr,ua.interpolateHsl=Lr,ua.interpolateLab=Fr,ua.interpolateRound=Hr,ua.layout={},ua.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Or(n[e]));return t}},ua.layout.chord=function(){function n(){var n,l,s,h,g,p={},d=[],m=ua.range(u),v=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(l=0,g=-1;++g<u;)l+=i[h][g];d.push(l),v.push(ua.range(u)),n+=l}for(a&&m.sort(function(n,t){return a(d[n],d[t])}),o&&v.forEach(function(n,t){n.sort(function(n,e){return o(i[t][n],i[t][e])})}),n=(2*Da-f*u)/n,l=0,h=-1;++h<u;){for(s=l,g=-1;++g<u;){var y=m[h],M=v[y][g],x=i[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:s,endAngle:l,value:(l-s)/n},l+=f}for(h=-1;++h<u;)for(g=h-1;++g<u;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,a,o,c,l={},f=0;return l.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,l):i},l.padding=function(n){return arguments.length?(f=n,e=r=null,l):f},l.sortGroups=function(n){return arguments.length?(a=n,e=r=null,l):a},l.sortSubgroups=function(n){return arguments.length?(o=n,e=null,l):o},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ua.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,a=t.cy-n.y,o=1/Math.sqrt(u*u+a*a);if(d>(i-e)*o){var c=t.charge*o*o;return n.px-=u*c,n.py-=a*c,!0}if(t.point&&isFinite(o)){var c=t.pointCharge*o*o;n.px-=u*c,n.py-=a*c}}return!t.charge}}function t(n){n.px=ua.event.x,n.py=ua.event.y,o.resume()}var e,r,i,u,a,o={},c=ua.dispatch("start","tick","end"),l=[1,1],f=.9,s=Vo,h=Xo,g=-30,p=.1,d=.8,m=[],v=[];return o.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,o,s,h,d,y,M,x,b=m.length,_=v.length;for(e=0;_>e;++e)o=v[e],s=o.source,h=o.target,M=h.x-s.x,x=h.y-s.y,(d=M*M+x*x)&&(d=r*u[e]*((d=Math.sqrt(d))-i[e])/d,M*=d,x*=d,h.x-=M*(y=s.weight/(h.weight+s.weight)),h.y-=x*y,s.x+=M*(y=1-y),s.y+=x*y);if((y=r*p)&&(M=l[0]/2,x=l[1]/2,e=-1,y))for(;++e<b;)o=m[e],o.x+=(M-o.x)*y,o.y+=(x-o.y)*y;if(g)for(Br(t=ua.geom.quadtree(m),r,a),e=-1;++e<b;)(o=m[e]).fixed||t.visit(n(o));for(e=-1;++e<b;)o=m[e],o.fixed?(o.x=o.px,o.y=o.py):(o.x-=(o.px-(o.px=o.x))*f,o.y-=(o.py-(o.py=o.y))*f);c.tick({type:"tick",alpha:r})},o.nodes=function(n){return arguments.length?(m=n,o):m},o.links=function(n){return arguments.length?(v=n,o):v},o.size=function(n){return arguments.length?(l=n,o):l},o.linkDistance=function(n){return arguments.length?(s="function"==typeof n?n:+n,o):s},o.distance=o.linkDistance,o.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,o):h},o.friction=function(n){return arguments.length?(f=+n,o):f},o.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,o):g},o.gravity=function(n){return arguments.length?(p=+n,o):p},o.theta=function(n){return arguments.length?(d=+n,o):d},o.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ua.timer(o.tick)),o):r},o.start=function(){function n(n,r){for(var i,u=t(e),a=-1,o=u.length;++a<o;)if(!isNaN(i=u[a][n]))return i;return Math.random()*r}function t(){if(!c){for(c=[],r=0;p>r;++r)c[r]=[];for(r=0;d>r;++r){var n=v[r];c[n.source.index].push(n.target),c[n.target.index].push(n.source)}}return c[e]}var e,r,c,f,p=m.length,d=v.length,y=l[0],M=l[1];for(e=0;p>e;++e)(f=m[e]).index=e,f.weight=0;for(e=0;d>e;++e)f=v[e],typeof f.source=="number"&&(f.source=m[f.source]),typeof f.target=="number"&&(f.target=m[f.target]),++f.source.weight,++f.target.weight;for(e=0;p>e;++e)f=m[e],isNaN(f.x)&&(f.x=n("x",y)),isNaN(f.y)&&(f.y=n("y",M)),isNaN(f.px)&&(f.px=f.x),isNaN(f.py)&&(f.py=f.y);if(i=[],"function"==typeof s)for(e=0;d>e;++e)i[e]=+s.call(this,v[e],e);else for(e=0;d>e;++e)i[e]=s;if(u=[],"function"==typeof h)for(e=0;d>e;++e)u[e]=+h.call(this,v[e],e);else for(e=0;d>e;++e)u[e]=h;if(a=[],"function"==typeof g)for(e=0;p>e;++e)a[e]=+g.call(this,m[e],e);else for(e=0;p>e;++e)a[e]=g;return o.resume()},o.resume=function(){return o.alpha(.1)},o.stop=function(){return o.alpha(0)},o.drag=function(){return e||(e=ua.behavior.drag().origin(ft).on("dragstart.force",Ir).on("drag.force",t).on("dragend.force",Vr)),arguments.length?(this.on("mouseover.force",Xr).on("mouseout.force",Zr).call(e),void 0):e},ua.rebind(o,c,"on")};var Vo=20,Xo=1;ua.layout.hierarchy=function(){function n(t,a,o){var c=i.call(e,t,a);if(t.depth=a,o.push(t),c&&(l=c.length)){for(var l,f,s=-1,h=t.children=[],g=0,p=a+1;++s<l;)f=n(c[s],p,o),f.parent=t,h.push(f),g+=f.value;r&&h.sort(r),u&&(t.value=g)}else u&&(t.value=+u.call(e,t,a)||0);return t}function t(n,r){var i=n.children,a=0;if(i&&(o=i.length))for(var o,c=-1,l=r+1;++c<o;)a+=t(i[c],l);else u&&(a=+u.call(e,n,r)||0);return u&&(n.value=a),a}function e(t){var e=[];return n(t,0,e),e}var r=Kr,i=Jr,u=Gr;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(i=n,e):i},e.value=function(n){return arguments.length?(u=n,e):u},e.revalue=function(n){return t(n,0),n},e},ua.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(a=u.length)){var a,o,c,l=-1;for(r=t.value?r/t.value:0;++l<a;)n(o=u[l],e,c=o.value*r,i),e+=c}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var a=r.call(this,e,u);return n(a[0],0,i[0],i[1]/t(a[0])),a}var r=ua.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},$r(e,r)},ua.layout.pie=function(){function n(u){var a=u.map(function(e,r){return+t.call(n,e,r)}),o=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof i?i.apply(this,arguments):i)-o)/ua.sum(a),l=ua.range(u.length);null!=e&&l.sort(e===Zo?function(n,t){return a[t]-a[n]}:function(n,t){return e(u[n],u[t])});var f=[];return l.forEach(function(n){var t;f[n]={data:u[n],value:t=a[n],startAngle:o,endAngle:o+=t*c}}),f}var t=Number,e=Zo,r=0,i=2*Da;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n};var Zo={};ua.layout.stack=function(){function n(o,c){var l=o.map(function(e,r){return t.call(n,e,r)}),f=l.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),a.call(n,t,e)]})}),s=e.call(n,f,c);l=ua.permute(l,s),f=ua.permute(f,s);var h,g,p,d=r.call(n,f,c),m=l.length,v=l[0].length;for(g=0;v>g;++g)for(i.call(n,l[0][g],p=d[g],f[0][g][1]),h=1;m>h;++h)i.call(n,l[h][g],p+=f[h-1][g][1],f[h][g][1]);return o}var t=ft,e=ei,r=ri,i=ti,u=Qr,a=ni;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Bo.get(t)||ei,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:$o.get(t)||ri,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(i=t,n):i},n};var Bo=ua.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(ii),u=n.map(ui),a=ua.range(r).sort(function(n,t){return i[n]-i[t]}),o=0,c=0,l=[],f=[];for(t=0;r>t;++t)e=a[t],c>o?(o+=u[e],l.push(e)):(c+=u[e],f.push(e));return f.reverse().concat(l)},reverse:function(n){return ua.range(n.length).reverse()},"default":ei}),$o=ua.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,a=[],o=0,c=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;u>e;++e)c[e]=(o-a[e])/2;return c},wiggle:function(n){var t,e,r,i,u,a,o,c,l,f=n.length,s=n[0],h=s.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,i=0;f>t;++t)i+=n[t][e][1];for(t=0,u=0,o=s[e][0]-s[e-1][0];f>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;u+=a*n[t][e][1]}g[e]=c-=i?u/i*o:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,i=n.length,u=n[0].length,a=1/i,o=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=a}for(e=0;u>e;++e)o[e]=0;return o},zero:ri});ua.layout.histogram=function(){function n(n,u){for(var a,o,c=[],l=n.map(e,this),f=r.call(this,l,u),s=i.call(this,f,l,u),u=-1,h=l.length,g=s.length-1,p=t?1:1/h;++u<g;)a=c[u]=[],a.dx=s[u+1]-(a.x=s[u]),a.y=0;if(g>0)for(u=-1;++u<h;)o=l[u],o>=f[0]&&o<=f[1]&&(a=c[ua.bisect(s,o,1,g)-1],a.y+=p,a.push(n[u]));return c}var t=!0,e=Number,r=li,i=oi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=lt(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return ci(n,t)}:lt(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ua.layout.tree=function(){function n(n,i){function u(n,t){var r=n.children,i=n._tree;if(r&&(a=r.length)){for(var a,c,l,f=r[0],s=f,h=-1;++h<a;)l=r[h],u(l,c),s=o(l,c,s),c=l;yi(n);var g=.5*(f._tree.prelim+l._tree.prelim);t?(i.prelim=t._tree.prelim+e(n,t),i.mod=i.prelim-g):i.prelim=g}else t&&(i.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,i=-1;for(t+=n._tree.mod;++i<r;)a(e[i],t)}}function o(n,t,r){if(t){for(var i,u=n,a=n,o=t,c=n.parent.children[0],l=u._tree.mod,f=a._tree.mod,s=o._tree.mod,h=c._tree.mod;o=hi(o),u=si(u),o&&u;)c=si(c),a=hi(a),a._tree.ancestor=n,i=o._tree.prelim+s-u._tree.prelim-l+e(o,u),i>0&&(Mi(xi(o,n,r),n,i),l+=i,f+=i),s+=o._tree.mod,l+=u._tree.mod,h+=c._tree.mod,f+=a._tree.mod;o&&!hi(a)&&(a._tree.thread=o,a._tree.mod+=s-f),u&&!si(c)&&(c._tree.thread=u,c._tree.mod+=l-h,r=n)}return r}var c=t.call(this,n,i),l=c[0];vi(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),u(l),a(l,-l._tree.prelim);var f=gi(l,di),s=gi(l,pi),h=gi(l,mi),g=f.x-e(f,s)/2,p=s.x+e(s,f)/2,d=h.depth||1;return vi(l,function(n){n.x=(n.x-g)/(p-g)*r[0],n.y=n.depth/d*r[1],delete n._tree}),c}var t=ua.layout.hierarchy().sort(null).value(null),e=fi,r=[1,1];return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(r=t,n):r},$r(n,t)},ua.layout.pack=function(){function n(n,i){var u=t.call(this,n,i),a=u[0];a.x=0,a.y=0,vi(a,function(n){n.r=Math.sqrt(n.value)}),vi(a,Ei);var o=r[0],c=r[1],l=Math.max(2*a.r/o,2*a.r/c);if(e>0){var f=e*l/2;vi(a,function(n){n.r+=f}),vi(a,Ei),vi(a,function(n){n.r-=f}),l=Math.max(2*a.r/o,2*a.r/c)}return Ni(a,o/2,c/2,1/l),u}var t=ua.layout.hierarchy().sort(bi),e=0,r=[1,1];return n.size=function(t){return arguments.length?(r=t,n):r},n.padding=function(t){return arguments.length?(e=+t,n):e},$r(n,t)},ua.layout.cluster=function(){function n(n,i){var u,a=t.call(this,n,i),o=a[0],c=0;vi(o,function(n){var t=n.children;t&&t.length?(n.x=Ci(t),n.y=Ti(t)):(n.x=u?c+=e(n,u):0,n.y=0,u=n)});var l=zi(o),f=Di(o),s=l.x-e(l,f)/2,h=f.x+e(f,l)/2;return vi(o,function(n){n.x=(n.x-s)/(h-s)*r[0],n.y=(1-(o.y?n.y/o.y:1))*r[1]}),a}var t=ua.layout.hierarchy().sort(null).value(null),e=fi,r=[1,1];return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(r=t,n):r},$r(n,t)},ua.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var a,o,c,l=s(e),f=[],h=u.slice(),p=1/0,d="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?e.depth&1?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),f.area=0;(c=h.length)>0;)f.push(a=h[c-1]),f.area+=a.area,"squarify"!==g||(o=r(f,d))<=p?(h.pop(),p=o):(f.area-=f.pop().area,i(f,d,l,!1),d=Math.min(l.dx,l.dy),f.length=f.area=0,p=1/0);f.length&&(i(f,d,l,!0),f.length=f.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,a=s(t),o=r.slice(),c=[];for(n(o,a.dx*a.dy/t.value),c.area=0;u=o.pop();)c.push(u),c.area+=u.area,u.z!=null&&(i(c,u.z?a.dx:a.dy,a,!o.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*p/r,r/(t*u*p)):1/0}function i(n,t,e,r){var i,u=-1,a=n.length,o=e.x,l=e.y,f=t?c(n.area/t):0;if(t==e.dx){for((r||f>e.dy)&&(f=e.dy);++u<a;)i=n[u],i.x=o,i.y=l,i.dy=f,o+=i.dx=Math.min(e.x+e.dx-o,f?c(i.area/f):0);i.z=!0,i.dx+=e.x+e.dx-o,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx);++u<a;)i=n[u],i.x=o,i.y=l,i.dx=f,l+=i.dy=Math.min(e.y+e.dy-l,f?c(i.area/f):0);i.z=!1,i.dy+=e.y+e.dy-l,e.x+=f,e.dx-=f}}function u(r){var i=a||o(r),u=i[0];return u.x=0,u.y=0,u.dx=l[0],u.dy=l[1],a&&o.revalue(u),n([u],u.dx*u.dy/u.value),(a?e:t)(u),h&&(a=i),i}var a,o=ua.layout.hierarchy(),c=Math.round,l=[1,1],f=null,s=ji,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(l=n,u):l},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?ji(t):Li(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Li(t,n)}if(!arguments.length)return f;var r;return s=(f=n)==null?ji:(r=typeof n)=="function"?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(c=n?Math.round:Number,u):c!=Number},u.sticky=function(n){return arguments.length?(h=n,a=null,u):h},u.ratio=function(n){return arguments.length?(p=n,u):p},u.mode=function(n){return arguments.length?(g=n+"",u):g},$r(u,o)},ua.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=Math.random()*2-1,r=Math.random()*2-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ua.random.normal.apply(ua,arguments);return function(){return Math.exp(n())}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t/n}}},ua.scale={},ua.scale.linear=function(){return Yi([0,1],[0,1],yr,!1)},ua.scale.log=function(){return Bi(ua.scale.linear().domain([0,Math.LN10]),10,$i,Ji,[1,10])};var Jo=ua.format(".0e");ua.scale.pow=function(){return Wi(ua.scale.linear(),1,[0,1])},ua.scale.sqrt=function(){return ua.scale.pow().exponent(.5)},ua.scale.ordinal=function(){return nu([],{t:"range",a:[[]]})},ua.scale.category10=function(){return ua.scale.ordinal().range(Go)},ua.scale.category20=function(){return ua.scale.ordinal().range(Ko)},ua.scale.category20b=function(){return ua.scale.ordinal().range(Wo)},ua.scale.category20c=function(){return ua.scale.ordinal().range(Qo)};var Go=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],Ko=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"],Wo=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"],Qo=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];ua.scale.quantile=function(){return tu([],[])},ua.scale.quantize=function(){return eu(0,1,[0,1])},ua.scale.threshold=function(){return ru([.5],[0,1])},ua.scale.identity=function(){return iu([0,1])},ua.svg.arc=function(){function n(){var n=t.apply(this,arguments),u=e.apply(this,arguments),a=r.apply(this,arguments)+nc,o=i.apply(this,arguments)+nc,c=(a>o&&(c=a,a=o,o=c),o-a),l=Da>c?"0":"1",f=Math.cos(a),s=Math.sin(a),h=Math.cos(o),g=Math.sin(o);return c>=tc?n?"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"Z":n?"M"+u*f+","+u*s+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*f+","+n*s+"Z":"M"+u*f+","+u*s+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L0,0"+"Z"}var t=uu,e=au,r=ou,i=cu;return n.innerRadius=function(e){return arguments.length?(t=lt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=lt(t),n):e},n.startAngle=function(t){return arguments.length?(r=lt(t),n):r},n.endAngle=function(t){return arguments.length?(i=lt(t),n):i},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,u=(r.apply(this,arguments)+i.apply(this,arguments))/2+nc;return[Math.cos(u)*n,Math.sin(u)*n]},n};var nc=-Da/2,tc=2*Da-1e-6;ua.svg.line.radial=function(){var n=De(lu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},Pe.reverse=Re,Re.reverse=Pe,ua.svg.area=function(){return fu(ft)},ua.svg.area.radial=function(){var n=fu(lu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ua.svg.chord=function(){function n(n,o){var c=t(this,u,n,o),l=t(this,a,n,o);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?i(c.r,c.p1,c.r,c.p0):i(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+i(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=o.call(n,i,r),a=c.call(n,i,r)+nc,f=l.call(n,i,r)+nc;return{r:u,a0:a,a1:f,p0:[u*Math.cos(a),u*Math.sin(a)],p1:[u*Math.cos(f),u*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Da)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=se,a=he,o=su,c=ou,l=cu;return n.radius=function(t){return arguments.length?(o=lt(t),n):o},n.source=function(t){return arguments.length?(u=lt(t),n):u},n.target=function(t){return arguments.length?(a=lt(t),n):a},n.startAngle=function(t){return arguments.length?(c=lt(t),n):c},n.endAngle=function(t){return arguments.length?(l=lt(t),n):l},n},ua.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),a=e.call(this,n,i),o=(u.y+a.y)/2,c=[u,{x:u.x,y:o},{x:a.x,y:o},a];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=se,e=he,r=hu;return n.source=function(e){return arguments.length?(t=lt(e),n):t},n.target=function(t){return arguments.length?(e=lt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ua.svg.diagonal.radial=function(){var n=ua.svg.diagonal(),t=hu,e=n.projection;return n.projection=function(n){return arguments.length?e(gu(t=n)):t},n},ua.svg.symbol=function(){function n(n,r){return(ec.get(t.call(this,n,r))||mu)(e.call(this,n,r))}var t=du,e=pu;return n.type=function(e){return arguments.length?(t=lt(e),n):t},n.size=function(t){return arguments.length?(e=lt(t),n):e},n};var ec=ua.map({circle:mu,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*uc)),e=t*uc;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/ic),e=t*ic/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/ic),e=t*ic/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ua.svg.symbolTypes=ec.keys();var rc,ic=Math.sqrt(3),uc=Math.tan(30*La),ac=[],oc=0,cc={ease:kr,delay:0,duration:250};ac.call=wa.call,ac.empty=wa.empty,ac.node=wa.node,ua.transition=function(n){return arguments.length?rc?n.transition():n:Na.transition()},ua.transition.prototype=ac,ac.select=function(n){var t,e,r,i=this.id,u=[];"function"!=typeof n&&(n=v(n));for(var a=-1,o=this.length;++a<o;){u.push(t=[]);for(var c=this[a],l=-1,f=c.length;++l<f;)(r=c[l])&&(e=n.call(r,r.__data__,l))?("__data__"in r&&(e.__data__=r.__data__),xu(e,l,i,r.__transition__[i]),t.push(e)):t.push(null)}return vu(u,i)},ac.selectAll=function(n){var t,e,r,i,u,a=this.id,o=[];"function"!=typeof n&&(n=y(n));for(var c=-1,l=this.length;++c<l;)for(var f=this[c],s=-1,h=f.length;++s<h;)if(r=f[s]){u=r.__transition__[a],e=n.call(r,r.__data__,s),o.push(t=[]);for(var g=-1,p=e.length;++g<p;)xu(i=e[g],g,a,u),t.push(i)}return vu(o,a)},ac.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=A(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]);for(var e=this[u],o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return vu(i,this.id,this.time).ease(this.ease())},ac.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):D(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},ac.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a=Mr(n),o=ua.ns.qualify(n);return yu(this,"attr."+n,t,o.local?u:i)},ac.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ua.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},ac.style=function(n,t,e){function r(){this.style.removeProperty(n)}function i(t){return null==t?r:(t+="",function(){var r,i=oa.getComputedStyle(this,null).getPropertyValue(n);return i!==t&&(r=a(i,t),function(t){this.style.setProperty(n,r(t),e)})})}var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}var a=Mr(n);return yu(this,"style."+n,t,i)},ac.styleTween=function(n,t,e){function r(r,i){var u=t.call(this,r,i,oa.getComputedStyle(this,null).getPropertyValue(n));return u&&function(t){this.style.setProperty(n,u(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},ac.text=function(n){return yu(this,"text",n,Mu)},ac.remove=function(){return this.each("end.transition",function(){var n;!this.__transition__&&(n=this.parentNode)&&n.removeChild(this)})},ac.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=ua.ease.apply(ua,arguments)),D(this,function(e){e.__transition__[t].ease=n}))},ac.delay=function(n){var t=this.id;return D(this,"function"==typeof n?function(e,r,i){e.__transition__[t].delay=n.call(e,e.__data__,r,i)|0}:(n|=0,function(e){e.__transition__[t].delay=n}))},ac.duration=function(n){var t=this.id;return D(this,"function"==typeof n?function(e,r,i){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,i)|0)}:(n=Math.max(1,0|n),function(e){e.__transition__[t].duration=n}))},ac.each=function(n,t){var e=this.id;if(arguments.length<2){var r=cc,i=rc;rc=e,D(this,function(t,r,i){cc=t.__transition__[e],n.call(t,t.__data__,r,i)}),cc=r,rc=i}else D(this,function(r){r.__transition__[e].event.on(n,t)});return this},ac.transition=function(){for(var n,t,e,r,i=this.id,u=++oc,a=[],o=0,c=this.length;c>o;o++){a.push(n=[]);for(var t=this[o],l=0,f=t.length;f>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[i]),r.delay+=r.duration,xu(e,l,u,r)),n.push(e)}return vu(a,u)},ua.svg.axis=function(){function n(n){n.each(function(){var n,s=ua.select(this),h=null==l?e.ticks?e.ticks.apply(e,c):e.domain():l,g=null==t?e.tickFormat?e.tickFormat.apply(e,c):String:t,p=wu(e,h,f),d=s.selectAll(".tick.minor").data(p,String),m=d.enter().insert("line",".tick").attr("class","tick minor").style("opacity",1e-6),v=ua.transition(d.exit()).style("opacity",1e-6).remove(),y=ua.transition(d).style("opacity",1),M=s.selectAll(".tick.major").data(h,String),x=M.enter().insert("g","path").attr("class","tick major").style("opacity",1e-6),b=ua.transition(M.exit()).style("opacity",1e-6).remove(),_=ua.transition(M).style("opacity",1),w=Hi(e),S=s.selectAll(".domain").data([0]),E=(S.enter().append("path").attr("class","domain"),ua.transition(S)),k=e.copy(),A=this.__chart__||k;this.__chart__=k,x.append("line"),x.append("text");var N=x.select("line"),q=_.select("line"),T=M.select("text").text(g),C=x.select("text"),z=_.select("text");switch(r){case"bottom":n=bu,m.attr("y2",u),y.attr("x2",0).attr("y2",u),N.attr("y2",i),C.attr("y",Math.max(i,0)+o),q.attr("x2",0).attr("y2",i),z.attr("x",0).attr("y",Math.max(i,0)+o),T.attr("dy",".71em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+a+"V0H"+w[1]+"V"+a);break;case"top":n=bu,m.attr("y2",-u),y.attr("x2",0).attr("y2",-u),N.attr("y2",-i),C.attr("y",-(Math.max(i,0)+o)),q.attr("x2",0).attr("y2",-i),z.attr("x",0).attr("y",-(Math.max(i,0)+o)),T.attr("dy","0em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+-a+"V0H"+w[1]+"V"+-a);break;case"left":n=_u,m.attr("x2",-u),y.attr("x2",-u).attr("y2",0),N.attr("x2",-i),C.attr("x",-(Math.max(i,0)+o)),q.attr("x2",-i).attr("y2",0),z.attr("x",-(Math.max(i,0)+o)).attr("y",0),T.attr("dy",".32em").style("text-anchor","end"),E.attr("d","M"+-a+","+w[0]+"H0V"+w[1]+"H"+-a);break;case"right":n=_u,m.attr("x2",u),y.attr("x2",u).attr("y2",0),N.attr("x2",i),C.attr("x",Math.max(i,0)+o),q.attr("x2",i).attr("y2",0),z.attr("x",Math.max(i,0)+o).attr("y",0),T.attr("dy",".32em").style("text-anchor","start"),E.attr("d","M"+a+","+w[0]+"H0V"+w[1]+"H"+a)}if(e.ticks)x.call(n,A),_.call(n,k),b.call(n,k),m.call(n,A),y.call(n,k),v.call(n,k);else{var D=k.rangeBand()/2,j=function(n){return k(n)+D};x.call(n,j),_.call(n,j)}})}var t,e=ua.scale.linear(),r=lc,i=6,u=6,a=6,o=3,c=[10],l=null,f=0;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in fc?t+"":lc,n):r},n.ticks=function(){return arguments.length?(c=arguments,n):c},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t,e){if(!arguments.length)return i;var r=arguments.length-1;return i=+t,u=r>1?+e:i,a=r>0?+arguments[r]:i,n},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(t){return arguments.length?(f=+t,n):f},n};var lc="bottom",fc={top:1,right:1,bottom:1,left:1};ua.svg.brush=function(){function n(u){u.each(function(){var u,a=ua.select(this),l=a.selectAll(".background").data([0]),s=a.selectAll(".extent").data([0]),h=a.selectAll(".resize").data(f,String);a.style("pointer-events","all").on("mousedown.brush",i).on("touchstart.brush",i),l.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),s.enter().append("rect").attr("class","extent").style("cursor","move"),h.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return sc[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),h.style("display",n.empty()?"none":null),h.exit().remove(),o&&(u=Hi(o),l.attr("x",u[0]).attr("width",u[1]-u[0]),e(a)),c&&(u=Hi(c),l.attr("y",u[0]).attr("height",u[1]-u[0]),r(a)),t(a)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)][0]+","+s[+/^s/.test(n)][1]+")"})}function e(n){n.select(".extent").attr("x",s[0][0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1][0]-s[0][0])}function r(n){n.select(".extent").attr("y",s[0][1]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",s[1][1]-s[0][1])}function i(){function i(){var n=ua.event.changedTouches;
return n?ua.touches(y,n)[0]:ua.mouse(y)}function f(){ua.event.keyCode==32&&(E||(m=null,k[0]-=s[1][0],k[1]-=s[1][1],E=2),l())}function h(){ua.event.keyCode==32&&2==E&&(k[0]+=s[1][0],k[1]+=s[1][1],E=0,l())}function g(){var n=i(),u=!1;v&&(n[0]+=v[0],n[1]+=v[1]),E||(ua.event.altKey?(m||(m=[(s[0][0]+s[1][0])/2,(s[0][1]+s[1][1])/2]),k[0]=s[+(n[0]<m[0])][0],k[1]=s[+(n[1]<m[1])][1]):m=null),w&&p(n,o,0)&&(e(b),u=!0),S&&p(n,c,1)&&(r(b),u=!0),u&&(t(b),x({type:"brush",mode:E?"move":"resize"}))}function p(n,t,e){var r,i,a=Hi(t),o=a[0],c=a[1],l=k[e],f=s[1][e]-s[0][e];return E&&(o-=l,c-=f+l),r=Math.max(o,Math.min(c,n[e])),E?i=(r+=l)+f:(m&&(l=Math.max(o,Math.min(c,2*m[e]-r))),r>l?(i=r,r=l):i=l),s[0][e]!==r||s[1][e]!==i?(u=null,s[0][e]=r,s[1][e]=i,!0):void 0}function d(){g(),b.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ua.select("body").style("cursor",null),A.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),x({type:"brushend"}),l()}var m,v,y=this,M=ua.select(ua.event.target),x=a.of(y,arguments),b=ua.select(y),_=M.datum(),w=!/^(n|s)$/.test(_)&&o,S=!/^(e|w)$/.test(_)&&c,E=M.classed("extent"),k=i(),A=ua.select(oa).on("mousemove.brush",g).on("mouseup.brush",d).on("touchmove.brush",g).on("touchend.brush",d).on("keydown.brush",f).on("keyup.brush",h);if(E)k[0]=s[0][0]-k[0],k[1]=s[0][1]-k[1];else if(_){var N=+/w$/.test(_),q=+/^n/.test(_);v=[s[1-N][0]-k[0],s[1-q][1]-k[1]],k[0]=s[N][0],k[1]=s[q][1]}else ua.event.altKey&&(m=k.slice());b.style("pointer-events","none").selectAll(".resize").style("display",null),ua.select("body").style("cursor",M.style("cursor")),x({type:"brushstart"}),g(),l()}var u,a=h(n,"brushstart","brush","brushend"),o=null,c=null,f=hc[0],s=[[0,0],[0,0]];return n.x=function(t){return arguments.length?(o=t,f=hc[!o<<1|!c],n):o},n.y=function(t){return arguments.length?(c=t,f=hc[!o<<1|!c],n):c},n.extent=function(t){var e,r,i,a,l;return arguments.length?(u=[[0,0],[0,0]],o&&(e=t[0],r=t[1],c&&(e=e[0],r=r[0]),u[0][0]=e,u[1][0]=r,o.invert&&(e=o(e),r=o(r)),e>r&&(l=e,e=r,r=l),s[0][0]=0|e,s[1][0]=0|r),c&&(i=t[0],a=t[1],o&&(i=i[1],a=a[1]),u[0][1]=i,u[1][1]=a,c.invert&&(i=c(i),a=c(a)),i>a&&(l=i,i=a,a=l),s[0][1]=0|i,s[1][1]=0|a),n):(t=u||s,o&&(e=t[0][0],r=t[1][0],u||(e=s[0][0],r=s[1][0],o.invert&&(e=o.invert(e),r=o.invert(r)),e>r&&(l=e,e=r,r=l))),c&&(i=t[0][1],a=t[1][1],u||(i=s[0][1],a=s[1][1],c.invert&&(i=c.invert(i),a=c.invert(a)),i>a&&(l=i,i=a,a=l))),o&&c?[[e,i],[r,a]]:o?[e,r]:c&&[i,a])},n.clear=function(){return u=null,s[0][0]=s[0][1]=s[1][0]=s[1][1]=0,n},n.empty=function(){return o&&s[0][0]===s[1][0]||c&&s[0][1]===s[1][1]},ua.rebind(n,a,"on")};var sc={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},hc=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];ua.time={};var gc=Date,pc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Su.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){dc.setUTCDate.apply(this._,arguments)},setDay:function(){dc.setUTCDay.apply(this._,arguments)},setFullYear:function(){dc.setUTCFullYear.apply(this._,arguments)},setHours:function(){dc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){dc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){dc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){dc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){dc.setUTCSeconds.apply(this._,arguments)},setTime:function(){dc.setTime.apply(this._,arguments)}};var dc=Date.prototype,mc="%a %b %e %X %Y",vc="%m/%d/%Y",yc="%H:%M:%S",Mc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],xc=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],bc=["January","February","March","April","May","June","July","August","September","October","November","December"],_c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];ua.time.year=Eu(function(n){return n=ua.time.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ua.time.years=ua.time.year.range,ua.time.years.utc=ua.time.year.utc.range,ua.time.day=Eu(function(n){var t=new gc(1970,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ua.time.days=ua.time.day.range,ua.time.days.utc=ua.time.day.utc.range,ua.time.dayOfYear=function(n){var t=ua.time.year(n);return Math.floor((n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*6e4)/864e5)},pc.forEach(function(n,t){n=n.toLowerCase(),t=7-t;var e=ua.time[n]=Eu(function(n){return(n=ua.time.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+Math.floor(t)*7)},function(n){var e=ua.time.year(n).getDay();return Math.floor((ua.time.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ua.time[n+"s"]=e.range,ua.time[n+"s"].utc=e.utc.range,ua.time[n+"OfYear"]=function(n){var e=ua.time.year(n).getDay();return Math.floor((ua.time.dayOfYear(n)+(e+t)%7)/7)}}),ua.time.week=ua.time.sunday,ua.time.weeks=ua.time.sunday.range,ua.time.weeks.utc=ua.time.sunday.utc.range,ua.time.weekOfYear=ua.time.sundayOfYear,ua.time.format=function(n){function t(t){for(var r,i,u,a=[],o=-1,c=0;++o<e;)n.charCodeAt(o)===37&&(a.push(n.substring(c,o)),(i=qc[r=n.charAt(++o)])!=null&&(r=n.charAt(++o)),(u=Tc[r])&&(r=u(t,null==i?"e"===r?" ":"0":i)),a.push(r),c=o+1);return a.push(n.substring(c,o)),a.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},r=Au(e,n,t,0);if(r!=t.length)return null;"p"in e&&(e.H=e.H%12+e.p*12);var i=new gc;return i.setFullYear(e.y,e.m,e.d),i.setHours(e.H,e.M,e.S,e.L),i},t.toString=function(){return n},t};var wc=Nu(Mc),Sc=Nu(xc),Ec=Nu(bc),kc=qu(bc),Ac=Nu(_c),Nc=qu(_c),qc={"-":"",_:" ",0:"0"},Tc={a:function(n){return xc[n.getDay()]},A:function(n){return Mc[n.getDay()]},b:function(n){return _c[n.getMonth()]},B:function(n){return bc[n.getMonth()]},c:ua.time.format(mc),d:function(n,t){return Tu(n.getDate(),t,2)},e:function(n,t){return Tu(n.getDate(),t,2)},H:function(n,t){return Tu(n.getHours(),t,2)},I:function(n,t){return Tu(n.getHours()%12||12,t,2)},j:function(n,t){return Tu(1+ua.time.dayOfYear(n),t,3)},L:function(n,t){return Tu(n.getMilliseconds(),t,3)},m:function(n,t){return Tu(n.getMonth()+1,t,2)},M:function(n,t){return Tu(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=12?"PM":"AM"},S:function(n,t){return Tu(n.getSeconds(),t,2)},U:function(n,t){return Tu(ua.time.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Tu(ua.time.mondayOfYear(n),t,2)},x:ua.time.format(vc),X:ua.time.format(yc),y:function(n,t){return Tu(n.getFullYear()%100,t,2)},Y:function(n,t){return Tu(n.getFullYear()%1e4,t,4)},Z:$u,"%":function(){return"%"}},Cc={a:Cu,A:zu,b:Du,B:ju,c:Lu,d:Uu,e:Uu,H:Iu,I:Iu,L:Zu,m:Yu,M:Vu,p:Bu,S:Xu,x:Fu,X:Hu,y:Ru,Y:Pu},zc=/^\s*\d+/,Dc=ua.map({am:0,pm:1});ua.time.format.utc=function(n){function t(n){try{gc=Su;var t=new gc;return t._=n,e(t)}finally{gc=Date}}var e=ua.time.format(n);return t.parse=function(n){try{gc=Su;var t=e.parse(n);return t&&t._}finally{gc=Date}},t.toString=e.toString,t};var jc=ua.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");ua.time.format.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Ju:jc,Ju.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Ju.toString=jc.toString,ua.time.second=Eu(function(n){return new gc(Math.floor(n/1e3)*1e3)},function(n,t){n.setTime(n.getTime()+Math.floor(t)*1e3)},function(n){return n.getSeconds()}),ua.time.seconds=ua.time.second.range,ua.time.seconds.utc=ua.time.second.utc.range,ua.time.minute=Eu(function(n){return new gc(Math.floor(n/6e4)*6e4)},function(n,t){n.setTime(n.getTime()+Math.floor(t)*6e4)},function(n){return n.getMinutes()}),ua.time.minutes=ua.time.minute.range,ua.time.minutes.utc=ua.time.minute.utc.range,ua.time.hour=Eu(function(n){var t=n.getTimezoneOffset()/60;return new gc((Math.floor(n/36e5-t)+t)*36e5)},function(n,t){n.setTime(n.getTime()+Math.floor(t)*36e5)},function(n){return n.getHours()}),ua.time.hours=ua.time.hour.range,ua.time.hours.utc=ua.time.hour.utc.range,ua.time.month=Eu(function(n){return n=ua.time.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ua.time.months=ua.time.month.range,ua.time.months.utc=ua.time.month.utc.range;var Lc=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Fc=[[ua.time.second,1],[ua.time.second,5],[ua.time.second,15],[ua.time.second,30],[ua.time.minute,1],[ua.time.minute,5],[ua.time.minute,15],[ua.time.minute,30],[ua.time.hour,1],[ua.time.hour,3],[ua.time.hour,6],[ua.time.hour,12],[ua.time.day,1],[ua.time.day,2],[ua.time.week,1],[ua.time.month,1],[ua.time.month,3],[ua.time.year,1]],Hc=[[ua.time.format("%Y"),Ht],[ua.time.format("%B"),function(n){return n.getMonth()}],[ua.time.format("%b %d"),function(n){return n.getDate()!=1}],[ua.time.format("%a %d"),function(n){return n.getDay()&&n.getDate()!=1}],[ua.time.format("%I %p"),function(n){return n.getHours()}],[ua.time.format("%I:%M"),function(n){return n.getMinutes()}],[ua.time.format(":%S"),function(n){return n.getSeconds()}],[ua.time.format(".%L"),function(n){return n.getMilliseconds()}]],Pc=ua.scale.linear(),Rc=Wu(Hc);Fc.year=function(n,t){return Pc.domain(n.map(na)).ticks(t).map(Qu)},ua.time.scale=function(){return Gu(ua.scale.linear(),Fc,Rc)};var Oc=Fc.map(function(n){return[n[0].utc,n[1]]}),Yc=[[ua.time.format.utc("%Y"),Ht],[ua.time.format.utc("%B"),function(n){return n.getUTCMonth()}],[ua.time.format.utc("%b %d"),function(n){return n.getUTCDate()!=1}],[ua.time.format.utc("%a %d"),function(n){return n.getUTCDay()&&n.getUTCDate()!=1}],[ua.time.format.utc("%I %p"),function(n){return n.getUTCHours()}],[ua.time.format.utc("%I:%M"),function(n){return n.getUTCMinutes()}],[ua.time.format.utc(":%S"),function(n){return n.getUTCSeconds()}],[ua.time.format.utc(".%L"),function(n){return n.getUTCMilliseconds()}]],Uc=Wu(Yc);return Oc.year=function(n,t){return Pc.domain(n.map(ea)).ticks(t).map(ta)},ua.time.scale.utc=function(){return Gu(ua.scale.linear(),Oc,Uc)},ua.text=st(function(n){return n.responseText}),ua.json=function(n,t){return ht(n,"application/json",ra,t)},ua.html=function(n,t){return ht(n,"text/html",ia,t)},ua.xml=st(function(n){return n.responseXML}),ua}();
/*! pie-chart - v1.0.0 - 2013-11-11
* https://github.com/n3-charts/pie-chart
* Copyright (c) 2013 n3-charts  Licensed ,  */
angular.module("n3-pie-chart",["n3-pie-utils"]).directive("pieChart",["$utils",function(a){var b=function(b,c){var d,e=a.getDefaultMargins(),f=function(a){a.width=c[0].parentElement.offsetWidth||900,a.height=c[0].parentElement.offsetHeight||500},g=function(b,c){a.updatePaths(d,b,e,c).updateLegend(d,b,e,c)},h=function(b,d){a.clean(c[0]),f(e),i(b,d,e)},i=function(b,e,f){b&&e&&(e=a.sanitizeOptions(e),d=a.bootstrap(c[0],f),a.draw(d).updatePaths(d,b,f,e).addLegend(d).updateLegend(d,b,f,e))};b.$watch("data",function(c){c=a.addDataForGauge(c,b.options),d?g(c,b.options):h(c,b.options)},!0),b.$watch("options",function(c){var d=a.addDataForGauge(b.data,c);h(d,c)},!0)};return{replace:!0,restrict:"E",scope:{data:"=",options:"="},template:"<div></div>",link:b}}]),angular.module("n3-pie-utils",[]).factory("$utils",[function(){return{draw:function(a){return a.append("g").attr({id:"n3-pie-arcs"}),this},updatePaths:function(a,b,c,d){var e=this.getTools(c,d),f=function(a){var b=this.__current?this.__current:{startAngle:a.startAngle,endAngle:a.startAngle},c={startAngle:a.startAngle,endAngle:a.endAngle},d=d3.interpolate(b,c);return function(a){return e.arc(d(a))}},g=a.selectAll("#n3-pie-arcs").selectAll(".arc").data(e.pie(b),function(a){return a.data.label});return g.enter().append("path").attr({"class":"arc",id:function(a,b){return"arc_"+b}}).style({fill:function(a){return a.data.color},"fill-opacity":.8}),g.transition().duration(250).attrTween("d",f).each("end",function(a){this.__current={startAngle:a.startAngle,endAngle:a.endAngle}}),g.exit().remove(),this},getTools:function(a,b){var c=this.getRadius(a),d=Math.max(c-b.thickness,0),e=d3.svg.arc().outerRadius(c).innerRadius(d),f=d3.layout.pie().value(function(a){return a.value});return"gauge"===b.mode&&f.sort(null),{pie:f,arc:e}},addLegend:function(a){a.append("g").attr("id","n3-pie-legend");return this},updateLegend:function(a,b,c,d){return"gauge"===d.mode?this.updateGaugeLegend(a,b,c,d):this.updateRegularLegend(a,b,c,d),this},updateRegularLegend:function(a,b,c,d){var e=this.getRadius(c),f=e-d.thickness,g=b.length*f/10,h=d3.scale.linear().range([-g,g]).domain([0,b.length-1]).nice(),i=a.selectAll("#n3-pie-legend").selectAll(".legend-item").data(b,function(a){return a.label});i.enter().append("text").classed("legend-item",!0).on("mouseover",this.onMouseOver(a)).on("mouseout",this.onMouseOut(a)),i.text(this.getLegendLabelFunction(f)).attr({"text-anchor":"middle",transform:function(a,b){return"translate(0, "+h(b)+")"}}).style({"font-family":"monospace","font-size":Math.max(12,f/10)+"px",fill:function(a){return a.color},"fill-opacity":.8}),i.exit().remove()},updateGaugeLegend:function(a,b,c,d){var e=(this.getRadius(c)-d.thickness)/2;if(!(0>e)){var f=a.selectAll("#n3-pie-legend"),g=f.selectAll(".legend-title").data(b.filter(function(a){return!a.__isComplement}));g.enter().append("text").attr({"class":"legend-title","text-anchor":"middle",y:-e/4+"px"}).style({"font-size":Math.max(e/2,12)+"px",fill:function(a){return a.color},"fill-opacity":.8}),g.text(function(a){return a.label}),g.exit().remove();var h=f.selectAll(".legend-value").data(b.filter(function(a){return!a.__isComplement}));h.enter().append("text").attr({"class":"legend-value","text-anchor":"middle",y:e/1.5+"px"}).style({"font-size":e+"px",fill:function(a){return a.color},"fill-opacity":.8}),h.text(function(a){return a.value+(a.suffix||"")}),h.exit().remove()}},getLegendLabelFunction:function(a){var b=this;return function(c){return 40>a?"":100>a?c.label:b.getLegendLabel(c.label,c.value,20)}},onMouseOver:function(a){return function(b,c){var d=function(a){return a.transition().duration(50).style({opacity:function(a,b){return b===c?"1":"0.4"}})};d(a.selectAll(".legend-item")),d(a.selectAll(".arc"))}},onMouseOut:function(a){return function(){var b=function(a){return a.transition().duration(50).style({opacity:1})};b(a.selectAll(".legend-item")),b(a.selectAll(".arc"))}},getLegendLabel:function(a,b,c){for(var d=[],e=0;c>e;e++)d.push(".");return a+=" ",b=" "+b,a.split("").forEach(function(a,b){d[b]=a}),b.split("").forEach(function(a,e){d[c-b.length+e]=a}),d.join("")},addDataForGauge:function(a,b){return b&&"gauge"===b.mode&&1===a.length?(a=a.concat(),a.push({value:b.total-a[0].value,color:"white",__isComplement:!0}),a):a},getDefaultMargins:function(){return{top:10,right:10,bottom:10,left:10}},clean:function(a){d3.select(a).select("svg").remove()},bootstrap:function(a,b){d3.select(a).classed("chart",!0);var c=b.width,d=b.height,e=d3.select(a).append("svg").attr("width",c).attr("height",d).append("g").attr("transform","translate("+.5*b.width+","+.5*b.height+")");return e},getRadius:function(a){var b=a;return.5*Math.min(b.width-b.left-b.right,b.height-b.top-b.bottom)},looksLikeSameSeries:function(a,b){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){if(b[c].label!==a[c].label)return!1;if(b[c].color!==a[c].color)return!1}return!0},sanitizeOptions:function(a){return a.thickness=void 0===a.thickness?20:parseInt(a.thickness),"gauge"===a.mode&&this.sanitizeGaugeOptions(a),a},sanitizeGaugeOptions:function(a){a.total=void 0===a.total?100:parseInt(a.total)}}}]);
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);