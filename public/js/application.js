$(document).ready(function() {
  $('#signup').click(function(event) {
    event.preventDefault();
    $("#signup-form").toggle();
    $("#login-form").hide();
  });

  $('#login').click(function(event) {
    event.preventDefault();
    $("#login-form").toggle();
    $("#signup-form").hide();
  });

  $('#logout').click(function(event) {
    event.preventDefault();
    console.log(event.target);
    $link = $(event.target);
    $.ajax({
      url: $link.attr('href'),
      type: 'GET',
    })
    .done(function(welcomePartical) {
      $('header').replaceWith(welcomePartical);
    });

  });

  $('.cancel-btn').click(function(event) {
    event.preventDefault();
    $(event.target).closest('form').toggle();
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
      $form.toggle(400);
      $('#signup').replaceWith(welcomePartical);
      $('#login, #home').hide();
      $('#game-title').toggle();
      $('#gamefield').show()

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
      $form.toggle(400);
      $('#signup').replaceWith(welcomePartical);
      $('#login, #home').hide();
      $('#game-title').toggle();
      $('#gamefield').show()
    });
  });

});
