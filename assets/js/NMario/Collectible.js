require.config({
  paths: {
    'Mushroom': 'NMario/Collectible/Mushroom',
    'Coin': 'NMario/Collectible/Coin',
    'Flagpole': 'NMario/Collectible/Flagpole',
    'PowerUp': 'NMario/Collectible/PowerUp',
    'Brick': 'NMario/Collectible/Brick',
    'Box': 'NMario/Collectible/Box',
    'Water': 'NMario/Collectible/Water',
    'Boat': 'NMario/Collectible/Boat',
    'LifeUp': 'NMario/Collectible/LifeUp',
    'LifeDown': 'NMario/Collectible/LifeDown'
  },
  shim: {
    'Mushroom': {
      exports: 'Mushroom'
    },
    'Coin': {
      exports: 'Coin'
    },
    'Flagpole': {
      exports: 'Flagpole'
    },
    'PowerUp': {
      exports: 'PowerUp'
    }
  }
});

define('Collectible', ['Mushroom', 'Coin', 'Flagpole', 'PowerUp', 'Brick', 'Box', 'Water', 'Boat','LifeUp','LifeDown'], function (Mushroom, Coin, Flagpole, PowerUp, Brick, Box, Water, Boat, LifeUp, LifeDown) {
  var Collectible = {};

  Collectible.Mushroom = Mushroom;
  Collectible.Coin = Coin;
  Collectible.Flagpole = Flagpole;
  Collectible.PowerUp = PowerUp;
  Collectible.Brick = Brick;
  Collectible.Box = Box;
  Collectible.Water = Water;
  Collectible.Boat = Boat;
  Collectible.LifeUp = LifeUp;
  Collectible.LifeDown = LifeDown;

  return Collectible;
});
