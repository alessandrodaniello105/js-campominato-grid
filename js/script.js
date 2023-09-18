// 5. Definisco la variabile del container
const container = document.querySelector('.container');



reset();

getStarted();



function init(){
  // 8. Creo il ciclo di generazione dei 100 quadrati
  for (let i = 1; i <= 100; i++){

    squareGeneration(i);
  
  };
};



// 6. Definisco la funzione di generazione del quadrato, dando un custom ID basato sull'index del ciclo 

function squareGeneration(index){
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


// 9. Creo la funzione di generazione griglia e ci inserisco dentro la nostra generazione quadrati

// 10. Creo la funzione di generazione del bottone di start, che al click si auto-cancella e invoca la funzione di generazione griglia
function getStarted(){
  const buttonStart = document.createElement('button');
  buttonStart.innerHTML = 'START';
  container.append(buttonStart);
  buttonStart.addEventListener('click', function(){
    container.innerHTML = '';
    init();
  });
  
}
