/*En base al ejercicio anterior. Crea dinamicamente un elemento 
<p> por cada petición a la api que diga...'El nombre X tiene un
Y porciento de ser de Z' etc etc. EJ: El nombre Abel tiene un
22 porciento de ser de ET y un 6 porciento de ser de MZ. */

document.getElementsByTagName('button')[0].addEventListener('click', () =>{
    let input = document.querySelector('input[type="text"]').value;
    const peticion = fetch('https://api.nationalize.io?name='+input)
    .then(response => {
        return response.json(); // Aquí se convierte la respuesta en JSON
    })
    .then(data => {
        //la peticion salio bien y obtengo los datos que se los paso a la funcion
        let p = document.createElement('p');
        p.innerHTML = `El nombre ${data.name} tiene un ${data.country[0].probability*100} porciento de ser ${data.country[0].country_id}`;
        document.body.append(p);
        console.log(data);
    })
    .catch(error => {
        console.error('HUBO ALGUN ERROR EN LA PETICION A LA API:', error); 
        hayError = true;  
        document.write("<h1>HUBO ALGUN ERROR EN LA PETICION A LA API</h1>");
    });
});