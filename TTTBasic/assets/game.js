
var player = 1;
function clickBtn(btn) {
  if(player == 1) {
document.getElementById('#btn').value = "X";
document.getElementById('#btn').disabled = "disabled";
player -= 1;
winner();
}
else {
  document.getElementById('#btn').value = "O";
  document.getElementById(btn).disabled = "disabled";
  player += 1;
  winner();
}

/*function cells(key) {
    switch(key) {
        case 'a': return null;
        case 'b': return null;
        case 'c': return null;
        case 'd': return null;
        case 'e': return null;
        case 'f': return null;
        case 'g': return null;
        case 'h': return null;
        case 'i': return null;
        default : return null;
    }
}

function getWinner() {
    if (isWinner('x')) {
      return 'x';
    }
    if (isWinner('o')) {
      return 'o';
    }
    return null;
}
function isWinner(player) {
    return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}
function winsRow(player) {
    return allThree(player, cells('a'), cells('b'), cells('c')) ||
           allThree(player, cells('d'), cells('e'), cells('f')) ||
           allThree(player, cells('g'), cells('h'), cells('i'));
}
function winsColumn(player) {
    return allThree(player, cells('a'), cells('d'), cells('g')) ||
           allThree(player, cells('b'), cells('e'), cells('h')) ||
           allThree(player, cells('c'), cells('f'), cells('i'));
}
function winsDiagonal(player) {
    return allThree(player, cells('a'), cells('e'), cells('i')) ||
           allThree(player, cells('c'), cells('e'), cells('g'));
}
function allThree(player, cell_one, cell_two, cell_three) {
    return (cell_one === player) && (cell_two === player) && (cell_three === player);
}



/*var player = 1;
function clickBtn(btn) {
  if(player == 1) {
document.getElementById(btn).value = "X";
document.getElementById(btn).disabled = "disabled";
player -= 1;
winner();
}
else {
  document.getElementById(btn).value = "O";
  document.getElementById(btn).disabled = "disabled";
  player += 1;
  winner();
}
}*/

function winner()  {
if
  (document.getElementById("btn1").value == "X" &&
  document.getElementById("btn2").value == "X" &&
  document.getElementById("btn3").value == "X" ||

  document.getElementById("btn4").value == "X" &&
  document.getElementById("btn5").value == "X" &&
  document.getElementById("btn6").value == "X" ||

  document.getElementById("btn7").value == "X" &&
  document.getElementById("btn8").value == "X" &&
  document.getElementById("btn9").value == "X" ||

  document.getElementById("btn1").value == "X" &&
  document.getElementById("btn4").value == "X" &&
  document.getElementById("btn7").value == "X" ||

  document.getElementById("btn2").value == "X" &&
  document.getElementById("btn5").value == "X" &&
  document.getElementById("btn8").value == "X" ||

  document.getElementById("btn3").value == "X" &&
  document.getElementById("btn6").value == "X" &&
  document.getElementById("btn9").value == "X" ||

  document.getElementById("btn1").value == "X" &&
  document.getElementById("btn5").value == "X" &&
  document.getElementById("btn9").value == "X" ||

  document.getElementById("btn3").value == "X" &&
  document.getElementById("btn5").value == "X" &&
  document.getElementById("btn7").value == "X" );


  alert("THE WINNER IS X");
reset();
}
else if {
   (document.getElementById("btn1").value == "O" &&
  document.getElementById("btn2").value == "O" &&
  document.getElementById("btn3").value == "O" ||

  document.getElementById("btn4").value == "O" &&
  document.getElementById("btn5").value == "O" &&
  document.getElementById("btn6").value == "O" ||

  document.getElementById("btn7").value == "0" &&
  document.getElementById("btn8").value == "O" &&
  document.getElementById("btn9").value == "O" ||

  document.getElementById("btn1").value == "O" &&
  document.getElementById("btn4").value == "O" &&
  document.getElementById("btn7").value == "O" ||

  document.getElementById("btn2").value == "O" &&
  document.getElementById("btn5").value == "O" &&
  document.getElementById("btn8").value == "O" ||

  document.getElementById("btn3").value == "0" &&
  document.getElementById("btn6").value == "O" &&
  document.getElementById("btn9").value == "O" ||

  document.getElementById("btn1").value == "X" &&
  document.getElementById("btn5").value == "O" &&
  document.getElementById("btn9").value == "O" ||

  document.getElementById("btn3").value == "O" &&
  document.getElementById("btn5").value == "O" &&
  document.getElementById("btn7").value == "O" );
alert("THE WINNER IS O!");
reset();
}


function reset() {
  document.getElementById("btn1").value = "");
  document.getElementById("btn2").value = "");
  document.getElementById("btn3").value = "" );
  document.getElementById("btn4").value = "");
  document.getElementById("btn5").value ="");
  document.getElementById("btn6").value = "" );
  document.getElementById("btn7").value = "");
  document.getElementById("btn8").value = "");
  document.getElementById("btn9").value = "" );
}

