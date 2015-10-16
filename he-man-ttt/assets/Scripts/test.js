$(document).ready(function(){

var playerOne = 1;
function display_input(square){
    if ( player_one == 1 ){
        document.getElementById(square).innerHTML = "X";
        player_one = 0;
    } else {
        document.getElementById(square).innerHTML = "O";
        player_one = 1;
    }
}


