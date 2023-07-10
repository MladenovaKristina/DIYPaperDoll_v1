import { Vector2 } from 'three';
import { Sprite, Tween, DisplayObject, Graphics } from '../../../../utils/black-engine.module';
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
        this._duplicate = null;
        this.positionY = null;

        this._canMove = false;

        this._first = 0;
        this._wearOutfitPosition = null;
        this._bookletPosition = null;
        this._playerX = null;
        this._playerY = null;
        this._id = null;

        this._hand = null;
        this._idleTimer = null;
        this._idleCount = 0;
        this._lowerTween = null;
        this._moveTween = null;
        this._idleTween
    }

    onAdded() {
        this._hand = new TutorialHand();

        this._boundingBox = new Graphics();
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

    drag(outfit, id) {
        this._outfit = outfit;
        let sprite = this._outfit._sprite;
        this._duplicate = new Sprite(sprite);
        this.add(this._duplicate);

        this._id = id;
        if (this._first === 0) {
            this.positionY = this._outfit.y;
            this._bookletPosition = new Vector2(this._booklet._outfits[this._id].mX, this._booklet.mY);
            this._first++;
        }
    }

    onDown() {

        this._canMove = true;
        this.stopAnimation();
    }

    onMove(x, y) {
        if (this._canMove) {
            this._hand.x = x;
            this._hand.y = y;
            this._hand.visible = true;
            this.add(this._hand);

            this._duplicate.x = x - this._duplicate.width / 3;
            this._duplicate.y = y - 10;

            this.visible = true;
        }
    }

    onUp() {
        this._canMove = false;
        if (ConfigurableParams.getData()["tutorial"]['starting_hint_type']['value'] === 'FEMALE ARM' && !this._canMove) {
            this.lower(this._hand, () => {
                this.idle(this._hand);
            });
        }
        // this._hand.visible = false;
        // this._booklet.startHint();
        this._canMove = false;
        this._duplicate.visible = false;

        const outfitBounds = this._duplicate.getBounds();
        const playerBounds = this._boundingBox.getBounds();

        if (outfitBounds.intersects(playerBounds)) {
            this._character.wearOutfit(this._id);

            if (ConfigurableParams.getData()['audio']['sound_pop_enabled']['value'])
                SoundsController.playWithKey('pop');
        } else {
            console.log("outside");
            this._booklet.showOutfit(this._id);
        }

        this._first = 0;
    }

    lower(object, callback) {
        const startY = object.y;
        const startX = object.x;
        this._lowerTween = new Tween(
            {
                y: [startY
                    // ,  this._booklet.y + this._booklet.height / 5
                ],
                x: [startX, this._booklet.x + this._booklet.width / 5],
            },
            2.5
        );
        object.add(this._lowerTween);
        this._lowerTween.on('complete', msg => callback());
    }

    idle(object) {
        if (!this._canMove) {
            const startX = object.x;
            const startY = object.y;

            const radius = 50;
            const speed = 0.01;
            let angle = Math.PI;

            const idleStep = () => {
                const x = startX + Math.sin(angle) * radius;
                const y = startY + Math.sin(angle * 2) * radius * 2;

                object.x = x;
                object.y = y;

                angle += speed;

                if (angle >= Math.PI * 3) {
                    angle = Math.PI;
                }
            };
            this._idleTimer = setInterval(idleStep, 16); // Change the interval duration as per your requirements
        }
    }

    stopAnimation() {
        clearInterval(this._idleTimer);
        this._idleTimer = null;

        if (this._lowerTween) {
            this._lowerTween.stop();
            this._lowerTween = null;
        }
        if (!this._canMove) {
            this._canMove = true;
        }
    }
}
