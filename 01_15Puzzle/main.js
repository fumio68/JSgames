"use strict";

// 広域変数
let tiles = [];


// 初期化関数
function init(){
  let table = document.querySelector("table");

  for(let i=0; i < 5; i++) {
    let tr = document.createElement("tr");
    for(let j = 0;j < 5; j++) {
      let td = document.createElement("td");
      let index = i * 5 + j;
      td.className = "tile";
      td.index = index;
      td.value = index;
      td.textContent = index == 0? "":index;
      td.onclick = click;
      tr.appendChild(td);
      tiles.push(td);
    }
    table.appendChild(tr);
  }

  for(let i = 0;i < 1000; i++){
    click({srcElement: {index:Math.floor(Math.random()*25)}})
  }
}

function click(e){
  let i = e.srcElement.index;

  if(i-5 >= 0 && tiles[i-5].value == 0) {
    swap(i, i-5);
  }else if(i+5 < 25 && tiles[i+5].value == 0) {
    swap(i, i+5);
  }else if(i%5 != 0 && tiles[i-1].value == 0) {
    swap(i, i-1);
  }else if(i%5 != 4 && tiles[i+1].value == 0) {
    swap(i, i+1)
  }
}

function swap(i,j){
  let tmp = tiles[i].value;
  tiles[i].textContent = tiles[j.textContent];
  tiles[i].value = tiles[j].value;
  tiles[j].textContent = tmp;
  tiles[j].value = tmp;
}

init();