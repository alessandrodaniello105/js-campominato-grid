// 5. Definisco la variabile del container
const container = document.querySelector('.container');




reset();

init();




function init(){
  // 8. Creo il ciclo di generazione dei 100 quadrati
  for (let i = 1; i <= 100; i++){

    generateSquare(i);
  
  };
};



// 6. Definisco la funzione di generazione del quadrato, dando un custom ID basato sull'index del ciclo 

function generateSquare(index){
  let newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare._squareID = index;
  newSquare.addEventListener('click', function(){
    newSquare.classList.toggle('clicked');
    console.log(this._squareID);
  });

  container.append(newSquare);
};



// 7. Creo la funzione di reset del container e la invoco
function reset(){
  container.innerHTML = '';
};
