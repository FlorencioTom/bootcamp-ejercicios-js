/*
Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra
"Camiseta". Usa la función .includes de javascript.

```js
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
```
*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

products.forEach( (producto) => {
    producto.includes('Camiseta')?console.log(producto):"";
});

//en queria probar el .forEah y la ternaria.
/*
pero se perfectamente que se puede hace con un for normal y luego un if dentro
for(let i = 0; i<products.length; i++)
if(producto.includes('Camiseta'))
console.log(producto)
*/