

//when the document has been processed by browser,
//  the jQuery Ready method will invoke the function passed to it
$(document).ready(function(){
var heManSnippet = '<img  src="he-man-ttt/assets/Styles/Images/He-Man-Battle-Cat.jpg" width=90px border= 5px solid >';
var skelatorSnippet = '<img  src="he-man-ttt/assets/Styles/Images/skelator.jpg" width=90px border=5px solid >';

var player = 0;
var snippets =[[heManSnippet], skelatorSnippet];
var players =["He-Man", "Skelator"];
var switchPlayer = function switchPlayer() {
    player = 1-player;

};

 // this is the data array that indications which squuares have been clicked on
var square = ['','', '','', '','', '','', ''];
 //Click event that gets the game going
$('#board').on('click', function(event) {
var $target = $(event.target);
   console.log("The target of the click event was ", event.target);
var squareClickedId = $target.data('square');
    if(squareClickedId !== undefined) {
        console.log("id is ", squareClickedId);
var audio = new Audio("he-man-ttt/assets/Styles/Images/I have the Power 1.mp3");
audio.play();

var cellData = {
      game: {
        cell: {
          index: squareClickedId,
          value: players[player]
        }
      }
    };
//'Antony Code'
    tttapi.markCell(gameID, cellData, gameToken, callback);
    square[squareClickedId] = players[player];
    $target.html(snippets[player]);
//determining the winner callback
var winner = getWinner();
    if(winner) {
       alert ("the winner is " + winner);

}


//invoking the switch player function
      switchPlayer();

        console.log(square);
}
    console.log(this);
});
//determing the winner function using the data-square from the html table
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
//if it's a tie function
//if every cell in the empty string is full after passing through, its a tie
else if (square.every(function(cell){return cell !=="";})) {
    return "nobody!  Try again!";

}
else
    return null;
};




});
























