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

!function(){"use strict";var r={n:function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},d:function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},e=jQuery,i=r.n(e),n=["POST","PUT","DELETE","PATCH"],o=[".roblox.com",".robloxlabs.com",".roblox.qq.com"],a=":443",t="",u=null,s={setToken:function(e){e&&(t=e,u=new Date)},getToken:function(){var e;return""===t&&0<(e=i()("meta[name='csrf-token']")).length&&(t=e.data("token"),(e=e.data("timestamp"))&&(u=new Date(Date.parse(e)))),t},requiresXsrf:function(e,t){return 0<=n.indexOf(null==e?void 0:e.toUpperCase())&&function(e){e=function(e){var t=document.createElement("a");t.href=e;t=t.host;t.endsWith(a)&&(t=t.substring(0,t.length-a.length));return t}(e);return e===location.host||function(e){for(var t=0;t<o.length;t++)if(e.endsWith(o[t]))return!0;return!1}(e)}(t)&&!(null===(t=null==(t=t=t)?void 0:t.split("?")[0])||void 0===t?void 0:t.toLowerCase().endsWith(".aspx"))},getTokenTimestamp:function(){return u},xsrfHeaderName:"X-CSRF-TOKEN"},l="X-CSRF-TOKEN",f=403;function c(e,t,n){var r=s.getToken();""!==r&&s.requiresXsrf(n.type,n.url)&&t.setRequestHeader(l,r)}function d(e,n,r){if("jsonp"!==e.dataType&&"script"!==e.dataType&&s.requiresXsrf(e.type,e.url)){n.error&&(n._error=n.error),e.error=function(){};var o=i().Deferred();return r.done(o.resolve),r.fail(function(){var e,t=Array.prototype.slice.call(arguments);r.status==f&&null!==r.getResponseHeader(l)?null!=(e=r.getResponseHeader(l))?(s.setToken(e),i().ajax(n).then(o.resolve,o.reject)):o.rejectWith(r,t):(n._error&&o.fail(n._error),o.rejectWith(r,t))}),o.promise(r)}}var m={initialize:function(){i()(document).ajaxSend(c),i().ajaxPrefilter(d)}},p="CsrfToken",T=300;function b(e){i()("<input />").attr("type","hidden").attr("name",p).attr("value",s.getToken()).appendTo(e)}function h(e){var r,t=e?e.target:this;if("true"!==t.dataset.ajax){if(e=t,s.requiresXsrf(e.getAttribute("method"),e.getAttribute("action"))&&s.getToken()&&0===i()(e).children("input[name='"+p+"']").length)return null===(e=s.getTokenTimestamp())||(e=new Date-e,T<e/1e3)?(r=function(e){e&&s.setToken(e),b(t),t._submit()},i().ajax({method:"GET",url:"/XsrfToken",success:function(e,t,n){n=n.getResponseHeader("X-CSRF-TOKEN");r(n)},error:function(){r(null)}}),!1):(b(t),void t._submit());t._submit()}}e={initialize:function(){window.addEventListener("submit",h,!0),HTMLFormElement.prototype._submit=HTMLFormElement.prototype.submit,HTMLFormElement.prototype.submit=h}},window.Roblox=window.Roblox||{},window.Roblox.XsrfToken=s,window.Roblox.XsrfTokenFormInjector=e,m.initialize()}();
//# sourceMappingURL=https://js.rbxcdn.com/9824b4f746f687bf44e8de0590f0f913-xsrfProtection.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("XsrfProtection");

}
/*
     FILE ARCHIVED ON 03:09:23 Feb 06, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:43:32 Feb 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.07
  cdx.remote: 1.098
  esindex: 0.011
  LoadShardBlock: 254.156 (6)
  PetaboxLoader3.datanode: 197.127 (7)
  load_resource: 105.226
  PetaboxLoader3.resolve: 51.065
*/