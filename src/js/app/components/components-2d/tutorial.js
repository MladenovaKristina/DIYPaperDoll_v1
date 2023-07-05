import ConfigurableParams from '../../../data/configurable_params';
import { Tween, Black, Graphics, Sprite, DisplayObject, TextField, Ease } from '../../../utils/black-engine.module';
import Helpers from '../../helpers/helpers';

export default class Tutorial extends DisplayObject {
  constructor() {
    super();

    this._text = null;
    this.visible = false;
  }

  onAdded() {
    const textValue = ConfigurableParams.getData()["tutorial"]["tutorial_text"]["value"];
    const textColor = Number(ConfigurableParams.getData()["tutorial"]["tutorial_color"]["value"].replace('#', '0x'));
    const fontSize = ConfigurableParams.getData()["tutorial"]["font_size"]["value"];
    const strokeColor = Number(ConfigurableParams.getData()["tutorial"]["stroke_color"]["value"].replace('#', '0x'));
    const strokeThickness = Number(ConfigurableParams.getData()["tutorial"]["stroke_thickness"]["value"]);

    this._text = new TextField(
      textValue,
      'LilitaOne',
      textColor,
      fontSize
    );
    this._text.strokeColor = strokeColor;
    this._text.strokeThickness = strokeThickness;
    this._text.alignAnchor(0.5, 0.5);
    this.add(this._text);

    if (ConfigurableParams.getData()["tutorial"]["tutorial_pulse"]["value"]) {
      const pulseTween = new Tween({
        scaleX: [1.1, 1],
        scaleY: [1.1, 1]
      }, 1, { loop: true, ease: Ease.sinusoidalInOut });
      this._text.add(pulseTween);
    }
  }

  show() {
    if (ConfigurableParams.getData()["tutorial"]["tutorial_enabled"]["value"])
      this.visible = true;
  }

  hide() {
    this.visible = false;
  }
}

