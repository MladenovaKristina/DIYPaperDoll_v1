// import logo from './textures/logo.png';
// import endscreen_logo from '../data/textures/endscreen_logo.png';
// 
// import outfit_1 from '../data/textures/outfits/outfit_1.png';
// import outfit_2 from '../data/textures/outfits/outfit_2.png';
// import outfit_3 from '../data/textures/outfits/outfit_3.png';
// import outfit_4 from '../data/textures/outfits/outfit_4.png';
// import outfit_5 from '../data/textures/outfits/outfit_5.png';
// import outfit_6 from '../data/textures/outfits/outfit_6.png';
// 
// import sound_bg from '../data/audio/sound_bg.mp3';
// import sound_final from '../data/audio/sound_final.mp3';
// import sound_pop from '../data/audio/sound_pop.mp3';

export default class ConfigurableParams {

  static data = "add_json";

  static getData() {
    return JSON.parse(JSON.stringify(this.data));
  }

  static isCB() {
    return JSON.parse(JSON.stringify(this.data))["general"]["cbpn"]["value"] === "CB" ? true : false;
  }

  static isPN() {
    return JSON.parse(JSON.stringify(this.data))["general"]["cbpn"]["value"] === "PN" ? true : false;
  }

  static isNeedShowPN() {
    return this.isPN() && JSON.parse(JSON.stringify(this.data))["general"]["show_playnow"]["value"] ? true : false;
  }

  static isXMoney() {
    return Number(JSON.parse(JSON.stringify(this.data))["store_details"]["go_to_market_after_x_money"]["value"]) > 0 ? true : false;
  }

  static isXClick() {
    return Number(JSON.parse(JSON.stringify(this.data))["store_details"]["go_to_market_after_x_click"]["value"]) > 0 ? true : false;
  }

  static isXTime() {
    return Number(JSON.parse(JSON.stringify(this.data))["store_details"]["go_to_market_after_x_time"]["value"]) > 0 ? true : false;
  }
}