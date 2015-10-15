//when the document has been processed by browser,
//  the jQuery Ready method will invoke the function passed to it
$(document).ready(function(){
var heManSnippet = '<img  src="Styles/Images/He-Man-Battle-Cat.jpg" width=90px border= 5px solid >';
var skelatorSnippet = '<img  src="Styles/Images/skelator.jpg" width=90px border=5px solid >';
var player = 0;
var snippets =[heManSnippet, skelatorSnippet];
var players =["He-Man", "Skelator"];
var switchPlayer = function switchPlayer() {
  player = 1-player;

};

 // which squuares have been clicked on
var square = ['','', '','', '','', '','', ''];   //then get the button telling user to start playing
 //CSS selector # look for id
$('#board').on('click', function(event) {
   //when I do a click event with element with id = board
var $target = $(event.target);
   console.log("The target of the click event was ", event.target);
var squareClickedId = $target.data('square');
  if(squareClickedId !== undefined) {
    console.log("id is ", squareClickedId);

    square[squareClickedId] = players[player];
    $target.html(snippets[player]);

var winner = getWinner();
if(winner) {
alert ("the winner is " + winner);

}

    switchPlayer();

    console.log(square);
}
    console.log(this);
});

var getWinner= function getWinner(){
//rows
  if(square[0] === players[player] && square[1] === players[player] && square[2] === players[player]||
  square[3] === players[player] && square[4] ===players[player] && square[5] === players[player] ||
  square[6] === players[player] && square[7] === players[player] && square[8] ===  players[player] ||

//columns
      square[0] === players[player] && square[3] === players[player] && square[6] === players[player] ||
      square[1] === players[player] && square[4] === players[player] && square[7] === players[player]||
      square[2] === players[player] && square[5] === players[player] && square [8] === players[player] ||
//diagonals
      square[1] === players[player] && square[4] === players[player] && square [8] === players[player]||
      square[2] === players[player] && square[4] === players[player] && square[6] === players[player]) {


 return players[player];
}
//if every cell in the empty string is full after passing through, its a tie
else if (square.every(function(cell){return cell !=="";})) {
  return "nobody!  Try again!";

}
else
  return null;
};




});






















/*
    if (isWinner("X")) {
      return "X";
    }
    if (isWinner("O")) {
      return "O";
    }
    return null;
}
function isWinner(player) {
    return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}
function winsRow(player) {
    return allThree(player, square('1'), square('2'), square('3')) ||
           allThree(player, square('4'), square('5'), square('6')) ||
           allThree(player, square('7'), square('8'), square('9'));
}
function winsColumn(player) {
    return allThree(player, square('1'), square('4'), square('7')) ||
           allThree(player, square('2'), square('5'), square('8')) ||
           allThree(player, square('3'), square('6'), square('9'));
}
function winsDiagonal(player) {
    return allThree(player, square('1'), square('5'), square('9')) ||
           allThree(player, square('3'), square('5'), square('7'));

}
function allThree(player, cell_one, cell_two, cell_three) {
    return (square_one === player) && (square_two === player) && (square_three === player);
}

*/



