var random = [];
var count = 0;
var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c");
var btn = document.querySelector("button");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");
var h1 = document.querySelector("h1");

function getRandom() {
  for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * 3);
    random.push(num);
  }
}

btn.addEventListener("click", startGame);
function startGame() {
  h1.innerHTML = "";
  getRandom();
  if (random[0] === 0) a.innerHTML = `<img src ='images/0.jpg'>`;
  if (random[0] === 1) a.innerHTML = `<img src ='images/1.jpg'>`;
  if (random[0] === 2) a.innerHTML = `<img src ='images/2.png'>`;

  if (random[1] === 0) b.innerHTML = `<img src ='images/0.jpg'>`;
  if (random[1] === 1) b.innerHTML = `<img src ='images/1.jpg'>`;
  if (random[1] === 2) b.innerHTML = `<img src ='images/2.png'>`;

  if (random[2] === 0) c.innerHTML = `<img src ='images/0.jpg'>`;
  if (random[2] === 1) c.innerHTML = `<img src ='images/1.jpg'>`;
  if (random[2] === 2) c.innerHTML = `<img src ='images/2.png'>`;
  getWinner()
  console.log(count);
  random = [];
}

function getWinner() {
  if (random[0] === random[1] && random[0] === random[2]) {
    h1.innerHTML = "winner";
    count += 1;
  }
}
console.log(count);
