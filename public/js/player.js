function Player(gameBoard) {
  this.$field = gameBoard;
  this.x = 560;
  this.y = 426;
  this.dir = "awaiting doom";
  this.speed = 5;
  this.height = 17;
  this.width = 17;
  this.name = "player";
  this.start = Date.now();
  this.end = Date.now();
  this.initDisplay();
}

Player.prototype.initDisplay = function(){
  this.$sprite = $("<div class='" + this.name + "'></div>");
  this.$field.append(this.$sprite);
  this.updateDisplay();
}

Player.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.dir) {
    case 'right':
      this.x += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
  }
  // if (! this.inBounds()) {
  //   this.x = old_x;
  //   this.y = old_y;
  // }
  this.updateDisplay();
};

Player.prototype.updateDisplay = function() {
  this.$sprite.css('left', this.x);
  this.$sprite.css('top', this.y);
}
// Player.prototype.inBounds = function() {
//   return ()
// }

Player.prototype.setDirection = function(dir){
  this.dir = dir;
}