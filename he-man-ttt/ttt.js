//when the document has been processed by browser,
//  the jQuery Ready method will invoke the function passed to it
$(document).ready(function(){

var player = 1;
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







 // which squuares have been clicked on
 var squares = ['','', '','', '','', '','', ''];   //then get the button telling user to start playing
 //CSS selector # look for id
 var heManSnippet = '<img id=da src="Styles/Images/He-Man-Battle-Cat.jpg" width=90px border= 5px solid >';
var skelatorSnippet = '<imd id=da src"Styles/Images/skelator.jpg" width=90px border=5px solid >';

 $('#board').on('click', function(event) {
   //when I do a click event with element with id = board
   //
   console.log("The target of the click event was ", event.target);
   console.log("dkjfdkj");
   var squareClickedId = $(event.target).data('square');

console.log("id is ", squareClickedId);
  if(squareClickedId) {

    squares[squareClickedId] = ("X");
    $(event.target).html(heManSnippet);



  console.log(squares);
   }

console.log(this);

 });
});


Function cells(key) {
    switch(key) {
        case '1': return null;
        case '2': return null;
        case '3': return null;
        case '4': return null;
        case '5': return null;
        case '6': return null;
        case '7': return null;
        case '8': return null;
        case '9': return null;
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




