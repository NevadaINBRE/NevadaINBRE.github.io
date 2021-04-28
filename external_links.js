// This function changes all external links to open in a new tab
// Code and explanation found here: https://stackoverflow.com/a/63459259
(function() {
  for (const link of document.getElementsByTagName('a')) {
    if (/^(https?:)?\/\//.test(link.getAttribute('href'))) link.target = '_blank';
  }
})();
