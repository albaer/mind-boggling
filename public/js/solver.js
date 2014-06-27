function Solver(board, target) {
    this.path = [];
    this.target = target;
    this.board = board;
};

Solver.prototype.directions = function(position) {
  if (position % 4 === 3) {
    return [-5, -4, -1, 3, 4, 20, 20, 20];
  } else if (position % 4 === 0) {
    return [-4, -3, 1, 4, 5, 20, 20, 20];
  } else {
    return [-5, -4, -3, -1, 1, 3, 4, 5];
  }
};

Solver.prototype.solve = function() {
  for (var position = 0; position < this.board.length; position++) {

    if (this.board[position] === this.target[0]) {
      this.find_word(position);
    }
    if (this.finished())
      break;
  }
  return this.path
};

Solver.prototype.find_word = function(position, target_letter_index) {
  target_letter_index = target_letter_index || 0

  if (this.path.indexOf(position) != -1) {
    return false;
  }

  this.path.push(position);

  if (this.finished()) {
    return true;
  }

  for (var i = 0; i < this.directions(position).length; i++) {
    if (!this.position_invalid(position + this.directions(position)[i])) {
      if (this.board[position + this.directions(position)[i]] === this.target[target_letter_index + 1]) {
        if (this.find_word(position + this.directions(position)[i], target_letter_index + 1)) {
          return true;
        }
      }
    }
  }

  var popped = this.path.pop();
  return false;
};

Solver.prototype.position_invalid = function(position) {
  function directions() {
    var valid_directions = [];
    for (var i = 0; i < 16; i++) {
      valid_directions.push(i);
    }
    return valid_directions;
  }

  return (directions().indexOf(position) == -1);
}

Solver.prototype.finished = function() {
  return (this.path.length === this.target.length)
}


