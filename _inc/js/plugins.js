window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){var b=arguments,c;b.callee=b.callee.caller;c=[].slice.call(b);if(typeof console.log==="object")log.apply.call(console.log,console,c);else console.log.apply(console,c)}};(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b}})(function(){try{console.log();return window.console}catch(a){return window.console={}}}());if(!this.jQuery){document.write(unescape('%3Cscript src="/blog/js/libs/jquery-1.7.1.min.js"%3E%3C/script%3E'))}document.write(unescape('%3Cscript src="/blog/js/libs/jquery-placeholder.min.js"%3E%3C/script%3E'));document.write(unescape('%3Cscript src="/blog/js/libs/html5-forms.min.js"%3E%3C/script%3E'));document.write(unescape('%3Cscript src="/blog/js/libs/jquery-lazyload.min.js"%3E%3C/script%3E'));document.write(unescape('%3Cscript src="/blog/js/libs/fancybox/jquery.fancybox.pack.js"%3E%3C/script%3E'));document.write(unescape('%3Cscript src="http://connect.facebook.net/en_US/all.js"%3E%3C/script%3E'));(function(a){if(typeof a.browser==="undefined"||!a.browser){var b={};a.extend(b)}var c={flash:{activex:"ShockwaveFlash.ShockwaveFlash",plugin:/flash/gim},sl:{activex:["AgControl.AgControl"],plugin:/silverlight/gim},pdf:{activex:"PDF.PdfCtrl",plugin:/adobe\s?acrobat/gim},qtime:{activex:"QuickTime.QuickTime",plugin:/quicktime/gim},wmp:{activex:"WMPlayer.OCX",plugin:/(windows\smedia)|(Microsoft)/gim},shk:{activex:"SWCtl.SWCtl",plugin:/shockwave/gim},rp:{activex:"RealPlayer",plugin:/realplayer/gim},java:{activex:navigator.javaEnabled(),plugin:/java/gim}};var d=function(b){if(window.ActiveXObject){try{new ActiveXObject(c[b].activex);a.browser[b]=true}catch(d){a.browser[b]=false}}else{a.each(navigator.plugins,function(){if(this.name.match(c[b].plugin)){a.browser[b]=true;return false}else{a.browser[b]=false}})}};a.each(c,function(a,b){d(a)})})(jQuery);(function(a){var b=[];a.preLoadImages=function(){var a=arguments.length;for(var c=a;c--;){var d=document.createElement("img");d.src=arguments[c];b.push(d)}}})(this.jQuery);if(this.BrowserDetect.browser=="Explorer"&&this.BrowserDetect.version=="6"){for(i=0;i<document.styleSheets.length;i++){document.styleSheets.item(i).disabled=true}document.write(unescape("You are using an out of date browser, please update your browser at http://www.browsehappy.com"))}else{var framework={init:function(){if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)){var a=document.querySelectorAll('meta[name="viewport"]')[0];if(a){a.content="width=device-width,minimum-scale=1.0,maximum-scale=1.0";document.body.addEventListener("gesturestart",function(){a.content="width=device-width,minimum-scale=0.25,maximum-scale=1.6"},false)}}else{$("img").lazyload({effect:"fadeIn"});if($(".fb-lightbox").length){$(".fb-lightbox").fancybox({helpers:{topRatio:0,autoSize:false}})}$.preLoadImages("/blog/img/fancybox/blank.gif","/blog/img/fancybox/fancybox_sprite.png","/blog/img/fancybox/fancybox_loading.gif");if($("input").length){$("input").placeholder()}$("a[href$='.zip'],a[href$='.txt'],a[href$='.docx'],a[href$='.doc'],a[href$='.xls'],a[href$='.xlsx'],a[href$='.pdf'],a[href$='.ppt'],a[href$='.pptx']").bind("click",function(){window.open(this.href);return false})}}};var $=this.jQuery.noConflict();$(document).ready(function(){framework.init()})}