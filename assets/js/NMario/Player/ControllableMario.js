require.config({
  paths: {
    'Phaser': '../libs/phaser/phaser.min',
    'Mario': 'NMario/Player/Mario'
  },
  shim: {
    'Phaser': {
      exports: 'Phaser'
    },
    'Mario': {
      exports: 'Mario'
    }
  }
});

define('ControllableMario', ['Phaser', 'Mario'], function (Phaser, Mario) {
  var ControllableMario = function (identity, game, objects) {
    var self = this;

    Mario.call(this, identity, game, objects);
    game.camera.follow(this,  Phaser.Camera.FOLLOW_LOCKON);
    
    this.collide = function(target) {
      if (this.state != 'dead') {
        switch (target.Type) {
          case 'Mushroom':
            //If it is hit by player from above, kill the mushroom
            if (target.body.touching.up == true) {
              // target.collected();
              self.body.velocity.y = -0.8 * self.body.velocity.y;
              self.send('player collect object', { id: target.id });
            } else { //Otherwise, hit the player
              this.hit();
            }
            break;
          case 'Coin':
            // target.collected();
            self.send('player collect object', { id: target.id });
            break;
          case 'Power-Up':
            // target.collected();
            self.send('player collect object', { id: target.id });
            break;
          case 'Brick':
            if (target.body.touching.down == true) {
              self.send('player collect object', { id: target.id });
            }
            break;
          case 'Flag':
            self.send('player collect object', { id: target.id });
            break;
          case 'Boat':
            self.send('player collect object', { id: target.id });
            break;
          case 'LifeUp':
            // target.collected();
            self.send('player collect object', { id: target.id });
            break;
          case 'LifeDown':
            // target.collected();
            self.send('player collect object', { id: target.id });
            break;
          case 'Water':
            this.hit();
            break;
        }
      }
    };
  };

  ControllableMario.prototype = Object.create(Mario.prototype);
  ControllableMario.prototype.constructor = ControllableMario;
  ControllableMario.prototype.Type = 'ControllableMario';

  return ControllableMario;
});
