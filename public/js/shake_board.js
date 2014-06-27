function Board() {
	this.dice = ["AAEEGN","ELRTTY","AOOTTW","ABBJOO","EHRTVW",
						"CIMOTU","DISTTY","EIOSST","DELRVY","ACHOPS",
						"HIMNQU","EEINSU","EEGHNW","AFFKPS","HLNNRZ",
						"DEILRX"];
};

Board.prototype.shuffleDice = function () {
  for(var j, x, i = 16; i; j = Math.floor(Math.random() * i), x = this.dice[--i], this.dice[i] = this.dice[j], this.dice[j] = x);
  return this.dice;
}

Board.prototype.rollDice = function() {
	var newBoard = []
	for (var i = 0; i < this.dice.length; i++) {
		newBoard.push(this.dice[i].split("")[Math.floor(Math.random()*6)]);
	}
	return newBoard;
};

Board.prototype.shakeBoard = function() {
	$("td").removeClass("searching found");
	this.shuffleDice();
	return this.rollDice();
}

myBoard = new Board();
// console.log(myBoard.shakeBoard());


