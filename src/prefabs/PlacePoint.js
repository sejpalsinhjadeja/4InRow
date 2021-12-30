
// You can write more code here

/* START OF COMPILED CODE */

class PlacePoint extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Red", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		this.visible = false;

		/* START-USER-CTR-CODE */
		this.playerTurnNo = 0;
		this.isFilled = false;
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
