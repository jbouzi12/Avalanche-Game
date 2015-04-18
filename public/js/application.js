$(document).ready(function() {
  // TODO:
  // Edit jquery to account for bootstrap modals
  // - Edit welcome partial
  //    - Put Directions in Welcome Partial
  // - When submitting Start, remove directions but
  //    keep welcome message to user


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

      // Hide signup/login modals, display directions
      
      $('#login, #signup').modal('hide');
      
      $('.title').toggle();
      
      $('#directions').show()

    })
    
    .fail(function(){
    
      console.log("Failed to login");
    
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
    
    // Hide signup/login modals, Show directions

      $('#login, #signup').modal('hide');
    
      $('.title').toggle();
    
      $('#directions').show()
    
    });
  
  });

});
