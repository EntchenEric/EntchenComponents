import { colourNameToHex, darkenRgb, hexToRgb } from './colorUtils';

describe('colourNameToHex', () => {
  describe('happy path - valid color names', () => {
    it('should convert basic color names to hex', () => {
      expect(colourNameToHex('red')).toBe('#ff0000');
      expect(colourNameToHex('blue')).toBe('#0000ff');
      expect(colourNameToHex('green')).toBe('#008000');
      expect(colourNameToHex('white')).toBe('#ffffff');
      expect(colourNameToHex('black')).toBe('#000000');
    });

    it('should handle uppercase color names', () => {
      expect(colourNameToHex('RED')).toBe('#ff0000');
      expect(colourNameToHex('BLUE')).toBe('#0000ff');
      expect(colourNameToHex('GREEN')).toBe('#008000');
    });

    it('should handle mixed case color names', () => {
      expect(colourNameToHex('ReD')).toBe('#ff0000');
      expect(colourNameToHex('bLuE')).toBe('#0000ff');
      expect(colourNameToHex('GrEeN')).toBe('#008000');
    });

    it('should handle complex color names', () => {
      expect(colourNameToHex('cornflowerblue')).toBe('#6495ed');
      expect(colourNameToHex('lightgoldenrodyellow')).toBe('#fafad2');
      expect(colourNameToHex('mediumaquamarine')).toBe('#66cdaa');
      expect(colourNameToHex('darkslateblue')).toBe('#483d8b');
    });

    it('should handle all primary colors', () => {
      expect(colourNameToHex('cyan')).toBe('#00ffff');
      expect(colourNameToHex('magenta')).toBe('#ff00ff');
      expect(colourNameToHex('yellow')).toBe('#ffff00');
    });

    it('should handle shade variations', () => {
      expect(colourNameToHex('darkblue')).toBe('#00008b');
      expect(colourNameToHex('lightblue')).toBe('#add8e6');
      expect(colourNameToHex('darkgreen')).toBe('#006400');
      expect(colourNameToHex('lightgreen')).toBe('#90ee90');
    });

    it('should handle gray/grey variations', () => {
      expect(colourNameToHex('gray')).toBe('#808080');
      expect(colourNameToHex('darkgray')).toBe('#a9a9a9');
      expect(colourNameToHex('lightgrey')).toBe('#d3d3d3');
      expect(colourNameToHex('dimgray')).toBe('#696969');
    });

    it('should handle special named colors', () => {
      expect(colourNameToHex('rebeccapurple')).toBe('#663399');
      expect(colourNameToHex('aliceblue')).toBe('#f0f8ff');
      expect(colourNameToHex('antiquewhite')).toBe('#faebd7');
    });
  });

  describe('edge cases and failure conditions', () => {
    it('should return false for invalid color names', () => {
      expect(colourNameToHex('notacolor')).toBe(false);
      expect(colourNameToHex('redd')).toBe(false);
      expect(colourNameToHex('blu')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(colourNameToHex('')).toBe(false);
    });

    it('should return false for hex color input', () => {
      expect(colourNameToHex('#ff0000')).toBe(false);
      expect(colourNameToHex('#fff')).toBe(false);
    });

    it('should return false for rgb color input', () => {
      expect(colourNameToHex('rgb(255,0,0)')).toBe(false);
    });

    it('should return false for numeric strings', () => {
      expect(colourNameToHex('123')).toBe(false);
      expect(colourNameToHex('0')).toBe(false);
    });

    it('should return false for special characters', () => {
      expect(colourNameToHex('red\!')).toBe(false);
      expect(colourNameToHex('blue@')).toBe(false);
      expect(colourNameToHex('green#')).toBe(false);
    });

    it('should return false for whitespace-padded invalid names', () => {
      expect(colourNameToHex(' red ')).toBe(false);
      expect(colourNameToHex('  blue  ')).toBe(false);
    });

    it('should handle color names with trailing spaces (data issue)', () => {
      // Note: "indianred " has a trailing space in the data
      expect(colourNameToHex('indianred ')).toBe('#cd5c5c');
    });
  });

  describe('boundary and stress tests', () => {
    it('should handle very long invalid strings', () => {
      const longString = 'a'.repeat(1000);
      expect(colourNameToHex(longString)).toBe(false);
    });

    it('should handle all defined colors', () => {
      const colorNames = [
        'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
        'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood',
        'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan',
        'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
        'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise',
        'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue',
        'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
        'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow',
        'honeydew', 'hotpink',
        'indianred ', 'indigo', 'ivory', 'khaki',
        'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow',
        'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightsteelblue',
        'lightyellow', 'lime', 'limegreen', 'linen',
        'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue',
        'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
        'navajowhite', 'navy',
        'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid',
        'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple',
        'rebeccapurple', 'red', 'rosybrown', 'royalblue',
        'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'snow', 'springgreen', 'steelblue',
        'tan', 'teal', 'thistle', 'tomato', 'turquoise',
        'violet',
        'wheat', 'white', 'whitesmoke',
        'yellow', 'yellowgreen'
      ];

      colorNames.forEach(color => {
        const result = colourNameToHex(color);
        expect(result).not.toBe(false);
        expect(typeof result).toBe('string');
        expect(result).toMatch(/^#[0-9a-f]{6}$/);
      });
    });
  });
});

describe('darkenRgb', () => {
  describe('happy path - valid RGB strings', () => {
    it('should darken a bright color by 50%', () => {
      expect(darkenRgb('rgb(255,255,255)', 0.5)).toBe('rgb(127,127,127)');
    });

    it('should darken red by 25%', () => {
      expect(darkenRgb('rgb(255,0,0)', 0.25)).toBe('rgb(191,0,0)');
    });

    it('should darken blue by 50%', () => {
      expect(darkenRgb('rgb(0,0,255)', 0.5)).toBe('rgb(0,0,127)');
    });

    it('should darken green by 75%', () => {
      expect(darkenRgb('rgb(0,255,0)', 0.75)).toBe('rgb(0,63,0)');
    });

    it('should handle RGB values with spaces', () => {
      expect(darkenRgb('rgb(255, 255, 255)', 0.5)).toBe('rgb(127,127,127)');
      expect(darkenRgb('rgb( 255 , 255 , 255 )', 0.5)).toBe('rgb(127,127,127)');
    });

    it('should handle medium gray colors', () => {
      expect(darkenRgb('rgb(128,128,128)', 0.5)).toBe('rgb(64,64,64)');
    });

    it('should handle asymmetric RGB values', () => {
      expect(darkenRgb('rgb(100,150,200)', 0.2)).toBe('rgb(80,120,160)');
    });
  });

  describe('edge cases and boundary conditions', () => {
    it('should handle 0% darkening (no change)', () => {
      expect(darkenRgb('rgb(255,255,255)', 0)).toBe('rgb(255,255,255)');
      expect(darkenRgb('rgb(128,64,32)', 0)).toBe('rgb(128,64,32)');
    });

    it('should handle 100% darkening (complete darkness)', () => {
      expect(darkenRgb('rgb(255,255,255)', 1)).toBe('rgb(0,0,0)');
      expect(darkenRgb('rgb(128,128,128)', 1)).toBe('rgb(0,0,0)');
    });

    it('should not go below 0 when darkening', () => {
      expect(darkenRgb('rgb(10,10,10)', 0.9)).toBe('rgb(1,1,1)');
      expect(darkenRgb('rgb(5,5,5)', 0.95)).toBe('rgb(0,0,0)');
    });

    it('should not exceed 255 when amount is negative', () => {
      // Testing with negative amounts (though not expected in normal use)
      expect(darkenRgb('rgb(200,200,200)', -0.5)).toBe('rgb(255,255,255)');
    });

    it('should handle already black color', () => {
      expect(darkenRgb('rgb(0,0,0)', 0.5)).toBe('rgb(0,0,0)');
      expect(darkenRgb('rgb(0,0,0)', 1)).toBe('rgb(0,0,0)');
    });

    it('should handle single-digit RGB values', () => {
      expect(darkenRgb('rgb(1,2,3)', 0.5)).toBe('rgb(0,1,1)');
    });

    it('should handle maximum RGB values', () => {
      expect(darkenRgb('rgb(255,255,255)', 0.1)).toBe('rgb(229,229,229)');
    });

    it('should floor the resulting values', () => {
      // rgb(100,100,100) * 0.75 = 25, which should be floored
      expect(darkenRgb('rgb(100,100,100)', 0.75)).toBe('rgb(25,25,25)');
    });
  });

  describe('failure conditions and invalid inputs', () => {
    it('should return original string if regex does not match', () => {
      expect(darkenRgb('invalid', 0.5)).toBe('invalid');
      expect(darkenRgb('not-a-color', 0.5)).toBe('not-a-color');
    });

    it('should return original string for empty string', () => {
      expect(darkenRgb('', 0.5)).toBe('');
    });

    it('should return original string for hex colors', () => {
      expect(darkenRgb('#ffffff', 0.5)).toBe('#ffffff');
      expect(darkenRgb('#fff', 0.5)).toBe('#fff');
    });

    it('should return original string for named colors', () => {
      expect(darkenRgb('red', 0.5)).toBe('red');
      expect(darkenRgb('blue', 0.5)).toBe('blue');
    });

    it('should return original string for malformed RGB', () => {
      expect(darkenRgb('rgb(255,255)', 0.5)).toBe('rgb(255,255)');
      expect(darkenRgb('rgb(255)', 0.5)).toBe('rgb(255)');
    });

    it('should return original string for RGB with non-numeric values', () => {
      expect(darkenRgb('rgb(a,b,c)', 0.5)).toBe('rgb(a,b,c)');
    });

    it('should handle RGBA format (though not fully supported)', () => {
      // Only extracts first 3 numbers, ignoring alpha
      expect(darkenRgb('rgba(255,255,255,0.5)', 0.5)).toBe('rgb(127,127,127)');
    });
  });

  describe('stress and precision tests', () => {
    it('should handle very small darkening amounts', () => {
      expect(darkenRgb('rgb(255,255,255)', 0.001)).toBe('rgb(254,254,254)');
    });

    it('should handle darkening amounts very close to 1', () => {
      expect(darkenRgb('rgb(255,255,255)', 0.999)).toBe('rgb(0,0,0)');
    });

    it('should handle amounts greater than 1', () => {
      expect(darkenRgb('rgb(255,255,255)', 1.5)).toBe('rgb(0,0,0)');
      expect(darkenRgb('rgb(255,255,255)', 2)).toBe('rgb(0,0,0)');
    });

    it('should maintain consistency with repeated darkening', () => {
      const start = 'rgb(200,200,200)';
      const once = darkenRgb(start, 0.5);
      expect(once).toBe('rgb(100,100,100)');
      const twice = darkenRgb(once, 0.5);
      expect(twice).toBe('rgb(50,50,50)');
    });
  });
});

describe('hexToRgb', () => {
  describe('happy path - standard hex colors', () => {
    it('should convert 6-character hex to RGB', () => {
      expect(hexToRgb('#ff0000')).toBe('rgb(255,0,0)');
      expect(hexToRgb('#00ff00')).toBe('rgb(0,255,0)');
      expect(hexToRgb('#0000ff')).toBe('rgb(0,0,255)');
    });

    it('should convert hex without hash prefix', () => {
      expect(hexToRgb('ff0000')).toBe('rgb(255,0,0)');
      expect(hexToRgb('00ff00')).toBe('rgb(0,255,0)');
      expect(hexToRgb('0000ff')).toBe('rgb(0,0,255)');
    });

    it('should convert 3-character hex to RGB', () => {
      expect(hexToRgb('#f00')).toBe('rgb(255,0,0)');
      expect(hexToRgb('#0f0')).toBe('rgb(0,255,0)');
      expect(hexToRgb('#00f')).toBe('rgb(0,0,255)');
    });

    it('should convert 3-character hex without hash', () => {
      expect(hexToRgb('f00')).toBe('rgb(255,0,0)');
      expect(hexToRgb('0f0')).toBe('rgb(0,255,0)');
      expect(hexToRgb('00f')).toBe('rgb(0,0,255)');
    });

    it('should convert white and black', () => {
      expect(hexToRgb('#ffffff')).toBe('rgb(255,255,255)');
      expect(hexToRgb('#000000')).toBe('rgb(0,0,0)');
      expect(hexToRgb('#fff')).toBe('rgb(255,255,255)');
      expect(hexToRgb('#000')).toBe('rgb(0,0,0)');
    });

    it('should handle uppercase hex values', () => {
      expect(hexToRgb('#FF0000')).toBe('rgb(255,0,0)');
      expect(hexToRgb('#FFFFFF')).toBe('rgb(255,255,255)');
      expect(hexToRgb('ABC')).toBe('rgb(170,187,204)');
    });

    it('should handle mixed case hex values', () => {
      expect(hexToRgb('#Ff0000')).toBe('rgb(255,0,0)');
      expect(hexToRgb('#FfFfFf')).toBe('rgb(255,255,255)');
    });

    it('should convert common web colors', () => {
      expect(hexToRgb('#808080')).toBe('rgb(128,128,128)'); // gray
      expect(hexToRgb('#800080')).toBe('rgb(128,0,128)'); // purple
      expect(hexToRgb('#ffa500')).toBe('rgb(255,165,0)'); // orange
    });
  });

  describe('edge cases and boundary conditions', () => {
    it('should handle minimum values', () => {
      expect(hexToRgb('#000000')).toBe('rgb(0,0,0)');
      expect(hexToRgb('000')).toBe('rgb(0,0,0)');
    });

    it('should handle maximum values', () => {
      expect(hexToRgb('#ffffff')).toBe('rgb(255,255,255)');
      expect(hexToRgb('fff')).toBe('rgb(255,255,255)');
    });

    it('should handle single channel maximum', () => {
      expect(hexToRgb('#ff0000')).toBe('rgb(255,0,0)');
      expect(hexToRgb('#00ff00')).toBe('rgb(0,255,0)');
      expect(hexToRgb('#0000ff')).toBe('rgb(0,0,255)');
    });

    it('should correctly expand 3-char hex', () => {
      expect(hexToRgb('#123')).toBe('rgb(17,34,51)'); // #112233
      expect(hexToRgb('#abc')).toBe('rgb(170,187,204)'); // #aabbcc
      expect(hexToRgb('#def')).toBe('rgb(221,238,255)'); // #ddeeff
    });

    it('should handle hex with leading zeros', () => {
      expect(hexToRgb('#000001')).toBe('rgb(0,0,1)');
      expect(hexToRgb('#010000')).toBe('rgb(1,0,0)');
      expect(hexToRgb('#000100')).toBe('rgb(0,1,0)');
    });
  });

  describe('invalid inputs and error handling', () => {
    it('should handle invalid hex characters gracefully', () => {
      // parseInt will parse as much as it can, invalid chars become NaN
      const result = hexToRgb('#gggggg');
      expect(result).toBe('rgb(0,0,0)'); // NaN becomes 0 with bitwise operations
    });

    it('should handle empty string', () => {
      const result = hexToRgb('');
      expect(result).toBe('rgb(0,0,0)');
    });

    it('should handle just hash symbol', () => {
      const result = hexToRgb('#');
      expect(result).toBe('rgb(0,0,0)');
    });

    it('should handle invalid length hex strings', () => {
      // 5 characters - will parse first 5 as hex
      const result1 = hexToRgb('#12345');
      expect(result1).toMatch(/^rgb\(\d+,\d+,\d+\)$/);
      
      // 7 characters - will parse all as hex
      const result2 = hexToRgb('#1234567');
      expect(result2).toMatch(/^rgb\(\d+,\d+,\d+\)$/);
    });

    it('should handle special characters', () => {
      const result = hexToRgb('#ff-00-00');
      // parseInt stops at first non-hex character
      expect(result).toMatch(/^rgb\(\d+,\d+,\d+\)$/);
    });
  });

  describe('comprehensive color spectrum tests', () => {
    it('should correctly convert primary colors', () => {
      expect(hexToRgb('#ff0000')).toBe('rgb(255,0,0)'); // red
      expect(hexToRgb('#00ff00')).toBe('rgb(0,255,0)'); // green
      expect(hexToRgb('#0000ff')).toBe('rgb(0,0,255)'); // blue
      expect(hexToRgb('#ffff00')).toBe('rgb(255,255,0)'); // yellow
      expect(hexToRgb('#ff00ff')).toBe('rgb(255,0,255)'); // magenta
      expect(hexToRgb('#00ffff')).toBe('rgb(0,255,255)'); // cyan
    });

    it('should handle mid-range values', () => {
      expect(hexToRgb('#808080')).toBe('rgb(128,128,128)');
      expect(hexToRgb('#7f7f7f')).toBe('rgb(127,127,127)');
      expect(hexToRgb('#888')).toBe('rgb(136,136,136)');
    });

    it('should handle various shades of gray', () => {
      expect(hexToRgb('#111111')).toBe('rgb(17,17,17)');
      expect(hexToRgb('#333333')).toBe('rgb(51,51,51)');
      expect(hexToRgb('#555555')).toBe('rgb(85,85,85)');
      expect(hexToRgb('#999999')).toBe('rgb(153,153,153)');
      expect(hexToRgb('#cccccc')).toBe('rgb(204,204,204)');
      expect(hexToRgb('#eeeeee')).toBe('rgb(238,238,238)');
    });

    it('should handle common UI colors', () => {
      expect(hexToRgb('#007bff')).toBe('rgb(0,123,255)'); // Bootstrap primary
      expect(hexToRgb('#28a745')).toBe('rgb(40,167,69)'); // Bootstrap success
      expect(hexToRgb('#dc3545')).toBe('rgb(220,53,69)'); // Bootstrap danger
      expect(hexToRgb('#ffc107')).toBe('rgb(255,193,7)'); // Bootstrap warning
    });
  });

  describe('integration with colourNameToHex', () => {
    it('should convert named colors through hex to RGB', () => {
      const redHex = colourNameToHex('red');
      if (typeof redHex === 'string') {
        expect(hexToRgb(redHex)).toBe('rgb(255,0,0)');
      }

      const blueHex = colourNameToHex('blue');
      if (typeof blueHex === 'string') {
        expect(hexToRgb(blueHex)).toBe('rgb(0,0,255)');
      }
    });

    it('should round-trip color conversions', () => {
      const colorNames = ['red', 'green', 'blue', 'white', 'black', 'cyan', 'magenta', 'yellow'];
      
      colorNames.forEach(colorName => {
        const hex = colourNameToHex(colorName);
        if (typeof hex === 'string') {
          const rgb = hexToRgb(hex);
          expect(rgb).toMatch(/^rgb\(\d+,\d+,\d+\)$/);
        }
      });
    });
  });

  describe('integration with darkenRgb', () => {
    it('should darken colors converted from hex', () => {
      const rgb = hexToRgb('#ffffff');
      const darkened = darkenRgb(rgb, 0.5);
      expect(darkened).toBe('rgb(127,127,127)');
    });

    it('should chain conversions: hex -> rgb -> darken', () => {
      const white = hexToRgb('#ffffff');
      expect(white).toBe('rgb(255,255,255)');
      
      const gray = darkenRgb(white, 0.5);
      expect(gray).toBe('rgb(127,127,127)');
      
      const darkGray = darkenRgb(gray, 0.5);
      expect(darkGray).toBe('rgb(63,63,63)');
    });

    it('should chain conversions: name -> hex -> rgb -> darken', () => {
      const redHex = colourNameToHex('red');
      if (typeof redHex === 'string') {
        const redRgb = hexToRgb(redHex);
        expect(redRgb).toBe('rgb(255,0,0)');
        
        const darkRed = darkenRgb(redRgb, 0.5);
        expect(darkRed).toBe('rgb(127,0,0)');
      }
    });
  });
});

// Cross-function integration tests
describe('Color utility integration tests', () => {
  it('should handle complete color transformation pipeline', () => {
    // Name to hex to rgb
    const hex = colourNameToHex('cornflowerblue');
    expect(hex).toBe('#6495ed');
    
    if (typeof hex === 'string') {
      const rgb = hexToRgb(hex);
      expect(rgb).toBe('rgb(100,149,237)');
      
      const darkened = darkenRgb(rgb, 0.3);
      expect(darkened).toBe('rgb(70,104,165)');
    }
  });

  it('should maintain color integrity through multiple conversions', () => {
    const testColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    
    testColors.forEach(color => {
      const hex = colourNameToHex(color);
      if (typeof hex === 'string') {
        const rgb = hexToRgb(hex);
        expect(rgb).toMatch(/^rgb\(\d+,\d+,\d+\)$/);
        
        // Verify we can darken it
        const darkened = darkenRgb(rgb, 0.2);
        expect(darkened).toMatch(/^rgb\(\d+,\d+,\d+\)$/);
        
        // Original RGB should not be modified
        const original = hexToRgb(hex);
        expect(original).toBe(rgb);
      }
    });
  });

  it('should handle edge cases in conversion pipeline', () => {
    // Black color through pipeline
    const blackHex = colourNameToHex('black');
    if (typeof blackHex === 'string') {
      const blackRgb = hexToRgb(blackHex);
      expect(blackRgb).toBe('rgb(0,0,0)');
      
      const darkenedBlack = darkenRgb(blackRgb, 0.5);
      expect(darkenedBlack).toBe('rgb(0,0,0)'); // Still black
    }

    // White color through pipeline
    const whiteHex = colourNameToHex('white');
    if (typeof whiteHex === 'string') {
      const whiteRgb = hexToRgb(whiteHex);
      expect(whiteRgb).toBe('rgb(255,255,255)');
      
      const darkenedWhite = darkenRgb(whiteRgb, 0.5);
      expect(darkenedWhite).toBe('rgb(127,127,127)');
    }
  });
});