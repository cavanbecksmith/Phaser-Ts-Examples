class FullScreen {
    game: Phaser.Game;
    jetSprite: Phaser.Sprite;
    gameWidth: 800;
    gameHeight: 480;

    constructor() {
        this.game = new Phaser.Game(this.gameWidth, this.gameHeight, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    preload() {
        var loader = this.game.load.image("jet", "images/jet.png");

        // Sets EXACT_FIT on initial load
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.game.scale.setMinMax(400, 300, 1600, 1200);
        this.game.scale.refresh();
    }

    create() {
        var image = <Phaser.Image>this.game.cache.getImage("jet");

        // Draw the jet image centered to the screen
        this.jetSprite = this.game.add.sprite(
            this.game.width / 2 - image.width / 2,
            this.game.height / 2 - image.height / 2,
            "jet");

        // Set background to white to make effect clearer
        this.game.stage.backgroundColor = 0xfff000;


        // Now add a function that will get called when user taps screen.
        // Simply calls startFullScreen().  True specifies you want anti aliasing.
        // Unfortunately you can only make full screen requests in desktop browsers in event handlers
        this.game.input.onTap.add(function(){ 
            this.game.scale.startFullScreen(true); 
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //resize your window to see the stage resize toogame.stage.scale.setShowAll();game.stage.scale.refresh();           
        }, this);
    }

}