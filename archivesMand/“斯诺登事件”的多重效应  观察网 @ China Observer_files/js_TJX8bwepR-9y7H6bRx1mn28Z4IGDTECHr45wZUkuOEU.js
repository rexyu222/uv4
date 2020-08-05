(function($){Drupal.settings.views=Drupal.settings.views||{'ajax_path':'/views/ajax'};Drupal.quicktabs=Drupal.quicktabs||{};Drupal.quicktabs.getQTName=function(el){return el.id.substring(el.id.indexOf('-')+1);}
Drupal.behaviors.quicktabs={attach:function(context,settings){$.extend(true,Drupal.settings,settings);$('.quicktabs-wrapper',context).once(function(){Drupal.quicktabs.prepare(this);});}}
Drupal.quicktabs.prepare=function(el){var qt_name=Drupal.quicktabs.getQTName(el);var $ul=$(el).find('ul.quicktabs-tabs:first');$ul.find('li a').each(function(i,element){element.myTabIndex=i;element.qt_name=qt_name;var tab=new Drupal.quicktabs.tab(element);var parent_li=$(element).parents('li').get(0);if($(parent_li).hasClass('active')){$(element).addClass('quicktabs-loaded');}
$(element).once(function(){$(this).bind('click',{tab:tab},Drupal.quicktabs.clickHandler);});});}
Drupal.quicktabs.clickHandler=function(event){var tab=event.data.tab;var element=this;$(this).parents('li').siblings().removeClass('active');$(this).parents('li').addClass('active');tab.container.children().addClass('quicktabs-hide');if(!tab.tabpage.hasClass("quicktabs-tabpage")){tab=new Drupal.quicktabs.tab(element);}
tab.tabpage.removeClass('quicktabs-hide');return false;}
Drupal.quicktabs.tab=function(el){this.element=el;this.tabIndex=el.myTabIndex;var qtKey='qt_'+ el.qt_name;var i=0;for(var i=0;i<Drupal.settings.quicktabs[qtKey].tabs.length;i++){if(i==this.tabIndex){this.tabObj=Drupal.settings.quicktabs[qtKey].tabs[i];this.tabKey=i;}}
this.tabpage_id='quicktabs-tabpage-'+ el.qt_name+'-'+ this.tabKey;this.container=$('#quicktabs-container-'+ el.qt_name);this.tabpage=this.container.find('#'+ this.tabpage_id);}
if(Drupal.ajax){Drupal.ajax.prototype.eventResponse=function(element,event){var ajax=this;if(ajax.ajaxing){return false;}
try{if(ajax.form){if(ajax.setClick){element.form.clk=element;}
ajax.form.ajaxSubmit(ajax.options);}
else{if(!$(element).hasClass('quicktabs-loaded')){ajax.beforeSerialize(ajax.element,ajax.options);$.ajax(ajax.options);if($(element).parents('ul').hasClass('quicktabs-tabs')){$(element).addClass('quicktabs-loaded');}}}}
catch(e){ajax.ajaxing=false;alert("An error occurred while attempting to process "+ ajax.options.url+": "+ e.message);}
return false;};}})(jQuery);;(function($){jQuery.fn.equalHeight=function(){var height=0;var maxHeight=0;this.each(function(){height=jQuery(this).outerHeight();maxHeight=(height>maxHeight)?height:maxHeight;});return this.each(function(){var t=jQuery(this);var minHeight=maxHeight-(t.outerHeight()- t.height());var property=jQuery.browser.msie&&jQuery.browser.version<7?'height':'min-height';t.css(property,minHeight+'px');});};})(jQuery);;(function($){Drupal.behaviors.atheadliner_egp={attach:function(context){$('.four-4x25 .block-inner').equalHeight();}};})(jQuery);;(function(w){var ua=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(ua)&&ua.indexOf("AppleWebKit")>-1)){return;}
var doc=w.document;if(!doc.querySelector){return;}
var meta=doc.querySelector("meta[name=viewport]"),initialContent=meta&&meta.getAttribute("content"),disabledZoom=initialContent+",maximum-scale=1",enabledZoom=initialContent+",maximum-scale=10",enabled=true,x,y,z,aig;if(!meta){return;}
function restoreZoom(){meta.setAttribute("content",enabledZoom);enabled=true;}
function disableZoom(){meta.setAttribute("content",disabledZoom);enabled=false;}
function checkTilt(e){aig=e.accelerationIncludingGravity;x=Math.abs(aig.x);y=Math.abs(aig.y);z=Math.abs(aig.z);if((!w.orientation||w.orientation===180)&&(x>7||((z>6&&y<8||z<8&&y>6)&&x>5))){if(enabled){disableZoom();}}
else if(!enabled){restoreZoom();}}
w.addEventListener("orientationchange",restoreZoom,false);w.addEventListener("devicemotion",checkTilt,false);})(this);;