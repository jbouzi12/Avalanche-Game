var Avalanche = Avalanche || {};

Avalanche.Game = function(field, newPlayer) {
  this.$field = field;
  this.player = newPlayer;
  this.rocks = [new Rock(this.$field), new Rock(this.$field)]
  this.startTime = new Date();
  this.spawnInterval = 250;
  this.nextSpawnTime = this.startTime.getTime() + this.spawnInterval;
}

Avalanche.Game.prototype.loop = function() {
  this.player.move();
  player = this.player;
  rocksArray = this.rocks;
  if (Date.now() > this.nextSpawnTime) {
    this.rocks.push(new Rock(this.$field));
    this.nextSpawnTime += this.spawnInterval;
  }
  rocksArray.forEach(function(rock) {
    rock.avalanche();
      if (rock.y > 430) {
      rocksArray.shift();
      rock.destroy();
    }
    if (rock.collision(player)) {
      player.dead = true;
      player.destroy();
    }
  });
}
