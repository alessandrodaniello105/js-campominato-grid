// 5. Definisco la variabile del container
const container = document.querySelector('.container');

// 6.

const newSquare = document.createElement('div');
newSquare.className = 'square';

console.log(newSquare);

reset();





function reset(){
  container.innerHTML = '';
};