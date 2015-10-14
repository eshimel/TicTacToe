//when the document has been processed by browser,
//  the jQuery Ready method will invoke the function passed to it
$(document).ready(function(){
 // which squuares have been clicked on
 var squares = ['','', '','', '','', '','', '']  //then get the button telling user to start playing
 //CSS selector # look for id
 $('#x').html('Click to Play!');  $('#board').on('click', function(event){
   //when I do a click event with element with id = board
   //
   console.log("The target of the click event was ", event.target);
   var squareClickedOn = event.target;
   console.log("dkjfdkj");
   var squareClickedId = $(squareClickedOn).data('square');
    console.log("id is ", squareClickedId);
    squares[squareClickedId] = "X";
    $(squareClickedOn).html("X");
 });
})
