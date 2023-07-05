import ConfigurableParams from '../../../../data/configurable_params';
import { Black, Tween, Ease, Sprite, DisplayObject, TextField } from '../../../../utils/black-engine.module';
import Helpers from '../../../helpers/helpers';
import SoundsController from '../../kernel/soundscontroller';
import Booklet from './booklet';
import Character from './character';
import Outfit from './outfit';
import Drag from './drag-controller';


export default class Scene extends DisplayObject {
  constructor(tutorial) {
    super();

    this.onOutfitsSelectedEvent = 'onOutfitsSelectedEvent';

    this._tutorial = tutorial;
    this._character = null;
    this._booklet = null;
    this._interactionType = ConfigurableParams.getData()['interaction_type']['value'];

    this._outfitsSelected = 0;
    this._outfitsToStore = ConfigurableParams.getData()['store_details']['outfits_to_store']['value'];
  }

  onAdded() {
    this._initCharacter();
    this._initBooklet();
    if (this._interactionType === "Drag") this._initDrag();
  }

  _initCharacter() {
    this._character = new Character();
    this.add(this._character);
  }

  _initBooklet() {
    this._booklet = new Booklet();
    this.add(this._booklet);

    if (this._interactionType === "Tap") {
      this._booklet.on(this._booklet.onOutfitTapEvent, (msg, id) => {
        this._character.wearOutfit(id);
        this._tutorial.hide();

        if (ConfigurableParams.getData()['audio']['sound_pop_enabled']['value'])
          SoundsController.playWithKey('pop');

        this._outfitsSelected++;
        if (this._outfitsSelected >= this._outfitsToStore) {
          setTimeout(() => {
            this.post(this.onOutfitsSelectedEvent);
          }, 800);
        }
      });
    }

    else if (this._interactionType === "Drag") {
      this._booklet.on(this._booklet.onOutfitTapEvent, (msg, id) => {
        this._tutorial.hide();

        let outfit = this._character._outfits.find((outfit) => outfit.mChildren[0].id === id);
        this._drag.drag(outfit.mChildren[0], id, () => {
          this._character.wearOutfit(id);
          if (ConfigurableParams.getData()['audio']['sound_pop_enabled']['value'])
            SoundsController.playWithKey('pop');

          this._character.animate();
        });



        this._outfitsSelected++;

        if (this._outfitsSelected >= this._outfitsToStore) {
          setTimeout(() => {
            this.post(this.onOutfitsSelectedEvent);
          }, 800);
        }
      });

    }
  }

  _initDrag() {
    this._drag = new Drag(this._character);
    this.add(this._drag);
  }

  onDown(x, y) {
    this._booklet.onDown(
      x - this._booklet.x,
      y - this._booklet.y,
    );
    this._drag.onDown(x, y);
  }

  onMove(x, y) {
    this._drag.onMove(x, y);
  }

  onUp() {
    this._drag.onUp(() => {
      this._outfitsSelected++;
    });
  }

  startHint() {
    this._booklet.startHint();
  }

  onResize(bb) {
    // default portrait
    this._character.x = Black.stage.centerX;
    this._character.y = Black.stage.centerY - bb.height * 0.18;

    this._booklet.x = Black.stage.centerX;
    this._booklet.y = Black.stage.centerY + bb.height * 0.25;

    this._booklet.scaleX = 1;
    this._booklet.scaleY = 1;
    this._character.scaleX = 1;
    this._character.scaleY = 1;

    // Ipad portrait version
    if (Helpers.LP(false, true) && bb.height / this._booklet.height < 2.3) {
      this._booklet.scaleX = 0.8;
      this._booklet.scaleY = 0.8;

      this._character.scaleX = 0.7;
      this._character.scaleY = 0.7;
    }
    // Landscape version
    else if (Helpers.LP(true, false)) {
      this._booklet.scaleX = 1;
      this._booklet.scaleY = 1;

      this._character.scaleX = 0.9;
      this._character.scaleY = 0.9;

      this._character.x = Black.stage.centerX - bb.width * 0.33;
      this._character.y = Black.stage.centerY + 60;

      this._booklet.x = Black.stage.centerX + bb.width * 0.1;
      this._booklet.y = Black.stage.centerY + 60;
    }


  }
}
