function Rock(gameBoard) {
  this.$field = gameBoard;
  this.x = Math.random() * this.$field.width();
  this.y = 186;
  this.speed = 2;
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