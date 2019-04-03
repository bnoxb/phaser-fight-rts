export default class Player {
    constructor(scene, x, y){
        this.scene = scene;

        this.sprite = scene.physics.add
            .sprite(x, y, "hero", 0)
            .setSize(16, 32)
            .setOffset(15, 25);
    }
}