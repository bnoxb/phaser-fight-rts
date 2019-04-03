import Phaser from "phaser";
import FightScene from "./scenes/fightScene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  pixelArt: true,
  scene: FightScene,
  physics: {
    default: "arcade",
    arcade: {
        gravity: { y: 0 }
    }
}
};

const game = new Phaser.Game(config);

