$(document).ready(function() {
  // TODO:
  // Edit jquery to account for bootstrap modals
  //  - Something wrong with ajax with this jquery link


  $('#logout').click(function(event) {
    event.preventDefault();
    $link = $(event.target);
    $.ajax({
      url: $link.attr('href'),
      type: 'GET',
    })
    .done(function(welcomePartical) {
      $('header').replaceWith(welcomePartical);
    });

  });

  $('#start').click(function(event){
    event.preventDefault();
    $link = $(event.target);
    $.ajax({
      url: $link.attr('href'),
      type: 'GET',
    })
    .done(function(gameBoardPartial){
      $('#directions').replaceWith(gameBoardPartial);

      // Initialize the Game with a new player 

        var arena = $('#gamefield');

        var player = new Player(arena);
        
        var game = new Avalanche(arena, player);

        // Create Left/Right controls for user 

        ['left', 'right'].forEach(function(direction){
          Mousetrap.bind(direction, function() {
            game.player.setDirection(direction)
          });
        });
        setInterval(function() {game.loop(); }, 20);
    });
  });

  $('#login-form').submit(function(event) {
    event.preventDefault();
    $form = $(event.target);
    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
    })
    .done(function(welcomePartical) {
      $('#login, #signup').modal('hide');
      $('#game-title').toggle();
      $('#directions').show()

    })
    .fail(function(){
      console.log("Failed to login")
    })
  });

  $('#signup-form').submit(function(event) {
    event.preventDefault();
    $form = $(event.target);
    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
    })
    .done(function(welcomePartical) {
      $('#login, #signup').modal('hide');
      $('#game-title').toggle();
      $('#directions').show()
    });
  });

});
