(function()
{
  // Email obfuscator script 2.1 by Tim Williams, University of Arizona
  // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
  // This code is freeware provided these four comment lines remain intact
  // A wizard to generate this code is at http://www.jottings.com/obfuscator/

  coded = "Ydppf@3-nY.6dI"
  key = "EC9bLxHs1eKlAzZGRrMu5itdwpvQDSWNVgcXIa2nTFhqo740kUB3j68mYPfOyJ"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }

  // Insert link
  var mailLinks = document.getElementsByClassName('mail-link');
  var linkText = 'mailto:' + link;
  for (var i = 0; i < mailLinks.length; i++)
  {
    mailLinks[i].setAttribute('href', linkText);
  }
})();
