Type.registerNamespace('www.rferl.org.Services');
www.rferl.org.Services.BreakingNewsService=function() {
www.rferl.org.Services.BreakingNewsService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
www.rferl.org.Services.BreakingNewsService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return www.rferl.org.Services.BreakingNewsService._staticInstance.get_path();},
GetBreakingNewsLinks:function(widgetInstanceId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetBreakingNewsLinks',false,{widgetInstanceId:widgetInstanceId},succeededCallback,failedCallback,userContext); }}
www.rferl.org.Services.BreakingNewsService.registerClass('www.rferl.org.Services.BreakingNewsService',Sys.Net.WebServiceProxy);
www.rferl.org.Services.BreakingNewsService._staticInstance = new www.rferl.org.Services.BreakingNewsService();
www.rferl.org.Services.BreakingNewsService.set_path = function(value) { www.rferl.org.Services.BreakingNewsService._staticInstance.set_path(value); }
www.rferl.org.Services.BreakingNewsService.get_path = function() { return www.rferl.org.Services.BreakingNewsService._staticInstance.get_path(); }
www.rferl.org.Services.BreakingNewsService.set_timeout = function(value) { www.rferl.org.Services.BreakingNewsService._staticInstance.set_timeout(value); }
www.rferl.org.Services.BreakingNewsService.get_timeout = function() { return www.rferl.org.Services.BreakingNewsService._staticInstance.get_timeout(); }
www.rferl.org.Services.BreakingNewsService.set_defaultUserContext = function(value) { www.rferl.org.Services.BreakingNewsService._staticInstance.set_defaultUserContext(value); }
www.rferl.org.Services.BreakingNewsService.get_defaultUserContext = function() { return www.rferl.org.Services.BreakingNewsService._staticInstance.get_defaultUserContext(); }
www.rferl.org.Services.BreakingNewsService.set_defaultSucceededCallback = function(value) { www.rferl.org.Services.BreakingNewsService._staticInstance.set_defaultSucceededCallback(value); }
www.rferl.org.Services.BreakingNewsService.get_defaultSucceededCallback = function() { return www.rferl.org.Services.BreakingNewsService._staticInstance.get_defaultSucceededCallback(); }
www.rferl.org.Services.BreakingNewsService.set_defaultFailedCallback = function(value) { www.rferl.org.Services.BreakingNewsService._staticInstance.set_defaultFailedCallback(value); }
www.rferl.org.Services.BreakingNewsService.get_defaultFailedCallback = function() { return www.rferl.org.Services.BreakingNewsService._staticInstance.get_defaultFailedCallback(); }
www.rferl.org.Services.BreakingNewsService.set_enableJsonp = function(value) { www.rferl.org.Services.BreakingNewsService._staticInstance.set_enableJsonp(value); }
www.rferl.org.Services.BreakingNewsService.get_enableJsonp = function() { return www.rferl.org.Services.BreakingNewsService._staticInstance.get_enableJsonp(); }
www.rferl.org.Services.BreakingNewsService.set_jsonpCallbackParameter = function(value) { www.rferl.org.Services.BreakingNewsService._staticInstance.set_jsonpCallbackParameter(value); }
www.rferl.org.Services.BreakingNewsService.get_jsonpCallbackParameter = function() { return www.rferl.org.Services.BreakingNewsService._staticInstance.get_jsonpCallbackParameter(); }
www.rferl.org.Services.BreakingNewsService.set_path("/Services/BreakingNewsService.asmx");
www.rferl.org.Services.BreakingNewsService.GetBreakingNewsLinks= function(widgetInstanceId,onSuccess,onFailed,userContext) {www.rferl.org.Services.BreakingNewsService._staticInstance.GetBreakingNewsLinks(widgetInstanceId,onSuccess,onFailed,userContext); }
