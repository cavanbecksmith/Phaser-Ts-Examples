class SimpleGraphic {
    game: Phaser.Game;
    jetSprite: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    preload() {
        var loader = this.game.load.image("jet", "images/jet.png");
    }
    create() {
        var image = <Phaser.Image>this.game.cache.getImage("jet");
        
        this.jetSprite = this.game.add.sprite(
            this.game.width / 2 - image.width / 2,
            this.game.height / 2 - image.height / 2,
            "jet");
    }
}