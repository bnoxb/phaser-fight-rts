import 'phaser';
import Tileset from '../assets/spritesheets/Overworld.png';
import Tilemap from '../assets/tilemaps/fight-arena.json';
import Character from '../assets/spritesheets/character.png';

export default class FightScene extends Phaser.Scene {
    constructor(){
        super();
        this.moving = false;
    }
    preload(){
        this.load.image('tiles', Tileset);
        this.load.tilemapTiledJSON('map', Tilemap);
        this.load.spritesheet(
            'hero',
            Character,
            {
                frameWidth: 16,
                frameHeight: 32,
                margin: 1,
                spacing: 2
            }
        )
    }

    create(){
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('Overworld', 'tiles');
        this.worldLayer = map.createStaticLayer('ground', tileset, 0, 0);

        this.player = this.physics.add.sprite(100, 100, 'hero', 0);
        this.player.setScale(2);
    }

    update(){
        if (this.input.mousePointer.isDown){
            console.log(this.player.x);
            console.log(this.player.y);
            this.moving = true;
            const pointerTileXY = this.worldLayer.worldToTileXY(this.input.x, this.input.y);
            this.targetPoint = this.worldLayer.tileToWorldXY(pointerTileXY.x, pointerTileXY.y)
            
            console.log(this.targetPoint);
            //  400 is the speed it will move towards the mouse
            //  if it's overlapping the mouse, don't move any more
            // if (Phaser.Rectangle.contains(this.player.body, this.input.x, this.input.y)){
            //     this.player.body.velocity.setTo(0, 0);
            // }
        }
        if(this.moving){
            this.physics.moveTo(this.player, this.targetPoint.x, this.targetPoint.y, 150);
            if(parseInt(this.player.x) >= this.targetPoint.x - 1 && parseInt(this.player.x) <= this.targetPoint.x + 1 && parseInt(this.player.y) >= this.targetPoint.y -1 && parseInt(this.player.y) <= this.targetPoint.y + 1){
                console.log('hes stopped moving');
                this.moving = false;
            }
        }else{
            this.player.body.velocity.setTo(0, 0);
        }
    }
}