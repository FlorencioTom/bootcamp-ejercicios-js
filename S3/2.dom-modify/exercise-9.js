

var divs = document.getElementsByClassName('fn-insert-here').length;
for(let i = 0; i<=divs ;i++){
    var p = document.createElement('p');
    p.innerHTML = '!Voy dentro';
    document.getElementsByClassName('fn-insert-here')[i].appendChild(p);
}

