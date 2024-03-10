/*
Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan 
la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.
```js
const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
```
*/

const toys = [
    {id: 5, name: 'Buzz MyYear'},
    {id: 11, name: 'Action Woman'},
    {id: 23, name: 'Barbie Man'},
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

var nuevosToys = []; 
for (let juguete of toys) {
    if(!juguete.name.includes('gato')){
        nuevosToys.push(juguete);
    }
}
console.log(nuevosToys);

/*esto es lo que he estado intentando inicialmente 
pero no me da error por modificar el array en el qu estoy iterando
var pos = 0;
for (let juguete of toys) {
    if(juguete.name.includes('gato')){
        toys.splice(pos, 1);
    }
    pos++;
}*/