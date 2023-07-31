import logo from './textures/logo.png';
import endscreen_logo from '../data/textures/endscreen_logo.png';

import outfit_1 from '../data/textures/outfits/outfit_1.png';
import outfit_2 from '../data/textures/outfits/outfit_2.png';
import outfit_3 from '../data/textures/outfits/outfit_3.png';
import outfit_4 from '../data/textures/outfits/outfit_4.png';
import outfit_5 from '../data/textures/outfits/outfit_5.png';
import outfit_6 from '../data/textures/outfits/outfit_6.png';

import sound_bg from '../data/audio/sound_bg.mp3';
import sound_final from '../data/audio/sound_final.mp3';
import sound_pop from '../data/audio/sound_pop.mp3';

export default class ConfigurableParams {

  static data = {
    "general": {
      "playable_name": {
        "label": "Playable name",
        "type": "string",
        "value": "DIY Paper Doll",
        "descrition": "Needed to generate a filename.",
        "assetName": null
      },
      "version": {
        "label": "Version of playable",
        "type": "float",
        "value": "1.0",
        "descrition": "Needed to generate a filename.",
        "assetName": null
      },
      "cbpn": {
        "label": "CB or PN version",
        "type": "select",
        "value": "PN",
        "options": ["CB", "PN"],
        "descrition": "CB (with auto redirect to the store in end of game) or \"Play Now\" (without auto redirect, in the end of the game, user will see \"end card\").",
        "assetName": null
      },
      "show_playnow": {
        "label": "Show \"PLAY NOW\" for all platforms",
        "type": "boolean",
        "value": false,
        "descrition": "If you want to show \"PLAY NOW\" button for all platforms, please set this switcher to enable.",
        "assetName": null
      },
      "message": {
        "label": "",
        "type": "message",
        "value": "In this version of the playable for PN, the \"PLAY NOW\" button visible only for mintegral. If you want to show button for all platforms, please set the switcher above to enable.",
        "descrition": "",
        "assetName": null
      }
    },
    "background": {
      "message": {
        "label": "",
        "type": "message",
        "value": "If you want solid color insted of gradient - just enter this color to both fields below.",
        "descrition": "",
        "assetName": null
      },
      "gradient_color_top": {
        "label": "Gradient background top color",
        "type": "color",
        "value": "#FFC6FD",
        "descrition": "Gradient background top color.",
        "assetName": null
      },
      "gradient_color_bottom": {
        "label": "Gradient background bottom color",
        "type": "color",
        "value": "#FFC6FD",
        "descrition": "Gradient background bottom color.",
        "assetName": null
      }
    },
    "interaction": {
      "interaction_type": {
        "label": "Interaction type",
        "type": "select",
        "value": "Drag",
        "options": ["Tap", "Drag"],
        "descrition": "Interaction type",
        "assetName": null
      }
    },
    "character": {
      "char_view": {
        "label": "Character view",
        "type": "select",
        "value": "Character 3",
        "options": ["Character 1", "Character 2", "Character 3", "Character 4"],
        "descrition": "Character view",
        "assetName": null
      }
    },
    "booklet": {
      "pages_color": {
        "label": "Color of pages",
        "type": "color",
        "value": "#CEB8FF",
        "descrition": "Color of pages.",
        "assetName": null
      },
      "middle_color": {
        "label": "Color of middle rectangle",
        "type": "color",
        "value": "#A088DC",
        "descrition": "Color of middle rectangle.",
        "assetName": null
      },
      "stars_color": {
        "label": "Color of stars",
        "type": "color",
        "value": "#A088DC",
        "descrition": "Color of stars.",
        "assetName": null
      },
      "clicked_item_color": {
        "label": "Color of outfit trace when selected",
        "type": "color",
        "value": "#A088DC",
        "descrition": "Color of outfit trace when selected.",
        "assetName": null
      },
      "clicked_item_alpha": {
        "label": "Alpha of outfit trace when selected",
        "type": "number",
        "value": "0.15",
        "descrition": "Alpha of outfit trace when selected.",
        "assetName": null
      },
      "left_page_text": {
        "label": "Left page text",
        "type": "string",
        "value": "Outerwear",
        "descrition": "Left page text.",
        "assetName": null
      },
      "right_page_text": {
        "label": "Right page text",
        "type": "string",
        "value": "Outfit",
        "descrition": "Right page text.",
        "assetName": null
      },
      "text_color": {
        "label": "Text color",
        "type": "color",
        "value": "#ffffff",
        "descrition": "Text color.",
        "assetName": null
      }
    },
    "outfit_1": {
      "message": {
        "label": "",
        "type": "message",
        "value": "Base item here is jacket.\nItem index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "descrition": "",
        "assetName": null
      },
      "enabled": {
        "label": "Item enabled",
        "type": "boolean",
        "value": true,
        "descrition": "Item enabled.",
        "assetName": null
      },
      "item_file": {
        "label": "Upload new outfit item",
        "type": "img",
        "value": outfit_1,
        "descrition": "Please upload the image. The image resolution must be no more than 2048x2048 pixels. And also remember about the size. Please make sure that your html file is no larger than 2 MB.",
        "assetName": "outfit_1"
      },
      "position_booklet": {
        "label": "Relative position on the booklet",
        "type": "vector2",
        "x": "-240",
        "y": "-30",
        "descrition": "Relative position on the booklet.",
        "assetName": null
      },
      "scale_booklet": {
        "label": "Scale of item on the booklet",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the booklet.",
        "assetName": null
      },
      "position_character": {
        "label": "Relative position on the character",
        "type": "vector2",
        "x": "0",
        "y": "-90",
        "descrition": "Relative position on the character.",
        "assetName": null
      },
      "scale_character": {
        "label": "Scale of item on the character",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the character.",
        "assetName": null
      },
      "index": {
        "label": "Item index",
        "type": "number",
        "value": "3",
        "descrition": "Index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "assetName": null
      }
    },
    "outfit_2": {
      "message": {
        "label": "",
        "type": "message",
        "value": "Base item here is bag.\nItem index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "descrition": "",
        "assetName": null
      },
      "enabled": {
        "label": "Item enabled",
        "type": "boolean",
        "value": true,
        "descrition": "Item enabled.",
        "assetName": null
      },
      "item_file": {
        "label": "Upload new outfit item",
        "type": "img",
        "value": outfit_2,
        "descrition": "Please upload the image. The image resolution must be no more than 2048x2048 pixels. And also remember about the size. Please make sure that your html file is no larger than 2 MB.",
        "assetName": "outfit_2"
      },
      "position_booklet": {
        "label": "Relative position on the booklet",
        "type": "vector2",
        "x": "-350",
        "y": "230",
        "descrition": "Relative position on the booklet.",
        "assetName": null
      },
      "scale_booklet": {
        "label": "Scale of item on the booklet",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the booklet.",
        "assetName": null
      },
      "position_character": {
        "label": "Relative position on the character",
        "type": "vector2",
        "x": "-135",
        "y": "40",
        "descrition": "Relative position on the character.",
        "assetName": null
      },
      "scale_character": {
        "label": "Scale of item on the character",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the character.",
        "assetName": null
      },
      "index": {
        "label": "Item index",
        "type": "number",
        "value": "4",
        "descrition": "Index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "assetName": null
      }
    },
    "outfit_3": {
      "message": {
        "label": "",
        "type": "message",
        "value": "Base item here is shoes.\nItem index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "descrition": "",
        "assetName": null
      },
      "enabled": {
        "label": "Item enabled",
        "type": "boolean",
        "value": true,
        "descrition": "Item enabled.",
        "assetName": null
      },
      "item_file": {
        "label": "Upload new outfit item",
        "type": "img",
        "value": outfit_3,
        "descrition": "Please upload the image. The image resolution must be no more than 2048x2048 pixels. And also remember about the size. Please make sure that your html file is no larger than 2 MB.",
        "assetName": "outfit_3"
      },
      "position_booklet": {
        "label": "Relative position on the booklet",
        "type": "vector2",
        "x": "-130",
        "y": "220",
        "descrition": "Relative position on the booklet.",
        "assetName": null
      },
      "scale_booklet": {
        "label": "Scale of item on the booklet",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the booklet.",
        "assetName": null
      },
      "position_character": {
        "label": "Relative position on the character",
        "type": "vector2",
        "x": "0",
        "y": "320",
        "descrition": "Relative position on the character.",
        "assetName": null
      },
      "scale_character": {
        "label": "Scale of item on the character",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the character.",
        "assetName": null
      },
      "index": {
        "label": "Item index",
        "type": "number",
        "value": "5",
        "descrition": "Index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "assetName": null
      }
    },
    "outfit_4": {
      "message": {
        "label": "",
        "type": "message",
        "value": "Base item here is crop.\nItem index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "descrition": "",
        "assetName": null
      },
      "enabled": {
        "label": "Item enabled",
        "type": "boolean",
        "value": true,
        "descrition": "Item enabled.",
        "assetName": null
      },
      "item_file": {
        "label": "Upload new outfit item",
        "type": "img",
        "value": outfit_4,
        "descrition": "Please upload the image. The image resolution must be no more than 2048x2048 pixels. And also remember about the size. Please make sure that your html file is no larger than 2 MB.",
        "assetName": "outfit_4"
      },
      "position_booklet": {
        "label": "Relative position on the booklet",
        "type": "vector2",
        "x": "160",
        "y": "-160",
        "descrition": "Relative position on the booklet.",
        "assetName": null
      },
      "scale_booklet": {
        "label": "Scale of item on the booklet",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the booklet.",
        "assetName": null
      },
      "position_character": {
        "label": "Relative position on the character",
        "type": "vector2",
        "x": "0",
        "y": "-180",
        "descrition": "Relative position on the character.",
        "assetName": null
      },
      "scale_character": {
        "label": "Scale of item on the character",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the character.",
        "assetName": null
      },
      "index": {
        "label": "Item index",
        "type": "number",
        "value": "0",
        "descrition": "Index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "assetName": null
      }
    },
    "outfit_5": {
      "message": {
        "label": "",
        "type": "message",
        "value": "Base item here is T-shirt.\nItem index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "descrition": "",
        "assetName": null
      },
      "enabled": {
        "label": "Item enabled",
        "type": "boolean",
        "value": true,
        "descrition": "Item enabled.",
        "assetName": null
      },
      "item_file": {
        "label": "Upload new outfit item",
        "type": "img",
        "value": outfit_5,
        "descrition": "Please upload the image. The image resolution must be no more than 2048x2048 pixels. And also remember about the size. Please make sure that your html file is no larger than 2 MB.",
        "assetName": "outfit_5"
      },
      "position_booklet": {
        "label": "Relative position on the booklet",
        "type": "vector2",
        "x": "300",
        "y": "10",
        "descrition": "Relative position on the booklet.",
        "assetName": null
      },
      "scale_booklet": {
        "label": "Scale of item on the booklet",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the booklet.",
        "assetName": null
      },
      "position_character": {
        "label": "Relative position on the character",
        "type": "vector2",
        "x": "0",
        "y": "-130",
        "descrition": "Relative position on the character.",
        "assetName": null
      },
      "scale_character": {
        "label": "Scale of item on the character",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the character.",
        "assetName": null
      },
      "index": {
        "label": "Item index",
        "type": "number",
        "value": "1",
        "descrition": "Index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "assetName": null
      }
    },
    "outfit_6": {
      "message": {
        "label": "",
        "type": "message",
        "value": "Base item here is skirt.\nItem index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "descrition": "",
        "assetName": null
      },
      "enabled": {
        "label": "Item enabled",
        "type": "boolean",
        "value": true,
        "descrition": "Item enabled.",
        "assetName": null
      },
      "item_file": {
        "label": "Upload new outfit item",
        "type": "img",
        "value": outfit_6,
        "descrition": "Please upload the image. The image resolution must be no more than 2048x2048 pixels. And also remember about the size. Please make sure that your html file is no larger than 2 MB.",
        "assetName": "outfit_6"
      },
      "position_booklet": {
        "label": "Relative position on the booklet",
        "type": "vector2",
        "x": "140",
        "y": "210",
        "descrition": "Relative position on the booklet.",
        "assetName": null
      },
      "scale_booklet": {
        "label": "Scale of item on the booklet",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the booklet.",
        "assetName": null
      },
      "position_character": {
        "label": "Relative position on the character",
        "type": "vector2",
        "x": "0",
        "y": "-45",
        "descrition": "Relative position on the character.",
        "assetName": null
      },
      "scale_character": {
        "label": "Scale of item on the character",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of item on the character.",
        "assetName": null
      },
      "index": {
        "label": "Item index",
        "type": "number",
        "value": "2",
        "descrition": "Index field is for the order which item is over on the character. For example, coat must be over shirt, so coat has higher index. This field lets you add outfit items in right order no matter of their type.",
        "assetName": null
      }
    },
    "top_text": {
      "top_title_enabled": {
        "label": "Show top title",
        "type": "boolean",
        "value": true,
        "descrition": "Show top title.",
        "assetName": null
      },
      "top_title_text": {
        "label": "Top title text",
        "type": "string",
        "value": "DRESS HER UP FOR THE FIRST DATE",
        "descrition": "Top title text.",
        "assetName": null
      },
      "top_title_text_color": {
        "label": "Top title text color",
        "type": "color",
        "value": "#000000",
        "descrition": "Top title text color.",
        "assetName": null
      },
      "top_title_stroke_color": {
        "label": "Top title text stroke color",
        "type": "color",
        "value": "#000000",
        "descrition": "Top title text stroke color.",
        "assetName": null
      },
      "top_title_stroke_thickness": {
        "label": "Top title text stroke thickness",
        "type": "number",
        "value": "0",
        "min": "0",
        "max": "100",
        "descrition": "Top title text stroke thickness.",
        "assetName": null
      },
      "top_title_bg_color": {
        "label": "Top title background color",
        "type": "color",
        "value": "#ffffff",
        "descrition": "Top title background color.",
        "assetName": null
      },
      "top_title_bg_alpha": {
        "label": "Top title background alpha",
        "type": "number",
        "value": "1",
        "descrition": "Top title background alpha.",
        "assetName": null
      }
    },
    "tutorial": {
      "starting_hint_type": {
        "label": "Finger hint type",
        "type": "select",
        "value": "FEMALE ARM",
        "options": ["FEMALE", "MICKEY", "SIMPLE", "FEMALE ARM"],
        "descrition": "Select finger hint type.",
        "assetName": null
      },
      "tutorial_enabled": {
        "label": "Tutorial text enabled",
        "type": "boolean",
        "value": true,
        "descrition": "Tutorial text enabled.",
        "assetName": null
      },
      "tutorial_pulse": {
        "label": "Tutorial text pulses",
        "type": "boolean",
        "value": true,
        "descrition": "Tutorial text pulses.",
        "assetName": null
      },
      "tutorial_text": {
        "label": "Tutorial text",
        "type": "string",
        "value": "TAP TO CHOOSE",
        "descrition": "Tutorial text.",
        "assetName": null
      },
      "tutorial_color": {
        "label": "Tutorial text color",
        "type": "color",
        "value": "#ffffff",
        "descrition": "Tutorial text color.",
        "assetName": null
      },
      "font_size": {
        "label": "Tutorial text font size",
        "type": "number",
        "value": "90",
        "descrition": "Tutorial text font size.",
        "assetName": null
      },
      "stroke_color": {
        "label": "Tutorial text stroke color",
        "type": "color",
        "value": "#000000",
        "descrition": "Tutorial text stroke color.",
        "assetName": null
      },
      "stroke_thickness": {
        "label": "Tutorial text stroke thickness",
        "type": "number",
        "value": "8",
        "min": "0",
        "max": "100",
        "descrition": "Tutorial text stroke thickness.",
        "assetName": null
      }
    },
    "play_button": {
      "btn_color_main": {
        "label": "Main color of the button",
        "type": "color",
        "value": "#30EB58",
        "descrition": "Main color of the button.",
        "assetName": null
      },
      "btn_color_dark": {
        "label": "Shade color of the button",
        "type": "color",
        "value": "#1EA842",
        "descrition": "Shade color of the button.",
        "assetName": null
      },
      "play_now_text": {
        "label": "Play Now button text",
        "type": "string",
        "value": "PLAY NOW",
        "descrition": "Ingame Play Now button text.",
        "assetName": null
      }
    },
    "logo_for_google": {
      "change_logo": {
        "label": "Logo",
        "type": "img",
        "value": logo,
        "descrition": "Please upload the image. The image resolution must be no more than 2048x2048 pixels. And also remember about the size. Please make sure that your html file is no larger than 2 MB.",
        "assetName": "logo"
      }
    },
    "endcard": {
      "logo": {
        "label": "Logo",
        "type": "img",
        "value": endscreen_logo,
        "descrition": "Please upload the image. The image resolution must be no more than 2048x2048 pixels. And also remember about the size. Please make sure that your html file is no larger than 2 MB.",
        "assetName": "endscreen_logo"
      },
      "logo_scale": {
        "label": "Scale of the logo",
        "type": "float",
        "value": "1.0",
        "descrition": "Scale of the logo.",
        "assetName": null
      },
      "button_text": {
        "label": "Endscreen button text",
        "type": "string",
        "value": "PLAY NOW",
        "descrition": "Endscreen button text.",
        "assetName": null
      },
      "show_text": {
        "label": "Show text on endscreen",
        "type": "boolean",
        "value": false,
        "descrition": "Show text on endscreen.",
        "assetName": null
      },
      "text": {
        "label": "Endscreen text",
        "type": "string",
        "value": "WINNER!",
        "descrition": "Endscreen text",
        "assetName": null
      },
      "text_color": {
        "label": "Endscreen text color",
        "type": "color",
        "value": "#ffffff",
        "descrition": "Endscreen text color.",
        "assetName": null
      },
      "gradient_color_top": {
        "label": "Gradient background top color",
        "type": "color",
        "value": "#CEB8FF",
        "descrition": "Gradient background top color.",
        "assetName": null
      },
      "gradient_color_bottom": {
        "label": "Gradient background bottom color",
        "type": "color",
        "value": "#FFC6FD",
        "descrition": "Gradient background bottom color.",
        "assetName": null
      }
    },
    "audio": {
      "sound_bg": {
        "label": "Looped background music .mp3",
        "type": "sound",
        "value": sound_bg,
        "descrition": "Looped background music .mp3",
        "assetName": "sound_bg"
      },
      "sound_bg_enabled": {
        "label": "Background music enabled",
        "type": "boolean",
        "value": true,
        "descrition": "Background music enabled.",
        "assetName": null
      },
      "sound_final": {
        "label": "Sound on finish .mp3",
        "type": "sound",
        "value": sound_final,
        "descrition": "Sound on finish",
        "assetName": "sound_final"
      },
      "sound_final_enabled": {
        "label": "Sound on finish enabled",
        "type": "boolean",
        "value": true,
        "descrition": "Sound on finish enabled.",
        "assetName": null
      },
      "sound_pop": {
        "label": "Sound on wearing outfit .mp3",
        "type": "sound",
        "value": sound_pop,
        "descrition": "Sound on  wearing outfit",
        "assetName": "sound_pop"
      },
      "sound_pop_enabled": {
        "label": "Sound on wearing outfit enabled",
        "type": "boolean",
        "value": true,
        "descrition": "Sound on wearing outfit enabled.",
        "assetName": null
      }
    },
    "store_details": {
      "outfits_to_store": {
        "label": "Go to store after x outfits",
        "type": "number",
        "value": "6",
        "min": "0",
        "max": "6",
        "descrition": "Please select the number of outfits to wear after which the user will go to the store.",
        "assetName": null
      },
      "go_to_market_after_x_click": {
        "label": "Go to store after x clicks",
        "type": "number",
        "value": "0",
        "min": "0",
        "max": "15",
        "descrition": "Please select the number of clicks after which the user will go to the store.",
        "assetName": null
      },
      "go_to_market_after_x_time": {
        "label": "Go to store after x time",
        "type": "number",
        "value": "0",
        "min": "0",
        "max": "60",
        "descrition": "Please select the time after which the user will go to the store.",
        "assetName": null
      }
    },
    "store_link": {
      "android": {
        "label": "Android Link",
        "type": "link",
        "value": "https://play.google.com/store/apps/details?id=com.cclaw.diypaperdoll",
        "descrition": "Please insert Google Play Store link. This link used only in Unity, AdColony, AppLovin, Chartboost.",
        "assetName": null
      },
      "ios": {
        "label": "iOS Link",
        "type": "link",
        "value": "https://apps.apple.com/app/id1640988416",
        "descrition": "Please insert App Store link. This link used only in Unity, AdColony, AppLovin, Chartboost.",
        "assetName": null
      }
    }
  }

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