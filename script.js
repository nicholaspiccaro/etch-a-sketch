const container = document.getElementById("container");



var clicked=false;

function makeRows(rows, cols) {
  if(clicked==false){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      // cell.innerText = (c + 1);
      container.appendChild(cell).className= "grid-item";
      clicked=true;
  };
  }
  hov();
};


function reset(){
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  clicked=false;
};


var square = document.getElementsByClassName("grid-item");



function hov(i){
  let items = document.querySelectorAll('.grid-item');
  items.forEach(item=>{
    item.addEventListener('mouseover', ()=>{
      item.setAttribute("style", "background-color: grey;")
    });
  });
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var sliderValue=0;

var slideText=document.getElementById("slideValue");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  sliderValue = this.value;
  slideText.innerText=sliderValue+'x'+sliderValue;
}