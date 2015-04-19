$(document).ready(function() {
  // TODO:
  // - When submitting Start, remove directions but
  //    keep welcome message to user
  // - fix AJAX response when starting game
    // - remove everything except game title in directions div 
    // - THE ISSUE is that it removes the directions
      // but the content in the layout will render on any page
      // should move this to index page and move directions to its
      // own page
  // - Undo changes to game initialization
    // - just look at master branch
  // - style start button
  // - find out to remove shake animation from sonic and rocks
    // - probably should make arena bigger



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
