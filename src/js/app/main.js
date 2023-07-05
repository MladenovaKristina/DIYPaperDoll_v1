import { Black, GameObject, CanvasDriver, Input, Engine, StageScaleMode } from "../utils/black-engine.module";
import GameController from './components/gamecontroller';
import AssetsLoader from './components/kernel/assets-loader-2d';
import Config from '../data/config';

// This class instantiates and ties all of the components together, starts the loading process and renders the main loop
export default class Main {
  constructor(container) {
    const WebpackConfig = require('../data/settingswebpack');
    this.config = new WebpackConfig();
    this.container = container;

     // Initial size update set to canvas container
     this.updateSize();
     // Listeners
     document.addEventListener('DOMContentLoaded', () => this.updateSize(), false);
     window.addEventListener('resize', () => this.updateSize(), false);

    const engine = new Engine('appInnerContainer', GameObject, CanvasDriver, [Input]);
    engine.pauseOnBlur = false;
    engine.pauseOnHide = false;
    engine.start();
    engine.stage.setSize(960, 960);
    engine.stage.scaleMode = StageScaleMode.LETTERBOX;
    engine.viewport.isTransparent = true;

    const load = (game) => {
      const blackAssetsLoader = new AssetsLoader();

      blackAssetsLoader.on(blackAssetsLoader.loaded, (msg) => {
        setTimeout(()=>{
          game.onLoad();
        }, 500);
      });

      Black.stage.add(blackAssetsLoader);
    }

    this.game = new GameController(load);

    // Start render which does not wait for model fully loaded
    this.render();
  }

  updateSize() {
    if (this.config.ifUseMraid()) {
      try {
        let screenSize = mraid.getScreenSize();

        if (Number.isInteger(screenSize.width) && Number.isInteger(screenSize.height)) {
          Config.screen.width = screenSize.width;
          Config.screen.height = screenSize.height;
        }
        else {
          Config.screen.width = this.container.offsetWidth;
          Config.screen.height = this.container.offsetHeight;
        }
      }
      catch (error) {
        Config.screen.width = this.container.offsetWidth;
        Config.screen.height = this.container.offsetHeight;
      }
    }
    else {
      Config.screen.width = this.container.offsetWidth;
      Config.screen.height = this.container.offsetHeight;
    }

    window.dispatchEvent(new Event('force-resize'));
  }

  render() {
    this.game.update(Black.time.delta);

    // RAF
    requestAnimationFrame(this.render.bind(this)); // Bind the main class instead of window object
  }
}
