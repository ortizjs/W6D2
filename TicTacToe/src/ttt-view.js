class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    $el.append(this.setupBoard());
    console.log(this)
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $board = $('<ul>');
    $board.addClass('grid');
    for (let i = 0; i < 9; i++) {
      let $square = $('<li>');
      $square.data('pos', i);
      $square.addClass('square');
      $board.append($square);
    }
    return $board;
  }
}

module.exports = View;
