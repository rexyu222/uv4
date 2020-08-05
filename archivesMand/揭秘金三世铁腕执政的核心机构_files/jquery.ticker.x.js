(function(n){n.fn.ticker=function(t){var i=n.extend({},n.fn.ticker.defaults,t),r,u;return n(this).length==0?(window.console&&window.console.log?window.console.log("Element does not exist in DOM!"):alert("Element does not exist in DOM!"),!1):(r="#"+n(this).attr("id"),u=n(this).get(0).tagName,this.each(function(){function e(n){var t=0;for(var i in n)n.hasOwnProperty(i)&&t++;return t}function v(){var n=new Date;return n.getTime()}function o(n){i.debugMode&&(window.console&&window.console.log?window.console.log(n):alert(n))}function y(){if(p(),n(r).wrap('<div id="'+t.dom.wrapperID.replace("#","")+'"><\/div>'),n(t.dom.wrapperID).children().remove(),n(t.dom.wrapperID).append('<div id="'+t.dom.tickerID.replace("#","")+'" class="ticker"><div id="'+t.dom.titleID.replace("#","")+'" class="ticker-title"><span><!-- --><\/span><\/div><div id="'+t.dom.contentID.replace("#","")+'" class="ticker-content"><\/div><div id="'+t.dom.revealID.replace("#","")+'" class="ticker-swipe"><span><!-- --><\/span><\/div><\/div>'),n(t.dom.wrapperID).removeClass("no-js").addClass("ticker-wrapper has-js "+i.direction),n(t.dom.tickerElem+","+t.dom.contentID).hide(),i.controls){n(t.dom.wrapperID).append('<ul id="'+t.dom.controlsID.replace("#","")+'" class="ticker-controls"><li id="'+t.dom.playPauseID.replace("#","")+'" class="jnt-play-pause controls"><a href=""><!-- --><\/a><\/li><li id="'+t.dom.prevID.replace("#","")+'" class="jnt-prev controls"><a href=""><!-- --><\/a><\/li><li id="'+t.dom.nextID.replace("#","")+'" class="jnt-next controls"><a href=""><!-- --><\/a><\/li><\/ul>');n(t.dom.controlsID).on("click mouseover mousedown mouseout mouseup",function(i){var r=i.target.id;if(i.type=="click")switch(r){case t.dom.prevID.replace("#",""):t.paused=!0;n(t.dom.playPauseID).addClass("paused");a("prev");break;case t.dom.nextID.replace("#",""):t.paused=!0;n(t.dom.playPauseID).addClass("paused");a("next");break;case t.dom.playPauseID.replace("#",""):t.play==!0?(t.paused=!0,n(t.dom.playPauseID).addClass("paused"),c()):(t.paused=!1,n(t.dom.playPauseID).removeClass("paused"),l())}else i.type=="mouseover"&&n("#"+r).hasClass("controls")?n("#"+r).addClass("over"):i.type=="mousedown"&&n("#"+r).hasClass("controls")?n("#"+r).addClass("down"):i.type=="mouseup"&&n("#"+r).hasClass("controls")?n("#"+r).removeClass("down"):i.type=="mouseout"&&n("#"+r).hasClass("controls")&&n("#"+r).removeClass("over")})}i.displayType!="fade"&&n(t.dom.contentID).mouseover(function(){t.paused==!1&&c()}).mouseout(function(){t.paused==!1&&l()});i.ajaxFeed||s()}function p(){if(t.contentLoaded==!1)if(i.ajaxFeed)i.feedType=="xml"?n.ajax({url:i.feedUrl,cache:!1,dataType:i.feedType,async:!0,success:function(n){var u,f,h,c,l,r;for(count=0,u=0;u<n.childNodes.length;u++)n.childNodes[u].nodeName=="rss"&&(xmlContent=n.childNodes[u]);for(f=0;f<xmlContent.childNodes.length;f++)xmlContent.childNodes[f].nodeName=="channel"&&(xmlChannel=xmlContent.childNodes[f]);for(h=0;h<xmlChannel.childNodes.length;h++)if(xmlChannel.childNodes[h].nodeName=="item")for(xmlItems=xmlChannel.childNodes[h],l=!1,r=0;r<xmlItems.childNodes.length;r++)xmlItems.childNodes[r].nodeName=="title"?c=xmlItems.childNodes[r].lastChild.nodeValue:xmlItems.childNodes[r].nodeName=="link"&&(l=xmlItems.childNodes[r].lastChild.nodeValue),c!==!1&&c!=""&&l!==!1&&(t.newsArr["item-"+count]={type:i.titleText,content:'<a href="'+l+'">'+c+"<\/a>"},count++,c=!1,l=!1);if(e(t.newsArr<1))return o("Couldn't find any content from the XML feed for the ticker to use!"),!1;t.contentLoaded=!0;s()}}):o("Code Me!");else if(i.htmlFeed)if(n(r+" LI").length>0)n(r+" LI").each(function(r){t.newsArr["item-"+r]={type:i.titleText,content:n(this).html()}});else return o("Couldn't find HTML any content for the ticker to use!"),!1;else return o("The ticker is set to not use any types of content! Check the settings for the ticker."),!1}function s(){t.contentLoaded=!0;n(t.dom.titleElem).html(t.newsArr["item-"+t.position].type);n(t.dom.contentID).html(t.newsArr["item-"+t.position].content);t.position==e(t.newsArr)-1?t.position=0:t.position++;distance=n(t.dom.contentID).width();time=distance/i.speed;w()}function w(){if(n(t.dom.contentID).css("opacity","1"),t.play){var r=n(t.dom.titleID).width()+20;n(t.dom.revealID).css(i.direction,r+"px");i.displayType=="fade"?n(t.dom.revealID).hide(0,function(){n(t.dom.contentID).css(i.direction,r+"px").fadeIn(i.fadeInSpeed,h)}):i.displayType=="scroll"||n(t.dom.revealElem).show(0,function(){n(t.dom.contentID).css(i.direction,r+"px").show();animationAction=i.direction=="right"?{marginRight:distance+"px"}:{marginLeft:distance+"px"};n(t.dom.revealID).css("margin-"+i.direction,"0px").delay(20).animate(animationAction,time,"linear",h)})}else return!1}function h(){t.play?(n(t.dom.contentID).delay(i.pauseOnItems).fadeOut(i.fadeOutSpeed),i.displayType=="fade"?n(t.dom.contentID).fadeOut(i.fadeOutSpeed,function(){n(t.dom.wrapperID).find(t.dom.revealElem+","+t.dom.contentID).hide().end().find(t.dom.tickerID+","+t.dom.revealID).show().end().find(t.dom.tickerID+","+t.dom.revealID).removeAttr("style");s()}):n(t.dom.revealID).hide(0,function(){n(t.dom.contentID).fadeOut(i.fadeOutSpeed,function(){n(t.dom.wrapperID).find(t.dom.revealElem+","+t.dom.contentID).hide().end().find(t.dom.tickerID+","+t.dom.revealID).show().end().find(t.dom.tickerID+","+t.dom.revealID).removeAttr("style");s()})})):n(t.dom.revealElem).hide()}function c(){t.play=!1;n(t.dom.tickerID+","+t.dom.revealID+","+t.dom.titleID+","+t.dom.titleElem+","+t.dom.revealElem+","+t.dom.contentID).stop(!0,!0);n(t.dom.revealID+","+t.dom.revealElem).hide();n(t.dom.wrapperID).find(t.dom.titleID+","+t.dom.titleElem).show().end().find(t.dom.contentID).show()}function l(){t.play=!0;t.paused=!1;h()}function a(i){c();switch(i){case"prev":t.position=t.position==0?e(t.newsArr)-2:t.position==1?e(t.newsArr)-1:t.position-2;n(t.dom.titleElem).html(t.newsArr["item-"+t.position].type);n(t.dom.contentID).html(t.newsArr["item-"+t.position].content);break;case"next":n(t.dom.titleElem).html(t.newsArr["item-"+t.position].type);n(t.dom.contentID).html(t.newsArr["item-"+t.position].content)}t.position==e(t.newsArr)-1?t.position=0:t.position++}var f=v(),t={position:0,time:0,distance:0,newsArr:{},play:!0,paused:!1,contentLoaded:!1,dom:{contentID:"#ticker-content-"+f,titleID:"#ticker-title-"+f,titleElem:"#ticker-title-"+f+" SPAN",tickerID:"#ticker-"+f,wrapperID:"#ticker-wrapper-"+f,revealID:"#ticker-swipe-"+f,revealElem:"#ticker-swipe-"+f+" SPAN",controlsID:"#ticker-controls-"+f,prevID:"#prev-"+f,nextID:"#next-"+f,playPauseID:"#play-pause-"+f}};if(u!="UL"&&u!="OL"&&i.htmlFeed===!0)return o("Cannot use <"+u.toLowerCase()+"> type of element for this plugin - must of type <ul> or <ol>"),!1;i.direction=i.direction=="rtl"?"right":"left";y()}))};n.fn.ticker.defaults={speed:.1,ajaxFeed:!1,feedUrl:"",feedType:"xml",displayType:"fade",htmlFeed:!0,debugMode:!0,controls:!0,titleText:"Latest",direction:"ltr",pauseOnItems:3e3,fadeInSpeed:600,fadeOutSpeed:300}})(jQuery);;