function Player(gameBoard) {
  this.$field = gameBoard;
  this.x = 560;
  this.y = 426;
  this.speed = 20;
  this.height = 17;
  this.width = 17;
  this.name = "player";
  this.initDisplay();
}

Player.prototype.initDisplay = function(){
  this.$sprite = $("<div class='" + this.name + "'></div>");
  this.$field.append(this.$sprite);
  this.updateDisplay();
}

Player.prototype.updateDisplay = function() {
  this.$sprite.css('left', this.x);
  this.$sprite.css('top', this.y);
}