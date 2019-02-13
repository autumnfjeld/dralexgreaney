(function(window) {"use strict";function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function researchProjectTemplateFunc(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (expandedContent, imageTitle, publications, researchers, title) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Csection id=\"research-project\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"project-container\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003C!-- TODO: redo with flexbox--\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"section-title\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"researchers-box\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "Publications\u003C\u002Fh4\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
// iterate publications
;(function(){
  var $$obj = publications;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var pub = $$obj[pug_index0];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp class=\"researcher\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", pub.url, true, false)+" target=\"_blank\"") + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pub.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var pub = $$obj[pug_index0];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp class=\"researcher\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", pub.url, true, false)+" target=\"_blank\"") + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pub.title) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fp\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-5\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"researchers-box\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "Researchers\u003C\u002Fh4\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
// iterate researchers
;(function(){
  var $$obj = researchers;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var member = $$obj[pug_index1];
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"researcher\""+pug_attr("data-id", member.id, true, false)) + "\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = member.name) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var member = $$obj[pug_index1];
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"researcher\""+pug_attr("data-id", member.id, true, false)) + "\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = member.name) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"images-box\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
// iterate expandedContent.images
;(function(){
  var $$obj = expandedContent.images;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var image = $$obj[pug_index2];
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cfigure class=\"figure mb-4\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"figure-img img-fluid rounded\""+pug_attr("src", image.url, true, false)+pug_attr("alt", imageTitle, true, false)) + "\u002F\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cfigcaption class=\"figure-caption\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = image.caption) ? "" : pug_interp)) + "\u003C\u002Ffigcaption\u003E\u003C\u002Ffigure\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var image = $$obj[pug_index2];
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cfigure class=\"figure mb-4\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"figure-img img-fluid rounded\""+pug_attr("src", image.url, true, false)+pug_attr("alt", imageTitle, true, false)) + "\u002F\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cfigcaption class=\"figure-caption\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = image.caption) ? "" : pug_interp)) + "\u003C\u002Ffigcaption\u003E\u003C\u002Ffigure\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-7\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"paragraphs\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
// iterate expandedContent.paragraphs
;(function(){
  var $$obj = expandedContent.paragraphs;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var paragraph = $$obj[index];
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp class=\"paragraph\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = paragraph) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var paragraph = $$obj[index];
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp class=\"paragraph\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = paragraph) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";}.call(this,"expandedContent" in locals_for_with?locals_for_with.expandedContent:typeof expandedContent!=="undefined"?expandedContent:undefined,"imageTitle" in locals_for_with?locals_for_with.imageTitle:typeof imageTitle!=="undefined"?imageTitle:undefined,"publications" in locals_for_with?locals_for_with.publications:typeof publications!=="undefined"?publications:undefined,"researchers" in locals_for_with?locals_for_with.researchers:typeof researchers!=="undefined"?researchers:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}window.app = window.app || {};window.app.researchProjectTemplateFunc = researchProjectTemplateFunc;}(window));