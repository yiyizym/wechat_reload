(function(){
  window.WechatOpt = {
    isAndroidWechat: function(){
      return (/android/i).test(window.navigator.userAgent) && (/micromessenger/i).test(window.navigator.userAgent)
    },
    reload: function(){
      var hash = +(new Date());
      var new_search = (/wechat_hash/).test(window.location.search) ? 
        // 如果之前有添加过指纹，就更新它
        location.search.replace(/wechat_hash=\d+(&?)/,'wechat_hash=' + hash + '$1') :
        location.search == "" ?
        // 如果 search 为空
        '?wechat_hash=' + hash :
        // 如果 search 不为空
        location.search + '&wechat_hash=' + hash;
      // 修改浏览器历史
      var current_title = document.title;
      var new_uri = location.origin + location.pathname + new_search;
      history.replaceState(null, current_title, new_uri);
      // 重新加载页面
      location.reload(true);
    }
  };
})();
