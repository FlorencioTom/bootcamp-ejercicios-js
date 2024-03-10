/*En base al ejercicio anterior, crea un botón con el texto 'X'
para cada uno de los p que hayas insertado y que si el usuario
hace click en este botón eliminemos el parrafo asociado. */

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
        
        let boton = document.createElement('button');

        boton.addEventListener('click', ()=>{
          let padre = boton.parentNode;
          padre.remove(); 
        });

        boton.innerHTML = data.name; 

        p.append(boton);
        
        document.body.append(p);
        console.log(data);
    })
    .catch(error => {
        console.error('HUBO ALGUN ERROR EN LA PETICION A LA API:', error); 
        hayError = true;  
        document.write("<h1>HUBO ALGUN ERROR EN LA PETICION A LA API</h1>");
    });
});