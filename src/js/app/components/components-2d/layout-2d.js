import { Black, DisplayObject, Graphics, GraphicsLinearGradient, Sprite } from '../../../utils/black-engine.module';
import model from '../../../data/model';
import Helpers from '../../helpers/helpers';
import PlayButton from './play-button';
import Endscreen from './endscreen';
import ConfigurableParams from '../../../data/configurable_params';
import TopText from './top-text';
import Scene from './scene/scene';
import Tutorial from './tutorial';

// works as a main class in 2D playables
export default class Layout2D extends DisplayObject {
  constructor() {
    super();

    this.onPlayBtnClickEvent = 'onPlayBtnClickEvent';
    this.onFinishEvent = 'onFinishEvent';

    this._platform = model.platform;
    this._downloadBtn = null;
    this._logoGoogle = null;
    this._endScreen = null;

    this._isStaticStoreMode = false;
  }

  onAdded() {
    this._bg = new Graphics();
    this.add(this._bg);

    this._tutorial = new Tutorial();

    this._createScene();

    this.add(this._tutorial);

    this._topText = new TopText();
    this.add(this._topText);

    this._createEndscreen();

    this._createLogo();
    this._createDownloadBtn();

    this.onResize();
    Black.stage.on('resize', this.onResize, this);
  }

  onResize() {
    const bb = Black.stage.bounds;

    this._resizeBg(bb);
    this._scene.onResize(bb);

    this._topText.onResize();
    this._topText.x = bb.left;
    this._topText.y = bb.top;

    this._tutorial.x = Black.stage.centerX;
    this._tutorial.y = Black.stage.centerY;

    this._endScreen.onResize(bb);

    if (this._logoGoogle) {
      this._logoGoogle.scaleX = 0.9;
      this._logoGoogle.scaleY = 0.9;

      this._logoGoogle.x = bb.right - 240;
      this._logoGoogle.y = bb.top + 15;
    }

    if (this._downloadBtn) {
      this._downloadBtn.scaleX = 0.6;
      this._downloadBtn.scaleY = 0.6;

      this._downloadBtn.x = bb.right - 170;
      this._downloadBtn.y = this._topText.visible ? bb.top + 220 : bb.top + 80;
    }

    this._scene.y = this._topText.visible ? 0 : -30;

  }

  _resizeBg(bb) {
    this._grad = new GraphicsLinearGradient(0, bb.top, 0, bb.height);
    this._grad.addColorStop(0, ConfigurableParams.getData()['background']['gradient_color_top']['value']);
    this._grad.addColorStop(1, ConfigurableParams.getData()['background']['gradient_color_bottom']['value']);

    this._bg.clear();
    this._bg.fillGradient(this._grad);
    this._bg.rect(bb.left, bb.top, bb.width, bb.height);
    this._bg.fill();
  }

  _createScene() {
    this._scene = new Scene(this._tutorial);
    this.add(this._scene);

    this._scene.on(this._scene.onOutfitsSelectedEvent, msg => {
      this.post(this.onFinishEvent);
    });
  }

  _createEndscreen() {
    const endscreen = this._endScreen = new Endscreen();
    this.add(endscreen);

    endscreen.on(endscreen.onPlayBtnClickEvent, msg => {
      this.post(this.onPlayBtnClickEvent);
    });
  }

  _createLogo() {
    if (model.platform === "google_landscape" || model.platform === "google_portrait") {
      const logo = this._logoGoogle = new Sprite('logo');
      logo.alignAnchor(0, 0);
      this.add(logo);
    }
  }

  _createDownloadBtn() {
    if (model.platform === "mintegral" || ConfigurableParams.isNeedShowPN()) {
      const downloadBtn = this._downloadBtn = new PlayButton(ConfigurableParams.getData()["play_button"]["play_now_text"]["value"]);
      downloadBtn.visible = true;
      this.add(downloadBtn);
    }
  }

  showHint() {
    this._tutorial.show();
    this._scene.startHint();
  }

  onDown(x, y) {
    const defaultPos = { x: x, y: y };
    const blackPos = Black.stage.worldTransformationInverted.transformVector(defaultPos);

    const ifDownloadButtonClicked = this._ifDownloadButtonClicked(blackPos.x, blackPos.y);
    if (ifDownloadButtonClicked) return true;

    this._scene.onDown(blackPos.x, blackPos.y);
    this._endScreen.onDown(blackPos.x, blackPos.y);
  }

  onMove(x, y) {
    const defaultPos = { x: x, y: y };
    const blackPos = Black.stage.worldTransformationInverted.transformVector(defaultPos);
    this._scene.onMove(blackPos.x, blackPos.y);
  }

  onUp() {
    this._scene.onUp();
  }

  enableStoreMode() {
    if (this._isStaticStoreMode) return;
    this._isStaticStoreMode = true;

    if (this._downloadBtn) this._downloadBtn.visible = false;
    if (this._logoGoogle) this._logoGoogle.visible = false;
    this._topText.visible = false;

    this._endScreen.show();
  }

  _ifDownloadButtonClicked(x, y) {
    if (!this._isStaticStoreMode && this._downloadBtn) {
      const isButtonClick = this._downloadBtn.isDown(x, y);
      if (isButtonClick) {
        this.post(this.onPlayBtnClickEvent);
        return true;
      }
    }

    return false;
  }
}
