/*
Usa un foin para imprimir por consola los datos del alienigena.
```js
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
```
*/
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for( pos in alien){
    console.log(pos, alien[pos]);
}