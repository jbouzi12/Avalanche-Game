function Rock(gameBoard) {
  this.$field = gameBoard;
  this.x = Math.random() * (855 - 230) + 230;
  this.y = 160;
  this.speed = 4;
  this.height = 13;
  this.width = 13;
  this.name = "rock";
  this.initDisplay();
}

['initDisplay', 'updateDisplay', 'destroy'].forEach(function (method){
  Rock.prototype[method] = Player.prototype[method];
})

Rock.prototype.avalanche = function() {
  this.y += this.speed;
  this.updateDisplay();
}

Rock.prototype.collision = function(player) {
  return (this.x < player.x + player.width && this.x + this.width > player.x && this.y < player.y + player.height && this.height + this.y > player.y);
}