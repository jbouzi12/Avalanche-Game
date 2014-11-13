function Rock(gameBoard) {
  this.$field = gameBoard;
  this.x = Math.random() * this.$field.width();
  this.y = 226;
  this.dir = "awaiting doom";
  this.speed = 6;
  this.height = 13;
  this.width = 13;
  this.name = "rock";
  this.initDisplay();
}

['initDisplay', 'updateDisplay'].forEach(function (method){
  Rock.prototype[method] = Player.prototype[method];
})

Rock.prototype.avalanche = function() {
  this.y += this.speed;
  this.updateDisplay();
}