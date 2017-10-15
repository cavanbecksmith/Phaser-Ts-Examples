import TestState = require('./TestState.ts');

// module MyGame {
    class TestGame {
        game: Phaser.Game;
        gamewidth: window.outerWidth;
        gameheight: window.outerHeight;
    
        constructor () {
            this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }
    
        preload () {
            console.log("===============")
            console.log("PRELOAD HAPPENS")
    
            console.log("===============")
        }
    
        create() {
            console.log("===============")
            console.log('GAME OBJECTS HAVE BEEN CREATED');
            console.log("===============")
        }
    }
// }