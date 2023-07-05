import { Vector2 } from 'three';
import { GameObject, Tween, Ease, DisplayObject, TextField, Graphics, BlendMode } from '../../../../utils/black-engine.module';

export default class Drag extends DisplayObject {
    constructor(character) {
        super();
        this._character = character;
        this._outfit = null;
        this.setWear = false;
        this.visible = false;
        this.first = 0;
        this.defaultPos = null;
        this._playerX = null;
        this._playerY = null;
        this._id = null;

    }

    onAdded() {
    }

    drag(outfit, id, callback) {
        this._outfit = outfit;
        this._id = id;
        this._outfit.active = true;
        this._outfit.visible = true;

        this.defaultPos = new Vector2(this._outfit.x, this._outfit.y)
        if (this.setWear = true) callback();

    }

    onDown() {
    }

    onMove(x, y) {
        this._outfit.x = x - 500;
        this._outfit.y = y;
    }

    onUp() {
        console.log("up");
        if (
            this._outfit.x >= this._character.x - this._character.width &&
            this._outfit.x <= this._character.x + this._character.width &&
            this._outfit.y >= this._character.y - this._character.height &&
            this._outfit.y <= this._character.y + this._character.height
        ) {
            console.log("reset");

        } else {
            this.setWear = true; this._outfit.active = false;

            this._outfit.x = this.defaultPos.x;
            this._outfit.y = this.defaultPos.y;

        }
    }
}
