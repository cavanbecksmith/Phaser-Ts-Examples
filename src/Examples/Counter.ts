class Counter {
	constructor() {
		this.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'content', {
			create: this.create, update: this.update,
		render: this.render});
	}

	game: Phaser.Game;
	textValue: Phaser.Text;
	textValue1: Phaser.Text;
	updateCount: number;
	testing: Array<any>;

	create() {
		var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
		this.textValue = this.game.add.text(0, 0, "0", style);
		this.updateCount = 0;
		console.log('Hello');
		console.log('Hello');
		console.log('Hello');
	}

	update() {
		this.textValue.text = (this.updateCount++).toString();
	}

	render() {
		this.game.debug.text("This is drawn in render()", 0, 80);
	}
}	