(function(){
'use strict';

function ready( fn ) {
  if ( document.readyState !== 'loading' ){
    fn();
  } else {
    document.addEventListener( 'DOMContentLoaded', fn );
  }
}

function deobfuscateEmail() {
  var emailLink = document.getElementById('aEmail');
  // deobfuscate the email address for usability
  var addy = emailLink.href.replace('[at]','@').replace('[dot]','.');
  emailLink.href = addy;
}

ready(
  function onPageLoad()
  {
    deobfuscateEmail();
  }
);

})();
