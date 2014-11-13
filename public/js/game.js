function Game() {
  this.$field = $('#gamefield');
  this.player = new Player(this.$field);
  this.rocks = [new Rock(this.$field), new Rock(this.$field), new Rock(this.$field)];
  this.startTime = new Date();
  this.spawnInterval = 1500;
  this.nextSpawnTime = this.startTime.getTime() + this.spawnInterval;
}

Game.prototype.loop = function() {
  this.player.move();
  player = this.player;
  rocksArray = this.rocks;
  // console.log(rocksArray);
  if (Date.now() > this.nextSpawnTime) {
    this.rocks.push(new Rock(this.$field), new Rock(this.$field), new Rock(this.$field), new Rock(this.$field), new Rock(this.$field), new Rock(this.$field), new Rock(this.$field));
    this.nextSpawnTime += this.spawnInterval;
    console.log(rocksArray);
  }
  this.rocks.forEach(function(rock) {
    rock.avalanche();
    if (rock.y > 430) {
      // rocksArray.shift();
      rock.destroy();
    }
  });
}
