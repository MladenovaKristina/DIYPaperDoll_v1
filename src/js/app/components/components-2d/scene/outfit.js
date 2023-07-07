import ConfigurableParams from '../../../../data/configurable_params';
import { GameObject, Tween, Ease, Sprite, DisplayObject, TextField, Graphics, BlendMode } from '../../../../utils/black-engine.module';

export default class Outfit extends DisplayObject {
  constructor(data) {
    super();

    this.active = true;
    this._id = data.id;
    this._sprite = data.sprite;

    this.x = data.x;
    this.y = data.y;

    this.scaleX = Number(data.scale);
    this.scaleY = Number(data.scale);
  }

  onAdded() {
    this._bg = new Sprite(this._sprite);
    this._bg.alignAnchor(0.5, 0.5);
    this.add(this._bg);

    this._view = new Sprite(this._sprite);
    this._view.alignAnchor(0.5, 0.5);
    this.add(this._view);

    this._bg.color = Number(ConfigurableParams.getData()['booklet']['clicked_item_color']['value'].replace('#', '0x'));
    this._bg.alpha = Number(ConfigurableParams.getData()['booklet']['clicked_item_alpha']['value']);
  }

  hide() {
    if (this._pulseTween) {
      this._pulseTween.stop();
    }

    const hideTween = new Tween({
      scaleX: 0,
      scaleY: 0
    }, 0.25, { ease: Ease.sinusoidalOut });
    this._view.add(hideTween);

    this.active = false;
  }

  show(onComplete) {
    this.visible = true;

    const oldScale = this.scaleX;

    this.scaleX = oldScale * 1.7;
    this.scaleY = oldScale * 1.7;

    const showTween = new Tween({
      scaleX: oldScale,
      scaleY: oldScale
    }, 0.3, { ease: Ease.sinusoidalIn });
    this.add(showTween);

    showTween.on('complete', msg => onComplete());
  }

  showOutfit() {
    this.visible = true;

    const oldScale = 1;

    const showTween = new Tween({
      scaleX: oldScale,
      scaleY: oldScale
    }, 0.3, { ease: Ease.sinusoidalIn });
    this._view.add(showTween);
  }

  pulseHint() {
    const pulseTween = this._pulseTween = new Tween({
      rotation: [0.12, 0, -0.12, 0, 0.06, 0, -0.06, 0]
    }, 0.7, { ease: Ease.sinusoidalOut, delay: 0.2 });
    this.add(pulseTween);
  }

  isDown(x, y) {
    if (!this.active) return false;

    const halfWidth = this.width / 2 * 0.9;
    const halfHeight = this.height / 2 * 0.9;

    const isPointInside = Math.abs(this.x - x) < halfWidth && Math.abs(this.y - y) < halfHeight;

    return isPointInside;
  }

  get id() {
    return this._id;
  }
}
