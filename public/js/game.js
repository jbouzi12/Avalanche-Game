function Game() {
  this.$field = $('#gamefield');
  this.player = new Player(this.$field);
  this.rocks = [new Rock(this.$field), new Rock(this.$field), new Rock(this.$field)];
  this.startTime = new Date();
  this.spawnInterval = 3000;
  this.nextSpawnTime = this.startTime.getTime() + this.spawnInterval;
}

Game.prototype.loop = function() {
  this.player.move();
  player = this.player;
  if (Date.now() > this.nextSpawnTime) {
    this.rocks.push(new Rock(this.$field))
    this.nextSpawnTime += this.spawnInterval;
    console.log(this.rocks);
  }
  this.rocks.forEach(function(rock) {
    rock.avalanche();
  })
}
