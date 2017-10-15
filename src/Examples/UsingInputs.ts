class UsingCursor {
    game: Phaser.Game;
    jetSprite: Phaser.Sprite;
    cursors: Phaser.CursorKeys;

    constructor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
        update: this.update});
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

        // create the cursor key object
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        // Update input state
        this.game.input.update();

        // Check each of the arrow keys and move accordingly
        // If the Ctrl Key + Left or Right arrow are pressed, move at a greater rate
        if (this.cursors.down.isDown)
            this.jetSprite.position.y+=5;
        if (this.cursors.up.isDown)
        this.jetSprite.position.y-=5;
        if (this.cursors.left.isDown) {
            if (this.cursors.left.ctrlKey)
                this.jetSprite.position.x -= 50;
            else
                this.jetSprite.position.x-=50;
        }
        if (this.cursors.right.isDown) {
            if (this.cursors.right.ctrlKey)
                this.jetSprite.position.x += 50;
            else
            this.jetSprite.position.x+=50;
        }
    }
}