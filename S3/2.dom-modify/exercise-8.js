var p = document.createElement('p');
p.innerHTML = '!Voy en medio';

var div = document.querySelector('div');

div.parentNode.insertBefore(p, div.nextSibling);
