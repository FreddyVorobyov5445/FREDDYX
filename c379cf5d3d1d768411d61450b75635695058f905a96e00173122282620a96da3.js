var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(){"use strict";var r={n:function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(t,{a:t}),t},d:function(o,t){for(var e in t)r.o(t,e)&&!r.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})},o:function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}},o=jQuery,e=r.n(o),n=Roblox,a={cssClass:"text-link",hasProtocolRegex:/(https?:\/\/)/,regex:/(https?:\/\/)?(?:www\.)?([a-z0-9-]{2,}\.)*(((m|de|www|web|api|blog|wiki|corp|events|polls|bloxcon|developer|devforum|forum|status)\.roblox\.com|robloxlabs\.com)|(www\.shoproblox\.com)|(roblox\.status\.io)|(rblx\.co)|help\.roblox\.com(?![A-Za-z0-9/.]*\/attachments\/))(?!\/[A-Za-z0-9-+&@#/=~_|!:,.;]*%)((\/[A-Za-z0-9-+&@#/%?=~_|!:,.;]*)|(?=\s|\b))/gm,doNotUpgradeToHttpsRegex:/(([^.]help|polls)\.roblox\.com)/,robloxDomainSuffixes:[".roblox.com",".robloxlabs.com"]};function l(o){return o.match(a.doNotUpgradeToHttpsRegex)}function t(o){var t=e=o.replace(/&amp;/g,"&"),e=e.replace(/\.+$/g,""),e=(o=e).match(a.hasProtocolRegex)?o:(l(o)?"http://":"https://").concat(o),e=l(o=e)?o.replace("https://","http://"):o.replace("http://","https://"),o=$("<a></a>");o.addClass(a.cssClass),o.attr("href",e),o.text(t),void 0!==n.DeviceMeta&&(0,n.DeviceMeta)().isPhone||o.attr("target","_blank");t="noopener";return function(o){var t=o.prop("hostname");if(void 0!==t)for(var e=a.robloxDomainSuffixes,r=0;r<e.length;r++){var n=e[r];if(t.endsWith(n))return 1}}(o)||(t+=" noreferrer"),o.attr("rel",t),o.clone().wrap("<div>").parent().html()}var i={String:function(o){return 0<$("<div>".concat(o,"</div>")).find("a[href]").length?o:o.replace(a.regex,t)}};window.Roblox=window.Roblox||{},window.Roblox.Linkify=i,e().fn.linkify=function(){return this.each(function(){var o=e()(this),t=o.html();null!=t&&(t=i.String(t),o.html(t))})},e()(function(){e()(".linkify").linkify()})}();
//# sourceMappingURL=https://js.rbxcdn.com/964e2b1ef97cbcbb7fe12e5ada00b6f6-linkify.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Linkify");

}
/*
     FILE ARCHIVED ON 03:09:23 Feb 06, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:43:26 Feb 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.057
  cdx.remote: 0.102
  esindex: 0.01
  LoadShardBlock: 255.175 (6)
  PetaboxLoader3.datanode: 166.154 (7)
  load_resource: 130.332
  PetaboxLoader3.resolve: 73.213
*/