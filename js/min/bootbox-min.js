!function(t,o){"use strict";"function"==typeof define&&define.amd?define(["jquery"],o):"object"==typeof exports?module.exports=o(require("jquery")):t.bootbox=o(t.jQuery)}(this,function t($,o){"use strict";function e(t){var o=m[d.locale];return o?o[t]:m.en[t]}function a(t,o,e){t.stopPropagation(),t.preventDefault();var a=$.isFunction(e)&&e(t)===!1;a||o.modal("hide")}function n(t){var o,e=0;for(o in t)e++;return e}function r(t,o){var e=0;$.each(t,function(t,a){o(t,a,e++)})}function i(t){var o,e;if("object"!=typeof t)throw new Error("Please supply an object of options");if(!t.message)throw new Error("Please specify a message");return t=$.extend({},d,t),t.buttons||(t.buttons={}),t.backdrop=t.backdrop?"static":!1,o=t.buttons,e=n(o),r(o,function(t,a,n){if($.isFunction(a)&&(a=o[t]={callback:a}),"object"!==$.type(a))throw new Error("button with key "+t+" must be an object");a.label||(a.label=t),a.className||(a.className=2>=e&&n===e-1?"btn-primary":"btn-default")}),t}function l(t,o){var e=t.length,a={};if(1>e||e>2)throw new Error("Invalid argument length");return 2===e||"string"==typeof t[0]?(a[o[0]]=t[0],a[o[1]]=t[1]):a=t[0],a}function c(t,o,e){return $.extend(!0,{},t,l(o,e))}function s(t,o,e,a){var n={className:"bootbox-"+t,buttons:u.apply(null,o)};return p(c(n,a,e),o)}function u(){for(var t={},o=0,a=arguments.length;a>o;o++){var n=arguments[o],r=n.toLowerCase(),i=n.toUpperCase();t[r]={label:e(i)}}return t}function p(t,e){var a={};return r(e,function(t,o){a[o]=!0}),r(t.buttons,function(t){if(a[t]===o)throw new Error("button key "+t+" is not allowed (options are "+e.join("\n")+")")}),t}var b={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},d={locale:"en",backdrop:!0,animate:!0,className:null,closeButton:!0,show:!0,container:"body"},f={};f.alert=function(){var t;if(t=s("alert",["ok"],["message","callback"],arguments),t.callback&&!$.isFunction(t.callback))throw new Error("alert requires callback property to be a function when provided");return t.buttons.ok.callback=t.onEscape=function(){return $.isFunction(t.callback)?t.callback():!0},f.dialog(t)},f.confirm=function(){var t;if(t=s("confirm",["cancel","confirm"],["message","callback"],arguments),t.buttons.cancel.callback=t.onEscape=function(){return t.callback(!1)},t.buttons.confirm.callback=function(){return t.callback(!0)},!$.isFunction(t.callback))throw new Error("confirm requires a callback");return f.dialog(t)},f.prompt=function(){var t,e,a,n,i,l,s;if(n=$(b.form),e={className:"bootbox-prompt",buttons:u("cancel","confirm"),value:"",inputType:"text"},t=p(c(e,arguments,["title","callback"]),["cancel","confirm"]),l=t.show===o?!0:t.show,t.message=n,t.buttons.cancel.callback=t.onEscape=function(){return t.callback(null)},t.buttons.confirm.callback=function(){var o;switch(t.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":o=i.val();break;case"checkbox":var e=i.find("input:checked");o=[],r(e,function(t,e){o.push($(e).val())})}return t.callback(o)},t.show=!1,!t.title)throw new Error("prompt requires a title");if(!$.isFunction(t.callback))throw new Error("prompt requires a callback");if(!b.inputs[t.inputType])throw new Error("invalid prompt type");switch(i=$(b.inputs[t.inputType]),t.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":i.val(t.value);break;case"select":var d={};if(s=t.inputOptions||[],!s.length)throw new Error("prompt with select requires options");r(s,function(t,e){var a=i;if(e.value===o||e.text===o)throw new Error("given options in wrong format");e.group&&(d[e.group]||(d[e.group]=$("<optgroup/>").attr("label",e.group)),a=d[e.group]),a.append("<option value='"+e.value+"'>"+e.text+"</option>")}),r(d,function(t,o){i.append(o)}),i.val(t.value);break;case"checkbox":var m=$.isArray(t.value)?t.value:[t.value];if(s=t.inputOptions||[],!s.length)throw new Error("prompt with checkbox requires options");if(!s[0].value||!s[0].text)throw new Error("given options in wrong format");i=$("<div/>"),r(s,function(o,e){var a=$(b.inputs[t.inputType]);a.find("input").attr("value",e.value),a.find("label").append(e.text),r(m,function(t,o){o===e.value&&a.find("input").prop("checked",!0)}),i.append(a)})}return t.placeholder&&i.attr("placeholder",t.placeholder),t.pattern&&i.attr("pattern",t.pattern),n.append(i),n.on("submit",function(t){t.preventDefault(),t.stopPropagation(),a.find(".btn-primary").click()}),a=f.dialog(t),a.off("shown.bs.modal"),a.on("shown.bs.modal",function(){i.focus()}),l===!0&&a.modal("show"),a},f.dialog=function(t){t=i(t);var o=$(b.dialog),e=o.find(".modal-dialog"),n=o.find(".modal-body"),l=t.buttons,c="",s={onEscape:t.onEscape};if(r(l,function(t,o){c+="<button data-bb-handler='"+t+"' type='button' class='btn "+o.className+"'>"+o.label+"</button>",s[t]=o.callback}),n.find(".bootbox-body").html(t.message),t.animate===!0&&o.addClass("fade"),t.className&&o.addClass(t.className),"large"===t.size&&e.addClass("modal-lg"),"small"===t.size&&e.addClass("modal-sm"),t.title&&n.before(b.header),t.closeButton){var u=$(b.closeButton);t.title?o.find(".modal-header").prepend(u):u.css("margin-top","-10px").prependTo(n)}return t.title&&o.find(".modal-title").html(t.title),c.length&&(n.after(b.footer),o.find(".modal-footer").html(c)),o.on("hidden.bs.modal",function(t){t.target===this&&o.remove()}),o.on("shown.bs.modal",function(){o.find(".btn-primary:first").focus()}),o.on("escape.close.bb",function(t){s.onEscape&&a(t,o,s.onEscape)}),o.on("click",".modal-footer button",function(t){var e=$(this).data("bb-handler");a(t,o,s[e])}),o.on("click",".bootbox-close-button",function(t){a(t,o,s.onEscape)}),o.on("keyup",function(t){27===t.which&&o.trigger("escape.close.bb")}),$(t.container).append(o),o.modal({backdrop:t.backdrop,keyboard:!1,show:!1}),t.show&&o.modal("show"),o},f.setDefaults=function(){var t={};2===arguments.length?t[arguments[0]]=arguments[1]:t=arguments[0],$.extend(d,t)},f.hideAll=function(){return $(".bootbox").modal("hide"),f};var m={br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return f.init=function(o){return t(o||$)},f});