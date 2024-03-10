/*Comprueba en cada uno de los usuarios que tenga almenos
 dos trimestres aprobados y añade la propiedad isApproved 
 a true o false en consecuencia. Una vez lo tengas compruebalo
  con un console.log.

```js
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
```
*/
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];
alumns.forEach((usuario) => {
    let trimestresAprovados = 0;
    if(usuario.T1){
        trimestresAprovados++;
    }
    if(usuario.T2){
        trimestresAprovados++;
    }
    if(usuario.T3){
        trimestresAprovados++;
    }
    if(trimestresAprovados >= 2){
        usuario.isApproved = true;
    }else{
        usuario.isApproved = false;
    }
});

console.log(alumns);