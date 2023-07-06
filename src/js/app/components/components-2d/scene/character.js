import ConfigurableParams from '../../../../data/configurable_params';
import { GameObject, Tween, Ease, Sprite, DisplayObject, TextField } from '../../../../utils/black-engine.module';
import Outfit from './outfit';

export default class Character extends DisplayObject {
  constructor() {
    super();

    this._outfits = [];

    this._sprite = null;
    if (ConfigurableParams.getData()['character']['char_view']['value'] === 'Character 1') {
      this._sprite = 'char1';
    }
    else if (ConfigurableParams.getData()['character']['char_view']['value'] === 'Character 2') {
      this._sprite = 'char2';
    }
    else if (ConfigurableParams.getData()['character']['char_view']['value'] === 'Character 3') {
      this._sprite = 'char3';
    }
    else if (ConfigurableParams.getData()['character']['char_view']['value'] === 'Character 4') {
      this._sprite = 'char4';
    }
  }

  onAdded() {
    this._initView();
    this._initOutfits();

    this._topLayerContainer = new GameObject();
    this.add(this._topLayerContainer);
  }

  _initView() {
    this._view = new Sprite(this._sprite);
    this._view.alignAnchor(0.5, 0.5);
    this.scaleX = 0.9;
    this.scaleY = 0.9;
    this.add(this._view);
  }

  _initOutfits() {
    const outfitsData = [
      {
        index: ConfigurableParams.getData()['outfit_1']['index']['value'],
        sprite: 'outfit_1',
        id: 0,
        x: ConfigurableParams.getData()['outfit_1']['position_character']['x'],
        y: ConfigurableParams.getData()['outfit_1']['position_character']['y'],
        scale: ConfigurableParams.getData()['outfit_1']['scale_character']['value']
      },
      {
        index: ConfigurableParams.getData()['outfit_2']['index']['value'],
        sprite: 'outfit_2',
        id: 1,
        x: ConfigurableParams.getData()['outfit_2']['position_character']['x'],
        y: ConfigurableParams.getData()['outfit_2']['position_character']['y'],
        scale: ConfigurableParams.getData()['outfit_2']['scale_character']['value']
      },
      {
        index: ConfigurableParams.getData()['outfit_3']['index']['value'],
        sprite: 'outfit_3',
        id: 2,
        x: ConfigurableParams.getData()['outfit_3']['position_character']['x'],
        y: ConfigurableParams.getData()['outfit_3']['position_character']['y'],
        scale: ConfigurableParams.getData()['outfit_3']['scale_character']['value']
      },
      {
        index: ConfigurableParams.getData()['outfit_4']['index']['value'],
        sprite: 'outfit_4',
        id: 3,
        x: ConfigurableParams.getData()['outfit_4']['position_character']['x'],
        y: ConfigurableParams.getData()['outfit_4']['position_character']['y'],
        scale: ConfigurableParams.getData()['outfit_4']['scale_character']['value']
      },
      {
        index: ConfigurableParams.getData()['outfit_5']['index']['value'],
        sprite: 'outfit_5',
        id: 4,
        x: ConfigurableParams.getData()['outfit_5']['position_character']['x'],
        y: ConfigurableParams.getData()['outfit_5']['position_character']['y'],
        scale: ConfigurableParams.getData()['outfit_5']['scale_character']['value']
      },
      {
        index: ConfigurableParams.getData()['outfit_6']['index']['value'],
        sprite: 'outfit_6',
        id: 5,
        x: ConfigurableParams.getData()['outfit_6']['position_character']['x'],
        y: ConfigurableParams.getData()['outfit_6']['position_character']['y'],
        scale: ConfigurableParams.getData()['outfit_6']['scale_character']['value']
      }
    ];

    outfitsData.sort((a, b) => a.index - b.index).forEach((outfitData) => {
      const outfitCOntainer = new GameObject();
      this.add(outfitCOntainer);

      const outfit = new Outfit(outfitData);
      outfit.visible = false;
      outfitCOntainer.add(outfit);

      this._outfits.push(outfitCOntainer);
    });
  }

  wearOutfit(id) {
    const outfitToWearContainer = this._outfits.find((outfit) => outfit.mChildren[0].id === id);
    const outfitToWear = outfitToWearContainer.mChildren[0];
    this._topLayerContainer.add(outfitToWear);

    outfitToWear.show(() => {
      outfitToWearContainer.add(outfitToWear);
    });
  }
}
