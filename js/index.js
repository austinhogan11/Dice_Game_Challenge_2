var die_one_roll = dice_roll();
var die_two_roll = dice_roll();

dice_roll_outcome(die_one_roll, die_two_roll);

display_dice_roll(1, die_one_roll);
display_dice_roll(2, die_two_roll);


function dice_roll() {
  return Math.floor((Math.random() * 6) + 1);
}

function display_dice_roll(affected_die, die_roll) {
  document.querySelector(".die" + affected_die).src = "images/dice" + die_roll + ".png";
}

function dice_roll_outcome(die_one, die_two) {
  if (die_one > die_two) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
  } else if (die_one < die_two) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
  } else {
    document.querySelector("h1").innerHTML = "DRAW, Roll Again!"
  }
}
