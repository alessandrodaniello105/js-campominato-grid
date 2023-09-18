// 5. Definisco la variabile del container
const container   = document.querySelector('.container');
const topBar      = document.querySelector('.top-bar');
let difficulty;
let started = false;

const diffSelector = document.getElementById('difficulty-selector');


// const buttonStart = document.createElement('button');
// buttonStart.innerHTML = 'START';
// topBar.append(buttonStart);

const buttonStart = document.getElementById('button');


reset();

getStarted();



function init(num){

  // 8. Creo il ciclo di generazione dei 100 quadrati
  for (let i = 1; i <= num; i++){

    squareGeneration(i, num);
  
  };

};


// 6. Definisco la funzione di generazione del quadrato, dando un custom ID basato sull'index del ciclo 

function squareGeneration(index, dif){

  let newSquare = document.createElement('div');

  newSquare.className = 'square';

  if (dif == 100) {

    newSquare.classList.add('square-100');

  } else if (dif == 81) {
    
    newSquare.classList.add('square-81');

  } else if (dif == 49) {
    
    newSquare.classList.add('square-49');

  }

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

  buttonStart.addEventListener('click', function(){
    console.log(diffSelector.value);
    reset();
    init(choiceDifficulty(diffSelector.value));
    
  });
  
};


// 11. Controllo quale difficoltà è stata selezionata
function choiceDifficulty(value) {
  if (value == 1) return 100;
  if (value == 2) return 81;
  if (value == 3) return 49;
  return false
};
