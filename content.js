// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var imgs = $('img');

      $('body > *').hide();

      for(var j = 0; j < imgs.length; j++){
        $('body').append(imgs[j]);
      }
    }
  }
);
