/*! jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):sb&&sb.set(a,b,c)}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ub.id=ub.name=ub.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,fc=l.ajax=!!fc,fc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):b.jsonp!==!1&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){if(!d.implementation.createHTMLDocument)return!1;var a=d.implementation.createHTMLDocument("");return a.body.innerHTML="<form></form><form></form>",2===a.body.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),c.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=lc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){
n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});

/*!
 * Knockout JavaScript library v3.4.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var x=this||(0,eval)("this"),u=x.document,M=x.navigator,v=x.jQuery,F=x.JSON;(function(n){"function"===typeof define&&define.amd?define(["exports","require"],n):"object"===typeof exports&&"object"===typeof module?n(module.exports||exports):n(x.ko={})})(function(N,O){function J(a,c){return null===a||typeof a in T?a===c:!1}function U(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function V(b,c){var d;return function(){clearTimeout(d);d=a.a.setTimeout(b,c)}}function W(a,
c){c&&c!==I?"beforeChange"===c?this.Kb(a):this.Ha(a,c):this.Lb(a)}function X(a,c){null!==c&&c.k&&c.k()}function Y(a,c){var d=this.Hc,e=d[s];e.R||(this.lb&&this.Ma[c]?(d.Pb(c,a,this.Ma[c]),this.Ma[c]=null,--this.lb):e.r[c]||d.Pb(c,a,e.s?{ia:a}:d.uc(a)))}function K(b,c,d,e){a.d[b]={init:function(b,g,k,l,m){var h,r;a.m(function(){var q=a.a.c(g()),p=!d!==!q,A=!r;if(A||c||p!==h)A&&a.va.Aa()&&(r=a.a.ua(a.f.childNodes(b),!0)),p?(A||a.f.da(b,a.a.ua(r)),a.eb(e?e(m,q):m,b)):a.f.xa(b),h=p},null,{i:b});return{controlsDescendantBindings:!0}}};
a.h.ta[b]=!1;a.f.Z[b]=!0}var a="undefined"!==typeof N?N:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.G=function(a,c,d){a[c]=d};a.version="3.4.0";a.b("version",a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1};a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var h=b[c].match(r)||
[];a.a.q(d.match(r),function(b){a.a.pa(h,b,e)});b[c]=h.join(" ")}var f={__proto__:[]}instanceof Array,g="function"===typeof Symbol,k={},l={};k[M&&/Firefox\/2/i.test(M.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];k.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(k,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)l[b[c]]=a});var m={propertychange:!0},h=u&&function(){for(var a=3,b=u.createElement("div"),c=
b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),r=/\S+/g;return{cc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],q:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},o:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Sb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d))return a[d];
return null},La:function(b,c){var d=a.a.o(b,c);0<d?b.splice(d,1):0===d&&b.shift()},Tb:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<e;d++)0>a.a.o(c,b[d])&&c.push(b[d]);return c},fb:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)c.push(b(a[d],d));return c},Ka:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c},ra:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},pa:function(b,c,d){var e=
a.a.o(a.a.zb(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},ka:f,extend:c,Xa:d,Ya:f?d:c,D:b,Ca:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},ob:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},jc:function(b){b=a.a.V(b);for(var c=(b[0]&&b[0].ownerDocument||u).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.$(b[d]));return c},ua:function(b,c){for(var d=0,e=b.length,h=[];d<e;d++){var m=b[d].cloneNode(!0);h.push(c?a.$(m):m)}return h},
da:function(b,c){a.a.ob(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},qc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],h=e.parentNode,m=0,l=c.length;m<l;m++)h.insertBefore(c[m],e);m=0;for(l=d.length;m<l;m++)a.removeNode(d[m])}},za:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),
c=c.nextSibling;a.push(d)}}return a},sc:function(a,b){7>h?a.setAttribute("selected",b):a.selected=b},$a:function(a){return null===a||a===n?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},nd:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Mc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=
b;)a=a.parentNode;return!!a},nb:function(b){return a.a.Mc(b,b.ownerDocument.documentElement)},Qb:function(b){return!!a.a.Sb(b,a.a.nb)},A:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},Wb:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Wb(b),c)},$b:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},p:function(b,c,d){var e=a.a.Wb(d);d=h&&m[c];if(a.options.useOnlyNativeEvents||
d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var l=function(a){e.call(b,a)},f="on"+c;b.attachEvent(f,l);a.a.F.oa(b,function(){b.detachEvent(f,l)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else v(b).bind(c,e)},Da:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.A(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==
d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof u.createEvent)if("function"==typeof b.dispatchEvent)d=u.createEvent(l[c]||"HTMLEvents"),d.initEvent(c,!0,!0,x,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c)},c:function(b){return a.H(b)?
b():b},zb:function(b){return a.H(b)?b.t():b},bb:function(b,c,d){var h;c&&("object"===typeof b.classList?(h=b.classList[d?"add":"remove"],a.a.q(c.match(r),function(a){h.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},Za:function(b,c){var d=a.a.c(c);if(null===d||d===n)d="";var e=a.f.firstChild(b);!e||3!=e.nodeType||a.f.nextSibling(e)?a.f.da(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Rc(b)},rc:function(a,b){a.name=b;if(7>=h)try{a.mergeAttributes(u.createElement("<input name='"+
a.name+"'/>"),!1)}catch(c){}},Rc:function(a){9<=h&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Nc:function(a){if(h){var b=a.style.width;a.style.width=0;a.style.width=b}},hd:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},V:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Yb:function(a){return g?Symbol(a):a},rd:6===h,sd:7===h,C:h,ec:function(b,c){for(var d=a.a.V(b.getElementsByTagName("input")).concat(a.a.V(b.getElementsByTagName("textarea"))),
e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},h=[],m=d.length-1;0<=m;m--)e(d[m])&&h.push(d[m]);return h},ed:function(b){return"string"==typeof b&&(b=a.a.$a(b))?F&&F.parse?F.parse(b):(new Function("return "+b))():null},Eb:function(b,c,d){if(!F||!F.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return F.stringify(a.a.c(b),c,d)},fd:function(c,d,e){e=e||{};var h=e.params||{},m=e.includeFields||this.cc,l=c;if("object"==typeof c&&"form"===a.a.A(c))for(var l=c.action,f=m.length-1;0<=f;f--)for(var g=a.a.ec(c,m[f]),k=g.length-1;0<=k;k--)h[g[k].name]=g[k].value;d=a.a.c(d);var r=u.createElement("form");r.style.display="none";r.action=l;r.method="post";for(var n in d)c=u.createElement("input"),c.type="hidden",c.name=n,c.value=a.a.Eb(a.a.c(d[n])),r.appendChild(c);b(h,function(a,b){var c=u.createElement("input");
c.type="hidden";c.name=a;c.value=b;r.appendChild(c)});u.body.appendChild(r);e.submitter?e.submitter(r):r.submit();setTimeout(function(){r.parentNode.removeChild(r)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.q);a.b("utils.arrayFirst",a.a.Sb);a.b("utils.arrayFilter",a.a.Ka);a.b("utils.arrayGetDistinctValues",a.a.Tb);a.b("utils.arrayIndexOf",a.a.o);a.b("utils.arrayMap",a.a.fb);a.b("utils.arrayPushAll",a.a.ra);a.b("utils.arrayRemoveItem",a.a.La);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.cc);a.b("utils.getFormFields",a.a.ec);a.b("utils.peekObservable",a.a.zb);a.b("utils.postJson",a.a.fd);a.b("utils.parseJson",a.a.ed);a.b("utils.registerEventHandler",a.a.p);a.b("utils.stringifyJson",a.a.Eb);a.b("utils.range",a.a.hd);a.b("utils.toggleDomNodeCssClass",a.a.bb);a.b("utils.triggerEvent",a.a.Da);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.D);a.b("utils.addOrRemoveItem",a.a.pa);a.b("utils.setTextContent",a.a.Za);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=
function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.e=new function(){function a(b,g){var k=b[d];if(!k||"null"===k||!e[k]){if(!g)return n;k=b[d]="ko"+c++;e[k]={}}return e[k]}var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===n?n:e[d]},set:function(c,d,e){if(e!==n||a(c,!1)!==n)a(c,!0)[d]=
e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},I:function(){return c++ +d}}};a.b("utils.domData",a.a.e);a.b("utils.domData.clear",a.a.e.clear);a.a.F=new function(){function b(b,c){var e=a.a.e.get(b,d);e===n&&c&&(e=[],a.a.e.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](d);a.a.e.clear(d);a.a.F.cleanExternalData(d);if(f[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.e.I(),e={1:!0,8:!0,9:!0},
f={1:!0,9:!0};return{oa:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},pc:function(c,e){var l=b(c,!1);l&&(a.a.La(l,e),0==l.length&&a.a.e.set(c,d,n))},$:function(b){if(e[b.nodeType]&&(c(b),f[b.nodeType])){var d=[];a.a.ra(d,b.getElementsByTagName("*"));for(var l=0,m=d.length;l<m;l++)c(d[l])}return b},removeNode:function(b){a.$(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a])}}};
a.$=a.a.F.$;a.removeNode=a.a.F.removeNode;a.b("cleanNode",a.$);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.F);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.F.oa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.F.pc);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},
g=8>=a.a.C;a.a.ma=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var h=e[0];h.parentNode&&11!==h.parentNode.nodeType;)h=h.parentNode;h.parentNode&&h.parentNode.removeChild(h)}}else{(e=d)||(e=u);var h=e.parentWindow||e.defaultView||x,r=a.a.$a(c).toLowerCase(),q=e.createElement("div"),p;p=(r=r.match(/^<([a-z]+)[ >]/))&&f[r[1]]||b;r=p[0];p="ignored<div>"+p[1]+c+p[2]+"</div>";"function"==typeof h.innerShiv?q.appendChild(h.innerShiv(p)):(g&&e.appendChild(q),
q.innerHTML=p,g&&q.parentNode.removeChild(q));for(;r--;)q=q.lastChild;e=a.a.V(q.lastChild.childNodes)}return e};a.a.Cb=function(b,c){a.a.ob(b);c=a.a.c(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ma(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.ma);a.b("utils.setHtml",a.a.Cb);a.M=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.M.lc(c.nodeValue);null!=f&&e.push({Lc:c,cd:f})}else if(1==c.nodeType)for(var f=
0,g=c.childNodes,k=g.length;f<k;f++)b(g[f],e)}var c={};return{wb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},xc:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),
!0}finally{delete c[a]}},yc:function(c,e){var f=[];b(c,f);for(var g=0,k=f.length;g<k;g++){var l=f[g].Lc,m=[l];e&&a.a.ra(m,e);a.M.xc(f[g].cd,m);l.nodeValue="";l.parentNode&&l.parentNode.removeChild(l)}},lc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.M);a.b("memoization.memoize",a.M.wb);a.b("memoization.unmemoize",a.M.xc);a.b("memoization.parseMemoText",a.M.lc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.M.yc);a.Y=function(){function b(){if(e)for(var b=
e,c=0,m;g<e;)if(m=d[g++]){if(g>b){if(5E3<=++c){g=e;a.a.$b(Error("'Too much recursion' after processing "+c+" task groups."));break}b=e}try{m()}catch(h){a.a.$b(h)}}}function c(){b();g=e=d.length=0}var d=[],e=0,f=1,g=0;return{scheduler:x.MutationObserver?function(a){var b=u.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):u&&"onreadystatechange"in u.createElement("script")?function(a){var b=u.createElement("script");b.onreadystatechange=
function(){b.onreadystatechange=null;u.documentElement.removeChild(b);b=null;a()};u.documentElement.appendChild(b)}:function(a){setTimeout(a,0)},Wa:function(b){e||a.Y.scheduler(c);d[e++]=b;return f++},cancel:function(a){a-=f-e;a>=g&&a<e&&(d[a]=null)},resetForTesting:function(){var a=e-g;g=e=d.length=0;return a},md:b}}();a.b("tasks",a.Y);a.b("tasks.schedule",a.Y.Wa);a.b("tasks.runEarly",a.Y.md);a.ya={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.B({read:b,write:function(e){clearTimeout(d);
d=a.a.setTimeout(function(){b(e)},c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.cb=!1;f="notifyWhenChangesStop"==e?V:U;a.Ta(function(a){return f(a,d)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.cb||(b.cb=!0,b.Ta(function(c){var e;return function(){a.Y.cancel(e);e=a.Y.Wa(c);b.notifySubscribers(n,"dirty")}}))},notify:function(a,c){a.equalityComparer=
"always"==c?null:J}};var T={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.ya);a.vc=function(b,c,d){this.ia=b;this.gb=c;this.Kc=d;this.R=!1;a.G(this,"dispose",this.k)};a.vc.prototype.k=function(){this.R=!0;this.Kc()};a.J=function(){a.a.Ya(this,D);D.rb(this)};var I="change",D={rb:function(a){a.K={};a.Nb=1},X:function(b,c,d){var e=this;d=d||I;var f=new a.vc(e,c?b.bind(c):b,function(){a.a.La(e.K[d],f);e.Ia&&e.Ia(d)});e.sa&&e.sa(d);e.K[d]||(e.K[d]=[]);e.K[d].push(f);return f},notifySubscribers:function(b,
c){c=c||I;c===I&&this.zc();if(this.Pa(c))try{a.l.Ub();for(var d=this.K[c].slice(0),e=0,f;f=d[e];++e)f.R||f.gb(b)}finally{a.l.end()}},Na:function(){return this.Nb},Uc:function(a){return this.Na()!==a},zc:function(){++this.Nb},Ta:function(b){var c=this,d=a.H(c),e,f,g;c.Ha||(c.Ha=c.notifySubscribers,c.notifySubscribers=W);var k=b(function(){c.Mb=!1;d&&g===c&&(g=c());e=!1;c.tb(f,g)&&c.Ha(f=g)});c.Lb=function(a){c.Mb=e=!0;g=a;k()};c.Kb=function(a){e||(f=a,c.Ha(a,"beforeChange"))}},Pa:function(a){return this.K[a]&&
this.K[a].length},Sc:function(b){if(b)return this.K[b]&&this.K[b].length||0;var c=0;a.a.D(this.K,function(a,b){"dirty"!==a&&(c+=b.length)});return c},tb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},extend:function(b){var c=this;b&&a.a.D(b,function(b,e){var f=a.ya[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.G(D,"subscribe",D.X);a.G(D,"extend",D.extend);a.G(D,"getSubscriptionsCount",D.Sc);a.a.ka&&a.a.Xa(D,Function.prototype);a.J.fn=D;a.hc=function(a){return null!=
a&&"function"==typeof a.X&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.J);a.b("isSubscribable",a.hc);a.va=a.l=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{Ub:b,end:c,oc:function(b){if(e){if(!a.hc(b))throw Error("Only subscribable things can act as dependencies");e.gb.call(e.Gc,b,b.Cc||(b.Cc=++f))}},w:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},Aa:function(){if(e)return e.m.Aa()},Sa:function(){if(e)return e.Sa}}}();a.b("computedContext",
a.va);a.b("computedContext.getDependenciesCount",a.va.Aa);a.b("computedContext.isInitial",a.va.Sa);a.b("ignoreDependencies",a.qd=a.l.w);var E=a.a.Yb("_latestValue");a.N=function(b){function c(){if(0<arguments.length)return c.tb(c[E],arguments[0])&&(c.ga(),c[E]=arguments[0],c.fa()),this;a.l.oc(c);return c[E]}c[E]=b;a.a.ka||a.a.extend(c,a.J.fn);a.J.fn.rb(c);a.a.Ya(c,B);a.options.deferUpdates&&a.ya.deferred(c,!0);return c};var B={equalityComparer:J,t:function(){return this[E]},fa:function(){this.notifySubscribers(this[E])},
ga:function(){this.notifySubscribers(this[E],"beforeChange")}};a.a.ka&&a.a.Xa(B,a.J.fn);var H=a.N.gd="__ko_proto__";B[H]=a.N;a.Oa=function(b,c){return null===b||b===n||b[H]===n?!1:b[H]===c?!0:a.Oa(b[H],c)};a.H=function(b){return a.Oa(b,a.N)};a.Ba=function(b){return"function"==typeof b&&b[H]===a.N||"function"==typeof b&&b[H]===a.B&&b.Vc?!0:!1};a.b("observable",a.N);a.b("isObservable",a.H);a.b("isWriteableObservable",a.Ba);a.b("isWritableObservable",a.Ba);a.b("observable.fn",B);a.G(B,"peek",B.t);a.G(B,
"valueHasMutated",B.fa);a.G(B,"valueWillMutate",B.ga);a.la=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.N(b);a.a.Ya(b,a.la.fn);return b.extend({trackArrayChanges:!0})};a.la.fn={remove:function(b){for(var c=this.t(),d=[],e="function"!=typeof b||a.H(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];e(g)&&(0===d.length&&this.ga(),d.push(g),c.splice(f,1),f--)}d.length&&
this.fa();return d},removeAll:function(b){if(b===n){var c=this.t(),d=c.slice(0);this.ga();c.splice(0,c.length);this.fa();return d}return b?this.remove(function(c){return 0<=a.a.o(b,c)}):[]},destroy:function(b){var c=this.t(),d="function"!=typeof b||a.H(b)?function(a){return a===b}:b;this.ga();for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.fa()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.o(b,c)}):[]},indexOf:function(b){var c=
this();return a.a.o(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ga(),this.t()[d]=c,this.fa())}};a.a.ka&&a.a.Xa(a.la.fn,a.N.fn);a.a.q("pop push reverse shift sort splice unshift".split(" "),function(b){a.la.fn[b]=function(){var a=this.t();this.ga();this.Vb(a,b,arguments);var d=a[b].apply(a,arguments);this.fa();return d===a?this:d}});a.a.q(["slice"],function(b){a.la.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.la);a.ya.trackArrayChanges=function(b,
c){function d(){if(!e){e=!0;var c=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&b!==I||++k;return c.apply(this,arguments)};var d=[].concat(b.t()||[]);f=null;g=b.X(function(c){c=[].concat(c||[]);if(b.Pa("arrayChange")){var e;if(!f||1<k)f=a.a.ib(d,c,b.hb);e=f}d=c;f=null;k=0;e&&e.length&&b.notifySubscribers(e,"arrayChange")})}}b.hb={};c&&"object"==typeof c&&a.a.extend(b.hb,c);b.hb.sparse=!0;if(!b.Vb){var e=!1,f=null,g,k=0,l=b.sa,m=b.Ia;b.sa=function(a){l&&l.call(b,a);"arrayChange"===a&&d()};
b.Ia=function(a){m&&m.call(b,a);"arrayChange"!==a||b.Pa("arrayChange")||(g.k(),e=!1)};b.Vb=function(b,c,d){function m(a,b,c){return l[l.length]={status:a,value:b,index:c}}if(e&&!k){var l=[],g=b.length,t=d.length,G=0;switch(c){case "push":G=g;case "unshift":for(c=0;c<t;c++)m("added",d[c],G+c);break;case "pop":G=g-1;case "shift":g&&m("deleted",b[G],G);break;case "splice":c=Math.min(Math.max(0,0>d[0]?g+d[0]:d[0]),g);for(var g=1===t?g:Math.min(c+(d[1]||0),g),t=c+t-2,G=Math.max(g,t),P=[],n=[],Q=2;c<G;++c,
++Q)c<g&&n.push(m("deleted",b[c],c)),c<t&&P.push(m("added",d[Q],c));a.a.dc(n,P);break;default:return}f=l}}}};var s=a.a.Yb("_state");a.m=a.B=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.pb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}a.l.oc(e);(g.S||g.s&&e.Qa())&&e.aa();return g.T}"object"===typeof b?d=b:(d=d||{},b&&(d.read=
b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={T:n,S:!0,Ra:!1,Fb:!1,R:!1,Va:!1,s:!1,jd:d.read,pb:c||d.owner,i:d.disposeWhenNodeIsRemoved||d.i||null,wa:d.disposeWhen||d.wa,mb:null,r:{},L:0,bc:null};e[s]=g;e.Vc="function"===typeof f;a.a.ka||a.a.extend(e,a.J.fn);a.J.fn.rb(e);a.a.Ya(e,z);d.pure?(g.Va=!0,g.s=!0,a.a.extend(e,$)):d.deferEvaluation&&a.a.extend(e,aa);a.options.deferUpdates&&a.ya.deferred(e,!0);g.i&&(g.Fb=!0,g.i.nodeType||
(g.i=null));g.s||d.deferEvaluation||e.aa();g.i&&e.ba()&&a.a.F.oa(g.i,g.mb=function(){e.k()});return e};var z={equalityComparer:J,Aa:function(){return this[s].L},Pb:function(a,c,d){if(this[s].Va&&c===this)throw Error("A 'pure' computed must not be called recursively");this[s].r[a]=d;d.Ga=this[s].L++;d.na=c.Na()},Qa:function(){var a,c,d=this[s].r;for(a in d)if(d.hasOwnProperty(a)&&(c=d[a],c.ia.Uc(c.na)))return!0},bd:function(){this.Fa&&!this[s].Ra&&this.Fa()},ba:function(){return this[s].S||0<this[s].L},
ld:function(){this.Mb||this.ac()},uc:function(a){if(a.cb&&!this[s].i){var c=a.X(this.bd,this,"dirty"),d=a.X(this.ld,this);return{ia:a,k:function(){c.k();d.k()}}}return a.X(this.ac,this)},ac:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[s].bc),this[s].bc=a.a.setTimeout(function(){b.aa(!0)},c)):b.Fa?b.Fa():b.aa(!0)},aa:function(b){var c=this[s],d=c.wa;if(!c.Ra&&!c.R){if(c.i&&!a.a.nb(c.i)||d&&d()){if(!c.Fb){this.k();return}}else c.Fb=!1;c.Ra=!0;try{this.Qc(b)}finally{c.Ra=!1}c.L||
this.k()}},Qc:function(b){var c=this[s],d=c.Va?n:!c.L,e={Hc:this,Ma:c.r,lb:c.L};a.l.Ub({Gc:e,gb:Y,m:this,Sa:d});c.r={};c.L=0;e=this.Pc(c,e);this.tb(c.T,e)&&(c.s||this.notifySubscribers(c.T,"beforeChange"),c.T=e,c.s?this.zc():b&&this.notifySubscribers(c.T));d&&this.notifySubscribers(c.T,"awake")},Pc:function(b,c){try{var d=b.jd;return b.pb?d.call(b.pb):d()}finally{a.l.end(),c.lb&&!b.s&&a.a.D(c.Ma,X),b.S=!1}},t:function(){var a=this[s];(a.S&&!a.L||a.s&&this.Qa())&&this.aa();return a.T},Ta:function(b){a.J.fn.Ta.call(this,
b);this.Fa=function(){this.Kb(this[s].T);this[s].S=!0;this.Lb(this)}},k:function(){var b=this[s];!b.s&&b.r&&a.a.D(b.r,function(a,b){b.k&&b.k()});b.i&&b.mb&&a.a.F.pc(b.i,b.mb);b.r=null;b.L=0;b.R=!0;b.S=!1;b.s=!1;b.i=null}},$={sa:function(b){var c=this,d=c[s];if(!d.R&&d.s&&"change"==b){d.s=!1;if(d.S||c.Qa())d.r=null,d.L=0,d.S=!0,c.aa();else{var e=[];a.a.D(d.r,function(a,b){e[b.Ga]=a});a.a.q(e,function(a,b){var e=d.r[a],l=c.uc(e.ia);l.Ga=b;l.na=e.na;d.r[a]=l})}d.R||c.notifySubscribers(d.T,"awake")}},
Ia:function(b){var c=this[s];c.R||"change"!=b||this.Pa("change")||(a.a.D(c.r,function(a,b){b.k&&(c.r[a]={ia:b.ia,Ga:b.Ga,na:b.na},b.k())}),c.s=!0,this.notifySubscribers(n,"asleep"))},Na:function(){var b=this[s];b.s&&(b.S||this.Qa())&&this.aa();return a.J.fn.Na.call(this)}},aa={sa:function(a){"change"!=a&&"beforeChange"!=a||this.t()}};a.a.ka&&a.a.Xa(z,a.J.fn);var R=a.N.gd;a.m[R]=a.N;z[R]=a.m;a.Xc=function(b){return a.Oa(b,a.m)};a.Yc=function(b){return a.Oa(b,a.m)&&b[s]&&b[s].Va};a.b("computed",a.m);
a.b("dependentObservable",a.m);a.b("isComputed",a.Xc);a.b("isPureComputed",a.Yc);a.b("computed.fn",z);a.G(z,"peek",z.t);a.G(z,"dispose",z.k);a.G(z,"isActive",z.ba);a.G(z,"getDependenciesCount",z.Aa);a.nc=function(b,c){if("function"===typeof b)return a.m(b,c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.m(b,c)};a.b("pureComputed",a.nc);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof
Number||a instanceof Boolean)return a;var k=a instanceof Array?[]:{};g.save(a,k);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":k[c]=d;break;case "object":case "undefined":var h=g.get(d);k[c]=h!==n?h:b(d,f,g)}});return k}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.Ib=[]}a.wc=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");
return b(c,function(b){for(var c=0;a.H(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.wc(b);return a.a.Eb(b,c,d)};d.prototype={save:function(b,c){var d=a.a.o(this.keys,b);0<=d?this.Ib[d]=c:(this.keys.push(b),this.Ib.push(c))},get:function(b){b=a.a.o(this.keys,b);return 0<=b?this.Ib[b]:n}}})();a.b("toJS",a.wc);a.b("toJSON",a.toJSON);(function(){a.j={u:function(b){switch(a.a.A(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.e.get(b,a.d.options.xb):7>=a.a.C?b.getAttributeNode("value")&&
b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex]):n;default:return b.value}},ha:function(b,c,d){switch(a.a.A(b)){case "option":switch(typeof c){case "string":a.a.e.set(b,a.d.options.xb,n);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.e.set(b,a.d.options.xb,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""}break;case "select":if(""===c||
null===c)c=n;for(var e=-1,f=0,g=b.options.length,k;f<g;++f)if(k=a.j.u(b.options[f]),k==c||""==k&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e;break;default:if(null===c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.j);a.b("selectExtensions.readValue",a.j.u);a.b("selectExtensions.writeValue",a.j.ha);a.h=function(){function b(b){b=a.a.$a(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),r,k=[],p=0;if(d){d.push(",");for(var A=0,y;y=d[A];++A){var t=y.charCodeAt(0);
if(44===t){if(0>=p){c.push(r&&k.length?{key:r,value:k.join("")}:{unknown:r||k.join("")});r=p=0;k=[];continue}}else if(58===t){if(!p&&!r&&1===k.length){r=k.pop();continue}}else 47===t&&A&&1<y.length?(t=d[A-1].match(f))&&!g[t[0]]&&(b=b.substr(b.indexOf(y)+1),d=b.match(e),d.push(","),A=-1,y="/"):40===t||123===t||91===t?++p:41===t||125===t||93===t?--p:r||k.length||34!==t&&39!==t||(y=y.slice(1,-1));k.push(y)}}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},k={};return{ta:[],ea:k,yb:b,Ua:function(e,m){function h(b,e){var m;if(!A){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(e=l.preprocess(e,b,h)))return;if(l=k[b])m=e,0<=a.a.o(c,m)?m=!1:(l=m.match(d),m=null===l?!1:l[1]?"Object("+l[1]+")"+l[2]:m),l=m;l&&g.push("'"+b+"':function(_z){"+m+"=_z}")}p&&(e=
"function(){return "+e+" }");f.push("'"+b+"':"+e)}m=m||{};var f=[],g=[],p=m.valueAccessors,A=m.bindingParams,y="string"===typeof e?b(e):e;a.a.q(y,function(a){h(a.key||a.unknown,a.value)});g.length&&h("_ko_property_writers","{"+g.join(",")+" }");return f.join(",")},ad:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},Ea:function(b,c,d,e,f){if(b&&a.H(b))!a.Ba(b)||f&&b.t()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",
a.h.ta);a.b("expressionRewriting.parseObjectLiteral",a.h.yb);a.b("expressionRewriting.preProcessBindings",a.h.Ua);a.b("expressionRewriting._twoWayBindings",a.h.ea);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.Ua);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&k.test(f?a.text:a.nodeValue)}function d(a,d){for(var e=a,f=1,l=[];e=e.nextSibling;){if(c(e)&&(f--,0===f))return l;l.push(e);
b(e)&&f++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=u&&"\x3c!--test--\x3e"===u.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,k=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,l={ul:!0,ol:!0};a.f={Z:{},childNodes:function(a){return b(a)?d(a):a.childNodes},xa:function(c){if(b(c)){c=a.f.childNodes(c);for(var d=
0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.ob(c)},da:function(c,d){if(b(c)){a.f.xa(c);for(var e=c.nextSibling,f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],e)}else a.a.da(c,d)},mc:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},gc:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.f.mc(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||
c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Tc:b,pd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},kc:function(d){if(l[a.a.A(d)]){var h=d.firstChild;if(h){do if(1===h.nodeType){var f;f=h.firstChild;var g=null;if(f){do if(g)g.push(f);else if(b(f)){var k=e(f,!0);k?f=k:g=[f]}else c(f)&&(g=[f]);while(f=f.nextSibling)}if(f=g)for(g=h.nextSibling,k=0;k<f.length;k++)g?d.insertBefore(f[k],
g):d.appendChild(f[k])}while(h=h.nextSibling)}}}}})();a.b("virtualElements",a.f);a.b("virtualElements.allowedBindings",a.f.Z);a.b("virtualElements.emptyNode",a.f.xa);a.b("virtualElements.insertAfter",a.f.gc);a.b("virtualElements.prepend",a.f.mc);a.b("virtualElements.setDomNodeChildren",a.f.da);(function(){a.Q=function(){this.Fc={}};a.a.extend(a.Q.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.f.Tc(b);
default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.g.Ob(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.g.Ob(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.f.pd(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var f=this.Fc,g=b+(e&&e.valueAccessors||
""),k;if(!(k=f[g])){var l,m="with($context){with($data||{}){return{"+a.h.Ua(b,e)+"}}}";l=new Function("$context","$element",m);k=f[g]=l}return k(c,d)}catch(h){throw h.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+h.message,h;}}});a.Q.instance=new a.Q})();a.b("bindingProvider",a.Q);(function(){function b(a){return function(){return a}}function c(a){return a()}function d(b){return a.a.Ca(a.l.w(b),function(a,c){return function(){return b()[c]}})}function e(c,e,h){return"function"===
typeof c?d(c.bind(null,e,h)):a.a.Ca(c,b)}function f(a,b){return d(this.getBindings.bind(this,a,b))}function g(b,c,d){var e,h=a.f.firstChild(c),f=a.Q.instance,m=f.preprocessNode;if(m){for(;e=h;)h=a.f.nextSibling(e),m.call(f,e);h=a.f.firstChild(c)}for(;e=h;)h=a.f.nextSibling(e),k(b,e,d)}function k(b,c,d){var e=!0,h=1===c.nodeType;h&&a.f.kc(c);if(h&&d||a.Q.instance.nodeHasBindings(c))e=m(c,null,b,d).shouldBindDescendants;e&&!r[a.a.A(c)]&&g(b,c,!h)}function l(b){var c=[],d={},e=[];a.a.D(b,function Z(h){if(!d[h]){var f=
a.getBindingHandler(h);f&&(f.after&&(e.push(h),a.a.q(f.after,function(c){if(b[c]){if(-1!==a.a.o(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));Z(c)}}),e.length--),c.push({key:h,fc:f}));d[h]=!0}});return c}function m(b,d,e,h){var m=a.a.e.get(b,q);if(!d){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.e.set(b,q,!0)}!m&&h&&a.tc(b,e);var g;if(d&&"function"!==typeof d)g=d;else{var k=a.Q.instance,r=k.getBindingAccessors||
f,p=a.B(function(){(g=d?d(e,b):r.call(k,b,e))&&e.P&&e.P();return g},null,{i:b});g&&p.ba()||(p=null)}var u;if(g){var v=p?function(a){return function(){return c(p()[a])}}:function(a){return g[a]},s=function(){return a.a.Ca(p?p():g,c)};s.get=function(a){return g[a]&&c(v(a))};s.has=function(a){return a in g};h=l(g);a.a.q(h,function(c){var d=c.fc.init,h=c.fc.update,f=c.key;if(8===b.nodeType&&!a.f.Z[f])throw Error("The binding '"+f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.l.w(function(){var a=
d(b,v(f),s,e.$data,e);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof h&&a.B(function(){h(b,v(f),s,e.$data,e)},null,{i:b})}catch(m){throw m.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+m.message,m;}})}return{shouldBindDescendants:u===n}}function h(b){return b&&b instanceof a.U?b:new a.U(b)}
a.d={};var r={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.d[b]};a.U=function(b,c,d,e){var h=this,f="function"==typeof b&&!a.H(b),m,g=a.B(function(){var m=f?b():b,l=a.a.c(m);c?(c.P&&c.P(),a.a.extend(h,c),g&&(h.P=g)):(h.$parents=[],h.$root=l,h.ko=a);h.$rawData=m;h.$data=l;d&&(h[d]=l);e&&e(h,c,l);return h.$data},null,{wa:function(){return m&&!a.a.Qb(m)},i:!0});g.ba()&&(h.P=g,g.equalityComparer=null,m=[],g.Ac=function(b){m.push(b);a.a.F.oa(b,function(b){a.a.La(m,b);m.length||
(g.k(),h.P=g=n)})})};a.U.prototype.createChildContext=function(b,c,d){return new a.U(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.U.prototype.extend=function(b){return new a.U(this.P||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var q=a.a.e.I(),p=a.a.e.I();a.tc=function(b,c){if(2==arguments.length)a.a.e.set(b,p,c),c.P&&c.P.Ac(b);else return a.a.e.get(b,
p)};a.Ja=function(b,c,d){1===b.nodeType&&a.f.kc(b);return m(b,c,h(d),!0)};a.Dc=function(b,c,d){d=h(d);return a.Ja(b,e(c,d,b),d)};a.eb=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(h(a),b,!0)};a.Rb=function(a,b){!v&&x.jQuery&&(v=x.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||x.document.body;k(h(a),b,!0)};a.kb=function(b){switch(b.nodeType){case 1:case 8:var c=a.tc(b);if(c)return c;
if(b.parentNode)return a.kb(b.parentNode)}return n};a.Jc=function(b){return(b=a.kb(b))?b.$data:n};a.b("bindingHandlers",a.d);a.b("applyBindings",a.Rb);a.b("applyBindingsToDescendants",a.eb);a.b("applyBindingAccessorsToNode",a.Ja);a.b("applyBindingsToNode",a.Dc);a.b("contextFor",a.kb);a.b("dataFor",a.Jc)})();(function(b){function c(c,e){var m=f.hasOwnProperty(c)?f[c]:b,h;m?m.X(e):(m=f[c]=new a.J,m.X(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Zc:e};delete f[c];h||e?m.notifySubscribers(b):
a.Y.Wa(function(){m.notifySubscribers(b)})}),h=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,f,h){h||(h=a.g.loaders.slice(0));var g=h.shift();if(g){var q=g[c];if(q){var p=!1;if(q.apply(g,d.concat(function(a){p?f(null):null!==a?f(a):e(c,d,f,h)}))!==b&&(p=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,h)}else f(null)}
var f={},g={};a.g={get:function(d,e){var f=g.hasOwnProperty(d)?g[d]:b;f?f.Zc?a.l.w(function(){e(f.definition)}):a.Y.Wa(function(){e(f.definition)}):c(d,e)},Xb:function(a){delete g[a]},Jb:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.Xb)})();(function(){function b(b,c,d,e){function g(){0===--y&&e(k)}var k={},y=2,t=d.template;d=d.viewModel;t?f(c,t,function(c){a.g.Jb("loadTemplate",[b,c],function(a){k.template=a;g()})}):g();d?f(c,d,function(c){a.g.Jb("loadViewModel",
[b,c],function(a){k[l]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});else if("function"===typeof b[l])d(b[l]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.A(b)){case "script":return a.a.ma(b.text);case "textarea":return a.a.ma(b.value);case "template":if(e(b.content))return a.a.ua(b.content.childNodes)}return a.a.ua(b.childNodes)}function e(a){return x.DocumentFragment?
a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?O||x.require?(O||x.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var k={};a.g.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.ub(b))throw Error("Component "+b+" is already registered");k[b]=c};a.g.ub=function(a){return k.hasOwnProperty(a)};a.g.od=function(b){delete k[b];
a.g.Xb(b)};a.g.Zb={getConfig:function(a,b){b(k.hasOwnProperty(a)?k[a]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ma(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.V(c.childNodes));else if(c.element)if(c=c.element,x.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var l=u.getElementById(c);l?f(d(l)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+
c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var l="createViewModel";a.b("components.register",a.g.register);a.b("components.isRegistered",a.g.ub);a.b("components.unregister",a.g.od);a.b("components.defaultLoader",a.g.Zb);a.g.loaders.push(a.g.Zb);a.g.Bc=k})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ca(f,function(c){return a.m(c,null,{i:b})}),g=a.a.Ca(f,function(c){var e=
c.t();return c.ba()?a.m({read:function(){return a.a.c(c())},write:a.Ba(e)&&function(a){c()(a)},i:b}):e});g.hasOwnProperty("$raw")||(g.$raw=f);return g}return{$raw:{}}}a.g.getComponentNameForNode=function(b){var c=a.a.A(b);if(a.g.ub(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.C&&b.tagName===c))return c};a.g.Ob=function(c,e,f,g){if(1===e.nodeType){var k=a.g.getComponentNameForNode(e);if(k){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
var l={name:k,params:b(e,f)};c.component=g?function(){return l}:l}}return c};var c=new a.Q;9>a.a.C&&(a.g.register=function(a){return function(b){u.createElement(b);return a.apply(this,arguments)}}(a.g.register),u.createDocumentFragment=function(b){return function(){var c=b(),f=a.g.Bc,g;for(g in f)f.hasOwnProperty(g)&&c.createElement(g);return c}}(u.createDocumentFragment))})();(function(b){function c(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.ua(c);a.f.da(d,b)}
function d(a,b,c,d){var e=a.createViewModel;return e?e.call(a,d,{element:b,templateNodes:c}):d}var e=0;a.d.component={init:function(f,g,k,l,m){function h(){var a=r&&r.dispose;"function"===typeof a&&a.call(r);q=r=null}var r,q,p=a.a.V(a.f.childNodes(f));a.a.F.oa(f,h);a.m(function(){var l=a.a.c(g()),k,t;"string"===typeof l?k=l:(k=a.a.c(l.name),t=a.a.c(l.params));if(!k)throw Error("No component name specified");var n=q=++e;a.g.get(k,function(e){if(q===n){h();if(!e)throw Error("Unknown component '"+k+
"'");c(k,e,f);var g=d(e,f,p,t);e=m.createChildContext(g,b,function(a){a.$component=g;a.$componentTemplateNodes=p});r=g;a.eb(e,f)}})},null,{i:f});return{controlsDescendantBindings:!0}}};a.f.Z.component=!0})();var S={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.D(d,function(c,d){d=a.a.c(d);var g=!1===d||null===d||d===n;g&&b.removeAttribute(c);8>=a.a.C&&c in S?(c=S[c],g?b.removeAttribute(c):b[c]=d):g||b.setAttribute(c,d.toString());"name"===c&&a.a.rc(b,
g?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=p?g():e;if(!a.va.Sa()&&(!l||e)){var m=a.l.w(c);if(h){var k=r?m.t():m;q!==f?(e&&(a.a.pa(k,f,!0),a.a.pa(k,q,!1)),q=f):a.a.pa(k,f,e);r&&a.Ba(m)&&m(k)}else a.h.Ea(m,d,"checked",f,!0)}}function f(){var d=a.a.c(c());b.checked=h?0<=a.a.o(d,g()):k?d:g()===d}var g=a.nc(function(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):d.has("value")?a.a.c(d.get("value")):b.value}),k=
"checkbox"==b.type,l="radio"==b.type;if(k||l){var m=c(),h=k&&a.a.c(m)instanceof Array,r=!(h&&m.push&&m.splice),q=h?g():n,p=l||h;l&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.m(e,null,{i:b});a.a.p(b,"click",e);a.m(f,null,{i:b});m=n}}};a.h.ea.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());null!==d&&"object"==typeof d?a.a.D(d,function(c,d){d=a.a.c(d);a.a.bb(b,c,d)}):(d=a.a.$a(String(d||"")),a.a.bb(b,b.__ko__cssValue,
!1),b.__ko__cssValue=d,a.a.bb(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,f){var g=c()||{};a.a.D(g,function(g){"string"==typeof g&&a.a.p(b,g,function(b){var m,h=c()[g];if(h){try{var r=a.a.V(arguments);e=f.$data;r.unshift(e);m=h.apply(e,r)}finally{!0!==m&&(b.preventDefault?b.preventDefault():
b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={ic:function(b){return function(){var c=b(),d=a.a.zb(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.W.sb};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.W.sb}}},init:function(b,c){return a.d.template.init(b,
a.d.foreach.ic(c))},update:function(b,c,d,e,f){return a.d.template.update(b,a.d.foreach.ic(c),d,e,f)}};a.h.ta.foreach=!1;a.f.Z.foreach=!0;a.d.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(h){g=f.body}e=g===b}f=c();a.h.Ea(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.p(b,"focus",f);a.a.p(b,"focusin",f);a.a.p(b,"blur",g);a.a.p(b,
"focusout",g)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.l.w(a.a.Da,null,[b,d?"focusin":"focusout"]))}};a.h.ea.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.ea.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Cb(b,c())}};K("if");K("ifnot",!1,!0);K("with",!0,!1,function(a,c){return a.createChildContext(c)});var L={};
a.d.options={init:function(b){if("select"!==a.a.A(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.Ka(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,e){if(A&&h)a.j.ha(b,a.a.c(d.get("value")),!0);else if(p.length){var f=0<=a.a.o(p,a.j.u(e[0]));a.a.sc(e[0],f);A&&!f&&a.l.w(a.a.Da,null,[b,
"change"])}}var k=b.multiple,l=0!=b.length&&k?b.scrollTop:null,m=a.a.c(c()),h=d.get("valueAllowUnset")&&d.has("value"),r=d.get("optionsIncludeDestroyed");c={};var q,p=[];h||(k?p=a.a.fb(e(),a.j.u):0<=b.selectedIndex&&p.push(a.j.u(b.options[b.selectedIndex])));m&&("undefined"==typeof m.length&&(m=[m]),q=a.a.Ka(m,function(b){return r||b===n||null===b||!a.a.c(b._destroy)}),d.has("optionsCaption")&&(m=a.a.c(d.get("optionsCaption")),null!==m&&m!==n&&q.unshift(L)));var A=!1;c.beforeRemove=function(a){b.removeChild(a)};
m=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(m=function(b,c){g(0,c);a.l.w(d.get("optionsAfterRender"),null,[c[0],b!==L?b:n])});a.a.Bb(b,q,function(c,e,g){g.length&&(p=!h&&g[0].selected?[a.j.u(g[0])]:[],A=!0);e=b.ownerDocument.createElement("option");c===L?(a.a.Za(e,d.get("optionsCaption")),a.j.ha(e,n)):(g=f(c,d.get("optionsValue"),c),a.j.ha(e,a.a.c(g)),c=f(c,d.get("optionsText"),g),a.a.Za(e,c));return[e]},c,m);a.l.w(function(){h?a.j.ha(b,a.a.c(d.get("value")),
!0):(k?p.length&&e().length<p.length:p.length&&0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex])!==p[0]:p.length||0<=b.selectedIndex)&&a.a.Da(b,"change")});a.a.Nc(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.d.options.xb=a.a.e.I();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.p(b,"change",function(){var e=c(),f=[];a.a.q(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.j.u(b))});a.h.Ea(e,d,"selectedOptions",f)})},update:function(b,c){if("select"!=
a.a.A(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.q(b.getElementsByTagName("option"),function(b){var c=0<=a.a.o(d,a.j.u(b));b.selected!=c&&a.a.sc(b,c)});b.scrollTop=e}};a.h.ea.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.D(d,function(c,d){d=a.a.c(d);if(null===d||d===n||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");
a.a.p(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Za(b,c())}};a.f.Z.text=!0;(function(){if(x&&x.navigator)var b=function(a){if(a)return parseFloat(a[1])},c=x.opera&&x.opera.version&&parseInt(x.opera.version()),d=x.navigator.userAgent,e=b(d.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),f=b(d.match(/Firefox\/([^ ]*)/));
if(10>a.a.C)var g=a.a.e.I(),k=a.a.e.I(),l=function(b){var c=this.activeElement;(c=c&&a.a.e.get(c,k))&&c(b)},m=function(b,c){var d=b.ownerDocument;a.a.e.get(d,g)||(a.a.e.set(d,g,!0),a.a.p(d,"selectionchange",l));a.a.e.set(b,k,c)};a.d.textInput={init:function(b,d,g){function l(c,d){a.a.p(b,c,d)}function k(){var c=a.a.c(d());if(null===c||c===n)c="";v!==n&&c===v?a.a.setTimeout(k,4):b.value!==c&&(u=c,b.value=c)}function y(){s||(v=b.value,s=a.a.setTimeout(t,4))}function t(){clearTimeout(s);v=s=n;var c=
b.value;u!==c&&(u=c,a.h.Ea(d(),g,"textInput",c))}var u=b.value,s,v,x=9==a.a.C?y:t;10>a.a.C?(l("propertychange",function(a){"value"===a.propertyName&&x(a)}),8==a.a.C&&(l("keyup",t),l("keydown",t)),8<=a.a.C&&(m(b,x),l("dragend",y))):(l("input",t),5>e&&"textarea"===a.a.A(b)?(l("keydown",y),l("paste",y),l("cut",y)):11>c?l("keydown",y):4>f&&(l("DOMAutoComplete",t),l("dragdrop",t),l("drop",t)));l("change",t);a.m(k,null,{i:b})}};a.h.ea.textInput=!0;a.d.textinput={preprocess:function(a,b,c){c("textInput",
a)}}})();a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Ic;a.a.rc(b,d)}}};a.d.uniqueName.Ic=0;a.d.value={after:["options","foreach"],init:function(b,c,d){if("input"!=b.tagName.toLowerCase()||"checkbox"!=b.type&&"radio"!=b.type){var e=["change"],f=d.get("valueUpdate"),g=!1,k=null;f&&("string"==typeof f&&(f=[f]),a.a.ra(e,f),e=a.a.Tb(e));var l=function(){k=null;g=!1;var e=c(),f=a.j.u(b);a.h.Ea(e,d,"value",f)};!a.a.C||"input"!=b.tagName.toLowerCase()||"text"!=b.type||
"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.o(e,"propertychange")||(a.a.p(b,"propertychange",function(){g=!0}),a.a.p(b,"focus",function(){g=!1}),a.a.p(b,"blur",function(){g&&l()}));a.a.q(e,function(c){var d=l;a.a.nd(c,"after")&&(d=function(){k=a.j.u(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.p(b,c,d)});var m=function(){var e=a.a.c(c()),f=a.j.u(b);if(null!==k&&e===k)a.a.setTimeout(m,0);else if(e!==f)if("select"===a.a.A(b)){var g=d.get("valueAllowUnset"),f=function(){a.j.ha(b,
e,g)};f();g||e===a.j.u(b)?a.a.setTimeout(f,0):a.l.w(a.a.Da,null,[b,"change"])}else a.j.ha(b,e)};a.m(m,null,{i:b})}else a.Ja(b,{checkedValue:c})},update:function(){}};a.h.ea.value=!0;a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,f,g){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");a.O=function(){};a.O.prototype.renderTemplateSource=
function(){throw Error("Override renderTemplateSource");};a.O.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.O.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||u;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.v.n(d)}if(1==b.nodeType||8==b.nodeType)return new a.v.qa(b);throw Error("Unknown template type: "+b);};a.O.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,
e);return this.renderTemplateSource(a,c,d,e)};a.O.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.O.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.O);a.Gb=function(){function b(b,c,d,k){b=a.h.yb(b);for(var l=a.h.ta,m=0;m<b.length;m++){var h=b[m].key;if(l.hasOwnProperty(h)){var r=l[h];if("function"===typeof r){if(h=
r(b[m].value))throw Error(h);}else if(!r)throw Error("This template engine does not support the '"+h+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.Ua(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return k.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Oc:function(b,
c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Gb.dd(b,c)},d)},dd:function(a,f){return a.replace(c,function(a,c,d,e,h){return b(h,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},Ec:function(b,c){return a.M.wb(function(d,k){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.Ja(l,b,k)})}}}();a.b("__tr_ambtns",a.Gb.Ec);(function(){a.v={};a.v.n=function(b){if(this.n=b){var c=a.a.A(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&
b.content&&11===b.content.nodeType?3:4}};a.v.n.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.n[b];var c=arguments[0];"innerHTML"===b?a.a.Cb(this.n,c):this.n[b]=c};var b=a.a.e.I()+"_";a.v.n.prototype.data=function(c){if(1===arguments.length)return a.a.e.get(this.n,b+c);a.a.e.set(this.n,b+c,arguments[1])};var c=a.a.e.I();a.v.n.prototype.nodes=function(){var b=this.n;if(0==arguments.length)return(a.a.e.get(b,c)||{}).jb||(3===this.ab?
b.content:4===this.ab?b:n);a.a.e.set(b,c,{jb:arguments[0]})};a.v.qa=function(a){this.n=a};a.v.qa.prototype=new a.v.n;a.v.qa.prototype.text=function(){if(0==arguments.length){var b=a.a.e.get(this.n,c)||{};b.Hb===n&&b.jb&&(b.Hb=b.jb.innerHTML);return b.Hb}a.a.e.set(this.n,c,{Hb:arguments[0]})};a.b("templateSources",a.v);a.b("templateSources.domElement",a.v.n);a.b("templateSources.anonymousTemplate",a.v.qa)})();(function(){function b(b,c,d){var e;for(c=a.f.nextSibling(c);b&&(e=b)!==c;)b=a.f.nextSibling(e),
d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,k=a.Q.instance,n=k.preprocessNode;if(n){b(e,f,function(a,b){var c=a.previousSibling,d=n.call(k,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.za(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.Rb(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.M.yc(b,[d])});a.a.za(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,
e,f,k,q){q=q||{};var p=(b&&d(b)||f||{}).ownerDocument,n=q.templateEngine||g;a.Gb.Oc(f,n,p);f=n.renderTemplate(f,k,q,p);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");p=!1;switch(e){case "replaceChildren":a.f.da(b,f);p=!0;break;case "replaceNode":a.a.qc(b,f);p=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}p&&(c(f,k),q.afterRender&&a.l.w(q.afterRender,null,[f,k.$data]));
return f}function f(b,c,d){return a.H(b)?b():"function"===typeof b?b(c,d):b}var g;a.Db=function(b){if(b!=n&&!(b instanceof a.O))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Ab=function(b,c,h,k,q){h=h||{};if((h.templateEngine||g)==n)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(k){var p=d(k);return a.B(function(){var g=c&&c instanceof a.U?c:new a.U(a.a.c(c)),n=f(b,g.$data,g),g=e(k,q,n,g,h);"replaceNode"==q&&(k=g,p=d(k))},null,
{wa:function(){return!p||!a.a.nb(p)},i:p&&"replaceNode"==q?p.parentNode:p})}return a.M.wb(function(d){a.Ab(b,c,h,d,"replaceNode")})};a.kd=function(b,d,g,k,q){function p(a,b){c(b,s);g.afterRender&&g.afterRender(b,a);s=null}function u(a,c){s=q.createChildContext(a,g.as,function(a){a.$index=c});var d=f(b,a,s);return e(null,"ignoreTargetNode",d,s,g)}var s;return a.B(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.Ka(b,function(b){return g.includeDestroyed||b===n||null===b||!a.a.c(b._destroy)});
a.l.w(a.a.Bb,null,[k,b,u,g,p])},null,{i:k})};var k=a.a.e.I();a.d.template={init:function(b,c){var d=a.a.c(c());if("string"==typeof d||d.name)a.f.xa(b);else{if("nodes"in d){if(d=d.nodes||[],a.H(d))throw Error('The "nodes" option must be a plain, non-observable array.');}else d=a.f.childNodes(b);d=a.a.jc(d);(new a.v.qa(b)).nodes(d)}return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c(),s;c=a.a.c(g);d=!0;e=null;"string"==typeof c?c={}:(g=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in
c&&(d=!a.a.c(c.ifnot)),s=a.a.c(c.data));"foreach"in c?e=a.kd(g||b,d&&c.foreach||[],c,b,f):d?(f="data"in c?f.createChildContext(s,c.as):f,e=a.Ab(g||b,f,c,b)):a.f.xa(b);f=e;(s=a.a.e.get(b,k))&&"function"==typeof s.k&&s.k();a.a.e.set(b,k,f&&f.ba()?f:n)}};a.h.ta.template=function(b){b=a.h.yb(b);return 1==b.length&&b[0].unknown||a.h.ad(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.f.Z.template=!0})();a.b("setTemplateEngine",a.Db);a.b("renderTemplate",
a.Ab);a.a.dc=function(a,c,d){if(a.length&&c.length){var e,f,g,k,l;for(e=f=0;(!d||e<d)&&(k=a[f]);++f){for(g=0;l=c[g];++g)if(k.value===l.value){k.moved=l.index;l.moved=k.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.ib=function(){function b(b,d,e,f,g){var k=Math.min,l=Math.max,m=[],h,n=b.length,q,p=d.length,s=p-n||1,u=n+p+1,t,v,x;for(h=0;h<=n;h++)for(v=t,m.push(t=[]),x=k(p,h+s),q=l(0,h-1);q<=x;q++)t[q]=q?h?b[h-1]===d[q-1]?v[q-1]:k(v[q]||u,t[q-1]||u)+1:q+1:h+1;k=[];l=[];s=[];h=n;for(q=p;h||q;)p=m[h][q]-
1,q&&p===m[h][q-1]?l.push(k[k.length]={status:e,value:d[--q],index:q}):h&&p===m[h-1][q]?s.push(k[k.length]={status:f,value:b[--h],index:h}):(--q,--h,g.sparse||k.push({status:"retained",value:d[q]}));a.a.dc(s,l,!g.dontLimitMoves&&10*n);return k.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.ib);(function(){function b(b,c,d,k,l){var m=[],
h=a.B(function(){var h=c(d,l,a.a.za(m,b))||[];0<m.length&&(a.a.qc(m,h),k&&a.l.w(k,null,[d,h,l]));m.length=0;a.a.ra(m,h)},null,{i:b,wa:function(){return!a.a.Qb(m)}});return{ca:m,B:h.ba()?h:n}}var c=a.a.e.I(),d=a.a.e.I();a.a.Bb=function(e,f,g,k,l){function m(b,c){w=q[c];v!==c&&(D[b]=w);w.qb(v++);a.a.za(w.ca,e);u.push(w);z.push(w)}function h(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.q(c[d].ca,function(a){b(a,d,c[d].ja)})}f=f||[];k=k||{};var r=a.a.e.get(e,c)===n,q=a.a.e.get(e,c)||[],p=a.a.fb(q,
function(a){return a.ja}),s=a.a.ib(p,f,k.dontLimitMoves),u=[],t=0,v=0,x=[],z=[];f=[];for(var D=[],p=[],w,C=0,B,E;B=s[C];C++)switch(E=B.moved,B.status){case "deleted":E===n&&(w=q[t],w.B&&(w.B.k(),w.B=n),a.a.za(w.ca,e).length&&(k.beforeRemove&&(u.push(w),z.push(w),w.ja===d?w=null:f[C]=w),w&&x.push.apply(x,w.ca)));t++;break;case "retained":m(C,t++);break;case "added":E!==n?m(C,E):(w={ja:B.value,qb:a.N(v++)},u.push(w),z.push(w),r||(p[C]=w))}a.a.e.set(e,c,u);h(k.beforeMove,D);a.a.q(x,k.beforeRemove?a.$:
a.removeNode);for(var C=0,r=a.f.firstChild(e),F;w=z[C];C++){w.ca||a.a.extend(w,b(e,g,w.ja,l,w.qb));for(t=0;s=w.ca[t];r=s.nextSibling,F=s,t++)s!==r&&a.f.gc(e,s,F);!w.Wc&&l&&(l(w.ja,w.ca,w.qb),w.Wc=!0)}h(k.beforeRemove,f);for(C=0;C<f.length;++C)f[C]&&(f[C].ja=d);h(k.afterMove,D);h(k.afterAdd,p)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Bb);a.W=function(){this.allowTemplateRewriting=!1};a.W.prototype=new a.O;a.W.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.C?0:b.nodes)?
b.nodes():null)return a.a.V(c.cloneNode(!0).childNodes);b=b.text();return a.a.ma(b,e)};a.W.sb=new a.W;a.Db(a.W.sb);a.b("nativeTemplateEngine",a.W);(function(){a.vb=function(){var a=this.$c=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f,g){g=g||u;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var k=b.data("precompiled");
k||(k=b.text()||"",k=v.template(null,"{{ko_with $item.koBindingContext}}"+k+"{{/ko_with}}"),b.data("precompiled",k));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(k,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){u.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},
v.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.vb.prototype=new a.O;var b=new a.vb;0<b.$c&&a.Db(b);a.b("jqueryTmplTemplateEngine",a.vb)})()})})();})();
var google = google || {};
// instantiated TheatreMapViewModel from app.js
var TheatreMapViewModel = TheatreMapViewModel || {};
var ko = ko || {};

/**
 * mapManager is responsible for holding the map, markers data, and 
 * related logic
 */
var mapManager = {

    /**
     * The Google Maps API runs this function as a callback when it loads in 
     * order to pan over the correct region and then to load all the markers 
     * from the model.
     */
    initMap: function() {
        'use strict';

        var startingMapPosition = {
            lat: 43.657899,
            lng: -79.3782433
        };

        // Keep a tab on the screen width in order to determine certain 
        // responsive features.
        this.util.windowWidth = window.innerWidth;

        // Use this to guess at whether we're on a phone or not. NOT GOOD.
        this.util.screenWidth = screen.width;

        // Create a Map object and specify the DOM element for display.
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: startingMapPosition,
            scrollwheel: true,
            zoom: 12,
            disableDefaultUI: true
        });

        /**
         * Add the markers stored in mapManager.markerData through an 
         * instantiated TheatreMapViewModel object. mapManager.markerData is 
         * populated when mapManager.load() is run at the bottom of this file.
         */
        TheatreMapViewModel.addMarkers();
    },

    /**
     * Adds a marker to an array using the data in a markerItem object.
     * @param  {object} markerItem holds the data needed to create a marker
     * @param  {array}  array      is an observableArray of markers in the
     *                             TheatreMapViewModel
     */
    pushMarker: function(markerItem, array) {
        'use strict';
        array.push(new google.maps.Marker({
            position: this.util.nullPosition, // 0,0 placeholder
            map: this.map, // the Google map
            title: markerItem.title, // important for many methods
            twitterHandle: markerItem.twitter, // used to access twitter feed
            icon: markerItem.icon, // graphic on the map
            // The 'listed' observable manages whether the marker's 
            // corresponding button on the list is visible or not
            listed: ko.observable(true),
            founded: markerItem.founded, // Company's founding year
            flags: markerItem.flags, // Categories for filters
            //infoWin: {}, // placeholder
            //infoWindowOpen: false
            blurb: '',
            address: markerItem.address
        }));
    },

    /**
     * If the position coordinates exist, use those. Otherwise, use the address 
     * and make a Google Maps Geocoding call to find the corresponding 
     * coordinates. Failing those two things, we can't display the Marker.
     */
    adjustPosition: function(marker, markerItem) {
        'use strict';
        var position = markerItem.position;
        var address = markerItem.address;
        if (position) {
            marker.setPosition(position);
        } else if (address) {
            this.mapPositionAJAX(marker, address);
        } else {
            // Take the marker off the map.
            marker.setMap(null);
        }

    },

    /**
     * Fill an InfoWindow associated with marker using available data.
     * @param {object} marker  The marker corresponding to the InfoWindow.
     * @param {string} title   The title to display.
     * @param {string} website The website that the title should link to.
     * @param {string} blurb   The description corresponding to the marker.
     */
    setDescription: function(marker, title, website, blurb) {
        'use strict';
        if (title && website && blurb) { // we have all the data already
            // Fill the InfoWindow with all the important data.
            // this.infoWindowMaker(marker.infoWin, title, website, blurb);
            marker.website = website;
            marker.blurb = blurb;
        } else if (title) { // we have the title, so we can look up missing data
            // Make a call to the Wikipedia API to retrieve a website and/or blurb.
            this.markerDataAjax(marker, website, blurb);
        } else { // If there is no title, we can't do a wikipedia AJAX call.
            // FIll the InfoWindow as best as we can.
            // this.infoWindowMaker(marker.infoWin, title, website, blurb);
            marker.website = website;
            marker.blurb = blurb;
        }
    },

    /**
     * Perform a MediaWiki API AJAX request and apply retrieved info to the 
     * InfoWindow stored at position index of array.
     * @param  {string} nameOfTheatre Name we use to search the wiki
     * @param  {array}  array         Each item is an InfoWindow object
     * @param  {int}    index         Determines which InfoWindow to send 
     *                                retrieved info to.
     * @return {null}                 Returns if the API takes too long to 
     *                                        respond. In which case we apply
     *                                        the corresponding content from the
     *                                        a mapManager.markerData item. 
     */
    markerDataAjax: function(marker, fallbackWebsite, fallbackBlurp) {
        'use strict';

        console.log('running wiki AJAX');

        var self = this;

        var formattedName = marker.title.replace(/ /g, '_');

        // Only try find 1 article (specified by the &limit=1 part)
        var urlWiki = ('https://en.wikipedia.org/w/api.php?action=opensearch&' +
            'format=json&search=' + formattedName + '&limit=1&redirects=resolve');

        /**
         * wikipediaRequestTimeout will be cancelled if the AJAX request below 
         * is successful.
         */
        var wikipediaRequestTimeout = setTimeout(function() {
            // Fall back on whatever content is provided by markerData.
            // marker.infoWin.setContent(fallbackBlurp);
            marker.website = fallbackWebsite;
            marker.blurb = fallbackBlurp;
            return;
        }, 5000);

        $.ajax({
            url: urlWiki,
            dataType: 'jsonp',
            success: function(data) {
                // Cancel the timeout since AJAX request is successful.
                clearTimeout(wikipediaRequestTimeout);
                var wikiFound = data[1].length; // Max of 1.
                // var infoWindow = marker.infoWin;
                var title, website, blurb;
                // We either found 1 article or we found 0, hence the boolean.
                if (wikiFound) {
                    if (!fallbackWebsite) {
                        website = data[3][0];
                    } else {
                        website = fallbackWebsite;
                    }
                    if (!fallbackBlurp) {
                        blurb = data[2][0];
                    } else {
                        blurb = fallbackBlurp;
                    }
                } else {
                    // Fall back on whatever content is provided by markerData.
                    website = fallbackWebsite;
                    blurb = fallbackBlurp;
                }
                // self.infoWindowMaker(infoWindow, marker.title, website, blurb);
                marker.website = website;
                marker.blurb = blurb;
            }
        });
    },

    /**
     * Perform a Google Geocoding API request and apply retrieved coordinates 
     * to Marker stored at index of array.
     * @param  {string} address The real world address used to find coordinates.
     * @param  {array}  array   An array of google.maps.Marker objects.
     * @param  {int}    index   Determines which Marker to send coordinates to.
     */
    mapPositionAJAX: function(marker, address) {
        'use strict';
        var self = this;

        // Might be safer to have no spaces in the url.
        var formattedAddress = address.replace(/ /g, '+');

        // The request is bounded around Toronto.
        var urlCoords = ('https://maps.googleapis.com/maps/api/geocode/json?' +
            'address=' + formattedAddress + '&bounds=43.573936,-79.560076|' +
            '43.758672,-79.275135&key=AIzaSyA4SAawmy-oEMzdWboD0iHk9gDmmjb61o4');

        $.getJSON(urlCoords, function(data) {
            var lat = data.results[0].geometry.location.lat;
            var lng = data.results[0].geometry.location.lng;
            // Set position of appropriate Marker.
            marker.setPosition(new google.maps.LatLng(lat, lng));
            // Update model stored in mapManager so that it can be later stored.
            // self.markerData[index].position = {
            //     lat: lat,
            //     lng: lng
            // };
        }).error(function(e) { // Can't show the marker without coordinates.
            console.log('We experienced a failure when making the coordinate request for ' +
                address + ' for the place called ' + marker.title);
            marker.setMap(null);
        });
    },

    /**
     * Fill the content of infoWindow.
     * @param  {object} infoWindow The InfoWindow we want to fill.
     * @param  {string} title      The title of the associated marker.
     * @param  {string} website    The website the title should link to.
     * @param  {string} blurb      The description to include.
     * THIS IS NOT CURRENTLY BEING USED AT ALL
     */
    // infoWindowMaker: function(infoWindow, title, website, blurb) {
    //     'use strict';
    //     var content = '<div class="info-window"><h4><a href="' + website + '">' +
    //         title +
    //         '</a></h4>' +
    //         '<p>' + blurb + '</p></div>';
    //     infoWindow.setContent(content); // Apply the formatted content.
    // },

    // store: function() {
    //     'use strict';
    //     console.log('storing data');
    //     localStorage.markerData = JSON.stringify(this.markerData);
    // },
    load: function() {
        'use strict';
        console.log('loading data');
        if (true) {
            this.markerData = [{
                twitter: 'yyzbuddies',
                title: 'Buddies in Bad Times Theatre',
                website: 'http://buddiesinbadtimes.com/events/',
                blurb: 'Buddies in Bad Times Theatre creates vital Canadian ' +
                    'theatre by developing and presenting voices that question ' +
                    'sexual and cultural norms. Built on the political and social ' +
                    'principles of queer liberation, Buddies supports artists and ' +
                    'works that reflect and advance these values. As the world’s ' +
                    'longest-running and largest queer theatre, Buddies is uniquely ' +
                    'positioned to develop, promote, and preserve stories and ' +
                    'perspectives that are challenging and alternative.',
                address: '12 Alexander St, Toronto, ON M4Y 1B4',
                position: {
                    lat: 43.663346,
                    lng: -79.383107
                },
                icon: 'dist/images/museum.png',
                flags: ['Queer culture', 'Alternative', 'Community focused', 'Theatre venue'],
                founded: 1978
            }, {
                twitter: 'tarragontheatre',
                title: 'Tarragon Theatre',
                website: 'http://tarragontheatre.com/now-playing/',
                blurb: 'Tarragon Theatre’s mission is to create, develop and ' +
                    'produce new plays and to provide the conditions for new work ' +
                    'to thrive. To that end, the theatre engages the best theatre ' +
                    'artists and craftspeople to interpret new work; presents each ' +
                    'new work with high quality production values; provides an ' +
                    'administrative structure to support new work; develops marketing ' +
                    'strategies to promote new work; and continually generates an ' +
                    'audience for new work.',
                address: '30 Bridgman Ave, Toronto, ON M5R 1X3',
                position: {
                    lat: 43.674842,
                    lng: -79.412820
                },
                icon: 'dist/images/museum.png',
                flags: ['Theatre venue'],
                founded: 1970
            }, {
                twitter: 'beyondwallsTPM',
                title: 'Theatre Passe Muraille',
                website: 'http://passemuraille.ca/current-season',
                blurb: 'Theatre Passe Muraille (TPM) believes there should be a ' +
                    'more diverse representation of artists, audience members, and ' +
                    'stories in our theatre in Canada. TPM aspires to be a leader ' +
                    'locally, nationally and internationally in establishing, ' +
                    'promoting, and embracing collaborative and inclusive theatre ' +
                    'practices that support and ignite the voices of unique artists, ' +
                    'communities and audiences.',
                address: '16 Ryerson Ave, Toronto, ON M5T 2P3',
                position: {
                    lat: 43.648553,
                    lng: -79.402584
                },
                icon: 'dist/images/museum.png',
                flags: ['Diversity', 'Theatre venue'],
                founded: 1968
            }, {
                twitter: 'FactoryToronto',
                title: 'Factory Theatre',
                website: 'https://www.factorytheatre.ca/what-s-on/',
                blurb: 'From its founding in 1970 with a commitment to Canadian ' +
                    'stories; to the Heritage building that now houses the 45-year ' +
                    'old company; Factory\'s vision has always conveyed indomitable ' +
                    'courage and resolve; toughness; tenaciousness; and strength of ' +
                    'character. Factory has grit.',
                address: '125 Bathurst St, Toronto, ON M5V 2R2',
                position: {
                    lat: 43.645531,
                    lng: -79.402690
                },
                icon: 'dist/images/museum.png',
                flags: ['Theatre venue'],
                founded: 1970
            }, {
                twitter: 'StorefrontTO',
                title: 'Storefront Theatre',
                website: 'http://thestorefronttheatre.com/current-season/',
                blurb: 'The Storefront Arts Initiative represents the Storefront ' +
                    'Theatre’s management team and its commitment to the artistic ' +
                    'independent scene in Toronto through affordable venues, ' +
                    'groundbreaking productions, collaborative discourse and ' +
                    'community-centric support.',
                address: '955 Bloor Street West, Toronto, ON M6H 1L7',
                position: {
                    lat: 43.661288,
                    lng: -79.428240
                },
                icon: 'dist/images/museum.png',
                flags: ['Theatre venue'],
                founded: 2013
            }, {
                twitter: 'NativeEarth',
                title: 'Native Earth Performing Arts',
                website: 'http://www.nativeearth.ca/aki-studio-theatre/',
                blurb: 'Through stage productions (theatre, dance and ' +
                    'multi-disciplinary art), new script development, ' +
                    'apprenticeships and internships, Native Earth seeks to ' +
                    'fulfill a community of artistic visions. It is a vision ' +
                    'that is inclusive and reflective of the artistic directions ' +
                    'of members of the Indigenous community who actively ' +
                    'participate in the arts.',
                address: '585 Dundas St E #250, Toronto, ON M5A 2B7',
                position: {
                    lat: 43.659961,
                    lng: -79.362607
                },
                icon: 'dist/images/museum.png',
                flags: ['Aboriginal', 'Community focused', 'Theatre venue'],
                founded: 1982
            }, {
                twitter: 'canadianstage',
                title: 'Berkeley Street Theatre',
                website: 'https://nowtoronto.com/locations/berkeley-street-theatre/',
                blurb: 'Berkeley Street Theatre is associated with the Canadian ' +
                    'Stage Company.  A home for innovative live performance from ' +
                    'Canada and around the world, Where audiences encounter ' +
                    'daring productions, guided by a strong directorial vision ' +
                    'Where theatre, dance, music and visual arts cohabit, clash, interrogate ' +
                    'Where a bold, 21st-century aesthetic reigns',
                address: '26 Berkeley St, Toronto',
                position: {
                    lat: 43.650621,
                    lng: -79.363817
                },
                icon: 'dist/images/museum.png',
                flags: ['Theatre venue'],
                founded: 1987
            }, {
                twitter: 'canadianstage',
                title: 'Bluma Appel Theatre',
                content: 'Bluma Appel Theatre',
                website: 'https://www.canadianstage.com/Online/default.asp',
                blurb: 'Bluma Appel Theatre is associated with the Canadian ' +
                    'Stage Company. A home for innovative live performance from ' +
                    'Canada and around the world, Where audiences encounter ' +
                    'daring productions, guided by a strong directorial vision ' +
                    'Where theatre, dance, music and visual arts cohabit, clash, interrogate ' +
                    'Where a bold, 21st-century aesthetic reigns',
                address: '27 Front St E, Toronto',
                position: {
                    lat: 43.647414,
                    lng: -79.375129
                },
                icon: 'dist/images/museum.png',
                flags: ['International', 'Theatre venue'],
                founded: 1987
            }, {
                twitter: 'Soulpepper',
                title: 'Soulpepper Theatre Company',
                website: 'https://www.soulpepper.ca/performances.aspx',
                blurb: 'Central to Soulpepper’s identity is its commitment to ' +
                    'being a Civic Theatre - a place of belonging for artists and ' +
                    'audiences of all ages and backgrounds. We are the largest ' +
                    'employer of theatre artists in Toronto, and our artists live ' +
                    'and play in this community. Our partners are our neighbours ' +
                    'and the stories we tell are infused with our shared ' +
                    'experiences. Soulpepper plays an intrinsic role in the ' +
                    'cultural life of this city.',
                address: '50 Tank House Lane, Toronto',
                position: {
                    lat: 43.650860,
                    lng: -79.357452
                },
                icon: 'dist/images/museum.png',
                flags: ['Community focused', 'Theatre venue'],
                founded: 1998
            }, {
                twitter: 'fuGENTheatre',
                title: 'fu-GEN Theatre',
                website: 'http://fu-gen.org/current-season/',
                blurb: 'fu-GEN is a charitable theatre company dedicated to ' +
                    'the development of professional Asian Canadian theatre ' +
                    'artists through the production of new and established works.',
                address: '157 Carlton St #207, Toronto',
                position: {
                    lat: 43.663233,
                    lng: -79.372377
                },
                icon: 'dist/images/city.png',
                flags: ['Asian-Canadian', 'Company office'],
                founded: 2002
            }, {
                twitter: 'CahootsTheatre',
                title: 'Cahoots Theatre Company',
                website: 'http://www.cahoots.ca/',
                blurb: 'Cahoots Theatre investigates and examines the' +
                    'complexities of diversity through the creation and ' +
                    'production of new theatre works, development of ' +
                    'professional artists and the engagement of communities.',
                address: '388 Queen Street East, Unit 3, Toronto, Ontario M5A 1T3',
                position: {
                    lat: 43.656172,
                    lng: -79.363262
                },
                icon: 'dist/images/city.png',
                flags: ['Diversity', 'Community focused', 'Company office'],
                founded: 1986
            }, {
                twitter: 'bcurrentLIVE',
                title: 'b current',
                website: 'http://bcurrent.ca/events/',
                blurb: 'b current is the hotbed for culturally-rooted theatre ' +
                    'development in Toronto. Originally founded as a place for ' +
                    'black artists to create, nurture, and present their new ' +
                    'works, our company has grown to support artists from all ' +
                    'diasporas. We strived over two decades to create space for ' +
                    'diverse voices to be heard, always with a focus on engaging ' +
                    'the communities from which our stories emerge.',
                address: '601 Christie St #251, Toronto, ON M6G 4C7',
                position: {
                    lat: 43.680006,
                    lng: -79.423700
                },
                icon: 'dist/images/city.png',
                flags: ['Diversity', 'Company office'],
                founded: 1991
            }, {
                twitter: 'Videofag',
                title: 'videofag',
                website: 'http://www.videofag.com/#!events/ckiy',
                blurb: 'videofag is a storefront cinema and performance lab ' +
                    'in toronto\'s kensington market dedicated to the creation ' +
                    'and exhibition of video, film, new media, and live art.',
                address: '187 Augusta Avenue, Toronto, Ontario, M5T 2L4',
                position: {
                    lat: 43.653486,
                    lng: -79.401357
                },
                icon: 'dist/images/museum.png',
                flags: ['Alternative', 'Theatre venue'],
                founded: 2012
            }, {
                twitter: 'YPTToronto',
                title: 'Young People\'s Theatre',
                website: 'http://www.youngpeoplestheatre.ca/shows-tickets/',
                blurb: 'From the very beginning, Young Peoples Theatre ' +
                    'established its dedication to professional productions of ' +
                    'the highest quality – classic or contemporary – from Canada ' +
                    'and around the world, written just for children and the ' +
                    'people who care about them.',
                address: '165 Front St E, Toronto, ON M5A 3Z4, Canada',
                position: {
                    lat: 43.650022,
                    lng: -79.368883
                },
                icon: 'dist/images/museum.png',
                flags: ['Theatre for children', 'Theatre venue'],
                founded: 1966
            }, {
                twitter: 'TheatreDirectCa',
                title: 'Theatre Direct',
                website: 'http://theatredirect.ca/productions/',
                blurb: 'Our work is driven by a belief that young people ' +
                    'deserve truth not diversion – that they have a right to ' +
                    'meaningful cultural content and experiences. We view our ' +
                    'audience as thinking, feeling, complex individuals – not a ' +
                    'market and not future audiences, but our present audience ' +
                    'of emerging citizens that demands relevant theatre that ' +
                    'engages all their faculties, feelings and intellect.',
                address: '601 Christie St, Toronto, ON M6G 4C7',
                position: {
                    lat: 43.679979,
                    lng: -79.424069
                },
                icon: 'dist/images/city.png',
                flags: ['Theatre for children', 'Company office'],
                founded: 1976
            }, {
                twitter: 'AlunaTheatre',
                title: 'Aluna Theatre',
                website: 'http://www.alunatheatre.ca/current-productions/',
                blurb: 'The artistic mission of Aluna Theatre is to embrace ' +
                    'the myriad of voices, cultures, and stories of our population, ' +
                    'which are transforming the landscape of Canadian theatre. In ' +
                    'our plays, works in translation, and international ' +
                    'co-creations, people are complex individuals who exist ' +
                    'beyond the restrictions of cultural labels.',
                address: '1 Wiltshire Ave #124, Toronto, ON M6N 2V7',
                position: {
                    lat: 43.667751,
                    lng: -79.449632
                },
                icon: 'dist/images/city.png',
                flags: ['Diversity', 'Women', 'Latin-Canadian', 'Company office'],
                founded: 2001
            }, {
                twitter: 'TGargantua',
                title: 'Theatre Gargantua',
                website: 'http://theatregargantua.ca/productions/',
                blurb: 'Each of Gargantua’s productions, while being ' +
                    'diverse in terms of subject, writing and performance ' +
                    'styles, melds daring physicality with striking designs, ' +
                    'underpinned by original live music and the innovative use ' +
                    'of technology.',
                address: '651 Dufferin St, Toronto, ON M6K 2B2',
                position: {
                    lat: 43.650239,
                    lng: -79.431099
                },
                icon: 'dist/images/city.png',
                flags: ['Technology', 'Company office'],
                founded: 1992
            }, {
                twitter: 'crowstheatre',
                title: 'Crow\'s Theatre',
                website: 'http://www.crowstheatre.com/production/in-development/',
                blurb: 'Crow’s has a mission to ignite passionate and ' +
                    'enduring engagement between our audiences and artists by ' +
                    'creating, producing and promoting unforgettable theatre ' +
                    'that examines and illuminates the pivotal narratives of ' +
                    'our times.',
                address: '696 Queen St E #2C, Toronto, ON M4M 1G9',
                position: {
                    lat: 43.659415,
                    lng: -79.350262
                },
                icon: 'dist/images/museum.png',
                flags: ['Theatre venue'],
                founded: 1983
            }, {
                twitter: 'nightwoodtheat',
                title: 'Nightwood Theatre',
                website: 'http://www.nightwoodtheatre.net/index.php/whats_on',
                blurb: 'Nightwood Theatre forges creative alliances among ' +
                    'women artists from diverse backgrounds in order to develop ' +
                    'and produce innovative Canadian Theatre. We produce ' +
                    'original Canadian plays and works from the contemporary ' +
                    'international repertoire.',
                address: '15 Case Goods Lane #306, Toronto, ON M5A 3C4',
                position: {
                    lat: 43.649895,
                    lng: -79.358575
                },
                icon: 'dist/images/city.png',
                flags: ['Women', 'Diversity', 'Company office'],
                founded: 1979
            }, {
                twitter: 'obsidiantheatre',
                title: 'Obsidian Theatre Company',
                website: 'http://www.obsidiantheatre.com/',
                blurb: 'Obsidian is Canada’s leading culturally diverse ' +
                    'theatre company. Our threefold mission is to produce plays, ' +
                    'to develop playwrights and to train emerging theatre ' +
                    'professionals. Obsidian is passionately dedicated to the ' +
                    'exploration, development, and production of the Black voice.',
                address: '1089 Dundas St E, Toronto, ON M4M 1R9',
                position: {
                    lat: 43.663814,
                    lng: -79.343623
                },
                icon: 'dist/images/city.png',
                flags: ['Black', 'Diversity', 'Company office'],
                founded: 2000
            }];
        } else {
            //this.markerData = JSON.parse(localStorage.markerData);
        }

    }
};

mapManager.load();

/**
 * This file is used to hold helper functions and objects in an encapsulated 
 * way.
 */

var mapManager = mapManager || {};
mapManager.util = mapManager.util || {};

// Set InfoWindows to this before giving them relavant content.
mapManager.util.blankInfoWin = {
    content: '',
    maxWidth: 200,
};

// What new markers are set to before being given the correct coordinates.
mapManager.util.nullPosition = {
    lat: 0,
    lng: 0
};

/**
 * Hide the marker on the map and hide the corresponding button on the list.
 * @param  {object} marker
 */
mapManager.util.hideItem = function(marker) {
    'use strict';
    marker.setMap(null); // Detach the marker from the map.
    // Change the observable the view depends on when deciding whether to show
    // the button corresponding to the marker.
    marker.listed(false);
};

/**
 * Show the marker on the map and show the corresponding button on the list.
 * @param  {object} marker
 */
mapManager.util.showItem = function(marker) {
    'use strict';
    marker.setMap(mapManager.map);
    marker.listed(true);
};

/**
 * Sort two markers in alphabetical order based on their titles. Ignore case.
 * @param  {object} a is a Marker object
 * @param  {object} b is a Marker object
 */
mapManager.util.alphabeticalSort = function(a, b) {
    'use strict';
    if (a.title === b.title) {
        return 0;
    } else {
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    }
};

/**
 * Sort two markers in reverse alphabetical order based on their titles. Ignore
 * case.
 * @param  {object} a is a Marker object
 * @param  {object} b is a Marker object
 */
mapManager.util.alphabeticalSortReverse = function(a, b) {
    'use strict';
    if (a.title === b.title) {
        return 0;
    } else {
        return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
    }
};

/**
 * Sort two markers in ascending order based on the year the corresponding item
 * was founded.
 * @param  {object} a is a Marker object
 * @param  {object} b is a Marker object
 */
mapManager.util.foundingSort = function(a, b) {
    'use strict';
    if (a.founded === b.founded) {
        return 0;
    } else {
        return a.founded > b.founded ? 1 : -1;
    }
};

/**
 * Sort two markers in descending order based on the year the corresponding item
 * was founded.
 * @param  {object} a is a Marker object
 * @param  {object} b is a Marker object
 */
mapManager.util.foundingSortReverse = function(a, b) {
    'use strict';
    if (a.founded === b.founded) {
        return 0;
    } else {
        return a.founded < b.founded ? 1 : -1;
    }
};

/**
 * Determine if sought is present in the unsorted array.
 * @param  {array}      array  
 * @param  {primative}  sought can be any primitive to be searched for in the 
 *                             array.
 */
mapManager.util.inArray = function(array, sought) {
    'use strict';
    var length = array.length;
    var i;
    for (i = 0; i < length; i++) {
        if (array[i] === sought) {
            return true;
        }
    }
    return false;
};

/**
 * Check to see if the marker has filter in its flags attribute array.
 * @param  {object} marker is the item we want to check
 * @param  {string} filter is the string we need to find in the marker.flags 
 *                         array.
 */
mapManager.util.itemFailsFilter = function(marker, filter) {
    'use strict';
    if (mapManager.util.inArray(marker.flags, filter)) { // Marker passes filter
        return false;
    } else { // Marker fails filter
        mapManager.util.hideItem(marker); // Hide marker and corresponding button.
        // Call will be able to stop checking other filters for this marker, 
        // since it has already failed this one such work is unnecessary.
        return true;
    }
};

/**
 * Resize the twitter tab appropriately according to the screen height. This 
 * gets run as soon as the app is loaded.
 */
mapManager.util.repositionTabs = function() {
    'use strict';
    var $twitterTabs = $('.twitter-tab-image');
    var $listTabs = $('.list-tab-image');
    var $filterTabs = $('.filter-tab-image');
    var screenHeight = screen.height;
    console.log('The screen height is ' + screenHeight); // DEBUG
    if (screenHeight >= 600) {
        $listTabs.css({
            'top': screenHeight * 0.1
        });
        $twitterTabs.css({
            'top': screenHeight * 0.3
        });
        $filterTabs.css({
            'top': screenHeight * 0.5
        });
    } else {
        $listTabs.css({
            'top': 0
        });
        $twitterTabs.css({
            'top': screenHeight * 0.4
        });
        $filterTabs.css({
            'top': screenHeight * 0.7
        });
    }

};

// Position twitter tab as soon as page loads.
mapManager.util.repositionTabs();

var ko = ko || {};

/**
 * The ViewModel is a function to take advantage of the 'var self = this' idiom
 */
var TheatreMapViewModel = (function(self) {
    'use strict';

    /**
     * Div for holding the error messages that are seen when twitter fails to 
     * load quickly enough.
     */
    self.$twitterErrorDiv = $('#twitter-error');
    self.errorTimeoutRequest = null; // Allows us to clear old requests

    /**
     * Holds all the google.maps.Marker type objects so we can easily manipulate
     * them through Knockout.
     */
    self.markers = ko.observableArray([]);

    /**
     * Track whether each respective div is open.
     */
    self.listIsOpen = ko.observable(false);
    self.filterIsOpen = ko.observable(false);
    self.twitterIsOpen = ko.observable(false);

    /**
     * Required to support slide and glow animations
     */
    self.$divList = $('#list-div');
    self.$tabHLList = $('#list-tab-highlight');
    self.$tabBackList = $('#list-tab-back');
    self.$tabAllList = $('.list-tab-image');

    self.$divFilter = $('#filter-div');
    self.$tabHLFilter = $('#filter-tab-highlight');
    self.$tabBackFilter = $('#filter-tab-back');
    self.$tabAllFilter = $('.filter-tab-image');

    self.$divTwitter = $('#twitter-div');
    self.$tabHLTwitter = $('#twitter-tab-highlight');
    self.$tabBackTwitter = $('#twitter-tab-back');
    self.$tabAllTwitter = $('.twitter-tab-image');


    // To determine whether to load the twitter list or a particular account.
    self.twitterListView = ko.observable(true);

    /**
     * These variables hold the currently selected marker's information for 
     * various uses.
     */
    self.currentTitle = ko.observable('');
    self.currentWebsite = ko.observable('');
    self.currentBlurb = ko.observable('');
    self.currentAddress = ko.observable('');

    /**
     * These observables are used in the computed newTwitterUser to determine
     * if the Twitter account requested is different from the one that is loaded.
     */
    self.activeTwitter = ko.observable(''); // current Twitter user selected
    self.lastTwitterUser = ko.observable(''); // current Twitter user loaded

    /**
     * The following two variables keep track of the kind of Twitter feeds that 
     * are currently loaded. Short feeds save bandwidth by only allowing recent
     * posts to be loaded. Long feeds allow users to scroll down to display a 
     * limitless number of posts. 
     */
    self.currentTwitterListLong = false;
    self.currentTwitterUserLong = false;

    /**
     * The length of Twitter feed that the user wants to see. Default is to show 
     * the short feed.
     */
    self.twitterLong = ko.observable(false);


    /**
     * These observables are used by the computed newTwitterUserFeed and 
     * newTwitterListFeed to determine whether to run and load new feeds.
     * Both of these are changed by determineNeedToReload which gets run
     * whenever there might be a difference between the current requested and 
     * current loaded Twitter feed. Default is true for both as initially no
     * Twitter feed is loaded, though this is nominal, since 
     * determineNeedToReload gets run when twitter is first opened.
     */
    self.needTwitterUserReload = ko.observable(true);
    self.needTwitterListReload = ko.observable(true);

    /**
     * If the twitter list feed has never been loaded before, it should be 
     * loaded whenever the user requests it.
     */
    self.firstListLoad = true;


    self.$twitterListDiv = $('#twitter-list');
    self.$twitterAccountDiv = $('#twitter-account');

    self.glowingTwitter = false;
    // The twitter tab bright image is currently fading.
    self.glowingTwitterFading = false;
    // Opacity tracking self.$tabHLList
    self.glowingTwitterOpacity = 0;


    self.glowingList = false;
    // The twitter tab bright image is currently fading.
    self.glowingListFading = false;
    // Opacity tracking self.$tabHLList
    self.glowingListOpacity = 0;

    self.glowingFilter = false;
    // The twitter tab bright image is currently fading.
    self.glowingFilterFading = false;
    // Opacity tracking self.$tabHLList
    self.glowingFilterOpacity = 0;


    /**
     * These filters are connected to checkboxes on the view. If one of them is 
     * on, only the markers that pass that filter will be displayed. If filter
     * is added here, be sure to add it to self.filters directly below the 
     * following block of observables.
     */
    self.filterDiverse = ko.observable(false);
    self.filterWomen = ko.observable(false);
    self.filterBlack = ko.observable(false);
    self.filterAboriginal = ko.observable(false);
    self.filterQueer = ko.observable(false);
    self.filterAsian = ko.observable(false);
    self.filterLatin = ko.observable(false);
    self.filterAlternative = ko.observable(false);
    self.filterCommunity = ko.observable(false);
    self.filterInternational = ko.observable(false);
    self.filterChildren = ko.observable(false);
    self.filterTechnology = ko.observable(false);
    self.filterOffice = ko.observable(false);
    self.filterVenue = ko.observable(false);


    // These are used to sort first forwards and then backwards.
    self.sortedAlpha = false;
    self.sortedFounded = false;
    self.currentSort = ko.observable('');

    /**
     * This is the div that comes in from the left and displays information 
     * about a marker.
     */
    self.$divInfo = $('#display-div');


    /**
     * This will be the only google.maps.InfoWindow that is displayed.
     */
    self.infoWindow = {};


    /**
     * The credit div at the bottom of the app.
     */
    self.$creditDiv = $('#credit-div');
    self.creditOn = ko.observable(false);

    /**
     * Add the above methods to TheatreMapViewModel
     */
    return self;

}(TheatreMapViewModel || {}));

var ko = ko || {};
var google = google || {};
var mapManager = mapManager || {};

/**
 * [description]
 * @param  {object} self is whatever version of TheatreMapViewModel was passed
 *                       to this module.
 */
var TheatreMapViewModel = (function(self) {
    'use strict';

    /**
     * Here we open the info div. Close all other divs if the screen is small
     * enough.
     */
    self.openLeftDiv = function() {
        self.$divInfo.addClass('left-div-on');
        self.$divInfo.removeClass('left-div-off');
        console.log('opening left div');
        if (mapManager.util.windowWidth < 1040) {
            if (self.listIsOpen()) {
                self.slideList();
            }
            if (self.twitterIsOpen()) {
                self.slideTwitter();
            }
            if (self.filterIsOpen()) {
                self.slideFilter();
            }
        }
    };

    /**
     * Reset the glow animation variables for all tabs that are no longer 
     * glowing.
     */
    self.stopGlow = function() {
        if (!self.glowingTwitter) { // Reset Twitter tab.
            self.glowingTwitterFading = false; // Glow begins like this.
            self.$tabHLTwitter.css('opacity', 0); // Set to transparent.
            self.glowingTwitterOpacity = 0; // Transparency tracking variable.
        }
        if (!self.glowingList) { // Reset list tab
            self.glowingTwitterFading = false; // Glow begins like this.
            self.$tabHLList.css('opacity', 0); // Set to transparent.
            self.glowingTwitterOpacity = 0; // Transparency tracking variable.
        }
        if (self.filterIsOpen()) { // Reset filter tab.
            self.glowingTwitterFading = false; // Glow begins like this.
            self.$tabHLFilter.css('opacity', 0); // Set to transparent.
            self.glowingTwitterOpacity = 0; // Transparency tracking variable.
        }

    };

    /**
     * Works to slide all right-divs off and on screen
     * @param  {string} type      The kind of div that you want to slide, start
     *                            with a Capital letter as that's how the code
     *                            is structured.
     * @param  {string} direction 'on' or 'off'
     */
    self.slideHelper = function(type, direction) {
        var lowered = type.toLowerCase();
        if (direction === 'off') {
            console.log('Closing ' + type); // DEBUG
            self[lowered + 'IsOpen'](false); // Don't load anything to Twitter
            self['$div' + type].addClass('right-div-off'); // Place the div offscreen
            self['$tabAll' + type].addClass('tab-off'); // Move the tab as well
            self['$div' + type].removeClass('right-div-on');
            self['$tabAll' + type].removeClass('tab-on');
            self['$tabBack' + type].css('opacity', 0); // Show Twitter logo.
        } else if (direction === 'on') {
            console.log('Opening ' + type); // DEBUG
            self[lowered + 'IsOpen'](true); // Load things into Twitter
            self.determineNeedToReload(); // May need to replace loaded DOM element
            self['$div' + type].addClass('right-div-on'); // Place the div onscreen
            self['$tabAll' + type].addClass('tab-on'); // Move the tab as well
            self['$div' + type].removeClass('right-div-off');
            self['$tabAll' + type].removeClass('tab-off');
            self['$tabBack' + type].css('opacity', 1); // Show back button.
        } else {
            console.log('Invalid direction' + direction + 'passed to slideHelper');
        }
    };

    /**
     * Slide the div with the list of theatres on and off screen.
     */
    self.slideList = function() {
        if (self.listIsOpen()) { // Then close it
            self.slideHelper('List', 'off');
        } else { // open list
            if (self.glowingList) { // Shouldn't glow if the div is open.
                self.glowingList = false; // Update for glowAnimation
                self.stopGlow(); // Reset default glow values
            }
            self.slideHelper('List', 'on');
        }
    };

    /**
     * Toggle whether the filter div in on or offscreen.
     */
    self.slideFilter = function() {
        if (self.filterIsOpen()) { // then close it
            self.slideHelper('Filter', 'off');
        } else { // open filter
            self.slideHelper('Filter', 'on');
        }
    };


    /**
     * Slide the twitter pane in and out of view, enabling/disabling its drain 
     * on resources.
     */
    self.slideTwitter = function() {
        if (self.twitterIsOpen()) { // then close it
            self.slideHelper('Twitter', 'off');
        } else { // open twitter
            self.slideHelper('Twitter', 'on');
        }
    };

    /**
     * Turn off twitterListView so that individual Twitter accounts can be 
     * viewed.
     */
    self.userTwitter = function() {
        self.twitterListView(false);
    };

    /**
     * Update needTwitterUserReload and needTwitterListReload depending on 
     * whether the currently loaded feed type matches the requested feed type.
     * This function is called whenever any change is done to the Twitter 
     * portion of the app. There were some issues regarding using a computed 
     * for this purpose that I did not fully understand so this solution was 
     * chosen.
     */
    self.determineNeedToReload = function() {
        // The following three variables are created for readability.
        var longUser = self.currentTwitterUserLong; // Loaded user feed
        var longList = self.currentTwitterListLong; // Loaded list feed
        var longTwitter = self.twitterLong(); // Requested feed type
        console.log('Determining need to reload.'); // DEBUG
        console.log('longList: ' + longList); // DEBUG
        console.log('longUser: ' + longUser); // DEBUG
        console.log('longTwitter: ' + longTwitter); // DEBUG
        var listResult = (longList && !longTwitter) || (!longList && longTwitter); // DEBUG
        var userResult = (longUser && !longTwitter) || (!longUser && longTwitter); // DEBUG
        console.log('Current need to reload twitter list: ' + listResult); // DEBUG
        console.log('Current need to reload twitter user: ' + userResult); // DEBUG
        // If the requested and loaded feeds don't match, a reload is required.
        self.needTwitterUserReload((longUser && !longTwitter) ||
            (!longUser && longTwitter));
        self.needTwitterListReload((longList && !longTwitter) ||
            (!longList && longTwitter));
        if (self.needTwitterUserReload() || self.needTwitterListReload()) {
            // If there is some change worth reloading, twitter tab should glow 
            // to indicate this.
            self.glowingTwitter = true;
        }
    };

    /**
     * Open the marker and set the observable holding the active twitter account
     * to the value stored in it.
     * @param  {Object} marker to access
     */
    self.accessMarker = function(marker) {
        console.log('Accessing marker.');
        console.log('The screen width is ' + mapManager.util.windowWidth);
        if (self.listIsOpen() && mapManager.util.windowWidth < 1040) {
            self.slideList(); // close list div on small screen when accessing
        }
        // Set observables holding information on selected marker.
        self.currentTitle(marker.title);
        self.currentWebsite(marker.website);
        self.currentBlurb(marker.blurb);
        self.currentAddress(marker.address);
        // This has to come after the last 4, as currentInfo is a computed based
        // on currentTitle and currentAddress.
        self.infoWindow.setContent(self.currentInfo());
        // Move to a position where the Info Window can be displayed and open it.
        mapManager.map.panTo(marker.getPosition());
        self.openInfoWindow(marker);

        self.openLeftDiv(); // Open the div that slides from offscreen left.
        self.activeTwitter(marker.twitterHandle); // What Twitter feed to get
        self.userTwitter(); // Twitter should go into user view
        self.determineNeedToReload(); // We might have a new twitter feed to load
    };

    /**
     * This is used inside the forEach loop in self.addMarkers. It makes sure
     * that the listeners are bound to the correct markers and that the 
     * InfoWindows open when the markers are clicked.
     * @param  {object} marker  This is the marker that we want to create a 
     *                          binding for.
     */
    self.infoWindowBinder = function(marker) {
        marker.addListener('click', function() {
            self.accessMarker(marker);
        });
    };

    /**
     * Does the following :
     *     - adds all the Markers from the mapManager onto the map
     *     - adds the InfoWindows 
     *     - binds the InfoWindows to open on clicks on corresponding Markers
     *     
     * When necessary, makeAJAX calls to find wikipedia resources for the 
     * InfoWindows and calls to Google Maps geocoding API in order to translate 
     * addresses into coordinates on the map. These calls only happen if there
     * is incomplete information in each markerItem.
     */
    self.addMarkers = function() {
        /**
         * mapManager.markerData holds a series of objects with the information 
         * about theatres needed to create appropriate Markers.
         * @param  {object} markerData        An object holding data for a 
         *                                    marker.                                 
         * @param  {int}    index             Used to set curMarker             
         */
        mapManager.markerData.forEach(function(markerItem, index) {
            // Store marker in an observable array self.markers.
            mapManager.pushMarker(markerItem, self.markers);
            var curMarker = self.markers()[index]; // Marker that was just pushed
            // Move the marker to the correct position on the map.
            mapManager.adjustPosition(curMarker, markerItem);
            // Add a blank InfoWindow to curMarker to be filled below.
            //curMarker.infoWin = new google.maps.InfoWindow(mapManager.util.blankInfoWin);
            // Set up a listener on the marker that will open the corresponding
            // InfoWindow when the Marker is clicked.
            //curMarker.infoWin.setContent(curMarker.title);
            self.infoWindowBinder(curMarker);
            // These variables are set for readability.
            var title = markerItem.title; // Title of marker.
            var website = markerItem.website; // Website associated with marker.
            var blurb = markerItem.blurb; // Description associated with marker.
            // Fill the corresponding InfoWindow with the data we have.
            mapManager.setDescription(curMarker, title, website, blurb);
        });

        // Sort the list of markers in alphabetical order such that the buttons
        // corresponding to the markers will be displayed in this way on the View
        self.sortListAlpha();
        // Save coordinates to localStorage so that we can avoid using AJAX
        // calls next time around. DOESN'T WORK YET.
        // mapManager.store();
        self.infoWindow = new google.maps.InfoWindow(mapManager.util.blankInfoWin);
        self.glowingList = false;
        self.pickRandomTheatre();
        /**
         * Begin the glow animation on the tabs, indicating some update to
         * particular tab. Updates are handled separately through the 
         * self.glowing* variables.
         */
        window.requestAnimationFrame(self.glowAnimation);
    };

    /**
     * This computed creates some html content to be used by self.infoWindow.
     * @return {string}   html containing the selected marker's title and 
     *                         website properly formatted.
     */
    self.currentInfo = ko.computed(function() {
        var content = '<div><span class="info-title">' +
            self.currentTitle() +
            '</span><br>' +
            self.currentAddress() +
            '</div>';
        return content;
    });

    /**
     * Picks a random twitter account from the set of markers and makes it the 
     * initial active twitter in the Twitter div.
     */
    self.pickRandomTheatre = function() {
        var num = self.markers().length;
        var choice = Math.floor((Math.random() * num));
        self.activeTwitter(self.markers()[choice].twitterHandle);
        self.currentTitle(self.markers()[choice].title);
        /**
         * Since this is only run when the app loads, we don't want to have it 
         * set off the glow on the Twitter tab.
         */
        self.glowingTwitter = false;
        self.stopGlow();
    };

    /**
     * Add the above methods to TheatreMapViewModel
     */
    return self;

}(TheatreMapViewModel || {}));
