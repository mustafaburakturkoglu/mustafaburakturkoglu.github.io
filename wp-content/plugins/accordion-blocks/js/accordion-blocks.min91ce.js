!function(u){"use strict";u(".js-accordion-item").removeClass("no-js"),u.fn.accordionBlockItem=function(o){var n=u.extend({initiallyOpen:!1,autoClose:!0,clickToClose:!0,scroll:!1,scrollOffset:!1},o),t=250,c=window.location.hash.replace("#",""),e={};function i(o){return u(o).children(".js-accordion-controller").attr("id").replace("at-","")}function s(){r(),e.content.clearQueue().stop().slideDown(t,function(){n.scroll&&setTimeout(function(){u("html, body").animate({scrollTop:e.self.offset().top-n.scrollOffset},t)},t)}),u(document).trigger("openAccordionItem",e)}function r(){e.self.addClass("is-open is-read"),e.controller.attr("aria-expanded",!0),e.content.prop("hidden",!1)}function l(){e.content.slideUp(t,function(){a()})}function a(){e.self.removeClass("is-open"),e.controller.attr("aria-expanded",!1),e.content.attr("hidden",!0)}function d(){n.autoClose&&e.self.hasClass("is-open")&&l()}return e.self=u(this),e.id=u(this).attr("id"),e.controller=u(this).children(".js-accordion-controller"),e.uuid=i(e.self),e.content=u("#ac-"+e.uuid),e.accordionGroupItems=[e.uuid],e.accordionAncestorItems=[],e.controller.attr({tabindex:0,"aria-controls":"ac-"+e.uuid}),n.scrollOffset=Math.floor(parseInt(n.scrollOffset,10))||0,u.each(e.self.siblings(".js-accordion-item"),function(o,n){var t=i(n);e.accordionGroupItems.push(t)}),u.each(e.self.parents(".js-accordion-item"),function(o,n){var t=i(n);e.accordionAncestorItems.push(t)}),n.initiallyOpen?r():e.id===c?(s(),u.each(e.accordionAncestorItems,function(o,n){u(document).trigger("openAncestorAccordionItem",n)})):a(),e.controller.on("click",function(){return e.self.hasClass("is-open")?n.clickToClose&&l():s(),!1}),u(document).on("openAccordionItem",function(o,n){n!==e&&0<n.accordionGroupItems.indexOf(e.uuid)&&-1===n.accordionAncestorItems.indexOf(e.uuid)&&d()}),u(document).on("openAncestorAccordionItem",function(o,n){n===e.uuid&&s()}),e.controller.on("keydown",function(o){var n=o.which;"BUTTON"!==e.controller.prop("tagName")&&(13!==n&&32!==n||u(this).click()),27===n&&d()}),u(window).on("hashchange",function(){var o;(c=window.location.hash.replace("#",""))!==e.id||(o=u("#"+c)).length&&o.hasClass("js-accordion-item")&&(s(),u.each(e.accordionAncestorItems,function(o,n){u(document).trigger("openAncestorAccordionItem",n)}))}),this},u(window).on("load",function(){u(".js-accordion-item").each(function(){u(this).accordionBlockItem({initiallyOpen:u(this).data("initially-open"),autoClose:u(this).data("auto-close"),clickToClose:u(this).data("click-to-close"),scroll:u(this).data("scroll"),scrollOffset:u(this).data("scroll-offset")})})})}(jQuery);