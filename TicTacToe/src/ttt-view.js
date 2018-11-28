class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    $el.append(this.setupBoard());
    console.log(this);
  }

  bindEvents() {
    let $board = $('ul.grid');
    console.log('hello');
    $board.on("click", 'li', (e) => {
      let $square = $(e.target);
      if ($square.data('click')) {
        alert('Invalid move! Foo');
      } else {
        this.makeMove($square);
        $square.text(this.game.currentPlayer);
        this.game.playMove($square.data('pos'));
        $square.data('click', true);
        if (this.game.isOver()) {
          let $message;
          if (this.game.winner()) {
            $message = $('<h1>');
            $message.addClass('message');
            $message.text(`${this.game.winner()} wins!`);
            this.$el.append($message);
            let $winners = $(`.${this.game.winner()}`);
            for (var i = 0; i < $winners.length; i++) {
              let temp = $winners.eq(i);
              temp.removeClass();
              temp.addClass('winner');
            }
            // debugger
            console.log('$ul');
          } else {
            $message = $('<h1>');
            $message.addClass('message');
            $message.text(`It's a draw!`);
            this.$el.append($message);
          }
        }
      }
    });
  }

  makeMove($square) {
    $square.removeClass();
    $square.addClass(this.game.currentPlayer);
  }

  setupBoard() {
    let $board = $('<ul>');
    $board.addClass('grid');
    for (let x = 0; x < 3; x++) {
      for (var y = 0; y < 3; y++) {
        let $square = $('<li>');
        $square.data('pos', [x,y]);
        $square.data('click', false);
        $square.addClass('square');
        $board.append($square);
      }
    }
    return $board;
  }
}

module.exports = View;
