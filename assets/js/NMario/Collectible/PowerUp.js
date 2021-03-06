require.config({
  paths: {
    'BaseCollectible': 'NMario/Collectible/BaseCollectible',
    'Music': 'Music'
  },
  shim: {
    'Phaser': {
      exports: 'Phaser'
    }
  }
});

define('PowerUp', ['BaseCollectible', 'Music'], function (BaseCollectible, Music) {
  var type2color = {
    grow: 1
  };

  var PowerUp = function(game, objects, x, y, attr) {

    var self = this;
    
    BaseCollectible.call(this, game, objects, x, y, attr, 'power-up');

    this.frame = type2color[attr.type];

    this.scale.setTo(localStorage.scale, localStorage.scale);

    this.body.velocity.x = 20 * localStorage.scale;
    this.body.gravity.y = 800 * localStorage.scale;
    this.body.bounce.x = 1;

    this.anchor.setTo(0, 0);
    this.body.setSize(16, 16, 0, 0);

    var lastestPhysics = null;

    Music.sound('powerup');

    this.update = function () {

      if (lastestPhysics != null) {
        self.body.x = lastestPhysics.position.x * localStorage.scale;
        self.body.y = lastestPhysics.position.y * localStorage.scale;

        self.body.velocity.x = lastestPhysics.velocity.x * localStorage.scale;
        self.body.velocity.y = lastestPhysics.velocity.y * localStorage.scale;

        self.body.acceleration.x = lastestPhysics.acceleration.x * localStorage.scale;
        self.body.acceleration.y = lastestPhysics.acceleration.y * localStorage.scale;

        lastestPhysics = null;
      }
    };

    this.__defineSetter__('lastestData', function (data) {
      lastestPhysics = data.physics;
    });

    this.__defineGetter__('lastestData', function () {
      return {
        id: attr.id,
        physics: {
          position: { x: self.body.x / localStorage.scale, y: self.body.y / localStorage.scale },
          velocity: { x: self.body.velocity.x / localStorage.scale, y: self.body.velocity.y / localStorage.scale },
          acceleration: { x: self.body.acceleration.x / localStorage.scale, y: self.body.acceleration.y / localStorage.scale }
        }
      };
    });

    this.collected = function (player, collect_index) {
      if (attr.type == 'grow') {
        console.log('grow up', player);
        player.grow();
        self.kill();
      }
    };

  };

  PowerUp.prototype = Object.create(BaseCollectible.prototype);
  PowerUp.prototype.constructor = PowerUp;
  PowerUp.prototype.Type = 'Power-Up';

  return PowerUp;
});
