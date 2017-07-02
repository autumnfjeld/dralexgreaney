(function(window) {"use strict";function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function researchProjectTemplateFunc(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (abstract, expandedText, imageCaption, imageTitle, imageUrl, layout, projectImages, projectWriteUp, title) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Csection id=\"research-project\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"white-popup\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-times\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"mfp-close\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-12 col-sm-12\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003C!--a.back.mb-4(href=\"#research\")--\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003C!--    i.fa.fa-arrow-left--\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003C!--    span Back--\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"section-title\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
if (layout !== "bigImage") {
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-3\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cul class=\"list-group list-group-flush\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "Lisa Jones PhD\u003C\u002Fli\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "Suzi Queue\u003C\u002Fli\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "paper references\u003C\u002Fli\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cli class=\"list-group-item\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "Links to other places\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cfigure class=\"figure mt-2\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"figure-img img-fluid rounded\""+pug_attr("src", imageUrl, true, false)+pug_attr("alt", imageTitle, true, false)) + "\u002F\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cfigcaption class=\"figure-caption\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + " ";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = imageCaption) ? "" : pug_interp)) + "\u003C\u002Ffigcaption\u003E\u003C\u002Ffigure\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-8\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-columns\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
// iterate expandedText
;(function(){
  var $$obj = expandedText;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var paragraph = $$obj[pug_index0];
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = paragraph) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var paragraph = $$obj[pug_index0];
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = paragraph) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cfigure class=\"figure mt-2 text-center\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"figure-img img-fluid rounded\""+pug_attr("src", projectImages[0].imgUrl, true, false)+pug_attr("alt", projectImages[0].imgCaption, true, false)) + "\u002F\u003E\u003C\u002Ffigure\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-columns px-5 pb-5\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = abstract) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
// iterate projectWriteUp
;(function(){
  var $$obj = projectWriteUp;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var paragraph = $$obj[pug_index1];
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = paragraph) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var paragraph = $$obj[pug_index1];
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fresearch-project.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = paragraph) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";}.call(this,"abstract" in locals_for_with?locals_for_with.abstract:typeof abstract!=="undefined"?abstract:undefined,"expandedText" in locals_for_with?locals_for_with.expandedText:typeof expandedText!=="undefined"?expandedText:undefined,"imageCaption" in locals_for_with?locals_for_with.imageCaption:typeof imageCaption!=="undefined"?imageCaption:undefined,"imageTitle" in locals_for_with?locals_for_with.imageTitle:typeof imageTitle!=="undefined"?imageTitle:undefined,"imageUrl" in locals_for_with?locals_for_with.imageUrl:typeof imageUrl!=="undefined"?imageUrl:undefined,"layout" in locals_for_with?locals_for_with.layout:typeof layout!=="undefined"?layout:undefined,"projectImages" in locals_for_with?locals_for_with.projectImages:typeof projectImages!=="undefined"?projectImages:undefined,"projectWriteUp" in locals_for_with?locals_for_with.projectWriteUp:typeof projectWriteUp!=="undefined"?projectWriteUp:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}window.app = window.app || {};window.app.researchProjectTemplateFunc = researchProjectTemplateFunc;}(window));