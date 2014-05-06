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

define('RemoteMario', ['Phaser', 'Mario'], function (Phaser, Mario) {
  var RemoteMario = function (identity, game, group, solids) {
    var self = this;

    Mario.call(this, identity, game, group, solids);

    console.log(this.update);
    var super_update = this.update;
    this.update = function () {
      super_update.call(this);
    };
    
  };

  RemoteMario.prototype = Object.create(Mario.prototype);
  RemoteMario.prototype.constructor = RemoteMario;

  return RemoteMario;
});