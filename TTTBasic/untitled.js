var player = 1;
function getPlayer() {

  if(player == 1)
    var player = X;
function clickBtn(btn) {
  if(player == 1) {
document.getElementById('btn').value = "X";
document.getElementById('btn').disabled = "disabled";
player -= 1;
winner();
}
else {
  document.getElementById('btn').value = "O";
  document.getElementById('btn').disabled = "disabled";
  player += 1;
  winner();
}
