!function(t,e,n){function a(t,e){var n,a,o=t.keyCode,s=(e.data("dropkick"),e.find(".dk_options")),c=e.hasClass("dk_open"),k=e.find(".dk_option_current"),p=s.find("li").first(),u=s.find("li").last();switch(o){case h.enter:c?(i(k.find("a"),e),r(e)):l(e),t.preventDefault();break;case h.up:a=k.prev("li"),c?a.length?d(a,e):d(u,e):l(e),t.preventDefault();break;case h.down:c?(n=k.next("li").first(),n.length?d(n,e):d(p,e)):l(e),t.preventDefault()}}function i(t,e,n){var a,i,d;a=t.attr("data-dk-dropdown-value"),i=t.text(),d=e.data("dropkick"),$select=d.$select,$select.val(a),e.find(".dk_label").text(i),n=n||!1,d.settings.change&&!n&&d.settings.change.call($select,a,i)}function d(t,e){e.find(".dk_option_current").removeClass("dk_option_current"),t.addClass("dk_option_current"),o(e,t)}function o(t,e){var n=e.prevAll("li").outerHeight()*e.prevAll("li").length;t.find(".dk_options_inner").animate({scrollTop:n+"px"},0)}function r(t){t.removeClass("dk_open")}function l(t){t.data("dropkick");t.find(".dk_options").css({top:t.find(".dk_toggle").outerHeight()-1}),t.toggleClass("dk_open")}function s(e,n){var a,i=e,d=[];if(i=i.replace("{{ id }}",n.id),i=i.replace("{{ label }}",n.label),i=i.replace("{{ tabindex }}",n.tabindex),i=i.replace("{{ classname }}",n.classname),n.options&&n.options.length)for(var o=0,r=n.options.length;r>o;o++){var l=t(n.options[o]),s="dk_option_current",k=g;k=k.replace("{{ value }}",l.val()),k=k.replace("{{ current }}",c(l.val())===n.value?s:""),k=k.replace("{{ text }}",l.text()),d[d.length]=k}return a=t(i),a.find(".dk_options_inner").html(d.join("")),a}function c(e){return t.trim(e).length>0?e:!1}var k=navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/),p=!!k,u=p&&parseFloat(k[1])<7;u||(n.documentElement.className=n.documentElement.className+" dk_fouc");var f={},_=[],h={left:37,up:38,right:39,down:40,enter:13},v=['<div class="dk_container {{ classname }}" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">','<a class="dk_toggle">','<span class="dk_label">{{ label }}</span>','<span class="select-icon"></span>',"</a>",'<div class="dk_options">','<ul class="dk_options_inner">',"</ul>","</div>","</div>"].join(""),g='<li class="{{ current }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',m={startSpeed:100,theme:!1,change:!1};f.init=function(e){return e=t.extend({},m,e),this.each(function(){var n,a=t(this),i=a.find(":selected").first(),d=a.find("option"),o=a.data("dropkick")||{},r=a.attr("id")||a.attr("name"),l=(e.width||a.outerWidth(),a.attr("tabindex")?a.attr("tabindex"):""),k=a.attr("class")?a.attr("class"):"",p=!1;return o.id?a:(o.settings=e,o.tabindex=l,o.classname=k,o.id=r,o.$original=i,o.$select=a,o.value=c(a.val())||c(i.attr("value")),o.label=i.text(),o.options=d,p=s(v,o),p.find(".dk_toggle").css({}),a.before(p),p=t("#dk_container_"+r).addClass("dk_shown"),n=e.theme?e.theme:"default",p.addClass("dk_theme_"+n),o.theme=n,o.$dk=p,a.data("dropkick",o),p.data("dropkick",o),_[_.length]=a,p.bind("focus.dropkick",function(){p.addClass("dk_focus")}).bind("blur.dropkick",function(){p.removeClass("dk_open dk_focus")}),void setTimeout(function(){a.hide()},0))})},f.theme=function(e){var n=t(this),a=n.data("dropkick"),i=a.$dk,d="dk_theme_"+a.theme;i.removeClass(d).addClass("dk_theme_"+e),a.theme=e},f.reset=function(){for(var t=0,e=_.length;e>t;t++){var n=_[t].data("dropkick"),a=n.$dk,o=a.find("li").first();a.find(".dk_label").text(n.label),a.find(".dk_options_inner").animate({scrollTop:0},0),d(o,a),i(o,a,!0)}},t.fn.dropkick=function(t){if(!u){if(f[t])return f[t].apply(this,Array.prototype.slice.call(arguments,1));if("object"==typeof t||!t)return f.init.apply(this,arguments)}},t(function(){t(n).on("click",".dk_toggle",function(n){var a=t(this).parents(".dk_container").first();return l(a),"ontouchstart"in e&&(a.addClass("dk_touch"),a.find(".dk_options_inner").addClass("scrollable vertical")),n.preventDefault(),!1}),t(n).on(p?"mousedown":"click",".dk_options a",function(e){{var n=t(this),a=n.parents(".dk_container").first();a.data("dropkick")}return r(a),i(n,a),d(n.parent(),a),e.preventDefault(),!1}),t(n).bind("keydown.dk_nav",function(e){var n=t(".dk_container.dk_open"),i=t(".dk_container.dk_focus"),d=null;n.length?d=n:i.length&&!n.length&&(d=i),d&&a(e,d)})})}(jQuery,window,document);