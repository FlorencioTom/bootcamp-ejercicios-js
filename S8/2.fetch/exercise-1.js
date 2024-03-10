/*Utiliza esta url de la api A gify 'https://api.agify.io?name=michael'
para hacer un .fetch() y recibir los datos que devuelve.
Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js. */

const peticion = fetch('https://api.agify.io?name=michael')
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