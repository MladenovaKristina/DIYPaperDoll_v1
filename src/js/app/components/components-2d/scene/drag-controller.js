import { Vector2 } from 'three';
import { Sprite, DisplayObject, Graphics } from '../../../../utils/black-engine.module';
import ConfigurableParams from '../../../../data/configurable_params';
import SoundsController from '../../kernel/soundscontroller';
import { TutorialHand } from './tutorial-hand';

export default class Drag extends DisplayObject {
    constructor(character, booklet) {
        super();
        this.visible = false;
        this._character = character;
        this._booklet = booklet;
        this._outfit = null;
        this.positionY = null;
        this._id = null;
        this._hand = new TutorialHand();
        this._boundingBox = new Graphics();
        this._duplicate = null;
        this._canMove = false;
        this._first = 0;
        this._wearOutfitPosition = null;
        this._bookletPosition = null;
        this._playerX = null;
        this._playerY = null;
        this._moveTween = null;
    }

    onAdded() {
        this._boundingBox.beginPath();
        this._boundingBox.fillStyle(0x000000, 0);
        this._boundingBox.rect(
            this._character.x + this._character.width,
            this._character.y - this._character.height * 0.2,
            this._character.width,
            this._character.height
        );
        this._boundingBox.fill();
        this.add(this._boundingBox);
    }

    initDraggable(outfit, id) {
        this._outfit = outfit;
        let sprite = this._outfit._sprite;
        this._duplicate = new Sprite(sprite);
        this.add(this._duplicate);
        this._id = id;

        this._bookletPosition = new Vector2(
            this._booklet._outfits[this._id].mX,
            this._outfit.y);

        this._hand.visible = false;
        this.add(this._hand);
    }

    onDown(x, y) {
        this._canMove = true;
        this._booklet._stopHint();
        this._hand.visible = true;
        this._hand.x = x;
        this._hand.y = y;
        this._duplicate.x = x - this._duplicate.width / 2;
        this._duplicate.y = y - this._duplicate.height / 2;
    }

    onMove(x, y) {
        if (this._canMove) {
            this._hand.x = x;
            this._hand.y = y;
            this._duplicate.x = x - this._duplicate.width / 2;
            this._duplicate.y = y - this._duplicate.height / 2;
            this.visible = true;
        }
    }

    onUp() {
        this._canMove = false;
        this._duplicate.visible = false;
        this._hand.visible = false;
        this._booklet.startHint();

        const outfitBounds = this._duplicate.getBounds();
        const playerBounds = this._boundingBox.getBounds();

        if (outfitBounds.intersects(playerBounds)) {
            this._character.wearOutfit(this._id);

            if (ConfigurableParams.getData()['audio']['sound_pop_enabled']['value']) {
                SoundsController.playWithKey('pop');
            }
        } else {
            this._booklet.showOutfit(this._id);
        }

        this._first = 0;
    }
}
