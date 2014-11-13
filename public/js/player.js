function Player(gameBoard) {
  this.$field = gameBoard;
  this.x = 560;
  this.y = 426;
  this.dir = "awaiting doom";
  this.speed = 3;
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
  // if (! (this.x > 670 || this.x < 230)) {
  //   this.x = old_x;
  //   this.y = old_y;
  //   this.outOfBounds = true;
  // }
  this.updateDisplay();
};

Player.prototype.updateDisplay = function() {
  this.$sprite.css('left', this.x);
  this.$sprite.css('top', this.y);
}

Player.prototype.setDirection = function(dir){
  this.dir = dir;
}

Player.prototype.destroy = function() {
  this.$sprite.remove();
}

// Player.prototype.inBounds = function() {
//   return (this.x > 670 || this.x < 230)
// }

