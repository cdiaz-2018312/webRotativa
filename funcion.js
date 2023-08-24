const abierto = document.getElementById('abierto')
const cerrado = document.getElementById('cerrado')
const contenedor = document.querySelector('.container');



abierto.addEventListener('click',()=> contenedor.classList.add('mostrar-nav'));
cerrado.addEventListener('click',()=> contenedor.classList.remove('mostrar-nav'))