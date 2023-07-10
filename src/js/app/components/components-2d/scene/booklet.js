import ConfigurableParams from '../../../../data/configurable_params';
import { GameObject, Sprite, DisplayObject, TextField, Timer } from '../../../../utils/black-engine.module';
import Outfit from './outfit';
import { TutorialHand } from './tutorial-hand';

export default class Booklet extends DisplayObject {
  constructor() {
    super();

    this.onOutfitTapEvent = 'onOutfitTapEvent';

    this._pagesColor = ConfigurableParams.getData()['booklet']['pages_color']['value'];
    this._middleColor = ConfigurableParams.getData()['booklet']['middle_color']['value'];
    this._starsColor = ConfigurableParams.getData()['booklet']['stars_color']['value'];
    this._textLeft = ConfigurableParams.getData()['booklet']['left_page_text']['value'];
    this._textRight = ConfigurableParams.getData()['booklet']['right_page_text']['value'];
    this._textColor = Number(ConfigurableParams.getData()["booklet"]["text_color"]["value"].replace('#', '0x'));
    this._interactionType = ConfigurableParams.getData()['interaction']['interaction_type']['value'];
    console.log(this._interactionType, "interact enabled");

    this._leftPage = null;
    this._rightPage = null;
    this._middle = null;
    this._textfieldLeft = null;
    this._textfieldRight = null;
    this._outfits = [];
  }

  onAdded() {
    this._bgContainer = new GameObject();
    this.add(this._bgContainer);
    this._bgContainer.scaleX = 0.52;
    this._bgContainer.scaleY = 0.52;

    this._initBg();
    this._initTexts();
    this._initStars();
    this._initOutfits();
    this._initHint();
  }

  _initBg() {
    this._middle = new Sprite('booklet_mid');
    this._middle.color = this._middleColor;
    this._middle.alignAnchor(0.5, 0.5);
    this._bgContainer.add(this._middle);

    this._leftPage = new Sprite('booklet_page');
    this._leftPage.color = this._pagesColor;
    this._leftPage.alignAnchor(0.5, 0.5);
    this._leftPage.x = -this._leftPage.width * 0.5 - 26;
    this._bgContainer.add(this._leftPage);

    this._rightPage = new Sprite('booklet_page');
    this._rightPage.color = this._pagesColor;
    this._rightPage.alignAnchor(0.5, 0.5);
    this._rightPage.x = this._rightPage.width * 0.5 + 26;
    this._bgContainer.add(this._rightPage);
  }

  _initTexts() {
    this._textfieldLeft = new TextField(
      this._textLeft,
      'LilitaOne',
      this._textColor,
      110
    );
    this._textfieldLeft.alignAnchor(0.5, 0.5);
    this._textfieldLeft.x = this._leftPage.x;
    this._textfieldLeft.y = -500;
    this._bgContainer.add(this._textfieldLeft);

    this._textfieldRight = new TextField(
      this._textRight,
      'LilitaOne',
      this._textColor,
      110
    );
    this._textfieldRight.alignAnchor(0.5, 0.5);
    this._textfieldRight.x = this._rightPage.x;
    this._textfieldRight.y = -500;
    this._bgContainer.add(this._textfieldRight);

    this._resizeText(this._textfieldLeft);
  }

  _resizeText(text) {
    text.scaleX = 1;
    text.scaleY = 1;

    const width = text.width / this._leftPage.width;
    if (width > 0.85) {
      text.scaleX = 1 / width * 0.9;
      text.scaleY = 1 / width * 0.9;
    }
  }

  _initStars() {
    const starsData = [
      { x: -800, y: -400, sprite: 'sparkle_small' },
      { x: 740, y: -330, sprite: 'sparkle_small' },
      { x: 740, y: 460, sprite: 'sparkle_small' },
      { x: -740, y: -280, sprite: 'sparkle_big' },
      { x: -150, y: -200, sprite: 'sparkle_big' },
      { x: 200, y: 0, sprite: 'sparkle_big' },
    ];

    starsData.forEach((starData) => {
      const star = new Sprite(starData.sprite);
      star.x = starData.x;
      star.y = starData.y;
      star.scaleX = 0.7;
      star.scaleY = 0.7;
      star.color = this._starsColor;
      star.alignAnchor(0.5, 0.5);
      this._bgContainer.add(star);
    });
  }

  _initOutfits() {
    const outfitsData = [
      {
        enabled: ConfigurableParams.getData()['outfit_1']['enabled']['value'],
        sprite: 'outfit_1',
        id: 0,
        x: ConfigurableParams.getData()['outfit_1']['position_booklet']['x'],
        y: ConfigurableParams.getData()['outfit_1']['position_booklet']['y'],
        scale: ConfigurableParams.getData()['outfit_1']['scale_booklet']['value']
      },
      {
        enabled: ConfigurableParams.getData()['outfit_2']['enabled']['value'],
        sprite: 'outfit_2',
        id: 1,
        x: ConfigurableParams.getData()['outfit_2']['position_booklet']['x'],
        y: ConfigurableParams.getData()['outfit_2']['position_booklet']['y'],
        scale: ConfigurableParams.getData()['outfit_2']['scale_booklet']['value']
      },
      {
        enabled: ConfigurableParams.getData()['outfit_3']['enabled']['value'],
        sprite: 'outfit_3',
        id: 2,
        x: ConfigurableParams.getData()['outfit_3']['position_booklet']['x'],
        y: ConfigurableParams.getData()['outfit_3']['position_booklet']['y'],
        scale: ConfigurableParams.getData()['outfit_3']['scale_booklet']['value']
      },
      {
        enabled: ConfigurableParams.getData()['outfit_4']['enabled']['value'],
        sprite: 'outfit_4',
        id: 3,
        x: ConfigurableParams.getData()['outfit_4']['position_booklet']['x'],
        y: ConfigurableParams.getData()['outfit_4']['position_booklet']['y'],
        scale: ConfigurableParams.getData()['outfit_4']['scale_booklet']['value']
      },
      {
        enabled: ConfigurableParams.getData()['outfit_5']['enabled']['value'],
        sprite: 'outfit_5',
        id: 4,
        x: ConfigurableParams.getData()['outfit_5']['position_booklet']['x'],
        y: ConfigurableParams.getData()['outfit_5']['position_booklet']['y'],
        scale: ConfigurableParams.getData()['outfit_5']['scale_booklet']['value']
      },
      {
        enabled: ConfigurableParams.getData()['outfit_6']['enabled']['value'],
        sprite: 'outfit_6',
        id: 5,
        x: ConfigurableParams.getData()['outfit_6']['position_booklet']['x'],
        y: ConfigurableParams.getData()['outfit_6']['position_booklet']['y'],
        scale: ConfigurableParams.getData()['outfit_6']['scale_booklet']['value']
      }
    ];

    outfitsData.forEach((outfitData) => {
      if (outfitData.enabled) {
        const outfit = new Outfit(outfitData);
        this.add(outfit);

        this._outfits.push(outfit);
      }
    });
  }

  _initHint() {
    const hint = this._hint = new TutorialHand();
    this.add(hint);
  }

  startHint() {
    this._hintTimer = new Timer(1.2, Infinity);
    this.add(this._hintTimer);

    const getCounter = function () {
      let value = 0;
      return function () { return value++; }
    }
    const count = getCounter();

    this._hintTimer.on('tick', msg => {
      this._makeStep(count);
    });

    this._hint.visible = true;
    this._makeStep(count);
  }

  // Original _makeStep
  // _makeStep(count) {
  //   const index = count() % this._outfits.length;
  //   this._hint.x = this._outfits[index].x;
  //   this._hint.y = this._outfits[index].y - 20;
  //   this._hint.tap();
  //   this._outfits[index].pulseHint();
  // }

  // Kristina's _makeStep, only hovers active outfit
  _makeStep(count) {
    const activeOutfits = this._outfits.filter(outfit => outfit.active); // Filter active outfits

    if (activeOutfits.length === 0) {
      // No active outfits, stop the hint
      this._stopHint();
      return;
    }
    const index = count() % activeOutfits.length;
    this._hint.x = activeOutfits[index].x;
    this._hint.y = activeOutfits[index].y - 20;
    this._hint.tap();
    activeOutfits[index].pulseHint();
  }



  _stopHint() {
    this._hint.visible = false;
    this._hintTimer && this._hintTimer.stop();
  }

  onDown(x, y) {
    x = x / this.scaleX;
    y = y / this.scaleY;
    for (let i = 0; i < this._outfits.length; i++) {
      const outfit = this._outfits[i];

      const isDown = outfit.isDown(x, y);
      if (isDown) {

        outfit.hide();
        this.post(this.onOutfitTapEvent, outfit.id);

        this._stopHint();
      }
    }
  }

  showOutfit(id) {
    this._outfits[id].showOutfit();
  }
}
