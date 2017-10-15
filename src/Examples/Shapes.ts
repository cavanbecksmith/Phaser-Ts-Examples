class Shapes {
    game: Phaser.Game;
    jetSprite: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    preload() {
        var loader = this.game.load.image("jet", "images/jet.png");
    }
    create() {
        // Add a graphics object to our game
        var graphics = this.game.add.graphics(0, 0);

        // Create an array to hold the points that make up our triangle
        var points: Phaser.Point[] = [];
        // Add 4 Point objects to it
        points.push(new Phaser.Point());
        points.push(new Phaser.Point());
        points.push(new Phaser.Point());

        // Position one top left, top right and botto mmiddle
        points[0].x = 0;
        points[0].y = 0;

        points[1].x = this.game.width;
        points[1].y = 0;

        points[2].x = this.game.width/2;
        points[2].y = this.game.height;

        // set fill color to red in HEX form.  The following is equal to 256 red, 0 green and 0 blue.  
        // Do at 50 % alpha, meaning half transparent
        graphics.beginFill(0xff0000, 0.5);
        
        // Finally draw the triangle, false indicates not to cull ( remove unseen values )
        graphics.drawTriangle(points, false);

        // Now change colour to green and 100% opacity/alpha
        graphics.beginFill(0xffffff, 1.0);

        // Draw circle about screen's center, with 200 pixels radius
        graphics.drawCircle(this.game.width / 2, this.game.height / 2, 200);
        
    }
}