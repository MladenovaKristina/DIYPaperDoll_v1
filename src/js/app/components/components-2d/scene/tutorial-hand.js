import { Tween, Black, DisplayObject, Sprite, Ease } from '../../../../utils/black-engine.module';
import ConfigurableParams from '../../../../data/configurable_params';

export class TutorialHand extends DisplayObject {
  constructor() {
    super();

    this._view = null;
    this.visible = false;
  }

  onAdded() {
    if (ConfigurableParams.getData()["tutorial"]['starting_hint_type']['value'] === 'MICKEY') {
      this._view = new Sprite('hint_mickey');
      this._view.scaleX = 0.6;
      this._view.scaleY = 0.6;
      this._view.alignAnchor(0.15, -0.1);
      this._view.rotation = 0.2;
      this.add(this._view);
    }
    if (ConfigurableParams.getData()["tutorial"]['starting_hint_type']['value'] === 'SIMPLE') {
      this._view = new Sprite('hint_simple');
      this._view.scaleX = 0.6;
      this._view.scaleY = 0.6;
      this._view.alignAnchor(0, 0);
      this._view.rotation = 0.2;
      this.add(this._view);
    }
    if (ConfigurableParams.getData()["tutorial"]['starting_hint_type']['value'] === 'FEMALE') {
      this._view = new Sprite('hint_female');
      this._view.scaleX = 0.6;
      this._view.scaleY = 0.6;
      this._view.alignAnchor(0.1, 0);
      this.add(this._view);
    }
  }

  tap() {
    this._view.y = 50;
    const moveTween = new Tween({
      y: [0, 50]
    }, 0.5, { ease: Ease.sinusoidalInOut });
    this._view.add(moveTween);
  }

  hide() {
    this._view.visible = false;
  }
}
