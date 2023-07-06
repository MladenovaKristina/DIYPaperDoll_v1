import { AssetManager, GameObject } from '../../../utils/black-engine.module';
import ConfigurableParams from '../../../data/configurable_params';

import lilita_one from '../../../data/fonts/lilita_one.js';

import hint_mickey from '../../../data/textures/hint_mickey.png';
import hint_simple from '../../../data/textures/hint_simple.png';
import hint_female from '../../../data/textures/hint_female.png';
import hint_female_arm from '../../../data/textures/hint_female_arm.png';

import btn_outline from '../../../data/textures/btn_outline.png';
import btn_color from '../../../data/textures/btn_color.png';
import btn_back from '../../../data/textures/btn_back.png';

import booklet_mid from '../../../data/textures/booklet/booklet_mid.png';
import booklet_page from '../../../data/textures/booklet/booklet_page.png';
import sparkle_big from '../../../data/textures/booklet/sparkle_big.png';
import sparkle_small from '../../../data/textures/booklet/sparkle_small.png';
import char1 from '../../../data/textures/characters/char1.png';
import char2 from '../../../data/textures/characters/char2.png';
import char3 from '../../../data/textures/characters/char3.png';
import char4 from '../../../data/textures/characters/char4.png';

export default class AssetsLoader2D extends GameObject {
  constructor() {
    super();

    this.loaded = 'loaded';
  }

  onAdded() {
    this._loadAssets();
  }

  _loadAssets() {
    const assets = new AssetManager();

    assets.enqueueImage('hint_mickey', hint_mickey);
    assets.enqueueImage('hint_simple', hint_simple);
    assets.enqueueImage('hint_female', hint_female);
    assets.enqueueImage('hint_female_arm', hint_female_arm);


    assets.enqueueImage('btn_outline', btn_outline);
    assets.enqueueImage('btn_color', btn_color);
    assets.enqueueImage('btn_back', btn_back);

    assets.enqueueImage('booklet_mid', booklet_mid);
    assets.enqueueImage('booklet_page', booklet_page);
    assets.enqueueImage('sparkle_big', sparkle_big);
    assets.enqueueImage('sparkle_small', sparkle_small);
    assets.enqueueImage('char1', char1);
    assets.enqueueImage('char2', char2);
    assets.enqueueImage('char3', char3);
    assets.enqueueImage('char4', char4);


    assets.enqueueImage('outfit_1', ConfigurableParams.getData()["outfit_1"]["item_file"]["value"]);
    assets.enqueueImage('outfit_2', ConfigurableParams.getData()["outfit_2"]["item_file"]["value"]);
    assets.enqueueImage('outfit_3', ConfigurableParams.getData()["outfit_3"]["item_file"]["value"]);
    assets.enqueueImage('outfit_4', ConfigurableParams.getData()["outfit_4"]["item_file"]["value"]);
    assets.enqueueImage('outfit_5', ConfigurableParams.getData()["outfit_5"]["item_file"]["value"]);
    assets.enqueueImage('outfit_6', ConfigurableParams.getData()["outfit_6"]["item_file"]["value"]);

    assets.enqueueImage('logo', ConfigurableParams.getData()["logo_for_google"]["change_logo"]["value"]);
    assets.enqueueImage('endscreen_logo', ConfigurableParams.getData()["endcard"]["logo"]["value"]);

    assets.enqueueFont('LilitaOne', lilita_one.url);

    assets.on('complete', () => this.post(this.loaded));
    assets.loadQueue();
  }
}
