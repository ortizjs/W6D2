class View {
  constructor(game, $el) {}

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $board = $('ul');
    $board.addClass('grid');
    for (var i = 0; i < 9; i++) {
      var $square = $('li');
      $square.addClass('square');
      $board.append($square);
    }
  }
}

module.exports = View;
