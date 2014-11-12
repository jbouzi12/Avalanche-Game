function Game() {
  this.$field = $('#gamefield');
  this.player = new Player(this.$field);
}

Game.prototype.loop = function() {
  this.player.move();
}
// later give this an argument, which will be
// the name of the player, change the player
// object to pass an additional argument (name)
// which will be assigned to the name of that
// instance of the Player object

// $(document).ready(function(){
//   game = new Game();

// })