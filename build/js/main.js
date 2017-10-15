var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Counter = /** @class */ (function () {
    function Counter() {
        this.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content', {
            create: this.create, update: this.update,
            render: this.render
        });
    }
    Counter.prototype.create = function () {
        var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
        this.textValue = this.game.add.text(0, 0, "0", style);
        this.updateCount = 0;
        console.log('Hello');
        console.log('Hello');
        console.log('Hello');
    };
    Counter.prototype.update = function () {
        this.textValue.text = (this.updateCount++).toString();
    };
    Counter.prototype.render = function () {
        this.game.debug.text("This is drawn in render()", 0, 80);
    };
    return Counter;
}());
var FullScreen = /** @class */ (function () {
    function FullScreen() {
        this.game = new Phaser.Game(this.gameWidth, this.gameHeight, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    FullScreen.prototype.preload = function () {
        var loader = this.game.load.image("jet", "images/jet.png");
        // Sets EXACT_FIT on initial load
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.game.scale.setMinMax(400, 300, 1600, 1200);
        this.game.scale.refresh();
    };
    FullScreen.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        // Draw the jet image centered to the screen
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");
        // Set background to white to make effect clearer
        this.game.stage.backgroundColor = 0xfff000;
        // Now add a function that will get called when user taps screen.
        // Simply calls startFullScreen().  True specifies you want anti aliasing.
        // Unfortunately you can only make full screen requests in desktop browsers in event handlers
        this.game.input.onTap.add(function () {
            this.game.scale.startFullScreen(true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //resize your window to see the stage resize toogame.stage.scale.setShowAll();game.stage.scale.refresh();           
        }, this);
    };
    return FullScreen;
}());
// In this example we illustrate input events can be applied to Sprites
var InputEvents = /** @class */ (function () {
    function InputEvents() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload
        });
    }
    InputEvents.prototype.preload = function () {
        var loader = this.game.load.image("jet", "images/jet.png");
    };
    InputEvents.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");
        this.jetSprite.pivot.x = this.jetSprite.width / 2;
        this.jetSprite.pivot.y = this.jetSprite.height / 2;
        // First enable the sprite to receive input
        this.jetSprite.inputEnabled = true;
        // Then add an event handler for input over
        this.jetSprite.events.onInputOver.add(function () {
            alert("The mouse passed over the sprite!");
        });
    };
    return InputEvents;
}());
var MouseEvents = /** @class */ (function () {
    function MouseEvents() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload, update: this.update
        });
    }
    MouseEvents.prototype.preload = function () {
        var loader = this.game.load.image("jet", "images/jet.png");
    };
    MouseEvents.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(300, 300, "jet");
        this.jetSprite.pivot.x = this.jetSprite.width / 2;
        this.jetSprite.pivot.y = this.jetSprite.height / 2;
    };
    MouseEvents.prototype.update = function () {
        // You can poll mouse status
        if (this.game.input.activePointer.isDown) {
            // This will be set to true if any mouse button is pressed or a finger is touched
            this.jetSprite.position.set(this.game.input.mousePointer.x, this.game.input.mousePointer.y);
            // You can test if the user is using a mouse
            if (this.game.input.activePointer.isMouse) {
                // In the case of a mouse, you can check mouse button status
                if (this.game.input.activePointer.button == Phaser.Mouse.RIGHT_BUTTON) {
                    // We just want to clear it, so this doesnt fire over and over, dont do this in production
                    this.game.input.activePointer.reset();
                    alert("Right button pressed");
                }
            }
            else {
                // On the other hand, if you are dealing with touch, you can have multiple touches/pointers
                // By default there are two pointers defined, so you can have up to two touches.
                // You can add more pointers using input.addPointer();
                if (this.game.input.pointer1.isDown && this.game.input.pointer2.isDown)
                    alert("Multitouch!");
            }
        }
    };
    return MouseEvents;
}());
var Shapes = /** @class */ (function () {
    function Shapes() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    Shapes.prototype.preload = function () {
        var loader = this.game.load.image("jet", "images/jet.png");
    };
    Shapes.prototype.create = function () {
        // Add a graphics object to our game
        var graphics = this.game.add.graphics(0, 0);
        // Create an array to hold the points that make up our triangle
        var points = [];
        // Add 4 Point objects to it
        points.push(new Phaser.Point());
        points.push(new Phaser.Point());
        points.push(new Phaser.Point());
        // Position one top left, top right and botto mmiddle
        points[0].x = 0;
        points[0].y = 0;
        points[1].x = this.game.width;
        points[1].y = 0;
        points[2].x = this.game.width / 2;
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
    };
    return Shapes;
}());
var SimpleGraphic = /** @class */ (function () {
    function SimpleGraphic() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    SimpleGraphic.prototype.preload = function () {
        var loader = this.game.load.image("jet", "images/jet.png");
    };
    SimpleGraphic.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");
    };
    return SimpleGraphic;
}());
var UsingCursor = /** @class */ (function () {
    function UsingCursor() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
            update: this.update
        });
    }
    UsingCursor.prototype.preload = function () {
        var loader = this.game.load.image("jet", "images/jet.png");
    };
    UsingCursor.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");
        // create the cursor key object
        this.cursors = this.game.input.keyboard.createCursorKeys();
    };
    UsingCursor.prototype.update = function () {
        // Update input state
        this.game.input.update();
        // Check each of the arrow keys and move accordingly
        // If the Ctrl Key + Left or Right arrow are pressed, move at a greater rate
        if (this.cursors.down.isDown)
            this.jetSprite.position.y += 5;
        if (this.cursors.up.isDown)
            this.jetSprite.position.y -= 5;
        if (this.cursors.left.isDown) {
            if (this.cursors.left.ctrlKey)
                this.jetSprite.position.x -= 50;
            else
                this.jetSprite.position.x -= 50;
        }
        if (this.cursors.right.isDown) {
            if (this.cursors.right.ctrlKey)
                this.jetSprite.position.x += 50;
            else
                this.jetSprite.position.x += 50;
        }
    };
    return UsingCursor;
}());
var UsingInputsEXT = /** @class */ (function () {
    function UsingInputsEXT() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload
        });
    }
    UsingInputsEXT.prototype.preload = function () {
        var loader = this.game.load.image("jet", "images/jet.png");
    };
    UsingInputsEXT.prototype.moveLeft = function () {
        this.jetSprite.position.add(-1, 0);
    };
    UsingInputsEXT.prototype.moveRight = function () {
        this.jetSprite.position.add(1, 0);
    };
    UsingInputsEXT.prototype.moveUp = function (e) {
        // As you can see the event handler is passed an optional event KeyboardEvent
        // This contains additional information about the key, including the Control
        // key status.
        // Basically if the control key is held, we move up or down by 5 instead of 1
        if (e.ctrlKey)
            this.jetSprite.position.add(0, -5);
        else
            this.jetSprite.position.add(0, -1);
    };
    UsingInputsEXT.prototype.moveDown = function (e) {
        if (e.ctrlKey)
            this.jetSprite.position.add(0, 1);
        else
            this.jetSprite.position.add(0, 1);
    };
    UsingInputsEXT.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");
        // Create a key for each WASD key
        this.W = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.A = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.S = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.D = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        // Since we are allowing the combination of CTRL+W, which is a shortcut for close window
        // we need to trap all handling of the W key and make sure it doesnt get handled by 
        // the browser.  
        // Unfortunately you can no longer capture the CTRL+W key combination in Google Chrome
        // except in "Application Mode" because apparently Google thought an unstoppable un prompted
        // key combo of death was a good idea...
        this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.W);
        // Wire up an event handler for each K.  The handler is a Phaser.Signal attached to the Key Object
        this.W.onDown.add(UsingInputsEXT.prototype.moveUp, this);
        this.A.onDown.add(UsingInputsEXT.prototype.moveLeft, this);
        this.S.onDown.add(UsingInputsEXT.prototype.moveDown, this);
        this.D.onDown.add(UsingInputsEXT.prototype.moveRight, this);
    };
    return UsingInputsEXT;
}());
var GameFromScratch;
(function (GameFromScratch) {
    var TitleScreenState = /** @class */ (function (_super) {
        __extends(TitleScreenState, _super);
        function TitleScreenState() {
            return _super.call(this) || this;
        }
        TitleScreenState.prototype.preload = function () {
            this.load.image("title", "images/TitleScreen.jpg");
        };
        TitleScreenState.prototype.create = function () {
            this.titleScreenImage = this.add.sprite(0, 0, "title");
            this.input.onTap.addOnce(this.titleClicked, this); // <-- that um, this is extremely important
        };
        TitleScreenState.prototype.titleClicked = function () {
            this.game.state.start("GameRunningState");
        };
        return TitleScreenState;
    }(Phaser.State));
    GameFromScratch.TitleScreenState = TitleScreenState;
    var GameRunningState = /** @class */ (function (_super) {
        __extends(GameRunningState, _super);
        function GameRunningState() {
            return _super.call(this) || this;
        }
        GameRunningState.prototype.create = function () {
            var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
            this.textValue = this.game.add.text(0, 0, "0", style);
            this.updateCount = 0;
        };
        GameRunningState.prototype.update = function () {
            this.textValue.text = (this.updateCount++).toString();
        };
        GameRunningState.prototype.render = function () {
            this.game.debug.text("This is drawn in render()", 0, 80);
        };
        return GameRunningState;
    }(Phaser.State));
    GameFromScratch.GameRunningState = GameRunningState;
    var UsingStates = /** @class */ (function () {
        function UsingStates() {
            this.game = new Phaser.Game(800, 600, Phaser.WEBGL, 'content');
            this.game.state.add("GameRunningState", GameRunningState, false);
            this.game.state.add("TitleScreenState", TitleScreenState, false);
            this.game.state.start("TitleScreenState", true, true);
        }
        return UsingStates;
    }());
    GameFromScratch.UsingStates = UsingStates;
})(GameFromScratch || (GameFromScratch = {}));
System.register("Testing/TestGame", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TestGame;
    return {
        setters: [],
        execute: function () {
            // module MyGame {
            TestGame = /** @class */ (function () {
                function TestGame() {
                    this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
                        create: this.create, preload: this.preload
                    });
                }
                TestGame.prototype.preload = function () {
                    console.log("===============");
                    console.log("PRELOAD HAPPENS");
                    console.log("===============");
                };
                TestGame.prototype.create = function () {
                    console.log("===============");
                    console.log('GAME OBJECTS HAVE BEEN CREATED');
                    console.log("===============");
                };
                return TestGame;
            }());
            // } 
        }
    };
});
System.register("Testing/TestState", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var GameRunningState;
    return {
        setters: [],
        execute: function () {
            GameRunningState = /** @class */ (function (_super) {
                __extends(GameRunningState, _super);
                function GameRunningState() {
                    return _super.call(this) || this;
                }
                GameRunningState.prototype.create = function () {
                    console.log("PHASER TEST STATE");
                };
                GameRunningState.prototype.update = function () {
                };
                GameRunningState.prototype.render = function () {
                };
                return GameRunningState;
            }(Phaser.State));
            exports_2("GameRunningState", GameRunningState);
        }
    };
});
//# sourceMappingURL=main.js.map