//Shows popup
function showPopup(domainName, cookieName, browser) {
  var keepChangesImg = document.createElement('div'), keepChangesOverlay = document.createElement('div');

  keepChangesImg.className = 'keep-changes-img-' + browser;
  keepChangesOverlay.className = 'keep-changes-overlay-'+ browser;

  document.body.appendChild(keepChangesImg);
  document.body.appendChild(keepChangesOverlay);

  docCookies.setItem(cookieName, true, 60*60*24*365*10, '/', domainName);

  document.onclick = function() {
    keepChangesImg.remove();
    keepChangesOverlay.remove();
  }
}

//Shows "keep changes"-popup for Chrome-browser
function keepChangesChrome(domainName){

  var cookieKey = 'keepChrome',
      isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  if (docCookies.hasItem(cookieKey) === false && isChrome && typeof isExtensionReady === 'function' && isExtensionReady()) {
    showPopup(domainName, cookieKey, 'chrome');

  }
}

//Shows "keep changes"-popup for Firefox-browser
function keepChangesFirefox(domainName){

  var cookieKey = 'keepFirefox',
      isFirefox = typeof InstallTrigger !== 'undefined';

  if (docCookies.hasItem(cookieKey) === false && isFirefox && typeof isExtensionReady === 'function' && isExtensionReady()) {
    showPopup(domainName, cookieKey, 'firefox');
  }
}

// How to call
/*
$(document).ready(function () {
  keepChangesChrome('.blpsearch.com');
  //or
  keepChangesFirefox('.blpsearch.com');
});
*/