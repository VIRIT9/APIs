//addEventListener en el submit para que este pendiente de lo que hara el usuario.
document.getElementById("buscar").addEventListener("submit", function(event) {
    event.preventDefault(); //Evita que se refresque la pagina automaticamente.

// Para conseguir el valor, que seria el nombre de la receta
    const nombre = document.getElementById("nombre").value;
    

//Se hace una solicitud GET al API 
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nombre}`) 
    .then(response => response.json()) // Se convierte a un json
    .then(data => {
//Se crea constante infoReceta
const infoReceta = document.getElementById("infoReceta");

    if (data.meals && Array.isArray(data.meals) && data.meals.length > 0) {
            // Si encuentra la informacion de la receta, muestra los datos.
            const receta = data.meals[0]; 
        
            //Orden de como se mostraran los datos
            const recetaHTML = `
                <h2>${receta.strMeal}</h2>
                <img src="${receta.strMealThumb}" alt="${receta.strMeal}">
                <p>${receta.strInstructions}</p> `;

        // Agrega la información de la receta al info-receta
            infoReceta.innerHTML = recetaHTML;
    } else {
        // Le muestra al usuario que no se pudo encontrar la receta
        infoReceta.innerHTML = 'No se encontró la receta :(';
    }
    })
        //Muestra el error en la consola
    .catch(error => {
        console.error('Error al buscar la receta -.-', error);
    })

});

