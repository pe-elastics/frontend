(this["webpackJsonppe-elastics-frontend"]=this["webpackJsonppe-elastics-frontend"]||[]).push([[51,81],{400:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,s,o){if(t.language===a){var r=t.tokenStack=[];t.code=t.code.replace(s,(function(e){if("function"===typeof o&&!o(e))return e;for(var s,i=r.length;-1!==t.code.indexOf(s=n(a,i));)++i;return r[i]=e,s})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var s=0,o=Object.keys(t.tokenStack);!function r(i){for(var l=0;l<i.length&&!(s>=o.length);l++){var u=i[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=o[s],p=t.tokenStack[c],g="string"===typeof u?u:u.content,f=n(a,c),d=g.indexOf(f);if(d>-1){++s;var k=g.substring(0,d),b=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),h=g.substring(d+f.length),m=[];k&&m.push.apply(m,r([k])),m.push(b),h&&m.push.apply(m,r([h])),"string"===typeof u?i.splice.apply(i,[l,1].concat(m)):u.content=m}}else u.content&&r(u.content)}return i}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]},466:function(e,n,t){"use strict";var a=t(400);function s(e){e.register(a),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=s,s.displayName="handlebars",s.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.26e544f0.chunk.js.map