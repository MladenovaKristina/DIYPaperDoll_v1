import { Black, MessageDispatcher, Timer, GameObject } from "../../utils/black-engine.module";
import Model from "../../data/model";
import WebpackConfig from "../../data/settingswebpack";
import Helpers from "../helpers/helpers";
import Layout2D from "./components-2d/layout-2d";
import SoundsController from "./kernel/soundscontroller";
import ConfigurableParams from "../../data/configurable_params";

export default class Game {
  constructor() {

    this.messageDispatcher = new MessageDispatcher();
    this.onFinishEvent = 'onFinishEvent';

    this._state = STATES.INTRO;

    this._layout2d = null;

    this._startTime = 0;
    this._storeOnClick = false;
    this._clicks = 0;
    this._clicksToStore = ConfigurableParams.getData()["store_details"]["go_to_market_after_x_click"]["value"];
    this._isDown = false;

    this._init();

    this.onResize();
    Black.stage.on('resize', this.onResize, this);
  }

  _init() {
    this._initUI();
  }

  start() {
    // this._layout2d.showTutorial();

    this._startTime = Date.now();

    this._state = STATES.GAMEPLAY;

    this._layout2d.showHint();
  }

  _initUI() {
    this._layout2d = new Layout2D();
    Black.stage.add(this._layout2d);

    this._layout2d.on(this._layout2d.onPlayBtnClickEvent, (msg) => {
      this._state = STATES.FINAL;
      this.messageDispatcher.post(this.onFinishEvent);
    });

    this._layout2d.on(this._layout2d.onFinishEvent, (msg) => {
      this._onFinish();
    });
  }

  onDown(x, y) {
    const downloadBtnClicked = this._layout2d.onDown(x, y);
    if (downloadBtnClicked) return;

    if (this._state !== STATES.GAMEPLAY) return;

    this._isDown = true;

    if (this._storeOnClick)
      this._onFinish();

    this._countClicks();
  }

  _countClicks() {
    this._clicks++;
    if (ConfigurableParams.isXClick() && this._clicks >= this._clicksToStore) {
      this._onFinish();
    }
  }

  onMove(x, y) {
    if (this._state !== STATES.GAMEPLAY) return;

    this._layout2d.onMove(x, y);
  }

  onUp() {
    if (this._state !== STATES.GAMEPLAY) return;

    this._isDown = false;
    this._layout2d.onUp();
  }

  onUpdate(dt) {
    if (
      ConfigurableParams.isXTime() &&
      this._startTime > 0 &&
      (Date.now() - this._startTime > ConfigurableParams.getData()['store_details']['go_to_market_after_x_time']['value'] * 1000)
    ) {
      if (ConfigurableParams.isCB()) {
        this._storeOnClick = true;
      }
      else {
        this._onFinish();
      }
    }
  }

  onResize() {

  }

  _onFinish() {
    if (this._state === STATES.FINAL) return;
    this._state = STATES.FINAL;

    if (ConfigurableParams.isPN()) {
      if (Model.platform === 'vungle') {
        parent.postMessage('complete', '*');
      }

      if (ConfigurableParams.getData()['audio']['sound_final_enabled']['value'])
        SoundsController.playWithKey('win');

      this.enableStoreMode();
    }
    else {
      this.messageDispatcher.post(this.onFinishEvent);
    }
  }

  enableStoreMode() {
    if (this._isStore) return;
    this._isStore = true;
    this._state = STATES.FINAL;

    this._layout2d.enableStoreMode();
  }
}

const STATES = {
  INTRO: 0, // if we want to make some action before the player interaction
  GAMEPLAY: 1, // all the gameplay
  OUTRO: 2, // if we want to make some action before the end screen
  FINAL: 3 // end screen
};
