/*Dado el siguiente javascript y html. 
Añade la funcionalidad necesaria usando fetch()
para hacer una consulta a la api cuando se haga
click en el botón, pasando como parametro de la api, el valor del input.
*/
document.getElementsByTagName('button')[0].addEventListener('click', () =>{
    let input = document.querySelector('input[type="text"]').value;
    const peticion = fetch('https://api.nationalize.io?name='+input)
    .then(response => {
        return response.json(); // Aquí se convierte la respuesta en JSON
    })
    .then(data => {
        //la peticion salio bien y obtengo los datos que se los paso a la funcion
        console.log(data);
    })
    .catch(error => {
        console.error('HUBO ALGUN ERROR EN LA PETICION A LA API:', error); 
        hayError = true;  
        document.write("<h1>HUBO ALGUN ERROR EN LA PETICION A LA API</h1>");
    });
});
