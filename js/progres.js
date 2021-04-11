/*=============================== */
/*Variables */
const search = document.querySelector ('.search');
const btn = document.querySelector ('.btn');
const input = document.querySelector ('.input');


/*=========================================*/
/*Evento click */

btn.addEventListener('click', ()=>{
    search.classList.toggle('active');
    //ocultar y mostrar elementos de una página web
    input.focus()
    /*fija el foco del cursor en el elemento 
    indicado, si éste puede ser enfocado. */
});




const ListRetos = document.querySelectorAll('.reto');

filter.addEventListener('input', (e) => filterData(e.target.value))
//esto filtra la informacion del input pot medio de la funcion filterData 

function filterData(searchTerm) {

    ListRetos.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        /*busca dentro de los elemtos del array escrito una conincidencia con el parametro 
        buscado */
        //devuelve el valor en minúsculas de la cadena que realiza la llamada
        /*determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda. */
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}