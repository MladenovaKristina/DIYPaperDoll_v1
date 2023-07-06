import { Vector2 } from 'three';
import { GameObject, Tween, Sprite, DisplayObject, TextField, Graphics, BlendMode } from '../../../../utils/black-engine.module';
import ConfigurableParams from '../../../../data/configurable_params';
import SoundsController from '../../kernel/soundscontroller';

export default class Drag extends DisplayObject {
    constructor(character, booklet) {
        super();
        this._character = character;
        this._booklet = booklet;
        this._outfit = null;
        this.setWear = false;
        this._canMove = false;

        this.first = 0;
        this._wearOutfitPosition = null;
        this._bookletPosition = null;
        this._playerX = null;
        this._playerY = null;
        this._id = null;

        this._view = null;
        this.visible = false;
    }

    onAdded() {
        this._view = new Sprite('hint_female');
        this._view.scaleX = 0.6;
        this._view.scaleY = 0.6;
        this._view.alignAnchor(0.1, 0);
        this.add(this._view);

        this._boundingBox = new Graphics();
        this._boundingBox.beginPath();
        this._boundingBox.fillStyle(0x000000, 0);
        this._boundingBox.rect(this._character.x + this._character.width, this._character.y - this._character.height * 0.2, this._character.width, this._character.height)
        this._boundingBox.fill();
        this.add(this._boundingBox)
    }

    drag(outfit, id) {
        this._outfit = outfit;
        this._outfit.active = true;
        this._outfit.visible = true;
        let position = 0;

        if (this.first === 0) {
            this._id = id;

            this._wearOutfitPosition = new Vector2(this._outfit.x, this._outfit.y);
            this._bookletPosition = new Vector2(this._booklet._outfits[this._id].mX, this._booklet._outfits[this._id].mY);
            this.first++;
        }
        else {
            if (this._id !== id) {
                this._id = id;
                this.first = 0;
                position = 0;
            }
        }
    }

    onDown() {
        this._canMove = true;
    }

    onMove(x, y) {
        this._view.x = x;
        this._view.y = y;
        this.visible = true;

        this._outfit.x = x - this._booklet.x;
        this._outfit.y = y - this._outfit.height / 2;

    }

    onUp() {
        this._canMove = false;

        this.visible = false;
        this.first = 0;
        // this._booklet._hideBG();

        const outfitBounds = this._outfit.getBounds();
        const playerBounds = this._boundingBox.getBounds();

        if (outfitBounds.intersects(playerBounds)) {
            this._outfit.x = this._wearOutfitPosition.x;
            this._outfit.y = this._wearOutfitPosition.y;
            this.setWear = true;
            this._character.wearOutfit(this._id);

            console.log("intersect", outfitBounds, playerBounds)
            if (ConfigurableParams.getData()['audio']['sound_pop_enabled']['value'])
                SoundsController.playWithKey('pop');
        }

        else {
            this._outfit.x = this._bookletPosition.x;
            this._outfit.y = this._bookletPosition.y + this._booklet.position.y;
        }
    }
}
