/*
Elimina el último elemento del array y muestra el primero y el último por consola.
```js
const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
```
*/

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
RickAndMortyCharacters.pop();
//despues de a ver eliminado el ultimo elemento de array ahora muestro el primero y el ultimo por consola
console.log(RickAndMortyCharacters[0], RickAndMortyCharacters[RickAndMortyCharacters.length-1]);

