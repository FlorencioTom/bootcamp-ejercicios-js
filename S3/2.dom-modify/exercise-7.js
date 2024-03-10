let body = document.body;
let elementos = document.getElementsByClassName('fn-remove-me');
//la estaba recorriendo asi let i = 0; i<elementos.length; i++
//pero estoy modificando la cantidad de elementos asi que mejor empezar desde el final
for(let i = elementos.length - 1; i >= 0; i--){
    body.removeChild(document.getElementsByClassName('fn-remove-me')[i]);
}

