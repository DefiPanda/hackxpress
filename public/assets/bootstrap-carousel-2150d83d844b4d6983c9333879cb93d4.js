!function(t){"use strict";var e=function(e,i){this.$element=t(e),this.options=i,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.prototype={cycle:function(e){return e||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},to:function(e){var i=this.$element.find(".item.active"),s=i.parent().children(),n=s.index(i),r=this;if(!(e>s.length-1||0>e))return this.sliding?this.$element.one("slid",function(){r.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(s[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(e,i){var s,n=this.$element.find(".item.active"),r=i||n[e](),a=this.interval,l="next"==e?"left":"right",o="next"==e?"first":"last",h=this;if(this.sliding=!0,a&&this.pause(),r=r.length?r:this.$element.find(".item")[o](),s=t.Event("slide",{relatedTarget:r[0]}),!r.hasClass("active")){if(t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(s),s.isDefaultPrevented())return;r.addClass(e),r[0].offsetWidth,n.addClass(l),r.addClass(l),this.$element.one(t.support.transition.end,function(){r.removeClass([e,l].join(" ")).addClass("active"),n.removeClass(["active",l].join(" ")),h.sliding=!1,setTimeout(function(){h.$element.trigger("slid")},0)})}else{if(this.$element.trigger(s),s.isDefaultPrevented())return;n.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return a&&this.cycle(),this}}};var i=t.fn.carousel;t.fn.carousel=function(i){return this.each(function(){var s=t(this),n=s.data("carousel"),r=t.extend({},t.fn.carousel.defaults,"object"==typeof i&&i),a="string"==typeof i?i:r.slide;n||s.data("carousel",n=new e(this,r)),"number"==typeof i?n.to(i):a?n[a]():r.interval&&n.cycle()})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.carousel.data-api","[data-slide]",function(e){var i,s=t(this),n=t(s.attr("data-target")||(i=s.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")),r=t.extend({},n.data(),s.data());n.carousel(r),e.preventDefault()})}(window.jQuery);