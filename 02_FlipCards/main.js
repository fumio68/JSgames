"use strict";

// 配列シャッフル
Array.prototype.shuffle = function(){
  let i = this.length;
  while(i) {
    let j = Math.floor(Math.random() * i);
    let t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
}

// 広域変数
let timer = NaN, score = 0, flipTimer,prevCard,startTime;

// 初期化関数
function init(){
  let table = document.querySelector("#table");
  let cards = [];
  for (let i = 1; i <= 10; i++) {
    cards.push(i);
    cards.push(i);
  }
  cards.shuffle();

  for(let i = 0; i < 4; i++) {
    let tr =document.createElement("tr");
    for(let j = 0; j < 5; j++) {
      let td = document.createElement("td");
      td.className = "card back";
      td.number = cards[i * 5 + j];
      td.onclick = flip;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  startTime = new Date();
  timer = setInterval(tick, 1000);
}
